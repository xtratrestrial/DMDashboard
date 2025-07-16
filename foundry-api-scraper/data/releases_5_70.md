# Release 0.5.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.70

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.7


## Version 5 Testing


##### May 16, 2020


## Foundry Virtual Tabletop - Beta 0.5.7 Update Notes

Hi everyone I'm thrilled to release Foundry Virtual Tabletop Beta 0.5.7, a minor update which is a stable Beta release for all Patreon supporters and Foundry license owners. Most importantly, this release marks a huge milestone, this is the last Foundry VTT update for Patreon supporters. Every update after this one will require a purchased license key to obtain. For everyone who supported the Foundry project during Beta I would like to personally thank you, regardless of whether you supported for one month, or for 22. It's been an incredible journey to get to this point and I would not have made it here without the Foundry community. I can share a few basic data points which highlight what an incredible whirlwind journey it has been:

- 22 months
- 1,285 commits (1.94 per day)
- 2,586 GitLab issues (3.33 per day)
- 3,822 unique Patreon supporters

I find these numbers pretty hard to believe, so I feel very fortunate to have made it this far with so many of you involved!


#### Overview of Changes

This stable update includes all of the changes from the 0.5.6 Update, if you are updating directly from 0.5.5 or earlier I advise you to read through those update notes first. The theme for this update revolves around bug fixes, adjustments, and stability improvements for the 0.5.6 changes.

I'm using a new routine of hosting a Developer Q&A on Twitch to review and showcase the new features each update. Thanks to everyone who joined me for the this installment, you can find the recorded broadcast on Twitch if you would like to watch and learn about the adjustments.


#### About this Update

Please read the following important reminder about this update.

Many of you have arrived recently to the Foundry community you will not yet be familiar with the version structure of software updates. This is an Beta channel build, meaning it introduces new features after there have been bug fixes and adjustments made to improve their experience. It is recommended for most users to update to this version unless it is immediately before a game session. As always, please take care to back up your critical user data before updating just in case.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab. If you wish to install this update, you must select the Beta (Stable) channel. If you are a Patreon supporter only or have not applied your purchased FVTT license, you must provide an Update Access Key which is available on Patreon.

If you have a purchased license key applied, you do not need to enter anything into the "Update Access Key" field.

After clicking Check for Update confirm that you are presented with the 0.5.7 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

The feedback cycle for these releases is very important. There are three good ways to provide feedback which are ordered according to my own preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for Beta 0.5.7 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Thank you all so very much for supporting my project and relying on Foundry Virtual Tabletop to bring us all together amidst health concerns and difficult times of social distancing. Please stay healthy, care for each other, and stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Add a client-side feature allowing for customization of the maximum framerate used for canvas rendering which can be dialed down for less powerful machines to provide a more stable experience.
- Dragging to the edge of the canvas in any drag workflow, both for initial drag creation as well as for drag modification of an object should automatically pan the canvas if the drag action approaches the edge of the viewport.
- Improve the styling for Folders to make it more clear which items belong to which subfolder.
- Allow HTML in RollTable text entries, but apply HTML sanitization on the server side to make sure it is clean.
- The Asset Grid Size field in the new file picker is a complicated concept that needs a hint to explain what it does.
- Restore the prior behavior of spawning a Token HUD directly from a non-controlled Token instead of requiring that that Token first be controlled.
- TAB token cycling will now proceed in a more regular order from top-left towards bottom right, and support tabbing backwards to a previous Token with SHIFT+TAB.
- Automatically switch to the Tiles Layer when dropping a tile onto a Scene.
- It is no longer possible to resize a text drawing to be smaller than the bounds of the text it contains.
- Improve the resolution of Map Note tooltip labels to have a more crisp font display.


### Bug Fixes

