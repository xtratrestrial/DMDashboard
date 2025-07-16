# CompendiumCollection | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.documents.collections.CompendiumCollection.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- documents
- collections
- CompendiumCollection


# Class CompendiumCollection

A collection of Document objects contained within a specific compendium pack.
Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.


### Hook Events

- hookEvents.updateCompendium


#### See

foundry.Game#packs


#### Hierarchy (View Summary)

- DocumentCollection<this>CompendiumCollection
- CompendiumCollection

- CompendiumCollection


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new CompendiumCollection(metadata: object): CompendiumCollectionParametersmetadata: objectThe compendium metadata, an object provided by game.data
Returns CompendiumCollectionOverrides DocumentCollection.constructor
- metadata: objectThe compendium metadata, an object provided by game.data


#### Parameters

- metadata: objectThe compendium metadata, an object provided by game.data

The compendium metadata, an object provided by game.data


#### Returns CompendiumCollection

Overrides DocumentCollection.constructor


## Properties


### applicationClass

A reference to the Application class which provides an interface to interact with this compendium content.


### apps

An Array of application references which will be automatically updated when the collection content changes

Inherited from DocumentCollection.apps


### index

A subsidiary collection which contains the more minimal index of the pack


### invalidDocumentIds

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from DocumentCollection.invalidDocumentIds


### metadata

The compendium metadata which defines the compendium content and location


### StaticCACHE_LIFETIME_SECONDS

`Static`The amount of time that Document instances within this CompendiumCollection are held in memory.
Accessing the contents of the Compendium pack extends the duration of this lifetime.


### StaticCONFIG_SETTING

`Static`The named game setting which contains Compendium configurations.


### StaticdocumentName

`Static`The base Document type which is contained within this DocumentCollection

Inherited from DocumentCollection.documentName


## Accessors


### banner

- get banner(): null | string | voidThe banner image for this Compendium pack, or the default image for the pack type if no image is set.
Returns null | string | void

The banner image for this Compendium pack, or the default image for the pack type if no image is set.


#### Returns null | string | void


### collection

- get collection(): stringThe canonical Compendium name - comprised of the originating package and the pack name
Returns string

The canonical Compendium name - comprised of the originating package and the pack name


#### Returns string


### config

- get config(): objectAccess the compendium configuration data for this pack
Returns object

Access the compendium configuration data for this pack


#### Returns object


### contents

- get contents(): V[]Return an Array of all the entry values in the Collection
Returns V[]Inherited from DirectoryCollectionMixin(DocumentCollection).contents

Return an Array of all the entry values in the Collection


#### Returns V[]

Inherited from DirectoryCollectionMixin(DocumentCollection).contents


### documentClass

- get documentClass(): typeof DocumentA reference to the Document class definition which is contained within this DocumentCollection.
Returns typeof DocumentInherited from DirectoryCollectionMixin(DocumentCollection).documentClass

A reference to the Document class definition which is contained within this DocumentCollection.


#### Returns typeof Document

Inherited from DirectoryCollectionMixin(DocumentCollection).documentClass


### documentName

- get documentName(): anyReturns anyInherit DocOverrides DirectoryCollectionMixin(DocumentCollection).documentName


#### Returns any


#### Inherit Doc

Overrides DirectoryCollectionMixin(DocumentCollection).documentName


### folder

- get folder(): null | documents.FolderGet the Folder that this Compendium is displayed within
Returns null | documents.Folder

Get the Folder that this Compendium is displayed within


#### Returns null | documents.Folder


### indexed

- get indexed(): booleanHas this compendium pack been fully indexed?
Returns boolean

Has this compendium pack been fully indexed?


#### Returns boolean


### indexFields

- get indexFields(): Set<string>The index fields which should be loaded for this compendium pack
Returns Set<string>

The index fields which should be loaded for this compendium pack


#### Returns Set<string>


### locked

- get locked(): booleanTrack whether the Compendium Collection is locked for editing
Returns boolean

Track whether the Compendium Collection is locked for editing


#### Returns boolean


### maxFolderDepth

- get maxFolderDepth(): numberReturns number


#### Returns number


### name

- get name(): stringThe Collection class name
Returns stringInherited from DirectoryCollectionMixin(DocumentCollection).name

The Collection class name


