# Release 9.224 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.224

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.224


## Version 9 Prototype


##### September 17, 2021


## Foundry Virtual Tabletop - Version 9 Prototype 2 Release Notes

Hello and welcome to the exciting release of Foundry Virtual Tabletop Version 9 Prototype 2, another prototype release in the Version 9 series of releases. The release of V9p2 marks the first official implementation of support for playing cards in Foundry VTT, and brings the prototyping phase for V9 to a close! We're eagerly looking forward to moving into the API development phase for V9 to add some polish to the awesome features these two releases have introduced.

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you chose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

Be certain to carefully back up any critical user data before installing this update.


## Update Highlights

This release is an update on the Prototype channel, and introduces a variety of new features! During this release our focus was on implementing the feature most voted for by our Patreon subscribers: Card Support. In addition to spending the majority of our development time focused on that implementation, we also took a little time to finish up some things that didn't get polished off in time for V9p1 and detoured a little to fix some bugs reported in both V9p1 and 0.8.x.


#### Card Support

This update introduces the first iteration on Card Support for Foundry VTT and brings a lot of great features the community requested as part of the scope. This introduces a new "Cards" sidebar tab which can be used to manage available decks, hands, and piles of cards- all of which can be assigned to users in your game using the standard approach to permissions. While the UI and UX still needs a bit of polish, out of the gate the Cards UI supports actions for passing cards between hands and other types of card collections, mechanics for dealing cards to one or more players, and ability to reset the deck- returning cards from all hands back to the deck they originated from. For developers: game systems can customize the data of cards through the usualtemplate.json approach, and custom sheets can be registered for any Cards instance.  customizable data structures for cards (which the development community specifically sought).

`template.json``Cards`In no particular order, the Cards system presently supports the following actions:

- Perform all standard Document operations (create, edit, delete, import, export, etc.) on card stacks, whether they are decks, hands, or piles.
- Configure decks with descriptions, default dimensions and rotation of cards (for potential future use of canvas interactions), and the default image to display for the back of each card.
- Shuffle decks to provide a pre-arranged randomized order to the cards.
- At any time, the reset button can be used on deck sheets to return all cards belonging to this deck back to the deck itself, regardless of whether they are presently in hands or other piles.
- Deal a number of cards to one or more specified players from the top or bottom of the deck, or randomly from anywhere within the deck. You can also deal cards face down!
- From a hand window, draw a number of cards from a specified source- whether it's a deck or a different pile of cards. You can also pass cards to another player or deck (if you have permission to do so).
- Any card pile can also be shuffled, similar to a deck - for playing card games that have arbitrary piles of cards such as a 'discard' pile, and supports passing cards from that pile to specific players.
- All of these functions are, as always, exposed through the Foundry VTT API for community developers to do with as they please!

We also took the time to prepare and package images for two different Foundry VTT-themed playing card decks, each with enough images to support a standard 54-card deck. If you'd like to try out these pre-built decks, you can download and import the following JSON files:


#### API Improvements and UI Changes

During the testing phase for V9p1 we heard from a number of devs about changes that could be made to open parts of the API in ways that could provide more efficient paths to accomplishing features of their their systems and modules. As a result we implemented a number of API changes to expose new data to aspects of the Document schema or the canvas, and also to provide new interfaces for some existing API features. One particular feature we'd like to highlight is the introduction of the keepId option for Document and Compendium import and export functions. This allows documents to maintain a unique id regardless of where they are stored for convenient updating.

`keepId`In addition to API improvements, we've begun the process of migrating a large number of CSS declarations which were individually declared previously to CSS variables. By introducing a broad amount of CSS variables commonly used throughout the UI it is our hope that community developers will have an easier time presenting a more unified look when modifying the UI. We've also refactored the "HUD" section of the UI to use a flexbox container, allowing for the rendered UI menus to be a little more conscious of where eachother are and reduce cases where certain UI elements might overlap inconveniently.


#### Continued Lighting and Vision Improvements

