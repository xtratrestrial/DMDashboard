# Items | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.documents.collections.Items.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- documents
- collections
- Items


# Class Items

The singleton collection of Item documents which exist within the active World.
This Collection is accessible within the Game object as game.items.


#### See

- foundry.documents.Item: The Item document
- foundry.applications.sidebar.tabs.ItemDirectory: The ItemDirectory sidebar directory


#### Hierarchy (View Summary)

- WorldCollectionItems
- Items

- Items


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Items(data?: object[]): ItemsParametersdata: object[] = []An array of data objects from which to create document instances
Returns ItemsInherited from WorldCollection.constructor
- data: object[] = []An array of data objects from which to create document instances


#### Parameters

- data: object[] = []An array of data objects from which to create document instances

An array of data objects from which to create document instances


#### Returns Items

Inherited from WorldCollection.constructor


## Properties


### apps

An Array of application references which will be automatically updated when the collection content changes

Inherited from WorldCollection.apps


### invalidDocumentIds

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from WorldCollection.invalidDocumentIds


### StaticdocumentName

`Static`Overrides WorldCollection.documentName


## Accessors


### contents

- get contents(): V[]Return an Array of all the entry values in the Collection
Returns V[]Inherited from WorldCollection.contents

Return an Array of all the entry values in the Collection


#### Returns V[]

Inherited from WorldCollection.contents


### directory

- get directory(): DocumentDirectory<ClientDocument>Return a reference to the SidebarDirectory application for this WorldCollection.
Returns DocumentDirectory<ClientDocument>Inherited from WorldCollection.directory

Return a reference to the SidebarDirectory application for this WorldCollection.


#### Returns DocumentDirectory<ClientDocument>

Inherited from WorldCollection.directory


### documentClass

- get documentClass(): typeof DocumentA reference to the Document class definition which is contained within this DocumentCollection.
Returns typeof DocumentInherited from WorldCollection.documentClass

A reference to the Document class definition which is contained within this DocumentCollection.


#### Returns typeof Document

Inherited from WorldCollection.documentClass


### documentName

- get documentName(): anyReturns anyInherit DocInherited from WorldCollection.documentName


#### Returns any


#### Inherit Doc

Inherited from WorldCollection.documentName


### folders

- get folders(): Collection<string, documents.Folder>Reference the set of Folders which contain documents in this collection
Returns Collection<string, documents.Folder>Inherited from WorldCollection.folders

Reference the set of Folders which contain documents in this collection


#### Returns Collection<string, documents.Folder>

Inherited from WorldCollection.folders


### name

- get name(): stringThe Collection class name
Returns stringInherited from WorldCollection.name

The Collection class name


#### Returns string

Inherited from WorldCollection.name


### Staticinstance

`Static`- get instance(): WorldCollectionReturn a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.
Returns WorldCollectionInherited from WorldCollection.instance

Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.


#### Returns WorldCollection

Inherited from WorldCollection.instance


### StaticregisteredSheets

`Static`- get registeredSheets(): DocumentSheet[]Return an array of currently registered sheet classes for this Document type.
Returns DocumentSheet[]Inherited from WorldCollection.registeredSheets

Return an array of currently registered sheet classes for this Document type.


#### Returns DocumentSheet[]

Inherited from WorldCollection.registeredSheets


## Methods


### _getVisibleTreeContents

- _getVisibleTreeContents(entry: any): any[]Parametersentry: anyReturns any[]Inherited from WorldCollection._getVisibleTreeContents
- entry: any


#### Parameters

- entry: any


#### Returns any[]

Inherited from WorldCollection._getVisibleTreeContents


### _onModifyContents

- _onModifyContents(    action: DatabaseAction,    documents: ClientDocument[],    result: any[],    operation: DatabaseOperation,    user: documents.User,): voidInternalFollow-up actions to take when a database operation modifies Documents in this DocumentCollection.
Parametersaction: DatabaseActionThe database action performed
documents: ClientDocument[]The array of modified Documents
result: any[]The result of the database operation
operation: DatabaseOperationDatabase operation details
user: documents.UserThe User who performed the operation
Returns voidInherited from WorldCollection._onModifyContents
- action: DatabaseActionThe database action performed
- documents: ClientDocument[]The array of modified Documents
- result: any[]The result of the database operation
- operation: DatabaseOperationDatabase operation details
- user: documents.UserThe User who performed the operation

