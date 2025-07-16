# Release 13.341 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.341

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.341


## Version 13 Stable


##### April 27, 2025


## Foundry Virtual Tabletop - Version 13 - Stable Release Notes

It's finally here! We are very proud to announce the full, stable release of Foundry Virtual Tabletop Version 13. This release is the culmination of months of hard work, thorough testing, and a mountain of completed GitHub issues. While this particular update specifically targeted bug fixes and very minor changes from our previous V13 Testing 5 release, these notes also include a comprehensive list of changes for those users updating from Version 12 to Version 13.

We do feel obligated to remind users that while our development community is very dedicated and often swift to update for new versions of Foundry VTT, it does take time for them to prepare their systems and modules when we release a new version. Not all game systems and modules will be compatible with Version 13 on release- so do take the time to confirm your favourite systems are working before updating. If you're not certain whether your modules and game systems are ready for Version 13, remember that the Compatibility Preview tool is available through the update section of the setup menu so you can check how many of your current packages are  V13-ready!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Now that development has concluded for new features in V13, speaking on behalf of the team, we think it represents our greatest version of Foundry VTT yet, and we hope you'll all enjoy the changes it brings. Version 13 focused on two key pillars— a complete overhaul of user interface in order to update to the new Application V2 underlying framework, and, of course, the community voted feature: Token Drag Measurement.

This update performs a data migration when worlds are launched which cannot be reversed if you do not back up your data.

- (NEW OPTIONAL STEP) For Windows users, Version 13 offers a new 'portable' build which comes packaged with its own separate UserData folders. If you wish to try out V13 without any possible risk to your existing data, simply download the portable build and try it fresh. You will have to enter your license key, which can be found on the download page.
- Back up your User Data. A full snapshot backup is strongly recommended, but not required.
- Version 13 contains updates to dependent packages which require a full reinstallation, you must uninstall your existing version of Foundry VTT. Most notably, Version 13 now requires Node 20+ (for those launching the program using NodeJS).
- Download and install the Version 13 Stable Release (Build 341). You may not update to version 13 using the in-application updater. You must reinstall using a full download from the download page.
- After launching Foundry VTT in v13, take a moment to update your Game Systems and Add-on Modules. Some systems and modules will have a V13 compatible version available, some will not.
- Launch your World. Be aware that in order to protect your data, any existing worlds will have all modules disabled during the first launch in Version 13. When you click launch, a prompt will remind you that this is the last opportunity to save your data if you have not already performed a backup!
- Take some time to test your World and make sure everything is in working order before re-enabling any modules.
- Carefully re-enable a few Modules at a time, choosing ones you view as most essential. Take the time to test your World in-between, just to make sure nothing has drastically changed.
- If everything has gone well, congratulations! Enjoy all the new features Version 13 brings! In the event you need to revert to V12 you can restore the backup you saved during step 2.


## V13 Comprehensive Highlights

As the first stable release for V13, these notes showcase the biggest changes that we've introduced since V12, but as hard as we might try these highlights can only offer a brief glimpse of all that has changed. For a more thorough, in-depth, comprehensive understanding of the changes, we encourage our community to read through the patch notes for each release of the V13 development cycle:

- Version 13 Prototype 1
- Version 13 Prototype 2
- Version 13 API Development 1
- Version 13 API Development 2
- Version 13 Testing 1
- Version 13 Testing 2
- Version 13 Testing 3
- Version 13 Testing 4
- Version 13 Testing 5


### Built for Comfort (UX and UI)

V13 brings with it sweeping changes to the UX and UI of Foundry VTT.  We set out in V13 to update all of our existing Applications to use the new ApplicationV2 framework, and we have succeeded on that front!

In moving to AppV2, we also set ourselves the goal of breathing some new life into the user interface through Theme V2. We wanted to achieve a more modern look and feel for our entire UI, but it was also important to us that we not make the new UI less approachable and intuitive than the UI that preceded it. Those of you who have any experience in UX and UI design know just how challenging it can be to renovate instead of construct new, but we think we've managed to hit the sweet spot here!

