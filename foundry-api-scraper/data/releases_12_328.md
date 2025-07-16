# Release 12.328 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.328

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.328


## Version 12 Stable


##### June 27, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 4 Release Notes

We are happy to announce the third release of Foundry Virtual Tabletop Version 12. This patch continues to incrementally improve upon Foundry V12 Stable, bringing a number of bug fixes and also a few refinements to features that are new to V12. Thanks again to everyone for submitting your feedback and helping us stay on top of bugs!

Notable improvements include support for System/Module defined Dynamic Token Rings, better animation support for Dynamic Tokens, and configurable options for Ring and Background colors as well as color band position. This release also includes Package sidegrade improvements for regular and premium content and enhancements to Region Behaviors like the option for a confirmation prompt when a User enters a Teleporter Region. For a complete log of all the features added in V12, please see the notes for our first release on the stable channel.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Architecture and Infrastructure

- Premium content Packages can now benefit from sidegrade workflows which improve their installed metadata using the website's central repository. (11202)
- Package sidegrade data is now integrated before attempting a Package installation instead of after installation has completed. (11203)


### Applications and User Interface

- Added an Allow Choice option to the Teleport Token Behavior that, if enabled, allows the User that moved the Token into the Region to choose whether to teleport it. (11033)
- Tokens are now teleported after their movement animation is completed. (11194)
- Tokens that are moving along a Ruler path can now be controlled during the animation. (11161)
- When creating a backup on the Setup screen, the Backup Name field is now autofocused. (11224)
- Increased the maximum value for the Subject Scale Correction Token setting to match the Scale setting. (11266)
- Improved the informativeness of HTMLDocumentTagsElement placeholder text. (11287)

`HTMLDocumentTagsElement`
### The Game Canvas

- Reduced the speed of the Starlight animation. (10308)
- Users with Observer permissions over Tokens that have the secret disposition can now know their disposition. (11189)
- Teleporting a Token now prevents animating Token movement but allows other animations to still run. (11244)
- Clamped the current elevation of teleported Tokens to the elevation range of the destination Region instead of choosing a random elevation within the range. (11253)
- Added support for Ring Scale and Subject animation. (11257)


### Dice and Cards

- The first input field in the roll resolver application is now autofocused when rendered. (11092)
- Blind rolls are no longer evaluated interactively. (11208)


### Localization and Accessibility

- Switched RegionBehaviorType subclasses to use static LOCALIZATION_PREFIXES instead of explicitly defining the localization label and hint fields in each field. (11137)

`RegionBehaviorType``LOCALIZATION_PREFIXES`
### Other Changes

- The BEHAVIOR_STATUS Region events that are triggered when the Scene is viewed/unviewed are now awaited before the draw/tear down workflow continues. (11182)
- Assistant GMs without the MACRO_SCRIPT User Permission can no longer create Execute Script Region Behaviors or change the source of existing Execute Script Region Behaviors. (11207)
- Region Events are now triggered at the end of the CRUD workflow instead of in the middle of it. (11272)
- Removed the console group that captures log messages before the DOMContentLoaded event. (11252)
- Reworded the "Check for Update" tooltip to make it clear that the package is updated if an update is available. (11249)

`BEHAVIOR_STATUS``await``MACRO_SCRIPT``DOMContentLoaded`
## API Improvements


### Documents and Data

- Added the event parameter to Macro execution. (9927)

`event`
### Applications and User Interface

- Primary Documents can now be added to a HTMLDocumentTagsElement input by providing the ID. (10697)
- Added support for passing the groups parameter to the selectOptions Handlebars helper which is forwarded to foundry.applications.fields.createSelectInput. (10715)
- Added HTMLDocumentTagsElement#_validateDocument which allows subclasses to impose custom validation logic. (11101)
- The ForeignDocumentField is now rendered as an HTMLSelectElement of visible Documents. (11191)
- In DialogV2 the inner dialog-content element now also has the standard-form class. (11213)
- Added the protected methods DocumentSheetV2#_processFormData and DocumentSheetV2#_processSubmitData which add more points in the form submission process where subclasses can customize behavior. (11223)
- The HTMLStringTagsElement element now disallows empty strings. (11247)
- Added an optional slug property to the HTMLStringTagsElement element which automatically converts input strings to slugs. (11248)
- Added an autofocus option to FormInputConfig. (11279)
- When a new Document UUID is added to an HTMLDocumentTagsElement configured as single=true it now replaces the existing Document rather than throw an error. (11288)

