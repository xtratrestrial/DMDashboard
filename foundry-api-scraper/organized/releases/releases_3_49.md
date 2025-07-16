# Release 0.3.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.49

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.4


## Version 3 Development


##### July 17, 2019


## Beta 0.3.4 Update Notes

Hello tabletop friends! Foundry Virtual Tabletop update 0.3.4 is here with a fresh round of feature enhancements, bug fixes, and underlying software and API improvements. This update is pretty substantial and addresses a large number of bugs while adding functionality to better empower modders and system developers. Highlight new features in 0.3.4 include Sidebar Search, chat support for Entity Links, and the addition of the commercially licensed GSAP Library for animation.

`0.3.4`Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Sidebar directories for Actors, Items, Scenes, and Journal Entries now have a filter and search bar at the top of the sidebar which allows you to quickly find entities by name. The filtering logic is case insensitive, and deleting a filter will restore the sidebar to displaying the full set of results.
- Dynamic entity links can now work in chat messages. This allows you to "mention" certain Actors, Items, Journal Entries, or Scenes in chat. For example "Hi @Actor[Bob]".
- The context menu for Journal Entries in the sidebar now features a new option to Jump to Pin which is available if that Journal Entry is pinned to the currently viewed scene. Using this option will pan the Scene view to highlight the location of the map Note. Many thanks to Moerill from Discord for inspiring this feature.
- The fog of war opacity settings have been adjusted for GM users to preserve some limited visibility of the map while still differentiating areas which represent unexplored fog of war. Many thanks to trdischat on Discord for his helpful module which motivated this change.
- Foundry Virtual Tabletop now includes a paid commercial use license for the Greensock (GSAP) animation libraries (https://greensock.com/) within the core platform as well as any downstream systems or modules! GSAP modules can be added by any module or system by requesting the inclusion of these scripts in a module or system manifest file.
- Newly created Users will each receive a randomly selected color to differentiate them. Colors can still be manually changed at any time, but this will help to differentiate users by default.
- Provide a GM-only context menu option to permanently delete a Folder AND all of it's contained subfolders or entities. Please be cautious in using this option, as the operation is not recoverable, but the power is in your hands.
- Hovering over a Token which is an active Combatant in the tracked Combat Encounter will now highlight the combatant. This helps to easily answer questions like "when is it this Goblin's turn?".
- Game systems may now designate an attribute from their Actor data model which is used as the default tracked resource bar for Tokens.


### Core Bug Fixes

- Solved a long-standing problem which prevented the use of large (15MB+) audio files in Foundry VTT. Improvements in the upstream Howler library have now allowed me to move to HTML5 audio streaming which supports such large files in a more more performant way. This change also reduces the initial load time between when an audio request is made and when playback begins. Thanks to KaKaRoTo from Discord for identifying that this change was now possible.
- Correct a bug with module-provided localization/translation files where the system was looking for module translation files in the incorrect data path.
- Addressed a bug which caused Tile object deletion to not deactivate the Tile HUD if it was displayed for the deleted Tile.
- Closed a loophole which prevented the Combat Tracker from rendering if some Combatants represented Tokens which have no valid Actor.
- Holding the ALT key was incorrectly highlighting the borders of placed Tile objects when the Tiles Layer was not active. This has been corrected.
- Fixed problems occuring when Tile objects were resized by very small amounts or collapsed upon their origin point.
- Disabled the resizing handle for Tile objects which were set to the locked state.
- Avoid needlessly opening a new tab for links which directly refereence a javascript:void(0) call.
- Fixed a problem related to updating the Permission settings for Actors which do not have any active tokens placed which represent them.
- An edge case for Scene data resulted in a Scene which was flagged as Active, but not shown in Navigation. This logic has been hardened to guarantee that Scenes are inactive when removed from the navigation bar.
- A flaw in the layer deactivation logic caused highlighting for selected Wall objects to remain visible when the Walls Layer was deactivated - this no longer occurs.
- Fixed an issue with Wall endpoint editing which could result in the Wall being continuously selected and de-selected without triggering the Wall Configuration sheet.
- Resolved an issue with MP4 video assets in Scene backgrounds, Tiles, or Tokens which was incorrectly blocking the file extension from being used.
- Avoid displaying an Actor context menu option to showcase Token artwork if the Actor's prototype token does not have any image file defined.
- Restored hover tooltip strings for parent Tool categories in the Scene Controls interface element.
- Changing the file path of an Ambient Sound object placed in a Scene now will immediately alter the audio effect being played, which previously required a hard refresh to take effect.
- Fixed an issue with the newly added Compendium Update API methods which failed to adequately validate user permissions when making changes.
- Solved a race condition in the Combat Tracker which could result in infinite recursion when multiple changes for the same combatant occured simultaneously.
- Corrected a bug which blocked changes to an Actor's prototype token from being properly saved to the database.
- Fixed a bug in the World Selection interface that could, in some cases, lead to the World's text description to be lost.
- Strengthened the validation around the serialized Roll object contained in Chat Messages to avoid situations in which the Chat sidebar could not be rendered.
- Improved the behavior Application header buttons which prevent them from also doubling as drag handles.

`javascript:void(0)`
### Core Software, APIs, and Module Development

- Standardized the way that static files (styles, scripts) are loaded for Systems and Modules.
- Modules and systems may request that common scripts, like those offered by the new Greensock libraries, be included. Scripts requested in a system or module manifest will look first for matching files relative to the module root while falling back to the contents of the public/scripts folder. See the issue in GitLab for more details.
- The combat._previous Array which reported the prior round, turn, and tokenId of the combat encounter has been converted to an Object combat.previous with named keys. The _previous attribute can still be used, but will be deprecated in a future version.
- Added server-side data validations for Token width and height attributes, requiring them to be positive numbers.
- Implemented several public methods for common Application manipulations including minimization, maximization, sidebar tab switching, and sidebar collapse toggling. See the issue in GitLab for more details.
- Additional Hook events have been added for when a PlaceableObject enters or exists a hovered or controlled state. Please see the issue in GitLab for more details and usage examples.
- Improved upon the security of dice Roll result evaluation to avoid execution of functional code.
- Refactored the way that Collection and SidebarDirectory tabs are rendered in order to standardize and reuse more code between Applications.
- Standardized the the URI encoding conventions used in the FilePicker and the server side Files object.
- Modules and Game Systems may now deisgnate in their manifest files that they depend on a minimum core VTT version in order to function properly. Please see the issue in GitLab for more details.

`public/scripts``combat._previous``combat.previous``_previous`
### D&D5e System Improvements

- The D&D5e system specified some rules for <span> elements which forced them to be displayed as block elements. These rules have been relaxed so that span elements remain naturally inline.
- Added support for automatic recovery of feat uses per Long Rest or Short Rest. Thanks very much to Felix from Discord for submitting this improvement to the 5e codebase.
- Added support for a global saving throw bonus, for example from a Ring of Protection or from a Paladin Aura. Thanks very much to tposney for submitting this improvement.

`<span>`