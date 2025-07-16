# Release 12.316 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.316

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.316


## Version 12 Prototype


##### December 12, 2023


## Foundry Virtual Tabletop - Version 12 - Prototype 1 Release Notes

We strongly recommend users considering testing V12 Prototype 1 upgrade first to V11.315 to take advantage of the new backup and pre-flight update check features included in that version. These should allow for the safe restoration of data in V12 migrations.

We're extremely excited to share this update with the community. Version 12 Prototype 1 brings a number of new features, bug fixes, and improvements to Foundry Virtual Tabletop and is the first step in our development cycle for Version 12. Our overall goals for Version 12 include new features to make the canvas even more powerful, continuing our database improvements from V11 with the updated ClientDatabaseBackend, new sound features as part of our new audio module, and of course a ton of user experience improvements and bug fixes for good measure. Please check out the full list of changes below for a detailed breakdown of what was changed in this update!

`ClientDatabaseBackend`WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


## Update Highlights


### Yes We Canvas

The team has been hard at work improving the canvas and have added a ton of new features:

- Scenes now support a new Environment Ambience Configuration which includes options for configuring the base and darkness ambience tints, light filters, and other ambience lighting options!
- Overhead Tiles now fade on hover making it easier to see what's underneath a Tile.
- Support has been added for elevation to Drawing, Tile, MeasuredTemplate, Note, AmbientLight, and AmbientSound documents.
- A new framework for audio effect filters has been introduced, allowing filters to be attached to AmbientSound placeables or other Sound instances.
- Initial support for Scene Regions has been implemented which provides a data model that we hope developers will help us improve so it can work for their use cases.

`elevation``Drawing``Tile``MeasuredTemplate``Note``AmbientLight``AmbientSound``AmbientSound`
### Going Off the Grid

The grid is now a shader, which makes a number of new features possible in the core software and for module developers. The team have also worked diligently to improve how our grids work, are calculated, and improved navigation for grid squares and hexes. This should be a huge boon to users of hex and square grids alike.


### Database of Operations

As part of our architectural improvements for Prototype 1, the team also made several enhancements to the DatabaseBackend by substantially improving documentation regarding parameters of database operations, providing more type information, and expanding the database transaction workflow to offer batch-level pre and post functions that can modify, react to, or wholesale reject sets of proposed changes.

`DatabaseBackend`
## Breaking Changes


### Architecture and Infrastructure

- Foundry VTT now requires Node.js 18+ as a minimum requirement, dropping support for Node 16. (9996)


### Documents and Data

- Breaking changes and deprecations from V10 and earlier which have reached the end of their compatibility period are now finalized. (10164)
- The return type of AsyncWorker functions has been changed. It should now return [result: any, transfer?: Array<TransferableObject>] (9907)
- We have renamed ChatMessage#user to ChatMessage#author, and MeasuredTemplateDocument#user to MeasuredTemplateDocument#author.  (9843)
- Added standardized renderContext and renderData to Application#render and Application#close calls made in Document#_onCreate, Document#_onUpdate, and Document#_onDelete callbacks. (10244)
- AngleField#base has been deprecated in favor of AngleField#normalize. (9970)
- The value of ColorField is now a Color instead of a string and ColorField can be initialized with any valid value that can be passed to Color.from (10200)
- FormDataExtended now includes readonly fields by default. It is intended for forms to use the readonly attribute for fields which should not be editable by the user but should be included in the submitted form data structure. (9973)
- In the interest of standardization, Math.clamped has been deprecated in favor of Math.clamp, Math.roundDecimals has been deprecated without replacement, the base paramater of Math.normalizeDegrees has also been deprecated. Additionally, Math.toRadians should now calculate results correctly and Math.normalizeRadians no longer enters an infinite loop when provided with large arguments. (9966)
- Provide numerous improvements to the DatabaseBackend interface. (10214)

`AsyncWorker``[result: any, transfer?: Array<TransferableObject>]``ChatMessage#user``ChatMessage#author``MeasuredTemplateDocument#user``MeasuredTemplateDocument#author``renderContext``renderData``Application#render``Application#close``Document#_onCreate``Document#_onUpdate``Document#_onDelete``AngleField#base``AngleField#normalize``ColorField``Color``ColorField``Color.from``FormDataExtended``Math.clamped``Math.clamp``Math.roundDecimals``base``Math.normalizeDegrees``Math.toRadians``Math.normalizeRadians``DatabaseBackend`
### Applications and User Interface

