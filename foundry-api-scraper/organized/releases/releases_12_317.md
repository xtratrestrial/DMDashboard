# Release 12.317 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.317

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.317


## Version 12 Prototype


##### February 20, 2024


## Foundry Virtual Tabletop - Version 12 - Prototype 2 Release Notes

Hello community! We are very excited to share Version 12 Prototype 2 which adds a number of exciting new features to Foundry Virtual Tabletop. This release concludes the Prototype Phase of V12 development where our focus was on defining the initial design for major new features. The Update Highlights section below emphasizes some of the most exciting new features which headline a huge list of smaller features and bug fixes.

We now enter the API Development phase where we will focus on continuing to expand and refine these new functionalities with a particular focus on stabilizing the API so that system and module developers can begin to confidently develop V12 packages. We encourage developers in our community to actively engage with the Prototype 2 release in order to provide us with actionable feedback that we can incorporate.

We strongly recommend users considering testing V12 Prototype 2 upgrade first to V11.315 to take advantage of the new backup and pre-flight update check features included in that version. These should allow for the safe restoration of data in V12 migrations.

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you choose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.


## Update Highlights


### Scene Regions and Region Events

Our community-voted feature for Version 12 is Scene Regions which now has a usable prototype! In addition to the voted-upon feature of Scene Regions we have also pushed ourselves to deliver a long-awaited feature that pairs elegantly with Scene Regions which we call Region Events (historically discussed as "Event Triggers"). In combination, Scene Regions and Region Events establish a powerful framework for defining areas within Scenes to which behaviors can be attached.

These behaviors can alter aspects of the environment or allow for dynamic events to occur related to the Region via integration with Region Events. These events allow for automated behaviors when Tokens enter or exit the Region, or begin or end their combat turn inside the Region.

Work on Scene Regions and Region Events is very much a work-in-progress and has API-only support at this time.


### Application V2

Prototype 2 ushers in the a first usable iteration of the long-awaited ApplicationV2 API which provides a new framework for rendering user interface applications in the Foundry VTT environment. ApplicationV2 improves on the design and flexibility of the v1 Application class with powerful new tools for developers. The current Application framework will be supported for a long time - at least through Version 15 - so don't worry! Key highlights of ApplicationV2 include better application window frames, separation between the base application and the rendering engine used, support for partial rendering using the Handlebars engine, and a powerful set of life-cycle events.

`ApplicationV2``ApplicationV2``Application``Application``ApplicationV2`
### See the Light and Darkness

Prototype 2 includes exciting enhancements to how light and darkness sources are handled and how they interact with Token vision. Negative light sources are now more mechanically rigorous by blocking vision and light as well as suppressing light and vision sources which are within their areas of effect. Additionally, we have separated the functionality of Light Perception as a new (default) vision mode which is designed to more accurately model non-supernatural sight.


### Fulfillable Rolls

The update includes an API for configuring how rolls are executed in the software. Users can choose whether each of their die denominations should be fulfilled via digital dice rolling, manual input, or some other external service such as bluetooth dice, lava lamps, or cosmic microwave background radiation. With this update the functionality previously provided by the Unfulfilled Rolls module has been absorbed into the core software.


### Drawing a Distinction

A new "role" option has been added to Drawings. A Drawing can have either the "Object" role or the "Information" role. A Drawing which represents an "Object" is rendered into the Primary Canvas Group and is affected by lighting and fog of war exploration. A Drawing which conveys "Information" is rendered in the Interface canvas group and is visible to all players unless hidden. A new toggle has been added to the tools to choose a default behavior between the two roles.


## Breaking Changes


### Documents and Data

- Deprecated Combat#getCombatantByActor and Combat#getCombatantByToken in favor of pluralized versions Combat#getCombatantsByActor and Combat#getCombatantsByToken. (9241)
- Migrated ActiveEffect.icon to ActiveEffect.img for consistency with other Document types. (9452)
- Expanded support for system-specific type data to additional Document types: ActiveEffect, Combat, Combatant, and ChatMessage. (10185)
- Improved DataField#fieldPath to accurately reflect the dot-separated property paths in the data model that contain the field. (10307)
- The definition and behavior of DocumentStatsField#coreVersion and DocumentStatsField#systemVersion has been changed. (10363)
- Removed the _stats field from TombstoneData. (10374)
- NumberField#clean no longer applies abs() to negative values if positive: true. (10393)
- Removed support for TokenDocument#effects and TokenDocument#overlayEffect. Status effects on a Token are now handled entirely by Active Effects on the Token's associated Actor. (10396)
- ClientDocument#prepareData now calls ClientDocument#system.prepareBaseData and ClientDocument#system.prepareDerivedData only if the ClientDocument#system is a TypeDataModel. (10411)
- The type field of the TableResult Document is now a DocumentTypeField (previously NumberField). (10428)

