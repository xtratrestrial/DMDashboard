# API Migration Guides | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/migration/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# API Migration Guides


## 

To provide paths for our community developers to update their packages for new versions of Foundry VTT, this subsection offers articles written by the Foundry VTT Development Team which offer deeper explanations of API changes. These articles should give very clear explanations of how to address some of the breaking changes we introduce on a per-version basis.

If you have questions regarding any of these guides, please raise them in the appropriate development support room (currently #dev-support) on our community discord server.


## V12 Migration Guides and Discussion Links

The following guides and discussion links refer to changes made during the development cycle for V12. This also marks the first development cycle where information about API changes is being presented as a GitHub discussion.

- Deprecations completed in V12
- Audio API Changes
- Grid API Changes
- Compatibility Removals
- Primary Canvas Objects V2


## V11 Migration Guides

The following guides pertain to API changes from the development cycle for V11.

- Version 11 Token Changes
- Version 11 Document Hierarchy Changes
- Version 11 Active Effect Changes
- Version 11 Content Packaging Changes


## V10 Migration Guides

The following guides pertain to API changes from the development cycle for V10.

- Version 10 Data Model Changes
- Version 10 Manifest Migration
- Version 10 TextEditor Changes
- Version 10 Journal Changes
- Version 10 Font Configuration Changes


## V10 Breaking Changes

In the interest of providing a convenient migration path for less complex breaking changes, community developers are encouraged to view the complete list of breaking changes as detailed below.

- Meta Issue: Overview of breaking changes in Document and data models from V9 to V10. (6849)

- The Electron version provided by new builds has been updated to Version 17 https://www.electronjs.org/blog/electron-17-0, adding support for Chromium 98 and Node.js 16.13.0. (6742)
- All core dependency packages have been upgraded to use their latest stable versions. See the linked GitLab issue for a list of updates. (6739)
- A comprehensive pass through the client-side software removing classes, attributes, and methods which were deprecated in a past release version has been performed. These facets of the API are no longer supported as of V10. A complete list of the old non-supported APIs that have been now fully deprecated is available in the linked GitLab issue. (6738)
- A recommended core ESLint configuration and corresponding set of rules has been added which we are internally using to improve and standardize code and documentation quality. The .eslintrc.json configuration file is provided as part of the V10 build of the software in the root source code directory. (6818)
- The deprecation period for some old Package manifest syntax has been concluded and is no longer supported in Version 10. Please see the linked GitLab issue for further details. (6666)
- PackageData fields which were previously arrays including: authors, scripts, esmodules, styles, languages, packs, system, and dependencies now use the new SetField type. (6700)
- The CONFIG.debug.compatibility configurable flag has been introduced and allows the client to specify a compatibility level from CONST.COMPATIBILITY_MODES ranging from SILENT to FAILURE. The chosen compatibility level affects the verbosity and severity of compatibility-related warnings which are logged by the core software. (6854)
- Any remaining code or documentation references to adminKey have been renamed to adminPassword for clarity and consistency. (6725)
- 36 separate deprecated methods and classes have been removed and are no longer supported in the V10 API. (6738)
- PixiJS has been updated to version 6.3.0 and we have adapted a number of new new techniques for culling, intersection testing, and rounded rectangle support. (6887)
- A number of core dependencies have been updated. (6960)
- The name field in manifest JSON files (including the dependency field) is being deprecated in favor of id, to reduce confusion about its purpose. There will be a deprecation period for this change and it will become enforced in Version 11. (7009)
- The author field in manifest JSON is being deprecated in favor of authors in the interest of offering a single standardized way to present the author or authors of a package. (7010)
- Introduced new compatibility field for package manifests which replaces the now-deprecated minimumCoreVersion and compatibleCoreVersion fields. (7011)
- Introduced new relationships field for package manifests which replaces the now-deprecated dependencies field. (7075)
- Deprecated isObjectEmpty in favor of isEmpty. (7128)
- mergeObject now supports a new performDeletions option to control whether it implements the '-=' shortcut prefixed delete instructions or ignores them. (6582)
- Compendiums containing Actors, Items, and Adventures now have a strict requirement to declare the system which they are compatible with, either directly or indirectly via package relationships. (7636)

`.eslintrc.json``SetField``CONFIG.debug.compatibility``CONST.COMPATIBILITY_MODES``SILENT``FAILURE``adminKey``adminPassword``name``id``author``authors``compatibility``minimumCoreVersion``compatibleCoreVersion``relationships``dependencies``isObjectEmpty``isEmpty``mergeObject``performDeletions``'-='`- A next-generation data management layer has been designed that replaces the pre-existing DocumentData class with a more feature-rich and powerful DataModel class. This new data model is not intended solely for use with "Documents" and provides the ability to define a powerful and flexible data schema, clean or validate input data, and handle serialization and un-serialization for storage. The foundry.abstract.DocumentData path has been preserved for backwards compatibility. (6642)
- The new DataModel class is powered by a new paradigm for defining data schema using the DataField class and its many implementations which are available under the foundry.data.fields namespace. DataField instances define the type, cleaning, validation, initialization, and serialization logic for each component field of the data schema. Backwards compatibility for old object-style field specifications is preserved, where possible. (6641)
- Support of the DataModel functionality has been expanded to elegantly allow for the definition of inner-object structures via the SchemaField type. This allows for nested data structures to be declared inline as part of a model definition without requiring the use of a separate embedded subclass of DataModel. (6451)
- The Document class has been reinvented as a subclass of DataModel instead of a separate logical layer which contains a DocumentModel. This is the most significant architectural change which we anticipate making in Version 10. It eliminates the separation of Document functionality from the underlying data structure which defines that Document. There are a number of important considerations and consequences which are involved in this change, developers are strongly encouraged to read the following GitLab issues for details. (6841), (6849), (6838)
- A specific and intentional compatibility framework has been developed for data migrations. This moves one-time data model migrations into new DataModel.migrateData and DataModel.shimData methods, which are used to provide forwards-compatibility of old data into a new schema and backwards-compatibility of new data into the prior schema. These methods are automatically used as part of Document modification workflows so that old-schema data is accepted and automatically migrated and that callback hooks can still (during their deprecation period) reference old-schema style data paths. (6825)
- Document.metadata and DataModel.schema are now frozen via Object.freeze to prevent client-side manipulation of these configuration objects that would have unexpected consequences. (6862)
- Several fundamental Document attributes, specifically _source, parent, apps, and _sheet are configured to not be enumerable when iterating over keys/values of the Document. (6872)
- The permission field of many primary Document types has been migrated to ownership, with corresponding changes to CONST.DOCUMENT_OWNERSHIP_LEVELS and the DocumentOwnershipConfig Application. Existing documents will automatically migrate (and be shimmed) to support old "permission" access. (6867)
- Our expectations around the usage of base64 data as a mechanism for storing media data in certain document fields have been overhauled. Now, when base64 data is provided as a value to file path fields, that base64 data will automatically be persisted to disk by the server and the field value in the data schema will be replaced by a reference to the static file. The extracted files are saved within the {Data Path}/Data/{Package Type}/{Package Name}/assets folder and organized by document type. For example, saving a base64 image for an Actor portrait would produce a file like {Data Path}/Data/worlds/testworld/assets/actors/42bie9r7pegkdz5f-img.webp. An initial migration is also provided for pre-existing Worlds which will perform automatic extraction of base64 from Documents which already exist within the world. (6029), (6486)
- Primary Document types now all include a _stats field which tracks the following useful metadata for auditing, migration, and compatibility: systemId, systemVersion, coreVersion, createdTime, modifiedTime, lastModifiedBy. (3653), (6553)
- The implementation of DataModel#validate has been improved and its usage as part of construction and update workflows to eliminate excessive or redundant validation and generally speed up server-side operations. (6603)
- Various Scene data schema fields have been consolidated and migrated to belong to an inner grid object. For example, scene.gridColor is now migrated to scene.grid.color. For full details of the migrated fields see the attached GitLab issue. (6852)
- A new subclass of DataModel has been developed for ShapeData which provides a reusable mechanism for adding persistence of geometric shapes as part of some other data model. This inner model has been deployed for use in the Drawing document in Prototype 1. We have intentions to use this for MeasuredTemplate as a follow-up in Prototype 2 as well as for some other future use cases which require us to persist geometric regions. As a result, several attributes of the Drawing data schema have been migrated to an inner shape object instead of as top-level fields. (6827), (6452)
- The ChatMessage document now contains an array of Roll objects in its rolls field rather than a singlular roll. This allows for chat messages to contain multiple dice roll expressions which will be rendered in order on the displayed chat card. Pre-existing messages are automatically migrated to use this new schema, and references to the prior singular roll field are deprecated. (6467)
- The PrototypeTokenData model has been refactored and redesigned, and is now renamed as PrototypeToken which more elegantly extends the Token data model with a subset of schema fields. (6840)
- FormDataExtended has been improved and now automatically produces a correctly-typed object as FormDataExtended#object instead of FormDataExtended#toObject. This addresses several issues with incorrect handling of field types. (6986)
- DragData creation and consumption workflows have been streamlined by using UUIDs in the interest of providing a more standardized approach across all Document types. (6990) (6166)
- Resolved some data conflicts in the RollTableResult caused by the new DataModel migration. (7116)
- The convention used by all DocumentSheet#id attributes has been standardized and now uses a combination of the class name and the Document UUID being displayed. (5652)

`DocumentData``DataModel``foundry.abstract.DocumentData``DataModel``DataField``foundry.data.fields``DataModel``SchemaField``DataModel``Document``DataModel``DocumentModel``DataModel.migrateData``DataModel.shimData``Document.metadata``DataModel.schema``Object.freeze``Document``_source``parent``apps``_sheet``permission``ownership``DocumentOwnershipConfig``{Data Path}/Data/{Package Type}/{Package Name}/assets``{Data Path}/Data/worlds/testworld/assets/actors/42bie9r7pegkdz5f-img.webp``_stats``systemId``systemVersion``coreVersion``createdTime``modifiedTime``lastModifiedBy``DataModel#validate``Scene``grid``scene.gridColor``scene.grid.color``DataModel``ShapeData``Drawing``MeasuredTemplate``shape``ChatMessage``Roll``rolls``roll``PrototypeTokenData``PrototypeToken``Token``FormDataExtended``FormDataExtended#object``FormDataExtended#toObject``DragData``RollTableResult``DocumentSheet#id`- Font Awesome has been upgraded to the latest version, Font Awesome 6. This upgrade changes the appearance or names of a number of icons. (6604)
- The DrawingConfig class now correctly extends DocumentSheet rather than FormApplication. (6454)
- The TokenConfig class now correctly extends DocumentSheet rather than FormApplication. (6873)
- Eliminate the required assumption previously used by the core ActorSheet that Item documents within the displayed Actor would be sorted within groups by type. (6734)
- The notify parameter of the ChatLog#postOne method is moved inside an object of additional options instead of used as a positional argument. (6731)
- The font configuration API has been improved and can now provide multiple font definitions for a single family, including weight and style variants. This is a breaking change because it deprecates use of the previously used CONFIG.fontFamilies array. (6498)
- TextEditor.enrichHTML parameters are now included when data is passed to custom enrich methods. (7196)
- The Audio-Video user interface has been redesigned to be a full-height sidebar panel on the left-side of the interface which can be resized. Camera views of connected players are arrayed in a grid layout and can be popped out to separate frames. (7230)

`DrawingConfig``DocumentSheet``FormApplication``TokenConfig``DocumentSheet``FormApplication``notify``ChatLog#postOne``CONFIG.fontFamilies``TextEditor.enrichHTML`- A more rigorous approach towards how distance measurement is performed for hexagonal grids has been implemented. This resolves slight inconsistencies between (1) canvas rendering, (2) ruler measurement, and (3) the measureDistances API. This is a breaking change because it alters the way that hexagonal grids are drawn for Scenes to be more precise and to use a more reliable padding computation. As a result of this change, newly created Scenes which use hexagonal grids will have those grids drawn using the new computation, but pre-existing hexagonal grid scenes will be flagged with a "legacy hex" core flag which will cause them to continue to use the old computations. (4621), (6885)
- A new, cleaned-up ParticleEffect API has been introduced and can be used specifically for weather effects, which has been renamed from the old SpecialEffect class. Underlying functionality has been migrated from the discontinued pixi-particles library to the new @pixi/particle-emitter package. This migration results in breaking API changes in how particle effects are defined. See the https://github.com/pixijs/particle-emitter documentation for examples of how to migrate old particle emitter configurations to the new specification. (6276), (6793)
- To avoid ALT-highlighting dispatching an unnecessary amount of hooks and placing objects into the hover state, the behavior of _onHighlight and how it delegates to _onHoverIn and _onHoverOut has been refactored to only provide an aesthetic change rather than a data one. As a consequence of this, highlighting all objects in a scene is no longer confused with nor dispatches on-hover hook events to the highlighted objects. (6800)
- The structure of the EffectsCanvasGroup has been refactored to remove the reliance on canvas layers for components of the canvas scene which should always be rendered without interactivity. (7013)
- A new document data field for TEXTURE_DATA has been introduced which standardizes how canvas-rendered textures are stored. This approach replaces the current storage of texture data as an assorted set of fields in various canvas document data classes. (6455)
- Eliminated container-wise separation of different canvas object types (like tiles and tokens), instead rendering their meshes as zIndex-ordered siblings directly inside the PrimaryCanvasGroup. (7113)
- Generalized the concept of elevation for Tokens and Tiles, eliminating the specialized categorization of "overhead" vs "non-overhead" in favor of a generalized method for z-index sorting and Tile occlusion. (7114)
- Changed the structure of state flags used by the PerceptionManager to flatten the flags to one dimension of depth with efficient tracking for whether a flag is dirty, and added support for flag propagation or resets. (7138)
- Restructured the PrimaryCanvasGroup to contain only the visual representation of objects that are rendered as part of the Scene, moving all interactivity with those objects to layers in the interaction group. (7086)
- The VisionSource#limited property for PointSourcePolygon#isConstrained has been removed. (7140)
- In favour of the new PlaceableObjects inside the interface group, ObjectHUD and SynchronizedTransform have been deprecated and should no longer be used. Additionally, ObjectHUD#createScrollingText has been refactored and moved to CanvasInterfaceGroup#createScrollingText. (7293)
- The approach used for Token animation has been generalized and now supports animating all of the visual attributes of the TokenMesh. (7281)
- A new Color class has been introduced as a drop-in replacement for a hex color (number) which adds many helpful methods and properties for color manipulation and transformation. As a result, a number of helper methods have been deprecated. (7362)
- HexagonalGrid has received a number of changes to improve typing and method signatures for hex grid conversion methods. (7384)
- Tile#getRoofSprite has been removed in favour of the newly reworked Roof occlusion framework. (7121)

`measureDistances``ParticleEffect``SpecialEffect``pixi-particles``@pixi/particle-emitter``_onHighlight``_onHoverIn``_onHoverOut``EffectsCanvasGroup``TEXTURE_DATA``VisionSource#limited``PointSourcePolygon#isConstrained``PlaceableObjects``ObjectHUD``SynchronizedTransform``ObjectHUD#createScrollingText``CanvasInterfaceGroup#createScrollingText``TokenMesh``HexagonalGrid``Tile#getRoofSprite`