// Types for LootFactory API responses and components

export interface MagicItem {
  name: string;
  rarity: string;
  description?: string;
  value?: number;
  source: string;
}

export interface GeneratedTreasure {
  coins?: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  gems?: Array<{
    name: string;
    value: number;
    quantity: number;
  }>;
  art_objects?: Array<{
    name: string;
    value: number;
    quantity: number;
  }>;
  magic_items?: MagicItem[];
  total_value: number;
  generation_method: string;
}

export interface ApiResponse {
  success: boolean;
  treasure: GeneratedTreasure;
  generation_timestamp: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'error';
  timestamp: number;
}

export interface LootFactoryConfig {
  apiBaseUrl: string;
  appName: string;
  version: string;
  features: {
    campaignIntegration: boolean;
    economicAnalysis: boolean;
    pdfExport: boolean;
  };
} 