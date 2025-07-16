# Release 9.235 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.235

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.235


## Version 9 Testing


##### December 08, 2021


## Foundry Virtual Tabletop - Version 9 Testing 2 Release Notes

Welcome to the release of Version 9 Testing 2 for Foundry Virtual Tabletop! As we march ever closer to stable release, we've been clearing out bugs reported during the Feature Testing and API Development phases. We'd like to thank all the users and community developers who have taken the time to test Version 9 with us and provide us with important feedback and reports of bugs. The key features we focused on developing in V9 were improvements to the Lighting and Vision system, support for managing and playing cards, and we managed to smuggle some cool bonus features in as well such as the new Keybindings system.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new world or oneshot with no modules.

WARNING: Be certain to back up any critical user data before installing this update.


## Update Highlights

As the second release in our Feature Testing phase for Version 9, this update primarily focused on implementing fixes to bugs based on feedback from the intrepid parts of the community willing to test our previous build. As such there aren't a whole lot of features to highlight or dicuss.


#### Next Step for Keybindings

Having corrected some flaws in the keybinding system, we're still working toward making the user experience of setting new key bindings comfortable. This update brings the first UI implementation, in the form of a read-only display of keybindings that you have configured via the API. Our next iteration will feature ability to change keybindings via this menu, but for now we chose to focus on getting a preliminary display up for the user instead. Please note: it is not within the scope of V9 to allow users to rebind mouse button clicks, as this would require far more significant changes to the infrastructure for our controls.


#### Continued Canvas Improvements

As a large part of the focus for V9 has centered around lighting and vision rendering, we continue to optimize the numerous refactors we've made. While the performance gains for many of the changes made in today's update are minor, the continued refinements reduce technical debt overall and should help to make V9 one of the most performant releases to date. In addition to making changes to a number of background tasks, we have also taken the time to implement a setting for Performance Mode (Low, Medium, High, and Maximum) which allows users to fine-tune some ways the canvas handles rendering. If you do not have a Performance Mode set when you first join a game, it will automatically base your performance mode on your detected hardware. Those with more substantial gaming computers with dedicated GPUs should feel comfortable setting this to maximum.


#### New User Experience Improvements

Some of you may have noticed that we have a new label for issues on gitlab: NUE. These issues are ones we've identified as potential pain points where new users struggle to adapt to the software or where improvements could generally be made to streamline the learning curve. This release brings the first in a series of updates we will be working toward over time in order to make the software more approachable for new users. We have changed the behaviour of the setup menu a little for fresh installations, so that new users are prompted to install a Game System before they get started trying to create a World.


## New Features


### The Game Canvas

- The Foreground layer's occlusion mask texture is now only rendered when it is necessary to do so (when roof or radial overhead tiles are present). (6117)
- Clients which do not already have a Performance Mode setting defined are now assigned one based on the attributes of the detected GPU. (6208)
- The lighting illumination container now uses a BlurFilter instead of an AlphaFilter for high or maximum performance modes to ensure that borders of vision and light sources blend smoothly. (6145)
- The Low performance mode setting disables the use of rendered textures for lighting and vision rendering in the interest of performance. (6207)
- Some prototype code for the lighting layer delimiter display which was intended for internal use only has been removed. (6205)
- The previous restriction on maximum vision radius has been removed as this is now determined by the bounds of the canvas. (6218)

`BlurFilter``AlphaFilter`
### Interface and Applications

- A basic UI for managing keybinds has been added in preparation of allowing users to rebind keys. At present, this UI is read-only, setting new keybinds still requires use of the keybinds API. Please note: rebinding mouse click functions is not supported and will not be supported in V9. (6040) (6094)
- The Reset Advanced Options button has been moved and now only appears on the advanced lighting options tab when configuring light sources. (6217)
- When filtering the pages of the Setup menu, such as the Add-on Modules tab, a message is now displayed if no results are found. (6241)


### Other Changes

- To make it more clear for new users, a freshly installed Foundry VTT will now display a prompt recommending installing a game system, in addition the the Game Worlds tab is disabled until a game system is installed. (6183)


## API Improvements


### Architecture and Infrastructure

- Minor version updates have been made to  dependency packages. (6245)
- CONST.DEFAULT_NOTE_ICON and CONST.DEFAULT_MACRO_ICON have been redefined and are now located on their respective DocumentData classes so that they can be configured using the API. A deprecation path has been left in place for the previous CONST declarations and will be removed in V10. (6242)

`CONST.DEFAULT_NOTE_ICON``CONST.DEFAULT_MACRO_ICON``DocumentData`
### The Game Canvas

- The data type of the new core.performanceMode setting has changed from a string to an integer enum indexed by CONST.CANVAS_PERFORMANCE_MODES for improved comparison of performance options. (6237)

`core.performanceMode``CONST.CANVAS_PERFORMANCE_MODES`
## Documentation Improvements

- The documentation for GridLayer.measureDistance  has been corrected and clarified. (6181)
- Added JSDoc strings for PlaylistData#sorting and UserData. (6223) (6225)

`GridLayer.measureDistance``PlaylistData#sorting``UserData`
## Localization Improvements

- Corrected an issue which caused Localization#has to only account for the fallback locale and not the selected locale. (6233)

`Localization#has`
## Bug Fixes


### Architecture and Infrastructure

- Attempting to return to setup from world login without an admin key set no longer attempts to access an undefined page. (6196)
- Packages, such as Add-on Modules and Game Systems, which define compatibleCoreVersion: 9 should no longer incorrectly notify the user they may be incompatible with new versions when installed. (6243)

`compatibleCoreVersion: 9`
### The Game Canvas

- Lights with limited emission angles should now correctly project through single terrain walls. (6158)
- A redundant initialization workflow for Ambient Light sources when a scene is first loaded has been removed. (6168)
- Dragging wall points should now work as expected. (6186)
- Deleting a measured template after saving its configuration should now function as expected. (6226)


### Interface and Applications

- The Keybind API once again correctly detects mono modifier keys on key up. (6232)
- Canvas Mouse events should once again pass the correct details for chaining checks, resolving issues with wall and ruler chaining. (6188) (6191)
- The notification pip indicating that an update is available no longer continues to show if you abandon a forced update. (6202)
- Pressing Alt to highlight canvas objects no longer incorrectly causes all objects to become stuck in a highlighted state. (6220)
- Collapsing the macro hotbar now also collapses the hotbar page controls. (6222)
- The Active Modules tab of the Module Management window no longer reports that the user lacks permissions to modify the list if there are no modules active. (6229)
- Pressing enter in quick succession in a Dialog should no longer cause default form submission events. (6230)
- Fallback sorting of combatants with equal initiative values now uses IDs instead of names to prevent issues which might arise from localization of names between clients. (6231)
- The handling of the _onPaste keybinding event has been reworked to only block execution of other keybindings or default actions if objects were pasted. (6238)
- The sound preview tool should once again function as expected instead of producing errors. (6239)
- The list of available recipients when dealing cards should now properly wrap within the Deal Cards window instead of clipping. (6240)

`_onPaste`
### Other Changes

- The property declarations for DatabaseBackend#_getDocuments and DatabaseBackend#_getEmbeddedDocuments have been updated to more accurately reflect their usage. (6177)
- In some cases, ContextMenu was not correctly dispatching corresponding hooks, this has been corrected. (6187)
- Deleting a deck of cards which has cards dealt to player hands is now prevented and notifies the user to suggest resetting the deck before deleting. (6199)
- Banning or unbanning a player should once again function as expected. (6235)

`DatabaseBackend#_getDocuments``DatabaseBackend#_getEmbeddedDocuments``ContextMenu`