#### Returns string

Inherited from DirectoryCollectionMixin(DocumentCollection).name


### ownership

- get ownership(): Record<    Readonly<        { ASSISTANT: 3; GAMEMASTER: 4; NONE: 0; PLAYER: 1; TRUSTED: 2 },    >,    Readonly<{ INHERIT: -1; LIMITED: 1; NONE: 0; OBSERVER: 2; OWNER: 3 }>,>The visibility configuration of this compendium pack.
Returns Record<    Readonly<        { ASSISTANT: 3; GAMEMASTER: 4; NONE: 0; PLAYER: 1; TRUSTED: 2 },    >,    Readonly<{ INHERIT: -1; LIMITED: 1; NONE: 0; OBSERVER: 2; OWNER: 3 }>,>

The visibility configuration of this compendium pack.


#### Returns Record<    Readonly<        { ASSISTANT: 3; GAMEMASTER: 4; NONE: 0; PLAYER: 1; TRUSTED: 2 },    >,    Readonly<{ INHERIT: -1; LIMITED: 1; NONE: 0; OBSERVER: 2; OWNER: 3 }>,>


### sort

- get sort(): numberGet the sort order for this Compendium
Returns number

Get the sort order for this Compendium


#### Returns number


### title

- get title(): stringA convenience reference to the label which should be used as the title for the Compendium pack.
Returns string

A convenience reference to the label which should be used as the title for the Compendium pack.


#### Returns string


### visible

- get visible(): booleanIs this Compendium pack visible to the current game User?
Returns boolean

Is this Compendium pack visible to the current game User?


#### Returns boolean


## Methods


### _getVisibleTreeContents

- _getVisibleTreeContents(): anyReturns any


#### Returns any


### _onModifyContents

- _onModifyContents(    action: any,    documents: any,    result: any,    operation: any,    user: any,): voidInternalFollow-up actions to take when a database operation modifies Documents in this DocumentCollection.
Parametersaction: anyThe database action performed
documents: anyThe array of modified Documents
result: anyThe result of the database operation
operation: anyDatabase operation details
user: anyThe User who performed the operation
Returns voidOverrides DocumentCollection._onModifyContents
- action: anyThe database action performed
- documents: anyThe array of modified Documents
- result: anyThe result of the database operation
- operation: anyDatabase operation details
- user: anyThe User who performed the operation

`Internal`Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.


#### Parameters

- action: anyThe database action performed
- documents: anyThe array of modified Documents
- result: anyThe result of the database operation
- operation: anyDatabase operation details
- user: anyThe User who performed the operation

The database action performed

The array of modified Documents

The result of the database operation

Database operation details

The User who performed the operation


#### Returns void

Overrides DocumentCollection._onModifyContents


### [iterator]

- "[iterator]"(): MapIterator<any>Then iterating over a Collection, we should iterate over its values instead of over its entries
Returns MapIterator<any>Inherited from DocumentCollection.[iterator]

Then iterating over a Collection, we should iterate over its values instead of over its entries


#### Returns MapIterator<any>

Inherited from DocumentCollection.[iterator]


### clear

- clear(): voidReturns voidInherit DocOverrides DirectoryCollectionMixin(DocumentCollection).clear


#### Returns void


#### Inherit Doc

Overrides DirectoryCollectionMixin(DocumentCollection).clear


### configure

- configure(configuration?: object): Promise<void>Assign configuration metadata settings to the compendium pack
Parametersconfiguration: object = {}The object of compendium settings to define
Returns Promise<void>A Promise which resolves once the setting is updated
- configuration: object = {}The object of compendium settings to define

Assign configuration metadata settings to the compendium pack


#### Parameters

- configuration: object = {}The object of compendium settings to define

The object of compendium settings to define


#### Returns Promise<void>

A Promise which resolves once the setting is updated


### configureOwnershipDialog

- configureOwnershipDialog(): Promise<Record<string, string>>Prompt the gamemaster with a dialog to configure ownership of this Compendium pack.
Returns Promise<Record<string, string>>The configured ownership for the pack

Prompt the gamemaster with a dialog to configure ownership of this Compendium pack.


#### Returns Promise<Record<string, string>>

The configured ownership for the pack


### createDocument

