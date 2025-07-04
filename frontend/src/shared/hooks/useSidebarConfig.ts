import { useState } from 'react'

export interface DmTool {
  id: string
  name: string
  icon: string
  isActive: boolean
  isAvailable: boolean
  description?: string
  url?: string
  badgeCount?: number
  comingSoon?: boolean
}

export interface DmSidebarConfig {
  projectName: string
  projectVersion: string
  currentTool: string
  tools: DmTool[]
  onToolChange?: (toolId: string) => void
}

export function useSidebarConfig(): DmSidebarConfig {
  const [currentTool, setCurrentTool] = useState('dashboard')

  return {
    projectName: "DM Dashboard",
    projectVersion: "2.0.0",
    currentTool,
    tools: [
      {
        id: "dashboard",
        name: "DM Dashboard",
        icon: "🎯",
        isActive: currentTool === 'dashboard',
        isAvailable: true,
        description: "Main dashboard for campaign management"
      },
      {
        id: "lootfactory",
        name: "LootFactory",
        icon: "💰",
        isActive: currentTool === 'lootfactory',
        isAvailable: true,
        description: "Generate D&D 5e treasure using DMG 2024 methodology"
      }
    ],
    onToolChange: setCurrentTool
  }
}
