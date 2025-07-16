# Release 0.8.9 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.102

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.9


## Version 8 Stable


##### August 16, 2021


## Foundry Virtual Tabletop - Version 0.8.9 Release Notes

Hello Foundry Virtual Tabletop community! We are excited to release Foundry Virtual Tabletop version 0.8.9, intended to be the final release for the Version 0.8.x series of updates. Version 0.8.9 focuses on clearing a wide variety of fixes for bugs reported by our dilligent community during the 0.8.8 feedback period and in addition brings some necessary but small API changes to assist our awesome community of developers.

WARNING: Version 0.8.8 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise. As always, performing a backup of your user data prior to update is recommended.


## Update Highlights

As an update on the Stable channel, this release focused primarily on bug fixes and we resolved a wide variety of different issues, with the most changes occurring in relation to the Game Canvas as well as Documents and Data handling. This is to be expected given the majority of changes in 0.8.x were related to the implementations of Documents as well as changes related to the Canvas in order to support Overhead Tiles. The new approach to Audio also saw some bug fixes related to rendering of UI elements as well as one prominent fix for a recurring audio issue which could cause playlists to stop playing.


#### Fixes for Prominent Bugs

Audio playlists experienced a return of a previous bug which could result in audio ceasing to play if you had recently played 'too many' audio tracks. We have implemented a new method of closing out the connections established for playing audio which should prevent this bug from occurring.

Lights and Walls received some pretty significant fixes, returning the behaviour of previewing lights before updating the application, and hopefully addressing some of the rare bugs which could occur with click-handling when chaining walls using ctrl(cmd for you Mac users.) In addition, tokens with vision set to 0 no longer leave helpful breadcrumbs erasing their fog of war exploration, and toggling a light on and off without moving a token should properly reveal fog of war.

We changed how Foundry VTT detects when a user is connected to make it less dependent on the canvas, which should now correctly show when people are connected regardless of whether or not they've disabled the canvas.

In addition, to prevent errors that could be caused by switching scenes while a scene was still loading, it is no longer possible to do so.


#### Documentation Changes

Thanks to the great efforts of our developer community reporting inconsistencies in our API documentation, we were able to make about a dozen corrections to a wide variety of JSDoc strings including the creation of some new entries in the API docs where the documentation needed a bit more detail.


## New Features


### Documents and Data

- Dragging a Journal Entry from a Compendium to the canvas now imports the entry into the world and then creates a Map Note for that entry. (5719)


### Interface and Applications

- The direction of the expand/collapse indicator on the Players UI window has been reversed so that it is now consistent with UI/UX elsewhere in the software. (5565)
- To prevent module-added buttons from overrunning vertical screenspace, the canvas layer controls toolbar buttons now wrap. (5648)
- The terminology used on menus which previously mentioned 'Entity' now correctly use 'Document'. (5664)


### Dice System

- Deferred inline rolls now use Roll.replaceFormulaData() to ensure that formulae which include references to actor data are resolved as part of the roll.(5577)

`Roll.replaceFormulaData()`
## API Improvements


### Documents and Data

- ActorSheet#_onConfigureToken now uses CONFIG.Token.sheetClass to construct TokenConfig documents instead of the base TokenConfig method. (5545)
- TokenDocument#clone now correctly passes its paramaters on to super. (5658)
- RollTable.toMessage should now correctly account for null values in the roll parameter. (5649)
- ChatMessage.getSpeaker now accepts a TokenDocument for its token parameter. (5559)

`ActorSheet#_onConfigureToken``CONFIG.Token.sheetClass``TokenConfig``TokenDocument#clone``super``RollTable.toMessage``ChatMessage.getSpeaker`
### Interface and Applications

- Added some convenience properties to EmbeddedDocument instances, specifically in the case of Combatant for easier reference to a combatant's parent Combat instance. (5535)
- TokenHUD._onAttributeUpdate now treats the input field as a data path for getProperty. (5606)
- ChatLog#scrollBottom has a new parameter popout which can be used to force a scroll to the bottom of the ChatLog and any popped out ChatLog instances. The default behaviour of ChatLog#scrollBottom only affects the sidebar chat tab. (5542)
- ControlsLayer.layerOptions now has a defined name property. (5562)

