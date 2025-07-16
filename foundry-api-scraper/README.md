# Foundry VTT API Scraper

This project provides tools to scrape and index the Foundry Virtual Tabletop API documentation.

## Project Structure

```
scraper/
├── data/                    # Scraped API documentation pages
│   ├── classes_*.md        # Individual class documentation
│   ├── interfaces_*.md     # Individual interface documentation
│   ├── functions_*.md      # Individual function documentation
│   └── ...
├── index/                   # API index and reference files
│   ├── api_index.md        # Main human-readable index
│   ├── api_index.json      # Machine-readable structured data
│   ├── classes_index.md    # Class-specific index
│   ├── functions_index.md  # Function-specific index
│   ├── types_index.md      # Type-specific index
│   └── ...
├── api_lookup.js           # Search utility for API endpoints
├── simple_index_scraper.js # Index scraper (recommended)
├── targeted_scraper.js     # Detailed page scraper
└── README.md              # This file
```

## Quick Start

### 1. Generate API Index

Create a comprehensive index of all Foundry VTT API endpoints:

```bash
node simple_index_scraper.js
```

This will create:

- `index/api_index.md` - Human-readable main index
- `index/api_index.json` - Machine-readable structured data
- Category-specific index files

### 2. Search API Endpoints

Use the lookup utility to find specific API endpoints:

```bash
node api_lookup.js
```

Or use it programmatically:

```javascript
const APILookup = require('./api_lookup.js');
const lookup = new APILookup();

// Find Actor-related classes
const actorClasses = await lookup.findClass('Actor');

// Search for canvas functionality
const canvasResults = await lookup.search('canvas');

// Get all function endpoints
const allFunctions = await lookup.listByCategory('functions');
```

### 3. Scrape Specific Pages (Optional)

For detailed documentation of specific pages:

```bash
node targeted_scraper.js
```

## API Index Statistics

The current index contains:

- **Classes**: 6 endpoints
- **Interfaces**: 4 endpoints
- **Functions**: 12 endpoints
- **Types**: 54 endpoints
- **Modules**: 5 endpoints
- **Globals**: 1,831 endpoints

**Total**: 1,912 API endpoints indexed

## Files Description

### Index Files (`/index/`)

- **`api_index.md`** - Main human-readable index with summary and quick reference
- **`api_index.json`** - Structured JSON data for programmatic access
- **`classes_index.md`** - All class endpoints organized by namespace
- **`functions_index.md`** - All function endpoints organized by namespace
- **`types_index.md`** - All type endpoints organized by namespace
- **`interfaces_index.md`** - All interface endpoints organized by namespace
- **`modules_index.md`** - All module endpoints organized by namespace
- **`globals_index.md`** - All global endpoints organized by namespace

### Scraped Content (`/data/`)

Individual Markdown files containing detailed documentation for specific API endpoints, organized by type and namespace.

## Usage Examples

### For AI Agents

The index approach is perfect for AI agents because it provides:

1. **Quick Discovery**: "What Actor-related classes are available?"
2. **Targeted Fetching**: "Get the detailed documentation for `foundry.documents.Actor`"
3. **Category Browsing**: "Show me all Canvas-related functions"
4. **URL Generation**: Direct links to specific API documentation

### For Developers

```javascript
// Load the API index
const fs = require('fs');
const index = JSON.parse(fs.readFileSync('./index/api_index.json', 'utf8'));

// Find all Actor-related endpoints
const actorEndpoints = index.globals.filter(item =>
  item.name.toLowerCase().includes('actor')
);

// Get URLs for specific functionality
const canvasEndpoints = index.globals.filter(item =>
  item.path.includes('canvas')
);
```

## Benefits of Index Approach

✅ **Fast & Efficient** - No need to handle complex JavaScript rendering for every page  
✅ **Searchable Reference** - Perfect for AI agents to know what's available  
✅ **Targeted Lookups** - When specific info is needed, fetch just that page  
✅ **Maintainable** - Easy to update and keep current  
✅ **Lightweight** - Small file sizes, fast loading  
✅ **Structured** - Organized by category and namespace

## Dependencies

- `puppeteer` - For browser automation
- `fs-extra` - For file operations
- `path` - For path handling

## License

This project is for educational and research purposes. Please respect Foundry VTT's terms of service when using this scraper.
