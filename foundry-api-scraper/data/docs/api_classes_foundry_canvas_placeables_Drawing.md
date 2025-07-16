# Drawing | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.placeables.Drawing.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- placeables
- Drawing


# Class Drawing

The Drawing object is an implementation of the PlaceableObject container.
Each Drawing is a placeable object in the DrawingsLayer.


#### See

- foundry.documents.DrawingDocument
- foundry.canvas.layers.DrawingsLayer


#### Hierarchy (View Summary)

- PlaceableObjectDrawing
- Drawing

- Drawing


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Drawing(document: CanvasDocument): canvas.placeables.DrawingParametersdocument: CanvasDocumentThe Document instance represented by this object
Returns canvas.placeables.DrawingInherited from PlaceableObject.constructor
- document: CanvasDocumentThe Document instance represented by this object


#### Parameters

- document: CanvasDocumentThe Document instance represented by this object

The Document instance represented by this object


#### Returns canvas.placeables.Drawing

Inherited from PlaceableObject.constructor


## Properties


### Internal_fixedPoints

`Internal`An internal flag for the permanent points of the polygon.


### Internal_onkeydown

`Internal`The registered keydown listener.


### Internal_pendingText

`Internal`The pending text.


### controlIcon

A control icon for interacting with the object

Inherited from PlaceableObject.controlIcon


### document

A reference to the Scene embedded Document instance which this object represents

Inherited from PlaceableObject.document


### frame

The border frame and resizing handles for the drawing.


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


### shape

The drawing shape which is rendered as a PIXI.Graphics in the interface or a PrimaryGraphics in the Primary Group.


### text

A text label that may be displayed as part of the interface layer for the Drawing.


### texture

The texture that is used to fill this Drawing, if any.


### StaticembeddedName

`Static`Identify the official Document name for this PlaceableObject class

Overrides PlaceableObject.embeddedName


### StaticFREEHAND_SAMPLE_RATE

`Static`The rate at which points are sampled (in milliseconds) during a freehand drawing workflow


### StaticRENDER_FLAG_PRIORITY

`Static`The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from PlaceableObject.RENDER_FLAG_PRIORITY


### StaticRENDER_FLAGS

`Static`
#### Type declaration

- redraw: { propagate: string[] }
- refresh: { alias: boolean; propagate: string[] }
- refreshElevation: {}
- refreshFrame: {}
- refreshMesh: {    deprecated: { alias: boolean; since: number; until: number };    propagate: string[];}Deprecatedsince v12
- refreshPosition: {}
- refreshRotation: { propagate: string[] }
- refreshShape: {}
- refreshSize: { propagate: string[] }
- refreshState: {}
- refreshText: {}
- refreshTransform: { alias: boolean; propagate: string[] }


##### redraw: { propagate: string[] }


##### refresh: { alias: boolean; propagate: string[] }


##### refreshElevation: {}


##### refreshFrame: {}


##### refreshMesh: {    deprecated: { alias: boolean; since: number; until: number };    propagate: string[];}


#### Deprecated

since v12


##### refreshPosition: {}


##### refreshRotation: { propagate: string[] }


##### refreshShape: {}


##### refreshSize: { propagate: string[] }


##### refreshState: {}


##### refreshText: {}


##### refreshTransform: { alias: boolean; propagate: string[] }

Overrides PlaceableObject.RENDER_FLAGS


### StaticSHAPE_TYPES

`Static`A convenience reference to the possible shape types.


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


### hasText

- get hasText(): booleanDoes the Drawing have text that is displayed?
Returns boolean

Does the Drawing have text that is displayed?


#### Returns boolean


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


### isAuthor

- get isAuthor(): booleanA convenient reference for whether the current User is the author of the Drawing document.
Returns boolean

A convenient reference for whether the current User is the author of the Drawing document.


#### Returns boolean


### isOwner

- get isOwner(): booleanA convenient reference for whether the current User has full control over the document.
Returns booleanInherited from PlaceableObject.isOwner

A convenient reference for whether the current User has full control over the document.


#### Returns boolean

Inherited from PlaceableObject.isOwner


