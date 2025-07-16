# Release 0.8.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/8.95

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.8.6


## Version 8 Stable


##### May 31, 2021


## Foundry Virtual Tabletop - Version 0.8.6 Update Notes

At long last, and with great pride, I am pleased to welcome you all to Foundry Virtual Tabletop release version 0.8.6. This is the first stable release in the 0.8.x series of updates, and represents a major version update bringing to a close 5 months of updates including almost 650 individual features, changes, or bug fixes. As exciting as this update is, I'd like to take this time to encourage you to make sure you heed our usual warning and backup your game data before updating.

WARNING: Version 0.8.6 is labeled as a stable release, but it includes a tremendous number of new features. Some game systems and modules have not yet been updated with compatibility for this new version. You may wish to verify the status of systems and modules that you depend on prior to updating. As always (but especially for a major update like this one) please back up your game data before applying this update.


### How to Upgrade to 0.8.6

If you are hosting Foundry VTT as a dedicated server via NodeJS and already using Node 14+ you can simply update in place by selecting Release and choosing to update via the setup menu.

The upgrading process is a little different this time around as this major version brings significant changes to the core software itself, including an update to Electron and NodeJS. To update to 0.8.6 requires a full reinstallation of Foundry Virtual Tabletop. Please take the following steps to upgrade:

- Backup your user data.
- Using the tools appropriate to your operating system, uninstall Foundry VTT.
- Download the latest stable (0.8.6) from the Foundry VTT website as indicated in the picture to the right.
- Install the new version of Foundry VTT. (see our Installation guide)


### Overview of New Features for 0.8.x

The 0.8.x update sequence was focused on two primary user-facing features: Audio System Improvements and Overhead Tiles.

Before starting work on those two major features, major infrastructural investments were required to reinforce and empower the software architecture upon which further enhancements will be built. The end result was the creation of the "Common Document Model" which provides a renovated set of abstractions for documents, data schema, database operations, and much more. This is a major step away from the legacy concepts of "Entities" and "Embedded Entities". A byproduct of the improved Document model is a significant improvement in the flexibility and reusability of the Document API - which is especially evident in areas like Compendium documents or un-linked Token Actors which were previously difficult to work with.


#### Overall Architecture, Infrastructure, and Data improvements

0.8.x brought a large number of infrastructural changes to the software, and now uses NodeJS 14.x, Electron 12.x, and has received updates to a number of its underlying libraries. Support was added for HTTP2 which increases server side performance and networking transfer rates through the SPDY protocol (provided SSL certificates are enabled). In addition to these software-level changes, 0.8.0 ushered in a comprehensive and standardized Document schema for the API which brings a lot of power to already existing features and adds a lot of new features for community developers. The overall benefit of these changes is a more performant program with a much more consistent API.

In addition, package installation for modules, game systems, and worlds saw marked improvements in both UI and backend handling. These changes brought enhancements in the form of a new "lock" feature set that prevents packages from being updated, and extensions to how the installation workflow operates, providing better support our community developers. Foundry VTT now also maintains a cached copy of all packages for a short duration, allowing for a faster review of available packages to install. Not only can users now receive update notifications for when a game system has an update available, updating all modules now displays a summary view of the updates received, bringing an overall richer package installation experience.

The implementation of the new data model presented a lot of opportunities to improve handling of data storage. Methods were added that allow for editing of embedded items within actors in compendiums, permissions for documents stored in world-level compendiums are now retained, and compendium data is now cached for a short duration in memory allowing a much more streamlined performance for repeated compendium interactions. Changes to database workflows improved overall performance and removed a number of possible stumbling blocks that showed up as bugs in 0.7.x, including the "ENOENT" errors related to database maintenance on worlds with large database files. In addition, "Token Defaults" were introduced as an item on the settings menu, allowing for configuration of default token settings which apply to all newly created actors.


#### Audio Improvements

One of the major themes for 0.8.x saw a complete overhaul of the audio engine used by Foundry Virtual Tabletop. Howler.JS was replaced entirely by the new modern WebAudio API which is native in all modern browsers and by doing so there were signifcant gains in both performance and stability for Ambient Audio and Playlists. This new API provides a lot of powerful functionality that we're sure a lot of our community developers are already scheming to make use of. Audio playlists can now fade smoothly between transitions with a fade duration that can be configured at either the playlist or track level. Sequential and shuffled playlists have had their handling logic improved, allowing more convenient track skipping and better shuffling. Scenes can now designate a specific playlist sound to play- not merely a full playlist. We implemented a new bulk import feature for playlist creation that allows you to add all the tracks within a folder in your userdata to a single playlist for rapid creation. Lastly, we gave the playlists UI a new coat of paint, adding support for folders for better organization of playlists, a more visible indicator of currently playing tracks, context menus for tracks and playlists, and improved controls that free up screen space among many other UX improvements.

