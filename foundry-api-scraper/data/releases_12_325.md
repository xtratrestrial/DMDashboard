# Release 12.325 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.325

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.325


## Version 12 Stable


##### May 29, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 2 Release Notes

Welcome to the second release of Foundry Virtual Tabletop Version 12. We're extremely pleased to bring this update to our community, containing a wide variety of bug fixes sourced from the feedback and bug reporting channels on our community disccord. Thank you all for submitting your feedback and helping us stay on top of bugs!

This update focuses on some post-release cleanup of bugs for Foundry VTT V12. For a complete log of all the features added in V12, please see the notes for our first release on the stable channel.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### The Game Canvas

- Restored Wall endpoint snapping in gridless grids. (11081)
- Replaced the private AmbientLight#emitsLight with the protected AmbientLight#_isLightSourceDisabled. (11086)
- Adjusted the prioritization for the active Vision Mode when multiple Tokens are selected. (11035)
- Added deprecation warnings to TilesLayer#roofs and Tile#isRoof since they rely on the already deprecated TileDocument#roof. (11044)
- Improved Ruler label placement in gridless Scenes. (11045)
- Holding SHIFT now consistently disables snapping even if Force Snap to Grid Vertices is enabled. (11071)

`AmbientLight#emitsLight``AmbientLight#_isLightSourceDisabled``TilesLayer#roofs``Tile#isRoof``TileDocument#roof`
### Package Development

- We now avoid double-counting package warnings for deprecated fields that have been explicitly migrated. (10989)


### Dice and Cards

- Immediately evaluated inline rolls now always force use of non-interactive roll resolution. Deferred inline rolls now use the default roll resolution method which may be interactive. (10854)
- Added a user permission setting for enabling manual rolls. (11065)


## Bug Fixes


### Documents and Data

- The enrichHTML method no longer prevents a sheet from loading when it encounters a link to a non-existent Compendium. (10988)
- Fixed an issue with the initial setting of the performance mode which resulted in a validation error when resetting the game settings back to default. (11007)
- Documents that contain a FilePathField with base64 data will now migrate correctly. (11015)
- A range picker's minimum is now set to the step size for a positive NumberField. (11039)
- The Scene#createThumbnail method now correctly accounts for Tile elevation. (11057)
- The Combat Tracker now correctly renders when a Combatant is modified. (11062)
- When determining the initial img field's value, Foundry now redirects to the implmentation's getDefaultArtwork. (11074)

`enrichHTML``FilePathField``NumberField``Scene#createThumbnail``img``getDefaultArtwork`
### Applications and User Interface

- ClientDocument.createDialog no longer throws an error if the Document has type data but no sub-types other than base. (11083)
- The share data usage popup now correctly refers to version 12. (10998)
- Playlist sounds are now only synced on update if game audio is unlocked. (11008)
- Fixed an error that occurred when attempting to auto-preload the next Sound that should play in a Playlist. (11009)
- Corrected the hint for the Vision Enabled field. (11011)
- When creating a new script Macro on the hotbar, clicking the Execute button now saves the Macro before executing it. (11026)
- Made the AmbientLightConfig sheet tolerant of cases where you switch the canvas layer before submitting the form. (11076)

`ClientDocument.createDialog``base``AmbientLightConfig`
### The Game Canvas

- Uncontrolled Tokens with vision no longer remain a source of vision when another Token with vision is controlled by a non-GM player. (11016)
- Updating a Drawing's text once again correctly refreshes the canvas Placeable. (11056)
- The easing option of Token#animate is now correctly applied. (11084)
- Tokens now once again correctly emit light even after a page refresh. (10997)
- The grid change preview is now correctly reset when closing the Scene configuration window. (10999)
- The scrolling status text container is no longer interactive which fixes an issue that prevented interacting with Placeables below it. (11001)
- The canvas is no longer unnecessarily being redrawn when the Scene configuration is submitted without changes. (11002)
- We now render the detection filter but not others on Token meshes which resolves an issue where the glow effect was not visible on invisible Tokens. (11006)
- The canvas no longer crashes if a Token is created with data containing the ID of a Token that already exists in the Scene. (11012)
- Rotating a drawing with text no longer results in the text being rotated twice. (11013)
- The active Vision Mode is now initialized after vision sources are initialized. (11017)
- The ring color no longer becomes black after TokenRing#flashColor is run. (11018)
- The Prototype Token Dynamic Token Ring settings are now properly saved. (11030)
- We now override Tile vision occlusion behavior with a fade effect when a Token without vision is controlled and the Tile is occluded. (11032)
- The initial value of Scene#environment.globalLight.luminosity was unintentionally and incorrectly set to 0.5 (the default value for normal light sources). We added a migration that reset the global illumination luminosity to 0 for all Scenes to correct this issue. Global Illumination will provide the same brightness level as in V11 by default after the migration, which is no visible brightness change when it is toggled on. (11038)
- Scene controls are now re-rendered when running InteractionLayer#activate regardless of whether the layer is already active. (11042)
- Light level correction is no longer applied to vision and the global light source is no longer rendered when there's no global light. This fixes an issue that prevented the darkvision Vision Mode from appearing correctly. (11048)
- Improved Token Ring subject texture loading during Token#_draw. (11068)
- The Token render flag refresh now propagates refreshRingVisuals. (11072)
- Preview darkness sources no longer incorrectly suppress light and vision sources. (11088)

`easing``Token#animate``TokenRing#flashColor``Scene#environment.globalLight.luminosity``InteractionLayer#activate``Token#_draw``refresh``refreshRingVisuals`
### Dice and Cards

- Cards#sortStandard no longer fails if Card#suit is undefined. (11085)
- Fixed an issue with FunctionTerm serialization that led to some dice terms not displaying the dice that were rolled as part of their evaluation. (10995)
- Deterministic evaluation options no longer prompt for interactive rolls which prevents an issue where rolling on a Roll Table would sometimes prompt for manual input. (10996)

`Cards#sortStandard``Card#suit``undefined``FunctionTerm`
### Localization and Accessibility

- If ClientDocument.defaultName is not defined in the system the localization now falls back to the Document name. We also fixed a localization issue in the createDialog's type field label. (10959)
- We now ensure that Localization.#localizeSchema uses fallback translation keys for cases where a field is translated in English but not in the currently chosen language. (11003)
- The ClientDocument.defaultName now uses the label configured in CONFIG.{Document}.typeLabels instead of the default TYPES.{Document}.{type}. (11029)

`ClientDocument.defaultName``createDialog``Localization.#localizeSchema``ClientDocument.defaultName``CONFIG.{Document}.typeLabels``TYPES.{Document}.{type}`
### Other Changes

- Placeable state is now refreshed if the tool is changed. (11052)
- Fixed an issue that prevented CONFIG.compatibility.excludePatterns from suppressing warnings in Firefox. (11063)

`CONFIG.compatibility.excludePatterns`
## Documentation Improvements


### Other Changes

- Corrected the EffectsCanvasGroup#getDarknessLevel method's return type to be a number. (11060)

`EffectsCanvasGroup#getDarknessLevel`