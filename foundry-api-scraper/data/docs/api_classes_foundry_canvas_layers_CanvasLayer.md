# CanvasLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- CanvasLayer


# Class CanvasLayerAbstract Interface

`Abstract``Interface`An abstract pattern for primary layers of the game canvas to implement.


#### Hierarchy (View Summary)

- ContainerCanvasLayerInteractionLayerCanvasBackgroundAlterationEffectsCanvasColorationEffectsCanvasDarknessEffectsCanvasIlluminationEffectsGridLayer
- CanvasLayerInteractionLayerCanvasBackgroundAlterationEffectsCanvasColorationEffectsCanvasDarknessEffectsCanvasIlluminationEffectsGridLayer
- InteractionLayer
- CanvasBackgroundAlterationEffects
- CanvasColorationEffects
- CanvasDarknessEffects
- CanvasIlluminationEffects
- GridLayer

- CanvasLayerInteractionLayerCanvasBackgroundAlterationEffectsCanvasColorationEffectsCanvasDarknessEffectsCanvasIlluminationEffectsGridLayer
- InteractionLayer
- CanvasBackgroundAlterationEffects
- CanvasColorationEffects
- CanvasDarknessEffects
- CanvasIlluminationEffects
- GridLayer

- InteractionLayer
- CanvasBackgroundAlterationEffects
- CanvasColorationEffects
- CanvasDarknessEffects
- CanvasIlluminationEffects
- GridLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Overrides PIXI.Container.interactiveChildren


### options

Options for this layer instance.


## Accessors


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns string

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string


### name

- get name(): stringThe canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.
Returns stringExamplecanvas.lighting.name -> "LightingLayer"
Copy

Overrides PIXI.Container.name

The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.


#### Returns string


#### Example

```javascript
canvas.lighting.name -> "LightingLayer"
Copy
```

`canvas.lighting.name -> "LightingLayer"`Overrides PIXI.Container.name


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayer

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer


### StaticlayerOptions

`Static`- get layerOptions(): { name: string }Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.
Returns { name: string }

Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.


#### Returns { name: string }


## Methods


### draw

- draw(options?: object): Promise<CanvasLayer>Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.
ParametersOptionaloptions: object = {}Options which configure how the layer is drawn
Returns Promise<CanvasLayer>
- Optionaloptions: object = {}Options which configure how the layer is drawn

Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is drawn

`Optional`Options which configure how the layer is drawn


#### Returns Promise<CanvasLayer>


### tearDown

- tearDown(options?: object): Promise<CanvasLayer>Deconstruct data used in the current layer in preparation to re-draw the canvas
ParametersOptionaloptions: object = {}Options which configure how the layer is deconstructed
Returns Promise<CanvasLayer>
- Optionaloptions: object = {}Options which configure how the layer is deconstructed

Deconstruct data used in the current layer in preparation to re-draw the canvas


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is deconstructed

`Optional`Options which configure how the layer is deconstructed


#### Returns Promise<CanvasLayer>


### Protected Abstract_draw

`Protected``Abstract`- _draw(options: object): Promise<void>ProtectedThe inner _draw method which must be defined by each CanvasLayer subclass.
Parametersoptions: objectOptions which configure how the layer is drawn
Returns Promise<void>
- options: objectOptions which configure how the layer is drawn

`Protected`The inner _draw method which must be defined by each CanvasLayer subclass.


#### Parameters

- options: objectOptions which configure how the layer is drawn

Options which configure how the layer is drawn


#### Returns Promise<void>


### Protected_tearDown

`Protected`- _tearDown(options: object): Promise<void>ProtectedThe inner _tearDown method which may be customized by each CanvasLayer subclass.
Parametersoptions: objectOptions which configure how the layer is deconstructed
Returns Promise<void>
- options: objectOptions which configure how the layer is deconstructed

`Protected`The inner _tearDown method which may be customized by each CanvasLayer subclass.


#### Parameters

- options: objectOptions which configure how the layer is deconstructed

Options which configure how the layer is deconstructed


#### Returns Promise<void>


### Settings

- Protected
- Inherited
- Internal


### On This Page

