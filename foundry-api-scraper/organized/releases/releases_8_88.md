# Release 0.8.0 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.88

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.0


## Version 8 Prototype


##### February 17, 2021


## Foundry Virtual Tabletop - Version 0.8.0 Update Notes

Hello friends, I am both nervous and excited to introduce the very first alpha channel release of the new 0.8.x series of development for Foundry Virtual Tabletop. This update marks a major milestone for the software, an enormous amount of thoughtful work has gone into this update and I am very proud of it. I am confident that it establishes a high architectural standard of quality that will empower further developments to Foundry Virtual Tabletop - both by myself as well as by our fantastic developer community - for years to come. Before continuing, please take a moment to read this very important reminder.

`0.8.x`WARNING: Updates on the alpha channel involve major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing. The purpose of Alpha channel builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you chose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

If you choose to install the Alpha 0.8.0 update, you must perform a fresh installation of the software. It is not possible (for reasons which will be explained later in these notes) to update from within the Foundry VTT interface to version 0.8.0. As always, before any significant update:

Be certain to carefully back up any critical user data before installing this update.

Those important disclaimers aside, I look forward to sharing the update notes with you for the incredible amount of work which has gone into this new version. Version 0.8.0 is one of the most significant updates to the software ever, both in terms of work involved (hundreds of hours of work have gone into it) as well as due to the significance of these changes in establishing paradigms that the software will rely upon for years to come.


### Update Overview

The 0.8.x update sequence is focused on two primary user-facing features Audio System Improvements and Overhead Tiles. Before starting work on those two major features, the first update in the sequence, this one, focuses exclusively on major infrastructural investments which reinforce and empower the software architecture upon which further enhancements will be built. As such, this particular update is very infrastructure, API, and developer-focused. I assure you that the major improvements to audio systems and the addition of overhead tiles will be coming soon in updates 0.8.1 and 0.8.2 respectively.

`0.8.x`The major infrastructure themes which are central to this update version are briefly summarized as follows:

- The terms of the End User License Agreement have been updated to improve the clarity of terminology used to explain licensing expectations. There are no major changes to the terms of the license, only wording changes to make the intention of the agreement more clear. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4092 for a list and an exact diff of what changed. Upon installing 0.8.0 you will be prompted to re-sign the updated license agreement.
- Foundry Virtual Tabletop now requires Node.js 14. For those of you who use the regular application - you will need to install the application from scratch to get the underlying Node 14 support, you won't be able to update through the in-app updater this time. If you run a dedicated server, you'll need to confirm your environment is updated to use Node 14.
- Moving to Node 14 allows ESModules to be used server-side instead of CommonJS. This is the "missing link" which means that Foundry VTT can now run the exact same code on the server that it can run on the client without the need for any build or transpiling step required. Previously, the Foundry codebase was partitioned with related but independent client and server libraries. Now there is a third pillar, the common module, which is used by both the client and the server - allowing both components of the software architecture to share the exact same implementation for many key features.
- The most important component of this new shared module is the "Common Document Model" which provides a renovated set of abstractions for documents, data schema, database operations, and much more. This is a major step away from the legacy concepts of "Entities" and "Embedded Entities". A byproduct of the improved Document model is a significant improvement in the flexibility and reusability of the Document API - which is especially evident in areas like Compendium documents or un-linked Token Actors which were previously difficult to work with.
- As a consequence of the new standardized Document model, objects which are placed on the canvas (Tokens, Tiles, etc...) now have a separation between the classes which are responsible for how the object is rendered and the classes which define and manage their underlying data structure.
- The API Documentation has been comprehensively reviewed and re-designed to improve the coverage and accuracy of documented constructs. API Documentation for the alpha-channel 0.8.0 is available here: https://foundryvtt.com/api/alpha/

`client``server``common`The above list is a poor attempt to summarize what is a very comprehensive update, so I encourage those of you who are developers to read the full update notes carefully. These design choices result in a number of breaking changes which are important to be aware of and will be addressed first in the notes. Please note that most of these "breaking" changes are not immediately breaking, but rather will display a deprecation warning while internally redirecting to a new approach. There are, however, several areas where immediately breaking changes were unavoidable. A goal for the subsequent update 0.8.1 will be to identify any unexpected breaking changes and resolve them in ways that will minimize the amount of immediate changes forced upon game systems and modules.

`0.8.1`
### Breaking Changes


