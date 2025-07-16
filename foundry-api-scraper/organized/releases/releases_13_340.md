# Release 13.340 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.340

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.340


## Version 13 Testing


##### April 17, 2025


## Foundry Virtual Tabletop - Version 13 - Testing 5 Release Notes

WARNING: This Testing update is intended for those dedicated users who wish to test the new features provided in Version 13. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!

We're closing in on the stable build of V13, and while we have a few minor issues left on the table for consideration we're considering this current build feature complete. We expect that, unless there are significant surprises during testing, this build will be promoted to stable with minimal changes!

While this update focused almost entirely on bug fixes and final polish on the UX and UI, we also managed to find a little time to squeeze in a few new features that deserve a little attention.


### Portable Build, Portable Folder

In our last few releases we began including a new 'portable' build for windows users that didn't require a full installation. As of this release, and going forward, the portable build for windows is now contained within an App folder and, at first launch, will create a separate folder for Config, Data, and Logs in its parent folder. The portable build will automatically use its parent folder as a User Data folder, and it no longer relies on an automatically created user-specific folder stored in %appdata% stored on the local computer. The good news is it's now far easier to slap a copy of Foundry VTT on a USB drive and take it with you. The bad news is when updating this particular type of release you'll have to be super careful not to delete the Data folder or you'll lose all your work!

`%appdata%``Data`
### Love The Way You Move

As you all know we've been working hard to bring a refined drag-measurement experience to moving your tokens. This update brings a new change that snuck in just under the wire: the ability to define what 'type' of movement you are taking.

The Token HUD got a little update to offer a menu for selecting type of movement, including a variety of common movement styles- your character tokens can now walk, fly, climb, burrow, teleport, swim, crawl, and more! We expect game systems will leverage movement styles to adapt them to their own particular game rules, so the whole list can be extended.

Users who wish to flip through the available types of movement while currently moving can do so using the Tab key, allowing for a quick and convenient way to illustrate that your character walked a short distance, jumped over a hole, then walked a little more before climbing a ladder.


### All of the Application V2

At long last we've finished the conversion of all our UI applications to use our ApplicationV2 framework, including the new theme and styling for each. While this hardly represents the last iteration of our user experience, all of our current UX and UI elements are now using the powerful new Application V2 framework in a way that makes them far more extensible and customizable. In addition, the entire application (perhaps with the exception of the Chat Log) is now automatically styled to match your computer's theme preferences, shifting to light mode or dark mode as desired.

We hope everyone enjoys the new user interface and looks forward to future improvements!


## Breaking Changes

These changes, while technically breaking, should only minimally impact a limited number of developers who have already updated these parts of their code to adopt v13 practices. After deliberation, given the low-level impact of these changes and the fact that the resolution for users who had already made changes is a single-line code change, we concluded that it would best for us to make this change now rather than in the future when more developers may have switched.

- The chatBubble hook has been deprecated in favor of the chatBubbleHTML hook, which is passed HTMLElement instead of jQuery. (12463)
- DialogV2ButtonCallback and DialogV2RenderCallback now expect a DialogV2 instance in the dialog argument, rather than a DialogV2#element.  (12525)
- The teleport waypoint property of paths passed to BaseGrid#measurePath now measures distance and number of grid spaces/diagonals the same way as non-teleport segments. Previously teleportation segment were measured as 0 distance. The default cost of teleportation segments is still 0. Developers wishing to skip the measurement of this segment entirely may use the measure waypoint property.(12518)

`chatBubble``chatBubbleHTML``HTMLElement``jQuery``DialogV2ButtonCallback``DialogV2RenderCallback``DialogV2``dialog``DialogV2#element``teleport``BaseGrid#measurePath``measure`
## New Features


### Architecture and Infrastructure

- The Windows Portable build now creates a Config, Data, and Logs folder in its parent folder after its first launch. This is then configured as the default UserData folder rather than %localappdata%\FoundryVTT\. (12363)
- Including this build, future Linux builds now include pre-compiled arm64 architecture binaries. (12495)

