# Release 13.333 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.333

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.333


## Version 13 Prototype


##### November 26, 2024


## Foundry Virtual Tabletop - Version 13 - Prototype 2 Release Notes

Hello Foundry community! We are extremely excited to release our second Prototype build in the Version 13 update cycle, Version 13.333... (repeating, of course!). Our focus was to refine and expand upon the first Prototype release by continuing to front-load the more serious changes to the API.

In addition to the ongoing ruler work to support our community-selected feature (Token Drag Ruler) and the ongoing ApplicationV2 convert-a-palooza, we've also added a slew of improvements throughout the application that we are quite excited to share with all of you today.

`ApplicationV2`WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


## Highlights


#### Making it Shiny

A primary focus for V13 is delivering the next generation of the Foundry user interface, and Prototype 2 provides strong progress in that initiative.

This release implements a flexible CSS theming system, powering a Foundry light mode and dark mode as well as enabling other arbitrary themes. We can't wait to see what the Foundry community does with this functionality in Game Systems and Modules.

Of course, many more important components of the Foundry UI have now also been migrated to Application V2 as well, bringing its visual and architectural improvements to an ever-increasing percentage of the software.


#### Foundry Rules!

To implement the Token Drag ruler as we envision, we continue to extensively improve the underlying movement-related data structures and API.

With much of that work now in place, Prototype 2 delivers significant improvements in multi-waypoint movement, including:

