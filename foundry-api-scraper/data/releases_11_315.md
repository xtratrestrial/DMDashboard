# Release 11.315 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.315

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.315


## Version 11 Stable


##### November 07, 2023


## Foundry Virtual Tabletop - Version 11.315 - Stable 13 Release Notes

We are very pleased to announce the release of Foundry Virtual Tabletop Stable Version 11.315. This release fixes a few small bugs that came up as part of our 11.314 release that included our new compatibility checker tool to make updating to new versions of Foundry easier. Please check out those notes for more details.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a backup of your user data to minimize any risk of data loss.


## Bug Fixes


### Applications and User Interface

- The compatibility checker preview tour is no longer accessible via the in-world Tours interface. (10172)
- Updating the grid size for a Scene no longer reverts to the original grid size after saving. (10170)
- Modules which are verified as compatible now correctly show as green in the in-world Module management screen. (10162)


### The Game Canvas

- Weather effects now load correctly for players the first time they join a game in their browser. (10171)
- Changing the Scene while clicking on the canvas no longer locks the canvas from receiving mouse input. (10142)
- Players can no longer target Tokens with the "Secret" disposition if they are not the Token's owner. (10156)


### Other Changes

- Using --nobackups as a launch parameter no longer causes the --world= CLI argument to be ignored. (10154)

`--nobackups``--world=`