Version 9 Prototype 1 focused pretty heavily on retooling the lighting engine to introduce Adaptive Lighting, but as always we couldn't finish everything before release, so we shifted a number of items to this Release so we could spend some more time on them. While we don't introduce any new, flashy lighting features as part of this version, a lot of changes have been made to improve performance and correct for issues related to lighting and vision from V9p1.

Please stay tuned as we move into the API Development phase and start fine-tuning these features and more!


## Breaking Changes


### Documents and Data

- AmbientSound#data#type has been deprecated in favor of providing an individual boolean flag for whether the sound is constrained by walls (or not). (5792)
- AmbientLightData#type has been deprecated in favor of providing individual boolean flags for walls and vision. This allows lights to be separately configured for whether they are constrained by walls or provide additional vision. (4341)
- Refactored the entity type and folder type Constants to align with the Document schema. This shifts CONST.ENTITY_TYPES to
        CONST.DOCUMENT_TYPES and CONST.FOLDER_ENTITY_TYPES to CONST.FOLDER_DOCUMENT_TYPES, and adds support for load order. (5745)
- game.system.entityTypes has been deprecated in favor of game.system.documentTypes to be more consistent with modern naming conventions. (5753)

`AmbientSound#data#type``AmbientLightData#type``CONST.ENTITY_TYPES``CONST.DOCUMENT_TYPES``CONST.FOLDER_ENTITY_TYPES``CONST.FOLDER_DOCUMENT_TYPES``game.system.entityTypes``game.system.documentTypes`
### Interface and Applications

- EntitySheetConfig has been renamed to DocumentSheetConfig and a deprecation path and warning have been provided for the old class name. (5827)
- The Sidebar has been refactored to simplify the approach to rendering sidebar document directories, and now reuses templates, translations, and code. (5787)
- Font size declarations have been migrated and now use rem units. (5795)

`EntitySheetConfig``DocumentSheetConfig``rem`
### Dice System

- Explicit /publicroll and /pr commands have been added. These indicate a roll that should always be public regardless of the global Roll Mode setting. (5833)
- The default behavior for the Dice roll API has been converted to async=true. Unless the caller explicitly passes async=false a warning will be logged to the console. (5782)

`/publicroll``/pr``async=true``async=false`
### Other Changes

- The deprecations of functions scheduled for removal in v9 has been completed, removing support for the functions and attributes which were previously deprecated in v8. (5783)
- The deprecated entity localisation strings have been removed. (5789)

`entity`
## New Features


### Card Support

- Implemented the first version of Card Support, offering support for creation of Card Decks, Hands, and Piles which can be used to hold cards, this model supports basic card functionality with more UI and UX changes to come. (36)
- Implemented the Cards document and corresponding CardsData schema which models a stack of cards to represent a deck, hand, or arbitrary pile. (5730)
- Implemented the Card document and corresponding CardData schema which models a single card embedded within a Cards Document. (5731)
- Implemented standard interaction APIs for the Cards and Card documents to handle manipulating cards and moving them between documents. (5733)
- Implemented common dialog applications for card transactions including Cards#deal, Cards#draw, and Card#pass. (5848)
- Provided configuration sheets for creating and editing collections of Cards, including support for configuration of a default "deck" type. (5821)
- A basic configuration sheet for editing an embedded Card Documents within decks, hands, and piles has been provided and allows editing the details of the card. (5822)
- Provided a UI application for displaying a Cards document with the types "pile" or "hand". (5823), (5824)
- Systems may extend the Cards stack and Card document definitions with game system data to empower game system definitions where cards play a considerable mechanical role. (5755)
- Systems may register custom document sheets for the Cards document, and register the default UIs to be used for each of the "deck", "pile", and "hand" types. (5825)
- Created and included two sets of custom-built Foundry VTT-themed card decks, one intended for 'dark-mode' use and another intended for 'light-mode' use. Each deck features images for a standard 54-card deck as well as a custom card back image. These images can be found in ui/cards.

`Cards``CardsData``Card``CardData``Cards``Cards#deal``Cards#draw``Card#pass``ui/cards`
### Architecture and Infrastructure

