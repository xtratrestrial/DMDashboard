# PlaceablesLayer | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.layers.PlaceablesLayer.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- layers
- PlaceablesLayer


# Class PlaceablesLayer

A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances,
each corresponding to an embedded Document.


#### Hierarchy (View Summary)

- InteractionLayerPlaceablesLayerDrawingsLayerLightingLayerNotesLayerWallsLayerTokenLayerRegionLayerSoundsLayerTemplateLayerTilesLayer
- PlaceablesLayerDrawingsLayerLightingLayerNotesLayerWallsLayerTokenLayerRegionLayerSoundsLayerTemplateLayerTilesLayer
- DrawingsLayer
- LightingLayer
- NotesLayer
- WallsLayer
- TokenLayer
- RegionLayer
- SoundsLayer
- TemplateLayer
- TilesLayer

- PlaceablesLayerDrawingsLayerLightingLayerNotesLayerWallsLayerTokenLayerRegionLayerSoundsLayerTemplateLayerTilesLayer
- DrawingsLayer
- LightingLayer
- NotesLayer
- WallsLayer
- TokenLayer
- RegionLayer
- SoundsLayer
- TemplateLayer
- TilesLayer

- DrawingsLayer
- LightingLayer
- NotesLayer
- WallsLayer
- TokenLayer
- RegionLayer
- SoundsLayer
- TemplateLayer
- TilesLayer


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_configPreview

`Internal`Preview container for config previews


### clipboard

Keep track of objects copied with CTRL+C/X which can be pasted later.


### eventMode

Inherited from InteractionLayer.eventMode


### highlightObjects

Track whether "highlight all objects" is currently active


### history

Keep track of history so that CTRL+Z can undo changes.


### interactiveChildren

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from InteractionLayer.interactiveChildren


### objects

Placeable Layer Objects


### options

Options for this layer instance.

Inherited from InteractionLayer.options


### preview

Preview Object Placement


### quadtree

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.


### StaticCREATION_STATES

`Static`Creation states affected to placeables during their construction.


### StaticdocumentName

`Static`A reference to the named Document type which is contained within this Canvas Layer.


### StaticSORT_ORDER

`Static`Sort order for placeables belonging to this layer.


## Accessors


### active

- get active(): booleanIs this layer currently active
Returns booleanInherited from InteractionLayer.active

Is this layer currently active


#### Returns boolean

Inherited from InteractionLayer.active


### controlled

- get controlled(): PlaceableObject[]An Array of placeable objects in this layer which have the _controlled attribute
Returns PlaceableObject[]

An Array of placeable objects in this layer which have the _controlled attribute


#### Returns PlaceableObject[]


### controlledObjects

- get controlledObjects(): Map<string, PlaceableObject>Track the set of PlaceableObjects on this layer which are currently controlled.
Returns Map<string, PlaceableObject>

Track the set of PlaceableObjects on this layer which are currently controlled.


#### Returns Map<string, PlaceableObject>


### documentCollection

- get documentCollection(): null | DocumentCollectionObtain a reference to the Collection of embedded Document instances within the currently viewed Scene
Returns null | DocumentCollection

Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene


#### Returns null | DocumentCollection


### hasPreview

- get hasPreview(): booleanTo know wheter this layer has a preview object or not.
Returns boolean

To know wheter this layer has a preview object or not.


#### Returns boolean


### hookName

- get hookName(): stringThe name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.
Returns stringInherited from InteractionLayer.hookName

The name used by hooks to construct their hook string.
Note: You should override this getter if hookName should not return the class constructor name.


#### Returns string

Inherited from InteractionLayer.hookName


### hover

- get hover(): null | PlaceableObjectTrack the PlaceableObject on this layer which is currently hovered upon.
Returns null | PlaceableObject

Track the PlaceableObject on this layer which is currently hovered upon.


#### Returns null | PlaceableObject


### hud

- get hud(): null | BasePlaceableHUD<any, any, any>If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance
Returns null | BasePlaceableHUD<any, any, any>

If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance


#### Returns null | BasePlaceableHUD<any, any, any>


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


### placeables

- get placeables(): PlaceableObject[]A convenience method for accessing the placeable object instances contained in this layer
Returns PlaceableObject[]

A convenience method for accessing the placeable object instances contained in this layer


#### Returns PlaceableObject[]


### Staticinstance

`Static`- get instance(): CanvasLayerReturn a reference to the active instance of this canvas layer
Returns CanvasLayerInherited from InteractionLayer.instance

Return a reference to the active instance of this canvas layer


#### Returns CanvasLayer

Inherited from InteractionLayer.instance


