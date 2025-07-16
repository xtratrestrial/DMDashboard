# Release 13.337 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.337

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.337


## Version 13 Testing


##### February 28, 2025


## Foundry Virtual Tabletop - Version 13 - Testing 2 Release Notes


## V13: Testing, Testing!

WARNING:  This Testing update is intended for those dedicated users who wish to test the new features provided in Version 13. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!

We are very pleased to announce the release of Foundry Virtual Tabletop Version 13 Testing 2 (Build 337), our second release of the Testing Phase for Version 13! As is typical for a Testing build, this update brings a wealth of ongoing improvements and bug fixes, but it also includes some exciting new features that are now ready for a first look from the community.

Please keep in mind that features and user interfaces will continue to evolve as we continue our journey towards a Stable release.

As always, it is very important to back up your user data before any major update. It is strongly recommended to backup your important Worlds before experimenting with the Testing Build. Better yet, consider taking a full Snapshot.


## Token Drag Measurement: Ready for Testing!

We are happy to report that our Patreon community vote winner, Token drag measurement, is nearing completion!

There are two different ways to drag a Token using waypoints. Use the process that feels more natural to you.


#### Using CTRL+Click

While dragging a Token and holding down the CTRL button:

- Release the left mouse button, then left-click the map to place waypoints
- Right-click anywhere to remove the last waypoint you placed

When you finish plotting your Token's path, release the CTRL button, then:

- Left-click the final destination to move the Token, or
- Right-click anywhere to cancel the entire movement


#### Using a Keybinding

While dragging a Token:

- Press the configured "Place Waypoint" key ( F by default) to add a waypoint at the cursor's location'
- Press ALT and the same "Place Waypoint" key to remove the last waypoint you placed ( ALT + F by default)
- Right-click anywhere to cancel the entire movement


#### Additional Controls

Whichever method you use, these controls are also available:

While dragging a token, you can raise the elevation of the next waypoint with one of the keys bound to "Ascend Elevation" ( Numpad+, or E by default).

Similarly, you can lower the next waypoint with one of the keys bound to "Descend Elevation" ( Numpad-, or Q by default).

`[Hidden]`Typically, the elevation is always changed by an amount equal to the grid size. On a map with a 5 foot grid, Tokens go up and down 5 feet at a time.


#### Token Drag Measurement and the Existing Measure Distance Ruler

The new Token Drag Measurement ruler and the existing Measure Distance ruler share the same controls for setting waypoints and changing elevation, but there is an important difference between them. The Measure Distance ruler measures distance, while the Token Drag Measurement ruler measures movement cost.

Typically, these calculations are the same, but if part of the area is "difficult terrain" and includes one of the new "Modify Movement Cost" Scene Region Behaviors, the two rulers will give different results.

To make way for Token drag measurement, we decided to change the Measure Distance ruler so that it is now toggled on and off using a new configurable key ( R by default) instead of CTRL. Alternatively, you can still use the "Measure Distance" button, located in the Token Controls at the top-left of your screen.


## Additional Highlights

This update also contains two other minor new features that we would like to spotlight.


### Additional Control Over Automatic Token Rotation

Earlier in V13, we added a feature to automatically rotate tokens in the direction that they are moving. Although this is realistic and fun when using top-down tokens, community feedback indicated that it was a highly undesirable behavior for "pog"-style tokens (tokens that are portraits inside circular rings).

To address this concern, we've added the new "Automatic Token Rotation" World setting. If you disable this Setting, Token art will not automatically rotate to match the direction of travel, but Tokens can still be freely rotated by users as usual.


### Custom Cursors

A fun new feature in V13 is the ability for Game Systems and Modules to define custom flavorful cursors.


## New Features


### Architecture and Infrastructure

- Upgraded dependencies for the 13.337 release, including increasing the Electron version from 33.2.0  to 34.2.0 which adds support for Chromium 132. (12236)

`33.2.0``34.2.0`
### Applications and User Interface

