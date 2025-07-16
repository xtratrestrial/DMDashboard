# Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/

- Preparing search index...
- The search index is not available


# Foundry Virtual Tabletop - API Documentation - Version 13

Welcome to the documentation for the client-side API of Foundry Virtual Tabletop, a JavaScript application for running tabletop role-playing games within a self-hosted web framework. The goal of this documentation is to empower developers to create amazing game systems, add-on modules, and scripts which augment and extend the base functionality of the Foundry Virtual Tabletop platform.


## Table of Contents

- Reading these API Docs
- Documents and Data

Document Abstraction
Database Operations
Collections
Primary Document Types

Actor
Adventure
Cards
Chat Message
Combat Encounter
Fog Exploration
Folder
Item
Journal Entry
Macro
Playlist
Rollable Table
Scene
Setting
User


Embedded Document Types

Active Effect
Actor Delta
Ambient Light
Ambient Sound
Card
Combatant
Combatant Group
Drawing
Journal Entry Category
Journal Entry Page
Measured Template
Note
Playlist Sound
Region
Region Behavior
Table Result
Tile
Token
Wall
- Document Abstraction
- Database Operations
- Collections
- Primary Document Types

Actor
Adventure
Cards
Chat Message
Combat Encounter
Fog Exploration
Folder
Item
Journal Entry
Macro
Playlist
Rollable Table
Scene
Setting
User
- Actor
- Adventure
- Cards
- Chat Message
- Combat Encounter
- Fog Exploration
- Folder
- Item
- Journal Entry
- Macro
- Playlist
- Rollable Table
- Scene
- Setting
- User
- Embedded Document Types

Active Effect
Actor Delta
Ambient Light
Ambient Sound
Card
Combatant
Combatant Group
Drawing
Journal Entry Category
Journal Entry Page
Measured Template
Note
Playlist Sound
Region
Region Behavior
Table Result
Tile
Token
Wall
- Active Effect
- Actor Delta
- Ambient Light
- Ambient Sound
- Card
- Combatant
- Combatant Group
- Drawing
- Journal Entry Category
- Journal Entry Page
- Measured Template
- Note
- Playlist Sound
- Region
- Region Behavior
- Table Result
- Tile
- Token
- Wall
- The Game Canvas

Canvas Building Blocks
Canvas Layers
Canvas Objects
HUD Overlay
- Canvas Building Blocks
- Canvas Layers
- Canvas Objects
- HUD Overlay
- User Interface

Application Building Blocks
- Application Building Blocks
- Dice Rolling

Roll Term Types
Dice Types
- Roll Term Types
- Dice Types
- Other Major Components

Audio and Video
Game Management
Video and Voice Chat
Interactivity
- Audio and Video
- Game Management
- Video and Voice Chat
- Interactivity

- Document Abstraction
- Database Operations
- Collections
- Primary Document Types

Actor
Adventure
Cards
Chat Message
Combat Encounter
Fog Exploration
Folder
Item
Journal Entry
Macro
Playlist
Rollable Table
Scene
Setting
User
- Actor
- Adventure
- Cards
- Chat Message
- Combat Encounter
- Fog Exploration
- Folder
- Item
- Journal Entry
- Macro
- Playlist
- Rollable Table
- Scene
- Setting
- User
- Embedded Document Types

Active Effect
Actor Delta
Ambient Light
Ambient Sound
Card
Combatant
Combatant Group
Drawing
Journal Entry Category
Journal Entry Page
Measured Template
Note
Playlist Sound
Region
Region Behavior
Table Result
Tile
Token
Wall
- Active Effect
- Actor Delta
- Ambient Light
- Ambient Sound
- Card
- Combatant
- Combatant Group
- Drawing
- Journal Entry Category
- Journal Entry Page
- Measured Template
- Note
- Playlist Sound
- Region
- Region Behavior
- Table Result
- Tile
- Token
- Wall

- Actor
- Adventure
- Cards
- Chat Message
- Combat Encounter
- Fog Exploration
- Folder
- Item
- Journal Entry
- Macro
- Playlist
- Rollable Table
- Scene
- Setting
- User

- Active Effect
- Actor Delta
- Ambient Light
- Ambient Sound
- Card
- Combatant
- Combatant Group
- Drawing
- Journal Entry Category
- Journal Entry Page
- Measured Template
- Note
- Playlist Sound
- Region
- Region Behavior
- Table Result
- Tile
- Token
- Wall

- Canvas Building Blocks
- Canvas Layers
- Canvas Objects
- HUD Overlay

- Application Building Blocks

