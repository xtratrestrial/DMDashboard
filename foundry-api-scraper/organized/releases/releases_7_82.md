# Release 0.7.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.82

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.4


## Version 7 Testing


##### October 13, 2020


## Foundry Virtual Tabletop - Version 0.7.4 Update Notes


### Overview of Changes

This update focuses on continued and ongoing improvements to the Lighting and Fog systems with 9 amazing new lighting animation effects, further integration of Active Effects system with editable sheets and Token status effects, and brings more than a dozen changes focused on improving the user experience and UI of Foundry VTT over all. 0.7.4 is intended to be the last beta update in the 0.7.x series, with 0.7.5 stable intended to release in a little over a week on or around October 21st.

Important Note: Beta channel releases have the potential to introduce breaking bugs that may be disruptive to play. These features are close to ready for a stable release - but likely to still include some bugs and incompatibilities which may frustrate you.

As a beta channel update, trying out the 0.7.4 version is a good choice for module and system developers who want to prepare their systems and modules for the upcoming stable release version of 0.7.5. It's also a good choice for game-masters who don't rely on a large number of modules who want to try these latest features in their games and can be tolerant of a few issues during play.


### How to Update

If you wish to apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Beta" channel in the dropdown menu. Please note, it is recommended for most users to stay on the Release channel and wait for updates there rather than using Alpha or Beta updates.

Be sure to back up your critical user data before installing this update.


### New Features


#### Lighting and Fog of War

- Added nine new light source animation options which provide wonderful and unique animations for both ambient light and token-based light sources including: torch, pulse, chroma, pulsing wave, swirling fog, sunburst, light dome, mysterious emanation, hexa dome, ghostly light, roiling mass (darkness), and black hole (darkness).
- Improved the chroma animation to use a new shader algorithm which more seamlessly rotates the hue of the light color around the origin color.
- Adjusted the level of "magical darkness" created by setting negative value light sources to be a little bit brighter compared to "magical blackness".
- Brightened the default darkness color, to correct for an issue where darkness became too dark after the lighting refactor in 0.7.3 caused by layering of Token vision and fog of war.
- Improved the way darkness levels interact with token vision to allow for less severe change in brightness between token vision and GM vision.
- Global illumination now provides dim light, instead of bright light. On scenes with low darkness, this is effectively the same result while on scenes with a darkness level, this produces a more expected effect for what level of visiblity should exist.
- Refined the blend mode for the filter on the Coloration container to use an additive blend mode without pre-multiplication instead of a standard additive blend. This will make light sources more sensitive to the opacity level without getting washed out as easily.
- Line-of-sight masking now uses a shared Graphics instance across both Sight and Lighting layers and also provides a mask which will conceal lights that are outside of LOS.
- Restored the feature which decreases the level of blur for vision and lighting layers as the zoom level decreases.
- When using the Token Drag Vision setting, collisions with walls will no longer be tested for GM users.
- Improved the mechanics of fog of war persistence to save the progress of pending fog exploration more reliably and to track fog exploration during a Token movement animation.


#### UX and UI Improvements

- The update notes modal dialog now features an Install Update button in its footer, changing the workflow so that users do not need to close the update window to see the option to update.
- Added an option to the login view which allows administrator users to shut down the active game world and return to setup without first logging in as a gamemaster user.
- Window header interactions now have a small delay to in order to prevent situations where opening an application window would cause it to immediately close.
- The World Config sheet now has an option to reset all user passwords for the World, as a user-friendly way to restore access if someone has become locked out.
- Improved the HTML structure CSS rules for the /join view to enhance the symmetry of styling for that page.
- Improved the rendering of number-type input fields on Firefox by suppressing the "spinner" which adjusts the numeric value.
- Token position fields on the Token Config sheet can now be edited by GM users, and token rotation can now be edited by anyone who can access the configuration sheet.
- Consolidated the layout of the Scene configuration sheet to be slightly more compact.


#### Folders and Organization