#### Document Changes

- You must migrate to Node.js 14.x which is now required in order to utilize server-side ESModules and V8 JavaScript features. This will require all users upgrading to version 0.8.x from 0.7.x to perform a complete re-installation of the software rather than updating from within the application.
- The Document abstraction has been re-designed to feature a symmetric design which shares common definitions of data schema and functionality between server and clientside code. A brief design overview of this major change is available here: https://gitlab.com/foundrynet/foundryvtt/-/issues/4373
- The Entity class has been removed in favor of a DocumentMixin combined with the abstract Document class definitions. Throughout the software references to "Entity" and "EmbeddedEntity" have been replaced with references to "Document" and "embedded Document" respectively. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4380
- All Document data types models now include a formal DocumentData subclass definition which standardizes the data schema, initialization, and validation workflows for documents of that type. As a consequence, the Document#data property for any document will now provide a DocumentData instance rather than a plain object.
- The create, update, and delete hooks for Document modification actions are now always passed a full Document instance rather than (occasionally) a plan object. This is a major change for Document types which are embedded within some parent Document (previously termed "Embedded Entities") which now have full Document class definitions rather than simply being an array of objects within the parent data structure. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4434
- Created a new PlaylistSound Document type in preparation for the upcoming Audio overhauls, instances of PlaylistSound belong to the Playlist#sounds Collection. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4450
- Created a Combatant Document type which internalizes helper methods for manipulating a combatant entry within the Combat tracker. Instances of the Combatant document belong to the Combat#combatants collection. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4090
- Created a TableResult Document type which provides a formal definition and helpful functionality for individual results within a Roll Table. Instances of the TableResult document belong to the RollTable#results collection. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4090
- The concept of an "OwnedItem" is immediately deprecated as the Document standardization results in the Item document being used as both a primary world-level document as well as an embedded Document type within a parent Actor. As such "owned item" management methods such as getOwnedItem, createOwnedItem, updateOwnedItem, and deleteOwnedItem have been deprecated (with a warning message) in favor of manipulating Item instances directly. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4459
- The Setting class has been refactored to follow the standard interfaces used by other Document types.
- Created a new FogExploration Document type which provides helper functionality for loading, manipulating, and saving the fog exploration progress.
- The SceneData#description field has been formally deprecated as it has been unused since an early Beta version.
- Serializing a DocumentData instance will now only return the _source component of that data which needs to be persisted in the database rather than the full data object including derived data elements or downstream transformations. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4502
- Document#prepareData calls have been moved outside of Document#_onUpdate to avoid cases where a system developer overrides this event handler and forgets to re-prepare Document data. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4458
- The Document.socketListeners static method has been renamed to Document._activateSocketListeners to more semantically describe the action that is taken as well as to denote that the method should not be called by external code.
- In order to resolve an overlap with ClientDocumentMixin#Render, the ChatMessage#render method has been renamed to ChatMessage#getHTML.
- (Deprecation Notice) The Document.config static object has been deprecated in favor of the more standardized Document.metadata. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4386

`Document``DocumentData``Document#data``DocumentData``Playlist#sounds Collection``Combat#combatants``RollTable#results``getOwnedItem``createOwnedItem``updateOwnedItem``deleteOwnedItem``_source``ClientDocumentMixin#Render``ChatMessage#render``ChatMessage#getHTML`
#### Canvas Changes

- The global Canvas object has been standardized and now has the same expected properties in cases where a canvas is used as well as in cases where no canvas is present. This is especially important given the optional new "no-canvas" setting. Developers should rely upon the canvas.ready boolean to make choices about whether or not to perform canvas-related actions. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4359
- The current PlaceableObject class has been split into separate concepts for data management (Document), visualization on the canvas (CanvasObject), and configuration (DocumentSheet) which better separate concerns related to documents which are embedded within a Scene and displayed on the Canvas. Each Canvas Object will reference the document that it represents, and each Document will contain a reverse-lookup relationship back to the Canvas Object which represents it. See See https://gitlab.com/foundrynet/foundryvtt/-/issues/4468
- (Deprecation Notice) CONST.DRAWING_DEFAULT_VALUES has been deprecated in favor of the defaults defined in the DrawingData schema.

`canvas.ready``document`
#### Application Changes

