# Canvas | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.Canvas.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- Canvas


# Class Canvas

The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js
library. The canvas is comprised by an ordered sequence of layers which define rendering groups and collections of
objects that are drawn on the canvas itself.


### Hook Events

hookEvents.canvasConfig
hookEvents.canvasInit
hookEvents.canvasReady
hookEvents.canvasPan
hookEvents.canvasTearDown


#### Example: Canvas State

```javascript
canvas.ready; // Is the canvas ready for use?canvas.scene; // The currently viewed Scene document.canvas.dimensions; // The dimensions of the current Scene.
Copy
```

`canvas.ready; // Is the canvas ready for use?canvas.scene; // The currently viewed Scene document.canvas.dimensions; // The dimensions of the current Scene.`
#### Example: Canvas Methods

```javascript
canvas.draw(); // Completely re-draw the game canvas (this is usually unnecessary).canvas.pan(x, y, zoom); // Pan the canvas to new coordinates and scale.canvas.recenter(); // Re-center the canvas on the currently controlled Token.
Copy
```

`canvas.draw(); // Completely re-draw the game canvas (this is usually unnecessary).canvas.pan(x, y, zoom); // Pan the canvas to new coordinates and scale.canvas.recenter(); // Re-center the canvas on the currently controlled Token.`
##### Index


### Properties


### Accessors


### Methods


## Properties


### app

The singleton PIXI.Application instance rendered on the Canvas.


### blurFilters

A set of blur filter instances which are modified by the zoom level and the "soft shadows" setting


### blurOptions

Configure options passed to initialize blur for the Scene and override normal behavior.
This object can be configured during the canvasInit hook before blur is initialized.


### currentMouseManager

A reference to the MouseInteractionManager that is currently controlling pointer-based interaction, or null.


### edges

A singleton CanvasEdges instance.


### effects

The effects Canvas group which modifies the result of the foundry.canvas.groups.PrimaryCanvasGroup by
adding special effects.
This includes lighting, vision, fog of war and related animations.


### environment

The environment canvas group which render the primary canvas group and the effects canvas group.


#### See

- Canvas#primary
- Canvas#effects


### fog

The singleton FogManager instance.


### fps

Record framerate performance data.


### hud

The singleton HeadsUpDisplay container which overlays HTML rendering on top of this Canvas.


### initializing

A promise that resolves when the canvas is first initialized and ready.


### interface

The interface Canvas group which is rendered above other groups and contains all interactive elements.
The various foundry.canvas.layers.InteractionLayer instances of the interface group provide different
control sets for interacting with different types of foundry.abstract.Documents which can be represented
on the Canvas.


### loading

A flag to indicate whether a new Scene is currently being drawn.


### loadTexturesOptions

Configure options passed to the texture loaded for the Scene.
This object can be configured during the canvasInit hook before textures have been loaded.


### mouseInteractionManager

The singleton interaction manager instance which handles mouse interaction on the Canvas.


### mousePosition

Position of the mouse on stage.


### overlay

The overlay Canvas group which is rendered above other groups and contains elements not bound to stage transform.


### pendingRenderFlags

Track objects which have pending render flags.


### perception

A perception manager interface for batching lighting, sight, and sound updates.


### performance

Configured performance settings which affect the behavior of the Canvas and its renderer.


### photosensitiveMode

Is the photosensitive mode enabled?


### previousMousePosition

Previous position of the mouse on stage.


### primary

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a foundry.canvas.containers.CachedContainer
which is rendered to the Scene as a foundry.canvas.containers.SpriteMesh.
This allows the rendered result of the Primary Canvas Group to be affected by a
foundry.canvas.rendering.shaders.BaseSamplerShader.


### rendered

The rendered canvas group which render the environment canvas group and the interface canvas group.


#### See

- Canvas#environment
- Canvas#interface


### sceneTextures

Configure the Textures to apply to the Scene.

Textures registered here will be automatically loaded as part of the TextureLoader.loadSceneTextures workflow.
To be loaded, a texture must be added to this record before or during the "canvasInit" hook.

After textures are loaded for the Scene, the values of this record are replaced with direct references to the
PIXI.Textures that were loaded.


