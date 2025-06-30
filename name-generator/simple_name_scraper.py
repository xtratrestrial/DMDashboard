#!/usr/bin/env python3
"""
Simple Fantasy Name Scraper - Phase 1
Gathers curated fantasy names and analyzes patterns
"""

import json
from collections import Counter

def main():
    print("🚀 Fantasy Name Database Scraper - Phase 1")
    print("=" * 60)
    
    # High-quality fantasy names from literature
    names_data = {
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
    
    # Convert to structured format
    structured_data = {}
    for category, names in names_data.items():
        culture, gender = category.split('_')
        structured_data[category] = [
            {
                'name': name,
                'culture': culture,
                'gender': gender,
                'source': 'literature_curated'
            }
            for name in names
        ]
    
    # Analyze patterns
    print("🔍 Analyzing name patterns...")
    import re
    
    all_names = []
    for category_names in structured_data.values():
        all_names.extend([entry['name'] for entry in category_names])
    
    syllables = Counter()
    prefixes = Counter()
    suffixes = Counter()
    
    for name in all_names:
        # Extract syllable patterns
        syllable_matches = re.findall(r'[bcdfghjklmnpqrstvwxyz]*[aeiou][bcdfghjklmnpqrstvwxyz]*', name.lower())
        for syllable in syllable_matches:
            if syllable:
                syllables[syllable] += 1
        
        # Extract prefixes and suffixes
        if len(name) >= 3:
            prefixes[name[:2].lower()] += 1
            prefixes[name[:3].lower()] += 1
            suffixes[name[-2:].lower()] += 1
            suffixes[name[-3:].lower()] += 1
    
    # Prepare output
    output_data = {
        'summary': {
            'total_names': sum(len(names) for names in structured_data.values()),
            'categories': {cat: len(names) for cat, names in structured_data.items()},
            'sources': ['literature_curated']
        },
        'names_by_category': structured_data,
        'patterns': {
            'top_syllables': dict(syllables.most_common(50)),
            'top_prefixes': dict(prefixes.most_common(30)),
            'top_suffixes': dict(suffixes.most_common(30))
        }
    }
    
    # Save to file
    with open('name_samples.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print(f"✅ Collected {output_data['summary']['total_names']} fantasy names")
    print("\n🎭 Sample names by category:")
    print("=" * 50)
    
    for category, names_list in structured_data.items():
        samples = [entry['name'] for entry in names_list[:8]]
        print(f"{category.replace('_', ' ').title()}: {', '.join(samples)}")
    
    print(f"\n📊 Top syllables: {list(syllables.most_common(10))}")
    print(f"🎯 Ready for Phase 2!")

if __name__ == "__main__":
    main()
