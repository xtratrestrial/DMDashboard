#!/usr/bin/env python3
"""
Demonstration of how enhanced_name_generator.py uses the database
"""

import json
from enhanced_name_generator import EnhancedNameGenerator

def main():
    # Load the generator (which loads the database)
    generator = EnhancedNameGenerator()
    
    print("🔍 HOW THE GENERATOR USES THE DATABASE")
    print("=" * 50)
    
    # 1. Show what data was loaded
    print("\n1️⃣ DATABASE LOADING:")
    print(f"   📚 Total cultures loaded: {len(generator.names_by_culture)}")
    print(f"   📖 Total names loaded: {sum(len(names) for names in generator.names_by_culture.values())}")
    
    # 2. Show Markov chain example
    print("\n2️⃣ MARKOV CHAIN TRAINING:")
    elvish_chain = generator.markov_chains.get('elvish', {})
    print(f"   🧝 Elvish chain patterns (sample): {list(elvish_chain.keys())[:10]}")
    if 'el' in elvish_chain:
        print(f"   📝 'el' can be followed by: {elvish_chain['el'][:5]}")
    
    # 3. Show cultural analysis
    print("\n3️⃣ CULTURAL PATTERN ANALYSIS:")
    if 'elvish' in generator.syllable_patterns:
        elvish_patterns = generator.syllable_patterns['elvish']
        print(f"   🧝 Elvish average length: {elvish_patterns.get('avg_length', 'unknown'):.1f}")
        print(f"   🗣️  Common vowel patterns: {list(elvish_patterns.get('vowel_patterns', {}).keys())[:5]}")
    
    if 'dwarf' in generator.syllable_patterns:
        dwarf_patterns = generator.syllable_patterns['dwarf']
        print(f"   🏔️  Dwarf average length: {dwarf_patterns.get('avg_length', 'unknown'):.1f}")
        print(f"   🗣️  Common vowel patterns: {list(dwarf_patterns.get('vowel_patterns', {}).keys())[:5]}")
    
    # 4. Show phonetic rules derived from database
    print("\n4️⃣ PHONETIC RULES (derived from database):")
    print(f"   🚫 Forbidden combinations: {generator.phonetic_rules['forbidden_combinations']['any'][:5]}")
    print(f"   🧝 Elvish preferred consonants: {generator.phonetic_rules['cultural_sounds']['elvish']['preferred_consonants']}")
    print(f"   🏔️  Dwarf preferred consonants: {generator.phonetic_rules['cultural_sounds']['dwarf']['preferred_consonants']}")
    
    # 5. Show generation process
    print("\n5️⃣ GENERATION PROCESS:")
    print("   Generating 3 names to show the process...")
    
    for culture in ['elvish', 'dwarf', 'human']:
        if culture in generator.names_by_culture:
            name = generator.generate_name(culture=culture, count=1)[0]
            is_pronounceable = generator.is_pronounceable(name, culture)
            print(f"   🎲 {culture.capitalize()}: '{name}' (pronounceable: {is_pronounceable})")
    
    # 6. Show how it references original names
    print("\n6️⃣ REFERENCE TO ORIGINAL DATABASE:")
    sample_elvish = generator.names_by_culture.get('elvish', [])[:5]
    print(f"   📚 Sample original elvish names: {sample_elvish}")
    print(f"   🔗 These were used to train the Markov chains and pattern analysis")

if __name__ == "__main__":
    main() 