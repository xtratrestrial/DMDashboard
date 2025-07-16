# TokenLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.TokenLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- TokenLayer


# Class TokenLayer

The Tokens Container.


#### Hierarchy (View Summary)

- PlaceablesLayerTokenLayer
- TokenLayer

- TokenLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_configPreview

`Internal`Preview container for config previews

Inherited from PlaceablesLayer._configPreview


### Internal_draggedToken

`Internal`The Token that the drag workflow was initiated on, if there's a drag workflow in progress.
Set in foundry.canvas.placeables.Token#_onDragLeftStart and
foundry.canvas.placeables.Token#_onDragLeftCancel.


### Internal_dragMovementAction

`Internal`The currently selected movement action override.


### Internal_rulerPaths

`Internal`The ruler paths.


### Internal_tabIndex

`Internal`The current index position in the tab cycle


### clipboard

Keep track of objects copied with CTRL+C/X which can be pasted later.

Inherited from PlaceablesLayer.clipboard


### eventMode

Inherited from PlaceablesLayer.eventMode


### highlightObjects

Track whether "highlight all objects" is currently active

Inherited from PlaceablesLayer.highlightObjects


### history

Keep track of history so that CTRL+Z can undo changes.

Inherited from PlaceablesLayer.history


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from PlaceablesLayer.interactiveChildren


### objects

Placeable Layer Objects

Inherited from PlaceablesLayer.objects


### options

Options for this layer instance.

Inherited from PlaceablesLayer.options


### preview

Preview Object Placement

Inherited from PlaceablesLayer.preview


### quadtree

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.

Inherited from PlaceablesLayer.quadtree


### turnMarkers

A Set of Token objects which currently display a combat turn marker.


### StaticCREATION_STATES

`Static`Creation states affected to placeables during their construction.

Inherited from PlaceablesLayer.CREATION_STATES


### StaticdocumentName

`Static`A reference to the named Document type which is contained within this Canvas Layer.

Overrides PlaceablesLayer.documentName


### StaticSORT_ORDER

`Static`Sort order for placeables belonging to this layer.

Inherited from PlaceablesLayer.SORT_ORDER


## Accessors


### active

- get active(): booleanIs this layer currently active
Returns booleanInherited from PlaceablesLayer.active

Is this layer currently active


#### Returns boolean

Inherited from PlaceablesLayer.active


### controlled

- get controlled(): PlaceableObject[]An Array of placeable objects in this layer which have the _controlled attribute
Returns PlaceableObject[]Inherited from PlaceablesLayer.controlled

An Array of placeable objects in this layer which have the _controlled attribute


#### Returns PlaceableObject[]

Inherited from PlaceablesLayer.controlled


### controlledObjects

- get controlledObjects(): Map<string, PlaceableObject>Track the set of PlaceableObjects on this layer which are currently controlled.
Returns Map<string, PlaceableObject>Inherited from PlaceablesLayer.controlledObjects

Track the set of PlaceableObjects on this layer which are currently controlled.


#### Returns Map<string, PlaceableObject>

Inherited from PlaceablesLayer.controlledObjects


### documentCollection

- get documentCollection(): null | DocumentCollectionObtain a reference to the Collection of embedded Document instances within the currently viewed Scene
Returns null | DocumentCollectionInherited from PlaceablesLayer.documentCollection

Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene


#### Returns null | DocumentCollection

Inherited from PlaceablesLayer.documentCollection


### hasPreview

- get hasPreview(): booleanTo know wheter this layer has a preview object or not.
Returns booleanInherited from PlaceablesLayer.hasPreview

To know wheter this layer has a preview object or not.


#### Returns boolean

Inherited from PlaceablesLayer.hasPreview


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringOverrides PlaceablesLayer.hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Overrides PlaceablesLayer.hookName


### hover

- get hover(): null | PlaceableObjectTrack the PlaceableObject on this layer which is currently hovered upon.
Returns null | PlaceableObjectInherited from PlaceablesLayer.hover

Track the PlaceableObject on this layer which is currently hovered upon.


#### Returns null | PlaceableObject

Inherited from PlaceablesLayer.hover


### hud

- get hud(): TokenHUDReturns TokenHUDOverrides PlaceablesLayer.hud


#### Returns TokenHUD

Overrides PlaceablesLayer.hud


### name

- get name(): stringThe canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.
Returns stringExamplecanvas.lighting.name -> "LightingLayer"
Copy

Inherited from PlaceablesLayer.name

The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
defined baseClass for the layer type.


#### Returns string


#### Example

```javascript
canvas.lighting.name -> "LightingLayer"
Copy
```

`canvas.lighting.name -> "LightingLayer"`Inherited from PlaceablesLayer.name


### occlusionMode

- get occlusionMode(): numberThe set of tokens that trigger occlusion (a union of CONST.TOKEN_OCCLUSION_MODES).
Returns number

The set of tokens that trigger occlusion (a union of CONST.TOKEN_OCCLUSION_MODES).


#### Returns number


### ownedTokens

- get ownedTokens(): canvas.placeables.Token[]An Array of tokens which belong to actors which are owned
Returns canvas.placeables.Token[]

An Array of tokens which belong to actors which are owned


#### Returns canvas.placeables.Token[]


### placeables

- get placeables(): PlaceableObject[]A convenience method for accessing the placeable object instances contained in this layer
Returns PlaceableObject[]Inherited from PlaceablesLayer.placeables

A convenience method for accessing the placeable object instances contained in this layer


#### Returns PlaceableObject[]

Inherited from PlaceablesLayer.placeables


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayerInherited from PlaceablesLayer.instance

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer

Inherited from PlaceablesLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): objectConfiguration options for the PlaceablesLayer.
Returns objectOverrides PlaceablesLayer.layerOptions

Configuration options for the PlaceablesLayer.


#### Returns object

Overrides PlaceablesLayer.layerOptions


### StaticplaceableClass

`Static`- get placeableClass(): typeof PlaceableObjectObtain a reference to the PlaceableObject class definition which represents the Document type in this layer.
Returns typeof PlaceableObjectInherited from PlaceablesLayer.placeableClass

Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.


#### Returns typeof PlaceableObject

Inherited from PlaceablesLayer.placeableClass


## Methods


### _activate

- _activate(): voidReturns voidOverrides PlaceablesLayer._activate


#### Returns void

Overrides PlaceablesLayer._activate


### _canDragLeftStart

