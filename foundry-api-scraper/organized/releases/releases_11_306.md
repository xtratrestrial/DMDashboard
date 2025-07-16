# Release 11.306 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.306

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.306


## Version 11 Stable


##### July 20, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 6 Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the sixth stable-channel release of Foundry Virtual Tabletop Version 11. As with most stable releases, this update focused on bug fixes for issues submitted by our users via our community Discord and our GitHub repository. In addition, we have managed to sneak in a few small, non-controversial quality of life features which we hope you will all enjoy. We'd like to extend a huge thanks to our community for their continued submission of bug reports and assistance hunting out potential causes!


## New Features


### Applications and User Interface

- Toolclips for the select tools now describe more things you can do. (9580)


### Localization and Accessibility

- To improve accessibility, added aria-label attributes to tabs and buttons in the UI that lacked text content. (9751)

`aria-label`
## API Improvements


### Documents and Data

- Script Macros can now shadow the speaker, actor, token, and character variables. (8345)

`speaker``actor``token``character`
### Other Changes

- Increased the maximum expansion depth of expandObject from 16 to 32. (9711)

`expandObject`
## Bug Fixes


### Documents and Data

- Synthetic Actors on non-active Scenes are now appropriately updated when their base Actor changes. (9672)
- Hotbar Macros created by dragging Roll Tables inside Compendia to the hotbar no longer throw an error. (9755)
- Fixed an issue with dry run updates of EmbeddedCollectionFields and EmbeddedDocumentFields that prevented Active Effects from importing correctly. (9757)
- Parent Document sources and Embedded Collection sources no longer become out of sync when bulk updated. (9761)
- Fixed an issue that would sometimes cause Active Effects to be applied twice on load. (9768)

`EmbeddedCollectionField``EmbeddedDocumentField`
### Applications and User Interface

- Pressing the CTRL key after dragging a Token no longer leaves a ghost Token on the Canvas. (9685)
- It is now possible to double right-click on Wall segments and not just their endpoints. (9758)
- Foundry no longer shows the Create Entry/Folder buttons in locked Compendia. (9793)


### The Game Canvas

- Adding/removing Detection Modes in the default Token configuration now works as expected. (9769)
- Non-recursive Scene updates no longer cause synthetic Actors to be updated with incorrect data which occasionally caused issues with re-importing an Adventure. (9760)
- Fixed an issue that occasionally caused loading a Scene to hang if it contained video textures. (9765)
- Improved World launch speed on Worlds with lots of legacy Token data. (9803)


### Package Development

- Recreating a deleted World no longer throws an error. (9323)
- Adding a Game System as a required dependency no longer causes the Module not to load as the non-Module relationships are cleaned. The Module Maker also no longer allows a System to be added as a required dependency. (9514)
- Systems with a minimum core version set to a version newer than the installed core version no longer display a misleading error message. (9699)
- Fixed an issue that prevented errors that occurred when updating packages from bubbling up. (9756)
- Cached template data is now voided when updating a Game System. (9763)


### Other Changes

- The parseUUID method no longer throws an error if given an invalid UUID that starts with an embedded type. (9745)
- Assistant Gamemasters now have permission to rename players. (9749)
- Content Link Matching no longer fails when selecting from right to left. (9764)
- Bulk Scene updates now correctly load related Documents on updated Tokens. (9786)

`parseUUID`
## Documentation Improvements


### Other Changes

- Completed a number of V11 Migration Guides. (9225)

