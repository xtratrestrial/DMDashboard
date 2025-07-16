# JournalEntryPageSheet | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageSheet.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- journal
- JournalEntryPageSheet


# Class JournalEntryPageSheet

An abstract Application responsible for displaying and editing a single JournalEntryPage Document.


#### Mixes

HandlebarsApplication


#### Hierarchy (View Summary)

- DocumentSheetV2JournalEntryPageSheetJournalEntryPageHandlebarsSheet
- JournalEntryPageSheetJournalEntryPageHandlebarsSheet
- JournalEntryPageHandlebarsSheet

- JournalEntryPageSheetJournalEntryPageHandlebarsSheet
- JournalEntryPageHandlebarsSheet

- JournalEntryPageHandlebarsSheet


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new JournalEntryPageSheet(options: any, ...args: any[]): JournalEntryPageSheetParametersoptions: any...args: any[]Returns JournalEntryPageSheetInherit DocInherited from DocumentSheetV2.constructor
- options: any
- ...args: any[]


#### Parameters

- options: any
- ...args: any[]


#### Returns JournalEntryPageSheet


#### Inherit Doc

Inherited from DocumentSheetV2.constructor


## Properties


### isV2

Indicates that the sheet renders with App V2 rather than V1.


### toc

The table of contents for this text page.


### Static Internal_appId

`Static``Internal`An incrementing integer Application ID.

Inherited from DocumentSheetV2._appId


### Static Internal_maxZ

`Static``Internal`The current maximum z-index of any displayed Application.

Inherited from DocumentSheetV2._maxZ


### StaticBASE_APPLICATION

`Static`Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

Inherited from DocumentSheetV2.BASE_APPLICATION


### StaticDEFAULT_OPTIONS

`Static`Overrides DocumentSheetV2.DEFAULT_OPTIONS


### StaticemittedEvents

`Static`
#### Inherit Doc

Overrides DocumentSheetV2.emittedEvents


### StaticisV2

`Static`Indicates that the sheet renders with App V2 rather than V1.


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from DocumentSheetV2.RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from DocumentSheetV2.TABS


## Accessors


### isView

- get isView(): booleanWhether the sheet is in view mode.
Returns boolean

Whether the sheet is in view mode.


#### Returns boolean


### page

- get page(): documents.JournalEntryPageThe JournalEntryPage for this sheet.
Returns documents.JournalEntryPage

The JournalEntryPage for this sheet.


#### Returns documents.JournalEntryPage


## Methods


### _insertElement

- _insertElement(element: any): voidParameterselement: anyReturns voidInherit Doc
- element: any


#### Parameters

- element: any


#### Returns void


#### Inherit Doc


### _onRender

- _onRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit Doc
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


#### Inherit Doc


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc


### Protected_onCloseView

`Protected`- _onCloseView(): voidProtectedActions performed when this sheet is closed in some parent view.
Returns void

`Protected`Actions performed when this sheet is closed in some parent view.


#### Returns void


### Protected_prepareHeadingLevels

`Protected`- _prepareHeadingLevels(): Record<string, string>ProtectedPrepare heading level choices.
Returns Record<string, string>

`Protected`Prepare heading level choices.


#### Returns Record<string, string>


### Static_migrateConstructorParams

`Static`- _migrateConstructorParams(    first: unknown,    rest: unknown[],): Partial<ApplicationConfiguration & DocumentSheetConfiguration>InternalProvide a deprecation path for converted V1 document sheets.
Parametersfirst: unknownThe first parameter received by this class's constructor
rest: unknown[]Any additional parameters received
Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>Inherited from DocumentSheetV2._migrateConstructorParams
- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

`Internal`Provide a deprecation path for converted V1 document sheets.


#### Parameters

- first: unknownThe first parameter received by this class's constructor
- rest: unknown[]Any additional parameters received

The first parameter received by this class's constructor

Any additional parameters received


#### Returns Partial<ApplicationConfiguration & DocumentSheetConfiguration>

Inherited from DocumentSheetV2._migrateConstructorParams


### StaticinheritanceChain

`Static`- inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.
Returns Generator<typeof ApplicationV2, void, unknown>SeeApplicationV2.BASE_APPLICATION
YieldsInherited from DocumentSheetV2.inheritanceChain

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.


#### Returns Generator<typeof ApplicationV2, void, unknown>


#### See

ApplicationV2.BASE_APPLICATION


#### Yields

Inherited from DocumentSheetV2.inheritanceChain


### StaticparseCSSDimension

`Static`- parseCSSDimension(style: string, parentDimension: number): number | voidParse a CSS style rule into a number of pixels which apply to that dimension.
Parametersstyle: stringThe CSS style rule
parentDimension: numberThe relevant dimension of the parent element
Returns number | voidThe parsed style dimension in pixels
Inherited from DocumentSheetV2.parseCSSDimension
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

Inherited from DocumentSheetV2.parseCSSDimension


### StaticwaitForImages

`Static`- waitForImages(element: HTMLElement): Promise<void>Wait for any images in the given element to load.
Parameterselement: HTMLElementThe element.
Returns Promise<void>Inherited from DocumentSheetV2.waitForImages
- element: HTMLElementThe element.

Wait for any images in the given element to load.


#### Parameters

- element: HTMLElementThe element.

The element.


#### Returns Promise<void>

Inherited from DocumentSheetV2.waitForImages


### Settings

- Protected
- Inherited
- Internal


### On This Page

