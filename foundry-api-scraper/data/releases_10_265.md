# Release 10.265 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.265

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.265


## Version 10 Prototype


##### May 24, 2022


## Foundry Virtual Tabletop - Version 10 Prototype 3 Release Notes

We are happy to release the third update in the prototype cycle for Version 10. The prototype version saw a large number of changes across multiple locations, and includes a wide array of bug fixes. The primary focus of this release however was game canvas organization and vision modes, enhanced package relationships, adventure document UI, and collaborative editing functionality. For a comprehensive breakdown highlighting the newest changes, please see below.

Version 10 as a whole has been focused on further improvements to our data architecture, introducing Journals V2 (as voted on by our Patreon subscribers), adding Visions Modes, and improving User Experience with Tours and various quality of life improvements.

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

Be certain to carefully back up any critical user data before installing this update.


## Update Highlights

Prototype 3 has seen continued iteration on the infrastructure and APIs that underpin Foundry VTT, in particular the Canvas Layers organization has undergone a major overhaul to pave the way for future work around elevation and scene levels in later versions. But there have also been several much more 'visible' changes with much more immediate impact in V10 that we can share:


#### Vision Modes

Prototype 3 introduces the initial vision mode system, menus, and underlying structure necessary to allow actors to have vision modes. These visions modes are incredibly powerful effects that change how the game canvas is rendered to simulate various perception modes such as light amplification goggles, dark vision, sonar, and the like.


#### Package Relationships

We've introduced a new framework for package relationships, replacing the old dependencies structure. This will allow us to add new features in the future, such as optional dependencies for modules.


#### Adventure Documents

Initially introduced as a barebones framework in V9, the adventure document has been getting steady improvement throughout V10's prototype phase to improve its function and usability. This release adds in the Adventure Importer and Exporter UI elements that facilitates the creation and loading of these adventure documents.


#### Collaborative Editing

This update significantly improves the Journals writing system to allow multiple users to edit an open document at the same time without overwriting each other when they save material. This was a major wish list item for the team and the community, and is made possible using the new ProseMirror editor.


## Breaking Changes


### Architecture and Infrastructure

- Introduced new compatibility field for package manifests which replaces the now-deprecated minimumCoreVersion and compatibleCoreVersion fields. (7011)
- Introduced new relationships field for package manifests which replaces the now-deprecated dependencies field. (7075)

`compatibility``minimumCoreVersion``compatibleCoreVersion``relationships``dependencies`
### Documents and Data

- Resolved some data conflicts in the RollTableResult caused by the new DataModel migration. (7116)

`RollTableResult`
### The Game Canvas

- Eliminated container-wise separation of different canvas object types (like tiles and tokens), instead rendering their meshes as zIndex-ordered siblings directly inside the PrimaryCanvasGroup. (7113)
- Generalized the concept of elevation for Tokens and Tiles, eliminating the specialized categorization of "overhead" vs "non-overhead" in favor of a generalized method for z-index sorting and Tile occlusion. (7114)
- Changed the structure of state flags used by the PerceptionManager to flatten the flags to one dimension of depth with efficient tracking for whether a flag is dirty, and added support for flag propagation or resets. (7138)
- Restructured the PrimaryCanvasGroup to contain only the visual representation of objects that are rendered as part of the Scene, moving all interactivity with those objects to layers in the interaction group. (7086)


### Other Changes

- Deprecated isObjectEmpty in favor of isEmpty. (7128)

`isObjectEmpty``isEmpty`
## New Features


### The Game Canvas

- Implemented a feature to allow for pinning a specific journal entry page as a map note. (7104)


### Interface and Applications

- Implemented a ProseMirror editor with collaborative editing capabilities. (7134)
- Implemented a comprehensive API for the creation of custom 'vision modes' which have fine-grained control over every aspect of token vision. (6706)
- Improved the accessibility of the Dialog class by adding role and aria attributes to the element and allowing Tab to cycle through the buttons. (7019)
- Implemented the Adventure Importer UI which loads Adventure documents into a game World. (7069)
- Implemented the Adventure Exporter UI which prepares an Adventure document to be exported from the current game world. (7070)
- Enabled AdventureDocument for use in Compendium packs and added a button in unlocked Adventure Document compendium packs to build a new adventure. (7071)

`Dialog`
## API Improvements


### Architecture and Infrastructure

- Added a Package API method to write the manifest migration to disk. (7123)


### Documents and Data

- Improved ArrayField handling such that when data is provided to it as an object with numeric keys (i.e. from FormDataExtended), that object is flattened  into an array. (7088)

`ArrayField``FormDataExtended`
### The Game Canvas

