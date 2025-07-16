#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

async function setup() {
  console.log(chalk.blue('🚀 Setting up Foundry VTT API Scraper...\n'));

  try {
    // Create necessary directories
    const dirs = [
      'data',
      'docs', 
      'scripts',
      'tests',
      'src'
    ];

    for (const dir of dirs) {
      await fs.ensureDir(dir);
      console.log(chalk.green(`✅ Created directory: ${dir}`));
    }

    // Install dependencies
    console.log(chalk.yellow('\n📦 Installing dependencies...'));
    execSync('npm install', { stdio: 'inherit' });

    // Create example test file
    const testFile = path.join('tests', 'scraper.test.js');
    if (!await fs.pathExists(testFile)) {
      await fs.writeFile(testFile, `const Scraper = require('../src/scraper');

describe('Scraper', () => {
  test('should initialize with default config', () => {
    const scraper = new Scraper();
    expect(scraper.config.baseUrl).toBe('https://foundryvtt.com/api/');
  });
});
`);
      console.log(chalk.green('✅ Created test file'));
    }

    // Create .env.example
    const envExample = path.join('.env.example');
    if (!await fs.pathExists(envExample)) {
      await fs.writeFile(envExample, `# Foundry VTT API Scraper Configuration
BASE_URL=https://foundryvtt.com/api/
OUTPUT_DIR=./data
CONCURRENT_REQUESTS=5
DELAY_BETWEEN_REQUESTS=1000
VERBOSE=false
USE_PUPPETEER=false
`);
      console.log(chalk.green('✅ Created .env.example'));
    }

    console.log(chalk.green('\n🎉 Setup completed successfully!'));
    console.log(chalk.gray('\nNext steps:'));
    console.log(chalk.gray('1. Run: npm start'));
    console.log(chalk.gray('2. Check the data/ directory for scraped content'));
    console.log(chalk.gray('3. Run tests: npm test'));

  } catch (error) {
    console.error(chalk.red('\n❌ Setup failed:'), error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  setup();
}

module.exports = { setup }; 