- createDocument(    data: object,    context?: object,): Document<object, DocumentConstructionContext>Instantiate a Document for inclusion in the Collection.
Parametersdata: objectThe Document data.
Optionalcontext: object = {}Document creation context.
Returns Document<object, DocumentConstructionContext>Inherited from DocumentCollection.createDocument
- data: objectThe Document data.
- Optionalcontext: object = {}Document creation context.

Instantiate a Document for inclusion in the Collection.


#### Parameters

- data: objectThe Document data.
- Optionalcontext: object = {}Document creation context.

The Document data.

`Optional`Document creation context.


#### Returns Document<object, DocumentConstructionContext>

Inherited from DocumentCollection.createDocument


### delete

- delete(id: any): booleanParametersid: anyReturns booleanInherit DocOverrides DocumentCollection.delete
- id: any


#### Parameters

- id: any


#### Returns boolean


#### Inherit Doc

Overrides DocumentCollection.delete


### deleteCompendium

- deleteCompendium(): Promise<CompendiumCollection>Delete an existing world-level Compendium Collection.
This action may only be performed for world-level packs by a Gamemaster User.
Returns Promise<CompendiumCollection>

Delete an existing world-level Compendium Collection.
This action may only be performed for world-level packs by a Gamemaster User.


#### Returns Promise<CompendiumCollection>


### duplicateCompendium

- duplicateCompendium(label?: string): Promise<CompendiumCollection>Duplicate a compendium pack to the current World.
Parameterslabel: string = {}A new Compendium label
Returns Promise<CompendiumCollection>
- label: string = {}A new Compendium label

Duplicate a compendium pack to the current World.


#### Parameters

- label: string = {}A new Compendium label

A new Compendium label


#### Returns Promise<CompendiumCollection>


### filter

- filter(    condition: (        value: any,        index: number,        collection: Collection<any, any>,    ) => unknown,): any[]Filter the Collection, returning an Array of entries which match a functional condition.
Parameterscondition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.
Returns any[]An Array of matched values
SeeExample: Filter the Collection for specific entrieslet c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);let hasA = c.filters(entry => entry.slice(0) === "A");
Copy

Inherited from DocumentCollection.filter
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

`let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);let hasA = c.filters(entry => entry.slice(0) === "A");`Inherited from DocumentCollection.filter


### find

- find(    condition: (        value: any,        index: number,        collection: Collection<any, any>,    ) => unknown,): anyFind an entry in the Map using a functional condition.
Parameterscondition: (value: any, index: number, collection: Collection<any, any>) => unknownThe functional condition to
test.
Returns anyThe value, if found, otherwise undefined
SeeExample: Create a new Collection and reference its contentslet c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);c.get("a") === c.find(entry => entry === "A"); // true
Copy

Inherited from DocumentCollection.find
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

`let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);c.get("a") === c.find(entry => entry === "A"); // true`Inherited from DocumentCollection.find


### forEach

- forEach(fn: (value: any) => void): voidApply a function to each element of the collection
Parametersfn: (value: any) => voidA function to apply to each element
Returns voidSeeArray#forEach
Example: Apply a function to each value in the collectionlet c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);c.forEach(e => e.active = true);
Copy

Inherited from DocumentCollection.forEach
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

`let c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);c.forEach(e => e.active = true);`Inherited from DocumentCollection.forEach


### get

- get(key: any, options: any): Document<object, DocumentConstructionContext>Get an element from the DocumentCollection by its ID.
Parameterskey: anyThe ID of the Document to retrieve.
options: anyAdditional options to configure retrieval.
Returns Document<object, DocumentConstructionContext>ThrowsIf strict is true and the Document cannot be found.
Overrides DocumentCollection.get
- key: anyThe ID of the Document to retrieve.
- options: anyAdditional options to configure retrieval.

Get an element from the DocumentCollection by its ID.


#### Parameters

- key: anyThe ID of the Document to retrieve.
- options: anyAdditional options to configure retrieval.

The ID of the Document to retrieve.

Additional options to configure retrieval.


#### Returns Document<object, DocumentConstructionContext>


#### Throws

If strict is true and the Document cannot be found.

Overrides DocumentCollection.get


### getDocument

