# Release 13.339 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.339

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.339


## Version 13 Testing


##### March 27, 2025


## Foundry Virtual Tabletop - Version 13 - Testing 4 Release Notes

We're on the steady slide toward the finish line for a stable build of Version 13! V13 Testing 4 represents the culmination of months of hard work, and primarily introduces a variety of bug fixes and small finishing touches as we get closer to that final stable build. While it is a testing build, we anticipate this release as sort of a 'release candidate' that may be nearly identical to the stable build of V13.

WARNING: This Testing update is intended for those dedicated users who wish to test the new features provided in Version 13. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!


## Update Highlights


### A Scattered Collection

As this build focuses primarily on bug fixes, documentation, and some minor UI polish, there really aren't any big-ticket items to call out. Instead, we'll take this time to highlight a few small but notable items worthy of extra attention:


##### An Abundance of API Documentation

The dev team have been deep down in the dregs of documentation review, issuing sweeping corrections and resolutions for whole sections of the API, improving typedoc definitions and clearing up a lot of changes thanks, in no small part, to the diligence of community developers who have been extremely thorough in hunting out errors and inaccuracies. Specific praise is deserved for the numerous dedicated community developers who contributed to this particular GitHub issue.


##### Cut and Paste

A small but no less mighty change, this version introduces a cut and paste workflow for canvas placeables, allowing users to press CTRL + X (CMD+X for macOS) to cut any placeable objects (such as Tokens, Tiles, etc.) and press CTRL + V (CMD+V for macOS) paste them at a new location.


##### A Little Pinch

A little change to canvas interactions for users who rely on a trackpad— the multitouch 'pinch' gesture now zooms in and out rather than trying to rotate your currently selected canvas object, making it easier to navigate the canvas for those who don't have a mouse.


##### Ongoing UI Improvements

We're putting in more finishing touches on the UX and UI overhaul that V13 brought with it, including new features like the ability to collapse the sidebar menu by clicking on the currently open sidebar tab, a little reorganization of the header buttons for Document sheet windows (specifically for ApplicationV2 windows), and a few small tweaks to UX and UI styles to generally improve visual appearance or organization.


### In Case You Missed It: Windows Portable Build

During the previous update we trialed a new type of build for Foundry VTT for the Windows operating system, the new "Windows Portable" build offers a convenient way for users who wish to keep their Foundry VTT server a little more mobile or who wish to avoid the standard Windows installation process, whether for testing new versions of the software or otherwise. We're working toward a version that comes packed with its own dedicated userdata folder so that it doesn't rely on the existing userdata folder established by previous installations, but we're not quite there yet.

`userdata`This new build type allows Windows users to conveniently test out new versions of Foundry VTT without disrupting their primary installation.

Before testing out a new major version of Foundry VTT, taking a Snapshot is recommended. At a minimum, you should always backup all your important Worlds!

Once your data is safely backed up, here's how to use the Windows Portable build to try out the new Foundry VTT version:

- Triple-check that you backed up your data
- Download the Windows Portable build of the version to test
- Extract the downloaded file
- In the extracted folder, double-click the Foundry Virtual Tabletop.exe file to launch it

`Foundry Virtual Tabletop.exe`WARNING: The Windows Portable build currently uses the same Foundry VTT User Data Folder as your "real" version of Foundry VTT. We strongly recommend creating and using a new Foundry VTT User Data Folder to test with instead.

There are two different ways to create and use a test folder. First, create a new folder somewhere (for example, D:\Foundry_VTT_User_Data_Test). You can then tell Foundry VTT to use this new test user data folder in one of two ways:

`D:\Foundry_VTT_User_Data_Test`- The Foundry VTT Setup Screen
        The simplest way to ensure that you do not accidentally affect your real data while testing is to change the Foundry User Data Folder manually before testing, but it may be easy to forget this step.
- Windows shortcut
        You can create a Windows shortcut that points to your portable "Foundry Virtual Table Top.exe". You can then add a launch parameter to the end of the shortcut's target to automatically use your new test User Data folder like.
        For example, your shortcut's target might be: "Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test".

The Foundry VTT Setup Screen

The simplest way to ensure that you do not accidentally affect your real data while testing is to change the Foundry User Data Folder manually before testing, but it may be easy to forget this step.

Windows shortcut