`HTMLDocumentTagsElement``groups``selectOptions``foundry.applications.fields.createSelectInput``HTMLDocumentTagsElement#_validateDocument``ForeignDocumentField``HTMLSelectElement``DialogV2``dialog-content``standard-form``DocumentSheetV2#_processFormData``DocumentSheetV2#_processSubmitData``HTMLStringTagsElement``HTMLStringTagsElement``autofocus``FormInputConfig``HTMLDocumentTagsElement``single=true`
### The Game Canvas

- Modules can now register additional Dynamic Token Rings. Caution: using a large number of comingled rings can negatively impact performance. (10714)
- Added an API for System/Module-defined Token-Region containment. (10831)
- Added support for configurable Token Ring color band positioning. (11143)
- Added the property TokenDocument#isSecret, which is true if the TokenDocument has the secret disposition and the User lacks the necessary permissions to see their disposition. (11180)
- Added default Ring and Background Color options to the JSON configuration for Dynamic Rings. (11271)

`TokenDocument#isSecret``TokenDocument`
### Package Development

- Implemented an API for packages to provide Actor art mappings. (11125)


### Other Changes

- Allow active HTMLProseMirrorEditor instances to contribute their current unsaved content to the form submission event. (11110)
- The GM returned by Users#activeGM is now always a full GM if both full GMs and Assistant GMs are active. (11242)

`HTMLProseMirrorEditor``Users#activeGM`
## Bug Fixes


### Documents and Data

