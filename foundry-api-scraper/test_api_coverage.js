const axios = require('axios');
const fs = require('fs-extra');

// Test URLs that should exist based on your examples
const testUrls = [
  'https://foundryvtt.com/api/interfaces/CONFIG._FontDefinition.html',
  'https://foundryvtt.com/api/interfaces/foundry.documents.types.CardData.html',
  'https://foundryvtt.com/api/interfaces/foundry.applications.fields.SelectInputConfig.html',
  'https://foundryvtt.com/api/functions/foundry.applications.fields.createEditorInput.html',
  'https://foundryvtt.com/api/classes/foundry.documents.Actor.html',
  'https://foundryvtt.com/api/classes/foundry.documents.Item.html',
  'https://foundryvtt.com/api/classes/foundry.documents.Scene.html',
  'https://foundryvtt.com/api/classes/foundry.documents.Token.html',
  'https://foundryvtt.com/api/classes/foundry.canvas.Canvas.html',
  'https://foundryvtt.com/api/classes/foundry.applications.Application.html',
];

async function testApiCoverage() {
  console.log('Testing Foundry VTT API coverage...\n');

  const results = [];

  for (const url of testUrls) {
    try {
      console.log(`Testing: ${url}`);
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Foundry-VTT-API-Scraper/2.0.0',
        },
      });

      if (response.status === 200) {
        console.log(`✅ EXISTS: ${url}`);
        results.push({ url, status: 'exists', statusCode: response.status });
      } else {
        console.log(`❌ ERROR: ${url} (${response.status})`);
        results.push({ url, status: 'error', statusCode: response.status });
      }
    } catch (error) {
      console.log(`❌ FAILED: ${url} - ${error.message}`);
      results.push({ url, status: 'failed', error: error.message });
    }

    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n=== Coverage Summary ===');
  const existing = results.filter(r => r.status === 'exists').length;
  const total = results.length;
  console.log(`Found ${existing}/${total} API pages exist`);

  console.log('\nMissing pages:');
  results
    .filter(r => r.status !== 'exists')
    .forEach(r => {
      console.log(`  - ${r.url}`);
    });

  return results;
}

testApiCoverage().catch(console.error);
