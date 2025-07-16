# Release 10.270 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.270

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.270


## Version 10 Development


##### June 10, 2022


## Foundry Virtual Tabletop - Version 10 API Development 1 Release Notes

Be certain to carefully back up any critical user data before installing this update.

We have concluded the Prototype phase of our development cycle and we are fully focused now on further refinement of our new features and API enhancements. If you are a module or system developer, now is the time to begin testing your packages in Version 10 in order to provide us with adequate feedback and request any API changes that would make their lives easier.

We are targeting the end of June for our next release and will be moving on to the User Testing phase after that. Any API requests we receive after the API development period will likely not make it into V10 stable and will have to wait for Version 11 to be addressed.

WARNING:Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights

This update introduces a swath of new features and improvements to all the amazing things we've introduced in Version 10 during the Prototype phase, including exposing a lot of UX and UI access for those new features. There is obviously more to come as we progress toward the eventual stable release, but we've got a lot to highlight this time around!


#### Vision Modes and Light Rendering

While we introduced the new Vision Modes settings for tokens in the last prototype version, we know it came saddled with a lot of unexpected behavior- tokens not being visible when they should, light sources disappearing until you hit F5, and many more rendering bugs, because that's what happens when you make dramatic changes to a rendering engine! This is why we have prototype versions! Since then, SecretFire and Atropos have worked relentlessly to correct the lion's share of the rendering issues and get Vision Modes into a place where the developer community can provide more detailed feedback about their experiences. You can find the new Vision Mode options under token configuration (whether prototype or not) and check out Darkvision (5e), Tremorsense (5e), or Light Amplification vision presets, or just play with modifications to your token vision as you see fit. More presets for vision modes are coming!

While we were working on improving vision and light rendering, we decided to give (yet more) polish to the performance of light sources and vision and canvas rendering overall. As we look toward the future and implementing scenes that can span multiple floors, we added and refined support for assigning elevation to all canvas placeables, improved performance of rendering and detection algorithms for vision and lighting, and relaxed some API restrictions on things like mouse interactions and placeables on the canvas layers in order to empower our community developers who want to work more with the canvas. We also separated more UI elements such as borders, measured templates, and more out into their own layer masks, removing cases where those elements would have their appearance modified by light source effects such as desaturation.


#### New UX and UI Features!

This one is going to be a bit of a grab bag of surprises and things we've been sneakily working to incorporate as we close out the prototype phase. As many of you know already, the Dev API phase is when we start implementing new menus and giving the new API features we've added a user-facing menu to let people configure all the new cool features we've added. To get your attention with a few summary highlights in terms of UX and UI, here's a non-comprehensive quick list of the big ones:

- Audio Video Chat Integration UI - If you're the kind of person who likes to use our Audio Video chat integration, you're in for a treat. Kim has been hard at work overhauling the appearance of AV chat to give it a more aesthetically pleasing UI, featuring a new side panel for containing video frames, nameplates that rotate between player name and character name, border frames colored based on player color, and even more.
- Custom Font Support - The settings menu has expanded with a new button to Configure Additional Fonts, which you can upload to your user data folder. Once the font file has been uploaded you can select it and set the Font Family name, weight, and style. These fonts will appear as options anywhere Foundry VTT allows for font selection.
- Easier Map Note Creation - Since we were in the area of journal entry and map note changes anyway, we took the time to bring in a small feature that we've often heard suggested by the community. You can now create Map Note pins from the Journal Notes layer of the canvas, without needing to first create a Journal Entry. Perfect if you're just trying to stamp "My Player's Burial Site" on the map in a hurry.
- Measured Template Re-Positioning - Drag and drop operations for measured templates now dynamically resize their highlighted area, a small but welcome UI change that makes it easier to tell if you're putting the template in the right place before placing it.
- Playlist Folder Drag and Drop - It's now possible to re-order your playlist folders through drag and drop, bringing feature parity with folder operations everywhere else.


#### API and Data Structures

As the first release in the API development phase, it's to be expected that many of the more controversial changes to the API from the prototype phase got a revisit to improve their performance, correct errors, or provide additional functionality for our development community. We've rounded out DataModel validation to provide cleaner error messaging, removed or refined several cases of unused or unnecessary properties, and refactored some significant parts of the canvas rendering API in order to provide new helper methods, hooks, and functions. We look forward to receiving feedback from the development community during the API development phase!


## Breaking Changes


### The Game Canvas

- The VisionSource#limited property for PointSourcePolygon#isConstrained has been removed. (7140)

