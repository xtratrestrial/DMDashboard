# Release 13.332 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.332

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.332


## Version 13 Prototype


##### October 17, 2024


## Foundry Virtual Tabletop - Version 13 - Prototype 1 Release Notes

Hello Foundry community! We are extremely excited to share what we've been working on for the past few months as development progresses on the Version 13 update cycle. Our focus with a Prototype release is designing and front-loading the more serious changes to API so that our development community has the greatest opportunity to adapt to breaking changes to the API and adopt new features, we're always pleased to give the broader community a little preview of what to expect from the newest version of Foundry VTT.

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


### Overall Goals

As part of the V13 update cycle, we set a few initial goals:

- To implement Token Drag Measurement, the feature voted as top priority for our patreon users, allowing users to measure movement of tokens during canvas drag movement operations.
- To adopt Application V2 and ThemeV2 across all parts of the core software, providing a new, modernized UI for all users while maintaining a familiar organization and workflow.
- To adopt and upgrade to the latest version of PixiJS (V8) and begin the initial forays into using WebGPU in place of WebGL.

We're very pleased to say that the first two of those goals are featured prominently in this update- our adoption of Application V2 and Theme V2 features has already progressed dramatically, with many of the more commonly used applications converted. Our initial implementation of Token Drag Measurement also has a strong showing in this release as well, with several notable changes to how token movement operates during drag and waypoint moves, but there's more to come as we've also been working on adding some automated pathfinding to the process. However, we will not be moving forward with adoption of Pixi V8 just yet.


## PixiJS Version 8 Postponed

One of the major focal points that was originally planned for Version 13 was upgrading to PixiJS version 8 (Pixi). This new major version of Pixi is a big step change in the way that the library works and its capabilities - those are things our team is very excited about and eager to adopt. We launched headfirst into an analysis of how we would undertake the Pixi v8 migration as part of the initial prototype phase for Foundry VTT Version 13.

As we immersed ourselves in the Pixi changes and spent a lot of time internally talking about them, we discovered and came to an agreement that this is not the right time for us to make this migration leap. We remain excited about the future of Pixi, but at the moment there are too many major pain points that would be irresponsible for us to enforce for our developer community.

Some of the most significant challenges include:

- One of the hallmark additions of Pixi v8 is WebGPU support, a next generation renderer that will super-charge performance and capability. While this sounds great, there are a number of reasons why WebGPU is not “ready” yet. Its API is not yet entirely stable, it requires a secure context to use, support for custom batch rendering was not yet available, among other things.
- Several Pixi extensions that we make use of (smooth-graphics, particle-emitter) do not yet support Pixi v8.
- There are extensive API changes in the Pixi library that are not backwards compatible, which would cause breakage to almost all modules or systems that do any amount of canvas rendering.
- The interaction framework in Pixi is being reworked again after the redesign in Pixi v7 did not achieve all of its goals. This refactor is once again underway, but not yet available. Once it happens it will cause additional required changes for us and for downstream modules.

When the time comes for us to move to a more modern version of Pixi and adopt WebGPU for rendering - this change will unavoidably force a large amount of breaking changes upon the module development ecosystem. Choosing the right time to make that leap is essential so that we can group the need to rewrite canvas rendering code into a single major version update instead of having it be spread out across multiple major versions.

If we had embarked on Pixi v8 migration, it would have consumed most of our development resources for the entire V13 cycle. Since we are not doing it, we have newfound freedom to pursue adding a number of new features that we are excited about instead!


## Highlights


### Theme V2

A major focus of Version 13 is the overhaul and improvement of our user interface throughout the Foundry Virtual Tabletop game environment. We began this major process back in Version 11 with the redesigned setup screen, and then added a new foundation in V12 with the ApplicationV2 framework. Version 13 allows us to bring these innovations and improvements to the main game environment.

