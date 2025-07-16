# Release 10.286 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.286

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.286


## Version 10 Stable


##### September 20, 2022


## Foundry Virtual Tabletop - Version 10 Patch 3 Release Notes

The Foundry VTT team has been busy working on a lot more than our new upcoming adventure A House Divided! The team has been hard at work combing through community feedback and bug reports to make Foundry even better. If you would like to see more of the changes that went into V10, be sure to check out the Stable release's notes including our What's New in V10 video.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

This release continues our focus on maximizing V10's stability and tightening up the API so users and developers can have the best experience possible with V10. This release includes some improvements for our API documentation, expands the options for developers to work with ProseMirror, and fixes a number of bugs.


## New Features


### Applications and User Interface

- The Support button now includes a count of invalid Documents in the world. (8164)


## API Improvements


### Other Changes

- TypeDoc annotations have been added for the values of enums. (8193)
- The ProseMirror TextSelection class is now exposed for downstream use. (8215)

`enums``TextSelection`
## Bug Fixes


### Architecture and Infrastructure

- The server should now properly initialize a User session in cases where it would sometimes result in the User being stuck at a grey screen when loading the world. (8168)


### Documents and Data

- Map Notes which do not have an associated Journal Entry can now only be moved by users who have the "Create Map Note" permission. (8207)
- Compendium packs should now sort as expected. (8221)
- Macros run through Macro#execute should now have their value (if any) returned. (8060)
- Parent Folders can no longer be nested in a child Folder. (8107)
- Adventure imports should now always import Journals before Scenes. (8127)
- Secret blocks should now correctly get unique IDs even when creating them in rapid succession. (8172)
- Moving already nested Folders into a nested Folder should no longer cause deeper nested Folders beyond the third to become inaccessible. (8178)
- Added missing V10 data model migrations for Item and Active Effect overrides in unlinked Token data. (8180)
- The Combat tracker should now correctly use combatant.isDefeated. (8197)
- Scenes should once again properly load after the cache TTL has expired. (8206)
- CombatTracker._onCombatantMouseDown now correctly checks for the Observer permission. (8209)
- Roll Table entries created from compendium content should no longer lose their reference to the compendium. (8213)
- New Journal Entry Pages are now always added at the end of the list of Pages. (8232)
- The Ping Combatant action is now tied to the Ping permission. (8233)
- BaseMeasuredTemplate#_validateModel should now validate changes to the data as expected. (8237)

`Macro#execute``combatant.isDefeated``CombatTracker._onCombatantMouseDown``BaseMeasuredTemplate#_validateModel`
### Applications and User Interface

- Journals should no longer retain their scroll position when switching between different pages. (7939)
- It is now possible to select multiple Walls with the Select Walls tool. (8059)
- Copying a Document ID from it's sheet header should now work without SSL thanks to the new ClipboardHelper class. (8173)
- Journal Entry Pages can now be dragged and dropped by Players who have Observer permissions to them. (8184)
- The Canvas Controls Tour is no longer resumable to prevent an issue with the Tooltip not appearing on reload. (8186)
- Resetting a Tour's progress no longer prevents another Tour from starting. (8187)
- Bulk audio import from S3 should once again function properly. (8189)
- Activating a Tooltip with TooltipManager#activate when there is an already active Tooltip should now keep the new Tooltip visible. (8190)
- Holding Alt while switching away from the Tile, Token, or Drawing layer no longer leaves their selection boxes visible. (8205)
- Once a button is clicked, Tour button controls are disabled until the next Step is rendered to prevent double-clicks. (8208)
- Long song names under Currently Playing should no longer overlap with the duration controls. (8217)

`ClipboardHelper``TooltipManager#activate`
### The Game Canvas

- Drawings should now have visibility priority over Tiles when set with the same elevation. (8058)
- Fixed an issue where Combatants of unlinked Tokens would not trigger a Combat tracker refresh when a tracked resource changed. (8091)
- The Player view should now be properly refreshed when a Token with vision is dropped onto a scene where the Player did not previously have vision. (8120)
- Light sources should now be rendered with soft edges even if inside a wall loop that doesn't contain other walls. (8153)
- Setting the blur strength from the canvas API is now working properly. (8162)
- The GM view should no longer be used for overhead and roof Tiles if the controlled Token does not have vision enabled. (8169)
- mapElevationAlpha now returns a result rounded to byte precision to prevent potential accuracy errors. (8171)
- Ruler movement for tokens of a size other than 1x1 should now properly align to hex grids. (8196)
- Changing the wildcard path of a Prototype Token should now invalidate the previous cached list of matched images. (8210)
- Token#setTarget should now correctly release targets of the User and not game.user. (8236)

`mapElevationAlpha``Token#setTarget``game.user`
### Package Development

- Performing an Update All should no longer result in a destructuring error in some race conditions. (8179)
- When launching a World for the first time in a new software generation, modules should now be correctly disabled. (8218)


### Localization and Accessibility

- The Measured Template configuration submit button label now matches other labels. (8131)


### Other Changes

- TextEditor.getContentLink should now be better able to handle non-Document drag data passed to it. (8163)
- expandObject can once again recursively expand objects within arrays. (8176)
- Advancing the World time using the default Combat.nextRound method should now correctly pass the userId to the updateWorldTime hook. (8177)
- Color's toRGBA function should once again return a usable CSS string. (8192)
- The Markdown editor now supports tables using the optional Showdown configuration/extension. (8234)

`TextEditor.getContentLink``expandObject``Combat.nextRound``userId``updateWorldTime``Color``toRGBA`
## Documentation Improvements


### Other Changes

- The submodule now provides additional documentation for hookEvents. (8226)

`hookEvents`