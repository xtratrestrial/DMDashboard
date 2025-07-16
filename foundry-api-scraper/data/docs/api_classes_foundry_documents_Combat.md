# Combat | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.documents.Combat.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- documents
- Combat


# Class Combat

The client-side Combat document which extends the common BaseCombat model.


### Hook Events

- hookEvents.combatRound
- hookEvents.combatStart
- hookEvents.combatTurn
- hookEvents.combatTurnChange


#### Mixes

ClientDocumentMixin


#### See

- foundry.documents.collections.CombatEncounters: The world-level collection of Combat
documents
- Combatant: The Combatant embedded document which exists within a Combat
document
- foundry.applications.sidebar.tabs.CombatTracker: The CombatTracker application
- foundry.applications.apps.CombatTrackerConfig: The CombatTracker configuration
application


#### Hierarchy (View Summary)

- BaseCombat<this>Combat
- Combat

- Combat


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Combat(    data?: Partial<CombatData>,    options?: DocumentConstructionContext,): documents.CombatParametersOptionaldata: Partial<CombatData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.
Returns documents.CombatInherited from BaseCombat.constructor
- Optionaldata: Partial<CombatData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.


#### Parameters

- Optionaldata: Partial<CombatData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.

`Optional`Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

`Optional`Context and data validation options which affects initial model construction.


#### Returns documents.Combat

Inherited from BaseCombat.constructor


## Properties


### _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from BaseCombat._source


### current

Record the current round, turn, and tokenId to understand changes in the encounter state


### debounceSetup

Debounce changes to the composition of the Combat encounter to de-duplicate multiple concurrent Combatant changes.
If this is the currently viewed encounter, re-render the CombatTracker application.


### parent

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from BaseCombat.parent


### previous

Track the previous round, turn, and tokenId to understand changes in the encounter state


### turns

Track the sorted turn order of this combat encounter


### Static Internal_schema

`Static``Internal`The defined and cached Data Schema for all instances of this DataModel.

Inherited from BaseCombat._schema


### StaticCONFIG_SETTING

`Static`The configuration setting used to record Combat preferences


### StaticLOCALIZATION_PREFIXES

`Static`Inherited from BaseCombat.LOCALIZATION_PREFIXES


### Staticmetadata

`Static`Default metadata which applies to each instance of this Document type.

Inherited from BaseCombat.metadata


## Accessors


### combatant

- get combatant(): null | documents.CombatantGet the Combatant who has the current turn.
Returns null | documents.Combatant

Get the Combatant who has the current turn.


#### Returns null | documents.Combatant


### Abstractcompendium

`Abstract`- get compendium(): anyA reference to the Compendium Collection containing this Document, if any, and otherwise null.
Returns anyInherited from ClientDocumentMixin(BaseCombat).compendium

A reference to the Compendium Collection containing this Document, if any, and otherwise null.


#### Returns any

Inherited from ClientDocumentMixin(BaseCombat).compendium


### id

- get id(): null | stringThe canonical identifier for this Document.
Returns null | stringInherited from ClientDocumentMixin(BaseCombat).id

The canonical identifier for this Document.


#### Returns null | string

Inherited from ClientDocumentMixin(BaseCombat).id


### inCompendium

- get inCompendium(): booleanIs this document in a compendium?
Returns booleanInherited from ClientDocumentMixin(BaseCombat).inCompendium

Is this document in a compendium?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseCombat).inCompendium


### invalid

- get invalid(): booleanIs the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.
Returns booleanInherited from ClientDocumentMixin(BaseCombat).invalid

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.


#### Returns boolean

Inherited from ClientDocumentMixin(BaseCombat).invalid


### isActive

- get isActive(): booleanIs this combat active in the current scene?
Returns boolean

Is this combat active in the current scene?


#### Returns boolean


### isEmbedded

- get isEmbedded(): booleanIs this document embedded within a parent document?
Returns booleanInherited from ClientDocumentMixin(BaseCombat).isEmbedded

Is this document embedded within a parent document?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseCombat).isEmbedded


### nextCombatant

- get nextCombatant(): documents.CombatantGet the Combatant who has the next turn.
Returns documents.Combatant

Get the Combatant who has the next turn.


#### Returns documents.Combatant


### schema

- get schema(): SchemaFieldDefine the data schema for this document instance.
Returns SchemaFieldInherited from ClientDocumentMixin(BaseCombat).schema

Define the data schema for this document instance.


#### Returns SchemaField

Inherited from ClientDocumentMixin(BaseCombat).schema


### settings

- get settings(): objectReturn the object of settings which modify the Combat Tracker behavior
Returns object

Return the object of settings which modify the Combat Tracker behavior


#### Returns object


### started

- get started(): booleanHas this combat encounter been started?
Returns boolean

Has this combat encounter been started?


#### Returns boolean


### uuid

- get uuid(): stringA Universally Unique Identifier (uuid) for this Document instance.
Returns stringInherited from ClientDocumentMixin(BaseCombat).uuid

A Universally Unique Identifier (uuid) for this Document instance.


#### Returns string

Inherited from ClientDocumentMixin(BaseCombat).uuid


### validationFailures

- get validationFailures(): {    fields: null    | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}An array of validation failure instances which may have occurred when this instance was last validated.
Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}Inherited from ClientDocumentMixin(BaseCombat).validationFailures

An array of validation failure instances which may have occurred when this instance was last validated.


#### Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}

Inherited from ClientDocumentMixin(BaseCombat).validationFailures


### visible

- get visible(): booleanReturns booleanInherit Doc


#### Returns boolean


#### Inherit Doc


### StaticbaseDocument

`Static`- get baseDocument(): typeof DocumentThe base document definition that this document class extends from.
Returns typeof DocumentInherited from ClientDocumentMixin(BaseCombat).baseDocument

The base document definition that this document class extends from.


#### Returns typeof Document

Inherited from ClientDocumentMixin(BaseCombat).baseDocument


### StaticcollectionName

`Static`- get collectionName(): stringThe named collection to which this Document belongs.
Returns stringInherited from ClientDocumentMixin(BaseCombat).collectionName

The named collection to which this Document belongs.


#### Returns string

Inherited from ClientDocumentMixin(BaseCombat).collectionName


### Staticdatabase

`Static`- get database(): abstract.DatabaseBackendThe database backend used to execute operations and handle results.
Returns abstract.DatabaseBackendInherited from ClientDocumentMixin(BaseCombat).database

The database backend used to execute operations and handle results.


#### Returns abstract.DatabaseBackend

Inherited from ClientDocumentMixin(BaseCombat).database


### StaticdocumentName

`Static`- get documentName(): stringThe canonical name of this Document type, for example "Actor".
Returns stringInherited from ClientDocumentMixin(BaseCombat).documentName

The canonical name of this Document type, for example "Actor".


#### Returns string

Inherited from ClientDocumentMixin(BaseCombat).documentName


### StatichasTypeData

`Static`- get hasTypeData(): booleanDoes this Document support additional subtypes?
Returns booleanInherited from ClientDocumentMixin(BaseCombat).hasTypeData

Does this Document support additional subtypes?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseCombat).hasTypeData


### Statichierarchy

`Static`- get hierarchy(): Readonly<Record<string, any>>The Embedded Document hierarchy for this Document.
Returns Readonly<Record<string, any>>Inherited from ClientDocumentMixin(BaseCombat).hierarchy

The Embedded Document hierarchy for this Document.


#### Returns Readonly<Record<string, any>>

Inherited from ClientDocumentMixin(BaseCombat).hierarchy


### Staticimplementation

`Static`- get implementation(): typeof DocumentReturn a reference to the configured subclass of this base Document type.
Returns typeof DocumentInherited from ClientDocumentMixin(BaseCombat).implementation

Return a reference to the configured subclass of this base Document type.


#### Returns typeof Document

Inherited from ClientDocumentMixin(BaseCombat).implementation


### Staticschema

`Static`- get schema(): SchemaFieldEnsure that all Document classes share the same schema of their base declaration.
Returns SchemaFieldInherited from ClientDocumentMixin(BaseCombat).schema

Ensure that all Document classes share the same schema of their base declaration.


#### Returns SchemaField

Inherited from ClientDocumentMixin(BaseCombat).schema


### StaticTYPES

`Static`- get TYPES(): string[]The allowed types which may exist for this Document class.
Returns string[]Inherited from ClientDocumentMixin(BaseCombat).TYPES

The allowed types which may exist for this Document class.


#### Returns string[]

Inherited from ClientDocumentMixin(BaseCombat).TYPES


## Methods


### _configure

- _configure(__namedParameters?: { pack?: null; parentCollection?: null }): voidParameters__namedParameters: { pack?: null; parentCollection?: null } = {}Returns voidInherited from BaseCombat._configure
- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Parameters

- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Returns void

Inherited from BaseCombat._configure


### _getParentCollection

- _getParentCollection(parentCollection?: null | string): null | stringInternalIdentify the collection in a parent Document that this Document belongs to, if any.
ParametersOptionalparentCollection: null | stringAn explicitly provided parent collection name.
Returns null | stringInherited from BaseCombat._getParentCollection
- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Internal`Identify the collection in a parent Document that this Document belongs to, if any.


#### Parameters

- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Optional`An explicitly provided parent collection name.


#### Returns null | string

Inherited from BaseCombat._getParentCollection


### _onCreate

- _onCreate(data: any, options: any, userId: any): voidPost-process a creation operation for a single Document instance. Post-operation events occur for all connected
clients.
Parametersdata: anyThe initial data object provided to the document creation request
options: anyAdditional options which modify the creation request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseCombat._onCreate
- data: anyThe initial data object provided to the document creation request
- options: anyAdditional options which modify the creation request
- userId: anyThe id of the User requesting the document update

Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
clients.


#### Parameters

- data: anyThe initial data object provided to the document creation request
- options: anyAdditional options which modify the creation request
- userId: anyThe id of the User requesting the document update

The initial data object provided to the document creation request

Additional options which modify the creation request

The id of the User requesting the document update


#### Returns void

Overrides BaseCombat._onCreate


### _onCreateDescendantDocuments

- _onCreateDescendantDocuments(    parent: any,    collection: any,    documents: any,    data: any,    options: any,    userId: any,): voidParametersparent: anycollection: anydocuments: anydata: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- documents: any
- data: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- documents: any
- data: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### _onDelete

- _onDelete(options: any, userId: any): voidPost-process a deletion operation for a single Document instance. Post-operation events occur for all connected
clients.
Parametersoptions: anyAdditional options which modify the deletion request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseCombat._onDelete
- options: anyAdditional options which modify the deletion request
- userId: anyThe id of the User requesting the document update

Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
clients.


