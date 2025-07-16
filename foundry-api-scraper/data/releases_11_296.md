# Release 11.296 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.296

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.296


## Version 11 Testing


##### April 28, 2023


## Foundry Virtual Tabletop - Version 11 - Testing 1 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We are excited to announce the beginning of our Feature Testing phase with the release of Foundry Virtual Tabletop Version 11 Testing 1. As we shift our focus from API development to more user-facing features, we look forward to seeing more users checking out some of the great things we've been working on! All through Version 11 we have been working toward the goal of improving the user experience on our setup screen, offering improved compendium functionality by updating our database engine and providing a new level of organization through compendium folders, completely overhauling how synthetic actors work, and a whole new tier of canvas-focused changes bringing overall improved performance.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights

As is often the case with updates on our Testing channel, this release focuses primarily on refining features we developed in V11. We've improved the user experience or interface in a variety of ways, while simultaneously ironing out bugs found during earlier releases. These are just some of the cool features we want to highlight in Version 11 Testing 1:


### Journal to Table

Since we moved to ProseMirror as our primary rich text editor in Version 10 we've received a lot of feedback about the need for a GUI-based way for users to add tables to their journals. We heard you, and Kim took the time during this version to re-introduce support for managing tables within your journal entries via ProseMirror.


### This Just In, Favorites Enabled!

Continuing the series of improvements for the setup screen, we've connected the initial stages of our News Feed and Featured Content displays to our website backend. While these are a simple shorthand rotation for now to just test that the display works, you can look forward to a more curated list in the future! We look forward to being able to highlight new events within the community, news about the company, development progress and more to our audience outside of discord.

In addition, we've taken some pretty great feedback about the user experience of the setup screen and have added the capability for users to mark certain worlds, modules, or systems as Favorites. Favorite packages will be displayed at the top of the menu for each package type, allowing users quick access to worlds they often launch, or packages they often update!


### Compendium Pack Completionist

As we get closer and closer to a release on the Stable channel, we've been working hard to refine our reimagining of the compendium sidebar and compendium packs as a whole. It's now possible to set compendiums to a new "manual" sort mode, allowing users to reorganize their in-game compendium packs as they see fit. In addition, developers will be pleased to know they can now define default compendium folders in the manifest files for their packages, allowing for more out-of-game organization! We've also taken some steps to improve the compendium sidebar UI for readability.


### Programming Pesticide

It's impossible to implement cool new features to any software without introducing the occasional bug. Thanks to the dilligent efforts of our community developers and brave users we have been receiving a steady stream of bug reports in all areas of the software, so our dev team has been fighting the bugs with fervor! Don't worry, the devs took the time to don their customary personal protective equipment— full hazmat suits, gloves, respirators and all.


## Known Issues

Our initial implementation of the news section may initially display an error message indicating that "No content recommendations were received from the foundryvtt.com webserver". This seems to primarily occur on first launch, but is resolved after further launches. We are aware of this issue and will refine this experience in the next release.


## Breaking Changes


### Documents and Data

- The actor variable in script macros now returns the actor for the selected Token. (9158)

`actor`
## New Features


### Architecture and Infrastructure

- Software update checks and download verification requests now use a serverless web infrastructure for improved scaling and reliability. (9258)


### Documents and Data

- The ProseMirror rich text editor now supports GUI-based table creation and editing. (7866)
- Folders of Documents may now be dragged and dropped from the Sidebar to a Compendium. (9272)
- JournalEntryPage now include tracked _stats to assist with project management tasks related to content conversion projects. (9260)

`JournalEntryPage``_stats`
### Applications and User Interface

- Polygon drawings can now be resized using the text inputs for width and height on the configuration window. (8639)
- It is now possible to "Pin" or "Favorite" packages within the Setup UI, keeping them at the top of their respective menus. (8867)
- We've added "Clear Folder" to the context menu for compendium packs. (9193)
- Compendium Packs now support a new "manual" sort mode, allowing users to organize their data within compendiums in a sort order of their choosing. (9219)
- A JournalTextPageSheet is now only be prevented from rerendering if there are unsaved changes in an active editor. (9242)
- We've changimplemented to improve the readability of text on the Compendium Sidebar. (9261)

`JournalTextPageSheet`
### The Game Canvas

