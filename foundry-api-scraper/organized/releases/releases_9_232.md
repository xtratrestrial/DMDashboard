# Release 9.232 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.232

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.232


## Version 9 Testing


##### November 30, 2021


## Foundry Virtual Tabletop - Version 9 Testing 1 Release Notes

Hello everyone and welcome to the first User Testing release for Version 9. With a stable release looming, we have been working to correct reported bugs and to further polish some features. This update brings further changes to the lighting and vision algorithm for increased performance, further improvements to the keybindings API, some playlist improvements and much more!

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new world or oneshot with no modules.

WARNING: Be certain to back up any critical user data before installing this update.


## Update Highlights

As the first update in our User Testing phase, this update doesn't bring a whole lot in the way of new features and its primary focus was on refining UX/UI and fixing bugs discovered during the API development phase.


#### Lighting Performance and Bug Fixes

During the API Development phase we were fortunate to catch a memory leak which would have caused lasting performance implications for all users. In addition, we further refined the way we were handling detection of wall intersections, leading to better initial load times and an overall increase in performance for large maps with an excessive number of walls. We also resolved some bugs related to light rendering particularly at the edges of the map and for limited angle light sources.


#### Playlist Drag and Drop

We were able to reach back into the UX/UI improvements list we had planned for 0.8.x and bring forward a planned feature that was left behind in the interest of giving it the time it needed. Playlists now support drag-and-drop operations in a number of ways, allowing users to reorder tracks within and between playlists, drag tracks into journal entries as dynamic links or onto the canvas as audio sources.


#### Further Keybinding Refinements

As we work toward a UI implementation for rebinding hotkeys, we have begun implementing the framework to allow the Keybinding system to detect and support button presses from gamepad devices. While we wouldn't call this "Gamepad support", as it doesn't make Foundry Virtual Tabletop operational only with a gamepad, it will allow users to bind any of the functions which support rebinding to use gamepad button presses. In addition, we took the time to correct some API bugs with the keybinding system and are looking forward to more improvements as we implement the user interface for it.


## Known Issues

- Lights with limited emission angles do not project through single terrain walls properly. (6158)


## New Features


### The Game Canvas

