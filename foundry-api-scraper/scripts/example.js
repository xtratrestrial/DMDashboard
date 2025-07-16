#!/usr/bin/env node

const Scraper = require('../src/scraper');
const chalk = require('chalk');

async function runExample() {
  console.log(chalk.blue('🔍 Foundry VTT API Scraper Example\n'));

  // Example 1: Basic scraping
  console.log(chalk.yellow('Example 1: Basic scraping with default settings'));
  const scraper1 = new Scraper({
    baseUrl: 'https://foundryvtt.com/api/',
    outputDir: './data/example1',
    verbose: true,
    concurrentRequests: 2,
    delayBetweenRequests: 2000
  });

  try {
    const results1 = await scraper1.scrape();
    console.log(chalk.green('✅ Basic scraping completed:'));
    console.log(chalk.gray(`   Pages scraped: ${results1.pagesScraped}`));
    console.log(chalk.gray(`   Files saved: ${results1.filesSaved}`));
    console.log(chalk.gray(`   Duration: ${results1.duration}ms`));
  } catch (error) {
    console.error(chalk.red('❌ Basic scraping failed:'), error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Example 2: Scraping with Puppeteer (for JavaScript-heavy pages)
  console.log(chalk.yellow('Example 2: Scraping with Puppeteer for dynamic content'));
  const scraper2 = new Scraper({
    baseUrl: 'https://foundryvtt.com/api/',
    outputDir: './data/example2',
    verbose: true,
    usePuppeteer: true,
    concurrentRequests: 1, // Lower for Puppeteer
    delayBetweenRequests: 3000
  });

  try {
    const results2 = await scraper2.scrape();
    console.log(chalk.green('✅ Puppeteer scraping completed:'));
    console.log(chalk.gray(`   Pages scraped: ${results2.pagesScraped}`));
    console.log(chalk.gray(`   Files saved: ${results2.filesSaved}`));
    console.log(chalk.gray(`   Duration: ${results2.duration}ms`));
  } catch (error) {
    console.error(chalk.red('❌ Puppeteer scraping failed:'), error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Example 3: Custom configuration
  console.log(chalk.yellow('Example 3: Custom configuration with specific settings'));
  const scraper3 = new Scraper({
    baseUrl: 'https://foundryvtt.com/api/',
    outputDir: './data/example3',
    verbose: true,
    concurrentRequests: 3,
    delayBetweenRequests: 1500,
    maxPages: 10, // Limit to 10 pages for demo
    includeExamples: true,
    includeCodeBlocks: true,
    includeTables: true
  });

  try {
    const results3 = await scraper3.scrape();
    console.log(chalk.green('✅ Custom scraping completed:'));
    console.log(chalk.gray(`   Pages scraped: ${results3.pagesScraped}`));
    console.log(chalk.gray(`   Files saved: ${results3.filesSaved}`));
    console.log(chalk.gray(`   Duration: ${results3.duration}ms`));
  } catch (error) {
    console.error(chalk.red('❌ Custom scraping failed:'), error.message);
  }

  console.log(chalk.blue('\n🎉 All examples completed!'));
  console.log(chalk.gray('Check the data/example* directories for results.'));
}

if (require.main === module) {
  runExample().catch(console.error);
}

module.exports = { runExample }; 