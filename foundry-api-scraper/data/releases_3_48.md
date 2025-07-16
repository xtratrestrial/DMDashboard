# Release 0.3.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.48

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.3


## Version 3 Development


##### July 17, 2019


## Beta 0.3.3 Update Notes

Hey everyone, it's time for another exciting Foundry Virtual Tabletop beta update, with version 0.3.3 that adds a huge number of new features and bug-fixes. With 70 issues addressed in this update it is a new record for the largest update (in terms of issue count) ever! This update includes some big new features like Token Actor Data Extension, support for Universal Plug-and-Play which removes the need for port forwarding, group editing for Wall objects, addition of the initial system for Weather Effects, and server-side storage for Fog of War exploration. These major feature improvements are partnered with a lot of helpful bug fixes and API improvements.

`0.3.3`Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- This update adds support for Token Actor Data Extensions which allow any token, even one which is not linked to a base Actor entity, to have it's data model updated. This allows for some really amazing possibilities, like having Tokens whose statistics, items, or abilities are randomized at the time of the Token being placed. Double clicking a Token will continue to open an Actor Sheet for that token, changes to this sheet are applied as Token actor-data overrides if the Token is not linked to the actor directly. Furthermore, this change allows for Token-specific resource bars to be deprecated and removed from the Token data model. The attribute bars displayed for Tokens now refer directly to that Token's actor data. This is a powerful change, but it adds a several new complexities or situations that developers may encounter. Furthermore, the relationship between Tokens and Actors has historically been confusing to users - so more work will certainly be required to ensure that Game-Masters can easily understand the system.
- Automatic support for Universal Plug-and-Play (UPnP) has been added to Foundry Virtual Tabletop. If your local network allows for UPnP, this means that you no longer need to deal with Port Forwarding in order to allow others to connect to your game! Sincere thanks to KaKaRoTo for helping to demonstrate this proof of concept and advocating for this improvement. I believe it will provide a big benefit for new users who are discovering the software and are uncomfortable with the challenges of port forwarding.
- Added support for group editing of Wall objects which allows you to select multiple walls and edit or delete them as a chained sequence. Clicking on a Wall while on the Walls Layer will select the wall. Holding SHIFT while clicking walls will add or remove walls from the controlled set. Holding ALT while clicking on a wall will select all Walls which belong to the chained set of linked endpoints. Double-clicking a wall endpoint while a set of walls are controlled will allow you to edit the properties of all Walls with a single update, for example, if you want to switch a set of existing walls to be invisible or terrain typed.
- Added the first implementation of Weather Effects with support for Rain, Snow, and Autumn Leaves weather effects. More weather effect types and variable settings for each effect type will be coming in a future update, but I'm very excited to add this initial functionality for testing as a proof-of-concept.
- Fog of War exploration now features server-side persistence. Previously fog data was stored client-side per User. This could fail if the User connected on different devices or reset their browser cache. Now fog exploration data is stored as part of the World data, protecting players from data loss in fog exploration progress.
- Added a new Tile HUD which mirrors the behavior and functionality of the Token HUD for controlling Tile visiblity settings. Right clicking upon a Tile (while on the Tiles Layer) will activate the HUD for controlling that Tile.
- Tile objects can now be locked in place to prevent them from being accidentally modified or moved. The conntrol to lock or unlock a Tile is available in the Tile HUD.
- The styling and performance of the World Setup page has been improved to load data asynchronously to speed up the process of browsing and editing World information before a game is started. Each World can now be assigned a World Banner Image which can be used to provide additional visual flair to each world. This world banner will be reused in other places in the future.
- A toggled mode has been added to the Canvas Notes Layer which allows for Map Notes to remain visible and interactable while on the Token layer. This can be ideal for maps where exploration and reference of key points of interest plays an important role. There is not yet a way to store this setting in a persistent way, but this will be added in a future update.
- Added a visual toggle to collapse the sidebar to a minimal version only containing the tab buttons (which can still be right-clicked to pop them out). This can be a great way to keep the UI clean when not in use to focus on the game canvas.
- The position and zoom level of the camera in a Scene will now be remembed, so that re-rendering of the Canvas due to settings changes will now cause the camera to reset back to a default position, instead it will now stay fixed in its previous location for a more smooth user experience.
- Added localization support for the Wall Configuration sheet.
- Added support for WebP as a valid and supported image file format.
- When selecting an audio file for a Sound track in a Playlist, the title for the track will be automatically populated using the selected file name if a name has not been otherwise set.
- Generalized the behavior of the rectangular select tool to now work with all PlaceableObject layers. This tool is currently only enabled for Tokens and Tiles, but the underlying functionality to support rectangular selection for other PlaceableObjects is now possible and will be added in a subsequent update.


