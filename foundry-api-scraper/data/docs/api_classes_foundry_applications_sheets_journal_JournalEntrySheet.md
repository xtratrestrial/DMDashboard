# JournalEntrySheet | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntrySheet.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- journal
- JournalEntrySheet


# Class JournalEntrySheet

The Application responsible for displaying and editing a single JournalEntry Document.


#### Mixes

HandlebarsApplication


#### Hierarchy

- anyJournalEntrySheet
- JournalEntrySheet

- JournalEntrySheet


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new JournalEntrySheet(options: any, ...args: any[]): JournalEntrySheetParametersoptions: any...args: any[]Returns JournalEntrySheetInherit DocInherited from HandlebarsApplicationMixin(DocumentSheetV2).constructor
- options: any
- ...args: any[]


#### Parameters

- options: any
- ...args: any[]


#### Returns JournalEntrySheet


#### Inherit Doc

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).constructor


## Properties


### Protected_pages

`Protected`The cached list of processed page entries.


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

`Static`Overrides HandlebarsApplicationMixin(DocumentSheetV2).DEFAULT_OPTIONS


### StaticemittedEvents

`Static`Inherited from HandlebarsApplicationMixin(DocumentSheetV2).emittedEvents


### StaticOWNERSHIP_ICONS

`Static`Icons for page ownership.


### StaticPARTS

`Static`Overrides HandlebarsApplicationMixin(DocumentSheetV2).PARTS


### StaticRENDER_STATES

`Static`The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).RENDER_STATES


### StaticTABS

`Static`Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).TABS


### StaticVIEW_MODES

`Static`The available view modes for journal entries.


## Accessors


### entry

- get entry(): documents.JournalEntryThe JournalEntry for this sheet.
Returns documents.JournalEntry

The JournalEntry for this sheet.


#### Returns documents.JournalEntry


### isMultiple

- get isMultiple(): booleanWhether the sheet is in multi-page mode.
Returns boolean

Whether the sheet is in multi-page mode.


#### Returns boolean


### locked

- get locked(): booleanWhether the journal is locked and disallows modifications to the table of contents.
Returns boolean

Whether the journal is locked and disallows modifications to the table of contents.


#### Returns boolean


### mode

- get mode(): { MULTIPLE: number; SINGLE: number }Get the JournalEntry's current view mode.
Returns { MULTIPLE: number; SINGLE: number }

Get the JournalEntry's current view mode.


#### Returns { MULTIPLE: number; SINGLE: number }


### observer

- get observer(): IntersectionObserverThe currently active IntersectionObserver.
Returns IntersectionObserver

The currently active IntersectionObserver.


#### Returns IntersectionObserver


### pageId

- get pageId(): stringThe ID of the currently-viewed page.
Returns string

The ID of the currently-viewed page.


#### Returns string


### pageIndex

- get pageIndex(): numberThe index of the currently-viewed page in the list of available pages.
Returns number

The index of the currently-viewed page in the list of available pages.


#### Returns number


### pagesInView

- get pagesInView(): HTMLElement[]The pages that are currently scrolled into view and marked as 'active' in the sidebar.
Returns HTMLElement[]

The pages that are currently scrolled into view and marked as 'active' in the sidebar.


#### Returns HTMLElement[]


### searchMode

- get searchMode(): stringGet the JournalEntry's current search mode.
Returns string

Get the JournalEntry's current search mode.


#### Returns string


### sidebarExpanded

- get sidebarExpanded(): booleanThe expanded state of the sidebar.
Returns boolean

The expanded state of the sidebar.


#### Returns boolean


### title

- get title(): stringReturns string


#### Returns string


## Methods


### _attachFrameListeners

- _attachFrameListeners(): voidReturns voidInherit Doc


#### Returns void


#### Inherit Doc


### _configureRenderOptions

- _configureRenderOptions(options: any): voidParametersoptions: anyReturns voidInherit Doc
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc


### _configureRenderParts

