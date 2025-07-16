# TextEditor | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.ux.TextEditor.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- ux
- TextEditor


# Class TextEditor

A collection of helper functions and utility methods related to the rich text editor.


##### Index


### Accessors


### Methods


## Accessors


### Staticimplementation

`Static`- get implementation(): typeof applications.ux.TextEditorRetrieve the configured TextEditor implementation.
Returns typeof applications.ux.TextEditor

Retrieve the configured TextEditor implementation.


#### Returns typeof applications.ux.TextEditor


## Methods


### Static_uploadImage

`Static`- _uploadImage(uuid: string, file: File): Promise<string | void>InternalUpload an image to a document's asset path.
Parametersuuid: stringThe document's UUID.
file: FileThe image file to upload.
Returns Promise<string | void>The path to the uploaded image.
- uuid: stringThe document's UUID.
- file: FileThe image file to upload.

`Internal`Upload an image to a document's asset path.


#### Parameters

- uuid: stringThe document's UUID.
- file: FileThe image file to upload.

The document's UUID.

The image file to upload.


#### Returns Promise<string | void>

The path to the uploaded image.


### StaticactivateListeners

`Static`- activateListeners(): voidActivate interaction listeners for the interior content of the editor frame.
Returns void

Activate interaction listeners for the interior content of the editor frame.


#### Returns void


### Staticcreate

`Static`- create(    options?: { engine?: string },    content?: string,): Promise<ProseMirrorEditor | Editor>Create a Rich Text Editor. The current implementation uses TinyMCE
Parametersoptions: { engine?: string } = {}Configuration options provided to the Editor init
Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.
content: string = ""Initial HTML or text content to populate the editor with
Returns Promise<ProseMirrorEditor | Editor>The editor instance.
- options: { engine?: string } = {}Configuration options provided to the Editor init
Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.
- Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.
- content: string = ""Initial HTML or text content to populate the editor with

Create a Rich Text Editor. The current implementation uses TinyMCE


#### Parameters

- options: { engine?: string } = {}Configuration options provided to the Editor init
Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.
- Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.
- content: string = ""Initial HTML or text content to populate the editor with

Configuration options provided to the Editor init

- Optionalengine?: stringWhich rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.


##### Optionalengine?: string

`Optional`Which rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
is deprecated and will be removed in a later version.

Initial HTML or text content to populate the editor with


#### Returns Promise<ProseMirrorEditor | Editor>

The editor instance.


### StaticcreateAnchor

`Static`- createAnchor(options?: Partial<EnrichmentAnchorOptions>): HTMLAnchorElementHelper method to create an anchor element.
ParametersOptionaloptions: Partial<EnrichmentAnchorOptions> = {}Options to configure the anchor's construction.
Returns HTMLAnchorElement
- Optionaloptions: Partial<EnrichmentAnchorOptions> = {}Options to configure the anchor's construction.

Helper method to create an anchor element.


#### Parameters

- Optionaloptions: Partial<EnrichmentAnchorOptions> = {}Options to configure the anchor's construction.

`Optional`Options to configure the anchor's construction.


#### Returns HTMLAnchorElement


### StaticdecodeHTML

`Static`- decodeHTML(html: string): stringSafely decode an HTML string, removing invalid tags and converting entities back to unicode characters.
Parametershtml: stringThe original encoded HTML string
Returns stringThe decoded unicode string
- html: stringThe original encoded HTML string

Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.


#### Parameters

- html: stringThe original encoded HTML string

The original encoded HTML string


#### Returns string

The decoded unicode string


### StaticenrichHTML

`Static`- enrichHTML(content: string, options?: EnrichmentOptions): Promise<string>Enrich HTML content by replacing or augmenting components of it
Parameterscontent: stringThe original HTML content (as a string)
Optionaloptions: EnrichmentOptions = {}Additional options which configure how HTML is enriched
Returns Promise<string>The enriched HTML content
- content: stringThe original HTML content (as a string)
- Optionaloptions: EnrichmentOptions = {}Additional options which configure how HTML is enriched

Enrich HTML content by replacing or augmenting components of it


#### Parameters

- content: stringThe original HTML content (as a string)
- Optionaloptions: EnrichmentOptions = {}Additional options which configure how HTML is enriched

The original HTML content (as a string)

`Optional`Additional options which configure how HTML is enriched


#### Returns Promise<string>

The enriched HTML content


### StaticgetContentLink

