# Release 0.8.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.90

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.2


## Version 8 Development


##### April 29, 2021


## Foundry Virtual Tabletop - Version 0.8.2 Update Notes

Hello everyone, I am very excited to introduce the final alpha channel release of the new 0.8.x series of development for Foundry Virtual Tabletop. This update brings the first implementation of the new Overhead Tiles system as voted for by our awesome Patreon members, and I am very pleased with its current state. This feature gives users the ability to add a lot of depth to their scenes by placing tree canopies, rooves, and other objects on a foreground layer that obscures tokens when they move below, and I think the community will be very happy with it. In addition to Overhead Tiles, this update brings another 1500 icons to Foundry VTT free for all of our members to use! We began adding these icons, created by the awesome Rexard, in the 0.7.x series of updates and ongoing efforts to rename and structure them for convenient use in Foundry VTT have now concluded with an awesome total of over 5500 icons.

WARNING: Updates on the alpha channel involve major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing. The purpose of Alpha channel builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. if you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

If you choose to install the Alpha 0.8.2 update - and are currently using 0.7.9 or earlier - you must perform a fresh installation of the software. Because of some of the infrastructure changes it is only possible to update to this version from within the Foundry VTT application if you are already using 0.8.0. As always, before any significant update:

Be certain to carefully back up any critical user data before installing this update.

This update focuses on introducing the Overhead Tiles system in Foundry Virtual Tabletop, one of the three major themes of the 0.8.x update sequence. This update brings a lot of changes to the Tiles layer of the canvas, bringing many new and exciting features. Overhead Tiles automatically detect when a token moves below them and change their opacity to reveal those tokens if the token is controlled. In addition, Overhead tiles can be configured as a Roof which obscures light sources as well as tokens. Overhead Tiles use a detection system which detects if a token is below it based on the opacity of the artwork instead of the outer boundary of the placed tile - allowing tiles to become transparent if the token is actually below the visible part of the image file. Additional modes of occlusion for these tiles are planned for future updates.

`0.8.x`In addition, this update brings a number of positive changes for the package management system and additional UI improvements for world configuration, as well as system and module installation. The biggest change to package management makes Dependency Management much smarter, only prompting users to enable or disable dependencies that should be changed. Also, Foundry VTT now detects changes to package manifests from the Foundry VTT website, allowing our amazing community developers to do things like change the compatibleCoreVersion for their module without having to release a new version.

`compatibleCoreVersion`
### Update Overview

The major themes which are central to this update version are briefly summarized as follows:

- Overhead Tiles - The flagship feature for this update. Overhead Tiles allows GMs to set tiles as overhead (which are rendered above the token layer) or as rooves (which appear above the token and light layer) in order to provide functionality for GMs to give a visually distinct appearance to tree canopies, rooves, clouds, or other things that would visually obscure tokens. Overhead tiles also include the option to set an occlusion mode which will change the opacity of the tile when a token moves below it. If a tile has its occlusion mode set to Fade (entire tile) it will lower its transparency to the configured Occlusion Alpha when a Token is beneath it. If its Occlusion Mode is set to Roof (lighting and vision) it will also obscure light sources below it when it is visible. There are two additional Occlusion Modes planned at this time which we hope to explore in a future update: Radial and Vision. Please stay tuned for news on those!In addition to overhead tiles, Scenes can now be pre-configured with a Foreground image in addition to a Background image which provides an overhead layer which will not fade when tokens pass under it. This allows Gamemasters to use maps that come packed with a secondary image as a separate layer that contains walls or clouds or other features to add a sense of verticality to scenes.
- The packages system has received some updates to both dependencies and manifest structure improving the UX and UI for both users and community developers.
- A number of changes have been made to the experience of lighting and vision for the canvas, which should not only improve accuracy of vision rendering but also performance of lighting and vision overall.
- More than 1500 new icons have been added, the majority of which are "action" oriented, depicting skills, abilities, and magic spells!
- As a last-minute addition we have snuck in a feature often requested by the community: Token Default Configuration. This provides access to a settings menu which can be used to configure the default options for tokens on newly created actors.

`Fade (entire tile)``Roof (lighting and vision)`In addition to overhead tiles, Scenes can now be pre-configured with a Foreground image in addition to a Background image which provides an overhead layer which will not fade when tokens pass under it. This allows Gamemasters to use maps that come packed with a secondary image as a separate layer that contains walls or clouds or other features to add a sense of verticality to scenes.


### Breaking Changes


#### Documents and Data

- Collection#getName has been refactored and now returns undefined if no match is found, this brings consistency with Map#get and Array#find.
- The SoundNode class has been refactored into the Sound class which controls playback and the AudioContainer class, which interfaces with the underlying Web Audio API for different node types. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4851
- ActorSheet fields which currently have an Active Effect override are now prevented from submitting the overriden values via the submission workflow. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4934

