// Dice Probability Calculator
// Handles complex dice expressions and probability calculations

export interface DiceExpression {
  dice: string;
  description: string;
}

export interface ProbabilityResult {
  expression: string;
  min: number;
  max: number;
  average: number;
  median: number;
  distribution: { [key: number]: number }; // value -> probability
}

export interface DiceTerm {
  count: number;  // number of dice
  sides: number;  // sides per die
  modifier: number; // + or - modifier
}

// Parse a dice expression like "2d6+3" or "1d20" or "4d6-1"
export function parseDiceExpression(expression: string): DiceTerm[] {
  const terms: DiceTerm[] = [];
  
  // Remove all whitespace and convert to lowercase
  const cleanExpr = expression.replace(/\s+/g, '').toLowerCase();
  
  // Split by + and - to handle multiple terms
  const parts = cleanExpr.split(/(?=[+-])/);
  
  for (const part of parts) {
    if (part === '') continue;
    
    // Handle pure modifiers (e.g., "+3", "-1")
    if (/^[+-]\d+$/.test(part)) {
      terms.push({ count: 0, sides: 0, modifier: parseInt(part) });
      continue;
    }
    
    // Handle dice expressions (e.g., "2d6", "1d20")
    const diceMatch = part.match(/^([+-])?(\d*)d(\d+)([+-]\d+)?$/);
    if (diceMatch) {
      const [, sign, countStr, sidesStr, modifierStr] = diceMatch;
      const count = countStr === '' ? 1 : parseInt(countStr);
      const sides = parseInt(sidesStr);
      const modifier = modifierStr ? parseInt(modifierStr) : 0;
      
      // Apply sign to count if present
      const finalCount = sign === '-' ? -count : count;
      
      terms.push({ count: finalCount, sides, modifier });
    } else {
      // Handle pure numbers
      const numMatch = part.match(/^([+-])?(\d+)$/);
      if (numMatch) {
        const [, sign, numStr] = numMatch;
        const num = parseInt(numStr);
        const finalNum = sign === '-' ? -num : num;
        terms.push({ count: 0, sides: 0, modifier: finalNum });
      }
    }
  }
  
  return terms;
}

// Calculate the probability distribution for a single die
function singleDieDistribution(sides: number): { [key: number]: number } {
  const distribution: { [key: number]: number } = {};
  const probability = 1 / sides;
  
  for (let i = 1; i <= sides; i++) {
    distribution[i] = probability;
  }
  
  return distribution;
}

// Convolve two probability distributions
function convolveDistributions(dist1: { [key: number]: number }, dist2: { [key: number]: number }): { [key: number]: number } {
  const result: { [key: number]: number } = {};
  
  for (const [val1, prob1] of Object.entries(dist1)) {
    for (const [val2, prob2] of Object.entries(dist2)) {
      const sum = parseInt(val1) + parseInt(val2);
      result[sum] = (result[sum] || 0) + prob1 * prob2;
    }
  }
  
  return result;
}

// Calculate the probability distribution for multiple dice of the same type
function multipleDiceDistribution(count: number, sides: number): { [key: number]: number } {
  if (count <= 0) return { 0: 1 };
  if (count === 1) return singleDieDistribution(sides);
  
  let result = singleDieDistribution(sides);
  
  for (let i = 1; i < count; i++) {
    result = convolveDistributions(result, singleDieDistribution(sides));
  }
  
  return result;
}

// Apply a modifier to a distribution
function applyModifier(distribution: { [key: number]: number }, modifier: number): { [key: number]: number } {
  if (modifier === 0) return distribution;
  
  const result: { [key: number]: number } = {};
  
  for (const [value, probability] of Object.entries(distribution)) {
    const newValue = parseInt(value) + modifier;
    result[newValue] = probability;
  }
  
  return result;
}

