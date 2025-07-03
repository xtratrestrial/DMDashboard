import type { DmSidebarConfig } from '@shared/components/DmSidebarConfig';

export const DM_DASHBOARD_CONFIG: DmSidebarConfig = {
  projectName: 'DM Dashboard',
  projectVersion: '1.0.0',
  currentTool: 'dm-dashboard',
  tools: [
    // Core Dashboard
    {
      id: 'dm-dashboard',
      name: 'Dashboard',
      icon: '🏠',
      description: 'Campaign Management Hub',
      isActive: true,
      isAvailable: true,
      url: '/dm-dashboard'
    },
    
    // Generation Tools
    {
      id: 'loot-factory',
      name: 'Loot Factory',
      icon: '🎲',
      description: 'Generate magical treasure and loot',
      isActive: false,
      isAvailable: true,
      url: '/loot-factory'
    },
    {
      id: 'name-generator',
      name: 'Name Generator',
      icon: '👤',
      description: 'Generate NPC and location names',
      isActive: false,
      isAvailable: true,
      url: '/name-generator'
    },
    {
      id: 'settlement-generator',
      name: 'Settlement Generator',
      icon: '🏘️',
      description: 'Generate towns with AI-powered details',
      isActive: false,
      isAvailable: false,
      url: '/settlement-generator'
    },
    {
      id: 'dungeon-generator',
      name: 'Dungeon Generator',
      icon: '🏰',
      description: 'Generate dungeons using DMG tables',
      isActive: false,
      isAvailable: false,
      url: '/dungeon-generator'
    },
    {
      id: 'inn-generator',
      name: 'Inn Generator',
      icon: '🍺',
      description: 'Generate taverns and inns',
      isActive: false,
      isAvailable: false,
      url: '/inn-generator'
    },
    {
      id: 'merchant-generator',
      name: 'Merchant Generator',
      icon: '🏪',
      description: 'Generate shops and merchants',
      isActive: false,
      isAvailable: false,
      url: '/merchant-generator'
    },
    {
      id: 'weapon-generator',
      name: 'Magic Weapon Generator',
      icon: '⚔️',
      description: 'Generate magic weapons and ammunition',
      isActive: false,
      isAvailable: false,
      url: '/weapon-generator'
    },
    
    // Campaign Management
    {
      id: 'chase-manager',
      name: 'Chase Scene Manager',
      icon: '🏃',
      description: 'Manage chase scenes and pursuits',
      isActive: false,
      isAvailable: false,
      url: '/chase-manager'
    },
    {
      id: 'wealth-tracker',
      name: 'Wealth & Magic Item Tracker',
      icon: '💎',
      description: 'Track party wealth and magic items by level (DMG 2024)',
      isActive: false,
      isAvailable: false,
      url: '/wealth-tracker'
    },
    {
      id: 'renown-tracker',
      name: 'Renown Tracker',
      icon: '🏆',
      description: 'Track faction reputation and renown',
      isActive: false,
      isAvailable: false,
      url: '/renown-tracker'
    },
    
    // Utility Tools
    {
      id: 'dice-calculator',
      name: 'Dice Math Calculator',
      icon: '🎯',
      description: 'Complex dice calculations and probability',
      isActive: false,
      isAvailable: false,
      url: '/dice-calculator'
    },
    {
      id: 'calendar',
      name: 'Campaign Calendar',
      icon: '📅',
      description: 'Track campaign time and events',
      isActive: false,
      isAvailable: false,
      url: '/calendar'
    },
    
    // Integration Tools
    {
      id: 'dndbeyond-sync',
      name: 'D&D Beyond Sync',
      icon: '🔗',
      description: 'Import/export with D&D Beyond',
      isActive: false,
      isAvailable: false,
      url: '/dndbeyond-sync'
    },
    {
      id: 'foundry-sync',
      name: 'FoundryVTT Sync',
      icon: '🎭',
      description: 'Import/export with FoundryVTT',
      isActive: false,
      isAvailable: false,
      url: '/foundry-sync'
    },
    {
      id: 'coda-sync',
      name: 'Coda.io Sync',
      icon: '📋',
      description: 'Sync campaign notes with Coda.io',
      isActive: false,
      isAvailable: false,
      url: '/coda-sync'
    }
  ],
  onToolChange: () => {
    // This will be overridden by the component
  }
}; 