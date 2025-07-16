# Release 10.273 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.273

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.273


## Version 10 Development


##### July 14, 2022


## Foundry Virtual Tabletop - Version 10 Development 3 Release Notes

Be certain to carefully back up any critical user data before installing this update.

Packed to the brim with every last minute API change we could fit, we're extremely pleased to announce that this update brings the API Development phase for Version 10 to a close. This update focused primarily on incorporating the final requests for API changes from our development community, while also strengthening aspects of the API which we knew needed to be released before we could move on to the User Testing phase. Now that all the framework and backend work is solidified we can move on and start refining the user-facing experience for our awesome community!

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights

With the closing of the API Development cycle, much of this update prioritized finalizing any API changes we needed to make before we could move on to User Testing, to be sure that community developers had all the tools that we could provide them to update all their awesome packages to support V10. However, that doesn't mean we didn't manage to find some ways to squeeze in some features users will find exciting:


#### Journals V2

We spent a lot of time during this update refining some of the last pieces of the underlying framework for Journals V2. This update brings improvements to both the user interface and functionality of journals, correcting some bugs and adding some nice new functionality. Dynamic links got a series of improvements, including the ability to link to specific headings inside a journal, relative links within the same journal entry, and ability to play playlist sounds directly from a journal entry for all players. We also managed to polish up some of the lingering bugs with multi-page view, specific journal sheet types, and the ProseMirror editor. While much of the UI features are not yet finalized, the core functionality requiring API updates has been mostly handled. Look forward to the UI getting a facelift in the upcoming testing phase!


#### Canvas Improvements

There's a lot that has changed with canvas rendering, including new features for Vision, improvements to Tile Occlusion and Overhead Tile rendering, and a whole lot of extremely technical API changes that only people gifted in the dark sorcerous arts of PIXI can easily grasp. For the rest of us end-users, this update brings support for setting a "Fog Exploration Image" or setting different colors for explored or unexplored areas of the Fog, and a new approach to sorting for controlled tokens that might overlap one another on the canvas. Some improvements have been brought in for Canvas Drawings, including some tweaks to improve how text is rendered if you're using a custom font, but mostly changing validation and labeling for some fields. In addition, a new "Vision" occlusion mode for Overhead Tiles makes it possible for your tokens to see inside an area covered by an Overhead tile only using their line of sight (though please note that this features is going to be refined further before V10 stable). Lastly, there have been further tweaks and refinements to the performance to canvas rendering including lighting to further balance the benefits of performance and accuracy.


#### User Tours

This update brings the first iteration on an interface for user Tours, allowing for developers to register Tours for users to complete, and allowing users to restart tours they have already completed. We expect to leverage this feature heavily to provide both surface level information as well as deeper tutorials for new users going forward.


## Breaking Changes


### Architecture and Infrastructure

- mergeObject now supports a new performDeletions option to control whether it implements the '-=' shortcut prefixed delete instructions or ignores them. (6582)
- Tile#getRoofSprite has been removed in favour of the newly reworked Roof occlusion framework. (7121)

`mergeObject``performDeletions``'-='``Tile#getRoofSprite`
### Other Changes

- Meta Issue: Overview of breaking changes in Document and data models from V9 to V10. (6849)


## New Features


### Documents and Data

- Meta Issue: Overall feedback collection for "Journal V2". (7050)
- Display of the Edit button for Journal Entry Pages now uses CSS rather than Javascript to control whether it is visible. (7413)


### Applications and User Interface

- Meta Issue: Identify and address ProseMirror feature gaps. (7286)
- Meta Issue: Implement "Journal V2" enhancing the interface and functionality of the journal system. (4941)
- A new "Tour Manager" UI has been added, allowing users to view and consume Tours that have been registered in game.tours. (6883)
- Image Journal Entry Pages have a new UI which displays the full-sized image when viewing the entry page or showing the image to players. (857)
- Dynamic links to playlist sounds can now be used to start a track or playlist for all users, rather than simply offering a preview for the individual user. (6778)
- ui.notifications are now also logged to the dev-tools console for the purposes of allowing users to see warnings or errors that may otherwise vanish before they finish reading them. (4826)
- Controlled tokens are now shifted to a higher sort value relative to their peers at the same elevation. It is now possible to customize TokenDocument#sort to accommodate handling for this, but this is anticipated to change in a later version when this data is persisted in the database. (7425)
- Minimizing and Maximizing Application windows now makes use of CSS selectors instead of jQuery. (6670)

`game.tours``ui.notifications``sort``TokenDocument#sort`
### The Game Canvas

