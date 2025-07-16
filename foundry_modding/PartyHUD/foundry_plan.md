# Party HUD Initial Development Plan

## 1. Integration with FoundryVTT
- Add Party HUD access via the Token Layer menu (see [TokenLayer API](https://foundryvtt.com/api/classes/foundry.canvas.layers.TokenLayer.html))
- Add a menu item to open the Party HUD from token layer controls

## 2. UI/UX Structure
- Use a tabbed interface ([Tabs API](https://foundryvtt.com/api/classes/foundry.applications.ux.Tabs.html))
- Evaluate best base class for the HUD (ApplicationV2, HUD, Dialog, TabbedApplication, DocumentSheetV2)
- Ensure the HUD is resizable, movable, hideable, and lockable
- Implement tool-tips throughout ([TooltipManager API](https://foundryvtt.com/api/classes/foundry.helpers.interaction.TooltipManager.html))

## 3. Tab Breakdown
### Tab 1: Party Status
- Display HP, AC, conditions, speed, death saves, spell slots for all party members
- Integrate with DND5E system for conditions ([Active Effect Guide](https://github.com/foundryvtt/dnd5e/wiki/Active-Effect-Guide))

### Tab 2: Loot Transfer
- Integrate with Item Piles module for loot management
- Allow item transfer between party and loot piles

### Tab 3: Marching Order
- Provide a grid for players to arrange tokens
- Allow drag-and-drop of tokens onto the grid

### Tab 4: Inventory
- Show each character's inventory (collapsible per PC)
- Section for unclaimed items (loot pool)
- Button to auto-distribute money among party

### Tab 5: Magic Item & Wealth Tracker
- Aggregate magic items from all party members
- Organize by rarity and ownership
- Calculate and display total party wealth, compare to D&D rules

## 4. Real-Time Updates
- Ensure all data updates in real-time as party state changes

## 5. Token Interaction
- Allow tokens to be pulled from the HUD onto the canvas

## 6. References
- DND5E system module ([DND5E Wiki](https://github.com/foundryvtt/dnd5e/wiki))
- Official FoundryVTT API docs

---

**Next Steps:**
1. Decide on the base class for the HUD (ApplicationV2, HUD, etc.)
2. Scaffold the PartyHUD module structure
3. Implement Token Layer menu integration
4. Build tabbed UI skeleton
5. Develop each tab's core functionality
6. Add real-time update logic
7. Integrate tool-tips and UI polish 