Our team is thrilled with how the process is going and how much better this new UI framework is to use and to develop within. It is, however, a major overhaul so it is likely to take some time for everything to achieve a single unified interface. Thank you for your encouragement and patience during this period of remodeling. The new UI has a more minimalist aesthetic with elements that are more subdued, that default to minimized with optional expansion, or that fade away automatically when not in use. When testing Version 13 you will notice lots of changes, some subtle and some very noticeable.

This is very much work in progress and we are tracking a great many changes we still need to or want to make. We will continue to refine the UI/UX of these changes throughout the V13 development and testing phase!


#### CSS Layers

On the technical side, we have also fully implemented CSS Layers, a modern innovation now supported in all major browsers for organizing and defining precedence across a large and complex set of styles. This will be a big benefit to modules and systems making it easier for them to override core styles without needing to match the same level of specificity of the core rule. All system and module defined styles are automatically opted in to this feature. Learn more in the related github issue.


#### Migration Progress

We have made great progress with ApplicationV2 migration so far; 23 of 88 total applications have been refactored and migrated to ApplicationV2 most notably all of the main game UI elements, all of the canvas document configuration sheets, and the chat tab of the game sidebar. We will continue pushing onwards with ApplicationV2 refactors during Prototype 2 and the API Development phase. The practical use cases of converting all our core applications has allowed us to identify numerous ways to improve the underlying ApplicationV2 framework. You will notice many issues in this release that improve the way that ApplicationV2 works!


### Token Ruler

The new Version 13 feature prioritized through our Patreon supporter vote is “Token Drag Measurement” which redesigns the way drag and drop movement and distance measurement works for Tokens. The design of this feature was inspired by the popular “Drag Ruler” module by community developer Stäbchenfisch. This work is not a direct absorption of the module, but it works in a very similar way. This addition introduces an important distinction between two different types of measurements made in Foundry VTT:

Both measurement modes now support elevation-based measurement and movement. Holding the CTRL (or CMD on macOS) key and scrolling the mouse-wheel while measuring increases or decreases the elevation of your target waypoint. You can create a complex movement path over multiple waypoints each at different elevations by left-clicking while pressing the CTRL key. The distance and cost of such a movement is computed accurately including vertical elevation changes. Both measurement modes will also support secret measurements (not yet in Prototype 1) holding ALT while measuring will measure privately so that you don't reveal information to other connected users.

The current state of this feature is still just a prototype, we have more work to do on expanding the feature set and refining UI and UX. There are several known issues which are not yet fully implemented including:

- The final UI of how measurements are displayed is not yet final.
- Broadcasting measurement to other connected players (if not measuring secretly) is not yet implemented.
- Scene Region behaviors that would interrupt movement (like Pause Game or Teleport Token) are not yet supported.
- When a measured movement is interrupted by a wall, the Token sometimes passes through that wall instead of stopping movement before it.
- Movement is not correctly interrupted by walls in unexplored fog of war.

These are all limitations or bugs that reflect parts of this work that are not yet finished. Rest assured we are going to continue working on this area in Prototype 2!


### Animated Doors

The first feature to make its way from the Ember project into the core software, Door Animations provide a new level of customization for GMs to use in their scenes. By selecting an Animation Type from the Wall Configuration application, a new section of the menu appears, offering configuration options that allow you to provide an animation for the opening and closing of doors with ability to make any door into double doors conveniently. Multiple animation types are supported:

- Ascend - When opened, the door will appear to rise into a recess in the ceiling.
- Descend - When opened, the door will appear to lower into a recess in the floor.
- Slide - When opened, the door will appear to slide away to its left or right.
- Swing - When opened, the door will move with a traditional hinged swing from a side pivot point.
- Swivel - When opened, the door will rotate on a central pivot point.

Each of these animation types allow for configuration of duration and animation strength, allowing you to customize the distance the animation travels and how quickly it does so. This allows each door's animation to sync up with the sounds provided by our previous Door Sounds feature, to give a truly immersive experience.

Additionally, we have been able to include a selection of image assets to be used as door textures thanks to the kindness of our good friends over at Forgotten Adventures, which will be packaged with the core software going forward. We will continue refining and improving upon the framework for door animations as we progress with V13 development!


