# Release 11.307 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.307

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.307


## Version 11 Stable


##### August 03, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 7 Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the seventh stable-channel release of Foundry Virtual Tabletop Version 11. As with most stable releases, this update focused on bug fixes for issues submitted by our users via our community Discord and our GitHub repository. In addition, we have managed to sneak in a few small, non-controversial quality of life features which we hope you will all enjoy. We'd like to extend a huge thanks to our community for their continued submission of bug reports and assistance hunting out potential causes!


## New Features


### Applications and User Interface

- Made the Compendium ownership UI explicit about inheriting ownership from lower roles. (9860)


## API Improvements


### Localization and Accessibility

- Added a configuration variable to set the minimum prefix length for Document index searches. (9870)


### Other Changes

- Added methods to the Actor and Item Documents which get the default image path for that Document. The FilePicker was also updated to ignore such default icon paths. (9832)


## Bug Fixes


### Documents and Data

- Script Macros that end in comments now run as expected. (9814)
- Exporting a Document to a Compendium Pack no longer incorrectly includes Folder data when Keep folder structure is not checked. (9856)


### Applications and User Interface

- Improved the logic used to identify that a Compendium Pack has - or does not have - ownership overrides. This also provides a way to clear an ownership override, reverting back to a package-defined default via the ownership configuration dialog. (9475)
- Added fallback logic to browse other file storages when the preferred one is marked as private. (9553)


### The Game Canvas

- Toggling the visibility of text Drawings now updates as expected for Gamemasters without a refresh. (9796)
- Darkvision no longer occasionally renders lights with adaptive luminance in monochrome. (9797)
- The Actor#getActiveTokens method no longer includes ephemeral Tokens like drag-preview clones. (9817)
- Fixed an issue that caused the hex grid preview to be inaccurate when using the grid configuration tool. (9826)
- Roof Tiles no longer flicker when being dragged. (9827)
- Templates that have not finished drawing yet no longer break the activation of the Templates layer. (9828)
- Added handling for very rare cases where the MouseInteractionManager#handleMouseMove origin was not defined. (9834)
- The MeasuredTemplateDocument#author getter now correctly returns author information. (9835)
- Fixed an issue in WeilerAthertonClipper.testForEnvelopment that allowed blind Tokens to see beyond their bounds when the Token is touched by Walls with certain configurations. (9867)
- Panning to a Map Note no longer throws an error. (9869)
- Fixed an issue where the Canvas could crash when an Overhead Tile is redrawn in some circumstances. (9878)
- Token nameplate visibility is now updated whenever the Display Name is changed. (9881)

`Actor#getActiveTokens``MouseInteractionManager#handleMouseMove``MeasuredTemplateDocument#author``WeilerAthertonClipper.testForEnvelopment`
### Package Development

- Running Update All no longer erroneously pulls warnings from Packages that aren't installed. (9811)
- Package warnings for Modules that failed to install due to an invalid manifest now have their warnings cleared. (9825)


### Other Changes

- Dragging a Page's content link now works as expected even when the link is to a Document in a Compendium Pack. (9877)

