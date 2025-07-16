# Release 13.344 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.344

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.344


## Version 13 Stable


##### May 21, 2025


## Foundry Virtual Tabletop - Version 13 - Stable 3 Release Notes

As our five year anniversary and celebration approaches, many exciting things are happening in Foundry-world including:

- Our traditional 20% off sale for Foundry VTT licenses
- Matching sales on many products in our official Marketplace
- Tomorrow's V14 Patreon poll to choose a V14 feature

Today's Version 13 Stable 3 release is a bit more practical but equally exciting! Our goal for this release was to include as many "low-hanging fruit" type bug fixes and improvements as possible, and the dev team delivered with a bushel of over 120 improvements.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Documents and Data

- Set the Description textbox on the Active Effect Sheet to a minimum height of 200px. (12429)
- Ensured that _stats.exportSource is always cleared when a Document is duplicated. (12817)

`_stats.exportSource`
### Applications and User Interface

- Upgraded FontAwesome to 6.7.2. (12632)
- Added the ability to disable the use of the backdrop-filter: blur CSS property by selecting the Low performance mode or by updating the new experimental.noBlur client setting to `true`. (10400)
- Added the ability for roll table embed enrichers to specify a custom table name to use in the header of the embedded HTML table. (12304)
- Gave new journal categories a name by default and improved the user experience when interacting with un-named journal categories. (12449)
- Provided a more vivid icon for invitation links using dark mode styling. (12544)
- Updated the Select Tokens and Measure Distance toolclips to include new ruler controls. (12674)
- Added additional labelling to the Token HUD to help clarify which movement method the token uses by default, for example Default(Fly) or Default(Walk). (12692)
- Improved the user experience when attempting to use the FilePicker to upload files into a protected directory. The Upload input now displays again, but it is disabled and has a tooltip which explains that creating a new top-level folder may be needed. (12715)
- Adjusted the default folder color for light theme to improve visibility. (12729)
- Improved the placement of Distance Ruler waypoint labels so that they are not obscured by the cursor when zoomed out. (12861)

`backdrop-filter: blur``experimental.noBlur``Default(Fly)``Default(Walk)``FilePicker`
### The Game Canvas

- Reverted back to vertically unbounded (elevation-less) vision, light, darkness, and sound sources. (12742)


### Localization and Accessibility

- To improve accessibility, photosensitivity mode is now taken into consideration during dynamic token ring animations. (11241)
- Rewrote the Toggle Edit Lock dialog to better account for locally-created compendium packs. (11925)


## API Improvements


### Applications and User Interface

- Added the ability to undo recorded movement using TokenDocument#revertRecordedMovement(movementId?: string): boolean . (12667)
- Added ControlsLayer#getCursorForUser. (12784)
- Improved overall audio-playback reliability and capability by overhauling the Sound and AudioTimeout classes to support event unscheduling. (12826)
- Journal Entries now properly remember whether they are locked. (12841)

`TokenDocument#revertRecordedMovement(movementId?: string): boolean``ControlsLayer#getCursorForUser``Sound``AudioTimeout`
### The Game Canvas

- Added the "paste" token movement method to label movement that occurred via CTRL+X and CTRL-V. (12806)

`"paste"``CTRL+X``CTRL-V`
### Other Changes

- Moved srcExists, getCacheBustURL, fetchResource and hasTextExtension into foundry.utils. (12789)
- Added a streamReady hook that fires on /stream view. (12856)

`srcExists``getCacheBustURL``fetchResource``hasTextExtension``foundry.utils``streamReady``/stream`
## Bug Fixes


### Documents and Data

- Hid the Duplicate context menu option for users who are not owners of that document. (12315)
- Prevented erroneous combat turn events from firing while changing initiatives. (12747)
- Prevented a case where the first update of a newly added document TableResult type could fail to save all necessary data. (12754)
- Fixed a styling issue where the "Show Players" checkboxes in Journal Entry Pages were not wrapping properly if the game had many players. (12794)
- Prevented unnecessarily reloading all opened documents in a compendium every time another document from the same (unlocked) parent compendium is updated. (12811)

`document``TableResult`
### Applications and User Interface

