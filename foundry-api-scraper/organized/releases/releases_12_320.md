# Release 12.320 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.320

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.320


## Version 12 Testing


##### April 26, 2024


## Foundry Virtual Tabletop - Version 12 - Testing 1 Release Notes

We are eager to announce and share the release of Foundry Virtual Tabletop Version 12 Testing 1 (Build 320), our first release of the Testing Phase for Version 12!

WARNING:  This Testing update is intended for those dedicated users who wish to test the new features provided in Version 12. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!

As part of the Testing phase, this update is less focused on new features and more focused on starting to polish them up and delivering fixes. As we refine our designs during the upcoming testing releases, you can expect further improvements along these lines!

Please keep in mind that features and user interfaces (particularly Scene Regions) will continue to evolve as we start the journey towards a Stable release.

As always, it is very important to back up your user data before any major update. It is strongly recommended to backup your important Worlds before experimenting with the Testing Build. Better yet, consider taking a full Snapshot.


## Update Highlights

While this release focuses primarily on steady improvements to V12, there is one new feature that we'd like to highlight and explain a bit further.


### "Dynamic" Global Illumination for Scene Regions

Properly illuminating a Scene that contains a mix of "lit" and "unlit" spaces has always been challenging. This often happens when you have a dark indoor space near an outdoor setting and is particularly tricky if the players might visit the area during the day or night.

This common situation can now be resolved using Scene Regions and an existing Scene configuration setting.


#### TL;DR

Even if Global Illumination is enabled for your Scene, you can now make a building, cave, or similar area mechanically "unlit" just by darkening it with a Scene Region.


#### The Nitty Gritty

Scenes already have an existing setting called the "Global Illumination Threshold." This setting allows you to easily use the same Scene during the "day" or "night" by automatically disabling Global Illumination when the Scene is dark enough. A Scene's darkness can be controlled by configuring its "Darkness Level" setting or by clicking the "Transition to Night" lighting control.

In the first incarnation of Scene Regions, you could darken a part of the map visually using the Adjust Darkness behavior, essentially making it dimmer, but this would have no mechanical effect on Token vision. Now, if the darkness of the Scene Region meets the Scene's Global Illumination threshold, the area automatically becomes mechanically "unlit" as well. That is, tokens will no longer be able to see inside that region unless they have some other detection mode or source of illumination.


## New Features


### The Game Canvas

- The existing Scene-level Global Illumination Threshold now also applies to Scene Regions that use the Adjust Darkness behavior. When this threshold is set, you can now exclude the Scene Region from Global Illumination just by darkening it. (10749)


### Scene Regions

- When a Scene Region is hovered or selected, the entire row of Scene Regions is now highlighted in the Region Legend. (10719)
- Applied a random color to newly created Scene Regions rather than having them be colorless by default. (10745)
- Added an indicator for a Scene Region's assigned color in the Scene Region legend. (10724)
- Added a "Delete All" button to the Scene Region controls. (10707)
- For consistent UX with similar canvas objects, ALT (instead of CTRL) is now used to lock aspect ratio when placing a Scene Region's Shape. (10718)
- Added a button to the Scene Region legend to create an empty Scene Region. (10738)
- Elevation ranges are now set at the Scene Region level and are now uniform across the entire Scene Region. To support this, the bottom/top elevation was removed from BaseShapeData and added to the RegionDocument instead. (10742)

`ALT``CTRL``BaseShapeData``RegionDocument`
### Architecture and Infrastructure

- Implemented winston-daily-rotate-file to reduce the file size impact of error and debug logs. (9972)

`winston-daily-rotate-file`
### Applications and User Interface

- Created a client setting to allow the user to choose whether the Application V2 theme should be light mode, dark mode, or match the browser default theme. (10678)
- Suppressed notification pips for new core versions when you are using a game system that does not yet support that version. (9572)
- Improved the UserConfig to more clearly organize the Actors that a User can pick and to indicate whether the User owns that Actor or is simply an observer.(9892)
- The detection mode "Basic Sight" was renamed to "Darkvision" to better indicate that this detection mode controls Token vision in non-illuminated areas. (10728)

`UserConfig`
## API Improvements


### Applications and User Interface

- Added a basic ActorSheetV2 implementation which provides a starting place for modules that wish to use the Application V2 framework for their Actor sheet UI. (10657)
- Explicitly named ItemSheetV2 so that it now has a "V2" suffix in the class name. (10658)
- Loosened restriction on settings menu applications so they can be Application V2 instances or classes. (10680)

`ActorSheetV2``ItemSheetV2`
### Other Changes

- When an array is passed to the selectOptions handlebars helper, the index for each element is now retained as its value attribute. (10691)

