# Foundry VTT API Overview

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
