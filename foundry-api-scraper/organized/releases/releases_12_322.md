# Release 12.322 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.322

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.322


## Version 12 Testing


##### May 09, 2024


## Foundry Virtual Tabletop - Version 12 - Testing 3 Notes

Another week, another build! We're happy to deliver the next build in the User Testing phase of our development cycle for Version 12. This build forgoes introducing major changes to features in favor of focusing on some UX/UI polish and bug fixes for features previously released during earlier phases of development.

We'd like to take the time to express some gratitude for the dedicated members of our development community and those amongst the broader membership of our userbase who have been diligently testing and providing feedback, finding bugs, and helping to keep our eye on potential issues as we work toward a stable build! Thanks everyone!

WARNING: This Testing update is intended for those dedicated users who wish to test the new features provided in Version 12. It is not intended for use in weekly games or in games with heavy use of add-on modules. The goal for this build is to collect preliminary testing feedback from developers and users, not to power actual game sessions!


## New Features


### Architecture and Infrastructure

- Several dependencies and libraries have been updated to their latest stable versions. Please see the following GitHub issue for details: (10877)


### Applications and User Interface

- The Permission Configuration window now uses Application V2 and has received some standardization in appearance for both in-world use and the User Management view. (10867)
- The ProseMirror editor selection dropdowns now use a JavaScript approach to resolve issues with UI overflow. (8212)
- When creating a new Document, leaving the name field blank now uses the sub-type of the document rather than the primary document name. For example, creating a new Actor of the type "NPC" will result in "NPC 43" rather than "New Actor 43". (10737)
- The Scene Region tools now provide helpful toolclips similar to those provided by other tools on other layers. (10760)
- Pressing Delete now deletes a controlled Region or controlled Shape. (10756)
- Notifications are now provided when objects are deleted using the Delete key, copying/pasting objects with CTRL+C or CTRL+V, and reverting changes with CTRL+Z. (10856)
- In cases where canvas placeables (such as tokens) share the same coordinates, elevation, and sort index, hovering over a particular token will temporarily elevate it to the top of the stack for easier visibility. (10822)


### The Game Canvas

- The Shapes tab of the configuration window for Scene Regions now features a new button that will create a Shape from a selection of walls. (10710)
- The initial values for Scene darkness environment ambience received some recalibration and Scenes now more closely match the visual appearance of V11 scenes. (10861)


### Dice and Cards

- Inline Roll Tooltips now display the original formula data rather than the evaluated outcome. (8810)


### Localization and Accessibility

- Header buttons in AppV2 instances now follow the same localization process as those used in AppV1 instances. (10846)
- Removed the question mark from certain data model field labels (such as "is Darkness Source?") which previously included one. (10866)


## API Improvements


### Documents and Data

- Actors#fromCompendium now includes a clearPrototypeToken option to control whether or not default token settings should be applied during creation workflows. (10876)
- Document class metadata is now used to determine if a Document contains type data, rather than querying its schema. (10875)

`Actors#fromCompendium``clearPrototypeToken``type`
### Applications and User Interface

- ActorSheetV2 now includes Prototype Token Configuration, Show Portrait, and Show Token in its default set of header actions. (10827)
- ApplicationV2#bringToTop now provides a backwards-compatible shim which redirects to ApplicationV2#bringToFront. (10844)
- When an Application V2 window renders, it now includes an indicator as to whether it is a first render as part of its ApplicationRenderOptions. (10847)
- game.settings.get and game.settings.set calls now provide more meaningful feedback that includes the attempted setting key which was found to be invalid. (10834)

`ActorSheetV2``ApplicationV2#bringToTop``ApplicationV2#bringToFront``ApplicationRenderOptions``game.settings.get``game.settings.set`
### The Game Canvas

- Temporary actor creation via Actor.implementation now uses default token properties if they are configured. (10665)

`Actor.implementation`
### Documentation Improvements