- Folders and their contents can now be sorted alphabetically or manually.
- Implemented context menu options for Folders which allow for the contents of a folder to be conveniently turned into a Rollable Table.
- Provided a folder-level context option to allow assigning permissions to all immediate children within the Folder.
- Added some visual styling to demonstrate which folder is the target of a drop when dragging sidebar items.
- Improved S3 Subdomain/Path URL Variant switching for File Browser.
- Improved the Folder Edit workflow to render the FolderConfig sheet immediately next to the folder being edited for a better UX.
- Provided a new UI option to allow importing all content from a Folder into a specificed and appropriately typed Compendium pack (if any exist).


#### Other New Features

- Dampened the volume slider power curve slightly for a more pronounced difference at low end and less pronounced difference at high ends of the slider.
- Prevented the application from configuring a port below 1024 that is not 80 or 443.
- Disabled mouse forward and backwards navigation buttons while in the VTT.
- The Scene Controls palette is now always visible, but is disabled when no scene is active on the canvas.
- When a left click occurs anywhere within the application, inline roll tooltips will now automatically collapse.
- Placing Text Drawings now allows immediate entry of text rather than requiring selection or opening the edit dialogue.
- Improved the messaging when a user tries to update a module which has a newer version available, for cases where that newer version cannot be installed because the current core software version is too low.
- Game systems may now define a default world background image in their manifest which is used in cases where a World does not set a custom background.
- Added a configurable client-side setting to disable mipmapping and anti-aliasing of textures for users who prefer the pixelated reduction compared to the blurred one.


### Localization Changes

- [BREAKING] Concluded the deprecation of the old string-based languages in favor of object-structured languages.
- It is now possible to set a default language for the software in the Configuration menu. This default language will be used for all new players who have not specifically set a different client language. The default language (and module that provides it) will enable localization strings to be added to the /setup, /players, and (eventually, but not quite yet) /join screens.
- Designate a single module which can be used to provide Setup and Login localization. The localization strings from this module will be loaded and used outside of the context of an active game world where modules are otherwise disabled.
- Added localization support for the names of entity permission levels.
- Added localization support for Token visibility levels and dispositions.
- Allow for localization of Actor and Item types that are defined by the system by declaring the CONFIG.Actor.typeLabels and CONFIG.Item.typeLabels objects and providing translation strings.
- Allow for registered Actor and Item sheets to provide a human readable (and localized) name which is displayed in the menu rather than just the class name by providing the label key when calling the registerSheet() method.

`CONFIG.Actor.typeLabels``CONFIG.Item.typeLabels``label``registerSheet()`
### Bug Fixes


#### Lighting and Fog of War

- In some cases, changing the settings on a animated lighting effect would carry those changes over when a new animation effect was selected. Added a mechanism to reset the uniforms of the animation filter to their default values to prevent this from happening.
- Ambient Light sources which set a certain darkness activation threshold were not properly activating/deactivating in response to darkness changes in the Scene.
- Corrected an issue where pressing tab to cycle tokens when you only have one controllable token would cause vision to consider the token de-selected.
- Put some protections in place to prevent situation which would cause the canvas to fail to render if a Chroma lighting animation effect did not have a set color.
- Changed the default Darkness Level setting for scenes where Token Vision was disabled. The previous approach caused a slight off-white background which was only useful for scenes where a map was in use.
- Corrected a layering issue which would cause icons for lights in the "buffer zone" to become invisible.
- Addressed an issue where Fog exploration coordinates were not correctly being coerced to integers, resulting in problems with saving the fog data to the server.
- Corrected alignment of Fog of war exploration for in cases where the background image is shifted vertically or horizontally.
- Resolved a number of framerate and performance issues with new lighting system when encountering lights with a large radius or global illumination which creates a large visible geometry to render.
- The Global Illumination, Darkness Threshold, and Darkness Level settings were not correctly being handled in a variety of ways, resulting in their settings not being obeyed and their triggers not activating as expected. Overall improvements to the behavior of these settings have addressed these issues.
- The Chroma lighting type no longer fails for some colorations, and the animation now activates correctly.
- Changing a Token light source animation was not correctly applying, instead waiting until after the Token is released or controlled. It now updates immediately.


