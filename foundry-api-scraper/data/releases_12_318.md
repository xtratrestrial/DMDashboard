# Release 12.318 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.318

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.318


## Version 12 Development


##### March 14, 2024


## Foundry Virtual Tabletop - Version 12 - Development 1 Release Notes

Hello community! We are very excited to share Version 12 Development 1 which adds a number of exciting new features to Foundry Virtual Tabletop. This release marks the start of the Development Phase of V12 development where our focus is on refining the initial design of major new features with a particular eye towards stabilizing the API so that system and module developers can begin confidently developing V12 packages. The Update Highlights section below emphasizes some of the most exciting new features which headline a huge list of smaller features and bug fixes.

We strongly recommend users considering testing V12 Development 1 upgrade first to V11.315 to take advantage of the new backup and pre-flight update check features included in that version. These should allow for the safe restoration of data in V12 migrations.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights


### Token Enhancements

A string of great Free Project Friday work from Ludovic has resulted in a new system for animating texture transitions! It's now possible to select an animation (like fade, swirl, hologram, and more) to use when updating a texture (like a Token's image) for a cool animated effect. The Development 1 release also includes more improvements for stacked Tokens which ensures that each Token's HUD doesn't overlay on top of other Tokens in the same stack.


### Application V2

This release includes significant improvements to the new ApplicationV2 framework including support for rendering Document sheets using the new Application V2 framework.

`ApplicationV2`
### Canvas Quality of Life Improvements

This release includes a number of improvements for the canvas. We have replaced FXAA with SMAA for better performance and antialiasing of pixelated edges introduced by occlusion. Eber has also been hard at work on Free Project Friday and has integrated support for cost calculations in grid measurements and unsnapped Ruler measurements.


### Embed Improvements

The @Embed enricher that was added in the Prototype phase has continued to improve with better support for secrets, an option to set the caption position, and a more helpful indicator when a Document fails to embed for any reason.

`@Embed`
## Breaking Changes


### Applications and User Interface

- Upgraded the UserConfig app to instead implement DocumentSheetV2 as a working example of using DocumentSheetV2 to render a document configuration sheet. (10512)

`UserConfig``DocumentSheetV2``DocumentSheetV2`
### The Game Canvas

- Improved rendering of stacked Tokens: Interface elements of Tokens are no longer rendered on top of other Tokens that are stacked on top of it. (8114)
- Added support for Template shapes that are based on the grid as an alternative to Euclidean shapes. (10476)


### Other Changes

- Changed the first argument of the getApplicationEntryContext hook event from the HTML element of the Application to the Application itself. (10465)

`getApplicationEntryContext`
## New Features


### Architecture and Infrastructure

- Added Support for buffering of socket updates that occur between the initial page load and game.ready in order to ensure that changes relative to the initially provided socket data are not lost. (5624)
- Updated a number of dependencies. (10515)
- Hardened the internal database connection, migration, and disconnection workflows and recorded a database state which improved the design of asserting that a database was ready before attempting to query its contents. (10468)

`game.ready`
### Application V2

- Added subclass DocumentSheetV2 which provides a base class framework for using ApplicationV2 to render Document sheets. Subclasses of DocumentSheetV2 can be registered as the used sheet class for a particular document sub-type or for specific documents via sheet configuration. (5441)
- Automatically adjust the z-index of ApplicationV2 instances to bring them to the front when pointerdown events occur inside the app. (10481)
- Added an ApplicationV2 compatible subclass for DocumentSheetV2 which provides a basic framework for using ApplicationV2 to render Document sheets. (10498)
- ApplicationV2 now includes some built-in support for tabbed navigation and state persistence of active tabs. (10506)
- The numberInput function now supports setting tooltip attributes. (8878)
- Added ApplicationV2#_canRender as a protected method which subclasses can override to assert permissions that would prevent an Application from being renderable. (10520)
- ApplicationV2 now includes built-in support for top-level forms that makes defining "form applications" easy and with significant performance improvements compared to the Application V1 architecture. (10521)
- Improved the CSS rules for Application V2 instances in the Game view. This is still a work-in-progress, but Application V2 instances will automatically opt-in to the new "Theme V2" styles by default. This can be disabled on a per-application basis. (10522)

`DocumentSheetV2``ApplicationV2``DocumentSheetV2``ApplicationV2``DocumentSheetV2``ApplicationV2``numberInput``ApplicationV2#_canRender``ApplicationV2`
### Applications and User Interface

- Improved the interface and behavior for Token stacking where multiple Tokens appear in the same grid space. (1085)
- Enabled basic keyboard keybinding support on the Setup view so that the Escape key can be used to close open UI windows. (10455)
- The theme-dark or theme-light classes are now added to the document body based on the user's preferred colour scheme. (10486)

