# Release 10.278 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.278

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.278


## Version 10 Testing


##### August 16, 2022


## Foundry Virtual Tabletop - Version 10 Testing 4 Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

Now that the team is back at full capacity after GenCon, we have an exciting new release for Version 10! This Testing channel release focused on squashing bugs, improving the user experience, and enhancing the API based on feedback from the developer community.

Do you want to contribute feedback during the testing phase, but are nervous you might risk your weekly game in doing so? Our friends at Encounter Library have published a very helpful video that will guide you through the process of setting up a testing environment. For those wishing to just check if the systems and modules they use have been updated with V10 compatibility, we've published our usual package compatibility spreadsheet, and community developer Arcanist has published a new Module Compatibility Checker that will let you check compatibility from within any World.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights

With V10's stable release approaching fast, this Testing release is focused on dealing with bugs and polishing up the user experience as much as possible so we can have a smooth launch. As a result, this release doesn't include a lot of flashy features but it does continue to sand off rough edges for developers while still providing some new quality of life features for everyone.


#### User Experience

This update includes a number of improvements to the user experience like making the Configure Settings UI match the design and functionality of the Package Management window with categories to the left and a filter at the top, ensuring that confirmation windows are always brought to the forefront, making the journal sidebar collapsible, more tooltips around the application, and adding support for a user list or user colored pips when collaboratively editing a Journal Entry Page.


#### Enhancements to the API

There have been a number of improvements to the API including adding the ability to clone any data model, exposing more ProseMirror functions to more easily manipulate editor state, build a data model from another data model, and the clean up of a lot of no longer needed code.


#### Bug Hunt

As per usual, the team has been hard at work tracking down bugs and taking care of 40 issues that have been raised by our community in this update alone.


## New Features


### Architecture and Infrastructure

- Updated a number of software dependencies including Electron which has been updated to version 20.0.2. (7816)
- The PIXI framework has been updated to version 6.5.1. (7746)
- Updated Font Awesome to 6.1.2. (7771)


### Documents and Data

- Added the ability to toggle a secret block as revealed or hidden by its owner. (1645)
- The Jump to Pin functionality now also works for Journal Entry Pages. (7732)
- Card documents no longer receive a back image by default and the field is set to undefined instead. (7830)

`undefined`
### Applications and User Interface

- The Configure Settings UI now matches the design and functionality of the Configure Keybindings and Package Management windows. (6353)
- Added a link to the Releases page on the update dialogue when updating the core software. (6473)
- The search filter in Sidebar Directory instances can now find folders in addition to documents. (7282)
- Document subtypes can now have their own content link icons via the CONFIG global and tooltips indicate what type of content a link points to. (7489)
- Package updates should no longer suggest a user upgrade to a non-stable Version of Foundry (7583)
- ProseMirror can now display usernames or user color pips to denote who else is collaborating on an active editor instance. (7639)
- ImagePopouts can now include a caption which can be included via the API or forwarded on from the JournalEntryImageSheet. (7640)
- The journal entry sidebar can now be collapsed with minimal page buttons on the side for navigation. (7647)
- Updated Dialog.confirm to always bring the Dialog window to the forefront so it doesn't get lost behind open windows. (7681)
- When pulling with a ping (Shift + long press), players will be automatically brought to the pinger's zoom level. (7763)
- Added a user permission for deleting tokens. (7765)
- Added tooltips to the Module Management window and Setup page to show the package's tags. (7774)
- Made the journal editor's edit button sticky so it can be accessed no matter the scroll depth. (7775)
- Journal Entry Pages can now be used as Scene Notes. (7790)
- The Combat Tracker now uses tooltips for its various control buttons. (7802)
- When launching a world that requires migration, the user is now required to accept it and begin the migration or cancel launching the world. (7803)

`CONFIG``ImagePopout``JournalEntryImageSheet``Dialog.confirm`
### The Game Canvas

- Added support for depth mapping that allows light sources and vision sources to render according to their elevation. (7513)
- Token configuration now features a real-time preview, allowing you to see how changes to the token (including light and vision) will appear on the Scene. (7800)


### Dice and Cards

