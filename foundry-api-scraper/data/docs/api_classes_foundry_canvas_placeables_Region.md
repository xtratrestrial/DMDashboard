# Region | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.placeables.Region.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- placeables
- Region


# Class Region

A Region is an implementation of PlaceableObject which represents a Region document
within a viewed Scene on the game canvas.


#### See

- foundry.documents.RegionDocument
- foundry.canvas.layers.RegionLayer


#### Hierarchy (View Summary)

- PlaceableObjectRegion
- Region

- Region


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Region(document: CanvasDocument): canvas.placeables.RegionParametersdocument: CanvasDocumentThe Document instance represented by this object
Returns canvas.placeables.RegionInherited from PlaceableObject.constructor
- document: CanvasDocumentThe Document instance represented by this object


#### Parameters

- document: CanvasDocumentThe Document instance represented by this object

The Document instance represented by this object


#### Returns canvas.placeables.Region

Inherited from PlaceableObject.constructor


## Properties


### controlIcon

A control icon for interacting with the object

Inherited from PlaceableObject.controlIcon


### document

A reference to the Scene embedded Document instance which this object represents

Inherited from PlaceableObject.document


### mouseInteractionManager

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from PlaceableObject.mouseInteractionManager


### renderFlags

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from PlaceableObject.renderFlags


### scene

Retain a reference to the Scene within which this Placeable Object resides

Inherited from PlaceableObject.scene


### StaticembeddedName

`Static`Overrides PlaceableObject.embeddedName


### StaticRENDER_FLAG_PRIORITY

`Static`The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from PlaceableObject.RENDER_FLAG_PRIORITY


### StaticRENDER_FLAGS

`Static`Overrides PlaceableObject.RENDER_FLAGS


## Accessors


### _original

- get _original(): undefined | PlaceableObjectThe object that this object is a preview of if this object is a preview.
Returns undefined | PlaceableObjectInherited from PlaceableObject._original

The object that this object is a preview of if this object is a preview.


#### Returns undefined | PlaceableObject

Inherited from PlaceableObject._original


### bounds

- get bounds(): anyReturns anyOverrides PlaceableObject.bounds


#### Returns any

Overrides PlaceableObject.bounds


### center

- get center(): PointReturns PointOverrides PlaceableObject.center


#### Returns Point

Overrides PlaceableObject.center


### controlled

- get controlled(): booleanAn indicator for whether the object is currently controlled
Returns booleanInherited from PlaceableObject.controlled

An indicator for whether the object is currently controlled


#### Returns boolean

Inherited from PlaceableObject.controlled


### geometry

- get geometry(): RegionGeometryThe geometry of this Region.
The value of this property must not be mutated.
This property is updated only by a document update.
Returns RegionGeometry

The geometry of this Region.

The value of this property must not be mutated.

This property is updated only by a document update.


#### Returns RegionGeometry


### hasActiveHUD

- get hasActiveHUD(): booleanIs the HUD display active for this Placeable?
Returns booleanInherited from PlaceableObject.hasActiveHUD

Is the HUD display active for this Placeable?


#### Returns boolean

Inherited from PlaceableObject.hasActiveHUD


### hasPreview

- get hasPreview(): booleanDoes there exist a temporary preview of this placeable object?
Returns booleanInherited from PlaceableObject.hasPreview

Does there exist a temporary preview of this placeable object?


#### Returns boolean

Inherited from PlaceableObject.hasPreview


### hover

- get hover(): booleanAn indicator for whether the object is currently a hover target
Returns booleanInherited from PlaceableObject.hover

An indicator for whether the object is currently a hover target


#### Returns boolean

Inherited from PlaceableObject.hover


### id

- get id(): stringThe id of the corresponding Document which this PlaceableObject represents.
Returns stringInherited from PlaceableObject.id

The id of the corresponding Document which this PlaceableObject represents.


#### Returns string

Inherited from PlaceableObject.id


### interactionState

- get interactionState(): | undefined| {    CLICKED: number;    DRAG: number;    DROP: number;    GRABBED: number;    HOVER: number;    NONE: number;}The mouse interaction state of this placeable.
Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }Inherited from PlaceableObject.interactionState

The mouse interaction state of this placeable.


#### Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }

Inherited from PlaceableObject.interactionState


### isOwner

