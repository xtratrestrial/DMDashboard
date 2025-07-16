# Release 0.7.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.81

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.3


## Version 7 Testing


##### September 29, 2020


## Foundry Virtual Tabletop - Version 0.7.3 Update Notes


### Overview of Changes

Welcome to the first beta channel update in the Foundry Virtual Tabletop 0.7.x series! This update focuses on continued improvement to the lighting and fog systems, the incorporation of a massive library of icon artwork available to all users, and a substantial number of user experience improvements, bug fixes and API enhancements.

WARNING: Beta channel releases have the potential to introduce breaking bugs that may be disruptive to play. These features are close to ready for a stable release - but likely to still include some bugs and incompatibilities which may frustrate you.

As a beta channel update, trying out the 0.7.3 version is a good choice for module and system developers who want to prepare their systems and modules for the upcoming stable release version of 0.7.5. It's also a good choice for game-masters who don't rely on a large number of modules who want to try these latest features in their games and can be tolerant of a few issues during play.


### How to Update

If you wish to apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Beta" channel in the dropdown menu. Please note, it is recommended for most users to stay on the Release channel and wait for updates there rather than using Alpha or Beta updates.

Be sure to back up your critical user data before installing this update.


### New Features


#### Lighting and Fog of War

- Redesigned the structure and rendering workflow for Darkness and Light in order to combine these concepts into a single rendered container inside the Lighting Layer with the core concepts of illumination and coloration.
- Implement nuanced interpolation between the natural darkness level of the scene and the levels of visibility that additional dim light provides. This allows for light sources to be a bit more dim at high levels of darkness to avoid excessive contrast.
- The masking boundaries for illumination, coloration, and vision containers are now constrained to the bounds of the background image itself (or the defined scene canvas space) rather than the entire usable canvas area (including the padding). This has a few benefits: firstly it reduces the GPU load for rendering shaders and blends in the padded margin, secondly it allows for a more seamless visual background where the map fades directly into the darkened background instead of having a visible rectangle of additional darkness in the padding. The potential downside of this is that some users may have been using that padding area as playable game space, rather than as a "buffer zone". I will be hoping to collect feedback on this as part of the testing process.
- [BREAKING] Fog exploration is now only saved within the background image dimensions. Previously exploration in the padded area was also saved causing cases where the WebGL max texture size was exceeded even though the background image was below the maximum size. As a consequence (aka collateral damage) of this change, I am afraid that the 0.7.3 update includes a forced migration which deletes existing saved Fog of War states which - due to the sizing changes - are no longer compatible with the version 0.7 software. I apologize to you and your players for this sacrifice being necessary in order to make this improvement.
- Rebuilt the light source animation methods to use the new illumination and coloration shaders instead of modifying graphics objects. This new approach to light source animation alters the uniform parameters of the shader each frame rather than animating the geometry of a graphics object. As a result it improves on both performance and aesthetics!
- Removed the previously imposed artificial framerate cap on light source animations to allow for smooth light animations which are now synchronized with the target framerate.
- Fog of war exploration progress is now saved more frequently in a way that saves fog updates once a sequence of active updates has completed. For lower-end machines, this may result in a noticeable stutter when the fog progress saves and is synchronized with the server. I will be looking to collect feedback on this to see if it causes problems for users and will try and adjust further in 0.7.4.
- Redesigned the coloration container of the Lighting Layer to use a custom WebGL fragment shader which allows for elegantly screened and blended light sources with a gradual falloff.
- Changed the level of darkness created by a 'negative' bright light to be slightly off-black to allow for (very) faint visibility beneath it.
- The canvas background color now automatically dims in response to changes in the darkness level for the scene itself.
- Fog of war data is now stored in a way that avoids cases where the fog exploration texture can become larger than the maximum allowed texture size, this should provide a performance improvement and reduce errors for lower-end GPUs.
- Standardized the definition of Light Source types and added a new "Universal" type which allows for light to be displayed unconstrained by walls and always visible. This can be used to permanently illuminate a portion of the map regardless of other sight parameters.
- There is now a world-level setting option to animate the vision of a token during a drag operations, instead of concealing vision until after a movement is committed to. This setting defaults to false in order to prevent meta-gaming, and must be intentionally enabled by a gamemaster if they want to use this feature. Using this setting will also negatively impact application performance for lower-end machines.
- When using live Token drag preview lighting, the movement of the token is constrained by checking collision on every frame to only allow the user to drag the token to locations which are valid movement destinations.
- Added the ability to preview position changes to an Ambient Light source in real time during the left-mouse drag workflow.
- Improved the display of the preview for ambient light area of effects to make it more clear what the impacted area of the light source will be.


#### UX and UI Improvements

