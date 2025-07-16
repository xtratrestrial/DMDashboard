# EffectsCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.EffectsCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- EffectsCanvasGroup


# Class EffectsCanvasGroup

A container group which contains visual effects rendered above the primary group.

TODO:
The effects canvas group is now only performing shape initialization, logic that needs to happen at
the placeable or object level is now their burden.

- [DONE] Adding or removing a source from the EffectsCanvasGroup collection.
- [TODO] A change in a darkness source should re-initialize all overlaping light and vision source.


### Hook Events

- hookEvents.lightingRefresh


#### Hierarchy

- CanvasGroup<this>EffectsCanvasGroup
- EffectsCanvasGroup

- EffectsCanvasGroup


##### Index


### Properties


### Accessors


### Methods


## Properties


### animateLightSources

Whether to currently animate light sources.


### animateVisionSources

Whether to currently animate vision sources.


### background

A layer of background alteration effects which change the appearance of the primary group render texture.


### coloration

A layer which adds color-based effects to the scene.


### darkness

A layer which adds darkness effects to the scene.


### darknessSources

A mapping of darkness sources which are active within the rendered Scene.


### illumination

A layer which adds illumination-based effects to the scene.


### layers

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers


### lightSources

A mapping of light sources which are active within the rendered Scene.


### visionSources

A Collection of vision sources which are currently active within the rendered Scene.


### visualEffectsMaskingFilters

A set of vision mask filters used in visual effects group


### Static AbstractgroupName

`Static``Abstract`The name of this canvas group.

Inherited from CanvasGroupMixin(PIXI.Container).groupName


### StatictearDownChildren

`Static`If this canvas group should teardown non-layers children.

Inherited from CanvasGroupMixin(PIXI.Container).tearDownChildren


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


### _createLayers

- _createLayers(): {    background: undefined    | CanvasBackgroundAlterationEffects;    coloration: undefined | CanvasColorationEffects;    darkness: undefined | CanvasDarknessEffects;    illumination: undefined | CanvasIlluminationEffects;}Returns {    background: undefined | CanvasBackgroundAlterationEffects;    coloration: undefined | CanvasColorationEffects;    darkness: undefined | CanvasDarknessEffects;    illumination: undefined | CanvasIlluminationEffects;}Overrides CanvasGroupMixin(PIXI.Container)._createLayers


#### Returns {    background: undefined | CanvasBackgroundAlterationEffects;    coloration: undefined | CanvasColorationEffects;    darkness: undefined | CanvasDarknessEffects;    illumination: undefined | CanvasIlluminationEffects;}

Overrides CanvasGroupMixin(PIXI.Container)._createLayers


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasGroupMixin(PIXI.Container)._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasGroupMixin(PIXI.Container)._draw


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasGroupMixin(PIXI.Container)._tearDown
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasGroupMixin(PIXI.Container)._tearDown


### activateAnimation

- activateAnimation(): voidActivate light source animation for AmbientLight objects within this layer
Returns void

Activate light source animation for AmbientLight objects within this layer


#### Returns void


### activatePostProcessingFilters

- activatePostProcessingFilters(    filterMode: string,    postProcessingModes?: string[],    uniforms?: Object,): voidActivate post-processing effects for a certain effects channel.
ParametersfilterMode: stringThe filter mode to target.
OptionalpostProcessingModes: string[] = []The post-processing modes to apply to this filter.
Optionaluniforms: Object = {}The uniforms to update.
Returns void
- filterMode: stringThe filter mode to target.
- OptionalpostProcessingModes: string[] = []The post-processing modes to apply to this filter.
- Optionaluniforms: Object = {}The uniforms to update.

Activate post-processing effects for a certain effects channel.


#### Parameters

- filterMode: stringThe filter mode to target.
- OptionalpostProcessingModes: string[] = []The post-processing modes to apply to this filter.
- Optionaluniforms: Object = {}The uniforms to update.

