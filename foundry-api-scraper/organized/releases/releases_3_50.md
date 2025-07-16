# Release 0.3.5 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.50

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.5


## Version 3 Development


##### August 19, 2019


## Beta 0.3.5 Update Notes

Hello tabletop friends! Foundry Virtual Tabletop update 0.3.5 is here with a fresh round of feature enhancements, bug fixes, and underlying software and API improvements. The centerpiece of this update is a major new system for Foundry Virtual Tabletop with the addition of Drawing Tools which allow for improvised freehand sketching or shapes which can be highly customized with line, fill, and text styles. Additionally, this update adds improvements to the Item Sheet API, and new features for the Combat Tracker, Measured Templates, as well as a host of bug fixes and minor improvements.

`0.3.5`Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. Stay tuned in the next couple days for an additional post sharing some reflection on the past year and plans for the official product release. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- The addition of Drawing Tools is a major milestone for Foundry Virtual Tabletop, as this was one of the few outstanding systems that is critical to support for a modern VTT. I would like to thank all the testers and community members who have been exceptionally patient with me while I reluctantly dragged my heels on tackling this major feature. I would also especially like to thank KaKaRoTo who did some extremely useful prototyping and was a helpful collaborator while I worked through the implementation of this system. Please thank him if you see him in Discord and be sure to support his other exciting FVTT related projects.
- Drawing Tools are a new layer of the game canvas, positioned above the Background and Tiles, but just below the Grid and other placeable objects. Four types of drawings are supported: rectangle, ellipse, polygon, and freehand. Each drawing can be created, transformed, and independently configured. Drawing data is vectorized for efficient storage and flexibility.
- Added a Drawing configuration sheet to fine-tune the properties of your drawings - customize the line art, fill color or texture, and overlay text for each drawing. Additionally, clicking the gear icon in the scene controls allows you to customize the default drawing setup for any future artwork.
- Added a Drawing HUD activated via right-click on a placed drawing which can control the visibility and locked state of the drawing as well as adjust its z-index sorting. More on this in the following point.
- Added support for z-index sorting of Drawings and Tiles. This allows you to customize which objects are rendered above or below others to control layering when using many tiles or drawings. Shifting the z-index of a Drawing or Tile is available through it's HUD controls activated on right-click.
- Updated the core software to PIXI version 5. This is a major release with some very significant long run benefits for the project. I'm really excited about this update as it unlocks the potential of WebGL2 that will be applied in more places, providing continued performance improvements as well as substantially added flexibility for Graphics geometry - which is already taken advantage of within the new Drawing tools. For those of you whom are interested in the underlying technology, you can read more about the new PIXI major version here: https://medium.com/goodboy-digital/pixijs-v5-lands-5e112d84e510
- Migrated the core software to upgrade to the TinyMCE 5.x editor which includes several bug fixes and a more streamlined UI.
- Migrated the application nativization layer to Electron 6.0. This is an optional update that will eventually roll out to all users but is available immediately for anyone who downloads a fresh version of FVTT. The Electron application is not updated through the internal auto-updater, so if you want to get the latest Electron build of the Foundry Virtual Tabletop app, you can consider re-downloading a new full version. There are no meaningful benefits at this time aside from general modernization.
- Item Sheets can now be configured on a per-type and per-entity basis the same way that Actor sheets can be configured and overridden. This allows for modules to define custom Item sheets which only are used for a specific Item type (like a Spell, or a Weapon) while individual items can change the sheet type used for that particular item. I am excited to see how this new level of flexibility for displaying Item sheets generates a new wave of creations and ideas from the modding community.
- Improved the UX around token dragging for tokens larger than 1x1 base. Previously some visually inconsistent results could occur where the preview "shadow" token and the true final position of the Token once dropped were inconsistent.
- Whisper message targets are now regex matched in a case-insensitive way with added support for special unicode or foreign characters allowing for more broad and consistent coverage of private chat messages.
- Added a Combat Tracker configuration option to automatically skip defeated combatants in the turn order. This option can be turned on by clicking the gear icon at the top of the tracker. Defeated combatants will only be skipped when moving forward in the turn order, you can still go backwards to return to a skipped combatant.
- Added internationalization string translations for Scene Controls and Tools.
- Holding the ALT key while pasting (CTRL+V) copied Tokens will result in those Tokens being created in an initially hidden state the same way that holding ALT during a drag+drop Token creation creates a hidden token.
- Added a distance tooltip text to Measured Templates which clearly states the distance of effect for the placed template both during the creation process as well as whenever you switch back to the Measured Templates layer in the Scene Controls.
- The vertical scrolling position of all Sidebar containers are now remembered, so that when a sidebar is re-rendered your previous scrolling position will be automatically restored, creating a more smooth user experience.


