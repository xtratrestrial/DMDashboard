# Release 11.293 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.293

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.293


## Version 11 Prototype


##### February 21, 2023


## Foundry Virtual Tabletop - Version 11 Prototype 2 Release Notes

Be certain to carefully back up any critical user data before installing this update.

Welcome to the Version 11 Prototype 2 release of Foundry Virtual Tabletop! Our team has invested extensively into the technical foundation of our software with this release, making some big and meaningful changes that improve the architecture, performance, and user experience of Foundry VTT. Some of the most noteworthy highlights include further investment into our new LevelDB infrastructure to support fully hierarchical document operations, support for Folder documents inside Compendium packs, migration to PIXI.js version 7 and its new interaction framework, and a complete overhaul of the Setup screen views of the application which introduces a new visual theme to the software.

In addition to these major features, we have delivered a large number of smaller features like new weather effects, improvements to threshold walls, improved data compression to facilitate loading on slower internet connections, and much more. As a Prototype build, there are a small number of breaking changes which community developers should be aware of. Please check out the full list of changes below for a detailed breakdown of everything that V11 Prototype 2 brings to Foundry Virtual Tabletop!

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


## Update Highlights

We've been hard at work, making a lot of progress in the form of architectural improvements and other changes that are easy to overlook outside the development community, but which are no less important for all our users! As always, the full details of what this update contains are outlined below, but there are some key features this introduces which we hope you'll enjoy. In addition to several bug fixes and API improvements, this update introduces the first steps in our upgrade to the user interface, provides a prompt for users to opt-in to send us usage statistics, introduces Folders to Compendium Packs, includes our migration to using PIXI Version 7, and adds new features to embedded (grandchild) Documents.


### The Setup

As part of an ongoing effort streamline the UX and UI of Foundry VTT, V11P2 introduces our brand-new UI for the setup and world login pages. The new setup screen brings new functionality, a more convenient layout, responsive design, a News section, and ability for us to showcase Featured Content from our community of developers, content creators, and partners.

In addition, we have moved many of the buttons that were once repeated on individual menu items into a simple context menu. We also added a prompt to notify you that you should set an administrator password, in the event you have not. Any warnings or errors detected when launching Foundry VTT are now conveniently organized into an error log, which you can view by clicking the "Warnings" button in the top-right corner, just next to the new configuration button.

The World Login page has also gotten a style update, offering the option for both a traditional "default" display, showcasing game details and a robust world description— or a more simplified "minimal" option that only displays the log in and return to setup fields.

We're very pleased with the direction that the new UI design has taken, and are excited to finally show it off to the community— but we also know there are still changes we need to bring, so please be considerate with any criticism you may have. We hope you'll all find it as aesthetically pleasing as we do!


### Get Organized with Compendium Folders

Compendium Packs can now contain Folders! Often requested by our users and publishing partners, this long-awaited feature makes it possible to import and export Folders between your World and a Compendium while keeping your Documents organized. You can search, collapse, and expand Compendium Folders just like in the sidebar, and interact with the Documents contained within them in the same way. As an added bonus, we've also increased the maximum number of folders you can have nested in the sidebar from 3 to 4.


### Web Workers Upgrading Our PIXIes

PIXI.js, the canvas rendering engine and library that Foundry Virtual Tabletop relies upon, has released a major new version: PIXI v7. As part of Foundry VTT Version 11 we have onboarded this new version and updated our canvas rendering code to use all the new PIXI v7 features. One of the most significant areas where these improvements appear are with an overhaul of our mouse interaction workflows where we use a new events engine. This work has simplified our codebase and improved performance using canvas that now closely mirrors how events work for HTML elements. Additionally, adoption of PIXI v7 adds new powerful features that improve API capabilities for module developers and improve performance for end users.

Developers whose modules modify the Canvas will want to read up on the PIXI v7 Migration Guide.


### Updating the Grandkids

When we migrated to LevelDB during Prototype 1, we gained a lot of benefits- one of which is that it allows us to relax some of the restrictions we had to put in place on Embedded Documents. Grandchild Embedded Documents (contained on an item that an actor owns) and other nested documents can now be created, read, updated and deleted in the same way as their parent Documents without having to process the update through the parent. In short, for the non-developers: the Active Effect on your character's magic sword can now be updated directly!