In addition to all this support for Playlists, Ambient Audio sources were extended with a new activation threshold system that allows for setting ambient audio sources which only trigger when the scene is between a certain darkness level, and can also be toggled on or off with a simple right-click. We also paid walls a visit with regard to ambient audio, and gave them the ability to restrict sound as well as the existing sight and movement restrictions. Lastly, we added a convenient preview mode for audio so that GMs can get a preview of volume and easing for Ambient Sounds without the need for a hidden testing token. We hope this ushers in a new era of audio-rich games for everyone!


#### Overhead Tiles, Lighting, and Canvas

Another major theme and specifically the one voted for by our patreon subscribers ushered in some fantastic new features for the canvas. The Tiles layer has been split into Underfoot and Overhead, allowing the placement of tiles which are rendered above tokens. Overhead tiles can be used to represent tree canopies, bridges, hanging vines, spider webs, or any other objects that might obscure vision of a token below it while using a method of occlusion to keep the tokens visible for their users. In addition to both the ability to have tiles automatically become transparent as a whole, or in just a small radius around the token, we were able to implement a Roof occlusion mode which obscures tokens, light sources, and weather effects beneath them while maintaining a view of only the outer walls of the tile. In addition to all the UI changes needed to support that, we added a "Foreground" layer to map scenes which map makers can use to provide a layer that will be rendered atop everything else, allowing for the provision of things like walls and shadows which are never obscured but always appear above tokens. These changes to the canvas and tiles layer also afforded us the opportunity to add some new controls for video tiles, and extend the Tint function that was previously only available for tokens to the tiles layer as well.

While we were working on the canvas, we took the opportunity to implement some other features particular to the canvas. We extended the same activation threshold mechanism from Ambient Audio sources to Ambient Light, allowing for light sources to only be on at certain darkness levels or only active during the day instead. Significant improvements were also made to light and vision rendering, increasing both performance and stability in all cases.

Our work in other areas made it possible to make some pretty great changes to the way the Canvas functions for map rendering. We've changed the logic used for rendering of light and vision in the canvas padding area that occurs around the background image, and it is now considered permanently unexplored for all tokens, allowing the GM a convenient area to place tiles and tokens out of sight of the players for quick access without giving anything away to the player eye. We also added a little visual indicator to more clearly mark the boundaries between map edge and canvas padding. We've also introduced a new "No Canvas" mode which disables rendering of the canvas for users who don't require the renderer used for vision, lighting, and the canvas as a whole- this allows users to still see their character sheets, and make dice rolls even if their computers may not be able to handle the advanced lighting features of Foundry VTT.


#### Dice Rolling and Chat

It may come as a surprise to some of you that even after the comprehensive changes to dice in 0.7.x, 0.8.x saw a pretty significant rework of the dice API. Not only did we introduce a few new Dice Modifiers, such as min, max, counting evens and odds, and recursive rerolls, we also completely rebuilt the dice parser to make it far more reliable and prevent edge case errors. These new changes afforded us the opportunity to add some new functionality in descriptive roll expressions (such as /r 10[fire damage] + 2d8 [lighting damage]) and make those descriptions applicable to any dice roll, math formula, or dice pools. Since we were already working in the area of chat messages, we decided to extend the functionality that allows sidebar tabs to be popped out on right-click to the chat window: so you can pop the chat window out with a right click now as well!


#### Other Changes

We improved and renamed a number of key features in the UI for improved clarity on their meaning, including renaming Global Illumination to Unrestricted Vision Range. The Reset Active Modules function in world editing has been renamed to Launch in Safe Configuration and in addition to disabling all active modules it now also deactivates any playlists and the current active scene to allow for a safe recovery of data if something goes very wrong with the rendering of the audio or canvas. We gave our main UI a bit of a touch up with regard to worlds, game systems, and addon modules and it's also now possible to edit your world to set things like the next session date and time, as well as the world login screen or description, from within an active world. We improved a lot of error messages for clarity, added a lot of localization for easier translation of portions of the software that were previously not translatable. We've also added another 1500 categorized and named icons to our icon library bringing the total to 5500. We've made improvements to nearly every part of the software, including general bug fixes and so much more!

As of 0.8.6 Stable, the 0.8.x series introduces over 150 new features to Foundry VTT, touching every aspect of the software! The following is a comperehensive list of changes introduced in each subsequent update from 0.8.0 through 0.8.5. Where possible, we have condensed and summarized these to only outline the major features. For the full list, please see:


#### 0.8.x Comprehensive Release Notes

- Alpha 0.8.0
- Alpha 0.8.1
- Alpha 0.8.2
- Beta 0.8.3
- Beta 0.8.4
- Beta 0.8.5


## 0.8.6 Stable Release

As the first stable release for 0.8.x, this update focused on smoothing out any final critical bugs discovered during the testing period for beta 0.8.5 and cementing stability to ensure a positive experience for the general userbase. In addition, it implements a few minor API improvements and a couple of small features deemed safe enough to add during a stable period.


### Known Issues

