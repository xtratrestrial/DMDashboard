# ActiveEffect | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.documents.ActiveEffect.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- documents
- ActiveEffect


# Class ActiveEffect

The client-side ActiveEffect document which extends the common BaseActiveEffect model.
Each ActiveEffect belongs to the effects collection of its parent Document.
Each ActiveEffect contains a ActiveEffectData object which provides its source data.


### Hook Events

- hookEvents.applyActiveEffect


#### Mixes

ClientDocumentMixin


#### See

- foundry.documents.Actor: The Actor document which contains ActiveEffect embedded documents
- foundry.documents.Item: The Item document which contains ActiveEffect embedded documents


#### Hierarchy (View Summary)

- BaseActiveEffect<this>ActiveEffect
- ActiveEffect

- ActiveEffect


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new ActiveEffect(    data?: Partial<ActiveEffectData>,    options?: DocumentConstructionContext,): documents.ActiveEffectParametersOptionaldata: Partial<ActiveEffectData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.
Returns documents.ActiveEffectInherited from BaseActiveEffect.constructor
- Optionaldata: Partial<ActiveEffectData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.


#### Parameters

- Optionaldata: Partial<ActiveEffectData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.

`Optional`Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

`Optional`Context and data validation options which affects initial model construction.


#### Returns documents.ActiveEffect

Inherited from BaseActiveEffect.constructor


## Properties


### _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from BaseActiveEffect._source


### parent

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from BaseActiveEffect.parent


### Static Internal_schema

`Static``Internal`The defined and cached Data Schema for all instances of this DataModel.

Inherited from BaseActiveEffect._schema


### StaticLOCALIZATION_PREFIXES

`Static`Inherited from BaseActiveEffect.LOCALIZATION_PREFIXES


### Staticmetadata

`Static`Default metadata which applies to each instance of this Document type.

Inherited from BaseActiveEffect.metadata


## Accessors


### active

- get active(): booleanWhether the Active Effect is currently applying its changes to the target.
Returns boolean

Whether the Active Effect is currently applying its changes to the target.


#### Returns boolean


### Abstractcompendium

`Abstract`- get compendium(): anyA reference to the Compendium Collection containing this Document, if any, and otherwise null.
Returns anyInherited from ClientDocumentMixin(BaseActiveEffect).compendium

A reference to the Compendium Collection containing this Document, if any, and otherwise null.


#### Returns any

Inherited from ClientDocumentMixin(BaseActiveEffect).compendium


### id

- get id(): null | stringThe canonical identifier for this Document.
Returns null | stringInherited from ClientDocumentMixin(BaseActiveEffect).id

The canonical identifier for this Document.


#### Returns null | string

Inherited from ClientDocumentMixin(BaseActiveEffect).id


### inCompendium

- get inCompendium(): booleanIs this document in a compendium?
Returns booleanInherited from ClientDocumentMixin(BaseActiveEffect).inCompendium

Is this document in a compendium?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseActiveEffect).inCompendium


### invalid

- get invalid(): booleanIs the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.
Returns booleanInherited from ClientDocumentMixin(BaseActiveEffect).invalid

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.


#### Returns boolean

Inherited from ClientDocumentMixin(BaseActiveEffect).invalid


### isEmbedded

- get isEmbedded(): booleanIs this document embedded within a parent document?
Returns booleanInherited from ClientDocumentMixin(BaseActiveEffect).isEmbedded

Is this document embedded within a parent document?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseActiveEffect).isEmbedded


### isSuppressed

- get isSuppressed(): booleanIs there some system logic that makes this active effect ineligible for application?
Returns boolean

Is there some system logic that makes this active effect ineligible for application?


#### Returns boolean


### isTemporary

- get isTemporary(): booleanDescribe whether the ActiveEffect has a temporary duration based on combat turns or rounds.
Returns boolean

Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.


#### Returns boolean


### modifiesActor

- get modifiesActor(): booleanDoes this Active Effect currently modify an Actor?
Returns boolean

Does this Active Effect currently modify an Actor?


#### Returns boolean


### schema

- get schema(): SchemaFieldDefine the data schema for this document instance.
Returns SchemaFieldInherited from ClientDocumentMixin(BaseActiveEffect).schema

Define the data schema for this document instance.


#### Returns SchemaField

Inherited from ClientDocumentMixin(BaseActiveEffect).schema


### sourceName

- get sourceName(): stringThe source name of the Active Effect. The source is retrieved synchronously.
Therefore "Unknown" (localized) is returned if the origin points to a document inside a compendium.
Returns "None" (localized) if it has no origin, and "Unknown" (localized) if the origin cannot be resolved.
Returns string

The source name of the Active Effect. The source is retrieved synchronously.
Therefore "Unknown" (localized) is returned if the origin points to a document inside a compendium.
Returns "None" (localized) if it has no origin, and "Unknown" (localized) if the origin cannot be resolved.


#### Returns string


### target

- get target(): null | Document<object, DocumentConstructionContext>Retrieve the Document that this ActiveEffect targets for modification.
Returns null | Document<object, DocumentConstructionContext>

Retrieve the Document that this ActiveEffect targets for modification.


#### Returns null | Document<object, DocumentConstructionContext>


### uuid

- get uuid(): stringA Universally Unique Identifier (uuid) for this Document instance.
Returns stringInherited from ClientDocumentMixin(BaseActiveEffect).uuid

A Universally Unique Identifier (uuid) for this Document instance.


#### Returns string

Inherited from ClientDocumentMixin(BaseActiveEffect).uuid


### validationFailures

- get validationFailures(): {    fields: null    | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}An array of validation failure instances which may have occurred when this instance was last validated.
Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}Inherited from ClientDocumentMixin(BaseActiveEffect).validationFailures

An array of validation failure instances which may have occurred when this instance was last validated.


#### Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}

Inherited from ClientDocumentMixin(BaseActiveEffect).validationFailures


### StaticbaseDocument

