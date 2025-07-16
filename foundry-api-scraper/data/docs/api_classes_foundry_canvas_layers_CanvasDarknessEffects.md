# CanvasDarknessEffects | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasDarknessEffects.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- CanvasDarknessEffects


# Class CanvasDarknessEffects

A layer of background alteration effects which change the appearance of the primary group render texture.


#### Hierarchy (View Summary)

- CanvasLayerCanvasDarknessEffects
- CanvasDarknessEffects

- CanvasDarknessEffects


##### Index


### Properties


### Accessors


### Methods


## Properties


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from CanvasLayer.interactiveChildren


### options

Options for this layer instance.

Inherited from CanvasLayer.options


## Accessors


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from CanvasLayer.hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from CanvasLayer.hookName


### name

- get name(): stringThe canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.
Returns stringExamplecanvas.lighting.name -> "LightingLayer"
Copy

Inherited from CanvasLayer.name

The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.


#### Returns string


#### Example

```javascript
canvas.lighting.name -> "LightingLayer"
Copy
```

`canvas.lighting.name -> "LightingLayer"`Inherited from CanvasLayer.name


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayerInherited from CanvasLayer.instance

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer

Inherited from CanvasLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): { name: string }Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.
Returns { name: string }Inherited from CanvasLayer.layerOptions

Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.


#### Returns { name: string }

Inherited from CanvasLayer.layerOptions


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasLayer._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasLayer._draw


### clear

- clear(): voidClear coloration effects container
Returns void

Clear coloration effects container


#### Returns void


### draw

- draw(options?: object): Promise<CanvasLayer>Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.
ParametersOptionaloptions: object = {}Options which configure how the layer is drawn
Returns Promise<CanvasLayer>Inherited from CanvasLayer.draw
- Optionaloptions: object = {}Options which configure how the layer is drawn

Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is drawn

`Optional`Options which configure how the layer is drawn


#### Returns Promise<CanvasLayer>

Inherited from CanvasLayer.draw


### tearDown

- tearDown(options?: object): Promise<CanvasLayer>Deconstruct data used in the current layer in preparation to re-draw the canvas
ParametersOptionaloptions: object = {}Options which configure how the layer is deconstructed
Returns Promise<CanvasLayer>Inherited from CanvasLayer.tearDown
- Optionaloptions: object = {}Options which configure how the layer is deconstructed

Deconstruct data used in the current layer in preparation to re-draw the canvas


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is deconstructed

`Optional`Options which configure how the layer is deconstructed


#### Returns Promise<CanvasLayer>

Inherited from CanvasLayer.tearDown


### Protected_tearDown

`Protected`- _tearDown(options: object): Promise<void>ProtectedThe inner _tearDown method which may be customized by each CanvasLayer subclass.
Parametersoptions: objectOptions which configure how the layer is deconstructed
Returns Promise<void>Inherited from CanvasLayer._tearDown
- options: objectOptions which configure how the layer is deconstructed

`Protected`The inner _tearDown method which may be customized by each CanvasLayer subclass.


#### Parameters

- options: objectOptions which configure how the layer is deconstructed

Options which configure how the layer is deconstructed


#### Returns Promise<void>

Inherited from CanvasLayer._tearDown


### Settings

- Protected
- Inherited
- Internal


### On This Page

