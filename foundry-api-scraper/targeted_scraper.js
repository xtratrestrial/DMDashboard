const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

class TargetedScraper {
  constructor() {
    this.baseUrl = 'https://foundryvtt.com/api/';
    this.outputDir = './data';
    this.visitedUrls = new Set();
    this.results = {
      pagesScraped: 0,
      filesSaved: 0,
      errors: [],
    };
  }

  async scrape() {
    console.log('Starting targeted Foundry VTT API scraper with Puppeteer...');

    // Ensure output directory exists
    await fs.ensureDir(this.outputDir);

    // Start browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      // Start with specific URLs we know exist
      const targetUrls = [
        'https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.ActorDirectory.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Actor.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Item.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Scene.html',
        'https://foundryvtt.com/api/classes/foundry.canvas.Canvas.html',
        'https://foundryvtt.com/api/classes/foundry.applications.Application.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Token.html',
        'https://foundryvtt.com/api/classes/foundry.documents.ChatMessage.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Combat.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Folder.html',
        'https://foundryvtt.com/api/classes/foundry.documents.JournalEntry.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Macro.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Playlist.html',
        'https://foundryvtt.com/api/classes/foundry.documents.RollTable.html',
        'https://foundryvtt.com/api/classes/foundry.documents.User.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Setting.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Adventure.html',
        'https://foundryvtt.com/api/classes/foundry.documents.Cards.html',
        'https://foundryvtt.com/api/classes/foundry.documents.FogExploration.html',
      ];

      console.log(`Targeting ${targetUrls.length} specific API pages...`);

      for (let i = 0; i < targetUrls.length; i++) {
        const url = targetUrls[i];
        console.log(`Processing ${i + 1}/${targetUrls.length}: ${url}`);
        await this.scrapePage(browser, url);

        // Add delay to be respectful
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      console.log('Targeted scraping complete!');
      console.log(`Pages scraped: ${this.results.pagesScraped}`);
      console.log(`Files saved: ${this.results.filesSaved}`);
      console.log(`Errors: ${this.results.errors.length}`);
    } finally {
      await browser.close();
    }
  }

