# Release 10.283 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.283

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.283


## Version 10 Stable


##### August 31, 2022


## Foundry Virtual Tabletop - Version 10 Stable Release Notes


## IMPORTANT: How to Update Safely To a New Version

This update performs a data migration when worlds are launched which cannot be reversed if you do not backup your data.

- Back up your userdata from version 9 in case you need to revert to an earlier version. This can be done by (following this handy guide).
- Download a fresh copy of v10 from the download page.
- Uninstall your current version of Foundry VTT.
- After launching Foundry VTT in v10, take a moment to update your Game Systems and Add-on Modules. Some systems and modules will have a v10 compatible version available, some will not.
- Launch your world. Be aware that in order to protect your data, all modules will initially be disabled during the first launch of a world in Version 10. A prompt will remind you that This is the last opportunity to save your data if you have not already performed a backup!
- Take some time to test your world and make sure everything is in working order before re-enabling any modules.
- Carefully re-enable a few Add-on Modules at a time, choosing ones you view as most essential. Take the time to test your world in-between to make sure nothing has drastically changed.
- If everything has gone well, congratulations! Enjoy all the new features Version 10 brings!


## Update Overview

At long last we are proud and excited to announce the first build in the stable release branch of Version 10! This is, without a doubt, our largest stable release yet and in completing it we have completed nearly 1000 separate feature improvements and bug fixes over the course of its development. This release is the culmination of thousands of hours of development time, with work having begun as early as January 2022, and we are extremely proud to be able to bring its features to our community. V10's development focused on several key aspects of the software, including a complete renovation of our Journals system (bringing a new editor, collaborative editing, new supported journal types and more), drastic changes to the way Token Vision works (including the new Sight and Detection Modes system), the finalization of the Adventure Document framework, the groundwork for our Tours and Tooltips UI improvements to help guide new users, and so much more!

As always, we caution our users to be careful when updating to a brand new stable build, as many game systems and add-on modules will not be updated to support the latest version just yet. If your game relies on a lot of modules or you aren't certain about whether your system supports it, a small measure of patience now can save you some headaches as a result of incompatibilities. Be sure, as always, to back up your userdata.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

It has been a long and rewarding road as we have worked on V10, and we've managed to pack every inch of it with new features and improvements. Not only have we improved performance in a lot of ways, we have introduced sweeping changes to Journal Entries, Tours to help new users acclimatize to the software, improvements to the UX and UI across the board, new Vision and Detection modes for Tokens, and so much more. There is such a variety of new functionality that we've decided to break it down into individual categories to help you find the information that most interests you:

As the winner of the community patreon prioritization vote, V10 focused heavily on improving the Journal Entry system. We have completely refactored Journals to be more intuitive and easier to use, and we have introduced a facet of Journals called Pages. Any single Journal entry is now composed of multiple Pages, and each page can provide a different type of content, with user permissions managed independently of the parent journal entry. The Journal UI has received a complete overhaul, and now includes a sidebar providing a table of contents, presenting each page that has been created as well as clickable links to the headers within a text page. In addition to all these cool features, we want to especially highlight:

- We have introduced the new ProseMirror text editor, which replaces TinyMCE for rich-text fields, offering improvements to the overall editing experience.
- Journal Entries now support Markdown formatting, allowing users to create rich text content using the simple Markdown syntax common in many text editing and chat programs.
- We often hear requests to add a way to allow multiple users to edit the same Journal without overwriting each others changes. The new ProseMirror editor implementation allows collaborative editing for text pages, and users can see changes in realtime as the document is updated by others. Please note that raw HTML editing does not function with collaborative editing due to limitations of that editing process specifically.
- It is now possible to embed PDFs and Videos as new page types, allowing you to easily view particular reference documents or provide video clips (including YouTube) embedded for your players to see.

