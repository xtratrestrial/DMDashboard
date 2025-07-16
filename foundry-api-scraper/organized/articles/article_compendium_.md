# Compendium Packs | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/compendium/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Compendium Packs


## 


## Overview

Compendium Packs exist to to share data between Worlds, and reduce the strain on worlds that have accrued a large number of actors, items, macros, playlists, rollable tables, or scenes. When these elements are not in use, but are not ready to be deleted, they should be stored in compendia. Compendium Packs help you keep your world organized, reduce clutter, and improve performance for all users.

Compendium packs are also used by Add-on Modules and Game Systems to store large amounts of content which can be unpacked and added to an existing game world, such as part of a premium or exclusive content pack.

With the exception of Adventure Documents, each Compendium can only contain one type of document: Actors, Items, Journal Entries, Macro Commands, Playlists, Rollable Tables or Scenes. Data contained in compendium packs are not loaded for users until they are needed, reducing the amount of data that a particular user must load when first joining a game.


## The Compendium Pack Directory

Compendium Packs in Foundry can be viewed, created, and managed in the Compendium Pack Directory sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's compendia, which hold data that you may want to access later but don't need immediately.

Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on a compendium can see it and the folder(s) containing it in the directory.


#### Sidebar Elements


### Creating New Compendium Packs

A new, empty, Compendium Pack can be easily created in any World with the following steps:

- Navigate to the Compendium Packs sidebar tab ( ).
- Click the   Create Compendium button.
- Enter a name for the new Compendium Pack (If you don't select a name, it'll be called "New Compendium" with a number appended to it.).
- Choose the type of Document that will be stored in the Compendium Pack (such as Actors, Items, Journal Entries, etc.).
- Click  Create Compendium to complete the process.

After your compendium has been created, clicking on its name in the sidebar will open a new window that will allow you to manage the content your compendium pack contains.

If you intend to create compendium packs that are part of a module that can work between game worlds, see Content Packaging Guide

If you intend to use your compendium to provide importable adventures with multiple types of document, see Adventure Documents.


#### Compendium Types

There are 3 types of compendium the sidebar will display: world ( ), module ( ), and system ( ). This denotes where the compendium is sourced from. World modules come from the currently loaded world, are commonly user generated, and contain content that pertains to the world specifically. Module packs come from plugin modules (see Module Management), and system compendia come from the world's game system which usually consist of premade content meant for players and gamemasters to use in running their games.


#### Locking Compendium Packs

You can only export folders or otherwise modify compendium packs which are unlocked. A Compendium Pack can be locked or unlocked by right-clicking on it from the Compendium Packs sidebar tab and choosing ( ) and clicking   Toggle Edit Lock. This will lock or unlock the chosen compendium. Locked compendia are faded out in the sidebar in addition to having a lock icon displayed on them.

Important: Users should be very careful not to edit the contents of Compendium Packs provided by Game Systems and Modules, as their changes will be lost when the module or system updates.

All compendia in the Compendium Directory can be right-clicked to open up a context menu which allows for additional actions used to manipulate them.


### Exporting Content to Compendium Packs

Within compendium packs that have been unlocked it is possible to add, remove, or edit Documents in order to provide an organized content structure for your users. Compendium packs are alphabetically sorted by default. There are two ways to add content to compendium packs:

Adding individual Documents to a compendium pack is an easy process, supported by a simple drag and drop workflow:

- Navigate to the Compendium Packs sidebar tab ( ).
- Open the compendium you wish to add content to.
- Be sure your compendium pack is not locked! It is not possible to modify a compendium that is locked.
- Navigate to the sidebar tab where your Documents are stored.
- Drag the Document you wish to add to your compendium from the sidebar into the compendium pack.

Adding individual documents to a compendium does not preserve its ID or merge with copies that may already exist in the compendium, each dropped Document will create a new copy in the Compendium Pack.

If you have already organized content in your world into folders for easy management, it is simple to add that folder worth of content to a compendium pack.

To add a folder of Documents to your compendium:

- Be sure your compendium pack is not locked! It is not possible to modify a compendium that is locked.
- Navigate to the sidebar tab where your Documents are stored.
- Right-click on the folder you wish to add to your compendium.
- Choose "Export to Compendium" from the context menu.
- Choose the Compendium Pack that will be used to store your Documents.
- Optional: choose whether or not you wish to merge the documents with existing documents in the compendium by name, or whether or not you wish to keep the ID of your documents.
- Click Export Content.


#### Export Options

The following options are available when exporting content to a compendium:


#### When to use Compendium Packs

Storing unused Documents in a Compendium greatly reduces the time it takes to load your world. Even though each Actor, Item, or other document may be small, as their numbers start to rise into the hundreds the amount of data that must be transferred to each of your players when they join a game can cause your world to slow down over time. It is a best to practice good organization.


### Importing Content from Compendium Packs

If you have existing Compendium Packs and would like to import content from them, there are a variety of ways to do so.

Once content has been imported into a game world it becomes a localized part of that world, and any changes made to the documents in said world will not be reflected in the compendium they came from unless you also export the content back to the compendium, or create a new compendium with the changed documents. This allows you to use compendia as a means to back up things like actors, items, journals, and scenes that you want to keep original, unaltered copies of for reuse later.

It is important to exercise some caution when importing everything a compendium pack might contain, especially if the compendium pack might be storing hundreds of Documents, as this will negatively impact performance in your world if too many of them are imported.

Single item imports of content from a pack is done with the following steps:

- Navigate to the Compendium Packs sidebar tab ( ).
- Click on the Compendium Pack you wish to import from.
- Either:

Drag the Document you wish to import from the compendium into the appropriate Document Sidebar tab (for example, Actors go to the Actor tab.)
Right-click on the Document you wish to import and choose 'Import Entry'
Click on the document you wish to import to open its sheet, then click  Import in the window header bar.
- Drag the Document you wish to import from the compendium into the appropriate Document Sidebar tab (for example, Actors go to the Actor tab.)
- Right-click on the Document you wish to import and choose 'Import Entry'
- Click on the document you wish to import to open its sheet, then click  Import in the window header bar.

- Drag the Document you wish to import from the compendium into the appropriate Document Sidebar tab (for example, Actors go to the Actor tab.)
- Right-click on the Document you wish to import and choose 'Import Entry'
- Click on the document you wish to import to open its sheet, then click  Import in the window header bar.

Importing Documents one at a time creates a new copy of that Document, and does not preserve the ID of the original Document. Importing an individual Document will not overwrite existing Documents of the same name.

Importing all documents from a Compendium is a great way to quickly add a large number of documents to your world. However, it is important to note that importing all documents from a Compendium can create a large volume of Documents in your world at once, so it should be used with some measure of caution. Importing all Documents allows you to optionally preserve the ID of the original Document, which will overwrite any Documents in the World which have the same ID.

- Navigate to the Compendium Packs sidebar tab ( ).
- Right-click on the Compendium Pack you wish to import from and click  Import All Content
- In the new dialog that appears, choose a folder name to import the content to.
- Click  Export Content to complete the process.


### Moving Compendium Packs To Other Worlds

Compendia are limited the game world they are created within by default, but it is possible to move them to new worlds or create modules which contain compendium packs for use in other worlds. To learn how to do this, refer to the Content Packaging Guide.

