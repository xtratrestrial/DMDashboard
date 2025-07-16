# JournalEntryPageImageSheet | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageImageSheet.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- journal
- JournalEntryPageImageSheet


# Class JournalEntryPageImageSheet

An Application responsible for displaying and editing a single image-type JournalEntryPage Document.


#### Hierarchy (View Summary)

- JournalEntryPageHandlebarsSheetJournalEntryPageImageSheet
- JournalEntryPageImageSheet

- JournalEntryPageImageSheet


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new JournalEntryPageImageSheet(    options: any,    ...args: any[],): JournalEntryPageImageSheetParametersoptions: any...args: any[]Returns JournalEntryPageImageSheetInherit DocInherited from JournalEntryPageHandlebarsSheet.constructor
- options: any
- ...args: any[]


#### Parameters

- options: any
- ...args: any[]


#### Returns JournalEntryPageImageSheet


#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet.constructor


## Properties


### isV2

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageHandlebarsSheet.isV2


### toc

The table of contents for this text page.

Inherited from JournalEntryPageHandlebarsSheet.toc


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from JournalEntryPageHandlebarsSheet._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from JournalEntryPageHandlebarsSheet._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from JournalEntryPageHandlebarsSheet.BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`Overrides JournalEntryPageHandlebarsSheet.DEFAULT_OPTIONS


### StaticEDIT_PARTS

`Static`
#### Inherit Doc

Overrides JournalEntryPageHandlebarsSheet.EDIT_PARTS


### StaticemittedEvents

`Static`
#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet.emittedEvents


### StaticisV2

`Static`Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageHandlebarsSheet.isV2


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageHandlebarsSheet.RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageHandlebarsSheet.TABS


### StaticVIEW_PARTS

`Static`Overrides JournalEntryPageHandlebarsSheet.VIEW_PARTS


## Accessors


### isView

- get isView(): booleanWhether the sheet is in view mode.
Returns booleanInherited from JournalEntryPageHandlebarsSheet.isView

Whether the sheet is in view mode.


#### Returns boolean

Inherited from JournalEntryPageHandlebarsSheet.isView


### page

- get page(): documents.JournalEntryPageThe JournalEntryPage for this sheet.
Returns documents.JournalEntryPageInherited from JournalEntryPageHandlebarsSheet.page

The JournalEntryPage for this sheet.


#### Returns documents.JournalEntryPage

Inherited from JournalEntryPageHandlebarsSheet.page


## Methods


### _configureRenderParts

- _configureRenderParts(options: any): anyParametersoptions: anyReturns anyInherited from JournalEntryPageHandlebarsSheet._configureRenderParts
- options: any


#### Parameters

- options: any


#### Returns any

Inherited from JournalEntryPageHandlebarsSheet._configureRenderParts


### _insertElement

- _insertElement(element: any): voidParameterselement: anyReturns voidInherit DocInherited from JournalEntryPageHandlebarsSheet._insertElement
- element: any


#### Parameters

- element: any


#### Returns void


#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet._insertElement


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from JournalEntryPageHandlebarsSheet._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet._onRender


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit DocOverrides JournalEntryPageHandlebarsSheet._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc

Overrides JournalEntryPageHandlebarsSheet._prepareContext


### _preparePartContext

- _preparePartContext(partId: any, context: any, options: any): Promise<any>ParameterspartId: anycontext: anyoptions: anyReturns Promise<any>Inherit DocInherited from JournalEntryPageHandlebarsSheet._preparePartContext
- partId: any
- context: any
- options: any


#### Parameters

- partId: any
- context: any
- options: any


#### Returns Promise<any>


#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet._preparePartContext


### _prepareSubmitData

- _prepareSubmitData(event: any, form: any, formData: any, updateData: any): anyParametersevent: anyform: anyformData: anyupdateData: anyReturns anyInherit DocInherited from JournalEntryPageHandlebarsSheet._prepareSubmitData
- event: any
- form: any
- formData: any
- updateData: any


#### Parameters

- event: any
- form: any
- formData: any
- updateData: any


#### Returns any


#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet._prepareSubmitData


### Protected_onCloseView

`Protected`- _onCloseView(): voidProtectedActions performed when this sheet is closed in some parent view.
Returns voidInherited from JournalEntryPageHandlebarsSheet._onCloseView

`Protected`Actions performed when this sheet is closed in some parent view.


#### Returns void

Inherited from JournalEntryPageHandlebarsSheet._onCloseView


### Protected_prepareContentContext

`Protected`- _prepareContentContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the content part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from JournalEntryPageHandlebarsSheet._prepareContentContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the content part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from JournalEntryPageHandlebarsSheet._prepareContentContext


### Protected_prepareFooterContext

`Protected`- _prepareFooterContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the footer part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from JournalEntryPageHandlebarsSheet._prepareFooterContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the footer part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from JournalEntryPageHandlebarsSheet._prepareFooterContext


### Protected_prepareHeaderContext

`Protected`- _prepareHeaderContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the header part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from JournalEntryPageHandlebarsSheet._prepareHeaderContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the header part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from JournalEntryPageHandlebarsSheet._prepareHeaderContext


### Protected_prepareHeadingLevels

`Protected`- _prepareHeadingLevels(): Record<string, string>ProtectedPrepare heading level choices.
Returns Record<string, string>Inherited from JournalEntryPageHandlebarsSheet._prepareHeadingLevels

`Protected`Prepare heading level choices.


#### Returns Record<string, string>

Inherited from JournalEntryPageHandlebarsSheet._prepareHeadingLevels


### Static_migrateConstructorParams

`Static`- _migrateConstructorParams(    first: unknown,    rest: unknown[],): Partial<ApplicationConfiguration & DocumentSheetConfiguration>InternalProvide a deprecation path for converted V1 document sheets.
Parametersfirst: unknownThe first parameter received by this class's constructor
rest: unknown[]Any additional parameters received
Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>Inherited from JournalEntryPageHandlebarsSheet._migrateConstructorParams
- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

`Internal`Provide a deprecation path for converted V1 document sheets.


#### Parameters

- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

The first parameter received by this class's constructor

Any additional parameters received


#### Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>

Inherited from JournalEntryPageHandlebarsSheet._migrateConstructorParams


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from JournalEntryPageHandlebarsSheet.inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from JournalEntryPageHandlebarsSheet.inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from JournalEntryPageHandlebarsSheet.parseCSSDimension
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

Inherited from JournalEntryPageHandlebarsSheet.parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from JournalEntryPageHandlebarsSheet.waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from JournalEntryPageHandlebarsSheet.waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