Foundry VTT's interface elements now automatically adapt to the settings from your operating system or browser— if you've configured your preference for a darker theme, Foundry VTT's UI will be dark; if you prefer light mode, it will be light. This preference can be overridden with a world-level setting found in the game settings menu. Speaking of settings, the settings menu now also contains a number of controls for numerous UI elements, including options for rescaling, changing the degree of opacity in the automatic fade, disabling the fade entirely, and more!

More than just a mild retheming, the UI also got a new level of polish. Most UI elements are now sharper, a little more visually striking. The "Game Paused" display is now centralized and has a slightly more subtle, less spin-related animation. The canvas controls are now a little smaller but more visually distinct by way of additional spacing; the previous scene navigation bar is now a collapsed navigation menu instead. The macro hotbar is now more centralized, balanced on each side with additional controls. The sidebar is now more of a 'cabinet' style which occupies the complete vertical space, collapsed by default in order to draw the eye to the canvas. The chatlog maintains a cleaner display of its cards without a background, and foregoes the previous dropdown menu for Roll Mode selection for four handy icons instead. The chat entry field remains displayed regardless of what tab of the sidebar you are on, and a minimalist chat notifications tray will show the previous few messages for a short period of time without needing to open the chat log. Additionally we managed to squeeze some very clean feeling animations into the UI for that smooth modern feel without sacrificing performance.

Community developers can also rejoice as we've migrated entirely to using CSS Layers for Foundry VTT-controlled UI elements, which should make it easier for developers to more specifically target and reskin our UI while also making it easier to identify just how far those changes are going to go. This lets everyone (our team included) be a little less specific with their CSS selectors without having to worry about it obliterating whole sections of the UI. We're also in the process of deprecating jQuery, for those of you who might want to rejoice over such things.

A few last notes to bring up about user experience and interface: the canvas now supports cut and paste in addition to copy and paste, so you can save yourself a few delete operations when you want to move your party! Also, as a boon for those using a touchpad or certain touch interfaces, we've corrected some issues with multitouch interfaces and pinching should now zoom in and out the way you might expect instead of trying to rotate your token.


### Haul and Drag (Token Drag Measurement and Movement Changes)

Token Drag Measurement was the winner of the patreon-voted priotization poll for V13, and it has finally arrived! This feature comprehensively changes the way token movement works in Foundry VTT, allowing you to drag a token around the canvas and have the distance of that drag measured as you go. Token Drag Measurement features two styles of movement:

- Simple Movement - This type of movement occurs by simply clicking and dragging your token from one space to another on the grid, and will display the distance your token will move with a visible ruler until you drop the token, at which point the move will immediately execute, relocating the token to its new position.
- Complex Movement (Waypoints) - This type of movement occurs by beginning your drag operation with a CTRL + click (⌘ CMD + click for macOS) of the token, and while holding CTRL (⌘ CMD for macOS) allows you to left click multiple times to place additional waypoints. You can also increase or decrease elevation as part of the waypoint by using your mousewheel. Right-clicking removes existing waypoints, and clicking with CTRL (⌘ CMD for macOS) released will execute the movement operation, moving the token to each waypoint along the way. You can also press escape to erase all waypoints and cancel the move. In keeping with the standard operations for other canvas tools, holding the ALT key while performing this operation as a GM hides the movement ruler from your players.

The updates to incorporate a hybrid ruler measurement and drag movement system also brought a few additional UX changes we hope you'll enjoy. Tokens now automatically rotate to face their movement direction when being moved, for the topdown token users who prefer it (portrait style token users can lock their artwork rotation under the appearance tab of their tokens to disable this behavior). Tokens can now have their "type" of movement configured from the Token HUD, with a number of preconfigured Movement Action options already included, and users can now cycle through those movement types by pressing the TAB key when performing a complex (waypoint) move.


