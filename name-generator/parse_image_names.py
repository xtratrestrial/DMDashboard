#!/usr/bin/env python3
"""
Parse character names from D&D Character Naming Table image
and integrate with enhanced_name_database.json
"""

import json
import os
from collections import defaultdict

def load_existing_database():
    """Load the current enhanced database"""
    try:
        with open('enhanced_name_database.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print("❌ Enhanced database not found. Creating new one...")
        return create_empty_database()

def create_empty_database():
    """Create empty database structure"""
    return {
        "summary": {
            "total_names": 0,
            "categories": {},
            "sources": ["literature_curated", "dnd_appendix", "dnd_naming_table"],
            "cultures": []
        },
        "names_by_category": {},
        "patterns": {}
    }

def parse_names_from_image():
    """
    Parse names from the D&D Character Naming Table image
    Organized by race and gender from the visible table
    """
    
    # Names extracted from the image table
    image_names = {
        "dwarf_male": [
            "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", 
            "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", 
            "Morgran", "Morkral", "Nordak", "Olunt", "Orsik", "Oskar", "Rangrim", "Rurik", 
            "Taklinn", "Thoradin", "Thorin", "Thradal", "Tordek", "Traubon", "Travok", 
            "Ulfgar", "Veit", "Vondal", "Beloril", "Dalgal", "Duergath", "Dworic", "Elaim", 
            "Erias", "Fallond", "Gilthur", "Gimgen", "Gimurt", "Kilvar", "Nalral", "Nuraval", 
            "Oloric", "Reirak", "Torbik", "Ungart", "Vondur"
        ],
        
        "dwarf_female": [
            "Anbera", "Artin", "Audhild", "Barbena", "Bardryn", "Bolhild", "Dariff", "Delre", 
            "Diesa", "Eldeth", "Eridred", "Falkrunn", "Finellen", "Gillydd", "Gunnloda", 
            "Gurdis", "Helgret", "Helja", "Hlin", "Ilde", "Jarana", "Kathra", "Kilia", 
            "Liftrasa", "Mardred", "Riswynn", "Sannl", "Therlin", "Torbera", "Torgga", 
            "Urshar", "Valida", "Vistra", "Vonana", "Werydd", "Whurdred", "Yurgunn", 
            "Balifra", "Dagnal", "Fallthra", "Kristryd", "Marastyr", "Morana", "Nalaed", 
            "Nora", "Nurkara", "Oriff", "Ovina", "Thodris", "Tordrid"
        ],
        
        "elf_male": [
            "Adran", "Aelar", "Aramil", "Arannis", "Berrian", "Carric", "Dayereth", "Eiravel", 
            "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Halimath", "Heian", "Himo", 
            "Immeral", "Ivellios", "Korfel", "Lamlis", "Laucian", "Mindartis", "Naal", "Nutae", 
            "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Silvyr", "Soveliss", "Suhnae", 
            "Thamior", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis", "Aerdeth", 
            "Ahvain", "Aust", "Beiro", "Caeldrim", "Dreali", "Efferil", "Fivin", "Gennal", 
            "Lucan", "Rolen", "Silvyr", "Tharivol", "Azaki"
        ],
        
        "elf_female": [
            "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", 
            "Bethrynna", "Birel", "Caelynn", "Dara", "Drusilia", "Enna", "Galinndan", "Hadarai", 
            "Halimath", "Immeral", "Ivellios", "Jelenneth", "Keyleth", "Leshanna", "Lia", 
            "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairla", 
            "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", 
            "Vadania", "Valanthe", "Valna", "Xanaphia", "Ahinar", "Andraste", "Chaedi", 
            "Claira", "Elama", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", 
            "Jarsali", "Maiathah", "Malquis", "Myathethil", "Ridaro"
        ],
        
        "halfling_male": [
            "Alton", "Ander", "Bernie", "Bobbin", "Cade", "Callus", "Corrin", "Dannad", 
            "Danniel", "Eddie", "Egart", "Eldon", "Errich", "Fildo", "Finnan", "Franklin", 
            "Garret", "Garth", "Gilbert", "Gob", "Harol", "Igor", "Jasper", "Keith", "Kevin", 
            "Lazam", "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo", "Morrin", "Nebin", 
            "Nevil", "Osborn", "Ostran", "Oswalt", "Perrin", "Poppy", "Reed", "Roscoe", 
            "Shardon", "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes", "Beau", "Berris", 
            "Bobbin", "Cade", "Callus", "Corrin", "Dannad", "Danniel"
        ],
        
        "halfling_female": [
            "Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", 
            "Dee", "Dell", "Eida", "Eran", "Euphemia", "Georgina", "Gynnie", "Harriet", 
            "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", 
            "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Pearl", "Pennie", 
            "Philomena", "Portia", "Robbie", "Rose", "Saral", "Seraphina", "Shaena", "Stacee", 
            "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow", "Andry", 
            "Anne", "Bella", "Blossom", "Bree", "Callie"
        ],
        
        "halforc_male": [
            "Argran", "Braak", "Brug", "Cagak", "Dench", "Dorn", "Dren", "Druuk", "Feng", 
            "Gell", "Gnarsh", "Grumbar", "Gubrash", "Hagren", "Henk", "Hogar", "Holg", "Imsh", 
            "Karash", "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren", "Mord", 
            "Morg", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh", "Ront", "Rrath", 
            "Sark", "Scrag", "Sheggen", "Shump", "Tanglar", "Tarak", "Thar", "Thokk", "Trag", 
            "Ugarth", "Varg", "Vilberg", "Yurk", "Zed", "Braak", "Brug", "Cagak", "Dench"
        ],
        
        "halforc_female": [
            "Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna", "Ekk", "Emen", 
            "Engong", "Fistula", "Gaaki", "Gorga", "Grai", "Greeba", "Grigi", "Gynk", "Hrathy", 
            "Huru", "Ilga", "Kabbarg", "Kansif", "Lagazi", "Lezre", "Murgen", "Murook", "Myev", 
            "Nagrette", "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet", 
            "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph", "Ubada", "Vanchu", 
            "Vola", "Volen", "Vorka", "Yevelda", "Zagga", "Baggi", "Bendoo", "Bilga"
        ],
        
        "human_male": [
            "Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", 
            "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", 
            "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Lamlis", "Mal", "Mival", 
            "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", 
            "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", 
            "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur", "Borivik", "Faurgar", "Jandar", 
            "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "Anton", "Diero", 
            "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero"
        ],
        
        "human_female": [
            "Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", 
            "Arveene", "Esvele", "Hadarai", "Immith", "Ivara", "Lureene", "Miri", "Rowan", 
            "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", 
            "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", 
            "Westra", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", 
            "Umara", "Zolis", "Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", 
            "Tammith", "Yuldra", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", 
            "Quara", "Selise", "Vonda"
        ]
    }
    
    return image_names

def merge_with_database(existing_db, new_names):
    """Merge new names with existing database"""
    
    # Update categories and add new names
    for category, names in new_names.items():
        
        # Determine culture from category
        if category.startswith('dwarf'):
            culture = 'dwarf'
        elif category.startswith('elf'):
            culture = 'elf'  
        elif category.startswith('halfling'):
            culture = 'halfling'
        elif category.startswith('halforc'):
            culture = 'halforc'
        elif category.startswith('human'):
            culture = 'human'
        else:
            culture = 'unknown'
            
        # Determine gender
        gender = 'male' if category.endswith('_male') else 'female'
        
        # Create category if it doesn't exist
        if category not in existing_db['names_by_category']:
            existing_db['names_by_category'][category] = []
        
        # Add new names (avoid duplicates)
        existing_names = {entry['name'] for entry in existing_db['names_by_category'][category]}
        
        for name in names:
            if name not in existing_names:
                existing_db['names_by_category'][category].append({
                    'name': name,
                    'culture': culture,
                    'gender': gender,
                    'source': 'dnd_naming_table'
                })
        
        # Update summary
        existing_db['summary']['categories'][category] = len(existing_db['names_by_category'][category])
        
        if culture not in existing_db['summary']['cultures']:
            existing_db['summary']['cultures'].append(culture)
    
    # Update total count
    existing_db['summary']['total_names'] = sum(len(names) for names in existing_db['names_by_category'].values())
    
    return existing_db

def save_enhanced_database(database):
    """Save the enhanced database"""
    with open('enhanced_name_database.json', 'w', encoding='utf-8') as f:
        json.dump(database, f, indent=2, ensure_ascii=False)

def main():
    """Main execution"""
    print("🎲 Parsing D&D Character Naming Table...")
    
    # Load existing database
    existing_db = load_existing_database()
    print(f"📚 Loaded existing database with {existing_db['summary']['total_names']} names")
    
    # Parse new names from image
    new_names = parse_names_from_image()
    total_new = sum(len(names) for names in new_names.values())
    print(f"🆕 Parsed {total_new} new names from image table")
    
    # Show breakdown
    for category, names in new_names.items():
        print(f"   {category}: {len(names)} names")
    
    # Merge with existing database  
    enhanced_db = merge_with_database(existing_db, new_names)
    
    # Save enhanced database
    save_enhanced_database(enhanced_db)
    
    print(f"\n✅ Enhanced database saved!")
    print(f"📊 Total names: {enhanced_db['summary']['total_names']}")
    print(f"🌍 Cultures: {enhanced_db['summary']['cultures']}")
    print(f"📖 Sources: {enhanced_db['summary']['sources']}")
    
    print(f"\n🎯 Database ready for enhanced AI training!")

if __name__ == "__main__":
    main() 