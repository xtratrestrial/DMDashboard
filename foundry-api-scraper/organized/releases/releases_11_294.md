# Release 11.294 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.294

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.294


## Version 11 Development


##### March 22, 2023


## Foundry Virtual Tabletop - Version 11 - Development 1 Release Notes

Be certain to carefully back up any critical user data before installing this update.

Our previous Prototype 2 release concluded the Prototype phase of our development cycle. Our focus during the API Development phase involves further refining prototype features and solidifying the API based on feedback from users in our Developer community. If you are a Module or System developer, now is the time to begin testing your packages in Version 11 in order to provide us with feedback and request any API changes that would make your lives easier.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights


### Tuning the Canvas for Higher Performance

Performance improvements are always on the menu and Atropos and SecretFire have cooked up a number of great improvements for developers and users. Developers get access to PointSource's elevation levels, improved depth mapping precision, a brand new asset loader courtesy of PIXI's latest version, and the ability to override things like the background, foreground, and fogOverlay of a Scene during initialization. Our non-developer users on the other hand can look forward to performance improvements thanks to a new culling system and general improvements to the efficiency of some common rendering methods.

`PointSource``background``foreground``fogOverlay`
### Synthetic Updates, Real Improvements

The work on synthetic token Actors in this release builds on the foundation that was laid in the previous release. Tokens now contain an internal ActorDelta child that behaves as a full embedded Document and can be updated in isolation. The ActorDelta now also contains a special type of collection, the EmbeddedCollectionDelta with bespoke logic to copy only those embedded children from the base Actor that are modified by the token Actor, significantly improving on the old behavior where the entire collection would be copied if any change was made. These changes have fixed some long-standing issues with synthetic token Actors (detailed below), with more on the way next release.

`ActorDelta``ActorDelta``EmbeddedCollectionDelta`
### Some Like It Hot Reloaded

Another welcome addition that is sure to make developers happy is core support for Hot Reloading. Cody has added the ability to allow Foundry VTT to capture changes to certain files in realtime without having to reload the page. Now changes to your HTML and HBS, JSON used for localization, and CSS files can be seen right away. For those times when you do need to reload we have also improved loading speeds in most circumstances by enabling websocket compression by default. This is changeable using the compressSocket configuration option.

`compressSocket`
### Coming Soon: Setup Theme Customization

This work didn't make it into Developer 1 but for Developer 2 we will introduce support for customizing the theme on the Setup page to ensure that everyone can make their Setup screen as unique as their game. You can keep an eye on the following issues to stay up to date: 9018 and 9019.

- There is occasionally a small flicker when moving certain placeables.
- There is occasionally an issue with drag+drop interactions for the Drawing tools.


## Breaking Changes


### Architecture and Infrastructure

- Updated to V3 of the AWS SDK which requires users to explicitly define which AWS region they want to utilize. (8898)


### Documents and Data

- Migrated ActiveEffect#label to ActiveEffect#name to standardize with other Document types which provide various methods expecting a name field. (9050)
- Adventure import workflows are now public API methods of the Adventure document itself. This allows for programmatic import of Adventure content outside of the context of an AdventureImporter application instance. (8750)

`ActiveEffect#label``ActiveEffect#name``name``AdventureImporter`
### The Game Canvas

- Introduced the RenderFlags class which improves and generalizes the way that Document data changes flow into PlaceableObject#_onUpdate workflows and improves efficiency and maintainability of rendering operations. (9026)

`RenderFlags``PlaceableObject#_onUpdate`
## New Features


### Architecture and Infrastructure

- Added the compressSocket configuration option to control whether to enable websocket compression. This is true by default. (8937)
- Updated the following dependencies: electron, eslint, fs-extra, jquery, jsdom, node-fetch, npm, pixi.js, prosemirror-commands, prosemirror-dropcursor, prosemirror-view, rimraf, rollup, terser, tinymce. (9096)
- Packages are now immediately sidegraded upon installation if there is one available. (8730)

`compressSocket``true`
### Documents and Data

- Folders can now be created with a "Compendium" type to enable support for placing Compendium Packs in Folders. (9032)


### Applications and User Interface

- Pressing Return to Setup when other users are connected to the World now presents a warning. (8871)
- Added support for creating a list of favorite folders in the FilePicker to quickly access commonly used assets. (8998)
- When running Update All notification toasts are now suppressed since the results of bulk installation will be reported in the update log window. (9013)
- Added support for real-time previews of MeasuredTemplate grid highlight spaces during drag template creation. (9062)
- Improved how performance mode levels enable/disable blur filters and/or antialiasing. (9064)
- The field to change an ActiveEffect's name is now in the header of the ActiveEffectConfig sheet for consistency with other core-provided Document sheets. (9093)

