# Stage 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files first for better caching
COPY dm-dashboard/package*.json ./
RUN npm install

# Copy the entire dm-dashboard directory
COPY dm-dashboard/ ./

# Copy shared components to the correct location
COPY shared/ ./shared/

# Build the application
RUN npm run build

# Stage 2: Serve the build with a lightweight server
FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"] 