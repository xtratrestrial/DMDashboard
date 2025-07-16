# FilePicker | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.apps.FilePicker.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- apps
- FilePicker


# Class FilePicker

The FilePicker application renders contents of the server-side public directory.
This app allows for navigating and uploading files to the public path.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- ApplicationV2<ApplicationConfiguration, ApplicationRenderOptions, this>FilePicker
- FilePicker

- FilePicker


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new FilePicker(options?: any): FilePickerParametersOptionaloptions: any = {}Options that configure the
behavior of the FilePicker
Returns FilePickerOverrides HandlebarsApplicationMixin(ApplicationV2).constructor
- Optionaloptions: any = {}Options that configure the
behavior of the FilePicker


#### Parameters

- Optionaloptions: any = {}Options that configure the
behavior of the FilePicker

`Optional`Options that configure the
behavior of the FilePicker


#### Returns FilePicker

Overrides HandlebarsApplicationMixin(ApplicationV2).constructor


## Properties


### activeSource

Track the active source tab which is being browsed


### button

A button controlling the display of the picker UI


### callback

A callback function to trigger once a file has been selected


### displayMode

The display mode of the FilePicker UI


### extensions

The current set of file extensions which are being filtered upon


### field

The target HTML element this file picker is bound to


### options

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(ApplicationV2).options


### position

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(ApplicationV2).position


### request

The full requested path given by the user


### results

The latest set of results browsed from the server


### sources

The file sources available for browsing


### tabGroups

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

`null`Inherited from HandlebarsApplicationMixin(ApplicationV2).tabGroups


### type