You can create a Windows shortcut that points to your portable "Foundry Virtual Table Top.exe". You can then add a launch parameter to the end of the shortcut's target to automatically use your new test User Data folder like.

`"Foundry Virtual Table Top.exe"`For example, your shortcut's target might be: "Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test".

`"Foundry Virtual Tabletop.exe" --dataPath="D:\Foundry_VTT_User_Data_Test"`
## New Features


### Documents and Data

- It is no longer possible to upload files to the root Data directory via a FilePicker. (12384)


### Applications and User Interface

- Left-clicking a currently open tab for the sidebar menu will now collapse the menu. (12129)
- ActorSheetV2 now provides a Token configuration button.  (12244)
- data-tooltips that are not localization strings are now always cleaned by foundry.utils.cleanHTML. (12356)
- The Door Animations section of the wall configuration UI has been reconfigured to swap the positions of Open Direction and Animation Duration. (12399)
- The Document sheet configuration buttons have been moved and now reside inside a drop-down menu. (12437)
- Changes made to PrototypeTokenOverrides now apply automatically to all Actor Documents within the world when they are changed. (12438)
- The canvas now supports a cut and paste workflow for placeable objects using CTRL + X to cut and CTRL + V to paste. (12408)

`ActorSheetV2``data-tooltip``foundry.utils.cleanHTML``PrototypeTokenOverrides`
### The Game Canvas


## API Improvements


### Documents and Data

- GameTime#worldTime updates which occur as part of a Combat turn or round change are now processed and emitted before the Combat update so that the worldTime is already the new time in Combat#_onUpdate callbacks and hooks. (11619)
- CombatTracker#_shouldHighlightToken has been replaced with CombatTracker#_isTokenVisible. (12382)
- The TimeComponents returned by CalendarData#timeToComponents have been changed to include several expanded options and remove some fields of CalendarData which are unused by core implementations.  (12385)

`GameTime#worldTime``Combat``Combat``worldTime``Combat#_onUpdate``CombatTracker#_shouldHighlightToken``CombatTracker#_isTokenVisible``TimeComponents``CalendarData#timeToComponents``CalendarData`
### Applications and User Interface

- There is a new API shorthand for specifying tooltips from aria-labels. (12427)
- The newly implemented data-tooltip aria-label shorthand is now used across all core software HTML templates. (12439)
- CONFIG.ux is a new class for configuring various interaction helper overrides for the properties of CONFIG.ux.ContextMenu, Config.ux.Draggable, Config.ux.DragDrop, and Config.ux.TooltipManager, allowing developers to offer different implementations of their respective global interaction helper classes.  (12404)
- It is now possible to configure custom minimum zoom levels via CONFIG.Canvas.minZoom. (12374)
- TooltipManager can now be subclassed and configured before construction of the game.tooltip singleton. (12395)
- The rangePicker Handlebars helper is now deprecated in favor of the custom <range-picker> HTML element. (12435)

`aria-label``data-tooltip``aria-label``CONFIG.ux``CONFIG.ux.ContextMenu``Config.ux.Draggable``Config.ux.DragDrop``Config.ux.TooltipManager``CONFIG.Canvas.minZoom``TooltipManager``game.tooltip``rangePicker``<range-picker>`
### The Game Canvas

- TokenDocument#continueMovement has been renamed to TokenDocument#resumeMovement. (12381)
- WallConfig#editTargets now has a new readonly getter to allow for developers to retrieve a list of editable wall points. (12394)
- Renamed Token#updateDragRulerPath and TokenLayer#updateDragRulerPaths to Token#recalculatePlannedMovementPath and TokenLayer#recalculatePlannedMovementPaths respectively. (12430)

`TokenDocument#continueMovement``TokenDocument#resumeMovement``WallConfig#editTargets``readonly``Token#updateDragRulerPath``TokenLayer#updateDragRulerPaths``Token#recalculatePlannedMovementPath``TokenLayer#recalculatePlannedMovementPaths`
## Bug Fixes


### Documents and Data