- Overhead Tiles now support a new "Vision" occlusion mode which will reveal the portions of the tile based on a controlled Token's vision polygon. Further development is expected to iterate on this feature during the testing phase to more firmly align with user expectations. (4834)
- A new vision mode "Detect Invisibility" has been added, and some visual improvements have been brought in for the tremorsense vision mode. (7451)
- The CanvasVisibility layer has been migrated to use a normal blend mode from its previous multiply blend mode. In addition, it is now possible to define an image to be used as an overlay for the Fog of War for non explored areas, which may be configured from the Scene Configuration window. (7249)
- It is now possible to set different colors between explored and unexplored Fog Exploration areas from the Scene configuration. (7452)
- Measured Templates can now be "hidden", bringing feature parity with light sources and sound sources, a template can be hidden with right-click and can be initially created in a hidden state by holding ALT when they are being placed. (2538)

`CanvasVisibility`
### Package Development

- When installing and updating packages, the new Package Relationship compatibility field is now checked to ensure package dependencies respect maximum and minimum compatible versions. (7314)
- Packages which display a "Dependencies required" flag on the Setup screen will now link to the Read Me or Project URL when possible, else it will default to the URL for the package manifest. (7458)

`compatibility``maximum``minimum`
### Dice and Cards

- The chat parsing syntax for roll expressions has been extended and should now recognize roll expressions on multiple lines. The parser now passes each roll expresion into Rolls as part of a created ChatMessage. (6821)
- As part of ChatMessage restructuring with regard to rolls, arbitrary terms can now have Flavor attached to them. (7392)
- Roll formulas once again support use of the "Remainder" operator %. (6674)

`Rolls``ChatMessage``%`
### Localization and Accessibility

- The position field in Drawing configuration has been relabeled to use the term "Coordinate" instead of "Position", for consistency with other parts of the UI. (6973)


## API Improvements


### Architecture and Infrastructure

- The relationship between Actors#fromCompendium and Actor#_preCreate has been simplified, application of default prototype token settings have been shifted to apply exclusively to the Actor#_preCreate operation. (6453)
- A number of core software dependencies have been updated. (7479)

`Actors#fromCompendium``Actor#_preCreate``Actor#_preCreate`
### Documents and Data

- Every class in the JournalPageSheet prototype chain now calls a render{className} hook when each individual page is rendered in the combined Journal Entry view. (7431)
- The new Collection game.tours has been added, for the purposes of registering and managing Tour documements. (6984)
- Game Settings can now be configured to use a type that refers to a DataModel class definition. (7041)
- The Setting update workflow now passes userId to setting onChange handlers. (7421)

`JournalPageSheet``render{className}``game.tours``Settings``type``DataModel``userId``onChange`
### Applications and User Interface

- The ProseMirror activateEditor entry point now provides the hook createProseMirrorEditor, allowing developers to add functionality to the created editor instance. (6723)
- It is now possible to create relative links among other Journal Entry Pages within the same Journal Entry document. (7415)
- AudioHelper#unlock has been added, which stores a Promise that resolves once the AudioContext is available. (7432)
- The Handlebars template loadTemplates now provides an alternate method to allow key/value pairs to be used to define shorthand references for templates. (6760)

`activateEditor``createProseMirrorEditor``AudioHelper#unlock``Promise``AudioContext``loadTemplates`
### The Game Canvas

- #updateTileOcclusion has been refactored, providing the new private method _identifyOccludedTiles which houses the logic for whether a tile should be occluded. (7342)
- A new masking group has been added to the canvas tree rendering process, and can be used to define masks and other display objects which should be rendered first in a given frame.(7144)
- token.document.getFlag("core", "occlusionRadius") has been added, allowing for the occlusion radius of a token to be overrridden on a per-token basis. (7343)
- The Rain particle effect emitter now supports a maxParticles as an input option to control the density of the rain. (7422)
- The ParticleEffect#stop operation now supports a delay which allows some time for particles to naturally decay before the emitter is cleaned up. (7423)
- The activateNote Hook has been added, and is called when a Map Note is activated. (7447)
- The MovementSource class has been implemented, and is passed to the Line of Sight Polygon backend when testing collision for Token movements. (7466)
- The canvas rendering API now supports use of PIXI batch creation functionality for shaders. (7475)

`#updateTileOcclusion``_identifyOccludedTiles``token.document.getFlag("core", "occlusionRadius")``maxParticles``ParticleEffect#stop``delay``activateNote``MovementSource`
### Package Development

- ClientPackage#migrateManifest now supports an option to produce a backwards-compatible manifest JSON. (7474)

`ClientPackage#migrateManifest`
### Localization and Accessibility

