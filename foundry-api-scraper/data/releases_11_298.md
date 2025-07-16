# Release 11.298 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.298

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.298


## Version 11 Testing


##### May 18, 2023


## Foundry Virtual Tabletop - Version 11 - Testing 3 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We're excited to bring you the third release in the Feature Testing phase of our development cycle. Feature Testing releases are designed to allow power users and those with strong stomachs to experience new features as we grow closer to a stable release for the general public! V11 Testing 3 is focused on correcting bugs and improving the UX and UI of features newly introduced in Version 11, based on feedback from our development community. If you are interested in providing feedback on these early testing builds, now is the time to check them out! Be cautious, however, testing builds are not intended for use in weekly games or in heavily-modified Worlds.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights


### Search Your Sidebar... You Know it to be True

The Sidebar search just got a lot more powerful thanks to improvements to our Database engine and Cody's work adding an API to search and filter Documents. The search field can now check just the name of Documents or any field that's configured for search which empowers you to find your important notes, characters, and items even faster!


### A Sci-Fi for Sore Eyes

Not everyone uses Foundry VTT for fantasy games so as part of our improvements to the Setup screen Nath has added a new Setup theme that will look perfect for anyone running a futuristic or Sci-Fi game. We've also included a new Sci-Fi font option that will be used in the theme and be available for use in journals, Map Notes, etc. as well.


### What's the Issue?

The entire dev team have been wearing their bug squashing shoes and they've cleared a huge slate of issues! Moving placeables on the Canvas now looks better, movement near collinear walls is better supported, and Tokens should look better when animating. There are also fixes across the rest of the software like new localization strings, better tooltip positioning, improvements to package updates, and much more!


## Known Issues

Changes to Scene global illumination are not correctly applied immediately and instead require a refresh (F5) to take effect. This will be fixed for our next release.


## New Features


### Documents and Data

- Added Actor.statuses which is the union of all ActiveEffect.statuses that are applied to the actor. (9392)

`Actor.statuses``ActiveEffect.statuses`
### Applications and User Interface

- The Sidebar search now uses the new DocumentCollection.search added in 9355. (9381)
- Added a Sci-Fi theme for the Setup screen. (9329)
- Added support for real-time preview of the CSS theme on the Setup page. (9416)
- Added Bruno Ace as a selectable font option for text editing, Map Notes, etc. (9417)
- Improved the containment test in BaseGrid._testShape to fix an issue where certain measured templates would highlight the grid incorrectly. (8459)
- Users who can create a new Document can now also duplicate Documents. (9089)
- Categories that have no visible children are now hidden in the Settings app. (9107)
- The minimum resolution error notification is now automatically removed if the User's resolution changes to be above the minimum threshold. (9144)
- When hovering over a Token with a disposition of None the cursor will now only change to a pointer if the User owns that Token. (9377)
- Global volume control tooltips now display the adjusted volume from volumeToInput rather than the underlying non-linear volume scale. (9388)
- Added a button to preview door sounds in the Wall configuration app. (9391)
- Compendium Packs now use the same icons as the Package's source (World, System, Module). (9396)
- Improved the consistency of inputs in the light configuration app to use range sliders. (9400)
- Hovering over tools in the left-hand sidebar now shows helpful clips and explanations for various features in Foundry VTT. It can be disabled using the Show Toolclips setting. (9401)
- Added an option to toggle between Full Text and Name Only search. (9404)
- The Import Data input is now limited to to only display JSON files. (9405)

`DocumentCollection.search``BaseGrid._testShape``None``volumeToInput`
### Package Development

- Standardized Setup._uninstallPackage to Setup.uninstallPackage to match Setup.installPackage. (9372)

`Setup._uninstallPackage``Setup.uninstallPackage``Setup.installPackage`
### Localization and Accessibility

- Door Configuration strings are now properly localized. (9412)


### Other Changes

- Chat bubbles are now enriched using TextEditor.enrichHTML. (9165)

`TextEditor.enrichHTML`
## API Improvements


### The Game Canvas

- When a door sound is configured with an array of sound files it will now choose randomly from the options. (9198)


### Package Development

- Gamemasters can no longer hide Compendium Packs from themselves using the UI. (9394)


### Other Changes

- Improved the localize Handlebar helper to work with concat. (9240)

