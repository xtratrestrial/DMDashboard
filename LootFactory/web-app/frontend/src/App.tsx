import { useState, useEffect } from 'react';
import './App.css';
import DmSidebar from '@shared/components/DmSidebar';
import { LOOT_FACTORY_CONFIG } from '@shared/components/DmSidebarConfig';
import type { DmSidebarConfig } from '@shared/components/DmSidebarConfig';
import { config } from './config';

// Types for API responses
interface MagicItem {
  name: string;
  rarity: string;
  description?: string;
  value?: number;
  source: string;
}

interface GeneratedTreasure {
  coins?: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  gems?: Array<{
    name: string;
    value: number;
    quantity: number;
  }>;
  art_objects?: Array<{
    name: string;
    value: number;
    quantity: number;
  }>;
  magic_items?: MagicItem[];
  total_value: number;
  generation_method: string;
}

interface ApiResponse {
  success: boolean;
  treasure: GeneratedTreasure;
  generation_timestamp: string;
}

interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'error';
  timestamp: number;
}

// API Base URL from config (handles dev vs prod)
const API_BASE_URL = config.apiBaseUrl;

// Random taglines array
const RANDOM_TAGLINES = [
  "french fried taters, mmhhmmm",
  "I'm going to kill you.",
  "Your parents never loved you.",
  "Don't turn around.",
  "There's a tiny, lifeless baby inside of all of us.",
  "Render unto John Malkovich that which is John Malkovich's",
  "Love is a particle",
  "Walk into the light.",
  "I can smell you from here.",
  "Can you smell that?",
  "I don't wanna die, paw.",
  "I'm scared, paw."
];