### Opt-In Statistics

With the launch of Version 11, users will be prompted at first-launch to consider whether they'd like to opt-in to send us anonymous usage statistics. If enabled, Foundry VTT software will periodically send anonymized data to us for our own use. This can be toggled off from the setup configuration menu at any time, and when disabled the software will not send us any data that it has gathered.

We have always been a very privacy-focused company when it comes to our users and their data, so we'd like to take this moment to reassure everyone: that isn't significantly changing. We understand this is a very, very thorny topic, so we aren't making any changes without looking really closely at how it might impact our community.

We want you to know that we respect your data and your privacy.

In support of these changes we have updated our End User License Agreement to version 11.293, and also updated our Privacy Policy. In anticipation of some community questions about this, we've also prepared a short Q&A:

How do these statistics help?

There are a few ways that anonymous usage statistics can be beneficial both from a company and community perspective:

- Better focus for our internal testing by accommodating game systems and modules which are more popular within the community.
- We would be able to make informed development decisions regarding software compatibility.
- Ability to answer questions from the community and our publishing partners about which game systems are most popular on our service.
- Community developers could be granted insight into the popularity of their modules.

Better focus for our internal testing by accommodating game systems and modules which are more popular within the community.

We would be able to make informed development decisions regarding software compatibility.

Ability to answer questions from the community and our publishing partners about which game systems are most popular on our service.

Community developers could be granted insight into the popularity of their modules.

There are a few other ways, but this is probably a comprehensive enough list for now.

Will I be able to see what data is going to be sent?

Yes! the usage statistics will be stored locally in a JSON file which can be viewed by the server host. The file is stored at {User Data}/Logs/diagnostics.json. This step was taken intentionally to allow for transparency on what data we're gathering. Even when disabled, you can access this file to see what data we would send if you were to enable it.

`{User Data}/Logs/diagnostics.json`Will this ever become opt-out, or mandatory?

We don't ever want to force our users to report statistics about their hosted servers. We chose to make this opt-in after careful consideration of what it would mean to our community, and as a team we really don't like the idea of mandatory gathering of data.

Will this affect performance?

As this operation is a very minimal data-writing operation, it shouldn't have any impact on performance.

Are you going to sell this data to other companies?

Absolutely not. We don't think of our community members as commodities.

We hope that you will consider enabling these statistics to benefit our development efforts, but we understand completely if you choose not to! As always, what you choose to do with your Foundry VTT server is your decision.


## Known Issues


### Documents and Data

This release includes some of our preliminary work to refactor Synthetic Actors, but it is only partially completed and as a result there are some issues which community developers should be aware of. We intend to resolve these in our next release. Please see issue (8907) for further details. We felt that it was important to get this portion of the work (ActorDelta) out during the prototype phase to solicit some feedback from our community developers.

`ActorDelta`- Existing worlds migrated to v11 will potentially have non-functioning unlinked tokens if they already exist on a scene. Any newly-created unlinked tokens should function as normal.
- Any changes made to an embedded documents contained within an unlinked token will copy the entire document collection from the base actor (the same as v10 behaviour).
- Updating an Active Effect embedded in an unlinked token actor's owned Item should correctly be persisted, but the client may not update correctly currently, and may require a refresh to see the changes.


## Breaking Changes


### Documents and Data

- We now provide DataModel._initializationOrder as a generator which customizes the field initialization order for a model to be potentially different than the order of fields defined in the schema. This allows hierarchical fields like embedded collections to be initialized last.(8800)
- The instance-level DataModel.prototype._validateModel method for applying joint validation rules to a DataModel has been moved and renamed as a static DataModel.validateJoint method. Backwards compatibility is applied for the instance method until v13. (8969)

`DataModel._initializationOrder``DataModel.prototype._validateModel``DataModel``DataModel.validateJoint`
### The Game Canvas

- canvas.perception.update now requires using "v2 flags" by default. (8840)
- TokenDocument#getBarAttribute has been improved to treat an attribute as editable if it was defined by a DataModel and its maximum value is derived rather than defined in the schema. (8907)

