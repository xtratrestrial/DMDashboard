# Scenes | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/scenes/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Scenes


## 


## Overview

Scenes represent the areas of a World that the players may explore. Scenes may depict a variety of settings ranging from world or regional maps all the way down to small buildings or dungeons. At each point in time, one Scene is classified as the active scene. The same scene is active for all users. For each individual user a different Scene may be treated as the viewed scene, which is the area currently rendered on the game canvas for that user.


## Scenes Directory

Scenes are created and managed from the Scene Directory sidebar.


#### Sidebar Elements


### Creating New Scenes

To create a new scene, click the   Create Scene button in the Scene Directory sidebar. This will create a dialog box prompting you to name your scene. Once you have named your scene click Create New Scene. This will add your scene to the directory sidebar, and open the configuration window for you to edit and fill out.

Once you are done editing your scene click "Save Changes" to make them final. All created scenes can be found in the Scenes Directory and can edited, viewed or activated as needed.

To edit a scene after you've created it, navigate to the Scenes Directory and click on the name of the scene you want to edit, this will reopen the configuration window directly.

You can also edit an existing scene by right-clicking on the scene and selecting the   Configure option. This context menu is accessible from either in the top navigation bar or in the sidebar on the right. For more on the right-click context menu options, see the section below.

When a new World is first created, the Scenes Directory will initially be empty. Though scenes can be created fairly quickly from scratch, it may be desirable to import scenes from pre-configured sources. This can be done in one of two ways: by importing scenes from a compendium pack, or by importing scenes data directly from an external JSON file.


#### Importing from Compendium

A scene can be imported from a compendium by either dragging the scenes from the compendium into the Scenes Directory, or by right-clicking the scene in the compendium and selecting "Import." For more information on compendia and how to use them, see the Compendium Packs article.


#### Importing from JSON files

If you have exported scenes that you would like to bring into a game world you can do so by loading the scene info directly from a JSON file. This can be accomplished by right-clicking any scene in the Directory and selecting "Import Data." This will open a file browser that allows you to select the desired JSON file to import. Once selected the JSON file's data overwrite the existing scene you imported the data into.

You can export an scene's data by right-clicking a scene in the Directory and selecting the "Export Data" option. This will prompt you to save a JSON file with the scene data in it.


## Resizing an Existing Scene

Sometimes, when setting your scene up with all the lights, walls, tokens and other effects you wish to add, you realise that you would like the map to be more detailed and larger. When you add a higher resolution background image to your scene, you can update the image dimensions to increase the displayed resolution for your players.

For your convenience, Foundry Virtual Tabletop will attempt to reposition all tokens, tiles, lights, walls, measured templates, ambient sounds, drawings, or any other canvas placeables when the scene dimensions change. Please note that if you make very drastic changes in sizes, you may need to reposition a few placed objects.


## Scene Configuration

The Scene configuration menu allows you to customize the structure and appearance of each area within your world. This configuration is displayed automatically when a new Scene is created, but can always be accessed by left-clicking on the Scene in the sidebar directory, or by right clicking on the Scene in the top navigation bar and selecting Configure.

The scene configuration menu is broken up into four sections: Basic settings, Grid settings, Lighting settings, and Ambience settings.

The Basic setting tab contains all of the most commonly used and fundamental settings for how a scene is configured.

The Toggle Navigation feature when turned on will ensure that the scene will appear in the Navigation bar at the top of the screen. When toggled off the scene will not be shown in the Navigation bar. Scenes in the Navigation bar can be quickly hidden by right-clicking their name and clicking the "toggle navigation" option. This can only be done on scenes that are not currently active.

This configuration section is used to modify the grid type and alignment which is displayed as an overlay atop the Scene. Even if you are using a map that has a pre-drawn grid it is important to configure this section because the Foundry grid dictates the positions where Tokens are placed, how distance is measured, or how Measured Templates identify target spaces.

Note: Changing the grid size of a map may change the alignment of walls, lights, notes, and tiles. It is recommended you decide on grid size and set it before you begin adding details to the scene to avoid having to do additional work.

This allows you to set the the rendered width and height of your scene in pixels. The application will figure out both automatically when you select a new scene background image, but you can override these dimensions using the fields provided. The link button maintains the aspect ratio of your background image.

If you want to undo your changes to a scene's dimensions, simply clear both fields manually and save the scene, the application will automatically detect the dimensions and reset them to match the image.

Note: When editing a scene's padding after a scene is created Foundry will attempt to keep placed tokens and tiles in the padding space if its area is reduced, but the change in overall scene dimension will displace walls, lights, tokens, tiles, and notes. It is advised that you not change a scene's padding once you begin detailing a scene unless you're willing to rework any out of place assets.


#### Grid Types

Foundry Virtual Tabletop supports multiple grid types which can be configured on a per-Scene basis. The following options are supported:

- Gridless - No fixed grid is used on this Scene allowing free-form point-to-point measurement without grid lines.
- Square - A square grid is used with width and height of each grid space equal to the chosen grid size.
- Hexagonal Columns, Odd - A column-wise hexagon grid (flat-topped) where odd-numbered rows are offset.
- Hexagonal Columns, Even - A column-wise hexagon grid (flat-topped) where even-numbered rows are offset.
- Hexagonal Rows, Odd - A row-wise hexagon grid (pointy-topped) where odd-numbered columns are offset.
- Hexagonal Rows, Even - A row-wise hexagon grid (pointy-topped) where even-numbered columns are offset.


#### Understanding Foundry Grids

Configuration of the Grid in Foundry uses three key concepts:

- The width (in pixels) of the image.
- The height (in pixels) of the image.
- The grid size (in pixels); the number of pixels which represent a single grid space.

Foundry Virtual Tabletop enforces a minimum grid size of 50px. If your map uses a grid size lower than 50px you can still use it by increasing the background size. The easiest solution is to multiply all 3 of the width, height, and grid size by two to double every dimension.

If your background image has a visible grid already incorporated into the image and you are having trouble aligning the Foundry grid with the pre-existing one, be sure to use the Grid Alignment Tool by clicking the angled-ruler icon to the right of the Grid Type dropdown which has a specialized tool and workflow to assist with this process.


#### Determining Existing Grid Sizes in Images

As not all pre-gridded maps may include their grid scale and will require you to guess or otherwise determine their intended grid scale. It is possible to get a fairly accurate grids scale by examining the dimensions of the intended background image and counting the number of grid spaces and dividing the width and height by the number of vertical and horizontal squares present. For example, a map with a pre-drawn square grid which has 22 grid spaces in width and 18 grid spaces in height with dimensions of 3080px by 2520px will have an intended grid size for this map is 140px per square.

Scenes which are displayed in the Navigation bar will appear at the top of the screen. The navigation bar is intended to act similarly to "bookmarks" for commonly used Scenes which are expected to be used during the game session. You may have many more Scenes in your World than you wish to keep in the Navigation bar at any given time. Remember that players can access Scenes in the navigation bar also if they are not set to GM Only.


### Navigation Bar Context Menu


### Scenes Sidebar Context Menu

All Scenes, including those not displayed in the Navigation Bar, are available in the Scenes sidebar directory which is denoted by a tri-fold map icon ( ). Each Scene in the sidebar has additional context menu options available.


## API References

To interact with Scenes programmatically, you will primarily use the following API concepts:

- The  Scene Document
- The  Scenes Collection
- The  Scene Configuration Application

