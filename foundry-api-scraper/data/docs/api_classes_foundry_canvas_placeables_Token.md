# Token | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.placeables.Token.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- placeables
- Token


# Class Token

A Token is an implementation of PlaceableObject which represents an foundry.documents.Actor within a viewed
Scene on the game canvas.


#### See

- foundry.documents.TokenDocument
- foundry.canvas.layers.TokenLayer


#### Hierarchy (View Summary)

- PlaceableObjectToken
- Token

- Token


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Token(document: TokenDocument): canvas.placeables.TokenParametersdocument: TokenDocumentThe TokenDocument that this Token represents
Returns canvas.placeables.TokenOverrides PlaceableObject.constructor
- document: TokenDocumentThe TokenDocument that this Token represents


#### Parameters

- document: TokenDocumentThe TokenDocument that this Token represents

The TokenDocument that this Token represents


#### Returns canvas.placeables.Token

Overrides PlaceableObject.constructor


## Properties


### Internal_preventKeyboardMovement

`Internal`Prevent keyboard movement of this Token?


### bars

The attribute bars of this Token.


### border

A Graphics instance which renders the border frame for this Token inside the GridLayer.


### controlIcon

A control icon for interacting with the object

Inherited from PlaceableObject.controlIcon


### detectionFilter

Defines the filter to use for detection.


### detectionFilterMesh

Renders the mesh of with the detection filter.


### document

A reference to the Scene embedded Document instance which this object represents

Inherited from PlaceableObject.document


### effects

The effects icons of temporary ActiveEffects that are applied to the Actor of this Token.


### light

A reference to the LightSource object which defines this light source area of effect.
This is undefined if the Token does not provide an active source of light.


### mesh

A reference to the SpriteMesh which displays this Token in the PrimaryCanvasGroup.


### mouseInteractionManager

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from PlaceableObject.mouseInteractionManager


### nameplate

The nameplate of this Token, which displays its name.


### renderFlags

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from PlaceableObject.renderFlags


### ruler

The ruler of this Token.


### scene

Retain a reference to the Scene within which this Placeable Object resides

Inherited from PlaceableObject.scene


### shape

The shape of this token.


### targetArrows

The target arrows marker, which indicates that this Token is targeted by this User.


### targeted

Track the set of User documents which are currently targeting this Token


### targetPips

The target pips marker, which indicates that this Token is targeted by other User(s).


### texture

The texture of this Token, which is used by its mesh.


### tooltip

The tooltip text of this Token, which contains its elevation.


### turnMarker

The Turn Marker of this Token.
Only a subset of Token objects have a turn marker at any given time.


### vision

A reference to the VisionSource object which defines this vision source area of effect.
This is undefined if the Token does not provide an active source of vision.


### voidMesh

Renders the mesh of this Token with ERASE blending in the Token.


### Protected_plannedMovement

`Protected`The ruler data.


### StaticembeddedName

`Static`Identify the official Document name for this PlaceableObject class

Overrides PlaceableObject.embeddedName


### StaticRENDER_FLAG_PRIORITY

`Static`The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from PlaceableObject.RENDER_FLAG_PRIORITY


### StaticRENDER_FLAGS

`Static`
#### Type declaration

- recoverFromPreview: { deprecated: { since: number; until: number } }Deprecatedsince v12 Stable 4
- redraw: { propagate: string[] }
- redrawEffects: {}
- refresh: { alias: boolean; propagate: string[] }
- refreshBars: {}
- refreshBorder: {}
- refreshEffects: {}
- refreshElevation: { propagate: string[] }
- refreshMesh: { propagate: string[] }
- refreshNameplate: {}
- refreshPosition: {}
- refreshRingVisuals: {}
- refreshRotation: {}
- refreshRuler: {}
- refreshShader: {}
- refreshShape: { propagate: string[] }
- refreshSize: { propagate: string[] }
- refreshState: { propagate: string[] }
- refreshTarget: {}
- refreshTooltip: {}
- refreshTransform: { alias: boolean; propagate: string[] }
- refreshTurnMarker: {}
- refreshVisibility: {}


##### recoverFromPreview: { deprecated: { since: number; until: number } }


#### Deprecated

since v12 Stable 4


##### redraw: { propagate: string[] }


##### redrawEffects: {}


##### refresh: { alias: boolean; propagate: string[] }


##### refreshBars: {}


##### refreshBorder: {}


##### refreshEffects: {}


##### refreshElevation: { propagate: string[] }


##### refreshMesh: { propagate: string[] }


##### refreshNameplate: {}


##### refreshPosition: {}


##### refreshRingVisuals: {}


##### refreshRotation: {}


##### refreshRuler: {}


##### refreshShader: {}


##### refreshShape: { propagate: string[] }


##### refreshSize: { propagate: string[] }


##### refreshState: { propagate: string[] }


##### refreshTarget: {}


##### refreshTooltip: {}


##### refreshTransform: { alias: boolean; propagate: string[] }


##### refreshTurnMarker: {}


##### refreshVisibility: {}

Overrides PlaceableObject.RENDER_FLAGS


## Accessors


### _original

- get _original(): undefined | PlaceableObjectThe object that this object is a preview of if this object is a preview.
Returns undefined | PlaceableObjectInherited from PlaceableObject._original

The object that this object is a preview of if this object is a preview.


#### Returns undefined | PlaceableObject

Inherited from PlaceableObject._original


### actor

- get actor(): null | documents.ActorA convenient reference to the Actor object associated with the Token embedded document.
Returns null | documents.Actor

A convenient reference to the Actor object associated with the Token embedded document.


#### Returns null | documents.Actor


### animationContexts

- get animationContexts(): Map<string, TokenAnimationContext>The current animations of this Token.
Returns Map<string, TokenAnimationContext>

The current animations of this Token.


#### Returns Map<string, TokenAnimationContext>


### animationName

- get animationName(): stringThe general animation name used for this Token.
Returns string

The general animation name used for this Token.


#### Returns string


### bounds

- get bounds(): RectangleReturns RectangleOverrides PlaceableObject.bounds


#### Returns Rectangle

Overrides PlaceableObject.bounds


### brightRadius

- get brightRadius(): numberTranslate the token's bright light distance in units into a radius in pixels.
Returns number

Translate the token's bright light distance in units into a radius in pixels.


#### Returns number


### center

- get center(): PointReturns PointOverrides PlaceableObject.center


#### Returns Point

Overrides PlaceableObject.center


### combatant

- get combatant(): null | documents.CombatantReturn a reference to a Combatant that represents this Token, if one is present in the current encounter.
Returns null | documents.Combatant

Return a reference to a Combatant that represents this Token, if one is present in the current encounter.


#### Returns null | documents.Combatant


### controlled

- get controlled(): booleanAn indicator for whether the object is currently controlled
Returns booleanInherited from PlaceableObject.controlled

An indicator for whether the object is currently controlled


#### Returns boolean

Inherited from PlaceableObject.controlled


### detectionModes

- get detectionModes(): TokenDetectionMode[]Return a reference to the detection modes array.
Returns TokenDetectionMode[]

Return a reference to the detection modes array.


#### Returns TokenDetectionMode[]


### dimRadius

- get dimRadius(): numberTranslate the token's dim light distance in units into a radius in pixels.
Returns number

Translate the token's dim light distance in units into a radius in pixels.


#### Returns number


### emitsDarkness

- get emitsDarkness(): booleanDoes this token actively emit darkness given its properties and the current darkness level of the Scene?
Returns boolean

Does this token actively emit darkness given its properties and the current darkness level of the Scene?


#### Returns boolean


### emitsLight

- get emitsLight(): booleanDoes this token actively emit light given its properties and the current darkness level of the Scene?
Returns boolean

Does this token actively emit light given its properties and the current darkness level of the Scene?


#### Returns boolean


### externalRadius

- get externalRadius(): numberThe external radius of the token in pixels.
Returns number

The external radius of the token in pixels.


#### Returns number


### h

- get h(): numberTranslate the token's grid height into a pixel height based on the canvas size
Returns number

Translate the token's grid height into a pixel height based on the canvas size


#### Returns number


### hasActiveHUD

- get hasActiveHUD(): booleanIs the HUD display active for this Placeable?
Returns booleanInherited from PlaceableObject.hasActiveHUD

Is the HUD display active for this Placeable?


#### Returns boolean

Inherited from PlaceableObject.hasActiveHUD


### hasDynamicRing

- get hasDynamicRing(): booleanA convenience boolean to test whether the Token is using a dynamic ring.
Returns boolean

A convenience boolean to test whether the Token is using a dynamic ring.


#### Returns boolean


### hasLimitedSourceAngle

- get hasLimitedSourceAngle(): booleanTest whether the Token uses a limited angle of vision or light emission.
Returns boolean

Test whether the Token uses a limited angle of vision or light emission.


#### Returns boolean


### hasPreview

- get hasPreview(): booleanDoes there exist a temporary preview of this placeable object?
Returns booleanInherited from PlaceableObject.hasPreview

Does there exist a temporary preview of this placeable object?


#### Returns boolean

Inherited from PlaceableObject.hasPreview


### hasSight

- get hasSight(): booleanTest whether the Token has sight (or blindness) at any radius
Returns boolean

Test whether the Token has sight (or blindness) at any radius


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


### inCombat

