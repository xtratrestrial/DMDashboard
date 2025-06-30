# 🎲 DM Dashboard Tool Development Plans

## Overview
This document outlines the development plans for all tools in the DM Dashboard ecosystem. Each tool is designed to integrate seamlessly with D&D Beyond, FoundryVTT, and Coda.io while providing standalone value.

---

## 🏘️ Settlement Generator

### Purpose
Generate detailed towns and cities with AI-enhanced descriptions, integrating with the existing name generator for NPCs.

### Core Features
- **Size-Based Generation**: Hamlet, Village, Town, City scaling
- **Building Types**: Inns, shops, temples, government buildings
- **NPC Population**: Uses existing name generator + AI descriptions
- **Economic Modeling**: Trade goods, services, pricing by settlement size
- **Cultural Details**: Local customs, festivals, governance

### Technical Implementation
```typescript
interface Settlement {
  name: string;
  type: 'hamlet' | 'village' | 'town' | 'city';
  population: number;
  buildings: Building[];
  npcs: NPC[];
  economy: EconomicData;
  culture: CulturalData;
  location: GeographicData;
}

interface Building {
  type: string;
  name: string;
  description: string;
  owner: NPC;
  services: Service[];
  quality: 'poor' | 'modest' | 'comfortable' | 'wealthy' | 'aristocratic';
}
```

### Data Sources
- **DMG 2024**: Settlement size tables, building types
- **Name Generator**: Existing NPC name database
- **AI Integration**: OpenAI/Claude for detailed descriptions
- **Economic Tables**: Trade goods, pricing matrices

### AI Prompt Templates
```
Generate a {building_type} in a {settlement_size} settlement named {settlement_name}.
Settlement culture: {culture_type}
Building quality: {quality_level}
Owner: {npc_name} ({npc_background})

Include: atmosphere, notable features, services offered, pricing range, local rumors.
Style: D&D 5e, practical for DMs, 2-3 paragraphs.
```

### Integration Points
- **D&D Beyond**: Export NPCs as custom characters
- **FoundryVTT**: Create scene with tokens and buildings
- **Coda.io**: Sync settlement data to campaign notes
- **Name Generator**: Fetch NPC names and backgrounds

---

## 🏰 Dungeon Generator

### Purpose
Generate dungeons using DMG 2024 tables with optional rules from other sources, complete with maps, encounters, and treasure.

### Core Features
- **DMG 2024 Tables**: Official random dungeon generation
- **Room Generation**: Corridors, chambers, special rooms
- **Map Generation**: ASCII or simple visual layouts
- **Encounter Population**: CR-appropriate monsters
- **Treasure Integration**: Links to LootFactory for appropriate loot
- **Trap System**: Random trap placement and mechanics

### Technical Implementation
```typescript
interface Dungeon {
  theme: DungeonTheme;
  size: 'small' | 'medium' | 'large' | 'massive';
  levels: DungeonLevel[];
  totalRooms: number;
  partyLevel: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'deadly';
}

interface DungeonLevel {
  floor: number;
  rooms: Room[];
  corridors: Corridor[];
  stairs: Stairway[];
  map: MapData;
}

interface Room {
  id: string;
  type: RoomType;
  size: Dimensions;
  description: string;
  encounters: Encounter[];
  treasure: TreasureData;
  traps: Trap[];
  exits: Exit[];
}
```

### Data Sources
- **DMG 2024**: Dungeon generation tables, room types, themes
- **Monster Manual**: Encounter tables by CR and environment
- **OSR Sources**: Alternative generation algorithms (if DMG insufficient)
- **LootFactory**: Treasure generation by party level

### Alternative Rule Systems
- **Old School Essentials**: Classic dungeon generation
- **Worlds Without Number**: Sector/room generation
- **Custom Tables**: Specific dungeon types (e.g., wizard towers, ancient ruins)

### Integration Points
- **FoundryVTT**: Export as playable scenes with walls and lighting
- **LootFactory**: Generate appropriate treasure for encounters
- **D&D Beyond**: Create encounter stat blocks

---

## 🍺 Inn Generator

### Purpose
Generate detailed taverns and inns with staff, menus, rooms, and random events.

### Core Features
- **Establishment Details**: Name, atmosphere, architecture, reputation
- **NPC Staff**: Innkeeper, barmaids, cooks, stable hands
- **Room & Board**: Pricing based on quality and settlement size
- **Menu Generation**: Food, drinks, local specialties
- **Event Tables**: Random encounters and daily happenings
- **Services**: Stabling, message delivery, local information

