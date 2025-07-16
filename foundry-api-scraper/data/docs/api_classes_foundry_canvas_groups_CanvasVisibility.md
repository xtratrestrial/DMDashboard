# CanvasVisibility | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.CanvasVisibility.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- CanvasVisibility


# Class CanvasVisibility

The visibility group which implements dynamic vision, lighting, and fog of war
This group uses an event-driven workflow to perform the minimal required calculation in response to changes.


### Hook Events

- hookEvents.initializeVisionMode
- hookEvents.initializeVisionSources
- hookEvents.sightRefresh
- hookEvents.visibilityRefresh


#### Hierarchy

- CanvasGroup<this>CanvasVisibility
- CanvasVisibility

- CanvasVisibility


##### Index


### Properties


### Accessors


### Methods


## Properties


### explored

The exploration container which tracks exploration progress.


### layers

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers


### lightingVisibility

Define whether each lighting layer is enabled, required, or disabled by this vision mode.
The value for each lighting channel is a number in LIGHTING_VISIBILITY


### visibilityOverlay

The optional visibility overlay sprite that should be drawn instead of the unexplored color in the fog of war.


### vision

The currently revealed vision.


### visionModeData

The active vision source data object


### StaticgroupName

`Static`Overrides CanvasGroupMixin(PIXI.Container).groupName


### StatictearDownChildren

`Static`If this canvas group should teardown non-layers children.

Inherited from CanvasGroupMixin(PIXI.Container).tearDownChildren


## Accessors


### explorationRect

- set explorationRect(rect: any): voidOptional overrides for exploration sprite dimensions.
Parametersrect: anyReturns void
- rect: any

Optional overrides for exploration sprite dimensions.


#### Parameters

- rect: any


#### Returns void


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from CanvasGroupMixin(PIXI.Container).hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from CanvasGroupMixin(PIXI.Container).hookName


### initialized

- get initialized(): booleanA status flag for whether the group initialization workflow has succeeded.
Returns boolean

A status flag for whether the group initialization workflow has succeeded.


#### Returns boolean


### name

- get name(): stringThe canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.
Returns stringInherited from CanvasGroupMixin(PIXI.Container).name

The canonical name of the canvas group is the name of the constructor that is the immediate child of the
defined base class.


#### Returns string

Inherited from CanvasGroupMixin(PIXI.Container).name


### needsContainment

- get needsContainment(): booleanInternalIndicates whether containment filtering is required when rendering vision into a texture.
Returns boolean

`Internal`Indicates whether containment filtering is required when rendering vision into a texture.


#### Returns boolean


### textureConfiguration

- get textureConfiguration(): CanvasVisibilityTextureConfigurationThe configured options used for the saved fog-of-war texture.
Returns CanvasVisibilityTextureConfiguration

The configured options used for the saved fog-of-war texture.


#### Returns CanvasVisibilityTextureConfiguration


### tokenVision

- get tokenVision(): booleanDoes the currently viewed Scene support Token field of vision?
Returns boolean

Does the currently viewed Scene support Token field of vision?


#### Returns boolean


## Methods


### _createVisibilityTestConfig

- _createVisibilityTestConfig(    point: Point | ElevatedPoint,    options?: { object?: null | object; tolerance?: number },): CanvasVisibilityTestConfigurationInternalCreate the visibility test config.
Parameterspoint: Point | ElevatedPointThe point in space to test
Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
Returns CanvasVisibilityTestConfiguration
- point: Point | ElevatedPointThe point in space to test
- Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.

`Internal`Create the visibility test config.


#### Parameters

- point: Point | ElevatedPointThe point in space to test
- Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.

The point in space to test

`Optional`Additional options which modify visibility testing.

- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.


##### Optionalobject?: null | object

`Optional`An optional reference to the object whose visibility is being tested


##### Optionaltolerance?: number

`Optional`A numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.


#### Returns CanvasVisibilityTestConfiguration


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasGroupMixin(PIXI.Container)._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasGroupMixin(PIXI.Container)._draw


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit DocOverrides CanvasGroupMixin(PIXI.Container)._tearDown
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides CanvasGroupMixin(PIXI.Container)._tearDown