- _canDragLeftStart(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanInherited from PlaceablesLayer._canDragLeftStart
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Inherited from PlaceablesLayer._canDragLeftStart


### _confirmDeleteKey

- _confirmDeleteKey(documents: any): Promise<any>Parametersdocuments: anyReturns Promise<any>Overrides PlaceablesLayer._confirmDeleteKey
- documents: any


#### Parameters

- documents: any


#### Returns Promise<any>

Overrides PlaceablesLayer._confirmDeleteKey


### _createPreview

- _createPreview(    createData: object,    options?: { left?: number; renderSheet?: boolean; top?: number },): PlaceableObjectInternalCreate a preview of this layer's object type from a world document and show its sheet to be finalized.
ParameterscreateData: objectThe data to create the object with.
Optionaloptions: { left?: number; renderSheet?: boolean; top?: number } = {}Options which configure preview creation
Optionalleft?: numberThe offset-left position where the sheet should be rendered
OptionalrenderSheet?: booleanRender the preview object config sheet?
Optionaltop?: numberThe offset-top position where the sheet should be rendered
Returns PlaceableObjectThe created preview object
Inherited from PlaceablesLayer._createPreview
- createData: objectThe data to create the object with.
- Optionaloptions: { left?: number; renderSheet?: boolean; top?: number } = {}Options which configure preview creation
Optionalleft?: numberThe offset-left position where the sheet should be rendered
OptionalrenderSheet?: booleanRender the preview object config sheet?
Optionaltop?: numberThe offset-top position where the sheet should be rendered
- Optionalleft?: numberThe offset-left position where the sheet should be rendered
- OptionalrenderSheet?: booleanRender the preview object config sheet?
- Optionaltop?: numberThe offset-top position where the sheet should be rendered

`Internal`Create a preview of this layer's object type from a world document and show its sheet to be finalized.


#### Parameters

- createData: objectThe data to create the object with.
- Optionaloptions: { left?: number; renderSheet?: boolean; top?: number } = {}Options which configure preview creation
Optionalleft?: numberThe offset-left position where the sheet should be rendered
OptionalrenderSheet?: booleanRender the preview object config sheet?
Optionaltop?: numberThe offset-top position where the sheet should be rendered
- Optionalleft?: numberThe offset-left position where the sheet should be rendered
- OptionalrenderSheet?: booleanRender the preview object config sheet?
- Optionaltop?: numberThe offset-top position where the sheet should be rendered

The data to create the object with.

`Optional`Options which configure preview creation

- Optionalleft?: numberThe offset-left position where the sheet should be rendered
- OptionalrenderSheet?: booleanRender the preview object config sheet?
- Optionaltop?: numberThe offset-top position where the sheet should be rendered


##### Optionalleft?: number

`Optional`The offset-left position where the sheet should be rendered


##### OptionalrenderSheet?: boolean

`Optional`Render the preview object config sheet?


##### Optionaltop?: number

`Optional`The offset-top position where the sheet should be rendered


#### Returns PlaceableObject

The created preview object

Inherited from PlaceablesLayer._createPreview


### _deactivate

- _deactivate(): voidReturns voidOverrides PlaceablesLayer._deactivate


#### Returns void

Overrides PlaceablesLayer._deactivate


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Overrides PlaceablesLayer._draw
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Overrides PlaceablesLayer._draw


### _getCopyableObjects

- _getCopyableObjects(options: any): PlaceableObject[]InternalAn internal helper method to identify the array of PlaceableObjects which can be copied/cut.
Parametersoptions: anyAdditional options
Returns PlaceableObject[]An array of objects which can be copied/cut
Overrides PlaceablesLayer._getCopyableObjects
- options: anyAdditional options

`Internal`An internal helper method to identify the array of PlaceableObjects which can be copied/cut.


#### Parameters

- options: anyAdditional options

Additional options


#### Returns PlaceableObject[]

An array of objects which can be copied/cut

Overrides PlaceablesLayer._getCopyableObjects


### _getMovableObjects

- _getMovableObjects(ids: any, includeLocked: any): PlaceableObject[]InternalAn internal helper method to identify the array of PlaceableObjects which can be moved or rotated.
Parametersids: anyAn explicit array of IDs requested.
includeLocked: anyInclude locked objects which would otherwise be ignored?
Returns PlaceableObject[]An array of objects which can be moved or rotated
ThrowsIf any explicitly requested ID is not valid
Overrides PlaceablesLayer._getMovableObjects
- ids: anyAn explicit array of IDs requested.
- includeLocked: anyInclude locked objects which would otherwise be ignored?

`Internal`An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.


#### Parameters

- ids: anyAn explicit array of IDs requested.
- includeLocked: anyInclude locked objects which would otherwise be ignored?

An explicit array of IDs requested.

Include locked objects which would otherwise be ignored?


#### Returns PlaceableObject[]

An array of objects which can be moved or rotated


#### Throws

If any explicitly requested ID is not valid

Overrides PlaceablesLayer._getMovableObjects


### _highlightObjects

- _highlightObjects(active: any): voidParametersactive: anyReturns voidOverrides PlaceablesLayer._highlightObjects
- active: any


#### Parameters

- active: any


#### Returns void

Overrides PlaceablesLayer._highlightObjects


### _onClickLeft

- _onClickLeft(event: any): anyParametersevent: anyReturns anyOverrides PlaceablesLayer._onClickLeft
- event: any


#### Parameters

- event: any


#### Returns any

Overrides PlaceablesLayer._onClickLeft


### _onClickLeft2

- _onClickLeft2(event: any): voidHandle double left-click events which originate from the Canvas stage.
Parametersevent: anyThe PIXI InteractionEvent which wraps a PointerEvent
Returns voidOverrides PlaceablesLayer._onClickLeft2
- event: anyThe PIXI InteractionEvent which wraps a PointerEvent

Handle double left-click events which originate from the Canvas stage.


#### Parameters

- event: anyThe PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Overrides PlaceablesLayer._onClickLeft2


### _onClickRight

- _onClickRight(event: any): voidParametersevent: anyReturns voidOverrides PlaceablesLayer._onClickRight
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceablesLayer._onClickRight


### _onClickRight2

- _onClickRight2(event: any): voidHandle double right mouse-click events which originate from the Canvas stage.
Parametersevent: anyThe PIXI InteractionEvent which wraps a PointerEvent
Returns voidOverrides PlaceablesLayer._onClickRight2
- event: anyThe PIXI InteractionEvent which wraps a PointerEvent

Handle double right mouse-click events which originate from the Canvas stage.


#### Parameters

- event: anyThe PIXI InteractionEvent which wraps a PointerEvent

The PIXI InteractionEvent which wraps a PointerEvent


#### Returns void

Overrides PlaceablesLayer._onClickRight2


### _onCopyKey

- _onCopyKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onCopyKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onCopyKey


### _onCutKey

- _onCutKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onCutKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onCutKey


### _onCycleViewKey

- _onCycleViewKey(event: any): booleanParametersevent: anyReturns booleanOverrides PlaceablesLayer._onCycleViewKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides PlaceablesLayer._onCycleViewKey


### _onDeleteKey

- _onDeleteKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onDeleteKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onDeleteKey


### _onDismissKey

- _onDismissKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onDismissKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onDismissKey


### _onDragLeftCancel

- _onDragLeftCancel(event: any): voidParametersevent: anyReturns voidOverrides PlaceablesLayer._onDragLeftCancel
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceablesLayer._onDragLeftCancel


### _onDragLeftDrop

- _onDragLeftDrop(event: any): voidParametersevent: anyReturns voidInherited from PlaceablesLayer._onDragLeftDrop
- event: any


#### Parameters

- event: any


#### Returns void

Inherited from PlaceablesLayer._onDragLeftDrop


### _onDragLeftMove

- _onDragLeftMove(event: any): voidParametersevent: anyReturns voidInherited from PlaceablesLayer._onDragLeftMove
- event: any


#### Parameters

- event: any


#### Returns void

Inherited from PlaceablesLayer._onDragLeftMove


### _onDragLeftStart

- _onDragLeftStart(event: any): voidParametersevent: anyReturns voidInherited from PlaceablesLayer._onDragLeftStart
- event: any


#### Parameters

- event: any


#### Returns void

Inherited from PlaceablesLayer._onDragLeftStart


### _onDropActorData

- _onDropActorData(    event: DragEvent,    data: {        elevation?: number;        type: "Actor";        uuid: string;        x: number;        y: number;    },): Promise<any>InternalHandle dropping of Actor data onto the Scene canvas
Parametersevent: DragEventdata: { elevation?: number; type: "Actor"; uuid: string; x: number; y: number }Returns Promise<any>
- event: DragEvent
- data: { elevation?: number; type: "Actor"; uuid: string; x: number; y: number }

`Internal`Handle dropping of Actor data onto the Scene canvas


#### Parameters

- event: DragEvent
- data: { elevation?: number; type: "Actor"; uuid: string; x: number; y: number }


#### Returns Promise<any>


### _onMouseWheel

- _onMouseWheel(event: any): undefined | Promise<PlaceableObject[]>Parametersevent: anyReturns undefined | Promise<PlaceableObject[]>Overrides PlaceablesLayer._onMouseWheel
- event: any


#### Parameters

- event: any


#### Returns undefined | Promise<PlaceableObject[]>

Overrides PlaceablesLayer._onMouseWheel


### _onPasteKey

- _onPasteKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onPasteKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onPasteKey


### _onSelectAllKey

- _onSelectAllKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onSelectAllKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onSelectAllKey


### _onUndoKey

- _onUndoKey(event: any): booleanParametersevent: anyReturns booleanInherited from PlaceablesLayer._onUndoKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Inherited from PlaceablesLayer._onUndoKey


### _prepareKeyboardMovementUpdates

- _prepareKeyboardMovementUpdates(    objects: any,    dx: any,    dy: any,    dz: any,): ({ _id: any }[] | { movement: {} })[]Parametersobjects: anydx: anydy: anydz: anyReturns ({ _id: any }[] | { movement: {} })[]Overrides PlaceablesLayer._prepareKeyboardMovementUpdates
- objects: any
- dx: any
- dy: any
- dz: any


#### Parameters

- objects: any
- dx: any
- dy: any
- dz: any


#### Returns ({ _id: any }[] | { movement: {} })[]

Overrides PlaceablesLayer._prepareKeyboardMovementUpdates


### _prepareKeyboardRotationUpdates

- _prepareKeyboardRotationUpdates(    objects: PlaceableObject[],    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,): [updates: object[], options?: object]InternalPrepare the updates and update options for rotating the given placeable objects via keyboard.
Parametersobjects: PlaceableObject[]dx: -1 | 0 | 1dy: -1 | 0 | 1dz: -1 | 0 | 1Returns [updates: object[], options?: object]SeePlaceablesLayer#moveMany
Inherited from PlaceablesLayer._prepareKeyboardRotationUpdates
- objects: PlaceableObject[]
- dx: -1 | 0 | 1
- dy: -1 | 0 | 1
- dz: -1 | 0 | 1

`Internal`Prepare the updates and update options for rotating the given placeable objects via keyboard.


#### Parameters

- objects: PlaceableObject[]
- dx: -1 | 0 | 1
- dy: -1 | 0 | 1
- dz: -1 | 0 | 1


#### Returns [updates: object[], options?: object]


#### See

PlaceablesLayer#moveMany

Inherited from PlaceablesLayer._prepareKeyboardRotationUpdates


### _sendToBackOrBringToFront

- _sendToBackOrBringToFront(front: boolean): booleanInternalSend the controlled objects of this layer to the back or bring them to the front.
Parametersfront: booleanBring to front instead of send to back?
Returns booleanReturns true if the layer has sortable object, and false otherwise
Inherited from PlaceablesLayer._sendToBackOrBringToFront
- front: booleanBring to front instead of send to back?

`Internal`Send the controlled objects of this layer to the back or bring them to the front.


#### Parameters

- front: booleanBring to front instead of send to back?

Bring to front instead of send to back?


#### Returns boolean

Returns true if the layer has sortable object, and false otherwise

Inherited from PlaceablesLayer._sendToBackOrBringToFront


### _tearDown

- _tearDown(options: any): Promise<void>The inner _tearDown method which may be customized by each CanvasLayer subclass.
Parametersoptions: anyOptions which configure how the layer is deconstructed
Returns Promise<void>Overrides PlaceablesLayer._tearDown
- options: anyOptions which configure how the layer is deconstructed

The inner _tearDown method which may be customized by each CanvasLayer subclass.


#### Parameters

- options: anyOptions which configure how the layer is deconstructed

Options which configure how the layer is deconstructed


#### Returns Promise<void>

Overrides PlaceablesLayer._tearDown


### _updatePlannedMovements

- _updatePlannedMovements(    user: documents.User,    plannedMovements: null | { [tokenId: string]: null | TokenPlannedMovement },): voidInternalHandle broadcast planned movement update.
Parametersuser: documents.UserThe User the planned movement data belongs to
plannedMovements: null | { [tokenId: string]: null | TokenPlannedMovement }The planned movement data
Returns void
- user: documents.UserThe User the planned movement data belongs to
- plannedMovements: null | { [tokenId: string]: null | TokenPlannedMovement }The planned movement data

`Internal`Handle broadcast planned movement update.


#### Parameters

- user: documents.UserThe User the planned movement data belongs to
- plannedMovements: null | { [tokenId: string]: null | TokenPlannedMovement }The planned movement data

The User the planned movement data belongs to

The planned movement data


#### Returns void


### activate

- activate(options?: { tool?: string }): InteractionLayerActivate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.
ParametersOptionaloptions: { tool?: string } = {}Options which configure layer activation
Optionaltool?: stringA specific tool in the control palette to set as active
Returns InteractionLayerThe layer instance, now activated
Inherited from PlaceablesLayer.activate
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

Inherited from PlaceablesLayer.activate


### clearPreviewContainer

- clearPreviewContainer(): voidClear the contents of the preview container, restoring visibility of original (non-preview) objects.
Returns voidInherited from PlaceablesLayer.clearPreviewContainer

Clear the contents of the preview container, restoring visibility of original (non-preview) objects.


#### Returns void

Inherited from PlaceablesLayer.clearPreviewContainer


### concludeAnimation

- concludeAnimation(): voidImmediately conclude the animation of any/all tokens
Returns void

Immediately conclude the animation of any/all tokens


#### Returns void


### controlAll

- controlAll(options?: object): PlaceableObject[]Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
Parametersoptions: object = {}Options passed to the control method of each object
Returns PlaceableObject[]An array of objects that were controlled
Inherited from PlaceablesLayer.controlAll
- options: object = {}Options passed to the control method of each object

Acquire control over all PlaceableObject instances which are visible and controllable within the layer.


#### Parameters

- options: object = {}Options passed to the control method of each object

Options passed to the control method of each object


#### Returns PlaceableObject[]

An array of objects that were controlled

Inherited from PlaceablesLayer.controlAll


### controllableObjects

- controllableObjects(): Generator<PlaceableObject, any, any>Iterates over placeable objects that are eligible for control/select.
Returns Generator<PlaceableObject, any, any>YieldsA placeable object
Inherited from PlaceablesLayer.controllableObjects

Iterates over placeable objects that are eligible for control/select.


#### Returns Generator<PlaceableObject, any, any>


#### Yields

A placeable object

Inherited from PlaceablesLayer.controllableObjects


### copyObjects

- copyObjects(options?: { cut?: boolean }): readonly PlaceableObject[]Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.
ParametersOptionaloptions: { cut?: boolean } = {}Additional options
Optionalcut?: booleanCut instead of copy?
Returns readonly PlaceableObject[]The Array of copied PlaceableObject instances
Inherited from PlaceablesLayer.copyObjects
- Optionaloptions: { cut?: boolean } = {}Additional options
Optionalcut?: booleanCut instead of copy?
- Optionalcut?: booleanCut instead of copy?

Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.


#### Parameters

- Optionaloptions: { cut?: boolean } = {}Additional options
Optionalcut?: booleanCut instead of copy?
- Optionalcut?: booleanCut instead of copy?

`Optional`Additional options

- Optionalcut?: booleanCut instead of copy?


##### Optionalcut?: boolean

`Optional`Cut instead of copy?


#### Returns readonly PlaceableObject[]

The Array of copied PlaceableObject instances

Inherited from PlaceablesLayer.copyObjects


### createObject

- createObject(document: ClientDocument): PlaceableObjectDraw a single placeable object
Parametersdocument: ClientDocumentThe Document instance used to create the placeable object
Returns PlaceableObjectInherited from PlaceablesLayer.createObject
- document: ClientDocumentThe Document instance used to create the placeable object

Draw a single placeable object


#### Parameters

- document: ClientDocumentThe Document instance used to create the placeable object

The Document instance used to create the placeable object


#### Returns PlaceableObject

Inherited from PlaceablesLayer.createObject


### cycleTokens

- cycleTokens(forwards: boolean, reset: boolean): null | canvas.placeables.TokenCycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
Tokens are currently sorted in order of their TokenID
Parametersforwards: booleanWhich direction to cycle. A truthy value cycles forward, while a false value
cycles backwards.
reset: booleanRestart the cycle order back at the beginning?
Returns null | canvas.placeables.TokenThe Token object which was cycled to, or null
- forwards: booleanWhich direction to cycle. A truthy value cycles forward, while a false value
cycles backwards.
- reset: booleanRestart the cycle order back at the beginning?

Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
Tokens are currently sorted in order of their TokenID


#### Parameters

- forwards: booleanWhich direction to cycle. A truthy value cycles forward, while a false value
cycles backwards.
- reset: booleanRestart the cycle order back at the beginning?

Which direction to cycle. A truthy value cycles forward, while a false value
cycles backwards.

Restart the cycle order back at the beginning?


#### Returns null | canvas.placeables.Token

The Token object which was cycled to, or null


### deactivate

- deactivate(): InteractionLayerDeactivate the InteractionLayer, removing interactivity from its children.
Returns InteractionLayerThe layer instance, now inactive
Inherited from PlaceablesLayer.deactivate

Deactivate the InteractionLayer, removing interactivity from its children.


#### Returns InteractionLayer

The layer instance, now inactive

Inherited from PlaceablesLayer.deactivate


### deleteAll

- deleteAll(): Promise<Document[]>A helper method to prompt for deletion of all PlaceableObject instances within the Scene
Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
Returns Promise<Document[]>An array of Document objects which were deleted by the operation
Inherited from PlaceablesLayer.deleteAll

A helper method to prompt for deletion of all PlaceableObject instances within the Scene
Renders a confirmation dialogue to confirm with the requester that all objects will be deleted


#### Returns Promise<Document[]>

An array of Document objects which were deleted by the operation

Inherited from PlaceablesLayer.deleteAll


### draw

- draw(options?: object): Promise<CanvasLayer>Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.
ParametersOptionaloptions: object = {}Options which configure how the layer is drawn
Returns Promise<CanvasLayer>Inherited from PlaceablesLayer.draw
- Optionaloptions: object = {}Options which configure how the layer is drawn

Draw the canvas layer, rendering its internal components and returning a Promise.
The Promise resolves to the drawn layer once its contents are successfully rendered.


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is drawn

`Optional`Options which configure how the layer is drawn


#### Returns Promise<CanvasLayer>

Inherited from PlaceablesLayer.draw


### get

- get(objectId: string): PlaceableObjectGet a PlaceableObject contained in this layer by its ID.
Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.
ParametersobjectId: stringThe ID of the contained object to retrieve
Returns PlaceableObjectThe object instance, or undefined
Inherited from PlaceablesLayer.get
- objectId: stringThe ID of the contained object to retrieve

Get a PlaceableObject contained in this layer by its ID.
Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.


#### Parameters

- objectId: stringThe ID of the contained object to retrieve

The ID of the contained object to retrieve


#### Returns PlaceableObject

The object instance, or undefined

Inherited from PlaceablesLayer.get


### getDocuments

- getDocuments(): [] | DocumentCollectionObtain an iterable of objects which should be added to this PlaceablesLayer
Returns [] | DocumentCollectionInherited from PlaceablesLayer.getDocuments

Obtain an iterable of objects which should be added to this PlaceablesLayer


#### Returns [] | DocumentCollection

Inherited from PlaceablesLayer.getDocuments


### getMaxSort

- getMaxSort(): numberGet the maximum sort value of all placeables.
Returns numberThe maximum sort value (-Infinity if there are no objects)
Inherited from PlaceablesLayer.getMaxSort

Get the maximum sort value of all placeables.


#### Returns number

The maximum sort value (-Infinity if there are no objects)

Inherited from PlaceablesLayer.getMaxSort


### getSnappedPoint

- getSnappedPoint(point: any): PointParameterspoint: anyReturns PointOverrides PlaceablesLayer.getSnappedPoint
- point: any


#### Parameters

- point: any


#### Returns Point

Overrides PlaceablesLayer.getSnappedPoint


### getZIndex

- getZIndex(): numberGet the zIndex that should be used for ordering this layer vertically relative to others in the same Container.
Returns numberInherited from PlaceablesLayer.getZIndex

Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.


#### Returns number

Inherited from PlaceablesLayer.getZIndex


### moveMany

- moveMany(    options?: {        dx?: 0 | 1 | -1;        dy?: 0 | 1 | -1;        dz?: 0 | 1 | -1;        ids?: string[];        includeLocked?: boolean;        rotate?: boolean;    },): Promise<PlaceableObject[]>Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
This executes a single database operation using Scene#updateEmbeddedDocuments.
Parametersoptions: {    dx?: 0 | 1 | -1;    dy?: 0 | 1 | -1;    dz?: 0 | 1 | -1;    ids?: string[];    includeLocked?: boolean;    rotate?: boolean;} = {}Options which configure how multiple objects are moved
Optionaldx?: 0 | 1 | -1Horizontal movement direction
Optionaldy?: 0 | 1 | -1Vertical movement direction
Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
OptionalincludeLocked?: booleanMove objects whose documents are locked?
Optionalrotate?: booleanRotate the placeable to direction instead of moving
Returns Promise<PlaceableObject[]>An array of objects which were moved during the operation
ThrowsAn error if an explicitly provided id is not valid
Inherited from PlaceablesLayer.moveMany
- options: {    dx?: 0 | 1 | -1;    dy?: 0 | 1 | -1;    dz?: 0 | 1 | -1;    ids?: string[];    includeLocked?: boolean;    rotate?: boolean;} = {}Options which configure how multiple objects are moved
Optionaldx?: 0 | 1 | -1Horizontal movement direction
Optionaldy?: 0 | 1 | -1Vertical movement direction
Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
OptionalincludeLocked?: booleanMove objects whose documents are locked?
Optionalrotate?: booleanRotate the placeable to direction instead of moving
- Optionaldx?: 0 | 1 | -1Horizontal movement direction
- Optionaldy?: 0 | 1 | -1Vertical movement direction
- Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
- Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
- OptionalincludeLocked?: booleanMove objects whose documents are locked?
- Optionalrotate?: booleanRotate the placeable to direction instead of moving

Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
This executes a single database operation using Scene#updateEmbeddedDocuments.


#### Parameters

- options: {    dx?: 0 | 1 | -1;    dy?: 0 | 1 | -1;    dz?: 0 | 1 | -1;    ids?: string[];    includeLocked?: boolean;    rotate?: boolean;} = {}Options which configure how multiple objects are moved
Optionaldx?: 0 | 1 | -1Horizontal movement direction
Optionaldy?: 0 | 1 | -1Vertical movement direction
Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
OptionalincludeLocked?: booleanMove objects whose documents are locked?
Optionalrotate?: booleanRotate the placeable to direction instead of moving
- Optionaldx?: 0 | 1 | -1Horizontal movement direction
- Optionaldy?: 0 | 1 | -1Vertical movement direction
- Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
- Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
- OptionalincludeLocked?: booleanMove objects whose documents are locked?
- Optionalrotate?: booleanRotate the placeable to direction instead of moving

Options which configure how multiple objects are moved

- Optionaldx?: 0 | 1 | -1Horizontal movement direction
- Optionaldy?: 0 | 1 | -1Vertical movement direction
- Optionaldz?: 0 | 1 | -1Movement direction along the z-axis (elevation)
- Optionalids?: string[]An Array of object IDs to target for movement.
The default is the IDs of controlled objects.
- OptionalincludeLocked?: booleanMove objects whose documents are locked?
- Optionalrotate?: booleanRotate the placeable to direction instead of moving


##### Optionaldx?: 0 | 1 | -1

`Optional`Horizontal movement direction


##### Optionaldy?: 0 | 1 | -1

`Optional`Vertical movement direction


##### Optionaldz?: 0 | 1 | -1

`Optional`Movement direction along the z-axis (elevation)


##### Optionalids?: string[]

`Optional`An Array of object IDs to target for movement.
The default is the IDs of controlled objects.


##### OptionalincludeLocked?: boolean

`Optional`Move objects whose documents are locked?


##### Optionalrotate?: boolean

`Optional`Rotate the placeable to direction instead of moving


#### Returns Promise<PlaceableObject[]>

An array of objects which were moved during the operation


#### Throws

An error if an explicitly provided id is not valid

Inherited from PlaceablesLayer.moveMany


### pasteObjects

- pasteObjects(    position: Point,    options?: { hidden?: boolean; snap?: boolean },): Promise<Document[]>Paste currently copied PlaceableObjects back to the layer by creating new copies
Parametersposition: PointThe destination position for the copied data.
Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options which modify the paste operation
Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.
Returns Promise<Document[]>An Array of created Document instances
Inherited from PlaceablesLayer.pasteObjects
- position: PointThe destination position for the copied data.
- Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options which modify the paste operation
Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.
- Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.

Paste currently copied PlaceableObjects back to the layer by creating new copies


#### Parameters

- position: PointThe destination position for the copied data.
- Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options which modify the paste operation
Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.
- Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.

The destination position for the copied data.

`Optional`Options which modify the paste operation

- Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
- Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.


##### Optionalhidden?: boolean

`Optional`Paste data in a hidden state, if applicable. Default is false.


##### Optionalsnap?: boolean

`Optional`Snap the resulting objects to the grid. Default is true.


#### Returns Promise<Document[]>

An Array of created Document instances

Inherited from PlaceablesLayer.pasteObjects


### recalculatePlannedMovementPaths

- recalculatePlannedMovementPaths(): voidRecalculate the planned movement paths of all Tokens for the current User.
Returns void

Recalculate the planned movement paths of all Tokens for the current User.


#### Returns void


### releaseAll

- releaseAll(options?: object): numberRelease all controlled PlaceableObject instance from this layer.
Parametersoptions: object = {}Options passed to the release method of each object
Returns numberThe number of PlaceableObject instances which were released
Inherited from PlaceablesLayer.releaseAll
- options: object = {}Options passed to the release method of each object

Release all controlled PlaceableObject instance from this layer.


#### Parameters

- options: object = {}Options passed to the release method of each object

Options passed to the release method of each object


#### Returns number

The number of PlaceableObject instances which were released

Inherited from PlaceablesLayer.releaseAll


### rotateMany

- rotateMany(    options?: {        angle?: number;        delta?: number;        ids?: any[];        includeLocked?: boolean;        snap?: number;    },): Promise<PlaceableObject[]>Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
This executes a single database operation using Scene#updateEmbeddedDocuments.
Parametersoptions: {    angle?: number;    delta?: number;    ids?: any[];    includeLocked?: boolean;    snap?: number;} = {}Options which configure how multiple objects are rotated
Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
Optionaldelta?: numberAn incremental angle of rotation (in degrees)
Optionalids?: any[]An Array of object IDs to target for rotation
OptionalincludeLocked?: booleanRotate objects whose documents are locked?
Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)
Returns Promise<PlaceableObject[]>An array of objects which were rotated
ThrowsAn error if an explicitly provided id is not valid
Inherited from PlaceablesLayer.rotateMany
- options: {    angle?: number;    delta?: number;    ids?: any[];    includeLocked?: boolean;    snap?: number;} = {}Options which configure how multiple objects are rotated
Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
Optionaldelta?: numberAn incremental angle of rotation (in degrees)
Optionalids?: any[]An Array of object IDs to target for rotation
OptionalincludeLocked?: booleanRotate objects whose documents are locked?
Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)
- Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
- Optionaldelta?: numberAn incremental angle of rotation (in degrees)
- Optionalids?: any[]An Array of object IDs to target for rotation
- OptionalincludeLocked?: booleanRotate objects whose documents are locked?
- Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)

Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
This executes a single database operation using Scene#updateEmbeddedDocuments.