- getDocument(    id: string,): undefined | Promise<Document<object, DocumentConstructionContext>>Get a single Document from this Compendium by ID.
The document may already be locally cached, otherwise it is retrieved from the server.
Parametersid: stringThe requested Document id
Returns undefined | Promise<Document<object, DocumentConstructionContext>>The retrieved Document instance
- id: stringThe requested Document id

Get a single Document from this Compendium by ID.
The document may already be locally cached, otherwise it is retrieved from the server.


#### Parameters

- id: stringThe requested Document id

The requested Document id


#### Returns undefined | Promise<Document<object, DocumentConstructionContext>>

The retrieved Document instance


### getDocuments

- getDocuments(    query?: object,): Promise<Document<object, DocumentConstructionContext>[]>Load multiple documents from the Compendium pack using a provided query object. The available query options are
shown below.
Parametersquery: object = {}A database query used to retrieve documents from the underlying database
Returns Promise<Document<object, DocumentConstructionContext>[]>The retrieved Document instances
Example: Get Documents that match the given value only.await pack.getDocuments({ type: "weapon" });
Copy

Example: Get all Documents that do not have the given value.await pack.getDocuments({ type__ne: "weapon" });
Copy

Example: Get several Documents by their IDs.await pack.getDocuments({ _id__in: arrayOfIds });
Copy

Example: Get Documents by their sub-types.await pack.getDocuments({ type__in: ["weapon", "armor"] });
Copy
- query: object = {}A database query used to retrieve documents from the underlying database

Load multiple documents from the Compendium pack using a provided query object. The available query options are
shown below.


#### Parameters

- query: object = {}A database query used to retrieve documents from the underlying database

A database query used to retrieve documents from the underlying database


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

The retrieved Document instances


#### Example: Get Documents that match the given value only.

```javascript
await pack.getDocuments({ type: "weapon" });
Copy
```

`await pack.getDocuments({ type: "weapon" });`
#### Example: Get all Documents that do not have the given value.

```javascript
await pack.getDocuments({ type__ne: "weapon" });
Copy
```

`await pack.getDocuments({ type__ne: "weapon" });`
#### Example: Get several Documents by their IDs.

```javascript
await pack.getDocuments({ _id__in: arrayOfIds });
Copy
```

`await pack.getDocuments({ _id__in: arrayOfIds });`
#### Example: Get Documents by their sub-types.

```javascript
await pack.getDocuments({ type__in: ["weapon", "armor"] });
Copy
```

`await pack.getDocuments({ type__in: ["weapon", "armor"] });`
### getIndex

- getIndex(options?: { fields?: string[] }): Promise<Collection>Load the Compendium index and cache it as the keys and values of the Collection.
ParametersOptionaloptions: { fields?: string[] } = {}Options which customize how the index is created
Optionalfields?: string[]An array of fields to return as part of the index
Returns Promise<Collection>
- Optionaloptions: { fields?: string[] } = {}Options which customize how the index is created
Optionalfields?: string[]An array of fields to return as part of the index
- Optionalfields?: string[]An array of fields to return as part of the index

Load the Compendium index and cache it as the keys and values of the Collection.


#### Parameters

- Optionaloptions: { fields?: string[] } = {}Options which customize how the index is created
Optionalfields?: string[]An array of fields to return as part of the index
- Optionalfields?: string[]An array of fields to return as part of the index

`Optional`Options which customize how the index is created

- Optionalfields?: string[]An array of fields to return as part of the index


##### Optionalfields?: string[]

`Optional`An array of fields to return as part of the index


#### Returns Promise<Collection>


### getInvalid

- getInvalid(    id: string,    options?: { strict?: boolean },): void | Document<object, DocumentConstructionContext>Obtain a temporary Document instance for a document id which currently has invalid source data.
Parametersid: stringA document ID with invalid source data.
Optionaloptions: { strict?: boolean } = {}Additional options to configure retrieval.
Optionalstrict?: booleanThrow an Error if the requested ID is not in the set of invalid IDs for
this collection.
Returns void | Document<object, DocumentConstructionContext>An in-memory instance for the invalid Document
ThrowsIf strict is true and the requested ID is not in the set of invalid IDs
for this collection.
Inherited from DocumentCollection.getInvalid
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

Inherited from DocumentCollection.getInvalid


### getName

