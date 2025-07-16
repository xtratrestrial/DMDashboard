# Release 0.5.3 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.66

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.3


## Version 5 Testing


##### March 30, 2020


## Foundry Virtual Tabletop - Beta 0.5.3 Update Notes

Hi everyone I'm thrilled to release Foundry Virtual Tabletop Beta 0.5.3 which is an odd-numbered "stable" release version for all Patreon supporter tiers including all of the new features added in version 0.5.2 with a number of added feature improvements and bug fixes.

Update 0.5.2 included some major new features including permission control system, support for inline dice rolls, a built-in grid configuration tool, the ability to bulk upload assets, expanded Token features like light emission color, and many minor features. The stable update 0.5.3 expands upon this by adding improved Compendium controls and Macro compendium and linking features.

Thank you all so very much for supporting my project and relying on Foundry Virtual Tabletop to bring us all together amidst health concerns and difficult times of social distancing. Please stay healthy, care for each other, and stay up to date on progress by following the project roadmap on GitLab: https://gitlab.com/foundrynet/foundryvtt/boards.


### New Features

- Compendium packs can now be duplicated with a helpful tool in their context menu. Duplicating a compendium pack will create a copy of that pack in your current world which you can modify separately from the base pack.
- Added a new Compendium context option to lock or unlock that compendium pack. Compendium packs which are not owned by the active world will be initially locked by default, but they may be unlocked in order to permit editing of their content. In order to create, update, or delete content from a compendium pack you must first unlock it. This adds some extra safety protections to prevent incorrectly modifying a core system or module-provided compendium.
- You may now create Compendium packs for the Macro entity type.
- Macro entities may now be the target of dynamic entity links using the syntax @Macro[Macro Name] or @Macro[macro._id]{Displayed Name}.
- Dynamic entity links to Compendium content created as @Compendium[package.name.id]{Displayed Name} are now draggable so that you can create Actors, Items, or other Entities using a dynamic entity link.
- Added the ability to configure the ability to create Measured Templates as a new User Role permission. Previously this permission was hard-coded to be available to Users with the TRUSTED role (or greater).
- Enforce a minimum height for sidebar pop-out tabs to ensure that they leave adequate room for context menus to be displayed for the entries they contain.
- Change the style and format of the Permission Control ui to remove "Default" as an option for the "Default Permissions" section. This should now be more self-explanatory that the default permission level is "None" unless set otherwise.
- Implemented a new and more effective WebGL test to validate up-front whether the user has hardware acceleration enabled which permits WebGL to be used. If the necessary conditions are not met a visible error banner will be displayed to inform the user of the problem.

`@Macro[Macro Name]``@Macro[macro._id]{Displayed Name}``@Compendium[package.name.id]{Displayed Name}`
### Bug Fixes

- A bug allowed for users to install versions of systems or modules which could not actually be used under their current core VTT software version. This will now be prevented with an error message to explain why you cannot install or update a module or system with your current VTT version.
- A bug incorrectly prevented users from uninstalling a module or system from within the Foundry VTT application if that package version could not be used (for any reason). You may now always uninstall packages even of those package versions are otherwise unusable.
- Fixed a bug where world-level compendium packs could be created with metadata that set the system as undefined resulting in 2 bugs. Firstly this will no longer happen and the system value for created World packs will be set to the active system of the world. Secondly, if a pack does have the system value of undefined this will be tolerated as an allowed pack.
- Fixed a bug by which a newly created Compendium pack could fail to be opened during the same session in which it was created. Newly created Compendium packs should now be available immediately.
- Implement a solution which attempts to solve for the problem of SVG images becoming tiny under rare circumstances - resulting in token images or status effects which are incorrectly tiny.
- Ensure that only entity types explicitly allowed by the COMPENDIUM_ENTITY_TYPES constant may be used to create Compendium packs.
- Changing the configuration of Token resource bars on the prototype token could inadvertently push changes to that resource back onto the base Actor, which should now be prevented.
- Dynamic entity links displayed in chat messages were previously draggable so that (for example) items could be created from the links that were generated there. This got broken in the 0.5.1 update but is now restored.
- Fixed a bug where attempting to pop out the Combat Tracker with no active encounter would throw an exception.
- Measured templates should not be hoverable or clickable by Users who are not a Game Master or the original author of the template.
- Fixed an issue with Actor sheets where the Token button in the header could become stuck in an inconsistent state between showing the Prototype Token for the base Actor vs. the placed Token for an Actor who was already placed in a Scene.
- Fixed a UI issue which could give the Prototype Token configuration form a vertical scrollbar which was unnecessary.
- New messages created in an initially empty Chat Log could create a situation where scrolling up would duplicate those messages as a new batch. This no longer occurs.
- Private dice rolls should no longer override the existing flavor message for the roll if the current user has permission to view it. For users which do not have permission to see the role the flavor text will be replaced with a message explaining that the roll is private.
- Fixed a bug where ruler path measurement was broken due to a change in the Token.update API signature.
- Scene width and height values will now be rounded to whole integers when finalizing settings of the Grid Configuration utility.
- Fixed a problem where the initially highlighted tab of the File Picker could be out of sync with the browsed location.
- Corrected an issue where the grid alignment tool could leave the map grid displayed in red unless a change to the Scene was actually performed.
- Fixed a permission check issue with dynamic entity links which should correctly require that the User has at least LIMITED permission to view the sheet in order to click on an entity link.
- Fixed an issue with attempting to roll dice formulae with no Scene active or no Token controlled.
- Fixed a typo which caused a ChatMessage whisper array of User entities to not be properly converted to string id values.
- Attempt to resolve a race condition which could occur when launching the server with a specific world supplied at the command line in cases where the Express server might take longer to start than expected.

`COMPENDIUM_ENTITY_TYPES`
### Framework and API Changes

- Deprecate the previously used core.compendiumVisibility world setting in favor of a new and more flexible core.compendiumConfiguration object which can store more expansive metadata about specific compendium packs.
- Changed the Canvas.getDimensions method to be static. The instance method remains with a deprecation warning for the time being.
- Fixed a problem where the Entity#clone method failed to resolve it's promise to the created entity after creation.
- Moved the default USER_PERMISSIONS in the CONST object from an Array to an Object with expanded metadata properties.
- Improved initial construction of default game permission settings to ensure that all permission settings are reflected in the default object.
- Apply some additional client-side permission checks to ensure that compendium modification operations are prevented on the client side before requests are dispatched to the server which it cannot fulfill.
- Disable the World Configuration form when submitting it to prevent further duplicate submissions until the response (or error) is received from the server.
- Fix an issue with Application#getData method signatures to prevent passing an empty object which could break downstream child classes.

`core.compendiumVisibility``core.compendiumConfiguration``Canvas.getDimensions``Entity#clone``USER_PERMISSIONS``CONST``Application#getData`
### Documentation Improvements

- Added a new documentation page for Chat Messages: https://foundryvtt.com/article/chat/


### Known Issues

- None at this time.

