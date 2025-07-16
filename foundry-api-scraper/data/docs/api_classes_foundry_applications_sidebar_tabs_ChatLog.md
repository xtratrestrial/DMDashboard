# ChatLog | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.ChatLog.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sidebar
- tabs
- ChatLog


# Class ChatLog

The sidebar chat tab.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions, this>ChatLog
- ChatLog

- ChatLog


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new ChatLog(options?: Partial<ApplicationConfiguration>): ChatLogApplications are constructed by providing an object of configuration options.
ParametersOptionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance
Returns ChatLogInherited from HandlebarsApplicationMixin(AbstractSidebarTab).constructor
- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

Applications are constructed by providing an object of configuration options.


#### Parameters

- Optionaloptions: Partial<ApplicationConfiguration> = {}Options used to configure the Application instance

`Optional`Options used to configure the Application instance


#### Returns ChatLog

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


### StaticMAX_MESSAGE_HISTORY

`Static`The maximum number of messages to retain in the history in a given session.


### StaticMESSAGE_PATTERNS

`Static`An enumeration of regular expression patterns used to match chat messages.


### StaticMULTILINE_COMMANDS

`Static`The set of commands that can be processed over multiple lines.


### StaticNOTIFY_DURATION

`Static`The number of milliseconds to keep a chat card notification until it is automatically dismissed.


### StaticNOTIFY_TICKER

`Static`The notification ticker frequency.


### StaticNOTIFY_UNPAUSE

`Static`The number of milliseconds to wait before unpausing the notification queue.


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS


### StaticPIP_DURATION

`Static`The number of milliseconds to display the chat notification pip.


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER_STATES


### StatictabName

`Static`
### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS


### StaticUPDATE_TIMESTAMP_FREQUENCY

`Static`How often, in milliseconds, to update timestamps.


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


### collection

- get collection(): MessagesA reference to the Messages collection that the chat log displays.
Returns Messages

A reference to the Messages collection that the chat log displays.


#### Returns Messages


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


### history

- get history(): { index: number; pending: string; queue: string[] }Message history management.
Returns { index: number; pending: string; queue: string[] }

Message history management.


#### Returns { index: number; pending: string; queue: string[] }


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


### isAtBottom

- get isAtBottom(): booleanA flag for whether the chat log is currently scrolled to the bottom.
Returns boolean

A flag for whether the chat log is currently scrolled to the bottom.


#### Returns boolean


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


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).window


## Methods


### _attachPartListeners

- _attachPartListeners(partId: any, element: any, options: any): voidParameterspartId: anyelement: anyoptions: anyReturns voidInherit Doc
- partId: any
- element: any
- options: any


#### Parameters

- partId: any
- element: any
- options: any


#### Returns void


#### Inherit Doc


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


### _onActivate

- _onActivate(): voidReturns voidInherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onActivate


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onActivate


### _onClose

- _onClose(options: any): voidParametersoptions: anyReturns voidInherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onClose
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onClose


### _onDeactivate

- _onDeactivate(): voidReturns voidInherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onDeactivate


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onDeactivate


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

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._onRender


### _postRender

- _postRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._postRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._postRender


### _preClose

- _preClose(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._preClose
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._preClose


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


### _preSyncPartState

- _preSyncPartState(    partId: any,    newElement: any,    priorElement: any,    state: any,): voidParameterspartId: anynewElement: anypriorElement: anystate: anyReturns voidInherit Doc
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


### _renderFrame

- _renderFrame(options: any): Promise<HTMLElement>Parametersoptions: anyReturns Promise<HTMLElement>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderFrame
- options: any


#### Parameters

- options: any


#### Returns Promise<HTMLElement>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._renderFrame


### _renderHTML

- _renderHTML(context: any, options: any): Promise<any>Parameterscontext: anyoptions: anyReturns Promise<any>Inherit DocOverrides HandlebarsApplicationMixin(AbstractSidebarTab)._renderHTML
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<any>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab)._renderHTML


### _syncPartState

- _syncPartState(    partId: any,    newElement: any,    priorElement: any,    state: any,): voidParameterspartId: anynewElement: anypriorElement: anystate: anyReturns voidInherit Doc
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


### _toggleNotifications