- To prevent cases where PlaceableObject#_canDragLeftStart could accidentally permit invalid drag operations, improved control over its notifications and moved checks for locked placeables into #_canDrag. (11158)
- Fixed a styling issue where the focus outline around the first and last input in a sheet was clipped. (11739)
- Fixed a bug where rapid clicks on the hide/defeated/ping buttons on in the combat tracker also opened the combatant's actor's sheet. (12036)
- Resolved an issue where setting a minimum height in JournalSheetV2 styling prevented the usual smooth closing/minimizing/maximizing animations. (12316)
- Fixed a styling issue that occurred in the Setup screen at smaller display sizes where context menus were visually truncated and no indication was provided that vertical scrolling was possible. (12383)
- Created a new ApplicationV2#_postRender hook and changed ChatLog#scrollBottom to use it to prevent cases where ChatLog#scrollBottom could be called before the renderChatLog hook. (12420)
- Fixed a bug where mousing over sidebar buttons could sometimes use the default cursor instead of the pointer cursor. (12454)
- Fixed a bug where clicking the sort button in a DocumentDirectory for the first time did nothing. (12469)
- Fixed a bug where attempting to scroll an app that was on top of another app incorrectly scrolled the wrong app if the app under the cursor had a non-opaque background. (12530)
- Fixed a bug where the preview for the Place Tile tool only displayed if you attempted to create the tiles starting from their top-left corners. (12561)
- Added better handling to prevent an error that occurred when attempting to edit a keybinding that had already been deleted. (12581)
- Improved readability for Support & Issues warnings when using the light theme. (12628)
- Restored the previous styling for legend > button so that it no longer has increased height and width when the icon class is assigned. (12655)
- Fixed a bug where Audio Playlists that are set to play once were still looping. (12669)
- Resolved an issue where dropping a compendium pack onto another compendium pack in the CompendiumDirectory did not properly trigger a sort operation. (12670)
- Removed an unnecessary blank choice from the Font Family field of the Drawing Config and Note Config dialogs. (12677)
- Adjusted the initial position of the Region Legend so that it no longer overlaps the Scene Navigation interface. (12679)
- Added the ability to scroll the Ownership configuration dialog. (12725)
- Added the ability to scroll to the Package Update Log. (12727)
- Fixed styling for expanded inline rolls inside chat messages so that their dice tooltips are visible again. (12728)
- Improved styling so that tables in chat messages no longer overflow. (12730)
- Added the ability to scroll the Markdown Journal Entry Page sheet and prevented its contents from potentially hiding the "Save Entry" button. (12731)
- Added light theme styling for <code> elements. (12732)
- Fixed Chat Log rendering with /stream. (12736)
- The Delete option is once again shown to non-GMs in sidebar directory context menus if they should have permission to delete the document. (12741)
- Restored the functionality of the "Load PDF" button in Journal Entry Pages. (12750)
- Fixed the dark theme styling for the Journal Entry edit button. (12753)
- Fixed styling for the ProseMirror's "Insert Image" dialog so that it no longer adds a border around the inner window or uses undefined --color-form-label for its labels. (12755)
- Suppressed the "Delete All" option for folders of compendiums. (12756)
- Prevented the resolution warning from incorrectly displaying in cases where operating system-level scaling and browser scaling balanced each other out and resulted in an acceptably sized viewport. (12757)
- Fixed a bug where the content links in roll tables were not always clickable in certain cases where  the linked document was inside a compendium. (12762)
- Prevented a crash that occurred when providing any non-numeric value (such as a) in the Token HUD elevation field. (12787)
- Added the ability to scroll to the User configuration sheet. (12790)
- Fixed an issue in the Settings dialog where scrollbar positioning was not handled correctly when switching between core and system settings. (12795)
- Increased the resilience the Settings Config so that an invalid setting no longer causes the dialog to fail to render. (12799)
- Added some missing labels to the Card Config dialog. (12813)
- Prevented Notifications#update from failing due to being called before the notification was rendered. (12821)
- Prevented a crash related to clicking away from the Elevation field in the Token HUD. (12823)
- Fixed an issue where toggling repeat while a track is playing muted it due to an un-cancelable scheduled timeout. (12827)
- Restored the ability to adjust a playlist's playback order by dragging and rearranging them inside the sidebar tab. (12830)
- Restored FilePicker's ability to create new folders/directories while using it to select a folder rather than a file. (12848)
- Prevented an error that was thrown when a ContextMenu was created without a selector. (12853)
- Fixed a styling issue where button text colors were overwritten by the .standard-form > .form-fields selector. (12865)

