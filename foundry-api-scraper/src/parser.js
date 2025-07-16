const cheerio = require('cheerio');
const url = require('url');
const path = require('path');

/**
 * Parse API content from HTML and extract relevant documentation
 */
async function parseApiContent(html, sourceUrl) {
  const $ = cheerio.load(html);

  // Remove unwanted elements
  $('script, style, nav, footer, .sidebar').remove();

  // Extract title
  const title = $('title').text().trim() || 'Foundry VTT API Documentation';

  // Extract main content
  let mainContent = $('main, .content, #content, .main-content').first();
  if (mainContent.length === 0) {
    // Fallback to body if no main content found
    mainContent = $('body');
  }

  let content = `# ${title}\n\n`;
  content += `Source: ${sourceUrl}\n\n`;

  // Process headings and content
  mainContent
    .find('h1, h2, h3, h4, h5, h6, p, pre, code, ul, ol, table')
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
          content += parseTable($el);
          break;
      }
    });

  // Extract API-specific information
  content += extractApiInfo($);

  return content;
}

/**
 * Parse table content
 */
function parseTable($table) {
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

/**
 * Extract API-specific information like classes, methods, properties
 */
function extractApiInfo($) {
  let apiContent = '';

  // Extract class definitions
  $('.class, .interface, .type').each((i, element) => {
    const $el = $(element);
    const className = $el.find('.name, h1, h2').first().text().trim();

    if (className) {
      apiContent += `\n## Class: ${className}\n\n`;

      // Extract description
      const description = $el
        .find('.description, .summary')
        .first()
        .text()
        .trim();
      if (description) {
        apiContent += `${description}\n\n`;
      }

      // Extract methods
      $el.find('.method, .function').each((j, method) => {
        const $method = $(method);
        const methodName = $method.find('.name').first().text().trim();
        const methodDesc = $method.find('.description').first().text().trim();

        if (methodName) {
          apiContent += `### ${methodName}\n\n`;
          if (methodDesc) {
            apiContent += `${methodDesc}\n\n`;
          }
        }
      });

      // Extract properties
      $el.find('.property, .field').each((j, prop) => {
        const $prop = $(prop);
        const propName = $prop.find('.name').first().text().trim();
        const propDesc = $prop.find('.description').first().text().trim();

        if (propName) {
          apiContent += `### ${propName}\n\n`;
          if (propDesc) {
            apiContent += `${propDesc}\n\n`;
          }
        }
      });
    }
  });

  return apiContent;
}

/**
 * Extract links from HTML content
 */
function extractLinks(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = new Set();

  $('a[href]').each((i, element) => {
    const href = $(element).attr('href');
    if (href) {
      try {
        const absoluteUrl = url.resolve(baseUrl, href);

        // Only include links to the same domain
        const parsedBase = url.parse(baseUrl);
        const parsedLink = url.parse(absoluteUrl);

        if (parsedLink.hostname === parsedBase.hostname) {
          // Only include links within the /api/ path
          if (parsedLink.pathname && parsedLink.pathname.includes('/api/')) {
            // Skip fragment-only links completely
            if (!parsedLink.hash || parsedLink.hash === '') {
              links.add(absoluteUrl);
            }
            // Don't add any URLs with fragments at all
          }
        }
      } catch (error) {
        // Skip invalid URLs
      }
    }
  });

  return Array.from(links);
}

/**
 * Sanitize filename from URL
 */
function sanitizeFilename(urlString) {
  try {
    const parsed = url.parse(urlString);
    let filename = parsed.pathname || 'index';

    // Remove leading slash
    if (filename.startsWith('/')) {
      filename = filename.substring(1);
    }

    // Replace slashes with underscores
    filename = filename.replace(/\//g, '_');

    // Remove file extension if present
    filename = filename.replace(/\.(html|htm)$/, '');

    // If empty, use 'index'
    if (!filename || filename === '') {
      filename = 'index';
    }

    // Sanitize for filesystem
    filename = filename.replace(/[^a-zA-Z0-9_-]/g, '_');

    return filename;
  } catch (error) {
    return 'unknown';
  }
}

/**
 * Extract code examples from HTML
 */
function extractCodeExamples($) {
  const examples = [];

  $('pre code, .code-example, .example').each((i, element) => {
    const $el = $(element);
    const code = $el.text().trim();

    if (code) {
      examples.push({
        code,
        language: $el.attr('class')?.includes('javascript')
          ? 'javascript'
          : 'text',
      });
    }
  });

  return examples;
}

module.exports = {
  parseApiContent,
  extractLinks,
  sanitizeFilename,
  extractCodeExamples,
};
