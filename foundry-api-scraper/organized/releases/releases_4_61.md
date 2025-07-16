# Release 0.4.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.61

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.6


## Version 4 Development


##### February 04, 2020


## Beta 0.4.6 Update Notes

Greetings Patreon supporters and Beta testing community - and welcome to the release notes for Foundry Virtual Tabletop Beta 0.4.6. This is an "unstable" (even-numbered) release which adds many new features, API changes, and underlying software improvements. These changes are released to Council tier testers for preliminary testing and will be included in the Beta 0.4.7 stable release coming next week for all Beta tiers.

This update focuses upon improvements for Dice rolling with support for new nested expressions and dice pools, improvements to Token interaction, UI optimizations, and lots of API updates.

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added support for Nested Expressions and Dice Pools in Dice rolling expressions and in the API. A "nested expression" allows for evaluating an inner variable or roll as part of an outer roll expression, an example of what this empowers is for the number of dice which are rolled to be variable like (@details.level)d6 or (1d4)d8. A Dice Pool allows for combining multiple Roll expressions into a set and computing the total for the set after modifying or dropping certain outcomes, for example {3d8,4d6}kh or {2d8,3d6,4d4}cs>=7. To learn more about how nested expressions and dice pools work please review the updated Dice Rolling documentation page: http://foundryvtt.com/pages/dice.html
- The concept of "Scene Notes" has been retired as an element of the Scene data model directly. Instead now all Scenes have a journal attribute which can reference an existing Journal Entry which provides the notes for this Scene. Any Scene which previously had scene notes defined will experience a migration when the World is first loaded into 0.4.6 which will create a corresponding Journal Entry using the contents of the Scene Notes and automatically link that created Journal Entry with the Scene. To share a bit of historical context - the Scene Notes concept was added before the Journal existed as a way to track GM and session notes about a particular scene. The functionality of the Journal provides a far more flexible way to write notes, however, so moving the old scene notes concept to use the Journal system is a nice consolidation which eliminates a redundancy and helps to simplify things.
- The visual scale of the Token HUD has been improved to scale dynamically based on the grid size of the Scene and the size of the Token itself. The layout for the Token HUD has been normalized to a 100px grid scale - but this improvement allows the same proportions and orientation of the HUD to scale effectively for smaller or larger grid sizes while keeping the user experience the same.
- Improved the positioning of Token nameplate text relative to the lower edge of the token frame by making the amount of vertical padding a function of the grid size used.
- Improved the visual appearance of Token attribute bars for large-sized tokens by limiting the vertical height of the bar where previously large Tokens (for example Huge+ creatures) would have unnecessarily large health bars.
- Keyboard based token rotation did not previously work with numpad keys - as SHIFT+numpad was incorrectly detected as some other key (like Page Up) instead of a modified numpad keypress. The refactoring of the KeyboardManager utility has allowed this functionality to be handled correctly.
- "Fast" token rotation (SHIFT+wheel) now snaps to 60 degree increments to hex grids to allow for tokens to rotate towards hex vertices. Fast rotation remains at 45 degree increments for square and gridless modes. Slow rotation occurs at 15 degree increments for all grid types.
- Changes to the set of modules which are active within a World will now force a hard refresh for all connected users, not just the GM user who changed the set of active modules.
- Improved the handling of user cookies to forcibly unset an existing cookie when a new authentication request is made.
- Improved the reliability of Fog of War persistence by implementing an event trigger which fires when the browser tab is being closed to perform a final fog of war save in the event that the user had additional fog changes that were not yet synchronized with the server.
- Redesigned the system which displays user activity and connectivity status to more reliably show which users are connected to the game session and viewing which Scene.
- Record which Tokens a user had targeted when the canvas is being re-drawn in order to ensure that the same tokens remain set as targets after canvas rendering is complete. Previously if the canvas was re-rendered (for example when resizing the browser window), the set of targeted tokens would be lost in the process.
- Redesign the process for chaining Wall creation and wall endpoint grid snapping to greatly improve the process and eliminate small gaps which could occur when rapidly chaining wall segments together.
- Core improvements to the application class make it easier to defined certain HTML containers which should remember their vertical scrolling position when the application is re-rendered. This new functionality is used to improve the behavior of lengthy Roll Tables which will now preserve their scrolling position when the table is re-rendered.
- Interface notification messages can now be prematurely cleared by clicking on them without needing to wait for them to disappear naturally.
- Added a tooltip for Macro buttons in the Hotbar UI which displays the name of the macro when hovering over the button.
- Add some missing tooltips and localization translations for Combat Tracker control buttons.

