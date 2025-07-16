# Release 0.7.0 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.77

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.0


## Version 7 Prototype


##### July 15, 2020


## Foundry Virtual Tabletop - Version 0.7.0 Update Notes

After several updates focused on maintaining the stable 0.6.x series, I am excited to say I can finally share the first new version in the feature-rich 0.7.x sequence of updates! This release is version 0.7.0, the first Foundry VTT version of the 0.7.x series in the "alpha" (unstable) channel which is available to all Foundry Virtual Tabletop owners.

WARNING: Alpha channel releases are VERY LIKELY to introduce breaking bugs that will be disruptive to play. Do not install this update unless you are using for the specific purposes of testing. The intention of Alpha builds are to allow for previewing new features and to help developers to begin updating modules which are impacted by the changes. If you choose to update to this version for a live game you do so entirely at your own risk of having a bad experience.

Please back up your critical user data before installing this update.

I am very happy to be able to share these features with you all, and I am looking forward to continuing work on this series of updates as it moves towards a stable release.


#### Overview of Changes

There are a number of major focus areas for the 0.7.x series of updates: Dice rolling, Audio and Playlists, Compendium improvements, Lighting system efficiency, Phase 1 development of Active Effects, and more. As the first update in this series, 0.7.0 focuses on a subset of these areas with an intensive focus on Dice Rolling and the Dice API and Compendium functionality improvements. The next several updates in the 0.7.x series will all be on the Alpha channel and will focus heavily on Audio and Playlists, Lighting System improvements, and Active Effects.

Releasing this update to the Alpha (Unstable) channel provides an opportunity for community developers to test their modules and systems for use in the 0.7.x series of patches and incorporate fixes for any breaking code changes. Users who wish to be particularly helpful can also help to test for and locate bugs in the new features and systems. After sufficient testing, fixes will be implemented for bugs that have been found and if the update is stable enough it will advance to the Beta channel as 0.7.1, incorporating the bug fixes found in 0.7.0.

