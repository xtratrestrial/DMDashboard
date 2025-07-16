# Wall | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.placeables.Wall.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- placeables
- Wall


# Class Wall

A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.
Walls are used to restrict Token movement or visibility as well as to define the areas of effect for ambient lights
and sounds.


#### See

- foundry.documents.WallDocument
- foundry.canvas.layers.WallsLayer


#### Hierarchy (View Summary)

- PlaceableObjectWall
- Wall

- Wall


##### Index


### Properties


### Accessors


### Methods


## Properties


### controlIcon

A control icon for interacting with the object

Inherited from PlaceableObject.controlIcon


### directionIcon

The icon that indicates the direction of the Wall.


### document

A reference to the Scene embedded Document instance which this object represents

Inherited from PlaceableObject.document


### doorControl

A reference the Door Control icon associated with this Wall, if any


### endpoints

The endpoints of the Wall line segment.


### highlight

A Graphics object used to highlight this wall segment. Only used when the wall is controlled.


### line

The line segment that represents the Wall.


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

`Static`Identify the official Document name for this PlaceableObject class

Overrides PlaceableObject.embeddedName


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

- get bounds(): anyThe bounding box for this PlaceableObject.
This is required if the layer uses a Quadtree, otherwise it is optional
Returns anyOverrides PlaceableObject.bounds

The bounding box for this PlaceableObject.
This is required if the layer uses a Quadtree, otherwise it is optional


#### Returns any

Overrides PlaceableObject.bounds


### center

- get center(): PointThe central coordinate pair of the placeable object based on it's own width and height
Returns PointOverrides PlaceableObject.center

The central coordinate pair of the placeable object based on it's own width and height


#### Returns Point

Overrides PlaceableObject.center


### controlled

- get controlled(): booleanAn indicator for whether the object is currently controlled
Returns booleanInherited from PlaceableObject.controlled

An indicator for whether the object is currently controlled


#### Returns boolean

Inherited from PlaceableObject.controlled


### coords

- get coords(): number[]A convenience reference to the coordinates Array for the Wall endpoints, [x0,y0,x1,y1].
Returns number[]

A convenience reference to the coordinates Array for the Wall endpoints, [x0,y0,x1,y1].


#### Returns number[]


### direction

- get direction(): null | numberGet the direction of effect for a directional Wall
Returns null | number

Get the direction of effect for a directional Wall


#### Returns null | number


### doorMeshes

- get doorMeshes(): Set<DoorMesh>A set of optional DoorMesh instances used to render a door animation for this Wall.
Returns Set<DoorMesh>

A set of optional DoorMesh instances used to render a door animation for this Wall.


#### Returns Set<DoorMesh>


### edge

- get edge(): EdgeThe Edge instance which represents this Wall.
The Edge is re-created when data for the Wall changes.
Returns Edge

The Edge instance which represents this Wall.
The Edge is re-created when data for the Wall changes.


#### Returns Edge


### hasActiveHUD

- get hasActiveHUD(): booleanIs the HUD display active for this Placeable?
Returns booleanInherited from PlaceableObject.hasActiveHUD

Is the HUD display active for this Placeable?


#### Returns boolean

Inherited from PlaceableObject.hasActiveHUD


### hasDoorMesh

- get hasDoorMesh(): booleanShould this Wall have a corresponding DoorMesh?
Returns boolean

Should this Wall have a corresponding DoorMesh?


#### Returns boolean


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


### isDoor

- get isDoor(): booleanA boolean for whether this wall contains a door
Returns boolean

A boolean for whether this wall contains a door


#### Returns boolean


### isOpen

- get isOpen(): booleanA boolean for whether the wall contains an open door
Returns boolean

A boolean for whether the wall contains an open door


#### Returns boolean


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


### layer

- get layer(): PlaceablesLayerProvide a reference to the CanvasLayer which contains this PlaceableObject.
Returns PlaceablesLayerInherited from PlaceableObject.layer

Provide a reference to the CanvasLayer which contains this PlaceableObject.


#### Returns PlaceablesLayer

Inherited from PlaceableObject.layer


### midpoint

- get midpoint(): number[]Return the coordinates [x,y] at the midpoint of the wall segment
Returns number[]

Return the coordinates [x,y] at the midpoint of the wall segment


#### Returns number[]


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


### soundRadius

- get soundRadius(): numberCustomize the audible radius of sounds emitted by this wall, for example when a door opens or closes.
Returns number

Customize the audible radius of sounds emitted by this wall, for example when a door opens or closes.


#### Returns number


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


### _canControl