`%localappdata%\FoundryVTT\`
### Applications and User Interface

- All core Application instances now use ApplicationV2 and ThemeV2. For more information and a complete list, please see the associated GitHub issues: (11184), (11338), (11358), (11341), (11343), (11344), (11351), (11352), (11368), (11374), (11375), (11392), (11394)
- ApplicationV2 windows now calculate their height as a percentage of the maximum screen height less the height of the macro hotbar (100vh - 1.5 * var(--hotbar-height)). (12448)
- The HUD for placeables as well as the drag ruler labels are now properly styled when in light mode. (12479)
- Rollable tables are now resizable. (10029)
- Scene Regions in the Region Legend and Behavior entries in the RegionConfig sheet can now support a drag and drop workflow. (11467)
- Users can now toggle the type of movement they are using (for example, walk, swim, fly, teleport, climb) when moving, on a per-waypoint basis by pressing the tab key during waypoint movement. The data for the type of movement action is stored in TokenDocument.movementAction. (12393)
- Elements previously displayed using the .key CSS class (such as those listed on the game controls display) now use the <kbd> semantic element instead. (10357)

`100vh - 1.5 * var(--hotbar-height)``RegionConfig``TokenDocument.movementAction``.key``<kbd>`
### The Game Canvas

- Darkness sources now have a new Smoke/Fog animation type. (11893)
- The maximum zoom out distance for the canvas has been increased. (12536)


## API Improvements


### Architecture and Infrastructure

- A variety of minor dependency updates, including a minor version update for Electron.


### Documents and Data

- The CombatantGroup Embedded Document now includes Document ownership semantics. (12442)
- ActiveEffect#isSuppressed now returns this.system.isSuppressed (default: false) if the subtype data is an instance of TypeDataModel. (12410)

`CombatantGroup``ownership``ActiveEffect#isSuppressed``this.system.isSuppressed``false``TypeDataModel`
### Applications and User Interface

- The <prose-mirror> element now supports the disabled attribute. (11150)
- TextEditor can now be extended by configuring CONFIG.ux.TextEditor. (12461)
- HandleBars templates now load during HandlebarsApplicationMixin#_preRender instead of _preFirstRender. (12471)
- FilePicker can now be subclassed using CONFIG.ux.FilePicker. (12512)
- "Secret" text blocks in Chat Messages now display for the user if they are either a GM or the owner of the actor (speaker) that posted the message. (6627)
- ChatMessage#renderHTML now passes all of its options through to the Handlebars template to allow improved access to that data for developers. (12452),  (12514)
- TextEditor enrichment options using enrichHTML are now passed through to _enrichInlineRolls, _createInlineRoll, _createContentLink, and _primeCompendiums. _replaceTextContent and _createHyperlink are now protected functions. For details on how to implement "unrolled" inline rolls please see the comments on this GitHub issue. (12484)
- TextEditor.enrichHTML has a new custom option (default: true) which, if false, disables custom enrichers. (12485)
- Added DialogV2Button#style: Record<string, string> and DialogV2Button#type: "submit" | "button" | "reset" to configure the style and type of DialogV2 buttons. (12527)

`<prose-mirror>``disabled``TextEditor``CONFIG.ux.TextEditor``HandlebarsApplicationMixin#_preRender``_preFirstRender``FilePicker``CONFIG.ux.FilePicker``ChatMessage#renderHTML``TextEditor``enrichHTML``_enrichInlineRolls``_createInlineRoll``_createContentLink``_primeCompendiums``_replaceTextContent``_createHyperlink``TextEditor.enrichHTML``custom``true``DialogV2Button#style: Record<string, string>``DialogV2Button#type: "submit" | "button" | "reset"``DialogV2`
### The Game Canvas