`canvas.perception.update``TokenDocument#getBarAttribute``DataModel`
## New Features


### Architecture and Infrastructure

- World data is now compressed when transmitted to reduce the time it takes to load. (5942)
- Added a robots noindex to the template to deter web indexing of a Foundry instance. (8870)
- A number of package dependencies have been updated to their latest stable versions, such as Electron Version 23. (8897)
- Users can now optionally opt-in to sharing anonymous diagnostic data which helps us to improve the software. (8912)

`noindex`
### Documents and Data

- Add way to define a custom Combat Theme using Soundboard Playlists. (8729)
- Folders can now be dragged between a Compendium Pack and the sidebar to import or export the folder and its contained documents, while maintaining the maximum folder depth.  (8918)
- Compendiums now allow storing Folders alongside the Primary Document. (8785)
- When importing Compendium packs, documents are now imported in the same Folder structure they were stored in in the Compendium.  (8788)
- LevelDB now compacts its data files in preparation for a World close operation. (8793)
- The sight.range and detectionModes[i].range fields of the Token Document are no longer nullable. (8811)
- Folder depth in World sidebars has been expanded to a maximum depth of 4. (8896)
- Enabled subfolder searching in Compendium Pack Folders. (8916)
- We now support dragging a Document into a Compendium Folder to create it relative to that Folder (8917)

`sight.range``detectionModes[i].range`
### Applications and User Interface

- Users who have not set an administrator password will now be prompted to do so via a notification pip and an alert on the configuration menu. (3198)
- The UI and UX of application setup views has been redesigned. (5832)
- The Compendium Pack UI now renders Documents sorted by their Folder. (8787)
- Compendium Pack Folders are now able to expand and collapse like regular folders. (8789)
- Changed the UX for modification of application configuration settings to prompt the user that a manual restart is required, but allow the user to choose when to perform that restart themselves rather than automatically shutting down the server. (8910)
- Added initial support for pre-configured World Join Page Themes with an initial "minimal" theme. (8963)


### The Game Canvas

- A new "Reverse Proximity" wall sense type has been added, which allows the vision polygon to penetrate a wall only while the token is further away than a specified distance. (8807)
- A new shader-based snow and blizzard weather effect has been added. (8881)
- A new shader-based rain and rain storm weather effect has been added. (8891)
- Improved weather masking for radial and vision occlusion. (8895)


### Package Development

- To make setup and application management of games in multiple Worlds easier, the total played time for each World is now displayed and Worlds are ordered by most recently played in the Setup menu. (3536)
- Progress bars for package installations now display multiple bars when installing multiple packages at once. (6512)
- The system of PACKAGE_AVAILABILITY_CODES has been simplified and improved. The visual representation of this data has also been improved in the Setup and Module Management views. (8926)

`PACKAGE_AVAILABILITY_CODES`
### Localization and Accessibility

- Added missing localization support for Wall constants like WALL_SENSE_TYPES, WALL_DIRECTIONS, etc... (4477)

`WALL_SENSE_TYPES``WALL_DIRECTIONS`
## API Improvements


### Architecture and Infrastructure

- Expanded WorldCollections to include a folders property that resolves to all Folders that contain Documents of that type. (8902)
- Drag handling in SidebarTab has been improved, allowing the creation of pre-sorted documents. (8903)

`WorldCollection``folders``SidebarTab`
### Documents and Data

