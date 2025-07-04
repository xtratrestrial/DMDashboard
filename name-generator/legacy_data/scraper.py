#!/usr/bin/env python3
"""
Fantasy Name Generators Scraper
Scrapes data from fantasynamegenerators.com to extract name generation patterns
"""

import requests
from bs4 import BeautifulSoup
import json
import re
import time
import os
from urllib.parse import urljoin, urlparse
from collections import defaultdict
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FantasyNameScraper:
    def __init__(self, base_url="https://www.fantasynamegenerators.com/"):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.discovered_generators = {}
        self.scraped_data = defaultdict(dict)
        
    def get_page(self, url, retries=3):
        """Fetch a page with error handling and retries"""
        for attempt in range(retries):
            try:
                response = self.session.get(url, timeout=10)
                response.raise_for_status()
                return response
            except requests.RequestException as e:
                logger.warning(f"Attempt {attempt + 1} failed for {url}: {e}")
                if attempt < retries - 1:
                    time.sleep(2 ** attempt)  # Exponential backoff
                else:
                    logger.error(f"Failed to fetch {url} after {retries} attempts")
                    return None
    
    def discover_generators(self):
        """Discover all available name generators on the site"""
        logger.info("Discovering name generators...")
        
        response = self.get_page(self.base_url)
        if not response:
            return
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Look for generator links
        generator_links = []
        
        # Find all links that might be generators
        for link in soup.find_all('a', href=True):
            href = link.get('href')
            if href:
                full_url = urljoin(self.base_url, href)
                # Filter for generator-like URLs
                if any(keyword in href.lower() for keyword in ['name', 'generator', 'random']):
                    generator_links.append({
                        'url': full_url,
                        'text': link.get_text(strip=True),
                        'href': href
                    })
        
        logger.info(f"Found {len(generator_links)} potential generator links")
        
        # Save discovered generators
        with open('discovered_generators.json', 'w') as f:
            json.dump(generator_links, f, indent=2)
            
        return generator_links
    
    def analyze_generator_page(self, url):
        """Analyze a specific generator page to extract data patterns"""
        logger.info(f"Analyzing generator page: {url}")
        
        response = self.get_page(url)
        if not response:
            return None
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        analysis = {
            'url': url,
            'title': soup.title.string if soup.title else '',
            'scripts': [],
            'potential_data': [],
            'forms': [],
            'javascript_content': []
        }
        
        # Extract all script tags
        for script in soup.find_all('script'):
            if script.string:
                analysis['scripts'].append(script.string)
                
                # Look for data patterns in JavaScript
                if any(pattern in script.string.lower() for pattern in ['name', 'syllable', 'prefix', 'suffix', 'array']):
                    analysis['javascript_content'].append(script.string)
        
        # Look for forms (might contain generation parameters)
        for form in soup.find_all('form'):
            form_data = {
                'action': form.get('action'),
                'method': form.get('method'),
                'inputs': []
            }
            for input_elem in form.find_all(['input', 'select']):
                form_data['inputs'].append({
                    'type': input_elem.get('type'),
                    'name': input_elem.get('name'),
                    'value': input_elem.get('value')
                })
            analysis['forms'].append(form_data)
        
        # Look for embedded data in script tags or data attributes
        for elem in soup.find_all(attrs={'data-names': True}):
            analysis['potential_data'].append(elem.get('data-names'))
            
        return analysis
    
    def extract_javascript_data(self, js_content):
        """Extract name generation data from JavaScript content"""
        data_patterns = []
        
        # Look for array declarations
        array_pattern = r'(?:var|let|const)\s+(\w+)\s*=\s*\[(.*?)\]'
        matches = re.findall(array_pattern, js_content, re.DOTALL)
        
        for var_name, array_content in matches:
            # Clean up the array content
            items = []
            for item in re.findall(r'["\']([^"\']+)["\']', array_content):
                items.append(item)
            
            if items and any(keyword in var_name.lower() for keyword in ['name', 'syllable', 'prefix', 'suffix', 'first', 'last']):
                data_patterns.append({
                    'variable': var_name,
                    'type': 'array',
                    'items': items,
                    'count': len(items)
                })
        
        return data_patterns
    
    def scrape_all_generators(self, max_generators=10):
        """Scrape data from discovered generators"""
        generators = self.discover_generators()
        
        if not generators:
            logger.error("No generators discovered")
            return
        
        scraped_count = 0
        for generator in generators[:max_generators]:
            if scraped_count >= max_generators:
                break
                
            logger.info(f"Scraping: {generator['text']} - {generator['url']}")
            
            analysis = self.analyze_generator_page(generator['url'])
            if analysis:
                self.scraped_data[generator['text']] = analysis
                
                # Extract JavaScript data patterns
                for js_content in analysis['javascript_content']:
                    js_data = self.extract_javascript_data(js_content)
                    if js_data:
                        analysis['extracted_data'] = js_data
                
                scraped_count += 1
                
            # Be respectful - wait between requests
            time.sleep(1)
    
    def save_results(self, filename='scraped_data.json'):
        """Save all scraped data to a JSON file"""
        logger.info(f"Saving results to {filename}")
        
        with open(filename, 'w') as f:
            json.dump(dict(self.scraped_data), f, indent=2, ensure_ascii=False)
        
        logger.info(f"Saved data for {len(self.scraped_data)} generators")

def main():
    scraper = FantasyNameScraper()
    
    # Start with discovery
    logger.info("Starting Fantasy Name Generators scraping...")
    
    # Scrape a limited number of generators initially
    scraper.scrape_all_generators(max_generators=5)
    
    # Save results
    scraper.save_results()
    
    # Print summary
    print(f"\nScraping complete! Found data for {len(scraper.scraped_data)} generators")
    for name, data in scraper.scraped_data.items():
        if 'extracted_data' in data:
            print(f"  {name}: {len(data['extracted_data'])} data patterns found")

if __name__ == "__main__":
    main() 