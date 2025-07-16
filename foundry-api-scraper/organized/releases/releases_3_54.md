# Release 0.3.9 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.54

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.9


## Version 3 Development


##### October 21, 2019


## Beta 0.3.9 Update Notes

Hello Patreon Supporters and friends. I'm very excited to share Foundry VTT Beta 0.3.9 with you. A lot of work has gone into this update, with 74 issues closed, I'm really proud of the additions that 0.3.9 brings to the Foundry VTT environment. Moreover, the whole update was wrapped up in 2 weeks, so I'm very pleased with the timelines as well. There are a number of big features in this update, some of the key highlights include the addition of Rollable Tables as a new Entity type, an expansion of the lighting system to allow for Color Tinting of Ambient Lights, an comprehensive overhaul of organizational tools to allow for manual sorting of Folders and Entities, and a robust array of bugfixes and API improvements.

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- The initial V1 implementation of Rollable Tables has arrived! Rollable Tables allow you to define a set of results in a list format, each result has an associted weight and dice roll range. Rolling or drawing fromthe table randomly selects a result based on the table's formula and each result's range. To create a Rollable Table, see the new tab in the sidebar where the icon looks like an indexed list. There are lots of features of Rollable Tables - to cover them all I'll be releasing a Developer Video Update in the coming days, but some highlights include: customizing the weight placed on each outcome, drawing with or without replacement, associating each result entry with an existing Entity or Compendium pack entry, dynamically linking Rollable Tables in rich text, recursive table evaluation for nested layers of randomization, and more!
- Added support for the new RollTable entity as a valid Compendium type, so you may create Compendium packs of Rollable Tables to share wonderful tools for creating random loot, encounters, locations, and more with your players and other game-masters.
- Ambient Light sources may now be provided with an optional tint color. Light source tints are mostly transparent layers with an overlay blend mode which are drawn above the map, tokens, and tiles to cast everything under the lights FOV polygon with a tinted hue. Light source tints can be great for a warm campfire glow or an eerie green flame within a lost crypt. Try them out and let me know how you find them in your game. I will be extending this system to allow for Token emitted light to also be tinted in a future update.
- The /join screen which every player visits when first logging into the VTT has been redesigned! The new join screen offers a custom background, a World description, current players, and the next scheduled session time which can be customized in the configure world menu.
- Improved the styling aesthetics of sidebar directories to feature more clean lines and more clear delineation of which entity belongs to which subfolder.
- Dice rolls which a player does not have permission to see (like blind or whispered rolls) now register a chat message indicating that some dice *were* rolled, but suppressing the result. My thinking is that this change is a positive one for usability and transparency, in addition to more closely resembling the in-person experience, however, I do want to collect feedback on this to understand if any players are negatively impacted by this change for their own games.
- Added a new copy+paste workflow for the Walls layer which allows for groups of Wall objects to be copy+pasted in their current orientation to a new location in the Scene. This can be particularly helpful if setting up walls for many similarly shaped objects like trees or pillars.
- Entities and Folders are now able to be manually sorted through an integer sort key. To re-arrange folders or entities simply drag and drop them on each other. The new position of the Entity or Folder will be placed after the sibling that it is dropped on. You can also drag and rearrange the folder structure, changing parent folders to subfolders, moving subfolders to a new parent, and more. These organizational changes have been long awaited and I hope the community enjoys the new freedom this gives you to organize your content exactly how you wish.
- In addition to manually reordering Entities and Folders within each Sidebar Directory, you may now manually change the order of Scenes in the Scene Navigation menu by drag+drop.
- In addition to manually reordering Entites and Folders, API methods have been added to support manual reordering for Owned Items within a parent Actor. Support for this feature has been incorporated within the D&D5e sheet, but other game systems may need to adopt this API themselves for existing Actor sheets.
- When dragging and dropping to import an Entity from a Compendium pack, the created Entity will go directly into the target expanded Sidebar folder instead of always ending up in the root level of the sidebar directory.
- Removed the anvil watermark image from the World join screen if a custom background image is used.
- Added localization support for many applications including Player Configuration and the new Roll Table Configuration sheet.
- Improved upon the initial dimensions for Token artwork for Tokens with an asymmetric grid footprint (i.e. width != height).
- Improved rendering of all ContextMenu objects to scroll vertically from the origin container if the size of the context menu would cause its content to flow past the lower edge of the window.


