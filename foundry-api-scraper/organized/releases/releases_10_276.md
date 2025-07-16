# Release 10.276 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.276

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.276


## Version 10 Testing


##### July 28, 2022


## Foundry Virtual Tabletop - Version 10 Testing 2 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We are very pleased to be able to bring you the second release in the Feature Testing phase of our development cycle. Feature Testing releases are designed to allow power users and those with strong stomachs to experience new features as we grow closer to a stable release for the general public! V10 Testing 2 focused on correcting bugs and improving the UX and UI of features newly introduced in Version 10, based on feedback from our development community. If you are interested in providing feedback on these early testing builds, now is the time to check them out! Be cautious, however. Testing builds are not intended for use in weekly games or in heavily-modified Worlds.

Do you want to contribute feedback during the testing phase, but are nervous you might risk your weekly game in doing so? Our friends at Encounter Library have published a very helpful video that will guide you through the process of setting up a testing environment. For those wishing to just check if the systems and modules they use have been updated with V10 compatibility, we've published our usual package compatibility spreadsheet, and community developer Arcanist has published a new Module Compatibility Checker that will let you check compatibility from within any World.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or oneshot with no modules.


## Update Highlights

As we get closer to stable our focus has shifted away from adding massive new features and drifted more toward the important task of shoring up the functionality we've added. The majority of work done during this release was split between bug fixes and improving the UX and UI in a more meaningful way. There is always more to be done, but we hope these changes will bring a satisfying experience for all of our users.


#### User Experience

Across the board, we have examined places where we can streamline the way users interact with the software. Journals have received some UI improvements, enhancing the levels of headings supported by the sidebar and streamlining the UI for page creation. All Documents now support a faster workflow for creation, including focusing the creation dialog when creating to streamline the process of making new actors, items, and more. In addition, a small change to how Document IDs are shown in the header- we've added a new button which will show the ID when hovered and copy it when clicked. We've also touched up a lot of UI CSS and improved the hit radius when you're trying to click tabs for those fast-clickers out there who really need details from the vision tab of their token RIGHT NOW. There are still some changes coming and more we look forward to bringing more UI and UX streamlining to users over the next few weeks.


#### Lighting, Vision, and the API

Hard at work in the pixel mines, the development team have added a few new vision modes and given a very thorough pass on the canvas, fixing bugs and further improving performance in preparation of the future stable release. For the discerning developer interested in diving deeply into the canvas, we've also added a bunch of new API options including exposing WebGL/GLSL shader properties and the ability to add your own post-processing effects. We hope you're all as excited to see these canvas changes as we are!


#### Insecticide

In the push toward a future stable release, a lot of work went into squashing the bug reports we received from our awesome community. A bunch of small issues with the canvas lighting and vision rendering have been taken care of, including the weird issue with walls causing light sources to not be a complete circle. Using more than one type of dynamic Document link in a journal entry shouldn't cause problems any more. Some pesky deprecation warnings with folder creation and combat tracker functions have been cleared up. Also, we cleared up a few issues on the setup screen, addressing those irritating package installation and update bugs.


## Breaking Changes


### Architecture and Infrastructure

- Compendiums containing Actors, Items, and Adventures now have a strict requirement to declare the system which they are compatible with, either directly or indirectly via package relationships. (7636)


## New Features


### Architecture and Infrastructure

- The options.json configuration file now supports specifying a protocol option which accepts '4' or '6' as values and can be used to define whether to listen for only IPv4 or IPv6 connections. (6506)

`options.json``protocol`
### Documents and Data

- Dynamic Document links are now context-aware and can link to sibling Documents within their own collection. (5148)


### Applications and User Interface

