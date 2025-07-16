# Release 0.5.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.67

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.4


## Version 5 Development


##### April 12, 2020


## Foundry Virtual Tabletop - Beta 0.5.4 Update Notes

Hi everyone I'm thrilled to release Foundry Virtual Tabletop Beta 0.5.4 which is a major update that is an even-numbered "unstable" release for Council-tier Patreon supporters. The changes in this update are quite broad and do a huge amount of work to get Foundry Virtual Tabletop ready for release which has been announced for Friday, May 22! If you haven't yet gotten a chance, please check out the Release Announcement Video which was posted last week.

This update includes a ton of major new features including: an expanded Application Update system, the addition of an integrated Systems and Modules Browser, improved Canvas Keyboard controls, more robust player management, a Drawing Text tool, and a large number of performance and stability improvements. This update sets a new record for the largest Foundry Virtual Tabletop update ever, clocking in with an enormous 111 closed issues on GitLab.

Thank you all so very much for supporting my project and relying on Foundry Virtual Tabletop to bring us all together amidst health concerns and difficult times of social distancing. Please stay healthy, care for each other, and stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Added a major new feature, the Systems and Modules Browser which allows you to easily discover and install with a single click many game systems or add-on modules from the setup menu. Click "Install System" to browse available systems or "Install Module" on the Modules tab to browse add-on Modules. Systems and Modules will appear in this list if they are featured on the Package Directory page of the official Foundry VTT website. Instructions for having your module or system featured on that page are available in Discord. Users may still install any System or Module directly using its JSON manifest URL even if it does not appear in the browser, and packages may still be manually installed by unzipping their contents into the appropriate folder of your user data.
- Allow the installation of Systems or Modules where the Foundry core version exceeds the stated compatibleCoreVersion of the package, but display a warning to the user that some features may not be supported. Previously such packages would be refused entirely, which was often unnecessarily strict.
- Implemented the internal updater strategy that will be used at software release. All software updates are classified into one of three channels: "Alpha (Unstable)" which reflects new features under development and may be relatively unstable, "Beta (Candidate)" which reflects sets of changes which are nearly ready for release but are not yet fully polished, and "Release (Stable)" which includes only changes which have been through earlier phases of testing and are viewed as stable. Select your desired update channel when requesting an update.
- Implemented an authenticated software update procedure where, when attempting a core software update, you will request access to the update from a centralized server which validates your software license and provides you with a limited time access token to download the update. You do not have to have a license yet to update the software - in the near term Patreon access codes will still be used.
- Improve (slightly) the smoothness of keyboard movement by adjusting the throttle timing and set
- Added C as a keyboard shortcut to toggle the character sheet of the currently targeted Token or primary Character.
- Provided a Game Master only method to kick an idle player from the game session, returning them to the login screen. Access this feature by right clicking a User in the bottom-left Players menu.
- Provided a Game Master only method to ban an unwelcome player from the World, revoking their user role and booting them to the login screen (where they will be denied access). Access this feature by right clicking a User in the bottom-left Players menu.
- Players with an assigned role of NONE are no longer able to log into the world.
- Improved the capabilities and permissions of the ASSISTANT role to more effectively be able to assist the primary Game Master by creating, editing, and deleting Entities within the World.
- Provide server administrator users with a safe method of deleting a World from within the application. In the Setup menu, you may delete a world after first completing a confirmation dialog which verifies your intent. Be cautious when using this feature - data from deleted worlds cannot be recovered (unless you have backed it up yourself).
- Added a method of panning and zooming the canvas using the keyboard. Holding CTRL (or CMD on MacOS) plus directional arrow keys will pan the canvas in the corresponding direction while CTRL/CMD plus Equals (=) will zoom in and CTRL/CMD plus Minus (-) will zoom out.
- Added a new Drawing Text tool which allows easily creating and placing text labels directly on a Scene. The Text tool is in the Drawing Tools control palette. While placing a text label, simply type and update the label in real time. Press ENTER to confirm your text, or ESCAPE to discard it.
- Text in Drawings will now rotate to remain aligned with the rotation of the drawing itself.
- Improve Drawing creation workflow by automatically assuming control over a created Drawing after it has been created.
- Added a rectangular select tool for the Walls Layer which allows you to easily select multiple walls within a rectangular area. Walls will be selected if their midpoint falls within the selection rectangle.
- Significantly reduced the amount of computation needed when modifying Walls on the Walls Layer. Previously each wall update was doing a lot of work to recompute all the vision settings for all light sources and Tokens on the scene - but this was largely wasteful and made the experience of editing walls on the map unnecessarily slow. Now those computations are deferred until the Walls Layer is deactivated which greatly improves the fluidity of wall creation.
- Optimize the number of fog exploration events which must occur before the pending exploration progress is committed to a rendered texture.
- Added a toggle control in the Walls Layer which will force exact snapping to grid intersections while it is toggled on. When "Force Snap to Grid" is enabled, wall endpoints will only be placed exactly at (square) grid intersections. With this mode toggled off, wall endpoints will continue snapping at sub-grid precision.
- Improved the user experience with the new Grid Configuration tool by better supporting manual numpad entry of values and automatically minimizing the main Scene Config sheet when the Grid Config is activated.
- Enlarged the displayed size of walls on the Walls Layer for large dimension grids (>100px) to be more prominently visible and easy to edit. This makes the experience of working with walls for high-resolution maps more consistent with what is the "intended" experience at 100px grid.
- Added support for the TinyMCE Link plugin in the rich text editor toolbar, making it easier to customize links to external URLs or content.
- In the Windows Electron application, added some Jump Menu (right click on the taskbar) links which conveniently open the User Data location or the Application Installation location in your windows explorer. This enhancement will only be available if you install a fresh copy of Foundry VTT using version 0.5.4 or later as Electron does not get updated when using the internal software update.
- Added a new option in the context menu of each Scene in the sidebar to regenerate its thumbnail image on demand if, for any reason, a Scene fails to have a thumbnail generated properly the first time.
- Added support for .m4v video files as an allowed and supported video format. Note that for m4v videos to work your web browser must natively support this file format.
- Implemented a brand new TextureLoader which fully replaces the built-in PIXI.Loader to load image and video assets and prepare them for use on the game canvas. The new custom loader demonstrates noticeable performance improvements over the PIXI loader, as well as better supporting a wider variety of media formats (like .m4v video and better .svg support). The new texture loader also removes the requirement that only one Scene can be loading at any given time - eliminating errors when trying to switch to a second Scene before the first finished loading.
- Added a loading bar just beneath the Scene navigation bar which displays the progress of asset loading when switching to a new Scene.
- Added a command-line flag when starting the server --noupdate which can disable the core software update functionality. This could be useful in hosted or managed environments where you do not wish to permit a software update without handling other related work.
- Improved the way that AWS credentials are loaded for integrating with S3 File Storage. Previously credentials had to be loaded from a JSON file, the path to which was specified in the options.json file. Now the awsConfig setting may be optionally set to true which will, instead of using a JSON configuration file, attempt to load AWS credentials from Environment Variables or user-level AWS configurations, or IAM roles.
- Improved the Macro configuration sheet by allowing it to be resizable to adjust the amount of space allowed for typing chat or script macros.
- Changed the behavior of dynamic entity links to Macro entities. These links will now execute the linked macro when clicked (if the clicking User has permission to do so) instead of opening the Macro sheet.
- Added an "Execute" button to the Macro Configuration sheet which allows for quickly executing a Macro while editing it.
- Add a new configurable User Permission which can allow players to create Journal Entries for themselves without needing to request that the Game Master create journal entries on their behalf. This can make it much easier for players to take notes during the session within the convenience of the Foundry application.
- Reworked the Module Management application to allow all Players to view the list of Modules which are currently active and enabled within the game world. Modules which are installed, but not activated, will not be shown in this list. I felt it was important for the set of modules which are active to be transparent and shared knowledge for all Users. I realize that some GameMasters would probably prefer to keep their list of modules a secret - but this was a carefully reasoned decision that I hope you will understand.
- Display a prominent error message regarding hardware acceleration and WebGL which does not disappear until the user clicks on it to acknowledge the message.
- Display a prominent error message which cautions the user if they are using a screen resolution which is smaller than the supported minimum of 1366px by 768px.
- Improved the behavior of user click detection in the Combat Tracker to make it easier to hover and click upon Combatants and have their tokens be highlighted (on hover) or controlled (on click).
- Users will now be clearly informed of their error when attempting to install a package (system or module) of the incorrect type.
- Improved the rendering performance of multi-token movements by ensuring that all sight updates are deferred until a single operation for the set of all updates.
- Implemented significant performance improvements for sight updates when opening or closing doors by reducing the amount of re-computation required in the Walls layer.
- When a new file is uploaded in the file picker, the UI will automatically select that asset as the active choice, reducing the need to find your uploaded file afterwards.
- Reduce the dimensions of the Setup and Configuration app slightly to get it closer to 680px height which will work better for players on the (minimum supported) resolution of 768px height.
- Changes to Entity permission levels will now immediately revoke (or enable) the editable state of an open sheet associated with that Entity.
- Added a large number of translation strings to the English localization dictionary.

