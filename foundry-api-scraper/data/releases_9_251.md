# Release 9.251 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.251

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.251


## Version 9 Stable


##### March 01, 2022


## Foundry Virtual Tabletop - Version 9 Stable 3 Release Notes

Greetings Foundry Virtual Tabletop community! We are pleased to release an update for Version 9 Stable Patch 3 (Build 251)! This update includes over eighty fixes for issues discovered after the stable release, and was made possible by the keen eyes and helpful hands of our awesome community.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss (Follow this handy guide).


## Update Highlights

This update touches almost all aspects of the software in some small way, fixing errors, correcting bad behavior, or adjusting how features work to be in line with expectations. In the notes below you'll find fixes for bugs in the game canvas, the UI itself, user permissions, chat logs, and everything in between. Please refer to the full list of changes below for a comprehensive breakdown of everything this patch affects!


## New Features


### Architecture and Infrastructure

- Log files now also indicate which build number of the software is running, not just the Version number. (6620)
- An upstream update to pixi/graphics-smooth has been included which fixes an issue with small transparent pixel artifacts in freehand Drawings. (6729)

`pixi/graphics-smooth`
### The Game Canvas

- The Fog texture should now be properly committed to the database during a reload. (6571)
- Walls now use a new outline based visual style which should make them a little more visually smooth. (6599)
- The torch preset animation for Ambient Light sources has had its amplitude increased and is now properly halted when its speed is set to 0. (6624)


### Dice and Cards

- FateDie now supports reroll, rerollRecursive, keep, and drop dice modifiers. (6747)
- The CSS for Dice roll results has been improved and now ensures that dropped results take precedence over other stylings like successes/failures. (6774)


### Interface and Applications

- The context menu for chat messages now includes an option to delete the chat message. (6591)
- The representation of macOS meta-left and meta-right keys has been improved on the Configure Controls menu. (6649)
- The representation of macOS arrow keys was failing to render due to the macOS system font not supporting the Unicode characters for arrow keys.  This has been resolved by changing how these elements are displayed for macOS to a functional but less visually pleasing appearance. (6650)
- The /stream page once again has a unique title. (6737)
- The appearance of Document and Folder creation buttons in sidebar directories has been improved. (6681)

`/stream`
## API Improvements


### Architecture and Infrastructure

- Hooks.onError has been made more resilient to non-Errors being thrown in downstream code and should now handle DOMExceptions in a more communicative way. (6669) (6578)

`Hooks.onError`
### Documents and Data

- An optional Token#setPosition re-center option has been added to bypass automatic canvas re-centering, this option defaults to true when used. (6719)
- Synthetic (unlinked) token actors should now properly retain data updated using the the property deletion prefix -=. (6421)
- The unused data keys _canUpdate and _canDelete within BaseMacro#metadata.permissions  have been removed. (6694)

`Token#setPosition re-center``true``-=``_canUpdate``_canDelete``BaseMacro#metadata.permissions`
### The Game Canvas

- lineSegmentIntersects has been improved and should now handle cases of collinear lines more effectively. (6765)

`lineSegmentIntersects`
### Interface and Applications

- The extraction of DragEvent data has been refactored for improved standardization. (6772)
- .xml is now supported as a file type which can be uploaded within the FilePicker. (6621)
- When revealing an existing message in the chat log, it will now be added in-place instead of appended to the end of the chatlog. (6716)

`DragEvent``.xml`
### Other Changes

- The unused VideoHelper#videos feature has been removed. (5893)

`VideoHelper#videos`
## Documentation Improvements

- The documentation for ClockwiseSweepPolygon has been improved and now references the augmented PolygonRay type which includes the ray result instead of the base Ray class. (6401)
- PointSourcePolygon has had its documentation revised to correct some inaccuracies. (6462)
- Notifications#_renderInner should now match Application#_renderInner. (6554)
- The documented return type has been corrected for TextureLoader#loadVideoTexture, TextureLoader#loadImageTexture, Folder#createDialog and CompendiumCollection#importDialog. (6589) (6619) (6660)
- A number of methods in DocumentCollection have had their documentation updated to indicate that they are protected instead of private. (6659)
- Some inaccuracies in the documentation for Cards#pass have been corrected. (6668)

`ClockwiseSweepPolygon``PolygonRay``PointSourcePolygon``Notifications#_renderInner``Application#_renderInner``return``TextureLoader#loadVideoTexture``TextureLoader#loadImageTexture``Folder#createDialog``CompendiumCollection#importDialog``DocumentCollection``protected``Cards#pass`
## Localization Improvements

- The title attribute on the links in manifest-update.html should now correctly include version numbers for  package versions. (6682)
- Roll Table chat message flavor text now supports localization. (6686)
- Timestamp indicator text (such as h, min, hour, etc.) now supports localization. (6752)

`title``manifest-update.html`
## Bug Fixes


### Architecture and Infrastructure

- Socket operations which throw an error on the server side should no longer be unnecessarily broadcast to connected clients. (6695)
- Deleting multiple folders which contain circular references can cause the server process to enter an infinite recursion. (6698)


### Documents and Data

