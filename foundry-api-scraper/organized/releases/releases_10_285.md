# Release 10.285 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.285

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.285


## Version 10 Stable


##### September 08, 2022


## Foundry Virtual Tabletop - Version 10 Patch 2 Release Notes

Since V10's initial stable release, the team has been hard at work combing through community feedback and bug reports to make Foundry even better. If you would like to see more of the changes that went into V10, be sure to check out the Stable release's notes including our What's New in V10 video.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

This release is focused on fixing bugs and improvements to the V10 API to make package development easier, improve Tour navigation, enhance how the canvas works with vision modes, upgrade the Journal V2 system, and lots more!


## New Features


### Applications and User Interface

- Added Keyboard Commands for "Next", "Previous", and "Exit" in Tours. (8065)
- Added a separate permission for pinging the canvas rather than relying on the "Display Mouse Cursor" permission. (7778)
- When dragging Journal Entry Pages between Journals, the ID of the Page will now be preserved unless that ID already exists in the other Journal. (8076)
- The AdventureExporter now provides a notification once the process has completed creating or updating an Adventure document. (8132)

`AdventureExporter`
## API Improvements


### The Game Canvas

- Added a method to enable changing a Token's vision mode with its related Advanced Option settings. (8098)
- Improved the rendered interaction between multiple vision sources which apply different vision modes by adding a preferred field to the VisionMode object. (8061)

`preferred``VisionMode`
### Package Development

- The relationships.systems field no longer requires related systems to be installed, favoring an entry in relationships.requires instead. (8066)
- Version 10 is more strict than V9 regarding validation of World IDs which may only contain basic alphanumeric characters. In the unusual event that a pre-existing World has an ID that contains characters which are forbidden that World will now be automatically assigned a new ID which updates the World folder name and the contents of the world.json manifest file. (8068)
- The BasePackage version field now uses "0" as the default value instead of "0.0.0" to avoid pre-supposing a certain version format. (8146)

`relationships.systems``relationships.requires``world.json``BasePackage`
## Bug Fixes


### Documents and Data

- Markdown should now be properly rendered to HTML when a Journal Entry is created all at once via the API. (7768)
- Rolling on a Roll Table should no longer cause a result's name to be changed to a content link under certain circumstances. (8121)
- Fixed a bug where a duplicated Compendium would not have any visible documents until after a reload. (8128)
- Created an allow list for domains which can be embedded in an iFrame in Journals. (8140)
- Creating a dynamic link to an anchor in Journal Entry Pages should no longer throw an error. (8145)
- Users should once again be able to change the view mode of a journal entry without owner permissions. (8088)
- Scene thumbnails are no longer regenerated on creation if the Scene already has a thumbnail explicitly provided. (8105)
- A Token actorData object should no longer contain a degenerate circular reference to token or prototypeToken (8109)
- The ColorField now converts blank strings to null which is used to designate "no color". (8147)
- fromUuidSync should no longer throw an unhandled exception on Compendium UUIDs if the document or index data isn't found. (8154)

`actorData``token``prototypeToken``ColorField``null``fromUuidSync`
### Applications and User Interface

- Deleting a Journal Page should now prompt for confirmation. (8095)
- Updating a Token's configuration should no longer close the Token's actor sheet if it is open. (8119)
- Tooltips should no longer get stuck in certain circumstances. (8030)
- A token's resource attribute bars should no longer be set to the System's default when set to "None". (8047)
- Fixed an issue where the Macro bar and player list would not be visible, Pings would not work, and chat was not scrollable when the A/V was docked to the top or bottom of the screen. (8054)
- ImagePopout windows should once again resize to fit the images passed to them. (8055)
- Tooltips should no longer overflow when provided with long text. (8062)
- The UserConfig should once again be constructed from the configured subclass. (8082)
- Fixed a bug where cards could not be dealt when only one possible hand or pile existed within the World. (8092)
- Token animation should no longer result in uncleaned values being saved to the TokenDocument. (8112)

`ImagePopout``UserConfig``TokenDocument`
### The Game Canvas

- The PrimaryCanvasGroup#removeTile and PrimaryCanvasGroup#removeDrawing methods should now properly destroy their mesh and shape objects as expected. (8048)
- Video Tiles should now correctly follow their "Loop" setting. (8053)
- Certain wall placements should no longer cause vision to render incorrectly. (8097)
- Changing a Scene's grid color or grid opacity should no longer cause Token rendering to fail. (8102)
- Document property deletions using -=key should now properly remove the given property in embedded documents in an unlinked Token actor. (7945)
- Fixed an issue which caused Token actor overrides to be discarded instead of used, particularly noticeable with regards to Active Effects on unlinked Tokens. (8020)
- The FilePathField now explicitly allows for wildcard paths without a file extension in the data schema. (8069)
- Fixed a bug where changes to a Prototype Token image would not be properly persisted. (8073)
- Fixed a bug where shadow rendering showed large graduated superpixels or streaks. (8074)
- A rounding issue in the fog exploration texture size which caused gradual fog drift in unusually large scenes has been corrected. (8075)
- Canvas#updateBlur should now correctly update the filters if canvas.performance.blur.enabled is false. (8077)
- Fixed a bug where a Token without an Actor could not have its configuration window closed. (8087)
- Adding a player-owned token with vision enabled but no vision range should no longer throw an error. (8094)
- The AlphaBlurFilterPass should now affect the saved fog sprite. (8103)
- Resetting fog of war should now work as expected when exploration hasn't yet been persisted to the database. (8122)
- An issue which could cause keyboard movement to clip through walls has been corrected. (8123)
- Unowned tokens should now have their visibility correctly adjusted when moving in or out of view. (8125)

`PrimaryCanvasGroup#removeTile``PrimaryCanvasGroup#removeDrawing``-=key``FilePathField``Canvas#updateBlur``canvas.performance.blur.enabled``AlphaBlurFilterPass`
### Package Development

- Exclusive content modules should once again appear in the installation dialog. (8093)
- The Game System update dialog should no longer throw errors when performing an Update All. (8056)
- Corrected a bug where modules with the correct compatibility flag would still be flagged as "compatibility unknown". (8057)
- Package sidegrades should now update the compatibility.verified field based on remote data rather than stripping it. (8081)
- The BasePackage migration functions are now static internal methods rather than static private methods so they can have access to the this scope to properly condition certain migration rules on this.type. (8104)
- The Setup screen should no longer show incorrect data paths for Packages. (8143)

`compatibility.verified``BasePackage``static internal``static private``this``this.type`
### Dice and Cards

- Inline rolls in chat messages should once again store the roll result in the persisted document. (5292)


### Localization and Accessibility

- Fixed an issue with localization of Document names in the Create Compendium dialog dropdown which prevented Compendium creation. (8036)


### Other Changes

- The source code editor should now save even if the content initially contained void elements. (8142)
- The Clear Formatting button should now remove all formatting. (8029)
- Chat message rendering failures should no longer prevent the entire chat log from rendering. (8051)
- The _preCreate method should now receive the initial creation data rather than the fully validated and initialized data. (8096)

`_preCreate`
## Documentation Improvements


### Other Changes

- The documentation for prepareData has been corrected to indicate that it does not reset the source data. This method now performs a source data reset and calls preparation. (8110)
- The Tooltips API example now uses game.tooltip instead of game.tooltips. (8124)
- A number of broken links in the generated V10 API docs have been corrected. (8137)

`prepareData``game.tooltip``game.tooltips`