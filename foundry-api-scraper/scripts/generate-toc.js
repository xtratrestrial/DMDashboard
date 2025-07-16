#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const colors = require('colors');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateTOC(markdown) {
  const lines = markdown.split('\n');
  const toc = [];

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const anchor = slugify(title);
      const indent = '  '.repeat(level - 1);
      toc.push(`${indent}- [${title}](#${anchor})`);
    }
  }

  return toc.join('\n');
}

function addTOCToFile(filePath) {
  try {
    console.log(colors.cyan(`Processing: ${filePath}`));

    const content = fs.readFileSync(filePath, 'utf8');
    const toc = generateTOC(content);

    if (toc.trim()) {
      const newContent = `# Table of Contents\n\n${toc}\n\n---\n\n${content}`;
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(colors.green(`✅ Added TOC to ${filePath}`));
      console.log(colors.gray(`   Generated ${toc.split('\n').length} links`));
    } else {
      console.log(colors.yellow(`⚠️  No headings found in ${filePath}`));
    }
  } catch (error) {
    console.error(
      colors.red(`❌ Error processing ${filePath}:`),
      error.message
    );
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(colors.blue('📋 Markdown TOC Generator'));
    console.log(
      colors.gray('Usage: node scripts/generate-toc.js <file-or-directory>')
    );
    console.log(colors.gray('Examples:'));
    console.log(
      colors.gray(
        '  node scripts/generate-toc.js data/test-output/single-url-test.md'
      )
    );
    console.log(colors.gray('  node scripts/generate-toc.js data/'));
    return;
  }

  const target = args[0];

  try {
    const stats = await fs.stat(target);

    if (stats.isFile()) {
      // Process single file
      if (target.endsWith('.md')) {
        addTOCToFile(target);
      } else {
        console.log(colors.yellow(`⚠️  Not a Markdown file: ${target}`));
      }
    } else if (stats.isDirectory()) {
      // Process all .md files in directory
      const files = await fs.readdir(target);
      const mdFiles = files.filter(file => file.endsWith('.md'));

      if (mdFiles.length === 0) {
        console.log(colors.yellow(`⚠️  No Markdown files found in ${target}`));
        return;
      }

      console.log(
        colors.blue(
          `📁 Processing ${mdFiles.length} Markdown files in ${target}`
        )
      );

      for (const file of mdFiles) {
        const filePath = path.join(target, file);
        addTOCToFile(filePath);
      }

      console.log(
        colors.green(`\n🎉 Completed processing ${mdFiles.length} files`)
      );
    }
  } catch (error) {
    console.error(colors.red('❌ Error:'), error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateTOC, addTOCToFile };
