# 🎲 Loot Factory - D&D 5e Treasure Generator

A comprehensive D&D 5e magical treasure generation system following official DMG 2024 methodology. Generate balanced loot from **629+ magic items** across 6 official D&D source books.

## ✨ Features

- **629+ Magic Items** from DMG 2024, Tasha's, Eberron, Fizban's, Spelljammer, and Planescape
- **Official DMG 2024 Methodology** for accurate treasure generation
- **Source Book Filtering** with Select All/None toggle
- **Challenge Rating Based Generation** (Individual vs Hoard modes)
- **Professional D&D Theming** with DM's Guild color scheme
- **Export Functionality** (TSV/CSV for spreadsheets)
- **DM Dashboard Integration** - Part of larger DM toolkit ecosystem

## 🚀 Quick Start with Docker (Production)

### Prerequisites
- Docker and Docker Compose installed
- Port 80 available (or modify docker-compose.yml)

### Deploy to Production
```bash
# Clone the repository
git clone <your-repo-url>
cd DMDashboard/LootFactory

# Build and start production containers
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# Check status
docker-compose logs -f

# Access the application
open http://localhost
```

### Stop Production Deployment
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
```

## 🛠️ Development Setup

### Local Development (No Docker)
```bash
# Backend setup
cd web-app/backend
npm install
npm run dev

# Frontend setup (new terminal)
cd web-app/frontend  
npm install
npm run dev

# Access development servers
# Backend: http://localhost:3001
# Frontend: http://localhost:5173
```

### Development with Docker
```bash
# Start development containers with hot reload
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop development containers
docker-compose down
```

## 📊 Architecture

- **Frontend**: React 18 + TypeScript + Vite (Port 80 in production, 5173 in dev)
- **Backend**: Node.js + Express + TypeScript (Port 3001)
- **Data**: JSON files with 629+ structured magic items
- **Deployment**: Docker + nginx proxy + health checks

## 🎯 Data Sources

- **DMG 2024**: 534 magic items with official pricing
- **Tasha's Cauldron**: 47 items (Magic Tattoos, Class Items)
- **Eberron**: 25 items (Dragonmarks, Warforged items)
- **Fizban's Treasury**: 17 items (Dragon Magic)
- **Spelljammer**: 3 items
- **Planescape**: 3 items

## 🐳 Docker Configuration

### Production Images
- **Frontend**: nginx:alpine serving built React app
- **Backend**: node:18-alpine running compiled TypeScript
- **Networking**: Internal Docker network with nginx proxy
- **Health Checks**: Automated container health monitoring
- **Security**: Security headers, gzip compression, asset caching

### Environment Detection
- **Development**: `http://localhost:3001` API calls
- **Production**: Relative URLs through nginx proxy

## 📈 Roadmap

- ✅ **Phase 1**: Data foundation & 629 magic items
- ✅ **Phase 2**: Full-stack web application  
- ✅ **Phase 3**: Source book filtering & Docker deployment
- 🔄 **Phase 4**: Campaign integration & economic analysis
- 📋 **Phase 5**: PDF export & advanced features

## 🔧 Development Commands

```bash
# Build production images
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build

# View container logs
docker-compose logs backend
docker-compose logs frontend

# Execute commands in containers
docker-compose exec backend npm run build
docker-compose exec frontend npm run build

# Clean up containers and images
docker-compose down --rmi all --volumes --remove-orphans
```

## 🎲 Usage

1. **Select Challenge Rating** (0-20) for appropriate treasure level
2. **Choose Generation Type** (Individual vs Hoard)
3. **Filter Source Books** using checkboxes or Select All/None
4. **Generate Treasure** and view detailed results
5. **Export to Spreadsheet** using TSV/CSV export buttons

## 🏛️ DM Dashboard Ecosystem

LootFactory is part of the larger **DM Dashboard** project - a comprehensive D&D toolkit including:
- **Loot Factory**: Treasure generation (this project)
- **Name Generator**: NPC and location names  
- **Foundry Modding**: Module development tools
- **Map Scraper**: Map processing utilities

## 📜 License

MIT License - See LICENSE file for details

---

**Ready to generate epic loot! 🎲✨** 