# Release 0.4.0 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/4.55

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.4.0


## Version 4 Prototype


##### November 15, 2019


## Beta 0.4.0 Update Notes

Greetings wonderful supporters and friends. Today marks a significant milestone for Foundry Virtual Tabletop as the
software moves into the 0.4.x version on the path towards release. This is a major update version which evolves
the software in some very significant ways. In addition to the update notes, there are some critical changes to
the installation and usage of the software which are detailed in the post containing the download links for the
software. Please be sure to read those notes carefully as well.

This update is a generational step investing in the underlying infrastructure of the software. As a consequence of
that, most of the big new features in 0.4.0 deal with underlying features, networking, application structure, and
data structure. This results in relatively fewer big client-side changes this time around, but I want to make sure
everyone understands how the technical investments made in the 0.4.0 launch are critical to empower further growth
for the platform.

The biggest gameplay-altering feature in the 0.4.0 update is a major update to the D&D5E system which
almost completely overhauls and expands the system data model to empower more robust data stored on every actor and
item as well as an entirely new interface and design for Actor and Item sheets. In addition to 5e improvements, the
Simple Worldbuilding system has been redesigned to offer more flexibility as a system agnostic
toolkit which is compatible with the 0.4.x release.

Thank you all for appreciating my work, providing thoughtful feedback, and for your patience during this update cycle
which I realize is more disruptive than usual.


### New Features

- New more strict version control limitations exist on game systems and add-on modules. These packages should
	define a minimum core version in their manifest file which, if a module or system becomes too out of date to be
	compatible with the core software, it will be automatically disabled. Worlds which depend on a system which has
	become disabled or is otherwise unavailable will not be able to be loaded until a system update is applied. I
	will be adding a mechanism in an upcoming update to allow users to manually override this restriction and opt-in
	to continue using outdated modules at their own risk.
- In order to comply with application code signing requirements (code signing is not yet implemented, but
	eventually will be) user data must be moved outside of the application installation directory itself. In many ways
	this is a downgrade for user experience, where it was highly convenient to have all of the VTT data in a single
	place inside the application public folder. The initial solution in 0.4.0 is to use the recommended/authorized
	location for user application data in your operating system. For Windows this location is
	%localappdata%/FoundryVTT, for	MacOS ~/Library/Application Support/FoundryVTT, and for
	Linux ~/.local/share/FoundryVTT. I realize these locations may not be ideal for many of you,
	especially given the need to store a large amount of image, audio, and video content for use inside the VTT. I will
	be actively working on a way to make this location customizable as part of the next update.
- Due to the new separation between bundled public assets and custom user data, the File Picker interface has
	also evolved to feature tabs at the top for switching between different source data locations. Currently you can
	switch between User and Public, with an extra placeholder tab for S3 data - an upcoming feature that will be
	added in a future update.
- Added an optional game setting to disable the auto-pan to a speaking token through the chat bubbles system.
- Added support for each User entity to have an image avatar. This avatar is not widely used within the VTT yet
	but will be more broadly utilized for other upcoming features. The User avatar is configured in the player config
	application.
- Improved upon the light source tinting addition in 0.3.9 by moving that layer beneath fog of war and causing it
	to more proactively update in the face of other changes to the scene (like walls and doors).
- Added a new optional server configuration to assist with users with a reverse proxy or DNS name associated with
	their VTT instance. Setting the hostname field in the options.json file will allow any
	external links to the VTT to be generated using the correct hostname instead of the public IP address.
- Added a new optional server configuration to allow for serving the VTT from a non-root path within the host.
	Setting the "routePrefix" option to some string value in the options.json file will cause that prefix
	to be used. For example, setting the route prefix to "demo" would cause the application to be served from
	your.ip.address:30000/demo/game.
- The join screen has been refactored to involve more aspects of a client-side app instead of a static template
	rendered by the server. This allows for some dynamic interactions with the join experience like success or error
	notifications for login attempts or other helpful prompts.

