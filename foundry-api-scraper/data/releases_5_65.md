# Release 0.5.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.65

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.2


## Version 5 Development


##### March 25, 2020


## Foundry Virtual Tabletop - Beta 0.5.2 Update Notes

Hi everyone, I'm extremely happy to share the Beta 0.5.2 update which is one of the biggest update versions ever clocking in with 89 issues closed in the GitLab milestone ranging encompassing new features, bug fixes, and API improvements. This is an even-numbered "major" update so it focuses heavily on adding new functionality and API changes to the software for testing by Alpha tier Patreon supporters.

The most significant improvements in this update version include a brand new permission control system, support for inline dice rolls, a built-in grid configuration tool, the ability to bulk upload assets, expanded Token features like light emission color, and many minor features.

Thank you all so very much for supporting my project and relying on Foundry Virtual Tabletop to bring us all together amidst health concerns and difficult times of social distancing. Please stay healthy, care for each other, and stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Beta 0.5.2 includes a major new feature of a configurable role permission system which allows you to fine-tune and customize which User roles are allowed to take which actions. Each permission describes an action that can be taken, and the permission to perform that action can be enabled or disabled for each User role level independently. The initial set of actions which can be configured by this system include the following:
		
			Broadcast Audio - allows broadcasting audio when A/V is enabled
			Broadcast Video - allows broadcasting video when A/V is enabled
			Create Actor - allows creating new Actor entities in the world
			Create Drawing - allows creation of Drawings using the drawing tools
			Create Item - allows creation of Item entities within the world
			Create Token - allows dragging an owned Actor onto the Scene to create a new Token
			Browse Files - allows using the file picker to browse available files on the host machine
			Upload Files - allows using the file picker to upload new file content to the server. Requires Browse File permission.
			Script Macros - allows writing and using JavaScript macros.
			Private Messages - allows sending whispered messages to players which are not visible to the GM
			Configure Settings - allows configuring world settings and enabling/disabling active modules.
			Mouse Cursor - allows sharing mouse cursor position data.
			Configure Token - allows configuring display and vision settings for owned Tokens
			Interact with Doors - allows opening and closing of doors
		
		As a result of this centralized permission control system, several previous game settings which were configured individually have been removed since their functionality is no longer needed.
- Broadcast Audio - allows broadcasting audio when A/V is enabled
- Broadcast Video - allows broadcasting video when A/V is enabled
- Create Actor - allows creating new Actor entities in the world
- Create Drawing - allows creation of Drawings using the drawing tools
- Create Item - allows creation of Item entities within the world
- Create Token - allows dragging an owned Actor onto the Scene to create a new Token
- Browse Files - allows using the file picker to browse available files on the host machine
- Upload Files - allows using the file picker to upload new file content to the server. Requires Browse File permission.
- Script Macros - allows writing and using JavaScript macros.
- Private Messages - allows sending whispered messages to players which are not visible to the GM
- Configure Settings - allows configuring world settings and enabling/disabling active modules.
- Mouse Cursor - allows sharing mouse cursor position data.
- Configure Token - allows configuring display and vision settings for owned Tokens
- Interact with Doors - allows opening and closing of doors
- Assumptions around chat whisper visibility have been changed. Previously whispered messages were visible to GM users and there was a setting to allow this. Now whispered messages only go to the whispered targets and the new permission control setting governs whether users are allowed to privately whisper other players or not.
- A major new feature in Beta 0.5.2 is inline dice rolls which allow for you to embed dice roll formulas or rolled results directly within chat messages and other enriched HTML. There are two types of inline syntax - "inline rolls" where the message displays the result of a rolled formula, or "deferred rolls" where the message displays a button to execute a roll at a later point in time. Syntax for including inline dice rolls is shown in the following examples:
		
			I can roll [[6d6]] in-line and see the result directly in my message.
			Alternatively, I can include [[/roll 6d6]] as a button to roll the provided formula on-demand with a left-click.
		
		This represents "Version 1" for inline rolls, so please try it out and help share your thoughts about what additional features are needed in order for inline rolls to work well for your gaming table.
