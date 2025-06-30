#!/usr/bin/env python3
"""
Analyze extracted name patterns and create a simple name generator
"""

import json
import random
import re
from collections import defaultdict

class NamePatternAnalyzer:
    def __init__(self, data_file='enhanced_scraped_data.json'):
        with open(data_file, 'r') as f:
            self.data = json.load(f)
        
        self.name_components = defaultdict(list)
        self.generation_rules = {}
        
    def analyze_patterns(self):
        """Analyze all discovered patterns"""
        print("🔍 Analyzing extracted patterns...")
        
        for source_name, source_data in self.data['scraped_data'].items():
            print(f"\n📂 Source: {source_name}")
            
            if 'patterns' in source_data:
                print(f"   Found {len(source_data['patterns'])} patterns")
                for pattern in source_data['patterns']:
                    var_name = pattern['variable']
                    items = pattern['items']
                    print(f"   - {var_name}: {len(items)} items")
                    
                    # Categorize the pattern
                    category = self.categorize_pattern(var_name, items)
                    self.name_components[category].extend(items)
                    
                    # Show sample items
                    sample_items = items[:10] if len(items) > 10 else items
                    print(f"     Samples: {', '.join(sample_items)}")
            
            if 'forms' in source_data:
                print(f"   Found {len(source_data['forms'])} forms")
                for form in source_data['forms']:
                    if 'selects' in form:
                        for select in form['selects']:
                            if select['options']:
                                print(f"   - {select['name']}: {len(select['options'])} options")
                                print(f"     Options: {', '.join(select['options'][:10])}")
    
    def categorize_pattern(self, var_name, items):
        """Categorize patterns based on variable name and content"""
        var_lower = var_name.lower()
        
        # Simple categorization based on variable name
        if 'consonant' in var_lower:
            return 'consonants'
        elif 'vowel' in var_lower:
            return 'vowels'
        elif 'syllable' in var_lower:
            return 'syllables'
        elif 'prefix' in var_lower or 'begin' in var_lower or 'start' in var_lower:
            return 'prefixes'
        elif 'suffix' in var_lower or 'end' in var_lower:
            return 'suffixes'
        elif 'first' in var_lower:
            return 'first_names'
        elif 'last' in var_lower or 'surname' in var_lower:
            return 'last_names'
        elif 'middle' in var_lower:
            return 'middle_parts'
        else:
            # Try to analyze content
            if len(items) > 0:
                avg_length = sum(len(item) for item in items) / len(items)
                if avg_length <= 2:
                    return 'short_syllables'
                elif avg_length <= 4:
                    return 'medium_syllables'
                else:
                    return 'long_components'
            
            return 'unknown'
    
    def create_basic_syllable_sets(self):
        """Create basic syllable sets for name generation"""
        print("\n🔧 Creating basic syllable sets...")
        
        # Basic consonant and vowel patterns for syllable generation
        consonants = list(set(self.name_components.get('consonants', [])))
        vowels = list(set(self.name_components.get('vowels', [])))
        
        if not consonants:
            consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
        
        if not vowels:
            vowels = ['a', 'e', 'i', 'o', 'u']
        
        # Create syllable patterns
        syllables = []
        
        # CV (consonant-vowel) patterns
        for c in consonants[:10]:  # Limit for reasonable output
            for v in vowels:
                syllables.append(c + v)
        
        # CVC patterns
        for c1 in consonants[:8]:
            for v in vowels:
                for c2 in consonants[:8]:
                    if c1 != c2:  # Avoid repetition
                        syllables.append(c1 + v + c2)
        
        self.name_components['generated_syllables'] = syllables[:100]  # Limit to 100
        
        print(f"Generated {len(self.name_components['generated_syllables'])} syllable patterns")
        print(f"Sample syllables: {', '.join(syllables[:20])}")
    
    def generate_names(self, count=20, name_type='fantasy'):
        """Generate names using discovered patterns"""
        print(f"\n🎲 Generating {count} {name_type} names...")
        
        generated_names = []
        
        # Use available components or fallback to generated ones
        available_components = []
        
        # Prioritize different component types
        for component_type in ['syllables', 'prefixes', 'suffixes', 'medium_syllables', 'short_syllables', 'generated_syllables']:
            if component_type in self.name_components and self.name_components[component_type]:
                available_components.extend(self.name_components[component_type])
                break
        
        if not available_components:
            print("⚠️  No suitable components found, creating basic syllables...")
            self.create_basic_syllable_sets()
            available_components = self.name_components['generated_syllables']
        
        # Remove duplicates and clean up
        available_components = list(set([comp.strip() for comp in available_components if comp.strip()]))
        
        print(f"Using {len(available_components)} components for generation")
        
        for i in range(count):
            # Generate names with 1-3 syllables
            syllable_count = random.choice([1, 2, 2, 3])  # Bias toward 2 syllables
            
            name_parts = []
            for j in range(syllable_count):
                part = random.choice(available_components)
                name_parts.append(part)
            
            # Join and capitalize
            name = ''.join(name_parts).capitalize()
            
            # Basic cleanup
            name = re.sub(r'(.)\1{2,}', r'\1\1', name)  # Limit consecutive letters
            
            generated_names.append(name)
        
        return generated_names
    
    def save_name_generator_data(self, filename='name_generator_data.json'):
        """Save processed data for future use"""
        output_data = {
            'components': dict(self.name_components),
            'generation_rules': self.generation_rules,
            'metadata': {
                'sources': list(self.data['scraped_data'].keys()),
                'component_types': list(self.name_components.keys()),
                'total_components': sum(len(comps) for comps in self.name_components.values())
            }
        }
        
        with open(filename, 'w') as f:
            json.dump(output_data, f, indent=2)
        
        print(f"\n💾 Saved name generator data to {filename}")
        return output_data

def main():
    print("🏰 Fantasy Name Pattern Analyzer")
    print("=" * 50)
    
    analyzer = NamePatternAnalyzer()
    
    # Analyze patterns
    analyzer.analyze_patterns()
    
    # Create additional syllable sets if needed
    analyzer.create_basic_syllable_sets()
    
    # Generate sample names
    sample_names = analyzer.generate_names(20)
    
    print(f"\n🎭 Generated Sample Names:")
    for i, name in enumerate(sample_names, 1):
        print(f"{i:2d}. {name}")
    
    # Save data for future use
    analyzer.save_name_generator_data()
    
    print(f"\n✨ Analysis complete! You now have:")
    print(f"   📝 {len(analyzer.name_components)} component categories")
    print(f"   🎯 {sum(len(comps) for comps in analyzer.name_components.values())} total components")
    print(f"   🎲 A working name generator")

if __name__ == "__main__":
    main() 