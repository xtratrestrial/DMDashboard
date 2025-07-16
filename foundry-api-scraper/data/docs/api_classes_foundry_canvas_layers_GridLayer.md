# GridLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.GridLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- GridLayer


# Class GridLayer

A CanvasLayer responsible for drawing a square grid


#### Hierarchy (View Summary)

- CanvasLayerGridLayer
- GridLayer

- GridLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### highlight

The Grid Highlight container


### highlightLayers

Map named highlight layers


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from CanvasLayer.interactiveChildren


### mesh

The grid mesh.


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

`Static`- get instance(): anyReturns anyOverrides CanvasLayer.instance


#### Returns any

Overrides CanvasLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): objectCustomize behaviors of this CanvasLayer by modifying some behaviors at a class level.
Returns objectOverrides CanvasLayer.layerOptions

Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.


#### Returns object

Overrides CanvasLayer.layerOptions


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasLayer._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasLayer._draw


### addHighlightLayer

- addHighlightLayer(name: string): GridHighlightDefine a new Highlight graphic
Parametersname: stringThe name for the referenced highlight layer
Returns GridHighlight
- name: stringThe name for the referenced highlight layer

Define a new Highlight graphic


#### Parameters

- name: stringThe name for the referenced highlight layer

The name for the referenced highlight layer


#### Returns GridHighlight


### clearHighlightLayer

- clearHighlightLayer(name: string): voidClear a specific Highlight graphic
Parametersname: stringThe name for the referenced highlight layer
Returns void
- name: stringThe name for the referenced highlight layer

Clear a specific Highlight graphic


#### Parameters

- name: stringThe name for the referenced highlight layer

The name for the referenced highlight layer


#### Returns void


### destroyHighlightLayer

- destroyHighlightLayer(name: string): voidDestroy a specific Highlight graphic
Parametersname: stringThe name for the referenced highlight layer
Returns void
- name: stringThe name for the referenced highlight layer

Destroy a specific Highlight graphic


#### Parameters

- name: stringThe name for the referenced highlight layer

The name for the referenced highlight layer


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


### getHighlightLayer

- getHighlightLayer(name: string): GridHighlightObtain the highlight layer graphic by name
Parametersname: stringThe name for the referenced highlight layer
Returns GridHighlight
- name: stringThe name for the referenced highlight layer

Obtain the highlight layer graphic by name


#### Parameters

- name: stringThe name for the referenced highlight layer

The name for the referenced highlight layer


#### Returns GridHighlight


### highlightPosition

- highlightPosition(    name: string,    options: {        alpha?: number;        border?: null | ColorSource;        color?: ColorSource;        shape?: Polygon;        x?: number;        y?: number;    },): voidAdd highlighting for a specific grid position to a named highlight graphic
Parametersname: stringThe name for the referenced highlight layer
options: {    alpha?: number;    border?: null | ColorSource;    color?: ColorSource;    shape?: Polygon;    x?: number;    y?: number;}If gridless you need to pass shape but not x and y.
- If not gridless you need to pass x and y, but not shape.
Optionalalpha?: numberThe opacity of the highlight
Optionalborder?: null | ColorSourceThe border color of the highlight
Optionalcolor?: ColorSourceThe fill color of the highlight
Optionalshape?: PolygonA predefined shape to highlight
Optionalx?: numberThe x-coordinate of the highlighted position
Optionaly?: numberThe y-coordinate of the highlighted position
Returns void
- name: stringThe name for the referenced highlight layer
- options: {    alpha?: number;    border?: null | ColorSource;    color?: ColorSource;    shape?: Polygon;    x?: number;    y?: number;}If gridless you need to pass shape but not x and y.
- If not gridless you need to pass x and y, but not shape.
Optionalalpha?: numberThe opacity of the highlight
Optionalborder?: null | ColorSourceThe border color of the highlight
Optionalcolor?: ColorSourceThe fill color of the highlight
Optionalshape?: PolygonA predefined shape to highlight
Optionalx?: numberThe x-coordinate of the highlighted position
Optionaly?: numberThe y-coordinate of the highlighted position
- Optionalalpha?: numberThe opacity of the highlight
- Optionalborder?: null | ColorSourceThe border color of the highlight
- Optionalcolor?: ColorSourceThe fill color of the highlight
- Optionalshape?: PolygonA predefined shape to highlight
- Optionalx?: numberThe x-coordinate of the highlighted position
- Optionaly?: numberThe y-coordinate of the highlighted position

