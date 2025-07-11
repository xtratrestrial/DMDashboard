# 🏛️ DMDashboard Master Plan

##  **Vision Statement**
Build the ultimate suite of interconnected D&D 5e tools to streamline Dungeon Master workflows through unified design, shared components, and seamless integration across all modules. 

Key integration goals:
- Connect to users' D&D Beyond accounts to access and incorporate purchased sourcebooks via the D&D Beyond API.
- Integrate with FoundryVTT for real-time party status updates and smooth import/export between tools and the VTT environment.
- Enable campaign data storage in a central database, supporting persistent tracking of party, campaign, and session information.
- Support integration with Obsidian and Coda.io, allowing world-building and session notes to sync with the dashboard.

The vision: a single, cohesive platform where DMs can manage campaigns, generate content, and connect all their favorite D&D resources in one place.

##  **Current Status (July 2025)**

### ✅ **Production Ready Tools**
- **💰 LootFactory** - Advanced D&D 5e treasure generation
  - 629+ magic items from 6 official source books
  - DMG 2024 methodology with pricing calculator
  - Individual & hoard treasure generation
  - Full-stack React + Node.js application
  - Network accessible on port 5080

- **🏠 DM Dashboard** - Campaign management hub
  - Party tracking with HP/AC management
  - Session notes and campaign overview
  - Unified sidebar navigation to all tools
  - Network accessible on port 3000

- **🎨 Unified Design System**
  - DM's Guild color palette implementation
  - Shared component library (`shared/components/`)
  - Cross-tool navigation working
  - Consistent theming across ecosystem

### 🔧 **Infrastructure Complete**
- Docker containerization with health checks
- Cross-app navigation between tools
- Network accessibility configured
- Master color system implemented

### 🚨 **Critical Next Session Tasks**
*Session ended January 30, 2025 - Priority fixes needed*

1. **🔴 Fix LootFactory Integration** - Button opens wrong port (5175 vs 5173)
2. **🔴 Unified Sidebar Implementation** - Replace LootFactory sidebar with shared `DmSidebar`
3. **🟡 Global Sidebar Configuration** - Single source of truth for all tools
4. **🟡 Database Architecture Decision** - Single vs multiple database strategy

---

## 🗓️ **Development Phases**

### **Phase 0: Critical Consolidation** (IMMEDIATE PRIORITY)
*Complete the unified architecture before new development*

** Reference**: See `roadmap/merge_plan.md` for detailed technical specifications and migration steps.

#### 🔧 **Backend Migration & API Consolidation** (Week 1)
- [ ] Migrate complete LootFactory backend from standalone to unified structure
  - Copy `LootFactory/web-app/backend/*` → `backend/lootfactory/`
  - Copy `LootFactory/data/*` → `backend/data/`
  - Update API endpoints to unified router
- [ ] Migrate name-generator Python backend to unified backend
  - Copy `name-generator/core/*` → `backend/namegenerator/`
  - Integrate Python backend with Node.js API gateway
- [ ] Create unified API router combining all backend endpoints
  - Implement `/api/lootfactory/*` routes
  - Implement `/api/name-generator/*` routes
  - Implement `/api/dashboard/*` routes
- [ ] Update frontend API calls to use unified backend
  - Replace direct backend calls with unified API client
  - Add proper error handling and retry logic
- [ ] Test all backend integrations and health checks
  - Verify all endpoints respond correctly
  - Test cross-module data sharing

#### 🎨 **Frontend Module Enhancement** (Week 2)
- [ ] Replace basic LootFactory module with complete standalone features
  - Migrate complete UI from `LootFactory/web-app/frontend/src/`
  - Add source book filtering with dropdown
  - Add export functionality (CSV/TSV)
  - Add toast notification system
- [ ] Add missing 629+ magic items data to unified frontend
  - Copy `dmg_2024_items.json` (534 items)
  - Copy `unified_magic_items.json` (629+ items)
  - Copy `multi_source_analysis.json`
