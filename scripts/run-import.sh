#!/bin/bash

echo "🚀 Starting GitHub issue import from MASTER_PLAN.md..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if the script exists
if [ ! -f "scripts/import-to-github.js" ]; then
    echo "❌ Import script not found. Please create scripts/import-to-github.js first."
    exit 1
fi

# Run the import
node scripts/import-to-github.js

echo "✅ Import complete!"
echo "📋 Check your GitHub repository for the new issues."
echo "🔄 Linear should automatically sync these issues." 