### Combat Turn Marker

Support for combat turn markers is a feature that has been long-requested and considered from as far back as version 4. Community-developed modules which add combat turn markers are among the most popular in our ecosystem. This new core feature allows an optional visual indicator that highlights the Token who has the current turn in an active Combat encounter.

Combat Turn Markers allow for the GM to configure an icon that will display below the token whose turn it is. These markers are fully-customizable, allowing a GM to switch which texture (image or video asset) is used, may be tinted to match the color of the token disposition, and provides a few different animation effects to make the marker a little more eye-catching.

- Spin - The marker will slowly rotate.
- Pulse - The marker will slowly grow larger and smaller in cycle.
- Spin and Pulse - A combination of the two.

During the remainder of the V13 development cycle we may add some new turn marker animations, as well as some core bundled marker assets that can be used out-of-the-box.


### CodeMirror Editor

Another incredible improvement to usability of Foundry Virtual Tabletop is the addition of CodeMirror (a visual editor for code) that supports fields where JavaScript, HTML, or JSON are edited. This makes the process of writing script Macros, configuring advanced Scene Region behaviors, or editing HTML fields far more fluid and user-friendly. Built-in syntax highlighting informs you when you have misplaced a comma or quotation mark, making it far easier for aspiring developers to begin engaging with and learning the JavaScript language through the context of Foundry Virtual Tabletop!


## Known Issues

If you wish to run the Linux/Node version of Foundry in Windows or macOS, you will need to run npm i classic-level in resources\app first.

`npm i classic-level``resources\app`
## Breaking Changes


### ESModule Migrations

- An overarching goal in Version 13 is to migrate more of our JavaScript codebase into ESModules enabling it to be better organized and documented. The following API structures are now ESModules with paths in the foundry.<group> namespace. Each class can still be - for the time being - referenced under its old global name with a deprecation warning and redirect that will remain in place until Version 15.
        
            Canvas and Shader classes(11493)
            Container classes and the QuadTree class (11494)
            the Pings, Interaction MouseInteractionManager, RenderFlags, and CanvasAnimation classes (11497)
            The Pixi shapes and Graphics extension classes (11515)
            the geometry such as Ray, LimitedAnglePolygon, etc..., TextureLoader, and PreciseText classes  (11522)
            The group and CanvasLayer classes such as InteractionLayer, PlaceablesLayer, ControlsLayer etc... (11553)
- Canvas and Shader classes(11493)
- Container classes and the QuadTree class (11494)
- the Pings, Interaction MouseInteractionManager, RenderFlags, and CanvasAnimation classes (11497)
- The Pixi shapes and Graphics extension classes (11515)
- the geometry such as Ray, LimitedAnglePolygon, etc..., TextureLoader, and PreciseText classes  (11522)
- The group and CanvasLayer classes such as InteractionLayer, PlaceablesLayer, ControlsLayer etc... (11553)

`foundry.<group>`- Canvas and Shader classes(11493)
- Container classes and the QuadTree class (11494)
- the Pings, Interaction MouseInteractionManager, RenderFlags, and CanvasAnimation classes (11497)
- The Pixi shapes and Graphics extension classes (11515)
- the geometry such as Ray, LimitedAnglePolygon, etc..., TextureLoader, and PreciseText classes  (11522)
- The group and CanvasLayer classes such as InteractionLayer, PlaceablesLayer, ControlsLayer etc... (11553)

`Canvas``Shader``Container``QuadTree``Ping``MouseInteractionManager``RenderFlags``CanvasAnimation``Graphics``Ray``LimitedAnglePolygon``TextureLoader``PreciseText``group``CanvasLayer``InteractionLayer``PlaceablesLayer``ControlsLayer`
### Documents and Data