The first iteration of a robust framework, we are proud to announce the addition of Token Vision and Detection Modes, both of which allows users and developers alike the ability to alter how vision appears and functions for Tokens. Available for configuration from the Vision Tab, Vision Modes alter how the token's vision appears, while Detection Modes change the mechanical functions of what the token can see. A token may only have one Vision Mode, but may have numerous Detection Modes.

Foundry VTT offers native support for the following, implemented in a system-agnostic way, with the expectation that game systems will alter their behavior to match the rules of particular games.


### Vision Modes

- Basic Vision - The standard, default vision mode appearance.
- Darkvision - In areas where no light source exists, vision is desaturated and does not display color. Areas which contain light sources show colors as expected.
- Monochromatic - Similar to darkvision, but regardless of light source, this token will not be able to see colors.
- Tremorsense - A visual effect similar to a radar sweep, which pulses and visually obscures the scene's background but preserves details such as fog exploration and wall placement.
- Light Amplification - A visual effect similar to night-vision goggles.


### Detection Modes

Detection modes that begin with "See" require line of sight and will not reveal objects behind walls, while ones beginning with "Sense" do not require line of sight and will pierce walls to reveal what is behind them.

- Basic Sight - Used to override the default basic sight settings.
- See Invisibility - Allows a token to see other tokens that have been set with the "Invisible" condition.
- Sense Invisibility - Allows the token to see other tokens that have been set with the "Invisible" condition regardless of walls.
- Feel Tremor - allows the token to sense all other tokens at their elevation. Tokens which have an elevation greater than the scene's height are presumed to be floating or flying and will not appear on this token's vision.
- See All - Allows the token to see all other tokens regardless of available light.
- Sense All - Allows the token to see all other tokens regardless of available light, regardless of the presence of walls.

For more information on using Token Vision, see: Tokens: Token Vision.

As part of a larger, multi-update effort to improve the overall user experience of Foundry Virtual Tabletop, we have made a number of changes to the software that will make it easier to use and more intuitive.

- We have implemented new ways for users to get the ID of a Document, simply by clicking on a button next to the document's name in an application header, making it much more convenient for users to reference a specific document by ID in macro use or otherwise.
- Creating any new document will now automatically populate the name field if it is left blank, making it easier and quicker to create multiple new documents, and we have improved that workflow by reducing the overall required number of clicks to create new documents.
- We have completely refactored the way the Game Settings window is displayed, providing a new appearance more in line with the rest of the software, and making it easier to use.
- The Journal Notes layer now has a simple indicator which shows users whether or not any notes are visible to them on the scene.
- Measured templates, ambient lights, and ambient sounds have been improved to have feature parity with one another. It is now possible to toggle the visibility of all of these on and off with a simple right-click, their preview functions when making changes within their configurations are more consistent, and resizing a measured template no longer causes its highlighted squares to differ from its original creation.
- We now provide ability for users to define different custom fonts on a per-World basis. When uploaded and configured, fonts will appear in all font dropdown menus, including text drawings, Map Notes, and rich text editors.
- Uploading of Base64 images (whether via copy-pasting or directly dragging from your desktop) now coerces those files into specific saved images, rather than attempting to store a Base64 string. This saves on performance issues and data corruption which could result from trying to store strings too long to fit within our database engine.
- Searching for a World, Game System, or Add-on Module will now offer a link to search the package repository if no results are found in currently installed packages.

As part of our efforts to improve the experience of using Foundry VTT for new users, we have introduced two new frameworks for providing users with contextual information about the software. The first is a new Tooltip system, which replaces the previous on-hover behaviour, giving users a simple, clean, and more uniform tooltip containing information whenever on-screen elements are hovered over. The second is a new Tour system, which provides guided tours of key aspects of the software, including the highlighting specific elements and providing information about them. Both of these systems are available to developers to use in their own modules, and we have already begun to use them in the core software to provide users with more information about the software.

The following Tours are included as part of the software at this time:

- Welcome to Foundry Virtual Tabletop - A basic introduction to the core concepts of Foundry VTT for new users.
- Installing a System - An introduction for new users which steps through the process of downloading a game system.
- Creating a World - A tour of the process of creating a new World, including the various configuration options available.
- UI Overview - An introduction to the differing parts of the the UI for new users.
- The Sidebar - A simple introduction to the different sidebar tabs and using them to create and manage your Documents.
- Canvas Controls - A quick introduction to the Canvas controls and what the buttons for each layer actually do.

We wanted to provide a UI for Audio/Video Chat Integration which would be more in line with the overall appearance of the Foundry VTT software, so we gave the appearance a new coat of paint and a few new features. A/V Chat Integration now includes a dock on the left-hand side of the screen by default which will contain frames of video (or a static avatar image) for each user. Each user's name will automatically cycle on a short timer between their username and the primary Actor they've been assigned (or "game master" for GM users with no assigned character). We've included options to move the dock to the top, bottom, or right of the screen, and options for replacing the default gradient with a gradient based on the user's assigned color instead. Also, the dock can be collapsed into a smaller form at any time to occupy less visual space.

Version 10 formally introduces the Adventure Document, a specific type of Document which can only be created within adventure compendiums and can be composed using every other type of Document. For those of you who have purchased the Demon Queen Awakens, the Pathfinder Beginner Box, or Abomination Vaults premium content modules, you may already be familiar with Adventure Documents. Adventure Documents were designed to make it easier for content creators to package their content for distribution as a single compendium which maintains all sorts of data including document IDs, dynamic links, token positions on scenes and much more. Adventure Documents make it easy to store all of the contents of a world in its present state, including a simple Adventure Builder utility that allows you to drag and drop specific documents or folders of documents from your world to include them.

Something which had been a planned feature for quite some time, Foundry VTT now provides a simple and clean 'interaction' toolkit, allowing GMs and players to draw attention of users to a specific location on a scene. Not only does this support several types of pings, it also shows a display at the edge of the screen in the direction of the ping for users who might not be focused in the area at the time. These pings can be triggered while on the Tokens layer of the canvas only, and provide the following functionality:

- Basic Ping creates a simple pulsing circle under your cursor and can be triggered by pressing-and-holding the left mouse button over any place on the scene.
- Warning pings create a pulsing red triangle under your cursor, and can be triggered by holding the ALT key while pressing-and-holding the left mouse button over any place on the scene.
- (GM Only) Drag pings force all users to view a specific place on the scene, dragging their view of the canvas to that point. They appear as a downward pointing arrow and are triggered by holding the Shift key while pressing-and-holding the left mouse button over any place on the scene.
- Combat Tracker Pings can be triggered by any user by clicking the 'ping combatant' button on any combatant in the combat tracker.

Through communication with our community developers we found a number of areas where the Foundry VTT API could be improved, including new migration functions, a variety of new Hooks, and extension of API functionality into the new features we have introduced. In addition, we launched a very thorough refactoring of the architecture used for storing Document Data. This refactor empowers us (and our community developers) to do a much better job handling complex data structures and is expected to be a cornerstone for the Foundry VTT Document architecture for years to come.

In addition, we extended some quality of life improvements for community developers which offer more granular definition of compatibility with the core software, as well as ability to define relationships to other packages other than simple dependencies.

For a list of breaking changes and a convenient list of migration guides, please see our API Migration Guides.


## Breaking Changes


### Documents and Data

- Meta Issue: Overview of breaking changes in Document and data models from V9 to V10 (6849)


## New Features


### Architecture and Infrastructure

- Greensock has been updated to 3.11. (7852)
- A variety of dependencies have been updated to their latest stable release. (8011)


### Documents and Data

- Invisible drawings should now be migrated as expected. (7721)
- Non-GMs can now add rolls to chat messages that they have authored. (7832)

`rolls`
### Applications and User Interface

