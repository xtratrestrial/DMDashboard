# Release 0.8.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.97

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.7


## Version 8 Stable


##### June 15, 2021


## Foundry Virtual Tabletop - Version 0.8.7 Update Notes

Hello Foundry Virtual Tabletop community! We are excited to release Foundry Virtual Tabletop version 0.8.7 as a subsequent stable release in the version 8 series of updates. Our focus in version 0.8.7 was to resolve bugs that have been reported since the 0.8.6 release and to continue polishing the feature set of this major version to be more user friendly.

WARNING: Version 0.8.7 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.


### Update Overview

In addition to bug fixes and minor UX improvements, there are two significant features included in this release.


#### User Passwords

Firstly, in response to well-reasoned feedback provided by the community we have switched from a mechanism of informal "access keys" used to control player access to game sessions to a system of hashed passwords which provide a stronger level of security for allowing players to join an active game. When an existing World is first loaded in 0.8.7, the old player access keys will be replaced with hashed and salted passwords. The base value of that password remains the same, so your old access keys will continue to work unless you choose to change them.

We recognize that this increase in security is offset by some reduction in convenience for Gamemaster users. We will be looking into methods in the future to make it easier for GMs to log in as a player account for testing without needing to provide the User's password as well as a new interface allowing Users to manage their own password without requiring the Gamemaster to set it up on their behalf. These changes were too sweeping to be included in 0.8.7, but will be part of our prioritization for version 9.


#### Audio/Video Conferencing

Secondly, due to incompatibilities of the EasyRTC library with other key dependencies used by Foundry Virtual Tabletop we have needed to redesign the default Audio/Video chat solution to instead use an alternative WebRTC framework called simple-peer. Like easyrtc before it, simple-peer relies on direct peer-to-peer connections to establish audio and video conferencing, but it does so without the reliance on a built-in signaling server. Instead we re-use the existing web socket infrastructure that Foundry VTT already provides to provide basic signaling services that help you establish A/V connection with your fellow users.

This change restores Audio/Video conferencing to working order and we have seen good performance of this solution in our internal testing. Since this solution uses a new mechanism for managing A/V connectivity there is likely to be a stabilization period during which we will prioritize continued fixes and improvements in response to community feedback. Thanks to bekit#4213 for proposing simple-peer as a potential easyrtc replacement and providing a helpful proof-of-concept to illustrate the design.

`bekit#4213`
### Breaking Changes


#### Architecture & Infrastructure

- The EasyRTC library has been deprecated due to incompatibility with other required Foundry dependencies. EasyRTC has been replaced with the simple-peer library for facilitating audio/video conferencing using a serverless design that leverages the existing Foundry VTT socket infrastructure for brokering connectivity between users.


### New Features


#### Architecture & Infrastructure

- We have replaced the prior system of informal "access keys" for managing User access to an active World in favor of hashed (and salted) passwords which provide a heightened level of security for your Foundry Virtual Tabletop game server.
- Fixed a concurrency issue that resulted in an increase in the number of requests sent when opening the "Install Package" UI which was contributing to website slowdowns.


#### Interface and Applications

- Added link to updated packages in the Update Log
- Installing or updating a module with a dependency should now indicate which module depends on it.
- The maximum font size for text in Drawings has been increased to 256px, up from 128px.


#### Dice System

- Whispered rolls have been returned to the workflow of always displaying that they were "rolled privately" for any User that does not have permission to view the content of the roll-type Chat Message.


#### UI and UX

- The "Check Update" button in the Setup and Configuration interface has been renamed to simply "Update" to reflect a more direct package update workflow.


#### Other Changes

- Core translations may once again include CSS that contains external references.


### Bug Fixes


#### Architecture & Infrastructure