- The BaseEntitySheet interface class has been renamed to DocumentSheet to better reflect the semantic conventions of 0.8.0. A backwards compatible class interface has been provided using the old name.
- PlayerConfig has been renamed to UserConfig for increased consistency with how other configuration applications are named relative to the base Document type that they modify.
- The data structure of the object prepared by ActorSheet#getData is redesigned in order to to provide more sensible references for the Actor, its data, and any items or effects that the Actor owns. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4321
- To support the new Document nomenclature, the SidebarDirectory class definitions now reference Documents rather than Entities. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4503
- Allow for merging Application options when calling Application#render(force, options) to conveniently assign or toggle application options when the interface is re-rendered. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4577
- Some hooks have been renamed to follow the standard {verb}{subject} semantics, specifically sidebarCollapse has been renamed to collapseSidebar. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4243

`ActorSheet#getData``{verb}{subject}``sidebarCollapse``collapseSidebar`
#### Other Breaking Changes

- Removed the functions and UI elements that are used outside of the /game endpoint into a separate setup JS file which does not expose those methods to the normal game API.
- The FEATURES global object has had its values incremented (for one final time) and is being deprecated. It is no longer recommended to use the FEATURES global object to track evolutions of the Foundry VTT API. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4632
- The Collection#get method now returns undefined on a failed lookup rather than null, in order to remain compliant with the parent Map behavior.
- The Collection#entries attribute has been renamed to Collection#contents to avoid overriding the parent implementation of Map#entries.
- The game.data.world data structure has changed to mirror the data structure of the game system and modules rather than having a different structure.

`FEATURES``Collection#get``Collection#entries``Collection#contents``Map#entries``game.data.world`
### New Features


#### Architecture

- Foundry Virtual Tabletop now requires Node.js 14. For those of you who use the regular application - you will need to install the application from scratch to get the underlying Node 14 support, you won't be able to update through the in-app updater this time. If you run a dedicated server, you'll need to confirm your environment is updated to use Node 14.
- Updated Electron to version 12.x supporting Node.js 14
- Server-side database modifications now use a per-file semaphore to avoid concurrency issues which could previously occur in instances where multiple operations were performed simultaneously.
- The core HTTPS server implementation has been upgraded to use HTTP2 using the SPDY protocol if certificates are provided for the application to run using SSL.
- The server-side code has been comprehensively overhauled to standardize the use of ESModules and remove usage of TypeScript.
- Relaxed the approach used to obfuscation of the server-side code in order to improve application performance by removing Proxy objects added through obfuscation.
- When requesting the set of available core software updates, the updater will now pass the Node.js and Electron (if used) version numbers as part of the request data which allows the Foundry web server to avoid recommending updates to users if their server does not have the required environment to support it.


#### Compendium Packs

- With the introduction of the Document data model, it is now possible to modify embedded Documents directly from within an editable Compendium Document. For example: It is now possible to edit the values of an Item owned by an Actor stored in a Compendium.
- Exporting a Document to a world compendium will now retain the permissions of that document instead of resetting them, as would occur when exporting to a compendium pack outside of the World context.
- Each Compendium pack view will now request and persist its index in memory so that the UI can be instantaneously rendered and dynamic entity links to compendium content can be resolved by name. The contents of the index will be automatically updated when new documents are added or removed from the Compendium pack.
- Accessing the full Document data for contents of a Compendium pack will now temporarily cache those Documents them in memory to improve performance when frequently or repeatedly interacting with Compendium content.
- Compendium data which is vended to the client will no longer contain the absolute path to the compendium.
- Locking or unlocking a compendium pack will now re-render the contents of the compendium to change their editable state based on the locked status.


#### Canvas, Lighting, Vision

- Foundry Virtual Tabletop supports a new "No-Canvas" mode which can be enabled via the Settings menu which bypasses rendering of the game canvas but still allows the remaining functionality of Foundry Virtual Tabletop to fully function. This is a client-side setting, designed to allow for individual users with less capable computer hardware to still interact with the other aspects of Foundry Virtual Tabletop without the additional hardware requirements that the WebGL canvas involve.
- The display of chat message bubbles and pan to token speaker settings have been re-scoped and are now client-specific instead of world-specific to allow users to apply personal preference.
- In order to make vision and lighting more performant, sight Rays now perform calculations for more intensive calculations such as angle and distance only when necessary rather than for all Rays.
- Define a new SourcePolygon class which extends PIXI.Polygon which is used for line-of-sight and field-of-vision polygons and utilized by the SightLayer#testVisibility to provide a much more efficient containment test given the polygon's radial nature.
- The SightLayer#computeSight function has been optimized by storing test point data in a Map of integer keys instead of using an object for improved efficiency in accessing the data.

