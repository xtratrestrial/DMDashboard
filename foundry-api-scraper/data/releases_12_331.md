# Release 12.331 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.331

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.331


## Version 12 Stable


##### August 15, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 7 Release Notes

As Foundry Stable Version 12 matures, the pace and scope of our releases are naturally decreasing. This latest update brings a modest array of bug fixes as well as some styling and documentation improvements.

By popular demand, this update also includes a new, optional "Grid Fit" mode for dynamic token rings. Previously, Tokens that used a dynamic ring were always somewhat smaller than their grid size so that Tokens with "overflowing" elements didn't significantly interfere with or obscure their surroundings. Now, when the new "Grid" option is selected, all dynamic Tokens take greater advantage of their allocated grid space without this built-in buffer for overflowing elements.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Applications and User Interface

- Improved the contrast of ApplicationV2 checkboxes when Light Mode is in use. (11513)

`ApplicationV2`
### The Game Canvas

- Added a core setting for a new Dynamic Ring "Grid Fit" mode that results in larger dynamic Tokens. The tradeoff is that Token elements which "overflow" their rings may now spill further beyond the Token's normal grid boundary. (11571)


## API Improvements


### Applications and User Interface

- Added the ability to use <hr> to add horizontal lines in FormSelectOption. (11518)

`<hr>``FormSelectOption`
### Other Changes

- DialogV2 dialogs can now use options.form.closeOnSubmit to permit them to stay rendered when using their buttons. (11514)
- HTMLProseMirrorElement now emits a close event when its inner editor is destroyed. (11577)

`DialogV2``options.form.closeOnSubmit``HTMLProseMirrorElement``close`
## Bug Fixes


### Documents and Data

- Improved Macro#execute so that chat macros always reliably return a ChatMessage instance. (11505)
- operation.combatTurn is now only set in Combatant#_preUpdateOperation if operation.turnEvents isn't false. (11531)

`Macro#execute``ChatMessage``operation.combatTurn``Combatant#_preUpdateOperation``operation.turnEvents``false`
### Applications and User Interface

- Resolved an issue where the "Jump to Bottom" button was incorrectly appearing after clearing chat under certain circumstances. (10041)
- Added ApplicationV2 Light Mode table styling, significantly improving legibility. (11509)
- When a Region placeable is controlled or released, the Region Legend now retains its previous positioning. (11583)

`ApplicationV2`
### The Game Canvas

- Scene darkness animation no longer continues after viewing a different Scene. (11520)
- Prevented an error that was thrown when attempting to set a flag that contained a null value. (11540)
- The first and history segment properties are now set correctly in Ruler#_getMeasurementSegments. (11542)
- Resolved an issue where the path returned by SquareGrid#getDirectPath could sometimes contain repeating offsets when using the ILLEGAL diagonal rule. (11566)
- GridlessGrid#getShiftedOffset now returns correct results when passed GridOffset coordinates. (11574)

`null``first``history``Ruler#_getMeasurementSegments``SquareGrid#getDirectPath``ILLEGAL``GridlessGrid#getShiftedOffset``GridOffset`
### Other Changes

- Implemented _onClick on all custom HTML elements to improve consistency and accessibility. (11506)

`_onClick`
## Documentation Improvements


### Other Changes

- Clarified the API documentation for the first parameter of Document.create(). (8619)
- Fixed a minor error in the comment of Item#isOwned. (11496)
- Updated the API front page document sheet links to include ApplicationV2 subclasses. (11503)
- Fixed a typo in the _onDeleteDocuments deprecation warning. (11528)
- Improved consistency of Document inheritance API documentation. (11572)

`Document.create()``Item#isOwned``ApplicationV2``_onDeleteDocuments``Document`