#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const colors = require('colors');

async function generateIndex(docsDir, outputFile) {
  try {
    console.log(colors.blue('📚 Generating Documentation Index'));

    if (!(await fs.pathExists(docsDir))) {
      console.log(colors.yellow(`⚠️  Docs directory not found: ${docsDir}`));
      return;
    }

    const files = await fs.readdir(docsDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    if (mdFiles.length === 0) {
      console.log(colors.yellow(`⚠️  No Markdown files found in ${docsDir}`));
      return;
    }

    // Group files by category
    const categories = {
      Documents: [],
      Canvas: [],
      Applications: [],
      Dice: [],
      Audio: [],
      'Audio/Video': [],
      Helpers: [],
      'Abstract Classes': [],
      Other: [],
    };

    for (const file of mdFiles) {
      const category = getCategoryFromFilename(file);
      if (categories[category]) {
        categories[category].push(file);
      } else {
        categories['Other'].push(file);
      }
    }

    // Generate index content
    let indexContent = `# Foundry VTT API Documentation Index\n\n`;
    indexContent += `Generated on: ${new Date().toISOString()}\n\n`;
    indexContent += `Total files: ${mdFiles.length}\n\n`;

    // Add links by category
    for (const [category, files] of Object.entries(categories)) {
      if (files.length > 0) {
        indexContent += `## ${category}\n\n`;

        for (const file of files.sort()) {
          const name = file.replace('.md', '');
          const displayName = formatDisplayName(name);
          indexContent += `- [${displayName}](docs/${file})\n`;
        }

        indexContent += '\n';
      }
    }

    // Add statistics
    indexContent += `## Statistics\n\n`;
    for (const [category, files] of Object.entries(categories)) {
      if (files.length > 0) {
        indexContent += `- **${category}**: ${files.length} files\n`;
      }
    }

    // Write index file
    await fs.writeFile(outputFile, indexContent, 'utf8');

    console.log(colors.green(`✅ Generated index: ${outputFile}`));
    console.log(colors.gray(`   Total files indexed: ${mdFiles.length}`));

    // Show category breakdown
    console.log(colors.cyan('\n📊 Category Breakdown:'));
    for (const [category, files] of Object.entries(categories)) {
      if (files.length > 0) {
        console.log(colors.gray(`   ${category}: ${files.length} files`));
      }
    }
  } catch (error) {
    console.error(colors.red('❌ Error generating index:'), error.message);
  }
}

function getCategoryFromFilename(filename) {
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

function formatDisplayName(filename) {
  // Convert filename to readable display name
  return filename
    .replace(/foundry\./g, '')
    .replace(/\./g, ' → ')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(colors.blue('📚 Documentation Index Generator'));
    console.log(
      colors.gray(
        'Usage: node scripts/generate-index.js [docs-dir] [output-file]'
      )
    );
    console.log(colors.gray('Examples:'));
    console.log(colors.gray('  node scripts/generate-index.js'));
    console.log(
      colors.gray('  node scripts/generate-index.js data/docs data/index.md')
    );
    return;
  }

  const docsDir = args[0] || 'data/docs';
  const outputFile = args[1] || 'data/docs-index.md';

  await generateIndex(docsDir, outputFile);
}

if (require.main === module) {
  main();
}

module.exports = { generateIndex, getCategoryFromFilename, formatDisplayName };