`Internal`Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.


#### Parameters

- action: DatabaseActionThe database action performed
- documents: ClientDocument[]The array of modified Documents
- result: any[]The result of the database operation
- operation: DatabaseOperationDatabase operation details
- user: documents.UserThe User who performed the operation

The database action performed

The array of modified Documents

The result of the database operation

Database operation details

The User who performed the operation


#### Returns void

Inherited from WorldCollection._onModifyContents


### [iterator]

- "[iterator]"(): MapIterator<any>Then iterating over a Collection, we should iterate over its values instead of over its entries
Returns MapIterator<any>Inherited from WorldCollection.[iterator]

Then iterating over a Collection, we should iterate over its values instead of over its entries


#### Returns MapIterator<any>

Inherited from WorldCollection.[iterator]


### createDocument

- createDocument(    data: object,    context?: object,): Document<object, DocumentConstructionContext>Instantiate a Document for inclusion in the Collection.
Parametersdata: objectThe Document data.
Optionalcontext: object = {}Document creation context.
Returns Document<object, DocumentConstructionContext>Inherited from WorldCollection.createDocument
- data: objectThe Document data.
- Optionalcontext: object = {}Document creation context.

Instantiate a Document for inclusion in the Collection.


#### Parameters

- data: objectThe Document data.
- Optionalcontext: object = {}Document creation context.

The Document data.

`Optional`Document creation context.


#### Returns Document<object, DocumentConstructionContext>

Inherited from WorldCollection.createDocument


### delete

- delete(id: any): booleanParametersid: anyReturns booleanInherit DocInherited from WorldCollection.delete
- id: any


#### Parameters

- id: any


#### Returns boolean


#### Inherit Doc

Inherited from WorldCollection.delete


### filter

- filter(    condition: (        value: any,        index: number,        collection: Collection<any, any>,    ) => unknown,): any[]Filter the Collection, returning an Array of entries which match a functional condition.
Parameterscondition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.
Returns any[]An Array of matched values
SeeExample: Filter the Collection for specific entrieslet c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);let hasA = c.filters(entry => entry.slice(0) === "A");
Copy

Inherited from WorldCollection.filter
- condition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.

Filter the Collection, returning an Array of entries which match a functional condition.


#### Parameters

- condition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.

The functional condition to
test.


#### Returns any[]

An Array of matched values


#### See


#### Example: Filter the Collection for specific entries

```javascript
let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);let hasA = c.filters(entry => entry.slice(0) === "A");
Copy
```

`let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);let hasA = c.filters(entry => entry.slice(0) === "A");`Inherited from WorldCollection.filter


### find

- find(    condition: (        value: any,        index: number,        collection: Collection<any, any>,    ) => unknown,): anyFind an entry in the Map using a functional condition.
Parameterscondition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.
Returns anyThe value, if found, otherwise undefined
SeeExample: Create a new Collection and reference its contentslet c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);c.get("a") === c.find(entry => entry === "A"); // true
Copy

Inherited from WorldCollection.find
- condition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.

Find an entry in the Map using a functional condition.


#### Parameters

- condition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.

The functional condition to
test.


#### Returns any

The value, if found, otherwise undefined


#### See


#### Example: Create a new Collection and reference its contents

```javascript
let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);c.get("a") === c.find(entry => entry === "A"); // true
Copy
```

`let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);c.get("a") === c.find(entry => entry === "A"); // true`Inherited from WorldCollection.find


### forEach

- forEach(fn: (value: any) => void): voidApply a function to each element of the collection
Parametersfn: (value: any) => voidA function to apply to each element
Returns voidSeeArray#forEach
Example: Apply a function to each value in the collectionlet c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);c.forEach(e => e.active = true);
Copy

