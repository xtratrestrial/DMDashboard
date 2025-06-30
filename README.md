# 🎲 DM Dashboard - Complete D&D 5e Tool Ecosystem

## 🏛️ **Vision**
A comprehensive suite of interconnected D&D 5e tools designed to streamline Dungeon Master workflows with unified theming, shared components, and seamless navigation between tools.

## 🛠️ **Tools Suite**

### **⚔️ Production Tools**
- **💰 [LootFactory](./LootFactory/)** - Advanced D&D 5e treasure generation
  - 534+ magic items from 6 official source books
  - DMG 2024 methodology with pricing calculator
  - Individual & hoard treasure generation
  - Full-stack React + Node.js application

### **🚧 Tools In Development**
- **🏷️ [Name Generator](./name-generator/)** - NPC and location name generation
- **🗺️ [Map Scraper](./map_scraper/)** - Map extraction and processing tools  
- **🎯 [Foundry Modding](./foundry_modding/)** - FoundryVTT module development tools

## 🎨 **Unified Design System**

### **DM's Guild Color Palette**
- **Background**: `#828282` (Medium Gray)
- **Headers**: `#FAE7C0` (Light Cream)
- **Text**: `#000000` (Black)
- **Accents**: `#B0212B` (Dark Red)
- **Secondary**: `#8B4513` (Brown)

### **Shared Components**
- **DM Dashboard Sidebar** - Extensible navigation across all tools
- **D&D Theming** - Consistent fantasy fonts and styling
- **Toast Notifications** - Auto-expiring user feedback system
- **Professional UI** - Clean, readable interface design

## 🚀 **Quick Start**

### **LootFactory (Ready to Use)**
```bash
# Backend
cd DMDashboard/LootFactory/web-app/backend
npm install
npm run dev  # Runs on localhost:3001

# Frontend  
cd DMDashboard/LootFactory/web-app/frontend
npm install
npm run dev  # Runs on localhost:5173
```

### **Development Setup**
```bash
# Clone the repository
git clone https://github.com/xtratrestrial/DMDashboard.git
cd DMDashboard

# Each tool has its own setup instructions
# See individual tool README files for specific requirements
```

## 📊 **Architecture**

### **Directory Structure**
```
DMDashboard/
├── LootFactory/           # Treasure generation (React + Node.js)
├── name-generator/        # Name generation tools (Python)
├── map_scraper/          # Map processing (Python)
├── foundry_modding/      # FoundryVTT tools (JavaScript)
├── shared/               # Shared components and themes
│   ├── components/       # React components (DmSidebar, etc.)
│   ├── themes/          # CSS themes and color schemes
│   └── assets/          # Shared images and resources
├── docs/                # Unified documentation
└── README.md            # This file
```

### **Technology Stack**
- **Frontend**: React 18, TypeScript, Vite, CSS3
- **Backend**: Node.js, Express, TypeScript
- **Data**: JSON files, SQLite for dynamic data
- **Styling**: Custom CSS with D&D theming
- **Tools**: Python for data processing, JavaScript for web tools

## 🔧 **Features**

### **Cross-Tool Navigation**
- **Unified sidebar** across all tools
- **Tool switching** without losing context
- **Campaign integration** (planned)
- **Shared user preferences** (planned)

### **Professional Quality**
- **Production-ready** LootFactory with 534+ items
- **DMG 2024 compliance** for official D&D rules
- **Extensible architecture** for easy tool addition
- **Clean, readable UI** following accessibility guidelines

## 📈 **Roadmap**

### **Phase 1: Foundation** ✅
- ✅ LootFactory fully functional
- ✅ Extensible DM Dashboard sidebar
- ✅ Unified theming system
- ✅ GitHub repository structure

### **Phase 2: Integration** (Current)
- 🔄 Source book filtering for LootFactory
- 🔄 Campaign management features
- 🔄 Enhanced export options
- 🔄 Cross-tool data sharing

### **Phase 3: Expansion**
- 📋 Name Generator web interface
- 📋 Map tools integration
- 📋 FoundryVTT module suite
- 📋 Unified deployment system

### **Phase 4: Advanced Features**
- 📋 AI-powered DM assistance
- 📋 Campaign automation tools
- 📋 Multi-user collaboration
- 📋 Mobile app development

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow tool-specific guidelines** in individual README files
4. **Maintain unified theming** and component consistency
5. **Submit pull request** with detailed description

## 📄 **License**

MIT License - see individual tool directories for specific licensing information.

## 🎯 **Contact**

- **GitHub**: [xtratrestrial](https://github.com/xtratrestrial)
- **Project**: [DMDashboard](https://github.com/xtratrestrial/DMDashboard)

---

**🎲 Ready to enhance your D&D campaigns with professional-grade tools! ✨** 