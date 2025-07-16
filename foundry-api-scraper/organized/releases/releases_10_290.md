# Release 10.290 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.290

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.290


## Version 10 Stable


##### November 10, 2022


## Foundry Virtual Tabletop - Version 10 Patch 5 Release Notes

This release is focused on continuing to harden our APIs, providing new options for developers, and squashing bugs in different parts of the software to make for an even more stable Version 10.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Applications and User Interface

- Updated Font Awesome to 6.2.0. (8343)
- A UI notification is now raised when an attempted card pass operation is not allowed. (8377)
- Implemented a client-side setting which allows users to suppress animations or effects which are potential triggers for photosensitive users. Package developers can use game.settings.get("core", "photosensitiveMode") to get the setting's value. (8466)

`game.settings.get("core", "photosensitiveMode")`
### The Game Canvas

- Hex grids should no longer have an outsized impact on scene performance. (8356)


## API Improvements


### The Game Canvas

- Added an overridable private method (_initializeVisionMode) to initialize Vision Modes into Vision Sources. (8399)
- Added a Drawing#_getTextStyle protected method which can be overridden by subclasses to fine-tune the properties of the TextStyle object used for the DrawingDocument. (8502)

`_initializeVisionMode``Drawing#_getTextStyle``TextStyle``DrawingDocument`
### Package Development

- The dependency.name -> dependency.id warning should no longer be emitted if relationships is declared. (8380)

`dependency.name``dependency.id``relationships`
## Bug Fixes


### Architecture and Infrastructure

- GMs should once again be able to open Journal Pages with limited permissions from Scene Notes. (8420)


### Documents and Data

- The Reveal button is no longer shown in locked compendia as their contents cannot be changed. (8340)
- Showing inline journal images to players should no longer result in a blank window due to CORS errors in some circumstances. (8359)
- DataModel#migrateData now correctly calls for SystemDataFields. (8366)
- It is now possible to retrieve invalid embedded Documents, even if their validation errors are within a System Data Model. (8433)
- It is no longer possible to create a Compendium with the same name as an existing one, even if they are different types. (8437)
- System Data Models now prevent updates if they are marked with a special _enableV10Validation static field. (8486)
- Instantiating a DataModel with invalid system data in a non-strict manner should no longer result in a validation error being thrown. (8496)

`DataModel#migrateData``SystemDataField``_enableV10Validation`
### Applications and User Interface

- The software update dialog should no longer render with a double scrollbar after an update. (7777)
- Fixed a bug where a previous selection would become active again after being released. (8015)
- Video elements should now correctly display in update notes shown in-app. (8027)
- Color intensity is now taken into consideration when using the Natural Light coloration technique allowing for more nuanced lighting. (8152)
- Fixed a bug where a PDF Journal Entry Page would not expand lengthways to fill a resized window. (8174)
- Wide form elements inside the settings dialog should no longer cause the entire tab to wrap onto the line below the sidebar. (8175)
- adding or removing a custom font now correctly requires a reload to take effect. (8188)
- Dialogs should no longer close unexpectedly when pressing Enter in a textarea input field. (8199)
- The Players window now aligns to the bottom of the hotbar. (8240)
- Switching a Journal Entry Page to a custom sheet should now update in the Journal View as expected. (8299)
- The Journal selection dropdown in Notes should now only display Journal Entries the user has ownership over. (8335)
- The Card Hand and Pile applications now include save buttons. (8378)
- Flags added using the renderTokenConfig are now correctly saved. (8393)
- Creating a Drawing by going from a starting point to the top-left should no longer fail. (8402)
- When controlling only Tokens without vision overhead Tiles should fade. When controlling more than one Token with and without vision the Tokens without vision are given radial visibility under overhead Tiles. (8411)
- Token#config and AmbientLight#config should no longer erase flags that aren't in the form when _onChangeInput is called. (8414)
- The Token HUD should no longer close if an input loses focus. (8422)
- Removed an errant apostrophe in the Light configuration sheet. (8441)
- It is no longer possible to delete a Measured Template while it is being dragged. (8444)
- It is no longer possible to re-order the Pages of a Journal Entry inside a locked compendium. (8446)
- The Show Players dialog's Show To checkbox for all players now changes the Ownership Configuration in the "All Players" section only if "All Players" is checked. (8450)
- Hardened instances of Table of Contents handling to be resilient to a missing heading element. (8452)
- Opening the AV configuration in an insecure context should no longer throw an error. (8460)
- The Measured Template configuration form now uses the numberInput helper for numeric fields. (8487)

`textarea``renderTokenConfig``Token#config``AmbientLight#config``_onChangeInput``numberInput`
### The Game Canvas

