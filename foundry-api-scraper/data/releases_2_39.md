# Release 0.2.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.39

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.4


## Version 2 Development


##### September 18, 2019


## Beta 0.2.4 Update Notes

Greetings friends, supporters, and tabletop enthusiasts! I've got yet another Foundry VTT version ready to go - 0.2.4 includes some pretty exciting improvements for a variety of systems as well as a couple of new features that continue building upon that strong foundation. Key highlights in the new version include video background support, fog of war performance improvements, redesigned dice roll tooltips, and more. This update is available immediately for Council tier supporters and will be made available on Thursday, March 22 for beta tier supporters!

`0.2.4`In addition to these more significant features, this update also includes a large number of smaller features, bug fixes, and enhancements. I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added support for dynamic background images for Scenes. You may now use video files for a range of supported formats (.mp4, .webm, .mpeg, .ogg) as the background image for a Scene. Be sure to check out the new Development Video Update for some examples of video backgrounds in action. For background videos which include an audio track, the volume level of that audio is controlled using the Global Ambient Volume slider.
- The fog of war rendering logic has been rebuilt to incorporate a similar shadow-map approach to the performance improvements added for the light layer in version 0.2.2. This change has improved fog of war rendering time and reduced the size of the fog of war data that is saved to local storage. While I have attempted to preserve backwards compatibility with this change, it has not yet been broadly tested. If you experience any issues with re-loading fog of war under 0.2.4 you may have to reset the fog and lose your prior exploration of a Scene. Sorry about this, but it's beta and the new fog performance should be worth the trouble!
- The opacity and darkness of different lighting and fog levels have been re-balanced slightly to provide more contrast between dim light, explored fog without light, and unexplored darkness.
- Dice roll tooltips in chat have been redesigned to be more expansive, informative, and easy on the eyes. See the above screenshot for an example of the new dice roll tooltip display. Previously tooltips were shown for individual dice groups on hover, now a combined tooltip will is toggled for the whole roll by left-clicking on the dice roll in the chat panel.
- Now when rolling a dice formula which keeps or discards dice, the Die will keep track of which results were discarded so that they may be visually rendered for more intuitive dice roll tooltips.
- Added support for Fate/Fudge dice using the syntax /r ndF which would roll n 3 sided dice which correspond to results of -1, 0, and 1. The tooltip for fate/fudge dice has been adjusted to report these results using conventional plus and minus signs.
- Added and improved support for count-success and margin-of-success dice rolls. Count success will count the number of dice which satisfy a certain condition using the example syntax /r 6d6cs>3 to roll six 6-sided dice and count the number which roll 4 or higher. Margin of success will compare the total of a roll to some fixed number and report the difference as the result. For example /r 6d6ms>10 would roll six 6-sided dice and return the total minus 10. For further examples of these new dice rolling options please see: http://foundryvtt.com/pages/dice.html
- The Compendium sidebar tab has been split into separate sections per Entity type. Compendium packs within each section are now sorted alphabetically for a more consistent and intuitive user experience.
- The conditions required for a Token to be revealed to a player based on their field of vision have been changed. Previously the center of a token's square was required to be visible in order for the token to be revealed. This caused some awkard cases where a player could see most of the token's square but no token was visible in that space. Now tokens will be shown if any portion of their space is visible to the player. I'll collect feedback on this change and evaluate the need for further adjustments in the future.
- The right-click context menu for Actors and Items have a new option to quickly duplicate the entry, copying its data to a new version of the same Actor or Item.
- Placeable Tiles may now be copied and pasted using a CTRL+C and CTRL+V workflow to rapidly create several versions of the same tile in a Scene.
- Placeable Tiles can now be hidden from players similarly to how Token visibility is controlled. While having a Tile selected, a control icon at the top-right of the tile can toggle it's visible state.
- Added a search/filter bar to the File Picker UI which now allows you to filter to the subset of files or folders which contain a search string. For example, filtering for "human" would limit the set of files shown in the picker to those which contain "human" in their name.

`0.2.2``/r ndF``n``/r 6d6cs>3``/r 6d6ms>10`
### Core Bug Fixes

- Resolved a defect with ruler-measurement which prevented CTRL from correctly activating the measurement tool when hovering on a Token.
- Fixed a bug with level-3 folders which caused them to automatically and incorrectly collapse when an entity was moved in or out of them.
- As a result of the dice rolling refactor discussed in the following section, a bug was fixed which caused the order of operations of dice roll modifiers to not be respected under certain circumstances.
- Improved the logic used to detect whether hardware acceleration and WebGL rendering is supported to more accurately display an error message when required conditions are not present.
- Adjust the display of file names in the file-picker to avoid wrapping onto multiple lines for very long filenames.
- Corrected a bug with the new "bulk add/remove" combat controls that could result in duplicated entries being added to the tracker for the same Token.
- The "End Combat" button was not propagating this change in combat state to the control icons for all controlled tokens. This should now be improved, ending combat in the tracker should update the icon display for any tokens active on the board.
- Fixed a loophole which allowed players to drag and drop tokens to move then while the game was paused.
- Improved the height detection for the TinyMCE editor with Scene notes.
- Fixed a bug which prevented the TokenLayer from showing a "shadow" version of a token in its original position when that token is being dragged to a new location.
- Resolved a case that could cause users to be unable to choose their user account at the join menu as the system incorrectly believed that user was still active within the game world.
- Adjusted the logic which controlled whether the user can navigate to the "Update Software" menu - this is now allowed if there is no active World running on the server. Previously the user would need to first start a world before being able to update.
- Fixed a edge case bug which caused visual artifacts if the user was in the middle of a workflow to place a token, wall, light source, or other placeable object when they change the active canvas tool.


### Core Software, APIs, and Module Development

- Improved the loading experience for scenes by adding an up-front parallelized resource loader which acquires and caches all the primary textures needed to render a Scene. This generally results in faster load times for players and eliminates the "pop-in" where a scene background may have loaded before the tokens represented in that scene are available.
- Chat messages often contain dice roll data - during the early versions of FVTT the design decision was simply to convert that dice data to a HTML representation and save the HTML as the message for the roll. In retrospect this was not a great design choice as it prevents downstream users of the message from rendering additional UIs or providing functionalities which depend on the actual Roll result. Starting in 0.2.4, dice roll data is saved to the database as part of the chat message which generated it.
- The dice rolling systems and APIs have experienced and extensive re-build. The underlying randomization remains the same, but the interfaces and abstractions around dice rolls have been overhauled. Be sure to check the updated API documentation for the Die and Roll classes for more details: http://foundryvtt.com/pages/api/dice.html.
- The Roll class can now be exported to JSON and re-loaded from it's serialized representation using Roll.fromJSON(data).
- Added a Compendium.create(metadata) method for creating world-level compendium packs programmatically.

`Die``Roll``Roll``Roll.fromJSON(data)``Compendium.create(metadata)`
### D&D5e System Improvements

- Completed the D&D5e SRD Spells compendium which now contains meticulously prepared spell entries for all spells in the SRD!
- Fixed an incorrect assumption with the diagonal movement rule from the Dungeon Master's Guide. Previously diagonal movement was cycling as 5/10/5/5/10/5 when the correct behavior should instead be 5/10/5/10/5/10.
- Corrected errors in the experience granted by challenge rating. Previously there were gaps in this forumla with some incorrect entries at certain CRs.
- Fixed an issue with fractional CR monsters on the character sheet where entering the CR as a fraction string (e.g "1/8") was not saving correctly.