- Roll Term Types
- Dice Types

- Audio and Video
- Game Management
- Video and Voice Chat
- Interactivity


# Reading these API Docs


## Public vs Private API


### The Public API

The Public API is our set of methods and properties that we officially support and recommend Package developers to use in their integrations. The Public API comes with a set of promises from Foundry:

- We will provide guidance, documentation, and help with using the Public API
- We will provide deprecation periods when breaking changes are made when possible
- We will make breaking changes to the public API only during certain Phases of a Version, as outlined here

As a team we endeavour to maintain the public API in a state that is as stable and reliable as possible.

```javascript
/*** Part of the Public API, call externally* @public*/async doThing() {}
Copy
```

`/*** Part of the Public API, call externally* @public*/async doThing() {}````javascript
/*** Part of the Public API, don't call externally* @protected*/async _doThing() {}
Copy
```

`/*** Part of the Public API, don't call externally* @protected*/async _doThing() {}`
### The Private API

The Private API is the set of methods and properties that Foundry uses internally to power the software, and explicitly do not support and recommend against Package developers using.

- We may not provide guidance nor help, and documentation will only be our internal docs
- We will not provide deprecation periods or compatibility layers when these functions change
- We may make breaking changes at any point of development, including during the Stable phase

Any modification, overriding, or usage of private API methods should be done at the developers own risk. Packages which touch these private API methods are likely to be inherently less stable and more prone to breakage than packages which only engage with our provided public API.

```javascript
/*** Part of the Private API, don't call at all* @private*/async _doThing() {}
Copy
```

`/*** Part of the Private API, don't call at all* @private*/async _doThing() {}````javascript
/*** Implied part of the Private API, don't call at all*/async _doThing() {}
Copy
```

`/*** Implied part of the Private API, don't call at all*/async _doThing() {}````javascript
/*** Part of the Private API, JS prevents you from calling* @private*/async #doThing() {}
Copy
```

`/*** Part of the Private API, JS prevents you from calling* @private*/async #doThing() {}````javascript
/** * Able to be called externally, but treated as part of the private API * @internal */async _doThing() {}
Copy
```

`/** * Able to be called externally, but treated as part of the private API * @internal */async _doThing() {}`
### What about things that are unclear?

A lot of the Foundry codebase is not explicitly annotated one way or another as to which API it belongs to. The following Code Guidelines will help you navigate our API. As always, please reach out to us on Discord for clarification as well.


# Code Guidelines


## Annotations


### @public

`@public`Methods and properties marked @public may be called both externally and internally. They may only be modified within the class that defines them or a subclass of that parent class.

`@public`
### @protected

`@protected`Methods and properties marked @protected may only be used or modified within the class that defines them or a subclass of that parent class. We do intend for API users to override @protected properties when they are defining a subclass which replaces or extends the behavior of its parent class.

`@protected``@protected`
### @private

`@private`Methods and properties marked @private should not be used or modified except by the class which defined them. For API users, this means that you should not reference or override this property. We may make breaking changes to the code for @private attributes without warning or advance notice, even in software versions which are marked "Stable". Now that JavaScript offers true private methods like #privateMethod we are moving our codebase away from use of the @private annotation entirely. Methods which were previously @private will be, at some point, migrated to become true private methods.

`@private``@private``#privateMethod``@private``@private`
### @internal

`@internal`Methods and properties marked @internal should only be used by the core Foundry VTT codebase and should not be referenced or overridden by external code. This is effectively similar to @private except that @internal methods may be called outside of the context of the class which defines them.

`@internal``@private``@internal`
## Naming Conventions


### _ naming

`_`Methods and properties which begin with an underscore _ and are not otherwise documented with one of the above tags should be treated as @private.

`_``@private`
### # naming

`#`Methods and properties which begin with a # are truly private, and cannot be accessed outside their declaring class. This is enforced by Javascript itself - any attempt to read or write these will cause a syntax error.
MDN reference

`#`
## FAQ


### What is a breaking change?

A breaking change is one that makes existing calls to the API incompatible with the new version.

Periodically it is necessary to make breaking changes to Public API functions in order to introduce new features or correct bugs in existing ones. These breaking changes can make an existing call to the Public API invalid, such as change in return type, removing a parameter, or renaming a method without providing an alias.

Adding a new optional parameter or updating TypeDocs are not considered to be "Breaking" changes. Interior implementation or behavioral changes are also not considered to be "Breaking" changes, such as changing the order elements in a list are returned in, or refactoring a large method to have smaller interior methods.


### How can I request changes and expansions to the Public API?

