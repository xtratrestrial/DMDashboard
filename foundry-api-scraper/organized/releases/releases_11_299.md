# Release 11.299 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.299

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.299


## Version 11 Stable


##### May 24, 2023


## Foundry Virtual Tabletop - Version 11 Stable Release Notes

We are extremely proud to announce the stable-channel release of Version 11, bringing a whole host of new features to Foundry Virtual Tabletop for our users. Version 11 contains hundreds of hours of development work and is a substantial iteration on nearly every aspect of Foundry VTT. Throughout V11 we've focused our efforts on UI improvements for the main setup screen, a complete replacement of our database engine, significant upgrades for the game's canvas rendering engine, and our patreon-voted feature: Compendium Improvements.

With development of new features concluding in V11, we're very pleased with the changes that it brings and we hope you'll all enjoy the myriad of improvements we've made. Our next few releases on V11 will target bug fixes, as we prepare for the planning phase for Version 12!


## IMPORTANT: How to Update Safely To a New Version

This update performs a data migration when worlds are launched which cannot be reversed if you do not backup your data.

- Back up your User Data from version 10 This can be done by following this guide.
- We strongly recommend uninstalling Foundry VTT before installing the update but this is an optional step.
- Download and install the Version 11 Stable Release (Build 299). You may not update to version 11 using the in-application updater. You must reinstall using a full download from the download page.
- After launching Foundry VTT in v11, take a moment to update your Game Systems and Add-on Modules. Some systems and modules will have a V11 compatible version available, some will not.
- Launch your World. Be aware that in order to protect your data, all modules will initially be disabled during the first launch of a World in Version 11. A prompt will remind you that this is the last opportunity to save your data if you have not already performed a backup!
- Take some time to test your World and make sure everything is in working order before re-enabling any modules.
- Carefully re-enable a few Modules at a time, choosing ones you view as most essential. Take the time to test your World in-between to make sure nothing has drastically changed.
- If everything has gone well, congratulations! Enjoy all the new features Version 11 brings! If you need to revert to V10 you can restore your backup from step 1.


## Update Overview

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

It has been a long and rewarding road as we have worked on V11 and we've managed to pack every inch of it with new features and improvements. Not only have we improved performance in a lot of ways, but we've also totally replaced our database engine and done a complete overhaul for our Setup screen. We have also massively upgraded our sidebar by adding better search and folder support for Compendium Packs, great new features to our Journal system like a visual table editor and support for highlighting text to automatically find relevant links, brand new Wall types and Door sounds, tons of improvements and bug fixes for developers, and so much more. There is such a variety of new functionality that we've decided to break it down into individual categories to help you find the information that most interests you:

Necessary for improvements to our compendium packs and future stability and architecture improvements, Version 11 introduces LevelDB as a replacement for our previous NeDB database engine. LevelDB uses a similar data infrastructure as our previous database engine, making it easy to slot in as a replacement without requiring our development community to adapt in drastic ways. LevelDB Database files are also binary encoded, allowing for a much more robust data storage method with less likelihood of issues caused by manual editing. Overall, the new Database engine provides:

- Improved performance and stability for data storage operations.
- Ability to make specific granular changes without the need to rewrite an entire entry.
- Increased speed of bulk database operations.
- Capability to selectively update "grandchild" embedded documents.
- Enhanced search features thanks to improved compendium indexing.
- More room for future improvements in database performance and architecture.

Reworking the database engine also provided some great opportunities for us to refactor some of our more complicated architecture- specifically with regard to Synthetic (unlinked) Tokens. We're pleased to say that thanks to this refactor, operations which alter Synthetic Tokens are much more standardized and in line with data handling for linked Tokens. Long-running issues which made working with unlinked tokens tricky for our development community should now be a thing of the past!

For our users which require ability to directly edit entries in these database files, we are in process of creating a new suite of command-line tools to allow for unpacking, editing, and repacking existing database files.