### isPolygon

- get isPolygon(): booleanA Boolean flag for whether the Drawing is a Polygon type (either linear or freehand)?
Returns boolean

A Boolean flag for whether the Drawing is a Polygon type (either linear or freehand)?


#### Returns boolean


### isPreview

- get isPreview(): booleanIs this placeable object a temporary preview?
Returns booleanInherited from PlaceableObject.isPreview

Is this placeable object a temporary preview?


#### Returns boolean

Inherited from PlaceableObject.isPreview


### isTiled

- get isTiled(): booleanA Boolean flag for whether the Drawing utilizes a tiled texture background?
Returns boolean

A Boolean flag for whether the Drawing utilizes a tiled texture background?


#### Returns boolean


### isVisible

- get isVisible(): booleanIs this Drawing currently visible on the Canvas?
Returns boolean

Is this Drawing currently visible on the Canvas?


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


### type

- get type(): stringThe shape type that this Drawing represents. A value in Drawing.SHAPE_TYPES.
Returns stringSeeDrawing.SHAPE_TYPES

The shape type that this Drawing represents. A value in Drawing.SHAPE_TYPES.


#### Returns string


#### See

Drawing.SHAPE_TYPES


### Staticimplementation

`Static`- get implementation(): typeof PlaceableObjectReturn a reference to the configured subclass of this base PlaceableObject type.
Returns typeof PlaceableObjectInherited from PlaceableObject.implementation

Return a reference to the configured subclass of this base PlaceableObject type.


#### Returns typeof PlaceableObject

Inherited from PlaceableObject.implementation


## Methods


### _addPoint

- _addPoint(    position: Point,    options?: { round?: boolean; snap?: boolean; temporary?: boolean },): voidInternalAdd a new polygon point to the drawing, ensuring it differs from the last one
Parametersposition: PointThe drawing point to add
Optionaloptions: { round?: boolean; snap?: boolean; temporary?: boolean } = {}Options which configure how the point is added
Optionalround?: booleanShould the point be rounded to integer coordinates?
Optionalsnap?: booleanShould the point be snapped to grid precision?
Optionaltemporary?: booleanIs this a temporary control point?
Returns void
- position: PointThe drawing point to add
- Optionaloptions: { round?: boolean; snap?: boolean; temporary?: boolean } = {}Options which configure how the point is added
Optionalround?: booleanShould the point be rounded to integer coordinates?
Optionalsnap?: booleanShould the point be snapped to grid precision?
Optionaltemporary?: booleanIs this a temporary control point?
- Optionalround?: booleanShould the point be rounded to integer coordinates?
- Optionalsnap?: booleanShould the point be snapped to grid precision?
- Optionaltemporary?: booleanIs this a temporary control point?

`Internal`Add a new polygon point to the drawing, ensuring it differs from the last one


#### Parameters

- position: PointThe drawing point to add
- Optionaloptions: { round?: boolean; snap?: boolean; temporary?: boolean } = {}Options which configure how the point is added
Optionalround?: booleanShould the point be rounded to integer coordinates?
Optionalsnap?: booleanShould the point be snapped to grid precision?
Optionaltemporary?: booleanIs this a temporary control point?
- Optionalround?: booleanShould the point be rounded to integer coordinates?
- Optionalsnap?: booleanShould the point be snapped to grid precision?
- Optionaltemporary?: booleanIs this a temporary control point?

The drawing point to add

`Optional`Options which configure how the point is added

- Optionalround?: booleanShould the point be rounded to integer coordinates?
- Optionalsnap?: booleanShould the point be snapped to grid precision?
- Optionaltemporary?: booleanIs this a temporary control point?


##### Optionalround?: boolean

`Optional`Should the point be rounded to integer coordinates?


##### Optionalsnap?: boolean

`Optional`Should the point be snapped to grid precision?


##### Optionaltemporary?: boolean

`Optional`Is this a temporary control point?


#### Returns void


### _applyRenderFlags

- _applyRenderFlags(flags: any): voidParametersflags: anyReturns voidOverrides PlaceableObject._applyRenderFlags
- flags: any


