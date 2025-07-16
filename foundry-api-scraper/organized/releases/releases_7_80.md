# Release 0.7.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.80

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.2


## Version 7 Development


##### September 07, 2020


## Foundry Virtual Tabletop - Version 0.7.2 Update Notes

This is the third update in the feature-rich 0.7.x sequence of updates in the "alpha" (unstable) channel which is available to all Foundry Virtual Tabletop owners.

WARNING: Alpha channel releases are VERY LIKELY to introduce breaking bugs that will be disruptive to play. Do not install this update unless you are using for the specific purposes of testing. The intention of Alpha builds are to allow for previewing new features and to help developers to begin updating modules which are impacted by the changes. If you choose to update to this version for a live game you do so entirely at your own risk of having a bad experience.


### Overview of Changes

This update focuses on several major themes - foremost of which is continued work on the Active Effects system which expands the capabilities of the system to include Items which allow effects to be defined and transferred to the Actors who own them. Other key themes of this update include improvements to chat message syntax, a new game clock API, better rendering for canvas text, and a large swath of miscellaneous improvements and bug fixes.


### How to Update

If you wish to apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Alpha" channel in the dropdown menu. Please note, it is recommended for most users to stay on the Release channel and wait for updates there rather than using Alpha or Beta updates.

Be sure to back up your critical user data before installing this update.

After clicking Check for Update confirm that you are presented with the 0.6.6 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


### New Features


#### Scenes and Canvas

- Improved the sight polygon computation algorithm to perform an exact computation when there are a low number of Wall endpoints (configurable, default 500) in the Scene. The computation algorithm will only use approximate culling-based computation method for higher count Scenes.
- Further refined the vision computation algorithm to prioritize exact Ray matches (at Wall endpoints) over approximate offset matches. This maximizes the number of exact collisions which can occur.
- When creating a Scene which does not use a background image, a thumbnail texture will now be rendered based on the tiles layer if any tiles are present in the Scene.
- The measurement ruler no longer requires a minimum drag distance in order to activate the display of the ruler.
- Improved the visual quality of canvas text rendering, forcing a higher resolution for rendered text than is provided by the default PIXI implementation.
- Enlarged the text labels used by the Ruler measurement to be more easily visible when zoomed out of a Scene.
- It is now possible to configure a default text label as part of the default drawing configuration, this will apply a default text label when creating new text type drawings.


#### Chat Messages

- [BREAKING] Deprecated support for @[name] {message} for whispers since it collides and causes confusion with dynamic entity links. Now only /w [name] {message} is the supported slash command syntax for chat message whispers.
- [BREAKING] Improve the styling of the sidebar chat controls to improve the CSS layout and avoid z-index conflicts.
- Redesign a new tooltip which is displayed when clicking on an inline roll that allows you to inspect the results of the roll.
- Added some new convenient slash commands: /gm to message all GM users, /players to message all players, and /reply to whisper the last user or group of users who privately messaged you.
- Added the ability to pop-out a chat message to a separate window that allows you to conveniently track chat cards or ongoing effects which may require later rolls. Right click a message to pop it out to a separate window.
- Added an option for players to hide chat messages, messages hidden in this way will be converted into a private message that only the user and GM can see.

`@[name] {message}``/w [name] {message}``/gm``/players``/reply`
#### Other Features

