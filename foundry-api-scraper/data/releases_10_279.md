# Release 10.279 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.279

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.279


## Version 10 Testing


##### August 24, 2022


## Foundry Virtual Tabletop - Version 10 Testing 5 Release Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

We're very excited to bring you the 5th release in the Testing phase of our development cycle! This release has focused on a major revision to Vision Modes, the introduction of a number of core Tours, improvements to the Journal UI, and of course, lots of bug fixes! If you are interested in providing feedback on these early testing builds, now is the time to check them out! Be cautious, however; Testing builds are not intended for use in weekly games or in heavily-modified Worlds.

Do you want to contribute feedback during the testing phase, but are nervous you might risk your weekly game in doing so? Our friends at Encounter Library have published a very helpful video that will guide you through the process of setting up a testing environment. For those wishing to just check if the systems and modules they use have been updated with V10 compatibility, we've published our usual package compatibility spreadsheet, and community developer Arcanist has published a new Module Compatibility Checker that will let you check compatibility from within any World.

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights

This Testing release includes a breaking change to the Vision Modes system by separating Vision Modes into separate Vision and Detection Modes as well as the introduction of more core Tours, Journal enhancements, and of course tons of squashed bugs.


#### Vision & Detection Modes

The Vision Mode system has undergone a breaking change to provide a much more expansive array of features to support more playstyles and game systems. We have worked closely with the developers who might be impacted by this change and we think the new system will be an extremely powerful foundation that will serve us well and enables developers to build even richer features.

The Vision Modes feature allows users to customize the way that the world appears from the perspective of a Token. Choosing a custom vision mode can transform the appearance of the Scene to depict features like monochromatic darkvision or night-vision goggles.

The Detection Modes feature allows users to customize how a Token is able to perceive other tokens and objects. Detection modes can allow you to see invisible creatures, perceive underground movement, or sense heat signatures through walls. Tokens which are detected using a special detection mode are highlighted with a visual effect.


#### Core Tours

Users can now take a guided tour of even more aspects of the Foundry VTT user interface. Our Tour system now covers installing a game system, creating a world, an overview of the UI, a walk through the Sidebar tabs, and a breakdown of the Canvas Controls.


#### Journal Enhancements

Journals V2 continue to receive additional polish like a collapsible sidebar, added support for table tags, more consistent CSS selectors, copy/paste support, and relative Document links in TinyMCE.

`table`
## Breaking Changes


### The Game Canvas

- Tokens now have the ability to configure a set of Detection Modes to determine what Tokens and other objects they can perceive which complements the visual appearance provided by Vision Modes. (7801)


## New Features


### Documents and Data

- Dragging-and-dropping a Document (other than a Macro) onto the Hotbar will now create a Macro that displays the dropped Document's sheet. (7807)


### Applications and User Interface

- Journal Entries can now persist their view mode preference between single/multi-page using an optional flag. This also enables content creators to designate how they want their content to be viewed initially. (7724)
- TinyMCE now supports relative Document links like ProseMirror. (7850)
- The icon used to denote that visible Map Notes are present within the Scene has been improved by using a variant Font Awesome icon. (7856)
- A number of Tours have been added that guide new users through various parts of Foundry VTT. (7857)
- Journal Pages should now utilize consistent CSS selectors whether they are in a Journal Entry or popped out. (7863)
- Token status effects should no longer be incorrectly hidden while a token animation is in progress. (7901)
- Added a "UI Overview" Tour showing the general areas of the Foundry UI, such as the Sidebar and Hotbar. (7902)
- Added a "Sidebar" Tour explaining each of the Sidebar tabs. (7903)
- Added a "Canvas Controls" Tour showing each of the Canvas Controls. (7904)
- Added a "Create World" Tour guiding a new user through creating their first World. (7905)
- Added a "Welcome to Foundry" Tour for new users to have guidance on where to find more information about Foundry. (7907)
- A default Scene has been added that will appear for newly created worlds. (7908)
- The CSS for Tour Steps have been updated to make them easier to read. (7912)


### The Game Canvas

- Pixel Ratio Resolution Scaling is now checked by default and can be disabled for users with high pixel-ratio devices to reduce the performance burden. (7862)


## API Improvements


### Documents and Data