The general file type which controls the set of extensions which will be accepted


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(ApplicationV2)._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(ApplicationV2)._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(ApplicationV2).BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`
#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2).DEFAULT_OPTIONS


### StaticDISPLAY_MODES

`Static`Enumerate the allowed FilePicker display modes


### StaticemittedEvents

`Static`Inherited from HandlebarsApplicationMixin(ApplicationV2).emittedEvents


### StaticFILE_TYPES

`Static`The allowed values for the type of this FilePicker instance.


### StaticLAST_BROWSED_DIRECTORY

`Static`Record the last-browsed directory path so that re-opening a different FilePicker instance uses the same target


### StaticLAST_DISPLAY_MODE

`Static`Record the last-configured display mode so that re-opening a different FilePicker instance uses the same mode.


### StaticLAST_TILE_SIZE

`Static`Record the last-configured tile size which can automatically be applied to new FilePicker instances


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(ApplicationV2).PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(ApplicationV2).RENDER_STATES


### StaticS3_BUCKETS

`Static`Cache the names of S3 buckets which can be used


### StaticTABS

`Static`Overrides HandlebarsApplicationMixin(ApplicationV2).TABS


## Accessors


### canCreateFolder

- get canCreateFolder(): booleanWhether the current user is able to create folders.
Returns boolean

Whether the current user is able to create folders.


#### Returns boolean


### canUpload

- get canUpload(): booleanWhether the current use is able to upload file content.
Returns boolean

Whether the current use is able to upload file content.


#### Returns boolean


### classList

- get classList(): DOMTokenListThe CSS class list of this Application instance
Returns DOMTokenListInherited from HandlebarsApplicationMixin(ApplicationV2).classList

The CSS class list of this Application instance


#### Returns DOMTokenList

Inherited from HandlebarsApplicationMixin(ApplicationV2).classList


### element

- get element(): HTMLElementThe HTMLElement which renders this Application into the DOM.
Returns HTMLElementInherited from HandlebarsApplicationMixin(ApplicationV2).element

The HTMLElement which renders this Application into the DOM.


#### Returns HTMLElement

Inherited from HandlebarsApplicationMixin(ApplicationV2).element


### favorites

- get favorites(): Record<string, FavoriteFolder>Get favorite folders for quick access
Returns Record<string, FavoriteFolder>

Get favorite folders for quick access


#### Returns Record<string, FavoriteFolder>


### form

- get form(): null | HTMLFormElementDoes this Application have a top-level form element?
Returns null | HTMLFormElementInherited from HandlebarsApplicationMixin(ApplicationV2).form

Does this Application have a top-level form element?


#### Returns null | HTMLFormElement

Inherited from HandlebarsApplicationMixin(ApplicationV2).form


### hasFrame

- get hasFrame(): booleanDoes this Application instance render within an outer window frame?
Returns booleanInherited from HandlebarsApplicationMixin(ApplicationV2).hasFrame

Does this Application instance render within an outer window frame?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(ApplicationV2).hasFrame


### id

- get id(): stringThe HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.
Returns stringInherited from HandlebarsApplicationMixin(ApplicationV2).id

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

`DEFAULT_OPTIONS``uniqueId``_initializeApplicationOptions`
#### Returns string

Inherited from HandlebarsApplicationMixin(ApplicationV2).id


### minimized

- get minimized(): booleanIs this Application instance currently minimized?
Returns booleanInherited from HandlebarsApplicationMixin(ApplicationV2).minimized

Is this Application instance currently minimized?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(ApplicationV2).minimized


### rendered

- get rendered(): booleanIs this Application instance currently rendered?
Returns booleanInherited from HandlebarsApplicationMixin(ApplicationV2).rendered

Is this Application instance currently rendered?


#### Returns boolean

Inherited from HandlebarsApplicationMixin(ApplicationV2).rendered


### source

- get source(): objectReturn the source object for the currently active source
Returns object

Return the source object for the currently active source


#### Returns object


### state

- get state(): numberThe current render state of the Application.
Returns numberInherited from HandlebarsApplicationMixin(ApplicationV2).state

The current render state of the Application.


#### Returns number

Inherited from HandlebarsApplicationMixin(ApplicationV2).state


### target

- get target(): stringReturn the target directory for the currently active source
Returns string

Return the target directory for the currently active source


#### Returns string


### title

- get title(): stringReturns stringOverrides HandlebarsApplicationMixin(ApplicationV2).title


#### Returns string

Overrides HandlebarsApplicationMixin(ApplicationV2).title


### window

- get window(): {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Convenience references to window header elements.
Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}Inherited from HandlebarsApplicationMixin(ApplicationV2).window

Convenience references to window header elements.


#### Returns {    close: HTMLButtonElement;    content: HTMLElement;    controls: HTMLButtonElement;    controlsDropdown: HTMLDivElement;    header: HTMLElement;    icon: HTMLElement;    onDrag: Function;    onResize: Function;    pointerMoveThrottle: boolean;    pointerStartPosition: ApplicationPosition;    resize: HTMLElement;    title: HTMLHeadingElement;}

Inherited from HandlebarsApplicationMixin(ApplicationV2).window


### Staticimplementation

`Static`- get implementation(): typeof FilePickerRetrieve the configured FilePicker implementation.
Returns typeof FilePicker

Retrieve the configured FilePicker implementation.


#### Returns typeof FilePicker


### StaticuploadURL

`Static`- get uploadURL(): stringReturn the upload URL to which the FilePicker should post uploaded files
Returns string

Return the upload URL to which the FilePicker should post uploaded files


#### Returns string


## Methods


### _awaitTransition

- _awaitTransition(element: HTMLElement, timeout: number): Promise<void>InternalWait for a CSS transition to complete for an element.
Parameterselement: HTMLElementThe element which is transitioning
timeout: numberA timeout in milliseconds in case the transitionend event does not occur
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._awaitTransition
- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

`Internal`Wait for a CSS transition to complete for an element.


#### Parameters

- element: HTMLElementThe element which is transitioning
- timeout: numberA timeout in milliseconds in case the transitionend event does not occur

The element which is transitioning

A timeout in milliseconds in case the transitionend event does not occur


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._awaitTransition


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
Inherited from HandlebarsApplicationMixin(ApplicationV2)._doEvent
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._doEvent


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocOverrides HandlebarsApplicationMixin(ApplicationV2)._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2)._onRender


### _prepareContext

- _prepareContext(    options: any,): Promise<    ApplicationRenderContext & {        bucket: any;        buckets: any;        buttons: { icon: string; label: string; type: string }[];        canCreateFolder: boolean;        canGoBack: boolean;        canSelect: boolean;        canTogglePrivacy: boolean;        canUpload: boolean;        dirs: any;        displayMode: string;        extensions: string[];        favorites: Record<string, FavoriteFolder>;        files: any;        isS3: boolean;        noResults: boolean;        rootId: string;        selected: any;        source: object;        sources: Record<            "data"            | "public"            | "s3",            undefined | { bucket?: string; buckets?: string[]; target: string },        >;        target: string;        tileSize: any;        user: null | documents.User;    },>Parametersoptions: anyReturns Promise<    ApplicationRenderContext & {        bucket: any;        buckets: any;        buttons: { icon: string; label: string; type: string }[];        canCreateFolder: boolean;        canGoBack: boolean;        canSelect: boolean;        canTogglePrivacy: boolean;        canUpload: boolean;        dirs: any;        displayMode: string;        extensions: string[];        favorites: Record<string, FavoriteFolder>;        files: any;        isS3: boolean;        noResults: boolean;        rootId: string;        selected: any;        source: object;        sources: Record<            "data"            | "public"            | "s3",            undefined | { bucket?: string; buckets?: string[]; target: string },        >;        target: string;        tileSize: any;        user: null | documents.User;    },>Inherit DocOverrides HandlebarsApplicationMixin(ApplicationV2)._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<    ApplicationRenderContext & {        bucket: any;        buckets: any;        buttons: { icon: string; label: string; type: string }[];        canCreateFolder: boolean;        canGoBack: boolean;        canSelect: boolean;        canTogglePrivacy: boolean;        canUpload: boolean;        dirs: any;        displayMode: string;        extensions: string[];        favorites: Record<string, FavoriteFolder>;        files: any;        isS3: boolean;        noResults: boolean;        rootId: string;        selected: any;        source: object;        sources: Record<            "data"            | "public"            | "s3",            undefined | { bucket?: string; buckets?: string[]; target: string },        >;        target: string;        tileSize: any;        user: null | documents.User;    },>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2)._prepareContext


### _prepareTabs

- _prepareTabs(group: any): Record<string, ApplicationTab>Parametersgroup: anyReturns Record<string, ApplicationTab>Inherit DocOverrides HandlebarsApplicationMixin(ApplicationV2)._prepareTabs
- group: any


#### Parameters

- group: any


#### Returns Record<string, ApplicationTab>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2)._prepareTabs


### Abstract_renderHTML

`Abstract`- _renderHTML(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<any>Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.
Parameterscontext: ApplicationRenderContextContext data for the render operation
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns Promise<any>The result of HTML rendering may be implementation specific.
Whatever value is returned here is passed to _replaceHTML
Inherited from HandlebarsApplicationMixin(ApplicationV2)._renderHTML
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._renderHTML


### _tearDown

- _tearDown(options: any): voidParametersoptions: anyReturns voidInherit DocOverrides HandlebarsApplicationMixin(ApplicationV2)._tearDown
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2)._tearDown


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from HandlebarsApplicationMixin(ApplicationV2).addEventListener
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

Inherited from HandlebarsApplicationMixin(ApplicationV2).addEventListener


### bringToFront

- bringToFront(): voidBring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2).bringToFront

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2).bringToFront


### browse

- browse(target?: string, options?: object): Promise<FilePicker>Browse to a specific location for this FilePicker instance
ParametersOptionaltarget: string = ...The target within the currently active source location.
Optionaloptions: object = {}Browsing options
Returns Promise<FilePicker>
- Optionaltarget: string = ...The target within the currently active source location.
- Optionaloptions: object = {}Browsing options

Browse to a specific location for this FilePicker instance


#### Parameters

- Optionaltarget: string = ...The target within the currently active source location.
- Optionaloptions: object = {}Browsing options

`Optional`The target within the currently active source location.

`Optional`Browsing options


#### Returns Promise<FilePicker>


### changeTab

- changeTab(tab: any, group: any, options: any): voidParameterstab: anygroup: anyoptions: anyReturns voidInherit DocOverrides HandlebarsApplicationMixin(ApplicationV2).changeTab
- tab: any
- group: any
- options: any


#### Parameters

- tab: any
- group: any
- options: any


#### Returns void


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2).changeTab


### close

- close(options?: Partial<ApplicationClosingOptions>): Promise<FilePicker>Close the Application, removing it from the DOM.
ParametersOptionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.
Returns Promise<FilePicker>A Promise which resolves to the closed Application instance
Inherited from HandlebarsApplicationMixin(ApplicationV2).close
- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

Close the Application, removing it from the DOM.


#### Parameters

- Optionaloptions: Partial<ApplicationClosingOptions> = {}Options which modify how the application is closed.

`Optional`Options which modify how the application is closed.


#### Returns Promise<FilePicker>

A Promise which resolves to the closed Application instance

Inherited from HandlebarsApplicationMixin(ApplicationV2).close


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from HandlebarsApplicationMixin(ApplicationV2).dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from HandlebarsApplicationMixin(ApplicationV2).dispatchEvent


### maximize

- maximize(): Promise<void>Restore the Application to its original dimensions.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2).maximize

Restore the Application to its original dimensions.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2).maximize


### minimize

- minimize(): Promise<void>Minimize the Application, collapsing it to a minimal header.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2).minimize

Minimize the Application, collapsing it to a minimal header.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2).minimize


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from HandlebarsApplicationMixin(ApplicationV2).removeEventListener
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

Inherited from HandlebarsApplicationMixin(ApplicationV2).removeEventListener


### render

- render(...args: any[]): Promise<FilePicker>Parameters...args: any[]Returns Promise<FilePicker>Inherit DocOverrides HandlebarsApplicationMixin(ApplicationV2).render
- ...args: any[]


#### Parameters

- ...args: any[]


#### Returns Promise<FilePicker>


#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2).render


### setPosition

- setPosition(position?: Partial<ApplicationPosition>): void | ApplicationPositionUpdate the Application element position using provided data which is merged with the prior position.
ParametersOptionalposition: Partial<ApplicationPosition>New Application positioning data
Returns void | ApplicationPositionThe updated application position
Inherited from HandlebarsApplicationMixin(ApplicationV2).setPosition
- Optionalposition: Partial<ApplicationPosition>New Application positioning data

Update the Application element position using provided data which is merged with the prior position.


#### Parameters

- Optionalposition: Partial<ApplicationPosition>New Application positioning data

`Optional`New Application positioning data


#### Returns void | ApplicationPosition

The updated application position

Inherited from HandlebarsApplicationMixin(ApplicationV2).setPosition


### submit

- submit(submitOptions?: object): Promise<any>Programmatically submit an ApplicationV2 instance which implements a single top-level form.
ParametersOptionalsubmitOptions: object = {}Arbitrary options which are supported by and provided to the configured form
submission handler.
Returns Promise<any>A promise that resolves to the returned result of the form submission handler,
if any.
Inherited from HandlebarsApplicationMixin(ApplicationV2).submit
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

Inherited from HandlebarsApplicationMixin(ApplicationV2).submit


### toggleControls

- toggleControls(    expanded?: boolean,    options?: { animate?: boolean },): Promise<void>Toggle display of the Application controls menu.
Only applicable to window Applications.
ParametersOptionalexpanded: booleanSet the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value
Optionaloptions: { animate?: boolean } = {}Options to configure the toggling behavior.
Optionalanimate?: booleanAnimate the controls toggling.
Returns Promise<void>A Promise which resolves once the control expansion animation is complete
Inherited from HandlebarsApplicationMixin(ApplicationV2).toggleControls
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

Inherited from HandlebarsApplicationMixin(ApplicationV2).toggleControls


### Protected_attachFrameListeners

`Protected`- _attachFrameListeners(): voidProtectedAttach event listeners to the Application frame.
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._attachFrameListeners

`Protected`Attach event listeners to the Application frame.


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._attachFrameListeners


### Protected_canRender

`Protected`- _canRender(options: ApplicationRenderOptions): false | voidProtectedTest whether this Application is allowed to be rendered.
Parametersoptions: ApplicationRenderOptionsProvided render options
Returns false | voidReturn false to prevent rendering
ThrowsAn Error to display a warning message
Inherited from HandlebarsApplicationMixin(ApplicationV2)._canRender
- options: ApplicationRenderOptionsProvided render options

`Protected`Test whether this Application is allowed to be rendered.


#### Parameters

- options: ApplicationRenderOptionsProvided render options

Provided render options


#### Returns false | void

Return false to prevent rendering


#### Throws

An Error to display a warning message

Inherited from HandlebarsApplicationMixin(ApplicationV2)._canRender


### Protected_configureRenderOptions

`Protected`- _configureRenderOptions(options: ApplicationRenderOptions): voidProtectedModify the provided options passed to a render request.
Parametersoptions: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._configureRenderOptions
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

`Protected`Modify the provided options passed to a render request.


#### Parameters

- options: ApplicationRenderOptionsOptions which configure application rendering behavior

Options which configure application rendering behavior


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._configureRenderOptions


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
Inherited from HandlebarsApplicationMixin(ApplicationV2)._createContextMenu
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._createContextMenu


### Protected_getHeaderControls

`Protected`- _getHeaderControls(): ApplicationHeaderControlsEntry[]ProtectedConfigure the array of header control menu options
Returns ApplicationHeaderControlsEntry[]Inherited from HandlebarsApplicationMixin(ApplicationV2)._getHeaderControls

`Protected`Configure the array of header control menu options


#### Returns ApplicationHeaderControlsEntry[]

Inherited from HandlebarsApplicationMixin(ApplicationV2)._getHeaderControls


### Protected_getTabsConfig

`Protected`- _getTabsConfig(group: string): null | ApplicationTabsConfigurationProtectedGet the configuration for a tabs group.
Parametersgroup: stringThe ID of a tabs group
Returns null | ApplicationTabsConfigurationInherited from HandlebarsApplicationMixin(ApplicationV2)._getTabsConfig
- group: stringThe ID of a tabs group

`Protected`Get the configuration for a tabs group.


#### Parameters

- group: stringThe ID of a tabs group

The ID of a tabs group


#### Returns null | ApplicationTabsConfiguration

Inherited from HandlebarsApplicationMixin(ApplicationV2)._getTabsConfig


### Protected_headerControlButtons

`Protected`- _headerControlButtons(): Generator<ApplicationHeaderControlsEntry, any, any>ProtectedIterate over header control buttons, filtering for controls which are visible for the current client.
Returns Generator<ApplicationHeaderControlsEntry, any, any>YieldsInherited from HandlebarsApplicationMixin(ApplicationV2)._headerControlButtons

`Protected`Iterate over header control buttons, filtering for controls which are visible for the current client.


#### Returns Generator<ApplicationHeaderControlsEntry, any, any>


#### Yields

Inherited from HandlebarsApplicationMixin(ApplicationV2)._headerControlButtons


### Protected_inferSourceAndTarget

`Protected`- _inferSourceAndTarget(target: string): [source: string, revisedTarget: string]ProtectedGiven a current file path, determine the directory to which it belongs.
Parameterstarget: stringThe currently requested target path
Returns [source: string, revisedTarget: string]A tuple of the inferred source and target directory path
- target: stringThe currently requested target path

`Protected`Given a current file path, determine the directory to which it belongs.


#### Parameters

- target: stringThe currently requested target path

The currently requested target path


#### Returns [source: string, revisedTarget: string]

A tuple of the inferred source and target directory path


### Protected_initializeApplicationOptions

`Protected`- _initializeApplicationOptions(    options: Partial<ApplicationConfiguration>,): ApplicationConfigurationProtectedInitialize configuration options for the Application instance.
The default behavior of this method is to intelligently merge options for each class with those of their parents.

Array-based options are concatenated
Inner objects are merged
Otherwise, properties in the subclass replace those defined by a parent

Parametersoptions: Partial<ApplicationConfiguration>Options provided directly to the constructor
Returns ApplicationConfigurationConfigured options for the application instance
Inherited from HandlebarsApplicationMixin(ApplicationV2)._initializeApplicationOptions
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._initializeApplicationOptions


### Protected_insertElement

`Protected`- _insertElement(element: HTMLElement): voidProtectedInsert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.
Parameterselement: HTMLElementThe element to insert
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._insertElement
- element: HTMLElementThe element to insert

`Protected`Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.


#### Parameters

- element: HTMLElementThe element to insert

The element to insert


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._insertElement


### Protected_onChangeForm

`Protected`- _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): voidProtectedHandle changes to an input element within the form.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: EventAn input change event within the form
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._onChangeForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

`Protected`Handle changes to an input element within the form.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: EventAn input change event within the form

The form configuration for which this handler is bound

An input change event within the form


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onChangeForm


### Protected_onChangeTileSize

`Protected`- _onChangeTileSize(event: Event): voidProtectedHandle changes to the tile size.
Parametersevent: EventThe triggering event.
Returns void
- event: EventThe triggering event.

`Protected`Handle changes to the tile size.


#### Parameters

- event: EventThe triggering event.

The triggering event.


#### Returns void


### Protected_onClickAction

`Protected`- _onClickAction(event: PointerEvent, target: HTMLElement): voidProtectedA generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.
Parametersevent: PointerEventThe originating click event
target: HTMLElementThe capturing HTML element which defined a [data-action]
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._onClickAction
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onClickAction


### Protected_onClickTab

`Protected`- _onClickTab(event: PointerEvent): voidProtectedHandle click events on a tab within the Application.
Parametersevent: PointerEventReturns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._onClickTab
- event: PointerEvent

`Protected`Handle click events on a tab within the Application.


#### Parameters

- event: PointerEvent


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onClickTab


### Protected_onClose

`Protected`- _onClose(options: ApplicationRenderOptions): voidProtectedActions performed after closing the Application.
Post-close steps are not awaited by the close process.
Parametersoptions: ApplicationRenderOptionsProvided render options
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._onClose
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed after closing the Application.
Post-close steps are not awaited by the close process.


#### Parameters

- options: ApplicationRenderOptionsProvided render options

Provided render options


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onClose


### Protected_onFirstRender

`Protected`- _onFirstRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed after a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._onFirstRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed after a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onFirstRender


### Protected_onPosition

`Protected`- _onPosition(position: ApplicationPosition): voidProtectedActions performed after the Application is re-positioned.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._onPosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed after the Application is re-positioned.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onPosition


### Protected_onSearchFilter

`Protected`- _onSearchFilter(    event: KeyboardEvent,    query: string,    rgx: RegExp,    html: HTMLElement,): voidProtectedSearch among shown directories and files.
Parametersevent: KeyboardEventThe triggering event
query: stringThe search input value
rgx: RegExphtml: HTMLElementReturns void
- event: KeyboardEventThe triggering event
- query: stringThe search input value
- rgx: RegExp
- html: HTMLElement

`Protected`Search among shown directories and files.


#### Parameters

- event: KeyboardEventThe triggering event
- query: stringThe search input value
- rgx: RegExp
- html: HTMLElement

The triggering event

The search input value


#### Returns void


### Protected_onSubmitForm

`Protected`- _onSubmitForm(    formConfig: ApplicationFormConfiguration,    event: Event | SubmitEvent,): Promise<void>ProtectedHandle submission for an Application which uses the form element.
ParametersformConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
event: Event | SubmitEventThe form submission event
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._onSubmitForm
- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

`Protected`Handle submission for an Application which uses the form element.


#### Parameters

- formConfig: ApplicationFormConfigurationThe form configuration for which this handler is bound
- event: Event | SubmitEventThe form submission event

The form configuration for which this handler is bound

The form submission event


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._onSubmitForm


### Protected_postRender

`Protected`- _postRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedPerform post-render finalization actions.
Parameterscontext: ApplicationRenderContextPrepared context data.
options: ApplicationRenderOptionsProvided render options.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._postRender
- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

`Protected`Perform post-render finalization actions.


#### Parameters

- context: ApplicationRenderContextPrepared context data.
- options: ApplicationRenderOptionsProvided render options.

Prepared context data.

Provided render options.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._postRender


### Protected_preClose

`Protected`- _preClose(options: ApplicationRenderOptions): Promise<void>ProtectedActions performed before closing the Application.
Pre-close steps are awaited by the close process.
Parametersoptions: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._preClose
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before closing the Application.
Pre-close steps are awaited by the close process.


#### Parameters

- options: ApplicationRenderOptionsProvided render options

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._preClose


### Protected_preFirstRender

`Protected`- _preFirstRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before a first render of the Application.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._preFirstRender
- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

`Protected`Actions performed before a first render of the Application.


#### Parameters

- context: ApplicationRenderContextPrepared context data
- options: ApplicationRenderOptionsProvided render options

Prepared context data

Provided render options


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._preFirstRender


### Protected_prePosition

`Protected`- _prePosition(position: ApplicationPosition): voidProtectedActions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.
Parametersposition: ApplicationPositionThe requested application position
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._prePosition
- position: ApplicationPositionThe requested application position

`Protected`Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.


#### Parameters

- position: ApplicationPositionThe requested application position

The requested application position


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._prePosition


### Protected_preRender

`Protected`- _preRender(    context: ApplicationRenderContext,    options: ApplicationRenderOptions,): Promise<void>ProtectedActions performed before any render of the Application.
Pre-render steps are awaited by the render process.
Parameterscontext: ApplicationRenderContextPrepared context data
options: ApplicationRenderOptionsProvided render options
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2)._preRender
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._preRender


### Protected_removeElement

`Protected`- _removeElement(element: HTMLElement): voidProtectedRemove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.
Parameterselement: HTMLElementThe element to be removed
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._removeElement
- element: HTMLElementThe element to be removed

`Protected`Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.


#### Parameters

- element: HTMLElementThe element to be removed

The element to be removed


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._removeElement


### Protected_renderFrame

`Protected`- _renderFrame(options: ApplicationRenderOptions): Promise<HTMLElement>ProtectedRender the outer framing HTMLElement which wraps the inner HTML of the Application.
Parametersoptions: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns Promise<HTMLElement>Inherited from HandlebarsApplicationMixin(ApplicationV2)._renderFrame
- options: ApplicationRenderOptionsOptions which configure application rendering behavior

`Protected`Render the outer framing HTMLElement which wraps the inner HTML of the Application.


#### Parameters

- options: ApplicationRenderOptionsOptions which configure application rendering behavior

Options which configure application rendering behavior


#### Returns Promise<HTMLElement>

Inherited from HandlebarsApplicationMixin(ApplicationV2)._renderFrame


### Protected_renderHeaderControl

`Protected`- _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElementProtectedRender a header control button.
Parameterscontrol: ApplicationHeaderControlsEntryReturns HTMLLIElementInherited from HandlebarsApplicationMixin(ApplicationV2)._renderHeaderControl
- control: ApplicationHeaderControlsEntry

`Protected`Render a header control button.


#### Parameters

- control: ApplicationHeaderControlsEntry


#### Returns HTMLLIElement

Inherited from HandlebarsApplicationMixin(ApplicationV2)._renderHeaderControl


### Protected_replaceHTML

`Protected`- _replaceHTML(    result: any,    content: HTMLElement,    options: ApplicationRenderOptions,): voidProtectedReplace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.
Parametersresult: anyThe result returned by the application rendering backend
content: HTMLElementThe content element into which the rendered result must be inserted
options: ApplicationRenderOptionsOptions which configure application rendering behavior
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._replaceHTML
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

Inherited from HandlebarsApplicationMixin(ApplicationV2)._replaceHTML


### Protected_updateFrame

`Protected`- _updateFrame(options: ApplicationRenderOptions): voidProtectedWhen the Application is rendered, optionally update aspects of the window frame.
Parametersoptions: ApplicationRenderOptionsOptions provided at render-time
Returns voidInherited from HandlebarsApplicationMixin(ApplicationV2)._updateFrame
- options: ApplicationRenderOptionsOptions provided at render-time

`Protected`When the Application is rendered, optionally update aspects of the window frame.


#### Parameters

- options: ApplicationRenderOptionsOptions provided at render-time

Options provided at render-time


#### Returns void

Inherited from HandlebarsApplicationMixin(ApplicationV2)._updateFrame


### Protected_updatePosition

`Protected`- _updatePosition(position: ApplicationPosition): ApplicationPositionProtectedTranslate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.
Parametersposition: ApplicationPositionRequested Application positioning data
Returns ApplicationPositionResolved Application positioning data
Inherited from HandlebarsApplicationMixin(ApplicationV2)._updatePosition
- position: ApplicationPositionRequested Application positioning data

`Protected`Translate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.


#### Parameters

- position: ApplicationPositionRequested Application positioning data

Requested Application positioning data


#### Returns ApplicationPosition

Resolved Application positioning data

Inherited from HandlebarsApplicationMixin(ApplicationV2)._updatePosition


### Staticbrowse

`Static`- browse(    source: string,    target: string,    options?: { bucket?: string; extensions?: string[]; wildcard?: boolean },): Promise<object>Browse files for a certain directory location
Parameterssource: stringThe source location in which to browse: see FilePicker#sources for details.
target: stringThe target within the source location
options: { bucket?: string; extensions?: string[]; wildcard?: boolean } = {}Optional arguments
Optionalbucket?: stringA bucket within which to search if using the S3 source
Optionalextensions?: string[]An Array of file extensions to filter on
Optionalwildcard?: booleanThe requested dir represents a wildcard path
Returns Promise<object>A Promise that resolves to the directories and files contained in the location
- source: stringThe source location in which to browse: see FilePicker#sources for details.
- target: stringThe target within the source location
- options: { bucket?: string; extensions?: string[]; wildcard?: boolean } = {}Optional arguments
Optionalbucket?: stringA bucket within which to search if using the S3 source
Optionalextensions?: string[]An Array of file extensions to filter on
Optionalwildcard?: booleanThe requested dir represents a wildcard path
- Optionalbucket?: stringA bucket within which to search if using the S3 source
- Optionalextensions?: string[]An Array of file extensions to filter on
- Optionalwildcard?: booleanThe requested dir represents a wildcard path

Browse files for a certain directory location


#### Parameters

- source: stringThe source location in which to browse: see FilePicker#sources for details.
- target: stringThe target within the source location
- options: { bucket?: string; extensions?: string[]; wildcard?: boolean } = {}Optional arguments
Optionalbucket?: stringA bucket within which to search if using the S3 source
Optionalextensions?: string[]An Array of file extensions to filter on
Optionalwildcard?: booleanThe requested dir represents a wildcard path
- Optionalbucket?: stringA bucket within which to search if using the S3 source
- Optionalextensions?: string[]An Array of file extensions to filter on
- Optionalwildcard?: booleanThe requested dir represents a wildcard path

The source location in which to browse: see FilePicker#sources for details.

The target within the source location

Optional arguments

- Optionalbucket?: stringA bucket within which to search if using the S3 source
- Optionalextensions?: string[]An Array of file extensions to filter on
- Optionalwildcard?: booleanThe requested dir represents a wildcard path


##### Optionalbucket?: string

`Optional`A bucket within which to search if using the S3 source


##### Optionalextensions?: string[]

`Optional`An Array of file extensions to filter on


##### Optionalwildcard?: boolean

`Optional`The requested dir represents a wildcard path


#### Returns Promise<object>

A Promise that resolves to the directories and files contained in the location


### StaticconfigurePath

`Static`- configurePath(source: string, target: string, options?: object): Promise<object>Configure metadata settings regarding a certain file system path
Parameterssource: stringThe source location in which to browse: see FilePicker#sources for details.
target: stringThe target within the source location
options: object = {}Optional arguments modifying the request
Returns Promise<object>
- source: stringThe source location in which to browse: see FilePicker#sources for details.
- target: stringThe target within the source location
- options: object = {}Optional arguments modifying the request

Configure metadata settings regarding a certain file system path


#### Parameters

- source: stringThe source location in which to browse: see FilePicker#sources for details.
- target: stringThe target within the source location
- options: object = {}Optional arguments modifying the request

The source location in which to browse: see FilePicker#sources for details.

The target within the source location

Optional arguments modifying the request


#### Returns Promise<object>


### StaticcreateDirectory

`Static`- createDirectory(    source: string,    target: string,    options?: object,): Promise<object>Create a subdirectory within a given source. The requested subdirectory path must not already exist.
Parameterssource: stringThe source location in which to browse. See FilePicker#sources for details
target: stringThe target within the source location
options: object = {}Optional arguments which modify the request
Returns Promise<object>
- source: stringThe source location in which to browse. See FilePicker#sources for details
- target: stringThe target within the source location
- options: object = {}Optional arguments which modify the request

Create a subdirectory within a given source. The requested subdirectory path must not already exist.


#### Parameters

- source: stringThe source location in which to browse. See FilePicker#sources for details
- target: stringThe target within the source location
- options: object = {}Optional arguments which modify the request

The source location in which to browse. See FilePicker#sources for details

The target within the source location

Optional arguments which modify the request


#### Returns Promise<object>


### StaticfromButton

`Static`- fromButton(button: HTMLButtonElement): FilePickerBind the file picker to a new target field.
Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
The data-target attribute should provide the name of the input field which should receive the selected file
The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted
Parametersbutton: HTMLButtonElementThe button element
Returns FilePicker
- button: HTMLButtonElementThe button element

Bind the file picker to a new target field.
Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
The data-target attribute should provide the name of the input field which should receive the selected file
The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted


#### Parameters

- button: HTMLButtonElementThe button element

The button element


#### Returns FilePicker


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from HandlebarsApplicationMixin(ApplicationV2).inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from HandlebarsApplicationMixin(ApplicationV2).inheritanceChain


### StaticmatchS3URL

`Static`- matchS3URL(url: string): null | RegExpMatchArrayTest a URL to see if it matches a well known s3 key pattern
Parametersurl: stringAn input URL to test
Returns null | RegExpMatchArrayA regular expression match
- url: stringAn input URL to test

Test a URL to see if it matches a well known s3 key pattern


#### Parameters

- url: stringAn input URL to test

An input URL to test


#### Returns null | RegExpMatchArray

A regular expression match


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from HandlebarsApplicationMixin(ApplicationV2).parseCSSDimension
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

Inherited from HandlebarsApplicationMixin(ApplicationV2).parseCSSDimension


### StaticrequestTokenImages

`Static`- requestTokenImages(    actorId: string,    options?: { pack?: string },): Promise<string[]>Request wildcard token images from the server and return them.
ParametersactorId: stringThe actor whose prototype token contains the wildcard image path.
Optionaloptions: { pack?: string } = {}Optionalpack?: stringThe ID of the compendium the actor is in.
Returns Promise<string[]>
- actorId: stringThe actor whose prototype token contains the wildcard image path.
- Optionaloptions: { pack?: string } = {}Optionalpack?: stringThe ID of the compendium the actor is in.
- Optionalpack?: stringThe ID of the compendium the actor is in.

Request wildcard token images from the server and return them.


#### Parameters

- actorId: stringThe actor whose prototype token contains the wildcard image path.
- Optionaloptions: { pack?: string } = {}Optionalpack?: stringThe ID of the compendium the actor is in.
- Optionalpack?: stringThe ID of the compendium the actor is in.

The actor whose prototype token contains the wildcard image path.

`Optional`- Optionalpack?: stringThe ID of the compendium the actor is in.


##### Optionalpack?: string

`Optional`The ID of the compendium the actor is in.


#### Returns Promise<string[]>


### Staticupload

`Static`- upload(    source: string,    path: string,    file: File,    body?: object,    options?: { notify?: boolean },): Promise<object>Dispatch a POST request to the server containing a directory path and a file to upload
Parameterssource: stringThe data source to which the file should be uploaded
path: stringThe destination path
file: FileThe File object to upload
Optionalbody: object = {}Additional file upload options sent in the POST body
Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
Returns Promise<object>The response object
- source: stringThe data source to which the file should be uploaded
- path: stringThe destination path
- file: FileThe File object to upload
- Optionalbody: object = {}Additional file upload options sent in the POST body
- Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed

Dispatch a POST request to the server containing a directory path and a file to upload


#### Parameters

- source: stringThe data source to which the file should be uploaded
- path: stringThe destination path
- file: FileThe File object to upload
- Optionalbody: object = {}Additional file upload options sent in the POST body
- Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed

The data source to which the file should be uploaded

The destination path

The File object to upload

`Optional`Additional file upload options sent in the POST body

`Optional`Additional options to configure how the method behaves

- Optionalnotify?: booleanDisplay a UI notification when the upload is processed


##### Optionalnotify?: boolean

`Optional`Display a UI notification when the upload is processed


#### Returns Promise<object>

The response object


### StaticuploadPersistent

`Static`- uploadPersistent(    packageId: string,    path: string,    file: File,    body?: object,    options?: { notify?: boolean },): Promise<object>A convenience function that uploads a file to a given package's persistent /storage/ directory
ParameterspackageId: stringThe id of the package to which the file should be uploaded.
Only supports Systems and Modules.
path: stringThe relative destination path in the package's storage directory
file: FileThe File object to upload
Optionalbody: object = {}Additional file upload options sent in the POST body
Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
Returns Promise<object>The response object
- packageId: stringThe id of the package to which the file should be uploaded.
Only supports Systems and Modules.
- path: stringThe relative destination path in the package's storage directory
- file: FileThe File object to upload
- Optionalbody: object = {}Additional file upload options sent in the POST body
- Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed

A convenience function that uploads a file to a given package's persistent /storage/ directory


#### Parameters

- packageId: stringThe id of the package to which the file should be uploaded.
Only supports Systems and Modules.
- path: stringThe relative destination path in the package's storage directory
- file: FileThe File object to upload
- Optionalbody: object = {}Additional file upload options sent in the POST body
- Optionaloptions: { notify?: boolean } = {}Additional options to configure how the method behaves
Optionalnotify?: booleanDisplay a UI notification when the upload is processed
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed

The id of the package to which the file should be uploaded.
Only supports Systems and Modules.

The relative destination path in the package's storage directory

The File object to upload

`Optional`Additional file upload options sent in the POST body

`Optional`Additional options to configure how the method behaves

- Optionalnotify?: booleanDisplay a UI notification when the upload is processed


##### Optionalnotify?: boolean

`Optional`Display a UI notification when the upload is processed


#### Returns Promise<object>

The response object


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(ApplicationV2).waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(ApplicationV2).waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