The filter mode to target.

`Optional`The post-processing modes to apply to this filter.

`Optional`The uniforms to update.


#### Returns void


### allSources

- allSources(): Generator<any, void, void>Iterator for all light and darkness sources.
Returns Generator<any, void, void>YieldsPointDarknessSource|PointLightSource

Iterator for all light and darkness sources.


#### Returns Generator<any, void, void>


#### Yields

PointDarknessSource|PointLightSource


### animateDarkness

- animateDarkness(target?: number, duration?: number): Promise<any>Animate a smooth transition of the darkness overlay to a target value.
Only begin animating if another animation is not already in progress.
Parameterstarget: number = 1.0The target darkness level between 0 and 1
duration: number = {}The desired animation time in milliseconds. Default is 10 seconds
Returns Promise<any>A Promise which resolves once the animation is complete
- target: number = 1.0The target darkness level between 0 and 1
- duration: number = {}The desired animation time in milliseconds. Default is 10 seconds

Animate a smooth transition of the darkness overlay to a target value.
Only begin animating if another animation is not already in progress.


#### Parameters

- target: number = 1.0The target darkness level between 0 and 1
- duration: number = {}The desired animation time in milliseconds. Default is 10 seconds

The target darkness level between 0 and 1

The desired animation time in milliseconds. Default is 10 seconds


#### Returns Promise<any>

A Promise which resolves once the animation is complete


### clearEffects

- clearEffects(): voidClear all effects containers and animated sources.
Returns void

Clear all effects containers and animated sources.


#### Returns void


### deactivateAnimation

- deactivateAnimation(): voidDeactivate light source animation for AmbientLight objects within this layer
Returns void

Deactivate light source animation for AmbientLight objects within this layer


#### Returns void


### draw

- draw(options?: object): Promise<EffectsCanvasGroup>Draw the canvas group and all its components.
ParametersOptionaloptions: object = {}Returns Promise<EffectsCanvasGroup>A Promise which resolves once the group is fully drawn
Inherited from CanvasGroupMixin(PIXI.Container).draw
- Optionaloptions: object = {}

Draw the canvas group and all its components.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<EffectsCanvasGroup>

A Promise which resolves once the group is fully drawn

Inherited from CanvasGroupMixin(PIXI.Container).draw


### getDarknessLevel

- getDarknessLevel(point: ElevatedPoint, _elevation: any): numberGet the darkness level at the given point.
Parameterspoint: ElevatedPointThe point.
_elevation: anyReturns numberThe darkness level.
- point: ElevatedPointThe point.
- _elevation: any

Get the darkness level at the given point.


#### Parameters

- point: ElevatedPointThe point.
- _elevation: any

The point.


#### Returns number

The darkness level.


### initializeLightSources

- initializeLightSources(): voidInitialize positive light sources which exist within the active Scene.
Packages can use the "initializeLightSources" hook to programmatically add light sources.
Returns void

Initialize positive light sources which exist within the active Scene.
Packages can use the "initializeLightSources" hook to programmatically add light sources.


#### Returns void


### initializePriorityLightSources

- initializePriorityLightSources(): voidInitialize all sources that generate edges (Darkness and certain Light sources).
Darkness sources always generate edges. Light sources only do so if their priority is strictly greater than 0.
The edgesSources array will be rebuilt and sorted by descending priority, in the case of a tie,
DarknessSources take precedence. Otherwise, the existing array is used as-is.
Regardless of whether the array is rebuilt, each source is re-initialized to ensure their geometry is refreshed.
Returns void

Initialize all sources that generate edges (Darkness and certain Light sources).
Darkness sources always generate edges. Light sources only do so if their priority is strictly greater than 0.
The edgesSources array will be rebuilt and sorted by descending priority, in the case of a tie,
DarknessSources take precedence. Otherwise, the existing array is used as-is.
Regardless of whether the array is rebuilt, each source is re-initialized to ensure their geometry is refreshed.