- [ ] Implement advanced features from standalone versions
  - Source book filtering logic
  - Export functionality with proper formatting
  - Toast notification system across all modules
  - Generation controls and validation
- [ ] Verify all modules work correctly in unified app
  - Test cross-module navigation
  - Test shared component functionality
  - Test responsive design across all modules

#### 🏗️ **Data & Infrastructure Migration** (Week 3)
- [ ] Copy all magic item data from standalone to unified backend
  - Migrate all JSON data files with proper validation
  - Update data loading logic for unified structure
  - Test data integrity and completeness
- [ ] Migrate name generator database (1,295 names) to unified backend
  - Copy `enhanced_name_database.json`
  - Migrate cultural linguistic patterns
  - Migrate phonetic rules engine
- [ ] Update Docker configuration for unified deployment
  - Create unified `docker-compose.yml`
  - Add health checks for all services
  - Configure nginx reverse proxy
- [ ] Create unified deployment scripts with health checks
  - Update `deploy.sh` for unified deployment
  - Add monitoring and logging
  - Test production deployment

#### 🧹 **Cleanup & Verification** (Week 4)
- [ ] Create backups of all standalone versions before deletion
  - Backup `LootFactory/` → `LootFactory_backup_$(date +%Y%m%d)`
  - Backup `dm-dashboard/` → `dm-dashboard_backup_$(date +%Y%m%d)`
  - Backup `name-generator/` → `name-generator_backup_$(date +%Y%m%d)`
- [ ] Verify no functionality is lost in migration
  - Compare unified vs standalone feature parity
  - Test all advanced features from standalone versions
  - Validate data integrity and completeness
- [ ] Delete redundant standalone frontends after verification
  - Remove `LootFactory/web-app/frontend/` (after migration)
  - Remove `dm-dashboard/` (after migration)
  - Remove `name-generator/` frontend (keep backend)
- [ ] Update documentation to reflect unified structure
  - Update README.md with new architecture
  - Update deployment documentation
  - Create migration guide for future reference
- [ ] Test cross-module navigation and shared components
  - Verify unified sidebar works across all modules
  - Test shared component functionality
  - Validate consistent theming and styling

####  **Success Criteria for Phase 0**
- [ ] Single unified frontend serves all tools with full functionality
- [ ] All backend APIs consolidated into unified structure
- [ ] No functionality lost from standalone versions
- [ ] Docker deployment works for unified application
- [ ] Cross-module navigation and shared components work seamlessly
- [ ] All 629+ magic items and 1,295+ names available in unified app

---

### **Phase 1: Foundation Strengthening** (Q1 2025)
*Building robust infrastructure and fixing critical issues*

#### ✅ **Completed Issues**
- [x] Fix shared component import issues in DM Dashboard ✅ **COMPLETED**
- [x] Implement proper TypeScript path resolution ✅ **COMPLETED** - 2024-12-19

####  **Critical Fixes** (Weeks 1-2)
- [ ] Add error boundaries to prevent app crashes
- [ ] Set up comprehensive logging system

#### 🧪 **Testing & Quality** (Weeks 3-4)
- [ ] Add unit tests for core LootFactory logic
- [ ] Add integration tests for cross-app navigation
- [ ] Set up automated testing in CI/CD
- [ ] Add Lighthouse performance audits

#### 📚 **Documentation** (Week 4)
- [ ] Complete API documentation for unified backend
- [ ] Create user guides for each tool
- [ ] Document deployment procedures
- [ ] Set up automated documentation generation

---

**Note**: Phase 0 consolidation work is based on detailed technical specifications in `roadmap/merge_plan.md`. The merge plan contains comprehensive analysis of current state, migration steps, and architectural decisions that should be consulted during implementation.

---

### **Phase 2: Tool Expansion** (Q2 2025)
*Adding new tools to the ecosystem*

#### 🎯 **Dice Calculator** (Weeks 5-7)
- [ ] Complex dice expressions (3d6+2, advantage/disadvantage)
- [ ] Probability calculations and distributions
- [ ] Damage calculation helpers
- [ ] Save vs spell DC calculators