- _toggleNotifications(options?: { closing?: boolean }): voidInternalUpdate notification display, based on interface state.
If the chat log is popped-out, embed chat input into it. Otherwise,
if the sidebar is expanded, and the chat log is the active tab, embed chat input into it. Otherwise,
embed chat input into the notifications area.
If the sidebar is expanded, and the chat log is the active tab, do not display notifications.
If the chat log is popped out, do not display notifications.
ParametersOptionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.
Returns voidFires
- Optionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.
- Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.

`Internal`Update notification display, based on interface state.
If the chat log is popped-out, embed chat input into it. Otherwise,
if the sidebar is expanded, and the chat log is the active tab, embed chat input into it. Otherwise,
embed chat input into the notifications area.
If the sidebar is expanded, and the chat log is the active tab, do not display notifications.
If the chat log is popped out, do not display notifications.


#### Parameters

- Optionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.
- Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.

`Optional`- Optionalclosing?: booleanWhether this method has been triggered by the chat popout closing.


##### Optionalclosing?: boolean

`Optional`Whether this method has been triggered by the chat popout closing.


#### Returns void


#### Fires


### _updateRollMode

- _updateRollMode(): voidInternalHandle updating the roll mode display.
Returns void

`Internal`Handle updating the roll mode display.


#### Returns void


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

- close(options?: Partial<ApplicationClosingOptions>): Promise<ChatLog>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<ChatLog>A Promise which resolves to the closed Application instance
Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<ChatLog>

A Promise which resolves to the closed Application instance

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close


### deleteMessage

- deleteMessage(    messageId: string,    options?: { deleteAll?: boolean },): Promise<void>Delete a single message from the chat log.
ParametersmessageId: stringThe ID of the ChatMessage Document to remove from the log.
Optionaloptions: { deleteAll?: boolean } = {}OptionaldeleteAll?: booleanDelete all messages from the log.
Returns Promise<void>
- messageId: stringThe ID of the ChatMessage Document to remove from the log.
- Optionaloptions: { deleteAll?: boolean } = {}OptionaldeleteAll?: booleanDelete all messages from the log.
- OptionaldeleteAll?: booleanDelete all messages from the log.

Delete a single message from the chat log.


#### Parameters

- messageId: stringThe ID of the ChatMessage Document to remove from the log.
- Optionaloptions: { deleteAll?: boolean } = {}OptionaldeleteAll?: booleanDelete all messages from the log.
- OptionaldeleteAll?: booleanDelete all messages from the log.

The ID of the ChatMessage Document to remove from the log.

`Optional`- OptionaldeleteAll?: booleanDelete all messages from the log.


##### OptionaldeleteAll?: boolean

`Optional`Delete all messages from the log.


#### Returns Promise<void>


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


### notify

- notify(    message: documents.ChatMessage,    options?: { existing?: HTMLElement; newMessage?: boolean },): voidTrigger a notification that alerts the user visually and audibly of new chat activity.
Parametersmessage: documents.ChatMessageThe created or updated message.
Optionaloptions: { existing?: HTMLElement; newMessage?: boolean } = {}Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
OptionalnewMessage?: booleanWhether this is a new message.
Returns void
- message: documents.ChatMessageThe created or updated message.
- Optionaloptions: { existing?: HTMLElement; newMessage?: boolean } = {}Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
OptionalnewMessage?: booleanWhether this is a new message.
- Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
- OptionalnewMessage?: booleanWhether this is a new message.

Trigger a notification that alerts the user visually and audibly of new chat activity.


#### Parameters

- message: documents.ChatMessageThe created or updated message.
- Optionaloptions: { existing?: HTMLElement; newMessage?: boolean } = {}Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
OptionalnewMessage?: booleanWhether this is a new message.
- Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
- OptionalnewMessage?: booleanWhether this is a new message.

The created or updated message.

`Optional`- Optionalexisting?: HTMLElementThe existing rendered chat card, if it exists.
- OptionalnewMessage?: booleanWhether this is a new message.


##### Optionalexisting?: HTMLElement

`Optional`The existing rendered chat card, if it exists.


##### OptionalnewMessage?: boolean

`Optional`Whether this is a new message.


#### Returns void


### postOne

