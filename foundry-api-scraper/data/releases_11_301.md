# Release 11.301 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.301

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.301


## Version 11 Stable


##### June 09, 2023


## Foundry Virtual Tabletop - Version 11 - Stable Patch 2 Release Notes

Welcome to the third release of Foundry Virtual Tabletop Version 11. We're extremely pleased to bring this update to our community, containing a wide variety of bug fixes sourced from the feedback and bug reporting channels on our community disccord. Thank you all for submitting your feedback and helping us stay on top of bugs!

This update focuses on some post-release cleanup of bugs for Foundry VTT V11 and as such doesn't have much in the way of features for us to highlight. For a complete log of all the features added in V11, please see the notes for our previous release on the stable channel.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Applications and User Interface

- Added support for Users specifying their own pronouns which are rendered in the Players list. (9591)


### Package Development

- Invalid remote package manifests now show additional details that should make debugging easier. (9358)


## Bug Fixes


### Documents and Data

- Active Effect status IDs are now correctly migrated to statuses. (9490)
- Empty Folders from Compendium Packs are no longer pruned on import. (9499)
- DataModel#clone now creates a clone with the same parent as the original. (9592)

`statuses``DataModel#clone``parent`
### Applications and User Interface

- Prototype Token configurations now correctly retrieve the configured bar values. (9551)


### The Game Canvas

- Adding Tokens with video textures to the Combat Tracker no longer causes the asset loader to fail during world load. (9568)
- It is once again possible to drag select Tiles. (9586)
- OccludableObject#refreshOcclusion no longer calls the refreshTile hooks with an incorrect argument. (9589)
- Added synthetic Actor creation back into ActorDelta#_configure to ensure that initialization can complete correctly. (9563)
- Closing the Default Token Settings window no longer fails with an error. (9571)
- Redrawing and/or refreshing a PlaceableObject while it is still being drawn no longer breaks the object. (9576)
- Unpausing a video tile no longer re-randomizes the current playback time. (9577)
- Combatants who have their Token configuration window open can now be pinged again. (9583)
- Preview sources of Tokens and AmbientLights are no longer removed when vision/lighting is initialized. (9584)
- The preview Token of the Token config is now correctly added to TokenLayer#preview and no longer appears in TokenLayer#placeables. (9585)

`OccludableObject#refreshOcclusion``refreshTile``ActorDelta#_configure``PlaceableObject``Token``AmbientLight``TokenLayer#preview``TokenLayer#placeables`
### Package Development

- Foundry now respects the order of Folders and Packs that appear in packFolders when manually sorting. (9519)

`packFolders`
### Dice and Cards

- Reverted 8661 to resolve an issue where Roll.fromTerms failed to parse formulas with parentheses. (9554)

`Roll.fromTerms`
### Other Changes

- Actor#update now returns the correct Document type when the Actor is synthetic. (9565)
- The Token light preview now updates correctly. (9573)

`Actor#update`