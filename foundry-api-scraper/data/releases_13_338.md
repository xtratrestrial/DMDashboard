# Release 13.338 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.338

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.338


## Version 13 Testing


##### March 18, 2025


## Foundry Virtual Tabletop - Version 13 - Testing 3 Release Notes

We're excited to bring you Foundry VTT V13 Testing 3, the third release in the Feature Testing phase of our development cycle. This build is primarily focused on correcting bugs, improving the Foundry VTT API, and streamlining user experience based on feedback from our community.

This may be the last chance to check things out and provide actionable feedback before Stable hits!

WARNING: This Testing update is intended for those dedicated users who wish to test the new features provided in Version 13. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!


## Update Highlights


### Building Towards Greatness

Foundry VTT V13 Testing 3 introduces two new build options:


##### A Dedicated Node.js Build

`Node.j`This is now the lightweight, cross-platform version of Foundry VTT that should be used. It does not include an electron client, and all cross-platform dependencies are included.

Another benefit of this change is that the Linux build no longer needs to carry any cross-platform dependencies.


##### The Windows Portable Build

This new build type allows Windows users to conveniently test out new versions of Foundry VTT without disrupting their primary installation.

Before testing out a new major version of Foundry VTT, taking a Snapshot is recommended. At a minimum, you should always backup all your important Worlds!

Once your data is safely backed up, here's how to use the Windows Portable build try out the new Foundry VTT version:

- Triple-check that you backed up your data
- Download the Windows Portable build of the version to test
- Extract the downloaded file
- In the extracted folder, double-click the Foundry Virtual Tabletop.exe file to launch it

`Foundry Virtual Tabletop.exe`WARNING: The Windows Portable build currently uses the same Foundry VTT User Data Folder as your "real" version of Foundry VTT. We strongly recommend creating and using a new Foundry VTT User Data Folder to test with instead.


##### Configuring a Dedicated "Test" Foundry User Data Folder

There are two different ways to create and use a test folder. First, create a new folder somewhere (for example, D:\Foundry_VTT_User_Data_Test). You can then tell Foundry VTT to use this new test user data folder in one of two ways:

`D:\Foundry_VTT_User_Data_Test`- The Foundry VTT Setup Screen
        The simplest way to ensure that you do not accidentally affect your real data while testing is to  change the Foundry User Data Folder manually before testing, but it may be easy to forget this step.
- Windows shortcut
        You can create a Windows shortcut that points to your portable "Foundry Virtual Table Top.exe". You can then add a launch parameter to the end of the shortcut's target to automatically use your new test User Data folder like.
        For example, your shortcut's target might be: "Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test".

The Foundry VTT Setup Screen

The simplest way to ensure that you do not accidentally affect your real data while testing is to  change the Foundry User Data Folder manually before testing, but it may be easy to forget this step.

Windows shortcut

You can create a Windows shortcut that points to your portable "Foundry Virtual Table Top.exe". You can then add a launch parameter to the end of the shortcut's target to automatically use your new test User Data folder like.

`"Foundry Virtual Table Top.exe"`For example, your shortcut's target might be: "Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test".

`"Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test"`
### Token Drag Moving Forward

Based on user feedback, we have made some further refinements to the Token Drag Movement and Distance Measurement user experience.

- Right-clicking now only removes a single waypoint instead of cancelling the entire process.
- Instead, you can now use the ESC key to cancel the entire process.
- You can no longer remove the last waypoint using the keyboard (formerly ALT+F by default) because it ended up feeling awkward in practice.

We have also implemented a new labelling system for these two tools using HTML and CSS. These labels are designed to be as simple as possible and to be easily extended by our community developers.


#### Example 1: Simple Movement with Waypoints

At first, only the total movement displays. When using waypoints, the amount of movement past the last waypoint is also added (in parentheses).

In this example, the monk takes a corner as they head towards a cave.


#### Example 2: Complex Movement

If elevation is non-zero at any point of the move, the current elevation and the amount of change after the last waypoint are also added (in parentheses).

In this example, the monk first steps 5 feet down off a rock, descends an additional 20 feet to the road below, and then turns and heads into the cave.


### Migrating Toward Modern Architecture + Documentation Galore

This release marks an important milestone for us: all JavaScript files have now been migrated to ESM under a single foundry.mjs module entrypoint, capstone-ing a multi-year modernization effort. Additionally, extensive effort was dedicated to fixing and improving API documentation throughout the software.

