# Release 0.3.8 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.53

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.8


## Version 3 Development


##### October 05, 2019


## Beta 0.3.8 Update Notes

Dear Patreon supporters, I am back from my vacation which was very relaxing - and I've been diving back into an exciting new set of features for Foundry Virtual Tabletop Beta update 0.3.8. The two most significant updates in this version include angle-restriction vision and light emission which allows Tokens and Ambient Light sources to limit their field of effect to some frontal-angle. Additionally improved options for Map Notes allows for users to organize better by customizing icon size, color, and labeling preferences while associating journal entries with various Scenes.

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Support limited vision and light emission angles for Token and AmbientLight objects. This allows the visibility or light emitted by an object to be restricted to a certain frontal angle relative to the object's direction of facing. The performance impacts of using limited angles are mixed - for light sources, restricting the angle of emission is actually somewhat beneficial for performance as it results in fewer rays being cast and fewer collision tests against walls. For Tokens, there is a benefit due to fewer rays, but also an additional cost because fog of war exploration caching is less efficient. Please experiment with this new feature and share any observations you have about how it's performance compares to what you observe for unrestricted Tokens or light sources.
- The Scene Navigation menu has received some styling improvements and may now be collapsed or expanded using a small toggle button on the left side.
- Added internationalization string translations for the Navigation Menu and its context options.
- The preference for whether to toggle the display of Map Notes on the Token Layer is now saved as a client-side setting that will persist across sessions.
- Allow Map Notes to have additional stylistic customization for icon size, font size, icon tint, and text anchor point.
- Map Notes may now override the text title which is displayed. The default label is still the title of the associated Journal Entry, but this can be overridden to reveal different information in the tooltip.
- Improve the saving behavior of Journal Entries which will now automatically save any changes before the entry is closed, it's display mode is swapped, or it is shown to other users.
- Begin with Playlist entities in the sidebar directory initially in a collapsed state and switch to record which are, instead, expanded.
- Imposed a rate limit on PlaceableObject rotation operations to restrict rotation to 1 update per 100ms. This rate limit is especially important for mice or other hardware which feature continuous scrolling - where such hardware was previously generating hundreds of database update operations per second.
- Substantially improved the generality and performance of multi-object update operations within Scenes. This better allows for many objects to be updated simultaneously with less costly database updates and more efficient canvas refresh.
- Now that Wall objects are controllable (either via individual or chain selection) - Walls can no longer be deleted only by hovering over them while pressing the delete key. This reduces the chance that users will accidentally delete the incorrect wall while navigating the Walls layer.
- Changed the Settings tab sidebar icon from a question mark to cogs.
- It is no longer possible to delete a Tile or Drawing which has been locked. You must first unlock the object before it can be deleted.
- Localization support has been added for many applications including the sidebar and all its tabs, the Setup configuration sheet, Player configuration, Scene Navigation, and more. Thanks to Ayan for helping with this process by sharing a set of localized templates.
- The End User License Agreement has been updated to Beta Version 0.3.8. It now includes a clause which expressly disallows temporarily renting access to the software.
- Non-GM users are now able to undo changes to their own controlled objects. Previously only game-masters had permission to undo changes. After this change, GM users may undo changes made by any player, while non-GM users may undo their own changes.
- Multiple object operations supported by the new updateMany and deleteMany events are now tracked as part of layer history, which allows them to be un-done in the case of an accident. Things like deleting all objects from a layer can now be recovered via CTRL+Z.
- Worlds may now be configured to feature a custom background image which will be used to greet players which connect to the server on the /join screen.
- Improved the set of default icons which are available for Token status effects tracking to feature icons which are more useful for several very common conditions like prone, blind, deaf, or asleep. Additionally added several new location icons as options for Journal Notes. This icon set will continue to be expanded and improved over time.


### Core Bug Fixes

- Resolved a permission issue which incorrectly allowed players to configure a Map Note via right-click.
- Attempt (again) to resolve possible non-determinism in combatant sorting order.
- Solved two bugs for vision and fog of war which could allow a small slit of visibility to be incorrectly allowed between Wall endpoints under two circumstances. One where the angles of ray emission fell subject to floating point precision issues and a second where a Terrain wall endpoint intersected with a non-terrain Wall.
- Fixed a bug with the server-side Entity update process which accidentally discarded additional context options from the request.
- Fixed a bug with blind roll chat parsing which prevented the /br, /broll, or /blindroll commands from functioning.
- Fix a problem with the SceneControls application which caused the underlying data to be mutated during it's render operation.
- Improved the behavior of deleting multiple objects to ensure that the controlled objects array is cleared for the parent layer.
- I have attempted a solution for a problem which causes the Fog of War polygon to shift slightly each time the fog render layer is swapped to disk. I am unsure whether the fix I have applied will solve all use cases - but in my own local testing I was able to eliminate the problem. I am hopeful to hear feedback from the community if anyone experiences this issue before or after the update.
- Corrected a problem with Chat Bubbles which caused them to not trigger correctly for certain chat message types.
- Corrected inconsistent form styling for the Combat Tracker config where hints were shown above the option, instead of below.
- Solved a problem which could prevent the Sight Layer from correctly refreshing when a Token's vision was disabled.
- Fixed an issue with Ambient Sound easing which caused it's volume to not respect the main volume slider for the sound. The volume slider for AmbientSounds now represents the maximum volume for the sound, as heard when an observer is immediately on top of it's origin.
- Default chat speaker identification now prioritizes a controlled token over a non-controlled token which represents the player's impersonated actor.
- Resolved a problem which could cause World-level compendium packs to be written to the world.json file with absolute paths instead of relative ones.
- Fixed a bug for Firefox which prevented newly created Worlds from properly receiving their server-side response, resulting in a hanging page load.
- Corrected a problem where elements in the Settings template did not correctly assign a data-dtype attribute.
- Fixed a problem with the Token HUD which prevented some values of an incremental attribute bar update from having the correct effect due to leading spaces or an incorrect string type conversion.

