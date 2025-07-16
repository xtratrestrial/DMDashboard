# Users and Permissions | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/users/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Users and Permissions


## 


## Overview

Each player who connects to a Foundry Virtual Tabletop session is a User. Each user is assigned a role which determines what the user has permission to do within the confines of the game world. Permissions can be configured in order to more finely control the features available to users in any hosted World. Foundry VTT has two tiers of permission settings which can be configured to allow as much or as little restriction as needed for your game and your users.


## User Management

As one of several layers of security for Foundry, we strongly recommend setting at least a simple password for each user, especially for GM-level users.

Users are created within an active Game World, and the set of users is specific to that world. There are no global, cross-world, user accounts within Foundry VTT, each World maintains it's own player list and user-level permission controls.

To manage a world's users, click the Game Settings icon ( ) on the right sidebar, and then click on   User Management. This will take you to the user management screen. From here you can add new users, remove existing users, change passwords, and change roles.


#### Configuration Elements

Each User has a specific role which configures their basic permission set of actions they can perform within a Foundry VTT game. The role for each User is configured using the User Management page described above. Each of the role levels and their meanings are described below:

The User is blocked from taking actions in Foundry Virtual Tabletop. You can use this role to temporarily or permanently ban a user from joining the game.

The User is able to join the game with permissions available to a standard player. They cannot take some more advanced actions which require Trusted permissions, but they have the basic functionalities needed to operate in the virtual tabletop.

Similar to the Player role, except a Trusted User has the ability to perform some more advanced actions like create drawings, measured templates, or even to (optionally) upload media files to the server.

A special User who has administrative control over this specific World. Game Masters behave quite differently than Players in that they have the ability to see all Documents and Objects within the world as well as the capability to configure World settings.

A special User who has many of the same in-game controls as a Game Master User, but does not have the ability to perform administrative actions like modifying World-level settings.

Actors, Items, Journals, Roll Tables, and Cards can have theses settings changed by right clicking them in the main sidebar directory and choosing ( ) Configure Ownership. This opens the configuration panel which allows you to set what each world user can do with the document being configured. By default all of the listed document types begin with no ownership settings, and are only visible and editable by gamemaster accounts. The following ownership levels are available:

Right clicking on a username in the players list located in the bottom-left of the UI allows you to open the   User Configuration panel. If you are a user with the player or trusted player role you can only open your own user configuration, but gamemasters and assistant gamemasters can configure any user they want. This user configuration window allows that user to have an actor assigned to them, and determines a few other cosmetic settings.


## API References

To interact with Users programmatically, you will primarily use the following API concepts:

- The @API[classes/client.User, User Document
- The @API[classes/client.Users, Users Collection
- The @API[classes/client.UserConfig, UserConfig User Configuration Application

