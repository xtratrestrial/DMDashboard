# Release 13.335 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.335

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.335


## Version 13 Development


##### January 31, 2025


## Foundry Virtual Tabletop - Version 13 - Development 2 Release Notes

Welcome to the Version 13 Developer 2 release of Foundry Virtual Tabletop!

With this release, our team has now completed the initial API-level work and built some preliminary user interfaces for exciting new features. As always, we have also invested extensively into the technical foundations of our software, adding further improvements to our lighting engine and API.

This release likely marks the conclusion of the Development phase of our work on Version 13. Our focus during the Development phase involved further refinements to prototype features and solidifying the API based on feedback from users in our Developer community. If you are a Module or System developer, this is the moment to test your packages in Version 13 in order to provide us with feedback and request any final API changes that would make your lives easier!

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. Always backup any important data before testing, and please remember that this release is not intended to use in a live game.


## Update Highlights


### Light Versus Darkness

Foundry V13 Dev 2 brings new developments in the eternal struggle between darkness and the light. When a lighting source and a darkness source overlap, you can now assign each source a "priority" to determine which one "wins" and gets to dictate the lighting in the areas of conflict.


### Wait... Regions that Modify Movement Speed? Really?

Yes, really! As part of our work on the community-voted Drag Ruler feature, we saw an opportunity to help support the common situation where a certain area is mechanically more difficult (or easier!) to move through. This release includes the new "Modify Movement Cost" Region Behavior which offers core support for defining Regions that can apply a multiplier to the movement speed of Tokens that are within them. This core support can also be leveraged by Module and System Developers to implement system-specific rules such as difficult terrain in D&D or PF2E.


### Prettier Roll Tables

Roll Tables, one of the older components of Foundry, got an overhaul while converting them to Application V2. A separate interface is now available for editing and viewing Roll Tables, resulting in a significantly smoother and aesthetic experience.


### Moar AppV2 Conversions! Moar!

Several more major parts of Foundry got the ApplicationV2 treatment, including Compendiums, Playlists, Settings, the Scenes sidebar, and more.


## Breaking Changes


### Documents and Data

- Redesigned the behavior of DataField#getInitialValue to provide more consistent standards and handling for special case types like undefined, null, blank, (etc.). (11973)
- Added strictness to mergeObject and DataModel#updateSource deletion keys. They now MUST pass null as their value to be honored. (11977)
- Changed several fields in TableResult schema as part of the ApplicationV2 conversion. (12049)
- Fixed the name of the icons in the icons/commodities/treasure folder. They now correctly use the word "brooch", not "broach". (12060)
- Removed unknownKeys as a general SchemaField property in favor of special handling in the BasePackage model specifically where this is used. (12068)

`DataField#getInitialValue``undefined``null``blank``mergeObject``DataModel#updateSource``null``TableResult``ApplicationV2``icons/commodities/treasure``unknownKeys``SchemaField``BasePackage`
### Applications and User Interface

- The conversion of the following Applications to AppplicationV2 will likely be breaking: AdventureExporterBaseSheet, CardConfig, Compendium, CompendiumDirectory, DocumentOwnershipConfig,
            GridConfig, PlaylistDirectory, SceneDirectory, Settings.
- Reassigned IDs for sidebar tabs as needed to ensure that no HTML element IDs are duplicated between the main sidebar tab and its popped out twin. (9822)
- Changed context menus so that they render with a fixed position relative to the viewport instead of injecting them alongside their target. (10747)

`AdventureExporterBaseSheet``CardConfig``Compendium``CompendiumDirectory``DocumentOwnershipConfig``GridConfig``PlaylistDirectory``SceneDirectory``Settings`
### The Game Canvas

- Enhanced collision detection performance with quadtree-indexed Canvas Edges. (11798)


### Other Changes

- Document#uuid and parseUuid now return null in cases where they previously would return malformed UUIDs or throw errors. (12062)
- foundry.utils.getType now returns "Unknown" for non-simple (non-plain) objects that were previously identified as "Object". (12064)
- DialogV2 content and notification messages are now cleaned in most circumstances and arguments of Notifications#notify are now escaped by default. (12072)