#### 🏘️ **Settlement Generator** (Weeks 8-10)
- [ ] AI-powered town generation
- [ ] Population and demographics
- [ ] Notable NPCs and locations
- [ ] Economic and political details
- [ ] Integration with Name Generator

#### 👤 **Name Generator Web Frontend** (Weeks 11-12)
- [ ] Convert Python tool to web interface
- [ ] Enhanced name database with origins
- [ ] Bulk generation capabilities
- [ ] Name history and favorites

### **Phase 3: Advanced Features** (Q3 2025)
*Sophisticated campaign management tools*

#### 🏰 **Dungeon Generator** (Weeks 13-15)
- [ ] DMG 2024 dungeon generation tables
- [ ] Tome of Adventure tables
- [ ] Room descriptions and encounters
- [ ] Treasure placement automation
- [ ] Map generation integration

#### 🏪 **Merchant Generator** (Weeks 16-18)
- [ ] Shop inventories based on settlement size
- [ ] Dynamic pricing and availability
- [ ] NPC shopkeeper personalities
- [ ] Economic simulation

#### ⚔️ **Magic Weapon Generator** (Weeks 19-20)
- [ ] Custom magic weapon creation
- [ ] Balance testing tools
- [ ] Rarity and power level guidance
- [ ] Integration with LootFactory

### **Phase 4: Campaign Integration** (Q4 2025)
*Deep campaign management and external integrations*

#### 🏃 **Chase Scene Manager** (Weeks 21-22)
- [ ] Dynamic chase encounter generator
- [ ] Environmental hazards and obstacles
- [ ] NPC pursuit tactics
- [ ] Real-time chase tracking

#### 💎 **Wealth & Magic Item Tracker** (Weeks 23-24)
- [ ] Party wealth progression by level (DMG 2024)
- [ ] Magic item distribution tracking
- [ ] Economic balance warnings
- [ ] Campaign wealth analytics

####  **Renown Tracker** (Weeks 25-26)
- [ ] Faction reputation management
- [ ] Renown rewards and consequences
- [ ] Political relationship mapping
- [ ] Story impact tracking

### **Phase 5: External Integrations** (Q1 2026)

*Connecting with popular D&D platforms*


#### 🔗 **D&D Beyond Integration** (Weeks 27-28)
- [ ] Character sheet import/export
- [ ] Spell and monster data sync
- [ ] Campaign sharing capabilities
- [ ] Official content licensing

#### 🎭 **FoundryVTT Integration** (Weeks 29-30)
- [ ] Module development for generated content
- [ ] Scene and token automation
- [ ] Compendium data export
- [ ] Real-time session integration

#### 📋 **Coda.io Integration** (Weeks 31-32)
- [ ] Campaign notes synchronization
- [ ] Player handout generation
- [ ] Session planning templates
- [ ] Data visualization dashboards

---

## 🏗️ **Technical Architecture**

### **Current Architecture**
- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **Data**: JSON files, SQLite for dynamic data
- **Styling**: Custom CSS with CSS3 features
- **Tools**: Python for data processing

### **Deployment Strategy**
- **Docker containers** for each tool
- **Docker Compose** for unified deployment
- **CI/CD pipeline** with GitHub Actions
- **Production hosting** on cloud platforms

### **Quality Assurance**
- **TypeScript** for type safety
- **ESLint/Prettier** for code consistency
- **Component testing** for UI reliability
- **Integration testing** for cross-tool features

### **Planned Architecture Improvements**

#### **Phase 2: Enhanced Backend**
- [ ] Database migration (PostgreSQL or MongoDB)
- [ ] Redis caching for improved performance
- [ ] GraphQL API for better data fetching
- [ ] User authentication and session management

#### **Phase 3: Scalability**
- [ ] Microservices architecture for each tool
- [ ] Load balancing and horizontal scaling
- [ ] CDN integration for static assets
- [ ] Advanced monitoring and alerting

