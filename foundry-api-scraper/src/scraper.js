console.log('Script started: src/scraper.js');

const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const { sanitizeFilename, extractLinks, parseApiContent } = require('./parser');
const { delay, createProgressBar, log } = require('./utils');

class Scraper {
  constructor(config = {}) {
    this.config = {
      baseUrl: 'https://foundryvtt.com/api/',
      outputDir: './data',
      concurrentRequests: 5,
      delayBetweenRequests: 1000,
      verbose: false,
      usePuppeteer: false,
      progressFile: './scraper-progress.json',
      ...config,
    };

    this.visitedUrls = new Set();
    this.queue = [];
    this.results = {
      pagesScraped: 0,
      filesSaved: 0,
      errors: [],
      duration: 0,
    };
  }

  async loadProgress() {
    try {
      if (await fs.pathExists(this.config.progressFile)) {
        const progress = await fs.readJson(this.config.progressFile);
        this.visitedUrls = new Set(progress.visitedUrls || []);
        this.queue = progress.queue || [];
        this.results = progress.results || this.results;

        console.log(`Resumed from progress file:`);
        console.log(`- Visited URLs: ${this.visitedUrls.size}`);
        console.log(`- Queue remaining: ${this.queue.length}`);
        console.log(`- Pages scraped: ${this.results.pagesScraped}`);
        console.log(`- Files saved: ${this.results.filesSaved}`);
        return true;
      }
    } catch (error) {
      console.log('No valid progress file found, starting fresh');
    }
    return false;
  }

  async saveProgress() {
    try {
      const progress = {
        visitedUrls: Array.from(this.visitedUrls),
        queue: this.queue,
        results: this.results,
        timestamp: new Date().toISOString(),
      };
      await fs.writeJson(this.config.progressFile, progress, { spaces: 2 });
    } catch (error) {
      console.error('Failed to save progress:', error.message);
    }
  }

  async scrape() {
    const startTime = Date.now();

    try {
      // Ensure output directory exists
      await fs.ensureDir(this.config.outputDir);

      // Load progress if exists
      const resumed = await this.loadProgress();

      // Initialize browser if using Puppeteer
      let browser = null;
      if (this.config.usePuppeteer) {
        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
      }

      console.log('--- SCRAPER START ---');
      console.log(`Base URL: ${this.config.baseUrl}`);
      console.log(`Output Dir: ${this.config.outputDir}`);
      console.log(`Verbose: ${this.config.verbose}`);
      console.log(`Resumed: ${resumed}`);
      console.log('---------------------');

      // Start with the main page if not resumed
      if (!resumed) {
        await this.scrapePage(this.config.baseUrl, browser);
      }

      // Process queue
      await this.processQueue(browser);

      // Close browser if used
      if (browser) {
        await browser.close();
      }

      this.results.duration = Date.now() - startTime;

      // Generate index
      await this.generateIndex();

      // Clean up progress file on successful completion
      await fs.remove(this.config.progressFile);

      console.log('--- SCRAPER COMPLETE ---');
      console.log(`Pages scraped: ${this.results.pagesScraped}`);
      console.log(`Files saved: ${this.results.filesSaved}`);
      console.log(`Errors: ${this.results.errors.length}`);
      console.log(`Duration: ${this.results.duration}ms`);

      return this.results;
    } catch (error) {
      this.results.errors.push(`Scraping failed: ${error.message}`);
      // Save progress on error so it can be resumed
      await this.saveProgress();
      throw error;
    }
  }

  async scrapePage(url, browser = null) {
    // Skip any URL with a hash/fragment
    if (url.includes('#')) {
      return;
    }

    // Only scrape URLs within the /api/ path
    if (!url.includes('/api/')) {
      return;
    }

    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);

