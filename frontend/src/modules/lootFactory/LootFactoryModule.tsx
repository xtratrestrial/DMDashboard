import React, { useRef, useState, useEffect } from 'react';
import { useLootFactory } from '../../hooks/useLootFactory';
import './LootFactoryModule.css';

// Configuration for different environments
const config = {
  // In production, use empty string for relative URLs through nginx proxy
  // In development, use localhost:3001 directly
  apiBaseUrl: import.meta.env.PROD ? '' : 'http://localhost:3001',
  
  appName: 'Loot Factory',
  version: '1.0.0',
  
  // Feature flags
  features: {
    campaignIntegration: false,
    economicAnalysis: false,
    pdfExport: false,
  }
};

const LootFactoryModule: React.FC = () => {
  const {
    // State
    generatedTreasure,
    isGenerating,
    challengeRating,
    // partyLevel,
    generationType,
    includeMundane,
    includeMagic,
    sourceBooks,
    apiStatus,
    // currentTagline,
    toasts,
    ALL_SOURCE_BOOKS,
    
    // Setters
    setChallengeRating,
    // setPartyLevel,
    setGenerationType,
    setIncludeMundane,
    setIncludeMagic,
    setSourceBooks,
    
    // Functions
    generateLoot,
    toggleAllSourceBooks,
    showToast,
    removeToast,
    formatCurrency,
    getRarityBadgeClass,
    formatRarityDisplay
  } = useLootFactory(config.apiBaseUrl);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Export CSV file
  const handleExportCSV = () => {
    if (!generatedTreasure) return;
    let csv = 'Item,Type,Rarity,Amount,Value,Source\n';
    
    // Coins
    if (generatedTreasure.coins) {
      Object.entries(generatedTreasure.coins).forEach(([coin, amount]) => {
        if (amount > 0) {
          const coinValue = coin === 'cp' ? amount * 0.01 : 
                           coin === 'sp' ? amount * 0.1 : 
                           coin === 'ep' ? amount * 0.5 : 
                           coin === 'gp' ? amount : 
                           coin === 'pp' ? amount * 10 : 0;
          csv += `${coin.toUpperCase()},coins,,${amount},${coinValue},DMG 2024\n`;
        }
      });
    }
    
    // Gems
    if (generatedTreasure.gems && generatedTreasure.gems.length > 0) {
      generatedTreasure.gems.forEach(gem => {
        csv += `${gem.name},gems,,${gem.quantity},${gem.value},DMG 2024\n`;
      });
    }
    
    // Art Objects
    if (generatedTreasure.art_objects && generatedTreasure.art_objects.length > 0) {
      generatedTreasure.art_objects.forEach(art => {
        csv += `${art.name},art objects,,${art.quantity},${art.value},DMG 2024\n`;
      });
    }
    
    // Magic Items
    if (generatedTreasure.magic_items && generatedTreasure.magic_items.length > 0) {
      generatedTreasure.magic_items.forEach(item => {
        csv += `${item.name},magic items,${item.rarity},1,${item.value || 'Priceless'},${item.source}\n`;
      });
    }
    
    // Download CSV file
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loot.csv';
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV file downloaded! Drag into Coda or open in spreadsheet', 'success');
  };



  return (
    <div className="loot-factory-module">
      <div className="loot-factory-container">
        {/* Header */}
        <header className="loot-factory-header">
          <h1 className="fantasy-heading">Loot Factory</h1>
          <p className="fantasy-subheading">D&D 5e Magical & Mundane Treasure Generator</p>

          {/* Generation Controls */}
          <div className="generation-controls">
            <div className="control-group">
              <label htmlFor="challenge-rating">CHALLENGE RATING:</label>
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
              <div className="magic-mundane-group">
                <label>
                  <input
                    type="checkbox"
                    checked={includeMundane}
                    onChange={(e) => setIncludeMundane(e.target.checked)}
                  />
                  Include Mundane Treasure (Coins, Gems, Art)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={includeMagic}
                    onChange={(e) => setIncludeMagic(e.target.checked)}
                  />
                  Include Magic Items
                </label>
              </div>
            </div>

            <div className="control-group">
              <label htmlFor="generation-type">GENERATION TYPE:</label>
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

            <div className="control-group">
              <div className="source-books-dropdown-row">
                <span className="source-books-dropdown-label">SOURCE BOOKS:</span>
                <div className={`source-books-dropdown${dropdownOpen ? ' open' : ''}`} ref={dropdownRef}>
                  <button
                    type="button"
                    className="source-books-dropdown-btn"
                    onClick={() => setDropdownOpen((open) => !open)}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                  >
                    {sourceBooks.length === 0
                      ? 'None Selected'
                      : sourceBooks.length === ALL_SOURCE_BOOKS.length
                      ? 'All Selected'
                      : `${sourceBooks.length} Selected`}
                  </button>
                  <div className="source-books-dropdown-panel">
                    <button
                      type="button"
                      className="select-all-btn"
                      onClick={toggleAllSourceBooks}
                    >
                      {sourceBooks.length === ALL_SOURCE_BOOKS.length ? 'Deselect All' : 'Select All'}
                    </button>
                    {ALL_SOURCE_BOOKS.map((book) => (
                      <label key={book}>
                        <input
                          type="checkbox"
                          checked={sourceBooks.includes(book)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSourceBooks([...sourceBooks, book]);
                            } else {
                              setSourceBooks(sourceBooks.filter((b) => b !== book));
                            }
                          }}
                        />
                        <span style={{ color: book === 'dmg-2024' && sourceBooks.includes('dmg-2024') ? 'var(--dnd-red-light)' : undefined, fontWeight: book === 'dmg-2024' && sourceBooks.includes('dmg-2024') ? 700 : undefined }}>
                          {book === 'dmg-2024' ? 'DMG 2024'
                            : book === 'tasha' ? "Tasha's Cauldron"
                            : book === 'eberron' ? 'Eberron'
                            : book === 'fizban' ? "Fizban's Treasury"
                            : book === 'spelljammer' ? 'Spelljammer'
                            : book === 'planescape' ? 'Planescape'
                            : book}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
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
            {/* Export Button */}
            <div className="copy-buttons">
              <button className="btn-secondary" onClick={() => handleExportCSV()}>
                Download CSV
              </button>
            </div>
            <p className="generation-info">
              ✨ {generatedTreasure.generation_method} • Total Value: {formatCurrency(generatedTreasure.total_value)} GP ✨
            </p>

            {/* Mundane Treasure */}
            {generatedTreasure.coins && (
              <div className="treasure-section">
                <h3 className="treasure-section-title">💰 Coins</h3>
                <div className="coins-display">
                  {generatedTreasure.coins.cp > 0 && <span className="coin-amount cp">{formatCurrency(generatedTreasure.coins.cp)} CP</span>}
                  {generatedTreasure.coins.sp > 0 && <span className="coin-amount sp">{formatCurrency(generatedTreasure.coins.sp)} SP</span>}
                  {generatedTreasure.coins.ep > 0 && <span className="coin-amount ep">{formatCurrency(generatedTreasure.coins.ep)} EP</span>}
                  {generatedTreasure.coins.gp > 0 && <span className="coin-amount gp">{formatCurrency(generatedTreasure.coins.gp)} GP</span>}
                  {generatedTreasure.coins.pp > 0 && <span className="coin-amount pp">{formatCurrency(generatedTreasure.coins.pp)} PP</span>}
                </div>
              </div>
            )}

            {/* Gems */}
            {generatedTreasure.gems && generatedTreasure.gems.length > 0 && (
              <div className="treasure-section">
                <h3 className="treasure-section-title">💎 Gems</h3>
                <table className="loot-table">
                  <thead>
                    <tr>
                      <th>Gem</th>
                      <th>Value</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generatedTreasure.gems.map((gem, index) => (
                      <tr key={index}>
                        <td className="item-name-cell">{gem.name}</td>
                        <td className="price-cell">{formatCurrency(gem.value)} gp</td>
                        <td className="quantity-cell">{gem.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Art Objects */}
            {generatedTreasure.art_objects && generatedTreasure.art_objects.length > 0 && (
              <div className="treasure-section">
                <h3 className="treasure-section-title">🎨 Art Objects</h3>
                <table className="loot-table">
                  <thead>
                    <tr>
                      <th>Art Object</th>
                      <th>Value</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generatedTreasure.art_objects.map((art, index) => (
                      <tr key={index}>
                        <td className="item-name-cell">{art.name}</td>
                        <td className="price-cell">{formatCurrency(art.value)} gp</td>
                        <td className="quantity-cell">{art.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Magic Items */}
            {generatedTreasure.magic_items && generatedTreasure.magic_items.length > 0 && (
              <div className="treasure-section">
                <h3 className="treasure-section-title">✨ Magic Items</h3>
                <table className="loot-table">
                  <thead>
                    <tr>
                      <th className="magic-item-header">Magic Item</th>
                      <th className="rarity-header">Rarity</th>
                      <th className="value-header">Value</th>
                      <th className="source-header">Source</th>
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
          <p>© 2025 Zargon Industries™</p>
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
  );
};

export default LootFactoryModule; 