- _configureRenderParts(options: any): anyParametersoptions: anyReturns anyInherit Doc
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc


### _getHeaderControls

- _getHeaderControls(): anyReturns anyInherit Doc


#### Returns any


#### Inherit Doc


### _initializeApplicationOptions

- _initializeApplicationOptions(options: any): anyParametersoptions: anyReturns anyInherit Doc
- options: any


#### Parameters

- options: any


#### Returns any


#### Inherit Doc


### _onClose

- _onClose(options: any): voidParametersoptions: anyReturns voidInherit Doc
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc


### _onFirstRender

- _onFirstRender(context: any, options: any): Promise<void>Parameterscontext: anyoptions: anyReturns Promise<void>Inherit Doc
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns Promise<void>


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


### _onRevealSecret

- _onRevealSecret(event: any): voidParametersevent: anyReturns void
- event: any


#### Parameters

- event: any


#### Returns void


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc


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


### _replaceHTML

- _replaceHTML(result: any, content: any, options: any): voidParametersresult: anycontent: anyoptions: anyReturns voidInherit Doc
- result: any
- content: any
- options: any


#### Parameters

- result: any
- content: any
- options: any


#### Returns void


#### Inherit Doc


### _tearDown

- _tearDown(options: any): voidParametersoptions: anyReturns voidInherit Doc
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc


### _updateFrame

- _updateFrame(options: any): voidParametersoptions: anyReturns voidInherit Doc
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc


### createPageDialog

- createPageDialog(): anyPrompt the user with a Dialog for creation of a new JournalEntryPage.
Returns any

Prompt the user with a Dialog for creation of a new JournalEntryPage.


#### Returns any


### getPageSheet

- getPageSheet(page: string | documents.JournalEntryPage): JournalPageSheetRetrieve the sheet instance for rendering this page inline.
Parameterspage: string | documents.JournalEntryPageThe page instance or its ID.
Returns JournalPageSheet
- page: string | documents.JournalEntryPageThe page instance or its ID.

Retrieve the sheet instance for rendering this page inline.


#### Parameters

- page: string | documents.JournalEntryPageThe page instance or its ID.

The page instance or its ID.


#### Returns JournalPageSheet


### goToPage

- goToPage(pageId: string, options?: { anchor?: string }): anyTurn to a specific page.
ParameterspageId: stringThe ID of the page to turn to.
Optionaloptions: { anchor?: string } = {}Optionalanchor?: stringOptionally an anchor slug to focus within that page.
Returns any
- pageId: stringThe ID of the page to turn to.
- Optionaloptions: { anchor?: string } = {}Optionalanchor?: stringOptionally an anchor slug to focus within that page.
- Optionalanchor?: stringOptionally an anchor slug to focus within that page.

Turn to a specific page.


#### Parameters

- pageId: stringThe ID of the page to turn to.
- Optionaloptions: { anchor?: string } = {}Optionalanchor?: stringOptionally an anchor slug to focus within that page.
- Optionalanchor?: stringOptionally an anchor slug to focus within that page.

The ID of the page to turn to.

`Optional`- Optionalanchor?: stringOptionally an anchor slug to focus within that page.


##### Optionalanchor?: string

`Optional`Optionally an anchor slug to focus within that page.


#### Returns any


### isPageVisible

- isPageVisible(page: documents.JournalEntryPage): booleanDetermine whether a given page is visible to the current user.
Parameterspage: documents.JournalEntryPageThe page.
Returns boolean
- page: documents.JournalEntryPageThe page.

Determine whether a given page is visible to the current user.


#### Parameters

- page: documents.JournalEntryPageThe page.

The page.


#### Returns boolean


### nextPage

- nextPage(): anyTurn to the next page.
Returns any

Turn to the next page.


#### Returns any


### previousPage

- previousPage(): anyTurn to the previous page.
Returns any

Turn to the previous page.


#### Returns any


### toggleSearchMode

- toggleSearchMode(): anyToggle the search mode for this journal entry between name and full text search.
Returns any

