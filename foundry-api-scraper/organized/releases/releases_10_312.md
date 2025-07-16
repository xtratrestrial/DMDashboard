# Release 10.312 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.312

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.312


## Version 10 Stable


##### October 03, 2023


## Foundry Virtual Tabletop - Version 10 - Stable Release Notes


### Security Fix for WEBM Decoding

Last week a security vulnerability was discovered in the underlying WEBM library that our software uses. This vulnerability has posed an urgent problem for all web browsers. You can read more about the vulnerability here: https://www.helpnetsecurity.com/2023/09/28/cve-2023-5217/

Foundry Virtual Tabletop is built using Electron, which uses Chromium as an internal web browser, therefore this vulnerability is present in Foundry VTT also. This new release version upgrades to the patched version of Electron and Chromium which eliminates this vulnerability.


### Version 10 Update

For users still using Foundry Virtual Tabletop version 10, we have released this update which includes a fix for WEBM decoding only. It is important to note that this Version 10 build of the software upgrades from Electron 20 to Electron 24 in order to acquire the fix. Electron chose not to backport the fix to older Electron versions which are outside their committed maintenance window. The previous experimental build that included a security fix for a WEBP vulnerability did not have any unintended consequences and so we are confident in designating this build as stable.

For users who are currently on Foundry Virtual Tabletop version 10 (or lower) - this would be a good moment to consider whether you are able to update to Version 11. Our recommendation is for users to update to version 11.313, however if it is important for you to stay on version 10 to preserve module or system compatibility, we recommend that you install this update which includes this security fix.

Because the fix to this vulnerability requires a new Electron version, you must fully reinstall the software, rather than using the internal updater tool. To do so, download the version 10.312 stable release from https://foundryvtt.com/me/licenses.


### Questions

If you have any questions about this issue or the update process, please ask in our Discord community in #install-and-connection or contact us via email at https://foundryvtt.com/contact-us/.

