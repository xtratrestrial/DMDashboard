# Loot Factory Web App Architecture

## 🚀 Overview

**Loot Factory** is being redesigned as a modern, containerized web application for generating D&D 5e magical loot. This document outlines the complete architecture for deployment on your server.

## 🏗️ Technology Stack

### **Frontend**
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Headless UI components
- **State Management**: React Context + Zustand for complex state
- **HTTP Client**: Axios with proper error handling
- **Build Tool**: Vite for fast development and optimized builds
- **Testing**: Vitest + React Testing Library

### **Backend**
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 15 for structured data
- **Caching**: Redis 7 for session and generation caching
- **ORM**: Prisma for type-safe database operations
- **Validation**: Zod for request/response validation
- **Testing**: Jest + Supertest

### **Infrastructure**
- **Containerization**: Docker + Docker Compose
- **Reverse Proxy**: Nginx for production
- **Process Management**: PM2 for Node.js processes
- **Monitoring**: Basic health checks and logging
- **SSL**: Let's Encrypt integration ready

## 📁 Project Structure

```
loot-factory-web/
├── frontend/                     # React TypeScript App
│   ├── public/
│   │   ├── index.html
│   │   └── assets/              # Static images, icons
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/             # Basic UI elements
│   │   │   ├── forms/          # Generation forms
│   │   │   ├── results/        # Loot display components
│   │   │   └── layout/         # App layout components
│   │   ├── pages/              # Main application pages
│   │   │   ├── GeneratorPage.tsx
│   │   │   ├── ResultsPage.tsx
│   │   │   └── AboutPage.tsx
│   │   ├── services/           # API integration
│   │   │   ├── api.ts          # Main API client
│   │   │   └── generators.ts   # Generation-specific APIs
│   │   ├── stores/             # State management
│   │   │   ├── appStore.ts     # Global app state
│   │   │   └── generatorStore.ts # Generation state
│   │   ├── types/              # TypeScript definitions
│   │   │   ├── api.ts          # API response types
│   │   │   └── generator.ts    # Generation types
│   │   ├── utils/              # Helper functions
│   │   │   ├── formatting.ts   # Display formatting
│   │   │   └── validation.ts   # Client-side validation
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useGenerator.ts # Generation logic hook
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/                      # Node.js TypeScript API
│   ├── src/
│   │   ├── routes/              # API endpoints
│   │   │   ├── generator.ts     # /api/generate endpoints
│   │   │   ├── items.ts         # /api/items endpoints
│   │   │   └── health.ts        # Health check
│   │   ├── services/            # Business logic
│   │   │   ├── GeneratorService.ts
│   │   │   ├── ItemService.ts
│   │   │   └── ValidationService.ts
│   │   ├── models/              # Database models & types
│   │   │   ├── Item.ts
│   │   │   ├── GenerationRequest.ts
│   │   │   └── index.ts
│   │   ├── utils/               # Utilities
│   │   │   ├── dice.ts          # Dice rolling logic
│   │   │   ├── logger.ts        # Logging configuration
│   │   │   └── cache.ts         # Redis cache helpers
│   │   ├── middleware/          # Express middleware
│   │   │   ├── auth.ts          # Optional authentication
│   │   │   ├── validation.ts    # Request validation
│   │   │   └── errorHandler.ts  # Error handling
│   │   ├── database/            # Database configuration
│   │   │   ├── connection.ts    # DB connection setup
│   │   │   └── migrations/      # Database migrations
│   │   ├── data/                # JSON data files
│   │   │   ├── dmg_2024_tables.json
│   │   │   ├── dmg_2024_items.json
│   │   │   └── xanathar_items.json
│   │   ├── app.ts               # Express app setup
│   │   └── server.ts            # Server entry point
│   ├── prisma/                  # Database schema
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── package.json
│   ├── tsconfig.json
│   └── jest.config.js
├── docker/                       # Container configurations
│   ├── frontend.Dockerfile
│   ├── backend.Dockerfile
│   ├── nginx.conf               # Nginx configuration
│   └── .dockerignore
├── deployment/                   # Deployment scripts
│   ├── docker-compose.yml       # Development setup
│   ├── docker-compose.prod.yml  # Production setup
│   ├── init-db.sql             # Database initialization
│   └── deploy.sh               # Deployment script
├── docs/                        # Documentation
│   ├── API.md                  # API documentation
│   ├── DEPLOYMENT.md           # Deployment guide
│   └── DEVELOPMENT.md          # Development setup
├── .env.example                 # Environment variables template
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### **Core Generation**
```typescript
// Generate loot based on parameters
POST /api/generate
Request: {
  partyLevel: number,
  encounterCR?: number,
  treasureType: 'individual' | 'hoard',
  sources: ('dmg' | 'xanathar')[],
  itemTypes?: ('magic_items' | 'armaments' | 'implements')[],
  rarityOverride?: 'common' | 'uncommon' | 'rare' | 'very_rare' | 'legendary'
}
Response: {
  items: MagicItem[],
  metadata: GenerationMetadata,
  parameters: GenerationRequest
}

// Get item details by ID
GET /api/items/:id
Response: {
  item: MagicItem,
  relatedItems?: MagicItem[]
}

// Search items by name/type
GET /api/items/search?q=...&rarity=...&source=...
Response: {
  items: MagicItem[],
  totalCount: number,
  page: number
}
```

### **Data & Configuration**
```typescript
// Get available sources and their stats
GET /api/sources
Response: {
  sources: {
    id: string,
    name: string,
    itemCount: number,
    rarityDistribution: Record<string, number>
  }[]
}