- Updated internal dependencies to Electron 14, providing Chromium 93 and Node 14.17.0. (5847)
- The configuration option "Compress Static Files" uses a middleware to reduce the transfer size of static content, resulting in an overall improved transfer rate for files which are the same every time they're served. (5712)
- Indexing of S3 listings now utilizes the Delimiter and CommonPrefixes options when making listObjectV2 requests, significantly improving performance of the FileBrowser for S3 data stores. (5796)
- Fetch requests now use an AbortController when executing, allowing cancellation of timed out HTTP requests. (4917)
- To accommodate rare cases where a full disk could result in world.json writing as empty, a new method to write files has been implemented which avoids replacing an existing file with null data. (3061)

`Delimiter``CommonPrefixes``listObjectV2``FileBrowser``Fetch``AbortController``world.json`
### The Game Canvas

- The API now supports a new Scrolling Status Text feature for canvas objects (such as Tokens) that have a corresponding ObjectHUD container. (5798)
- Fog of war exploration has been converted and is now stored as image/jpeg instead of image/png, substantially reducing the document size for FogExploration by between 50 and 75%. (5880)
- Some parameters of the new adaptive lighting, specifically texture sizes, are now configured according to the client performance mode settings chosen by the user. (5426)
- The configuration of SightLayer#_fogResolution now uses a continuous scale for the resolution parameter to remove aesthetic differences on either side of certain map size cutpoints. (5881)
- Added support for the AVIF image file format. (5845)

`ObjectHUD``image/jpeg``image/png``FogExploration``SightLayer#_fogResolution`
### Interface and Applications

- Many CSS styles have been migrated to use defined CSS variables, making it easier for community developers to adjust UI element styling consistently. We will be iterating on this more in the future. (4733)
- The top-level HUD HTML and CSS has been refactored to use a flexbox layout allowing the separate UI elements to be aware of each other. (5875)
- A new "Foundry Details" button in the settings sidebar has been implemented which contains important details for troubleshooting. (5434)
- The z-index layering of #controls and #players has been separated to allow for easier modification of z-index values for one or the other. (5839)

`#controls``#players`
## API Improvements


### Architecture and Infrastructure

- mergeObject should now take into account insertKeys usage where the value of a key/value pair is an object. (5784)
- The behavior of importFromJSON has been improved to avoid cases where a Document imported from an older system version could result in the imported data not conforming to the correct system data schema. (5800)
- The Paste hook now correctly uses the base object class. (5863)

`mergeObject``importFromJSON`
### Documents and Data

- Added the isSuppressed property to ActiveEffects to better distinguish between effects that have been disabled by choice vs disabled by ineligibility. (5815)
- The mode field in EffectChangeData now has less strict validation, allowing for module developers to utilize additional integers in this field which extend the functionality of those declared in CONST.ACTIVE_EFFECT_MODES. Any custom modes greater than 5 require downstream developers to define their own custom handling for the effect. (5840)
- When creating a primary Document which provides explicit embedded document data as part of the creation request, all embedded documents will now have freshly generated IDs unless options.keepId is true. (5853)
- The keepId option is no longer ignored when creating embedded documents on synthetic actors. (5826)
- Corrected some instances where getTrackedAttributes were not correctly delegated to configured classes. (5770)
- Token#getBarAttribute will now correctly handle errors for erroneous values is passed as both parameters. (5819)
- Actors#tokens is once again an object. (5749)
- Corrected arguments passed from _onUpdateTokenActor to match the standard of _onUpdateEmbeddedDocuments
- Item._preUpdate should no longer ignore changes to the update delta for synthetic token actors. (5861)
- The toCompendium and fromCompendium methods have been expanded and now support thekeepIds option which is useful when bulk importing or exporting compendium content. (5779)

