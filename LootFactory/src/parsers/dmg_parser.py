"""
DMG 2024 Magic Item Table Parser

This module parses the official DMG 2024 Magic Item Tables and extracts
structured data for use in the loot generation system.
"""

import re
import json
from typing import Dict, List, Tuple, Optional, Any
from dataclasses import dataclass, asdict
from pathlib import Path
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class MagicItem:
    """Represents a single magic item from the DMG tables."""
    name: str
    rarity: str
    category: str
    table_source: str
    roll_range: str
    description: Optional[str] = None
    properties: Optional[Dict[str, Any]] = None


@dataclass
class LootTable:
    """Represents a complete loot table with generation rules."""
    name: str
    table_type: str  # 'magic_items', 'armaments', 'implements'
    rarity_level: str  # 'minor', 'major', etc.
    items: List[MagicItem]
    roll_die: str  # 'd100', 'd20', etc.
    special_rules: Optional[Dict[str, Any]] = None


class DMGTableParser:
    """Parser for DMG 2024 Magic Item Tables."""
    
    def __init__(self):
        self.tables: List[LootTable] = []
        self.items: List[MagicItem] = []
        self.generation_rules: Dict[str, Any] = {}
        
    def parse_table_content(self, content: str) -> List[LootTable]:
        """Parse the complete DMG table content into structured data."""
        logger.info("Starting DMG table parsing...")
        
        # Split content into major sections
        sections = self._split_into_sections(content)
        
        for section_name, section_content in sections.items():
            logger.info(f"Parsing section: {section_name}")
            
            if "Magic Items Tables" in section_name:
                self._parse_magic_item_tables(section_content)
            elif "Armaments Tables" in section_name:
                self._parse_armament_tables(section_content)
            elif "Implements Tables" in section_name:
                self._parse_implement_tables(section_content)
        
        logger.info(f"Parsing complete. Found {len(self.tables)} tables with {len(self.items)} total items.")
        return self.tables
    
    def _split_into_sections(self, content: str) -> Dict[str, str]:
        """Split the content into major table sections."""
        sections = {}
        current_section = "General"
        current_content = []
        
        lines = content.split('\n')
        
        for line in lines:
            # Check for major section headers
            if any(header in line for header in [
                "Magic Items Tables", "Armaments Tables", "Implements Tables"
            ]):
                # Save previous section
                if current_content:
                    sections[current_section] = '\n'.join(current_content)
                
                # Start new section
                current_section = line.strip()
                current_content = [line]
            else:
                current_content.append(line)
        
        # Save final section
        if current_content:
            sections[current_section] = '\n'.join(current_content)
        
        return sections
    
    def _parse_magic_item_tables(self, content: str) -> None:
        """Parse the main magic item tables."""
        # Extract individual tables based on rarity/level
        table_pattern = r'1d100\s+Item\n((?:\d+[–\-]\d+\s+.+\n?)+)'
        
        tables_found = re.findall(table_pattern, content, re.MULTILINE)
        
        for i, table_content in enumerate(tables_found):
            table_name = f"Magic Items Table {i+1}"
            rarity = self._determine_rarity_from_position(i)
            
            items = self._parse_item_entries(table_content, "magic_items", table_name)
            
            loot_table = LootTable(
                name=table_name,
                table_type="magic_items", 
                rarity_level=rarity,
                items=items,
                roll_die="d100"
            )
            
            self.tables.append(loot_table)
            self.items.extend(items)
    
    def _parse_armament_tables(self, content: str) -> None:
        """Parse armament-specific tables."""
        table_pattern = r'1d100\s+Item\n((?:\d+[–\-]\d+\s+.+\n?)+)'
        
        tables_found = re.findall(table_pattern, content, re.MULTILINE)
        
        for i, table_content in enumerate(tables_found):
            table_name = f"Armaments Table {i+1}"
            rarity = self._determine_armament_rarity(i)
            
            items = self._parse_item_entries(table_content, "armaments", table_name)
            
            loot_table = LootTable(
                name=table_name,
                table_type="armaments",
                rarity_level=rarity, 
                items=items,
                roll_die="d100"
            )
            
            self.tables.append(loot_table)
            self.items.extend(items)
    
    def _parse_implement_tables(self, content: str) -> None:
        """Parse implement-specific tables.""" 
        table_pattern = r'1d100\s+Item\n((?:\d+[–\-]\d+\s+.+\n?)+)'
        
        tables_found = re.findall(table_pattern, content, re.MULTILINE)
        
        for i, table_content in enumerate(tables_found):
            table_name = f"Implements Table {i+1}"
            rarity = self._determine_implement_rarity(i)
            
            items = self._parse_item_entries(table_content, "implements", table_name)
            
            loot_table = LootTable(
                name=table_name,
                table_type="implements",
                rarity_level=rarity,
                items=items, 
                roll_die="d100"
            )
            
            self.tables.append(loot_table)
            self.items.extend(items)
    
    def _parse_item_entries(self, table_content: str, category: str, table_source: str) -> List[MagicItem]:
        """Parse individual item entries from a table."""
        items = []
        
        # Pattern to match roll ranges and item names
        item_pattern = r'(\d+[–\-]\d+|\d+)\s+(.+)'
        
        for line in table_content.strip().split('\n'):
            line = line.strip()
            if not line:
                continue
                
            match = re.match(item_pattern, line)
            if match:
                roll_range, item_name = match.groups()
                
                # Clean up item name
                item_name = item_name.strip()
                
                # Determine rarity from context
                rarity = self._determine_item_rarity(item_name, table_source)
                
                magic_item = MagicItem(
                    name=item_name,
                    rarity=rarity,
                    category=category,
                    table_source=table_source,
                    roll_range=roll_range
                )
                
                items.append(magic_item)
        
        return items
    
    def _determine_rarity_from_position(self, table_index: int) -> str:
        """Determine rarity based on table position in the DMG."""
        # Based on DMG 2024 table organization
        rarity_mapping = {
            0: "common",
            1: "uncommon", 
            2: "rare",
            3: "very_rare",
            4: "legendary"
        }
        return rarity_mapping.get(table_index, "unknown")
    
    def _determine_armament_rarity(self, table_index: int) -> str:
        """Determine armament rarity based on table position."""
        rarity_mapping = {
            0: "common",
            1: "uncommon",
            2: "rare", 
            3: "very_rare",
            4: "legendary"
        }
        return rarity_mapping.get(table_index, "unknown")
    
    def _determine_implement_rarity(self, table_index: int) -> str:
        """Determine implement rarity based on table position."""
        rarity_mapping = {
            0: "common",
            1: "uncommon",
            2: "rare",
            3: "very_rare", 
            4: "legendary"
        }
        return rarity_mapping.get(table_index, "unknown")
    
    def _determine_item_rarity(self, item_name: str, table_source: str) -> str:
        """Determine item rarity from name and context."""
        # Look for rarity indicators in item names
        if any(indicator in item_name.lower() for indicator in ['+3', 'legendary', 'artifact']):
            return "legendary"
        elif any(indicator in item_name.lower() for indicator in ['+2', 'very rare']):
            return "very_rare"
        elif any(indicator in item_name.lower() for indicator in ['+1', 'rare']):
            return "rare"
        elif any(indicator in item_name.lower() for indicator in ['uncommon']):
            return "uncommon"
        else:
            return "common"
    
    def extract_generation_rules(self) -> Dict[str, Any]:
        """Extract loot generation rules and mechanics."""
        # This will be expanded based on DMG content analysis
        rules = {
            "treasure_by_cr": {},
            "individual_treasure": {},
            "treasure_hoard": {},
            "magic_item_rarity_by_level": {},
            "special_generation_rules": {}
        }
        
        # TODO: Parse specific generation rules from DMG content
        logger.info("Generation rules extraction - placeholder for now")
        
        return rules
    
    def save_to_json(self, output_dir: Path) -> None:
        """Save parsed data to JSON files."""
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Save tables
        tables_data = [asdict(table) for table in self.tables]
        with open(output_dir / "dmg_2024_tables.json", 'w') as f:
            json.dump(tables_data, f, indent=2)
        
        # Save all items
        items_data = [asdict(item) for item in self.items]
        with open(output_dir / "dmg_2024_items.json", 'w') as f:
            json.dump(items_data, f, indent=2)
        
        # Save generation rules
        with open(output_dir / "dmg_2024_generation_rules.json", 'w') as f:
            json.dump(self.generation_rules, f, indent=2)
        
        logger.info(f"Data saved to {output_dir}")


if __name__ == "__main__":
    # Example usage
    parser = DMGTableParser()
    # content = open("DMG 2024 Magic Item Tables", 'r').read()
    # parser.parse_table_content(content)
    # parser.save_to_json(Path("../data/official/"))
    pass 