Inherited from WorldCollection.forEach
- fn: (value: any) => voidA function to apply to each element

Apply a function to each element of the collection


#### Parameters

- fn: (value: any) => voidA function to apply to each element

A function to apply to each element


#### Returns void


#### See

Array#forEach


#### Example: Apply a function to each value in the collection

```javascript
let c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);c.forEach(e => e.active = true);
Copy
```

`let c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);c.forEach(e => e.active = true);`Inherited from WorldCollection.forEach


### fromCompendium

- fromCompendium(    document: object | Document<object, DocumentConstructionContext>,    options?: FromCompendiumOptions,): objectApply data transformations when importing a Document from a Compendium pack
Parametersdocument: object | Document<object, DocumentConstructionContext>The source Document, or a plain data object
Optionaloptions: FromCompendiumOptions = {}Additional options which modify how the document is imported
Returns objectThe processed data ready for world Document creation
Inherited from WorldCollection.fromCompendium
- document: object | Document<object, DocumentConstructionContext>The source Document, or a plain data object
- Optionaloptions: FromCompendiumOptions = {}Additional options which modify how the document is imported

Apply data transformations when importing a Document from a Compendium pack


#### Parameters

- document: object | Document<object, DocumentConstructionContext>The source Document, or a plain data object
- Optionaloptions: FromCompendiumOptions = {}Additional options which modify how the document is imported

The source Document, or a plain data object

`Optional`Additional options which modify how the document is imported


#### Returns object

The processed data ready for world Document creation

Inherited from WorldCollection.fromCompendium


### get

- get(    id: string,    options?: { invalid?: boolean; strict?: boolean },): Document<object, DocumentConstructionContext>Get an element from the DocumentCollection by its ID.
Parametersid: stringThe ID of the Document to retrieve.
Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options to configure retrieval.
Optionalinvalid?: booleanAllow retrieving an invalid Document.
Optionalstrict?: booleanThrow an Error if the requested Document does not exist.
Returns Document<object, DocumentConstructionContext>ThrowsIf strict is true and the Document cannot be found.
Inherited from WorldCollection.get
- id: stringThe ID of the Document to retrieve.
- Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options to configure retrieval.
Optionalinvalid?: booleanAllow retrieving an invalid Document.
Optionalstrict?: booleanThrow an Error if the requested Document does not exist.
- Optionalinvalid?: booleanAllow retrieving an invalid Document.
- Optionalstrict?: booleanThrow an Error if the requested Document does not exist.

Get an element from the DocumentCollection by its ID.


#### Parameters

- id: stringThe ID of the Document to retrieve.
- Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options to configure retrieval.
Optionalinvalid?: booleanAllow retrieving an invalid Document.
Optionalstrict?: booleanThrow an Error if the requested Document does not exist.
- Optionalinvalid?: booleanAllow retrieving an invalid Document.
- Optionalstrict?: booleanThrow an Error if the requested Document does not exist.

The ID of the Document to retrieve.

`Optional`Additional options to configure retrieval.

- Optionalinvalid?: booleanAllow retrieving an invalid Document.
- Optionalstrict?: booleanThrow an Error if the requested Document does not exist.


##### Optionalinvalid?: boolean

`Optional`Allow retrieving an invalid Document.


##### Optionalstrict?: boolean

`Optional`Throw an Error if the requested Document does not exist.


#### Returns Document<object, DocumentConstructionContext>


#### Throws

If strict is true and the Document cannot be found.

Inherited from WorldCollection.get


### getInvalid

- getInvalid(    id: string,    options?: { strict?: boolean },): void | Document<object, DocumentConstructionContext>Obtain a temporary Document instance for a document id which currently has invalid source data.
Parametersid: stringA document ID with invalid source data.
Optionaloptions: { strict?: boolean } = {}Additional options to configure retrieval.
Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.
Returns void | Document<object, DocumentConstructionContext>An in-memory instance for the invalid Document
ThrowsIf strict is true and the requested ID is not in the set of invalid IDs
for this collection.
Inherited from WorldCollection.getInvalid
- id: stringA document ID with invalid source data.
- Optionaloptions: { strict?: boolean } = {}Additional options to configure retrieval.
Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.
- Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.