### screenDimensions

The renderer screen dimensions.


### snapshot

The framenbuffer snapshot.


### stage

The primary stage container of the PIXI.Application.


### supported

A list of supported webGL capabilities and limitations.


### visibility

The visibility Canvas group which handles the fog of war overlay by consolidating multiple render textures,
and applying a filter with special effects and blur.


### visibilityOptions

Configure options used by the visibility framework for special effects
This object can be configured during the canvasInit hook before visibility is initialized.


### StaticMOUSE_MOVE_HANDLER_PRIORITIES

`Static`Mouse move handler priorities.
number


## Accessors


### activeLayer

- get activeLayer(): CanvasLayerReturn a reference to the active Canvas Layer
Returns CanvasLayer

Return a reference to the active Canvas Layer


#### Returns CanvasLayer


### colors

- get colors(): ColorThe colors bound to this scene and handled by the color manager.
Returns Color

The colors bound to this scene and handled by the color manager.


#### Returns Color


### darknessLevel

- get darknessLevel(): numberThe currently displayed darkness level, which may override the saved Scene value.
Returns number

The currently displayed darkness level, which may override the saved Scene value.


#### Returns number


### dimensions

- get dimensions(): null | Readonly<CanvasDimensions>The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.
Returns null | Readonly<CanvasDimensions>

The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.


#### Returns null | Readonly<CanvasDimensions>


### forceSnapVertices

- get forceSnapVertices(): booleanForce snapping to grid vertices?
Returns boolean

Force snapping to grid vertices?


#### Returns boolean


### grid

- get grid(): null | BaseGrid<GridCoordinates2D, GridCoordinates3D>A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.
Returns null | BaseGrid<GridCoordinates2D, GridCoordinates3D>

A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.


#### Returns null | BaseGrid<GridCoordinates2D, GridCoordinates3D>


### id

- get id(): null | stringThe id of the currently displayed Scene.
Returns null | string

The id of the currently displayed Scene.


#### Returns null | string


### initialized

- get initialized(): booleanA flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.
Returns boolean

A flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.


#### Returns boolean


### layers

- get layers(): CanvasLayer[]An Array of all CanvasLayer instances which are active on the Canvas board
Returns CanvasLayer[]

An Array of all CanvasLayer instances which are active on the Canvas board


#### Returns CanvasLayer[]


### manager

- get manager(): null | SceneManagerA SceneManager instance which adds behaviors to this Scene, or null if there is no manager.
Returns null | SceneManager

A SceneManager instance which adds behaviors to this Scene, or null if there is no manager.


#### Returns null | SceneManager


### masks

- get masks(): Container<DisplayObject>Shortcut to get the masks container from HiddenCanvasGroup.
Returns Container<DisplayObject>

Shortcut to get the masks container from HiddenCanvasGroup.


#### Returns Container<DisplayObject>


### ready

- get ready(): booleanA flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.
Returns boolean

A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.


#### Returns boolean


### scene

- get scene(): null | documents.SceneA reference to the currently displayed Scene document, or null if the Canvas is currently blank.
Returns null | documents.Scene

A reference to the currently displayed Scene document, or null if the Canvas is currently blank.


#### Returns null | documents.Scene


### Staticlayers

`Static`- get layers(): Record<string, CanvasLayer>A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.
Returns Record<string, CanvasLayer>

A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.


#### Returns Record<string, CanvasLayer>


## Methods


### _configurePerformanceMode

- _configurePerformanceMode(): CanvasPerformanceSettingsInternalConfigure performance settings for hte canvas application based on the selected performance mode.
Returns CanvasPerformanceSettings

`Internal`Configure performance settings for hte canvas application based on the selected performance mode.


#### Returns CanvasPerformanceSettings


### _constrainView

- _constrainView(position: Partial<CanvasViewPosition>): CanvasViewPositionInternalGet the constrained zoom scale parameter which is allowed by the maxZoom parameter
Parametersposition: Partial<CanvasViewPosition>The uncontrained camera position
Returns CanvasViewPositionThe constrained position
- position: Partial<CanvasViewPosition>The uncontrained camera position

