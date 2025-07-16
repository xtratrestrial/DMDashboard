# Release 0.6.4 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.75

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.4


## Version 6 Stable


##### June 23, 2020


## Foundry Virtual Tabletop - Version 0.6.4 Update Notes


#### Overview of Changes

This is Foundry Virtual Tabletop Release version 0.6.4, a stable update on the Release channel which is available to all Foundry Virtual Tabletop license holders. The Release channel contains updates which should be stable and ready for widespread consumption by all Foundry users.

This update focuses on bug fixes and user experience adjustments that improve the release 0.6.2 version. The bulk of the changes included in this version are from the Beta 0.6.3 Update but there are some additional adjustments, features, and fixes which are included in 0.6.4. If you have not yet read the release notes for Beta 0.6.3, I recommend starting there.

Since the scope of changes for this update was relatively small, there is not a Twitch developer stream associated with update 0.6.4, but stay tuned for more live-stream content coming up as I begin working on the 0.7.x generation of updates!


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release (Stable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

After clicking Check for Update confirm that you are presented with the 0.6.4 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.4 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please use the Contact Us form and select "Bug Report" as your category.

Please stay up to date on progress by following the project roadmap on Gitlab.


### New Features

- Added the newly bundled Modesto Condensed font to core software font configuration so that it can be used for Drawing text.
- Display a warning message when users attempt to upload to a path containing /system or /module.
- Improved the files and naming conventions used for Signika fonts, Foundry now offers both light and semi-bold options as well as support for Signika Negative which is specifically designed for light text on dark background. Please note that Foundry does not currently load light, semi-bold, or negative versions of Signika. If you want these available for your system or module you must register a font-face CSS rule to include them.
- Updated Font Awesome to latest version 5.13.1


### Bug Fixes

- Filepicker.upload() failed if the User was not authenticated as a server admin user, this functionality is now correctly references the "Can Upload" permission when a world is active.
- Corrected an issue which prevented creation of new Compendium Packs due to an incorrect absolute path check requirement on the server-side.
- New Foundry users were incorrectly receiving software update notifications for the Beta channel instead of only for "release" updates, which should be the default behavior.
- Resetting fog of war was not correctly updating for players without a refresh.
- The Signika bold font was loaded (on Linux) using an incorrect case-sensitive file name.
- New Scene creation was incorrectly prevented if the Width and Height fields were left blank despite having a background image assigned.
- Some Scene changes were not properly triggering a full re-draw, leaving the user unable to interact with or pan the canvas.
- Corrected an unexpected behavior which would occur when deleting a Journal Entry before a Map Note that referenced it.
- If a Rollable Table in a compendium had Draw with Replacement unchecked, the RollTable.drawMany() function would fail.
- When a player chose a character, their associated token would be selected for the GM as well.
- Due to the way Token preview images were created, dragging an Actor when there was no active Scene caused an error.
- If the GM had a player character set, changing permissions of any actor that had a token placed in the active Scene would throw an error.
- Fixed an invalid Chat Message regex statement which would incorrectly bundle text on newlines if a <br> character was inserted.
- Rapidly expanding and collapsing context menu displays would sometimes result in the inferred height of the context menu being incorrectly set to zero.


### Framework and API Changes

- The FilePicker.upload API should display an informative error message if the upload is blocked due to a server-side file size limit.
- Improved the documentation of the Ray class, which was missing doc strings for many methods
- Transitioned to load FontAwesome explicitly through header CSS rather than asynchronously using loadFont(). Removed reliance on the loadFont() helper method and stage it for deprecation in 0.8.x.
- Item Sheet image edit workflow should only submit the change if options.submitOnChange is true.
- Allow static file paths for scripts/styles in package manifests to reference absolute URLs - treating them as such instead of as relative paths.

`FilePicker.upload``Ray``loadFont()``0.8.x``options.submitOnChange`
### Documentation Improvements

- API documentation updated to be consistent with the 0.6.4 software.


### Known Issues

A number of more complex or potentially breaking bug fixes were shifted to the 0.7.x Milestone in order to provide adequate testing before they are packaged for release. For more information please review the milestones below:

- Known Issues to be addressed in 0.7.0
- Known Issues to be addressed in 0.7.x