#### Parameters

- options: {    angle?: number;    delta?: number;    ids?: any[];    includeLocked?: boolean;    snap?: number;} = {}Options which configure how multiple objects are rotated
Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
Optionaldelta?: numberAn incremental angle of rotation (in degrees)
Optionalids?: any[]An Array of object IDs to target for rotation
OptionalincludeLocked?: booleanRotate objects whose documents are locked?
Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)
- Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
- Optionaldelta?: numberAn incremental angle of rotation (in degrees)
- Optionalids?: any[]An Array of object IDs to target for rotation
- OptionalincludeLocked?: booleanRotate objects whose documents are locked?
- Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)

Options which configure how multiple objects are rotated

- Optionalangle?: numberA target angle of rotation (in degrees) where zero faces "south"
- Optionaldelta?: numberAn incremental angle of rotation (in degrees)
- Optionalids?: any[]An Array of object IDs to target for rotation
- OptionalincludeLocked?: booleanRotate objects whose documents are locked?
- Optionalsnap?: numberSnap the resulting angle to a multiple of some increment (in degrees)


##### Optionalangle?: number

`Optional`A target angle of rotation (in degrees) where zero faces "south"


##### Optionaldelta?: number

`Optional`An incremental angle of rotation (in degrees)


##### Optionalids?: any[]

