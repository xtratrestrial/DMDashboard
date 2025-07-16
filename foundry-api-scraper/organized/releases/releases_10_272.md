# Release 10.272 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.272

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.272


## Version 10 Development


##### June 30, 2022


## Foundry Virtual Tabletop - Version  Release Notes

WARNING: Be certain to back up any critical user data before installing this update.

We're proud to share the second release in the V10 Development cycle! This release is the culmination of our close work with the developer community to squash bugs, refine our API, and polish the many new features coming in V10. We look forward to continuing to collaborate with the community to determine whether our next release will be a continuation of the Development cycle or the introduction of our Testing phase which will close out the opportunity for breaking API changes for V10. As a result, if your module or game system may be impacted by changes made in V10 please be sure to test this release so we can still make changes that may help your work.

As we bring the API development phase to a close and move into the testing phase, we would like to STRONGLY ENCOURAGE our community developers to test and verify the functionality of their modules and begin updating them to work with V10. While we cannot promise we will incorporate any API requests after the closing of the API Development phase for this version, if you do have any urgent requirements to bring your module up to compatibility with V10, this is your last chance.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights

This update introduces a wealth of refinements and enhancements across a number of Foundry's features and API that will ensure a better experience working with the updated Journal V2 system, the brand new Vision Modes, and canvas changes to further boost performance.


#### Journal Improvements

The journal system continues to see improvements with new page types for PDFs and Videos as well as the addition of automatic base64 image extraction to prevent database bloating and improve performance. Permissions for JournalEntryPages have also been improved to support all players, include icons to show who has ownership of that page, and are backed by a markdown document which is now edited and persisted to the database.

`JournalEntryPage`
#### Vision Modes

There has also been a lot of iteration on the brand new Vision Modes system to provide better support for the vision rules of the hundreds of systems Foundry supports. The core vision modes have been renamed to be more system agnostic and new methods have been added to support custom visibility testing, activation, and deactivation as well as provide better control over how light sources are constructed.


#### Canvas Enhancements

The canvas has seen a ton of improvements ranging from refinements of the Clockwise Sweep alogrithm to be more efficient and accurate to simplifying the process of providing custom ruler implementations and even a number of hex grid improvements that allow for better pathing and more accurate positioning.


#### API Closure: Journals V2 and Vision Modes

This update works to close the "API Development" phase and accomplishes that by implementing near-stable implementations of Journal V2 and Vision Modes - two of our most significant V10 features. There are big new features for both Vision Modes - like custom perception testing for vision modes, invisibility, and blindness - as well as for Journal V2 with new page types including PDF, Video, Markdown, and improvements to the ProseMirror editor. From this point onwards our focus shifts towards refining the UI/UX of these new features while keeping the underlying API stable.


## Breaking Changes


### Documents and Data

- The convention used by all DocumentSheet#id attributes has been standardized and now uses a combination of the class name and the Document UUID being displayed. (5652)

`DocumentSheet#id`
### The Game Canvas

- In favour of the new PlaceableObjects inside the interface group, ObjectHUD and SynchronizedTransform have been deprecated and should no longer be used. Additionally, ObjectHUD#createScrollingText has been refactored and moved to CanvasInterfaceGroup#createScrollingText. (7293)
- The approach used for Token animation has been generalized and now supports animating all of the visual attributes of the TokenMesh. (7281)
- A new Color class has been introduced as a drop-in replacement for a hex color (number) which adds many helpful methods and properties for color manipulation and transformation. As a result, a number of helper methods have been deprecated. (7362)
- HexagonalGrid has received a number of changes to improve typing and method signatures for hex grid conversion methods. (7384)

`PlaceableObjects``ObjectHUD``SynchronizedTransform``ObjectHUD#createScrollingText``CanvasInterfaceGroup#createScrollingText``TokenMesh``HexagonalGrid`
## New Features


### Documents and Data

- The ProseMirror editor now supports inserting and embedding images with automatic support for base64 extraction. (6832)
- JournalEntryPages are now backed by a markdown document which is edited and persisted to the database. (6312)
- Journals now support a PDF JournalEntryPage type, which can be used to display a linked PDF document. (7295)
- Journals now support a Video JournalEntryPage type, which supports displaying a linked video file with support for YouTube embeds. (7296)
- It is now possible to apply an ownership level for a JournalEntryPage to all players. (7378)
- The Journal interface now displays icons next to JournalEntryPages to indicate ownership. (7379)

