# Release 0.2.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.40

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.5


## Version 2 Development


##### September 30, 2019


## Beta 0.2.5 Update Notes

Greetings friends and supporters! I'm really excited to share another Foundry Virtual Tabletop beta release - 0.2.5 - which includes several key improvements as well as a number of general improvements to existing ones. The key theme of this update involves Grid Improvements including support for Gridless and Hexagonal Grid types. In addition to these new grid configurations, this update also includes a number of minor features and bug fixes. This update is available immediately for Council tier supporters and will be made available on Tuesday, April 2 for beta tier supporters!

`0.2.5`I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Redesign the basic Grid implementation in Foundry VTT to be more flexible and extensible to support new grid types described below.
- Added support in the Scene Configuration menu to select a Grid Type for each scene.
- One of the new allowed grid types is Gridless which does not render any grid lines and allows for free form movement and measurement.
- Added another new grid type of Hexagonal with four varities. Even Columns draw flat-topped hexagons with each even numbered column offset. Odd Columns will draw flat-topped hexagons with each odd numbered column offset. Even rows draws pointy-topped hexagons with each even row offset. Odd rows draws pointy-topped hexagons with each odd row offset. Snap to grid, token movement, and ruler measurement are supported for all Hexagonal Grid types. NOTE: some features are not yet fully supported for Hexagonal grid types including wall placement snapping and Measured Template highlighting. These will be coming in a future version.
- In order to provide a more consistent player experience for all types of maps, Foundry VTT now restricts a minimum grid size of 50 pixels. For maps which would otherwise require a pixel grid smaller than this, you will need to increase the dimensions of your map by multiplying the width and height by some scaling factor. I apologize for inconvenience this may cause, but enforcing a minimum grid size will make designing user friendly UI elements that are rendered on the game canvas easier and more aesthetically appealing.
- Pop-out windows can now be minimized and maximized by double-clicking their header. Thanks to community member Morill for prototyping this functionality and inspiring me to add it as a core feature.
- You can now export JSON data for Actors that you own. This can allow GMs to back up significant characters or players to transfer their favorite character between different game sessions. To export Actor data, right click on the Actor in the sidebar directory. Exported data is saved to the client's local filesystem.
- You can now import JSON data to update an existing Actor. To import JSON data right click on the Actor in the sidebar directory. Choose the file from your local filesystem which contains the data to import.
- When placing a Token, the canvas controls will automatically switch to the Token Layer.
- When placing a Token using Drag+Drop, holding the ALT key will cause the Token to be placed in the "hidden" state. This can, for example, allow you to bring new Actors into an active scene without immediately alerting players.
- Improved the audio balance of some UI audio cues to avoid them being too loud (like the combat drums).
- Replaced the entire Scene thumbnail creation workflow with a new system that should be faster and more reliable. Additionally, thumbnail images are now supported for Scenes which assign a video background texture.


### Core Bug Fixes

- Corrected an issue where token visibility was suppressed on Scenes where Token Vision was not required.
- Raise an exception which prevents the user from being able to start multiple FVTT processes on node.js which are running on the same port.
- Update the window overflow rules which had prevented Scene configuration sheet from scrolling vertically on smaller resolution monitors.
- Fixed an issue which prevented global bright light from penetrating through walls and dispelling fog of war.
- Resolved an issue which allowed players to move tokens using drag+drop while the game was otherwise paused.
- Improved the UI display of context menu items to ensure that highlighting that indicates the context-referenced item is removed when the menu is no longer in use.
- Corrected a problem where newly placed ambient lights would not immediately update fog of war for connected clients.
- Prevented an error which incorrectly corrupted the Scene position of an existing Token when it was assigned to an Actor.
- Closed a loop-hole which was inefficiently rendering newly posted chat messages twice while only displaying one of the two results.
- Fixed a problem with keep/drop dice syntax that was not returning the correct result in the initial 0.2.4 update.
- Corrected a rendering issue with the Journal Entry which caused the save button at the bottom to not be usable.
- Switched the location of the "I Agree" checkbox in the EULA dialog to render better on Safari.

`0.2.4`
### Core Software, APIs, and Module Development

- Added a new flags system for all Entity types which can save additional flexible key/value data. See the following ticket for API and example usage: https://gitlab.com/foundrynet/foundryvtt/issues/581
- Added a specialized renderChatMessage hook which can be used to customize the display of individual chat messages as their HTML is rendered. See the following for example usage: https://gitlab.com/foundrynet/foundryvtt/issues/577
- Added a new method for the Compendium, Compendium.getContent() which loads the full content of a compendium in one shot. This includes more overhead compared to Compendium.getIndex() but is useful for modules that want full access to all details.
- Reworked the storage location of the sessions database. Each World now has it's own sessions.db instead of a shared session storage for the entire Foundry VTT application.

`renderChatMessage``Compendium.getContent()``Compendium.getIndex()``sessions.db`
### D&D5e System Improvements

- Integrated support for temporary hit points and temporary maximum hit points as part of the Token resource bar. Temporary HP are now reflected in the visual representation of the health bar.
- When applying damage to a character which has temporary hit points, these are consumed first before applying damage to regular health.
- Incorporated a new feature for character spellbook display toggling which can control whether to show all spells or only prepared spells. Also added a button in the item controls to quickly toggle whether a spell is prepared or not. Thanks very much to community member Felix for prototyping this feature as a module and submitting his changes to the core 5e system.
- Fix a problem with critical success or failure highlighting under the new dice roll tooltips system.
- Correct a missing reference to @mod in spell attack and damage rolls which should now correctly alias the spellcasting ability modifier.
- Corrected the behavior of long rest and Hit Dice restoration for level 1 characters who can now gain at least 1 HD when long resting.
- Fixed an issue with Consumable items which were destroyed when emptied of their charges even if the "Destroy on Empty" checkbox was not enabled.

`@mod`