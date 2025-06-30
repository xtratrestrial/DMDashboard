#!/usr/bin/env python3
"""
Enhanced Fantasy Name Generators Scraper
Uses multiple techniques and sources to extract name generation patterns
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
import random

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class EnhancedFantasyNameScraper:
    def __init__(self):
        self.session = requests.Session()
        self.user_agents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
        ]
        self.scraped_data = defaultdict(dict)
        
    def get_random_headers(self):
        """Generate realistic headers"""
        return {
            'User-Agent': random.choice(self.user_agents),
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        }
    
    def scrape_with_requests(self, url, retries=3):
        """Try to scrape with requests using various techniques"""
        for attempt in range(retries):
            try:
                headers = self.get_random_headers()
                response = self.session.get(url, headers=headers, timeout=15)
                response.raise_for_status()
                return response
            except Exception as e:
                logger.warning(f"Requests attempt {attempt + 1} failed for {url}: {e}")
                time.sleep(random.uniform(1, 3))
        return None
    
    def scrape_alternative_sites(self):
        """Scrape data from alternative fantasy name generators"""
        alternative_sites = [
            {
                'name': 'Fantasy Name Gen',
                'url': 'https://www.fantasynamegen.com/',
                'type': 'alternative'
            }
        ]
        
        for site in alternative_sites:
            logger.info(f"Scraping alternative site: {site['name']}")
            response = self.scrape_with_requests(site['url'])
            
            if response:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                analysis = {
                    'url': site['url'],
                    'title': soup.title.string if soup.title else '',
                    'site_type': site['type'],
                    'forms': [],
                    'scripts': [],
                    'potential_patterns': []
                }
                
                # Look for forms and inputs that might reveal generation patterns
                for form in soup.find_all('form'):
                    form_data = self.analyze_form(form)
                    if form_data:
                        analysis['forms'].append(form_data)
                
                # Look for JavaScript that might contain generation logic
                for script in soup.find_all('script'):
                    if script.string and any(keyword in script.string.lower() 
                                           for keyword in ['name', 'generate', 'random', 'array']):
                        analysis['scripts'].append(script.string[:1000])  # Truncate for readability
                
                # Look for select options that might reveal name categories
                for select in soup.find_all('select'):
                    options = [opt.get_text(strip=True) for opt in select.find_all('option')]
                    if options:
                        analysis['potential_patterns'].append({
                            'type': 'select_options',
                            'name': select.get('name', 'unknown'),
                            'options': options
                        })
                
                self.scraped_data[site['name']] = analysis
                time.sleep(2)  # Be respectful
    
    def analyze_form(self, form):
        """Analyze forms for name generation patterns"""
        form_data = {
            'action': form.get('action'),
            'method': form.get('method'),
            'inputs': [],
            'selects': []
        }
        
        for input_elem in form.find_all('input'):
            form_data['inputs'].append({
                'type': input_elem.get('type'),
                'name': input_elem.get('name'),
                'value': input_elem.get('value'),
                'placeholder': input_elem.get('placeholder')
            })
        
        for select_elem in form.find_all('select'):
            options = [opt.get_text(strip=True) for opt in select_elem.find_all('option')]
            form_data['selects'].append({
                'name': select_elem.get('name'),
                'options': options
            })
        
        return form_data if form_data['inputs'] or form_data['selects'] else None
    
    def extract_github_patterns(self):
        """Extract patterns from GitHub repositories with name generation data"""
        github_repos = [
            'https://raw.githubusercontent.com/Snake4life/fantasy-names/master/generator.js',
            'https://raw.githubusercontent.com/felladrin/fantasy-name-generator/gh-pages/generator.js',
            'https://api.github.com/repos/Snake4life/fantasy-names/contents/generators'
        ]
        
        for repo_url in github_repos:
            logger.info(f"Fetching data from GitHub: {repo_url}")
            try:
                response = self.scrape_with_requests(repo_url)
                if response:
                    if repo_url.endswith('.js'):
                        content = response.text
                        patterns = self.analyze_javascript_patterns(content)
                        if patterns:
                            repo_name = repo_url.split('/')[-2]
                            self.scraped_data[f"GitHub_{repo_name}"] = {
                                'url': repo_url,
                                'type': 'github_source',
                                'patterns': patterns
                            }
                    elif 'api.github.com' in repo_url:
                        # Handle GitHub API response
                        data = response.json()
                        if isinstance(data, list):
                            for item in data[:5]:  # Limit to first 5 items
                                if item.get('type') == 'file' and item.get('name', '').endswith('.js'):
                                    file_url = item.get('download_url')
                                    if file_url:
                                        self.process_github_file(file_url, item.get('name'))
            except Exception as e:
                logger.error(f"Failed to fetch {repo_url}: {e}")
    
    def process_github_file(self, file_url, filename):
        """Process individual GitHub files"""
        try:
            response = self.scrape_with_requests(file_url)
            if response:
                content = response.text
                patterns = self.analyze_javascript_patterns(content)
                if patterns:
                    clean_name = filename.replace('.js', '').replace('-', '_')
                    self.scraped_data[f"GitHub_file_{clean_name}"] = {
                        'url': file_url,
                        'type': 'github_file',
                        'filename': filename,
                        'patterns': patterns
                    }
        except Exception as e:
            logger.warning(f"Failed to process {filename}: {e}")
    
    def analyze_javascript_patterns(self, js_content):
        """Analyze JavaScript content for name generation patterns"""
        patterns = []
        
        # Look for array declarations with name parts
        array_patterns = [
            r'(?:var|let|const)\s+(\w*(?:name|syllable|prefix|suffix|first|last|begin|end|start)\w*)\s*=\s*\[(.*?)\]',
            r'(\w*(?:name|syllable|prefix|suffix|first|last|begin|end|start)\w*)\s*:\s*\[(.*?)\]',
            r'(\w+)\s*=\s*\[((?:["\'][^"\']*["\'],?\s*)+)\]'
        ]
        
        for pattern in array_patterns:
            matches = re.findall(pattern, js_content, re.DOTALL | re.IGNORECASE)
            for var_name, array_content in matches:
                items = self.extract_array_items(array_content)
                if items and len(items) > 1:
                    patterns.append({
                        'variable': var_name,
                        'type': 'name_parts',
                        'items': items[:50],  # Limit for readability
                        'total_count': len(items)
                    })
        
        # Look for object-based patterns
        object_pattern = r'(\w+)\s*:\s*\{([^}]+)\}'
        matches = re.findall(object_pattern, js_content, re.DOTALL)
        
        for obj_name, obj_content in matches:
            if any(keyword in obj_name.lower() for keyword in ['name', 'generator', 'data']):
                # Try to extract arrays from within the object
                inner_arrays = re.findall(r'(\w+)\s*:\s*\[(.*?)\]', obj_content, re.DOTALL)
                if inner_arrays:
                    obj_data = {}
                    for key, array_content in inner_arrays:
                        items = self.extract_array_items(array_content)
                        if items:
                            obj_data[key] = items[:20]  # Limit for readability
                    
                    if obj_data:
                        patterns.append({
                            'variable': obj_name,
                            'type': 'name_object',
                            'data': obj_data
                        })
        
        return patterns
    
    def extract_array_items(self, array_content):
        """Extract items from JavaScript array content"""
        items = []
        
        # Remove comments and clean up
        array_content = re.sub(r'//.*?$', '', array_content, flags=re.MULTILINE)
        array_content = re.sub(r'/\*.*?\*/', '', array_content, flags=re.DOTALL)
        
        # Extract quoted strings
        string_matches = re.findall(r'["\']([^"\']+)["\']', array_content)
        items.extend(string_matches)
        
        return items
    
    def generate_sample_names(self):
        """Generate sample names using discovered patterns"""
        samples = {}
        
        for source_name, data in self.scraped_data.items():
            if 'patterns' in data:
                source_samples = []
                for pattern in data['patterns']:
                    if pattern['type'] == 'name_parts' and pattern['items']:
                        # Generate a few sample combinations
                        items = pattern['items']
                        for i in range(min(5, len(items))):
                            if random.random() > 0.5 and len(items) > i+1:
                                sample = random.choice(items) + random.choice(items)
                            else:
                                sample = random.choice(items)
                            source_samples.append(sample)
                
                if source_samples:
                    samples[source_name] = source_samples[:10]
        
        return samples
    
    def save_results(self, filename='enhanced_scraped_data.json'):
        """Save all scraped data"""
        logger.info(f"Saving results to {filename}")
        
        # Generate sample names
        samples = self.generate_sample_names()
        
        output_data = {
            'scraped_data': dict(self.scraped_data),
            'sample_names': samples,
            'summary': {
                'sources_found': len(self.scraped_data),
                'total_patterns': sum(len(data.get('patterns', [])) for data in self.scraped_data.values())
            }
        }
        
        with open(filename, 'w') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Saved data from {len(self.scraped_data)} sources")
        return output_data

def main():
    scraper = EnhancedFantasyNameScraper()
    
    logger.info("Starting enhanced fantasy name scraping...")
    
    # Try alternative sites first
    scraper.scrape_alternative_sites()
    
    # Extract patterns from GitHub repositories
    scraper.extract_github_patterns()
    
    # Save results
    results = scraper.save_results()
    
    # Print summary
    print(f"\n🎯 Enhanced Scraping Complete!")
    print(f"📊 Sources found: {results['summary']['sources_found']}")
    print(f"🔍 Total patterns: {results['summary']['total_patterns']}")
    
    if results['sample_names']:
        print(f"\n📝 Sample generated names:")
        for source, names in results['sample_names'].items():
            print(f"  {source}: {', '.join(names[:5])}")

if __name__ == "__main__":
    main() 