### Technical Implementation
```typescript
interface Inn {
  name: string;
  type: 'tavern' | 'inn' | 'roadhouse' | 'fine_establishment';
  atmosphere: AtmosphereType;
  staff: NPC[];
  rooms: InnRoom[];
  menu: MenuItem[];
  services: Service[];
  events: RandomEvent[];
  reputation: ReputationData;
}

interface MenuItem {
  category: 'food' | 'drink' | 'specialty';
  name: string;
  description: string;
  price: CopperPieces;
  availability: 'common' | 'seasonal' | 'rare';
}
```

### Special Features
- **Quality Scaling**: Prices and quality based on settlement wealth
- **Seasonal Menus**: Different offerings by time of year
- **Local Specialties**: Unique items based on region/culture
- **Rumor Tables**: Plot hooks and local gossip
- **Private Rooms**: Meeting spaces for secretive business

---

## 🏪 Merchant Generator

### Purpose
Generate shops with specialized inventories, merchant personalities, and dynamic pricing.

### Core Features
- **Shop Specialization**: General store, weaponsmith, apothecary, magic shop
- **Dynamic Inventory**: Appropriate goods for shop type and settlement
- **Merchant Personalities**: Backgrounds, quirks, negotiation styles
- **Pricing System**: Based on rarity, settlement wealth, reputation
- **Trade Networks**: Connected economies between settlements
- **Special Orders**: Custom items with delivery times

### Technical Implementation
```typescript
interface MerchantShop {
  shopType: ShopType;
  name: string;
  owner: Merchant;
  inventory: ShopItem[];
  services: CraftingService[];
  reputation: number;
  wealth: WealthLevel;
  specialties: string[];
  tradeConnections: Settlement[];
}

interface ShopItem {
  item: Item;
  quantity: number;
  basePrice: number;
  currentPrice: number;
  availability: 'in_stock' | 'limited' | 'special_order';
  restockTime: number;
}
```

### Shop Types & Specializations
- **General Store**: Basic adventuring gear, rations, tools
- **Weaponsmith**: Weapons, armor, repairs, custom work
- **Apothecary**: Potions, herbs, alchemical supplies
- **Magic Shop**: Spell components, scrolls, minor magic items
- **Jeweler**: Gems, jewelry, precious metals
- **Bookstore**: Books, maps, scholarly supplies

---

## ⚔️ Magic Weapon & Ammunition Generator

### Purpose
Generate magical weapons and ammunition with balanced properties for any party level.

### Core Features
- **Base Weapon Types**: All PHB weapons plus special materials
- **Enchantment System**: Minor and major magical properties
- **Ammunition Variants**: Magical arrows, bolts, bullets, throwing weapons
- **Material Options**: Mithril, adamantine, silver, cold iron
- **Cursed Items**: Balanced risk/reward cursed weapons
- **Scaling System**: Appropriate power level for party

### Technical Implementation
```typescript
interface MagicWeapon {
  baseWeapon: WeaponType;
  material: SpecialMaterial;
  enchantments: Enchantment[];
  rarity: ItemRarity;
  attunement: boolean;
  curse: Curse | null;
  description: string;
  properties: WeaponProperty[];
}

interface Enchantment {
  type: 'damage' | 'utility' | 'defensive' | 'special';
  power: number;
  description: string;
  activationType: 'passive' | 'command' | 'trigger';
  charges?: number;
}
```

### Enchantment Categories
- **Damage Enhancements**: +1 to +3, elemental damage, critical effects
- **Utility Powers**: Light, returning, defending, keen
- **Special Abilities**: Spell storage, transformation, communication
- **Conditional Effects**: vs specific creature types or conditions

---

## 🏃 Chase Scene Manager

### Purpose
Manage dynamic chase sequences using DMG 2024 rules with visual tracking and complications.

### Core Features
- **Chase Mechanics**: Implements official DMG 2024 chase rules
- **Distance Tracking**: Visual progress bars and distance counters
- **Participant Management**: Multiple chasers and quarry
- **Obstacle Generation**: Random complications and environmental hazards
- **Skill Challenges**: Multi-character collaborative chase sequences
- **Terrain Integration**: Different rules for urban, wilderness, dungeon chases

### Technical Implementation
```typescript
interface ChaseScene {
  participants: ChaseParticipant[];
  terrain: TerrainType;
  distance: number;
  maxDistance: number;
  round: number;
  obstacles: Obstacle[];
  complications: Complication[];
  weather: WeatherCondition;
}

interface ChaseParticipant {
  character: Character;
  role: 'quarry' | 'pursuer';
  position: number;
  speed: number;
  condition: Condition[];
  actions: ChaseAction[];
}
```