- I can roll [[6d6]] in-line and see the result directly in my message.
- Alternatively, I can include [[/roll 6d6]] as a button to roll the provided formula on-demand with a left-click.
- Placeable objects like Tokens, Tiles, and Drawings can now be dragged and dropped as a group. Previously groups of tokens could be moved together with the directional keyboard keys, but now mouse drag+drop will work for selected groups also. Note that if any Token in the selected group cannot perform a move due to wall collision that Token's movement will fail while other Tokens in the set may complete the requested move. In such cases an error notification will be displayed to the player denoting which Token(s) collided with an obstacle.
- The previous major update 0.5.0 added vastly improved light source tinting and intensity configuration. This update adds the same features for Tokens which emit light, you can now customize the color and intensity level of Token light source emission within the Token configuration menu.
- Ambient Light sources now feature a "darkness threshold" property which allows you to specify a Scene darkness level beyond which the light source will activate. You can use this feature in a number of creative ways, including immersive city Scenes where houses and street-lamps illuminate once the darkness surpasses some value.
- Media files can now be quickly imported or uploaded to a file storage location by dragging and dropping a file or group of files directly onto the File Picker. This allows for bulk uploading of media content to a remote location to simplify the process of importing a lot of audio, video, or image content for use in the application.
- Dynamic entity links (like @Actor[Atropos]) which do not reference valid entities are now displayed with a dotted red border and a broken link icon to clearly designate intended links which are not functioning properly and differentiate them from normal text.
- Improved the handling of Token artwork which is not square in aspect ratio. Previously using asymmetric Token artwork would result in the image being stretched to be symmetric. Now the artwork will preserve the original aspect ratio and be centered within the Token's specified frame.
- Added an option to vertically mirror Token artwork. Foundry VTT assumes that tokens are drawn facing "south". For tokens which are drawn with their intended default direction of facing as "north" flipping the artwork vertically will result in better alignment between token usage and appearance.
- Updated several core software dependencies, including updating Electron to the newest version 0.8.2 which includes support for Chromium 80.0.3987.158. IMPORTANT NOTE: updating Foundry Virtual Tabletop using the internal auto-update does not update your Electron version. If you need the new Electron version due to compatibility problems with the previous 0.7.x version, you need to reinstall Foundry Virtual Tabletop using the full installer instead of using the update key.
- Changed the default file storage scope of the File Picker to treat the user data location as the default view rather than the application public data folder.
- Added support to load the chat log in batches of 100 messages at a time to limit the amount of chat history which is displayed and rendered when loading the application. Scrolling upwards in the chat log will incrementally load and append additional batches of messages. This results in a significant performance improvement for worlds which retain lengthy chat log histories without flushing the log.
- Scene configuration now supports a helpful grid-configuration tool which makes it much easier to establish and align the grid dimensions for pre-existing maps which include drawn grids. To access the grid configuration tool, first open Scene Configuration and then click the small "Grid Alignment" icon to the right of the Grid Type selector. While in this mode you can change the grid type, the size of the map, and the alignment of the grid in real time until you find settings that fit well for your Scene.
- In Foundry VTT - measured templates highlight any grid space where the center-point of that space lies within the template polygon. In cases where the polygon originates exactly in the center of a space, for some orientations of shape this was resulting in the origin square not being included in the highlight result. This has been changed so that templates which originate in the center of a space will include that space in their highlighting. This may not be the correct mechanical decision for a subset of use cases or game systems, but it is a change which makes the highlighting rules mechanically consistent within the VTT framework.
- Improved the behavior of Scene preloading which previously would only preload the Scene background image, but will now preload all image and video assets related to the Scene including Token and Tile images.
- Expand the set of files which are queued for loading when initially viewing or preloading a Scene to include the set of SVG control icons which are used in the Scene.
- When placing Ambient Light sources, the area of effect that will be illuminated by the light source is now previewed in real time instead of simply showing a circle that is unaffected by placed walls.
- Added a safety check to prevent viewing a new Scene if resources for your currently viewed scene are still in the process of loading. Attempting to do so will display a warning message until the current Scene load is complete.
- Improved the user connection and disconnection workflow to more reliably update activity indicators including the players list, displayed active cursors, rulers, and Token targets.
- Journal Entries which exist within Compendium Packs can now be dragged and dropped onto a Scene directly to import the entry and create a Map Note in a single workflow, similar to the Token workflow.
- Added support for the <u> HTML tag as a convenient way to add underline formatting to a portion of text in chat messages or other HTML passages. Previously this tag was stripped by the HTML sanitization process.
- Support multi-line chat messages with line breaks created using SHIFT+ENTER automatically converted to <br/> tags and kept in the resulting HTML.
- When re-rendering a form application, the user's focused input field will be remembered and restored on the far side of the render operation, allowing you to more effectively tab between input fields while the form saves and re-renders in the background.

- Broadcast Audio - allows broadcasting audio when A/V is enabled
- Broadcast Video - allows broadcasting video when A/V is enabled
- Create Actor - allows creating new Actor entities in the world
- Create Drawing - allows creation of Drawings using the drawing tools
- Create Item - allows creation of Item entities within the world
- Create Token - allows dragging an owned Actor onto the Scene to create a new Token
- Browse Files - allows using the file picker to browse available files on the host machine
- Upload Files - allows using the file picker to upload new file content to the server. Requires Browse File permission.
- Script Macros - allows writing and using JavaScript macros.
- Private Messages - allows sending whispered messages to players which are not visible to the GM
- Configure Settings - allows configuring world settings and enabling/disabling active modules.
- Mouse Cursor - allows sharing mouse cursor position data.
- Configure Token - allows configuring display and vision settings for owned Tokens
- Interact with Doors - allows opening and closing of doors