- Resolved an issue with full text search where DocumentCollection.getSearchableFields did not return the correct field paths. (10948)
- The NumberField#_toInput and StringField#_toInput no longer fall back to initial values if config.value is null. (11173)
- Scrolling text is no longer displayed on Tokens with the secret disposition unless the User has the necessary permission to know that information. (11179)
- Full Text Search (DocumentCollection#search) now searches the text content of the HTML and not the HTML. (11198)
- Script Macros can no longer be created or updated by Users without the "Use Script Macros" permission. (11210)
- Fixed an issue in the Markdown to HTML conversion of JournalEntryPage which occasionally caused issues with saving. (11228)
- Combat#_onEndRound is no longer called at the beginning of Combat. (11238)
- Macros that were originally saved with a broken syntax can now be saved after being updated to resolve the syntax issues. (11281)

`DocumentCollection.getSearchableFields``NumberField#_toInput``StringField#_toInput``config.value``null``DocumentCollection#search``JournalEntryPage``Combat#_onEndRound`
### Applications and User Interface

- The Roll button is now disabled when the Roll Table is non-editable and lacks a formula. (10280)
- Fixed incorrect color picker placeholders. (10812)
- The HTMLDocumentTagsElement now avoids an error if toggling its disabled property before the element has been attached to the DOM. (11102)
- Enhanced numberFormat functionality in Handlebars when handling null and undefined values and improved logging. (11165)
- Drawings and Tiles with zero width or height can now be selected. (11166)
- The HTMLFilePickerElement no longer always displays the default "path/to/file.ext" placeholder instead of the configured placeholder. (11172)
- Fixed a regression which prevented vertical scrolling for Scene Region Shapes and Behaviors tabs of the config sheet. (11186)
- Corrected an HTML markup issue with FilePicker S3 buckets which prevented file upload. (11218)
- Content links for Playlists/Sounds now once again visually toggle between the play/stop icon. (11226)
- We now ensure that the min, max, and step of both inner elements of an HTMLRangePickerElement element are consistent. (11256)
- Handlebars ApplicationV2 apps now add focus to the first element with autofocus when rendered for the first time. (11278)
- The SceneConfig input fields are now populated with their source data rather than their derived data. (11283)

`HTMLDocumentTagsElement``disabled``numberFormat``null``undefined``HTMLFilePickerElement``FilePicker``min``max``step``HTMLRangePickerElement``ApplicationV2``autofocus``SceneConfig`
### The Game Canvas

- Improved texture transitions of Tokens with a Dynamic Token Ring. (11019)
- Fixed TokenDocument#getTrackedAttributes to only return tracked attributes from the Token's Actor type. (11089)
- Fixed an issue where text drawings did not correctly update text during preview or after clicking Update Drawing and required a refresh. (11146)
- Creating a new Text Drawing no longer sometimes results in the word "undefined" appearing. (11147)
- Fixed an issue where the new render flag recoverFromPreview could cause intermittent Token disappearance when the Token Ring is enabled in the Token Config UI. (11170)
- Improved messaging to users when creating a Drawing fails because it has no visible parts. (11209)
- Token targets of another User are now cleared when they switch to a different Scene. (11227)
- Fixed an issue that led to status effect icons occasionally flashing when clicked in rapid succession. (11231)
- Implemented Dynamic Ring clipping based on rectangular distance instead of euclidean distance. (11237)
- Reverting the deletion of an unlinked Token with CTRL+Z no longer clears the Actor Delta. (11263)
- Using CTRL+Z on a Token after the shapes or elevation range of a Region was changed that made the Token enter the Region no longer triggers an Exit event. (11264)
- Flags added to a Document are now reverted by CTRL+Z. (11265)
- Clearing the Tint Color input in the Tile config no longer crashes the Canvas. (11285)

`TokenDocument#getTrackedAttributes``recoverFromPreview`
### Package Development

- Fixed an issue with unzipping package archives that are greater than 4 gigabytes. (11268)


### Dice and Cards

- The Cards#_resetStack and Cards#pass methods no longer throw an error when trying to return a Card to a Deck if the "original" Card has been deleted. (11171)
- Fixed an issue with DiceTerm evaluation with negative numbers. (11010)

`Cards#_resetStack``Cards#pass``DiceTerm`
### Localization and Accessibility

- The UI notification when capturing the Scene view in the Scene config is now localized. (10321)


### Other Changes

- The Configure Ownership dialog on Compendium Packs no longer throws an error when it is closed without a choice. (10264)
- Entering an invalid password on login no longer throws an HttpError deprecation warning. (11174)
- ClientDocument#sortRelative no longer throws an error if the Document has an ApplicationV2 sheet that is rendered. We also added a submit method to DocumentSheetV2. (11230)
- Fixed Assistant GMs bypassing the FILES_BROWSE permission test in the "can User create/update Actor" check. (11243)
- Fixed an issue that prevented /reply from working to reply to a whisper. (11246)
- The ChatMessage#testUserPermission now returns true for the author of the chat message. (11250)
- Added support for malformed zips produced by certain outdated versions of Windows' built-in archiver. (11276)

`HttpError``ClientDocument#sortRelative``ApplicationV2``submit``DocumentSheetV2``FILES_BROWSE``/reply``ChatMessage#testUserPermission``true`
## Documentation Improvements


### Documents and Data

- Added documentation for StringFieldOptions.textSearch. (10898)

`StringFieldOptions.textSearch`
### Localization and Accessibility

- Fixed a few typos and made some wording changes in the Environment Lighting tab of the Scene config. (11199)


### Other Changes

- Fixed the incorrect categorization of Document#toObject so it is no longer under Deprecations and Compatibility. (10994)
- Fixed Cards#passDialog, Cards#drawDialog, Cards#drawDialog, and Cards#playDialog incorrectly returning a number. (11109)
- Added the documentation for HookEvents back to the v12 API documentation. (11151)

`Document#toObject``Cards#passDialog``Cards#drawDialog``Cards#drawDialog``Cards#playDialog``HookEvents`