### Core Bug Fixes

- Fixed a bug which could sometimes cause a Token health bar not to properly re-render when the underlying attribute data was changed for certain actor edge cases.
- Corrected a problem with version checking where the isNewerVersion(v1, v0) helper method was not correctly recognizing updates to a major or minor version as indicating a newer semantic version string.
- Fixed a problem with group Wall editing now that the updateMany method is used which caused trouble once the Walls Layer was refreshed after an update.
- Resolved a problem with repeated EULA license acknowledgement prompts due to an incorrect relative path for Electron application builds. After this update, you should only be prompted to accept the EULA once (initially) and then again only if the terms are changed.
- Fixed a bug with light sources not being correctly masked by their FOV polygons. This resulted from an incorrect Linux build which failed to include updates to the PIXI library as intended.
- Resolved an edge case issue that could cause the Combat Tracker reset all button not to function properly and re-render the tracker for connected clients.
- Corrected a regression which caused tokens with zero vision distance to instead be treated as if they do not have vision enabled. Now Tokens with zero vision receive only a minimal radius of dim vision to allow the player to see their own token but nothing else.
- Solved an issue with syntax errors in the Chat Log export workflow.
- Fixed a problem with the "Delete All" workflow for Folders (and their contained entities) which incorrectly left the contained entities displayed within the Sidebar Directory.
- Fixed an i18n problem with the Player Config window missing many labels.
- Prevented an exception which was being raised when clicking on tab icons of a collapsed Sidebar.
- The Scene Navigation bar was incorrectly blocking mouse pointer events when collapsed. This no longer occurs.
- Added some additional onUpdate steps which must occur if the current User's permission level changes during a game session.
- Correct a translation gap where some strings for the Combat Tracker were not localized correctly.
- Replaced incorrect usage of the ruler icon for multiple sections of the Scene configuration sheet.
- Fixed an issue which caused limited light angle tokens to not work as expected if their visible angle was greater than 180 degrees.
- Applied a better _onUpdate behavior for tokens which will conceal any active Token HUD if the Token is moved to some new position by a different user.
- Capture any errors which may occur during chat log rendering to avoid having a single defective chat message break rendering for the remainder of the log.
- Capture any errors which may occur during the rendering of a Sidebar Tab to avoid having any single defective tab break rendering for the remainder of the Sidebar.
- Capture any errors which may occur during the execution of a user-registered Hook function to prevent potentially erroneous module code from breaking the main FVTT execution.
- Corrected a problem which, when launching the application with a specific --world flag - you would not have an opportunity to accept the EULA if a license agreement is needed. Now, if the EULA needs to be signed, the --world flag will not function and you must start the application normally.
- Resolved another way that World-level compendium packs could get created incorrectly with an absolute path instead of a relative one. I realize this issue keeps popping up, so I appreciate your patience with the several failed attempts to fix this problem. I am hopeful that this round of correction will knock it out for good, but if not I will keep working to solve it.

`isNewerVersion(v1, v0)``--world``--world`
### Core Software, APIs, and Module Development