#### **Phase 4: Advanced Features**
- [ ] Real-time collaboration features
- [ ] Offline-first PWA capabilities
- [ ] Mobile responsive design
- [ ] Advanced data analytics

---

## 🎨 **Unified Design System**

### **Color Palette (DM's Guild Authentic)**
- **Primary Background**: `#828282` (Medium Gray)
- **Header/Footer**: `#FAE7C0` (Light Cream)
- **Text**: `#000000` (Black)
- **Accents**: `#B0212B` (Dark Red)
- **Secondary**: `#8B4513` (Brown)
- **Buttons**: `#FFFFFF` (White) with red highlights

### **Shared Components**
- **✅ DmSidebar.tsx** - Extensible navigation component
- **✅ DmSidebarConfig.ts** - Configuration system for all tools
- **✅ DmSidebar.css** - Unified styling with 935+ lines
- **✅ Toast notification system** - Auto-expiring user feedback
- **✅ Professional typography** - Cinzel serif for headings

---

## 🎯 **Tool Specifications**

### ** LootFactory** ✅ **PRODUCTION READY**
- **Purpose**: Advanced D&D 5e treasure generation
- **Features**: 629+ magic items, DMG 2024 methodology, pricing calculator
- **Tech Stack**: React + Node.js + TypeScript
- **Status**: Production ready with advanced features
- **Next**: Source book filtering, campaign integration

### **🏠 DM Dashboard** ✅ **PRODUCTION READY**
- **Purpose**: Campaign management hub
- **Features**: Party tracking, session notes, campaign overview
- **Tech Stack**: React + TypeScript
- **Status**: Production ready with sample data
- **Next**: External integrations (D&D Beyond, FoundryVTT, Coda.io)

### **🎲 Dice Calculator** ✅ **COMPLETE & PRODUCTION READY**
- **Purpose**: Complex dice expressions and probability calculations
- **Features**: 3d6+2, advantage/disadvantage, damage calculations, DC vs Bonus calculator
- **Tech Stack**: React + TypeScript
- **Status**: ✅ **COMPLETE** - Fully implemented in `frontend/src/modules/diceMath/`
- **Next**: Integration with campaign management

### **🏷️ Name Generator** 🚧 **IN DEVELOPMENT**
- **Purpose**: NPC and location name generation
- **Features**: Multiple categories, Python-based generation
- **Tech Stack**: Python backend, planned React frontend
- **Status**: Core functionality complete, web interface planned
- **Next**: Web interface integration with DM Dashboard sidebar
    - the code for generating names is decent.  need to refine, either through more complex logic or added ability to allow user input to help train the machine learning.
### **🗺️ Maps**  **EXPERIMENTAL** - high priority
- **Purpose**: Map data extraction and processing.  able to check targeted subreddits r/dndmaps, r/battlemaps and others for new posts that haven't been scraped yet.  We want to cite the URL of each post and the user who posted it so that we can make sure they are credited for their work.  This tool will then send images and the above meta-data to a map organization server, possibly using paperless -ngx project as an engine to save maps and allow advanced filtering and sorting based on tags.  The idea is that the user can search the database of map images for the perfect map for their current use-case.
- **Features**: Python scripts for map data extraction, searchable map database, thumbnails for maps, bulk importing of maps from dropbox/user's hard drive. Ability to add notes to each map.  Ability to connect each map to a universal vttjson file allowing walls, lighting etc to be imported in addition to the file.  Integrations:  Dungeondraft, Wonderdraft, Inkarnate, foundry Vtt.  
- **Tech Stack**: Python
- **Status**: Experimental stage
- **Next**: Web interface for map management

### **🎯 Foundry Modding** 🚧 **EARLY STAGE**
- **Purpose**: FoundryVTT module development tools.  We want to have a place that makes it easier for me to integrate the tool suite here to my foundry vtt campaign.  The main goal of this tool is to allow import/export to foundry. 
- **Features**: Basic structure for module development
- **Tech Stack**: JavaScript
- **Status**: Early stage
- **Next**: Module management interface