#### Moving Right Along

Additionally, since we now have more detailed measured movement thanks to Token Drag Measurement, we've added a new Scene Region Behavior. Modify Movement Cost provides a simple way for users to create regions that multiply the value used when calculating how much a grid space is considered to be when moving through it. This allows for systems that have rules about things like "difficult terrain" to easily multiply the cost of movement without having to resize the grid. Likewise, this region behavior can be configured to apply only to certain types of movement, allowing a token to swim at normal speed but walk at half speed, for example.


### Red Light Indicates Doors are Secured (Lights, Doors, and Turn Markers)

It wouldn't be an update to Foundry VTT without including new features for the canvas and this Version is no exception. This time around we've got a suite of small but significant changes for lighting, doors, and a couple of small perks for tokens.


#### Lights and Sounds

A lot of RPGs have a concept of light and darkness competing for visibility in game terms. Does that magical darkness snuff out a torch? is it blasted away by a magical light spell? Does the black hole outside the ship consume any light you shine into it? Previously, there was no real way of handling these competing light options, but light sources now have a field for defining "priority". Setting a priority on a light or darkness source determines its relative importance— higher priority lights will overwrite lower-priority darkness, unless both have the same set priority, in which case darkness sources will always win out.

Speaking of darkness sources, we've also expanded the radius of the visible effect for darkness sources just slightly in order to allow players to benefit from some of the cool darkness source animations and visual effects while also providing a visible way for them to understand that there is something causing that chunk of the map to prevent their ability to see. We've also taken the time to extend the types of lights that Tokens can carry to include darkness sources the way they carry light sources now, configurable via the token menu.

If that wasn't enough, we've also introduced a new type of light source animation. Sound reactive lights automatically synchronize with game sound, pulsing in time with the beat for those times when you want to set up an encounter in a nightclub or for those deep dark cavernous goblin raves.


#### That's Right, The Door's Opening.

One of the first features to move from the Ember project into the main Foundry VTT codebase is a set of new options that allow animating doors. Doors can now be configured to animate when opening or closing, using one of the included default textures from our good friends at Forgotten Adventures, or using your own custom texture if you are so inclined. With them comes a suite of options allowing you to configure the speed of animation, direction of opening, and how far they open when activated.  There are a variety of animation options available, including:

- Ascend - When opened, the door will appear to rise into a recess in the ceiling.
- Descend - When opened, the door will appear to lower into a recess in the floor.
- Slide - When opened, the door will appear to slide away to its left or right.
- Swing - When opened, the door will move with a traditional hinged swing from a side pivot point.
- Swivel - When opened, the door will rotate on a central pivot point.


#### The Mark Has Been Made (Combat Turn Markers)

One final canvas feature to highlight is the addition of Combat Turn Markers— the option to configure a simple marker indicating whose turn it is during combat, adding a little icon beneath their token. This is a feature that has been on our roadmap for a long time, but it was often managed by a variety of community-developed modules, so it was fairly low urgency. In V13, however, we've added core software support and we hope that community developers will expand on the feature and leverage our API to add their own custom animations and symbols in their modules. This feature allows a GM to switch which texture (both image and video assets are supported) will be used beneath a token to indicate their turn, and they may also configure from amongst a short list of animation styles to make those images a little more eye-catching.


### Papa Got a Brand New...Build

One final significant change worth highlighting might seem slightly less glamourous, but is no less important. Beginning in the testing cycle of V13 we began packaging and releasing a few new types of software build to offer more support for specific users. The Linux/NodeJS build is no more. Instead, we offer a separate NodeJS build and a separate Linux electron build, to allow those users who don't have interest in running the electron build of the software to run a simple headless copy through Node directly. The Linux electron build also received a small upgrade to offer support for ARM64 architecture natively for those users who want to run the electron client on ARM64 systems. While these changes are smaller, there's one slightly more significant change that benefits a wider array of users:


#### Windows Portable Build

For quite some time it has been possible for users of our macOS and Linux builds to set up portable configurations of Foundry VTT by placing the software on a USB drive and configuring the userdata folder to one that resides on the same drive. Now we have brought that possibility to Windows users.

The Windows Portable build comes as a single zip file which, when unzipped, contains an App folder that holds the Foundry VTT software. When the application is first run, it automatically creates three new folders in its parent directory- Config, Data, and Logs, and it is configured to use those folders by default, making it convenient to unzip onto a USB drive in a single FoundryVTT folder that will house it.

The Portable build operates the same as any other Foundry VTT instance, but spares the need for Windows users to follow standard installation procedures, allowing you to take Foundry VTT with you on a convenient portable drive and use it from any computer, without needing to wonder whether you left your data behind. Additionally, this is particularly beneficial for Windows users who would like to try out a new version of Foundry VTT without risking any changes to their existing setups.

```javascript
E:\
    ├──FOUNDRYVTT-PORTABLE-13.341
            ├───App
            ├───Config
            ├───Data
            └───Logs
```

`E:\
    ├──FOUNDRYVTT-PORTABLE-13.341
            ├───App
            ├───Config
            ├───Data
            └───Logs`
## Breaking Changes

- To resolve an issue with Actor and Item sheets falling back to the AppV1 sheets, default actor and item sheet registrations have been removed. (12617)


## New Features


### Applications and User Interface

- Movement actions in Token Config and Token HUD are now arranged in accordance with their order property rather than alphabetically. (12593)
- Improved the contrast of the Roll initiative button in Combat Tracker when using the light theme. (12626)

`order`
### The Game Canvas

- xx PrototypeTokenOverrides can now be applied to Tokens already placed in a Scene. (12140)
- Reverted the client notification behavior for texture loading to its previous progress-tracking state. (12554)
- Provided some improvements to the New User Experience default scene, correcting some bugs with initial view position. In addition, game.nue.createDefaultScene is now a public API method. (12684)

`PrototypeTokenOverrides``game.nue.createDefaultScene`
### Localization and Accessibility

- "Blink (Teleport)" and "Displace (Teleport)" have been relabelled and are now "Teleport (Blink)" / "Teleport (Displace)". (12633)


## API Improvements


### Documents and Data

- Roll#render now contains a reference to the containing ChatMessage Document if the Roll is being rendered in the context of a ChatMessage. (12569)
- If a ChatMessage subclass defines both getHTML and renderHTML methods it will no longer trigger an unnecessary deprecation warning. (12582)
- The new CalendarData#add method provides a way for developers to add time components to an initial given time to determine a new resulting time without committing that change to the database. (12568)
- Mixin class definitions now extend an empty class instead of Object. (12650)

`Roll#render``ChatMessage``ChatMessage``ChatMessage``getHTML``renderHTML``CalendarData#add``Mixin``Object`
### The Game Canvas

- The result of BaseGrid#measurePath now includes Euclidean distance measurements as .euclidean. (12510)
- GridLayer#measureDistance now supplies a more informative deprecation warning. (12519)
- In the interest of parity with Documents, PlaceableObject.implementation and foundry.utils.getPlaceableObjectClass have been added as new helper methods. (12563)

`BaseGrid#measurePath``.euclidean``GridLayer#measureDistance``PlaceableObject.implementation``foundry.utils.getPlaceableObjectClass`
## Bug Fixes


### Architecture and Infrastructure

- The Windows Portable build now correctly persists application configuration settings. (12615)
- To resolve an issue which could sometimes cause package listings to fail to load on slower or unreliable connections, the timeout threshold for retrieving package listings has been increased.(12647)
- Corrected an issue which could cause the Host address to be incorrect when returning to setup with a proxy server in play. (12584)


### Documents and Data

