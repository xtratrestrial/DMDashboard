# Release 0.6.0 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.71

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.0


## Version 6 Stable


##### May 22, 2020


## Foundry Virtual Tabletop - Version 0.6.0 Update Notes

The day is finally upon us, it is with extreme pride and pleasure that I can say Foundry Virtual Tabletop is released!

This release is version 0.6.0, the first Foundry VTT version in the "release" channel which is available to all Foundry Virtual Tabletop license holders.

It's been a surreal journey to reach this point, I will simply say "thank you" to everyone who has supported the project and given me encouragement. I am incredibly grateful and proud of what I have accomplished. I hope you all can see and feel the love that has gone into this work.


#### Overview of Changes

This release update includes all of the features and changes included in the prior Beta 0.5.7 Update as well as a number of minor changes, bug fixes, and API housekeeping changes.

Please be sure to join me on Twitch later today (Friday, May 22) and tomorrow (Saturday, May 23) for live developer Q&A discussing the release, reflection on the project, and charting out the road ahead.


#### About this Update

Please read the following important reminder about this update.

This is a full Release build and should be stable for all users. It is recommended for all users to update to this version unless it is immediately before a game session. Even in the case of "release" channel updates, please take care to periodically back up your critical user data in case you experience any issues.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release (Stable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

If you have a purchased license key applied, you do not need to enter anything into the "Update Access Key" field.

After clicking Check for Update confirm that you are presented with the 0.6.0 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for Beta 0.5.7 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Please stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- The End User License Agreement (EULA) has been updated to version 0.6.0. There are no changes to the content of the EULA, but the required EULA version which must be signed has been set to 0.6.0 to mark the full release. As a consequence you will be prompted to re-agree to the EULA after installing this update.
- Support for updating the software using a temporary Patreon license has been removed. The concept of an "update key" has also been removed. The software now only and always uses your signed license key to perform software updates.
- Ensure that a permissions failure when updating the software generates a clearly interpretable error instructing the user to run as an administrator or user with write permissions.
- Improve the experience of selecting a specific existing Wall segment by first hovering over the line to provide a more tolerant hit area which makes it easier to get hold of the specific Wall you want.
- Redesign the Controls Reference application to have expanded and updated information about current keyboard and mouse controls.
- Right clicking a Token to summon the HUD should (once again) acquire control over that Token if it is not currently controlled.
- Allow holding ALT when dropping a Tile to create it in an initially hidden state, similar to Tokens.
- Implement a specific layer of cache-busting so that Scene thumbnail images will immediately refresh in the sidebar in cases where the thumbnail was previously cached.
- The effectiveness of bezier smoothing for freehand drawings has been improved substantially and can now apply bezier smoothing in real time for freehand drawing previews and improve the smoothness of freehand drawing.


### Bug Fixes

- Fixed a server-side data handling issue which could cause updates to the user data path from within the Setup and Configuration screen to not properly apply after restart.
- Wall creation when using the CTRL key to start a new placement sometimes failed to chain from an intuitive position when not part of an active chain and no wall is controlled. This has been re-worked and should result in more predictable wall chaining behavior compared to what was observed in 0.5.7.
- Correct a bug where rolling initiative for multiple Tokens simultaneously does not use the correct initiative modifier for each individual combatant.
- Keyboard map zooming did not obey the same constraints as mousewheel zooming, allowing an unlimited amount of zoom-out/zoom-in.
- Solved a problem where Players do not have permission to configure a MeasuredTemplate which they were the original author of using the Config sheet.
- Resolved a problem where Text Drawings could get out of sync if changes were made to a Drawing text which was then dragged but not committed using the ENTER key.
- Fixed a problem which emerged for deleting Owned Items for un-linked Token Actors which failed to properly re-render the Token Actor sheet.
- Fixed a permission control issue whereby an Assistant GM did not have permission to control Combatants in a Combat Encounter.
- Allow hyphens and underscores to appear in Roll data references to support multi-word terms which have been slugified.
- Resolve an issue where a Compendium pack which is unlocked after being opened remains un-editable instead of updating when the unlock occurs.
- The Drop handler for Hotbar Macro events has been improved to work for drop events from alternative sources like passing data directly or dropping from a Compendium pack.
- Keyboard handling for Text drawings should now ignore events where CTRL or ALT keys are active.
- Fixed an issue which could occur when creating a subfolder in S3 using the FilePicker which was defined with a space in it's requested name.
- Fixed an issue with some of the internal grid position helpers for hexagonal grid types which were encountering very minor rounding issues since the changes to hex grid definition in 0.5.6. An example symptom of this which is now fixed is that keyboard token movement on hexagonal maps hits an invisible vertical barrier due to hex width rounding.


### Framework and API Changes

- [BREAKING] Conclude deprecations in the client-side code which were scheduled for 0.6.0. This mostly effects the use of create/update/delete many functions which MUST now be migrated. See the following issue on Gitlab for details: https://gitlab.com/foundrynet/foundryvtt/-/issues/2878.
- Allow the Item.delete() method to delete an owned item if the Item instance is owned by an Actor.
- Clean up FormApplication handling of change events to include textarea and consolidate range and color-picker changes in a single wrapper.
- Specify explicitly the array of core supported language translations to avoid unnecessary srcExists checks which can display console errors for other languages.
- When drawing results from a RollTable that is set to draw without replacement using RollTable#drawMany(), the drawn results are not marked as drawn in the RollTable.

`Item.delete()``RollTable#drawMany()`
### Documentation Improvements

- Comprehensive improvements to many pages of the Knowledge Base.
- Updated API documentation for 0.6.0 release.


### Known Issues

- There are a small number of minor bugs which are currently known. These are viewable on GitLab under the 0.6.1 milestone: https://gitlab.com/foundrynet/foundryvtt/-/milestones/45