`Optional`An Array of object IDs to target for rotation


##### OptionalincludeLocked?: boolean

`Optional`Rotate objects whose documents are locked?


##### Optionalsnap?: number

`Optional`Snap the resulting angle to a multiple of some increment (in degrees)


#### Returns Promise<PlaceableObject[]>

An array of objects which were rotated


#### Throws

An error if an explicitly provided id is not valid

Inherited from PlaceablesLayer.rotateMany


### selectObjects

- selectObjects(    options?: {        controlOptions?: object;        height?: number;        releaseOptions?: object;        width?: number;        x?: number;        y?: number;    },    aoptions?: { releaseOthers?: boolean },): booleanSelect all PlaceableObject instances which fall within a coordinate rectangle.
ParametersOptionaloptions: {    controlOptions?: object;    height?: number;    releaseOptions?: object;    width?: number;    x?: number;    y?: number;} = {}OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
Optionalheight?: numberThe height of the selection rectangle.
OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
Optionalwidth?: numberThe width of the selection rectangle.
Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
Optionaly?: numberThe top-left y-coordinate of the selection rectangle.
Optionalaoptions: { releaseOthers?: boolean } = {}Additional options to configure selection behaviour.
OptionalreleaseOthers?: booleanWhether to release other selected objects.
Returns booleanA boolean for whether the controlled set was changed in the operation.
Inherited from PlaceablesLayer.selectObjects
- Optionaloptions: {    controlOptions?: object;    height?: number;    releaseOptions?: object;    width?: number;    x?: number;    y?: number;} = {}OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
Optionalheight?: numberThe height of the selection rectangle.
OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
Optionalwidth?: numberThe width of the selection rectangle.
Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
Optionaly?: numberThe top-left y-coordinate of the selection rectangle.
- OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
- Optionalheight?: numberThe height of the selection rectangle.
- OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
- Optionalwidth?: numberThe width of the selection rectangle.
- Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
- Optionaly?: numberThe top-left y-coordinate of the selection rectangle.
- Optionalaoptions: { releaseOthers?: boolean } = {}Additional options to configure selection behaviour.
OptionalreleaseOthers?: booleanWhether to release other selected objects.
- OptionalreleaseOthers?: booleanWhether to release other selected objects.