    try {
      log(`Scraping: ${url}`, this.config.verbose);
      if (this.config.verbose) console.log(`[SCRAPE] ${url}`);

      let html;
      if (browser) {
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        html = await page.content();
        await page.close();
      } else {
        const response = await axios.get(url, {
          timeout: 30000,
          headers: {
            'User-Agent': 'Foundry-VTT-API-Scraper/1.0.0',
          },
        });
        html = response.data;
      }

      // Parse content
      const content = await parseApiContent(html, url);

      // Save content
      await this.saveContent(content, url);

      // Extract and queue new links
      const links = extractLinks(html, this.config.baseUrl);
      if (this.config.verbose)
        console.log(`[LINKS] Found ${links.length} links on ${url}`);
      for (const link of links) {
        if (!this.visitedUrls.has(link)) {
          this.queue.push(link);
        }
      }

      this.results.pagesScraped++;

      // Add delay between requests
      if (this.config.delayBetweenRequests > 0) {
        await delay(this.config.delayBetweenRequests);
      }
    } catch (error) {
      const errorMsg = `Failed to scrape ${url}: ${error.message}`;
      this.results.errors.push(errorMsg);
      log(errorMsg, this.config.verbose);
      if (this.config.verbose) console.error(`[ERROR] ${errorMsg}`);
    }
  }

  async processQueue(browser = null) {
    const progressBar = createProgressBar(
      this.queue.length,
      'Processing queue'
    );
    let batchNum = 0;
    let lastSaveTime = Date.now();

    while (this.queue.length > 0) {
      const batch = this.queue.splice(0, this.config.concurrentRequests);
      batchNum++;
      if (this.config.verbose)
        console.log(`[QUEUE] Batch ${batchNum}: ${batch.length} URLs`);

      await Promise.all(batch.map(url => this.scrapePage(url, browser)));

      progressBar.tick(batch.length);
      if (this.config.verbose)
        console.log(`[QUEUE] Remaining: ${this.queue.length}`);

      // Save progress every 30 seconds
      const now = Date.now();
      if (now - lastSaveTime > 30000) {
        await this.saveProgress();
        lastSaveTime = now;
      }
    }

    progressBar.stop();
  }

  async saveContent(content, url) {
    try {
      const filename = sanitizeFilename(url);

      // Determine if this is a subpage (has specific class/method info)
      const isSubpage = this.isSubpage(url, content);

      if (isSubpage) {
        // Save to docs/ subdirectory for modular reference
        const docsDir = path.join(this.config.outputDir, 'docs');
        await fs.ensureDir(docsDir);
        const filepath = path.join(docsDir, `${filename}.md`);
        await fs.writeFile(filepath, content, 'utf8');
        if (this.config.verbose) console.log(`[SAVE] Subpage: ${filepath}`);

        this.results.filesSaved++;
      } else {
        // Save to main directory only
        const filepath = path.join(this.config.outputDir, `${filename}.md`);
        await fs.ensureDir(path.dirname(filepath));
        await fs.writeFile(filepath, content, 'utf8');
        if (this.config.verbose) console.log(`[SAVE] Main: ${filepath}`);

        this.results.filesSaved++;
      }
    } catch (error) {
      const errorMsg = `Failed to save content for ${url}: ${error.message}`;
      this.results.errors.push(errorMsg);
      log(errorMsg, this.config.verbose);
      if (this.config.verbose) console.error(`[ERROR] ${errorMsg}`);
    }
  }

  isSubpage(url, content) {
    // Check if URL contains specific class/method patterns
    const subpagePatterns = [
      /foundry\.documents\.\w+/,
      /foundry\.canvas\.\w+/,
      /foundry\.applications\.\w+/,
      /foundry\.dice\.\w+/,
      /foundry\.audio\.\w+/,
      /foundry\.av\.\w+/,
      /foundry\.helpers\.\w+/,
    ];

    return (
      subpagePatterns.some(pattern => pattern.test(url)) ||
      content.includes('## Class:') ||
      content.includes('## Method:') ||
      content.includes('## Property:')
    );
  }

  async generateIndex() {
    try {
      const indexPath = path.join(this.config.outputDir, 'index.md');
      const docsIndexPath = path.join(
        this.config.outputDir,
        'docs',
        'index.md'
      );

      // Read main directory files
      const mainFiles = await fs.readdir(this.config.outputDir);

      // Read docs directory files
      const docsDir = path.join(this.config.outputDir, 'docs');
      let docsFiles = [];
      try {
        docsFiles = await fs.readdir(docsDir);
      } catch (error) {
        // docs directory might not exist yet
      }

      let indexContent = '# Foundry VTT API Documentation Index\n\n';
      indexContent += `Generated on: ${new Date().toISOString()}\n\n`;
      indexContent += `Total pages: ${this.results.pagesScraped}\n\n`;

      // Group main files by category
      const mainCategories = {};
      for (const file of mainFiles) {
        if (file.endsWith('.md') && file !== 'index.md' && file !== 'docs') {
          const category = this.getCategoryFromFilename(file);
          if (!mainCategories[category]) {
            mainCategories[category] = [];
          }
          mainCategories[category].push(file);
        }
      }

      // Group docs files by category
      const docsCategories = {};
      for (const file of docsFiles) {
        if (file.endsWith('.md') && file !== 'index.md') {
          const category = this.getCategoryFromFilename(file);
          if (!docsCategories[category]) {
            docsCategories[category] = [];
          }
          docsCategories[category].push(file);
        }
      }

      // Generate main index
      if (Object.keys(mainCategories).length > 0) {
        indexContent += '## Main Pages\n\n';
        for (const [category, files] of Object.entries(mainCategories)) {
          indexContent += `### ${category}\n\n`;
          for (const file of files.sort()) {
            const name = file.replace('.md', '');
            indexContent += `- [${name}](${file})\n`;
          }
          indexContent += '\n';
        }
      }

      // Generate docs index
      if (Object.keys(docsCategories).length > 0) {
        await fs.ensureDir(docsDir);
        let docsIndexContent = '# Foundry VTT API Documentation - Subpages\n\n';
        docsIndexContent += `Generated on: ${new Date().toISOString()}\n\n`;

        for (const [category, files] of Object.entries(docsCategories)) {
          docsIndexContent += `## ${category}\n\n`;
          for (const file of files.sort()) {
            const name = file.replace('.md', '');
            docsIndexContent += `- [${name}](${file})\n`;
          }
          docsIndexContent += '\n';
        }

        await fs.writeFile(docsIndexPath, docsIndexContent, 'utf8');

        // Add link to docs index in main index
        indexContent += '## API Reference\n\n';
        indexContent += '- [API Classes and Methods](docs/index.md)\n\n';
      }

      await fs.writeFile(indexPath, indexContent, 'utf8');
    } catch (error) {
      const errorMsg = `Failed to generate index: ${error.message}`;
      this.results.errors.push(errorMsg);
      log(errorMsg, this.config.verbose);
    }
  }

  getCategoryFromFilename(filename) {
    // Extract category from filename based on Foundry VTT API structure
    const name = filename.replace('.md', '');

    if (name.includes('foundry.documents')) return 'Documents';
    if (name.includes('foundry.canvas')) return 'Canvas';
    if (name.includes('foundry.applications')) return 'Applications';
    if (name.includes('foundry.dice')) return 'Dice';
    if (name.includes('foundry.audio')) return 'Audio';
    if (name.includes('foundry.av')) return 'Audio/Video';
    if (name.includes('foundry.helpers')) return 'Helpers';
    if (name.includes('foundry.abstract')) return 'Abstract Classes';

    return 'Other';
  }
}

module.exports = Scraper;

// Add this at the end of the file to allow direct execution
if (require.main === module) {
  // Parse CLI args for verbose
  const argv = process.argv.slice(2);
  const verbose = argv.includes('--verbose');
  const config = { verbose };
  const Scraper = module.exports;
  const scraper = new Scraper(config);
  scraper.scrape().catch(err => {
    console.error('Fatal error in scraper:', err);
    process.exit(1);
  });
}