- getName(name: string, options?: { strict?: boolean }): anyGet an entry from the Collection by name.
Use of this method assumes that the objects stored in the collection have a "name" attribute.
Parametersname: stringThe name of the entry to retrieve
Optionaloptions: { strict?: boolean } = {}Additional options that affect how entries are retrieved
Optionalstrict?: booleanThrow an Error if the requested name does not exist. Default false.
Returns anyThe retrieved entry value, if one was found, otherwise undefined
Example: Get an element from the Collection by name (if applicable)let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);c.getName("Alfred"); // "Alfred"c.getName("D"); // undefinedc.getName("D", {strict: true}); // throws Error
Copy

Inherited from DocumentCollection.getName
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

`let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);c.getName("Alfred"); // "Alfred"c.getName("D"); // undefinedc.getName("D", {strict: true}); // throws Error`Inherited from DocumentCollection.getName


### getUserLevel

- getUserLevel(user?: User): numberGet the ownership level that a User has for this Compendium pack.
Parametersuser: User = game.userThe user being tested
Returns numberThe ownership level in CONST.DOCUMENT_OWNERSHIP_LEVELS
- user: User = game.userThe user being tested

Get the ownership level that a User has for this Compendium pack.


#### Parameters

- user: User = game.userThe user being tested

The user being tested


#### Returns number

The ownership level in CONST.DOCUMENT_OWNERSHIP_LEVELS


### getUuid

- getUuid(id: string): stringGenerate a UUID for a given primary document ID within this Compendium pack
Parametersid: stringThe document ID to generate a UUID for
Returns stringThe generated UUID, in the form of "Compendium..."
- id: stringThe document ID to generate a UUID for

Generate a UUID for a given primary document ID within this Compendium pack


#### Parameters

- id: stringThe document ID to generate a UUID for

The document ID to generate a UUID for


#### Returns string

The generated UUID, in the form of "Compendium..."


### importAll

- importAll(    options?: { folderId?: null | string; folderName?: string },): Promise<Document<object, DocumentConstructionContext>[]>Fully import the contents of a Compendium pack into a World folder.
ParametersOptionaloptions: { folderId?: null | string; folderName?: string } = {}Options which modify the import operation. Additional options are forwarded to
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.createDocuments
OptionalfolderId?: null | stringAn existing Folder _id to use.
OptionalfolderName?: stringA new Folder name to create.
Returns Promise<Document<object, DocumentConstructionContext>[]>The imported Documents, now existing within the World
- Optionaloptions: { folderId?: null | string; folderName?: string } = {}Options which modify the import operation. Additional options are forwarded to
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.createDocuments
OptionalfolderId?: null | stringAn existing Folder _id to use.
OptionalfolderName?: stringA new Folder name to create.
- OptionalfolderId?: null | stringAn existing Folder _id to use.
- OptionalfolderName?: stringA new Folder name to create.

Fully import the contents of a Compendium pack into a World folder.


#### Parameters

- Optionaloptions: { folderId?: null | string; folderName?: string } = {}Options which modify the import operation. Additional options are forwarded to
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.createDocuments
OptionalfolderId?: null | stringAn existing Folder _id to use.
OptionalfolderName?: stringA new Folder name to create.
- OptionalfolderId?: null | stringAn existing Folder _id to use.
- OptionalfolderName?: stringA new Folder name to create.

`Optional`Options which modify the import operation. Additional options are forwarded to
foundry.documents.abstract.WorldCollection#fromCompendium and
foundry.abstract.Document.createDocuments

- OptionalfolderId?: null | stringAn existing Folder _id to use.
- OptionalfolderName?: stringA new Folder name to create.


##### OptionalfolderId?: null | string

`Optional`An existing Folder _id to use.


##### OptionalfolderName?: string

`Optional`A new Folder name to create.


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

The imported Documents, now existing within the World


### importDialog

- importDialog(    options?: object,): Promise<null | boolean | Document<object, DocumentConstructionContext>[]>Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.
ParametersOptionaloptions: object = {}Additional options passed to the DialogV2.confirm method
Returns Promise<null | boolean | Document<object, DocumentConstructionContext>[]>A promise which resolves in the following ways: an array of imported
Documents if the "yes" button was pressed, false if the "no" button was pressed, or
null if the dialog was closed without making a choice.
- Optionaloptions: object = {}Additional options passed to the DialogV2.confirm method

Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.