`Combat#getCombatantByActor``Combat#getCombatantByToken``Combat#getCombatantsByActor``Combat#getCombatantsByToken``ActiveEffect.icon``ActiveEffect.img``ActiveEffect``Combat``Combatant``ChatMessage``DataField#fieldPath``DocumentStatsField#coreVersion``DocumentStatsField#systemVersion``_stats``TombstoneData``NumberField#clean``abs()``positive: true``TokenDocument#effects``TokenDocument#overlayEffect``ClientDocument#prepareData``ClientDocument#system.prepareBaseData``ClientDocument#system.prepareDerivedData``ClientDocument#system``TypeDataModel``type``TableResult``DocumentTypeField``NumberField`
### Applications and User Interface

- Decoupled the content-link class from the event listener which is now governed by a data-link attribute. (8830)
- Introduced a new HTMLFilePickerElement which allows including a filepicker as <file-picker>. This is intended to replace the approach of Handlebars Helpers which are now deprecated. (10314)

`content-link``data-link``HTMLFilePickerElement``<file-picker>`
### The Game Canvas

- Improved the API design of toggling the Combat state for Tokens with new methods Token#toggleCombatant and Token.toggleCombatants which replace the prior Token#toggleCombat method. (9068)
- Added support for distinguishing between PrimaryCanvasGroup drawings and Interface drawings. (10112)
- Deprecated Token#toggleVisibility in favor of updating the hidden field of the TokenDocument directly. (10404)

`Token#toggleCombatant``Token.toggleCombatants``Token#toggleCombat``PrimaryCanvasGroup``Interface``Token#toggleVisibility``hidden``TokenDocument`
### Dice and Cards

- Concluded the deprecation of synchronous roll evaluation where Roll#evaluate is now required to be async. Added a Roll#evaluateSync option which can be intentionally used for specific use cases. (9774)

`Roll#evaluate``Roll#evaluateSync`
## New Features


### Architecture and Infrastructure

- Updated a number of dependencies. (10441)


### Applications and User Interface

- Added a toggle which allows displaying Gamemaster users when configuring Document ownership. (10277)
- Removed the Shift behavior from the Ruler. (10328)
- Removed the drag distance threshold from Ruler#_onMouseMove. (10337)
- Added a new toggle tool for Drawings, Toggle Information, which places all newly created Drawings in the interface layer and sets them to be visible to all. (10413)
- TokenHUD elements are now aligned to the top for large creatures. (10420)

`Ruler``Ruler#_onMouseMove`
### The Game Canvas

- A custom Filter is now used instead of a custom BaseSamplerShader to apply condition effects on Tokens. (10295)
- Unlimited sight and detection mode ranges are now allowed. (10320)
- Moved CanvasVisibility to its own group. (10333)
- Separated collections between light source and negative sources. Incorporated the edges of negative sources into the computation of vision and light polygons. (10435)
- Light sources within negative sources and "blind" vision sources are now suppressed without disabling them. (10436)

`Filter``BaseSamplerShader``CanvasVisibility`
### Package Development

- Restricted the template.json to Actor, Card, Cards, Item, and JournalEntryPages. (10424)

`template.json``Actor``Card``Cards``Item``JournalEntryPage`
### Other Changes

- Began gradually moving code into client-side ESModules. AudioHelper has been moved to foundry.audio.AudioHelper, ClientDatabaseBackend has been moved to foundry.data.Client.DatabaseBackend, and Sound has been moved to foundry.audio.Sound. (2230)
- Removed redundant log prefixes from the server logs. (10365)

`AudioHelper``foundry.audio.AudioHelper``ClientDatabaseBackend``foundry.data.Client.DatabaseBackend``Sound``foundry.audio.Sound`
## API Improvements


### Documents and Data