- Due to internal instability in its multiplexing implementation, we have needed to roll-back the addition of the SPDY protocol for serving files via HTTP/2 directly through the Foundry VTT web server. We will continue to search for improvements in this area in the future, but that will likely rely upon a custom implementation of the HTTP/2 library which will require more extensive effort to accomplish. This change resolves an issue where simultaneous requests to many resources would result in a noticeable slowdown of the Foundry VTT software when SSL certificates were provided to the server configuration.
- Removed the requirement that setup requests have the same host origin, bringing it back in line with 0.7.x behavior.
- Fixed an error that resulted from installing a new dependency package for an existing package.
- Stopped modules which declare a specific system (or systems) from showing up within the Module Management view for a World that doesn't use that system.


#### Documents and Data

- Documents which fail their own data preparation workflow will now still appear in the sidebar and in the world Collection for their document type, better enabling the user to correct the problem with that data structure.
- Fixed an issue where players with permissions to create measured templates could not edit the configuration of a template that they had created.
- Corrected an issue where resetting permissions under certain circumstances would lock a GM out of setting any permissions.
- Improved fade timings for sounds which loop, and removed fading for looping of that track to improve overall looping quality, and prevent issues where very short sounds would not properly loop.
- Expanded the set of tags and properties allowed by server-side HTML sanitization to no longer strip semantic tags like aside and others.
- Resolved an issue where the ActiveEffectConfig sheet continued to reference the deprecated entity property instead of referring to the newer parent document.
- Ensured that ActorData initialisation appropriately updates the PrototypeTokenData source.
- Fixed bug that caused incorrect thumbnail generation for scenes using tiles.
- Corrected an issue with the "Export to Compendium" workflow at the Folder level which caused exported documents to not fully overwrite their upstream targets in the compendium pack.

`aside``ActiveEffectConfig``ActorData``PrototypeTokenData`
#### The Game Canvas

- Addressed a long-existing issue with fog of war which, for very large maps with odd-sized pixel dimensions, could result in the appearance of fog of war becoming offset from the location of actual walls. We hope it's really fixed this time!
- Removed default coloration from light source shaders which implement their own custom illumination shader. This fixed an unintentional change to some shaders (like the torch) which caused color to be applied to their appearance even if the light source color was omitted.
- Switching scenes between one with darkness and one without now properly resets the displayed darkness level to that of the newly viewed Scene.
- Corrected an issue where tokens with 0 vision range could not be reselected by players if they had released the token.
- Resolved a visual glitch caused by selecting two tokens, one of which has a vision radius while the other does not.
- Corrected the visibility of door control icons underneath Overhead Roof tiles for GM users without a specific Token selected.
- Fixed an issue where Occlusion (Fade) setting would not work correctly if a token is adjacent to the overhead tile.
- Overhead tiles using radial occlusion mode should now respect the configured tile transparency for the non-occluded region.
- Image-less overhead roof tiles no longer cause the scene to become unusable.
- Corrected a bug in the CanvasAnimation class that was causing animations to become unstoppable.
- Triggering a second token update while a token's movement is animating no longer causes the token to arrive at the incorrect coordinates.
- Tiles that are moved to the overhead layer via the tile dialog no longer react to the movement of background tiles.
- Fixed a bug that was resetting textbox opacity, allowing opacity to once again be set to 0.
- Updated text drawings so that they do not receive an outer border by default.
- Corrected an issue where switching scenes would not properly clear filters, resulting in a very large number of filters in canvas.blurFilter.
- Automatically un-focus the Token HUD input elements when pressing the Enter key to submit a change, resolving an issue in Firefox that prevented a Token from being able to move after a change was entered.
- Corrected an error occurring if the GridLayer is set as active and then the canvas is reloaded.

`CanvasAnimation``canvas.blurFilter``GridLayer`
#### Interface and Applications

- Fixed a bug where using the tinyMCE save button when creating a new world resulted in a partially created world.
- Removed processing of dynamic document links from the World Description field.
- Fixed an issue where edited world data would not be present on reload.
- Fixed an issue with the HTML element ID having incorrect values for the RollTableConfig sheet.
- Corrected an issue that resulted in an error when saving a scene config after changing the initial view position.
- Folders with over 1000 files should now display correctly when viewed in the FilePicker interface.
- Fixed an issue where default token configuration was not correctly applied to actors dragged directly from a Compendium onto a Scene.

