# Phase 2 Implementation Plan - Core Generation Engine

## 🎯 **Confirmed Features (Based on User Feedback)**

### ✅ **Priority 1 - Core Systems**
1. **Spell Scroll Subsystem** ✅ APPROVED
   - Auto-determine spell levels within rarity ranges
   - Random spell selection from SRD spell lists
   - Support for multi-level ranges (e.g., "level 4 or 5")

2. **CR/Level-Based Table Selection** ✅ OH YES!
   - Algorithm to select appropriate rarity tables based on encounter CR
   - Play tier integration (Tier 1-4 scaling)
   - Party level consideration for treasure appropriateness

3. **Individual vs Treasure Hoard Modes** ✅ APPROVED
   - Separate generation algorithms for single vs bulk treasure
   - Quantity scaling based on hoard size and CR
   - Milestone vs encounter reward differentiation

4. **Enspelled Item Customization** ✅ USE IT
   - Auto-determination of weapon/armor types for generic entries
   - Random selection from appropriate equipment categories
   - Bonus scaling (+1, +2, +3) based on rarity

### ✅ **Priority 2 - Advanced Subsystems**
5. **Variant Selection for Complex Items** 
   - Auto-selection for figurines, instruments, potions, etc.
   - Sub-table generation for multi-variant items
   - **Decision needed**: Automatic vs GM choice?

6. **Giant Strength Potion Tiers** ✅ PLAY TIER WEIGHTED
   - Weighted probability based on character/party tiers
   - Tier 1-4 scaling: Hill → Fire/Frost/Stone → Cloud → Storm
   - Dynamic probability adjustment

7. **Elemental Control Items** ✅ SOUNDS GOOD
   - Support for commanding elemental items
   - Integration with existing elemental systems

## 🛠️ **Technical Implementation Plan**

### **Week 1: Core Engine Architecture**
- [ ] Create `LootGenerator` main class
- [ ] Implement basic table selection logic
- [ ] Add JSON table loading and parsing
- [ ] Create dice rolling utilities (d100, probability ranges)

### **Week 2: Subsystem Integration**
- [ ] **Spell Scroll Generator**
  - Spell level determination algorithm
  - SRD spell list integration
  - Level range parsing ("level 4 or 5")
- [ ] **CR/Level Scaling**
  - Play tier detection
  - Appropriate rarity table selection
  - Encounter vs milestone scaling

### **Week 3: Advanced Features**
- [ ] **Enspelled Item System**
  - Equipment type randomization
  - Bonus assignment based on rarity
- [ ] **Giant Strength Potion Weighting**
  - Tier-based probability tables
  - Dynamic weight calculation
- [ ] **Variant Selection Framework**
  - Sub-table parsing and generation
  - Multi-option item resolution

### **Week 4: Individual vs Hoard Systems**
- [ ] **Individual Treasure Mode**
  - Single item generation
  - CR-appropriate scaling
- [ ] **Treasure Hoard Mode**
  - Multi-item generation
  - Quantity algorithms
  - Value balancing

## 📊 **Data Structure Updates Needed**

### **Enhanced JSON Schemas**
```json
{
  "spell_scrolls": {
    "level_ranges": {
      "common": [0, 1],
      "uncommon": [2, 3],
      "rare": [4, 5],
      "very_rare": [6, 7, 8],
      "legendary": [9]
    }
  },
  "variant_tables": {
    "figurines": ["bronze griffon", "ebony fly", "golden lions", ...],
    "giant_strength": {
      "tier_1": {"hill": 0.7, "fire": 0.25, "cloud": 0.05},
      "tier_2": {"hill": 0.4, "fire": 0.45, "cloud": 0.15},
      "tier_3": {"hill": 0.15, "fire": 0.4, "cloud": 0.35, "storm": 0.1},
      "tier_4": {"hill": 0.05, "fire": 0.25, "cloud": 0.4, "storm": 0.3}
    }
  },
  "cr_scaling": {
    "tier_1": {"cr_range": [0, 4], "rarity_weights": {...}},
    "tier_2": {"cr_range": [5, 10], "rarity_weights": {...}},
    "tier_3": {"cr_range": [11, 16], "rarity_weights": {...}},
    "tier_4": {"cr_range": [17, 20], "rarity_weights": {...}}
  }
}
```

## 🔗 **Integration Points**

### **Xanathar's Guide Integration**
- [ ] Parse additional magic items from re-added `xanathar.md`
- [ ] Merge with DMG tables while maintaining source attribution
- [ ] Support multiple source selection (DMG only, Xanathar's only, Combined)

### **SRD 2024 Compliance**
- [ ] Cross-reference all generated items with SRD
- [ ] Validate spell lists against official sources
- [ ] Ensure rarity classifications match official guidelines

## 🎮 **User Interface Considerations**

### **Generation Options**
- **Source Selection**: DMG, Xanathar's, Combined
- **Generation Mode**: Individual, Small Hoard, Large Hoard
- **CR/Level Input**: Manual or automatic scaling
- **Customization Level**: Full Random, Semi-Guided, Manual Override

### **Output Formats**
- **Simple**: "Potion of Giant Strength (Cloud Giant)"
- **Detailed**: Include rarity, source, mechanical effects
- **Campaign Notes**: Integration suggestions and balance notes

## 📋 **Success Metrics**

### **Phase 2 Completion Criteria**
- [ ] Generate appropriate magic items for any CR 0-20 encounter
- [ ] Support all identified subsystems (scrolls, variants, enspelled items)
- [ ] Handle both individual and hoard generation modes
- [ ] Integrate Xanathar's Guide content seamlessly
- [ ] Maintain 100% SRD 2024 compliance
- [ ] Provide extensible architecture for additional sources

---

**Phase 2 Goal**: Functional loot generation engine with all approved features, ready for TUI development in Phase 3.

**Estimated Timeline**: 4 weeks (assuming 10-15 hours/week development time) 