- Added support for optional indexing for embedded Documents within Compendium Packs, allowing a limited set of fields for embedded Documents to be known to the client. (8773)
- Introduced the DataField#toInput and DataField#toFormGroup methods which allow a field in a data schema to be rendered as an HTMLElement. (10306)
- Added support to DocumentUUIDField to specify a certain Document type and whether that Document is allowed to be embedded or not. (10316)
- Introduced a new SceneManager API which allows for specific scenes to be assigned a manager class which automatically integrates with various Scene workflows and life-cycle events. (10377)
- Database operation events are now forwarded to the system type data model. (10410)
- ArrayField#_cast now supports Set as an input value type which is converted to an array. (10418)
- Added JavaScriptField as a subclass of StringField. (10425)
- Added ActiveEffect.fromStatusEffect which creates an ActiveEffect instance given the status effect ID. (10429)
- Deprecated StatusEffectConfig#label and StatusEffectConfig#icon in favor of StatusEffectConfig#name and StatusEffectConfig#img. (10430)
- Added support for status effects with static _id and implicit statuses. (10431)
- Added initial Region and RegionBehavior support. (10440)

`DataField#toInput``DataField#toFormGroup``DocumentUUIDField``SceneManager``ArrayField#_cast``JavaScriptField``StringField``ActiveEffect.fromStatusEffect``ActiveEffect``StatusEffectConfig#label``StatusEffectConfig#icon``StatusEffectConfig#name``StatusEffectConfig#img``_id``statuses``Region``RegionBehavior`
### Applications and User Interface

- As part of Application V2 Application render hooks now always contain the full HTML of the rendered window application in the element of that instance. (3088)
- Redesigned the Application V2 header buttons to collapse to a submenu in cases where the window is too narrow to display all of the buttons. (3273)
- Added support for a variety of Application V2 hooks including _preRender, _preFirstRender, _onRender, _onFirstRender, _prePosition, and _onPosition. (3998)
- When a minimized ApplicationV2 instance is re-rendered passing {force: true} it is now automatically maximized upon render. (6951)
- Improved the getTemplate method to eliminate the redundant _templateCache in favor of the built-in Handlebars.partials cache. (9943)
- ContextMenuEntrys may now specify an optional, space-delimited classes property that will be appended to the generated context menu entry markup. (10217)
- Added extensive improvements to new custom HTMLElement definitions including AbstractFormInputElement, HTMLMultiSelectElement, and HTMLMultiCheckboxElement. (10313)
- Introduced a new HTMLDocumentTagsElement which can be rendered as <document-tags> as a built-in method for referencing a number of Documents by their UUID. (10315)
- Implement BasePlaceableHUD#_parseAttributeInput which allows for defining custom logic for how a string input is processed into a change to attribute values. (10342)
- Added HTMLStringTagsElement which is a custom form input for providing a free-form set of string tags. (10367)
- The triggering event for a ContextMenu#render and ContextMenu#_setPosition are now passed to allow for positioning based on the mouse cursor. (10376)

`element``_preRender``_preFirstRender``_onRender``_onFirstRender``_prePosition``_onPosition``{force: true}``getTemplate``_templateCache``Handlebars.partials``ContextMenuEntry``classes``HTMLDocumentTagsElement``<document-tags>``BasePlaceableHUD#_parseAttributeInput``HTMLStringTagsElement``ContextMenu#render``ContextMenu#_setPosition`
### The Game Canvas