- The FPS meter should no longer display inaccurate values for macOS users when a token is selected. (6423)
- Programmatically creating a scene and tokens should now properly display the created tokens without requiring a refresh. (6431)
- The VideoHelper pending queue should no longer cause video files to appear to stutter. (6435)
- Linked actor token bars should now properly update when changed by active effects. (6508)
- Players should no longer be able to control hidden tokens. (6610)
- To prevent cases where Dynamic Document Links would fail to properly resolve in cases where a compendium name contained ., compendiums no longer support using . in their names. (6629)
- Saving Default Token Resource Bar attributes should now function as expected. (6663) (6661)
- A race condition within Token.draw which could cause issues when dragging non-looped video tokens has been resolved. (6676)
- Activating a scene should no longer incorrectly result in the data for other scenes becoming unprepared. (6714)
- Files with .db within in their filename but which are not explicitly .db files should no longer be incorrectly prevented from being accessed. (6612)

`VideoHelper``.``.``Token.draw``.db``.db`
### The Game Canvas

- Terrain walls now properly render for cases where they share an endpoint with one or more non-terrain walls. (6416)
- Resolved a wall-chaining issue related to hotkey detection specific to Firefox for macOS. (6685)
- FogExploration should no longer process updates as a result of an ESC keypress in cases where there is no data to commit. (6754)
- getPixelsFromGridPosition and getGridPositionFromPixels should now provide consistent results when used on a hex-based grids. (6551)
- Non-GM users are now properly prevented from creating a measured template using an author ID that is not their own. (6565)
- Highlighting all objects using the ALT key is now distinguished from an actual hover which applies to a specific object. (6677)
- Polygon Drawings should now be correctly closed in cases where the origin point was a non-integer. (6740)
- Attempting to perform programmatic updates on canvas placed elements such as Tokens and Tiles immediately after their creation should no longer fail with an error. (6434)
- To handle rare cases where a mouse move is simultaneous with a cancellation or completion event, safeguards have been implemented against the previewed placed object being prematurely destroyed in the _onDragLeftMove handler. (6741)
- Updates to Tile dimensions which would place them outside of bounds of the canvas as a result of negative values in height or width should now be handled properly. (6756)
- Updating position or rotation of a Roof Overhead Tile should now refresh token vision. (6763)
- Roof tiles should now properly handle light sources with a negative luminosity. (6764)
- Hidden Tiles with the radial occlusion mode set should now be rendered as partially transparent from the GM view. (6767)
- Tile#refresh should no longer incorrectly reset the alpha of occluded tile. (6768)
- Resizing a tile with a negative height or width with its drag handle should no longer reset the tile to a positive value. (6769)
- Previews of changes to Tiles should now correctly reset when the configuration dialog is dismissed instead of being saved. (6757)
- Animated tiles should no longer re-synchronize as a result of being in an inactive tab for a period of time. (6558)
- Tiles that include audio should no longer result in doubling of the audio when a refresh of the Tile is triggered. (6511)
- A race condition which could occur in _unlinkVideoPlayback as a result of a missing await has been resolved. (6770)
- Resolved a permissions issue which would cause mouse cursor indicators to not be displayed unless "Display Ruler Measurement" was also enabled. (6691)
- screenDimensions should now correctly update after a resize operation is performed. (6709)

`FogExploration``ESC``getPixelsFromGridPosition``getGridPositionFromPixels``ALT``_onDragLeftMove``Tile#refresh``_unlinkVideoPlayback``screenDimensions`
### Dice and Cards

- Fixed an error that occurs when Combat#rollInitiative is called for a combatant that the user doesn't own. (6561)
- _processDiceCommand should now correctly preserve chatData. (6566)

`Combat#rollInitiative``_processDiceCommand``chatData`
### Interface and Applications

- Changing initiative via the Combat Configuration dialog should now preserve the state of the active combatant. (6492)
- A number of cases where the combat tracker might inconsistently handle initiative values that have been set to 0 have been resolved. (6490)
- Combat.rollInitiative should now be correctly governed by the current rollMode. (6667)
- Activating scenes which were configured to trigger the same playlist song with a fade duration should no longer result in the song ending prematurely when one scene reaches its fadeout duration. (6617)
- KeyboardManager#keyDown should now update properly if a key is released while an input field has focus. (6652)
- keyboard#downKeys should now have a recorded state regardless of whether an input element has focus. This avoids a bug where keypresses that occur during a momentary focus can become lost or stuck. (6683)
- Double-clicking the input field when setting a keybinding should no longer cause the input field to disappear. (6750)
- Permissions for Macros should now be more consistent with regard to execution prevention. (6748)
- In some cases a string handling method from the numberInput helper would result in logged console warnings. This should no longer be the case. (6572)
- Resolved an issue where plain text data dropped into a TinyMCE editor would fail to appear. (6766)
- The ChatLog text area now uses a native JavaScript DragEvent handler instead of incorrectly using the jQuery "drop" handler. (6773)
- Chat messages containing very long single words should now break and hyphenate onto multiple lines. (6678)
- The Number.fromString helper method should now correctly handle being passed a number instead of a string. (6634)
- Tiles with audio should no longer continue to play after navigating to a different scene. (6602)
- The Scene Controls CSS has been revised to prevent the box-shadow from being unnecessarily truncated. (6724)
- Fonts which fail to load during initialization should no longer be presented as options in selection dropdowns. (6607)

`Combat.rollInitiative``KeyboardManager#keyDown``keyboard#downKeys``numberInput``Number.fromString`