Toggle the search mode for this journal entry between name and full text search.


#### Returns any


### toggleSidebar

- toggleSidebar(): voidToggle the collapsed or expanded state of the sidebar.
Returns void

Toggle the collapsed or expanded state of the sidebar.


#### Returns void


### Protected_activatePagesInView

`Protected`- _activatePagesInView(): voidProtectedHighlights the currently-viewed page in the sidebar.
Returns void

`Protected`Highlights the currently-viewed page in the sidebar.


#### Returns void


### Protected_canDragDrop

`Protected`- _canDragDrop(selector: string): booleanProtectedDetermine if drop operations are permitted.
Parametersselector: stringThe candidate HTML selector for dragging
Returns booleanCan the current user drag this selector?
- selector: stringThe candidate HTML selector for dragging

`Protected`Determine if drop operations are permitted.


#### Parameters

- selector: stringThe candidate HTML selector for dragging

The candidate HTML selector for dragging


#### Returns boolean

Can the current user drag this selector?


### Protected_canDragStart

`Protected`- _canDragStart(selector: string): booleanProtectedDetermine if drag operations are permitted.
Parametersselector: stringThe candidate HTML selector for dragging
Returns booleanCan the current user drag this selector?
- selector: stringThe candidate HTML selector for dragging

`Protected`Determine if drag operations are permitted.


#### Parameters

- selector: stringThe candidate HTML selector for dragging

The candidate HTML selector for dragging


#### Returns boolean

Can the current user drag this selector?


### Protected_getEntryContextOptions

`Protected`- _getEntryContextOptions(): ContextMenuEntry[]ProtectedGet the set of ContextMenu options which should be used for journal entry pages in the sidebar.
Returns ContextMenuEntry[]

`Protected`Get the set of ContextMenu options which should be used for journal entry pages in the sidebar.


#### Returns ContextMenuEntry[]


### Protected_observeHeadings

`Protected`- _observeHeadings(): voidProtectedCreate an intersection observer to maintain a list of headings that are in view. This is much more performant than
calling getBoundingClientRect on all headings whenever we want to determine this list.
Returns void

`Protected`Create an intersection observer to maintain a list of headings that are in view. This is much more performant than
calling getBoundingClientRect on all headings whenever we want to determine this list.


#### Returns void


### Protected_observePages

`Protected`- _observePages(): voidProtectedCreate an intersection observer to maintain a list of pages that are in view.
Returns void

`Protected`Create an intersection observer to maintain a list of pages that are in view.


#### Returns void


### Protected_onClickImage

`Protected`- _onClickImage(event: PointerEvent): voidProtectedHandle clicking an image to pop it out for fullscreen view.
Parametersevent: PointerEventThe triggering click event.
Returns void
- event: PointerEventThe triggering click event.

`Protected`Handle clicking an image to pop it out for fullscreen view.


#### Parameters

- event: PointerEventThe triggering click event.

The triggering click event.


#### Returns void


### Protected_onContextMenuClose

`Protected`- _onContextMenuClose(target: HTMLElement): voidProtectedHandle closing the context menu.
Parameterstarget: HTMLElementThe element the context menu has been triggered for.
Returns void
- target: HTMLElementThe element the context menu has been triggered for.

`Protected`Handle closing the context menu.


#### Parameters

- target: HTMLElementThe element the context menu has been triggered for.

The element the context menu has been triggered for.


#### Returns void


### Protected_onContextMenuOpen

`Protected`- _onContextMenuOpen(target: HTMLElement): voidProtectedHandle opening the context menu.
Parameterstarget: HTMLElementThe element the context menu has been triggered for.
Returns void
- target: HTMLElementThe element the context menu has been triggered for.

`Protected`Handle opening the context menu.


#### Parameters

- target: HTMLElementThe element the context menu has been triggered for.

The element the context menu has been triggered for.


#### Returns void


### Protected_onDragStart

