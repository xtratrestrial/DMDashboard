# Release 13.346 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.346

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.346


## Version 13 Stable


##### June 26, 2025


## Foundry Virtual Tabletop - Version 13 - Stable 5 Release Notes

Since the arrival of Version 13 Stable in late April, we've released a steady series of minor patches to help refine it. In that vein, Version 13 Stable 5 contains a collection of important but relatively undramatic improvements and bugfixes.

Notably, we anticipate that today's release will be the last (or one of the last) of these "patch" releases. As proud as we are of Version 13, we are extremely eager to turn our full attention to the next major generation of Foundry VTT.

Both the Patreon poll winner (core "pop out" application windows) and "Scene Levels" (enhanced verticality for Scenes) are features that have long been eagerly anticipated by Foundry VTT staff and users alike. With work starting in earnest on Version 14 soon, these features begin to become reality. Stay tuned!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

While this release makes modest changes, there are two items that we would like to call some additional attention to.

`assets``assets`
## New Features


### Applications and User Interface

- Added a double-confirmation check before you are allowed to change the server admin-password. (11206)
- Improved Roll Table embeds to use Handlebars templates. (12432)
- To help users upload files more easily, added automatic creation of  Foundry User Data root-level assets folder and help users find and use it. (12897)
- Added support for using SVG icons for movement modes in addition to or alternative to Font Awesome icons. (13032)

`assets`
### Package Development

- Enhanced the integrated Module Maker so that new modules are always created with a flags object and so that users can add files to them more easily. (12538)

`flags`
### Localization and Accessibility

- Added experimental, opt-in support for alternative keyboard layouts other than QWERTY. The default keyboard behavior has not changed. (11047)
- Updated the EFFECT.DurationTurns and EFFECT.StartTurns localization strings to clarify they are related to combats rather than turns. (13000)

`EFFECT.DurationTurns``EFFECT.StartTurns`
## API Improvements


### The Game Canvas

- Added support for custom (non-median) movement cost aggregation for larger tokens. (11886)
- Migrated Actor##requestTokenImages functionality so that it now uses the FilePicker API. (13079)

`Actor##requestTokenImages``FilePicker`
### Other Changes

- Added a new hook (renderChatInput) that is now called when the chat input is re-parented. (12719)
- Added a new tab render option to ApplicationV2 and improved tab handling overall so that you can now specify an initial tab. (12809)

`renderChatInput``tab``ApplicationV2`
## Bug Fixes


### Architecture and Infrastructure

- Fixed a bug where it was impossible to chain walls when certain hardware peripherals (like gamepads or HOTAS) were present. (13082)


### Documents and Data

- Fixed a bug where Journal pages were not accessible after using TinyMCE. (12877)
- Fixed a bug with wildcards and made them more reliable. (12885)
- Fixed a bug where journal text page sheets got "stuck" in foundry.applications.instances even after they were closed. (12978)
- Updating a folder inside a compendium once again correctly causes the compendium to re-render. (12993)
- Prevented an error that occurred when minimizing a popped-out Combat Tracker dialog in a world with no combats. (12996)
- Improved document ownership sanitization so that its more tolerant of no-diff updates. (13025)
- Fixed a bug where unsaved Actor clones had empty _dependentTokens maps. (13038)
- Prevented document updates with diff: false, recursive: false from clearing _stats.createdTime, _stats.compendiumSource, _stats.duplicateSource, and _stats.exportSource. (13057)
- Fixed a bug where Combat##triggerTurnEvents passed context incorrectly. (13085)

`foundry.applications.instances``_dependentTokens``diff: false, recursive: false``_stats.createdTime``_stats.compendiumSource``_stats.duplicateSource``_stats.exportSource``Combat##triggerTurnEvents`
### Applications and User Interface

- Fixed a bug where chain-creating wall segments stopped working after undoing a wall. (11453)
- Fixed a bug where the ProseMirror font menu items could be inaccessible if the menu was larger than viewport. (11966)
- Resolved an edge case bug where searching within a sidebar tab did not properly expand a folder if the search string was a substring of the folder name. (12369)
- Fixed a bug where the toggle button for a toggled ProseMirror editor was always visible, even when not hovered. (12586)
- Resolved an issue where a folder's droptarget hover state wasn’t cleared when a drag-dropped document was released on the canvas. (12654)
- Fixed a bug where the chat log was not always scrolled down fully upon login if the scroll height was changed. (12733)
- Fixed a bug where the "encounter counter" at the top of the combat tracker was the wrong color when there were more than eight combat encounters. (12872)
- Fixed a bug where Main Menu could escape the #interface element upon rendering. (12936)
- Resolved an issue where maximizing an ApplicationV2 app from a minimized state could cause incorrect behavior depending on where the window header was double-clicked. (12937)
- Fixed a bug where the content links in ItemSheetV2 inside disabled ProseMirror elements could not be clicked, such as inside locked compendiums. (12947)
- Fixed a bug where double-clicking a popped-out Directories, Chat, or Encounter tab did not minimize it. (12948)
- Fixed a bug where ContextMenu could require two clicks to open in some circumstances. (12979)
- Improved the process of creating a new folder by auto-focusing its name input. (12985)
- Resolved an issue where chat notification cards did not update if the card was updated immediately after it was created. (12988)
- Improved styling of the Show Players button text when using the Light theme. (12994)
- Resolved an issue where the Show Players button was accidentally revealing name information to players who did not have adequate permissions for the originating content. (13020)
- Restored functionality to the push to talk button. (13028)
- Fixed a bug where the pack name in the Delete Compendium dialog header was not localized. (13061)
- Re-rendered chat notifications once again have a close button. (13065)
- Prevented tour steps with no selector from rendering partially off-screen for screen sizes under 960px vertical height. (13069)
- Fixed a bug where players could not edit playlists, regardless of permissions. (13075)