`foundry.mjs`
### Oonts! Oonts! Oonts! Oonts!

On a much sillier note, you can now use the new Sound-Reactive Pulse animation to configure lights so they pulse in sync with your in-game audio. You can even set lights to react exclusively to bass, mid-tones, or treble—because... why not?

Additionally, for module developers, we've exposed a brand-new AudioHelper API, providing real-time audio analysis data so you can build even more immersive and audio-reactive experiences.

`AudioHelper`
## Breaking Changes


### Applications and User Interface

- Added ApplicationV2#_createContextMenu and deprecated ContextMenu.create for ApplicationV2 instances. Rationalized Document context menu hook signatures. (12335)

`ApplicationV2#_createContextMenu``ContextMenu.create``ApplicationV2`
### Architecture and Infrastructure

- Moved TinyMCE deprecation window forward from v15 to v14. (12330)


## New Features


### Architecture and Infrastructure

- Converted PackageConfiguration to ApplicationV2, including CategoryFilterApplication. (9976)
- Implemented a portable (Electron) Windows build option. (12276)
- Performed additional dependency updates for V13 Testing 3, including Electron 35. (12331)
- Completed migration of all JavaScript files to ESM under a single foundry.mjs module entrypoint. (12343)
- Implemented a new cross-platform headless Node.js (zip file) build option. (11755)

`PackageConfiguration``ApplicationV2``CategoryFilterApplication``Node.js`
### Documents and Data

- Fixed a bug where clicking the Update Roll Table button caused enrichers in the table description to become baked-in HTML instead. (12308)


### Applications and User Interface

- Changed the window title of the "Update Notes" app to match the title of the notes themselves. (9949)
- Resolved a discrepancy in the Chrome browser between calendar pickers in the World edit config in the Setup screen and their in-World counterparts. (10043)
- When a User joins a World, their /join credentials can now be saved by a browser's password manager. (11674)
- Updated deprecated Font Awesome icon names. (11862)
- Extended the createDialog for JournalEntryPage to allow selecting a JournalCategory as part of page creation. (12247)
- Changed the main part of the CombatTackerConfig dialog to allow for easier extension and better scrolling behavior. (12250)
- Fixed a bug where the AppV1 window header was misaligned. (12251)
- The Force Snap to Grid Vertices button toggle now universally controls grid snapping behavior across all layers, not just the active one. (12283)
- Resolved an issue where tags in <string-tags> used --color-border-dark-3, which is not defined. (12286)
- Added a "Clear Movement Histories" button to the Combat Tracker to clear the movement history of all Combatants in the viewed Combat encounter. (12326)
- Added server configuration support for a Electron fullscreen window preference. (12332)
- Right-clicking during both Distance Measurement and Token Drag Movement now only removes a single waypoint at a time. (12336)
- Token Drag Movement and Distance Measurement operations can now both be canceled by pressing the Escape key. (12338)
- Improved the presentation style of Ruler waypoint labels to use the HTML HUD container and more informative semantics. (12350)

`/join``createDialog``JournalEntryPage``JournalCategory``CombatTackerConfig``AppV1``<string-tags>``--color-border-dark-3`
### The Game Canvas

- Implemented a texture loader enhancement that leverages memory-based texture eviction and source pinning. (10618)
- Changed the rendering of other users' cursors so that they now always render at the same size regardless of the current canvas zoom level. (12226)
- Added a “Sound-Reactive Pulse” light animation type using the new audio analysis API. (12294)
- Removed config-based toggling for KTX2/Basis loaders and enabled them by default. (12314)


### Package Development

- Blocked uploads (via GUI only) into certain /systems, /modules, and /worlds paths to help enforce best practices. (8467)
- Improved error reporting when encountering a corrupt archive during package installation. (12069)
- Changed the "update available but for future core version" notification message so that it is treated as an informational notice instead of a warning. (12231)

`/systems``/modules``/worlds`
### Other Changes

- The Settings sidebar no longer accesses SettingsConfig at the deprecated globalThis location. (12255)

`Settings``SettingsConfig``globalThis`
## API Improvements


### Documents and Data

- Added Combat#clearMovementHistories, Combatant#clearMovementHistory, and CombatantGroup#clearMovementHistories to help manage movement history. (12296)

