import React, { useState, useEffect } from 'react';
import './App.css';
import DmSidebar from '../../shared/components/DmSidebar';
import { DM_DASHBOARD_CONFIG } from './components/DmDashboardConfig';
import type { DmSidebarConfig } from '../../shared/components/DmSidebarConfig';

// Types for campaign and party management
interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  currentHP: number;
  maxHP: number;
  armorClass: number;
  status: 'healthy' | 'injured' | 'unconscious' | 'dead';
}

interface Campaign {
  id: string;
  name: string;
  description: string;
  currentSession: number;
  currentLocation: string;
  lastPlayed: string;
  nextSession?: string;
}

interface SessionNote {
  id: string;
  timestamp: string;
  content: string;
  type: 'combat' | 'roleplay' | 'exploration' | 'treasure' | 'other';
}

function App() {
  // Campaign and party state
  const [currentCampaign, setCurrentCampaign] = useState<Campaign | null>(null);
  const [party, setParty] = useState<Character[]>([]);
  const [sessionNotes, setSessionNotes] = useState<SessionNote[]>([]);
  const [currentLocation, setCurrentLocation] = useState('Tavern');
  const [sessionNumber, setSessionNumber] = useState(1);
  
  // Sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarConfig, setSidebarConfig] = useState<DmSidebarConfig>(DM_DASHBOARD_CONFIG);

  // Load sample data on component mount
  useEffect(() => {
    loadSampleData();
  }, []);

  const loadSampleData = () => {
    // Sample campaign
    const sampleCampaign: Campaign = {
      id: 'campaign-1',
      name: 'The Lost Mine of Phandelver',
      description: 'A classic D&D adventure for new players and DMs',
      currentSession: 5,
      currentLocation: 'Cragmaw Hideout',
      lastPlayed: '2024-12-20',
      nextSession: '2024-12-27'
    };

    // Sample party
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
      {
        id: 'char-2',
        name: 'Elara Moonwhisper',
        class: 'Wizard',
        level: 3,
        currentHP: 18,
        maxHP: 18,
        armorClass: 13,
        status: 'healthy'
      },
      {
        id: 'char-3',
        name: 'Finn Lightfinger',
        class: 'Rogue',
        level: 3,
        currentHP: 15,
        maxHP: 21,
        armorClass: 14,
        status: 'injured'
      },
      {
        id: 'char-4',
        name: 'Sister Miriel',
        class: 'Cleric',
        level: 3,
        currentHP: 22,
        maxHP: 22,
        armorClass: 15,
        status: 'healthy'
      }
    ];

    // Sample session notes
    const sampleNotes: SessionNote[] = [
      {
        id: 'note-1',
        timestamp: '2024-12-20T19:30:00',
        content: 'Party encountered goblin ambush on the road',
        type: 'combat'
      },
      {
        id: 'note-2',
        timestamp: '2024-12-20T20:15:00',
        content: 'Found secret entrance to Cragmaw Hideout',
        type: 'exploration'
      },
      {
        id: 'note-3',
        timestamp: '2024-12-20T21:00:00',
        content: 'Negotiated with goblin chief - avoided major combat',
        type: 'roleplay'
      }
    ];

    setCurrentCampaign(sampleCampaign);
    setParty(sampleParty);
    setSessionNotes(sampleNotes);
    setCurrentLocation(sampleCampaign.currentLocation);
    setSessionNumber(sampleCampaign.currentSession);
  };

  const getHealthStatusColor = (character: Character) => {
    const hpPercentage = (character.currentHP / character.maxHP) * 100;
    if (hpPercentage >= 75) return 'health-good';
    if (hpPercentage >= 50) return 'health-fair';
    if (hpPercentage >= 25) return 'health-poor';
    return 'health-critical';
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

  // Sidebar callbacks
  const handleToolChange = (toolId: string) => {
    // Update the sidebar config to reflect the active tool
    setSidebarConfig(prev => ({
      ...prev,
      currentTool: toolId,
      tools: prev.tools.map(tool => ({
        ...tool,
        isActive: tool.id === toolId
      }))
    }));
    
    // Handle tool-specific navigation
    switch (toolId) {
      case 'dm-dashboard':
        // Already on dashboard - maybe scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'loot-factory':
        // Open LootFactory frontend in new tab
        window.open('http://localhost:5173', '_blank');
        break;
      case 'name-generator':
        // Name generator needs web frontend - coming soon
        alert('Name Generator web interface coming soon! Currently available as terminal tool.');
        break;
      case 'dice-calculator':
        alert('Dice Calculator coming soon!');
        break;
      case 'settlement-generator':
        alert('Settlement Generator coming soon!');
        break;
      case 'chase-manager':
        alert('Chase Manager coming soon!');
        break;
      case 'dungeon-generator':
        alert('Dungeon Generator coming soon!');
        break;
      case 'dndbeyond-sync':
        alert('D&D Beyond integration coming soon!');
        break;
      case 'foundry-sync':
        alert('FoundryVTT integration coming soon!');
        break;
      case 'coda-sync':
        alert('Coda.io integration coming soon!');
        break;
      default:
        console.log(`Tool ${toolId} not yet implemented`);
        alert(`${toolId} coming soon!`);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app-layout">
      {/* DM Dashboard Sidebar */}
      <DmSidebar 
        config={{
          ...sidebarConfig,
          onToolChange: handleToolChange
        }}
        isCollapsed={sidebarCollapsed}
        onCollapseToggle={handleSidebarToggle}
      />
      
      {/* Main Content Area */}
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
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
                <button 
                  className="tool-button loot-factory"
                  onClick={() => handleToolChange('loot-factory')}
                >
                  <span className="tool-icon">🎲</span>
                  <span className="tool-name">Loot Factory</span>
                  <span className="tool-desc">Generate Treasure</span>
                </button>
                
                <button 
                  className="tool-button name-generator"
                  onClick={() => handleToolChange('name-generator')}
                >
                  <span className="tool-icon">👤</span>
                  <span className="tool-name">Name Generator</span>
                  <span className="tool-desc">NPC & Location Names</span>
                </button>
                
                <button 
                  className="tool-button dice-calculator"
                  onClick={() => handleToolChange('dice-calculator')}
                >
                  <span className="tool-icon">🎯</span>
                  <span className="tool-name">Dice Calculator</span>
                  <span className="tool-desc">Complex Dice Math</span>
                </button>
                
                <button 
                  className="tool-button settlement-generator"
                  onClick={() => handleToolChange('settlement-generator')}
                >
                  <span className="tool-icon">🏘️</span>
                  <span className="tool-name">Settlement Generator</span>
                  <span className="tool-desc">Generate Towns</span>
                </button>
                
                <button 
                  className="tool-button chase-manager"
                  onClick={() => handleToolChange('chase-manager')}
                >
                  <span className="tool-icon">🏃</span>
                  <span className="tool-name">Chase Manager</span>
                  <span className="tool-desc">Manage Pursuits</span>
                </button>
                
                <button 
                  className="tool-button dungeon-generator"
                  onClick={() => handleToolChange('dungeon-generator')}
                >
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
                  <button 
                    className="integration-button"
                    onClick={() => handleToolChange('dndbeyond-sync')}
                  >
                    Configure
                  </button>
                </div>
                
                <div className="integration-item">
                  <span className="integration-icon">🎭</span>
                  <div className="integration-details">
                    <strong>FoundryVTT</strong>
                    <span className="status-badge planning">Planning</span>
                    <p>Export generated content to Foundry</p>
                  </div>
                  <button 
                    className="integration-button"
                    onClick={() => handleToolChange('foundry-sync')}
                  >
                    Configure
                  </button>
                </div>
                
                <div className="integration-item">
                  <span className="integration-icon">📋</span>
                  <div className="integration-details">
                    <strong>Coda.io</strong>
                    <span className="status-badge planning">Planning</span>
                    <p>Sync campaign notes and data</p>
                  </div>
                  <button 
                    className="integration-button"
                    onClick={() => handleToolChange('coda-sync')}
                  >
                    Configure
                  </button>
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

          {/* Footer */}
          <footer className="dashboard-footer">
            <p>DM Dashboard • Built for D&D 5e Campaign Management • Part of the DM Toolkit Ecosystem</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App; 