- The canvas, ruler, and interaction layers now capture mouse events outside of the canvas bounds, allowing users to pan the canvas by dragging the region outside of the gridded canvas area. (9925)
- The Audio API has received numerous improvements, including the consolidation of AudioContainer into Sound and much more. Please review the following GitHub issue for more information: (10092)


### The Game Canvas

- We have standardized the isOwner property for all canvas placeable objects. As a result, Token#owner and MeasuredTemplate#owner have been deprecated. (9842)
- Removed the createEffectsCanvasGroup hook event. (9900)
- CanvasLayer#_tearDown is no longer called before the first CanvasLayer#_draw call. (9901)
- BaseCanvasMixin has been renamed to CanvasGroupMixin, and now offers CanvasGroupMixin#_draw and CanvasGroupMixin#_tearDown. (9903)
- The canvas grid is no longer rendered using PIXI.Graphics, instead favoring a new method using GridMesh and GridShader which offers better performance and more flexibility. (10003)
- Significant changes have been made to the GridHex class in order to provide V12 grid compatibility. Please review the following GitHub issue for more information: (10082)
- A significant number of changes have been made to the Grid API V2, please review the following GitHub issue for more information: (10088)
- Scene#grid is now a BaseGrid instance. (10089)
- Numerous changes have been made to Primary Canvas Objects, please review the following GitHub issue for more information: (10104)
- Legacy hex grid migration has improved significantly, please see the following GitHub issue for more information: (10132)
- Added Note#_refreshTooltip for controlling refresh of a rendered tooltip. The refresh part of Note#_drawTooltip has been moved into this function. (10232)

`isOwner``Token#owner``MeasuredTemplate#owner``createEffectsCanvasGroup``CanvasLayer#_tearDown``CanvasLayer#_draw``BaseCanvasMixin``CanvasGroupMixin``CanvasGroupMixin#_draw``CanvasGroupMixin#_tearDown``PIXI.Graphics``GridMesh``GridShader``GridHex``Scene#grid``BaseGrid``Note#_refreshTooltip``Note#_drawTooltip`
### Package Development

- To prevent packages from containing invalid compendium names, compendium name fields are now validated against the same rules used for package IDs. (8282)
- We have deprecated and added a number of grid-related changes to the V12 System manifest schema. Please review the list of changes here: (9999)


## New Features


### Architecture and Infrastructure

- The package dependency Yauzl has been swapped out for Yauzl-promise to resolve some minor tech-debt issues with package creation. (9802)
- Updated a number of package dependencies for Version 12 Prototype 1. (10081)
- Added ProgressEmitter and ProgressReceiver classes to encapsulate the progress of websocket communications between server and client on the setup screen. (10190)
- An unnecessary Document#toObject call found in server-side batch update and delete transactions has been eliminated, improving performance for database round trips significantly. (10239)

`ProgressEmitter``ProgressReceiver``Document#toObject`
### Documents and Data

- Drawing Documents now have standard elevation and sort fields so they can be perfectly organized relative to other objects in the Primary Canvas Group. (8498)
- Scenes now support a new Environment Ambience Configuration which includes options for configuring the base and darkness ambience tints, light filters, and other ambience lighting options! (9683)
- Scene fog data is now a specialized schema. (9904)
- The Global Illumination light source now has a data schema attached to the Scene, allowing for its configuration to be changed via the API. (9836)
- ColorField values are now coerced to lowercase to ensure consistency. (9851)
- Added the elevation field to Drawing, Tile, MeasuredTemplate, Note, AmbientLight, and AmbientSound documents. Added the sort field to Drawing, Tile, MeasuredTemplate, Note, and Token documents. (10218)
- Added a framework for handling server-side migrations that ensures retired source-only migrations are persisted whenever a database is connected. (10257)

`elevation``sort``ColorField``elevation``Drawing``Tile``MeasuredTemplate``Note``AmbientLight``AmbientSound``sort``Drawing``Tile``MeasuredTemplate``Note``Token`
### Applications and User Interface

