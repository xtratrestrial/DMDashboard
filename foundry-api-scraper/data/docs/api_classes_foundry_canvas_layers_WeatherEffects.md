# WeatherEffects | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.WeatherEffects.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- WeatherEffects


# Class WeatherEffects

A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more.


#### Hierarchy

- FullCanvasObject<this>WeatherEffects
- WeatherEffects

- WeatherEffects


##### Index


### Properties


### Accessors


### Methods


## Properties


### effects

Array of weather effects linked to this weather container.


### occlusionFilter

The inverse occlusion mask filter bound to this container.


### occlusionMaskConfig

A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.


### suppression

The container in which suppression meshed are added.


### terrainMaskConfig

A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.


### weatherEffects

The container in which effects are added.


## Accessors


### elevation

- get elevation(): numberThe elevation of this object.
Returns numberDefaultInfinity
Copy

The elevation of this object.


#### Returns number


#### Default

```javascript
Infinity
Copy
```

`Infinity`
### hookName

- get hookName(): stringReturns string


#### Returns string


### sort

- get sort(): numberA key which resolves ties amongst objects at the same elevation within the same layer.
Returns numberDefault0
Copy

A key which resolves ties amongst objects at the same elevation within the same layer.


#### Returns number


#### Default

```javascript
0
Copy
```

`0`
### sortLayer

- get sortLayer(): numberA key which resolves ties amongst objects at the same elevation of different layers.
Returns numberDefaultPrimaryCanvasGroup.SORT_LAYERS.WEATHER
Copy

A key which resolves ties amongst objects at the same elevation of different layers.


#### Returns number


#### Default

```javascript
PrimaryCanvasGroup.SORT_LAYERS.WEATHER
Copy
```

`PrimaryCanvasGroup.SORT_LAYERS.WEATHER`
### zIndex

- get zIndex(): numberA key which resolves ties amongst objects at the same elevation within the same layer and same sort.
Returns numberDefault0
Copy

Overrides FullCanvasObjectMixin(CanvasLayer).zIndex
- set zIndex(value: number): voidThe zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other display objects within the same container.
Parametersvalue: numberReturns voidSeePIXI.Container#sortableChildren
Overrides FullCanvasObjectMixin(CanvasLayer).zIndex
- value: number

A key which resolves ties amongst objects at the same elevation within the same layer and same sort.


#### Returns number


#### Default

```javascript
0
Copy
```

`0`Overrides FullCanvasObjectMixin(CanvasLayer).zIndex

The zIndex of the displayObject.

If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other display objects within the same container.


#### Parameters

- value: number


#### Returns void


#### See

PIXI.Container#sortableChildren

Overrides FullCanvasObjectMixin(CanvasLayer).zIndex


### StaticlayerOptions

`Static`- get layerOptions(): objectReturns objectInherit Doc


#### Returns object


#### Inherit Doc


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


### _tearDown

- _tearDown(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc


### calculateBounds

- calculateBounds(): voidReturns voidInherited from FullCanvasObjectMixin(CanvasLayer).calculateBounds


#### Returns void

Inherited from FullCanvasObjectMixin(CanvasLayer).calculateBounds


### clearEffects

- clearEffects(): voidClear the weather container.
Returns void

Clear the weather container.


#### Returns void


### initializeEffects

- initializeEffects(weatherEffectsConfig?: object): voidInitialize the weather container from a weather config object.
ParametersOptionalweatherEffectsConfig: objectWeather config object (or null/undefined to clear the container).
Returns void
- OptionalweatherEffectsConfig: objectWeather config object (or null/undefined to clear the container).

Initialize the weather container from a weather config object.


#### Parameters

- OptionalweatherEffectsConfig: objectWeather config object (or null/undefined to clear the container).

`Optional`Weather config object (or null/undefined to clear the container).


#### Returns void


### Protected StaticconfigureOcclusionMask

`Protected``Static`- configureOcclusionMask(    context: Shader,    config?: WeatherOcclusionMaskConfiguration,): voidProtectedSet the occlusion uniforms for this weather shader.
Parameterscontext: ShaderThe shader context
config: WeatherOcclusionMaskConfiguration = {}Occlusion masking options
Returns void
- context: ShaderThe shader context
- config: WeatherOcclusionMaskConfiguration = {}Occlusion masking options

`Protected`Set the occlusion uniforms for this weather shader.


#### Parameters

- context: ShaderThe shader context
- config: WeatherOcclusionMaskConfiguration = {}Occlusion masking options

The shader context

Occlusion masking options


#### Returns void


### Protected StaticconfigureTerrainMask

`Protected``Static`- configureTerrainMask(    context: Shader,    config?: WeatherTerrainMaskConfiguration,): voidProtectedSet the terrain uniforms for this weather shader.
Parameterscontext: ShaderThe shader context
config: WeatherTerrainMaskConfiguration = {}Terrain masking options
Returns void
- context: ShaderThe shader context
- config: WeatherTerrainMaskConfiguration = {}Terrain masking options

`Protected`Set the terrain uniforms for this weather shader.


#### Parameters

- context: ShaderThe shader context
- config: WeatherTerrainMaskConfiguration = {}Terrain masking options

The shader context

Terrain masking options


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