`Document#uuid``parseUuid``null``foundry.utils.getType``"Unknown"``"Object"``DialogV2``Notifications#notify`
## New Features


### Documents and Data

- Card#suit and Card#value fields are now required: true. (11087)

`Card#suit``Card#value``required: true`
### Applications and User Interface

- Added the ability to "unlock" Roll Table values for editing to improve performance for large tables. (4169)
- Fixed a bug which could cause context menus to fail to display that was caused by a right-click scrolling the container instead of overlaying it. (8358)
- During an Adventure import process to update previously imported content, Documents that were deleted from the World are no longer deleted from the source Adventure. (8659)
- Added a "View" mode for roll tables. (10417)
- Added a "Clear Movement History" option to the context menu of Combatants in the combat tracker. (11987)
- The polygon Drawing tool no longer drops a point when left-click is released, bringing it in line with the behavior of the Region polygon tool. (12012)
- Added a simple way to switch to either block or inline styling with code HTML elements. (12021)
- Restored the display of the standard browser input[type="date"]:-webkit-calendar-picker-indicator. (12055)

`code``input[type="date"]:-webkit-calendar-picker-indicator`
### The Game Canvas

- Introduced light and darkness Source types, a prioritization system to resolve overlaps between them, and updated UI to match. (10437)
- Improved the performance of ClockwiseSweepPolygon#_sortVertices. (12051)
- Added the "Modify Movement Cost" Region Behavior, which allows the movement cost to be increased or decreased proportionally within the Region. (12052)

`light``darkness``ClockwiseSweepPolygon#_sortVertices`
### Other Changes

- Enriched the description of AdventureImporter. (11910)

`AdventureImporter`
## API Improvements


### Architecture and Infrastructure

- Developed a more performant solution for the one-time initialization performed in custom element constructors. (11587)


### Documents and Data

- Added the new TypedObjectField core field type to assist developers managing complex and dynamic data. (10448)
- Added the actor parameter to the modifyTokenAttribute hook to provide additional context. (11537)
- When configuring Document ownership, the new ==key syntax is now used to force replace the whole object. (11952)
- Added API to DataField to allow custom handling for differential updates. (11978)
- Added round, turn, and skipped properties to combat event data, allowing combat turn and round event handlers to be called for combatants that are skipped by "Next Turn" / "Next Round". (11998)
- World time is now advanced for each Combatant that is skipped by "Previous/Next Round/Turn". Added combat time-related functions to assist: Combat#getTimeDelta, fromRound, fromTurn, toRound, and toTurn (which calculates the time delta between two turns). (12018)
- Improved Document#clone to ensure it does not mutate the provided data object. (12026)

`TypedObjectField``actor``modifyTokenAttribute``ownership``==key``DataField``round``turn``skipped``Combat#getTimeDelta``fromRound``fromTurn``toRound``toTurn``Document#clone`
### Applications and User Interface

- Converted AdventureExporter to ApplicationV2. (11321)
- Converted BaseSheet to ApplicationV2. (11326)
- Converted CardConfig to ApplicationV2. (11328)
- Converted Compendium to ApplicationV2. (11339)
- Converted CompendiumDirectory to ApplicationV2. (11340)
- Converted DocumentOwnershipConfig to ApplicationV2. (11345)
- Converted GridConfig to ApplicationV2. (11354)
- Converted PlaylistDirectory to ApplicationV2. (11380)
- Converted SceneDirectory to ApplicationV2. (11385)
- Converted Settings to ApplicationV2. (11386)
- Renamed the "Ignore Walls" behavior (such as when a GM is moving a Token) to "Unconstrained Movement" and added a Token#_getDragConstrainOptions for convenience. (11883)
- Added DialogV2.query to allow showing a dialog to another user. (12024)
- Added CONFIG.Canvas.elevationSnappingPrecision, which controls the elevation step size for changing the elevation with CTRL+SHIFT+WHEEL. (12044)