- Transparent headers and sidebars, such as the new Journal Entry sidebar, now use backdrop-filter to blur objects behind them, increasing readability for text in the sidebar. (7653)
- Search input fields now use the [type="search"] for better compatibility and accessibility. (7455)
- The styling for the input[type="search"] field has been updated and provides visual styling consistent with other Foundry VTT text input fields. (7454)
- Dragging an image from the tile browser into a rich text editor no longer throws an error. (7570)
- Based on user feedback, a wide variety of changes to the Audio/Video Chat Integration UI have been implemented. This includes changes which allow moving the A/V Chat Dock to other sides of the screen. (7457)
- Descriptive text for core software settings are no longer phrased in the form of a question. (7914)
- Implemented "Journal V2" which significantly enhances the interface and functionality of the journal system. (4941)
- The table of contents side panel now has a more specific CSS class name assigned to make styling it easier. (7767)
- The context menu option for headers within the Journal Sidebar has been made more clear that delete means it will delete the entire page. (7791)
- Applied a minor styling change to improve the margin and padding applied to journal entry content and page edit views. (7792)
- Clicking on the edit button on the journal sheet now brings the journal page sheet to the foreground as expected. (7793)
- Converted the PackageConfiguration application to use Tabs for its category filters rather than a bespoke filtering logic. This allows the entire form to be rendered and for category filters to be switched without losing pending changes. (7929)
- Added brief descriptions to the Vision Range and Vision Angle token settings. (7934)
- Improved the generation of Scene thumbnails to ensure that Tiles are included in the thumbnail using the same elevation-based sort order that is used by the PrimaryCanvasGroup. (7989)
- Added descriptions to all Core Tours. (7990)

`backdrop-filter``[type="search"]``input[type="search"]``PackageConfiguration``Tabs`
### Localization and Accessibility

- Translation Module strings will now take precedence over a system's language strings when resolving localization. (7870)
- Notifications should now have improved contrast between text and background. (7462)
- Background shader options have been re-organized to use consistent naming. (7942)


## API Improvements


### Documents and Data

- New hooks have been added for combatStart, combatTurn and combatRound. (7623)
- Document _stats will now update when an embeddedDocument within a parent is updated. (7956)

`combatStart``combatTurn``combatRound``_stats``embeddedDocument`
### Applications and User Interface

- The getProseMirrorMenuDropDowns and getProseMirrorMenuItems hooks have been added, allowing modules and systems to more easily augment the ProseMirrorMenu (7936)
- The jQuery mouse Event is now passed to Dialog button callbacks to allow custom dialogs to condition behavior on specific click event modifiers. (8005)
- FormDataExtended now processes radio input fields as undefined if none of the checkboxes in the radio node list are checked. (7993)
- FormDataExtended once again supports JSON DTYPE handling. (7742)
- 'Temporary' chat messages which are not persisted to the messages database file can now be 'deleted' via the UI delete button. (7787)

`getProseMirrorMenuDropDowns``getProseMirrorMenuItems``ProseMirrorMenu``Dialog``FormDataExtended``FormDataExtended`
### The Game Canvas

- A new highlightObjectshook has been added to support triggering events when canvas elements are highlighted through pressing the ALT key, or on mouseover. (7812)
- The unused DetectionMode#range attribute has been removed from the base DetectionMode class definition. (7963)
- The DetectionMode#_testLOS parameter order is now (visionSource, mode, target, test) to meet standardization with other similar methods. (7994)

`highlightObjects``DetectionMode#range``DetectionMode``DetectionMode#_testLOS``(visionSource, mode, target, test)`
### Package Development

- The error displayed when template.json is missing from a system has been changed to one which is more descriptive. (7842)

`template.json`
## Bug Fixes


### Architecture and Infrastructure

- Updating Document permissions should once again function as expected. (7925)
- A bug which could result in an inability to detect update availability in previous versions has been resolved. (7955)
- Font Awesome 5 backward compatibility URLS should no longer fail to resolve. (7961)


### Documents and Data

