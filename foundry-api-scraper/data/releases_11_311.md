# Release 11.311 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/11.311

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 11.311


## Version 11 Stable


##### September 28, 2023


## Foundry Virtual Tabletop - Version 11 - Stable 10 Release Notes


## Built-In Backups

Earlier this year we announced that we would be making a slight deviation from our normal development process in order to work on an "11.5" release. This release would make some highly-requested features available in Version 11 in order to pave the way for a smoother update to Version 12 and beyond.

With this Version 11 Stable release, the first half of that work is complete: Built-in backup functionality.

We frequently warn users to take backups of their data whenever updating to newer versions of Foundry Virtual Tabletop, and we also recommend that they do so whenever updating their Game Systems as well. Taking a backup is the quickest and easiest way to ensure that you are able to restore your Worlds to working order if ever anything goes wrong. Now, instead of having to poke around in a file browser yourself, you can take backups of all your Worlds, Systems, and Modules right within Foundry VTT itself.


### Package Backups

You may take a backup of any World, System, or Module at any time by right-clicking it in the Setup interface. You will see options there to create, restore, or manage backups of that individual package. Additionally, whenever your World would undergo a core software data migration, or whenever it is opened in a newer version of its Game System, you will be prompted to take a backup.

If you would like to see how much space your backups are taking up, or clear out old, unused backups, you can do so via the 'Manage Backups' option for an individual package. If you would like an overview of all the backups across all packages, you can use the global 'Manage Backups' option that is available in the top-right menu of the Setup screen.


### Snapshots

What we are calling 'snapshots' are a way to take a backup of all currently installed packages at that moment in time. You can do this at any time via the Manage Backups interface, but you will also be prompted to take a snapshot whenever updating to a newer version of Foundry Virtual Tabletop. Snapshots will allow you to save a known good state of your package collection that you can later roll back to for any reason.

Note: Package backups and snapshots only copy the World, Module, or System folder. Any assets you have outside of these will not be backed up.


### Knowledge Base

What we have presented above is only a small overview of the functionality included. For an in-depth exploration of the features, please be sure to take a look at the Knowledge Base article which covers everything in greater detail.

