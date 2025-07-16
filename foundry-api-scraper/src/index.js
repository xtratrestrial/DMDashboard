#!/usr/bin/env node

const { program } = require('commander');
const colors = require('colors');
const ora = require('ora');
const Scraper = require('./scraper');
const { loadConfig } = require('./utils');

async function main() {
  program
    .name('foundry-vtt-api-scraper')
    .description('Scrape Foundry VTT API documentation for offline use')
    .version('1.0.0')
    .option(
      '-u, --url <url>',
      'Base URL to scrape',
      'https://foundryvtt.com/api/'
    )
    .option('-o, --output <dir>', 'Output directory', './data')
    .option('-c, --concurrent <number>', 'Number of concurrent requests', '5')
    .option(
      '-d, --delay <ms>',
      'Delay between requests in milliseconds',
      '1000'
    )
    .option('-v, --verbose', 'Enable verbose logging')
    .option('--config <file>', 'Configuration file path')
    .parse();

  const options = program.opts();

  try {
    // Load configuration
    const config = await loadConfig(options.config);
    const finalConfig = { ...config, ...options };

    console.log(colors.blue('🚀 Foundry VTT API Scraper'));
    console.log(colors.gray('Starting scrape operation...\n'));

    const spinner = ora('Initializing scraper...').start();

    // Initialize scraper
    const scraper = new Scraper(finalConfig);

    spinner.text = 'Scraping API documentation...';

    // Start scraping
    const results = await scraper.scrape();

    spinner.succeed(colors.green('Scraping completed successfully!'));

    console.log(colors.green('\n✅ Scraping Results:'));
    console.log(colors.gray(`📄 Pages scraped: ${results.pagesScraped}`));
    console.log(colors.gray(`📁 Files saved: ${results.filesSaved}`));
    console.log(colors.gray(`⏱️  Duration: ${results.duration}ms`));
    console.log(colors.gray(`📂 Output directory: ${finalConfig.output}`));

    if (results.errors.length > 0) {
      console.log(
        colors.yellow(
          `\n⚠️  Warnings: ${results.errors.length} errors encountered`
        )
      );
      if (finalConfig.verbose) {
        results.errors.forEach(error => {
          console.log(colors.yellow(`  - ${error}`));
        });
      }
    }
  } catch (error) {
    console.error(colors.red('\n❌ Error:'), error.message);
    if (options.verbose) {
      console.error(colors.red('Stack trace:'), error.stack);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
