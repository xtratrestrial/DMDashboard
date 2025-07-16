const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

class SimpleIndexScraper {
  constructor() {
    this.baseUrl = 'https://foundryvtt.com/api/';
    this.outputDir = './index';
    this.index = {
      classes: [],
      interfaces: [],
      functions: [],
      types: [],
      modules: [],
      namespaces: [],
      globals: [],
      lastUpdated: new Date().toISOString(),
    };
  }

  async scrape() {
    console.log('Starting Simple Foundry VTT API Index scraper...');

    // Ensure output directory exists
    await fs.ensureDir(this.outputDir);

    // Start browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      // Start with the main API index page
      const mainIndexUrl = 'https://foundryvtt.com/api/';
      console.log('Scraping main API index...');

      const page = await browser.newPage();
      await page.setUserAgent('Foundry-VTT-API-Index-Scraper/1.0.0');

      // Navigate to the page
      await page.goto(mainIndexUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // Wait a bit for any dynamic content
      await page.waitForTimeout(3000);

      // Extract all API endpoints
      const endpoints = await page.evaluate(() => {
        const results = {
          classes: [],
          interfaces: [],
          functions: [],
          types: [],
          modules: [],
          namespaces: [],
          globals: [],
        };

        // Get all links on the page
        const allLinks = document.querySelectorAll('a[href]');
        const foundLinks = [];

        allLinks.forEach(link => {
          const href = link.getAttribute('href');
          const text = link.textContent.trim();

          if (href && text && text.length > 0) {
            foundLinks.push({
              href: href,
              text: text,
            });
          }
        });

        console.log(`Found ${foundLinks.length} total links`);

        // Process each link
        foundLinks.forEach(link => {
          const href = link.href;
          const text = link.text;

          // Skip external links, anchors, and non-API links
          if (href.startsWith('http') && !href.includes('foundryvtt.com/api/'))
            return;
          if (href.startsWith('#')) return;
          if (href.startsWith('mailto:')) return;

          // Normalize URL
          let url = href;
          if (href.startsWith('./')) {
            url = href.replace(/^\.\//, '');
          } else if (href.startsWith('/api/')) {
            url = href.replace(/^\/api\//, '');
          } else if (href.includes('/api/')) {
            url = href.split('/api/')[1];
          }

          // Skip if not a valid API path
          if (!url || url.includes('http') || url.includes('mailto:')) return;

          // Categorize based on URL pattern and text
          if (
            url.includes('/classes/') ||
            text.includes('Class') ||
            text.includes('class')
          ) {
            results.classes.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'class',
            });
          } else if (
            url.includes('/interfaces/') ||
            text.includes('Interface') ||
            text.includes('interface')
          ) {
            results.interfaces.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'interface',
            });
          } else if (
            url.includes('/functions/') ||
            text.includes('Function') ||
            text.includes('function')
          ) {
            results.functions.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'function',
            });
          } else if (
            url.includes('/types/') ||
            text.includes('Type') ||
            text.includes('type')
          ) {
            results.types.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'type',
            });
          } else if (
            url.includes('/modules/') ||
            text.includes('Module') ||
            text.includes('module')
          ) {
            results.modules.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'module',
            });
          } else if (
            url.includes('/namespaces/') ||
            text.includes('Namespace') ||
            text.includes('namespace')
          ) {
            results.namespaces.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'namespace',
            });
          } else if (url.includes('.html') || url.includes('/')) {
            // Default to globals for any other API links
            results.globals.push({
              name: text,
              url: `https://foundryvtt.com/api/${url}`,
              path: url,
              category: 'global',
            });
          }
        });

        return results;
      });

      // Merge results
      Object.keys(endpoints).forEach(category => {
        this.index[category] = endpoints[category];
      });

      await page.close();

      // Generate comprehensive index
      await this.generateIndexFiles();

      console.log('API Index scraping complete!');
      console.log(`Classes: ${this.index.classes.length}`);
      console.log(`Interfaces: ${this.index.interfaces.length}`);
      console.log(`Functions: ${this.index.functions.length}`);
      console.log(`Types: ${this.index.types.length}`);
      console.log(`Modules: ${this.index.modules.length}`);
      console.log(`Namespaces: ${this.index.namespaces.length}`);
      console.log(`Globals: ${this.index.globals.length}`);
    } finally {
      await browser.close();
    }
  }

  async generateIndexFiles() {
    // Generate main index file
    const mainIndex = this.generateMainIndex();
    await fs.writeFile(path.join(this.outputDir, 'api_index.md'), mainIndex);

    // Generate categorized index files
    await this.generateCategoryIndex('classes', this.index.classes);
    await this.generateCategoryIndex('interfaces', this.index.interfaces);
    await this.generateCategoryIndex('functions', this.index.functions);
    await this.generateCategoryIndex('types', this.index.types);
    await this.generateCategoryIndex('modules', this.index.modules);
    await this.generateCategoryIndex('namespaces', this.index.namespaces);
    await this.generateCategoryIndex('globals', this.index.globals);

    // Generate JSON index for programmatic access
    await fs.writeFile(
      path.join(this.outputDir, 'api_index.json'),
      JSON.stringify(this.index, null, 2)
    );
  }

  generateMainIndex() {
    let content = `# Foundry VTT API Index\n\n`;
    content += `Generated: ${this.index.lastUpdated}\n\n`;
    content += `This index provides a comprehensive reference to all Foundry VTT API endpoints.\n\n`;

    content += `## Summary\n\n`;
    content += `- **Classes**: ${this.index.classes.length} endpoints\n`;
    content += `- **Interfaces**: ${this.index.interfaces.length} endpoints\n`;
    content += `- **Functions**: ${this.index.functions.length} endpoints\n`;
    content += `- **Types**: ${this.index.types.length} endpoints\n`;
    content += `- **Modules**: ${this.index.modules.length} endpoints\n`;
    content += `- **Namespaces**: ${this.index.namespaces.length} endpoints\n`;
    content += `- **Globals**: ${this.index.globals.length} endpoints\n\n`;

    content += `## Quick Reference\n\n`;

    // Add top-level categories
    Object.keys(this.index).forEach(category => {
      if (category === 'lastUpdated') return;

      const items = this.index[category];
      if (items.length > 0) {
        content += `### ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n`;
        items.slice(0, 10).forEach(item => {
          content += `- [${item.name}](${item.url})\n`;
        });
        if (items.length > 10) {
          content += `- ... and ${items.length - 10} more (see [${category}_index.md](./${category}_index.md))\n`;
        }
        content += '\n';
      }
    });

    return content;
  }

  async generateCategoryIndex(category, items) {
    if (items.length === 0) return;

    let content = `# Foundry VTT API ${category.charAt(0).toUpperCase() + category.slice(1)} Index\n\n`;
    content += `Generated: ${this.index.lastUpdated}\n\n`;
    content += `Total ${category}: ${items.length}\n\n`;

    // Group by namespace/module
    const grouped = this.groupByNamespace(items);

    Object.keys(grouped).forEach(namespace => {
      const namespaceItems = grouped[namespace];
      content += `## ${namespace}\n\n`;

      namespaceItems.forEach(item => {
        content += `### [${item.name}](${item.url})\n\n`;
        content += `**Path**: \`${item.path}\`\n`;
        content += `**Category**: ${item.category}\n`;
        content += `**URL**: ${item.url}\n\n`;
      });
    });

    await fs.writeFile(
      path.join(this.outputDir, `${category}_index.md`),
      content
    );
  }

  groupByNamespace(items) {
    const grouped = {};

    items.forEach(item => {
      // Extract namespace from path
      const pathParts = item.path.split('/');
      let namespace = 'Global';

      if (pathParts.length > 1) {
        namespace = pathParts[0];
        // Clean up namespace name
        namespace = namespace
          .replace(/\./g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
      }

      if (!grouped[namespace]) {
        grouped[namespace] = [];
      }

      grouped[namespace].push(item);
    });

    return grouped;
  }
}

// Run the scraper
const scraper = new SimpleIndexScraper();
scraper.scrape().catch(console.error);
