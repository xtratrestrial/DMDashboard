# Release 11.292 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.292

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.292


## Version 11 Prototype


##### January 18, 2023


## Foundry Virtual Tabletop - Version 11 Prototype 1 Release Notes

Be certain to carefully back up any critical user data before installing this update.

We're extremely excited to share this update with the community. Version 11 Prototype 1 brings a number of new features, bug fixes, and improvements to Foundry Virtual Tabletop and is the first step in our development cycle for Version 11. Our overall goals for Version 11 include new features to strengthen Compendium Packs, improvements to Data Storage including a completely new Database engine to replace NeDB, and broad improvements to UX/UI features with a focus on consistency and stability. Please check out the full list of changes below for a detailed breakdown of what was changed in this update!

WARNING:Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


## Update Highlights

This Prototype build contains a wide variety of minor tweaks here and there, and in many places small changes that could have profound benefits. There are so many interesting new features that it was difficult deciding what was most deserving of attention! While there are some obvious big-ticket items, there are so many exciting new features, so before we get into the major highlights here are a few honorable mentions:

- Objects placed on Scenes will now attempt to hold their position when scenes are resized.
- UI improvements for Playlists and Rollable Tables.
- A new Support and Issues UI displaying errors and warnings.
- Overall UI improvements for consistency and clarity.
- New "Fog" weather effect.
- and so much more...

Version 11 Prototype 1 carries some pretty big changes to the underlying parts of Foundry VTT. As we look forward to our next prototype build, the major changes highlighted here will be built upon and expanded with further improvements. Small changes aside, we want to highlight some of the more exciting, bigger features this update includes:


### NeDB is Dead, Long Live LevelDB

We have anticipated a time when we would need to retire NeDB as our database provider for some time. We're really excited to report that we have successfully shifted backend database storage to use LevelDB, including support for Sublevels. Here's the key highlights and benefits:

- Migration of existing DB files is automatic and non-destructive (though any changes made after the migration will only apply to the LevelDB version of the data)
- Improved performance in read/write and embedded document operations
- Sublevels allow for specific changes to be made without having to rewrite entire lines of the DB
- Previous API calls for DB operations should still work as expected (except for specific getDocuments() calls using complex query parameters.)

`getDocuments()`
### Subtypical

Want to create a module that makes journal pages for quests? A new type of actor with its own data? Modules can now define subtypes of documents. By defining the documentTypes field in manifests, you can add new document types to the document creation dropdown selector. This mirrors the functionality of defining subtypes of Documents in system template.json files.

`documentTypes`- Documents support definition of a universal "base" subtype, and provide fallback sheets for cases where a module providing this data might not be available (whether disabled or otherwise)
- Disabling a module that provides subtypes notifies users that a specific number of documents provided by that module will become unavailable


### Pretty Little Packages

We've made some pretty awesome changes to package handling. Including new values for the Relationships field in manifests, elevated UI/UX for error handling, and more:

- Persistent Storage. Packages may now declare "persistentStorage": true in manifest JSON files, which will treat any data stored within a "storage" subfolder in the package folder as protected. Any data stored in that folder will not be deleted when the package updates. It is important to note here: uninstalling a module with persistentStorage will still remove that persistent data. This mechanism exists solely to persist data through updates.
- Relationship Improvements. Packages can now define relationships.recommends which serve the function of installing optional, not mandatory, dependencies. Additionally, relationships between packages received some UI updates to show the reason a dependency may be missing or inactive.

`"persistentStorage": true``persistentStorage``relationships.recommends`
### Harder, Better, Faster, Fogger

We've been hard at work in the lab testing a variety of fog machines for photorealism and performance and we've emerged with some pretty awesome fog of war changes:

- A new optimized texture-based approach for fog of war significantly improves performance of fog of war rendering
- Worker threads are now being used for fog of war rendering
- Significant FPS improvements related to light and fog rendering
- Framework laid for the future of a manual fog-of-war implementation


### Windows

No, not the operating system. We are expanding the capabilities of Walls to allow configuration of proximity-based activation thresholds. This allows walls to be impenetrable at a distance but transparent at close range. We think this is an innovative way to model windows or other apertures for top-down VTT gameplay. Additionally, walls which configure a proximity threshold can cause perception to be attenuated so you perceive further the closer you are to the wall. It's amazing stuff and feels really satisfying to use. Thanks are due to Caewok who worked with our team to workshop and develop this improvement.


### Electron and Node

We've updated a lot of dependencies in the core framework, including all the usual suspects such as Pixi, ProseMirror, and more-- but we've also updated our Node requirement and Electron as well. Foundry VTT (node-hosted) will now require Node 16 at a minimum (18 recommended), but moreover we have moved to Electron 22 which brings support for "V8" Javascript features under chromium version 108. V11 will require users who rely on the electron client to uninstall and reinstall the client to receive this electron update.


## Breaking Changes


### Architecture and Infrastructure

