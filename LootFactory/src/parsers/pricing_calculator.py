#!/usr/bin/env python3
"""
DMG 2024 Magic Item Pricing Calculator

Implements the official DMG 2024 pricing rules for magic items including:
- Base rarity pricing
- Consumable item rules (halved except spell scrolls)
- Base item cost additions (weapons/armor)
- Spell scroll pricing
"""

import re
from typing import Dict, Optional, Tuple
from dataclasses import dataclass
import logging

logger = logging.getLogger(__name__)

@dataclass
class PricingResult:
    """Result of pricing calculation"""
    base_price_gp: int
    final_price_gp: int
    is_consumable: bool
    base_item_cost_gp: int
    calculation_notes: str
    pricing_scheme: str = "dmg_2024"

class DMG2024PricingCalculator:
    """Calculates magic item prices according to DMG 2024 rules"""
    
    # Base prices by rarity (DMG 2024 Table)
    BASE_PRICES = {
        "common": 100,
        "uncommon": 400,
        "rare": 4000,
        "very_rare": 40000,
        "very rare": 40000,  # Handle both formats
        "legendary": 200000,
        "artifact": 0  # Priceless
    }
    
    # Base equipment costs (simplified - major items only)
    BASE_EQUIPMENT_COSTS = {
        "plate armor": 1500,
        "plate": 1500,
        "chain mail": 75,
        "leather armor": 10,
        "shield": 10,
        "longsword": 15,
        "greatsword": 50,
        "longbow": 50,
        "crossbow": 25,
    }
    
    # Consumable item types
    CONSUMABLE_TYPES = {
        "potion", "oil", "scroll", "elixir", "draught", 
        "philter", "dust", "powder", "incense"
    }
    
    # Non-consumable scroll types (don't get halved)
    SPELL_SCROLL_PATTERNS = [
        r"spell scroll",
        r"scroll.*spell",
        r".*spell.*scroll"
    ]

    def __init__(self):
        self.spell_scroll_costs = self._calculate_spell_scroll_costs()
    
    def _calculate_spell_scroll_costs(self) -> Dict[str, int]:
        """Calculate spell scroll costs based on spell level (double scribing cost)"""
        # DMG 2024: Spell scroll = 2x scribing cost
        scribing_costs = {
            "cantrip": 15,    # 15 GP to scribe
            "level 1": 25,    # 25 GP to scribe  
            "level 2": 100,   # 100 GP to scribe
            "level 3": 150,   # 150 GP to scribe
            "level 4": 1000,  # 1000 GP to scribe
            "level 5": 1500,  # 1500 GP to scribe
            "level 6": 10000, # 10000 GP to scribe
            "level 7": 12500, # 12500 GP to scribe
            "level 8": 50000, # 50000 GP to scribe
            "level 9": 62500, # 62500 GP to scribe
        }
        
        # Double for spell scroll cost
        return {level: cost * 2 for level, cost in scribing_costs.items()}
    
    def _is_consumable(self, item_name: str, item_type: str) -> bool:
        """Determine if an item is consumable"""
        name_lower = item_name.lower()
        type_lower = item_type.lower()
        
        # Check type
        for consumable_type in self.CONSUMABLE_TYPES:
            if consumable_type in type_lower:
                return True
        
        # Check name patterns
        consumable_patterns = [
            r"potion of", r"oil of", r"elixir of", r"philter of",
            r"dust of", r"powder of", r"incense of"
        ]
        
        for pattern in consumable_patterns:
            if re.search(pattern, name_lower):
                return True
                
        return False
    
    def _is_spell_scroll(self, item_name: str, item_type: str) -> bool:
        """Determine if an item is a spell scroll"""
        name_lower = item_name.lower()
        type_lower = item_type.lower()
        
        for pattern in self.SPELL_SCROLL_PATTERNS:
            if re.search(pattern, name_lower) or re.search(pattern, type_lower):
                return True
                
        return False
    
    def _extract_spell_level(self, item_name: str) -> Optional[str]:
        """Extract spell level from spell scroll name"""
        name_lower = item_name.lower()
        
        # Pattern: "Spell Scroll (level X spell)" or "Spell Scroll (cantrip)"
        level_patterns = [
            r"cantrip",
            r"level (\d+)",
            r"(\d+)(?:st|nd|rd|th) level",
        ]
        
        for pattern in level_patterns:
            match = re.search(pattern, name_lower)
            if match:
                if "cantrip" in pattern:
                    return "cantrip"
                else:
                    level_num = match.group(1)
                    return f"level {level_num}"
        
        return None
    
    def _get_base_item_cost(self, item_name: str, item_type: str) -> int:
        """Get base equipment cost if item incorporates standard equipment"""
        name_lower = item_name.lower()
        type_lower = item_type.lower()
        
        # Check for armor/weapon types in name or type
        for equipment, cost in self.BASE_EQUIPMENT_COSTS.items():
            if equipment in name_lower or equipment in type_lower:
                return cost
        
        # Check for generic patterns
        if "armor" in type_lower or "weapon" in type_lower:
            # Default costs for unspecified items
            if "armor" in type_lower:
                return 50  # Average armor cost
            elif "weapon" in type_lower:
                return 15  # Average weapon cost
                
        return 0
    
    def calculate_price(self, item_name: str, rarity: str, item_type: str = "") -> PricingResult:
        """Calculate price for a magic item according to DMG 2024 rules"""
        
        rarity_clean = rarity.lower().strip()
        base_price = self.BASE_PRICES.get(rarity_clean, 0)
        
        if base_price == 0:
            notes = f"Unknown rarity '{rarity}' or priceless artifact"
            return PricingResult(
                base_price_gp=0,
                final_price_gp=0,
                is_consumable=False,
                base_item_cost_gp=0,
                calculation_notes=notes
            )
        
        # Check if it's a spell scroll (special pricing)
        if self._is_spell_scroll(item_name, item_type):
            spell_level = self._extract_spell_level(item_name)
            if spell_level and spell_level in self.spell_scroll_costs:
                scroll_price = self.spell_scroll_costs[spell_level]
                notes = f"Spell scroll ({spell_level}): 2x scribing cost = {scroll_price} GP"
                return PricingResult(
                    base_price_gp=scroll_price,
                    final_price_gp=scroll_price,
                    is_consumable=True,
                    base_item_cost_gp=0,
                    calculation_notes=notes
                )
        
        # Check if consumable (gets halved)
        is_consumable = self._is_consumable(item_name, item_type)
        
        # Get base equipment cost
        base_item_cost = self._get_base_item_cost(item_name, item_type)
        
        # Calculate final price
        magic_price = base_price
        if is_consumable:
            magic_price = base_price // 2  # Halve for consumables
        
        final_price = magic_price + base_item_cost
        
        # Build calculation notes
        notes_parts = [f"{rarity.title()} base: {base_price} GP"]
        if is_consumable:
            notes_parts.append(f"Consumable: halved to {magic_price} GP")
        if base_item_cost > 0:
            notes_parts.append(f"Base equipment: +{base_item_cost} GP")
        notes_parts.append(f"Final: {final_price} GP")
        
        return PricingResult(
            base_price_gp=magic_price,
            final_price_gp=final_price,
            is_consumable=is_consumable,
            base_item_cost_gp=base_item_cost,
            calculation_notes=" | ".join(notes_parts)
        )

def main():
    """Test the pricing calculator"""
    calc = DMG2024PricingCalculator()
    
    test_items = [
        ("Potion of Healing", "common", "Potion"),
        ("+1 Longsword", "uncommon", "Weapon"),
        ("Spell Scroll (level 3 spell)", "uncommon", "Scroll"),
        ("Bag of Holding", "uncommon", "Wondrous item"),
        ("Plate Armor +1", "rare", "Armor"),
    ]
    
    print("🧮 DMG 2024 Pricing Calculator Test:")
    print("=" * 50)
    
    for name, rarity, item_type in test_items:
        result = calc.calculate_price(name, rarity, item_type)
        print(f"📦 {name} ({rarity})")
        print(f"   💰 Price: {result.final_price_gp} GP")
        print(f"   📝 Notes: {result.calculation_notes}")
        print()

if __name__ == "__main__":
    main() 