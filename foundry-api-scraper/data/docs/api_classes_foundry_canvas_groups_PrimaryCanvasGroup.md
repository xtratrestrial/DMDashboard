# PrimaryCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.PrimaryCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- PrimaryCanvasGroup


# Class PrimaryCanvasGroup

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a foundry.canvas.containers.CachedContainer
which is rendered to the Scene as a foundry.canvas.containers.SpriteMesh.
This allows the rendered result of the Primary Canvas Group to be affected by a
foundry.canvas.rendering.shaders.BaseSamplerShader.


#### Mixes

CanvasGroupMixin


#### Hierarchy (View Summary)

- CachedContainer<this>PrimaryCanvasGroup
- PrimaryCanvasGroup

- PrimaryCanvasGroup


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_ambienceFilter

`Internal`The ambience filter which is applying post-processing effects.


### Internal_backgroundColor

`Internal`The background color in RGB.


### autoRender

If true, the Container is rendered every frame.
If false, the Container is rendered only if CachedContainer#renderDirty is true.

Inherited from CachedContainer.autoRender


### background

The primary background image configured for the Scene, rendered as a SpriteMesh.


### clearColor

Overrides CachedContainer.clearColor


### displayed

Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?

Inherited from CachedContainer.displayed


### drawings

The collection of PrimaryDrawingContainer objects which are rendered in the Scene.


### foreground

The primary foreground image configured for the Scene, rendered as a SpriteMesh.


### hoverFadeElevation

Occludable objects above this elevation are faded on hover.


### quadtree

A Quadtree which partitions and organizes primary canvas objects.


### renderDirty

Does the Container need to be rendered?
Set to false after the Container is rendered.

Inherited from CachedContainer.renderDirty


### tiles

The collection of SpriteMesh objects which are rendered in the Scene.


### tokens

The collection of SpriteMesh objects which are rendered in the Scene.


### videoMeshes

Track the set of HTMLVideoElements which are currently playing as part of this group.


### Protected_renderPaths

`Protected`A map of render textures, linked to their render function and an optional RGBA clear color.

Inherited from CachedContainer._renderPaths


### StaticBACKGROUND_ELEVATION

`Static`Allow API users to override the default elevation of the background layer.
This is a temporary solution until more formal support for scene levels is added in a future release.


### StaticgroupName

`Static`Overrides CanvasGroupMixin(CachedContainer).groupName


### StaticSORT_LAYERS

`Static`Sort order to break ties on the group/layer level.


### StatictextureConfiguration

`Static`Inherited from CachedContainer.textureConfiguration


## Accessors


### alphaMode

- set alphaMode(mode: ALPHA_MODES): voidSet the alpha mode of the cached container render texture.
Parametersmode: ALPHA_MODESReturns voidInherited from CanvasGroupMixin(CachedContainer).alphaMode
- mode: ALPHA_MODES

Set the alpha mode of the cached container render texture.


#### Parameters

- mode: ALPHA_MODES


#### Returns void

Inherited from CanvasGroupMixin(CachedContainer).alphaMode


### backgroundSource

- get backgroundSource(): null | HTMLImageElement | HTMLVideoElementReturn the base HTML image or video element which provides the background texture.
Returns null | HTMLImageElement | HTMLVideoElement

Return the base HTML image or video element which provides the background texture.


#### Returns null | HTMLImageElement | HTMLVideoElement


### foregroundSource

- get foregroundSource(): null | HTMLImageElement | HTMLVideoElementReturn the base HTML image or video element which provides the foreground texture.
Returns null | HTMLImageElement | HTMLVideoElement

Return the base HTML image or video element which provides the foreground texture.


#### Returns null | HTMLImageElement | HTMLVideoElement


### renderTexture

- get renderTexture(): RenderTextureThe primary render texture bound to this cached container.
Returns RenderTextureInherited from CanvasGroupMixin(CachedContainer).renderTexture

The primary render texture bound to this cached container.


#### Returns RenderTexture

Inherited from CanvasGroupMixin(CachedContainer).renderTexture


### sprite

- get sprite(): SpriteMesh | SpriteA PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
The RenderTexture from this Container is associated with the Sprite which is automatically rendered.
Returns SpriteMesh | SpriteInherited from CanvasGroupMixin(CachedContainer).sprite

A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
The RenderTexture from this Container is associated with the Sprite which is automatically rendered.


#### Returns SpriteMesh | Sprite

Inherited from CanvasGroupMixin(CachedContainer).sprite


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc


### _onMouseMove

- _onMouseMove(currentPos: Point, hasMouseMoved: boolean): voidInternalHandle mousemove events on the primary group to update the hovered state of its children.
ParameterscurrentPos: PointCurrent mouse position
hasMouseMoved: booleanHas the mouse been moved (or it is a simulated mouse move event)?
Returns void
- currentPos: PointCurrent mouse position
- hasMouseMoved: booleanHas the mouse been moved (or it is a simulated mouse move event)?

`Internal`Handle mousemove events on the primary group to update the hovered state of its children.