#### Chat and Dice

- Corrected a situation with rolling 1d1 exploding die which would fail to properly trigger the maximum recursion safeguard.
- Counting success and failure was now properly colors succeeding or failing die once more.
- Dice syntax now correctly attempts to evaluate only closed dice pools rather than (unexpected) open-ended ones.
- Solved an issue with invalid evaluation of variable number of dice when the variable Dice Term was inside a parenthetical.
- When generating the canonical formula for a DicePool instance, any inner Roll formulas will now be wrapped in parentheses if they contain an inner DicePool to allow for the correct order of evaluation to occur.
- Inline dice rolls do not currently support term-specific flavor text because the brackets of that flavor text interferes with the closing brackets of the inline roll itself.
- Corrected an issue where Math functions after an operator could produce incorrect results.
- Previous chat messages accessed by up-arrow can now be sent immediately, as expected.
- The ChatMessage.getSpeaker() helper no longer fails to correctly prepare a complete and valid speaker object when a Scene is not currently viewed on the game canvas.
- Modules which included scripts via esmodules are no longer incorrectly omitted from the /stream view which prevented the chat log from rendering correctly.


#### UX and UI

- Improved the behavior of the contrast methods for text selection with a darker background offset by white text.
- Corrected some issues with the new sidebar header styling to address unnecessary empty space when there are no available action buttons rendered.
- To solve an issue where Firefox inputs for the next scheduled session did not work correctly, the input for scheduled session has now been split into two separate inputs for date and time.
- The button label when checking for a module or system update was did not clearly show actual success of system update under some circumstances. The new messaging for module updating addresses this issue.
- Modules are now sorted alphabetically within the modules tab of the settings menu. Reverted the change to the sorting method for setting names as module authors may intentionally register these in a particular order.
- Corrected an issue which prevented the token HUD from correctly opening on another token if the HUD was already open.


#### Other Bug Fixes

- Solved an issue where Text Drawings failed to update as expected as a result of improper storage of their data, resulting in data being lost.
- Right-clicking to cancel a drawing tools polygon segment that was in progress no longer causes the interface to fail to display the pending drawing correctly.
- New styles for sidebar headers are now correctly applied to compendium directories to prevent the search bar wrapping incorrectly.
- Corrected an issue with Global Volume Sliders no longer adjusting volume of sound or playlists.
- Addressed some issues with initialization conditions for AV client audio and video feeds, which were incorrectly based off the permission to share, rather than the current sharing state.
- In Entity creation situations where only a single type was available to the system would throw an error rather than correctly rendering the entity creation dialog, this is no longer the case.
- Fixed a bug where combat tracker rendering gets broken by an orphaned token which no longer has a corresponding actor due to the new logic for rendering active effect icons.
- Corrected an issue which would cause /login to get stuck on the loading spinner rather than allowing a login attempt to be made.
- Improved S3 Error handling to allow processing of error messages on failed uploads.
- Dragging and dropping a folder in the Actors sidebar once again correctly re-sorts the folder.
- In some instances the Canvas resizing to match the browser window dimensions failed to render, leaving the map distorted with the wrong aspect ratio. In an attempt to address this issue the function which resizes the canvas has been moved later in the method which handles it.
- Entity links no longer incorrectly reset to their HTML counterparts when a Journal Entry is edited from a compendium with an active search query.
- Corrected an issue where JSON files containing paths to invalid urls (specifically language) would prevent Worlds from loading.
- Pending canvas operations to animate pan would sometimes cause an iterator error when encountering an object as the passed argument, this has been corrected.
- Corrected keyboard-based token rotation for all Hexagonal Grid Types
- Adjusted the way the handler for Alt+tab works to prevent situations where the state of the Alt key would become locked.
- Corrected an issue where the Package listing cache negatively impact load time in some cases.
- The --noupdate startup flag was not working properly in 0.7.3 and has had its functionality restored.

