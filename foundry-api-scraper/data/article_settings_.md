# Game Settings | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/settings/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Game Settings


## 


## Overview

Foundry Virtual Tabletop features a number of configurable settings which are accessed by clicking the   Configure Settings button found inside the Game Settings tab (  on the sidebar). The settings here allow you to customize your FVTT experience and the way you interact with the software.

Please note that these settings differ from the Application Configuration settings, which are controlled by the server host.


## The Settings Tab

The settings tab contains useful information about your Foundry VTT setup and lets you make changes to its configuration. Let's take a look at each section.


#### General Information

This section provides some details about your Foundry VTT instance like its version and build number as well as the installed version of your game system. When there's an update available for your system you'll also see an '!' icon. Lastly, you can see how many modules are active in your world.


#### Help and Documentation

This section provides useful links for support information and to learn about how Foundry works.


#### Game Access

This section lets you invite players to your game and leave your world.


### Configure Game Settings Window

The Configure Game Settings window has a list of settings that users can use to customize how certain aspects of the software, game systems and add-on modules behave.

A sidebar on this window provides filters to sort the available settings, and has a search bar which allows you to find specific settings you want to change.

The available filters are:


#### Reset Defaults

Clicking the   Reset Defaults button in the lower left of this window will reset all options to their default settings.


### Core Settings

Core settings are any configuration options related to Foundry Virtual Tabletop specifically, and are always available in all game worlds. The core settings group has a series of sub-menus, as well as a collection of client and world level settings.


#### Saving Your Settings

Changes to these game settings are only applied when the   Save Changes button is clicked, and some changes may require the browser to automatically refresh in order to take effect. All settings can be reset back to their default values by clicking the   Reset Defaults button.


#### Sub-Menus

The core settings filter includes a small number of sub-menus which provide additional configuration options.


#### Setting Scopes

Setting Scopes determine if a setting affects all users, or only the user who has made the change. There are two scopes a setting can have: Client or World.

- Client Settings are saved in the browser and apply to all Worlds that are accessed from the same device using the same browser. Maximum Framerate and Performance Modes are examples of a client setting. Any user, regardless of permission, can modify their own client-level settings.
- World Settings are stored in the server-side database for the World, only apply to that single World but are common to all Users within it. By default, only a Gamemaster or User with the "Assistant Gamemaster" role can modify world-level settings.

Clicking on the Permission Configuration button of the settings menu allows the customization of specific permissions which can be assigned or removed from different User roles.

Visit the Users and Permissions documentation to learn more about User roles and what they represent.

Each Permission can be assigned to a set of Roles which are able to perform that permission. Some permissions cannot be revoked for a Gamemaster role while others can be disabled even for Gamemaster users. The image below shows the Permission Configuration form and the list which follows describes each permission capability.

Changes to Permission Configuration are only applied when the Save Configuration button is clicked and some changes may require the browser to automatically refresh in order to take effect. All settings can be reset back to their default values by clicking the Reset Defaults button.


## API References

To programmatically define game settings of any type see the following API documentation:

- The  ClientSettings Manager

Module and system developers have the capability to register their own settings and settings menus using the Foundry API. This involves working with the "ClientSettings" API (although this also manages world settings) to register settings and settings menus. Some examples are provided below, but see the API documentation for more detail.


#### Defining a Game Setting

```javascript
// Define a new setting which can be stored and retrieved
game.settings.register("myModule", "mySetting", {
  name: "Register a Module Setting with Choices",
  hint: "A description of the registered setting and its behavior.",
  scope: "client",
  config: true,
  type: String,
  choices: {
    "a": "Option A",
    "b": "Option B"
  },
  default: "a",
  onChange: value => console.log(value)
});
```

`// Define a new setting which can be stored and retrieved
game.settings.register("myModule", "mySetting", {
  name: "Register a Module Setting with Choices",
  hint: "A description of the registered setting and its behavior.",
  scope: "client",
  config: true,
  type: String,
  choices: {
    "a": "Option A",
    "b": "Option B"
  },
  default: "a",
  onChange: value => console.log(value)
});`
#### Defining a Settings Submenu

```javascript
// Define a settings submenu which handles advanced configuration needs
game.settings.registerMenu("myModule", "mySettingsMenu", {
  name: "My Settings Submenu",
  label: "The label which appears on the Settings submenu button",
  hint: "A description of what will occur in the submenu dialog.",
  icon: "fas fa-bars",
  type: MySubmenuApplicationClass,
  restricted: false
});
```

`// Define a settings submenu which handles advanced configuration needs
game.settings.registerMenu("myModule", "mySettingsMenu", {
  name: "My Settings Submenu",
  label: "The label which appears on the Settings submenu button",
  hint: "A description of what will occur in the submenu dialog.",
  icon: "fas fa-bars",
  type: MySubmenuApplicationClass,
  restricted: false
});`
#### Referencing and Assigning a Setting Value

```javascript
// Retrieve the current setting value
game.settings.get("myModule", "mySetting");
// Assign a new setting value
game.settings.set("myModule", "mySetting", "b");
```

`// Retrieve the current setting value
game.settings.get("myModule", "mySetting");
// Assign a new setting value
game.settings.set("myModule", "mySetting", "b");`