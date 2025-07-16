# Release 0.7.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/7.85

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.7.7


## Version 7 Stable


##### November 13, 2020


## Foundry Virtual Tabletop - Version 0.7.7 Update Notes

I am pleased to release Foundry Virtual Tabletop version 0.7.7, a stable release in the 0.7.x series of updates. The 0.7.7 update focuses on resolving and fixing remaining bugs related to the core themes of the 0.7.x update sequence: Dice rolls, dynamic lighting, active effects, and other miscellaneous issues which cropped up since the previous 0.7.6 release.

WARNING: Version 0.7.7 is labeled as a stable release, but there is always the possibility of unexpected bugs or module compatibility issues. We do not recommend updating immediately prior to a game session unless you are confident in your own ability to troubleshoot any issues that arise.

If you are updating to the 0.7.x series for the first time, I you may wish to first read the notes for all the changes included in this update series update before installing 0.7.7. You can read the full update notes for each individual release in the 0.7.x series here:

- https://foundryvtt.com/releases/0.7.0
- https://foundryvtt.com/releases/0.7.1
- https://foundryvtt.com/releases/0.7.2
- https://foundryvtt.com/releases/0.7.3
- https://foundryvtt.com/releases/0.7.4
- https://foundryvtt.com/releases/0.7.5
- https://foundryvtt.com/releases/0.7.6


### Bug Fixes


#### Lighting and Vision

- Ensured that the appearance of lights - both illumination and coloration - are correctly updated as their settings are changed.
- Fog of War now correctly updates when rotating a token with an angled light source.
- Token vision now updates as expected when the 'has vision' check box is toggled.
- Corrected an issue where setting a light source Color Intensity to a value over 0.1 would cause the light to not render correctly if a light source animation was active.


#### Chat and Dice

- The dice roll sound effect will once again correctly play for the current player.
- Adding a numeric term to the result of a Dice Pool no longer incorrectly causes rolls to fail with an error.
- Corrected an issue where indicators for negative integers were incorrectly stripped from result of certain types of dice rolls.
- Fixed a problem with evaluating a minimized Roll result in cases where an included Die has zero faces (i.e. 4d0) which was incorrectly minimizing as 4, rather than as 0.
- For the purposes of dice rolling, null values are now treated as 0 to account for cases where a previously a "null" result would cause parsing failures.
- The keep and drop modifiers now correctly ignore results that have already been dropped by some previously evaluated modifier (like a re-roll).


#### Combat Tracker

- Fixed an issue where tracked resources in the combat tracker would not update until the end of a turn.
- Hidden combatant initiative rolls now default to GM Rolls if a specific roll mode is not already selected.
- Corrected an issue which would result in unnecessary fallback logic when initializing combat.
- Combat#current now correctly populates after a fresh reload without requiring the combat to update first.


#### User Interface and User Experience

- Left-clicking a window application will no longer increment the z-index if it's already at the maximum z-index.
- In some cases dragging an application window would cause it to resize as well, this is no longer the case.
- Minimized application windows may once again be dragged to positions their non-minimimzed dimension boundaries wouldn't allow.
- Editing a WorldConfig no longer incorrectly allows other game systems to remain in the (disabled) select menu.
- Corrected an issue where the Next Session date picker would advance based on UTC instead of localized date.


#### Other Fixes

- The FilePicker will now correctly ignore files which begin with a "." as these are hidden by convention.
- TokenConfig sheet will now properly prevent editing of Token width and height to the nearest tenth.
- To correct for some issues with hotkeys such as alt+digit for different keyboard layouts, digit keys are now checked by digit number code rather than relying on the number key itself.
- Active Effects without assigned icons no longer try to render their icons on tokens.


### API and Documentation Improvements


#### API Improvements

- Add built-in helper methods for Date.prototype.toDateInputString() and Date.prototype.toTimeInputString() which transform a Date object into the correct string format for date and time type input fields.
- Improved the handling of Active Effects of the "Add" type. It now combines the changed value with the data type of the original value. Also added support for Array insertion.
- Added a few new FEATURES version flags for additional feature themes which were not yet tracked with a version number in that object.
- Updated urls for links to the Community Wiki for both the website and electron app.
- Some classes were incorrectly using the JSDoc @type{Entity} annotation instead of @implements{Entity}, this has been corrected.
- Updated the website API documentation to now feature the details of the 0.7.7 API.

`Date.prototype.toDateInputString()``Date.prototype.toTimeInputString()``FEATURES``@type{Entity}``@implements{Entity}`
#### API Bug Fixes

- Previously calling Quadtree#clear would fail when called due to a syntax error, this syntax error has been corrected.
- Removed an unnecessary "new" class constructor from cases where a PIXI factory method was used instead of a standard class constructor.
- Removed an old reference to an invalid drawing fill type of "contour" which was not ever used.
- The Ruler#_getMovementToken function previously contained a minor syntax error, this has been resolved.
- Returning "false" from a preCreateOwnedItem callback now correctly prevents the downstream application of active effects which might have been added by the owned item (which was prevented).
- Removed a redundant invertObject helper definition.
- The Application#close method signatures are now correctly async and pass the options object as expected.
- Players will now be kicked from a game if their user is deleted by a GM.
- Corrected syntax for PIXI.RenderTexture.create to remove a deprecated usage as well as a non-impactful typographical error related to scale.