- _canControl(user: any, event: any): booleanDoes the User have permission to control the Placeable Object?
Parametersuser: anyThe User performing the action. Always equal to game.user.
event: anyThe pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanOverrides PlaceableObject._canControl
- user: anyThe User performing the action. Always equal to game.user.
- event: anyThe pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

Does the User have permission to control the Placeable Object?


#### Parameters

- user: anyThe User performing the action. Always equal to game.user.
- event: anyThe pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.

The User performing the action. Always equal to game.user.

`game.user`The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.


#### Returns boolean

Overrides PlaceableObject._canControl


### _destroy

- _destroy(options: any): voidParametersoptions: anyReturns voidOverrides PlaceableObject._destroy
- options: any


#### Parameters

- options: any


#### Returns void

Overrides PlaceableObject._destroy


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


### _onClickLeft

- _onClickLeft(event: any): boolean | voidCallback actions which occur on a single left-click event to assume control of the object
Parametersevent: anyThe triggering canvas interaction event
Returns boolean | voidOverrides PlaceableObject._onClickLeft
- event: anyThe triggering canvas interaction event

Callback actions which occur on a single left-click event to assume control of the object


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void

Overrides PlaceableObject._onClickLeft


### _onClickLeft2

- _onClickLeft2(event: any): voidParametersevent: anyReturns voidOverrides PlaceableObject._onClickLeft2
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceableObject._onClickLeft2


### _onClickRight2

- _onClickRight2(event: any): voidParametersevent: anyReturns voidOverrides PlaceableObject._onClickRight2
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceableObject._onClickRight2


### _onCreate

- _onCreate(data: any, options: any, userId: any): voidRegister pending canvas operations which should occur after a new PlaceableObject of this type is created
Parametersdata: anyoptions: anyuserId: anyReturns voidOverrides PlaceableObject._onCreate
- data: any
- options: any
- userId: any

Register pending canvas operations which should occur after a new PlaceableObject of this type is created


#### Parameters

- data: any
- options: any
- userId: any


#### Returns void

Overrides PlaceableObject._onCreate


### _onDelete

- _onDelete(options: any, userId: any): voidDefine additional steps taken when an existing placeable object of this type is deleted
Parametersoptions: anyuserId: anyReturns voidOverrides PlaceableObject._onDelete
- options: any
- userId: any

Define additional steps taken when an existing placeable object of this type is deleted


#### Parameters

- options: any
- userId: any


#### Returns void

Overrides PlaceableObject._onDelete


### _onDragLeftMove

- _onDragLeftMove(event: any): voidParametersevent: anyReturns voidOverrides PlaceableObject._onDragLeftMove
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceableObject._onDragLeftMove


### _onDragLeftStart

- _onDragLeftStart(event: any): boolean | voidCallback actions which occur when a mouse-drag action is first begun.
Parametersevent: anyThe triggering canvas interaction event
Returns boolean | voidIf false, the start if prevented
Overrides PlaceableObject._onDragLeftStart
- event: anyThe triggering canvas interaction event

Callback actions which occur when a mouse-drag action is first begun.


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns boolean | void

If false, the start if prevented

Overrides PlaceableObject._onDragLeftStart


### _onHoverIn

- _onHoverIn(event: any, options: any): boolean | voidActions that should be taken for this Placeable Object when a mouseover event occurs.
Hover events on PlaceableObject instances allow event propagation by default.
Parametersevent: anyThe triggering canvas interaction event
options: anyOptions which customize event handling
Returns boolean | voidOverrides PlaceableObject._onHoverIn
- event: anyThe triggering canvas interaction event
- options: anyOptions which customize event handling

Actions that should be taken for this Placeable Object when a mouseover event occurs.
Hover events on PlaceableObject instances allow event propagation by default.


#### Parameters

- event: anyThe triggering canvas interaction event
- options: anyOptions which customize event handling

The triggering canvas interaction event

Options which customize event handling


#### Returns boolean | void

Overrides PlaceableObject._onHoverIn


### _onHoverOut

- _onHoverOut(event: any): voidActions that should be taken for this Placeable Object when a mouseout event occurs
Parametersevent: anyThe triggering canvas interaction event
Returns voidOverrides PlaceableObject._onHoverOut
- event: anyThe triggering canvas interaction event

Actions that should be taken for this Placeable Object when a mouseout event occurs


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Overrides PlaceableObject._onHoverOut


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

- _pasteObject(offset: any, options: any): anyParametersoffset: anyoptions: anyReturns anyOverrides PlaceableObject._pasteObject
- offset: any
- options: any


#### Parameters

- offset: any
- options: any


