# Release 0.7.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.84

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.6


## Version 7 Stable


##### November 06, 2020


## Foundry Virtual Tabletop - Version 0.7.6 Update Notes

I am pleased to release Foundry Virtual Tabletop version 0.7.6, a stable release in the 0.7.x series of updates. The 0.7.6 update focuses on continued polishing of this major version with bug fixes, usability enhancements, and some minor quality of life features.

WARNING: Version 0.7.6 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.

Secondly - if you are updating to the 0.7.x series for the first time (in other words, if you skipped 0.7.5), I recommend that you first carefully read the notes for that update before installing 0.7.6. You can read the full update notes for each individual release in the 0.7.x series using the following links:

- https://foundryvtt.com/releases/0.7.0
- https://foundryvtt.com/releases/0.7.1
- https://foundryvtt.com/releases/0.7.2
- https://foundryvtt.com/releases/0.7.3
- https://foundryvtt.com/releases/0.7.4
- https://foundryvtt.com/releases/0.7.5


### New Features


#### Scenes and Canvas Features

- The Color Intensity slider for Ambient Light and Token emitted light sources now uses an exponential scale which improves the user experience by providing for more fine-grained calibration of lighting intensity level towards the lower-end of the intensity range. The appearance of your light sources will not change as a result of this change - but the value of that intensity on the slider will. For example, what was previously an "intensity 0.2" may now appear as an "intensity 0.45".
- The Scene Dimensions label in scene configuration now has a very clear indication of which input is width and which is height.
- The name of a Scene being preloaded is now only visible to players if the player can see the name in the navigation menu.
- Added new CanvasLayer options to allow configuration of default zIndex and sorting-to-top behavior when active. This allows for interactive layers like the Walls Layer or Templates Layer to be re-sorted to be displayed above other layers when they are active.


#### Actors, Tokens, and Active Effects

- Added support to allow ActiveEffects to be dragged and dropped from one Actor Sheet to another Actor Sheet. This feature is not enabled automatically, but will be enabled for any modules or systems which implement support for Active Effect tracking on their character sheet by including a data-effect-id attribute in an effect item entry.
- Active Effects are now automatically assigned a startRound and startTurn when a combat encounter is active at the time they are assigned.
- The status effects selection palette in the Token HUD will now remain expanded or collapsed if the HUD itself is re-rendered.
- A Folder of Items may now be dropped onto an ActorSheet to bulk-create Owned Items.
- Dragging actors from the sidebar which are visible to players no longer requires a player to have owner permission to initiate the drag, instead checking if the player has the appropriate permissions to initiate a drop. This corrects an issue where in some Game Systems which supported polymorph, a player would need owner permissions over an actor to use it as a polymorph form.
- The server-side Token data model now automatically falls back to sight and light emission angles of 360 if an otherwise invalid value is present.

`data-effect-id`
#### Localization

- Added some missing localization strings for Journal Entries and Map Notes.


#### Other New Features

- While a world is in the intermediate state between 'loading' and 'ready', the server will now attempt to delay responding to user connections.
- Running with the --noupdate command line flag enabled now prevents checking whether there is a software update available.
- "Disable Modules" and "Reset User Access Keys" are no longer visible on the create world dialog.
- If a World is launched that has no User with a Gamemaster role, one will be more reliably automatically created.
- The Module Management UI now sorts modules alphabetically by localized title.
- Improved some error messages related to module manifests that point to invalid manifest.json files
- To prevent situations where accidental copy, paste, or undo operations might occur when holding down the key combinations, the function now only fires once per keypress rather than continuing to fire as the key is held down.
- Image popouts shown to players no longer include the entity name as the title attribute of the image container, to prevent accidental knowledge being passed to players.

`--noupdate`
### Bug Fixes


#### Lighting and Vision

- Token vision changes now trigger a re-computation of visibility for other tokens and door controls as expected.
- Corrected a performance issue related to deleting many tokens which provide light sources.
- Deleting Tokens which have a light source now correctly updates the lighting layer for that light source.
- Erasing the value of Dim Light Radius or Bright Light Radius of a token no longer negatively impacts raycasting performance
- Corrected an issue which caused some MacOS installs to display a white rectangle instead of the proper lighting coloration container if Soft Shadows was disabled.
- Global Illumination for a token once again properly extends token vision to the entire canvas if unimpeded.
- Deselecting a token as a player no longer incorrectly provides global illumination.
- Light sources now correctly update if a wall which blocked them is deleted.
- Corrected cases where re-initialization of a light source would cause animation values to incorrectly reset.
- Corrected an issue where the blur filter on the canvas would result in the edges of the background being visible.
- To address issues with recalculation of token vision, changes to the global illumination setting (for example during a darkness transition) now trigger an immediate recalculation of the token vision polygons.
- If Animate Token Vision is disabled, dragging a token that has a colored light source emission no longer carries a vision mask with it


#### Active Effects and API

- The Token HUD will now automatically re-render when an Active Effect causes a change to the Token that currently is currently bound to the active HUD.
- ActiveEffect.duration no longer contains a reference to a 100 turn round which was used during development and should now have correct duration calculations.
- Implemented an improvement for situations in which sheets would become stuck in a "Closing" _state, preventing them from being reopened until after a refresh. This change may not completely eradicate the issue, as some rare race conditions may still exist, but it will help to identify any remaining causes.
- Exporting a folder to a compendium now calls the Entity#toCompendium() method to clear excess data that wouldn't previously have been included in exporting content to a compendium.
- TextEditor.previewHTML should now correctly return a valid truncated HTML string once again.
- Using the Actor#update method on a synthetic Token actor should now correctly recognise the diff parameter.


