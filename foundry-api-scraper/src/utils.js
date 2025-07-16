const fs = require('fs-extra');
const path = require('path');
const colors = require('colors');
const ProgressBar = require('progress');

/**
 * Delay execution for specified milliseconds
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Create a progress bar
 */
function createProgressBar(total, message = 'Processing') {
  return new ProgressBar(`${message} [:bar] :current/:total (:percent) :etas`, {
    complete: '=',
    incomplete: ' ',
    width: 40,
    total,
  });
}

/**
 * Log message with optional verbose flag
 */
function log(message, verbose = false) {
  if (verbose) {
    console.log(colors.gray(`[${new Date().toISOString()}] ${message}`));
  }
}

/**
 * Load configuration from file
 */
async function loadConfig(configPath) {
  if (!configPath) {
    return {};
  }

  try {
    const configFile = await fs.readFile(configPath, 'utf8');

    if (configPath.endsWith('.json')) {
      return JSON.parse(configFile);
    } else if (configPath.endsWith('.yaml') || configPath.endsWith('.yml')) {
      const yaml = require('yaml');
      return yaml.parse(configFile);
    } else {
      throw new Error('Unsupported config file format. Use .json or .yaml');
    }
  } catch (error) {
    console.warn(
      colors.yellow(
        `Warning: Could not load config file ${configPath}: ${error.message}`
      )
    );
    return {};
  }
}

/**
 * Save configuration to file
 */
async function saveConfig(config, configPath) {
  try {
    const configDir = path.dirname(configPath);
    await fs.ensureDir(configDir);

    if (configPath.endsWith('.json')) {
      await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf8');
    } else if (configPath.endsWith('.yaml') || configPath.endsWith('.yml')) {
      const yaml = require('yaml');
      await fs.writeFile(configPath, yaml.stringify(config), 'utf8');
    } else {
      throw new Error('Unsupported config file format. Use .json or .yaml');
    }
  } catch (error) {
    throw new Error(`Failed to save config: ${error.message}`);
  }
}

/**
 * Validate URL format
 */
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Ensure directory exists and is writable
 */
async function ensureWritableDir(dirPath) {
  try {
    await fs.ensureDir(dirPath);

    // Test write access
    const testFile = path.join(dirPath, '.test-write');
    await fs.writeFile(testFile, 'test');
    await fs.remove(testFile);

    return true;
  } catch (error) {
    throw new Error(`Directory ${dirPath} is not writable: ${error.message}`);
  }
}

/**
 * Format file size in human readable format
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Format duration in human readable format
 */
function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

/**
 * Retry function with exponential backoff
 */
async function retry(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

/**
 * Create a simple cache for storing data
 */
class SimpleCache {
  constructor(maxSize = 1000) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  get(key) {
    return this.cache.get(key);
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }

  clear() {
    this.cache.clear();
  }

  size() {
    return this.cache.size;
  }
}

/**
 * Generate a unique filename to avoid conflicts
 */
function generateUniqueFilename(basePath, filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);
  let counter = 1;
  let newFilename = filename;

  while (fs.existsSync(path.join(basePath, newFilename))) {
    newFilename = `${name}_${counter}${ext}`;
    counter++;
  }

  return newFilename;
}

/**
 * Clean up temporary files and directories
 */
async function cleanupTempFiles(tempDirs = []) {
  for (const dir of tempDirs) {
    try {
      await fs.remove(dir);
    } catch (error) {
      console.warn(
        colors.yellow(
          `Warning: Could not remove temp directory ${dir}: ${error.message}`
        )
      );
    }
  }
}

module.exports = {
  delay,
  createProgressBar,
  log,
  loadConfig,
  saveConfig,
  isValidUrl,
  ensureWritableDir,
  formatFileSize,
  formatDuration,
  retry,
  SimpleCache,
  generateUniqueFilename,
  cleanupTempFiles,
};
