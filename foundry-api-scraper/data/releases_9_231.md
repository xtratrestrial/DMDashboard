# Release 9.231 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.231

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.231


## Version 9 Development


##### November 16, 2021


## Foundry Virtual Tabletop - Version 9 API Development 2 Release Notes

We are proud to announce the final update in our API Development phase for Version 9! As we move into the user testing phase we look forward to refining the UX and UI of all the features we have implemented up to this point. As you all know Version 9 has focused on implementing the new Adaptive Lighting system, introduced Card Support, and has continually added new minor features or polish to the existing API. During the API Development phase, we have introduced a number of positive changes and refinements to the API and the underlying structures which support those focused goals.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.

WARNING: Be certain to back up any critical user data before installing this update.


## Update Highlights

The Version 9 API Development 2 update (V9d2) centered primarily around lighting and vision rendering improvements, the initial implementation of keybindings, improvements to audio video chat integration, and addressing a variety of concerns submitted by the FVTT development community.


#### Lighting and Vision Accuracy and Efficiency

As part of the implementation of the new Adaptive Lighting system, we wanted to tackle the complex problem of providing calculation of vision and lighting polygons in a way that was both more accurate and more efficient. In addition to working toward creation of some new algorithmic approaches to this problem, we were able to work with some subject matter experts within the community (the awesome @caewok#9192 specifically) on this problem and the outcome is one we are extremely proud of. The new ClockwiseSweepAlgorithm which emerged from this work has shown a significant increase in performance, a reduction in issues where vision was not rendered accurately, a complete removal of cases where walls did not impede vision as intended, and enables scenes to be rendered at a comfortable FPS with a far greater number of walls and light sources than ever before. In short: Everything about the way lighting and vision is rendered is now more accurate and faster, with most calculations completing in less than a single millisecond.

`ClockwiseSweepAlgorithm`
#### Audio Video Chat Integration Improvements

There have been a number of lingering issues with A/V chat since we transitioned to the new webRTC impelementation through simple-peer in a previous version. As part of an ongoing effort to improve the overall state of A/V Chat Integration, we have resolved a number of bugs and added support for a few features. In addition to correcting some issues related to voice activation and display of user avatars, we completely redesigned the data passed internally for A/V settings and it now maintains information on the state of connected clients, including whether or not their microphone is muted, camera is disabled, or if they are currently speaking. Doing so lays the groundwork for extending A/V support in the future in meaningful ways.


#### Keybinding Support

The ability to rebind keys has been on our roadmap for some time, and given the benefit it would bring for community developers, the V9 API development cycle seemed the appropriate time to tackle it. As of V9d2, all core functions which had bound keys have been mapped to an all new API functionality for registering keybindings, and community developers may not only modify those keybindings, they may also create and register their own functions  through the new keybindings API. It should be made clear here that at this time this is an API only solution, but we do plan to provide a UX/UI implementation for rebinding hotkeys during the V9 User Testing phase.


## New Features


### Architecture and Infrastructure

- Updated a number of dependency packages to their latest stable versions. (6102)
- Upgraded Electron to latest stable version 15.3.2 from previous Electron version 14. (6108)


### The Game Canvas

- The underlying Vision and Lighting system now uses a new ClockwiseSweepAlgorithm which is both more accurate and more efficient, resulting in major performance gains for rendering lighting and vision polygons. The ClockwiseSweepAlgorithm constructs a PointSourcePolygon using 2d geometry orientation tests (clockwise, counter-clockwise) rather than computing ray distances and angles for major performance gains in polygon construction. (5891)
- Introduced a new approach for segmenting intersecting walls to prevent cases where overlapping walls would cause vision to be calculated incorrectly using the new RadialSweepPolygon or ClockwiseSweepPolygon implementations. (5675)
- Tile _alphaMap has been updated to only compute when required, avoiding unnecessary work for underfoot tiles which do not require this data. (5523)
- The PIXI Application environment has been configured to use the autoDensity option for assigning screenspace to address some potential edge cases where Canvas#_onResize might result in a non-integer screenspace. (6046)
- The PIXI Environment has been reconfigured to ensure that the preferred WebGL version is set to 2. (6028)
- It is now possible to change Scene background color, grid color, and grid opacity without re-drawing the entire canvas. (4880)

`ClockwiseSweepAlgorithm``ClockwiseSweepAlgorithm``PointSourcePolygon``RadialSweepPolygon``ClockwiseSweepPolygon``Tile _alphaMap``Canvas#_onResize`
### Interface and Applications

- Audio/Video chat integration settings have been redesigned and now maintains a transient state of connected clients, their muted/hidden status, and whether they are currently speaking. (3659)
- The "Custom Signaling Server" options have been removed from A/V configuration intertface as they were no longer used. (6045)
- A new UI option allows users to create a combat that is not linked to a scene, allowing for GMs to conveniently create a combat which spans multiple scenes.(6050)
- The combat tracker now only re-renders in cases where specific relevant data attributes were changed.(5017)
- The chat entry field now supports creation of dynamic links to Documents using drag and drop workflows, allowing convenient linking to specific actors, items, journal entries or otherwise. (6053)
- A new /macro chat command has been implemented which introduces ability to execute a macro. It accepts both /macro {macro name} and /macro {hotbar number} as parameters for locating a macro.(6011)
- The list of journal entries in the dropdown selector for Journal map notes is now alphabetically sorted. (6078)
- The Token Configuration window now allows decimals in the Elevation field. (6061)
- Addressed some small inconsistencies in the Controls Reference. (5996)
- An additional 600 equipment and spell icons have been migrated from the dnd5e system folder to the icons folder for the core software. (6103)

`/macro``/macro {macro name}``/macro {hotbar number}`
## API Improvements

API documentation for V9 has been updated and deployed, it is available here.


### Documents and Data

- CombatData#turn is now nullable, and core combat handling no longer assumes that a turn is non-null, treating a null value as "no one's turn". Combat#combatant can now return null or undefined as a result. (4956)

`CombatData#turn``Combat#combatant`
### The Game Canvas

- Several new classes and functions designed to support improved polygon computation have been introduced, including ClockwiseSweepPolygon, PolygonVertex, PolygonEdge, CollisionResult, and many more. (6021)
- The workflows for sight layer fog initialization and reloading have been reworked to function as expected regardless of the persisted fog state from the database. This resolves an issue where toggling fog exploration off for a scene would not correctly obscure current exploration progress. (6082)
- PIXI.settings.FILTER_RESOLUTION has been reconfigured to use canvas.app.renderer.resolution by default. Filters which are constructed prior to canvasInit or which need a different resolution will require individual configuration. (5892)
- The screenDimension updating logic has been refactored and now uses a centralized Canvas#screenDimensions array which can be used directly to define uniforms which need the renderer dimensions. (6080)
- ControlIcon#draw now verifies whether a control icon has already been destroyed during scene teardown operations. (6055)
- Token.drawBars is no longer called twice when updating a synthetic actor. (6086)
- ForegroundLayer#displayRoofs will now return a boolean as expected. (6019)
- Introduced a new canvas.highlightObjects(active) method and updated the keybinding handler to use it. (6105)
- The Canvas#getLayer method has been deprecated and will be deleted in v10. It is not currently used by the core API. Callers of this method should instead use the known canvas layer references directly. (6079)

`ClockwiseSweepPolygon``PolygonVertex``PolygonEdge``CollisionResult``PIXI.settings.FILTER_RESOLUTION``canvas.app.renderer.resolution``screenDimension``Canvas#screenDimensions``ControlIcon#draw``Token.drawBars``ForegroundLayer#displayRoofs``canvas.highlightObjects(active)``Canvas#getLayer`
### Interface and Applications

- The initial implementation of Customizable Keybinding Support is now available at an API only level, allowing community developers to rebind core keybinds or register their own keybindings directly through API functions. For more information please see: (2801)
- All core Keybindings have been remapped to use the new game.keybindings registration approach. (6000)
- Added a way to process native JavaScript Keyboard Events and execute matching registered Keybind Actions. (6001)
- Keyboard handleMovement has received a minor update to its handling logic. (6090)
- Introduced a new game.toggleCharacterSheet() and updated the keybindings handler to use this method. (6104)
- It is now possible to register sheets for every document type, allowing for a choice of sheets to be used at an individual document level in the same way as Actor and Item documents. (4994)
- The WallConfig class has been reconfigured to be a standard DocumentSheet subclass. (6101)

`game.keybindings``handleMovement``game.toggleCharacterSheet()``WallConfig``DocumentSheet`
## Documentation Improvements

- A number of classes and methods have had their JSDoc strings updated to document the options object. Going forward the extended @typedef JSDoc string will be used to document additional options available to classes and methods. (4993)

`options``@typedef`
## Localization Improvements

- i18n.localize will now treat partial localization paths as an unmatched string and return the original key instead of returning an inner-object which has no string representation. (6095)
- Provided localization for a number of applications, sheets, and buttons which previously had non-localized titles. (6083)

`i18n.localize`
## Bug Fixes


### API

- Resolved an unused name variable in PermissionControl.updateObject. (6018)
- Corrected an invalid this reference in Compendium#metadata#entity does not have the correct this reference to obtain the type; field. (6024)
- CompendiumCollection#updateAll should now function as expected, allowing the updating of particular data values for all objects contained within a compendium pack. (6076)
- Resolved a number of cases where Application#render did not provide the expected return. (6026)
- The makeDefault option for document sheet registration (such as  Actors.registerSheet) now uses the last registered competing 'default' as the default sheet. (5997)

`name``PermissionControl.updateObject``this``Compendium#metadata#entity``this``type``CompendiumCollection#updateAll``Application#render``makeDefault``Actors.registerSheet`
### Architecture and Infrastructure

- Launching a world now delays flagging the world as ready until after any core migration operations have successfully completed to avoid a situation where a player could try and join a world before it is able to accept connections. (6066)
- The compendium data schema in package manifest files can now include both entity and type keys in order to provide shared compatibility for both v9 and v8. The entity key will eventually be deprecated, but not until v10 or later. (6060)

`entity``type``entity`
### Documents and Data

- Passing a list of items to update a synthetic token actor no longer results in disparity between server and client side storage of the actor data. (5988)
- Modifying owned items of an actor in a compendium no longer incorrectly displays those items as being stored within the compendium. (6062)
- Adding a new owned item to an actor with unlinked tokens no longer requires a refresh to update the unlinked token actors. (6075)
- Corrected a handling issue with drag and drop operations for Items embedded on Actors for unlinked tokens. This resolves an error which would occur in the specific case of dropping an embedded item onto an actor sheet from which the unlinked token originated. (6071)
- Importing card decks from compendium packs now functions as expected and no longer fails with error. (6035)
- Permissions for token actors should now correctly update when permissions are changed on the actor from which the token originated. (6022)
- Retreiving a compendium document should no longer incorrectly discard indexed properties. (6087)


### The Game Canvas

- In introducing the new lighting and vision rendering algorithms, resolved an issue which could cause vision rendering to discard some wall endpoints in very specific cases. (5843)
- Terrain walls no longer incorrectly block vision in the specific case where multiple terrain walls share a single end point. (5935)
- Resolved an issue where it was possible to see token Conditions and Condition Overlays even if they were obscured by scene Padding. (6030)
- Moving a webm token or tile no longer results in animation halting and the placeable disappearing. (6036)
- Panning operations at screen edges should now appropriately handle cases where the arrow-key based movement occurs within the width of the sidebar. (6063)


### Interface and Applications

- When a user has disabled their video their chosen avatar will now show in the video chat window as expected. (4860)
- Voice activation for video and audio chat now functions once more. (6038)
- Corrected an issue with compendium-based drop operations into Rollable Tables which had negative performance implications. (6042)
- Drag operations on menu items that have an active context menu no longer show the context menu in the dragged preview image. (5986)
- Switching between encounters as a GM now updates the active encounter for players as expected. (6049)
- Corrected an issue where unconventional casing of file extensions could result in the FilePicker not showing those files. (6057)
- The document creation dialog will now correctly prompt for a destination folder if one or more folders exist. (6064)
- Addressed an edge case where pressing the Page Up key in any rich text entry field if you have text in that field would result in the entire UI shifting up and to the left. (6084)
- Resolved a permission error which could occur in cases where a user attempted to set the defeated condition on a combatent for systems which do not have a specified 'defeated' effect. (6089)
- Resolved an issue where dragging to resize a tile could result in a non-integer width and height which prevented future updates to a Tile through the Tile configuration sheet. (6092)
- The authors field for package data once again appears on package listings and on the /setup page. (5983)

`/setup`