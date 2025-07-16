# JournalEntryPageHandlebarsSheet | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- journal
- JournalEntryPageHandlebarsSheet


# Class JournalEntryPageHandlebarsSheet

An abstract subclass that contains specialised handlebars logic for JournalEntryPageSheets.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- JournalEntryPageSheet<this>JournalEntryPageHandlebarsSheetJournalEntryPageTextSheetJournalEntryPageImageSheetJournalEntryPagePDFSheetJournalEntryPageVideoSheet
- JournalEntryPageHandlebarsSheetJournalEntryPageTextSheetJournalEntryPageImageSheetJournalEntryPagePDFSheetJournalEntryPageVideoSheet
- JournalEntryPageTextSheet
- JournalEntryPageImageSheet
- JournalEntryPagePDFSheet
- JournalEntryPageVideoSheet

- JournalEntryPageHandlebarsSheetJournalEntryPageTextSheetJournalEntryPageImageSheetJournalEntryPagePDFSheetJournalEntryPageVideoSheet
- JournalEntryPageTextSheet
- JournalEntryPageImageSheet
- JournalEntryPagePDFSheet
- JournalEntryPageVideoSheet

- JournalEntryPageTextSheet
- JournalEntryPageImageSheet
- JournalEntryPagePDFSheet
- JournalEntryPageVideoSheet


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new JournalEntryPageHandlebarsSheet(    options: any,    ...args: any[],): JournalEntryPageHandlebarsSheetParametersoptions: any...args: any[]Returns JournalEntryPageHandlebarsSheetInherit DocInherited from HandlebarsApplicationMixin(JournalEntryPageSheet).constructor
- options: any
- ...args: any[]


#### Parameters

- options: any
- ...args: any[]


#### Returns JournalEntryPageHandlebarsSheet


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).constructor


## Properties


### isV2

Indicates that the sheet renders with App V2 rather than V1.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isV2


### toc

The table of contents for this text page.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).toc


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).DEFAULT_OPTIONS


### StaticEDIT_PARTS

`Static`Handlebars parts to render in edit mode.


### StaticemittedEvents

`Static`
#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).emittedEvents


### StaticisV2

`Static`Indicates that the sheet renders with App V2 rather than V1.


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).TABS


### StaticVIEW_PARTS

`Static`Handlebars part to render in view mode.


## Accessors


### isView

- get isView(): booleanWhether the sheet is in view mode.
Returns booleanInherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isView

Whether the sheet is in view mode.


#### Returns boolean

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isView


### page

- get page(): documents.JournalEntryPageThe JournalEntryPage for this sheet.
Returns documents.JournalEntryPageInherited from HandlebarsApplicationMixin(JournalEntryPageSheet).page

The JournalEntryPage for this sheet.


#### Returns documents.JournalEntryPage

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).page


## Methods


### _configureRenderParts

- _configureRenderParts(options: any): anyParametersoptions: anyReturns any
- options: any


#### Parameters

- options: any


#### Returns any


### _insertElement

- _insertElement(element: any): voidParameterselement: anyReturns voidInherit DocInherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._insertElement
- element: any


#### Parameters

- element: any


#### Returns void


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._insertElement


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._onRender


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit DocInherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._prepareContext


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


### _prepareSubmitData

- _prepareSubmitData(event: any, form: any, formData: any, updateData: any): anyParametersevent: anyform: anyformData: anyupdateData: anyReturns anyInherit Doc
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


### Protected_onCloseView

`Protected`- _onCloseView(): voidProtectedActions performed when this sheet is closed in some parent view.
Returns voidInherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._onCloseView

`Protected`Actions performed when this sheet is closed in some parent view.


#### Returns void

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._onCloseView


### Protected_prepareContentContext

`Protected`- _prepareContentContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the content part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the content part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>


### Protected_prepareFooterContext

`Protected`- _prepareFooterContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the footer part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the footer part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>


### Protected_prepareHeaderContext

`Protected`- _prepareHeaderContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the header part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the header part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>


### Protected_prepareHeadingLevels

`Protected`- _prepareHeadingLevels(): Record<string, string>ProtectedPrepare heading level choices.
Returns Record<string, string>Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._prepareHeadingLevels

`Protected`Prepare heading level choices.


#### Returns Record<string, string>

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet)._prepareHeadingLevels


### Static_migrateConstructorParams

`Static`- _migrateConstructorParams(    first: unknown,    rest: unknown[],): Partial<ApplicationConfiguration & DocumentSheetConfiguration>InternalProvide a deprecation path for converted V1 document sheets.
Parametersfirst: unknownThe first parameter received by this class's constructor
rest: unknown[]Any additional parameters received
Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>
- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

`Internal`Provide a deprecation path for converted V1 document sheets.


#### Parameters

- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

The first parameter received by this class's constructor

Any additional parameters received


#### Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from HandlebarsApplicationMixin(JournalEntryPageSheet).inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).parseCSSDimension
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

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

