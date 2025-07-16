#!/usr/bin/env node

const Scraper = require('../src/scraper');
const { parseApiContent } = require('../src/parser');
const axios = require('axios');
const colors = require('colors');
const fs = require('fs-extra');
const path = require('path');

async function testSingleUrl() {
  console.log(colors.blue('🧪 Testing Single URL Scraper\n'));

  // Test URL - you can change this to any Foundry VTT API page
  const testUrl = 'https://foundryvtt.com/api/';

  console.log(colors.yellow(`Testing URL: ${testUrl}\n`));

  try {
    // Step 1: Fetch the page
    console.log(colors.cyan('📡 Fetching page...'));
    const response = await axios.get(testUrl, {
      timeout: 30000,
      headers: {
        'User-Agent': 'Foundry-VTT-API-Scraper/1.0.0',
      },
    });

    console.log(colors.green('✅ Page fetched successfully'));
    console.log(colors.gray(`   Status: ${response.status}`));
    console.log(
      colors.gray(`   Size: ${(response.data.length / 1024).toFixed(2)} KB`)
    );

    // Step 2: Parse the content
    console.log(colors.cyan('\n🔍 Parsing content...'));
    const parsedContent = await parseApiContent(response.data, testUrl);

    console.log(colors.green('✅ Content parsed successfully'));
    console.log(
      colors.gray(
        `   Parsed size: ${(parsedContent.length / 1024).toFixed(2)} KB`
      )
    );

    // Step 3: Save to file
    const outputDir = './data/test-output';
    await fs.ensureDir(outputDir);

    const filename = 'single-url-test.md';
    const filepath = path.join(outputDir, filename);

    await fs.writeFile(filepath, parsedContent, 'utf8');

    console.log(colors.green('✅ Content saved to file'));
    console.log(colors.gray(`   File: ${filepath}`));

    // Step 4: Show preview
    console.log(colors.cyan('\n📄 Content Preview:'));
    console.log(colors.gray('─'.repeat(80)));

    const preview = parsedContent.substring(0, 1000);
    console.log(preview);

    if (parsedContent.length > 1000) {
      console.log(colors.gray('\n... (truncated)'));
    }

    console.log(colors.gray('─'.repeat(80)));

    // Step 5: Show statistics
    console.log(colors.cyan('\n📊 Statistics:'));
    const lines = parsedContent.split('\n').length;
    const words = parsedContent.split(/\s+/).length;
    const codeBlocks = (parsedContent.match(/```/g) || []).length / 2;

    console.log(colors.gray(`   Lines: ${lines}`));
    console.log(colors.gray(`   Words: ${words}`));
    console.log(colors.gray(`   Code blocks: ${codeBlocks}`));
    console.log(
      colors.gray(
        `   File size: ${(parsedContent.length / 1024).toFixed(2)} KB`
      )
    );

    console.log(colors.green('\n🎉 Test completed successfully!'));
    console.log(colors.gray(`Check the full output at: ${filepath}`));
  } catch (error) {
    console.error(colors.red('\n❌ Test failed:'), error.message);

    if (error.response) {
      console.error(colors.red('Response status:'), error.response.status);
      console.error(colors.red('Response headers:'), error.response.headers);
    }

    process.exit(1);
  }
}

// Allow command line argument for custom URL
const customUrl = process.argv[2];
if (customUrl) {
  console.log(colors.yellow(`Using custom URL: ${customUrl}`));
  // You can modify the testUrl here if needed
}

if (require.main === module) {
  testSingleUrl();
}

module.exports = { testSingleUrl };