- NumberField#toInput no longer creates a range picker if the field is nullable. The behavior of NumberField#step has changed to match the behavior of the HTML input step size as part of this change. (11547), (11557)
- The initial value of the channel field for the PlaylistSound Data Model is now "". This resolves an issue that caused bulk imported playlists to assign all sounds to the "Music" channel. In addition, some labels for the playlist configuration have changed. (11605), (11604), (11603)
- Roll modes are no longer used in ChatMessage#_preCreate if options.rollMode is not set. ChatMessage.applyRollMode no longer overwrites existing whisper recipients if the roll mode is private or blind. (11442)

`NumberField#toInput``NumberField#step``channel``PlaylistSound``""``ChatMessage#_preCreate``options.rollMode``ChatMessage.applyRollMode``whisper`
### Applications and User Interface

- The data structure of SceneControls#controls has changed from an array-based structure to a record of control sets and tools. This makes it much easier to work with, but it is a breaking change in the data structure transacted by the getSceneControlButtons hook. Refer to the new types declared for SceneControl and SceneControlTool. (11384)
- Added the new DatabaseOperation parameters ClientDocument.createDialog and ClientDocument.deleteDialog. (11404)

`SceneControls#controls``getSceneControlButtons``SceneControl``SceneControlTool``DatabaseOperation``ClientDocument.createDialog``ClientDocument.deleteDialog`
### The Game Canvas

- Gridless scenes now support circular/elliptical token shapes. (11701)
- Changed the return type of TextureExtractor#extract with compression mode NONE from Promise<Uint8ClampedArray|undefined> to Promise<{pixels: Uint8ClampedArray|undefined, width: number, height: number, out?: ArrayBuffer}>. (11687)

`TextureExtractor#extract``NONE``Promise<Uint8ClampedArray|undefined>``Promise<{pixels: Uint8ClampedArray|undefined, width: number, height: number, out?: ArrayBuffer}>`
## New Features


### Architecture and Infrastructure

- Node.js 20 is now the required node version with optional support for Node 22. (11317)
- Electron is upgraded to version 33 and a number of dependency packages have been updated to newer versions. (11403)


### Documents and Data

- We have changed the scope of the MACRO_SCRIPT permission. This permission now restricts users from creating or deleting script macros, but does not prevent them from executing existing script macros. (11284)
- prepareData is no longer called twice for OwnedItems when the Actor or Item is updated. (7987)
- The appendNumber and prependAdjective fields have been moved to the PrototypeToken from the Token document. (11225)
- In order to simplify server-side handling, DocumentOwnershipField now utilizes the gmOnly designation, and we now provide a new DocumentAuthorField similarly used for Drawing#author, ChatMessage#author, and Macro#author. (11431)
- ServerDocument#testUserPermission overrides have been removed in favor of using lower-level ServerDocument#getUserLevel overrides instead. (11432)

`MACRO_SCRIPT``prepareData``OwnedItem``appendNumber``prependAdjective``PrototypeToken``DocumentOwnershipField``gmOnly``DocumentAuthorField``Drawing#author``ChatMessage#author``Macro#author``ServerDocument#testUserPermission``ServerDocument#getUserLevel`
### Applications and User Interface

- A large portion of our Applications are now using Application V2, with sweeping changes to their underlying architecture and UI. The parent issue for this conversion process is here: (11184), but the completed items for this release are: (11333), (10482), (10651), (11391), (11314), (11334), (11347), (11349), (11359), (11369), (11373), (11376), (11378), (11384), (11393), (11396), (11661).
- Application (v2) headers now hide all other buttons except "Close" when minimized. (11638)
- Macros now have a new home and can be found in the sidebar like most other Documents. (5836)
- The way hotbar locking functions has changed. When the hotbar is locked, its contents now cannot be changed in any way. (10676)
- The Toggle Notes Display option now defaults to true for map notes. (9173)
- The visual UX for reordering scenes through drag-and-drop in the navigation bar now provides a clear visual distinction where the scene will be dropped relative to its siblings. (4644)
- Whether a scene is shown in the navbar for players or only the GM is now denoted by a simple slashed eye symbol (  ), and no longer provides that information via a color change. (10626)
- If a scene has a defined journal entry associated with it, that journal entry is now the default when creating a new map note for that scene. (8578)
- User network latency is now displayed in the user list in order to help identify users who are experiencing a slow or unreliable connection. A setting may be introduced in the future to control visibility of this display. (11132)
- We have introduced Token Drag Measurement as a new approach to movement and measurement UX, allowing users to determine the distance between two points by dragging a token, while still allowing the ability to complete waypoint-based movement for those who prefer that approach. (11185)
- Holding the ALT key while dragging to measure hides the Ruler for other users, allowing a user to measure distance without showing others their planned movement. (8675)
- ChatMessages now contain a new Title attribute which can be used to denote the application title for popped out messages. (10391)
- It is now possible to select text within the chat window. (11712)
- The Fill Opacity slider is now disabled in the Default Drawing Configuration dialog when the fill type is set to "None". (11275)
- In order to prevent accidental deletion of a Combatant, pressing the delete key to delete a token that is in an active combat now displays a dialog prompt for confirmation as this action cannot be reverted by undo operations. (11296)

