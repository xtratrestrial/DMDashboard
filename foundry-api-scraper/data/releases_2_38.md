# Release 0.2.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.38

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.3


## Version 2 Development


##### March 08, 2019


## Beta 0.2.3 Update Notes

Hey there VTT friends, I'm excited to share version 0.2.3 with you which continues building upon some of the newly introduced systems for Tiles while adding a number of new quality of life features for Token management. This update is available immediately for Council tier supporters and will be made available on Tuesday, March 12 for beta tier supporters!

`0.2.3`In addition to these more significant features, this update also includes a large number of smaller features, bug fixes, and enhancements. I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added a number of controls for Tiles which mirror the user experience with Tokens. A selected tile can be shifted using directional movement keys and rotated using CTRL+Mousewheel or SHIFT+Mousewheel or SHIFT+Movement keys.
- Added a token configuration field for elevation, which can track height or depth of the token relative to the 2d battlefield. When a token has a non-zero elevation, a tooltip will be displayed above the top of the token to show their current elevation value.
- Tokens can now have their combat state toggled in bulk. When a group of tokens is selected, clicking the combat control on any of the tokens in the controlled set will add (or remove) all controlled tokens to the combat tracker.
- Tokens can now have their hidden state toggled in bulk. With a group of tokens selected, clicking the token control button for one token in the group will toggle visibility for the whole group.
- Tokens can now be copied and pasted using CTRL+C and CTRL+V to duplicate a single token or a group of controlled tokens and drop them at a different location in the same scene or even in a different scene entirely. This can make setting up encounters or moving your entire party to a new area much easier since you can copy the set of party tokens and paste them into the new Scene.
- Added the ability to preload an audio track for connected clients, causing them to begin downloading the audio source in the background so that it will be ready for immediate playback once the download is successful. To preload audio, right click on the track name and select the Preload option from the context menu.
- Added a client-specific global volume slider for modifying the volume of audio playlists - the volume at which a playlist track is now played is the track-specific volume slider times the global volume modifier. This is helpful for players who generally think that all music is too quiet, or too loud and allows for a way to generally rebalance the audio environment without tweaking each playlist track individually.
- Added a client-specific global volume slider for modifying the volume of ambient or environmental audio effects.
- Added a client-specific global volume slider for modifying the volume of interface audio cues and prompts like dice rolls, combat turn order cues, direct messages, or locked doors.
- Improved the assumptions around Token movement collision and Gamemaster permissions. Previously drag+drop movements were blocked for short distances as they were confused with keyboard movements. Now wall collision only applies to GameMaster users when using keyboard movement but drag+drop is always allowed.
- Game invitation links have been moved from the settings sidebar to a separate pop-out window that is opened through a button in that sidebar. This change is primarily done to protect streamers who might inadvertently broadcast their own IP address.
- Added a new world-level configuration setting to disable cursor tracking as some users have found this feature more distracting than valuable.
- Fixed issues with overflowing Actor names in the sidebar directory - names that are too long to render will now simply get truncated to ensure that each Actor entry is rendered in a consistent way.
- Slightly modified the language of the EULA to clarify the expectations around using FVTT to host multiple game sessions simultaneously - which should require the purchase of multiple licenses.


### Core Bug Fixes

- Token emitted light sources were previously not correctly revealing tokens which are illuminated by their area of effect, this caused tokens which should have been visible to instead be concealed from the player.
- Correct an issue with multiple ambient audio sources using the same audio file path. Now if multiple sources of the same sound are audible, the loudest version of that sound will play for the connected client.
- Token rotation using keyboard shortcuts (SHIFT + Direction) were not properly broadcasting to other connected clients. This has been fixed and keyboard rotation will now be synced across all users.
- Avoid generating hard failures when attempting to acquire the remote IP invitation link for servers which are not connected to the internet.
- Fixed an incorrect behavior which was causing GM users to immediately assume control of a specific token when changing their view to a new Scene. This behavior continues to occur (as intended) for player users, but GMs now retain a global perspective until a token is deliberately selected.
- Remove border and handles from Tiles when the Tiles Layer is deactivated.
- Prevent the grid size for a Scene from being set to a negative value.
- Added a minimum latency threshold for click events which can help to avoid rapid simultaneous clicks generating duplicated events.
- A bug with negative light sources (darkness sources) actually revealed fog of war as a positive light source would.
- Fixed an issue in Firefox which prevent Scene notes from correctly saving.
- Holding down the SHIFT key will now correctly bypass grid snapping for initial Tile placement.
- Fixed an issue with the combat tracker and hovering over a combatant token. There were some cases where the event handler for this action was expecting a PIXI event rather than a native JavaScript event, triggering errors.
- Dragging an OwnedItem from an Actor sheet back into the Items sidebar directory previously would corrupt and invalidate the item ID of the owned item instead of a duplicated copy.
- Rolling initiative for tokens in a hidden state would previously generate a public initiative roll, revealing the name of the hidden actor. Now when initiative is rolled for a hidden token the initiative roll automatically becomes a private GM roll.


### Core Software, APIs, and Module Development

- Improved the behavior of Scene._onUpdate to automatically re-draw the canvas when collections of placeable objects are modified directly on the Scene instance.
- The Grid distance which can be configured for a Scene is now able to be a float where previously it was coerced to an integer value.
- Added support for Hooks.once() which allows you to register a callback function for a specific hook event which is automatically unregistered after firing once. This can be helpful for one-time setup callbacks.
- Added support for Hooks.off() which allows a specific callback function to be removed from the set of hooked callbacks.
- Refactored the MeasuredTemplate placeable object to use the new HandleManager drag and interaction workflow introduced in 0.2.2.
- Refactored the AmbientSound placeable object to use the new HandleManager drag and interaction workflow introduced in 0.2.2.
- Refactored the AmbientLight placeable object to use the new HandleManager drag and interaction workflow introduced in 0.2.2.
- Refactored the Wall placeable object to use the new HandleManager drag and interaction workflow introduced in 0.2.2.

`Hooks.once()``Hooks.off()`
### D&D5e System Improvements

- Corrected an issue which caused skill and ability check rolls from an Actor character sheet to not be rolled with the character name as the in-character alias.
- Extended the diagonal measurement implementation in the 5e system to allow float values for the grid distance.
- Added an explicit container height for the feats container in the Actor character sheet to allow it to vertically scroll when an actor has many feat entries.
- Fixed a bug which prevented ability test rolls from occuring properly using Firefox.

