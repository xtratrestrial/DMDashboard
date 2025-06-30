# DM Dashboard Development Plan

## 🚨 CRITICAL NEXT SESSION TASKS

### 1. Fix LootFactory Integration
- **Issue**: Loot Factory button opens `localhost:5173` but LootFactory frontend is actually running on `localhost:5175` (ports 5173/5174 were in use)
- **Action**: Update `dm-dashboard/src/App.tsx` handleToolChange to use correct port
- **Status**: 🔴 Blocking - integration broken

### 2. Unified Sidebar Implementation
- **Issue**: Each tool (LootFactory, future tools) needs to use the same DM Dashboard sidebar
- **Current**: LootFactory has its own sidebar/navigation
- **Required**: Replace LootFactory sidebar with shared `DmSidebar` component from `shared/components/`
- **Scope**: 
  - Update `LootFactory/web-app/frontend/src/App.tsx` to import and use `DmSidebar`
  - Configure sidebar with LootFactory-specific active state
  - Remove LootFactory's custom navigation
- **Status**: 🔴 Critical - needed for ecosystem consistency

### 3. Global Sidebar Configuration
- **Issue**: Need centralized sidebar config so all tools use same navigation
- **Current**: Each app has its own sidebar config
- **Required**: 
  - Move sidebar config to `shared/components/DmSidebarConfig.ts`
  - Each tool imports and uses shared config
  - Tools can override active states but use same tool list
- **Benefits**: Single source of truth, consistent navigation across ecosystem
- **Status**: 🟡 Important - architectural improvement

### 4. Database Architecture Review
- **Question**: Should there be 1 database instance for the entire DMDashboard ecosystem?
- **Current State**:
  - LootFactory: Uses JSON files + in-memory data (629 magic items)
  - Name Generator: Uses JSON files (enhanced_name_database.json)
  - Future tools: Will need data storage
- **Considerations**:
  - **Pro Single DB**: Centralized data, easier cross-tool integration, shared user data
  - **Pro Multi DB**: Tool independence, simpler deployment, tool-specific optimization
- **Research Needed**:
  - Performance implications
  - Deployment complexity
  - Data sharing requirements between tools
  - Backup/recovery strategies
- **Status**: 🟡 Planning - architectural decision needed

## 🛠️ Technical Implementation Notes

### Port Management
- **DM Dashboard**: `localhost:5174`
- **LootFactory Backend**: `localhost:3001` (629 magic items loaded)
- **LootFactory Frontend**: `localhost:5175` (auto-selected due to port conflicts)
- **Future Tools**: Need port allocation strategy

### Color System Status
- ✅ Master color palette implemented (`shared/themes/master-colors.css`)
- ✅ DM Dashboard using unified grey theme
- ✅ Brown colors eliminated from dashboard
- 🔄 LootFactory needs color system integration

### Sidebar Component Status
- ✅ `shared/components/DmSidebar.tsx` - main component
- ✅ `shared/components/DmSidebarConfig.ts` - configuration
- ✅ 17 tools configured (including new Renown Tracker)
- 🔄 LootFactory integration pending
- 🔄 Global configuration needs implementation

## 📋 Development Roadmap

### Immediate Priority (Next Session)
1. Fix LootFactory button port issue
2. Implement unified sidebar in LootFactory
3. Test cross-tool navigation

### Short Term (1-2 sessions)
1. Global sidebar configuration
2. Database architecture decision
3. Name Generator web frontend planning

### Medium Term (3-5 sessions)
1. First new tool implementation (Dice Calculator or Settlement Generator)
2. Cross-tool data sharing framework
3. Integration testing

---

*Last Updated: 2025-01-30 - End of Session Notes* 