- Non-Gamemaster users may now hold Shift+Left-Click to generate a ping which pans their own view, but behaves as a regular ping for other users. (8960)
- Light sources with an elevation above a roof Tile no longer illuminate the space below the roof. (8996)
- MouseInteractionManager now includes tracking for the GRABBED state, indicating whether an object was clicked and can be dragged. This provides better support for drag-and-drop workflows. (9841)
- The Combat Tracker now offers a new pan to combatant control icon for players. (10242)
- Configuring the set of status conditions provided by an Active Effect now uses a multi-select UX. (10122)
- The Token HUD now offers "Bring to Front" and "Send to Back" buttons to help handle Token stack cycling. (10191)
- Added keybindings (using [ and ]) for controlling the z-index of placeable objects, specifically avoiding keys near WASD to prevent accidental triggering. (10222)
- Holding the target key (T by default) while performing a drag selection operation now targets all Tokens contained in the selection box. (9275)
- The 'clear search field' button has had its hitbox expanded and no longer requires pin-point precision to click it. (9086)
- We've made a number of improvements to folder styles, including the addition of a shadow to folder titles, border indicators for directory items, and more! (9648)

`MouseInteractionManager``GRABBED``pan to combatant`
### The Game Canvas

- Overhead Tiles now fade on mouse hover, allowing for users to more easily see what is underneath the Tile. (10143)
- Roof Tiles over invisible walls and open doors no longer make those wall segments block sight for Tokens that are not under that roof. (8888)
- The Scene ambience lighting configuration now supports both a night and day cycle. (10125)
- Scene configuration now provides an option to lock the darkness level, preventing it from being changed. (10194)
- We now persist the Token stacking order, storing the sort order in the data model and allowing all clients to share a consistent view of Token stacking. (6751)
- Hex grids now use a Token's border polygon as its hitArea rather than the previous square default. (8243)
- Tokens on hex-grid scenes now offer specific configuration options allowing users to choose between different hexagonal Token shapes, for more fine-grained control over the appearance and orientation of Token shapes. (10144)
- Added SquareGrid#diagonals and the Square Grid Diagonals (core.gridDiagonals) world setting which can be leveraged by systems to more easily configure the diagonal movement rules for square grids. (9998)
- The initial cleaning constraint on Token position has been relaxed, such that only the Token center must be within the canvas bounds. (10173)
- We have relaxed some restrictions on the width of Measured Templates to allow cases where the width may need to be a non-integer. (8723)
- The center point of larger Tokens in hexagonal grids is now the centroid of the hexagonal shape, providing a more visually consistent hexagonal appearance. (10151)
- Small Tokens now snap to grid space centers on scenes with square grids. (10266)
- Authors of a Drawing may now toggle its locked and hidden state. Hidden Drawings now remain visible to their author. (9850)

`SquareGrid#diagonals``core.gridDiagonals`
### Package Development

- We've refactored package dependency management to better handle package dependency inheritance. As a result, Module Dependencies now dynamically adjust to user input and recalculate dependencies as required. (9725), (9762)


### Localization and Accessibility

- Range inputs are now highlighted when hovered or focused to standardize their appearance with other types of input. (9669)


## API Improvements


### Documents and Data

- For use by Foundry VTT core software developers only, we now support defining certain data model fields which are only editable by a GM user regardless of other permissions. (9613)
- The new DocumentUUIDField() StringField subclass allows validation as a UUID string, resolving to either world or compendium content. (9736)
- randomID now uses crypto.getRandomValues instead of Math.random. (9844)
- Added ClientDocument.fromImport, which can be used to import document data from a previous core version of Foundry VTT. (10100)
- Added TypedSchemaField which can be used to represent multiple schemas. Please see the following GitHub issue for more information: (10192)
- Added JournalPageSheet#_closeView which is called whenever the view mode of that sheet is closed, allowing subclasses to define tear-down behavior for custom Journal pages. (10230)
- Added a new constructor parameter to DataField class which defines field context, supporting the assignment of field name or parent at constructor-time (10238)
- Added options parameter to Actor#getTokenDocument. (10249)
- Added anchorX, anchorY, fit, and alphaThreshold fields to TextureData. (10252)
- The database transaction workflow has expanded and now offers batch-level "pre" and "post" functions that can modify, react to, or wholesale reject sets of proposed changes. (9740)
- We have added the new utility function foundry.utils.EventEmitterMixin which allows event-emission behavior to be added to any class. (10097)

`DocumentUUIDField()``randomID``crypto.getRandomValues``Math.random``ClientDocument.fromImport``TypedSchemaField``JournalPageSheet#_closeView``DataField``name``parent``options``Actor#getTokenDocument``anchorX``anchorY``fit``alphaThreshold``TextureData``foundry.utils.EventEmitterMixin`
### Applications and User Interface

