#!/usr/bin/env python3
"""
Script to parse DMG 2024 Magic Item Tables and generate structured data files.
"""

import sys
from pathlib import Path

# Add src to path for imports
sys.path.append(str(Path(__file__).parent.parent / 'src'))

from parsers.dmg_parser import DMGTableParser

def main():
    """Main parsing function."""
    print("🎲 DMG 2024 Magic Item Table Parser")
    print("=" * 50)
    
    # Read the raw table data
    raw_data_file = Path(__file__).parent.parent / 'data' / 'official' / 'dmg_2024_raw_tables.txt'
    
    if not raw_data_file.exists():
        print(f"❌ Error: Raw data file not found at {raw_data_file}")
        return 1
    
    print(f"📖 Reading raw table data from: {raw_data_file}")
    
    with open(raw_data_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"📊 Content size: {len(content)} characters")
    
    # Initialize parser and process tables
    parser = DMGTableParser()
    
    print("\n🔍 Parsing tables...")
    tables = parser.parse_table_content(content)
    
    print(f"\n✅ Parsing Results:")
    print(f"   📚 Total tables found: {len(tables)}")
    print(f"   🎯 Total items parsed: {len(parser.items)}")
    
    # Show breakdown by table type
    table_types = {}
    for table in tables:
        table_type = table.table_type
        if table_type not in table_types:
            table_types[table_type] = 0
        table_types[table_type] += len(table.items)
    
    print("\n📋 Items by Category:")
    for table_type, count in table_types.items():
        print(f"   {table_type.title()}: {count} items")
    
    # Show rarity distribution
    rarity_counts = {}
    for item in parser.items:
        rarity = item.rarity
        if rarity not in rarity_counts:
            rarity_counts[rarity] = 0
        rarity_counts[rarity] += 1
    
    print("\n🌟 Items by Rarity:")
    for rarity, count in sorted(rarity_counts.items()):
        print(f"   {rarity.title()}: {count} items")
    
    # Save processed data
    output_dir = Path(__file__).parent.parent / 'data' / 'official'
    
    print(f"\n💾 Saving processed data to: {output_dir}")
    parser.save_to_json(output_dir)
    
    print("\n🎉 Parsing complete!")
    print("\n📁 Generated files:")
    print(f"   • dmg_2024_tables.json - Complete table structures")
    print(f"   • dmg_2024_items.json - All individual items")
    print(f"   • dmg_2024_generation_rules.json - Generation rules (placeholder)")
    
    return 0

if __name__ == "__main__":
    exit(main()) 