- postOne(    message: documents.ChatMessage,    options?: { before?: string; notify?: boolean },): Promise<void>Post a single chat message to the log.
Parametersmessage: documents.ChatMessageThe chat message.
Optionaloptions: { before?: string; notify?: boolean } = {}Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
Returns Promise<void>A Promise which resolves once the message has been posted.
- message: documents.ChatMessageThe chat message.
- Optionaloptions: { before?: string; notify?: boolean } = {}Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
- Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.

Post a single chat message to the log.


#### Parameters

- message: documents.ChatMessageThe chat message.
- Optionaloptions: { before?: string; notify?: boolean } = {}Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
- Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.

The chat message.

`Optional`- Optionalbefore?: stringAn existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.
- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.


##### Optionalbefore?: string

`Optional`An existing message ID to prepend the posted message to, by default the
new message is appended to the end of the log.


##### Optionalnotify?: boolean

`Optional`Trigger a notification which shows the log as having a new unread message.


#### Returns Promise<void>

A Promise which resolves once the message has been posted.


### processMessage

- processMessage(    message: string,    options?: { speaker?: any },): Promise<void | documents.ChatMessage>Prepare the data object of chat message data depending on the type of message being posted.
Parametersmessage: stringThe original string of the message content
Optionaloptions: { speaker?: any } = {}Additional options
Optionalspeaker?: anyThe speaker data
Returns Promise<void | documents.ChatMessage>The created ChatMessage Document, or void if we were executing a
macro instead.
ThrowsIf an invalid command is found.
- message: stringThe original string of the message content
- Optionaloptions: { speaker?: any } = {}Additional options
Optionalspeaker?: anyThe speaker data
- Optionalspeaker?: anyThe speaker data

Prepare the data object of chat message data depending on the type of message being posted.


#### Parameters

- message: stringThe original string of the message content
- Optionaloptions: { speaker?: any } = {}Additional options
Optionalspeaker?: anyThe speaker data
- Optionalspeaker?: anyThe speaker data

The original string of the message content

`Optional`Additional options

- Optionalspeaker?: anyThe speaker data


##### Optionalspeaker?: any

`Optional`The speaker data


#### Returns Promise<void | documents.ChatMessage>

The created ChatMessage Document, or void if we were executing a
macro instead.


#### Throws

If an invalid command is found.


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

- render(options: any, _options: any): Promise<ChatLog>Parametersoptions: any_options: anyReturns Promise<ChatLog>Inherit DocInherited from HandlebarsApplicationMixin(AbstractSidebarTab).render
- options: any
- _options: any


#### Parameters

- options: any
- _options: any


#### Returns Promise<ChatLog>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render


### renderBatch

- renderBatch(size: number): Promise<void>Render a batch of additional messages, prepending them to the top of the log.
Parameterssize: numberThe batch size.
Returns Promise<void>
- size: numberThe batch size.

Render a batch of additional messages, prepending them to the top of the log.


#### Parameters

- size: numberThe batch size.

The batch size.


#### Returns Promise<void>


### renderPopout

- renderPopout(): Promise<    AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>,>Pop-out this sidebar tab as a new application.
Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout

Pop-out this sidebar tab as a new application.


#### Returns Promise<AbstractSidebarTab<ApplicationConfiguration, ApplicationRenderOptions>>

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout


### scrollBottom

- scrollBottom(    options?: {        popout?: boolean;        scrollOptions?: ScrollIntoViewOptions;        waitImages?: boolean;    },): Promise<void>Scroll the chat log to the bottom.
ParametersOptionaloptions: {    popout?: boolean;    scrollOptions?: ScrollIntoViewOptions;    waitImages?: boolean;} = {}Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.
Returns Promise<void>
- Optionaloptions: {    popout?: boolean;    scrollOptions?: ScrollIntoViewOptions;    waitImages?: boolean;} = {}Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.
- Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
- OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
- OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.

Scroll the chat log to the bottom.


#### Parameters

- Optionaloptions: {    popout?: boolean;    scrollOptions?: ScrollIntoViewOptions;    waitImages?: boolean;} = {}Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.
- Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
- OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
- OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.

`Optional`- Optionalpopout?: booleanIf a popout exists, scroll it to the bottom too.
- OptionalscrollOptions?: ScrollIntoViewOptionsOptions to configure scrolling behavior.
- OptionalwaitImages?: booleanWait for any images embedded in the chat log to load first
before scrolling.