- We now perform joint model validation recursively for all embedded models as part of a DataModel#validate workflow which designates {joint: true}. (8727)
- Enhanced Compendium Pack API to support Folders. (8786)
- We now explicitly close LevelDB iterators once they are no longer necessary for better memory management. (8806)
- Expanded the ActiveEffect data model to include a statuses field which contains a set of statusId strings for different configured conditions. Statuses previously set using flags.core.statusId are automatically migrated to this set. (8880)
- Added the SchemaField#getField method which can traverse the tree and obtains the DataField definition for a given field path (NumberField, SchemaField, etc.). (8906)
- Added an EmbeddedDocumentField and refactored core embedded Document handling to accommodate singleton embedded Documents as well as embedded collections. (8964)
- Improved the way that pre-flight data model updates are validated with the addition of DataModel#updateSource(changes, {dryRun: true}) which attempts a model update using the full validation stack but does not apply the final result. (8966)
- Improved the workflow of ClientDatabaseBackend#_preUpdateDocumentArray to perform dry-run data model updates which incorporate client-side joint model validation before dispatching an update to the server. (8967)
- Exceeding folder maximum depth now raises an error rather than allowing the creation of a folder that is not visible within the UI. (8972)
- It is now possible to import Adventure documents programmatically. (8750)
- isEmpty now returns true for null values. (8826)
- Grandchild embedded documents can now be edited due to improvements with the new LevelDB architecture. (8899)

`DataModel#validate``{joint: true}``ActiveEffect``statuses``statusId``flags.core.statusId``SchemaField#getField``DataField``NumberField``SchemaField``EmbeddedDocumentField``DataModel#updateSource(changes, {dryRun: true})``ClientDatabaseBackend#_preUpdateDocumentArray``isEmpty``true``null`
### Applications and User Interface

- Migrated the Interaction layer to utilize Pixi V7's features. (8803)
- Application listeners are now bound to the .window-content element rather than its first child element. (8900)
- Tooltips can now be created in a locked state which allows them to be interacted with by Middle Clicking the Tooltip, adding data-tooltip-locked as a property on an HTML element, using the lockTooltip method to lock the currently active tooltip, or using the createLockedTooltip method to create one from scratch. (8923)
- Added optional link recommendations when highlighting text in a ProseMirror editor which will show all matching Documents in the World and Compendium Packs. (8924)
- FormDataExtended can now optionally include disabled or read only fields in the processed form result. (8879)

`.window-content``data-tooltip-locked``lockTooltip``createLockedTooltip``FormDataExtended`
### The Game Canvas

- ClockwiseSweepPolygon now provides a configuration option for wallDirectionMode which configures how wall direction is enforced for the polygon, with options for NORMAL, REVERSED, or BOTH . (8933)
- Added the initializeLightSources hook. (7412)
- Renamed PIXI.Polygon#isClockwise to PIXI.Polygon#isPositive to be more mathematically precise and abstracted away from y-axis orientation. (8771)
- Migrated all changes related to the Pixi V7 batching system (and other API related to display objects). (8801)
- Created an overlay canvas group which is not bound to transforms, useful for overlays such as HUDs. (8829)
- We now generate a hash for the fog of war texture to skip unnecessary compression and database operations. (8841)
- Improved performance of signedArea by making it a getter and removed the scalingFactor parameter. (8854)
- Line of sight and visibility filter backends can now be managed at the CONFIG level. (8859)
- Improved the modularity of the Ruler class with the addition of _canMove, _preMove, and _postMove methods. (8922)

`ClockwiseSweepPolygon``wallDirectionMode``NORMAL``REVERSED``BOTH``initializeLightSources``PIXI.Polygon#isClockwise``PIXI.Polygon#isPositive``signedArea``scalingFactor``CONFIG``Ruler``_canMove``_preMove``_postMove`
### Other Changes

- The Dialog instance that is being submitted now binds the this context of callback functions passed into the static helpers Dialog.wait, Dialog.prompt, and Dialog.confirm. (8931)

`this``Dialog.wait``Dialog.prompt``Dialog.confirm`
## Bug Fixes


### API

- Primitive extensions for Array, Set, Math, String, Number, RegExp, Date, and URL are now defined in a way that is not enumerable on instances of those types. (8890)
- World settings of type Array are now retrieved as a nested array. (8765)

`Array``Set``Math``String``Number``RegExp``Date``URL``Array`
### Documents and Data