`EmbeddedDocument``TokenHUD._onAttributeUpdate``getProperty``ChatLog#scrollBottom``popout``ChatLog``ChatLog``ChatLog#scrollBottom``ControlsLayer.layerOptions`
### Other Changes

- The preUpdateItem hook on synthetic actors should now faithfully match hook invocations of real actor updates. (5651)
- CONFIG.User.permissions no longer incorrectly references Users.permissions, and has been removed. (5572)
- The fallback parameter for Localization#has has been corrected and is once again functional. (5608)
- Failing to pass a function to the array of functions for a Hook should now provide a more meaningful error message. (5718)

`preUpdateItem``CONFIG.User.permissions``Users.permissions``fallback``Localization#has`
## Documentation Improvements

- CombatantData.actorId now has an API documentation string. (5517)
- Resolved missing JSDoc entries for HandlebarsHelpers. (5686)
- Resolved missing JSDoc entries for SceneData and TileData, and corrected incorrect type for Scene#PlaylistSound. (5673)
- Added JSDoc entries for a wide variety of hookEvents. (5569)
- Added JSDoc entries for DrawingData.author. (5585)
- Corrected JSDoc inconsistencies for WorldSettings#getSetting and getItem. (5553)
- Resolved incorrect JSDoc entries for the Users class. (5570)
- Corrected JSDoc inconsistencies for SceneControlTool. (5596)
- JSDoc for Users#_initialize no longer incorrectly indicates an expected data parameter. (5571)
- Corrected the documented return type for Game#shutDown. (5573)
- Corrected JSDoc type entry for AudioHelper. (5685)
- The CSS for the API Documentation site now defines a background color to reduce the impact of a brief white background that appears before the CSS finishes loading. (5575)

`CombatantData.actorId``HandlebarsHelpers``SceneData``TileData``Scene#PlaylistSound``hookEvents``DrawingData.author``WorldSettings#getSetting``getItem``Users``SceneControlTool``Users#_initialize``Game#shutDown``AudioHelper`
## Bug Fixes


### Architecture and Infrastructure

- It should now be possible to disable modules which were previously enabled for your system regardless of whether those modules support your system.(5458)
- Deleting a sidebar subfolder within a folder should now correctly move contents to an immediate parent folder instead of moving them outside of any folder. (5549)
- Corrected an issue which prevented Modules designated as library: true from loading in advance of other modules. (5703)
- The Background property was unintentionally removed from SystemData and has been restored. (5645)
- The systemVersion property was unintentionally removed from world.json, and has been restored. (5646)
- Declaring paths to pack files of differing Document types but which refer to the same .db file should no longer cause failure to launch, but instead fail gracefully. (5604)

`library: true``SystemData``systemVersion``.db`
### Documents and Data

- Duplicated Scenes should no longer incorrectly reference the thumbnail image of the original scene, but instead have their own generated thumbnail. (5235)
- Thumbnails for Scenes within Compendium packs should now be properly generated if those scenes have no background image set. (5626)
- Assigning invalid active effect images should no longer prevent the token configuration from being opened. (5537)
- Updating HP from the token hud should no longer incorrectly call hooks twice per update. (5515)
- Rollable tables should now correctly resolve and roll on tables referenced from Compendium packs. (5543)
- Adding a row to a Rollable Table should no longer fail with an error when the range value is configured identically on other rows. (5650)
- Players with owner permission on a Rollable Table should once again be capable of resetting the state of the table. (5578)
- Clicking on a Dynamic Document Link for a Document which no longer exists should no longer throw an error and should now fail gracefully instead.(5644)


### The Game Canvas