`isSuppressed``ActiveEffects``CONST.ACTIVE_EFFECT_MODES``keepId``getTrackedAttributes``Token#getBarAttribute``Actors#tokens``_onUpdateTokenActor``_onUpdateEmbeddedDocuments``code> To correct situations where Actor#_onUpdateEmbeddedDocuments would be called with a differing number of arguments. (5870)
    Item._preUpdate should no longer ignore changes to the update delta for synthetic token actors. (5861)
    The toCompendium and fromCompendium methods have been expanded and now support thekeepIds option which is useful when bulk importing or exporting compendium content. (5779)``Actor#_onUpdateEmbeddedDocuments``Item._preUpdate``toCompendium``fromCompendium``keepIds``The Game Canvas

    Added a new PointSource#destroy method to capture source-specific deconstruction operations which are required. (5776)
    PointSource radius is now clamped between 0 and canvas.dimensions.maxR. (5748)
    SoundSource has been adapted as a framework which can be used for computing the area of effect polygon for an ambient sound object. (5777)
    Added a new SoundsLayer#sources collection which tracks currently active SoundSource objects, mirroring the functionality of LightingLayer#sources and SightLayer#sources. (5794)
    cubeToOffset should no longer cause every other row to be shifted by one on hex grids. (5849)
    The skipUpdateFog Parameter for Token#updateSource is now passed to a refresh call. (5752)
    Calling document.object inside a delete or preDelete hook will no longer incorrectly re-create that object in memory. (5859)
    PlaceablesLayer.layerOptions.objectClass now correctly returns the PlaceableObject subclass as expected. (5858)


Interface and Applications

    Implemented a simple SceneNavigation.displayProgressBar interface which allows the progress bar normally displayed during Scene loading operations to be used by developers for other purposes to provide user feedback on long-running operations. (5692)
    FilePicker.upload() now offers an option to suppress the notification when a file is uploaded. (5591)
    AudioContainer has been refactored to have a single state rather than being split over multiple booleans. (5684)
    Combatant.visible no longer incorrectly returns true in cases where combatant.isVisible is false. (5705)
    Added a thumbnail getter to document classes, Actor, Item, Scene, Macro, JournalEntry, Cards, RollTable which provides the path to their thumbnail image (if one exists). (5834)


Other Changes

    Added a special error Hook event which captures errors originating within hooked function scopes that may have otherwise been unhandled. (5020)
    Support restoring scroll positions for multi-selectors. (5806)
    Allow FormDataExtended to support explicit checkbox values provided as part of a RadioNodeList. (5852)


Documentation Improvements

    Corrected incomplete and missing JSDoc for the Quadtree class. (5688)
    Corrected missing JSDoc entry for SceneData#playlistSound. (5746)
    Corrected and clarified JSDoc entry for AVSettings#changed. (5747)
    Corrected JSDoc entry for GridConfig#_onKeyDown and GridConfig#_onWheel. (5761)
    Corrected the documentation example used for {{localize}} . (5803)



Localization Improvements

    The Default Token Configuration sheet has been refactored to reuse elements from Token Config and avoid code duplication. (5775)



Bug Fixes
Architecture and Infrastructure

    A Package containing an invalid Compendium pack definition now results in that specific pack being ignored rather than the entire Package. (5850)
    Resolved the deprecation warning triggered by global.ver when calling api/status. (5694)
    Loading a remote-hosted token image which may have CORS restrictions in-place no longer sometimes results in an infinite loop in the texture loader. (5709)
    The progress UI for installing a package should no longer hang in cases where the install process does not complete before the initial fetch times out. (5716)
    Resolved cases where some package titles were incorrectly being displayed with unescaped HTML characters. (5738)
    Scene textures should once again be properly de-duped in the TextureLoader, and should no longer request multiple downloads of the same file. (5760)
    Closing (but not quitting) the electron application within macOS should no longer result in the application failing to launch. (5785)
    Modules with no URL link back to the setup page in the module update log dialog. (5862)
    The Database Semaphore has been redesigned to wrap the entire server-side transaction rather than only the save operation. This protects concurrency for the entire document object. (5309)
    Resolved an issue which caused the use of the --noupdate flag to throw client-side console errors. (5693)
    Corrected a form field issue which caused the Administrator Password field of the configuration tab to unexpectedly launch the first available world.(5868)


Documents and Data

    Small tokens should no longer unexpectedly grow bigger while they are being dragged. (5226)
    Changing the default sheet class should now clear cached sheet instances from other documents as expected. (5754)
    Corrected a number of errors related to use of the deleteAll option for Document.deleteDocuments when clearing the contents of an unlocked Compendium pack. (5781)
    Nested Roll Table results should now correctly enforce the Draw With Replacement option from their parent tables. (5793)
    Drag and drop operations for sidebar items should no longer create invalid dynamic links. (5829)
    Corrected an issue where the slugification of world-level titles for compendium packs could unintentionally create a .db file with an invalid name. (5856)


The Game Canvas

    The SightLayer#testVisibility method should no longer unexpectedly reveal objects which are not currently in view. (5739)
    Closing the scene configuration should once again reset the lighting layer darkness level. (5740)
    LightingLayer#hasGlobalIllumination should no longer incorrectly returns true in cases where the Vision Limitation Threshold is zero, but the darkness level above zero. (5741)
    Corrected an issue where programmatic creation of Roof tiles could result in TypeErrors. (5757)
    Universal lights are no longer incorrectly blocked by walls. (5772)
    Moving a placed Door no longer results in the door becoming unresponsive. (5773)
    Corrected cases where a scene transition could result in ruler tools no longer displaying their labels. (5774)
    Triggering a Fog of War reset should no longer result in a thrown error. (5778)
    Limited light emission angles should once again rotate when the token does. (5799)
    Toggling Has Vision on a currently controlled token should once again update the player's vision. (5867)
    Rapid drawing of light sources should no longer result in console errors or result in cases where canvas clicks fail to respond.(5873)
    Resolved a memory leak which could occur during commitFog workflow where a pre-existing fog texture would not be properly destroyed. (5878)
    Fixed an incorrect computation in the downscaling ratio for fog resolution which could result in different fog quality for scenes with an extreme aspect ratio. (5879)


Interface and Applications

    World descriptions should now truncate before reaching a state that significantly displaces other UI elements. (5737)
    Combatant visibility in the combat tracker is no longer incorrectly linked to Token visibility, and it should once again be possible to reveal a token in the combat order without having to first make it visible within a Scene. (5710)
    Resizing a Token width/height base size should now correctly update the dimensions of the linked ObjectHUD container. (5713)
    The Sheet Configuration Dialog now correctly refers to Documents rather than entities. (5728)
    Right-clicking a sidebar tab should now correctly pop out the tab even if it is Collapsed. (5729)
    The Control tools wrappable area no longer incorrectly disables mouse interaction. (5736)
    Macros should once again allow their owners to edit them even if they are not the GM. (5765)
    Users can no longer modify Combatants that they do not own. (5769)
    The popped out combat tracker should once again highlight entries for hovered tokens. (5771)
    The Alternate Actor Tokens field of the TokenConfig sheet should display the current image as the currently selected option in the dropdown. (5797)
    As part of the HUD refactor, the Controls Toolbar should no longer overlap with the players list window. (5802)
    Playlists should no longer become non-interactive as a result of errors when a PlaylistSound cannot be found. (5805)
    The minimum Token scale value should now match the UI slider minimum of 0.20. (5855)
    Using alt+mousewheel to adjust grid size in the grid configuration tool should now correctly adjust scene padding. (5872)


Dice System

    Deferred inline rolls should once again resolve data from controlled tokens correctly. (5758)
    The dice parser should now properly handle cases where multiple modifiers stack. (5767)
    Rolling an inline roll should once again use the configured Roll Type. (5768)


Other Changes

    Corrected an issue where a System which only registered a setting menu could result in the settings page rendering empty. (5865)
    Closing a sheet for an embedded document on a synthetic actor should no longer trigger a token update. (5866)`
