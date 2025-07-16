# Release 11.300 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.300

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.300


## Version 11 Stable


##### June 01, 2023


## Foundry Virtual Tabletop - Version 11 - Stable Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the second release of Foundry Virtual Tabletop Version 11. We're extremely pleased to bring this update to our community, containing a wide variety of bug fixes sourced from the feedback and bug reporting channels on our community disccord. Thank you all for submitting your feedback and helping us stay on top of bugs!

This update focuses on some post-release cleanup of bugs for Foundry VTT V11 and as such doesn't have much in the way of features for us to highlight. For a complete log of all the features added in V11, please see the notes for our previous release on the stable channel.


## New Features


### Applications and User Interface

- We have expanded the default ActiveEffect configuration window to better accommodate the ProseMirror editor. (9484)
- Choosing a setup theme now also applies to the World join screen. (9489)

`ActiveEffect`
### Package Development

- The list of package relationships for Worlds now correctly lists missing dependencies. (9397)
- World validation no longer fails in cases where the Package#authors field contains invalid authors or Package#packs contains invalid packs. Instead, fields which contain invalid or erroneous data are dropped from the listing. (9533), (9534)

`Package#authors``Package#packs`
### Localization and Accessibility



## API Improvements


### The Game Canvas

- A number of API methods which were unnecessarily marked as Private are now marked as Protected instead. (9471)
- We resolved an edge-case which could cause NEDB to LevelDB migration to fail under the specific circumstance where an object was passed when an array was expected. (9507)


## Bug Fixes


### Documents and Data

- Calling super in an overridden AdventureImporter#_prepareImportData or _importContent no longer fails with a thrown error. (9474)
- Moving a Rollable Table into a compendium pack no longer incorrectly nullifies table results for cases where the result was a dynamic link. (9505)
- Calling Compendium#getIndex with an explicit set of index fields no longer returns incorrectly formed UUIDs. (9512)
- getCombatantByActor now accepts string arguments instead of incorrectly returning undefined. (9485)
- The DocumentDirectory#_handleDroppedDocument deprecation no longer loops infinitely over itself, no longer loops infinitely over itself, no longer loops infinitely over itself, no longer.... (9517)

`super``AdventureImporter#_prepareImportData``_importContent``Compendium#getIndex``getCombatantByActor``undefined``DocumentDirectory#_handleDroppedDocument`
### Applications and User Interface

- Project URLs are once again visible in the Setup UI for installed packages. (9470)
- The active scene indicator icon is visible again. (9493)
- Long compendium names are now appropriately truncated instead of overflowing the width of the sidebar. (9498)
- Map note label text no longer renders the note control icon un-clickable. (9501)
- The "Left Click to Release Objects" setting no longer prevents left-clicking to target tokens using the target tool. (9504)
- Rollable Tables no longer throw an error when the table only contains a single result. (9506)
- Closing the Token configuration window no longer fails with an error when viewing a different Scene from the one containing the Token. (9525)
- The control bar for Audio Video Chat Integration no longer hidden by default in certain game systems. (9525)


### The Game Canvas

- We have resolved cases where the Scene cache can cause deleted ActorDeltas to not be appropriately re-created server-side. (9464)
- Unlinked Token updates no longer cause all ActorDeltas on the same Scene to be incorrectly re-initialised (9465)
- ActorDelta collections no longer become out-of-sync with base Actor collections (9466)
- The TokenConfig application retrieves derived attributes for non-DataModel systems once again. (9472)
- Unlinked Token actorId fields now update correctly if changed during Scene#update or Scene.updateDocuments workflows. (9487)
- Players are now able to update the ActorDelta of an unlinked Token if they are the owner of the BaseActor. (9509)
- Updating Token opacity now functions as expected, resolving a case which incorrectly required other changes for opacity to visibly update. (9510)
- The Detection filter from the previous visibility test is now correctly cleared from tokens which have no configured vision or light. (9521)
- Making a Token invisible now clears the hover state. (9522)
- Toggling the hidden state using animate: false now updates the visibility of the Token as expected. (9523)
- Making a Token invisible now correctly animates that change for players. (9524), (9528)
- Tokens no longer gain an unexpected level of transparency while the Token configuration window is open. (9526)
- When modifying a Token's configuration, the Token preview no longer incorrectly detects the original Token if it has a detection mode set. (9527)
- Token#setTarget no longer fails with an error if it is called before the Token has been drawn (9530)

`ActorDeltas``TokenConfig``actorId``Scene#update``Scene.updateDocuments``ActorDelta``BaseActor``hidden``animate: false``Token#setTarget`
### Package Development

- Deleting a Game System no longer fails to refresh the setup UI (9463)
- The Package Update Log application no longer incorrectly passes the localized text into the HTML element. (9478)
- Packages which have multiple authors now have an improved display of those authors. (9492)
- Changing update track for a Module will now correctly install future available updates from the new upstream manifest URL. (9494)
- The tooltip for package authors now renders the URL correctly in cases where an author has their URL defined. (9502)
- The Module Editor no longer incorrectly allows for Systems to be marked as required or recommended, and Modules may not be marked as a System. (9537)


### Localization and Accessibility

- We corrected a missing localization string for CONTROLS.ShiftDrag. (9469)
- The Prepend Token Adjectives setting no longer fails with an error when a localization language has been set. (9496)

`CONTROLS.ShiftDrag`