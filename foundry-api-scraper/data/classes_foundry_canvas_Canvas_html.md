Source: https://foundryvtt.com/api/classes/foundry.canvas.Canvas.html

# Canvas | Foundry Virtual Tabletop - API Documentation - Version 13

The singleton PIXI.Application instance rendered on the Canvas.

## Properties

### Properties


### Accessors


### Methods


## app

The singleton PIXI.Application instance rendered on the Canvas.

---

---

A set of blur filter instances which are modified by the zoom level and the "soft shadows" setting

---

---

Configure options passed to initialize blur for the Scene and override normal behavior.
This object can be configured during the canvasInit hook before blur is initialized.

---

---

A reference to the MouseInteractionManager that is currently controlling pointer-based interaction, or null.

---

---

A singleton CanvasEdges instance.

---

---

The effects Canvas group which modifies the result of the foundry.canvas.groups.PrimaryCanvasGroup by
adding special effects.
This includes lighting, vision, fog of war and related animations.

---

---

The environment canvas group which render the primary canvas group and the effects canvas group.

---

### See

---

The singleton FogManager instance.

---

---

Record framerate performance data.

---

---

The singleton HeadsUpDisplay container which overlays HTML rendering on top of this Canvas.

---

---

A promise that resolves when the canvas is first initialized and ready.

---

---

The interface Canvas group which is rendered above other groups and contains all interactive elements.
The various foundry.canvas.layers.InteractionLayer instances of the interface group provide different
control sets for interacting with different types of foundry.abstract.Documents which can be represented
on the Canvas.

---

---

A flag to indicate whether a new Scene is currently being drawn.

---

---

Configure options passed to the texture loaded for the Scene.
This object can be configured during the canvasInit hook before textures have been loaded.

---

---

The singleton interaction manager instance which handles mouse interaction on the Canvas.

---

---

Position of the mouse on stage.

---

---

The overlay Canvas group which is rendered above other groups and contains elements not bound to stage transform.

---

---

Track objects which have pending render flags.

---

---

A perception manager interface for batching lighting, sight, and sound updates.

---

---

Configured performance settings which affect the behavior of the Canvas and its renderer.

---

---

Is the photosensitive mode enabled?

---

---

Previous position of the mouse on stage.

---

---

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a foundry.canvas.containers.CachedContainer
which is rendered to the Scene as a foundry.canvas.containers.SpriteMesh.
This allows the rendered result of the Primary Canvas Group to be affected by a
foundry.canvas.rendering.shaders.BaseSamplerShader.

---

---

The rendered canvas group which render the environment canvas group and the interface canvas group.

---

### See

---

Configure the Textures to apply to the Scene.

---

---

The renderer screen dimensions.

---

---

The framenbuffer snapshot.

---

---

The primary stage container of the PIXI.Application.

---

---

A list of supported webGL capabilities and limitations.

---

---

The visibility Canvas group which handles the fog of war overlay by consolidating multiple render textures,
and applying a filter with special effects and blur.

---

---

Configure options used by the visibility framework for special effects
This object can be configured during the canvasInit hook before visibility is initialized.

---

---

Mouse move handler priorities.
number

---

---

## activeLayer

Return a reference to the active Canvas Layer

---

---

The colors bound to this scene and handled by the color manager.

---

---

The currently displayed darkness level, which may override the saved Scene value.

---

---

The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.

---

---

Force snapping to grid vertices?

---

---

A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.

---

---

The id of the currently displayed Scene.

---

---

A flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.

---

---

An Array of all CanvasLayer instances which are active on the Canvas board

---

---

A SceneManager instance which adds behaviors to this Scene, or null if there is no manager.

---

---

Shortcut to get the masks container from HiddenCanvasGroup.

---

---

A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.

---

---

A reference to the currently displayed Scene document, or null if the Canvas is currently blank.

---

---

A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.

---

---

## _configurePerformanceMode

Configure performance settings for hte canvas application based on the selected performance mode.

---

---

Get the constrained zoom scale parameter which is allowed by the maxZoom parameter

---

The uncontrained camera position

---

---

---

Pan the canvas view when the cursor position gets close to the edge of the frame

---

The originating mouse movement event

---

---

---

Handle the cancellation of a right-mouse drag workflow the Canvas stage.

---

---

### See

---

Handle the conclusion of a right-mouse drag workflow the Canvas stage.

---

---

### See

---

Handle right-mouse drag events occurring on the Canvas.

---

---

### See

---

Handle right-mouse start drag events occurring on the Canvas.

---

---

### See

---

Handle mousewheel events which adjust the scale of the canvas

---

The mousewheel event that zooms the canvas

---

---

---

Handle window resizing with the dimensions of the window viewport change

---

---

Activate framerate tracking by adding an HTML element to the display and refreshing it every frame.

---

---

Add a filter to the blur filter list if it has the blur property.

---

The filter instance to add

---

---

---

Animate panning the canvas to a certain destination coordinate and zoom scale
Customize the animation speed with additional options
Returns a Promise which is resolved once the animation has completed

---

The desired view parameters

---

---

---

Convert client viewport coordinates to canvas coordinates.

---

The client coordinates.

---

---

---

Convert canvas coordinates to the client's viewport.

---

The canvas coordinates.

---

---

---

Create a BlurFilter instance and register it to the array for updates when the zoom level changes.

---

The desired blur strength to use for this filter

---

---

The desired quality to use for this filter

---

---

---

Deactivate framerate tracking by canceling ticker updates and removing the HTML element.

---

---

Draw the game canvas.

---

A specific Scene document to render on the Canvas

---

---

---

Get the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.

---

The collection name

---

---

---

Get the value of a GL parameter

---

The GL parameter to retrieve

---

---

---

Given an embedded object name, get the canvas layer for that object

---

---

---

Highlight objects on any layers which are visible

---

---

---

Initialize the Canvas by creating the HTML element and PIXI application.
This step should only ever be performed once per client session.
Subsequent requests to reset the canvas should go through Canvas#draw

---

---

Initialize the starting view of the canvas stage
If we are re-drawing a scene which was previously rendered, restore the prior view position
Otherwise set the view to the top-left corner of the scene at standard scale

---

---

Determine whether given canvas coordinates are off-screen.

---

The canvas coordinates.

---

---

---

Pan the canvas to a certain position and a certain zoom level.

---

The canvas position to pan to

---

---

---

Displays a Ping both locally and on other connected client, following these rules:

---

Point to display Ping at

---

---

Additional options to configure how the ping is drawn.

---

---

---

Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.

---

A desired initial position from which to begin the animation

---

---

---

Register a new onMouseMove handler with an optional priority.

---

The function to call on mouse move.

---

---

Optional priority. Higher values are called earlier.

---

---

The context in which the handler should be executed.

---

---

To know if the handler should be called on real pointer move only (not simulated)

---

---

---

When re-drawing the canvas, first tear down or discontinue some existing processes

---

---

Update the blur strength depending on the scale of the canvas stage.
This number is zero if "soft shadows" are disabled

---

Optional blur strength to apply

---

---

---

Remove all children of the display object and call one cleaning method:
clean first, then tearDown, and destroy if no cleaning method is found.

---

The display object to clean.

---

---

If textures should be destroyed.

---

---

---

Get a texture with the required configuration and clear color.

---

---

The clear color to use for this texture. Transparent by default.

---

---

The render texture configuration.

---

---

---

Create a SceneManager instance used for this Scene, if any.

---

---

---

