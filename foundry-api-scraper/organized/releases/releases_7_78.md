# Release 0.7.1 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.78

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.1


## Version 7 Development


##### August 11, 2020


## Foundry Virtual Tabletop - Version 0.7.1 Update Notes

This is the second update in the feature-rich 0.7.x sequence of updates in the "alpha" (unstable) channel which is available to all Foundry Virtual Tabletop owners.

WARNING: Alpha channel releases are VERY LIKELY to introduce breaking bugs that will be disruptive to play. Do not install this update unless you are using for the specific purposes of testing. The intention of Alpha builds are to allow for previewing new features and to help developers to begin updating modules which are impacted by the changes. If you choose to update to this version for a live game you do so entirely at your own risk of having a bad experience.

Please back up your critical user data before installing this update.

I am very happy to be able to share these features with you all, and I am looking forward to continuing work on this series of updates as it moves towards a stable release.


#### Overview of Changes

There are a number of major focus areas for the 0.7.x series of updates: Dice rolling, Audio and Playlists, Compendium improvements, Lighting system efficiency, Phase 1 development of Active Effects, and more. As the second update in this series, 0.7.1 focuses on a Lighting system improvements and phase 1 development of the Active Effects system. The next several updates in the 0.7.x series will continue to evolve the new Active Effects system while also addressing Audio and Playlist improvements.

