# Release 10.284 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.284

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.284


## Version 10 Stable


##### September 01, 2022


## Foundry Virtual Tabletop - Version 10 Stable Build 284 Release Notes

After the first stable release of Version 10 yesterday, we have collected feedback and bug reports from the community to put together a patch that fixes a handful of notable issues which should make transitioning to Version 10 even easier! If you would like to see more of the changes that went into V10, be sure to check out the Stable release's notes including our What's New in V10 video.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

This release is exclusively bug fixes designed to make Version 10 Stable's release even more solid. If you were experiencing issues with installing or updating some packages, importing journal entries, or a number of other issues this update will hopefully resolve them for you.


## New Features


### Applications and User Interface

- The default OS styling for the search input cancel button has been improved. (8039)


## Bug Fixes


### Documents and Data

- Importing Journal Entries should now import their content as well. (7966)
- Scene Notes should now be properly accessible via the sidebar context menu. (8025)


### Applications and User Interface

- Fixed an issue where the AV panels would not correctly reclaim space when hidden in the top/bottom configurations. (8026)
- The search filter event handling has been changed to use an input event which also works for clearing the field. (8028)
- The Player List context menu should no longer appear behind the AV panel when docked to the bottom of the screen. (8032)
- The Module Management UI now only shows active modules to players. (8034)
- The "Door State" field of the WallConfig sheet should no longer be incorrectly disabled when the Wall is a Door. (8040)
- Detection Modes should now be configurable on a Prototype Token. (8016)

`input``WallConfig`
### Package Development

- Files referenced in the world.json should once again be correctly loaded. (8017)
- Newly created worlds should now have the appropriate compatibility metadata which will allow them to be auto-launched. (8033)
- Corrected an issue where Packages which designate multi-generational compatibility were still reported as a compatibility risk. (8035)
- The automatic Package manifest migration for Systems has been corrected to properly migrate them to the relationships.systems field. (8037)
- The automatic Package manifest migration should now handle cases where the "authors" field was a single string. (8045)
- Package installation failures should now provide clearer errors for why installation failed in their toast notification and in the console. (8046)

`world.json``relationships.systems`
### Localization and Accessibility

- The Document names in the Create Compendium dialog dropdown are now localized. (8036)
- Localization strings provided by tours should now correctly be added to the base English dictionary rather than the localized dictionary. (8041)


### Other Changes

- Secret blocks should once again retain any additional classes they may have been given when saved. (8014)
- The Assign Token feature in the Prototype Token window should no longer throw an error. (8018)
- Fixed a bug where new markdown sheets would not save contents that were pasted in for the first time. (8031)