`Collection#getName``Map#get``Array#find.``SoundNode``Sound``AudioContainer`
#### The Game Canvas

- The TilesLayer has been refactored and combined into the BackgroundLayer which contains Tile objects for a single vertical cross-section of the Scene alongside a background image which fills the Scene canvas. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4856
- Vision and lighting rendering have been improved to make use of the canvas buffer region while obscuring it from Token vision (unless the controlled Token is within that buffer)

`TilesLayer`
### New Features


#### Architecture and Infrastructure

- Foundry VTT now maintains a cached copy of all packages for a short duration to reduce required web requests for upgrading, sidegrading, or installing packages.
- It is now possible to sidegrade an installed module from the Foundry VTT website facilitated by a dialog prompt which occurs when updating a module, pulling new metadata values such as compatibleCoreVersion for the same version from the website.
- The full data template for each game system is no longer loaded in the setup view, but instead is deferred until a game system is used to set up an actual world.

`compatibleCoreVersion`
#### Documents and Data

- Implemented a new interface for setting Token Defaults from the Configure Settings menu which allows configuration of default settings for the tokens of newly created actors.
- The Sounds class will automatically detect if a file is of a sufficient size to require streaming as a MediaElementAudioSourceNode, this allows for files that are too large to be served as a sound buffer to be offered as a stream instead.

`Sounds``MediaElementAudioSourceNode`
#### The Game Canvas

- Implemented a new feature for the tiles layer: Overhead Tiles. This feature brings support for setting tiles to appear above tokens and, if set as a roof tile, appear above light sources. Overhead tiles support occlusion modes which detect when a tile moves below them and reduces the opacity of the tile allowing for creation of tiles that automatically disappear or partially disappear when tokens are moving below them.
- The Tile configuration UI now allows selection of a Tile type as well as its occlusion mode if the tile is an overhead tile.
- Overhead Tiles can be configured to switch opacity to a chosen value when a controlled token is detected beneath them.
- Overhead Tiles support a Fade Tile option which will automatically disappear completely when a Token passes beneath it.
- Overhead Tiles support a "none" mode for occlusion, which stays completely visible when tokens move below them.
- The Tile HUD now provides controls for setting whether the tile is overhead or underfoot conveniently.
- The Tile data model has been expanded to add support for basic video playback controls and a play/pause button has been added to the HUD for Tiles which depict a video assets. These will allow for GM configuration of video tiles to control the default looping behavior and to control the volume of audio from those tiles.
- The Tile data model now supports multiple tile types, occlusion modes, and occlusion parameters.
- Tiles now support a specialized "Roof" mode for an overhead tile which alters the behavior of underlying walls (enforcing the exterior walls) and light sources (obscuring them).
- The Tint function from tokens has been extended to tiles and overhead tiles allowing a tint to be applied to tile assets.
- The computation of rectangular bounds for Tile objects has been improved and now identifies non-alpha pixels rather than the base texture size, this allows for roof tiles to determine the difference between transparent boundaries.
- It is now possible to change the opacity for Tiles and Tokens from their configuration menus.
- Scenes now support a a single background image for the foreground container which is automatically aligned with the dimensions of the scene background. The foreground image does not support occlusion.
- Scene thumbnail generation has been updated to include overhead tiles in the displayed thumbnail.
- Scenes using the Gridless mode now allow tokens, tiles, and other canvas placeables to move without snapping. Wall endpoints will still snap to the micro-grid.
- The Scene Controls menu has been expanded to add an option which allows toggling between foreground and background layers for Tile configuration.
- The padding area and background region of the canvas now has a new visual indication of boundaries to make them more visually distinct from one another.
- Canvas masking has been improved to apply a single mask for the final Canvas Stage rather than multiple scene rectangle masks for each individual layer. This should provide a small overall performance gain in vision rendering.
- Scene thumbnail generation has been updated to include overhead tiles in the displayed thumbnail.
- Improvements have been made to the efficiency of sight rendering and visibility detection to use the LOS polygon directly in cases where global illumination is applied to the Scene.
- Improvements were made to the logic used for line of sight and vision polygons. Vision calculation should be overall more accurate as a result.
- When a token has zero vision distance they will no longer receive a free vision radius but rather expose only the grid space the token occupies as a temporary view into the fog of war.
- Secret doors now have a new icon to make them visually distinct from normal doors.
- The default styling of of Token health bars has been improved and now features a slightly cleaner design.


#### Interface and Applications

