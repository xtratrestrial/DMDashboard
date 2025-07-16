# Release 12.321 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.321

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.321


## Version 12 Testing


##### May 02, 2024


## Foundry Virtual Tabletop - Version 12 - Testing 2 Release Notes


## Build 321... Go!

WARNING:  This Testing update is intended for those dedicated users who wish to test the new features provided in Version 12. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!

We are very pleased to announce the release of Foundry Virtual Tabletop Version 12 Testing 2 (Build 321), our second release of the Testing Phase for Version 12! As part of the Testing phase, this update is less focused on new features and more focused on delivering fixes and continuing to add polish in preparation for a Stable relese.

Please keep in mind that features and user interfaces (particularly Scene Regions) will continue to evolve as we start the journey towards a Stable release.

As always, it is very important to back up your user data before any major update. It is strongly recommended to backup your important Worlds before experimenting with the Testing Build. Better yet, consider taking a full Snapshot.


## Update Highlights

While this release focuses primarily on incremental improvements, there are a few changes that we'd like to highlight.


### Teleportation Is Now a Thing

The Teleportation behavior for Scene Regions is now live! You can now create Scene Regions that teleport Tokens to other locations in the same Scene or even to other Scenes.


### Darkness Sources are Pretty

Previously, when a Token's vision was obstructed, it was impossible to tell whether this was the result of a wall or a darkness source. Darkness animations have now been added so that players can more easily intuit why they can't view a region of the map. Perhaps even more importantly, they look cool.


### Other Ongoing Scene Region Improvements

In addition to steady user experience improvements, you can now set a Scene Region so that players can see it and make it visible to GMs even if the Scene Region layer is not active.


## Known Issues

- Teleportation Loops: Endless Fun
            Setting up two Scene Regions that both have Teleport behaviors and are linked to one another results in a journey that lasts for the rest of your Token's life, or at least until you press the refresh button.
            Our scientists are hard at work in our finest enrichment centers and we expect to have this phenomenon resolved for Testing 3.
- Wall Chaining
            Using the CTRL key to chain walls is currently not functioning. Until this is fixed in the next Testing build, you can still use the way Walls snap to the grid to place a continuous series of Walls without any gaps.
- Intermittent Panning Disruptions
            We are continuing to investigate an intermittent issue where right-click dragging sometimes does not pan the canvas.

Teleportation Loops: Endless Fun

Setting up two Scene Regions that both have Teleport behaviors and are linked to one another results in a journey that lasts for the rest of your Token's life, or at least until you press the refresh button.

Our scientists are hard at work in our finest enrichment centers and we expect to have this phenomenon resolved for Testing 3.

Wall Chaining

Using the CTRL key to chain walls is currently not functioning. Until this is fixed in the next Testing build, you can still use the way Walls snap to the grid to place a continuous series of Walls without any gaps.

`CTRL`Intermittent Panning Disruptions

We are continuing to investigate an intermittent issue where right-click dragging sometimes does not pan the canvas.


## Breaking Changes

Please note that while we do our best to avoid breaking changes in the Testing phase, there are some important but potentially breaking changes that were included.


### Applications and User Interface

- The AmbientSoundConfig window has been upgraded to Application V2 and has received a number of improvements both in terms of visual design and functionality. (10824)

`AmbientSoundConfig`
### The Game Canvas

- CanvasVisibility has received some significant performance improvements with dynamic illumination. (10778)

`CanvasVisibility`
## New Features


### Documents and Data

- Errors which occur in Macros now have their error messages forwarded to the console. (10809)


### Applications and User Interface

- Scene Regions now provide a border indicating that Region is controlled, visually consistent with the controlled borders of similar canvas placeables. (10754)
- The UX around controlling or hovering scene regions in the Region Legend has been improved in a number of ways. In addition, when releasing control a Scene Region, it now reverts back to the Select tool so that all regions are visible once more. (10816)
- Double-clicking a Region in the Region Legend now opens the configuartion window for that Region. (10769)
- The Blur option for the Adjust Darkness Level Scene Region behavior has been removed. Instead, this option is now reliant on the configured Performance Mode. (10779)
- The configuration window for Light Sources has some new and improved UI/UX elements to better reflect the differences in behavior between darkness and light sources. (10439)
- Player-controlled tokens that do not have the "Friendly" disposition no longer receive the 'Party' border color, allowing for cases where a player-controlled character might be Hostile to the party. (9993)
- Fine-tuned the styling of Application V2 to improve consistency. Selected inputs should be more visually distinct and width of range inputs should correctly account for the numbers presented. (10723)
- We have taken steps to standardize the UI/UX of HTML tags associated with custom form elements (such as multi-select, string-tags, document-tags, etc.), and they now share the same aesthetic and functionality. (10796)
- HTML range elements now update the displayed value while dragging the slider, but only save the change once released. (10804)
- Software updates on the Prototype channel are no longer offered from the software update menu, and available updates on the Development channel no longer raise a notification 'pip' on the configuration sidebar. (10509), (10604)
- Added RegionBehaviorType._createEventsField so that subtypes that require an events field can create it themselves. (10826)

`RegionBehaviorType._createEventsField``events`
### The Game Canvas

- Darkness sources now have a new visualization with slight padding, providing a soft but distinct visual edge. As a result, players should now be able to distinguish between unexplored areas and darkness that comes from a darkness source. (10438)
- Darkness sources now have a new animation type called "Magical Darkness" which provides an animated black ring with an inner color for the GM. In addition, the Roiling Mass and Black Hole animations have been migrated to Darkness source animations. (10810)
- Scene Regions can now define "Teleport Token" as a behavior. This behavior instantaneously moves tokens that enter one region to a random location in a defined destination region, even if the destination is on another scene. (10695)
- Scene Regions now provide visibility options, allowing them to be displayed regardless of whether the regions layer is active. (10744)