`Static`- getContentLink(    eventData: object,    options?: { label?: string; relativeTo?: any },): Promise<null | string>Given a Drop event, returns a Content link if possible such as "@Actor[ABC123]", else null
ParameterseventData: objectThe parsed object of data provided by the transfer event
Optionaloptions: { label?: string; relativeTo?: any } = {}Additional options to configure link creation.
Optionallabel?: stringA custom label to use instead of the document's name.
OptionalrelativeTo?: anyA document to generate the link relative to.
Returns Promise<null | string>
- eventData: objectThe parsed object of data provided by the transfer event
- Optionaloptions: { label?: string; relativeTo?: any } = {}Additional options to configure link creation.
Optionallabel?: stringA custom label to use instead of the document's name.
OptionalrelativeTo?: anyA document to generate the link relative to.
- Optionallabel?: stringA custom label to use instead of the document's name.
- OptionalrelativeTo?: anyA document to generate the link relative to.

Given a Drop event, returns a Content link if possible such as "@Actor[ABC123]", else null

`null`
#### Parameters

- eventData: objectThe parsed object of data provided by the transfer event
- Optionaloptions: { label?: string; relativeTo?: any } = {}Additional options to configure link creation.
Optionallabel?: stringA custom label to use instead of the document's name.
OptionalrelativeTo?: anyA document to generate the link relative to.
- Optionallabel?: stringA custom label to use instead of the document's name.
- OptionalrelativeTo?: anyA document to generate the link relative to.

The parsed object of data provided by the transfer event

`Optional`Additional options to configure link creation.

- Optionallabel?: stringA custom label to use instead of the document's name.
- OptionalrelativeTo?: anyA document to generate the link relative to.


##### Optionallabel?: string

`Optional`A custom label to use instead of the document's name.


##### OptionalrelativeTo?: any

`Optional`A document to generate the link relative to.


#### Returns Promise<null | string>


### StaticgetDragEventData

`Static`- getDragEventData(event: DragEvent): objectExtract JSON data from a drag/drop event.
Parametersevent: DragEventThe drag event which contains JSON data.
Returns objectThe extracted JSON data. The object will be empty if the DragEvent did not contain
JSON-parseable data.
- event: DragEventThe drag event which contains JSON data.

Extract JSON data from a drag/drop event.


#### Parameters

- event: DragEventThe drag event which contains JSON data.

The drag event which contains JSON data.


#### Returns object

The extracted JSON data. The object will be empty if the DragEvent did not contain
JSON-parseable data.


### StaticpreviewHTML

`Static`- previewHTML(content: string, length?: number): stringPreview an HTML fragment by constructing a substring of a given length from its inner text.
Parameterscontent: stringThe raw HTML to preview
length: number = 250The desired length
Returns stringThe previewed HTML
- content: stringThe raw HTML to preview
- length: number = 250The desired length

Preview an HTML fragment by constructing a substring of a given length from its inner text.


#### Parameters

- content: stringThe raw HTML to preview
- length: number = 250The desired length

The raw HTML to preview

The desired length


#### Returns string

The previewed HTML


### StatictruncateHTML

`Static`- truncateHTML(html: HTMLElement): HTMLElementSanitises an HTML fragment and removes any non-paragraph-style text.
Parametershtml: HTMLElementThe root HTML element.
Returns HTMLElement
- html: HTMLElementThe root HTML element.

Sanitises an HTML fragment and removes any non-paragraph-style text.


#### Parameters

- html: HTMLElementThe root HTML element.

The root HTML element.


#### Returns HTMLElement


### StatictruncateText

`Static`- truncateText(    text: string,    options?: {        maxLength?: number;        splitWords?: boolean;        suffix?: null | string;    },): stringTruncate a fragment of text to a maximum number of characters.
Parameterstext: stringThe original text fragment that should be truncated to a maximum length
Optionaloptions: { maxLength?: number; splitWords?: boolean; suffix?: null | string } = {}Options which affect the behavior of text truncation
OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.
Returns stringThe truncated text string
- text: stringThe original text fragment that should be truncated to a maximum length
- Optionaloptions: { maxLength?: number; splitWords?: boolean; suffix?: null | string } = {}Options which affect the behavior of text truncation
OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.
- OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
- OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
- Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.

Truncate a fragment of text to a maximum number of characters.


#### Parameters