- Point sources with origins outside the bounds of the scene are no longer activated. (9282)
- Creating a ClockwiseSweep polygon whose subject polygon origin is outside the bounds of the scene will return an undefined value and log a warning. (9282)

`ClockwiseSweep``undefined`
### Package Development

- Packages may now declare a default Folder organization for Compendium Packs in their manifest via packFolders. (9033)
- Disabling a module now disables any upstream packages that have that module listed as a required dependency. (8594)
- Package installation dialogs no longer clear their input fields in cases where data has been entered before the package list has finished loading. (8608)
- The ModuleConfigurationForm now supports modification of existing modules in addition to the creation of new modules. (9194)
- The migrateManifest utility function has been removed as it is no longer necessary. (9256)
- The user experience of Module creation and editing now uses auto-slugification of package ID and compendium pack name fields for a more streamlined process. (9257)
- The Setup screen now retrieves news and featured content recommendations from our web server and persists those recommendations to disk for display during offline usage. (9281)

`packFolders``ModuleConfigurationForm``migrateManifest`
### Localization and Accessibility

- We've corrected a typo and DOCUMENT.JournalEntries is now correctly pluralized. (8947)
- Macro._executeScript() errors can now be translated using a new localization string. (9159)

`DOCUMENT.JournalEntries``Macro._executeScript()`
## API Improvements


### Documents and Data

- Actor#*allApplicableEffects is a new API function which returns all active effects that are eligible to be applied to the actor. In addition we've also added Actor#appliedEffects which retrieves only the subset of effects currently being applied to the actor. (9185)
- To offer more easily extensible functionality to all page types, some JournalTextPageSheet features have been moved to the parent JournalPageSheet class.(9243)
- JournalPage sheets may now apply CSS classes more specifically to the table of contents only, or to the page view only, by adding entries to page.tocClass and page.viewClass. (9259)

`Actor#*allApplicableEffects``Actor#appliedEffects``JournalTextPageSheet``JournalPageSheet``page.tocClass``page.viewClass`
### Applications and User Interface

- We've added a new {{ifThen}} handlebars helper that allows for outputing ternary string based on a boolean criterion. (9284)

`{{ifThen}}`
### The Game Canvas

- PointSourcePolygon now incorporates several ClockwiseSweepPolygon behaviors. This improvement provides a more rational and powerful backend for custom source polygon definitions. (9073)
- Token Documents now provide a pan option, allowing for tokens to update their position without panning. (9229)
- We've refactored the PointSourcePolygon code for creation of threshold attenuated polygon shapes, and they can now be directly via PointSourcePolygon.create via configuration of the config.useThreshold boolean. (9232)
- Token.#refreshMesh is now a private function, allowing for extending or overriding its shader class. (9247)

`PointSourcePolygon``ClockwiseSweepPolygon``pan``PointSourcePolygon``PointSourcePolygon.create``config.useThreshold``Token.#refreshMesh`
### Dice and Cards

- Roll#resetFormula is now a public API for re-compiling the _formula attribute of the Roll class. (9228)

`Roll#resetFormula``_formula`
### Other Changes

- WorldCollection#set now automatically replaces existing document source records if the document ID previously existed in the collection. (9223)

`WorldCollection#set`
## Bug Fixes


### Architecture and Infrastructure

- Recursive folder deletion is now handled server-side before being emitted back to the client. (8710)
- The confirmation dialog which enables voluntary user telemetry now stores its setting value as expected. (9105)
- Our device and browser detection code now correctly identifies Android tablets. (9236)


### Documents and Data

- It is no longer possible to modify Active Effect embedded documents inside a locked compendium pack.(8718)
- Hyperlinks to image files within Foundry VTT rich text fields no longer open in the current window or tab. (8617)
- Players no longer lose permission to share a journal entry they own after they have shared it with another player. (8716)
- Audio which originates from a video file used as a scene background image are now passed to the correct audio channels and controlled by the ambient global volume control slider. (8779)
- Scenes without a foreground image no longer apply a slight tint the background image. (8944)
- The Compendium Sidebar "Delete Folder" option now functions as intended. (9215)
- The Configure Ownership context action for Folders now functions as intended. (9224)
- Modifying DrawingDocument.elevation and TileDocument.elevation now functions similarly to TokenDocument.elevation. (9235)
- Compendium folder source has been refactored and now uses compendiumConfiguration. (9262)

