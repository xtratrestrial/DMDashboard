# Release 9.226 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.226

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.226


## Version 9 Development


##### October 13, 2021


## Foundry Virtual Tabletop - Version 9 Development 1 Release Notes

Hello everyone, we are excited to share our continued progress on Foundry Virtual Tabletop Version 9 with this "Development 1" release that brings API and functionality improvements based on testing feedback from our first two V9 prototype releases.

The major features of Foundry Virtual Tabletop V9 are the new Adaptive Lighting system and Card Support. In this release we have improvements and bug fixes for both new features that continue progressing them towards a stable release. In addition to these main themes we have added a few new features including a redesign of the Scene Configuration application, an improved interface for game invitation links that allows you to test your connection, and overall UX improvements to our main setup menu.

With this release we would like to put a call out to the wider development community: now is the time to get feedback to us about API improvements. If there is something which you have had to use workaround code to accomplish which could be better handled with some API changes within Foundry VTT, we want to hear from you. After the next development release, we anticipate moving onto the Feature Testing phase, which will see our API closed for this Version. Thanks to those of you whom have provided feedback on V9 so far. We appreciate your assistance with testing and your engagement during the development process.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.

Be certain to carefully back up any critical user data before installing this update.


## Known Issues

Due to an issue introduced in the prototyping phase, updating to this build from an earlier release of V9 will require a full reinstallation rather than use of the update menu. This issue persists in V9d1, but will be corrected in V9d2.


## Update Highlights

Though V9d1 was primarily an update centering around improving the API for our community developers while introducing UI and UX feature cleanup for new features introduced during the prototype phase, we also took the time to address some lingering bugs and bring in some key UX/UI features requested by our awesome userbase.


#### Cards UI and API

As we advance from the prototype phase into the API development phase, we have continued to work on Card Support and and heard feedback from the community about what API functions might be missing from the initial Card Support implementation. This update brings support for drag and drop operations to the cards windows, improved permission controls for card collections, and some tidying of the UI for card management to bring some more standardization to the functions within them. We revisited the artwork for the default card deck images, and made some overall minor corrections to our approach including removal of excess padding around the images and replacement of the placeholder jack images with ones that were not just mirrored. Lastly, the Cards API functions now include ability to pass specific cards between decks, return a specific card to its parent, and perform bulk operations for passing a group of cards.


#### Overall UX and UI

In addition to some of the more specifically targetted changes in this release, we have also taken steps to improve the UI and UX for a number of the more commonly accessed configuration windows. The scene configuration window has had its UI simplified and broken down into a tabbed approach, a new configuration option allows for the text size to be adjusted for the entire application. We took advantage of some earlier work done on the CSS for our in-game UI to allow the sidebar to be layered over the rest of the screen in cases of smaller width monitors, and we corrected a small (but no less irritating) issue with the playlist UI where playing a track would cause the view to visually 'jump'. We also added a new, automatic obscuration of the remote invitation link to help save streamers from accidentally revealing their game invitation links. The setup menu also got a little touch up in the form of some label repositioning and while we were in there, we added ability to filter the view of your worlds, systems, and modules by text entry.


#### Day of Deprecation

The time foretold has come, fire rains from the skies and the earth trembles and quakes, for Entities have been removed from the Foundry VTT API, Data schema, and overall architecture. To put this more clearly, we have finished deprecating the use of Entities, and those remaining ones which slipped by the past deprecation (specifically related to compendium packs) have been given a longer deprecation path which is intended to end in V11. For those of the development community with modules or systems that still feature javascript calls to Entity or Entities, use of the new Documents structure is now mandatory for your code to continue working.

As always, this is just a brief summary of some of the items we wanted to highlight from within this release! Look forward to more in the forthcoming V9d2 and read the full update notes below.


## Breaking Changes


### Architecture and Infrastructure

- In continuing the deprecation of Entity declarations, we have begun deprecating the Entity field in compendium definitions in favour of a type field more common in our Document schema. The previous entity field will continue to be supported until v11 to allow for module and system authors to make the changes as above. Worlds will be migrated automatically and do not require any user action. (5992)


## New Features


### Architecture and Infrastructure

- Chat.db has been migrated to messages.db in order to match with the naming schema for Documents. (5016)
- When browsing packages that can be installed or checking for package updates only a single request will be sent to the https://foundryvtt.com, avoiding an issue that could result in multiple simultaneous requests. (5883)
- Updated Electron wrapper to 14.1.1 including the LetsEncrypt root certificate fix. It will be necessary to perform a fresh install of Foundry VTT to receive this update (only applies to users running the Electron Self-Hosted Application, not to node users with dedicate servers.) (5993)


### Cards