- text: stringThe original text fragment that should be truncated to a maximum length
- Optionaloptions: { maxLength?: number; splitWords?: boolean; suffix?: null | string } = {}Options which affect the behavior of text truncation
OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.
- OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
- OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
- Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.

The original text fragment that should be truncated to a maximum length

`Optional`Options which affect the behavior of text truncation

- OptionalmaxLength?: numberThe maximum allowed length of the truncated string.
- OptionalsplitWords?: booleanWhether to truncate by splitting on white space (if true) or breaking words.
- Optionalsuffix?: null | stringA suffix string to append to denote that the text was truncated.


##### OptionalmaxLength?: number

`Optional`The maximum allowed length of the truncated string.


##### OptionalsplitWords?: boolean

`Optional`Whether to truncate by splitting on white space (if true) or breaking words.


##### Optionalsuffix?: null | string

`Optional`A suffix string to append to denote that the text was truncated.


#### Returns string

The truncated text string


### Protected Static_applyCustomEnrichers

`Protected``Static`- _applyCustomEnrichers(    config: TextEditorEnricherConfig,    text: Text[],    options?: EnrichmentOptions,): Promise<boolean>ProtectedMatch any custom registered regex patterns and apply their replacements.
Parametersconfig: TextEditorEnricherConfigThe custom enricher configuration.
text: Text[]The existing text content.
Optionaloptions: EnrichmentOptionsOptions provided to customize text enrichment
Returns Promise<boolean>Whether any replacements were made, requiring the text nodes to be
updated.
- config: TextEditorEnricherConfigThe custom enricher configuration.
- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptionsOptions provided to customize text enrichment

`Protected`Match any custom registered regex patterns and apply their replacements.


#### Parameters

- config: TextEditorEnricherConfigThe custom enricher configuration.
- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptionsOptions provided to customize text enrichment

The custom enricher configuration.

The existing text content.

`Optional`Options provided to customize text enrichment


#### Returns Promise<boolean>

Whether any replacements were made, requiring the text nodes to be
updated.


### Protected Static_createContentLink

`Protected``Static`- _createContentLink(    match: RegExpMatchArray,    options?: EnrichmentOptions,): Promise<HTMLAnchorElement>ProtectedCreate a dynamic document link from a regular expression match
Parametersmatch: RegExpMatchArrayThe regular expression match
Optionaloptions: EnrichmentOptions = {}Additional options to configure enrichment behaviour
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
Returns Promise<HTMLAnchorElement>An HTML element for the document link.
- match: RegExpMatchArrayThe regular expression match
- Optionaloptions: EnrichmentOptions = {}Additional options to configure enrichment behaviour
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.

`Protected`Create a dynamic document link from a regular expression match


#### Parameters

- match: RegExpMatchArrayThe regular expression match
- Optionaloptions: EnrichmentOptions = {}Additional options to configure enrichment behaviour
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.

The regular expression match

`Optional`Additional options to configure enrichment behaviour

- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.


##### Optionalcustom?: boolean

`Optional`Apply custom enrichers?


##### Optionaldocuments?: boolean

`Optional`Replace dynamic document links?


##### Optionalembeds?: boolean

`Optional`Replace embedded content?


##### Optionallinks?: boolean

`Optional`Replace hyperlink content?


##### OptionalrelativeTo?: any

`Optional`A document to resolve relative UUIDs against.


##### OptionalrollData?: object | Function

`Optional`The data object providing context for inline rolls, or a function that
produces it.


##### Optionalrolls?: boolean

`Optional`Replace inline dice rolls?


##### Optionalsecrets?: boolean

`Optional`Include unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.


#### Returns Promise<HTMLAnchorElement>

An HTML element for the document link.


### Protected Static_createHyperlink

`Protected``Static`- _createHyperlink(    match: RegExpMatchArray,    options?: EnrichmentOptions,): Promise<HTMLAnchorElement>ProtectedReplace a hyperlink-like string with an actual HTML <a> tag
Parametersmatch: RegExpMatchArrayThe regular expression match
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Returns Promise<HTMLAnchorElement>An HTML element for the document link
- match: RegExpMatchArrayThe regular expression match
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

`Protected`Replace a hyperlink-like string with an actual HTML <a> tag


#### Parameters

- match: RegExpMatchArrayThe regular expression match
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

The regular expression match

`Optional`Options provided to customize text enrichment


#### Returns Promise<HTMLAnchorElement>

An HTML element for the document link