function App() {
  // Constants
  const ALL_SOURCE_BOOKS = ['dmg-2024', 'tasha', 'eberron', 'fizban', 'spelljammer', 'planescape'];
  
  const [generatedTreasure, setGeneratedTreasure] = useState<GeneratedTreasure | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [challengeRating, setChallengeRating] = useState(5);
  const [partyLevel, setPartyLevel] = useState(5);
  const [generationType, setGenerationType] = useState<'individual' | 'hoard'>('individual');
  const [includeMundane, setIncludeMundane] = useState(true);
  const [includeMagic, setIncludeMagic] = useState(true);
  const [sourceBooks, setSourceBooks] = useState<string[]>(['dmg-2024']); // Default to DMG 2024
  const [apiStatus, setApiStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [currentTagline, setCurrentTagline] = useState('');
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  
  // Sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarConfig, setSidebarConfig] = useState<DmSidebarConfig>(LOOT_FACTORY_CONFIG);

  // Function to get random tagline
  const getRandomTagline = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_TAGLINES.length);
    return RANDOM_TAGLINES[randomIndex];
  };

  // Toast notification functions
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastNotification = {
      id,
      message,
      type,
      timestamp: Date.now()
    };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Check API health on component mount and set initial tagline
  useEffect(() => {
    checkApiHealth();
    setCurrentTagline(getRandomTagline());
  }, []);

  const checkApiHealth = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (response.ok) {
        setApiStatus('connected');
      } else {
        setApiStatus('error');
      }
    } catch (error) {
      setApiStatus('error');
    }
  };

  const generateLoot = async () => {
    setIsGenerating(true);
    
    // Get a new random tagline when generating treasure
    setCurrentTagline(getRandomTagline());
    
    try {
      const requestBody = {
        challenge_rating: challengeRating,
        party_level: partyLevel,
        generation_type: generationType,
        include_mundane: includeMundane,
        include_magic: includeMagic,
        source_books: sourceBooks
      };

      const response = await fetch(`${API_BASE_URL}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to generate treasure');
      }

      const data: ApiResponse = await response.json();
      setGeneratedTreasure(data.treasure);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('generated-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
    } catch (error) {
      console.error('Error generating treasure:', error);
      alert('Failed to generate treasure. Please check that the backend server is running.');
    } finally {
      setIsGenerating(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString();
  };

  const getRarityBadgeClass = (rarity: string) => {
    const rarityMap: Record<string, string> = {
      'common': 'rarity-common',
      'uncommon': 'rarity-uncommon', 
      'rare': 'rarity-rare',
      'very-rare': 'rarity-very-rare',
      'legendary': 'rarity-legendary'
    };
    return rarityMap[rarity] || 'rarity-common';
  };

  const formatRarityDisplay = (rarity: string) => {
    return rarity.replace('-', ' ').toUpperCase();
  };

  // Source books toggle function
  const toggleAllSourceBooks = () => {
    if (sourceBooks.length === ALL_SOURCE_BOOKS.length) {
      // All are selected, deselect all
      setSourceBooks([]);
    } else {
      // Some or none are selected, select all
      setSourceBooks([...ALL_SOURCE_BOOKS]);
    }
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
    
    // Handle tool-specific logic
    if (toolId === 'loot-factory') {
      // Already on loot factory - maybe scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Future: Handle other tools
      showToast(`${toolId} feature coming soon!`, 'success');
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
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1 className="fantasy-heading">Loot Factory</h1>
            <p className="fantasy-subheading">D&D 5e Magical & Mundane Treasure Generator</p>
            <p className="subtitle">
              Following official DMG 2024 methodology • 629+ Magic Items • Coins, Gems & Art Objects
            </p>
            
            {/* Random Tagline */}
            <p className="random-tagline">
              {currentTagline}
            </p>
            
            {/* API Status Indicator */}
            <div className="api-status">
              {apiStatus === 'checking' && <span>🔄 Checking API...</span>}
              {apiStatus === 'connected' && <span>✅ API Connected</span>}
              {apiStatus === 'error' && <span>❌ API Offline - Start backend server</span>}
            </div>

            {/* Generation Controls */}
            <div className="generation-controls">
              <div className="control-group">
                <label htmlFor="challenge-rating">Challenge Rating:</label>
                <select
                  id="challenge-rating"
                  value={challengeRating}
                  onChange={(e) => setChallengeRating(parseInt(e.target.value))}
                  className="control-select"
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="party-level">Party Level:</label>
                <select
                  id="party-level"
                  value={partyLevel}
                  onChange={(e) => setPartyLevel(parseInt(e.target.value))}
                  className="control-select"
                >
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="generation-type">Generation Type:</label>
                <select
                  id="generation-type"
                  value={generationType}
                  onChange={(e) => setGenerationType(e.target.value as 'individual' | 'hoard')}
                  className="control-select"
                >
                  <option value="individual">Individual Treasure</option>
                  <option value="hoard">Treasure Hoard</option>
                </select>
              </div>

              <div className="control-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={includeMundane}
                    onChange={(e) => setIncludeMundane(e.target.checked)}
                  />
                  Include Mundane Treasure (Coins, Gems, Art)
                </label>
              </div>

              <div className="control-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={includeMagic}
                    onChange={(e) => setIncludeMagic(e.target.checked)}
                  />
                  Include Magic Items
                </label>
              </div>

              <div className="control-group">
                <div className="source-books-header">
                  <label>Source Books:</label>
                  <button
                    type="button"
                    onClick={toggleAllSourceBooks}
                    className="toggle-all-btn"
                  >
                    {sourceBooks.length === ALL_SOURCE_BOOKS.length ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <div className="checkbox-group source-books">
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('dmg-2024')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'dmg-2024']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'dmg-2024'));
                        }
                      }}
                    />
                    <span>DMG 2024</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('tasha')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'tasha']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'tasha'));
                        }
                      }}
                    />
                    <span>Tasha's Cauldron</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('eberron')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'eberron']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'eberron'));
                        }
                      }}
                    />
                    <span>Eberron</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('fizban')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'fizban']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'fizban'));
                        }
                      }}
                    />
                    <span>Fizban's Treasury</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('spelljammer')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'spelljammer']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'spelljammer'));
                        }
                      }}
                    />
                    <span>Spelljammer</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={sourceBooks.includes('planescape')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSourceBooks([...sourceBooks, 'planescape']);
                        } else {
                          setSourceBooks(sourceBooks.filter(book => book !== 'planescape'));
                        }
                      }}
                    />
                    <span>Planescape</span>
                  </label>
                </div>
              </div>
            </div>

            <button 
              className="btn-primary" 
              onClick={generateLoot}
              disabled={isGenerating || apiStatus !== 'connected'}
            >
              {isGenerating ? '🎲 Generating...' : '⚔️ Generate Treasure'}
            </button>
          </header>

          {/* Generated Treasure Section */}
          {generatedTreasure && (
            <div id="generated-section" className="generated-section">
              <h2 className="fantasy-subheading section-title">
                Freshly Generated Treasure
              </h2>
              <p className="generation-info">
                ✨ {generatedTreasure.generation_method} • Total Value: {formatCurrency(generatedTreasure.total_value)} GP ✨
              </p>

              {/* Mundane Treasure */}
              {generatedTreasure.coins && (
                <div className="treasure-section">
                  <h3 className="treasure-section-title">💰 Coins</h3>
                  <div className="coins-display">
                    {generatedTreasure.coins.cp > 0 && <span className="coin-amount">{formatCurrency(generatedTreasure.coins.cp)} CP</span>}
                    {generatedTreasure.coins.sp > 0 && <span className="coin-amount">{formatCurrency(generatedTreasure.coins.sp)} SP</span>}
                    {generatedTreasure.coins.ep > 0 && <span className="coin-amount">{formatCurrency(generatedTreasure.coins.ep)} EP</span>}
                    {generatedTreasure.coins.gp > 0 && <span className="coin-amount">{formatCurrency(generatedTreasure.coins.gp)} GP</span>}
                    {generatedTreasure.coins.pp > 0 && <span className="coin-amount">{formatCurrency(generatedTreasure.coins.pp)} PP</span>}
                  </div>
                </div>
              )}

              {/* Magic Items */}
              {generatedTreasure.magic_items && generatedTreasure.magic_items.length > 0 && (
                <div className="treasure-section">
                  <h3 className="treasure-section-title">✨ Magic Items</h3>
                  <table className="loot-table">
                    <thead>
                      <tr>
                        <th>Magic Item</th>
                        <th>Rarity</th>
                        <th>Value</th>
                        <th>Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generatedTreasure.magic_items.map((item, index) => (
                        <tr key={index}>
                          <td className="item-name-cell">{item.name}</td>
                          <td className="rarity-cell">
                            <span className={`rarity-badge ${getRarityBadgeClass(item.rarity)}`}>
                              {formatRarityDisplay(item.rarity)}
                            </span>
                          </td>
                          <td className="price-cell">
                            {item.value ? `${formatCurrency(item.value)} gp` : 'Priceless'}
                          </td>
                          <td className="source-cell">{item.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Motivational Message when no treasure generated */}
          {!generatedTreasure && (
            <section>
              <div className="no-treasure-message">
                <h2 className="fantasy-subheading section-title">Generate some treasure, you idiot.</h2>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer className="footer">
            <p>Built with ❤️ for D&D 5e • Following Official DMG 2024 Methodology • 629+ Magic Items • Coins, Gems & Art Objects</p>
          </footer>

          {/* Toast Notifications */}
          <div className="toast-container">
            {toasts.map(toast => (
              <div 
                key={toast.id}
                className={`toast toast-${toast.type}`}
                onClick={() => removeToast(toast.id)}
              >
                <span className="toast-message">{toast.message}</span>
                <button className="toast-close" onClick={() => removeToast(toast.id)}>×</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
