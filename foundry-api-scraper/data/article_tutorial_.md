# Tutorial - Gamemaster Part One | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/tutorial/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Tutorial - Gamemaster Part One


## 


## Overview

Foundry Virtual Tabletop is a powerful application with a lot of features, so it can be overwhelming to a new game-master, even if you have previous experience using virtual tabletop software. This article provides a basic introduction to the layout of Foundry VTT and gives you all of the beginning steps required for setting up a game for your players. This article will introduce you to:

- The Main Menu. Everyone has to start somewhere, and this is where every user starts with Foundry VTT!
- Installing game systems. Game systems contain all the rules and scaffolding needed to run a game and store information about it.
- Creating (or installing) Game Worlds. Game worlds take a game system and form a place for all of its data and information to live. Each game world is effectively a self-contained campaign with scenes, characters, items, and similar.
- Launching Games. Once a system's installed and a game world is made, you'll want to start it up to see what's inside.
- The Foundry User Interface. The user interface for Foundry is fairly straightforward, but it still helps to know what's what!


## The Main Menu


#### Game Worlds


#### Game Systems


#### Add-on Modules


#### Configuration

When you first launch Foundry Virtual Tabletop, it's recommended that you navigate to the Configuration tab and set an Administrator Password. This password is encrypted and allows you to secure Foundry VTT to prevent access to the main setup menu. It's also required to use the Return to Setup feature from the login page of any currently hosted world.


#### Updating the Software


## Installing a Game System

Before you can create your first world you will first need to install a Game System. Game Systems set the rules by which your world operates, whether this is one of the more common rulesets from a major publisher, or if you prefer to use something like the Simple Worldbuilding System. Each world has a Game System tied to it. Without one installed, it is impossible to create a world.

Foundry VTT provides a package installation system available from the Setup screen for the installation of Game Worlds, Game Systems, and Add-on Modules. The "Install System" button at the bottom of each of these tabs on the Setup screen will allow you to install the package type for that tab.


#### The Game System Installation Menu

- From the Setup screen navigate to the Game Systems tab
- Click the "Install System" button at the bottom of the menu
- A package installation browser will appear allowing you to see all of the Game Systems currently available for Foundry VTT
- You can search this listing with the search field, or filter the listing using package categories
- Once you have chosen a Game System, click the install button to the right of the system's name, and FVTT will download and install it for you

Game Systems which have not yet been officially released can also be installed manually if you have a link to the system.json file (called the manifest url) for that system, by pasting the URL into the Manifest URL field and clicking the install button.

`system.json`
#### Updating Game Systems

As a reminder, it is wise to periodically update installed systems from the Game System tab of the main Foundry VTT menus. You can update game systems individually by clicking the associated "check update" button in the system's entry, or use the "update all" button at the bottom of the tab to check all of your installed systems for updates, which will then be automatically applied if one is available.


#### About Modules

It is a common pitfall for some users to rush immediately to install Add-on Modules without first learning to use the basic features of Foundry VTT. While modules provide a large variety of customization and changes to the way core Foundry VTT features work, they can carry with them some compatibility issues and should be installed in small increments to allow you to be certain which features were added by community-supported modules and which features are part of the core software.

Always remember, the first step in troubleshooting any issue you may experience in Foundry VTT is to disable all modules.


## Creating A New World

Now that you have a Game System, navigate to the Game Worlds tab, from here you will create your very first Game World! Clicking the "Create World" button on this tab presents a dialog menu.


#### Editing an Existing World

The Edit Game World button can be used at any time after a world has been created, allowing you to display this menu again in order to change details about your game world such as the description, next session, background image, or title! It can also be used to reset active modules or reset user access keys without having to launch the world first. If you are having trouble launching your world or logging in, simply edit the world and check the appropriate box to reset modules or user access keys as necessary.


#### The Create World Menu

Once you have filled out these fields to your liking, click Create World to finalize your Game World!


## Installing a Game World

Foundry VTT offers a number of adventures and campaigns which come already prepared with everything you need to run them with your players. Similar to the installation of Game Systems, these worlds can be installed from the Game Worlds tab and will automatically install all content, including the Game System for you.


#### The Game World Installation Menu

- From the Setup screen, navigate to the Game Systems tab
- Click the "Install World" button at the bottom of the menu
- A package installation browser will appear allowing you to see all of the Game Worlds currently available for Foundry VTT
- You can search this listing with the search field, or filter the listing using package categories
- Once you have chosen a Game World, click the install button to the right of the World's Title, and FVTT will download and install it for you

As with Game Systems, Game Worlds which have not yet been officially released can also be installed manually using the world.json Manifest URL field.

`world.json`
## Finding Installed Worlds, Systems, and Modules

When you've created a number of worlds or installed multiple systems and modules it can be difficult to find one specifically. To quickly get access to a specific package you can use the Filter input in the top-right of each tab. Just start typing the name of the package you're looking for and the list will narrow down to show only items that match. If there are no matching packages in that tab you'll see a 'No packages matched your filter.' message and you may want to check the package installer to download it.


## Launching Your New World

Once your Game World has been created, simply clicking the "Launch World" button to the right of the world's Title will launch it the world and take you to the game's login screen. From here you can select the username to log in as (by default all worlds begin with a single gamemaster account without a password) or return to the setup menu.

Returning to Setup: If you want to go back to the setup menus from the log in page, you can click the   Return to Setup option to close down the world and return to the main setup menus for Foundry VTT. If you have an admin password set for your software you will need to provide it to use this option.

Select the gamemaster player, and log in.


## Introduction to the UI

Once you have joined the game session, you'll see the core user interface which you and your players will use to plan and play games in FVTT. The image below details the major elements.


#### Conclusion of Part 1

This concludes part one of the Getting Started Tutorial!

- Continue to Tutorial - Gamemaster Part Two.
- Refer your players to the Tutorial - Player Orientation.