Obtain a temporary Document instance for a document id which currently has invalid source data.


#### Parameters

- id: stringA document ID with invalid source data.
- Optionaloptions: { strict?: boolean } = {}Additional options to configure retrieval.
Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.
- Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.

A document ID with invalid source data.

`Optional`Additional options to configure retrieval.

- Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.


##### Optionalstrict?: boolean

`Optional`Throw an Error if the requested ID is not in the set of invalid IDs for
this collection.


#### Returns void | Document<object, DocumentConstructionContext>

An in-memory instance for the invalid Document


#### Throws

If strict is true and the requested ID is not in the set of invalid IDs
for this collection.

Inherited from WorldCollection.getInvalid


### getName

- getName(name: string, options?: { strict?: boolean }): anyGet an entry from the Collection by name.
Use of this method assumes that the objects stored in the collection have a "name" attribute.
Parametersname: stringThe name of the entry to retrieve
Optionaloptions: { strict?: boolean } = {}Additional options that affect how entries are retrieved
Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.
Returns anyThe retrieved entry value, if one was found, otherwise undefined
Example: Get an element from the Collection by name (if applicable)let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);c.getName("Alfred"); // "Alfred"c.getName("D"); // undefinedc.getName("D", {strict: true}); // throws Error
Copy

Inherited from WorldCollection.getName
- name: stringThe name of the entry to retrieve
- Optionaloptions: { strict?: boolean } = {}Additional options that affect how entries are retrieved
Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.
- Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.

Get an entry from the Collection by name.
Use of this method assumes that the objects stored in the collection have a "name" attribute.


#### Parameters

- name: stringThe name of the entry to retrieve
- Optionaloptions: { strict?: boolean } = {}Additional options that affect how entries are retrieved
Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.
- Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.

The name of the entry to retrieve

`Optional`Additional options that affect how entries are retrieved

- Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.


##### Optionalstrict?: boolean

`Optional`Throw an Error if the requested name does not exist. Default false.


#### Returns any

The retrieved entry value, if one was found, otherwise undefined


#### Example: Get an element from the Collection by name (if applicable)

```javascript
let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);c.getName("Alfred"); // "Alfred"c.getName("D"); // undefinedc.getName("D", {strict: true}); // throws Error
Copy
```

`let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);c.getName("Alfred"); // "Alfred"c.getName("D"); // undefinedc.getName("D", {strict: true}); // throws Error`Inherited from WorldCollection.getName


### importFromCompendium

- importFromCompendium(    pack: CompendiumCollection,    id: string,    updateData?: object,    options?: object,): Promise<Document<object, DocumentConstructionContext>>Import a Document from a Compendium collection, adding it to the current World.
Parameterspack: CompendiumCollectionThe CompendiumCollection instance from which to import
id: stringThe ID of the compendium entry to import
OptionalupdateData: object = {}Optional additional data used to modify the imported Document before it is created
Optionaloptions: object = {}Optional arguments passed to the
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.create methods
Returns Promise<Document<object, DocumentConstructionContext>>The imported Document instance
Inherited from WorldCollection.importFromCompendium
- pack: CompendiumCollectionThe CompendiumCollection instance from which to import
- id: stringThe ID of the compendium entry to import
- OptionalupdateData: object = {}Optional additional data used to modify the imported Document before it is created
- Optionaloptions: object = {}Optional arguments passed to the
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.create methods

Import a Document from a Compendium collection, adding it to the current World.


#### Parameters

- pack: CompendiumCollectionThe CompendiumCollection instance from which to import
- id: stringThe ID of the compendium entry to import
- OptionalupdateData: object = {}Optional additional data used to modify the imported Document before it is created
- Optionaloptions: object = {}Optional arguments passed to the
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.create methods

The CompendiumCollection instance from which to import