#### Returns any

Overrides PlaceableObject._pasteObject


### _prepareDragLeftDropUpdates

- _prepareDragLeftDropUpdates(event: any): null | { _id: any; c: any }[]Parametersevent: anyReturns null | { _id: any; c: any }[]Overrides PlaceableObject._prepareDragLeftDropUpdates
- event: any


#### Parameters

- event: any


#### Returns null | { _id: any; c: any }[]

Overrides PlaceableObject._prepareDragLeftDropUpdates


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


### canRayIntersect

- canRayIntersect(ray: Ray): booleanA simple test for whether a Ray can intersect a directional wall
Parametersray: RayThe ray to test
Returns booleanCan an intersection occur?
- ray: RayThe ray to test

A simple test for whether a Ray can intersect a directional wall


#### Parameters

- ray: RayThe ray to test

The ray to test


#### Returns boolean

Can an intersection occur?


### clear

- clear(): canvas.placeables.WallReturns canvas.placeables.WallOverrides PlaceableObject.clear


#### Returns canvas.placeables.Wall

Overrides PlaceableObject.clear


### clearDoorControl

- clearDoorControl(): voidClear the door control if it exists.
Returns void

Clear the door control if it exists.


#### Returns void


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

- control(__namedParameters?: { chain?: boolean }): booleanAssume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
Parameters__namedParameters: { chain?: boolean } = {}Additional options which modify the control request
Returns booleanA flag denoting whether control was successful
Overrides PlaceableObject.control
- __namedParameters: { chain?: boolean } = {}Additional options which modify the control request

Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors


#### Parameters

- __namedParameters: { chain?: boolean } = {}Additional options which modify the control request

Additional options which modify the control request


#### Returns boolean

A flag denoting whether control was successful

Overrides PlaceableObject.control


### createDoorControl

- createDoorControl(): DoorControlDraw a control icon that is used to manipulate the door's open/closed state
Returns DoorControl

Draw a control icon that is used to manipulate the door's open/closed state


#### Returns DoorControl


### createDoorMeshes

- createDoorMeshes(): Promise<void>Create and add a DoorMesh to the PrimaryCanvasContainer.
Returns Promise<void>

Create and add a DoorMesh to the PrimaryCanvasContainer.


#### Returns Promise<void>


### destroy

- destroy(options: any): anyParametersoptions: anyReturns anyInherit DocInherited from PlaceableObject.destroy
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc

Inherited from PlaceableObject.destroy


### destroyDoorMeshes

- destroyDoorMeshes(): voidRemove and destroy a DoorMesh from the PrimaryCanvasContainer.
Returns void

Remove and destroy a DoorMesh from the PrimaryCanvasContainer.


#### Returns void


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


### getLinkedSegments

- getLinkedSegments(): ObjectGet an Array of Wall objects which are linked by a common coordinate
Returns ObjectAn object reporting ids and endpoints of the linked segments

Get an Array of Wall objects which are linked by a common coordinate


#### Returns Object

An object reporting ids and endpoints of the linked segments


### getSnappedPosition

- getSnappedPosition(position: any): voidParametersposition: anyReturns voidOverrides PlaceableObject.getSnappedPosition
- position: any


#### Parameters

- position: any


#### Returns void

Overrides PlaceableObject.getSnappedPosition


### initializeEdge

- initializeEdge(options?: { deleted?: boolean }): voidInitialize the edge which represents this Wall.
ParametersOptionaloptions: { deleted?: boolean } = {}Options which modify how the edge is initialized
Optionaldeleted?: booleanHas the edge been deleted?
Returns void
- Optionaloptions: { deleted?: boolean } = {}Options which modify how the edge is initialized
Optionaldeleted?: booleanHas the edge been deleted?
- Optionaldeleted?: booleanHas the edge been deleted?

Initialize the edge which represents this Wall.


#### Parameters

- Optionaloptions: { deleted?: boolean } = {}Options which modify how the edge is initialized
Optionaldeleted?: booleanHas the edge been deleted?
- Optionaldeleted?: booleanHas the edge been deleted?

`Optional`Options which modify how the edge is initialized

- Optionaldeleted?: booleanHas the edge been deleted?


##### Optionaldeleted?: boolean

`Optional`Has the edge been deleted?


#### Returns void


### isDirectionBetweenAngles

- isDirectionBetweenAngles(lower: number, upper: number): booleanTest whether the Wall direction lies between two provided angles
This test is used for collision and vision checks against one-directional walls
Parameterslower: numberThe lower-bound limiting angle in radians
upper: numberThe upper-bound limiting angle in radians
Returns boolean
- lower: numberThe lower-bound limiting angle in radians
- upper: numberThe upper-bound limiting angle in radians

