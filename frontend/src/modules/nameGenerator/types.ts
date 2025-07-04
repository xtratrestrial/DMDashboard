export interface NameDatabase {
  names_by_category: Record<string, Array<{
    name: string;
    culture: string;
    gender?: string;
    source?: string;
  }>>;
  patterns?: Record<string, any>;
}

export interface GeneratedName {
  name: string;
  culture: string;
  pronounceable: boolean;
  quality: number;
}

export interface SavedName {
  name: string;
  culture: string;
  timestamp: number;
} 