`Internal`Get the constrained zoom scale parameter which is allowed by the maxZoom parameter


#### Parameters

- position: Partial<CanvasViewPosition>The uncontrained camera position

The uncontrained camera position


#### Returns CanvasViewPosition

The constrained position


### _onDragCanvasPan

- _onDragCanvasPan(event: MouseEvent): undefined | Promise<boolean>InternalPan the canvas view when the cursor position gets close to the edge of the frame
Parametersevent: MouseEventThe originating mouse movement event
Returns undefined | Promise<boolean>
- event: MouseEventThe originating mouse movement event

`Internal`Pan the canvas view when the cursor position gets close to the edge of the frame


#### Parameters

- event: MouseEventThe originating mouse movement event

The originating mouse movement event


#### Returns undefined | Promise<boolean>


### _onDragRightCancel

- _onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): voidInternalHandle the cancellation of a right-mouse drag workflow the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns voidSee
- event: FederatedEvent<UIEvent | PixiTouch>

`Internal`Handle the cancellation of a right-mouse drag workflow the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns void


#### See


### _onDragRightDrop

- _onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidInternalHandle the conclusion of a right-mouse drag workflow the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns voidSee
- event: FederatedEvent<UIEvent | PixiTouch>

`Internal`Handle the conclusion of a right-mouse drag workflow the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns void


#### See


### _onDragRightMove

- _onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): voidInternalHandle right-mouse drag events occurring on the Canvas.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns voidSee
- event: FederatedEvent<UIEvent | PixiTouch>

`Internal`Handle right-mouse drag events occurring on the Canvas.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns void


#### See


### _onDragRightStart

- _onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): voidInternalHandle right-mouse start drag events occurring on the Canvas.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns voidSee
- event: FederatedEvent<UIEvent | PixiTouch>

`Internal`Handle right-mouse start drag events occurring on the Canvas.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns void


#### See


### _onMouseWheel

- _onMouseWheel(event: WheelEvent): voidInternalHandle mousewheel events which adjust the scale of the canvas
Parametersevent: WheelEventThe mousewheel event that zooms the canvas
Returns void
- event: WheelEventThe mousewheel event that zooms the canvas

`Internal`Handle mousewheel events which adjust the scale of the canvas


#### Parameters

- event: WheelEventThe mousewheel event that zooms the canvas

The mousewheel event that zooms the canvas


#### Returns void


### _onResize

- _onResize(): undefined | falseInternalHandle window resizing with the dimensions of the window viewport change
Returns undefined | false

`Internal`Handle window resizing with the dimensions of the window viewport change


#### Returns undefined | false


### activateFPSMeter

- activateFPSMeter(): voidActivate framerate tracking by adding an HTML element to the display and refreshing it every frame.
Returns void

Activate framerate tracking by adding an HTML element to the display and refreshing it every frame.


#### Returns void


### addBlurFilter

- addBlurFilter(filter: Filter): FilterAdd a filter to the blur filter list if it has the blur property.
Parametersfilter: FilterThe filter instance to add
Returns FilterThe filter that was passed to this function
- filter: FilterThe filter instance to add

Add a filter to the blur filter list if it has the blur property.

`blur`
#### Parameters

- filter: FilterThe filter instance to add

The filter instance to add


#### Returns Filter

The filter that was passed to this function


### animatePan

- animatePan(view?: any): Promise<boolean>Animate panning the canvas to a certain destination coordinate and zoom scale
Customize the animation speed with additional options
Returns a Promise which is resolved once the animation has completed
Parametersview: any = {}The desired view parameters
Returns Promise<boolean>A Promise which resolves once the animation has been completed
- view: any = {}The desired view parameters

Animate panning the canvas to a certain destination coordinate and zoom scale
Customize the animation speed with additional options
Returns a Promise which is resolved once the animation has completed


#### Parameters

- view: any = {}The desired view parameters

The desired view parameters


#### Returns Promise<boolean>

A Promise which resolves once the animation has been completed


### canvasCoordinatesFromClient

