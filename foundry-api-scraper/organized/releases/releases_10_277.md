# Release 10.277 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.277

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.277


## Version 10 Testing


##### August 03, 2022


## Foundry Virtual Tabletop - Version 10 Testing 3 Notes

WARNING: Be certain to carefully back up any critical user data before installing this update.

Just because several of the team are enjoying GenCon doesn't mean we can't get another updated release out for Version 10! This release on the Feature Testing channel focuses on refining the UX and UI, finalizing some key features and exterminating some of the lingering bugs found during the past two testing releases. Version 10 has focused bringing forward a new Tours system to provide more organic and natural feeling instruction on how to use Foundry VTT, Vision Modes to provide all new ways to experience scenes through the eyes of your Tokens, and the result of our Feature Prioritization Poll: Journals V2, enhancing the way gamemasters and their players can chronicle their adventures. We look forward to further refining the user experience with these features as we work toward closing out the testing phase and moving into the stable period for V10!

WARNING: Releases on the Testing channel have the potential to introduce bugs that may be disruptive to play. These features are close to a stable release - but likely to still include some bugs and incompatibilities which may frustrate you. While these releases are intended for testing by the average user, we do not recommend you use them yet in your long running campaigns. We instead ask you try them out in a new World or one-shot with no modules.


## Update Highlights

With stable looming on the horizon we have continued to squash bugs and polish up the user experience surrounding this update's new features. As such, the majority of work done during this release was to incorporate feedback and bug reports with the aim of making V10 the most satisfying experience possible for our users.


#### A Vision for the Canvas

This iteration brought a number of improvements and bug fixes for vision modes and the way certain aspects of the game canvas are displayed. We've scrubbed out some visual bugs with dragging tokens, further improved vision calculation accuracy and performance, and exposed even more API functionality for community devs to leverage in their wild canvas-related projects. We've made some tweaks to how the default Tremor Sense vision mode determines where the ground is, tweaked a few knobs on the appearance of some of the vision modes, and made some changes to some of the assumptions around light source behavior. We still have more to go, but we're nearly there!


#### Pages of Journal Improvements

This update sees lots of UI and UX fixes to the new Journals V2 feature set, and while we've got a bit more polish and shine to put on them, they are working better than ever. This update brought in fixes for visual display bugs, improved the way raw html is displayed, corrected permission issues, map note visibility, and added a few small quality of life features to make editing journals even better. This release further polishes features of the new ProseMirror editor for Journals V2, and begins our aggressive campaign to sunset the use of TinyMCE.


#### Bugs for the Bug Throne

The team continues tirelessly hunting down bugs with guidance from you, our unfailingly dedicated and keen-eyed community, and this update definitely brings the heat, with the majority of the following patch notes being dedicated to the squishing of bugs both big and small throughout the software. This ensures that our users and community developers alike will have fewer creepy crawlies to contend with when the software finally goes stable in the not so distant future. A big thanks once again to everyone in the community helping us out by testing and reporting bugs, by doing your part you're ensuring our coders are able to push back the insect menace on the front lines!

All in all the team is very excited to get V10 Stable into the community's hands, and with this update we are closer than ever!


## Breaking Changes


### Other Changes

- Meta Issue: Overview of breaking changes in Document and data models from V9 to V10 (6849)


## New Features


### Architecture and Infrastructure

- We have improved the experience when a user reconnects after a Websocket disconnection. A notification is now raised indicating the reconnection has occurred. (4770)


### Documents and Data

- Ensured that raw HTML source code is presented in ProseMirror in a more readable state that better conforms to beautification expectations. (7719)


### Applications and User Interface

- Meta Issue: Implement "Journal V2" enhancing the interface and functionality of the journal system. (4941)
- Journal Page editing now treats use of CTRL (or CMD) + S as a hotkey to save and close the currently open editor. (7528)
- The Create Map Note Dialog folder select is now disabled if Create Corresponding Journal Entry is not checked. (7729)
- In order to improve performance on macOS systems with a Retina display, resolution scaling will now attempt to determine if a retina display exists, and if so will reduce the resolution by half. (6879)
- Scenes which have map notes available will now change the icon of for the Journal Notes layer, adding a small inner circle to the notes layer icon to indicate there are visible notes present. (7291)
- Added the ability to right click in the License Prompt when first launching the software, allowing users to paste in license keys if desired. (7471)
- Dropping a Document into a Rich Text Editor while you have highlighted text will now use that text as the label when generating a dynamic link. (7558)
- Card Hands and Piles may now only be duplicated if they are empty or, in the case of decks specifically, if they do not currently have any cards in a drawn state. (7594)
- When viewing a Tour, the target element for a Tour step will now automatically scroll into view. (7633)
- The Tour Manager application will now close when a Tour is launched or resumed. (7645)
- The bezier smoothing factor for Drawings has been limited to the range [0,0.5] in order to make smoothing on drawings more aesthetically pleasing while staying true to the original polygon. The scale for the DrawingConfig smoothing slider retains the intuitive range of [0,1]. (7658)
- The server administrator password field will now autofocus on setup authentication. (7717)
- Improved the layout of the NoteConfig sheet by switching several text inputs to be number inputs and widening the form slightly. (7726)