`SourcePolygon``SightLayer#testVisibility``SightLayer#computeSight`
#### UI and UX

- Added an additional icons sub-folder containing 488 beautifully drawn webp icons for foods, potions, mushrooms, beverages, and more that may be used within your game sessions.
- The "Return to Setup" in the Join screen will now only prompt for the server admin password to be entered if the current User has not already authenticated as an admin user.
- The Token name field can is now optional, and if left empty will default to the name of the associated actor.
- The styling rules used for directory containers, Sidebar Tabs, and the User Configuration character select application have been simplified.
- Added a default SVG icon used for Items, the icon to be used may be configured using the ItemData.DEFAULT_ICON static attribute.
- The page template layouts for "game" and "main" have been consolidated to share logic which generalizes across both use cases.


#### Other Features

- The terms of the End User License Agreement have been updated to improve the clarity of terminology used to explain licensing expectations. There are no major changes to the terms of the license, only wording changes to make the intention of the agreement more clear. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4092 for a list and an exact diff of what changed. Upon installing 0.8.0 you will be prompted to re-sign the updated license agreement.
- Server-side Datastores now have an improved means by which to dump their contents as plain objects, allowing for faster World#vend operations instead of constructing Document instances.
- Combat encounters which do not designate a specific Scene (by setting scene to null) will now be displayed in the Combat Tracker across all Scenes, regardless of which is currently viewed.
- An optional actorId foreign-key field has been added to the Combatant data model to track the relationship to a specific Actor for cases where a Token may not be present.
- Chat Log timestamps now only update for chat messages whose HTML is currently displayed and the underlying function for this has been optimized to use a more modern HTML query selection and update syntax.
- When using the Electron application, the Electron version will now be logged to the console as part of the initialization workflow.
- Modules may now designate themselves as a Library module by setting the parameter "library": true in module.json. These modules will be included before non-library modules in javascript and CSS load order.
- Game Systems may now designate which of their contained data fields are HTML data which require server-side sanitization by defining the htmlFields array key in template.json which lists data paths that should be treated as HTML. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4187
- Client IP addresses are now stored in the created log-files when an authorization success or failure occurs.
- The UPnP implementation now supports an advanced optional configuration parameter to customize the UPnP lease duration, allowing for the possibility of permanent leases for routers which do not support temporary leases. To define an indefinite lease duration set the parameter upnpLeaseDuration to '0' in options.json
- Added support for a localHostname application configuration option which can override the local network address used for invitation links, mirroring the functionality of the hostname option which configures the external address.

`actorId``"library": true``module.json``htmlFields``template.json``upnpLeaseDuration``options.json`
### API Improvements


#### Documents

- Created internal pre-operation methods for all Document and Embedded Document instances which mirror the syntax of pre-hooks but designed specifically for internal use by document classes. See https://gitlab.com/foundrynet/foundryvtt/-/issues/3888
- Documents and their embedded collections now support differential updates for their elements as part of Document#update operations. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4553
- The database modification workflows used for Token actorData have been refactored and can now simulate the standard CRUD workflow (including pre and post callbacks and hooks) used for other Actor documents. See https://gitlab.com/foundrynet/foundryvtt/-/issues/3435
- In order to improve performance when duplicating objects, implemented a new utility method to deepClone an object which replaces the previous JSON.duplicate approach. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4231
- The processes used for data sanitization within the Document constructor now ensures that all required data attributes have valid values, falling back to default values if an invalid value was previously persisted.
- The way initial sanitization of Document input data has been improved and now provides better handling of nullish values for required fields.
- Replaced several direct uses of base document classes with their configured implementation versions.
- Temporary Document creation now takes place entirely within the requesting client and no request is dispatched to the server when documents are created with options.temporary as true. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4607
- Added game.collections as an analogue to game.packs, this provides a DocumentCollection instance for each canonical primary Document type.
- Document.owner has been renamed to Document.isOwner (formerly Entity.owner) to make it more clear that it is a boolean check.
- The _data object which was previously used to persist the base data of an Entity is no longer necessary, this functionality has been folded into the AbstractBaseData layer for each Document type.
- The set of active Applications associated with a Document instance are now automatically registered and cleared when using the DocumentSheet (Formerly BaseEntitySheet) class.
- Documents which use a default icon as their initial artwork may now have that icon customized via the static DEFAULT_ICON attribute of their data schema definition.

