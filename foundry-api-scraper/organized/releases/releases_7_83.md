# Release 0.7.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.83

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.5


## Version 7 Stable


##### October 21, 2020


## Foundry Virtual Tabletop - Version 0.7.5 Update Notes

Welcome adventurers, to Foundry Virtual Tabletop release version 0.7.5, the first stable release in the long-awaited 0.7 series of updates. This represents a major update to Foundry Virtual Tabletop, encompassing five months of development and over 500 individual features, changes, bug fixes.

There are two important things that you need to know before updating, so please read this carefully.

WARNING: An unfortunate sacrifice required by the refactoring of dynamic lighting, vision, and fog of war is that your fog of war exploration progress will be reset. For those of you who rely upon fog exploration to track exploration of very large wilderness or mega-dungeon maps, please be sure to take a screenshot or other form of backup for your current fog of war exploration before updating so that you can reconstruct your exploration progress after the update.

WARNING: Version 0.7.5 is labeled as a stable release, but it includes a tremendous number of new features. Some game systems and modules have not yet been updated with compatibility for this new version. You may wish to verify the status of systems and modules that you depend on prior to updating. As always (but especially for a major update like this one) please back up your game data before applying this update.

Major highlights of the 0.7.5 release include, but are not limited to:


#### Lighting, Vision, and Fog of War

- The dynamic lighting system has been redesigned with a modern, beautiful, and high performance ambient lighting built using native WebGL shaders.
- Launched a suite of built-in light source animations ranging from a classic torch to sci-fi energy domes with 13 amazing animation types to choose from.
- The interaction between lighting and the darkness level of a scene has been greatly improved to create more realistic and more beautiful day/night transitions in your maps.
- Line of sight and vision computation has been redesigned to use a high-performance quadtree algorithm which enables an order-of-magnitude improvement in vision performance.
- Token vision can now be animated in real-time during movement and drag operations.
- Fog of war is now stored with a smaller texture footprint.


#### The Active Effects System

- This was the major feature voted on by Patreon supporters for the 0.7.x update, and I am proud of the new Active Effects system which introduces the Active Effect entity which dynamically modifies the base data of an Actor in a variety of flexible ways.
- The addition of the Active Effects system empowers developers to add further automation to their game systems and modules by using these tools. The base system added by the 0.7.x update does not include a system-agnostic interface, but you should expect to see individual game systems rolling out support for active effects in the (hopefully) near future.
- To support the Active Effects system, a centralized game clock and time management API has been added to provide an underlying framework for duration-based effects and other time management tools.
- Token status effects have been greatly upgraded to use the new Active Effects system and integrate more seamlessly with Actor conditions and the Combat Tracker.


#### Other Highlights

- Added an expansive built-in library of over 3500 icon images for commodities, containers, environment, equipment, sundries, tools, and weapon assets as standardized 256px webp files.
- Foundry Virtual Tabletop has a new logo!
- The dice rolling API has been redesigned to be more easily extensible for module and system developers including several new dice modifiers and dice types.
- Added more flexible sorting modes for folders and sidebar directory organization.
- Visual improvements which add support for smarter anti-aliasing at different canvas zoom levels.
- Scene configuration is now more flexible with the ability to customize the amount of padding around the Scene canvas.
- Improved convenience features for text chat including replies, shortcut whispers, toggling visibility of messages, and the ability to pop-out chat cards to a separate floating window.
- New content management options like bulk import from Compendium, bulk export to Compendium, and bulk permission configuration of content.
- Extensive stability and performance improvements for both the server-side and client-side of the application.
- Extensive documentation and localization improvement to make the software more accessible for more people.


#### Complete Update Notes

The 0.7.5 update incorporates and includes all of the changes documented in updates 0.7.0 through 0.7.5. You can read the full update notes for each individual release in the 0.7.x series using the following links:

- https://foundryvtt.com/releases/0.7.0
- https://foundryvtt.com/releases/0.7.1
- https://foundryvtt.com/releases/0.7.2
- https://foundryvtt.com/releases/0.7.3
- https://foundryvtt.com/releases/0.7.4


### New Features

The following sections describe new features that were added specifically in version 0.7.5.


#### Lighting and Fog of War

- Added support for a new "Energy Field" light source animation, bringing the total animations to 13.
- Animated light sources of the same effect now have a randomized time offset in order to ensure that different lights of the same animation type appear different in their animation, rather than being constantly in sync.
- The default coloration shader has been improved and now provides more fine-grained control over color blending between multiple coloration sources, and aid situations where adding a light source to a white map would become too bright.
- Reworked the layering of illumination and coloration in order to draw coloration after illumination, instead of before - this allows the darkness level of the scene to be applied before additive light source coloration - for an overall improvement to the appearance for both dark and brightly coloured maps.
- The Torch animation has been improved to provide a more natural flicker effect, making it appear more realistic.
- Coloration for Darkness Sources (negative Ambient Lights) has been refactored, and now suppress other colors from being added above the illumination layer.
- Token vision changes during a keyboard movement are now smoothly animated if the if the Animate Vision setting is enabled.


#### UX and UI Improvements

