# Release 10.274 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.274

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.274


## Version 10 Testing


##### July 21, 2022


## Foundry Virtual Tabletop - Version 10 - Testing 1 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We are excited to announce the beginning of our Testing phase with the release of Foundry Virtual Tabletop Version 10 Testing 1. This phase will see frequent releases until the stable release which we anticipate to be in early August. This update prioritized bug fixes submitted by the developer community and API improvements to make transitioning to V10 smoother. Now that the API is locked to breaking changes this is a perfect opportunity for our community developers to continue (or begin) testing their modules and systems against V10 before the stable release next month.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new world or oneshot with no modules.


## Known Issues

There is a known issue where tokens with a rotation value set to something other than 0 spin when moved across the canvas. Enjoy the dancing tokens while you can!

`rotation`
## Update Highlights

As the first update in our Testing phase, this update doesn't bring a whole lot in the way of new features and its primary focus was on refining UX/UI and fixing bugs discovered during the API development phase. That said, we were still able to sneak in the following new features:


#### Journals

A number of improvements have been made to journal entries including a more clear UI for active pages, a more dynamic approach to detecting headings for the table of contents, and improvements to how developers can control the active ProseMirror plugins.


#### Package Improvements

A few improvements have been made to how users interact with packages. When searching for a package on the Setup screen that isn't installed Foundry will now present a link to search for it using the Package Installer. Foundry will also surface server side package manifest validation warnings and errors with a UI notification to inform users that certain packages require manifest changes.


## New Features


### Applications and User Interface

- When searching for a package on the Setup Page, if the package is not found a link will now be provided to conveniently search for the package within the Package Installer. (6494)
- The Admin Password prompt now provides a link to instructions on how to reset your admin password. (6505)
- World Login screens and the Setup Menu Admin Password field now allow for auto-complete by browser password managers. (6961)
- When edited, Journal Entry Pages now provide options for displaying or hiding their headers, or setting the level of their headers. (7395)
- Journal pages now provide a more clear UI appearance as to which group of pages and their subheaders are "active". The "table of contents" for the set of active pages is now displayed rather than a single active page. (7406)
- Journal table of contents generation now uses a somewhat more dynamic approach to detection, including h1 elements as well. However, it is recommended that for the purposes of accessibility, Journal pages should refrain from defining an H1, as the 'page title' should be considered the h1 for semantic purposes. (7438)
- The "Download" and "Print" options for the PDF Viewer provided by Journal Pages of the "PDF" type have been disabled. (7416)
- When creating a document the name field is now pre-populated with a semi-unique name of "documentType #" to support more rapid creation of documents. (7562)
- Foundry will now attempt to improve the default resolution scaling setting by guessing whether the user has a retina display and, if so, reducing the resolution by half in order to improve performance. (6879)

`h1``h1`
### The Game Canvas

- To avoid situations where canvas pings would occur as a result of a long press during another mouse-drag operation, canvas pings can now only be triggered when on the Token layer, and will only trigger when specific drag functions like Token movement or Ruler Measurement are not already occurring. (7442)
- The rules for door icon visibility detection have been improved, ensuring that the light source polygon which illuminates the door is on the same side of the door as the vision polygon that has line-of-sight to it. (4192)


### Package Development

- Surface server side package manifest validation warnings and errors to be displayed to the client on the /setup screen with a UI notification to inform users that certain packages require manifest changes. (6727)

`/setup`
### Localization and Accessibility

- A number of control interface icon elements now have alt-text provided to improve accessibility for screen readers. (5386)
- The players list and pause-indicator elements now use more semantic HTML, improving accessibility for screen readers. (5502)
- Users may now use the hotkey shift + c to focus the chat input. (6283)

`shift + c`
## API Improvements


### Documents and Data

- The file browser now allows .csv files to be uploaded. (6881)
- The file browser now allows 3D file types to be uploaded, (specifically: fbx, glb, gltf, mtl, obj, stl, and usdz). (6995)
- "Video" Journal Entry Pages now provide an option to hide the video controls, for those who might wish to prevent the controls from being visible on a video file. (7490)
- JournalEntryPages now provide a system field, allowing systems to store data related to their custom types. (7510)
- ProseMirror.defaultPlugins has been restructured as an object, allowing downstream code to more easily find and swap out plugins. (7555)

`.csv``fbx``glb``gltf``mtl``obj``stl``usdz``JournalEntryPages``ProseMirror.defaultPlugins`
### The Game Canvas