Releasing this update to the Alpha (Unstable) channel provides an opportunity for community developers to test their modules and systems for use in the 0.7.x series of patches and incorporate fixes for any breaking code changes. Users who wish to be particularly helpful can also help to test for and locate bugs in the new features and systems. After sufficient testing, fixes will be implemented for bugs that have been found and if the update is stable enough it will advance to the Beta channel as 0.7.1, incorporating the bug fixes found in 0.7.1.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Alpha (Unstable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

This is an alpha update and should be considered unstable for all users. It is not recommended for all users to update to this version unless they intend to test the potentially unstable features contained within this update. As always, please take care to periodically back up your critical user data in case you experience any issues.

After clicking Check for Update confirm that you are presented with the 0.7.1 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created dedicated channels for Alpha 0.7.1 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Please stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features


#### Vision and Fog of War

- Implemented an entirely new vision computation algorithm using quadtree to subdivide the canvas into nested quadrants that can be efficiently tested to identify the best set of walls against which to test for collision. This change results in a significant performance improvement that is more noticeable for more complex maps with a larger number of walls. For small maps the improvement will be moderate (perhaps 1.5x faster) while for very large maps the improvement can be upwards of 10x or even 100x faster.
- Dynamic vision and Fog of War can now be animated to reveal intermediate positions along a Token's animated movement path. This is an optional setting which can be disabled in order to improve client-side performance if necessary.
- Utilize the new quadtree approach to efficiently determine which light sources need to have their areas of effect re-computed. This results in much improved responsiveness when opening or closing doors.
- When a Token begins its movement in a visible area, the token movement animation will now be displayed even if its destination is outside of the FOV.
- When a player controls a Token that does not have vision itself, their vision will now be unified with other observed tokens. This will work better for summons or familiars where the user does not benefit from the Token's perspective.


#### Lighting and Ambient Light Sources

- Added a new Light Source Animation system. This work was inspired by the excellent Dancing Lights module from BlitzKraig and adds efficiently rendered lighting animation to ambient and token-emitted lights and includes some default animations which cause them to flicker, pulse, or shift in color. This feature is extensible, allowing developers to add their own animations and alter other properties of light sources. These light source animations can apply to either AmbientLight or Token-based light sources.
- Defined "torch" as a built-in light source animation type which flickers and shifts the light source periodically.
- Defined a "pulse" type light source animation which oscillates in intensity.
- Defined a "chroma" type light source transformation which oscillates between adjacent colors of the light source tint.
- Added a new Scene Configuration setting which allows for Global Illumination to be automatically activated during the "daytime" (low darkness) while requiring Token restricted vision once a specified darkness threshold is met or surpassed.
- Right-clicking an Ambient Light icon now toggles the visibility of the light, allowing individual lights to be quickly turned on or off.
- Color-tinted light sources now display a visible difference between the bright and dim areas of effects when viewed by a GM without token control or when placed in a globally illuminated map.
- Toggling Token visibility now also correctly toggles the visibility of any light source that it emits.
- Making changes in the Light Source configuration menu now displays a live preview of those changes to the light source before the form is submitted.
- Updated the Token and Light source configuration menus to support configuring light source animations.
- Added client-level configuration settings for Vision Animation and Light Animation which allow disabling of these features for better performance on lower-end machines.


#### Other Features

- The Combat Tracker now automatically displays initiative rolls as integers if all initiatives are integer, and but will show all rolls with the configured decimal places otherwise.
- Combatants who do not link to a valid token may now remain visible on the combat tracker instead of being culled during the setupTurns procedure, providing some better support for temporary combatants.
- Added support for the Ctrl+A (CMD+A for MacOS) hotkey for select-all placeable objects within the current active layer. A consequence of this UX change is that CTRL+WASD has been removed as a method for panning the canvas via keyboard (CTRL/CMD)+Arrow Keys or (CTRL/CMD)+Numpad will still pan the canvas as before.
- The mouse-wheel rotation method used on other canvas objects has been extended to apply to Ambient Light sources.
- The Canvas Controls palette will now remember which tool was last used within each layer category and restore use of that tool when changing groups.
- Added default CSS styling rules number-type inputs.
- The Token Configuration window now considers "Update Token" the default action for keyboard accessibility and improved workflow.
- The dialog prompt which appears when creating a new entity will now be displayed by default, even if there is only one type of entity allowed by the game system.
- Improved the logic for when database compaction functions can occur to avoid cases where continuous DB operation caused compaction to be indefinitely delayed.
- [BREAKING] Scene settings now require require integers for grid size and horizontal/vertical shifting, preventing use of decimal place grid values. If Scene grids previously had been set to decimal values, it will be necessary to change the grid sizes of those scenes to an integer value.


### Localization Changes

To help better support the awesome volunteers in our localization community, update notes will now include a clearly defined Localization section which will clearly list changes being made in i18n support and localization.

- The entity type in entity create dialog has now been localized, allowing for the choices from the selection box to be more human-readable.
- Added further localization support for the Macro Configuration sheet.
- Added further localization support for the File Browser Window.
- Added further localization support to the Ambient Light Source configuration sheet.
- Added further localization support to Ambient Sound Management UI.
- The defined Application title in application windows is now localized by default, unless overridden by a child class.
- Modules which have been disabled will no longer have their language files loaded. A temporary consequence of this is that localization files will no longer apply to the login screen. This will be addressed in 0.7.2 with a new system to support a localized experience of application setup and configuration.


### Bug Fixes

- Resolved an out of memory error which would occur in cases of tokens moving to previously explored locations, resulting in pending fog exploration polygons being generated but not correctly handled by garbage collection.
- Improve responsiveness of right-click canvas pan workflow to avoid accidentally triggering no-op double right-click handlers, to resolve an issue where right-click would fail to trigger canvas panning as expected.
- Addressed numerous edge case issues in the 0.7.0 dice formula system where roll syntax did not produce expected results. Using arithmetic-only parenthetical expressions in dice formulae should now resolve correctly.
- Addressed additional S3 CORS issues caused by evolving changes in AWS S3 and Chrome CORS handling practices where the use of "cors" in URL query strings became disallowed or reserved by AWS.
- Corrected an issue where web sockets would close prematurely before connection is established, resulting from connection timeout on the websocket ocurring before data transfer had finished.
- Corrected an issue where creating a ChatMessage from a Roll including a DicePool would not not correctly re-constitute the individual Die instances of the re-constructed Roll instance.
- Resolved an issue with previous chat messages failing to render properly if they contained roll data from 0.6.x.
- Fate Dice should now be correctly displayed, following correction of an error in formatting for a DiceTerm.
- Restricted the availability to reveal a roll to users who have visibility of that roll's contents.
- Provided a workaround for an upstream PixiJS issue that resulted in a small visible line at the edges of the canvas which was not correctly covered by fog of war at more distant zoom levels.
- Fixed an issue where Token line of sight occlusion would not function properly when the Token itself had minimal (zero) vision due to a shortened ray culling distance.
- Ambient Lights with a darkness threshold set will no longer incorrectly reveal Fog of War when the scene does not have a darkness threshold.
- Corrected an issue where colored lights beneath the explored fog of war region but outside of current line-of-sight would still be visible.
- Solved a race condition which would result in a newly created Token emitting light not immediately displaying the light to players
- Small tokens are no longer able to see through walls when placed in the closest half-grid to the wall.
- Changing emit light settings on a token to 0 now properly updates for players without a reload.
- Line of Sight now reliably updates for tokens that are only moved a short distance.
- Moving a group of walls no longer snap each endpoint individually, to prevent cases where moving a section of walls caused them to unexpectedly change shape.
- Resolved an issue where dragging a wall endpoint interaction failed to correctly function, preventing walls from being repositioned.
- Resolved an issue where dragging an embedded entity link from within a parent draggable (like an owned item) would drag the parent data and not the entity link data as expected.
- Evaluating multiple dynamic entity links within the same Text node no longer failes as a result of the node's length being altered.
- Corrected an issue where multiple inline dice expressions in a single Text node would break the HTML enrichment algorithm.
- Solved cases where evaluating embedded entity links within HTML which contains links to a deleted item would throw an error.
- Previously existing links to compendium entries called by _id once again function as expected.
- Resolved an issue where the Context Menu on the Scenes sidebar would not properly expand if modules added too many entries to it.
- FilePicker filtering now only examines file and directory names within the current path, rather than matching previous portions of the path.
- Corrected a Filepicker error in the Tile browser window which would occur when selecting a file instead of dragging it to the canvas.
- Application windows no longer lose access some in their header menus (including the close option) if they are resized.
- Using the mouse scroll wheel over a range input field now no longer scrolls parent container.
- Scenes sidebar context menu will now correctly  render if the Canvas is inactive.
- The Freehand Drawing tool smoothing factor is no longer incorrectly limited.
- Importing a scene from JSON now correctly accounts for custom height and width settings.
- The maximum framerate is now capped at 60fps even for monitors which support a higher uncapped fps.
- Solved an issue where the Create Token permission allowed players to create tokens for an actor they had 'observer' permission for
- Assistant accounts can now see folders marked as private.
- Installation progress no longer logs a large amount of entries.
- Setup and Configuration no longer allows entry of an empty string in the port field which would result in launch failures
- Corrected some rare cases which would result in Worlds not starting in a paused state.
- Corrected the way network interfaces were detected to prevent loopback addresses being chosen as a local invitation link
- Improved the detection and severity of warnings related to a user choosing an invalid data path.
- Deleting a Token which has an active Combatant now also correctly deletes that Combatant.
- Addressed an edge case that would allow Tokens to able to clip through vertical walls that perfectly bisects their space by keyboard moving into the space and then mouse dragging to the other side of the wall.
- The playback timer for tokens with a video texture will now correctly reset to zero instead of continuing from a prior cached playback time.
- Corrected an issue which prevented dragging a group of tokens from functioning correctly.


### Framework and API Changes


#### Active Effects

- Introduced the initial version of the Active Effects system including the underlying database architecture, data model, and basic API framework for creating, updating, and deleting Active Effects as an Embedded Entity within the Actor entity. Active Effects are used to modify the actor data by applying bonuses and penalties which may be permanent or duration-dependent. The expectation of this API framework is that downstream game systems will implement specific logic for how ActiveEffects are to be used in their own system and rule-set. The core V1 approach provides the underlying toolbox which can make this possible.
- [BREAKING] Improved and standardize the workflow for Actor data preparation to a sequence of steps for base data preparation, embedded entity preparation, active effect application, and derived data preparation. This workflow is recommended for all systems, but can be overridden by systems which choose to define their own prepareData() method.
- Enhanced Entities to allow for tracking the original source data as _data, which can be (optionally) differentiated from the final prepared data of the Entity.
- In the case of unlinked Tokens, provided support for Active effects to be applied to their synthetic Actor override in addition to base Actors.

`prepareData()``_data``data`
#### Dice API

- Provided a means to configure the default Roll class which is used to create and evaluate dice rolls at a system-wide level. The first element in the CONFIG.Dice.rolls array will be interpreted as the default Roll class for the system.
- Introduced Roll.replaceFormulaData as a static method, this allows for API usages of formula syntax data replacement.
- Added MersenneTwister.normal(mu, sigma) which allows for drawing random variables from an approximate normal distribution with mean mu and standard deviation sigma using a Box-Muller transformation.
- Improved code structure for Mersenne Twister by removing unnecessary globals.

`CONFIG.Dice.rolls``Roll.replaceFormulaData``MersenneTwister.normal(mu, sigma)`
#### Lighting

- Implemented a new Quadtree class and API which is used automatically on the WallsLayer and LightingLayer, but can be used by module and system developers for other problems of positional computation.
- Replaced the internal functionality of the WallsLayer#checkCollision function to implement an improved quadtree-based ray collision algorithm.
- Extend the AmbientLight and Token data models to persist information about the light source animation type, speed, and intensity that they display.
- Refactor and improve the SightLayerSource object to contain helper methods for animation and rendering.
- Each SightLayerSource now maintains references to the PlaceableObject which generates it, and to the rendered containers on the SightLayer which display its FOV and color tint area.
- Token and AmbientLight instances have attribute references to the lightSource which is the instance of SightLayerSource that represents their field of effect on the sight layer.
- Light source animation types and functions can be flexibly defined by extending or modifying the CONFIG.Canvas.lightAnimations object to provide a human readable label and an animation function.

`Quadtree``WallsLayer#checkCollision``SightLayerSource``SightLayerSource``lightSource``CONFIG.Canvas.lightAnimations`
#### Other API Changes

- Improve the server-side AbstractBaseDocument pattern to support the concept of potentially untyped (any-typed) fields.
- Expanded the data model of Combatants in a CombatEncounter to be assigned a name and image attribute which may differ from and override the name of their referenced token or actor.
- The Drawing _onUpdate callback no longer performs an asynchronous full re-draw operation which was is not resolved before parent-class _onUpdate behaviors (such as hooked functions) were called.
- Refactored the server-side download remote file utility to remove reliance on the request module which is now deprecated.
- Added the getParentClasses(cls) helper method which returns the inheritence chain for a given ES6 class.
- Provides support for calling Application render and closing hooks for all parent classes in the inheritence chain through getParentClasses(cls).
- Verified that the database model recursively calls the inner validation function of nested documents in each document schema.
- Trusted user IDs are now passed as a parameter on socket events.
- Extended the option to disable recursive rolls when calling RollTable#draw or RollTable#drawMany().
- Updated core packages such as Electron, PixiJS, and TinyMCE to latest stable versions.

`Drawing _onUpdate``getParentClasses(cls)``getParentClasses(cls)``RollTable#draw``RollTable#drawMany()`
### Documentation Improvements

- The 0.7.1 update includes many significant documentation improvements for the API documentation including more accurate typing information for a large number of parameters and more complete documentation for certain classes which were lacking.
- Please note - this improved documentation is NOT YET available on the Foundry website as the current API documentation refers to the latest release build. I will try to consider ways to make alpha channel API documentation available as well but I have not yet developed a solution for this.


### Known Issues

- There are no specific known issues at this time - but this is an alpha build - so it is known that there are issues (potentially serious ones). Proceed with caution.

