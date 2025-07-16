# Release 12.323 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.323

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.323


## Version 12 Testing


##### May 16, 2024


## Foundry Virtual Tabletop - Version 12 - Testing 4 Release Notes

We're hurtling through the atmosphere toward a stable release for V12! Similar to last week's release, Version 12 Testing 4 focused almost entirely on bug fixes while simultaneously targeting some small and uncontroversial improvements for new and existing features.

WARNING: This Testing update is intended for those dedicated users who wish to test the new features provided in Version 12. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!

As is always the case with releases during the Testing phase, many of the bug fixes this update provides are the direct result of testing from our community. Your direct feedback helps us locate bugs we otherwise would have missed and provides us with much-needed insight into use-cases we might not have planned for. Thank you one and all for your continued assistance finding bugs and suggesting improvements!


## Update Highlights

As this update contains a majority of small changes across almost every part of the software, there aren't a lot of key pieces to highlight, but there are a few small items we can raise attention on!


### It's a Regional Thing

- Tokens Move In: You'll find a couple of new behaviors for Scene Regions that differ slightly from Token Enter and Token Exit, providing subtle but important differences. Token Enter or Exit should be used in cases where you want your behavior to trigger regardless of how a token entered or left the region. Token Move In or Token Move Out should be used in cases where you want the assigned behavior to trigger explicitly as a result of a user dragging, using their arrow keys, or moving their token along a path to get into the region. "Why is this necessary?" You might ask. Do you like infinitely looping teleportation? Because that is how you get infinitely looping teleportation.
- Toggle Behavior... behavior:  Scene Regions now have a new behavior called "Toggle Behavior" which can be used to switch other behaviors on or off based on their triggering event. I tried to find additional ways to fit the word behavior in that sentence so you all reach semantic satiation but I couldn't.


### A Barrage of UI improvements

The dev team rolled through with a barrage of small tweaks to the user interface:


## New Features


### Documents and Data

- For consistency with GM accounts, Assistant GM users now have permission to modify some world-scope Settings (such as the world clock time or certain system-level settings) regardless of whether they have the SETTINGS_MODIFY permission. (10912)
- Scene Regions now have a new "Toggle Behavior" behavior that can be used to toggle other behaviors on or off. (10752)

`SETTINGS_MODIFY`
### Applications and User Interface

- Clicking an empty space on the Macro hotbar to create a new Macro now provides its initial form as a temporary document. A permanent Macro document is now only created if the user submits that form with valid data. (8613)
- Dragging a Macro from one hotbar space to another occupied space now swaps their positions rather than overwriting. (9265)
- User colors can now be accessed via --user-color-* CSS variables to allow a more resilient way to reference the chosen color of a specific user. (9771)
- The Support & Issues option on the Game Settings Sidebar now includes a button to generate a full report, which includes additional support information (such as a list of all active modules and their versions). (6359)
- Users who have configured the OS or Browser level option to 'prefer reduced transparency' now experience the Foundry VTT UI transparency-free. (10405)
- The Scene Region Legend now displays finite elevation ranges for Regions, with different cases for each potential type of defined elevation. (10819)
- Double-clicking a Behavior in the Region Configuration now opens the Edit Behavior window. (10865)
- The notification for deleted Placeable Objects is no longer displayed unless multiple objects are deleted at once by pressing the Delete key, or recreated deleted by CTRL+Z (10890)
- <multi-select> and <document-tags> elements no longer render pills inconsistently. (10921)

`--user-color-*``<multi-select>``<document-tags>`
### The Game Canvas

- The Dynamic Token Engine now attempts to render a 'best fit' circular token ring even when provided with an asset that has non-square dimensions. (10787)
- Non-GM accounts are no longer able to create, modify, or delete many canvas placeables (including Drawings and Measured Templates) when the game is paused. (10204)
- Hover-fading the background image sprite is now disabled by default. (10940)


### Localization and Accessibility

- Uploading files with an invalid file extension now provides a more verbose error message which can be localized. (8587)
- Inner data models may now define LOCALIZATION_PREFIXES that are automatically localized relative to their parent schema. (10931)

`LOCALIZATION_PREFIXES`
## API Improvements


### Documents and Data

- The createDialog method for Document Classes now provides a types option. (10870)

`createDialog``types`
### Applications and User Interface

- DialogV2 instances no longer include a 'dialog-content' div if content is undefined. (10894)

`content`
### The Game Canvas

- The Token HUD menu for available status effects (conditions) can now be managed based on the type of Actor the token represents. Allowing for cases where different actor types may have different kinds of applicable Conditions. (10233)
- The darkness uniform in AdaptiveLightingShader has been removed as it is no longer necessary. Darkness sources are now rendered by CanvasDarknessEffects. (10902)
- Removed previous implementation remnants VisionMode#lighting#ignoreDarkness, with VisionMode#lighting#darkness added in its place as a means to control the visibility of the darkness lighting layer. (10903)
- PointVisionSource.blindedColorRGB has been removed in favor of the existing CONFIG.Canvas.visionModes.blindness.vision.defaults.color. (10905)
- Token and Combat updates now support passing a worldTime: {delta: number} option which can be used to automatically advance the world time as a side effect of the update, in the same way that combat round or turn updates may. (10924)
- The new PlaceableObject#getSnappedPosition method provides the snapped position of a provided placeable object. This method does not support Regions and Walls. (10925)
- TOKEN_MOVE_IN and TOKEN_MOVE_OUT are new Region events which differ from the existing TOKEN_ENTER and TOKEN_EXIT events in that they provide access to the forced boolean property. (10923)

