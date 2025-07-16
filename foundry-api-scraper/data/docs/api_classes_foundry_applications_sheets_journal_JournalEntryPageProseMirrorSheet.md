# JournalEntryPageProseMirrorSheet | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- journal
- JournalEntryPageProseMirrorSheet


# Class JournalEntryPageProseMirrorSheet

An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a
ProseMirror editor.


#### Hierarchy (View Summary)

- JournalEntryPageTextSheetJournalEntryPageProseMirrorSheet
- JournalEntryPageProseMirrorSheet

- JournalEntryPageProseMirrorSheet


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new JournalEntryPageProseMirrorSheet(    options: any,    ...args: any[],): JournalEntryPageProseMirrorSheetParametersoptions: any...args: any[]Returns JournalEntryPageProseMirrorSheetInherit DocInherited from JournalEntryPageTextSheet.constructor
- options: any
- ...args: any[]


#### Parameters

- options: any
- ...args: any[]


#### Returns JournalEntryPageProseMirrorSheet


#### Inherit Doc

Inherited from JournalEntryPageTextSheet.constructor


## Properties


### isV2

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2


### toc

The table of contents for this text page.

Inherited from JournalEntryPageTextSheet.toc


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from JournalEntryPageTextSheet._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from JournalEntryPageTextSheet._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from JournalEntryPageTextSheet.BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`Overrides JournalEntryPageTextSheet.DEFAULT_OPTIONS


### StaticEDIT_PARTS

`Static`
#### Inherit Doc

Overrides JournalEntryPageTextSheet.EDIT_PARTS


### StaticemittedEvents

`Static`
#### Inherit Doc

Inherited from JournalEntryPageTextSheet.emittedEvents


### Staticformat

`Static`The format used to edit text content in this sheet.

Inherited from JournalEntryPageTextSheet.format


### StaticisV2

`Static`Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageTextSheet.RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageTextSheet.TABS


### StaticVIEW_PARTS

`Static`Overrides JournalEntryPageTextSheet.VIEW_PARTS


### Protected Static_converter

`Protected``Static`Bi-directional HTML <-> Markdown converter.

Inherited from JournalEntryPageTextSheet._converter


## Accessors


### isView

- get isView(): booleanWhether the sheet is in view mode.
Returns booleanInherited from JournalEntryPageTextSheet.isView

Whether the sheet is in view mode.


#### Returns boolean

Inherited from JournalEntryPageTextSheet.isView


### page

- get page(): documents.JournalEntryPageThe JournalEntryPage for this sheet.
Returns documents.JournalEntryPageInherited from JournalEntryPageTextSheet.page

The JournalEntryPage for this sheet.


#### Returns documents.JournalEntryPage

Inherited from JournalEntryPageTextSheet.page


## Methods


### _attachFrameListeners

- _attachFrameListeners(): voidReturns voidInherit Doc


#### Returns void


#### Inherit Doc


### _canRender

- _canRender(options: any): booleanParametersoptions: anyReturns boolean
- options: any


#### Parameters

- options: any


#### Returns boolean


### _configureRenderParts

- _configureRenderParts(options: any): anyParametersoptions: anyReturns anyInherited from JournalEntryPageTextSheet._configureRenderParts
- options: any


#### Parameters

- options: any


#### Returns any

Inherited from JournalEntryPageTextSheet._configureRenderParts


### _insertElement

- _insertElement(element: any): voidParameterselement: anyReturns voidInherit DocInherited from JournalEntryPageTextSheet._insertElement
- element: any


#### Parameters

- element: any


#### Returns void


#### Inherit Doc

Inherited from JournalEntryPageTextSheet._insertElement


### _isEditorDirty

- _isEditorDirty(): anyReturns anyOverrides JournalEntryPageTextSheet._isEditorDirty


#### Returns any

Overrides JournalEntryPageTextSheet._isEditorDirty


### _onAutosave

- _onAutosave(content: string): voidInternalUpdate the parent sheet if it is open when the server autosaves the contents of this editor.
Parameterscontent: stringThe updated editor contents.
Returns void
- content: stringThe updated editor contents.

`Internal`Update the parent sheet if it is open when the server autosaves the contents of this editor.


#### Parameters

- content: stringThe updated editor contents.

The updated editor contents.


#### Returns void


### _onNewSteps

- _onNewSteps(): voidInternalUpdate the UI appropriately when receiving new steps from another client.
Returns void

`Internal`Update the UI appropriately when receiving new steps from another client.


#### Returns void


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocInherited from JournalEntryPageTextSheet._onRender
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Inherited from JournalEntryPageTextSheet._onRender


### _prepareContentContext

- _prepareContentContext(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit DocOverrides JournalEntryPageTextSheet._prepareContentContext
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc

Overrides JournalEntryPageTextSheet._prepareContentContext


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit DocInherited from JournalEntryPageTextSheet._prepareContext
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc

Inherited from JournalEntryPageTextSheet._prepareContext


### _preparePartContext

- _preparePartContext(partId: any, context: any, options: any): Promise<any>ParameterspartId: anycontext: anyoptions: anyReturns Promise<any>Inherit DocInherited from JournalEntryPageTextSheet._preparePartContext
- partId: any
- context: any
- options: any


#### Parameters

- partId: any
- context: any
- options: any


#### Returns Promise<any>


#### Inherit Doc

Inherited from JournalEntryPageTextSheet._preparePartContext


### _prepareSubmitData

- _prepareSubmitData(event: any, form: any, formData: any, updateData: any): anyParametersevent: anyform: anyformData: anyupdateData: anyReturns anyInherit DocInherited from JournalEntryPageTextSheet._prepareSubmitData
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

Inherited from JournalEntryPageTextSheet._prepareSubmitData


### Protected_onCloseView

`Protected`- _onCloseView(): voidProtectedActions performed when this sheet is closed in some parent view.
Returns voidInherited from JournalEntryPageTextSheet._onCloseView

`Protected`Actions performed when this sheet is closed in some parent view.


#### Returns void

Inherited from JournalEntryPageTextSheet._onCloseView


### Protected_onConfigurePlugins

`Protected`- _onConfigurePlugins(event: ProseMirrorPluginsEvent): voidProtectedConfigure plugins for the ProseMirror instance.
Parametersevent: ProseMirrorPluginsEventReturns void
- event: ProseMirrorPluginsEvent

`Protected`Configure plugins for the ProseMirror instance.


#### Parameters

- event: ProseMirrorPluginsEvent


#### Returns void


### Protected_prepareFooterContext

`Protected`- _prepareFooterContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the footer part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from JournalEntryPageTextSheet._prepareFooterContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the footer part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from JournalEntryPageTextSheet._prepareFooterContext


### Protected_prepareHeaderContext

`Protected`- _prepareHeaderContext(    context: ApplicationRenderContext,    options: HandlebarsRenderOptions,): Promise<void>ProtectedPrepare render context for the header part.
Parameterscontext: ApplicationRenderContextoptions: HandlebarsRenderOptionsReturns Promise<void>Inherited from JournalEntryPageTextSheet._prepareHeaderContext
- context: ApplicationRenderContext
- options: HandlebarsRenderOptions

`Protected`Prepare render context for the header part.


#### Parameters

- context: ApplicationRenderContext
- options: HandlebarsRenderOptions


#### Returns Promise<void>

Inherited from JournalEntryPageTextSheet._prepareHeaderContext


### Protected_prepareHeadingLevels

`Protected`- _prepareHeadingLevels(): Record<string, string>ProtectedPrepare heading level choices.
Returns Record<string, string>Inherited from JournalEntryPageTextSheet._prepareHeadingLevels

`Protected`Prepare heading level choices.


#### Returns Record<string, string>

Inherited from JournalEntryPageTextSheet._prepareHeadingLevels


### Static_migrateConstructorParams

`Static`- _migrateConstructorParams(    first: unknown,    rest: unknown[],): Partial<ApplicationConfiguration & DocumentSheetConfiguration>InternalProvide a deprecation path for converted V1 document sheets.
Parametersfirst: unknownThe first parameter received by this class's constructor
rest: unknown[]Any additional parameters received
Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>Inherited from JournalEntryPageTextSheet._migrateConstructorParams
- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

`Internal`Provide a deprecation path for converted V1 document sheets.


#### Parameters

- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

The first parameter received by this class's constructor

Any additional parameters received


#### Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>

Inherited from JournalEntryPageTextSheet._migrateConstructorParams


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from JournalEntryPageTextSheet.inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from JournalEntryPageTextSheet.inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from JournalEntryPageTextSheet.parseCSSDimension
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

Inherited from JournalEntryPageTextSheet.parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from JournalEntryPageTextSheet.waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from JournalEntryPageTextSheet.waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