`DrawingDocument.elevation``TileDocument.elevation``TokenDocument.elevation``compendiumConfiguration`
### Applications and User Interface

- Changing the grid type in the grid configuration tool now updates the preview image as expected. (8952)
- The Token HUD now updates its displayed attributes when they are changed on an Actor Sheet or via other functions.(8589), (8683)
- Attempting to create a new folder while the edit folder dialog is open no longer fails with an error. (8595)
- Game systems with longer names no longer cause the configuration settings sidebar menu to render in unexpected ways. (8597)
- It should no longer be possible for Filepicker application windows to exceed the height of the Foundry VTT application. (8612)
- The Configuration Settings window now maintains its scroll position when settings are changed. (8702)
- The hovered details of a token are now cleared during token movement workflows. (8717)
- The workflow to ban a player now uses the correct API and no longer throws a deprecation warning. In addition, it also re-renders the player list as expected. (8721)
- Journal Entry Pages no longer unexpectedly change order if accidentally dropped ontop of themselves during drag-and-drop workflows. (8915)
- Playlist volume sliders are no longer incorrectly identified as draggable. (8942)
- Duplicating a document from the SidebarDirectory now uses the source name instead of its prepared name. (8997)
- It is no longer possible to permanently hide the players menu through a series of very specific clicks and settings using the AV dock. (9085)
- Clearing the chat log now re-renders the log, removing the "jump to bottom" button as expected. (9115)
- Wall selection no longer causes wall selection to fail after a few clicks. (9124)
- The width of text is now dynamically updated when a drawing containing text is resized. (9202)
- Polygon drawings with text can no longer be be resized smaller than the dimensions of the text via the drag handle. (9203)
- Updating the token display to add or remove conditions on Synthetic Token Actors now applies the condition and updates the Token HUD. (9208)
- Toggling combatant visibility no longer hides the token from the GM's view. (9216)
- Exporting a folder to a compendium now functions as expected. (9217)
- The Compendium tab search now matches against the compendium label rather than name. (9220)
- Package context menus are no longer be displayed behind other UI elements. (9221)
- It is once again possible to configure detection modes for prototype tokens. (9233)
- Package tags no longer overlap package titles. (9252)

`SidebarDirectory``label``name`
### The Game Canvas

- canvas.fog.load() no longer causes the canvas to fail to load during rerendering. (8988)
- A tile that has the isTilingSprite flag set when the occlusion mode is set to Radial or Vision no longer results in canvas failure. (8676)
- It is once again possible to edit Text drawings directly. (8615)
- Token video textures once again sync provided flags.core.randomizeVideo is set to false. (9226)
- We have corrected an edge-case issue which could sometimes cause the "Hovered" state of a token to be lost when dragging it within a scene. (8579)
- MeasuredTemplate's borderColor and fillColor properties now return a number as expected. (8610)
- Changing the texture of a Tile now correctly updates the Quadtree. (8616)
- Resized canvas placeables are no longer incorrectly considered to be a preview. (8653)
- Creating a Text drawing which does not have a set text color no longer results in canvas rendering failures. (8693)
- Scene#legacyHex is now configurable via API calls as expected. (8769)
- The Assign Token button for Prototype Tokens now correctly updates and rerenders the data fields for data that has been updated. (8949)
- For cases where Token Vision Animation is disabled, Ambient sound playback once again functions as expected at the end of the movement process for a Token. (8955)
- VisionSource.shape now uses VisionSource.fov as expected. (9109)
- BaseToken#toObject no longer fails in cases where a token has a null ActorDelta (9195)
- Setting or changing the value of WeatherEffects.elevation no longer results in a deprecation warning. (9204)
- TokenDocument.hasStatusEffect now returns results that more align with user expectation, filtering the list so that suppressed or disabled effects are not displayed.  (9206)
- Tile controls are no longer unresponsive for newly created Tiles. (9211)
- Deleting a Tile with a video texture no longer causes that texture to be missing from other tiles using the same texture. (9227)
- Token images on hexagonal grids no longer render at an unexpectedly small size. (9231)
- Tokens no longer experience a 'one frame jitter' when being moved. (9234)
- Overhead and roof tiles are once again displayed as partially transparent when a GM has no controlled token. (9239)
- Token._onUpdate now checks CONFIG.specialStatusEffects.BLIND during effect changes to allow for easier accounting for differences in game system usage. (9245)
- Toggling the invisible status of an actorless token now triggers a refresh as expected. (9246)
- Updating the overhead state of a tile now updates the mesh immediately. (9250)
- Changes to the shape of a drawing are now refreshed on the canvas immediately. (9251)
- Vision now updates as expected when the size or scale of the token is changed with animate: false. (9271)
- To address issues where the WeilerAthertonClipper#constructor was reversing orientation when provided negative values, it now requires a polygon which has a positive signed area. (9276)

