# Release 9.268 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.268

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.268


## Version 9 Stable


##### April 13, 2022


## Foundry Virtual Tabletop - Version 9 Stable Build 268 Release Notes

We are very pleased to bring you all another bug-fixing focused update with Version 9 Stable Build 268. As with all releases on the Stable branch, this build is composed of fixes and changes for bugs sourced from feedback provided by you, our awesome community, as well as internal testing. These updates prioritize resolving bugs in ways which will not introduce breaking changes to the API or negatively impact modules and game systems.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss (Follow this handy guide).


## Update Highlights

Our goal for this release was to polish up a few lingering non-critical (but no less irritating) bugs to help keep V9 stable while our development focus is spent primarily on Version 10. This is a fairly light update, surgically targeting a few UI and API issues as well as a few lingering bugs that couldn't be addressed during our last update. We also took the opportunity to address a few UI and documentation inconsistencies.


## Bug Fixes


### Interface and Applications

- Chaining multiple keyboard shortcuts in a row should no longer cause the Command (CMD) key on Macs to not be recognized. (6771)
- Playlists will now update properly when adding a new track and work as expected when deleting a track. (6956)


### Other Changes

- Resetting or deleting a deck with dealt cards should now reset the deck properly. (6941)


## Documentation Improvements

- The code examples for the Rolling API have been updated to reflect Roll#evaluate's async nature. (6520)
- Documented that getProperty will return an error if an object is not passed in. (6936)
- The unbundled Source files are now distributed with Foundry VTT to aid developers. (6966)

`Roll#evaluate``getProperty`
## Localization Improvements

- Token Config vision distance and light radius are now expressed in distance units rather than grid units. (6942)