- Scenes can now contain "Scene Regions" as an embedded Document and Placeable Object type, allowing users to define geometric regions with sub-types which determine their behavior. Scene Regions haven't been completed yet. This is only the first incomplete draft of the data model for Prototype 1. (9772)
- Added a new TokenDocument#locked field which allows individual Tokens to be locked to prevent them from moving or rotating via user interaction. (10165)
- A new framework for audio effect filters has been introduced, allowing filters to be attached to AmbientSound placeables or other Sound instances. (10152)
- The AudioHelper class now supports Audio Sprites, using playAudioSprite(source, sprite, selfVolume). (5632)
- The API ergonomics of starting, stopping, and restarting a Sound that uses an AudioBufferSourceNode have been improved and now automatically re-construct the buffer node in the background. (7427)
- AmbientSound placeables now fully stop playback when their source is no longer audible rather than simply setting their playback volume to zero. (10265)
- SoundsLayer#playAtPosition adds API support for playing one-shot environmental sound effects at a specific position within the world. Door sounds now use this method, making door sounds local so that they are only heard by nearby controlled Tokens. (10153)
- We have added experimental custom HTMLElement support for <multi-select> and <multi-checkbox> elements. (9830)
- Add a new custom range HTMLElement for Hue which can be used by package developers to present a hue slider for color selection. (9987)
- Added a new @Embed enricher which can be used to embed the HTML representation of a Document within other content, including JournalPages of the type text or image, as well as RollTable documents. (10262)
- When using custom enrichers, an enricher which replaces the entire contents of its parent element can now be moved out of its parent element. (10256)
- Added once option to foundry.utils.logCompatibilityWarning to reduce the amount of duplicate deprecation warnings that are logged. (10250)

`TokenDocument#locked``AudioHelper``playAudioSprite(source, sprite, selfVolume)``AudioBufferSourceNode``AmbientSound``SoundsLayer#playAtPosition``HTMLElement``HTMLElement``@Embed``JournalPage``text``image``RollTable``once``foundry.utils.logCompatibilityWarning`
### The Game Canvas