`VisionSource#limited``PointSourcePolygon#isConstrained`
### Interface and Applications

- The font configuration API has been improved and can now provide multiple font definitions for a single family, including weight and style variants. This is a breaking change because it deprecates use of the previously used CONFIG.fontFamilies array. (6498)
- TextEditor.enrichHTML parameters are now included when data is passed to custom enrich methods. (7196)
- The Audio-Video user interface has been redesigned to be a full-height sidebar panel on the left-side of the interface which can be resized. Camera views of connected players are arrayed in a grid layout and can be popped out to separate frames. (7230)

`CONFIG.fontFamilies``TextEditor.enrichHTML`
## New Features


### Architecture and Infrastructure

- Software dependencies have been upgraded to their latest stable versions, including Electron which is upgraded to Electron 19. (7233) (6543)


### Documents and Data

- A global document index has been implemented in the interest of providing fast, name-based document lookups. (7201)


### The Game Canvas

- The efficiency of Token field-of-vision (FOV) computation has been improved by switching to a method of polygon intersection with the unrestricted LOS polygon. (7226)
- A new custom rendering workflow for measured templates has been implemented allowing templates and other canvas UI elements to be drawn in the interface group. This allows them to be unaffected by environmental effects and lighting, while still appearing to be beneath tokens and other objects in the Scene. (5981) (5982)
- The canvas grid (GridLayer) has been moved into the interface group and is now masked with tokens. (7227)
- Contents of the interface group are now reverse-masked using a composite texture of token positions which provides the illusion of tokens being over-top of interface elements like token borders, the grid, grid highlights like rulers and templates, and more. As an interim solution, this reverse masking approach applies to the entire interface group, but we have plans as we continue development of V10 to refine exactly which interface elements are masked in this way. (7200)
- Measured Template drag-and-drop actions now dynamically change the grid highlight as part of the drag workflow, making it easier to see the positions that will be affected by the new template location in real-time. (7235)
- A TokenDocument flag has been added that allows skipping randomization of video offset position. (6994)
- Map Notes may now be created without a corresponding journal entry by interacting with the canvas while on the Notes layer. (7207)

`GridLayer``TokenDocument`
### Interface and Applications

- The display of the Audio/Video interface has been redesigned to have a new columnar layout with improved functionality. (3570)
- A new Settings Menu option now allows users to include and define fonts for use in their game worlds, using files within the userData folder. (7139)

`userData`
## API Improvements


### Architecture and Infrastructure

- The DataField abstract class has been improved and its instances function more completely as nodes of a hierarchical tree with awareness of parent nodes, name path, and more. (7136)
- DataModel validation now provides more expressive details for errors when they occur. (7206)
- The need for a separate RelatedPackage and RelatedSystem schema has been eliminated by making the RelatedPackage definition more flexible. (7234)

`DataField``RelatedPackage``RelatedSystem``RelatedPackage`
### Documents and Data

- Calling CompendiumCollection#getIndex with an array of indices which are all already indexed no longer performs additional actions except to return the existing index. (7221)

`CompendiumCollection#getIndex`
### The Game Canvas

- A number of hooks have been added for CanvasLayer, InteractionLayer, and PlaceableObject life-cycle events in order to make it easier for module and system developers to customize canvas behaviors. (6968)
- The standard framework for mouse interaction has been shifted from the PlaceablesLayer class to the InteractionLayer class to more easily support custom layers which require standard workflows for mouse interaction. (7007)
- The elevation property of Tiles, Tokens, Drawings, and other primary objects is now available for developers to modify via the API to support modules and systems exerting control over rendering order until such a time that elevation becomes managed by a centralized core framework. (7147)
- The ClockwiseSweepPolygon algorithm has been simplified and generalized to now support constraining the resulting polygon using an array of boundary shapes which generalizes the special case of circular radius and limited angle while allowing for more advanced and arbitrary bounding shapes. (7094)
- The efficiency of PointSourcePolygon#contains has been improved to now test the rectangular bounds of a polygon first. (7191)
- The new method LightSource#updateVisibility has been implemented, centralizing logic about whether a light source is currently active. (7185)
- The code and data structures for the MeasuredTemplate#highlightGrid method has been refactored and now calls two helper methods: MeasuredTemplate#_getGridHighlightShape and MeasuredTemplate#_getGridHighlightPositions, computing which positions on the grid should be highlighted for a certain template and giving more flexibility to developers who wish to extend this class and override its functionality. (7190)
- Improved the logic of PointSource#optimalVertexDensity to choose an optimal number of vertices according to polygon radius. (7192)
- The PerceptionManager refresh workflow no longer requires the skipUpdateFog parameter, instead directly tracking which vision sources are temporary previews. (7232)
- The Token#getSightOrigin algorithm has been improved and should now always return integer coordinates, preferring the true token center whenever possible. (7208)