`JournalEntryPage``JournalEntryPage``JournalEntryPage``JournalEntryPage``JournalEntryPage`
### Applications and User Interface

- The new ProseMirror editor for Journals will now save content while editing and when the editor is destroyed. (6680)
- Journal entries and Journal Entry Pages can now be shown to all players or just specific ones. (2842)
- Sections within a Journal Entry can now be linked specifically, allowing users to share a link to a journal entry or page which will open automatically at the position linked. (4019)
- Canvas interactables such as ControlIcon, Tiles, and wall endpoints now set buttonMode = true, resulting in the mouse cursor changing to a pointer when hovering over those elements. (7303)
- Users of the ProseMirror editor for Journal Entries and Journal Pages can now edit the raw source HTML for those documents. (7284)
- The Journal Entry Sheet sidebar now provides a list of headers within a JournalEntryPage when the page is in that view. (7285)
- Dynamic document links should no longer have an additional whitespace character prepended between the text and icon. (7376)
- Toggling pause no longer has significant performance implications when used on complex maps and/or low-end computers. (6675)
- Clicking the bullseye icon next to a combatant in the Combat Tracker now triggers a canvas ping indicating that combatant. (7241)

`ControlIcon``Tiles``buttonMode = true``JournalEntryPage`
### The Game Canvas

- Tokens affected by the "blind" and "invisible" special Status Effects now change the way that their visibility is tested with respect to other tokens. (6710)
- The seldom-used "Radioactive" default status effect icon has been replaced with an "Invisible" status effect and icon. (7399)
- Allow for a Token visibility mode for "stealthed" creatures which supports conditional visibility of the token based on actor ownership or other factors while being hidden from other players. (2547)
- The approach used for token reverse-masking in the interface layer has been refined to more specifically target only the Grid Layer. Token borders are now rendered in the Grid Layer so that they are masked. (7292)
- Core Vision Modes have been re-labeled and renamed to be more system-agnostic to reduce cases where users may assume the provided vision mode functions identical to a particular ruleset. System developers are encouraged to use these Vision Modes as a basis for implementing relevant vision options for their game system. (7298)
- An unnecessary rounding rule for the amount of blur applied to light sources and shadows has been removed, resulting in a smoother experience when zooming. (7329) (7189)


## API Improvements


### Architecture and Infrastructure

- The performance of Document flag operations has been improved. The set of available flag scopes is now cached and module scopes have been restricted to active modules instead of all modules. (7111)
- The userConnected hook has been added, and reports when other Users either join or leave a game session. (7250)
- The foundry.utils.randomID method has been improved and now generates strings with mixed case instead of only lowercase IDs. (7317)
- Array#fromRange has been improved and now supports defining a minimum value for the resulting array. (6925)
- game.settings.set now allows passing options which will be propogated through (for world-scope settings) and passed to callback functions which handle those setting changes. (7315)
- A number of package dependencies have been updated to their latest stable versions. (7400)

`userConnected``foundry.utils.randomID``Array#fromRange``game.settings.set`
### Documents and Data

- CardsConfig#_sortStandard has been moved to instead be part of CardsConfig#options which can be passed and modified at sheet render time. (7391)
- CONFIG.specialStatusEffectshas been implemented, to be used for special status effect flags which cause some downstream integration, such as defeated, invisible, and blind. (7398)

`CardsConfig#_sortStandard``CardsConfig#options``CONFIG.specialStatusEffects`
### The Game Canvas

