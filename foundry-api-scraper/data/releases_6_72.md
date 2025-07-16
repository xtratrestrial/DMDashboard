# Release 0.6.1 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.72

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.1


## Version 6 Testing


##### May 30, 2020


## Foundry Virtual Tabletop - Version 0.6.1 Update Notes


#### Overview of Changes

This is Foundry Virtual Tabletop Release version 0.6.1, a update on the "Beta" channel which is available to all Foundry Virtual Tabletop license holders. The Beta channel contains updates which are close to ready for release, but may still have some minor remaining issues present. If no meaningful issues are encountered in the next several days these changes will be available on the Release channel (as version 0.6.2).

This update was originally intended to go directly to the Release channel, but due to a few compatibility issues which were detected (and since resolved) it will be held on the Beta channel.

This update focuses on bug fixes and user experience adjustments that improve the release 0.6.0 version. There are a handful of new features included as well which are deemed unlikely to introduce any issues or breaking changes.

Please see the recent Developer Q&A broadcast on Twitch for an overview of these changes and a demonstration of them in action.


#### About this Update

Please read the following important reminder about this update.

This is a Beta channel update which should be stable for all users, but may contain some module conflicts or compatibility issues. It is only recommended for users to update to this version if they are comfortable with accepting some minor risks. Users are discouraged from updating to this version if it is immediately before a game session. Especially if you are on the alpha or beta channels, but even in the case of release channel, please take care to periodically back up your critical user data in case you experience any issues.


#### How to Update

To apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release (Stable)" channel in the dropdown menu. It is recommended for most users to stay on the Release channel for all updates unless you have a specific desire to get Alpha or Beta changes in the future.

After clicking Check for Update confirm that you are presented with the 0.6.1 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).

Since the EULA was updated in this version you will be prompted to accept the new license agreement after the update is installed.


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.1 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please go to the following address and select "Bug Report" as your category. https://foundryvtt.com/contact-us/

Please stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Allow World packages to be installed using the Package browser and a manifest link in the same way that Modules and Systems can be.
- Add support for Token color tinting with compatibility for both video and image token textures. Color tints can be added to either placed or prototype tokens. To remove a color tint simply empty the field next to the color picker.
- Improve the clarity in Token Configuration of "grid units" vs. "distance units" which are used for different fields.
- Log authentication failures so that external services can lock accounts or ban IP addresses for too many failed attempts.
- In the special case of freehand drawings, the created Drawing should not be selected immediately after creation.
- Confirming a change to a text Drawing which leaves the text completely empty will now delete the Drawing.
- Add a number of new icons which can be used for map notes with Journal Entries.
- A minor update to the EULA terminology to remove some references to testing phases and to clarify the rights that are granted to software license owners.
- Provide an informative error message if the user cannot sign the EULA agreement because their computer is unable to reach the license server.
- Automatically replace a Scene thumbnail image with a base64 image string when that Scene is written into a Compendium pack.
- Scene panning controls can result in scenes being dragged to inaccessible positions. The destination position for canvas panning is now constrained to remain in-bounds.
- Add a "Go Back" button to the Fatal Error view in case users try to join before a game is set up they can get to the log in screen later.
- Executing a Ruler movement for a token larger than 1x1 does not correctly track which grid space of the token the measurement began from, resulting in the movement always finishing in the top-left square.
- Allow the "Show to Players" link to work for Journal Entries in Compendium packs.
- Explicitly handle ESC keypresses to close an active dialog window without choosing any available choice


### Bug Fixes

- Entering a license key with invalid structure, for example leading or trailing spaces, allows the verification process to proceed when it should instead reject the key as malformed.
- Remove the "Beta" tag from the settings sidebar and login pages.
- Some Scene changes were not properly triggering a full Canvas re-draw, leaving the user unable to interact with or pan the canvas.
- Shortly after editing walls, hovering over a wall segment stops bringing it to the "top".
- Fix a wall creation bug where the initial endpoint when chain-creating could be an exact match for an existing endpoint, therefore having an undefined distance and being misidentified.
- Prevent the visible flicker when moving Drawings by hiding the original drawing until after the update operation completes.
- Module registered settings menu buttons appear outside of the relevant section for the module that registered them.
- Font Family changes to drawings did not take effect unless the text was also changed.
- Token HUD was sometimes becoming stuck and left displayed in place when a Token was moved away.
- GM-only controls in the Controls Reference were un-intuitively highlighted in white, the styling has now been changed to be less glaring.
- The toggle button on the Macros Directory is 2px too tall. It has been given a haircut.
- Actor Token image should once again automatically be applied when the Actor image is set if it's currently using the mystery man.
- The number of Results in a Roll Table does not immediately update the display of the entity in the sidebar tab.
- The ALT key should now only highlight borders for objects on Canvas Layers which are currently interactive.
- Dragging and dropping a Compendium entry on itself incorrectly created more copies within the Compendium pack.
- Do not attempt to restore input focus to a form element which cannot be focused.
- Combat Tracker tools for Token selection and hovering should not respond for Users who do not have observer rights to any Token that is not visible.
- If the Active scene is deleted when it's parent Folder is deleted, that Scene did not become deactivated.
- The interactive area of the canvas did not correctly change when using the grid configuration tool to upscale the canvas size, meaning that some areas of the canvas could not be panned.
- The size of the Grid Layer should adjust in real-time when rescaling a background image using the Grid Configuration tool.
- The Playlist Create dialog should confirm it's creation on ENTER by defining a default choice.
- Map Note label with "Centered" orientation puts the text label behind the icon, now the label is above the icon.
- Multiple instances of the same webm token in a combat encounter do not all receive the same static token preview image, sometimes it breaks and no preview image is provided.


### Framework and API Changes

- Reject unauthorized POST requests to /setup as forbidden rather than redirecting to Home.
- Add server-side validation function to validate a color string input.
- The deleteEmbeddedEntity function on a synthetic Actor does not have the same method signature as on a real Actor.
- Additional options passed to Combat#rollAll are not properly forwarded to each rollInitiative call.
- Provide an Entity helper method toCompendium and an EntityCollection method fromCompendium for sanitizing the entity data when importing/exporting to or from a compendium pack and the World to ensure that certain fields like folders, active states, flags, or permissions do not get persisted.
- Prevent the creation of extremely large Measured Templates with a server-side validation rule which rejects excessive values.

`deleteEmbeddedEntity``Combat#rollAll``rollInitiative``toCompendium``fromCompendium`
### Documentation Improvements

- Updated API documentation for 0.6.1 release.


### Known Issues

- None at this time.

