#!/usr/bin/env python3
"""
Add DMG 2024 Pricing to All Magic Items

This script processes all existing magic item JSON files and adds pricing information
based on the DMG 2024 pricing rules.
"""

import json
import sys
import os
from pathlib import Path

# Add the parent directory to the path so we can import our modules
sys.path.append(str(Path(__file__).parent.parent))

from src.parsers.pricing_calculator import DMG2024PricingCalculator

def process_dmg_items():
    """Process DMG 2024 items and add pricing"""
    
    calc = DMG2024PricingCalculator()
    
    # Load existing DMG items
    dmg_items_file = "data/official/dmg_2024_items.json"
    if not os.path.exists(dmg_items_file):
        print(f"❌ File not found: {dmg_items_file}")
        return
    
    print(f"📂 Processing {dmg_items_file}...")
    
    with open(dmg_items_file, 'r', encoding='utf-8') as f:
        items = json.load(f)
    
    processed_count = 0
    updated_items = []
    
    for item in items:
        # Get existing data
        name = item.get('name', '')
        rarity = item.get('rarity', '')
        category = item.get('category', '')
        
        # Map category to type for pricing
        item_type = ""
        if 'potion' in name.lower():
            item_type = "Potion"
        elif 'scroll' in name.lower():
            item_type = "Scroll"
        elif 'armor' in name.lower():
            item_type = "Armor"
        elif 'weapon' in name.lower() or 'sword' in name.lower() or 'bow' in name.lower():
            item_type = "Weapon"
        else:
            item_type = "Wondrous item"
        
        # Calculate pricing
        pricing_result = calc.calculate_price(name, rarity, item_type)
        
        # Create updated item with pricing
        updated_item = {
            **item,  # Keep all existing fields
            "type": item_type,
            "price_gp": pricing_result.final_price_gp,
            "is_consumable": pricing_result.is_consumable,
            "base_item_cost_gp": pricing_result.base_item_cost_gp,
            "pricing_notes": pricing_result.calculation_notes
        }
        
        updated_items.append(updated_item)
        processed_count += 1
        
        if processed_count % 50 == 0:
            print(f"   ⚡ Processed {processed_count} items...")
    
    # Save updated items
    backup_file = dmg_items_file + ".backup"
    os.rename(dmg_items_file, backup_file)
    print(f"💾 Backup created: {backup_file}")
    
    with open(dmg_items_file, 'w', encoding='utf-8') as f:
        json.dump(updated_items, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Updated {processed_count} DMG 2024 items with pricing")
    return processed_count

def process_multi_source_items():
    """Process items from other sources"""
    
    calc = DMG2024PricingCalculator()
    
    # Find all multi-source item files
    data_dir = Path("data/official")
    source_files = [
        "xanathar_items.json",
        "tasha_items.json", 
        "fizban_items.json",
        "eberron_items.json",
        "spelljammer_items.json",
        "planescape_items.json"
    ]
    
    total_processed = 0
    
    for source_file in source_files:
        file_path = data_dir / source_file
        if not file_path.exists():
            print(f"⏭️  Skipping {source_file} (not found)")
            continue
            
        print(f"📂 Processing {source_file}...")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            items = json.load(f)
        
        processed_count = 0
        updated_items = []
        
        for item in items:
            # Get existing data - handle different formats
            name = item.get('name', '')
            rarity = item.get('rarity', 'common')
            item_type = item.get('type', 'Wondrous item')
            
            # Calculate pricing
            pricing_result = calc.calculate_price(name, rarity, item_type)
            
            # Create updated item with pricing
            updated_item = {
                **item,  # Keep all existing fields
                "price_gp": pricing_result.final_price_gp,
                "is_consumable": pricing_result.is_consumable,
                "base_item_cost_gp": pricing_result.base_item_cost_gp,
                "pricing_notes": pricing_result.calculation_notes
            }
            
            updated_items.append(updated_item)
            processed_count += 1
        
        # Save updated items
        backup_file = str(file_path) + ".backup"
        os.rename(file_path, backup_file)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(updated_items, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Updated {processed_count} items in {source_file}")
        total_processed += processed_count
    
    return total_processed

def generate_pricing_summary():
    """Generate a summary of pricing statistics"""
    
    print("\n📊 PRICING SUMMARY:")
    print("=" * 50)
    
    # Load all items and analyze pricing
    data_dir = Path("data/official")
    all_files = list(data_dir.glob("*.json"))
    
    total_items = 0
    price_ranges = {
        "0-50 GP": 0,
        "51-500 GP": 0, 
        "501-5000 GP": 0,
        "5001-50000 GP": 0,
        "50000+ GP": 0,
        "Priceless": 0
    }
    
    rarity_stats = {}
    consumable_count = 0
    
    for file_path in all_files:
        if file_path.name.endswith('.backup'):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                items = json.load(f)
            
            for item in items:
                if 'price_gp' not in item:
                    continue
                    
                total_items += 1
                price = item['price_gp']
                rarity = item.get('rarity', 'unknown')
                
                # Price range analysis
                if price == 0:
                    price_ranges["Priceless"] += 1
                elif price <= 50:
                    price_ranges["0-50 GP"] += 1
                elif price <= 500:
                    price_ranges["51-500 GP"] += 1
                elif price <= 5000:
                    price_ranges["501-5000 GP"] += 1
                elif price <= 50000:
                    price_ranges["5001-50000 GP"] += 1
                else:
                    price_ranges["50000+ GP"] += 1
                
                # Rarity stats
                rarity_stats[rarity] = rarity_stats.get(rarity, 0) + 1
                
                # Consumable count
                if item.get('is_consumable', False):
                    consumable_count += 1
                    
        except Exception as e:
            print(f"⚠️  Error processing {file_path}: {e}")
    
    print(f"📦 Total Items with Pricing: {total_items}")
    print(f"🍺 Consumable Items: {consumable_count}")
    print()
    
    print("💰 Price Distribution:")
    for range_name, count in price_ranges.items():
        percentage = (count / total_items * 100) if total_items > 0 else 0
        print(f"   {range_name}: {count} items ({percentage:.1f}%)")
    
    print()
    print("✨ Rarity Distribution:")
    for rarity, count in sorted(rarity_stats.items()):
        percentage = (count / total_items * 100) if total_items > 0 else 0
        print(f"   {rarity.title()}: {count} items ({percentage:.1f}%)")

def main():
    """Main function to add pricing to all items"""
    
    print("💰 ADDING DMG 2024 PRICING TO ALL MAGIC ITEMS")
    print("=" * 60)
    
    # Process DMG items first
    dmg_count = process_dmg_items()
    
    # Process other source items
    other_count = process_multi_source_items()
    
    total_count = dmg_count + other_count
    
    print(f"\n🎯 COMPLETE: Added pricing to {total_count} magic items!")
    
    # Generate summary
    generate_pricing_summary()
    
    print("\n🔮 Ready for 3rd Edition economic analysis!")

if __name__ == "__main__":
    main() 