Select all PlaceableObject instances which fall within a coordinate rectangle.


#### Parameters

- Optionaloptions: {    controlOptions?: object;    height?: number;    releaseOptions?: object;    width?: number;    x?: number;    y?: number;} = {}OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
Optionalheight?: numberThe height of the selection rectangle.
OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
Optionalwidth?: numberThe width of the selection rectangle.
Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
Optionaly?: numberThe top-left y-coordinate of the selection rectangle.
- OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
- Optionalheight?: numberThe height of the selection rectangle.
- OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
- Optionalwidth?: numberThe width of the selection rectangle.
- Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
- Optionaly?: numberThe top-left y-coordinate of the selection rectangle.
- Optionalaoptions: { releaseOthers?: boolean } = {}Additional options to configure selection behaviour.
OptionalreleaseOthers?: booleanWhether to release other selected objects.
- OptionalreleaseOthers?: booleanWhether to release other selected objects.

`Optional`- OptionalcontrolOptions?: objectOptional arguments provided to any called control() method.
- Optionalheight?: numberThe height of the selection rectangle.
- OptionalreleaseOptions?: objectOptional arguments provided to any called release() method.
- Optionalwidth?: numberThe width of the selection rectangle.
- Optionalx?: numberThe top-left x-coordinate of the selection rectangle.
- Optionaly?: numberThe top-left y-coordinate of the selection rectangle.