The ID of the compendium entry to import

`Optional`Optional additional data used to modify the imported Document before it is created

`Optional`Optional arguments passed to the
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.create methods


#### Returns Promise<Document<object, DocumentConstructionContext>>

The imported Document instance

Inherited from WorldCollection.importFromCompendium


### map

- map(transformer: (arg0: any, arg1: number, arg2: Collection) => any): any[]Transform each element of the Collection into a new form, returning an Array of transformed values
Parameterstransformer: (arg0: any, arg1: number, arg2: Collection) => anyA transformation function applied to each entry value.
Positional arguments are the value, the index of iteration, and the collection being mapped.
Returns any[]An Array of transformed values
Inherited from WorldCollection.map
- transformer: (arg0: any, arg1: number, arg2: Collection) => anyA transformation function applied to each entry value.
Positional arguments are the value, the index of iteration, and the collection being mapped.

Transform each element of the Collection into a new form, returning an Array of transformed values


#### Parameters

- transformer: (arg0: any, arg1: number, arg2: Collection) => anyA transformation function applied to each entry value.
Positional arguments are the value, the index of iteration, and the collection being mapped.

A transformation function applied to each entry value.
Positional arguments are the value, the index of iteration, and the collection being mapped.


#### Returns any[]

An Array of transformed values

Inherited from WorldCollection.map


### reduce

- reduce(    reducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => any,    initial: any,): anyReduce the Collection by applying an evaluator function and accumulating entries
Parametersreducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => anyA reducer function applied to each entry value. Positional
arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
initial: anyAn initial value which accumulates with each iteration
Returns anyThe accumulated result
SeeExample: Reduce a collection to an array of transformed valueslet c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);let letters = c.reduce((s, l) => {  return s + l;}, ""); // "ABC"
Copy

Inherited from WorldCollection.reduce
- reducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => anyA reducer function applied to each entry value. Positional
arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
- initial: anyAn initial value which accumulates with each iteration

Reduce the Collection by applying an evaluator function and accumulating entries


#### Parameters

- reducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => anyA reducer function applied to each entry value. Positional
arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
- initial: anyAn initial value which accumulates with each iteration

A reducer function applied to each entry value. Positional
arguments are the accumulator, the value, the index of iteration, and the collection being reduced.

An initial value which accumulates with each iteration


#### Returns any

The accumulated result


#### See


#### Example: Reduce a collection to an array of transformed values

```javascript
let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);let letters = c.reduce((s, l) => {  return s + l;}, ""); // "ABC"
Copy
```

`let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);let letters = c.reduce((s, l) => {  return s + l;}, ""); // "ABC"`Inherited from WorldCollection.reduce


### render

- render(force?: boolean, options?: object): voidRender any Applications associated with this DocumentCollection.
ParametersOptionalforce: boolean = falseForce rendering
Optionaloptions: object = {}Optional options
Returns voidInherited from WorldCollection.render
- Optionalforce: boolean = falseForce rendering
- Optionaloptions: object = {}Optional options

Render any Applications associated with this DocumentCollection.


#### Parameters

- Optionalforce: boolean = falseForce rendering
- Optionaloptions: object = {}Optional options

`Optional`Force rendering

`Optional`Optional options


#### Returns void

Inherited from WorldCollection.render


### search

- search(    search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },): object[] | Document<object, DocumentConstructionContext>[]Find all Documents which match a given search term using a full-text search against their indexed HTML fields
and their name. If filters are provided, results are filtered to only those that match the provided values.
Parameterssearch: { exclude?: string[]; filters?: FieldFilter[]; query?: string }An object configuring the search
Optionalexclude?: string[]An array of document IDs to exclude from search results
Optionalfilters?: FieldFilter[]An array of filters to apply
Optionalquery?: stringA case-insensitive search string
Returns object[] | Document<object, DocumentConstructionContext>[]Inherited from WorldCollection.search
- search: { exclude?: string[]; filters?: FieldFilter[]; query?: string }An object configuring the search
Optionalexclude?: string[]An array of document IDs to exclude from search results
Optionalfilters?: FieldFilter[]An array of filters to apply
Optionalquery?: stringA case-insensitive search string
- Optionalexclude?: string[]An array of document IDs to exclude from search results
- Optionalfilters?: FieldFilter[]An array of filters to apply
- Optionalquery?: stringA case-insensitive search string

