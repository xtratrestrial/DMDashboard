# Release 0.6.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.76

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.5


## Version 6 Stable


##### July 05, 2020


## Foundry Virtual Tabletop - Version 0.6.5 Update Notes


#### Overview of Changes

This is Foundry Virtual Tabletop Release version 0.6.5, an update on the Release channel which is available to all Foundry Virtual Tabletop license holders. The Release channel contains updates which should be stable and ready for widespread consumption by all Foundry users.

This update incorporates a number of bug fixes and improvements in response to feedback collected during the 0.6.4 update cycle. More major changes are on their way in the upcoming 0.7.x series which should have it's first alpha release soon.


#### How to Update

If you wish to apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Release" channel in the dropdown menu. Please note, it is recommended for most users to stay on the Release channel and wait for updates there rather than using Alpha or Beta updates.

After clicking Check for Update confirm that you are presented with the 0.6.5 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


#### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.5 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please use the Contact Us form and select "Bug Report" as your category.

Please stay up to date on progress by following the project roadmap on Gitlab.


### New Features

- When setting or changing a Scene background image, Foundry will now only automatically replace the width and height with the native image dimensions if those fields are manually cleared from the form. Otherwise it will keep the previous Scene dimensions in-place.
- A new user permission setting has been added for "Show Rulers", which allows control to selectively enable or disable the display of ruler measurements to other connected players based on their User role.
- When more than one Application window is open, such as Actor sheets, clicking anywhere within the window now brings it to the front. Previously a window would only float to the top if the click occurred in the application header bar.
- If the game is paused, users will now be presented with a warning message when attempting a disallowed action like moving a Token or attempting to open a Door.
- Provided support for /me as an alternative command syntax to /emote or /em.
- Added a "Show" checkbox toggle next to the Access Key for each User in the Player Configuration menu which allows a GM user to double-check the currently set access key value without needing to change it.
- Using the FilePicker to upload new media content to S3 will now correctly set the Content-Type as metadata attached to the uploaded file.
- Changed the strictness of validation within the Dice rolling syntax to allow for the possibility of rolling zero of a certain denomination of die (for example /r 0d6). This can help with appropriately scaling certain abilities with a mathematical formula where sometimes bonus dice are not rolled.

`/me``/emote``/em``/r 0d6`
### Bug Fixes

- Fixed an issue with Wall creation and chaining (holding CTRL) which was incorrectly interpreting the prior chained endpoint for the wall.
- Addressed an issue where hyperlinks in TinyMCE editors would show up with incorrect formatting or fail to properly link. Please note - there is still a known issue here where, if the hyperlink occurs at the very beginning of a new paragraph in a Journal Entry, the link will not be properly replaced. More nuanced logic for how this replacement occurs has already been implemented and will be deployed as part of 0.7.0.
- Fixed an issue with the grid configuration tool where scenes with a grid size larger than 200px were incorrectly constrained, causing the grid alignment of the Scene to become broken when the configuration tool was activated.
- Form Data processing failed to correctly extract editable image paths in cases where a Route Prefix was configured in the server options.
- TinyMCE stylesheet not working as expected when a routePrefix was applied in the server configuration.
- Setting a Prototype Token to have a wildcard with a non-existent directory no longer prevents the Token configuration menu from opening. Tokens with invalid wildcard image paths can still be placed on the canvas, but their appearance will default to the "mystery man".
- Removed an incorrect rounding call within the toRadians helper method which introduced some small inaccuracy when converting from degrees to radians.
- The FilePicker now automatically focuses on the address bar when its tab is changed so that using the Tab key to cycle among focusable form inputs no longer targets fields in inactive tabs.
- Provide some explicit error handling when a dice Roll does not produce a numeric outcome to indicate that the input data or formula produced an invalid result.
- Decode HTML entities in Roll Table results so that any special characters like inequality operators contained inside inline-rolls are displayed properly and respected in the resulting dice roll formulae.
- Deleting a controlled Token which has vision settings but is not linked to a valid Actor causes the Sight Layer to not automatically update.

`toRadians`
### Framework and API Changes

- Updated the _onEditImage event listener and handler for the ActorSheet and ItemSheet classes. These are now more generic, to allow for more or different edit targets to be supported by the same handler logic.
- Instead of trying to process an invalid chat slash command, Foundry will now display an error message.
- Actor.registeredSheets no longer returns references for Items, but Actors as intended.
- Added a Token#observer attribute which provides a boolean flag for whether the current game User has at least "Observer" permission to the Token.
- Added a TextEditor.decodeHTML(html) helper method to efficiently translate an encoded HTML string back into unicode.
- Utilize web fonts API to ensure that all fonts are properly loaded (with a 3 second timeout) before trying to render the game canvas.

`_onEditImage``Actor.registeredSheets``Token#observer``TextEditor.decodeHTML(html)`
### Documentation Improvements

- API documentation updated to be consistent with the 0.6.5 software.


### Known Issues

A number of more complex or potentially breaking bug fixes were shifted to the 0.7.x Milestone in order to provide adequate testing before they are packaged for release. For more information please review the milestones below:

- Known Issues to be addressed in 0.7.0
- Known Issues to be addressed in 0.7.x