If something you would like to do can only be done via the Private API, please reach out to us via our Discord channels such as #dev-support and/or create an Issue on our Github outlining what you're trying to do and what issues you're facing, and we will try our best to help or scope future work to better enable what you're doing.


# Documents and Data

Data in Foundry Virtual Tabletop is organized around the concept of Documents. Each document represents a single coherent piece of data which represents a specific object within the framework. The term Document refers to both the definition of a specific type of data (the Document class) as well as a uniquely identified instance of that data type (an instance of that class).

`Document`
## Document Abstraction

- foundry.abstract.DataModel - The abstract base class which defines a data model with corresponding schema and state.
- foundry.abstract.Document - The abstract base class shared by both client and server-side which defines the model for a single document type.


## Database Operations

- foundry.abstract.DatabaseBackend - An interface shared by both the client and server-side which defines how creation, update, and deletion operations are transacted.
- foundry.data.ClientDatabaseBackend - An implementation of the abstract backend which performs client-side CRUD operations.


## Collections

- foundry.documents.abstract.DocumentCollection - An abstract subclass of the Collection container which defines a collection of Document instances.
- foundry.documents.abstract.WorldCollection - A collection of world-level Document objects with a singleton instance per primary Document type.
- foundry.documents.collections.CompendiumCollection - A collection of Document objects contained within a specific compendium pack.


## Primary Document Types

Foundry Virtual Tabletop includes the following primary Document types, each of which is saved to its own database table with within the active World.


### Actor

- foundry.documents.BaseActor - The base Actor model definition which defines common behavior of an Actor document between both client and server.
- foundry.documents.Actor - The client-side Actor document which extends the common BaseActor model.
- foundry.documents.collections.Actors - The singleton collection of Actor documents which exist within the active World.
- foundry.applications.sheets.ActorSheetV2 - The Application responsible for displaying and editing a single Actor document.
- foundry.applications.sidebar.tabs.ActorDirectory - The sidebar directory which organizes and displays world-level Actor documents.


### Adventure

- foundry.documents.BaseAdventure - The base Adventure model definition which defines common behavior of an Adventure document between both client and server.
- foundry.documents.Adventure - The client-side Adventure document which extends the common BaseAdventure model.
- foundry.applications.sheets.AdventureExporter - The Application responsible for exporting a single Adventure document.
- foundry.applications.sheets.AdventureImporterV2 - The Application responsible for importing a single Adventure document.


### Cards

- foundry.documents.BaseCards - The base Cards model definition which defines common behavior of an Cards document between both client and server.
- foundry.documents.Cards - The client-side Cards document which extends the common BaseCards model.
- foundry.documents.collections.CardStacks - The singleton collection of Cards documents which exist within the active World.
- foundry.applications.sheets.CardsConfig - The base Application responsible for displaying and editing a single Cards document.
- foundry.applications.sidebar.tabs.CardsDirectory - The sidebar directory which organizes and displays world-level Cards documents.


### Chat Message

- foundry.documents.BaseChatMessage - The base ChatMessage model definition which defines common behavior of an ChatMessage document between both client and server.
- foundry.documents.ChatMessage - The client-side ChatMessage document which extends the common BaseChatMessage model.
- foundry.documents.collections.ChatMessages - The singleton collection of ChatMessage documents which exist within the active World.
- foundry.applications.sidebar.tabs.ChatLog - The sidebar directory which organizes and displays world-level ChatMessage documents.


### Combat Encounter

- foundry.documents.BaseCombat - The base Combat model definition which defines common behavior of an Combat document between both client and server.
- foundry.documents.Combat - The client-side Combat document which extends the common BaseCombat model.
- foundry.documents.collections.CombatEncounters - The singleton collection of Combat documents which exist within the active World.
- foundry.applications.sidebar.tabs.CombatTracker - The sidebar directory which organizes and displays world-level Combat documents.
- foundry.applications.apps.CombatTrackerConfig - The Application responsible for configuring the CombatTracker and its contents.


### Fog Exploration

- foundry.documents.BaseFogExploration - The base FogExploration model definition which defines common behavior of an FogExploration document between both client and server.
- foundry.documents.FogExploration - The client-side FogExploration document which extends the common BaseFogExploration model.
- foundry.documents.collections.FogExplorations - The singleton collection of FogExploration documents which exist within the active World.


### Folder

- foundry.documents.BaseFolder - The base Folder model definition which defines common behavior of an Folder document between both client and server.
- foundry.documents.Folder - The client-side Folder document which extends the common BaseFolder model.
- foundry.documents.collections.Folders - The singleton collection of Folder documents which exist within the active World.
- foundry.applications.sheets.FolderConfig - The Application responsible for configuring a single Folder document.


