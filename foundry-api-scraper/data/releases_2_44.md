# Release 0.2.9 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.44

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.9


## Version 2 Development


##### May 09, 2019


## Beta 0.2.9 Update Notes

Greetings friends and supporters! I'm really excited to share another Foundry Virtual Tabletop beta release 0.2.9. This update focuses on some key improvements to the Journal System by adding rich text options for secrets, linked entities, and image type entries. Furthermore, journal entries can now be added to a Scene in the form of Map Notes by dragging and dropping journal entries onto the canvas. This update also adds support for Animated Tokens and Tiles allowing you to use video assets as placeable objects in addition to Scene background images. Lastly, this update adds support for Alternative Actor Sheets which lets you customize which sheet style is used both at a world-level as well as on a per-Actor basis!

`0.2.9`I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- Added a new Canvas Layer for Map Notes which are placed by dragging Journal Entries from the sidebar onto the canvas. When creating a new map note you will be prompted to choose an icon from a (small for now, but larger in the future) set of icons that will represent your note. I'll be expanding this icon set in the future, so please provide feedback for good icon ideas that would have a lot of value to support. Players can see pinned map notes by toggling to the notes layer of the canvas. Notes will be visible on the Scene for any Journal Entries where the user has at least the LIMITED permission level. Double clicking on a map note will open the associated Journal Entry. Each map note has a text tooltip which corresponds to the title of the Journal Entry. Holding the ALT key will highlight and display all map note tooltips when viewing the Notes Layer.
- Added a new type of Journal Entry for a featured image. This type of journal entry is a great way to highlight concept art that shares with your player a illustrated view of a certain character, place, or item within your world. When viewing an image type journal entry, the artwork is featured in a lightbox-style pop out window which can be shown to your players the same way a text-based journal entry can be handed out.
- The rich text editor now supports the addition of Secret Blocks. To add a secret block, highlight a section of content and under the Formats menu select Custom -> Secret. Content marked a secret block will only be visible to users who have ownership permission for a certain Entity. For example, a detail from a character's personal biography could be marked as a secret and it would be only visible to that player and the Game Master. Likewise, the GM could inject secrets directly into the journal entries they show to players - only exposing the non-secret content.
- Rich text fields in sheets can now support dynamic entity linking - this works for Actor biographies, Item descriptions, Journal Entries, and more. Currently, entities of the Actor, Item, Scene, and JournalEntry types may be linked to. The syntax to link to a specific entity is as follows: @EntityType[Entity Name]. For example, to link to an Item entity whose name is "Sword of Doom", I would type @Item[Sword of Doom]. These entity links will be automagically converted to working links when the editor instance is saved. See the following issue for more examples: https://gitlab.com/foundrynet/foundryvtt/issues/668
- Added support for video files as Token artwork. The same file formats that are supported for Scene backgrounds will also work here: webm, mp4, mpeg, ogg, and more. See the featured video at the top of this post for an example of animated tokens in action!
- Added support for video files as Tiles. The scope of support for this feature mirrors that added for Tokens.
- Made the title of the Token Configuration sheet more clearly designate whether the user is editing a placed token (i.e. an instance) or the default token (i.e. the prototype) for an Actor. Moved the "Assign Token" button into the Token configuration sheet for an Actor. This has the advantage of simplifying the Actor header and keeping token configuration options more closely grouped.
- Added the ability to configure which type of Application is used to render the Sheet for each Actor type within a game system at the World level. This allows for multiple modules to define custom sheets that can be chosen between for each different Actor type. For example, you could use a certain sheet for the "NPC" type actor provided by Module A, while using a different sheet for "character" type actors provided by Module B. Furthermore, this choice can be overridden at the individual Actor level, allowing for support of Actor-specific sheet selections. My hope is that this can promote a new type of module development that could - for example - provide something like a "shopkeeper" style character sheet that could be assigned to certain specific NPCs in a game world.
- Previously, players could only open an Actor sheet by double clicking on a Token if they were the OWNER of that Actor. Now you can open an Actor sheet by double clicking a Token as long as you have at least LIMITED visibility permission to the Actor.
- Improved the handling of aspect ratios for Actor profile artwork to better allow for non-square artwork formats. The selected artwork will always be fully displayed even if it's aspect ratio is not 1:1.
- Newly created scenes will now begin with a default size of 3,000 square pixels until/unless a background image is selected or the dimensions are manually changed. This avoids a confusing failure mode for new users where certain canvas controls would not work properly because the Scene lacked a finite size. Assigning a background image to a scene will automatically change the width and height of the scene to match the native dimensions of the selected image or video file.
- Improve the FilePicker user experience to disable the ability to upload a new file to the server until a file which is currently in the progress of being uploaded has successfully completed. This helps to avoid a confusing user experience that could result in attempting to upload the same file multiple times.

