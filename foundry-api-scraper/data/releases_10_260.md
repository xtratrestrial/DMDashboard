# Release 10.260 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.260

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.260


## Version 10 Prototype


##### March 23, 2022


## Foundry Virtual Tabletop - Version 10 Prototype 1 Release Notes

At long last, the time has come to show off what we've been working on since Version 9. Users and community developers should be advised that this prototype release of Version 10 contains a lot of Breaking Changes which are par for the course for our prototype updates. Updates during the Prototype phase contain a variety of changes made in the interest of improving the software, including significant changes to our API, which can often be disruptive for community developers. The goal of front-loading the more drastic changes to the very first release in a new version is to provide our awesome development community with the opportunity to begin adapting their content as early as possible and reduce the stress of having to rush out substantial changes later in the development cycle.

For those of you who are not community developers but are interested in checking out some of the new features yourselves, please note: Prototype releases are not intended for use in live games, though if you are determined to do so please be sure to backup your userdata. We cannot say this often enough or loudly enough: If you are going to experiment with prototype releases, perform a backup and disable ALL modules for your world. We cannot be held responsible for any data loss which might occur as a result of third party module breakage.

WARNING:Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

Be certain to carefully back up any critical user data before installing this update.


## Update Highlights

This is a large update with a lot of drastic, sweeping changes for portions of our API. A lot of the breaking changes made to the API were done in the interest of clearing technical debt and bringing overall performance improvements. The first release in any Prototype cycle focuses on trying to fit as many of the more drastic and significant changes as we can in order to make the process of adapting community developer packages easier. However, that doesn't mean we aren't laying down groundwork for a bunch of really cool features that we have forthcoming in V10.


#### DocumentData Refactor

We had one, yes, but what about second Document refactor?

Perhaps the most significant API change inbound in V10, changes to the data schema for Documents bring even further consistency for our Documents framework and provide new means by which Game Systems may define, interact with, and validate data for all Documents. During the intial development phase the opportunity presented itself to shift the previous Document class to become a subclass of the DataModel class. There will be some consequences of this change, but we feel (and after consultation with the FVTT development community, have had that feeling reinforced) that the benefits outweigh the drawbacks. By making this change, we clarify and standardize dependency structure between the DataModel, DataField, and Document classes. In addition, this change allows us to extend methods and features which are currently only available to Documents, granting them to other classes subordinate to DataModel instead. A tertiary benefit of this change is that it removes the awkward Document.data.data structures which previously existed in favour of a more streamlined model. Lastly,  this brings a benefit in that it removes a significant amount of duplicated code from a variety of Document related classes, reducing overall technical and maintenance debt in the FVTT codebase.

`Document``DataModel``DataModel``DataField``Document``Documents``DataModel``Document.data.data``Document`We have taken steps to mitigate the negative impacts of this refactor, and made headway in creating some automatic migrations in order to further reduce those impacts, but we recognize that this change will not be without some growing pains. We strongly encourage system and module developers to test their packages in V10 Prototype 1 and provide feedback for any unexpected stumbling blocks you may face in getting your package working in V10. Receiving feedback from community developers early in this process will make the transition much more smooth for the broader community, so we look forward to hearing from you.


#### Tooltips and Tours

No small part of our efforts in V10 are focused on improving the general experience of the software for both long term veterans and new users. We've heard from the community that the software feels somewhat unapproachable at times and we're making efforts to reduce that learning curve. This update brings in a new API which unifies how Tooltips are provided when hovering elements, displaying them in a way that supports localization and provides a cohesive visual appearance. The new tooltips are provided not only for hovering elements in the core software's UI, but can also be leveraged by community developers to unify their appearance with Game Systems and Modules alike.

The new Tours framework is the first step to bringing a new level of introduction and documentation to Foundry VTT. Our vision for the Tours API is that it will provide a new approach to educating users on aspects of the core software. We foresee a future where Foundry Virtual Tabletop comes with interactive tutorials on every aspect of using the software, where users can use the software itself to help them bridge the gap between 'new user' and 'subject matter expert'. The Tours framework brings us closer to achieving that goal and the best part of this facet of development for V10 is that it will be extensible- allowing community developers to leverage this API to provide similar guided tutorials for their game systems and modules.


#### Canvas and Lighting and Interaction Tools (oh my!)

While drastic changes to lighting and vision are not on the menu for V10 having just gotten a major facelift in V9, it wouldn't be an FVTT update if we didn't tweak the lighting engine a little. This update introduces further performance improvements to the way light sources are handled by using a new polygon-mesh based approach to vertex geometry. Several programmatic improvements have also been brought to occlusion masks for Overhead Tiles.

