# Release 0.7.8 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.86

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.8


## Version 7 Stable


##### December 03, 2020


## Foundry Virtual Tabletop - Version 0.7.8 Update Notes

I am pleased to release Foundry Virtual Tabletop version 0.7.8, a stable release in the 0.7.x series of updates. The 0.7.8 update focuses on resolving and fixing remaining bugs related to the core themes of the 0.7.x update sequence: Dynamic lighting, canvas and scene rendering, some UI and UX fixes, Dice rolling, and other miscellaneous issues which cropped up since the previous 0.7.7 release.

WARNING: Version 0.7.8 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.


### New Features

- Add a configurable setting to use a higher pixel density resolution for rendering the canvas and filter textures. This is now placed behind a client-side configuration setting because, while some users may have high PPI displays, they may not have sufficient GPU resources to use it. This option will only be displayed to you if you are using a device that features a high-density pixel display (i.e. a retina display).
- As a result of the above change, usage of high-density pixel resolution displays now defaults to off (disabled). If you are using a high PPI display and wish to render your game canvas at increased resolution you must enable this new setting in your client settings menu.
- Double-clicking a Token on the Canvas when its sheet is already open, but possibly minimized or behind other applications, now brings that existing sheet to the top of the z-index stack and maximizes it.
- Expanded the set of allowed media MIME types to include text/plain and text/markdown which are now allowed as uploaded media types.
- Improve Tile object initialization to ensure that at least a minimal portion of the tile area is retained within the allowed interactive canvas bounds.
- Broadened the scope of css selectors to better support Font Awesome icons and glyphs.

`text/plain``text/markdown`
### Bug Fixes


#### Canvas and Scenes

- Foundry will once again notify you when the WebGL Canvas fails to render due to missing hardware acceleration.
- Previously, Scene creation incorrectly expected the canvas object to be defined when it instead could be null. This is no longer the case.
- Corrected scene thumbnail generator on incorrect assumptions that the game canvas will be active and available for use during thumbnail creation.
- Corrected an issue where decimal initiative scores were being displayed until all combatants had rolled initiative, even if integer scores were the preferred display method.


#### UI and UX

- Ensured that changing a user's role will now update properly in the Players application view for other logged in users.
- Fixed an issue where Window sizing issues occurred after dragging a minimized window, preventing that window from resizing properly when maximized again.
- Made it so that the notification dot on the Settings sidebar indicating a core software update is visible only to GM users.
- Adjusted the behavior of FormApplication instances that would cause a form submission with errors to close instead of letting the user continue editing it.
- SHIFT/CTRL + Wheel rotation no longer rotates objects which are hovered but not actively controlled.


#### Lighting and Vision

- Fixed an issue where movement by a light-emitting token perceived by a Token with vision wouldn't update explored fog of war.
- Changed how the maximum required vision radius is computed in the Sight Layer computation in order to more adequately cover the full scene dimensions.
- Fog of war now properly updates on drag-moves past open doors, and if a door is opened or closed near a token that can see through it.


#### Other Fixes

- Improved the computation of ActiveEffect duration to better account for the progression of turns and rounds within a Combat encounter.
- Having a symbolic directory link to a non-existent or unavailable location should no longer break filesystem browse requests.
- The Keyboard Manager should now correctly protect against cases where the game canvas is never initialized (set to null), preventing unnecessary errors from accumulating as a result of keys being pressed when no scene is active.
- Restored support for parenthetical dice rolls defining the variable number of dice to be rolled, for example: (1d6)d6.
- Corrected instances where changes for Token HUD input fields when the ENTER key is pressed would not be processed, such as a negative number that is equal to the current value.
- Resolve an issue where tokens with invalid URLs containing symbols could cause validation failures that prevent scenes from loading.


### API and Documentation Improvements


#### API Improvements

- Added a new hook, modifyTokenAttribute which can be called whenever the value of one of a Token's tracked resource bars is changed so that game systems can take follow-up actions or override the handling of the change. Example usage can be found here: https://gitlab.com/foundrynet/foundryvtt/-/issues/4194
- The DiceTerm#alter method can now accept non-integer values for the multiplication factor, allowing for division that removes a certain number of dice from the roll formula.
- Roll formulae now allow for substituted values that resolve to null to be retained within a dice roll formula until the final expression is evaluated in Roll#total, at which point null will be imputed as zero.

`modifyTokenAttribute``DiceTerm#alter``null`
#### API Bug Fixes

- The PointSource._initializeShaders method has been redefined to no longer accept an argument that does not get used.
- The Actor#getActiveTokens method no longer throws an error if there is no active scene, but instead will return an empty array as expected.
- The ChatMessage#_getSpeakerFromToken method no longer fails for Tokens that have no associated Actor entity and will instead correctly return null.
- Corrected an API error where the incorrect filtering method was used in CombatEncounter#_OnDeleteToken. It now correctly uses a logical comparison instead of an assignment.
- Reversed the order of operations in Token#setTarget to prevent the creation of invalid one-directional links between a user and a target.

`PointSource._initializeShaders``Actor#getActiveTokens``ChatMessage#_getSpeakerFromToken``CombatEncounter#_OnDeleteToken``Token#setTarget`