`droptarget``#interface``ApplicationV2``ItemSheetV2``ContextMenu``name`
### The Game Canvas

- Fixed a bug where TokenDocuments could sometimes not be deleted when their synthetic Actor was invalid. (11908)
- Fixed a bug where the isOwner getter could return an incorrect value for TokenDocuments embedded in compendium Scenes. (12844)
- Prevented an infinite loop error that could occur when attempting to drag tokens in certain situations. (12992)
- Prevented an error that could occur when updating a token's dimensions when the new token size clipped a scene region. (13018)
- Fixed a bug where RegionDocument#teleportToken was not preserving the ID of the token when teleporting between different scenes. (13022)
- Fixed a bug where getAdjacentCubes did not return the cube coordinates of the grid spaces above/below the provided coordinates in 3D space for hexagonal grids. (13026)
- Fixed a regression in Token##createAnimationMovementPath that was causing unexpected behavior or errors when a token moved into a region with a Modify Movement behavior. (13041)
- Added support to help determine if a movement was constrained (stopped) rather than successful (completed), including a new stopToken hook. (13043)
- Fixed a bug where pending movement was not cleared when a token's movement was stopped. (13044)
- When a new movement is started for a token that is already in movement (for example, if another user attempts to move it also), any pending movement is now correctly stopped. (13045)
- FogManager#isPointExplored no longer returns incorrect results for loaded fog textures in large scenes. (13046)
- Fixed a bug where FogManager#sync did not initialize FogManager##explored, resulting in all FogManager#isPointExplored calls to return false until the browser was reloaded or the fog was updated. (13070)
- Fixed a bug where the Token Animates In event did not fire the moment the token animated within the region, but rather when the token animated out of it or stopped. (13076)
- Prevented the Dynamic Token Ring effects property from disabling the dynamic ring when set to zero. (13086)

`TokenDocument``isOwner``TokenDocument``Scene``RegionDocument#teleportToken``getAdjacentCubes``Token##createAnimationMovementPath``stopped``completed``stopToken``FogManager#isPointExplored``FogManager#sync``FogManager##explored``FogManager#isPointExplored``effects`
### Package Development

- Added the ability to see module compatibility checks when the --noupdate startup flag is present, making this feature available to people who are using one of our official hosting partners. (11024)
- Documented missing properties in InstallPackage.getTaggedPackages(type). (13007)
- Hardened the Setup screen against the (now invalid) data from very old worlds. (13063)

`--noupdate``InstallPackage.getTaggedPackages(type)`
### Localization and Accessibility

- Added localization for the title of compendium pack Configure Ownership dialogs. (12949)


### Other Changes

- Improved the behavior of disabling form or fieldset elements to appropriately disable child elements when the parent element is disabled. (11564)
- Relaxed the FormDataExtended check for descendant elements of disabled fieldsets to match browser logic. (11610)
- Fixed an issue where ProseMirror was overly aggressively stripping styles when font-family was present. (12428)
- Resolved an issue where AsyncWorker#loadFunction did not account for many valid JavaScript identifiers. (12869)
- Prevented the addition of an extraneous "null" text when toEmbed was passed certain parameters. (12935)
- Fixed season identification in CalendarData#timeToComponents in cases where the day or month range for the season spanned the turn of the year. (12987)
- Prevented an error thrown while drawing a card to an empty pile. (12999)
- Fixed a bug where the DataModel#validate arguments could be incorrect when updating prototype tokens. (13021)
- Prevented the footer of PermissionsConfig from being hidden on smaller viewports. (13087)

`form``fieldset``FormDataExtended``fieldsets``font-family``AsyncWorker#loadFunction``toEmbed``CalendarData#timeToComponents``DataModel#validate``PermissionsConfig`
## Documentation Improvements


### Other Changes

- Improved various Document-related API documentation. (13001)
- Improved various Hooks-related API documentation. (13002)
- Improved various Texture-related and Shader-related API documentation. (13003)
- Improved various Sound-related API documentation. (13004)

`Document``Hooks``Texture``Shader``Sound`