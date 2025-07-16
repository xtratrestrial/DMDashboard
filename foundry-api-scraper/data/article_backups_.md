# Backups and Snapshots | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/backups/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Backups and Snapshots


## 


## Overview

Backing up your user data is an important precaution to take when operating Foundry Virtual Tabletop. Having a recent backup can transform a worst-case scenario into a minor inconvenience.

With the release of Foundry VTT Version 11.311, there are now three different ways to backup your Foundry VTT data:

Generally, you should take an individual backup of your current game worlds before or after making important changes. For example, you might want to take a backup of your world after manually adding many journal entries, after a session, or before you update your game system.

Taking a full snapshot is recommended before updating to a new generation of Foundry VTT (for example, from V11 to V12).

Backing up Foundry VTT data can consume a significant amount of drive space because it will copy any media files present in the package's folder as well as all the data. Take snapshots sparingly and use the Manage Backups tool to keep an eye on how much storage space you are using with your backups.

Note: Some of our Hosting Partners may have alternate backup methods available to their customers. If you are using Foundry VTT version 11.311 or higher and you do not see the functionality described in this article, please refer to the website or discord server for your hosting provider to find more information about the best way to back up your Foundry VTT data.


## Performing a Backup

It is important to know that backups performed from the setup screen ONLY take the contents of package directories (such as modules, systems, and worlds) into account and will not store data contained within other folders. If you wish to backup your assets in addition to packages, it is best to perform a manual backup. Backups can be performed using either the built-in backup tools outlined above or the tools provided by your hosting service (if applicable), but you can still back up your Foundry VTT data the old-fashioned way by manually copying files. The Troubleshooting: Backing Up and Moving Your User Data article contains step-by-step instructions for backing up your user data manually.

By default, Foundry VTT will automatically offer to perform a backup during times when it might be a good idea to perform backups. In most cases, all that you need to do to create a backup is to leave the checkbox marked.


### Creating a Package Backup

Most frequently, you will want to back up a few important game Worlds. To do so, find the World you want to back up in the setup screen, right click it, and select "Take Backup". You can also back up Systems and Modules in the same way, allowing you to store the exact state of a module or system you may rely on.

The first time you launch a world after a generational update, Foundry VTT will automatically perform a backup before changes would be made, if you wish to avoid that you can uncheck the checkbox labeled "Create a backup before migrating?".

It is also possible to take individual backups from the Manage Backups menu.


### Creating a Snapshot

Important: Snapshot backups only store data contained within the modules, worlds, and systems folders. They WILL NOT backup files stored outside of those folders, including any image or sound assets.

Snapshots save the state of all currently installed packages, including Worlds, Game Systems, and Add-on Modules. If your folders for those packages contain a large volume of data these snapshots may take some time to perform and may consume a large amount of storage space. The Manage Backups tool can be used to see how much space your backups are using.

New snapshots can be created from the Setup screen.

- In the upper-right corner of the setup screen, click the  Manage Backups button.
- At the top of the Manage Backups window, click  Create a Snapshot.

Whenever you update to a new generation of Foundry VTT (for example: when updating from V11 to V12) you will be asked if you would like to create a new Snapshot. Simply click the provided button to do so.


## Restoring Backups

If you would like to restore your user data from a previous backup created by Foundry VTT, the method used depends on the type of backup that you want to restore. If you performed a manual backup you can find details on how to restore your data in our Troubleshooting: Backing Up and Moving Your User Data article.


### Restoring a Package Backup

It is very easy to restore a world, system, or module from a backup you previously created. To do so from the Setup screen:

- Locate and right-click on the package you wish to restore.
- Click   Restore Latest to quickly restore your package to the last available backup.

Other stored backups are available from the  Manage Backups menu which can be clicked on at any time to view a list of all available backups.


### Restoring a Snapshot

Stored snapshots can be restored at any time to return all packages in your Foundry VTT userdata to a previously recorded state. Please note that depending on the size of your stored snapshot, the restoration process may take some time.

To restore from a previously taken Snapshot from the Setup screen:

- Click the  Manage Backups button.
- Click the Snapshots tab.
- Locate the Snapshot that you wish to restore, then click the   Restore button.


## Managing Backups

Important: Do not delete backup files manually! Deleting a backup file that is required as part of a snapshot will render the entire snapshot unusable. Please use the Manage Backups window to delete backups instead.

The Manage Backups window is the control center for working with your Foundry backups. This window allows you to view your existing backups, delete backups, restore to a particular backup, and even create new backups right in this window! Here's how it works:


## How Backups Work

Backups are stored in the Backups folder of your UserData folder. Each individual backup consists of a .bak file containing the actual backed up data, as well as a separate JSON file manifest that contains contextual information about that backup.

`Backups``.bak``JSON`Snapshots are stored as a single JSON file containing references to which individual .bak files are required to restore your Foundry VTT user data to the state contained in the Snapshot.

`JSON``.bak`It is extremely important to never directly modify or delete the contents of your Backup files as it may prevent Foundry VTT from being able to restore that backup data. Instead, use the Manage Backups tool to interact with your stored Snapshots and Package Backups.

