import { useDashboardState } from '../../hooks/useDashboardState';
import { useState } from 'react';
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

  // DC vs Bonus Calculator state
  const [bonus, setBonus] = useState<number>(5);
  const [dcRange, setDcRange] = useState<{ min: number; max: number }>({ min: 10, max: 20 });
  const [dcResults, setDcResults] = useState<Array<{ dc: number; probability: number }>>([]);

  const calculateDcProbabilities = () => {
    const results: Array<{ dc: number; probability: number }> = [];
    
    for (let dc = dcRange.min; dc <= dcRange.max; dc++) {
      // For a d20 roll, we need to roll >= (DC - bonus)
      const targetRoll = dc - bonus;
      
      if (targetRoll <= 1) {
        // Always succeed (except on natural 1 if using critical failure rules)
        results.push({ dc, probability: 0.95 }); // 95% success rate
      } else if (targetRoll >= 20) {
        // Always fail (except on natural 20 if using critical success rules)
        results.push({ dc, probability: 0.05 }); // 5% success rate
      } else {
        // Normal calculation: (21 - targetRoll) / 20
        const successCount = 21 - targetRoll;
        const probability = successCount / 20;
        results.push({ dc, probability });
      }
    }
    
    setDcResults(results);
  };

  const formatProbability = (probability: number): string => {
    return (probability * 100).toFixed(1) + '%';
  };

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
        {/* DC vs Bonus Calculator Panel - Moved to top */}
        <section className="dashboard-panel dc-calculator-panel">
          <h3 className="panel-title">🎯 DC vs Bonus Calculator</h3>
          <div className="dc-calculator-dashboard">
            <div className="dc-inputs">
              <div className="dc-input-group">
                <label htmlFor="bonus-input">Bonus:</label>
                <input
                  id="bonus-input"
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(parseInt(e.target.value) || 0)}
                  className="dc-input"
                  min="-10"
                  max="20"
                />
              </div>
              <div className="dc-input-group">
                <label htmlFor="dc-min">DC Range:</label>
                <div className="dc-range-inputs">
                  <input
                    id="dc-min"
                    type="number"
                    value={dcRange.min}
                    onChange={(e) => setDcRange({ ...dcRange, min: parseInt(e.target.value) || 0 })}
                    className="dc-input"
                    min="1"
                    max="30"
                  />
                  <span>to</span>
                  <input
                    id="dc-max"
                    type="number"
                    value={dcRange.max}
                    onChange={(e) => setDcRange({ ...dcRange, max: parseInt(e.target.value) || 0 })}
                    className="dc-input"
                    min="1"
                    max="30"
                  />
                </div>
              </div>
              <button 
                className="dc-calculate-btn" 
                onClick={calculateDcProbabilities}
              >
                Calculate
              </button>
            </div>
            
            {dcResults.length > 0 && (
              <div className="dc-results-dashboard">
                <h4>Success Probabilities</h4>
                <div className="dc-results-grid-dashboard">
                  {dcResults.map((result, index) => (
                    <div key={index} className="dc-result-item">
                      <div className="dc-value">DC {result.dc}</div>
                      <div className="dc-probability">{formatProbability(result.probability)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