- I can roll [[6d6]] in-line and see the result directly in my message.
- Alternatively, I can include [[/roll 6d6]] as a button to roll the provided formula on-demand with a left-click.

`@Actor[Atropos]``0.8.2``<u>``SHIFT+ENTER``<br/>`
### Bug Fixes

- Fixed an issue with the directional movement keys sometimes getting "stuck" and producing incorrect results. The logic for identifying which combination of movement keys is currently depressed is much improved and (to the best of my testing) will now produce reliable results.
- Some faulty logic resulted in Actor or Token names being incorrectly displayed as the alias for private rolls in the chat log. When rolling privately (or blindly) other players should see that a roll is occurring, but not the name of the creature or token which is placing the roll. This has been changed so private rolls only indicate the name of the User placing the roll, rather than the name of the Actor.
- Fixed a bug where Users which had OBSERVER permission to a certain Actor were not able to see vision changes for that Token in real-time.
- A logical error allowed for the inadvertent creation of recursive loops in the sidebar folder structure (yes, again!). I've changed the tree generation algorithm again to (hopefully) protect against this outcome and ensure that folders do not have cyclic parent relationships.
- Explicitly enclose the image file paths in Journal Entry featured images to better handle images with spaces, apostrophes, or quotes in their file name.
- The system attribute of compendium pack metadata was not respected to appropriately restrict which packs were included for which World. This has changed so that a module can incorporate packs designed for multiple different systems and restrict which compendium packs are visible in-game based on the World's used system.
- Fixed a bug where a User's active Ruler would be displayed even if the measuring User was viewing a different Scene. The display of rulers now correctly verifies the viewed Scene before displaying a measurement.
- Corrected a server side issue which produced an incorrect port range for custom WebRTC configurations which explicitly specified an end port range value.
- Fixed a bug whereby light sources failed to dispel the darkness layer when the Token Vision setting was disabled.
- Changes to the AWS Configuration file path in the Setup menu of the application were not correctly saved upon form submission. This is now corrected.
- Fixed a bug where package update versions were detected as unavailable if the original installed version was too old to be compatible with the current VTT version.
- It was possible to configure an "illegal" user data path that fell within the application installation directory from the application setup menu. This is now validated before making the change to reject any requested file paths which will be illegal.
- Fixed an issue where in some situations providing an invalid admin access key did not properly result in redirecting the user.
- In some cases where a Token did not have a valid Actor entity defined, the user was prevented from being able to access the Token configuration sheet.
- Ensure that displayed dice roll results which are non-integers are displayed rounded to 2 decimal places.
- Additional server-side permission checks will now prevent users from making updates to Tokens for which they do not have ownership of that Token's actor.
- Fixed a bug with the popped out Combat Tracker which prevented it from being correctly updated when a Combat Encounter was ended in the main sidebar.
- Fixed several crashes or errors which could occur when deleting the actively viewed Scene.
- Fixed an error which could occur from deleting an Actor whose character sheet was currently open.
- Corrected a problem which prevented saving the default drawing configuration - particularly the colors used for stroke and fill display. This default configuration can now be modified and saved as normal. The "Position" tab of the default drawing configuration has been removed to avoid confusion since position settings are not configured as defaults.
- Fix behavior of the Fog of War exploration Scene setting which, if disabled, should prevent tracking exploration progress and only show current Token vision.
- Fix a Token visibility issue which would show hidden tokens to players if the Token Vision scene configuration setting was false.
- Fix errors when trying to edit the description of an existing World.
- Prevent dragstart events for any element in the document unless specifically authorized by that element.
- Improve vertical resizing of the settings menu when switching tabs.
- Fix setting the Scene darkness level to zero which now applies immediately.
- Deleting a hovered placeable object now correctly removes references to that object from the parent layer's _hover attribute.
- Explicitly prevent form submission for HUD elements which, for some browsers, could be submitted when the enter key was pressed.
- Changing the active weather effect in a Scene should now apply immediately instead of requiring a page refresh.
- Toggling folder collapsed/expanded state in a sidebar tab will now resize the height of pop-out sidebar tabs.
- Dynamic entity links to Scenes should open the associated Journal Entry for that Scene if one exists, otherwise it will open the Scene configuration sheet.
- Assuming control of a Token when multiple Tokens are owned did not successfully restrict vision to just that Token.
- The package directories in the Setup application should now remember their vertical scroll positions when the app is re-rendered.
- Deleting a Token which emitted light but was not a valid Actor would fail to remove the light source and leave light emission visible in the Scene.
- Assigning the default world configuration back to null in the Setup application was not correctly applied. This setting can now be un-set to remove a World as the default.
- Fixed a breaking error where modules or systems which included a languages entry but not as an appropriately formatted Array could break loading the game world.
- Deleting a Token which was a target for one or more Users would leave that Token in the User's targets array instead of removing it. This no longer occurs.
- Fixed a bug where deleting a placeable object that was hovered would leave it referenced as the _hover object of the parent layer.
- Fix a bug where, in some circumstances, making changes to the Elevation field on the Token HUD could result in submitting the form as a GET request instead of that behavior being prevented by JavaScript.
- Addressed a problem where a failure to load the options.json configuration file would crash the Foundry VTT node.js process but fail to adequately terminate the Electron application that would remain running in the background.