#### Parameters

- options: anyAdditional options which modify the deletion request
- userId: anyThe id of the User requesting the document update

Additional options which modify the deletion request

The id of the User requesting the document update


#### Returns void

Overrides BaseCombat._onDelete


### _onDeleteDescendantDocuments

- _onDeleteDescendantDocuments(    parent: any,    collection: any,    documents: any,    ids: any,    options: any,    userId: any,): voidParametersparent: anycollection: anydocuments: anyids: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- documents: any
- ids: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- documents: any
- ids: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### _onUpdate

- _onUpdate(changed: any, options: any, userId: any): voidPost-process an update operation for a single Document instance. Post-operation events occur for all connected
clients.
Parameterschanged: anyThe differential data that was changed relative to the documents prior values
options: anyAdditional options which modify the update request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseCombat._onUpdate
- changed: anyThe differential data that was changed relative to the documents prior values
- options: anyAdditional options which modify the update request
- userId: anyThe id of the User requesting the document update

Post-process an update operation for a single Document instance. Post-operation events occur for all connected
clients.


#### Parameters

- changed: anyThe differential data that was changed relative to the documents prior values
- options: anyAdditional options which modify the update request
- userId: anyThe id of the User requesting the document update

The differential data that was changed relative to the documents prior values

Additional options which modify the update request

The id of the User requesting the document update


#### Returns void

Overrides BaseCombat._onUpdate


### _onUpdateDescendantDocuments

- _onUpdateDescendantDocuments(    parent: any,    collection: any,    documents: any,    changes: any,    options: any,    userId: any,): voidParametersparent: anycollection: anydocuments: anychanges: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- documents: any
- changes: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- documents: any
- changes: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### _preUpdate

- _preUpdate(changed: any, options: any, user: any): Promise<undefined | false>Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parameterschanged: anyThe candidate changes to the Document
options: anyAdditional options which modify the update request
user: anyThe User requesting the document update
Returns Promise<undefined | false>A return value of false indicates the update operation should be cancelled.
Inherited from BaseCombat._preUpdate
- changed: anyThe candidate changes to the Document
- options: anyAdditional options which modify the update request
- user: anyThe User requesting the document update

Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.


#### Parameters

- changed: anyThe candidate changes to the Document
- options: anyAdditional options which modify the update request
- user: anyThe User requesting the document update

The candidate changes to the Document

Additional options which modify the update request

The User requesting the document update


#### Returns Promise<undefined | false>

A return value of false indicates the update operation should be cancelled.

Inherited from BaseCombat._preUpdate


### activate

- activate(options?: Partial<DatabaseUpdateOperation>): Promise<documents.Combat>A convenience alias for updating this document to become active.
ParametersOptionaloptions: Partial<DatabaseUpdateOperation>Additional context to customize the update workflow
Returns Promise<documents.Combat>
- Optionaloptions: Partial<DatabaseUpdateOperation>Additional context to customize the update workflow

A convenience alias for updating this document to become active.


#### Parameters

- Optionaloptions: Partial<DatabaseUpdateOperation>Additional context to customize the update workflow

`Optional`Additional context to customize the update workflow


#### Returns Promise<documents.Combat>


### canUserModify

- canUserModify(user: BaseUser, action: string, data?: object): booleanTest whether a given User has permission to perform some action on this Document
Parametersuser: BaseUserThe User attempting modification
action: stringThe attempted action
Optionaldata: object = {}Data involved in the attempted action
Returns booleanDoes the User have permission?
Inherited from BaseCombat.canUserModify
- user: BaseUserThe User attempting modification
- action: stringThe attempted action
- Optionaldata: object = {}Data involved in the attempted action

Test whether a given User has permission to perform some action on this Document


#### Parameters

- user: BaseUserThe User attempting modification
- action: stringThe attempted action
- Optionaldata: object = {}Data involved in the attempted action

The User attempting modification

The attempted action

`Optional`Data involved in the attempted action


#### Returns boolean

Does the User have permission?

Inherited from BaseCombat.canUserModify


### clearMovementHistories

- clearMovementHistories(): Promise<void>Clear the movement history of all Tokens within this Combat.
Returns Promise<void>
- clearMovementHistories(combatants: Iterable<documents.Combatant>): Promise<void>Clear the movement history of the Combatants' Tokens.
Parameterscombatants: Iterable<documents.Combatant>The combatants whose movement history is cleared
Returns Promise<void>
- combatants: Iterable<documents.Combatant>The combatants whose movement history is cleared

Clear the movement history of all Tokens within this Combat.


#### Returns Promise<void>

Clear the movement history of the Combatants' Tokens.


#### Parameters

- combatants: Iterable<documents.Combatant>The combatants whose movement history is cleared

The combatants whose movement history is cleared


#### Returns Promise<void>


### clone

- clone(    data?: object,    context?: DataModelConstructionOptions & Pick<        DataModelValidationOptions,        "strict"        | "fallback"        | "dropInvalidEmbedded",    > & _DocumentConstructionContext & DocumentCloneOptions,):    | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.
ParametersOptionaldata: object = {}Additional data which overrides current document data at the time of creation
Optionalcontext: DataModelConstructionOptions & Pick<    DataModelValidationOptions,    "strict"    | "fallback"    | "dropInvalidEmbedded",> & _DocumentConstructionContext & DocumentCloneOptions = {}Additional context options passed to the create method
Returns     | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>The cloned Document instance
Inherited from BaseCombat.clone
- Optionaldata: object = {}Additional data which overrides current document data at the time of creation
- Optionalcontext: DataModelConstructionOptions & Pick<    DataModelValidationOptions,    "strict"    | "fallback"    | "dropInvalidEmbedded",> & _DocumentConstructionContext & DocumentCloneOptions = {}Additional context options passed to the create method

Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.


#### Parameters

- Optionaldata: object = {}Additional data which overrides current document data at the time of creation
- Optionalcontext: DataModelConstructionOptions & Pick<    DataModelValidationOptions,    "strict"    | "fallback"    | "dropInvalidEmbedded",> & _DocumentConstructionContext & DocumentCloneOptions = {}Additional context options passed to the create method

`Optional`Additional data which overrides current document data at the time of creation

`Optional`Additional context options passed to the create method


#### Returns     | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>

The cloned Document instance

Inherited from BaseCombat.clone


### createEmbeddedDocuments

