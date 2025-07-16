# Release 0.8.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.91

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.3


## Version 8 Testing


##### May 10, 2021


## Foundry Virtual Tabletop - Version 0.8.3 Update Notes

Welcome to the first beta channel update in the Foundry Virtual Tabletop 0.8.x series! This update focuses on continued series of improvements that were the focus of 0.8.x, including a new audio engine for improved Playlists and audio functionality, improvements to the dice system, a brand new Overhead Tiles system, and a complete overhaul of data structures for the purposes of standardizing the API. The incorporation of another 1500 pieces of icon artwork available to all users, and a substantial number of user experience improvements, bug fixes, and API enhancements.

WARNING: Beta channel releases have the potential to introduce breaking bugs that may be disruptive to play. These features are close to ready for a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. If your game in particular relies upon a large number of add-on modules, it would be best to wait for the stable release.

If are upgrading the Foundry Virtual Tabletop application to 0.8.3 from 0.7.9 you must perform a fresh installation of the software. Because of some of the infrastructure changes it is only possible to update to this version from within the Foundry VTT application if you are already using 0.8.0. This does not apply to users running dedicated servers with Node 14+.

As always, before any significant update:

Be certain to carefully back up any critical user data before installing this update.


### Update Overview

The 0.8.3 update primarily focused upon bringing bug fixes for some of the more prominent bugs that appeared during the 0.8.2 testing process and addresses a great number of those. The 0.8.3 update incorporates all of the changes documented in updates 0.8.0 through 0.8.2. You can read the full update notes for each individual release in the 0.8.x series using the following links:

- https://foundryvtt.com/releases/0.8.0
- https://foundryvtt.com/releases/0.8.1
- https://foundryvtt.com/releases/0.8.2

The highlights of these features are:

- Overhead Tiles allow GMs to set tiles as overhead (which are rendered above the token layer) or as roofs (which appear above the token and light layer) in order to provide functionality for GMs to give a visually distinct appearance to tree canopies, roofs, clouds, or other things that would visually obscure tokens. Overhead tiles also include the option to set an occlusion mode which will change the opacity of the tile when a token moves below it. If a tile has its occlusion mode set to Fade (entire tile) it will lower its transparency to the configured Occlusion Alpha when a Token is beneath it. If its Occlusion Mode is set to Roof (lighting and vision) it will also obscure light sources below it when it is visible.
- New audio system which replaces HowlerJS with a new, more powerful engine based on the native Web Audio API. This new audio system brings great gains in stability and is not just more performant, but also brings with it support for fading audio, better easing for ambient audio sources, and a number of UX improvements.
- The dice parser has been refactored and brings a lot of overall improvements in the way dice formulae are handled. In addition this update introduces the ability for dice rolls to be made asynchronous through the API, exposing new, more powerful functionality for Dice addons to use.
- 0.8.0 brought a complete refactor and revision to the Foundry VTT API, standardizing a lot of functions and ushering in a new "Common Document Model" which provides a renovated set of abstractions for documents, data schema, database operations, and much more. This is a major step away from the legacy concepts of "Entities" and "Embedded Entities". A byproduct of the improved Document model is a significant improvement in the flexibility and re-usability of the Document API - which is especially evident in areas like Compendium documents or unlinked Token Actors which were previously difficult to work with.
- Backend improvements for packages bringing additional benefits for dependencies as well as a number of new small features for the general users, including the ability to lock a module or system to prevent it from updating beyond its current version.
- More than 1,500 new icons have been added, the majority of which are "action" oriented, depicting skills, abilities, and magic spells!


### Breaking Changes


#### Documents and Data

- As of 0.8.0 package manifests are now managed by the DocumentData architecture. It is not possible for these JSON files to include additional arbitrary fields which are not part of the defined schema. In recognition to a number of modules and system devs we have implemented a new flags field to manifest JSONs which will allow for storing arbitrary key value pairs.
- To prevent a namespace collision with Document#parent, the Folder#parent attribute has been renamed to Folder#parentFolder.
- Package validation changes prematurely considered module names with capital letters as invalid. While this is in keeping with our documentation on naming conventions and requirements, a change of this magnitude was not intended to be done without warning. In the future we will be evaluating the necessity of this with a more clear path to deprecation and migration.