`options.temporary``game.collections``game.packs`
#### Compendiums and Folders

- In order to improve the performance of Compendium index creation, the database query now applies a projection to filter to restrict only to those fields required for the index.
- Standard CRUD pre and post hooks are now provided for modification operations to Documents within a Compendium pack. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4289
- Documents in Compendium Packs now support multi-document modification operations. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4564
- Compendium Packs now support 'pack' as a canonical context argument for Document construction similar to 'parent', this standardizes the way that Compendium Packs are recognized as the context for a Document instance.
- The SidebarDirectory _onDrop handling has been refactored in order to simplify and improve readability of the directory drop handling logic.


#### Other API changes

- Systems and Modules may now override the implementation used for each placeable canvas Object by modifying the CanvasObject class definition in the CONFIG object. For example: The CanvasObject definition used to display a Token may be replaced as CONFIG.Token.objectClass
- Added a new hook event for changeSidebarTab. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4142
- It is now possible to pass explicit scope parameters for Actor and Token to the Macro#execute method.
- The event handling logic for Application constructs such as tabs, scrolling containers, or drag/drop interfaces are now activated in a private method which is always invoked and does not depend on subclasses remembering to call super.activateListeners.
- Moved the definition of core included scripts and styles into the Express view data middleware layer.
- Corrected an issue where Hooks.call() would previously return void in cases where no handlers were registered.

`CONFIG.Token.objectClass``changeSidebarTab``Macro#execute``Hooks.call()`
### Localization Improvements

- Modules may now designate themselves as primary localization providers by setting the parameter "coreTranslation": true in module.json. These modules will be placed first in the module load order and will provide official language designations and labels for all menus.
- Portions of the Setup menu which previously did not support localization can now be localized, but only by a primary localization provider.
- The Join screen is now a Setup application, allowing for localization of its content, but only by a primary localization provider.
- Portions of the Combat Tracker interface which previously did not support localization can now be localized.
- Portions of the Tile Configuration Application which previously did not support localization can now be localized.
- The Combat Initiative Roll label now supports localization.
- Renamed Basic Controls to Token Controls to bring the labelling consistent with other tools.
- The Save Application Configuration dialog window Header and Contents now has support for localization.
- The Scene Navigation collapse toggle now has a tooltip identifying its function.
- A convenience option has been added in order to allow for localization of the contents of ui.notifications.notify messages. See https://gitlab.com/foundrynet/foundryvtt/-/issues/4640

`"coreTranslation": true``module.json``ui.notifications.notify`
### Bug Fixes


#### Document Fixes

- Applying active effect programmatically now correctly applies token effect icon immediately.
- Document.create will now always return an array if input data was provided as an array.
- The diffObject() helper method will now recognize keys in the original object which are explicitly set to undefined if the inner option is passed as true.
- Returning false for the pre-modification hooks (such as preDelete and preCreate) will remove that single document from the batch rather than canceling the entire batch.
- As a result of document creation workflow changes, new Document creations no longer fail to correctly update the game.data array when new documents are created.
- Cases where primary and secondary attributes that were defined in the system.json manifest were not correctly used as a resource for tokens has been resolved.
- Game settings defined with type Array are no longer incorrectly wrapped in an outer array and should now return the array as the setting value directly.
- Updating a chatMessage through the ChatMessage.update function should now properly update the popped out message as well.
- The User#assignHotbarMacro method should no longer incorrectly. consider slot to be a required parameter.
- Assistant GMs can now correctly edit and delete canvas placeables if they have the permission to create those placeables.
- Exporting a Document that has transformed/derived values in its data model will no longer incorrectly include those derived values in the exported data.

`inner``slot`
#### Application Fixes

- The contents of Dialog.prompt should now be properly rejected if the dialog window is closed without making a selection
- The _onSortItem function was previously using a hardcoded definition for .item and should now properly use dragSelector instead.
- Trying to open the actor sheet for a token which had its actor deleted previously appeared to silently fail. It will now display a warning.
- Improved the TinyMCE editor saving workflow to avoid an error related to the link plugin which would occur if no text was selected.
- Immediate inline rolls in an Actor Sheet should now obtain that Actor's roll data object as expected.
- Corrected an issue where Drag and Drop functions would attempt to evaluate plain text data on drop, this should no longer occur.
- The confirmation input prompt when deleting a World no longer allows autocompletion.
- Right-clicking on an empty hotbar slot should no longer show context menu options that are not available for empty slots.
- Corrected for cases where mouse wheel events on a disabled range input would still allow values to be set.


