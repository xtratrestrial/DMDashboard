# Release 12.319 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.319

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.319


## Version 12 Development


##### April 18, 2024


## Foundry Virtual Tabletop - Version 12 - Development 2 Release Notes

Welcome to the Version 12 Developer 2 release of Foundry Virtual Tabletop!

In this release, our team has now completed the initial API-level work and created some preliminary user interfaces for some exciting new features. Most notably, the primary functionality is now in place for Scene Regions. As always, we have also invested extensively into the technical foundations of our software.

The Development phase of our work on Version 12 is now concluded. Our focus during the Development phase involved further refinements to prototype features and solidifying the API based on feedback from users in our Developer community. If you are a Module or System developer, this is the time to test your packages in Version 12 in order to provide us with feedback and request any API changes that would make your lives easier!

We strongly recommend users considering testing V12 Development 2 upgrade first to V11.315 to take advantage of the new backup and pre-flight update check features included in that version. These should allow for the safe restoration of data in V12 migrations.

WARNING: Updates on the Development channel are intended for testing and feedback from the development community. While the features and improvements of these updates may be close to a level of stability intended for public testing, they are likely to still include some bugs and incompatibilities which may frustrate you. It is not intended to use these releases for a live game.


## Update Highlights


### Regional Fun

Work has continued apace on Scene Regions, the feature that our community voted to include in Foundry V12! It now boasts a preliminary user interface, allowing you to easily create and configure your own Scene Regions. Even better, these Scene Regions can now actually DO things. You can now assign each Scene Region one or more out-of-the-box "behaviors:"

- Adjust Darkness Level
- Execute Macro
- Execute Script
- Pause Game
- Suppress Weather

These behaviors are triggered if that region detects an event that it cares about, a "subscribed event." For example, you can set a Scene Region to execute its behavior if a token enters it, or if a token starts or ends its turn inside it. You can even define a region that passively suppresses weather within its bounds. No more rain inside your cozy cottage!

Marking parts of Scenes that have special behaviors is an incredibly powerful and flexible tool and we are extremely excited to see what the community does with it. Because one of the available behaviors is executing an arbitrary macro or script, the possibilities are already immense and will only continue to expand.


### True Darkness Falls

Foundry has long had a lesser-known ability to make a "light" that actually makes its surroundings darker by giving the light a negative luminosity value. While cool, this only provided a visual representation of darkness, not a mechanical one. For instance, this "darkness" still revealed fog of war, and tokens with vision could "see through" it and see what was happening on the other side.

With this release, Darkness sources can now be created that are not lights at all. They can block vision like walls do and generally behave as darkness should intuitively work.


### Dynamic Token Rings

As many of you may know, we recently rolled out the Dynamic Token Engine feature in the Dungeons & Dragons Fifth Edition game system with the announcement of our partnership with Wizards of the Coast. Now we're excited to bring those features into the core software for any content creator and developer to use.

The Dynamic Token Engine is used primarily for 'pog style' tokens, and renders the ring, background, and creature artwork separately so that the visual display of the token can be responsive to in-game events. Systems and Modules can leverage the Dynamic Token Engine to display flashy visual updates when certain cues occur, such as when a character takes damage, receives healing, or changes state in another way such as by becoming invisible.

Content creators and developers alike: please look forward to a knowledge base article in the near future which will detail the process of creating tokens to work with the Dynamic Token Engine for use in your modules and systems!


### Audio: Power to the People

For too long, GMs have ruled the TTRPG airwaves with an iron fist - when they remember that audio is a thing at all.

Now, GMs can use the built-in Foundry permissions system to give players access to one or more playlists, potentially allowing players to control what is playing for everyone. This makes life as a GM a little easier and provides a better experience for all audio enthusiasts.


### Application Vee Too

Applications are the fundamental building blocks of the Foundry user interface, and Application V2 is better in every way.

With this release, the initial scope of Application V2 work is complete, laying the foundation for the next generation of the Foundry UI. Applications configured to use Application V2 gain:

- Improved form submission and window resizing, with the ability to partially re-render window contents on update.
- Access to built-in supports for OS-level browser color preferences, so that the provided UI is automatically styled to match when a user has their operating system configured for dark mode or light mode.
- Superior support for modals through Dialog V2, which also provides improved accessibility for those modals.