`flags``Document#parent``Folder#parent``Folder#parentFolder`
### New Features


#### The Game Canvas

- The Tile configuration sheet has been extended and now supports changing the zIndex of a tile for more specific placement above or below other tiles.


#### Interface and Applications

- The package lock icon now has a helpful tooltip to explain its purpose.
- New player accounts now default to no longer include a space in order to reduce difficulties some players may experience with whispering usernames that contain a space.
- Improved the error messaging surrounding sending messages to invalid users or sending invalid messages to an existing user to make it more clear what the error was determined to be.


#### Dice System

- Roll commands will no longer automatically and presumptively close parentheses and curly-brackets from dice roll formulae, and will instead throw an error if they are detected. This is necessary to ensure precise validation of dice roll formulae.


### API Improvements


#### Documents and Data

- The deepClone utility method has been improved and should now skip over advanced Object structures which are not compatible with cloning.
- Propagating changes made to a base Actor document onward to unlinked TokenDocument instances which reference that Actor's data now uses the TokenDocument class for an improved workflow.
- Provide an option as part of the DocumentModificationContext that allows for document create operations to try and preserve an existing _id rather than forcibly discarding and re-generating it.

`deepClone``Actor``TokenDocument``TokenDocument``DocumentModificationContext``_id`
#### Interface and Applications

- _restoreScrollPositions() should now be called after render hooks are fired to ensure restoration of the scroll position is correctly applied.
- General improvements have been made to module and system load order.
- Dialog.prompt now provides a more informative error message that explains that the prompt was closed without having a response chosen.

`_restoreScrollPositions()``Dialog.prompt`
#### Other Features

- Dependencies for aws-sdk, electron, electron-builder, express-handlebars, npm, socket-io, socket-io-client, terser, and tinymce have been updated.


### Bug Fixes


#### Documents and Data

- An unintended change resulted in a premature deprecation of chat.db in favour of messages.db, this has been reverted.
- ActiveEffect creation will no longer incorrectly fail if it does not receive duration data at the time of initial creation.
- Token appearance (bars, effect icons) should now be properly updated when items are added or removed from the actor.
- Corrected for an issue where placing a token for a new actor would reset this actor's derived data in the sidebar / collection until the next update.
- Embedded Item creation should now be handled correctly by the server-side cleanHTML function.
- The preCreate hook events for items or active effects in unlinked Tokens should now pass the correct version of the data for those classes.
- Corrected for an issue where some data would be incorrectly cleared when passing an Actor into a Compendium.
- Corrected a world migration issue which would fail to update the coreVersion in a world.json after update.
- Modules which declare dependencies that don't have a type should now assume the type for those dependencies is "module" for the purposes of loading.
- Corrected an issue where the PackageData system field was reconfigured as a string array field, which caused it to no longer support the previously accepted format of a single-system string.
- The Module Management interface should now correctly store a safe copy of the data structure for the purposes of rendering.
- Roll Table documents should once again be serialized and un-serialized in a way that preserves their full contents.
- Rollable Tables which recursively call inner tables should once again function as expected.
- A change in permitted filetypes incorrectly restricted the use of .handlebars file extensions, this is no longer the case.
- ChatLog#flush now correctly uses the Document.deleteDocuments method for clearing.
- Creating a new Macro by passing a User object as the macro author should now succeed as expected without logging a warning as a result of converting authors to their ID strings.
- Token vision now correctly have unrestricted vision when a scene's darkness level falls below its vision limitation threshold.
- The Actor.fromToken method now accepts a canvas Token object as a parameter again.
- The initiative field is now available again in the SystemData manifest schema.

`cleanHTML``preCreate``coreVersion``PackageData``.handlebars``ChatLog#flush``Actor.fromToken`
#### The Game Canvas

