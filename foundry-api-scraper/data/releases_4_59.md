# Release 0.4.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.59

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.4


## Version 4 Development


##### January 09, 2020


## Beta 0.4.4 Update Notes

Hey there everyone, I'm thrilled to present Foundry Virtual Tabletop - Beta 0.4.4 - the biggest Foundry VTT update ever released. An absolute mountain of work has gone into this update and it delivers an impressive list of really meaty features including the first version of the Macro System, expanded Scene options like default position and audio playlist, the ability to pull to Scene, and an enormous number of architectural and API improvements.


### Please Note

Due to the substantial core changes to various aspects of the API - this update is somewhat more disruptive than normal. Modules and Systems have been automatically disabled until they can are updated for compatibility with 0.4.4. Furthermore - I do expect there to be some latent bugs related to the Macro system and the overhauled embedded entity management which could cause some friction. Please do not update to 0.4.4 immediately if you are a bit risk averse, however please do update if you are willing to help test these changes and ensure they are working properly.

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Macro System. Added the first version of the Macro system to Foundry VTT. Macros allow for users to quickly activate chat or script based commands. Please note, this is just V1 of the Macro system which will continue to receive investment in future updates, so expect more Macro features in the future and be please be patient with limitations of the initial implementation. All players have permission to use chat-based macros, but players must be given special permission to use script based macros in addition to having the TRUSTED permission level.
- Macro Hotbar. Added a Hotbar UI element at the bottom of the screen which contains Macros as interactive buttons. The hotbar supports 5 pages of global macros which can be dragged and dropped to organize as you wish. Left clicking a Macro button triggers its effect. Right clicking the button displays a context menu of Macro options. The number keys 1 through 0 activate numbered hotbar slots and pressing the delete key while hovering over a Macro will remove it from the bar.
- The Electron application will no longer start automatically in fullscreen mode, but rather as a maximized window. This can be configured in the options.json configuration file.
- Overall aesthetic styling for Application windows has been refreshed with a more subtle parchment texture and color scheme.
- Scenes can now be configured to have a "Secret Name" which is shown to players in the navigation bar instead of the actual Scene name. This can help in cases where the Scene name could constitute a spoiler or is too lengthy.
- Added a new feature which allows a Gamemaster to pull a User to their currently viewed Scene. This option is available in the User context menu. Right click on a specific User and click "Pull to Scene" to cause that user to transition their canvas view to your currently viewed Scene.
- Scenes can now be assigned a Default View position which customizes the initial camera position when first viewing the Scene. Note that players who own a Token in the Scene will always start with the view centered on their Token location regardless of the default view position. To easily set the default view, open the Scene configuration sheet and zoom the canvas to your ideal position, and click the helper button on the sheet to capture the current camera position.
- Added support for a default Audio Playlist for each Scene. The Scene Playlist will automatically begin playing when the Scene is activated while the Playlist for the previously active Scene will stop (unless they are the same).
- Token images can now be mirrored horizontally as an additional checkbox option in the Token Configuration sheet.
- Added support to set the value for an attribute bar in the Token HUD to a negative number by explicitly prefixing the assigned value with an equal sign, for example =-10 would set the bar value to negative 10.
- Improved rendering performance for Drawing objects to make refresh operations after the initial graphic creation more efficient.
- Improve the fallback font used for Signika to allow a sans-serif font face that can better handle international character codes.
- Overhaul the functionality of the Combat Tracker to perform multi-update operations instead of serial database operations which greatly improve efficiency in cases where many Tokens are added, removed, or rolled simultaneously.
- Improve the automatic scroll position of the Combat Tracker when the turn order changes to keep the current combatant centered in the tracker view.
- Improve the permission handling for Measured Templates by adding a user field to the template schema and cross referencing the current user against the template creator to determine whether a user is able to make a change.
- Improve the permission handling for Drawing objects by cross-referencing the requesting user against the drawing author to better determine whether update or deletion operations can be allowed.
- Refactor the Folder entity to change the way that deletion workflow occurs, improving the reliability of cascading deletion or re-mapping contained entities or subfolders to a new parent.
- Improved server-side permission checking for Chat Message updates to allow users to make edits to their own created messages.
- The animation speed for Roll Table draws has been improved to perform better for very large tables with many entries. The total animation speed is capped at 2 seconds where previously rolling could take several seconds for very large tables.
- The visual display of the Alternate Token Image selection box for Tokens with a wildcard image is now more readable by trimming the common directory path and only showing the alternate filenames.
- Improved Entity sorting in the sidebar to automatically process any unsaved changes on an open sheet before moving the entity or assigning a new sort order.
- Automatically switch to the relevant Sidebar Tab when importing an Entity from a compendium pack.
- Provide a new configurable world-level option to choose between flat-topped and rounded cone template types as different cone template rules may be preferred by different groups or by different game systems.