- Cards now support drag-and-drop workflows for re-arranging cards within a deck or hand, or transferring a card between piles. (5913)
- If a cards collection does not contain any Card Documents, a placeholder text will now be displayed. (5991)
- Permission controls for Cards have been improved, allowing more control over which players have access to which card pile, and operations those players can perform on individual Card documents within those stacks. (5919)
- Cards#dealDialog, Cards#passDialog, and Cards#drawDialog now provide warning notifications for cases where no valid source or target cards documents are present to support the operation, for example: in cases where a deck is empty or a pile is not present. (5904)
- Cards#pass has been implemented, allowing for transferring a specific list of embedded Card documents (by id) to another Cards pile. (5924)
- It is now possible to pass one or more Cards back to a parent Deck via Card#pass or Cards#pass, doing so will unset the drawn attribute for that card. (5994)
- The function signatures for the Cards and Card method APIs have been standardized and should now always keep updateData within the additional options object. (5976)
- The baked-in padding around the provided card images has been removed. (5922)
- A number of artwork corrections were made for Jack and Queen face cards to adjust facing and position of text to match the standard for the decks.(5932)

`Cards#dealDialog``Cards#passDialog``Cards#drawDialog``Cards#pass``Card#pass``Cards#pass`
### The Game Canvas

- Ruler#moveToken has had its efficiency improved and now retrieves the existing animation for Token movement, awaiting its completion rather than dispatching a redundant animation request. (5940)

`Ruler#moveToken`
### Interface and Applications

- Scene Configuration has been redesigned with a simplified layout, offering a more streamlined and tabbed approach to changing scene options. (4757)
- With the previous introduction of Font sizes as CSS variables, a settings menu option has been implemented which offers ability to adjust font size scaling application-wide. (5266)
- To provide support for small-width screens, the new flex-based UI layout has been leveraged and now allows for some UI overlap, allowing for a reduction of the minimum required resolution width. (5917)
- The Macro Directory now supports folders for organizing your Macros. (5918)
- The Playlists sidebar UI has been reworked and should no longer dramatically reposition elements when audio is started or stopped. (5415)
- The /setup menu now provides a simple underline as a visual indicator of the current active tab. (5634)
- A new filter field has been added to the Game Worlds, Game Systems, and Add-on Modules tabs on the setup menu, allowing users to more easily locate individual packages for update or removal. (5978)
- The UI for package listings has been improved and the display of versioning, compatibility, and other tags for packages has been standardized for a more clean overall appearance. (5456)
- The title of the login and game pages now include the name of the current world. (5926)

`/setup`
### Other Changes

- The Game Invitation Links application now provides an active check of whether the server is reachable from a remote connection for IPV4 hosts, displaying a notification for whether or not the connection appears to be open or closed. (5938)
- To help prevent cases of streamers accidentally revealing their game invitation links to their audience, the remote invite link is now obscured by default. A button has been provided to allow toggling visibility of the link. (5977)
- Deleting a world now generates a simple code which must be entered for deletion rather than requiring an exact retyping of the world name. (5902)


## API Improvements


### Architecture and Infrastructure

- All remaining references to Entity and Entities in the API have been removed or given a deprecation path. (5972)
- As part of the ongoing deprecrations for Entities, CONST variables which previously referenced Entities have been restructured as getters which throw deprecation warnings. (5907)
- Added game.keybindings which can be used to register, get, and set Keybind actions. (5999)
- TextEditor#_onDragEntityLink now resolves using size instead of length. (5990)
- Removed the unused function Playlist#audio. (5970)

`game.keybindings``TextEditor#_onDragEntityLink``size``length`
### Documents and Data

- ActiveEffect#isSuppressed has been redesigned as a getter which simplifies the usage for downstream systems implementing a test for whether or not an active effect should be currently suppressed. (5921)
- It should now be possible for a PrototypeTokenDocument to perform update operations upon itself. (5950)
- preCreate hooks for synthetic actors and actor have been standardized in their functionality and behaviour. (5930)
- CRUD operations on EmbeddedDocuments within a Document inside a Compendium pack will now infer the pack from the parent Document. (5937)

`ActiveEffect#isSuppressed``PrototypeTokenDocument`
### The Game Canvas

- Added a Hook for PIXI.Application to allow configuration of canvas initialization settings. (4965)

`PIXI.Application`
### Dice System

- Added the new property Roll#isDeterministic which indicates whether the result of a constructed Roll instance is non-random. (5931)
- DiceTerm.fromMatch has been refactored and will now fall back to CONFIG.Dice.terms.d rather than the Die class explicitly, allowing systems or modules to override the default numeric Die representation if need be. (5941)

`Roll#isDeterministic``DiceTerm.fromMatch``CONFIG.Dice.terms.d`
### Other Changes

- Created new hooks for various Card and Cards methods, this will allow for modules to take additional actions when certain card operations are performed. (5915)
- Implemented an initial Card#play which serves as an alias for Card#pass for now, but may provide additional functionality in the future. (5916)
- ui.activeWindow has been provided as a way to access the current Active Application. (5951)
- The sorting method for sidebar documents now provides an easier approach to customizing how documents within a sidebar container are visually sorted. (5341)
- ChatMessage#roll should no longer throw an error if the message data doesn't contain a roll. (5947)