- The auto-fading API now supports Overhead Tiles, providing an option to control the fading behavior of these Tiles for GMs. (9829)
- Added the new Hook events drawGroup and tearDownGroup. (9899)
- The AdaptiveFXAA filter may now be enabled or disabled via the new fxaa property of Canvas#blurOptions. (9915)
- OutlineOverlayFilter#animate has been deprecated in favor of OutlineOverlayFilter#animated. (9967)
- Tokens configuration now supports an "image fit" mode and an anchor setting, allowing fine-grain control over how a Token image is scaled and positioned within its bounds. (9971)
- We have added a new ambience filter for applying post-processing effects to the primary canvas group. (9988)
- The new BaseGrid#getDirectPath returns a path (a sequence of grid offsets) offering the shortest, most direct path through a given set of waypoints. This function does not consider walls or other obstacles. (10001)
- The SpriteMesh class now supports a padding property similar to the one used by PIXI.Filter. This property can be used to extend the space accessible to shaders allowing them to extend beyond the natural bounds of the sprite asset. (10002)
- Added support for basis universal supercompressed GPU texture format. (10017)
- Added HexagonalGrid#getCube which returns the integer cube coordinates {q, r, s} of the hexagon containing the given coordinates. (10018)
- The PlaceablesLayer and PrimaryCanvasGroup quadtree are now cleared during the _tearDown instead of the _draw workflow. (10019)
- We now provide alpha map compatibility through OccludableObject and the use of sprite sheets. (10020)
- The Primary Canvas Object framework has received numerous overall improvements, and now takes into account additional data such as anchor and pivot. (10028)
- Added unclickLeft and unclickRight events to MouseInteractionManager. Added PlaceableObject#_onUnclickLeft and PlaceableObject#_onUnclickRight. (10064)
- Weather shaders and filters now take into account a terrain texture's UV coordinate. (10103)
- The data object has been removed from all Primary Canvas Object classes. (10105)
- A new subclass (ObservableTransform) has been added to PIXI.Transform, designed to allow our Primary Canvas Objects to efficiently monitor changes in properties that may impact bounds and/or occlusion. (10108)
- Primary Canvas Object handling has been refactored to enhance the computation of bounds. (10111)
- We have improved the occlusion workflow and increased control over occlusion alpha. (10114)
- SceneDimensions now includes data values for rows, columns, and units.  (10174)
- We have added the new PlaceableObject#hasActiveHUD function which returns true if the layer has a HUD element and the placeable is bound to this HUD currently. (10180)
- AbstractBaseShader now offers a _configure method for a one-time/ponctual initialization and BaseSamplerShader with texture/tint update handlers. (10193)
- SpriteMesh and QuadMesh have been refactored and are now subclassed from PIXI.Mesh to PIXI.Container. (10196)
- Added BaseGrid#getShiftedOffset, BaseGrid#getShiftedPoint, and HexagonalGrid#getShiftedCube. Deprecated BaseGrid#shiftPosition. (10078)
- Added HexagonalGrid#pointToCube, HexagonalGrid#cubeToPoint, and HexagonalGrid.cubeRound (10085)
- Added HexagonalGrid#offsetToCube and HexagonalGrid#cubeToOffset. Deprecated HexagonalGrid.offsetToCube and Deprecated HexagonalGrid.cubeToOffset. (10086)
- Added foundry.utils.polygonCentroid which can be used to calculate the centroid of a non-self-intersecting closed polygon. (10258)
- Added BaseGrid#getVertices and BaseGrid#getShape. (10099)
- Added CachedContainer#autoRender which can be used to control the rendering of a cached container. (10202)
- Added a batch renderer for rendering sprites with occlusion, for more information please see the following GitHub issue: (10208)
- Added Token#getSnappedPosition. Deprecated Token#getCenter in favor of Token#getCenterPoint. (10211)
- Added Ruler#token, which sets the movement token when a measurement starts to allow custom (system-based) rulers to render the ruler based on the Token's available movement types, range, elevation, and more. (10213)
- Added the option to configure the radial occlusion range of a Token. (10221)
- The enabled and pause workflows for the BaseSamplerShader class have been improved. (10234)
- Added the parameter renderer: PIXI.Renderer to the signature of AbstractBaseShader#_preRender. (10246)
- Added CanvasDepthMask#mapElevation and CanvasOcclusionMask#mapElevation. Deprecated PrimaryCanvasGroup#mapElevationToDepth. (10247)
- Added PIXI.Graphics#drawSmoothedPolygon which provides a function for specifying polygons and control of the level of smoothing to be applied to those polygons. (10248)
- Added deprecated option to RenderFlags. When set, a deprecated warning is logged with logCompatibilityWarning, to which the given deprecation options are passed. The deprecation message is auto-generated unless a message is passed with the options. By default the message is logged only once. (10251)
- Added Drawing#_getLineStyle and Drawing#_getFillStyle which can be used to determine the line styling and fill styling configured on a particular drawing. (10253)
- Added AbstractBaseShader#initialUniforms which provides a view of the (default) uniforms used when creating the shader. (10254)
- Added Token#getShape which returns the shape of the Token. (10259)
- Deprecated BaseGrid#getCenter in favor of BaseGrid#getCenterPoint. (10011)
- Deprecated BaseGrid#getTopLeft in favor of BaseGrid#getTopLeftPoint. (10012)
- Added BaseGrid#getOffset and BaseGrid#getOffsetRange. (10013)
- Deprecated BaseGrid#getSnappedPosition in favor of BaseGrid#getSnappedPoint. (10014)
- Deprecated BaseGrid#getNeighbors and GridLayer#isNeighbor in favor of BaseGrid#getAdjacentOffsets and BaseGrid#testAdjacency.  (10071)
- Deprecated BaseGrid#measureDistances and GridLayer#measureDistances in favor of BaseGrid#measurePath and GridLayer#measurePath.  (10072)
- Deprecated BaseGrid#getGridPositionFromPixels and BaseGrid#getPixelsFromGridPosition. (10077)
- Deprecated HexagonalGrid.pixelsToOffset, HexagonalGrid.pixelsToOffset, and HexagonalGrid.pixelToCube. (10087)