`=-10`
### Core Bug Fixes

- Clicking the "Return to Setup" button on the Update Notes ui will now close the window as intended. I apologize to everyone who loved this bug and had hoped I would keep it forever.
- Fixed a serious bug where multi-token update operations were incorrectly applied in the active Scene, even if that scene was not the correct parent Entity requested in the operation.
- An issue which could cause a Folder to become self-referenced as its own parent was not correctly fixed in the last update allowing this issue to resurface. The server-side validator which prevents this has been re-written to (hopefully) solve this issue permanently.
- Avoid adding "undo" canvas operations to the history array which sometimes resulted in infinite undo recursion.
- Fixed an issue with the delete button on the Combat Tracker which caused it to remain disabled even if the confirmation dialog was declined.
- Corrected a problem with the Token HUD which prevented the bar control from being displayed in cases where the bar value was zero.
- Using the mergeObject utility function to unset an inner object property in cases where the parent object does not exist resulted in inserting an erroneous key into the original object. See https://gitlab.com/foundrynet/foundryvtt/issues/1907 for details.
- Fixed tooltip wording on the Join Game screen.
- The configured route prefix operation for the Express server was not working as expected due to a number of relative links which were incorrect in the presence of a route prefix. These links have been updated to always include the prefix (if one is set) and this server configuration option should now work as expected.
- A typo in the server-side socket registration prevented system-level dedicated socket channels from working properly. After the change, assigning "socket": true in your system manifest will correctly enable you to use the "system.{systemName}" messaging socket.
- Fixed a problem with initiative calculation for the Combat Tracker which was not correctly using the synthetic Token Actor and instead using the base Actor for Tokens which were unlinked.
- Correct a problem with Compendium directory scroll position not being preserved after a re-render operation.
- Resolved a problem for Journal Entries where the image for an entry could not be changed in cases where the existing image assignment pointed to an image file that did not exist or was unavailable.
- Solved a Journal Entry bug which could prevent entries which had Limited permissions assigned from opening for a Gamemaster user.
- Fixed a bug with Roll Tables which caused a table formula which matched no available results to cause the table to become un-rollable.
- Roll Table entities viewed from a Compendium pack will now correctly have the Import button in their sheet header. Additionally, the header Import button had issues for other entity types which has also been fixed.
- Several buttons on a Roll Table sheet were hoverable for users who do not have ownership permission over the table, creating the false impression that operations were possible. Specifically the balance, lock, and delete entry icons are no longer shown as interactable to non-owners.
- Non-Gamemaster owners of a Roll Table were unable to create new result entries within the table. This has been corrected and Users can now be given permission rights to create table results if they have ownership of the parent table.
- Users who had observer (but not owner) rights to a Roll Table were not able to roll the table. This has been changed so Users can be given permission to roll a table but not to edit it.
- Fixed two problems which occurred when changing the primary result type of a Roll Table result.
- Improved a visual bug in the error message when entering the incorrect access key on the join page.
- Improved the copy+paste workflow for Placeable Objects to maintain the visibility state when pasting. For example, hidden Tokens which are copied will be pasted as hidden.
- Fixed an edge case bug where importing Scene data from JSON while actively controlling a Token or other placeable caused an exception, causing the import to fail.
- Fixed a bug which prevented it from being possible to remove a tiling texture from a Measured Template or Drawing without needing to refresh the application for the change to become visible.
- Corrected a problem where Measured Templates could become unselectable if saving an invalid texture path.
- Fixed a problem which prevented Journal Entries from being dragged into text fields to become dynamic entity links.
- Corrected an issue for A/V server configuration in cases where the connecting user does not have any access key assigned.

`mergeObject``"socket": true``"system.{systemName}"`
### Core Software, APIs, and Module Development

