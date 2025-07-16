# Release 0.7.10 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.94

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.10


## Version 7 Stable


##### May 20, 2021


## Foundry Virtual Tabletop - Version 0.7.10 Update Notes

We are pleased to release Foundry Virtual Tabletop version 0.7.10, the final stable release in the 0.7.x series. This update resolves several lingering bugs, addresses security issues, provides a direct path for migration to 0.8 for users hosting their server via NodeJS version 14+, and back-ports the incredible icon library for users who wish to remain on version 0.7. We do not expect any further features or changes will be brought to the 0.7.x series as we look toward the future with our upcoming stable release of 0.8.6 and new exciting features yet to come in 0.9.

WARNING: Version 0.7.10 is labeled as a stable release, but as always please be sure to back up your personal data in case of any unexpected bugs or compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.


### Update Overview

As the final stable release for 0.7.x this update primarily focused on some bug and security fixes. As such, the only new feature is the addition of more than 1500 icons that were previously only available to the 0.8.x version. Since this release does include several security fixes it is strongly recommended for everyone who wishes to remain on the 0.7 series of the software to update to version 0.7.10.


### New Features


#### Interface and Applications

- More than 1500 new icons have been added, the majority of which are "action" oriented, depicting skills, abilities, and magic spells!
- The software update function now performs a node.js version check as part of the update process, allowing individuals using node to host the server to upgrade directly to 0.8.x if Node 14+ is detected.
- A one-time override to the package compatibility logic has been included in 0.7.10. For the purposes of determining "Compatibility Risk" warnings for modules and packages, 0.7.10 is treated as 0.7.9 to avoid a situation where installing this update causes the user to receive warnings that all of their installed systems and modules are outdated.


#### Documents and Data

- Back-ported an improvement that conveniently wraps Macro execution in an async scope, allowing the use of await within script macros.


### Bug Fixes


#### Security Fixes

- Back-ported two security fixes from 0.8.x to close loopholes which allowed player clients to access some configuration data that should only be visible to the GM or server admin.
- Back-ported two security fixes from 0.8.x to prevent package or world installation from escaping the bounds of the allowed user data directory.
- Back-ported a security fix from 0.8.x which hardens a flaw related to session token generation. Thanks to @sum_catnip for identifying this issue (as well as two of the above) and contacting me with their findings.

`@sum_catnip`
#### Other Fixes

- Actors and items imported from compendia will no longer be incorrectly created using derived data, and now use the correct base data structure instead.
- Token disposition color will now be displayed correctly based on set disposition, instead of assuming every token is neutral.