`edgesSources`
#### Returns void


### refreshLighting

- refreshLighting(): voidRefresh the active display of lighting.
Returns void

Refresh the active display of lighting.


#### Returns void


### refreshLightSources

- refreshLightSources(): voidRefresh the state and uniforms of all light sources and darkness sources objects.
Returns void

Refresh the state and uniforms of all light sources and darkness sources objects.


#### Returns void


### refreshVisionSources

- refreshVisionSources(): voidRefresh the state and uniforms of all VisionSource objects.
Returns void

Refresh the state and uniforms of all VisionSource objects.


#### Returns void


### resetPostProcessingFilters

- resetPostProcessingFilters(): voidReset post-processing modes on all Visual Effects masking filters.
Returns void

Reset post-processing modes on all Visual Effects masking filters.


#### Returns void


### tearDown

- tearDown(options?: object): Promise<EffectsCanvasGroup>Remove and destroy all layers from the base canvas.
ParametersOptionaloptions: object = {}Returns Promise<EffectsCanvasGroup>Inherited from CanvasGroupMixin(PIXI.Container).tearDown
- Optionaloptions: object = {}

Remove and destroy all layers from the base canvas.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<EffectsCanvasGroup>

Inherited from CanvasGroupMixin(PIXI.Container).tearDown


### testInsideDarkness

- testInsideDarkness(    point: ElevatedPoint,    options?: { condition?: (source: PointDarknessSource) => boolean },): booleanTest whether the point is inside darkness.
Parameterspoint: ElevatedPointThe point to test.
Optionaloptions: { condition?: (source: PointDarknessSource) => boolean } = {}Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.
Returns booleanIs inside darkness?
- point: ElevatedPointThe point to test.
- Optionaloptions: { condition?: (source: PointDarknessSource) => boolean } = {}Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.
- Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.

Test whether the point is inside darkness.


#### Parameters

- point: ElevatedPointThe point to test.
- Optionaloptions: { condition?: (source: PointDarknessSource) => boolean } = {}Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.
- Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.

The point to test.

`Optional`- Optionalcondition?: (source: PointDarknessSource) => booleanOptional condition a source must satisfy in
order to be tested.


##### Optionalcondition?: (source: PointDarknessSource) => boolean

`Optional`Optional condition a source must satisfy in
order to be tested.


#### Returns boolean

Is inside darkness?


### testInsideLight

- testInsideLight(    point: ElevatedPoint,    options?: { condition?: (source: PointLightSource) => boolean },): booleanTest whether the point is inside light.
Parameterspoint: ElevatedPointThe point to test.
Optionaloptions: { condition?: (source: PointLightSource) => boolean } = {}Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.
Returns booleanIs inside light?
- point: ElevatedPointThe point to test.
- Optionaloptions: { condition?: (source: PointLightSource) => boolean } = {}Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.
- Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.

Test whether the point is inside light.


#### Parameters

- point: ElevatedPointThe point to test.
- Optionaloptions: { condition?: (source: PointLightSource) => boolean } = {}Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.
- Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.

The point to test.

`Optional`- Optionalcondition?: (source: PointLightSource) => booleanOptional condition a source must satisfy in
order to be tested.


##### Optionalcondition?: (source: PointLightSource) => boolean

`Optional`Optional condition a source must satisfy in
order to be tested.


#### Returns boolean

Is inside light?


### toggleMaskingFilters

- toggleMaskingFilters(enabled?: boolean): voidActivate vision masking for visual effects
ParametersOptionalenabled: boolean = trueWhether to enable or disable vision masking
Returns void
- Optionalenabled: boolean = trueWhether to enable or disable vision masking

Activate vision masking for visual effects


#### Parameters

- Optionalenabled: boolean = trueWhether to enable or disable vision masking

`Optional`Whether to enable or disable vision masking


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