- Attempting to draw a tile at the very edge of a scene should no longer result in it being offset by a grid space. (7654)
- The author field in drawings should once again display correctly. (7855)
- Overhead tiles now appear correctly for GM users, according to tile foreground menu status. (7919)
- Temporary Documents for Placeable Objects created using the PlaceableObject#clone method should maintain a reference to the temporary object instead of to the original object. (8259)
- Stacking roof tiles should no longer result in a visual bug where the tiles overlay each other. (8302)
- The PolygonMesher should now properly scale vertices if the normalize option is false. (8334)
- Fixed a bug where controlled Tokens could be moved with arrow keys inside the Grid Configuration Tool. (8346)
- Token._drawOverlay now awaits Token._drawEffect. (8353)
- A Token's border position should now be correctly updated even if the border isn't drawn. (8364)
- Changing the Scene grid size should once again warn users when the dimensions are changing. (8367)
- Playing a Tile in Firefox that does not have loop set should now start as expected. (8369)
- Hidden Measured Templates no longer show their size labels to players. (8371)
- canvas.notes._onDropData should now use coordinates from the drop data if it is provided rather than the event for Note creation. (8388)
- Fixed a bug where changing a Door's direction from "both" to "left/right" would make the door control icon disappear. (8389)
- The BasePlaceableHud's position is now set relative to the on-canvas object rather than its source coordinates. (8392)
- Extremely large scenes and lights should no longer exhibit oddness with lights and walls in certain circumstances. (8394)
- The "Blind" Vision Mode should now be applied properly by the "Blinded" Status Effect. (8398)
- Resetting the Token configuration preview should no longer result in erasing the Token's flags. (8407)
- Lights below the minimum elevation should now be occluded by roofs at the minimum elevation. (8408)
- Creating a Token from an Actor in a Compendium pack should now correctly use the Default Token Settings. (8410)
- Blinded tokens should no longer see illuminated areas when another token is controlled at the same time that is not blinded. (8428)
- Tokens with certain Detection Modes inside the scene should no longer perceive tokens inside the padding region. (8431)
- Basic Vision in darkness should now be properly affected by shadows and light source settings. (8434)
- Updating both position and texture of a token in the same update no longer causes the token to move out-of-sync with any interface drawings (8445)
- Increasing the intensity of the RollingMass effect should no longer incorrectly decrease the intensity of the effect. (8468)
- The output of VisibilityFilter should now be premultiplied. (8473)
- Fixed a memory leak in the HiddenCanvasGroup that would occur when masks were removed without being destroyed. (8480)
- Adding items that are associated with an Effect should no longer cause a visual glitch. (8489)

`author``PlaceableObject#clone``PolygonMesher``normalize``Token._drawOverlay``Token._drawEffect``loop``canvas.notes._onDropData``BasePlaceableHud``RollingMass``VisibilityFilter``HiddenCanvasGroup`
### Package Development

- Ensured that pre-v10 module manifests that specify both system and dependencies end up with only one System relationship. (8363)

`system``dependencies`
### Dice and Cards

- Roll results with more than 2 characters should now have better formatting. (8312)
- Removed an unnecessary recall warning because Cards are automatically recalled before deletion. (8379)
- Card stacks should once again be removable from Compendia.(8390)
- Moving a Card from one deck to another should now make a copy of the Card. (8436)
- Sorting cards by drag & drop in custom sheets should no longer result in errors. (8465)
- Inline Roll data stored in Chat Messages should now always contain the Roll formula. (8492)


### Localization and Accessibility

- File names with special characters should display correctly because file uploads now use UTF-8 encoding. (8421)


### Other Changes

- SourcePolygon.testCollision should now throw an error if no type is passed to it. (8257)
- HTML sanitisation should no longer forbid an image tag with an alt attribute. (8374)
- Using the CTRL + U shortcut inside a ProseMirror should now only trigger underline styles. (8396)
- Dropping a content link onto a ProseMirror editor in Firefox should no longer cause the cursor to disappear. (8397)
- An issue which caused rich text pastes to fail to render in ProseMirror has been resolved. (8429)

`SourcePolygon.testCollision``alt`
## Documentation Improvements


### Other Changes

- CanvasVisibility#testVisibility should now always return a boolean value. (8202)
- The DocumentSheet.getData() method has been corrected to correctly declare its parameter options as any rather than {}. (8352)
- Token#getSightOrigin now correctly recommends using Token#getMovementAdjustedPoint in the deprecation message. (8373)
- The descriptions for MACRO_TYPES should now display correctly. (8381)
- The sightRefresh hook event is now listed in the API docs. (8432)

`CanvasVisibility#testVisibility``DocumentSheet.getData()``options``any``{}``Token#getSightOrigin``Token#getMovementAdjustedPoint``MACRO_TYPES``sightRefresh`