- The selectOptions handlebars helper now supports sorting the options provided based on their label, after localization, by passing the sort {boolean} parameter. (7237)

`selectOptions``sort {boolean}`
## Bug Fixes


### Documents and Data

- Returning false on a preCreateItem hook should no longer result in errors for synthetic actors. (6953)
- TinyMCE should no longer display unexpected data as a result of a module or system injecting HTML into the DOM. (7460)
- Drawing documents are now validated to ensure that they have either visible text, visible fill, or visible lines. (7405)

`false``preCreateItem`
### Applications and User Interface

- A memory leak related to the audio engine has been corrected. This leak could occur as a result of buffered audio not being properly released from memory when a sound is no longer playing. (7437)
- Updating a Wall type to "Door" now re-renders the wall settings window to make the door state selection menu visible. (6904)
- The configuration window for canvas placeables such as Tiles now display "Grid Units" as a fallback if the Scene does not have a specific unit of measurement defined. (6971)
- Journal application windows now have a minimum size to prevent cases where important UI buttons would be obscured by resizing. (7179)
- Setting the default Journal Entry Page Sheet sheet to "markdown" should no longer cause pages to become stuck in an uneditable state. (7409)
- Clicking a Dynamic Link to a specific page in the same journal entry while in multipage mode should now navigate the user to the specific page as expected. (7410)
- Attempting to use the ProseMirror editor to edit more than one Journal Entry Page at a time no longer throws an error and should now function as expected. (7450)
- The Edit button should no longer appear on Journal Entries stored within a locked compendium. (7407)
- The default token settings configuration window should once again render as expected. (7436)
- An issue which caused vision range inputs to not properly render in the Token Configuration sheet has been resolved. (7434)
- An issue where Sidebar Tabs could occasionally appear renderedered on top of each other has been resolved. (7420)
- The KeybindingsConfig application should now display macOS Command symbol in place of the CTRL key for Mac clients. (6997)

`KeybindingsConfig`
### The Game Canvas

- To strengthen accuracy of vision calculation, ClockwiseSweepPolygon rays are now extended to the maximum distance of a radius or polygon. (7449)
- The internal workflow of the ClockwiseSweepPolygon has been improved and simplified to provide better handling of cases with colinear endpoints. (7440)
- Deleting a FogExploration document via the API using its standard delete workflow should now correctly reset the Fog Exploration data. (6573)
- Color intensity should no longer have an effect on the illumination color used for negative luminosity light sources. (7468)
- Luminosity value should once again affect how much light is diminished by Darkness Level. (7426)
- An issue which caused the Vision Limitation Threshhold to stop functioning as expected has been resolved. (7467)
- Ambient sound sources now treat a token as a listener only if it is controlled OR if it is observable to a non-Gamemaster user while no tokens are controlled. (7443)
- Changing a Token's image on the canvas should now function as expected. (7408)
- Token elevation text should now be properly anchored to the top of the token frame. (7402)
- A redudant data preparation workflow for synthetic (un-linked) token actors has been removed. (7476)
- Text Drawings are now redrawn when width is changed, allowing users to configure different text wrapping widths. (6996)
- Text Drawings have been refined to resolve an issue where custom fonts could be clipped as a result of insufficient padding. (4490)
- Tile#refreshOcclusion now calls the hooks for refreshTile. (7341)
- GridHighlight#highlightGridPosition no longer incorrectly treats the black border option as null. (7424)

`ClockwiseSweepPolygon``ClockwiseSweepPolygon``FogExploration``Tile#refreshOcclusion``refreshTile``GridHighlight#highlightGridPosition``null`
### Package Development

- Attempting to install an unavailable package should now provide an error message instead of an unhandled exception. (7403)
- If the "Default World" uses a system that is not installed, it should now return to setup rather than failing to launch and throwing an error. (7430)


### Dice and Cards

- Calls to the static Roll method should now be called on the configured Roll class where appropriate. (6905)
- The specific roll expression /r ((0+1)d6 + 3 + ) should no longer result in a thrown error. (6938)
- An unintended change to the default sort mode for Cards resulted in Card Decks not sorting as expected, this has been corrected. (7465)
- Cards should once again properly be recalled to their originating Deck when a Deck is reset. (7464)

`Roll``Roll``/r ((0+1)d6 + 3 + )`
### Localization and Accessibility

- Some issues with localization labels for software update logging messages have been corrected. (7433)


### Other Changes

- The logic for diffObject has been improved to remove cases where arrays of objects were incorrectly marked as different. (6813)
- Dynamic links referencing Documents stored in compendiums should once again resolve correctly when referenced by name. (7435)

`diffObject`