- Movement that would be blocked by a wall is indicated by a dashed line
- Auto-rotation of token facing as your Token moves about the map  (don't worry pog fans, you can lock rotation as usual to prevent this)
- Token movement speeds are now configurable for each waypoint segment
- Better interaction with Scene Regions

Measuring with CTRL also received some love in this release. You can now secretly measure a distance by holding ALT so that you don't tip your cunning plan to your unsuspecting players.


#### Unleash Your Token's Inner Darkness

Tokens have long been able to emit light, but now you can do the exact opposite and emit darkness as well. Your players will never see that monster coming...


#### Flashy Chat

Ever miss an incoming chat message because you were on a different sidebar tab? In Prototype 2, new incoming chat message notifications flash to the left of the sidebar to let you easily keep an eye on things.


#### Time for a Change

It is still a work in progress, but this release brings the beginnings of a prototype Calendar API for supporting configurable in-world calendars with the GameTime class.

`GameTime`
### Known Issues

- When entering or exiting a Scene Region. a token may sometimes "slide" along its boundary in certain cases. (11868)
- Tokens may clip through walls during movement in certain circumstances. (11869)


## Breaking Changes

In addition to the changes listed below, please see details about the conversions to ApplicationV2  here. These conversions may require changes for modules and systems that touch these applications.


### Documents and Data

- Switched behavior of CONFIG.ActiveEffect.legacyTransferral to be false by default and added a deprecation warning. (11412)

`CONFIG.ActiveEffect.legacyTransferral``false`
### The Game Canvas

- Refactored shape-related properties and functions from Region to RegionDocument. (11819)
- Deprecated the TOKEN_PRE_MOVE Region event, which is no longer triggered. (11839)
- Deprecated the TOKEN_MOVE Region event in favor TOKEN_MOVE_WITHIN, which is only triggered for movement within the Region, but not when moving in or out. TOKEN_MOVE is no longer triggered. (11840)

`Region``RegionDocument``TOKEN_PRE_MOVE``TOKEN_MOVE``TOKEN_MOVE_WITHIN``TOKEN_MOVE`
### Other Changes

- Put TinyMCE on a deprecation path to be removed in V15. (11821)
- The default value of DialogV2WaitOptions#rejectClose is now false. (11763)
- For Compendium Documents, ClientDocument#collection now returns a CompendiumCollection. (11807)
- Removed backwards compatible support for changes in V11 or prior which have reached the end of their deprecation period. (11815)

`DialogV2WaitOptions#rejectClose``false``ClientDocument#collection``CompendiumCollection`
## New Features


### Architecture and Infrastructure

- Migrated to classic-level version 2.0.0. (11782)
- Updated dependencies (including a small Electron version bump to 33.0.2). (11822)

`2.0.0`
### Documents and Data

- The meaning of Document.metadata.permissions was refined to be more explicit about what USER_ROLES or DOCUMENT_OWNERSHIP_LEVELS are allowed to perform a certain actions. view was also added as a permission level on the Document itself that can be used by downstream code. (11280)
- Added support for TypedSchemaField outside of ArrayField. (10833)
- Redesigned the functionality of default token settings to better respect user-defined preferences and added support to define those user preferences per Actor type. (11758)

`Document.metadata.permissions``USER_ROLES``DOCUMENT_OWNERSHIP_LEVELS``view``TypedSchemaField``ArrayField`
### Applications and User Interface

- Changed drag distance evaluation so that it is based on screen coordinates instead of canvas coordinates. (11028)
- Added reporting to indicate which players are idle based on the timestamp that their last user activity packet was received. (11517)
- Rationalized the way that Theme V2 color variables for text are used across themes. (11770)


### The Game Canvas

- Allowed token-emitted light sources to be darkness sources. (10741)
- Added movement history visualization. (11735)
- Improved the performance of token target indicators. (11766)


### Localization and Accessibility

- Implemented an overall UI scale setting which adjusts the size of game interface elements. (5508)
- Added labels to name and img Document fields. (11796)
- Standardized grammatical number of Document-related localization namespaces. (11823)
- Utilized DataModel.LOCALIZATION_PREFIXES as part of DocumentSheetV2 conversions. (11825)

`name``img``DataModel.LOCALIZATION_PREFIXES``DocumentSheetV2`
### Other Changes

- Replaced the raw HTML prosemirror editor textarea with code-mirror, greatly improving the in-app text editing experience. (11741)
- Improved pattern of DocumentSheetV2 default window IDs so that escaping them is not necessary. (11756)

`textarea``code-mirror``DocumentSheetV2`
## API Improvements


### Documents and Data

- data-dtype=Number is now added to SetField(NumberField) automatically. (11301)
- Changed the type of two base Document data fields to better reflect their intent (BaseScene#navName and BasePlaylist#fade). (11824)
- The following fields of TokenDocument have now been declared unpreparable: x, y, elevation, width, height, and shape. (11845)
- null sight and detection mode ranges are now interpreted as a range of Infinity. (11852)

`data-dtype=Number``SetField(NumberField)``BaseScene#navName``BasePlaylist#fade``TokenDocument``x``y``elevation``width``height``shape``null``Infinity`
### Applications and User Interface

- Converted ActiveEffectConfig to ApplicationV2. (11319)
- Converted ActorDirectory to ApplicationV2. (11320)
- Converted AdventureImporter to ApplicationV2. (11322)
- Converted BasePlaceableHUD to ApplicationV2. (11325)
- Converted CardsDirectory to ApplicationV2. (11330)
- Converted ChatLog to ApplicationV2. (11333)
- Converted FolderExport to DialogV2. (11350)
- Converted HeadsUpDisplay to ApplicationV2. (11355)
- Converted JournalDirectory to ApplicationV2. (11361)
- Converted JournalSheet to ApplicationV2. (11364)
- Converted JournalTextPageSheet to ApplicationV2. (11365)
- Converted MacroDirectory to ApplicationV2. (11370)
- Converted PlaylistConfig to ApplicationV2. (11379)
- Converted PlaylistSoundConfig to ApplicationV2. (11381)
- Converted RollTableDirectory to ApplicationV2. (11382)
- Converted SceneConfig to ApplicationV2. (11383)
- Converted Sidebar to ApplicationV2. (11391)
- Converted TokenHUD to ApplicationV2. (11801)
- Converted DrawingHUD to ApplicationV2. (11802)
- Converted TileHUD to ApplicationV2. (11803)
- Exposed SceneControls#activate to the API to support changing scene controls, tools, or toggles without necessarily re-rendering. (11789)
- Arbitrary UI elements can now include theme-specific boilerplate variables via use of the .themed class in conjunction with the specific theme to apply. (11812)

`ActiveEffectConfig``ApplicationV2``ActorDirectory``ApplicationV2``AdventureImporter``ApplicationV2``BasePlaceableHUD``ApplicationV2``CardsDirectory``ApplicationV2``ChatLog``ApplicationV2``FolderExport``DialogV2``HeadsUpDisplay``ApplicationV2``JournalDirectory``ApplicationV2``JournalSheet``ApplicationV2``JournalTextPageSheet``ApplicationV2``MacroDirectory``ApplicationV2``PlaylistConfig``ApplicationV2``PlaylistSoundConfig``ApplicationV2``RollTableDirectory``ApplicationV2``SceneConfig``ApplicationV2``Sidebar``ApplicationV2``TokenHUD``ApplicationV2``DrawingHUD``ApplicationV2``TileHUD``ApplicationV2``SceneControls#activate``.themed`
### The Game Canvas

- Separated ruler measurement from ruler drawing. The results of ruler measurement is now passed via sockets instead of recalculating on each client. (10361)
- Checkpoints are now automatically added to the movement path where the Token moves into or out of a Region that has a Behavior that subscribes to the TOKEN_MOVE_IN or TOKEN_MOVE_OUT event. Added the ability to pause movement at these checkpoints, then subsequently resume (TokenDocument#pauseMovement) or stop (TokenDocument#stopMovement) this movement. (11627)
- Added the snapped property to Token movement waypoints to indicate whether the Token was placed with snapping. (11640)
- Region.CLIPPER_SCALING_FACTOR has been deprecated in favor of the new CONST.CLIPPER_SCALING_FACTOR. Several functions now use this as their default scalingFactor option instead of 1. (11705)
- Added TokenDocument#_preUpdateMovement, TokenDocument#_onUpdateMovement, and the hooks preMoveToken and moveToken. (11754)
- Added support for a pre-determined cost and custom cost function for each individual waypoint in Token#measureMovementPath. (11828)
- Changed the return type of Token#constrainMovementPath from {reached: number, collision: ElevatedPoint|null} to {reached: number, terminalPath: ElevatedPoint[]}. (11829)
- Added Token#_initializeRuler(): BaseTokenRuler | null, which initializes the TokenRuler instance of the Token. (11830)
- Added mode: "replace" | "acquire" | "release" option to TokenLayer#setTargets, which determines the targeting behavior of the provided target IDs. (11831)
- Added the linkToMovement update operation animation option which sets the animation duration of non-movement properties to the duration of the movement animation. (11832)
- The ID of the User that performed the movement is now recorded in the movement history. (11833)
- Intermediate waypoints (the waypoints of grid spaces on the direct path between to waypoints) are now recorded in the movement history. TokenDocument#getDirectMovementPath has been replaced by TokenDocument#getIntermediateMovementPath. (11834)
- Added the showRuler update option which controls whether the ruler of the Token is shown during the movement animation. If undefined, the ruler is shown only if the movement was recorded in the history. (11835)
- Added CONFIG.Token.movement.defaultAction, which is the default action of token movement waypoints. (11836)
- Added Token#updateDragRulerPath and TokenLayer#updateDragRulerPaths which update the path through the waypoints of the drag operation. (11837)
- Changed the signature of TokenRuler#_getWaypointLabel, TokenRuler#_getGridHighlightStyle, and TokenRuler#refresh. Added TokenRuler#_getWaypointStyle, TokenRuler#_getSegmentStyle, TokenRuler#_configureOutline, and TokenRuler#_configureDashLine. (11838)
- Reworked the Region event data of TOKEN_MOVE_IN, TOKEN_MOVE_OUT, and TOKEN_MOVE_WITHIN. The segments, teleport, and forced event data properties have been deprecated. (11841)
- Deprecated the teleport and forced Token update operation options in favor of the new movement waypoint data. (11842)
- Add TokenDocument#move(waypoints: TokenMovementWaypoint | TokenMovementWaypoint[], options?: object): Promise<boolean>, which moves the Token through the provided waypoints. (11843)
- Token drag measurements are now broadcast to other users. (11844)
- Changed the return type of Token#findMovementPath so that it now requires a result property. (11846)
- Changed PointSourcePolygon#origin from Point to ElevatedPoint. (11847)
- Added Token#_getDragWaypointProperties(): {action?: string, teleport?: boolean} and Token#_getDragPathfindingOptions(): TokenFindMovementPathOptions. (11848)
- TokenDocument#pauseMovement now returns a callback that can continue the movement, but only if all other continuation callbacks have been called of all other Token#pauseMovement calls that occurred at the same time. Token#continueMovement has been removed. (11849)
- Tokens now automatically rotate in the direction of movement if dragged or moved by keyboard inputs. The autoRotate update operation option controls this behavior. (11850)
- Added Token#_getAnimationRotationSpeed(options: TokenAnimationOptions): number and Token#_requiresRotationAnimation(): boolean. (11853)
- Added Token#movementAnimationPromise, which returns the promise that resolves once the current movement animation has completed. (11854)

`TOKEN_MOVE_IN``TOKEN_MOVE_OUT``TokenDocument#pauseMovement``TokenDocument#stopMovement``snapped``Region.CLIPPER_SCALING_FACTOR``CONST.CLIPPER_SCALING_FACTOR``scalingFactor``TokenDocument#_preUpdateMovement``TokenDocument#_onUpdateMovement``preMoveToken``moveToken``Token#measureMovementPath``Token#constrainMovementPath``{reached: number, collision: ElevatedPoint|null}``{reached: number, terminalPath: ElevatedPoint[]}``Token#_initializeRuler(): BaseTokenRuler | null``TokenRuler``mode: "replace" | "acquire" | "release"``TokenLayer#setTargets``linkToMovement``TokenDocument#getDirectMovementPath``TokenDocument#getIntermediateMovementPath``showRuler``undefined``CONFIG.Token.movement.defaultAction``Token#updateDragRulerPath``TokenLayer#updateDragRulerPaths``TokenRuler#_getWaypointLabel``TokenRuler#_getGridHighlightStyle``TokenRuler#refresh``TokenRuler#_getWaypointStyle``TokenRuler#_getSegmentStyle``TokenRuler#_configureOutline``TokenRuler#_configureDashLine``TOKEN_MOVE_IN``TOKEN_MOVE_OUT``TOKEN_MOVE_WITHIN``segments``teleport``forced``teleport``forced``TokenDocument#move(waypoints: TokenMovementWaypoint | TokenMovementWaypoint[], options?: object): Promise<boolean>``Token#findMovementPath``result``PointSourcePolygon#origin``Point``ElevatedPoint``Token#_getDragWaypointProperties(): {action?: string, teleport?: boolean}``Token#_getDragPathfindingOptions(): TokenFindMovementPathOptions``TokenDocument#pauseMovement``Token#pauseMovement``Token#continueMovement``autoRotate``Token#_getAnimationRotationSpeed(options: TokenAnimationOptions): number``Token#_requiresRotationAnimation(): boolean``Token#movementAnimationPromise`
### Package Development

- Added support so that modules can use the preImportAdventure or importAdventure hooks to register workflows that can perform asynchronous pre-processing or post-processing of adventure data. (11816)

`preImportAdventure``importAdventure`
### Other Changes

- Allowed for custom enrichers to supply event listeners to their created elements. (8755)
- Improved upon the GameTime API and added CalendarConfig to offer a more robust framework for defining a custom in-world calendar, performing date/time transformations, and formatting returned dates. (11426)
- Made ChatLog##renderBatch functionality accessible to the public API. (11744)
- Provided a way for Document#toEmbed Document embeds to attach interactivity to their embedded results via Document#onEmbed. (11791)
- Improved AbstractFormInputElement and DataField form group/input generation. (11826)

`GameTime``CalendarConfig``ChatLog##renderBatch``Document#toEmbed``Document#onEmbed``AbstractFormInputElement``DataField`
## Bug Fixes


### Documents and Data

- Resolved an issue where ActiveEffect._applyLegacy could set values to undefined. (11527)
- If the user does not have the prerequisite FILES_UPLOAD permission, generation of new Scene preview thumbnails by that user is cancelled. (11582)
- Fixed an issue where deletion keys were always included in the diff returned by DataModel#updateSource, even if the key wasn't deleted. (11827)
- Fixed bug where retrieving new actor-compendium index fields flushed compendium art from the application. (11863)

`ActiveEffect._applyLegacy``undefined``DataModel#updateSource`
### Applications and User Interface

- Creating a JournalEntryPage subtype with an ApplicationV2 Document sheet no longer prevents the parent JournalEntry from being able to render. (11546)
- Made the HTMLDocumentTagsElement somewhat more permissive. It now accepts theoretically valid UUID strings instead of requiring that the Document exist in the current World or active compendium pack. (11717)
- Resolved an issue where HTMLDocumentTagsElement did not work with Document types that lacked a name field. (11738)
- Prevented SceneControls from re-rendering twice every time a new control is activated. (11745)
- Fixed typo in AVConfig hint. (11775)
- Added handling to playlists for handling drag data that contains sound. (11788)

`JournalEntryPage``JournalEntry``HTMLDocumentTagsElement``HTMLDocumentTagsElement``name``SceneControls``AVConfig`
### The Game Canvas

- GridLayer.instance now correctly returns a subclass of CanvasLayer (not BaseGrid as it did previously). (11794)
- Reworked the methods used to manage targeting to close several loopholes. Introduced TokensLayer#setTargets which can be used to set multiple targets at once and made several User methods internal. (10613)
- Accounted for Token movement being stopped by a Region in Ruler measurement history creation. (10830)
- Added dynamic padding for Token Rings when scale correction is less than 1 to prevent visual cropping. (11580)
- The global light source is no longer restricted by roofs. (11644)
- Fixed a bug that caused cone templates to not highlight all the grid spaces they should in scenes with an uneven grid size. (11749)
- Improved snapping for placeable objects that are copied from a Scene with a different grid configuration. (11751)
- Restored CTRL+A functionality for the Token layer. (11752)
- Fixed output buffer size checks in expandBufferRedToBufferRGBA and reduceBufferRGBAToBufferRED to address Scene rendering issues in Firefox. (11759)
- Performed an editing pass of the User Permission Configuration dialog. (11859)

`GridLayer.instance``CanvasLayer``BaseGrid``TokensLayer#setTargets``User``expandBufferRedToBufferRGBA``reduceBufferRGBAToBufferRED`
### Other Changes

- Fixed PerceptionManager render flag alias misalignment. (11790)
- Made FormApplication#_onChangeInput() more specific in targeting only .editor.prosemirror or .editor.tinymce elements. (9952)
- Improved messaging when Foundry is unable to get available packages by replacing the key.split error with a more human-readable error message. (11533)
- Added form locking for non-editable Documents to DocumentSheetV2. (11673)
- Escaped the ID in DocumentSheetV2 to prevent an error in _syncPartState when using form fields. (11742)
- Fixed an error which was preventing the Prototype and Default Token Configuration windows from opening. (11743)
- Restored the correct range (0.2 to 3) to the Scale control in TokenConfig. (11747)
- Fixed a bug which was causing ActorSheet#_onDropFolder to always evaluate as true. (11769)
- Prevented an error that occurred when force-closing a V1 application that was already closed. (11771)
- ForeignDocumentField no longer ignores choices when creating form groups. (11774)
- Fixed a bug causing non-truthy placeholders to not be set by the setInputAttributes helper. (11778)
- Resolved an issue where the "Append Number to name of Unlinked Tokens" setting could create duplicate numbers in certain circumstances. (11799)

`PerceptionManager``alias``FormApplication#_onChangeInput()``.editor.prosemirror``.editor.tinymce``key.split``DocumentSheetV2``DocumentSheetV2``_syncPartState``TokenConfig``ActorSheet#_onDropFolder``ForeignDocumentField``choices``setInputAttributes`
## Documentation Improvements


### Other Changes

- Corrected the Handlebars numberFormat documentation. (8622)
- Resolved an issue that was causing @typedef descriptions to be excluded from the generated API docs. (11573)
- @import was added for referenced classes and @typedefs so that the type is linked correctly in the API docs. (11579)
- Fixed an issue where the Scene class was incorrectly marked as extending BaseItem instead of BaseScene. (11601)
- Corrected the "Fog Exploration" toggle in Scene configuration's Lighting tab. (11662)
- Added documentation for the types used in Peggy. (11765)
- Restored readonly status of certain Game properties. (11813)

`numberFormat``@typedef``@import``@typedef``Scene``BaseItem``BaseScene``readonly``Game`