# Release 11.295 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.295

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.295


## Version 11 Development


##### April 14, 2023


## Foundry Virtual Tabletop - Version 11 - Developer 2 Release Notes

Be certain to carefully back up any critical user data before installing this update.

Welcome to the Version 11 Developer 2 release of Foundry Virtual Tabletop! Our team has invested extensively into the technical foundations of our software with this release that improves the architecture, performance, and user experience of Foundry VTT. Our focus during the Development phase involves further refining prototype features and solidifying the API based on feedback from users in our Developer community. If you are a Module or System developer, this is the time to test your packages in Version 11 in order to provide us with feedback and request any API changes that would make your lives easier.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights


### Packed with Compendium Pack Improvements

Cody's deep dive into the Compendium tab continues! Compendium Packs now support a custom banner image and can be organized into folders like normal Documents. It doesn't stop there though, it's also now possible to filter by Document type, search by name, and we've added the ability to toggle between alphabetical and manual sorting for Packs and folders.


### Homemade Modules

This release includes the first iteration of our Module Maker! Whether you want to share content between your worlds or are a content creator who wants to skip some of the tricky parts of making a module this new tool will make your life a lot easier. You can create as many modules as you'd like, add Authors, Compendium Packs, and Dependencies and Foundry will take care of the complicated parts for you! If you don't want to make your own modules, store bought will do fine.


### Door Slam Jams

Shut the front door! Doors can now play audio when opening, closing, locking, or attempting to open a locked door? You've got that right! By default we're shipping 9 sets of sounds for fantasy, modern, and sci-fi doors with an easy to use API for adding even more sounds.


### Stylish Setup

Each tab of the Setup screen can now be customized to display in a gallery, tile, or detail view to support multiple ways of perusing your content. We're also introducing the first phase of our Setup theme framework which currently allows you to change between two themes. We'll continue to expand and improve this framework with more themes and options in later V11 releases.


## Breaking Changes


### The Game Canvas

- Accessing #actor#uuid for unlinked Tokens now returns the UUID of the synthetic Actor rather than the TokenDocument that governs it. (5381)
- Introduced the visibility field for Compendium Pack definitions which allows more granular control over which User roles can see that pack in the Compendium sidebar with backwards compatible support for previous visibility settings. (8284)
- Deprecated the old-style "Pending Operations" for the Canvas and replaced them with new-style Render Flags where appropriate. (9092)
- Improved API design for the CanvasDocumentMixin to avoid automatically adding an associated PlaceableObject in the canvas layer. (9106)
- Simplified and improved the logic used to manage Token animation by taking advantage of the new TokenMesh data structure. (9172)
- The WeatherContainer instance at canvas.weather.weather is now removed and combined with the weather effects layer directly. Backwards compatible support for canvas.weather.weather is retained by redirecting back to the WeatherEffects layer instance. (9183)

`#actor#uuid``TokenDocument``visibility``visibility``CanvasDocumentMixin``PlaceableObject``TokenMesh``WeatherContainer``canvas.weather.weather``canvas.weather.weather``WeatherEffects`
## New Features


### Architecture and Infrastructure

- We now build the precompiled binaries for LevelDB and Classic Level using a lesser version of the GLIBC library to support a wider range of environments. This should, for example, resolve issues with using V11 on Raspberry Pis. (8847)


### Documents and Data

- Doors can now be configured with different sound effects which can be extended by systems and modules by adding them to CONFIG.Wall.doorSounds. (653)
- Systems can now easily configure which attributes are available for tracking on a Token by using the CONFIG.Actor.trackableAttributes property. (8726)
- Redesigned the Compendium sidebar tab to behave more like a SidebarDirectory. (9035)

`CONFIG.Wall.doorSounds``CONFIG.Actor.trackableAttributes``SidebarDirectory`
### Applications and User Interface