### Item

- foundry.documents.BaseItem - The base Item model definition which defines common behavior of an Item document between both client and server.
- foundry.documents.Item - The client-side Item document which extends the common BaseItem model.
- foundry.documents.collections.Items - The singleton collection of Item documents which exist within the active World.
- foundry.applications.sheets.ItemSheetV2 - The Application responsible for displaying and editing a single Item document.
- foundry.applications.sidebar.tabs.ItemDirectory - The sidebar directory which organizes and displays world-level Item documents.


### Journal Entry

- foundry.documents.BaseJournalEntry - The base JournalEntry model definition which defines common behavior of an JournalEntry document between both client and server.
- foundry.documents.JournalEntry - The client-side JournalEntry document which extends the common BaseJournalEntry model.
- foundry.documents.collections.Journal - The singleton collection of JournalEntry documents which exist within the active World.
- foundry.applications.sheets.journal.JournalEntrySheet - The Application responsible for displaying and editing a single JournalEntry document.
- foundry.applications.sidebar.tabs.JournalDirectory - The sidebar directory which organizes and displays world-level JournalEntry documents.


### Macro

- foundry.documents.BaseMacro - The base Macro model definition which defines common behavior of an Macro document between both client and server.
- foundry.documents.Macro - The client-side Macro document which extends the common BaseMacro model.
- foundry.documents.collections.Macros - The singleton collection of Macro documents which exist within the active World.
- foundry.applications.sheets.MacroConfig - The Application responsible for displaying and editing a single Macro document.
- foundry.applications.sidebar.tabs.MacroDirectory - The sidebar directory which organizes and displays world-level Macro documents.


### Playlist

- foundry.documents.BasePlaylist - The base Playlist model definition which defines common behavior of an Playlist document between both client and server.
- foundry.documents.Playlist - The client-side Playlist document which extends the common BasePlaylist model.
- foundry.documents.collections.Playlists - The singleton collection of Playlist documents which exist within the active World.
- foundry.applications.sheets.PlaylistConfig - The Application responsible for configuring a single Playlist document.
- foundry.applications.sidebar.tabs.PlaylistDirectory - The sidebar directory which organizes and displays world-level Playlist documents.


### Rollable Table

- foundry.documents.BaseRollTable - The base RollTable model definition which defines common behavior of an RollTable document between both client and server.
- foundry.documents.RollTable - The client-side RollTable document which extends the common BaseRollTable model.
- foundry.documents.collections.RollTables - The singleton collection of RollTable documents which exist within the active World.
- foundry.applications.sheets.RollTableSheet - The Application responsible for displaying and editing a single RollTable document.
- foundry.applications.sidebar.tabs.RollTableDirectory - The sidebar directory which organizes and displays world-level RollTable documents.


### Scene

- foundry.documents.BaseScene - The base Scene model definition which defines common behavior of an Scene document between both client and server.
- foundry.documents.Scene - The client-side Scene document which extends the common BaseScene model.
- foundry.documents.collections.Scenes - The singleton collection of Scene documents which exist within the active World.
- foundry.applications.sheets.SceneConfig - The Application responsible for configuring a single Scene document.
- foundry.applications.sidebar.tabs.SceneDirectory - The sidebar directory which organizes and displays world-level Scene documents.
- foundry.applications.ui.SceneNavigation - The UI element which displays the Scene documents which are currently enabled for quick navigation.


### Setting

- foundry.documents.BaseSetting - The base Setting model definition which defines common behavior of an Setting document between both client and server.
- foundry.documents.Setting - The client-side Setting model which extends the common BaseSetting model.
- foundry.documents.collections.WorldSettings - The singleton collection of Setting documents which exist within the active World.
- foundry.applications.settings.SettingsConfig - The Application responsible for displaying and configuring registered game Setting documents.
- foundry.applications.sidebar.tabs.Settings - The sidebar tab which displays various game settings, help messages, and configuration options.
- foundry.helpers.ClientSettings - A class responsible for managing defined game settings or settings menus.


### User

- foundry.documents.BaseUser - The base User model definition which defines common behavior of an User document between both client and server.
- foundry.documents.User - The client-side User document which extends the common BaseUser model.
- foundry.documents.collections.Users - The singleton collection of User documents which exist within the active World.
- foundry.applications.sheets.UserConfig - The Application responsible for configuring a single User document.
- foundry.applications.ui.Players - The UI element which displays the list of Users who are currently playing within the active World.


