import React, { useState } from 'react';
import { 
  calculateProbability, 
  validateDiceExpression, 
  formatProbability, 
  getMostLikelyOutcomes,
  type ProbabilityResult 
} from './diceProbability';
import './DiceMathModule.css';

interface DiceExpression {
  dice: string; // e.g., "2d6+3", "1d20", "4d4-1"
  description: string;
}

const DiceMathModule: React.FC = () => {
  const [diceExpression, setDiceExpression] = useState<string>('');
  const [results, setResults] = useState<ProbabilityResult | null>(null);
  const [savedExpressions, setSavedExpressions] = useState<DiceExpression[]>([]);
  const [error, setError] = useState<string>('');
  
  // DC vs Bonus Calculator state
  const [bonus, setBonus] = useState<number>(5);
  const [dcRange, setDcRange] = useState<{ min: number; max: number }>({ min: 10, max: 25 });
  const [dcResults, setDcResults] = useState<Array<{ dc: number; probability: number }>>([]);

  const [activeTab, setActiveTab] = useState<'dc' | 'expressions' | 'help'>('dc');

  const handleCalculate = () => {
    if (!diceExpression.trim()) return;
    
    // Validate the expression first
    const validation = validateDiceExpression(diceExpression);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid expression');
      setResults(null);
      return;
    }
    
    setError('');
    const result = calculateProbability(diceExpression);
    setResults(result);
  };

  const handleSaveExpression = () => {
    if (!diceExpression.trim()) return;
    
    const validation = validateDiceExpression(diceExpression);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid expression');
      return;
    }
    
    const newExpression: DiceExpression = {
      dice: diceExpression,
      description: `Saved expression: ${diceExpression}`
    };
    
    setSavedExpressions([...savedExpressions, newExpression]);
    setDiceExpression('');
    setError('');
  };

  const handleExpressionClick = (expression: string) => {
    setDiceExpression(expression);
    setError('');
    setResults(null);
  };

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

  const commonExpressions = [
    { dice: '1d20', description: 'Standard D20 roll' },
    { dice: '2d6', description: 'Two six-sided dice' },
    { dice: '4d6', description: 'Four six-sided dice (drop lowest for stats)' },
    { dice: '1d100', description: 'Percentile roll' },
    { dice: '2d6+3', description: 'Two D6 plus modifier' },
    { dice: '1d20+5', description: 'D20 with +5 modifier' },
    { dice: '3d8-2', description: 'Three D8 minus 2' },
    { dice: '1d4+1d6+1d8', description: 'Mixed dice pool' }
  ];

  const mostLikelyOutcomes = results ? getMostLikelyOutcomes(results.distribution, 5) : [];

  return (
    <div className="dice-math-module">
      <div className="dice-math-container">
        {/* Header */}
        <header className="dice-math-header">
          <h1 className="fantasy-heading">Dice Math Calculator</h1>
          {/* Tabs */}
          <div className="dice-math-tabs">
            <button
              className={`tab-btn${activeTab === 'dc' ? ' active' : ''}`}
              onClick={() => setActiveTab('dc')}
            >
              DC vs Bonus Calculator
            </button>
            <button
              className={`tab-btn${activeTab === 'expressions' ? ' active' : ''}`}
              onClick={() => setActiveTab('expressions')}
            >
              Dice Expressions
            </button>
            <button
              className={`tab-btn${activeTab === 'help' ? ' active' : ''}`}
              onClick={() => setActiveTab('help')}
            >
              How to Use
            </button>
          </div>
        </header>

        {/* Tab Content */}
        {activeTab === 'dc' && (
          <section className="dc-calculator-section">
            <h3 className="section-title">DC vs Bonus Calculator</h3>
            <div className="dc-calculator-container">
              <div className="dc-input-group">
                <div className="dc-input-row">
                  <div className="dc-input-field">
                    <label htmlFor="bonus-input">BONUS:</label>
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
                  <div className="dc-input-field">
                    <label htmlFor="dc-min">DC RANGE:</label>
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
                      <span className="dc-range-separator">to</span>
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
                    className="btn-primary" 
                    onClick={calculateDcProbabilities}
                  >
                    Calculate DC Probabilities
                  </button>
                </div>
              </div>
              
              {dcResults.length > 0 && (
                <div className="dc-results-section">
                  <h4>Success Probabilities</h4>
                  <div className="dc-results-grid">
                    {dcResults.map((result, index) => (
                      <div key={index} className="dc-result-card">
                        <div className="dc-value">DC {result.dc}</div>
                        <div className="dc-probability">{formatProbability(result.probability)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        {activeTab === 'expressions' && (
          <>
            <section className="input-section">
              <div className="expression-input-group">
                <label htmlFor="dice-expression">DICE EXPRESSION:</label>
                <div className="input-row">
                  <input
                    id="dice-expression"
                    type="text"
                    value={diceExpression}
                    onChange={(e) => {
                      setDiceExpression(e.target.value);
                      setError('');
                    }}
                    placeholder="e.g., 2d6+3, 1d20, 4d6-1"
                    className="expression-input"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleCalculate();
                      }
                    }}
                  />
                  <button 
                    className="btn-primary" 
                    onClick={handleCalculate}
                    disabled={!diceExpression.trim()}
                  >
                    🎲 Calculate Probability
                  </button>
                  <button 
                    className="btn-secondary" 
                    onClick={handleSaveExpression}
                    disabled={!diceExpression.trim()}
                  >
                    💾 Save Expression
                  </button>
                </div>
                {error && (
                  <div className="error-message">
                    ❌ {error}
                  </div>
                )}
              </div>
            </section>
            <section className="common-expressions-section">
              <h3 className="section-title">Common Expressions</h3>
              <div className="expressions-grid">
                {commonExpressions.map((expr, index) => (
                  <button
                    key={index}
                    className="expression-card"
                    onClick={() => handleExpressionClick(expr.dice)}
                  >
                    <div className="expression-dice">{expr.dice}</div>
                    <div className="expression-desc">{expr.description}</div>
                  </button>
                ))}
              </div>
            </section>
            {/* Results Section */}
            {results && (
              <section className="results-section">
                <h3 className="section-title">Probability Results</h3>
                <div className="results-grid">
                  <div className="result-card">
                    <h4>Expression</h4>
                    <p>{results.expression}</p>
                  </div>
                  <div className="result-card">
                    <h4>Range</h4>
                    <p>{results.min} - {results.max}</p>
                  </div>
                  <div className="result-card">
                    <h4>Average</h4>
                    <p>{results.average.toFixed(2)}</p>
                  </div>
                  <div className="result-card">
                    <h4>Median</h4>
                    <p>{results.median}</p>
                  </div>
                </div>
                
                {/* Most Likely Outcomes */}
                <div className="likely-outcomes-section">
                  <h4>Most Likely Outcomes</h4>
                  <div className="outcomes-grid">
                    {mostLikelyOutcomes.map((outcome, index) => (
                      <div key={index} className="outcome-item">
                        <span className="outcome-value">{outcome.value}</span>
                        <span className="outcome-probability">{formatProbability(outcome.probability)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Distribution Chart */}
                <div className="distribution-section">
                  <h4>Probability Distribution</h4>
                  <div className="distribution-chart">
                    <div className="distribution-bars">
                      {Object.entries(results.distribution)
                        .sort(([a], [b]) => parseInt(a) - parseInt(b))
                        .map(([value, probability]) => (
                          <div key={value} className="distribution-bar">
                            <div className="bar-label">{value}</div>
                            <div 
                              className="bar-fill" 
                              style={{ 
                                height: `${probability * 1000}px`,
                                backgroundColor: probability > 0.1 ? 'var(--dnd-red-light)' : 'rgba(220, 20, 60, 0.6)'
                              }}
                            ></div>
                            <div className="bar-probability">{formatProbability(probability)}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Saved Expressions */}
            {savedExpressions.length > 0 && (
              <section className="saved-expressions-section">
                <h3 className="section-title">Saved Expressions</h3>
                <div className="saved-expressions-list">
                  {savedExpressions.map((expr, index) => (
                    <div key={index} className="saved-expression-item">
                      <span className="saved-dice">{expr.dice}</span>
                      <span className="saved-desc">{expr.description}</span>
                      <button 
                        className="btn-small"
                        onClick={() => handleExpressionClick(expr.dice)}
                      >
                        Use
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
        {activeTab === 'help' && (
          <section className="help-section lighter-bg">
            <h3 className="section-title">How to Use</h3>
            <div className="help-content">
              <h4>Expression Format:</h4>
              <ul>
                <li><strong>XdY</strong> - Roll X dice with Y sides (e.g., 2d6)</li>
                <li><strong>XdY+Z</strong> - Roll X dice with Y sides, add Z (e.g., 2d6+3)</li>
                <li><strong>XdY-Z</strong> - Roll X dice with Y sides, subtract Z (e.g., 4d6-1)</li>
                <li><strong>XdY+AdB</strong> - Mixed dice pools (e.g., 1d4+1d6+1d8)</li>
              </ul>
              
              <h4>Supported Dice:</h4>
              <p>d4, d6, d8, d10, d12, d20, d100 (percentile)</p>
              
              <h4>Examples:</h4>
              <ul>
                <li><code>1d20</code> - Standard D20 roll</li>
                <li><code>2d6+3</code> - Two D6 plus 3</li>
                <li><code>4d6-1</code> - Four D6 minus 1</li>
                <li><code>1d4+1d6+1d8</code> - Mixed dice pool</li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DiceMathModule; 