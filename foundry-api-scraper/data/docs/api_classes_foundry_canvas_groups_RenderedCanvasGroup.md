# RenderedCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.RenderedCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- RenderedCanvasGroup


# Class RenderedCanvasGroup

A container group which contains the environment canvas group and the interface canvas group.


#### Hierarchy

- CanvasGroup<this>RenderedCanvasGroup
- RenderedCanvasGroup

- RenderedCanvasGroup


##### Index


### Properties


### Accessors


### Methods


## Properties


### layers

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers


### StaticgroupName

`Static`Overrides CanvasGroupMixin(PIXI.Container).groupName


### StatictearDownChildren

`Static`Overrides CanvasGroupMixin(PIXI.Container).tearDownChildren


## Accessors


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from CanvasGroupMixin(PIXI.Container).hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from CanvasGroupMixin(PIXI.Container).hookName


### name

- get name(): stringThe canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.
Returns stringInherited from CanvasGroupMixin(PIXI.Container).name

The canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.


#### Returns string

Inherited from CanvasGroupMixin(PIXI.Container).name


## Methods


### draw

- draw(options?: object): Promise<RenderedCanvasGroup>Draw the canvas group and all its components.
ParametersOptionaloptions: object = {}Returns Promise<RenderedCanvasGroup>A Promise which resolves once the group is fully drawn
Inherited from CanvasGroupMixin(PIXI.Container).draw
- Optionaloptions: object = {}

Draw the canvas group and all its components.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<RenderedCanvasGroup>

A Promise which resolves once the group is fully drawn

Inherited from CanvasGroupMixin(PIXI.Container).draw


### tearDown

- tearDown(options?: object): Promise<RenderedCanvasGroup>Remove and destroy all layers from the base canvas.
ParametersOptionaloptions: object = {}Returns Promise<RenderedCanvasGroup>Inherited from CanvasGroupMixin(PIXI.Container).tearDown
- Optionaloptions: object = {}

Remove and destroy all layers from the base canvas.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<RenderedCanvasGroup>

Inherited from CanvasGroupMixin(PIXI.Container).tearDown


### Protected_createLayers

`Protected`- _createLayers(): {}ProtectedCreate CanvasLayer instances which belong to the canvas group.
Returns {}Inherited from CanvasGroupMixin(PIXI.Container)._createLayers

`Protected`Create CanvasLayer instances which belong to the canvas group.


#### Returns {}

Inherited from CanvasGroupMixin(PIXI.Container)._createLayers


### Protected_draw

`Protected`- _draw(options: object): Promise<void>ProtectedDraw the canvas group and all its component layers.
Parametersoptions: objectReturns Promise<void>Inherited from CanvasGroupMixin(PIXI.Container)._draw
- options: object

`Protected`Draw the canvas group and all its component layers.


#### Parameters

- options: object


#### Returns Promise<void>

Inherited from CanvasGroupMixin(PIXI.Container)._draw


### Protected_tearDown

`Protected`- _tearDown(options: object): Promise<void>ProtectedRemove and destroy all layers from the base canvas.
Parametersoptions: objectReturns Promise<void>Inherited from CanvasGroupMixin(PIXI.Container)._tearDown
- options: object

`Protected`Remove and destroy all layers from the base canvas.


#### Parameters

- options: object


#### Returns Promise<void>

Inherited from CanvasGroupMixin(PIXI.Container)._tearDown


### Settings

- Protected
- Inherited
- Internal


### On This Page

