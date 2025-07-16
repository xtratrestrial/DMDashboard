# Release 9.280 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.280

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.280


## Version 9 Stable


##### August 26, 2022


## Foundry Virtual Tabletop - Version 9 Stable Build 280 Release Notes

This final release in our Version 9 generation of Foundry Virtual Tabletop applies a select number of important fixes to improve the security and stability of the software for users who remain on Version 9. All of these fixes are also included in Version 10 which will have a stable release soon!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss (Follow this handy guide).


## New Features


### Other Changes

- Two security fixes that were identified and resolved during the Version 10 development cycle have been backported to Version 9. These security fixes close loopholes which allowed the possibility of unintended execution of arbitrary JavaScript. It is recommended for all users to update either to this Version 9 release or to the stable Version 10 release once it is available. (7470)


## Bug Fixes


### Package Development

- Attempting to install or update to a package which uses - and only supports - the new V10 manifest format will now provide a more informative error message explaining why the package cannot be installed. (7404)


### Other Changes

- Applied a correction to the file picker which applied an incorrect upload timeout. (7469)
- Applied a fix for the texture loader cache incorrectly expiring and caching textures when switching scenes. (7940)

