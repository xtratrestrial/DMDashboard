# InteractionLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.InteractionLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- InteractionLayer


# Class InteractionLayer

A subclass of CanvasLayer which provides support for user interaction with its contained objects.


#### Hierarchy (View Summary)

- CanvasLayerInteractionLayerPlaceablesLayerControlsLayer
- InteractionLayerPlaceablesLayerControlsLayer
- PlaceablesLayer
- ControlsLayer

- InteractionLayerPlaceablesLayerControlsLayer
- PlaceablesLayer
- ControlsLayer

- PlaceablesLayer
- ControlsLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### eventMode

Overrides CanvasLayer.eventMode


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from CanvasLayer.interactiveChildren


### options

Options for this layer instance.

Inherited from CanvasLayer.options


## Accessors


### active

- get active(): booleanIs this layer currently active
Returns boolean

Is this layer currently active


#### Returns boolean


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from CanvasLayer.hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from CanvasLayer.hookName


### name

- get name(): stringThe canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.
Returns stringExamplecanvas.lighting.name -> "LightingLayer"
Copy

Inherited from CanvasLayer.name

The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.


#### Returns string


#### Example

```javascript
canvas.lighting.name -> "LightingLayer"
Copy
```

`canvas.lighting.name -> "LightingLayer"`Inherited from CanvasLayer.name


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayerInherited from CanvasLayer.instance

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer

Inherited from CanvasLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): { name: string; zIndex: number }Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.
Returns { name: string; zIndex: number }Overrides CanvasLayer.layerOptions

Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.


#### Returns { name: string; zIndex: number }

Overrides CanvasLayer.layerOptions


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides CanvasLayer._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides CanvasLayer._draw


### activate

- activate(options?: { tool?: string }): InteractionLayerActivate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.
ParametersOptionaloptions: { tool?: string } = {}Options which configure layer activation
Optionaltool?: stringA specific tool in the control palette to set as active
Returns InteractionLayerThe layer instance, now activated
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


### deactivate

- deactivate(): InteractionLayerDeactivate the InteractionLayer, removing interactivity from its children.
Returns InteractionLayerThe layer instance, now inactive

Deactivate the InteractionLayer, removing interactivity from its children.


#### Returns InteractionLayer

The layer instance, now inactive


### draw

- draw(options?: object): Promise<CanvasLayer>Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.
ParametersOptionaloptions: object = {}Options which configure how the layer is drawn
Returns Promise<CanvasLayer>Inherited from CanvasLayer.draw
- Optionaloptions: object = {}Options which configure how the layer is drawn

Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is drawn

`Optional`Options which configure how the layer is drawn


#### Returns Promise<CanvasLayer>

Inherited from CanvasLayer.draw


### getZIndex

- getZIndex(): numberGet the zIndex that should be used for ordering this layer vertically relative to others in the same Container.
Returns number

Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.


#### Returns number


### tearDown

- tearDown(options?: object): Promise<CanvasLayer>Deconstruct data used in the current layer in preparation to re-draw the canvas
ParametersOptionaloptions: object = {}Options which configure how the layer is deconstructed
Returns Promise<CanvasLayer>Inherited from CanvasLayer.tearDown
- Optionaloptions: object = {}Options which configure how the layer is deconstructed

Deconstruct data used in the current layer in preparation to re-draw the canvas


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is deconstructed

`Optional`Options which configure how the layer is deconstructed


#### Returns Promise<CanvasLayer>

Inherited from CanvasLayer.tearDown


### Protected_activate

`Protected`- _activate(): voidProtectedThe inner _activate method which may be defined by each InteractionLayer subclass.
Returns void

`Protected`The inner _activate method which may be defined by each InteractionLayer subclass.


#### Returns void


### Protected_canDragLeftStart

`Protected`- _canDragLeftStart(    user: User,    event: FederatedEvent<UIEvent | PixiTouch>,): booleanProtectedDoes the User have permission to left-click drag on the Canvas?
Parametersuser: UserThe User performing the action.
event: FederatedEvent<UIEvent | PixiTouch>The event object.
Returns boolean
- user: UserThe User performing the action.
- event: FederatedEvent<UIEvent | PixiTouch>The event object.

`Protected`Does the User have permission to left-click drag on the Canvas?


#### Parameters

- user: UserThe User performing the action.
- event: FederatedEvent<UIEvent | PixiTouch>The event object.

The User performing the action.

The event object.


#### Returns boolean


### Protected_deactivate

`Protected`- _deactivate(): voidProtectedThe inner _deactivate method which may be defined by each InteractionLayer subclass.
Returns void

`Protected`The inner _deactivate method which may be defined by each InteractionLayer subclass.


#### Returns void


### Protected_highlightObjects

`Protected`- _highlightObjects(active: boolean): voidProtectedHighlight the objects of this layer.
Parametersactive: booleanShould the objects of this layer be highlighted?
Returns void
- active: booleanShould the objects of this layer be highlighted?

`Protected`Highlight the objects of this layer.


#### Parameters

- active: booleanShould the objects of this layer be highlighted?

Should the objects of this layer be highlighted?