`Static`- get baseDocument(): typeof DocumentThe base document definition that this document class extends from.
Returns typeof DocumentInherited from ClientDocumentMixin(BaseActiveEffect).baseDocument

The base document definition that this document class extends from.


#### Returns typeof Document

Inherited from ClientDocumentMixin(BaseActiveEffect).baseDocument


### StaticcollectionName

`Static`- get collectionName(): stringThe named collection to which this Document belongs.
Returns stringInherited from ClientDocumentMixin(BaseActiveEffect).collectionName

The named collection to which this Document belongs.


#### Returns string

Inherited from ClientDocumentMixin(BaseActiveEffect).collectionName


### Staticdatabase

`Static`- get database(): abstract.DatabaseBackendThe database backend used to execute operations and handle results.
Returns abstract.DatabaseBackendInherited from ClientDocumentMixin(BaseActiveEffect).database

The database backend used to execute operations and handle results.


#### Returns abstract.DatabaseBackend

Inherited from ClientDocumentMixin(BaseActiveEffect).database


### StaticdocumentName

`Static`- get documentName(): stringThe canonical name of this Document type, for example "Actor".
Returns stringInherited from ClientDocumentMixin(BaseActiveEffect).documentName

The canonical name of this Document type, for example "Actor".


#### Returns string

Inherited from ClientDocumentMixin(BaseActiveEffect).documentName


### StatichasTypeData

`Static`- get hasTypeData(): booleanDoes this Document support additional subtypes?
Returns booleanInherited from ClientDocumentMixin(BaseActiveEffect).hasTypeData

Does this Document support additional subtypes?


#### Returns boolean

Inherited from ClientDocumentMixin(BaseActiveEffect).hasTypeData


### Statichierarchy

`Static`- get hierarchy(): Readonly<Record<string, any>>The Embedded Document hierarchy for this Document.
Returns Readonly<Record<string, any>>Inherited from ClientDocumentMixin(BaseActiveEffect).hierarchy

The Embedded Document hierarchy for this Document.


#### Returns Readonly<Record<string, any>>

Inherited from ClientDocumentMixin(BaseActiveEffect).hierarchy


### Staticimplementation

`Static`- get implementation(): typeof DocumentReturn a reference to the configured subclass of this base Document type.
Returns typeof DocumentInherited from ClientDocumentMixin(BaseActiveEffect).implementation

Return a reference to the configured subclass of this base Document type.


#### Returns typeof Document

Inherited from ClientDocumentMixin(BaseActiveEffect).implementation


### Staticschema

`Static`- get schema(): SchemaFieldEnsure that all Document classes share the same schema of their base declaration.
Returns SchemaFieldInherited from ClientDocumentMixin(BaseActiveEffect).schema

Ensure that all Document classes share the same schema of their base declaration.


#### Returns SchemaField

Inherited from ClientDocumentMixin(BaseActiveEffect).schema


### StaticTYPES

`Static`- get TYPES(): string[]The allowed types which may exist for this Document class.
Returns string[]Inherited from ClientDocumentMixin(BaseActiveEffect).TYPES

The allowed types which may exist for this Document class.


#### Returns string[]

Inherited from ClientDocumentMixin(BaseActiveEffect).TYPES


## Methods


### _configure

- _configure(__namedParameters?: { pack?: null; parentCollection?: null }): voidParameters__namedParameters: { pack?: null; parentCollection?: null } = {}Returns voidInherited from BaseActiveEffect._configure
- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Parameters

- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Returns void

Inherited from BaseActiveEffect._configure


### _getCombatTime

- _getCombatTime(round: number, turn: number, nTurns?: number): numberInternalFormat a round+turn combination as a decimal
Parametersround: numberThe round number
turn: numberThe turn number
OptionalnTurns: numberThe maximum number of turns in the encounter
Returns numberThe decimal representation
- round: numberThe round number
- turn: numberThe turn number
- OptionalnTurns: numberThe maximum number of turns in the encounter

`Internal`Format a round+turn combination as a decimal


#### Parameters

- round: numberThe round number
- turn: numberThe turn number
- OptionalnTurns: numberThe maximum number of turns in the encounter

The round number

The turn number

`Optional`The maximum number of turns in the encounter


#### Returns number

The decimal representation


### _getDurationLabel

- _getDurationLabel(rounds: number, turns: number): stringInternalFormat a number of rounds and turns into a human-readable duration label
Parametersrounds: numberThe number of rounds
turns: numberThe number of turns
Returns stringThe formatted label
- rounds: numberThe number of rounds
- turns: numberThe number of turns

`Internal`Format a number of rounds and turns into a human-readable duration label


#### Parameters

- rounds: numberThe number of rounds
- turns: numberThe number of turns

The number of rounds

The number of turns


#### Returns string

The formatted label


### _getParentCollection

- _getParentCollection(parentCollection?: null | string): null | stringInternalIdentify the collection in a parent Document that this Document belongs to, if any.
ParametersOptionalparentCollection: null | stringAn explicitly provided parent collection name.
Returns null | stringInherited from BaseActiveEffect._getParentCollection
- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Internal`Identify the collection in a parent Document that this Document belongs to, if any.


#### Parameters

- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Optional`An explicitly provided parent collection name.


#### Returns null | string

Inherited from BaseActiveEffect._getParentCollection


### _onCreate

- _onCreate(data: any, options: any, userId: any): voidPost-process a creation operation for a single Document instance. Post-operation events occur for all connected
clients.
Parametersdata: anyThe initial data object provided to the document creation request
options: anyAdditional options which modify the creation request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseActiveEffect._onCreate
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

Overrides BaseActiveEffect._onCreate


### _onDelete

- _onDelete(options: any, userId: any): voidPost-process a deletion operation for a single Document instance. Post-operation events occur for all connected
clients.
Parametersoptions: anyAdditional options which modify the deletion request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseActiveEffect._onDelete
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

Overrides BaseActiveEffect._onDelete


### _onUpdate