`Card#play``Card#pass``ui.activeWindow``ChatMessage#roll`
## Documentation Improvements

- Provided a number of corrections for JSDoc strings including TextureLoader, PlaylistSound,PlaylistData, Soundsource#initialize. (5888, 5963, 5965, 5969, 5894)
- Removed documentation for the unused Preview option in AmbientSoundConfig. (5984)
- Added JSDoc types and strings for Setting and Keybind config data to support game.keybindings . (6000)

`TextureLoader``PlaylistSound``PlaylistData``Soundsource#initialize``game.keybindings`
## Localization Improvements

- SIDEBAR.TabCards has now been provided with a localization translation string. (5903)

`SIDEBAR.TabCards`
## Bug Fixes


### Architecture and Infrastructure

- Compendium pack DB files containing invalid or otherwise corrupted data should no longer cause issues with the initialisation process. (5885)
- Implemented a timeout to prevent cases where failed requests to contact the package repository would repeat the attempts endlessly. (5889)
- The Filepicker should no longer attempt to lazy-load images when the display is in list mode. (5897)
- Attempts to update a package which fail due to an invalid local manifest URL (404) should now correctly fallback to use the manifest URL provided from the package repository. (5900)
- Corrected an issue which could prevent updates of the core software. (5906)
- Failed user logins should no longer generate and log additional unnecessary header warnings. (5912)
- The user password field should no longer incorrectly display the option to show the password if no password has been set. (5955)


### Documents and Data

- The 'Show Players' should once again function correctly for Journals. (5911)
- The behaviour of import Actors from JSON has been improved to maintain the ID association between Active Effects and owned Items which are their source.(5962)
- Creating embedded documents on a synthetic actor should no longer fail in cases where the existing number of embeddedDocuments is 0. (5939)
- Token effects should now correctly get activeEffects from Token#_onUpdate. This previously caused issues with bulk activeEffect update operations. (5953)
- It is no longer possible to use form html tags within an existing journal entry. Users may use other form elements within the existing entry, but this may have unintended consequences during the journal update flow, so use an abundance of caution when doing so.(5901)

`form`
### The Game Canvas

- Canvas#draw should no longer cause errors in the teardown workflow for the existing Scene. (5884)
- Fog of war should no longer recede from walls on each fog update for scenes with unrestricted vision range enabled. (5948)
- Fog of war is no longer incorrectly set to explored for all tokens on scene-activation. (5946)
- Setting an excessive distance within a measurement template should no longer prevent world loading. (5979)
- An artifact from the previous lighting design prevented Vision source rendering when the canvas darkness level was set to zero. Vision sources are now rendered regardless of the darkness level. (5975)

`Canvas#draw`
### Interface and Applications

- Reverted a change which unintentionally required the HTML structure for tabbed containers to have those containers be the direct descendent of the root content element.. (5920)
- Audio/Video communication should now be able to start regardless of whether a video camera is present. (4197)
- Resolved an issue where AV Clients would receive a duplicate attempt to connect when a user was kicked. (5886)
- Sidebar folders should once again properly display their background color. (5909)


### Other Changes

- Closing the window for an embedded sheet should no longer trigger an unexpected token update for synthetic token actors. (5866)
- Card documents which do not yet have any valid image representation should now display a default image. (5905)
- User#_onUpdate has been restructured to allow use of a custom user class provided by a game system or module. (5929)
- In cases where fromUuid is used to call an entity within a compendium pack that does not exist, it will now return null rather than throwing an error. (5956)

`User#_onUpdate``fromUuid`
## Patch 9.226 - October 14 2021

The following changes were added in patch version 9.226 after the initial release of build 9.225.

`9.226``9.225`
### Architecture and Infrastructure

- The built-in updater no longer fails to complete the download of an update due to invalid download metadata. (6015)
- The built-in updater should now show the correct progress percentage during an update installation, and should no longer make the application appear unresponsive. (6016)
- The built-in updater should once again acquire the correct Release data from the foundryvtt.com website. (6002)
- Resolved Missing localization for the error displayed when attempting to "Check for Update" with the --noupdate flag set. (6012)

`--noupdate`
### Interface and Applications

- The Edit World configuration sheet has been updated to no longer reference Entities, and should no longer produce a deprecation warning. (6004)
- An issue which prevented page up and down from working as expected on the Macro bar has been corrected. (6007)
- Non-square images should now render correctly when used as macro bar images. (6008)


### Other Changes

- The Game Settings menu should once again render as expected instead of throwing an error. (6003)
- Attempting to perform a Cards#deal operation when only one Hand is available no longer causes a thrown error. (6005)