### Protected Static_createInlineRoll

`Protected``Static`- _createInlineRoll(    match: RegExpMatchArray,    rollData: object,    options?: EnrichmentOptions,): Promise<null | HTMLAnchorElement>ProtectedReplace an inline roll formula with a rollable <a> element or an eagerly evaluated roll result
Parametersmatch: RegExpMatchArrayThe regular expression match array
rollData: objectProvided roll data for use in roll evaluation
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.
Returns Promise<null | HTMLAnchorElement>The replaced match. Returns null if the contained command is not a
valid roll expression.
- match: RegExpMatchArrayThe regular expression match array
- rollData: objectProvided roll data for use in roll evaluation
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

`Protected`Replace an inline roll formula with a rollable <a> element or an eagerly evaluated roll result


#### Parameters

- match: RegExpMatchArrayThe regular expression match array
- rollData: objectProvided roll data for use in roll evaluation
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

The regular expression match array

Provided roll data for use in roll evaluation

`Optional`Options provided to customize text enrichment.


#### Returns Promise<null | HTMLAnchorElement>

The replaced match. Returns null if the contained command is not a
valid roll expression.


### Protected Static_createTinyMCE

`Protected``Static`- _createTinyMCE(options?: object, content?: string): Promise<Editor>ProtectedCreate a TinyMCE editor instance.
ParametersOptionaloptions: object = {}Configuration options passed to the editor.
Optionalcontent: string = ""Initial HTML or text content to populate the editor with.
Returns Promise<Editor>The TinyMCE editor instance.
- Optionaloptions: object = {}Configuration options passed to the editor.
- Optionalcontent: string = ""Initial HTML or text content to populate the editor with.

`Protected`Create a TinyMCE editor instance.


#### Parameters

- Optionaloptions: object = {}Configuration options passed to the editor.
- Optionalcontent: string = ""Initial HTML or text content to populate the editor with.

`Optional`Configuration options passed to the editor.

`Optional`Initial HTML or text content to populate the editor with.


#### Returns Promise<Editor>

The TinyMCE editor instance.


### Protected Static_embedContent

`Protected``Static`- _embedContent(    match: RegExpMatchArray,    options?: EnrichmentOptions,): Promise<null | HTMLElement>ProtectedEmbed content from another Document.
Parametersmatch: RegExpMatchArrayThe regular expression match.
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.
Returns Promise<null | HTMLElement>A representation of the Document as HTML content, or null if the Document
could not be embedded.
- match: RegExpMatchArrayThe regular expression match.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

`Protected`Embed content from another Document.


#### Parameters

- match: RegExpMatchArrayThe regular expression match.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

The regular expression match.

`Optional`Options provided to customize text enrichment.


#### Returns Promise<null | HTMLElement>

A representation of the Document as HTML content, or null if the Document
could not be embedded.


### Protected Static_enrichContentLinks

`Protected``Static`- _enrichContentLinks(text: Text[], options?: EnrichmentOptions): Promise<boolean>ProtectedConvert text of the form @UUID[uuid]{name} to anchor elements.
Parameterstext: Text[]The existing text content
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
Returns Promise<boolean>Whether any content links were replaced and the text nodes need to be
updated.
- text: Text[]The existing text content
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.

`Protected`Convert text of the form @UUID[uuid]{name} to anchor elements.


#### Parameters

- text: Text[]The existing text content
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Optionalcustom?: booleanApply custom enrichers?
Optionaldocuments?: booleanReplace dynamic document links?
Optionalembeds?: booleanReplace embedded content?
Optionallinks?: booleanReplace hyperlink content?
OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
Optionalrolls?: booleanReplace inline dice rolls?
Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.
- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.

The existing text content

`Optional`Options provided to customize text enrichment

- Optionalcustom?: booleanApply custom enrichers?
- Optionaldocuments?: booleanReplace dynamic document links?
- Optionalembeds?: booleanReplace embedded content?
- Optionallinks?: booleanReplace hyperlink content?
- OptionalrelativeTo?: anyA document to resolve relative UUIDs against.
- OptionalrollData?: object | FunctionThe data object providing context for inline rolls, or a function that
produces it.
- Optionalrolls?: booleanReplace inline dice rolls?
- Optionalsecrets?: booleanInclude unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.


##### Optionalcustom?: boolean

`Optional`Apply custom enrichers?


##### Optionaldocuments?: boolean