##### OptionalcontrolOptions?: object

`Optional`Optional arguments provided to any called control() method.


##### Optionalheight?: number

`Optional`The height of the selection rectangle.


##### OptionalreleaseOptions?: object

`Optional`Optional arguments provided to any called release() method.


##### Optionalwidth?: number

`Optional`The width of the selection rectangle.


##### Optionalx?: number

`Optional`The top-left x-coordinate of the selection rectangle.


##### Optionaly?: number

`Optional`The top-left y-coordinate of the selection rectangle.

`Optional`Additional options to configure selection behaviour.

- OptionalreleaseOthers?: booleanWhether to release other selected objects.


##### OptionalreleaseOthers?: boolean

`Optional`Whether to release other selected objects.


#### Returns boolean

A boolean for whether the controlled set was changed in the operation.

Inherited from PlaceablesLayer.selectObjects


### setAllRenderFlags

- setAllRenderFlags(flags: Record<string, boolean>): voidAssign a set of render flags to all placeables in this layer.
Parametersflags: Record<string, boolean>The flags to set
Returns voidInherited from PlaceablesLayer.setAllRenderFlags
- flags: Record<string, boolean>The flags to set

Assign a set of render flags to all placeables in this layer.


#### Parameters

- flags: Record<string, boolean>The flags to set