- VisionMode now provides users with the ability to configure custom visibility testing, activation, and deactivation methods. (7287)
- VisionMode now supports assigning lighting levels which modify the construction of light sources. (7288)
- PlaceableObject#isPreview has been added, providing an indicator for whether a placeable object is a preview or not. (7340)
- The tearDownEffectsCanvasGroup hook has been added, firing as part of the EffectsCanvasGroup#tearDown workflow. (7357)
- The Ruler#measure method has been refactored, separating its functionality out into component helper functions to reduce the monolithic nature of the method and make it easier to modify. (7198)
- Management of canvas color spaces received some improvements, centralizing computations and data access methods into the CanvasColorManager CONFIG class which is linked to Canvas to provide canvas color information. (7210)
- Clockwise Sweep now caches _vertices and _wallKeys in its Wall class. (6385)
- Clockwise Sweep has been improved and now drops edges which are fully outside of a boundary shape. (7257)
- Clockwise Sweep has been refactored to move ray construction out of _executeSweep, avoiding unncessary processing for Rays which are not required. (7261)
- Clockwise Sweep now assigns polygon points directly from the result of collisions instead of deferring that until a later operation. (7262)
- Clockwise Sweep now uses a PIXI.Polygon subclass for a LimitedAnglePolygon, removing some specialized logic and moving it to a custom boundary shape. (7217)
- The test conditions inside ClockwiseSweepPolygon#_determineSweepResult have been rearranged for some small gains in efficiency. (7353)
- PointSourcePolygon.testCollision has been implemented as a generalized method which replaces ClockwiseSweepPolygon.getRayCollisions. (7351)
- The approach to masking the padding region has been refactored and now masks the explored region by the scene rectangle when tokens are not inside the buffer region, the clockwise sweep algorithm boundaries are now chosen accordingly. (7260)
- Token#getSightOrigin has been refactored and its functionality has been generalized into a new Token#getMovementAdjustedPoint which is used consistently for both vision polygon computation as well as movement collision testing. (7218)
- Limited angle vision sources have been improved and now always include a circular radius around a token. (7219)
- The Circle to Polygon approximation has been improved by refining the approach used for determining optimal density. (7396)
- Previews of placeable objects now use a clone for the preview rather than using a reference to the original object. (7245)
- The CanvasVisibility#initialized attribute can now be accessed using the new public getter CanvasVisibility#initialized. (7274)
- The TokensLayer#_getOccludableTokens method has been added, factoring out the logic for determining which Tokens are eligible subjects for overhead tile occlusion. (7325)
- The Drawing#objectId and Tile#objectId properties have been generalized to apply to all PlaceableObject types. (7339)
- An options parameter has been added to Token#checkCollision which is forwarded to WallsLayer#checkCollision. (7354)
- The new GridHex helper class has been added, centralizing some management and transformation functions which are useful to the HexagonalGrid type. (7385)
- The new "A-Star" algorithm has been implemented for pathfinding on hexagonal grids and can be called using HexagonalGrid#getAStarPath. (7386)
- The Ruler class can now be configured as CONFIG.Canvas.rulerClass so that a downstream API user can provide a custom Ruler implementation. (7387)
- The cached objects of Ruler and Cursor instances are now cleared during the ControlsLayer#_tearDown workflow so that different ruler classes may be used for different Scene types. (7388)
- InteractionLayer#_activate and InteractionLayer#_deactivate have been adjusted to ensure that hooks are called last and common workflows are preserved. (7364)

`VisionMode``VisionMode``PlaceableObject#isPreview``tearDownEffectsCanvasGroup``EffectsCanvasGroup#tearDown``Ruler#measure``CanvasColorManager``CONFIG``Canvas``_vertices``_wallKeys``Wall``_executeSweep``PIXI.Polygon``LimitedAnglePolygon``ClockwiseSweepPolygon#_determineSweepResult``PointSourcePolygon.testCollision``ClockwiseSweepPolygon.getRayCollisions``Token#getSightOrigin``Token#getMovementAdjustedPoint``CanvasVisibility#initialized``CanvasVisibility#initialized``TokensLayer#_getOccludableTokens``Drawing#objectId``Tile#objectId``PlaceableObject``Token#checkCollision``WallsLayer#checkCollision``GridHex``HexagonalGrid``HexagonalGrid#getAStarPath``CONFIG.Canvas.rulerClass``Ruler``Cursor``ControlsLayer#_tearDown``InteractionLayer#_activate``InteractionLayer#_deactivate`
## Bug Fixes


### Documents and Data