### The Game Canvas

- Added a new PointSource#destroy method to capture source-specific deconstruction operations which are required. (5776)
- PointSource radius is now clamped between 0 and canvas.dimensions.maxR. (5748)
- SoundSource has been adapted as a framework which can be used for computing the area of effect polygon for an ambient sound object. (5777)
- Added a new SoundsLayer#sources collection which tracks currently active SoundSource objects, mirroring the functionality of LightingLayer#sources and SightLayer#sources. (5794)
- cubeToOffset should no longer cause every other row to be shifted by one on hex grids. (5849)
- The skipUpdateFog Parameter for Token#updateSource is now passed to a refresh call. (5752)
- Calling document.object inside a delete or preDelete hook will no longer incorrectly re-create that object in memory. (5859)
- PlaceablesLayer.layerOptions.objectClass now correctly returns the PlaceableObject subclass as expected. (5858)

`PointSource#destroy``PointSource``SoundSource``SoundsLayer#sources``SoundSource``LightingLayer#sources``SightLayer#sources``cubeToOffset``skipUpdateFog``Token#updateSource``document.object`
### Interface and Applications

- Implemented a simple SceneNavigation.displayProgressBar interface which allows the progress bar normally displayed during Scene loading operations to be used by developers for other purposes to provide user feedback on long-running operations. (5692)
- FilePicker.upload() now offers an option to suppress the notification when a file is uploaded. (5591)
- AudioContainer has been refactored to have a single state rather than being split over multiple booleans. (5684)
- Combatant.visible no longer incorrectly returns true in cases where combatant.isVisible is false. (5705)
- Added a thumbnail getter to document classes, Actor, Item, Scene, Macro, JournalEntry, Cards, RollTable which provides the path to their thumbnail image (if one exists). (5834)