Any new UI windows we implement (such as the configuration application for Scene Regions) now use Application V2 as their basis. We encourage any community developers who wish to leverage Application V2 to do so and to provide feedback in the dedicated thread on our Discord Community.


### Dice Rolling V3 - Meet Peggy!

A variety of improvements have already been deployed for dice rolling throughout V12 and this release finalizes the scoped work for our dice and rolling systems.

Under the hood, dice roll parsing now uses Peggy, a powerful tool which allows us to define a "grammar" for the purposes of roll expressions, breaking those expressions down into individual, structured, and meaningful parts. By adopting Peggy as a parser, we were able to resolve some edge-case issues where otherwise valid rolling expressions would not be correctly interpreted.

Community developers now have access to a robust toolkit for the purposes of manipulating, inspecting, and simplifying dice rolls. The addition of Peggy-based parsing also provides us with a strong framework that we can leverage for future dice improvements.

Hi, Peggy!


## Known Issues

- When configuring a light source, both the preview of the light and the original light are rendered.
- The 'Left Click to Release Objects' setting currently prevents new shapes from being added to existing regions. To test this functionality, please disable this setting first.


## Breaking Changes


### Applications and User Interface

- The {{#select}} handlebars helper is now deprecated in favor of using the {{selectOptions}} helper or one of the new helper functions in the foundry.applications.elements module. (10471)

`{{#select}}``{{selectOptions}}``foundry.applications.elements`
### The Game Canvas

- canvas.grid is now the BaseGrid of the viewed scene (canvas.scene.grid) instead of the GridLayer instance. (10537)
- Allowed partial initialization of effect sources. (10585)
- Refactored and simplified the EffectsCanvasGroup. (10599)
- Fixed an issue where the layer deactivation workflow was not being executed if the layer was already inactive. (10641)

`canvas.grid``BaseGrid``canvas.scene.grid``GridLayer``EffectsCanvasGroup`
## New Features


### Architecture and Infrastructure

- Upgraded Font Awesome to 6.5+ to resolve a Firefox warning. (10409)
- Updated multiple dependencies. (10652)


### Documents and Data

- fromUuid calls in enrichHTML are now batched to retrieve multiple documents from a compendium at once rather than individually. (9893)
- Updated pdfjs to version 4.x. (10459)

`fromUuid``enrichHTML`
### Applications and User Interface

- Reduced the initial default level for user volume controls from 1.0 to 0.5. (10593)
- Expanded game.audio.context to three separate contexts (Music, Environment, and Interface), allowing for granular volume control and timing. (10586)
- Added new, configurable CREATE_PLAYLIST user permission. (8707)
- The Token border now renders on top of the Token's image if the Token is hovered or highlighted. (8043)
- The Ruler origin now snaps to the hovered Token to improve measurements for Tokens that are unsnapped. (10331)
- Placing two Ruler waypoints in quick succession within the space the Token occupies no longer opens the Actor sheet. (10620)

`game.audio.context``CREATE_PLAYLIST`
### The Game Canvas

- Overhauled the behavior of negative "light" sources (darkness sources). Within the radius of such a source, light and sight are now suppressed and vision is now blocked. (9283)
- Completed initial implementation of scoped work to create new token animations for transformations, movement, and reveals. For more information, see linked issues. (9787)
- Added support for Darkness Level Adjustment as a Scene Region behavior type. (10388)
- Added support for Weather Effect (or Exclusion) as a Scene Region behavior type. (10389)
- ClockwiseSweepPolygon now supports polygonal intersections between darkness sources and walls. (10480)
- Added a new DarknessSource class to handle darkness sources. LightSource class now no longer handles darkness sources. (10570)
- Added options to the constructor of effect sources. Effect sources can now self-attach/detach from the EffectsCanvasGroup. (10584)
- AmbientAudio playback volume is now determined based on effective volume rather than distance only. (10639)
- Added a set of new door sounds for magical doors and force walls. (10654)

`ClockwiseSweepPolygon``DarknessSource``LightSource``EffectsCanvasGroup``AmbientAudio`
### Dice and Cards

- Resolved some limitations with rolls that use parenthetical dice terms inside pools, contained data, and flavor text. (6048)


### Other Changes

- Disabled Electron app built-in spellchecking to improve user experience on non-English OSes. (10454)


## API Improvements


### Documents and Data

- Completed initial implementation of scoped work for generalized "Scene Regions" as an embedded Document and Placeable Object type within a Scene. Scene Regions allow users to define geometric regions with sub-types that determine their behavior. For more information, please see the linked issues. (9772)
- Integrated ActiveEffects directly with DataModel so that Active Effects can make more intelligent choices about how to cast data and apply changes. (6631)
- Added the _canChangeRound(user) and _canChangeTurn(user) methods to the Combat class to return whether a certain user can change the combat round or turn. (9574)
- V12 Data Architecture Investments. (9776)
- Compendium UUID redirects can now be configured via CONFIG.compendium.uuidRedirects. (10301)

`ActiveEffects``DataModel``_canChangeRound(user)``_canChangeTurn(user)``Combat``CONFIG.compendium.uuidRedirects`
### Applications and User Interface

- Completed initial implementation of scoped work for Application V2, a new abstraction for rendering interface applications which improves upon the existing application framework with a more modern and flexible approach. For more information, please see the linked issues. (5441)
- Permitted hidden attributes to be present in HTML elements. (9857)
- Implemented PointSoundSource#getEffectiveDistance which allows subclasses to override and configure how audio distance and volume easing are computed. (10134)
- Introduced a new <color-picker> custom element which internalizes the way that color selection is handled. (10569)
- Introduced an Application V2 compatible "light mode" which renders Application V2 instances in the client game view using a color palette comparable to Application V1 behavior. (10580)
- Introduced a custom <HTMLRangePickerElement> which provides a set of linked input elements, allowing range values to be configured using either a slider or a numeric input field. (10611)
- Added Set support to selected parameter in the selectOptions handlebars helper. (10615)
- Aligned {{selectOptions}} functionality with options preparation from createSelectInput and HTMLMultiSelectElement. (10616)
- Added support for ProseMirror text editor integration with Application V2 via a new HTMLProseMirrorElement custom element type and HTMLField integration. (10623)
- DataField#toFormGroup can now be passed a baseId which applies an id attribute to inputs and a for attribute to the group label. (10627)

`hidden``PointSoundSource#getEffectiveDistance``<color-picker>``<HTMLRangePickerElement>``Set``selected``selectOptions``{{selectOptions}}``createSelectInput``HTMLMultiSelectElement``HTMLProseMirrorElement``HTMLField``DataField#toFormGroup``baseId``id``for`
### The Game Canvas

- Improved our testing points framework with more flexibility (and better performance). (10021)
- Renamed Token#updateSource, AmbientLight#updateSource, and AmbientSound#updateSource to remove naming ambiguity with Document#updateSource that shares the same method name. (9575)
- Added measurement history support to Ruler. (10524)
- Added movement cost measurements to Ruler. (10525)
- The gridless grid has its own class GridlessGrid now that extends from BaseGrid, which became abstract. (10539)
- BaseGrid, SquareGrid, HexagonalGrid, and GridHex have been moved into the foundry.grid namespace. (10540)
- The DoorControl class is now configurable via CONFIG.Canvas.doorControlClass. (10559)
- Completed initial implementation of the dnd5e game system's Dynamic Token Ring functionality in the core software. (10598)
- Moved all source classes to client-esm and enhanced subclassing to accommodate non-point source shapes. This lays the groundwork for potentially implementing linear or even polygonal light and darkness sources in a future release. (10600)
- Implemented a workflow to enable recomputation of the source shape (and geometry if available). (10601)
- Introduced a new standalone Edge class which provides inputs to clockwise sweep and other collision detection algorithms. (10622)
- Added grid measurement support for paths with gaps. (10630)
- Deprecated HexagonalGrid#getAStarPath. (10632)

`Token#updateSource``AmbientLight#updateSource``AmbientSound#updateSource``Document#updateSource``GridlessGrid``BaseGrid``BaseGrid``SquareGrid``HexagonalGrid``GridHex``foundry.grid``DoorControl``CONFIG.Canvas.doorControlClass``dnd5e``client-esm``Edge``HexagonalGrid#getAStarPath`
### Dice and Cards

- Completed initial implementation of scoped work for Dice Rolling V3, including ending the deprecation period for synchronous rolls, implementing (Peggy), adding core unfulfilled roll support. For more information, please see the linked issues. (8573)
- Adopted Peggy as a robust replacement for custom dice expression parsing that produces a syntax tree of roll terms. (9773)
- Provided a public API for custom roll functions. (9820)
- Allowed roll formula functions to operate on non-numeric intermediate values. (9821)
- Passing maximize: true or minimize: true to Roll#evaluate now causes the DiceTerms to be considered deterministic. (10597)

`maximize: true``minimize: true``Roll#evaluate``DiceTerm`
### Other Changes

- Performed many additional Scene Region and Region Behavior changes to complete API-level scope changes and start preparing this new feature for the Testing phase. (10631)
- Settings can now be registered by providing an associated DataField instance. This data field's toFormGroup logic is used to automatically render that Setting. (8905)
- Improved the API ergonomics of Application V2 form submission based on feedback from V12 Development 2. (10568)
- Added region, scene, active, and viewed properties to RegionBehavior. (10617)
- Removed support for system/module-defined Region events. (10650)

`DataField``toFormGroup``region``scene``active``viewed``RegionBehavior`
## Bug Fixes


### Documents and Data

- Added a new combatTurnChange hook event to allow modules to react to turn order changes. (9664)
- System Actor migrations are now applied to system data of ActorDelta. (10353)
- Improved the identification and handling of combat turn events to use new operation-level database workflows for more reliable results. (10387)
- When Document.updateSource is called with dry run option, it no longer breaks references to embedded data model sources. (10395)
- Prevented update validation from allowing the creation of invalid items in a particular circumstance. (10401)
- Actor._preCreate now properly returns whether creation is allowed. (10514)

`combatTurnChange``Actor``ActorDelta``Document.updateSource``Actor._preCreate`
### Applications and User Interface

- UserConfig character selection now includes a blank option so that the user is not forced to choose a character. (10548)
- Harmonized the z-index handling of Application V1 and Application V2 so that they now play nicely together. (10552)
- Improved behavior when playlist sounds fail to load their source files. (10596)
- Ensured that the Players list automatically updates when a User's preferred pronouns are entered or changed. (10612)
- Fixed an issue where Application V2 could not be dragged if it had no title. (10637)

`UserConfig`
### The Game Canvas

- Prevented an occasional error with Token._refreshVisibility that prevented newly-dropped Tokens from being drawn on the canvas (10550)
- Replaced custom transforms to canvas coordinates with canvas.stage.toLocal for completeness. (10561)
- Hid the elevation tooltip of Tokens with the Secret disposition. (10594)
- Prevented Secret tokens from being targeted by using the target tool (left-click) or with a double right-click. (10595)
- "Locked" tokens that should not be allowed to move can no longer bypass this restriction by using the Ruler. (10621)
- Fixed locked placeable objects not being hoverable. (10645)

`Token._refreshVisibility``canvas.stage.toLocal`
### Package Development

- Fixed a Foundry server crash that occurred when any protected package had an empty signature.json file. (10590)

`signature.json`
### Other Changes

- Height is no longer ignored when calling Application#setPosition() if the last render height was auto. (9516)
- _preCreate CRUD handlers now receive fully-initialized Document data as their data parameter instead of the initial creation data. (10546)
- The App V1 Document Sheet now has its appId set during its initial render call. (10551)
- Hot-reload now properly refreshes App V2 applications in addition to App V1 applications. (10554)
- Snapshot creation no longer fails when the Backup directory is missing. (10565)
- ChatLog.createPopout now carries over original options. (10587)
- ChatLog._renderBatch now uses this.collection.contents instead of game.messages.contents. (10588)
- The Support Details report once again correctly detects the viewed scene. (10653)

`Application#setPosition()``auto``_preCreate``data``appId``Hot-reload``ChatLog.createPopout``ChatLog._renderBatch``this.collection.contents``game.messages.contents`
## Documentation Improvements


### Other Changes

- Correctly documented the Return value of ActiveEffect.apply. (8621)
- Corrected documentation for createScrollingText to correctly indicate that the text originates from a point on the canvas. (8798)
- Improved documentation of the global Game instance and its component properties. (10558)
- Toolclips now show correct modifier keys for macOS users. (10633)

`ActiveEffect.apply``createScrollingText``Game`