# Release 10.262 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.262

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.262


## Version 10 Prototype


##### April 29, 2022


## Foundry Virtual Tabletop - Version 10 Prototype 2 Release Notes

We are extremely excited to bring forward another iteration in the prototype cycle for Version 10. The primary focus of this prototype version has been on introducing sweeping changes for our Journal Entry system, as well as refining a number of the more significant changes to Document Data from Prototype 1. For a more comprehensive breakdown highlighting some of the newest changes in summary, please see below.

Version 10 has focused on further improvements to our data architecture, introducing Journals V2 (as voted by you, our Patreon subscribers), and a new Tours interface for improving the experience of new users. In addition, there has been a fire burning in secret within our lighting and vision system that will bring some surprises to canvas rendering. We hope you will all enjoy the wide variety of changes coming in V10 as these new features becomes more visible to the public!

WARNING:Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

Be certain to carefully back up any critical user data before installing this update.


## Update Highlights

As is often the case with builds in the Prototype cycle, V10 Prototype 2 brings a lot of changes in a lot of separate areas. In addition to introducing some of the first changes in support of Journals V2 and Tours, this update introduces a new structure for Canvas layers and a series of changes to help smooth the transition for the Document Data refactor. In addition, we managed to sweep through some bug fixes from Prototype 1 and some lingering non-critical bugs from V9's stable branch to resolve them here.


#### Data Structure Changes

Continuing the revision of our Document Data infrastructure, we have implemented a number of changes based on feedback from community developers during Prototype 1. In the interest of standardization, we have refactored several Data handling functions within the API, including changes to fields within our Manifest JSON structure for packages. It is strongly recommended that community developers review the Breaking Changes and API Improvements sections within these notes and experiment with the impact of these changes within their own packages. Further feedback in this area during the Prototype phase is essential for ensuring a smooth transition for community created packages.


#### Journals V2

This build introduces the first steps in our push toward the latest iteration on our Journals system, including a variety of new API changes and standardization of current API features. This iteration brings support for embedded JournalEntryPage documents which will become a foundational part of Journal Entries going forward, including permission for these embedded pages to be visible on a per-user basis. There's still a lot more coming in this line and the changes are shaping up quite nicely for Prototype 3.

`JournalEntryPage`
#### Tours and the New User Experience

Hard at work in the dungeon of UX and UI, our development team has implemented the first in what we hope to be a series of tutorials which offer guidance to new users on program usage. Not only does the new tours system work in conjunction with the improved Tooltip features added during Prototype 1, it also provides an extensible API allowing community developers to construct their own interactive tutorials for their users. The first step in this direction offers a guided walkthrough of the Setup page, but look forward to even more in the next few versions!


#### Lighting Overhaul Continued

You may have all thought there was no way we would bring more lighting and vision upgrades in V10 after doing so in V7, V8 and V9...but we wanted to keep that cycle going. Atropos and Secretfire have been deep in the well of mathematical knowledge, finding new ways to make the lighting engine more performant so that we can cram even more features into it. Beginning with a restructuring of canvas layers to support future plans for handing canvas levels, new effects layers, and much more, this update also includes changes to the fog of war layer. Look forward to more performance increases and features coming in future updates!


## Breaking Changes

There have been a significant number of breaking changes in Document and Data models from V9 to V10. For an overview of what breaking has changed since V10p1 please see: (6849)


### Architecture and Infrastructure

- 36 separate deprecated methods and classes have been removed and are no longer supported in the V10 API. (6738)
- PixiJS has been updated to version 6.3.0 and we have adapted a number of new new techniques for culling, intersection testing, and rounded rectangle support. (6887)
- A number of core dependencies have been updated. (6960)
- The name field in manifest JSON files (including the dependency field) is being deprecated in favor of id, to reduce confusion about its purpose. There will be a deprecation period for this change and it will become enforced in Version 11. (7009)
- The author field in manifest JSON is being deprecated in favor of authors in the interest of offering a single standardized way to present the author or authors of a package. (7010)

