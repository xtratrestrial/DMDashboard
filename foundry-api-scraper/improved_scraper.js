const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');

class ImprovedScraper {
  constructor() {
    this.baseUrl = 'https://foundryvtt.com/api/';
    this.outputDir = './data';
    this.visitedUrls = new Set();
    this.queue = [];
    this.results = {
      pagesScraped: 0,
      filesSaved: 0,
      errors: [],
    };
  }

  async scrape() {
    console.log('Starting improved Foundry VTT API scraper...');

    // Ensure output directory exists
    await fs.ensureDir(this.outputDir);

    // Start with the main API page
    await this.scrapePage(this.baseUrl);

    // Process queue
    await this.processQueue();

    console.log('Scraping complete!');
    console.log(`Pages scraped: ${this.results.pagesScraped}`);
    console.log(`Files saved: ${this.results.filesSaved}`);
    console.log(`Errors: ${this.results.errors.length}`);
  }

  async scrapePage(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Scraping: ${url}`);

    try {
      const response = await axios.get(url, {
        timeout: 30000,
        headers: {
          'User-Agent': 'Foundry-VTT-API-Scraper/2.0.0',
        },
      });

      const html = response.data;
      const $ = cheerio.load(html);

      // Extract and save content
      await this.saveContent($, url);

      // Extract "On This Page" links from tsd-accordian-details
      const onThisPageLinks = this.extractOnThisPageLinks($, url);
      console.log(`Found ${onThisPageLinks.length} "On This Page" links`);

      // Extract regular navigation links
      const navLinks = this.extractNavigationLinks($, url);
      console.log(`Found ${navLinks.length} navigation links`);

      // Add all links to queue
      const allLinks = [...onThisPageLinks, ...navLinks];
      for (const link of allLinks) {
        if (!this.visitedUrls.has(link) && this.shouldScrape(link)) {
          this.queue.push(link);
        }
      }

      this.results.pagesScraped++;
    } catch (error) {
      const errorMsg = `Failed to scrape ${url}: ${error.message}`;
      this.results.errors.push(errorMsg);
      console.error(errorMsg);
    }
  }

  extractOnThisPageLinks($, baseUrl) {
    const links = [];

    // Look for tsd-accordian-details elements
    $('.tsd-accordian-details').each((i, element) => {
      const $element = $(element);

      // Find all links within this section
      $element.find('a[href]').each((j, link) => {
        const href = $(link).attr('href');
        if (href) {
          try {
            const absoluteUrl = new URL(href, baseUrl).href;
            if (absoluteUrl.includes('/api/')) {
              links.push(absoluteUrl);
            }
          } catch (error) {
            // Skip invalid URLs
          }
        }
      });
    });

    // Also look for "On This Page" sections more broadly
    $('h3, h4, h5').each((i, element) => {
      const text = $(element).text().toLowerCase();
      if (text.includes('on this page') || text.includes('contents')) {
        const $section = $(element).nextUntil('h3, h4, h5');
        $section.find('a[href]').each((j, link) => {
          const href = $(link).attr('href');
          if (href) {
            try {
              const absoluteUrl = new URL(href, baseUrl).href;
              if (absoluteUrl.includes('/api/')) {
                links.push(absoluteUrl);
              }
            } catch (error) {
              // Skip invalid URLs
            }
          }
        });
      }
    });

    return [...new Set(links)]; // Remove duplicates
  }

  extractNavigationLinks($, baseUrl) {
    const links = [];

    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          if (absoluteUrl.includes('/api/') && !absoluteUrl.includes('#')) {
            links.push(absoluteUrl);
          }
        } catch (error) {
          // Skip invalid URLs
        }
      }
    });

    return [...new Set(links)]; // Remove duplicates
  }

  shouldScrape(url) {
    // Only scrape API URLs
    if (!url.includes('/api/')) {
      return false;
    }

    // Skip fragment-only URLs
    if (url.includes('#') && !url.includes('foundryvtt.com')) {
      return false;
    }

    // Skip certain file types
    const skipExtensions = ['.css', '.js', '.png', '.jpg', '.gif', '.ico'];
    for (const ext of skipExtensions) {
      if (url.endsWith(ext)) {
        return false;
      }
    }

    return true;
  }

  async saveContent($, url) {
    // Remove unwanted elements
    $('script, style, nav, footer, .sidebar, .tsd-signature').remove();

    // Extract title
    const title = $('title').text().trim() || 'Foundry VTT API Documentation';

    // Extract main content
    let mainContent = $(
      'main, .content, #content, .main-content, .tsd-page-toolbar'
    ).first();
    if (mainContent.length === 0) {
      mainContent = $('body');
    }

    let content = `# ${title}\n\n`;
    content += `Source: ${url}\n\n`;

    // Process headings and content
    mainContent
      .find('h1, h2, h3, h4, h5, h6, p, pre, code, ul, ol, table, .tsd-panel')
      .each((i, element) => {
        const $el = $(element);
        const tagName = element.tagName.toLowerCase();

        switch (tagName) {
          case 'h1':
            content += `\n# ${$el.text().trim()}\n\n`;
            break;
          case 'h2':
            content += `\n## ${$el.text().trim()}\n\n`;
            break;
          case 'h3':
            content += `\n### ${$el.text().trim()}\n\n`;
            break;
          case 'h4':
            content += `\n#### ${$el.text().trim()}\n\n`;
            break;
          case 'h5':
            content += `\n##### ${$el.text().trim()}\n\n`;
            break;
          case 'h6':
            content += `\n###### ${$el.text().trim()}\n\n`;
            break;
          case 'p':
            const text = $el.text().trim();
            if (text) {
              content += `${text}\n\n`;
            }
            break;
          case 'pre':
            const code = $el.text().trim();
            if (code) {
              content += `\`\`\`javascript\n${code}\n\`\`\`\n\n`;
            }
            break;
          case 'code':
            const inlineCode = $el.text().trim();
            if (inlineCode) {
              content += `\`${inlineCode}\``;
            }
            break;
          case 'ul':
          case 'ol':
            $el.find('li').each((j, li) => {
              const listItem = $(li).text().trim();
              if (listItem) {
                content += `- ${listItem}\n`;
              }
            });
            content += '\n';
            break;
          case 'table':
            content += this.parseTable($el);
            break;
          default:
            // Handle tsd-panel and other elements
            if ($el.hasClass('tsd-panel')) {
              const panelText = $el.text().trim();
              if (panelText) {
                content += `${panelText}\n\n`;
              }
            }
            break;
        }
      });

    // Generate filename
    const filename = this.generateFilename(url);
    const filepath = path.join(this.outputDir, filename);

    await fs.writeFile(filepath, content);
    console.log(`Saved: ${filename}`);
    this.results.filesSaved++;
  }