### Core Bug Fixes

- Fixed a somewhat rare but serious edge case failure with Token vision and wall collision which could occasionally allow tokens to see or move through walls when those walls perfectly bisected the diagonal of a grid square and the Token was approaching that bisecting wall from a particular direction of movement.
- Resolved a significant problem with movement of non-player tokens which would result in the visibility state of the token not being updated when it moved into or out of field-of-view for the player token.
- Fixed a bug with socket listeners for world Setting changes which were incorrectly double-parsing JSON content of the settings and potentially triggering errors in some situations.
- Fixed a rendering problem with MeasuredTemplate objects which would cause the grid highlighting to often become completely wrong when the template was re-painted.
- Corrected a bug which could sometimes incorrectly require the use of brackets around names for whispered chat messages even if the target name was a single recipient without any spaces in their user or character name.
- The user-provided update key is now trimmed of leading or trailing white space to avoid a common pitfall that several users have encountered while updating to a new version.
- Special characters are now supported in dynamic entity links, allowing for more reliable linking of content - especially in foreign languages.
- Improved some failure modes around wildcard patterns for random token artwork. Note that while some failure modes were addressed, there is still a known failure which arises for Windows users when the wildcard path contains bracket characters. This is due to a bug in an upstream parsing package for which there is no current workaround. I strongly recommend avoiding brackets in file paths for VTT content as they are not web-compliant and will be a likely source of trouble.
- Fixed a bug which could prevent module registered settings from being properly configurable within the Configure Settings menu.
- Corrected some errors for the Microsoft Edge browser resulting from implicit catch blocks which are not supported by the Edge spec.
- A bug when unlocking or locking doors could incorrectly cause the wall highlight to be shown temporarily. This no longer occurs.
- Prevented a failure mode through which dice rolls for Tokens without a valid referenced Actor would fail rather than evaluating against an empty data object.
- Corrected a problem with the Roll.alter() method which was not properly altering the contents of a Roll object because of changes to the initialiation process for Rolls.
- Fixed a problem which could lead to the loss of content from a TinyMCE editor when the user followed a certain workflow that resulted in the app re-rendering during the midst of saving edits.
- Prevented a failure when copying Items from a synthetic Token sheet that prevented those items from being appropriately named in their transferred data.
- Refactored the Entity Sheet registration process to generalize across any arbitrary number of Entity types. These improvements were in support of the configurable Item Sheet changes referenced above.

`Roll.alter()`
### Core Software, APIs, and Module Development

- Breaking Change: Support for glob-style inclusion of static scripts and styles in modules and systems has been deprecated, effective immediately. I apologize to any community developers who are impacted by this change, however the number of potential edge cases that users can experience from inconsistent glob pattern parsing for different root paths of Foundry Virtual Tabletop can make errors which occur as a result of glob parsing extremely difficult to reproduce or track down. Having seen some of these issues come up, I have decided it is better to rely upon explicit file paths for script and style inclusion rather than pattern matches. Please update your module.json or system.json files accordingly if you were previously using a glob-style pattern to include static content.
- Continued work to expand the coverage of server-side data validations when new data is written or updated in the database. These additional validation checks help to assert the data quality that is entered, avoiding potential future bugs. Several new checks have been added for core entity types as well as to many attributes for placeable objects which were previously optional and now are required and validated.
- Improved the logic used to initialize the game session when the window is first loaded to avoid possible race conditions between DOM initialization and JavaScript loading.
- The server-side System object has been refactored to improve it's usefulness and avoid needlessly exposing server-side file paths to clients when the System data is serialized for vending to the connected user.
- Added a boolean flag to each module in game.modules to denote whether or not that module is currently active in the World.
- Implemented a performance improvement to the rectangular select tool to enable it to reduce the number of object control or release operations required to only operate against the differential set instead of against all selected objects.
- Added support for a new "button" type scene control in addition to tools and toggles. Button type controls will fire their callback once clicked, but not become an active tool.

`module.json``system.json``game.modules`
### D&D5e System Improvements

- The complete set of CR 1/8 monsters supported under the OGL has been fully configured for use in the Monsters SRD compendium complete with beautiful Token artwork from Stryxin and Forgotten Adventures and custom creature biographies courtesy of Penelope (Vyrnali). Thank you both so much for your fantastic contributions to the D&D5e system!
- Fixed a bug with consumable Item sheets in the 5e system which prevented the maximum number of charges from being editable.
- Added a standalone Gulp script to the 5e codebase for building the JavaScript and CSS distributables.
- Newly created Items in the D&D5e system will have an empty string as their description instead of undefined.
- Fixed a pathing issue for D&D5e system compendium packs which was initially introduced (and later hotfixed) with the 0.3.4 release.

