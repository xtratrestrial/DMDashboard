# TileHUD | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.hud.TileHUD.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- hud
- TileHUD


# Class TileHUD

An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.
The TileHUD implementation can be configured and replaced via CONFIG.Tile.hudClass.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- BasePlaceableHUD<canvas.placeables.Tile, TileDocument, TilesLayer, this>TileHUD
- TileHUD

- TileHUD


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new TileHUD(options?: Partial<ApplicationConfiguration>): TileHUDApplications are constructed by providing an object of configuration options.
ParametersOptionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance
Returns TileHUDInherited from HandlebarsApplicationMixin(BasePlaceableHUD).constructor
- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

Applications are constructed by providing an object of configuration options.


#### Parameters

- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

`Optional`Options used to configure the Application instance


#### Returns TileHUD

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).constructor


## Properties


### options

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).options


### position

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).position


### tabGroups

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

`null`Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).tabGroups


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._maxZ


### StaticBASE_APPLICATION

`Static`Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`
#### Inherit Doc

Overrides HandlebarsApplicationMixin(BasePlaceableHUD).DEFAULT_OPTIONS


### StaticemittedEvents

`Static`Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).emittedEvents


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(BasePlaceableHUD).PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).TABS


## Accessors


### activePalette

- get activePalette(): null | stringThe palette that is currently expanded, if any.
Returns null | stringInherited from HandlebarsApplicationMixin(BasePlaceableHUD).activePalette

The palette that is currently expanded, if any.


#### Returns null | string

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).activePalette


### classList

- get classList(): DOMTokenListThe CSS class list of this Application instance
Returns DOMTokenListInherited from HandlebarsApplicationMixin(BasePlaceableHUD).classList

The CSS class list of this Application instance


#### Returns DOMTokenList

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).classList


### document

- get document(): ActiveHUDDocumentConvenience access to the Document which this HUD modifies.
Returns ActiveHUDDocumentInherited from HandlebarsApplicationMixin(BasePlaceableHUD).document

Convenience access to the Document which this HUD modifies.


#### Returns ActiveHUDDocument

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).document


### element

- get element(): HTMLElementThe HTMLElement which renders this Application into the DOM.
Returns HTMLElementInherited from HandlebarsApplicationMixin(BasePlaceableHUD).element

The HTMLElement which renders this Application into the DOM.


#### Returns HTMLElement

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).element


### form

- get form(): null | HTMLFormElementDoes this Application have a top-level form element?
Returns null | HTMLFormElementInherited from HandlebarsApplicationMixin(BasePlaceableHUD).form

Does this Application have a top-level form element?


#### Returns null | HTMLFormElement

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).form


### hasFrame

- get hasFrame(): booleanDoes this Application instance render within an outer window frame?
Returns booleanInherited from HandlebarsApplicationMixin(BasePlaceableHUD).hasFrame

Does this Application instance render within an outer window frame?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).hasFrame


### id

- get id(): stringThe HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.
Returns stringInherited from HandlebarsApplicationMixin(BasePlaceableHUD).id

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

`DEFAULT_OPTIONS``uniqueId``_initializeApplicationOptions`
#### Returns string

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).id


### layer

- get layer(): ActiveHUDLayerConvenience access for the canvas layer which this HUD modifies
Returns ActiveHUDLayerInherited from HandlebarsApplicationMixin(BasePlaceableHUD).layer

Convenience access for the canvas layer which this HUD modifies


#### Returns ActiveHUDLayer

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).layer


### minimized

- get minimized(): booleanIs this Application instance currently minimized?
Returns booleanInherited from HandlebarsApplicationMixin(BasePlaceableHUD).minimized

Is this Application instance currently minimized?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).minimized


### object

- get object(): ActiveHUDObjectReference a PlaceableObject this HUD is currently bound to.
Returns ActiveHUDObjectInherited from HandlebarsApplicationMixin(BasePlaceableHUD).object

Reference a PlaceableObject this HUD is currently bound to.


#### Returns ActiveHUDObject

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).object


### rendered

- get rendered(): booleanIs this Application instance currently rendered?
Returns booleanInherited from HandlebarsApplicationMixin(BasePlaceableHUD).rendered

Is this Application instance currently rendered?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).rendered


### state

- get state(): numberThe current render state of the Application.
Returns numberInherited from HandlebarsApplicationMixin(BasePlaceableHUD).state

The current render state of the Application.


#### Returns number

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).state


### title

- get title(): stringA convenience reference to the title of the Application window.
Returns stringInherited from HandlebarsApplicationMixin(BasePlaceableHUD).title

A convenience reference to the title of the Application window.


#### Returns string

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).title


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).window


## Methods


### _awaitTransition

- _awaitTransition(element: HTMLElement, timeout: number): Promise<void>InternalWait for a CSS transition to complete for an element.
Parameterselement: HTMLElementThe element which is transitioning
timeout: numberA timeout in milliseconds in case the transitionend event does not occur
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._awaitTransition
- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

`Internal`Wait for a CSS transition to complete for an element.


#### Parameters

- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

The element which is transitioning

A timeout in milliseconds in case the transitionend event does not occur


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._awaitTransition


### _canRender

- _canRender(__namedParameters: { object: any }): undefined | falseParameters__namedParameters: { object: any }Returns undefined | falseInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._canRender
- __namedParameters: { object: any }


#### Parameters

- __namedParameters: { object: any }


#### Returns undefined | false

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._canRender


### _configureRenderOptions

- _configureRenderOptions(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._configureRenderOptions
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._configureRenderOptions


### _doEvent

- _doEvent(    handler: Function,    options?: {        async?: boolean;        debugText?: string;        eventName?: string;        handlerArgs?: any[];        hookArgs?: any[];        hookName?: string;        hookResponse?: boolean;        parentClassHooks?: boolean;    },): void| Promise<void>InternalPerform an event in the application life-cycle.
Await an internal life-cycle method defined by the class.
Optionally dispatch an event for any registered listeners.
Parametershandler: FunctionA handler function to call
options: {    async?: boolean;    debugText?: string;    eventName?: string;    handlerArgs?: any[];    hookArgs?: any[];    hookName?: string;    hookResponse?: boolean;    parentClassHooks?: boolean;} = {}Options which configure event handling
Optionalasync?: booleanAwait the result of the handler function?
OptionaldebugText?: stringDebugging text to log for the event
OptionaleventName?: stringAn event name to dispatch for registered listeners
OptionalhandlerArgs?: any[]Arguments passed to the handler function
OptionalhookArgs?: any[]Arguments passed to the requested hook function
OptionalhookName?: stringA hook name to dispatch for this and all parent classes
OptionalhookResponse?: booleanAdd the handler response to hookArgs
OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?
Returns void | Promise<void>A promise which resoles once the handler is complete if async is true
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._doEvent
- handler: FunctionA handler function to call
- options: {    async?: boolean;    debugText?: string;    eventName?: string;    handlerArgs?: any[];    hookArgs?: any[];    hookName?: string;    hookResponse?: boolean;    parentClassHooks?: boolean;} = {}Options which configure event handling
Optionalasync?: booleanAwait the result of the handler function?
OptionaldebugText?: stringDebugging text to log for the event
OptionaleventName?: stringAn event name to dispatch for registered listeners
OptionalhandlerArgs?: any[]Arguments passed to the handler function
OptionalhookArgs?: any[]Arguments passed to the requested hook function
OptionalhookName?: stringA hook name to dispatch for this and all parent classes
OptionalhookResponse?: booleanAdd the handler response to hookArgs
OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?
- Optionalasync?: booleanAwait the result of the handler function?
- OptionaldebugText?: stringDebugging text to log for the event
- OptionaleventName?: stringAn event name to dispatch for registered listeners
- OptionalhandlerArgs?: any[]Arguments passed to the handler function
- OptionalhookArgs?: any[]Arguments passed to the requested hook function
- OptionalhookName?: stringA hook name to dispatch for this and all parent classes
- OptionalhookResponse?: booleanAdd the handler response to hookArgs
- OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?

`Internal`Perform an event in the application life-cycle.
Await an internal life-cycle method defined by the class.
Optionally dispatch an event for any registered listeners.


#### Parameters

- handler: FunctionA handler function to call
- options: {    async?: boolean;    debugText?: string;    eventName?: string;    handlerArgs?: any[];    hookArgs?: any[];    hookName?: string;    hookResponse?: boolean;    parentClassHooks?: boolean;} = {}Options which configure event handling
Optionalasync?: booleanAwait the result of the handler function?
OptionaldebugText?: stringDebugging text to log for the event
OptionaleventName?: stringAn event name to dispatch for registered listeners
OptionalhandlerArgs?: any[]Arguments passed to the handler function
OptionalhookArgs?: any[]Arguments passed to the requested hook function
OptionalhookName?: stringA hook name to dispatch for this and all parent classes
OptionalhookResponse?: booleanAdd the handler response to hookArgs
OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?
- Optionalasync?: booleanAwait the result of the handler function?
- OptionaldebugText?: stringDebugging text to log for the event
- OptionaleventName?: stringAn event name to dispatch for registered listeners
- OptionalhandlerArgs?: any[]Arguments passed to the handler function
- OptionalhookArgs?: any[]Arguments passed to the requested hook function
- OptionalhookName?: stringA hook name to dispatch for this and all parent classes
- OptionalhookResponse?: booleanAdd the handler response to hookArgs
- OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?

A handler function to call

Options which configure event handling

- Optionalasync?: booleanAwait the result of the handler function?
- OptionaldebugText?: stringDebugging text to log for the event
- OptionaleventName?: stringAn event name to dispatch for registered listeners
- OptionalhandlerArgs?: any[]Arguments passed to the handler function
- OptionalhookArgs?: any[]Arguments passed to the requested hook function
- OptionalhookName?: stringA hook name to dispatch for this and all parent classes
- OptionalhookResponse?: booleanAdd the handler response to hookArgs
- OptionalparentClassHooks?: booleanCall hooks for parent classes in the inheritance chain?


##### Optionalasync?: boolean

`Optional`Await the result of the handler function?


##### OptionaldebugText?: string

`Optional`Debugging text to log for the event


##### OptionaleventName?: string

`Optional`An event name to dispatch for registered listeners


##### OptionalhandlerArgs?: any[]

`Optional`Arguments passed to the handler function


##### OptionalhookArgs?: any[]

`Optional`Arguments passed to the requested hook function


##### OptionalhookName?: string

`Optional`A hook name to dispatch for this and all parent classes


##### OptionalhookResponse?: boolean

`Optional`Add the handler response to hookArgs


##### OptionalparentClassHooks?: boolean

`Optional`Call hooks for parent classes in the inheritance chain?


#### Returns void | Promise<void>

A promise which resoles once the handler is complete if async is true

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._doEvent


### _onClose

- _onClose(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClose
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClose


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onRender


### _preClose

- _preClose(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preClose
- options: any


#### Parameters

- options: any


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preClose


### _prepareContext

- _prepareContext(    options: any,): Promise<    {        appId: any;        classes: string;        icons: {            combat: string;            defeated: string;            doorClosed: string;            doorLocked: string;            doorOpen: string;            doorSecret: string;            down: string;            effects: string;            light: string;            lightOff: string;            lock: string;            sound: string;            soundOff: string;            template: string;            up: string;            visibility: string;            wallDirection: string;        };        id: string;        isGamePaused: boolean;        isGM: boolean;        lockedClass: string;        visibilityClass: string;    } & { isVideo: boolean; videoIcon: string; videoTitle: string },>Parametersoptions: anyReturns Promise<    {        appId: any;        classes: string;        icons: {            combat: string;            defeated: string;            doorClosed: string;            doorLocked: string;            doorOpen: string;            doorSecret: string;            down: string;            effects: string;            light: string;            lightOff: string;            lock: string;            sound: string;            soundOff: string;            template: string;            up: string;            visibility: string;            wallDirection: string;        };        id: string;        isGamePaused: boolean;        isGM: boolean;        lockedClass: string;        visibilityClass: string;    } & { isVideo: boolean; videoIcon: string; videoTitle: string },>Inherit DocOverrides HandlebarsApplicationMixin(BasePlaceableHUD)._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<    {        appId: any;        classes: string;        icons: {            combat: string;            defeated: string;            doorClosed: string;            doorLocked: string;            doorOpen: string;            doorSecret: string;            down: string;            effects: string;            light: string;            lightOff: string;            lock: string;            sound: string;            soundOff: string;            template: string;            up: string;            visibility: string;            wallDirection: string;        };        id: string;        isGamePaused: boolean;        isGM: boolean;        lockedClass: string;        visibilityClass: string;    } & { isVideo: boolean; videoIcon: string; videoTitle: string },>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(BasePlaceableHUD)._prepareContext


### Abstract_renderHTML

`Abstract`- _renderHTML(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<any>Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.
Parameterscontext: ApplicationRenderContextContext data for the render operation
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns Promise<any>The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderHTML
- context: ApplicationRenderContextContext data for the render operation
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.


#### Parameters

- context: ApplicationRenderContextContext data for the render operation
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

Context data for the render operation

Options which configure application rendering behavior


#### Returns Promise<any>

The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderHTML


### _updatePosition

- _updatePosition(position: any): anyParametersposition: anyReturns anyInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._updatePosition
- position: any


#### Parameters

- position: any


#### Returns any

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._updatePosition


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).addEventListener
- type: stringThe type of event being registered for
- listener: EmittedEventListenerThe listener function called when the event occurs
- Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
- Optionalonce?: booleanShould the event only be responded to once and then removed

Add a new event listener for a certain type of event.


#### Parameters

- type: stringThe type of event being registered for
- listener: EmittedEventListenerThe listener function called when the event occurs
- Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
- Optionalonce?: booleanShould the event only be responded to once and then removed

The type of event being registered for

The listener function called when the event occurs

`Optional`Options which configure the event listener

- Optionalonce?: booleanShould the event only be responded to once and then removed


##### Optionalonce?: boolean

`Optional`Should the event only be responded to once and then removed


#### Returns void


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).addEventListener


### bind

- bind(object: canvas.placeables.Tile): Promise<void>Bind the HUD to a new PlaceableObject and display it.
Parametersobject: canvas.placeables.TileA PlaceableObject instance to which the HUD should be bound
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).bind
- object: canvas.placeables.TileA PlaceableObject instance to which the HUD should be bound

Bind the HUD to a new PlaceableObject and display it.


#### Parameters

- object: canvas.placeables.TileA PlaceableObject instance to which the HUD should be bound

A PlaceableObject instance to which the HUD should be bound


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).bind


### bringToFront

- bringToFront(): voidBring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD).bringToFront

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).bringToFront


### changeTab

- changeTab(    tab: string,    group: string,    options?: {        event?: Event;        force?: boolean;        navElement?: HTMLElement;        updatePosition?: boolean;    },): voidChange the active tab within a tab group in this Application instance.
Parameterstab: stringThe name of the tab which should become active
group: stringThe name of the tab group which defines the set of tabs
Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD).changeTab
- tab: stringThe name of the tab which should become active
- group: stringThe name of the tab group which defines the set of tabs
- Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
- Optionalevent?: EventAn interaction event which caused the tab change, if any
- Optionalforce?: booleanForce changing the tab even if the new tab is already active
- OptionalnavElement?: HTMLElementAn explicit navigation element being modified
- OptionalupdatePosition?: booleanUpdate application position after changing the tab?

Change the active tab within a tab group in this Application instance.


#### Parameters

- tab: stringThe name of the tab which should become active
- group: stringThe name of the tab group which defines the set of tabs
- Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
- Optionalevent?: EventAn interaction event which caused the tab change, if any
- Optionalforce?: booleanForce changing the tab even if the new tab is already active
- OptionalnavElement?: HTMLElementAn explicit navigation element being modified
- OptionalupdatePosition?: booleanUpdate application position after changing the tab?

The name of the tab which should become active

The name of the tab group which defines the set of tabs

`Optional`Additional options which affect tab navigation

- Optionalevent?: EventAn interaction event which caused the tab change, if any
- Optionalforce?: booleanForce changing the tab even if the new tab is already active
- OptionalnavElement?: HTMLElementAn explicit navigation element being modified
- OptionalupdatePosition?: booleanUpdate application position after changing the tab?


##### Optionalevent?: Event

`Optional`An interaction event which caused the tab change, if any


##### Optionalforce?: boolean

`Optional`Force changing the tab even if the new tab is already active


##### OptionalnavElement?: HTMLElement

`Optional`An explicit navigation element being modified


##### OptionalupdatePosition?: boolean

`Optional`Update application position after changing the tab?


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).changeTab


### close

- close(options?: Partial<ApplicationClosingOptions>): Promise<TileHUD>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<TileHUD>A Promise which resolves to the closed Application instance
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<TileHUD>

A Promise which resolves to the closed Application instance

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).close


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).dispatchEvent


### maximize

- maximize(): Promise<void>Restore the Application to its original dimensions.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).maximize

Restore the Application to its original dimensions.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).maximize


### minimize

- minimize(): Promise<void>Minimize the Application, collapsing it to a minimal header.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).minimize

Minimize the Application, collapsing it to a minimal header.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).minimize


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).removeEventListener
- type: stringThe type of event being removed
- listener: EmittedEventListenerThe listener function being removed

Remove an event listener for a certain type of event.


#### Parameters

- type: stringThe type of event being removed
- listener: EmittedEventListenerThe listener function being removed

The type of event being removed

The listener function being removed


#### Returns void


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).removeEventListener


### render

- render(    options?: boolean | ApplicationRenderOptions,    _options?: ApplicationRenderOptions,): Promise<TileHUD>Render the Application, creating its HTMLElement and replacing its innerHTML.
Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.
ParametersOptionaloptions: boolean | ApplicationRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
Optional_options: ApplicationRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.
Returns Promise<TileHUD>A Promise which resolves to the rendered Application instance
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).render
- Optionaloptions: boolean | ApplicationRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
- Optional_options: ApplicationRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.

Render the Application, creating its HTMLElement and replacing its innerHTML.
Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.


#### Parameters

- Optionaloptions: boolean | ApplicationRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
- Optional_options: ApplicationRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.

`Optional`Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.

`Optional`Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.


#### Returns Promise<TileHUD>

A Promise which resolves to the rendered Application instance

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).render


### setPosition

- setPosition(position?: Partial<ApplicationPosition>): void | ApplicationPositionUpdate the Application element position using provided data which is merged with the prior position.
ParametersOptionalposition: Partial<ApplicationPosition>New Application positioning data
Returns void | ApplicationPositionThe updated application position
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).setPosition
- Optionalposition: Partial<ApplicationPosition>New Application positioning data

Update the Application element position using provided data which is merged with the prior position.


#### Parameters

- Optionalposition: Partial<ApplicationPosition>New Application positioning data

`Optional`New Application positioning data


#### Returns void | ApplicationPosition

The updated application position

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).setPosition


### submit

- submit(submitOptions?: object): Promise<any>Programmatically submit an ApplicationV2 instance which implements a single top-level form.
ParametersOptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.
Returns Promise<any>A promise that resolves to the returned result of the form submission handler,
if any.
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).submit
- OptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.

Programmatically submit an ApplicationV2 instance which implements a single top-level form.


#### Parameters

- OptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.

`Optional`Arbitrary options which are supported by and provided to the configured form
submission handler.


#### Returns Promise<any>

A promise that resolves to the returned result of the form submission handler,
if any.

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).submit


### toggleControls

- toggleControls(    expanded?: boolean,    options?: { animate?: boolean },): Promise<void>Toggle display of the Application controls menu.
Only applicable to window Applications.
ParametersOptionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
Returns Promise<void>A Promise which resolves once the control expansion animation is complete
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).toggleControls
- Optionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
- Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
- Optionalanimate?: booleanAnimate the controls toggling.

Toggle display of the Application controls menu.
Only applicable to window Applications.


#### Parameters

- Optionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
- Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
- Optionalanimate?: booleanAnimate the controls toggling.

`Optional`Set the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value

`Optional`Options to configure the toggling behavior.

- Optionalanimate?: booleanAnimate the controls toggling.


##### Optionalanimate?: boolean

`Optional`Animate the controls toggling.


#### Returns Promise<void>

A Promise which resolves once the control expansion animation is complete

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).toggleControls


### togglePalette

- togglePalette(palette: null | string, active?: boolean): voidToggle the expanded state of the given palette.
Parameterspalette: null | stringThe palette to toggle or null to collapse of the currently expanded palette
Optionalactive: booleanForce the palette to be active or inactive
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD).togglePalette
- palette: null | stringThe palette to toggle or null to collapse of the currently expanded palette
- Optionalactive: booleanForce the palette to be active or inactive

Toggle the expanded state of the given palette.


#### Parameters

- palette: null | stringThe palette to toggle or null to collapse of the currently expanded palette
- Optionalactive: booleanForce the palette to be active or inactive

The palette to toggle or null to collapse of the currently expanded palette

`Optional`Force the palette to be active or inactive


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).togglePalette


### Protected_attachFrameListeners

`Protected`- _attachFrameListeners(): voidProtectedAttach event listeners to the Application frame.
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._attachFrameListeners

`Protected`Attach event listeners to the Application frame.


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._attachFrameListeners


### Protected_createContextMenu

`Protected`- _createContextMenu(    handler: () => ContextMenuEntry[],    selector: string,    options?: {        container?: HTMLElement;        hookName?: string;        parentClassHooks?: boolean;    },): null| ContextMenuProtectedCreate a ContextMenu instance used in this Application.
Parametershandler: () => ContextMenuEntry[]A handler function that provides initial context options
selector: stringA CSS selector to which the ContextMenu will be bound
Optionaloptions: { container?: HTMLElement; hookName?: string; parentClassHooks?: boolean } = {}Additional options which affect ContextMenu construction
Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
OptionalhookName?: stringThe hook name
OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.
Returns null | ContextMenuA created ContextMenu or null if no menu items were defined
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._createContextMenu
- handler: () => ContextMenuEntry[]A handler function that provides initial context options
- selector: stringA CSS selector to which the ContextMenu will be bound
- Optionaloptions: { container?: HTMLElement; hookName?: string; parentClassHooks?: boolean } = {}Additional options which affect ContextMenu construction
Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
OptionalhookName?: stringThe hook name
OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.
- Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
- OptionalhookName?: stringThe hook name
- OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.

`Protected`Create a ContextMenu instance used in this Application.


#### Parameters

- handler: () => ContextMenuEntry[]A handler function that provides initial context options
- selector: stringA CSS selector to which the ContextMenu will be bound
- Optionaloptions: { container?: HTMLElement; hookName?: string; parentClassHooks?: boolean } = {}Additional options which affect ContextMenu construction
Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
OptionalhookName?: stringThe hook name
OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.
- Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
- OptionalhookName?: stringThe hook name
- OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.

A handler function that provides initial context options

A CSS selector to which the ContextMenu will be bound

`Optional`Additional options which affect ContextMenu construction

- Optionalcontainer?: HTMLElementA parent HTMLElement which contains the selector target
- OptionalhookName?: stringThe hook name
- OptionalparentClassHooks?: booleanWhether to call hooks for the parent classes in the inheritance
chain.


##### Optionalcontainer?: HTMLElement

`Optional`A parent HTMLElement which contains the selector target


##### OptionalhookName?: string

`Optional`The hook name


##### OptionalparentClassHooks?: boolean

`Optional`Whether to call hooks for the parent classes in the inheritance
chain.


#### Returns null | ContextMenu

A created ContextMenu or null if no menu items were defined

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._createContextMenu


### Protected_getHeaderControls

`Protected`- _getHeaderControls(): ApplicationHeaderControlsEntry[]ProtectedConfigure the array of header control menu options
Returns ApplicationHeaderControlsEntry[]Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._getHeaderControls

`Protected`Configure the array of header control menu options


#### Returns ApplicationHeaderControlsEntry[]

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._getHeaderControls


### Protected_getTabsConfig

`Protected`- _getTabsConfig(group: string): null | ApplicationTabsConfigurationProtectedGet the configuration for a tabs group.
Parametersgroup: stringThe ID of a tabs group
Returns null | ApplicationTabsConfigurationInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._getTabsConfig
- group: stringThe ID of a tabs group

`Protected`Get the configuration for a tabs group.


#### Parameters

- group: stringThe ID of a tabs group

The ID of a tabs group


#### Returns null | ApplicationTabsConfiguration

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._getTabsConfig


### Protected_headerControlButtons

`Protected`- _headerControlButtons(): Generator<ApplicationHeaderControlsEntry, any, any>ProtectedIterate over header control buttons, filtering for controls which are visible for the current client.
Returns Generator<ApplicationHeaderControlsEntry, any, any>YieldsInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._headerControlButtons

`Protected`Iterate over header control buttons, filtering for controls which are visible for the current client.


#### Returns Generator<ApplicationHeaderControlsEntry, any, any>


#### Yields

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._headerControlButtons


### Protected_initializeApplicationOptions

`Protected`- _initializeApplicationOptions(    options: Partial<ApplicationConfiguration>,): ApplicationConfigurationProtectedInitialize configuration options for the Application instance.
The default behavior of this method is to intelligently merge options for each class with those of their parents.

Array-based options are concatenated
Inner objects are merged
Otherwise, properties in the subclass replace those defined by a parent

Parametersoptions: Partial<ApplicationConfiguration>Options provided directly to the constructor
Returns ApplicationConfigurationConfigured options for the application instance
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._initializeApplicationOptions
- Array-based options are concatenated
- Inner objects are merged
- Otherwise, properties in the subclass replace those defined by a parent
- options: Partial<ApplicationConfiguration>Options provided directly to the constructor

`Protected`Initialize configuration options for the Application instance.
The default behavior of this method is to intelligently merge options for each class with those of their parents.

- Array-based options are concatenated
- Inner objects are merged
- Otherwise, properties in the subclass replace those defined by a parent


#### Parameters

- options: Partial<ApplicationConfiguration>Options provided directly to the constructor

Options provided directly to the constructor


#### Returns ApplicationConfiguration

Configured options for the application instance

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._initializeApplicationOptions


### Protected_insertElement

`Protected`- _insertElement(element: HTMLElement): voidProtectedInsert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.
Parameterselement: HTMLElementThe element to insert
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._insertElement
- element: HTMLElementThe element to insert

`Protected`Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.


#### Parameters

- element: HTMLElementThe element to insert

The element to insert


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._insertElement


### Protected_onChangeForm

`Protected`- _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): voidProtectedHandle changes to an input element within the form.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: EventAn input change event within the form
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onChangeForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

`Protected`Handle changes to an input element within the form.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

The form configuration for which this handler is bound

An input change event within the form


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onChangeForm


### Protected_onClickAction

`Protected`- _onClickAction(event: PointerEvent, target: HTMLElement): voidProtectedA generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.
Parametersevent: PointerEventThe originating click event
target: HTMLElementThe capturing HTML element which defined a [data-action]
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClickAction
- event: PointerEventThe originating click event
- target: HTMLElementThe capturing HTML element which defined a [data-action]

`Protected`A generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.


#### Parameters

- event: PointerEventThe originating click event
- target: HTMLElementThe capturing HTML element which defined a [data-action]

The originating click event

The capturing HTML element which defined a [data-action]


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClickAction


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onClickTab


### Protected_onFirstRender

`Protected`- _onFirstRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed after a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onFirstRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed after a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onFirstRender


### Protected_onPosition

`Protected`- _onPosition(position: ApplicationPosition): voidProtectedActions performed after the Application is re-positioned.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onPosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed after the Application is re-positioned.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onPosition


### Protected_onSubmit

`Protected`- _onSubmit(    event: SubmitEvent,    form: HTMLFormElement,    formData: FormDataExtended,): Promise<void>ProtectedHandle submission of the BasePlaceableHUD form.
Parametersevent: SubmitEventform: HTMLFormElementformData: FormDataExtendedReturns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onSubmit
- event: SubmitEvent
- form: HTMLFormElement
- formData: FormDataExtended

`Protected`Handle submission of the BasePlaceableHUD form.


#### Parameters

- event: SubmitEvent
- form: HTMLFormElement
- formData: FormDataExtended


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onSubmit


### Protected_onSubmitForm

`Protected`- _onSubmitForm(    formConfig: ApplicationFormConfiguration,    event: Event | SubmitEvent,): Promise<void>ProtectedHandle submission for an Application which uses the form element.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: Event | SubmitEventThe form submission event
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onSubmitForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

`Protected`Handle submission for an Application which uses the form element.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

The form configuration for which this handler is bound

The form submission event


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._onSubmitForm


### Protected_parseAttributeInput

`Protected`- _parseAttributeInput(    name: string,    attr: number | object,    input: string,): { isBar: boolean; isDelta: boolean; value: number }ProtectedParse an attribute bar input string into a new value for the attribute field.
Parametersname: stringThe name of the attribute
attr: number | objectThe current value of the attribute
input: stringThe raw string input value
Returns { isBar: boolean; isDelta: boolean; value: number }The parsed input value
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._parseAttributeInput
- name: stringThe name of the attribute
- attr: number | objectThe current value of the attribute
- input: stringThe raw string input value

`Protected`Parse an attribute bar input string into a new value for the attribute field.


#### Parameters

- name: stringThe name of the attribute
- attr: number | objectThe current value of the attribute
- input: stringThe raw string input value

The name of the attribute

The current value of the attribute

The raw string input value


#### Returns { isBar: boolean; isDelta: boolean; value: number }

The parsed input value

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._parseAttributeInput


### Protected_postRender

`Protected`- _postRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedPerform post-render finalization actions.
Parameterscontext: ApplicationRenderContextPrepared context data.
options: ApplicationRenderOptionsProvided render options.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._postRender
- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

`Protected`Perform post-render finalization actions.


#### Parameters

- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

Prepared context data.

Provided render options.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._postRender


### Protected_preFirstRender

`Protected`- _preFirstRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preFirstRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preFirstRender


### Protected_prepareTabs

`Protected`- _prepareTabs(group: string): Record<string, ApplicationTab>ProtectedPrepare application tab data for a single tab group.
Parametersgroup: stringThe ID of the tab group to prepare
Returns Record<string, ApplicationTab>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._prepareTabs
- group: stringThe ID of the tab group to prepare

`Protected`Prepare application tab data for a single tab group.


#### Parameters

- group: stringThe ID of the tab group to prepare

The ID of the tab group to prepare


#### Returns Record<string, ApplicationTab>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._prepareTabs


### Protected_prePosition

`Protected`- _prePosition(position: ApplicationPosition): voidProtectedActions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._prePosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._prePosition


### Protected_preRender

`Protected`- _preRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before any render of the Application.
Pre-render steps are awaited by the render process.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before any render of the Application.
Pre-render steps are awaited by the render process.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._preRender


### Protected_removeElement

`Protected`- _removeElement(element: HTMLElement): voidProtectedRemove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.
Parameterselement: HTMLElementThe element to be removed
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._removeElement
- element: HTMLElementThe element to be removed

`Protected`Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.


#### Parameters

- element: HTMLElementThe element to be removed

The element to be removed


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._removeElement


### Protected_renderFrame

`Protected`- _renderFrame(options: ApplicationRenderOptions): Promise<HTMLElement>ProtectedRender the outer framing HTMLElement which wraps the inner HTML of the Application.
Parametersoptions: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns Promise<HTMLElement>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderFrame
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

`Protected`Render the outer framing HTMLElement which wraps the inner HTML of the Application.


#### Parameters

- options: ApplicationRenderOptionsOptions which configure application rendering behavior

Options which configure application rendering behavior


#### Returns Promise<HTMLElement>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderFrame


### Protected_renderHeaderControl

`Protected`- _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElementProtectedRender a header control button.
Parameterscontrol: ApplicationHeaderControlsEntryReturns HTMLLIElementInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderHeaderControl
- control: ApplicationHeaderControlsEntry

`Protected`Render a header control button.


#### Parameters

- control: ApplicationHeaderControlsEntry


#### Returns HTMLLIElement

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._renderHeaderControl


### Protected_replaceHTML

`Protected`- _replaceHTML(    result: any,    content: HTMLElement,    options: ApplicationRenderOptions,): voidProtectedReplace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.
Parametersresult: anyThe result returned by the application rendering backend
content: HTMLElementThe content element into which the rendered result must be inserted
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._replaceHTML
- result: anyThe result returned by the application rendering backend
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

`Protected`Replace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.


#### Parameters

- result: anyThe result returned by the application rendering backend
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

The result returned by the application rendering backend

The content element into which the rendered result must be inserted

Options which configure application rendering behavior


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._replaceHTML


### Protected_tearDown

`Protected`- _tearDown(options: ApplicationClosingOptions): voidProtectedRemove elements from the DOM and trigger garbage collection as part of application closure.
Parametersoptions: ApplicationClosingOptionsReturns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._tearDown
- options: ApplicationClosingOptions

`Protected`Remove elements from the DOM and trigger garbage collection as part of application closure.


#### Parameters

- options: ApplicationClosingOptions


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._tearDown


### Protected_updateFrame

`Protected`- _updateFrame(options: ApplicationRenderOptions): voidProtectedWhen the Application is rendered, optionally update aspects of the window frame.
Parametersoptions: ApplicationRenderOptionsOptions provided at render-time
Returns voidInherited from HandlebarsApplicationMixin(BasePlaceableHUD)._updateFrame
- options: ApplicationRenderOptionsOptions provided at render-time

`Protected`When the Application is rendered, optionally update aspects of the window frame.


#### Parameters

- options: ApplicationRenderOptionsOptions provided at render-time

Options provided at render-time


#### Returns void

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD)._updateFrame


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from HandlebarsApplicationMixin(BasePlaceableHUD).inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).parseCSSDimension
- style: stringThe CSS style rule
- parentDimension: numberThe relevant dimension of the parent element

Parse a CSS style rule into a number of pixels which apply to that dimension.


#### Parameters

- style: stringThe CSS style rule
- parentDimension: numberThe relevant dimension of the parent element

The CSS style rule

The relevant dimension of the parent element


#### Returns number | void

The parsed style dimension in pixels

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(BasePlaceableHUD).waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

