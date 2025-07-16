# ControlsLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.ControlsLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- ControlsLayer


# Class ControlsLayer

A CanvasLayer for displaying UI controls which are overlayed on top of other layers.

We track three types of events:

- Cursor movement
- Ruler measurement
- Map pings


#### Hierarchy (View Summary)

- InteractionLayerControlsLayer
- ControlsLayer

- ControlsLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_rulerPaths

`Internal`The ruler paths.


### cursors

A container of cursor interaction elements not bound to stage transforms.
Contains cursors elements.


### debug

A graphics instance used for drawing debugging visualization


### doors

A container of DoorControl instances


### eventMode

Inherited from InteractionLayer.eventMode


### options

Options for this layer instance.

Inherited from InteractionLayer.options


### pings

A container of pings interaction elements.
Contains pings elements.


### select

The Canvas selection rectangle


## Accessors


### active

- get active(): booleanIs this layer currently active
Returns booleanInherited from InteractionLayer.active

Is this layer currently active


#### Returns boolean

Inherited from InteractionLayer.active


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from InteractionLayer.hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from InteractionLayer.hookName


### name

- get name(): stringThe canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.
Returns stringExamplecanvas.lighting.name -> "LightingLayer"
Copy

Inherited from InteractionLayer.name

The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.


#### Returns string


#### Example

```javascript
canvas.lighting.name -> "LightingLayer"
Copy
```

`canvas.lighting.name -> "LightingLayer"`Inherited from InteractionLayer.name


### ruler

- get ruler(): BaseRulerA convenience accessor to the Ruler for the active game user
Returns BaseRuler

A convenience accessor to the Ruler for the active game user


#### Returns BaseRuler


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayerInherited from InteractionLayer.instance

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer

Inherited from InteractionLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): objectReturns objectOverrides InteractionLayer.layerOptions


#### Returns object

Overrides InteractionLayer.layerOptions


## Methods


### _deactivate

- _deactivate(): voidReturns voidOverrides InteractionLayer._deactivate


#### Returns void

Overrides InteractionLayer._deactivate


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides InteractionLayer._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides InteractionLayer._draw


### _onMouseMove

- _onMouseMove(currentPos: Point): voidInternalHandle mousemove events on the game canvas to broadcast activity. With SHOW_CURSOR permission enabled,
the user's cursor position is transmitted.
ParameterscurrentPos: PointReturns void
- currentPos: Point

`Internal`Handle mousemove events on the game canvas to broadcast activity. With SHOW_CURSOR permission enabled,
the user's cursor position is transmitted.


#### Parameters

- currentPos: Point


#### Returns void


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides InteractionLayer._tearDown
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides InteractionLayer._tearDown


### activate

- activate(options?: { tool?: string }): InteractionLayerActivate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.
ParametersOptionaloptions: { tool?: string } = {}Options which configure layer activation
Optionaltool?: stringA specific tool in the control palette to set as active
Returns InteractionLayerThe layer instance, now activated
Inherited from InteractionLayer.activate
- Optionaloptions: { tool?: string } = {}Options which configure layer activation
Optionaltool?: stringA specific tool in the control palette to set as active
- Optionaltool?: stringA specific tool in the control palette to set as active

Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.


#### Parameters

- Optionaloptions: { tool?: string } = {}Options which configure layer activation
Optionaltool?: stringA specific tool in the control palette to set as active
- Optionaltool?: stringA specific tool in the control palette to set as active

`Optional`Options which configure layer activation

- Optionaltool?: stringA specific tool in the control palette to set as active


##### Optionaltool?: string

`Optional`A specific tool in the control palette to set as active


#### Returns InteractionLayer

The layer instance, now activated

Inherited from InteractionLayer.activate


### deactivate

- deactivate(): InteractionLayerDeactivate the InteractionLayer, removing interactivity from its children.
Returns InteractionLayerThe layer instance, now inactive
Inherited from InteractionLayer.deactivate

Deactivate the InteractionLayer, removing interactivity from its children.


