# EnvironmentCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.EnvironmentCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- EnvironmentCanvasGroup


# Class EnvironmentCanvasGroup

A container group which contains the primary canvas group and the effects canvas group.


#### Hierarchy

- CanvasGroup<this>EnvironmentCanvasGroup
- EnvironmentCanvasGroup

- EnvironmentCanvasGroup


##### Index


### Properties


### Accessors


### Methods


## Properties


### colors

Colors exposed by the manager.


### layers

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers


### weights

Weights used by the manager to compute colors.


### StaticgroupName

`Static`Overrides CanvasGroupMixin(PIXI.Container).groupName


### StatictearDownChildren

`Static`Overrides CanvasGroupMixin(PIXI.Container).tearDownChildren


## Accessors


### darknessLevel

- get darknessLevel(): numberGet the darkness level of this scene.
Returns number

Get the darkness level of this scene.


#### Returns number


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


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasGroupMixin(PIXI.Container)._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasGroupMixin(PIXI.Container)._draw


### draw

- draw(options?: object): Promise<EnvironmentCanvasGroup>Draw the canvas group and all its components.
ParametersOptionaloptions: object = {}Returns Promise<EnvironmentCanvasGroup>A Promise which resolves once the group is fully drawn
Inherited from CanvasGroupMixin(PIXI.Container).draw
- Optionaloptions: object = {}

Draw the canvas group and all its components.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<EnvironmentCanvasGroup>

A Promise which resolves once the group is fully drawn

Inherited from CanvasGroupMixin(PIXI.Container).draw


### initialize

- initialize(config?: CanvasEnvironmentConfig): voidInitialize the scene environment options.
Parametersconfig: CanvasEnvironmentConfig = {}Returns voidFiresFires
- config: CanvasEnvironmentConfig = {}

Initialize the scene environment options.


#### Parameters

- config: CanvasEnvironmentConfig = {}


#### Returns void


#### Fires


#### Fires


### tearDown

- tearDown(options?: object): Promise<EnvironmentCanvasGroup>Remove and destroy all layers from the base canvas.
ParametersOptionaloptions: object = {}Returns Promise<EnvironmentCanvasGroup>Inherited from CanvasGroupMixin(PIXI.Container).tearDown
- Optionaloptions: object = {}

Remove and destroy all layers from the base canvas.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<EnvironmentCanvasGroup>

Inherited from CanvasGroupMixin(PIXI.Container).tearDown


### Protected_createLayers

`Protected`- _createLayers(): {}ProtectedCreate CanvasLayer instances which belong to the canvas group.
Returns {}Inherited from CanvasGroupMixin(PIXI.Container)._createLayers

`Protected`Create CanvasLayer instances which belong to the canvas group.


#### Returns {}

Inherited from CanvasGroupMixin(PIXI.Container)._createLayers


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

