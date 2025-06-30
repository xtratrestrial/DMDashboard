#!/usr/bin/env python3
"""
Xanathar's Guide Magic Items Parser

Parses magic items from Xanathar's Guide To Everything markdown format
and converts them to structured JSON for integration with the main loot system.
"""

import re
import json
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional, Any
from pathlib import Path


@dataclass
class XanatharItem:
    """Represents a single magic item from Xanathar's Guide"""
    name: str
    type: str  # e.g., "Wondrous item", "Weapon (any sword)", "Armor (shield)"
    rarity: str  # e.g., "common", "uncommon", "rare"
    attunement: Optional[str] = None  # e.g., "requires attunement by a wizard"
    description: str = ""
    source: str = "Xanathar's Guide"
    category: str = "Common Magic Items"  # Most Xanathar items are common


class XanatharParser:
    """Parses Xanathar's Guide magic items from Markdown format"""
    
    def __init__(self, file_path: str):
        self.file_path = Path(file_path)
        self.items: List[XanatharItem] = []
        
    def parse(self) -> List[XanatharItem]:
        """Parse the Xanathar's Guide file and extract all magic items"""
        try:
            with open(self.file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            return self._extract_items(content)
            
        except FileNotFoundError:
            print(f"Error: File not found at {self.file_path}")
            return []
        except Exception as e:
            print(f"Error parsing file: {e}")
            return []
    
    def _extract_items(self, content: str) -> List[XanatharItem]:
        """Extract individual magic items from the content"""
        items = []
        
        # Split content into sections by item names (lines that aren't indented and have title case)
        lines = content.split('\n')
        current_item = None
        current_description = []
        
        for line in lines:
            line = line.strip()
            
            # Skip empty lines and chapter headers
            if not line or line.startswith('Chapter') or line.startswith('Items '):
                continue
                
            # Check if this is an item name (title case, not all caps, not a type line)
            if self._is_item_name(line):
                # Save previous item if exists
                if current_item:
                    current_item.description = '\n'.join(current_description).strip()
                    items.append(current_item)
                
                # Start new item
                current_item = XanatharItem(
                    name=line,
                    type="",
                    rarity="",
                    attunement=None,
                    description="",
                    source="Xanathar's Guide",
                    category="Common Magic Items"
                )
                current_description = []
                
            # Check if this is an item type/rarity line
            elif current_item and self._is_type_line(line):
                type_info = self._parse_type_line(line)
                current_item.type = type_info['type']
                current_item.rarity = type_info['rarity']
                current_item.attunement = type_info['attunement']
                
            # Otherwise, it's part of the description
            elif current_item and line:
                current_description.append(line)
        
        # Don't forget the last item
        if current_item:
            current_item.description = '\n'.join(current_description).strip()
            items.append(current_item)
            
        return items
    
    def _is_item_name(self, line: str) -> bool:
        """Determine if a line is an item name"""
        # Item names are typically title case and not type descriptions
        if not line:
            return False
            
        # Skip obvious non-item lines
        skip_patterns = [
            r'^Wondrous item',
            r'^Weapon \(',
            r'^Armor \(',
            r'^This ',
            r'^While ',
            r'^You can',
            r'^When ',
            r'^If ',
            r'^The ',
            r'^\d+',  # Numbers
            r'^[A-Z][A-Z\s]+$',  # ALL CAPS lines
        ]
        
        for pattern in skip_patterns:
            if re.match(pattern, line):
                return False
                
        # Item names are usually title case with multiple words
        words = line.split()
        if len(words) < 2:
            return False
            
        # Check if it looks like a title (first letter caps, reasonable length)
        if line[0].isupper() and len(line) < 50 and not line.endswith('.'):
            return True
            
        return False
    
    def _is_type_line(self, line: str) -> bool:
        """Check if a line contains item type/rarity information"""
        type_patterns = [
            r'^Wondrous item',
            r'^Weapon \(',
            r'^Armor \(',
        ]
        
        return any(re.match(pattern, line) for pattern in type_patterns)
    
    def _parse_type_line(self, line: str) -> Dict[str, Optional[str]]:
        """Parse item type, rarity, and attunement from type line"""
        # Example: "Wondrous item, common (requires attunement by a wizard)"
        # Example: "Weapon (any sword), common"
        # Example: "Armor (shield), common"
        
        result = {
            'type': '',
            'rarity': 'common',  # Most Xanathar items are common
            'attunement': None
        }
        
        # Extract type (everything before the first comma)
        if ',' in line:
            result['type'] = line.split(',')[0].strip()
            rest = line.split(',', 1)[1].strip()
        else:
            result['type'] = line.strip()
            rest = ''
        
        # Extract rarity and attunement from the rest
        if rest:
            # Check for attunement requirement
            attunement_match = re.search(r'\(([^)]*requires attunement[^)]*)\)', rest)
            if attunement_match:
                result['attunement'] = attunement_match.group(1)
                # Remove attunement part to get rarity
                rest = re.sub(r'\([^)]*requires attunement[^)]*\)', '', rest).strip()
            
            # Extract rarity (common, uncommon, rare, very rare, legendary)
            rarity_match = re.search(r'\b(common|uncommon|rare|very rare|legendary)\b', rest, re.IGNORECASE)
            if rarity_match:
                result['rarity'] = rarity_match.group(1).lower()
        
        return result
    
    def save_to_json(self, output_path: str) -> bool:
        """Save parsed items to JSON file"""
        try:
            # Convert items to dictionaries
            items_data = [asdict(item) for item in self.items]
            
            # Create summary data
            output_data = {
                'metadata': {
                    'source': 'Xanathar\'s Guide To Everything',
                    'total_items': len(items_data),
                    'parsing_date': None,  # Will be set by calling code if needed
                    'rarity_distribution': self._get_rarity_distribution()
                },
                'items': items_data
            }
            
            with open(output_path, 'w', encoding='utf-8') as file:
                json.dump(output_data, file, indent=2, ensure_ascii=False)
                
            print(f"Successfully saved {len(items_data)} items to {output_path}")
            return True
            
        except Exception as e:
            print(f"Error saving to JSON: {e}")
            return False
    
    def _get_rarity_distribution(self) -> Dict[str, int]:
        """Get count of items by rarity"""
        distribution = {}
        for item in self.items:
            rarity = item.rarity or 'unknown'
            distribution[rarity] = distribution.get(rarity, 0) + 1
        return distribution
    
    def print_summary(self):
        """Print a summary of parsed items"""
        print(f"\n📊 Xanathar's Guide Parsing Summary")
        print(f"{'='*50}")
        print(f"Total Items Parsed: {len(self.items)}")
        
        # Rarity distribution
        distribution = self._get_rarity_distribution()
        print(f"\nRarity Distribution:")
        for rarity, count in sorted(distribution.items()):
            percentage = (count / len(self.items)) * 100 if self.items else 0
            print(f"  {rarity.title()}: {count} items ({percentage:.1f}%)")
        
        # Show first few items as examples
        print(f"\nSample Items:")
        for i, item in enumerate(self.items[:5]):
            print(f"  {i+1}. {item.name}")
            print(f"     Type: {item.type}")
            print(f"     Rarity: {item.rarity}")
            if item.attunement:
                print(f"     Attunement: {item.attunement}")
            print()


def main():
    """Main function for standalone execution"""
    import argparse
    from datetime import datetime
    
    parser = argparse.ArgumentParser(description='Parse Xanathar\'s Guide magic items')
    parser.add_argument('input_file', help='Path to Xanathar\'s Guide markdown file')
    parser.add_argument('-o', '--output', default='xanathar_items.json', 
                       help='Output JSON file path')
    parser.add_argument('-v', '--verbose', action='store_true',
                       help='Print detailed parsing information')
    
    args = parser.parse_args()
    
    # Parse the file
    xanathar_parser = XanatharParser(args.input_file)
    items = xanathar_parser.parse()
    
    if not items:
        print("No items were parsed. Please check the input file format.")
        return
    
    # Print summary
    xanathar_parser.print_summary()
    
    # Save to JSON
    success = xanathar_parser.save_to_json(args.output)
    
    if success:
        print(f"\n✅ Successfully parsed and saved Xanathar's items to {args.output}")
    else:
        print(f"\n❌ Failed to save items to {args.output}")


if __name__ == "__main__":
    main() 