In addition, we managed to smuggle a little bonus into V10 in the form of new canvas interaction tools, bringing ability for average users to 'ping' the canvas by holding left click with some pretty clean looking animations. GMs may also force user cameras to reposition, drawing attention to a particular point by shift-clicking the canvas. This has long been a feature provided by multiple modules and one of the earliest features conceived for FVTT which we're glad to finally offer an implementation of.

In addition to the three key points above, we'd like to take a moment to highlight some honourable mentions:

- Improved handling of Base64 data stored in image and rich text fields, as an effort to prevent long-running issues with pasting large volumes of base64 encoded image data into FVTT.
- UI improvements in the form of new icons, more consistent labels for UI elements, and a slight facelift for the Setup menu to keep Worlds organized alphabetically by title.
- A variety of upgrades for dependency packages, including Font Awesome 6, Electron 17, Pixi, and much more.


## Breaking Changes


### Architecture and Infrastructure

- The Electron version provided by new builds has been updated to Version 17 https://www.electronjs.org/blog/electron-17-0, adding support for Chromium 98 and Node.js 16.13.0. (6742)
- All core dependency packages have been upgraded to use their latest stable versions. See the linked GitLab issue for a list of updates. (6739)
- A comprehensive pass through the client-side software removing classes, attributes, and methods which were deprecated in a past release version has been performed. These facets of the API are no longer supported as of V10. A complete list of the old non-supported APIs that have been now fully deprecated is available in the linked GitLab issue. (6738)
- A recommended core ESLint configuration and corresponding set of rules has been added which we are internally using to improve and standardize code and documentation quality. The .eslintrc.json configuration file is provided as part of the V10 build of the software in the root source code directory. (6818)
- The deprecation period for some old Package manifest syntax has been concluded and is no longer supported in Version 10. Please see the linked GitLab issue for further details. (6666)
- PackageData fields which were previously arrays including: authors, scripts, esmodules, styles, languages, packs, system, and dependencies now use the new SetField type. (6700)
- The CONFIG.debug.compatibility configurable flag has been introduced and allows the client to specify a compatibility level from CONST.COMPATIBILITY_MODES ranging from SILENT to FAILURE. The chosen compatibility level affects the verbosity and severity of compatibility-related warnings which are logged by the core software. (6854)
- Any remaining code or documentation references to adminKey have been renamed to adminPassword for clarity and consistency. (6725)

`.eslintrc.json``SetField``CONFIG.debug.compatibility``CONST.COMPATIBILITY_MODES``SILENT``FAILURE``adminKey``adminPassword`
### Documents and Data

- A next-generation data management layer has been designed that replaces the pre-existing DocumentData class with a more feature-rich and powerful DataModel class. This new data model is not intended solely for use with "Documents" and provides the ability to define a powerful and flexible data schema, clean or validate input data, and handle serialization and un-serialization for storage. The foundry.abstract.DocumentData path has been preserved for backwards compatibility. (6642)
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

`DocumentData``DataModel``foundry.abstract.DocumentData``DataModel``DataField``foundry.data.fields``DataModel``SchemaField``DataModel``Document``DataModel``DocumentModel``DataModel.migrateData``DataModel.shimData``Document.metadata``DataModel.schema``Object.freeze``Document``_source``parent``apps``_sheet``permission``ownership``DocumentOwnershipConfig``{Data Path}/Data/{Package Type}/{Package Name}/assets``{Data Path}/Data/worlds/testworld/assets/actors/42bie9r7pegkdz5f-img.webp``_stats``systemId``systemVersion``coreVersion``createdTime``modifiedTime``lastModifiedBy``DataModel#validate``Scene``grid``scene.gridColor``scene.grid.color``DataModel``ShapeData``Drawing``MeasuredTemplate``shape``ChatMessage``Roll``rolls``roll``PrototypeTokenData``PrototypeToken``Token`
### Interface and Applications

- Font Awesome has been upgraded to the latest version, Font Awesome 6. This upgrade changes the appearance or names of a number of icons. (6604)
- The DrawingConfig class now correctly extends DocumentSheet rather than FormApplication. (6454)
- The TokenConfig class now correctly extends DocumentSheet rather than FormApplication. (6873)
- Eliminate the required assumption previously used by the core ActorSheet that Item documents within the displayed Actor would be sorted within groups by type. (6734)
- The notify parameter of the ChatLog#postOne method is moved inside an object of additional options instead of used as a positional argument. (6731)