#### Parameters

- Optionaloptions: object = {}Additional options passed to the DialogV2.confirm method

`Optional`Additional options passed to the DialogV2.confirm method


#### Returns Promise<null | boolean | Document<object, DocumentConstructionContext>[]>

A promise which resolves in the following ways: an array of imported
Documents if the "yes" button was pressed, false if the "no" button was pressed, or
null if the dialog was closed without making a choice.


### importDocument

- importDocument(    document: Document<object, DocumentConstructionContext>,    options?: object,): Promise<Document<object, DocumentConstructionContext>>Import a Document into this Compendium Collection.
Parametersdocument: Document<object, DocumentConstructionContext>The existing Document you wish to import
Optionaloptions: object = {}Additional options which modify how the data is imported.
See ClientDocumentMixin#toCompendium.
Returns Promise<Document<object, DocumentConstructionContext>>The imported Document instance
- document: Document<object, DocumentConstructionContext>The existing Document you wish to import
- Optionaloptions: object = {}Additional options which modify how the data is imported.
See ClientDocumentMixin#toCompendium.

Import a Document into this Compendium Collection.


#### Parameters

- document: Document<object, DocumentConstructionContext>The existing Document you wish to import
- Optionaloptions: object = {}Additional options which modify how the data is imported.
See ClientDocumentMixin#toCompendium.

The existing Document you wish to import

`Optional`Additional options which modify how the data is imported.
See ClientDocumentMixin#toCompendium.


#### Returns Promise<Document<object, DocumentConstructionContext>>

The imported Document instance


### importFolder

- importFolder(    folder: documents.Folder,    options?: { importParents?: boolean },): Promise<void>Import a Folder into this Compendium Collection.
Parametersfolder: documents.FolderThe existing Folder you wish to import
Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
Returns Promise<void>
- folder: documents.FolderThe existing Folder you wish to import
- Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.

Import a Folder into this Compendium Collection.


#### Parameters

- folder: documents.FolderThe existing Folder you wish to import
- Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.

The existing Folder you wish to import

`Optional`Additional options which modify how the data is imported.

- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.


##### OptionalimportParents?: boolean

`Optional`Import any parent folders which are not already present in the
Compendium.


#### Returns Promise<void>


### importFolders

- importFolders(    folders: documents.Folder[],    options?: { importParents?: boolean },): Promise<void>Import an array of Folders into this Compendium Collection.
Parametersfolders: documents.Folder[]The existing Folders you wish to import
Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
Returns Promise<void>
- folders: documents.Folder[]The existing Folders you wish to import
- Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.

Import an array of Folders into this Compendium Collection.


#### Parameters

- folders: documents.Folder[]The existing Folders you wish to import
- Optionaloptions: { importParents?: boolean } = {}Additional options which modify how the data is imported.
OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.
- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.

The existing Folders you wish to import

`Optional`Additional options which modify how the data is imported.

- OptionalimportParents?: booleanImport any parent folders which are not already present in the
Compendium.


##### OptionalimportParents?: boolean

`Optional`Import any parent folders which are not already present in the
Compendium.


#### Returns Promise<void>


### indexDocument

- indexDocument(document: Document<object, DocumentConstructionContext>): voidAdd a Document to the index, capturing its relevant index attributes
Parametersdocument: Document<object, DocumentConstructionContext>The document to index
Returns void
- document: Document<object, DocumentConstructionContext>The document to index

Add a Document to the index, capturing its relevant index attributes


#### Parameters

- document: Document<object, DocumentConstructionContext>The document to index

The document to index


#### Returns void


### map

- map(transformer: (arg0: any, arg1: number, arg2: Collection) => any): any[]Transform each element of the Collection into a new form, returning an Array of transformed values
Parameterstransformer: (arg0: any, arg1: number, arg2: Collection) => anyA transformation function applied to each entry value.
Positional arguments are the value, the index of iteration, and the collection being mapped.
Returns any[]An Array of transformed values
Inherited from DocumentCollection.map
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

Inherited from DocumentCollection.map


### migrate

- migrate(): Promise<CompendiumCollection>Migrate a compendium pack.
This operation re-saves all documents within the compendium pack to disk, applying the current data model.
If the document type has system data, the latest system data template will also be applied to all documents.
Returns Promise<CompendiumCollection>

