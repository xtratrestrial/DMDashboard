# Release 0.5.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.69

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.6


## Version 5 Development


##### May 10, 2020


## Foundry Virtual Tabletop - Beta 0.5.6 Update Notes

Hi everyone I'm thrilled to release Foundry Virtual Tabletop Beta 0.5.6, a major update which is an "unstable" Alpha release for Council-tier Patreon supporters and Foundry license owners.


#### Overview of Changes

This update includes a ton of major new features including a major overhaul of the File Browser with new display modes, drag-and-drop Tile placement, Folder creation, and path visibility controls. This update also includes substantial updates to the Tiles system as well as other Placeable Objects through a major refactoring of the drag-and-drop interaction workflows which unify their UX. Lastly, there are a lot of important and valuable API improvements which will make it easier to work with certain core concepts in the Foundry environment.

I'm experimenting with a new routine of hosting a Developer Q&A on Twitch to review and showcase the new features each update. Thanks to everyone who joined me for the first installment, you can find the broadcast here if you'd like to see these changes in action. https://www.twitch.tv/videos/616481546


#### About this Update

Please read the following important reminder about this update.

Many of you have arrived recently to the Foundry community you will not yet be familiar with the version structure of software updates. This is an Alpha channel build, meaning it includes lots of new and exciting features, but also has a higher risk of instability as well as a high likelihood of module conflicts.

This update is intended to be safe for use in actual games, but as always back up your critical user data before updating in case, for any reason, you need to roll back. If you prefer to use a large number of modules, or a few modules which you view as critical to your experience - you should wait for the more stable Beta version 0.5.7.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab. If you wish to install this update, you must select the Alpha (Unstable) channel. If you are a Patreon supporter only or have not applied your purchased FVTT license, you must provide an Update Access Key which is available on Patreon.

If you have a purchased license key applied, you do not need to enter anything into the "Update Access Key" field.

After clicking Check for Update confirm that you are presented with the 0.5.6 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

The feedback cycle for these releases is very important. There are three good ways to provide feedback which are ordered according to my own preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for Beta 0.5.0 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category.  https://foundryvtt.com/contact-us/

