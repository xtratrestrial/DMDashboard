# Rollable Tables | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/roll-tables/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Rollable Tables


## 


## Overview

Rollable Tables allow you to draw from a predefined list of outcomes which, in addition to allowing text entries, can link to Actors, Items, Journal Entries, Macro Commands, Playlists, Scenes, or even other Rollable Tables. In addition, Rollable tables have full access to Compendium Packs and the documents they contain.

This article will familiarize you with rollable tables, how to create, configure and use them.


#### Folders

This directory can contain folders to organize your world's rollable tables. For details on how to create and use them please see the Folders article.


## Rolling on a Table

Many Game Systems and Add-on Modules come pre-configured with Rollable Tables for use during your games. There are a variety of ways to draw results from a Rollable Table quickly. In addition to clicking the Roll Button on an open rollable table, You may drag and drop a rollable table from the sidebar to the macro hotbar to quickly generate a macro which, when clicked, will roll for a result from the table and post it to the chat log. You may also right-click the table and choose the Roll option from the context menu.


## The Rollable Table Directory

Roll Tables in Foundry can be viewed, created, and managed in the Roll Tables Directory sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's roll tables. Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on an roll table can see the roll table and the folder(s) containing it in the Roll Tables Directory. The specifics of this sheet depends on the system being used.


#### Sidebar Elements

All Roll Tables in the sidebar has additional context menu options available via a right-click with the mouse.


### Creating New Roll Tables

To create a new roll table, click the   Create Roll Table button in the Roll Table Directory sidebar. This will create a dialog box prompting you to name your roll table. Once you have named your roll table and selected its type (if necessary), click Create New Roll Table.

This will add your roll table to the directory sidebar, and open the roll table's sheet for you to edit and fill out. Once you are done editing your roll table, you can close the roll table window. All created roll tables can be found in the Roll Tables Directory.

To edit an roll table after you've created it, you only need to navigate to the Roll Tables Directory and click on the roll table you want to edit, this will reopen the roll table sheet for editing.

When a new World is first created, the Roll Tables Directory will initially be empty. Though roll tables can be created fairly quickly from scratch, it may be desirable to import roll tables from pre-configured sources. This can be done in one of two ways: by importing roll tables from a compendium pack, or by importing roll table data directly from an external JSON file.


#### Importing from Compendium

An roll table can be imported from a compendium by either dragging the roll table from the compendium into the Roll Tables Directory, or by right-clicking the roll table in the compendium and selecting "Import". For more information on compendia and how to use them, see the Compendium Packs article.


#### Importing from JSON files

If you have exported roll tables that you would like to bring into a game world you can do so by loading the roll table info directly from a JSON file. This can be accomplished by right-clicking an roll table in the Directory and selecting "Import Data." This will open a file browser that allows you to select the desired JSON file to import. Once selected the JSON file's data overwrite the existing roll table you imported the data into.

You can export an roll table's data by right-clicking an roll table in the Directory and selecting the "Export Data" option. This will prompt you to save a JSON file with the roll table data in it.


## The Rollable Table Interface

Once the table is created you'll be presented with the table configuration panel. This panel holds all of the configuration options, various UI actions, and the types of results that a table can have.

The icon to show for your Rollable Table. Click the default (D20) image to change to an image of your choice.

The name of your Rollable Table.

A descriptive entry if you wish to provide a reminder of the purpose of the table.

The formula used when pressing the "roll" button on the table, this can simply be "1d#" where # is the number of entries in the table, but it also accepts more advanced formulae.

If a rollable table is set to draw with replacement, its entries are not used up when rolled. If unchecked, this option will only roll each entry in its table once until reset. This usage is intended for representing physical objects that, once claimed, cannot be claimed again. Such as a chest containing only a few items. Once those items are removed, the chest no longer contains them.

This option determines whether or not players are able to see the formula that the Rollable Table uses to determine the results of the roll on the table, which can give players some insight into how many results there may be in the table. Regardless of the state of this option, drawing from a Rollable Table will always generate a chat card for the result, this only controls the visibility of the formula used.

Adding results to the Rollable Table begins with pressing the + button. Every result has a number of options that can be configured to provide a highly customizable experience.

This dropdown selection input allows you to choose either Text, Document or Compendium. Text allows you to enter plain text or HTML scripted entries which will be output to Chat when they are entered. Documents can be any named document from any of the sidebars, including items, actors, other roll tables, and similar.

Each type of Result carries with it some specific options. Text allows you to enter plain text or HTML scripted entries which will be output to Chat when they are entered; Text entries can also utilize Foundry's Document Links(@Document[ID]) for advanced functionality. Documents require you to choose which type of document the Rollable Table refers to, with a second box allowing you to type the exact name of the document to be found. Compendium function effectively the same as Document, but you select the compendium from which to find the document's name.

Weight determines how many times a particular result is entered into the table. By default, every result has a weight of 1. After you have assigned your weights, pressing the scales icon at the far right of the results header will generate the appropriate Roll Formula for your results.

When a roll is made on the Rollable table, if the number falls anywhere within the range of a result that result is drawn. In a case where two or more results have an overlapping range, all results are considered drawn.


### Nesting Tables

By default, Foundry supports rolling on secondary tables inside a Rollable table. To accomplish this, assign a result to the Document - RollTable type and enter the name of the table.

If you wish to have the first table indicate that it is rolling on a sub-table, assign a text result before the secondary Rollable Table result to make a declaration, such as "A small chest containing:". Then provide both of these results the same Range.


## API References

To interact with Rollable Tables programmatically, consider using the following API concepts:

- The  RollTable Document
- The  RollTables Collection
- The  RollTableDirectory Sidebar Directory
- The  RollTableConfig Application