### StaticlayerOptions

`Static`- get layerOptions(): PlaceablesLayerOptionsConfiguration options for the PlaceablesLayer.
Returns PlaceablesLayerOptionsOverrides InteractionLayer.layerOptions

Configuration options for the PlaceablesLayer.


#### Returns PlaceablesLayerOptions

Overrides InteractionLayer.layerOptions


### StaticplaceableClass

`Static`- get placeableClass(): typeof PlaceableObjectObtain a reference to the PlaceableObject class definition which represents the Document type in this layer.
Returns typeof PlaceableObject

Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.


#### Returns typeof PlaceableObject


## Methods


### _activate

- _activate(): voidReturns voidOverrides InteractionLayer._activate


#### Returns void

Overrides InteractionLayer._activate


### _canDragLeftStart

- _canDragLeftStart(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides InteractionLayer._canDragLeftStart
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides InteractionLayer._canDragLeftStart


### _createPreview

- _createPreview(    createData: object,    options?: { left?: number; renderSheet?: boolean; top?: number },): PlaceableObjectInternalCreate a preview of this layer's object type from a world document and show its sheet to be finalized.
ParameterscreateData: objectThe data to create the object with.
Optionaloptions: { left?: number; renderSheet?: boolean; top?: number } = {}Options which configure preview creation
Optionalleft?: numberThe offset-left position where the sheet should be rendered
OptionalrenderSheet?: booleanRender the preview object config sheet?
Optionaltop?: numberThe offset-top position where the sheet should be rendered
Returns PlaceableObjectThe created preview object
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


### _getCopyableObjects

- _getCopyableObjects(options: { cut: boolean }): PlaceableObject[]InternalAn internal helper method to identify the array of PlaceableObjects which can be copied/cut.
Parametersoptions: { cut: boolean }Additional options
cut: booleanCut instead of copy?
Returns PlaceableObject[]An array of objects which can be copied/cut
- options: { cut: boolean }Additional options
cut: booleanCut instead of copy?
- cut: booleanCut instead of copy?

`Internal`An internal helper method to identify the array of PlaceableObjects which can be copied/cut.


#### Parameters

- options: { cut: boolean }Additional options
cut: booleanCut instead of copy?
- cut: booleanCut instead of copy?

Additional options

- cut: booleanCut instead of copy?


##### cut: boolean

Cut instead of copy?


#### Returns PlaceableObject[]

An array of objects which can be copied/cut


### _getMovableObjects

- _getMovableObjects(    ids: undefined | string[],    includeLocked: boolean,): PlaceableObject[]InternalAn internal helper method to identify the array of PlaceableObjects which can be moved or rotated.
Parametersids: undefined | string[]An explicit array of IDs requested.
includeLocked: booleanInclude locked objects which would otherwise be ignored?
Returns PlaceableObject[]An array of objects which can be moved or rotated
ThrowsIf any explicitly requested ID is not valid
- ids: undefined | string[]An explicit array of IDs requested.
- includeLocked: booleanInclude locked objects which would otherwise be ignored?

`Internal`An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.


#### Parameters

- ids: undefined | string[]An explicit array of IDs requested.
- includeLocked: booleanInclude locked objects which would otherwise be ignored?

An explicit array of IDs requested.

Include locked objects which would otherwise be ignored?


#### Returns PlaceableObject[]

An array of objects which can be moved or rotated


#### Throws

If any explicitly requested ID is not valid


### _highlightObjects

- _highlightObjects(active: any): voidParametersactive: anyReturns voidOverrides InteractionLayer._highlightObjects
- active: any


#### Parameters

- active: any


#### Returns void

Overrides InteractionLayer._highlightObjects


### _onClickLeft

- _onClickLeft(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onClickLeft
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onClickLeft


### _onClickRight

- _onClickRight(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onClickRight
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onClickRight


### _onCopyKey

- _onCopyKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onCopyKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onCopyKey


### _onCutKey

- _onCutKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onCutKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onCutKey


### _onDeleteKey

- _onDeleteKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onDeleteKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onDeleteKey


### _onDismissKey

- _onDismissKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onDismissKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onDismissKey


### _onDragLeftCancel

- _onDragLeftCancel(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onDragLeftCancel
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onDragLeftCancel


### _onDragLeftDrop

- _onDragLeftDrop(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onDragLeftDrop
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onDragLeftDrop


### _onDragLeftMove

- _onDragLeftMove(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onDragLeftMove
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onDragLeftMove


### _onDragLeftStart

- _onDragLeftStart(event: any): voidParametersevent: anyReturns voidOverrides InteractionLayer._onDragLeftStart
- event: any


#### Parameters

- event: any


#### Returns void

Overrides InteractionLayer._onDragLeftStart


### _onMouseWheel

- _onMouseWheel(event: any): undefined | Promise<PlaceableObject[]>Parametersevent: anyReturns undefined | Promise<PlaceableObject[]>Overrides InteractionLayer._onMouseWheel
- event: any


#### Parameters

- event: any


#### Returns undefined | Promise<PlaceableObject[]>

Overrides InteractionLayer._onMouseWheel


### _onPasteKey

- _onPasteKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onPasteKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onPasteKey


### _onSelectAllKey

- _onSelectAllKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onSelectAllKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onSelectAllKey


### _onUndoKey

- _onUndoKey(event: any): booleanParametersevent: anyReturns booleanOverrides InteractionLayer._onUndoKey
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides InteractionLayer._onUndoKey


### _prepareKeyboardMovementUpdates

- _prepareKeyboardMovementUpdates(    objects: PlaceableObject[],    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,): [updates: object[], options?: object]InternalPrepare the updates and update options for moving the given placeable objects via keyboard.
Parametersobjects: PlaceableObject[]dx: -1 | 0 | 1dy: -1 | 0 | 1dz: -1 | 0 | 1Returns [updates: object[], options?: object]SeePlaceablesLayer#moveMany
- objects: PlaceableObject[]
- dx: -1 | 0 | 1
- dy: -1 | 0 | 1
- dz: -1 | 0 | 1

`Internal`Prepare the updates and update options for moving the given placeable objects via keyboard.


#### Parameters

- objects: PlaceableObject[]
- dx: -1 | 0 | 1
- dy: -1 | 0 | 1
- dz: -1 | 0 | 1


#### Returns [updates: object[], options?: object]


#### See

PlaceablesLayer#moveMany


### _prepareKeyboardRotationUpdates

- _prepareKeyboardRotationUpdates(    objects: PlaceableObject[],    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,): [updates: object[], options?: object]InternalPrepare the updates and update options for rotating the given placeable objects via keyboard.
Parametersobjects: PlaceableObject[]dx: -1 | 0 | 1dy: -1 | 0 | 1dz: -1 | 0 | 1Returns [updates: object[], options?: object]SeePlaceablesLayer#moveMany
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


### _sendToBackOrBringToFront

- _sendToBackOrBringToFront(front: boolean): booleanInternalSend the controlled objects of this layer to the back or bring them to the front.
Parametersfront: booleanBring to front instead of send to back?
Returns booleanReturns true if the layer has sortable object, and false otherwise
- front: booleanBring to front instead of send to back?

`Internal`Send the controlled objects of this layer to the back or bring them to the front.


#### Parameters

- front: booleanBring to front instead of send to back?

Bring to front instead of send to back?


#### Returns boolean

Returns true if the layer has sortable object, and false otherwise


### _tearDown

- _tearDown(options: any): Promise<void>The inner _tearDown method which may be customized by each CanvasLayer subclass.
Parametersoptions: anyOptions which configure how the layer is deconstructed
Returns Promise<void>Overrides InteractionLayer._tearDown
- options: anyOptions which configure how the layer is deconstructed

The inner _tearDown method which may be customized by each CanvasLayer subclass.


#### Parameters

- options: anyOptions which configure how the layer is deconstructed

Options which configure how the layer is deconstructed


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


### clearPreviewContainer

- clearPreviewContainer(): voidClear the contents of the preview container, restoring visibility of original (non-preview) objects.
Returns void

Clear the contents of the preview container, restoring visibility of original (non-preview) objects.


#### Returns void


### controlAll

- controlAll(options?: object): PlaceableObject[]Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
Parametersoptions: object = {}Options passed to the control method of each object
Returns PlaceableObject[]An array of objects that were controlled
- options: object = {}Options passed to the control method of each object

Acquire control over all PlaceableObject instances which are visible and controllable within the layer.


#### Parameters

- options: object = {}Options passed to the control method of each object

Options passed to the control method of each object


#### Returns PlaceableObject[]

An array of objects that were controlled


### controllableObjects

- controllableObjects(): Generator<PlaceableObject, any, any>Iterates over placeable objects that are eligible for control/select.
Returns Generator<PlaceableObject, any, any>YieldsA placeable object

Iterates over placeable objects that are eligible for control/select.


#### Returns Generator<PlaceableObject, any, any>


#### Yields

A placeable object


### copyObjects

- copyObjects(options?: { cut?: boolean }): readonly PlaceableObject[]Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.
ParametersOptionaloptions: { cut?: boolean } = {}Additional options
Optionalcut?: booleanCut instead of copy?
Returns readonly PlaceableObject[]The Array of copied PlaceableObject instances
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


### createObject

- createObject(document: ClientDocument): PlaceableObjectDraw a single placeable object
Parametersdocument: ClientDocumentThe Document instance used to create the placeable object
Returns PlaceableObject
- document: ClientDocumentThe Document instance used to create the placeable object

Draw a single placeable object


#### Parameters

- document: ClientDocumentThe Document instance used to create the placeable object

The Document instance used to create the placeable object


#### Returns PlaceableObject


### deactivate

- deactivate(): InteractionLayerDeactivate the InteractionLayer, removing interactivity from its children.
Returns InteractionLayerThe layer instance, now inactive
Inherited from InteractionLayer.deactivate

Deactivate the InteractionLayer, removing interactivity from its children.


#### Returns InteractionLayer

The layer instance, now inactive

Inherited from InteractionLayer.deactivate


### deleteAll

- deleteAll(): Promise<Document[]>A helper method to prompt for deletion of all PlaceableObject instances within the Scene
Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
Returns Promise<Document[]>An array of Document objects which were deleted by the operation

A helper method to prompt for deletion of all PlaceableObject instances within the Scene
Renders a confirmation dialogue to confirm with the requester that all objects will be deleted


#### Returns Promise<Document[]>

An array of Document objects which were deleted by the operation


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


### get

- get(objectId: string): PlaceableObjectGet a PlaceableObject contained in this layer by its ID.
Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.
ParametersobjectId: stringThe ID of the contained object to retrieve
Returns PlaceableObjectThe object instance, or undefined
- objectId: stringThe ID of the contained object to retrieve

Get a PlaceableObject contained in this layer by its ID.
Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.


#### Parameters

- objectId: stringThe ID of the contained object to retrieve

The ID of the contained object to retrieve


#### Returns PlaceableObject

The object instance, or undefined


### getDocuments

- getDocuments(): [] | DocumentCollectionObtain an iterable of objects which should be added to this PlaceablesLayer
Returns [] | DocumentCollection

Obtain an iterable of objects which should be added to this PlaceablesLayer


#### Returns [] | DocumentCollection


### getMaxSort

- getMaxSort(): numberGet the maximum sort value of all placeables.
Returns numberThe maximum sort value (-Infinity if there are no objects)

Get the maximum sort value of all placeables.


#### Returns number

The maximum sort value (-Infinity if there are no objects)


### getSnappedPoint

- getSnappedPoint(point: Point): PointSnaps the given point to grid. The layer defines the snapping behavior.
Parameterspoint: PointThe point that is to be snapped
Returns PointThe snapped point
- point: PointThe point that is to be snapped

Snaps the given point to grid. The layer defines the snapping behavior.


#### Parameters

- point: PointThe point that is to be snapped

The point that is to be snapped


#### Returns Point

The snapped point


### getZIndex

- getZIndex(): numberGet the zIndex that should be used for ordering this layer vertically relative to others in the same Container.
Returns numberInherited from InteractionLayer.getZIndex

Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.


#### Returns number

Inherited from InteractionLayer.getZIndex


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


### pasteObjects

- pasteObjects(    position: Point,    options?: { hidden?: boolean; snap?: boolean },): Promise<Document[]>Paste currently copied PlaceableObjects back to the layer by creating new copies
Parametersposition: PointThe destination position for the copied data.
Optionaloptions: { hidden?: boolean; snap?: boolean } = {}Options which modify the paste operation
Optionalhidden?: booleanPaste data in a hidden state, if applicable. Default is false.
Optionalsnap?: booleanSnap the resulting objects to the grid. Default is true.
Returns Promise<Document[]>An Array of created Document instances
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


### releaseAll

- releaseAll(options?: object): numberRelease all controlled PlaceableObject instance from this layer.
Parametersoptions: object = {}Options passed to the release method of each object
Returns numberThe number of PlaceableObject instances which were released
- options: object = {}Options passed to the release method of each object

Release all controlled PlaceableObject instance from this layer.


#### Parameters

- options: object = {}Options passed to the release method of each object

Options passed to the release method of each object


#### Returns number

The number of PlaceableObject instances which were released


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


### setAllRenderFlags

- setAllRenderFlags(flags: Record<string, boolean>): voidAssign a set of render flags to all placeables in this layer.
Parametersflags: Record<string, boolean>The flags to set
Returns void
- flags: Record<string, boolean>The flags to set

Assign a set of render flags to all placeables in this layer.


#### Parameters

- flags: Record<string, boolean>The flags to set

The flags to set


#### Returns void


### storeHistory

- storeHistory(    type: "update" | "delete" | "create",    data: object[],    options?: object,): voidRecord a new CRUD event in the history log so that it can be undone later.
The base implemenation calls PlaceablesLayer#_storeHistory without
passing the given options. Subclasses may override this function and can call
PlaceablesLayer#_storeHistory themselves to pass options as needed.
Parameterstype: "update" | "delete" | "create"The event type
data: object[]The create/update/delete data
Optionaloptions: objectThe create/update/delete options
Returns void
- type: "update" | "delete" | "create"The event type
- data: object[]The create/update/delete data
- Optionaloptions: objectThe create/update/delete options

Record a new CRUD event in the history log so that it can be undone later.
The base implemenation calls PlaceablesLayer#_storeHistory without
passing the given options. Subclasses may override this function and can call
PlaceablesLayer#_storeHistory themselves to pass options as needed.


#### Parameters

- type: "update" | "delete" | "create"The event type
- data: object[]The create/update/delete data
- Optionaloptions: objectThe create/update/delete options

The event type

The create/update/delete data

`Optional`The create/update/delete options


#### Returns void


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


### undoHistory

- undoHistory(): Promise<Document[]>Undo a change to the objects in this layer
This method is typically activated using CTRL+Z while the layer is active
Returns Promise<Document[]>An array of documents which were modified by the undo operation

Undo a change to the objects in this layer
This method is typically activated using CTRL+Z while the layer is active


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation


### updateAll

- updateAll(    transformation: object | Function,    condition?: null | Function,    options?: object,): Promise<Document[]>Update all objects in this layer with a provided transformation.
Conditionally filter to only apply to objects which match a certain condition.
Parameterstransformation: object | FunctionAn object of data or function to apply to all matched objects
condition: null | Function = nullA function which tests whether to target each object
Optionaloptions: object = {}Additional options passed to Document.update
Returns Promise<Document[]>An array of updated data once the operation is complete
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


### Protected_canvasCoordinatesFromDrop

`Protected`- _canvasCoordinatesFromDrop(    event: DragEvent,    options?: { center?: boolean },): boolean | number[]ProtectedGet the world-transformed drop position.
Parametersevent: DragEventOptionaloptions: { center?: boolean } = {}Optionalcenter?: booleanReturn the coordinates of the center of the nearest grid element.
Returns boolean | number[]Returns the transformed x, y coordinates, or false if the drag event was outside
the canvas.
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


### Protected_confirmDeleteKey

`Protected`- _confirmDeleteKey(documents: Document): Promise<boolean>ProtectedConfirm deletion via the delete key.
Called only if foundry.canvas.layers.types.PlaceablesLayerOptions#confirmDeleteKey is true.
Parametersdocuments: DocumentThe documents that will be deleted on confirmation.
Returns Promise<boolean>True if the deletion is confirmed to proceed.
- documents: DocumentThe documents that will be deleted on confirmation.

`Protected`Confirm deletion via the delete key.
Called only if foundry.canvas.layers.types.PlaceablesLayerOptions#confirmDeleteKey is true.


#### Parameters

- documents: DocumentThe documents that will be deleted on confirmation.

The documents that will be deleted on confirmation.


#### Returns Promise<boolean>

True if the deletion is confirmed to proceed.


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


### Protected_onUndoCreate

`Protected`- _onUndoCreate(event: Event): Promise<Document[]>ProtectedUndo creation with deletion workflow
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
- event: Event

`Protected`Undo creation with deletion workflow


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation


### Protected_onUndoDelete

`Protected`- _onUndoDelete(event: Event): Promise<Document[]>ProtectedUndo deletion with creation workflow.
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
- event: Event

`Protected`Undo deletion with creation workflow.


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation


### Protected_onUndoUpdate

`Protected`- _onUndoUpdate(event: Event): Promise<Document[]>ProtectedUndo updates with update workflow.
Parametersevent: EventReturns Promise<Document[]>An array of documents which were modified by the undo operation
- event: Event

`Protected`Undo updates with update workflow.


#### Parameters

- event: Event


#### Returns Promise<Document[]>

An array of documents which were modified by the undo operation


### Protected_storeHistory

`Protected`- _storeHistory(    type: "update" | "delete" | "create",    data: object[],    options?: object,): voidProtectedRecord a new CRUD event in the history log so that it can be undone later.
Updates without changes are filtered out unless the diff option is set to false.
This function may not be overridden.
Parameterstype: "update" | "delete" | "create"The event type
data: object[]The create/update/delete data
Optionaloptions: object = {}The options of the undo operation
Returns void
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