- The required core compatibility version for modules and systems has been set to 0.4.4 due to the large number of breaking changes included in this update. All modules and systems must review the changes and update their package manifest files to support minimumCoreVersion of 0.4.4. I created an overview issue that provides some high-level explanation of the larger API changes in this update. If you are a module or system developer, please see the following issue: https://gitlab.com/foundrynet/foundryvtt/issues/1919
- Added a number of new API concepts related to the new Macro entity. See http://foundryvtt.com/api/Macro.html and http://foundryvtt.com/api/Hotbar.html for API details.
- Further standardize and simplify Socket Interface workflows to use the same preHook and postHook signatures for all CRUD events. See http://foundryvtt.com/api/SocketInterface.html for details.
- Add universal support for multi-target database operations for all Entity and Embedded Entity types. See https://gitlab.com/foundrynet/foundryvtt/issues/1820 and http://foundryvtt.com/api/Entity.html for more details.
- This update introduces a major refactor to the structure of Embedded Entities which are now indexed by a unique string `_id` instead of a numeric id. Furthermore, embedded entity management has been comprehensively redesigned to standardize with a set of methods on the Entity class. See http://foundryvtt.com/api/Entity.html for details.
- Comprehensively refactor the server side Document, Entity, EmbeddedEntity abstractions in the database document model to standardize and simplify the code structure.
- The Collection.index() method has been removed as it was not used by any core application.
- Added support for an optional strict parameter in the Collection.get operation which will raise an exception if the requested Entity ID does not exist.
- Implement a new filterObject method which allows for socket update operations to broadcast back only the subset of valid keys and values which were successfully applied during the update.
- A mapping of all synthetic Token Actors is now easily available under game.actors.tokens which provides a synthetic Actor instance for every Token id.
- Added helper methods to the User entity to assist with macro management. See the following issue for details: https://gitlab.com/foundrynet/foundryvtt/issues/1935
- Added a hook allowing systems and modules to customize Hotbar drop behavior. See https://gitlab.com/foundrynet/foundryvtt/issues/1941
- Simplified the distinction between draw() and refresh() operations for all Placeable Object subclasses. Draw operations are more comprehensive, completely re-constructing the canvas object while refresh operations are more lightweight, updating it's display in-place.
- Redesigned the filterObject() utility method to work using 2 objects. See https://gitlab.com/foundrynet/foundryvtt/issues/1918 for details.
- Improved the Dialog.confirm() wrapper to return a Promise which resolves once the prompted user makes a choice. See https://gitlab.com/foundrynet/foundryvtt/issues/1915 for details.
- Rename CONFIG.tokenTextStyle to CONFIG.canvasTextStyle to better reflect the more widespread usage of this text styling configuration among multiple types of placeable objects.
- Factor out some CRUD helper methods for synthetic Token Actor operations into a helper class to help simplify the Actor entity code.
- Refactor Playlist.howls to more generically be named Playlist.audio as a collection of audio helper objects.
- Redesign the functionality of flushing the chat log to utilize the new deleteMany database operation.
- Restore a server-side validation check on the User entity which requires user names to be unique within the World.
- The Collection.directory static attribute has been changed to an instance attribute.
- The object of IP addresses and invitation links for the game has been renamed both on the server side as well as client side from ips to addresses.
- Application developers are now able to customize the appearance and behavior of TinyMCE editors by overriding the _createEditor method to customize the options passed to TinyMCE initialization.
- Improved user.targets as a specialized Set subclass which handles dispatching a Hook event whenever Token targets are changed. See https://gitlab.com/foundrynet/foundryvtt/issues/1940 for details.

`0.4.4``minimumCoreVersion``_id``id``Collection.index()``strict``Collection.get``filterObject``game.actors.tokens``Actor``draw()``refresh()``filterObject()``Dialog.confirm()``CONFIG.tokenTextStyle``CONFIG.canvasTextStyle``Playlist.howls``Playlist.audio``ips``addresses``_createEditor``user.targets`
### Documentation Improvements

- The Foundry VTT developer API documentation has been redesigned to use a new JSDoc approach. The new documentation is available here (http://foundryvtt.com/api/) and contains far more coverage and improved clarity around how concepts are used and relate to each other.
- Corrected some out-of-date instructions on the Module and System Installation page: http://foundryvtt.com/pages/modules.html
- Added a section on minimum hardware requirements to the Frequently Asked Questions page: http://foundryvtt.com/pages/faq.html


### Known Issues

- A visual artifact exists when first placing a new token that may result in duplicated sprite images for the Token until the canvas is re-rendered.

