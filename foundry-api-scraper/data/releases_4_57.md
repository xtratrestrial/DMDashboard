# Release 0.4.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.57

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.2


## Version 4 Development


##### December 10, 2019


## Beta 0.4.2 Update Notes

Greetings esteemed supporters. I'm very excited to share Foundry Virtual Tabletop - Beta 0.4.2 which is a major release that adds significant new features, functionalities, bug fixes, and API tools to the software.

The major focus of this update has been audio/video chat integration for group voice and video chat directly within FVTT. This work is the result of an exciting collaboration between myself and KaKaRoTo who prototyped much of the underlying technology through his excellent "Arcane Viewing" module. We partnered together to adapt that approach, add new features along the way, and integrate it seamlessly with the core Foundry Virtual Tabletop software.

A second exciting technological innovation in this Foundry VTT update is integration for AWS S3 integration as an available file browser location. This allows you to connect your Foundry Virtual Tabletop client directly to an S3 account to browse content stored in the cloud and even upload new content directly to your bucket.

Other exciting additions include the addition of a Token targeting system which allows you to designate specific Tokens as the targets for your abilities, more flexible Entity linking as part of the text editor and Journal system, improvements for Measured Template rotation, and a new Self Roll dice rolling option.

Overall, I'm proud of this comprehensive update which touches and improves upon a lot of systems, I sincerely hope you all enjoy it. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Audio/Video chat for voice and webcam support has been added directly within Foundry VTT. This work is the result of an exciting collaboration between myself and KaKaRoTo who prototyped much of the underlying technology. We partnered together to adapt the prototype, add new features, and integrate it seamlessly with the core Foundry Virtual Tabletop software. Please note that in order to enjoy the benefits of A/V integration in your game, you will need to satisfy some specific criteria for your hosting environment, most notably running the server using an SSL certificate. For more details on the technology behind A/V integration and how you can use it in your games, please read the documentation page here: http://foundryvtt.com/pages/features/av.html
- Added server-side support for AV signaling and Turn servers to empower the WebRTC networking approach as a built-in feature.
- Added a client-side WebRTC framework with a client implementation using the EasyRTC library and a suite of A/V related configuraton settings.
- Added an AV configuration menu, accessible from the Settings Sidebar which allows you to configure the A/V settings you wish to use within your World.
- Added a Token Targeting system which allows you to designate a Token or Tokens as your current Targets. The core system implementation of this feature does not necessarily do anything with this target, but it provides a framework for users to indicate a Token as a target which is a pivotal step towards allowing systems and modules to build exciting new automation features which automatically resolve attacks or abilities against the designated targets. Double right-clicking a token you do not own will mark it as a target. For tokens you do own, right clicking will activate the HUD and a toggle option in the HUD allows you to mark that Token as a target. Additionally, there is a new Target tool in the control palette which allows you to left-click to mark specific tokens or groups of tokens as your targets. Holding the SHIFT key while marking targets will add or remove targets from the currently marked set.
- Added integrated support for AWS S3 file storage which lets you use an AWS account and S3 buckets as a built-in browseable and uploadable storage location for media assets that are used within Foundry VTT. To enable this functionality, you must include an entry in your options.json config file which points towards another JSON file that contains your AWS credentials. If such a file is correctly specified and the AWS user has permission to access S3 buckets, those buckets will be available for use in the File Browser for players who are allowed to use it. For examples of how to configure AWS S3 access and how to restrict permission for that access to specific buckets, please see the documentation here: http://foundryvtt.com/pages/features/aws.html
- The default/recommended user data location for Linux users /home/$USER/.local/share/FoundryVTT was not available on certain Linux images where the .local directory did not exist. The software will now attempt fall-back default locations of /home/$USER/FoundryVTT and /local/FoundryVTT if prior options are unavailable. You can manually override this location to any destination of your choosing using command-line flags or environment variables. Please consult the documentation here: http://foundryvtt.com/pages/hosting.html#where-do-i-put-my-data
- Placed Measured Template objects can now be easily rotated by hovering over their control icon and using CTRL+Wheel (for slow turning) or SHIFT+Wheel (for fast turning) relative to their point of origin. This greatly increases the convenience of placing and positioning Cone and Ray type templates.
- A small change to the Wildcard Token algorithm allows it to generate more variety in placed tokens. The algorithm is no longer totally random, taking into consideration the last token placed to avoid drawing chains of duplicates. This should result in more variability in the appearance of groups of Tokens which used a wildcard selector.
- Added a command-line option to disable using UPnP to automatically request port forwarding. Passing --noupnp as a command-line flag, for example node main.js --world=myworld --noupnp will start the application while disabling UPnP support.
- Added significant improvements to dynamic Entity linking in Journal entries and other rich text fields. These improvements support several enhancements. Firstly, entities may now be linked directly by their id attribute instead of by searching for their name, for example @Actor[kjsfd923jisdf]. Secondly, every linked Entity may be explicitly renamed with curly-braces which follow the square-braces that identify the Entity, for example @Actor[kjsfd923jisdf]{Tim the Sorcerer}. Lastly, entities may now be linked directly from a compendium pack using the following syntax @Compendium[collection.id]{Custom Name} where packName and id are replaced with the collection and id values of the entity being linked.
- As a complementary feature to the new expanded Entity linking system, you may now drag+drop any Entity into an active rich text editor and it will automatically create a dynamic Entity link for you using the dropped entity's data.
- As a final valuable feature for new Entity dynamic linking, the links for Actor type entities can now be directly drag+dropped onto the game Canvas to instantly create a Token for the linked Actor, giving Game Masters a helpful way to plan ahead for combat or social encounters.
- Improved the aesthetics of the Token visual border by moving it beneath the token artwork which now clips over the border as the token is rotated around it.
- Added a hex-grid specific token border for tokens which have width and height both equal to 1 (in other words, a single hex). For Tokens which do not occupy a single hex, they still receive a square or rectangular border - at least for now, but for those of you using Hex maps this should improve the visual appeal of your hexagonal tokens significantly.
- Add string trimming to the package.json manifest files used to install game systems or modules to automatically remove leading or trailing spaces which were a common source of failure to install a package where a space cause the provided URL string to be incorrect.
- Clicking on an Entity in the sidebar whose sheet is already rendered, but minimized, will maximize the existing sheet instead of doing nothing.
- Added a new roll-mode option, the Self Roll which allows you to privately roll a dice formula where the result is only visible to the roller. Other users are notified in the chat log that dice were rolled, but they cannot see the result. Self rolls can be manually placed using the /selfroll or /sr prefixes, for example /sr 6d6.
- Added a feature to support unsnapped ruler measurement on otherwise gridded maps. Holding SHIFT while measuring with the Ruler will show distances which are calculated point-to-point, rather than as a function of the number of grid spaces traversed by the measured path.