- get inCombat(): booleanAn indicator for whether or not this token is currently involved in the active combat encounter.
Returns boolean

An indicator for whether or not this token is currently involved in the active combat encounter.


#### Returns boolean


### interactionState

- get interactionState(): | undefined| {    CLICKED: number;    DRAG: number;    DROP: number;    GRABBED: number;    HOVER: number;    NONE: number;}The mouse interaction state of this placeable.
Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }Inherited from PlaceableObject.interactionState

The mouse interaction state of this placeable.


#### Returns     | undefined    | {        CLICKED: number;        DRAG: number;        DROP: number;        GRABBED: number;        HOVER: number;        NONE: number;    }

Inherited from PlaceableObject.interactionState


### isDragged

- get isDragged(): booleanIs this Token currently being dragged?
Returns boolean

Is this Token currently being dragged?


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


### isTargeted

- get isTargeted(): booleanAn indicator for whether the Token is currently targeted by the active game User
Returns boolean

An indicator for whether the Token is currently targeted by the active game User


#### Returns boolean


### isVideo

- get isVideo(): booleanDoes this Tile depict an animated video texture?
Returns boolean

Does this Tile depict an animated video texture?


#### Returns boolean


### isVisible

- get isVisible(): booleanDetermine whether the Token is visible to the calling user's perspective.
Hidden Tokens are only displayed to GM Users.
Non-hidden Tokens are always visible if Token Vision is not required.
Controlled tokens are always visible.
All Tokens are visible to a GM user if no Token is controlled.
Returns booleanSee

Determine whether the Token is visible to the calling user's perspective.
Hidden Tokens are only displayed to GM Users.
Non-hidden Tokens are always visible if Token Vision is not required.
Controlled tokens are always visible.
All Tokens are visible to a GM user if no Token is controlled.


#### Returns boolean


#### See


### layer

- get layer(): PlaceablesLayerProvide a reference to the CanvasLayer which contains this PlaceableObject.
Returns PlaceablesLayerInherited from PlaceableObject.layer

Provide a reference to the CanvasLayer which contains this PlaceableObject.


#### Returns PlaceablesLayer

Inherited from PlaceableObject.layer


### lightPerceptionRange

- get lightPerceptionRange(): numberThe range of this token's light perception in pixels.
Returns number

The range of this token's light perception in pixels.


#### Returns number


### movementAnimationName

- get movementAnimationName(): stringThe animation name used to animate this Token's movement.
Returns string

The animation name used to animate this Token's movement.


#### Returns string


### movementAnimationPromise

- get movementAnimationPromise(): null | Promise<void>The promise of the current movement animation chain of this Token
or null if there isn't a movement animation in progress.
Returns null | Promise<void>

The promise of the current movement animation chain of this Token
or null if there isn't a movement animation in progress.


#### Returns null | Promise<void>


### name

- get name(): stringConvenience access to the token's nameplate string
Returns string

Convenience access to the token's nameplate string


#### Returns string


### objectId

- get objectId(): stringA unique identifier which is used to uniquely identify elements on the canvas related to this object.
Returns stringInherited from PlaceableObject.objectId

A unique identifier which is used to uniquely identify elements on the canvas related to this object.


#### Returns string

Inherited from PlaceableObject.objectId


### observer

- get observer(): booleanA boolean flag for whether the current game User has observer permission for the Token
Returns boolean

A boolean flag for whether the current game User has observer permission for the Token


#### Returns boolean


### optimalSightRange

- get optimalSightRange(): numberTranslate the token's maximum vision range that takes into account lights.
Returns number

Translate the token's maximum vision range that takes into account lights.


#### Returns number


### radius

- get radius(): numberThe maximum radius in pixels of the light field
Returns number

The maximum radius in pixels of the light field


#### Returns number


### ring

- get ring(): null | TokenRingA TokenRing instance which is used if this Token applies a dynamic ring.
This property is null if the Token does not use a dynamic ring.
Returns null | TokenRing

A TokenRing instance which is used if this Token applies a dynamic ring.
This property is null if the Token does not use a dynamic ring.


#### Returns null | TokenRing


### sheet

- get sheet(): DocumentSheetV2A document sheet used to configure the properties of this Placeable Object or the Document it represents.
Returns DocumentSheetV2Inherited from PlaceableObject.sheet

A document sheet used to configure the properties of this Placeable Object or the Document it represents.


#### Returns DocumentSheetV2

Inherited from PlaceableObject.sheet


### showRuler

- get showRuler(): booleanShould the ruler of this Token be visible?
Returns boolean

Should the ruler of this Token be visible?


#### Returns boolean


### sightRange

- get sightRange(): numberTranslate the token's vision range in units into a radius in pixels.
Returns number

Translate the token's vision range in units into a radius in pixels.


#### Returns number


### sourceElement

- get sourceElement(): null | ImageSourceThe HTML source element for the primary Tile texture
Returns null | ImageSource

The HTML source element for the primary Tile texture


#### Returns null | ImageSource


### sourceId

- get sourceId(): stringReturns stringOverrides PlaceableObject.sourceId


#### Returns string

Overrides PlaceableObject.sourceId


### w

- get w(): numberTranslate the token's grid width into a pixel width based on the canvas size
Returns number

Translate the token's grid width into a pixel width based on the canvas size


#### Returns number


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

