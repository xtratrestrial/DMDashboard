# CanvasIlluminationEffects | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasIlluminationEffects.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- CanvasIlluminationEffects


# Class CanvasIlluminationEffects

A CanvasLayer for displaying illumination visual effects


#### Hierarchy (View Summary)

- CanvasLayerCanvasIlluminationEffects
- CanvasIlluminationEffects

- CanvasIlluminationEffects


##### Index


### Properties


### Accessors


### Methods


## Properties


### baselineMesh

The base line mesh.


### darknessLevelMeshes

The cached container holding the illumination meshes.


### filter

The filter used to mask visual effects on this layer


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from CanvasLayer.interactiveChildren


### lights

The container holding the lights.


### options

Options for this layer instance.

Inherited from CanvasLayer.options


## Accessors


### hasDynamicDarknessLevel

- get hasDynamicDarknessLevel(): booleanTo know if dynamic darkness level is active on this scene.
Returns boolean

To know if dynamic darkness level is active on this scene.


#### Returns boolean


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


### renderTexture

- get renderTexture(): RenderTextureThe illumination render texture.
Returns RenderTexture

The illumination render texture.


#### Returns RenderTexture


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


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasLayer._tearDown
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasLayer._tearDown


### clear

- clear(): voidClear illumination effects container
Returns void

Clear illumination effects container


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


### invalidateDarknessLevelContainer

- invalidateDarknessLevelContainer(force?: boolean): voidInvalidate the cached container state to trigger a render pass.
ParametersOptionalforce: boolean = falseForce cached container invalidation?
Returns void
- Optionalforce: boolean = falseForce cached container invalidation?

Invalidate the cached container state to trigger a render pass.


#### Parameters

- Optionalforce: boolean = falseForce cached container invalidation?

`Optional`Force cached container invalidation?


#### Returns void


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


### Settings

- Protected
- Inherited
- Internal


### On This Page