`options.json``/home/$USER/.local/share/FoundryVTT``/home/$USER/FoundryVTT``/local/FoundryVTT``--noupnp``node main.js --world=myworld --noupnp``@Actor[kjsfd923jisdf]``@Actor[kjsfd923jisdf]{Tim the Sorcerer}``@Compendium[collection.id]{Custom Name}``/selfroll``/sr``/sr 6d6`
### Core Bug Fixes

- Identified and fixed a significant performance-inhibiting issue with light-emitting tokens and line-of-sight polygons. The intention of the sight system was that when a Token which emits light moves on the map, it's LOS and FOV polygons are updated and replaced in the rendering of the Sight Layer. What was happening instead was that each token movement was generating a new FOV polygon which was stacking on top of the previous ones for the purposes of collision and visibility tests. This could gradually degrade performance over the course of game sessions. Thanks to Sky from Discord for noticing a peculiar Token behavior which led to the identification of this issue.
- Solved a potentially serious issue which caused an active world to be deactivated when a user in Chrome navigated towards their game URL and was prompted with a hint of visiting the /setup page. Since Chrome pre-caches pages using GET requests, if you were a GameMaster user, simply typing the address in the navigation bar would submit a GET request to the setup page, resulting in your current world being deactivated. To resolve this problem, the deactivation of worlds has been changed to a POST request which can only be submitted from within the currently active world. A new helper function game.shutDown() has been added to assist with this workflow.
- Newly created Users were incorrectly receiving an initial role of NONE, instead of the intended starting roll of PLAYER. This has now been corrected.
- Fixed a bug which prevented activating the Token HUD in cases where the Token no longer had a valid Actor assigned.
- Resizing an Application window previously stored the unconstrained height and width after the resizing operation, but this ignored any minimum dimensions which were enforced by CSS. Now the constrained dimensions are stored instead.
- Changes to the User's display color did not previously immediately take effect for the Ruler display. This is now corrected and changes to the color choice will immediately change the ruler appearance.
- Journal Entries to which the User only has LIMITED permission are now restricted and not visible in the sidebar, as originally intended by the Journal system. These entries can still be seen as map pins where their icon, title, and image are visible - but their text cannot be read unless the player has OBSERVER or greater permissions.
- Changing the Actor Link state of a placed Token was not correctly updating that Token's Actor reference, resulting in the Token still updating when the original actor was changed.
- Resource bar values were not correctly displayed on the Token Configuration sheet unless the attribute target was first changed. The current and maximum values of the bar's attribute will now be showed on the Token config sheet, although they cannot be edited there.
- Changes to the title of Journal Entries now propagate to all Map Notes which referenced that Journal Entry. Previously only the first Note was updated while others remained on the old title.
- Text written in Journal Entries may now be selected with the mouse cursor so it can be copied and pasted elsewhere.
- Fixed a bug which caused the "Show Artwork" feature for an Actor to result in an infinite loop due to nested JSON structures.
- Solved a problem with undefined flavor messages for dice rolls in chat log export to text files.
- Corrected a problem with Wildcard Token paths resulting from the new User Data location. Wildcards should once again work as expected!
- Fixed an issue which caused Roll.toMessage to produce a duplicated dice roll sound effect in the case of blind rolls.
- Resolved a problem with starting the Electron application using the --world command line flag which failed to properly wait for world setup to complete before attempting to load the localhost URL in the app.
- Improved the permission check for writeability of the User Data parent directory to test for the user data directory directly if it already exists.
- Improved the system or module installation process to avoid displaying NaN% as the progress tracker for packages where there is not a total number of bytes returned in the zip file header.
- Fixed a version number comparison issue related to core migrations when moving across major versions.
- Attempting to install an invalid system or module incorrectly kept the Setup Configuration buttons all disabled while it waited for the installation to succeed (which it never did). Now those buttons will become re-enabled if an attempted installation is unsuccessful, allowing the user to try again with corrected input.
- Fixed a failure with the generation of Scene thumbnail paths due to file path changes related to the new User Data location. Scenes which failed to have a thumbnail generated will need to be re-saved to correctly produce the thumbnail. Follow this process: (1) open the Scene Configuration sheet, (2) remove the existing background image and Save, (3) restore the background image and save again. This second save will generate the correct thumbnail image. Future scenes will not encounter this problem.
- Solved a new (returning?) problem in the File Picker related to spaces in folder paths.
- Improved the behavior of drag+drop Token placement on hexagonal grids. Previously a bug would often result in Token placement at the vertex of hexes, rather than in the center of a hex. This should be eliminated and drag+drop token placement for hex grids should work intuitively.

