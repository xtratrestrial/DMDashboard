# Release 10.291 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.291

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.291


## Version 10 Stable


##### December 01, 2022


## Foundry Virtual Tabletop - Version 10 Patch 6 Release Notes

Our dedicated developers have continued to toil away in the code forges, making Foundry V10 better with every hammer of their mechanical keyboards. This update continues our focus on bug fixes and response to community feedback and issue reporting, with several changes fixing minor user experience issues and UI bugs that cropped up and were reported. Our thanks once again goes out to the community, your diligence in finding and reporting issues has a huge impact, and we are thankful for your efforts in helping us bug hunt each release!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

This update primarily focuses on fixing minor user experience hitches and canvas oddities, as well as resolving a few issues developers have found on the code side. This runs the gamut from correcting how overhead tile bounds and occlusion is handled, to making sure token scales are uniform in prototype and placed examples, and making sure that the text editor doesn't reset headers when clearing formatting. As always, we recommend checking the full list of fixes below for a detailed breakdown of what was changed in this update!


## New Features


### Architecture and Infrastructure

- The editorAutosaveMins setting was storing its value in seconds, and as such has been changed to editorAutosaveSecs. (8504)

`editorAutosaveMins``editorAutosaveSecs`
### Applications and User Interface

- External IP detection now presents a more clear error message in cases where it fails to determine the external IP. (6654)


### The Game Canvas

- Having no background image set for a Scene should no longer add an invisible white canvas overlay. (8405)


## Bug Fixes


### Documents and Data

- An issue which caused Active Effect duration to not be correctly prepared until first refresh has been resolved and active effect duration data should now be present as expected. (8159)
- Server-side auto-saving for Journals should no longer cause the client to not update its state correctly. (8461)
- Document#update should now process updates to Documents which fail validation as expected, allowing invalid Documents to be updated into valid ones. (8495)
- Toggling the edit lock for a compendium should now update the title of the open compendium to reflect the status of the lock toggle. (8516)
- Dragging an embedded item onto a roll table no longer produces a null content link if you subsequently roll the table. (8533)
- Calling getInvalid on a document ID no longer causes changes to the Collection's source data. (8535)

`Document#update``getInvalid`
### Applications and User Interface

- OnUp events for keybindings are now emulated to fire correctly when clicking into certain elements such as input boxes to prevent cases where certain keys may be incorrectly detected as held down when they are not. (6978)
- Shift + Mouse Wheel should once again rotate canvas objects under macOS. (8111)
- An issue with a CSS style for Paragraph elements should no longer cause cases where the paragraph elements would overlap one another. (8246)
- The scrollbar for the Chat Log should no longer be misaligned in cases where images were posted to a ChatMessage without an explicit height. (8329)
- To prevent cases where OS-level overrides would result in closing the window rather than panning, the pan keybindings have been removed from the hotkeys CTRL+WASD. (8440)
- Audio/Video chat integration should now correctly detect and use cameras in macOS provided permission has been granted. (8472)
- Replacing the title attribute of Applications which have been set to popOut should no longer result in uncaught errors. (8506)
- Tiles in a layer not currently active (such as overhead or underfoot) should no longer longer be interactable when you are not on the appropriate layer. (8509)
- Disabling and re-enabling a camera for Audio Video Chat Integration should no longer cause the chat window to scroll to the top. (8523)
- Clearing Selected Targets with Left-Click Release should once again broadcast that change to other users. (8530)
- Fixed an issue where attempting to update a combatant of a token with an animated texture would fail. (8537)
- The folder context menu in the Scene tab no longer incorrectly includes an option for changing ownership permission levels. (8549)
- SoundSource#radius should now contain its radius value as expected. (8558)
- The sidebar collapse/expand arrow now switches direction again depending on the collapsed state. (8563)
- Corrected an issue where sound name from audio filename was inconsistent between single track import vs bulk playlist import. Playlist single sound create now uses AudioHelper.getDefaultSoundName to retain desired consistency. (8566)
- Regenerating a scene thumbnail via the context menu option now shows the updated thumbnail without needing a refresh. (8577)

`ChatMessage``SoundSource#radius``AudioHelper.getDefaultSoundName`
### The Game Canvas

- Creating a temporary Item on a synthetic Token Actor should no longer create a persisted Item. (8416)
- The logic used for interpolating texture depth in InverseOcclusionSamplerShader has been simplified to improve handling for cases where multiple roof tiles may overlap. (8490)
- DetectionMode#_testRange now returns false if the range is set to zero. (8505)
- Rendering for the Darkvision vision mode has been improved to better handle cases where multiple tokens are selected. (8507)
- Initial load of a map with a Background Image should now correctly apply the correct scale to tokens. (8520)
- Tiles should once again be able to be placed overlapping the outer scene boundary on the top and left borders. (8521)
- Vision Mode coloration should now re-render when updated, rather than requiring the token to be re-selected to see updates to a Vision Mode. (8527)
- PlaceablesLayer._draw should now restore visibility of objects automatically rather than requiring a secondary call to activate or deactivate. (8528)
- Token size scaling is now consistent between prototype and placed tokens. (8539)
- The FogManager should no longer leak memory. (8543)
- Vision Based Overhead Tiles no longer use radial occlusion on tokens with no vision while there is an active light source nearby. (8546)
- Bounds calculation of rotated and scaled tiles and drawings have been corrected to ensure they function as intended. (8559)
- Fixed an issue with Tile#getPixelAlpha returning incorrect results for tiles with a scaled texture. (8560)
- VisionSource#sourceType now displays "sight" as expected. (8562)
- Token#setTarget should no longer broadcast released targets if groupSelection is set true. (8531)

`InverseOcclusionSamplerShader``DetectionMode#_testRange``false``PlaceablesLayer._draw``FogManager``Tile#getPixelAlpha``VisionSource#sourceType``"sight"``Token#setTarget``groupSelection`
### Package Development

- Updating Game Systems should no longer show a compatibility warning in cases where the system is verified as compatible. (8251)
- Creating a new World should now correctly add an initial Version value to the World.JSON file to prevent cases where worlds would be marked as not compatible with the current software version. (8515)
- Protected packages no longer attempt to sidegrade. (8551)


### Other Changes

- Canvas layer classes can now be extended without negatively impacting the Hooks for those layers. (8129)
- ProseMirror should now set its content to an empty value if it has no content. (8309)
- Updating an Actor while its prototype token configuration is open should no longer cause the update to be lost when the dialog is closed. (8368)
- ProseMirror should no longer throw errors in cases where invalid formatted rich-text data is pasted into Items and synthetic Actors. (8429)
- Creating an editor without a button now correctly respects the editable flag. (8534)
- Clear Formatting when header text is selected no longer resets the header to Heading 1. (8536)
- Fixed an issue where images could not be centered in the ProseMirror editor. (8540)
- The inplace option of mergeObject should now function as expected even if the object contains dot-notation keys. (8545)

`inplace``mergeObject`
## Documentation Improvements


### Other Changes

- Our documentation previously indicated that it was possible to select multiple map notes while on the map notes layer, which was incorrect. The documentation has been adjusted to reflect this. (8415)

