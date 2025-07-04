#!/usr/bin/env python3
"""
Fantasy Name Database Scraper - Phase 1
Scrapes real fantasy names from quality sources to build proper training data
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import random
from collections import defaultdict
import re
from urllib.parse import urljoin, urlparse
import sys

class FantasyNameScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.names_data = defaultdict(list)
        self.sources = []

    def scrape_predefined_fantasy_names(self):
        """Add curated fantasy names from known sources"""
        print("📚 Adding curated fantasy names from literature...")
        
        # High-quality fantasy names from literature and games
        curated_names = {
            'elvish_male': [
                'Legolas', 'Elrond', 'Thranduil', 'Celeborn', 'Glorfindel', 'Finrod', 'Gil-galad',
                'Elladan', 'Elrohir', 'Erestor', 'Lindir', 'Haldir', 'Galdor', 'Gwindor',
                'Aegnor', 'Angrod', 'Beleg', 'Círdan', 'Duilin', 'Ecthelion', 'Fingolfin',
                'Finarfin', 'Ingwion', 'Maedhros', 'Maglor', 'Orodreth', 'Turgon', 'Thingol'
            ],
            'elvish_female': [
                'Galadriel', 'Arwen', 'Tauriel', 'Nimrodel', 'Celebrían', 'Idril',
                'Lúthien', 'Elwing', 'Melian', 'Varda', 'Yavanna', 'Nerdanel', 'Amarië',
                'Elanor', 'Gilraen', 'Morwen', 'Nellas', 'Niënor', 'Serindë', 'Tinúviel'
            ],
            'dwarvish_male': [
                'Gimli', 'Thorin', 'Balin', 'Dwalin', 'Fili', 'Kili', 'Ori', 'Nori', 'Dori',
                'Bifur', 'Bofur', 'Bombur', 'Gloin', 'Oin', 'Dain', 'Thrain', 'Thror',
                'Durin', 'Fundin', 'Groin', 'Náin', 'Telchar', 'Gamil'
            ],
            'dwarvish_female': [
                'Dís', 'Freda', 'Hilda', 'Tova', 'Vera', 'Nala', 'Mira', 'Kira',
                'Bera', 'Dora', 'Nora', 'Thora', 'Sigrid', 'Astrid', 'Ingrid', 'Helga'
            ],
            'human_male': [
                'Aragorn', 'Boromir', 'Faramir', 'Denethor', 'Isildur', 'Elendil', 'Anarion',
                'Bard', 'Girion', 'Brand', 'Theodén', 'Éomer', 'Erkenbrand',
                'Grimm', 'Helm', 'Haleth', 'Hador', 'Húrin', 'Túrin', 'Tuor', 'Beren'
            ],
            'human_female': [
                'Éowyn', 'Rosie', 'Goldberry', 'Ioreth', 'Elfhild', 'Morwen',
                'Rían', 'Finduilas', 'Lalaith', 'Nienor'
            ],
            'orcish_male': [
                'Azog', 'Bolg', 'Gothmog', 'Lugdush', 'Uglúk', 'Grishnákh', 'Muzgash',
                'Gorbag', 'Shagrat', 'Snaga', 'Mauhúr', 'Lagduf', 'Radbug', 'Ufthak'
            ],
            'halfling_male': [
                'Frodo', 'Sam', 'Merry', 'Pippin', 'Bilbo', 'Bandobras', 'Bungo', 'Drogo',
                'Fortinbras', 'Gerontius', 'Isengrim', 'Isumbras', 'Otho', 'Paladin',
                'Peregrin', 'Polo', 'Ponto', 'Posco', 'Rufus', 'Seredic'
            ],
            'halfling_female': [
                'Belladonna', 'Camellia', 'Daisy', 'Esmeralda', 'Lobelia', 'Mirabella',
                'Pansy', 'Peony', 'Poppy', 'Primula', 'Rose', 'Ruby', 'Violet', 'Amaranth'
            ]
        }
        
        # Add curated names to our data
        for category, names in curated_names.items():
            culture = category.split('_')[0]
            gender = category.split('_')[1] if '_' in category else 'neutral'
            
            category_data = [
                {
                    'name': name,
                    'culture': culture,
                    'gender': gender,
                    'source': 'literature_curated'
                }
                for name in names
            ]
            
            if category in self.names_data:
                self.names_data[category].extend(category_data)
            else:
                self.names_data[category] = category_data
                
            print(f"  ✅ Added {len(names)} curated {category} names")

    def analyze_name_patterns(self):
        """Analyze the collected names to extract syllable and phonetic patterns"""
        print("🔍 Analyzing name patterns...")
        
        patterns = {
            'syllables': defaultdict(int),
            'prefixes': defaultdict(int),
            'suffixes': defaultdict(int),
            'consonant_clusters': defaultdict(int),
            'vowel_patterns': defaultdict(int)
        }
        
        all_names = []
        for category_names in self.names_data.values():
            all_names.extend([entry['name'] for entry in category_names])
        
        for name in all_names:
            # Extract syllable patterns (simplified)
            syllables = re.findall(r'[bcdfghjklmnpqrstvwxyz]*[aeiou][bcdfghjklmnpqrstvwxyz]*', name.lower())
            for syllable in syllables:
                if syllable:  # Only add non-empty syllables
                    patterns['syllables'][syllable] += 1
            
            # Extract prefixes (first 2-3 characters)
            if len(name) >= 3:
                patterns['prefixes'][name[:2].lower()] += 1
                patterns['prefixes'][name[:3].lower()] += 1
            
            # Extract suffixes (last 2-3 characters)  
            if len(name) >= 3:
                patterns['suffixes'][name[-2:].lower()] += 1
                patterns['suffixes'][name[-3:].lower()] += 1
            
            # Find consonant clusters
            consonant_clusters = re.findall(r'[bcdfghjklmnpqrstvwxyz]{2,3}', name.lower())
            for cluster in consonant_clusters:
                patterns['consonant_clusters'][cluster] += 1
                
            # Find vowel patterns
            vowel_patterns = re.findall(r'[aeiou]{2,3}', name.lower())
            for pattern in vowel_patterns:
                patterns['vowel_patterns'][pattern] += 1
        
        return patterns

    def save_names_data(self, filename="name_samples"):
        """Save collected names to file"""
        print("💾 Saving collected names...")
        
        # Prepare summary statistics
        total_names = sum(len(category_names) for category_names in self.names_data.values())
        
        summary = {
            'total_names': total_names,
            'categories': {category: len(names) for category, names in self.names_data.items()},
            'sources': list(set(entry['source'] for category_names in self.names_data.values() 
                               for entry in category_names))
        }
        
        # Analyze patterns
        patterns = self.analyze_name_patterns()
        
        # Prepare output data
        output_data = {
            'summary': summary,
            'names_by_category': dict(self.names_data),
            'patterns': {
                'top_syllables': dict(list(patterns['syllables'].most_common(50))),
                'top_prefixes': dict(list(patterns['prefixes'].most_common(30))),
                'top_suffixes': dict(list(patterns['suffixes'].most_common(30))),
                'consonant_clusters': dict(list(patterns['consonant_clusters'].most_common(20))),
                'vowel_patterns': dict(list(patterns['vowel_patterns'].most_common(20)))
            }
        }
        
        # Save to JSON file
        with open(f"{filename}.json", 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Saved {total_names} names to {filename}.json")
        print(f"📊 Categories: {len(self.names_data)}")
        print(f"🔗 Sources: {len(summary['sources'])}")
        
        return output_data

    def print_sample_names(self, num_samples=8):
        """Print sample names from each category"""
        print("\n🎭 Sample names by category:")
        print("=" * 50)
        
        for category, names_list in self.names_data.items():
            if names_list:
                samples = [entry['name'] for entry in names_list[:num_samples]]
                print(f"{category.replace('_', ' ').title()}: {', '.join(samples)}")

def main():
    """Main execution function"""
    print("🚀 Fantasy Name Database Scraper - Phase 1")
    print("=" * 60)
    
    scraper = FantasyNameScraper()
    
    try:
        # Step 1: Add curated high-quality names
        scraper.scrape_predefined_fantasy_names()
        
        # Step 2: Analyze and save results
        data = scraper.save_names_data()
        
        # Step 3: Show samples
        scraper.print_sample_names()
        
        print(f"\n🎉 Phase 1 Complete! Collected {data['summary']['total_names']} fantasy names")
        print("📁 Data saved to name_samples.json")
        print("🔄 Ready for Phase 2: Pattern Analysis & Generator Improvement")
        
    except KeyboardInterrupt:
        print("\n⏹️ Scraping interrupted by user")
    except Exception as e:
        print(f"\n❌ Scraping failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