`Protected`- _onDragStart(event: DragEvent): voidProtectedHandle drag operations.
Parametersevent: DragEventReturns void
- event: DragEvent

`Protected`Handle drag operations.


#### Parameters

- event: DragEvent


#### Returns void


### Protected_onDrop

`Protected`- _onDrop(event: DragEvent): Promise<any>ProtectedHandle drop operations.
Parametersevent: DragEventReturns Promise<any>
- event: DragEvent

`Protected`Handle drop operations.


#### Parameters

- event: DragEvent


#### Returns Promise<any>


### Protected_onEditPage

`Protected`- _onEditPage(event: PointerEvent, target: HTMLElement): anyProtectedHandle editing one of the journal entry's pages.
Parametersevent: PointerEventThe triggering event.
target: HTMLElementThe action target.
Returns any
- event: PointerEventThe triggering event.
- target: HTMLElementThe action target.

`Protected`Handle editing one of the journal entry's pages.


#### Parameters

- event: PointerEventThe triggering event.
- target: HTMLElementThe action target.

The triggering event.

The action target.


#### Returns any


### Protected_onPageScroll

`Protected`- _onPageScroll(    entries: IntersectionObserverEntry[],    observer: IntersectionObserver,): voidProtectedHandle new pages scrolling into view.
Parametersentries: IntersectionObserverEntry[]An array of element that have scrolled into or out of view.
observer: IntersectionObserverThe IntersectionObserver that invoked this callback.
Returns void
- entries: IntersectionObserverEntry[]An array of element that have scrolled into or out of view.
- observer: IntersectionObserverThe IntersectionObserver that invoked this callback.

`Protected`Handle new pages scrolling into view.


#### Parameters

- entries: IntersectionObserverEntry[]An array of element that have scrolled into or out of view.
- observer: IntersectionObserverThe IntersectionObserver that invoked this callback.

An array of element that have scrolled into or out of view.

The IntersectionObserver that invoked this callback.


#### Returns void


### Protected_onSearchFilter

`Protected`- _onSearchFilter(    event: KeyboardEvent,    query: string,    rgx: RegExp,    html: HTMLElement,): voidProtectedHandle journal entry search and filtering.
Parametersevent: KeyboardEventThe keyboard input event.
query: stringThe input search string.
rgx: RegExpThe regular expression query that should be matched against.
html: HTMLElementThe container to filter items from.
Returns void
- event: KeyboardEventThe keyboard input event.
- query: stringThe input search string.
- rgx: RegExpThe regular expression query that should be matched against.
- html: HTMLElementThe container to filter items from.

`Protected`Handle journal entry search and filtering.


#### Parameters

- event: KeyboardEventThe keyboard input event.
- query: stringThe input search string.
- rgx: RegExpThe regular expression query that should be matched against.
- html: HTMLElementThe container to filter items from.

The keyboard input event.

The input search string.

The regular expression query that should be matched against.

The container to filter items from.


#### Returns void


### Protected_onShowPlayers

`Protected`- _onShowPlayers(): voidProtectedHandle a request to show the JournalEntry to other Users.
Returns void

`Protected`Handle a request to show the JournalEntry to other Users.


#### Returns void


### Protected_preparePageData

`Protected`- _preparePageData(): Record<string, JournalSheetPageContext>ProtectedPrepare pages for display.
Returns Record<string, JournalSheetPageContext>

`Protected`Prepare pages for display.


#### Returns Record<string, JournalSheetPageContext>


### Protected_preparePagesContext

`Protected`- _preparePagesContext(    context: ApplicationRenderContext,    options: DocumentSheetRenderOptions,): Promise<void>ProtectedPrepare render context for the pages part.
Parameterscontext: ApplicationRenderContextoptions: DocumentSheetRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions

`Protected`Prepare render context for the pages part.


#### Parameters

- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions


#### Returns Promise<void>


### Protected_prepareSidebarContext

