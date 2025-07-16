# OverlayCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.OverlayCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- OverlayCanvasGroup


# Class OverlayCanvasGroup

A container group which is not bound to the stage world transform.


#### Hierarchy

- CanvasGroup<this>OverlayCanvasGroup
- OverlayCanvasGroup

- OverlayCanvasGroup


##### Index


### Properties


### Accessors


### Methods


## Properties


### layers

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(UnboundContainer).layers


### StaticgroupName

`Static`Overrides CanvasGroupMixin(UnboundContainer).groupName


### StatictearDownChildren

`Static`Overrides CanvasGroupMixin(UnboundContainer).tearDownChildren


## Accessors


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from CanvasGroupMixin(UnboundContainer).hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from CanvasGroupMixin(UnboundContainer).hookName


### name

- get name(): stringThe canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.
Returns stringInherited from CanvasGroupMixin(UnboundContainer).name

The canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.


#### Returns string

Inherited from CanvasGroupMixin(UnboundContainer).name


## Methods


### draw

- draw(options?: object): Promise<OverlayCanvasGroup>Draw the canvas group and all its components.
ParametersOptionaloptions: object = {}Returns Promise<OverlayCanvasGroup>A Promise which resolves once the group is fully drawn
Inherited from CanvasGroupMixin(UnboundContainer).draw
- Optionaloptions: object = {}

Draw the canvas group and all its components.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<OverlayCanvasGroup>

A Promise which resolves once the group is fully drawn

Inherited from CanvasGroupMixin(UnboundContainer).draw


### tearDown

- tearDown(options?: object): Promise<OverlayCanvasGroup>Remove and destroy all layers from the base canvas.
ParametersOptionaloptions: object = {}Returns Promise<OverlayCanvasGroup>Inherited from CanvasGroupMixin(UnboundContainer).tearDown
- Optionaloptions: object = {}

Remove and destroy all layers from the base canvas.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<OverlayCanvasGroup>

Inherited from CanvasGroupMixin(UnboundContainer).tearDown


### Protected_createLayers

`Protected`- _createLayers(): {}ProtectedCreate CanvasLayer instances which belong to the canvas group.
Returns {}Inherited from CanvasGroupMixin(UnboundContainer)._createLayers

`Protected`Create CanvasLayer instances which belong to the canvas group.


#### Returns {}

Inherited from CanvasGroupMixin(UnboundContainer)._createLayers


### Protected_draw

`Protected`- _draw(options: object): Promise<void>ProtectedDraw the canvas group and all its component layers.
Parametersoptions: objectReturns Promise<void>Inherited from CanvasGroupMixin(UnboundContainer)._draw
- options: object

`Protected`Draw the canvas group and all its component layers.


#### Parameters

- options: object


#### Returns Promise<void>

Inherited from CanvasGroupMixin(UnboundContainer)._draw


### Protected_tearDown

`Protected`- _tearDown(options: object): Promise<void>ProtectedRemove and destroy all layers from the base canvas.
Parametersoptions: objectReturns Promise<void>Inherited from CanvasGroupMixin(UnboundContainer)._tearDown
- options: object

`Protected`Remove and destroy all layers from the base canvas.


#### Parameters

- options: object


#### Returns Promise<void>

Inherited from CanvasGroupMixin(UnboundContainer)._tearDown


### Settings

- Protected
- Inherited
- Internal


### On This Page

