// DM Dashboard Sidebar Configuration
// This file defines the extensible architecture for the DM Dashboard sidebar
// It can be copied to other D&D projects and customized per project needs

export interface DmTool {
  id: string;
  name: string;
  icon: string; // Font Awesome icon class or emoji
  isActive: boolean;
  isAvailable: boolean;
  description?: string;
  url?: string; // For inter-project navigation
  badgeCount?: number; // For notifications/status
  comingSoon?: boolean;
}

export interface CampaignInfo {
  name: string;
  playerCount: number;
  averageLevel: number;
  lastSession?: string;
}

export interface UserInfo {
  dmName: string;
  avatar?: string;
  preferences?: {
    theme: 'dark' | 'light' | 'parchment';
    defaultCr: number;
  };
}

export interface DmSidebarConfig {
  // Project Identity
  projectName: string;
  projectVersion: string;
  currentTool: string;
  
  // Tools Configuration
  tools: DmTool[];
  
  // Session Data (optional)
  campaignInfo?: CampaignInfo;
  userInfo?: UserInfo;
  
  // Callbacks
  onToolChange?: (toolId: string) => void;
  onCampaignChange?: (campaign: CampaignInfo) => void;
  onSettingsOpen?: () => void;
}

// DM Dashboard Configuration (Main Dashboard)
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
      url: '/dashboard'
    },
    
    // Generation Tools
    {
      id: 'loot-factory',
      name: 'Loot Factory',
      icon: '🎲',
      description: 'Generate magical treasure and loot',
      isActive: false,
      isAvailable: true,
      url: '/lootfactory'
    },
    {
      id: 'dice-calculator',
      name: 'Dice Math Calculator',
      icon: '🎯',
      description: 'Complex dice calculations and probability',
      isActive: true,
      isAvailable: true,
      url: '/dice-calculator'
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
  ]
};

// Default configuration for LootFactory
export const LOOT_FACTORY_CONFIG: DmSidebarConfig = {
  projectName: "DM Dashboard",
  projectVersion: "2.0.0",
  currentTool: "loot-factory",
  
  tools: [
    {
      id: "dm-dashboard",
      name: "DM Dashboard",
      icon: "🎯",
      isActive: false,
      isAvailable: false,
      description: "Main dashboard for campaign management",
      comingSoon: true
    },
    {
      id: "loot-factory",
      name: "LootFactory",
      icon: "💰",
      isActive: true,
      isAvailable: true,
      description: "Generate D&D 5e treasure using DMG 2024 methodology"
    },
    {
      id: "calendar",
      name: "Calendar",
      icon: "📅",
      isActive: false,
      isAvailable: false,
      description: "Campaign calendar and session planning",
      comingSoon: true
    },
    {
      id: "item-browser",
      name: "Item Browser",
      icon: "🔍",
      isActive: false,
      isAvailable: false,
      description: "Browse and search 534+ magic items",
      comingSoon: true
    },
    {
      id: "pricing-calculator",
      name: "Pricing Calculator",
      icon: "🧮",
      isActive: false,
      isAvailable: false,
      description: "Calculate item values and economic analysis",
      comingSoon: true
    },
    {
      id: "campaign-tracker",
      name: "Campaign Tracker", 
      icon: "📋",
      isActive: false,
      isAvailable: false,
      description: "Track treasure distributed to parties",
      comingSoon: true
    }
  ],
  
  // Future: Cross-project navigation
  // externalTools: [
  //   {
  //     id: "name-generator",
  //     name: "Name Generator",
  //     icon: "🏷️",
  //     url: "http://localhost:3002",
  //     isAvailable: true
  //   },
  //   {
  //     id: "foundry-tools", 
  //     name: "Foundry Tools",
  //     icon: "🎲",
  //     url: "http://localhost:3003",
  //     isAvailable: false
  //   }
  // ]
};

// Configuration for other projects (examples)
export const createNameGeneratorConfig = (): DmSidebarConfig => ({
  projectName: "Name Generator",
  projectVersion: "1.0.0", 
  currentTool: "name-generator",
  
  tools: [
    {
      id: "name-generator",
      name: "Name Generator",
      icon: "🏷️",
      isActive: true,
      isAvailable: true,
      description: "Generate D&D names for NPCs, places, and more"
    },
    {
      id: "name-categories",
      name: "Name Categories",
      icon: "📚",
      isActive: false,
      isAvailable: true,
      description: "Browse name categories and origins"
    }
  ]
});

export const createFoundryToolsConfig = (): DmSidebarConfig => ({
  projectName: "Foundry Tools",
  projectVersion: "1.0.0",
  currentTool: "module-manager",
  
  tools: [
    {
      id: "module-manager",
      name: "Module Manager", 
      icon: "🔧",
      isActive: true,
      isAvailable: true,
      description: "Manage FoundryVTT modules and settings"
    },
    {
      id: "scene-builder",
      name: "Scene Builder",
      icon: "🗺️", 
      isActive: false,
      isAvailable: false,
      description: "Build and configure scenes",
      comingSoon: true
    }
  ]
}); 