- Dragging text fragments in ProseMirror should no longer throw errors. (7922)
- Creating a ContentLink of an owned item should no longer create a broken link. (7972)
- The proseMirror editor should no longer discard links if they do not have a href. (7973)
- Fixed an issue where changing the style attribute of img tags was not possible in the prosemirror editor as it always reverted back to style="" (7983)
- The ProseMirror editor no longer gets rid of alt attribute, and shape-outside inline styles if its the only style defined. (7984)
- The remaining duration of Active Effects should once again automatically update for Actors which are present in a Combat encounter when the round or turn changes. (7624)
- Creating a new PDF Journal Entry Page should no longer throw an error. (7927)
- Processing logic for FormDataExtended has been corrected to correctly distinguish the presence of an input field with name="disabled" from the disabled property on the form itself. (7935)
- Token#toggleEffect should now trigger an effect redraw as expected. (7960)
- New effects can once against be added to Active Effects (7978)
- Ensured that clicking "Show Players" on locked compendium journals will no longer fail. (7982)
- Added a DataModel.migrateDataSafe method which can be used to perform data migrations in a fault-tolerant way, logging warnings for any errors which occurred during the attempting migration. (8002)
- The "Keep Document IDs" toggle when importing content from Compendium Packs should once again preserve IDs as expected. (8013)

`ContentLink``href``style``img``style=""``alt``shape-outside``FormDataExtended``name="disabled"``Token#toggleEffect``DataModel.migrateDataSafe`
### Applications and User Interface

- The setting to use player border colors for AV frames now works as expected (7970)
- It is once again possible to copy and paste inline content in ProseMirror without it being converted to a new paragraph block. (7999)
- In the Token Vision Config UI, the placeholder of the Vision Angle no longer incorrectly uses grid units. (7525)
- RollTable and Macro compendia properly maintain any assigned icons for their entries. (7534)
- Closing a tile configuration menu on an overhead tile no longer triggers a _createTextureData which takes a very large amount of time to resolve. (7621)
- Long music titles in playlists should no longer cause the sidebar styling to be incorrectly applied. (7864)
- Context menu should now appear under the page title instead of below any page headers. (7896)
- Improved the UX of editing the token configuration form to avoid committing data changes when detection modes are altered. (7931)
- Setting description tweak: Base Vision is now Basic Vision. (7933)
- The preview, reset, and update flow of the GridConfig application has been improved to avoid an issue where re-rendering the canvas would fail due to an async race condition. (7943)
- Removed unnecessary name attributes from submit buttons in form applications. (7947)
- Improved the clarity of generated scene thumbnails. (7954)
- Child elements of the button HTML element should now inherit the cursor pointer style. (7957)
- Using "Show Players" on a Journal Entry or Page should once again grant ownership. (7968)
- Fixed an issue where Tour descriptions were not rendered in Tour Management. (7988)
- Fixed an error where the Canvas Controls Tour could be started without an active scene. (7995)
- The behavior of ambient sound source handling has been improved to correct for a bug which would cause errors during darkness transitions. (8006)

`_createTextureData``GridConfig``button`
### The Game Canvas

