# Release 0.5.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.68

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.5


## Version 5 Testing


##### April 17, 2020


## Foundry Virtual Tabletop - Beta 0.5.5 Update Notes

Hi everyone, I'm extremely excited to celebrate a major milestone for Foundry Virtual Tabletop with Beta 0.5.5 and the launch of software license purchasing on the official website. This is an odd-numbered "stable" release for all Patreon supporters and for all users who pre-purchase a license from the website. There are relatively few changes in this update, the most significant of which is the addition of the new license verification process which applies to non-Patreon customers and will (eventually) apply to everyone.

Along with this release pre-purchasing is now available on the website! You'll be hearing more details about that in a companion post coming shortly. If you haven't yet gotten a chance, please check out the Release Announcement Video which was posted recently.

For those of you who did not update to version 0.5.4, this update includes a ton of major new features from that update version. Be sure to see the Beta 0.5.4 Update Notes for all the details on those changes.


### New Features

- Implemented a new workflow for software license key application and activation as a first step in the VTT user experience. When launching Foundry for the first time (or if you do not have a license applied) you will be prompted to enter a software license key. For users who have temporary access to the Foundry Beta through Patreon, you should use the access key provided through Patreon. For users who have purchased a software license from the website, use the license key which is available on the Purchased Licenses subsection of your user profile.
- Improve the tag designation for packages which do not state a compatible core version which is equal or greater than the core VTT version to be displayed as "Compatibility Risk" rather than "Requires Update".
- Provide a human-readable error message when the user tries to download a file and save it to a location where they do not have write permissions.
- In response to user feedback, redefined keyboard control for canvas zooming to use either NumpadPlus/NumpadMinus or PageUp/PageDown with no modifier key required.


### Bug Fixes

- Fixed an issue with World-level settings with the String datatype where the string was not appropriately serialized and unserialized when stored to the server, resulting in JSON parsing errors after a reload.
- Downloaded files could occasionally produce an "End of Central Directory Signature" error if the file was immediately unzipped after download but before the downloaded file was properly closed.
- Pre-existing Modules and Systems were failing to detect available updates due to incorrect server side logic which checked for updates to the package.
- Fixed an issue which could cause the Module Management form to not be properly saved due to incorrect JSON formatting of the saved setting value.
- Image decoding in the new TextureLoader was not working properly for Images which were very large. The asynchronous loading process for loaded image textures has been changed to work better for such image files.
- Fixed an issue which caused the new sight rendering computation to fail for tokens which had a limited angle of vision or light source emission.
- Scene entity deletions were not properly cascading server-side to also delete related entities like Combat Encounters, Fog Exploration, or saved thumbnail images.
- Socket handshakes were incorrectly rejected by Electron when using SSL certificates because they came from the WebSocket wss:// protocol instead of https://.
- Beginning an Item Compendium drag operation should be allowed so that players can populate their own character sheets. It is currently requiring the ITEM_CREATE permission which should not be needed.
- An excessive line-height created a bad appearance for RollTable results whose text wrapped onto multiple displayed lines.
- Modules were not properly showing Localization tags if they included a languages entry in their module manifest.
- Sharing a popout image with other players fails on the receiving clients if a companion Entity object is not defined. This should not be the case and has been corrected.


### Framework and API Changes

- Improve the way that search filtering is performed in the FilePicker, Package Installation, and Compendium applications to reduce the risk of duplicate filtering or searching effort.
- Improve the ability to cancel the movement animation of a Token with a Token.stopAnimation function so that it can be properly terminated when the Token is deleted or when the Tokens layer is deconstructed.

`Token.stopAnimation`
### Documentation Improvements

- Added a new Installation Guide: https://foundryvtt.com/article/installation/
- Added a Knowledge Base page on Macro Commands: https://foundryvtt.com/article/macros/


### Known Issues

- If there are enough Scenes displayed in the Navigation Bar that it wraps to a 2nd (or more) line, those subsequent rows of Scenes will overlap the position of the loading bar which displays load progress.

