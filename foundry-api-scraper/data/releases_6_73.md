# Release 0.6.2 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.73

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.2


## Version 6 Stable


##### June 06, 2020


## Foundry Virtual Tabletop - Version 0.6.2 Update Notes


#### Overview of Changes

This is Foundry Virtual Tabletop Release version 0.6.2, a stable update on the Release channel which is available to all Foundry Virtual Tabletop license holders. The Release channel contains updates which should be stable and ready for widespread consumption by all Foundry users.

This update focuses on bug fixes and user experience adjustments that improve the release 0.6.0 version. The bulk of the changes included in this version are from the Beta 0.6.1 Update but there are some additional adjustments, features, and fixes which are included in 0.6.2. If you have not yet read the release notes for Beta 0.6.1 I recommend starting there.

Since the scope of changes for this update was relatively small, there is not a Twitch developer stream associated with update 0.6.2, but stay tuned for more live-stream content coming up as I begin working on the 0.7.x generation of updates!


#### About this Update

This is a Release channel update which should be stable for all users. It is recommended for all users to update to this version unless it is immediately prior to a game session (update afterwards). Even though this update is on the release channel - remember Foundry Virtual Tabletop is self-hosted, so please take care to periodically back up any critical user data like your Worlds to protect against the unfortunate event that anything goes wrong.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release (Stable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

After clicking Check for Update confirm that you are presented with the 0.6.2 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).

Since the EULA was updated in version 0.6.1 you may be prompted to re-accept the Foundry Virtual Tabletop license agreement after the update is installed.


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.2 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Please stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Increased the point sampling density slightly to avoid occasional situations where measured movement on a hex grid would skip highlighting a grid space.
- Allowed for Tokens with dimensions less than 1 to snap at a more fine precision relative to the grid.
- Improved the way permissions errors were handled with regard to the temporary _update directory. In some cases, users were still receiving the "EPERM" error message. They will now receive a more informative error message which suggests to the user that they should use administrator rights to update.


### Bug Fixes

- Ruler measurement for Tokens with size less than 1 was not work properly depending on the origin position of the Token in its grid space.
- Measured movement on gridless Scenes would result in Tokens following an offset path instead of the expected ruled line.
- Rapid mouse movements immediately following a Ruler measurement could incorrectly trigger downstream layer-level mouse-move workflows, resulting in unexpected behavior with walls, lighting, and field of vision.
- Adjusted Permissions for Templates to allow users who can create templates to configure them as well.
- Links to entities in Compendium Packs would fail to correctly resolve if they were called by Name instead of ID.
- Adding Scenes to Compendium Packs failed to generate thumbnails for them.
- Cone Templates failed to correctly test the placement angle resulting in the template not being placed.
- Revealing a hidden message (non-Roll) was not properly adding the newly visible message into the chat log of players who did not previously see it.
- Zero-Length Wall Segments failed to auto-delete on hex-grids.
- Scenes contained an incorrect tooltip for weather effects.


### Framework and API Changes

- Improved the efficiency of creating Door controls, they no longer use a redundant loop through the Walls children. This should provide a minor improvement in the performance of door control icon rendering.


### Documentation Improvements

- API documentation updated to be consistent with the 0.6.2 software.


### Known Issues

- None at this time.