#### Returns InteractionLayer

The layer instance, now inactive

Inherited from InteractionLayer.deactivate


### draw

- draw(options?: object): Promise<CanvasLayer>Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.
ParametersOptionaloptions: object = {}Options which configure how the layer is drawn
Returns Promise<CanvasLayer>Inherited from InteractionLayer.draw
- Optionaloptions: object = {}Options which configure how the layer is drawn

Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is drawn

`Optional`Options which configure how the layer is drawn


#### Returns Promise<CanvasLayer>

Inherited from InteractionLayer.draw


### drawCursor

- drawCursor(user: documents.User): CursorCreate and draw the Cursor object for a given User.
Parametersuser: documents.UserThe User document for whom to draw the cursor Container
Returns Cursor
- user: documents.UserThe User document for whom to draw the cursor Container

Create and draw the Cursor object for a given User.


#### Parameters

- user: documents.UserThe User document for whom to draw the cursor Container

The User document for whom to draw the cursor Container


#### Returns Cursor


### drawCursors

- drawCursors(): voidDraw the cursors container
Returns void

Draw the cursors container


#### Returns void


### drawDoors

- drawDoors(): voidDraw door control icons to the doors container.
Returns void

Draw door control icons to the doors container.


#### Returns void


### drawOffscreenPing

- drawOffscreenPing(position: Point, options?: any): Promise<boolean>Draw a ping at the edge of the viewport, pointing to the location of an off-screen ping.
Parametersposition: PointThe coordinates of the off-screen ping.
Optionaloptions: any = {}Additional options to configure how the ping is drawn.
Returns Promise<boolean>A promise which resolves once the Ping has been drawn and animated.
SeeControlsLayer#drawPing
- position: PointThe coordinates of the off-screen ping.
- Optionaloptions: any = {}Additional options to configure how the ping is drawn.

Draw a ping at the edge of the viewport, pointing to the location of an off-screen ping.


#### Parameters

- position: PointThe coordinates of the off-screen ping.
- Optionaloptions: any = {}Additional options to configure how the ping is drawn.

The coordinates of the off-screen ping.

`Optional`Additional options to configure how the ping is drawn.


#### Returns Promise<boolean>

A promise which resolves once the Ping has been drawn and animated.


#### See

ControlsLayer#drawPing


### drawPing

- drawPing(position: Point, options?: any): Promise<boolean>Draw a ping on the canvas.
Parametersposition: PointThe position on the canvas that was pinged.
Optionaloptions: any = {}Additional options to configure how the ping is drawn.
Returns Promise<boolean>A promise which resolves once the Ping has been drawn and animated.
Seefoundry.canvas.interaction.Ping#animate
- position: PointThe position on the canvas that was pinged.
- Optionaloptions: any = {}Additional options to configure how the ping is drawn.

Draw a ping on the canvas.


#### Parameters

- position: PointThe position on the canvas that was pinged.
- Optionaloptions: any = {}Additional options to configure how the ping is drawn.

The position on the canvas that was pinged.

`Optional`Additional options to configure how the ping is drawn.


#### Returns Promise<boolean>

A promise which resolves once the Ping has been drawn and animated.


#### See

foundry.canvas.interaction.Ping#animate


### drawRuler

- drawRuler(user: documents.User): Promise<BaseRuler>Create and draw the Ruler object for a given User.
Parametersuser: documents.UserThe User document for whom to draw the Ruler
Returns Promise<BaseRuler>The Ruler instance
- user: documents.UserThe User document for whom to draw the Ruler

Create and draw the Ruler object for a given User.


#### Parameters

- user: documents.UserThe User document for whom to draw the Ruler

The User document for whom to draw the Ruler


#### Returns Promise<BaseRuler>

The Ruler instance


### drawRulers

- drawRulers(): Promise<void>Create and add Ruler instances for every game User.
Returns Promise<void>

Create and add Ruler instances for every game User.


#### Returns Promise<void>


### drawSelect

