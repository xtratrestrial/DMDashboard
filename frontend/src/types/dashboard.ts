// Campaign and party management types
export interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  currentHP: number;
  maxHP: number;
  armorClass: number;
  status: 'healthy' | 'injured' | 'unconscious' | 'dead';
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  currentSession: number;
  currentLocation: string;
  lastPlayed: string;
  nextSession?: string;
}

export interface SessionNote {
  id: string;
  timestamp: string;
  content: string;
  type: 'combat' | 'roleplay' | 'exploration' | 'treasure' | 'other';
} 