## Embedded Document Types

In addition to the above primary document types, each of which are indexed within their own tables, there are several additional document types which only exist as embedded documents within a parent Document. These embedded documents cannot exist on their own (outside of the context of a parent).


### Active Effect

- foundry.documents.BaseActiveEffect - The base ActiveEffect model definition which defines common behavior of an ActiveEffect document between both client and server.
- foundry.documents.ActiveEffect - The client-side ActiveEffect document which extends the common BaseActiveEffect model.
- foundry.applications.sheets.ActiveEffectConfig - The Application responsible for configuring a single ActiveEffect document within a parent Actor or Item.


### Ambient Light

- foundry.documents.BaseAmbientLight - The base AmbientLight model definition which defines common behavior of an AmbientLight document between both client and server.
- foundry.documents.AmbientLightDocument - The client-side AmbientLight document which extends the common BaseAmbientLight model.
- foundry.applications.sheets.AmbientLightConfig - The Application responsible for configuring a single AmbientLight document within a parent Scene.


### Ambient Sound

- foundry.documents.BaseAmbientSound - The base AmbientSound model definition which defines common behavior of an AmbientSound document between both client and server.
- foundry.documents.AmbientSoundDocument - The client-side AmbientSound document which extends the common BaseAmbientSound model.
- foundry.applications.sheets.AmbientSoundConfig - The Application responsible for configuring a single AmbientSound document within a parent Scene.


### Card

- foundry.documents.BaseCard - The base Card model definition which defines common behavior of an Card document between both client and server.
- foundry.documents.Card - The client-side Card document which extends the common BaseCard model.
- foundry.applications.sheets.CardConfig - The Application responsible for configuring a single Card document within a parent Cards.


### Combatant

- foundry.documents.BaseCombatant - The base Combatant model definition which defines common behavior of an Combatant document between both client and server.
- foundry.documents.Combatant - The client-side Combatant document which extends the common BaseCombatant model.
- foundry.applications.sheets.CombatantConfig - The Application responsible for configuring a single Combatant document within a parent Combat.


### Combatant Group

- foundry.documents.BaseCombatantGroup - The base Combatant model definition which defines common behavior of an Combatant document between both client and server.
- foundry.documents.CombatantGroup - The client-side Combatant document which extends the common BaseCombatant model.


### Drawing

- foundry.documents.BaseDrawing - The base Drawing model definition which defines common behavior of an Drawing document between both client and server.
- foundry.documents.DrawingDocument - The client-side Drawing document which extends the common BaseDrawing model.
- foundry.applications.sheets.DrawingConfig - The Application responsible for configuring a single Drawing document within a parent Scene.


### Journal Entry Category

- foundry.documents.BaseJournalEntryCategory - The base JournalEntryCategory model definition which defines common behavior of an JournalEntryCategory document between both client and server.
- foundry.documents.JournalEntryCategory - The client-side JournalEntryCategory document which extends the common BaseJournalEntryCategory model.
- foundry.applications.sheets.journal.JournalEntryCategoryConfig - The Application responsible for displaying and editing a single JournalEntryCategory document.


### Journal Entry Page

- foundry.documents.BaseJournalEntryPage - The base JournalEntryPage model definition which defines common behavior of an JournalEntryPage document between both client and server.
- foundry.documents.JournalEntryPage - The client-side JournalEntryPage document which extends the common BaseJournalEntryPage model.
- foundry.applications.sheets.journal.JournalEntryPageSheet - The Application responsible for displaying and editing a single JournalEntryPage document.

 foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet
 foundry.applications.sheets.journal.JournalEntryPageImageSheet
 foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet
 foundry.applications.sheets.journal.JournalEntryPagePDFSheet
 foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet
 foundry.applications.sheets.journal.JournalEntryPageTextSheet
 foundry.applications.sheets.journal.JournalEntryPageVideoSheet
- foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet
- foundry.applications.sheets.journal.JournalEntryPageImageSheet
- foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet
- foundry.applications.sheets.journal.JournalEntryPagePDFSheet
- foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet
- foundry.applications.sheets.journal.JournalEntryPageTextSheet
- foundry.applications.sheets.journal.JournalEntryPageVideoSheet

- foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet
- foundry.applications.sheets.journal.JournalEntryPageImageSheet
- foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet
- foundry.applications.sheets.journal.JournalEntryPagePDFSheet
- foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet
- foundry.applications.sheets.journal.JournalEntryPageTextSheet
- foundry.applications.sheets.journal.JournalEntryPageVideoSheet


