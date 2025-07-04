import { useState, useEffect } from 'react';
import type { GeneratedTreasure, ApiResponse, ToastNotification } from '../types/lootFactory';

// Random taglines array from original LootFactory
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

export const useLootFactory = (apiBaseUrl: string) => {
  // Constants
  const ALL_SOURCE_BOOKS = ['dmg-2024', 'tasha', 'eberron', 'fizban', 'spelljammer', 'planescape'];
  
  // State
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

  // Check API health
  const checkApiHealth = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/health`);
      if (response.ok) {
        setApiStatus('connected');
      } else {
        setApiStatus('error');
      }
    } catch (error) {
      setApiStatus('error');
    }
  };

  // Generate loot function
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

      const response = await fetch(`${apiBaseUrl}/api/generate`, {
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
      showToast('Failed to generate treasure. Please check that the backend server is running.', 'error');
    } finally {
      setIsGenerating(false);
    }
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

  // Utility functions
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

  // Initialize on mount
  useEffect(() => {
    checkApiHealth();
    setCurrentTagline(getRandomTagline());
  }, []);

  return {
    // State
    generatedTreasure,
    isGenerating,
    challengeRating,
    partyLevel,
    generationType,
    includeMundane,
    includeMagic,
    sourceBooks,
    apiStatus,
    currentTagline,
    toasts,
    ALL_SOURCE_BOOKS,
    
    // Setters
    setChallengeRating,
    setPartyLevel,
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
    formatRarityDisplay,
    getRandomTagline
  };
}; 