### Core Bug Fixes

- Resolved a serious problem with Measured Template grid highlighting which neglected to account for the amount of distance represented by each grid square, resulting in an exponential increase in computation for large template sizes.
- Fixed a bug whereby tokens which collided with a Wall during a groupwise Token movement would be rocketed towards the top-left of the Canvas instead of having their movement stopped.
- Corrected an issue with whispered messages where spaces in a player name prevented the whisper from being sent.
- Dice rolling will now accept a capital 'D' for the number of dice rolled, for example /r 4D6 and /r 4d6 are equivalent.
- Fixed an issue which sometimes prevented Token vision from being correctly initialized when the page is first loaded due to an asynchronous behavior which was not properly resolving before downstream steps were triggered.
- The Combat Tracker sidebar UI was incorrectly treating initiative rolls of zero as an indication that the combatant has not yet rolled initiative. This is now resolved and a result of zero is allowed, despite being highly unfortunate.
- Fixed a bug in the Simple Worldbuilding system which threw a fatal error when the Sheet Configuration UI was activated.
- Changing the visibility permission for Compendium Packs was not applying immediately for other connected players, this has been corrected.
- An issue with the new in-app World Compendium deletion logic caused it to be (accidentally) restored if re-created with the same name during the same session. Now deleting a World Compendium is, actually, permanent.
- Fixed a failure which could occur during World migration where a compendium pack was not connected before an attempted migration was applied.
- An issue in the Sound CRUD workflow which failed to provide the parent Playlist ID to the socket event has been fixed.
- Prevented a failure in the Combat Tracker which caused the "Reset Initiative" button to break the functionality of the app.
- The file paths returned by the server using it's client-side file paths transformer will now always return URI encoded paths.
- A bug in the Player Configuration view caused a new User to be created when the Enter key was pressed in an input field instead of submitting the form to update changed users.
- Fixed a bug which prevented the new TokenConfig sheet from rendering if a Token no longer references a valid and existing Actor.
- Closed a loophole which caused ChatMessage entities which contain Roll objects to render their HTML content twice, once in the toMessage function and again in the main ChatMessage.render call.
- Corrected an error which prevented the main menu (ESC) from being rendered after a ContextMenu was closed and destroyed.
- Fixed a bug which accidentally allowed a Token with hasVision enabled but zero distane assigned to it's vision settings could incorrectly reveal the entire map Fog of War as was the behavior for GM users prior to the addition of this checkbox.
- A problem with Tile objects could cause strange and unpredictable results when resizing them using the drag handler, flipping the tile aspect ratio or size. This has been addressed and the resizing process for tiles should now work in an intuitive way.
- Fixed a problem that could cause the Chat Log to become unloadable if it contained a message which was originally posted by a User who has since been deleted.
- Corrected a defect with the volume sliders for Playlist audio which allowed players to change the default volume level played for all players instead of (as intended) only locally overriding their own playback volume.
- A bug could allow Players (non-GM) to move the position of Tiles, a permission which should only be allowed to GM users.
- Improved the Canvas initialization behavior to eliminate a problem which could occur where the aspect ratio of the viewport changed while the Canvas was being rendered. A redundant check at the end of the drawing process looks to see whether the dimensions changed while drawing.
- In some situations, status effects applied to a Token do not show up immediately for a Combatant in the Combat Tracker. This has been more reliable, so that applied status effects will appear immediately in the Tracker.
- Clicking on a combatant in the tracker will no longer attempt to pan the map to that Token's location if the user is not viewing the Scene in which the Combat Encounter occurs.
- Fixed an issue with the _activateEditor function in a FormApplication which could cause it to be fired before the HTML of the application was ready for use.
- A minimized ActorSheet would incorrectly attempt to re-render itself as maximized when a portion of the Actor data is changed. Instead this update will now happen in the background and leave the application minimized.
- Fixed a resource contention issue which could cause icons from Token status effects to become unusable depending on the load order of the PIXI Canvas.