- canvasCoordinatesFromClient(origin: Point): PointConvert client viewport coordinates to canvas coordinates.
Parametersorigin: PointThe client coordinates.
Returns PointThe corresponding canvas coordinates.
- origin: PointThe client coordinates.

Convert client viewport coordinates to canvas coordinates.


#### Parameters

- origin: PointThe client coordinates.

The client coordinates.


#### Returns Point

The corresponding canvas coordinates.


### clientCoordinatesFromCanvas

- clientCoordinatesFromCanvas(origin: Point): PointConvert canvas coordinates to the client's viewport.
Parametersorigin: PointThe canvas coordinates.
Returns PointThe corresponding coordinates relative to the client's viewport.
- origin: PointThe canvas coordinates.

Convert canvas coordinates to the client's viewport.


#### Parameters

- origin: PointThe canvas coordinates.

The canvas coordinates.


#### Returns Point

The corresponding coordinates relative to the client's viewport.


### createBlurFilter

- createBlurFilter(blurStrength: number, blurQuality?: number): BlurFilterCreate a BlurFilter instance and register it to the array for updates when the zoom level changes.
ParametersblurStrength: numberThe desired blur strength to use for this filter
blurQuality: number = CONFIG.Canvas.blurQualityThe desired quality to use for this filter
Returns BlurFilter
- blurStrength: numberThe desired blur strength to use for this filter
- blurQuality: number = CONFIG.Canvas.blurQualityThe desired quality to use for this filter

Create a BlurFilter instance and register it to the array for updates when the zoom level changes.


#### Parameters

- blurStrength: numberThe desired blur strength to use for this filter
- blurQuality: number = CONFIG.Canvas.blurQualityThe desired quality to use for this filter

The desired blur strength to use for this filter

The desired quality to use for this filter


#### Returns BlurFilter


### deactivateFPSMeter

- deactivateFPSMeter(): voidDeactivate framerate tracking by canceling ticker updates and removing the HTML element.
Returns void

Deactivate framerate tracking by canceling ticker updates and removing the HTML element.


#### Returns void


### draw

- draw(scene?: documents.Scene): Promise<canvas.Canvas>Draw the game canvas.
ParametersOptionalscene: documents.SceneA specific Scene document to render on the Canvas
Returns Promise<canvas.Canvas>A Promise which resolves once the Canvas is fully drawn
- Optionalscene: documents.SceneA specific Scene document to render on the Canvas

Draw the game canvas.


#### Parameters

- Optionalscene: documents.SceneA specific Scene document to render on the Canvas

`Optional`A specific Scene document to render on the Canvas


#### Returns Promise<canvas.Canvas>

A Promise which resolves once the Canvas is fully drawn


### getCollectionLayer

- getCollectionLayer(collectionName: string): PlaceablesLayerGet the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.
ParameterscollectionName: stringThe collection name
Returns PlaceablesLayerThe canvas layer
- collectionName: stringThe collection name

Get the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.


#### Parameters

- collectionName: stringThe collection name

The collection name


#### Returns PlaceablesLayer

The canvas layer


### getGLParameter

- getGLParameter(parameter: string): anyGet the value of a GL parameter
Parametersparameter: stringThe GL parameter to retrieve
Returns anyThe GL parameter value
- parameter: stringThe GL parameter to retrieve

Get the value of a GL parameter


#### Parameters

- parameter: stringThe GL parameter to retrieve

The GL parameter to retrieve


#### Returns any

The GL parameter value


### getLayerByEmbeddedName

- getLayerByEmbeddedName(embeddedName: string): null | PlaceablesLayerGiven an embedded object name, get the canvas layer for that object
ParametersembeddedName: stringReturns null | PlaceablesLayer
- embeddedName: string

Given an embedded object name, get the canvas layer for that object


#### Parameters

- embeddedName: string


#### Returns null | PlaceablesLayer


### highlightObjects

- highlightObjects(active: boolean): voidHighlight objects on any layers which are visible
Parametersactive: booleanReturns void
- active: boolean

Highlight objects on any layers which are visible


#### Parameters

- active: boolean


#### Returns void


### initialize