- Corrected a Handlebars rendering issue that prevented the adding of new TableResults without first rendering in view mode. (12551)
- Fields inside TypedObjectFields can now localized automatically. (12591)
- ArrayField/TypedObjectField#_getField now verifies that the path matches the name of the element. (12622)
- The options parameter of JournalPageSheet#goToPage is now optional. (12635)
- If no scene is active and multiple scenes are created at once, the first scene that is created with active: true in the creation data is now activated provided that at least one of the entries is configured with active: true. (12642)
- Moving a Scene into a compendium pack now clears the "Show in Navigation" state for that scene as expected. (12643)
- The scale data for Tokens in TokenConfig now uses data from the source Document. (12665)
- Card.metadata.labelPlural is now uses the correct DOCUMENT.CardPlural "Cards" instead of an invalid i18n string. (12652)

`TableResult``TypedObjectField``ArrayField/TypedObjectField#_getField``element``options``JournalPageSheet#goToPage``active: true``active: true``Card.metadata.labelPlural``DOCUMENT.CardPlural`
### Applications and User Interface

- Saving the The JournalEntry sheet config now saves changes to the global DefaultSheet as expected. (12638)
- Corrected an issue that caused context menus to render below Applications in some cases. (10502)
- Corrected an issue that prevented linking to Journal Text Page Subheadings from separate journal pages. (12545)
- Improved tag contrast and visibility in the Module Management Application to improve user readability for version labels among other things.  (12549)
- Resolved an issue that caused newly rendered context menus to position the #context-menu at top left of the application window instead of their expected location. (12552)
- Corrected an issue which caused the drawing of blank tiles using the Place Tile tool to fail with error on non-square grid scenes.  (12555)
- Resolved an issue with the configuration window for Map Notes which would display "Note: Null" when configuring a newly created Map Note. (12570)
- Cancelling Map Note creation no longer results in empty created map notes that remain on the canvas. (12571)
- Corrected an alignment issue that could occur when collapsing the Table of Contents in a Journal  Application. (12577)
- AppV1 sheets no longer offers theme options intended to apply to ApplicationV2 instances. (12583)
- The Token HUD and Config no longer displays an option for Movement Action if the Token has no available defined movement actions. (12594)
- Fixed an issue that prevented the function of the Loop button on the Playlist sidebar tab. (12598)
- Checkboxes created via the radioBoxes helper now honor their checked state as expected. (12600)
- The confirmation of deletion dialog when pressing the Delete Key no longer displays if there are no objects selected on the canvas. (12601)
- Changing movement action type now places a label on the path of a Complex Move without placing an explicit waypoint in order to indicate the movement type has changed. (12604)
- Resolved an issue which caused the Elevation (delta) in the token ruler waypoint labels to not be displayed in certain cases. (12605)
- Resolved an issue which required an additional click to place a waypoint after pressing tab to cycle movement action. (12606)
- Toggling Sorting modes now apply on first click as expected. (12608)
- Diagonal keyboard movement no longer moves the token two grid spaces at once. (12609)
- Resolved an issue that resulted from checking DragStart permissions in the Setup view FilePicker. (12619)
- Clicking the name of a module in Module Configuration toggles the module as enabled once more. (12623)
- Compendiums now maintain scroll position during re-renders. (12636)
- The launch world button on the Setup screen now handles the display of a context menu on right-click rather than launching that world. (12640)
- Corrected a styling issue that resulted in window breakages when a Journal Page included a wide table. (12573)
- Resolved an issue that caused duplicate display of hint text for Custom Keybindings. (12657)
- Macro hotbar context menus no longer get clipped as a result of UI scaling. (12637)
- Double-clicking a token to open an Actor Sheet no longer triggers a deprecation warning. (12521)
- The Token HUD no longer locks to the first token selected in cases where multiple tokens are currently selected.  (12659)
- Resolved a regression with SceneControls button variables that resulted in toggle buttons failing to appear in their intended state.  (12660)
- ApplicationV2#submit now returns the value of the form submission handler (if any).  (12660)
- The selectOptions Handlebars helper now supports configuring Set as a type of its selected parameter. (12517)
- It is now possible to update CONFIG.ui.sidebar.TABS before the sidebar is rendered. (12541)
- Resolved an issue with content return paths in FontConfig which prevented the Font Configuration application from functioning as expected. (12547)
- Resolved an issue which caused duplicate entries to appear in the results of getHeaderControls when mutating the array of ApplicationV2 header control buttons of an ActorSheetV2. (12556)
- Corrected a bug which could cause this.element of a given ChatLog.#postOne() to return null. (12560)
- ModuleManagement now offers a deprecation path and backwards compatibility support for the now removed ModuleManagement.CONFIG_SETTING static property. (12587)
- Game#tooltip is now constructed after the init hook to resolve an issue which prevented subclassing. (12589)
- collectionSortingModes now provides a defined key for compendium browser. (12607)
- Sheets for Documents that have not yet been created (such as an unsaved macro) no longer show DocumentSheetConfig in their header controls. (12645)
- Corrected a styling bug which caused scene navigation icons to be nearly invisible when using the light theme. (12685)
- Pressing enter on the Token Configuration while an input field is focused no longer adds an unintended Detection Mode.(12682)
- Font Family selection for NoteConfig is now a select input again.(12675)