`SceneNavigation.displayProgressBar``FilePicker.upload()``AudioContainer``Combatant.visible``combatant.isVisible`
### Other Changes

- Added a special error Hook event which captures errors originating within hooked function scopes that may have otherwise been unhandled. (5020)
- Support restoring scroll positions for multi-selectors. (5806)
- Allow FormDataExtended to support explicit checkbox values provided as part of a RadioNodeList. (5852)

`error`
## Documentation Improvements

- Corrected incomplete and missing JSDoc for the Quadtree class. (5688)
- Corrected missing JSDoc entry for SceneData#playlistSound. (5746)
- Corrected and clarified JSDoc entry for AVSettings#changed. (5747)
- Corrected JSDoc entry for GridConfig#_onKeyDown and GridConfig#_onWheel. (5761)
- Corrected the documentation example used for {{localize}} . (5803)

`Quadtree``SceneData#playlistSound``AVSettings#changed``GridConfig#_onKeyDown``GridConfig#_onWheel``{{localize}}`
## Localization Improvements

- The Default Token Configuration sheet has been refactored to reuse elements from Token Config and avoid code duplication. (5775)


## Bug Fixes


### Architecture and Infrastructure

- A Package containing an invalid Compendium pack definition now results in that specific pack being ignored rather than the entire Package. (5850)
- Resolved the deprecation warning triggered by global.ver when calling api/status. (5694)
- Loading a remote-hosted token image which may have CORS restrictions in-place no longer sometimes results in an infinite loop in the texture loader. (5709)
- The progress UI for installing a package should no longer hang in cases where the install process does not complete before the initial fetch times out. (5716)
- Resolved cases where some package titles were incorrectly being displayed with unescaped HTML characters. (5738)
- Scene textures should once again be properly de-duped in the TextureLoader, and should no longer request multiple downloads of the same file. (5760)
- Closing (but not quitting) the electron application within macOS should no longer result in the application failing to launch. (5785)
- Modules with no URL link back to the setup page in the module update log dialog. (5862)
- The Database Semaphore has been redesigned to wrap the entire server-side transaction rather than only the save operation. This protects concurrency for the entire document object. (5309)
- Resolved an issue which caused the use of the --noupdate flag to throw client-side console errors. (5693)
- Corrected a form field issue which caused the Administrator Password field of the configuration tab to unexpectedly launch the first available world.(5868)