- initialize(): voidInitialize the Canvas by creating the HTML element and PIXI application.
This step should only ever be performed once per client session.
Subsequent requests to reset the canvas should go through Canvas#draw
Returns void

Initialize the Canvas by creating the HTML element and PIXI application.
This step should only ever be performed once per client session.
Subsequent requests to reset the canvas should go through Canvas#draw


#### Returns void


### initializeCanvasPosition

- initializeCanvasPosition(): voidInitialize the starting view of the canvas stage
If we are re-drawing a scene which was previously rendered, restore the prior view position
Otherwise set the view to the top-left corner of the scene at standard scale
Returns void

Initialize the starting view of the canvas stage
If we are re-drawing a scene which was previously rendered, restore the prior view position
Otherwise set the view to the top-left corner of the scene at standard scale


#### Returns void


### isOffscreen

- isOffscreen(position: Point): booleanDetermine whether given canvas coordinates are off-screen.
Parametersposition: PointThe canvas coordinates.
Returns booleanIs the coordinate outside the screen bounds?
- position: PointThe canvas coordinates.

Determine whether given canvas coordinates are off-screen.


#### Parameters

- position: PointThe canvas coordinates.

The canvas coordinates.


#### Returns boolean

Is the coordinate outside the screen bounds?


### pan

- pan(position?: Partial<CanvasViewPosition>): voidPan the canvas to a certain position and a certain zoom level.
ParametersOptionalposition: Partial<CanvasViewPosition> = {}The canvas position to pan to
Returns void
- Optionalposition: Partial<CanvasViewPosition> = {}The canvas position to pan to

Pan the canvas to a certain position and a certain zoom level.


#### Parameters

- Optionalposition: Partial<CanvasViewPosition> = {}The canvas position to pan to

`Optional`The canvas position to pan to


#### Returns void


### ping

- ping(origin: Point, options?: PingOptions): Promise<boolean>Displays a Ping both locally and on other connected client, following these rules:

Displays on the current canvas Scene
If ALT is held, becomes an ALERT ping
Else if the user is GM and SHIFT is held, becomes a PULL ping
Else is a PULSE ping

Parametersorigin: PointPoint to display Ping at
Optionaloptions: PingOptionsAdditional options to configure how the ping is drawn.
Returns Promise<boolean>
- Displays on the current canvas Scene
- If ALT is held, becomes an ALERT ping
- Else if the user is GM and SHIFT is held, becomes a PULL ping
- Else is a PULSE ping
- origin: PointPoint to display Ping at
- Optionaloptions: PingOptionsAdditional options to configure how the ping is drawn.

Displays a Ping both locally and on other connected client, following these rules:

- Displays on the current canvas Scene
- If ALT is held, becomes an ALERT ping
- Else if the user is GM and SHIFT is held, becomes a PULL ping
- Else is a PULSE ping


#### Parameters

- origin: PointPoint to display Ping at
- Optionaloptions: PingOptionsAdditional options to configure how the ping is drawn.

Point to display Ping at

`Optional`Additional options to configure how the ping is drawn.


#### Returns Promise<boolean>


### recenter

- recenter(initial: CanvasViewPosition): Promise<void>Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.
Parametersinitial: CanvasViewPositionA desired initial position from which to begin the animation
Returns Promise<void>A Promise which resolves once the animation has been completed
- initial: CanvasViewPositionA desired initial position from which to begin the animation

Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.


#### Parameters

- initial: CanvasViewPositionA desired initial position from which to begin the animation

A desired initial position from which to begin the animation


#### Returns Promise<void>

A Promise which resolves once the animation has been completed


### registerMouseMoveHandler

- registerMouseMoveHandler(    handler: Function,    priority?: number,    context?: object,    strict?: boolean,): voidRegister a new onMouseMove handler with an optional priority.
Parametershandler: FunctionThe function to call on mouse move.
Optionalpriority: number = 0Optional priority. Higher values are called earlier.
Optionalcontext: object = ...The context in which the handler should be executed.
Optionalstrict: boolean = falseTo know if the handler should be called on real pointer move only (not simulated)
Returns void
- handler: FunctionThe function to call on mouse move.
- Optionalpriority: number = 0Optional priority. Higher values are called earlier.
- Optionalcontext: object = ...The context in which the handler should be executed.
- Optionalstrict: boolean = falseTo know if the handler should be called on real pointer move only (not simulated)

