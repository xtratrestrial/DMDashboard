# Measurement and Templates | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/measurement/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Measurement and Templates


## 


## Overview

The Measurement Control toolbar, when enabled, provides access to tools for accessing and controlling the placement of measured templates. This tool allows you to determine the shape of a spell, or area effect, and determine what spaces will be affected. This article will go over how to lay down measurement templates, the types of shapes available, and how to modify a template once it's been placed into a scene.


## Measurement Methods

There are three main ways to measure distance with Foundry VTT:


## The Distance Measurement Ruler

The Distance Measurement Ruler can be toggled on or off. When it is active, clicking anywhere in the map begins measuring distance from that point.

Using this tool, you can add waypoints as needed to perform complicated measurements or to account for elevation changes. If waypoints are at different elevations, the Euclidean difference between them is automatically calculated.


### Token Drag Measurement and the Measure Distance Ruler

The Token Drag Measurement ruler and the existing Distance Measurement Ruler share the same controls for setting waypoints and changing elevation, but there is an important difference between them. The Measure Distance ruler measures distance, while the Token Drag Measurement ruler measures movement cost.

Typically, these calculations are the same, but if part of the area is "difficult terrain" and includes one of the new "Modify Movement Cost" Scene Region Behaviors, the two rulers will give different results.

To make way for Token drag measurement, we decided to change the Measure Distance ruler so that it is now toggled on and off using a new configurable key ( R by default) instead of CTRL. Alternatively, you can still use the "Measure Distance" button, located in the Token Controls at the top-left of your screen.


### Distance Measurement Ruler Controls

You can toggle the Distance Measurement Ruler on or off using two different methods:

You can click the Distance Measurement Ruler button to activate the Distance Measurement Ruler. You can turn it off again by selecting a different control or pressing the Distance Measurement Ruler key (see below).

Unlike most measurement-related controls, it is located in the Token controls for convenience.

You can also quickly toggle the Distance Measurement Ruler on or off by pressing a single key, R by default. If you prefer another key, you can choose a different one using the "Configure Controls" settings.

You can add and remove waypoints using the same controls as the Token Drag Measurement process.

NOTE: In V12, distance measurement was performed with the CTRL key and tokens could move along the measured route with Spacebar.


## Token Drag Measurement

When you drag a token from one location to another, in V13 measurement is now automatically performed along its route.

There are two different ways to drag a Token using waypoints. Use the process that feels more natural to you.


#### Using CTRL+Click

While dragging a Token and holding down the CTRL button:

- Release the left mouse button, then left-click the map to place waypoints
- Right-click anywhere to remove the last waypoint you placed

When you finish plotting your Token's path, release the CTRL button, then:

- Left-click the final destination to move the Token, or
- Right-click anywhere to cancel the entire movement


#### Using a Keybinding

While dragging a Token:

- Press the configured "Place Waypoint" key ( F by default) to add a waypoint at the cursor's location'
- Press ALT and the same "Place Waypoint" key to remove the last waypoint you placed ( ALT + F by default)
- Right-click anywhere to cancel the entire movement


#### Additional Controls

Whichever method you use, these controls are also available:

While dragging a token, you can raise the elevation of the next waypoint with one of the keys bound to "Ascend Elevation" ( Numpad+, or E by default).

Similarly, you can lower the next waypoint with one of the keys bound to "Descend Elevation" ( Numpad-, or Q by default).

`[Hidden]`Typically, the elevation is always changed by an amount equal to the grid size. On a map with a 5 foot grid, Tokens go up and down 5 feet at a time.


## Measured Template Controls

To place a measured template of any kind, select the type you want to place, then click a point in the scene, and drag out the selected measurement shape to the desired size. Once you release your mouse button the template will be created. If your scene is using the Grid or Hex grid types it also shows you all the spaces affected. Gridless maps will not show highlighted spaces, though it will still show the area of the effect.

You can hover your mouse over an existing template's origin point (appears as a starburst icon) and use Shift + your mouse scroll wheel to rotate a cone or ray template around its starting point. Control + scroll wheel allows you to make smaller adjustments to the template. To move an existing template click and drag the template by the starburst icon that represents the template's origin point. Templates will automatically snap to grids spaces and grid intersections. You can precisely place them by holding down Shift or Control while dragging them.

To delete a template, simply hover your mouse over the origin point, and press the delete key. Gamemasters can use the trash can icon to remove all measurement templates from a scene. To hide a template, simply right-click on the origin point. The icon will turn orange, indicating the template is hidden from view.

The measurement template configuration screen can be accessed by double clicking any existing template in a scene. From there you can change the type of template to any of the types noted above, and directly manipulate various qualities of the drawn template.


## Cone Template Type

You can change the appearance of the end of the Cone template shape and whether it is rounded (default) or flat. This setting can be changed from the   Core Settings tab found in the Game Settings menu. To lean more about this menu see the Game Settings article.

This directly affects how many squares are affected at the farthest edge of a cone. The rounded setting makes the cones taper slightly at the edge, while the flat setting makes sure the widest part of the cone and most affected squares is always the furthest point from the origin.


## API References

To interact with AmbientLights programmatically, consider using the following API concepts:

- The  MeasuredTemplate Object
- The  TemplateLayer Canvas
- The  MeasuredTemplateConfig Application
- The  Ruler Utility
- The  Token Ruler