`Combat#clearMovementHistories``Combatant#clearMovementHistory``CombatantGroup#clearMovementHistories`
### Applications and User Interface

- Added DialogV2.input, a utility helper to generate a dialog for user input. (9894)
- Converted BackupList to ApplicationV2. (11323)
- Converted BackupManager to ApplicationV2. (11324)
- Converted CameraViews to ApplicationV2. (11327)
- Converted SetupApplicationConfiguration to ApplicationV2. (11388)
- Converted UpdateNotes to ApplicationV2. (11395)
- Converted WorldConfig to ApplicationV2. (11397)
- Added audio context analysis features to AudioHelper. (12293)
- Added "input" as a dialog type for DialogV2.query. (12295)
- Moved all buttons in the Combat Tracker that apply to the viewed Combat encounter into a context menu. (12327)

`DialogV2.input``BackupList``ApplicationV2``BackupManager``ApplicationV2``CameraViews``ApplicationV2``SetupApplicationConfiguration``ApplicationV2``UpdateNotes``ApplicationV2``WorldConfig``ApplicationV2``AudioHelper``"input"``DialogV2.query`
### The Game Canvas

- Added event handlers to InteractionLayer for the following keybindings: Delete, Cycle View, Copy, Paste, Select All, Dismiss, Undo, and Highlight Objects. (11270)
- Added MeasuredTemplate#testPoint to test whether a point is contained within the template shape. (11558)
- Added a public function to update Region containment for all Tokens within a Scene or a subset of those Tokens. (11561)
- Exposed the movement data of the TokenDocument as TokenDocument#movement. (12240)
- Added CombatTracker#_shouldHighlightToken(token: Token): boolean, which determines whether a Token is highlighted if its Combatant is hovered in the Combat Tracker. (12282)
- Added support for KTX2 compressed textures. (12300)
- The animation speed of a moving Token is now modified based on terrain difficulty. (12309)
- Added PlaceableObject#_initializeDragLeft/Right and PlaceableObject#_finalizeDragLeft/Right. (12351)

`InteractionLayer``MeasuredTemplate#testPoint``TokenDocument``TokenDocument#movement``CombatTracker#_shouldHighlightToken(token: Token): boolean``PlaceableObject#_initializeDragLeft/Right``PlaceableObject#_finalizeDragLeft/Right`
### Localization and Accessibility

- Added i18n debugging to report missing keys. (12347)

`i18n`
### Other Changes

- Improved and reorganized the new v13 GameTime and CalendarData APIs. (12299)
- Added an API method for pulling Users to a Scene. (12307)
- Migrated the tours classes to ESM. (12313)
- globalThis backwards compatibility references can now be overridden with a warning. (12333)

`GameTime``CalendarData``tours``globalThis`
## Bug Fixes


### Architecture and Infrastructure

- Fixed a bug where backups would fail silently if they ran out of disk space. (10859)
- Fixed a bug where important "function" keybindings such as F5, F11, and F12 were not functioning in the Electron app. (12262)


### Documents and Data

- Added missing documentation to TourStep for the sidebarTab, layer, and tool properties. (12065)
- Fixed a bug where DataModel#validate did not validate values of forced replacement (==) keys. (12219)
- Resolved an error that was thrown when creating a CombatantGroup. (12269)
- Fixed a bug where attempting to update multiple scenes could fail if some were cached and others were not. (12280)
- Added CombatantGroup and JournalEntryCategory to CONST.EMBEDDED_DOCUMENT_TYPES. (12288)
- Fixed a bug where calling Combat#rollInitiative with {updateTurn: false} still updated the combat turn. (12311)
- Calling Combat#resetAll no longer changes which combatant is currently taking their turn. (12312)
- Restored the ability to use type filePicker: "folder" in a setting to allow users to pick a directory path. (12321)
- Improved the support for CombatantGroups in the various Combat#_on * DescendantDocuments functions during Combat##onModifyCombatants. (12322)
- Fixed a bug where removing an entry from a TypedObjectField in a Document will fail data migration if the removed TypedObjectField contained inner TypedObjectFields. (12324)
- Fixed a bug where SchemaField#migrateSource did not migrate values of forced replacement (==) keys. (12329)

