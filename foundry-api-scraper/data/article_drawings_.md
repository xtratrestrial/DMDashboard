# Drawing Tools | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/drawings/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Drawing Tools


## 


## Overview

Drawing tools can be used to allow the GM and users to annotate the map with freehand or shaped drawings. The appearance of drawings can be pre-configured using defaults, or individual drawn shapes may have their appearance changed after they have been placed.

This article will teach you how to place and edit drawings in a scene.


## Drawing Controls

The drawing Controls panel can be opened by clicking on the pencil icon ( ) on the left-hand side of the user interface. This opens the tool palette, and provides you with the tools necessary to create new drawings or manipulate existing ones.


### Placing Drawings

Placing drawings into a scene is extremely simple, and requires the following steps:

- Select the drawing tool. This is a pencil icon on the left of the Foundry VTT UI.
- Select the type of drawing you want to create. These include rectangles, ellipses, polygons, freehand and text.
- Click and drag out the shape you want (for rectangle, ellipse, and text) or click to place points (for polygon), or click and hold to actively draw (with freehand).

Once a drawing is created the drawing select tool allows you to select and move the drawing around the scene as you need. You can also right click on the drawing to quickly toggle the drawing's visibility, or to move it forward or backward for the purposes of determining if it sits on top of or below other drawings in the same area.


#### Default Drawing Configuration

The default appearance of drawings may be configured by using the "Configure Drawing" tool. This sets the defaults your drawings will adhere to when placed, and the defaults are specific to each user and their drawing tools.

The tabs of this menu are identical to the similarly named tabs of the individual drawing configuration menu, therefore you can reference the specific tab explanations above for what they do, and how they affect your drawings.


#### Drawing Tool Permissions

By default, players do not have permission to use Drawing tools, while Trusted players and Assistant GMs have access to the drawing tools enabled by default. If you wish to allow or revoke permissions to the drawing tools, you can do so from the "Use Drawing Tools" section of the Permission Configuration in the Game Settings menu.


## Configuring Drawings

Individual drawings can be modified after their placement by double clicking the drawing with the selection tool. Once the configuration menu is loaded, you will have access to multiple tabs that let you determine the specific appearance of the drawing's various aspects. The available tabs are be explained below.


## API References

To interact with Drawings programmatically, consider using the following API concepts:

- The  Drawing Object
- The  DrawingsLayer Canvas Layer
- The  DrawingConfig Application