`darkness``AdaptiveLightingShader``CanvasDarknessEffects``VisionMode#lighting#ignoreDarkness``VisionMode#lighting#darkness``PointVisionSource.blindedColorRGB``CONFIG.Canvas.visionModes.blindness.vision.defaults.color``worldTime: {delta: number}``PlaceableObject#getSnappedPosition``TOKEN_MOVE_IN``TOKEN_MOVE_OUT``TOKEN_ENTER``TOKEN_EXIT``forced`
### Dice and Cards

- The private fields DiceTerm##number and DiceTerm##faces are now protected fields instead. (10935)
- Added the allowInteractive parameter to Roll#evaluate so that you can control whether interactive roll methods can be used. (10941)

`DiceTerm##number``DiceTerm##faces``allowInteractive``Roll#evaluate`
### Other Changes

- RegionShape, RegionPolygonTree, RegionGeometry, and RegionMesh have moved into the foundry.canvas.regions namespace. (10918)

`RegionShape``RegionPolygonTree``RegionGeometry``RegionMesh``foundry.canvas.regions`
## Bug Fixes


### Architecture and Infrastructure

- Support & Issues now uses a header-based request for the user agent in order to provide more accurate details for the browser and OS. (7750)
- The Tour class no longer calls _postStep if there was no prior step to handle. (10457)
- The {{formField}} helper now propagates and localizes labelAttr when generating select choices from Datafields. (10908)

`Tour``_postStep``{{formField}}``labelAttr``Datafields`
### Documents and Data

- Creating a macro by dragging a Rollable Table to the Macro hotbar no longer includes arguments in the Macro script which are already assumed to be true by default. (10261)
- Resolved an issue which caused @Embed to fail to render properly when used within a Chat Message. (10338)
- Importing a scene from a compendium now clears the navigation: true parameter. (10610)
- Performing an erroneous update to an EmbeddedCollectionField no longer breaks references to the source of that field. (10648)
- Corrected a visual bug which would display an identically named non-existent entry in a compendium when creating a Folder. (10907)
- Resolved a bug that caused Combats to always become unlinked from scenes when created. (10913)
- BaseActor#_preCreate no longer attempts to configure a prototypeToken#img. (10916)

`@Embed``navigation: true``EmbeddedCollectionField``BaseActor#_preCreate``prototypeToken#img`
### Applications and User Interface

- ProseMirror editors in Application V2 instances inside a World now use the existing dark mode styles when applicable. (10904)
- Resolved an issue which caused Unlinked Combats to sometimes render without all of their expected data. (10157)
- Corrected a bug with the initialization of a sound in a ChatMessage which used an incorrect default value constant. (10255)
- Corrected an issue which caused the Configure Default Sheets form to sometimes revert the default sheet choice. (10609)
- The Rollable Table configuration window now retains the scroll position of its table body between renders. (10666)
- Non-GM accounts are no longer able to perform undo operations (CTRL+Z) while the game is paused. (10777)
- <textarea> elements in Application V2 instances now only resize vertically rather than both vertically and horizontally. (10884)
- The FilePicker application has had appearance of its hint text restored to its Application V1 appearance when not invoked in its Application V2 form. (10891)
- AbstractFormInputElement subclasses now handle their editable state in a way that disallows modification of the content if a field is not editable, preventing cases where a user without ownership permissions could remove currently selected entries from a multi-select. (10900)
- Fixed a case which could sometimes cause arrow-key movement on Scenes with hexagonal grids to take unexpected paths. (10919)
- Users with the SETTINGS_MODIFY permission now also have the permission to trigger reloads for other connected clients when changing a setting that requires a reload. (10049)
- Users with the SETTINGS_MODIFY permission can now edit default Combat Tracker settings, such as "Skip defeated". (10663)
- Corrected an issue where pressing CTRL-S while trying to use a rich text editor (such as a Journal text page) would rarely cause the browser to open a save dialog instead of saving changes. (9882)
- Document#render now passes a cloned context to each application that it renders to avoid cases where application render behaviors could contaminate a shared context. (10897)
- The ProseMirror editor no longer loses focus when a user clicks into one of its dropdown menus. (10899)
- Fixed an issue that was preventing users from interacting with Tokens while a Token was being moved along a Ruler path. (10937)

`<textarea>``FilePicker``AbstractFormInputElement``editable``SETTINGS_MODIFY``SETTINGS_MODIFY``Document#render``ProseMirror`
### The Game Canvas

- Hovering over a Map Note now reports the mouse state correctly as hovered to the mouse interaction manager. (9919)
- Resolved an issue which caused periodic stuttering in the animation of Token movement on gridless scenes. (10790)
- Resolved a bug which caused the Blindness vision mode to render as a sharp black circle. (10868)
- Corrected a bug which required a refresh for changing wall direction to have a visible effect. (10909)
- Resolved an issue with the Darkvision vision mode, which could cause the map to display in grayscale even in cases where global illumination was enabled at a scene level. (10910)
- Fixed an issue where ambience filter effects were not applied to the background color of the Scene when no background image was set. (10927)
- Corrected a bug which caused changes made to gridTemplates to fail with an error in cases where no scene was rendered at the time the change was made. (10915)
- Linked Scene Regions that both have the Teleport Token Behavior directed to one another as destinations no longer infinitely loop. (10887)
- A Drawing at the same elevation as a Tile is now rendered above it instead of below. (10939)
- Monochromatic and Light Amplification vision modes now render correctly in areas illuminated by light sources. (10911)

`gridTemplates`
### Package Development

- Corrected a bug which caused defined packFolders to be recreated as empty after their containing folder had been deleted. (9902)

`packFolders`
## Documentation Improvements


### Other Changes

- Corrected an issue which prevented TypeDoc generation from functioning as expected. (10914)

