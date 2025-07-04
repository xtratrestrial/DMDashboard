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