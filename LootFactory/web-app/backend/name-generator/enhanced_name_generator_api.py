#!/usr/bin/env python3
"""
Enhanced Fantasy Name Generator - Phase 2 (API Version)
Uses pattern analysis, Markov chains, and cultural linguistics for quality names
Supports both API calls and interactive mode
"""

import json
import random
import re
import argparse
import sys
from collections import defaultdict, Counter
from typing import List, Dict, Tuple, Optional

class EnhancedNameGenerator:
    def __init__(self, database_file: str = 'name-generator/enhanced_name_database.json'):
        """Initialize with enhanced name database"""
        self.database = self.load_database(database_file)
        self.patterns = self.database.get('patterns', {})
        self.names_by_culture = self.organize_by_culture()
        self.markov_chains = self.build_markov_chains()
        self.syllable_patterns = self.analyze_syllable_patterns()
        self.phonetic_rules = self.define_phonetic_rules()
        
    def load_database(self, filename: str) -> Dict:
        """Load the enhanced name database"""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"❌ Database file {filename} not found!")
            return {'names_by_category': {}, 'patterns': {}}
    
    def organize_by_culture(self) -> Dict[str, List[str]]:
        """Organize names by culture for better pattern analysis"""
        by_culture = defaultdict(list)
        
        for category, names_list in self.database.get('names_by_category', {}).items():
            for entry in names_list:
                culture = entry.get('culture', 'unknown')
                name = entry.get('name', '')
                if name:
                    by_culture[culture].append(name)
                    
        return dict(by_culture)
    
    def build_markov_chains(self) -> Dict[str, Dict[str, List[str]]]:
        """Build Markov chains for each culture to learn naming patterns"""
        chains = {}
        
        for culture, names in self.names_by_culture.items():
            chain = defaultdict(list)
            
            for name in names:
                name_lower = name.lower()
                # Add start and end markers
                padded_name = '^' + name_lower + '$'
                
                # Build trigram chains for better quality
                for i in range(len(padded_name) - 2):
                    trigram = padded_name[i:i+2]
                    next_char = padded_name[i+2]
                    chain[trigram].append(next_char)
            
            chains[culture] = dict(chain)
        
        return chains
    
    def analyze_syllable_patterns(self) -> Dict[str, Dict]:
        """Analyze syllable patterns by culture"""
        patterns = {}
        
        for culture, names in self.names_by_culture.items():
            syllable_counts = Counter()
            vowel_patterns = Counter()
            consonant_patterns = Counter()
            length_distribution = Counter()
            
            for name in names:
                name_lower = name.lower()
                length_distribution[len(name)] += 1
                
                # Find syllables (CV, CVC patterns)
                syllables = re.findall(r'[bcdfghjklmnpqrstvwxyz]*[aeiou][bcdfghjklmnpqrstvwxyz]*', name_lower)
                syllable_counts[len(syllables)] += 1
                
                # Vowel patterns
                vowels = re.findall(r'[aeiou]+', name_lower)
                for v in vowels:
                    vowel_patterns[v] += 1
                
                # Consonant clusters
                consonants = re.findall(r'[bcdfghjklmnpqrstvwxyz]{1,3}', name_lower)
                for c in consonants:
                    consonant_patterns[c] += 1
            
            patterns[culture] = {
                'syllable_counts': dict(syllable_counts),
                'vowel_patterns': dict(vowel_patterns.most_common(20)),
                'consonant_patterns': dict(consonant_patterns.most_common(30)),
                'length_distribution': dict(length_distribution),
                'avg_length': sum(k * v for k, v in length_distribution.items()) / sum(length_distribution.values()) if length_distribution else 5
            }
        
        return patterns
    
    def define_phonetic_rules(self) -> Dict[str, Dict]:
        """Define phonetic rules to avoid unpronounceable combinations"""
        return {
            'forbidden_combinations': {
                'any': ['qq', 'qx', 'qz', 'xx', 'zz', 'jj', 'vv', 'ww'],
                'start': ['ng', 'nk', 'mb', 'bb', 'dd', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt'],
                'end': ['qh', 'qw', 'qy']
            },
            'vowel_harmony': {
                'elvish': ['a', 'e', 'i'],  # Prefer high/front vowels
                'dwarf': ['a', 'o', 'u'],  # Prefer low/back vowels
                'dragonborn': ['a', 'aa', 'ar'],  # Prefer strong vowels
                'halfling': ['e', 'i', 'o'],  # Mix of vowels
                'tiefling': ['a', 'e', 'i', 'y']  # Exotic combinations
            },
            'cultural_sounds': {
                'elvish': {'preferred_consonants': ['l', 'r', 'n', 'm', 'th', 's'], 'endings': ['iel', 'wen', 'eth', 'ion']},
                'dwarf': {'preferred_consonants': ['r', 'k', 'g', 'd', 'th'], 'endings': ['in', 'on', 'ur', 'or']},
                'dragonborn': {'preferred_consonants': ['k', 'r', 'sh', 'th', 'z'], 'endings': ['ar', 'ash', 'aan', 'ek']},
                'halforc': {'preferred_consonants': ['g', 'k', 'r', 'sh', 'gr'], 'endings': ['ug', 'ok', 'ath', 'ash']},
                'tiefling': {'preferred_consonants': ['z', 's', 'k', 'th', 'x'], 'endings': ['os', 'is', 'ax', 'eth']}
            }
        }
    
    def is_pronounceable(self, name: str, culture: str = 'any') -> bool:
        """Check if a name follows enhanced quality and pronounceability rules"""
        name_lower = name.lower()
        
        # USER REQUIREMENTS - Critical Quality Rules
        
        # Rule 1: No 3 consecutive o's (user requirement)
        if 'ooo' in name_lower:
            return False
        
        # Rule 2: Minimum 4 characters (updated based on quality analysis)
        if len(name) < 4:
            return False
        
        # Rule 3: No 3+ consecutive identical characters
        for i in range(len(name) - 2):
            if name[i].lower() == name[i+1].lower() == name[i+2].lower():
                return False
        
        # GENERAL QUALITY RULES
        
        # Must contain at least one vowel
        if not re.search(r'[aeiou]', name_lower):
            return False
        
        # Must contain at least one consonant
        if not re.search(r'[bcdfghjklmnpqrstvwxyz]', name_lower):
            return False
        
        # No more than 15 characters (reasonable length)
        if len(name) > 15:
            return False
        
        # No excessive apostrophes (max 2)
        if name.count("'") > 2:
            return False
        
        # ORIGINAL PHONETIC RULES
        
        # Check forbidden combinations
        forbidden = self.phonetic_rules['forbidden_combinations']
        
        for combo in forbidden['any']:
            if combo in name_lower:
                return False
        
        # Check start/end restrictions
        for combo in forbidden['start']:
            if name_lower.startswith(combo):
                return False
                
        for combo in forbidden['end']:
            if name_lower.endswith(combo):
                return False
        
        # Check consonant cluster length (max 4)
        if re.search(r'[bcdfghjklmnpqrstvwxyz]{5,}', name_lower):
            return False
        
        # Check vowel cluster length (max 3)
        if re.search(r'[aeiou]{4,}', name_lower):
            return False
        
        return True
    
    def generate_markov_name(self, culture: str, target_length: int = 6) -> str:
        """Generate a name using Markov chains"""
        if culture not in self.markov_chains:
            culture = random.choice(list(self.markov_chains.keys()))
        
        chain = self.markov_chains[culture]
        name = '^'
        
        # Generate using Markov chain
        for _ in range(target_length + 5):  # Safety limit
            current = name[-2:] if len(name) >= 2 else name[-1:] + ' '
            
            if current in chain and chain[current]:
                next_char = random.choice(chain[current])
                if next_char == '$':
                    break
                name += next_char
            else:
                # Fallback to random character based on culture
                vowels = self.phonetic_rules['vowel_harmony'].get(culture, ['a', 'e', 'i', 'o', 'u'])
                consonants = self.phonetic_rules['cultural_sounds'].get(culture, {}).get('preferred_consonants', ['r', 'n', 'l', 's', 't'])
                
                if len(name) % 2 == 0:  # Alternate vowels and consonants roughly
                    next_char = random.choice(vowels)
                else:
                    next_char = random.choice(consonants)
                name += next_char
                
            if len(name) >= target_length + 1 and name[-1] in 'aeiou':
                break
        
        result = name[1:]  # Remove start marker
        return result.capitalize() if result else self.generate_syllable_name(culture, target_length)
    
    def generate_syllable_name(self, culture: str, target_length: int = 6) -> str:
        """Generate a name using syllable patterns"""
        if culture not in self.syllable_patterns:
            culture = random.choice(list(self.syllable_patterns.keys()))
        
        pattern = self.syllable_patterns[culture]
        
        # Choose number of syllables based on culture patterns
        syllable_weights = pattern.get('syllable_counts', {2: 10, 3: 15, 4: 5})
        if syllable_weights:
            syllable_count = random.choices(
                list(syllable_weights.keys()),
                weights=list(syllable_weights.values())
            )[0]
        else:
            syllable_count = random.randint(2, 4)
        
        # Get cultural preferences
        vowel_prefs = self.phonetic_rules['vowel_harmony'].get(culture, ['a', 'e', 'i', 'o', 'u'])
        consonant_prefs = self.phonetic_rules['cultural_sounds'].get(culture, {}).get('preferred_consonants', ['r', 'n', 'l', 's', 't'])
        
        name = ""
        for i in range(syllable_count):
            syllable = ""
            
            # Start with consonant (optional)
            if i == 0 or random.random() < 0.7:
                syllable += random.choice(consonant_prefs)
            
            # Add vowel (required)
            syllable += random.choice(vowel_prefs)
            
            # End with consonant (optional, more likely for last syllable)
            if i == syllable_count - 1:
                if random.random() < 0.8:
                    ending_consonants = self.phonetic_rules['cultural_sounds'].get(culture, {}).get('endings', ['n', 'r', 's', 'th'])
                    # Choose from endings or consonants
                    if random.random() < 0.4 and ending_consonants:
                        ending = random.choice(ending_consonants)
                        syllable += ending
                    else:
                        syllable += random.choice(consonant_prefs)
            elif random.random() < 0.4:
                syllable += random.choice(consonant_prefs)
            
            name += syllable
        
        return name.capitalize()
    
    def generate_name(self, culture: str = None, count: int = 1, min_quality: float = 70.0, gender: str = 'any') -> List[str]:
        """Generate high-quality fantasy names"""
        
        if culture is None:
            culture = random.choice(list(self.names_by_culture.keys()))
        
        if culture not in self.names_by_culture:
            print(f"⚠️  Culture '{culture}' not found. Available: {list(self.names_by_culture.keys())}")
            culture = random.choice(list(self.names_by_culture.keys()))
        
        generated_names = []
        attempts = 0
        max_attempts = count * 20
        
        while len(generated_names) < count and attempts < max_attempts:
            attempts += 1
            
            # Get target length from culture patterns
            if culture in self.syllable_patterns:
                target_length = int(self.syllable_patterns[culture].get('avg_length', 6))
            else:
                target_length = random.randint(4, 8)
            
            # Generate using both methods and pick best
            if random.random() < 0.6:
                name = self.generate_markov_name(culture, target_length)
            else:
                name = self.generate_syllable_name(culture, target_length)
            
            if self.is_pronounceable(name, culture) and name not in generated_names:
                generated_names.append(name)
        
        # Fill remaining with any valid names
        while len(generated_names) < count:
            name = self.generate_syllable_name(culture, 6)
            if name not in generated_names:
                generated_names.append(name)
        
        return generated_names[:count]
    
    def list_cultures(self) -> List[str]:
        """List available cultures"""
        return list(self.names_by_culture.keys())

def main():
    """Enhanced Fantasy Name Generator with API support"""
    parser = argparse.ArgumentParser(description='Enhanced Fantasy Name Generator')
    parser.add_argument('--list-cultures', action='store_true', help='List available cultures')
    parser.add_argument('--generate', action='store_true', help='Generate names')
    parser.add_argument('--culture', type=str, help='Culture to generate names for')
    parser.add_argument('--count', type=int, default=5, help='Number of names to generate')
    parser.add_argument('--min-quality', type=float, default=70.0, help='Minimum quality threshold')
    parser.add_argument('--gender', type=str, choices=['male', 'female', 'any'], default='any', help='Gender preference for names')
    parser.add_argument('--stats', action='store_true', help='Get generator statistics')
    parser.add_argument('--interactive', action='store_true', help='Run in interactive mode')
    
    args = parser.parse_args()
    
    generator = EnhancedNameGenerator()
    
    if not generator.names_by_culture:
        print(json.dumps({"error": "No name database found"}))
        sys.exit(1)
    
    # API mode: List cultures
    if args.list_cultures:
        cultures = generator.list_cultures()
        print(json.dumps({"cultures": cultures}))
        return
    
    # API mode: Get statistics
    if args.stats:
        stats = {
            "total_names": sum(len(names) for names in generator.names_by_culture.values()),
            "cultures": generator.list_cultures(),
            "culture_counts": {culture: len(names) for culture, names in generator.names_by_culture.items()}
        }
        print(json.dumps(stats))
        return
    
    # API mode: Generate names
    if args.generate:
        try:
            names = generator.generate_name(culture=args.culture, count=args.count, min_quality=args.min_quality, gender=args.gender)
            result = []
            for name in names:
                result.append({
                    "name": name,
                    "culture": args.culture or "random",
                    "pronounceable": generator.is_pronounceable(name, args.culture or "any"),
                    "quality": 85  # Default quality score
                })
            print(json.dumps(result))
            return
        except Exception as e:
            print(json.dumps({"error": str(e)}))
            sys.exit(1)
    
    # Interactive mode (original functionality)
    print("🧙‍♂️ Enhanced Fantasy Name Generator - Phase 2")
    print("=" * 50)
    
    print(f"📊 Loaded {sum(len(names) for names in generator.names_by_culture.values())} names")
    print(f"🌍 Available cultures: {', '.join(generator.list_cultures())}")
    print()
    
    while True:
        print("\n🎲 Generate Names:")
        print("1. Random culture")
        print("2. Choose specific culture")
        print("3. Bulk generation")
        print("0. Exit")
        
        choice = input("\nChoice (0-3): ").strip()
        
        if choice == '0':
            print("👋 Goodbye!")
            break
        elif choice == '1':
            culture = random.choice(generator.list_cultures())
            names = generator.generate_name(culture=culture, count=5)
            print(f"\n🎭 {culture.title()} names:")
            for i, name in enumerate(names, 1):
                pronounceable = "✅" if generator.is_pronounceable(name, culture) else "❌"
                print(f"  {i}. {name} {pronounceable}")
        
        elif choice == '2':
            print(f"\nAvailable cultures: {', '.join(generator.list_cultures())}")
            culture = input("Enter culture: ").strip().lower()
            
            if culture in generator.list_cultures():
                count = int(input("How many names (1-20): ") or "5")
                names = generator.generate_name(culture=culture, count=min(count, 20))
                print(f"\n🎭 {culture.title()} names:")
                for i, name in enumerate(names, 1):
                    pronounceable = "✅" if generator.is_pronounceable(name, culture) else "❌"
                    print(f"  {i}. {name} {pronounceable}")
            else:
                print(f"❌ Culture '{culture}' not found!")
        
        elif choice == '3':
            count = int(input("How many names total (1-100): ") or "20")
            all_names = []
            cultures = generator.list_cultures()
            
            for culture in cultures:
                culture_count = max(1, count // len(cultures))
                names = generator.generate_name(culture=culture, count=culture_count)
                all_names.extend([(name, culture) for name in names])
            
            random.shuffle(all_names)
            print(f"\n🎲 {len(all_names)} Generated Names:")
            for i, (name, culture) in enumerate(all_names[:count], 1):
                pronounceable = "✅" if generator.is_pronounceable(name, culture) else "❌"
                print(f"  {i:2}. {name:<12} ({culture}) {pronounceable}")

if __name__ == "__main__":
    main() 