`canvas.fog.load()``isTilingSprite``flags.core.randomizeVideo``MeasuredTemplate``borderColor``fillColor``return``Scene#legacyHex``VisionSource.shape``VisionSource.fov``BaseToken#toObject``ActorDelta``WeatherEffects.elevation``TokenDocument.hasStatusEffect``Token._onUpdate``CONFIG.specialStatusEffects.BLIND``animate: false``WeilerAthertonClipper#constructor`
### Package Development

- Package dependency handling now handles cases where a dependency has been uninstalled more gracefully. (8592)
- Module Management now handles disabled dependencies more gracefully, resolving cases where the configuration application could be left in a state where it no longer offered a prompt for further dependency management. (8593)
- Filesystem errors that occur during package installation or update now provide an informative error message to the user. (8775)
- Single Package Updates now use the update workflow as expected instead of performing an installation. (9009)
- We have addressed some cases which could cause the Module installation progress bar to become stuck at 100%. (9153)
- We've resolved a number of cases which could cause installation of a Game System to stall at 100%. (9237)
- The Foundry VTT logo is no longer displayed incorrectly on the join game screen for a world with a short-length name. (9199)
- Changes to the software update channel setting are now saved as expected. (9218)
- Installing a Package once again installs its dependencies as expected. (9254)
- Filtered results within the package installation window now correctly displays all entries rather than clipping the last entry below the bottom of the window. (9269)
- World-level compendium packs created in V11 no longer incorrectly refer to specific .db filenames. (9270)
- We've improved the the logic and functions used in computing package-persisted directory size, and resolved a bug which could occur if the persistent storage location did not exist. (9274)

`.db`
### Dice and Cards

- Roll.MATH_PROXY now disallows setting properties to prevent abuse. (9277)

`Roll.MATH_PROXY`
### Localization and Accessibility

- The placeholder of the Token Name input field no longer has a leading space. (8642)
- A number of placeholder labels for token and lighting configuration have been updated and standardized to make their units of measurement more clear.(8643), (8644), (8645), (8646)
- To resolve some accessibility issues where certain elements could trap focus and activate keybindings instead of the expected behavior, KeyboardManager#hasFocus now reports whether any focusable HTML element currently has focus. (8654)
- Tooltips for the Next and Previous buttons on the Macro Hotbar now display correctly. (9057)
- We corrected some issues which caused incorrect deprecation warnings to be issued for localization keys. (9267)

`KeyboardManager#hasFocus`
### Other Changes

- Dialog.waitnow provide a resolution behavior more in line with expectations. Please see attached issue for more information. (8758)
- Attempting to call exportToJSON on a ChatMessage now functions as expected rather than failing with a thrown error. (8762)
- Uses of the ChatMessage class for creation of chat messages are now standardized and use ChatMessage.implementation.create. (8791)
- Usage of the TinyMCE Editor no longer throws errors and should function as expected. (9078)
- Chat bubbles no longer fail to display their data as expected. (9120)
- Launching a World no longer throws a "Possible EventEmitter memory leak detected" warning. (9146)
- Selecting 'delete all' on a folder in the Items directory now functions as expected. (9168)
- HTML sanitisation no longer strips the "list-type" type attribute from <ol> elements. (9266)

`Dialog.wait``exportToJSON``ChatMessage``ChatMessage``ChatMessage.implementation.create`
## Documentation Improvements


### The Game Canvas

- PointSource#object no longer relies on instances of PlaceableObject. (9076)

`PointSource#object``PlaceableObject`
### Other Changes

- HandlebarsHelpers.selectOption documentation now makes it clear how to use an array. (9244)

`HandlebarsHelpers.selectOption`