- Wall intersection detection (WallsLayer#identifyWallIntersections) has been improved and now uses a superior algorithm to compute all the intersection points for all walls within a scene. (6154)
- The performance of WallsLayer#identifyWallIntersections has been further improved by incrementally calculating the intersections for a single wall when it is changed instead of recomputing all intersections for the entire Scene. (6107)
- In cases where SmoothGraphics is not required for antialiasing, the canvas will render using PIXI.LegacyGraphics explicitly, to provide for improved performance. (6099)
- The Gradual Illumination setting for light sources is now enabled by default for newly created (or migrated) lights. (6178)

`WallsLayer#identifyWallIntersections``WallsLayer#identifyWallIntersections``SmoothGraphics``PIXI.LegacyGraphics`
### Interface and Applications

- Playlist Sounds may now be re-ordered using drag-and-drop operations. (642)
- Playlist Sounds may now be moved between playlists using drag-and-drop operations. (6175)
- Playlist Sounds may now be dropped into a rich text field such as a Journal Entry to create a dynamic link. (6173)
- Playlist sounds may now be dropped on the canvas to create and place an Ambient Sound. (6174)
- In addition to highlighting the icon to indicate if a combat is Pinned, Pinned Combats now use a separate icon to better indicate whether a combat has been pinned to a scene or not. (6134)
- When creating a world, the data path for the world will now auto-fill using a slugified version of the world title. (6096)


## API Improvements


### Architecture and Infrastructure

- Objects within CONST declarations now have Object.freeze explicitly called to prevent modification of those values, as these should not be altered on the client side. (6179)

`Object.freeze`
### The Game Canvas

- PointSourcePolygonConfig now contains a source property which references the PointSource that created it, if any. (6111)

`PointSourcePolygonConfig``source`
### Interface and Applications

- The Keybindings system now supports registering Gamepad button presses. (6041)
- Many occurrences of KeyboardManager.isControl have been removed as it is now deprecated. (6167)
- Keyboard _downKeys private method has been reintroduced as a public downKeys method. (6139)
- Certain keys (such as F5) are now prevented from being rebound. (6136)
- Keyboard, Mouse, and Gamepad control management has been divided into game.keyboard, game.mouse, and game.gamepad. (6182)

`KeyboardManager.isControl``_downKeys``downKeys``game.keyboard``game.mouse``game.gamepad`
### Other Changes

- Users hosting via a third party service may now use the command line flag noipdiscovery to skip the external port check. (6118)
- In order to lay groundwork for future compendium improvements, the preliminary model for a new Document type ("Adventure") has been created. This Document type is not ready to be used, and we ask that community developers refrain from building upon it at this time. This document type is expected to become part of the public API in V10.

`noipdiscovery`
## Bug Fixes


### Architecture and Infrastructure

- Corrected an issue where attempting to overwrite a .webp file incorrectly detected it as an unsupported file type. (6133)
- Browsing an S3 source for audio files to add to a playlist should once again display files to choose from. (6135)


### Documents and Data

- It is now possible to save an existing scene configuration even if the user has the canvas disabled. (6124)


### The Game Canvas

- Hovering and dragging Tiles no longer performs perception refresh calls, resulting in an increase of performance when dragging tile previews. (6100)
- Submitting a Light Source configuration form no longer performs an unnecessary call to AmbientLight#updateSource. (6122)
- Rulers are no longer incorrectly reproduced on other scenes if they are active when the scene changes. (6109)
- Sight layer visibility testing no longer causes token-emitted light sources to be incorrectly visible through a wall. (6123)
- The boundary edges of the canvas are now included when precomputing wall intersections, so that walls which intersect the canvas boundary still produce correct lighting and vision polygons. (6127)
- The ClockwiseSweepPolygon no longer causes light sources that extend to the edge of the canvas to become blurred instead of seamlessly reaching the outer edge. (6128)
- The WebGL version check should no longer incorrectly establish a temporary WebGL context with default options, but instead use the context provided by the renderer. (6141)
- Thumbnail generation now raises an informative error message when attempting to create a scene with the canvas disabled. (6144)
- Resolved a memory leak which would occur as a result of unused graphics objects not being destroyed. (6147)
- Light sources of tokens are now added to sources in LightingLayer#initializeSources. (6151)
- Lights migrating from 0.8.9 now correctly migrate values for emission angle and darkness activation threshold. (6157)
- Framerate restrictions are now correctly applied to all tickers used by the PIXI. (6169)

`AmbientLight#updateSource``ClockwiseSweepPolygon``LightingLayer#initializeSources`
### Interface and Applications

- Command+Left is now prevented from trying to navigate away from the page for MacOS devices. (6131)
- onUp events now correctly fire for CTRL key presses. (6149)
- When opened from a popout window, compendium views now open and close as expected. (6146)
- Modifier keys now correctly differentiate between one modifier key pressed and all modifier keys pressed. (6150)
- The token conditions menu no longer incorrectly displays the list of conditions as a single column. (6155)
- Video windows do not make use of available extra space when player list is hidden. (6160)
- updateLocalStream is no longer incorrectly called as a public method. (6159)
- Clicking Return to Setup with the wrong administrator access key from the world join screen should now raise an error message instead of a connection time-out. (6176)
- The file upload button for a world background in the Edit World configuration window is now displayed even if an Admin key is not set. (6138)

`onUp``updateLocalStream`
### Other Changes

- Datalist and other input options which provide auto-fill suggestions no longer cause KeyboardManager to throw errors. (6142)
- Setting a default world to launch once again functions as expected. (6162)

`Datalist`