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
      isAvailable: true,
      description: "Main dashboard for campaign management",
      url: "http://192.168.1.93:3000"
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