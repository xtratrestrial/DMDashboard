#!/usr/bin/env python3
"""
Multi-Source D&D Magic Items Parser

Parses magic items from multiple D&D source books and creates a unified data structure.
Supports: DMG 2024, Xanathar's Guide, Tasha's Cauldron, Fizban's Treasury, Eberron, Spelljammer, Planescape
"""

import re
import json
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional, Any
from pathlib import Path
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class MagicItem:
    """Represents a single magic item from any D&D source"""
    name: str
    type: str  # e.g., "Wondrous item", "Weapon (any sword)", "Armor (shield)"
    rarity: str  # e.g., "common", "uncommon", "rare", "very rare", "legendary"
    source: str  # e.g., "DMG 2024", "Xanathar's Guide", "Tasha's Cauldron"
    description: str = ""
    attunement: Optional[str] = None  # e.g., "requires attunement by a wizard"
    category: str = ""  # e.g., "Common Magic Items", "Armaments"


class MultiSourceParser:
    """Parses magic items from multiple D&D source books"""
    
    def __init__(self):
        self.all_items: List[MagicItem] = []
        self.source_stats: Dict[str, Dict] = {}
        
    def parse_all_sources(self, sources_dir: str) -> Dict[str, List[MagicItem]]:
        """Parse all available source files and return organized results"""
        sources_path = Path(sources_dir)
        results = {}
        
        # Define source file mappings
        source_files = {
            "Xanathar's Guide": "xanathar_guide.md",
            "Tasha's Cauldron": "Tasha's Cauldren of Everything.md",
            "Fizban's Treasury": "Fizban's Treasury of Dragons.md", 
            "Eberron": "Ebberon: Rising From The Last War.md",
            "Spelljammer": "spelljammer.md",
            "Planescape": "Planescape.md"
        }
        
        for source_name, filename in source_files.items():
            file_path = sources_path / filename
            if file_path.exists():
                try:
                    items = self._parse_source_file(file_path, source_name)
                    results[source_name] = items
                    self.all_items.extend(items)
                    
                    # Calculate stats
                    self.source_stats[source_name] = self._calculate_source_stats(items)
                    
                    logger.info(f"✅ Parsed {len(items)} items from {source_name}")
                    
                except Exception as e:
                    logger.error(f"❌ Error parsing {source_name}: {e}")
                    results[source_name] = []
            else:
                logger.warning(f"⚠️ Source file not found: {filename}")
                results[source_name] = []
                
        return results
    
    def _parse_source_file(self, file_path: Path, source_name: str) -> List[MagicItem]:
        """Parse a single source file based on its type"""
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            if len(content.strip()) < 100:  # Skip placeholder files
                logger.warning(f"Skipping {source_name} - appears to be placeholder")
                return []
                
            if source_name == "Xanathar's Guide":
                return self._parse_xanathar(content)
            elif source_name == "Tasha's Cauldron":
                return self._parse_tasha(content)
            elif source_name == "Fizban's Treasury":
                return self._parse_fizban(content)
            elif source_name == "Eberron":
                return self._parse_eberron(content)
            elif source_name == "Spelljammer":
                return self._parse_spelljammer(content)
            elif source_name == "Planescape":
                return self._parse_planescape(content)
            else:
                return self._parse_generic(content, source_name)
                
        except Exception as e:
            logger.error(f"Error parsing {source_name}: {e}")
            return []
    
    def _parse_xanathar(self, content: str) -> List[MagicItem]:
        """Parse Xanathar's Guide magic items"""
        items = []
        lines = content.split('\n')
        current_item = None
        current_desc = []
        
        for line in lines:
            line = line.strip()
            
            # Skip headers and empty lines
            if not line or line.startswith(('Chapter', 'Items ', 'CREATING', 'RECHARGING', 'The tables', 'ARE MAGIC')):
                continue
                
            # Check for item names
            if self._is_item_name(line):
                # Save previous item
                if current_item and current_desc:
                    current_item.description = '\n'.join(current_desc).strip()
                    items.append(current_item)
                
                # Start new item
                current_item = MagicItem(
                    name=line,
                    type="Wondrous item",
                    rarity="common",
                    source="Xanathar's Guide",
                    description="",
                    attunement=None,
                    category="Common Magic Items"
                )
                current_desc = []
                
            # Check for type/rarity line
            elif current_item and self._is_type_line(line):
                type_info = self._parse_type_line(line)
                current_item.type = type_info['type']
                current_item.rarity = type_info['rarity']
                current_item.attunement = type_info['attunement']
                
            # Otherwise it's description text
            elif current_item and line and not line.startswith(('Item', 'Type', 'Attune')):
                current_desc.append(line)
        
        # Don't forget the last item
        if current_item and current_desc:
            current_item.description = '\n'.join(current_desc).strip()
            items.append(current_item)
            
        return items
    
    def _parse_tasha(self, content: str) -> List[MagicItem]:
        """Parse Tasha's Cauldron magic items"""
        # Similar structure to Xanathar's but may have different formatting
        return self._parse_generic(content, "Tasha's Cauldron")
    
    def _parse_fizban(self, content: str) -> List[MagicItem]:
        """Parse Fizban's Treasury magic items (dragon-themed)"""
        return self._parse_generic(content, "Fizban's Treasury")
    
    def _parse_eberron(self, content: str) -> List[MagicItem]:
        """Parse Eberron magic items (setting-specific)"""
        return self._parse_generic(content, "Eberron")
    
    def _parse_spelljammer(self, content: str) -> List[MagicItem]:
        """Parse Spelljammer magic items (space-themed)"""
        return self._parse_generic(content, "Spelljammer")
    
    def _parse_planescape(self, content: str) -> List[MagicItem]:
        """Parse Planescape magic items (planar-themed)"""
        return self._parse_generic(content, "Planescape")
    
    def _parse_generic(self, content: str, source_name: str) -> List[MagicItem]:
        """Generic parser for unknown formats"""
        items = []
        lines = content.split('\n')
        current_item = None
        current_desc = []
        
        for line in lines:
            line = line.strip()
            
            if not line or line.startswith(('Chapter', 'Items ', 'CREATING')):
                continue
                
            if self._is_item_name(line):
                if current_item and current_desc:
                    current_item.description = '\n'.join(current_desc).strip()
                    items.append(current_item)
                
                current_item = MagicItem(
                    name=line,
                    type="Wondrous item",
                    rarity="common",
                    source=source_name,
                    description="",
                    attunement=None,
                    category="Magic Items"
                )
                current_desc = []
                
            elif current_item and self._is_type_line(line):
                type_info = self._parse_type_line(line)
                current_item.type = type_info['type']
                current_item.rarity = type_info['rarity']
                current_item.attunement = type_info['attunement']
                
            elif current_item and line:
                current_desc.append(line)
        
        if current_item and current_desc:
            current_item.description = '\n'.join(current_desc).strip()
            items.append(current_item)
            
        return items
    
    def _is_item_name(self, line: str) -> bool:
        """Determine if a line is an item name"""
        if not line or len(line.split()) < 2:
            return False
            
        # Skip obvious non-item lines
        skip_patterns = [
            r'^(Armor|Wondrous item|Weapon|Staff|Wand|Ring|Potion)',
            r'^(This |While |You can|When |If |The |A )',
            r'^(Item|Type|Attune)',
            r'^\d+',  # Numbers
            r'^[A-Z][A-Z\s]+$',  # ALL CAPS
            r'^(Minor Items|Major Items|Spell)',
            r'(table|saving throw|damage|spell)',
        ]
        
        for pattern in skip_patterns:
            if re.match(pattern, line, re.IGNORECASE):
                return False
                
        # Item names are title case, reasonable length, no early commas
        if (line[0].isupper() and len(line) < 80 and 
            not line.endswith('.') and ',' not in line[:25]):
            return True
            
        return False
    
    def _is_type_line(self, line: str) -> bool:
        """Check if line contains item type/rarity information"""
        type_patterns = [
            r'^(Armor|Wondrous item|Weapon|Staff|Wand|Ring|Potion)',
        ]
        return any(re.match(pattern, line) for pattern in type_patterns)
    
    def _parse_type_line(self, line: str) -> Dict[str, Optional[str]]:
        """Parse item type, rarity, and attunement from type line"""
        result = {
            'type': '',
            'rarity': 'common',
            'attunement': None
        }
        
        # Split on comma
        if ',' in line:
            type_part, rest = line.split(',', 1)
            result['type'] = type_part.strip()
            rest = rest.strip()
        else:
            result['type'] = line.strip()
            rest = ''
        
        if rest:
            # Extract attunement
            attune_match = re.search(r'\(([^)]*requires attunement[^)]*)\)', rest)
            if attune_match:
                result['attunement'] = attune_match.group(1)
                rest = re.sub(r'\([^)]*requires attunement[^)]*\)', '', rest).strip()
            
            # Extract rarity
            rarity_match = re.search(r'\\b(common|uncommon|rare|very rare|legendary)\\b', rest, re.IGNORECASE)
            if rarity_match:
                result['rarity'] = rarity_match.group(1).lower()
        
        return result
    
    def _calculate_source_stats(self, items: List[MagicItem]) -> Dict:
        """Calculate statistics for a source"""
        if not items:
            return {'total': 0, 'rarity_distribution': {}, 'type_distribution': {}}
            
        rarity_dist = {}
        type_dist = {}
        
        for item in items:
            # Rarity distribution
            rarity = item.rarity or 'unknown'
            rarity_dist[rarity] = rarity_dist.get(rarity, 0) + 1
            
            # Type distribution
            item_type = item.type.split('(')[0].strip()
            type_dist[item_type] = type_dist.get(item_type, 0) + 1
        
        return {
            'total': len(items),
            'rarity_distribution': rarity_dist,
            'type_distribution': type_dist
        }
    
    def save_unified_data(self, output_path: str) -> bool:
        """Save all parsed items to a unified JSON file"""
        try:
            output_data = {
                'metadata': {
                    'total_items': len(self.all_items),
                    'sources': list(self.source_stats.keys()),
                    'source_statistics': self.source_stats,
                    'parsing_date': None,
                    'overall_rarity_distribution': self._get_overall_rarity_distribution()
                },
                'items': [asdict(item) for item in self.all_items],
                'sources_breakdown': self._get_sources_breakdown()
            }
            
            with open(output_path, 'w', encoding='utf-8') as file:
                json.dump(output_data, file, indent=2, ensure_ascii=False)
                
            logger.info(f"✅ Saved unified data with {len(self.all_items)} items to {output_path}")
            return True
            
        except Exception as e:
            logger.error(f"❌ Error saving unified data: {e}")
            return False
    
    def _get_overall_rarity_distribution(self) -> Dict[str, int]:
        """Get overall rarity distribution across all sources"""
        distribution = {}
        for item in self.all_items:
            rarity = item.rarity or 'unknown'
            distribution[rarity] = distribution.get(rarity, 0) + 1
        return distribution
    
    def _get_sources_breakdown(self) -> Dict[str, List[Dict]]:
        """Get items organized by source"""
        breakdown = {}
        for item in self.all_items:
            source = item.source
            if source not in breakdown:
                breakdown[source] = []
            breakdown[source].append(asdict(item))
        return breakdown
    
    def print_comprehensive_summary(self):
        """Print a detailed summary of all parsed content"""
        print(f"\\n🎲 D&D Multi-Source Parsing Results")
        print(f"{'='*60}")
        print(f"Total Items Across All Sources: {len(self.all_items)}")
        
        print(f"\\n📚 Sources Processed:")
        for source, stats in self.source_stats.items():
            print(f"  📖 {source}: {stats['total']} items")
            if stats['total'] > 0:
                for rarity, count in stats['rarity_distribution'].items():
                    percentage = (count / stats['total']) * 100
                    print(f"     • {rarity.title()}: {count} ({percentage:.1f}%)")
        
        print(f"\\n🎯 Overall Rarity Distribution:")
        overall_dist = self._get_overall_rarity_distribution()
        for rarity, count in sorted(overall_dist.items()):
            percentage = (count / len(self.all_items)) * 100 if self.all_items else 0
            print(f"  {rarity.title()}: {count} items ({percentage:.1f}%)")
        
        print(f"\\n✨ Sample Items by Source:")
        for source, stats in self.source_stats.items():
            if stats['total'] > 0:
                source_items = [item for item in self.all_items if item.source == source]
                print(f"\\n  {source}:")
                for item in source_items[:3]:  # Show first 3 items
                    print(f"    • {item.name} ({item.rarity}, {item.type})")
                if len(source_items) > 3:
                    print(f"    ... and {len(source_items) - 3} more")


def main():
    """Main function for standalone execution"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Parse multiple D&D source books for magic items')
    parser.add_argument('--sources-dir', default='data/sources', 
                       help='Directory containing source markdown files')
    parser.add_argument('--output', default='data/official/unified_magic_items.json',
                       help='Output JSON file path')
    parser.add_argument('--verbose', action='store_true',
                       help='Print detailed parsing information')
    
    args = parser.parse_args()
    
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)
    
    # Parse all sources
    multi_parser = MultiSourceParser()
    results = multi_parser.parse_all_sources(args.sources_dir)
    
    # Print summary
    multi_parser.print_comprehensive_summary()
    
    # Save unified data
    success = multi_parser.save_unified_data(args.output)
    
    if success:
        print(f"\\n🎉 SUCCESS! All D&D sources parsed and saved to {args.output}")
        print(f"💫 Ready for web app integration with {len(multi_parser.all_items)} magic items!")
    else:
        print(f"\\n❌ Failed to save unified data")


if __name__ == "__main__":
    main() 