`Protected`- _prepareSidebarContext(    context: ApplicationRenderContext,    options: DocumentSheetRenderOptions,): Promise<void>ProtectedPrepare render context for the sidebar part.
Parameterscontext: ApplicationRenderContextoptions: DocumentSheetRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions

`Protected`Prepare render context for the sidebar part.


#### Parameters

- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions


#### Returns Promise<void>


### Protected_prepareTableOfContents

`Protected`- _prepareTableOfContents(): Promise<    (JournalSheetPageContext & JournalSheetCategoryContext)[],>ProtectedPrepare the sidebar table of contents.
Returns Promise<(JournalSheetPageContext & JournalSheetCategoryContext)[]>

`Protected`Prepare the sidebar table of contents.


#### Returns Promise<(JournalSheetPageContext & JournalSheetCategoryContext)[]>


### Protected_renderHeadings

`Protected`- _renderHeadings(    pageNode: HTMLElement,    toc: Record<string, JournalEntryPageHeading>,): Promise<void>ProtectedAdd headings to the table of contents for the given node.
ParameterspageNode: HTMLElementThe HTML node of the page's rendered contents.
toc: Record<string, JournalEntryPageHeading>The page's table of contents.
Returns Promise<void>
- pageNode: HTMLElementThe HTML node of the page's rendered contents.
- toc: Record<string, JournalEntryPageHeading>The page's table of contents.

`Protected`Add headings to the table of contents for the given node.


#### Parameters

- pageNode: HTMLElementThe HTML node of the page's rendered contents.
- toc: Record<string, JournalEntryPageHeading>The page's table of contents.

The HTML node of the page's rendered contents.

The page's table of contents.


#### Returns Promise<void>


### Protected_renderPageView

`Protected`- _renderPageView(    element: HTMLElement,    sheet: JournalEntryPageSheet,): Promise<void>ProtectedRender the page view for a page sheet.
Parameterselement: HTMLElementThe existing page element in the journal entry view.
sheet: JournalEntryPageSheetThe page sheet.
Returns Promise<void>
- element: HTMLElementThe existing page element in the journal entry view.
- sheet: JournalEntryPageSheetThe page sheet.

`Protected`Render the page view for a page sheet.


#### Parameters

- element: HTMLElementThe existing page element in the journal entry view.
- sheet: JournalEntryPageSheetThe page sheet.

The existing page element in the journal entry view.

The page sheet.


#### Returns Promise<void>


### Protected_renderPageViews

`Protected`- _renderPageViews(    context: ApplicationRenderContext,    options: DocumentSheetRenderOptions,): Promise<void>ProtectedUpdate child views inside the main sheet.
Parameterscontext: ApplicationRenderContextoptions: DocumentSheetRenderOptionsReturns Promise<void>
- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions

`Protected`Update child views inside the main sheet.


#### Parameters

- context: ApplicationRenderContext
- options: DocumentSheetRenderOptions


#### Returns Promise<void>


### Protected_setCurrentPage

`Protected`- _setCurrentPage(options?: DocumentSheetRenderOptions): voidProtectedUpdate which page of the journal sheet should be currently rendered.
This can be controlled by options passed into the render method, or by subclass override.
ParametersOptionaloptions: DocumentSheetRenderOptions = {}Returns void
- Optionaloptions: DocumentSheetRenderOptions = {}

`Protected`Update which page of the journal sheet should be currently rendered.
This can be controlled by options passed into the render method, or by subclass override.


#### Parameters

- Optionaloptions: DocumentSheetRenderOptions = {}

`Optional`
#### Returns void


### Protected_synchronizeSidebar

`Protected`- _synchronizeSidebar(): voidProtectedIf the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
sync the sidebar scroll position with the current journal viewport.
Returns void

`Protected`If the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
sync the sidebar scroll position with the current journal viewport.


#### Returns void


### Protected_updateButtonState

`Protected`- _updateButtonState(): voidProtectedUpdate the disabled state of the previous and next page buttons.
Returns void

`Protected`Update the disabled state of the previous and next page buttons.


#### Returns void


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