- Players are incorrectly able to drag their tokens through walls without collision being asserted due to new placeable object drag+drop overhaul.
- Token targeting via double right-click or single left-click does not work on a Token which cannot be controlled by the player.
- Filling Drawing or MeasuredTemplate objects with a tiling texture breaks under 0.5.6 as the texture is not successfully loaded.
- Dragging and dropping an Entity into an unlocked Compendium pack raises an exception and fails to create the Compendium entry.
- Ruler measurement abruptly ends when measuring over and clicking on a space occupied by another token. Furthermore, you should not be able to gain control over a Token when clicking on it during the middle of defining a Ruler measurement path.
- The CombatTracker will cycle outside of the allowed turn order if skipDefeated is disabled, advancing to turn numbers which do not exist.
- Keyboard movement for Tiles are once again be supported, this ability was inadvertently removed in the previous version.
- Fixed a bug with active mouse cursors and Ruler measurement not being correctly synchronized across clients.
- Switching Scenes after a HUD was active prevents the HUD from being rendered on the subsequently viewed Scene.
- Hyperlink opening support for <a> tags which wrap around another element like an image or an inner span fail to correctly open the href of the link in a separate tab.
- Field-of-view computation fails for global AmbientSound sources due to changes in PlaceableObject vision storage structure.
- Core software update download and installation progress does not display a visual progress bar.
- The ALT key does not activate hover events on all placeable objects, only the most recently hovered one.
- FilePicker search filtering does not work for files specifically on the Thumbnail View.
- Normalized Rectangle used for Drawing creation is incorrectly constructed without an explicit "new".
- Resizing a rectangular drawing to negative width/height works the first time, but then resizing again cause it to get confused about it's intended dimensions.
- Resizing a Polygon does not resize the bounding frame in real time - only after the drag workflow has been committed.
- Dragging Drawing text which has not yet been committed shows "New Text" as the preview label instead of the current text value.
- Right clicking during a polygon Drawing creation canceled the entire drawing rather than simply removing the last created point.
- Right clicking to cancel a Wall segment after chaining from a previous segment incorrectly confirmed the second wall placement instead of canceling it.
- Ensure that template socket requests can only load HTML files from within the allowed directory paths.
- Players do not have correct permissions to configure or delete Measured Templates after the new mouse interaction overhaul for Placeable Objects. This has been remedied.
- World background image FilePicker is not working in WorldConfig because there is no Canvas present.
- Improve the clarity of the Install System and Install Module dialogs to refer to the correct manifest filenames for each package type.
- Small tiles (like hex tiles) had become much harder to select now due to a larger hitbox. This has been solved by enlarging the hitbox only for controlled tiles, making it easier to hover on adjacent non-controlled tiles.
- An error occurred when deleting the last Chat Message in the log due to a mis-identification of an empty text node as the next message sibling.
- Map Note pins become non-interactive when a Token is controlled even if Notes are toggled to remain visible on the Tokens layer.
- The new MouseInteractionManager would unnecessarily leave some parent containers as interactive even when mousemove operations within them were no longer required.
- Folder names which contain spaces do not correctly get marked as private in the File Picker. Folders which use encoded names should now be able to be marked as private.
- Dragging a Playlist from the sidebar does not properly populate the drag data transfer with the playlist ID.
- Players are unable to drag+drop macros from the macro directory onto their macro bar, even if they have permissions to that particular Macro. Additionally, you should not be able to begin a drag-drop workflow on an empty Macro hotbar slot.
- Subclasses of core PlaceableObject definitions fail with new mouse interaction handlers which expect a certain class name to be present.
- Roll Table results are displayed publicly regardless of the RollMode if "Display Roll to Chat" is unchecked on the RollTable configuration.


### Framework and API Changes

- Improve the server-side Document model to automatically trigger preSave and postSave operations for EmbeddedDocuments when the collection of those documents is changed directly at the Entity level.
- The PlaceableObject.rotate() API was inadvertently removed in the 0.5.6 update and has been restored.
- Assign event handlers in MouseInteractionManager explicit references so that when deactivating events we can deactivate only listeners registered ourselves without damaging those added by modules.
- Factor out Combat._getInitiativeRoll(combatant) as a sub-method which can be more easily overridden by system developers.
- Allow handling of rollMode as a ChatMessage.create option in _preprocessChatData instead of in both Roll and RollTable implementations.
- Re-rendering an application with popOut false will replace the DOM element, but it won't update the Application.element value which remains pointing at an orphaned HTML node.
- Improve the Application.setPosition method so that if application width or height changes and causes the application to move off-screen it is automatically repositioned to remain within the viewport.
- It is possible to activate a socket where game.world is defined, but game.users is not yet defined. Reorganized the World setup workflow to have a more clear delineation between world.active and world.ready.
- Permit the use of .handlebars as a valid HTML template file extension.

`PlaceableObject.rotate()``Combat._getInitiativeRoll(combatant)``Application.setPosition``.handlebars`
### Documentation Improvements

- Updated API documentation for 0.5.7 build.


### Known Issues

- None at this time.

