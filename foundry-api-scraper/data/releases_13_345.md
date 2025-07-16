# Release 13.345 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.345

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.345


## Version 13 Stable


##### June 05, 2025


## Foundry Virtual Tabletop - Version 13 - Stable 4 Release Notes

We're very pleased to be able to offer this small update patch that addresses a number of small bugs collected over the past few weeks. No major items to highlight here, as the majority of these fixes are either quick tweaks or edge case issues.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Architecture and Infrastructure

- To improve webserver performance, certain request types that do not require responses are now ignored on HTTP routes. (12973)


### Applications and User Interface

- FontAwesome has been updated to version 6.7.2. (12632)


## API Improvements


### Applications and User Interface

- Game systems or modules may now configure a custom fallback Turn Marker image using CONFIG.Combat.fallbackTurnMarker. (12919)
- FilePicker##inferCurrentDirectory has been renamed and is now the protected method _inferSourceAndTarget. (12779)

`CONFIG.Combat.fallbackTurnMarker``FilePicker##inferCurrentDirectory``_inferSourceAndTarget`
## Bug Fixes


### Architecture and Infrastructure

- Firefox users no longer receive an error about lost connection during the login process for a world. (12477)


### Documents and Data

- Actor#update now passes creation to embedded collections as expected, resolving an issue with users being unable to create items as part of an update to the parent actor. (12938)
- Default Document Sheets configuration now functions as expected. (12944)
- Corrected a permission issue which prevented non-GM accounts from dragging items from the item sidebar. (12953)
- Removed extraneous calls of DirectoryCollection#initializeTree for updates to Embedded Documents. Worlds with large amounts of Scenes may see a significant performance gain for token operations (among others) as a result. (12871)

`Actor#update``DirectoryCollection#initializeTree`
### Applications and User Interface

- Card embedded documents now receive a new sort value when they are passed into a new Cards hand. (11036)
- Resizable ApplicationV2 windows now handle "auto" dimensions more gracefully, similar to behavior in ApplicationV1 windows. (11904)
- DialogV2 windows now return the value of close function when the app is closed without a button, consistent with the DialogV1 behavior. (12138)
- Mouse movement now updates AFK status regardless of whether the world has disabled visible mouse cursors. (12524)
- Tours now remove their current visual changes to the UI regardless of whether you are stepping forward or backward through the tour. (12851)
- CombatTracker##_onUpdateInitiative now only handles changes to initiative input fields. (12891)
- PlaceablesLayer#_onPasteKey now continues its workflow to allow processing keybindings bound to CTRL + V ( ⌘ + V for macOS) if the clipboard has no current contents. (12905)
- Notification#update no longer fails if called before the notification has been rendered. (12909)
- SceneNavigation.displayProgressBar no longer fails if called before the notification has been rendered. (12910)
- Resolved a CSS issue which prevented the Dependency Resolution application and Install Package Dependencies dialog from scrolling. (12939)
- Resolved a CSS issue which made certain HTML tags nearly unreadable in Tooltips when configured in the light theme. (12942)
- Fixed a bug which prevented the Secret Block "reveal" buttons from serving their intended purpose. (12859)
- @Embed no longer triggers an unexpected embedded depths warning when passing the embed to enrichHTML. (12933)
- Music once again adheres to the assigned fade value even on the first time it is played. (12952)
- Tracked down and recaptured the errant Create Folder and Toggle Privacy buttons after their flight from the Create World FilePicker. (12957)
- Playlist search once again expands playlists and folders when matches are found within the title of the list, folder, or the tracks. (12958)
- Right-clicking a Token now displays the HUD on that token even if another HUD element was already visible. (12964)
- SettingsConfig sidebar is scrollable once more. (12970)

`Card``sort``Cards``ApplicationV2``ApplicationV1``DialogV2``DialogV1``CombatTracker##_onUpdateInitiative``PlaceablesLayer#_onPasteKey``Notification#update``SceneNavigation.displayProgressBar``@Embed``enrichHTML``FilePicker``SettingsConfig`
### The Game Canvas

- Resolved an edge case which could allow Tokens to slide along walls at certain angles to clip through those walls. No more selective idspispopd for the clever masses. (12850)
- Resolved an unintended effect which prevented zooming out on small scenes. (12873)
- Moving a Token into a wall on a gridless scene while Automatic Token Rotation is enabled no longer triggers the secret token turntable mode. (12912)
- Corrected an edge case that caused errors when moving a token with an active light source when more than one GM user was connected. (12925)
- Corrected the hookName for WeatherEffects. (12930)
- DetectionMode.BASIC_MODE_ID has been restored. (12945)
- Fog of War no longer tiles incorrectly in the rare case that the background texture is the same size as the overlay but has a grid offset or scaling applied. (12967)
- Moving a Token that has a configured light source no longer briefly displays that light source at the destination before the movement has completed. (12968)

`hookName``WeatherEffects``DetectionMode.BASIC_MODE_ID`
### Package Development

- It is now possible to create new worlds even if there is a world that exists with the name "1". (12896)
- The warning displayed that some documents may be unavailable when disabling a module now only displays if the number of affected documents is greater than 0. (12911)
- The search function for package installation once again matches on package ID as well as title. (12915)
- The search function for package installation once again matches on Author as well as title. (12926)


### Dice and Cards

- Function terms have access to the roll via this again. (12946)
- Trying to construct a Roll with null or otherwise invalid input now raises an error earlier in the workflow. (12734)

`this``Roll``null`
### Localization and Accessibility

- Corrected a typo in the localization string for UnconstrainedMovementP. (12888)
- Data model localization of embedded data fields no longer pollutes game.i18n.translations. (12907)
- Data model localization no longer fails to localize EmbeddedDataField#label or EmbeddedDataField#hint. (12908)

`UnconstrainedMovementP``game.i18n.translations``EmbeddedDataField#label``EmbeddedDataField#hint`
## Documentation Improvements

- Improved documentation for a number of JSDoc types. Please see GitHub issue for details: (12969)
- Corrected a large number of API documentation entries. Please see GitHub issue for details: (12436)