`DrawingConfig``DocumentSheet``FormApplication``TokenConfig``DocumentSheet``FormApplication``notify``ChatLog#postOne`
### The Game Canvas

- A more rigorous approach towards how distance measurement is performed for hexagonal grids has been implemented. This resolves slight inconsistencies between (1) canvas rendering, (2) ruler measurement, and (3) the measureDistances API. This is a breaking change because it alters the way that hexagonal grids are drawn for Scenes to be more precise and to use a more reliable padding computation. As a result of this change, newly created Scenes which use hexagonal grids will have those grids drawn using the new computation, but pre-existing hexagonal grid scenes will be flagged with a "legacy hex" core flag which will cause them to continue to use the old computations. (4621), (6885)
- A new, cleaned-up ParticleEffect API has been introduced and can be used specifically for weather effects, which has been renamed from the old SpecialEffect class. Underlying functionality has been migrated from the discontinued pixi-particles library to the new @pixi/particle-emitter package. This migration results in breaking API changes in how particle effects are defined. See the https://github.com/pixijs/particle-emitter documentation for examples of how to migrate old particle emitter configurations to the new specification. (6276), (6793)
- To avoid ALT-highlighting dispatching an unnecessary amount of hooks and placing objects into the hover state, the behavior of _onHighlight and how it delegates to _onHoverIn and _onHoverOut has been refactored to only provide an aesthetic change rather than a data one. As a consequence of this, highlighting all objects in a scene is no longer confused with nor dispatches on-hover hook events to the highlighted objects. (6800)

`measureDistances``ParticleEffect``SpecialEffect``pixi-particles``@pixi/particle-emitter``_onHighlight``_onHoverIn``_onHoverOut`
## New Features


### Architecture and Infrastructure

- A new prototype framework has been introduced for the centralized creation and management of Web Workers which can delegate user-defined tasks to other CPU threads with asynchronous control via Promises. The underlying APIs for this framework are available via the AsyncWorker, and WorkerManager classes (a singleton instance of which is available as game.workers). We do not yet use this framework in the core software, but anticipate delegating some computationally expensive operations to web workers using this framework later during V10 development. (6759)
- The approach to caching of audio buffers has been improved and now limits cached audio to a certain maximum cache size. In addition, audio buffers now intelligently expire from the cache in reverse-chronological order of recent access. Previously, Foundry VTT would retain cached audio buffers indefinitely, leading to gradually increasing memory utilization over time as the software was used for prolonged periods with many audio sources. (6651)
- Add helpful Array-like primitives onto the Set prototype including find, map, filter, reduce, every, and some. (6701)
- The Array-like prototype methods on the Collection class now support iteration indexes as function arguments. (6730)

`AsyncWorker``WorkerManager``game.workers``Set``Collection`
### Documents and Data

- Server-side Document modification operations now perform data validation checks against only the subset fields of the data schema which have been changed instead of the entire Document schema, resulting in performance gain for Document update operations. (6093)
- The ability for the client and the server to deal with the presence of invalid Documents has been substantially improved and now allows non-strict construction of DataModel instances with potentially invalid source data. The strict optional parameter may be passed to the DataModel constructor, or the DataModel.fromSource factory method may be used which provides this behavior by default. (6736)
- Game systems may now define a DataModel subclass which may be automatically used for the inner system data for Actors, Items, Cards, or Card documents. These inner data models can be defined conditionally upon the type of Document to support different data schema and functionality for different Document types. (6464)
- Newly created Scene thumbnails are now saved as image/webp by default, instead of image/png. (6831)
- The methods used to apply Active Effect changes onto an Actor document have been improved to more accurately adapt to a variety of target data types. (6534)
- The FogExploration document now supports flags in its data schema like other Document types. (6817)
- To allow for users to access a Token's set of wildcard token images, regardless of their normal file browsing permission, a new workflow has been added via Actor#getTokenImages. This provides an array of available token images even if the user does not otherwise have permission to browse the file picker. Only users with permission to browse the file system may assign or change a wildcard token path. (6575)

`DataModel``strict``DataModel``DataModel.fromSource``DataModel``system``type``image/webp``image/png``FogExploration``flags``Actor#getTokenImages`
### Interface and Applications