`compatibleCoreVersion``C``--noupdate``true`
### Bug Fixes

- The Combat Tracker header would incorrectly state "No active encounter" if no Combatants had been yet added to the encounter, even though the encounter itself was active.
- Login could fail if attempted before all script resources and language translations were finished loading. To improve upon this the Join form is initially disabled with a spinner icon which becomes enabled for login once required scripts have finished loading for the client.
- Players who have entity creation permission are now able to import or drag+drop Entities of that type out of Compendium packs into teh World where previously they were prevented from doing this despite having permission to create new entities directly.
- Added explicit response headers from the Foundry VTT server to DENY attempts to cross-frame Foundry Virtual Tabletop within an external iframe.
- Using the createMany operation for Drawings fails to call the _adjustPoints method which needs to occur before data is sent to the server.
- Accessing the FilePicker on the World Config app requires admin access, but doesn't perceive access as being allowed if no admin access key were present. This will now work even if no access key is set.
- Dynamic entity link name overrides were no longer working, the intended syntax like @Actor[Big Bad Guy]{Innocent Civilian} will now correctly display the link as "Innocent Civilian" instead of the true Entity name.
- The orientation of the Scene darkness layer failed to take canvas image offsets into consideration. This has been reduced in importance as the Scene darkness layer has been expanded to also cover the buffer area surrounding the Scene background image, allowing room for offsets to be defined while still remaining under the area of darkness.
- Inline roll messages were not working properly with modifier terms which included greater-than or less-than signs. These should now be working as expected.
- A crash could occur if a background image sprite was created using a null texture where the texture source was null.
- A crash could occur if a Tile object specified an invalid image path. Such invalid tile images are now replaced with a generic hazard sign icon so that you can clearly see which tiles do not have image paths properly defined.
- Using a pattern fill for a Drawing without providing a valid pattern texture would fail rendering and break the Drawings Layer of the Scene. This has been resolved.
- Tokens with invalid image URLs caused the Token to show the mystery man icon as expected, but become non-interactable (not expected). This has been resolved.
- Fixed a bug which prevented non-GM players from configuring their own client settings because the entire settings configuration menu was incorrectly gated behind the modify settings permission. Now this menu is available to all players, but only settings which can be modified are visible for alteration.
- Token light source tinting suffered from a bounding rectangle which was incorrectly clipping the edges of the effect. This has been resolved.
- Shift+Click to add or remove walls from the currently controlled set had broken and was not working as expected. This is restored and you can now shift+click wall endpoints to add that wall to your control set.
- Using negative values for light source emission produced a result which did not match the radius of light emitted with positive values due to the extra half-token width padding applied for Token light sources.
- Editing the World configuration would accidentally result in the "Disable All Modules" override being incorrectly applied even if that checkbox was left unchecked.
- Improve the shorthand world description displayed on the Setup page to prevent it possibly contaminating and breaking other nearby HTML structure due to unclosed tags in its preview.
- Pressing the TAB key will now only cycle through controllable Tokens when the Tokens layer is active.
- Strictly enforce that Foundry VTT urls may not end with a trailing slash via a redirecting middleware. Any URL requests which initially have a trailing slash will be redirected to the non-slashed address.
- Toggle Navigation for a singleton active scene removes it as Active and de-populates the navigation bar. This should be prevented, you can no longer toggle off navigation for your active Scene.
- Roll Tables with an unreachable entry which falls outside the probability distribution of the roll formula could result in an infinite loop where the table tried but failed to draw a valid result.
- Improved the visual tooltip style of long macro names to not break and overflow the preferred tooltip width by allowing the tooltips the possibility to scale horizontally as needed.
- Fixed an issue with roll data attribute references not working properly for deferred inline rolls.
- Resolved an error which would occur when changing the type of a wall segment to contain a Door.
- Hidden Tokens could occasionally and briefly be displayed when re-rendering the Canvas. I have prevented this by starting every Token in an initially hidden state and only revealing that Token if conditions allow for it to be visible.
- Fixed an issue with the Setup Configuration application which failed to record the changed value of the UPnP preference.
- Improve the naming convention of newly created entities in the sidebar to apply localized strings instead of using the class name of the Entity.
- All FormApplication._updateObject methods should have been asynchronous and return Promises once their target objects were updated. This was not the case in a large number of cases. I went through and applied the correct functional standards.
- Initiative rolls on the Combat Tracker will attempt to respect the Roll Mode dropdown selection. Some exceptions may occur in cases where a token is explicitly hidden on the Combat Tracker, it's roll will always be Private.
- The FilePicker would not correctly assign it's active target and search path in some cases.
- The Combat Tracker would fail to render image previews for video tokens since their icons were not static. I added additional logic to create thumbnails for video tokens that can be used in cases where a static representation of the Token is required.
- Dragging the token of an unlinked Token would misleadingly reset the display of their attribute bars to full during the drag preview operation.
- Pressing the Enter key has been disabled or restricted while navigating the File Picker to prevent it from unexpectedly submitting the form or traversing the directory path backwards.
- Improve URI decoding in the displayed results of the File Picker to display the original names of files and directories even if they contain special characters.
- Interacting with a Door could, in some cases, cause Fog of War exploration to be lost. Some refactoring of the Sight Layer has improved the workflows being used here and eliminated this method of incorrectly losing exploration progress.