`ChatMessage``Fill Opacity`
### The Game Canvas

- Combat now allows for configuring Turn Markers for combatants allowing for a marker to be configured on a per-combatant basis, these turn markers display below a token when it is their current turn and support animations and effects to make them more visible. (11690)
- We have added support for Animated Doors with a variety of animation and behavior options, including a select number of free door image assets kindly provided for our use within the core software by our friends at Forgotten Adventures. (11708)
- The snapping of Ruler waypoints has changed. Waypoints can now snap to grid centers, vertices, and edge midpoints in square grids, and hexagonal grids allow snapping to grid centers and vertices. (3315)
- Snapping for Template, Lighting, Sound, and Note layers now attach to hexagon edge midpoints. (11645)
- Vision, light, darkness, and sound sources are no longer unbounded vertically; a point is affected by the source if (x, y) is within the 2D shape and the elevation deviation from the source's elevation is less than or equal than the radius of the source. (11729)


### Dice and Cards

- Dice box expand/contract functions now use CSS transitions. (8449)


### Localization and Accessibility

- We have added localization support for various macro-related operations. (4537)


## API Improvements


### Documents and Data

- We have added a new user Setting scope, which allows saving a setting as a piece of data on the user object, allowing settings to be maintained for the same user regardless of which client they use to connect. (4804)
- ActorSheetV2 now offers an extensible drag and drop framework that can be extended by subclasses. (11648)
- The new hooks Combat#_onEnter and Combat#_onExit have been added. These are called if the client is the active GM whenever a Combatant enters/exits the Combat. (11682)
- Symbol is no longer an allowed Setting type. (11507)
- It is now possible to set the name of a document when calling createDialog(). (11611)
- Internal StringField._getChoices has been replaced with StringField._prepareChoiceConfig as it has a more broad range of support for FormSelectOption attributes. (11641)
- The deepClone and diffObject workhorse methods have been improved and now avoid unnecessary object creation. (11665)
- Added the new methods foundry.utils.deepFreeze and foundry.utils.deepSeal. (11704)
- User#isActiveGM is a new getter that returns one user who is an active non-assistant (if possible) GM account account provided one exists, otherwise it returns null. (11678)
- Region.REGION_MOVEMENT_SEGMENT_TYPES has been moved to CONST.REGION_MOVEMENT_SEGMENTS. (11685)
- Added Users#getDesignatedUser and User#isDesignated for determining if a given user meets a select criteria. (11698)
- Added a new custom HTML element that creates a CodeMirror editor for editing JSON, HTML, and Javascript code with visual styling. (11713)

`user``user``Combat#_onEnter``Combat#_onExit``Symbol``createDialog()``StringField._getChoices``StringField._prepareChoiceConfig``FormSelectOption``deepClone``diffObject``foundry.utils.deepFreeze``foundry.utils.deepSeal``User#isActiveGM``Region.REGION_MOVEMENT_SEGMENT_TYPES``CONST.REGION_MOVEMENT_SEGMENTS``Users#getDesignatedUser``User#isDesignated`
### Applications and User Interface

