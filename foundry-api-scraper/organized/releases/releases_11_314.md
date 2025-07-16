# Release 11.314 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.314

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.314


## Version 11 Stable


##### November 01, 2023


## Foundry Virtual Tabletop - Version 11.314 - Stable 12 Release Notes

We are very pleased to announce the release of Foundry Virtual Tabletop Stable Version 11.314. As part of the ongoing development of features in our previously announced 11.5 update series, this update introduces our Pre-update Compatability Check feature. The Compatibility Check tool provides an overview of available versions for currently installed packages, allowing users to more easily identify if their favorite Game Systems or Add-on Modules are ready for a new version of Foundry VTT. In addition, this version provides a few minor bug fixes, including a version bump to address a security issue in TinyMCE.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a backup of your user data to minimize any risk of data loss.


## New Features


### Package Development

- The Setup Menu now provides a new Pre-Flight Compatibility Checklist which reports on the forward-looking compatibility status of installed systems and modules, allowing users to make informed decisions before updating the core software to a new version. (8064)


### Architecture and Infrastructure

- TinyMCE has been updated to version 6.7.1. (10124)


### Applications and User Interface

- The backups tour now waits to begin until after the telemetry dialog has been dismissed. (10116)


## Bug Fixes


### Documents and Data

- Some steps have been taken to address a TypeError thrown when performing bulk update operations on Scenes containing Tokens that have empty ActorDeltas, however further work will be required to fully resolve this issue. (9938)
- We have resolved a race condition which impacted Actor data preparation workflows related to ActiveEffects (and setting legacyTransferral in particular). (10048), (10053)
- We have corrected a bug which could cause walls and other canvas placeables to shift position unexpectedly when changing grid size. (10062)
- Parent Document source data and Singleton Embedded Document source data no longer desync as a result of bulk updates. (10128)

`TypeError``ActorDeltas``ActiveEffects``legacyTransferral`
### Applications and User Interface

- We have corrected an issue where the use of long alt text for macro images would sometimes result in the macro hotbar being rendered incorrectly. (8768)
- Application Configuration now prompts to confirm changes every time instead of just the first time. (10039)
- Backup-related context menu options for packages are now hidden if the server was started with the --nobackups launch parameter. (10090)
- Camera displays now fill the Audio Video Chat Frames and no longer result in letterbox bands at the top or sides. (10118)
- Canvas#tearDown now cancels any ongoing mouse interactions to prevent cases where mouse input could become locked when changing scenes. (10142)
- Users with SETTINGS_MODIFY permissions may now edit Default Token Settings. (10059)
- We have corrected a missing definition of width and height for /icons/svg/d20-highlight.svg and this icon should now display correctly when used on the canvas. (10095)

`--nobackups``Canvas#tearDown``SETTINGS_MODIFY``/icons/svg/d20-highlight.svg`
### The Game Canvas

- We have developed a candidate fix for the "white scene"/"white stairs" issue that could occasionally occur on older hardware, particularly older Macs. (8167)
- Occlusion of overhead Tiles now functions as expected when a Tile is set to invisible. (10054)
- Tile video volume now respects the Global Ambient Volume setting. (10130)


### Package Development

- Using the Reset Passwords function from the Edit World dialog now functions as expected in cases where the password is already blank. (10075)
- Compatibility warning messages in package update log no longer display as undefined for the current version. (10083)

`Reset Passwords``undefined`