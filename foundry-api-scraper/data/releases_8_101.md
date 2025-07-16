# Release 0.8.8 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.101

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.8


## Version 8 Stable


##### June 24, 2021


## Foundry Virtual Tabletop - Version 0.8.8 Update Notes

Hello Foundry Virtual Tabletop community! We are excited to release Foundry Virtual Tabletop version 0.8.8 as a subsequent stable release in the version 8 series of updates. The version 0.8.8 release includes a variety of targeted fixes for bugs that have been reported by our dilligent community in 0.8.7 and also continues to add layers of polish to the existing feature set for this major version.

WARNING: Version 0.8.8 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.


### Update Overview

As is common with stable releases, 0.8.8 primarily includes fixes for bugs rather than introducing new features.


#### Compendium Indices and World Loading Times

In version 0.8.7 we evaluated reports of increased loading times for some worlds. Upon investigation it was revealed that changes made with intent to provide faster loading of compendium data by generating indices for Compendium packs caused this behaviour. Scene compendium packs which contained thumbnails were passing base64 images into the index, resulting in some indices being generated that were of unexpectedly large size. Correcting this required introducing a breaking change for module and system developers, but in consultation with the community we have decided the benefit of this change outweighs any risk. If you are a developer negatively impacted by this please reach out to us via #08x-dev-support via our community discord for assistance.


#### HTML Sanitization

Some of you may have noticed with the advent of 0.8.x that some of the HTML you were using in rich text fields were being cleared out when you saved. This was a result of changes made for security purposes to sanitize these fields of HTML tags which could potentially be used for risky purposes. After internal discussion we have relaxed some of these restrictions and reintroduced support for iframes, video elements, and a few other ones the community provided feedback on.


### Breaking Changes


#### Documents and Data

- In consultation with the community developers which might be most impacted by this change, we have improved the methods used to index compendiums by limiting the information called initially. This should reduce the overall world loading time for those users who experienced long load times related to compendium data. Read more about this fix here: https://github.com/foundryvtt/foundryvtt/issues/5453


### New Features


#### Interface and Applications

- Changed the icon for "Remove Combatant" in the combat tracker's right-click menu, so that it is in line with other UI elements of the same type.
- HTML sanitization now allows a number of additional HTML elements and attributes, including: <iframe>,<audio>, <video> and more.

`<iframe>``<audio>``<video>`
#### Other Features

- Introduced a new serverside --demo mode which resets a World to it's pristine original state at a configurable interval. Read more about this feature here: https://github.com/foundryvtt/foundryvtt/issues/2780
- Agreement to the EULA now carries over to installations of older versions of the software.
- Added the ability for simple-peer to use a custom TURN server if configuration details are provided.

`--demo`
### API Improvements


#### Documents and Data

- isColorString should now only allow characters in the hexadecimal range.
- The documentation for Nested Tabs now indicates that a data-group should be used.
- Provided an internal migration for modules using the old 'systems' property that was renamed in 0.8.2.

`isColorString``data-group`
#### Interface and Applications

- Resolved instances where the folder type FilePicker was providing a nonfunctional upload field, and also added the ability to supply a valid FilePicker type to the FilePicker property when registering a setting, in place of filePicker: true. For more information, please refer to the official documentation here: https://foundryvtt.com/api/FilePicker.html
- Setting DocumentModificationContext.render to 'false' should now correctly prevent the re-render of the parent's sheet when updating Embedded Documents.
- Corrected an error which caused the /api/status user count to remain at 0 at all times.

`folder``FilePicker``FilePicker``FilePicker``filePicker: true``DocumentModificationContext.render``/api/status`
#### Documentation

- Added entries for the "alpha" and "lightAlpha" properties of TokenData.
- Added documentation for BasePlaylistSound.
- Updated documentation of FormDataExtended which was out of date and inaccurate.
- Markup within JSDoc should now be escaped when rendering on the docs page.

`TokenData``BasePlaylistSound``FormDataExtended`
### Bug Fixes


#### Documents and Data

- The DocumentData initialization process now corrects for issues which result from Documents which had previously saved an invalid (non-array) data structure for an embedded collection.

`DocumentData`
#### The Game Canvas

- Revealed fog of war should once again be saved for tokens with no dim or bright vision.
- SightLayer#loadFog no longer incorrectly constructs FogExploration documents from a hard coded core class.
- Corrected an issue which could result in an incorrect fog resolution, resulting in fog exploration data no longer saving.
- Fixed an error when removing doors from a scene which would create errors and phantom walls.
- Opening a door should now properly reveal fog of war without requiring a token to move first.
- Players with Draw permission should now be correctly permitted to draw without also needing Measured Template permissions first.

`SightLayer#loadFog``FogExploration`
#### Interface and Applications

- Fixed a permissions-based error which would cause worlds that have been placed in Safe Configuration to fail to launch.
- Corrected for an issue where the "Update All" method for packages could become stuck in a pending state.
- SimplePeer now gracefully handles users with no input device during setup.
- Compendium packs can once again be closed after editing their permissions.
- Compendium packs that are pending compaction on initial connection should no longer fail to query their index when clients connect.
- Scenes exported to a compendium with 'Merge by name' enabled should now correctly update their scene thumbnails.
- Corrected for an issue which allowed the placement of items on an actor in a locked compendium.
- The lock/unlock icon for packages should now be synced properly with its current state.
- The combat tracker should now increment and decrement time correctly when using nextRound() and previousRound().
- Initiative rolls from actor sheets that already have linked token in a combat tracker should now function as expected.
- Corrected an issue that could result in flags assigned to Rollable Tables to be lost as a result of 'diff' being set to 'true'.
- Journals should once again maintain separate Text / Image window dimensions as intended.
- Corrected the labels for buttons in the ambient sound configuration.

`nextRound()``previousRound()`
#### Dice System

- Additional spaces in inline rolls will no longer prevent journal entries from opening.
- replaceFormulaData now treats a missing value as 0.

`replaceFormulaData`
#### Other Fixes

- Fixed an issue which could cause password salts to fail to be created during migration.
- Migration to 0.8.7 should no longer double-hash passwords when the "resetKeys" option is set.
- Corrected an issue where a Playlist Track could become stuck in a pending state which would result in Audio Playlists tab failing to render its controls.
- Playing/stopping a number of playlist tracks should no longer cause additional tracks to stop playing.
- Corrected a bug that was causing 10+ minute long audio tracks not to loop properly.
- Ensured that the volume of local sounds properly update on token movement.
- Added a short timeout to process.exit to allow time for the logger to record Fatal errors.

`process.exit`