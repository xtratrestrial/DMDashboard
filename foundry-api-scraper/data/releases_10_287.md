# Release 10.287 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/10.287

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 10.287


## Version 10 Stable


##### October 06, 2022


## Foundry Virtual Tabletop - Version 10 Patch 4 Release Notes

The team has been hard at work combing through community feedback and bug reports to continue to make Foundry VTT even better. If you would like to see more of the changes that went into V10, be sure to check out the Stable release's notes, including our What's New in V10 video.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Update Highlights

This release is focused on core API improvements, documentation improvements, and the perpetual squashing of bugs.


## New Features


### Package Development

- Adventure Compendia no longer require a System to be defined, but a Compendium pack without a System defined will only support System-less data like Journal Entries, Roll Tables, Cards, Playlists and Scenes. (8262)


## API Improvements


### Architecture and Infrastructure

- ChatMessage#getHTML now utilizes ChatMessage#getRollData. (8264)

`ChatMessage#getHTML``ChatMessage#getRollData`
### Dice and Cards

- Roll#toJSON now calls toJSON on its terms for cases where it is not immediately serialised with JSON.stringify. (8260)

`Roll#toJSON``toJSON``JSON.stringify`
## Bug Fixes


### Documents and Data

- Setting Limited permissions on a Journal Entry now prevents users from opening its Map Note and seeing the Journal Entry's title unless it is an image, in which case it will open an image popout without a title. (7731)
- Journal Entries should now support navigating to headings within secret formatted blocks. (7950)
- Using the grid control tool should no longer cause Scenes to be removed from the Scene navigation bar. (8223)
- Setting a width for an image in a Journal will no longer distort its aspect ratio. (8231)
- Updating an Actor's image and Prototype Token should no longer throw an unhandled exception. (8241)
- Configuring a Folder's permissions should no longer trigger a deprecation warning. (8279)
- Map Notes should now correctly persist their global visibility property. (8280)
- Providing explicit data to _onDropActiveEffect should no longer throw an error. (8317)
- An empty Combat Tracker should no longer cause an infinite loop in ActiveEffects duration evaluation. (8318)

`_onDropActiveEffect`
### Applications and User Interface

- Releasing ALT will no longer leave a previously highlighted object in an incorrect hover state. (6786)
- Fixed a bug where changing the default Sheet for a Journal Entry Page would close the parent Journal Sheet. (7780)
- Fixed a bug where tokens with higher sort values would not be mouse-interactable while sharing space with larger tokens. (8042)
- Tile scaling and mirroring should now be correctly handled when using negative values. (8203)
- Map Notes should now be interactable when above a Token. (8249)
- Placing a Token while holding SHIFT no longer throws an error. (8250)
- Choosing 'No' when confirming Scene dimension changes in the grid configuration tool should now properly reset the Scene preview. (8254)
- Players should now only be able to use PingCombatant on Tokens that are visible to them on the canvas. (8265)
- Fixed a bug where after reloading or switching Scenes the Token target indicators of other players would not be visible. (8266)
- Flags injected into the Ambient Light and Token configuration should now be persisted correctly. (8271)
- New players should once again be presented with the default User Configuration application on first login. (8273)
- Modules with long titles should no longer incorrectly become centered in the Configure Settings list. (8276)
- Drag selecting should no longer fail if a Tile is on top of another Tile. (8281)
- Default Scene creation should no longer occur if the user is not a GM. (8285)
- Already-opened Journal Pages and other Sheets should now be brought to the foreground if links that reference them are clicked. (8292)
- scene.dimensions should no longer be undefined if the Scene Configuration is closed instead of saved on creation or import. (8301)
- Token rotation now supports decimal values. (8325)
- Journal Entry names should now be properly escaped in the Scene Configuration dialog. (8330)
- Token dimensions now use the numberInput handlebars helper and include a hint that their values are rounded to the nearest .5. (8331)

`sort``scene.dimensions``undefined``numberInput`
### The Game Canvas

- Added a Canvas.clearContainer method which allows textures to have their own cleaning logic. (8078)
- Token vision should once again accurately reveal Fog of War. (8126)
- A Token's custom Vision Mode color should now be correctly propagated to canvas post processing effects. (8135)
- TileSprite should now have the same interface as TileMesh. (8198)
- Animating between hidden states should now correctly respect the Token's alpha settings. (8228)
- Updating a Prototype Token from its Token configuration should no longer trigger two Actor updates. (8247)
- Using the grid configuration tool when Tokens are present should no longer throw errors. (8253)
- Token#updateVisionSource should now trigger a refresh of lighting as expected. (8293)
- Text in Drawings should now visibly drop in opacity when their drawing is hidden. (8297)
- Fixed a bug where highlighted Tokens from holding ALT would be stuck in a highlighted state if a Token was moved. (8304)

`Canvas.clearContainer``TileSprite``TileMesh``Token#updateVisionSource`
### Package Development

- Package validation error messages should no longer be truncated misleadingly. (8245)
- Required Package tags should once again appear in the Install Module dialog. (8248)
- Packages loaded from the website should no longer have their System requirements treated as Module requirements. (8315)


### Localization and Accessibility

- The Module dependency installer window now correctly uses plurals when offering installation options. (8286)


### Other Changes

- The deletionKeys parameter of diffObject should now correctly ignore deletion keys in inner objects where the key targeted for deletion would be removed or did not exist. (7716)
- Hash symbols should now be correctly encoded in file names. (8222)
- Application#_createSearchFilters no longer triggers a second debounce. (8255)
- Block level anchor tags now work properly in the ProseMirror schema for images. (8275)
- Document#unsetFlag should now unset the deepest nested property rather than unsetting the flag at the root. (8283)
- Changes made in the _preCreate hook should now correctly impact embedded Documents in unlinked Tokens (8287)
- Inline Roll parsing should now be hardened against none and non-multiline commands. (8290)
- ProseMirror editors should now correctly consume handled drop events. (8307)
- The ProseMirror menu should now support editing manually entered links. (8311)
- More spanning mark configurations should now be preserved correctly in ProseMirror. (8319)

`deletionKeys``diffObject``Application#_createSearchFilters``Document#unsetFlag``_preCreate``none`
## Documentation Improvements


### The Game Canvas

- The description of Fog Exploration has been changed to clarify that disabling Fog Exploration does not clear out already explored areas. (8267)


### Other Changes

- HandlebarsHelpers.html#editor parameters should now be properly documented. (8321)
- Added documentation examples for HandlebarHelpers. (8322)

`HandlebarsHelpers.html#editor``HandlebarHelpers`