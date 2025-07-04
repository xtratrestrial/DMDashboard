# LootFactory Backend - Production Dockerfile
FROM node:18-alpine

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev) for build
RUN npm ci

# Copy source code
COPY . .

# Install Python dependencies for name generator
RUN pip3 install --no-cache-dir -r name-generator/requirements.txt || echo "No requirements.txt found"

# Build TypeScript
RUN npm run build

# Remove devDependencies for a smaller image
RUN npm prune --production

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start the application
CMD ["npm", "start"] 