Please be sure to join me on Twitch tomorrow, Thursday July 16 at 8pm EST for a stream showcasing the features included in this update, and some of the upcoming features you can anticipate in the 0.7.x series of patches, as well as a Foundry VTT license giveaway. For more information and to receive notifications on when streams like this one go live, please stay tuned to the Foundry VTT Twitch channel.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Alpha (Unstable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

This is an alpha update and should be considered unstable for all users. It is not recommended for all users to update to this version unless they intend to test the potentially unstable features contained within this update. As always, please take care to periodically back up your critical user data in case you experience any issues.

After clicking Check for Update confirm that you are presented with the 0.7.0 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created dedicated channels for Alpha 0.7.0 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Please stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Updated Electron to version 9.1.0 including Chromium 83, JavaScript V8 8.3, and Node.js 12.14.
- Updated core packages, including PIXI, Howler.js, and TinyMCE.
- Different parts of a Roll formula can now be assigned some flavor text so that individual blocks can be labeled differently. This can be done programmatically using the DiceTerm API or semantically using the dice rolling syntax, for example /roll 2d6[Slashing Damage] + 1d8[Fire Damage].
- Added a new "coin" (c) option which allows a fair coin flip to be incorporated into roll formula. For example, /roll 4dc to flip four coins.
- Added a new "explode once" (xo) dice roll modifier which will produce exploding dice, but only for the initially rolled set, not recursively for additional rolls. For example /roll 10d10x2=10 will roll ten d10 and roll an additional d10 if a 10 is rolled - at most two times.
- Added a dice roll modifier that will subtract the value of failures from the total roll. For example /roll 4d4sf<3 will roll four 4-sided die and subtract the values of dice which roll less than 3 from the total.
- Added a dice roll modifier that will deduct the number of failures from the total roll. For example /roll 4d4df<3 will roll four 4-sided die and subtract the number of die which roll less than 3 from the total.
- Expanded the dice roll syntax for Reroll and Explode modifiers to support setting maximum number of explosions or rerolls which can be allowed to occur. For example /roll 6d6x3=6 will explode when a six is rolled, but only up to a maximum of 3 times.
- Improved the visual indicator for dice results which generated an exploding roll with a small asterisk icon.
- Added a more informative error message for instances where a dice roll formula is invalid because an element was not found.
- The Roll command will now automatically close any open parentheses or dice pool curly braces which were left open-ended in Roll formulae.
- Chat messages generated for rolls that contain parentheses will no longer mask the results of each rolled die, instead displaying them as a collapsible portion of the chat message. For example, /roll (3d4)d6 will show the expanded rolled results for both 3d4 as well as for the number of d6 which are rolled as a result.
- Improved server performance in serving HTTP requests by setting the Express environment to Production. This was an optimization trick that I was unaware of and had not been doing previously.
- Improved the efficiency of Setup initialization to significantly reduce the amount of file system reads.
- Enabled MIPMAP down-scaling for non power-2 textures (requiring WebGL2.0) to improve the appearance of content on the PIXI canvas when zoomed out and the content is very small.
- Provided a new "Import All" context menu option for Compendium Packs which can bulk import the entire compendium pack to a new Folder that will be created.
- Opening the sheet for Journal Entries will now open in text view instead of image view unless only an image is present (with no text).
- An improved algorithm for Wall chaining should substantially reduce the potential to create tiny walls as a result of small mouse movements during a click workflow.
- Added the option to configure and customize the amount of canvas padding around the outside of the map background. This is done through the new "Padding Percentage" slider in the Scene Configuration menu. WARNING: changing the amount of padding in a Scene will alter the visual positions of objects. If you change the padding of an already existing Scene you will need to correct the position of objects afterwards. It is best to customize the padding of a new Scene before placing any other objects into it.
- Foundry VTT will now display a warning to the user if a change to Scene dimensions poses a risk of distorting the position of placeable objects.
- Added a context menu option to set a Scene from the sidebar as the active view without activating it.
- It is now disallowed to store actorData overrides on a prototype Token for an Actor. This could (for example) occur when setting a Token override back to an Actor as the new prototype using the "Assign Token" button. Permanent changes to Actor data now requires either a linked token or changing the base Actor itself.
- Foundry VTT will now display a warning to a user if they attempt to toggle the combat state for an Actor before a Combat exists.
- Moved the Templates Layer to the front when it is active so it is easier to delete measured templates which are underneath Tokens.
- Added the ability to drag and drop Entities on Rollable Tables to automatically populate a new Table Result entry with that dropped Entity.
- Improved the Package Installation application so it now renders immediately while it loads the list of available packages in the background asynchronously.
- Add a visual style prompt when tabbing to focus on an HTML button similar to the effect displayed on hover.
- The default button in dialogs will now be highlighted to make it more visible.

`/roll 2d6[Slashing Damage] + 1d8[Fire Damage]``/roll 4dc``/roll 10d10x2=10``/roll 4d4sf<3``/roll 4d4df<3``/roll 6d6x3=6``/roll (3d4)d6``3d4`
### Bug Fixes

- In some cases, database maintenance (compaction) tasks would be performed while a a significant amount of write activity was occurring, resulting in permission issues. These maintenance tasks now use a new approach to try and minimize the risk of this occurring.
- Corrected an issue where World Compendium Packs with the same name in different Worlds would incorrectly cross-share their content or prevent compendium packs being created in Worlds which should allow them.
- Modified the approach used when loading image assets for use in the canvas to try and correct for incorrect browser caching of image content with the wrong CORS headers that could prevent valid images from being used in the canvas. While this correction does work to eliminate false-positives with CORS, it may result in an increased number of failed requests in the case of actually invalid URLs.
- Syntax errors in JSON files should no longer cause Foundry to stall upon launch.
- Solved a number of cases where use of nested parenthetical rolling formulae would return unexpected results or throw errors.
- Addressed an issue where variable number of Die faces as a parenthetical expression would fail.
- Dice modifiers are now always case insensitive so 2d20kh and 2D20KH are evaluated equivalently.
- It is no longer possible to move Tokens outside the the canvas area in cases where there are no drawn Wall objects in the Scene.
- Resolved cases where syntax errors were thrown when non-GM users attempted to access ChatMessage.permission.
- The Combat.rollInitiative method was not properly testing for Token ownership of every combatant that it was asked to roll - this resulted in players being able to programmatically roll initiative for Tokens they did not control.
- Corrected an issue where setting a Token's represented Actor to none would disable the possibility to open the Token Configuration form.
- Fixed an issue where deleting a Token that was emitting light would not correctly remove the light emission from the canvas for players.
- Token vision for players will now immediately update when a wall is placed. Previously an incorrect logical condition would result in the new wall only being displayed once the Token vision refreshed for some other reason.
- Corrected an issue that would cause nested Tabs on the Actor sheet to disappear completely when the parent tab changed.
- The author of a Macro now correctly updates when that Macro is imported from a Compendium Pack.
- Addressed an issue that would cause the Package Installer to not be up to date by resetting the the package cache when launching/shutting down a world.
- The "Select File" button will no longer appear when the FilePicker is used as a Tile Browser.

`2d20kh``2D20KH``ChatMessage.permission``Combat.rollInitiative`
### Framework and API Changes

- [BREAKING] The validateForm helper has been moved from the server-side commons, and is now a static method of the FormApplication class. A backwards compatibility function will allow this to still be called correctly - but this backwards compatibility will be removed in 0.8.x.
- [BREAKING] Deprecated the Actor.importItemFromCollection method in favor of other handlers for drag and drop logic. This function can still be used with a deprecation warning, but will be fully removed in 0.8.x.
- [BREAKING] Deprecated and removed the the (V1) Tabs class and refactored the TabsV2 namespace to be named "Tabs" once again (with a backwards compatibility reference).
- [BREAKING] The Die, Roll, and DicePool classes all received a refactor and now share a common interface for what a component of a Rolled expression requires.
- Die types are now a Configuration object which maps character symbols for the die type to the defined class which handles it.
- Redefined Die modifiers as a CONFIG setting, which uses regex patterns and handler functions - modules or systems may now define custom modifiers for their own die rolls.
- Added the ability to register custom dice roll modifiers and handling functions to support a broader range of game systems.
- The Roll.alter method now supports more use cases, increasing its flexibility and removing a lot of limitations.
- Die or Roll can now track more granular metadata associated with each rolled result by populating their options object.
- It is possible to replace the randomization function used for Dice rolls throughout the FVTT framework by defining CONFIG.Dice.randomUniform as a custom (synchronous) function as.
- Changed the internal workflow used to evaluate inner Die and DicePools, it now allows for a roll to be simulated using a set of modified inner results.
- Added support for a built-in method to re-create a Die instance from a pre-defined array of results.
- Improved upon the Roll minimize and maximize helper methods to better assess the potential results which can occur from a formula.
- Added a hook to support dropping data onto an Item or Actor sheet which allows system and module developers to override the default behaviour and perform functions.
- The ActorSheet._onDrop function has been factored out to make it easy for downstream systems and modules to define custom drop behavior when an OwnedItem is dropped on the sheet.
- Added the dropCanvasData Hook event to handle data dropped onto the canvas, allowing systems and modules to provide custom behaviors for drag and drop workflow.
- The FolderConfig form application will now preserve the initial Folder data if the target object does not already exist.
- The default Cone angle and Ray width can now be defined as the CONFIG.MeasuredTemplate.defaults.angle setting, allowing modules and systems to more easily customize the default angle of cone effect.
- The Array.findSplice helper now allows for replacement of the found element by passing a second argument.
- Redesigned and refactored how rich text replacements are done, simplifying the required regex rules and matching logic for replacement of links. These replacements are now done within the HTML structure by targeting Text nodes directly to avoid incorrectly replacing HTML attributes like links or source locations.
- Provided a new factory method Dialog.prompt to wrap around a Dialog application constructor with a Promise which resolves to the key of the chosen button and rejects if the window is closed without choosing.
- Added Support for an onRender callback for the Dialog class which can allow a caller to set event listeners or do other manipulations like assigning focus to an input field.
- The Image color string validator has been deployed for all database schema that define and store colors.
- Provided a API (only, for now) method, Folder#exportToCompendium, to export the entire contents of a Folder into a Compendium pack, optionally updating any existing Compendium entries by name.
- Added an optional flag to the RollTable#roll method to limit and prevent a RollTable from rolling recursively when a table is drawn as result, allowing for cases where an inner Rollable Table is returned as the rolled result.
- Added compatibility to the {{localize i18nString arg1=val1 arg2=val2}} for the game.i18n.format function which allows to pass in additional string formatting values. If additional values are passed in the game.i18n.format function is used instead of game.i18n.localize.
- Provided an option in awsConfig to explicitly list the bucket names which can be accessed, instead of needing to discover them through the listBuckets API.
- Authentication failures will now be logged as additional metadata so that external services can lock accounts or ban IP addresses for too many failed attempts.
- Migrated several Entities in server database models to be more strongly typed in the interest of Typescript adoption.
- Signika Negative - a variety of Signika which may be better suited for certain color schemes - is now bundled with the Foundry VTT software. It is not enabled by default, but can be defined as a valid font face in module or system CSS files.
- Added JSDoc documentation to Math environment helper methods.
- The PlaceableObject#control method will now correctly release others objects from control if the PlaceableObject was already controlled.
- The RollTable#drawMany method now correctly adheres to an assigned rollMode, rather than ignoring the rollMode argument or the currently set rollMode.

`validateForm``Actor.importItemFromCollection``Roll.alter``options``CONFIG.Dice.randomUniform``ActorSheet._onDrop``dropCanvasData``FolderConfig``CONFIG.MeasuredTemplate.defaults.angle``Array.findSplice``Text``Dialog.prompt``onRender``Folder#exportToCompendium``RollTable#roll``{{localize i18nString arg1=val1 arg2=val2}}``game.i18n.format``game.i18n.localize``listBuckets``PlaceableObject#control``RollTable#drawMany`
### Documentation Improvements

- The 0.7.0 update includes many significant documentation improvements for the API documentation including more accurate typing information for a large number of parameters and more complete documentation for certain classes which were lacking.
- Please note - this improved documentation is NOT YET available on the Foundry website as the current API documentation refers to the latest release build. I will try to consider ways to make alpha channel API documentation available as well but I have not yet developed a solution for this.


### Known Issues

- There are no known issues at this time - but this is an alpha build - so it is known that there are issues (potentially serious ones). Proceed with caution.
- The DND5E System may experience some issues with dice rolls until an 0.7.0-specific update version is made available for it.