#### Parameters

- flags: any


#### Returns void

Overrides PlaceableObject._applyRenderFlags


### _canConfigure

- _canConfigure(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canConfigure
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canConfigure


### _canControl

- _canControl(user: any, event: any): anyParametersuser: anyevent: anyReturns anyOverrides PlaceableObject._canControl
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns any

Overrides PlaceableObject._canControl


### _destroy

- _destroy(options: any): voidThe inner _destroy method which may optionally be defined by each PlaceableObject subclass.
Parametersoptions: anyOptions passed to the initial destroy call
Returns voidOverrides PlaceableObject._destroy
- options: anyOptions passed to the initial destroy call

The inner _destroy method which may optionally be defined by each PlaceableObject subclass.


#### Parameters

- options: anyOptions passed to the initial destroy call

Options passed to the initial destroy call


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


### _onDragLeftCancel

- _onDragLeftCancel(event: any): boolean | voidCallback actions which occur on a mouse-move operation.
Parametersevent: anyThe triggering mouse click event
Returns boolean | voidIf false, the cancellation is prevented
Overrides PlaceableObject._onDragLeftCancel
- event: anyThe triggering mouse click event

Callback actions which occur on a mouse-move operation.


#### Parameters

- event: anyThe triggering mouse click event

The triggering mouse click event


#### Returns boolean | void

If false, the cancellation is prevented

Overrides PlaceableObject._onDragLeftCancel


### _onDragLeftDrop

- _onDragLeftDrop(event: any): false | voidParametersevent: anyReturns false | voidOverrides PlaceableObject._onDragLeftDrop
- event: any


#### Parameters

- event: any


#### Returns false | void

Overrides PlaceableObject._onDragLeftDrop


### _onDragLeftMove

- _onDragLeftMove(event: any): voidParametersevent: anyReturns voidOverrides PlaceableObject._onDragLeftMove
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceableObject._onDragLeftMove


### _onDragLeftStart

- _onDragLeftStart(event: any): boolean | voidParametersevent: anyReturns boolean | voidOverrides PlaceableObject._onDragLeftStart
- event: any


#### Parameters

- event: any


#### Returns boolean | void

Overrides PlaceableObject._onDragLeftStart


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

- _overlapsSelection(rectangle: any): anyParametersrectangle: anyReturns anyOverrides PlaceableObject._overlapsSelection
- rectangle: any


#### Parameters

- rectangle: any


#### Returns any

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


### _removePoint

- _removePoint(): voidInternalRemove the last fixed point from the polygon
Returns void

`Internal`Remove the last fixed point from the polygon


#### Returns void


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
Returns voidOverrides PlaceableObject.activateListeners

Activate interactivity for the Placeable Object


#### Returns void

Overrides PlaceableObject.activateListeners


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

- clear(): canvas.placeables.DrawingClear the display of the existing object.
Returns canvas.placeables.DrawingThe cleared object
Inherited from PlaceableObject.clear

Clear the display of the existing object.


#### Returns canvas.placeables.Drawing

The cleared object

Inherited from PlaceableObject.clear


### clone

- clone(): PlaceableObjectClone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.
Returns PlaceableObjectA new object with identical data
Overrides PlaceableObject.clone

Clone the placeable object, returning a new object with identical attributes.
The returned object is non-interactive, and has no assigned ID.
If you plan to use it permanently you should call the create method.


#### Returns PlaceableObject

A new object with identical data

Overrides PlaceableObject.clone


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


### enableTextEditing

- enableTextEditing(options?: object): voidEnable text editing for this drawing.
ParametersOptionaloptions: object = {}Returns void
- Optionaloptions: object = {}

Enable text editing for this drawing.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns void


### getSnappedPosition

- getSnappedPosition(position?: any): PointGet the snapped position for a given position or the current position.
ParametersOptionalposition: anyThe position to be used instead of the current position
Returns PointThe snapped position
Inherited from PlaceableObject.getSnappedPosition
- Optionalposition: anyThe position to be used instead of the current position

Get the snapped position for a given position or the current position.


#### Parameters

- Optionalposition: anyThe position to be used instead of the current position

`Optional`The position to be used instead of the current position


#### Returns Point

The snapped position

Inherited from PlaceableObject.getSnappedPosition


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


### Protected_getFillStyle

`Protected`- _getFillStyle(): objectProtectedGet the fill style used for drawing the shape of this Drawing.
Returns objectThe fill style options (PIXI.IFillStyleOptions).

`Protected`Get the fill style used for drawing the shape of this Drawing.


#### Returns object

The fill style options (PIXI.IFillStyleOptions).

`PIXI.IFillStyleOptions`
### Protected_getLineStyle

`Protected`- _getLineStyle(): objectProtectedGet the line style used for drawing the shape of this Drawing.
Returns objectThe line style options (PIXI.ILineStyleOptions).

`Protected`Get the line style used for drawing the shape of this Drawing.


#### Returns object

The line style options (PIXI.ILineStyleOptions).

`PIXI.ILineStyleOptions`
### Protected_getTargetAlpha

`Protected`- _getTargetAlpha(): numberProtectedGet the target opacity that should be used for a Placeable Object depending on its preview state.
Returns numberInherited from PlaceableObject._getTargetAlpha

`Protected`Get the target opacity that should be used for a Placeable Object depending on its preview state.


#### Returns number

Inherited from PlaceableObject._getTargetAlpha


### Protected_getTextStyle

`Protected`- _getTextStyle(): TextStyleProtectedPrepare the text style used to instantiate a PIXI.Text or PreciseText instance for this Drawing document.
Returns TextStyle

`Protected`Prepare the text style used to instantiate a PIXI.Text or PreciseText instance for this Drawing document.


#### Returns TextStyle


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


### Protected_onDragEnd

`Protected`- _onDragEnd(): voidProtectedConclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.
Returns voidInherited from PlaceableObject._onDragEnd

`Protected`Conclude a drag operation from the perspective of the preview clone.
Modify the appearance of both the clone (this) and the original (_original) object.


#### Returns void

Inherited from PlaceableObject._onDragEnd


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


### Protected_onHandleDragCancel

`Protected`- _onHandleDragCancel(event: PointerEvent): voidProtectedHandle cancellation of a drag event for one of the resizing handles
Parametersevent: PointerEventThe drag cancellation event
Returns void
- event: PointerEventThe drag cancellation event

`Protected`Handle cancellation of a drag event for one of the resizing handles


#### Parameters

- event: PointerEventThe drag cancellation event

The drag cancellation event


#### Returns void


### Protected_onHandleDragDrop

`Protected`- _onHandleDragDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle mouseup after dragging a tile scale handler
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The mouseup event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The mouseup event

`Protected`Handle mouseup after dragging a tile scale handler


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The mouseup event

The mouseup event


#### Returns void


### Protected_onHandleDragMove

`Protected`- _onHandleDragMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle mousemove while dragging a tile scale handler
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event

`Protected`Handle mousemove while dragging a tile scale handler


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event

The mouse interaction event


#### Returns void


### Protected_onHandleDragStart

`Protected`- _onHandleDragStart(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedStarting the resize handle drag event, initialize the original data.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event

`Protected`Starting the resize handle drag event, initialize the original data.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The mouse interaction event

The mouse interaction event


#### Returns void


### Protected_onHandleHoverIn

`Protected`- _onHandleHoverIn(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle mouse-over event on a control handle
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The mouseover event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The mouseover event

`Protected`Handle mouse-over event on a control handle


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The mouseover event

The mouseover event


#### Returns void


### Protected_onHandleHoverOut

`Protected`- _onHandleHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle mouse-out event on a control handle
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The mouseout event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The mouseout event

`Protected`Handle mouse-out event on a control handle


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The mouseout event

The mouseout event


#### Returns void


### Protected_onHoverIn

`Protected`- _onHoverIn(    event: FederatedEvent<UIEvent | PixiTouch>,    options?: { hoverOutOthers?: boolean },): boolean | voidProtectedActions that should be taken for this Placeable Object when a mouseover event occurs.
Hover events on PlaceableObject instances allow event propagation by default.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
options: { hoverOutOthers?: boolean } = {}Options which customize event handling
OptionalhoverOutOthers?: booleanTrigger hover-out behavior on sibling objects
Returns boolean | voidInherited from PlaceableObject._onHoverIn
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

Inherited from PlaceableObject._onHoverIn


### Protected_onHoverOut

`Protected`- _onHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedActions that should be taken for this Placeable Object when a mouseout event occurs
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event
Returns voidInherited from PlaceableObject._onHoverOut
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

`Protected`Actions that should be taken for this Placeable Object when a mouseout event occurs


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Inherited from PlaceableObject._onHoverOut


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


### Protected_onMouseDraw

`Protected`- _onMouseDraw(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle mouse movement which modifies the dimensions of the drawn shape.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>Returns void
- event: FederatedEvent<UIEvent | PixiTouch>

`Protected`Handle mouse movement which modifies the dimensions of the drawn shape.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>


#### Returns void


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


### Protected_refreshElevation

`Protected`- _refreshElevation(): voidProtectedUpdate sorting of this Drawing relative to other PrimaryCanvasGroup siblings.
Called when the elevation or sort order for the Drawing changes.
Returns void

`Protected`Update sorting of this Drawing relative to other PrimaryCanvasGroup siblings.
Called when the elevation or sort order for the Drawing changes.


#### Returns void


### Protected_refreshFrame

`Protected`- _refreshFrame(): voidProtectedRefresh the border frame that encloses the Drawing.
Returns void

`Protected`Refresh the border frame that encloses the Drawing.


#### Returns void


### Protected_refreshPosition

`Protected`- _refreshPosition(): voidProtectedRefresh the position.
Returns void

`Protected`Refresh the position.


#### Returns void


### Protected_refreshRotation

`Protected`- _refreshRotation(): voidProtectedRefresh the rotation.
Returns void

`Protected`Refresh the rotation.


#### Returns void


### Protected_refreshShape

`Protected`- _refreshShape(): voidProtectedClear and then draw the shape.
Returns void

`Protected`Clear and then draw the shape.


#### Returns void


### Protected_refreshState

`Protected`- _refreshState(): voidProtectedRefresh the displayed state of the Drawing.
Used to update aspects of the Drawing which change based on the user interaction state.
Returns void

`Protected`Refresh the displayed state of the Drawing.
Used to update aspects of the Drawing which change based on the user interaction state.


#### Returns void


### Protected_refreshText

`Protected`- _refreshText(): voidProtectedRefresh the content and appearance of text.
Returns void

`Protected`Refresh the content and appearance of text.


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


### StaticnormalizeShape

`Static`- normalizeShape(data: object): objectAdjust the location, dimensions, and points of the Drawing before committing the change.
Parametersdata: objectThe DrawingData pending update
Returns objectThe adjusted data
- data: objectThe DrawingData pending update

Adjust the location, dimensions, and points of the Drawing before committing the change.


#### Parameters

- data: objectThe DrawingData pending update

The DrawingData pending update


#### Returns object

The adjusted data


### StaticrescaleDimensions

`Static`- rescaleDimensions(original: Object, dx: number, dy: number): objectGet a vectorized rescaling transformation for drawing data and dimensions passed in parameter
Parametersoriginal: ObjectThe original drawing data
dx: numberThe pixel distance dragged in the horizontal direction
dy: numberThe pixel distance dragged in the vertical direction
Returns objectThe adjusted shape data
- original: ObjectThe original drawing data
- dx: numberThe pixel distance dragged in the horizontal direction
- dy: numberThe pixel distance dragged in the vertical direction

Get a vectorized rescaling transformation for drawing data and dimensions passed in parameter


#### Parameters

- original: ObjectThe original drawing data
- dx: numberThe pixel distance dragged in the horizontal direction
- dy: numberThe pixel distance dragged in the vertical direction

The original drawing data

The pixel distance dragged in the horizontal direction

The pixel distance dragged in the vertical direction


#### Returns object

The adjusted shape data


### Settings

- Protected
- Inherited
- Internal


### On This Page