- I have comprehensively (I think) standardized the signature of SocketInterface trigger and triggerMany operations to adopt the same signature in all cases. See https://gitlab.com/foundrynet/foundryvtt/issues/1544 for an example. There were many small changes as part of this improvement including an improved SocketInterface.trigger API, better logging for pre-Hook prevention, and server-side refactoring to a more standardized handling workflow.
- The global configuration variables which was previously in the constants file have been refactored to all exist as children of the CONST global object. For temporary backwards-compatibility global references to these variables have been preserved, but this support will be removed before launch. If you were previously using a global configuration parameter (note, I am not talking about the CONFIG object) you should migrate to reference it through the CONST namespace instead.
- Introduce a new updateManyOwnedItem helper method for the Actor class to simultaneously update many Items which belong to a parent Actor entity.
- Improved the behavior of the `diffObject` helper. Previously if one object in a comparison was empty while the other was not, it would report that the new object was not different from the previous. For example diffObject({foo: {bar: 1}}, {foo: {}}); // {}. Now this comparison will report that the new object is empty.
- Improved the behavior of the `flattenObject` helper. Previously if the expanded object contains a key which, itself, contains an empty object, the inner empty object would be lost in the flattening process. Now contained objects which are empty are preserved as the final keys of a flattened object. For example flattenObject({foo: {bar: {}}}) // {"foo.bar": {}}
- Replaced usages of Number.prototype.between(min, max) with a new static helper Number.between(num, min, max) which avoids unecessary conversion of primitive number type data and improves performance both in terms of execution time and memory utilization. This small improvement can have significant benefits for lighting and vision rendering time. Thanks to tposney for sharing an insight which was helpful in identifying the need for this change.
- The source attribute of the Collection class has been changed to be private, effective immediately. Module developers should avoid referencing this data and should instead always reference the constructed entities array.
- Retired the specialized activateScene socket operation for triggering Scene activation. After investments in the overall hooks system, there is enough data granularity to identify that a Scene has been activated through the traditional updateScene socket, so all usages of the old activation approach have been replaced with a straightforward Scene update call which sets the active state directly.
- Incorporate specialized Electron handling for SSL certificates to allow the certificate to be valid for localhost addresses.
- Added a debugging setting which displays logging information to the console every time a Hook function is called. This makes it easier to discover what hooks (and what are their arguments) are applied when conducting workflows in the VTT. To enable this level of debugging, set CONFIG.debug.hooks = true;.
- The Compendium.importEntity method now accepts an optional argument for updateData which allows for conveniently updating the entity simultaneously with the import operation. This can be helpful if you want to programmatically import an entity from a compendium pack, but modify the imported entity relative to it's stock variant.
- Added a Folder.entities getter for convenience to vend an Array of all Entity instances which belong to that parent Folder.
- Added some additional fields for package metadata to the conventional NPM package.json file.
- Applied a stronger server-side permission check for Entity updates to validate that the requesting User has ownership permission over the specific document in question.
- The underlying data structure for the buttons in the SceneControls app has been refactored from an Object (prior) to an Array (new). This has several advantages, including allowing for the order and composition of buttons to be manipulated by a new Hook which has been added. By hooking to getSceneControlButtons module authors may itroduce new buttons to the controls menu or modify the behavior of existing buttons. Please see https://gitlab.com/foundrynet/foundryvtt/issues/1528 for discussion and examples.
- Improved the protection against cases where folders exceed the maximum allowed level of depth. Previously this would cause the entire Sidebar Tab to fail rendering. Now folders which exist at an invalid depth level are simply rendered at the root level of the sidebar directory.
- Re-wrote and greatly improved the ChatMessage.getSpeaker() helper to construct the speaker data object from a given Token, Actor, or User entity.
- Provided a new canvasPan Hook event to respond to changes to the canvas location or scale. This hook will fire whenever the canvas is panned (which can result in a lot of calls). Be careful if you use this hook to make sure your hooked function is as efficient as possible. See https://gitlab.com/foundrynet/foundryvtt/issues/1500 for more details.
- Each registered Hook function is now assigned a numeric ID which can now be used as a token for unregistering (turning off) the Hook instead of the hooked function reference. This makes it much easier to un-register a Hook while still using anonymous functions. See https://gitlab.com/foundrynet/foundryvtt/issues/1490 for an example.
- Instaces of the ImagePopout class may not optionally refer back to an Entity instance which requested them to be shown. If such an entity reference exists, it is available under options.entity of the ImagePopout instance.
- Added a simple CLI script which can quickly initialize a new module, creating some boilerplate structure for module developers to quickly build upon. See https://gitlab.com/foundrynet/foundryvtt/issues/1374 for example usage.

`CONST``CONFIG``CONST``updateManyOwnedItem``diffObject({foo: {bar: 1}}, {foo: {}}); // {}``flattenObject({foo: {bar: {}}}) // {"foo.bar": {}}``Number.prototype.between(min, max)``Number.between(num, min, max)``number``source``Collection``activateScene``updateScene``CONFIG.debug.hooks = true;``Compendium.importEntity``updateData``Folder.entities``getSceneControlButtons``speaker``canvasPan``ImagePopout``options.entity`
### D&D5e System Improvements

- Owned Items may now be manually reordered through drag+drop within the D&D5e character and NPC sheets.
- Renamed the "Feats" tab on character sheets to "Features" to more appropriately reflect it's intended use case as the location for both Feats as well as class, racial, or background Features.
- A number of bug fixes and minor improvements for the D&D5e system to keep up with core VTT changes.