- Notifications have changed. We've introduced a new progress notification type, and deprecated displayProgressBar in favor of this new system. (9637)
- options.window.contentTag can now be used as an alternative mechanism for binding top-level form handling to an ApplicationV2 instance. (11621)
- Header controls can now be customized for ApplicationV2 with a new hook signature getHeaderControls{ApplicationClassName}(app, controls). (11668)
- Our UI stylesheets now take advantage of CSS layers to provide more separation between core, system, and module styles. (6842)
- Convert SceneNavigation to use ApplicationV2. (9792)
- A new toggleable global volume mute button has been added just to the left of the Macro hotbar. (11491)
- A single HandlebarsApplicationMixin template part can now optionally declare root:true and replace the contents of the root element. (11492)
- Application (V1) classes now receive the .theme-light class so they are not unintentionally contaminated by dark theme styles. (11651)
- ApplicationV2 instances can now override the global theme preference by assigning .theme-dark, .theme-light, etc... as a class on their root element. (11652)
- The ChatPopout implementation is now configurable via CONFIG.Chatmessage.popoutClass. (11716)
- DataField#_toInput methods now create HTMLCodeMirrorElements. (11718)
- Add an "editImage" action to DocumentSheetV2. (11719)

`Notifications``progress``displayProgressBar``options.window.contentTag``getHeaderControls{ApplicationClassName}(app, controls)``HandlebarsApplicationMixin``root:true``Application``.theme-light``ApplicationV2``.theme-dark``.theme-light``CONFIG.Chatmessage.popoutClass``DataField#_toInput``HTMLCodeMirrorElement``DocumentSheetV2`
### The Game Canvas

- We've added a new PrimaryParticleEffect class to the PrimaryCanvasGroup that can be used to manage particle effects. (11519)
- Added RegionDocument#teleportToken, which teleports a given Token into the Region if the current User has the necessary permissions to perform that teleportation. (10828)
- When not otherwise provided, the default value for DataModel settings will now be inferred. (11612)
- Added BasePointSource#testPoint({x, y, elevation}): boolean, which tests whether the point is within the source's shape. (11721)
- Added the ElevatedPoint typedef ({x: number, y: number, elevation: number}) for 3D points, where x and y are pixel coordinates and elevation is the elevation in grid units. (11722)
- Added Token#measureMovementPath(waypoints, options), Token#_getMovementCostFunction(options), and TokenDocument#measureMovementPath(waypoints, {cost}={}) to assist with movement cost calculation. (11723)
- Added Token#constrainMovementPath(waypoints, options), which tests the movement path for collisions with walls. (11724)
- Added Token#findMovementPath(waypoints, options): TokenFindMovementPathJob which simply returns the path of movement constrained by walls. A module could override this function to implement custom pathfinding. (11725)
- Added support for additional segment properties when measuring paths with BaseGrid#measurePath. (11726)
- Added support for predetermined segment cost and segment-specific cost function to BaseGrid#measurePath. (11727)
- Added TokenDocument#stopMovement, TokenDocument#pauseMovement, and TokenDocument#continueMovement to help allow movement to be stopped, paused, and resumed. (11728)
- Added TokenDocument#movementHistory, TokenDocument#clearMovementHistory() and TokenDocument#_shouldRecordMovementHistory(): boolean to help manage movement history tracking. (11730)
- Deprecated Token#testInsideRegion and Token#segmentizeRegionMovement in favor of TokenDocument#testInsideRegion and TokenDocument#segmentizeRegionMovementPath and modified their signatures. (11731)
- Added Scene.defaultGrid, which is the default grid defined by the system. (11732)
- Added TokenDocument#getGridSpacePolygon, which returns the grid space polygon as an array of points (or returns undefined when gridless). (11733)
- Added TokenDocument#getDirectMovementPath(waypoints), which returns the direct, snapped, step-by-step movement path through the waypoints. (11734)
- Deprecated Token#getSize in favor of TokenDocument#getSize - please note that the deprecation period is shorter than usual. (11736)
- Ruler measurements now account for elevation, when dragging a token, hold ctrl and use the mouse scrollwheel to increase or decrease elevation of the waypoint. (1395)
- The new TokenDocument#getOccupiedGridSpaceOffsets function returns the offsets of all grid spaces occupied by the Token. (10147)
- Added FogManager#isPointExplored, which tests whether a canvas point has been explored by the current User. (10433)
- Tokens now display an animation changing elevation. (11411)
- The PrimaryCanvasGroup now correctly handles containers with PrimarySpriteMesh. (11516)
- The Dynamic Token Ring engine now provides an option to apply a 'Color Mask' , allowing for customizable color areas. (11530)
- getDirectPath now provides consistent paths when traversing adjacent parallel grid spaces on hexagonal grids. (11538)
- The data model for Grid coordinates now supports three dimensional values such as {x, y, elevation}. (11588)
- The new function Token#_getAnimationTransition returns the texture transition type to use if options.transition was undefined. (11683)
- Added chain option (default: false) to Token#animate, which, if true, waits for the the current animation of the same name, if there is one, to finish first before starting the specified animation. (11684)
- Added Token#_getAnimationMovementSpeed, which returns the movement speed to use if options.movementSpeed was undefined, and CONFIG.Token.movement.defaultSpeed, which is the default movement speed returned by Token#_getAnimationMovementSpeed. (11697)
- Added TokenDocument#getSnappedPosition, TokenDocument#getCenterPoint, and TokenDocument#getSize (11711)

