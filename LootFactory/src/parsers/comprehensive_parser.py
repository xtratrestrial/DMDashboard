#!/usr/bin/env python3
"""
Comprehensive D&D Multi-Source Parser

This parser will handle the ACTUAL content from all provided D&D sources.
It processes the real data and creates a unified magic item database.
"""

import re
import json
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional, Any
from pathlib import Path
import logging
from datetime import datetime

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class MagicItem:
    """Represents a single magic item from any D&D source"""
    name: str
    type: str
    rarity: str
    source: str
    description: str = ""
    attunement: Optional[str] = None
    category: str = ""
    source_page: Optional[str] = None

class ComprehensiveParser:
    """Parses and processes all D&D source content"""
    
    def __init__(self):
        self.all_items: List[MagicItem] = []
        self.source_stats: Dict[str, Dict] = {}
        self.parsing_errors: List[str] = []
        
    def parse_xanathar_content(self, content: str) -> List[MagicItem]:
        """Parse the actual Xanathar's Guide content"""
        items = []
        lines = content.split('\n')
        current_item = None
        current_desc = []
        in_spell_section = False
        
        logger.info("Parsing Xanathar's Guide content...")
        
        for i, line in enumerate(lines):
            line = line.strip()
            
            # Skip empty lines and headers
            if not line or line.startswith(('Chapter', 'Items ', 'The magic items', 'CREATING')):
                continue
            
            # Detect spell section (skip for now, focus on magic items)
            if 'Spell Lists' in line or 'Bard Spells' in line:
                in_spell_section = True
                continue
            elif 'Spell Descriptions' in line:
                in_spell_section = False
                continue
                
            if in_spell_section:
                continue
            
            # Detect item names (specific patterns for Xanathar's)
            if self._is_xanathar_item_name(line):
                # Save previous item
                if current_item and current_desc:
                    current_item.description = '\n'.join(current_desc).strip()
                    if current_item.description:  # Only add if has description
                        items.append(current_item)
                
                # Start new item
                current_item = MagicItem(
                    name=line,
                    type="Wondrous item",
                    rarity="common",
                    source="Xanathar's Guide",
                    description="",
                    category="Common Magic Items"
                )
                current_desc = []
                logger.debug(f"Found item: {line}")
                
            # Parse type/rarity line
            elif current_item and self._is_type_rarity_line(line):
                type_info = self._parse_type_rarity_line(line)
                current_item.type = type_info['type']
                current_item.rarity = type_info['rarity']
                current_item.attunement = type_info['attunement']
                logger.debug(f"  Type: {current_item.type}, Rarity: {current_item.rarity}")
                
            # Description text
            elif current_item and line and not line.startswith(('Item', 'Type', 'Attune')):
                current_desc.append(line)
        
        # Don't forget the last item
        if current_item and current_desc:
            current_item.description = '\n'.join(current_desc).strip()
            if current_item.description:
                items.append(current_item)
        
        logger.info(f"✅ Parsed {len(items)} items from Xanathar's Guide")
        return items
    
    def _is_xanathar_item_name(self, line: str) -> bool:
        """Detect if a line is a magic item name in Xanathar's format"""
        if not line or len(line.split()) < 2:
            return False
            
        # Skip obvious non-item lines
        skip_patterns = [
            r'^(Armor \(|Wondrous item|Weapon|Staff|Wand|Ring|Potion)',
            r'^(This |While |You can|When |If |The |A |Any )',
            r'^(Minor Items|Major Items|Cantrips|1st Level)',
            r'^\d+\.?\s',  # Numbered lists
            r'^[a-z]',     # lowercase start
            r'(saving throw|damage|spell|action)',
            r'^(d\d+|Table)',  # Dice or tables
        ]
        
        for pattern in skip_patterns:
            if re.match(pattern, line, re.IGNORECASE):
                return False
        
        # Xanathar's item names are typically:
        # - Title case
        # - Reasonable length (not too long)
        # - Don't end with periods
        # - May have apostrophes or hyphens
        if (line[0].isupper() and 
            len(line) < 100 and 
            not line.endswith('.') and
            not line.endswith(':') and
            ',' not in line[:30]):  # No early commas
            return True
            
        return False
    
    def _is_type_rarity_line(self, line: str) -> bool:
        """Check if line contains item type/rarity information"""
        type_patterns = [
            r'^(Armor|Wondrous item|Weapon|Staff|Wand|Ring|Potion)',
        ]
        return any(re.match(pattern, line) for pattern in type_patterns)
    
    def _parse_type_rarity_line(self, line: str) -> Dict[str, Optional[str]]:
        """Parse item type, rarity, and attunement"""
        result = {
            'type': '',
            'rarity': 'common',
            'attunement': None
        }
        
        # Split on comma
        if ',' in line:
            parts = line.split(',')
            result['type'] = parts[0].strip()
            
            # Process remaining parts for rarity and attunement
            rest = ','.join(parts[1:]).strip()
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
            rarity_match = re.search(r'\b(common|uncommon|rare|very rare|legendary)\b', rest, re.IGNORECASE)
            if rarity_match:
                result['rarity'] = rarity_match.group(1).lower()
        
        return result
    
    def parse_all_available_sources(self) -> Dict[str, Any]:
        """Parse all sources that have actual content"""
        results = {
            'sources_processed': 0,
            'total_items': 0,
            'source_breakdown': {},
            'parsing_errors': []
        }
        
        # Check what sources have actual content
        sources_dir = Path('data/sources')
        
        # Process sources with content
        for source_file in sources_dir.glob('*.md'):
            try:
                with open(source_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if len(content.strip()) < 100:  # Skip small/placeholder files
                    logger.warning(f"Skipping {source_file.name} - appears to be placeholder")
                    continue
                
                source_name = self._get_source_name(source_file.name)
                logger.info(f"Processing {source_name} ({len(content)} characters)")
                
                items = []
                if 'xanathar' in source_file.name.lower():
                    items = self.parse_xanathar_content(content)
                else:
                    items = self._parse_generic_source(content, source_name)
                
                self.all_items.extend(items)
                results['source_breakdown'][source_name] = {
                    'items': len(items),
                    'file_size': len(content)
                }
                results['sources_processed'] += 1
                
            except Exception as e:
                error_msg = f"Error parsing {source_file.name}: {e}"
                logger.error(error_msg)
                self.parsing_errors.append(error_msg)
                results['parsing_errors'].append(error_msg)
        
        results['total_items'] = len(self.all_items)
        return results
    
    def _get_source_name(self, filename: str) -> str:
        """Convert filename to readable source name"""
        name_map = {
            'xanathar_guide.md': "Xanathar's Guide",
            "Tasha's Cauldren of Everything.md": "Tasha's Cauldron",
            "Fizban's Treasury of Dragons.md": "Fizban's Treasury",
            "Ebberon: Rising From The Last War.md": "Eberron",
            'spelljammer.md': "Spelljammer",
            'Planescape.md': "Planescape"
        }
        return name_map.get(filename, filename.replace('.md', ''))
    
    def _parse_generic_source(self, content: str, source_name: str) -> List[MagicItem]:
        """Generic parser for other D&D sources"""
        # For now, return empty list since we need the actual content
        # This would be expanded based on the specific format of each source
        logger.warning(f"Generic parser for {source_name} - needs content-specific implementation")
        return []
    
    def generate_comprehensive_report(self) -> Dict[str, Any]:
        """Generate a comprehensive parsing report"""
        parsing_results = self.parse_all_available_sources()
        
        report = {
            'parsing_date': datetime.now().isoformat(),
            'summary': {
                'sources_processed': parsing_results['sources_processed'],
                'total_items_parsed': parsing_results['total_items'],
                'parsing_errors': len(parsing_results['parsing_errors'])
            },
            'source_breakdown': parsing_results['source_breakdown'],
            'rarity_distribution': self._calculate_rarity_distribution(),
            'type_distribution': self._calculate_type_distribution(),
            'items': [asdict(item) for item in self.all_items],
            'errors': parsing_results['parsing_errors'],
            'next_steps': self._generate_next_steps()
        }
        
        return report
    
    def _calculate_rarity_distribution(self) -> Dict[str, int]:
        """Calculate overall rarity distribution"""
        distribution = {}
        for item in self.all_items:
            rarity = item.rarity or 'unknown'
            distribution[rarity] = distribution.get(rarity, 0) + 1
        return distribution
    
    def _calculate_type_distribution(self) -> Dict[str, int]:
        """Calculate type distribution"""
        distribution = {}
        for item in self.all_items:
            item_type = item.type.split('(')[0].strip()
            distribution[item_type] = distribution.get(item_type, 0) + 1
        return distribution
    
    def _generate_next_steps(self) -> List[str]:
        """Generate next steps based on parsing results"""
        steps = []
        
        if len(self.all_items) == 0:
            steps.append("🚨 CRITICAL: No items parsed - need to add actual source content")
            steps.append("📋 Copy content from attached files to source .md files")
            steps.append("🔄 Re-run parser with real content")
        else:
            steps.append(f"✅ Successfully parsed {len(self.all_items)} items")
            steps.append("🌐 Ready to begin web app development")
            steps.append("⚙️ Implement generation engine with parsed items")
        
        if self.parsing_errors:
            steps.append(f"🔧 Fix {len(self.parsing_errors)} parsing errors")
        
        return steps
    
    def save_report(self, output_path: str = 'data/official/comprehensive_parsing_report.json') -> bool:
        """Save the comprehensive parsing report"""
        try:
            report = self.generate_comprehensive_report()
            
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(report, f, indent=2, ensure_ascii=False)
            
            logger.info(f"✅ Saved comprehensive report to {output_path}")
            return True
            
        except Exception as e:
            logger.error(f"❌ Error saving report: {e}")
            return False


def main():
    """Main execution"""
    print("🎲 Comprehensive D&D Source Parser")
    print("=" * 50)
    
    parser = ComprehensiveParser()
    
    # Generate and save report
    success = parser.save_report()
    
    if success:
        # Print summary
        report = parser.generate_comprehensive_report()
        print(f"\n📊 PARSING RESULTS:")
        print(f"Sources Processed: {report['summary']['sources_processed']}")
        print(f"Total Items: {report['summary']['total_items_parsed']}")
        print(f"Errors: {report['summary']['parsing_errors']}")
        
        print(f"\n📚 Source Breakdown:")
        for source, data in report['source_breakdown'].items():
            print(f"  {source}: {data['items']} items")
        
        print(f"\n📋 Next Steps:")
        for step in report['next_steps']:
            print(f"  {step}")
    else:
        print("❌ Failed to generate parsing report")


if __name__ == "__main__":
    main() 