`game.shutDown()``Roll.toMessage``--world`
### Core Software, APIs, and Module Development

- [BREAKING] A change to the Entity.prepareData function now allows for entity properties to be used during data preparation as the data object is first assigned to the instance, and then prepareData operates upon the assigned data instead of pre-processing the data before assignment. As a result, if you define custom prepareData calls in your game system their signatures will need to adjust.
- [POTENTIALLY BREAKING] The socket handlers for Owned Item updates did not previously re-prepare data for the owning Actor entity. This resulted in cases where the Actor's prepared data *should* change as a result of changes to it's items, but those changes did not occur automatically, forcing some module or system authors to manually re-prepare Actor data. This now does happen automatically as part of the aforementioned changes to prepareData. As a result, if you were manually re-preparing data for the Actor when an Owned Item was updated, you should no longer do that.
- [BREAKING] The text editor helper functions have been factored into a namespaced class, TextEditor which centralizes logic related to TinyMCE and other rich-text features. The previous methods of createEditor and enrichHTML are now deprecated in favor of TextEditor.create() and TextEditor.enrichHTML(). Support for the old function names will be removed in 0.5.x.
- Added support for generic rendering hooks for certain applications which provide fundamental abstract versions. Initial support exists for SidebarTab, ActorSheet, and ItemSheet classes. Registering a render hook, for example Hooks.on("renderActorSheet", (app, html, data) => {}); will now fire for every subclass of ActorSheet, allowing you to determine in your event handler when or how to respond without needing to learn the exact class names for which to listen.
- The concept of gridPrecision has been moved into the options object for each CanvasLayer.
- The set of file storages which are available for use in the file picker are now passed from the server as part of the initial data dump.
- The "type" attribute for input HTML tags is now allowed in cleaned HTML input, allowing input elements to be used in chat messages, among other places.
- The underlying interface for a valid FileStorage has been factored out to allow for multiple implementations of different file storages. The AWS support is one such implementation, as is local file storage on your host machine. This pattern could be extended in the future to allow for file storage support from other cloud data storage providers.
- Added a FormApplication.submit() method which wraps the form processing and submission process while allowing for additional external data to be added to the update. This enables for joint workflows which process unsaved changes in an open FormApplication instance while adding some additional specific changes from external triggers.
- The PIXI library has been updated to major version 5.2.0. You can read the PIXI release notes for this version update here: https://github.com/pixijs/pixi.js/releases/tag/v5.2.0
- The index mapping for a Compendium pack is now locally cached once getIndex() is called once for the pack. This helps to avoid unnecessary DB traffic and also makes Compendium-linked entity links work more effectively.
- Added an optional Entity.compendium flag which allows for easily tracking which Entity instances belong to a Compendium vs natively belonging to the active World.
- Added the User.permissions object to the User data model which allows for more fine-grained key-value pairs of permission abilities granted to a specific User. This is used now for A/V permissions to enable broadcasting, but will be used for more use cases in the future.

`Entity.prepareData``prepareData``TextEditor``createEditor``enrichHTML``TextEditor.create()``TextEditor.enrichHTML()``SidebarTab``ActorSheet``ItemSheet``Hooks.on("renderActorSheet", (app, html, data) => {});``ActorSheet``gridPrecision``FileStorage``FormApplication.submit()``getIndex()``Entity.compendium``User.permissions`
### Documentation Improvements

- Added overview page for the User entity: http://foundryvtt.com/pages/entities/user.html
- Expanded the detail provided on the API documentation for the User entity: http://foundryvtt.com/pages/api/entities/user.html#userapi
- Added an overview page for the Item entity type: http://foundryvtt.com/pages/entities/item.html
- Added instructions page for Audio/Video Communication features: http://foundryvtt.com/pages/features/av.html
- Added instructions page for AWS S3 Bucket configuration: http://foundryvtt.com/pages/features/aws.html


### Known Issues

- The push-to-talk button does not currently work as a push-to-mute button for "always" and "activation" broadcast modes as intended. This feature was planned and scoped but not quite completed in time for 0.4.2 release.
- Currently the push-to-talk button can only be a keyboard key, but adding support for a mouse button will come in the next update.

