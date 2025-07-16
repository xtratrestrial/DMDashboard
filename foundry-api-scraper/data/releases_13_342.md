# Release 13.342 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/13.342

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 13.342


## Version 13 Stable


##### May 02, 2025


## Foundry Virtual Tabletop - Version 13 - Stable 2 Release Notes

This build is just a fast turnaround update that addresses a few edge case bugs which were not caught during testing, there are no significant feature changes worth highlighting. The whole of this update serves to fix a few bugs that cropped up related to package installation and world migrations for certain very specific cases.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## New Features


### Package Development

- Installing a package via manifest URL directly now displays a warning and confirmation dialog in cases where the package would be incompatible with the current Foundry VTT software version. (12699)


## Bug Fixes


### Documents and Data

- The "Draw Result" button on RollTableSheet is no longer disabled when completing a draw with replacement and no longer requires reopening the table to re-enable it. (12698)

`RollTableSheet`
### Applications and User Interface

- The UPnP checkbox is available in the Configuration window of the Setup screen again. (12710)
- The package installation workflow no longer attempts to sidegrade to the latest compatible version of a package when installing via manifest URL. (12705)
- In cases where the connection to the Foundry VTT website is unavailable, the core software instance no longer allows updating to a version of a system/module that is not compatible with the currently installed version. (12690)
- Package favorites now render as expected during the intial rendering of SetupPackages. (12697)
- Corrected an issue which allowed instances launched using the --world flag to bypass version compatibility checks for the launched World. (12700)
- Launching a World no longer throws an error during migrations in cases where --no-backup has been configured. (12695)
- Shadow DOM elements of disabled range input elements no longer show a pointer cursor when hovered. (12704)
- Reframed the text for the Region Layer Create Holes toolclip to provide increased clarity on tool usage. (12673)
- Shifted a definition of --background out of .themed.theme-light to allow it to be defined specifically in .application. (12639)

`SetupPackages``--world``--no-backup``--background``.themed.theme-light``.application`
### The Game Canvas

- Region#_overlapsSelection now uses RegionDocument#clipperPaths instead of the deprecated Region#clipperPaths. (12671)
- TokenConfig overrides non-existent _disableFields method. (12703)

`Region#_overlapsSelection``RegionDocument#clipperPaths``Region#clipperPaths``TokenConfig``_disableFields`