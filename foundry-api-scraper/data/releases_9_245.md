# Release 9.245 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.245

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.245


## Version 9 Stable


##### January 26, 2022


## Foundry Virtual Tabletop - Version 9 Patch 2 Release Notes

Hello Foundry Virtual Tabletop community! We are pleased to release an update for Version 9 Stable Patch 2 (Build 245)! This update focuses on knocking down bugs discovered after the stable release, making minor adjustments to the UI to improve consistency, and introducing a myriad of small fixes to the API and its documentation to make sure that our community developers are having as smooth a time as possible.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss (Follow this handy guide).


## Update Highlights

The vast majority of these changes are non-controversial, and the most notable of them in the update are as follows:

- We improved the appearance of the module management and setup lists, introducing smaller tag icons and improved formatting to accommodate modules with long titles and large numbers of tags.
- We corrected a number of edge-case issues with vision, lighting and canvas rendering, knocking out a few more rare cases where vision would be weird or inaccurate.
- We have resolved a number of API documentation issues, improving quality of information for our community developers.

For a comprehensive list of everything we fixed, see below!


## New Features


### Architecture and Infrastructure

- Updated pixi/graphics-smooth to fix rectangle masks and holes. (6493)

`pixi/graphics-smooth`
### The Game Canvas

- Changed canvas outline to use SmoothGraphics instead of LegacyGraphics to correct an issue where the outline can disappear when zoomed out. (6587)

`SmoothGraphics``LegacyGraphics`
### Interface and Applications

- Holding Ctrl when starting a new wall will no longer chain from a previously completed wall endpoint. (6471)
- Changed the autocomplete attribute for filter inputs in the setup screen to be off, preventing unwanted autofill. (6514)
- Added a toast when a JSON import has finished, alerting users that it was successful. (6527)
- Ensured that icons for the various Create document buttons match the sidebar tab they are associated with. (6532)
- Fixed an issue where token nameplates were not rendered above target indicators. (6544)


## API Improvements


### Documents and Data

- Corrected instances where active effects would fail to apply properly if there was a space between the + and the number being added. (6463)
- Corrected the DefaultTokenConfig object property to be of a type TokenDocument where previously it was not. (6542)
- Corrected a bug where form data would always return null from radio inputs with only single option. (6539)
- Fixed instances where KeyboardManager#hasFocus would miss valid contenteditable attributes, causing it to report a false value when it should not. (6509)

`DefaultTokenConfig``TokenDocument``null``KeyboardManager#hasFocus``contenteditable`
## Documentation Improvements

- Added documentation for missing AnimationData properties. (6365)
- Updated the documentation of AmbientSoundData to be accurate with its current properties. (6368)
- Corrected documentation on the return value of Folder.createDialog so it was consistent with ClientDocumentMixin#createDialog. (6371)
- Updated documentation for AbstractBaseShader#vertexShader so that it no longer states that subclasses must implement the fragmentShader field. (6405)
- Documentation now properly notes that SoundSource#_initializeData returns nothing (void) instead of returning changes. (6521)
- Added notes for various PointSource draw methods which had previously undocumented null returns. (6522)
- Corrected information for PlaceableObject#vision which had wrong types documented. (6524)
- Return type of Combat#getCombatantByToken and Combat#getCombatantByActor is now documented correctly. (6560)
- Fixed the return type of Cards#playDialog to be consistent with the documentation. (6547)

`AnimationData``AmbientSoundData``Folder.createDialog``ClientDocumentMixin#createDialog``AbstractBaseShader#vertexShader``fragmentShader``SoundSource#_initializeData``PointSource``null``PlaceableObject#vision``Combat#getCombatantByToken``Combat#getCombatantByActor``Cards#playDialog`
## Localization Improvements

- Properly localized the html tag to include the lang attribute. (5384)
- Updated labels on the Grid Configuration tool to properly represent the shift-X and shift-Y fields as changing the background offset instead of grid offset. (6460)

`html``lang`
## Bug Fixes


### Documents and Data

- Moving a feature in an actor located inside a compendium no longer duplicates the feature instead of moving it. (6407)
- Right clicking while moving a token with Token Drag Vision Enabled will now properly reset the visible area along with the token. (6507)
- Creating a compendium without a label will no longer render worlds inoperable until restart. (6569)
- Corrected an issue with the FilePicker where if the type is listed as optional it does not provide all file extensions as viable options, resulting in undefined file upload requests being incorrectly rejected. We improved the semantics of available FilePicker types by adding a new any type which is now the default if no type is provided and accepts any supported file extension for upload. (6386)

`FilePicker``type``FilePicker``any`
### The Game Canvas

- Fixed a PIXI related issue where Token movement could reveal FOW on closed areas with active light sources. (4850)
- Corrected an edge case where certain wall configurations could result in the vision Polygons with artifacts due to completing the Vision sweep incorrectly. (6317)
- When undoing a placed object deletion, keepId: true is specified in order to re-create the deleted objects with the same ID that they had previously. (6384)
- Ensured that updating a token's sight with a macro will automatically display the new vision settings on the canvas. (6389)
- Saved fog will no longer override a specified unexplored fog color. (6415)
- Updated the torch lighting effect to be less intense on high frame rate displays. (6430)
- Fixed polygon drawing tool so that it is possible to place more than two segments again. (6465)
- Resetting a light to default settings will now properly reset the Constrained by Walls and Provides Vision properties. (6515)
- Fixed an issue where dark light sources were being rendered at z-index 10 instead of 0. (6530)
- Corrected unwanted behavior where Canvas#_onDragLeftStart checks active layer by exact constructor name. (6562)
- Ensured that MeasuredTemplate is properly redrawn if the type is changed. (6593)

`keepId: true``Canvas#_onDragLeftStart``MeasuredTemplate`
### Dice and Cards

- Fixes an issue where imported card decks would incorrectly import their children cards, which resulted in orphaned cards. (6364)
- Removed the ability to deal cards from a deck embedded in a compendium. (6470)


### Interface and Applications

- Corrected an issue where attempting to schedule an audio fade out on a resource with an unknown or non-numeric duration would result in no audio playing. (5869)
- Fixed a formatting issue that would cause long text on window tabs to overflows the flex container instead of properly wrapping the text. (6375)
- Creating a static representation of an animated token image in the Combat Tracker will no longer fail if the game canvas is not available or is disabled. (6394)
- Adjusted formatting and styles of the module management window to improve the display of modules with multiple tags and long titles. (6422)
- Expanding module descriptions will no longer ignore filters when managing modules. (6427)
- Ensured that dropdown menus and certain dialog boxes would display properly on Firefox with Dark mode enabled. (6461)
- Fixed a minor styling issue that would randomly cause the update notes UI window to be unusually truncated. (6466)
- Ensured that attempting to warn a user that their version of electron is too old will produce the expected warning instead of an error. (6474)
- Corrected an issue where FormDataExtended was not processing tinymce editor instances as dtype string, causing them to return null instead of an empty string if their content was blank. (6477)
- Fixed an issue where some input types can obtain focus via tab input field selection, but would not be treated as focused by the keyboard manager. (6478)
- Fixed CONFIG.fontFamilies to include fonts which are universally loaded into all web browsers. (6516)
- Moved a misplaced arrow icon out of the guns folder in the foundry core icons library. (6580)
- Refactored HTML elements that were not presently within a landmark element to be so. (5383)
- Assigned a proper label to the chat textarea and corrected an invalid property in its html. (5503)

`FormDataExtended``dtype``null``CONFIG.fontFamilies``textarea`