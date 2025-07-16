# Release 0.4.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.58

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.3


## Version 4 Testing


##### December 15, 2019


## Beta 0.4.3 Update Notes

Greetings esteemed supporters. I'm very excited to share Foundry Virtual Tabletop - Beta 0.4.3 which is an incremental release which makes the 0.4.2 major release available to all Patreon supporters while adding a number of improved features and bug fixes to the software.

The major focus area for Beta 0.4.2 was Audio/Video chat integration, AWS S3 integration, the Token targeting system, and improvements to Journal entries. The Beta 0.4.3 update iterates and improves upon those changes by correcting several bugs and further polishing those features. If you have not yet familiarized yourself with them, I strongly encourage you to read the Beta 0.4.2 Release Notes.

The most exciting addition in 0.4.3 is the availability of a standalone MacOS application which is an exciting milestone that allows MacOS users to have the same native Electron experience that Foundry VTT game-masters on Windows and Linux can enjoy.

Together, updates 0.4.2 and 0.4.3 comprise a really comprehensive update which touches and improves upon a lot of systems, I sincerely hope you all enjoy it. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- The software now has a working native application build for MacOS! This is a big milestone which has been long overdue. I am really excited for the Mac users out there to have the option of using the software directly through Electron in addition to the ability to run a Node.js server. See the update page for download links for the native Mac application. Please note that the app is not code signed (at this time), so you will need to authorize that you are willing to trust the software in order for MacOS to allow you to use it.
- The Electron application will now launch in fullscreen mode. Added support for a keyboard shortcut to toggle Fullscreen mode for the Electron app: F11 for Windows and Linux, and Ctrl+Cmd+F on MacOS.
- If requesting an Entity or Compendium entry by name or ID as a Roll Table result, the name field will now be automatically cleared if the requested target does not exist.
- The included version of Font Awesome has been upgraded to version 5.12.0 including many new and updated icon characters.
- Improved the flexibility of the new Token Targeting tool in the Controls palette. The tool now allows for clicking directly on tokens to target them individually in addition to rectangular selection for multiple Tokens. Shift+click while using the Token Targeting tool will remove a Token from the targeted set.

`F11``Ctrl+Cmd+F`
### Core Bug Fixes

- Fixed an issue which prevented Map Notes and Tiles from being dragable.
- Fixed an error resulting from a missing permission assignment for newly created Users related to the deprecation of the permission property in the User data model.
- Improved the permission control for users with LIMITED permission to a Journal Entry to ensure that they can only see the image for the entry and not it's text content.
- Fixed a problem in the A/V module which displayed control buttons to force disable/enable the video and audio channels of a fellow GM user, despite that action not being supported by the software.
- Fixed a UX problem with A/V involving cycling the camera sizes of other broadcasters in the call while your own camera was disabled - producing inconsistent video sizes once your feed was re-enabled.
- Corrected an issue with the Setup screen, where the available file storage backends were not provided to the client - resulting in the File Picker ui not being usable for things like selecting a World background image.
- Fixed an issue with dynamic entity links drag+drop in rich text editors which was not properly working for certain Entity types (Scene, Journal Entry, and Roll Table).
- Resolved an edge case failure mode with Roll Tables where, if the only unlocked results lay outside of the possible range allowed by the dice formula - resulting in an infinite loop attempting to retrieve a valid result.
- Fixed a problem with Roll Table results where, if two Entities of the same type have the same name, they could not be differentiated even using their IDs as references.
- Corrected a UX issue with Roll Tables where unsaved changes in other results could be lost when changing the Result Type dropdown selector.
- Fixed a networking problem in the EasyRTC library by explicitly bundling a patched version of that code with Foundry VTT until an upstream merge request is completed which would allow returning to the standard Node.js library.
- Resolved an error in the Token HUD which caused the target token button to throw some console errors related to toggling the CSS class of the HUD display.
- Added some missing localization strings for the Target Selection tool and Roll Table features.
- Fixed an issue with scrollbars while editing long-form text in the rich text TinyMCE editor.
- Corrected a rendering issue for hexagonal token borders for a subset of hex grid orientations.


### Core Software, APIs, and Module Development

- [POTENTIALLY BREAKING] The Item.id getter will now return the data.id property of an Owned Item if the item instance is owned by an Actor, and the formal entity data._id otherwise.
- Modified the cadence with which UPnP requests a renewed lease on the port mapping. Previously this occured every 30 minutes, but this occasionally resulted in expired leases, so the timer has been reduced to 5 minutes while the FVTT app is running.
- Added an explicit Actor.prepareData() call during _createOwnedItem and _deleteOwnedItem handler workflows to ensure that Actor data which depends on the items that Actor owns is re-calculated correctly.
- Implemented a CI/CD build and deployment pipeline to automate the build and release process for Foundry VTT. Many thanks to Toon324 from Discord for his assistance and advice with this process.
- Added new helper methods of Dice.minimum(formula) and Dice.maximum(formula) which help to understand the minimum and maximum results which can possibly occur for a certain dice formula.

`Item.id``data.id``data._id``Actor.prepareData()``_createOwnedItem``_deleteOwnedItem``Dice.minimum(formula)``Dice.maximum(formula)`
### Documentation Improvements

- Updates to the overview of implemented and planned features: http://foundryvtt.com/pages/features.html


### Known Issues

- None at this time.