### **🎲 Dice Calculator** 📋 **PLANNED** -- This is actually doNE~
- **Purpose**: Complex dice expressions and probability calculations
- **Features**: 3d6+2, advantage/disadvantage, damage calculations
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 2
- **Timeline**: Weeks 5-7

### **🏘️ Settlement Generator** 📋 **PLANNED** - medium priority
- **Purpose**: AI-powered town and settlement generation.  We want to have complex, clearly defined parameters for the AI response so that we receive very refined output from it that doesn't suck.  Establish template prompts and somehow allow current campaign state as context.  
- **Features**: Population, demographics, NPCs, economics
- **Tech Stack**: React + TypeScript + AI integration
- **Status**: Planned for Phase 2
- **Timeline**: Weeks 8-10

### **🏰 Dungeon Generator** 📋 **PLANNED** - medium priority
- **Purpose**: DMG 2024 dungeon generation.  Phase 1 is text descriptions for each room.  Possible workflow:  create a python program to do an initial generation, then present that to AI to refine the idea, eliminate inconsistencies or things that don't make sense, generate a complete text description of dungeon, earch room and how they connect.  Phase 2:  Integrate actual dungeon map generation. 
- **Features**: Room descriptions, encounters, treasure placement via LootFactory -- allow user input of parameters to refine initial generation, including adding specific monsters. 
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 3
- **Timeline**: Weeks 13-15

### ** Merchant Generator** 📋 **PLANNED** - Low Priority
- **Purpose**: Dynamic shop and merchant generation. need this to have extreme foundry integration for it to be useful.  
- **Features**: Inventories, pricing, NPC personalities
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 3
- **Timeline**: Weeks 16-18

### **⚔️ Magic Weapon Generator** 📋 **PLANNED**
- **Purpose**: Custom magic weapon creation
- **Features**: Balance testing, rarity guidance
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 3
- **Timeline**: Weeks 19-20

### **🏃 Chase Scene Manager** 📋 **PLANNED**
- **Purpose**: Dynamic chase encounter generation.  Hazards need to be based on specific environments.  Varied methods of victory over each hazard, for instance, if 6 hazards are generated, they shouldn't all be won using the same skill check.  we want variation there.  
- **Features**: Environmental hazards, NPC tactics, real-time tracking
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 4
- **Timeline**: Weeks 21-22

### **💎 Wealth & Magic Item Tracker** 📋 **PLANNED** - high priority
- **Purpose**: Party wealth progression and magic item tracking.  This should be fairly simple.  The main goal here is to import current status of each character's inventory from foundry vtt and compare it against the official D&D rules for how much wealth and magic items they should have at their current level.  
- **Features**: DMG 2024 wealth curves, distribution tracking
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 4
- **Timeline**: Weeks 23-24

### **🏆 Renown Tracker** 📋 **PLANNED** - high priority
- **Purpose**: Faction reputation and political relationship management.  I want easy input.  I have a table tracking this already in google sheets and coda.io.  coda.io should be the main integration here.  
- **Features**: Reputation tracking, rewards, story impact
- **Tech Stack**: React + TypeScript
- **Status**: Planned for Phase 4
- **Timeline**: Weeks 25-26

### **🧑‍🎤 Player Dashboard** 📋 **PLANNED** - medium priority
- **Purpose**: Provide each player with a personalized web page displaying party status and comprehensive details for their character.
- **Features**: Quests, character sheet, inventory, health, conditions, goals, and more—imported directly from FoundryVTT.
- **Tech Stack**: React + TypeScript + FoundryVTT integration
- **Status**: Planned for Phase 4
- **Timeline**: Weeks 27-28

---

## 📈 **Success Metrics**

### **User Engagement**
- Monthly active DMs using the platform -
- Average session length per tool
- Cross-tool navigation frequency
- User retention rates