`MeasuredTemplate``ActiveEffect``ActiveEffectConfig`
### The Game Canvas

- Upgraded the "No WebGL 2 support" notification toast from warning to error and changed the message to be more explicit about the graphics errors that will occur. (9047)
- Restored blur when using radial and vision occlusion (except radial occlusion with roofs, which is only anti-aliased). (7514)
- Improved the reusability of the WeatherOcclusionMaskFilter for additional weather layers by adding support for elevation. (8994)
- Decoupled Primary Canvas Objects from Document. (9022)

`warning``error``WeatherOcclusionMaskFilter``elevation`
### Package Development

- Added a setting in the options.json for enabling Hot Reload which allows updating of certain files without needing to refresh the page. (9083)
- Game Systems are now sorted alphabetically by title in the Create World interface. (8979)
- Added a mechanism to allow developers to Hot Reload certain Package assets. (9027)
- Freshly created Worlds are now marked as "recently played" and show up first in the list. (9058)

`options.json`
### Localization and Accessibility

- Improved the clarity of the language for Package filtering by changing it to "Installed" and "Not Installed". (8981)


## API Improvements


### Documents and Data

- Implemented the EmbeddedCollectionDelta which stores only the differences against a base collection. (8974)
- Use EmbeddedCollectionDeltas for ActorDelta collections in order to remove the need to copy the base Actor's collection. (9095)

`EmbeddedCollectionDelta``EmbeddedCollectionDelta``ActorDelta`
### Applications and User Interface

- The canvas right-click pan drag speed can now be configured via the CONFIG.Canvas.dragSpeedModifier. (8990)

`CONFIG.Canvas.dragSpeedModifier`
### The Game Canvas

- Improved how elevation is mapped with Primary Canvas Objects. (9045)
- Improved the precision of elevation depth mapping. (9046)
- As part of the update to PIXI V7 our custom loader has been replaced with the new PIXI Assets loader. (8802)
- When updating an ActiveEffect it is now possible to pass animate: false to suppress the default scrolling status text behavior. (8968)
- Culling of light and vision sources is now more efficient. (9016)
- Added the ability to override blur options for fog of war during Scene initialization. (9039)
- Added the ability to load more sources and change the cache expiration during scene initialization. (9040)
- Added the ability to override the background, foreground, and fogOverlay textures during Scene initialization. (9041)

`ActiveEffect``animate: false``background``foreground``fogOverlay`
### Other Changes

- prosemirror-state is now available on the global ProseMirror object for downstream API consumers (8958)

`prosemirror-state``ProseMirror`
## Bug Fixes


### Architecture and Infrastructure

- GM users should now always provide an "exact" match to the OWNER level in Document#testUserPermission. (8962)
- Improved exception handling for UPnP activation so it will gracefully fail when hardware issues are encountered with certain routers. (9065)

`OWNER``Document#testUserPermission`
### Documents and Data

- DataModel.migrateData can now be called recursively for models which are not direct children of the root model schema. (8763)
- The JournalSheet onRender method should no longer ignore the Journal's mode. (8975)
- Exporting to Compendium Packs should work again. (8977)
- Fixed the title of the Duplicate Compendium dialog window to be more accurate. (9000)
- Fixed an issue that caused Scene thumbnail generation to fail due to a PIXI method becoming async. (9001)
- It is no longer possible to create a Compendium with the DocumentType "Folder". (9006)
- Re-ordering items inside a Compendium folder should no longer fail with an error. (9011)
- Fixed an error which prevented correctly applying sorting to Documents when vended to the client. (9020)
- Ensured that Combat#previous is only assigned when some aspect of the turn configuration has changed compared to Combat#current. (9029)
- Removed a duplicate Combat Theme setting from the core Settings menu. (9079)
- Calling updateSource in TokenDocument._preCreate now appropriately modifies transacted creation data for unlinked Tokens. (8761)

`DataModel.migrateData``JournalSheet``onRender``DocumentType``Combat#previous``Combat#current``updateSource``TokenDocument._preCreate`
### Applications and User Interface