#### UX and UI Issues

- Trying to create a folder in the File Browser will now correctly allow creation of a folder if the parent folder contained spaces, instead of throwing an error.
- Fixed an invalid warning notification related to the exporting folders to compendiums.
- Symbolic links which point to files now correctly appear as files rather than directories.
- The "Return to Setup" button on the join screen now correctly uses the route prefix instead of failing when clicked if a route prefix has been set.
- It is should no longer be possible to set invalid Drawing Defaults and prevent the use of drawing tools as a result.
- The Grid Configuration UI no longer prevents Ruler measurement from functioning correctly.
- Corrected an issue where non-integer grid offsets would prevent making changes to the scene configuration form.
- Dragging a Macro by the number tooltip no longer displays an incorrect drag preview
- Dragging a Macro to its own slot no longer incorrectly erases the macro
- Animated WebM Tokens once again render a static thumbnail image when added to the combat tracker.
- Marking a token as dead was correctly marking the token as defeated but failed to skip that combatant's turn as expected. This has been resolved.
- The new Entity creation dialog no longer incorrectly shows folder names to the player if they do not have permission to see content within those folders.


#### Other Bug Fixes

- Addressed some cases where Scene auto-activation was not correctly occurring if no scene was active, and improved the auto-deactivation of canvas control tools if the active scene is deleted.
- Ambient Audio sources once again trigger start/stop and easing functions during token drag movements.
- Dice formulas which end with an arithmetic operator (such as "4d6 + ") should now be correctly evaluated by the Dice system.
- Corrected an issue related to overwriting _onSubmit which would cause loss of data on sheets in rare cases.
- The package installer now automatically trims leading or trailing whitespace from provided manifest URL strings.
- Migrating a world to a new software major version no longer inadvertently enables modules that are compatible but were not previously enabled.
- Corrected an unexpected behaviour for Rollable Tables to allow for a use case where the formula of the table is a number rather than a formula.
- Corrected issues related to the nextSession timestamp which would prevent worlds from correctly loading.
- Previously the server would fail to launch if the license.json file was invalid. Startup will now recover from encountering an invalid license file - but will treat it as an invalid license which requires the license to be re-signed.
- User Management should now correctly use the routePrefix if one has been defined.
- Corrected for a case where Measured Templates would not be correctly rendered when switching scenes after a refresh.


### Framework and API Changes


#### Breaking Changes

- [BREAKING] Updated the bundled Greensock libraries to version 3.5.1. This changes the file names of the provided libraries, so module developers who were using Greensock must update their manifest files to point to the new library versions. The preferred import path for this is now scripts/greensock/dist/gsap.min.

`scripts/greensock/dist/gsap.min`
#### New and Changed API Methods

- There is now a new FEATURES global const which defines a centralized location to set temporary feature flags. These feature flags define whether a certain named feature is active or inactive and which iteration or version number they are on. Helpful for migration and adoption of new major versions. For example: https://gitlab.com/foundrynet/foundryvtt/-/issues/3959#note_441254976
- Added a new builtin invertObject(original) helper method which swaps the keys and values of an object.
- There is a new builtin getRoute(path) helper function to return the properly prefixed and formatted URL path for various Foundry VTT urls.
- The getTemplate function now correctly rejects the Promise and provides an error message if the template path is incorrect.
- Added the new EntityCollection#updateAll and PlaceablesLayer#updateAll helper methods.
- Added a Date#isValid helper method to test whether a Date instance represents a valid datetime.
- Created a new method Entity#getUsers which returns all users who have a certain permission level to the Entity.
- The CanvasLayer#activate and CanvasLayer#deactivate methods will now return a reference to themselves for more convenient method chaining.
- Added a new Actor#rollInitiative method which allows for initiative rolls to be triggered from the starting point of an Actor. Tokens for that Actor which are present in the current Scene can be automatically added to the combat tracker and initiative for combatants of that actor can be rolled.

`FEATURES``invertObject(original)``getRoute(path)``getTemplate``EntityCollection#updateAll``PlaceablesLayer#updateAll``Date#isValid``Date``Entity#getUsers``CanvasLayer#activate``CanvasLayer#deactivate``Actor#rollInitiative`
#### Improved Software Behaviors

- Calling the canvas.sight.refresh() will now allow for using a tint to apply the configured fog color through CONFIG.Canvas.unexploredColor and CONFIG.Canvas.exploredColor configuration values.
- The ActiveEffect.isTemporary property no longer incorrectly returns false for durations < 1 round.
- Pass a reference to the tested object in to the SightLayer#testVisibility method.
- Expanded upon the CONFIG.TinyMCE options object to allow it to affect all options as part of the TextEditor.create() workflow.
- Simplified the logic for Application#setPosition() to bound the new width and height within the client window frame.
- Form data validation is now wrapped in a try/catch and will fall back to their non data-dtyped value if an invalid dtype is set.
- Added the game system ID and the system version of the world to the /api/status endpoint.
- World shutdown now uses a manual redirect.

`CONFIG.Canvas.unexploredColor``CONFIG.Canvas.exploredColor``ActiveEffect.isTemporary``SightLayer#testVisibility``CONFIG.TinyMCE``TextEditor.create()``Application#setPosition()`
### Documentation Improvements

- Updated the website API documentation to now feature the details of the 0.7.6 API.
- Corrected a documentation issue in Static getResultLabel