- Hover, copy, and paste events should now include the correct hook name in cases where a custom object subclass is used.
- Switching scenes during a measuring operation on the canvas should no longer result in Ruler.clear failing to complete and should now function as expected.
- Newly created scenes should once again correctly toggle navigation for ease of activation.
- To address issues with perception refresh updates, when a current scene is deactivated it should now cancel pending scheduled perception refreshes.
- Corrected an issue where using an overhead and underfoot version of the same Tile could trigger an error when the canvas is deactivated.
- Disabling "Token Vision Animation" should no longer prevent vision updates from functioning as expected.
- The overhead tile and padding area masking functions should now work as expected even if the Token Vision Animation setting is disabled.
- The view of a tile should now correctly update if a controlled token is on an underfoot tile that changes to an overhead tile without requiring token movement.
- Dragging a Canvas Placeable over the edge of the scene boundary should no longer erroneously cause the mouse to draw a bounding box on next click.
- Token movement animation should once again correctly snap the token to the grid alignment as expected.
- Tokens in a half space at the edge of a scene or within the boundary of scene padding should no longer be impeded from moving.
- Placing a text box with the ‘Draw Text’ tool and then deleting it should now correctly delete the drawing without error.
- Database storage of Z-index sorting values for Drawing and Tile Documents should now be handled properly.
- Animated tiles playing audio should now correctly stop playing when the current scene is changed.
- Background and foreground video files are now properly detected and play automatically.
- The GM mouse cursor should be properly hidden from players when disabled in the permissions configuration again.
- Preloading a scene no longer causes the currently rendered scene to become inoperable.


#### Interface and Applications

- Corrected for an issue where rejected settings database writes would cause issues when changing user role permissions.
- The /api/status endpoint should no longer incorrectly report the world inactive and should now function as expected.
- Resolved an issue with socket listeners which prevented the /stream view from functioning as expected.
- Secret block tags should no longer be incorrectly stripped by HTML sanitization.
- Re-renders of the InstallPackage UI should no longer result in invalid or strange package category listings.
- Corrected a CSS issue which caused non-GM accounts to incorrectly see the scene creation buttons outside the sidebar.
- Opening the FilePicker from the TinyMCE insert image dialog multiple times should no longer result in the popup displaying inaccessibly behind the Journal sheet.
- The caption HTML element is no longer removed during the HTML sanitization process.
- ItemSheet.id should now correctly return the itemID used in html elements.
- Clicking "Return to Setup" from the Settings Sidebar should now properly return to Setup.
- The world login screen should once again take into account logged in users and disable the ability to log in as them.
- Chat Messages that were created on a scene will no longer prevent worlds from loading if that scene no longer exists.
- Marking a non-roll chat message as hidden should now conceal it from players as expected.
- Launch in Safe Mode has been renamed to "Launch in Safe Configuration" and should now correctly deactivate when toggled off.
- When popped out the Audio sidebar now correctly displays the current playtime as expected.
- The Create Compendium dialog should now correctly reference "Type of Document" instead of "Type of Entity"
- The Compendium application should now receive the correct data-pack HTML attribute.
- Document Sheets should now include their previous class returning the document name as a title.
- Script macros should now properly execute even if there is no active scene.

`caption``ItemSheet.id`
#### Dice System

- Corrected an issue where the preparation workflow for enriched HTML in chat messages would no longer correctly prepare Document links or inline rolls.
- Minimize and maximize options should now be passed correctly into the Roll class for component DiceTerm instances.
- Recursive re-rolls should now properly produce an unlimited number of additional rolls (with the same max recursion depth as Exploding Dice).
- Corrected some issues with splitting comma-separated arguments of a MathTerm, to resolve some issues with commas within parenthetical terms.
- Calling /gmr in the chat log no longer performs an incorrect deepClone operation.


#### Documentation

- The API docs now correctly show the syntax for the TextEditor.enrichHTML method as taking an object and not individual parameters.

`TextEditor.enrichHTML`