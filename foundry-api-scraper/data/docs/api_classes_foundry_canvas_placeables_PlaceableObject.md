# PlaceableObject | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.placeables.PlaceableObject.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- placeables
- PlaceableObject


# Class PlaceableObjectAbstract

`Abstract`An Abstract Base Class which defines a Placeable Object which represents a Document placed on the Canvas


#### Hierarchy (View Summary)

- RenderFlagObject<this>PlaceableObjectcanvas.placeables.Drawingcanvas.placeables.Notecanvas.placeables.Regioncanvas.placeables.Tilecanvas.placeables.Tokencanvas.placeables.MeasuredTemplatecanvas.placeables.Wallcanvas.placeables.AmbientLightcanvas.placeables.AmbientSound
- PlaceableObjectcanvas.placeables.Drawingcanvas.placeables.Notecanvas.placeables.Regioncanvas.placeables.Tilecanvas.placeables.Tokencanvas.placeables.MeasuredTemplatecanvas.placeables.Wallcanvas.placeables.AmbientLightcanvas.placeables.AmbientSound
- canvas.placeables.Drawing
- canvas.placeables.Note
- canvas.placeables.Region
- canvas.placeables.Tile
- canvas.placeables.Token
- canvas.placeables.MeasuredTemplate
- canvas.placeables.Wall
- canvas.placeables.AmbientLight
- canvas.placeables.AmbientSound

- PlaceableObjectcanvas.placeables.Drawingcanvas.placeables.Notecanvas.placeables.Regioncanvas.placeables.Tilecanvas.placeables.Tokencanvas.placeables.MeasuredTemplatecanvas.placeables.Wallcanvas.placeables.AmbientLightcanvas.placeables.AmbientSound
- canvas.placeables.Drawing
- canvas.placeables.Note
- canvas.placeables.Region
- canvas.placeables.Tile
- canvas.placeables.Token
- canvas.placeables.MeasuredTemplate
- canvas.placeables.Wall
- canvas.placeables.AmbientLight
- canvas.placeables.AmbientSound

- canvas.placeables.Drawing
- canvas.placeables.Note
- canvas.placeables.Region
- canvas.placeables.Tile
- canvas.placeables.Token
- canvas.placeables.MeasuredTemplate
- canvas.placeables.Wall
- canvas.placeables.AmbientLight
- canvas.placeables.AmbientSound


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new PlaceableObject(document: CanvasDocument): PlaceableObjectParametersdocument: CanvasDocumentThe Document instance represented by this object
Returns PlaceableObjectOverrides RenderFlagsMixin(PIXI.Container).constructor
- document: CanvasDocumentThe Document instance represented by this object


#### Parameters

- document: CanvasDocumentThe Document instance represented by this object

The Document instance represented by this object


#### Returns PlaceableObject

Overrides RenderFlagsMixin(PIXI.Container).constructor


## Properties


### controlIcon

A control icon for interacting with the object


### document

A reference to the Scene embedded Document instance which this object represents


### mouseInteractionManager

A mouse interaction manager instance which handles mouse workflows related to this object.


### renderFlags

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin(PIXI.Container).renderFlags


### scene

Retain a reference to the Scene within which this Placeable Object resides


### StaticembeddedName

`Static`Identify the official Document name for this PlaceableObject class


### StaticRENDER_FLAG_PRIORITY

`Static`The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from RenderFlagsMixin(PIXI.Container).RENDER_FLAG_PRIORITY


### StaticRENDER_FLAGS

`Static`The flags declared here are required for all PlaceableObject subclasses to also support.

Overrides RenderFlagsMixin(PIXI.Container).RENDER_FLAGS


## Accessors


### _original

- get _original(): undefined | PlaceableObjectThe object that this object is a preview of if this object is a preview.
Returns undefined | PlaceableObject

The object that this object is a preview of if this object is a preview.


#### Returns undefined | PlaceableObject


### bounds

- get bounds(): RectangleThe bounding box for this PlaceableObject.
This is required if the layer uses a Quadtree, otherwise it is optional
Returns Rectangle

The bounding box for this PlaceableObject.
This is required if the layer uses a Quadtree, otherwise it is optional


#### Returns Rectangle


### center

- get center(): PointThe central coordinate pair of the placeable object based on it's own width and height
Returns Point

The central coordinate pair of the placeable object based on it's own width and height


#### Returns Point