`DefaultSheet``radioBoxes``DragStart``FilePicker``Module Configuration``SceneControls``ApplicationV2#submit``selectOptions``Set``selected``CONFIG.ui.sidebar.TABS``FontConfig``getHeaderControls``ActorSheetV2``this.element``ChatLog.#postOne()``null``ModuleManagement``ModuleManagement.CONFIG_SETTING``Game#tooltip``init``collectionSortingModes``DocumentSheetConfig``NoteConfig`
### The Game Canvas

- Resolved an issue which could cause ActorDelta#restore to fail with an error when trying to use getSheetClassesForSubtype. (12565)
- Corrected an issue which caused the unintentional override of some Movement Type animation options. (12592)
- TokenApplicationMixin#_prepareIdentityTab no longer throws errors for PrototypeToken as a result of the canSelect function accessing token.actor.  (12603)
- ActorDelta changes made to synthetic actors now apply immediately rather than requiring a refresh. (12611)
- Canvas#fog is now initialized (re-initialized if necessary) after canvasInit, allowing CONFIG.Canvas.fogManager to be configured in init and in canvasInit for a specific scene. (12631)
- Moving a separate token on the canvas no longer causes an existing Token Configuration preview to vanish. (12634)
- Resolved an issue which caused certain darkness sources to have the wrong radius applied to the mesh of their visual effect.(12683)
- The Display Scrolling Text behavior now animates over the point where a token leaves the region when it is subscribed to the Token Animate Out event.(12680)

`ActorDelta#restore``getSheetClassesForSubtype``TokenApplicationMixin#_prepareIdentityTab``PrototypeToken``canSelect``token.actor``ActorDelta``Canvas#fog``canvasInit``CONFIG.Canvas.fogManager``init``canvasInit`
### Package Development

- The Preview Compatibility tool will now display even in cases where a release of the same generation cannot be installed via the internal software updater. (12566)
- Corrected an issue which caused the organization of checkboxes on ModuleManagement to become offset as a result of overflow. (12595)

`ModuleManagement`
### Localization and Accessibility

- Fixed a broken i18n localization label in the Create Folder dialog. (12548)
- Corrected capitalizaiton of CALENDAR.GREGORIAN localization keys. (12596)
- WORLD.GameSystem is now localized in the Support & Issues Application. (12625)

`WORLD.GameSystem`
## Documentation Improvements

- Corrected a typo in the deprecation warning for the FilePathField constructor. (12616)
- ProseMirrorInputConfig#height now provides documentation. (12624)

`FilePathField``ProseMirrorInputConfig#height`