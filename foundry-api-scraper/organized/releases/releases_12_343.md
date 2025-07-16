# Release 12.343 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.343

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.343


## Version 12 Stable


##### May 08, 2025


## Foundry Virtual Tabletop - Version 12 - Stable 8 (Closing) Release Notes

With last week's release of Foundry VTT Version 13 Stable successfully behind us, we are turning our attention back to V12 one last time and releasing Version 12 Closing (12.343). Unless something unforeseen happens, this is anticipated to be the last release in the V12 development cycle.

This version's primary focus is to refine the package update process to ensure that V12 users are always provided with correct, compatible versions of their systems and modules. We are also taking the opportunity to backport a few V13 security improvements to V12 as well.

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.

Because this is a V12 build, the two new V13 build types (the dedicated Node installer and the Windows Portable Build) are not available. For this release, the "Linux" version serves the same role as the legacy "Linux / Node" installers and should be used for Node-based installations on all operating systems.


## New Features


### Package Development

- When installing a package via manifest URL directly, a warning and confirmation dialog now display if the target package would be incompatible with the current Foundry VTT software version. (12699)


## Bug Fixes


### Package Development

- Prevented an error that occurred in the V12 Setup screen while previewing an available V13 update and clicking the "Create Snapshot" button. This error previously caused snapshot creation to silently fail. (12689)
- Fixed an issue where users could accidentally update to a version of a system/module that is not compatible with the installed core version if the Foundry VTT website was unreachable. (12690)
- Fixed a bug where launching a World using the --world flag or the "Default World" auto-launch setting did not assert the current compatibility of the world's game system. (12700)
- The Foundry VTT server no longer incorrectly attempts to sidegrade URL manifests with the latest compatible version of packages. (12705)
- Prevented the UI display of undefined modules and systems and added checks server-side to no longer attempt to uninstall such packages to prevent a bug where the entire modules or systems were being deleted. (12767)

`--world``modules``systems`