`[0,0.5]``DrawingConfig``[0,1]``NoteConfig`
### The Game Canvas

- Tokens which previously had no assigned Name value will now be migrated to an auto-populated token name to account for the fact that name is now a required field. (7699)


### Localization and Accessibility

- Added missing localization for KEYBINDINGS.FocusChat (7715)
- Expanded the detail provided on whisper messages, including all recipients of the message, even if you are the only recipient. (6469)

`KEYBINDINGS.FocusChat`
## API Improvements


### Architecture and Infrastructure

- Fixed an instance where an unnecessary copying of points would occur when creating polygons. (7484)
- To account for cases where a Document may contain EmbeddedDocuments which would not pass data validation, the initialization flow for EmbeddedCollection now passes validation information for invalid EmbeddedDocuments on to invalidDocumentIds and the getInvalid method. (7698)

`EmbeddedDocuments``EmbeddedCollection``EmbeddedDocuments``invalidDocumentIds``getInvalid`
### Documents and Data

- Ensured that when a JournalPageSheet is de-rendered it calls the closeJournalPageSheet hook. (7488)
- Programmatically selecting targets for players should no longer cause a deprecation warning in TokenLayer#_getCycleOrder (7735)
- Ensured that an input type of type="number" is properly rendered for game settings which declare a Number type but do not specify a range. (7656)
- Updating an invalid embedded document is now supported by the server-side where that update was previously rejected. (7672)
- Corrected an issue with server-side assignment of immutable fields which prevented changing a user role once it was previously set to "None". (7711)
- Embedded Documents created by Document#clone with the keepId = true no longer skip data preparation methods on creation. (7741)
- Messages#sayBubble no longer contains deprecated uses of .data (7673)
- Ensured that the ChatMessage#user field may not be null, correcting an error where rendering a ChatMessage caused the entire ChatLog to fail to render. (7712)
- performIntegerSort now correctly contains a[sortKey] as expected, and should no longer trigger an incompatibility warning. (7736)

`JournalPageSheet``closeJournalPageSheet``TokenLayer#_getCycleOrder``type="number"``Number``Document#clone``keepId = true``Messages#sayBubble``.data``ChatMessage#user``ChatMessage``ChatLog``performIntegerSort``a[sortKey]`
### Applications and User Interface

- Migrated more of console.warn to use foundry.utils.logCompatibilityWarning so those warnings can be filtered or suppressed. (7199)
- To correct for some small issues with extraneous functionality, ToursManagement now inherits from the base Application class instead of FormApplication. (7696)
- Improved the consistency of use of data-document-id for .combat-cycle buttons in sidebars. (7491)

`console.warn``foundry.utils.logCompatibilityWarning``ToursManagement``Application``FormApplication``data-document-id``.combat-cycle`
### The Game Canvas

- Based on community developer feedback the Token occlusionRadius flag implemented in V10d3 is now defined using grid units rather than pixels. (7527)
- The Tremor Sense vision mode now uses a Scene's background elevation as its defined elevation for testing visibility. (7531)
- To provide increased compatibility, update and flag methods for the PrototypeToken data model now redirect back to the Actor. (7597)
- Eliminated the need for the special NormalizedRectangle class by incorporating its functionality entirely into the base PIXI.Rectangle. (7687)
- A private method declaration has been removed from ClockwiseSweepPolygon, and point de-duplication has been shifted to the base PIXI polygon. This restores the intended API functionality of the ClockwiseSweepPolygon class, as a result ClockwiseSweepPolygon#_compute can once again be overridden as expected. (7691)

`occlusionRadius``PrototypeToken``NormalizedRectangle``PIXI.Rectangle``ClockwiseSweepPolygon``ClockwiseSweepPolygon``ClockwiseSweepPolygon#_compute`
### Package Development

- Package data such as PackageCompatibility and RelatedPackage are now exposed for API use. (7634)

`PackageCompatibility``RelatedPackage`
### Other Changes

- The Tour#_getTargetElement method has been added, allowing for easier customization and sub-classing of Tours. (7644)
- Ensured that custom prepareData workflow for all documents proceeds safely and catches errors for handling or correction. (7688)
- The Document#collections object has been added, providing a mapping of embedded collection instances within the document instance. (7697)

`Tour#_getTargetElement``prepareData``Document#collections`
## Bug Fixes


### Architecture and Infrastructure

- TextEditor._decoder should no longer be initialized twice as part of the initialization workflow for TextEditor (7702)
- Installing Foundry VTT on a fresh machine will properly create the userData directory as expected. (7713)

