# DMDashboard Unified App Migration Plan

## 1. Project Structure Planning

**Goal:**  
Create a single frontend app (React + Vite) that contains all modules as routes/pages, with shared components and state.

**Proposed Structure:**

Migration Steps (High-Level)
Create a new unified frontend app (or refactor one of the existing ones as the base).
Move each module's UI into a subdirectory and set up routes for each.
Move shared code into a shared/ directory.
Update navigation/sidebar to use routes instead of external links.
Test and migrate backend APIs as needed (optionally merge backends too).
Update Docker setup to build and run a single frontend container.
Benefits
Consistent user experience (no more broken links or context loss).
Easier maintenance (one place to update shared UI, state, and logic).
Simpler deployment (one container, one port, one Nginx config, etc.).
Better integration (modules can share data and state easily).

## 2. Step-by-Step Migration Plan

### Step 1: Scaffold the Unified Frontend ✅ COMPLETED

#### 1.1 Create Project Directory ✅
```bash
# From DMDashboard root
mkdir frontend
cd frontend
```

#### 1.2 Initialize Vite + React + TypeScript Project ✅
```bash
# Create new Vite project with React and TypeScript
npm create vite@latest . -- --template react-ts
npm install
```

#### 1.3 Install Essential Dependencies ✅
```bash
# Routing
npm install react-router-dom

# State management (choose one)
npm install zustand  # Lightweight state management
# OR
npm install @reduxjs/toolkit react-redux  # Redux Toolkit

# UI utilities
npm install clsx  # Conditional className utility
npm install lucide-react  # Icon library

# Development dependencies
npm install -D @types/node
```

