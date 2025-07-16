# Release 0.8.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.93

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.5


## Version 8 Testing


##### May 21, 2021


## Foundry Virtual Tabletop - Version 0.8.5 Update Notes

Welcome to the third beta channel update in the Foundry Virtual Tabletop 0.8.x series! We're getting ever closer to the exciting release of the stable version for 0.8.x! This update focuses on primarily on fixing reported bugs from the 0.8.4 update and strengthing the code that will become the stable version. This update solidifies a number of the core features that were the focus of the 0.8.x series of updates, including a restructuring of the data model to provide a more standardized API, an overhaul of the audio engine Foundry VTT uses to supply playlists and ambient audio sources, the popular community-voted Overhead Tiles system, and many other awesome features.

WARNING: Beta channel releases have the potential to introduce breaking bugs that may be disruptive to play. These features are close to ready for a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. If your game in particular relies upon a large number of add-on modules, it would be best to wait for the stable release.

If you are upgrading the Foundry Virtual Tabletop application to 0.8.5 from 0.7.9 you must perform a fresh installation of the software. Because of some of the infrastructure changes it is only possible to update to this version from within the Foundry VTT application if you are already using 0.8.0. This does not apply to users running dedicated servers with Node 14+.

As always, before any significant update:

Be certain to carefully back up any critical user data before installing this update.

As we get closer to a stable release, our updates include fewer major changes to features in order to focus on stabilizing what we have created.


### Update Overview

This update primarily focuses on handling community reported bugs and addresses a few more critical issues that showed up in testing. In addition, it implements a few minor API improvements to help our awesome community developers keep momentum in the updates of their systems and modules for 0.8.x compatibility.


### Known Issues

Audio/Video Chat integration using the built-in EasyRTC server is currently non-functional. Other methods of Audio/Video chat such as Jitsi should not be impacted. We hope to have this issue resolved in the next release.


### New Features


#### Interface and Applications

- To save some confusion on packages that have only experienced a change in manifest location, the package update log displayed after an "update all" will no longer show these packages.


### API Improvements


#### Documents and Data

- The ActorSheet class now uses the default DocumentSheet#getData context rather than completely overriding it. This does not change the returned data structure.

`ActorSheet``DocumentSheet#getData`
#### The Game Canvas

- Switching to a different scene will no longer immediately destroy cached base textures used in that layer to allow other scenes and layers to use them.


#### Documentation

- Corrected the documentation for Actor#_onUpdate to indicate that it provides userId as a string.
- Roll#toMessage now opts-in to calling {async: true} if the provided Roll has not yet been evaluated and requires evaluation.

`Actor#_onUpdate``userId``Roll#toMessage``{async: true}`
### Localization Improvements

- The "name" attribute of PackageLanguageData is now an optional string. The language code will be used instead if one is not provided.
- Translation modules which offer coreTranslation but also translations for packages will now display each as an option in the language configuration dropdown.
- Loading a world with a missing coreTranslation module will no longer prevent loading.

`PackageLanguageData``coreTranslation``coreTranslation`
### Bug Fixes


#### Documents and Data

- Adjusted the error message to be more informative when trying to create an Actor or Item document without a valid "type".
- Corrected an issue where creating a second embedded document within the same parent that has a duplicate _id as one of its existing siblings would fail to throw a uniqueness error.
- Compendium creation no longer fails to use PackageCompendiumData structure after migration.
- Instances of the DocumentSheet class are now properly detected as isEditable false if the document they represent is contained within a locked compendium pack.
- Linking to compendium content via name was not working, but now is restored to functionality. Please note it is still preferred to link by ID if it is practical to do so rather than linking by name which is inherently more fragile.
- Importing actors from compendium packs one at a time no longer causes prototype token values to be set according to the first imported actor.
- Improved the Package install workflow to return a full Package object rather than just its top level metadata.

`_id``PackageCompendiumData``isEditable false`
#### The Game Canvas

- Resolved an issue that would cause instances of tiles in two scenes with the same texture to function incorrectly when one of them was swapped from an overhead/underfoot state.
- Overhead tiles set as a Roof tile now treat invisible walls correctly, preventing vision if the token is not underneath the tile.
- Switching an overhead tile from Radial to another mode will no longer incorrectly maintain the radial occlusion setting.
- Pixel alphaMaps will no longer be computed for images of tiles intended for use as drag operations or other temporary purposes.
- Resetting a scene's fog of war will no longer cause an error if a token in that scene has an active light animation shader.
- Improved the logic used to determine whether an AmbientLight point source has an active coloration shader, ensuring that changes to the light source are immediately rendered as part of the preview instead of when the light source is updated.
- Ensured that redrawing the canvas does not update the blur filter strength on lights to the same value as before the re-draw, preventing lights from becoming unexpectedly blurry if the zoom level changed between redraws.
- Moving with arrow keys while a token is completing a drag move will now halt the in-progress movement and carry out the arrow key movement.
- The preview of a dragged token no longer incorrectly displays resource bars as full or empty.
- Deleting a Token which is linked to a Combatant in a Combat encounter no longer causes the current active combatant to be reselected randomly.
- Fixed the Ambient Sound placement workflow to prevent instances where a placed sound would not be visible until the current layer is switched.

`AmbientLight`
#### Interface and Applications

- Owned premium content can once again be downloaded and installed in 0.8.x, as intended.
- The Install Package menu should once again correctly filter installed packages.
- The package lock button should now function as expected when used on a freshly installed module.
- Fixed an error being thrown when checking for an update on a freshly installed package.
- Attempting to install a package from an invalid manifest no longer disables the install button.
- Corrected an issue where a newer version of the manifest would not always be used when accepting a new manifest update track.
- Ensured that a module's compatibility risk flag is once again displayed on the in-world module management window.
- Corrected an issue where upon returning to Setup from a live world, sometimes the various Install Package lists would fail to load properly.
- Chat cards containing links to documents within a compendium will no longer fail to resolve correctly after a refresh.
- Popped out sidebar tabs will now automatically re-render when new documents are created in the displayed collection.
- Using the TinyMCE filepicker for images no longer produces errors when trying to upload an image.


#### Dice System

- The creation of a PoolTerm using the fromRolls static method resulted in an incorrect data structure if the component rolls were not previously evaluated. This has been corrected to work with un-evaluated rolls.
- RollTable.drawMany() should once again adhere to the "Draw with replacement" option.
- Updated roll formula parsing to properly handle nested dice pools where commas separate the inner-most and the outer-most parts of the pool. (eg: {2d6,{1d6,3d4}kh}kh )

`PoolTerm``fromRolls``RollTable.drawMany()``{2d6,{1d6,3d4}kh}kh`