- Foundry Virtual Tabletop now requires Node.js version 16. (8737)
- We have enacted a number of API deprecations which were slated to go into effect with V11, including changes to Roll.evaluate, and other async changes. (8757)

`Roll.evaluate`
### Documents and Data

- The logic for handling the initial value of StringField now allows for blank, null, or undefined initial values. (8740)

`StringField`
### The Game Canvas

- We have improved the documentation and design of hex grid manipulation methods, including a number of refactors. Please see the github issue for further information. (8508)


### Other Changes

- _canDragDrop should now be checked before binding drop listeners in Applications. (8194)
- The "setup" Hook previously occurred before Documents and Compendium Packs were available within the world. It has been repositioned to be more ideally positioned after document data is available but before UI/Canvas is rendered. (8510)
- The worker framework has received improvements and now supports dynamic script imports and transferable objects. (8658)

`_canDragDrop`
## New Features


### Architecture and Infrastructure

- The technology used for database persistence has been migrated from NeDB to LevelDB. (5065)
- A number of dependency packages have received updates, including Electron 22. (8497)
- Server-side calls to make and remove directories have been modernized to use fs.promises instead.

`NeDB``LevelDB`
### Documents and Data

- Resizing a Scene will now attempt to reposition all placed objects within that Scene. Walls, tokens, lights, and more should no longer be displaced by changes to Scene size. (8698)
- The Fog of War framework has received some significant improvements in the form of new high-performance methods for texture extraction and persistence. (7231)
- Rollable Tables now use an inline Prosemirror editor for their Description field. (8689)
- Active Effects now provide a rich Description field for each effect. (8731)


### Applications and User Interface

- A new "Close All Doors" button has been added to the walls menu. Predictably, clicking this button will closes any open doors for the current scene. (1437)
- The Wall Scene Controls icon has been updated to a new icon for visual clarity. (2196)
- The one-way wall direction indicator icon should now be more visible. (3244)
- Rollable Tables can now be rolled from an option in their right-click context menu. (5750)
- Dropping a Rollable Table onto the macro hotbar now generates a macro to roll from the table. (5756)
- If no roll formula has been set for a Rollable Table, it will now automatically set the formula when attempting to roll. (7854)
- The default sheet for a document type can now be configured without first opening a document of that type. (8238)
- The header of a Rollable Table has received a slight UI update and is now more prominent and remains at the top of the table's view for easier use in longer Rollable Tables. (8361)
- The description for the Display Roll to Chat? toggle on Rollable Tables has received an update to its text to offer deeper clarity on its purpose. (8526)
- We have added a minimal, fallback Document Sheet that is rendered for Documents when no sheet has been registered for a specific sub-type. (8572)
- Volume controls for playlists are now a uniform size and no longer change their length based on the duration of the playing audio track. (8609)
- Browser and Client-related warnings and notifications are now accessible via a new Support & Issues tab. (8662)
- The missing class in the Adventure builder has been improved to provide a more visually distinct indicator when a Document is missing in the world. (8681)
- Volume Controls on the playlist tab have received several small UI and UX improvements. (8706)
- Audio Controls now offer a number of tooltips clarifying their use. (8709)
- The chatlog will no longer jump to the newest entry when a user has scrolled up to review chat history. A "Jump to Bottom" button has been added. (1408)
- "The Start of Combat" sound alert should no longer overrun other sound effects provided by Combat Themes. (8664)
- A preview sound button has been added to combat tracker alerts. (8665)

`Display Roll to Chat?``missing`
### The Game Canvas

- Walls have a new preset for Windows, similar to Doors. Windows become active or inactive within a token's field of vision based on proximity. This allows for attenuation where the visible distance through the Window changes with respect to proximity within that threshold. (7324)
- Wall controls now include a convenient button to make a Window wall with a small sight and light threshold. (7324)
- Canvas Windows now include a control icon visually distinct from the Door icon, which can be used for opening and closing them.(5025)
- PointSource and LightSource have received several enhancements to address difficulties with programmatic creation of those objects. (8561)
- Fog of War rendering has received significant refactoring to improve rendering and performance. (8581)
- We have added a new shader-based weather effect for Fog. (8746)
- To improve compatibility and correct some driver-based issues related to handling of shaders on some graphics cards, the PRNG function for shaders has been updated. (8747)

`PointSource``LightSource`
### Package Development

- Documents now provide messaging to improve discoverability if they have been rendered invalid as a result of disabling a Module which provided their subtype. (8571)
- Packages now display their verified status and we have downgraded the severity of compatibility warnings for packages that may be unverified for a specific build but are verified within the same generation. (8576)
- Systems which define relationships now have those dependencies enabled and enforced when launching worlds. (8588)
- Packages may now define persistentStorage: true in manifests, allowing the package to be updated without deleting files located within package-id/storage/. (8590)
- Package manifests now support relationships.recommends, which can be used for declaring non-mandatory dependencies. (8649)
- Manifests may now declare RelatedPackage.reason, it is intended that developers use this field to offer a human-readable reason for specific package relationships and will be displayed on parts of the package installation and management UI. (8650)
- Package-related warnings and notifications are now displayed on the new Support & Issues tab. (8663)
- The display of relationship tags on the Setup page has been improved, offering clarity on whether a required package is missing and why. (8728)
- The path field can now be omitted from Package manifest compendium declarations, if omitted it will be assumed the packs reside in package-id/packs/. (8741)