Version 11 brings the first steps in an overhaul of the user interface. We've revitalized our main setup menu and world launch views to provide a more sleek appearance, with streamlined options allowing users to see their worlds, game systems, and add-on modules in a variety of different ways. The new setup menu supports ability to swap between a few new themes we have provided, allowing users to customize the way their setup screen looks. In addition, users can pin their favourite packages to the top of the list for quick and convenient access.

We've improved the UI inside launched worlds: using the tooltips framework we first established in Version 10, we've added helpful instructional videos we're calling "Toolclips" to the canvas tools, allowing users to easily see small tutorials on how to use those tools.

Last but not least, we touched on a lot of different parts of the in-world UX and UI experience bringing some notable changes: The rich text editor now supports a GUI option to add tables to your Journal entries, and we've added a feature which uses the improved indexing and search features provided by our new database engine to quickly search for selected text, offering related Documents that match so you can quickly link to them when using rich text fields.

For this version, our Patreon subscribers voted that we should prioritize Compendium pack updates. One of our most anticipated and requested features, our publishing partners will be pleased to know that we now support deeper organization of compendia using folders, allowing documents and folders of documents to be dragged and dropped between the sidebar and compendium packs.

We've also standardized the UI of the compendium sidebar tab, extending folder support and adding new options for filtering, as well as a clean new UI that adds an image background to each compendium. Users can not only set up folders for their compendiums now, but can also change how their compendiums are sorted. In addition, new options for filtering and managing visibility allow GMs to have a more granular amount of control over which compendium packs are visible.

In addition to the usual swath of API improvements and changes that come with every version, we brushed up the tools for our development community during the V11 development cycle, adding some very key new features. The handling of package relationships saw some improvements related to both installation and management of dependencies, we extended the canvas API granting access to a lot of canvas options (such as Pointsource elevation levels) and Modules may now define subtypes of Documents.

`Pointsource`Additionally, we've made some improvements for module creators in terms of tooling- the new HotReload feature allows you to work on your content without having to constantly reload to see changes. Modules may now define a "persistent storage" folder which will not be erased when the module is updated. We've also extended adventure compendium tooling to allow for users to easily configure granular imports, and the new Module Maker is designed to help addon creators more easily package their modules for distribution.

We've made a lot of more subtle improvements to scene features and the canvas that might be easy to miss. In some cases these are simple quality-of-life improvements- for example: resizing a scene now also attempts to re-position any Tokens, Templates, Tiles, Light Sources, Walls, Sounds, Notes, and any other canvas objects that have been placed.

There've also been some significant optimizations for our canvas. As part of efforts to improve the way the canvas is rendered, we're now using PIXI 7, which has made it possible in conjunction with our new database engine to optimize our fog of war handling even further. Between that and the introduction of Webworkers for some canvas rendering uses, we're proud to say that your scenes should be running faster and smoother than ever before. These improvements benefit not only top-shelf computers, but also those users whose machines are a little more modest.

- Siren - A light designed to mimic the rapid rotation of emergency lights, with ability to adjust its angle.
- Rotation - a tight 180-degree light source created to provide a feeling like the slower rotating of a particular alarm light.

Last, but certainly not least, Version 11 allows us to introduce Proximity Walls- a new wall type which can only be seen through when a token is within a certain range of it. These may also be inverted to allow for walls that can only be seen through if a token is not within that radius. Proximity walls provide a great way to represent windows, small ledges, pits or cover. We feel that this feature really rounds out the existing options for walls, and we hope everyone enjoys making use of them in their games!


## Breaking Changes

There are no breaking changes from V11 Testing 3 but there are some important breaking changes to be aware of from V10 to V11. You can find all of those breaking changes here: https://github.com/orgs/foundryvtt/projects/32/views/9.


## New Features

The stable release for Version 11 is the culmination of several months worth of development time and contains all the contents of our previous releases in the V11 series. While we do offer a summary of features below, if you'd like to view the notes for the previous releases, you can view them here:

- Version 11 - Prototype 1
- Version 11 - Prototype 2
- Version 11 - Development 1
- Version 11 - Development 2
- Version 11 - Testing 1
- Version 11 - Testing 2
- Version 11 - Testing 3