- _onUpdate(changed: any, options: any, userId: any): voidPost-process an update operation for a single Document instance. Post-operation events occur for all connected
clients.
Parameterschanged: anyThe differential data that was changed relative to the documents prior values
options: anyAdditional options which modify the update request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseActiveEffect._onUpdate
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

Overrides BaseActiveEffect._onUpdate


### _preCreate

- _preCreate(data: any, options: any, user: any): Promise<undefined | false>Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Modifications to the pending Document instance must be performed using updateSource.
Parametersdata: anyThe initial data object provided to the document creation request
options: anyAdditional options which modify the creation request
user: anyThe User requesting the document creation
Returns Promise<undefined | false>Return false to exclude this Document from the creation operation
Overrides BaseActiveEffect._preCreate
- data: anyThe initial data object provided to the document creation request
- options: anyAdditional options which modify the creation request
- user: anyThe User requesting the document creation

Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.

Modifications to the pending Document instance must be performed using updateSource.


#### Parameters

- data: anyThe initial data object provided to the document creation request
- options: anyAdditional options which modify the creation request
- user: anyThe User requesting the document creation

The initial data object provided to the document creation request

Additional options which modify the creation request

The User requesting the document creation


#### Returns Promise<undefined | false>

Return false to exclude this Document from the creation operation

Overrides BaseActiveEffect._preCreate


### _prepareDuration

- _prepareDuration(): {    duration: null    | number;    label: string;    remaining: null | number;    type: string;}InternalCompute derived data related to active effect duration.
Returns {    duration: null | number;    label: string;    remaining: null | number;    type: string;}

`Internal`Compute derived data related to active effect duration.


#### Returns {    duration: null | number;    label: string;    remaining: null | number;    type: string;}


### apply

- apply(actor: documents.Actor, change: EffectChangeData): Record<string, any>Apply this ActiveEffect to a provided Actor.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
Returns Record<string, any>An object of property paths and their updated values.
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied

Apply this ActiveEffect to a provided Actor.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied

The Actor to whom this effect should be applied

The change data being applied


#### Returns Record<string, any>

An object of property paths and their updated values.


### canUserModify

- canUserModify(user: BaseUser, action: string, data?: object): booleanTest whether a given User has permission to perform some action on this Document
Parametersuser: BaseUserThe User attempting modification
action: stringThe attempted action
Optionaldata: object = {}Data involved in the attempted action
Returns booleanDoes the User have permission?
Inherited from BaseActiveEffect.canUserModify
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

Inherited from BaseActiveEffect.canUserModify


### clone

- clone(    data?: object,    context?: DataModelConstructionOptions & Pick<        DataModelValidationOptions,        "strict"        | "fallback"        | "dropInvalidEmbedded",    > & _DocumentConstructionContext & DocumentCloneOptions,):    | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.
ParametersOptionaldata: object = {}Additional data which overrides current document data at the time of creation
Optionalcontext: DataModelConstructionOptions & Pick<    DataModelValidationOptions,    "strict"    | "fallback"    | "dropInvalidEmbedded",> & _DocumentConstructionContext & DocumentCloneOptions = {}Additional context options passed to the create method
Returns     | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>The cloned Document instance
Inherited from BaseActiveEffect.clone
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

Inherited from BaseActiveEffect.clone


### createEmbeddedDocuments