#### 1.4 Configure TypeScript Paths ✅
Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/shared/*": ["src/shared/*"],
      "@/modules/*": ["src/modules/*"]
    }
  }
}
```

#### 1.5 Configure Vite Aliases ✅
Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/modules': path.resolve(__dirname, './src/modules')
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
```

#### 1.6 Create Directory Structure ✅
```bash
mkdir -p src/{modules,shared,components,hooks,utils,types}
mkdir -p src/modules/{dashboard,lootfactory}
mkdir -p src/shared/{components,hooks,utils,types}
```

#### 1.7 Set Up Basic Router Structure ✅
Create `src/App.tsx`:
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DmSidebar } from '@/shared/components/DmSidebar'
import { useSidebarConfig } from '@/shared/hooks/useSidebarConfig'

function App() {
  const sidebarConfig = useSidebarConfig()

  return (
    <Router>
      <div className="app-layout">
        <DmSidebar config={sidebarConfig} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<div>Welcome to DM Dashboard</div>} />
            <Route path="/dashboard" element={<div>DM Dashboard Module</div>} />
            <Route path="/lootfactory" element={<div>LootFactory Module</div>} />
            <Route path="*" element={<div>404 - Module not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
```

#### 1.8 Create Basic Sidebar Hook ✅
Create `src/shared/hooks/useSidebarConfig.ts`:
```typescript
import { useState } from 'react'
import type { DmSidebarConfig } from '@/shared/types/sidebar'

export function useSidebarConfig(): DmSidebarConfig {
  const [currentTool, setCurrentTool] = useState('dashboard')

  return {
    projectName: "DM Dashboard",
    projectVersion: "2.0.0",
    currentTool,
    tools: [
      {
        id: "dashboard",
        name: "DM Dashboard",
        icon: "",
        isActive: currentTool === 'dashboard',
        isAvailable: true,
        description: "Main dashboard for campaign management"
      },
      {
        id: "lootfactory",
        name: "LootFactory",
        icon: "",
        isActive: currentTool === 'lootfactory',
        isAvailable: true,
        description: "Generate D&D 5e treasure using DMG 2024 methodology"
      }
    ],
    onToolChange: setCurrentTool
  }
}
```

#### 1.9 Set Up Basic Styling ✅
Create `src/index.css`:
```css
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: #1a1a1a;
  color: #ffffff;
}

.app-layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
}
```

#### 1.10 Create Package.json Scripts ✅
Update `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

#### 1.11 Test Basic Setup
```bash
npm run dev
# Should start on http://localhost:3000
# Verify routing works between /dashboard and /lootfactory
```

#### 1.12 Create Initial Module Placeholders
Create `src/modules/dashboard/DashboardModule.tsx`:
```typescript
export function DashboardModule() {
  return (
    <div className="dashboard-module">
      <h1>DM Dashboard</h1>
      <p>Campaign management hub coming soon...</p>
    </div>
  )
}
```

Create `src/modules/lootfactory/LootFactoryModule.tsx`:
```typescript
export function LootFactoryModule() {
  return (
    <div className="lootfactory-module">
      <h1>LootFactory</h1>
      <p>Treasure generation coming soon...</p>
    </div>
  )
}
```

#### 1.13 Update App.tsx with Module Components
```typescript
import { DashboardModule } from '@/modules/dashboard/DashboardModule'
import { LootFactoryModule } from '@/modules/lootfactory/LootFactoryModule'

// In Routes:
<Route path="/dashboard" element={<DashboardModule />} />
<Route path="/lootfactory" element={<LootFactoryModule />} />
```

#### 1.14 Create .gitignore
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Production
dist/
build/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

#### 1.15 Verification Checklist
- [ ] Project starts without errors
- [ ] Routing works between /dashboard and /lootfactory
- [ ] Sidebar navigation updates correctly
- [ ] TypeScript compilation succeeds
- [ ] Path aliases work (@/, @/shared, @/modules)
- [ ] Hot reload works during development

---

### Step 2: Migrate DM Dashboard Content ⏳ IN PROGRESS

**Goal:** Migrate the actual DM Dashboard functionality from the legacy `dm-dashboard/` project into the unified frontend, replacing the placeholder modules with real working components.

#### 2.1 Analyze Legacy DM Dashboard Structure ✅
```bash
# Review the legacy DM Dashboard structure
ls -la dm-dashboard/src/
# Key files to migrate:
# - App.tsx (main dashboard UI)
# - App.css (dashboard styling)
# - components/DmDashboardConfig.ts (already migrated)
```

#### 2.2 Migrate DM Dashboard Types and Interfaces
Create `frontend/src/types/dashboard.ts`:
```typescript
// Campaign and party management types
export interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  currentHP: number;
  maxHP: number;
  armorClass: number;
  status: 'healthy' | 'injured' | 'unconscious' | 'dead';
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  currentSession: number;
  currentLocation: string;
  lastPlayed: string;
  nextSession?: string;
}

export interface SessionNote {
  id: string;
  timestamp: string;
  content: string;
  type: 'combat' | 'roleplay' | 'exploration' | 'treasure' | 'other';
}
```

#### 2.3 Create Dashboard State Management
Create `frontend/src/hooks/useDashboardState.ts`:
```typescript
import { useState, useEffect } from 'react';
import type { Character, Campaign, SessionNote } from '../types/dashboard';

export function useDashboardState() {
  const [currentCampaign, setCurrentCampaign] = useState<Campaign | null>(null);
  const [party, setParty] = useState<Character[]>([]);
  const [sessionNotes, setSessionNotes] = useState<SessionNote[]>([]);
  const [currentLocation, setCurrentLocation] = useState('Tavern');
  const [sessionNumber, setSessionNumber] = useState(1);

  // Load sample data on component mount
  useEffect(() => {
    loadSampleData();
  }, []);

  const loadSampleData = () => {
    // Sample campaign data (from legacy dm-dashboard)
    const sampleCampaign: Campaign = {
      id: 'campaign-1',
      name: 'The Lost Mine of Phandelver',
      description: 'A classic D&D adventure for new players and DMs',
      currentSession: 5,
      currentLocation: 'Cragmaw Hideout',
      lastPlayed: '2024-12-20',
      nextSession: '2024-12-27'
    };

    // Sample party data
    const sampleParty: Character[] = [
      {
        id: 'char-1',
        name: 'Thorin Ironforge',
        class: 'Fighter',
        level: 3,
        currentHP: 24,
        maxHP: 28,
        armorClass: 16,
        status: 'injured'
      },
      // ... more characters
    ];

    // Sample session notes
    const sampleNotes: SessionNote[] = [
      {
        id: 'note-1',
        timestamp: '2024-12-20T19:30:00',
        content: 'Party encountered goblin ambush on the road',
        type: 'combat'
      },
      // ... more notes
    ];

    setCurrentCampaign(sampleCampaign);
    setParty(sampleParty);
    setSessionNotes(sampleNotes);
    setCurrentLocation(sampleCampaign.currentLocation);
    setSessionNumber(sampleCampaign.currentSession);
  };

  const addSessionNote = (content: string, type: SessionNote['type']) => {
    const newNote: SessionNote = {
      id: `note-${Date.now()}`,
      timestamp: new Date().toISOString(),
      content,
      type
    };
    setSessionNotes([newNote, ...sessionNotes]);
  };

  const getHealthStatusColor = (character: Character) => {
    const hpPercentage = (character.currentHP / character.maxHP) * 100;
    if (hpPercentage >= 75) return 'health-good';
    if (hpPercentage >= 50) return 'health-fair';
    if (hpPercentage >= 25) return 'health-poor';
    return 'health-critical';
  };

  return {
    currentCampaign,
    party,
    sessionNotes,
    currentLocation,
    sessionNumber,
    setCurrentLocation,
    setSessionNumber,
    addSessionNote,
    getHealthStatusColor
  };
}
```

#### 2.4 Migrate Dashboard CSS Styles
Create `frontend/src/modules/dashboard/DashboardModule.css`:
```css
/* Dashboard-specific styles migrated from legacy App.css */
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
}

