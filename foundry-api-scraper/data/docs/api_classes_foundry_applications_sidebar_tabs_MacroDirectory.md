# MacroDirectory | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.MacroDirectory.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sidebar
- tabs
- MacroDirectory


# Class MacroDirectory

The World Macro directory listing.


#### Hierarchy (View Summary)

- DocumentDirectoryMacroDirectory
- MacroDirectory

- MacroDirectory


##### Index


### Properties


### Accessors


### Methods


## Properties


### options

Application instance configuration options.

Inherited from DocumentDirectory.options


### position

The current position of the application with respect to the window.document.body.

Inherited from DocumentDirectory.position


### tabGroups

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

`null`Inherited from DocumentDirectory.tabGroups


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from DocumentDirectory._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from DocumentDirectory._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from DocumentDirectory.BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`Overrides DocumentDirectory.DEFAULT_OPTIONS


### StaticemittedEvents

`Static`Inherited from DocumentDirectory.emittedEvents


### StaticPARTS

`Static`Inherited from DocumentDirectory.PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from DocumentDirectory.RENDER_STATES


### StatictabName

`Static`Overrides DocumentDirectory.tabName


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from DocumentDirectory.TABS


### Protected Static_entryPartial

`Protected``Static`The path to the template used to render a single entry within the directory.

Inherited from DocumentDirectory._entryPartial


### Protected Static_folderPartial

`Protected``Static`The path to the template used to render a single folder within the directory.

Inherited from DocumentDirectory._folderPartial


## Accessors


### active

- get active(): booleanWhether this tab is currently active in the sidebar.
Returns booleanInherited from DocumentDirectory.active

Whether this tab is currently active in the sidebar.


#### Returns boolean

Inherited from DocumentDirectory.active


### classList

- get classList(): DOMTokenListThe CSS class list of this Application instance
Returns DOMTokenListInherited from DocumentDirectory.classList

The CSS class list of this Application instance


#### Returns DOMTokenList

Inherited from DocumentDirectory.classList


### collection

- get collection(): DirectoryCollectionThe Document collection that this directory represents.
Returns DirectoryCollectionInherited from DocumentDirectory.collection

The Document collection that this directory represents.


#### Returns DirectoryCollection

Inherited from DocumentDirectory.collection


### documentClass

- get documentClass(): Constructor<TDocument>The implementation of the Document type that this directory represents.
Returns Constructor<TDocument>Inherited from DocumentDirectory.documentClass

The implementation of the Document type that this directory represents.


#### Returns Constructor<TDocument>

Inherited from DocumentDirectory.documentClass


### documentName

- get documentName(): stringThe named Document type that this directory represents.
Returns stringInherited from DocumentDirectory.documentName

The named Document type that this directory represents.


#### Returns string

Inherited from DocumentDirectory.documentName


### element

- get element(): HTMLElementThe HTMLElement which renders this Application into the DOM.
Returns HTMLElementInherited from DocumentDirectory.element

The HTMLElement which renders this Application into the DOM.


#### Returns HTMLElement

Inherited from DocumentDirectory.element


### form

- get form(): null | HTMLFormElementDoes this Application have a top-level form element?
Returns null | HTMLFormElementInherited from DocumentDirectory.form

Does this Application have a top-level form element?


#### Returns null | HTMLFormElement

Inherited from DocumentDirectory.form


### hasFrame

- get hasFrame(): booleanDoes this Application instance render within an outer window frame?
Returns booleanInherited from DocumentDirectory.hasFrame

Does this Application instance render within an outer window frame?


#### Returns boolean

Inherited from DocumentDirectory.hasFrame


### id

- get id(): stringThe HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.
Returns stringInherited from DocumentDirectory.id

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

`DEFAULT_OPTIONS``uniqueId``_initializeApplicationOptions`
#### Returns string

Inherited from DocumentDirectory.id


### isPopout

- get isPopout(): booleanWhether this is the popped-out tab or the in-sidebar one.
Returns booleanInherited from DocumentDirectory.isPopout

Whether this is the popped-out tab or the in-sidebar one.


#### Returns boolean

Inherited from DocumentDirectory.isPopout


### minimized

- get minimized(): booleanIs this Application instance currently minimized?
Returns booleanInherited from DocumentDirectory.minimized

Is this Application instance currently minimized?


#### Returns boolean

Inherited from DocumentDirectory.minimized


### popout

- get popout(): | void| AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>A reference to the popped-out version of this tab, if one exists.
Returns void | AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>Inherited from DocumentDirectory.popout

A reference to the popped-out version of this tab, if one exists.


#### Returns void | AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>

Inherited from DocumentDirectory.popout


### rendered

- get rendered(): booleanIs this Application instance currently rendered?
Returns booleanInherited from DocumentDirectory.rendered

Is this Application instance currently rendered?


#### Returns boolean

Inherited from DocumentDirectory.rendered


### state

- get state(): numberThe current render state of the Application.
Returns numberInherited from DocumentDirectory.state

The current render state of the Application.


#### Returns number

Inherited from DocumentDirectory.state


### tabName

- get tabName(): stringThe base name of the sidebar tab.
Returns stringInherited from DocumentDirectory.tabName

The base name of the sidebar tab.


#### Returns string

Inherited from DocumentDirectory.tabName


### title

- get title(): stringReturns stringInherited from DocumentDirectory.title


#### Returns string

Inherited from DocumentDirectory.title


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from DocumentDirectory.window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from DocumentDirectory.window


## Methods


### _awaitTransition

- _awaitTransition(element: HTMLElement, timeout: number): Promise<void>InternalWait for a CSS transition to complete for an element.
Parameterselement: HTMLElementThe element which is transitioning
timeout: numberA timeout in milliseconds in case the transitionend event does not occur
Returns Promise<void>Inherited from DocumentDirectory._awaitTransition
- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

`Internal`Wait for a CSS transition to complete for an element.


#### Parameters

- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

The element which is transitioning

A timeout in milliseconds in case the transitionend event does not occur


#### Returns Promise<void>

Inherited from DocumentDirectory._awaitTransition


### _canRender

- _canRender(options: any): false | voidParametersoptions: anyReturns false | voidInherit DocInherited from DocumentDirectory._canRender
- options: any


#### Parameters

- options: any


#### Returns false | void


#### Inherit Doc

Inherited from DocumentDirectory._canRender


### _configureRenderParts

- _configureRenderParts(options: any): anyParametersoptions: anyReturns anyInherit DocInherited from DocumentDirectory._configureRenderParts
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc

Inherited from DocumentDirectory._configureRenderParts


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
Inherited from DocumentDirectory._doEvent
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

Inherited from DocumentDirectory._doEvent


### _initializeApplicationOptions

- _initializeApplicationOptions(options: any): anyParametersoptions: anyReturns anyInherit DocInherited from DocumentDirectory._initializeApplicationOptions
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc

Inherited from DocumentDirectory._initializeApplicationOptions


### _onClose

- _onClose(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from DocumentDirectory._onClose
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from DocumentDirectory._onClose


### _onDragStart

- _onDragStart(event: any): voidParametersevent: anyReturns voidInherited from DocumentDirectory._onDragStart
- event: any


#### Parameters

- event: any


#### Returns void

Inherited from DocumentDirectory._onDragStart


### _onDrop

- _onDrop(event: any): undefined | Promise<void>Parametersevent: anyReturns undefined | Promise<void>Inherited from DocumentDirectory._onDrop
- event: any


#### Parameters

- event: any


#### Returns undefined | Promise<void>

Inherited from DocumentDirectory._onDrop


### _onFirstRender

- _onFirstRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from DocumentDirectory._onFirstRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from DocumentDirectory._onFirstRender


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from DocumentDirectory._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from DocumentDirectory._onRender


### _prepareContext

- _prepareContext(    options: any,): Promise<    ApplicationRenderContext & {        canCreateEntry: boolean;        canCreateFolder: boolean;        documentName: string;        folderIcon: string;        sidebarIcon: any;    },>Parametersoptions: anyReturns Promise<    ApplicationRenderContext & {        canCreateEntry: boolean;        canCreateFolder: boolean;        documentName: string;        folderIcon: string;        sidebarIcon: any;    },>Inherit DocInherited from DocumentDirectory._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<    ApplicationRenderContext & {        canCreateEntry: boolean;        canCreateFolder: boolean;        documentName: string;        folderIcon: string;        sidebarIcon: any;    },>


#### Inherit Doc

Inherited from DocumentDirectory._prepareContext


### _preparePartContext

- _preparePartContext(partId: any, context: any, options: any): Promise<any>ParameterspartId: anycontext: anyoptions: anyReturns Promise<any>Inherit DocInherited from DocumentDirectory._preparePartContext
- partId: any
- context: any
- options: any


#### Parameters

- partId: any
- context: any
- options: any


#### Returns Promise<any>


#### Inherit Doc

Inherited from DocumentDirectory._preparePartContext


### _preSyncPartState

- _preSyncPartState(    partId: any,    newElement: any,    priorElement: any,    state: any,): voidParameterspartId: anynewElement: anypriorElement: anystate: anyReturns voidInherit DocInherited from DocumentDirectory._preSyncPartState
- partId: any
- newElement: any
- priorElement: any
- state: any


#### Parameters

- partId: any
- newElement: any
- priorElement: any
- state: any


#### Returns void


#### Inherit Doc

Inherited from DocumentDirectory._preSyncPartState


### _renderFrame

- _renderFrame(options: any): Promise<HTMLElement>Parametersoptions: anyReturns Promise<HTMLElement>Inherit DocInherited from DocumentDirectory._renderFrame
- options: any


#### Parameters

- options: any


#### Returns Promise<HTMLElement>


#### Inherit Doc

Inherited from DocumentDirectory._renderFrame


### Abstract_renderHTML

`Abstract`- _renderHTML(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<any>Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.
Parameterscontext: ApplicationRenderContextContext data for the render operation
options: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns Promise<any>The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML
Inherited from DocumentDirectory._renderHTML
- context: ApplicationRenderContextContext data for the render operation
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.


#### Parameters

- context: ApplicationRenderContextContext data for the render operation
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

Context data for the render operation

Options which configure application rendering behavior


#### Returns Promise<any>

The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML

Inherited from DocumentDirectory._renderHTML


### _syncPartState

- _syncPartState(    partId: any,    newElement: any,    priorElement: any,    state: any,): voidParameterspartId: anynewElement: anypriorElement: anystate: anyReturns voidInherit DocInherited from DocumentDirectory._syncPartState
- partId: any
- newElement: any
- priorElement: any
- state: any


#### Parameters

- partId: any
- newElement: any
- priorElement: any
- state: any


#### Returns void


#### Inherit Doc

Inherited from DocumentDirectory._syncPartState


### activate

- activate(): voidActivate this tab in the sidebar.
Returns voidInherited from DocumentDirectory.activate

Activate this tab in the sidebar.


#### Returns void

Inherited from DocumentDirectory.activate


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from DocumentDirectory.addEventListener
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

Inherited from DocumentDirectory.addEventListener


### bringToFront

- bringToFront(): voidBring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
Returns voidInherited from DocumentDirectory.bringToFront

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp


#### Returns void

Inherited from DocumentDirectory.bringToFront


### changeTab

- changeTab(    tab: string,    group: string,    options?: {        event?: Event;        force?: boolean;        navElement?: HTMLElement;        updatePosition?: boolean;    },): voidChange the active tab within a tab group in this Application instance.
Parameterstab: stringThe name of the tab which should become active
group: stringThe name of the tab group which defines the set of tabs
Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
Returns voidInherited from DocumentDirectory.changeTab
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

Inherited from DocumentDirectory.changeTab


### close

- close(options?: Partial<ApplicationClosingOptions>): Promise<MacroDirectory>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<MacroDirectory>A Promise which resolves to the closed Application instance
Inherited from DocumentDirectory.close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<MacroDirectory>

A Promise which resolves to the closed Application instance

Inherited from DocumentDirectory.close


### collapseAll

- collapseAll(): voidCollapse all open folders in this directory.
Returns voidInherited from DocumentDirectory.collapseAll

Collapse all open folders in this directory.


#### Returns void

Inherited from DocumentDirectory.collapseAll


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from DocumentDirectory.dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from DocumentDirectory.dispatchEvent


### maximize

- maximize(): Promise<void>Restore the Application to its original dimensions.
Returns Promise<void>Inherited from DocumentDirectory.maximize

Restore the Application to its original dimensions.


#### Returns Promise<void>

Inherited from DocumentDirectory.maximize


### minimize

- minimize(): Promise<void>Minimize the Application, collapsing it to a minimal header.
Returns Promise<void>Inherited from DocumentDirectory.minimize

Minimize the Application, collapsing it to a minimal header.


#### Returns Promise<void>

Inherited from DocumentDirectory.minimize


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from DocumentDirectory.removeEventListener
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

Inherited from DocumentDirectory.removeEventListener


### render

- render(options: any, _options: any): Promise<MacroDirectory>Parametersoptions: any_options: anyReturns Promise<MacroDirectory>Inherit DocInherited from DocumentDirectory.render
- options: any
- _options: any


#### Parameters

- options: any
- _options: any


#### Returns Promise<MacroDirectory>


#### Inherit Doc

Inherited from DocumentDirectory.render


### renderPopout

- renderPopout(): Promise<    AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>,>Pop-out this sidebar tab as a new application.
Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>Inherited from DocumentDirectory.renderPopout

Pop-out this sidebar tab as a new application.


#### Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>

Inherited from DocumentDirectory.renderPopout


### setPosition

- setPosition(position?: Partial<ApplicationPosition>): void | ApplicationPositionUpdate the Application element position using provided data which is merged with the prior position.
ParametersOptionalposition: Partial<ApplicationPosition>New Application positioning data
Returns void | ApplicationPositionThe updated application position
Inherited from DocumentDirectory.setPosition
- Optionalposition: Partial<ApplicationPosition>New Application positioning data

Update the Application element position using provided data which is merged with the prior position.


#### Parameters

- Optionalposition: Partial<ApplicationPosition>New Application positioning data

`Optional`New Application positioning data


#### Returns void | ApplicationPosition

The updated application position

Inherited from DocumentDirectory.setPosition


### submit

- submit(submitOptions?: object): Promise<any>Programmatically submit an ApplicationV2 instance which implements a single top-level form.
ParametersOptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.
Returns Promise<any>A promise that resolves to the returned result of the form submission handler,
if any.
Inherited from DocumentDirectory.submit
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

Inherited from DocumentDirectory.submit


### toggleControls

- toggleControls(    expanded?: boolean,    options?: { animate?: boolean },): Promise<void>Toggle display of the Application controls menu.
Only applicable to window Applications.
ParametersOptionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
Returns Promise<void>A Promise which resolves once the control expansion animation is complete
Inherited from DocumentDirectory.toggleControls
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

Inherited from DocumentDirectory.toggleControls


### Protected_attachFrameListeners

`Protected`- _attachFrameListeners(): voidProtectedAttach event listeners to the Application frame.
Returns voidInherited from DocumentDirectory._attachFrameListeners

`Protected`Attach event listeners to the Application frame.


#### Returns void

Inherited from DocumentDirectory._attachFrameListeners


### Protected_canCreateEntry

`Protected`- _canCreateEntry(): booleanProtectedDetermine if the current user has permission to create directory entries.
Returns booleanInherited from DocumentDirectory._canCreateEntry

`Protected`Determine if the current user has permission to create directory entries.


#### Returns boolean

Inherited from DocumentDirectory._canCreateEntry


### Protected_canCreateFolder

`Protected`- _canCreateFolder(): booleanProtectedDetermine if the current user has permission to create folders in this directory.
Returns booleanInherited from DocumentDirectory._canCreateFolder

`Protected`Determine if the current user has permission to create folders in this directory.


#### Returns boolean

Inherited from DocumentDirectory._canCreateFolder


### Protected_canDragDrop

`Protected`- _canDragDrop(selector: string): booleanProtectedDetermine if drop operations are permitted.
Parametersselector: stringThe candidate HTML selector for dragging
Returns booleanCan the current user drag this selector?
Inherited from DocumentDirectory._canDragDrop
- selector: stringThe candidate HTML selector for dragging

`Protected`Determine if drop operations are permitted.


#### Parameters

- selector: stringThe candidate HTML selector for dragging

The candidate HTML selector for dragging


#### Returns boolean

Can the current user drag this selector?

Inherited from DocumentDirectory._canDragDrop


### Protected_canDragStart

`Protected`- _canDragStart(selector: string): booleanProtectedDetermine if drag operations are permitted.
Parametersselector: stringThe candidate HTML selector for dragging
Returns booleanCan the current user drag this selector?
Inherited from DocumentDirectory._canDragStart
- selector: stringThe candidate HTML selector for dragging

`Protected`Determine if drag operations are permitted.


#### Parameters

- selector: stringThe candidate HTML selector for dragging

The candidate HTML selector for dragging


#### Returns boolean

Can the current user drag this selector?

Inherited from DocumentDirectory._canDragStart


### Protected_configureRenderOptions

`Protected`- _configureRenderOptions(options: HandlebarsRenderOptions): voidProtectedModify the provided options passed to a render request.
Parametersoptions: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from DocumentDirectory._configureRenderOptions
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Modify the provided options passed to a render request.


#### Parameters

- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

Options which configure application rendering behavior


#### Returns void

Inherited from DocumentDirectory._configureRenderOptions


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
Inherited from DocumentDirectory._createContextMenu
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

Inherited from DocumentDirectory._createContextMenu


### Protected_createContextMenus

`Protected`- _createContextMenus(): voidProtectedRegister context menu entries and fire hooks.
Returns voidInherited from DocumentDirectory._createContextMenus

`Protected`Register context menu entries and fire hooks.


#### Returns void

Inherited from DocumentDirectory._createContextMenus


### Protected_createDroppedEntry

`Protected`- _createDroppedEntry(    entry: DirectoryMixinEntry,    updates?: object,): Promise<documents.Macro>ProtectedCreate a new entry in this directory from one that was dropped on it.
Parametersentry: DirectoryMixinEntryThe dropped entry.
Optionalupdates: object = {}Modifications to the creation data.
Returns Promise<documents.Macro>Inherited from DocumentDirectory._createDroppedEntry
- entry: DirectoryMixinEntryThe dropped entry.
- Optionalupdates: object = {}Modifications to the creation data.

`Protected`Create a new entry in this directory from one that was dropped on it.


#### Parameters

- entry: DirectoryMixinEntryThe dropped entry.
- Optionalupdates: object = {}Modifications to the creation data.

The dropped entry.

`Optional`Modifications to the creation data.


#### Returns Promise<documents.Macro>

Inherited from DocumentDirectory._createDroppedEntry


### Protected_createDroppedFolderContent

`Protected`- _createDroppedFolderContent(    folder: documents.Folder,    targetFolder?: documents.Folder,): Promise<documents.Folder[]>ProtectedImport a dropped folder and its children into this collection if they do not already exist.
Parametersfolder: documents.FolderThe folder being dropped.
OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.
Returns Promise<documents.Folder[]>Inherited from DocumentDirectory._createDroppedFolderContent
- folder: documents.FolderThe folder being dropped.
- OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.

`Protected`Import a dropped folder and its children into this collection if they do not already exist.


#### Parameters

- folder: documents.FolderThe folder being dropped.
- OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.

The folder being dropped.

`Optional`A folder to import into if not the directory root.


#### Returns Promise<documents.Folder[]>

Inherited from DocumentDirectory._createDroppedFolderContent


### Protected_createDroppedFolderDocuments

`Protected`- _createDroppedFolderDocuments(    folder: documents.Folder,    documents: object[] | documents.Macro[],): Promise<void>ProtectedCreate a set of documents in a dropped folder.
Parametersfolder: documents.FolderThe dropped folder.
documents: object[] | documents.Macro[]The documents to create, or their indices.
Returns Promise<void>Inherited from DocumentDirectory._createDroppedFolderDocuments
- folder: documents.FolderThe dropped folder.
- documents: object[] | documents.Macro[]The documents to create, or their indices.

`Protected`Create a set of documents in a dropped folder.


#### Parameters

- folder: documents.FolderThe dropped folder.
- documents: object[] | documents.Macro[]The documents to create, or their indices.

The dropped folder.

The documents to create, or their indices.


#### Returns Promise<void>

Inherited from DocumentDirectory._createDroppedFolderDocuments


### Protected_entryAlreadyExists

`Protected`- _entryAlreadyExists(entry: ClientDocument): booleanProtectedTest if the given entry is already present in this directory.
Parametersentry: ClientDocumentThe directory entry.
Returns booleanInherited from DocumentDirectory._entryAlreadyExists
- entry: ClientDocumentThe directory entry.

`Protected`Test if the given entry is already present in this directory.


#### Parameters

- entry: ClientDocumentThe directory entry.

The directory entry.


#### Returns boolean

Inherited from DocumentDirectory._entryAlreadyExists


### Protected_entryBelongsToFolder

`Protected`- _entryBelongsToFolder(entry: DirectoryMixinEntry, folder: string): booleanProtectedDetermine whether a given directory entry belongs to the given folder.
Parametersentry: DirectoryMixinEntryThe entry.
folder: stringThe target folder ID.
Returns booleanInherited from DocumentDirectory._entryBelongsToFolder
- entry: DirectoryMixinEntryThe entry.
- folder: stringThe target folder ID.

`Protected`Determine whether a given directory entry belongs to the given folder.


#### Parameters

- entry: DirectoryMixinEntryThe entry.
- folder: stringThe target folder ID.

The entry.

The target folder ID.


#### Returns boolean

Inherited from DocumentDirectory._entryBelongsToFolder


### Protected_getDroppedEntryFromData

`Protected`- _getDroppedEntryFromData(data: object): Promise<ClientDocument>ProtectedGet the entry instance from its dropped data.
Parametersdata: objectThe drag data.
Returns Promise<ClientDocument>ThrowsIf the correct instance type could not be retrieved.
Inherited from DocumentDirectory._getDroppedEntryFromData
- data: objectThe drag data.

`Protected`Get the entry instance from its dropped data.


#### Parameters

- data: objectThe drag data.

The drag data.


#### Returns Promise<ClientDocument>


#### Throws

If the correct instance type could not be retrieved.

Inherited from DocumentDirectory._getDroppedEntryFromData


### Protected_getEntryContextOptions

`Protected`- _getEntryContextOptions(): ContextMenuEntry[]ProtectedGet context menu entries for entries in this directory.
Returns ContextMenuEntry[]Inherited from DocumentDirectory._getEntryContextOptions

`Protected`Get context menu entries for entries in this directory.


#### Returns ContextMenuEntry[]

Inherited from DocumentDirectory._getEntryContextOptions


### Protected_getEntryDragData

`Protected`- _getEntryDragData(entryId: string): anyProtectedGet drag data for an entry in this directory.
ParametersentryId: stringThe entry's ID.
Returns anyInherited from DocumentDirectory._getEntryDragData
- entryId: stringThe entry's ID.

`Protected`Get drag data for an entry in this directory.


#### Parameters

- entryId: stringThe entry's ID.

The entry's ID.


#### Returns any

Inherited from DocumentDirectory._getEntryDragData


### Protected_getFolderContextOptions

`Protected`- _getFolderContextOptions(): ContextMenuEntry[]ProtectedGet context menu entries for folders in this directory.
Returns ContextMenuEntry[]Inherited from DocumentDirectory._getFolderContextOptions

`Protected`Get context menu entries for folders in this directory.


#### Returns ContextMenuEntry[]

Inherited from DocumentDirectory._getFolderContextOptions


### Protected_getFolderDragData

`Protected`- _getFolderDragData(folderId: string): anyProtectedGet drag data for a folder in this directory.
ParametersfolderId: stringThe folder ID.
Returns anyInherited from DocumentDirectory._getFolderDragData
- folderId: stringThe folder ID.

`Protected`Get drag data for a folder in this directory.


#### Parameters

- folderId: stringThe folder ID.

The folder ID.


#### Returns any

Inherited from DocumentDirectory._getFolderDragData


### Protected_getHeaderControls

`Protected`- _getHeaderControls(): ApplicationHeaderControlsEntry[]ProtectedConfigure the array of header control menu options
Returns ApplicationHeaderControlsEntry[]Inherited from DocumentDirectory._getHeaderControls

`Protected`Configure the array of header control menu options


#### Returns ApplicationHeaderControlsEntry[]

Inherited from DocumentDirectory._getHeaderControls


### Protected_getTabsConfig

`Protected`- _getTabsConfig(group: string): null | ApplicationTabsConfigurationProtectedGet the configuration for a tabs group.
Parametersgroup: stringThe ID of a tabs group
Returns null | ApplicationTabsConfigurationInherited from DocumentDirectory._getTabsConfig
- group: stringThe ID of a tabs group

`Protected`Get the configuration for a tabs group.


#### Parameters

- group: stringThe ID of a tabs group

The ID of a tabs group


#### Returns null | ApplicationTabsConfiguration

Inherited from DocumentDirectory._getTabsConfig


### Protected_handleDroppedEntry

`Protected`- _handleDroppedEntry(target: HTMLElement, data: object): Promise<void>ProtectedHandle dropping a new entry into this directory.
Parameterstarget: HTMLElementThe drop target element.
data: objectThe drop data.
Returns Promise<void>Inherited from DocumentDirectory._handleDroppedEntry
- target: HTMLElementThe drop target element.
- data: objectThe drop data.

`Protected`Handle dropping a new entry into this directory.


#### Parameters

- target: HTMLElementThe drop target element.
- data: objectThe drop data.

The drop target element.

The drop data.


#### Returns Promise<void>

Inherited from DocumentDirectory._handleDroppedEntry


### Protected_handleDroppedFolder

`Protected`- _handleDroppedFolder(target: HTMLElement, data: object): Promise<void>ProtectedHandle dropping a folder onto the directory.
Parameterstarget: HTMLElementThe drop target element.
data: objectThe drop data.
Returns Promise<void>Inherited from DocumentDirectory._handleDroppedFolder
- target: HTMLElementThe drop target element.
- data: objectThe drop data.

`Protected`Handle dropping a folder onto the directory.


#### Parameters

- target: HTMLElementThe drop target element.
- data: objectThe drop data.

The drop target element.

The drop data.


#### Returns Promise<void>

Inherited from DocumentDirectory._handleDroppedFolder


### Protected_handleDroppedForeignFolder

`Protected`- _handleDroppedForeignFolder(    folder: documents.Folder,    closestFolderId: string,    sortData: object,): Promise<null | { folder: documents.Folder; sortNeeded: boolean }>ProtectedHandle importing a new folder's into the directory.
Parametersfolder: documents.FolderThe dropped folder.
closestFolderId: stringThe ID of the closest folder to the drop target.
sortData: objectSort data for the folder.
Returns Promise<null | { folder: documents.Folder; sortNeeded: boolean }>Inherited from DocumentDirectory._handleDroppedForeignFolder
- folder: documents.FolderThe dropped folder.
- closestFolderId: stringThe ID of the closest folder to the drop target.
- sortData: objectSort data for the folder.

`Protected`Handle importing a new folder's into the directory.


#### Parameters

- folder: documents.FolderThe dropped folder.
- closestFolderId: stringThe ID of the closest folder to the drop target.
- sortData: objectSort data for the folder.

The dropped folder.

The ID of the closest folder to the drop target.

Sort data for the folder.


#### Returns Promise<null | { folder: documents.Folder; sortNeeded: boolean }>

Inherited from DocumentDirectory._handleDroppedForeignFolder


### Protected_headerControlButtons

`Protected`- _headerControlButtons(): Generator<ApplicationHeaderControlsEntry, any, any>ProtectedIterate over header control buttons, filtering for controls which are visible for the current client.
Returns Generator<ApplicationHeaderControlsEntry, any, any>YieldsInherited from DocumentDirectory._headerControlButtons

`Protected`Iterate over header control buttons, filtering for controls which are visible for the current client.


#### Returns Generator<ApplicationHeaderControlsEntry, any, any>


#### Yields

Inherited from DocumentDirectory._headerControlButtons


### Protected_insertElement

`Protected`- _insertElement(element: HTMLElement): voidProtectedInsert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.
Parameterselement: HTMLElementThe element to insert
Returns voidInherited from DocumentDirectory._insertElement
- element: HTMLElementThe element to insert

`Protected`Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.


#### Parameters

- element: HTMLElementThe element to insert

The element to insert


#### Returns void

Inherited from DocumentDirectory._insertElement


### Protected_matchSearchEntries

`Protected`- _matchSearchEntries(    query: RegExp,    entryIds: Set<string>,    folderIds: Set<string>,    autoExpandIds: Set<string>,    options?: object,): voidProtectedIdentify entries in the collection which match a provided search query.
Parametersquery: RegExpThe search query.
entryIds: Set<string>The set of matched entry IDs.
folderIds: Set<string>The set of matched folder IDs.
autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
Optionaloptions: object = {}Additional options for subclass-specific behavior.
Returns voidInherited from DocumentDirectory._matchSearchEntries
- query: RegExpThe search query.
- entryIds: Set<string>The set of matched entry IDs.
- folderIds: Set<string>The set of matched folder IDs.
- autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

`Protected`Identify entries in the collection which match a provided search query.


#### Parameters

- query: RegExpThe search query.
- entryIds: Set<string>The set of matched entry IDs.
- folderIds: Set<string>The set of matched folder IDs.
- autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

The search query.

The set of matched entry IDs.

The set of matched folder IDs.

The set of folder IDs that should be auto-expanded.

`Optional`Additional options for subclass-specific behavior.


#### Returns void

Inherited from DocumentDirectory._matchSearchEntries


### Protected_matchSearchFolders

`Protected`- _matchSearchFolders(    query: RegExp,    folderIds: Set<string>,    autoExpandIds: Set<string>,    options?: object,): voidProtectedIdentify folders in the collection which match a provided search query.
Parametersquery: RegExpThe search query.
folderIds: Set<string>The set of matched folder IDs.
autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
Optionaloptions: object = {}Additional options for subclass-specific behavior.
Returns voidInherited from DocumentDirectory._matchSearchFolders
- query: RegExpThe search query.
- folderIds: Set<string>The set of matched folder IDs.
- autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

`Protected`Identify folders in the collection which match a provided search query.


#### Parameters

- query: RegExpThe search query.
- folderIds: Set<string>The set of matched folder IDs.
- autoExpandIds: Set<string>The set of folder IDs that should be auto-expanded.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

The search query.

The set of matched folder IDs.

The set of folder IDs that should be auto-expanded.

`Optional`Additional options for subclass-specific behavior.


#### Returns void

Inherited from DocumentDirectory._matchSearchFolders


### Protected_onActivate

`Protected`- _onActivate(): voidProtectedActions performed when this tab is activated in the sidebar.
Returns voidInherited from DocumentDirectory._onActivate

`Protected`Actions performed when this tab is activated in the sidebar.


#### Returns void

Inherited from DocumentDirectory._onActivate


### Protected_onChangeForm

`Protected`- _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): voidProtectedHandle changes to an input element within the form.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: EventAn input change event within the form
Returns voidInherited from DocumentDirectory._onChangeForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

`Protected`Handle changes to an input element within the form.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

The form configuration for which this handler is bound

An input change event within the form


#### Returns void

Inherited from DocumentDirectory._onChangeForm


### Protected_onClickAction

`Protected`- _onClickAction(event: PointerEvent, target: HTMLElement): voidProtectedA generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.
Parametersevent: PointerEventThe originating click event
target: HTMLElementThe capturing HTML element which defined a [data-action]
Returns voidInherited from DocumentDirectory._onClickAction
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

Inherited from DocumentDirectory._onClickAction


### Protected_onClickEntry

`Protected`- _onClickEntry(    event: PointerEvent,    target: HTMLElement,    options?: { _skipDeprecation?: boolean },): Promise<void>ProtectedHandle activating a directory entry.
Parametersevent: PointerEventThe triggering click event.
target: HTMLElementThe action target element.
Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
Returns Promise<void>Inherited from DocumentDirectory._onClickEntry
- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.
- Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
- Optional_skipDeprecation?: booleanInternal use only.

`Protected`Handle activating a directory entry.


#### Parameters

- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.
- Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
- Optional_skipDeprecation?: booleanInternal use only.

The triggering click event.

The action target element.

`Optional`- Optional_skipDeprecation?: booleanInternal use only.


##### Optional_skipDeprecation?: boolean

`Optional`Internal use only.


#### Returns Promise<void>

Inherited from DocumentDirectory._onClickEntry


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from DocumentDirectory._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from DocumentDirectory._onClickTab


### Protected_onCreateEntry

`Protected`- _onCreateEntry(event: PointerEvent, target: HTMLElement): anyProtectedHandle creating a new entry in this directory.
Parametersevent: PointerEventThe triggering click event.
target: HTMLElementThe action target element.
Returns anyInherited from DocumentDirectory._onCreateEntry
- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.

`Protected`Handle creating a new entry in this directory.


#### Parameters

- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.

The triggering click event.

The action target element.


#### Returns any

Inherited from DocumentDirectory._onCreateEntry


### Protected_onCreateFolder

`Protected`- _onCreateFolder(event: PointerEvent, target: HTMLElement): voidProtectedHandle creating a new folder in this directory.
Parametersevent: PointerEventThe triggering click event.
target: HTMLElementThe action target element.
Returns voidInherited from DocumentDirectory._onCreateFolder
- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.

`Protected`Handle creating a new folder in this directory.


#### Parameters

- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.

The triggering click event.

The action target element.


#### Returns void

Inherited from DocumentDirectory._onCreateFolder


### Protected_onDeactivate

`Protected`- _onDeactivate(): voidProtectedActions performed when this tab is deactivated in the sidebar.
Returns voidInherited from DocumentDirectory._onDeactivate

`Protected`Actions performed when this tab is deactivated in the sidebar.


#### Returns void

Inherited from DocumentDirectory._onDeactivate


### Protected_onDragHighlight

`Protected`- _onDragHighlight(event: DragEvent): voidProtectedHighlight folders as drop targets when a drag event enters or exits their area.
Parametersevent: DragEventThe in-progress drag event.
Returns voidInherited from DocumentDirectory._onDragHighlight
- event: DragEventThe in-progress drag event.

`Protected`Highlight folders as drop targets when a drag event enters or exits their area.


#### Parameters

- event: DragEventThe in-progress drag event.

The in-progress drag event.


#### Returns void

Inherited from DocumentDirectory._onDragHighlight


### Protected_onDragOver

`Protected`- _onDragOver(event: DragEvent): voidProtectedHandle drag events over the directory.
Parametersevent: DragEventReturns voidInherited from DocumentDirectory._onDragOver
- event: DragEvent

`Protected`Handle drag events over the directory.


#### Parameters

- event: DragEvent


#### Returns void

Inherited from DocumentDirectory._onDragOver


### Protected_onMatchSearchEntry

`Protected`- _onMatchSearchEntry(    query: string,    entryIds: Set<string>,    element: HTMLElement,    options?: object,): voidProtectedHandle matching a given directory entry with the search filter.
Parametersquery: stringThe input search string.
entryIds: Set<string>The matched directory entry IDs.
element: HTMLElementThe candidate entry element.
Optionaloptions: object = {}Additional options for subclass-specific behavior.
Returns voidInherited from DocumentDirectory._onMatchSearchEntry
- query: stringThe input search string.
- entryIds: Set<string>The matched directory entry IDs.
- element: HTMLElementThe candidate entry element.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

`Protected`Handle matching a given directory entry with the search filter.


#### Parameters

- query: stringThe input search string.
- entryIds: Set<string>The matched directory entry IDs.
- element: HTMLElementThe candidate entry element.
- Optionaloptions: object = {}Additional options for subclass-specific behavior.

The input search string.

The matched directory entry IDs.

The candidate entry element.

`Optional`Additional options for subclass-specific behavior.


#### Returns void

Inherited from DocumentDirectory._onMatchSearchEntry


### Protected_onPosition

`Protected`- _onPosition(position: ApplicationPosition): voidProtectedActions performed after the Application is re-positioned.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from DocumentDirectory._onPosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed after the Application is re-positioned.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from DocumentDirectory._onPosition


### Protected_onSearchFilter

`Protected`- _onSearchFilter(    event: KeyboardEvent,    query: string,    rgx: RegExp,    html: HTMLElement,): voidProtectedHandle directory searching and filtering.
Parametersevent: KeyboardEventThe keyboard input event.
query: stringThe input search string.
rgx: RegExpThe regular expression query that should be matched against.
html: HTMLElementThe container to filter entries from.
Returns voidInherited from DocumentDirectory._onSearchFilter
- event: KeyboardEventThe keyboard input event.
- query: stringThe input search string.
- rgx: RegExpThe regular expression query that should be matched against.
- html: HTMLElementThe container to filter entries from.

`Protected`Handle directory searching and filtering.


#### Parameters

- event: KeyboardEventThe keyboard input event.
- query: stringThe input search string.
- rgx: RegExpThe regular expression query that should be matched against.
- html: HTMLElementThe container to filter entries from.

The keyboard input event.

The input search string.

The regular expression query that should be matched against.

The container to filter entries from.


#### Returns void

Inherited from DocumentDirectory._onSearchFilter


### Protected_onSubmitForm

`Protected`- _onSubmitForm(    formConfig: ApplicationFormConfiguration,    event: Event | SubmitEvent,): Promise<void>ProtectedHandle submission for an Application which uses the form element.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: Event | SubmitEventThe form submission event
Returns Promise<void>Inherited from DocumentDirectory._onSubmitForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

`Protected`Handle submission for an Application which uses the form element.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

The form configuration for which this handler is bound

The form submission event


#### Returns Promise<void>

Inherited from DocumentDirectory._onSubmitForm


### Protected_onToggleFolder

`Protected`- _onToggleFolder(    event: PointerEvent,    target: HTMLElement,    options?: { _skipDeprecation?: boolean },): anyProtectedHandle toggling a folder's expanded state.
Parametersevent: PointerEventThe triggering click event.
target: HTMLElementThe action target element.
Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
Returns anyInherited from DocumentDirectory._onToggleFolder
- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.
- Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
- Optional_skipDeprecation?: booleanInternal use only.

`Protected`Handle toggling a folder's expanded state.


#### Parameters

- event: PointerEventThe triggering click event.
- target: HTMLElementThe action target element.
- Optionaloptions: { _skipDeprecation?: boolean } = {}Optional_skipDeprecation?: booleanInternal use only.
- Optional_skipDeprecation?: booleanInternal use only.

The triggering click event.

The action target element.

`Optional`- Optional_skipDeprecation?: booleanInternal use only.


##### Optional_skipDeprecation?: boolean

`Optional`Internal use only.


#### Returns any

Inherited from DocumentDirectory._onToggleFolder


### Protected_organizeDroppedFoldersAndDocuments

`Protected`- _organizeDroppedFoldersAndDocuments(    folder: documents.Folder,    targetFolder?: documents.Folder,): Promise<    {        documentsToCreate: object[]        | documents.Macro[];        foldersToCreate: documents.Folder[];    },>ProtectedOrganize a dropped folder and its children into a list of folders and documents to create.
Parametersfolder: documents.FolderThe dropped folder.
OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.
Returns Promise<    {        documentsToCreate: object[]        | documents.Macro[];        foldersToCreate: documents.Folder[];    },>Inherited from DocumentDirectory._organizeDroppedFoldersAndDocuments
- folder: documents.FolderThe dropped folder.
- OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.

`Protected`Organize a dropped folder and its children into a list of folders and documents to create.


#### Parameters

- folder: documents.FolderThe dropped folder.
- OptionaltargetFolder: documents.FolderA folder to import into if not the directory root.

The dropped folder.

`Optional`A folder to import into if not the directory root.


#### Returns Promise<    {        documentsToCreate: object[]        | documents.Macro[];        foldersToCreate: documents.Folder[];    },>

Inherited from DocumentDirectory._organizeDroppedFoldersAndDocuments


### Protected_postRender

`Protected`- _postRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPerform post-render finalization actions.
Parameterscontext: ApplicationRenderContextPrepared context data.
options: HandlebarsRenderOptionsProvided render options.
Returns Promise<void>Inherited from DocumentDirectory._postRender
- context: ApplicationRenderContextPrepared context data.
- options: HandlebarsRenderOptionsProvided render options.

`Protected`Perform post-render finalization actions.


#### Parameters

- context: ApplicationRenderContextPrepared context data.
- options: HandlebarsRenderOptionsProvided render options.

Prepared context data.

Provided render options.


#### Returns Promise<void>

Inherited from DocumentDirectory._postRender


### Protected_preClose

`Protected`- _preClose(options: HandlebarsRenderOptions): Promise<void>ProtectedActions performed before closing the Application.
Pre-close steps are awaited by the close process.
Parametersoptions: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from DocumentDirectory._preClose
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed before closing the Application.
Pre-close steps are awaited by the close process.


#### Parameters

- options: HandlebarsRenderOptionsProvided render options

Provided render options


#### Returns Promise<void>

Inherited from DocumentDirectory._preClose


### Protected_preFirstRender

`Protected`- _preFirstRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedActions performed before a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from DocumentDirectory._preFirstRender
- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed before a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from DocumentDirectory._preFirstRender


### Protected_prepareDirectoryContext

`Protected`- _prepareDirectoryContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the directory part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from DocumentDirectory._prepareDirectoryContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the directory part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from DocumentDirectory._prepareDirectoryContext


### Protected_prepareDuplicateData

`Protected`- _prepareDuplicateData(document: Document): objectProtectedPrepares the data for a duplicated Document.
Parametersdocument: DocumentThe Document that is duplicated
Returns objectThe partial data of the duplicate that overrides the original data
Inherited from DocumentDirectory._prepareDuplicateData
- document: DocumentThe Document that is duplicated

`Protected`Prepares the data for a duplicated Document.


#### Parameters

- document: DocumentThe Document that is duplicated

The Document that is duplicated


#### Returns object

The partial data of the duplicate that overrides the original data

Inherited from DocumentDirectory._prepareDuplicateData


### Protected_prepareFooterContext

`Protected`- _prepareFooterContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the footer part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from DocumentDirectory._prepareFooterContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the footer part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from DocumentDirectory._prepareFooterContext


### Protected_prepareHeaderContext

`Protected`- _prepareHeaderContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the header part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from DocumentDirectory._prepareHeaderContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the header part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from DocumentDirectory._prepareHeaderContext


### Protected_prepareTabs

`Protected`- _prepareTabs(group: string): Record<string, ApplicationTab>ProtectedPrepare application tab data for a single tab group.
Parametersgroup: stringThe ID of the tab group to prepare
Returns Record<string, ApplicationTab>Inherited from DocumentDirectory._prepareTabs
- group: stringThe ID of the tab group to prepare

`Protected`Prepare application tab data for a single tab group.


#### Parameters

- group: stringThe ID of the tab group to prepare

The ID of the tab group to prepare


#### Returns Record<string, ApplicationTab>

Inherited from DocumentDirectory._prepareTabs


### Protected_prePosition

`Protected`- _prePosition(position: ApplicationPosition): voidProtectedActions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from DocumentDirectory._prePosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from DocumentDirectory._prePosition


### Protected_preRender

`Protected`- _preRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedActions performed before any render of the Application.
Pre-render steps are awaited by the render process.
Parameterscontext: ApplicationRenderContextPrepared context data
options: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from DocumentDirectory._preRender
- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed before any render of the Application.
Pre-render steps are awaited by the render process.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from DocumentDirectory._preRender


### Protected_removeElement

`Protected`- _removeElement(element: HTMLElement): voidProtectedRemove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.
Parameterselement: HTMLElementThe element to be removed
Returns voidInherited from DocumentDirectory._removeElement
- element: HTMLElementThe element to be removed

`Protected`Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.


#### Parameters

- element: HTMLElementThe element to be removed

The element to be removed


#### Returns void

Inherited from DocumentDirectory._removeElement


### Protected_renderHeaderControl

`Protected`- _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElementProtectedRender a header control button.
Parameterscontrol: ApplicationHeaderControlsEntryReturns HTMLLIElementInherited from DocumentDirectory._renderHeaderControl
- control: ApplicationHeaderControlsEntry

`Protected`Render a header control button.


#### Parameters

- control: ApplicationHeaderControlsEntry


#### Returns HTMLLIElement

Inherited from DocumentDirectory._renderHeaderControl


### Protected_replaceHTML

`Protected`- _replaceHTML(    result: any,    content: HTMLElement,    options: HandlebarsRenderOptions,): voidProtectedReplace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.
Parametersresult: anyThe result returned by the application rendering backend
content: HTMLElementThe content element into which the rendered result must be inserted
options: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from DocumentDirectory._replaceHTML
- result: anyThe result returned by the application rendering backend
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Replace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.


#### Parameters

- result: anyThe result returned by the application rendering backend
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

The result returned by the application rendering backend

The content element into which the rendered result must be inserted

Options which configure application rendering behavior


#### Returns void

Inherited from DocumentDirectory._replaceHTML


### Protected_tearDown

`Protected`- _tearDown(options: ApplicationClosingOptions): voidProtectedRemove elements from the DOM and trigger garbage collection as part of application closure.
Parametersoptions: ApplicationClosingOptionsReturns voidInherited from DocumentDirectory._tearDown
- options: ApplicationClosingOptions

`Protected`Remove elements from the DOM and trigger garbage collection as part of application closure.


#### Parameters

- options: ApplicationClosingOptions


#### Returns void

Inherited from DocumentDirectory._tearDown


### Protected_updateFrame

`Protected`- _updateFrame(options: HandlebarsRenderOptions): voidProtectedWhen the Application is rendered, optionally update aspects of the window frame.
Parametersoptions: HandlebarsRenderOptionsOptions provided at render-time
Returns voidInherited from DocumentDirectory._updateFrame
- options: HandlebarsRenderOptionsOptions provided at render-time

`Protected`When the Application is rendered, optionally update aspects of the window frame.


#### Parameters

- options: HandlebarsRenderOptionsOptions provided at render-time

Options provided at render-time


#### Returns void

Inherited from DocumentDirectory._updateFrame


### Protected_updatePosition

`Protected`- _updatePosition(position: ApplicationPosition): ApplicationPositionProtectedTranslate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.
Parametersposition: ApplicationPositionRequested Application positioning data
Returns ApplicationPositionResolved Application positioning data
Inherited from DocumentDirectory._updatePosition
- position: ApplicationPositionRequested Application positioning data

`Protected`Translate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.


#### Parameters

- position: ApplicationPositionRequested Application positioning data

Requested Application positioning data


#### Returns ApplicationPosition

Resolved Application positioning data

Inherited from DocumentDirectory._updatePosition


### Static_getFolderContextOptions

`Static`- _getFolderContextOptions(): ContextMenuEntry[]InternalGet context menu entries for folders in a directory.
Returns ContextMenuEntry[]Inherited from DocumentDirectory._getFolderContextOptions

`Internal`Get context menu entries for folders in a directory.


#### Returns ContextMenuEntry[]

Inherited from DocumentDirectory._getFolderContextOptions


### Static_handleDroppedFolder

`Static`- _handleDroppedFolder(    target: HTMLElement,    data: object,    config: {        folders: documents.Folder[];        label: string;        maxFolderDepth: number;        type: string;    },): Promise<void | { folder: documents.Folder; sortData: object }>InternalHelper method to handle dropping a folder onto the directory.
Parameterstarget: HTMLElementThe drop target element.
data: objectThe drop data.
config: {    folders: documents.Folder[];    label: string;    maxFolderDepth: number;    type: string;}folders: documents.Folder[]The sibling folders.
label: stringThe label for entries in the directory.
maxFolderDepth: numberThe maximum folder depth in this directory.
type: stringThe type of entries in the directory.
Returns Promise<void | { folder: documents.Folder; sortData: object }>Inherited from DocumentDirectory._handleDroppedFolder
- target: HTMLElementThe drop target element.
- data: objectThe drop data.
- config: {    folders: documents.Folder[];    label: string;    maxFolderDepth: number;    type: string;}folders: documents.Folder[]The sibling folders.
label: stringThe label for entries in the directory.
maxFolderDepth: numberThe maximum folder depth in this directory.
type: stringThe type of entries in the directory.
- folders: documents.Folder[]The sibling folders.
- label: stringThe label for entries in the directory.
- maxFolderDepth: numberThe maximum folder depth in this directory.
- type: stringThe type of entries in the directory.

`Internal`Helper method to handle dropping a folder onto the directory.


#### Parameters

- target: HTMLElementThe drop target element.
- data: objectThe drop data.
- config: {    folders: documents.Folder[];    label: string;    maxFolderDepth: number;    type: string;}folders: documents.Folder[]The sibling folders.
label: stringThe label for entries in the directory.
maxFolderDepth: numberThe maximum folder depth in this directory.
type: stringThe type of entries in the directory.
- folders: documents.Folder[]The sibling folders.
- label: stringThe label for entries in the directory.
- maxFolderDepth: numberThe maximum folder depth in this directory.
- type: stringThe type of entries in the directory.

The drop target element.

The drop data.

- folders: documents.Folder[]The sibling folders.
- label: stringThe label for entries in the directory.
- maxFolderDepth: numberThe maximum folder depth in this directory.
- type: stringThe type of entries in the directory.


##### folders: documents.Folder[]

The sibling folders.


##### label: string

The label for entries in the directory.


##### maxFolderDepth: number

The maximum folder depth in this directory.


##### type: string

The type of entries in the directory.


#### Returns Promise<void | { folder: documents.Folder; sortData: object }>

Inherited from DocumentDirectory._handleDroppedFolder


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from DocumentDirectory.inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from DocumentDirectory.inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from DocumentDirectory.parseCSSDimension
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

Inherited from DocumentDirectory.parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from DocumentDirectory.waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from DocumentDirectory.waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

