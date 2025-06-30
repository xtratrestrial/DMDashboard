// Configuration for different environments
export const config = {
  // In production, use empty string for relative URLs through nginx proxy
  // In development, use localhost:3001 directly
  apiBaseUrl: import.meta.env.PROD ? '' : 'http://localhost:3001',
  
  appName: 'Loot Factory',
  version: '1.0.0',
  
  // Feature flags
  features: {
    campaignIntegration: false,
    economicAnalysis: false,
    pdfExport: false,
  }
}; 