- Added the Light Perception detection mode. Basic Sight no longer handles light perception, only darkvision. (8470)
- Added new Token conditions like Flying, Hovering, and Burrowing to allow better interactions with detection modes and other system mechanics. These are available under CONFIG.specialStatusEffects. (8783)
- Added new options to Primary Canvas Objects for blocking light and blocking weather. (10106)
- Added PrimaryBaseSamplerShader as the shader class for PrimarySpriteMesh. (10260)
- CanvasAnimation easing functions can now end at a final value other than 1. (10364)
- All refresh methods of PlaceableObject classes are now protected instead of private. (10398)
- Added TokenLayer#occlusionMode, which determines the set of tokens that trigger occlusion. (10414)
- Added RulerMeasurementSegment#animation which are animation options passed to the Token update. (10416)
- Various improvements to the Token animation API (Token#animate) have been made. (10427)

`Light Perception``Basic Sight``Flying``Hovering``Burrowing``CONFIG.specialStatusEffects``PrimaryBaseSamplerShader``PrimarySpriteMesh``CanvasAnimation``PlaceableObject``TokenLayer#occlusionMode``RulerMeasurementSegment#animation``Token#animate`
### Dice and Cards

- Added a helper function for externally fulfilled rolls with a configuration option for non-interactive fulfillment methods. (9090)
- Absorbed and incorporated the functionality of the Unfulfilled Rolls module to provide a core solution for managed and delegated evaluation of dice rolls using external inputs. (9775)
- Moved the Roll API into ESModules. (10434)


### Other Changes

- Hardened the behavior of foundry.utils.setProperty for writing data to arrays by index. (4418)
- The drop event is now passed through to Actor._dropItemCreate. (8872)
- Improved foundry.utils.parseUuid as a first-class helper with a corresponding API. (10322)

`foundry.utils.setProperty``Actor._dropItemCreate``foundry.utils.parseUuid`
## Bug Fixes


### Architecture and Infrastructure

- Replaced the yauzl-promise library with unzipper which resolves issues with launching the Linux version in Windows. (10288)

`yauzl-promise``unzipper`
### Documents and Data

- The FolderData#description is now an HTMLField. (10032)
- Pressing the Enter key from a Macro launched from chat no longer propagates the key press to the dialog. (10276)
- A custom model with a nullable ArrayField no longer throws a TypeError when toObject is called. (10299)
- Scope variables passed to a Macro via a chat command can now contain spaces as long as they are not equals (=) separated. (10303)
- Improved validation of the DocumentOwnershipField to allow removing the ownership assignment for a user, falling back to the default value. (10330)
- System or Module-declared fields that require sanitization are no longer missed when embedded records are created or modified as part of a parent document workflow. (10352)
- Fixed propagation of options.source in EmbeddedDataField#clean, EmbeddedDataField#validate, TypeDataField#clean, and TypeDataField#validate. (10442)

`FolderData#description``HTMLField``ArrayField``TypeError``toObject``DocumentOwnershipField``options.source``EmbeddedDataField#clean``EmbeddedDataField#validate``TypeDataField#clean``TypeDataField#validate`
### Applications and User Interface

- Application V2 now handles positioning after the post-render hooks so that additional HTML injected via hook is accounted for in the positioning logic. (7461)
- Passing both dimension and position changes to Application#setPosition no longer results in an unexpected final position in Application V2. (8627)
- Updates to a TokenDocument's displayName or displayBars visibility setting are now immediately applied. (10269)
- SceneNavigation now properly re-renders when navigation attributes of Scenes are updated. (10270)
- Fixed V1 Applications always being assigned an appId of 1. (10291)
- Applications which experience an error when rendering no longer acknowledge subsequent render(false) calls as a re-render request. (10354)
- Ensured that login form submission can proceed even if neither of the user or password input fields have been focused. (10412)

`Application#setPosition``displayName``displayBars``SceneNavigation``appId``render(false)`
### The Game Canvas

- An invalid Token tint no longer causes a Scene to fail loading. (10302)
- Fixed an issue where a Drawing's position update was ignored when the width or height was also changed in the configuration window. (10325)


### Dice and Cards

- Card#prepareDerivedData no longer fails if the Card doesn't have a source. (10380)

`Card#prepareDerivedData`
### Other Changes

- Ensured that foundry.utils.deepClone retains the strict parameter when recursively cloning inner objects. (10287)
- The deprecation warning for accessing ChatMessage.data.* no longer incorrectly states that the ChatMessage.data object has been replaced with ChatMessage.system. (10290)
- PIXI.Rectangle.prototype.segmentIntersections now returns t0 for the {a, b} segment being tested. (10336)
- Updated non-namespaced util method references in the JoinGameForm setup view. (10341)
- Improved utility methods hasProperty and getProperty to correctly account for object paths which may explicitly exist in the target without relying on a dot-separate path. (10359)
- Users who are banned from the world with role NONE now automatically fail permission tests over a Document regardless of its ownership. (10362)
- CompendiumFolderCollection#updateAll no longer throws an error if an explicit pack is not passed. (10406)

`foundry.utils.deepClone``strict``ChatMessage.data.*``ChatMessage.data``ChatMessage.system``PIXI.Rectangle.prototype.segmentIntersections``t0``{a, b}``util``JoinGameForm``hasProperty``getProperty``NONE``CompendiumFolderCollection#updateAll`
## Documentation Improvements


### Dice and Cards

- Improved the documentation of Actor#getRollData and Item#getRollData to warn downstream implementations to be cautious about mutation. (10392)

`Actor#getRollData``Item#getRollData`
### Other Changes

- Fixed a minor typo in slide 13/13 of "The Sidebar" tour. (10386)

