# Release 10.303 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.303

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.303


## Version 10 Stable


##### June 26, 2023


## Foundry Virtual Tabletop - Version 10.303 - Stable Release Notes


## Backported Changes

- Raised the minimum browser versions to match EMCAScript features used by the core software. (Chromium 92, Firefox 90, Safari 15.4).
- Token actorData now has its validation handled as expected.
- Corrected an error with document collection initialization, World Data should no longer be mutated during this process.
- Document creation containing EmbeddedDocument data now appropriately applies cleaning to the EmbeddedDocuments.
- Eliminated two edge-case exploits which allowed for XSS (unauthorized JavaScript). In order to ensure that your installation of Foundry Virtual Tabletop is as secure as possible, we recommend users remaining on Version 10 update to build 10.303.

`actorData``Document``EmbeddedDocument``EmbeddedDocuments``10.303`