### controlled

- get controlled(): booleanAn indicator for whether the object is currently controlled
Returns boolean

An indicator for whether the object is currently controlled


#### Returns boolean


### hasActiveHUD

- get hasActiveHUD(): booleanIs the HUD display active for this Placeable?
Returns boolean

Is the HUD display active for this Placeable?


#### Returns boolean


### hasPreview

- get hasPreview(): booleanDoes there exist a temporary preview of this placeable object?
Returns boolean

Does there exist a temporary preview of this placeable object?


#### Returns boolean


### hover

- get hover(): booleanAn indicator for whether the object is currently a hover target
Returns boolean

An indicator for whether the object is currently a hover target


#### Returns boolean


### id

- get id(): stringThe id of the corresponding Document which this PlaceableObject represents.
Returns string

The id of the corresponding Document which this PlaceableObject represents.


#### Returns string


### interactionState

- get interactionState(): | undefined| {    CLICKED: number;    DRAG: number;    DROP: number;    GRABBED: number;    HOVER: number;    NONE: number;}The mouse interaction state of this placeable.
Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }

The mouse interaction state of this placeable.


#### Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }


### isOwner

- get isOwner(): booleanA convenient reference for whether the current User has full control over the document.
Returns boolean

A convenient reference for whether the current User has full control over the document.


#### Returns boolean


### isPreview

- get isPreview(): booleanIs this placeable object a temporary preview?
Returns boolean

Is this placeable object a temporary preview?


#### Returns boolean


### layer

- get layer(): PlaceablesLayerProvide a reference to the CanvasLayer which contains this PlaceableObject.
Returns PlaceablesLayer

Provide a reference to the CanvasLayer which contains this PlaceableObject.


#### Returns PlaceablesLayer


### objectId

- get objectId(): stringA unique identifier which is used to uniquely identify elements on the canvas related to this object.
Returns string

A unique identifier which is used to uniquely identify elements on the canvas related to this object.


#### Returns string


### sheet

- get sheet(): DocumentSheetV2A document sheet used to configure the properties of this Placeable Object or the Document it represents.
Returns DocumentSheetV2

A document sheet used to configure the properties of this Placeable Object or the Document it represents.


#### Returns DocumentSheetV2


### sourceId

- get sourceId(): stringThe named identified for the source object associated with this PlaceableObject.
This differs from the objectId because the sourceId is the same for preview objects as for the original.
Returns string

The named identified for the source object associated with this PlaceableObject.
This differs from the objectId because the sourceId is the same for preview objects as for the original.


#### Returns string


### Staticimplementation

`Static`- get implementation(): typeof PlaceableObjectReturn a reference to the configured subclass of this base PlaceableObject type.
Returns typeof PlaceableObject

Return a reference to the configured subclass of this base PlaceableObject type.


#### Returns typeof PlaceableObject


## Methods


### _getShiftedPosition

- _getShiftedPosition(dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): objectInternalObtain a shifted position for the Placeable Object.
Parametersdx: -1 | 0 | 1The number of grid units to shift along the X-axis
dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
Returns objectThe shifted target coordinates
- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis

`Internal`Obtain a shifted position for the Placeable Object.


#### Parameters

- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis

The number of grid units to shift along the X-axis

The number of grid units to shift along the Y-axis

The number of grid units to shift along the Z-axis


#### Returns object

The shifted target coordinates


### _partialDraw

- _partialDraw(fn: () => Promise<void>): Promise<PlaceableObject>InternalExecute a partial draw.
Parametersfn: () => Promise<void>The draw function
Returns Promise<PlaceableObject>The drawn object
- fn: () => Promise<void>The draw function

`Internal`Execute a partial draw.


#### Parameters

- fn: () => Promise<void>The draw function

The draw function


#### Returns Promise<PlaceableObject>

The drawn object


### _pasteObject

- _pasteObject(    offset: Point,    options?: { hidden?: boolean; snap?: boolean },): objectInternalGet the data of the copied object pasted at the position given by the offset.
Called by foundry.canvas.layers.PlaceablesLayer#pasteObjects for each copied object.
Parametersoffset: PointThe offset relative from the current position to the destination
Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options of foundry.canvas.layers.PlaceablesLayer#pasteObjects
Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap to the grid. Default is true.
Returns objectThe update data
- offset: PointThe offset relative from the current position to the destination
- Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options of foundry.canvas.layers.PlaceablesLayer#pasteObjects
Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap to the grid. Default is true.
- Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap to the grid. Default is true.