`/br``/broll``/blindroll``data-dtype`
### Core Software, APIs, and Module Development

- Addressed three security vulnerabilities in the server-side application. Thanks to Azzurite for pointing out several weak points.
- Added a dedicated updateMany function and socket logic for every PlaceableObjects layer. See the GitLab issue for more details and example usage.
- Added a dedicated deleteMany function and socket logic for every PlaceableObjects layer. See the GitLab issue for more details and example usage.
- Developed a generalized framework for handling the initialization of audio and video playback following an observed user interaction. This framework is now applied for all audio and video playback requests within the PIXI canvas to ensure that web autoplay standards are followed for modern browsers. This change should hopefully fix problems in previous versions with video map backgrounds or tiles.
- Implemented an optimization for dynamic vision polygon generation which can realize performance improvements for large maps which have many small wall segments.
- Added a Hook which allows for modules to insert additional context menu options for Scenes in the top navigation menu using Hooks.on("getSceneNavigationContext", (html, menuOptions) => ());.
- Added a Hook which allows modules to respond to the Scene Navigation application being expanded or collapsed using Hooks.on("collapseSceneNavigation", collapsed => ());.
- Added helper methods for setFlag() and getFlag() attached to all PlaceableObject instances with the same signature as those offered by the Entity class.
- Removed the linked Journal Entry as a required field of the Map Note data model, it is still recommended to create notes which reference Journal Entries, but this is not required. There is no UI-based method for doing this, but programmatic Note creation will function without an entryId attribute.
- Provide an improved ChatMessage.alias getter to centralize the logic for determining the recommended display name for the author of a chat message.
- Added a PlaceablesLayer.rotateMany method which can be used to control rotation of multiple PlaceableObject instances with a single database operation.
- Refactor the server-side Entity socket responses to explicitly separate the options Object from the primary response subject. This is a backend change which does not impact users of the standard API methods. These additional options are now passed as an additional argument to create, update, and delete hooks for various entities. For example, Hooks.on("createActor", (actor, options) => {});.
- The Token.moveMany and Tile.moveMany methods have been deprecated, effective immediately, in favor of a generalized PlaceablesLayer.moveMany method with a revised signature. If you were using the previous Token.moveMany method you must migrate immediately to the new approach.
- No longer require the coordiantes of Drawing objects to be integers, as this was causing polygons and freehand to become distorted when resized to a small size.
- Changed the behavior of the PlaceablesLayer.copyObjects function to store references to the copied objects themselves instead of just their data - this can give downstream APIs access to the full context of the origin objects, including the Scene from which they originate.
- Added a Hook event to allow developers to respond when multiple PlaceableObjects are pasted onto a canvas layer. See the GitLab issue for more details.
- Added several attributes to ui.sidebar to facilitiate module development including activeTab and popouts.
- An issue with the Chat Log template caused it to be incorrectly injected into another sidebar tab when manually re-rendered. This no longer occurs.
- Added a filterObject(object, keys) core helper function which reduces an object to a subset of its keys by name, returning the filtered object.
- The requesting User ID is now included as an optional final argument in CRUD socket event handlers.
- Redesigned the order in which page requests are handled by the Express server to resolve explicitly named view paths first before serving any unhandled requests as static files.

`updateMany``deleteMany``Hooks.on("getSceneNavigationContext", (html, menuOptions) => ());``Hooks.on("collapseSceneNavigation", collapsed => ());``setFlag()``getFlag()``Entity``entryId``ChatMessage.alias``Hooks.on("createActor", (actor, options) => {});``Token.moveMany``Tile.moveMany``PlaceablesLayer.moveMany``PlaceablesLayer.copyObjects``ui.sidebar``activeTab``popouts``filterObject(object, keys)`
### D&D5e System Improvements

- Game-ready Actor entries have been added for all CR 1/2 monsters in the SRD Monsters compendium pack.
- Incorporated wonderful token artwork for six CR 1/4 monsters as part of the SRD Monsters compendium. Many thanks to Stryxin from Forgotten Adventures for his support of this project and permission to include his wonderful tokens.
- Improve the SRD Spells compendium by adding Tiny Hut, Secret Chest, Freezing Sphere, and Telepathic Bond while removing Telepathy which is not covered under the OGL.
- Removed a superfluous Promise chain from the rollToolCheck function in the Item5e class.
- Allow inventory items on a character sheet to have a quantity of zero, for cases where the player wishes to track a placeholder item even if none of that item is owned.
- Fix a bug which caused global save modifiers to be double-counted when saving throws were rolled through the sheet dialog.
- Added an optional setting to disable experience tracking for player characters. Thanks to bensku for submitting a merge request with this feature.