### draw

- draw(options?: object): Promise<CanvasVisibility>Draw the canvas group and all its components.
ParametersOptionaloptions: object = {}Returns Promise<CanvasVisibility>A Promise which resolves once the group is fully drawn
Inherited from CanvasGroupMixin(PIXI.Container).draw
- Optionaloptions: object = {}

Draw the canvas group and all its components.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<CanvasVisibility>

A Promise which resolves once the group is fully drawn

Inherited from CanvasGroupMixin(PIXI.Container).draw


### initializeSources

- initializeSources(): voidInitialize all Token vision sources which are present on this group.
Returns void

Initialize all Token vision sources which are present on this group.


#### Returns void


### initializeVisionMode

- initializeVisionMode(): voidInitialize the vision mode.
Returns void

Initialize the vision mode.


#### Returns void


### refresh

- refresh(): voidUpdate the display of the visibility group.
Organize sources into rendering queues and draw lighting containers for each source
Returns void

Update the display of the visibility group.
Organize sources into rendering queues and draw lighting containers for each source


#### Returns void


### refreshVisibility

- refreshVisibility(): voidUpdate vision (and fog if necessary)
Returns void

Update vision (and fog if necessary)


#### Returns void


### resetExploration

- resetExploration(): voidReset the exploration container with the fog sprite
Returns void

Reset the exploration container with the fog sprite


#### Returns void


### restrictVisibility

- restrictVisibility(): voidRestrict the visibility of certain canvas assets (like Tokens or DoorControls) based on the visibility polygon
These assets should only be displayed if they are visible given the current player's field of view
Returns void

Restrict the visibility of certain canvas assets (like Tokens or DoorControls) based on the visibility polygon
These assets should only be displayed if they are visible given the current player's field of view


#### Returns void


### tearDown

- tearDown(options?: object): Promise<CanvasVisibility>Remove and destroy all layers from the base canvas.
ParametersOptionaloptions: object = {}Returns Promise<CanvasVisibility>Inherited from CanvasGroupMixin(PIXI.Container).tearDown
- Optionaloptions: object = {}

Remove and destroy all layers from the base canvas.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<CanvasVisibility>

Inherited from CanvasGroupMixin(PIXI.Container).tearDown


### testVisibility

- testVisibility(    point: Point | ElevatedPoint,    options?: { object?: null | object; tolerance?: number },): booleanTest whether a target point on the Canvas is visible based on the current vision and LOS polygons.
Parameterspoint: Point | ElevatedPointThe point in space to test
Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
Returns booleanWhether the point is currently visible.
- point: Point | ElevatedPointThe point in space to test
- Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.

Test whether a target point on the Canvas is visible based on the current vision and LOS polygons.


#### Parameters

- point: Point | ElevatedPointThe point in space to test
- Optionaloptions: { object?: null | object; tolerance?: number } = {}Additional options which modify visibility testing.
Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.
- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.

The point in space to test

`Optional`Additional options which modify visibility testing.

- Optionalobject?: null | objectAn optional reference to the object whose visibility is being tested
- Optionaltolerance?: numberA numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.


##### Optionalobject?: null | object

`Optional`An optional reference to the object whose visibility is being tested


##### Optionaltolerance?: number

`Optional`A numeric radial offset which allows for a non-exact match.
For example, if tolerance is 2 then the test will pass if the point
is within 2px of a vision polygon.


#### Returns boolean

Whether the point is currently visible.


### Protected_createLayers

`Protected`- _createLayers(): {}ProtectedCreate CanvasLayer instances which belong to the canvas group.
Returns {}Inherited from CanvasGroupMixin(PIXI.Container)._createLayers

`Protected`Create CanvasLayer instances which belong to the canvas group.


#### Returns {}

Inherited from CanvasGroupMixin(PIXI.Container)._createLayers


### Settings

- Protected
- Inherited
- Internal


### On This Page