- Improved the interaction between UI Scale and the Macro Hotbar to prevent unnecessary Hotbar wrapping. (12122)
- Improved CSS styling for Folders and Sub-Folders by using position: sticky. (10263)
- Adjusted the scale of interface elements of Placeables such that they look the same regardless of the configured grid size. (10608)
- Ensured that the popped out Chatlog always has a text area for composing and submitting messages. (11878)
- Added keybindings for vertically ascending/descending a placeable object by one grid space. (11887)
- Implemented a light theme option for the game view UI. (11994)
- Reduced visual "flickering" of the Macro Hotbar by detecting mouse hover events for the entire #action-bar element rather than for specific elements within the Hotbar. (12173)
- After attempting to drag a Token through a Wall (with constrained movement enabled), the Token now snaps to the final valid grid space in the attempted movement path. (12177)
- Added a World setting to disable automatic Token rotation during movement. (12193)
- Improved the way buttons flow in DialogV2. (12215)
- Drawings can now be moved using the keyboard. (12218)
- The fading behavior of the user interface can now be partially adjusted by the Core Settings in the User Interface Configuration dialog. (12220)
- Added a keybinding to place and remove waypoints during a Token drag workflow and during distance ruler measurement (by default, F to place and Alt-F to remove). (12232)
- Allowed the "Ascend Vertically" and "Descend Vertically" keybindings to also change the elevation of the preview Token during a drag workflow. (12233)
- Added a "Hidden" label to the Token preview during a hidden Token drag measurement so that the User is more confident that their planned movement is not publicly visible. (12234)
- Removed the Electron window Menu Bar which was visually unappealing and interfered with ALT key behavior inside the app. (12246)

`position: sticky``#action-bar``DialogV2``F``Alt-F`
### The Game Canvas

- Increased the size of Placeable Layers' undo history from 10 to 100. (11706)
- Changing the width, height, or shape of a Token is now treated as movement between the old and new center point. (11890)
- Added a Door sound set for Heavy Metal sliding doors. (12209)


### Other Changes

- Replaced the "Token Enter/Exit" and "Token Moves In/Out" events of the "Display Scrolling Text" Behavior by "Token Animates In/Out". (12229)


## API Improvements


### Documents and Data

- Improved the server-side usability of batch pre-operation methods and captured some efficiency gains in server-side update and deletion workflows by eliminating an additional document loop. (10668)
- Relaxed the restriction on the DataModel constructor's source so that it now only requires receiving an object after the source data migration is complete. (12125)
- Added support for "value not equal" database queries with {field}__ne syntax. (12205)
- Strengthened the Scene framework using server-side batch operation handlers to ensure there can never be more than one active Scene at a time. (12207)
- Added Scene#unview to conveniently remove the currently drawn scene from the Canvas regardless of whether it is active or not.  (12224)

`DataModel``source``{field}__ne``Scene#unview`
### Applications and User Interface

- Added API so that systems and modules can configure their own custom cursor images to use when interacting with the application. (10123)
- Converted FilePicker to ApplicationV2. (11348)
- Added an activateSceneControls hook to allow modules to respond to Control Layer, Tool, and Toggle changes in the new ApplicationV2 SceneControls. (12208)

`FilePicker``ApplicationV2``activateSceneControls``ApplicationV2``SceneControls`
### The Game Canvas

- Added API to allow a different User to continue moving a Token that was paused during a previous movement. (12162)
- Made TokenDocument#_preUpdateMovement async. (12170)
- Added two new hooks to CanvasEnvironmentGround#initialize: configureCanvasEnvironment and initializeCanvasEnvironment. (12223)
- Added Token#_getKeyboardMovementAction. (12225)
- Added Token#_getHUDMovementAction, which returns the movement action in CONFIG.Token.movement.actions to be used for elevation changes via the Token HUD. (12230)
- Added TokenDocument#resize({width, height}), which resizes the Token in a way that does not change its center point. (12239)
- PlaceablesLayer#_pasteObject has been replaced by an @internal instance method on PlaceableObject. (12242)