`theme-dark``theme-light`
### The Game Canvas

- Added support for texture transitions and corresponding animations (a number of which are included in this release). (10497)
- The minimum grid size allowed for Scenes is reduced from 50px to 20px. (10500)
- The distance returned by BaseGrid#measurePath is now the point-to-point distance instead the offset-to-offset distance. (10517)

`BaseGrid#measurePath`
### Package Development

- Made the template.json file optional, allowing systems to declare Document types directly in their system.json manifest. (10444)
- Reverted the restriction of template.json to Actor, Card, Cards, Item, and JournalEntryPage which can now also be defined in the system.json file. (10462)

`template.json``system.json``template.json``Actor``Card``Cards``Item``JournalEntryPage``system.json`
## API Improvements


### Documents and Data

- A number of significant changes, improvements, and bug fixes for Scene Regions and Region Behaviors. (10518)
- Fixed ArrayField not working with required: false and/or nullable: true. (10443)

`ArrayField``required: false``nullable: true`
### Applications and User Interface

- Improved secret handling in @Embed enrichers. (10494)
- Improved @Embed handling when it fails to embed a Document. (10495)
- Added the captionPosition option to the @Embed enricher. (10496)
- Improved locked tooltip interaction by only dismissing them if the cursor is a certain distance away and actively moving away from the tooltip. (9809)
- Added the CONFIG.Adventure.exporterClass to allow systems to add system-specific logic to AdventureExporter behaviour. (10489)

`@Embed``@Embed``captionPosition``@Embed``CONFIG.Adventure.exporterClass``AdventureExporter`
### The Game Canvas

- Replaced FXAA with SMAA. (10209)
- Added visibilityRefresh hook into CanvasVisibility#refreshVisibility. (10461)
- Added support for cost calculation in grid measurements. (10474)
- Added support for unsnapped Ruler measurements. (10475)
- The base ParticleEffect class can now be used directly with an explicitly provided emitter config. (10488)
- Improved a number of elements in the Token Animation API and fixed a bug that caused animations under different names on the same Token to animate incorrectly. See the issue for more details. (10510)

`visibilityRefresh``CanvasVisibility#refreshVisibility``ParticleEffect`
### Dice and Cards

- Adopted Peggy as a robust replacement for custom dice expression parsing that produces a syntax tree of roll terms. Formula parsing uses Peggy by default this release to facilitate extensive testing. If need be this can be disabled to fall back to the prior formula parsing logic by assigning CONFIG.Dice.legacyParsing = true. (9773)

`CONFIG.Dice.legacyParsing = true`
### Localization and Accessibility

- Added support for automatic localization of Document and TypeDataModel classes via definition of static LOCALIZATION_PREFIXES on their respective classes. (10511)

`Document``TypeDataModel``static LOCALIZATION_PREFIXES`
### Other Changes

- Added a helper to throttle function calls: foundry.utils.throttle. (6172)
- Added the foundry.utils.AsyncFunction as a reusable reference to the asynchronous function constructor. (10493)

`foundry.utils.throttle``foundry.utils.AsyncFunction`
## Bug Fixes


### Documents and Data

- Both TokenDocument.createCombatants and .deleteCombatants are now passed TokenDocuments instead of Tokens. (10508)

`TokenDocument.createCombatants``.deleteCombatants``TokenDocument``Token`
### Applications and User Interface

- Content link matching tooltip is no longer dismissed immediately on mouse-move if text is selected via keyboard. (10056)
- Status effect names now appear in ActiveEffectConfig. (10445)
- Corrected a bug which prevented sidebar collections from properly re-rendering when a folder was deleted. (10516)

`ActiveEffectConfig`
### The Game Canvas

- The effects, nameplates, and bars of Tokens with the Secret disposition are now correctly hidden. (10503)


### Dice and Cards

- Parenthetical terms inside a formula no longer cause the result of isDeterministic to be incorrect under the new Peggy parsing. (8778)

`isDeterministic`
### Localization and Accessibility

- Removed the duplicate SCENES.HeaderVision localization key. (10449)

`SCENES.HeaderVision`
### Other Changes

- ClientDocument#getRelativeUUID no longer constructs an incorrect relative UUID on grandchildren Documents. (10484)
- Resolved some bugs with server-side sanitization of package-defined fields which are inside an array structure. (10492)

`ClientDocument#getRelativeUUID`
## Documentation Improvements


### Other Changes

- Improved the clarity of the Walls layer toolclip text. (10467)