- createEmbeddedDocuments(    embeddedName: string,    data?: object[],    operation?: DatabaseCreateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Create multiple embedded Document instances within this parent Document using provided input data.
ParametersembeddedName: stringThe name of the embedded Document type
data: object[] = []An array of data objects used to create multiple documents
Optionaloperation: DatabaseCreateOperation = {}Parameters of the database creation workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of created Document instances
SeeDocument.createDocuments
Inherited from BaseCombat.createEmbeddedDocuments
- embeddedName: stringThe name of the embedded Document type
- data: object[] = []An array of data objects used to create multiple documents
- Optionaloperation: DatabaseCreateOperation = {}Parameters of the database creation workflow

Create multiple embedded Document instances within this parent Document using provided input data.


#### Parameters

- embeddedName: stringThe name of the embedded Document type
- data: object[] = []An array of data objects used to create multiple documents
- Optionaloperation: DatabaseCreateOperation = {}Parameters of the database creation workflow

The name of the embedded Document type

An array of data objects used to create multiple documents

`Optional`Parameters of the database creation workflow


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of created Document instances


#### See

Document.createDocuments

Inherited from BaseCombat.createEmbeddedDocuments


### delete

- delete(    operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Delete this Document, removing it from the database.
ParametersOptionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The deleted Document instance, or undefined if not deleted
SeeDocument.deleteDocuments
Inherited from BaseCombat.delete
- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

Delete this Document, removing it from the database.


#### Parameters

- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

`Optional`Parameters of the deletion operation


#### Returns Promise<undefined | Document<object, DocumentConstructionContext>>

The deleted Document instance, or undefined if not deleted


#### See

Document.deleteDocuments

Inherited from BaseCombat.delete


### deleteEmbeddedDocuments

- deleteEmbeddedDocuments(    embeddedName: string,    ids: string[],    operation?: DatabaseDeleteOperation,): Promise<Document<object, DocumentConstructionContext>[]>Delete multiple embedded Document instances within a parent Document using provided string ids.
ParametersembeddedName: stringThe name of the embedded Document type
ids: string[]An array of string ids for each Document to be deleted
Optionaloperation: DatabaseDeleteOperation = {}Parameters of the database deletion workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of deleted Document instances
SeeDocument.deleteDocuments
Inherited from BaseCombat.deleteEmbeddedDocuments
- embeddedName: stringThe name of the embedded Document type
- ids: string[]An array of string ids for each Document to be deleted
- Optionaloperation: DatabaseDeleteOperation = {}Parameters of the database deletion workflow

Delete multiple embedded Document instances within a parent Document using provided string ids.


#### Parameters

- embeddedName: stringThe name of the embedded Document type
- ids: string[]An array of string ids for each Document to be deleted
- Optionaloperation: DatabaseDeleteOperation = {}Parameters of the database deletion workflow

The name of the embedded Document type

An array of string ids for each Document to be deleted

`Optional`Parameters of the database deletion workflow


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of deleted Document instances


#### See

Document.deleteDocuments

Inherited from BaseCombat.deleteEmbeddedDocuments


### endCombat

- endCombat(): Promise<documents.Combat>Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
Returns Promise<documents.Combat>

Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker


#### Returns Promise<documents.Combat>


### getCombatantsByActor

- getCombatantsByActor(actor: string | documents.Actor): documents.Combatant[]Get a Combatant that represents the given Actor or Actor ID.
Parametersactor: string | documents.ActorAn Actor ID or an Actor instance
Returns documents.Combatant[]
- actor: string | documents.ActorAn Actor ID or an Actor instance

Get a Combatant that represents the given Actor or Actor ID.


#### Parameters

- actor: string | documents.ActorAn Actor ID or an Actor instance

An Actor ID or an Actor instance


#### Returns documents.Combatant[]


### getCombatantsByToken

- getCombatantsByToken(token: string | TokenDocument): documents.Combatant[]Get a Combatant using its Token id
Parameterstoken: string | TokenDocumentA Token ID or a TokenDocument instance
Returns documents.Combatant[]An array of Combatants which represent the Token
- token: string | TokenDocumentA Token ID or a TokenDocument instance

Get a Combatant using its Token id


#### Parameters

- token: string | TokenDocumentA Token ID or a TokenDocument instance

A Token ID or a TokenDocument instance


#### Returns documents.Combatant[]

An array of Combatants which represent the Token


### getEmbeddedCollection

- getEmbeddedCollection(embeddedName: string): DocumentCollectionObtain a reference to the Array of source data within the data object for a certain embedded Document name
ParametersembeddedName: stringThe name of the embedded Document type
Returns DocumentCollectionThe Collection instance of embedded Documents of the requested type
Inherited from BaseCombat.getEmbeddedCollection
- embeddedName: stringThe name of the embedded Document type

Obtain a reference to the Array of source data within the data object for a certain embedded Document name


#### Parameters

- embeddedName: stringThe name of the embedded Document type

The name of the embedded Document type


#### Returns DocumentCollection

The Collection instance of embedded Documents of the requested type

Inherited from BaseCombat.getEmbeddedCollection


### getEmbeddedDocument

- getEmbeddedDocument(    embeddedName: string,    id: string,    options?: { invalid?: boolean; strict?: boolean },): Document<object, DocumentConstructionContext>Get an embedded document by its id from a named collection in the parent document.
ParametersembeddedName: stringThe name of the embedded Document type
id: stringThe id of the child document to retrieve
Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options which modify how embedded documents are retrieved
Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get
Returns Document<object, DocumentConstructionContext>The retrieved embedded Document instance, or undefined
ThrowsIf the embedded collection does not exist, or if strict is true and the Embedded Document could not be
found.
Inherited from BaseCombat.getEmbeddedDocument
- embeddedName: stringThe name of the embedded Document type
- id: stringThe id of the child document to retrieve
- Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options which modify how embedded documents are retrieved
Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get
- Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
- Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get

Get an embedded document by its id from a named collection in the parent document.


#### Parameters

- embeddedName: stringThe name of the embedded Document type
- id: stringThe id of the child document to retrieve
- Optionaloptions: { invalid?: boolean; strict?: boolean } = {}Additional options which modify how embedded documents are retrieved
Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get
- Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
- Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get

The name of the embedded Document type

The id of the child document to retrieve

`Optional`Additional options which modify how embedded documents are retrieved

- Optionalinvalid?: booleanAllow retrieving an invalid Embedded Document.
- Optionalstrict?: booleanThrow an Error if the requested id does not exist. See Collection#get


##### Optionalinvalid?: boolean

`Optional`Allow retrieving an invalid Embedded Document.


##### Optionalstrict?: boolean

`Optional`Throw an Error if the requested id does not exist. See Collection#get


#### Returns Document<object, DocumentConstructionContext>

The retrieved embedded Document instance, or undefined


#### Throws

If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
found.

Inherited from BaseCombat.getEmbeddedDocument


### getFlag

- getFlag(scope: string, key: string): anyGet the value of a "flag" for this document
See the setFlag method for more details on flags
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns anyThe flag value
Inherited from BaseCombat.getFlag
- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key

Get the value of a "flag" for this document
See the setFlag method for more details on flags


#### Parameters

- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key

The flag scope which namespaces the key

The flag key


#### Returns any

The flag value

Inherited from BaseCombat.getFlag


### getTimeDelta

- getTimeDelta(    fromRound: number,    fromTurn: null | number,    toRound: number,    toTurn: null | number,): numberCalculate the time delta between two turns.
ParametersfromRound: numberThe from-round
fromTurn: null | numberThe from-turn
toRound: numberThe to-round
toTurn: null | numberThe to-turn
Returns numberThe time delta
- fromRound: numberThe from-round
- fromTurn: null | numberThe from-turn
- toRound: numberThe to-round
- toTurn: null | numberThe to-turn

Calculate the time delta between two turns.


#### Parameters

- fromRound: numberThe from-round
- fromTurn: null | numberThe from-turn
- toRound: numberThe to-round
- toTurn: null | numberThe to-turn

The from-round

The from-turn

The to-round

The to-turn


#### Returns number

The time delta


### getUserLevel

- getUserLevel(user?: BaseUser): DocumentOwnershipNumberGet the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.
This method returns the value recorded in Document ownership, regardless of the User's role, for example a
GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.
To test whether a user has a certain capability over the document, testUserPermission should be used.
ParametersOptionaluser: BaseUserThe User being tested
Returns DocumentOwnershipNumberA numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS
Inherited from BaseCombat.getUserLevel
- Optionaluser: BaseUserThe User being tested

Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

This method returns the value recorded in Document ownership, regardless of the User's role, for example a
GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

To test whether a user has a certain capability over the document, testUserPermission should be used.


#### Parameters

- Optionaluser: BaseUserThe User being tested

`Optional`The User being tested


#### Returns DocumentOwnershipNumber

A numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS

Inherited from BaseCombat.getUserLevel


### migrateSystemData

- migrateSystemData(): objectFor Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.
Returns objectThe migrated system data object
Inherited from BaseCombat.migrateSystemData

For Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.


#### Returns object

The migrated system data object

Inherited from BaseCombat.migrateSystemData


### nextRound

- nextRound(): Promise<documents.Combat>Advance the combat to the next round
Returns Promise<documents.Combat>

Advance the combat to the next round


#### Returns Promise<documents.Combat>


### nextTurn

- nextTurn(): Promise<documents.Combat>Advance the combat to the next turn
Returns Promise<documents.Combat>

Advance the combat to the next turn


#### Returns Promise<documents.Combat>


### prepareDerivedData

- prepareDerivedData(): voidReturns void


#### Returns void


### previousRound

- previousRound(): Promise<documents.Combat>Rewind the combat to the previous round
Returns Promise<documents.Combat>

Rewind the combat to the previous round


#### Returns Promise<documents.Combat>


### previousTurn

- previousTurn(): Promise<documents.Combat>Rewind the combat to the previous turn
Returns Promise<documents.Combat>

Rewind the combat to the previous turn


#### Returns Promise<documents.Combat>


### reset

- reset(): voidReset the state of this data instance back to mirror the contained source data, erasing any changes.
Returns voidInherited from BaseCombat.reset

Reset the state of this data instance back to mirror the contained source data, erasing any changes.


#### Returns void

Inherited from BaseCombat.reset


### resetAll

- resetAll(options?: { updateTurn?: boolean }): Promise<documents.Combat>Reset all combatant initiative scores.
ParametersOptionaloptions: { updateTurn?: boolean } = {}Additional options
OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.
Returns Promise<documents.Combat>
- Optionaloptions: { updateTurn?: boolean } = {}Additional options
OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.
- OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.

Reset all combatant initiative scores.


#### Parameters

- Optionaloptions: { updateTurn?: boolean } = {}Additional options
OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.
- OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.

`Optional`Additional options

- OptionalupdateTurn?: booleanUpdate the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.


##### OptionalupdateTurn?: boolean

`Optional`Update the Combat turn after resetting initiative scores to
keep the turn on the same Combatant.


#### Returns Promise<documents.Combat>


### rollAll

- rollAll(options?: object): Promise<documents.Combat>Roll initiative for all combatants which have not already rolled
ParametersOptionaloptions: objectAdditional options forwarded to the Combat.rollInitiative method
Returns Promise<documents.Combat>
- Optionaloptions: objectAdditional options forwarded to the Combat.rollInitiative method

Roll initiative for all combatants which have not already rolled


#### Parameters

- Optionaloptions: objectAdditional options forwarded to the Combat.rollInitiative method

`Optional`Additional options forwarded to the Combat.rollInitiative method


#### Returns Promise<documents.Combat>


### rollInitiative

- rollInitiative(    ids: string | string[],    options?: {        formula?: null | string;        messageOptions?: object;        updateTurn?: boolean;    },): Promise<documents.Combat>Roll initiative for one or multiple Combatants within the Combat document
Parametersids: string | string[]A Combatant id or Array of ids for which to roll
Optionaloptions: { formula?: null | string; messageOptions?: object; updateTurn?: boolean } = {}Additional options which modify how initiative rolls are created or presented.
Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.
Returns Promise<documents.Combat>A promise which resolves to the updated Combat document once updates are complete.
- ids: string | string[]A Combatant id or Array of ids for which to roll
- Optionaloptions: { formula?: null | string; messageOptions?: object; updateTurn?: boolean } = {}Additional options which modify how initiative rolls are created or presented.
Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.
- Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
- OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
- OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.

Roll initiative for one or multiple Combatants within the Combat document


#### Parameters

- ids: string | string[]A Combatant id or Array of ids for which to roll
- Optionaloptions: { formula?: null | string; messageOptions?: object; updateTurn?: boolean } = {}Additional options which modify how initiative rolls are created or presented.
Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.
- Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
- OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
- OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.

A Combatant id or Array of ids for which to roll

`Optional`Additional options which modify how initiative rolls are created or presented.

- Optionalformula?: null | stringA non-default initiative formula to roll. Otherwise, the system
default is used.
- OptionalmessageOptions?: objectAdditional options with which to customize created Chat Messages
- OptionalupdateTurn?: booleanUpdate the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.


##### Optionalformula?: null | string

`Optional`A non-default initiative formula to roll. Otherwise, the system
default is used.


##### OptionalmessageOptions?: object

`Optional`Additional options with which to customize created Chat Messages


##### OptionalupdateTurn?: boolean

`Optional`Update the Combat turn after adding new initiative scores to
keep the turn on the same Combatant.


#### Returns Promise<documents.Combat>

A promise which resolves to the updated Combat document once updates are complete.


### rollNPC

- rollNPC(options?: object): Promise<documents.Combat>Roll initiative for all non-player actors who have not already rolled
ParametersOptionaloptions: object = {}Additional options forwarded to the Combat.rollInitiative method
Returns Promise<documents.Combat>
- Optionaloptions: object = {}Additional options forwarded to the Combat.rollInitiative method

Roll initiative for all non-player actors who have not already rolled


#### Parameters

- Optionaloptions: object = {}Additional options forwarded to the Combat.rollInitiative method

`Optional`Additional options forwarded to the Combat.rollInitiative method


#### Returns Promise<documents.Combat>


### setFlag

- setFlag(    scope: string,    key: string,    value: any,): Promise<Document<object, DocumentConstructionContext>>Assign a "flag" to this document.
Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
the core software, game systems, or user-created modules.
Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
Flags set by the core software use the "core" scope.
Flags set by game systems or modules should use the canonical name attribute for the module
Flags set by an individual world should "world" as the scope.
Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
value: anyThe flag value
Returns Promise<Document<object, DocumentConstructionContext>>A Promise resolving to the updated document
Inherited from BaseCombat.setFlag
- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key
- value: anyThe flag value

Assign a "flag" to this document.
Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
the core software, game systems, or user-created modules.

Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.

Flags set by the core software use the "core" scope.
Flags set by game systems or modules should use the canonical name attribute for the module
Flags set by an individual world should "world" as the scope.

Flag values can assume almost any data type. Setting a flag value to null will delete that flag.


#### Parameters

- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key
- value: anyThe flag value

The flag scope which namespaces the key

The flag key

The flag value


#### Returns Promise<Document<object, DocumentConstructionContext>>

A Promise resolving to the updated document

Inherited from BaseCombat.setFlag


### setInitiative

- setInitiative(id: string, value: number): Promise<void>Assign initiative for a single Combatant within the Combat encounter.
Update the Combat turn order to maintain the same combatant as the current turn.
Parametersid: stringThe combatant ID for which to set initiative
value: numberA specific initiative value to set
Returns Promise<void>
- id: stringThe combatant ID for which to set initiative
- value: numberA specific initiative value to set

Assign initiative for a single Combatant within the Combat encounter.
Update the Combat turn order to maintain the same combatant as the current turn.


#### Parameters

- id: stringThe combatant ID for which to set initiative
- value: numberA specific initiative value to set

The combatant ID for which to set initiative

A specific initiative value to set


#### Returns Promise<void>


### setupTurns

- setupTurns(): documents.Combatant[]Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
Returns documents.Combatant[]

Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.


#### Returns documents.Combatant[]


### startCombat

- startCombat(): Promise<documents.Combat>Begin the combat encounter, advancing to round 1 and turn 1
Returns Promise<documents.Combat>

Begin the combat encounter, advancing to round 1 and turn 1


#### Returns Promise<documents.Combat>


### testUserPermission

- testUserPermission(    user: BaseUser,    permission: DocumentOwnershipLevel,    options?: { exact?: boolean },): booleanTest whether a certain User has a requested permission level (or greater) over the Document
Parametersuser: BaseUserThe User being tested
permission: DocumentOwnershipLevelThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
Returns booleanDoes the user have this permission level over the Document?
Inherited from BaseCombat.testUserPermission
- user: BaseUserThe User being tested
- permission: DocumentOwnershipLevelThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
- options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
- Optionalexact?: booleanRequire the exact permission level requested?

Test whether a certain User has a requested permission level (or greater) over the Document


#### Parameters

- user: BaseUserThe User being tested
- permission: DocumentOwnershipLevelThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
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

Does the user have this permission level over the Document?

Inherited from BaseCombat.testUserPermission


### toggleSceneLink

- toggleSceneLink(): Promise<documents.Combat>Toggle whether this combat is linked to the scene or globally available.
Returns Promise<documents.Combat>

Toggle whether this combat is linked to the scene or globally available.


#### Returns Promise<documents.Combat>


### toJSON

- toJSON(): objectExtract the source data for the DataModel into a simple object format that can be serialized.
Returns objectThe document source data expressed as a plain object
Inherited from BaseCombat.toJSON

Extract the source data for the DataModel into a simple object format that can be serialized.


#### Returns object

The document source data expressed as a plain object

Inherited from BaseCombat.toJSON


### toObject

- toObject(source?: boolean): anyCopy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.
Parameterssource: boolean = trueDraw values from the underlying data source rather than transformed values
Returns anyThe extracted primitive object
Inherited from BaseCombat.toObject
- source: boolean = trueDraw values from the underlying data source rather than transformed values

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.


#### Parameters

- source: boolean = trueDraw values from the underlying data source rather than transformed values

Draw values from the underlying data source rather than transformed values


#### Returns any

The extracted primitive object

Inherited from BaseCombat.toObject


### traverseEmbeddedDocuments

- traverseEmbeddedDocuments(_parentPath?: string): Generator<any, void, any>Iterate over all embedded Documents that are hierarchical children of this Document.
ParametersOptional_parentPath: stringA parent field path already traversed
Returns Generator<any, void, any>YieldsInherited from BaseCombat.traverseEmbeddedDocuments
- Optional_parentPath: stringA parent field path already traversed

Iterate over all embedded Documents that are hierarchical children of this Document.


#### Parameters

- Optional_parentPath: stringA parent field path already traversed

`Optional`A parent field path already traversed


#### Returns Generator<any, void, any>


#### Yields

Inherited from BaseCombat.traverseEmbeddedDocuments


### unsetFlag

- unsetFlag(    scope: string,    key: string,): Promise<Document<object, DocumentConstructionContext>>Remove a flag assigned to the document
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns Promise<Document<object, DocumentConstructionContext>>The updated document instance
Inherited from BaseCombat.unsetFlag
- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key

Remove a flag assigned to the document


#### Parameters

- scope: stringThe flag scope which namespaces the key
- key: stringThe flag key

The flag scope which namespaces the key

The flag key


#### Returns Promise<Document<object, DocumentConstructionContext>>

The updated document instance

Inherited from BaseCombat.unsetFlag


### update

- update(    data?: object,    operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Update this Document using incremental data, saving it to the database.
ParametersOptionaldata: object = {}Differential update data which modifies the existing values of this document
Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the update operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The updated Document instance, or undefined not updated
SeeDocument.updateDocuments
Inherited from BaseCombat.update
- Optionaldata: object = {}Differential update data which modifies the existing values of this document
- Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the update operation

Update this Document using incremental data, saving it to the database.


#### Parameters

- Optionaldata: object = {}Differential update data which modifies the existing values of this document
- Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the update operation

`Optional`Differential update data which modifies the existing values of this document

`Optional`Parameters of the update operation


#### Returns Promise<undefined | Document<object, DocumentConstructionContext>>

The updated Document instance, or undefined not updated


#### See

Document.updateDocuments

Inherited from BaseCombat.update


### updateCombatantActors

- updateCombatantActors(): voidUpdate active effect durations for all actors present in this Combat encounter.
Returns void

Update active effect durations for all actors present in this Combat encounter.


#### Returns void


### updateEmbeddedDocuments

- updateEmbeddedDocuments(    embeddedName: string,    updates?: object[],    operation?: DatabaseUpdateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Update multiple embedded Document instances within a parent Document using provided differential data.
ParametersembeddedName: stringThe name of the embedded Document type
updates: object[] = []An array of differential data objects, each used to update a
single Document
Optionaloperation: DatabaseUpdateOperation = {}Parameters of the database update workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated Document instances
SeeDocument.updateDocuments
Inherited from BaseCombat.updateEmbeddedDocuments
- embeddedName: stringThe name of the embedded Document type
- updates: object[] = []An array of differential data objects, each used to update a
single Document
- Optionaloperation: DatabaseUpdateOperation = {}Parameters of the database update workflow

Update multiple embedded Document instances within a parent Document using provided differential data.


#### Parameters

- embeddedName: stringThe name of the embedded Document type
- updates: object[] = []An array of differential data objects, each used to update a
single Document
- Optionaloperation: DatabaseUpdateOperation = {}Parameters of the database update workflow

The name of the embedded Document type

An array of differential data objects, each used to update a
single Document

`Optional`Parameters of the database update workflow


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of updated Document instances


#### See

Document.updateDocuments

Inherited from BaseCombat.updateEmbeddedDocuments


### updateSource

- updateSource(changes?: object, options?: DataModelUpdateOptions): objectUpdate the DataModel locally by applying an object of changes to its source data.
The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
The provided changes argument is mutated in this process.
The source data is then re-initialized to apply those changes to the prepared data.
The method returns an object of differential changes which modified the original data.
Parameterschanges: object = {}New values which should be applied to the data model
options: DataModelUpdateOptions = {}Options which determine how the new data is merged
Returns objectAn object containing differential keys and values that were changed
ThrowsAn error if the requested data model changes were invalid
Inherited from BaseCombat.updateSource
- changes: object = {}New values which should be applied to the data model
- options: DataModelUpdateOptions = {}Options which determine how the new data is merged

Update the DataModel locally by applying an object of changes to its source data.
The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
The provided changes argument is mutated in this process.
The source data is then re-initialized to apply those changes to the prepared data.
The method returns an object of differential changes which modified the original data.


#### Parameters

- changes: object = {}New values which should be applied to the data model
- options: DataModelUpdateOptions = {}Options which determine how the new data is merged

New values which should be applied to the data model

Options which determine how the new data is merged


#### Returns object

An object containing differential keys and values that were changed


#### Throws

An error if the requested data model changes were invalid

Inherited from BaseCombat.updateSource


### validate

- validate(options?: DataModelValidationOptions): booleanValidate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.
Parametersoptions: DataModelValidationOptions = {}Options which modify how the model is validated
Returns booleanWhether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.
ThrowsAn error thrown if validation is strict and a failure occurs.
Inherited from BaseCombat.validate
- options: DataModelValidationOptions = {}Options which modify how the model is validated

Validate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.


#### Parameters

- options: DataModelValidationOptions = {}Options which modify how the model is validated

Options which modify how the model is validated


#### Returns boolean

Whether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.


#### Throws

An error thrown if validation is strict and a failure occurs.

Inherited from BaseCombat.validate


### Protected_canChangeRound

`Protected`- _canChangeRound(user: User): booleanProtectedCan a certain User change the Combat round?
Parametersuser: UserThe user attempting to change the round
Returns booleanIs the user allowed to change the round?
Inherited from BaseCombat._canChangeRound
- user: UserThe user attempting to change the round

`Protected`Can a certain User change the Combat round?


#### Parameters

- user: UserThe user attempting to change the round

The user attempting to change the round


#### Returns boolean

Is the user allowed to change the round?

Inherited from BaseCombat._canChangeRound


### Protected_canChangeTurn

`Protected`- _canChangeTurn(user: User): booleanProtectedCan a certain User change the Combat turn?
Parametersuser: UserThe user attempting to change the turn
Returns booleanIs the user allowed to change the turn?
Inherited from BaseCombat._canChangeTurn
- user: UserThe user attempting to change the turn

`Protected`Can a certain User change the Combat turn?


#### Parameters

- user: UserThe user attempting to change the turn

The user attempting to change the turn


#### Returns boolean

Is the user allowed to change the turn?

Inherited from BaseCombat._canChangeTurn


### Protected_clearMovementHistoryOnExit

`Protected`- _clearMovementHistoryOnExit(combatant: documents.Combatant): Promise<void>ProtectedCalled after Combat#_onExit and takes care of clearing the movement history of the
Combatant's Token.
This function is not called for Combatants that don't have a Token.
The default implementation clears the movement history always.
Parameterscombatant: documents.CombatantThe Combatant that exited the Combat
Returns Promise<void>
- combatant: documents.CombatantThe Combatant that exited the Combat

`Protected`Called after Combat#_onExit and takes care of clearing the movement history of the
Combatant's Token.
This function is not called for Combatants that don't have a Token.
The default implementation clears the movement history always.


#### Parameters

- combatant: documents.CombatantThe Combatant that exited the Combat

The Combatant that exited the Combat


#### Returns Promise<void>


### Protected_clearMovementHistoryOnStartTurn

`Protected`- _clearMovementHistoryOnStartTurn(    combatant: documents.Combatant,    context: CombatTurnEventContext,): Promise<void>ProtectedCalled after Combat#_onStartTurn and takes care of clearing the movement history of the
Combatant's Token.
This function is not called for Combatants that don't have a Token.
The default implementation clears the movement history always.
Parameterscombatant: documents.CombatantThe Combatant whose turn just started
context: CombatTurnEventContextThe context of the turn that just started
Returns Promise<void>
- combatant: documents.CombatantThe Combatant whose turn just started
- context: CombatTurnEventContextThe context of the turn that just started

`Protected`Called after Combat#_onStartTurn and takes care of clearing the movement history of the
Combatant's Token.
This function is not called for Combatants that don't have a Token.
The default implementation clears the movement history always.


#### Parameters

- combatant: documents.CombatantThe Combatant whose turn just started
- context: CombatTurnEventContextThe context of the turn that just started

The Combatant whose turn just started

The context of the turn that just started


#### Returns Promise<void>


### Protected_getCurrentState

`Protected`- _getCurrentState(combatant?: documents.Combatant): CombatHistoryDataProtectedGet the current history state of the Combat encounter.
ParametersOptionalcombatant: documents.CombatantThe new active combatant
Returns CombatHistoryData
- Optionalcombatant: documents.CombatantThe new active combatant

`Protected`Get the current history state of the Combat encounter.


#### Parameters

- Optionalcombatant: documents.CombatantThe new active combatant

`Optional`The new active combatant


#### Returns CombatHistoryData


### Protected_initialize

`Protected`- _initialize(options?: object): voidProtectedInitialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.
ParametersOptionaloptions: object = {}Options provided to the model constructor
Returns voidInherited from BaseCombat._initialize
- Optionaloptions: object = {}Options provided to the model constructor

`Protected`Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.


#### Parameters

- Optionaloptions: object = {}Options provided to the model constructor

`Optional`Options provided to the model constructor


#### Returns void

Inherited from BaseCombat._initialize


### Protected_initializeSource

`Protected`- _initializeSource(    data: object | DataModel<object, DataModelConstructionContext>,    options?: object,): objectProtectedInitialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.
Parametersdata: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
Optionaloptions: object = {}Options provided to the model constructor
Returns objectMigrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument
Inherited from BaseCombat._initializeSource
- data: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
- Optionaloptions: object = {}Options provided to the model constructor

`Protected`Initialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.


#### Parameters

- data: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
- Optionaloptions: object = {}Options provided to the model constructor

The candidate source data from which the model will be constructed

`Optional`Options provided to the model constructor


#### Returns object

Migrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument

`data`Inherited from BaseCombat._initializeSource


### Protected_manageTurnEvents

`Protected`- _manageTurnEvents(): Promise<void>ProtectedManage the execution of Combat lifecycle events.
This method orchestrates the execution of four events in the following order, as applicable:

End Turn
End Round
Begin Round
Begin Turn
Each lifecycle event is an async method, and each is awaited before proceeding.

Returns Promise<void>
- End Turn
- End Round
- Begin Round
- Begin Turn
Each lifecycle event is an async method, and each is awaited before proceeding.

`Protected`Manage the execution of Combat lifecycle events.
This method orchestrates the execution of four events in the following order, as applicable:

- End Turn
- End Round
- Begin Round
- Begin Turn
Each lifecycle event is an async method, and each is awaited before proceeding.


#### Returns Promise<void>


### Protected_onEndRound

`Protected`- _onEndRound(context: CombatRoundEventContext): Promise<void>ProtectedA workflow that occurs at the end of each Combat Round.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscontext: CombatRoundEventContextThe context of the round that just ended
Returns Promise<void>
- context: CombatRoundEventContextThe context of the round that just ended

`Protected`A workflow that occurs at the end of each Combat Round.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- context: CombatRoundEventContextThe context of the round that just ended

The context of the round that just ended


#### Returns Promise<void>


### Protected_onEndTurn

`Protected`- _onEndTurn(    combatant: documents.Combatant,    context: CombatTurnEventContext,): Promise<void>ProtectedA workflow that occurs at the end of each Combat Turn.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscombatant: documents.CombatantThe Combatant whose turn just ended
context: CombatTurnEventContextThe context of the turn that just ended
Returns Promise<void>
- combatant: documents.CombatantThe Combatant whose turn just ended
- context: CombatTurnEventContextThe context of the turn that just ended

`Protected`A workflow that occurs at the end of each Combat Turn.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- combatant: documents.CombatantThe Combatant whose turn just ended
- context: CombatTurnEventContextThe context of the turn that just ended

The Combatant whose turn just ended

The context of the turn that just ended


#### Returns Promise<void>


### Protected_onEnter

`Protected`- _onEnter(combatant: documents.Combatant): Promise<void>ProtectedThis workflow occurs after a Combatant is added to the Combat.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscombatant: documents.CombatantThe Combatant that entered the Combat
Returns Promise<void>
- combatant: documents.CombatantThe Combatant that entered the Combat

`Protected`This workflow occurs after a Combatant is added to the Combat.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- combatant: documents.CombatantThe Combatant that entered the Combat

The Combatant that entered the Combat


#### Returns Promise<void>


### Protected_onExit

`Protected`- _onExit(combatant: documents.Combatant): Promise<void>ProtectedThis workflow occurs after a Combatant is removed from the Combat.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscombatant: documents.CombatantThe Combatant that exited the Combat
Returns Promise<void>
- combatant: documents.CombatantThe Combatant that exited the Combat

`Protected`This workflow occurs after a Combatant is removed from the Combat.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- combatant: documents.CombatantThe Combatant that exited the Combat

The Combatant that exited the Combat


#### Returns Promise<void>


### Protected_onStartRound

`Protected`- _onStartRound(context: CombatRoundEventContext): Promise<void>ProtectedA workflow that occurs at the start of each Combat Round.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscontext: CombatRoundEventContextThe context of the round that just started
Returns Promise<void>
- context: CombatRoundEventContextThe context of the round that just started

`Protected`A workflow that occurs at the start of each Combat Round.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- context: CombatRoundEventContextThe context of the round that just started

The context of the round that just started


#### Returns Promise<void>


### Protected_onStartTurn

`Protected`- _onStartTurn(    combatant: documents.Combatant,    context: CombatTurnEventContext,): Promise<void>ProtectedA workflow that occurs at the start of each Combat Turn.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.
Parameterscombatant: documents.CombatantThe Combatant whose turn just started
context: CombatTurnEventContextThe context of the turn that just started
Returns Promise<void>
- combatant: documents.CombatantThe Combatant whose turn just started
- context: CombatTurnEventContextThe context of the turn that just started

`Protected`A workflow that occurs at the start of each Combat Turn.
This workflow occurs after the Combat document update.
This can be overridden to implement system-specific combat tracking behaviors.
The default implementation of this function does nothing.
This method only executes for one designated GM user. If no GM users are present this method will not be called.


#### Parameters

- combatant: documents.CombatantThe Combatant whose turn just started
- context: CombatTurnEventContextThe context of the turn that just started

The Combatant whose turn just started

The context of the turn that just started


#### Returns Promise<void>


### Protected_playCombatSound

`Protected`- _playCombatSound(announcement: string): voidProtectedLoads the registered Combat Theme (if any) and plays the requested type of sound.
If multiple exist for that type, one is chosen at random.
Parametersannouncement: stringThe announcement that should be played: "startEncounter", "nextUp", or "yourTurn".
Returns void
- announcement: stringThe announcement that should be played: "startEncounter", "nextUp", or "yourTurn".

`Protected`Loads the registered Combat Theme (if any) and plays the requested type of sound.
If multiple exist for that type, one is chosen at random.


#### Parameters

- announcement: stringThe announcement that should be played: "startEncounter", "nextUp", or "yourTurn".

The announcement that should be played: "startEncounter", "nextUp", or "yourTurn".


#### Returns void


### Protected_preCreate

`Protected`- _preCreate(    data: object,    options: object,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Modifications to the pending Document instance must be performed using updateSource.
Parametersdata: objectThe initial data object provided to the document creation request
options: objectAdditional options which modify the creation request
user: BaseUserThe User requesting the document creation
Returns Promise<boolean | void>Return false to exclude this Document from the creation operation
Inherited from BaseCombat._preCreate
- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- user: BaseUserThe User requesting the document creation

`Protected`Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.

Modifications to the pending Document instance must be performed using updateSource.


#### Parameters

- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- user: BaseUserThe User requesting the document creation

The initial data object provided to the document creation request

Additional options which modify the creation request

The User requesting the document creation


#### Returns Promise<boolean | void>

Return false to exclude this Document from the creation operation

Inherited from BaseCombat._preCreate


### Protected_preDelete

`Protected`- _preDelete(options: object, user: BaseUser): Promise<boolean | void>ProtectedPre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parametersoptions: objectAdditional options which modify the deletion request
user: BaseUserThe User requesting the document deletion
Returns Promise<boolean | void>A return value of false indicates the deletion operation should be cancelled.
Inherited from BaseCombat._preDelete
- options: objectAdditional options which modify the deletion request
- user: BaseUserThe User requesting the document deletion

`Protected`Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.


#### Parameters

- options: objectAdditional options which modify the deletion request
- user: BaseUserThe User requesting the document deletion

Additional options which modify the deletion request

The User requesting the document deletion


#### Returns Promise<boolean | void>

A return value of false indicates the deletion operation should be cancelled.

Inherited from BaseCombat._preDelete


### Protected_refreshTokenHUD

`Protected`- _refreshTokenHUD(documents: documents.Combatant[]): voidProtectedRefresh the Token HUD under certain circumstances.
Parametersdocuments: documents.Combatant[]A list of Combatant documents that were added or removed.
Returns void
- documents: documents.Combatant[]A list of Combatant documents that were added or removed.

`Protected`Refresh the Token HUD under certain circumstances.


#### Parameters

- documents: documents.Combatant[]A list of Combatant documents that were added or removed.

A list of Combatant documents that were added or removed.


#### Returns void


### Protected_sortCombatants

`Protected`- _sortCombatants(a: documents.Combatant, b: documents.Combatant): numberProtectedDefine how the array of Combatants is sorted in the displayed list of the tracker.
This method can be overridden by a system or module which needs to display combatants in an alternative order.
The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.
Parametersa: documents.CombatantSome combatant
b: documents.CombatantSome other combatant
Returns number
- a: documents.CombatantSome combatant
- b: documents.CombatantSome other combatant

`Protected`Define how the array of Combatants is sorted in the displayed list of the tracker.
This method can be overridden by a system or module which needs to display combatants in an alternative order.
The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.


#### Parameters

- a: documents.CombatantSome combatant
- b: documents.CombatantSome other combatant

Some combatant

Some other combatant


#### Returns number


### Protected_updateTurnMarkers

`Protected`- _updateTurnMarkers(): voidProtectedUpdate display of Token combat turn markers.
Returns void

`Protected`Update display of Token combat turn markers.


#### Returns void


### Static_addDataFieldMigration

`Static`- _addDataFieldMigration(    data: object,    oldKey: string,    newKey: string,    apply?: (data: object) => any,): booleanInternalDefine a simple migration from one field name to another.
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being migrated
oldKey: stringThe old field name
newKey: stringThe new field name
Optionalapply: (data: object) => anyAn application function, otherwise the old value is applied
Returns booleanWhether a migration was applied.
Inherited from BaseCombat._addDataFieldMigration
- data: objectThe data object being migrated
- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionalapply: (data: object) => anyAn application function, otherwise the old value is applied

`Internal`Define a simple migration from one field name to another.
The value of the data can be transformed during the migration by an optional application function.


#### Parameters

- data: objectThe data object being migrated
- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionalapply: (data: object) => anyAn application function, otherwise the old value is applied

The data object being migrated

The old field name

The new field name

`Optional`An application function, otherwise the old value is applied


#### Returns boolean

Whether a migration was applied.

Inherited from BaseCombat._addDataFieldMigration


### Static_addDataFieldShim

`Static`- _addDataFieldShim(    data: object,    oldKey: string,    newKey: string,    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding a migration shim
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being shimmed
oldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: { value?: any; warning?: string } = {}Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseCombat._addDataFieldShim
- data: objectThe data object being shimmed
- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionaloptions: { value?: any; warning?: string } = {}Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message

`Internal`A reusable helper for adding a migration shim
The value of the data can be transformed during the migration by an optional application function.


#### Parameters

- data: objectThe data object being shimmed
- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionaloptions: { value?: any; warning?: string } = {}Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message

The data object being shimmed

The old field name

The new field name

`Optional`Options passed to foundry.utils.logCompatibilityWarning

- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message


##### Optionalvalue?: any

`Optional`The value of the shim


##### Optionalwarning?: string

`Optional`The deprecation message


#### Returns void

Inherited from BaseCombat._addDataFieldShim


### Static_addDataFieldShims

`Static`- _addDataFieldShims(    data: object,    shims: { [oldKey: string]: string },    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding migration shims.
Parametersdata: objectThe data object being shimmed
shims: { [oldKey: string]: string }The mapping of old keys to new keys
Optionaloptions: { value?: any; warning?: string }Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseCombat._addDataFieldShims
- data: objectThe data object being shimmed
- shims: { [oldKey: string]: string }The mapping of old keys to new keys
- Optionaloptions: { value?: any; warning?: string }Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message

`Internal`A reusable helper for adding migration shims.


#### Parameters

- data: objectThe data object being shimmed
- shims: { [oldKey: string]: string }The mapping of old keys to new keys
- Optionaloptions: { value?: any; warning?: string }Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message

The data object being shimmed

The mapping of old keys to new keys

`Optional`Options passed to foundry.utils.logCompatibilityWarning

- Optionalvalue?: anyThe value of the shim
- Optionalwarning?: stringThe deprecation message


##### Optionalvalue?: any

`Optional`The value of the shim


##### Optionalwarning?: string

`Optional`The deprecation message


#### Returns void

Inherited from BaseCombat._addDataFieldShims


### Static_clearFieldsRecusively

`Static`- _clearFieldsRecusively(data: object, fieldNames: string[]): voidInternalClear the fields from the given Document data recursively.
Parametersdata: objectThe (partial) Document data
fieldNames: string[]The fields that are cleared
Returns voidInherited from BaseCombat._clearFieldsRecusively
- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

`Internal`Clear the fields from the given Document data recursively.


#### Parameters

- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

The (partial) Document data

The fields that are cleared


#### Returns void

Inherited from BaseCombat._clearFieldsRecusively


### Static_initializationOrder

`Static`- _initializationOrder(): Generator<any[], void, unknown>Returns Generator<any[], void, unknown>Inherited from BaseCombat._initializationOrder


#### Returns Generator<any[], void, unknown>

Inherited from BaseCombat._initializationOrder


### Static_logDataFieldMigration

`Static`- _logDataFieldMigration(oldKey: string, newKey: string, options?: object): voidInternalLog a compatbility warning for the data field migration.
ParametersoldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: object = {}Options passed to foundry.utils.logCompatibilityWarning
Returns voidInherited from BaseCombat._logDataFieldMigration
- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionaloptions: object = {}Options passed to foundry.utils.logCompatibilityWarning

`Internal`Log a compatbility warning for the data field migration.


#### Parameters

- oldKey: stringThe old field name
- newKey: stringThe new field name
- Optionaloptions: object = {}Options passed to foundry.utils.logCompatibilityWarning

The old field name

The new field name

`Optional`Options passed to foundry.utils.logCompatibilityWarning


#### Returns void

Inherited from BaseCombat._logDataFieldMigration


### Static_onDeleteTokens

`Static`- _onDeleteTokens(    tokens: TokenDocument[],    operation: DatabaseDeleteOperation,    user: documents.User,): voidInternalWhen Tokens are deleted, handle actions to update/delete Combatants of these Tokens.
Parameterstokens: TokenDocument[]An array of Tokens which have been deleted
operation: DatabaseDeleteOperationThe operation that deleted the Tokens
user: documents.UserThe User that deleted the Tokens
Returns void
- tokens: TokenDocument[]An array of Tokens which have been deleted
- operation: DatabaseDeleteOperationThe operation that deleted the Tokens
- user: documents.UserThe User that deleted the Tokens

`Internal`When Tokens are deleted, handle actions to update/delete Combatants of these Tokens.


#### Parameters

- tokens: TokenDocument[]An array of Tokens which have been deleted
- operation: DatabaseDeleteOperationThe operation that deleted the Tokens
- user: documents.UserThe User that deleted the Tokens

An array of Tokens which have been deleted

The operation that deleted the Tokens

The User that deleted the Tokens


#### Returns void


### StaticcanUserCreate

`Static`- canUserCreate(user: BaseUser): booleanTest whether a given User has sufficient permissions to create Documents of this type in general. This does not
guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
may also be present.
Generally speaking, this method is used to verify whether a User should be presented with the option to create
Documents of this type in the UI.
Parametersuser: BaseUserThe User being tested
Returns booleanDoes the User have a sufficient role to create?
Inherited from BaseCombat.canUserCreate
- user: BaseUserThe User being tested

Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
may also be present.

Generally speaking, this method is used to verify whether a User should be presented with the option to create
Documents of this type in the UI.


#### Parameters

- user: BaseUserThe User being tested

The User being tested


#### Returns boolean

Does the User have a sufficient role to create?

Inherited from BaseCombat.canUserCreate


### StaticcleanData

`Static`- cleanData(source?: object, options?: object): objectClean a data source object to conform to a specific provided schema.
ParametersOptionalsource: object = {}The source data object
Optionaloptions: object = {}Additional options which are passed to field cleaning methods
Returns objectThe cleaned source data, which is the same object as the source argument
Inherited from BaseCombat.cleanData
- Optionalsource: object = {}The source data object
- Optionaloptions: object = {}Additional options which are passed to field cleaning methods

Clean a data source object to conform to a specific provided schema.


#### Parameters

- Optionalsource: object = {}The source data object
- Optionaloptions: object = {}Additional options which are passed to field cleaning methods

`Optional`The source data object

`Optional`Additional options which are passed to field cleaning methods


#### Returns object

The cleaned source data, which is the same object as the source argument

`source`Inherited from BaseCombat.cleanData


### Staticcreate

`Static`- create(    data?:        | object        | Document<object, DocumentConstructionContext>        | (object | Document<object, DocumentConstructionContext>)[],    operation?: Partial<Omit<DatabaseCreateOperation, "data">>,): Promise<    | undefined    | Document<object, DocumentConstructionContext>    | Document<object, DocumentConstructionContext>[],>Create a new Document using provided input data, saving it to the database.
ParametersOptionaldata:     | object    | Document<object, DocumentConstructionContext>    | (object | Document<object, DocumentConstructionContext>)[]Initial data used to create this Document, or a Document
instance to persist.
Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the creation operation
Returns Promise<    | undefined    | Document<object, DocumentConstructionContext>    | Document<object, DocumentConstructionContext>[],>The created Document instance(s)
SeeDocument.createDocuments
Example: Create a World-level Itemconst data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data);
Copy

Example: Create an Actor-owned Itemconst data = [{name: "Special Sword", type: "weapon"}];const actor = game.actors.getName("My Hero");const created = await Item.implementation.create(data, {parent: actor});
Copy

Example: Create an Item in a Compendium packconst data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});
Copy

Inherited from BaseCombat.create
- Optionaldata:     | object    | Document<object, DocumentConstructionContext>    | (object | Document<object, DocumentConstructionContext>)[]Initial data used to create this Document, or a Document
instance to persist.
- Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the creation operation

Create a new Document using provided input data, saving it to the database.


#### Parameters

- Optionaldata:     | object    | Document<object, DocumentConstructionContext>    | (object | Document<object, DocumentConstructionContext>)[]Initial data used to create this Document, or a Document
instance to persist.
- Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the creation operation

`Optional`Initial data used to create this Document, or a Document
instance to persist.

`Optional`Parameters of the creation operation


#### Returns Promise<    | undefined    | Document<object, DocumentConstructionContext>    | Document<object, DocumentConstructionContext>[],>

The created Document instance(s)


#### See

Document.createDocuments


#### Example: Create a World-level Item

```javascript
const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data);
Copy
```

`const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data);`
#### Example: Create an Actor-owned Item

```javascript
const data = [{name: "Special Sword", type: "weapon"}];const actor = game.actors.getName("My Hero");const created = await Item.implementation.create(data, {parent: actor});
Copy
```

`const data = [{name: "Special Sword", type: "weapon"}];const actor = game.actors.getName("My Hero");const created = await Item.implementation.create(data, {parent: actor});`
#### Example: Create an Item in a Compendium pack

```javascript
const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});
Copy
```

`const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});`Inherited from BaseCombat.create


### StaticcreateDocuments

`Static`- createDocuments(    data?: (object | Document<object, DocumentConstructionContext>)[],    operation?: Partial<Omit<DatabaseCreateOperation, "data">>,): Promise<Document<object, DocumentConstructionContext>[]>Create multiple Documents using provided input data.
Data is provided as an array of objects where each individual object becomes one new Document.
Parametersdata: (object | Document<object, DocumentConstructionContext>)[] = []An array of data objects or existing Documents to persist.
Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the requested creation
operation
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of created Document instances
Example: Create a single Documentconst data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data);
Copy

Example: Create multiple Documentsconst data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];const created = await Actor.implementation.createDocuments(data);
Copy

Example: Create multiple embedded Documents within a parentconst actor = game.actors.getName("Tim");const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];const created = await Item.implementation.createDocuments(data, {parent: actor});
Copy

Example: Create a Document within a Compendium packconst data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});
Copy