`selectOptions``value`
## Bug Fixes


### Documents and Data

- Prevented a case where invalid embedded Documents could make the parent Document invalid. (10566)
- Integer NumberFields now take into account that they might also be nullable when attempting to round input values. (10670)
- Combat#getCombatantsByToken now properly returns an array of Combatants instead of a single instance. (10672)
- Custom DataField subclasses now have their active effect apply methods called. (10679)
- Beginning a combat without combatants no longer throws an error. (10702)

`NumberField``Combat#getCombatantsByToken``Combatant``DataField``apply`
### Applications and User Interface

- Fixed a bug where the Combat tracker could not be configured. (10662)
- Fixed a bug which prevented the Prototype Token configuration dialog from rendering. (10675)
- Fixed an issue with a captured pointer event that was causing ApplicationV2to not properly minimizes the application on dblclick. (10684)
- Fixed an issue where the "Game Paused" indicator was on top of open applications by once again starting Application windows from z-index-window instead of z-index-app. (10689)
- Changing the value of a <color-picker> custom element now triggers Application#_onChangeInput. (10693)
- Allowed Application V2 click actions to customize which pointer buttons they respond to. Added support for right-clicking the "Copy Document ID" button in Application V2 to copy the UUID of the document to the clipboard. (10704)
- Line-breaks no longer appear as <br> in text areas that were created by JavaScriptField. (10705)
- Playlist audio initialization is now delayed until after game audio is unlocked. Sound instances for PlaylistSound documents are now only created lazily when playback is actually required. (10753)

`ApplicationV2``dblclick``z-index-window``z-index-app``<color-picker>``Application#_onChangeInput``<br>``JavaScriptField``PlaylistSound`
### The Game Canvas

- SquareGrid#getCircle/getCone no longer returns incorrect results when a nonzero origin is passed to it while alternating diagonals are in use on a square grid. (10694)
- Transparent parts of the Token's image no longer become darker when Dynamic Ring is enabled. (10703)
- ClockwiseSweepPolygon no longer fails to compute the correct polygon in some positions with a darkness source. (10711)
- Fixed an error where the PointVisionSource.blindedColorRGB getter tried to access the private PointVisionSource.#blindedColorRGB property. (10731)
- The MouseInteractionManager now handles dragLeftMove/dragRightMove immediately after dragLeftStart/dragRightStart. (10761)
- Fixed an issue where dragging certain hexagonal shaped tokens did not snap the token to the desired position. Tokens are now "grabbed" at their center regardless of the drag origin point. (10762)
- TokenHUD##onToggleCombat no longer calls the base static methods deleteCombatants and createCombatants rather than any system implementation. (10735)

`SquareGrid#getCircle``getCone``ClockwiseSweepPolygon``PointVisionSource.blindedColorRGB``PointVisionSource.#blindedColorRGB``MouseInteractionManager``dragLeftMove``dragRightMove``dragLeftStart``dragRightStart``TokenHUD##onToggleCombat``deleteCombatants``createCombatants`
### Dice and Cards

- Roll.replaceFormulaData once again can invoke toString on complex objects. (10674)
- Manual exploding die inputs now correctly reject values that are outside of the range of the die. (10736)

`Roll.replaceFormulaData``toString`
### Scene Regions

- Prevented the Scene Region dialog from rendering strangely after a Macro UUID is assigned. (10673)
- An error is no longer thrown when non-GM users move a Token into a Scene Region. (10706)
- "REGION.SHAPES.polygon" is now correctly a "Polygon" instead of a "Rectangle". (10698)
- Fixed a bug where the "Left Click to Release Objects" client setting was preventing new Shapes from being added to existing Scene Regions. (10696)
- Scene Regions without any shapes now appear in the legend. (10727)

`"REGION.SHAPES.polygon"``"Polygon"``"Rectangle"`
### Other Changes

- Compendium packs can once again be migrated from NeDB to LevelDB. (10681)
- @Embed no longer fails when relative UUIDs use implicit keys. (10688)
- Hot reloading JSON/HTML/Handlebars files no longer throws an error. (10700)
- Fixed an issue where the TextEditor._primeCompendiums regex was not matching UUID links featuring non-word characters. (10750)

`@Embed``TextEditor._primeCompendiums`
## Documentation Improvements


### Other Changes

- The {{#select}} deprecation warning now correctly refers to createSelectInput rather than createSelectElement. (10690)
- The deprecation warning for Token#toggleCombat now correctly mentions TokenDocument#toggleCombatant instead of Token#toggleCombatant. (10734)

`{{#select}}``createSelectInput``createSelectElement``Token#toggleCombat``TokenDocument#toggleCombatant``Token#toggleCombatant`