`name``id``author``authors`
### Documents and Data

- FormDataExtended has been improved and now automatically produces a correctly-typed object as FormDataExtended#object instead of FormDataExtended#toObject. This addresses several issues with incorrect handling of field types. (6986)
- DragData creation and consumption workflows have been streamlined by using UUIDs in the interest of providing a more standardized approach across all Document types. (6990) (6166)

`FormDataExtended``FormDataExtended#object``FormDataExtended#toObject``DragData`
### The Game Canvas

- The structure of the EffectsCanvasGroup has been refactored to remove the reliance on canvas layers for components of the canvas scene which should always be rendered without interactivity. (7013)
- A new document data field for TEXTURE_DATA has been introduced which standardizes how canvas-rendered textures are stored. This approach replaces the current storage of texture data as an assorted set of fields in various canvas document data classes. (6455)

`EffectsCanvasGroup``TEXTURE_DATA`
## New Features


### Architecture and Infrastructure

- Package definitions have been improved and now use the new DataModel specification shared between client and server with added package manifest functionality improvements. (6504)

`DataModel`
### Documents and Data

- Vision rendering may now produce effects in the background effects canvas layer. (6703)
- Vision Modes now support the use of shaders, which may affect Background and Illumination. These shaders are extensible, allowing module and system developers to add their own. (6704)


### The Game Canvas

- Light source animations are no longer disabled when creating or dragging a light source. (7021)
- It is now possible to use specialized shaders which apply to the entire canvas (excluding the UI/HUD). (6705)
- Fog of War processing has been moved from the backend to the effects group of the canvas. (7014)
- The drop shadow blur for PIXI.TextStyle has been reduced to account for upstream changes in how PIXI was computing drop shadow values. (6987)

`PIXI.TextStyle`
### Interface and Applications

- The Setup menu now provides the option for a guided tutorial introducing the setup screen to new users. (6501)


## API Improvements


### Architecture and Infrastructure

- INDEX_FIELDS has been relocated, and has become a key within Document.metadata instead of residing within the CompendiumCollection class. Additionally, the set of fields which are indexed may now be extended as part of the CONFIG[documentName].compendiumIndexFields data structure. (6152)
- As part of efforts to standardize drag and drop API workflows, dragData now uses a single Document UUID instead of individual document ids such as actorId. (6581)
- As part of the effort to standardize UUID operations, fromUuid now supports async operations. (5364)
- In the interest of making sanitization of user-provided HTML input more streamlined, HTMLField has been implemented, which extends StringField, replacing the previous server-side pre-hooks approach. (6835)
- DataModel.sanitizeInput has been introduced as a new workflow which calls a field-level sanitization procedure for a provided set of changed fields. This can be used for both HTMLField and FilePathField. (6836)
- A compatibility warning allow-list filter has been implemented as a new debugging tool. This allows use of a regular expression which the stack trace of a compatibility warning must match or be ignored. This allows community devs to ONLY target warnings originating from their own code. (6890)

`INDEX_FIELDS``Document.metadata``CompendiumCollection``CONFIG[documentName].compendiumIndexFields``dragData``actorId``fromUuid``HTMLField``StringField``DataModel.sanitizeInput``HTMLField``FilePathField`
### Documents and Data

- Document update operations now support passing a DataModel instance directly and correctly processes the instance contents. (6912)
- A new JournalEntryPage embedded Document type has been added, bringing support for more granular permissions and system-level page types. (6945)
- Child JournalEntryPage documents now support the configuration ofindividual ownership permissions, with them inheriting ownership from the parent by default. (7015)
- StringField and NumberField entries may now be blank or nullable. (6959)

`DataModel``JournalEntryPage``JournalEntryPage``StringField``NumberField`
### The Game Canvas

- To support more visual effects at a Canvas level, the hierarchy of Canvas layers has been refactored. This implements the building blocks for a number of planned future features. (6965)
- The PlaceablesLayer is now initialized earlier as part of the aforementioned canvas layer organization. (6227)
- Public getters for CanvasLayer#_active, PlaceableObject/Layer#_hover, and PlaceableObject#_controlled have been added. (6969)

