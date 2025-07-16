# Release 11.308 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.308

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.308


## Version 11 Stable


##### August 24, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 8 Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the eighth stable-channel release of Foundry Virtual Tabletop Version 11. As with most stable releases, this update focused on bug fixes for issues submitted by our users via our community Discord and our GitHub repository. In addition, we have managed to sneak in a few small, non-controversial quality of life features which we hope you will all enjoy. We'd like to extend a huge thanks to our community for their continued submission of bug reports and assistance hunting out potential causes!


## New Features


### Applications and User Interface

- When using Import All on a Compendium Pack the Folder that is created for the content will now match the Folder of the Compendium Pack being imported if it doesn't already exist. (9693)
- When importing all content from a Compendium Pack you can now explicitly choose a new or existing Folder for the content to be placed in. (9859)


### Package Development

- Restored previous behavior where the background in the world login screen is centered instead of top-centered. (9916)


## API Improvements


### Architecture and Infrastructure

- Added a hotReload (--hotReload) command-line argument. (9895)

`hotReload``--hotReload`
### Other Changes

- Improved String.prototype.slugify performance. (9264)
- The notify argument from ImageHelper.uploadBase64 is now passed to FilePicker.upload to support not showing a notification. (9625)

`String.prototype.slugify``notify``ImageHelper.uploadBase64``FilePicker.upload`
## Bug Fixes


### Documents and Data

- Combat encounter sound cues are now only triggered for the active combat encounter. (9743)
- All changes are now appropriately rolled back when performing a dry-run update. (9890)
- Fixed an issue where calling pack#migrate as a GM threw an error for connected clients. (9913)
- Fixed a non-functioning System data migration in order to force all ActorDelta Items to be persisted. (9939)
- Fixed an issue where fields of inner schemas being repaired were still marking the overall schema field as invalid. (9944)

`pack#migrate``ActorDelta`
### Applications and User Interface

- Reduced line height for labels in settings. (9612)
- The Update All button now remains disabled on re-render if the update is still in progress. (9692)
- Fixed an issue where exporting a Folder with Keep folder structure would not export any non-immediate children. (9702)
- The Controls reference now indicates that Escape closes all open windows. (9752)
- The File Picker no longer forces S3 folder names to be lowercase. (9813)
- The Tile browser's asset grid size value is no longer reset when changing views. (9908)
- The ImagePopout can now display video content as well. (9909)
- Fixed an issue where the Chat Log stopped loading earlier messages before reaching the first message in the log. (9923)
- Hover events no longer fire while panning the Canvas by dragging. (9932)
- Left-clicking a Scene in the Scene directory once again opens its configuration window. (9947)

`ImagePopout`
### The Game Canvas

- Restored calls to the deprecated Embedded Document post-CRUD operation handlers for synthetic Actors to allow legacy code to continue to function. (9922)
- Changing the Border Color of a Template now applies immediately upon saving. (9924)
- When a partially created Tile is missing required information, clicking the X button to close the Tile configuration window now successfully closes the window and destroys the Tile. (9929)
- Deleting a Token that was never drawn in a Scene no longer throws an error. (9931)
- Improved hoverOut permission checking in the MouseInteractionManager. (9933)
- Changed Canvas#mousePosition to initialize at construction to prevent rare edge cases where mousePosition is retrieved before the first canvas mouse move. (9935)
- Foundry now checks for the existence of PlaceableObject#mouseInteractionManager in PlaceableObject#interactionState to ensure its not null. (9940)

`hoverOut``MouseInteractionManager``Canvas#mousePosition``mousePosition``PlaceableObject#mouseInteractionManager``PlaceableObject#interactionState``null`
### Package Development

- Fixed an issue that caused clicking on the Update World button to occasionally not submit. (9647)


### Localization and Accessibility

- Fixed an issue that caused tooltips to not appear for Scene controls in the left-hand sidebar. (9948)


### Other Changes

- In a rare case that a ClassicLevel database becomes corrupted or otherwise unopenable, we now attempt automatic repair of the database which can resolve that issue. (9824)
- Adjusted the check for existing LevelDB folders to be tolerant of non-LevelDB folders that already exist with the same name. (9891)
- Hardened the custom enricher application to be more tolerant of thrown errors to prevent an issue that caused the Chat Log to fail to render. (9912)
- Copied and pasted secret blocks are now given unique IDs to prevent hiding/revealing both blocks unintentionally. (9914)
- When restoring a minimized application (such as the Chat Log) to full size, the previous scroll position is also restored. (9917)
- Both ClientDocument#toAnchor and Roll#toAnchor now add the necessary classes to generate functional links (content-link and inline-roll, respectively). (9930)
- Fixed a race condition where simultaneous Embedded Document updates could cause some updates to be dropped. (9934)

`ClientDocument#toAnchor``Roll#toAnchor``content-link``inline-roll`