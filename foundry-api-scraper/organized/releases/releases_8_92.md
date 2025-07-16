# Release 0.8.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.92

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.4


## Version 8 Testing


##### May 17, 2021


## Foundry Virtual Tabletop - Version 0.8.4 Update Notes

Welcome to the second beta channel update in the Foundry Virtual Tabletop 0.8.x series! This update focuses on a continued series of improvements that were the focus of 0.8.x, including a new audio engine for improved Playlists and audio functionality, improvements to the dice system, a brand new Overhead Tiles system, and a complete overhaul of data structures for the purposes of standardizing the API. This series of updates also brings another 1500 pieces of icon artwork for all users, and a substantial number of user experience improvements, bug fixes, and API enhancements.

WARNING: Beta channel releases have the potential to introduce breaking bugs that may be disruptive to play. These features are close to ready for a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. If your game in particular relies upon a large number of add-on modules, it would be best to wait for the stable release.

If you are upgrading the Foundry Virtual Tabletop application to 0.8.4 from 0.7.9 you must perform a fresh installation of the software. Because of some of the infrastructure changes it is only possible to update to this version from within the Foundry VTT application if you are already using 0.8.0. This does not apply to users running dedicated servers with Node 14+.

As always, before any significant update:

Be certain to carefully back up any critical user data before installing this update.


### Update Overview

The 0.8.4 update primarily focused upon bringing bug fixes for some of the more prominent bugs that appeared during the 0.8.3 testing process, most of which were related to package management or document data. However, it also brings a couple of new features in to improve Overhead Tile functionality.

0.8.4 adds the Radial Occlusion mode for Overhead Tiles, which allows for a small circular cutout around Tokens passing below an Overhead Tile. In addition, if an Overhead Tile is set to the Roof mode, weather effects on the scene will be masked, allowing the Roof tile to prevent weather from falling in the area below it.


### Known Issues

Audio/Video Chat integration using the built-in EasyRTC server is currently non-functional. Other methods of Audio/Video chat such as Jitsi should not be impacted. We hope to have this issue resolved in the next release.


### Breaking Changes

- Following internal discussion, the change made to load order which loaded script files after esmodules has been reverted. Vanilla JS scripts will now be loaded before esmodules. This is a return to the load order used in 0.7.x to allow developers to more easily include dependency scripts.
- The preCreate{DocumentName} hook is no longer incorrectly being provided with the expanded DocumentData as its second parameter rather than the initial data object provided to the Document creation request, as intended. For more information please see: https://gitlab.com/foundrynet/foundryvtt/-/issues/5126

`preCreate{DocumentName}`
### New Features


#### The Game Canvas

- Overhead Tiles now support a radial occlusion mode which fades away a portion of the overhead tile in radius around a controlled Token.
- Overhead Tiles set as a Roof now suppress the presence of weather effects below them.
- The progress reported for loading assets in when a scene is activated or pre-loaded should now be more specific, providing improved visual feedback for loading.
- When a player loads into a Scene where they have multiple owned Tokens, the Scene will now initialize with all of those Tokens controlled rather than only one of them.


#### Interface and Applications

- Modules and Game Systems that list a per-version manifest in the Admin Page are now able to be processed as a sidegrade.
- The "Update All" function in the Game Systems and Modules lists now provides a list of all packages that were updated or failed to update.


#### Dice System

- Flavour text can now be applied to Parenthetical Dice Rolls, Math-based, and Dice Pool based dice rolls by attaching [Flavour text goes here] to the end of any of them. For example: /r min(2d4,3)[Fire damage] + 1d8[Bludgeoning Damage] + {2d10, 3d10}kh[Necrotic Damage]

`/r min(2d4,3)[Fire damage] + 1d8[Bludgeoning Damage] + {2d10, 3d10}kh[Necrotic Damage]`
### API Improvements


#### Architecture and Infrastructure

- Updated package dependencies such as electron, pixijs, socket-io, aws-sdk, open-easyrtc and others to latest minor versions.


#### Documents and Data

- As a result of changes made to Active Effect origins on owned items, a data migration function will now occur when items are detected with Active Effects that reference "OwnedItem" in their UUID.
- Propagating changes made to a base Actor document onward to unlinked TokenDocument instances which reference that Actor's data now uses the TokenDocument class for an improved workflow.
- Provide an option as part of the DocumentModificationContext that allows for document create operations to try and preserve an existing _id rather than forcibly discarding and re-generating it.
- To ensure that a migrated database file is maintained cleanly, CompendiumCollection#migrate now concludes with a forced database compaction.

`Actor``TokenDocument``TokenDocument``CompendiumCollection#migrate`
#### The Game Canvas

- A new CachedContainer has been implemented. This enables rendering the contents of a PIXI.Container to a screen-sized renderTexture each frame. For more information please see: https://foundryvtt.com/api/alpha/CachedContainer.html
- To allow all canvas blur filters to be synchronized when "soft shadows" and "zoom level" settings are changed, the logic for BlurFilter management in the canvas has been centralized with the createBlurFilter and updateBlur methods.

