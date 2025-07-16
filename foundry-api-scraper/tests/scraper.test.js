const Scraper = require('../src/scraper');
const { parseApiContent, extractLinks, sanitizeFilename } = require('../src/parser');

describe('Scraper', () => {
  test('should initialize with default config', () => {
    const scraper = new Scraper();
    expect(scraper.config.baseUrl).toBe('https://foundryvtt.com/api/');
    expect(scraper.config.outputDir).toBe('./data');
    expect(scraper.config.concurrentRequests).toBe(5);
  });

  test('should initialize with custom config', () => {
    const config = {
      baseUrl: 'https://example.com/api/',
      outputDir: './custom-data',
      concurrentRequests: 10
    };
    const scraper = new Scraper(config);
    expect(scraper.config.baseUrl).toBe('https://example.com/api/');
    expect(scraper.config.outputDir).toBe('./custom-data');
    expect(scraper.config.concurrentRequests).toBe(10);
  });

  test('should track visited URLs', () => {
    const scraper = new Scraper();
    expect(scraper.visitedUrls.size).toBe(0);
    
    scraper.visitedUrls.add('https://example.com');
    expect(scraper.visitedUrls.has('https://example.com')).toBe(true);
  });
});

describe('Parser', () => {
  test('should sanitize filenames correctly', () => {
    expect(sanitizeFilename('https://foundryvtt.com/api/index.html')).toBe('index');
    expect(sanitizeFilename('https://foundryvtt.com/api/foundry.documents.Actor')).toBe('foundry_documents_Actor');
    expect(sanitizeFilename('https://foundryvtt.com/api/foundry.canvas.Canvas')).toBe('foundry_canvas_Canvas');
  });

  test('should extract links from HTML', () => {
    const html = `
      <html>
        <body>
          <a href="/api/index.html">Home</a>
          <a href="/api/foundry.documents.Actor.html">Actor</a>
          <a href="https://external.com">External</a>
        </body>
      </html>
    `;
    
    const links = extractLinks(html, 'https://foundryvtt.com/api/');
    expect(links).toContain('https://foundryvtt.com/api/index.html');
    expect(links).toContain('https://foundryvtt.com/api/foundry.documents.Actor.html');
    expect(links).not.toContain('https://external.com');
  });

  test('should parse API content', async () => {
    const html = `
      <html>
        <head><title>Test API</title></head>
        <body>
          <h1>Test Class</h1>
          <p>This is a test description.</p>
          <pre><code>function test() { return true; }</code></pre>
        </body>
      </html>
    `;
    
    const content = await parseApiContent(html, 'https://example.com');
    expect(content).toContain('# Test API');
    expect(content).toContain('## Test Class');
    expect(content).toContain('This is a test description.');
    expect(content).toContain('```javascript');
  });
}); 