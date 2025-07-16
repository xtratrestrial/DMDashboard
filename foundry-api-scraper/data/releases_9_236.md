# Release 9.236 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.236

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.236


## Version 9 Testing


##### December 17, 2021


## Foundry Virtual Tabletop - Version 9 Testing 3 Release Notes

Hello everyone and welcome to the final Feature Testing release for Version 9. We're extremely pleased with this build and we would have released it as stable were it not for us wanting to be abundantly cautious. We anticipate it will be released to the stable channel without significant changes in less than a week! Just in time for the holidays!

Due to a caching issue which could cause some trouble with functionality and display, those users who may be testing Version 9 should consider installing a fresh copy, and forcing a cacheless refresh of the software with CTRL+F5(Shift + CMD + F5 for Mac browser users, CMD+Ctrl+R for Mac users using the electron application).

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new world or oneshot with no modules.

WARNING:Be certain to back up any critical user data before installing this update.


## Update Highlights

As this is the final update in the Feature Testing phase, we spent the majority of effort during this period working to ensure stability and correct more bugs submitted by our users! There aren't a lot of features to highlight during this update, but please look forward to a more detailed summary of all the awesome changes in Version 9 in our stable release notes coming soon!


#### Keybindings UI

This update brings with it the ability to specifically rebind and customize hotkeys using our new Keybindings UI. This workflow allows users to choose keys at the press of a button, remapping specific functions to specific keys on their keyboard. It also relaxes some of the restrictions we had placed on keys reserved by core functions to allow remapping those. Gamepad buttons can also be used to map those functions, for those gamepad enthusiasts out there. At this time, you cannot overwrite mouse button presses in order to prevent situations where users might unbind some very important core functionality from mouse clicks. Custom Keybindings are stored in the settings for each world, and will need to be configured each time you join a new world.


#### A Few Last-Minute Features

We couldn't have an update go out completely without feature changes, so we managed to smuggle a few last minute tweaks in. This update brings appearance and performance improvements to light sources with gradual illumination and our new approach to wall-vertex detection. We made some improvements to the visual quality of light sources, specifically the Torch and Sunburst light animations, and added some overall beneficial changes to both positive and negative luminosity light sources. We also brought some changes for Cards, allowing them to be "played" from a Hand with an associated chat message. In addition, card actions now generate a chat messages (such as shuffling or passing) to log what actions were performed. Lastly, we now offer new options when creating a deck to pre-populate it with cards from a standard poker deck in either a light or dark theme.


#### As Many Bugs as We Can Fix

As we focus our efforts on bringing V9 to the masses, the bugs that are being found are mostly minor ones. We resolved an issue with the client-side caching of files which resulted in users needing to force refreshes for the software during the testing phase, have corrected numerous minor edge-case issues with lighting and vision, and improved upon a number of shader-related issues with light sources. Mac users will also be pleased to know that the issue with the Electron application in Monterey (12.1) which caused log outs when the icon was clicked in the dock has been resolved.


## Breaking Changes

- Keyboard press assignment has been hardened to be more strict about what valid keypress IDs may be. This is a late but necessary change which should only have impact if you have already begun registering keybinds using the new keybindings API in V9. (6304)


## Known Issues

- A small CSS issue may affect the alignment of the keybindings UI due to an erroneously assigned flex: none.

`flex: none`
## New Features


### Architecture and Infrastructure

- A more informative error message is now logged if the application fails to start due to its port already being used by another application. (6282)


### The Game Canvas

- The Sunburst and Torch lighting animations have been revisited and visually improved with a higher vibrance and better contrast, taking into account color intensity. (6306)
- The easing for light sources with gradual illumination has been improved when luminosity is set to a value greater than 0.5. (6266)
- Darkness falloff has been improved for light sources with a negative luminosity by using attenuation when gradual illumination is activated, to more closely match the falloff with non-darkness light sources. (6308)
- Brightness for shaders is now mapped according to color intensity and coloration technique, improving the visual quality of light sources. (6307)
- Wall intersection vertices are now tested for whether they are inside a limited angle for field of vision, further improving performance and accuracy of vision calculations. (6255)
- In cases where the software detects the unmasked GPU renderer to as a CPU-emulated software renderer (such as Swiftshader), a warning that hardware acceleration may be disabled is now displayed. (6291)


### Dice and Cards

- Card Stack creation now offers a "Preset Configuration" selection menu which allows for pre-populating a Card Stack with a pre-existing template of playing cards. Templates for a dark themed and light themed poker deck are included by default.(6286)
- Added a play card workflow and control button which allows playing a single specific card from a hand or pile to some other Cards document. (6311)
- Chat notifications have been added, generating chat messages when Cards are dealt, passed, shuffled, reset, or played. (6290)
- Cards have been added as a supported document for dynamic linking. (6305)


### Interface and Applications