- Browser detection has been improved and if the user is running a browser version which will not work for Foundry Virtual Tabletop a warning will now be displayed.
- The Create World button will now notify users that a game system needs to be installed before a world can be created and will prevent access to the create world menu if none are installed.
- The Reset Active Modules toggle from the Edit World menu has been replaced by a new "Launch in Safe Mode" option which also deactivates all scenes and disables playlists when loading into a world.
- Packages, such as systems and modules, can now be locked.  This prevents them from being updated or uninstalled unless the lock is first removed.
- When enabling and disabling modules that have dependencies, a list of the dependencies is now displayed for user convenience.
- The compatibility risk flag now indicates which version of the core software it is rated as compatible with.
- When opening the install menu for worlds, systems, and modules the filter field will now be auto-focused.
- A new Edit World button on the configuration menu inside an active world makes it possible to edit some of the world settings on the fly.
- Users will now be notified within an active world if the game system for that world has an update available.
- The insert image function for TinyMCE now uses the standard Foundry FilePicker UI.
- It is now possible to pop the chat tab out to a separate window with a right-click like other sidebar tabs
- The Spacebar no longer unpauses the game if used in conjunction with ctrl/shift/alt to prevent cases where a GM may accidentally unpause the game while executing a token move or other function.


### API Improvements


#### Documents and Data

- Document.createDocuments now accepts a DocumentData object in addition to a plain JS object as the input for new documents.
- The allowed maximum depth of the expandObject utility function has been increased to 100.
- TokenConfig.getTrackedAttributes has been improved and now differentiates between "base" attributes which can be edited and "derived" attributes which are deterministic. Editing the derived tracked attributes through the Token HUD has been disabled.
- The data structures used by package manifest files have been defined as a canonical subclass of DocumentData, benefiting from built-in validation, cleaning, default values, update handling, serialization, and more!
- Added two new methods, DocumentData#toObject and Document#toObject, which convert core data structures into copy-safe objects, either targeting source data or derived data.
- All remaining static class attributes have been converted to use public static class fields which are supported across all relevant browsers.

`Document.createDocuments``DocumentData``expandObject``TokenConfig.getTrackedAttributes``DocumentData``DocumentData#toObject``Document#toObject`
#### The Game Canvas

- Introduced a new PerceptionManager class. This class centralizes scheduling and execution of refresh workflows for lighting, sight, sound, and overhead tiles into a single perception.refresh call at the overall canvas level and also applies to initialization workflows.
- Canvas layers can now have their composition altered by modifying CONFIG.Canvas.layers within the init or ready hooks.
- Added a new helper method to NormalizedRectangle class which can be used to compute a new rotated rectangle about its center. for more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4873
- It is now possible to customize the duration of a Scene darkness transition by passing a numeric value to the animateDarkness context option. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4715
- Standardized the functionality of moveToken to extend functionality of preUpdateToken and updateToken hooks to each type of move action that a token can make.
- The validator for Token scale will now allow a token to be scaled up to 10x through API or macro usage, though the UI for this still restricts the maximum to 3x.

`PerceptionManager``CONFIG.Canvas.layers``NormalizedRectangle``animateDarkness``moveToken``preUpdateToken``updateToken`
#### Interface and Applications

- Applications now support a new property that designates the initial render of the app, allowing for use cases where logic only needs to occur during the first time the application is rendered. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4709
- New hooks have been added which occur when global volume changes for playlist volume, ambient volume, or interface volume.
- It is now possible to dispatch web socket events only to a specific recipient user or set of users. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4749
- Added a Handlebars helper for {{colorPicker}} which creates the combination of color selector and string field while better handling data validation. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4857
- Added a Handlebars helper for {{rangePicker}} which creates the combination of range selector and corresponding span field which shows the numeric value. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4858

`{{colorPicker}}``{{rangePicker}}`
#### Dice System

- The ParentheticalTerm.fromTerms method has been exposed as a static to bring feature parity with Roll.fromTerms. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/4820

`ParentheticalTerm.fromTerms``Roll.fromTerms`
#### Documentation

- Corrected the JSDOC entry for Set.prototype.isSubset to better reflect the correct parameters and returns.
- Corrected some parameter strings for the JSDoc of AVClient.toggleVideo and EasyRTCClient.toggleVideo
- Corrected inaccuracies in the JSDoc for Document.getEmbeddedDocument.
- Corrected inaccuracies in the JSDoc for getProperty.

`Set.prototype.isSubset``AVClient.toggleVideo``EasyRTCClient.toggleVideo``Document.getEmbeddedDocument.``getProperty.`
### Bug Fixes


#### Documents and Data

- Corrected instances where Active effect OVERRIDE of numeric fields was not working properly.
- Improved to how items and active effects within unlinked Token actors are represented within Uuid(effect.data.origin).
- Fixed ActiveEffectConfig being unable to add new active effects.
- Corrected ActiveEffect._applyAdd causing affected values to stack instead of only adding once.
- Improved the algorithm used to compute ActiveEffect duration when duration is based on combat turns and rounds.
- Fixed an issue where calling unsetFlag fails if no flag was set in the scope yet.
- Expanded the data object provided to DocumentData#update if the provided object contains keys in dot-notation.
- Resolved an issue with Embedded document updates to resolve cases where they would not correctly update the data for all child documents prior to parent data updating.
- Database operation hooks for embedded Documents within a synthetic Token actor now have hook signatures that match the signature for regular world-level documents.
- Improved the disconnect mechanism for the Datastore to prevent cached world.json files causing the re-creation of deleted compendiums on return to setup.