- Added over 3500 icons for commodities, containers, environment, equipment, sundries, tools, and weapon assets as standardized 256px webp files.
- Updated the Foundry VTT logo and background artwork with to bring it in line with the new branding.
- Navigation Name has had its descriptive help text adjusted to make its purpose more clear, and its entry field now supports applying HTML tags to the title will appear in the nav bar.
- Scene Navigation labels now have a maximum width, truncating the name with an ellipsis if it is too long.
- The Combat Tracker will now display overlay effects as a status effect in addition to the regular array of effects.
- Setting the configured "defeated" condition icon on a token will automatically mark that token as defeated in the combat tracker
- Redesigned the structure of the sidebar directory tabs to shift action buttons to the top of the directory.
- Improved the workflow for creating new entities and folders in the sidebar tab by displaying the creation dialog relative to the button that produced it rather than the center of the screen.
- All settings in the Configure Settings menu are now sorted alphabetically by their localized names (within section by module).
- Improved the visual styling of horizontal scrollbars (if they are required) to be more thin similar to the vertical bars.
- Absorbed the functionality of the Deselection module as a configuration setting which is off by default.
- The Player Management view now has a permissions button that allows Gamemasters to configure what each role can do.
- The "show access key" checkbox in the player configuration application will now only show in cases where the user has an access key set.
- ALT+Digit keys will now cycle the page of the hotbar instead of activating a hotbar key. For example, ALT+2 will change to hotbar page 2.
- For compatibility purposes, shift-scroll and ctrl(cmd)-scroll will only be captured when an object that can be rotated is controlled or hovered.
- Using the arrow keys in the chat entry text area now only cycles through previous messages if there is no text in the chat entry field.
- When using the up and down arrow to recall previously sent chat messages, pressing down until all previous messages have been exhausted will return the chat input field to an empty string.
- Refined the css styling for checkboxes to address the Chromium 83 changes.


#### Other New Features

- Gamemasters may now choose the font used by Map Note tooltip labels.
- Note labels may now have their font color chosen, and will automatically choose a contrasting stroke color depending on the lightness value of the label color to keep the text visible regardless of background color.
- Added support for <s> strikethrough so it may be used in chat messages.
- When the game world is shut down, a notification message is now displayed for all connected players then they are returned to the setup screen.
- Newly created Journal Entries now open with the TinyMCE editor already active in editing mode.
- The FilePicker now identifies if a S3 key is the browsing target, allowing the S3 file path to be opened directly when editing a file location from S3.
- Added support for RollTable entities to have a primary image icon associated with the table overall which is displayed in the Tables sidebar and in any RollTable type compendium packs which are created.
- Improved default table styling rules for rich text editors to include alternating colored rows and better spacing.
- The WebRTC server now delays its start until the world is active or the WebRTC setting is enabled.
- Measured Templates used in gridless mode will now highlight the template shape instead of having no highlight at all.

`<s>`
### Localization Changes

- Added localization support for the Edit Playlist and Edit Sound configuration sheets.
- Added localization support for the Drawing Configuration sheet.


### Bug Fixes

- Changed the default audio playback mode from HTML5 audio back to the Web Audio API. Both modes have advantages. The web audio API is built for fine-grained control of potentially many concurrently playing sounds. The HTML5 audio has the advantage of being streamed to better support large files, but it is limited in the number of concurrent connections it can support. A problem with HTML5 audio was exhausting the pool of connections that can be used when playing many large files - causing the ability to play audio (at all) to break. Reverting back to the Web Audio API fixes this issue - but does mean that audio files need to be fully loaded before they will begin playing. To counter-balance this, I have added a new option where individual files can be marked as "Large File Streaming" in their sound configuration. For very large (generally 15MB+) files, I recommend using this option, but for all other smaller files it is best to leave this disabled. I'll be taking a longer look at this to try and figure out a more elegant solution as part of the audio updates in 0.8.x.
- Corrected an issue which could cause ambient sounds to surge in volume when first encountered due to volume easing.
- Starting and stopping a sound from an audio playlist repeatedly no longer causes the same file to play multiple times or layer over itself. This could result in sounds that would continue playing even though their sounds in the playlist control panel had been stopped, with no way to end them except to refresh the browser.
- Corrected an issue where rapid selection and deselection of a token could cause ambient audio effects to get stuck in a paused state.
- Video chat frame popout and pin controls now work as expected once more.
- Previously if an A/V input device wasn't available A/V would silently fail to start, it now displays an error message.
- Corrected an issue where Dice term-specific flavor text would fail if it included spaces.
- Entering "/r d#" no longer results in NaNDf but instead is correctly interpreted as implying just a single die of the requested denomination.
- Avoided a race condition which could cause FormApplications to reopen when a related entity was updated.
- Setting default text drawing configuration to an empty value will no longer prevent text drawings from being created.
- Journal entries will no longer lose unsaved content if a new sidebar folder is created.
- Journal window titles now consistently display only for users who have at least Limited permission to view the Journal.
- Solved a condition where hovering over an Ambient Light Source while editing its settings would cause the preview to revert.
- Resolved an issue where DrawMany() would throw errors if the drawn result was a table.
- Newly created RollTable text entries no longer incorrectly start with their text description as "undefined".
- Thumbnail generation for maps with Tiles no longer introduces an incorrect offset if the the amount of canvas padding has changed.
- Fixed an issue with rich text editors which would result in the enriched HTML being saved rather than the original raw text.
- Corrected an issue which would allow wide content with certain CSS properties to force the edit button for TinyMCE off-screen in certain cases.
- Updates to an actor or token that a player does not own no longer trigger unexpected permission errors.
- Updating a resource bar attribute for a Token which is no longer linked to an Actor no longer throws an error.
- Addressed an issue where the Combat Tracker rendering would alter Combat entity data.
- Corrected some additional ctrl/cmd issues for macOS, including ruler movement
- Shift + Mouse Wheel failed to accurately function with some non-Apple mice on macOS.
- Corrected some font issues with the monospace font-family for macOS
- Fixed a bug where the Scene Navigation collapse and expand hooks were called outside of the Promise which handled their animation, resulting in cases where the navigation was not finished collapsing or expanding by the time the hook was called.