`CanvasLayer``InteractionLayer``PlaceableObject``PlaceablesLayer``InteractionLayer``ClockwiseSweepPolygon``PointSourcePolygon#contains``LightSource#updateVisibility``MeasuredTemplate#highlightGrid``MeasuredTemplate#_getGridHighlightShape``MeasuredTemplate#_getGridHighlightPositions``PointSource#optimalVertexDensity``PerceptionManager``skipUpdateFog``Token#getSightOrigin`
## Bug Fixes


### Architecture and Infrastructure

- The search filter for Package Installation should once again function as expected, filtering by ID. (7143)
- Locking a module to prevent updates should now correctly update its setting to persist its state.(7178)
- The Folder#children property no longer incorrectly returns undefined. (7216)

`Folder#children`
### Documents and Data

- Server-side document models should once again process compendium migrations correctly, as we have resolved an issue related to invalid syntax in hasSystemData. (7172)
- Compendium packs are no longer being incorrectly created in the base userData folder. (7146)
- Synthetic token actors are no longer incorrectly regenerated on every update. (7176)
- Player tokens set to use Vision should no longer incorrectly raise a token vision warning. (7222)

`hasSystemData``userData`
### The Game Canvas

- An issue which caused the currently viewed scene to not be correctly flagged as active has been resolved, and should no longer result in canvas rendering errors when re-drawing a Scene. (7177)
- Cases where a Canvas Document or PlaceableObject were constructed directly by name rather than the expected subclass should no longer occur. (7183)
- Token#mesh, Tile#mesh, and Drawing#shape should once again be properly destroyed as part of normal deletion workflows. (7148)
- The PlaceablesLayer quadtree positions should now be properly updated when PlaceableObject positions or bounds change. (7168)
- The WeatherEffects layer has been assigned an elevation value and should be correctly displayed above tokens once more. (7145)
- Secret Door control icons should no longer be duplicated when the door is visible. (7149)
- A problem which prevented configuration changes for Token lighting from immediately applying has been resolved. (7180)
- Changes to scene weather effects or grid canvas size should no longer result in all placeables failing to render. (7175)
- Token-based light sources should once again be visible to other players. (7223)
- The light source luminosity slider should now correctly produce a deeper level of darkness the further negative a luminosity value is set. (7193)
- The visionUpdate property for EffectsCanvasGroup#refreshLighting should once again work as expected. (7197)
- An issue with Map Note permissions which resulted in Limited permission Map Notes not being visible even when permissions were set correctly has been resolved. (7141)
- Drawing textures should once again be drawn properly, with preview textures functioning as expected. (7203)
- Adaptive stroke color for text drawings should apply correctly once again. (7187)
- The Default Drawing Configuration should once again save its settings. (6846)

`Document``PlaceableObject``Token#mesh``Tile#mesh``Drawing#shape``PlaceablesLayer``PlaceableObject``WeatherEffects``visionUpdate``EffectsCanvasGroup#refreshLighting`
### Interface and Applications

- An inconsistency in the Combat Tracker related to switching between combat encounters not linked to a scene has been resolved. (6911)
- Playlist folders should now be able to be sorted in the same way as other folders. (7156)
- The TinyMCE <hr> plugin has been removed as it no longer necessary. (7170)
- Progress editing an Adventure in the AdventureExporter application should now be periodically saved to ensure changes are not lost when adding or removing content. (7174)
- Individual playlist sound volume sliders should once again affect the volume level of that track. (7224)
- The rendering of Tour tooltips should no longer display data in a disorganized way very briefly during the process of exiting or closing a Tour. (7058)
- Tooltips should no longer get stuck in an open state. (7173)
- Tooltip rendering for Scene controls should no longer be (very briefly) displayed in the top-left of the UI. (6909)

`<hr>``AdventureExporter`
### Other Changes

- Drawn cards should once again be able to be passed or played as expected. (7154)
- Combatant documents should once again be able to be constructed locally without defining a Combat parent. (7182)
- _checkFontsReady should now function properly even in cases where a font family name contains numbers. (7215)
- An issue with token visibility testing on scenes which use unrestricted vision distance has been resolved and tokens should once again be visible as expected. (7225)
- A namespacing issue with earcutEdges has been resolved by isolating it into its own namespace. (7194)

`_checkFontsReady``earcutEdges`