`TextEditor._decoder``TextEditor`
### Documents and Data

- Map Notes created from a Journal Page now have their permissions handled based on the Journal Page permission settings, rather than permissions from their parent Journal Entry. (7730)
- When creating a Journal Entry Page from markdown, HTML content should now be generated as expected. (7592)
- Dynamic link generation in the ProseMirror editor no longer causes the cursor to be hidden until a refresh. (7608)
- Corrected an issue where unowned pages inside a journal entry owned by a player would have incorrect permission levels. (7662)


### Applications and User Interface

- Ensured that the units for Vision Range and Light Radius in the Token config are wrapped in parentheses. (7493)
- Improved the placement of targeting pips from other users. These pips are now found in the top-center of the token frame and expand out horizontally. This also fixes a bug which prevented these pips from being visible unless the token was targeted by the active user. (7648)
- Fixed a bug where previewed changes to the darkness level in the SceneConfig are not reverted when the SceneConfig is closed without saving. (7652)
- Ensured that changing a tracked resource for combat will take effect immediately instead of waiting for a new combat or refresh. (7655)
- Fixed a visual bug where Measured Templates wouldn't lose their control highlight after being hovered for the first time. (7664)
- Corrected an error where font URLs had absolute paths which did not work if a routePrefix is set. (7669)
- Ensured that worlds are always paused at launch. (7671)
- Fixed an issue where clicking table of content links in multi-page mode would not navigate to new pages. (7674)
- Journal table of content lines with the same header level now not have the same amount of indentation as intended. (7676)
- The TinyMCE editor once again correctly matches the height of the Journal Sheet. (7677)
- Clicking on the "Token" header button of an Actor Sheet should once again open the configuration window for the synthetic (placed) token as expected. (7700)
- Fixed multiple Drawing Config window title issues, ensuring the title and drawing id are properly displayed. (7725)

`SceneConfig``SceneConfig``routePrefix`
### The Game Canvas

- Corrected an issue which caused Tokens to not save Fog Exploration data if their vision radius was set to 0 despite having a light source. (7733)
- Fixed a bug where changing lighting parameters of an already-placed linked token would have no effect. (7734)
- Fixed an issue where redrawing a token creates a ghost border. (7495)
- Improved the resilience of TokenMesh animations by storing cached display attributes on the Token object itself. (7502)
- Double right-clicking the control icon of a measured template should no longer open template configuration UI now that right-click toggle workflow is used for Templates. (7524)
- Background shaders for light sources should now be visible when appropriate. (7641)
- Resolved a visual bug where the Hex Grid appeared to extend beyond the usable canvas border. (7650)
- Updated light sources to render shader effects on lights with black as a color as long as they have a non-zero intensity. (7663)
- Ensured that global light sources recreated in initializeLightSources are properly updated and disposed of. (7684)
- Optimized the FramebufferSnapshot class for light sources and darkness to avoid extra-blitting. (7685)
- The AdaptiveColorationShader.defaultUniforms.colorationAlpha now defaults to a value of 1 as expected. (7693)
- To correct for an issue where assigning certain colors to light sources could affect appearance of the darkness in unexpected ways, color settings for Light Sources with a negative luminosity have been reverted to mirror the functionality in V9. (7694)
- Scene background color should now be properly applied in cases where parts of the scene are not covered with a background image. (7695)
- Inactive sound sources will no longer attempt to draw the preview polygon for said sound source. (7728)

`TokenMesh``initializeLightSources``FramebufferSnapshot``AdaptiveColorationShader.defaultUniforms.colorationAlpha`
### Package Development

- Package relationships should once again download required dependencies as expected. (7537)
- Installing packages should once again correctly display the package version number. (7566)
- Ensured that deprecation warnings show for modules that use the deprecated system field. (7651)
- Fixed a problem with systems containing Actor or Item packs without a system field fail to load. (7678)
- Clicking Manage Modules no longer throws an error and prevents the window from opening. (7683)
- Clicking 'disable all modules' will no longer disable modules which are required as dependencies of the world or system. (7708)
- Deactivating a module with a dependency that is also a system required dependency will no longer prompt to deactivate the dependency. (7714)

`system``Actor``Item``system`
### Dice and Cards

- Ensured that a custom Roll subclass is preserved when re-constituting roll data during ChatMessage data preparation. (7668)

`ChatMessage`
## Documentation Improvements


### Documents and Data

- Corrected Combatant._sortCombatants documentation claiming to sort by name as a fallback when it doesn't. (7682)

`Combatant._sortCombatants`
### Other Changes

- An issue with the TSDoc definition for ProseMirrorMenu#MENU_ITEM_SCOPES has been corrected. (7705)

`ProseMirrorMenu#MENU_ITEM_SCOPES`