### Framework and API Changes


#### Active Effects

- [BREAKING] When an Item that bears active effects is added to an Actor, keep the original copy of the transferred effect data on the owned item in addition to creating an ActiveEffect embedded entity on the Actor.
- Integrate Active Effects with Token and Combat Tracker status effect icons to display the effect icon for temporary effects. Active Effects which are temporary (have a finite duration specified in turns or rounds) and have an icon image specified will automatically be displayed as token status effects.
- Provide a convenience method, OwnedItem#transferredEffects for an Owned Item to reference any Active Effects on the owning Actor which were transferred from that Item.
- Expand the data model for the ActiveEffect to allow it to specify a certain tint color that modifies the display of it's icon.
- Fix issues with the addition and automatic transfer of ActiveEffects via Owned Items for synthetic Token actors.

`OwnedItem#transferredEffects`
#### Other API Changes

- [BREAKING] Simplified the storage format of worldTime to be expressed in seconds rather than milliseconds. After testing and feedback, storing the world time in milliseconds was deemed as excessive and unnecessary, so storing as seconds will represent a simpler option.
- Implemented a new {{selectOptions choices selected localize}} handlebars helper which combines the functionality of {{#select}} and {{#each}} blocks into a single convenient template tag which supports both regular and multi-select fields.
- Implemented a Radio button handlebars helper, {{radioBoxes name choices checked localize}} which provides functionality for adding radio button inputs.
- Refactored the sidebar directories for each Entity type to use the Entity.createDialog helper method to display a dialog prompt for creating a new Entity instance.
- Removed outdated wall endpoint culling logic from the sight layer that is no longer used as part of the vision computation algorithm.
- Refactored and standardized the way that thumbnails are generated within the new ImageHelper class using the ImageHelper.createThumbnail method which can accept either a source URL or a canvas object.
- Added --adminKey as a new application startup flag to assign an initial admin access key if one is not already set. For example --adminKey=foundry will set the initial administrator access key to "foundry" if one has not been otherwise set.
- Provided a get{Application}HeaderButtons hook which allows for modules to extend or modify the set of buttons present when a new windowed application is rendered. Like the renderApplication and closeApplication hooks, this will be called for every application class in the inheritance chain, so adding buttons in getActorSheetHeaderButtons will end up inserting those buttons for all subclasses of ActorSheet.
- Added a new boolean flag core.initiativeRoll to each ChatMessage that was created by the Combat#rollInitiative method which can allow modules and systems to know which chat messages represent initiative rolls.
- Added the TextEditor.truncateText helper method which can truncate a fragment of text to a maximum number of characters.
- Migrated the getName() helper method from EntityCollection to the base Collection type so that collections of all types (like active effects or owned items) can also use this helper method.
- Refactored the usage of CombatEncounters.settings to become a dynamic property instead of a cached attribute.
- The Token#toggleCombat() method has been adjusted to no longer require that the referenced token be actively controlled in order to function properly.
- Provided a Roll.validate helper method which can be used to validate a Roll formula to test that the formula input is usable.
- [BREAKING] Deleted the unused/deprecated icons/mystery-man.png icon in favor of the used icons/svg/mystery-man.svg icon.
- Included a 'no-referrer' header in fetch requests made when installing modules to avoid sending domain name information to module providers.
- Minor dependency package updates.

`{{selectOptions choices selected localize}}``{{radioBoxes name choices checked localize}}``Entity.createDialog``ImageHelper.createThumbnail``--adminKey``--adminKey=foundry``get{Application}HeaderButtons``renderApplication``closeApplication``getActorSheetHeaderButtons``core.initiativeRoll``Combat#rollInitiative``TextEditor.truncateText``getName()``Token#toggleCombat()``Roll.validate`
### Documentation Improvements

- Updated JSDoc to denote that certain classes are abstract interfaces rather than ones that should be constructed directly.
- Refactored the set of registered handlebars template helpers to be defined as static methods within the HandlebarsHelpers class namespace for organization and documentation.