### Measured Template

- foundry.documents.BaseMeasuredTemplate - The base MeasuredTemplate model definition which defines common behavior of an MeasuredTemplate document between both client and server.
- foundry.documents.MeasuredTemplateDocument - The client-side MeasuredTemplate document which extends the common BaseMeasuredTemplate model.
- foundry.applications.sheets.MeasuredTemplateConfig - The Application responsible for configuring a single MeasuredTemplate document within a parent Scene.


### Note

- foundry.documents.BaseNote - The base Note model definition which defines common behavior of an Note document between both client and server.
- foundry.documents.NoteDocument - The client-side Note document which extends the common BaseNote model.
- foundry.applications.sheets.NoteConfig - The Application responsible for configuring a single Note document within a parent Scene.


### Playlist Sound

- foundry.documents.BasePlaylistSound - The base PlaylistSound model definition which defines common behavior of an PlaylistSound document between both client and server.
- foundry.documents.PlaylistSound - The client-side PlaylistSound document which extends the common BasePlaylistSound model.
- foundry.applications.sheets.PlaylistSoundConfig - The Application responsible for configuring a single PlaylistSound document within a parent Playlist.


### Region

- foundry.documents.BaseRegion - The base Region model definition which defines common behavior of an Region document between both client and server.
- foundry.documents.RegionDocument - The client-side Region document which extends the common BaseRegion model.
- foundry.applications.sheets.RegionConfig - The Application responsible for configuring a single Region document within a parent Scene.


### Region Behavior

- foundry.documents.BaseRegionBehavior - The base RegionBehavior model definition which defines common behavior of an RegionBehavior document between both client and server.
- foundry.documents.RegionBehavior - The client-side RegionBehavior document which extends the common BaseRegionBehavior model.
- foundry.data.regionBehaviors.RegionBehaviorType - The base subtype model of the RegionBehavior document.
- foundry.applications.sheets.RegionConfig - The Application responsible for configuring a single RegionBehavior document within a parent Region.


### Table Result

- foundry.documents.BaseTableResult - The base TableResult model definition which defines common behavior of an TableResult document between both client and server.
- foundry.documents.TableResult - The client-side TableResult document which extends the common BaseTableResult model.


### Tile

- foundry.documents.BaseTile - The base Tile model definition which defines common behavior of an Tile document between both client and server.
- foundry.documents.TileDocument - The client-side Tile document which extends the common BaseTile model.
- foundry.applications.sheets.TileConfig - The Application responsible for configuring a single Tile document within a parent Scene.


### Token

- foundry.documents.BaseToken - The base Token model definition which defines common behavior of an Token document between both client and server.
- foundry.documents.TokenDocument - The client-side Token document which extends the common BaseToken model.
- foundry.applications.sheets.TokenConfig - The Application responsible for configuring a single Token document within a parent Scene.


### Wall

- foundry.documents.BaseWall - The base Wall model definition which defines common behavior of an Wall document between both client and server.
- foundry.documents.WallDocument - The client-side Wall document which extends the common BaseWall model.
- foundry.applications.sheets.WallConfig - The Application responsible for configuring a single Wall document within a parent Scene.


# The Game Canvas

The visual game surface in Foundry Virtual Tabletop is managed by a WebGL-powered canvas which uses the PixiJS library.


## Canvas Building Blocks

The game canvas is constructed using several core building blocks.

- foundry.canvas.Canvas - The master controller of the canvas element upon which the tabletop is rendered.
- foundry.canvas.layers.CanvasLayer - An abstract pattern for primary layers of the game canvas to implement.
- foundry.canvas.layers.InteractionLayer - An extension of CanvasLayer which provides user interactivity for its contained objects.
- foundry.canvas.layers.PlaceablesLayer - A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances, each corresponding to an embedded Document.
- foundry.documents.abstract.CanvasDocumentMixin - A specialized sub-class of the ClientDocumentMixin which is used for document types that are intended to be represented upon the game Canvas.
- foundry.canvas.placeables.PlaceableObject
- foundry.canvas.animation.CanvasAnimation


## Canvas Groups

The first level of canvas hierarchy is the concept of groups which provide top-level containers for various concepts. They are containers that mixin  foundry.canvas.groups.CanvasGroupMixin.