Add highlighting for a specific grid position to a named highlight graphic


#### Parameters

- name: stringThe name for the referenced highlight layer
- options: {    alpha?: number;    border?: null | ColorSource;    color?: ColorSource;    shape?: Polygon;    x?: number;    y?: number;}If gridless you need to pass shape but not x and y.
- If not gridless you need to pass x and y, but not shape.
Optionalalpha?: numberThe opacity of the highlight
Optionalborder?: null | ColorSourceThe border color of the highlight
Optionalcolor?: ColorSourceThe fill color of the highlight
Optionalshape?: PolygonA predefined shape to highlight
Optionalx?: numberThe x-coordinate of the highlighted position
Optionaly?: numberThe y-coordinate of the highlighted position
- Optionalalpha?: numberThe opacity of the highlight
- Optionalborder?: null | ColorSourceThe border color of the highlight
- Optionalcolor?: ColorSourceThe fill color of the highlight
- Optionalshape?: PolygonA predefined shape to highlight
- Optionalx?: numberThe x-coordinate of the highlighted position
- Optionaly?: numberThe y-coordinate of the highlighted position

The name for the referenced highlight layer

If gridless you need to pass shape but not x and y.
- If not gridless you need to pass x and y, but not shape.

`shape``x``y``x``y``shape`- Optionalalpha?: numberThe opacity of the highlight
- Optionalborder?: null | ColorSourceThe border color of the highlight
- Optionalcolor?: ColorSourceThe fill color of the highlight
- Optionalshape?: PolygonA predefined shape to highlight
- Optionalx?: numberThe x-coordinate of the highlighted position
- Optionaly?: numberThe y-coordinate of the highlighted position


##### Optionalalpha?: number

`Optional`The opacity of the highlight


##### Optionalborder?: null | ColorSource

`Optional`The border color of the highlight


##### Optionalcolor?: ColorSource

`Optional`The fill color of the highlight


##### Optionalshape?: Polygon

`Optional`A predefined shape to highlight


##### Optionalx?: number

`Optional`The x-coordinate of the highlighted position


##### Optionaly?: number

`Optional`The y-coordinate of the highlighted position


#### Returns void


### initializeMesh

- initializeMesh(    options?: {        alpha?: number;        color?: string;        style?: string;        thickness?: number;    },): voidInitialize the grid mesh appearance and configure the grid shader.
Parametersoptions: { alpha?: number; color?: string; style?: string; thickness?: number } = {}Optionalalpha?: numberThe grid alpha
Optionalcolor?: stringThe grid color
Optionalstyle?: stringThe grid style
Optionalthickness?: numberThe grid thickness
Returns void
- options: { alpha?: number; color?: string; style?: string; thickness?: number } = {}Optionalalpha?: numberThe grid alpha
Optionalcolor?: stringThe grid color
Optionalstyle?: stringThe grid style
Optionalthickness?: numberThe grid thickness
- Optionalalpha?: numberThe grid alpha
- Optionalcolor?: stringThe grid color
- Optionalstyle?: stringThe grid style
- Optionalthickness?: numberThe grid thickness

Initialize the grid mesh appearance and configure the grid shader.


#### Parameters

- options: { alpha?: number; color?: string; style?: string; thickness?: number } = {}Optionalalpha?: numberThe grid alpha
Optionalcolor?: stringThe grid color
Optionalstyle?: stringThe grid style
Optionalthickness?: numberThe grid thickness
- Optionalalpha?: numberThe grid alpha
- Optionalcolor?: stringThe grid color
- Optionalstyle?: stringThe grid style
- Optionalthickness?: numberThe grid thickness

- Optionalalpha?: numberThe grid alpha
- Optionalcolor?: stringThe grid color
- Optionalstyle?: stringThe grid style
- Optionalthickness?: numberThe grid thickness


##### Optionalalpha?: number

`Optional`The grid alpha


##### Optionalcolor?: string

`Optional`The grid color


##### Optionalstyle?: string

`Optional`The grid style


##### Optionalthickness?: number

`Optional`The grid thickness


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


### Protected_drawMesh

`Protected`- _drawMesh(): Promise<GridMesh>ProtectedCreates the grid mesh.
Returns Promise<GridMesh>

`Protected`Creates the grid mesh.


#### Returns Promise<GridMesh>


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

