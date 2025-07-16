# Release 0.2.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.42

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.7


## Version 2 Development


##### April 17, 2019


## Beta 0.2.7 Update Notes

Greetings friends and supporters! I'm sharing another Foundry Virtual Tabletop Beta update a bit ahead of schedule. This new version, 0.2.7, is being released now to address a number of bugs which emerged in the previous version that were not caught. Rather than waiting a normal update cycle (10-14 days) to post an update that fixes these bugs I wanted to address as many as possible and post this update right away.

`0.2.7`With this update completed, I'll work on accomplishing a more meaningful feature update with 0.2.8 which I will try to release by the end of April. Thanks to all the testers who highlighted some of the problems in the previous update version. Furthermore, since this update is heavily focused on resolving problematic bugs, this update will not have an early-release period for Council-tier Patrons but rather is immediately available for all Patrons.

`0.2.8`https://gitlab.com/foundrynet/foundryvtt/boards


### Core Bug Fixes

- Corrected a server-side error which prevented Scene update operations from being correctly acknowledged back to the requesting client.
- Resolved a problem which prevented players from being able to delete Items from their own inventory.
- Specified that the folder attribute be a required field for JournalEntry entities which prevents an entry from being incorrectly orphaned if dragged out of it's Journal chapter.
- Fixed an error for various placeable objects like MeasuredTemplates, Tiles, and Light sources which caused a circular JSON error when rendering their configuration sheets.
- Improved an issue with the EULA signature process, which was previously repeatedly prompting the user after signing until the server was restarted.
- Resolved a console error which resulted when ruler measurement did not pass a valid destination object.
- Corrected a permissions failure which prevented players with the TRUSTED level from deleting MeasurementTemplates which they had placed in a Scene.
- Fixed an issue with drag and drop operations to change an Entity folder, which was correctly saving in the server but not propagating back to the client.
- Corrected the context menu applied to combatants in the updated Combat Tracker to ensure that the "Remove Combatant" context option works as expected.
- Fixed an issue with the new Combat Tracker reset button which could cause the turn of the combat round to overflow out of bounds once initiatives were re-rolled.
- Improved the behavior of the new resizable window function such that Applications with an "auto" width or height will properly re-render its dimensions dynamically. This resolved a problem with the FilePicker UI in particular that prevented it from being easily used.


### Core Software, APIs, and Module Development

- World configuration JSON files may now specify styles and scripts using glob-style patterns, as is supported for systems and modules.
- Added the pauseGame hook which will fire whenever the paused state changes.
- Improved the Application.setPosition method to separate the update logic for positioning and dimension data as needed.

`pauseGame`