`@EntityType[Entity Name]``@Item[Sword of Doom]`
### Core Bug Fixes

- Enforce a horizontal limit on the width of the Scene navigation bar to prevent it from underlapping the Sidebar as more Scenes are added to navigation.
- Fix an issue which led to soundboard style audio playlists simultaneously playing all their tracks immediately upon page load.
- Player-specific permissions on an Entity could be overridden by default-level permissions if the default was more permissive than the player-specific setting. This is no longer the case, a player-specific permission level will always override a default permission level.
- Previously, players were able to begin a copy+paste workflow for Tokens even though they lacked permission to actually complete that workflow. I have moved the permission check to an earlier point in the workflow to prevent non-GM users from being able to copy Token data in the first place.
- Improved a propagation issue with permission changes for Entities and their sheets which previously allowed an open Sheet to remain editable even if Actor permissions were changed in a way that revoked (or added) that permission. Now permission changes will propagate immediately to be reflected in the status of any associated sheets.
- Fixed an issue with Ambient Sound configuration which caused it to not properly assume the existing value of the sound type (local vs global).
- Fixed an incorrect behavior that could occur during Scene thumbnail generation with filenames which were not properly url encoded server-side before the thumbnail filename was generated.
- Improved the rendering of the updated Combat Tracker to show changes to active token effects immediately. These changes were previously only reflected in the combat tracker once the turn changed. Additionally improved the display of effects to avoid overflowing when more than 5 to 6 effects are currently applied to a single token.
- Corrected a failure of the Token hidden state toggle button from correctly showing the hidden status to a GM user if another GM-level user modified the toggle state.


### Core Software, APIs, and Module Development

- Reduced fragility in module.json files which could cause an initial load crash if keys for "styles", "scripts", or "packs" were not provided. Now those keys may be omitted and interpreted as an empty array by default.
- Rather than only supporting a single default actor sheet class, multiple sheets may now all be registered for use by players. To register a custom Actor Sheet use the Actors.registerSheet(scope, class, options) method. See the following ticket for example usage: https://gitlab.com/foundrynet/foundryvtt/issues/748. As a result of this change, no longer define the CONFIG.Actor.sheetClass configuration global.
- Improved the error handling workflow for server-side updates of EmbeddedEntities and PlaceableObjects. This means that database save failures due to invalid data in a Token, AmbientLight, or Tile (as examples) will propagate back to the requesting client and display an error message that will help identify failures and promote easier debugging.
- In the Scene entity data model, the attribute previously named notes has been renamed to description so that the notes attribute may be reused for the array of map notes which are pinned to the scene. A migration has been applied for existing Scenes to handle the renaming when an existing world is loaded for the first time.

`Actors.registerSheet(scope, class, options)``CONFIG.Actor.sheetClass``Scene``notes``description`
### D&D5e System Improvements

- Support multiple alternative Actor sheets for the Character and NPC actor types to allow for modules which define sheets to coexist in harmony.
- Add a new character sheet for users which have LIMITED permission to view a certain Actor. When viewing the limited sheet, the user will only see the Actor's artwork and non-secret biography. This can allow game-masters to let players have visibility into important NPCs in the world to help remember who they are or what they look like without exposing their attributes or abilities to the player.
- Support the addition of new "Secret Blocks" in Actor biographies and Item descriptions in the 5e system. Secrets in Item descriptions will only appear for the Item owner, but will not display when the Item is posted to the Chat Log as part of a dice roll.
- Resolved an issue with the new creature size dropdown menu which made the size text field in the header of a NPC sheet no longer required and redundant.
- Restored availability of "healing" as a valid damage type in the configuration of Spells.
- Support "Diseased" as a valid condition which an Actor might have immunity against in the Traits sidebar.
- Added pre-configured tools to the SRD Items compendium pack. Thanks to DoomRice for setting these up and sending me the items to be added. There's still more work to do on the 5e compendiums but I am always happy to receive help from the community to make progress on this process!

