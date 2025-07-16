# Release 11.309 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.309

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.309


## Version 11 Stable


##### September 19, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 9 Release Notes


### Security Fix for WEBP Decoding

Last week a security vulnerability was discovered in the underlying WEBP library that our software uses. This vulnerability has posed an urgent problem for all web browsers. You can read more about the vulnerability here: https://www.theverge.com/2023/9/13/23872484/chrome-firefox-brave-edge-security-update-webp-vulnerability

Foundry Virtual Tabletop is built using Electron, which uses Chromium as an internal web browser, therefore this vulnerability is present in Foundry VTT also. This new release version upgrades to the patched version of Electron and Chromium which eliminates this vulnerability.


### Version 11 Stable Update

Because the fix to this vulnerability requires a new Electron version, you must fully reinstall the software, rather than using the internal updater tool. To do so, download the latest stable release, Version 11.309 from https://foundryvtt.com/me/licenses.


### Version 10 Experimental Update

For users still using Foundry Virtual Tabletop version 10, we have released a sibling update https://foundryvtt.com/releases/10.310 which includes the same fix for version 10 only. It is important to note that this Version 10 fix is on the testing channel rather than stable. This is because it requires the version 10 build of the software to upgrade from Electron 20 to Electron 24 in order to acquire the fix. Electron chose not to backport the fix to older Electron versions which are outside their committed maintenance window. This upgrade may have unanticipated consequences, so we are not entirely confident designating it as stable.

For users who are currently on Foundry Virtual Tabletop version 10 (or lower) - this would be a good moment to consider whether you are able to update to Version 11. Our recommendation is for users to update to version 11.309, however if it is important for you to stay on version 10 to preserve module or system compatibility, we recommend that you consider installing version 10.310 which includes this security fix.


### Questions

If you have any questions about this issue or the update process, please ask in our Discord community in #install-and-connection or contact us via email at https://foundryvtt.com/contact-us/.


## Security Fixes


### Electron

- Updated to Electron 24.8.3 in order to address a vulnerability with WEBP decoding. (10006)


## API Improvements


### Lighting & Vision

- Added an option to the VisibilityFilter allowing it to apply transparency to explored and/or visible areas. (9994)

`VisibilityFilter`
## Bug Fixes


### Documents and Data

- Improve migration of legacy NeDB databases in cases where embedded Documents were missing _ids. (9969)
- Fixed an issue where bad Token data could prevent World launch. (9979)
- Fixed an issue where calling restore on an ActorDelta would prevent any further updates to that ActorDelta without its parent Token first being updated. (9955)
- Fixed an issue where certain non-recursive ActorDelta updates would fail, causing issues when re-importing Scenes in Adventures. (9959)

`_id``restore`