- The default BlurFilter method commonly used for smothing the edges of Fog of War exploration has been improved. Fog of War now uses a new inner-blur filter which can increase the amount of blur applied to vision without risk of clipping through walls.
- Made the vision occlusion mode compatible with walls under roof tiles. (8003)
- Vision source saturation now functions like light source saturation. (7446)
- Vision radius of blindness and external radius are now consistent with each other. (7520)
- The preUpdateActiveEffect hook should now be standardized between synthetic a non-synthetic token actors. (7565)
- Canvas Alpha map generation has been improved and is now tied to texture resolution, making it more performant. (7689)
- Color data should now be properly initialized for Vision Sources. (7760)
- EffectsCanvasGroup#refreshLightSources should now refresh all light sources as expected. (7761)
- Light sources are no longer animated if they are invisible or disabled. (7762)
- Alpha mapping for overhead tiles should once again perform as expected. (7868)
- LightSource/VisionSource#initialize should no longer fail if los is not a ClockwiseSweepPolygon. (7871)
- The tile texture data should now correctly be unset when a tile is switched from overhead to non-overhead. (7885)
- Overhead tiles now appear correctly for GM users, according to tile foreground menu status. (7919)
- Corrected an issue where a scene's tile elevation could be undefined if the parent scene lacked a foreground elevation at the time of embedded document data preparation, such as when migrating older scenes forward to V10. (7920)
- Importing a Scene from Compendium should no longer incorrectly apply overhead tiles to currently active scene. (7921)
- Setting a Basic Sight detection range of 0 will no longer hide all tokens on the scene even if they are illuminated. (7924)
- The property deletion shorthand (-=key) should once again remove the property as expected, even if the property is within an embeddedDocument. (7945)
- Drawing shape data should now allow width or height to be set to zero in order to accommodate horizontal or vertical lines. (7949)
- Fixed an issue causing status icons to not appear or be removed from unlinked tokens until scene is reloaded. (7975)
- Fixed an issue where occlusion of tiles with a transparent texture would not work as expected. (7985)
- Overhead tiles which are not tagged as a roof now correctly apply occlusion modes. (7991)
- Overhead tiles which are tagged as a roof now properly apply the vision polygon for vision-based occlusion. (7992)
- Synthetic token flag persistence has been improved, preventing issues where a refresh would reset changed flags. (7997)
- The "See All" detection mode is now be suppressed by Blindness since it requires sight. (8001)

`BlurFilter``preUpdateActiveEffect``EffectsCanvasGroup#refreshLightSources``LightSource/VisionSource#initialize``los``ClockwiseSweepPolygon``(-=key)``embeddedDocument`
### Package Development

- When installing a dependency, (ver.) is no longer rendered if no version is found. (7892)
- Package data will now fully reload and re-prepare on the setup screen after installing or uninstalling a package. (7918)
- Improved the compatibility tags that are displayed for Worlds to be more actionable and useful to the user, and also improved the compatibility tags assigned to newly created worlds to use the game system's verified compatibility as the initial values. (7926)
- System backgrounds should once again properly appear in the system login page. (7979)

`(ver.)`
### Dice and Cards

- Fixed a bug where the "Cards Recalled" chat message would appear twice on Deck, Hand, or Pile delete. (7591)
- Fixed a bug where chat messages containing dice rolls would not play the standard dice rolling sound effect. (8000)


### Localization and Accessibility

- Added localization support for labels in the Detection Modes tab. (7932)


### Other Changes

- The deletionKeys parameter (-=) of a diffObject should once again ignore deletion keys in inner objects where the key targeted for deletion would be removed or does not exist. (7716)
- Links created in a Document Sheets should no longer create relative, unusable links if the dragged document is of the same type. (7948)
- BaseChatMessage#canUpdate should now check rolls as expected, instead of using hardcoded roll data. (7831)
- Dropping a content link into the TinyMCE editor that has highlighted text will once again replace the highlighted text. (7923)
- The FormDataExtended class should once-again ignore button elements which define a name attribute. (7938)
- Using getFlag on prototype tokens should once again function as expected. (7941)
- Activating an editor on the sheet of an actor with items should no longer result in a stack overflow. (7946)
- TemplateLayer#_onMouseWheel no longer uses the deprecated PlaceableObject#data. (7958)
- foundry.utils.randomID once again respects the length parameter as expected. (7996)
- The Detection Mode range input field now has a defined step size of 0, and the schema does not define a minimum value of 0 for the range. (7998)

`deletionKeys``diffObject``BaseChatMessage#canUpdate``rolls``roll``FormDataExtended``button``name``getFlag``TemplateLayer#_onMouseWheel``PlaceableObject#data``foundry.utils.randomID``length`
## Documentation Improvements


### API Documentation

- The documentation for CONST.ACTIVE_EFFECT_MODES has been expanded to include intended use and effects of those modes. (7937)
- The TypeDoc strings for TourStep and TourConfig has been corrected. (7986)

`CONST.ACTIVE_EFFECT_MODES``TourStep``TourConfig`