- A new framework for displaying HTML tooltips has been implemented and is supported by the underlying TooltipManager API, which is accessible via game.tooltip. This framework adds support for tool-tipped and localized text which is intelligently and dynamically positioned relative to an anchored element. Tooltips may be generated programmatically from within JavaScript or designated during HTML template rendering. See the linked GitLab issue for example usages. (6502)
- A new framework for providing a guided "Tour" has been implemented via the underlying Tour API. This framework will be used to improve the new user experience with the core software by providing tutorials and in-application guides. It is intended for use that community developers may implement their own tours to provide step-by-step guides for their own packages as well. (6500)
- Tooltips have been added to the Sidebar, Scene Controls, and Macro Hotbar interface elements. We anticipate adding more tooltips as development of V10 progresses. (6788) (6791)
- Scenes in the top navigation menu for which the displayed "Navigation Name" of the Scene differs from its true name now have a displayed tooltip for GM users that displays the true name of the Scene on hover. (5554)
- The title labels of Sidebar tabs have been made more consistent with the underlying pluralized metadata for the Documents they contain. (6784)
- The Configuration tab of the Setup view has been refactored to use the underlying ApplicationConfiguration data model. (6728)
- Worlds listed on the Worlds tab of the Setup view are now sorted alphabetically by title. (6815)

`TooltipManager``game.tooltip``Tour``ApplicationConfiguration`
### The Game Canvas

- A framework for canvas "pings", "alerts", and "pulls" has been implemented which are rendered synchronously for all connected players. This functionality is provided via the underlying Ping class of the API, with specialized ping implementations of PulsePing and ChevronPing. The default UX for pings is that a long left-mouse press creates a standard ping, holding ALT while making a long press creates an "alert" style ping. For a GM user, holding SHIFT while performing a long press will pull the view of other players on the same Scene to the location of your ping. (6636)
- The vertex shader used for light sources has been redesigned and substantially improved to utilize vertex geometry directly for the shape of the source polygon and to provide soft-edges of the source via attenuation built directly into the vertex shader rather than via the need for an additional RenderTexture and mask. This provides a substantial improvement for light source shader performance across almost all graphics cards. (6209), (6639)
- The "Torch" lighting animation has been improved and overhauled to provide a more realistic appearance of exposed flame. The previous animation has been renamed to "Flicker", and uses an improved noise generation algorithm and its approach to coloration should result in a less "washed out" appearance. (6640), (6787)
- The "Gradual Illumination" checkbox for Ambient Light and Token light source objects has been replaced with an "Attenuation" slider which allows for fine-grained control over the smoothness of transition between bright/dim/dark lighting regions. An Attenuation value of one produces the most dramatic and most gradual easing, while an Attenuation value of zero produces the most sharply differentiated appearance between lighting levels. (6755)
- The default values of PointSource data and Shader default uniforms have received an update to ensure consistency of these default values with the initial values of the LightConfig data schema. (6761)
- Programmatic improvements to the creation and management of Sprite masks for Roof Tiles have been made, that improve the consistency and performance of applying overhead tile occlusion masks. (6781)
- A more generalized CanvasAnimation.animate function has been introduced as a replacement for CanvasAnimation.animateLinear with support for custom easing functions. (6535)
- The performance of SightLayer#testVisibility has been improved that shortcuts some unnecessary tests for faster performance. (6811)

`Ping``PulsePing``ChevronPing``RenderTexture``LightConfig``CanvasAnimation.animate``CanvasAnimation.animateLinear``SightLayer#testVisibility`
## Bug Fixes


### Architecture and Infrastructure

- The compressStatic field in options.json is now correctly stored as a boolean rather than a string. (6720)

`compressStatic``options.json`
### Documents and Data

- The server-side Token#loadRelatedDocuments method now allows for a Token to link to no Actor or a missing Actor to prevent data validation issues. (6816)
- The diffObject helper method will now appropriately report no difference in the case that an empty object is passed to it. (6853)
- Using the -= shortcut to delete properties should now only trigger an update in cases where the targeted property exists. (6588)
- Token#_cleanData no longer performs a rounding operation on positional data stored in the x and y coordinate fields. (6828)

`Token#loadRelatedDocuments``diffObject``-=``Token#_cleanData``x``y`
### The Game Canvas

- Unexpected behaviors of the SceneConfiguration class related to Scenes that have a specific dimension (4000x3000) have been eliminated. (6864)

`SceneConfiguration`
### Interface and Applications

- An issue where drag-resizing an application window that has been affected by the scale HTML property has been corrected and resizing these windows should now function as expected. (6564)
- The "Reset Default" of the DrawingConfig application now correctly restores default Drawing settings regardless of which Scene control tool is currently selected. (6874)

`scale``DrawingConfig`
## Documentation Improvements

- The developer documentation for V10 Prototype 1 is now available at https://foundryvtt.com/api/v10.
- JSDoc documentation strings which incorrectly referenced {any} have been replaced with type {*}. (6618)

`{any}``{*}`