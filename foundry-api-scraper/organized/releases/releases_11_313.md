# Release 11.313 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.313

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.313


## Version 11 Stable


##### October 03, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 11 Release Notes

Following a previous update which included a security fix for Electron (the application which runs when you launch Foundry VTT through its executable) in build 11.309, another vulnerability was discovered and subsequently patched.

Version 11 (Build 313) addresses the new security issue by including a new version of Electron (full reinstall required) and includes a few bug fixes and documentation changes besides!


### Security Fix for WEBM Decoding

Last week a security vulnerability was discovered in the underlying WEBM library that our software uses. This vulnerability has posed an urgent problem for all web browsers. You can read more about the vulnerability here: https://www.helpnetsecurity.com/2023/09/28/cve-2023-5217/

Foundry Virtual Tabletop is built using Electron, which uses Chromium as an internal web browser, therefore this vulnerability is present in Foundry VTT also. This new release version upgrades to the patched version of Electron and Chromium which eliminates this vulnerability.


### Version 11 Stable Update

Because the fix to this vulnerability requires a new Electron version, you must fully reinstall the software, rather than using the internal updater tool. To do so, download the latest stable release, Version 11.313 from https://foundryvtt.com/me/licenses.


### Version 10 Update

For users still using Foundry Virtual Tabletop version 10, we have released a sibling update https://foundryvtt.com/releases/10.312 which includes the same fix for version 10 only. It is important to note that this Version 10 build of the software upgrades from Electron 20 to Electron 24 in order to acquire the fix. Electron chose not to backport the fix to older Electron versions which are outside their committed maintenance window. The previous experimental build that included a security fix for a WEBP vulnerability did not have any unintended consequences and so we are confident in designating this build as stable.

For users who are currently on Foundry Virtual Tabletop version 10 (or lower) - this would be a good moment to consider whether you are able to update to Version 11. Our recommendation is for users to update to version 11.313, however if it is important for you to stay on version 10 to preserve module or system compatibility, we recommend that you consider installing version 10.312 which includes this security fix.


### Questions

If you have any questions about this issue or the update process, please ask in our Discord community in #install-and-connection or contact us via email at https://foundryvtt.com/contact-us/.


## Security Fixes


### Electron

- Updated to Electron 24.8.5 in order to address a vulnerability with WEBM decoding. (10061)


## API Improvements


### Documentation

- Added example usages for CompendiumCollection#getDocuments. (10022)
- Amended incorrect documentation for the mergeObject helper. (10047)

`CompendiumCollection#getDocuments``mergeObject`
### Other Changes

- Improved error message when attempting to call importFromJSON on a non-primary Document. (10009)

`importFromJSON`
## Bug Fixes


### Documents and Data

- Fixed an issue where overriding CONFIG.Folder.documentClass could cause Worlds to fail to initialize. (10034)

`CONFIG.Folder.documentClass`
### Applications and User Interface

- Fixed certain conditional checks in folder context menus not behaving correctly. (9985)
- Fixed several issues related to opening a new context menu before the previous one was closed. (10042) (10040)
- Fixed Playlist search failing to show results that were nested four folders deep. (9995)
- Adjusted the display of the 'Jump to Bottom' button in the Chat Log to no longer use hard-coded positioning. (10005)


### The Game Canvas

- Fixed various issues related to placement and snapping. (10031)
- Fixed PIXI.VideoResource not being appropriately cleaned up whenever its corresponding PIXI.BaseTexture was destroyed. (10030)

`PIXI.VideoResource``PIXI.BaseTexture`
### Built-In Backups

- Fixed display of backup notes not being appropriately truncated. (10057)


### Localization and Accessibility

- Amended Invisible Wall toolclip to no longer claim it blocks sound. (9962)


### Other Changes

- Improved server-side error handling when attempting to launch a default World via the --world command-line argument. (10016)

`--world`