Thank you all so very much for supporting my project and relying on Foundry Virtual Tabletop to bring us all together amidst health concerns and difficult times of social distancing. Please stay healthy, care for each other, and stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Overhaul the File Browser specifically for the use case of image selection and Tile Browsing.
- Allow Tiles to be dragged and dropped directly onto the Scene from a directory view of images in the FilePicker.
- Allow toggling Tile visibility to affect all controlled tiles, based on the hidden state of the Tile to which the HUD is bound.
- Allow for Placeable Objects which use a HUD configuration interface to be locked or unlocked as a group. Visually depict that Tiles and Drawings are locked by changing their border color to red.
- Allow for Placeable Objects which use a HUD configuration interface to be sorted to front, or sorted to back as a group, preserving their relative ordering within the controlled group.
- Support alternative FilePicker display modes for list view (current), thumbnail view, tiled images, and large image previews.
- Lazily load images in the FilePicker using an IntersectionObserver to only load images for previews which are within the visible frame.
- Lazy load avatar and background images in Sidebar Tabs and Compendium Packs to avoid many requests when the VTT is first loaded and instead load image assets just-in-time to be displayed to the user.
- Create a more faithful preview image for token drag+drop workflow preview images which is scaled and sized to the dimensions the token will appear once placed.
- Allow for the game-master to mark directory paths as private so that players are not able to see their existence or contents.
- Enable the creation of new Folders in the file system using the File Picker.
- Allow for wildcard key matching for S3 file sources and extend that support to work for wildcard Token images.
- Improve handling of browse requests for S3 buckets which contain more than 1000 keys under the provided prefix path.
- Only allow Tile right-click configuration if the Tile is unlocked. This means that locked tiles will not capture right-click events allowing the canvas to pan when right-clicking on a large locked tile. Automatically release control of a Tile when it becomes locked, allowing for right-click panning to immediately ignore that Tile.
- Ignore requests to delete PlaceableObjects via the DELETE key if that object is currently locked.
- Allow previewing or applying Tile changes in real-time with the Tile Config window.
- Fast rotation (SHIFT+Wheel) on hexagonal rows points to the vertex of hexes instead of the face.
- Float hovered Map Notes to the top of the layer so they are sorted above other placed pins - making them more readable in crowded areas.
- Limit folder visibility in the dropdown select of the Journal Entry form to just the Folders which a Player has visibility to.
- Improve the visual style of discarded dice rolls, using a background shading option instead of a strikethrough text to make it more clear that the die was not kept in cases where a strikethrough conflicts with the character of the die.
- Display a warning message if the user attempts to use the grid configuration tool without a Scene background image applied.
- Support the CMD+H keyboard shortcut on MacOS to hide the Electron application.
- Piecewise ruler measurement does not return the correct total distance in cases where adjacent movements do not have uniform cost.
- Reduce the required minimum screen resolution to 1024 by 700px to better support 768px displays which have a taskbar at the bottom without error messages.
- Set PIXI canvas resolution to window.devicePixelRatio to better support retina or other high pixel density devices.
- Improve the sizing of control icons for large grid sizes by adapting the control icon size dynamically.
- Allow opening an Actor Sheet by double left-click on an owned Combatant the Combat Tracker.
- Resource tracking in the Combat Tracker configuration now uses the same dropdown menu options that Token resource bars can choose from.
- Develop an automatic notification to prompt users when a new core software update is available on their preferred channel.
- Move version information about the core Foundry software and the active game system to a separate information section in the settings sidebar to not be confused with Settings.
- Conditionally suppress some options from the Scenes sidebar to activate or toggle navigation for a Scene which is currently active.
- Roll Table have been expanded to support support the possibility of tables where more than one result is drawn for a given roll.
- Improve the formatting of a Roll Table draw in chat to consolidate both the dice roll and the drawn results into a single chat card with all the relevant information from the draw.
- Support Chat Message context menu options to reveal a private message or roll to all players from whom it was initially hidden.
- Move the admin password outside of the options.json file so that it can be easily deleted without destroying other configured application options. Be aware if you previously had an admin password set, it will be automatically moved to this new file location the first time you start Foundry after update.
- Apply better WebRTC camera resolution constraints so that the A/V software works well with a broader range of camera resolutions.
- Add support for group drag-and-drop for Walls when clicking and dragging on one endpoint from a controlled group.
- The title of Actor or Item artwork displayed to players should be suppressed for players who do not have at least LIMITED permission to observe the entity.
- Token Configuration sheet should not be globally singleton, but rather singleton per Token or per Actor (in case of prototypes).
- Improve the choice of expansion direction for Context Menus to choose to expand up when there is insufficient space in the parent container to expand downward.
- Improve the usability of the /stream view for green-screen chat-box log isolation by removing box-shadow and fixing some socket workflow failures when the canvas is not present.
- Check for KeyboardEvent.isComposing to avoid taking actions while a user is still typing characters on an IME keyboard.


### Bug Fixes