Migrate a compendium pack.
This operation re-saves all documents within the compendium pack to disk, applying the current data model.
If the document type has system data, the latest system data template will also be applied to all documents.


#### Returns Promise<CompendiumCollection>


### reduce

- reduce(    reducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => any,    initial: any,): anyReduce the Collection by applying an evaluator function and accumulating entries
Parametersreducer: (arg0: any, arg1: any, arg2: number, arg3: Collection) => anyA reducer function applied to each entry value. Positional
arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
initial: anyAn initial value which accumulates with each iteration
Returns anyThe accumulated result
SeeExample: Reduce a collection to an array of transformed valueslet c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);let letters = c.reduce((s, l) => {  return s + l;}, ""); // "ABC"
Copy

Inherited from DocumentCollection.reduce
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

`let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);let letters = c.reduce((s, l) => {  return s + l;}, ""); // "ABC"`Inherited from DocumentCollection.reduce


### render

- render(force: any, options: any): voidRender any Applications associated with this DocumentCollection.
Parametersforce: anyForce rendering
options: anyOptional options
Returns voidOverrides DocumentCollection.render
- force: anyForce rendering
- options: anyOptional options

Render any Applications associated with this DocumentCollection.


#### Parameters

- force: anyForce rendering
- options: anyOptional options

Force rendering

Optional options


#### Returns void

Overrides DocumentCollection.render


### search

- search(    search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },): object[] | Document<object, DocumentConstructionContext>[]Find all Documents which match a given search term using a full-text search against their indexed HTML fields
and their name. If filters are provided, results are filtered to only those that match the provided values.
Parameterssearch: { exclude?: string[]; filters?: FieldFilter[]; query?: string }An object configuring the search
Optionalexclude?: string[]An array of document IDs to exclude from search results
Optionalfilters?: FieldFilter[]An array of filters to apply
Optionalquery?: stringA case-insensitive search string
Returns object[] | Document<object, DocumentConstructionContext>[]Inherited from DocumentCollection.search
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

Inherited from DocumentCollection.search


### set

- set(id: any, document: any): voidParametersid: anydocument: anyReturns voidInherit DocOverrides DocumentCollection.set
- id: any
- document: any


#### Parameters

- id: any
- document: any


#### Returns void


#### Inherit Doc

Overrides DocumentCollection.set


### setFolder

- setFolder(folder: null | string | documents.Folder): Promise<void>Assign this CompendiumCollection to be organized within a specific Folder.
Parametersfolder: null | string | documents.FolderThe desired Folder within the World or null to clear the folder
Returns Promise<void>A promise which resolves once the transaction is complete
- folder: null | string | documents.FolderThe desired Folder within the World or null to clear the folder

Assign this CompendiumCollection to be organized within a specific Folder.


#### Parameters

- folder: null | string | documents.FolderThe desired Folder within the World or null to clear the folder

The desired Folder within the World or null to clear the folder


#### Returns Promise<void>

A promise which resolves once the transaction is complete


### some

- some(condition: (arg0: any, arg1: number, arg2: Collection) => boolean): booleanTest whether a condition is met by some entry in the Collection.
Parameterscondition: (arg0: any, arg1: number, arg2: Collection) => booleanThe functional condition to test. Positional
arguments are the value, the index of iteration, and the collection being tested.
Returns booleanWas the test condition passed by at least one entry?
SeeInherited from DocumentCollection.some
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

Inherited from DocumentCollection.some


### testUserPermission

- testUserPermission(    user: BaseUser,    permission: string | number,    options?: { exact?: boolean },): booleanTest whether a certain User has a requested permission level (or greater) over the Compendium pack
Parametersuser: BaseUserThe User being tested
permission: string | numberThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
Returns booleanDoes the user have this permission level over the Compendium pack?
- user: BaseUserThe User being tested
- permission: string | numberThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
- options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
- Optionalexact?: booleanRequire the exact permission level requested?

Test whether a certain User has a requested permission level (or greater) over the Compendium pack


#### Parameters

- user: BaseUserThe User being tested
- permission: string | numberThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
- options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
- Optionalexact?: booleanRequire the exact permission level requested?

