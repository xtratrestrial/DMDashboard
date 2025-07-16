# Release 9.240 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.240

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.240


## Version 9 Stable


##### January 05, 2022


## Foundry Virtual Tabletop - Version 9 Stable (9.240) Release Notes


## Important Message from the Foundry VTT Developers

BEFORE UPDATING: If you read nothing else within these update notes, please read this section.

If you are updating from V8 for the first time, you should know that while this release is marked as Stable, it does not guarantee the game worlds you have prepared will be 100% ready for the update. While a majority of game systems are V9-ready, there are some that have not updated and will not function.


### Recommended Process for Updating

When updating to a new major version of Foundry Virtual Tabletop, please follow these specific steps:

- Assess whether now is the time to update for your game worlds. (This spreadsheet will help.)
- Perform a complete backup of your user data. (Follow this handy guide.)
- Make sure the backup you have created is stored somewhere safe. DO NOT store backup data in the user data folder. A seperate USB flashdrive is strongly recommended.
- To benefit from the new electron version and some specific changes to the software itself, we STRONGLY recommend doing an uninstallation of Foundry VTT and reinstalling compeletely instead of using the in-app updater for this version.
- Once you have updated the core software, before launching your game worlds, check for updates to your game systems and modules which will now be available.


### About Add-On Modules

Due to the changes implemented in Version 9, if you use any modules which change or alter:

- Canvas Lighting
- Token Vision
- Fog of War
- Card Support
- Keybindings

You will want to ensure those modules are disabled for your game worlds before attempting to play.


### Troubleshooting the V9 Update

If you experience any issues, these quick steps and resources should help you resolve them in the most efficient manner:


#### Caching

There was a known issue with caching which causes some errors and UI oddities which can be addressed quickly and immediately without support asssistance. If a simple CTRL+F5 does not resolve the issue:

- Open the DevTools (F12 or Ctrl+Shift+I)
- Click DevTools settings ( )
- Under the Network heading check "Disable cache (while Devtools is open)"
- While DevTools open, refresh your Foundry VTT using the F5 key.

`Network`
#### Disable Modules

If you are able to launch your world and have tried the DevTools cache fix, but are still experiencing issues, please disable all modules for your world and see if the issue is resolved. This will determine if the issue is module-related or originating from a core software bug.


#### Troubleshooting Specific Issues

- If neither of the above solutions solve your issue, you will find a new Support button on the settings tab of the sidebar. This will provide you with important data that can be conveniently copy-pasted to our community discord for assistance.
- You can access the debug and error logs for your server within the Logs folder of your user data directory. These will provide important troubleshooting information as well.
- You can access a (temporary) special discord channel set up for troubleshooting update issues here.


## Update Highlights

As an update on the Stable channel, V9 Stable (9.240) brings a few key fixes for bugs discovered after the stable release. These are changes are relatively non-controversial and as such there isn't much to highlight.

To draw attention to some of the more prominent bugs fixed by this update:

- We have resolved a number of issues related to the new keybindings system and extended ability to rebind macro hotbar buttons to different keys.
- We corrected a number of edge-case issues with vision and lighting which could result in rare cases where vision polygons were inaccurate.
- We took the opportunity to correct some issues with the import of actor data from compendium packs and JSON files, and doing so should now respect the stored data for folders, permissions, and prototype tokens.
- We resolved an issue which prevented saving of settings in the Audio/Video Chat Integration configuration window.
- We also corrected a number of UX/UI issues discovered with the handling of Cards.
- Lastly, we corrected a small but irritating bug which resulted in Ambient Sounds being incorrectly restrained by walls when they were set not to.

For a comprehensive list of everything we fixed, see below!


## New Features


### Architecture and Infrastructure

- A new warning message is now displayed if the Electron application is not a version which meets the current generational standard. (6361)
- Failed DocumentData instance construction resulting from use of a non-object (like a string or number) now logs an error and falls back to default values. This allows Document construction to continue if no other fatal validation errors occur. (6408)
- HTML <object> tags have been whitelisted for rich text HTML fields. (6378)

`DocumentData``Document`
### Interface and Applications

- The keybindings for Macro Hotbar slots are now able to be bound individually. (6397)
- Attempting to deal cards if no hands or piles are available to receive them now provides a clearer warning that suggests a path to resolve the issue. (6446)
- Attempting to click on a scene while the canvas is disabled now raises a notification reminding users to enable the canvas before trying to switch scenes. (6440)


## API Improvements