The flags to set


#### Returns void

Inherited from PlaceablesLayer.setAllRenderFlags


### setTargets

- setTargets(    targetIds: string[] | Set<string>,    options?: { mode?: "replace" | "acquire" | "release" },): voidAssign multiple token targets
ParameterstargetIds: string[] | Set<string>The array or set of Token IDs.
Optionaloptions: { mode?: "replace" | "acquire" | "release" } = {}Additional options to configure targeting behaviour.
Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.

Returns void
- targetIds: string[] | Set<string>The array or set of Token IDs.
- Optionaloptions: { mode?: "replace" | "acquire" | "release" } = {}Additional options to configure targeting behaviour.
Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.
- Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.
- "replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
- "acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
- "release": Release the given Tokens as targets.

Assign multiple token targets


#### Parameters

- targetIds: string[] | Set<string>The array or set of Token IDs.
- Optionaloptions: { mode?: "replace" | "acquire" | "release" } = {}Additional options to configure targeting behaviour.
Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.
- Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.
- "replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
- "acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
- "release": Release the given Tokens as targets.

The array or set of Token IDs.

`Optional`Additional options to configure targeting behaviour.

- Optionalmode?: "replace" | "acquire" | "release"The mode that determines the targeting behavior.

"replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
"acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
"release": Release the given Tokens as targets.
- "replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
- "acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
- "release": Release the given Tokens as targets.


##### Optionalmode?: "replace" | "acquire" | "release"

`Optional`The mode that determines the targeting behavior.

- "replace" (default): Replace the current set of targeted Tokens with provided set of Tokens.
- "acquire": Acquire the given Tokens as targets without releasing already targeted Tokens.
- "release": Release the given Tokens as targets.

`"replace"``"acquire"``"release"`
#### Returns void


### storeHistory

- storeHistory(type: any, data: any, options: any): voidParameterstype: anydata: anyoptions: anyReturns voidOverrides PlaceablesLayer.storeHistory
- type: any
- data: any
- options: any


#### Parameters

- type: any
- data: any
- options: any


#### Returns void

Overrides PlaceablesLayer.storeHistory


### targetObjects

- targetObjects(rectangle: Rectangle, options?: { releaseOthers?: boolean }): voidTarget all Token instances which fall within a coordinate rectangle.
Parametersrectangle: RectangleThe selection rectangle.
Optionaloptions: { releaseOthers?: boolean } = {}Additional options to configure targeting behaviour.
OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens
Returns void
- rectangle: RectangleThe selection rectangle.
- Optionaloptions: { releaseOthers?: boolean } = {}Additional options to configure targeting behaviour.
OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens
- OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens

Target all Token instances which fall within a coordinate rectangle.


#### Parameters

- rectangle: RectangleThe selection rectangle.
- Optionaloptions: { releaseOthers?: boolean } = {}Additional options to configure targeting behaviour.
OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens
- OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens

The selection rectangle.

`Optional`Additional options to configure targeting behaviour.

- OptionalreleaseOthers?: booleanWhether or not to release other targeted tokens


##### OptionalreleaseOthers?: boolean

`Optional`Whether or not to release other targeted tokens


#### Returns void


### tearDown

- tearDown(options?: object): Promise<CanvasLayer>Deconstruct data used in the current layer in preparation to re-draw the canvas
ParametersOptionaloptions: object = {}Options which configure how the layer is deconstructed
Returns Promise<CanvasLayer>Inherited from PlaceablesLayer.tearDown
- Optionaloptions: object = {}Options which configure how the layer is deconstructed

Deconstruct data used in the current layer in preparation to re-draw the canvas


#### Parameters

- Optionaloptions: object = {}Options which configure how the layer is deconstructed

`Optional`Options which configure how the layer is deconstructed


#### Returns Promise<CanvasLayer>

Inherited from PlaceablesLayer.tearDown


### undoHistory

- undoHistory(): Promise<Document[]>Undo a change to the objects in this layer
This method is typically activated using CTRL+Z while the layer is active
Returns Promise<Document[]>An array of documents which were modified by the undo operation
Inherited from PlaceablesLayer.undoHistory

Undo a change to the objects in this layer
This method is typically activated using CTRL+Z while the layer is active


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation

Inherited from PlaceablesLayer.undoHistory


### updateAll

