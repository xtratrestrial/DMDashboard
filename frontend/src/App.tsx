import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DmSidebar } from './shared/components/DmSidebar'
import { DM_DASHBOARD_CONFIG, type DmSidebarConfig } from './shared/components/DmSidebarConfig'
import { DashboardModule } from './modules/dashboard/DashboardModule'
import LootFactoryModule from './modules/lootFactory/LootFactoryModule'
import { useState } from 'react'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarConfig, setSidebarConfig] = useState<DmSidebarConfig>(DM_DASHBOARD_CONFIG)

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
    <Router>
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
    </Router>
  )
}

export default App