- get isOwner(): booleanA convenient reference for whether the current User has full control over the document.
Returns booleanInherited from PlaceableObject.isOwner

A convenient reference for whether the current User has full control over the document.


#### Returns boolean

Inherited from PlaceableObject.isOwner


### isPreview

- get isPreview(): booleanIs this placeable object a temporary preview?
Returns booleanInherited from PlaceableObject.isPreview

Is this placeable object a temporary preview?


#### Returns boolean

Inherited from PlaceableObject.isPreview


### isVisible

- get isVisible(): booleanIs this Region currently visible on the Canvas?
Returns boolean

Is this Region currently visible on the Canvas?


#### Returns boolean


### layer

- get layer(): PlaceablesLayerProvide a reference to the CanvasLayer which contains this PlaceableObject.
Returns PlaceablesLayerInherited from PlaceableObject.layer

Provide a reference to the CanvasLayer which contains this PlaceableObject.


#### Returns PlaceablesLayer

Inherited from PlaceableObject.layer


### objectId

- get objectId(): stringA unique identifier which is used to uniquely identify elements on the canvas related to this object.
Returns stringInherited from PlaceableObject.objectId

A unique identifier which is used to uniquely identify elements on the canvas related to this object.


#### Returns string

Inherited from PlaceableObject.objectId


### sheet

- get sheet(): DocumentSheetV2A document sheet used to configure the properties of this Placeable Object or the Document it represents.
Returns DocumentSheetV2Inherited from PlaceableObject.sheet

A document sheet used to configure the properties of this Placeable Object or the Document it represents.


#### Returns DocumentSheetV2

Inherited from PlaceableObject.sheet


### sourceId

- get sourceId(): stringThe named identified for the source object associated with this PlaceableObject.
This differs from the objectId because the sourceId is the same for preview objects as for the original.
Returns stringInherited from PlaceableObject.sourceId

The named identified for the source object associated with this PlaceableObject.
This differs from the objectId because the sourceId is the same for preview objects as for the original.


#### Returns string

Inherited from PlaceableObject.sourceId


### Staticimplementation

`Static`- get implementation(): typeof PlaceableObjectReturn a reference to the configured subclass of this base PlaceableObject type.
Returns typeof PlaceableObjectInherited from PlaceableObject.implementation

Return a reference to the configured subclass of this base PlaceableObject type.


#### Returns typeof PlaceableObject

Inherited from PlaceableObject.implementation


## Methods


### _applyRenderFlags

- _applyRenderFlags(flags: any): voidParametersflags: anyReturns voidOverrides PlaceableObject._applyRenderFlags
- flags: any


#### Parameters

- flags: any


#### Returns void

Overrides PlaceableObject._applyRenderFlags


### _canDrag