- canvas.tokens.get should no longer throw an error if no scene is active. (7151)
- Deleting a Scene should now cause all Combat encounters which are linked to that specific Scene to also be correctly deleted. (7166)
- A bug which caused players to not be able to see scenes marked navigable for all users has been resolved. This resulted from an override on the Scene document that prevented testing user ownership levels. (7310)
- JournalEntry.create() should now create only one journal entry page (instead of two). (7327)
- Unformatted plain text should once again render correctly in Journal Pages. (7328)
- Active Effect parsing should no longer fail for non-string references. (7359)
- Documents should now properly and fully reset in the ClientDatabaseBackend before re-preparing their data when embedded documents change. (7366)
- Dragging workflows for dynamic document links should no longer fail with a thrown error. (7367)
- Recursively deleting folders using "Delete All" should once again result in server-side identification and deletion of subfolders. (7381)

`canvas.tokens.get``Scene``JournalEntry.create()``ClientDatabaseBackend`
### Applications and User Interface

- Folder and SidebarDirectory validation workflows have been hardened to prevent assigning a folder as its own parent. (7394)
- Resetting a Card deck no longer removes an assigned custom sort order. (6976)
- TinyMCE hidden fields should now be properly cleared by FormDataExtended on sheet close. (7153)
- Adding new keybinds should no longer unexpectedly replace existing ones. (7158)
- Playlist search should now operate correctly for playlists inside folders. (7159)
- Changing the Software Update Channel on the setup menu should now reset the state of the Update button and Force Update checkbox. This prevents accidentally installing an update from a previously selected channel. (7160)
- To correct an issue where Tooltips would interfere with access to Scene context menus, Tooltips now support a CENTER alignment option which places the tooltip overtop of the object in question. (7169)
- Folders in the Playlists Directory can now be re-arranged via drag-and-drop as expected. (7311)
- The FontConfig text input should now handle rich text styling as expected. (7319)
- The extraneous "Import" button on the AdventureImporter sheet header has been removed. Import of Adventure documents is handled more properly and explicitly by the importer form itself. (7365)

`SidebarDirectory``FormDataExtended``CENTER``FontConfig``AdventureImporter`
### The Game Canvas

- Elevation for Canvas Placeables should no longer cause radial occlusion rendering to fail. (7269)
- Preview objects should now be properly destroyed when a container is cleared. (6696)
- Resized roof tiles should now correctly affect lighting and weather effects. (7306)
- Canvas token control initialization has been hardened against the possibility that previously controlled or targeted tokens no longer exist after the re-draw. (7368)
- When a token is resized, its HUD should now correctly be resized to match. (7375)
- Processed formData from the DrawingConfig app is now expanded when configuring default Drawing properties to ensure custom flag-based properties are preserved as saved defaults. (6846)
- Attempting to move a token into a square bisected by a wall should now operate more consistently across all types of token movement. (6856)
- The Canvas mouseMove listener has been improved to prevent cases where the ruler measurements may produce different results across clients. A combination of throttle and debounce now ensures that the final position of a cursor or ruler move is synchronized accurately across clients. (7157)
- AmbientLight#isVisible no longer prevents updating the position of a disabled light source, while enabling the GM to see where that light's position would be if enabled. (7238)
- If a token is created in the hidden state (via alt+drag, for example) the view of the scene will no longer automatically pan to the position of the newly placed token. (7239)
- Adding a texture to a measured template no longer throws an error or blocks template rendering. (7253)
- Light source polygons are no longer drawn in the FOV mask if Unrestricted Vision Range is enabled. (7265)
- Controlling multiple tokens which have vision should now correctly track fog exploration for all tokens, not just the first selected.  (7267)
- PrimaryCanvasGroup#sortChildren should now correctly initialize elevation range. (7268)
- Canvas#createBlurFilter/addBlurFilter should now calculate its initial amount of blur according to the current scale of the canvas. (7279)
- The GridConfig should now use the new V10 data model and canvas structure when adjusting grid configuration and size. (7307)
- Trusted players should once again be able to select Drawings and Measured Templates after creating them. (7309)
- Changing a Token's visibility to hidden should now occur when the change is made, rather than after releasing the token. (7318)
- Using the Create Map Note tool should now place the pin at the clicked location rather than at the cursor's location. (7320)
- Some light and vision brightness and color settings which could create invalid vision and light configurations have been resolved. (7323)
- The level of blur for VisibilityFilter has been corrected and is no longer incorrectly halved twice. (7330)
- It is no longer possible to set invalid invisible line and fill settings when choosing Solid or Pattern as fill options for Drawings. (7332)
- The computation of Drawing#center has been corrected to use the new shape data from the drawing document schema. (7333)
- Hidden drawings are no longer visible to players. (7334)
- Perception should now be properly refreshed if the position of a roof tile changes. (7336)
- Roof tiles which are hidden no longer factor in calculations of line of sight for interior walls. (7337)
- Roof tiles which are hidden no longer incorrectly block weather and lighting for the GM. (7346)
- The definition of PlaceableObject#sourceId has now been standardized across all placeable object types. (7338)
- Token occlusion radius now correctly updates when changes to the mesh size occur. (7344)
- Smoothed drawings should no longer remove the final placed point when smoothing is applied. (7347)
- BaseSource#containsPoint has been refactored to remove a special case which handled sources unconstrained by walls as they may still be constrained by a boundary shape. (7352)
- CanvasLayer#_draw and CanvasLayer#_tearDown have been refactored slightly to ensure that hooks are called last and common workflows are preserved. (7356)
- Performance Mode should once again initialize properly. (7372)

