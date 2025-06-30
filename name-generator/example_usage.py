#!/usr/bin/env python3
"""
Example usage of enhanced_name_database.json

This demonstrates various ways to work with the fantasy name database.
"""

import json
import random
from collections import defaultdict

def load_name_database(filename="enhanced_name_database.json"):
    """Load the name database from JSON file."""
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def show_database_summary(db):
    """Display overview of the database."""
    print("=== DATABASE SUMMARY ===")
    print(f"Total names: {db['summary']['total_names']}")
    print(f"Cultures: {', '.join(db['summary']['cultures'])}")
    print(f"Sources: {', '.join(db['summary']['sources'])}")
    print()
    
    print("Names by category:")
    for category, count in db['summary']['categories'].items():
        print(f"  {category}: {count} names")
    print()

def get_names_by_culture(db, culture, gender=None):
    """Get all names for a specific culture, optionally filtered by gender."""
    names = []
    
    for category, name_list in db['names_by_category'].items():
        category_culture, category_gender = category.rsplit('_', 1)
        
        # Handle different culture naming conventions
        if culture.lower() in [category_culture.lower(), category_culture.replace('ish', '').lower()]:
            if gender is None or gender.lower() == category_gender.lower():
                names.extend([entry['name'] for entry in name_list])
    
    return names

def random_name_by_culture(db, culture, gender=None):
    """Get a random name from a specific culture."""
    names = get_names_by_culture(db, culture, gender)
    return random.choice(names) if names else None

def search_names(db, pattern):
    """Search for names containing a specific pattern."""
    matches = []
    
    for category, name_list in db['names_by_category'].items():
        for entry in name_list:
            if pattern.lower() in entry['name'].lower():
                matches.append({
                    'name': entry['name'],
                    'culture': entry['culture'],
                    'gender': entry['gender'],
                    'source': entry['source'],
                    'category': category
                })
    
    return matches

def get_pattern_analysis(db):
    """Access the linguistic pattern analysis."""
    return db['patterns']

def names_by_source(db, source):
    """Get names from a specific source (literature_curated or dnd_appendix)."""
    names = []
    
    for category, name_list in db['names_by_category'].items():
        for entry in name_list:
            if entry['source'] == source:
                names.append(entry)
    
    return names

def analyze_name_lengths(db):
    """Analyze name length distribution."""
    lengths = defaultdict(int)
    
    for category, name_list in db['names_by_category'].items():
        for entry in name_list:
            length = len(entry['name'])
            lengths[length] += 1
    
    return dict(lengths)

def find_longest_shortest_names(db):
    """Find the longest and shortest names in the database."""
    all_names = []
    
    for category, name_list in db['names_by_category'].items():
        for entry in name_list:
            all_names.append(entry)
    
    longest = max(all_names, key=lambda x: len(x['name']))
    shortest = min(all_names, key=lambda x: len(x['name']))
    
    return longest, shortest

def create_name_generator_from_patterns(db, culture):
    """Use pattern analysis to generate new names in a cultural style."""
    patterns = db['patterns']
    
    # Get common syllables for this culture (simplified approach)
    syllables = list(patterns['top_syllables'].keys())
    prefixes = list(patterns['top_prefixes'].keys())
    suffixes = list(patterns['top_suffixes'].keys())
    
    # Generate a name using cultural patterns
    if random.choice([True, False]):
        # Prefix + suffix approach
        name = random.choice(prefixes) + random.choice(suffixes)
    else:
        # Multiple syllables approach
        length = random.randint(2, 4)
        name = ''.join(random.choices(syllables, k=length))
    
    return name.capitalize()

def main():
    """Demonstrate various uses of the name database."""
    
    # Load the database
    print("Loading enhanced name database...")
    db = load_name_database()
    print()
    
    # Show summary
    show_database_summary(db)
    
    # Get names by culture
    print("=== NAMES BY CULTURE ===")
    elvish_names = get_names_by_culture(db, "elvish", "male")
    print(f"Elvish male names (first 10): {elvish_names[:10]}")
    
    dwarf_females = get_names_by_culture(db, "dwarf", "female")
    print(f"Dwarf female names (first 10): {dwarf_females[:10]}")
    print()
    
    # Random name generation
    print("=== RANDOM NAME GENERATION ===")
    for culture in ["elvish", "dwarvish", "human", "orcish"]:
        male_name = random_name_by_culture(db, culture, "male")
        female_name = random_name_by_culture(db, culture, "female")
        print(f"{culture.capitalize()}: {male_name} (M), {female_name} (F)")
    print()
    
    # Search functionality
    print("=== NAME SEARCH ===")
    names_with_thor = search_names(db, "thor")
    print(f"Names containing 'thor': {[n['name'] for n in names_with_thor]}")
    
    names_with_el = search_names(db, "el")
    print(f"Names containing 'el' (first 10): {[n['name'] for n in names_with_el[:10]]}")
    print()
    
    # Pattern analysis
    print("=== PATTERN ANALYSIS ===")
    patterns = get_pattern_analysis(db)
    print(f"Top 10 syllables: {list(patterns['top_syllables'].keys())[:10]}")
    print(f"Top 10 prefixes: {list(patterns['top_prefixes'].keys())[:10]}")
    print(f"Top 10 suffixes: {list(patterns['top_suffixes'].keys())[:10]}")
    print()
    
    # Source analysis
    print("=== SOURCE ANALYSIS ===")
    literature_names = names_by_source(db, "literature_curated")
    dnd_names = names_by_source(db, "dnd_appendix")
    print(f"Literature curated names: {len(literature_names)}")
    print(f"D&D Appendix names: {len(dnd_names)}")
    print()
    
    # Length analysis
    print("=== LENGTH ANALYSIS ===")
    lengths = analyze_name_lengths(db)
    print("Name length distribution:")
    for length in sorted(lengths.keys()):
        print(f"  {length} letters: {lengths[length]} names")
    print()
    
    longest, shortest = find_longest_shortest_names(db)
    print(f"Longest name: '{longest['name']}' ({len(longest['name'])} letters, {longest['culture']})")
    print(f"Shortest name: '{shortest['name']}' ({len(shortest['name'])} letters, {shortest['culture']})")
    print()
    
    # Pattern-based generation
    print("=== PATTERN-BASED NAME GENERATION ===")
    print("Generated names using cultural patterns:")
    for _ in range(10):
        generated = create_name_generator_from_patterns(db, "elvish")
        print(f"  {generated}")

if __name__ == "__main__":
    main() 