### Interface and Applications

- ChatMessage#_renderRollContent from ChatMessage#getData has been refactored and now allows for more targetted overrides of how Dice rolls are rendered and embedded within the context of ChatMessage documents. (6420)
- Keybindings can now contain . within the defined action data. (6402)

`ChatMessage#_renderRollContent``ChatMessage#getData``Dice``ChatMessage``.``action`
### Documents and Data

- Scene#createThumbnail now provides new customization options for format and quality in addition to the default image/png encoding. (6376)

`Scene#createThumbnail``format``quality``image/png`
## Documentation Improvements

- The return type of Cards#shuffle has been updated. (6367)
- UserData#password and UserData#passwordSalt have been suppressed and will no longer appear within the API Documentation. (6382)

`return``Cards#shuffle``UserData#password``UserData#passwordSalt`
## Localization Improvements

- A new hook event i18nInit has been added. This hook occurs once localization is initialized and ready to use, but before other parts of the core UI are rendered. (6419)
- Hints for keybindings should now be properly localized. (6366)
- The Draw Cards window text has been updated with text specific to drawing cards rather than the previous text lifted from the Deal dialog. (6445)

`i18nInit`
## Bug Fixes


### Architecture and Infrastructure

- Packages which have their details updated through the administration interface should once again provide that information to package update and installation workflows. (6360)
- Updating player permissions from the context menu of an Actor folder should once again function as expected. (6409)
- Updating world.json manifest files should no longer lead to race conditions. (6413)

`world.json`
### Documents and Data

- A number of issues related to actor data (such as folder, permissions, and token prototype data) being overwritten during import from compendium packs or JSON data have been resolved. (6395, 6424)


### The Game Canvas

- Panning the canvas while placing walls no longer results in a thrown error. (6248)
- Token scrolling status text now appears based on the token grid dimensions rather than the Token bounding box. (6377)
- Rendering order of the losCache container has been adjusted and should no longer be one frame behind. (6398)
- Limited angle vision should now correctly factor cases of overlapping wall intersections. (6414)
- Grid configuration should no longer fail if a measured template has already been placed on the scene being configured. (6425)
- Wall creation should no longer incorrectly chain using a starting point from previously placed node rather than the most recently completed one. (6450)
- Scenes with background offset should no longer cause issues with canvas centering, thumbnail generation, or weather particle positions. (6441)
- Combats linked to different scenes should now function as expected when No Canvas Mode has been enabled. (6458)
- No Canvas Mode should now correctly display which scene is active. (6457)

`losCache`
### Interface and Applications

- The position of setup menu buttons should no longer be pushed outside of the menu boundaries. (6358)
- Ambient Sounds should once again be Constrained by Walls only in cases where that option has been toggled on. (6363)
- Configuration sheets (such as User, Folder, and Drawing) should now correctly append their UUID to their html #id, and no longer prevent multiple sheets of the same type from being opened. (6379)
- downKeys has been expanded and should no longer cause complications with workflows when returning to the application after loss of application focus. (6392)
- Ctrl+A should once again select all walls and other expected canvas placeables. (6400)
- The Keybindings API should now correctly handle cases of keyUp if an element is focused. (6404)
- It is once again possible to save changes on the Audio/Video Configuration page. The push-to-talk key setting has been moved to the keybindings application. (6406)
- The state of dice roll tooltips (expanded or collapsed) within chat messages is now stored in a persistent manner, and will remain in the same visible state when chat messages are re-rendered. (6410)
- Rolling initiative for a combatant with no active scenes should now function as expected. (6432)
- Clicking the empty canvas now properly releases Controlled Walls when Left-Click to Release Objects is enabled. (6436)

`#id``downKeys``keyUp`
### Cards and Dice

- When reconstructing a serialized dice PoolTerm, the component Roll instances of that pool are now reconstructed from their original Roll subclass. (6388)
- The Roll.fromTerms factory method no longer constructs a roll of the default instance type, and instead uses the instance of whichever Roll subclass was called. (6418)
- rollMode now correctly defaults to CONST.DICE_ROLL_MODES.PUBLIC instead of the previously defined roll value. (6429)
- After moving a card from one deck to another, resetting the parent deck should now correctly recall the card to its origin. (6356)
- Card Decks should now correctly display their shuffled state following a refresh. (6437)

`PoolTerm``Roll``Roll``Roll.fromTerms``Roll``rollMode``CONST.DICE_ROLL_MODES.PUBLIC``roll`