`%localappdata%/FoundryVTT``~/Library/Application Support/FoundryVTT``~/.local/share/FoundryVTT``hostname``options.json``"routePrefix"`
### Core Bug Fixes

- Resolved a security loophole which could allow users to upload and browse files outside of the allowed public
	(and now user data) locations by abusing relative path traversal syntax.
- Fixed a bug which caused players to see a blank image for for a journal entry if no image was set instead of
	the text view when text content was present.
- The Actor sheet tried to be helpful by automatically setting image artwork for an Actor's prototype token using
	the actor profile image if no token artwork was set. This failed, however, when both the profile image and the
	token image were updated (to different values) in the same API call.
- Fixed a bug which prevented whispered messages from being visible to the original sender.
- Allow for raw data:// to be a valid URL scheme which was previously stripped during server-side
	HTML sanitization.
- Fixed a very problematic bug which allowed a Folder to become referenced as it's own parent, creating an
	infinite recursion during sidebar rendering.
- An error caused old token actorData overrides created when a Token was not linked to its parent
	actor to continue to be applied even once the Token data was linked.
- Addressed a problem which caused the area of effect for created light sources to be displayed to players
	instead of just the creating GM user.
- Changes to expectations around provided SSL certificate paths caused users who were previously providing an
	absolute path to their certificate to no longer detect SSL mode. Absolute paths are now supported in addition
	to relative paths. Note, however - that a bug related to this still made it into the 0.4.0 build, so a portion of
	this fix suffered from regression with the new user data location changes.
- Modifying walls (including opening and closing doors) did not correctly cause the visible light from a color-
	tinted light source to update it's displayed polygon. Now wall changes will correctly trigger refreshes to dynamic
	light source FOV polygons.
- Fixed a problem in the server side socket handling workflow which could result in failed server-side socket
	handlers broadcasting their error messages to all users, not just the user which triggered the failed request.
- Corrected problems with Playlist updating when the playing field of the parent playlist data model is altered.
	This relates to an issue with the playlist.stopAll API which was not correctly terminating playback
	for all tracks within the stopped playlist.
- Fixed some edge case issues with certain very large token limited visibility angles which caused the resulting
	points of the LOS polygon to not be properly sorted by origin angle.
- Fixed a defect which prevented player-level users from being able to interact with the Combat Tracker to
	add or modify initiative rolls.
- Corrected a problem with new User creation which could fail to refresh the visual display of the Players
	Configuration application unless the client was refreshed.
- Added an (intended) restriction to the set of Entity types which can be referenced in a RollTable to the same
	set which can be also added to a Compendium pack.
- Prevent executing a roll for a RollTable which contains no possible results.
- Fixed an issue RollTable results resetting their content to empty or default values when a select dropdown
	for the result type was changed.
- Fixed defective CSS rules for the updated combat tracker which resulted in large artwork for each combatant.
- Addressed a problem which caused the update notes to not properly display when using the built-in updater.
- Fixed a CSS rule which was preventing highlighting of text data in chat messages. This now allows the content
	of chat messages to be selected for purposes like copy+paste.

`data://``actorData``playlist.stopAll`
### Core Software, APIs, and Module Development

- [FUTURE BREAKING] There have been major changes to the schema for template.json files included with game systems
	which define the data structure for the Actor and Item data model within those systems. Systems which are using the
	old template structure will continue to function, but the new template schema is strongly recommended and can be
	enabled by setting "templateVersion": 2 in your system.json manifest. By version 0.5.x all templates
	will be assumed to be "version 2" and support for v1 templates will be removed. Read the following issue for
	much more detail and example template structure: https://gitlab.com/foundrynet/foundryvtt/issues/1614. You may
	also refer to the updated D&D5E and Simple Worldbuilding systems which implement the v2 template specification.
- [BREAKING] Modules and systems which have not been manually updated for compatibility with 0.4.0 will not be
	flagged as outdated and not able to be used until they are updated. The only thing you MUST do is to add
	minimumCoreVersion as 0.4.0 to your module.json for the system to recognize it as updated.