  async scrapePage(browser, url) {
    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Scraping: ${url}`);

    try {
      const page = await browser.newPage();

      // Set user agent
      await page.setUserAgent('Foundry-VTT-API-Scraper/2.0.0');

      // Navigate to the page
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for the content to load
      await page.waitForSelector('.tsd-panel-group', { timeout: 10000 });

      // Extract content using page.evaluate
      const content = await page.evaluate(() => {
        let markdown = '';

        // Get title
        const title = document.title || 'Foundry VTT API Documentation';
        markdown += `# ${title}\n\n`;

        // Get description
        const description = document.querySelector(
          '.tsd-panel-group .tsd-panel .tsd-typography p'
        );
        if (description) {
          markdown += `${description.textContent.trim()}\n\n`;
        }

        // Get hierarchy
        const hierarchy = document.querySelector('.tsd-hierarchy');
        if (hierarchy) {
          markdown += `## Hierarchy\n\n`;
          const hierarchyItems = hierarchy.querySelectorAll('ul li');
          hierarchyItems.forEach(item => {
            const text = item.textContent.trim();
            if (text) {
              markdown += `- ${text}\n`;
            }
          });
          markdown += '\n';
        }

        // Get all panel groups
        const panelGroups = document.querySelectorAll('.tsd-panel-group');
        panelGroups.forEach(group => {
          const groupTitle = group.querySelector('h3');
          if (groupTitle) {
            const titleText = groupTitle.textContent.trim();
            markdown += `## ${titleText}\n\n`;

            // Get index sections
            const indexSections = group.querySelectorAll(
              '.tsd-index-panel .tsd-index-section'
            );
            indexSections.forEach(section => {
              const sectionTitle = section.querySelector('h3');
              if (sectionTitle) {
                const sectionTitleText = sectionTitle.textContent.trim();
                markdown += `### ${sectionTitleText}\n\n`;
              }

              // Get list items
              const listItems = section.querySelectorAll('.tsd-index-list li');
              listItems.forEach(item => {
                const itemText = item.textContent.trim();
                if (itemText) {
                  markdown += `- ${itemText}\n`;
                }
              });
              markdown += '\n';
            });

            // Get detailed content
            const detailedPanels = group.querySelectorAll(
              '.tsd-panel .tsd-typography'
            );
            detailedPanels.forEach(panel => {
              const panelTitle = panel.querySelector('h3, h4');
              if (panelTitle) {
                const panelTitleText = panelTitle.textContent.trim();
                markdown += `### ${panelTitleText}\n\n`;
              }

              // Get description
              const desc = panel.querySelector('p');
              if (desc) {
                markdown += `${desc.textContent.trim()}\n\n`;
              }

              // Get signature
              const signature = panel.querySelector('.tsd-signature');
              if (signature) {
                markdown += `**Signature:** \`${signature.textContent.trim()}\`\n\n`;
              }

              // Get type signature
              const typeSignature = panel.querySelector('.tsd-type-signature');
              if (typeSignature) {
                markdown += `**Type:** \`${typeSignature.textContent.trim()}\`\n\n`;
              }

              // Get parameters
              const parameters = panel.querySelector('.tsd-parameters');
              if (parameters) {
                markdown += `**Parameters:**\n\n`;
                const params = parameters.querySelectorAll('li');
                params.forEach(param => {
                  const paramName = param.querySelector('.tsd-parameter-name');
                  const paramType = param.querySelector('.tsd-parameter-type');
                  const paramDesc = param.querySelector(
                    '.tsd-parameter-description'
                  );

                  let paramText = '';
                  if (paramName)
                    paramText += `\`${paramName.textContent.trim()}\``;
                  if (paramType)
                    paramText += `: ${paramType.textContent.trim()}`;
                  if (paramDesc)
                    paramText += ` - ${paramDesc.textContent.trim()}`;

                  if (paramText) {
                    markdown += `- ${paramText}\n`;
                  }
                });
                markdown += '\n';
              }

              // Get returns
              const returns = panel.querySelector('.tsd-returns');
              if (returns) {
                const returnType = returns.querySelector('.tsd-return-type');
                const returnDesc = returns.querySelector(
                  '.tsd-return-description'
                );

                let returnText = '';
                if (returnType)
                  returnText += `\`${returnType.textContent.trim()}\``;
                if (returnDesc)
                  returnText += ` - ${returnDesc.textContent.trim()}`;

                if (returnText) {
                  markdown += `**Returns:** ${returnText}\n\n`;
                }
              }

              // Get inherited from
              const inherited = panel.querySelector('.tsd-inherited-from');
              if (inherited) {
                markdown += `**Inherited from:** ${inherited.textContent.trim()}\n\n`;
              }

              // Get overrides
              const overrides = panel.querySelector('.tsd-overrides');
              if (overrides) {
                markdown += `**Overrides:** ${overrides.textContent.trim()}\n\n`;
              }

              // Get implementation
              const implementation = panel.querySelector('.tsd-implementation');
              if (implementation) {
                markdown += `**Implementation:** ${implementation.textContent.trim()}\n\n`;
              }

              markdown += '---\n\n';
            });
          }
        });

        return markdown;
      });

      // Add source URL
      const fullContent = `Source: ${url}\n\n${content}`;

      // Generate filename and save
      const filename = this.generateFilename(url);
      const filepath = path.join(this.outputDir, filename);

      await fs.writeFile(filepath, fullContent);
      console.log(`Saved: ${filename} (${fullContent.length} bytes)`);

      this.results.pagesScraped++;
      this.results.filesSaved++;

      await page.close();
    } catch (error) {
      const errorMsg = `Failed to scrape ${url}: ${error.message}`;
      this.results.errors.push(errorMsg);
      console.error(errorMsg);
    }
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
}

// Run the scraper
const scraper = new TargetedScraper();
scraper.scrape().catch(console.error);
