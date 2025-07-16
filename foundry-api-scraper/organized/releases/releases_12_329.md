# Release 12.329 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.329

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.329


## Version 12 Stable


##### July 18, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 5 Release Notes

The next iteration of Foundry Virtual Tabletop Version 12 has arrived! As always, thanks to everyone who has submitted feedback and helped us investigate potential issues!

This patch brings a number of important bug fixes and refinements distributed across the entire application and API. While the focus of this release was not adding new features, a few shiny tidbits were added such as a new bronze Dynamic Token Ring and two new texture transition modes, glitch and dots. For a complete log of all the features added in V12, please see the notes for our first release on the stable channel.

`glitch``dots`WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Applications and User Interface

- Added the rollable option which, if present, adds a button to roll on an embedded RollTable. (11201)
- Added support for the <dfn> element in sanitized HTML content. (11031)
- User names in the Ownership Configuration window are now sorted alphabetically. (11447)
- Prevented the chat log from automatically jumping to the bottom after switching sidebar tabs. (11461)

`rollable``RollTable``<dfn>`
### The Game Canvas

- Added an additional bronze token ring based on the ring used in the "Token Packs: Bestiaries" module. (11313)


### Package Development

- When a module.json parsing error occurs, the error message now includes the module which produced the error. (11164)

`module.json`
## API Improvements


### Documents and Data

- A DataModel class can now be localized by calling the Localization.localizeDataModel helper method, comparable to using Localization.#localizeSchema. (11413)
- Made it easier to track down an invalid Embedded Document by adding its UUID to the error message. (11449)

`DataModel``Localization.localizeDataModel``Localization.#localizeSchema`
### Applications and User Interface

- Added an optional slug property to the HTMLStringTagsElement which automatically converts input strings to slugs. (11248)
- ApplicationV2 instances are now registered immediately before elements are inserted. (11407)

`slug``HTMLStringTagsElement``ApplicationV2`
### The Game Canvas

- Added two new texture transitions: Glitch and Dots. (11399)

`Glitch``Dots`
### Other Changes

- Document update options are now passed through to Ruler#_animateSegment. (11131)

`Ruler#_animateSegment`
## Bug Fixes


### Documents and Data

- Restored the "Create Macro" and "Create Folder" buttons which were missing from the Macro Directory. Also restored the "Import Entry" option that was missing in the context menu of Macro Compendiums. (11304)
- Accessing folder.contents for Compendium Packs no longer throws an error. (11292)
- RollTable#drawMany no longer uses the deprecated PoolTerm. (11302)
- User#permissions validation no longer prevents the deletion of user-specific permission overrides. (11303)
- Players with the ACTOR_CREATE permission can once again create Actors. Players with the JOURNAL_CREATE permission can once again create Journal Entries. (11311)
- Prevented TypedSchemaField#toObject(false) from throwing an error for null or undefined values. (11418)
- Fixed a bug with legacyTransferral for ActiveEffect that caused effects to be transferred multiple times. (11421)
- @Embed links of a RollTable no longer show blank TableResults as broken content links. (11422)
- Fixed a bug that caused the prepared Actor Delta to sometimes be not initialized if the Delta in the Token Document's source was null. (11476)

`folder.contents``RollTable#drawMany``PoolTerm``User#permissions``ACTOR_CREATE``JOURNAL_CREATE``TypedSchemaField#toObject(false)``null``undefined``legacyTransferral``ActiveEffect``@Embed``RollTable``TableResults`
### Applications and User Interface