`system``languages``_hover`
### Framework and API Changes

- [BREAKING] Finalized the deprecation process for sceneId as the first argument to canvas placeable CRUD methods.
- [BREAKING] Revised the behavior of the mergeObject helper to forward the same insertKeys and insertValues arguments to recursive inner-object merges.
- [BREAKING] The game.modules object has been refactored from an Array to a Map where the keys of the map are module IDs which allows for easier access to a module's configuration data without needing to iterate through the full modules Array. For example game.modules.get("about-time").
- Changed the naming convention for Scene thumbnail images to instead use the scene ID as using the original map image file name could collide for maps in different directory paths which use the same file name. Existing map thumbnails will be unchanged, but any newly created thumbnails will use the Scene ID as the resulting file name.
- Standardize the identification of a chat message actor using the ChatMessage.getSpeakerActor() method.
- Standardize the construction of dice roll data for an Actor with the Actor#getRollData() method.
- Refactor the FilePicker.upload method to use the simpler fetch API rather than XHR requests.
- When identifying packages (systems, modules, worlds) where the directory name does not match the name attribute in the package manifest, such packages will be automatically ignored with a warning message displayed in the server log where previously this would cause a fatal error.
- When worlds are created, the name attribute of the world is forcibly "slugified" to convert it to all lower-case ascii characters with hyphens to separate multiple terms. This feature enhancement uses the new String.slugify helper method which can be used by others for their own string ID or file path standardization needs.
- Provide specialized functions for performing multi-item update operations for synthetic Token actors. These actors previously had specialized methods to handle createOwnedItem, updateOwnedItem, and deleteOwnedItem operations, but trying to use the "many" versions of these operations would fail. You can now use createManyOwnedItem, updateManyOwnedItem, and deleteManyOwnedItem operations for synthetic Token Actors.
- Refactor the Actor.getWildcardImages function to use the modernized FilePicker.browse method instead of an explicit socket request.
- Imposed strict server-side validation that the width and height attributes for a Scene must be positive integers.
- The usage of Tabs has been comprehensively refactored to a TabsV2 class which improves in a number of key dimensions. Usage of tabs within an Application can now be configured as part of the defaultOptions object by providing a tab configuration array for any tabbed navigation containers that are present. Tab controllers are instantiated at the Application level, rather than at the render level, and stored in the app._tabs allowing for downstream modules to interrupt or modify tab behavior. Furthermore, Application instances now share an _onChangeTab function that is called whenever a tabbed navigation element is changed. This allows downstream classes to easily extend or override the tab switching behavior of the class.
- Improve the behavior and rendering of the /no page to better display the full fatal error message and its stack trace if necessary.
- Implemented improvements to the hasProperty and getProperty helper functions to return undefined if they encounter a non-object during their recursive search.

`sceneId``mergeObject``insertKeys``insertValues``game.modules``Array``Map``game.modules.get("about-time")``ChatMessage.getSpeakerActor()``Actor#getRollData()``FilePicker.upload``name``String.slugify``createOwnedItem``updateOwnedItem``deleteOwnedItem``createManyOwnedItem``updateManyOwnedItem``deleteManyOwnedItem``Actor.getWildcardImages``FilePicker.browse``Tabs``TabsV2``defaultOptions``app._tabs``_onChangeTab``hasProperty``getProperty``undefined`
### Documentation Improvements

- API documentation updated to reflect version 0.5.2 usage.
- Expansions of the Localization page to describe how localization can be applied in JavaScript or HTML: https://foundryvtt.com/article/localization/
- Improvements to the Compendium Packs knowledge base page: https://foundryvtt.com/article/compendium/


### Known Issues

- None at this time.

