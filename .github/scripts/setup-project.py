#!/usr/bin/env python3
"""
Manual setup script for GitHub Project management.
Run this to initialize the project without waiting for GitHub Actions.
"""

import subprocess
import sys
import os
from pathlib import Path

def run_script(script_name: str, description: str):
    """Run a Python script and handle errors."""
    script_path = Path(__file__).parent / script_name
    
    print(f"🚀 {description}...")
    
    try:
        result = subprocess.run([sys.executable, str(script_path)], 
                              capture_output=True, text=True, check=True)
        print(result.stdout)
        if result.stderr:
            print(f"⚠️ Warnings: {result.stderr}")
        print(f"✅ {description} completed")
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed:")
        print(f"Exit code: {e.returncode}")
        print(f"Error output: {e.stderr}")
        print(f"Standard output: {e.stdout}")
        return False
    except FileNotFoundError:
        print(f"❌ Script not found: {script_path}")
        return False
    
    return True

def check_requirements():
    """Check if all requirements are met."""
    print("🔍 Checking requirements...")
    
    # Check for GitHub token
    if not os.environ.get('GITHUB_TOKEN'):
        print("❌ GITHUB_TOKEN environment variable not set")
        print("   Please set it with: export GITHUB_TOKEN=your_token_here")
        return False
    
    # Check for Python packages
    try:
        import requests
        print("✅ Python requests package available")
    except ImportError:
        print("❌ Python requests package not found")
        print("   Please install with: pip install requests")
        return False
    
    # Check for roadmap file
    if not Path('ROADMAP.md').exists():
        print("❌ ROADMAP.md file not found")
        print("   Please ensure you're running this from the project root")
        return False
    
    print("✅ All requirements met")
    return True

def main():
    """Main setup function."""
    print("🎲 DMDashboard GitHub Project Setup")
    print("===================================")
    
    # Check requirements
    if not check_requirements():
        print("\n❌ Setup failed - requirements not met")
        return 1
    
    # Create necessary directories
    print("\n📁 Creating directories...")
    Path('.github/project-data').mkdir(parents=True, exist_ok=True)
    print("✅ Directories created")
    
    # Run setup scripts in order
    scripts = [
        ('parse-roadmap.py', 'Parsing roadmap'),
        ('update-labels.py', 'Setting up repository labels'),
        ('sync-to-project.py', 'Creating GitHub project and issues'),
    ]
    
    print(f"\n🔄 Running {len(scripts)} setup scripts...")
    
    for script, description in scripts:
        if not run_script(script, description):
            print(f"\n❌ Setup failed at: {description}")
            return 1
        print()  # Add spacing between scripts
    
    print("🎉 GitHub Project setup completed successfully!")
    print("\n📋 Next Steps:")
    print("1. Visit your GitHub repository to see the new project")
    print("2. Customize the project board layout as needed")
    print("3. Start working on Phase 1 tasks")
    print("4. The project will auto-sync when you push changes to ROADMAP.md")
    
    return 0

if __name__ == '__main__':
    exit_code = main()
    sys.exit(exit_code) 