### **Technical Health**
- Application uptime (target: 99.9%)
- Page load times (target: <2s)
- API response times (target: <500ms)
- Error rates (target: <0.1%)

### **Content Quality**
- Magic item generation accuracy vs DMG 2024
- User satisfaction with generated content
- Bug reports and resolution time
- Feature request fulfillment rate

### **Phase 2 Goals**
- **LootFactory**: Source filtering + campaign features
- **Name Generator**: Web interface launch
- **Architecture**: Shared component library
- **UX**: Seamless cross-tool navigation

### **Phase 3 Goals**
- **Map Tools**: Web interface completion
- **Foundry Tools**: Module management system
- **Integration**: Full cross-tool data sharing
- **Performance**: <2s load times across all tools

### **Phase 4 Goals**
- **AI Features**: Smart DM assistance
- **User Base**: 100+ active DMs
- **Feature Completion**: 90% of planned features
- **Community**: Active contributor base

---

## 🤝 **Community & Ecosystem**

### **Open Source Strategy**
- [ ] Contributor guidelines and code of conduct
- [ ] Plugin/extension architecture
- [ ] Community tool submissions
- [ ] Regular community feedback sessions

### **Content Partnerships**
- [ ] Third-party source book integration
- [ ] Community content creators collaboration
- [ ] Educational institution partnerships
- [ ] Gaming convention presence


## 🏛️ **Long-term Vision**

**DMDashboard aims to become the premier open-source toolkit for D&D 5e Dungeon Masters, offering:**

- **🏛️ Professional-grade tools** with official D&D rule compliance
- **🔗 Seamless integration** between campaign management tools
- **🎨 Beautiful, accessible design** following modern UX principles
- **🚀 Extensible architecture** for community contributions
- **📱 Multi-platform support** for desktop and mobile
- **🤝 Open-source community** of D&D developers and DMs

---

## 📋 **Project Management & GitHub Integration**

### **GitHub Projects Setup**

#### **Project URL**
https://github.com/users/xtratrestrial/projects/2

#### **Adding Issues to Project Board**

**Step-by-Step Process:**
1. **Go to**: https://github.com/users/xtratrestrial/projects/2
2. **Click**: "Add items" button (top right)
3. **Search by phase** and add issues:

**Phase-by-Phase Addition:**
- **Phase 1**: Search `repo:xtratrestrial/DMDashboard label:phase-1` (12 issues)
- **Phase 2**: Search `repo:xtratrestrial/DMDashboard label:phase-2` (13 issues)
- **Phase 3**: Search `repo:xtratrestrial/DMDashboard label:phase-3` (19 issues)
- **Phase 4**: Search `repo:xtratrestrial/DMDashboard label:phase-4` (24 issues)
- **Phase 5**: Search `repo:xtratrestrial/DMDashboard label:phase-5` (64 issues)

**Alternative Search Methods:**
- **By Component**: Search `lootfactory`, `dashboard`, `backend`
- **By Priority**: Search `priority-critical`, `priority-high`
- **By Type**: Search `feature`, `bug`, `documentation`

#### **Project Organization**
- **Drag issues** between Todo → In Progress → Done
- **Use Phase field** to filter by development phase
- **Use Priority field** to focus on critical items
- **Use Effort field** to plan your work

#### **Expected Results**
- **132 total issues** across 5 phases
- **Organized by Phase, Priority, and Effort** fields
- **Ready for professional project management workflow**

### **Linear Integration (Future)**

#### **Why Linear?**
- **Modern project management** designed for developers
- **Excellent GitHub integration** with automatic linking
- **Professional workflow** with customizable fields
- **Free tier** perfect for solo developers
- **API-first design** for automation

#### **Linear MCP Benefits**
- **Create issues** directly from code comments or errors
- **View issue details** without leaving your editor
- **Link commits/PRs** to Linear issues automatically
- **Track project progress** in your IDE
- **Get context** about what you're working on