Inherited from BaseCombat.createDocuments
- data: (object | Document<object, DocumentConstructionContext>)[] = []An array of data objects or existing Documents to persist.
- Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the requested creation
operation

Create multiple Documents using provided input data.
Data is provided as an array of objects where each individual object becomes one new Document.


#### Parameters

- data: (object | Document<object, DocumentConstructionContext>)[] = []An array of data objects or existing Documents to persist.
- Optionaloperation: Partial<Omit<DatabaseCreateOperation, "data">> = {}Parameters of the requested creation
operation

An array of data objects or existing Documents to persist.

`Optional`Parameters of the requested creation
operation


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of created Document instances


#### Example: Create a single Document

```javascript
const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data);
Copy
```

`const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data);`
#### Example: Create multiple Documents

```javascript
const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];const created = await Actor.implementation.createDocuments(data);
Copy
```

`const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];const created = await Actor.implementation.createDocuments(data);`
#### Example: Create multiple embedded Documents within a parent

```javascript
const actor = game.actors.getName("Tim");const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];const created = await Item.implementation.createDocuments(data, {parent: actor});
Copy
```

`const actor = game.actors.getName("Tim");const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];const created = await Item.implementation.createDocuments(data, {parent: actor});`
#### Example: Create a Document within a Compendium pack