#### Canvas Fixes

- The Ray#fromAngle now correctly returns returns rays with normalized angles, also corrected an issue normalizeDegrees where it could return incorrect values.
- Walls _onUpdate no longer incorrectly calls _onModifyWall when unnecessary.
- Corrected an issue with Scene Thumbnail creation which could prevent the dimensions of a new background image from being accurately discovered if tiles were also present in the scene.
- Fog of War was previously defined as a function of the canvas dimensions, and is now defined separately to correct for issues where scene padding could affect it.
- Use of the LightingLayer#animateDarkness function should no longer produce errors if it is used to change the darkness level to the same value it currently holds.
- The placeholder for the Units field in the scene configuration previously displayed "ft" as an example, this has been corrected as it could cause confusion and appear as though it had been set.
- TokenConfig.getTrackedAttributes should no longer throw an error in Token.getBarAttribute as a result of incorrectly returned null values.
- Left-Click to Release Objects should now correctly release tokens when the "Select Target" tool is in use.
- To correct for cases where escape key presses would cause issues with releasing objects if pressed while dragging an object, Escape key-presses will now be ignored during drag operations.


#### Dice Fixes

- Dice roll modifier targets should now be processed correctly using a non-null value. This should correct for cases where certain modifiers like cs<0 would incorrectly treat the target as a non-zero value.
- Roll.toMessage() should now adhere to data passed in the messageOptions.rollMode parameter as expected.

`cs<0`
#### Other Bug Fixes

- Hardened several aspects of security in the the server-side software to avoid an exploit which could grant unintended user permissions.
- Corrected an issue with license signing which would prevent the authorization of licenses and cause the License Agreement to be shown repeatedly if the hostname contained any non-ASCII characters.
- The progress bar for core software updates should now correctly report and update during the extraction and installation process.
- Assistant-level Users can no longer shut down a currently active world.
- Reloading /setup should now correctly update data for currently available worlds by parsing available world.json files.
- Entering an empty string ("") rather than null for the sslCert, sslKey, or awsConfig keys in options.json will now be detected as those fields not being provided and will no longer break application startup.
- To correct an issue for some users where the Socket.io connection could potentially display a "Cookie "io" not secure" message, the Socket.io implementation has been explicitly configured to cookie: false as its functionality was not previously used.
- Resolved a situation which could cause more than one ContextMenu to open at a time.
- Keyboard handling events for inputs with an attached datalist should no longer produce errors related to the Keyboard manager.

`/setup``cookie: false`
### Documentation Improvements

- The API Documentation has been comprehensively reviewed and re-designed to improve the coverage and accuracy of documented constructs. API Documentation for the alpha-channel 0.8.0 is available here: https://foundryvtt.com/api/alpha/
- Improved inter-linking of documentation to provide references to constants, configuration objects, and object types which are used as inputs.
- Corrected the class extends/implements annotations for classes which were previously did not have their constructor correctly documented.
- Corrected a number of entries where JSDoc comments were entirely missing.
- Corrected a number of identified locations in the client-side code where public function parameters were not documented in JSDoc.
- Corrected a number of entries where parameters and their types were incorrectly ordered in JSDoc.
- Corrected a number of typographic errors in JSDoc tags.
- The CONST and CONFIG objects are now enumerated by way of a JSDoc enum tag.
- Provided JSDoc documentation for helper functions which extend primitive data classes with additional static or instance methods.
- Provided JSDoc documentation for helpers module of utility functions.
- Provided JSDoc documentation for the commons data module which defines shared data schema and base document models for all core data types.
- The API documentation for Localization now includes example usage for the localize and format methods.
- Added documentation for the Tabs parameter to the Application constructor API documentation.
- The documentation of the Dialog class has had its parameters corrected.
- Replaced documentation references to PIXI.interaction.InteractionEvent which is renamed to PIXI.InteractionEvent
- Added specific information and attribution for icons from game-icons sources under the public/icons/svg directory for additional license visibility in addition to the existing credits listed on the Foundry Virtual Tabletop website.

`public/icons/svg`