`Internal`Get the data of the copied object pasted at the position given by the offset.
Called by foundry.canvas.layers.PlaceablesLayer#pasteObjects for each copied object.


#### Parameters

- offset: PointThe offset relative from the current position to the destination
- Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options of foundry.canvas.layers.PlaceablesLayer#pasteObjects
Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap to the grid. Default is true.
- Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap to the grid. Default is true.

The offset relative from the current position to the destination

`Optional`Options of foundry.canvas.layers.PlaceablesLayer#pasteObjects

- Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap to the grid. Default is true.


##### Optionalhidden?: boolean

`Optional`Paste in a hidden state, if applicable. Default is false.


##### Optionalsnap?: boolean

`Optional`Snap to the grid. Default is true.


#### Returns object

The update data


### _updateQuadtree

- _updateQuadtree(): voidInternalUpdate the quadtree.
Returns void

`Internal`Update the quadtree.


#### Returns void


### _updateRotation

- _updateRotation(    options?: { angle?: number; delta?: number; snap?: number },): numberInternalDetermine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
Parametersoptions: { angle?: number; delta?: number; snap?: number } = {}An object which defines the rotation update parameters
Optionalangle?: numberAn explicit angle, either this or delta must be provided
Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.
Returns numberThe new rotation angle for the object
- options: { angle?: number; delta?: number; snap?: number } = {}An object which defines the rotation update parameters
Optionalangle?: numberAn explicit angle, either this or delta must be provided
Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.
- Optionalangle?: numberAn explicit angle, either this or delta must be provided
- Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
- Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.

`Internal`Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.


#### Parameters

- options: { angle?: number; delta?: number; snap?: number } = {}An object which defines the rotation update parameters
Optionalangle?: numberAn explicit angle, either this or delta must be provided
Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.
- Optionalangle?: numberAn explicit angle, either this or delta must be provided
- Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
- Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.

An object which defines the rotation update parameters

- Optionalangle?: numberAn explicit angle, either this or delta must be provided
- Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
- Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.


##### Optionalangle?: number

`Optional`An explicit angle, either this or delta must be provided


##### Optionaldelta?: number

`Optional`A relative angle delta, either this or the angle must be provided


##### Optionalsnap?: number

`Optional`A precision (in degrees) to which the resulting angle should snap. Default is 0.


#### Returns number

The new rotation angle for the object


### activateListeners

- activateListeners(): voidActivate interactivity for the Placeable Object
Returns void

Activate interactivity for the Placeable Object


#### Returns void


### applyRenderFlags

- applyRenderFlags(): voidReturns voidOverrides RenderFlagsMixin(PIXI.Container).applyRenderFlags


#### Returns void

Overrides RenderFlagsMixin(PIXI.Container).applyRenderFlags


### can

- can(    user: documents.User,    action:        | "update"        | "delete"        | "view"        | "create"        | "control"        | "configure"        | "hover"        | "drag"        | "HUD",): booleanTest whether a user can perform a certain interaction regarding a Placeable Object
Parametersuser: documents.UserThe User performing the action. Must be equal to game.user.
action:     | "update"    | "delete"    | "view"    | "create"    | "control"    | "configure"    | "hover"    | "drag"    | "HUD"The named action being attempted
Returns booleanDoes the User have rights to perform the action?
- user: documents.UserThe User performing the action. Must be equal to game.user.
- action:     | "update"    | "delete"    | "view"    | "create"    | "control"    | "configure"    | "hover"    | "drag"    | "HUD"The named action being attempted

Test whether a user can perform a certain interaction regarding a Placeable Object


#### Parameters

- user: documents.UserThe User performing the action. Must be equal to game.user.
- action:     | "update"    | "delete"    | "view"    | "create"    | "control"    | "configure"    | "hover"    | "drag"    | "HUD"The named action being attempted

The User performing the action. Must be equal to game.user.

`game.user`The named action being attempted


#### Returns boolean

Does the User have rights to perform the action?


### clear

- clear(): PlaceableObjectClear the display of the existing object.
Returns PlaceableObjectThe cleared object

Clear the display of the existing object.


#### Returns PlaceableObject

The cleared object


### clone

- clone(): PlaceableObjectClone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.
Returns PlaceableObjectA new object with identical data

Clone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.