- Added options to configure the behavior of movement actions. Removed teleport and forced token movement waypoint properties. Added a selection of common movement actions: Walk, Crawl, Fly, and more!. (12543)
- The dropCanvasData hooks now receive the drag event through and call the dropCanvasData hooks even if data.type returned by TextEditor.getDragEventData is not set. (10004)
- Token movement history now includes movement IDs (TokenMovementOperation#id). (12465)
- TokenRuler#_prepareWaypointData has been replaced by TokenRuler#_getWaypointLabelContext. TokenRuler.WAYPOINT_TEMPLATE has been renamed to TokenRuler.WAYPOINT_LABEL_TEMPLATE.  (12542)

`dropCanvasData``dropCanvasData``data.type``TextEditor.getDragEventData``TokenMovementOperation#id``TokenRuler#_prepareWaypointData``TokenRuler#_getWaypointLabelContext``TokenRuler.WAYPOINT_TEMPLATE``TokenRuler.WAYPOINT_LABEL_TEMPLATE`
## Bug Fixes


### Architecture and Infrastructure

- The electron client now uses the --force_high_performance_gpu command line switch by default in an effort to force the use of a hardware rendering instead of software rendering. (12489)
- The root user data folder now allows creation of subfolders, correcting for an unintended consequence of blocking the creation of files in the root folder. (12490)

`--force_high_performance_gpu`
### Documents and Data

- Compendium packs respect their locked state once more. (12533)
- Fixed a bug which made non-GM user accounts unable to make changes to Documents they owned if those Documents were contained in an unlocked Compendium Pack. (11970)
- game.actors.importFromCompendium respects keepId: true again. (12504)
- Roll Tables now respect the currently selected Roll Mode when posting messages on behalf of a user that has rolled on the table. (12341)
- The Journal Entry Page Sheet Configuration Dialog is no longer an insistent pest about sticking to the left side of the screen. (12368)
- Resolved a race condition that occurred when renderTemplate was called inside renderJournalEntryPageTextSheet hook. (12523)
- To correct an issue with saving changes to journal entry pages, the managed CodeMirror editor no longer fires 'change' events. (12365)
- Importing JSON export of data over an Actor now completely overwrites the actor regardless of whether the actor types match or not. (12372)
- Changes to data models stored with TypedObjectField(new TypedSchemaField( ... )) can now be updated as expected. (12476)
- fieldPaths for ArrayField#element, TypedObjectField#element, and TypedSchemaField#types no longer return incorrect values. (12492)
- SchemaField#has("constructor") now properly returns its current state rather than always returning true. (12493)
- The diff returned by DataModel#updateSource no longer contains the types of TypedSchemaFields if they did not change. (12494)
- Added a missing server-side migration for ActiveEffect#label to ActiveEffect#name. (12506)
- To resolve an issue with improperly preserved manifest JSON data, SchemaField and TypedSchemaField now coerce any non-plain-object to an object. (12509)
- Corrected an unhandled exception in PrototypeOverridesConfig which could result in failure to apply overrides. (12453)
- DocumentSheetV2#_prepareSubmitData now respects deletion -= keys. (12357)
- Addressed a number of issues related to the formatters for Calendar, and corrected a bug that resulted in invalid return of 0 or 1 on game.time.components.dayOfWeek. (12444)
- Corrected a couple of cases where Document.create was called instead of Document.implementation.create. (12443)

`game.actors.importFromCompendium``keepId: true``renderTemplate``renderJournalEntryPageTextSheet``TypedObjectField(new TypedSchemaField( ... ))``fieldPath``ArrayField#element``TypedObjectField#element``TypedSchemaField#types``SchemaField#has("constructor")``DataModel#updateSource``TypedSchemaField``ActiveEffect#label``ActiveEffect#name``SchemaField``TypedSchemaField``PrototypeOverridesConfig``DocumentSheetV2#_prepareSubmitData``-=``Calendar``game.time.components.dayOfWeek``Document.create``Document.implementation.create`
### Applications and User Interface

- The main menu displayed in the Game (World) view is now a modal dialog which is displayed above any other open windows (the escape key still closes all open windows). (12127)
- The logic handling for hotbar dodging has been improved, correcting some issues that occurred with the collapsing of the chatbar notifications area and macro hotbar. (12417),  (12418), (12446)
- Ruler waypoints are now styled correctly for the "light" Application theme. (12387)
- Tooltips now use showPopover() to ensure they display above other currently open windows, including Modal dialogs. (11959)
- Removed the CSS declaration of pointer-events: none for HTML Inputs that have the disabled propery set in order to fix an issue which caused tooltips to not display. (12278)
- #sidebar-content now has the .active-chat class applied even if it has not been manually switched to by the user. (12421)
- The Light mode player list now has a more vivid background and dedicated theming to make it easier to read. (12503)
- User avatars no longer have an unlimited size when the AV dock is in a horizontal orientation. (12475)
- Popped out Chat messages are now forced to a light theme instead of a mix of light and dark themes. (12500)
- Module tag and badge tooltips now properly parse their HTML. (12467)
- The ChatLog "Scroll to Bottom" button now works again for Firefox users. (12445)
- The chatlog no longer immediately loads all messages when scrolling to the top, resolving issues with chatlog lazy loading and scrollbar position memory. (12419)
- Chat notifications now fall back to showing a pip as expected if there is no space for the message in the notification area. (12458)
- Notes Layer Control buttons now have order attributes. (12474)
- Corrected a bug that caused Application V2 instances to become 'squished' in cases where the window rendered from a minimized state with no available space to occupy. (11232)
- Corrected a bug which caused the Region Configuration to discard unsaved changes when adding or removing Shapes or Behaviors to the Region. (11606)
- Line breaks on interface buttons no longer result in excessive spacing around button label text. (12285)
- Fixed a bug with the display of ProseMirror toggle buttons (and possibly other buttons) inside DialogV2 which could cause the content to render unexpectedly at full-width. (12197)
- The Playlist sidebar tab now updates as expected when creating or deleting sounds. (12478)
- Adding a song to a playlist automatically draws the track name from the filename if no track name already exists. (11602)
- Playlists now play using UUID instead of ID to identify sounds, correcting for issues (including display of play time) that resulted from cloned playlists. (12414)
- Corrected an issue that caused playlists not to use their configured fade values. (11856)
- The ProseMirror HTML source editor no longer allows saving of changes after it has been disabled. (11767)
- The display of drawn results for Rollable Tables received a visual update to add some clarity indicating their drawn state compared to non-drawn. (12447)
- The Reset Defaults button on the Default Drawing Config no longer fails with a validation error. (12460)
- It is once again possible to remove HTMLDocumentTagsElements by clicking the 'x' on their label. (12486)
- webrtc._refreshView and AVConfig._prepareContext no longer fail with errors. (12499)
- pointermove/pointerleave listeners once again work as expected for readonly/disabled elements.  (12501)
- The class NewUserExperience no longer leans on the deprecated renderChatMessage hook. (12267)
- The world login screen no longer displays an error message resulting from another user logging in. (12455)
- The radioBoxes HandleBars helper now generates radio inputs as expected. (12456)
- Removed a redundant manual redirect from Game#shutDown that caused an issue where clicking Return to Setup could navigate to an invalid host address when using a proxy server. (12483)

`showPopover()``pointer-events: none``Input``disabled``#sidebar-content``.active-chat``ChatLog``order``HTMLDocumentTagsElement``webrtc._refreshView``AVConfig._prepareContext``pointermove``pointerleave``NewUserExperience``renderChatMessage``radioBoxes``Game#shutDown`
### The Game Canvas

- Canvas placeables can now be copied and pasted between scenes again. (12535)
- Lights on tokens using sound reactive pulse animation no longer reset their animation when moving or dragging. (12413)
- Darkness Sources are now rendered properly for players when Token Vision is disabled for the Scene. (12392)
- The Default Smoothing Factor of the Default Drawing Config is now 1 instead of 0. (12459)
- ChatBubbles#say and ChatBubbles#broadcast now properly resolve regardless of message length. (12462)
- "Modify Movement Cost" Regions now correctly account for diagonal pathing. (12481)

`ChatBubbles#say``ChatBubbles#broadcast`
### Package Development

- The Module Configuration Application now handles cases where the module has relationships that are not currently installed. (11550)
- Addressed some sizing issues with buttons in the Module Configuration application. (11551)


### Dice and Cards

- Inline rolls in chat messages now respect and display labels again. (12482)


### Localization and Accessibility

- ActiveEffectConfig now use the correct localization path for (combat) rounds. (12470)
- Corrected an issue which caused top-level fields within a TypedSchemaField to be pre-localized but not their inner elements (such as TypedObjectField). (12472)

`ActiveEffectConfig``TypedSchemaField``TypedObjectField`
## Documentation Improvements

- API Documentation {@link}s now include the full namespace of their target if they link to a member that is not inside the class. (12433)
- Corrected some documentation errors in DataModelValidationOptions. (12491)
- To aid community developers, this and future releases of Foundry VTT will now include our project-level tsconfig.json. (12366)

`{@link}``DataModelValidationOptions``tsconfig.json`