`@Actor[Big Bad Guy]{Innocent Civilian}``FormApplication._updateObject`
### Framework and API Changes

- [BREAKING] This version includes a major refactor of the Socket management system which handles the transaction of data to and from the server-side of the software. There are several significant changes associated with this redesign including breaking changes for multi-entity and multi-embedded entity operations, for the usage of Hooks related to Entities and Embedded Entities, and for callback function specifications in custom entity (like Actor) subclasses. Please see these notes on GitLab for more details.
- [BREAKING] The Collection class which defines the containing group for each Entity type has been refactored to subclass Map directly for more efficient and semantic APIs which reduce unnecessary Array iteration.
- [BREAKING] Redefined the WallsLayer.blockMovement and WallsLayer.blockVision Arrays to always include doors regardless of their current state, deferring door state checks until vision computation.
- Added the concept of a "permanent" notification which does not automatically disappear without being explicitly dismissed by the user. To make any notification type (info, warn, error) permanent, pass {permanent: true} as a key in a second options parameter.
- Improved the WallLayer.pasteObjects and PlaceablesLayer.pasteObjects methods to use a createMany operation instead of iterating individual creation operations.
- Optimized performance of localization file loading by allowing all translation files to be loaded asynchronously and in-parallel while simply awaiting the completion of all promises to apply the translations in the expected load order.
- Improve the rendering and closing logic of the FormApplication class to avoid unnecessary re-rendering attempts of forms which are being submitted and staged to automatically close after submission.
- Each CanvasLayer subclass is now drawn in it's own separate try block with layer-specific errors displayed as notifications and in the console log. Previously all layers were within the same block, so errors on one layer would break rendering of subsequent layers.
- Implemented the server side HTML parsing library parse5 which adds some improved sanitization and parsing abilities for server-side HTML cleaning. Particularly, this allows for the server-side HTML validation to detect and automatically close any unclosed HTML tags which could otherwise contaminate the structure of the outer document in which such defective HTML appeared.
- Refactored the storage schema of client-side Settings to use Map instances for the registered setting definitions game.settings.settings.
- Renamed the Documentation class to FrameViewer to generalize it's usage for any iframe target URL.
- When uploading a file using the Files.upload() method, expand the data returned in the server response to provide the resulting web-safe file path of the uploaded file.
- Significant portions of the server side code have been re-implemented in Typescript to harden their reliability, testability, and consistency. This is a relatively major paradigm change, but it's one that after exploring for several days felt was a good choice to make. The initial portions of the server side code which are re-implemented in Typescript are the entire Database layer, the server-side Socket management interface, the software auto-updater, and Compendium packs. This represents a considerable chunk (around 30%) of the server-side code. I will be working to eventually convert the entire server-side code to Typescript before the full software release. An additional positive byproduct of this process is that all the modules which were re-written in Typescript have been thoroughly audited and improved for consistency, structure, and reliability.
- As part of the Typescript changes, some aspects of the server-side build process have also changed including the approach to code obfuscation and minification to support the preservation of source-maps back to the original Typescript files.
- Implemented a new Collection.getName(entityName) method to get a single Entity by it's name attribute. If multiple entities have the same name, the first matched Entity will be returned.
- Some improvements to the WebRTC implementation to update to a new version of the EasyRTC client script and change the server to bind on all available interfaces.
- Allow for improved flexibility in localization and translation with a new i18n.format(stringId, data) method which allows for substituting a data object into a complex sentence structure.
- Support an option to register a button in the master settings configuration menu for a Module or System which spawns another application form for in-depth configuration. See these notes on GitLab for example usages and a visual explanation.
- Removed several instances of hard-coded Entity class references in favor of more dynamically referencing the assigned entityClass for that particular Entity type within the CONFIG object.
- Added support for the missing options.deleteAll flag for Embedded Entity delete operations. This is similar to, but not exactly equivalent to updating the parent with an empty Array since this approach will end up triggering callback functions and hooks for every deleted Embedded Entity.
- Refactored the getWallCollisionsForRay method, moving it to the WallsLayer class and adding several additional options which customize how collision testing is performed.
- Added the TextEditor.previewHTML(content, length) method which can generate an abbreviated text preview of some HTML content.

`Collection``Map``WallsLayer.blockMovement``WallsLayer.blockVision``{permanent: true}``options``WallLayer.pasteObjects``PlaceablesLayer.pasteObjects``try``parse5``game.settings.settings``Documentation``FrameViewer``Files.upload()``Collection.getName(entityName)``name``i18n.format(stringId, data)``entityClass``CONFIG``options.deleteAll``getWallCollisionsForRay``WallsLayer``TextEditor.previewHTML(content, length)`
### Documentation Improvements

- Updated API documentation for 0.5.4 build.


### Known Issues

- If there are enough Scenes displayed in the Navigation Bar that it wraps to a 2nd (or more) line, those subsequent rows of Scenes will overlap the position of the loading bar which displays load progress.
- The "Force Snap to Grid" toggle in the Walls Layer produces unpredictable effects on hexagonal grids where some alternative logic is required to improve this behavior.

