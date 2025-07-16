# Release 0.2.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.37

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.2


## Version 2 Development


##### February 26, 2019


## Beta 0.2.2 Update Notes

This Foundry Virtual Tabletop beta update includes a large number of features and fixes (in fact, the largest number of any single update version thus-far). The flagship improvements in update 0.2.2 include the initial implementation of the Tiles Layer which allows for you to place art assets on top of the background image, improvements to the performance of Dynamic Lighting through the addition of new shadow-map optimization, expanded control over Walls allowing you to adjust wall types on the fly, and added support for negative values of Light Source emission - allowing you to create areas of darkness which override nearby lights.

`0.2.2`In addition to these more significant features, this update also includes a large number of smaller features, bug fixes, and enhancements. I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added the first stage of a new layer of the game canvas, the Tiles Layer! Tiles allow you to place art assets in your scene which are rendered above the scene background image, but below any Tokens. Some great use cases for tiles include building dynamic dungeons from tile sets, adding additional props to your scene like ladders or traps, or displaying environmental hazards. Please note, this is just the first stage of work on the Tiles Layer, there are many features which are planned but not yet implemented. In particular: tiles can not yet be rotated, the placement workflow for tiles is still a bit clunky, tiles cannot be copy+pasted for repeat placement, and there is not a browsable library of tile images that can easily be placed into the scene. All of these enhancements (and more) are planned for upcoming versions, but I felt it was worth-while to get the basic tile layer and management workflow added right away. It's not perfect yet, but please bear with me as this component continues to improve!
- Implemented a performance improvement to the Dynamic Lighting system which uses a shadow-mapping approach to improve rendering performance for the Sight Layer. In my test scenes, I measured an average of a 34% reduction in render time as a result of these improvements. I am eager to hear feedback from the community on whether they notice any positive effects of the change.
- New flexibility has been added for the configuration of light sources (either ambient or tokens). Bright and dim light may now be given a negative value - which causes an aura of darkness to occur instead of illumination. The value of the negative number configures the radius of darkness, just as in the case of positive values and illumination. This can be used for all sorts of fun effects like magical darkness spells, or environmental areas which are heavily obscured.
- Added a World-level configuration setting which allows the GM to customize whether or not players are allowed to control door states. If this setting is enabled, players may open and shut unlocked doors (the current behavior), however if this setting is disabled players will be able to see door icons, but not interact with them.
- The sensitivity of grid snapping when placing walls is now somewhat adaptive to the initial grid sizes. Maps with large grid sizes will have more snap-points per grid unit while maps with small grids will have fewer.
- The TAB key will now cycle through the set of tokens which have at least OBSERVER permission for the current player. This works a lot better for managing stream views or shared party views where the observer user can quickly cycle through player tokens.
- When mousing over a wall segment, that segment will be shifted to the upper-most layer of the Walls container, this makes the user experience of selecting the desired wall endpoint from a pair of overlapping endpoints much easier.
- Added a black border around wall preview lines to add more contrast for maps for which the previous Wall colors were difficult to see.
- Support activating a Scene directly from the sidebar directory, even if that scene is not currently shown in the Scene Navigation bar. As long as the scene is active it will appear in the bar for the GM and for players, but once that Scene is no longer active it will be automatically removed from navigation.
- Added a context (right-click) option to Journal Entries to "show to everyone" regardless of the user's normal permission to view the entry.
- Added a button on the World Setup menu to navigate to the Update Software page directly without needing to first load into an existing World.
- Placed a new section in the sidebar settings menu which will easily give you the URL links for a player to join your game either via local network or internet. Clicking on the relevant invite link will copy it to your clipboard for easy pasting.
- Added some additional client-side behaviors for when a disconnection occurs from the server. This will warn you that you have lost connection to the server, and if you are unable to reconnect will redirect you back to a safe page.


### Core Bug Fixes

- Fixed a significant bug with the Fog of War system which caused saved fog to fail to be reloaded when switching back and forth between Scenes without fog being first re-saved.
- Changes to the permission settings of an Actor will now more reliably trigger a re-draw of the sight layer if the change in permission results in a need for vision re-rendering.
- Addressed an issue which, ironically, caused token vision to sometimes disappear completely when moved in a scene that was configured to not require token vision.
- Resolved an issue which could cause the ruler tool in the Templates layer to get stuck in measure mode or get stuck off-screen.
- Corrected a defect in the audio playlist sidebar which caused tracks which were set to loop to incorrectly display their status as stopped after the first iteration of the loop.
- Fixed an issue which prevented Scene navigation from correctly displaying the currently viewed scene with an interface cue.
- Fixed a bug which caused the export chat log function to choke on messages with certain formatting options.
- Reworked the logic used to export the chat log such that it should now work in all modern browsers (in particular, it was broken for Firefox).
- Improved the detection of Token hover events to remedy a situation where many tokens could be stuck in their "hover" state, still showing their highlighted borders even when they are no longer active hover targets.
- Resolved an issue which could result in door control icons being displayed for a player who otherwise has no vision source in a particular Scene.
- Fixed an issue which could result in the Combat Tracker turn order overflowing the number of combatants in the tracker, causing a client side crash which was difficult to recover from.
- Prevented a client-side crash which could occur if the active scene was switched while a token was in the midst of a movement animation.


### Core Software, APIs, and Module Development

- Added a Hook event when the combat turn order changes which provides both previous and current Arrays reporting the round, turn, and token. This event should generalize to a wide range of callback actions that modules or systems may want to take when the combat order changes.
- The AudioHelper.play method was lacking a socket listener to support propagating sounds to all connected clients, this has been added so the push argument of this method now functions as expected. See https://gitlab.com/foundrynet/foundryvtt/issues/476 for further detail.
- Added a generalized helper interface to standardize and automate the management of mouse event interactions for containers on the PIXI canvas. This will help me to standardize my approach for this and reduce overall code footprint. Module developers may consider using this pattern themselves if they end up drawing objects onto the canvas which require mouse interactions. See the HandleManager class for details (no docs yet, sorry).
- Improved the approach towards tracking and detecting each user's active state - this should improve the reliability of the HUD which displays which players are currently connected to a game session.

`AudioHelper.play``push``HandleManager`
### D&D5e System Improvements

- Fixed a bug with the saving throw roll dialog which caused it to be missing some of its standard dialog options.
- Corrected the display of ability DC on feats which had specified a specific Ability modifier to use.
- Added display of the damage type dealt to damage rolls posted to chat.
- Restored the ability to add equipment-type items to an NPC actor directly from their inventory header.