`RollTableConfig`
#### Dice System

- Ensured that immediately evaluated inline rolls in chat messages have their result properly stored in the persisted document, preventing different results for each player that sees it.
- Stopped PoolTerm.fromData from doubling the number of dice from each constituent roll.

`PoolTerm.fromData`
#### UI and UX

- Ensured that if the "Install Module" dialog box is closed before module installation is finished it will remain closed.
- View Character Artwork or View Token Artwork should no longer show the name of the Actor/Token to players who do not have permission to see it.
- Importing Data for Actors will no longer reset tracked resource bar attributes to system defaults.
- Long audio playlists no longer have their context menus appearing outside of the visible area.
- Moving the position of a door wall segment now correctly moves the icon as well.
- Corrected an issue where alt+mouse controlled/released walls remained referenced behind the scenes resulting in unintended changes.
- Tiles flipped by setting their width/height to a negative number no longer cause the tile to go outside of its frame.
- Changed privately rolled tables to display a "privately rolled" message to users without permission to view the results.
- Setting Scene accessibility to "All Players" will no longer provide them with ownership permission to the Scene.


#### Other Changes

- Corrected an issue where changing Voice Broadcasting Mode from Push-to-talk would not be applied until a reload took place.
- Fixed an issue where it was possible for a popped out camera frame to get stuck "off-screen" and have that position saved, becoming inaccessible.
- Adding/removing a macro from the hotbar no longer causes camera views to flicker.
- Ensured that a floating Combat can once again open combatant Actor sheets after reload.
- Stopped combatants which do not reference a valid Actor causing errors in the combat tracker.
- Fixed an issue which led to the base Actor artwork being used to represent Combatants rather than the Token's artwork.
- Core translation modules with external URLs will no longer generate Bad Request 400 errors.


### API and Documentation Improvements


#### Documents and Data

- Corrected an issue where management of embedded documents within an unlinked token Actor would incorrectly use base class definitions defined in Actor metadata instead of the class implementation configured by the client.
- Corrected an issue where a null scene return would cause ChatMessage._getSpeakerFromToken to receive an unhelpful result, causing it to lose the original token.
- Calling unsetFlag on a nested property will no longer create bad data.
- Updating the Combatant#data#defeated now properly alters the display of the combat tracker.

`scene``ChatMessage._getSpeakerFromToken``unsetFlag``Combatant#data#defeated`
#### The Game Canvas

- Improved the variable naming of places where getGridPositionFromPixels is called to more clearly denote that it returns rows and columns as opposed to x/y pixel coordinates.
- Fixed TokenDocument.getBarAttribute failing on string values when evaluation of Number.isFinite() returns false for a string.

`getGridPositionFromPixels``TokenDocument.getBarAttribute``Number.isFinite()`
#### Interface and Applications

- Stopped FormApplication subclass validation from getting tripped up by comment strings prior to the opening formtag.
- Fixed an issue where ActorSheet#_onDropFolder fails to complete under all circumstances due to looking up a non-existent property.
- Removed an unused parameter from the CameraViews constructor, and updated documentation to reflect this change.
- Added a namespace to the Chat keydown handler, allowing multiple modules to unbind the entire 'keydown' event handler space without overriding each other.

`FormApplication``form``ActorSheet#_onDropFolder``CameraViews`
#### Documentation

- Rewrote the homepage of the API documentation to reflect the latest state of the code and documentation and updated its appearance to match Foundry's main site.
- Ensured that the constructors for Item and Actor client-side classes correctly document their parameters.
- Corrected a leftover bit of legacy code leading to an inconsistency with viewedScene in the UserData.

`viewedScene``UserData`