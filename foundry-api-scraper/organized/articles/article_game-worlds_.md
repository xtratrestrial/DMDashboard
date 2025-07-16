# Game Worlds | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/game-worlds/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Game Worlds


## 


## Overview

A Game World is an instance of a system with a cohesive data structure that allows for playing a tabletop game in Foundry VTT. Game worlds require a game system to be created. This article will familiarize you with the aspects of the game world menus: creating, installing, and editing. It will also discuss launching worlds, enabling safe mode, and deleting worlds.

If you are new to Foundry Virtual Tabletop and want help setting up your first game, we strongly recommend starting with: Tutorial - Gamemaster Part One


## The Game Worlds Tab

The Game Worlds tab on the main menu of the Foundry Virtual Tabletop software lists all game worlds that presently exist and allows them to be manipulated or launched. Worlds are sorted in order of how recently they were last launched, with the most recent at the top of the tab. When Foundry VTT is first installed, there will be no worlds available. However, new worlds can be created or installed easily from the Game Worlds tab using the appropriate buttons.

Foundry VTT provides access several exclusive and community-sourced premade worlds that are already set up and prepared for play. While these worlds serve as an example of what a campaign world may look like when prepared, Adventure Documents provide a much more robust way to distribute the premade content of an adventure. It is recommended that users seeking to distribute their own adventures use Adventure Documents instead of Game World packages.

To install a premade world:

- click the Install World button
- locate a world you would like to install from the list
- click the install button to the right of its entry

Note: You may also need to install the game system that is meant to be used with this game world before you will be able to launch it.

The Create New World dialog has the following entries which determine different aspects of the game world. Not all of these items can be changed once the game world has been created.


### Game Worlds

Once created, individual game worlds appear in the list on the Game Worlds tab, and can be configured, launched, and deleted from there. By default, a world will appear as a tile whose background is a thumbnail image overlaid with the world's name and some additional information.

In addition to the default Tile view, the worlds list offers two additional views- Gallery and List. You can change between them by using the appropriate buttons at the top right hand side of the tab body. Please note that for all images and instructions within this article, the Tile view was used as a reference.

By right-clicking on a Game World , you can open a context menu which offers several additional options.

Certain icons can provide users useful information or warnings before they launch the world. The possible flags are listed below.


### Launching Worlds

To launch a Game World, click on it in the list or right-click and select "Launch World" from the context menu.

Launching a world begins the process of creating a server with a live game for your players to connect to. Once a world is launched, the Join Page will be available for players to join the game from. It will display the world title, background image, next session, session time, and world description.

Users can select the user account they want to log in with, which may require a password, depending on how a game master has configured the users in the game world.

By default all newly created worlds begin with a single Gamemaster user account without a password. Additional users can be added after logging in. For more on creating users and managing their permission levels see the Users and Permissions article. Please note that attempting to log in to a user account using a password when the account itself doesn't have a password will produce a false "wrong password" response. To log into a user account that has no password, leave the password field blank.


##### Return to Setup

From the Join Page you can use the   Return to Setup option to close down the world and return to the main setup menus for Foundry VTT. Doing this will log out all users currently in the active game world. If you have an admin password set for your software you will need to provide it to use this option, unless you previously logged in as an Admin, at which point the server will automatically recognize you.

In addition to these options, Foundry VTT allows you to set a world as your default from the Application Configuration settings. This will cause Foundry VTT to launch straight into that world, bypassing the main menu entirely. You can read more about this feature and how to enable it on the Application Configuration article.


### Editing Worlds

To edit a world, select   Edit World from the world's context menu.

Once a world has been created, it will be placed into the list of available game worlds in the Game World tab of the Foundry main menus. The Edit World button opens the edit world dialog which allows you to change certain details about the game world such as the title, background image, next session date and time, and the world description.

The Create World and Edit World windows contain many of the same options. However, do note that you cannot change the game data path or game system once a Game World has been created.


##### Reset User Passwords

When this option is toggled the associated world will have all of the user passwords reset, including any gamemaster level users. This is useful for regaining access to a game world where passwords have been forgotten or lost.

To set new passwords you will need to launch the game world and enter the user management menu. You can find more information on user configuration in the Users and Permissions article.


##### Launch in Safe Configuration

It is possible to launch a world with a "Safe Configuration" to circumvent issues which might be preventing a world from loading correctly. To do this, edit the game world and enable the Launch in Safe Configuration setting, then launch the world.

When Safe Configuration is toggled on, the next time the game world is launched the following effects will be applied to it:

- Disable all active modules.
- Deactivate all scenes.
- Stop all previously playing audio.

Once a world has been launched with this setting enabled, it will automatically be turned off. This setting is especially useful for troubleshooting worlds in which bad assets, scripts, or corrupted data is preventing a game world from loading.


### Deleting Worlds

To delete a world, select the   Delete World option in the context menu.

Clicking the Delete World button will bring up a prompt to delete the world and all of its data. The process of deleting worlds includes verification to prevent accidental deletion of a game world, and requires a user to type the title of the game world into the text field before it will allow the user to click the Yes button and complete the process.

Please note: This process cannot be undone.