- Upgraded Electron to 10.1.x featuring Chromium 85.
- Added a Combatant configuration sheet which allows for changing the displayed name, image, and initiative value of a Combatant. Combatants are configured by right-clicking on their entry in the Combat Tracker.
- Reorganized the Combat control buttons in the sidebar tab to more logically group controls.
- Left-clicking an entity in a compendium pack where the sheet for that entity was already rendered and minimized will now maximize the existing sheet.
- Users with limited permission on Rollable Tables will now be able to still roll from the table, but will not be able to view the full contents of the table.
- Users listed on the login page will now be sorted alphabetically within their role, with game-masters and assistant game-masters listed first, followed by players.
- Packages are now sorted alphabetically by title in the main Setup and Configuration menu.
- Trying to access an entity sheet that the user does not have permission to view will generate a warning banner which explains that the user does not have access to view.
- Added an [x] indicator to the right side of notification banners to show users that they can be dismissed.
- Improved the logic for determining whether a context menu should expand upwards or downwards to avoid cases where menus would overflow outside of bounds of the container.
- The content of the awsConfig file will now be validated in addition to simple existence of the JSON file to test that the provided configuration values will succeed in establishing a connection.
- Added support for providing a subset of configuration options in the awsConfig JSON file which can still be used even if not all elements of the object are provided.
- Added an "uptime" key to the /api/status endpoint that reports for how long the server has been running the currently active World.

`/api/status`
### Localization Changes

- Add missing localization support to the Ambient Light Source configuration sheet.
- Add missing localization support for Compendium creation and deletion dialog prompts.


### Bug Fixes

- The CORS retrying mechanism no longer prevents scene loading when it encounters an invalid URL.
- Invisible walls now correctly block token movement again.
- Implemented the new FormDataExtended class which subclasses the standard FormData API and extends it to provide Foundry-specific functionality and methods.
- The formData object processed by the FormApplication class once again is vended in "flat" format using the one-dimensional input names which are provided in the form.
- Canvas panning should no longer be incorrectly prevented by the _dragRight workflow.
- The initial view position of a Scene can once again be properly assigned, which previously failed due to the nested structure of the returned form data.
- Wall snapping on gridless mode will no longer interpret every individual pixel a snap point and instead will now snap at a micro-grid where the density is defined by the grid size field of the Scene configuration.
- Corrected an issue where the A/V user interface incorrectly displayed as muted when the microphone is actually enabled.
- Mute and Unmute tooltips on AV Chat windows should now display correctly when they are muted or unmuted.
- Canvas initialization is not properly establishing the initial view conditions for objects on layers which are inactive, but visible like tiles/templates/drawings.
- Corrected an issue where moving a large volume of walls would cause a spike in CPU usage and a period of unresponsiveness.
- Corrected an issue where providing an explicit Scene thumbnail to the scene.update API would fail to set the provided thumbnail image and instead re-generate it.
- Corrected an issue where saving or updating a Scene would rescale the scene based on the dimensions of the background image, resulting in incorrectly repositioning of all objects in the scene.
- In some cases, mousemove and hover events were occurring when a scene was loading, Mouse movement events are now contained within the active PIXI canvas to resolve this.
- The ChatMessage#can('delete') permission check is now correctly based on the original Message author.
- Draws from a Rollable Table using RollTable#drawMany() no longer fails if "display roll to chat method" is unchecked.
- The ChatMessage.getSpeaker() method now correctly recognizes that a provided Actor may be a synthetic Token override and correctly deduce the Token speaker from that Actor instance.
- Players can no longer use the API to render an Actor Sheet for an Actor they do not have any permission to view.
- Dragging an Actor from a Compendium to the scene Canvas once again imports the actor's data to the world.
- Corrected some issues with the way the internal _changed object is was being written to the database on entity update operations.
- Linking to an entity in chat with a space character included in the label should now correctly link.
- Assigning a Token as the new prototype for an Actor will no longer incorrectly retain flags that were previously set on the prior prototype.
- Left-clicking an entity in a compendium pack was unaware that an existing sheet for that entity may already be rendered, resulting in it being possible to repeatedly open copies of the same entity.
- Corrected an issue where inputting the inverse number of a current HP value would fail to calculate correctly.
- Item Sheets are not properly uniquely identified, making it possible to open multiple sheets of the same item.
- The Import All Content option for a compendium pack will no longer fail for Macros or Playlists.
- Asynchronously adding combatants via API is now handled correctly.
- Fixed a regression that caused rolling zero of a certain dice denomination to incorrectly revert to rolling one of that die denomination.
- Corrected some issues which would allow maximize and minimize in Roll formula containing illegal characters to unpredictably succeed.
- Setting light source opacity to zero defaults back to 0.6 incorrectly.
- Small map sizes no longer cause fog of war and lighting issues when panning.
- Light Sources now correctly refresh their display if their animation type or properties are changed.
- The "Modify Configuration Settings" now correctly allows users to enable/disable modules.
- Corrected an issue where renaming a player from the configure players menu to an existing player name would fail without error.
- Players are now able to swap between Image and Text views when viewing compendium Journal Entries.
- It is no longer possible to remove gamemaster permissions from an account if it would result in the world having no gamemaster account.
- The Navigation and Macro bars previously had an extended frame which, though transparent, was blocking canvas clicks. This has been corrected.
- Fixed an issue with where using the Modesto Condensed font in drawing objects can result in the font not being properly loaded on a full refresh.
- Macros can once again be dragged to the macro bar from compendiums in player-level accounts.
- Corrected an issue where errors would prevent Application windows from being closed.
- Fixed an issue with the protected package installation workflow where the download URL failed to get the verified package name from the retrieved manifest.
- Addressed some edge cases where ui.setup.reload would return undefined.
- Added a more interpretable error message for situations where a user would attempt to install a package from a local file.