`(@details.level)d6``(1d4)d8``{3d8,4d6}kh``{2d8,3d6,4d4}cs>=7`
### Core Bug Fixes

- Fixed a performance issue from a GPU memory leak which occured when rapidly interacting with walls or door configurations due to stale fog of war rendered textures that were not destroyed.
- Limit the set of Actors which can be chosen when configuring a Token to only display those which the current User has ownership permission over.
- Fix a crash which could occur in the Combat Tracker when changing Scenes using a popped-out tracker display.
- Copy+paste operations for canvas objects like Tokens were not correctly using the MacOS Command key, instead requiring the Control key. These operations now use the CMD key as expected for Mac environments.
- Fixed an issue with changes to the items array for a synthetic Token Actor which failed to result in re-rendering of an open Item sheet. Now changes to the owned items for a synthetic Token actor will allow item sheets to automatically re-render as necessary.
- A Token which references an inaccessible image for it's artwork could not have it's visibility state toggled as the lack of a loaded texture caused a failure in toggling the visible state of the token.
- Fix incorrect handling of zero initiative values which were incorrectly sorted below negative values due to a mis-specified logical test.
- Editing multiple controlled wall segments was no longer working after the embedded entity ID changes in 0.4.4. This functionality has been restored.
- The visual position of door controls was not properly updating when wall positions or types were modified. Now when changes to a wall segment are processed the door control for that segment will be re-rendered.
- Choosing a macro image with the file picker caused the Macro edit sheet to close or to become locked for editing. This has been resolved.
- Fixed an issue with application of the default scene position which could force certain large maps from becoming permanently stuck "out of bounds" and unable to zoom.
- Corrected a bug where deleting the text of a drawing caused a (harmless) error in the console.
- Fixed a bug with canvas object undo operations which caused only every-other operation to be reverted due to dome duplication of array management.
- Corrected a failure in importing Journal Entries into a World from a compendium pack.
- Fix a bug where providing an explicit name attribute when creating a Compendium pack through the API produced a server-side error when a default name was inferred from the text label.
- When the application is launched with a --world startup option where that world cannot be launched because it does not exist or is out-of-date, the application will go to the Setup page instead of loading an invalid world state, displaying a log message to inform the user why their requested world has not loaded.
- Fix a layout issue with the Macro Hotbar which caused the context menu for Macro buttons to underlap the AV camera views.
- Fixed a layout issue with the Macro Hotbar which caused it to capture pointer events (mouse clicks) even when the bar was in a collapsed state.
- Correct a bug in the RollTable.draw() method which caused that function to fail if both the optional result and roll arguments were omitted.
- Solve a bug resulting from multiple sidebar tab render requests.
- Fix a bug for newly created Actors which prevented the name field of their prototype token from being immediately editable until the application was reloaded.
- Correct a regression with animated tokens which prevented them from working properly due to changes in the way that token source textures were loaded.
- Server side validation for various image fields was not configured to allow for inline base64 png or jpeg data which (in some cases) should be allowed.
- Fixed a permissions issue which prevented Users from being able to roll initiative for combatants that they have ownership rights for in the Combat Tracker.

`--world``RollTable.draw()`
### Core Software, APIs, and Module Development

