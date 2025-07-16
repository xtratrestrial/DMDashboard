# Release 0.2.8 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.43

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.8


## Version 2 Development


##### April 25, 2019


## Beta 0.2.8 Update Notes

Greetings friends and supporters! I'm really excited to share another Foundry Virtual Tabletop beta release 0.2.8. This update continues to focus on some core software stability and flexibility improvements. The two major improvements in this version are a Module Management interface which gives Game-Masters control over which modules are used on a per-world basis and a new Scene setting to disable Fog of War for certain areas where you don't want players to be able to track previously explored locations. This update also includes a lot of nice core software and API investments which I hope will continue empowering community contributions.

`0.2.8`I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added a new Module Management system. This allows for the Game-Master to choose which modules are active for a certain world and enable or disable modules for that world. As a result of this change all modules will be initially disabled when updating to 0.2.8 so you must manually enable or whitelist the set of modules which you wish to use. To manage modules, go to the Settings tab and click on the "Manage Modules" button.
- Added a new Scene setting which allows an option to disable Fog of War Exploration, creating an experience where Tokens can only see the areas of the map which are in their current field of vision, without any visibility into areas which were previously explored but not currently visible.
- Added support for copy+paste workflows for Ambient Light, Ambient Sound, and Measured Template placeable objects.
- The file picker UI now applies case-insensitive filtering to the search strings entered in the filter bar.
- The ruler measurement tool has been moved to the base Token Layer control set instead of the Measured Template section. This makes it easier to use with controlled tokens and is more discoverable for new players.
- Added a Delete All Templates button as part of the measured template controls for Game-Master users to quickly remove all measured templates from the current Scene.
- Added a GET request API to retrieve some basic server status for a running Foundry Virtual Tabletop host, which can support some basic polling and life-cycle management tools. Visit the /api/status URL for any active server to retrieve JSON status for the host.

`Delete All Templates``/api/status`
### Core Bug Fixes

- Closed a loophole which allowed drag and drop token movement to incorrectly pass through walls when moved in certain directions with respect to existing wall orientation.
- Fixed an issue which caused CTRL+Z operations to undo token movement while the user was intending to edit an active form field instead.
- Fixed an issue which caused Actors imported from compendium packs to have some errors in their imported Token data until the client session was refreshed. Now Actors imported from the compendium should be immediately ready to go with their correct stored configuration.
- Fixed a server-side database updating error which prevented object keys passed in dot-notation from correctly identifying and updating (recursively) the inner attribute.
- Resolved a problem that could affect world configuration files when using world-level compendium packs to ensure that the pack paths stored at the world level are relative to the public root and not absolute for the user's current host.
- Fixed an issue which allowed audio tracks to get stuck in the playing state when using the parent playlist play/stop controls in a way which did not propagate down to the contained sounds in the playlist.
- Addressed a problem which allowed world-level settings configurations from firing their onChange callback function before the server-side database write had successfully completed.
- Improved the newly added window resizing feature to correctly persist the application window width when minimizing and maximizing the resized window.

`onChange`
### Core Software, APIs, and Module Development

- With 0.2.8, I have enacted a fairly major policy change in my level of code protections which has un-minified the client-side JavaScript which is included with the software. The key benefit of this is for module and system developers who will now be much more easily able to debug their work and to learn from the design patterns that are used in the core software.
- Game modules may now include some additional parameters in their module.json file. These new supported keys are: "url" which directs towards documentation for the module, "manifest" which points to a stable module.json link, and "download" which points to a latest stable .zip archive download location.
- Added new Hooks as part of the standard Entity management workflows which are triggered client-side on before a database operation (create, update, delete) is dispatched back to the server. This allows for entity data to be modified before it is sent to the server upon initial creation, update, or deletion. See https://gitlab.com/foundrynet/foundryvtt/issues/719 for details.
- Added a server-side error handling view which will display critical startup errors to help users with debugging. This helps to catch errors when loading game systems and worlds which can cause fatal errors which previously resulted in silent failures.

`module.json``"url"``"manifest"``"download"`
### D&D5e System Improvements

- Added support for a new Trait Picker interface element in the Actor and NPC sheets. This provides a more user-friendly workflow for assigning damage resistances, vulnerabilities, immunities, and known languages. The display of these traits have been improved to show as tags which wrap on multiple lines and support additional custom free-form text if the provided options are not sufficient to accomodate homebrew content.
- Improved the rendering of Owned Items to allow these items to be previewed by left-clicking on the item name which will toggle the display of their description in a sliding container. Sending the item to chat for rolling now involves clicking on the item image (which is prompted by a d20 icon).
- Added a 5e world-level option to track weight for currency following the rules in the PHB on page 143. This setting can be enabled (or disabled) in the Configure Settings menu from the settings sidebar.
- Fixed a bug with proficiency toggle icons which were not correctly updating under the 0.2.7 version.
- Added "Poison" as a valid consumable item subtype.
- The creature size trait has been changed from a plain text field to a dropdown Select box with pre-populated options for the standard 5e sizes.