`drawGroup``tearDownGroup``AdaptiveFXAA``fxaa``Canvas#blurOptions``OutlineOverlayFilter#animate``OutlineOverlayFilter#animated``BaseGrid#getDirectPath``SpriteMesh``padding``PIXI.Filter``HexagonalGrid#getCube``{q, r, s}``PlaceablesLayer``PrimaryCanvasGroup``_tearDown``_draw``OccludableObject``unclickLeft``unclickRight``MouseInteractionManager``PlaceableObject#_onUnclickLeft``PlaceableObject#_onUnclickRight``data``ObservableTransform``PIXI.Transform``SceneDimensions``rows``columns``units``PlaceableObject#hasActiveHUD``AbstractBaseShader``_configure``BaseSamplerShader``SpriteMesh``QuadMesh``PIXI.Mesh``PIXI.Container``BaseGrid#getShiftedOffset``BaseGrid#getShiftedPoint``HexagonalGrid#getShiftedCube``BaseGrid#shiftPosition``HexagonalGrid#pointToCube``HexagonalGrid#cubeToPoint``HexagonalGrid.cubeRound``HexagonalGrid#offsetToCube``HexagonalGrid#cubeToOffset``HexagonalGrid.offsetToCube``HexagonalGrid.cubeToOffset``foundry.utils.polygonCentroid``BaseGrid#getVertices``BaseGrid#getShape``CachedContainer#autoRender``Token#getSnappedPosition``Token#getCenter``Token#getCenterPoint``Ruler#token``enabled``pause``BaseSamplerShader``renderer: PIXI.Renderer``AbstractBaseShader#_preRender``CanvasDepthMask#mapElevation``CanvasOcclusionMask#mapElevation``PrimaryCanvasGroup#mapElevationToDepth``PIXI.Graphics#drawSmoothedPolygon``deprecated``RenderFlags``Drawing#_getLineStyle``Drawing#_getFillStyle``AbstractBaseShader#initialUniforms``Token#getShape``BaseGrid#getCenter``BaseGrid#getCenterPoint``BaseGrid#getTopLeft``BaseGrid#getTopLeftPoint``BaseGrid#getOffset``BaseGrid#getOffsetRange``BaseGrid#getSnappedPosition``BaseGrid#getSnappedPoint``BaseGrid#getNeighbors``GridLayer#isNeighbor``BaseGrid#getAdjacentOffsets``BaseGrid#testAdjacency``BaseGrid#measureDistances``GridLayer#measureDistances``BaseGrid#measurePath``GridLayer#measurePath``BaseGrid#getGridPositionFromPixels``BaseGrid#getPixelsFromGridPosition``HexagonalGrid.pixelsToOffset``HexagonalGrid.pixelsToOffset``HexagonalGrid.pixelToCube`
### Package Development

- The SystemData data schema now includes grid.type. (7211)

`grid.type`
## Bug Fixes


### Documents and Data

- StringField no longer overrides the default initial value defined by subclasses. (9656)
- Combats have been simplified to ensure that turn events have correct comparison data, and should no longer throw an error in cases where there are no combatants when advancing turns. (9718)
- Combat turn events are now dispatched when the turn number remains the same but the combatant ID changes. (9741)
- Combat#started is now true if the combat round is greater than zero even if the combat has no Combatants. (9742)
- ActiveEffect#isTemporary now returns a boolean as expected. (10199)

`StringField``Combat#started``ActiveEffect#isTemporary`
### Applications and User Interface

- Cancelling a Measuring Distance operation with the Ruler no longer causes a selected Token to enter a state where it cannot be released. (9746)
- Application#appId now correctly handles cases where a new Application instance is created, but a previous instance still exists for a certain appId. (9849)
- Corrected some issues related to canvas controls particular to the use of PIXI.FederatedEvent in debounced events. (10178)

`Application#appId``PIXI.FederatedEvent`
### The Game Canvas

- The canvas no longer breaks in cases where it is redrawn while already being in the process of drawing. (9898)
- The "Send to Back" function for Drawings no longer places those drawings below the background layer of a scene. (10052)
- Deprecated PlaceablesLayer#gridPrecision in favor of PlaceablesLayer#getSnappedPoint.  (10070)
- VisionMode.vision.defaults.color now applies as expected when switching vision mode in the Token Configuration application, as part of the defaults SchemaField. (9312)

`PlaceablesLayer#gridPrecision``PlaceablesLayer#getSnappedPoint``VisionMode.vision.defaults.color``defaults`
### Dice and Cards

- The validation for Inline Roll syntax has been tightened in order to eliminate cases of false positives. Previous uses of inline expressions like [[skill 15]] will no longer be incorrectly matched as an inline roll. (9959)

`[[skill 15]]`