`formData``DrawingConfig``mouseMove``AmbientLight#isVisible``PrimaryCanvasGroup#sortChildren``Canvas#createBlurFilter/addBlurFilter``blur``GridConfig``Create Map Note``blur``VisibilityFilter``Drawing#center``PlaceableObject#sourceId``BaseSource#containsPoint``CanvasLayer#_draw``CanvasLayer#_tearDown`
### Package Development

- World creation validation has been hardened to prevent the creation of folders with names forbidden by Windows. (6948)
- The "background" field of a system.json manifest should once again correctly apply the defined system background as default for Worlds which are created using that system. (7240)
- Server-side toClientPath tests should now correctly avoid double-encoding URLs which have already had special characters removed. This fixes an issue with World background images containing spaces or special characters. (7275)
- Have the type field of a RelatedPackage schema default to "module" unless otherwise provided. (7302)
- Do not display package manifest warnings in cases where a manifest provides joint version compatibility for an old (now deprecated) field but also provides the new field. (7377)

`system.json``toClientPath``RelatedPackage`
### Dice System

- Private GM and Blind GM rolls should now correctly retain custom flavor text and display whisper recipients. (7326)
- ChatMessage content should now correctly be populated with "0" when a message is constructed from a dice Roll which resulted in a total of zero. (7383)

`ChatMessage`
### Localization and Accessibility

- The labels for a number of fields in Measured Template Config and Ambient Sound Config have had unnecessary colons removed. (6972)
- When an input in a Dialog already has focus pressing tab will now shuffle between available inputs as expected, but use of the tab key when another element is selected will attempt to shift focus to an available Dialog. (7280)


### Other Changes

- BaseSetting and game.settings.get() no longer prevent a setting from declaring null as a default value. (6343)
- Fix an issue with the isNewerVersion helper which improves its ability to compare string components of versions. (6699)
- BigInt and Symbol have been added to ClientSettings.PRIMITIVE_TYPES to prevent issues with identification of whether or not a function is constructible. (6711)
- The hasProperty and getProperty helper methods have bene hardened to prevent issues caused by encountering a non-object along the requested path, and now treat such cases as a failure to acquire the target data. (7165)
- Core translations are once again available for selection in the Configuration tab of the setup menu. (7299)
- duration.combat has been reworked to be a part of the BaseCombat Document. (7300)
- Fixed an issue with the SpriteMesh.from method to support the same set of inputs supported by PIXI.Texture.from. (7305)

`BaseSetting``game.settings.get()``null``isNewerVersion``BigInt``Symbol``ClientSettings.PRIMITIVE_TYPES``hasProperty``getProperty``duration.combat``BaseCombat``SpriteMesh.from``PIXI.Texture.from`
## Documentation Improvements


### Dice System

- The explode once modifier (xo) no longer incorrectly prevents the original set of rolled dice from exploding after the first encountered explosion. (7164)


### Other Changes

- Corrected the function signature of ControlsLayer#tearDown to return the layer instance instead of void. (6939)
- A TSdoc string for the data parameter of ClientSettings#register has been corrected. (6979)

`ControlsLayer#tearDown``void``ClientSettings#register`