#### Parameters

- currentPos: PointCurrent mouse position
- hasMouseMoved: booleanHas the mouse been moved (or it is a simulated mouse move event)?

Current mouse position

Has the mouse been moved (or it is a simulated mouse move event)?


#### Returns void


### _render

- _render(renderer: any): voidParametersrenderer: anyReturns voidInherit DocOverrides CanvasGroupMixin(CachedContainer)._render
- renderer: any


#### Parameters

- renderer: any


#### Returns void


#### Inherit Doc

Overrides CanvasGroupMixin(CachedContainer)._render


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc


### addDrawing

- addDrawing(drawing: Drawing): PrimaryGraphicsAdd a PrimaryGraphics to the group.
Parametersdrawing: DrawingThe Drawing being added
Returns PrimaryGraphicsThe created PrimaryGraphics instance
- drawing: DrawingThe Drawing being added

Add a PrimaryGraphics to the group.


#### Parameters

- drawing: DrawingThe Drawing being added

The Drawing being added


#### Returns PrimaryGraphics

The created PrimaryGraphics instance


### addTile

- addTile(tile: Tile): PrimarySpriteMeshDraw the SpriteMesh for a specific Token object.
Parameterstile: TileThe Tile being added
Returns PrimarySpriteMeshThe added PrimarySpriteMesh
- tile: TileThe Tile being added

Draw the SpriteMesh for a specific Token object.


#### Parameters

- tile: TileThe Tile being added

The Tile being added


#### Returns PrimarySpriteMesh

The added PrimarySpriteMesh


### addToken

- addToken(token: Token): PrimarySpriteMeshDraw the SpriteMesh for a specific Token object.
Parameterstoken: TokenThe Token being added
Returns PrimarySpriteMeshThe added PrimarySpriteMesh
- token: TokenThe Token being added

Draw the SpriteMesh for a specific Token object.


#### Parameters

- token: TokenThe Token being added

The Token being added


#### Returns PrimarySpriteMesh

The added PrimarySpriteMesh


### clear

- clear(destroy?: boolean): PrimaryCanvasGroupClear the cached container, removing its current contents.
ParametersOptionaldestroy: boolean = trueTell children that we should destroy texture as well.
Returns PrimaryCanvasGroupA reference to the cleared container for chaining.
Inherited from CachedContainer.clear
- Optionaldestroy: boolean = trueTell children that we should destroy texture as well.

Clear the cached container, removing its current contents.


#### Parameters

- Optionaldestroy: boolean = trueTell children that we should destroy texture as well.

`Optional`Tell children that we should destroy texture as well.


#### Returns PrimaryCanvasGroup

A reference to the cleared container for chaining.

Inherited from CachedContainer.clear


### createRenderTexture

- createRenderTexture(    options?: { clearColor?: number[]; renderFunction?: Function },): RenderTextureCreate a render texture, provide a render method and an optional clear color.
ParametersOptionaloptions: { clearColor?: number[]; renderFunction?: Function } = {}Optional parameters.
OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.
Returns RenderTextureA reference to the created render texture.
Inherited from CachedContainer.createRenderTexture
- Optionaloptions: { clearColor?: number[]; renderFunction?: Function } = {}Optional parameters.
OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.
- OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
- OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.

Create a render texture, provide a render method and an optional clear color.


#### Parameters

- Optionaloptions: { clearColor?: number[]; renderFunction?: Function } = {}Optional parameters.
OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.
- OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
- OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.

`Optional`Optional parameters.

- OptionalclearColor?: number[]An optional clear color to clear the RT before rendering into it.
- OptionalrenderFunction?: FunctionRender function that will be called to render into the RT.


##### OptionalclearColor?: number[]

`Optional`An optional clear color to clear the RT before rendering into it.


##### OptionalrenderFunction?: Function

`Optional`Render function that will be called to render into the RT.


#### Returns RenderTexture

A reference to the created render texture.

Inherited from CachedContainer.createRenderTexture


### destroy

