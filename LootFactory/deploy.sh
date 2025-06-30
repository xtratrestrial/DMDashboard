#!/bin/bash

# LootFactory Production Deployment Script
set -e

echo "🎲 LootFactory Production Deployment Starting..."

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo "❌ Error: Docker is not running. Please start Docker and try again."
        exit 1
    fi
    echo "✅ Docker is running"
}

# Function to check if port 80 is available
check_port() {
    if lsof -Pi :80 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  Warning: Port 80 is already in use"
        echo "   You may need to stop other services or modify docker-compose.yml"
        read -p "   Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    else
        echo "✅ Port 80 is available"
    fi
}

# Function to build and deploy
deploy() {
    echo "🏗️  Building production containers..."
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml build --no-cache
    
    echo "🚀 Starting production services..."
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
    
    echo "⏳ Waiting for services to be healthy..."
    sleep 10
    
    # Check if services are running
    if docker-compose -f docker-compose.yml -f docker-compose.prod.yml ps | grep -q "Up"; then
        echo "✅ Services are running successfully!"
        echo ""
        echo "🌐 Access your Loot Factory at: http://localhost"
        echo "📊 Backend health check: http://localhost/health"
        echo ""
        echo "📋 Useful commands:"
        echo "   View logs: docker-compose logs -f"
        echo "   Stop services: docker-compose -f docker-compose.yml -f docker-compose.prod.yml down"
        echo "   Restart: docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart"
    else
        echo "❌ Services failed to start. Check logs with:"
        echo "   docker-compose logs"
        exit 1
    fi
}

# Function to show status
show_status() {
    echo "📊 Current deployment status:"
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml ps
    echo ""
    echo "📋 Container logs (last 20 lines):"
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml logs --tail=20
}

# Function to stop deployment
stop_deployment() {
    echo "🛑 Stopping LootFactory production deployment..."
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
    echo "✅ Deployment stopped"
}

# Function to show help
show_help() {
    echo "LootFactory Deployment Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  deploy    Build and start production deployment (default)"
    echo "  status    Show current deployment status"
    echo "  stop      Stop production deployment"
    echo "  restart   Restart production deployment"
    echo "  logs      Show container logs"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0           # Deploy to production"
    echo "  $0 status    # Check deployment status"
    echo "  $0 stop      # Stop deployment"
}

# Main script logic
case "${1:-deploy}" in
    "deploy")
        check_docker
        check_port
        deploy
        ;;
    "status")
        show_status
        ;;
    "stop")
        stop_deployment
        ;;
    "restart")
        echo "🔄 Restarting LootFactory..."
        docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart
        echo "✅ Restart complete"
        ;;
    "logs")
        docker-compose -f docker-compose.yml -f docker-compose.prod.yml logs -f
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        show_help
        exit 1
        ;;
esac 