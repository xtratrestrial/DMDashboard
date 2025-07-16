# Automated Backup and Sync Services | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/automatic-backups/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Automated Backup and Sync Services


## 

Protecting your data and keeping regular backups is something we strongly encourage and hope that our users do regularly. Sometimes, however, we see a surge in users caught unaware by particular difficulties related to the use of automated backup and sync services such as Dropbox, Google Drive, OneDrive, iCloud and more. It is easy, if incorrect, to assume that these services work the same to backup your personal files as they would for backing up Foundry Virtual Tabletop user data, but can result in a lot of problems!

Using these services can result in loss of data.


## Why shouldn't I use a sync service?

While automated sync services can be a great boon for backing up static files and reducing some of the tedium of creating manual backups, and they can be particularly useful for preserving data in non-server software, in cases where server software may be actively operating on stored data these sorts of services can cause many problems. For Foundry Virtual Tabletop, there are two primary issues which occur as a direct result of syncing files, particularly with regard to the database files (where all your important data is stored).


### Lock files

Our database engine does not expect database files to be accessed by multiple sources at the same time. To prevent this behavior, we utilize a simple lock file which tells the software not to attempt to open the database as it is already in use. Many sync services neither understand nor care about that fact, and will arbitrarily restore these lock files when they are found to be missing. The result is that Foundry VTT cannot safely identify that the database file has not been locked intentionally, and will refuse to open the database, preventing your world from launching.

`lock`
### Database corruption

As Foundry VTT expects only one process to access its database files at any one time, unexpected changes to those files can result in the contents of the database becoming unreadable. When a sync software modifies these files mid-write or mid-read, the resulting changes to the underlying database become almost immediately unrecoverable. Our database files are binary encoded- so changing or modifying those database files while Foundry VTT is actively running is extremely risky.


## What if I want to use a sync service anyway?

There's a lot of reasons you might want to, and to be clear: it isn't that the use of a sync service causes problems inherently. However, because you're storing data that is actively changing, you need to make sure that your automated backups follow some simple but specific guidelines:

- Sync the data one-way only. Uploading from your computer to the remote storage.
- Never perform sync operations while Foundry VTT is running; whether this means setting it to backup on a timer or manually hitting sync when you know Foundry VTT is not currently running.
- Only backup the "Data" subfolder of the userdata-- if the Config folder is lost it would only be a minor inconvenience and syncing the Config folder poses more risks than the reward of having a copy of it stored.

Sync the data one-way only. Uploading from your computer to the remote storage.

Never perform sync operations while Foundry VTT is running; whether this means setting it to backup on a timer or manually hitting sync when you know Foundry VTT is not currently running.

Only backup the "Data" subfolder of the userdata-- if the Config folder is lost it would only be a minor inconvenience and syncing the Config folder poses more risks than the reward of having a copy of it stored.