### Package Development

- The process for Module updates now checks if the latest version of a module lists compatibility with one or more of your installed Game Systems. If the update is not compatible, you will now receive a warning and a dialog asking if you wish to proceed. (10096)


## API Improvements


### Documents and Data

- Settings.register now allows the registration of settings without a defined default, in such a case the default will return null. (10682)

`Settings.register``default``null`
### The Game Canvas

- The Edge data structure used for perception polygon generation now directly supports the concepts of direction and proximity threshold instead of requiring that those attributes come from a linked Wall document. (10669)
- Added a new Ruler#_getMeasurementOrigin method which returns the first waypoint of a given measurement. (10815)

`Ruler#_getMeasurementOrigin`
## Bug Fixes


### Documents and Data

- Players with the owner permission for a journal entry no longer lose ownership when they click 'show players'. (9454)
- Fixed a bug that prevented Worlds from launching if the configured system did not specify a color for packFolders. (10545)
- Combat round advancement now triggers end turn and start turn events in addition to round events. (10786)
- Corrected a bug which caused the application of Active Effects to fail in systems that do not have a defined system DataModel. (10788)
- Combat#getCurrentState is now a a protected method which can be called by subclasses, rather than a private function. (10793)
- Macro execution is now prevented in cases where validation of the provided Macro command fails. (10820)

`packFolders``DataModel``Combat#getCurrentState`
### Applications and User Interface

- Double-quotes in a file name no longer prevent the FilePicker from rendering. It is still recommended to avoid the use of double-quotes in file names. (10045)
- We have managed to restore touch control functionality that was negatively impacted in V11 as a result of changes to PixiJS. (10236)
- Application V2 auto-resizing has been improved and now accounts for changes inside the window contents without losing access to important controls such as 'save changes' buttons. (10732)
- Restored functionality for legacy content links by adding data-link. (10535)
- Fixed a bug which caused an Application V2 window from not being able to expand in cases where it was moved after being minimized. (10764)
- The scroll position of the Regions Legend is now preserved when the Legend is re-rendered. (10768)
- The DISMISS keybinding (typically 'esc' key) now verifies an Application closed when pressed before it moves on to other actions associated with that keybinding. This corrects an issue where pressing the key once could result in closing the window, deselecting tokens, and opening the main settings menu all at the same time. (10784)
- Removing an item from a multi-select element now requires clicking on the "X" rather than just anywhere in the tag. (10791)
- Corrected a bug that resulted in the incorrect display of Region elevation range after saving a change to Region elevation. (10792)
- Corrected a bug that caused waypoints not to be placed when if a user was clicking too fast. (10798)
- Scene Configuration no longer uses the (now deprecated) colorPicker helper. (10806)
- Corrected a bug which caused a blank colorPicker input to print a warning regarding formating color values. (10811)
- Scene#_onUpdate no longer uses the (now deprecated) Scene#darkness to update changes to the darkness level. (10807)
- The formField Helper now supports enriched HTML content, but works a little differently from previous iterations. Please see the following issue for more information: (10685)
- Fixed a bug which caused incorrect localization and display for the options in Select fields. (10782)
- Corrected a bug that caused the {{numberInput}} Handlebars Helper to no longer treat "class" as a space-separated list of classes. (10686)
- The HTMLStringTagsElement now escapes HTML when rendering entered tags as expected. (10785)
- Fixed a bug that caused the TinyMCE editor to use incorrect font sizes instead of the correct variable ones. (10801)
- Improved the handling of an explicit null for the hasProperty and getProperty helper functions. (10780)

`data-link``DISMISS``colorPicker``colorPicker``Scene#_onUpdate``Scene#darkness``formField``{{numberInput}}``HTMLStringTagsElement``null``hasProperty``getProperty`
### The Game Canvas

- To address some canvas-related bugs affecting drag interactions, the MouseInteractionManager now handles dragLeftMove and dragRightMove immediately after dragLeftStart and dragRightStart. (10761), (10765)
- Corrected a bug which caused previews of canvas objects to render atop the existing object instead of replacing it. Previews of changes to canvas placeables (such as light sources) should be visible once more. (10766)
- Token movement paths containing waypoints (such as those initiated by ruler-movement) no longer terminate at an early waypoint when crossing Scene Regions that have a behavior configured to update the Token. (10789)
- The Ruler label no longer remains visible if the measured length of the segment is zero. (10799)
- Fixed a bug that made it impossible to drag a token after it had completed a Ruler move. (10800), (10805)
- Corrected an issue that resulted in a failure to properly initialize zIndex for PlaceablesLayers when initializing the Canvas. (10797)
- Resolved an issue with the initialization of canvas layers which could cause Journal Notes with 'Toggle Notes Display' to not display on other layers. (10783)

`MouseInteractionManager``dragLeftMove``dragRightMove``dragLeftStart``dragRightStart``zIndex``PlaceablesLayer`
### Package Development

- Improved the consistency of messages provided in the package installer for modules and systems. (10274)
- Corrected a bug which caused the process of checking for package updates to display an invalid localization string instead of an expected error message. (10781)


### Dice and Cards

- Rolling 0dX dice terms is now possible. (10808)


### Localization and Accessibility

- Corrected a bug that caused the list of available languages to display incorrect information. The list of available languages now only shows languages that are (context-appropriate) provided by an active module or module which has CoreTranslation set to true. (10638)

`CoreTranslation``true`