# Release 13.336 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.336

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.336


## Version 13 Testing


##### February 13, 2025


## Foundry Virtual Tabletop - Version 13 - Testing 1 Release Notes

We are very pleased to announce and share the release of Foundry Virtual Tabletop Version 13 Testing 1 (Build 336), our first release of the Testing Phase for Version 13.

As part of the Testing phase, this update is less focused on new features and more focused on delivering bug fixes and stability to the many new things and Application V2 conversions that we've implemented so far as part of the V13 update cycle.

WARNING:  This Testing update is intended for those dedicated users who wish to test the new features provided in Version 13. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!


## Ember Alpha One and This Release

The V13 Testing 1 update is especially exciting for us because it marks a major milestone for our Ember project. This build is intended to support the (very rapidly)  upcoming Alpha 1 release release of Ember, which is currently anticipated to happen at some point tomorrow!

Like all Testing releases, V13 Testing 1 is not intended for use in live games except if you are one of our wonderful Ember Alpha backers and you are willing to help put yourself and your players on the testing front lines. Even in this special circumstance, please remember that this is a Testing build, and bugs should be fully expected.

Whether or not you are an Ember Alpha 1 supporter, we'd like to send a huge thank-you to everyone helping us test V13. We appreciate your support, enthusiasm, and patience!

As always, it is very important to back up your user data before any major update. It is strongly recommended to backup your important Worlds before experimenting with the Testing Build. Better yet, consider taking a full Snapshot.


## Breaking Changes


### Architecture and Infrastructure

- Implemented significant changes to CONSTs regarding media, categories, and file extensions, including a type change and some deprecations. Additionally, .webm video files can now be uploaded in video file pickers, but .webm audio files are no longer accepted in audio file pickers. (10814)

`CONST``.webm``.webm`
### Documents and Data

- When changing the type of a Document, the system field must now be either force-replaced (==system: ...) or updated with recursive: false in the same update that changes the type. (11951)

`type``system``==system: ...``recursive: false``type`
## New Features


### Documents and Data

- Removed the 0.5 step size restriction from Token width and height. (12078)
- Changed the flags field to TypedObjectField(ObjectField). (12145)

`flags``TypedObjectField(ObjectField)`
### Applications and User Interface

- Leading spaces in text search (PossibleMatchesTooltip) are now ignored. (11669)
- Set default ApplicationV2 window width and height to "auto". (12130)

`PossibleMatchesTooltip``ApplicationV2`
### The Game Canvas

- The token is now force-teleported if its x, y, elevation, width, height, or shape is changed through the Token config. Previously, the token was treated as if it moved to the new position. (12159)

`x``y``elevation``width``height``shape`
### Other Changes

- Updated minimum required browser versions. New minimum versions: Electron 33, Chromium 122, and Firefox 127. (12110)
- Migrated flags.exportSource to _stats.exportSource. (12152)

`flags.exportSource``_stats.exportSource`
## API Improvements


### Documents and Data

- Improved custom ChatMessage subtypes so that they can now control their own rendering workflows. (11984)
- Changed SceneDimensions#rect and SceneDimensions#sceneRect from {x, y, width, height} to PIXI.Rectangle. (12157)

`ChatMessage``SceneDimensions#rec``SceneDimensions#sceneRect``{x, y, width, height}``PIXI.Rectangle`
### Applications and User Interface

- Improved the process of fetching and caching Handlebars templates. (10423)
- Converted CardsConfig to ApplicationV2. (11329)
- Converted CardsHand to ApplicationV2. (11331)
- Converted CardsPile to ApplicationV2. (11332)

`CardsConfig``ApplicationV2``CardsHand``ApplicationV2``CardsPile``ApplicationV2`
### The Game Canvas

- Improved optimization for LOS polygon creation by allowing creation of PointSourcePolygon with precomputed config.boundingBox. (12158)

`PointSourcePolygon``config.boundingBox`
### Other Changes

- Added hooks for DocumentDirectory#_getEntryContextOptions and DocumentDirectory#_getFolderContextOptions, allowing modules to extend those menus. (11985)

`DocumentDirectory#_getEntryContextOptions``DocumentDirectory#_getFolderContextOptions`
## Bug Fixes


### Documents and Data

- Document._addDataFieldMigration does not delete old property if nested. (11148)
- Added a safeguard so that the type of TypedSchemaField cannot be changed unless the entire field value is force-replaced (==) or the update is non-recursive (recursive: false). (11864)
- Types are now added before DataModel.migrateData is called so that the current type of TypedSchemaFields is always known, even if they weren't changed in an update. (11866)
- Resolved an issue where flags.core.sourceId was not consistently migrated to _stats.compendiumSource. (11958)
- Resolved an issue where StringField that were configured with choices of type {[choice: string]: {label: string}} were no longer using the provided labels for the generated input element. (12053)
- Resolved an issue where TypedSchemaField#_updateDiff incorrectly used the schema of the old type instead of the new type when type was changed. (12082)
- Prevented a situation where DataModel.LOCALIZATION_PREFIXES could cross-contaminate across multiple models. (12117)
- Updated Roll#toMessage and RollTable#toMessage to properly refer to author instead of user. (12126)
- Resolved an issue where updating DataModel with recursive: false was no longer functioning as intended. (12133)
- Deleting (-=) a required field of a SchemaField now properly throws a validation error. (12135)

