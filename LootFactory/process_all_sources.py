#!/usr/bin/env python3
"""
Comprehensive Multi-Source D&D Content Parser

Processes all D&D sources and creates unified magic item database
"""

import re
import json
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional, Any
from datetime import datetime

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
    requires_dragonmark: bool = False
    
@dataclass
class Spell:
    """Represents a spell for scroll generation"""
    name: str
    level: int
    school: str
    source: str
    classes: List[str]

class ComprehensiveSourceParser:
    """Parse all D&D content sources"""
    
    def __init__(self):
        self.all_items: List[MagicItem] = []
        self.all_spells: List[Spell] = []
        self.source_stats: Dict[str, Dict] = {}
    
    def parse_eberron_content(self) -> tuple[List[MagicItem], List[Spell]]:
        """Parse Eberron: Rising from the Last War content"""
        content = '''Chapter 5: Treasures

Magic plays a vital role in the day-to-day life of Khorvaire. Common magic items are widespread, and the crystals known as dragonshards serve as the fuel of the magical economy and are used in items that amplify the powers of dragonmarks.

Magic Items

Arcane Propulsion Arm
Wondrous item, very rare (requires attunement by a creature missing a hand or an arm)

Armblade
Weapon (any one-handed melee weapon), common (requires attunement by a warforged)

Belashyrra's Beholder Crown
Wondrous item, legendary (requires attunement)

Cleansing Stone
Wondrous item, common

Docent
Wondrous item, rare (requires attunement by a warforged)

Dyrrn's Tentacle Whip
Weapon (whip), very rare (requires attunement)

Earworm
Wondrous item, uncommon (requires attunement)

Everbright Lantern
Wondrous item, common

Feather Token
Wondrous item, common

Finder's Goggles
Wondrous item, uncommon (requires attunement by a creature with the Mark of Finding)

Glamerweave
Wondrous item, common or uncommon

Imbued Wood Focus
Wondrous item, common (requires attunement)

Keycharm
Wondrous item, common (requires attunement by a creature with the Mark of Warding)

Kyrzin's Ooze
Wondrous item, very rare (requires attunement)

Living Armor
Armor (any), very rare (requires attunement)

Living Gloves
Wondrous item, uncommon (requires attunement)

Orb of Shielding
Wondrous item, common (requires attunement)

Prosthetic Limb
Wondrous item, common

Scribe's Pen
Wondrous item, common (requires attunement by a creature with the Mark of Scribing)

Shiftweave
Wondrous item, common

Speaking Stone
Wondrous item, very rare

Spellshard
Wondrous item, common

Ventilating Lungs
Wondrous item, rare (requires attunement)

Wand Sheath
Wondrous item, common (requires attunement by a warforged)

Wheel of Wind and Water
Wondrous item, uncommon'''
        
        items = []
        lines = content.split('\n')
        current_item = None
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Check for item headers
            if (line and not line.startswith(('Chapter', 'Magic', 'Wondrous item', 'Weapon', 'Armor')) 
                and line[0].isupper() and len(line.split()) <= 6):
                if current_item:
                    items.append(current_item)
                
                current_item = MagicItem(
                    name=line,
                    type="",
                    rarity="common",
                    source="Eberron: Rising from the Last War",
                    category="Eberron Magic Items"
                )
                
            # Parse item type/rarity line
            elif current_item and line.startswith(('Wondrous item', 'Weapon', 'Armor')):
                parts = line.split(', ')
                current_item.type = parts[0] if parts else ""
                
                # Extract rarity and attunement
                rest = ', '.join(parts[1:]) if len(parts) > 1 else ""
                
                rarity_match = re.search(r'\b(common|uncommon|rare|very rare|legendary|artifact)\b', rest)
                if rarity_match:
                    current_item.rarity = rarity_match.group(1)
                    
                if 'requires attunement' in rest:
                    current_item.attunement = rest[rest.find('('):rest.rfind(')')+1] if '(' in rest else "requires attunement"
                    
                if 'Mark of' in rest:
                    current_item.requires_dragonmark = True
        
        # Don't forget the last item
        if current_item:
            items.append(current_item)
            
        return items, []  # No new spells in Eberron
    
    def parse_fizban_content(self) -> tuple[List[MagicItem], List[Spell]]:
        """Parse Fizban's Treasury of Dragons content"""
        
        # Magic Items from Fizban's
        items = [
            MagicItem("Amethyst Lodestone", "Wondrous Item", "very rare", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Crystal Blade", "Weapon (Any Sword)", "rare", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Dragonhide Belt", "Wondrous Item", "uncommon", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Dragonlance", "Weapon (Lance or Pike)", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Dragon Wing Bow", "Weapon (Any Bow)", "rare", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Emerald Pen", "Wondrous Item", "uncommon", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Flail of Tiamat", "Weapon (Flail)", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Gold Canary Figurine of Wondrous Power", "Wondrous Item", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Platinum Scarf", "Wondrous Item", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Potion of Dragon's Majesty", "Potion", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Ruby Weave Gem", "Wondrous Item", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Sapphire Buckler", "Armor (Shield)", "very rare", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
            MagicItem("Topaz Annihilator", "Weapon (Firearm)", "legendary", "Fizban's Treasury of Dragons", category="Dragon Magic Items"),
        ]
        
        # Hoard Items (variable rarity)
        hoard_items = [
            MagicItem("Dragon's Wrath Weapon", "Weapon (Any)", "uncommon/rare/very rare/legendary", "Fizban's Treasury of Dragons", category="Hoard Magic Items"),
            MagicItem("Dragon-Touched Focus", "Wondrous Item", "uncommon/rare/very rare/legendary", "Fizban's Treasury of Dragons", category="Hoard Magic Items"),
            MagicItem("Dragon Vessel", "Wondrous Item", "uncommon/rare/very rare/legendary", "Fizban's Treasury of Dragons", category="Hoard Magic Items"),
            MagicItem("Scaled Ornament", "Wondrous Item", "uncommon/rare/very rare/legendary", "Fizban's Treasury of Dragons", category="Hoard Magic Items"),
        ]
        
        items.extend(hoard_items)
        
        # Dragon Spells
        spells = [
            Spell("Nathair's Mischief", 2, "Illusion", "Fizban's Treasury of Dragons", ["Bard", "Sorcerer", "Wizard"]),
            Spell("Rime's Binding Ice", 2, "Evocation", "Fizban's Treasury of Dragons", ["Sorcerer", "Wizard"]),
            Spell("Ashardalon's Stride", 3, "Transmutation", "Fizban's Treasury of Dragons", ["Artificer", "Ranger", "Sorcerer", "Wizard"]),
            Spell("Raulothim's Psychic Lance", 4, "Enchantment", "Fizban's Treasury of Dragons", ["Bard", "Sorcerer", "Warlock", "Wizard"]),
            Spell("Summon Draconic Spirit", 5, "Conjuration", "Fizban's Treasury of Dragons", ["Druid", "Sorcerer", "Wizard"]),
            Spell("Fizban's Platinum Shield", 6, "Abjuration", "Fizban's Treasury of Dragons", ["Sorcerer", "Wizard"]),
            Spell("Draconic Transformation", 7, "Transmutation", "Fizban's Treasury of Dragons", ["Druid", "Sorcerer", "Wizard"]),
        ]
        
        return items, spells
    
    def parse_tasha_content(self) -> tuple[List[MagicItem], List[Spell]]:
        """Parse Tasha's Cauldron of Everything content"""
        
        # Major magic items from Tasha's (simplified for count)
        items = []
        
        # Magic Tattoos
        tattoo_items = [
            MagicItem("Absorbing Tattoo", "Wondrous item (tattoo)", "very rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Barrier Tattoo", "Wondrous item (tattoo)", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Blood Fury Tattoo", "Wondrous item (tattoo)", "legendary", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Coiling Grasp Tattoo", "Wondrous item (tattoo)", "uncommon", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Eldritch Claw Tattoo", "Wondrous item (tattoo)", "uncommon", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Ghost Step Tattoo", "Wondrous item (tattoo)", "very rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Illuminator's Tattoo", "Wondrous item (tattoo)", "common", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Lifewell Tattoo", "Wondrous item (tattoo)", "very rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Masquerade Tattoo", "Wondrous item (tattoo)", "common", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Shadowfell Brand Tattoo", "Wondrous item (tattoo)", "rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
            MagicItem("Spellwrought Tattoo", "Wondrous item (tattoo)", "common/uncommon/rare", "Tasha's Cauldron of Everything", category="Magic Tattoos"),
        ]
        
        # Class-Specific Items
        class_items = [
            MagicItem("All-Purpose Tool", "Wondrous item", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
            MagicItem("Amulet of the Devout", "Wondrous item", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
            MagicItem("Arcane Grimoire", "Wondrous item", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
            MagicItem("Bloodwell Vial", "Wondrous item", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
            MagicItem("Moon Sickle", "Weapon (sickle)", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
            MagicItem("Rhythm-Maker's Drum", "Wondrous item", "uncommon/rare/very rare", "Tasha's Cauldron of Everything", category="Class Items"),
        ]
        
        # Sorcerer Shards
        shard_items = [
            MagicItem("Astral Shard", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
            MagicItem("Elemental Essence Shard", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
            MagicItem("Far Realm Shard", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
            MagicItem("Feywild Shard", "Wondrous item", "uncommon", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
            MagicItem("Outer Essence Shard", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
            MagicItem("Shadowfell Shard", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Sorcerer Shards"),
        ]
        
        # Wizard Spellbooks
        spellbook_items = [
            MagicItem("Alchemical Compendium", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Astromancy Archive", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Atlas of Endless Horizons", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Crystalline Chronicle", "Wondrous item", "very rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Duplicitous Manuscript", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Fulminating Treatise", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Heart Weaver's Primer", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Libram of Souls and Flesh", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Planecaller's Codex", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
            MagicItem("Protective Verses", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Wizard Spellbooks"),
        ]
        
        # Other Items
        other_items = [
            MagicItem("Bell Branch", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Cauldron of Rebirth", "Wondrous item", "very rare", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Devotee's Censer", "Weapon (flail)", "rare", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Guardian Emblem", "Wondrous item (holy symbol)", "uncommon", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Lyre of Building", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Nature's Mantle", "Wondrous item", "uncommon", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Prosthetic Limb", "Wondrous item", "common", "Tasha's Cauldron of Everything", category="Other Items"),
            MagicItem("Reveler's Concertina", "Wondrous item", "rare", "Tasha's Cauldron of Everything", category="Other Items"),
        ]
        
        # Artifacts
        artifact_items = [
            MagicItem("Baba Yaga's Mortar and Pestle", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
            MagicItem("Crook of Rao", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
            MagicItem("Demonomicon of Iggwilv", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
            MagicItem("Luba's Tarokka of Souls", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
            MagicItem("Mighty Servant of Leuk-o", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
            MagicItem("Teeth of Dahlver-Nar", "Wondrous item", "artifact", "Tasha's Cauldron of Everything", category="Artifacts"),
        ]
        
        items = tattoo_items + class_items + shard_items + spellbook_items + other_items + artifact_items
        
        return items, []  # No new spells for scrolls in Tasha's main content
    
    def parse_planescape_content(self) -> tuple[List[MagicItem], List[Spell]]:
        """Parse Planescape content"""
        
        items = [
            MagicItem("Mimir", "Wondrous Item", "rare", "Planescape", category="Planar Items"),
            MagicItem("Portal Compass", "Wondrous Item", "uncommon", "Planescape", category="Planar Items"),
            MagicItem("Sensory Stone", "Wondrous Item", "uncommon", "Planescape", category="Planar Items"),
        ]
        
        spells = [
            Spell("Warp Sense", 2, "Divination", "Planescape", ["Sorcerer", "Warlock", "Wizard"]),
            Spell("Gate Seal", 4, "Abjuration", "Planescape", ["Sorcerer", "Warlock", "Wizard"]),
        ]
        
        return items, spells
    
    def parse_spelljammer_content(self) -> tuple[List[MagicItem], List[Spell]]:
        """Parse Spelljammer content"""
        
        items = [
            MagicItem("Fish Suit", "Wondrous Item", "very rare", "Spelljammer", category="Spelljammer Items"),
            MagicItem("Spelljamming Helm", "Wondrous Item", "rare", "Spelljammer", category="Spelljammer Items"),
            MagicItem("Wildspace Orrery", "Wondrous Item", "uncommon", "Spelljammer", category="Spelljammer Items"),
        ]
        
        spells = [
            Spell("Air Bubble", 2, "Conjuration", "Spelljammer", ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"]),
            Spell("Create Spelljamming Helm", 5, "Transmutation", "Spelljammer", ["Artificer", "Wizard"]),
        ]
        
        return items, spells
    
    def parse_all_sources(self) -> Dict[str, Any]:
        """Parse all D&D sources"""
        print("🎲 Parsing all D&D sources...")
        
        # Parse each source
        eberron_items, eberron_spells = self.parse_eberron_content()
        fizban_items, fizban_spells = self.parse_fizban_content()
        tasha_items, tasha_spells = self.parse_tasha_content()
        planescape_items, planescape_spells = self.parse_planescape_content()
        spelljammer_items, spelljammer_spells = self.parse_spelljammer_content()
        
        # Combine everything
        self.all_items = eberron_items + fizban_items + tasha_items + planescape_items + spelljammer_items
        self.all_spells = eberron_spells + fizban_spells + tasha_spells + planescape_spells + spelljammer_spells
        
        # Calculate stats
        source_stats = {
            "Eberron: Rising from the Last War": {"items": len(eberron_items), "spells": len(eberron_spells)},
            "Fizban's Treasury of Dragons": {"items": len(fizban_items), "spells": len(fizban_spells)},
            "Tasha's Cauldron of Everything": {"items": len(tasha_items), "spells": len(tasha_spells)},
            "Planescape": {"items": len(planescape_items), "spells": len(planescape_spells)},
            "Spelljammer": {"items": len(spelljammer_items), "spells": len(spelljammer_spells)},
        }
        
        return {
            "parsing_date": datetime.now().isoformat(),
            "total_items": len(self.all_items),
            "total_spells": len(self.all_spells),
            "source_breakdown": source_stats,
            "items": [asdict(item) for item in self.all_items],
            "spells": [asdict(spell) for spell in self.all_spells],
            "summary": {
                "dmg_2024": 534,  # Already parsed
                "additional_sources": len(self.all_items),
                "grand_total": 534 + len(self.all_items),
                "new_spells_for_scrolls": len(self.all_spells)
            }
        }

def main():
    """Parse and report on all sources"""
    parser = ComprehensiveSourceParser()
    results = parser.parse_all_sources()
    
    print(f"\n🎯 PARSING COMPLETE!")
    print(f"📊 MAGIC ITEMS:")
    for source, stats in results['source_breakdown'].items():
        print(f"  📚 {source}: {stats['items']} items, {stats['spells']} spells")
    
    print(f"\n🎉 GRAND TOTALS:")
    print(f"  📜 DMG 2024: {results['summary']['dmg_2024']} items")
    print(f"  🌟 Additional Sources: {results['summary']['additional_sources']} items")
    print(f"  🎲 TOTAL MAGIC ITEMS: {results['summary']['grand_total']} items")
    print(f"  ✨ New Spells for Scrolls: {results['summary']['new_spells_for_scrolls']} spells")
    
    # Save results
    with open('data/official/multi_source_analysis.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n✅ Results saved to data/official/multi_source_analysis.json")
    print(f"🚀 Ready for web app integration!")

if __name__ == "__main__":
    main() 