Find all Documents which match a given search term using a full-text search against their indexed HTML fields
and their name. If filters are provided, results are filtered to only those that match the provided values.


#### Parameters

- search: { exclude?: string[]; filters?: FieldFilter[]; query?: string }An object configuring the search
Optionalexclude?: string[]An array of document IDs to exclude from search results
Optionalfilters?: FieldFilter[]An array of filters to apply
Optionalquery?: stringA case-insensitive search string
- Optionalexclude?: string[]An array of document IDs to exclude from search results
- Optionalfilters?: FieldFilter[]An array of filters to apply
- Optionalquery?: stringA case-insensitive search string

An object configuring the search

- Optionalexclude?: string[]An array of document IDs to exclude from search results
- Optionalfilters?: FieldFilter[]An array of filters to apply
- Optionalquery?: stringA case-insensitive search string


##### Optionalexclude?: string[]

`Optional`An array of document IDs to exclude from search results


##### Optionalfilters?: FieldFilter[]

`Optional`An array of filters to apply


##### Optionalquery?: string

`Optional`A case-insensitive search string


#### Returns object[] | Document<object, DocumentConstructionContext>[]

Inherited from WorldCollection.search


### set

- set(id: any, document: any): voidParametersid: anydocument: anyReturns voidInherit DocInherited from WorldCollection.set
- id: any
- document: any


#### Parameters

- id: any
- document: any


#### Returns void


#### Inherit Doc

Inherited from WorldCollection.set


### some

- some(condition: (arg0: any, arg1: number, arg2: Collection) => boolean): booleanTest whether a condition is met by some entry in the Collection.
Parameterscondition: (arg0: any, arg1: number, arg2: Collection) => booleanThe functional condition to test. Positional
arguments are the value, the index of iteration, and the collection being tested.
Returns booleanWas the test condition passed by at least one entry?
SeeInherited from WorldCollection.some
- condition: (arg0: any, arg1: number, arg2: Collection) => booleanThe functional condition to test. Positional
arguments are the value, the index of iteration, and the collection being tested.

Test whether a condition is met by some entry in the Collection.


#### Parameters

- condition: (arg0: any, arg1: number, arg2: Collection) => booleanThe functional condition to test. Positional
arguments are the value, the index of iteration, and the collection being tested.

The functional condition to test. Positional
arguments are the value, the index of iteration, and the collection being tested.


#### Returns boolean

Was the test condition passed by at least one entry?


#### See

Inherited from WorldCollection.some


### toJSON

- toJSON(): object[]Convert the Collection to a primitive array of its contents.
Returns object[]An array of contained values
Inherited from WorldCollection.toJSON

Convert the Collection to a primitive array of its contents.


#### Returns object[]

An array of contained values

Inherited from WorldCollection.toJSON


### updateAll

- updateAll(    transformation: object | Function,    condition?: null | Function,    options?: object,): Promise<Document<object, DocumentConstructionContext>[]>Update all objects in this DocumentCollection with a provided transformation.
Conditionally filter to only apply to Entities which match a certain condition.
Parameterstransformation: object | FunctionAn object of data or function to apply to all matched objects
condition: null | Function = nullA function which tests whether to target each object
Optionaloptions: object = {}Additional options passed to Document.updateDocuments
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated data once the operation is complete
Inherited from WorldCollection.updateAll
- transformation: object | FunctionAn object of data or function to apply to all matched objects
- condition: null | Function = nullA function which tests whether to target each object
- Optionaloptions: object = {}Additional options passed to Document.updateDocuments

Update all objects in this DocumentCollection with a provided transformation.
Conditionally filter to only apply to Entities which match a certain condition.