```javascript
const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});
Copy
```

`const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});`Inherited from BaseCombat.createDocuments


### StaticdefineSchema

`Static`- defineSchema(): {    _id: DocumentIdField;    _stats: DocumentStatsField;    active: BooleanField;    combatants: EmbeddedCollectionField;    flags: DocumentFlagsField;    groups: EmbeddedCollectionField;    round: NumberField;    scene: ForeignDocumentField;    sort: IntegerSortField;    system: TypeDataField;    turn: NumberField;    type: DocumentTypeField;}Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.
Returns {    _id: DocumentIdField;    _stats: DocumentStatsField;    active: BooleanField;    combatants: EmbeddedCollectionField;    flags: DocumentFlagsField;    groups: EmbeddedCollectionField;    round: NumberField;    scene: ForeignDocumentField;    sort: IntegerSortField;    system: TypeDataField;    turn: NumberField;    type: DocumentTypeField;}Inherited from BaseCombat.defineSchema

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.


#### Returns {    _id: DocumentIdField;    _stats: DocumentStatsField;    active: BooleanField;    combatants: EmbeddedCollectionField;    flags: DocumentFlagsField;    groups: EmbeddedCollectionField;    round: NumberField;    scene: ForeignDocumentField;    sort: IntegerSortField;    system: TypeDataField;    turn: NumberField;    type: DocumentTypeField;}

