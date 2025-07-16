# Release 0.2.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.41

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.6


## Version 2 Development


##### April 13, 2019


## Beta 0.2.6 Update Notes

Greetings friends and supporters! I'm really excited to share another Foundry Virtual Tabletop beta release 0.2.6. This update incorporates some major improvements for the Combat Tracker and Ruler systems to add synchronization, waypointing, and expanded turn tracking functionality to Foundry VTT.

`0.2.6`I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- The Combat Tracker has experienced a significant redesign - allowing for a large number of new features for creating and managing your combat encounters. You can now manage multiple encounters which can be cycled using the controls at the top of the tracker UI. Additionally, entries in the tracker can be marked as defeated which displays their name in red with a skull icon. Furthermore, GMs now have the ability to customize combatant visibility which can be used to keep tokens in a combat encounter hidden from players using a system which is related to but separate from Token visibility itself. All these changes collectively make the combat tracker improvements one of the biggest new features in this update version.
- Added GM convenience features to roll all or roll NPC initiative in the Combat Tracker instead of clicking each combatant one at a time.
- The Combat Tracker now has the ability to report one additional Actor attribute for each participant in the combat encounter. This displayed attribute is only visibile to the game-master user and could be used, for example, to reflect the Armor Class of each token combat in a way that provides a convenient summary. I think there is opportunity to do more here in the future, so I will be collecting feedback and expanding this system again in a future update.
- Ruler measurement has been substantially overhauled to support two major new features: synchronized measurement allows for other players to see what distance you are measuring as ruler displays are now networked across all players, and waypoint measurement allows you to measure a piece-wise movement path where the total distance is measured as the sum of all individual segments. To use waypoint measurement, hold the CTRL (or CMD on Mac) key while measuring and click left-mouse to add a waypoint. Right click will undo your previous waypoint. As before, pressing SPACE will execute a Token movement along your measured path.
- Distance measurement for hexagonal grids will now count the number of hexes travelled before multiplying by the stated distance rather than measuring the direct point-to-point hypotenuse directly.
- Window Applications can now be made resizable - this default behavior has been applied for Actor and Item sheets, but can also be specified by module developers who are creating their own Application windows.
- Improved the logic which governs the Grid highlighting behavior for various Measured Template shapes and grid snap points. This should result in more accurate and reliable highlighting for different grid types.
- Token drag-and-drop behavior was incorrectly snapping to vertices of hex grid locations rather than the center of a hexagonal space. Now when moving a token on a hexagonal grid layout, the destination space that is snapped should more predictable and correct.
- Improve detection of measured Token movement such that a spacebar press will still function if the measurement originates from a space where you have an owned Token even if that Token is not actively controlled.
- The default color used to highlight MeasuredTemplate backgrounds will now match the chosen player color to help differentiate which templates were placed by which player.
- Separated the overlay display of the measured ruler from the grid highlighting component to be better behaved in the presence of fog of war or other vision blockers.


### Core Bug Fixes

- Fixed a problem which prevent the thumbnail directory from being correctly created in newly generated World directories that caused new worlds from not saving their Scene data correctly.
- Resolved a problem which caused a Scene's thumbnail from being inadvertently destroyed when other aspects of the scene were changed, for example moving it into or out of a parent Folder.
- The Software Update page was not functioning properly when a World is not currently active. A workaround for this (which is still required to apply this update) is to load a World and then navigate to the "Update Software" page from there. For future updates, after this version is applied, the intended behavior should work correctly.
- Restore the correct functionality of the "Count Success" and "Margin of Success" dice roll modifiers which had gotten broken in the previous update dice rolling improvements.
- Corrected a failure for Ambient Sound configuration sheet which prevented it from correctly rendering for a previously placed audio source.
- In the previous version, the "Game Invitation Links" interface got broken and was no longer correctly displaying the server IP address - this has been corrected.
- Corrected a problem with the management of file paths in world.json configuration files.
- Solved a problem with running FVTT using node directly from some other working directory which caused certain file paths to no longer be correctly relative.
- Closed a loophole where double-clicking a Token whose associated Actor no longer exists raised a console error.
- Improved the new mimimize/maximize window behavior to work better for Applications which set an "auto" width.

`world.json`
### Core Software, APIs, and Module Development

- Combat is now an Entity subclass, including all the standard methods that entails.
- Implemented some significant improvements to the backend database layer which makes it possible to forward any server-side error messages to the requesting client so that failures and bugs can be more easily identified, reported, and fixed. This functionality has been first rolled out for all Entity create, update, and delete operations where now server-side errors will trigger a client side stack trace and notification.
- Added a Token.animateMovement(ray) method which animates a transition path for a token between the endpoints of the Ray, returning a Promise when animation is complete. More details here: https://gitlab.com/foundrynet/foundryvtt/issues/690
- Warning: Due to the significant changes to the data model for Combat encounters, any existing combat encounters in your saved Worlds will be destroyed as part of this update. Sorry for any inconvenience.
- Improve the base setProperty helper to allow for setting an object as the value.
- Improved the behavior of the new Entity.setFlag() method so that an object can now be correctly used as the value for a flag variable.
- Expanded upon the Flags system such that an OwnedItem can now have (and persist) the same flags that it would as a base Item entity.
- Support the options.resizable flag when instantiating an Application which will add a resize handle at the bottom-right corner which allows the dimensions of the application UI to be adjusted by the client.

`Entity``Token.animateMovement(ray)``setProperty``Entity.setFlag()``OwnedItem``Item``options.resizable`
### D&D5e System Improvements

- Fixed a bug which caused healing magic to add to the temporary health pool rather than base health values.
- Added a configurable option to disable the inclusion of Dexterity value as a tie-breaker in the initiative formula.