- createEmbeddedDocuments(    embeddedName: string,    data?: object[],    operation?: DatabaseCreateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Create multiple embedded Document instances within this parent Document using provided input data.
ParametersembeddedName: stringThe name of the embedded Document type
data: object[] = []An array of data objects used to create multiple documents
Optionaloperation: DatabaseCreateOperation = {}Parameters of the database creation workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of created Document instances
SeeDocument.createDocuments
Inherited from BaseActiveEffect.createEmbeddedDocuments
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

Inherited from BaseActiveEffect.createEmbeddedDocuments


### delete

- delete(    operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Delete this Document, removing it from the database.
ParametersOptionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The deleted Document instance, or undefined if not deleted
SeeDocument.deleteDocuments
Inherited from BaseActiveEffect.delete
- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

Delete this Document, removing it from the database.


#### Parameters

- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

`Optional`Parameters of the deletion operation


#### Returns Promise<undefined | Document<object, DocumentConstructionContext>>

The deleted Document instance, or undefined if not deleted


#### See

Document.deleteDocuments

Inherited from BaseActiveEffect.delete


### deleteEmbeddedDocuments

- deleteEmbeddedDocuments(    embeddedName: string,    ids: string[],    operation?: DatabaseDeleteOperation,): Promise<Document<object, DocumentConstructionContext>[]>Delete multiple embedded Document instances within a parent Document using provided string ids.
ParametersembeddedName: stringThe name of the embedded Document type
ids: string[]An array of string ids for each Document to be deleted
Optionaloperation: DatabaseDeleteOperation = {}Parameters of the database deletion workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of deleted Document instances
SeeDocument.deleteDocuments
Inherited from BaseActiveEffect.deleteEmbeddedDocuments
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

Inherited from BaseActiveEffect.deleteEmbeddedDocuments


### getEmbeddedCollection

- getEmbeddedCollection(embeddedName: string): DocumentCollectionObtain a reference to the Array of source data within the data object for a certain embedded Document name
ParametersembeddedName: stringThe name of the embedded Document type
Returns DocumentCollectionThe Collection instance of embedded Documents of the requested type
Inherited from BaseActiveEffect.getEmbeddedCollection
- embeddedName: stringThe name of the embedded Document type

Obtain a reference to the Array of source data within the data object for a certain embedded Document name


#### Parameters

- embeddedName: stringThe name of the embedded Document type

The name of the embedded Document type


#### Returns DocumentCollection

The Collection instance of embedded Documents of the requested type

Inherited from BaseActiveEffect.getEmbeddedCollection


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
Inherited from BaseActiveEffect.getEmbeddedDocument
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

Inherited from BaseActiveEffect.getEmbeddedDocument


### getFlag

- getFlag(scope: string, key: string): anyGet the value of a "flag" for this document
See the setFlag method for more details on flags
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns anyThe flag value
Inherited from BaseActiveEffect.getFlag
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

Inherited from BaseActiveEffect.getFlag


### getUserLevel

- getUserLevel(user?: BaseUser): DocumentOwnershipNumberGet the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.
This method returns the value recorded in Document ownership, regardless of the User's role, for example a
GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.
To test whether a user has a certain capability over the document, testUserPermission should be used.
ParametersOptionaluser: BaseUserThe User being tested
Returns DocumentOwnershipNumberA numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS
Inherited from BaseActiveEffect.getUserLevel
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

Inherited from BaseActiveEffect.getUserLevel


### migrateSystemData

- migrateSystemData(): objectFor Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.
Returns objectThe migrated system data object
Inherited from BaseActiveEffect.migrateSystemData

For Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.


#### Returns object

The migrated system data object

Inherited from BaseActiveEffect.migrateSystemData


### prepareDerivedData

- prepareDerivedData(): voidReturns voidInherit Doc


#### Returns void


#### Inherit Doc


### reset

- reset(): voidReset the state of this data instance back to mirror the contained source data, erasing any changes.
Returns voidInherited from BaseActiveEffect.reset

Reset the state of this data instance back to mirror the contained source data, erasing any changes.


#### Returns void

Inherited from BaseActiveEffect.reset


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
Inherited from BaseActiveEffect.setFlag
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

Inherited from BaseActiveEffect.setFlag


### testUserPermission

- testUserPermission(    user: BaseUser,    permission: DocumentOwnershipLevel,    options?: { exact?: boolean },): booleanTest whether a certain User has a requested permission level (or greater) over the Document
Parametersuser: BaseUserThe User being tested
permission: DocumentOwnershipLevelThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
Returns booleanDoes the user have this permission level over the Document?
Inherited from BaseActiveEffect.testUserPermission
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

Inherited from BaseActiveEffect.testUserPermission


### toJSON

- toJSON(): objectExtract the source data for the DataModel into a simple object format that can be serialized.
Returns objectThe document source data expressed as a plain object
Inherited from BaseActiveEffect.toJSON

Extract the source data for the DataModel into a simple object format that can be serialized.


#### Returns object

The document source data expressed as a plain object

Inherited from BaseActiveEffect.toJSON


### toObject

- toObject(source?: boolean): anyCopy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.
Parameterssource: boolean = trueDraw values from the underlying data source rather than transformed values
Returns anyThe extracted primitive object
Inherited from BaseActiveEffect.toObject
- source: boolean = trueDraw values from the underlying data source rather than transformed values

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.


#### Parameters

- source: boolean = trueDraw values from the underlying data source rather than transformed values

Draw values from the underlying data source rather than transformed values


#### Returns any

The extracted primitive object

Inherited from BaseActiveEffect.toObject


### traverseEmbeddedDocuments

- traverseEmbeddedDocuments(_parentPath?: string): Generator<any, void, any>Iterate over all embedded Documents that are hierarchical children of this Document.
ParametersOptional_parentPath: stringA parent field path already traversed
Returns Generator<any, void, any>YieldsInherited from BaseActiveEffect.traverseEmbeddedDocuments
- Optional_parentPath: stringA parent field path already traversed

Iterate over all embedded Documents that are hierarchical children of this Document.


#### Parameters

- Optional_parentPath: stringA parent field path already traversed

`Optional`A parent field path already traversed


#### Returns Generator<any, void, any>


#### Yields

Inherited from BaseActiveEffect.traverseEmbeddedDocuments


### unsetFlag

- unsetFlag(    scope: string,    key: string,): Promise<Document<object, DocumentConstructionContext>>Remove a flag assigned to the document
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns Promise<Document<object, DocumentConstructionContext>>The updated document instance
Inherited from BaseActiveEffect.unsetFlag
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

Inherited from BaseActiveEffect.unsetFlag


### update

- update(    data?: object,    operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Update this Document using incremental data, saving it to the database.
ParametersOptionaldata: object = {}Differential update data which modifies the existing values of this document
Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the update operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The updated Document instance, or undefined not updated
SeeDocument.updateDocuments
Inherited from BaseActiveEffect.update
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

Inherited from BaseActiveEffect.update


### updateDuration

- updateDuration(): ActiveEffectDurationUpdate derived Active Effect duration data.
Configure the remaining and label properties to be getters which lazily recompute only when necessary.
Returns ActiveEffectDuration

Update derived Active Effect duration data.
Configure the remaining and label properties to be getters which lazily recompute only when necessary.


#### Returns ActiveEffectDuration


### updateEmbeddedDocuments

- updateEmbeddedDocuments(    embeddedName: string,    updates?: object[],    operation?: DatabaseUpdateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Update multiple embedded Document instances within a parent Document using provided differential data.
ParametersembeddedName: stringThe name of the embedded Document type
updates: object[] = []An array of differential data objects, each used to update a
single Document
Optionaloperation: DatabaseUpdateOperation = {}Parameters of the database update workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated Document instances
SeeDocument.updateDocuments
Inherited from BaseActiveEffect.updateEmbeddedDocuments
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

Inherited from BaseActiveEffect.updateEmbeddedDocuments


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
Inherited from BaseActiveEffect.updateSource
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

Inherited from BaseActiveEffect.updateSource


### validate

- validate(options?: DataModelValidationOptions): booleanValidate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.
Parametersoptions: DataModelValidationOptions = {}Options which modify how the model is validated
Returns booleanWhether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.
ThrowsAn error thrown if validation is strict and a failure occurs.
Inherited from BaseActiveEffect.validate
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

Inherited from BaseActiveEffect.validate


### Protected_applyAdd

`Protected`- _applyAdd(    actor: documents.Actor,    change: EffectChangeData,    current: any,    delta: any,    changes: object,): voidProtectedApply an ActiveEffect that uses an ADD application mode.
The way that effects are added depends on the data type of the current value.
If the current value is null, the change value is assigned directly.
If the current type is a string, the change value is concatenated.
If the current type is a number, the change value is cast to numeric and added.
If the current type is an array, the change value is appended to the existing array if it matches in type.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
current: anyThe current value being modified
delta: anyThe parsed value of the change object
changes: objectAn object which accumulates changes to be applied
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

`Protected`Apply an ActiveEffect that uses an ADD application mode.
The way that effects are added depends on the data type of the current value.

If the current value is null, the change value is assigned directly.
If the current type is a string, the change value is concatenated.
If the current type is a number, the change value is cast to numeric and added.
If the current type is an array, the change value is appended to the existing array if it matches in type.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

The Actor to whom this effect should be applied

The change data being applied

The current value being modified

The parsed value of the change object

An object which accumulates changes to be applied


#### Returns void


### Protected_applyCustom

`Protected`- _applyCustom(    actor: documents.Actor,    change: EffectChangeData,    current: any,    delta: any,    changes: object,): voidProtectedApply an ActiveEffect that uses a CUSTOM application mode.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
current: anyThe current value being modified
delta: anyThe parsed value of the change object
changes: objectAn object which accumulates changes to be applied
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

`Protected`Apply an ActiveEffect that uses a CUSTOM application mode.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

The Actor to whom this effect should be applied

The change data being applied

The current value being modified

The parsed value of the change object

An object which accumulates changes to be applied


#### Returns void


### Protected_applyLegacy

`Protected`- _applyLegacy(    actor: documents.Actor,    change: EffectChangeData,    changes: Record<string, any>,): voidProtectedApply this ActiveEffect to a provided Actor using a heuristic to infer the value types based on the current value
and/or the default value in the template.json.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied.
change: EffectChangeDataThe change data being applied.
changes: Record<string, any>The aggregate update paths and their updated values.
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied.
- change: EffectChangeDataThe change data being applied.
- changes: Record<string, any>The aggregate update paths and their updated values.

`Protected`Apply this ActiveEffect to a provided Actor using a heuristic to infer the value types based on the current value
and/or the default value in the template.json.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied.
- change: EffectChangeDataThe change data being applied.
- changes: Record<string, any>The aggregate update paths and their updated values.

The Actor to whom this effect should be applied.

The change data being applied.

The aggregate update paths and their updated values.


#### Returns void


### Protected_applyMultiply

`Protected`- _applyMultiply(    actor: documents.Actor,    change: EffectChangeData,    current: any,    delta: any,    changes: object,): voidProtectedApply an ActiveEffect that uses a MULTIPLY application mode.
Changes which MULTIPLY must be numeric to allow for multiplication.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
current: anyThe current value being modified
delta: anyThe parsed value of the change object
changes: objectAn object which accumulates changes to be applied
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

`Protected`Apply an ActiveEffect that uses a MULTIPLY application mode.
Changes which MULTIPLY must be numeric to allow for multiplication.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

The Actor to whom this effect should be applied

The change data being applied

The current value being modified

The parsed value of the change object

An object which accumulates changes to be applied


#### Returns void


### Protected_applyOverride

`Protected`- _applyOverride(    actor: documents.Actor,    change: EffectChangeData,    current: any,    delta: any,    changes: object,): voidProtectedApply an ActiveEffect that uses an OVERRIDE application mode.
Numeric data is overridden by numbers, while other data types are overridden by any value
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
current: anyThe current value being modified
delta: anyThe parsed value of the change object
changes: objectAn object which accumulates changes to be applied
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

`Protected`Apply an ActiveEffect that uses an OVERRIDE application mode.
Numeric data is overridden by numbers, while other data types are overridden by any value


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

The Actor to whom this effect should be applied

The change data being applied

The current value being modified

The parsed value of the change object

An object which accumulates changes to be applied


#### Returns void


### Protected_applyUpgrade

`Protected`- _applyUpgrade(    actor: documents.Actor,    change: EffectChangeData,    current: any,    delta: any,    changes: object,): voidProtectedApply an ActiveEffect that uses an UPGRADE, or DOWNGRADE application mode.
Changes which UPGRADE or DOWNGRADE must be numeric to allow for comparison.
Parametersactor: documents.ActorThe Actor to whom this effect should be applied
change: EffectChangeDataThe change data being applied
current: anyThe current value being modified
delta: anyThe parsed value of the change object
changes: objectAn object which accumulates changes to be applied
Returns void
- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

`Protected`Apply an ActiveEffect that uses an UPGRADE, or DOWNGRADE application mode.
Changes which UPGRADE or DOWNGRADE must be numeric to allow for comparison.


#### Parameters

- actor: documents.ActorThe Actor to whom this effect should be applied
- change: EffectChangeDataThe change data being applied
- current: anyThe current value being modified
- delta: anyThe parsed value of the change object
- changes: objectAn object which accumulates changes to be applied

The Actor to whom this effect should be applied

The change data being applied

The current value being modified

The parsed value of the change object

An object which accumulates changes to be applied


#### Returns void


### Protected_displayScrollingStatus

`Protected`- _displayScrollingStatus(enabled: boolean): voidProtectedDisplay changes to active effects as scrolling Token status text.
Parametersenabled: booleanIs the active effect currently enabled?
Returns void
- enabled: booleanIs the active effect currently enabled?

`Protected`Display changes to active effects as scrolling Token status text.


#### Parameters

- enabled: booleanIs the active effect currently enabled?

Is the active effect currently enabled?


#### Returns void


### Protected_initialize

`Protected`- _initialize(options?: object): voidProtectedInitialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.
ParametersOptionaloptions: object = {}Options provided to the model constructor
Returns voidInherited from BaseActiveEffect._initialize
- Optionaloptions: object = {}Options provided to the model constructor

`Protected`Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.


#### Parameters

- Optionaloptions: object = {}Options provided to the model constructor

`Optional`Options provided to the model constructor


#### Returns void

Inherited from BaseActiveEffect._initialize


### Protected_initializeSource

`Protected`- _initializeSource(    data: object | DataModel<object, DataModelConstructionContext>,    options?: object,): objectProtectedInitialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.
Parametersdata: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
Optionaloptions: object = {}Options provided to the model constructor
Returns objectMigrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument
Inherited from BaseActiveEffect._initializeSource
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

`data`Inherited from BaseActiveEffect._initializeSource


### Protected_preDelete

`Protected`- _preDelete(options: object, user: BaseUser): Promise<boolean | void>ProtectedPre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parametersoptions: objectAdditional options which modify the deletion request
user: BaseUserThe User requesting the document deletion
Returns Promise<boolean | void>A return value of false indicates the deletion operation should be cancelled.
Inherited from BaseActiveEffect._preDelete
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

Inherited from BaseActiveEffect._preDelete


### Protected_preUpdate

`Protected`- _preUpdate(    changes: object,    options: object,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parameterschanges: objectThe candidate changes to the Document
options: objectAdditional options which modify the update request
user: BaseUserThe User requesting the document update
Returns Promise<boolean | void>A return value of false indicates the update operation should be cancelled.
Inherited from BaseActiveEffect._preUpdate
- changes: objectThe candidate changes to the Document
- options: objectAdditional options which modify the update request
- user: BaseUserThe User requesting the document update

`Protected`Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.


#### Parameters

- changes: objectThe candidate changes to the Document
- options: objectAdditional options which modify the update request
- user: BaseUserThe User requesting the document update

The candidate changes to the Document

Additional options which modify the update request

The User requesting the document update


#### Returns Promise<boolean | void>

A return value of false indicates the update operation should be cancelled.

Inherited from BaseActiveEffect._preUpdate


### Protected_requiresDurationUpdate

`Protected`- _requiresDurationUpdate(): booleanProtectedDetermine whether the ActiveEffect requires a duration update.
True if the worldTime has changed for an effect whose duration is tracked in seconds.
True if the combat turn has changed for an effect tracked in turns where the effect target is a combatant.
Returns boolean

`Protected`Determine whether the ActiveEffect requires a duration update.
True if the worldTime has changed for an effect whose duration is tracked in seconds.
True if the combat turn has changed for an effect tracked in turns where the effect target is a combatant.


#### Returns boolean


### Static_addDataFieldMigration

`Static`- _addDataFieldMigration(    data: object,    oldKey: string,    newKey: string,    apply?: (data: object) => any,): booleanInternalDefine a simple migration from one field name to another.
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being migrated
oldKey: stringThe old field name
newKey: stringThe new field name
Optionalapply: (data: object) => anyAn application function, otherwise the old value is applied
Returns booleanWhether a migration was applied.
Inherited from BaseActiveEffect._addDataFieldMigration
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

Inherited from BaseActiveEffect._addDataFieldMigration


### Static_addDataFieldShim

`Static`- _addDataFieldShim(    data: object,    oldKey: string,    newKey: string,    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding a migration shim
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being shimmed
oldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: { value?: any; warning?: string } = {}Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseActiveEffect._addDataFieldShim
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

Inherited from BaseActiveEffect._addDataFieldShim


### Static_addDataFieldShims

`Static`- _addDataFieldShims(    data: object,    shims: { [oldKey: string]: string },    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding migration shims.
Parametersdata: objectThe data object being shimmed
shims: { [oldKey: string]: string }The mapping of old keys to new keys
Optionaloptions: { value?: any; warning?: string }Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseActiveEffect._addDataFieldShims
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

Inherited from BaseActiveEffect._addDataFieldShims


### Static_clearFieldsRecusively

`Static`- _clearFieldsRecusively(data: object, fieldNames: string[]): voidInternalClear the fields from the given Document data recursively.
Parametersdata: objectThe (partial) Document data
fieldNames: string[]The fields that are cleared
Returns voidInherited from BaseActiveEffect._clearFieldsRecusively
- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

`Internal`Clear the fields from the given Document data recursively.


#### Parameters

- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

The (partial) Document data

The fields that are cleared


#### Returns void

Inherited from BaseActiveEffect._clearFieldsRecusively


### Static_initializationOrder

`Static`- _initializationOrder(): Generator<any[], void, unknown>Returns Generator<any[], void, unknown>Inherited from BaseActiveEffect._initializationOrder


#### Returns Generator<any[], void, unknown>

Inherited from BaseActiveEffect._initializationOrder


### Static_logDataFieldMigration

`Static`- _logDataFieldMigration(oldKey: string, newKey: string, options?: object): voidInternalLog a compatbility warning for the data field migration.
ParametersoldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: object = {}Options passed to foundry.utils.logCompatibilityWarning
Returns voidInherited from BaseActiveEffect._logDataFieldMigration
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

Inherited from BaseActiveEffect._logDataFieldMigration


### StaticapplyField

`Static`- applyField(model: DataModel, change: EffectChangeData, field?: any): anyApply EffectChangeData to a field within a DataModel.
Parametersmodel: DataModelThe model instance.
change: EffectChangeDataThe change to apply.
Optionalfield: anyThe field. If not supplied, it will be retrieved from the supplied model.
Returns anyThe updated value.
- model: DataModelThe model instance.
- change: EffectChangeDataThe change to apply.
- Optionalfield: anyThe field. If not supplied, it will be retrieved from the supplied model.

Apply EffectChangeData to a field within a DataModel.


#### Parameters

- model: DataModelThe model instance.
- change: EffectChangeDataThe change to apply.
- Optionalfield: anyThe field. If not supplied, it will be retrieved from the supplied model.

The model instance.

The change to apply.

`Optional`The field. If not supplied, it will be retrieved from the supplied model.


#### Returns any

The updated value.


### StaticcanUserCreate

`Static`- canUserCreate(user: BaseUser): booleanTest whether a given User has sufficient permissions to create Documents of this type in general. This does not
guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
may also be present.
Generally speaking, this method is used to verify whether a User should be presented with the option to create
Documents of this type in the UI.
Parametersuser: BaseUserThe User being tested
Returns booleanDoes the User have a sufficient role to create?
Inherited from BaseActiveEffect.canUserCreate
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

Inherited from BaseActiveEffect.canUserCreate


### StaticcleanData

`Static`- cleanData(source?: object, options?: object): objectClean a data source object to conform to a specific provided schema.
ParametersOptionalsource: object = {}The source data object
Optionaloptions: object = {}Additional options which are passed to field cleaning methods
Returns objectThe cleaned source data, which is the same object as the source argument
Inherited from BaseActiveEffect.cleanData
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

`source`Inherited from BaseActiveEffect.cleanData


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

Inherited from BaseActiveEffect.create
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

`const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});`Inherited from BaseActiveEffect.create


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

Inherited from BaseActiveEffect.createDocuments
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

`const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});`Inherited from BaseActiveEffect.createDocuments


### StaticdefineSchema

`Static`- defineSchema(): {    _id: DocumentIdField;    _stats: DocumentStatsField;    changes: ArrayField<SchemaField>;    description: HTMLField;    disabled: BooleanField;    duration: SchemaField;    flags: DocumentFlagsField;    img: FilePathField;    name: StringField;    origin: StringField;    sort: IntegerSortField;    statuses: SetField;    system: TypeDataField;    tint: ColorField;    transfer: BooleanField;    type: DocumentTypeField;}Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.
Returns {    _id: DocumentIdField;    _stats: DocumentStatsField;    changes: ArrayField<SchemaField>;    description: HTMLField;    disabled: BooleanField;    duration: SchemaField;    flags: DocumentFlagsField;    img: FilePathField;    name: StringField;    origin: StringField;    sort: IntegerSortField;    statuses: SetField;    system: TypeDataField;    tint: ColorField;    transfer: BooleanField;    type: DocumentTypeField;}Inherited from BaseActiveEffect.defineSchema

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.


#### Returns {    _id: DocumentIdField;    _stats: DocumentStatsField;    changes: ArrayField<SchemaField>;    description: HTMLField;    disabled: BooleanField;    duration: SchemaField;    flags: DocumentFlagsField;    img: FilePathField;    name: StringField;    origin: StringField;    sort: IntegerSortField;    statuses: SetField;    system: TypeDataField;    tint: ColorField;    transfer: BooleanField;    type: DocumentTypeField;}

Inherited from BaseActiveEffect.defineSchema


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

Inherited from BaseActiveEffect.deleteDocuments
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

`const actor = await pack.getDocument(documentId);const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});`Inherited from BaseActiveEffect.deleteDocuments


### StaticfromJSON

`Static`- fromJSON(json: string): DataModel<object, DataModelConstructionContext>Create a DataModel instance using a provided serialized JSON string.
Parametersjson: stringSerialized document data in string format
Returns DataModel<object, DataModelConstructionContext>A constructed data model instance
Inherited from BaseActiveEffect.fromJSON
- json: stringSerialized document data in string format

Create a DataModel instance using a provided serialized JSON string.


#### Parameters

- json: stringSerialized document data in string format

Serialized document data in string format


#### Returns DataModel<object, DataModelConstructionContext>

A constructed data model instance

Inherited from BaseActiveEffect.fromJSON


### StaticfromSource

`Static`- fromSource(    source: object,    context?: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions,): DataModel<object, DataModelConstructionContext>Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.
Parameterssource: objectInitial document data which comes from a trusted source.
Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context
Returns DataModel<object, DataModelConstructionContext>Inherited from BaseActiveEffect.fromSource
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

Inherited from BaseActiveEffect.fromSource


### StaticfromStatusEffect

`Static`- fromStatusEffect(    statusId: string,    options?: DocumentConstructionContext,): Promise<documents.ActiveEffect>Create an ActiveEffect instance from some status effect ID.
Delegates to ActiveEffect._fromStatusEffect to create the ActiveEffect instance
after creating the ActiveEffect data from the status effect data if CONFIG.statusEffects.
ParametersstatusId: stringThe status effect ID.
Optionaloptions: DocumentConstructionContext = {}Additional options to pass to the ActiveEffect constructor.
Returns Promise<documents.ActiveEffect>The created ActiveEffect instance.
ThrowsAn error if there is no status effect in CONFIG.statusEffects with the given status ID and if
the status has implicit statuses but doesn't have a static _id.
- statusId: stringThe status effect ID.
- Optionaloptions: DocumentConstructionContext = {}Additional options to pass to the ActiveEffect constructor.

Create an ActiveEffect instance from some status effect ID.
Delegates to ActiveEffect._fromStatusEffect to create the ActiveEffect instance
after creating the ActiveEffect data from the status effect data if CONFIG.statusEffects.

`CONFIG.statusEffects`
#### Parameters

- statusId: stringThe status effect ID.
- Optionaloptions: DocumentConstructionContext = {}Additional options to pass to the ActiveEffect constructor.

The status effect ID.

`Optional`Additional options to pass to the ActiveEffect constructor.


#### Returns Promise<documents.ActiveEffect>

The created ActiveEffect instance.


#### Throws

An error if there is no status effect in CONFIG.statusEffects with the given status ID and if
the status has implicit statuses but doesn't have a static _id.

`CONFIG.statusEffects`
### Staticget

`Static`- get(    documentId: string,    operation?: DatabaseGetOperation,): null | Document<object, DocumentConstructionContext>Get a World-level Document of this type by its id.
ParametersdocumentId: stringThe Document ID
Optionaloperation: DatabaseGetOperation = {}Parameters of the get operation
Returns null | Document<object, DocumentConstructionContext>The retrieved Document, or null
Inherited from BaseActiveEffect.get
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

Inherited from BaseActiveEffect.get


### StaticgetCollectionName

`Static`- getCollectionName(name: string): null | stringA compatibility method that returns the appropriate name of an embedded collection within this Document.
Parametersname: stringAn existing collection name or a document name.
Returns null | stringThe provided collection name if it exists, the first available collection for the
document name provided, or null if no appropriate embedded collection could be found.
Example: Passing an existing collection name.Actor.implementation.getCollectionName("items");// returns "items"
Copy

Example: Passing a document name.Actor.implementation.getCollectionName("Item");// returns "items"
Copy

Inherited from BaseActiveEffect.getCollectionName
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

`Actor.implementation.getCollectionName("Item");// returns "items"`Inherited from BaseActiveEffect.getCollectionName


### StaticgetInitialDuration

`Static`- getInitialDuration(): { duration: { startTime: number } }Retrieve the initial duration configuration.
Returns { duration: { startTime: number } }

Retrieve the initial duration configuration.


#### Returns { duration: { startTime: number } }


### StaticmigrateData

`Static`- migrateData(data: any): objectMigrate candidate source data for this DataModel which may require initial cleaning or transformations.
Parametersdata: anyThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseActiveEffect.migrateData
- data: anyThe candidate source data from which the model will be constructed

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.


#### Parameters

- data: anyThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseActiveEffect.migrateData


### StaticmigrateDataSafe

`Static`- migrateDataSafe(source: object): objectWrap data migration in a try/catch which attempts it safely
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseActiveEffect.migrateDataSafe
- source: objectThe candidate source data from which the model will be constructed

Wrap data migration in a try/catch which attempts it safely


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseActiveEffect.migrateDataSafe


### StaticshimData

`Static`- shimData(data: any, options: any): objectTake data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.
Parametersdata: anyData which matches the current schema
options: anyAdditional shimming options
Returns objectData with added backwards-compatible properties, which is the same object as
the data argument
Inherited from BaseActiveEffect.shimData
- data: anyData which matches the current schema
- options: anyAdditional shimming options

Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.


#### Parameters

- data: anyData which matches the current schema
- options: anyAdditional shimming options

Data which matches the current schema

Additional shimming options


#### Returns object

Data with added backwards-compatible properties, which is the same object as
the data argument

`data`Inherited from BaseActiveEffect.shimData


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

Inherited from BaseActiveEffect.updateDocuments
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

`const actor = await pack.getDocument(documentId);const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  {pack: "mymodule.mypack"});`Inherited from BaseActiveEffect.updateDocuments


### StaticvalidateJoint

`Static`- validateJoint(data: object): voidEvaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.
Parametersdata: objectCandidate data for the model
Returns voidThrowsAn error if a validation failure is detected
Inherited from BaseActiveEffect.validateJoint
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

Inherited from BaseActiveEffect.validateJoint


### Protected Static_fromStatusEffect

`Protected``Static`- _fromStatusEffect(    statusId: string,    effectData: ActiveEffectData,    options?: DocumentConstructionContext,): Promise<documents.ActiveEffect>ProtectedCreate an ActiveEffect instance from status effect data.
Called by ActiveEffect.fromStatusEffect.
ParametersstatusId: stringThe status effect ID.
effectData: ActiveEffectDataThe status effect data.
Optionaloptions: DocumentConstructionContextAdditional options to pass to the ActiveEffect constructor.
Returns Promise<documents.ActiveEffect>The created ActiveEffect instance.
- statusId: stringThe status effect ID.
- effectData: ActiveEffectDataThe status effect data.
- Optionaloptions: DocumentConstructionContextAdditional options to pass to the ActiveEffect constructor.

`Protected`Create an ActiveEffect instance from status effect data.
Called by ActiveEffect.fromStatusEffect.


#### Parameters

- statusId: stringThe status effect ID.
- effectData: ActiveEffectDataThe status effect data.
- Optionaloptions: DocumentConstructionContextAdditional options to pass to the ActiveEffect constructor.

The status effect ID.

The status effect data.

`Optional`Additional options to pass to the ActiveEffect constructor.


#### Returns Promise<documents.ActiveEffect>

The created ActiveEffect instance.


### Protected Static_onCreateOperation

`Protected``Static`- _onCreateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseCreateOperation,    user: BaseUser,): Promise<void>ProtectedPost-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onCreate workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were created
operation: DatabaseCreateOperationParameters of the database creation operation
user: BaseUserThe User who performed the creation operation
Returns Promise<void>Inherited from BaseActiveEffect._onCreateOperation
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

Inherited from BaseActiveEffect._onCreateOperation


### Protected Static_onDeleteOperation

`Protected``Static`- _onDeleteOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseDeleteOperation,    user: BaseUser,): Promise<void>ProtectedPost-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onDelete workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were deleted
operation: DatabaseDeleteOperationParameters of the database deletion operation
user: BaseUserThe User who performed the deletion operation
Returns Promise<void>Inherited from BaseActiveEffect._onDeleteOperation
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

Inherited from BaseActiveEffect._onDeleteOperation


### Protected Static_onUpdateOperation

`Protected``Static`- _onUpdateOperation(    documents: Document<object, DocumentConstructionContext>[],    operation: DatabaseUpdateOperation,    user: BaseUser,): Promise<void>ProtectedPost-process an update operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.
This batch-wise workflow occurs after individual _onUpdate workflows.
Parametersdocuments: Document<object, DocumentConstructionContext>[]The Document instances which were updated
operation: DatabaseUpdateOperationParameters of the database update operation
user: BaseUserThe User who performed the update operation
Returns Promise<void>Inherited from BaseActiveEffect._onUpdateOperation
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

Inherited from BaseActiveEffect._onUpdateOperation


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
Inherited from BaseActiveEffect._preCreateOperation
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

Inherited from BaseActiveEffect._preCreateOperation


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
Inherited from BaseActiveEffect._preDeleteOperation
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

Inherited from BaseActiveEffect._preDeleteOperation


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
Inherited from BaseActiveEffect._preUpdateOperation
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

Inherited from BaseActiveEffect._preUpdateOperation


### Settings

- Protected
- Inherited
- Internal


### On This Page

