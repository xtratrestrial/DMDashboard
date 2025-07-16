# Release 11.302 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.302

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.302


## Version 11 Stable


##### June 16, 2023


## Foundry Virtual Tabletop - Version 11.302 - Stable Release Notes

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Introducing Foundry VTT Version 11 (302), the next iteration in our stable release of V11. This update addresses a number of small, non-breaking feature requests and resolves a wide variety of bugs found in post-release use. This is a smaller update designed to unblock some the development community and resolve some crucial bugs. We'd like to take the opportunity to thank all the users and community developers who have reported these issues as we continue through our maintenance cycle for this version!

Additionally, we would like to call attention to our announcement of work beginning on a Foundry VTT version 11.5 which will implement two key new features We are going to work on an iteration of the Foundry VTT software that represents an intermediate update between Version 11 and Version 12, "V11.5", if you will. This update will invest into two features:

- Pre-update Compatibility Check
- Built-in Backups

You can read more about the importance of this work and what we plan to deliver in our Version 12 Patreon Feature Vote article.


## New Features


### Architecture and Infrastructure

- Extended S3 support to allow use of the S3 path-style format. (5296)


## API Improvements


### Architecture and Infrastructure

- Improved support for Cloudflare R2 by relaxing the requirement for ACL parameters. (8288)
- The handlebars template for Toolclips no longer defines a specific path to be used for video file storage. (9518)


### The Game Canvas

- Extended MeasuredTemplate API, providing new static public methods for handling shapes. (9538)
- Canvas#_onDragLeftStart now respects CONFIG.Canvas.rulerClass.canMeasure and replaced Ruler.canMeasure references to refer to CONFIG.Canvas.rulerClass.canMeasure. (9595)

`MeasuredTemplate``Canvas#_onDragLeftStart``CONFIG.Canvas.rulerClass.canMeasure``Ruler.canMeasure``CONFIG.Canvas.rulerClass.canMeasure`
## Bug Fixes


### Documents and Data

- The deleteAll function now correctly handles deletion of embedded Documents within compendium packs. (9552)
- Token#toggleOverlayEffect now functions as expected. (9636)

`deleteAll``Token#toggleOverlayEffect`
### Applications and User Interface

- Dropping a folder of items onto an actor sheet is now handled as expected. (9508)
- Corrected an underlying error in the logic which handled touch gestures for zooming and panning the canvas. (9511)
- Corrected the alphabetical sorting of folders in the export content application select box. (9604)
- Status effect toggles now use the label attribute instead of the name attribute as expected. (9618)

`label`
### The Game Canvas

- Resolved an issue which occasionally caused the Ping activity handler to display a ping at the wrong coordinates. (9491)
- Resolved some inconsistencies with the shape of the limited angle token light sources, to ensure thata token is completely illuminated within its external radius. (9632)
- Corrected an issue where the attenuation threshold for Walls was not being applied correctly (9541)
- Scenes with a Hex grid no longer have an invisible barrier preventing use of keyboard movement to navigate left and up. (9555)
- Updating Opacity, Tint, or Occlusion Alpha of a Tile now updates on connected clients as expected (9606)
- The occluded state for Tiles is now updated when changing between overhead and underfoot (9607)
- Occlusion now updates when a Token is moved using API coordinate updates. (9608)
- Updating a Token no longer unnecessarily re-initialises its child ActorDelta. (9609)
- Improved the safeguards in CONFIG.Actor.trackableAttributes to prevent cases where encountering an undefined actor type could block the TokenConfig application from rendering. (9610)
- Right-clicking when measuring with the ruler now immediately updates the ruler to remove the way point. (9611)
- Invisible walls below a roof tile no longer block vision after the roof tile has been deleted or toggled hidden. (9614)
- To resolve some race conditions with canvas rendering, we have consolidated concurrency management into the FogManager function. (9619)
- Append Number to Unlinked Tokens no longer incorrectly applies to Linked Tokens. (9634)

`ActorDelta``CONFIG.Actor.trackableAttributes``TokenConfig``FogManager`
### Package Development

- Corrected an edge case issue which caused incorrect rendering of the setup menu when clicking "Update All" on the modules tab. (9497)
- The function for creation of packFolders no longer duplicates folders under rare circumstances. (9598)
- Resolved a race condition between connecting to a module pack databases and vending world data. (9616)

`packFolders`
### Other Changes

- S3 bucket integration now supports the forcePathStyle setting (8630)
- Players may once again use the deleteAll parameter when deleting embedded Documents of a Document they own. (9569)
- Corrected an issue which prevented the iteration of S3 buckets. (9623)
- Resolved a number of issues related to S3 integration URL paths and the FilePicker, restoring S3 functionality. (9624), (9630), (9631)

`forcePathStyle``deleteAll``FilePicker`