Due to an upstream bug in the Open-EasyRTC library Foundry VTT uses for handling peer-to-peer video and audio chat connections, the default AV Chat Integration is presently non-functional. We are actively working to resolve this, but we are sorry to report it may be some time before it is resolved. This will not affect those using alternate AV solutions such as the Jitsi integration module. For questions regarding this or details about this issue as we work toward resolution, please see: https://github.com/foundryvtt/foundryvtt/issues/5070.


### New Features


#### The Game Canvas

- Measured Templates can now accept video files such as mp4 and webm as textures.


#### Interface and Applications

- In order to allow some additional functionality for IOS 14.x experimental users, a new web-app-capable meta-tag is now included in FoundryVTT pages. This allows creation of a virtual app from a Foundry VTT Bookmark.
- The submit button for the Map Note configuration window now differentiates between Create and Update.

`web-app-capable`
### API Improvements


#### Documents and Data

- Context menu hooks (get*EntryContext) should now be called for base classes as expected.
- Corrected an issue which could causegetDocument to not raise an exception or return null when passed a null/undefined id.
- fromUuid should now fail gracefully if one of the components in the UUID cannnot be found.

`(get*EntryContext)``getDocument``fromUuid`
#### The Game Canvas

- Added a new core.isTilingSprite boolean which allows the TilingSprite constructor to be used for tiles. For more information please see: https://github.com/foundryvtt/foundryvtt/issues/5186 .
- Canvas.animatePan should now return the promise from CanvasAnimation.animateLinear so that sequential pan animations can be scheduled.
- Canvas._constrainedView() should now correctly handle the vertical axis stage.pivot.y parameter.

`core.isTilingSprite``TilingSprite``Canvas.animatePan``CanvasAnimation.animateLinear``Canvas._constrainedView()``stage.pivot.y`
### Localization Improvements

- Added localization for several strings that were previously not localized. For a full list please see: https://github.com/foundryvtt/foundryvtt/issues/5191


### Bug Fixes


#### Documents and Data

- To correct for duration issues related to Active Effects for non-actor entities, an ActiveEffect's start time is now only set at creation if the owner is an Actor.
- The path chosen for Token wildcard images should no longer be incorrectly reset when configuring a Prototype Token.
- To avoid cases where closing comments on a script macro could cause syntax errors, all script macros now have a have a forced new-line character appended at the end.


#### The Game Canvas

- It is now possible to move multiple selected Tiles between the Underfoot and Overhead layers, as intended.
- The grid alignment tools should no longer reset the map scale to 1 between uses, and should now correctly remember the previously configured map scale.
- Resolved an issue related to lighting layers which caused lighting colour saturation and intensity for Ambient Light Sources to appear substantially different from 0.7.x light sources.
- Global and Universal darkness sources will no longer count as contributing LOS polygons towards what the player can currently perceive.
- In the interest of consistency, the Color Intensity setting for Token Vision now uses the same default values as Ambient Light Sources.
- Drawing tools will no longer treat Line Opacity 0 as Line Opacity 1.


#### Interface and Applications

- The package installer should now fail more gracefully in cases where an invalid license is used or the packages list comes back as undefined for any other reason.
- Ensured that installing or updating a game system will properly expire the package cache for Worlds, so that they will not have the same cached compatibility tags, preventing further updates.
- Installing or updating a game system should now properly expire the package cache for Worlds, so worlds display the correct compatibility tags.
- When installing a package that has declared dependencies, the additional required packages should now be installed as expected.
- Launching a world after another world was previously deactivated now correctly handles authentication for requestSetupData and should no longer prevent world loading.
- Corrected issues with left-click interaction with combatants in the combat tracker that was preventing left-clicks on combatants from controlling them and panning to their location, as intended.
- Deleting combatants with an initiative place before the current combatant will no longer stop the combat turn from advancing properly.
- Deleting the last combatant in a combat encounter should no longer result in a thrown error as a result of attempting to move to a negative turn number.
- Tracked resources for unlinked tokens in the combat tracker are once again updated in real time, and no longer incorrectly wait for the initiative tracker to update.
- Corrected a UI issue where changing sidebar tabs while a scene was loading could result in the tabs being incorrectly loaded on top of one another.
- Headers on forms which previously had no provided user-facing title should now have a more descriptive title. For example, creation of a map note will no longer say Map Note: Null, but instead say "Create Map Note."
- Corrected an error thrown when modifying users on the User Management panel, as a result of ui.nav returning an unexpected undefined.
- The /stream view will properly receive get new chat messages.
- Ensured that a dynamic document link to a Compendium entry will correctly use an override to the displayed name instead using the document name.
- Players should once again be able to create Map Notes from journal entries they own if they have been given the appropriate permission from the permission configuration menu.

`requestSetupData``ui.nav``/stream`
#### Dice System

- ChatMessage#roll should now throw an informative error message if the provided chat message does not contain a dice roll.

`ChatMessage#roll`
#### Documentation

- The 0.8.x API documentation is out of alpha and has replaced the 0.7.x API documentation previously located at https://foundryvtt.com/api/