`/r 4D6``/r 4d6``toMessage``ChatMessage.render``hasVision``_activateEditor`
### Core Software, APIs, and Module Development

- Refactored the event names used for Compendium operations to better standardize their design with other CRUD or GET workflows.
- The signatures used for Hooks which interact with Entity and EmbeddedEntity CRUD workflows have been updated and made more consistent in terms of their naming conventions and the arguments which they transact. Please see This Issue for documentation and examples of how hooks (and pre-hooks) work after this update. Please note, in particular, that update-type operations now also provide the differential data object as an argument to the hook, allowing the user to see exactly what data was changed.
- The setProperty utility function will now assign Array elements by positional index if the parent object is already of the Array type. See Here for more details.
- The structure of Canvas Layer interaction listeners has been changed to delegate click and drag events from the base Canvas stage itself, rather than having each Canvas layer implement it's own interaction managers.
- Previously, updating a Compendium entry required importing the entity to the World, updating the Entity data, deleting the previous entry from the Compendium, and re-importing the updated version. This was a really awkward workflow, and can now be replaced with a much more elegant API method to edit compendium content directly. Please note that there is not yet a UI-based method for doing this in-game, but that functionality can be added in a subsequent update now that the underlying API exists. See Here for more details.
- A Combat entity will now persist the prior (round, turn, tokenId) which can be used to understand what has changed relative to the prior combat state.
- Improved the behavior of the Entity.create method to accept dot-string style properties provided as part of the initial creation request.
- The ContextMenu event handler now allows events to propagate even if a context menu is triggered, in case other systems or modules are awaiting a right-click event for other reasons. Furthermore, the triggering event which spawns a ContextMenu UI can now be configured as an additional option when the menu is instantiated.
- The initial implementation of localization support erroneously named the localization module as il8n when it should be i18n. This has been renamed.
- The CSS rules for Applications has been overhauled to make extensive use of overflow-y: auto instead of overflow-y: scroll. This could cause some styling changes to be forced upon downstream modules.
- Switched the Scene Notes application to activate it's editor via a button instead of starting with the editor always active.
- The set of active Application instances which should be refreshed when an Entity data is updated has been converted from an Array to an Object. This is still recorded as entity.apps, but this is now an object where the keys are appIds and the values are Application instances.
- Deleting a Scene entity will now propagate deletion to CombatEncounter and FogExploration documents which belong to that particular Scene.
- Added global constants for the allowed file extension types allowed for different media as IMAGE_FILE_EXTENSIONS, VIDEO_FILE_EXTENSIONS, and AUDIO_FILE_EXTENSIONS.
- The FilePicker ui will now dispatch an onChange event to the linked input field when a file is selected in the picker.
- Standardized the user-select styling rules across browsers including Firefox, Opera, and Safari.
- Applied a sensible tabulation order to the Playlist Track configuration sheet.
- Fixed the behavior of the JournalEntry.show() method to correctly force display of the Journal content if (and only if) the force parameter is passed as true.
- Added support for flags in the data model for Folder entities. Folder flags can be used by modules or systems to store certain data at the Folder level which modifies behavior of that folder (or its contents).
- Changed the behavior of the Roll.parts Array to now be immutable. Once rolled, the roll method cannot be called again, however a reroll method has been added which provides a Factory for creating a new Roll object with the same formula and data.

`setProperty``Combat``(round, turn, tokenId)``Entity.create``ContextMenu``il8n``i18n``overflow-y: auto``overflow-y: scroll``Application``entity.apps``Scene``CombatEncounter``FogExploration``IMAGE_FILE_EXTENSIONS``VIDEO_FILE_EXTENSIONS``AUDIO_FILE_EXTENSIONS``onChange``user-select``JournalEntry.show()``flags``Roll.parts``roll``reroll`
### D&D5e System Improvements

- Incorporate updates to the Class Features compendium using new pre-configured items provided courtesy of Thor's Wrath on Discord.
- Fixed a bug with experience gain per challenge rating for high CRs (26-30) which were previously incorrect.
- Redesigned the HTML structure of the D&D5e Actor Sheet to provide a more consistent and responsive experience across different browsers.