- The CompendiumCollection#migrate method can now re-save all documents in the pack, not only ones which have updates to system data template. (7860)

`CompendiumCollection#migrate`
### Applications and User Interface

- The ProseMirror scehema now supports table nodes. (7754)
- Added the ability to suggest more Tours at the end of a Tour. (7900)

`table`
### The Game Canvas

- Revised the framework for visibility testing to use Token Detection Modes, preferring Basic Sight and highlighting Tokens which are detected via a non-basic mode. (7906)


### Other Changes

- Added an engine parameter to the editor handlebars helper to choose which editor is spawned. (7738)
- Added the restricted field to TourStep to show certain steps to GMs only. (7899)

`engine``editor``restricted``TourStep`
## Bug Fixes


### Documents and Data

- Creating a Map Note via the Create Map Note tool no longer throws an error when rendering the dialog. (7820)
- Clicking a linked Compendium entry from within Compendium content as a player should now work as expected. (7838)
- Journal PDF pages hosted on S3 storage should now appear as expected. (7843)
- Changing the alignment of multiple selected nodes in ProseMirror should no longer throw an error. (7844)
- Folder document links should no longer prevent a Journal Page from rendering. (7869)
- Activating a Scene should now correctly play specific Playlist Sounds as configured. (7874)
- Journal Entry inline CSS styles for images and paragraphs should no longer be truncated on save. (7888)
- Linking Macros in a Journal Page should no longer break the page. (7893)


### Applications and User Interface

- Content within summary tags are no longer incorrectly wrapped in p tags. (7755)
- The create Compendium dialog now uses the placeholder value as the default name for consistency with other Documents. (7841)
- Fixed a bug where collapsing the Journal sidebar would move the sheet slightly to the right. (7845)
- Right-clicking on a player in the players menu should no longer throw an error. (7846)
- Journal Pages should now allow selecting text for copy and paste. (7858)
- Scene Controls should now sit flush with the edge of the screen when the A/V dock is hidden in its minimized state. (7891)
- Show Players should once again function as expected. (7895)

`summary``p`
### The Game Canvas

- Toggling the Blinded or Invisible Token status effect should no longer throw an error. (7847)
- The global light source is now assigned an elevation of infinity so that it is above all other sources, tokens, tiles, and roofs. (7848)
- GlobalLightSource#_createLOS should now be changed to _createPolygon. (7849)
- Moving a Token through a Scene should no longer result in visual artifacts in certain edge cases. (7851)
- The Tile#isRoof designation now requires that the Tile has the roof flag and that it is actively in the overhead state. (7883)
- Tile#renderOcclusion should now use the correct roof check. (7884)
- Corrected a bug which incorrectly triggered fog exploration progress while dragging a Token with the Drag Token Vision setting enabled. (7886)
- The Reset Advanced Options button on the Ambient Light configuration form should now reset the preview and values of the form but not save the changes unless the user confirms it by pressing Update Light Source. (7887)
- Fixed a bug where programmatically clearing the texture.src of a Tile would leave a ghost of its previous texture on the canvas. (7897)

`GlobalLightSource#_createLOS``_createPolygon``Tile#isRoof``roof``overhead``Tile#renderOcclusion``texture.src`
### Package Development

- The WorldConfig is now reloaded after a successful editWorld POST request. (7814)

`WorldConfig``editWorld`
### Other Changes

- Discord channel links in NUE Chat Cards have been corrected to point to specific channels. (7873)
- Fixed a bug related to game settings with the String type which internally store a serialized JSON string. (7839)
- foundry.utils.getProperty should once again be able to traverse arrays. (7867)
- Corrected an issue in foundry.utils.randomID that resulted in double-weight on the "9" character. (7877)
- Correct an outdated code reference which triggered a deprecation warning when opening an image popout for a Journal Entry from the sidebar. (7894)
- Improved the behavior of flavor text and "To:" whisper presentation for private dice rolls. (7909)

`foundry.utils.getProperty``foundry.utils.randomID`
## Documentation Improvements


### Other Changes

- GlobalLightSource#object is now undefined instead of passing in the current Scene which is not a type of PlaceableObject. (7872)

`GlobalLightSource#object``undefined``Scene``PlaceableObject`