Inherited from BaseCombat.defineSchema


### StaticdeleteDocuments

`Static`- deleteDocuments(    ids?: string[],    operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>,): Promise<Document<object, DocumentConstructionContext>[]>Delete one or multiple existing Documents using an array of provided ids.
Data is provided as an array of string ids for the documents to delete.
Parametersids: string[] = []An array of string ids for the documents to be deleted
Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the database deletion
operation
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of deleted Document instances
Example: Delete a single Documentconst tim = game.actors.getName("Tim");const deleted = await Actor.implementation.deleteDocuments([tim.id]);
Copy

Example: Delete multiple Documentsconst tim = game.actors.getName("Tim");const tom = game.actors.getName("Tom");const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);
Copy

Example: Delete multiple embedded Documents within a parentconst tim = game.actors.getName("Tim");const sword = tim.items.getName("Sword");const shield = tim.items.getName("Shield");const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});
Copy

Example: Delete Documents within a Compendium packconst actor = await pack.getDocument(documentId);const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
Copy

Inherited from BaseCombat.deleteDocuments
- ids: string[] = []An array of string ids for the documents to be deleted
- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the database deletion
operation

Delete one or multiple existing Documents using an array of provided ids.
Data is provided as an array of string ids for the documents to delete.


#### Parameters