Register a new onMouseMove handler with an optional priority.


#### Parameters

- handler: FunctionThe function to call on mouse move.
- Optionalpriority: number = 0Optional priority. Higher values are called earlier.
- Optionalcontext: object = ...The context in which the handler should be executed.
- Optionalstrict: boolean = falseTo know if the handler should be called on real pointer move only (not simulated)

The function to call on mouse move.

`Optional`Optional priority. Higher values are called earlier.

`Optional`The context in which the handler should be executed.

`Optional`To know if the handler should be called on real pointer move only (not simulated)


#### Returns void


### tearDown

- tearDown(): Promise<void>When re-drawing the canvas, first tear down or discontinue some existing processes
Returns Promise<void>

When re-drawing the canvas, first tear down or discontinue some existing processes


#### Returns Promise<void>


### updateBlur

- updateBlur(strength?: number): voidUpdate the blur strength depending on the scale of the canvas stage.
This number is zero if "soft shadows" are disabled
ParametersOptionalstrength: numberOptional blur strength to apply
Returns void
- Optionalstrength: numberOptional blur strength to apply

Update the blur strength depending on the scale of the canvas stage.
This number is zero if "soft shadows" are disabled


#### Parameters

- Optionalstrength: numberOptional blur strength to apply

`Optional`Optional blur strength to apply


#### Returns void


### StaticclearContainer

`Static`- clearContainer(displayObject: DisplayObject, destroy?: boolean): voidRemove all children of the display object and call one cleaning method:
clean first, then tearDown, and destroy if no cleaning method is found.
ParametersdisplayObject: DisplayObjectThe display object to clean.
destroy: boolean = trueIf textures should be destroyed.
Returns void
- displayObject: DisplayObjectThe display object to clean.
- destroy: boolean = trueIf textures should be destroyed.

Remove all children of the display object and call one cleaning method:
clean first, then tearDown, and destroy if no cleaning method is found.


#### Parameters

- displayObject: DisplayObjectThe display object to clean.
- destroy: boolean = trueIf textures should be destroyed.

The display object to clean.

If textures should be destroyed.


#### Returns void


### StaticgetRenderTexture

`Static`- getRenderTexture(    options?: { clearColor?: number[]; textureConfiguration?: object },): RenderTextureGet a texture with the required configuration and clear color.
Parametersoptions: { clearColor?: number[]; textureConfiguration?: object } = {}OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
OptionaltextureConfiguration?: objectThe render texture configuration.
Returns RenderTexture
- options: { clearColor?: number[]; textureConfiguration?: object } = {}OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
OptionaltextureConfiguration?: objectThe render texture configuration.
- OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
- OptionaltextureConfiguration?: objectThe render texture configuration.

Get a texture with the required configuration and clear color.


#### Parameters

- options: { clearColor?: number[]; textureConfiguration?: object } = {}OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
OptionaltextureConfiguration?: objectThe render texture configuration.
- OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
- OptionaltextureConfiguration?: objectThe render texture configuration.

- OptionalclearColor?: number[]The clear color to use for this texture. Transparent by default.
- OptionaltextureConfiguration?: objectThe render texture configuration.


##### OptionalclearColor?: number[]

`Optional`The clear color to use for this texture. Transparent by default.


##### OptionaltextureConfiguration?: object

`Optional`The render texture configuration.


#### Returns RenderTexture


### StaticgetSceneManager

`Static`- getSceneManager(scene: documents.Scene): null | SceneManagerInternalCreate a SceneManager instance used for this Scene, if any.
Parametersscene: documents.SceneReturns null | SceneManager
- scene: documents.Scene

`Internal`Create a SceneManager instance used for this Scene, if any.


#### Parameters

- scene: documents.Scene


#### Returns null | SceneManager


### Settings

- Protected
- Inherited
- Internal


### On This Page

