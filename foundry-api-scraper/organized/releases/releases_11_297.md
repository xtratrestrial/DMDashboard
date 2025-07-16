# Release 11.297 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.297

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.297


## Version 11 Testing


##### May 11, 2023


## Foundry Virtual Tabletop - Version V11 - Testing 2 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We're excited to bring you the second release in the Feature Testing phase of our development cycle. Feature Testing releases are designed to allow power users and those with strong stomachs to experience new features as we grow closer to a stable release for the general public! V11 Testing 2 is focused on correcting bugs and improving the UX and UI of features newly introduced in Version 11, based on feedback from our development community. If you are interested in providing feedback on these early testing builds, now is the time to check them out! Be cautious, however. Testing builds are not intended for use in weekly games or in heavily-modified Worlds.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights


### Perfect Foundry VTT

While Foundry VTT may not be perfect, it's a bit closer with the latest addition of Eber to our team! Eber is the creator of great modules like Perfect Vision and Advanced Drawing Tools and we're very excited to have him on the team. Despite just starting this week he's already jumped into the deep end and has a number of fixes included in this release! We're looking forward to seeing all of the improvements that his geometric and graphical expertise can bring to the team and how it can help us to keep improving performance and adding new features to Foundry VTT.


### What do you hear Starbuck? Nothing but the rain... and doors.

We have a number of great canvas improvements in this release including an update to the rain weather effect with better visuals and performance with new options to control the style of rain through the API. We have also included two new light animations ("Siren" and "Revolving") to help you make even more dramatic scenes thanks to SecretFire's Free Project Friday work. It's also now possible to control Walls by clicking on the Wall segment and not just their endpoints. You can give it a shot by clicking on all of your doors and setting them up with some of our 8 brand new door sounds courtesy of Cobalt! There are also a number of other small features like a new Token disposition that prevents a border from being displayed and hidden templates are now rendered with a 50% transparency.


### Folders Full of UI Improvements

This release includes a ton of UI improvements across the software. Kim added granular imports to all Adventures, the ability to lock the hotbar to prevent changing the layout, and automatically scrolling to the last selected category when reopening the Settings Configuration app. Cody has continued the work to improve the sidebar with support for Adventures in Folders, duplicating Compendium Packs with their Folder structure intact and a new API for searching Collections.


## Breaking Changes


### Architecture and Infrastructure

- Introduce the new ownership field to Compendium pack manifest data which replaces the V10 private and the earlier V11 prototype visibility field. The ownership field controls which player roles have permission to view and modify each compendium pack and its contained documents. (9318)

`ownership``private``visibility`
## New Features


### Architecture and Infrastructure

- Added a permission option to allow players to create and manage Card piles and Cards. (9359)


### Documents and Data

- Added the ability to place Adventures in Folders. (9278)


### Applications and User Interface

- Added the ability to export Documents to Compendium Packs retaining their Folder structure - either single folder or recursive. (9335)
- Added a "None" option for Token disposition which prevents a border from being displayed on hover. (1320)
- Added the ability to lock the hotbar to avoid accidentally dragging or modifying its layout. (1933)
- Hidden templates are now rendered with 50% transparency. (7959)
- Pips on a Token are now centered and their position is refreshed when a Token is resized. (8586)
- Updated Scene thumbnails to appear with background-size: cover. (8760)
- The Settings Configuration sidebar now automatically scrolls back to the last selected category when reopened. (8892)
- Launching a World now emits a socket event and displays a progress bar. (9084)
- Replaced the Compendium Pack Toggle Visibility context option with a dialog that allows configuring the Pack to have a specific visibility level. (9191)
- Improved the display of the ProseMirror menu when wrapping. (9286)
- Incorporated the granular import behavior of the PF2EAdventureImporter class we have used in premium content into the core AdventureImporter. (9337)
- Duplicating Compendium Packs now includes "(Copy)" in the name like duplicated Documents. (9338)
- Added the ability to select and manipulate Walls by selecting their line segment. (9364)
- When a /macro command fails to find a match an error notification is now displayed. (8824)

`background-size: cover``PF2EAdventureImporter``AdventureImporter``/macro`
### The Game Canvas

- Added two new light animations "Siren" and "Revolving". (9328)
- Improved the visuals of the rain weather effect and added the ability to control the rotation, strength, and intensity of rain through the RainShader class. (9365)
- Added 6 new sound options for Doors Wood, Heavy, Sliding, Wood, Jail, Stone, Basic, Stone, Rocky, and Stone, Sandy. (9369)

`RainShader``Wood, Heavy``Sliding, Wood``Jail``Stone, Basic``Stone, Rocky``Stone, Sandy`
### Package Development

- Implemented an Uninstall and Reinstall option in the error form when a Package has errors that prevent it from being usable. (8085)
- Module dependencies are now recursively checked for deeper dependencies. (6274)
- Added a server configuration setting for whether to retain (default) or discard (opt-in) migrated NEDB compendium files. (9319)


### Other Changes

- Added the ability to click on an image and the image icon in the ProseMirror editor's menu to open an edit dialog to change the image's path. (8887)


## API Improvements


### Documents and Data

- Added a way to get the UUID of a Document inside a Compendium Pack without having to fetch the Document itself. (9342)
- Added the angle property to DetectionMode which controls whether the mode is limited to the vision angle. (8482)
- Improved the lazy computation of Active Effect duration to better support tracking outside of combat. (8691)
- Added support for passing arguments to script Macros through chat messages. (9201)
- Renamed the object of additional arguments passed to Macro execution to scope to avoid collision with pre-existing Macros that used the args convention. (9230)

`angle``DetectionMode``scope``args`
### Applications and User Interface