### Chase Types
- **Urban**: Rooftops, crowds, obstacles, vertical movement
- **Wilderness**: Terrain, weather, mounted vs foot
- **Dungeon**: Narrow passages, traps, secret doors
- **Aerial**: Flying creatures, three-dimensional movement
- **Aquatic**: Swimming, boats, underwater complications

---

## 📜 Magic Item Tracker

### Purpose
Track party magic items according to DMG 2024 guidelines for appropriate level progression.

### Core Features
- **Level Guidelines**: DMG 2024 magic item progression by level
- **Rarity Distribution**: Ensures balanced magic item acquisition
- **Attunement Management**: Tracks attunement slots per character
- **Upgrade Suggestions**: Recommends appropriate item upgrades
- **Wealth Correlation**: Links with wealth tracker for comprehensive view
- **Trading System**: Magic item exchange and valuation

### Technical Implementation
```typescript
interface PartyInventory {
  characters: Character[];
  magicItems: TrackedMagicItem[];
  guidelines: LevelGuidelines;
  attunementSlots: AttunementData;
  recommendations: ItemRecommendation[];
}

interface TrackedMagicItem {
  item: MagicItem;
  owner: Character;
  dateAcquired: Date;
  source: 'treasure' | 'purchase' | 'craft' | 'gift';
  attuned: boolean;
  condition: ItemCondition;
}
```

### DMG 2024 Integration
- **Level Progression**: Appropriate magic item distribution
- **Rarity Guidelines**: Common/uncommon/rare balance by level
- **Attunement Limits**: Enforce 3-item attunement maximum
- **Economic Impact**: Factor magic items into wealth calculations

---

## 💎 Wealth & Magic Item Tracker

### Purpose
Combined tracker for party wealth progression and magic item distribution according to DMG 2024 guidelines.

### Core Features
- **Wealth Guidelines**: Track against recommended wealth by level
- **Magic Item Distribution**: Appropriate magic items by level and rarity
- **Attunement Management**: Track attunement slots per character
- **Treasure Budgeting**: Plan future treasure distribution
- **Economic Modeling**: Regional price variations and inflation
- **Expense Tracking**: Lifestyle costs, equipment maintenance
- **Investment Options**: Business ventures, property ownership
- **Group Finances**: Shared treasure and individual wealth

### Technical Implementation
```typescript
interface WealthTracker {
  party: PartyWealthData;
  guidelines: WealthGuidelines;
  expenses: ExpenseTracker;
  investments: Investment[];
  economicFactors: EconomicData;
  treasureBudget: TreasureBudget;
}

interface PartyWealthData {
  totalWealth: number;
  sharedFunds: number;
  individualWealth: CharacterWealth[];
  liquidAssets: number;
  investedAssets: number;
  magicItemValue: number;
}
```

### Economic Features
- **Lifestyle Costs**: Wretched to aristocratic living expenses
- **Equipment Maintenance**: Weapon/armor repair costs
- **Property Management**: Buildings, businesses, land ownership
- **Market Fluctuations**: Supply/demand affecting prices

---

## 🏆 Renown Tracker

### Purpose
Track faction reputation, renown points, and political standing across different organizations and regions.

### Core Features
- **Faction Management**: Multiple organizations with individual reputation scores
- **Renown Points**: Track renown progression with different groups
- **Reputation Levels**: Hostile, Unfriendly, Neutral, Friendly, Allied status
- **Benefits Tracking**: Faction-specific perks and access levels
- **Quest Integration**: Link reputation changes to story events
- **Regional Influence**: Different standing in various locations

### Technical Implementation
```typescript
interface RenownTracker {
  factions: Faction[];
  characters: CharacterRenown[];
  events: RenownEvent[];
  benefits: FactionBenefit[];
  regions: RegionalStanding[];
}

interface Faction {
  id: string;
  name: string;
  type: FactionType;
  description: string;
  headquarters: string;
  influence: InfluenceLevel;
  rivals: string[];
  allies: string[];
}

interface CharacterRenown {
  characterId: string;
  factionStanding: FactionStanding[];
  totalRenown: number;
  titles: Title[];
  benefits: ActiveBenefit[];
}
```

