# MeasuredTemplateConfig | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.MeasuredTemplateConfig.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- MeasuredTemplateConfig


# Class MeasuredTemplateConfig

The Application responsible for configuring a single MeasuredTemplate document within a parent Scene.


#### Param: object

The document being configured.


#### Param: options

Application configuration options.


#### Hierarchy (View Summary)

- HandlebarsApplication<this>MeasuredTemplateConfig
- MeasuredTemplateConfig

- MeasuredTemplateConfig


##### Index


### Properties


### Accessors


### Methods


## Properties


### options

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).options


### position

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).position


### tabGroups

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

`null`Inherited from HandlebarsApplicationMixin(DocumentSheetV2).tabGroups


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`
#### Inherit Doc

Overrides HandlebarsApplicationMixin(DocumentSheetV2).DEFAULT_OPTIONS


### StaticemittedEvents

`Static`Inherited from HandlebarsApplicationMixin(DocumentSheetV2).emittedEvents


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(DocumentSheetV2).PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).TABS


## Accessors


### classList

- get classList(): DOMTokenListThe CSS class list of this Application instance
Returns DOMTokenListInherited from HandlebarsApplicationMixin(DocumentSheetV2).classList

The CSS class list of this Application instance


#### Returns DOMTokenList

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).classList


### element

- get element(): HTMLElementThe HTMLElement which renders this Application into the DOM.
Returns HTMLElementInherited from HandlebarsApplicationMixin(DocumentSheetV2).element

The HTMLElement which renders this Application into the DOM.


#### Returns HTMLElement

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).element


### form

- get form(): null | HTMLFormElementDoes this Application have a top-level form element?
Returns null | HTMLFormElementInherited from HandlebarsApplicationMixin(DocumentSheetV2).form

Does this Application have a top-level form element?


#### Returns null | HTMLFormElement

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).form


### hasFrame

- get hasFrame(): booleanDoes this Application instance render within an outer window frame?
Returns booleanInherited from HandlebarsApplicationMixin(DocumentSheetV2).hasFrame

Does this Application instance render within an outer window frame?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).hasFrame


### id

- get id(): stringThe HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.
Returns stringInherited from HandlebarsApplicationMixin(DocumentSheetV2).id

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

`DEFAULT_OPTIONS``uniqueId``_initializeApplicationOptions`
#### Returns string

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).id


### minimized

- get minimized(): booleanIs this Application instance currently minimized?
Returns booleanInherited from HandlebarsApplicationMixin(DocumentSheetV2).minimized

Is this Application instance currently minimized?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).minimized


### parts

- get parts(): Record<string, HTMLElement>A record of all rendered template parts.
Returns Record<string, HTMLElement>Inherited from HandlebarsApplicationMixin(DocumentSheetV2).parts

A record of all rendered template parts.


#### Returns Record<string, HTMLElement>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).parts


### rendered

- get rendered(): booleanIs this Application instance currently rendered?
Returns booleanInherited from HandlebarsApplicationMixin(DocumentSheetV2).rendered

Is this Application instance currently rendered?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).rendered


### state

- get state(): numberThe current render state of the Application.
Returns numberInherited from HandlebarsApplicationMixin(DocumentSheetV2).state

The current render state of the Application.


#### Returns number

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).state


### title

- get title(): stringA convenience reference to the title of the Application window.
Returns stringInherited from HandlebarsApplicationMixin(DocumentSheetV2).title

A convenience reference to the title of the Application window.


#### Returns string

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).title


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from HandlebarsApplicationMixin(DocumentSheetV2).window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).window


## Methods


### _awaitTransition

- _awaitTransition(element: HTMLElement, timeout: number): Promise<void>InternalWait for a CSS transition to complete for an element.
Parameterselement: HTMLElementThe element which is transitioning
timeout: numberA timeout in milliseconds in case the transitionend event does not occur
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._awaitTransition
- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

`Internal`Wait for a CSS transition to complete for an element.


#### Parameters

- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

The element which is transitioning

A timeout in milliseconds in case the transitionend event does not occur


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._awaitTransition


### _configureRenderOptions

- _configureRenderOptions(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from HandlebarsApplicationMixin(DocumentSheetV2)._configureRenderOptions
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._configureRenderOptions


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
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._doEvent
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._doEvent


### _prepareContext

- _prepareContext(    options: any,): Promise<    ApplicationRenderContext & {        buttons: { icon: string; label: string; type: string }[];        templateTypes: {};        units: { degrees: string; gridUnits: any; pixels: string };        userColor: any;    },>Parametersoptions: anyReturns Promise<    ApplicationRenderContext & {        buttons: { icon: string; label: string; type: string }[];        templateTypes: {};        units: { degrees: string; gridUnits: any; pixels: string };        userColor: any;    },>Inherit DocOverrides HandlebarsApplicationMixin(DocumentSheetV2)._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<    ApplicationRenderContext & {        buttons: { icon: string; label: string; type: string }[];        templateTypes: {};        units: { degrees: string; gridUnits: any; pixels: string };        userColor: any;    },>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(DocumentSheetV2)._prepareContext


### _preRender

- _preRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from HandlebarsApplicationMixin(DocumentSheetV2)._preRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preRender


### _tearDown

- _tearDown(options: any): voidParametersoptions: anyReturns voidInherit DocInherited from HandlebarsApplicationMixin(DocumentSheetV2)._tearDown
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._tearDown


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).addEventListener
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).addEventListener


### bringToFront

- bringToFront(): voidBring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2).bringToFront

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).bringToFront


### changeTab

- changeTab(    tab: string,    group: string,    options?: {        event?: Event;        force?: boolean;        navElement?: HTMLElement;        updatePosition?: boolean;    },): voidChange the active tab within a tab group in this Application instance.
Parameterstab: stringThe name of the tab which should become active
group: stringThe name of the tab group which defines the set of tabs
Optionaloptions: {    event?: Event;    force?: boolean;    navElement?: HTMLElement;    updatePosition?: boolean;} = {}Additional options which affect tab navigation
Optionalevent?: EventAn interaction event which caused the tab change, if any
Optionalforce?: booleanForce changing the tab even if the new tab is already active
OptionalnavElement?: HTMLElementAn explicit navigation element being modified
OptionalupdatePosition?: booleanUpdate application position after changing the tab?
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2).changeTab
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).changeTab


### close

- close(    options?: Partial<ApplicationClosingOptions>,): Promise<MeasuredTemplateConfig>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<MeasuredTemplateConfig>A Promise which resolves to the closed Application instance
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<MeasuredTemplateConfig>

A Promise which resolves to the closed Application instance

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).close


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).dispatchEvent


### maximize

- maximize(): Promise<void>Restore the Application to its original dimensions.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2).maximize

Restore the Application to its original dimensions.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).maximize


### minimize

- minimize(): Promise<void>Minimize the Application, collapsing it to a minimal header.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2).minimize

Minimize the Application, collapsing it to a minimal header.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).minimize


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).removeEventListener
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).removeEventListener


### render

- render(    options?: boolean | HandlebarsRenderOptions,    _options?: HandlebarsRenderOptions,): Promise<MeasuredTemplateConfig>Render the Application, creating its HTMLElement and replacing its innerHTML.
Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.
ParametersOptionaloptions: boolean | HandlebarsRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
Optional_options: HandlebarsRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.
Returns Promise<MeasuredTemplateConfig>A Promise which resolves to the rendered Application instance
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).render
- Optionaloptions: boolean | HandlebarsRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
- Optional_options: HandlebarsRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.

Render the Application, creating its HTMLElement and replacing its innerHTML.
Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.


#### Parameters

- Optionaloptions: boolean | HandlebarsRenderOptions = {}Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.
- Optional_options: HandlebarsRenderOptions = {}Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.

`Optional`Options which configure application rendering behavior.
A boolean is interpreted as the "force" option.

`Optional`Legacy options for backwards-compatibility with the original
ApplicationV1#render signature.


#### Returns Promise<MeasuredTemplateConfig>

A Promise which resolves to the rendered Application instance

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).render


### setPosition

- setPosition(position?: Partial<ApplicationPosition>): void | ApplicationPositionUpdate the Application element position using provided data which is merged with the prior position.
ParametersOptionalposition: Partial<ApplicationPosition>New Application positioning data
Returns void | ApplicationPositionThe updated application position
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).setPosition
- Optionalposition: Partial<ApplicationPosition>New Application positioning data

Update the Application element position using provided data which is merged with the prior position.


#### Parameters

- Optionalposition: Partial<ApplicationPosition>New Application positioning data

`Optional`New Application positioning data


#### Returns void | ApplicationPosition

The updated application position

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).setPosition


### submit

- submit(submitOptions?: object): Promise<any>Programmatically submit an ApplicationV2 instance which implements a single top-level form.
ParametersOptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.
Returns Promise<any>A promise that resolves to the returned result of the form submission handler,
if any.
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).submit
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).submit


### toggleControls

- toggleControls(    expanded?: boolean,    options?: { animate?: boolean },): Promise<void>Toggle display of the Application controls menu.
Only applicable to window Applications.
ParametersOptionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
Returns Promise<void>A Promise which resolves once the control expansion animation is complete
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).toggleControls
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).toggleControls


### Protected_attachFrameListeners

`Protected`- _attachFrameListeners(): voidProtectedAttach event listeners to the Application frame.
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._attachFrameListeners

`Protected`Attach event listeners to the Application frame.


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._attachFrameListeners


### Protected_attachPartListeners

`Protected`- _attachPartListeners(    partId: string,    htmlElement: HTMLElement,    options: ApplicationRenderOptions,): voidProtectedAttach event listeners to rendered template parts.
ParameterspartId: stringThe id of the part being rendered
htmlElement: HTMLElementThe rendered HTML element for the part
options: ApplicationRenderOptionsRendering options passed to the render method
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._attachPartListeners
- partId: stringThe id of the part being rendered
- htmlElement: HTMLElementThe rendered HTML element for the part
- options: ApplicationRenderOptionsRendering options passed to the render method

`Protected`Attach event listeners to rendered template parts.


#### Parameters

- partId: stringThe id of the part being rendered
- htmlElement: HTMLElementThe rendered HTML element for the part
- options: ApplicationRenderOptionsRendering options passed to the render method

The id of the part being rendered

The rendered HTML element for the part

Rendering options passed to the render method


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._attachPartListeners


### Protected_canRender

`Protected`- _canRender(options: HandlebarsRenderOptions): false | voidProtectedTest whether this Application is allowed to be rendered.
Parametersoptions: HandlebarsRenderOptionsProvided render options
Returns false | voidReturn false to prevent rendering
ThrowsAn Error to display a warning message
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._canRender
- options: HandlebarsRenderOptionsProvided render options

`Protected`Test whether this Application is allowed to be rendered.


#### Parameters

- options: HandlebarsRenderOptionsProvided render options

Provided render options


#### Returns false | void

Return false to prevent rendering


#### Throws

An Error to display a warning message

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._canRender


### Protected_configureRenderParts

`Protected`- _configureRenderParts(    options: HandlebarsRenderOptions,): Record<string, HandlebarsTemplatePart>ProtectedAllow subclasses to dynamically configure render parts.
Parametersoptions: HandlebarsRenderOptionsReturns Record<string, HandlebarsTemplatePart>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._configureRenderParts
- options: HandlebarsRenderOptions

`Protected`Allow subclasses to dynamically configure render parts.


#### Parameters

- options: HandlebarsRenderOptions


#### Returns Record<string, HandlebarsTemplatePart>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._configureRenderParts


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
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._createContextMenu
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._createContextMenu


### Protected_getHeaderControls

`Protected`- _getHeaderControls(): ApplicationHeaderControlsEntry[]ProtectedConfigure the array of header control menu options
Returns ApplicationHeaderControlsEntry[]Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._getHeaderControls

`Protected`Configure the array of header control menu options


#### Returns ApplicationHeaderControlsEntry[]

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._getHeaderControls


### Protected_getTabsConfig

`Protected`- _getTabsConfig(group: string): null | ApplicationTabsConfigurationProtectedGet the configuration for a tabs group.
Parametersgroup: stringThe ID of a tabs group
Returns null | ApplicationTabsConfigurationInherited from HandlebarsApplicationMixin(DocumentSheetV2)._getTabsConfig
- group: stringThe ID of a tabs group

`Protected`Get the configuration for a tabs group.


#### Parameters

- group: stringThe ID of a tabs group

The ID of a tabs group


#### Returns null | ApplicationTabsConfiguration

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._getTabsConfig


### Protected_headerControlButtons

`Protected`- _headerControlButtons(): Generator<ApplicationHeaderControlsEntry, any, any>ProtectedIterate over header control buttons, filtering for controls which are visible for the current client.
Returns Generator<ApplicationHeaderControlsEntry, any, any>YieldsInherited from HandlebarsApplicationMixin(DocumentSheetV2)._headerControlButtons

`Protected`Iterate over header control buttons, filtering for controls which are visible for the current client.


#### Returns Generator<ApplicationHeaderControlsEntry, any, any>


#### Yields

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._headerControlButtons


### Protected_initializeApplicationOptions

`Protected`- _initializeApplicationOptions(    options: Partial<ApplicationConfiguration>,): ApplicationConfigurationProtectedInitialize configuration options for the Application instance.
The default behavior of this method is to intelligently merge options for each class with those of their parents.

Array-based options are concatenated
Inner objects are merged
Otherwise, properties in the subclass replace those defined by a parent

Parametersoptions: Partial<ApplicationConfiguration>Options provided directly to the constructor
Returns ApplicationConfigurationConfigured options for the application instance
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._initializeApplicationOptions
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._initializeApplicationOptions


### Protected_insertElement

`Protected`- _insertElement(element: HTMLElement): voidProtectedInsert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.
Parameterselement: HTMLElementThe element to insert
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._insertElement
- element: HTMLElementThe element to insert

`Protected`Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.


#### Parameters

- element: HTMLElementThe element to insert

The element to insert


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._insertElement


### Protected_onChangeForm

`Protected`- _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): voidProtectedHandle changes to an input element within the form.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: EventAn input change event within the form
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._onChangeForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

`Protected`Handle changes to an input element within the form.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

The form configuration for which this handler is bound

An input change event within the form


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onChangeForm


### Protected_onClickAction

`Protected`- _onClickAction(event: PointerEvent, target: HTMLElement): voidProtectedA generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.
Parametersevent: PointerEventThe originating click event
target: HTMLElementThe capturing HTML element which defined a [data-action]
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClickAction
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClickAction


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClickTab


### Protected_onClose

`Protected`- _onClose(options: HandlebarsRenderOptions): voidProtectedActions performed after closing the Application.
Post-close steps are not awaited by the close process.
Parametersoptions: HandlebarsRenderOptionsProvided render options
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClose
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed after closing the Application.
Post-close steps are not awaited by the close process.


#### Parameters

- options: HandlebarsRenderOptionsProvided render options

Provided render options


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onClose


### Protected_onFirstRender

`Protected`- _onFirstRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedActions performed after a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onFirstRender
- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed after a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onFirstRender


### Protected_onPosition

`Protected`- _onPosition(position: ApplicationPosition): voidProtectedActions performed after the Application is re-positioned.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._onPosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed after the Application is re-positioned.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onPosition


### Protected_onRender

`Protected`- _onRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedActions performed after any render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onRender
- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed after any render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onRender


### Protected_onSubmitForm

`Protected`- _onSubmitForm(    formConfig: ApplicationFormConfiguration,    event: Event | SubmitEvent,): Promise<void>ProtectedHandle submission for an Application which uses the form element.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: Event | SubmitEventThe form submission event
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onSubmitForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

`Protected`Handle submission for an Application which uses the form element.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

The form configuration for which this handler is bound

The form submission event


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._onSubmitForm


### Protected_postRender

`Protected`- _postRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPerform post-render finalization actions.
Parameterscontext: ApplicationRenderContextPrepared context data.
options: HandlebarsRenderOptionsProvided render options.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._postRender
- context: ApplicationRenderContextPrepared context data.
- options: HandlebarsRenderOptionsProvided render options.

`Protected`Perform post-render finalization actions.


#### Parameters

- context: ApplicationRenderContextPrepared context data.
- options: HandlebarsRenderOptionsProvided render options.

Prepared context data.

Provided render options.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._postRender


### Protected_preClose

`Protected`- _preClose(options: HandlebarsRenderOptions): Promise<void>ProtectedActions performed before closing the Application.
Pre-close steps are awaited by the close process.
Parametersoptions: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preClose
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed before closing the Application.
Pre-close steps are awaited by the close process.


#### Parameters

- options: HandlebarsRenderOptionsProvided render options

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preClose


### Protected_preFirstRender

`Protected`- _preFirstRender(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedActions performed before a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: HandlebarsRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preFirstRender
- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

`Protected`Actions performed before a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: HandlebarsRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preFirstRender


### Protected_preparePartContext

`Protected`- _preparePartContext(    partId: string,    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<ApplicationRenderContext>ProtectedPrepare context that is specific to only a single rendered part.
It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
visibility into the data that was used for rendering. It is acceptable to return a different context object
rather than mutating the shared context at the expense of this transparency.
ParameterspartId: stringThe part being rendered
context: ApplicationRenderContextShared context provided by _prepareContext
options: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns Promise<ApplicationRenderContext>Context data for a specific part
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preparePartContext
- partId: stringThe part being rendered
- context: ApplicationRenderContextShared context provided by _prepareContext
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Prepare context that is specific to only a single rendered part.

It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
visibility into the data that was used for rendering. It is acceptable to return a different context object
rather than mutating the shared context at the expense of this transparency.


#### Parameters

- partId: stringThe part being rendered
- context: ApplicationRenderContextShared context provided by _prepareContext
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

The part being rendered

Shared context provided by _prepareContext

Options which configure application rendering behavior


#### Returns Promise<ApplicationRenderContext>

Context data for a specific part

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preparePartContext


### Protected_prepareTabs

`Protected`- _prepareTabs(group: string): Record<string, ApplicationTab>ProtectedPrepare application tab data for a single tab group.
Parametersgroup: stringThe ID of the tab group to prepare
Returns Record<string, ApplicationTab>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._prepareTabs
- group: stringThe ID of the tab group to prepare

`Protected`Prepare application tab data for a single tab group.


#### Parameters

- group: stringThe ID of the tab group to prepare

The ID of the tab group to prepare


#### Returns Record<string, ApplicationTab>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._prepareTabs


### Protected_prePosition

`Protected`- _prePosition(position: ApplicationPosition): voidProtectedActions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._prePosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._prePosition


### Protected_preSyncPartState

`Protected`- _preSyncPartState(    partId: string,    newElement: HTMLElement,    priorElement: HTMLElement,    state: object,): voidProtectedPrepare data used to synchronize the state of a template part.
ParameterspartId: stringThe id of the part being rendered
newElement: HTMLElementThe new rendered HTML element for the part
priorElement: HTMLElementThe prior rendered HTML element for the part
state: objectA state object which is used to synchronize after replacement
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._preSyncPartState
- partId: stringThe id of the part being rendered
- newElement: HTMLElementThe new rendered HTML element for the part
- priorElement: HTMLElementThe prior rendered HTML element for the part
- state: objectA state object which is used to synchronize after replacement

`Protected`Prepare data used to synchronize the state of a template part.


#### Parameters

- partId: stringThe id of the part being rendered
- newElement: HTMLElementThe new rendered HTML element for the part
- priorElement: HTMLElementThe prior rendered HTML element for the part
- state: objectA state object which is used to synchronize after replacement

The id of the part being rendered

The new rendered HTML element for the part

The prior rendered HTML element for the part

A state object which is used to synchronize after replacement


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._preSyncPartState


### Protected_removeElement

`Protected`- _removeElement(element: HTMLElement): voidProtectedRemove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.
Parameterselement: HTMLElementThe element to be removed
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._removeElement
- element: HTMLElementThe element to be removed

`Protected`Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.


#### Parameters

- element: HTMLElementThe element to be removed

The element to be removed


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._removeElement


### Protected_renderFrame

`Protected`- _renderFrame(options: HandlebarsRenderOptions): Promise<HTMLElement>ProtectedRender the outer framing HTMLElement which wraps the inner HTML of the Application.
Parametersoptions: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns Promise<HTMLElement>Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderFrame
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Render the outer framing HTMLElement which wraps the inner HTML of the Application.


#### Parameters

- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

Options which configure application rendering behavior


#### Returns Promise<HTMLElement>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderFrame


### Protected_renderHeaderControl

`Protected`- _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElementProtectedRender a header control button.
Parameterscontrol: ApplicationHeaderControlsEntryReturns HTMLLIElementInherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderHeaderControl
- control: ApplicationHeaderControlsEntry

`Protected`Render a header control button.


#### Parameters

- control: ApplicationHeaderControlsEntry


#### Returns HTMLLIElement

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderHeaderControl


### Protected_renderHTML

`Protected`- _renderHTML(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<Record<string, HTMLElement>>ProtectedRender each configured application part using Handlebars templates.
Parameterscontext: ApplicationRenderContextContext data for the render operation
options: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns Promise<Record<string, HTMLElement>>A single rendered HTMLElement for each requested part
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderHTML
- context: ApplicationRenderContextContext data for the render operation
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Render each configured application part using Handlebars templates.


#### Parameters

- context: ApplicationRenderContextContext data for the render operation
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

Context data for the render operation

Options which configure application rendering behavior


#### Returns Promise<Record<string, HTMLElement>>

A single rendered HTMLElement for each requested part

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._renderHTML


### Protected_replaceHTML

`Protected`- _replaceHTML(    result: Record<string, HTMLElement>,    content: HTMLElement,    options: HandlebarsRenderOptions,): voidProtectedReplace the HTML of the application with the result provided by Handlebars rendering.
Parametersresult: Record<string, HTMLElement>The result from Handlebars template rendering
content: HTMLElementThe content element into which the rendered result must be inserted
options: HandlebarsRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._replaceHTML
- result: Record<string, HTMLElement>The result from Handlebars template rendering
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

`Protected`Replace the HTML of the application with the result provided by Handlebars rendering.


#### Parameters

- result: Record<string, HTMLElement>The result from Handlebars template rendering
- content: HTMLElementThe content element into which the rendered result must be inserted
- options: HandlebarsRenderOptionsOptions which configure application rendering behavior

The result from Handlebars template rendering

The content element into which the rendered result must be inserted

Options which configure application rendering behavior


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._replaceHTML


### Protected_syncPartState

`Protected`- _syncPartState(    partId: string,    newElement: HTMLElement,    priorElement: HTMLElement,    state: object,): voidProtectedSynchronize the state of a template part after it has been rendered and replaced in the DOM.
ParameterspartId: stringThe id of the part being rendered
newElement: HTMLElementThe new rendered HTML element for the part
priorElement: HTMLElementThe prior rendered HTML element for the part
state: objectA state object which is used to synchronize after replacement
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._syncPartState
- partId: stringThe id of the part being rendered
- newElement: HTMLElementThe new rendered HTML element for the part
- priorElement: HTMLElementThe prior rendered HTML element for the part
- state: objectA state object which is used to synchronize after replacement

`Protected`Synchronize the state of a template part after it has been rendered and replaced in the DOM.


#### Parameters

- partId: stringThe id of the part being rendered
- newElement: HTMLElementThe new rendered HTML element for the part
- priorElement: HTMLElementThe prior rendered HTML element for the part
- state: objectA state object which is used to synchronize after replacement

The id of the part being rendered

The new rendered HTML element for the part

The prior rendered HTML element for the part

A state object which is used to synchronize after replacement


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._syncPartState


### Protected_updateFrame

`Protected`- _updateFrame(options: HandlebarsRenderOptions): voidProtectedWhen the Application is rendered, optionally update aspects of the window frame.
Parametersoptions: HandlebarsRenderOptionsOptions provided at render-time
Returns voidInherited from HandlebarsApplicationMixin(DocumentSheetV2)._updateFrame
- options: HandlebarsRenderOptionsOptions provided at render-time

`Protected`When the Application is rendered, optionally update aspects of the window frame.


#### Parameters

- options: HandlebarsRenderOptionsOptions provided at render-time

Options provided at render-time


#### Returns void

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._updateFrame


### Protected_updatePosition

`Protected`- _updatePosition(position: ApplicationPosition): ApplicationPositionProtectedTranslate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.
Parametersposition: ApplicationPositionRequested Application positioning data
Returns ApplicationPositionResolved Application positioning data
Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._updatePosition
- position: ApplicationPositionRequested Application positioning data

`Protected`Translate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.


#### Parameters

- position: ApplicationPositionRequested Application positioning data

Requested Application positioning data


#### Returns ApplicationPosition

Resolved Application positioning data

Inherited from HandlebarsApplicationMixin(DocumentSheetV2)._updatePosition


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from HandlebarsApplicationMixin(DocumentSheetV2).inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from HandlebarsApplicationMixin(DocumentSheetV2).parseCSSDimension
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

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(DocumentSheetV2).waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