  parseTable($table) {
    let tableContent = '\n';

    $table.find('tr').each((i, row) => {
      const $row = $(row);
      const cells = [];

      $row.find('td, th').each((j, cell) => {
        const cellText = $(cell).text().trim();
        cells.push(cellText);
      });

      if (cells.length > 0) {
        if (i === 0) {
          // Header row
          tableContent += `| ${cells.join(' | ')} |\n`;
          tableContent += `| ${cells.map(() => '---').join(' | ')} |\n`;
        } else {
          // Data row
          tableContent += `| ${cells.join(' | ')} |\n`;
        }
      }
    });

    return tableContent + '\n';
  }

  generateFilename(url) {
    // Extract path from URL
    const urlObj = new URL(url);
    let pathname = urlObj.pathname;

    // Remove leading /api/
    pathname = pathname.replace(/^\/api\//, '');

    // Replace slashes and special characters
    let filename = pathname
      .replace(/\//g, '_')
      .replace(/\./g, '_')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');

    // Add .md extension
    if (!filename.endsWith('.md')) {
      filename += '.md';
    }

    return filename;
  }

  async processQueue() {
    console.log(`Processing queue of ${this.queue.length} URLs...`);

    for (let i = 0; i < this.queue.length; i++) {
      const url = this.queue[i];
      console.log(`Processing ${i + 1}/${this.queue.length}: ${url}`);

      await this.scrapePage(url);

      // Add delay to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Run the scraper
const scraper = new ImprovedScraper();
scraper.scrape().catch(console.error);