- foundry.canvas.groups.EffectsCanvasGroup - Visual effects which modify the appearance of objects in the PrimaryCanvasGroup.
- foundry.canvas.groups.EnvironmentCanvasGroup - The group containing everything that is not an interface element.
- foundry.canvas.groups.HiddenCanvasGroup - A container for objects which are transformed but not rendered.
- foundry.canvas.groups.InterfaceCanvasGroup - User interface elements which provide interactivity and context but are not tangible objects within the Scene.
- foundry.canvas.groups.OverlayCanvasGroup - The group for elements which are not bound to the stage world transform.
- foundry.canvas.groups.PrimaryCanvasGroup - Tangible objects which exist within the Scene and are affected by lighting and other effects.
- foundry.canvas.groups.RenderedCanvasGroup - A container for objects which are rendered on the canvas.
- foundry.canvas.groups.CanvasVisibility - The group responsible for dynamic vision, lighting, and fog of war.


## Canvas Layers

Within each of the above canvas groups there are a number of layers which provide specific functionality. Canvas layers utilize the following base classes.

- foundry.canvas.layers.CanvasLayer - A base class for all canvas layers.
- foundry.canvas.layers.InteractionLayer - An extension of CanvasLayer which provides user interactivity for its contained objects.
- foundry.canvas.layers.PlaceablesLayer - An extension of InteractionLayer specifically designed for drawing Documents to the canvas.

The following are implementations of canvas layers:


### Within the Effects Canvas Group

- foundry.canvas.layers.CanvasBackgroundAlterationEffects
- foundry.canvas.layers.CanvasColorationEffects
- foundry.canvas.layers.CanvasDarknessEffects
- foundry.canvas.layers.CanvasIlluminationEffects
- foundry.canvas.layers.WeatherEffects


### Within the Interface Canvas Group

- foundry.canvas.layers.ControlsLayer
- foundry.canvas.layers.DrawingsLayer
- foundry.canvas.layers.GridLayer
- foundry.canvas.layers.LightingLayer
- foundry.canvas.layers.NotesLayer
- foundry.canvas.layers.RegionLayer
- foundry.canvas.layers.SoundsLayer
- foundry.canvas.layers.TemplateLayer
- foundry.canvas.layers.TilesLayer
- foundry.canvas.layers.TokenLayer
- foundry.canvas.layers.WallsLayer


## Canvas Objects

Canvas layers contain  foundry.canvas.placeables.PlaceableObject instances which are rendered within that layer. The following are the available object types which may be placed.

- foundry.canvas.placeables.AmbientLight
- foundry.canvas.placeables.AmbientSound
- foundry.canvas.placeables.Drawing
- foundry.canvas.placeables.MeasuredTemplate
- foundry.canvas.placeables.Region
- foundry.canvas.placeables.Tile
- foundry.canvas.placeables.Token
- foundry.canvas.placeables.Note
- foundry.canvas.placeables.Wall


## HUD Overlay

In addition to WebGL canvas layers, there is also support for HTML-based canvas overlay known as "HUD" objects.

- foundry.applications.hud.DrawingHUD
- foundry.applications.hud.TileHUD
- foundry.applications.hud.TokenHUD


# User Interface

In addition to the underlying data and the visual representation of that data on the Canvas, Foundry VTT renders many HTML Applications which represent modular interface components for browsing, editing, or configuring elements of the virtual tabletop.


## Application Building Blocks

The following classes provide high-level building blocks for defining HTML applications within Foundry Virtual Tabletop.

- foundry.applications.api.ApplicationV2
- foundry.applications.api.DialogV2
- foundry.applications.api.DocumentSheetV2
- foundry.applications.apps.FilePicker
- foundry.applications.ux.ContextMenu
- foundry.applications.ux.DragDrop
- foundry.applications.ux.Tabs
- foundry.applications.ux.TextEditor


# Dice Rolling

As a developer, you may often want to trigger dice rolls or customize the behavior of dice rolling. Foundry Virtual Tabletop provides a set of API concepts dedicated towards working with dice.

- foundry.dice.Roll - An interface and API for constructing and evaluating dice rolls.
- foundry.dice.terms.RollTerm - An abstract class which represents a single token that can be used as part of a Roll formula.
- foundry.dice.MersenneTwister - A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator.


## Roll Term Types

- foundry.dice.terms.DiceTerm - An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.
- foundry.dice.terms.FunctionTerm - A type of RollTerm used to apply a function.
- foundry.dice.terms.NumericTerm - A type of RollTerm used to represent static numbers.
- foundry.dice.terms.OperatorTerm - A type of RollTerm used to denote and perform an arithmetic operation.
- foundry.dice.terms.ParentheticalTerm - A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.
- foundry.dice.terms.PoolTerm - A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.
- foundry.dice.terms.StringTerm - A type of RollTerm used to represent strings which have not yet been matched.