- drawSelect(coords: Rectangle): voidDraw the select rectangle given an event originated within the base canvas layer
Parameterscoords: RectangleThe rectangle
Returns void
- coords: RectangleThe rectangle

Draw the select rectangle given an event originated within the base canvas layer


#### Parameters

- coords: RectangleThe rectangle

The rectangle


#### Returns void


### getCursorForUser

- getCursorForUser(userId: string): null | CursorGet the Cursor instance for a specific User ID.
ParametersuserId: stringThe User ID
Returns null | Cursor
- userId: stringThe User ID

Get the Cursor instance for a specific User ID.


#### Parameters

- userId: stringThe User ID

The User ID


#### Returns null | Cursor


### getRulerForUser

- getRulerForUser(userId: string): null | BaseRulerGet the Ruler instance for a specific User ID.
ParametersuserId: stringThe User ID
Returns null | BaseRuler
- userId: stringThe User ID

Get the Ruler instance for a specific User ID.


#### Parameters

- userId: stringThe User ID

The User ID


#### Returns null | BaseRuler


### getZIndex

- getZIndex(): numberGet the zIndex that should be used for ordering this layer vertically relative to others in the same Container.
Returns numberInherited from InteractionLayer.getZIndex

Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.


#### Returns number

Inherited from InteractionLayer.getZIndex


### handlePing

- handlePing(    user: documents.User,    position: Point,    data?: PingData,): Promise<boolean>Handle a broadcast ping.
Parametersuser: documents.UserThe user who pinged.
position: PointThe position on the canvas that was pinged.
Optionaldata: PingData = {}The broadcast ping data.
Returns Promise<boolean>A promise which resolves once the Ping has been drawn and animated
SeeControlsLayer#drawPing
- user: documents.UserThe user who pinged.
- position: PointThe position on the canvas that was pinged.
- Optionaldata: PingData = {}The broadcast ping data.

Handle a broadcast ping.


#### Parameters

- user: documents.UserThe user who pinged.
- position: PointThe position on the canvas that was pinged.
- Optionaldata: PingData = {}The broadcast ping data.

The user who pinged.

The position on the canvas that was pinged.

`Optional`The broadcast ping data.


#### Returns Promise<boolean>

A promise which resolves once the Ping has been drawn and animated


#### See

ControlsLayer#drawPing


### tearDown

- tearDown(options?: object): Promise<CanvasLayer>Deconstruct data used in the current layer in preparation to re-draw the canvas
ParametersOptionaloptions: object = {}Options which configure how the layer is deconstructed
Returns Promise<CanvasLayer>Inherited from InteractionLayer.tearDown
- Optionaloptions: object = {}Options which configure how the layer is deconstructed

Deconstruct data used in the current layer in preparation to re-draw the canvas


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is deconstructed

`Optional`Options which configure how the layer is deconstructed


#### Returns Promise<CanvasLayer>

Inherited from InteractionLayer.tearDown


### updateCursor

- updateCursor(user: documents.User, position: Point): voidUpdate the cursor when the user moves to a new position
Parametersuser: documents.UserThe User for whom to update the cursor
position: PointThe new cursor position
Returns void
- user: documents.UserThe User for whom to update the cursor
- position: PointThe new cursor position

Update the cursor when the user moves to a new position


#### Parameters

- user: documents.UserThe User for whom to update the cursor
- position: PointThe new cursor position

The User for whom to update the cursor

The new cursor position


#### Returns void


### updateRuler

- updateRuler(    user: documents.User,    data: null | { hidden: boolean; path: ElevatedPoint[] },): Promise<void>Update the Ruler for a User given the provided path.
Parametersuser: documents.UserThe User for whom to update the Ruler
data: null | { hidden: boolean; path: ElevatedPoint[] }The path and hidden state of the Ruler
Returns Promise<void>
- user: documents.UserThe User for whom to update the Ruler
- data: null | { hidden: boolean; path: ElevatedPoint[] }The path and hidden state of the Ruler