`PrimaryParticleEffect``PrimaryCanvasGroup``RegionDocument#teleportToken``BasePointSource#testPoint({x, y, elevation}): boolean``ElevatedPoint``{x: number, y: number, elevation: number}``x``y``elevation``Token#measureMovementPath(waypoints, options)``Token#_getMovementCostFunction(options)``TokenDocument#measureMovementPath(waypoints, {cost}={})``Token#constrainMovementPath(waypoints, options)``Token#findMovementPath(waypoints, options): TokenFindMovementPathJob``BaseGrid#measurePath``BaseGrid#measurePath``TokenDocument#stopMovement``TokenDocument#pauseMovement``TokenDocument#continueMovement``TokenDocument#movementHistory``TokenDocument#clearMovementHistory()``TokenDocument#_shouldRecordMovementHistory(): boolean``Token#testInsideRegion``Token#segmentizeRegionMovement``TokenDocument#testInsideRegion``TokenDocument#segmentizeRegionMovementPath``Scene.defaultGrid``TokenDocument#getGridSpacePolygon``undefined``TokenDocument#getDirectMovementPath(waypoints)``Token#getSize``TokenDocument#getSize``TokenDocument#getOccupiedGridSpaceOffsets``FogManager#isPointExplored``PrimaryCanvasGroup``PrimarySpriteMesh``getDirectPath``{x, y, elevation}``Token#_getAnimationTransition``options.transition``chain``Token#animate``Token#_getAnimationMovementSpeed``options.movementSpeed``CONFIG.Token.movement.defaultSpeed``Token#_getAnimationMovementSpeed``TokenDocument#getSnappedPosition``TokenDocument#getCenterPoint``TokenDocument#getSize`
### Dice and Cards

- Roll#_prepareChatRenderContext is now a protected method that can be easily overridden by subclasses to customize the chat template rendering context. (11650)

`Roll#_prepareChatRenderContext`
### Localization and Accessibility

- The Notifications#notify function now accepts a passed format object to automatically invoke the Localization#format helper. (11419)

`Notifications#notify``format``Localization#format`
## Bug Fixes


### Documents and Data