#### **Setup Process**
1. **Create Linear account** at [linear.app](https://linear.app)
2. **Set up organization** for DMDashboard project
3. **Configure GitHub integration** for automatic linking
4. **Install Linear MCP** for Cursor integration
5. **Migrate from GitHub Projects** to Linear workflow

#### **Professional Workflow**
- **Issue-driven development** with clear acceptance criteria
- **Branch naming convention**: `feature/issue-123-description`
- **Commit message convention**: `feat: add feature (#123)`
- **Sprint planning** with 1-2 week cycles
- **Code review process** linked to Linear issues

---

**Current Focus**: LootFactory source filtering and campaign integration features  
**Next Major Milestone**: Name Generator web interface launch

**🎯 Ready to revolutionize D&D campaign management! ✨** 

## ⚖️ **Legal Compliance & Data Architecture**

### **🚨 CRITICAL: D&D Beyond Data Usage**
**Current Issue**: The project contains D&D Beyond data that is legal for personal use but **illegal for public distribution**.

#### **Legal Requirements:**
- ✅ **Personal Use**: Legal to use D&D Beyond data for personal projects
- ❌ **Public Distribution**: Illegal to provide copyrighted content to others
- ✅ **SRD 2024**: Legal to use and distribute SRD content publicly

#### **Solution: User-Driven Data Import**
**Architecture**: Users import their own D&D Beyond data through API integration

#### **Implementation Plan:**

##### **Phase 1: D&D Beyond API Integration** (Weeks 1-4)
- [ ] **OAuth Authentication**: Secure D&D Beyond account connection
- [ ] **Source Book Detection**: Identify user's purchased content
- [ ] **Data Import Pipeline**: Pull authorized content only
- [ ] **Local Caching**: Store imported data securely
- [ ] **Privacy Controls**: User controls over data sharing

##### **Phase 2: SRD Fallback System** (Weeks 5-6)
- [ ] **SRD 2024 Integration**: Use `2024SRD.txt` as default data source
- [ ] **Feature Parity**: Ensure SRD provides all essential functionality
- [ ] **Graceful Degradation**: Tools work with limited SRD data
- [ ] **Upgrade Prompts**: Guide users to import their D&D Beyond data

##### **Phase 3: Hybrid Data Architecture** (Weeks 7-8)
- [ ] **Data Source Priority**: D&D Beyond → SRD → Limited functionality
- [ ] **Content Filtering**: Show only user's authorized content
- [ ] **Feature Flags**: Enable/disable features based on available data
- [ ] **User Education**: Clear explanation of data sources and limitations

#### **Technical Implementation:**

##### **Data Source Management:**
```typescript
interface DataSource {
  type: 'dndbeyond' | 'srd2024' | 'limited';
  content: string[];
  features: string[];
  legalStatus: 'authorized' | 'public' | 'restricted';
}

interface UserDataAccess {
  dndbeyondConnected: boolean;
  purchasedContent: string[];
  srdAvailable: boolean;
  featureAccess: Record<string, boolean>;
}
```

##### **API Integration Points:**
- **D&D Beyond API**: Character sheets, source books, campaign data
- **SRD 2024**: Public domain content for all users
- **Local Storage**: User's imported data (encrypted)
- **Feature Detection**: Dynamic feature availability based on data

#### **User Experience Flow:**
1. **New User**: Starts with SRD 2024 data only
2. **D&D Beyond Connection**: Optional but recommended
3. **Content Import**: Automatic import of purchased content
4. **Feature Unlock**: Additional features based on available data
5. **Privacy Control**: User controls data sharing and storage

#### **Legal Compliance Checklist:**
- [ ] **No Copyrighted Content**: Never distribute D&D Beyond data
- [ ] **User Authentication**: Verify D&D Beyond account ownership
- [ ] **Data Encryption**: Secure storage of imported content
- [ ] **Terms of Service**: Clear user agreement about data usage
- [ ] **DMCA Compliance**: Process for content removal requests
- [ ] **Audit Trail**: Track data sources and usage

--- 