- [BREAKING] Refactor the KeyboardManager class to stop using the deprecated event.keyCode property and move towards more modern string-based codes which define which keyboard keys are preseed. If you currently use the Keyboard Manager (or its instance game.keyboard) you may be impacted by this change.
- [BREAKING] Move the position of the canvasInit hook event to occur before canvas layers are rendered rather than afterwards. This is more conceptually consistent with an "initialization" hook in that it allows modules and systems to modify data or configuration before rendering work occurs.
- [BREAKING] Please note - the elimination of Scene Notes only affects Scenes which were within a World. If you have modules or systems which provide Scene compendium packs those scenes will not automatically have journal entries created for their Scene notes. You will need to create a companion Journal Entry compendium pack with entries for your Scene notes to be distributed as part of your module. The scene notes can still be accessed under `scene.data.description` and will remain until at least version 0.5.x in order to allow time for migration.
- [BREAKING] Form fields which specify a numeric data type will have their input value automatically converted to null if the input field is submitted as an empty string. Previously these empty strings would be converted to zero which could lead to potentially undesirable results.
- [BREAKING] Removed the entryTime attribute from the data model for a Journal Entry as this field was not used by any system in the core software.
- [BREAKING] Some changes in previous versions to server-side validation methods resulted in timestamps that were stored in an ISO string format instead of as a numeric seconds since UNIX epoch. This has been standardized and all timestamp type fields will be stored as a numeric data type consistent with the return value from Date.now().
- [BREAKING] Refactored and converted the default behavior of Form Applications which previously supported a submitOnUnfocus option that would automatically submit the form when a form field fired the unfocus event to instead use a new option submitOnChange which fires whenever the change event occurs. The end user experience is very similar, as unfocus events will trigger the change event if the field contents were altered - but this has the added advantage of allowing the user to press the enter key to confirm a pending change and submit the form.
- Comprehensively refactor the CONFIG object to move its definition to the very end of the client-side script, allowing for direct references to classes and objects to be used with CONFIG is defined rather then scattered throughout the codebase. Remove or re-work any references to CONFIG variables to ensure they are deferred until after the CONFIG object is declared.
- Implemented a global uuid attribute for all Entities and Embedded Entities which provides a canonical reference to any piece of data. This functionality will be used more prevalently in the future - but for now you can take advantage of the uuid attribute on Entities, PlaceableObject instances, and Compendium entries as well as the fromUUID(uuid) method which can construct an appropriate object from any universal identifier string.
- Expose the Actor.modifyAttributeBar() method which is responsible for updating Actor data when a Token bar is changed. This allows game systems or modules to change how alterations to a Token resource should be applied to the Actor data model - for example accounting for temporary hit points in the D&D5E system.
- Move the active and scene fields out of the User data model and re-define them as transient activity data that is only persisted in memory during the session as part of user activity tracking. These fields of the User data model have been removed and replace with properties on the User entity which can be used in a similar way.
- Add configuration references to all of the primary UI elements used throughout the default interface in CONFIG.ui. This has the joint benefit of organizing and centralizing the definition of what classes are used for what element as well as allowing for the possibility for modules and systems to override this configuration and provide an alternative application to be used instead of a default UI element.
- Refactor the SidebarTab abstract application to remove the requirement that a specific tab name be passed into the constructor which helps to standardize the initialization signature.
- Implement the Die.fromFormula(formula); factory method which can construct a Die instance from a given string formula using the dice rolling syntax.
- Implement the DicePool class which accepts an Array of Roll instances as well as a modifier query string and resolves the set of Rolls within the pool.
- Implement the DicePool.fromFormula(formula); factory method which constructs a DicePool instance from a given string formula using the dice rolling syntax.
- Migrate the handling of die roll modifiers from the Roll class into the Die class which is a more logical place to maintain these modifications to an existing Die instance.
- Added support for radio-style form field inputs in form application processing. This allows for multiple input fields to have the same name attribute. In such cases all values from these inputs are concatenated into an array which is passed onwards for form submission and handling.
- Impose 9999 as a maximum zIndex which application windows can assume to ensure that module developers can define a UI layer starting from a zIndex of 10000 which is guaranteed to be drawn above any pop out application window.
- Application subclasses can now easily define HTML containers that should remember their vertical scrolling position when they are (re)rendered. To use this feature, add the scrollY property to the defaultOptions object for the application class. See the RollTableConfig class definition for an example usage.
- Refactored a large number of usages for canvas object manipulation methods which no longer need to pass sceneId as their first parameter.
- Added entries in the CONST object which enumerate the supported roll types.
- Added a new hook for chat bubble rendering which allows hooked functions to modify the content of resulting chat bubble HTML. See the following issue for an example: https://gitlab.com/foundrynet/foundryvtt/issues/1942
- Improve the behavior of the Compendium.getEntity() method to return null if the requested entry ID does not exist in the pack.

`game.keyboard``canvasInit``null``entryTime``Date.now()``submitOnUnfocus``submitOnChange``CONFIG``uuid``uuid``fromUUID(uuid)``Actor.modifyAttributeBar()``active``scene``CONFIG.ui``SidebarTab``Die.fromFormula(formula);``DicePool``Roll``DicePool.fromFormula(formula);``scrollY``RollTableConfig``CONST``Compendium.getEntity()`
### Documentation Improvements

- Updated dice rolling documentation page: http://foundryvtt.com/pages/dice.html
- Updated API docs built for the latest 0.4.6 codebase. http://foundryvtt.com/api/


### Known Issues

- If non-GM users are connected to the session when the first Scene is created, they are not automatically transitioned to that scene when it is activated.
- In some cases, World-level compendium packs which share the same pack name in multiple worlds can get cross-contaminated when a world is closed and another world is opened without restarting the VTT application.
- Changes to the permissions object of Entity data does not immediately update the editable state of some rendered applications.
- Some issues currently exist with using an optional route prefix for running the FVTT application. You may wish to consider removing a route prefix for now until this feature is further stabilizied in the 0.4.7 update.