- Ensure that applying a status effect overlay can downgrade previous overlays to a classic status icon. (8985)
- New Actors created by dragging from a Compendium Pack to the Actors tab now take default Token settings into account. Hold ALT to ignore default Token settings. (8660)
- Hovering over a Token on the canvas should once again change the mouse cursor to a pointer. (8986)
- Locking/unlocking a Package now correctly toggles the visibility of the Update button. (9005)
- The Setup screen should no longer fail to render when World compatibility data is missing. (9008)
- Fixed several instances of incorrect server-side routePrefix handling including the Go Back button when no game world is active. (9012)
- Searching in the Add-on Modules (or Game System) tabs should once again offer the option to search the Package installer when the item is not found. (9014)
- Fixed an issue that prevented  changes to the Performance Mode setting from disabling the blur filter on the CanvasVisionMask if it should. (9063)
- The canvas.controls.debug.eventMode is now set to none to maintain canvas interactivity. (9072)
- Added back the buttons for creating Folders and Playlists in the Playlists tab. (9082)

`routePrefix``CanvasVisionMask``canvas.controls.debug.eventMode``none`
### The Game Canvas

- The createPolygonWithAttenuatedThreshold method now uses the correct radius. (9043)
- Added an entry point for the deprecated PointSource#refreshSource. (9044)
- Passing Embedded Documents inline with other properties in updates on synthetic Actors should no longer replace existing Embedded Documents. (8351)
- Keyboard-based hex movement should now occur in the expected direction. (8756)
- Toggling the blinded status effect no longer unnecessarily initializes vision. (8911)
- Vision should now update correctly if the blind or invisible status effects are suspended. (8914)
- Light sources should now be disabled if the vision mode can't see light sources. (8919)
- Each CanvasLayer subclass now returns a .name which can be treated as "canonical" for that layer. (8921)
- The defaults of the blindness vision mode should now be applied even when the vision source is blinded. (8928)
- Fixed a bug when color is shifting into a PointSource. (8929)
- A resource with a data.max value of 0 no longer results in a Color value of NaN when used in a Token's resource bar. (8980)
- Ambient Light sources with Provides Vision configured should now be visible without line of sight. (8982)
- Light sources without an active layer (hasActiveLayer) should no longer reveal tokens. (8983)
- The canvas should no longer break after restoration of a lost WebGL context. (8989)
- The AbstractBaseMaskFilter no longer creates an array each time that apply is called. (8993)
- Improved V10 compatibility by supporting the elevation property in PointSources. (9017)
- Detection filters should now work even with a transparent token mesh. (9023)
- Simplified the activation of the detection filters on a token mesh. (9024)
- Changing a Token's elevation now updates its PointSource's elevation as well. (9025)
- Hover events are now prevented on preview objects. This fixes a problem for Tokens where T for target during a Token drag operation would incorrectly attempt to target the preview Token. (9028)
- The createPolygonWithAttenuatedThreshold method now uses this instead of selecting the polygon class from polygonBackends. (9042)
- Improved the inference around expected directional Token movement when the Token isn't snapped to a grid position. (9061)
- The WeilerAthertonClipper.combine method now passes clipOpts to WeilerAthertonClipper.testForEnvelopment. (9074)
- The PointSourcePolygon#isCompleteCircle method no longer fails if the config doesn't have a source. (9075)

`createPolygonWithAttenuatedThreshold``PointSource#refreshSource``update``CanvasLayer``.name``PointSource``data.max``Color``NaN``hasActiveLayer``AbstractBaseMaskFilter``apply``elevation``PointSource``PointSource``createPolygonWithAttenuatedThreshold``this``polygonBackends``WeilerAthertonClipper.combine``clipOpts``WeilerAthertonClipper.testForEnvelopment``PointSourcePolygon#isCompleteCircle``config``source`
### Package Development

- Fixed an issue that prevented locking Worlds, Systems, or Modules that were not compatible with the current version of Foundry. (9004)


### Localization and Accessibility

- Removed a duplicate "." in SETUP.InstallFailure which caused a localization error. (9007)

`SETUP.InstallFailure`
### Other Changes

- World settings of type Array no longer return a nested array. (8765)
- Settings are now cast to their configured data type as part of the initialization workflow. This allows the cast value to always be passed to the onChange handler instead of the raw string. (8908)
- The texture loader should no longer reload a texture if the previous call to loadTexture of the same resource wasn't awaited. (8909)

`Array``onChange``loadTexture`
## Documentation Improvements


### Other Changes

- Updated the PIXI.Polygon#reverseOrientation documentation to be more accurate. (8992)

`PIXI.Polygon#reverseOrientation`