- Made a change to update Tile occlusion appearance using a debounce so that animated token movements through a tile do not trigger rapid changes in the appearance. This creates a more smooth feeling UX when passing beneath an overhead tile. (7112)
- Made Tile and Drawing resize handles easier to grab by defining a larger hitArea. (7119)
- Improved the efficiency of WallsLayer#identifyWallIntersections by improving the sort logic, and generalized it as a utility function which accepts a callback when intersections are found. (7093)
- Introduced new Canvas class DocumentLayer that extends PlaceablesLayer, and relaxed requirements on the PlaceablesLayer which required Document objects. (6475)
- Updated the workflow for scene/light source/FOW parameters according to Vision Modes options. (6707)
- Reworked the CachedContainer to make providing or acquiring a sprite a more intentional workflow and automatically render the container's sprite if one has been provided. (7085)
- (Re-)Added the ability to pass options into ParticleEffect. (7095)
- Improved the PerceptionManager to abandon the use of a bespoke debounce/throttle mechanism and instead hook into the PIXI Ticker to coordinate when flagged changes should be actioned. (7137)
- Improved the speed of polygon triangulation. (7072)
- Created specialized vision effects shaders to cover many particulars of the vision ecosystem. (7089)
- Introduced a VisionMode class which extends DataModel to define the structure for a vision mode which can be added to CONFIG.Canvas.visionModes and configured for a certain Token. (7099)
- Made a change to avoid unnecessarily re-drawing a Drawing document during drag and drop workflows when only the position changes. (7001)

`DocumentLayer``PlaceablesLayer``PlaceablesLayer``CachedContainer``ParticleEffect``PerceptionManager``VisionMode``DataModel``CONFIG.Canvas.visionModes`
### Interface and Applications

- Implemented an API for rendering JournalEntryPage sheets as part of their parent sheet. (7016)
- Added an option to render a JournalSheet instance to a specific page. (7091)
- Added an async option to TextEditor.enrichHTML allowing for asynchronous inline roll evaluation and fromUuid lookup. (7117)
- Enhanced the Tours API to allow for rendering a dialog in the center of the screen. (6993)
- Implemented a way to register custom enriching logic that will be called as part of the `TextEditor.enrichHTML` process. (3146)

`JournalEntryPage``TextEditor.enrichHTML``fromUuid`
### Other Changes

- Modified the build pipeline to build the commons library into a single rollup bundle which greatly reduces the number of HTTP requests required upon initial load. (7120)


## Documentation Improvements

- Tidied the base Canvas class, improving method signatures and documentation as pre-work before reorganizing canvas layers into the interface group. (7106)

`Canvas`
## Bug Fixes


### Architecture and Infrastructure

- Fixed the Filepicker being unable to upload files on slow upload connections. (6637)
- Fixed worlds are always being labeled with Yellow "Unknown" tag. (7061)


### Documents and Data

- Fixed players being demoted from GM retaining ownership permission over scenes. (6749)
- Fixed updates to attributes (such as hit points) via the Token HUD for unlinked actors not being reflected until a refresh occurs. (6914)
- Fixed creating ActiveEffects using createEmbeddedDocuments failing to save provided data or create an _id. (7090)
- Made a change to apply the data migration to input objects provided to DataModel#data#update which have not yet migrated to DataModel#updateSource. (7036)
- Fixed updates to a SystemDataField not being applied correctly in the case that the system has defined a type-specific system schema. (7082)
- Fixed SchemaField not respecting a configuration of required: false. (7098)

`createEmbeddedDocuments``_id``DataModel#data#update``DataModel#updateSource``SystemDataField``SchemaField``required: false`
### The Game Canvas

- Fixed saved default drawing data not being cleaned to ensure that the stored values of this setting produce valid drawing outcomes. (6913)
- Fixed roof occlusion state being updated too late for the new occlusion state to apply to sight polygons, resulting in sight polygons being one frame behind. (6946)
- Addressed a variety of SpriteMesh issues. It should now behave more like a drop-in replacement for PIXI.Sprite. (7046)
- Fixed the geometry created by PolygonMesher not being compatible with PIXI.Mesh. (7047)
- Fixed an issue with hex grid rendering on odd hex grids with scene padding. (7063)
- Fixed paused tiles being unable to be played again. (7080)
- Fixed the CanvasVisionMask lagging one frame behind. (7101)
- Addressed some instances of PIXI display objects being removed from a parent container but not adequately destroyed to immediately release memory. (7127)
- Fixed a where rulers displayed a small offset on gridless maps. (7131)
- Fixed TemplateLayer#_onDragLeftStart being hard-coded to construct MeasuredTemplate(Document) objects from core the class. (7132)
- Fixed a memory leak in TextureLoader, and additionally cleaned up documentation and code style issues. (7122)

`SpriteMesh``PIXI.Sprite``PolygonMesher``PIXI.Mesh``CanvasVisionMask``TemplateLayer#_onDragLeftStart``MeasuredTemplate(Document)``TextureLoader`
### Interface and Applications

- Fixed the 'Show to Players' function in Journal Entries. (7079)
- Fixed clicking the resize handle without dragging leaving the tile/drawing in the resizing state. (6871)
- Fixed the 'Installation Complete' button at the end of the in-app update process being an active button. (6991)
- Fixed the CSS for the system update notification. (7042)
- Fixed ping locations becoming incorrect after manipulating any <select> box. (7054)
- Fixed Combatant#testUserPermission returning false even for GMs when the Combatant doesn't have an associated actor. (7129)
- Fixed being unable to copy the contents of the macro editor when disabled in some browsers. (7133)
- Fixed pressing No on the confirmation dialog when saving changes in the Configuration Tab of the setup screen temporarily hiding the contents of the tab. (7087)
- Fixed text inputs with data-dtype set to Number not allowing null values. (7109)

`<select>``Combatant#testUserPermission``false``Combatant``data-dtype``Number``null`