`AdventureExporter``ApplicationV2``BaseSheet``ApplicationV2``CardConfig``ApplicationV2``Compendium``ApplicationV2``CompendiumDirectory``ApplicationV2``DocumentOwnershipConfig``ApplicationV2``GridConfig``ApplicationV2``PlaylistDirectory``ApplicationV2``SceneDirectory``ApplicationV2``Settings``ApplicationV2``Token#_getDragConstrainOptions``DialogV2.query``CONFIG.Canvas.elevationSnappingPrecision`
### The Game Canvas

- Added TOKEN_ANIMATE_IN, TOKEN_ANIMATE_OUT, and TOKEN_ANIMATE_WITHIN region events to supplement the existing TOKEN_ENTER, TOKEN_EXIT, TOKEN_MOVE_IN, and TOKEN_MOVE OUT events. These new events fire based on the animation of the movement only. This means they happen at the time of actual movement, and only if the Scene is viewed and the movement is animated. (11891)
- Added API that allows Region Behaviors to add terrain properties to the movement paths of Tokens that intersect Regions. (11897)
- Added TokenMovementOperation#autoRotate and TokenMovementOperation#showRuler, which can be modified in TokenDocument#_preUpdateMovement and the preMoveToken hook. (12011)
- Added several new functions to assist with rulers and waypoints: Ruler#_configureOutline, Ruler#_getWaypointLabel, Ruler#_getWaypointStyle, and Ruler#_getSegmentStyle. Added TokenRulerWaypoint#index. (12017)
- Added TOKEN_ANIMATE_IN and TOKEN_ANIMATE_OUT Region events, which are triggered when a Token animates in or out of a Region. (12070)

`TOKEN_ANIMATE_IN``TOKEN_ANIMATE_OUT``TOKEN_ANIMATE_WITHIN``TOKEN_ENTER``TOKEN_EXIT``TOKEN_MOVE_IN``TOKEN_MOVE OUT``TokenMovementOperation#autoRotate``TokenMovementOperation#showRuler``TokenDocument#_preUpdateMovement``preMoveToken``Ruler#_configureOutline``Ruler#_getWaypointLabel``Ruler#_getWaypointStyle``Ruler#_getSegmentStyle``TokenRulerWaypoint#index``TOKEN_ANIMATE_IN``TOKEN_ANIMATE_OUT`
### Other Changes

- Added User#query, which allows a user to send a query registered in CONFIG.queries to another user for a response. (11235)
- Removed bespoke Set operation implementations in favour of native browser implementations. (11594)
- Split the "Behavior Status Changed" region event into "Behavior Activated", "Behavior Deactivated", "Behavior Viewed", and "Behavior Unviewed". (11889)
- Resolved an issue where an early return in ApplicationV2#render would result in failing to create any UI element under certain circumstances (during a non-forced render and before preparing context). (11918)
- Added additional context to the result of parseUuid. If the parsed UUID has a compendium redirect, the redirected UUID is now also returned. (11991)
- Added additional HTMLProseMirrorElement lifecycle events. (12061)
- Added foundry.utils.cleanHTML, which sanitizes HTML strings. (12071)

`User#query``CONFIG.queries``Set``ApplicationV2#render``parseUuid``HTMLProseMirrorElement``foundry.utils.cleanHTML`
## Bug Fixes


### Architecture and Infrastructure

- Because Firefox attempts to run default event handling on custom submit Events, Foundry now always constructs them with {cancelable: true}. (11981)

`{cancelable: true}`
### Documents and Data

