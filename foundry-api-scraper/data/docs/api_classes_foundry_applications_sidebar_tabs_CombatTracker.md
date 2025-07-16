# CombatTracker | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.CombatTracker.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sidebar
- tabs
- CombatTracker


# Class CombatTracker

An Application that manages switching between Combats and tracking the Combatants in those Combats.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions, this>CombatTracker
- CombatTracker

- CombatTracker


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new CombatTracker(options?: Partial<ApplicationConfiguration>): CombatTrackerApplications are constructed by providing an object of configuration options.
ParametersOptionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance
Returns CombatTrackerInherited from HandlebarsApplicationMixin(AbstractSidebarTab).constructor
- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

Applications are constructed by providing an object of configuration options.


#### Parameters

- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

`Optional`Options used to configure the Application instance


#### Returns CombatTracker

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).constructor


## Properties


### options

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).options


### position

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).position


### tabGroups

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

`null`Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).tabGroups


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`
#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).DEFAULT_OPTIONS


### StaticemittedEvents

`Static`Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).emittedEvents


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER_STATES


### StatictabName

`Static`
### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS


## Accessors


### active

- get active(): booleanWhether this tab is currently active in the sidebar.
Returns booleanInherited from HandlebarsApplicationMixin(AbstractSidebarTab).active

Whether this tab is currently active in the sidebar.


#### Returns boolean

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).active


### classList

- get classList(): DOMTokenListThe CSS class list of this Application instance
Returns DOMTokenListInherited from HandlebarsApplicationMixin(AbstractSidebarTab).classList

The CSS class list of this Application instance


#### Returns DOMTokenList

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).classList


### combats

- get combats(): documents.Combat[]The list combats applicable to the active Scene.
Returns documents.Combat[]

The list combats applicable to the active Scene.


#### Returns documents.Combat[]


### element

- get element(): HTMLElementThe HTMLElement which renders this Application into the DOM.
Returns HTMLElementInherited from HandlebarsApplicationMixin(AbstractSidebarTab).element

The HTMLElement which renders this Application into the DOM.


#### Returns HTMLElement

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).element


### form

- get form(): null | HTMLFormElementDoes this Application have a top-level form element?
Returns null | HTMLFormElementInherited from HandlebarsApplicationMixin(AbstractSidebarTab).form

Does this Application have a top-level form element?


#### Returns null | HTMLFormElement

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).form


### hasFrame

- get hasFrame(): booleanDoes this Application instance render within an outer window frame?
Returns booleanInherited from HandlebarsApplicationMixin(AbstractSidebarTab).hasFrame

Does this Application instance render within an outer window frame?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).hasFrame


### id

- get id(): stringThe HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.
Returns stringInherited from HandlebarsApplicationMixin(AbstractSidebarTab).id

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

`DEFAULT_OPTIONS``uniqueId``_initializeApplicationOptions`
#### Returns string

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).id


### isPopout

- get isPopout(): booleanWhether this is the popped-out tab or the in-sidebar one.
Returns booleanInherited from HandlebarsApplicationMixin(AbstractSidebarTab).isPopout

Whether this is the popped-out tab or the in-sidebar one.


#### Returns boolean

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).isPopout


### minimized

- get minimized(): booleanIs this Application instance currently minimized?
Returns booleanInherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimized

Is this Application instance currently minimized?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimized


### popout

- get popout(): | void| AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>A reference to the popped-out version of this tab, if one exists.
Returns void | AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).popout

A reference to the popped-out version of this tab, if one exists.


#### Returns void | AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).popout


### rendered

- get rendered(): booleanIs this Application instance currently rendered?
Returns booleanInherited from HandlebarsApplicationMixin(AbstractSidebarTab).rendered

Is this Application instance currently rendered?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).rendered


### state

- get state(): numberThe current render state of the Application.
Returns numberInherited from HandlebarsApplicationMixin(AbstractSidebarTab).state

The current render state of the Application.


#### Returns number

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).state


### tabName

- get tabName(): stringThe base name of the sidebar tab.
Returns stringInherited from HandlebarsApplicationMixin(AbstractSidebarTab).tabName

The base name of the sidebar tab.


#### Returns string

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).tabName


### title

- get title(): stringA convenience reference to the title of the Application window.
Returns stringInherited from HandlebarsApplicationMixin(AbstractSidebarTab).title

A convenience reference to the title of the Application window.


#### Returns string

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).title


### viewed

- get viewed(): null | documents.CombatRecord the currently tracked combat encounter.
Returns null | documents.Combat

Record the currently tracked combat encounter.


#### Returns null | documents.Combat


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).window


## Methods


### _attachFrameListeners

- _attachFrameListeners(): voidReturns voidInherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._attachFrameListeners


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._attachFrameListeners


### _awaitTransition

- _awaitTransition(element: HTMLElement, timeout: number): Promise<void>InternalWait for a CSS transition to complete for an element.
Parameterselement: HTMLElementThe element which is transitioning
timeout: numberA timeout in milliseconds in case the transitionend event does not occur
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._awaitTransition
- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

`Internal`Wait for a CSS transition to complete for an element.


#### Parameters

- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

The element which is transitioning

A timeout in milliseconds in case the transitionend event does not occur


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._awaitTransition


### _configureRenderOptions

- _configureRenderOptions(options: any): voidParametersoptions: anyReturns voidInherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._configureRenderOptions
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._configureRenderOptions


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
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._doEvent
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._doEvent


### _initializeApplicationOptions

- _initializeApplicationOptions(options: any): ApplicationConfigurationParametersoptions: anyReturns ApplicationConfigurationInherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._initializeApplicationOptions
- options: any


#### Parameters

- options: any


#### Returns ApplicationConfiguration


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._initializeApplicationOptions


### _onClickAction

- _onClickAction(event: any, target: any): Promise<void>Parametersevent: anytarget: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onClickAction
- event: any
- target: any


#### Parameters

- event: any
- target: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onClickAction


### _onClose

- _onClose(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClose
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClose


### _onFirstRender

- _onFirstRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onFirstRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onFirstRender


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onRender


### _prepareContext

- _prepareContext(options: any): Promise<ApplicationRenderContext>Parametersoptions: anyReturns Promise<ApplicationRenderContext>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<ApplicationRenderContext>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prepareContext


### _preparePartContext

- _preparePartContext(partId: any, context: any, options: any): Promise<any>ParameterspartId: anycontext: anyoptions: anyReturns Promise<any>Inherit Doc
- partId: any
- context: any
- options: any


#### Parameters

- partId: any
- context: any
- options: any


#### Returns Promise<any>


#### Inherit Doc


### _renderFrame

- _renderFrame(options: any): Promise<HTMLElement>Parametersoptions: anyReturns Promise<HTMLElement>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderFrame
- options: any


#### Parameters

- options: any


#### Returns Promise<HTMLElement>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderFrame


### Abstract_renderHTML

`Abstract`- _renderHTML(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<any>Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.
Parameterscontext: ApplicationRenderContextContext data for the render operation
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns Promise<any>The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderHTML
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderHTML


### activate

- activate(): voidActivate this tab in the sidebar.
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab).activate

Activate this tab in the sidebar.


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).activate


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).addEventListener
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).addEventListener


### bringToFront

- bringToFront(): voidBring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab).bringToFront

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).bringToFront


### changeTab

- changeTab(    tab: string,    group: string,    options?: {        event?: Event;        force?: boolean;        navElement?: HTMLElement;        updatePosition?: boolean;    },): voidChange the active tab within a tab group in this Application instance.
Parameterstab: stringThe name of the tab which should become active
group: stringThe name of the tab group which defines the set of tabs
Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab).changeTab
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).changeTab


### close

- close(options?: Partial<ApplicationClosingOptions>): Promise<CombatTracker>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<CombatTracker>A Promise which resolves to the closed Application instance
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<CombatTracker>

A Promise which resolves to the closed Application instance

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).dispatchEvent


### hoverCombatant

- hoverCombatant(combatant: Combatant, hover: boolean): voidHighlight a hovered combatant in the tracker.
Parameterscombatant: CombatantThe Combatant.
hover: booleanWhether they are being hovered in or out.
Returns void
- combatant: CombatantThe Combatant.
- hover: booleanWhether they are being hovered in or out.

Highlight a hovered combatant in the tracker.


#### Parameters

- combatant: CombatantThe Combatant.
- hover: booleanWhether they are being hovered in or out.

The Combatant.

Whether they are being hovered in or out.


#### Returns void


### maximize

- maximize(): Promise<void>Restore the Application to its original dimensions.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).maximize

Restore the Application to its original dimensions.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).maximize


### minimize

- minimize(): Promise<void>Minimize the Application, collapsing it to a minimal header.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimize

Minimize the Application, collapsing it to a minimal header.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimize


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).removeEventListener
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).removeEventListener


### render

- render(options: any, _options: any): Promise<CombatTracker>Parametersoptions: any_options: anyReturns Promise<CombatTracker>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab).render
- options: any
- _options: any


#### Parameters

- options: any
- _options: any


#### Returns Promise<CombatTracker>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render


### renderPopout

- renderPopout(): Promise<    AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>,>Pop-out this sidebar tab as a new application.
Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout

Pop-out this sidebar tab as a new application.


#### Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout


### scrollToTurn

- scrollToTurn(): voidScroll to the current combatant in the combat log.
Returns void

Scroll to the current combatant in the combat log.


#### Returns void


### setPosition

- setPosition(position?: Partial<ApplicationPosition>): void | ApplicationPositionUpdate the Application element position using provided data which is merged with the prior position.
ParametersOptionalposition: Partial<ApplicationPosition>New Application positioning data
Returns void | ApplicationPositionThe updated application position
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).setPosition
- Optionalposition: Partial<ApplicationPosition>New Application positioning data

Update the Application element position using provided data which is merged with the prior position.


#### Parameters

- Optionalposition: Partial<ApplicationPosition>New Application positioning data

`Optional`New Application positioning data


#### Returns void | ApplicationPosition

The updated application position

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).setPosition


### submit

- submit(submitOptions?: object): Promise<any>Programmatically submit an ApplicationV2 instance which implements a single top-level form.
ParametersOptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.
Returns Promise<any>A promise that resolves to the returned result of the form submission handler,
if any.
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).submit
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).submit


### toggleControls

- toggleControls(    expanded?: boolean,    options?: { animate?: boolean },): Promise<void>Toggle display of the Application controls menu.
Only applicable to window Applications.
ParametersOptionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
Returns Promise<void>A Promise which resolves once the control expansion animation is complete
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).toggleControls
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).toggleControls


### Protected_canRender

`Protected`- _canRender(options: ApplicationRenderOptions): false | voidProtectedTest whether this Application is allowed to be rendered.
Parametersoptions: ApplicationRenderOptionsProvided render options
Returns false | voidReturn false to prevent rendering
ThrowsAn Error to display a warning message
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._canRender
- options: ApplicationRenderOptionsProvided render options

`Protected`Test whether this Application is allowed to be rendered.


#### Parameters

- options: ApplicationRenderOptionsProvided render options

Provided render options


#### Returns false | void

Return false to prevent rendering


#### Throws

An Error to display a warning message

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._canRender


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
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._createContextMenu
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._createContextMenu


### Protected_formatEffectsTooltip

`Protected`- _formatEffectsTooltip(effects: { img: string; name: string }[]): stringProtectedFormat a tooltip for displaying overflowing effects.
Parameterseffects: { img: string; name: string }[]The effect names and icons.
Returns string
- effects: { img: string; name: string }[]The effect names and icons.

`Protected`Format a tooltip for displaying overflowing effects.


#### Parameters

- effects: { img: string; name: string }[]The effect names and icons.

The effect names and icons.


#### Returns string


### Protected_getCombatantThumbnail

`Protected`- _getCombatantThumbnail(combatant: Combatant): Promise<string>ProtectedRetrieve a source image for a combatant. If it is a video, use the first frame.
Parameterscombatant: CombatantThe Combatant.
Returns Promise<string>The image URL.
- combatant: CombatantThe Combatant.

`Protected`Retrieve a source image for a combatant. If it is a video, use the first frame.


#### Parameters

- combatant: CombatantThe Combatant.

The Combatant.


#### Returns Promise<string>

The image URL.


### Protected_getCombatContextOptions

`Protected`- _getCombatContextOptions(): ContextMenuEntry[]ProtectedGet context menu entries for Combat in the tracker.
Returns ContextMenuEntry[]

`Protected`Get context menu entries for Combat in the tracker.


#### Returns ContextMenuEntry[]


### Protected_getEntryContextOptions

`Protected`- _getEntryContextOptions(): ContextMenuEntry[]ProtectedGet context menu entries for Combatants in the tracker.
Returns ContextMenuEntry[]

`Protected`Get context menu entries for Combatants in the tracker.


#### Returns ContextMenuEntry[]


### Protected_getHeaderControls

`Protected`- _getHeaderControls(): ApplicationHeaderControlsEntry[]ProtectedConfigure the array of header control menu options
Returns ApplicationHeaderControlsEntry[]Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._getHeaderControls

`Protected`Configure the array of header control menu options


#### Returns ApplicationHeaderControlsEntry[]

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._getHeaderControls


### Protected_getTabsConfig

`Protected`- _getTabsConfig(group: string): null | ApplicationTabsConfigurationProtectedGet the configuration for a tabs group.
Parametersgroup: stringThe ID of a tabs group
Returns null | ApplicationTabsConfigurationInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._getTabsConfig
- group: stringThe ID of a tabs group

`Protected`Get the configuration for a tabs group.


#### Parameters

- group: stringThe ID of a tabs group

The ID of a tabs group


#### Returns null | ApplicationTabsConfiguration

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._getTabsConfig


### Protected_headerControlButtons

`Protected`- _headerControlButtons(): Generator<ApplicationHeaderControlsEntry, any, any>ProtectedIterate over header control buttons, filtering for controls which are visible for the current client.
Returns Generator<ApplicationHeaderControlsEntry, any, any>YieldsInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._headerControlButtons

`Protected`Iterate over header control buttons, filtering for controls which are visible for the current client.


#### Returns Generator<ApplicationHeaderControlsEntry, any, any>


#### Yields

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._headerControlButtons


### Protected_insertElement

`Protected`- _insertElement(element: HTMLElement): voidProtectedInsert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.
Parameterselement: HTMLElementThe element to insert
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._insertElement
- element: HTMLElementThe element to insert

`Protected`Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.


#### Parameters

- element: HTMLElementThe element to insert

The element to insert


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._insertElement


### Protected_isTokenVisible

`Protected`- _isTokenVisible(token: Token): booleanProtectedIs the token of the combatant visible?
Parameterstoken: TokenThe token of the combatant
Returns booleanIs the token visible?
- token: TokenThe token of the combatant

`Protected`Is the token of the combatant visible?


#### Parameters

- token: TokenThe token of the combatant

The token of the combatant


#### Returns boolean

Is the token visible?


### Protected_onActivate

`Protected`- _onActivate(): voidProtectedActions performed when this tab is activated in the sidebar.
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onActivate

`Protected`Actions performed when this tab is activated in the sidebar.


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onActivate


### Protected_onChangeForm

`Protected`- _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): voidProtectedHandle changes to an input element within the form.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: EventAn input change event within the form
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onChangeForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

`Protected`Handle changes to an input element within the form.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

The form configuration for which this handler is bound

An input change event within the form


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onChangeForm


### Protected_onChangeInput

`Protected`- _onChangeInput(event: Event): anyProtectedThe CombatTracker application is not a  element by default, but it does handle specific input events.
Parametersevent: EventThe triggering change event.
Returns any
- event: EventThe triggering change event.

`Protected`The CombatTracker application is not a


#### Parameters

- event: EventThe triggering change event.

The triggering change event.


#### Returns any


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickTab


### Protected_onCombatantControl

`Protected`- _onCombatantControl(event: PointerEvent, target: HTMLElement): anyProtectedHandle performing some action for an individual combatant.
Parametersevent: PointerEventThe triggering event.
target: HTMLElementThe action target element.
Returns any
- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

`Protected`Handle performing some action for an individual combatant.


#### Parameters

- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

The triggering event.

The action target element.


#### Returns any


### Protected_onCombatantHoverIn

`Protected`- _onCombatantHoverIn(event: PointerEvent): voidProtectedHandle hovering over a combatant in the tracker.
Parametersevent: PointerEventThe triggering event.
Returns void
- event: PointerEventThe triggering event.

`Protected`Handle hovering over a combatant in the tracker.


#### Parameters

- event: PointerEventThe triggering event.

The triggering event.


#### Returns void


### Protected_onCombatantHoverOut

`Protected`- _onCombatantHoverOut(event: PointerEvent): voidProtectedHandle hovering out a combatant in the tracker.
Parametersevent: PointerEventThe triggering event.
Returns void
- event: PointerEventThe triggering event.

`Protected`Handle hovering out a combatant in the tracker.


#### Parameters

- event: PointerEventThe triggering event.

The triggering event.


#### Returns void


### Protected_onCombatantMouseDown

`Protected`- _onCombatantMouseDown(event: PointerEvent, target: HTMLElement): voidProtectedHandle activating a combatant in the tracker.
Parametersevent: PointerEventThe triggering event.
target: HTMLElementThe action target element.
Returns void
- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

`Protected`Handle activating a combatant in the tracker.


#### Parameters

- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

The triggering event.

The action target element.


#### Returns void


### Protected_onCombatCreate

`Protected`- _onCombatCreate(event: PointerEvent, target: HTMLElement): Promise<void>ProtectedCreate a new combat.
Parametersevent: PointerEventThe triggering event.
target: HTMLElementThe action target element.
Returns Promise<void>
- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

`Protected`Create a new combat.


#### Parameters

- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

The triggering event.

The action target element.


#### Returns Promise<void>


### Protected_onCombatCycle

`Protected`- _onCombatCycle(event: PointerEvent, target: HTMLElement): anyProtectedCycle to a different combat encounter in the tracker.
Parametersevent: PointerEventThe triggering event.
target: HTMLElementThe action target element.
Returns any
- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

`Protected`Cycle to a different combat encounter in the tracker.


#### Parameters

- event: PointerEventThe triggering event.
- target: HTMLElementThe action target element.

The triggering event.

The action target element.


#### Returns any


### Protected_onDeactivate

`Protected`- _onDeactivate(): voidProtectedActions performed when this tab is deactivated in the sidebar.
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onDeactivate

`Protected`Actions performed when this tab is deactivated in the sidebar.


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onDeactivate


### Protected_onPanToCombatant

`Protected`- _onPanToCombatant(combatant: Combatant): undefined | Promise<boolean>ProtectedHandle panning to a combatant's token.
Parameterscombatant: CombatantThe combatant.
Returns undefined | Promise<boolean>
- combatant: CombatantThe combatant.

`Protected`Handle panning to a combatant's token.


#### Parameters

- combatant: CombatantThe combatant.

The combatant.


#### Returns undefined | Promise<boolean>


### Protected_onPingCombatant

`Protected`- _onPingCombatant(combatant: Combatant): undefined | Promise<boolean>ProtectedHandle pinging a combatant's token.
Parameterscombatant: CombatantThe combatant.
Returns undefined | Promise<boolean>
- combatant: CombatantThe combatant.

`Protected`Handle pinging a combatant's token.


#### Parameters

- combatant: CombatantThe combatant.

The combatant.


#### Returns undefined | Promise<boolean>


### Protected_onPosition

`Protected`- _onPosition(position: ApplicationPosition): voidProtectedActions performed after the Application is re-positioned.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onPosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed after the Application is re-positioned.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onPosition


### Protected_onRollInitiative

`Protected`- _onRollInitiative(combatant: Combatant): Promise<documents.Combat>ProtectedHandle rolling initiative for a single combatant.
Parameterscombatant: CombatantThe combatant.
Returns Promise<documents.Combat>
- combatant: CombatantThe combatant.

`Protected`Handle rolling initiative for a single combatant.


#### Parameters

- combatant: CombatantThe combatant.

The combatant.


#### Returns Promise<documents.Combat>


### Protected_onSubmitForm

`Protected`- _onSubmitForm(    formConfig: ApplicationFormConfiguration,    event: Event | SubmitEvent,): Promise<void>ProtectedHandle submission for an Application which uses the form element.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: Event | SubmitEventThe form submission event
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onSubmitForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

`Protected`Handle submission for an Application which uses the form element.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

The form configuration for which this handler is bound

The form submission event


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onSubmitForm


### Protected_onToggleDefeatedStatus

`Protected`- _onToggleDefeatedStatus(combatant: Combatant): Promise<void>ProtectedHandle toggling the defeated status effect on a combatant token.
Parameterscombatant: CombatantThe combatant.
Returns Promise<void>
- combatant: CombatantThe combatant.

`Protected`Handle toggling the defeated status effect on a combatant token.


#### Parameters

- combatant: CombatantThe combatant.

The combatant.


#### Returns Promise<void>


### Protected_onToggleHidden

`Protected`- _onToggleHidden(combatant: Combatant): anyProtectedToggle a combatant's hidden state in the tracker.
Parameterscombatant: CombatantThe combatant.
Returns any
- combatant: CombatantThe combatant.

`Protected`Toggle a combatant's hidden state in the tracker.


#### Parameters

- combatant: CombatantThe combatant.

The combatant.


#### Returns any


### Protected_onUpdateInitiative

`Protected`- _onUpdateInitiative(event: Event): anyProtectedHandle updating a combatant's initiative in-sheet.
Parametersevent: EventThe triggering change event.
Returns any
- event: EventThe triggering change event.

`Protected`Handle updating a combatant's initiative in-sheet.


#### Parameters

- event: EventThe triggering change event.

The triggering change event.


#### Returns any


### Protected_postRender

`Protected`- _postRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedPerform post-render finalization actions.
Parameterscontext: ApplicationRenderContextPrepared context data.
options: ApplicationRenderOptionsProvided render options.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._postRender
- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

`Protected`Perform post-render finalization actions.


#### Parameters

- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

Prepared context data.

Provided render options.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._postRender


### Protected_preClose

`Protected`- _preClose(options: ApplicationRenderOptions): Promise<void>ProtectedActions performed before closing the Application.
Pre-close steps are awaited by the close process.
Parametersoptions: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preClose
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before closing the Application.
Pre-close steps are awaited by the close process.


#### Parameters

- options: ApplicationRenderOptionsProvided render options

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preClose


### Protected_preFirstRender

`Protected`- _preFirstRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preFirstRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preFirstRender


### Protected_prepareCombatContext

`Protected`- _prepareCombatContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the footer part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the footer part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>


### Protected_prepareTabs

`Protected`- _prepareTabs(group: string): Record<string, ApplicationTab>ProtectedPrepare application tab data for a single tab group.
Parametersgroup: stringThe ID of the tab group to prepare
Returns Record<string, ApplicationTab>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prepareTabs
- group: stringThe ID of the tab group to prepare

`Protected`Prepare application tab data for a single tab group.


#### Parameters

- group: stringThe ID of the tab group to prepare

The ID of the tab group to prepare


#### Returns Record<string, ApplicationTab>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prepareTabs


### Protected_prepareTrackerContext

`Protected`- _prepareTrackerContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the tracker part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the tracker part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>


### Protected_prepareTurnContext

`Protected`- _prepareTurnContext(    combat: documents.Combat,    combatant: Combatant,    index: number,): Promise<object>ProtectedPrepare render context for a single entry in the combat tracker.
Parameterscombat: documents.CombatThe active combat.
combatant: CombatantThe Combatant whose turn is being prepared.
index: numberThe index of this entry in the turn order.
Returns Promise<object>
- combat: documents.CombatThe active combat.
- combatant: CombatantThe Combatant whose turn is being prepared.
- index: numberThe index of this entry in the turn order.

`Protected`Prepare render context for a single entry in the combat tracker.


#### Parameters

- combat: documents.CombatThe active combat.
- combatant: CombatantThe Combatant whose turn is being prepared.
- index: numberThe index of this entry in the turn order.

The active combat.

The Combatant whose turn is being prepared.

The index of this entry in the turn order.


#### Returns Promise<object>


### Protected_prePosition

`Protected`- _prePosition(position: ApplicationPosition): voidProtectedActions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prePosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._prePosition


### Protected_preRender

`Protected`- _preRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before any render of the Application.
Pre-render steps are awaited by the render process.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preRender
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._preRender


### Protected_removeElement

`Protected`- _removeElement(element: HTMLElement): voidProtectedRemove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.
Parameterselement: HTMLElementThe element to be removed
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._removeElement
- element: HTMLElementThe element to be removed

`Protected`Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.


#### Parameters

- element: HTMLElementThe element to be removed

The element to be removed


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._removeElement


### Protected_renderHeaderControl

`Protected`- _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElementProtectedRender a header control button.
Parameterscontrol: ApplicationHeaderControlsEntryReturns HTMLLIElementInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderHeaderControl
- control: ApplicationHeaderControlsEntry

`Protected`Render a header control button.


#### Parameters

- control: ApplicationHeaderControlsEntry


#### Returns HTMLLIElement

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderHeaderControl


### Protected_replaceHTML

`Protected`- _replaceHTML(    result: any,    content: HTMLElement,    options: ApplicationRenderOptions,): voidProtectedReplace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.
Parametersresult: anyThe result returned by the application rendering backend
content: HTMLElementThe content element into which the rendered result must be inserted
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._replaceHTML
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._replaceHTML


### Protected_tearDown

`Protected`- _tearDown(options: ApplicationClosingOptions): voidProtectedRemove elements from the DOM and trigger garbage collection as part of application closure.
Parametersoptions: ApplicationClosingOptionsReturns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._tearDown
- options: ApplicationClosingOptions

`Protected`Remove elements from the DOM and trigger garbage collection as part of application closure.


#### Parameters

- options: ApplicationClosingOptions


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._tearDown


### Protected_updateFrame

`Protected`- _updateFrame(options: ApplicationRenderOptions): voidProtectedWhen the Application is rendered, optionally update aspects of the window frame.
Parametersoptions: ApplicationRenderOptionsOptions provided at render-time
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._updateFrame
- options: ApplicationRenderOptionsOptions provided at render-time

`Protected`When the Application is rendered, optionally update aspects of the window frame.


#### Parameters

- options: ApplicationRenderOptionsOptions provided at render-time

Options provided at render-time


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._updateFrame


### Protected_updatePosition

`Protected`- _updatePosition(position: ApplicationPosition): ApplicationPositionProtectedTranslate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.
Parametersposition: ApplicationPositionRequested Application positioning data
Returns ApplicationPositionResolved Application positioning data
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._updatePosition
- position: ApplicationPositionRequested Application positioning data

`Protected`Translate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.


#### Parameters

- position: ApplicationPositionRequested Application positioning data

Requested Application positioning data


#### Returns ApplicationPosition

Resolved Application positioning data

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._updatePosition


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from HandlebarsApplicationMixin(AbstractSidebarTab).inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).parseCSSDimension
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