#### Returns PlaceableObject

A new object with identical data


### control

- control(options?: { releaseOthers?: boolean }): booleanAssume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
ParametersOptionaloptions: { releaseOthers?: boolean } = {}Additional options which modify the control request
OptionalreleaseOthers?: booleanRelease any other controlled objects first
Returns booleanA flag denoting whether control was successful
- Optionaloptions: { releaseOthers?: boolean } = {}Additional options which modify the control request
OptionalreleaseOthers?: booleanRelease any other controlled objects first
- OptionalreleaseOthers?: booleanRelease any other controlled objects first

Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors


#### Parameters

- Optionaloptions: { releaseOthers?: boolean } = {}Additional options which modify the control request
OptionalreleaseOthers?: booleanRelease any other controlled objects first
- OptionalreleaseOthers?: booleanRelease any other controlled objects first

`Optional`Additional options which modify the control request

- OptionalreleaseOthers?: booleanRelease any other controlled objects first


##### OptionalreleaseOthers?: boolean

`Optional`Release any other controlled objects first


#### Returns boolean

A flag denoting whether control was successful


### destroy

- destroy(options: any): anyParametersoptions: anyReturns anyInherit Doc
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc


### draw

- draw(options?: object): Promise<PlaceableObject>Draw the placeable object into its parent container
ParametersOptionaloptions: object = {}Options which may modify the draw and refresh workflow
Returns Promise<PlaceableObject>The drawn object
- Optionaloptions: object = {}Options which may modify the draw and refresh workflow

Draw the placeable object into its parent container


#### Parameters

- Optionaloptions: object = {}Options which may modify the draw and refresh workflow

`Optional`Options which may modify the draw and refresh workflow


#### Returns Promise<PlaceableObject>

The drawn object


### getSnappedPosition

- getSnappedPosition(position?: any): PointGet the snapped position for a given position or the current position.
ParametersOptionalposition: anyThe position to be used instead of the current position
Returns PointThe snapped position
- Optionalposition: anyThe position to be used instead of the current position

Get the snapped position for a given position or the current position.


#### Parameters

- Optionalposition: anyThe position to be used instead of the current position

`Optional`The position to be used instead of the current position


#### Returns Point

The snapped position


### refresh

- refresh(options?: object): PlaceableObjectRefresh all incremental render flags for the PlaceableObject.
This method is no longer used by the core software but provided for backwards compatibility.
ParametersOptionaloptions: object = {}Options which may modify the refresh workflow
Returns PlaceableObjectThe refreshed object
- Optionaloptions: object = {}Options which may modify the refresh workflow

Refresh all incremental render flags for the PlaceableObject.
This method is no longer used by the core software but provided for backwards compatibility.


#### Parameters

- Optionaloptions: object = {}Options which may modify the refresh workflow

`Optional`Options which may modify the refresh workflow


#### Returns PlaceableObject

The refreshed object


### release

- release(options?: object): booleanRelease control over a PlaceableObject, removing it from the controlled set
Parametersoptions: object = {}Options which modify the releasing workflow
Returns booleanA Boolean flag confirming the object was released.
- options: object = {}Options which modify the releasing workflow

Release control over a PlaceableObject, removing it from the controlled set


#### Parameters

- options: object = {}Options which modify the releasing workflow

Options which modify the releasing workflow


#### Returns boolean

A Boolean flag confirming the object was released.


### rotate

- rotate(angle: number, snap: number): Promise<PlaceableObject>Rotate the PlaceableObject to a certain angle of facing
Parametersangle: numberThe desired angle of rotation
snap: numberSnap the angle of rotation to a certain target degree increment
Returns Promise<PlaceableObject>The rotated object
- angle: numberThe desired angle of rotation
- snap: numberSnap the angle of rotation to a certain target degree increment

Rotate the PlaceableObject to a certain angle of facing


#### Parameters

- angle: numberThe desired angle of rotation
- snap: numberSnap the angle of rotation to a certain target degree increment

The desired angle of rotation

Snap the angle of rotation to a certain target degree increment


#### Returns Promise<PlaceableObject>

The rotated object


### Protected_applyRenderFlags

`Protected`- _applyRenderFlags(flags: Record<string, boolean>): voidProtectedApply render flags before a render occurs.
Parametersflags: Record<string, boolean>The render flags which must be applied
Returns void
- flags: Record<string, boolean>The render flags which must be applied