Update the Ruler for a User given the provided path.


#### Parameters

- user: documents.UserThe User for whom to update the Ruler
- data: null | { hidden: boolean; path: ElevatedPoint[] }The path and hidden state of the Ruler

The User for whom to update the Ruler

The path and hidden state of the Ruler


#### Returns Promise<void>


### Protected_activate

`Protected`- _activate(): voidProtectedThe inner _activate method which may be defined by each InteractionLayer subclass.
Returns voidInherited from InteractionLayer._activate

`Protected`The inner _activate method which may be defined by each InteractionLayer subclass.


#### Returns void

Inherited from InteractionLayer._activate


### Protected_canDragLeftStart

`Protected`- _canDragLeftStart(    user: User,    event: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to left-click drag on the Canvas?
Parametersuser: UserThe User performing the action.
event: FederatedEvent<UIEvent | PixiTouch>The event object.
Returns booleanInherited from InteractionLayer._canDragLeftStart
- user: UserThe User performing the action.
- event: FederatedEvent<UIEvent | PixiTouch>The event object.

`Protected`Does the User have permission to left-click drag on the Canvas?


#### Parameters

- user: UserThe User performing the action.
- event: FederatedEvent<UIEvent | PixiTouch>The event object.

The User performing the action.

The event object.


#### Returns boolean

Inherited from InteractionLayer._canDragLeftStart


### Protected_highlightObjects

`Protected`- _highlightObjects(active: boolean): voidProtectedHighlight the objects of this layer.
Parametersactive: booleanShould the objects of this layer be highlighted?
Returns voidInherited from InteractionLayer._highlightObjects
- active: booleanShould the objects of this layer be highlighted?

`Protected`Highlight the objects of this layer.


#### Parameters

- active: booleanShould the objects of this layer be highlighted?

Should the objects of this layer be highlighted?


#### Returns void

Inherited from InteractionLayer._highlightObjects


### Protected_onCanvasPan

`Protected`- _onCanvasPan(): voidProtectedHandle the canvas panning to a new view.
Returns void

`Protected`Handle the canvas panning to a new view.


#### Returns void


### Protected_onClickLeft

`Protected`- _onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle left mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onClickLeft
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle left mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onClickLeft


### Protected_onClickLeft2

`Protected`- _onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle double left-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onClickLeft2
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle double left-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onClickLeft2


### Protected_onClickRight

`Protected`- _onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle right mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onClickRight
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle right mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onClickRight


### Protected_onClickRight2

`Protected`- _onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle double right mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onClickRight2
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle double right mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onClickRight2


### Protected_onCopyKey

`Protected`- _onCopyKey(event: KeyboardEvent): booleanProtectedHandle a Copy keypress while this layer is active.
Parametersevent: KeyboardEventThe copy key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onCopyKey
- event: KeyboardEventThe copy key press event

`Protected`Handle a Copy keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe copy key press event

The copy key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onCopyKey


### Protected_onCutKey

`Protected`- _onCutKey(event: KeyboardEvent): booleanProtectedHandle a Cut keypress while this layer is active.
Parametersevent: KeyboardEventThe cut key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onCutKey
- event: KeyboardEventThe cut key press event

`Protected`Handle a Cut keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe cut key press event

The cut key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onCutKey


### Protected_onCycleViewKey

`Protected`- _onCycleViewKey(event: KeyboardEvent): booleanProtectedHandle a Cycle View keypress while this layer is active.
Parametersevent: KeyboardEventThe cycle-view key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onCycleViewKey
- event: KeyboardEventThe cycle-view key press event

`Protected`Handle a Cycle View keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe cycle-view key press event

The cycle-view key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onCycleViewKey


### Protected_onDeleteKey

`Protected`- _onDeleteKey(event: KeyboardEvent): booleanProtectedHandle a Delete keypress while this layer is active.
Parametersevent: KeyboardEventThe delete key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onDeleteKey
- event: KeyboardEventThe delete key press event

`Protected`Handle a Delete keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe delete key press event

The delete key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onDeleteKey


### Protected_onDismissKey

`Protected`- _onDismissKey(event: KeyboardEvent): booleanProtectedHandle a Dismiss keypress while this layer is active.
Parametersevent: KeyboardEventThe dismiss key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onDismissKey
- event: KeyboardEventThe dismiss key press event

`Protected`Handle a Dismiss keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe dismiss key press event

The dismiss key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onDismissKey


### Protected_onDragLeftCancel

`Protected`- _onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCancel a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onDragLeftCancel
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Cancel a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onDragLeftCancel


### Protected_onDragLeftDrop

`Protected`- _onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedConclude a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onDragLeftDrop
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Conclude a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onDragLeftDrop


### Protected_onDragLeftMove

`Protected`- _onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedContinue a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onDragLeftMove
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Continue a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onDragLeftMove


### Protected_onDragLeftStart

`Protected`- _onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedStart a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns voidInherited from InteractionLayer._onDragLeftStart
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Start a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Inherited from InteractionLayer._onDragLeftStart


### Protected_onLongPress

`Protected`- _onLongPress(    event: FederatedEvent<UIEvent | PixiTouch>,    origin: Point,): undefined | Promise<boolean>ProtectedHandle pinging the canvas.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event.
origin: PointThe local canvas coordinates of the mousepress.
Returns undefined | Promise<boolean>
- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event.
- origin: PointThe local canvas coordinates of the mousepress.

`Protected`Handle pinging the canvas.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The triggering canvas interaction event.
- origin: PointThe local canvas coordinates of the mousepress.

The triggering canvas interaction event.

The local canvas coordinates of the mousepress.


#### Returns undefined | Promise<boolean>


### Protected_onMouseWheel

`Protected`- _onMouseWheel(event: WheelEvent): voidProtectedHandle mouse-wheel events which occur for this active layer.
Parametersevent: WheelEventThe WheelEvent initiated on the document
Returns voidInherited from InteractionLayer._onMouseWheel
- event: WheelEventThe WheelEvent initiated on the document

`Protected`Handle mouse-wheel events which occur for this active layer.


#### Parameters

- event: WheelEventThe WheelEvent initiated on the document

The WheelEvent initiated on the document


#### Returns void

Inherited from InteractionLayer._onMouseWheel


### Protected_onPasteKey

`Protected`- _onPasteKey(event: KeyboardEvent): booleanProtectedHandle a Paste keypress while this layer is active.
Parametersevent: KeyboardEventThe paste key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onPasteKey
- event: KeyboardEventThe paste key press event

`Protected`Handle a Paste keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe paste key press event

The paste key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onPasteKey


### Protected_onSelectAllKey

`Protected`- _onSelectAllKey(event: KeyboardEvent): booleanProtectedHandle a Select All keypress while this layer is active.
Parametersevent: KeyboardEventThe select-all key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onSelectAllKey
- event: KeyboardEventThe select-all key press event

`Protected`Handle a Select All keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe select-all key press event

The select-all key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onSelectAllKey


### Protected_onUndoKey

`Protected`- _onUndoKey(event: KeyboardEvent): booleanProtectedHandle a Undo keypress while this layer is active.
Parametersevent: KeyboardEventThe undo key press event
Returns booleanWas the event handled?
Inherited from InteractionLayer._onUndoKey
- event: KeyboardEventThe undo key press event

`Protected`Handle a Undo keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe undo key press event

The undo key press event


#### Returns boolean

Was the event handled?

Inherited from InteractionLayer._onUndoKey


### StaticprepareSceneControls

`Static`- prepareSceneControls(): anyPrepare data used by SceneControls to register tools used by this layer.
Returns anyInherited from InteractionLayer.prepareSceneControls

Prepare data used by SceneControls to register tools used by this layer.


#### Returns any

Inherited from InteractionLayer.prepareSceneControls


### Settings

- Protected
- Inherited
- Internal


### On This Page