- Added support for icon dropdowns and separators in dropdowns in the ProseMirrorMenu API. (9287)
- Improved the playAudio socket event to use our standard server-side event handling framework which allows it to support requesting audio playback only for specific users and handling acknowledgement callback functions. (9336)
- User activity data (namely cursor movement) is now emitted using a volatile socket event to prevent unnecessary buffering of non-critical data. (9344)

`ProseMirrorMenu``playAudio`
### The Game Canvas

- Added a hook in Token._onApplyStatusEffect to allow downstream Modules or Systems to support additional special status conditions which require Token handling. (9311)

`Token._onApplyStatusEffect`
### Other Changes

- Added the ability to pass a pre-configured HTMLElement to Tooltip#activate. (9056)
- Added an API to search and filter Document Collections that is specialized for full text search. (9355)

`HTMLElement``Tooltip#activate`
## Bug Fixes


### Architecture and Infrastructure

- An invalid AWS configuration provided in the awsConfig field no longer causes the Foundry VTT process to crash on startup. (9322)

`awsConfig`
### Documents and Data

- Folders defined by packFolders in the module.json are now correctly created without needing to restart the World. (9325)
- Duplicating a Compendium Pack with Folders now correctly copies the original Folder structure as well. (9333)
- The embedded Document field is no longer included in the diff returned by DataModel.updateSource when its value didn't change. (9370)

`packFolders``module.json``DataModel.updateSource`
### Applications and User Interface

- Featured News now always appear on first launch of V11. (9367)
- Improved the centering of icons in the left-hand sidebar. (8462)
- Removed the color: inherit styling from the sidebar's collapsed Folder state. (8538)
- Changing the default sheet of an Actor now closes the sheet and reopens with the new sheet. (9080)
- Removed a duplicate Create Adventure button from the Adventure Compendium Pack app. (9279)
- Fixed an issue that caused re-ordering Actors at the top-level of a Compendium Pack to throw an error. (9280)
- The World migration window is now correctly vertically centered when scrolled. (9315)

`color: inherit`
### The Game Canvas

- Photosensitivity mode now also affects detection modes. (9108)
- Using a migrated Scene from v10 in v11 with unlinked Tokens no longer causes laggy Token movement. (9353)
- Fixed a bug that in rare cases caused point source polygon computation to produce an incorrect result. (8052)
- Performance on Scenes with large numbers of tiles is now significantly improved thanks to changes in the Primary Canvas Object framework. (8019)
- Fixed an issue that caused the vision polygon to be computed incorrectly when a wall intersected the inner Scene boundary. (8607)
- VisionMode.vision.background/illumination/coloration.uniforms can now override the corresponding layer uniforms into a VisionSource. (9285)
- Fixed an issue that prevented Status Effects from being applied to actorless Tokens. (9310)
- The texture extractor now checks for hardware compatibility and throws an error if it is not compatible. (9314)
- Fixed a bug in foundry.utils.lineCircleIntersection that made the intersection test return no intersection points when one or both of the line segment endpoints were on the circle and the line segment was contained in the circle. (9341)
- Tokens no longer ignore their locked rotation state. (9345)
- Eliminated unnecessary targetToken hook calls. (9349)
- Fixed an error that could occur when an Active Effect on a synthetic Actor outside of the viewed Scene was created, updated, or deleted. (9351)
- Tokens without vision range no longer explore the fog of war and the minimum vision radius has been adjusted such that the image of the Token that is the source of vision is completely visible regardless of the token's size. (9360)
- One-way Walls now correctly show their directional indicators. (9361)
- Selecting multiple Walls and double clicking a node to edit them no longer fails. (9362)
- Fixed inconsistencies in the Primary Canvas Object framework by removing the overhead property, extending the OccludableObjectMixin from PrimaryCanvasObjectMixin, and TileMesh, TokenMesh, and TileSprite now extend from OccludableObjectMixin only. (9368)

`VisionMode.vision.background/illumination/coloration.uniforms``VisionSource``foundry.utils.lineCircleIntersection``targetToken``overhead``OccludableObjectMixin``PrimaryCanvasObjectMixin``TileMesh``TokenMesh``TileSprite``OccludableObjectMixin`
### Package Development

- Fixed an issue where running Update All could cause incorrect information to be sent to the Update report. (9320)
- World migration can no longer trip the request timeout. (9350)


### Dice and Cards

- PoolTerm.fromRolls now correctly uses _formula instead of formula. (8661)

`PoolTerm.fromRolls``_formula``formula`
### Localization and Accessibility

- Corrected an accessibility issue that occurred when a checkbox was focused via a keyboard event like pressing Tab. (8655)


### Other Changes

- ActiveEffect#sourceName retrieves the source name synchronously and returns "Unknown" if it's not possible to retrieves it synchronously. (9332)
- Fixed InterfaceCanvasGroup#createScrollingText to correctly apply easing to the animation. (8851)
- Added a trailing slash to FilePicker.browse calls in S3 folders. (8935)
- The activeGM getter now correctly compares strings. (9317)

`ActiveEffect#sourceName``InterfaceCanvasGroup#createScrollingText``FilePicker.browse``activeGM`
## Documentation Improvements


### The Game Canvas

- Updated the CanvasVisibility#testVisibility documentation to correctly identify the types expected for the parameters. (8063)

`CanvasVisibility#testVisibility`
### Localization and Accessibility

- Improved the naming of "Image Dimensions" to "Scene Dimensions" and updated the hint to be more helpful in the Scene configuration. (8961)


### Other Changes

- The chatMessage hook is now included in the hookEvents. (9177)
- Improved coverage of Hook events which are not included in the Hooks module of the API docs. (9313)

`chatMessage``hookEvents`