`TokenDocument#_preUpdateMovement``CanvasEnvironmentGround#initialize``configureCanvasEnvironment``initializeCanvasEnvironment``Token#_getKeyboardMovementAction``Token#_getHUDMovementAction``CONFIG.Token.movement.actions``TokenDocument#resize({width, height})``PlaceablesLayer#_pasteObject``@internal``PlaceableObject`
### Other Changes

- Added a "Simplified Gregorian" calendar configuration to the core software for basic time advancement APIs. (11915)
- Adjusted HTML sanitization to allow for custom URL protocols. (8310)
- Added menu to the list of tags that are permitted during HTML sanitization. (10225)
- Expanded the list of HTML elements allowed in cleaned HTML to include var, output, custom core elements (such as code-mirror or color-picker). Expanded the list of global allowed attributes (translate, autofocus, and others). The required attribute is now allowed for input and textarea specifically. (12178)
- Elevated DocumentSheetV2#submit to ApplicationV2#submit to allow programmatic form submission for any application that contains forms. (12200)
- Added the new CombatantGroup Embedded Document to help provide core support for "group initiative". (12202)
- All HTMLFormElement#submit methods now go through HTMLFormElement#requestSubmit instead to ensure that they properly transact submit events. (12221)

`menu``var``output``code-mirror``color-picker``translate``autofocus``required``input``textarea``DocumentSheetV2#submit``ApplicationV2#submit``CombatantGroup``HTMLFormElement#submit``HTMLFormElement#requestSubmit`
## Bug Fixes


### Documents and Data

- Optimized the behavior of CompendiumCollection#configure to avoid unnecessary operations like full Game#initializePacks for atomic changes like toggling the locked state of a single pack. (11710)
- Resolved an error that was preventing changing the type of a Document or element within a TypedSchemaField. (11962)
- The updateCompendium hook once again properly fires when creating, updating, or deleting a Folder inside a Compendium pack. (12134)
- The updateCompendium hook once again properly fires when Embedded Documents are modified within a Document inside a Compendium pack. (12144)
- Fixed a bug where attempting to use deletion keys to delete keys (including flags) resulted in an error. (12175)
- Fixed a bug where Embedded Documents could not be created if the parent Document was inside a compendium. (12181)
- Strengthened the Combat framework using server-side batch operation handlers to ensure that there can never be more than one active Combat at a time. (12204)
- Fixed a bug causing TypedObjectField to not function properly with ArrayField and SetField elements. (12227)

`CompendiumCollection#configure``Game#initializePacks``TypedSchemaField``updateCompendium``updateCompendium``TypedObjectField``ArrayField``SetField`
### Applications and User Interface

- Fixed a bug where the Hotbar fade transition was inconsistent with the fade transition of other faded-ui elements. (12238)
- Moved the Chat Card z-index so that it is now above the Token HUD. (12196)
- Resolved an issue where the Submit button of a StringTags element could not be used on an application with submitOnChange: true. (11671)
- Fixed some remaining cases where chat input could still overlap with the Macro Hotbar on common resolutions. (11930)
- Fixed a bug where the expanded state of chat message rolls was lost when the message re-rendered. (11941)
- Fixed a bug that was preventing the Chat scrollbar from scrolling the Chat log. (11953)
- Fixed an issue with CombatTracker that could result in initialize preventing child classes from overriding initialize with private variables or methods. (11976)
- Fixed an issue that was preventing the context menu from displaying properly for disconnected Users. (11993)
- Hid the Create Folder sidebar button for all non-GM users. (12006)
- Implemented various improvements to the recently re-designed Roll Tables, resulting in a better user experience. (12074)
- Fixed a bug where the Macro Hotbar overlapped the floating chatbox if the Chat log was popped out. (12094)
- Improved Journal sheet category label wrapping when the table of contents is collapsed. (12099)
- Fixed a bug where clicking any Scene Control, Sidebar button, or Hotbar button prevented keybindings from executing until the canvas was clicked. (12104)
- Fixed a bug where the "Create Holes" Scene Control button icon was not rendering correctly. (12111)
- Fixed a bug where the "Load PDF" button in the Journal Entry sheet was disabled for Users with Observer permissions. (12149)
- Fixed audio context switching in Playlist and PlaylistSound to properly recreate the sound pipeline. (12154)
- Fixed a bug where Vision Range input in the Token Config was missing the ∞ in its placeholder text. Reduced the font size of ∞ in the placeholder text of the detection range inputs, which was previously too large. (12163)
- ContextMenu hooks now call Hooks.callAll rather than Hooks.call. (12183)
- Added separate color schemes for <thead> elements in a standard-form in light mode. (12185)
- Dragging a Compendium pack into a Compendium folder now correctly moves it into that folder. (12186)
- Hovering a controlled Combatant in the Combat Tracker now displays the Movement History of that Token, matching what happens when you hover a controlled Token on the Canvas. (12187)
- Made the Settings tab pop out scrollable. (12189)
- Updated Draggable in ApplicationV2 so that it no longer uses the deprecated bringToFront. (12190)
- Improved v1 styles compatibility for the flexrow CSS environment by removing the default align-items rule added by v2 styles.(12192)
- Fixed a CSS issue with the License page. (12194)
- Moved notifications to a higher z-index to prevent --z-index-window from eventually incrementing high enough to overtake and obscure them. (12211)