## Dice Types

- foundry.dice.terms.Die - A type of DiceTerm used to represent rolling a fair n-sided die.
- foundry.dice.terms.Coin - A type of DiceTerm used to represent flipping a two-sided coin.
- foundry.dice.terms.FateDie - A type of DiceTerm used to represent a three-sided Fate/Fudge die.


# Other Major Components

In addition to the outlined structure above, there are many additional miscellaneous elements of the Foundry Virtual Tabletop API for you to explore. Please browse the sidebar for a complete listing of classes and functions. Some specific classes which are noteworthy or commonly used include:


## Audio and Video

- foundry.audio.AudioHelper - Utilities for working with Audio files.
- foundry.audio.Sound - The Sound class is used to control the playback of audio sources using the Web Audio API.
- foundry.helpers.media.ImageHelper - Utilities for working with Image files.
- foundry.helpers.media.VideoHelper - Utilities for working with Video files.


## Game Management

- foundry.Game - The master controller for the active game instance
- foundry.helpers.GameTime - A singleton class which keeps the official Server and World time stamps.


## Video and Voice Chat

- foundry.av.AVMaster - The master Audio/Video controller instance.
- foundry.av.AVClient - An interface for an Audio/Video client which is extended to provide broadcasting functionality.
- foundry.av.clients.SimplePeerAVClient - An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.


## Interactivity

- foundry.helpers.Hooks - An infrastructure for registering event handlers which fire under specific conditions.
- foundry.helpers.interaction.KeyboardManager - A set of helpers and management functions for dealing with user input from keyboard events.
- foundry.helpers.SocketInterface - Helper functions for dispatching and receiving socket events in a standardized way.


### Settings

- Protected
- Inherited
- Internal


### On This Page

- Table of Contents

- Public vs Private API
- The Public APIThe Private APIWhat about things that are unclear?
- The Public API
- The Private API
- What about things that are unclear?

- The Public API
- The Private API
- What about things that are unclear?

- Annotations
- @public@protected@private@internal
- @public
- @protected
- @private
- @internal
- Naming Conventions
- _ naming# naming
- _ naming
- # naming
- FAQ
- What is a breaking change?How can I request changes and expansions to the Public API?
- What is a breaking change?
- How can I request changes and expansions to the Public API?

- @public
- @protected
- @private
- @internal

- _ naming
- # naming

- What is a breaking change?
- How can I request changes and expansions to the Public API?

- Document Abstraction
- Database Operations
- Collections
- Primary Document Types
- ActorAdventureCardsChat MessageCombat EncounterFog ExplorationFolderItemJournal EntryMacroPlaylistRollable TableSceneSettingUser
- Actor
- Adventure
- Cards
- Chat Message
- Combat Encounter
- Fog Exploration
- Folder
- Item
- Journal Entry
- Macro
- Playlist
- Rollable Table
- Scene
- Setting
- User
- Embedded Document Types
- Active EffectAmbient LightAmbient SoundCardCombatantCombatant GroupDrawingJournal Entry CategoryJournal Entry PageMeasured TemplateNotePlaylist SoundRegionRegion BehaviorTable ResultTileTokenWall
- Active Effect
- Ambient Light
- Ambient Sound
- Card
- Combatant
- Combatant Group
- Drawing
- Journal Entry Category
- Journal Entry Page
- Measured Template
- Note
- Playlist Sound
- Region
- Region Behavior
- Table Result
- Tile
- Token
- Wall

- Actor
- Adventure
- Cards
- Chat Message
- Combat Encounter
- Fog Exploration
- Folder
- Item
- Journal Entry
- Macro
- Playlist
- Rollable Table
- Scene
- Setting
- User

- Active Effect
- Ambient Light
- Ambient Sound
- Card
- Combatant
- Combatant Group
- Drawing
- Journal Entry Category
- Journal Entry Page
- Measured Template
- Note
- Playlist Sound
- Region
- Region Behavior
- Table Result
- Tile
- Token
- Wall

- Canvas Building Blocks
- Canvas Groups
- Canvas Layers
- Within the Effects Canvas GroupWithin the Interface Canvas Group
- Within the Effects Canvas Group
- Within the Interface Canvas Group
- Canvas Objects
- HUD Overlay

- Within the Effects Canvas Group
- Within the Interface Canvas Group

- Application Building Blocks

- Roll Term Types
- Dice Types

- Audio and Video
- Game Management
- Video and Voice Chat
- Interactivity