- Improved the design for how a single Compendium Pack is rendered. (9037)
- Added a way to toggle the sort mode of top-level directory entries. (9190)
- Updated the UI of the Compendium Sidebar to allow for Folders and more user control. (9132)
- Added support for searching to the Compendium Directory. (5809)
- Added support for different View Modes in the new V11 Setup Theme which allow the Worlds, Systems, and Modules tabs to use a Gallery, Tiles, or Details view. (9018)
- The Decline and Accept buttons are now in the same order in the License and Usage statistics prompts. (9152)
- Updated FontAwesome to version 6.4.0. (9174)


### The Game Canvas

- We now use a single PIXI.Graphics object for square grids on the same model as hex grids. (9180)
- Improved the cached rendering framework by allowing extra options during construction (and thus can choose the best texture format for a given situation). (9048)
- Updated the SpriteMesh to be compatible with PIXI 7.2. (9143)

`PIXI.Graphics``SpriteMesh`
### Package Development

- Added support for World and System thumbnail images. (8913)
- Added a workflow and UX for generating thumbnail images for Scenes packaged into an Adventure document which places those created thumbnails inside the Module which owns the Adventure Pack. (8491)
- It is now possible to create a Module on the Setup screen which makes it easy to share content between Worlds. (8957)


## API Improvements


### Documents and Data

- It is now possible to pass arbitrary arguments to script macros and capture their return values. (7184)
- Updated the PDF.js library to 3.4.120. (8777)
- Active Effects added by an Item can now be configured to transfer to the Actor or remain on the Item. (8978)
- Added migration path for the actorData property. (9131)

`actorData`
### Applications and User Interface

- Added support for registering a custom Application to view the contents of a CompendiumCollection. (8291)
- Added support for multiple Setup themes starting with options which only change color preferences without more advanced styling or layout alterations. (9019)

`CompendiumCollection`
### The Game Canvas

- Addressed a number of issues impacting unlinked Token Actors using our new database architecture. (6892)
- Actor#_onEmbeddedDocumentChange now calls TokenDocument#_onUpdateBaseActor and Tokens are always refreshed when their Actor is updated. (8812)
- Improved control over the sorting of Primary Canvas Objects. (8995)
- Added the MeasuredTemplate#_computeShape protected method to enable template subclasses to exert control over the way that measured template geometries are computed. (9101)
- Generalized the new RenderFlags class using a RenderFlagMixin which is applied to both PlaceableObject and PerceptionManager classes. Render Flags should be applied using an app ticker function instead of in DisplayObject#render which can have undesirable side-effects. (9104)
- Added canvas.dimensions.distancePixels as a precomputed ratio between grid size and grid distance. (9128)
- Improve how Primary Canvas Objects are handled and move some of their functionality to their parent object.  (9133)
- Provided API entry points for Weather Effects to support an additional mask (like a terrain mask). (9134)
- Added support for CanvasAnimation.animate to understand how to animate a Color instance by interpolating from the current color value to a new target value. (9171)

`Actor#_onEmbeddedDocumentChange``TokenDocument#_onUpdateBaseActor``MeasuredTemplate#_computeShape``RenderFlags``RenderFlagMixin``PlaceableObject``PerceptionManager``DisplayObject#render``canvas.dimensions.distancePixels``CanvasAnimation.animate``Color`
### Other Changes

- It is now possible to cancel a CRUD operation by returning false from the associated _pre method. (9135)
- Updated PIXI to version 7.2.3 (stable) and SmoothGraphics to version 1.1.0 (stable). (9138)
- Refactored the Directory tree building logic from SidebarDirectory to the new DirectoryCollectionMixin to support non-Documents like Compendium Packs. (9175)
- Improved upon the foundry.utils.expandObject method to only attempt expansion for basic objects and to treat advanced objects like class instances as already-expanded. (9178)

`false``_pre``SidebarDirectory``DirectoryCollectionMixin``foundry.utils.expandObject`
## Bug Fixes


### Architecture and Infrastructure

- Assistant Gamemasters can no longer ban a Gamemaster-level user. (9069)
- Added a helper method to get better OS details in Linux environments with a fallback to os.release(). (9139)

