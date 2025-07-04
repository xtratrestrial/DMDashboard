import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { DmSidebar } from './shared/components/DmSidebar'
import { DM_DASHBOARD_CONFIG, type DmSidebarConfig } from './shared/components/DmSidebarConfig'
import { DashboardModule } from './modules/dashboard/DashboardModule'
import LootFactoryModule from './modules/lootFactory/LootFactoryModule'
import { useState, useEffect } from 'react'
import React from 'react'

function AppLayout() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarConfig, setSidebarConfig] = useState<DmSidebarConfig>(DM_DASHBOARD_CONFIG)

  // Sync sidebar currentTool with route
  useEffect(() => {
    const path = location.pathname;
    let toolId = 'dm-dashboard';
    if (path.startsWith('/lootfactory')) toolId = 'loot-factory';
    else if (path.startsWith('/name-generator')) toolId = 'name-generator';
    else if (path.startsWith('/settlement-generator')) toolId = 'settlement-generator';
    else if (path.startsWith('/dungeon-generator')) toolId = 'dungeon-generator';
    else if (path.startsWith('/inn-generator')) toolId = 'inn-generator';
    else if (path.startsWith('/merchant-generator')) toolId = 'merchant-generator';
    else if (path.startsWith('/weapon-generator')) toolId = 'weapon-generator';
    else if (path.startsWith('/chase-manager')) toolId = 'chase-manager';
    else if (path.startsWith('/wealth-tracker')) toolId = 'wealth-tracker';
    else if (path.startsWith('/renown-tracker')) toolId = 'renown-tracker';
    else if (path.startsWith('/dice-calculator')) toolId = 'dice-calculator';
    else if (path.startsWith('/calendar')) toolId = 'calendar';
    else if (path.startsWith('/dndbeyond-sync')) toolId = 'dndbeyond-sync';
    else if (path.startsWith('/foundry-sync')) toolId = 'foundry-sync';
    setSidebarConfig((prev) => ({ ...prev, currentTool: toolId }));
  }, [location.pathname]);

  // Set document title to current tool name
  useEffect(() => {
    const tool = sidebarConfig.tools.find(t => t.id === sidebarConfig.currentTool);
    document.title = tool ? `DMD | ${tool.name}` : 'DMD | DM Dashboard';
  }, [sidebarConfig.currentTool, sidebarConfig.tools]);

  const handleToolChange = (toolId: string) => {
    setSidebarConfig((prev: DmSidebarConfig) => ({
      ...prev,
      currentTool: toolId,
      tools: prev.tools.map((tool) => ({
        ...tool,
        isActive: tool.id === toolId
      }))
    }))
  }

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="app-layout">
      <DmSidebar 
        config={{
          ...sidebarConfig,
          onToolChange: handleToolChange
        }}
        isCollapsed={sidebarCollapsed}
        onCollapseToggle={handleSidebarToggle}
      />
      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Routes>
          <Route path="/" element={<DashboardModule />} />
          <Route path="/dashboard" element={<DashboardModule />} />
          <Route path="/lootfactory" element={<LootFactoryModule />} />
          <Route path="*" element={<div>404 - Module not found</div>} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