The User being tested

The permission level from DOCUMENT_OWNERSHIP_LEVELS to test

Additional options involved in the permission test

- Optionalexact?: booleanRequire the exact permission level requested?


##### Optionalexact?: boolean

`Optional`Require the exact permission level requested?


#### Returns boolean

Does the user have this permission level over the Compendium pack?


### toJSON

- toJSON(): object[]Convert the Collection to a primitive array of its contents.
Returns object[]An array of contained values
Inherited from DocumentCollection.toJSON

Convert the Collection to a primitive array of its contents.


#### Returns object[]

An array of contained values

Inherited from DocumentCollection.toJSON


### updateAll

- updateAll(    transformation: any,    condition?: null,    options?: {},): Promise<Document<object, DocumentConstructionContext>[]>Update all objects in this DocumentCollection with a provided transformation.
Conditionally filter to only apply to Entities which match a certain condition.
Parameterstransformation: anyAn object of data or function to apply to all matched objects
condition: null = nullA function which tests whether to target each object
options: {} = {}Additional options passed to Document.updateDocuments
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated data once the operation is complete
Overrides DocumentCollection.updateAll
- transformation: anyAn object of data or function to apply to all matched objects
- condition: null = nullA function which tests whether to target each object
- options: {} = {}Additional options passed to Document.updateDocuments

Update all objects in this DocumentCollection with a provided transformation.
Conditionally filter to only apply to Entities which match a certain condition.


#### Parameters

- transformation: anyAn object of data or function to apply to all matched objects
- condition: null = nullA function which tests whether to target each object
- options: {} = {}Additional options passed to Document.updateDocuments

An object of data or function to apply to all matched objects

A function which tests whether to target each object

Additional options passed to Document.updateDocuments


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of updated data once the operation is complete

Overrides DocumentCollection.updateAll


### Protected_initialize

`Protected`- _initialize(): voidProtectedInitialize the DocumentCollection by constructing any initially provided Document instances
Returns voidInherited from DocumentCollection._initialize

`Protected`Initialize the DocumentCollection by constructing any initially provided Document instances


#### Returns void

Inherited from DocumentCollection._initialize


### Static_activateSocketListeners

`Static`- _activateSocketListeners(socket: Socket): voidInternalActivate the Socket event listeners used to receive responses to compendium management events.
Parameterssocket: SocketThe active game socket.
Returns void
- socket: SocketThe active game socket.

`Internal`Activate the Socket event listeners used to receive responses to compendium management events.


#### Parameters

- socket: SocketThe active game socket.

The active game socket.


#### Returns void


### Static_onConfigure

`Static`- _onConfigure(config: WorldCompendiumConfiguration): voidHandle changes to the world compendium configuration setting.
Parametersconfig: WorldCompendiumConfigurationReturns void
- config: WorldCompendiumConfiguration

Handle changes to the world compendium configuration setting.


#### Parameters

- config: WorldCompendiumConfiguration


#### Returns void


### StaticcreateCompendium

`Static`- createCompendium(    metadata: object,    options?: object,): Promise<CompendiumCollection>Create a new Compendium Collection using provided metadata.
Parametersmetadata: objectThe compendium metadata used to create the new pack
options: object = {}Additional options which modify the Compendium creation request
Returns Promise<CompendiumCollection>
- metadata: objectThe compendium metadata used to create the new pack
- options: object = {}Additional options which modify the Compendium creation request

Create a new Compendium Collection using provided metadata.


#### Parameters

- metadata: objectThe compendium metadata used to create the new pack
- options: object = {}Additional options which modify the Compendium creation request

The compendium metadata used to create the new pack

Additional options which modify the Compendium creation request


#### Returns Promise<CompendiumCollection>


### StaticgetSearchableFields

`Static`- getSearchableFields(    documentName: string,    type?: string,): Record<string, SearchableField>Get the searchable fields for a given document or index, based on its data model
ParametersdocumentName: stringThe document name
Optionaltype: stringA document subtype
Returns Record<string, SearchableField>A record of searchable DataField definitions
Inherited from DocumentCollection.getSearchableFields
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

Inherited from DocumentCollection.getSearchableFields


### Settings

- Protected
- Inherited
- Internal


### On This Page