`PlaceablesLayer``CanvasLayer#_active``PlaceableObject/Layer#_hover``PlaceableObject#_controlled`
### Interface and Applications

- Tooltips now use a more state-aware approach to prevent over-occurrence of animations. (6886)
- Tooltip text from a data-attribute now supports and correctly renders included HTML. (7002)
- Backwards compatibility has been added to support the Font Awesome 5 free package. (6893)
- Embedded items may now be linked using dynamic links, using the new UUID approach. (7003)
- Application#activateTab has been added, bringing support for programmatically switching tabs within a specified Application instance. (7018)

`data-attribute``Application#activateTab``Application`
## Documentation Improvements

- Our API documentation solution has been overhauled. We are migrating from JSDoc, which is no longer actively maintained, to TypeDoc which supports a much more robust set of documentation options. (6989)
- An issue related to a mislabeled JSDoc string in worker.js has been resolved. (6910)
- NotesLayer#_onMouseDown has had its JSDoc string corrected to align more clearly with the code. (7004)

`NotesLayer#_onMouseDown`
## Bug Fixes


### Architecture and Infrastructure

- A migration issue incorrectly resulted in paths for localization fields within JSON Manifests being changed to invalid paths. This issue has been resolved. (6916)
- To resolve some edge cases in Hooks which could result in conflicts when a single function was registered for multiple events, the internal data structures and storage used by Hooks have been redesigned. (6977)
- An issue with an out of date API call for socket.io has been corrected, and logged messages for successful socket reconnection should once again occur. (7006)

`socket.io`
### Documents and Data

- Resolved an issue which could cause thumbnails for duplicated MP4 scenes to show a previously existing Thumbnail. (6947)
- Compendium indexing no longer results in additional unnecessary getIndex calls. (6975)
- An API issue which caused Folder data to incorrectly include a .content attribute when preparing sidebar directory trees has been resolved. (6949)

`getIndex``.content`
### The Game Canvas

- AbstractBaseMaskFilter now correctly handles adaptive resolution and multisample properties inherited from AbstractFilter. (6829)
- GlowFilter#fragmentShader has been refactored as part of canvas effect changes and no longer causes issues with AbstractFilter. (6937)
- Some lingering issues with the implementation of PolyMesher triangulation have been addressed by a refactor. (6889)
- Resolved an issue with the channel balancing of darkness in channels.canvas and app.renderer.backgroundColor which could cause scene darkness to be duplicated. (6884)
- shiftY and shiftX for scenes no longer incorrectly interpret X and Y values. (6917)
- TileDocument no longer produces an error on construction. (6918)
- A pair of issues which would cause HTML in speech bubble animations to be displayed for an incorrect amount of time have been addressed. (6985)
- Drawing#normalizeShape once again de-dupes points as expected. (7008)
- An upstream issue in PIXI which caused animated tiles and tokens to display a single frame of black before looping has been resolved. (5336)

`AbstractBaseMaskFilter``AbstractFilter``GlowFilter#fragmentShader``AbstractFilter``PolyMesher``channels.canvas``app.renderer.backgroundColor``shiftY``shiftX``TileDocument``Drawing#normalizeShape`
### Interface and Applications

- Double-clicking a keybind assignment in the Configure Controls application no longer results in a thrown error. (6908)
- To correct an issue with undefined titles for Canvas document types, the SheetConfiguration application has been reconfigured to provide proper sheet titles for all document types. (6974)
- A sorting issue with the Map Note icon list has been resolved. (7005)
- An issue with File Picker selection not correctly triggering change events for the corresponding file path field has been resolved. (7012)

`SheetConfiguration`
### Dice System

- Roll.dice should no longer unnecessarily duplicate terms in the ChatMessage.rolls array following an update. (6907)

`Roll.dice``ChatMessage.rolls`