- _canDrag(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canDrag
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canDrag


### _canHUD

- _canHUD(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canHUD
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canHUD


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides PlaceableObject._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides PlaceableObject._draw


### _getShiftedPosition

- _getShiftedPosition(dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): objectInternalObtain a shifted position for the Placeable Object.
Parametersdx: -1 | 0 | 1The number of grid units to shift along the X-axis
dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
Returns objectThe shifted target coordinates
Inherited from PlaceableObject._getShiftedPosition
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

Inherited from PlaceableObject._getShiftedPosition


### _onControl

- _onControl(options: any): voidAdditional events that trigger once control of the object is established
Parametersoptions: anyOptional parameters which apply for specific implementations
Returns voidOverrides PlaceableObject._onControl
- options: anyOptional parameters which apply for specific implementations

Additional events that trigger once control of the object is established


#### Parameters

- options: anyOptional parameters which apply for specific implementations

Optional parameters which apply for specific implementations


#### Returns void

Overrides PlaceableObject._onControl


### _onHoverOut

- _onHoverOut(event: any, __namedParameters?: { updateLegend?: boolean }): voidActions that should be taken for this Placeable Object when a mouseout event occurs
Parametersevent: anyThe triggering canvas interaction event
__namedParameters: { updateLegend?: boolean } = {}Returns voidOverrides PlaceableObject._onHoverOut
- event: anyThe triggering canvas interaction event
- __namedParameters: { updateLegend?: boolean } = {}

Actions that should be taken for this Placeable Object when a mouseout event occurs


#### Parameters

- event: anyThe triggering canvas interaction event
- __namedParameters: { updateLegend?: boolean } = {}

The triggering canvas interaction event


#### Returns void

Overrides PlaceableObject._onHoverOut


### _onRelease

- _onRelease(options: any): voidAdditional events which trigger once control of the object is released
Parametersoptions: anyOptions which modify the releasing workflow
Returns voidOverrides PlaceableObject._onRelease
- options: anyOptions which modify the releasing workflow

Additional events which trigger once control of the object is released


#### Parameters

- options: anyOptions which modify the releasing workflow

Options which modify the releasing workflow


#### Returns void

Overrides PlaceableObject._onRelease


### _onUpdate

- _onUpdate(changed: any, options: any, userId: any): voidDefine additional steps taken when an existing placeable object of this type is updated with new data
Parameterschanged: anyoptions: anyuserId: anyReturns voidOverrides PlaceableObject._onUpdate
- changed: any
- options: any
- userId: any

Define additional steps taken when an existing placeable object of this type is updated with new data


#### Parameters

- changed: any
- options: any
- userId: any


#### Returns void

Overrides PlaceableObject._onUpdate


### _overlapsSelection

- _overlapsSelection(rectangle: any): booleanParametersrectangle: anyReturns booleanOverrides PlaceableObject._overlapsSelection
- rectangle: any


#### Parameters

- rectangle: any


#### Returns boolean

Overrides PlaceableObject._overlapsSelection


### _partialDraw

- _partialDraw(fn: () => Promise<void>): Promise<PlaceableObject>InternalExecute a partial draw.
Parametersfn: () => Promise<void>The draw function
Returns Promise<PlaceableObject>The drawn object
Inherited from PlaceableObject._partialDraw
- fn: () => Promise<void>The draw function

`Internal`Execute a partial draw.


#### Parameters

- fn: () => Promise<void>The draw function

The draw function


#### Returns Promise<PlaceableObject>

The drawn object

Inherited from PlaceableObject._partialDraw


### _pasteObject

- _pasteObject(    offset: Point,    options?: { hidden?: boolean; snap?: boolean },): objectInternalGet the data of the copied object pasted at the position given by the offset.
Called by foundry.canvas.layers.PlaceablesLayer#pasteObjects for each copied object.
Parametersoffset: PointThe offset relative from the current position to the destination
Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options of foundry.canvas.layers.PlaceablesLayer#pasteObjects
Optionalhidden?: booleanPaste in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap to the grid. Default is true.
Returns objectThe update data
Inherited from PlaceableObject._pasteObject
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

Inherited from PlaceableObject._pasteObject


### _updateQuadtree

- _updateQuadtree(): voidInternalUpdate the quadtree.
Returns voidInherited from PlaceableObject._updateQuadtree

`Internal`Update the quadtree.


#### Returns void

Inherited from PlaceableObject._updateQuadtree


### _updateRotation

- _updateRotation(    options?: { angle?: number; delta?: number; snap?: number },): numberInternalDetermine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
Parametersoptions: { angle?: number; delta?: number; snap?: number } = {}An object which defines the rotation update parameters
Optionalangle?: numberAn explicit angle, either this or delta must be provided
Optionaldelta?: numberA relative angle delta, either this or the angle must be provided
Optionalsnap?: numberA precision (in degrees) to which the resulting angle should snap. Default is 0.
Returns numberThe new rotation angle for the object
Inherited from PlaceableObject._updateRotation
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

Inherited from PlaceableObject._updateRotation


### activateListeners

- activateListeners(): voidActivate interactivity for the Placeable Object
Returns voidInherited from PlaceableObject.activateListeners

Activate interactivity for the Placeable Object


#### Returns void

Inherited from PlaceableObject.activateListeners


### applyRenderFlags

- applyRenderFlags(): voidReturns voidInherited from PlaceableObject.applyRenderFlags


#### Returns void

Inherited from PlaceableObject.applyRenderFlags


### can

- can(    user: documents.User,    action:        | "update"        | "delete"        | "view"        | "create"        | "control"        | "configure"        | "hover"        | "drag"        | "HUD",): booleanTest whether a user can perform a certain interaction regarding a Placeable Object
Parametersuser: documents.UserThe User performing the action. Must be equal to game.user.
action:     | "update"    | "delete"    | "view"    | "create"    | "control"    | "configure"    | "hover"    | "drag"    | "HUD"The named action being attempted
Returns booleanDoes the User have rights to perform the action?
Inherited from PlaceableObject.can
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

Inherited from PlaceableObject.can


### clear

- clear(): canvas.placeables.RegionClear the display of the existing object.
Returns canvas.placeables.RegionThe cleared object
Inherited from PlaceableObject.clear

Clear the display of the existing object.


#### Returns canvas.placeables.Region

The cleared object

Inherited from PlaceableObject.clear


### clone

- clone(): PlaceableObjectClone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.
Returns PlaceableObjectA new object with identical data
Inherited from PlaceableObject.clone

Clone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.


#### Returns PlaceableObject

A new object with identical data

Inherited from PlaceableObject.clone


### control

- control(options?: { releaseOthers?: boolean }): booleanAssume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
ParametersOptionaloptions: { releaseOthers?: boolean } = {}Additional options which modify the control request
OptionalreleaseOthers?: booleanRelease any other controlled objects first
Returns booleanA flag denoting whether control was successful
Inherited from PlaceableObject.control
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

Inherited from PlaceableObject.control


### destroy

- destroy(options: any): anyParametersoptions: anyReturns anyInherit DocInherited from PlaceableObject.destroy
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc

Inherited from PlaceableObject.destroy


### draw

- draw(options?: object): Promise<PlaceableObject>Draw the placeable object into its parent container
ParametersOptionaloptions: object = {}Options which may modify the draw and refresh workflow
Returns Promise<PlaceableObject>The drawn object
Inherited from PlaceableObject.draw
- Optionaloptions: object = {}Options which may modify the draw and refresh workflow

Draw the placeable object into its parent container


#### Parameters

- Optionaloptions: object = {}Options which may modify the draw and refresh workflow

`Optional`Options which may modify the draw and refresh workflow


#### Returns Promise<PlaceableObject>

The drawn object

Inherited from PlaceableObject.draw


### getSnappedPosition

- getSnappedPosition(position: any): voidParametersposition: anyReturns voidOverrides PlaceableObject.getSnappedPosition
- position: any


#### Parameters

- position: any


#### Returns void

Overrides PlaceableObject.getSnappedPosition


### refresh

- refresh(options?: object): PlaceableObjectRefresh all incremental render flags for the PlaceableObject.
This method is no longer used by the core software but provided for backwards compatibility.
ParametersOptionaloptions: object = {}Options which may modify the refresh workflow
Returns PlaceableObjectThe refreshed object
Inherited from PlaceableObject.refresh
- Optionaloptions: object = {}Options which may modify the refresh workflow

Refresh all incremental render flags for the PlaceableObject.
This method is no longer used by the core software but provided for backwards compatibility.


#### Parameters

- Optionaloptions: object = {}Options which may modify the refresh workflow

`Optional`Options which may modify the refresh workflow


#### Returns PlaceableObject

The refreshed object

Inherited from PlaceableObject.refresh


### release

- release(options?: object): booleanRelease control over a PlaceableObject, removing it from the controlled set
Parametersoptions: object = {}Options which modify the releasing workflow
Returns booleanA Boolean flag confirming the object was released.
Inherited from PlaceableObject.release
- options: object = {}Options which modify the releasing workflow

Release control over a PlaceableObject, removing it from the controlled set


#### Parameters

- options: object = {}Options which modify the releasing workflow

Options which modify the releasing workflow


#### Returns boolean

A Boolean flag confirming the object was released.

Inherited from PlaceableObject.release


### rotate

- rotate(angle: number, snap: number): Promise<PlaceableObject>Rotate the PlaceableObject to a certain angle of facing
Parametersangle: numberThe desired angle of rotation
snap: numberSnap the angle of rotation to a certain target degree increment
Returns Promise<PlaceableObject>The rotated object
Inherited from PlaceableObject.rotate
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

Inherited from PlaceableObject.rotate


### Protected_canConfigure

`Protected`- _canConfigure(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to configure the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canConfigure
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

Inherited from PlaceableObject._canConfigure


### Protected_canControl

`Protected`- _canControl(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to control the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canControl
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

Inherited from PlaceableObject._canControl


### Protected_canCreate

`Protected`- _canCreate(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to create the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canCreate
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

Inherited from PlaceableObject._canCreate


### Protected_canDelete

`Protected`- _canDelete(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to delete the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canDelete
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

Inherited from PlaceableObject._canDelete


### Protected_canDragLeftStart

`Protected`- _canDragLeftStart(    user: documents.User,    event: FederatedEvent<UIEvent | PixiTouch>,    options?: { notify: boolean },): booleanProtectedDoes the User have permission to left-click drag this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
event: FederatedEvent<UIEvent | PixiTouch>The pointer event
Optionaloptions: { notify: boolean } = {}Options, used internally
Returns booleanInherited from PlaceableObject._canDragLeftStart
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

Inherited from PlaceableObject._canDragLeftStart


### Protected_canHover

`Protected`- _canHover(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to hover on this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canHover
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

Inherited from PlaceableObject._canHover


### Protected_canUpdate

`Protected`- _canUpdate(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to update the underlying Document?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canUpdate
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

Inherited from PlaceableObject._canUpdate


### Protected_canView

`Protected`- _canView(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to view details of the Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canView
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

Inherited from PlaceableObject._canView


### Protected_createInteractionManager

`Protected`- _createInteractionManager(): MouseInteractionManagerProtectedCreate a standard MouseInteractionManager for the PlaceableObject
Returns MouseInteractionManagerInherited from PlaceableObject._createInteractionManager

`Protected`Create a standard MouseInteractionManager for the PlaceableObject


#### Returns MouseInteractionManager

Inherited from PlaceableObject._createInteractionManager


### Protected_destroy

`Protected`- _destroy(options?: object): voidProtectedThe inner _destroy method which may optionally be defined by each PlaceableObject subclass.
ParametersOptionaloptions: objectOptions passed to the initial destroy call
Returns voidInherited from PlaceableObject._destroy
- Optionaloptions: objectOptions passed to the initial destroy call

`Protected`The inner _destroy method which may optionally be defined by each PlaceableObject subclass.


#### Parameters

- Optionaloptions: objectOptions passed to the initial destroy call

`Optional`Options passed to the initial destroy call


#### Returns void

Inherited from PlaceableObject._destroy


### Protected_finalizeDragLeft

`Protected`- _finalizeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedFinalize the left-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns voidInherited from PlaceableObject._finalizeDragLeft
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Finalize the left-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns void

Inherited from PlaceableObject._finalizeDragLeft


### Protected_finalizeDragRight

`Protected`- _finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedFinalize the right-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns voidInherited from PlaceableObject._finalizeDragRight
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Finalize the right-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns void

Inherited from PlaceableObject._finalizeDragRight


### Protected_getTargetAlpha

`Protected`- _getTargetAlpha(): numberProtectedGet the target opacity that should be used for a Placeable Object depending on its preview state.
Returns numberInherited from PlaceableObject._getTargetAlpha

`Protected`Get the target opacity that should be used for a Placeable Object depending on its preview state.


#### Returns number

Inherited from PlaceableObject._getTargetAlpha


### Protected_initializeDragLeft

`Protected`- _initializeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedInitialize the left-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._initializeDragLeft
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Initialize the left-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._initializeDragLeft


### Protected_initializeDragRight

`Protected`- _initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedInitialize the right-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._initializeDragRight
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Initialize the right-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._initializeDragRight


### Protected_onClickLeft

`Protected`- _onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a single left-click event to assume control of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns boolean | voidInherited from PlaceableObject._onClickLeft
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single left-click event to assume control of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void

Inherited from PlaceableObject._onClickLeft


### Protected_onClickLeft2

`Protected`- _onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a double left-click event to activate
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onClickLeft2
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a double left-click event to activate


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onClickLeft2


### Protected_onClickRight

`Protected`- _onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single right-click event to configure properties of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onClickRight
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single right-click event to configure properties of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onClickRight


### Protected_onClickRight2

`Protected`- _onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a double right-click event to configure properties of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onClickRight2
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a double right-click event to configure properties of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onClickRight2


### Protected_onCreate

`Protected`- _onCreate(data: object, options: object, userId: string): voidProtectedRegister pending canvas operations which should occur after a new PlaceableObject of this type is created
Parametersdata: objectoptions: objectuserId: stringReturns voidInherited from PlaceableObject._onCreate
- data: object
- options: object
- userId: string

`Protected`Register pending canvas operations which should occur after a new PlaceableObject of this type is created


#### Parameters

- data: object
- options: object
- userId: string


#### Returns void

Inherited from PlaceableObject._onCreate


### Protected_onDelete

`Protected`- _onDelete(options: object, userId: string): voidProtectedDefine additional steps taken when an existing placeable object of this type is deleted
Parametersoptions: objectuserId: stringReturns voidInherited from PlaceableObject._onDelete
- options: object
- userId: string

`Protected`Define additional steps taken when an existing placeable object of this type is deleted


#### Parameters

- options: object
- userId: string


#### Returns void

Inherited from PlaceableObject._onDelete


### Protected_onDragEnd

`Protected`- _onDragEnd(): voidProtectedConclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.
Returns voidInherited from PlaceableObject._onDragEnd

`Protected`Conclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.


#### Returns void

Inherited from PlaceableObject._onDragEnd


### Protected_onDragLeftCancel

`Protected`- _onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns boolean | voidIf false, the cancellation is prevented
Inherited from PlaceableObject._onDragLeftCancel
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns boolean | void

If false, the cancellation is prevented

Inherited from PlaceableObject._onDragLeftCancel


### Protected_onDragLeftDrop

`Protected`- _onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): undefined | falseProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns undefined | falseInherited from PlaceableObject._onDragLeftDrop
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns undefined | false

Inherited from PlaceableObject._onDragLeftDrop


### Protected_onDragLeftMove

`Protected`- _onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a mouse-move operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onDragLeftMove
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a mouse-move operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onDragLeftMove


### Protected_onDragLeftStart

`Protected`- _onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur when a mouse-drag action is first begun.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns boolean | voidIf false, the start if prevented
Inherited from PlaceableObject._onDragLeftStart
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur when a mouse-drag action is first begun.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void

If false, the start if prevented

Inherited from PlaceableObject._onDragLeftStart


### Protected_onDragRightCancel

`Protected`- _onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns boolean | voidIf false, the cancellation is prevented
Inherited from PlaceableObject._onDragRightCancel
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns boolean | void

If false, the cancellation is prevented

Inherited from PlaceableObject._onDragRightCancel


### Protected_onDragRightDrop

`Protected`- _onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onDragRightDrop
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onDragRightDrop


### Protected_onDragRightMove

`Protected`- _onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onDragRightMove
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onDragRightMove


### Protected_onDragRightStart

`Protected`- _onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns false | voidIf false, the start if prevented
Inherited from PlaceableObject._onDragRightStart
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns false | void

If false, the start if prevented

Inherited from PlaceableObject._onDragRightStart


### Protected_onDragStart

`Protected`- _onDragStart(): voidProtectedBegin a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.
Returns voidInherited from PlaceableObject._onDragStart

`Protected`Begin a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.


#### Returns void

Inherited from PlaceableObject._onDragStart


### Protected_onHoverIn

`Protected`- _onHoverIn(    event: FederatedEvent<UIEvent | PixiTouch>,    options?: { updateLegend?: boolean },): boolean | voidProtectedActions that should be taken for this Region when a mouseover event occurs.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
options: { updateLegend?: boolean } = {}Options that customize event handling
OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.
Returns boolean | voidOverrides PlaceableObject._onHoverIn
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- options: { updateLegend?: boolean } = {}Options that customize event handling
OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.
- OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.

`Protected`Actions that should be taken for this Region when a mouseover event occurs.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- options: { updateLegend?: boolean } = {}Options that customize event handling
OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.
- OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.

The triggering canvas interaction event

Options that customize event handling

- OptionalupdateLegend?: booleanHighlight corresponding entry in the RegionLegend.


##### OptionalupdateLegend?: boolean

`Optional`Highlight corresponding entry in the RegionLegend.


#### Returns boolean | void

Overrides PlaceableObject._onHoverIn


### Protected_onLongPress

`Protected`- _onLongPress(event: FederatedEvent<UIEvent | PixiTouch>, origin: Point): anyProtectedCallback action which occurs on a long press.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
origin: PointThe local canvas coordinates of the mousepress.
Returns anyInherited from PlaceableObject._onLongPress
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- origin: PointThe local canvas coordinates of the mousepress.

`Protected`Callback action which occurs on a long press.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
- origin: PointThe local canvas coordinates of the mousepress.

The triggering canvas interaction event

The local canvas coordinates of the mousepress.


#### Returns any

Inherited from PlaceableObject._onLongPress


### Protected_onUnclickLeft

`Protected`- _onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single left-unclick event to assume control of the object
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onUnclickLeft
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single left-unclick event to assume control of the object


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onUnclickLeft


### Protected_onUnclickRight

`Protected`- _onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCallback actions which occur on a single right-unclick event
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onUnclickRight
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Callback actions which occur on a single right-unclick event


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onUnclickRight


### Protected_prepareDragLeftDropUpdates

`Protected`- _prepareDragLeftDropUpdates(    event: FederatedEvent<UIEvent | PixiTouch>,): null | object[] | [updates: object[], options?: object]ProtectedPerform the database updates that should occur as the result of a drag-left-drop operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns null | object[] | [updates: object[], options?: object]An array of database updates to perform for documents in this collection
Inherited from PlaceableObject._prepareDragLeftDropUpdates
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Perform the database updates that should occur as the result of a drag-left-drop operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns null | object[] | [updates: object[], options?: object]

An array of database updates to perform for documents in this collection

Inherited from PlaceableObject._prepareDragLeftDropUpdates


### Protected_propagateLeftClick

`Protected`- _propagateLeftClick(event: FederatedEvent<UIEvent | PixiTouch>): booleanProtectedShould the placeable propagate left click downstream?
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns booleanInherited from PlaceableObject._propagateLeftClick
- event: FederatedEvent<UIEvent | PixiTouch>

`Protected`Should the placeable propagate left click downstream?


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns boolean

Inherited from PlaceableObject._propagateLeftClick


### Protected_propagateRightClick

`Protected`- _propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): booleanProtectedShould the placeable propagate right click downstream?
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns booleanInherited from PlaceableObject._propagateRightClick
- event: FederatedEvent<UIEvent | PixiTouch>

`Protected`Should the placeable propagate right click downstream?


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns boolean

Inherited from PlaceableObject._propagateRightClick


### Protected_refreshBorder

`Protected`- _refreshBorder(): voidProtectedRefresh the border of the Region.
Returns void

`Protected`Refresh the border of the Region.


#### Returns void


### Protected_refreshState

`Protected`- _refreshState(): voidProtectedRefresh the state of the Region.
Returns void

`Protected`Refresh the state of the Region.


#### Returns void


### Protected#onDragRightStart

`Protected`- "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | voidProtectedCallback actions which occur on a right mouse-drag operation.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event
Returns false | voidIf false, the start if prevented
Inherited from PlaceableObject.#onDragRightStart
- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

`Protected`Callback actions which occur on a right mouse-drag operation.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering mouse click event

The triggering mouse click event


#### Returns false | void

If false, the start if prevented

Inherited from PlaceableObject.#onDragRightStart


### Static_getCopiedObjectsOrigin

`Static`- _getCopiedObjectsOrigin(copies: PlaceableObject[]): PointInternalGet the origin used for pasting the copied objects.
Parameterscopies: PlaceableObject[]The objects that are copied
Returns PointThe offset
Inherited from PlaceableObject._getCopiedObjectsOrigin
- copies: PlaceableObject[]The objects that are copied

`Internal`Get the origin used for pasting the copied objects.


#### Parameters

- copies: PlaceableObject[]The objects that are copied

The objects that are copied


#### Returns Point

The offset

Inherited from PlaceableObject._getCopiedObjectsOrigin


### Static_getShiftedPosition

`Static`- _getShiftedPosition(    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,    position: ElevatedPoint,    snapped: ElevatedPoint,    grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>,): ElevatedPointInternalObtain the shifted position.
Parametersdx: -1 | 0 | 1The number of grid units to shift along the X-axis
dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
position: ElevatedPointThe unsnapped position
snapped: ElevatedPointThe snapped position
grid: BaseGrid<GridCoordinates2D, GridCoordinates3D>The grid
Returns ElevatedPointThe shifted target coordinates
Inherited from PlaceableObject._getShiftedPosition
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

Inherited from PlaceableObject._getShiftedPosition


### Settings

- Protected
- Inherited
- Internal


### On This Page

