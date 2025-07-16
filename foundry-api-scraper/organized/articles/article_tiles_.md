# Tiles | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/tiles/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Tiles


## 


## Overview

Foundry Virtual Tabletop includes support for placing Tiles, which are individual pieces of artwork displayed above the background image of the scene to add decorations, props, or custom features to be interacted with or to change the aesthetics of the scene.

This article will familiarize you with the two methods of placing tiles into scenes, and how to manipulate and configure them once placed.


## Tile Controls

The Tile Controls panel can be opened by clicking on the stacked cubes icon ( ) on the left-hand side of the user interface. This opens the tool palette, and allows you to draw new tiles or manipulate existing tiles segments.


## Placing Tiles

To place or create Tiles, activate the Tiles Layer from the controls palette on the left hand side of the screen, and select one of the tile placement tools. Depending on which tool you select, the process is slightly different:

Once a tile has been created in a scene, they can be moved and resized at will with the Select Tiles tool ( ). You can also edit existing tiles by double clicking on them, which opens the tile configuration panel. This configuration panel allows you to modify the appearance, dimensions, and positioning of the tile, as well as enabling options that allow it to function as an overhead tile with special occlusion modes.


#### Asset Grid Size

In the tile browser, you have an option to set an "asset grid size" which informs Foundry VTT what size of grid it should scale the assets for. This should generally match your current scene grid scale, but can be used to automatically size up or size down assets when they are being dragged from the tile browser. Setting a grid size lower than your current grid size will cause all tiles you place to be larger, while setting the asset grid size to be higher than your current scene grid size will cause all tiles you place to be smaller.

Once a Tile is created, you can configure all the details of the Tile by double-clicking on the Tile. Once any changes to the Tile have been made, click the "Update Tile" button to confirm your changes. The tile configuration options are described below:


### Basic

`.webm`
### Overhead

The overhead tab of the tile configuration menu tab allows you to configure how a tile interacts with the canvas as an overhead tile.

Please be aware that token occlusion for overhead tiles does not update during a token's movement.


### Animation

Various quick-actions are available for tiles through the Tile in the HUD, which is accessed on a single right-click on an already selected tile.


## API References

To interact with Tiles programmatically, consider using the following API concepts:

- The  Tile Object
- The  TilesLayer Canvas Layer
- The  TileConfig Application

