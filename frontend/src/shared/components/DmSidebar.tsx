import React from 'react';
import type { DmSidebarConfig, DmTool } from './DmSidebarConfig';
import './DmSidebar.css';

interface DmSidebarProps {
  config: DmSidebarConfig;
  isCollapsed?: boolean;
  onCollapseToggle?: () => void;
}

export const DmSidebar: React.FC<DmSidebarProps> = ({ 
  config, 
  isCollapsed = false, 
  onCollapseToggle 
}) => {
  const handleToolClick = (tool: DmTool) => {
    if (!tool.isAvailable) return;
    
    if (tool.url) {
      // External tool navigation
      window.open(tool.url, '_blank');
    } else {
      // Internal tool change
      config.onToolChange?.(tool.id);
    }
  };

  const formatLastSession = (lastSession?: string) => {
    if (!lastSession) return 'No recent sessions';
    const date = new Date(lastSession);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday'; 
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <aside className={`dm-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Header */}
      <div className="dm-sidebar-header">
        <div className="dm-sidebar-logo">
          <span className="logo-icon">🎲</span>
          {!isCollapsed && (
            <div className="logo-text">
              <h1>{config.projectName}</h1>
              <span className="version">v{config.projectVersion}</span>
            </div>
          )}
        </div>
        
        <button 
          className="collapse-toggle"
          onClick={onCollapseToggle}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Campaign Info Section */}
      {config.campaignInfo && !isCollapsed && (
        <div className="dm-sidebar-section">
          <div className="section-content">
            <div className="campaign-info">
              <h3>{config.campaignInfo.name}</h3>
              <div className="campaign-stats">
                <div className="stat">
                  <span className="stat-label">Players:</span>
                  <span className="stat-value">{config.campaignInfo.playerCount}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Avg Level:</span>
                  <span className="stat-value">{config.campaignInfo.averageLevel}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Last Session:</span>
                  <span className="stat-value">{formatLastSession(config.campaignInfo.lastSession)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tools List - Direct display without section header */}
      <div className="dm-sidebar-section">
        <div className="section-content">
          <div className="tools-list">
            {config.tools.map((tool) => (
              <button
                key={tool.id}
                className={`tool-item ${tool.isActive ? 'active' : ''} ${!tool.isAvailable ? 'disabled' : ''}`}
                onClick={() => handleToolClick(tool)}
                disabled={!tool.isAvailable}
                title={tool.description}
              >
                <span className="tool-icon">{tool.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="tool-name">{tool.name}</span>
                    {tool.comingSoon && (
                      <span className="coming-soon-badge">Soon</span>
                    )}
                    {tool.badgeCount && tool.badgeCount > 0 && (
                      <span className="notification-badge">{tool.badgeCount}</span>
                    )}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Info Section */}
      {config.userInfo && !isCollapsed && (
        <div className="dm-sidebar-section">
          <div className="section-content">
            <div className="user-info">
              <div className="user-avatar">
                {config.userInfo.avatar ? (
                  <img src={config.userInfo.avatar} alt="DM Avatar" />
                ) : (
                  <div className="default-avatar">🧙‍♂️</div>
                )}
              </div>
              <div className="user-details">
                <h3>{config.userInfo.dmName}</h3>
                <button 
                  className="settings-button"
                  onClick={config.onSettingsOpen}
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {!isCollapsed && (
        <div className="dm-sidebar-footer">
          <div className="footer-content">
            <p className="footer-text">Powered by D&D 5e</p>
            <p className="footer-subtext">DMG 2024 Methodology</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default DmSidebar; 