- Meta Issue: Implement "Journal V2", enhancing the interface and functionality of the journal system. (4941)
- A number of changes have been made to bring the new ProseMirror editor into feature parity with the previous TinyMCE editor.   (7286)
- Journal Entry and Journal Entry Page sheets have recieved a number of UX and UI improvements. (7637)
- The combat tracker now supports configurable sound cues which play at the start of combat, when your turn is next, and when your turn begins. (7242)
- Document Sheets now include a small button to the right of their titles that allows previewing and copying the ID of that Document to the clipboard. (7596)
- The styling for Scene control icons has been improved to make toggled states for those icons more obviously active. (7628)
- Macros now display the name of the original author as owner when configuring permissions for a macro, to address cases where the original owner may have retained ownership of a macro despite having permission removed by a GM without GM knowledge. (6880)
- When creating Documents, the dialog prompt for Document name is now auto-focused. (5259)
- The World login page should no longer trigger a re-render as a result of another user logging in. (6753)
- File Browsers specifically for choosing a folder will now only display folders, filtering files from the view. (6574)
- The File Browser now supports uploading common font file extensions. (7609)

`ProseMirror``TinyMCE`
### The Game Canvas

- The CanvasVisionMask, WeatherEffects#weather, and CanvasBackgroundAlterationEffects#vision now have a defined filterArea. (7266)
- Vision modes now support an "Adaptive" option which, when enabled, will cause that vision mode to only become active during certain darkness levels. In addition, there is a new "Monochromatic" vision mode option which is not adaptive to darkness level. (7508)
- Negative luminosity light sources should now blur softly into positive luminosity light sources. (7548)

`CanvasVisionMask``WeatherEffects#weather``CanvasBackgroundAlterationEffects#vision``filterArea`
### Package Development

- It is no longer possible to enable dependencies which do not meet the required verified status for a version (based on the compatibility fields minimum and maximum). (7472)
- When updating packages, if a new dependency has been added, the package installer will now prompt to install that dependency. (6601)
- Loading a World now verifies that World, system, and module dependencies have been satisfied and are active. It is no longer possible to have required dependencies in an inactive state. (7254)
- The criteria used for to determinining whether a World can be auto-launched has been improved to account for cases where a World may fail to launch. (7627)
- Package manifest files now support additional properties such as media and relationships.conflicts with the intention that they will be used in the future. (7630)

`verified``compatibility``minimum``maximum``media``relationships.conflicts`
### Localization and Accessibility

- To improve the user experience when navigating Tabs within forms, Tabs have had their child element padding expanded allowing for a larger hit area when clicking on a tab. (6775)
- Dialogs and FormApplications which contains an input with the autofocus property will now be autofocused on render allowing for immediate input. (6819)

`Dialog``FormApplication``autofocus`
## API Improvements


### Applications and User Interface

- Font styles should now be correctly inherited by select elements in cases where previously they were not assigned properly. (6443)
- debouncedReload has been introduced to reduce cases of modules having to implement their own debounced reloads triggering at differeing times. (6626)
- System and Module Settings can now be passed an option to control whether or not changing those settings require a reload. (6472)
- The diffObject helper function now uses prototype.equals and prototype.valueOf for testing primitive types. (7587)
- The colorPicker Handlebars helper should no longer provide invalid color strings. (7603)

`select``debouncedReload``diffObject``prototype.equals``prototype.valueOf``colorPicker`
### The Game Canvas

- WebGL/GLSL shader properties such as uniforms, attributes, and more are now common to all shader functions and have been extended with new useful variables. (7110)
- To provide community developers the ability to add their own post-processing effects to canvas light sources and other elements, we have exposed entry points with dedicated containers for filter effects. (7186)
- ClockwiseSweepPolygon#defineBoundingBox is no longer a private function and has been exposed to the public API. (7577)
- Vision modes now support use of a new tokenConfig boolean to control whether the vision mode will appear in the token config UI or not. (7631)

`ClockwiseSweepPolygon#defineBoundingBox``tokenConfig`
## Bug Fixes


### Architecture and Infrastructure

- The server should once again accept ENV defined paths for SSL certs without error when launching with an explicit command-line provided data path. (7626)


### Documents and Data

- Updating a Document ID in the pre-create hook should once again function as expected. (7571)
- A number of deprecation warnings related to modifying Combatant initiative and preloading Scene audio have been resolved. (7612)
- Creating a Folder should no longer trigger a deprecation warning. (7616)
- Using @Compendium and @UUID dynamic Document links within the same to rich text editor field should now function correctly. (7600)
- Passing the unsupported "sense" field to a WallDocument during creation should no longer result in invalid data being written to the light and sight fields for that Document. (7567)
- The ObjectField initial value now provides an independent object for every instance of that DataModel type instead of cross-polluting initial defaults. (7622)
- A serverside workflow causing an empty pages.db file to be generated and added to each World has been corrected and this file should no longer appear. (7529)