`global.ver``TextureLoader``--noupdate`
### Documents and Data

- Small tokens should no longer unexpectedly grow bigger while they are being dragged. (5226)
- Changing the default sheet class should now clear cached sheet instances from other documents as expected. (5754)
- Corrected a number of errors related to use of the deleteAll option for Document.deleteDocuments when clearing the contents of an unlocked Compendium pack. (5781)
- Nested Roll Table results should now correctly enforce the Draw With Replacement option from their parent tables. (5793)
- Drag and drop operations for sidebar items should no longer create invalid dynamic links. (5829)
- Corrected an issue where the slugification of world-level titles for compendium packs could unintentionally create a .db file with an invalid name. (5856)

`deleteAll``Document.deleteDocuments``.db`
### The Game Canvas

- The SightLayer#testVisibility method should no longer unexpectedly reveal objects which are not currently in view. (5739)
- Closing the scene configuration should once again reset the lighting layer darkness level. (5740)
- LightingLayer#hasGlobalIllumination should no longer incorrectly returns true in cases where the Vision Limitation Threshold is zero, but the darkness level above zero. (5741)
- Corrected an issue where programmatic creation of Roof tiles could result in TypeErrors. (5757)
- Universal lights are no longer incorrectly blocked by walls. (5772)
- Moving a placed Door no longer results in the door becoming unresponsive. (5773)
- Corrected cases where a scene transition could result in ruler tools no longer displaying their labels. (5774)
- Triggering a Fog of War reset should no longer result in a thrown error. (5778)
- Limited light emission angles should once again rotate when the token does. (5799)
- Toggling Has Vision on a currently controlled token should once again update the player's vision. (5867)
- Rapid drawing of light sources should no longer result in console errors or result in cases where canvas clicks fail to respond.(5873)
- Resolved a memory leak which could occur during commitFog workflow where a pre-existing fog texture would not be properly destroyed. (5878)
- Fixed an incorrect computation in the downscaling ratio for fog resolution which could result in different fog quality for scenes with an extreme aspect ratio. (5879)

`SightLayer#testVisibility``LightingLayer#hasGlobalIllumination``commitFog`
### Interface and Applications

- World descriptions should now truncate before reaching a state that significantly displaces other UI elements. (5737)
- Combatant visibility in the combat tracker is no longer incorrectly linked to Token visibility, and it should once again be possible to reveal a token in the combat order without having to first make it visible within a Scene. (5710)
- Resizing a Token width/height base size should now correctly update the dimensions of the linked ObjectHUD container. (5713)
- The Sheet Configuration Dialog now correctly refers to Documents rather than entities. (5728)
- Right-clicking a sidebar tab should now correctly pop out the tab even if it is Collapsed. (5729)
- The Control tools wrappable area no longer incorrectly disables mouse interaction. (5736)
- Macros should once again allow their owners to edit them even if they are not the GM. (5765)
- Users can no longer modify Combatants that they do not own. (5769)
- The popped out combat tracker should once again highlight entries for hovered tokens. (5771)
- The Alternate Actor Tokens field of the TokenConfig sheet should display the current image as the currently selected option in the dropdown. (5797)
- As part of the HUD refactor, the Controls Toolbar should no longer overlap with the players list window. (5802)
- Playlists should no longer become non-interactive as a result of errors when a PlaylistSound cannot be found. (5805)
- The minimum Token scale value should now match the UI slider minimum of 0.20. (5855)
- Using alt+mousewheel to adjust grid size in the grid configuration tool should now correctly adjust scene padding. (5872)

`alt+mousewheel`
### Dice System

- Deferred inline rolls should once again resolve data from controlled tokens correctly. (5758)
- The dice parser should now properly handle cases where multiple modifiers stack. (5767)
- Rolling an inline roll should once again use the configured Roll Type. (5768)


### Other Changes

- Corrected an issue where a System which only registered a setting menu could result in the settings page rendering empty. (5865)
- Closing a sheet for an embedded document on a synthetic actor should no longer trigger a token update. (5866)