`Protected`Apply render flags before a render occurs.


#### Parameters

- flags: Record<string, boolean>The render flags which must be applied

The render flags which must be applied


#### Returns void


### Protected_canConfigure

`Protected`- _canConfigure(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to configure the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to configure the Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canControl

`Protected`- _canControl(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to control the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to control the Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canCreate

`Protected`- _canCreate(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to create the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to create the underlying Document?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canDelete

`Protected`- _canDelete(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to delete the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to delete the underlying Document?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canDrag

`Protected`- _canDrag(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to drag this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to drag this Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canDragLeftStart

`Protected`- _canDragLeftStart(    user: documents.User,    event: FederatedEvent<UIEvent | PixiTouch>,    options?: { notify: boolean },): booleanProtectedDoes the User have permission to left-click drag this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
event: FederatedEvent<UIEvent | PixiTouch>The pointer event
Optionaloptions: { notify: boolean } = {}Options, used internally
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- event: FederatedEvent<UIEvent | PixiTouch>The pointer event
- Optionaloptions: { notify: boolean } = {}Options, used internally

`Protected`Does the User have permission to left-click drag this Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- event: FederatedEvent<UIEvent | PixiTouch>The pointer event
- Optionaloptions: { notify: boolean } = {}Options, used internally

The User performing the action. Always equal to game.user.

`game.user`The pointer event

`Optional`Options, used internally


#### Returns boolean


### Protected_canHover

`Protected`- _canHover(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to hover on this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to hover on this Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canHUD

`Protected`- _canHUD(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedCan the User access the HUD for this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Can the User access the HUD for this Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canUpdate

`Protected`- _canUpdate(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to update the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to update the underlying Document?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_canView

`Protected`- _canView(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to view details of the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns boolean
- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

`Protected`Does the User have permission to view details of the Placeable Object?


#### Parameters

- user: documents.UserThe User performing the action. Always equal to game.user.
- Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user``Optional`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean


### Protected_createInteractionManager

`Protected`- _createInteractionManager(): MouseInteractionManagerProtectedCreate a standard MouseInteractionManager for the PlaceableObject
Returns MouseInteractionManager

`Protected`Create a standard MouseInteractionManager for the PlaceableObject


#### Returns MouseInteractionManager


### Protected_destroy

`Protected`- _destroy(options?: object): voidProtectedThe inner _destroy method which may optionally be defined by each PlaceableObject subclass.
ParametersOptionaloptions: objectOptions passed to the initial destroy call
Returns void
- Optionaloptions: objectOptions passed to the initial destroy call

`Protected`The inner _destroy method which may optionally be defined by each PlaceableObject subclass.


#### Parameters

- Optionaloptions: objectOptions passed to the initial destroy call

`Optional`Options passed to the initial destroy call


#### Returns void


### Protected Abstract_draw

`Protected``Abstract`- _draw(options: object): Promise<void>ProtectedThe inner _draw method which must be defined by each PlaceableObject subclass.
Parametersoptions: objectOptions which may modify the draw workflow
Returns Promise<void>
- options: objectOptions which may modify the draw workflow

`Protected`The inner _draw method which must be defined by each PlaceableObject subclass.


#### Parameters

- options: objectOptions which may modify the draw workflow

Options which may modify the draw workflow


#### Returns Promise<void>


### Protected_finalizeDragLeft

`Protected`- _finalizeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedFinalize the left-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Finalize the left-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns void


### Protected_finalizeDragRight

`Protected`- _finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedFinalize the right-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Finalize the right-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns void


### Protected_getTargetAlpha

`Protected`- _getTargetAlpha(): numberProtectedGet the target opacity that should be used for a Placeable Object depending on its preview state.
Returns number

`Protected`Get the target opacity that should be used for a Placeable Object depending on its preview state.


#### Returns number


### Protected_initializeDragLeft

`Protected`- _initializeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedInitialize the left-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Initialize the left-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_initializeDragRight

`Protected`- _initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedInitialize the right-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Initialize the right-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onClickLeft

`Protected`- _onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a single left-click event to assume control of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns boolean | void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single left-click event to assume control of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void


### Protected_onClickLeft2

`Protected`- _onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a double left-click event to activate
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a double left-click event to activate


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onClickRight

`Protected`- _onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single right-click event to configure properties of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single right-click event to configure properties of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onClickRight2

`Protected`- _onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a double right-click event to configure properties of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a double right-click event to configure properties of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onControl

`Protected`- _onControl(options: object): voidProtectedAdditional events that trigger once control of the object is established
Parametersoptions: objectOptional parameters which apply for specific implementations
Returns void
- options: objectOptional parameters which apply for specific implementations

`Protected`Additional events that trigger once control of the object is established


#### Parameters

- options: objectOptional parameters which apply for specific implementations

Optional parameters which apply for specific implementations


#### Returns void


### Protected_onCreate

`Protected`- _onCreate(data: object, options: object, userId: string): voidProtectedRegister pending canvas operations which should occur after a new PlaceableObject of this type is created
Parametersdata: objectoptions: objectuserId: stringReturns void
- data: object
- options: object
- userId: string

`Protected`Register pending canvas operations which should occur after a new PlaceableObject of this type is created


#### Parameters

- data: object
- options: object
- userId: string


#### Returns void


### Protected_onDelete

`Protected`- _onDelete(options: object, userId: string): voidProtectedDefine additional steps taken when an existing placeable object of this type is deleted
Parametersoptions: objectuserId: stringReturns void
- options: object
- userId: string

`Protected`Define additional steps taken when an existing placeable object of this type is deleted


#### Parameters

- options: object
- userId: string


#### Returns void


### Protected_onDragEnd

`Protected`- _onDragEnd(): voidProtectedConclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.
Returns void

`Protected`Conclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.


#### Returns void


### Protected_onDragLeftCancel

`Protected`- _onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns boolean | voidIf false, the cancellation is prevented
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns boolean | void

If false, the cancellation is prevented


### Protected_onDragLeftDrop

`Protected`- _onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): undefined | falseProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns undefined | false
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns undefined | false


### Protected_onDragLeftMove

`Protected`- _onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onDragLeftStart

`Protected`- _onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur when a mouse-drag action is first begun.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns boolean | voidIf false, the start if prevented
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur when a mouse-drag action is first begun.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void

If false, the start if prevented


### Protected_onDragRightCancel

`Protected`- _onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns boolean | voidIf false, the cancellation is prevented
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns boolean | void

If false, the cancellation is prevented


### Protected_onDragRightDrop

`Protected`- _onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onDragRightMove

`Protected`- _onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onDragRightStart

`Protected`- _onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns false | voidIf false, the start if prevented
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns false | void

If false, the start if prevented


### Protected_onDragStart

`Protected`- _onDragStart(): voidProtectedBegin a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.
Returns void

`Protected`Begin a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.


#### Returns void


### Protected_onHoverIn

`Protected`- _onHoverIn(    event: FederatedEvent<UIEvent | PixiTouch>,    options?: { hoverOutOthers?: boolean },): boolean | voidProtectedActions that should be taken for this Placeable Object when a mouseover event occurs.
Hover events on PlaceableObject instances allow event propagation by default.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
options: { hoverOutOthers?: boolean } = {}Options which customize event handling
OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects
Returns boolean | void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- options: { hoverOutOthers?: boolean } = {}Options which customize event handling
OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects
- OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects

`Protected`Actions that should be taken for this Placeable Object when a mouseover event occurs.
Hover events on PlaceableObject instances allow event propagation by default.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- options: { hoverOutOthers?: boolean } = {}Options which customize event handling
OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects
- OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects

The triggering canvas interaction event

Options which customize event handling

- OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects


##### OptionalhoverOutOthers?: boolean

`Optional`Trigger hover-out behavior on sibling objects


#### Returns boolean | void


### Protected_onHoverOut

`Protected`- _onHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedActions that should be taken for this Placeable Object when a mouseout event occurs
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Actions that should be taken for this Placeable Object when a mouseout event occurs


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onLongPress

`Protected`- _onLongPress(event: FederatedEvent<UIEvent | PixiTouch>, origin: Point): anyProtectedCallback action which occurs on a long press.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
origin: PointThe local canvas coordinates of the mousepress.
Returns any
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- origin: PointThe local canvas coordinates of the mousepress.

`Protected`Callback action which occurs on a long press.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- origin: PointThe local canvas coordinates of the mousepress.

The triggering canvas interaction event

The local canvas coordinates of the mousepress.


#### Returns any


### Protected_onRelease

`Protected`- _onRelease(options: object): voidProtectedAdditional events which trigger once control of the object is released
Parametersoptions: objectOptions which modify the releasing workflow
Returns void
- options: objectOptions which modify the releasing workflow

`Protected`Additional events which trigger once control of the object is released


#### Parameters

- options: objectOptions which modify the releasing workflow

Options which modify the releasing workflow


#### Returns void


### Protected_onUnclickLeft

`Protected`- _onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single left-unclick event to assume control of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single left-unclick event to assume control of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onUnclickRight

`Protected`- _onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single right-unclick event
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single right-unclick event


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void


### Protected_onUpdate

`Protected`- _onUpdate(changed: object, options: object, userId: string): voidProtectedDefine additional steps taken when an existing placeable object of this type is updated with new data
Parameterschanged: objectoptions: objectuserId: stringReturns void
- changed: object
- options: object
- userId: string

`Protected`Define additional steps taken when an existing placeable object of this type is updated with new data


#### Parameters

- changed: object
- options: object
- userId: string


#### Returns void


### Protected_overlapsSelection

`Protected`- _overlapsSelection(rectangle: Rectangle): booleanProtectedIs this PlaceableObject within the selection rectangle?
Parametersrectangle: RectangleThe selection rectangle
Returns boolean
- rectangle: RectangleThe selection rectangle

`Protected`Is this PlaceableObject within the selection rectangle?


#### Parameters

- rectangle: RectangleThe selection rectangle

The selection rectangle


#### Returns boolean


### Protected_prepareDragLeftDropUpdates

`Protected`- _prepareDragLeftDropUpdates(    event: FederatedEvent<UIEvent | PixiTouch>,): null | object[] | [updates: object[], options?: object]ProtectedPerform the database updates that should occur as the result of a drag-left-drop operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns null | object[] | [updates: object[], options?: object]An array of database updates to perform for documents in this collection
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Perform the database updates that should occur as the result of a drag-left-drop operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns null | object[] | [updates: object[], options?: object]

An array of database updates to perform for documents in this collection


### Protected_propagateLeftClick

`Protected`- _propagateLeftClick(event: FederatedEvent<UIEvent | PixiTouch>): booleanProtectedShould the placeable propagate left click downstream?
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns boolean
- event: FederatedEvent<UIEvent | PixiTouch>

`Protected`Should the placeable propagate left click downstream?


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns boolean


### Protected_propagateRightClick

`Protected`- _propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): booleanProtectedShould the placeable propagate right click downstream?
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns boolean
- event: FederatedEvent<UIEvent | PixiTouch>

`Protected`Should the placeable propagate right click downstream?


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns boolean


### Protected#onDragRightStart

`Protected`- "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns false | voidIf false, the start if prevented
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns false | void

If false, the start if prevented


### Static_getCopiedObjectsOrigin

`Static`- _getCopiedObjectsOrigin(copies: PlaceableObject[]): PointInternalGet the origin used for pasting the copied objects.
Parameterscopies: PlaceableObject[]The objects that are copied
Returns PointThe offset
- copies: PlaceableObject[]The objects that are copied

`Internal`Get the origin used for pasting the copied objects.


#### Parameters

- copies: PlaceableObject[]The objects that are copied

The objects that are copied


#### Returns Point

The offset


### Static_getShiftedPosition

`Static`- _getShiftedPosition(    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,    position: ElevatedPoint,    snapped: ElevatedPoint,    grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>,): ElevatedPointInternalObtain the shifted position.
Parametersdx: -1 | 0 | 1The number of grid units to shift along the X-axis
dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
position: ElevatedPointThe unsnapped position
snapped: ElevatedPointThe snapped position
grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>The grid
Returns ElevatedPointThe shifted target coordinates
- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
- position: ElevatedPointThe unsnapped position
- snapped: ElevatedPointThe snapped position
- grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>The grid

`Internal`Obtain the shifted position.


#### Parameters

- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
- position: ElevatedPointThe unsnapped position
- snapped: ElevatedPointThe snapped position
- grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>The grid

The number of grid units to shift along the X-axis

The number of grid units to shift along the Y-axis

The number of grid units to shift along the Z-axis

The unsnapped position

The snapped position

The grid


#### Returns ElevatedPoint

The shifted target coordinates


### Settings

- Protected
- Inherited
- Internal


### On This Page