`WallDocument``ObjectField``DataModel``pages.db`
### Applications and User Interface

- All Document creation dialogs should now correctly focus the name input field and auto-generate a name if none was provided on submit. (7625)
- Changing tabs of the Scene configuration application during the Scene creation process should no longer result in an error. (7569)
- Journal pages should now sort as expected during drag and drop operations. (7579)
- Scenes should now sort as expected during drag and drop operations. (7580)
- Stopping a playlist sound that uses a long-duration media stream should now properly unload the stream without error. (7582)
- Cases where Game#togglePause was not respecting the explicitly passed false state have been corrected, and Game#togglePause now will now return the new paused state when triggered. (7604)

`Game#togglePause``Game#togglePause``return`
### The Game Canvas

- Primary canvas interface elements are now sorted in accordance with the same sorting logic used in the primary canvas group itself. (7522)
- Moving a Tile with no defined image should no longer result in an error. (7617)
- VisualEffectsMaskingFilter and VisibilityFilter should now sample uVisionSampler and uRoofSampler as expected. (7473)
- Moving a token directly along the Scene padding border should no longer result in inconsistent line of sight visibility. (7478)
- Tokens once again have a minimum visibility circle assigned if their vision radius is set to 0, to allow the user to continue to see their token without without detecting other objects or revealing fog of war. (7519)
- AdaptiveColorationShader.defaultUniforms.technique should no longer incorrectly return  undefined(7642)
- An issue which caused ClockwiseSweepPolygon#defineBoundingBox to not properly apply its padding has been resolved. (7576)
- An issue which caused walls to prevent ClockwiseSweepPolygon from completing its rendered polygon has been corrected. (7578)
- ClockwiseSweepPolygon _testCollision should no longer throw an error when no collisions are present. (7581)
- The clear color of the primary canvas group now matches the Scene's background color. (7585) (7598)
- VisionSource should now reset the uniforms in cases where the shaders have changed. (7588)
- The PointSource mesh should no longer be distorted in cases wher the the polygon is not inside the bounds defined by the radius. (7599)
- Resetting Fog Exploration should clear cached exploration positions once again. (7613)
- Changing the visibility of token resource bars should should no longer require a reload to take effect. (7614)
- LightSource data initialization has been improved to prevent cases of non-numeric data being passed when the light source color is null. (7586)
- Light source background shaders should no longer be permanently invisible. (7641)
- Shaders should now be visible even if a light source doesn't have a color. (7643)
- A minor edge case in PIXI.Polygon#close has been corrected, avoiding an error which would occur when a polygon had fewer than 3 vertices. (7494)
- The Toggle Notes Display button should once again keep notes visible on all layers. (7485)

`VisualEffectsMaskingFilter``VisibilityFilter``uVisionSampler``uRoofSampler``AdaptiveColorationShader.defaultUniforms.technique``undefined``ClockwiseSweepPolygon#defineBoundingBox``ClockwiseSweepPolygon``ClockwiseSweepPolygon _testCollision``VisionSource``PointSource``PIXI.Polygon#close`
### Package Development

- V10 package compatibility sidegrades should once again function as expected. (7638)
- Attempting to create a new World should no longer result in a thrown error referencing globalThis.packages. (7572)
- Freshly installed packages should no longer incorrectly present compatibility warnings in cases where they are compatible. (7573)
- Attempting to install a World should no longer result in a thrown error referencing undefined (reading "warnings"). (7575)
- Saving changes to the Module Management application should no longer trigger a reload in cases where no changes have been made. (7601)
- Newly installed Add-on Modules should once again be available in a World as expected. (7607)
- Installing a package on the setup screen should no longer result in multiple requests to the getPackages function. (7563)
- Updating a module no longer requires a reload to see updates to compatibility. (7486)

`globalThis.packages``undefined (reading "warnings")``getPackages`
### Dice and Cards

- Inline rolls now display the underlying formula using the Tooltip feature. (7611)


### Localization and Accessibility

- The header title for File Browsers should once again be localized. (7619)