- Opening a light source configuration window no longer prevents opening additional light source configuration windows.
- A notification will now be displayed for GM Accounts when "show players" is clicked on an entity sheet, to make it clear that the entity has been shown to players.
- Door control icons they will now darken slightly to make it more clear they are being hovered over.
- The UI control to collapse the players list has been moved from AV camera frames to be a generalized tool as part of the Players UI. When collapsed other elements like the Macro bar and camera frames should now re-position to be flush-left.
- Improved the UI of the Resources tab on the Token Configuration window, it now uses numeric inputs with form-field div containers.
- The grid alignment tool now hides all canvas layers except for the background and the grid, to make establishing the correct sizing easier.
- Removed the 'update' button from Add-on Modules or Game Systems which do not define a manifest URL from which an update can be obtained.
- Modules which do not have a declared manifest URL will now be skipped by the packages update check, streamlining the update process.
- Improved the way next session time on the /join screen is displayed to show the date and time the user's local timezone with localized time formatting.
- Renamed "Shut down world" in /join screen to "Return to setup"


#### Other New Features

- The Foundry Virtual Tabletop Application for Windows is now formally code signed using an OV certificate, allowing for Windows Defender to (over time) establish confidence that Foundry Virtual Tabletop is a trustworthy application.
- Added a "transfer" checkbox to the default configuration sheet for Active Effects to control whether the active effect transfers to the owner or not in cases where the the active effect is owned by an Item.
- Updated Electron, Socket io, TinyMCE, and the AWS-SDK to new minor versions.


### Localization Changes

- Added missing localization options for Journal Entry header buttons.
- Actor.typeLabels or Item.typeLabels will no longer be initialized if a package has already explicitly defined them during the init hook.


### Bug Fixes


#### Combat and Tokens

- Using the Assign Token button once again correctly passes data and no longer causes the Prototype Token configuration window to stop rendering.
- Setting Token Light Emission to an invalid angle now displays a more accurate notification error message.
- Measured movement from a Token once again works as intended, following an error that was preventing Token selection from correctly occuring.
- Some numeric inputs on the Token configuration sheet (width/height/vision distances) need to allow decimal inputs
- Validation of the Token Configuration window no longer incorrectly prevents changing certain values such as height and width to a decimal value.
- Corrected an issue which caused Condition icons to require a refresh before displaying for some tokens.
- The Combat Tracker now correctly displays the first 4 conditions present on an actor, instead of only the first.
- An issue which caused an empty image to be added to Combatants in the combat tracker has been corrected.
- Marking a combatant as defeated from combat tracker works as expected once again.


#### Lighting and Vision

- Visual artifacting at the outer edges of lights caused by placing dim light sources close together should no longer occur, as adjustments have been made to the easing function used for coloration shaders.
- Ambient Lights with a darkness threshold set no longer incorrectly reveal Fog of War if the Scene does not have a darkness level set.
- Dragging a Token with a size smaller than a full grid square no longer incorrectly shifts the POV origin of the Token's sight.
- Corrected some performance issues related to the new "Left Click to Release Objects" setting, where deselecting an object on large maps would cause significant performance decline.
- Scaling the scene background using the Grid Configuration Tool once again correctly adjusts Fog of War and Vision.


#### Other Bug Fixes

- Configuration windows for placeable objects (Drawings, Lights, Tiles, Tokens, etc.) now automatically re-render when the object they modify is updated. This means that repositioning an object while you have the configuration window open may result in losing unsaved changes.
- Corrected a timeout issue with the Version check would cause undo delays in loading the main menu or game in cases where the main Foundry VTT website is unavailable. The affected version check now has a maximum 3 second timeout.
- Corrected some performance issues related to the new "Left Click to Release Objects" setting, where deselecting an object on large maps would cause significant performance decline.
- World Description no longer incorrectly pushes layout beyond boundaries in cases where the world description is long, but instead allows scrolling.
- Saving the ActiveEffectsConfig sheet no longer throws an error and fails to save if all changes have been removed.
- Added padding to Text Drawings for the Arial Black font to correct an issue with taller characters being cropped.
- Corrected an edge-case issue where Door control icons would take priority over light source icons, preventing access to light configuration and control. Door control icons now only function while the user is on the Token layer.


### Framework and API Changes


#### Active Effects

- [BREAKING] When an Item that bears active effects is added to an Actor, keep the original copy of the transferred effect data on the owned item in addition to creating an ActiveEffect embedded entity on the Actor.
- Integrate Active Effects with Token and Combat Tracker status effect icons to display the effect icon for temporary effects. Active Effects which are temporary (have a finite duration specified in turns or rounds) and have an icon image specified will automatically be displayed as token status effects.
- Provide a convenience method, OwnedItem#transferredEffects for an Owned Item to reference any Active Effects on the owning Actor which were transferred from that Item.
- Expand the data model for the ActiveEffect to allow it to specify a certain tint color that modifies the display of it's icon.
- Fix issues with the addition and automatic transfer of ActiveEffects via Owned Items for synthetic Token actors.

`OwnedItem#transferredEffects`
#### Other API Changes

- Allow an Active Effect to set the core.overlay boolean flag which would cause the icon added by that effect to be displayed as the overlay status on the Actor's Token.
- Provide an ability to re-configure the form application used for Active Effect Configuration by defining the CONFIG.ActiveEffect.sheetClass property.
- Added a validation check that the formula provided to a Roll instance must be a string to provide a clear error message in cases where the roll fails.
- Disallow preUpdate hooks in cases where an update is made with the new noHooks boolean option set so that modules can't introduce breaking data elements into the update object.
- Added the Token.fromActor factory method to create a Token instance from an Actor entity and additional token data.
- No longer dispatch preCreate entity hooks for entities which are created with the temporary option set to true.

`core.overlay``CONFIG.ActiveEffect.sheetClass``noHooks``Token.fromActor``temporary`
### Documentation Improvements

- Updated the website API documentation to now feature the details of the 0.7.5 API.