- Settings which are configured with a DataField type that initializes to something different than the raw value (such as a SetField) are now detected as the correct type when submitting the SettingsConfig form. (12358)
- The Combatant context menu now renders regardless of whether a Combatant has an assigned Token. (12360)
- Changes passed to EmbeddedCollectionField as part of a Combat update are no longer delivered in a polluted state, resolving an issue with Combatant update workflows related to player level accounts and Combatant Document subtypes. (12386)
- Corrected an issue that caused "Begin Combat", "Next Turn", and "Next Round" to throw an error in cases where the Combat encounter had no Combatants. (12402)
- Deleting a scene in a compendium with the same ID as an in-World scene no longer risks deletion of Fog Exploration or Combat encounters associated with that scene. (12403)
- To correct for a deprecation warning, automatically generated hotbar macros no longer reference globalThis.Hotbar. (12412)
- TableResult#documentCollection no longer returns the wrong result following v13 data migrations. (12416)
- ClientSettings#set now returns the initialized value of the assigned setting rather than the raw value provided as user input. (12370)
- The onChange callback for ClientSettings#onChange and the clientSettingsChanged hook now receive cleaned and initialized setting values rather than the raw values passed in by the set caller. (12371)
- Compendium Art mapping now gracefully handles string values. (12407)

`DataField``SetField``SettingsConfig``EmbeddedCollectionField``globalThis.Hotbar``TableResult#documentCollection``ClientSettings#set``onChange``ClientSettings#onChange``clientSettingsChanged`
### Applications and User Interface

- HTMLStringTagsElement and HTMLMultiSelectElement no longer allow clicking to remove tags if the parent element is disabled or in a readonly state. (12028)
- Pinching gestures with trackpad interfaces now zoom in and out on the canvas as expected instead of attempting to rotate the currently selected object. (12222)
- Tooltip texts no longer incorrectly display a doubled localization when displayed in a folder, in addition, Tooltip Texts now support non-localized tooltip texts if they are configured with data-tooltip-text. (12355)
- The "Import" header button now only appears in appropriate configuration Sheets. (12362)
- Cancelling the creation of a Tile with the "Place Tile" tool by closing the Tile Config now clears the preview of the Tile on the canvas. (12367)
- The Application V1 and V2 styles now use cursor: var(--cursor-*) instead of cursor: * in order to support the new mouse cursors. (12376)
- Corrected an issue which caused the mouse cursor to be incorrectly assigned to pointer after dragging a placeable object and releasing. (12377)
- StringField._prepareChoiceConfig and config.options no longer return undefined. (12389)
- Toggling off status effects via the TokenHUD now functions as expected. (12390)
- Ruler labels for movement actions are now correctly localized regardless of whether an icon has been specified. (12405)
- The Game Settings application can now be resized once more. (12426)
- Addressed a number of issues related to the FilePicker, addressing a case where the browser could fail with an error when trying to pick any file to use as a Tile texture. (12364)

`HTMLStringTagsElement``HTMLMultiSelectElement``disabled``readonly``data-tooltip-text``cursor: var(--cursor-*)``cursor: *``pointer``StringField._prepareChoiceConfig``config.options``undefined`
### The Game Canvas

- Synthetic Actors now correctly adopt grandchild ActiveEffects as part of the ActorDelta workflow. This corrects cases where a synthetic Actor's Item that was not yet adopted would fail to adopt that item's ActiveEffects as expected. (12359)
- Token movement history waypoint labels are now displayed as expected. (12378)
- The box select tool state is now cleared as expected to prevent cases where the selection state would get stuck when switching from the Select tool to another tool. (12379)
- The MouseInteractionManager now respects the use of custom applications other than canvas.app, resolving an issue which would cause the MouseInteractionManager to not clean up properly after a drag-drop event. (12401)
- The canvas camera now only pans to a newly placed Token for a user if the user does not already have a controlled Token. (12411)

`ActiveEffects``ActorDelta``ActiveEffects``MouseInteractionManager``canvas.app``MouseInteractionManager`
## Documentation Improvements


### Documents and Data

- A large number of corrections have been made to API documentation, please see the full GitHub issue for details. (11768)
- Corrected an annotation in the documentation for ActorSheetV2#_onDropFolder. (12425)
- Hooks for ApplicationV2 are now included in the API documentation. (11746)
- Corrected a localization typo for the string “minute” in TIME.minute.one. (12361)
- Corrected some syntax errors in the example given for foundry.utils.Semaphore. (12422)

`ActorSheetV2#_onDropFolder``TIME.minute.one``foundry.utils.Semaphore`