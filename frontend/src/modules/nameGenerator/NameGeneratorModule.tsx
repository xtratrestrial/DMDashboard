import React, { useState, useEffect } from 'react';
import './NameGeneratorModule.css';
import type { GeneratedName, SavedName } from './types';
import Toast from './Toast';

// Configuration for different environments
const config = {
  // In production, use empty string for relative URLs through nginx proxy
  // In development, use localhost:3001 directly
  apiBaseUrl: import.meta.env.PROD ? '' : 'http://localhost:3001',
};

const NameGeneratorModule: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('');
  const [nameCount, setNameCount] = useState<number>(10);
  const [gender, setGender] = useState<'male' | 'female' | 'any'>('any');
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [savedNames, setSavedNames] = useState<SavedName[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [availableCultures, setAvailableCultures] = useState<string[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    isVisible: boolean;
    type: 'success' | 'error' | 'info';
  }>({
    message: '',
    isVisible: false,
    type: 'success'
  });

  useEffect(() => {
    // Load available cultures from API
    fetch(`${config.apiBaseUrl}/api/name-generator/cultures`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.cultures)) {
          setAvailableCultures(data.cultures);
          if (data.cultures.length > 0 && !selectedCulture) {
            setSelectedCulture(data.cultures[0]);
          }
        } else {
          setAvailableCultures([]);
        }
      })
      .catch(error => {
        console.error('Failed to load cultures:', error);
        setError('Failed to load cultures from server');
      });
  }, []);

  const handleGenerateNames = () => {
    if (!selectedCulture) {
      setError('Please select a culture');
      return;
    }

    setIsLoading(true);
    setError('');

    fetch(`${config.apiBaseUrl}/api/name-generator/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        culture: selectedCulture,
        count: nameCount,
        gender: gender
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success && data.names) {
          setGeneratedNames(data.names);
        } else {
          setError(data.error || 'Failed to generate names');
        }
      })
      .catch(error => {
        console.error('Failed to generate names:', error);
        setError('Failed to generate names from server');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveName = (name: GeneratedName) => {
    const savedName: SavedName = {
      name: name.name,
      culture: name.culture,
      timestamp: Date.now()
    };
    setSavedNames(prev => [savedName, ...prev]);
  };

  const handleRemoveSavedName = (index: number) => {
    setSavedNames(prev => prev.filter((_, i) => i !== index));
  };

  const handleRandomCulture = () => {
    const cultures = availableCultures;
    const randomCulture = cultures[Math.floor(Math.random() * cultures.length)];
    setSelectedCulture(randomCulture);
  };

  const formatTimestamp = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  const getCultureDisplayName = (culture: string): string => {
    return culture.charAt(0).toUpperCase() + culture.slice(1);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`"${text}" copied to clipboard!`, 'success');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(`"${text}" copied to clipboard!`, 'success');
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({
      message,
      isVisible: true,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="name-generator-module">
      <Toast 
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
        type={toast.type}
      />
      <div className="name-generator-container">
        {/* Header */}
        <header className="name-generator-header">
          <h1 className="fantasy-heading">Fantasy Name Generator</h1>
          <p className="subtitle">Generate authentic names for your D&D characters</p>
        </header>

        {/* Main Content */}
        <div className="main-content">
          {/* Left Panel - Controls */}
          <div className="controls-panel">
            <div className="control-section">
              <h3 className="section-title">Culture</h3>
              <div className="culture-buttons">
                {availableCultures.map(culture => (
                  <button
                    key={culture}
                    className={`culture-btn ${selectedCulture === culture ? 'active' : ''}`}
                    onClick={() => setSelectedCulture(culture)}
                  >
                    {getCultureDisplayName(culture)}
                  </button>
                ))}
              </div>
              <button 
                className="random-btn"
                onClick={handleRandomCulture}
                disabled={availableCultures.length === 0}
              >
                🎲 Random Culture
              </button>
            </div>

            <div className="control-section">
              <h3 className="section-title">Gender</h3>
              <div className="gender-toggle">
                <button
                  className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                  onClick={() => setGender('male')}
                >
                  Male
                </button>
                <button
                  className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                  onClick={() => setGender('female')}
                >
                  Female
                </button>
                <button
                  className={`gender-btn ${gender === 'any' ? 'active' : ''}`}
                  onClick={() => setGender('any')}
                >
                  Any
                </button>
              </div>
            </div>

            <div className="control-section">
              <h3 className="section-title">Count</h3>
              <div className="count-control">
                <input
                  type="number"
                  value={nameCount}
                  onChange={(e) => setNameCount(Math.max(1, Math.min(21, parseInt(e.target.value) || 1)))}
                  className="count-input"
                  min="1"
                  max="21"
                />
                <span className="count-label">names (1-21)</span>
              </div>
            </div>

            <button 
              className="generate-btn"
              onClick={handleGenerateNames}
              disabled={!selectedCulture || isLoading}
            >
              {isLoading ? '🔄 Generating...' : '✨ Generate Names'}
            </button>

            {error && (
              <div className="error-message">
                ❌ {error}
              </div>
            )}
          </div>

          {/* Right Panel - Results */}
          <div className="results-panel">
            <h3 className="section-title">Generated Names</h3>
            
            {generatedNames.length === 0 ? (
              <div className="empty-state">
                <p>Select a culture and click generate to create names!</p>
              </div>
            ) : (
              <div className="names-list">
                {generatedNames.map((name, index) => (
                  <div key={index} className="name-item">
                    <span className="name-text">{name.name}</span>
                    <div className="name-actions">
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(name.name)}
                        title="Copy name"
                      >
                        📋
                      </button>
                      <button 
                        className="save-btn"
                        onClick={() => handleSaveName(name)}
                        title="Save name"
                      >
                        💾
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved Names Section */}
            {savedNames.length > 0 && (
              <div className="saved-section">
                <h3 className="section-title">Saved Names</h3>
                <div className="saved-names-list">
                  {savedNames.map((savedName, index) => (
                    <div key={index} className="saved-name-item">
                      <div className="saved-name-info">
                        <span 
                          className="saved-name-text clickable"
                          onClick={() => copyToClipboard(savedName.name)}
                          title="Click to copy name"
                        >
                          {savedName.name}
                        </span>
                        <span className="saved-name-culture">{getCultureDisplayName(savedName.culture)}</span>
                        <span className="saved-name-time">{formatTimestamp(savedName.timestamp)}</span>
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => handleRemoveSavedName(index)}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameGeneratorModule; 