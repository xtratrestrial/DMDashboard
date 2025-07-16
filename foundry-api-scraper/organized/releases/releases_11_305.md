# Release 11.305 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.305

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.305


## Version 11 Stable


##### July 06, 2023


## Foundry Virtual Tabletop - Version V11 - Stable Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Welcome to the fifth stable-channel release of Foundry Virtual Tabletop Version 11. As with most stable releases, this update focused on bug fixes for issues submitted by our users via our community Discord and our GitHub repository. In addition, we managed to sneak in a few small, non-controversial quality of life features which we hope you will all enjoy. We'd like to extend a huge thanks to our community for their continued submission of bug reports and assistance hunting out potential causes!


## New Features


### Architecture and Infrastructure

- Application directories purged during in-app update (dist, public, templates) now have extra hardening to ensure that they are treated as absolute paths within the application directory. (9542)


## API Improvements


### Applications and User Interface

- The TextureExtractor can now work with the RED or RGBA format and if the RED format is not supported by the GPU it will fall back to RGBA. (9732)

`TextureExtractor`
### Other Changes

- Improved the clarity of the returned message when a DocumentCollection ID does not belong to either the collection or the invalid set. (9673)

`DocumentCollection`
## Bug Fixes


### Documents and Data

- ChatMessage.getWhisperRecipients now returns all users that own an Actor with a matching name. (9694)
- It is no longer possible to programmatically create Compendium Folders of the wrong type. (9700)
- pack.private is no longer migrated when pack.ownership is present. (9733)
- All sub-typeable Documents now appear in game.model which fixes a bug that prevented custom JournalEntryPages from auto-populating new Documents. (8628)
- Newly-created Compendium Packs are now visible to others without a refresh. (9649)
- Foundry no longer overrides Active Effect duration properties in _preCreate which were explicitly provided as part of the creation request. (9715)
- Rollable Tables created from Compendium Folders now correctly use the Compendium type. (9722)
- It is once again possible to drag and drop Folders into/out of Compendium Packs. (9724)
- Fixed an issue where dropping a Folder into another or into/out of a Compendium Pack was not being rejected when the maximum folder depth was exceeded. (9739)

`ChatMessage.getWhisperRecipients``pack.private``pack.ownership``game.model``JournalEntryPage``_preCreate`
### Applications and User Interface

- Fixed an issue where a hovered Pinned Note would sometimes incorrectly appear underneath other Pins. (9712)
- The Module Creator no longer impacts fields which it does not directly manage, like Compendium Pack ownership, banner images, etc. (9559)
- The background image on the World login screen is now top-centered. (9658)
- Foundry no longer attempts to upload files that have been dragged from the File Picker window and dropped onto the same window. (9676)
- Pressing the CTRL key after dragging a Token no longer leaves a ghost Token on the Canvas. (9685)
- Pointer events on the Canvas no longer fail after double clicking on a Token to open its Sheet. (9716)
- Wall segments chained off of an existing node now always snap precisely to that node. (9719)


### The Game Canvas

- Pressing the ESC key to open the menu now works even when the active layer isn't a PlaceablesLayer. (9721)
- The TextureLoader.getCache method now gets the cache busted URL when the file doesn't exist in the cache. (9723)
- The default background Tile elevation is now equal to the PrimaryCanvasGroup.BACKGROUND_ELEVATION. (9728)
- The ActorDelta no longer re-prepares Items after synthetic Actor preparation is complete. (9731)
- Dragging a group of Walls moves them to the correct position now. (9738)

`PlaceablesLayer``TextureLoader.getCache``PrimaryCanvasGroup.BACKGROUND_ELEVATION``ActorDelta`
### Package Development

- Sidegrading a Module now correctly updates the compatibility risk tags in the Setup screen. (9635)
- The World description in the 'Join Game Session' screen now scrolls when the description is very long. (9640)


### Localization and Accessibility

- Fixed the Resume Tour label to correctly indicate that it will start from the last position rather than restart the Tour. (9680)
- Fixed references to the old ERROR.TokenCollide translation key to the correct RULER.MovementCollision. (9709)
- Tooltip's aria-describedby is now removed when you hover over into an adjacent tooltipped element. (9727)

`ERROR.TokenCollide``RULER.MovementCollision``aria-describedby`
### Other Changes

- Foundry no longer incorrectly logs a warning when uploading to a sub-folder of the Persistent Storage directory. (9708)
- Fixed a couple of places that still referred to the deprecated Document#data field. (9710)
- Fixed an issue that prevented Token/Light previews from updating correctly. (9735)
- Foundry no longer crashes on launch when using the old-format aws.json. (9668)
- Game settings with the DataModel type no longer throw an error when the setting is retrieved. (9726)

`Document#data``aws.json``DataModel`