`os.release()`
### Documents and Data

- TokenDocument#getActor should now correctly validate actorData. (8711)
- TokenDocument#getActor should no longer throw an error when schema validation succeeds. (8712)
- Game world source data should no longer be mutated when initializing world Documents. (8792)
- Invalid Embedded Documents should no longer prevent a Scene from rendering. (8844)
- Roll Table results with blank weights should no longer throw an error during normalization. (8956)
- Status changes of Active Effects should once again be dispatched to the Token. (9103)
- Removing a Combatant no longer throws an error. (9127)

`TokenDocument#getActor``actorData``TokenDocument#getActor`
### Applications and User Interface

- Token HUD resource inputs should now be editable even if the resource is defined via a DataModel. (8715)
- Resetting a Token's preview should no longer fail when the configuration window is closed without saving when the token/ambient light document was updated while the window was open. (9067)
- The preview state of Token/Ambient Lights should no longer prevent updates from being persisted. (9070)
- Creating and deleting users on the User Management page should no longer throw an error. (9112)
- Selecting a Token should once again raise it to the top visually. (9116)
- It is no longer possible to begin multiple "update all" workflows at once. (9156)
- Modifying a selected tile then hovering it should no longer throw an error. (9164)

`DataModel`
### The Game Canvas

- Measured Templates should no longer reveal partially obscured Tokens. (8866)
- Toggling the Blinded status effect should no longer initialize vision needlessly. (8911)
- Improved the workflow for activating/deactivating Vision Modes. (8930)
- Updating an Actor should now cause its Prototype Token configuration to be rerendered. (9066)
- Invisible tokens should once again be rendered with the invisibility shader. (9102)
- Re-opening Token character sheet via double-click (while it is already open) should no longer throw an error. (9110)
- Editing a Drawing with a default fill texture should no longer throw an exception. (9114)
- Moving a drawing on the Canvas should correctly update its position again. (9117)
- Updating a Tile's texture should no longer throw an error. (9122)
- Notes on the Canvas should once again be made visible by toggling the Toggle Notes Display. (9123)
- Corrected an issue that resulted in the incorrect Route Prefix being used for asset paths. (9125)
- Fixed an issue that caused the Canvas to fail to initialize and throw an error. (9126)
- Added compatibility support for the perception manager obsolete flag forceUpdateFog with a deprecation warning. (9137)
- PointSource active and layer states are now updated during initialization. (9142)
- Deleting a tile after resizing should no longer throw an error. (9161)
- Newly created CanvasDocuments now have their PlaceableObject.draw method called and awaited before forwarding on to PlaceableObject#_onCreate for post-creation steps. (9169)

`forceUpdateFog``PointSource``active``layer``CanvasDocument``PlaceableObject.draw``PlaceableObject#_onCreate`
### Package Development

`BasePackage``name``path`
### Localization and Accessibility

- Corrected a localization error on the Return to Setup button. (9113)
- Removed the ActiveEffectConfig#title override now that the ActiveEffect Document uses the name field like other Document types. (9118)
- Core Translation CSS should once again load on the Setup screen. (9181)

`ActiveEffectConfig#title``ActiveEffect`
### Other Changes

- A client setting's onChange handler should now only be called when something has actually changed. (9051)
- When importing from a Compendium Pack via the WorldCollection#fromCompendium method source IDs are added when addFlags is true (the default behavior) and when exporting to a Compendium Pack via ClientDocument#toCompendium source IDs are stripped if the clearSource parameter is true (the default). (9097)
- Corrected an issue that could occur when passing a Document as the target to a ForeignDocumentField. (9166)

`onChange``WorldCollection#fromCompendium``addFlags``true``ClientDocument#toCompendium``clearSource``ForeignDocumentField`
## Documentation Improvements


### Other Changes

- The WeilerAthertonClipper is no longer able to mutate the points of the subject polygon by default but can be configured to do so. (8991)

`WeilerAthertonClipper`