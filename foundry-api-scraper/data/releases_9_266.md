# Release 9.266 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.266

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.266


## Version 9 Stable


##### April 08, 2022


## Foundry Virtual Tabletop - Version 9 Stable Build 266 Release Notes

We are very pleased to bring you all another bug-fixing focused update with Version 9 Stable Build 266. As with all releases on the Stable branch, this build is composed of fixes and changes for bugs sourced from feedback provided by you, our awesome community, as well as internal testing. These updates prioritize resolving bugs in ways which will not introduce breaking changes to the API or negatively impact modules and game systems.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss (Follow this handy guide).


## Update Highlights

Our goal for this release was to polish up a few lingering non-critical (but no less irritating) bugs to help keep V9 stable while our development focus is spent primarily on Version 10. This is a fairly light update, surgically targeting a few UI and API issues as well as a few lingering bugs that couldn't be addressed during our last update. We also took the opportunity to address a few UI and documentation inconsistencies.


## New Features


### Architecture and Infrastructure

- For convenience, if the authorization menu is not available users will now be redirected to the login screen for the currently active world. (6900)


## API Improvements


### Documents and Data

- ClientDocumentMixin#link now supports linking to Documents within compendium packs. (6923)

`ClientDocumentMixin#link`
### Interface and Applications

- AmbientLightConfig#close and TileConfig#close now correctly use this.object.prepareData() to reset the document with prepareData included. (6805)

`AmbientLightConfig#close``TileConfig#close``this.object.prepareData()``prepareData`
### Dice System

- The static PoolTerm.REGEXP field has been added, ensuring that PoolTerm.fromExpression works as expected. (6843)

`PoolTerm.REGEXP``PoolTerm.fromExpression`
## Documentation Improvements

- Instructional text tips on the permissions menu have been updated to use the terminology "users" rather than players for improved clarity.  (6847)
- The JSDoc strings for Token#setTarget have been updated to include the appropriate information for the user, releaseOthers and groupSelection parameters. (6839)
- The JSDoc strings for SceneControlTool have been updated to reflect the presence of a 'title' property instead of a 'label' property. (6851)
- WallsLayer#checkCollision should now have a consistent return type and its documentation has been clarified. (6927)
- The JSDoc strings for ClientDocumentMixin#createDialog and Folder#createDialog have been improved and should now be consistent with their behaviour. (6863)

`Token#setTarget``user``releaseOthers``groupSelection``SceneControlTool``WallsLayer#checkCollision``ClientDocumentMixin#createDialog``Folder#createDialog`
## Localization Improvements

- A number of UI labels related to measurement and distance have been standardized. (6926)


## Bug Fixes


### Documents and Data

- Updating Token webm images should no longer result in a brief, much larger display of single frame of the webm. (6858)
- An issue which prevented players from cycling control to a token outside their current field of vision has been resolved. (6860)
- Token#_onDelete now handles sight and light source data in a cleaner way, prior to downstream hooks being called. (6896)
- Cards documents should now consistently be reset before a deletion. (6844)

`Token#_onDelete`
### The Game Canvas

- The updated restrictVisibility code for the lighting layer no longer incorrectly fails to apply line of sight masking to coloration containers. (6799)
- Token#rotate should now correctly return a Promise as expected. (6876)

`restrictVisibility``Token#rotate`
### Interface and Applications

- Changing font size from 5 to 6 should no longer create abormal distances between rolltable results. (6623)
- Users with permission to create templates and drawings may now copy and paste those placeables. (6779)
- Tiles containing baked-in audio should now appropriately route that audio through the Ambient volume control slider. (6848)
- HTML source should now be stripped from the title heading of popped-out chat card windows. (6855)
- An issue related to the sorting of playlist tracks has been corrected and tracks should now play in the arranged order rather than the order in which they were added. (6857)
- Assistant GMs should now be able to create, update, and delete users, but are correctly prevented from elevating themselves to a GM role. (6869)
- The Setup menu's "Update" status button is now synchronized with the progress of the update installation, indicating if it is downloading or installing. (6684)
- To resolve rare cases where Scenes would appear to be player-navigable to a GM when they were not, the handling of document permission testing has been improved. This issue stemmed from a case where importing a scene from a compendium would fail to tolerate the case in which the permissions object did not have a default key (assuming the default level as NONE). (6812)