- Changes to Scene configuration which trigger a full Canvas re-draw were incorrectly causing Fog of War exploration progress to become reset.
- There is a window during which the background of a Scene is visible before Fog of War has loaded which can allow players to see the entire map before it becomes obscured.
- Tinted light sources do not properly re-apply their restricted polygons when the Walls (or Doors) of the Scene are changed.
- A FormApplication subclass would get stuck as inoperable if the _updateObject operation raised an error during an _onSubmit event handler.
- When importing a Scene with preconfigured background dimensions, those dimensions should not be automatically reset to the native background image values.
- Fix an issue with private dice rolls which resulted in the original flavor text being incorrectly displayed to other users even if they did not have permission to view the roll itself.
- Rapidly rotating a Token with vision settings causes the application memory footprint to quickly increase until possibly crashing due to an overflow of memory utilization. I have taken steps to reduce needless work which has improved the situation, although I will be continuing to monitor application performance.
- An invalid administrator access key submission results in a broken screen due to a forbidden server-side request. This now returns to the admin key form with a much more informative error message.
- A small amount of rounding for hexagonal grids results in an accumulating amount of error in hex grid alignment for large maps with a pre-drawn hex grid. Fixing this result will (unfortunately) result in a small change for users with existing Scenes which use hexagonal grids. You may need to adjust the positions of your Tokens or Tiles (slightly) to account for the corrected grid orientation.
- Players with an allowed permission to configure tokens were still unable to configure either prototype or placed tokens of their owned Actors as intended.
- Dynamic links to compendium content cannot be opened by players, claiming a lack of permission, even if that compendium pack is set to visible.
- Tiles should maintain their current aspect ratio when created or resized instead of being coerced to be square.
- Token movement no longer works with numpad diagonals due to incorrect addition of movement directions to the tracked movement set. Numpad keyboard movement should occur regardless of whether NUM LOCK is engaged or not.
- Preloading a video scene texture causes it's audio channel to begin playing immediately, even if the Scene is not active.
- there are enough Scenes in the Navigation Bar that causes it to wrap to a 2nd line, the second row of Scenes will overlap the loading bar. Now, the loading bar will be pushed down below the bottom of the navigation.
- The toggleEffect() and toggleOverlay() functions in the Token API were producing redundant calls to draw token effects because these are now handled (properly) in the Token update callback function.
- Dynamic Entity links to Compendium content are now failing due to a change in the _id structure of the pack index.
- Form input using zoom keys was incorrectly prevented by not first verifying whether an input element had active focus.
- Hovering or clicking on a Combatant in the tracker was only working properly if the Scene was active, which was a legacy restriction that is no longer needed.
- JSON syntax errors in a System manifest could prevent Foundry VTT from loading at all if any existing World referenced that system.
- Permission Configuration checkboxes are misaligned on MacOS. Disclaimer, I believe this is fixed, but was not able to personally test. Please provide feedback if the issue is not resolved.
- A viewed scene should always show up in the navbar regardless of it's permission settings. Active scenes always show up, but a viewed scene may not if the player is pulled there by the GM.
- The compatible core version check for whether a game system may be selected for use in a new World is over-zealous. Systems which are not guaranteed to be compatible should still be able to be used for new Worlds.
- Sidebar Directory and Compendium search filtering are not correctly restored after a re-render operation.
- Attempting to launch Foundry with a configured user data path that is invalid will now display a prominent warning and fall-back to using the default operating system user data location instead of failing to launch entirely.
- Changing the color of a Folder does not immediately refresh the display of the relevant Sidebar Directory.
- New Scenes do not get added to the folder from which the Create Scene button was pressed.
- Improve the clarity of error message when when grid size attempt is below 50px.
- Ensure that URLs queried from S3 file storage are returned as encoded URLs.
- Removing a combatant which is earlier in the turn order than the current turn incorrectly causes the turn in the tracker to advance (i.e. by staying the same).
- Deleting a single chat message from the top of the Chat Log or flushing the full log could cause batched message loading to become broken and re-load messages which had already been displayed.
- The Combat Tracker setting to skip defeated combatants fails when moving to a new round where the first Combatant is defeated and also may cause problems if all Combatants are defeated.
- Updating a newly drawn Wall to contain a Door did not properly draw the door icon since the wall did not have a valid door activity state.
- Tile resizing can result in sizes which are inconsistent with the attempted visual position of the tile - aspect ratio is enforced by the wrong dimension is constrained.
- When using a System with the Version of 0, Module Management is unavailable.
- The Entity Permission Configuration form will wipe out assigned permissions for a Gamemaster user when it is submitted because those users are excluded from the configuration display.
- Changing a Token attribute bar back to "None" when it previously had a value causes an error which should be avoided.
- Overall application initialization can break if default sheet configuration encounters a faulty value.
- Ignore mouse scroll events where deltaY is zero because the device supports horizontal scrolling.
- Programmatically panning the canvas to x or y of zero will fail because it gets tested as a "falsey" value.
- Fix an issue with WebRTC ignoring a requested routePrefix when opening an A/V specific socket connection.
- A custom routePrefix configuration setting is not correctly added to the generated invitation links for the Foundry game.


### Framework and API Changes