`FormDataExtended``formData``scene.update``ChatMessage#can('delete')``RollTable#drawMany()``ChatMessage.getSpeaker()`
### Framework and API Changes


#### Active Effects

- Implemented part 2 of the ActiveEffects Phase 1 system with an EmbeddedEntity in the Item model which can be applied to Actors either by owner, or by target.
- [BREAKING] Added new ActiveEffect application mode options for UPGRADE and DOWNGRADE, and re-organized the default ordering of ActiveEffect modes.
- [BREAKING] Renamed the "data" field in the ActiveEffect data model to "changes" to be more specific about the nature of effect data.
- [BREAKING] Refactored the ActiveEffect model to target changes at the Actor level, rather then in the system data object specifically. This allows for Active effects to temporarily change base actor attributes like token attributes, image, or flags.
- [BREAKING] Moved the methods which are responsible for applying an ActiveEffect to a given Actor into the ActiveEffect class instead of the Actor class.
- When an active effect is applied with mode ADD to a field which does not have any current value, it will impute the current value as zero and add from there.
- Improved the way that entityClass overrides are handled in each EntityCollection to ensure that overridden instances of the base entity types are applied consistently throughout.
- When adding an Item to an Actor, the UUID of the source item will now be included in the data so that the origin of the item data can be tracked and updated.
- Configured ActiveEffects on OwnedItems to Automatically delete ActiveEffects from an Actor when the OwnedItem that provided them is deleted.
- Added a "disabled" property to each ActiveEffect which allows it to be toggled off and on without being removed from the Actor that owns it.
- The class definition used for ActiveEffect instances can now be configured under CONFIG.ActiveEffect.entityClass.
- ActiveEffect embedded entities which exist on an Item can be either transferred to an Actor when that Item becomes an Owned Item, or can remain as part of the Owned Item data model.
- Added convenience APIs for updating or deleting an ActiveEffect from the embedded entity instance directly.


#### Game Clock

- Implemented new server-side management for official timers for server and world time.
- Implemented a new client-side framework for updating the official game time, and taking follow-up actions when the game time is changed.
- The game clock time will automatically increment during combat encounters based on the number of turns which have transpired.
- Added the updateWorldTime hook to allow systems and modules to respond when the official World time is changed.

`updateWorldTime`
#### Audio / Video Chat Integration

- [BREAKING] Refactored the WebRTC family of classes to be general AV (AVMaster, AVClient, etc...) classes which do not strictly require all interfaces to use the WebRTC protocol.
- [BREAKING] Ensure that the available voice broadcasting modes for WebRTC are displayed dynamically based on the enum defined on WebRTCSettings.VOICE_MODES so that different clients (like Jitsi) can add or remove certain modes
- [BREAKING] Increased the frequency of voice activation checks for a users own volume level when using the voice activation broadcast mode.
- Converted the signaling and relay server password fields in the A/V Configuration form to use password-type inputs.