// Health check for monitoring
GET /api/health
Response: {
  status: 'healthy' | 'degraded' | 'unhealthy',
  uptime: number,
  database: 'connected' | 'disconnected',
  cache: 'connected' | 'disconnected'
}
```

## 🎨 User Interface Design

### **Main Generator Page**
- **Generation Form** (Left sidebar)
  - Party Level slider (1-20)
  - Encounter CR input (optional)
  - Treasure Type radio buttons
  - Source checkboxes (DMG 2024, Xanathar's)
  - Item Type filters
  - "Generate Loot" button

- **Results Display** (Main area)
  - Generated items with beautiful cards
  - Item descriptions with expand/collapse
  - Rarity color coding
  - Source badges
  - Export buttons (JSON, PDF, Text)

- **Item Details Modal**
  - Full item description
  - Mechanical details
  - Related items suggestions
  - Copy to clipboard button

### **Responsive Design**
- **Desktop**: Sidebar + main area layout
- **Tablet**: Collapsible sidebar with overlay
- **Mobile**: Full-width stack layout with sticky generate button

## 🐳 Containerization Strategy

### **Development Setup**
```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: 
      context: .
      dockerfile: docker/frontend.Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - VITE_API_URL=http://localhost:3001
    
  backend:
    build:
      context: .
      dockerfile: docker/backend.Dockerfile
    ports:
      - "3001:3001"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - DATABASE_URL=postgresql://loot:password@postgres:5432/lootfactory
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis
    
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: lootfactory
      POSTGRES_USER: loot
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./deployment/init-db.sql:/docker-entrypoint-initdb.d/init.sql
    
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### **Production Setup**
```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl/certs
    depends_on:
      - frontend
      - backend
    
  frontend:
    build:
      context: .
      dockerfile: docker/frontend.Dockerfile
      target: production
    environment:
      - VITE_API_URL=/api
    
  backend:
    build:
      context: .
      dockerfile: docker/backend.Dockerfile
      target: production
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
    depends_on:
      - postgres
      - redis
    restart: unless-stopped
    
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_prod_data:/var/lib/postgresql/data
    restart: unless-stopped
    
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_prod_data:/data
    restart: unless-stopped

volumes:
  postgres_prod_data:
  redis_prod_data:
```

## 🚀 Deployment Guide

### **Single Command Deployment**
```bash
# Development
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml up -d
```

### **Environment Variables**
```bash
# .env.prod
NODE_ENV=production
DATABASE_URL=postgresql://loot:secure_password@postgres:5432/lootfactory
REDIS_URL=redis://redis:6379
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=https://yourdomain.com
PORT=3001

# Database
POSTGRES_DB=lootfactory
POSTGRES_USER=loot
POSTGRES_PASSWORD=secure_password

# Optional
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100
CACHE_TTL_SECONDS=3600       # 1 hour
```

### **Server Requirements**
- **Minimum**: 2 CPU cores, 4GB RAM, 20GB storage
- **Recommended**: 4 CPU cores, 8GB RAM, 50GB storage
- **Ports**: 80 (HTTP), 443 (HTTPS)
- **OS**: Any Docker-compatible Linux distribution

## 🔒 Security Considerations

### **API Security**
- Rate limiting per IP address
- Request validation with Zod schemas
- CORS configuration for production domain
- Optional JWT authentication for advanced features
- SQL injection prevention via Prisma ORM

### **Container Security**
- Non-root user in containers
- Minimal base images (Alpine Linux)
- No sensitive data in images
- Environment-based configuration
- Regular dependency updates

### **Network Security**
- Nginx reverse proxy
- HTTPS with Let's Encrypt
- Internal container networking
- Database not exposed externally

## 📊 Performance Optimizations

### **Caching Strategy**
- **Redis**: Cache frequent generation results (1 hour TTL)
- **Database**: Index on item rarity, type, and source
- **Frontend**: Local storage for user preferences
- **CDN Ready**: Static assets optimized for CDN delivery

### **Database Optimization**
- Proper indexing on search fields
- Connection pooling
- Query optimization for large datasets
- Background data updates

### **API Performance**
- Response compression (gzip)
- Request deduplication
- Batch operations where possible
- Streaming for large exports

## 🔍 Monitoring & Maintenance

### **Health Checks**
- Database connectivity
- Redis connectivity
- API response times
- Memory and CPU usage

### **Logging**
- Structured JSON logs
- Request/response logging
- Error tracking with stack traces
- Performance metrics

### **Backup Strategy**
- Daily PostgreSQL backups
- Configuration backups
- Easy restore procedures

## 📈 Scaling Considerations

### **Horizontal Scaling**
- Load balancer ready (multiple backend instances)
- Stateless API design
- Shared cache (Redis)
- Database connection pooling

### **Vertical Scaling**
- CPU and memory monitoring
- Container resource limits
- Database performance tuning

---

## 🎯 Next Implementation Steps

1. **Setup Project Structure** - Create the directory layout and base files
2. **Frontend Foundation** - React + TypeScript + Tailwind setup
3. **Backend Foundation** - Express + TypeScript + Prisma setup
4. **Core Generation Logic** - Port Python logic to TypeScript
5. **Container Configuration** - Docker setup for development
6. **Production Deployment** - Full production container stack

**This architecture provides a solid foundation for a professional, scalable D&D loot generation service that will be a joy to use and easy to maintain!** 🎲✨ 