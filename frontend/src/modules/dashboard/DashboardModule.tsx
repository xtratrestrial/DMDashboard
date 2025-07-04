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
