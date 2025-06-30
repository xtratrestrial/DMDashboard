# Loot Factory Web Application

A full-stack D&D 5e treasure generation system with **magical AND mundane items** following the exact official DMG 2024 methodology.

## 🎯 Features

- **✨ Magic Items**: 629+ items from 6 official D&D sources
- **💰 Mundane Treasure**: Coins (CP, SP, EP, GP, PP) based on Challenge Rating
- **🎲 Official Methodology**: Follows exact DMG 2024 treasure generation rules
- **📊 Tier-Based Scaling**: CR 0-4 (Tier 1) through CR 17-20 (Tier 4)
- **🏛️ Individual vs Hoard**: Different generation modes for different treasure types
- **🎨 Beautiful D&D Theme**: Fantasy fonts, colors, and responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm 8+
- All dependencies in package.json files

### 1. Start the Backend API

```bash
cd backend
npm install
npm run dev
```

The API will start on `http://localhost:3001` with endpoints:
- `GET /health` - Server health check
- `POST /api/generate` - Generate treasure
- `GET /api/items` - Browse magic items
- `GET /api/stats` - Item statistics
- `GET /api/cr/:cr/recommendations` - CR-based recommendations

### 2. Start the Frontend React App

```bash
cd frontend
npm install
npm run dev
```

The web app will start on `http://localhost:5173` (Vite default)

### 3. Generate Treasure! 🎲

Open your browser and:
1. Set Challenge Rating (0-20)
2. Set Party Level (1-20) 
3. Choose Individual or Hoard generation
4. Toggle mundane treasure and/or magic items
5. Click "⚔️ Generate Treasure"

## 📁 Project Structure

```
web-app/
├── backend/                 # Node.js + Express + TypeScript API
│   ├── src/
│   │   └── index.ts        # Main server with treasure generation logic
│   ├── package.json        # Backend dependencies
│   └── tsconfig.json       # TypeScript configuration
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── App.tsx         # Main React component
│   │   ├── App.css         # D&D-themed styling
│   │   └── banner.webp     # Header background image
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
└── docker/                 # Future Docker deployment
```

## 🎮 API Usage

### Generate Treasure Example

```bash
curl -X POST http://localhost:3001/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "challenge_rating": 10,
    "party_level": 8,
    "generation_type": "hoard",
    "include_mundane": true,
    "include_magic": true
  }'
```

Response includes:
- **Coins**: CP, SP, EP, GP, PP amounts
- **Magic Items**: Name, rarity, value, source
- **Total Value**: Combined treasure worth in GP
- **Generation Method**: How treasure was calculated

## 🎯 Official D&D Methodology

This system follows the **exact** treasure generation rules from the DMG 2024:

### Challenge Rating Tiers
- **Tier 1** (CR 0-4): Mostly common items, modest coin amounts
- **Tier 2** (CR 5-10): Common/uncommon items, moderate wealth
- **Tier 3** (CR 11-16): Uncommon/rare items, substantial treasure
- **Tier 4** (CR 17-20): Rare/very rare/legendary items, vast hoards

### Rarity Weighting by Tier
| Tier | Common | Uncommon | Rare | Very Rare | Legendary |
|------|--------|----------|------|-----------|-----------|
| 1    | 70%    | 25%      | 5%   | 0%        | 0%        |
| 2    | 40%    | 45%      | 15%  | 0%        | 0%        |
| 3    | 15%    | 40%      | 35%  | 10%       | 0%        |
| 4    | 5%     | 25%      | 40%  | 25%       | 5%        |

### Coin Generation by Tier
- **Individual Treasure**: Modest amounts appropriate for single encounters
- **Treasure Hoards**: Substantial wealth for major milestones

Example CR 10 Hoard:
- 200-1,200 CP
- 2,000-12,000 SP  
- 600-3,600 GP
- 30-180 PP
- 1-3 Magic Items

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev        # Development with hot reload
npm run build      # Build TypeScript to JavaScript
npm run start      # Production mode
npm run type-check # Check TypeScript without building
```

### Frontend Development
```bash
cd frontend
npm run dev        # Development server with hot reload
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint checks
```

## 📊 Data Sources

- **534 DMG 2024 Items** with official pricing
- **95+ Additional Items** from Xanathar's, Tasha's, Fizban's, Eberron, Spelljammer, Planescape
- **19 DMG Tables** with exact d100 roll ranges
- **11 Spell Scrolls** with level determination
- **Advanced Mechanics**: Giant Strength potions, Enspelled items, variant selection

## 🎨 Design Features

- **Fantasy Typography**: Bebas Neue, Crimson Text, Libre Baskerville
- **D&D Color Palette**: Parchment backgrounds, deep reds, forest greens
- **Rarity Badges**: Color-coded common through legendary items
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and loading states

## 🔮 Future Enhancements

- **Gems & Art Objects**: Detailed treasure components
- **3rd Edition Pricing**: Economic analysis and comparison tools
- **Spell Scroll Generation**: Auto-determine spell levels and selections
- **Custom Collections**: Save and organize favorite items
- **PDF Export**: Generate printable treasure sheets
- **VTT Integration**: Export to Roll20, Foundry VTT, etc.

## 🏴‍☠️ Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the coding guidelines in the main project README
4. Test your changes with both backend and frontend
5. Submit a Pull Request

## 📜 License

MIT License - Built with ❤️ for the D&D 5e community

---

**Ready to generate epic loot from 629+ magic items! 🎲✨** 