- [BREAKING] The template loader will now load HTML template paths from the user data location if their path is prefixed
	with the key words of "system", "module", or "world". Otherwise templates will be loaded from the core templates
	location. A consequence of this for module developers which were previously providing HTML template paths beginning
	with "public/systems/..." or "public/modules/..." should remove the "public/" component from the path for their
	template locations to continue working.
- [BREAKING] Concluded deprecation of the old global namespace constant variables. Now all shared client/server
	constants must be referenced from the CONST object. For example CONST.ENTITY_TYPES rather
	than just ENTITY_TYPES.
- [BREAKING] As part of improvements to the permission system, User.permission has been refactored to
	User.role. This is helpful because it is more semantically consistent with the purpose for this field
	and it differentiates its usage from Entity.permission which is used on other entity types for
	a different purpose. References to user.permission should be updated to target user.role instead.
- ES6 style code modules are now directly supported! Instead of specifying scripts: [] in your
	module and system manifests you may specify esmodules: [] which provides a set of paths to ES6 module
	entry points. See https://exploringjs.com/es6/ch_modules.html for more information about ES6 modules and see the
	new D&D5E system for a working example of an entire game system which is built as an ES6 module instead of as a
	single JavaScript file.
- Added a new flag for debugging Hook functions. Setting CONFIG.debug.hooks = true will display
	logging information for every hook which is called with the arguments passed to any hooked functions.
- Server side user authentication and cookie management functions have been refactored out as a separate module
	for better code maintainability.
- Removed usage of session-based storage in favor of the simpler cookie-based approach. Session storage was
	used pretty poorly by the software, and had a bad match rate of connecting client cookies with pre-existing
	sessions, furthermore it became challenging to anchor the same session information for both the HTTP request in
	Express and the Socket.io request. I have simplified the system in several ways by removing session storage, by
	passing the user's cookie to the socket initialization, and by linking identity for both socket and HTTP requests.
	This new approach can upgrade gracefully to add back a persisted session storage in the future if it is deemed to
	be value adding.
- Added a server-side socket handler and client side method which allows users to request a full data migration
	of a Compendium Pack to the latest system data model. This tool can be valuable for module developers or users who
	fear their compendium data has become broken in some way. For a given compendium pack, the client side API is
	pack.migrate(options) which causes the server to update all entities in the compendium, ensuring
	their data model is accurate.
- The parsed and structured system data model is now passed to the client for reference so that modules and
	systems can use it client-side to make data adjustments or create new entities. See game.system.model
	to inspect the data structure.
- Electron has been updated to new major version 7.0.0 incorporating node.js updates and several new features.
- The widely used mergeObject utility method has been improved to support a means for removing
	keys from the target object during the merge process. This involves a special syntax like the following:
	mergeObject({a: 1, b: 2}, {"-=a": null}); which will result in an object where the key "a" has been
	removed. See https://gitlab.com/foundrynet/foundryvtt/issues/1625 for more details.
- The mergeObject function also supports a new optional argument enforceTypes which
	is a boolean which allows the data type of the original object to be changed (if false) or raises an error if the
	data type would be changed (if true).
- A new Entity.unsetFlag(scope, key) method has been provided to delete a custom flag that was
	added to the data model. Previously flags could be added and updated, but not deleted, forcing users to set old
	or unused flags to some other value like null.
- For children of the FormApplication interface, unfocus events on checkbox type input fields will no longer
	trigger a form submission.
- Added a new setup hook which fires in-between init and ready events
	during the VTT initialization process.
- [BREAKING] The arguments provided to the renderChatMessage hook was inconsistent with the args
	provided to other render hooks. The signature has been updated to (app, html, data) as with other
	render hooks.
- [BREAKING] Concluded work to deprecate the old object-style input for ContextMenu instances. Any ContextMenu
	instances still using the Object style input will no longer function and must migrate immediately to use an Array
	as the input type of menu options.