`localize``concat`
## Bug Fixes


### Documents and Data

- When placeables are updated they will no longer reset to their original state before the update is applied which led to a brief one-frame flash. This also covers 7530. (9196)
- Fixed an issue where fields on an ActorSheet which still referenced data fields instead of system fields could incorrectly be modified when they had an Active Effect applied because the data schema migration occurs after the Active Effects override check. (8784)
- Rebuilding Adventures now correctly updates the Pack index. (9316)
- Packs which define {private: true} now get correctly migrated to {PLAYER: "LIMITED", ASSISTANT: "OWNER"} ownership permissions. (9379)
- Resolved an off-by-one issue that caused an error to be thrown when exporting a Folder with more than 2 subfolders to a Compendium Pack. (9382)
- Compendium Pack Folders which do not themselves contain Packs are no longer skipped in the Folder hierarchy. (9390)
- JournalEntryPages that use a custom sort order defined by a Journal sheet now open to the correct sheet by ID. (9399)
- Expired effects no longer have an erroneous label for duration. (9414)

`placeable``ActorSheet``data``system``{private: true}``{PLAYER: "LIMITED", ASSISTANT: "OWNER"}``JournalEntryPage`
### Applications and User Interface

- Tooltips in the Setup screen are now position: fixed rather than absolute. (9413)
- The Combat Tracker now correctly calculates the control status of Combatants. (9375)
- Corrected an issue that caused drawing cloned Walls to fail after placing a few of them. (9376)
- Double-click events on PlaceableObjects no longer incorrectly propagate a left-click event to the underlying Canvas layer. (9406)

`position: fixed``absolute``control``PlaceableObject`
### The Game Canvas

- Fixed an issue where canvas.fog.load() could break the canvas by making FogManager work with FogExploration updates. (8988)
- Collinear walls are no longer included in the Sweep. (9071)
- PointSourcePolygon._testWallInclusion excludes collinear walls at all times now which means Collinear walls no longer break move-type polygons. (9149)
- Threshold distances are no longer converted to pixels in WallDocument.prepareBaseData which fixes an issue where exporting a Scene containing windows to a Compendium Pack would throw errors. (9354)
- Fixed an issue that would cause a text Drawing to disappear when trying to open it for editing and left click to release objects was enabled. (9356)
- Fixed the animation of Token alpha changes for Gamemasters. (9374)
- Corrected the update path for ActorDeltas when embeddedUpdate is true. (9384)
- The external radius of vision is now calculated using Token Document data to correct an issue with flickering when dragging a Token with vision. (9385)
- The getTokenDocument method no longer references the deprecated data field. (9395)
- Tokens are now correctly refreshed even when Token#animate returns before launching the animation. (9398)
- Corrected an issue where a set of metal door sounds that were included were not correctly exposed for use. (9409)

`canvas.fog.load()``FogManager``FogExploration``PointSourcePolygon._testWallInclusion``WallDocument.prepareBaseData``ActorDelta``embeddedUpdate``true``getTokenDocument``data``Token#animate`
### Package Development

- Installing a package no longer temporarily removes favorites until a restart. (9410)
- Worlds that haven't been launched since 0.7.X no longer break the Setup UI. (9411)
- Fixed an issue that caused the update report to not correctly wrap links. (8842)
- Modules that are incompatible with the last launched World no longer disappear in the Setup screen. (9145)
- Improved the update summary reports to reduce time out errors for systems that have a max version set. (9321)
- Added progress bars to the DOM in SetupPackages.render to prevent progress bars from disappearing when one finishes. (9393)

`SetupPackages.render`
### Dice and Cards

- Face down cards no longer display their name. (9407)
- Immediately evaluated inline rolls that do not contain dice terms no longer create an empty Tooltip and do not show an expanded inline roll if it's empty. (9157)


### Localization and Accessibility

- Content link tooltips for typed Documents now provide better support for localization. (9348)


### Other Changes

- Updated the arguments passed to process.exit to account for increased strictness in Node 20. (9373)
- Corrected calls of getUUID to the correct method getUuid. Also covers 9380. (9378)
- The ContextMenu can now correctly be constructed with an HTMLElement and not just a jQuery object. (9389)

`process.exit``getUUID``getUuid``ContextMenu``HTMLElement`