`relationships``persistentStorage: true``package-id/storage/``relationships.recommends``RelatedPackage.reason``path``package-id/packs/`
### Localization and Accessibility

- Mouse-focused event handlers have been replaced and now use Pointer Events, improving accessibility for screen readers and laying groundwork for future improvements for touch-based devices. (5511)
- Document sub-types have been adjusted to accommodate module provided sub-types. (8568)
- Text labels in a number of Applications have been improved for clarity and consistency. (8618)


## API Improvements


### Documents and Data

- systemDataModels has been deprecated in favor of dataModels. (8569)
- SystemDataField has been deprecated in favor of TypeDataField. (8570)
- hasSystemData has been deprecated in favor of hasTypeData. (8603)
- Validation errors have received some improvements. The validation pipeline now provides more detailed information by propagating a richer object, containing useful methods for inspecting and retrieving the errors. (8605)
- Documents now provide a universal base sub-type that preserves any existing package data (8647)
- If a Document's system field is a DataModel, it can now use its own data preparation methods, which will be called as part of the Document preparation workflow. (8708)

`systemDataModels``dataModels``SystemDataField``TypeDataField``hasSystemData``hasTypeData``base``system``DataModel`
### Applications and User Interface

- Sheet registration now supports canBeDefault as a parameter to control whether it the newly registered sheet can be set as a default for a given Document sub-type. (7401)
- The cssClass paramater of a tooltip can now be set for the hovered element using the data-tooltip-class attribute, allowing for improved localization among other things. (8191)
- Invoking Application#render with force=true now applies focus=true as well, unless explicitly supplied as false. (8631)
- The new Application#_waitForImages method allows subclasses to wait for all images to load before proceeding with some action. (8651)
- DocumentSheet subclasses have been refactored to shift _onEditImage from those subclasses into the base DocumentSheet. (8652)
- Sheet registration now provides a canConfigure parameter that controls whether it is available to be selected by a user as the sheet for a given Document. (8668)
- A new core sheetLock flag has been implemented and can now be set on Documents to prevent their sheet from being changed via the UI. (8669)
- Text alignment for tooltips are now handled via the text-center, text-left, and text-right classes instead of an inline style. (8705)
- The Color class has received some improvements to its real-time performance. (8742)

`canBeDefault``cssClass``data-tooltip-class``Application#render``force=true``focus=true``Application#_waitForImages``_onEditImage``canConfigure``sheetLock``text-center``text-left``text-right``Color`
### The Game Canvas

- The rain particle emitter has been improved by calibrating the spawn frequency for the particle lifespan, allowing us to introduce some optimizations and minor performance gains. (8511)
- Fog of war texture extraction has been optimized and now uses asynchronous readPixel, and handles compression in a worker thread. (8580)
- The weather framework has been improved and can now handle handle shader-based effects. (8666)
- The as part of improvements to the weather and effects API, support has been added for shader-based and quad-based meshes which are not bound to a texture. (8667)
- The weather framework can now manage multiple effects simultaneously. (8674)
- The Weiler-Atherton algorithm is now used for more efficient intersection and unionization of Polygons with Rectangles or Circles. (8749)
- New geometric utility methods have been implemented to extend the functionality of PIXI.Polygon, PIXI.Circle, and PIXI.Rectangle. (8748)

`readPixel``PIXI.Polygon``PIXI.Circle``PIXI.Rectangle`
### Package Development

- We added the new documentTypes field to package manifests that can be used to declare the document sub-types that a package provides. (8567)
- Modules may now designate the fields of any sub-type-specific data they provide that require HTML sanitisation on the server-side. (8680)

`documentTypes`
### Localization and Accessibility

- game.i18n now provides getListFormatter, allowing retrieval of pre-configured list formatters from a centralised location. (8632)

`game.i18n``getListFormatter`
## Bug Fixes


### Documents and Data

- We have corrected a bug which caused system-provided DataModel sanitization methods to fail to appropriately apply in cases of Document creation containing Embedded Document data. (8713)

`DataModel`
### Applications and User Interface

- Tooltips should now appear as expected when hovering over an inner element within a Tooltip. (8685)


### The Game Canvas

- Ambient Sounds should now render their radius on the canvas once again. (8697)
- An issue which caused line of sight testing to fail when tested with a range of 0 and with global illumination activated has been resolved. (8752)


### Package Development

- The Module Management configuration application now shows modules even if their compatibility.minimumVersion is not fulfilled, with an indicator that they cannot be enabled and why. (8557)

`compatibility.minimumVersion`