#### Returns void


### Protected_onClickLeft

`Protected`- _onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle left mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle left mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onClickLeft2

`Protected`- _onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle double left-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle double left-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onClickRight

`Protected`- _onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle right mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle right mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onClickRight2

`Protected`- _onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedHandle double right mouse-click events which originate from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Handle double right mouse-click events which originate from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onCopyKey

`Protected`- _onCopyKey(event: KeyboardEvent): booleanProtectedHandle a Copy keypress while this layer is active.
Parametersevent: KeyboardEventThe copy key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe copy key press event

`Protected`Handle a Copy keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe copy key press event

The copy key press event


#### Returns boolean

Was the event handled?


### Protected_onCutKey

`Protected`- _onCutKey(event: KeyboardEvent): booleanProtectedHandle a Cut keypress while this layer is active.
Parametersevent: KeyboardEventThe cut key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe cut key press event

`Protected`Handle a Cut keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe cut key press event

The cut key press event


#### Returns boolean

Was the event handled?


### Protected_onCycleViewKey

`Protected`- _onCycleViewKey(event: KeyboardEvent): booleanProtectedHandle a Cycle View keypress while this layer is active.
Parametersevent: KeyboardEventThe cycle-view key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe cycle-view key press event

`Protected`Handle a Cycle View keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe cycle-view key press event

The cycle-view key press event


#### Returns boolean

Was the event handled?


### Protected_onDeleteKey

`Protected`- _onDeleteKey(event: KeyboardEvent): booleanProtectedHandle a Delete keypress while this layer is active.
Parametersevent: KeyboardEventThe delete key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe delete key press event

`Protected`Handle a Delete keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe delete key press event

The delete key press event


#### Returns boolean

Was the event handled?


### Protected_onDismissKey

`Protected`- _onDismissKey(event: KeyboardEvent): booleanProtectedHandle a Dismiss keypress while this layer is active.
Parametersevent: KeyboardEventThe dismiss key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe dismiss key press event

`Protected`Handle a Dismiss keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe dismiss key press event

The dismiss key press event


#### Returns boolean

Was the event handled?


### Protected_onDragLeftCancel

`Protected`- _onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCancel a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Cancel a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onDragLeftDrop

`Protected`- _onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedConclude a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Conclude a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onDragLeftMove

`Protected`- _onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedContinue a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Continue a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onDragLeftStart

`Protected`- _onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedStart a left-click drag workflow originating from the Canvas stage.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

`Protected`Start a left-click drag workflow originating from the Canvas stage.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void


### Protected_onMouseWheel

`Protected`- _onMouseWheel(event: WheelEvent): voidProtectedHandle mouse-wheel events which occur for this active layer.
Parametersevent: WheelEventThe WheelEvent initiated on the document
Returns void
- event: WheelEventThe WheelEvent initiated on the document

`Protected`Handle mouse-wheel events which occur for this active layer.


#### Parameters

- event: WheelEventThe WheelEvent initiated on the document

The WheelEvent initiated on the document


#### Returns void


### Protected_onPasteKey

`Protected`- _onPasteKey(event: KeyboardEvent): booleanProtectedHandle a Paste keypress while this layer is active.
Parametersevent: KeyboardEventThe paste key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe paste key press event

`Protected`Handle a Paste keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe paste key press event

The paste key press event


#### Returns boolean

Was the event handled?


### Protected_onSelectAllKey

`Protected`- _onSelectAllKey(event: KeyboardEvent): booleanProtectedHandle a Select All keypress while this layer is active.
Parametersevent: KeyboardEventThe select-all key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe select-all key press event

`Protected`Handle a Select All keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe select-all key press event

The select-all key press event


#### Returns boolean

Was the event handled?


### Protected_onUndoKey

`Protected`- _onUndoKey(event: KeyboardEvent): booleanProtectedHandle a Undo keypress while this layer is active.
Parametersevent: KeyboardEventThe undo key press event
Returns booleanWas the event handled?
- event: KeyboardEventThe undo key press event

`Protected`Handle a Undo keypress while this layer is active.


#### Parameters

- event: KeyboardEventThe undo key press event

The undo key press event


#### Returns boolean

Was the event handled?


### Protected_tearDown

`Protected`- _tearDown(options: object): Promise<void>ProtectedThe inner _tearDown method which may be customized by each CanvasLayer subclass.
Parametersoptions: objectOptions which configure how the layer is deconstructed
Returns Promise<void>Inherited from CanvasLayer._tearDown
- options: objectOptions which configure how the layer is deconstructed

`Protected`The inner _tearDown method which may be customized by each CanvasLayer subclass.


#### Parameters

- options: objectOptions which configure how the layer is deconstructed

Options which configure how the layer is deconstructed


#### Returns Promise<void>

Inherited from CanvasLayer._tearDown


### StaticprepareSceneControls

`Static`- prepareSceneControls(): anyPrepare data used by SceneControls to register tools used by this layer.
Returns any

Prepare data used by SceneControls to register tools used by this layer.


#### Returns any


### Settings

- Protected
- Inherited
- Internal


### On This Page