- [BREAKING] Implement a reusable Collection concept extending Map but implementing Array prototype methods. Rename the current Collection to EntityCollection.
- [BREAKING] The Collection object was using a Map for it's internal game source data, which resulted in new Entity creations or deletions not being pushed properly to the base game.data Array.
- [BREAKING] Refactor Actor.items to a map for more efficient owned item ID lookup without recursion.
- [BREAKING] Redefine game.packs as a Collection instance, allowing for much more convenient access of named Compendium collections.
- [BREAKING] Implement a DragDrop workflow manager to extract and standardize the way that draggable and droppable behaviors function in any Application subclasses which require them.
- Refactor SidebarTab, Compendium, Hotbar, and other Applications to use the refactored DragDrop workflow manager.
- [BREAKING] Comprehensively refactor the drag-and-drop workflows on the PlaceablesLayer to use the new MouseInteractionManager and remove significant portions legacy code.
- Allow each language object in a manifest JSON file to specify a specific game system or module for which it should be loaded, allowing for consolidated translation modules to flexibly support multiple packages.
- Add a prominent usability warning if the user is using a version of Chromium that is earlier than 80, as some modern JavaScript features may not work properly.
- Include the Die class name in the css classes for each dice tooltip result so that specific or custom die classes can be easily targeted for styling rules by modules and systems.
- When a World cannot be auto-launched because it is out of date, display a more informative reason in the logged warning message.
- Migrate server-side file storages management to Typescript module.
- Passing an empty string _id to the creation workflow for an EmbeddedEntity will result in that empty _id being incorrectly saved to the database instead of replaced with a real _id value.
- Add the RollTable#toMessage instance method which converts a set of roll table results into a chat message.
- Allow RollTable#draw to be called without automatically creating message results in the Chat Log.
- [BREAKING] Change the RollTable.draw() method to only require a Roll instance, not necessarily both Roll and Result, since the result can be obtained internally from the total of the roll.
- Support a drawMany API for RollTables which allows for a variable number of results to be drawn and returned as a DicePool.
- [BREAKING] Deprecate the PlaceablesLayer.sortObjects() method which manually sorted the PlaceableObjects within the layer, in favor of using the new integrated PIXI sortableChildren container property.
- [BREAKING] The sortToFront() and sortToBack() methods on the PlaceableObject are removed in favor of using the newer PIXI v5 sortableChildren and zIndex properties.
- When using submitOnChange in a FormApplication, the handler should be a delegated listener on the form instead of attached to each input directly.
- Fix a loophole which allowed players to grant themselves (client-side only) Gamemaster privileges.
- Server side EmbeddedEntity update operations were failing to properly call the preSave event before saving the parent Entity.
- Prevent the socket connection from falling back to a XHR polling transport in order to ensure a consistent behavior and performance of the application.
- Add a shebang to the main.js file to allow it to function better with services like systemd which can detect it as a node application.
- Validate the filenames and path locations of package-defined compendium packs to ensure that they are only created in an authorized location.
- Check the requested file extension before returning HTML templates from the template socket.
- Improve the ImagePopout class to use a uuid to flexibly define the target that is being displayed instead of a custom entity object.
- Allow the getType helper method to recognize HTMLElements to avoid recursively merging them like other objects.
- Support a Token update option to suppress the animation of position changes on all clients.
- Improve Token.toggleEffect() and Token.toggleOverlay() to return a boolean for whether the provided effect texture was set (true) or unset (false).
- Apply a maximum vision or light emission distance to server-side Token validation since extremely large values of this field will cause unnecessary performance issues or crashes.
- Temporary Entity creation was being incorrectly logged on the server side as creations with an id of undefined.
- Server-side logging of Compendium entry creation and deletion uses an internal reference ID rather than a human-readable name.
- Folders in user data which have the same name as a reserved URL route result in an overflow of redirects when static files try and resolve the requested route.


### Documentation Improvements

- Updated API documentation for 0.5.6 build.


### Known Issues

- None at this time, although this is an unstable version so please expect some bugs. You can view the set of currently tracked and addressed bugs here: https://gitlab.com/foundrynet/foundryvtt/-/milestones/49