`PlaceableObject#_canDragLeftStart``#_canDrag``ApplicationV2#_postRender``ChatLog#scrollBottom``ChatLog#scrollBottom``renderChatLog``DocumentDirectory``legend > button``icon``CompendiumDirectory``<code>``/stream``--color-form-label``a``Notifications#update``FilePicker``ContextMenu``.standard-form > .form-fields`
### The Game Canvas

- Tokens can no longer slide along the boundary of a Region when exiting if a Region Behavior subscribes to one of (TOKEN_MOVE_OUT / TOKEN_EXIT) and also to TOKEN_MOVE_WITHIN. (11868)
- Fixed a bug where active effects that belong to an item were not being transferred to the parent actor if using CONFIG.ActiveEffect.legacyTransferral and a synthetic actor. (12328)
- Prevented a bug where light source priorities were not respected if a darkness source had "Constrained by Walls" unchecked. (12668)
- BaseEffectSource#_initializeSoftEdges is now called in _configure instead of _initialize to ensure that it is called in cases where there aren't any data changes but the shape changes. (12681)
- Token vision once again updates immediately after an ownership change. (12686)
- Fixed a bug where the turn marker was not immediately rendered when a token was added to an in-progress combat. (12708)
- Fixed a bug where deleting a token that was part of a combat could sometimes cause that combat to immediately advance to the next combatant's turn. (12709)
- Fixed a bug where the OutlineOverlayFilter disregarded the provided knockout parameter and always showed outlines only. (12721)
- Fixed the Dynamic Token Ring "Grid Fit" mode so that it correctly scales the subject texture with ring scale again. (12751)
- Fixed a bug where changing the actorId of a linked token cleared the base Actor's  in-memory embedded collections. (12775)
- Fixed a bug with tokens using dynamic rings and inferred subject textures where attempts to update their textures could sometimes fail and be reverted. (12777)
- Added support to TokenDocument#_onRelatedUpdate so that it can receive arrays of updates. (12782)
- Fixed deep freezing of TokenDocument#movement. (12816)
- Updating an open door no longer causes the door's texture to visually display as if it was closed. (12831)
- Prevented an unintended behavior where users could control and update a Token that was associated with a deleted Actor. Also restored the ability for players to control and update Tokens without a linked Actor. (12832)
- Fixed an issue where the combat turn marker was briefly rendered at an incorrect position at the start of a movement. (12835)
- Improved the maximum zoom level logic of the canvas so that users can always zoom out far enough to see the entire scene. (12836)
- Fixed a bug where Token Drag Vision could allow players to see behind walls even though they cannot move the token through them. (12845)
- Fixed a bug where tokens could sometimes walk through walls unhindered. (12850)

`TOKEN_MOVE_OUT``TOKEN_EXIT``TOKEN_MOVE_WITHIN``CONFIG.ActiveEffect.legacyTransferral``BaseEffectSource#_initializeSoftEdges``_configure``_initialize``data``OutlineOverlayFilter``knockout``actorId``TokenDocument#_onRelatedUpdate``TokenDocument#movement`
### Package Development

- Rectified misalignment of icons and text in the "Result" column of the Package Update Log. (12546)
- Prevented errors that could occur when clicking the "Install Selected Dependencies Automatically" button repeatedly. (12678)
- Fixed a bug where taking a backup failed if the Setup screen's view mode was set to Details View. (12735)
- Improved zip extraction handling during the module installation process to prevent certain cases where an error was thrown and module installation appeared to fail even though it actually succeeded. (12749)
- Fixed a bug where attempting to uninstall an 'undefined' module or system resulted in the deletion of the package's entire parent folder and all other packages in it. This issue did not affect undefined Worlds. (12767)
- When checking for available updates in the Setup screen, the "Create a Snapshot" button no longer displays if the --nobackups flag is active. (12771)
- Added various missing labels to the Module Config dialog. (12797)
- Fixed the "Manage Package" button in the Package Warnings window. (12800)
- Fixed and improved the display of Document subtype counts in the Module Management application. (12802)
- As an additional safeguard, ensured that a world always launches in safe configuration the first time that it launches using a new major generation of Foundry. (12820)
- Added the ability forSetupPackages to remember scroll position after a re-render. (12829)
- Fixed an issue where the star icon of favorited Worlds, Systems, or Modules could disappear after they were updated.  (12849)