- Application V2 no longer tries to force contentTags to use </section> to close contentTags. (11656)
- TokenDocument#ring.subject.scale and #ring.effects are no longer nullable fields. (11548)
- AmbientSoundDocument#effects.base.intensity and #effects.muffled.intensity are no longer nullable fields. (11555)
- NoteDocument#fontSize is no longer a nullable field. (11556)
- Combat#_onUpdate only triggers Combat turn sounds when the combat state has changed rather than during other document updates. (11677)
- DataField type settings are now initialized in a way that corrects for cases where a function has no default. (11629)
- An issue that caused portions of Setting#_castType to be unreachable has been corrected and that method now returns later in order to allow time for the data to resolve. (11617)
- To resolve an issue where "View Character/Token Artwork" could be contaminated across different sheets, ApplicationV2 options are now fully deep-cloned. (11699)

`</section>``contentTag``TokenDocument#ring.subject.scale``#ring.effects``AmbientSoundDocument#effects.base.intensity``#effects.muffled.intensity``NoteDocument#fontSize``Combat#_onUpdate``DataField``Setting#_castType`
### Applications and User Interface

- Door controls and resize handles no longer trigger their on-hover effects when below another application. (11545)
- The ChatLog no longer experiences unexpected jitter or chat messages sorted out-of-order during scrolling operations. (11129), (11700)
- "Jump to bottom" should now disappear as expected even when deleting a single chat message. (11618)
- HTMLRangePickerElement#_setValue now rounds the value using min instead of 0 as the step base to correct issues where the range picker would break if the value was not a multiple of step. (11549)
- Hover fade effects are no longer disrupted by token movement. (11592)
- Checkboxes that are disabled are now more visually distinct for the dark theme. (11597)
- Bulk importing into a Playlist now creates Playlist Sounds with the Audio Channel set to the default channel instead of the "Music" channel. (11604)
- HTMLStringTagsElement can now use a placeholder attribute to apply to its string input element. (11660)
- All uses of apple-mobile-web-app-capable have been swapped to mobile-web-app-capable instead. (11696)
- Region Behavior Config is now scrollable. (11720)
- HandlebarsApplicationMixin#_preFirstRender now correctly loads all preloadable templates. (11672)

`HTMLRangePickerElement#_setValue``min``0``step``HTMLStringTagsElement``apple-mobile-web-app-capable``mobile-web-app-capable``HandlebarsApplicationMixin#_preFirstRender`
### The Game Canvas

- The controlHash option of TextureExtractor now functions properly even if the compression mode is NONE. (9327)
- Token waypoint movement now animates properly in cases where the waypoints would land inside a scene region, rather than causing the scene region behaviour to trigger instantaneously.  (10943)
- SquareGrid#getDirectPath with the ILLEGAL diagonal rule now returns a visually optimal path as expected. (11565)
- GridlessGrid#getOffset now converts point coordinates to offset coordinates using floor instead of round (11575)
- Token rings are now correctly sized in hexagonal grids when Grid fit mode is enabled. (11608)
- A position update during an ongoing movement animation no longer has the potential to reveal part of the scene the user is not supposed to see. (11628)
- TextureExtractor#extract with compression mode NONE now returns a copy of the pixels instead of the internal pixels buffer of the TextureExtractor. Added the out: ArrayBuffer option to TextureExtractor#extract that, if set, the pixels are written to and is the buffer used for the pixels array that is returned. (11688)

`controlHash``TextureExtractor``compression``NONE``SquareGrid#getDirectPath``ILLEGAL``GridlessGrid#getOffset``floor``round``TextureExtractor#extract``NONE``TextureExtractor``out: ArrayBuffer``TextureExtractor#extract`
### Dice and Cards

- Chat messages containing multiple rolls now expand properly on the first click rather than requiring multiple clicks to expand the roll data. (10970)


### Localization and Accessibility

- We corrected some incorrect Title values for certain tools (specifically the audio Preview tool on the sounds layer). (11653)

`Title`
## Documentation Improvements


### Architecture and Infrastructure

- We have refactored syntax used for type imports in JSDoc with Typescript 5.5. (11402)


### Package Development

- Improved the documentation of server-side views installPackage and checkPackage methods clarifying which arguments are strictly required and which are optional. (11659)

`installPackage``checkPackage`