- It is now possible to reassign many keys using the new Keybindings UI, allowing for customization of keyboard controls. Please note: mouse button clicks may not be remapped. (6094), (6302)
- More of the core keybindings may now be remapped to custom keys, including controls for targeting, opening a character sheet, deleting objects, pausing, and much more. (6275)
- The Keybindings UI will now display realtime Keybinding Conflicts when editing keybinds, to provide feedback where a chosen keybind may conflict with an existing keybind. (6303)
- The macOS Electron application now provides a custom context menu which can be used to open the User Data folder or Application folder, bringing feature parity with the Windows 10 application context menu. (6280)
- Pluralization and hyperlinking support for packages have been added to the package installer application, bringing feature partiy with the setup view of packages. (6285)
- Darkness Activation Range has been moved to the Basic tab of the lighting configuration menu. (6257)
- A warning is now raised instead of an error if software update is currently available when checking for updates. (6300)


### Other Changes

- When a world is launched for the first time, some helpful getting started messages are now automatically created in the chat log, directing users to next steps and beginner documentation. (6184)


## API Improvements


### Documents and Data

- To allow more fine-grained control over when IDs for embedded objects are preserved or regenerated during import actions, a new keepEmbeddedIds DocumentModificationContext option has been added. This option defaults to true. (6267)
- Document#canUserCreate will now raise an error if used for a document type which does not support this method. (6271)

`keepEmbeddedIds``DocumentModificationContext``Document#canUserCreate`
### The Game Canvas

- Lighting shaders now use more canonical naming conventions for variable names and theory for gamma and luminance. (6054)


## Documentation Improvements

- Corrected the documented return type for fetchJsonWithTimeout. (6270)
- Corrected the documented parameter type for ClientKeybindings._onZoom. (6273)
- Corrected the JSDoc entry for HandlebarsHelpers.rangePicker to indicate range rather than color. (6284)

`return``fetchJsonWithTimeout``ClientKeybindings._onZoom``HandlebarsHelpers.rangePicker`
## Localization Improvements

- Files named using non-roman letter characters should now be correctly located by the filebrowser filter. (6261)
- Added localization for a number of missing localization strings on the Token, Prototype Token, and Combatant Status configuration sheets. (6295)


## Bug Fixes


### Architecture and Infrastructure

- An issue which would result in users being logged out when clicking the FVTT application icon in the dock for macOS Monterey has been resolved. (6246)
- Updating from the setup menu should no longer result in cases where the version number updates even if the update process fails. (6260)


### Dice and Cards

- Deleting a Card document from a compendium no longer throws an error. (6293)


### Documents and Data

- Creating an embedded Document with no _id and a context ofkeepId: true no longer fails to assign an ID for the client. (6301)

`_id``keepId: true`
### The Game Canvas

- Under certain circumstances the implementation of SynchronizedTransform was not, in fact, synchronized. This has been resolved. (5966)
- Decreasing light source luminosity below zero no longer incorrectly removes the applied coloration. (5908)
- Desaturated light sources with negative luminosity should now have an appearance more in line with expectations. (6059)
- Vision should now properly render for a token the first time it is selected after an update to token vision settings. (6219)
- Drag operations which occur while placing walls should no longer result in a thrown error. (6248)
- Grid highlights through rulers and measured templates should no longer disappear when a scene configuration window is closed. (6250)
- To correct for an issue which could make it seem as if an unused space was present at the outer edge of light sources, light source illumination falloff now uses the AdaptiveIlluminationShader for smoother blending with the background color at the outer edges of light sources. (6258)
- Perception updates which are submitted while another perception update is already in progress are now correctly handled on next update instead of incorrectly discarded. (6277)
- Hidden tokens are no longer incorrectly displayed for GM users when outside of an active vision polygon. (6279)
- Vision calculation for limited angles greater than 180 should once again render correctly. This behaviour was resolved by passing an angle (in degrees) into the method explicitly rather than relying upon a difference in radians. (6289)

`SynchronizedTransform``AdaptiveIlluminationShader`
### Interface and Applications

- To resolve numerous issues which occurred as a result of browser cache handling, the FVTT client side now uses Cache-Control: no-cache to always validate with the server if a file is still valid to be served from cache. (6256)
- Error messages on the update tab no longer result in UI elements being pushed outside of menu frame. (6262)
- Switching tabs in the Module Management configuration application should now remember changes made when changing tabs within the window. (6268)
- The Reset to Default function in the Module Settings menu should once again reset sliders as expected. (6269)
- Clicking Save Changes in the Configure Settings menu should now only result in a scene reloading when changes have been made that require it. (6278)
- Using Edit World from within an active world should once again function as expected instead of throwing an error. (6309)
- The Playlist tab should once again render correctly when popped out. (6298)

`Cache-Control: no-cache`
### Other Changes

- To correct for some cases where closing a dialog window without making a choice would throw an error, usage of Dialog.prompt should now correctly use the rejectClose: false option. (6247)
- Returning to setup from an active world no longer throws an error. (6249)
- _onCreateEmbeddedDocuments and _onDeleteEmbeddedDocuments no longer ignore the render context option. (6294)

`Dialog.prompt``rejectClose: false``_onCreateEmbeddedDocuments``_onDeleteEmbeddedDocuments`