- destroy(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from CachedContainer.destroy
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from CachedContainer.destroy


### refreshPrimarySpriteMesh

- refreshPrimarySpriteMesh(): voidRefresh the primary mesh.
Returns void

Refresh the primary mesh.


#### Returns void


### removeDrawing

- removeDrawing(drawing: Drawing): voidRemove a PrimaryGraphics from the group.
Parametersdrawing: DrawingThe Drawing being removed
Returns void
- drawing: DrawingThe Drawing being removed

Remove a PrimaryGraphics from the group.


#### Parameters

- drawing: DrawingThe Drawing being removed

The Drawing being removed


#### Returns void


### removeRenderTexture

- removeRenderTexture(renderTexture: RenderTexture, destroy?: boolean): voidRemove a previously created render texture.
ParametersrenderTexture: RenderTextureThe render texture to remove.
Optionaldestroy: boolean = trueShould the render texture be destroyed?
Returns voidInherited from CachedContainer.removeRenderTexture
- renderTexture: RenderTextureThe render texture to remove.
- Optionaldestroy: boolean = trueShould the render texture be destroyed?

Remove a previously created render texture.


#### Parameters

- renderTexture: RenderTextureThe render texture to remove.
- Optionaldestroy: boolean = trueShould the render texture be destroyed?

The render texture to remove.

`Optional`Should the render texture be destroyed?


#### Returns void

Inherited from CachedContainer.removeRenderTexture


### removeTile

- removeTile(tile: Tile): voidRemove a TokenMesh from the group.
Parameterstile: TileThe Tile being removed
Returns void
- tile: TileThe Tile being removed

Remove a TokenMesh from the group.


#### Parameters

- tile: TileThe Tile being removed

The Tile being removed


#### Returns void


### removeToken

- removeToken(token: Token): voidRemove a TokenMesh from the group.
Parameterstoken: TokenThe Token being removed
Returns void
- token: TokenThe Token being removed

Remove a TokenMesh from the group.


#### Parameters

- token: TokenThe Token being removed

The Token being removed


#### Returns void


### render

- render(renderer: any): voidParametersrenderer: anyReturns voidInherit DocInherited from CachedContainer.render
- renderer: any


#### Parameters

- renderer: any


#### Returns void


#### Inherit Doc

Inherited from CachedContainer.render


### sortChildren

- sortChildren(): voidOverride the default PIXI.Container behavior for how objects in this container are sorted.
Returns voidOverrides CanvasGroupMixin(CachedContainer).sortChildren

Override the default PIXI.Container behavior for how objects in this container are sorted.


#### Returns void

Overrides CanvasGroupMixin(CachedContainer).sortChildren


### update

- update(): voidUpdate this group. Calculates the canvas transform and bounds of all its children and updates the quadtree.
Returns void

Update this group. Calculates the canvas transform and bounds of all its children and updates the quadtree.


#### Returns void


### Protected#bind

`Protected`- "#bind"(renderer: Renderer, tex: RenderTexture, clearColor?: number[]): voidProtectedBind a render texture to this renderer.
Must be called after bindPrimaryBuffer and before bindInitialBuffer.
Parametersrenderer: RendererThe active canvas renderer.
tex: RenderTextureThe texture to bind.
OptionalclearColor: number[]A custom clear color.
Returns voidInherited from CachedContainer.#bind
- renderer: RendererThe active canvas renderer.
- tex: RenderTextureThe texture to bind.
- OptionalclearColor: number[]A custom clear color.

`Protected`Bind a render texture to this renderer.
Must be called after bindPrimaryBuffer and before bindInitialBuffer.


#### Parameters

- renderer: RendererThe active canvas renderer.
- tex: RenderTextureThe texture to bind.
- OptionalclearColor: number[]A custom clear color.

The active canvas renderer.

The texture to bind.

`Optional`A custom clear color.


#### Returns void

Inherited from CachedContainer.#bind


### Protected#renderSecondary

`Protected`- "#renderSecondary"(renderer: Renderer): voidProtectedCustom rendering for secondary render textures
Parametersrenderer: RendererThe active canvas renderer.
Returns voidInherited from CachedContainer.#renderSecondary
- renderer: RendererThe active canvas renderer.

`Protected`Custom rendering for secondary render textures


#### Parameters

- renderer: RendererThe active canvas renderer.

The active canvas renderer.


#### Returns void

Inherited from CachedContainer.#renderSecondary


### Static_compareObjects

`Static`- _compareObjects(a: any, b: any): numberInternalThe sorting function used to order objects inside the Primary Canvas Group.
Overrides the default sorting function defined for the PIXI.Container.
Sort Tokens PCO above other objects except WeatherEffects, then Drawings PCO, all else held equal.
Parametersa: anyAn object to display
b: anySome other object to display
Returns number
- a: anyAn object to display
- b: anySome other object to display

`Internal`The sorting function used to order objects inside the Primary Canvas Group.
Overrides the default sorting function defined for the PIXI.Container.
Sort Tokens PCO above other objects except WeatherEffects, then Drawings PCO, all else held equal.


#### Parameters

- a: anyAn object to display
- b: anySome other object to display

An object to display

Some other object to display


#### Returns number


### StaticresizeRenderTexture

`Static`- resizeRenderTexture(renderer: Renderer, rt: RenderTexture): voidResize a render texture passed as a parameter with the renderer.
Parametersrenderer: RendererThe active canvas renderer.
rt: RenderTextureThe render texture to resize.
Returns voidInherited from CachedContainer.resizeRenderTexture
- renderer: RendererThe active canvas renderer.
- rt: RenderTextureThe render texture to resize.

Resize a render texture passed as a parameter with the renderer.


#### Parameters

- renderer: RendererThe active canvas renderer.
- rt: RenderTextureThe render texture to resize.

The active canvas renderer.

The render texture to resize.


#### Returns void

Inherited from CachedContainer.resizeRenderTexture


### Settings

- Protected
- Inherited
- Internal


### On This Page