// Combine multiple distributions (for mixed dice pools)
function combineDistributions(distributions: { [key: number]: number }[]): { [key: number]: number } {
  if (distributions.length === 0) return { 0: 1 };
  if (distributions.length === 1) return distributions[0];
  
  let result = distributions[0];
  
  for (let i = 1; i < distributions.length; i++) {
    result = convolveDistributions(result, distributions[i]);
  }
  
  return result;
}

// Calculate the median of a distribution
function calculateMedian(distribution: { [key: number]: number }): number {
  const values = Object.keys(distribution).map(Number).sort((a, b) => a - b);
  const probabilities = values.map(val => distribution[val]);
  
  let cumulative = 0;
  for (let i = 0; i < values.length; i++) {
    cumulative += probabilities[i];
    if (cumulative >= 0.5) {
      return values[i];
    }
  }
  
  return values[values.length - 1];
}

// Main function to calculate probability for a dice expression
export function calculateProbability(expression: string): ProbabilityResult | null {
  try {
    const terms = parseDiceExpression(expression);
    
    if (terms.length === 0) {
      return null;
    }
    
    const distributions: { [key: number]: number }[] = [];
    let totalModifier = 0;
    
    // Process each term
    for (const term of terms) {
      if (term.count !== 0 && term.sides !== 0) {
        // This is a dice term
        const diceDist = multipleDiceDistribution(Math.abs(term.count), term.sides);
        if (term.count < 0) {
          // Negative count means negative dice (subtract from total)
          const negDist: { [key: number]: number } = {};
          for (const [val, prob] of Object.entries(diceDist)) {
            negDist[-parseInt(val)] = prob;
          }
          distributions.push(negDist);
        } else {
          distributions.push(diceDist);
        }
      }
      
      // Add modifier
      totalModifier += term.modifier;
    }
    
    // Combine all distributions
    let finalDistribution = combineDistributions(distributions);
    
    // Apply total modifier
    if (totalModifier !== 0) {
      finalDistribution = applyModifier(finalDistribution, totalModifier);
    }
    
    // Calculate statistics
    const values = Object.keys(finalDistribution).map(Number).sort((a, b) => a - b);
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    // Calculate average
    let average = 0;
    for (const [value, probability] of Object.entries(finalDistribution)) {
      average += parseInt(value) * probability;
    }
    
    // Calculate median
    const median = calculateMedian(finalDistribution);
    
    return {
      expression,
      min,
      max,
      average,
      median,
      distribution: finalDistribution
    };
    
  } catch (error) {
    console.error('Error calculating probability:', error);
    return null;
  }
}

// Validate a dice expression
export function validateDiceExpression(expression: string): { isValid: boolean; error?: string } {
  if (!expression.trim()) {
    return { isValid: false, error: 'Expression cannot be empty' };
  }
  
  try {
    const terms = parseDiceExpression(expression);
    
    if (terms.length === 0) {
      return { isValid: false, error: 'Invalid dice expression format' };
    }
    
    for (const term of terms) {
      if (term.count !== 0 && term.sides !== 0) {
        // Check dice sides
        if (![4, 6, 8, 10, 12, 20, 100].includes(term.sides)) {
          return { isValid: false, error: `Unsupported dice: d${term.sides}. Supported: d4, d6, d8, d10, d12, d20, d100` };
        }
        
        // Check dice count
        if (Math.abs(term.count) > 100) {
          return { isValid: false, error: 'Too many dice (max 100)' };
        }
      }
    }
    
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid expression format' };
  }
}

// Format probability as percentage
export function formatProbability(probability: number): string {
  return (probability * 100).toFixed(2) + '%';
}

// Get the most likely outcomes (top 5)
export function getMostLikelyOutcomes(distribution: { [key: number]: number }, count: number = 5): Array<{ value: number; probability: number }> {
  const entries = Object.entries(distribution).map(([value, probability]) => ({
    value: parseInt(value),
    probability
  }));
  
  return entries
    .sort((a, b) => b.probability - a.probability)
    .slice(0, count);
} 