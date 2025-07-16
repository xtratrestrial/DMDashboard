# Release 0.6.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.74

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.3


## Version 6 Testing


##### June 18, 2020


## Foundry Virtual Tabletop - Version 0.6.3 Update Notes


#### Overview of Changes

This is Foundry Virtual Tabletop Release version 0.6.3, an update on the Beta channel which is available to all Foundry Virtual Tabletop license holders. The Beta channel contains updates which are close to ready for release, but may still have some minor remaining issues present. If no meaningful issues are encountered in the next several days these changes will be available on the Release channel.

This update incorporates a number of bug fixes and improvements in response to feedback collected during the 0.6.2 update cycle. More major changes are on their way in the upcoming 0.7.x series which should have it's first (alpha channel) release within the next week. Since the scope of changes for this update was relatively small, there is not a Twitch developer stream associated with update 0.6.3, but stay tuned for more live-stream content coming up as I move forward with 0.7.x updates!

This is a Beta channel update which should be stable for all users, but may impose some module conflicts or compatibility issues. It is only recommended for users to update to this version if they are comfortable with accepting some minor risks. Users are discouraged from updating to this version if it is immediately before a game session. Please take care to periodically back up your critical user data in case you experience any issues.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release (Stable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

After clicking Check for Update confirm that you are presented with the 0.6.3 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.3 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please use the Contact Us form and select "Bug Report" as your category.

Please stay up to date on progress by following the project roadmap on Gitlab.


### New Features

- Keyboard shortcuts have been improved to allow them to work for either uppercase or lowercase characters.
- Cycling Tokens using the Tab key now centers the view on the center of the Token.
- The Signika font included in Foundry has received an update to allow for an extended character set to provide compatibility with more languages.
- The Modesto Condensed font families are now licensed for distribution in Foundry and have been included with the core Foundry VTT application.


### Bug Fixes

- Text Fields were sometimes replaced with "New Text" after reloading a scene from the Configure Player menu.
- Under some circumstances where Fog of War had pending updates at the moment it was reset, the fog reset operation would not be initially successful, requiring a second reset in order to take effect. This has been resolved.
- It is no longer possible to drag Tokens to inaccessible areas outside the gridded canvas.
- The Assign Token button will no longer produce an error if used when no token is selected.
- Token names longer than 15 characters no longer double in font size when entered without spaces.
- It is no longer possible to create Compendiums with a blank name using the GUI.
- Corrected an issue where Module installation would sometimes stall at 100% when installing larger modules.
- The icon for the "Create Scene" button was not displayed on sub-folders of the scene sidebar tab due to some erroneous CSS.
- Fixed an issue with bulk deleting many text drawings at once. This workflow previously resulted in the delete operations firing sequentially instead of as a multi-delete operation.
- Improved consistency for Settings save/reset button positions in configuration menus.
- The Filepicker in the Edit World menu once again provides the option to upload files for the world background image.
- TinyMCE was updated to version 5.3.2 in order to address an edge case where the editor would fail to load correctly when accessing Foundry using an IPv6 address.
- Solved a race condition that occurred as a result of the canvas switching to the Token layer when a Token was dropped. It now activates the token layer prior to creation.
- Fixed a typography issue on the Journal Entries application window.
- Corrected an incidental console error that would occur when launching worlds due to a mishandled redirect callback in the setup form.
- The keyboard delete handler no longer activates on both keydown and keyup events, now only activating on keydown instead


### Framework and API Changes

- Improved the user experience in cases where the user entered a structurally valid license key with a typo in it. Previously this would fail to accept the EULA and get the user stuck in situation where they had a key applied that could not be signed. If a key is applied that cannot be signed the key will be removed to be re-entered.
- Corrected an issue where an exception during Application rendering would cause the internally tracked render state for that application instance not to reset.
- The error message which denoted that a chat message failed to render itself contained a syntax error.
- The AudioHelper static play method failed to return a Howl instance to allow for further sound manipulations.
- Returned data from setup POST requests now explicitly have application/json content-type headers assigned.
- Added Server side validation was added to prevent creating duplicate Compendium packs in the same world.

`AudioHelper`
### Documentation Improvements

- API documentation updated to be consistent with the 0.6.3 software.


### Known Issues

A number of more complex or potentially breaking bug fixes were shifted to the 0.7.x Milestone in order to provide adequate testing before they are packaged for release. For more information please review the milestones below:

- Known Issues to be addressed in 0.7.0
- Known Issues to be addressed in 0.7.x