`Optional`Replace dynamic document links?


##### Optionalembeds?: boolean

`Optional`Replace embedded content?


##### Optionallinks?: boolean

`Optional`Replace hyperlink content?


##### OptionalrelativeTo?: any

`Optional`A document to resolve relative UUIDs against.


##### OptionalrollData?: object | Function

`Optional`The data object providing context for inline rolls, or a function that
produces it.


##### Optionalrolls?: boolean

`Optional`Replace inline dice rolls?


##### Optionalsecrets?: boolean

`Optional`Include unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.


#### Returns Promise<boolean>

Whether any content links were replaced and the text nodes need to be
updated.


### Protected Static_enrichEmbeds

`Protected``Static`- _enrichEmbeds(text: Text[], options?: EnrichmentOptions): Promise<boolean>ProtectedHandle embedding Document content with @Embed[uuid]{label} text.
Parameterstext: Text[]The existing text content.
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.
Returns Promise<boolean>Whether any embeds were replaced and the text nodes need to be updated.
- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

`Protected`Handle embedding Document content with @Embed[uuid]{label} text.


#### Parameters

- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

The existing text content.

`Optional`Options provided to customize text enrichment.


#### Returns Promise<boolean>

Whether any embeds were replaced and the text nodes need to be updated.


### Protected Static_enrichHyperlinks

`Protected``Static`- _enrichHyperlinks(text: Text[], options?: EnrichmentOptions): Promise<boolean>ProtectedConvert URLs into anchor elements.
Parameterstext: Text[]The existing text content
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Returns Promise<boolean>Whether any hyperlinks were replaced and the text nodes need to be updated
- text: Text[]The existing text content
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

`Protected`Convert URLs into anchor elements.


#### Parameters

- text: Text[]The existing text content
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

The existing text content

`Optional`Options provided to customize text enrichment


#### Returns Promise<boolean>

Whether any hyperlinks were replaced and the text nodes need to be updated


### Protected Static_enrichInlineRolls

`Protected``Static`- _enrichInlineRolls(    rollData: object | Function,    text: Text[],    options?: EnrichmentOptions,): Promise<boolean>ProtectedConvert text of the form [[roll]] to anchor elements.
ParametersrollData: object | FunctionThe data object providing context for inline rolls.
text: Text[]The existing text content.
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.
Returns Promise<boolean>Whether any inline rolls were replaced and the text nodes need to be updated.
- rollData: object | FunctionThe data object providing context for inline rolls.
- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

`Protected`Convert text of the form [[roll]] to anchor elements.


#### Parameters

- rollData: object | FunctionThe data object providing context for inline rolls.
- text: Text[]The existing text content.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment.

The data object providing context for inline rolls.

The existing text content.

`Optional`Options provided to customize text enrichment.


#### Returns Promise<boolean>

Whether any inline rolls were replaced and the text nodes need to be updated.


### Protected Static_finalizeEnrichedHTML

`Protected``Static`- _finalizeEnrichedHTML(    html: HTMLDivElement,    options: EnrichmentOptions,): Promise<void>Protected InternalA method that can be extended by subclasses to perform final post-enrichment operations on an HTML fragment.
Final changes should be made in-place, mutating the provided HTML element.
Note: This API is experimental and may be removed in later versions without deprecation.
Parametershtml: HTMLDivElementA div element containing the enriched HTML
options: EnrichmentOptionsProvided enrichment options
Returns Promise<void>A promise which resolves once finalization has completed
- html: HTMLDivElementA div element containing the enriched HTML
- options: EnrichmentOptionsProvided enrichment options

`Protected``Internal`A method that can be extended by subclasses to perform final post-enrichment operations on an HTML fragment.
Final changes should be made in-place, mutating the provided HTML element.
Note: This API is experimental and may be removed in later versions without deprecation.


#### Parameters

- html: HTMLDivElementA div element containing the enriched HTML
- options: EnrichmentOptionsProvided enrichment options

A div element containing the enriched HTML

Provided enrichment options


#### Returns Promise<void>

A promise which resolves once finalization has completed


### Protected Static_onClickInlineRoll

`Protected``Static`- _onClickInlineRoll(event: MouseEvent): Promise<any>ProtectedHandle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip
Parametersevent: MouseEventThe initiating click event
Returns Promise<any>
- event: MouseEventThe initiating click event

`Protected`Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip


#### Parameters