##### Optionalpopout?: boolean

`Optional`If a popout exists, scroll it to the bottom too.


##### OptionalscrollOptions?: ScrollIntoViewOptions

`Optional`Options to configure scrolling behavior.


##### OptionalwaitImages?: boolean

`Optional`Wait for any images embedded in the chat log to load first
before scrolling.


#### Returns Promise<void>


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


### updateMessage

- updateMessage(    message: documents.ChatMessage,    options?: { notify?: boolean },): Promise<void>Update the contents of a previously-posted message.
Parametersmessage: documents.ChatMessageThe ChatMessage instance to update.
options: { notify?: boolean } = {}Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
Returns Promise<void>
- message: documents.ChatMessageThe ChatMessage instance to update.
- options: { notify?: boolean } = {}Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.

Update the contents of a previously-posted message.


#### Parameters

- message: documents.ChatMessageThe ChatMessage instance to update.
- options: { notify?: boolean } = {}Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.
- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.

The ChatMessage instance to update.

- Optionalnotify?: booleanTrigger a notification which shows the log as having a new unread message.


##### Optionalnotify?: boolean

`Optional`Trigger a notification which shows the log as having a new unread message.


#### Returns Promise<void>


### updateTimestamps

- updateTimestamps(): voidUpdate displayed timestamps for every displayed message in the chat log.
Timestamps are displayed in a humanized "time-since" format.
Returns void

Update displayed timestamps for every displayed message in the chat log.
Timestamps are displayed in a humanized "time-since" format.


#### Returns void


### Protected_attachFrameListeners

`Protected`- _attachFrameListeners(): voidProtectedAttach event listeners to the Application frame.
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._attachFrameListeners

`Protected`Attach event listeners to the Application frame.


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._attachFrameListeners


### Protected_attachLogListeners

`Protected`- _attachLogListeners(    element: HTMLElement,    options: ApplicationRenderOptions,): voidProtectedAttach listeners to the chat log.
Parameterselement: HTMLElementThe log element.
options: ApplicationRenderOptionsReturns void
- element: HTMLElementThe log element.
- options: ApplicationRenderOptions

`Protected`Attach listeners to the chat log.


#### Parameters

- element: HTMLElementThe log element.
- options: ApplicationRenderOptions

The log element.


#### Returns void


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


### Protected_getEntryContextOptions

`Protected`- _getEntryContextOptions(): ContextMenuEntry[]ProtectedGet context menu entries for chat messages in the log.
Returns ContextMenuEntry[]

`Protected`Get context menu entries for chat messages in the log.


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


### Protected_onClickAction

`Protected`- _onClickAction(event: PointerEvent, target: HTMLElement): voidProtectedA generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.
Parametersevent: PointerEventThe originating click event
target: HTMLElementThe capturing HTML element which defined a [data-action]
Returns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickAction
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

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickAction


### Protected_onClickNotification

`Protected`- _onClickNotification(event: PointerEvent): voidProtectedHandle clicking a chat card notification.
Treat action button clicks within the Notifications UI as action clicks on the ChatLog instance itself.
Parametersevent: PointerEventThe triggering event.
Returns void
- event: PointerEventThe triggering event.

`Protected`Handle clicking a chat card notification.
Treat action button clicks within the Notifications UI as action clicks on the ChatLog instance itself.


#### Parameters

- event: PointerEventThe triggering event.

The triggering event.


#### Returns void


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab)._onClickTab


### Protected_onKeyDown

`Protected`- _onKeyDown(event: KeyboardEvent): voidProtectedHandle keydown events in the chat message entry textarea.
Parametersevent: KeyboardEventThe triggering event.
Returns void
- event: KeyboardEventThe triggering event.

`Protected`Handle keydown events in the chat message entry textarea.


#### Parameters

- event: KeyboardEventThe triggering event.

The triggering event.


#### Returns void


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


### Protected_prepareInputContext