- Corrected some typos in the documentation of foundry.utils.throttle. (10838)

`foundry.utils.throttle`
## Bug Fixes


### Documents and Data

- Packagee `json` files with defined packs may now configure the banners for those packs to be blank by assigning the banner key a null value. (9681)
- Corrected an API issue which prevented players from updating Combatants for which they had ownership permissions. (10501)
- Resolved an issue which caused SortingHelpers.performIntegerSort to fail to respect the original sort request in cases where a re-index of siblings was required. (10531)
- Duplicating a Compendium once again completes successfully instead of failing and throwing an error. (10880)
- Documents can once again be modified inside a freshly-created compendium. (10881)

`pack``SortingHelpers.performIntegerSort`
### Applications and User Interface

- Canvas panning operations no longer halt in cases where the canvas is right-clicked without moving the mouse. (10836)
- Corrected a bug which prevented a base audio effect from playing when the sound was muffled if no muffled effect was defined. (10862)
- Context menus for the Macro Hotbar are now rendered above the Game Paused graphic. (10832)
- Corrected a bug which caused ContextMenu#_onClose to not be called in cases where a new context menu was opening at the same time the close would be performed, resulting in more than one context menu being open at a time. (10555)
- Application V2 windows now only minimize when double-clicking in the empty space of the header to prevent cases where double-clicking header buttons could previously result in unintentional minimizing. (10840)
- Resolved some issues with the z-index sorting for Application V2 header control buttons. (10852)
- Styling for the Region Legend now has an overflow configured to correct a visual style bug with the cropping of the focus shadow indicating a selected input. (10837)
- Corrected some visual bugs with the styling of FilePicker on both the setup and game views. (10843)
- Application V2 header buttons are now classified as type="button" so they do not respond to ENTER keypresses. (10851)
- Data submitted from Document sheets is now validated to catch errors that should block form submission and halts the closing of the submitting window to allow for correction. This improves the overall DocumentSheetV2 framework and resolves issues like one which incorrectly submitted a scene Region Script Behavior configuration sheet with invalid JS. (10869)
- All remaining uses of the previous colorPicker handlebars helper have now been replaced with the new color-picker HTML element. (10871)
- The deprecated nameAttr option of the selectOptions handlebars helper now uses the correct deprecation path rather than silently failing. (10872)
- Added missing scrollbars to the Shapes and Behaviors tabs of the Scene Region Configuration dialog. (10882)

`ContextMenu#_onClose``type="button"``DocumentSheetV2``colorPicker``color-picker``nameAttr``selectOptions`
### The Game Canvas

- Walls can now be chained again by holding the CTRL key. (10845)
- Corrected an issue which caused the Blindness vision mode to render as a black circle. (10868)
- Tokens placed on or very close to the boundary of a darkness source no longer gain visibility into the area of the darkness source. (10839)
- Combatants are no longer removed from Combat if their Token is teleported to a different scene by the Scene Region Teleport behavior. Instead, the Combat is automatically unlinked from its scene. (10829)
- Scene Region darkness level adjustment behaviors now apply a visual indicator of the darkness change immediately. (10855)
- Resolved an issue where the preview sometimes "stuttered" when a Token was dragged with the Shift key held. (10873)
- CONFIG.Canvas.visualEffectsMaskingFilter can now be extended. (10878)
- Fixed an issue where a hidden alpha was applied to text of Drawings twice, reducing the opacity by 25% instead of the intended 50% value. (10879)

`CONFIG.Canvas.visualEffectsMaskingFilter`
### Package Development

- Corrected an edge-case bug which occasionally caused relationships.systems to accept object data instead of an array. (8328)

`relationships.systems`
### Dice and Cards

- Corrected a bug that caused an error to be thrown when the formula of a Roll included whitespace at the end (such as in cases where a space was placed between the formula and a flavor comment). (10858)
- Roll#render now passes supplied options.flavor strings onward to the HTML template. (9347)

`Roll#render``options.flavor`