`faded-ui``StringTags``submitOnChange: true``CombatTracker``initialize``initialize``Playlist``PlaylistSound``∞``∞``ContextMenu``Hooks.callAll``Hooks.call``<thead>``standard-form``Draggable``ApplicationV2``bringToFront``v1``flexrow``align-items``v2``z-index``--z-index-window`
### The Game Canvas

- Active CanvasAnimation workflows are now cleanly terminated before tearing down a Scene to avoid unhandled exceptions caused by the animations attempting to complete. (12031)
- Resolved an issue where vision did not render if the Vision Range was set to ∞. (12168)
- When the vision mode is changed in the Token Config, certain existing values (Color, Attenuation, Brightness, Saturation, and Contrast) now all reset to the default value of the new vision mode. (12169)
- Fixed a bug where TokenDocument#pauseMovement did not function if it was called outside of the Document Update workflow. (12179)
- Fixed a bug where tokenRingSubjectMappings was ignored after a Token update animation. (12201)
- GM Users no longer automatically control a Token after it is un-hidden using the API. (12213)
- Token#constrainMovementPath now properly constrains movement outside of the Scene boundary even if options.ignoreWalls is true. (12217)

`CanvasAnimation``∞``mode``mode``TokenDocument#pauseMovement``tokenRingSubjectMappings``Token#constrainMovementPath``options.ignoreWalls`
### Other Changes

- ForeignDocumentField now respects choices when creating form groups. (11774)
- Fixed a bug with listening for keydown events in chat. (11903)
- Resolved an error that occurred when opening the Chat log as a popout. (11932)
- Chat previews now properly re-render when the message is updated. (12022)
- Fixed an issue where toggled HTMLProseMirrorElements exited "edit mode" upon losing focus. (12041)
- Resolved an issue where toggled <prose-mirror>s did not function with HTML source editing. (12084)
- Fixed a bug where custom header controls in Compendiums did not listen for onClick events properly. (12114)
- Fixed a bug where toggled ProseMirror buttons stopped working after opening and saving a toggled ProseMirror editor. (12119)
- Prevented an error caused by calling Hooks.off when no hooks were registered. (12166)
- Fixed a bug where the tree structure of a directory was not built before the directory was rendered. (12180)
- Fixed a bug where creating a subclass of ContextMenu created an exact ContextMenu instance from ContextMenu.create rather than an instance of the subclass. (12198)

`ForeignDocumentField``choices``HTMLProseMirrorElement``<prose-mirror>``onClick``Hooks.off``ContextMenu``ContextMenu``ContextMenu.create`
## Documentation Improvements


### Dice and Cards

- The return type of PoolTerm.fromRolls is now PoolTerm. (12171)
- Improved the documentation for RollFunction to more clearly indicate that it returns a string. (12172)

`PoolTerm.fromRolls``PoolTerm``RollFunction`