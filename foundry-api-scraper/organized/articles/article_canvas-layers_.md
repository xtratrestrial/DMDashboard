# Canvas Layers | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/canvas-layers/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Canvas Layers


## 


## Overview

This document will go over the concepts and functions within the canvas layers of Foundry VTT. The canvas is where all game scenes are built and played. It contains the following layers: background, foreground, sound, notes, lights, walls, tiles, and actors. Each layer contains different things, has specific functions and features, and interacts with other layers in specific ways.

This article details the layers from the lowest layer first and ends on to the highest, topmost layer.

Links to articles explaining the tools and functionality of these layers will be provided.


### The background image layer

The background layer is an image which is set during scene creation to serve as the backdrop for a scene. It usually represents the ground, stairs, tree stumps, rocks, wooden flooring and similar objects in a scene which will be under the player character's feet. These background images can be static or animated, and generally do not feature transparency. They are rendered at the lowest level and always appear under anything else on the canvas. Scenes without a background image simply display a canvas that uses the scene background color.

Backgrounds are setup via Scenes.


### Token Actors

The Actors layer contains all actors in a scene, such as player characters, shopkeepers, monsters, and similar. These actors are placed above the background and any tiles, and will reveal what's hidden beneath overhead tiles. Actors will not cause the foreground layer to be occluded by moving under it, however.


### Tile Layers

These layers collectively contain all of the Tiles in a game scene, and are special in that they can be drawn above or under other layers as needed.


#### Standard Tiles

The standard or "underfoot" tile layer consists of any tiles that have not had their Overhead toggle set. These tiles are drawn under Actors, and are especially handy for representing ground cover, furniture, obstacles, damage to the ground, and similar features which actors can (usually) traverse over. They can also be used to block movement, sound, and light/vision when combined with walls.


#### Overhead Tiles

The overhead tile layer consists of any tiles that have had their Overhead toggle turned on. These tiles rest atop everything except for walls, light and sound, unless the tile has been set to be a "Roof" tile, in which case it will block the lighting layer for any actors not also under the tiles. These overhead tiles allow for GMs to create building rooves, tree crowns, arches, and similar overhead art that blocks vision of what's below until a token moved under it.


### The foreground image layer

The foreground layer, similar to the background, is set during scene creation, and is the same size as the scene itself. However, this layer is drawn over the layers below it, allowing the map creator to add art which is always visible over other tiles, background art, and actors. This is especially useful for building walls, structure shadows, and outcroppings which actors can move under partially. The foreground layer is unique in that it does hot have any occlusion when actors move under it, unlike overhead tiles.

Foreground layer images also need some level of transparency or they will make viewing the lower layers impossible.

Backgrounds are setup via Scenes.


### Weather

The weather contains all of the weather effects which are laid over the entirety of a scene. Overhead tiles marked as a roof can block weather for anything under them. Weather is set via the Scenes configuration window under the Ambience tab.


### The Effects Layer

This layer contains lighting and vision, which affect the appearance of all layers under them, and control how much of it a controlled token with vision can see. The Lighting system works in tandem with the walls layer to calculate this.


### The Template Layer

The template layer contains all of a scene's Measurement and Templates overlays which are used for representing areas for things like spells, abilities, and hazards.


### The GM layers

The Game Master layers are special in that they are only ever visible to users with the gamemaster or assistant gamemaster roles while using the tools associate with those layers. However, these layers still affect the game canvas and other users in different ways.


#### The Sound Layer

The sounds layer contains all Ambient Sounds emitters which cast sounds into the environment. There sound sources are only visible while directly interacting with the sound layer, but can be heard by any tokens on the canvas that move into their radius.


#### The Walls Layer

The walls layer contains all of the various Walls on the canvas, which block light, vision, and sound. Walls are only visible while interacting with the layer, but affect what all other tokens can perceive and controls token navigation through scenes.