`--nobackups``SetupPackages`
### Dice and Cards

- Resolved an issue where a dollar sign ($) inside the data of a Roll caused a syntax error. (11440)
- Improved the error message that is thrown when an unresolved Roll function is evaluated. (11482)
- Added AppV2 support for TextEditor#_onClickInlineRoll roll data fetching. (12792)
- Removed stray escape characters that were displaying in the Content links inside Card messages. (12866)

`$``AppV2``TextEditor#_onClickInlineRoll`
### Localization and Accessibility

- Removed localization for the Font Family choices in the Drawing Config because these choices should not be localized. (12676)
- Fixed automatic localization of EmbeddedDataFields in Document subtypes. (12722)
- Localized the Adventure#sort field in AdventureExporter. (12748)
- Fixed the localization paths for the Card#type property of CardsConfig templates. (12780)

`EmbeddedDataField``Adventure#sort``AdventureExporter``Card#type``CardsConfig`
### Other Changes

- Autocompletion is now disabled by default for AppV2 forms and can be controlled using the new autocomplete attribute. (12008)
- Fixed a bug where ChatMessage#export removed newline characters from the exported message content. (12480)
- Prevented an issue where contents of an inactive ProseMirror editor could not be selected. (12505)
- Prevented an issue that caused the host address to be rewritten incorrectly when returning to Setup while a proxy server was in use. (12584)
- Eliminated a deprecation warning by updating Document#getUserLevel so that it no longer uses the deprecated Document#compendium getter. (12693)
- Restored the ability to update the software from the UpdateNotes application (for minor updates that do not require a reinstallation). (12713)
- Prevented an unhandled exception that was thrown if a string was passed to the HTMLRangePickerElement#value setter. (12714)
- Fixed a bug where chat messages could be timestamped incorrectly and appear in an incorrect order if a user's local system time was ahead of the correct time. (12718)
- When a non-GM attempts to import a document from JSON, the ownership of the target document and all embedded documents is now cleared so that the import can succeed. (12726)
- DependencyResolution is now correctly exported as part of foundry.applications.settings. (12758)
- Prevented ApplicationV2 from attempting to minimize if it is not rendered. (12770)
- Added missing deprecation for globalThis.DocumentOwnershipConfig. (12783)
- Prevented an error that occurred when expanding a roll inside a chat message that is located in the popped-out Chat Log and the Chat Log sidebar tab itself is not active.  (12796)
- Ensured that foundry.utils.deepFreeze/deepSeal always freezes/seals elements inside arrays. (12818)
- Added the ability for the Markdown editor to restore its previous scroll state. (12825)
- Fixed a styling issue where Application#_prepareTabs did not combine CSS classes if the ApplicationTab config had one defined. (12828)
- Prevented an issue where the DocumentDirectory search failed to show all results in certain cases. (12839)
- Restored the functionality of the reveal button of secret blocks in AppV1 versions of Journal Entry sheets, Roll Table sheets, the Chat Log, and popped out Chat Logs. (12859)

`AppV2``autocomplete``ChatMessage#export``Document#getUserLevel``Document#compendium``UpdateNotes``HTMLRangePickerElement#value``ownership``DependencyResolution``foundry.applications.settings``ApplicationV2``globalThis.DocumentOwnershipConfig``foundry.utils.deepFreeze/deepSeal``Application#_prepareTabs``ApplicationTab``DocumentDirectory``AppV1`
## Documentation Improvements


### Applications and User Interface

- Updated the Core Mouse Controls related to the ruler. (12788)


### Other Changes

- Documented the query parameters for CompendiumCollection#getDocuments. (10477)

`CompendiumCollection#getDocuments`