`TourStep``sidebarTab``layer``tool``DataModel#validate``==``CombatantGroup``CombatantGroup``JournalEntryCategory``CONST.EMBEDDED_DOCUMENT_TYPES``Combat#rollInitiative``{updateTurn: false}``Combat#resetAll``filePicker: "folder"``CombatantGroup``Combat#_on``*``DescendantDocuments``Combat##onModifyCombatants``TypedObjectField``TypedObjectField``TypedObjectFields``SchemaField#migrateSource``==`
### Applications and User Interface

- Fixed some bugs with AV Dock rendering. (11929)
- Removed the Sheet Config header button that was incorrectly included in the Document Ownership Configuration window. (12146)
- Changed the View Documentation window so that it now opens in a standard browser tab instead of an iframe, indirectly resolving an issue involving cookie configuration. (12153)
- Fixed a bug where Documents in compendium packs were missing their import buttons. (12182)
- Prevented an error that occurred when switching to a non-core category of Scene controls. (12258)
- Fixed a bug where updating a ChatMessage before the notification faded caused the notification to become permanent. (12290)
- Fixed a bug where textarea background colors were not updated and did not respect light / dark mode. (12317)
- Fixed a bug where the "Welcome to Foundry Virtual Tabletop" tour crashed on step 2. (12319)
- Improved deprecation handling for the onClick function in SceneControls. (12320)
- Fixed a bug where ui.chat.render() failed to re-render the chat. (12323)
- Fixed a bug where the default boolean property on DialogV2 buttons was not respected. (12325)
- Non-core FolderConfig registrations are no longer ignored
- Fixed a bug where ActorSheetV2#_onRender incorrectly constructed DragDrop with permission instead of permissions. (12354)

`ChatMessage``textarea``onClick``SceneControls``ui.chat.render()``default``DialogV2``ActorSheetV2#_onRender``DragDrop``permission``permissions`
### The Game Canvas

- Fixed a bug where movement cost modification was not applied to the first grid square if the region's shape was aligned with the grid. (12266)
- Removed square-grid-like wall snapping on gridless maps. (12281)
- Fixed a bug where movement cost modification did not apply to the first grid hex if the region's shape was aligned with the grid. (12291)
- Fixed a bug where CanvasVisibility incorrectly extended CanvasLayer instead of CanvasGroupMixin(PIXI.Container). (12310)
- SoundsLayer no longer uses the deprecated onClick for its "Clear All" button. (12353)

`CanvasVisibility``CanvasLayer``CanvasGroupMixin(PIXI.Container)``SoundsLayer``onClick`
### Package Development

- Restored the ability to hot reload CSS. (11939)


### Dice and Cards

- Improved the rendering of Roll flavor text. (12271)


### Localization and Accessibility

- Resolved an issue where EmbeddedDataFields were not being localized with LOCALIZATION_PREFIXES as expected. (11805)
- Added DOCUMENT.CombatantGroup and DOCUMENT.CombatantGroups to en.json. (12289)
- Fixed localization string for embedded Roll Tables ("TABLE.ACTIONS.Draw", which should be "Range" in English). (12302)

`EmbeddedDataFields``LOCALIZATION_PREFIXES``DOCUMENT.CombatantGroup``DOCUMENT.CombatantGroups``en.json``"TABLE.ACTIONS.Draw"`
### Other Changes

- DocumentSheetV2 titles now automatically refresh when their Document is renamed. (11761)
- Corrected some CalendarData schema issues. (12249)
- Improved the styling of the chat log when it is popped out.  (12273)
- Contents of an inactive ProseMirror editor overflow when using {{ formGroup }}. (12275)
- Added a missing CSS selector for AppV1 Journal Entry navigation. (12303)
- Resolved an issue where nested tables were incorrectly not showing the results of subtables. (12346)

`DocumentSheetV2``CalendarData``{{ formGroup }}``AppV1`
## Documentation Improvements

The extent of the API Documentation work that was completed for this release was extremely signficant and isn't fully captured by the items here. Overall, the API documentation is in a much better place after V13 Testing 3.


### Documents and Data

- Fixed a typo in the description of ActiveEffect#active. (11585)

`ActiveEffect#active`
### Applications and User Interface

- Renamed "Wall Direction" to "Restriction Direction". (10298)


### Other Changes

- Fixed API documentation of AdventureImporter#_prepareImportOptionsSchema.' (12184)
- Fixed some canvas-related API documentation errors. (12277)
- Fixed some non-canvas-related API documentation errors. (12349)

`AdventureImporter#_prepareImportOptionsSchema`