`--noupdate`
### Framework and API Changes


#### Lighting and Fog

- Added the capability for add-on modules and game-systems to configure the default fog of war colors via the CONFIG.Canvas object.
- Assigned a priority level to light sources and darkness sources which can allow for fine-tuned customization of the z-index order in which illumination is rendered. This priority is configured as the core.priority flag on the Ambient Light object. The default priority for light sources is 0, and the default priority for darkness sources is 10. To configure a light source that "beats" darkness sources, you could set its priority to 11.
- Add a new sightRefresh hook which fires each time line-of-sight polygons are updated.
- Allow for modules and systems to easily implement custom light source animations by implementing the AbstractBaseShader class which provides a standard definition for the shaders used for point sources. See the example animations and how they are defined by inspecting the CONST.Canvas.lightAnimations object.

`CONFIG.Canvas``core.priority``sightRefresh``AbstractBaseShader``CONST.Canvas.lightAnimations`
#### Active Effects

- [BREAKING] Since worldTime has been refactored to be based on seconds, rather than milliseconds, the duration object of an ActiveEffect has been refactored to track duration.seconds rather than duration.ms.
- Synchronize the display of active effect icons in the Token HUD when an Active Effect is added or removed from the Token that is currently bound to the HUD UI.
- Introduce the ActiveEffectConfig sheet in the core software as a subclass of FormApplication which provides an interface for creating or configuring an ActiveEffect that belongs to an Actor or Item entity. Example usage: https://gitlab.com/foundrynet/foundryvtt/-/issues/3759
- Expand the definition schema for CONFIG.statusEffects to allow each status effect to define an ActiveEffect template which is applied when that status effect is toggled.
- Allow for the TokenHUD status effects menu to be linked to active effect templates which are automatically applied or removed when an effect icon is toggled.
- Active Effects which have the disabled property set to true no longer appear in the temporaryEffects array for the Actor which owns them.

`worldTime``duration.seconds``duration.ms``ActiveEffectConfig``CONFIG.statusEffects``temporaryEffects`
#### Other API Changes

- [BREAKING] Update bundled Greensock libraries to version 3.5.1. This changes the file names of the provided libraries, so module developers who were using Greensock must update their manifest files to point to the new library versions.
- The Handlebars {{select}} helper previously only worked in cases where double-quotes were used for option value tags, the helper now also works in cases that single quotes are used instead.
- Improve handling of setting an undefined value for a particular registered setting. Getting a value of undefined will fall back to the default value, while setting a value to undefined will restore it to the default.
- Roll.cleanFormula failed to coerce terms to string in the event that they were not internal rolls or formula objects - this bug with the dice rolling API has been fixed.
- The validateForm function was previously deprecated, but now has the incorrect return type for backwards compatibility.
- Allow passing an explicit named tool to set as active within the SceneControls#initialize method.
- Re-build the array of Scene Control buttons every time the controls are initialized, to allow for modules to add different control buttons for different Scenes.
- Improve the API for polygon computation in the HexagonalGrid class.
- Deprecate the Token#toggleOverlay method in favor of making the overlay an option of the toggleEffect method as follows: Token#toggleEffect(effect, {overlay: true}).
- Add an Entity#link property which returns the canonical dynamic entity link string for an entity instance.
- Improve the TokenConfig sheet to use better number-type input fields to avoid extra unnecessary metadata.
- Allow deferred inline rolls which occur within a sheet to obtain the correct rollData from the Actor or Item sheet which contains them.

`{{select}}``Roll.cleanFormula``validateForm``tool``SceneControls#initialize``Token#toggleOverlay``Token#toggleEffect(effect, {overlay: true})``Entity#link``TokenConfig``rollData`
### Documentation Improvements

- Worked to improve the @return {type} docstring for many methods to better match JSDoc expectation for returned Promises.

`@return {type}`
### Known Issues

- There may be an error message displayed about an invalid GET request the first time a new map is updated. The error seems to be harmless as maps load regardless - but an additional logical check is required here for next update.