- Add some extra checks to prevent folders which are already at the maximum folder depth from being seen as
	valid drop targets.

`template.json``"templateVersion": 2``CONST``CONST.ENTITY_TYPES``ENTITY_TYPES``User.permission``User.role``Entity.permission``scripts: []``esmodules: []``CONFIG.debug.hooks = true``pack.migrate(options)``game.system.model``mergeObject``mergeObject({a: 1, b: 2}, {"-=a": null});``mergeObject``enforceTypes``Entity.unsetFlag(scope, key)``setup``init``ready``renderChatMessage``(app, html, data)`
### D&D5e System Improvements

- The 5e system has been almost totally redesigned in order to feature a new structure as an ES6 module, a new
	data template which uses the new core template features. An expanded and modified Actor and Item data model to
	incorporate much more information in a more direct format, and many other new features.
- The above changes involved significant alterations to the D&D5e data model. Please consult the compiled
	model structure in game.system.model to see the new schema which should be used for D&D5e Actors and
	Items. Furthermore, please inspect the included migrations module in the D&D5E repo and available as within the
	API as game.dnd5e.migrations for a variety of helpful functions which help to migrate existing
	Entities and illustrate the changes which occured to the data. For module developers working in the D&D space, I
	strongly encourage you to connect with me on Discord for any help you need in updating to this latest data
	specification.
- Many fields in the data model which were previously used are now deprecated and will be removed by Foundry VTT
	version 0.5.x. These fields are retained in the data model for now, but flagged with a _deprecated key.
- The character and item sheets have been fully redesigned for a more professional aesthetic with a cleaner
	and more powerful structure.
- Many monsters from CR1 to CR9 have been incorporated into the Monsters SRD compendium pack.
- A new round of Token artwork courtesy of Stryxin from Forgotten Adventures and creature biographies courtesy
	of Penelope (Vyrnali) are available for low-CR creatures.
- Core concepts of the 5e system like action type, target type, distance units, activation costs, currency
	denominations and much much more are now persisted as enumeration objects within the CONFIG.DND5E
	namespace.
- The inventory, spellbook, and features tabs for Actor and NPC sheets now have a helpful set of filters which
	allow you to restrict visibility of the item list to items which have a certain activation cost or usage
	condition.
- Separate spellbook sections for Innate Spellcasting, Always Available spells, and Pact Magic has been added
	which no longer uses the same set of spell slots as the spell would if it were prepared normally. This is
	configured through the "Spell Preparation Mode" field in the Spell Details tab.
- Weapon damage rolls are no longer assumed to benefit from the ability score modifier of their designated
	ability. While this is usually the case there are many scenarios where this modifier is not granted, therefore the
	default is that the modifier is excluded from the damage roll unless included with either the a direct attribute
	reference like @abilities.str.mod or the shorthand @mod tag.
- Changing an Actor size on the traits tab will automatically adjust the dimensions of their prototype token
	according to the stated size rules. To set Token base dimensions differently, edit the Actor sheet first then go
	update the Token size to some non-standard dimension.
- String labels for elements of the data model have been moved outside the data template which is stored on
	every actor and maintained as system level metadata which is either statically or dynamically computed for HTML
	rendering.
- All items which can deal damage now support multiple damage types with separate fields for components of
	the damage formula. Each component of the damage formula may have a different damage type assigned to it.
- Redesigned the use of the versatile damage modifier. The versatile field defines an alternative formula which
	will replace the first component of the damage formula if the item is used in a versatile way. This level of
	generalization works well for both versatile weapons as well as for spells like Toll the Dead which deal a
	different amount of damage in certain situations.
- Added an "other formula" field to all activated items which can specify any arbitrary dice formula that can be
	rolled in addition to attack and damage rolls. This can be useful for additional damage like poison, for ancillary
	skill checks or saving throws, or for random results which apply to the effect like for prismatic spray.
