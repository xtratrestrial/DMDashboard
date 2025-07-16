# Release 0.4.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.60

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.5


## Version 4 Testing


##### January 17, 2020


## Beta 0.4.5 Update Notes

Greetings Patreon supporters and Beta testing community - I'm happy to release a the stable version update for Foundry Virtual Tabletop - Beta 0.4.5. This is an "odd-numbered" release, which means it implements bug fixes and stability improvements for all the new features that were added in Beta 0.4.4. If you haven't yet gotten a chance to take a look at the release notes for that update, please do check them out: https://www.patreon.com/posts/33025153

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Bypassing snap-to-grid by holding SHIFT while placing Walls has been (temporarily) disabled. This feature was contributing to the addition of small gaps between walls where endpoints did not perfectly align. I will be redesigning the wall snapping and chaining system in 0.4.6 to re-enable this feature with improved behavior.
- Creating a Macro by clicking on an empty Hotbar slot will now automatically populate that slot with the created Macro.
- Minor improvements to the HTML structure and layout for Combat Tracker encounter and round controls.
- Minor improvement to the visible shading of Scene titles to better stand out against light backgrounds.
- Minor styling improvement to the list of Actors selected in a Player Configuration sheet.
- Add a new automatic migration for Scene entities which occurs when the System data version is incremented to ensure that Token actor override items are properly migrated.


### Core Bug Fixes

- Worlds could become broken in a state where each time the world was launched the server would attempt to create a new Gamemaster user, which would fail due to that user name already being taken. If you find yourself impacted by this issue, perform the following steps to correct the problem: https://gitlab.com/foundrynet/foundryvtt/issues/1955
- The id of an Item entity was inadvertently locally deleted when using it in a drag-and-drop operation on an Actor sheet.
- Fixed a problem where sidebar Entities could no longer be sorted into a new Folder because of breaking changes in the 0.4.4 relative sorting method.
- Popped out sidebar tabs failed to automatically resize when their contents were re-rendered.
- Fix an issue with Token creation which casued it to be drawn twice - resulting in an orphaned token image that would remain shown even as other aspects of the Token appearance were changed.
- The Table Result drawn from a Roll Table was incorrectly displayed publicly when drawing from the table using a Self Roll, now fixed as a private self-drawn result.
- Undoing a drag movement for a Tile or Drawing resulted in the object remaining locked after it's movement was reverted. This no longer occurs.
- Right clicking on an empty Hotbar slot no longer throws a console error.
- The data type of User.role was inadvertently changed to a string when submitting the Player Management form.
- The speaker object for Chat Message data did not properly contain the new style Token ID. As a consequence some aspects of chat messages that relate to Tokens (like Chat Bubbles) did not function properly.
- After closing a minimized sheet, it would become impossible to minimize the sheet again once re-opened.
- Fixed a bug with the on-update workflow for Journal Entry changes to properly update the status of Map Notes.
- Default Scene Playlist switching did not occur properly when using a Scene.updateMany operation.
- Fix a bug related to new server-side permission controls that prevented a Player from ending their own turn in Combat.
- Fix a bug related to new server-side permission controls that prevented a Player from opening or closing a door in a Wall object.
- Invalid compendium collection name in a dynamic entity link would result in a failure to convert the string into a link and also crash the sheet render.
- Ensure that Scene entities which are duplicated do not maintain an active, viewed, or shown in navigation bar status of the copy.
- The Round number and Ent Turn buttons in the Combat Tracker were not reliably displayed on the tracker.
- The toggle visibility and defeated state buttons in the Combat Tracker were not working properly due to the Token id changes in 0.4.4 which weren't handled correctly. These combatant controls are now working properly.
- Issues with Player Configuration avatar editing - causing infinite recursion.
- Modifying the text attributes of a Drawing failed to properly re-draw it's appearance. This has been corrected.
- Changes to a Token width or height attribute must trigger a complete re-draw of the token instead of just a minor refresh.


### Core Software, APIs, and Module Development

- Added a new Entity.clone() method to provide a standardized mechanism for an Entity to be copied in a way that results in a newly created Entity.
- The ChatMessage.createMany method now supports passing a Roll instance to each entry in the data array.
- Eliminate an unnecessary re-render operation for Journal Entry sheets when switching between Image and Text modes.
- The command attribute of a Macro entity is now allowed to be an empty string, where previously a non-empty string was required.
- Improve handling of the default Scene position to allow it to be null and to avoid accidentally replacing it with a non-null object in cases the initial position is not used.
- [BREAKING] Change the entity option of the ImagePopout class to avoid including an actual Entity instance which results in circular JSON serialization. Instead just include Entity metadata.
- [BREAKING] Remove the unnecessary and unused (by the core software) Entity.owner setter method.
- Correct the behavior of the Folder.parent getter to properly return a Folder entity (or null).

`Entity.clone()`