- Ambient Lights should once again display a live preview of their appearance when changes are made in the configuration window for a light source. (5601)
- Toggling a light on and off should once again reveal fog of war as expected. (5538)
- Tokens with a vision radius of 0 no longer incorrectly remove fog of war exploration. (5551)
- Placing walls in quick succession during wall chaining should no longer result in rare creation of multiple walls during a single click. (5469)
- Wall chaining should no longer occasionally cause a wall to be connected to the second last placed node instead of the previous node. (5448)
- Wall Direction indicators should now properly rotate to match wall direction when a wall is moved. (5521)
- Deletion of Roof tiles should now correctly revert the vision restrictions applied to walls beneath them upon deletion. (5525)
- Undo should no longer allow users to revert move actions for tokens they do not own.(5697)
- To resolve a number of issues caused by switching scenes while a scene is currently loading, it is now no longer possible to do so.(5544)
- Pasting multiple copied Tiles should now preserve relative positioning of those Tiles. (5701)
- Drawings with a Text Size set to 0 no longer prevents canvas rendering. (5579)
- Dragging video files from the tile browser should no longer throw a (harmless) error. (5580)


### Interface and Applications


#### Audio and Playlists

- Repeated swapping of Playlist tracks should no longer prevent new tracks from playing. (5494)
- Playlist tracks which could not be loaded are now skipped appropriately instead of stopping the playlist from continuing. (5621)
- Popping out the playlist window should now correctly render when tracks change or during other updates. (5678)
- PlaylistDirectory rendering should now be more tolerant of unexpected values in a Playlist. (5680)
- Activating scenes which play to same song should now allow the song to continue playing instead of stopping the playback. (5679)

`PlaylistDirectory`
#### Chat and A/V Integration

- To prevent cases where the export of ChatMessages could fail if actors were deleted, chat messages will now fall back to the user name of the speaker if no actor is present in the message. (5529)
- Corrected a small rounding issue in the timeSince calculation performed on chat messages. (5625)
- In cases where a user had not yet spoken it was possible for the the voice activity indicator for A/V Chat Integration to incorrectly indicate a current speaker who may not have spoken, this has been corrected. (5623)
- Resizing a popped out video frame should now maintain aspect ratio as expected. (5474)

`ChatMessages`
#### UX and UI

- Corrected an issue which could sometimes cause the Token configuration sheet to misinterpret non-integer numbers as integers for the purposes of validation, preventing the window from being saved. (5627)
- Made some minor UI corrections to the configuration window for Drawings. (5618)
- Reordered the "Reset Defaults" and "Save Changes" buttons in Default Token Configuration for the purposes of UX consistency. (5677)
- Package description fields now properly truncates Tables to prevent unintended disruption of other UI elements. (5647)

- User activity monitoring is no longer dependent on canvas events, the status of a user connection should now be indicated regardless of whether there is an active scene or if the user is operating in no canvas mode. (5531)
- Doors should now only open when left-clicked, preventing cases where other button presses could unintentionally open a door. (5522)
- Deleting additional, non-active combats should no longer cause incorrect display of currently available combat encounters. (5550)
- Asynchronous functions in CombatTracker.getData  should no longer cause the combat tracker to fail initialization. (5555)

`CombatTracker.getData`
### Dice System

- In cases where a roll does not include a quantity of dice, Flavor Text should now correctly be passed on instead of discarded.(5566)
- Corrected an issue where setting the explict Roll Mode of 'roll' would be ignored, resulting in the Roll Mode dropdown taking precedence over explicitly set roll modes. (5541)


### Other Changes

- Deleting a journal entry with a map note now refreshes the note and clicking the note indicates the lack of association with a Journal Entry. (5273)
- TextEditor._createInlineRoll does not pass any options to its roll call. (5536)
- importFromJSON should now correctly discard _id to handle cases where the JSON file has an invalid _id present. (5564)
- Synthetic actors should now correctly handle DocumentData as part of an embedded item creation workflow. (5656)
- Toggling Privacy Mode on {CoreData}/UI should no longer incorrectly set subfolders containing 'ui' to be private. (5706)
- Corrected an issue with the default push-to-talk hotkey which could prevent certain keys from functioning on international keyboard layouts. (5707)

`importFromJSON``_id``_id`