#### Entities

- [BREAKING] Provided a new general-purpose Entity#hasPlayerOwner attribute to test whether any non-gamemaster user has ownership permission to the Entity instance. Deprecated the Actor#isPC attribute in favor of this more general approach.
- [BREAKING] Refactored the User Management screen to implement more standardized client/server handling workflows rather than using a specialized POST request.
- [BREAKING] Concluded deprecation of loading Application options by class name from the CONFIG object.
- Removed the requirement for an EmbeddedDocument to define an explicit parent Document type in its metadata.
- Standardized the return data type for the ActorTokenHelpers#createEmbeddedEntity() and Entity#createEmbeddedEntity() methods.
- Added support for a new recursive option in the mergeObject helper method which allows for inner objects to be merged recursively (by default) or directly replaced with the provided new value (if false).
- Added support for passing the recursive {boolean} flag to Entity and Embedded Entity update operations to specify that certain objects being updated should not be merged recursively.
- Added an optional key to the BaseEntitySheet which allows subclasses to define the permission level from ENTITY_PERMISSIONS that would allow a player to view the app.
- Database preSave and postSave operations can now access the Options object that was provided as part of the CRUD workflow.
- Simplified the OwnedItem database schema to inherit and simplify the schema from the base Item entity.
- Added system name (id) as a class to the BODY element.
- Whitespace  will now Automatically be trimmed from form fields which are set as data-dtype="String".
- The source Item UUID will be recorded whenever an Item is added to an Actor sheet using a drag-and-drop workflow. This will allow API usages to be aware of the origin for each Owned Item in the data.

`ActorTokenHelpers#createEmbeddedEntity()``Entity#createEmbeddedEntity()``recursive``mergeObject``data-dtype="String"`
#### Other API Changes

- [BREAKING] When a Dialog application instance is submitted, pass the entire application HTML to the callback function, not just the inner dialog content. Also move the options object of the Dialog.confirm helper method as a named key in the primary options of the constructor instead of as a second parameter.
- [BREAKING] Move the options object of the Dialog.confirm helper method as a named key in the primary options of the constructor instead of as a second parameter.
- Add a new option to the Dialog class which allows for jQuery to be disabled for callback functions. Setting options.jQuery as true maintains the current default behavior, but this will become false by default in the future.
- The get permission getter for Chat Messages now incorporates message authorship as defining the permission level of the message Entity.
- Added the ability to preserve the same Combat turn when calling Combat#rollInitiative to allow for a use case where it's necessary to reset the initiative order at the start of a new round.
- Removed the requirement that a Combatant must reference a valid Token ID.
- Calling the PlaceableLayer#pasteObjects method now returns an Array with the created objects data including the ID of the newly created entities.
- Add support for a snap option in the PlaceablesLayer#pasteObjects method which is true by default but can be overridden via the API or by holding the SHIFT key when pasting data.
- Created a new TextFilter UI helper class for all cases where a text input field is used to filter the set of results which are displayed within an application view.
- Improved the usability of radio button inputs and multi-select fields in Form Applications.

`Combat#rollInitiative``PlaceableLayer#pasteObjects``PlaceablesLayer#pasteObjects``TextFilter`
### Documentation Improvements

- The 0.7.2 update includes many significant documentation improvements for the API documentation including more accurate typing information for a large number of parameters and more complete documentation for certain classes which were lacking.
- Please note - this improved documentation is NOT YET available on the Foundry website as the current API documentation refers to the latest release build. I will try to consider ways to make alpha channel API documentation available as well but I have not yet developed a solution for this.


### Known Issues

- There are no specific known issues at this time - but this is an alpha build - so it is known that there are issues (potentially serious ones). Proceed with caution.


### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.7.2 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please use the Contact Us form and select "Bug Report" as your category.

Please stay up to date on progress by following the project roadmap on Gitlab.