- Base64 video files can now be extracted from FilePathFields. (8744)
- Object#equals is now used (if defined) to identify cases in DataModel#updateField where the data is unchanged from its prior value. (8965)
- Scene autoresizing should no longer occur when there is no image. (8835)
- Scene resizing should no longer override a manual grid size change. (8836)
- TextureData now adheres to the documented type for label. (8838)
- Fixed a bug in fromUuidSync so it will no longer always return a compendium index entry even if the requested document is cached locally. (8883)
- SchemaField#toObject(false) should no longer throw an error when the initial field value is null. (8932)
- Fixed some bugs with SchemaField and ObjectField defined as non-required or nullable when updating those fields from undefined/null to a non-nullish value or vice-versa. (8934)

`FilePathFields``Object#equals``DataModel#updateField``TextureData``label``fromUuidSync``SchemaField#toObject(false)``SchemaField``ObjectField`
### Applications and User Interface

- Foreground tiles should no longer be selectable while on the background layer. (8700)


### The Game Canvas

- Calling updateSource in TokenDocument._preCreate now modifies transacted creation data for unlinked tokens. (8761)
- The depth rendering of the tiles has been updated to ignore filters. (8623)
- this.radius should no longer be incorrectly undefined in PointSourcePolygon#createPolygonWithAttenuatedThreshold. (8766)
- Fixed a bug where creating a light with a light animation would not display the animation until the scene was reloaded. (8780)
- Fixed a bug where light had no effect on token vision. (8781)
- Visibility testing for Tokens through new threshold Walls should now function as expected now that the combined polygon has the correct bounds. (8782)
- Fixed a bug where fog would not be committed if at least one vision source didn't change. (8816)
- Deleting Tokens with vision that aren't controlled and Tokens that emit light should now refresh the vision as expected. (8817)
- A fog update is now forced if a light-emitting Token is moved even if the Token is controlled (8818)
- The logic used to determine whether Fog Of War needs to be committed when rendering a vision update has been improved. (8823)
- Tile.prototype._createTextureData should no longer mangle the pixel data. (8831)
- We now only attempt to call layer.selectObjects or layer.targetObjects for PlaceablesLayer instances, rather than for all InteractionLayer instances. (8834)
- Updating a tile with a new scale (x and/or y) should now update the bounds in the quadtree. (8845)
- An issue which caused WEBM animations to have an alpha/transparency issue and cause semi-transparent areas to have a black matte has been resolved. (8848)
- Increased default priority of CanvasAnimation#animate to PIXI.UPDATE_PRIORITY.LOW + 1 (8853)
- Added the ability to clear the cached result for PIXI.Polygon#isClockwise. (8855)
- The global light source now has an explicit attenuation of zero. (8864)
- Perception should now be properly refreshed when the roof state of an overhead tile is changed. (8869)
- Elevation and sort changes should now trigger a perception update. (8873)
- ClockwiseSweepPolygon#_testCollision should now handle invisible walls with active roof as expected. (8885)
- Drag-select should no longer select Tiles on the inactive Tiles layer. (8939)
- PolygonMesher no longer throws an error when triangulating an empty polygon with the interleaved option. (8819)
- The complete circle test for point source shapes has been improved. (8849)

`updateSource``TokenDocument._preCreate``this.radius``PointSourcePolygon#createPolygonWithAttenuatedThreshold``Tile.prototype._createTextureData``layer.selectObjects``layer.targetObjects``PlaceablesLayer``InteractionLayer``priority``CanvasAnimation#animate``PIXI.UPDATE_PRIORITY.LOW + 1``PIXI.Polygon#isClockwise``ClockwiseSweepPolygon#_testCollision``PolygonMesher``interleaved`
### Package Development

- FilePicker.uploadPersistent should no longer throw a warning about storing data in your module folder when uploading to the persistant data folder. (8863)
- Ensured that worlds can now be created for a System that has a Verified status. (8893)
- A typo in the Document initialization failure error text has been corrected. (8894)

`FilePicker.uploadPersistent`
### Localization and Accessibility

- Macros with long alt text should no longer cause visual artifacts in the hotbar. (8768)


## Documentation Improvements


### Documents and Data

- Updated Compendium UUIDs to handle mixed Documents. (8886)


### The Game Canvas

- Updated documentation for PointSource#shape to better delineate that a shape could be a PointSourcePolygon or a PIXI.Polygon. (8820)

`PointSource#shape``PointSourcePolygon``PIXI.Polygon`