.fantasy-heading {
  font-size: 3rem;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
}

.fantasy-subheading {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
}

.campaign-status {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.campaign-name {
  color: #ffd700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.campaign-details {
  color: #ccc;
  font-size: 1rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.dashboard-panel {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-title {
  color: #ffd700;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Party Status Panel */
.party-grid {
  display: grid;
  gap: 1rem;
}

.character-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 1rem;
  border-left: 4px solid #4CAF50;
}

.character-card.health-poor {
  border-left-color: #FF9800;
}

.character-card.health-critical {
  border-left-color: #f44336;
}

.character-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.character-name {
  color: #fff;
  font-weight: bold;
}

.character-class {
  color: #ccc;
  font-size: 0.9rem;
}

.character-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hp-bar {
  flex: 1;
  margin-right: 1rem;
}

.hp-text {
  display: block;
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.hp-bar-bg {
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.hp-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s ease;
}

.ac-display {
  color: #ffd700;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Session Notes Panel */
.notes-container {
  max-height: 400px;
  overflow-y: auto;
}

.add-note {
  margin-bottom: 1rem;
}

.note-input {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
}

.note-input::placeholder {
  color: #ccc;
}

.note-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #666;
}

.note-item.note-combat {
  border-left-color: #f44336;
}

.note-item.note-roleplay {
  border-left-color: #2196F3;
}

.note-item.note-exploration {
  border-left-color: #4CAF50;
}

.note-item.note-treasure {
  border-left-color: #FF9800;
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.note-type {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  color: #ccc;
  text-transform: uppercase;
}

.note-time {
  color: #999;
  font-size: 0.8rem;
}

.note-content {
  color: #fff;
  line-height: 1.4;
}

/* Quick Tools Panel */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.tool-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
}

.tool-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.tool-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.tool-name {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.tool-desc {
  display: block;
  font-size: 0.8rem;
  color: #ccc;
}

/* Integration Status Panel */
.integration-status {
  display: grid;
  gap: 1rem;
}

.integration-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
}

.integration-icon {
  font-size: 1.5rem;
}

.integration-details {
  flex: 1;
}

.integration-details strong {
  display: block;
  color: #fff;
  margin-bottom: 0.25rem;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}

.status-badge.planning {
  background: #FF9800;
  color: #000;
}

.integration-details p {
  color: #ccc;
  font-size: 0.9rem;
  margin: 0;
}

.integration-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
}

.integration-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Campaign Overview Panel */
.campaign-overview {
  display: grid;
  gap: 1rem;
}

.campaign-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.campaign-detail:last-child {
  border-bottom: none;
}

.campaign-detail strong {
  color: #ffd700;
}

.location-input,
.session-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.5rem;
  color: #fff;
  font-size: 0.9rem;
}

.next-session {
  color: #ccc;
}

.campaign-description {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.campaign-description p {
  color: #ccc;
  line-height: 1.5;
  margin: 0;
}
```

#### 2.5 Update DashboardModule Component
Replace `frontend/src/modules/dashboard/DashboardModule.tsx`:
```typescript
import { useDashboardState } from '../../hooks/useDashboardState';
import './DashboardModule.css';

export function DashboardModule() {
  const {
    currentCampaign,
    party,
    sessionNotes,
    currentLocation,
    sessionNumber,
    setCurrentLocation,
    setSessionNumber,
    addSessionNote,
    getHealthStatusColor
  } = useDashboardState();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="fantasy-heading">DM Dashboard</h1>
        <p className="fantasy-subheading">Campaign Management Hub</p>
        
        {/* Campaign Status */}
        {currentCampaign && (
          <div className="campaign-status">
            <div className="campaign-info">
              <h2 className="campaign-name">{currentCampaign.name}</h2>
              <p className="campaign-details">
                Session {sessionNumber} • {currentLocation} • Last played: {currentCampaign.lastPlayed}
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Party Status Panel */}
        <section className="dashboard-panel party-panel">
          <h3 className="panel-title">🛡️ Party Status</h3>
          <div className="party-grid">
            {party.map(character => (
              <div key={character.id} className={`character-card ${getHealthStatusColor(character)}`}>
                <div className="character-header">
                  <h4 className="character-name">{character.name}</h4>
                  <span className="character-class">{character.class} {character.level}</span>
                </div>
                <div className="character-stats">
                  <div className="hp-bar">
                    <span className="hp-text">{character.currentHP}/{character.maxHP} HP</span>
                    <div className="hp-bar-bg">
                      <div 
                        className="hp-bar-fill" 
                        style={{ width: `${(character.currentHP / character.maxHP) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ac-display">AC {character.armorClass}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Session Notes Panel */}
        <section className="dashboard-panel notes-panel">
          <h3 className="panel-title">📝 Session Notes</h3>
          <div className="notes-container">
            <div className="add-note">
              <input 
                type="text" 
                placeholder="Add a session note..." 
                className="note-input"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    addSessionNote(e.currentTarget.value.trim(), 'other');
                    e.currentTarget.value = '';
                  }
                }}
              />
            </div>
            <div className="notes-list">
              {sessionNotes.map(note => (
                <div key={note.id} className={`note-item note-${note.type}`}>
                  <div className="note-header">
                    <span className="note-type">{note.type}</span>
                    <span className="note-time">
                      {new Date(note.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="note-content">{note.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tools Panel */}
        <section className="dashboard-panel tools-panel">
          <h3 className="panel-title">⚔️ Quick Tools</h3>
          <div className="tools-grid">
            <button className="tool-button loot-factory">
              <span className="tool-icon">🎲</span>
              <span className="tool-name">Loot Factory</span>
              <span className="tool-desc">Generate Treasure</span>
            </button>
            
            <button className="tool-button name-generator">
              <span className="tool-icon">👤</span>
              <span className="tool-name">Name Generator</span>
              <span className="tool-desc">NPC & Location Names</span>
            </button>
            
            <button className="tool-button dice-calculator">
              <span className="tool-icon">🎯</span>
              <span className="tool-name">Dice Calculator</span>
              <span className="tool-desc">Complex Dice Math</span>
            </button>
            
            <button className="tool-button settlement-generator">
              <span className="tool-icon">🏘️</span>
              <span className="tool-name">Settlement Generator</span>
              <span className="tool-desc">Generate Towns</span>
            </button>
            
            <button className="tool-button chase-manager">
              <span className="tool-icon">🏃</span>
              <span className="tool-name">Chase Manager</span>
              <span className="tool-desc">Manage Pursuits</span>
            </button>
            
            <button className="tool-button dungeon-generator">
              <span className="tool-icon">🏰</span>
              <span className="tool-name">Dungeon Generator</span>
              <span className="tool-desc">Generate Dungeons</span>
            </button>
          </div>
        </section>

        {/* Integration Status Panel */}
        <section className="dashboard-panel integration-panel">
          <h3 className="panel-title">🔗 Integration Status</h3>
          <div className="integration-status">
            <div className="integration-item">
              <span className="integration-icon">🔗</span>
              <div className="integration-details">
                <strong>D&D Beyond</strong>
                <span className="status-badge planning">Planning</span>
                <p>Campaign: The Lost Mine of Phandelver</p>
              </div>
              <button className="integration-button">Configure</button>
            </div>
            
            <div className="integration-item">
              <span className="integration-icon">🎭</span>
              <div className="integration-details">
                <strong>FoundryVTT</strong>
                <span className="status-badge planning">Planning</span>
                <p>Export generated content to Foundry</p>
              </div>
              <button className="integration-button">Configure</button>
            </div>
            
            <div className="integration-item">
              <span className="integration-icon">📋</span>
              <div className="integration-details">
                <strong>Coda.io</strong>
                <span className="status-badge planning">Planning</span>
                <p>Sync campaign notes and data</p>
              </div>
              <button className="integration-button">Configure</button>
            </div>
          </div>
        </section>

        {/* Campaign Info Panel */}
        <section className="dashboard-panel campaign-panel">
          <h3 className="panel-title">🗺️ Campaign Overview</h3>
          {currentCampaign && (
            <div className="campaign-overview">
              <div className="campaign-detail">
                <strong>Current Location:</strong>
                <input 
                  type="text" 
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  className="location-input"
                />
              </div>
              <div className="campaign-detail">
                <strong>Session Number:</strong>
                <input 
                  type="number" 
                  value={sessionNumber}
                  onChange={(e) => setSessionNumber(parseInt(e.target.value) || 1)}
                  className="session-input"
                />
              </div>
              <div className="campaign-detail">
                <strong>Next Session:</strong>
                <span className="next-session">{currentCampaign.nextSession || 'TBD'}</span>
              </div>
              <div className="campaign-description">
                <p>{currentCampaign.description}</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
```

#### 2.6 Update App.tsx Navigation
Update `frontend/src/App.tsx` to handle sidebar navigation:
```typescript
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { DmSidebar } from './shared/components/DmSidebar'
import { DM_DASHBOARD_CONFIG, type DmSidebarConfig } from './shared/components/DmSidebarConfig'
import { DashboardModule } from './modules/dashboard/DashboardModule'
import { LootFactoryModule } from './modules/lootfactory/LootFactoryModule'
import { useState, useEffect } from 'react'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarConfig, setSidebarConfig] = useState<DmSidebarConfig>(DM_DASHBOARD_CONFIG)

  const handleToolChange = (toolId: string) => {
    setSidebarConfig((prev: DmSidebarConfig) => ({
      ...prev,
      currentTool: toolId,
      tools: prev.tools.map((tool) => ({
        ...tool,
        isActive: tool.id === toolId
      }))
    }))
  }

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <Router>
      <div className="app-layout">
        <DmSidebar 
          config={{
            ...sidebarConfig,
            onToolChange: handleToolChange
          }}
          isCollapsed={sidebarCollapsed}
          onCollapseToggle={handleSidebarToggle}
        />
        <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <Routes>
            <Route path="/" element={<DashboardModule />} />
            <Route path="/dashboard" element={<DashboardModule />} />
            <Route path="/lootfactory" element={<LootFactoryModule />} />
            <Route path="*" element={<div>404 - Module not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
```

#### 2.7 Test Dashboard Functionality
```bash
# Verify the dashboard loads with all panels
# Test session note addition
# Test character health status display
# Test campaign info editing
# Test sidebar navigation between modules
```

#### 2.8 Verification Checklist
- [ ] Dashboard loads with full UI (party status, session notes, tools, integrations)
- [ ] Sample data displays correctly
- [ ] Session notes can be added via Enter key
- [ ] Character health bars show correct percentages
- [ ] Campaign location and session number can be edited
- [ ] All CSS styles are applied correctly
- [ ] Sidebar navigation updates active state
- [ ] No TypeScript compilation errors
- [ ] Hot reload works during development

---

### Step 3: Migrate Module UIs

- For each module (LootFactory, DM Dashboard):
  - Move the React UI code into `frontend/src/modules/{module}/`.
  - Refactor each module's entry point to be a routed page/component.
  - Remove any duplicate/shared code now in `src/shared/`.

### Step 4: Implement Unified Navigation

- Use a single sidebar/navigation component from `src/shared/`.
- Sidebar links should use React Router routes (not external URLs).
- Ensure module switching is instant and stateful.

### Step 5: Integrate State and Auth

- Set up a global state provider (e.g., React Context, Redux, Zustand) for user/session/campaign data.
- Ensure all modules can access shared state.

### Step 6: Backend API Integration

- Update API calls in each module to point to the correct backend endpoints.
- Optionally, merge backends into a single API (can be done later).

### Step 7: Docker & Deployment

- Create a new Dockerfile for the unified frontend.
- Update `docker-compose.yml` to build and run a single frontend container.
- Expose one port (e.g., 3000 or 80) for the unified app.

### Step 8: Testing & Cleanup

- Test all modules in the unified app.
- Remove old frontend containers/configs once migration is complete.
- Update documentation and onboarding instructions.

## 3. Optional: Backend Unification

- If desired, merge LootFactory and DM Dashboard backends into a single API service.
- Update frontend API calls accordingly.
- Simplify Docker setup further.

## 4. Benefits

- **Consistent user experience:** No more broken links or context loss.
- **Easier maintenance:** One place to update shared UI, state, and logic.
- **Simpler deployment:** One container, one port, one Nginx config, etc.
- **Better integration:** Modules can share data and state easily.

## 5. Next Steps

1. **Confirm the plan and directory structure.**
2. **Scaffold the new unified frontend app.**
3. **Move shared code and one module as a proof of concept.**
4. **Iterate module-by-module, testing as you go.**