- Weapon properties have been migrated from a free-form string to a structured list of boolean flags.
- Spell components have been migrated from a free-form string to a structured list of boolean flags.
- Ability activation cost has been changed from a free form string to a 3 part form featuring a cost type and
	a numeric activation cost value.
- Spell or Feat effect duration has been changed from a free-form string to a structured field with 2 values; a
	numeric duration value and a designation of duration units.
- Effect targets have been changed from a free-form string field to a structured object containing a numeric
	value, a designation of units, and a target type.
- Ability range has been changed from a free-form text field to a structured object with a numeric value and
	designation of distance units.
- Added support for all physical items to provide a boolean flag for whether or not they are identified as well
	as a separate text description to be shown in the event the item is not yet identified. This unidentified text
	is not yet used, but will be adopted in an upcoming version.
- Added support for spell upcasting and cantrip damage scaling. Cantrip damage scaling is already supported
	with automatic scaling based on character level or NPC spellcasting level (or CR). Spell upcasting is supported
	now in the data model, with future UI work to allow for automation and selection of the spell level at which to
	cast a spell.
- Spell saving throws can now accept an explicit spell DC which would override the default formula based on
	the caster's spellcasting modifier and proficiency score.
- Armor type items may now track the maximum dexterity modifier which can be granted by the piece of equipment.
- Added a new equipment type "trinket" which can be used for items which are equipped and attuned but worn like
	jewelry rather than used strictly as consumables.
- Localization support has been added for a great many strings used in the D&D5E system. This effort is not
	complete, but this update goes a long way towards supporting translation for D&D5E into other languages. Please
	see the file lang/en.json in the D&D5E repo for English string keys and translations. Follow the same
	procedure used by the core software for translating these strings for support in other languages.
- Added an optional attribute for spellcasting level for NPCs so that different NPC creatures can have a
	specific spellcaster level assigned which may differ from their challenge rating.
- Expand the actor data model to support an optional additive bonus for each skill which, in combination with
	the multiplicative bonus to proficiency will determine the total skill modifier.
- Added a convenient conversion button to the currency display on Actor Sheets which will upwards convert
	all carried currency to the maximum allowed denomination using standard currency conversion rules. Electrum counts
	as 5 silver each (2 per gold). I don't care about your edge cases.
- Limited item uses are now supported for every item type which can be activated. Different limited usage modes
	are available ranging from per short rest, per long rest, per day, and charge based. Additionally, items can be
	restricted in use based on a recharge r6 roll which is tracked and automated on the character sheet.
- Trait selector UI now supports a string separator character of a semi-colon (;) which will break a custom trait
	string to be displayed as multiple tags.
- Added explicit tracking for armor, weapon, and tool proficiencies in the Traits section of the character
	sheet.
- When adding spells to NPC sheets, those spells are assumed to be initially prepared by default. When adding
	weapons and armor to NPC sheets, those items are assumed to be equipped and the actor is assumed to be proficient
	in their usage by default.
- Added an explicit software license (GPLv3) and content license (OGL) files to the D&D5E repository.
- Fixed a bug which casued critical success and failure highlighting to be revealed for blind dice rolls.
- The "Backpack" type item has been renamed to "Loot" to better reflect its intended usage.

`game.system.model``game.dnd5e.migrations``CONFIG.DND5E``@abilities.str.mod``@mod``lang/en.json`
### Simple Worldbuilding System Improvements

- Fully redesigned the Simple Worldbuilding system to use the new 0.4.0 data template and ES6 module structure.
- The Simple Worldbuilding system has been split out from the core software as a free-standing open source repo
	which is open for both community contribution as well as to serve as a helpful boilerplate example for new
	system developers who are looking for a simple existing template to follow. You can find the worldbuilding system
	repository here: https://gitlab.com/foundrynet/worldbuilding.
- Actors and Items in the Simple Worldbuilding system can now both support free form key/value attributes which
	can be flexibly added to their data model. Each attribute can have a data type and label assigned with String,
	Number, and Boolean (as a checkbox) fields supported.