`Protected`- _prepareInputContext(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedPrepare rendering context for the chat panel's message input component.
Parameterscontext: ApplicationRenderContextoptions: ApplicationRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: ApplicationRenderOptions

`Protected`Prepare rendering context for the chat panel's message input component.


#### Parameters

- context: ApplicationRenderContext
- options: ApplicationRenderOptions


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


### Protected_preSyncInputState

`Protected`- _preSyncInputState(    newElement: HTMLElement,    priorElement: HTMLElement,    state: object,): voidProtectedPrepare data used to synchronize the state of the chat input.
ParametersnewElement: HTMLElementThe newly-rendered element.
priorElement: HTMLElementThe existing element.
state: objectA state object which is used to synchronize after replacement.
Returns void
- newElement: HTMLElementThe newly-rendered element.
- priorElement: HTMLElementThe existing element.
- state: objectA state object which is used to synchronize after replacement.

`Protected`Prepare data used to synchronize the state of the chat input.


#### Parameters

- newElement: HTMLElementThe newly-rendered element.
- priorElement: HTMLElementThe existing element.
- state: objectA state object which is used to synchronize after replacement.

The newly-rendered element.

The existing element.

A state object which is used to synchronize after replacement.


#### Returns void


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


### Protected_shouldShowNotifications

`Protected`- _shouldShowNotifications(options?: { closing?: boolean }): booleanProtectedDetermine whether the notifications pane should be visible.
ParametersOptionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether the chat popout is closing.
Returns boolean
- Optionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether the chat popout is closing.
- Optionalclosing?: booleanWhether the chat popout is closing.

`Protected`Determine whether the notifications pane should be visible.


#### Parameters

- Optionaloptions: { closing?: boolean } = {}Optionalclosing?: booleanWhether the chat popout is closing.
- Optionalclosing?: booleanWhether the chat popout is closing.

`Optional`- Optionalclosing?: booleanWhether the chat popout is closing.


##### Optionalclosing?: boolean

`Optional`Whether the chat popout is closing.


#### Returns boolean


### Protected_syncInputState

`Protected`- _syncInputState(    newElement: HTMLElement,    priorElement: HTMLElement,    state: object,): voidProtectedSynchronize the state of the chat input.
ParametersnewElement: HTMLElementThe newly-rendered element.
priorElement: HTMLElementThe element being replaced.
state: objectThe state object used to synchronize the pre- and post-render states.
Returns void
- newElement: HTMLElementThe newly-rendered element.
- priorElement: HTMLElementThe element being replaced.
- state: objectThe state object used to synchronize the pre- and post-render states.

`Protected`Synchronize the state of the chat input.


#### Parameters

- newElement: HTMLElementThe newly-rendered element.
- priorElement: HTMLElementThe element being replaced.
- state: objectThe state object used to synchronize the pre- and post-render states.

The newly-rendered element.

The element being replaced.

The state object used to synchronize the pre- and post-render states.


#### Returns void


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


### Staticparse

`Static`- parse(    message: string,): [string, string[] | RegExpMatchArray | RegExpMatchArray[]]Parse a chat string to identify the chat command (if any) which was used.
Parametersmessage: stringThe message to parse.
Returns [string, string[] | RegExpMatchArray | RegExpMatchArray[]]The identified command and regex match.
- message: stringThe message to parse.

Parse a chat string to identify the chat command (if any) which was used.


#### Parameters

- message: stringThe message to parse.

The message to parse.


#### Returns [string, string[] | RegExpMatchArray | RegExpMatchArray[]]

The identified command and regex match.


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


### StaticrenderMessage

`Static`- renderMessage(    message: documents.ChatMessage,    options?: object,): Promise<HTMLElement>Handles chat message rendering during the ChatMessage#getHTML deprecation period. After that period ends, calls to
this method can be replaced by ChatMessage#renderHTML.
Parametersmessage: documents.ChatMessageThe chat message to render.
Optionaloptions: objectOptions forwarded to the render function.
Returns Promise<HTMLElement>ThrowsIf the message's render methods do not return a usable result.
- message: documents.ChatMessageThe chat message to render.
- Optionaloptions: objectOptions forwarded to the render function.

Handles chat message rendering during the ChatMessage#getHTML deprecation period. After that period ends, calls to
this method can be replaced by ChatMessage#renderHTML.


#### Parameters

- message: documents.ChatMessageThe chat message to render.
- Optionaloptions: objectOptions forwarded to the render function.

The chat message to render.

`Optional`Options forwarded to the render function.


#### Returns Promise<HTMLElement>


#### Throws

If the message's render methods do not return a usable result.


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