- event: MouseEventThe initiating click event

The initiating click event


#### Returns Promise<any>


### Protected Static_parseEmbedConfig

`Protected``Static`- _parseEmbedConfig(raw: string, options?: object): DocumentHTMLEmbedConfigProtectedParse the embed configuration to be passed to ClientDocument#toEmbed.
The return value will be an object of any key=value pairs included with the configuration, as well as a separate
values property that contains all the options supplied that were not in key=value format.
If a uuid key is supplied it is used as the Document's UUID, otherwise the first supplied UUID is used.
Parametersraw: stringThe raw matched config string.
Optionaloptions: object = {}Options forwarded to parseUuid.
Returns DocumentHTMLEmbedConfigExample: Example configurations.TextEditor._parseEmbedConfig('uuid=Actor.xyz caption="Example Caption" cite=false');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", cite: false, values: [] }TextEditor._parseEmbedConfig('Actor.xyz caption="Example Caption" inline');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", values: ["inline"] }
Copy
- raw: stringThe raw matched config string.
- Optionaloptions: object = {}Options forwarded to parseUuid.

`Protected`Parse the embed configuration to be passed to ClientDocument#toEmbed.
The return value will be an object of any key=value pairs included with the configuration, as well as a separate
values property that contains all the options supplied that were not in key=value format.
If a uuid key is supplied it is used as the Document's UUID, otherwise the first supplied UUID is used.


#### Parameters

- raw: stringThe raw matched config string.
- Optionaloptions: object = {}Options forwarded to parseUuid.

The raw matched config string.

`Optional`Options forwarded to parseUuid.


#### Returns DocumentHTMLEmbedConfig


#### Example: Example configurations.

```javascript
TextEditor._parseEmbedConfig('uuid=Actor.xyz caption="Example Caption" cite=false');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", cite: false, values: [] }TextEditor._parseEmbedConfig('Actor.xyz caption="Example Caption" inline');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", values: ["inline"] }
Copy
```

`TextEditor._parseEmbedConfig('uuid=Actor.xyz caption="Example Caption" cite=false');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", cite: false, values: [] }TextEditor._parseEmbedConfig('Actor.xyz caption="Example Caption" inline');// Returns: { uuid: "Actor.xyz", caption: "Example Caption", values: ["inline"] }`
### Protected Static_primeCompendiums

`Protected``Static`- _primeCompendiums(text: Text[], options?: EnrichmentOptions): Promise<void>ProtectedScan for compendium UUIDs and retrieve Documents in batches so that they are in cache when enrichment proceeds.
Parameterstext: Text[]The text nodes to scan.
Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment
Returns Promise<void>
- text: Text[]The text nodes to scan.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

`Protected`Scan for compendium UUIDs and retrieve Documents in batches so that they are in cache when enrichment proceeds.


#### Parameters

- text: Text[]The text nodes to scan.
- Optionaloptions: EnrichmentOptions = {}Options provided to customize text enrichment

The text nodes to scan.

`Optional`Options provided to customize text enrichment


#### Returns Promise<void>


### Protected Static_replaceTextContent

`Protected``Static`- _replaceTextContent(    text: Text[],    rgx: RegExp,    func: TextContentReplacer,    options?: TextReplacementOptions,): booleanProtectedFacilitate the replacement of text node content using a matching regex rule and a provided replacement function.
Parameterstext: Text[]The text nodes to match and replace.
rgx: RegExpThe provided regular expression for matching and replacement
func: TextContentReplacerThe replacement function
Optionaloptions: TextReplacementOptions = {}Options to configure text replacement behavior.
Returns booleanWhether a replacement was made.
- text: Text[]The text nodes to match and replace.
- rgx: RegExpThe provided regular expression for matching and replacement
- func: TextContentReplacerThe replacement function
- Optionaloptions: TextReplacementOptions = {}Options to configure text replacement behavior.

`Protected`Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.


#### Parameters

- text: Text[]The text nodes to match and replace.
- rgx: RegExpThe provided regular expression for matching and replacement
- func: TextContentReplacerThe replacement function
- Optionaloptions: TextReplacementOptions = {}Options to configure text replacement behavior.

The text nodes to match and replace.

The provided regular expression for matching and replacement

The replacement function

`Optional`Options to configure text replacement behavior.


#### Returns boolean

Whether a replacement was made.


### Settings

- Protected
- Inherited
- Internal


### On This Page