`CachedContainer``PIXI.Container``BlurFilter``createBlurFilter``updateBlur`
#### Interface and Applications

- _restoreScrollPositions() should now be called after render hooks are fired to ensure restoration of the scroll position is correctly applied.
- General improvements have been made to module and system load order.

`_restoreScrollPositions()`
#### Dice System

- Chat Message input of dice commands now uses _processDiceCommand as an asynchronous evaluation.
- Roll.safeEval will now produce an explicit error in cases where it fails to produce a numeric outcome.
- The Macro execution scope now has an explicitly bound this which refers to the Macro document being executed.

`_processDiceCommand``Roll.safeEval``this`
### Localization Improvements

- A new optional "module" field has been added: PackageLanguageData will allow the translation file defined by that block to only be loaded if a specific module is present and active in the world.
- Invalid language configurations will now fail with error and the file they contain will no longer be read instead of acting as a blocking error.
- The coreTranslation flag is should once again be supported as a field in ModuleData, and should no longer preventing modules which configure this flag from being detected as core translation providers.
- The string `${this.user.name} privately rolled some dice`; now supports localization.

`PackageLanguageData```${this.user.name} privately rolled some dice`;`
### Bug Fixes


#### Documents and Data

- Adding an Item to an Actor Sheet which transfers active effects should no longer incorrectly create a blank Active Effect.
- Dragging and dropping an Active Effect between different Actor Sheets should once again correctly transfer the effect between Actors.
- Importing Actors from compendium packs one at a time should now import the correctly selected Actor.
- Validation errors in one or more Document instances should no longer prevent a world from loading.
- A duplicated Rollable Table should once again correctly inherit result descriptions.
- RollTable#normalize should now correctly reference the TableResult#data.weight path.
- Editing images for RollTableResult entries in a RollTable configuration sheet should now work as expected.
- The "Upload" file prompt displayed as part of the PlaylistConfig bulk import utility has been removed to reduce confusion.
- Unlinked Tokens in a combat encounter should no longer cause errors when the TokenDocument#_onUpdateBaseActor workflow is being processed.

`RollTable#normalize``TableResult#data.weight``TokenDocument#_onUpdateBaseActor`
#### The Game Canvas

- The Vision Limitation Threshold should once again refresh lighting and sight as expected.
- In order to prevent situations where movement using keypresses could result in incorrect pathing calculations, Token keyboard movement has been changed to calculate Token position using the last _validPosition.
- Assigning "Lock Rotation" in Token Configuration should once again prevent rotation of the Token.
- Targeting indicators for Tokens should once again be synchronized across all active players.

`_validPosition`
#### Interface and Applications

- The System field for Game Worlds should once again display the name of system.
- Installing a package with declared dependencies should once again install those dependencies.
- After updating a single module on Setup and Configuration, the "Update" button should now correctly become disabled and marked with the "Current" label instead.
- Corrected an issue which could sometimes cause the package installer window to fail to fully load until the window was refreshed.
- Clicking on dynamic Document links now correctly references the Document instead of attempting to resolve the deprecated Entity.
- Corrected an issue where the vertical position of the floating chat tab could reach a state where it could no longer be repositioned vertically.
- Left-clicking on the chat icon of a collapsed Sidebar should now correctly pop it out to a new frame.
- Pressing keys in the ChatLog text entry field before game.keyboard is initialized should no longer throw console errors.
- Resolved an issue with permissions which prevented Players and Trusted Players from updating and deleting macros from the Macro bar.
- The HTML entry for Compendiums should once again receive the data-pack attribute to match its Collection name.
- Clicking "Return to Setup" from within a World should once again return to the Setup Screen as expected.

`game.keyboard`
#### Dice System

- Creating a dice roll that opens with a negative number should now be treated correctly as a negative integer.
- Described Rolls should once again be correctly parsed and shown in their chat message.
- DiceTerm is no longer restricted in terms of the number of faces which dice may have. The number of dice which can be rolled remains limited to 999.
- Roll#roll will now correctly forward options to Roll#evaluate.

`DiceTerm``Roll#roll``Roll#evaluate`
#### Documentation

- Removed the attribute Token#_noAnimate which was erroneously included in documentation but does not appear in the codebase.
- Corrected documentation for MathTerm.dice and ParentheticalTerm.dice to indicate they return DiceTerm[].
- Corrected some missing documentation in the RollTerm class.
- Corrected a typo in JSDoc for foundry.data.validators._hasFileExtension.
- Corrected references in foundry.abstract.DatabaseBackend to use BaseUser for consistency.
- Corrected the Return type documentation for foundry.abstract.DatabaseBackend#_getParent.

`Token#_noAnimate``MathTerm.dice``ParentheticalTerm.dice``DiceTerm[]``RollTerm``foundry.data.validators._hasFileExtension.``foundry.abstract.DatabaseBackend``BaseUser``Return``foundry.abstract.DatabaseBackend#_getParent`