`Document._addDataFieldMigration``type``TypedSchemaField``==``recursive: false``DataModel.migrateData``type``TypedSchemaField``flags.core.sourceId``_stats.compendiumSource``StringField``choices``{[choice: string]: {label: string}}``TypedSchemaField#_updateDiff``DataModel.LOCALIZATION_PREFIXES``Roll#toMessage``RollTable#toMessage``author``user``DataModel``recursive: false``-=``SchemaField`
### Applications and User Interface

- Fixed a bug where the "Import Adventure" button in the Adventure Importer was not visible if the description was too long. (12076)
- Fixed a bug where macros in the hotbar could not be removed without deleting the macro. (12079)
- Fixed a bug where drag & drop in Actor sheets only functioned for GM Users. (12085)
- Improved the behavior that occurs when you click a Compendium in the Sidebar that is already open so that the compendium now automatically moves to the front. (12086)
- Improved the default image CSS on the new CardConfig app so that it is better suited for rectangular cards. (12089)
- Resolved an issue where the floating chatbox and notifications disappeared when width of the window was too low. (12093)
- Fixed a bug which was preventing "View Documentation" link in the Settings sidebar from functioning. (12095)
- Fixed a bug that was preventing the popped-out Chat Log sidebar tab from being dragged to a new location. (12101)
- Fixed a bug where the Combat Tracker config failed to open in Safari. (12109)
- Prevented an error that occurred when deleting the currently viewed Scene while the Region legend was open. (12115)
- Removed the "Default Audio Channel" audio channel option from the Playlist config. (12116)
- Prevented an error that occurred when the navigation context menu for a Scene was already open and the Scene's navbar was right-clicked again. (12120)
- The Token config now disables options that don't make sense for type of the grid the Token is in. (12123)
- Previously registered drag/drop events are now properly unregistered if DragDrop is reapplied with new permissions. (12132)
- Fixed a bug where undefined was shown in the progress bar during the scene thumbnail creation process. (12143)
- The Region Legend was changed to display "∞" instead of "Infinity" in the elevation ranges of Regions. (12150)
- Fixed a bug where editing a folder in a Compendium Pack using the Folder Config created a new folder instead of editing the existing one. (12164)

`CardConfig``DragDrop``undefined`
### The Game Canvas

- Fixed an issue where teleported token were animated as if they were moved without teleporting. (12081)
- Resolved an issue where ClockwiseSweepPolygon fails if a wall segment intersects inner/outer scene bounds. (12083)
- Fixed a bug where the "helper lines" created by the GridConfig tool were not removed after exiting the tool. (12090)
- Fixed a bug where the "Create Tile" / "Create Ambient Sound" / "Create Note" previews were not destroyed after the Tile / Ambient Sound / Note was created. (12091)
- Resolved an issue where vision and light sources were not updated when the Token was moved if the Vision Animation setting was disabled. (12102)
- Resolved an issue where moving a token away from a wall could incorrectly leak vision beyond the wall. (12103)
- Resolved an issue where the real-time preview of freehand drawings where not displayed. (12105)
- Resolved an issue where importing data could cause the currently viewed Scene to fail to display until reloaded. (12113)
- Fixed a bug where changing the texture.src of a Token worked once per refresh. (12118)
- Removed an extraneous blank option from the Image Fit Mode dropdown in the Token config. (12124)
- Added missing deprecation for CONFIG.MeasuredTemplate.types. (12148)

`ClockwiseSweepPolygon``GridConfig``texture.src``CONFIG.MeasuredTemplate.types`
### Package Development

- Resolved a Refused to apply style because its MIME type (text/html) is not a supported stylesheet MIME type error that occurred when loading styles. (11748)

`Refused to apply style because its MIME type (text/html) is not a supported stylesheet MIME type`
### Dice and Cards

- Fixed a bug where initiative was always rolled with the default roll mode. (12045)
- Fixed a bug where OperatorTerm was not being properly marked as evaluated during Roll evaluation. (12080)

`OperatorTerm`
### Localization and Accessibility

- Added missing localization in the Ambient Light config related to the "Is Darkness Source" checkbox. (12087)
- Fixed a bug where Compendium labels were no longer localized in the sidebar. (12096)


### Other Changes

- Fixed a bug where game.workers.createWorker did not add routePrefix to the provided scripts argument. (12092)

`game.workers.createWorker``routePrefix`
## Documentation Improvements


### The Game Canvas

- Added documentation for CONFIG.Token.movement.actions. (11885)

`CONFIG.Token.movement.actions`
### Other Changes

- Clarified documentation to indicate that the return value of DataModel#migrateData is not optional. (11949)
- Documented the deprecation of ChatMessageData.type in favour of ChatMessageData.style. (12066)
- Clarified a misleading class annotation for Settings. (12151)

`DataModel#migrateData``ChatMessageData.type``ChatMessageData.style``Settings`