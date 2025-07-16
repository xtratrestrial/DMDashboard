#!/usr/bin/env python3
"""
Data Organization Script for Foundry VTT API Documentation

This script reorganizes the scraped data into a structured format optimized for AI agents.
"""

import os
import shutil
import re
from pathlib import Path

def create_directory_structure():
    """Create the organized directory structure"""
    directories = [
        "organized/api/classes",
        "organized/api/modules", 
        "organized/api/index",
        "organized/articles",
        "organized/releases",
        "organized/auth",
        "organized/other"
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"Created directory: {directory}")

def categorize_files():
    """Categorize and move files into appropriate directories"""
    data_dir = Path("data")
    
    # File categorization patterns
    categories = {
        "api/classes": r"api_classes_.*\.md$",
        "api/modules": r"api_modules_.*\.md$", 
        "api/index": r"api(_index)?\.md$",
        "articles": r"article_.*\.md$",
        "releases": r"releases_.*\.md$",
        "auth": r"auth_.*\.md$",
        "other": r".*\.md$"  # Catch-all for remaining files
    }
    
    moved_files = {cat: [] for cat in categories.keys()}
    
    for file_path in data_dir.glob("*.md"):
        filename = file_path.name
        
        # Determine category
        target_category = "other"  # Default
        for category, pattern in categories.items():
            if re.match(pattern, filename):
                target_category = category
                break
        
        # Move file
        target_dir = Path(f"organized/{target_category}")
        target_path = target_dir / filename
        
        shutil.copy2(file_path, target_path)
        moved_files[target_category].append(filename)
        
        print(f"Moved {filename} -> {target_category}")
    
    return moved_files

def create_index_files(moved_files):
    """Create index files for each category"""
    
    # Create main index
    with open("organized/README.md", "w") as f:
        f.write("# Foundry VTT Documentation - Organized for AI Agents\n\n")
        f.write("This directory contains organized Foundry VTT documentation optimized for AI agent consumption.\n\n")
        
        f.write("## Directory Structure\n\n")
        f.write("- `api/` - API documentation\n")
        f.write("  - `classes/` - Class documentation\n")
        f.write("  - `modules/` - Module documentation\n")
        f.write("  - `index/` - API index and overview\n")
        f.write("- `articles/` - Foundry VTT articles and guides\n")
        f.write("- `releases/` - Release notes and changelogs\n")
        f.write("- `auth/` - Authentication and user-related docs\n")
        f.write("- `other/` - Miscellaneous documentation\n\n")
        
        f.write("## File Counts\n\n")
        for category, files in moved_files.items():
            f.write(f"- {category}: {len(files)} files\n")
    
    # Create category-specific indexes
    for category, files in moved_files.items():
        if not files:
            continue
            
        index_path = f"organized/{category}/README.md"
        with open(index_path, "w") as f:
            f.write(f"# {category.replace('/', ' - ').title()} Documentation\n\n")
            f.write(f"This directory contains {len(files)} files.\n\n")
            
            # Group files by type
            if category == "api/classes":
                f.write("## API Classes\n\n")
                for file in sorted(files):
                    class_name = file.replace("api_classes_", "").replace(".md", "")
                    f.write(f"- [{class_name}]({file})\n")
                    
            elif category == "api/modules":
                f.write("## API Modules\n\n")
                for file in sorted(files):
                    module_name = file.replace("api_modules_", "").replace(".md", "")
                    f.write(f"- [{module_name}]({file})\n")
                    
            elif category == "releases":
                f.write("## Release Notes\n\n")
                for file in sorted(files):
                    version = file.replace("releases_", "").replace(".md", "")
                    f.write(f"- [Version {version}]({file})\n")
                    
            else:
                f.write("## Files\n\n")
                for file in sorted(files):
                    f.write(f"- [{file}]({file})\n")

def create_api_overview():
    """Create a comprehensive API overview file"""
    api_overview = """# Foundry VTT API Overview

## Core Classes

The Foundry VTT API is built around several core classes:

### Document System
- **Document** - Base class for all persistent game objects
- **DataModel** - Data structure for documents
- **DatabaseBackend** - Database operations

### Game Objects
- **Actor** - Characters, NPCs, and creatures
- **Item** - Equipment, spells, and other game items
- **Scene** - Game maps and environments
- **Token** - Visual representations of actors
- **Combat** - Combat encounter management

### User Interface
- **Application** - Base class for UI applications
- **Canvas** - The game map rendering system
- **Hooks** - Event system for modules

## Key Modules

- **CONST** - Constants and configuration
- **CONFIG** - Game configuration settings
- **hookEvents** - Event system documentation
- **foundry** - Core Foundry namespace

## Usage Patterns

### Creating Documents
```javascript
const actor = new Actor(data, options);
await actor.save();
```

### Event Hooks
```javascript
Hooks.on('createActor', (actor, options, userId) => {
    // Handle actor creation
});
```

### Canvas Operations
```javascript
const token = canvas.tokens.get(id);
token.document.update({x: 100, y: 100});
```

## Best Practices

1. Always use the Document API for data operations
2. Use Hooks for event-driven programming
3. Follow the permission system for user actions
4. Use async/await for database operations
5. Test your modules thoroughly

For detailed documentation, see the individual class and module files.
"""
    
    with open("organized/api/OVERVIEW.md", "w") as f:
        f.write(api_overview)

def main():
    """Main organization process"""
    print("Organizing Foundry VTT documentation for AI agents...")
    
    # Create directory structure
    create_directory_structure()
    
    # Categorize and move files
    moved_files = categorize_files()
    
    # Create index files
    create_index_files(moved_files)
    
    # Create API overview
    create_api_overview()
    
    print("\nOrganization complete!")
    print("\nSummary:")
    for category, files in moved_files.items():
        print(f"  {category}: {len(files)} files")
    
    print("\nThe organized data is now in the 'organized/' directory.")
    print("This structure is optimized for AI agents to quickly find and understand Foundry VTT documentation.")

if __name__ == "__main__":
    main() 