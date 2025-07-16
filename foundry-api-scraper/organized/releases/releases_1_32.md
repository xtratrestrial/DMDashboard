# Release 0.1.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/1.32

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.1.5


## Version 1 Development


##### February 07, 2019


## Alpha 0.1.5 Update Notes

Hey there everybody, I'm excited to share Foundry Virtual Tabletop Alpha version 0.1.5. This release adds two major new features: Measurement Templates and Auto-Updater which are both key improvements that I've been excited to implement. In addition to these two major features there are a large number of smaller enhancements, bug-fixes, and quality-of-life improvements.

The next release version will focus heavily on the new player experience, interface, and documentation in anticipation of the upcoming Beta 0.2.0 release. For more details on the beta testing process please read https://www.patreon.com/posts/24469236.

Thank you all for your continued help, enthusiasm, feedback, and support. Please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### Download Instructions

If you are a Patreon supporter at the $10 or greater level, please download the new build here: https://www.patreon.com/posts/24553068


### New Features

- The new Auto-Updater allows for you to download and install application updates directly from within Foundry Virtual Tabletop. During the testing phases, when a new update is made available, Patreon supporters will be given an Access Key which can be used to download the new version. The updater can be accessed by GM users through the Update Software button on the Settings menu. Once the update is downloaded and installed, the application will automatically restart using the new version. The design of the auto-updater will ensure that your data stored in the public folder is protected during the update process, but I regardless strongly recommend that all users maintain backups of their world data, especially when updating to a new software version.
- Implemented a major new feature: Measured Templates which allow for you to measure and place area of effect templates with support for rectangle, circle, cone, and ray (or beam, wall, etc..) template types. These templates are placed using a new set of Scene controls, available to GM users on the left side of the screen. These measured templates can be easily created using a click+drag workflow and once created can be configured by double clicking on their control icon. Under the control menu for templates you can customize their type, positioning, and appearance. Each template can have a configured border color, fill color, as well as a tiled texture which is overlayed on the template effect. Measured Templates are rendered on the VTT canvas above the map Background and Grid layers, but below Tokens. Placed templates are synchronized for and shown to players in real time.
- Entities (Actors, Scenes, Items, etc...) are now sorted alphabetically within their parent Folder.
- Compendium packs will now remember your search string, so if entries are changed or modified within the pack you will continue searching for the same target entry. This makes manual workflows to populate compendium packs with new content more convenient.
- Token UI and controls are now dynamically scaled to perform better on maps with either small (≤ 50px) or large grid sizes (≥ 150px).
- Token rotation may now be also controlled purely with a keyboard. Holding SHIFT while pressing a directional movement key will turn your token to "face" in the direction of your keypress. This adds additional flexibility to the control scheme for players who prefer keyboard shortcuts or do not have easy access to a mousewheel (like laptops).
- Each Token's position is saved before movement, so you may now undo a token move with the standard CTRL+Z keyboard command. This position memory is also synchronized across all users, so as a Gamemaster user you can undo a movement executed by a player if you need to reset their token to it's previous location.
- Added a new audio cue when it becomes your turn in combat. This rolling drum sound will alert players whenever it becomes the turn of a Token whose associated Actor they own. The sound effect will alert Gamemaster users whenever it becomes the turn of a Token that no player can control.
- You will now be prompted with a confirmation dialog when attempting to delete a Gamemaster permission user from the Player Management screen.

`public``SHIFT`
### Bug Fixes

- Ambient sounds set as type "global" failed to pass through walls as originally intended. Global sounds will now be heard by any token in their radius of effect regardless of any walls in between.
- Resolved a edge case bug which caused longer token names to become very large when rendered on Scenes with small grid sizes.
- Fixed an issue which prevented items from being dragged directly from an Actor sheet into an Item Compendium pack.
- In the previous version, server-side validations for Scene background images required image file extensions to be lower case (i.e. png, not PNG). Now image files with upper-case image extensions will work properly.
- Restored functionality on the Player Management page to create and delete new user entities. More details on this change are found in the software section below.
- Corrected a security risk allowed by chat message validation logic which was incorrectly allowing script injection through chat log messages.


### Core Software, APIs, and Module Development

- Improved the design of the Application abstract UI to allow the getData() method to return a Promise instead of a synchronous object only. The method may still return a static object for flexibility, but Promises are also supported. This is particularly valuable for UI elements where the content of the application must first be queried or fetched from some external source.
- The Token class has benefitted from a significant refactoring to standardize its implementation to use the new PlaceableObject pattern which also powers light sources, walls, ambient sounds, and the new measured template objects. Similarly, the TokensLayer has been migrated to inherit from the PlaceableLayer parent.
- Refactored the player management page as a standardized Application class with it's own listeners, socket handlers, and validations.
- Standardized the uppermost ControlsLayer of the canvas (which was previously named the CursorLayer). This layer now centralizes the display of control icons, cursors, or other UI/UX prompts which are rendered above all other map layers.

`getData()``Promise``Token``PlaceableObject``TokensLayer``PlaceableLayer``Application``ControlsLayer`
### D&D5e Game System Improvements

- Added a "Roll Mode" dropdown selector on Skill Checks, Ability Tests, Saving Throws, Weapon/Spell Attacks, and Tool Checks. This allows you to easily, at the time a roll is placed, configure the visibility level of the dice to quickly GM Roll or Blind Roll.
- Continued work on updating the core SRD Spells compendium. Still ongoing...