- DocumentDirectory#_render now checks dotted object paths in renderUpdateKeys. (8677)
- Removed the image edit listener in the "Rolltable Configuration" window for Document and Compendium Pack results. This change prevents users from mistakenly believing that the linked images can be edited and also keeps these images in sync with their referenced documents. (10536)
- Fixed a bug where the "Show Password" button was missing after creating a new user. (10563)
- Prevented the SoundsLayer#_syncPositions from picking the wrong AmbientSound to process in certain circumstances. (10863)
- Removing a Folder now moves its previously contained items into its parent Folder instead of dumping them into the root level. (11025)
- Resolved an issue where strings in cssClasses were being printed with a comma and breaking classes. (11178)
- Fixed some styling issues with ApplicationV2 header controls dropdowns. (11229)
- Prevented an unhandled exception that occurred when right-clicking on the canvas with left mouse button also held down. (11299)
- Tokens once again display the last overlay effect added instead of always displaying the first overlay effect applied. (11306)
- When the Region Legend is manually repositioned, this new position is now retained when it is reopened. (11307)
- Combatants in the CombatTracker once again display their tracked resource properly. (11405)
- Fixed an error when using ContextMenu.create in ApplicationV2. (11408)
- <prose-mirror> once again closes the editor when pressing the "Save and Close" button without making any changes. (11414)
- Provided a minimum height for ApplicationV2 so that you can no longer make it smaller than the window-header. (11416)
- When holding SHIFT+CLICK to move the camera to center on the ping, the currently selected tool is once again properly disabled. (11423)
- Improved ApplicationV2's resizing controls to be less "wonky" in certain cases. (11424)
- Setting the Occlusion Mode of Overhead Tiles to "None" now prevents them from fading when hovered. (11448)
- The "Configure Ownership" option is once again available when right-clicking a Folder in the Playlist sidebar. (11458)
- Double-clicking the same position with CTRL down no longer breaks and prevents wall-chaining. (11463)
- Prevented a rendering delay that occurred when rendering an ApplicationV2 window that was previously closed while minimized. (11464)
- Corrected issues with the ApplicationV2#changeTab method implementation which incorrectly required the parent .tabs container to have the data-group annotation. (11465)
- After creating a new scene, the Scene Configuration is once again automatically opened. (11466)

`DocumentDirectory#_render``renderUpdateKeys``SoundsLayer#_syncPositions``AmbientSound``cssClasses``ApplicationV2``ContextMenu.create``ApplicationV2``<prose-mirror>``ApplicationV2``ApplicationV2``ApplicationV2``ApplicationV2#changeTab``.tabs``data-group`
### The Game Canvas

- When setting the refreshElevation render flag, the tooltip is now also properly refreshed. (11410)
- Dynamic token ring color band now defaults to the correct values. (11294)
- When deleting a Token, the Combatant is now deleted even when the Scene the Token is in isn't viewed. (11295)
- When a darkness source is placed on top of a vision source, the vision source is now blinded immediately. (11438)
- After flashing, the Dynamic Token Ring now falls back to its original defaultRingColor as expected. (11450)

`refreshElevation``defaultRingColor`
### Package Development

- Requests to download packages that are self-hosted will no longer fail with a 406 Not Acceptable error. (11474)
- Remote manifests are now loaded non-strictly when checking for updates in the Setup screen to prevent unnecessary validation errors caused by changes between major versions of Foundry. (11188)

`406 Not Acceptable`
### Dice and Cards

- Resolved an issue where users could not whisper Rolls because the targets of the whisper were always overridden by the roll mode. (10278)
- Rolls are no longer evaluated interactively if no rollMode is passed to Roll#toMessage and the current roll mode is blind. (11315)

`rollMode``Roll#toMessage``blind`
### Localization and Accessibility

- Added localization for errors caused by adding invalid elements to HTMLStringTagsElements. (11293)
- Fixed localization of the error displayed when an incorrect password is entered. (11309)
- Added missing localization for Document names. (11427)
- In the Setup screen's Worlds, Systems, and Modules tabs, the "Check For Update" label has been changed to "Perform Update If Available" to more accurately represent the update behavior. (11441)

`HTMLStringTagsElement`
### Other Changes

- Fixed a bug where the sanitized fields cache was not cleared when switching to another World with a different System. Previously, this caused false errors because the server attempted to sanitize system data based on the fields of the wrong System. (11472)
- ProseMirror's "Toggle Content Link Matching When Highlighting" option now respects Document visibility permissions. (10159)
- Added a check to ensure that the timestamp DOM element is defined before attempting to assign textContent, preventing recurring Uncaught TypeError: Cannot set properties of null (setting 'textContent') errors in some systems. (10591)
- Deployed an additional fix to resolve FilePicker upload failures with S3 buckets. (11298)
- Changing tabs without callbacks no longer throws a TypeError: this.callback is not a function error. (11406)
- Added automatic depth management to @Embeds to make it more difficult to accidentally create circular references. (11417)
- Prevented a Data Model validation error that occurred when using the "Reset Defaults" option in the Settings dialog.   (11459)

`textContent``Uncaught TypeError: Cannot set properties of null (setting 'textContent')``TypeError: this.callback is not a function``@Embeds`
## Documentation Improvements


### Other Changes

- Added Module Primitives to the V12 API Documentation. (11216)