### Faction Types
- **Religious Orders**: Temples, clerical organizations
- **Government**: City councils, royal courts, military orders
- **Criminal**: Thieves' guilds, smuggling rings
- **Mercantile**: Trade guilds, merchant houses
- **Academic**: Schools of magic, scholarly societies
- **Secret Societies**: Hidden organizations with mysterious goals

### Reputation Benefits
- **Access Levels**: Areas, information, special services
- **Discounts**: Equipment, services, magical items
- **Assistance**: NPCs willing to help or provide aid
- **Titles**: Formal recognition and social standing
- **Missions**: Exclusive quests and opportunities

---

## 🎯 Dice Math Calculator

### Purpose
Advanced dice calculations with probability analysis and optimization tools.

### Core Features
- **Complex Expressions**: Multi-die formulas with modifiers
- **Probability Analysis**: Success chance calculations
- **Advantage/Disadvantage**: Visual probability curves
- **Damage Optimization**: Compare weapon and spell damage
- **Statistical Tracking**: Historical roll analysis
- **Custom Dice**: Non-standard die types and mechanics

### Technical Implementation
```typescript
interface DiceCalculation {
  expression: string;
  result: CalculationResult;
  probability: ProbabilityData;
  statistics: StatisticalAnalysis;
  optimization: OptimizationSuggestions;
}

interface ProbabilityData {
  successChance: number;
  expectedValue: number;
  variance: number;
  distribution: number[];
  criticalChance: number;
}
```

### Advanced Features
- **Reroll Mechanics**: Brutal critical, great weapon fighting
- **Conditional Modifiers**: Situational bonuses and penalties
- **Spell Analysis**: Save-or-suck vs damage comparison
- **Multi-Target Calculations**: Area effect probability analysis

---

## 🔗 Integration Framework

### D&D Beyond Integration
```typescript
interface DNDBeyondSync {
  characters: Character[];
  campaign: CampaignData;
  spellSlots: SpellSlotData;
  equipment: EquipmentData;
  notes: CampaignNotes;
}
```

### FoundryVTT Integration
```typescript
interface FoundryExport {
  actors: ActorData[];
  items: ItemData[];
  scenes: SceneData[];
  journal: JournalData[];
  macros: MacroData[];
}
```

### Coda.io Integration
```typescript
interface CodaSync {
  tables: CodaTable[];
  documents: CodaDocument[];
  syncRules: SyncConfiguration;
  conflicts: ConflictResolution[];
}
```

---

## 📅 Development Roadmap

### Phase 1: High-Value Generators (2-4 weeks)
1. **Dice Math Calculator** - Immediate utility
2. **Settlement Generator** - High content value
3. **Magic Weapon Generator** - Popular feature

### Phase 2: Campaign Management (4-6 weeks)
1. **Chase Scene Manager** - Unique utility
2. **Wealth & Magic Item Tracker** - Combined economic & item tracking
3. **Renown Tracker** - Faction reputation system

### Phase 3: Content Generators (6-8 weeks)
1. **Dungeon Generator** - Complex map generation
2. **Inn Generator** - Atmospheric content
3. **Merchant Generator** - Economic integration

### Phase 4: Integration Suite (8-12 weeks)
1. **D&D Beyond Sync** - Character import/export
2. **FoundryVTT Export** - Content publishing
3. **Coda.io Sync** - Note synchronization

---

## 🎨 Design Consistency

### Color Scheme
All tools will use the unified master color palette from `shared/themes/master-colors.css`:
- **Primary**: DM's Guild Red (#B0212B)
- **Secondary**: Leather Brown (#8B4513)
- **Accent**: Gold (#DAA520)
- **Backgrounds**: Dark theme with parchment accents

### Typography
- **Headers**: Cinzel (fantasy serif)
- **Body**: Crimson Text (readable serif)
- **UI Elements**: Inter (clean sans-serif)
- **Display**: Bebas Neue (impact display)

### Components
- Consistent sidebar navigation
- Unified panel styling
- Shared form components
- Common modal/dialog patterns

---

## 🧪 Testing Strategy

### Unit Tests
- Individual tool functionality
- Data generation algorithms
- Integration API calls

### Integration Tests
- Cross-tool data sharing
- External API connections
- Export/import workflows

### User Experience Tests
- DM workflow efficiency
- Tool discovery and learning
- Performance under load

---

## 📈 Success Metrics

### Usage Metrics
- Tools per session usage
- Content generation volume
- Integration adoption rates

### Quality Metrics
- Generated content quality ratings
- DM prep time reduction
- Integration reliability

### Ecosystem Health
- Cross-tool workflow usage
- Data consistency across tools
- Community feedback scores 