#### Parameters

- transformation: object | FunctionAn object of data or function to apply to all matched objects
- condition: null | Function = nullA function which tests whether to target each object
- Optionaloptions: object = {}Additional options passed to Document.updateDocuments

An object of data or function to apply to all matched objects

A function which tests whether to target each object

`Optional`Additional options passed to Document.updateDocuments


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of updated data once the operation is complete

Inherited from WorldCollection.updateAll


### Protected_initialize

`Protected`- _initialize(): voidProtectedInitialize the DocumentCollection by constructing any initially provided Document instances
Returns voidInherited from WorldCollection._initialize

`Protected`Initialize the DocumentCollection by constructing any initially provided Document instances


#### Returns void

Inherited from WorldCollection._initialize


### StaticgetSearchableFields

`Static`- getSearchableFields(    documentName: string,    type?: string,): Record<string, SearchableField>Get the searchable fields for a given document or index, based on its data model
ParametersdocumentName: stringThe document name
Optionaltype: stringA document subtype
Returns Record<string, SearchableField>A record of searchable DataField definitions
Inherited from WorldCollection.getSearchableFields
- documentName: stringThe document name
- Optionaltype: stringA document subtype

Get the searchable fields for a given document or index, based on its data model


#### Parameters

- documentName: stringThe document name
- Optionaltype: stringA document subtype

The document name

`Optional`A document subtype


#### Returns Record<string, SearchableField>

A record of searchable DataField definitions

Inherited from WorldCollection.getSearchableFields


### StaticregisterSheet

`Static`- registerSheet(...args: any[]): voidRegister a Document sheet class as a candidate which can be used to display Documents of a given type.
See foundry.applications.apps.DocumentSheetConfig.registerSheet for details.
Parameters...args: any[]Arguments forwarded to the DocumentSheetConfig.registerSheet method
Returns voidExample: Register a new ActorSheet subclass for use with certain Actor types.foundry.documents.collections.Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {  types: ["character],  makeDefault: true});
Copy

Inherited from WorldCollection.registerSheet
- ...args: any[]Arguments forwarded to the DocumentSheetConfig.registerSheet method

Register a Document sheet class as a candidate which can be used to display Documents of a given type.
See foundry.applications.apps.DocumentSheetConfig.registerSheet for details.


#### Parameters

- ...args: any[]Arguments forwarded to the DocumentSheetConfig.registerSheet method

Arguments forwarded to the DocumentSheetConfig.registerSheet method


#### Returns void


#### Example: Register a new ActorSheet subclass for use with certain Actor types.

```javascript
foundry.documents.collections.Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {  types: ["character],  makeDefault: true});
Copy
```

`foundry.documents.collections.Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {  types: ["character],  makeDefault: true});`Inherited from WorldCollection.registerSheet


### StaticunregisterSheet

`Static`- unregisterSheet(...args: any[]): voidUnregister a Document sheet class, removing it from the list of available sheet Applications to use.
See foundry.applications.apps.DocumentSheetConfig.unregisterSheet for detauls.
Parameters...args: any[]Arguments forwarded to the DocumentSheetConfig.unregisterSheet method
Returns voidExample: Deregister the default ActorSheet subclass to replace it with others.foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);
Copy

Inherited from WorldCollection.unregisterSheet
- ...args: any[]Arguments forwarded to the DocumentSheetConfig.unregisterSheet method

Unregister a Document sheet class, removing it from the list of available sheet Applications to use.
See foundry.applications.apps.DocumentSheetConfig.unregisterSheet for detauls.


#### Parameters

- ...args: any[]Arguments forwarded to the DocumentSheetConfig.unregisterSheet method

Arguments forwarded to the DocumentSheetConfig.unregisterSheet method


#### Returns void


#### Example: Deregister the default ActorSheet subclass to replace it with others.

```javascript
foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);
Copy
```

`foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);`Inherited from WorldCollection.unregisterSheet


### Settings

- Protected
- Inherited
- Internal


### On This Page