- _canControl(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canControl
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canControl


### _canDrag

- _canDrag(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canDrag
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canDrag


### _canHover

- _canHover(user: any, event: any): booleanParametersuser: anyevent: anyReturns booleanOverrides PlaceableObject._canHover
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns boolean

Overrides PlaceableObject._canHover


### _canHUD

- _canHUD(user: any, event: any): anyParametersuser: anyevent: anyReturns anyOverrides PlaceableObject._canHUD
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns any

Overrides PlaceableObject._canHUD


### _canView

- _canView(user: any, event: any): undefined | booleanParametersuser: anyevent: anyReturns undefined | booleanOverrides PlaceableObject._canView
- user: any
- event: any


#### Parameters

- user: any
- event: any


#### Returns undefined | boolean

Overrides PlaceableObject._canView


### _configureFilterEffect

- _configureFilterEffect(statusId: string, active: boolean): voidInternalAdd/Modify a filter effect on this token.
ParametersstatusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
active: booleanIs the special status effect now active?
Returns void
- statusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
- active: booleanIs the special status effect now active?

`Internal`Add/Modify a filter effect on this token.


#### Parameters

- statusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
- active: booleanIs the special status effect now active?

The status effect ID being applied, from CONFIG.specialStatusEffects

Is the special status effect now active?


#### Returns void


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


### _finalizeDragLeft

- _finalizeDragLeft(event: any): voidFinalize the left-drag operation.
Parametersevent: anyThe triggering mouse click event
Returns voidOverrides PlaceableObject._finalizeDragLeft
- event: anyThe triggering mouse click event

Finalize the left-drag operation.


#### Parameters

- event: anyThe triggering mouse click event

The triggering mouse click event


#### Returns void

Overrides PlaceableObject._finalizeDragLeft


### _getConfigMovementPosition

- _getConfigMovementPosition(    changes: Partial<TokenPosition>,): Partial<TokenPosition>InternalGet the position for movement via the Token Config.
Parameterschanges: Partial<TokenPosition>Returns Partial<TokenPosition>Seefoundry.applications.sheets.TokenConfig#_processSubmitData
- changes: Partial<TokenPosition>

`Internal`Get the position for movement via the Token Config.


#### Parameters

- changes: Partial<TokenPosition>


#### Returns Partial<TokenPosition>


#### See

foundry.applications.sheets.TokenConfig#_processSubmitData


### _getDragOrigin

- _getDragOrigin(): PointInternalGet the origin of the drag operation.
Returns Point

`Internal`Get the origin of the drag operation.


#### Returns Point


### _getDragWaypointPosition

- _getDragWaypointPosition(    current: DeepReadonly<Pick<TokenPosition, "x" | "y" | "elevation">>,    changes: DeepReadonly<Partial<ElevatedPoint>>,    options?: { snap?: boolean },): Pick<TokenPosition, "x" | "y" | "elevation"> & Partial<TokenDimensions>InternalGet the drag waypoint position.
Parameterscurrent: DeepReadonly<Pick<TokenPosition, "x" | "y" | "elevation">>changes: DeepReadonly<Partial<ElevatedPoint>>Optionaloptions: { snap?: boolean } = {}Returns Pick<TokenPosition, "x" | "y" | "elevation"> & Partial<TokenDimensions>
- current: DeepReadonly<Pick<TokenPosition, "x" | "y" | "elevation">>
- changes: DeepReadonly<Partial<ElevatedPoint>>
- Optionaloptions: { snap?: boolean } = {}

`Internal`Get the drag waypoint position.


#### Parameters

- current: DeepReadonly<Pick<TokenPosition, "x" | "y" | "elevation">>
- changes: DeepReadonly<Partial<ElevatedPoint>>
- Optionaloptions: { snap?: boolean } = {}

`Optional`
#### Returns Pick<TokenPosition, "x" | "y" | "elevation"> & Partial<TokenDimensions>


### _getHUDMovementPosition

- _getHUDMovementPosition(elevation: number): Partial<TokenPosition>InternalGet the position for movement via the Token HUD.
Parameterselevation: numberReturns Partial<TokenPosition>Seefoundry.applications.hud.TokenHUD#_onSubmit
- elevation: number

`Internal`Get the position for movement via the Token HUD.


#### Parameters

- elevation: number


#### Returns Partial<TokenPosition>


#### See

foundry.applications.hud.TokenHUD#_onSubmit


### _getShiftedPosition

- _getShiftedPosition(    dx: -1 | 0 | 1,    dy: -1 | 0 | 1,    dz: -1 | 0 | 1,): Partial<TokenPosition>InternalObtain a shifted waypoint for the Token. The returned waypoint must move the Token to a snapped position.
Parametersdx: -1 | 0 | 1The number of grid units to shift along the X-axis
dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
dz: -1 | 0 | 1The number of grid units to shift along the Z-axis
Returns Partial<TokenPosition>The shifted target waypoint (snapped if square/hexagonal grid)
Overrides PlaceableObject._getShiftedPosition
- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis

`Internal`Obtain a shifted waypoint for the Token. The returned waypoint must move the Token to a snapped position.


#### Parameters

- dx: -1 | 0 | 1The number of grid units to shift along the X-axis
- dy: -1 | 0 | 1The number of grid units to shift along the Y-axis
- dz: -1 | 0 | 1The number of grid units to shift along the Z-axis

The number of grid units to shift along the X-axis

The number of grid units to shift along the Y-axis

The number of grid units to shift along the Z-axis


#### Returns Partial<TokenPosition>

The shifted target waypoint (snapped if square/hexagonal grid)

Overrides PlaceableObject._getShiftedPosition


### _initializeDragLeft

- _initializeDragLeft(event: any): voidInitialize the left-drag operation.
Parametersevent: anyThe triggering canvas interaction event
Returns voidOverrides PlaceableObject._initializeDragLeft
- event: anyThe triggering canvas interaction event

Initialize the left-drag operation.


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

Overrides PlaceableObject._initializeDragLeft


### _onClickLeft

- _onClickLeft(event: any): voidCallback actions which occur on a single left-click event to assume control of the object
Parametersevent: anyThe triggering canvas interaction event
Returns voidOverrides PlaceableObject._onClickLeft
- event: anyThe triggering canvas interaction event

Callback actions which occur on a single left-click event to assume control of the object


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns void

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


### _onDragEnd

- _onDragEnd(): voidReturns voidOverrides PlaceableObject._onDragEnd


#### Returns void

Overrides PlaceableObject._onDragEnd


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

- _onDragLeftDrop(event: any): undefined | falseCallback actions which occur on a mouse-move operation.
Parametersevent: anyThe triggering canvas interaction event
Returns undefined | falseOverrides PlaceableObject._onDragLeftDrop
- event: anyThe triggering canvas interaction event

Callback actions which occur on a mouse-move operation.


#### Parameters

- event: anyThe triggering canvas interaction event

The triggering canvas interaction event


#### Returns undefined | false

Overrides PlaceableObject._onDragLeftDrop


### _onDragLeftMove

- _onDragLeftMove(event: any): voidParametersevent: anyReturns voidOverrides PlaceableObject._onDragLeftMove
- event: any


#### Parameters

- event: any


#### Returns void

Overrides PlaceableObject._onDragLeftMove


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

- _pasteObject(    offset: any,    __namedParameters?: { hidden?: boolean; snap?: boolean },): anyParametersoffset: any__namedParameters: { hidden?: boolean; snap?: boolean } = {}Returns anyOverrides PlaceableObject._pasteObject
- offset: any
- __namedParameters: { hidden?: boolean; snap?: boolean } = {}


#### Parameters

- offset: any
- __namedParameters: { hidden?: boolean; snap?: boolean } = {}


#### Returns any

Overrides PlaceableObject._pasteObject


### _prepareDragLeftDropUpdates

- _prepareDragLeftDropUpdates(    event: any,): ({ _id: string }[] | { movement: {} })[]Parametersevent: anyReturns ({ _id: string }[] | { movement: {} })[]Overrides PlaceableObject._prepareDragLeftDropUpdates
- event: any


#### Parameters

- event: any


#### Returns ({ _id: string }[] | { movement: {} })[]

Overrides PlaceableObject._prepareDragLeftDropUpdates


### _propagateLeftClick

- _propagateLeftClick(event: any): booleanParametersevent: anyReturns booleanOverrides PlaceableObject._propagateLeftClick
- event: any


#### Parameters

- event: any


#### Returns boolean

Overrides PlaceableObject._propagateLeftClick


### _removeAllFilterEffects

- _removeAllFilterEffects(): voidInternalRemove all filter effects on this placeable.
Returns void

`Internal`Remove all filter effects on this placeable.


#### Returns void


### _updateQuadtree

- _updateQuadtree(): voidInternalUpdate the quadtree.
Returns voidInherited from PlaceableObject._updateQuadtree

`Internal`Update the quadtree.


#### Returns void

Inherited from PlaceableObject._updateQuadtree


### _updateRotation

- _updateRotation(__namedParameters?: { delta?: number; snap?: number }): numberParameters__namedParameters: { delta?: number; snap?: number } = {}Returns numberOverrides PlaceableObject._updateRotation
- __namedParameters: { delta?: number; snap?: number } = {}


#### Parameters

- __namedParameters: { delta?: number; snap?: number } = {}


#### Returns number

Overrides PlaceableObject._updateRotation


### _updateSpecialStatusFilterEffects

- _updateSpecialStatusFilterEffects(): voidInternalUpdate the filter effects depending on special status effects
TODO: replace this method by something more convenient.
Returns void

`Internal`Update the filter effects depending on special status effects
TODO: replace this method by something more convenient.


#### Returns void


### _updateTarget

- _updateTarget(targeted: boolean, user: documents.User): voidInternalHandle updating the targeting state of this Token for a particular User.
Parameterstargeted: booleanIs the token now targeted?
user: documents.UserThe user whose targeting state has changed
Returns void
- targeted: booleanIs the token now targeted?
- user: documents.UserThe user whose targeting state has changed

`Internal`Handle updating the targeting state of this Token for a particular User.


#### Parameters

- targeted: booleanIs the token now targeted?
- user: documents.UserThe user whose targeting state has changed

Is the token now targeted?

The user whose targeting state has changed


#### Returns void


### activateListeners

- activateListeners(): voidActivate interactivity for the Placeable Object
Returns voidInherited from PlaceableObject.activateListeners

Activate interactivity for the Placeable Object


#### Returns void

Inherited from PlaceableObject.activateListeners


### animate

- animate(    to: Partial<TokenAnimationData>,    options?: TokenAnimationOptions,): Promise<void>Animate from the old to the new state of this Token.
Parametersto: Partial<TokenAnimationData>The animation data to animate to
Optionaloptions: TokenAnimationOptions = {}The options that configure the animation behavior
Returns Promise<void>A promise which resolves once the animation has finished or stopped
- to: Partial<TokenAnimationData>The animation data to animate to
- Optionaloptions: TokenAnimationOptions = {}The options that configure the animation behavior

Animate from the old to the new state of this Token.


#### Parameters

- to: Partial<TokenAnimationData>The animation data to animate to
- Optionaloptions: TokenAnimationOptions = {}The options that configure the animation behavior

The animation data to animate to

`Optional`The options that configure the animation behavior


#### Returns Promise<void>

A promise which resolves once the animation has finished or stopped


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


### checkCollision

- checkCollision(    destination: Point | ElevatedPoint,    options?: {        mode?: "any" | "closest" | "all";        origin?: Point | ElevatedPoint;        type?: PointSourcePolygonType;    },): null| boolean| PolygonVertex| PolygonVertex[]Check for collision when attempting a move to a new position.
The result of this function must not be affected by the animation of this Token.
Parametersdestination: Point | ElevatedPointThe central destination point of the attempted movement.
The elevation defaults to the elevation of the origin.
Optionaloptions: {    mode?: "any" | "closest" | "all";    origin?: Point | ElevatedPoint;    type?: PointSourcePolygonType;} = {}Additional options forwarded to PointSourcePolygon.testCollision
Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
Optionaltype?: PointSourcePolygonTypeThe collision type
Returns null | boolean | PolygonVertex | PolygonVertex[]The collision result depends on the mode of the test:
* any: returns a boolean for whether any collision occurred
* all: returns a sorted array of PolygonVertex instances
* closest: returns a PolygonVertex instance or null
- destination: Point | ElevatedPointThe central destination point of the attempted movement.
The elevation defaults to the elevation of the origin.
- Optionaloptions: {    mode?: "any" | "closest" | "all";    origin?: Point | ElevatedPoint;    type?: PointSourcePolygonType;} = {}Additional options forwarded to PointSourcePolygon.testCollision
Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
Optionaltype?: PointSourcePolygonTypeThe collision type
- Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
- Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
- Optionaltype?: PointSourcePolygonTypeThe collision type

Check for collision when attempting a move to a new position.

The result of this function must not be affected by the animation of this Token.


#### Parameters

- destination: Point | ElevatedPointThe central destination point of the attempted movement.
The elevation defaults to the elevation of the origin.
- Optionaloptions: {    mode?: "any" | "closest" | "all";    origin?: Point | ElevatedPoint;    type?: PointSourcePolygonType;} = {}Additional options forwarded to PointSourcePolygon.testCollision
Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
Optionaltype?: PointSourcePolygonTypeThe collision type
- Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
- Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
- Optionaltype?: PointSourcePolygonTypeThe collision type

The central destination point of the attempted movement.
The elevation defaults to the elevation of the origin.

`Optional`Additional options forwarded to PointSourcePolygon.testCollision

- Optionalmode?: "any" | "closest" | "all"The collision mode to test: "any", "all", or "closest"
- Optionalorigin?: Point | ElevatedPointThe origin to be used instead of the current origin. The elevation
defaults to the current elevation.
- Optionaltype?: PointSourcePolygonTypeThe collision type


##### Optionalmode?: "any" | "closest" | "all"

`Optional`The collision mode to test: "any", "all", or "closest"


##### Optionalorigin?: Point | ElevatedPoint

`Optional`The origin to be used instead of the current origin. The elevation
defaults to the current elevation.


##### Optionaltype?: PointSourcePolygonType

`Optional`The collision type


#### Returns null | boolean | PolygonVertex | PolygonVertex[]

The collision result depends on the mode of the test:
* any: returns a boolean for whether any collision occurred
* all: returns a sorted array of PolygonVertex instances
* closest: returns a PolygonVertex instance or null


### clear

- clear(): canvas.placeables.TokenReturns canvas.placeables.TokenOverrides PlaceableObject.clear


#### Returns canvas.placeables.Token

Overrides PlaceableObject.clear


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


### constrainMovementPath

- constrainMovementPath(    waypoints: TokenConstrainMovementPathWaypoint[],    options?: TokenConstrainMovementPathOptions,): [constrainedPath: TokenMovementWaypoint[], wasConstrained: boolean]Constrain the given movement path.
The result of this function must not be affected by the animation of this Token.
Parameterswaypoints: TokenConstrainMovementPathWaypoint[]The waypoints of movement
Optionaloptions: TokenConstrainMovementPathOptions = {}Additional options
Returns [constrainedPath: TokenMovementWaypoint[], wasConstrained: boolean]The (constrained) path of movement and a boolean that is true if and only if the path was constrained.
If it wasn't constrained, then a copy of the path of all given waypoints with all default values filled in
is returned.
- waypoints: TokenConstrainMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenConstrainMovementPathOptions = {}Additional options

Constrain the given movement path.

The result of this function must not be affected by the animation of this Token.


#### Parameters

- waypoints: TokenConstrainMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenConstrainMovementPathOptions = {}Additional options

The waypoints of movement

`Optional`Additional options


#### Returns [constrainedPath: TokenMovementWaypoint[], wasConstrained: boolean]

The (constrained) path of movement and a boolean that is true if and only if the path was constrained.
If it wasn't constrained, then a copy of the path of all given waypoints with all default values filled in
is returned.


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


### createTerrainMovementPath

- createTerrainMovementPath(    waypoints: TokenGetTerrainMovementPathWaypoint[],    options?: { preview?: boolean },): TokenTerrainMovementWaypoint[]This function adds intermediate waypoints pre/post enter and exit for a Region if the Region
has at least one Behavior that could affect the movement, which is determined by
foundry.data.regionBehaviors.RegionBehaviorType#_getTerrainEffects.
For each segment of the movement path the terrain data is created from all behaviors that
could affect the movement of this Token with CONFIG.Token.movement.TerrainData.resolveTerrainEffects.
This terrain data is included in the returned regionalized movement path.
This terrain data may then be used in Token#_getMovementCostFunction and
Token#constrainMovementPath.
Parameterswaypoints: TokenGetTerrainMovementPathWaypoint[]The waypoints of movement
Optionaloptions: { preview?: boolean } = {}Additional options
Optionalpreview?: booleanIs preview?
Returns TokenTerrainMovementWaypoint[]The movement path with terrain data
- waypoints: TokenGetTerrainMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: { preview?: boolean } = {}Additional options
Optionalpreview?: booleanIs preview?
- Optionalpreview?: booleanIs preview?

This function adds intermediate waypoints pre/post enter and exit for a Region if the Region
has at least one Behavior that could affect the movement, which is determined by
foundry.data.regionBehaviors.RegionBehaviorType#_getTerrainEffects.
For each segment of the movement path the terrain data is created from all behaviors that
could affect the movement of this Token with CONFIG.Token.movement.TerrainData.resolveTerrainEffects.
This terrain data is included in the returned regionalized movement path.
This terrain data may then be used in Token#_getMovementCostFunction and
Token#constrainMovementPath.


#### Parameters

- waypoints: TokenGetTerrainMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: { preview?: boolean } = {}Additional options
Optionalpreview?: booleanIs preview?
- Optionalpreview?: booleanIs preview?

The waypoints of movement

`Optional`Additional options

- Optionalpreview?: booleanIs preview?


##### Optionalpreview?: boolean

`Optional`Is preview?


#### Returns TokenTerrainMovementWaypoint[]

The movement path with terrain data


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


### drawBars

- drawBars(): voidRefresh the display of Token attribute bars, rendering its latest resource data.
If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.
Returns void

Refresh the display of Token attribute bars, rendering its latest resource data.
If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.


#### Returns void


### drawEffects

- drawEffects(): Promise<PlaceableObject>Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
Returns Promise<PlaceableObject>

Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.


#### Returns Promise<PlaceableObject>


### findMovementPath

- findMovementPath(    waypoints: TokenFindMovementPathWaypoint[],    options?: TokenFindMovementPathOptions,): TokenFindMovementPathJobFind a movement path through the waypoints.
The path may not necessarily be one with the least cost.
The path returned may be partial, i.e. it doesn't go through all waypoints, but must always start with the first
waypoints unless the waypoints are empty, in which case an empty path is returned.
The result of this function must not be affected by the animation of this Token.
Parameterswaypoints: TokenFindMovementPathWaypoint[]The waypoints of movement
Optionaloptions: TokenFindMovementPathOptionsAdditional options
Returns TokenFindMovementPathJobThe job of the movement pathfinder
- waypoints: TokenFindMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenFindMovementPathOptionsAdditional options

Find a movement path through the waypoints.
The path may not necessarily be one with the least cost.
The path returned may be partial, i.e. it doesn't go through all waypoints, but must always start with the first
waypoints unless the waypoints are empty, in which case an empty path is returned.

The result of this function must not be affected by the animation of this Token.


#### Parameters

- waypoints: TokenFindMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenFindMovementPathOptionsAdditional options

The waypoints of movement

`Optional`Additional options


#### Returns TokenFindMovementPathJob

The job of the movement pathfinder


### getCenterPoint

- getCenterPoint(position?: Point): PointGet the center point of the Token.
ParametersOptionalposition: PointThe position in pixels
Returns PointThe center point
- Optionalposition: PointThe position in pixels

Get the center point of the Token.


#### Parameters

- Optionalposition: PointThe position in pixels

`Optional`The position in pixels


#### Returns Point

The center point


### getDispositionColor

- getDispositionColor(): numberGet the Color used to represent the disposition of this Token.
Returns number

Get the Color used to represent the disposition of this Token.


#### Returns number


### getLightRadius

- getLightRadius(units: number): numberA generic transformation to turn a certain number of grid units into a radius in canvas pixels.
This function adds additional padding to the light radius equal to the external radius of the token.
This causes light to be measured from the outer token edge, rather than from the center-point.
Parametersunits: numberThe radius in grid units
Returns numberThe radius in pixels
- units: numberThe radius in grid units

A generic transformation to turn a certain number of grid units into a radius in canvas pixels.
This function adds additional padding to the light radius equal to the external radius of the token.
This causes light to be measured from the outer token edge, rather than from the center-point.


#### Parameters

- units: numberThe radius in grid units

The radius in grid units


#### Returns number

The radius in pixels


### getMovementAdjustedPoint

- getMovementAdjustedPoint(    point: ElevatedPoint,    options?: { offsetX?: number; offsetY?: number },): ElevatedPointThe Token's central position, adjusted in each direction by one or zero pixels to offset it relative to walls.
Parameterspoint: ElevatedPointThe center point with elevation.
Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
Returns ElevatedPointThe adjusted center point.
- point: ElevatedPointThe center point with elevation.
- Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.
- getMovementAdjustedPoint(    point: Point,    options?: { offsetX?: number; offsetY?: number },): PointParameterspoint: PointThe center point.
Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
Returns PointThe adjusted center point.
- point: PointThe center point.
- Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.

The Token's central position, adjusted in each direction by one or zero pixels to offset it relative to walls.


#### Parameters

- point: ElevatedPointThe center point with elevation.
- Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.

The center point with elevation.

`Optional`- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.


##### OptionaloffsetX?: number

`Optional`The x-offset.


##### OptionaloffsetY?: number

`Optional`The y-offset.


#### Returns ElevatedPoint

The adjusted center point.


#### Parameters

- point: PointThe center point.
- Optionaloptions: { offsetX?: number; offsetY?: number }OptionaloffsetX?: numberThe x-offset.
OptionaloffsetY?: numberThe y-offset.
- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.

The center point.

`Optional`- OptionaloffsetX?: numberThe x-offset.
- OptionaloffsetY?: numberThe y-offset.


##### OptionaloffsetX?: number

`Optional`The x-offset.


##### OptionaloffsetY?: number

`Optional`The y-offset.


#### Returns Point

The adjusted center point.


### getRingColors

- getRingColors(): {}Override ring colors for this particular Token instance.
Returns {}

Override ring colors for this particular Token instance.


#### Returns {}


### getRingEffects

- getRingEffects(): number[]Apply additional ring effects for this particular Token instance.
Effects are returned as an array of integers in foundry.canvas.placeables.tokens.TokenRing.effects.
Returns number[]

Apply additional ring effects for this particular Token instance.
Effects are returned as an array of integers in foundry.canvas.placeables.tokens.TokenRing.effects.


#### Returns number[]


### getShape

- getShape(): Rectangle | Polygon | Circle | EllipseGet the shape of this Token.
Returns Rectangle | Polygon | Circle | Ellipse

Get the shape of this Token.


#### Returns Rectangle | Polygon | Circle | Ellipse


### getSnappedPosition

- getSnappedPosition(position: any): { x: any; y: any }Parametersposition: anyReturns { x: any; y: any }Overrides PlaceableObject.getSnappedPosition
- position: any


#### Parameters

- position: any


#### Returns { x: any; y: any }

Overrides PlaceableObject.getSnappedPosition


### initializeLightSource

- initializeLightSource(options?: { deleted?: boolean }): voidUpdate an emitted light source associated with this Token.
ParametersOptionaloptions: { deleted?: boolean } = {}Optionaldeleted?: booleanIndicate that this light source has been deleted.
Returns void
- Optionaloptions: { deleted?: boolean } = {}Optionaldeleted?: booleanIndicate that this light source has been deleted.
- Optionaldeleted?: booleanIndicate that this light source has been deleted.

Update an emitted light source associated with this Token.


#### Parameters

- Optionaloptions: { deleted?: boolean } = {}Optionaldeleted?: booleanIndicate that this light source has been deleted.
- Optionaldeleted?: booleanIndicate that this light source has been deleted.

`Optional`- Optionaldeleted?: booleanIndicate that this light source has been deleted.


##### Optionaldeleted?: boolean

`Optional`Indicate that this light source has been deleted.


#### Returns void


### initializeSources

- initializeSources(options?: { deleted?: boolean }): voidUpdate the light and vision source objects associated with this Token.
ParametersOptionaloptions: { deleted?: boolean } = {}Options which configure how perception sources are updated
Optionaldeleted?: booleanIndicate that this light and vision source has been deleted
Returns void
- Optionaloptions: { deleted?: boolean } = {}Options which configure how perception sources are updated
Optionaldeleted?: booleanIndicate that this light and vision source has been deleted
- Optionaldeleted?: booleanIndicate that this light and vision source has been deleted

Update the light and vision source objects associated with this Token.


#### Parameters

- Optionaloptions: { deleted?: boolean } = {}Options which configure how perception sources are updated
Optionaldeleted?: booleanIndicate that this light and vision source has been deleted
- Optionaldeleted?: booleanIndicate that this light and vision source has been deleted

`Optional`Options which configure how perception sources are updated

- Optionaldeleted?: booleanIndicate that this light and vision source has been deleted


##### Optionaldeleted?: boolean

`Optional`Indicate that this light and vision source has been deleted


#### Returns void


### initializeVisionSource

- initializeVisionSource(options?: { deleted?: boolean }): voidUpdate the VisionSource instance associated with this Token.
ParametersOptionaloptions: { deleted?: boolean } = {}Options which affect how the vision source is updated
Optionaldeleted?: booleanIndicate that this vision source has been deleted.
Returns void
- Optionaloptions: { deleted?: boolean } = {}Options which affect how the vision source is updated
Optionaldeleted?: booleanIndicate that this vision source has been deleted.
- Optionaldeleted?: booleanIndicate that this vision source has been deleted.

Update the VisionSource instance associated with this Token.


#### Parameters

- Optionaloptions: { deleted?: boolean } = {}Options which affect how the vision source is updated
Optionaldeleted?: booleanIndicate that this vision source has been deleted.
- Optionaldeleted?: booleanIndicate that this vision source has been deleted.

`Optional`Options which affect how the vision source is updated

- Optionaldeleted?: booleanIndicate that this vision source has been deleted.


##### Optionaldeleted?: boolean

`Optional`Indicate that this vision source has been deleted.


#### Returns void


### measureMovementPath

- measureMovementPath(    waypoints: TokenMeasureMovementPathWaypoint[],    options?: TokenMeasureMovementPathOptions,): GridMeasurePathResultMeasure the movement path for this Token.
Parameterswaypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
Optionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations
(passed to Token#_getMovementCostFunction)
Returns GridMeasurePathResult
- waypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations
(passed to Token#_getMovementCostFunction)

Measure the movement path for this Token.


#### Parameters

- waypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations
(passed to Token#_getMovementCostFunction)

The waypoints of movement

`Optional`Additional options that affect cost calculations
(passed to Token#_getMovementCostFunction)


#### Returns GridMeasurePathResult


### recalculatePlannedMovementPath

- recalculatePlannedMovementPath(): voidRecalculate the planned movement path of this Token for the current User.
Returns void

Recalculate the planned movement path of this Token for the current User.


#### Returns void


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


### setTarget

- setTarget(targeted?: boolean, options?: { releaseOthers?: boolean }): voidSet this Token as an active target for the current game User.
Parameterstargeted: boolean = trueIs the Token now targeted?
Optionaloptions: { releaseOthers?: boolean } = {}Additional option which modify how targets are acquired
OptionalreleaseOthers?: booleanRelease other active targets?
Returns void
- targeted: boolean = trueIs the Token now targeted?
- Optionaloptions: { releaseOthers?: boolean } = {}Additional option which modify how targets are acquired
OptionalreleaseOthers?: booleanRelease other active targets?
- OptionalreleaseOthers?: booleanRelease other active targets?

Set this Token as an active target for the current game User.


#### Parameters

- targeted: boolean = trueIs the Token now targeted?
- Optionaloptions: { releaseOthers?: boolean } = {}Additional option which modify how targets are acquired
OptionalreleaseOthers?: booleanRelease other active targets?
- OptionalreleaseOthers?: booleanRelease other active targets?

Is the Token now targeted?

`Optional`Additional option which modify how targets are acquired

- OptionalreleaseOthers?: booleanRelease other active targets?


##### OptionalreleaseOthers?: boolean

`Optional`Release other active targets?


#### Returns void


### stopAnimation

- stopAnimation(options?: { reset?: boolean }): voidTerminate the animations of this particular Token, if exists.
ParametersOptionaloptions: { reset?: boolean } = {}Additional options.
Optionalreset?: booleanReset the TokenDocument?
Returns void
- Optionaloptions: { reset?: boolean } = {}Additional options.
Optionalreset?: booleanReset the TokenDocument?
- Optionalreset?: booleanReset the TokenDocument?

Terminate the animations of this particular Token, if exists.


#### Parameters

- Optionaloptions: { reset?: boolean } = {}Additional options.
Optionalreset?: booleanReset the TokenDocument?
- Optionalreset?: booleanReset the TokenDocument?

`Optional`Additional options.

- Optionalreset?: booleanReset the TokenDocument?


##### Optionalreset?: boolean

`Optional`Reset the TokenDocument?


#### Returns void


### Protected_addDragWaypoint

`Protected`- _addDragWaypoint(point: Point, options?: { snap?: boolean }): voidProtectedAdd ruler waypoints and update ruler paths.
Parameterspoint: PointThe (unsnapped) center point of the waypoint
Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the added waypoint?
Returns void
- point: PointThe (unsnapped) center point of the waypoint
- Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the added waypoint?
- Optionalsnap?: booleanSnap the added waypoint?

`Protected`Add ruler waypoints and update ruler paths.


#### Parameters

- point: PointThe (unsnapped) center point of the waypoint
- Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the added waypoint?
- Optionalsnap?: booleanSnap the added waypoint?

The (unsnapped) center point of the waypoint

`Optional`Additional options

- Optionalsnap?: booleanSnap the added waypoint?


##### Optionalsnap?: boolean

`Optional`Snap the added waypoint?


#### Returns void


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


### Protected_canViewMode

`Protected`- _canViewMode(mode: TokenDisplayMode): booleanProtectedHelper method to determine whether a token attribute is viewable under a certain mode
Parametersmode: TokenDisplayModeThe mode from CONST.TOKEN_DISPLAY_MODES
Returns booleanIs the attribute viewable?
- mode: TokenDisplayModeThe mode from CONST.TOKEN_DISPLAY_MODES

`Protected`Helper method to determine whether a token attribute is viewable under a certain mode


#### Parameters

- mode: TokenDisplayModeThe mode from CONST.TOKEN_DISPLAY_MODES

The mode from CONST.TOKEN_DISPLAY_MODES


#### Returns boolean

Is the attribute viewable?


### Protected_changeDragElevation

`Protected`- _changeDragElevation(delta: number, options?: { precise?: boolean }): voidProtectedChange the elevation of the dragged Tokens.
Parametersdelta: numberThe number vertical steps
Optionaloptions: { precise?: boolean } = {}Additional options
Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.
Returns void
- delta: numberThe number vertical steps
- Optionaloptions: { precise?: boolean } = {}Additional options
Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.
- Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.

`Protected`Change the elevation of the dragged Tokens.


#### Parameters

- delta: numberThe number vertical steps
- Optionaloptions: { precise?: boolean } = {}Additional options
Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.
- Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.

The number vertical steps

`Optional`Additional options

- Optionalprecise?: booleanRound elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.


##### Optionalprecise?: boolean

`Optional`Round elevations to multiples of the grid distance divided by
CONFIG.Canvas.elevationSnappingPrecision?
If false, rounds to multiples of the grid distance.

`CONFIG.Canvas.elevationSnappingPrecision`
#### Returns void


### Protected_createInteractionManager

`Protected`- _createInteractionManager(): MouseInteractionManagerProtectedCreate a standard MouseInteractionManager for the PlaceableObject
Returns MouseInteractionManagerInherited from PlaceableObject._createInteractionManager

`Protected`Create a standard MouseInteractionManager for the PlaceableObject


#### Returns MouseInteractionManager

Inherited from PlaceableObject._createInteractionManager


### Protected_drawBar

`Protected`- _drawBar(number: number, bar: Graphics, data: Object): booleanProtectedDraw a single resource bar, given provided data
Parametersnumber: numberThe Bar number
bar: GraphicsThe Bar container
data: ObjectResource data for this bar
Returns boolean
- number: numberThe Bar number
- bar: GraphicsThe Bar container
- data: ObjectResource data for this bar

`Protected`Draw a single resource bar, given provided data


#### Parameters

- number: numberThe Bar number
- bar: GraphicsThe Bar container
- data: ObjectResource data for this bar

The Bar number

The Bar container

Resource data for this bar


#### Returns boolean


### Protected_drawEffect

`Protected`- _drawEffect(src: string, tint: null | ColorSource): Promise<undefined | Sprite>ProtectedDraw a status effect icon
Parameterssrc: stringtint: null | ColorSourceReturns Promise<undefined | Sprite>
- src: string
- tint: null | ColorSource

`Protected`Draw a status effect icon


#### Parameters

- src: string
- tint: null | ColorSource


#### Returns Promise<undefined | Sprite>


### Protected_drawEffects

`Protected`- _drawEffects(): Promise<void>ProtectedDraw the effect icons for ActiveEffect documents which apply to the Token's Actor.
Called by Token#drawEffects.
Returns Promise<void>

`Protected`Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
Called by Token#drawEffects.


#### Returns Promise<void>


### Protected_drawOverlay

`Protected`- _drawOverlay(src: string, tint: null | number): Promise<Sprite>ProtectedDraw the overlay effect icon
Parameterssrc: stringtint: null | numberReturns Promise<Sprite>
- src: string
- tint: null | number

`Protected`Draw the overlay effect icon


#### Parameters

- src: string
- tint: null | number


#### Returns Promise<Sprite>


### Protected_drawTargetArrows

`Protected`- _drawTargetArrows(reticule?: ReticuleOptions): voidProtectedDraw the targeting arrows around this token.
ParametersOptionalreticule: ReticuleOptions = {}Additional parameters to configure how the targeting reticule is drawn.
Returns void
- Optionalreticule: ReticuleOptions = {}Additional parameters to configure how the targeting reticule is drawn.

`Protected`Draw the targeting arrows around this token.


#### Parameters

- Optionalreticule: ReticuleOptions = {}Additional parameters to configure how the targeting reticule is drawn.

`Optional`Additional parameters to configure how the targeting reticule is drawn.


#### Returns void


### Protected_drawTargetPips

`Protected`- _drawTargetPips(): voidProtectedDraw the targeting pips around this token.
Returns void

`Protected`Draw the targeting pips around this token.


#### Returns void


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


### Protected_getAnimationData

`Protected`- _getAnimationData(): TokenAnimationDataProtectedGet the animation data for the current state of the document.
Returns TokenAnimationDataThe target animation data object

`Protected`Get the animation data for the current state of the document.


#### Returns TokenAnimationData

The target animation data object


### Protected_getAnimationDuration

`Protected`- _getAnimationDuration(    from: DeepReadonly<TokenAnimationData>,    to: DeepReadonly<Partial<TokenAnimationData>>,    options: TokenAnimationOptions,): numberProtectedGet the duration of the animation.
Parametersfrom: DeepReadonly<TokenAnimationData>The animation data to animate from
to: DeepReadonly<Partial<TokenAnimationData>>The animation data to animate to
options: TokenAnimationOptionsThe options that configure the animation behavior
Returns numberThe duration of the animation in milliseconds
- from: DeepReadonly<TokenAnimationData>The animation data to animate from
- to: DeepReadonly<Partial<TokenAnimationData>>The animation data to animate to
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Get the duration of the animation.


#### Parameters

- from: DeepReadonly<TokenAnimationData>The animation data to animate from
- to: DeepReadonly<Partial<TokenAnimationData>>The animation data to animate to
- options: TokenAnimationOptionsThe options that configure the animation behavior

The animation data to animate from

The animation data to animate to

The options that configure the animation behavior


#### Returns number

The duration of the animation in milliseconds


### Protected_getAnimationMovementSpeed

`Protected`- _getAnimationMovementSpeed(options: TokenAnimationOptions): numberProtectedGet the base movement speed for the animation in grid size per second.
The default implementation returns CONFIG.Token.movement.defaultSpeed.
Parametersoptions: TokenAnimationOptionsThe options that configure the animation behavior
Returns numberThe base movement speed in grid size per second
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Get the base movement speed for the animation in grid size per second.
The default implementation returns CONFIG.Token.movement.defaultSpeed.

`CONFIG.Token.movement.defaultSpeed`
#### Parameters

- options: TokenAnimationOptionsThe options that configure the animation behavior

The options that configure the animation behavior


#### Returns number

The base movement speed in grid size per second


### Protected_getAnimationRotationSpeed

`Protected`- _getAnimationRotationSpeed(options: TokenAnimationOptions): numberProtectedGet the rotation speed for the animation in 60 degrees per second.
Returns the movement speed by default.
Parametersoptions: TokenAnimationOptionsThe options that configure the animation behavior
Returns numberThe rotation speed in 60 degrees per second
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Get the rotation speed for the animation in 60 degrees per second.
Returns the movement speed by default.


#### Parameters

- options: TokenAnimationOptionsThe options that configure the animation behavior

The options that configure the animation behavior


#### Returns number

The rotation speed in 60 degrees per second


### Protected_getAnimationTransition

`Protected`- _getAnimationTransition(    options: TokenAnimationOptions,): TokenAnimationTransitionProtectedGet the texture transition type.
Returns "fade" by default.
Parametersoptions: TokenAnimationOptionsThe options that configure the animation behavior
Returns TokenAnimationTransitionThe transition type
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Get the texture transition type.
Returns "fade" by default.

`"fade"`
#### Parameters

- options: TokenAnimationOptionsThe options that configure the animation behavior

The options that configure the animation behavior


#### Returns TokenAnimationTransition

The transition type


### Protected_getBorderColor

`Protected`- _getBorderColor(): numberProtectedGet the hex color that should be used to render the Token border
Returns numberThe hex color used to depict the border color

`Protected`Get the hex color that should be used to render the Token border


#### Returns number

The hex color used to depict the border color


### Protected_getDragConstrainOptions

`Protected`- _getDragConstrainOptions(): Omit<    TokenConstrainMovementPathOptions,    "preview"    | "history",>ProtectedGet the constrain options used during the drag operation.
Returns Omit<TokenConstrainMovementPathOptions, "preview" | "history">The constrain options

`Protected`Get the constrain options used during the drag operation.


#### Returns Omit<TokenConstrainMovementPathOptions, "preview" | "history">

The constrain options


### Protected_getDragMovementAction

`Protected`- _getDragMovementAction(): stringProtectedGet the movement action for the waypoints placed during a drag operation.
Returns stringThe movement action

`Protected`Get the movement action for the waypoints placed during a drag operation.


#### Returns string

The movement action


### Protected_getDragPathfindingOptions

`Protected`- _getDragPathfindingOptions(): TokenFindMovementPathOptionsProtectedGet the search options used during the drag operation to find the path of movement through the waypoints.
Returns TokenFindMovementPathOptionsThe search options

`Protected`Get the search options used during the drag operation to find the path of movement through the waypoints.


#### Returns TokenFindMovementPathOptions

The search options


### Protected_getHUDMovementAction

`Protected`- _getHUDMovementAction(): stringProtectedGet the movement action in CONFIG.Token.movement.actions to be used for movement
via the Token HUD.
The default implementation returns this.document.movementAction.
Returns stringSeefoundry.applications.hud.TokenHUD#_onSubmit

`Protected`Get the movement action in CONFIG.Token.movement.actions to be used for movement
via the Token HUD.
The default implementation returns this.document.movementAction.

`this.document.movementAction`
#### Returns string


#### See

foundry.applications.hud.TokenHUD#_onSubmit


### Protected_getKeyboardMovementAction

`Protected`- _getKeyboardMovementAction(): stringProtectedGet the movement action in CONFIG.Token.movement.actions to be used for keyboard
movement.
The default implementation returns this.document.movementAction.
Returns string

`Protected`Get the movement action in CONFIG.Token.movement.actions to be used for keyboard
movement.
The default implementation returns this.document.movementAction.

`this.document.movementAction`
#### Returns string


### Protected_getLightSourceData

`Protected`- _getLightSourceData(): LightSourceDataProtectedGet the light source data.
Returns LightSourceData

`Protected`Get the light source data.


#### Returns LightSourceData


### Protected_getMovementCostFunction

`Protected`- _getMovementCostFunction(    options?: TokenMeasureMovementPathOptions,): void | TokenMovementCostFunctionProtectedCreate the movement cost function for this Token.
In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
In gridless grids the from and to parameters of the cost function are top-left offsets.
If the movement cost function is undefined, the cost equals the distance moved.
ParametersOptionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations
Returns void | TokenMovementCostFunction
- Optionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations

`Protected`Create the movement cost function for this Token.
In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
In gridless grids the from and to parameters of the cost function are top-left offsets.
If the movement cost function is undefined, the cost equals the distance moved.

`from``to`
#### Parameters

- Optionaloptions: TokenMeasureMovementPathOptionsAdditional options that affect cost calculations

`Optional`Additional options that affect cost calculations


#### Returns void | TokenMovementCostFunction


### Protected_getTargetAlpha

`Protected`- _getTargetAlpha(): numberProtectedGet the target opacity that should be used for a Placeable Object depending on its preview state.
Returns numberInherited from PlaceableObject._getTargetAlpha

`Protected`Get the target opacity that should be used for a Placeable Object depending on its preview state.


#### Returns number

Inherited from PlaceableObject._getTargetAlpha


### Protected_getTextStyle

`Protected`- _getTextStyle(): TextStyleProtectedGet the text style that should be used for this Token's tooltip.
Returns TextStyle

`Protected`Get the text style that should be used for this Token's tooltip.


#### Returns TextStyle


### Protected_getTooltipText

`Protected`- _getTooltipText(): stringProtectedReturn the text which should be displayed in a token's tooltip field
Returns string

`Protected`Return the text which should be displayed in a token's tooltip field


#### Returns string


### Protected_getVisionBlindedStates

`Protected`- _getVisionBlindedStates(): Record<string, boolean>ProtectedReturns a record of blinding state.
Returns Record<string, boolean>

`Protected`Returns a record of blinding state.


#### Returns Record<string, boolean>


### Protected_getVisionSourceData

`Protected`- _getVisionSourceData(): VisionSourceDataProtectedGet the vision source data.
Returns VisionSourceData

`Protected`Get the vision source data.


#### Returns VisionSourceData


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


### Protected_initializeRuler

`Protected`- _initializeRuler(): null | BaseTokenRulerProtectedCreate the BaseTokenRuler instance for this Token, if any.
This function is called when the Token is drawn for the first time.
Returns null | BaseTokenRuler

`Protected`Create the BaseTokenRuler instance for this Token, if any.
This function is called when the Token is drawn for the first time.


#### Returns null | BaseTokenRuler


### Protected_isLightSource

`Protected`- _isLightSource(): booleanProtectedDoes this Token actively emit light given its properties and the current darkness level of the Scene?
Returns boolean

`Protected`Does this Token actively emit light given its properties and the current darkness level of the Scene?


#### Returns boolean


### Protected_isVisionSource

`Protected`- _isVisionSource(): booleanProtectedTest whether this Token is a viable vision source for the current User.
Returns boolean

`Protected`Test whether this Token is a viable vision source for the current User.


#### Returns boolean


### Protected_modifyAnimationMovementSpeed

`Protected`- _modifyAnimationMovementSpeed(    speed: number,    options: TokenAnimationOptions,): numberProtectedModify the base movement speed of the animation.
Divides by the terrain difficulty, if present, by default.
Parametersspeed: numberThe base movement speed in grid size per second
options: TokenAnimationOptionsThe options that configure the animation behavior
Returns numberThe modified movement speed in grid size per second
- speed: numberThe base movement speed in grid size per second
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Modify the base movement speed of the animation.
Divides by the terrain difficulty, if present, by default.


#### Parameters

- speed: numberThe base movement speed in grid size per second
- options: TokenAnimationOptionsThe options that configure the animation behavior

The base movement speed in grid size per second

The options that configure the animation behavior


#### Returns number

The modified movement speed in grid size per second


### Protected_onAnimationUpdate

`Protected`- _onAnimationUpdate(    changed: Partial<TokenAnimationData>,    context: TokenAnimationContext,): voidProtectedCalled each animation frame.
Parameterschanged: Partial<TokenAnimationData>The animation data that changed
context: TokenAnimationContextThe animation context
Returns void
- changed: Partial<TokenAnimationData>The animation data that changed
- context: TokenAnimationContextThe animation context

`Protected`Called each animation frame.


#### Parameters

- changed: Partial<TokenAnimationData>The animation data that changed
- context: TokenAnimationContextThe animation context

The animation data that changed

The animation context


#### Returns void


### Protected_onApplyStatusEffect

`Protected`- _onApplyStatusEffect(statusId: string, active: boolean): voidProtectedHandle changes to Token behavior when a significant status effect is applied
ParametersstatusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
active: booleanIs the special status effect now active?
Returns void
- statusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
- active: booleanIs the special status effect now active?

`Protected`Handle changes to Token behavior when a significant status effect is applied


#### Parameters

- statusId: stringThe status effect ID being applied, from CONFIG.specialStatusEffects
- active: booleanIs the special status effect now active?

The status effect ID being applied, from CONFIG.specialStatusEffects

Is the special status effect now active?


#### Returns void


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

`Protected`- _onControl(options?: { pan?: any; releaseOthers?: boolean }): voidProtectedAdditional events that trigger once control of the Token is established
Parametersoptions: { pan?: any; releaseOthers?: boolean } = {}Optional parameters which apply for specific implementations
Optionalpan?: anyPan to the controlled Token
OptionalreleaseOthers?: booleanRelease control of all other Tokens
Returns voidOverrides PlaceableObject._onControl
- options: { pan?: any; releaseOthers?: boolean } = {}Optional parameters which apply for specific implementations
Optionalpan?: anyPan to the controlled Token
OptionalreleaseOthers?: booleanRelease control of all other Tokens
- Optionalpan?: anyPan to the controlled Token
- OptionalreleaseOthers?: booleanRelease control of all other Tokens

`Protected`Additional events that trigger once control of the Token is established


#### Parameters

- options: { pan?: any; releaseOthers?: boolean } = {}Optional parameters which apply for specific implementations
Optionalpan?: anyPan to the controlled Token
OptionalreleaseOthers?: booleanRelease control of all other Tokens
- Optionalpan?: anyPan to the controlled Token
- OptionalreleaseOthers?: booleanRelease control of all other Tokens

Optional parameters which apply for specific implementations

- Optionalpan?: anyPan to the controlled Token
- OptionalreleaseOthers?: booleanRelease control of all other Tokens


##### Optionalpan?: any

`Optional`Pan to the controlled Token


##### OptionalreleaseOthers?: boolean

`Optional`Release control of all other Tokens


#### Returns void

Overrides PlaceableObject._onControl


### Protected_onDragClickLeft

`Protected`- _onDragClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCalled by foundry.canvas.layers.TokenLayer#_onClickLeft while this Token is in a drag workflow.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The pointerdown event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

`Protected`Called by foundry.canvas.layers.TokenLayer#_onClickLeft while this Token is in a drag workflow.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

The pointerdown event


#### Returns void


### Protected_onDragClickLeft2

`Protected`- _onDragClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCalled by foundry.canvas.layers.TokenLayer#_onClickLeft2 while this Token is in a drag workflow.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The pointerdown event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

`Protected`Called by foundry.canvas.layers.TokenLayer#_onClickLeft2 while this Token is in a drag workflow.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

The pointerdown event


#### Returns void


### Protected_onDragClickRight

`Protected`- _onDragClickRight(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCalled by foundry.canvas.layers.TokenLayer#_onClickRight while this Token is in a drag workflow.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The pointerdown event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

`Protected`Called by foundry.canvas.layers.TokenLayer#_onClickRight while this Token is in a drag workflow.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

The pointerdown event


#### Returns void


### Protected_onDragClickRight2

`Protected`- _onDragClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): voidProtectedCalled by foundry.canvas.layers.TokenLayer#_onClickRight2 while this Token is in a drag workflow.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The pointerdown event
Returns void
- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

`Protected`Called by foundry.canvas.layers.TokenLayer#_onClickRight2 while this Token is in a drag workflow.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The pointerdown event

The pointerdown event


#### Returns void


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


### Protected_onDragMouseWheel

`Protected`- _onDragMouseWheel(event: WheelEvent): voidProtectedChange the elevation of Token during dragging.
Parametersevent: WheelEventThe mousewheel event
Returns void
- event: WheelEventThe mousewheel event

`Protected`Change the elevation of Token during dragging.


#### Parameters

- event: WheelEventThe mousewheel event

The mousewheel event


#### Returns void


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


### Protected_prepareAnimation

`Protected`- _prepareAnimation(    from: DeepReadonly<TokenAnimationData>,    changes: Partial<TokenAnimationData>,    context: Omit<TokenAnimationContext, "promise">,    options: TokenAnimationOptions,): CanvasAnimationAttribute[]ProtectedPrepare the animation data changes: performs special handling required for animating rotation.
Parametersfrom: DeepReadonly<TokenAnimationData>The animation data to animate from
changes: Partial<TokenAnimationData>The animation data changes
context: Omit<TokenAnimationContext, "promise">The animation context
options: TokenAnimationOptionsThe options that configure the animation behavior
Returns CanvasAnimationAttribute[]The animation attributes
- from: DeepReadonly<TokenAnimationData>The animation data to animate from
- changes: Partial<TokenAnimationData>The animation data changes
- context: Omit<TokenAnimationContext, "promise">The animation context
- options: TokenAnimationOptionsThe options that configure the animation behavior

`Protected`Prepare the animation data changes: performs special handling required for animating rotation.


#### Parameters

- from: DeepReadonly<TokenAnimationData>The animation data to animate from
- changes: Partial<TokenAnimationData>The animation data changes
- context: Omit<TokenAnimationContext, "promise">The animation context
- options: TokenAnimationOptionsThe options that configure the animation behavior

The animation data to animate from

The animation data changes

The animation context

The options that configure the animation behavior


#### Returns CanvasAnimationAttribute[]

The animation attributes


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

`Protected`- _refreshBorder(): voidProtectedRefresh the border.
Returns void

`Protected`Refresh the border.


#### Returns void


### Protected_refreshEffects

`Protected`- _refreshEffects(): voidProtectedRefresh the display of status effects, adjusting their position for the token width and height.
Returns void

`Protected`Refresh the display of status effects, adjusting their position for the token width and height.


#### Returns void


### Protected_refreshElevation

`Protected`- _refreshElevation(): voidProtectedRefresh the elevation
Returns void

`Protected`Refresh the elevation


#### Returns void


### Protected_refreshMesh

`Protected`- _refreshMesh(): voidProtectedRefresh the token mesh.
Returns void

`Protected`Refresh the token mesh.


#### Returns void


### Protected_refreshMeshSizeAndScale

`Protected`- _refreshMeshSizeAndScale(): voidProtectedResize mesh and handle scale adjustment.
Returns void

`Protected`Resize mesh and handle scale adjustment.


#### Returns void


### Protected_refreshNameplate

`Protected`- _refreshNameplate(): voidProtectedRefresh the text content, position, and visibility of the Token nameplate.
Returns void

`Protected`Refresh the text content, position, and visibility of the Token nameplate.


#### Returns void


### Protected_refreshPosition

`Protected`- _refreshPosition(): voidProtectedRefresh the position.
Returns void

`Protected`Refresh the position.


#### Returns void


### Protected_refreshRingVisuals

`Protected`- _refreshRingVisuals(): voidProtectedRefresh the token ring visuals if necessary.
Returns void

`Protected`Refresh the token ring visuals if necessary.


#### Returns void


### Protected_refreshRotation

`Protected`- _refreshRotation(): voidProtectedRefresh the rotation.
Returns void

`Protected`Refresh the rotation.


#### Returns void


### Protected_refreshRuler

`Protected`- _refreshRuler(): voidProtectedRefresh the display of the ruler.
Returns void

`Protected`Refresh the display of the ruler.


#### Returns void


### Protected_refreshShader

`Protected`- _refreshShader(): voidProtectedRefresh the token mesh shader.
Returns void

`Protected`Refresh the token mesh shader.


#### Returns void


### Protected_refreshShape

`Protected`- _refreshShape(): voidProtectedRefresh the shape.
Returns void

`Protected`Refresh the shape.


#### Returns void


### Protected_refreshSize

`Protected`- _refreshSize(): voidProtectedRefresh the size.
Returns void

`Protected`Refresh the size.


#### Returns void


### Protected_refreshState

`Protected`- _refreshState(): voidProtectedRefresh aspects of the user interaction state.
For example the border, nameplate, or bars may be shown on Hover or on Control.
Returns void

`Protected`Refresh aspects of the user interaction state.
For example the border, nameplate, or bars may be shown on Hover or on Control.


#### Returns void


### Protected_refreshTarget

`Protected`- _refreshTarget(): voidProtectedRefresh the target indicators for the Token.
Draw both target arrows for the primary User and indicator pips for other Users targeting the same Token.
Returns void

`Protected`Refresh the target indicators for the Token.
Draw both target arrows for the primary User and indicator pips for other Users targeting the same Token.


#### Returns void


### Protected_refreshTooltip

`Protected`- _refreshTooltip(): voidProtectedRefresh the tooltip.
Returns void

`Protected`Refresh the tooltip.


#### Returns void


### Protected_refreshTurnMarker

`Protected`- _refreshTurnMarker(): voidProtectedRefresh presentation of the Token's combat turn marker, if any.
Returns void

`Protected`Refresh presentation of the Token's combat turn marker, if any.


#### Returns void


### Protected_refreshVisibility

`Protected`- _refreshVisibility(): voidProtectedRefresh the visibility.
Returns void

`Protected`Refresh the visibility.


#### Returns void


### Protected_removeDragWaypoint

`Protected`- _removeDragWaypoint(): voidProtectedRemove last ruler waypoints and update ruler paths.
Returns void

`Protected`Remove last ruler waypoints and update ruler paths.


#### Returns void


### Protected_renderDetectionFilter

`Protected`- _renderDetectionFilter(renderer: Renderer): voidProtectedRender the bound mesh detection filter.
Note: this method does not verify that the detection filter exists.
Parametersrenderer: RendererReturns void
- renderer: Renderer

`Protected`Render the bound mesh detection filter.
Note: this method does not verify that the detection filter exists.


#### Parameters

- renderer: Renderer


#### Returns void


### Protected_requiresRotationAnimation

`Protected`- _requiresRotationAnimation(): booleanProtectedDoes this Token require rotation changes to be animated?
If false is returned, the rotation speed is set to infinity.
Returns boolean

`Protected`Does this Token require rotation changes to be animated?
If false is returned, the rotation speed is set to infinity.


#### Returns boolean


### Protected_shouldPreventDragLeftDrop

`Protected`- _shouldPreventDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): booleanProtectedPrevent the drop event?
Called by Token#_onDragLeftDrop.
Parametersevent: FederatedEvent<UIEvent | PixiTouch>The pointerup event
Returns boolean
- event: FederatedEvent<UIEvent | PixiTouch>The pointerup event

`Protected`Prevent the drop event?
Called by Token#_onDragLeftDrop.


#### Parameters

- event: FederatedEvent<UIEvent | PixiTouch>The pointerup event

The pointerup event


#### Returns boolean


### Protected_triggerDragLeftCancel

`Protected`- _triggerDragLeftCancel(): voidProtectedCancel the drag workflow. This cancellation cannot be prevented by Token#_onDragLeftCancel.
Returns void

`Protected`Cancel the drag workflow. This cancellation cannot be prevented by Token#_onDragLeftCancel.


#### Returns void


### Protected_triggerDragLeftDrop

`Protected`- _triggerDragLeftDrop(): voidProtectedTrigger drop event. This drop cannot be prevented by Token#_shouldPreventDragLeftDrop.
Returns void

`Protected`Trigger drop event. This drop cannot be prevented by Token#_shouldPreventDragLeftDrop.


#### Returns void


### Protected_updateDragDestination

`Protected`- _updateDragDestination(point: Point, options?: { snap?: boolean }): voidProtectedUpdate the destinations of the drag previews and rulers
Parameterspoint: PointThe (unsnapped) center point of the waypoint
Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the destination?
Returns void
- point: PointThe (unsnapped) center point of the waypoint
- Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the destination?
- Optionalsnap?: booleanSnap the destination?

`Protected`Update the destinations of the drag previews and rulers


#### Parameters

- point: PointThe (unsnapped) center point of the waypoint
- Optionaloptions: { snap?: boolean } = {}Additional options
Optionalsnap?: booleanSnap the destination?
- Optionalsnap?: booleanSnap the destination?

The (unsnapped) center point of the waypoint

`Optional`Additional options

- Optionalsnap?: booleanSnap the destination?


##### Optionalsnap?: boolean

`Optional`Snap the destination?


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


### Static_configureAnimationMovementSpeed

`Static`- _configureAnimationMovementSpeed(    operation: DatabaseUpdateOperation,    origin: TokenPosition,    waypoints: TokenMovementWaypoint[],): voidInternalConfigure the animation movement speed based on the given animation duration.
Parametersoperation: DatabaseUpdateOperationThe update operation
origin: TokenPositionThe origin
waypoints: TokenMovementWaypoint[]The candidante waypoints
Returns void
- operation: DatabaseUpdateOperationThe update operation
- origin: TokenPositionThe origin
- waypoints: TokenMovementWaypoint[]The candidante waypoints

`Internal`Configure the animation movement speed based on the given animation duration.


#### Parameters

- operation: DatabaseUpdateOperationThe update operation
- origin: TokenPositionThe origin
- waypoints: TokenMovementWaypoint[]The candidante waypoints

The update operation

The origin

The candidante waypoints


#### Returns void


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


### Static_getDropActorPosition

`Static`- _getDropActorPosition(    token: TokenDocument,    point: { elevation?: number; x: number; y: number },    options?: { snap?: boolean },): TokenPositionInternalGet the drop position for the given token.
Parameterstoken: TokenDocumentpoint: { elevation?: number; x: number; y: number }Optionaloptions: { snap?: boolean } = {}Returns TokenPositionSeefoundry.canvas.layers.TokenLayer#_onDropActorData
- token: TokenDocument
- point: { elevation?: number; x: number; y: number }
- Optionaloptions: { snap?: boolean } = {}

`Internal`Get the drop position for the given token.


#### Parameters

- token: TokenDocument
- point: { elevation?: number; x: number; y: number }
- Optionaloptions: { snap?: boolean } = {}

`Optional`
#### Returns TokenPosition


#### See

foundry.canvas.layers.TokenLayer#_onDropActorData


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

