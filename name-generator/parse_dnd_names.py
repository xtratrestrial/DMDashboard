#!/usr/bin/env python3
"""
D&D Name Parser - Phase 1 Enhancement
Parses the D&D Appendix B character names and combines with existing data
"""

import json
import re
from collections import Counter

def parse_dnd_names():
    """Parse D&D character names from the appendix data"""
    
    # The massive D&D name data from the attached file - sample subset
    dnd_name_data = """
Dragonborn, Female
01–02 	Akra
03–04 	Aasathra
05–06 	Antrara
07–08 	Arava
09–10 	Biri
11–12 	Blendaeth

Dragonborn, Male
01–02 	Adrex
03–04 	Arjhan
05–06 	Azzakh
07–08 	Balasar
09–10 	Baradad
11–12 	Bharash

Elf, Female Adult
01–02 	Adrie
03–04 	Ahinar
05–06 	Althaea
07–08 	Anastrianna
09–10 	Andraste
11–12 	Antinua

Elf, Male Adult
01–02 	Adran
03–04 	Aelar
05–06 	Aerdeth
07–08 	Ahvain
09–10 	Aramil
11–12 	Arannis

Dwarf, Female
01–02 	Anbera
03–04 	Artin
05–06 	Audhild
07–08 	Balifra
09–10 	Barbena
11–12 	Bardryn

Dwarf, Male
01–02 	Adrik
03–04 	Alberich
05–06 	Baern
07–08 	Barendd
09–10 	Beloril
11–12 	Brottor
"""

    print("🔍 Parsing D&D character names from appendix data...")
    
    # For now, let's manually add the key names since the full data is too large for this script
    manual_dnd_names = {
        'dragonborn_female': ['Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Korinn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadjit', 'Vezera', 'Zykroff'],
        'dragonborn_male': ['Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Ildrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjirik', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar'],
        'elf_female': ['Adrie', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethil', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla', 'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia'],
        'elf_male': ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efferil', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
        'dwarf_female': ['Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dariff', 'Delre', 'Diesa', 'Eldeth', 'Eridred', 'Falkrunn', 'Fallthra', 'Finellen', 'Gillydd', 'Gunnloda', 'Gurdis', 'Helgret', 'Helja', 'Hlin', 'Ilde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Oriff', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thodris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whurdred', 'Yurgunn'],
        'dwarf_male': ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Gilthur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangrim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Uraim', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'],
        'halfling_female': ['Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphemia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow'],
        'halfling_male': ['Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes'],
        'halforc_female': ['Arha', 'Baggi', 'Bendoo', 'Bilga', 'Brakka', 'Creega', 'Drenna', 'Ekk', 'Emen', 'Engong', 'Fistula', 'Gaaki', 'Gorga', 'Grai', 'Greeba', 'Grigi', 'Gynk', 'Hrathy', 'Huru', 'Ilga', 'Kabbarg', 'Kansif', 'Lagazi', 'Lezre', 'Murgen', 'Murook', 'Myev', 'Nagrette', 'Neega', 'Nella', 'Nogu', 'Oolah', 'Ootah', 'Ovak', 'Ownka', 'Puyet', 'Reeza', 'Shautha', 'Silgre', 'Sutha', 'Tagga', 'Tawar', 'Tomph', 'Ubada', 'Vanchu', 'Vola', 'Volen', 'Vorka', 'Yevelda', 'Zagga'],
        'halforc_male': ['Argran', 'Braak', 'Brug', 'Cagak', 'Dench', 'Dorn', 'Dren', 'Druuk', 'Feng', 'Gell', 'Gnarsh', 'Grumbar', 'Gubrash', 'Hagren', 'Henk', 'Hogar', 'Holg', 'Imsh', 'Karash', 'Karg', 'Keth', 'Korag', 'Krusk', 'Lubash', 'Megged', 'Mhurren', 'Mord', 'Morg', 'Nil', 'Nybarg', 'Odorr', 'Ohr', 'Rendar', 'Resh', 'Ront', 'Rrath', 'Sark', 'Scrag', 'Sheggen', 'Shump', 'Tanglar', 'Tarak', 'Thar', 'Thokk', 'Trag', 'Ugarth', 'Varg', 'Vilberg', 'Yurk', 'Zed'],
        'tiefling_female': ['Akta', 'Anakis', 'Armara', 'Astaro', 'Aym', 'Azza', 'Beleth', 'Bryseis', 'Bune', 'Criella', 'Damaia', 'Decarabia', 'Ea', 'Gadreel', 'Gomory', 'Hecat', 'Ishte', 'Jezebeth', 'Kali', 'Kallista', 'Kasdeya', 'Lerissa', 'Lilith', 'Makaria', 'Manea', 'Markosian', 'Mastema', 'Naamah', 'Nemeia', 'Nija', 'Orianna', 'Osah', 'Phelaia', 'Prosperine', 'Purah', 'Pyra', 'Rieta', 'Ronobe', 'Ronwe', 'Seddit', 'Seere', 'Sekhmet', 'Semyaza', 'Shava', 'Shax', 'Sorath', 'Uzza', 'Vapula', 'Vepar', 'Verin'],
        'tiefling_male': ['Abad', 'Ahrim', 'Akmen', 'Amnon', 'Andram', 'Astar', 'Balam', 'Barakas', 'Bathin', 'Caim', 'Chem', 'Cimer', 'Cressel', 'Damakos', 'Ekemon', 'Euron', 'Fenriz', 'Forcas', 'Habor', 'Iados', 'Kairon', 'Leucis', 'Mamnen', 'Mantus', 'Marbas', 'Melech', 'Merihim', 'Modean', 'Mordai', 'Mormo', 'Morthos', 'Nicor', 'Nirgel', 'Oriax', 'Paymon', 'Pelaios', 'Purson', 'Qemuel', 'Raam', 'Rimmon', 'Sammal', 'Skamos', 'Tethren', 'Thamuz', 'Therai', 'Valafar', 'Vassago', 'Xappan', 'Zepar', 'Zephan']
    }
    
    return manual_dnd_names

def load_existing_data():
    """Load our existing curated names"""
    try:
        with open('name_samples.json', 'r') as f:
            existing_data = json.load(f)
            return existing_data.get('names_by_category', {})
    except FileNotFoundError:
        return {}

def combine_and_analyze():
    """Combine D&D names with existing data and analyze patterns"""
    print("🚀 Fantasy Name Database Builder - Enhanced Phase 1")
    print("=" * 60)
    
    # Load existing curated names
    existing_names = load_existing_data()
    print(f"📚 Loaded {sum(len(names) for names in existing_names.values())} existing curated names")
    
    # Parse D&D names
    dnd_names = parse_dnd_names()
    print(f"🎲 Parsed {sum(len(names) for names in dnd_names.values())} D&D names")
    
    # Combine datasets
    combined_data = {}
    
    # Add existing names first
    for category, names_list in existing_names.items():
        if isinstance(names_list, list) and names_list:
            if names_list and isinstance(names_list[0], dict):
                # Structured format
                combined_data[category] = names_list
            else:
                # Convert simple list to structured format
                culture = category.split('_')[0] if '_' in category else 'human'
                gender = category.split('_')[1] if '_' in category else 'neutral'
                combined_data[category] = [
                    {
                        'name': name,
                        'culture': culture,
                        'gender': gender,
                        'source': 'literature_curated'
                    }
                    for name in names_list
                ]
    
    # Add D&D names
    for category, names_list in dnd_names.items():
        # Map D&D categories to our categories
        if category.startswith('dragonborn'):
            culture = 'dragonborn'
        elif category.startswith('halforc'):
            culture = 'halforc'
        elif category.startswith('tiefling'):
            culture = 'tiefling'
        else:
            culture = category.split('_')[0]
        
        gender = category.split('_')[-1] if '_' in category else 'neutral'
        
        structured_names = [
            {
                'name': name,
                'culture': culture,
                'gender': gender,
                'source': 'dnd_appendix'
            }
            for name in names_list
        ]
        
        if category in combined_data:
            combined_data[category].extend(structured_names)
        else:
            combined_data[category] = structured_names
    
    # Analyze patterns from combined data
    print("🔍 Analyzing name patterns from combined dataset...")
    
    all_names = []
    for category_names in combined_data.values():
        all_names.extend([entry['name'] for entry in category_names])
    
    # Pattern analysis
    syllables = Counter()
    prefixes = Counter()
    suffixes = Counter()
    consonant_clusters = Counter()
    vowel_patterns = Counter()
    
    for name in all_names:
        name_lower = name.lower()
        
        # Extract syllable patterns (basic)
        syllable_matches = re.findall(r'[bcdfghjklmnpqrstvwxyz]*[aeiou][bcdfghjklmnpqrstvwxyz]*', name_lower)
        for syllable in syllable_matches:
            if syllable and len(syllable) > 0:
                syllables[syllable] += 1
        
        # Extract prefixes and suffixes
        if len(name) >= 3:
            prefixes[name_lower[:2]] += 1
            prefixes[name_lower[:3]] += 1
            suffixes[name_lower[-2:]] += 1
            suffixes[name_lower[-3:]] += 1
        
        # Find consonant clusters  
        consonant_matches = re.findall(r'[bcdfghjklmnpqrstvwxyz]{2,3}', name_lower)
        for cluster in consonant_matches:
            consonant_clusters[cluster] += 1
            
        # Find vowel patterns
        vowel_matches = re.findall(r'[aeiou]{2,3}', name_lower)
        for pattern in vowel_matches:
            vowel_patterns[pattern] += 1
    
    # Prepare output data
    output_data = {
        'summary': {
            'total_names': sum(len(names) for names in combined_data.values()),
            'categories': {cat: len(names) for cat, names in combined_data.items()},
            'sources': ['literature_curated', 'dnd_appendix'],
            'cultures': list(set(entry['culture'] for category_names in combined_data.values() 
                               for entry in category_names))
        },
        'names_by_category': combined_data,
        'patterns': {
            'top_syllables': dict(syllables.most_common(100)),
            'top_prefixes': dict(prefixes.most_common(50)),
            'top_suffixes': dict(suffixes.most_common(50)),
            'consonant_clusters': dict(consonant_clusters.most_common(30)),
            'vowel_patterns': dict(vowel_patterns.most_common(20))
        }
    }
    
    # Save enhanced dataset
    with open('enhanced_name_database.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print(f"\n✅ Enhanced database created!")
    print(f"📊 Total names: {output_data['summary']['total_names']}")
    print(f"📁 Categories: {len(output_data['summary']['categories'])}")
    print(f"🌍 Cultures: {len(output_data['summary']['cultures'])}")
    
    print(f"\n🎭 Sample names by category:")
    print("=" * 50)
    for category, names_list in list(combined_data.items())[:8]:
        samples = [entry['name'] for entry in names_list[:6]]
        print(f"{category.replace('_', ' ').title()}: {', '.join(samples)}")
    
    print(f"\n📊 Top syllables: {list(syllables.most_common(15))}")
    print(f"🔤 Top prefixes: {list(prefixes.most_common(15))}")
    print(f"🔤 Top suffixes: {list(suffixes.most_common(15))}")
    
    print(f"\n🎉 Ready for Phase 2: Enhanced Name Generation!")
    
    return output_data

if __name__ == "__main__":
    combine_and_analyze()
