# Release 13.334 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.334

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.334


## Version 13 Development


##### December 20, 2024


## Foundry Virtual Tabletop - Version 13 - Development 1 Release Notes

Hello everyone! Just in time for the holiday season, we're excited to bring you all the first Development-phase release of Foundry Virtual Tabletop Version 13.

In the Development phase, our focus is on refining the initial design of major new features with a particular eye towards stabilizing the API for our system and module developers. While we encourage and welcome feedback, please keep in mind that everything is still very much in flux and is still evolving rapidly in the Development phase. In particular, things that have been freshly converted to Application V2 are not in a state that represents their intended final user experience or feature set.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights


### Token Drag Ruler Refinements

Among other improvements, users can now hide the movement ruler from others using the ALT key, and the movement rulers of enemies are no longer visible by default.


### You have the power... of granular theming

ThemeV2 is a major... theme... of Foundry V13, and in an earlier release we've provided Foundry with the ability to operate in light mode or dark mode based on your system settings. With this release, you can also override the default theme of any individual sheet if you like.

`ThemeV2`
### Application V2 Progress

Work continues apace on converting all of Foundry to Application V2, with Journals notably making the jump this release. Additionally, we've added some support to the ApplicationV2 framework itself also by providing built-in, standardized support for tabbed interfaces at the Application level.



## Breaking Changes


### Applications and User Interface


#### ApplicationV2 Migrations

`ApplicationV2`- Converted the RollTableConfig application to ApplicationV2. (8696)
- Converted CombatTracker to ApplicationV2. (11335)
- Converted DocumentSheetConfig to ApplicationV2. (11346)
- Converted ItemDirectory to ApplicationV2. (11360)
- Converted JournalImagePageSheet to ApplicationV2. (11362)
- Converted JournalPDFPageSheet to ApplicationV2. (11363)
- Converted JournalVideoPageSheet to ApplicationV2. (11367)
- Converted MarkdownJournalPageSheet to ApplicationV2. (11372)

`RollTableConfig``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2`
#### Combat Tracker

The update of the Combat Tracker to ApplicationV2 is more impactful, but we wanted to specifically call out that we flipped the default behavior for combats in multiple scenes. In V13, combats are now "unlinked" by default, meaning that the same combat is visible across all scenes. Now, if a pair of Combatants battle their way up a staircase to a different Foundry Scene, they will remain in the same Combat by default.

`ApplicationV2`
## New Features


### Documents and Data

- Players are now allowed to update system properties on Combatants they own. (11922)

`system`
### Applications and User Interface

- The header for a Roll Table is now "sticky" - it always remains visible at the top when you scroll down. (4051)
- Moved the "Lock Rotation" setting from the Identity tab to the Appearance tab and renamed it to make it clear that this setting does not prevent the rotation of the Token, but rather only prevents the Token image from rotating visually. (11871)
- Roll Table results can now be edited using Prosemirror. (11902)


### The Game Canvas

- Drag rulers are now only shown for a Token if the Token's disposition is friendly or if the current user has observer permissions for that Token. (11874)
- A Token's ruler history now only records movement that was initiated by dragging and by default, the ruler is no longer displayed for movement that was not the result of dragging the Token. (11876)
- Token drag ruler measurements can now be hidden by holding the ALT key so that only the measuring user can see them. (11882)


### Localization and Accessibility

- Added localization support to various operations related to Roll Tables. (4538)


## API Improvements


### Documents and Data

- Implemented a special syntax for mergeObject and DataModel#updateSource operations to explicitly replace an object without needing to resort to {recursive: false}. (11273)
- Added wildcard sanitization for htmlFields and filePathFields that exist within ArrayFields. (11471)
- Changed the ActiveEffect#change#mode field to be nullable: false. (11880)

`mergeObject``DataModel#updateSource``{recursive: false}``htmlFields``filePathFields``ArrayFields``ActiveEffect#change#mode``nullable: false`
### Applications and User Interface

- Implemented per-sheet theming options for Document sheets. (11916)


### The Game Canvas

- Added TokenMovementOperation#method: "dragging" | "keyboard" | "api" | "undo" to record the method that was used to initiate the movement. (11875)
- Set the total cost of movement to infinity if the cost to move any of the individual grid space is infinity. (11894)
- Token#constrainMovementPath now constrains movement that has an infinite cost unless the ignoreCost option is true. Changed the return type of Token#constrainMovementPath to [constrainedPath: TokenMovementWaypoint[], wasConstrained: boolean].  (11896)

`TokenMovementOperation#method: "dragging" | "keyboard" | "api" | "undo"``Token#constrainMovementPath``ignoreCost``Token#constrainMovementPath``[constrainedPath: TokenMovementWaypoint[], wasConstrained: boolean]`
### Localization and Accessibility

- Added a format and localize option to the update function of progress notification bars. (11919)

`format``localize`
### Other Changes

- Consolidated tab handling in various applications to the ApplicationV2 level. (11023)
- Added a clientSettingChanged hook that allows packages to react to changes in a client-setting that they don't own themselves (such as core.uiConfig). (11948)

`ApplicationV2``clientSettingChanged``core.uiConfig`
## Bug Fixes


### Documents and Data

- Improved the scroll behavior of Roll Table sheets. (9990)
- Prevented an error when attempting to edit Walls (TypeError: Cannot read properties of null (reading 'type')). (11884)

`TypeError: Cannot read properties of null (reading 'type')`
### Applications and User Interface

- Added scrolling to the "Support Details" dialog. (11931)
- Resolved an issue where ActiveEffectConfig failed to show default image or to localize alt text. (11933)
- Resolved an issue where the Macro config could not be completely minimized. (11945)
- Fixed a typo in the "scrollable" CSS class name of ActiveEffectConfig. (11946)

`ActiveEffectConfig``ActiveEffectConfig`
### The Game Canvas

- Resolved an issue where vision did not have fog of war applied in certain edge cases due to a self-intersecting ClockwiseSweepPolygon. (9953)
- Fixed a minor rounding issue that was causing inconsistent snapping on a square grid. (11873)
- Fixed movement cost calculation for Tokens larger than a single grid square. (11877)
- Resolved an issue that was preventing the "Teleport Token" and "Pause Game" Scene Region behaviors from functioning. (11881)

`ClockwiseSweepPolygon`
### Other Changes

- Updating a Scene from SceneConfig no longer resets background image offset. (11935)
- PrototypeTokenConfig can once again be opened from the title bar of ActorSheetV2. (11940)
- Resolved an issue where adding a new change in ActiveEffectConfig erased any unsaved ones. (11942)

`SceneConfig``PrototypeTokenConfig``ActorSheetV2``change``ActiveEffectConfig`