- Changed the way that DataModel#updateSource for dryRun: true updates. It now captures and operates on a clone of the data model to avoid a number of edge cases related to handling dry-run backups and validation of dry-run changes. (10922)
- Fixed a bug where deleting a property with the -= prefix would not work if the property was part of a DataModel. (11420)
- Fixed a bug where ActiveEffect.applyField could incorrectly set the target value to undefined in some cases. (11979)
- Prevented a validation that occurred when updating a system-defined TypedSchemaField that was not inside an ArrayField. (11986)
- Prevented an error that could be incorrectly thrown with deletion keys and non-nullable fields. (11990)
- Moving backwards to previous Combat turns and Rounds no longer triggers combat turn or combat round events. (11997)
- Improved compendium UUID redirects so that they can resolve old-style UUIDs. (12005)
- Deleting the last combatant in the turn order during its turn now properly starts the turn of the next combatant instead of the previous combatant. (12009)
- Combat#previousTurn no longer incorrectly changes turn if it is called in round 0. (12014)
- Calling Combat#nextRound/#nextTurn in round 0 no longer advances time. (12015)
- Fixed an issue where Combat#previousRound decreases the world time by one turn time too little. (12016)
- Resolved incorrect recursion limit handling in interactions between TextEditor._embedContent and RollTable._buildEmbedHTML. (12020)
- Fixed a bug which was causing relative uuids do not resolve correctly on synthetic actors. (12023)
- Prevented a crash that could occur when using "Import Data" context option in the Items directory. (12027)
- Resolved a bug that was preventing adding changes to an active effect (AE) via the UI unless the AE already had changes. (12035)
- Prevented an error that could occur when toggling "Enable Markers" on or off in Combat Tracker Settings. (12037)
- Fixed missing assignment of the parent in ArrayField#element. (12046)

`DataModel#updateSource``dryRun: true``-=``DataModel``ActiveEffect.applyField``undefined``TypedSchemaField``ArrayField``Combat#previousTurn``Combat#nextRound``#nextTurn``Combat#previousRound``TextEditor._embedContent``RollTable._buildEmbedHTML``parent``ArrayField#element`
### Applications and User Interface

- Prevented overlapping of the Chat input and the macro hotbar that could previously occur with common resolutions. (11930)
- Improved the behavior and consistency of the "Show GM Users" checkbox in Ownership Configuration dialogs when more than one copy of the dialog is open. (11535)
- Resolved an issue where HTMLProseMirrorElement.create could not create a toggled editor. (11567)
- Restored the ability for the T key to remove a Token target in addition to adding targets. (11936)
- The #notifications container was moved so that it is once again a direct child of <body> to ensure that z-index stacking works properly with other interface layers. (11954)
- Resolved an issue where the UserConfig application could overflow and become unscrollable with an Actor selected. (11992)
- Added missing localization for a context menu option in RollTableDirectory. (12034)
- Buttons on RollTableConfig are no longer cut off if there are enough results to scroll. (12038)

`HTMLProseMirrorElement.create``#notifications``<body>``z-index``UserConfig``RollTableDirectory``RollTableConfig`
### The Game Canvas

- Fixed a bug where updating a token's width or height with a fixed animation duration made the token unmovable. (11944)
- Resolved an issue where movement histories were not cleared for skipped Combatants when advancing to the next round or turn. (11947)
- Fixed an issue where the Teleport Token Behavior would not work if the destination region is in a different scene and the Token is moved into the region by a user with insufficient permission to perform a cross-scene teleport. (12004)


### Localization and Accessibility

- Fixed a bug where ArrayFields of SchemaFields were not being localized with LOCALIZATION_PREFIXES. (11804)

`ArrayField``SchemaField``LOCALIZATION_PREFIXES`
### Other Changes

- Resolved an issue where the minimum grid size in GridConfig was accidentally not included when SceneConfig was refactored to use a variable. (11920)
- Fixed an issue where malformed @UUID content links could prevent Document sheets from rendering. (11926)
- Added an automatic re-render when programmatically toggling uiConfig.colorScheme to light mode so that a manual reload is no longer required to update the styling. (11937)
- ChatLog now calls a hook for its context options. (11943)
- Added a plugin event to HTMLProseMirrorEditor so that it is easier to add things like the document linking tool. (12048)
- Improved the behavior of diffObject when using special keys like forced deletion or forced replacement. (12050)

`GridConfig``SceneConfig``@UUID``uiConfig.colorScheme``ChatLog``HTMLProseMirrorEditor``diffObject`
## Documentation Improvements


### Other Changes

- Added missing API Docs for client globals like fromUuidSync. (11498)

`fromUuidSync`