- ids: string[] = []An array of string ids for the documents to be deleted
- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the database deletion
operation

An array of string ids for the documents to be deleted

`Optional`Parameters of the database deletion
operation


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of deleted Document instances


#### Example: Delete a single Document

```javascript
const tim = game.actors.getName("Tim");const deleted = await Actor.implementation.deleteDocuments([tim.id]);
Copy
```

`const tim = game.actors.getName("Tim");const deleted = await Actor.implementation.deleteDocuments([tim.id]);`
#### Example: Delete multiple Documents

```javascript
const tim = game.actors.getName("Tim");const tom = game.actors.getName("Tom");const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);
Copy
```

`const tim = game.actors.getName("Tim");const tom = game.actors.getName("Tom");const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);`
#### Example: Delete multiple embedded Documents within a parent

```javascript
const tim = game.actors.getName("Tim");const sword = tim.items.getName("Sword");const shield = tim.items.getName("Shield");const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});
Copy
```

`const tim = game.actors.getName("Tim");const sword = tim.items.getName("Sword");const shield = tim.items.getName("Shield");const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});`
#### Example: Delete Documents within a Compendium pack

```javascript
const actor = await pack.getDocument(documentId);const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
Copy
```

`const actor = await pack.getDocument(documentId);const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});`Inherited from BaseCombat.deleteDocuments


### StaticfromJSON

`Static`- fromJSON(json: string): DataModel<object, DataModelConstructionContext>Create a DataModel instance using a provided serialized JSON string.
Parametersjson: stringSerialized document data in string format
Returns DataModel<object, DataModelConstructionContext>A constructed data model instance
Inherited from BaseCombat.fromJSON
- json: stringSerialized document data in string format

Create a DataModel instance using a provided serialized JSON string.


#### Parameters

- json: stringSerialized document data in string format

Serialized document data in string format


#### Returns DataModel<object, DataModelConstructionContext>

A constructed data model instance

Inherited from BaseCombat.fromJSON


### StaticfromSource

`Static`- fromSource(    source: object,    context?: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions,): DataModel<object, DataModelConstructionContext>Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.
Parameterssource: objectInitial document data which comes from a trusted source.
Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context
Returns DataModel<object, DataModelConstructionContext>Inherited from BaseCombat.fromSource
- source: objectInitial document data which comes from a trusted source.
- Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context

Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.


#### Parameters

- source: objectInitial document data which comes from a trusted source.
- Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context

Initial document data which comes from a trusted source.

`Optional`Model construction context


#### Returns DataModel<object, DataModelConstructionContext>

Inherited from BaseCombat.fromSource


### Staticget

`Static`- get(    documentId: string,    operation?: DatabaseGetOperation,): null | Document<object, DocumentConstructionContext>Get a World-level Document of this type by its id.
ParametersdocumentId: stringThe Document ID
Optionaloperation: DatabaseGetOperation = {}Parameters of the get operation
Returns null | Document<object, DocumentConstructionContext>The retrieved Document, or null
Inherited from BaseCombat.get
- documentId: stringThe Document ID
- Optionaloperation: DatabaseGetOperation = {}Parameters of the get operation

Get a World-level Document of this type by its id.


#### Parameters

- documentId: stringThe Document ID
- Optionaloperation: DatabaseGetOperation = {}Parameters of the get operation

The Document ID

`Optional`Parameters of the get operation


#### Returns null | Document<object, DocumentConstructionContext>

The retrieved Document, or null

Inherited from BaseCombat.get


### StaticgetCollectionName

`Static`- getCollectionName(name: string): null | stringA compatibility method that returns the appropriate name of an embedded collection within this Document.
Parametersname: stringAn existing collection name or a document name.
Returns null | stringThe provided collection name if it exists, the first available collection for the
document name provided, or null if no appropriate embedded collection could be found.
Example: Passing an existing collection name.Actor.implementation.getCollectionName("items");// returns "items"
Copy

Example: Passing a document name.Actor.implementation.getCollectionName("Item");// returns "items"
Copy

Inherited from BaseCombat.getCollectionName
- name: stringAn existing collection name or a document name.

A compatibility method that returns the appropriate name of an embedded collection within this Document.


#### Parameters

- name: stringAn existing collection name or a document name.

An existing collection name or a document name.


#### Returns null | string

The provided collection name if it exists, the first available collection for the
document name provided, or null if no appropriate embedded collection could be found.


#### Example: Passing an existing collection name.

```javascript
Actor.implementation.getCollectionName("items");// returns "items"
Copy
```

`Actor.implementation.getCollectionName("items");// returns "items"`
#### Example: Passing a document name.

```javascript
Actor.implementation.getCollectionName("Item");// returns "items"
Copy
```

`Actor.implementation.getCollectionName("Item");// returns "items"`Inherited from BaseCombat.getCollectionName


### StaticmigrateData

`Static`- migrateData(source: object): objectMigrate candidate source data for this DataModel which may require initial cleaning or transformations.
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseCombat.migrateData
- source: objectThe candidate source data from which the model will be constructed

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseCombat.migrateData


### StaticmigrateDataSafe

`Static`- migrateDataSafe(source: object): objectWrap data migration in a try/catch which attempts it safely
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseCombat.migrateDataSafe
- source: objectThe candidate source data from which the model will be constructed

Wrap data migration in a try/catch which attempts it safely


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseCombat.migrateDataSafe


### StaticshimData

`Static`- shimData(data: object, options?: { embedded?: boolean }): objectTake data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.
Parametersdata: objectData which matches the current schema
Optionaloptions: { embedded?: boolean } = {}Additional shimming options
Optionalembedded?: booleanApply shims to embedded models?
Returns objectData with added backwards-compatible properties, which is the same object as
the data argument
Inherited from BaseCombat.shimData
- data: objectData which matches the current schema
- Optionaloptions: { embedded?: boolean } = {}Additional shimming options
Optionalembedded?: booleanApply shims to embedded models?
- Optionalembedded?: booleanApply shims to embedded models?

Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.


