# Module Maker | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/module-maker/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Module Maker


## 


## Overview

The module maker is a tool for creating modules easily and quickly. These modules can be the basis for more advanced development, or simply to contain compendia to be shared between game worlds easily. For more on what modules are and how to manage them, see Module Management. For more on developing modules with special features see Introduction to Development.


## Creating a New Module

To create a new module, follow these steps:

- Navigate to the   Add-On Modules tab in the main menus.
- Click on the   Create Module button to open the configuration panel.
- Fill out the module information. Information on these options is provided below.
- Click the orange   Create Module Create Module button to finish the process.
- You will receive a message indicating the module has been completed!

All created modules are stored in your user data folders. For information on where your data is stored see Application Configuration.


#### Editing Existing Modules

You can edit any module by right clicking on the module in the Add-on Modules listing and choosing the   Edit Module button. This will open the editor and let you change the fields of the module. If you choose to edit a module that was installed from the official repository, you will receive a warning that doing so may disrupt the module's function, or prevent future updates. If this happens, you can uninstall and reinstall the module to restore the original settings after you've edited them. However this will cause any changes to be discarded.


## Module Creation Options

When creating a module, there are four tabs of configuration options which need to be filled out. These tabs are: Basic Details, Authors, Compendium Packs, and Relationships. These tabs and their details are explained below.


### Basic Details

These details make up your module's manifest, which tells Foundry VTT how to handle the package when it's loaded.


#### Optional: Compatibility

This optional section allows you to set the compatible versions of Foundry VTT which the module will function with. Compatibility can be declared by specific build versions such as "11.294" for Foundry V11 build 294, or broadly by generation of the software, like "11" for Foundry V11 as a whole. These compatibility options are used to display compability warning badges to help users determine if a module is likely to work with their version of the software or not.


### Authors

Authors are an optional part of a module, but highly recommended for proper attribution.

To add new author to a module, click the   Add User button. This creates a new blank author for you to fill out. You can remove authors by clicking the   button in the upper right of the author card.


### Compendium Packs

Modules can be used to contain compendia, which are archives of information which can be imported into game worlds. The most common use for modules, especially locally created ones, is to contain this data for use across worlds, or to store it for later reference without having it use up valuable memory better suited to assets actively in use. For more on what compendium packs are and what they are used for, please see Compendium Packs.

To add a new compendium pack to a module, click the   Add Compendium Pack button. This will create a blank compendium in the module and allow you to set the details for it. Compendia can be edited along with with all other details of a module. You can remove a compendium pack from a module by clicking the   Remove Compendium Pack button found in the upper right corner of the compendium pack's info panel.

Note that deleting a compendium with data in it will cause the contained data to be lost as well.


### Relationships

Relationships are an optional part of modules which determine what other modules are needed for the module to function, or which are known to cause issues with it.

To add a new relationship to a module, click the   Add Relationship button. This will create a blank compendium in the module and allow you to set the details for it. Compendia can be edited along with with all other details of a module. You can remove a compendium pack from a module by clicking the   Remove Compendium Pack button found in the upper right corner of the compendium pack's info panel.

- Required modules are needed for the module to function, and are prompted to install when the module is installed, and are activated alongside the module in a game world.
- Recommended modules are optional modules which the user will be prompted to install if they choose.
- Known Conflict modules are given to warn users of incompatibilities between multiple modules, often because they modify the same parts of the game system, game world, or software.