- Deferred inline dice rolls can now have a title which is used instead of the formula. For example: [[/r 3d8 # Some Flavor Text]]{Some Button Title}. (7667)

`[[/r 3d8 # Some Flavor Text]]{Some Button Title}`
### Localization and Accessibility

- Unique labels have been added to all elements with the Navigation role. (5504)
- Added localization support to the Create New World window. (7805)
- Improved localization support in the Tile Configuration window. (7806)


## API Improvements


### Documents and Data

- Made more ProseMirror functions publicly accessible, which should empower module developers to more easily manipulate editor state. (7776)
- Added a v10 shim to TokenData#vision. (7784)
- DataModels can now be constructed by providing a different DataModel as the initial source data. (7799)
- Moved the base functionality of Document#clone to DataModel#clone so that all models may be cloned, not only documents. (7804)

`TokenData#vision``Document#clone``DataModel#clone`
### Applications and User Interface

- InteractionLayer#activate now supports passing a specific Scene Controls tool name as part of the workflow to activate a specific tool in a different group. (7720)
- Removed the explicit block display style assigned to window application content as part of the Application#maximize workflow (7821)

`InteractionLayer#activate``block``Application#maximize`
### The Game Canvas

- Improved API extension consistency by adding a centralized _getPolygon and _getPolygonConfig method for PointSource and its subclasses. (7605)

`_getPolygon``_getPolygonConfig``PointSource`
### Other Changes

- Improved the handling of checkboxes in FormDataExtended by allowing support for an explicit value assigned on the checkbox which is parsed as either that value or null depending on the checked state of the box. This applies to both single checkboxes as well as arrays of checkboxes in a radio input. (7819)

`FormDataExtended`
## Bug Fixes


### Architecture and Infrastructure

- The Core software update install process now halts if the initial download fails. (7748)
- The EULA page will once again appear correctly on a clean installation. (7770)


### Documents and Data

- Fixed a bug where shutting down a world with a Journal Entry Page open would cause the ProseMirrorAuthority to throw an error. (7542)
- Images should now be able to be properly aligned in the ProseMirror editor so that text will flow around them. (7718)
- Deletion keys are now applied to the data model created by the clone method, allowing the caller to delete certain attributes from the clone. (7798)
- Fixed an issue where including an incorrectly formatted content link could cause the Journal Entry Page to not render. (7810)
- When editing element attributes via the source HTML editor in ProseMirror, they will now be correctly saved. (7815)
- Creating a Page inside a Journal Entry in an unlocked compendium will no longer throw an error. (7823)

`ProseMirrorAuthority`
### Applications and User Interface

- Fixed a bug where scaling of square tokens on hex grids was not consistent between orientations. (7477)
- The network connectivity test will now use a proxyport if one is configured. (7532)
- Scene Notes should now update properly when the parent Journal Entry is changed. (7574)
- Users now have the ability to add OS-provided fonts in the font configuration UI. (7610)
- Added a fallback preview icon for non-media files in the file picker. (7620)
- All select elements now inherit their font size. (7745)
- Fixed a reference to GitLab in the Support Details screen. (7749)
- Bulk playlist imports should work as expected again. (7756)
- Drag/dropping items to re-organize them on an actor no longer throws an error. (7758)
- Fixed an issue where a font-family was not applied to the given font in the ProseMirror menu drop-down. (7759)
- Clicking a page heading no longer re-renders the entire journal sheet in single-page mode. (7779)
- Improved sidebar scroll synchronisation with journal content view in multi-page mode with long table of contents entries. (7782)
- Preloading a PlaylistSound will no longer throw an error. (7786)
- Improved the standardization of sidebar tab CSS classes and IDs to ensure that every sidebar tab has a different ID while popped out but a unifying class for styling both the primary tab and its popped out version. (7788)
- Disable an active tooltip element when activating a context menu to prevent situations where the tooltip interferes with the context menu behavior. (7811)
- Fixed a bug where minimising and maximising a Journal Entry Page editor would make the editor content disappear. (7824)

`PlaylistSound`
### The Game Canvas

- Fixed a bug where light or vision would be occluded for tokens on a roof with a lower elevation. (7553)
- Fixed a bug where lights on a roof tile with an enabled occlusion mode would unocclude lights on the whole tile instead of just the occluded area. (7554)
- Fixed a bug where the global light source was recreated but never destroyed in initializeLightSources. (7684)
- Relaxed the requirement that drawing polygon points must be integers in order to preserve detail when polygons are rescaled. (7704)
- Renamed Actor#getTokenData to TokenDocument#getTokenData with a deprecation warning to reflect the fact that the method now returns a TokenDocument rather than just data. (7766)
- Fixed an issue where changing token dimensions and texture.src in a single update would throw an unhandled exception. (7769)

`initializeLightSources``Actor#getTokenData``TokenDocument#getTokenData``TokenDocument``texture.src`
### Package Development

- Improved performance in the Setup screen "Install Package" app by making fewer POST requests to getPackages. (7563)
- Fixed an issue where installing a package that fails validation would get stuck at 100% progress. (7680)
- The Package Dependencies Auto Install button is now disabled when no dependencies can be automatically installed. (7710)
- Fixed an issue where referencing Foundry VTT bundled scripts from module manifests would fail. (7757)
- Removed the timeout applied to initial World setup to accommodate worlds which experience a lengthy migration process. (7795)
- World compendium packs no longer require the system field. (7829)

`getPackages``system`
### Dice and Cards

- Fixed a bug where changing a card's name would not persist its update to the database. (7822)


### Other Changes

- Fixed an issue where yaml files could not be overwritten. (7739)
- Deprecated use of .data in ItemSheet._onEditImage. (7808)
- foundry.utils.getProperty no longer throws an error if the target object is null (7813)

`yaml``.data``ItemSheet._onEditImage``foundry.utils.getProperty``null`
## Documentation Improvements


### The Game Canvas

- Removed the unused drawSight and _drawRenderTextureGraphics methods. (7789)

`drawSight``_drawRenderTextureGraphics`
### Other Changes

- Fixed an incorrect typedef for FontFaceDescriptors. (7772)
- The DialogData typedef has been corrected to denote optional parameters. (7773)

`FontFaceDescriptors``DialogData`