### Architecture and Infrastructure

- Cleaned up the Toolclips implementation to use a rendered template. (9415)


### Applications and User Interface

- Re-implemented Setup screen tours to guide new users through the redesigned V11 Setup menu. (8940)
- Upgraded the Journal Entry page search with full text search capabilities. (9421)


### Package Development

- Clarified the wording used when asking to enable optional dependencies for packages. (9420)


### Applications and User Interface

- Added a way to reveal the fog of war for all players. (8987)


## API Improvements


### Architecture and Infrastructure

- Added Token#externalRadius. (9458)

`Token#externalRadius`
### Applications and User Interface

- Added the ActiveEffect#img getter which provides a compatibility layer for the ActiveEffect#icon property that lets Active Effect Documents be used interchangeably with other Documents that expose img as their primary icon. (9455)

`ActiveEffect#img``ActiveEffect#icon``img`
### Other Changes

- Game#tooltip is now a configurable property so that systems and modules may reassign it if necessary. (9430)
- Expanded the search API to look in embedded Document collections. (9441)
- ActorDeltas are now lazily loaded to avoid unnecessary work at World load. (9461)
- Refactored Scene navigation data preparation to avoid calling toObject unnecessarily. (9462)
- Added Notifications.remove and Notifications.clear (9456)

`Game#tooltip``search``ActorDeltas``toObject``Notifications.remove``Notifications.clear`
## Bug Fixes


### Documents and Data

- The renderCompendium hook once again returns the index of entries in a Compendium. (9424)
- Fixed a bug where right-clicking a Folder would cause the context menu to open and then immediately close. (9427)
- Ensured it is no longer possible to add Folders to locked Compendia. (9433)
- Modules should no longer have Pack Folders added to the Compendium Sidebar before activating the module. (9436)
- The Compendium Sidebar can no longer incorrectly toggle search to Full Text, which it cannot use. (9440)
- Fixed an issue where attempting to create a Rollable Table from the contents of a folder would fail. (9442)
- Players with Owner permission on a Compendium should now be able to see the header buttons. (9446)
- Corrected a bug with Folder#exportToCompendium failing to correctly export a complex hierarchy of folders. (9448)
- When an Actor or Token parameter is explicitly passed to Macro#execute it is now passed as the speaker in the ChatMessage#getSpeaker method. (9450)
- Added deprecated descendant Document event stubs to ClientDocument to prevent errors when subclasses attempt to call super on them. (9457)
- Changed the ogg video file extension in CONST.VIDEO_FILE_EXTENSIONS to .ogv to resolve the conflict with ogg audio files that use the .ogg extension. (9460)

`renderCompendium``Folder#exportToCompendium``Macro#execute``ChatMessage#getSpeaker``ClientDocument``super``ogg``CONST.VIDEO_FILE_EXTENSIONS``.ogv``ogg``.ogg`
### Applications and User Interface

- Banner images are now centered vertically as intended. (9445)


### The Game Canvas

- Implemented a means to load video textures with PIXI.Assets (9147)
- Removed unwanted deprecation warnings that occurred when undoing a Token's movement. (9352)
- Fixed an issue where it was possible to break the Walls layer by right-clicking while chaining Walls together. (9432)
- The canvas no longer crashes when a source of vision or light is attempted to be dragged outside of the scene bounds. (9459)

`PIXI.Assets`
### Package Development

- Fixed a bug causing migrated World Scenes to get exported to Compendium twice. (9429)
- Defining flags.hotReload without optional paths field no longer causes the server to hang. (9435)

`flags.hotReload`
### Localization and Accessibility

- Corrected Compendium header buttons failing to localize. (9426)
- Found and replaced the missing localization string SETUP.PackageProgressError. (9444)

`SETUP.PackageProgressError`
### Other Changes

- Legacy Compendium links no longer break in fromUuid and instead return undefined as in v10. (9428)
- Fixed an error that would occur when logging out on the Setup screen when routePrefix is set. (9434)

`fromUuid``undefined``routePrefix`