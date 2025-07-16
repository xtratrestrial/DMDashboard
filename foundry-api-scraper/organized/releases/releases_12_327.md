# Release 12.327 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.327

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.327


## Version 12 Stable


##### June 07, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 3 Release Notes

Version 12 Stable 3 (12.327) replaces 12.326 but contains all of the fixes 12.326 contained. After release of 12.326 (Stable 3) the community drew our attention to an unfortunately disruptive bug that prevented combatants from being added to combats. We have delisted 12.326 as a result and instead extended 12.327 to correct that issue.

We are happy to announce the third release of Foundry Virtual Tabletop Version 12. This patch continues to incrementally improve upon Foundry V12 Stable, bringing a number of bug fixes and also a few refinements to features that are new to V12. Thanks again to everyone for submitting your feedback and helping us stay on top of bugs!

Notable improvements include the oft-requested visual indicator for manual Rolls, more robust handling for packages hosted in GitLab, and UI improvements to help configure dynamic token rings for individual Tokens. For a complete log of all the features added in V12, please see the notes for our first release on the stable channel.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Please be aware that the new visual indicator for manual Rolls may not appear in your game immediately upon updating. Many major game sessions (including D&D Fifth Edition and PF2E) will need to incorporate this new feature into their custom roll handling before it can display.


## New Features


### Dice and Cards

- Added roll resolution mode tracking to the Roll data and added a visual indicator to Chat Messages that were generated using an interactive roll resolution mode. (10990)

`Roll`
### Applications and User Interface

- Token Ring subject scale correction and effects are now available in the Token Config UI. (11139)
- Improved how the Token Ring background color is applied on the background ring texture. (11153)
- Added the "Everyone" option (not enabled by default) to the Execute Macro Region Behavior that controls whether the Macro is executed by all connected Users or a single User with sufficient permissions. (10947)


## API Improvements

- Factored ClockwiseSweepPolygon#_determineEdgeTypes into a separate protected function. (11140)
- Added the equivalent of Dialog's render option to DialogV2. (11128)
- Added the speaker option to ChatLog#processMessage to improve the way Chat Messages created by the "Execute Macro" Scene Region Behavior to assign their speakers. (11159)

`ClockwiseSweepPolygon#_determineEdgeTypes``Dialog``render``DialogV2``speaker``ChatLog#processMessage`
## Bug Fixes


### Documents and Data

- Fixed parseUuid inserting "undefined" in the returned UUID if passed a legacy compendium UUID and its pack didn't exist, and also fixed DocumentUUIDFields not accepting legacy compendium UUIDs if the pack did not exist. (11145)
- Resolved an issue where "Region Boundary Changed" event was being triggered with an incorrect User. (11160)
- (12.327) Resolved an issue which prevented the adding of combatants to a combat. (11163)

`parseUuid``DocumentUUIDField`
### Package Development

- Resolved an issue where requests to download packages that are hosted on GitLab could fail with a 406 Not Acceptable error. (11000)

`406 Not Acceptable`
### Applications and User Interface

- Sound#loaded should be false after its HTMLAudioElement has been unloaded. This fixes a bug which caused long-duration sound files to fail to play after they had completed playing once. (11004)
- The "Loop" button is no longer missing for Playlist Sounds. (11124)
- The "throbber" icon in the Playlists tab now correctly rotates around its center point. (11127)
- Prevented an error that could occur when multiple calls to Playlist#playAll occurred too close to each other. (10984)
- Changing globalPlaylistVolume / globalAmbientVolume / globalInterfaceVolume now updates the volume sliders in the sidebar tab.  (11061)
- Improved muffling detection for point sound sources to ensure that doors do not muffle themselves if the listener is able to reach the door without collision. (11079)
- Resolved a bug where the Playlist that is currently playing was not displayed in the sidebar when first logging in. (11097)
- Prevented the act of dropping a card onto itself from changing the card order. (11104)
- Previewing a combat theme in the Combat configuration dialog no longer throws an error. (11113)
- Fixed an issue where loading a large number of Chat Messages at once caused duplicate rendering. (10951)

`Sound#loaded``Playlist#playAll``globalPlaylistVolume``globalAmbientVolume``globalInterfaceVolume`
### The Game Canvas

- Restored the previous Ruler measurement behavior where right-clicking cancelled the entire measurement if CTRL is not currently pressed. (11094)
- Switching to the Scene Controls of a non-PlaceablesLayer no longer causes an error. (11107)
- Darkness Level adjustments are now immediately updated after a light-restricting Tile is moved. (11111)
- Improved null handling in PlaceablesLayer#_sendToBackOrBringToFront. (11135)
- The Ambience filter now uses the Darkness Level texture. (11136)

`PlaceablesLayer``null``PlaceablesLayer#_sendToBackOrBringToFront`
### Dice and Cards

- Prevented a crash when spaces exist between a unary operator and brackets. (11037)
- Improved Peggy grammar parsing to better handle additional cases involving unnecessary whitespace in dice formulas. (11099)


### API

- The <string-tags> element now fires change events when a tag is added or removed. (11112)
- DOMExceptions thrown during rendering of an App v2 Application are no longer obscured by an unrelated error. (11120)
- Invoking an instance-level CRUD operation with a parentUuid option can no longer override the real parent. (11155)

`<string-tags>``change``DOMExceptions``parentUuid`
## Documentation Improvements


### Other Changes

- Fixed classes in the client namespace not appearing in the generated API docs. (11095)