- The Unrestricted Vision Range scene option has been renamed back to Global Illumination. This option provides illumination and visibility to the scene as if it is illuminated by a dim light source. (7557)
- Text drawings which previously did not have a width or height value should now migrate or display properly. (7500)
- A number of improvements have been made to MonochromaticSamplerShader. (7506)
- The CanvasColorManager#initialize function now supports additional configuration parameters to temporarily override the appearance of a Scene. (7509)
- Tile#containsPixel now contains an optional alphaThreshold parameter and, additionally, the new public method getPixelAlpha() has been introduced. (7516)

`MonochromaticSamplerShader``CanvasColorManager#initialize``Tile#containsPixel``alphaThreshold``getPixelAlpha()`
## Bug Fixes


### Documents and Data

- Importing a Scene JSON over the currently active scene should no longer fail with error. (7517)
- TinyMCE should no longer display unexpected data as a result of a module or system injecting HTML into the DOM. (7460)
- Clicking Combatants in the Combat Tracker should no longer throw an error. (7498)
- Journal Entry applications should no longer fail to properly render after being restored from a minimized state. (7505)
- Loading a world without any scenes active should no longer result in an error related to configureColors. (7539)
- Creating a scene in a world that has no active scene should properly activate that scene once again. (7540)

`configureColors`
### Applications and User Interface

- The DefaultTokenConfig application can now render configured data from the local copy of the default token instead of its source properties. (7483)
- Filtering for an actor should once again work as expected. (7535)
- The World#system field should now be correctly populated again on the server-side. (7561)

`DefaultTokenConfig``World#system`
### The Game Canvas

- Ruler measurement should once again be properly synchronized and displayed across all connected clients. (7551)
- Decrease circleVertexEpsilon in order to increase the fidelity of circle approximation. (7418)
- Tokens with Lock Rotation set and a limited vision or light source angle should no longer behave erratically when rotating. (7533)
- Line of Sight polygon computation has been improved to correct for edge cases where the polygon could be incorrect due to specific vertex placements. (6830)
- The logic used for elimination of walls which are very close to collinear with the origin in the ClockwiseSweepPolygon has been improved. (7273)
- Hidden roof tiles no longer incorrectly block weather and lighting for the GM. (7346)
- Token#vision now references the correct source when constructing a sight polygon. (7492)
- The presence of a Roof should no longer cause incorrect handling of collinear walls when constructing a sight or light polygon. (7496)
- SpriteMesh now sets pluginName in the constructor, correcting an issue which prevented batch operations from being performed as expected. (7507)
- Tile#_createTextureData should no longer map all nonzero alpha pixels to 1. (7515)
- The PIXI Batch Renderer should now properly respect the properties of the display object at render time. This resulted from Display object properties being collected only when the batch renderer was flushed, which was problematic if the properties have their values changed in the interim, and this is no longer the case. (7544)
- Walls overlapping the inner padding boundary should now function properly with the ClockwiseSweepPolygon method. (7556)

`circleVertexEpsilon``ClockwiseSweepPolygon``Token#vision``SpriteMesh``pluginName``Tile#_createTextureData``ClockwiseSweepPolygon`
### Package Development

- Dependency warnings should no longer be raised in cases where all dependencies have already been installed. (7523)


### Dice and Cards

- Documents containing rich text entries with a deferred inline roll should no longer fail to render properly. (7504)


### Localization and Accessibility

- Sidebar Tabs which have been popped out now have -popout appended to their HTML ID in order to make them more identifiable as separate elements. (5506)

`-popout`
### Other Changes

- PIXI.Polygon.prototype.toClipperPoints should now properly round points to integers. (7546)
- Toggling an ActiveEffect on an unowned item should no longer throw an error. (7499)
- The FilePicker now correctly opens when files with "%" in the filename are present in the directory. (7501)
- ObjectField should no longer incorrectly allow arrays to be set as a value. (7503)
- ClockwiseSweepPolygon should now clear prior vertices, edges, and rays before re-calling its compute method. (7512)
- A typo in migrateManifest() has been corrected. (7550)
- Tour.fromJSON now correctly prepends the RoutePrefix to the file path. (7560)

`PIXI.Polygon.prototype.toClipperPoints``ObjectField``ClockwiseSweepPolygon``compute``migrateManifest()``Tour.fromJSON``RoutePrefix`
## Documentation Improvements


### Other Changes

- A variety of small typographic or definition errors in the API documentation have been corrected. (7481)

