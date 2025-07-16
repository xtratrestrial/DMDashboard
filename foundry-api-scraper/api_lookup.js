const fs = require('fs-extra');
const path = require('path');

class APILookup {
  constructor() {
    this.indexPath = path.join(__dirname, 'index', 'api_index.json');
    this.index = null;
  }

  async loadIndex() {
    if (!this.index) {
      try {
        const data = await fs.readFile(this.indexPath, 'utf8');
        this.index = JSON.parse(data);
      } catch (error) {
        console.error('Failed to load API index:', error.message);
        return false;
      }
    }
    return true;
  }

  async search(query, category = null) {
    if (!(await this.loadIndex())) {
      return [];
    }

    const results = [];
    const searchTerm = query.toLowerCase();

    // Search in specified category or all categories
    const categories = category
      ? [category]
      : Object.keys(this.index).filter(k => k !== 'lastUpdated');

    categories.forEach(cat => {
      if (this.index[cat]) {
        this.index[cat].forEach(item => {
          if (
            item.name.toLowerCase().includes(searchTerm) ||
            item.path.toLowerCase().includes(searchTerm)
          ) {
            results.push({
              ...item,
              category: cat,
            });
          }
        });
      }
    });

    return results;
  }

  async findClass(className) {
    return await this.search(className, 'classes');
  }

  async findInterface(interfaceName) {
    return await this.search(interfaceName, 'interfaces');
  }

  async findFunction(functionName) {
    return await this.search(functionName, 'functions');
  }

  async findType(typeName) {
    return await this.search(typeName, 'types');
  }

  async getStats() {
    if (!(await this.loadIndex())) {
      return null;
    }

    const stats = {};
    Object.keys(this.index).forEach(category => {
      if (category !== 'lastUpdated') {
        stats[category] = this.index[category].length;
      }
    });
    stats.lastUpdated = this.index.lastUpdated;

    return stats;
  }

  async listByCategory(category, limit = 10) {
    if (!(await this.loadIndex())) {
      return [];
    }

    return this.index[category] ? this.index[category].slice(0, limit) : [];
  }
}

// Example usage
async function main() {
  const lookup = new APILookup();

  console.log('Foundry VTT API Lookup Utility\n');

  // Get stats
  const stats = await lookup.getStats();
  if (stats) {
    console.log('API Index Statistics:');
    Object.keys(stats).forEach(key => {
      if (key !== 'lastUpdated') {
        console.log(`  ${key}: ${stats[key]} endpoints`);
      }
    });
    console.log(`  Last Updated: ${stats.lastUpdated}\n`);
  }

  // Example searches
  console.log('Example Searches:\n');

  const actorResults = await lookup.findClass('Actor');
  console.log(`Classes containing "Actor": ${actorResults.length} found`);
  actorResults.slice(0, 3).forEach(result => {
    console.log(`  - ${result.name}: ${result.url}`);
  });

  const canvasResults = await lookup.search('canvas');
  console.log(`\nItems containing "canvas": ${canvasResults.length} found`);
  canvasResults.slice(0, 3).forEach(result => {
    console.log(`  - ${result.name} (${result.category}): ${result.url}`);
  });
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = APILookup;
