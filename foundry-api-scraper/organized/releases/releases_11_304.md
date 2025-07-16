# Release 11.304 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.304

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.304


## Version 11 Stable


##### June 28, 2023


## Foundry Virtual Tabletop - Version 11 - Stable Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the fourth stable-channel release of Foundry Virtual Tabletop Version 11. As with most stable releases, this update focused on bug fixes for issues submitted by our users via our community Discord and our GitHub repository. In addition, we managed to sneak in a few small, non-controversial quality of life features which we hope you will all enjoy. We'd like to extend a huge thanks to our community for their continued submission of bug reports and assistance hunting out potential causes!


## New Features


### Applications and User Interface

- Compendium Document types are now sorted alphabetically within the Compendium creation dialog. (9588)


### The Game Canvas

- GMs may now alt-click a door to open, close, or unlock it without triggering the associated sound. (9698)


### Package Development

- Package installation progress bars have been moved to the top of the package list. (9570)
- The Module creation tool now creates a pre-configured .gitattributes file in the newly-created Module's directory to prevent database issues when using Git. (9582)

`.gitattributes`
## Bug Fixes


### Architecture and Infrastructure

- Corrected some CORS issues with S3 Cache by way of a cache-busting workaround. (9644)


### Documents and Data

- To resolve an issue which prevented users from viewing the pages of a Journal Sheet inside a Limited Compendium pack, Observer permissions are now applied when viewing Journal Sheets in this view. (9477)
- Setting data is once again checked for type validity. (9549)
- Corrected an edge case which could cause errors when re-sorting a Compendium view during a drag-and-drop workflow. (9620)
- Corrected an issue with Combat#_on{Action}DescendentDocuments and Combat#setupTurns which would sometimes cause turn or round change events to be emitted incorrectly. (9641)
- exportToCompendium no longer fails when exporting Scenes. (9645)
- The _backup created by DataModel.#updateData no longer contains data mutated by source references. (9663)
- TypeDataField is now migrated correctly by inferring the type from the update data in cases where the type is missing. (9690)

`Setting``Combat#_on{Action}DescendentDocuments``Combat#setupTurns``exportToCompendium``_backup``DataModel.#updateData``source``TypeDataField``type``type`
### Applications and User Interface

- To prevent the layout of Card Sheets shifting during the loading process, card images now have a configured flex basis. (9529)
- FilePicker instances on the Setup page no longer allow images to escape their bounds, while maintaining the correct aspect ratio for each image. (9557)
- Improved the contrast on some elements of the Classic Fantasy theme. (9578)
- Tooltips no longer become 'stuck', additionally we corrected a small issue which would cause tooltip videos to flicker when they first appeared. (9670)
- When loading a world, errors which result from a Compendium folder being locked by another process are now handled more gracefully. (9646)

`FilePicker`
### The Game Canvas

- Browsers that do not support WebGL 2.0 now raise the correct error message instead of attempting to proceed through the Scene initialization workflow. (9686)
- Resolved rare cases where the ActorDelta restoration workflow could result in errors referencing null values. (9467), (9657)
- Corrected a number of small issues with MouseInteractionManager, solving some cases where certain interaction workflows (such as right-click to drag) would become unresponsive. (9633), (9667)
- Canvas refresh operations no longer cause drawing failures in cases where a Token was in the middle of being drawn during the refresh. (9643)
- To correct a UX and workflow issue related to Token actor sheets, Token ActorDelta is now reinitialized when a Token is toggled to an unlinked state. (9651)
- Scene textures are now loaded concurrently instead of consecutively, loading times in scenes containing a high volume of images should improve as a result. (9652)
- The visible radius for Ambient Sound sources is now refreshed when the sound layer is activated. (9653)
- To correct an issue which caused looping animated Tiles to fail to autoplay, the playback of Tiles which are an infinite loop is no longer randomized. (9654)
- ActorDelta no longer overrides ownership to None, instead inheriting the ownership of its original Document. (9655)
- the applyTokenStatusEffect workflow no longer triggers an infinite recursion within Token#actor when accessed for an unlinked token. (9687)
- Doors with no sound set no longer incorrectly produce sounds. (9689)
- The Close All Doors button no longer unlocks doors which were locked, and now closes secret doors as expected. (9696)
- To correct for issues where ruler projections would end up in an hung state, userActivity is only emitted as a volatile event in cases where the data is actually volatile. (9617)
- Fixed a bug that caused the Canvas to break when vision is refreshed while a Token is being drawn. This resolves an issue where Scenes containing Tokens with invalid file paths would fail to load. (9701)
- Given a spritesheet, loadTexture now correctly returns a PIXI.Spritesheet instead of a PIXI.Texture. (9704)

`ActorDelta``MouseInteractionManager``ActorDelta``ActorDelta``applyTokenStatusEffect``Token#actor``userActivity``loadTexture``PIXI.Spritesheet``PIXI.Texture`
### Package Development

- The Package update workflow now offers to swap tracks using the URL in the Package repository if the manifest installation URL for a currently installed package results in a 404 error. (9476)
- Worlds which do not provide a download URL no longer present users with an option to reinstall. (9495)
- Package installation progress bars no longer wrap incorrectly when the progress is less than the width of their text content. (9503)
- Corrected a CSS issue which unnecessarily truncated the text within the Package update log. (9600)
- Creating or editing a Module with the Module Creator now saves Relationship configuration as expected. (9605)


### Localization and Accessibility

- Corrected some issues related to Compendium pack label localization. (9561)