#### Parameters

- data: objectData which matches the current schema
- Optionaloptions: { embedded?: boolean } = {}Additional shimming options
Optionalembedded?: booleanApply shims to embedded models?
- Optionalembedded?: booleanApply shims to embedded models?

Data which matches the current schema

`Optional`Additional shimming options

- Optionalembedded?: booleanApply shims to embedded models?


##### Optionalembedded?: boolean

`Optional`Apply shims to embedded models?


#### Returns object

Data with added backwards-compatible properties, which is the same object as
the data argument

`data`Inherited from BaseCombat.shimData


### StaticupdateDocuments

`Static`- updateDocuments(    updates?: object[],    operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>,): Promise<Document<object, DocumentConstructionContext>[]>Update multiple Document instances using provided differential data.
Data is provided as an array of objects where each individual object updates one existing Document.
Parametersupdates: object[] = []An array of differential data objects, each used to update a single Document
Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the database update
operation
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated Document instances
Example: Update a single Documentconst updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];const updated = await Actor.implementation.updateDocuments(updates);
Copy

Example: Update multiple Documentsconst updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};const updated = await Actor.implementation.updateDocuments(updates);
Copy

Example: Update multiple embedded Documents within a parentconst actor = game.actors.getName("Timothy");const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];const updated = await Item.implementation.updateDocuments(updates, {parent: actor});
Copy

Example: Update Documents within a Compendium packconst actor = await pack.getDocument(documentId);const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  {pack: "mymodule.mypack"});
Copy

Inherited from BaseCombat.updateDocuments
- updates: object[] = []An array of differential data objects, each used to update a single Document
- Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the database update
operation

Update multiple Document instances using provided differential data.
Data is provided as an array of objects where each individual object updates one existing Document.


#### Parameters

- updates: object[] = []An array of differential data objects, each used to update a single Document
- Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the database update
operation

An array of differential data objects, each used to update a single Document

`Optional`Parameters of the database update
operation


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of updated Document instances


#### Example: Update a single Document

```javascript
const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];const updated = await Actor.implementation.updateDocuments(updates);
Copy
```

`const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];const updated = await Actor.implementation.updateDocuments(updates);`
#### Example: Update multiple Documents

```javascript
const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};const updated = await Actor.implementation.updateDocuments(updates);
Copy
```

`const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};const updated = await Actor.implementation.updateDocuments(updates);`
#### Example: Update multiple embedded Documents within a parent

```javascript
const actor = game.actors.getName("Timothy");const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];const updated = await Item.implementation.updateDocuments(updates, {parent: actor});
Copy
```

`const actor = game.actors.getName("Timothy");const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];const updated = await Item.implementation.updateDocuments(updates, {parent: actor});`
#### Example: Update Documents within a Compendium pack

```javascript
const actor = await pack.getDocument(documentId);const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  {pack: "mymodule.mypack"});
Copy
```

`const actor = await pack.getDocument(documentId);const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  {pack: "mymodule.mypack"});`Inherited from BaseCombat.updateDocuments


### StaticvalidateJoint

`Static`- validateJoint(data: object): voidEvaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.
Parametersdata: objectCandidate data for the model
Returns voidThrowsAn error if a validation failure is detected
Inherited from BaseCombat.validateJoint
- data: objectCandidate data for the model

Evaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.


#### Parameters

- data: objectCandidate data for the model

Candidate data for the model


#### Returns void


#### Throws

An error if a validation failure is detected

Inherited from BaseCombat.validateJoint


### Protected Static_onCreateOperation

`Protected``Static`- _onCreateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseCreateOperation,    user: BaseUser,): Promise<void>ProtectedPost-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onCreate workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were created
operation: DatabaseCreateOperationParameters of the database creation operation
user: BaseUserThe User who performed the creation operation
Returns Promise<void>Inherited from BaseCombat._onCreateOperation
- documents: Document<object, DocumentConstructionContext>[]The Document instances which were created
- operation: DatabaseCreateOperationParameters of the database creation operation
- user: BaseUserThe User who performed the creation operation

`Protected`Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

This batch-wise workflow occurs after individual _onCreate workflows.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]The Document instances which were created
- operation: DatabaseCreateOperationParameters of the database creation operation
- user: BaseUserThe User who performed the creation operation

The Document instances which were created

Parameters of the database creation operation

The User who performed the creation operation


#### Returns Promise<void>

Inherited from BaseCombat._onCreateOperation


### Protected Static_onDeleteOperation

`Protected``Static`- _onDeleteOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseDeleteOperation,    user: BaseUser,): Promise<void>ProtectedPost-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onDelete workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were deleted
operation: DatabaseDeleteOperationParameters of the database deletion operation
user: BaseUserThe User who performed the deletion operation
Returns Promise<void>Inherited from BaseCombat._onDeleteOperation
- documents: Document<object, DocumentConstructionContext>[]The Document instances which were deleted
- operation: DatabaseDeleteOperationParameters of the database deletion operation
- user: BaseUserThe User who performed the deletion operation

`Protected`Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

This batch-wise workflow occurs after individual _onDelete workflows.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]The Document instances which were deleted
- operation: DatabaseDeleteOperationParameters of the database deletion operation
- user: BaseUserThe User who performed the deletion operation

The Document instances which were deleted

Parameters of the database deletion operation

The User who performed the deletion operation


#### Returns Promise<void>

Inherited from BaseCombat._onDeleteOperation


### Protected Static_onUpdateOperation

`Protected``Static`- _onUpdateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseUpdateOperation,    user: BaseUser,): Promise<void>ProtectedPost-process an update operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onUpdate workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were updated
operation: DatabaseUpdateOperationParameters of the database update operation
user: BaseUserThe User who performed the update operation
Returns Promise<void>Inherited from BaseCombat._onUpdateOperation
- documents: Document<object, DocumentConstructionContext>[]The Document instances which were updated
- operation: DatabaseUpdateOperationParameters of the database update operation
- user: BaseUserThe User who performed the update operation

`Protected`Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

This batch-wise workflow occurs after individual _onUpdate workflows.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]The Document instances which were updated
- operation: DatabaseUpdateOperationParameters of the database update operation
- user: BaseUserThe User who performed the update operation

The Document instances which were updated

Parameters of the database update operation

The User who performed the update operation


#### Returns Promise<void>

Inherited from BaseCombat._onUpdateOperation


### Protected Static_preCreateOperation

`Protected``Static`- _preCreateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseCreateOperation,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.
This batch-wise workflow occurs after individual _preCreate workflows and provides a final pre-flight check
before a database operation occurs.
Modifications to pending documents must mutate the documents array or alter individual document instances using
updateSource.
Parametersdocuments: Document<object, DocumentConstructionContext>[]Pending document instances to be created
operation: DatabaseCreateOperationParameters of the database creation operation
user: BaseUserThe User requesting the creation operation
Returns Promise<boolean | void>Return false to cancel the creation operation entirely
Inherited from BaseCombat._preCreateOperation
- documents: Document<object, DocumentConstructionContext>[]Pending document instances to be created
- operation: DatabaseCreateOperationParameters of the database creation operation
- user: BaseUserThe User requesting the creation operation

`Protected`Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

This batch-wise workflow occurs after individual _preCreate workflows and provides a final pre-flight check
before a database operation occurs.

Modifications to pending documents must mutate the documents array or alter individual document instances using
updateSource.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]Pending document instances to be created
- operation: DatabaseCreateOperationParameters of the database creation operation
- user: BaseUserThe User requesting the creation operation

Pending document instances to be created

Parameters of the database creation operation

The User requesting the creation operation


#### Returns Promise<boolean | void>

Return false to cancel the creation operation entirely

Inherited from BaseCombat._preCreateOperation


### Protected Static_preDeleteOperation

`Protected``Static`- _preDeleteOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseDeleteOperation,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.
This batch-wise workflow occurs after individual _preDelete workflows and provides a final pre-flight check
before a database operation occurs.
Modifications to the requested deletions are performed by mutating the operation object.
updateSource.
Parametersdocuments: Document<object, DocumentConstructionContext>[]Document instances to be deleted
operation: DatabaseDeleteOperationParameters of the database update operation
user: BaseUserThe User requesting the deletion operation
Returns Promise<boolean | void>Return false to cancel the deletion operation entirely
Inherited from BaseCombat._preDeleteOperation
- documents: Document<object, DocumentConstructionContext>[]Document instances to be deleted
- operation: DatabaseDeleteOperationParameters of the database update operation
- user: BaseUserThe User requesting the deletion operation

`Protected`Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

This batch-wise workflow occurs after individual _preDelete workflows and provides a final pre-flight check
before a database operation occurs.

Modifications to the requested deletions are performed by mutating the operation object.
updateSource.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]Document instances to be deleted
- operation: DatabaseDeleteOperationParameters of the database update operation
- user: BaseUserThe User requesting the deletion operation

Document instances to be deleted

Parameters of the database update operation

The User requesting the deletion operation


#### Returns Promise<boolean | void>

Return false to cancel the deletion operation entirely

Inherited from BaseCombat._preDeleteOperation


### Protected Static_preUpdateOperation

`Protected``Static`- _preUpdateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseUpdateOperation,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.
This batch-wise workflow occurs after individual _preUpdate workflows and provides a final pre-flight check
before a database operation occurs.
Modifications to the requested updates are performed by mutating the data array of the operation.
Parametersdocuments: Document<object, DocumentConstructionContext>[]Document instances to be updated
operation: DatabaseUpdateOperationParameters of the database update operation
user: BaseUserThe User requesting the update operation
Returns Promise<boolean | void>Return false to cancel the update operation entirely
Inherited from BaseCombat._preUpdateOperation
- documents: Document<object, DocumentConstructionContext>[]Document instances to be updated
- operation: DatabaseUpdateOperationParameters of the database update operation
- user: BaseUserThe User requesting the update operation

`Protected`Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

This batch-wise workflow occurs after individual _preUpdate workflows and provides a final pre-flight check
before a database operation occurs.

Modifications to the requested updates are performed by mutating the data array of the operation.


#### Parameters

- documents: Document<object, DocumentConstructionContext>[]Document instances to be updated
- operation: DatabaseUpdateOperationParameters of the database update operation
- user: BaseUserThe User requesting the update operation

Document instances to be updated

Parameters of the database update operation

The User requesting the update operation


#### Returns Promise<boolean | void>

Return false to cancel the update operation entirely

Inherited from BaseCombat._preUpdateOperation


### Settings

- Protected
- Inherited
- Internal


### On This Page

