# Release 0.7.9 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.87

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.9


## Version 7 Stable


##### December 16, 2020


## Foundry Virtual Tabletop - Version 0.7.9 Update Notes

I am pleased to release Foundry Virtual Tabletop version 0.7.9, a stable release in the 0.7.x series of updates. The 0.7.9 update focuses on resolving and fixing remaining bugs related to the core themes of the 0.7.x update sequence: Dynamic lighting, canvas and scene rendering, some UI and UX fixes, Dice rolling, and other miscellaneous issues which cropped up since the previous 0.7.8 release. I anticipate this hopefully being the final update in the 0.7.x sequence of updates which will be stable for several months until the development work on version 0.8.x is completed - however if there is an accumulation of material issues which manifest that can be easily resolved with a subsequent update in the 0.7 series, I will certainly do so.

WARNING: Version 0.7.9 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.


### New Features

- Improved the way that status icons are tiled on each Token to adapt the grid dimensions to the size of the Token itself.
- The "Place Tile" workflow has been updated so that it will snap the pending tile width and height to the nearest half-grid space unless the SHIFT key is held which allows for any pixel dimension.
- Right clicking to display the HUD for a Token (or other placeable object) which is not currently controlled now releases other currently controlled tokens unless the SHIFT key is held.
- Adjusted the positioning of the distance label on Measured Template to avoid situations where it becomes obscured by the mouse cursor during placement.
- Mouse interactions on the game canvas now explicitly limit support to left-click and right-click button presses only, ignoring other mouse button presses.
- The "High Density Pixel Resolution" setting which was added in version 0.7.8 has been removed, making it the shortest-lived feature in Foundry VTT history. This setting proved problematic because it failed to adequately differentiate between true high-density displays like retina (which may not want high-res rendering) vs. browser zoom which does require it. As a consequence of this, the pixel resolution used by the game canvas will once-again adapt/scale by default.
- To support cases in which a user does not want the resolution density of the game canvas to increase for high-resolution displays, there is now an optional opt-out setting which will disable canvas resolution scaling. This new setting can provide a valuable performance enhancement (at the cost of visual quality) for very large high pixel-density displays which may be running off a lower-end GPU.
- Store the last-used FilePicker display mode across instances so that when a (new) FilePicker is re-opened it will continue using the last-used mode unless an explicit initial mode was provided to the constructor.
- The core data folder and it's subfolders may now be configured as private to players. This was previously unnecessarily prevented.


### Bug Fixes


#### Lighting, Vision, and Canvas

- Lights created or updated while darkness is greater than 0 now correctly update their brightness as expected. Previously, these lights would fail to render with the correct brightness if the darkness level of the scene was changed.
- Corrected an issue introduced by the "High Density Pixel Resolution" setting which would cause rendering of light source meshes to fail in cases where PIXI.settings.FILTER_RESOLUTION was set to a value greater than 1. This allows lighting effect positioning to once again correctly account for OS level display scaling.
- Removed a server-side validation on maximum vision and light emission distances which incorrectly measured based on grid spaces instead of defined distances.
- The minimum vision radius displayed for Tokens who otherwise have zero vision distance will now scale to match the Token's base size, rather than the previous behavior which assumed a constant base size of 1.
- Changing a door from secret to not-secret will now correctly update the visibility of the door icon for players.
- Corrected an issue where modifications to the presence or state of a door in the walls layer would not update the effective polygon of ambient sound objects, ignoring the change to wall positioning.
- Users with the Assistant role were shown the button option to "Reset Fog of War" in the canvas controls palette, but the server-side permission verification required a full Gamemaster user to perform this action. Assistant GMs may now reset fog for all connected users.


#### Active Effects and Tokens

- To allow for cases where a string variable must be added to a roll equation, Active Effect change values are now stored as a string and parsed at the time they are applied.
- Applying an Active Effect now correctly updates the UI for the Token's tracked resources.
- Corrected an issue where the initial data cleaning performed upon Token instantiation incorrectly assumed that the Token belongs to the Scene currently rendered on the game canvas. This resulted in the migration constraining the Token position to the bounds of a different Scene.
- Server-side validation for x and y coordinates for Tokens, Tiles, and other objects once again allows for floating point numbers which restores necessary functionality for working with hexagonal grids.
- The prototype token configuration menu will open once again if there is no active scene.
- Active effect duration incorrectly reported "Infinity Rounds" in cases where there is no associated combat encounter against which to track turn and round duration.
- Deleting a Token which is currently involved in a Combat Encounter will now remove the associated Combatant from the Combat Tracker as expected.


#### Dice and Rolling

- Dice formula without an explicit number of dice (like /r d6) will no longer fail to roll.
- Adjusted the DiceTerm modifier to keep/drop additional dice to only keep/drop from within the set of surviving results, respecting that results may have already been discarded (for example by a re-roll).
- Corrected issues where flavor text assigned to a specific DiceTerm was not being retained when that term got converted back to a string formula.

`/r d6`
#### Other Fixes

- Loading a world which has a CombatEncounter in progress at the time of loading could cause an error which prevented the Combat Tracker from properly rendering.
- Resolved an issue where initial Tile creation and validation prevented the "Place Tile" tool from correctly displaying a bounding box for the pending Tile creation.
- Amazon S3 locations may now be correctly marked as private in the FilePicker. A bug prevented this workflow from properly suppressing their display to non-GM users.
- Users who are connected when a scene is not active should now correctly show as connected in the players window.
- The Setup and Configuration menu now correctly handles dependency errors if a package has an incorrectly defined dependency, rather than failing.
- Resolved an issue where TinyMCE editors were not properly re-rendering entity links after a save if no changes had been made.
- When re-opening a FilePicker to edit an S3-hosted image, the S3 directory location should now be recovered to show the current file as well as other adjacent keys.
- To correct inconsistencies in stored data versus private _data, Owned item data is now synchronized with the stored database version when items are re-prepared for the Actor.

`_data`
### API and Documentation Improvements


#### API Improvements

- Incorporated minor version updates for TinyMCE, Electron, PIXI, Howler.
- Added configuration options for the color and thickness of object selection borders that are used for Tokens, Tiles, and Drawings. See gitlab for details: https://gitlab.com/foundrynet/foundryvtt/-/issues/3956
- Added additional allowances in HTML sanitization whitelist for approved form elements and attributes. See gitlab for details: https://gitlab.com/foundrynet/foundryvtt/-/issues/4274