- updateAll(    transformation: object | Function,    condition?: null | Function,    options?: object,): Promise<Document[]>Update all objects in this layer with a provided transformation.
Conditionally filter to only apply to objects which match a certain condition.
Parameterstransformation: object | FunctionAn object of data or function to apply to all matched objects
condition: null | Function = nullA function which tests whether to target each object
Optionaloptions: object = {}Additional options passed to Document.update
Returns Promise<Document[]>An array of updated data once the operation is complete
Inherited from PlaceablesLayer.updateAll
- transformation: object | FunctionAn object of data or function to apply to all matched objects
- condition: null | Function = nullA function which tests whether to target each object
- Optionaloptions: object = {}Additional options passed to Document.update

Update all objects in this layer with a provided transformation.
Conditionally filter to only apply to objects which match a certain condition.


#### Parameters

- transformation: object | FunctionAn object of data or function to apply to all matched objects
- condition: null | Function = nullA function which tests whether to target each object
- Optionaloptions: object = {}Additional options passed to Document.update

An object of data or function to apply to all matched objects

A function which tests whether to target each object

`Optional`Additional options passed to Document.update


#### Returns Promise<Document[]>

An array of updated data once the operation is complete

Inherited from PlaceablesLayer.updateAll


### Protected_canvasCoordinatesFromDrop

`Protected`- _canvasCoordinatesFromDrop(    event: DragEvent,    options?: { center?: boolean },): boolean | number[]ProtectedGet the world-transformed drop position.
Parametersevent: DragEventOptionaloptions: { center?: boolean } = {}Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.
Returns boolean | number[]Returns the transformed x, y coordinates, or false if the drag event was outside
the canvas.
Inherited from PlaceablesLayer._canvasCoordinatesFromDrop
- event: DragEvent
- Optionaloptions: { center?: boolean } = {}Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.
- Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.

`Protected`Get the world-transformed drop position.


#### Parameters

- event: DragEvent
- Optionaloptions: { center?: boolean } = {}Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.
- Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.

`Optional`- Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.


##### Optionalcenter?: boolean

`Optional`Return the coordinates of the center of the nearest grid element.


#### Returns boolean | number[]

Returns the transformed x, y coordinates, or false if the drag event was outside
the canvas.

Inherited from PlaceablesLayer._canvasCoordinatesFromDrop


### Protected_getOccludableTokens

`Protected`- _getOccludableTokens(): canvas.placeables.Token[]ProtectedProvide an array of Tokens which are eligible subjects for tile occlusion.
By default, only tokens which are currently controlled or owned by a player are included as subjects.
Returns canvas.placeables.Token[]

`Protected`Provide an array of Tokens which are eligible subjects for tile occlusion.
By default, only tokens which are currently controlled or owned by a player are included as subjects.


#### Returns canvas.placeables.Token[]


### Protected_onUndoCreate

`Protected`- _onUndoCreate(event: Event): Promise<Document[]>ProtectedUndo creation with deletion workflow
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
Inherited from PlaceablesLayer._onUndoCreate
- event: Event

`Protected`Undo creation with deletion workflow


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation

Inherited from PlaceablesLayer._onUndoCreate


### Protected_onUndoDelete

`Protected`- _onUndoDelete(event: Event): Promise<Document[]>ProtectedUndo deletion with creation workflow.
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
Inherited from PlaceablesLayer._onUndoDelete
- event: Event

`Protected`Undo deletion with creation workflow.


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation

Inherited from PlaceablesLayer._onUndoDelete


### Protected_onUndoUpdate

`Protected`- _onUndoUpdate(event: Event): Promise<Document[]>ProtectedUndo updates with update workflow.
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
Inherited from PlaceablesLayer._onUndoUpdate
- event: Event

`Protected`Undo updates with update workflow.


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation

Inherited from PlaceablesLayer._onUndoUpdate


### Protected_storeHistory

`Protected`- _storeHistory(    type: "update" | "delete" | "create",    data: object[],    options?: object,): voidProtectedRecord a new CRUD event in the history log so that it can be undone later.
Updates without changes are filtered out unless the diff option is set to false.
This function may not be overridden.
Parameterstype: "update" | "delete" | "create"The event type
data: object[]The create/update/delete data
Optionaloptions: object = {}The options of the undo operation
Returns voidInherited from PlaceablesLayer._storeHistory
- type: "update" | "delete" | "create"The event type
- data: object[]The create/update/delete data
- Optionaloptions: object = {}The options of the undo operation

`Protected`Record a new CRUD event in the history log so that it can be undone later.
Updates without changes are filtered out unless the diff option is set to false.
This function may not be overridden.

`diff`
#### Parameters

- type: "update" | "delete" | "create"The event type
- data: object[]The create/update/delete data
- Optionaloptions: object = {}The options of the undo operation

The event type

The create/update/delete data

`Optional`The options of the undo operation


#### Returns void

Inherited from PlaceablesLayer._storeHistory


### StaticprepareSceneControls

`Static`- prepareSceneControls(): {    activeTool: string;    icon: string;    name: string;    onChange: (event: any, active: any) => void;    onToolChange: () => any;    order: number;    title: string;    tools: {        ruler: {            icon: string;            name: string;            order: number;            title: string;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };        };        select: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        target: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        unconstrainedMovement: {            active: boolean;            icon: string;            name: string;            order: number;            title: string;            toggle: boolean;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };            visible: boolean;        };    };}Returns {    activeTool: string;    icon: string;    name: string;    onChange: (event: any, active: any) => void;    onToolChange: () => any;    order: number;    title: string;    tools: {        ruler: {            icon: string;            name: string;            order: number;            title: string;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };        };        select: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        target: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        unconstrainedMovement: {            active: boolean;            icon: string;            name: string;            order: number;            title: string;            toggle: boolean;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };            visible: boolean;        };    };}Overrides PlaceablesLayer.prepareSceneControls


#### Returns {    activeTool: string;    icon: string;    name: string;    onChange: (event: any, active: any) => void;    onToolChange: () => any;    order: number;    title: string;    tools: {        ruler: {            icon: string;            name: string;            order: number;            title: string;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };        };        select: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        target: {            icon: string;            name: string;            order: number;            title: string;            toolclip: {                heading: string;                items: ToolclipConfigurationItem[];                src: string;            };        };        unconstrainedMovement: {            active: boolean;            icon: string;            name: string;            order: number;            title: string;            toggle: boolean;            toolclip: { heading: string; items: ToolclipConfigurationItem[] };            visible: boolean;        };    };}

Overrides PlaceablesLayer.prepareSceneControls


### Settings

- Protected
- Inherited
- Internal


### On This Page