Test whether the Wall direction lies between two provided angles
This test is used for collision and vision checks against one-directional walls


#### Parameters

- lower: numberThe lower-bound limiting angle in radians
- upper: numberThe upper-bound limiting angle in radians

The lower-bound limiting angle in radians

The upper-bound limiting angle in radians


#### Returns boolean


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


### toRay

- toRay(): RayThis helper converts the wall segment to a Ray
Returns RayThe wall in Ray representation

This helper converts the wall segment to a Ray


#### Returns Ray

The wall in Ray representation


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


### Protected_canDrag

`Protected`- _canDrag(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to drag this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canDrag
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

Inherited from PlaceableObject._canDrag


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


### Protected_canHUD

`Protected`- _canHUD(    user: documents.User,    event?: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedCan the User access the HUD for this Placeable Object?
Parametersuser: documents.UserThe User performing the action. Always equal to game.user.
Optionalevent: FederatedEvent<UIEvent | PixiTouch>The pointer event if this function was called by
foundry.canvas.interaction.MouseInteractionManager.
Returns booleanInherited from PlaceableObject._canHUD
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

Inherited from PlaceableObject._canHUD


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


### Protected_getWallColor

`Protected`- _getWallColor(): numberProtectedGiven the properties of the wall - decide upon a color to render the wall for display on the WallsLayer
Returns number

`Protected`Given the properties of the wall - decide upon a color to render the wall for display on the WallsLayer


#### Returns number


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


### Protected_onControl

`Protected`- _onControl(options: object): voidProtectedAdditional events that trigger once control of the object is established
Parametersoptions: objectOptional parameters which apply for specific implementations
Returns voidInherited from PlaceableObject._onControl
- options: objectOptional parameters which apply for specific implementations

`Protected`Additional events that trigger once control of the object is established


#### Parameters

- options: objectOptional parameters which apply for specific implementations

Optional parameters which apply for specific implementations


#### Returns void

Inherited from PlaceableObject._onControl


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


### Protected_onRelease

`Protected`- _onRelease(options: object): voidProtectedAdditional events which trigger once control of the object is released
Parametersoptions: objectOptions which modify the releasing workflow
Returns voidInherited from PlaceableObject._onRelease
- options: objectOptions which modify the releasing workflow

`Protected`Additional events which trigger once control of the object is released


#### Parameters

- options: objectOptions which modify the releasing workflow

Options which modify the releasing workflow


#### Returns void

Inherited from PlaceableObject._onRelease


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


### Protected_playDoorSound

`Protected`- _playDoorSound(interaction: string): voidProtectedPlay a door interaction sound.
This plays locally, each client independently applies this workflow.
Parametersinteraction: stringThe door interaction: "open", "close", "lock", "unlock", or "test".
Returns void
- interaction: stringThe door interaction: "open", "close", "lock", "unlock", or "test".

`Protected`Play a door interaction sound.
This plays locally, each client independently applies this workflow.


#### Parameters

- interaction: stringThe door interaction: "open", "close", "lock", "unlock", or "test".

The door interaction: "open", "close", "lock", "unlock", or "test".


#### Returns void


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


### Protected_refreshDirection

`Protected`- _refreshDirection(): undefined | falseProtectedDraw a directional prompt icon for one-way walls to illustrate their direction of effect.
Returns undefined | false

`Protected`Draw a directional prompt icon for one-way walls to illustrate their direction of effect.


#### Returns undefined | false


### Protected_refreshEndpoints

`Protected`- _refreshEndpoints(): voidProtectedRefresh the display of wall endpoints which refreshes when the wall position or state changes.
Returns void

`Protected`Refresh the display of wall endpoints which refreshes when the wall position or state changes.


#### Returns void


### Protected_refreshHighlight

`Protected`- _refreshHighlight(): voidProtectedRefresh the appearance of the wall control highlight graphic. Occurs when wall control or position changes.
Returns void

`Protected`Refresh the appearance of the wall control highlight graphic. Occurs when wall control or position changes.


#### Returns void


### Protected_refreshLine

`Protected`- _refreshLine(): voidProtectedRefresh the displayed position of the wall which refreshes when the wall coordinates or type changes.
Returns void

`Protected`Refresh the displayed position of the wall which refreshes when the wall coordinates or type changes.


#### Returns void


### Protected_refreshState

`Protected`- _refreshState(): voidProtectedRefresh the displayed state of the Wall.
Returns void

`Protected`Refresh the displayed state of the Wall.


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