`Uuid(effect.data.origin)``ActiveEffectConfig``ActiveEffect._applyAdd``ActiveEffect``unsetFlag``DocumentData#update`
#### The Game Canvas

- The behaviour of the Force Snap To Grid feature has been improved significantly for Hexagonal grids, and now snaps to the exact vertices and center point of grid spaces.
- Improved canvas object coordinate positions to have limited float precision for hexagonal grids where the top-left is not always an integer number of pixels.
- Implemented a time-based caching for textures which are destroyed after not being used for a certain duration (10 minutes) which periodically releases memory and improves the performance of the TextureLoader.
- Resolved an unintended breaking change in the algorithm used to compute scene dimensions to use the same rounding logic that was used in 0.7.9.
- Corrected instances where resizing the game canvas would force Drawing objects outside the interactable area.
- Improved the algorithm used to progressively test ray collision when computing sight polygons to choose better quadtree quadrants to resolve a problem in which the closest wall collision was not identified for a given ray.
- Corrected issues of fog of war becoming offset from the location of actual walls.
- Improved the behavior of the LightConfig application to reset the previewed values for the light source if the form is closed without saving changes.
- Fixed light sources not properly updating their illumination layer color uniforms when the darkness level of the scene changes, resulting in lights that are dimmer when created during darkness.
- Corrected inactive lighting or vision sources which were not intaking new illumination uniforms when the darkness layer changed within their Scene.
- Improved the user experience of resizing tiles, especially when resizing is combined with a degree of tile image rotation.
- Fixed instances where opening the TileConfig sheet by double clicking on the resize handle would leave the tile stuck in the middle of a resize workflow.
- Corrected an issue where changing a Token resource bar display mode would not properly cause bars to properly re-render.
- Ensured that Token.animateMovement's promise will resolve even if the token is updated during the animation.
- Prevented situations where a Token perfectly bisected by a wall segment could simultaneously see both sides of the wall because they had no prior movement velocity.
- Tokens can no longer be pasted off-map, becoming unremovable in the process.
- Freshly dropped map notes no longer incorrectly become available to interact with even when not on the notes layer.

`LightConfig``TileConfig``Token.animateMovement`
#### Interface and Applications

- TinyMCE has been updated to version 5.7.x, bringing a fix for a long-running issue with IPv6 Support.
- Undoing changes with Ctrl-Z in the TinyMCE editor no longer causes enriched HTML elements to revert to their parsed counterparts.
- Triggering a save of the TinyMCE editor when no changes had been performed will no longer cause enriched HTML elements to be rendered improperly.
- Item sheets no longer fail to re-render on modification of embedded Items within an unlinked Token Actor.
- Loading an actor a Token lightColor that is not a valid CSS color string will gracefully fail instead of halting world load.
- Corrected an issue where PlaylistDirectory._updateTimestamps used a classlist that didn't exist in the UI for the player.
- Switching to playback for a different track in shuffled or sequential mode now clears the pausedTime of the current track if it is currently paused.
- Ensured that text overflow for long playlist and track names in the "currently playing" UI is enforced.
- Fixed a bug where Emote (and possibly other) chat messages could have their styling overridden by general style.
- The Module management interface no longer incorrectly suggests the user enable already-enabled dependencies.
- Swapping release channels no longer incorrectly requires a reload to see changes.
- Ensured that the FolderConfig sheet is once again correctly pulling the current folder color as the input to the color picker HTML input.
- The height of the File Picker now automatically resizes when filtering for results.
- Fixed instances where contents of S3 directories with spaces in their names could not be seen.
- Stopped UTF-8 characters in S3 key prefixes from breaking the File Browser.
- The Wildcard Images feature no longer fails when the images are stored in the root of an S3 Bucket.
- Fixed an issue with the Wildcard option in filepicker introduced in 0.8.1.

`PlaylistDirectory._updateTimestamps``pausedTime``FolderConfig`
#### Dice System

- Corrected issues where Roll.dice() would concat reduced dice with elements already present in ._dice.
- Calling the Die constructor with no arguments will now fall back to default parameter values as expected.
- Ensured that parenthetical terms can be used to populate the values of a dice roll modifier string.
- Fixed an issue where unneeded operators in roll formula parsing were not ignored or removed, causing syntax errors as a result.
- Rolling unfeasibly large numbers of dice no longer cause the Roll API to throw an error.

`Roll.dice()`