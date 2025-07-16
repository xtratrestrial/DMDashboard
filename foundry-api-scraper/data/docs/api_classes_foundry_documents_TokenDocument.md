# TokenDocument | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.documents.TokenDocument.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- documents
- TokenDocument


# Class TokenDocument

The client-side Token document which extends the common BaseToken document model.

The following fields must no be altered from source during data preparation:
x, y, elevation, width, height, shape.

`x``y``elevation``width``height``shape`
### Hook Events

- hookEvents.moveToken
- hookEvents.pauseToken
- hookEvents.preMoveToken
- hookEvents.stopToken


#### Mixes

CanvasDocumentMixin


#### See

- foundry.documents.Scene: The Scene document type which contains Token documents
- foundry.applications.sheets.TokenConfig: The Token configuration application


#### Hierarchy (View Summary)

- BaseToken<this>TokenDocument
- TokenDocument

- TokenDocument


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new TokenDocument(    data?: Partial<TokenData>,    options?: DocumentConstructionContext,): TokenDocumentParametersOptionaldata: Partial<TokenData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.
Returns TokenDocumentInherited from BaseToken.constructor
- Optionaldata: Partial<TokenData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.


#### Parameters

- Optionaldata: Partial<TokenData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: DocumentConstructionContext = {}Context and data validation options which affects initial model construction.

`Optional`Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

`Optional`Context and data validation options which affects initial model construction.


#### Returns TokenDocument

Inherited from BaseToken.constructor


## Properties


### Internal_movementContinuation

`Internal`The movement continuation state of this Token document.


### _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from BaseToken._source


### actors

A singleton collection which holds a reference to the synthetic token actor by its base actor's ID.


### parent

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from BaseToken.parent


### regions

The Regions this Token is currently in.


### Static Internal_schema

`Static``Internal`The defined and cached Data Schema for all instances of this DataModel.

Inherited from BaseToken._schema


### StaticDEFAULT_ICON

`Static`The default icon used for newly created Token documents

Inherited from BaseToken.DEFAULT_ICON


### StaticLOCALIZATION_PREFIXES

`Static`Inherited from BaseToken.LOCALIZATION_PREFIXES


### Staticmetadata

`Static`Default metadata which applies to each instance of this Document type.

Inherited from BaseToken.metadata


### Static ReadonlyMOVEMENT_FIELDS

`Static``Readonly`The fields of the data model for which changes count as a movement action.

Inherited from BaseToken.MOVEMENT_FIELDS


## Accessors


### actor

- get actor(): null | documents.ActorA reference to the Actor this Token modifies.
If actorLink is true, then the document is the primary Actor document.
Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.
Returns null | documents.Actor

A reference to the Actor this Token modifies.
If actorLink is true, then the document is the primary Actor document.
Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.


#### Returns null | documents.Actor


### baseActor

- get baseActor(): null | documents.ActorA reference to the base, World-level Actor this token represents.
Returns null | documents.Actor

A reference to the base, World-level Actor this token represents.


#### Returns null | documents.Actor


### combatant

- get combatant(): null | documents.CombatantReturn a reference to a Combatant that represents this Token, if one is present in the current encounter.
Returns null | documents.Combatant

Return a reference to a Combatant that represents this Token, if one is present in the current encounter.


#### Returns null | documents.Combatant


### Abstractcompendium

`Abstract`- get compendium(): anyA reference to the Compendium Collection containing this Document, if any, and otherwise null.
Returns anyInherited from CanvasDocumentMixin(BaseToken).compendium

A reference to the Compendium Collection containing this Document, if any, and otherwise null.


#### Returns any

Inherited from CanvasDocumentMixin(BaseToken).compendium


### hasDistinctSubjectTexture

- get hasDistinctSubjectTexture(): booleanCheck if the document has a distinct subject texture (inferred or explicit).
Returns boolean

Check if the document has a distinct subject texture (inferred or explicit).


#### Returns boolean


### id

- get id(): null | stringThe canonical identifier for this Document.
Returns null | stringInherited from CanvasDocumentMixin(BaseToken).id

The canonical identifier for this Document.


#### Returns null | string

Inherited from CanvasDocumentMixin(BaseToken).id


### inCombat

- get inCombat(): booleanAn indicator for whether this Token is currently involved in the active combat encounter.
Returns boolean

An indicator for whether this Token is currently involved in the active combat encounter.


#### Returns boolean


### inCompendium

- get inCompendium(): booleanIs this document in a compendium?
Returns booleanInherited from CanvasDocumentMixin(BaseToken).inCompendium

Is this document in a compendium?


#### Returns boolean

Inherited from CanvasDocumentMixin(BaseToken).inCompendium


### invalid

- get invalid(): booleanIs the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.
Returns booleanInherited from CanvasDocumentMixin(BaseToken).invalid

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.


#### Returns boolean

Inherited from CanvasDocumentMixin(BaseToken).invalid


### isEmbedded

- get isEmbedded(): booleanIs this document embedded within a parent document?
Returns booleanInherited from CanvasDocumentMixin(BaseToken).isEmbedded

Is this document embedded within a parent document?


#### Returns boolean

Inherited from CanvasDocumentMixin(BaseToken).isEmbedded


### isLinked

- get isLinked(): booleanA convenient reference for whether this TokenDocument is linked to the Actor it represents, or is a synthetic copy
Returns boolean

A convenient reference for whether this TokenDocument is linked to the Actor it represents, or is a synthetic copy


#### Returns boolean


### isOwner

- get isOwner(): booleanAn indicator for whether the current User has full control over this Token document.
Returns boolean

An indicator for whether the current User has full control over this Token document.


#### Returns boolean


### isSecret

- get isSecret(): booleanDoes this TokenDocument have the SECRET disposition and is the current user lacking the necessary permissions
that would reveal this secret?
Returns boolean

Does this TokenDocument have the SECRET disposition and is the current user lacking the necessary permissions
that would reveal this secret?


#### Returns boolean


### movement

- get movement(): DeepReadonly<TokenMovementData>The current movement data of this Token document.
Returns DeepReadonly<TokenMovementData>

The current movement data of this Token document.


#### Returns DeepReadonly<TokenMovementData>


### movementHistory

- get movementHistory(): TokenMeasuredMovementWaypoint[]The movement history.
Returns TokenMeasuredMovementWaypoint[]

The movement history.


#### Returns TokenMeasuredMovementWaypoint[]


### schema

- get schema(): SchemaFieldDefine the data schema for this document instance.
Returns SchemaFieldInherited from CanvasDocumentMixin(BaseToken).schema

Define the data schema for this document instance.


#### Returns SchemaField

Inherited from CanvasDocumentMixin(BaseToken).schema


### uuid

- get uuid(): stringA Universally Unique Identifier (uuid) for this Document instance.
Returns stringInherited from CanvasDocumentMixin(BaseToken).uuid

A Universally Unique Identifier (uuid) for this Document instance.


#### Returns string

Inherited from CanvasDocumentMixin(BaseToken).uuid


### validationFailures

- get validationFailures(): {    fields: null    | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}An array of validation failure instances which may have occurred when this instance was last validated.
Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}Inherited from CanvasDocumentMixin(BaseToken).validationFailures

An array of validation failure instances which may have occurred when this instance was last validated.


#### Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}

Inherited from CanvasDocumentMixin(BaseToken).validationFailures


### StaticbaseDocument

`Static`- get baseDocument(): typeof DocumentThe base document definition that this document class extends from.
Returns typeof DocumentInherited from CanvasDocumentMixin(BaseToken).baseDocument

The base document definition that this document class extends from.


#### Returns typeof Document

Inherited from CanvasDocumentMixin(BaseToken).baseDocument


### StaticcollectionName

`Static`- get collectionName(): stringThe named collection to which this Document belongs.
Returns stringInherited from CanvasDocumentMixin(BaseToken).collectionName

The named collection to which this Document belongs.


#### Returns string

Inherited from CanvasDocumentMixin(BaseToken).collectionName


### Staticdatabase

`Static`- get database(): abstract.DatabaseBackendThe database backend used to execute operations and handle results.
Returns abstract.DatabaseBackendInherited from CanvasDocumentMixin(BaseToken).database

The database backend used to execute operations and handle results.


#### Returns abstract.DatabaseBackend

Inherited from CanvasDocumentMixin(BaseToken).database


### StaticdocumentName

`Static`- get documentName(): stringThe canonical name of this Document type, for example "Actor".
Returns stringInherited from CanvasDocumentMixin(BaseToken).documentName

The canonical name of this Document type, for example "Actor".


#### Returns string

Inherited from CanvasDocumentMixin(BaseToken).documentName


### StatichasTypeData

`Static`- get hasTypeData(): booleanDoes this Document support additional subtypes?
Returns booleanInherited from CanvasDocumentMixin(BaseToken).hasTypeData

Does this Document support additional subtypes?


#### Returns boolean

Inherited from CanvasDocumentMixin(BaseToken).hasTypeData


### Statichierarchy

`Static`- get hierarchy(): Readonly<Record<string, any>>The Embedded Document hierarchy for this Document.
Returns Readonly<Record<string, any>>Inherited from CanvasDocumentMixin(BaseToken).hierarchy

The Embedded Document hierarchy for this Document.


#### Returns Readonly<Record<string, any>>

Inherited from CanvasDocumentMixin(BaseToken).hierarchy


### Staticimplementation

`Static`- get implementation(): typeof DocumentReturn a reference to the configured subclass of this base Document type.
Returns typeof DocumentInherited from CanvasDocumentMixin(BaseToken).implementation

Return a reference to the configured subclass of this base Document type.


#### Returns typeof Document

Inherited from CanvasDocumentMixin(BaseToken).implementation


### Staticschema

`Static`- get schema(): SchemaFieldEnsure that all Document classes share the same schema of their base declaration.
Returns SchemaFieldInherited from CanvasDocumentMixin(BaseToken).schema

Ensure that all Document classes share the same schema of their base declaration.


#### Returns SchemaField

Inherited from CanvasDocumentMixin(BaseToken).schema


### StaticTYPES

`Static`- get TYPES(): string[]The allowed types which may exist for this Document class.
Returns string[]Inherited from CanvasDocumentMixin(BaseToken).TYPES

The allowed types which may exist for this Document class.


#### Returns string[]

Inherited from CanvasDocumentMixin(BaseToken).TYPES


## Methods


### _configure

- _configure(__namedParameters?: { pack?: null; parentCollection?: null }): voidParameters__namedParameters: { pack?: null; parentCollection?: null } = {}Returns voidInherited from BaseToken._configure
- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Parameters

- __namedParameters: { pack?: null; parentCollection?: null } = {}


#### Returns void

Inherited from BaseToken._configure


### _getParentCollection

- _getParentCollection(parentCollection?: null | string): null | stringInternalIdentify the collection in a parent Document that this Document belongs to, if any.
ParametersOptionalparentCollection: null | stringAn explicitly provided parent collection name.
Returns null | stringInherited from BaseToken._getParentCollection
- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Internal`Identify the collection in a parent Document that this Document belongs to, if any.


#### Parameters

- OptionalparentCollection: null | stringAn explicitly provided parent collection name.

`Optional`An explicitly provided parent collection name.


#### Returns null | string

Inherited from BaseToken._getParentCollection


### _gridOffsetToPosition

- _gridOffsetToPosition(    offset: GridOffset3D,    data?: Partial<TokenDimensions>,): ElevatedPointInternalGet the position of the Token from the top-left grid offset.
Parametersoffset: GridOffset3DThe top-left grid offset
Optionaldata: Partial<TokenDimensions> = {}The dimensions that override the current dimensions
Returns ElevatedPointThe snapped position
Inherited from BaseToken._gridOffsetToPosition
- offset: GridOffset3DThe top-left grid offset
- Optionaldata: Partial<TokenDimensions> = {}The dimensions that override the current dimensions

`Internal`Get the position of the Token from the top-left grid offset.


#### Parameters

- offset: GridOffset3DThe top-left grid offset
- Optionaldata: Partial<TokenDimensions> = {}The dimensions that override the current dimensions

The top-left grid offset

`Optional`The dimensions that override the current dimensions


#### Returns ElevatedPoint

The snapped position

Inherited from BaseToken._gridOffsetToPosition


### _identifyRegions

- _identifyRegions(changes?: object): string[]InternalIdentify the Regions the Token currently is or is going to be in after the changes are applied.
ParametersOptionalchanges: object = {}The changes that will be applied to this Token
Returns string[]The Region IDs this Token is in after the changes are applied (sorted)
- Optionalchanges: object = {}The changes that will be applied to this Token

`Internal`Identify the Regions the Token currently is or is going to be in after the changes are applied.


#### Parameters

- Optionalchanges: object = {}The changes that will be applied to this Token

`Optional`The changes that will be applied to this Token


#### Returns string[]

The Region IDs this Token is in after the changes are applied (sorted)


### _initialize

- _initialize(options?: {}): voidInitialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.
Parametersoptions: {} = {}Options provided to the model constructor
Returns voidOverrides BaseToken._initialize
- options: {} = {}Options provided to the model constructor

Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.


#### Parameters

- options: {} = {}Options provided to the model constructor

Options provided to the model constructor


#### Returns void

Overrides BaseToken._initialize


### _initializeSource

- _initializeSource(data: any, options: any): objectInitialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.
Parametersdata: anyThe candidate source data from which the model will be constructed
options: anyOptions provided to the model constructor
Returns objectMigrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument
Overrides BaseToken._initializeSource
- data: anyThe candidate source data from which the model will be constructed
- options: anyOptions provided to the model constructor

Initialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.


#### Parameters

- data: anyThe candidate source data from which the model will be constructed
- options: anyOptions provided to the model constructor

The candidate source data from which the model will be constructed

Options provided to the model constructor


#### Returns object

Migrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument

`data`Overrides BaseToken._initializeSource


### _onCreate

- _onCreate(data: any, options: any, userId: any): voidPost-process a creation operation for a single Document instance. Post-operation events occur for all connected
clients.
Parametersdata: anyThe initial data object provided to the document creation request
options: anyAdditional options which modify the creation request
userId: anyThe id of the User requesting the document update
Returns voidOverrides BaseToken._onCreate
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

Overrides BaseToken._onCreate


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
Returns voidOverrides BaseToken._onDelete
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

Overrides BaseToken._onDelete


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
Returns voidOverrides BaseToken._onUpdate
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

Overrides BaseToken._onUpdate


### _onUpdateBaseActor

- _onUpdateBaseActor(    update?: object,    options?: Partial<DatabaseUpdateOperation>,): voidInternalWhen the base Actor for a TokenDocument changes, we may need to update its Actor instance
ParametersOptionalupdate: object = {}The update delta
Optionaloptions: Partial<DatabaseUpdateOperation> = {}The database operation that was performed
Returns void
- Optionalupdate: object = {}The update delta
- Optionaloptions: Partial<DatabaseUpdateOperation> = {}The database operation that was performed

`Internal`When the base Actor for a TokenDocument changes, we may need to update its Actor instance


#### Parameters

- Optionalupdate: object = {}The update delta
- Optionaloptions: Partial<DatabaseUpdateOperation> = {}The database operation that was performed

`Optional`The update delta

`Optional`The database operation that was performed


#### Returns void


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


### _positionToGridOffset

- _positionToGridOffset(    data?: Partial<ElevatedPoint & TokenDimensions>,): GridOffset3DInternalGet the top-left grid offset of the Token.
ParametersOptionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions
Returns GridOffset3DThe top-left grid offset
Inherited from BaseToken._positionToGridOffset
- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

`Internal`Get the top-left grid offset of the Token.


#### Parameters

- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

`Optional`The position and dimensions


#### Returns GridOffset3D

The top-left grid offset

Inherited from BaseToken._positionToGridOffset


### _preCreateDescendantDocuments

- _preCreateDescendantDocuments(    parent: any,    collection: any,    data: any,    options: any,    userId: any,): voidParametersparent: anycollection: anydata: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- data: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- data: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### _preDeleteDescendantDocuments

- _preDeleteDescendantDocuments(    parent: any,    collection: any,    ids: any,    options: any,    userId: any,): voidParametersparent: anycollection: anyids: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- ids: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- ids: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### _prepareDeltaUpdate

- _prepareDeltaUpdate(changes?: object, options?: DataModelUpdateOptions): voidInternalPrepare changes to a descendent delta collection.
Parameterschanges: object = {}Candidate source changes.
options: DataModelUpdateOptions = {}Options which determine how the new data is merged.
Returns voidInherited from BaseToken._prepareDeltaUpdate
- changes: object = {}Candidate source changes.
- options: DataModelUpdateOptions = {}Options which determine how the new data is merged.

`Internal`Prepare changes to a descendent delta collection.


#### Parameters

- changes: object = {}Candidate source changes.
- options: DataModelUpdateOptions = {}Options which determine how the new data is merged.

Candidate source changes.

Options which determine how the new data is merged.


#### Returns void

Inherited from BaseToken._prepareDeltaUpdate


### _preUpdate

- _preUpdate(changed: any, options: any, user: any): Promise<undefined | false>Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parameterschanged: anyThe candidate changes to the Document
options: anyAdditional options which modify the update request
user: anyThe User requesting the document update
Returns Promise<undefined | false>A return value of false indicates the update operation should be cancelled.
Overrides BaseToken._preUpdate
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

Overrides BaseToken._preUpdate


### _preUpdateDescendantDocuments

- _preUpdateDescendantDocuments(    parent: any,    collection: any,    changes: any,    options: any,    userId: any,): voidParametersparent: anycollection: anychanges: anyoptions: anyuserId: anyReturns voidInherit Doc
- parent: any
- collection: any
- changes: any
- options: any
- userId: any


#### Parameters

- parent: any
- collection: any
- changes: any
- options: any
- userId: any


#### Returns void


#### Inherit Doc


### canUserModify

- canUserModify(user: BaseUser, action: string, data?: object): booleanTest whether a given User has permission to perform some action on this Document
Parametersuser: BaseUserThe User attempting modification
action: stringThe attempted action
Optionaldata: object = {}Data involved in the attempted action
Returns booleanDoes the User have permission?
Inherited from BaseToken.canUserModify
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

Inherited from BaseToken.canUserModify


### clearMovementHistory

- clearMovementHistory(): Promise<void>Clear the movement history of this Token.
Returns Promise<void>

Clear the movement history of this Token.


#### Returns Promise<void>


### clone

- clone(    data?: {},    context?: {},):    | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.
Parametersdata: {} = {}Additional data which overrides current document data at the time of creation
context: {} = {}Additional context options passed to the create method
Returns     | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>The cloned Document instance
Inherited from BaseToken.clone
- data: {} = {}Additional data which overrides current document data at the time of creation
- context: {} = {}Additional context options passed to the create method

Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.


#### Parameters

- data: {} = {}Additional data which overrides current document data at the time of creation
- context: {} = {}Additional context options passed to the create method

Additional data which overrides current document data at the time of creation

Additional context options passed to the create method


#### Returns     | Document<object, DocumentConstructionContext>    | Promise<Document<object, DocumentConstructionContext>>

The cloned Document instance

Inherited from BaseToken.clone


### createEmbeddedDocuments

- createEmbeddedDocuments(    embeddedName: string,    data?: object[],    operation?: DatabaseCreateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Create multiple embedded Document instances within this parent Document using provided input data.
ParametersembeddedName: stringThe name of the embedded Document type
data: object[] = []An array of data objects used to create multiple documents
Optionaloperation: DatabaseCreateOperation = {}Parameters of the database creation workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of created Document instances
SeeDocument.createDocuments
Inherited from BaseToken.createEmbeddedDocuments
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

Inherited from BaseToken.createEmbeddedDocuments


### delete

- delete(    operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Delete this Document, removing it from the database.
ParametersOptionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The deleted Document instance, or undefined if not deleted
SeeDocument.deleteDocuments
Inherited from BaseToken.delete
- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

Delete this Document, removing it from the database.


#### Parameters

- Optionaloperation: Partial<Omit<DatabaseDeleteOperation, "ids">> = {}Parameters of the deletion operation

`Optional`Parameters of the deletion operation


#### Returns Promise<undefined | Document<object, DocumentConstructionContext>>

The deleted Document instance, or undefined if not deleted


#### See

Document.deleteDocuments

Inherited from BaseToken.delete


### deleteEmbeddedDocuments

- deleteEmbeddedDocuments(    embeddedName: string,    ids: string[],    operation?: DatabaseDeleteOperation,): Promise<Document<object, DocumentConstructionContext>[]>Delete multiple embedded Document instances within a parent Document using provided string ids.
ParametersembeddedName: stringThe name of the embedded Document type
ids: string[]An array of string ids for each Document to be deleted
Optionaloperation: DatabaseDeleteOperation = {}Parameters of the database deletion workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of deleted Document instances
SeeDocument.deleteDocuments
Inherited from BaseToken.deleteEmbeddedDocuments
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

Inherited from BaseToken.deleteEmbeddedDocuments


### getBarAttribute

- getBarAttribute(    barName: string,    options?: { alternative?: string },): null | objectA helper method to retrieve the underlying data behind one of the Token's attribute bars
ParametersbarName: stringThe named bar to retrieve the attribute for
Optionaloptions: { alternative?: string } = {}Optionalalternative?: stringAn alternative attribute path to get instead of the default one
Returns null | objectThe attribute displayed on the Token bar, if any
- barName: stringThe named bar to retrieve the attribute for
- Optionaloptions: { alternative?: string } = {}Optionalalternative?: stringAn alternative attribute path to get instead of the default one
- Optionalalternative?: stringAn alternative attribute path to get instead of the default one

A helper method to retrieve the underlying data behind one of the Token's attribute bars


#### Parameters

- barName: stringThe named bar to retrieve the attribute for
- Optionaloptions: { alternative?: string } = {}Optionalalternative?: stringAn alternative attribute path to get instead of the default one
- Optionalalternative?: stringAn alternative attribute path to get instead of the default one

The named bar to retrieve the attribute for

`Optional`- Optionalalternative?: stringAn alternative attribute path to get instead of the default one


##### Optionalalternative?: string

`Optional`An alternative attribute path to get instead of the default one


#### Returns null | object

The attribute displayed on the Token bar, if any


### getCenterPoint

- getCenterPoint(data?: Partial<ElevatedPoint & TokenDimensions>): ElevatedPointGet the center point of the Token.
ParametersOptionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions
Returns ElevatedPointThe center point
Inherited from BaseToken.getCenterPoint
- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

Get the center point of the Token.


#### Parameters

- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

`Optional`The position and dimensions


#### Returns ElevatedPoint

The center point

Inherited from BaseToken.getCenterPoint


### getCompleteMovementPath

- getCompleteMovementPath(    waypoints: TokenGetCompleteMovementPathWaypoint[],): TokenCompleteMovementWaypoint[]Get the path of movement with the intermediate steps of the direct path between waypoints.
Parameterswaypoints: TokenGetCompleteMovementPathWaypoint[]The waypoints of movement
Returns TokenCompleteMovementWaypoint[]The path of movement with all intermediate steps
- waypoints: TokenGetCompleteMovementPathWaypoint[]The waypoints of movement

Get the path of movement with the intermediate steps of the direct path between waypoints.


#### Parameters

- waypoints: TokenGetCompleteMovementPathWaypoint[]The waypoints of movement

The waypoints of movement


#### Returns TokenCompleteMovementWaypoint[]

The path of movement with all intermediate steps


### getEmbeddedCollection

- getEmbeddedCollection(embeddedName: any): anyObtain a reference to the Array of source data within the data object for a certain embedded Document name
ParametersembeddedName: anyThe name of the embedded Document type
Returns anyThe Collection instance of embedded Documents of the requested type
Overrides BaseToken.getEmbeddedCollection
- embeddedName: anyThe name of the embedded Document type

Obtain a reference to the Array of source data within the data object for a certain embedded Document name


#### Parameters

- embeddedName: anyThe name of the embedded Document type

The name of the embedded Document type


#### Returns any

The Collection instance of embedded Documents of the requested type

Overrides BaseToken.getEmbeddedCollection


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
Inherited from BaseToken.getEmbeddedDocument
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

Inherited from BaseToken.getEmbeddedDocument


### getFlag

- getFlag(scope: string, key: string): anyGet the value of a "flag" for this document
See the setFlag method for more details on flags
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns anyThe flag value
Inherited from BaseToken.getFlag
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

Inherited from BaseToken.getFlag


### getGridSpacePolygon

- getGridSpacePolygon(data?: Partial<TokenDimensions>): void | Point[]Get the grid space polygon of the Token.
Returns undefined in gridless grids because there are no grid spaces.
ParametersOptionaldata: Partial<TokenDimensions> = {}The dimensions
Returns void | Point[]The grid space polygon or undefined if gridless
Inherited from BaseToken.getGridSpacePolygon
- Optionaldata: Partial<TokenDimensions> = {}The dimensions

Get the grid space polygon of the Token.
Returns undefined in gridless grids because there are no grid spaces.


#### Parameters

- Optionaldata: Partial<TokenDimensions> = {}The dimensions

`Optional`The dimensions


#### Returns void | Point[]

The grid space polygon or undefined if gridless

Inherited from BaseToken.getGridSpacePolygon


### getOccupiedGridSpaceOffsets

- getOccupiedGridSpaceOffsets(    data?: Partial<Point & TokenDimensions>,): GridOffset2D[]Get the offsets of grid spaces that are occupied by this Token at the current or given position.
The grid spaces the Token occupies are those that are covered by the Token's shape in the snapped position.
Returns an empty array in gridless grids.
ParametersOptionaldata: Partial<Point & TokenDimensions> = {}The position and dimensions
Returns GridOffset2D[]The offsets of occupied grid spaces
Inherited from BaseToken.getOccupiedGridSpaceOffsets
- Optionaldata: Partial<Point & TokenDimensions> = {}The position and dimensions

Get the offsets of grid spaces that are occupied by this Token at the current or given position.
The grid spaces the Token occupies are those that are covered by the Token's shape in the snapped position.
Returns an empty array in gridless grids.


#### Parameters

- Optionaldata: Partial<Point & TokenDimensions> = {}The position and dimensions

`Optional`The position and dimensions


#### Returns GridOffset2D[]

The offsets of occupied grid spaces

Inherited from BaseToken.getOccupiedGridSpaceOffsets


### getSize

- getSize(    data?: Partial<{ height: number; width: number }>,): { height: number; width: number }Get the width and height of the Token in pixels.
ParametersOptionaldata: Partial<{ height: number; width: number }> = {}The width and/or height in grid units (must be positive)
Returns { height: number; width: number }The width and height in pixels
Inherited from BaseToken.getSize
- Optionaldata: Partial<{ height: number; width: number }> = {}The width and/or height in grid units (must be positive)

Get the width and height of the Token in pixels.


#### Parameters

- Optionaldata: Partial<{ height: number; width: number }> = {}The width and/or height in grid units (must be positive)

`Optional`The width and/or height in grid units (must be positive)


#### Returns { height: number; width: number }

The width and height in pixels

Inherited from BaseToken.getSize


### getSnappedPosition

- getSnappedPosition(    data?: Partial<ElevatedPoint & TokenDimensions>,): ElevatedPointGet the snapped position of the Token.
ParametersOptionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions
Returns ElevatedPointThe snapped position
Inherited from BaseToken.getSnappedPosition
- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

Get the snapped position of the Token.


#### Parameters

- Optionaldata: Partial<ElevatedPoint & TokenDimensions> = {}The position and dimensions

`Optional`The position and dimensions


#### Returns ElevatedPoint

The snapped position

Inherited from BaseToken.getSnappedPosition


### getUserLevel

- getUserLevel(user: any): anyGet the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.
This method returns the value recorded in Document ownership, regardless of the User's role, for example a
GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.
To test whether a user has a certain capability over the document, testUserPermission should be used.
Parametersuser: anyThe User being tested
Returns anyA numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS
Inherited from BaseToken.getUserLevel
- user: anyThe User being tested

Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

This method returns the value recorded in Document ownership, regardless of the User's role, for example a
GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

To test whether a user has a certain capability over the document, testUserPermission should be used.


#### Parameters

- user: anyThe User being tested

The User being tested


#### Returns any

A numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS

Inherited from BaseToken.getUserLevel


### hasStatusEffect

- hasStatusEffect(statusId: string): booleanTest whether a Token has a specific status effect.
ParametersstatusId: stringThe status effect ID as defined in CONFIG.statusEffects
Returns booleanDoes the Actor of the Token have this status effect?
- statusId: stringThe status effect ID as defined in CONFIG.statusEffects

Test whether a Token has a specific status effect.


#### Parameters

- statusId: stringThe status effect ID as defined in CONFIG.statusEffects

The status effect ID as defined in CONFIG.statusEffects


#### Returns boolean

Does the Actor of the Token have this status effect?


### measureMovementPath

- measureMovementPath(    waypoints: TokenMeasureMovementPathWaypoint[],    options?: {        aggregator?: TokenMovementCostAggregator;        cost?: TokenMovementCostFunction;    },): GridMeasurePathResultMeasure the movement path for this Token.
Parameterswaypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
Optionaloptions: { aggregator?: TokenMovementCostAggregator; cost?: TokenMovementCostFunction } = {}Additional measurement options
Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)
Returns GridMeasurePathResult
- waypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: { aggregator?: TokenMovementCostAggregator; cost?: TokenMovementCostFunction } = {}Additional measurement options
Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)
- Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
- Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)

Measure the movement path for this Token.


#### Parameters

- waypoints: TokenMeasureMovementPathWaypoint[]The waypoints of movement
- Optionaloptions: { aggregator?: TokenMovementCostAggregator; cost?: TokenMovementCostFunction } = {}Additional measurement options
Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)
- Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
- Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)

The waypoints of movement

`Optional`Additional measurement options

- Optionalaggregator?: TokenMovementCostAggregatorThe cost aggregator.
Default: CONFIG.Token.movement.costAggregator.
- Optionalcost?: TokenMovementCostFunctionThe function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)


##### Optionalaggregator?: TokenMovementCostAggregator

`Optional`The cost aggregator.
Default: CONFIG.Token.movement.costAggregator.

`CONFIG.Token.movement.costAggregator`
##### Optionalcost?: TokenMovementCostFunction

`Optional`The function that returns the cost
for a given move between grid spaces (default is the distance travelled along the direct path)


#### Returns GridMeasurePathResult


### migrateSystemData

- migrateSystemData(): objectFor Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.
Returns objectThe migrated system data object
Inherited from BaseToken.migrateSystemData

For Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.


#### Returns object

The migrated system data object

Inherited from BaseToken.migrateSystemData


### move

- move(    waypoints:        | Partial<TokenMovementWaypoint>        | Partial<TokenMovementWaypoint>[],    options?: Partial<        Omit<DatabaseUpdateOperation, "updates"> & {            autoRotate: boolean;            constrainOptions: Omit<                TokenConstrainMovementPathOptions,                "preview"                | "history",            >;            method: TokenMovementMethod;            showRuler: boolean;        },    >,): Promise<boolean>Move the Token through the given waypoint(s).
Parameterswaypoints: Partial<TokenMovementWaypoint> | Partial<TokenMovementWaypoint>[]The waypoint(s) to move the Token through
Optionaloptions: Partial<    Omit<DatabaseUpdateOperation, "updates"> & {        autoRotate: boolean;        constrainOptions: Omit<            TokenConstrainMovementPathOptions,            "preview"            | "history",        >;        method: TokenMovementMethod;        showRuler: boolean;    },> = {}Parameters of the update operation
Returns Promise<boolean>A Promise that resolves to true if the Token was moved, otherwise resolves to false
- waypoints: Partial<TokenMovementWaypoint> | Partial<TokenMovementWaypoint>[]The waypoint(s) to move the Token through
- Optionaloptions: Partial<    Omit<DatabaseUpdateOperation, "updates"> & {        autoRotate: boolean;        constrainOptions: Omit<            TokenConstrainMovementPathOptions,            "preview"            | "history",        >;        method: TokenMovementMethod;        showRuler: boolean;    },> = {}Parameters of the update operation

Move the Token through the given waypoint(s).


#### Parameters

- waypoints: Partial<TokenMovementWaypoint> | Partial<TokenMovementWaypoint>[]The waypoint(s) to move the Token through
- Optionaloptions: Partial<    Omit<DatabaseUpdateOperation, "updates"> & {        autoRotate: boolean;        constrainOptions: Omit<            TokenConstrainMovementPathOptions,            "preview"            | "history",        >;        method: TokenMovementMethod;        showRuler: boolean;    },> = {}Parameters of the update operation

The waypoint(s) to move the Token through

`Optional`Parameters of the update operation


#### Returns Promise<boolean>

A Promise that resolves to true if the Token was moved, otherwise resolves to false


### pauseMovement

- pauseMovement(): null | TokenResumeMovementCallbackPause the movement of this Token document. The movement can be resumed after being paused.
Only the User that initiated the movement can pause it.
Returns a callback that can be used to resume the movement later.
Only after all callbacks and keys have been called the movement of the Token is resumed.
If the callback is called within the update operation workflow, the movement is resumed after the workflow.
Returns null | TokenResumeMovementCallbackThe callback to resume movement if the movement was or is paused,
otherwise null
Example// This is an Execute Script Region Behavior that makes the token invisible// On TOKEN_MOVE_IN...if ( !event.user.isSelf ) return;const resumeMovement = event.data.token.pauseMovement();event.data.token.toggleStatusEffect("invisible", {active: true});const resumed = await resumeMovement();
Copy
- pauseMovement(key: string): null | Promise<boolean>Pause the movement of this Token document. The movement can be resumed after being paused.
Only the User that initiated the movement can pause it.
Returns a promise that resolves to true if the movement was resumed by
TokenDocument#resumeMovement with the same key that was passed to this function.
Only after all callbacks and keys have been called the movement of the Token is resumed.
If the callback is called within the update operation workflow, the movement is resumed after the workflow.
Parameterskey: stringThe key to resume movement with TokenDocument#resumeMovement
Returns null | Promise<boolean>The continuation promise if the movement was paused, otherwise null
Example// This is an Execute Script Region Behavior of a pressure plate that activates a trap// On TOKEN_MOVE_IN...if ( event.user.isSelf ) {  event.data.token.pauseMovement(this.parent.uuid);}if ( game.user.isActiveGM ) {  const trapUuid; // The Region Behavior UUID of the trap  const trapBehavior = await fromUuid(trapUuid);  await trapBehavior.update({disabled: false});  event.data.token.resumeMovement(event.data.movement.id, this.parent.uuid);}
Copy
- key: stringThe key to resume movement with TokenDocument#resumeMovement

Pause the movement of this Token document. The movement can be resumed after being paused.
Only the User that initiated the movement can pause it.
Returns a callback that can be used to resume the movement later.
Only after all callbacks and keys have been called the movement of the Token is resumed.
If the callback is called within the update operation workflow, the movement is resumed after the workflow.


#### Returns null | TokenResumeMovementCallback

The callback to resume movement if the movement was or is paused,
otherwise null


#### Example

```javascript
// This is an Execute Script Region Behavior that makes the token invisible// On TOKEN_MOVE_IN...if ( !event.user.isSelf ) return;const resumeMovement = event.data.token.pauseMovement();event.data.token.toggleStatusEffect("invisible", {active: true});const resumed = await resumeMovement();
Copy
```

`// This is an Execute Script Region Behavior that makes the token invisible// On TOKEN_MOVE_IN...if ( !event.user.isSelf ) return;const resumeMovement = event.data.token.pauseMovement();event.data.token.toggleStatusEffect("invisible", {active: true});const resumed = await resumeMovement();`Pause the movement of this Token document. The movement can be resumed after being paused.
Only the User that initiated the movement can pause it.
Returns a promise that resolves to true if the movement was resumed by
TokenDocument#resumeMovement with the same key that was passed to this function.
Only after all callbacks and keys have been called the movement of the Token is resumed.
If the callback is called within the update operation workflow, the movement is resumed after the workflow.


#### Parameters

- key: stringThe key to resume movement with TokenDocument#resumeMovement

The key to resume movement with TokenDocument#resumeMovement


#### Returns null | Promise<boolean>

The continuation promise if the movement was paused, otherwise null


#### Example

```javascript
// This is an Execute Script Region Behavior of a pressure plate that activates a trap// On TOKEN_MOVE_IN...if ( event.user.isSelf ) {  event.data.token.pauseMovement(this.parent.uuid);}if ( game.user.isActiveGM ) {  const trapUuid; // The Region Behavior UUID of the trap  const trapBehavior = await fromUuid(trapUuid);  await trapBehavior.update({disabled: false});  event.data.token.resumeMovement(event.data.movement.id, this.parent.uuid);}
Copy
```

`// This is an Execute Script Region Behavior of a pressure plate that activates a trap// On TOKEN_MOVE_IN...if ( event.user.isSelf ) {  event.data.token.pauseMovement(this.parent.uuid);}if ( game.user.isActiveGM ) {  const trapUuid; // The Region Behavior UUID of the trap  const trapBehavior = await fromUuid(trapUuid);  await trapBehavior.update({disabled: false});  event.data.token.resumeMovement(event.data.movement.id, this.parent.uuid);}`
### prepareBaseData

- prepareBaseData(): voidReturns void


#### Returns void


### prepareDerivedData

- prepareDerivedData(): voidReturns voidInherit Doc


#### Returns void


#### Inherit Doc


### prepareEmbeddedDocuments

- prepareEmbeddedDocuments(): voidReturns voidInherit Doc


#### Returns void


#### Inherit Doc


### reset

- reset(): voidReset the state of this data instance back to mirror the contained source data, erasing any changes.
Returns voidInherited from BaseToken.reset

Reset the state of this data instance back to mirror the contained source data, erasing any changes.


#### Returns void

Inherited from BaseToken.reset


### resize

- resize(    dimensions: Partial<TokenDimensions>,    options?: Partial<Omit<DatabaseUpdateOperation, "updates">>,): Promise<boolean>Resize the token Token such that its center point remains (almost) unchanged. The center point might change
slightly because the new (x, y) position is rounded.
Parametersdimensions: Partial<TokenDimensions>The new dimensions
Optionaloptions: Partial<Omit<DatabaseUpdateOperation, "updates">>Parameters of the update operation
Returns Promise<boolean>A Promise that resolves to true if the Token was resized, otherwise resolves to false
- dimensions: Partial<TokenDimensions>The new dimensions
- Optionaloptions: Partial<Omit<DatabaseUpdateOperation, "updates">>Parameters of the update operation

Resize the token Token such that its center point remains (almost) unchanged. The center point might change
slightly because the new (x, y) position is rounded.


#### Parameters

- dimensions: Partial<TokenDimensions>The new dimensions
- Optionaloptions: Partial<Omit<DatabaseUpdateOperation, "updates">>Parameters of the update operation

The new dimensions

`Optional`Parameters of the update operation


#### Returns Promise<boolean>

A Promise that resolves to true if the Token was resized, otherwise resolves to false


### resumeMovement

- resumeMovement(movementId: string, key: string): voidResume the movement given its ID and the key that was passed to TokenDocument#pauseMovement.
ParametersmovementId: stringThe movement ID
key: stringThe key that was passed to TokenDocument#pauseMovement
Returns void
- movementId: stringThe movement ID
- key: stringThe key that was passed to TokenDocument#pauseMovement

Resume the movement given its ID and the key that was passed to TokenDocument#pauseMovement.


#### Parameters

- movementId: stringThe movement ID
- key: stringThe key that was passed to TokenDocument#pauseMovement

The movement ID

The key that was passed to TokenDocument#pauseMovement


#### Returns void


### revertRecordedMovement

- revertRecordedMovement(movementId?: string): Promise<boolean>Undo all recorded movement or the recorded movement corresponding to given movement ID up to the last movement.
The token is displaced to the prior recorded position and the movement history it rolled back accordingly.
ParametersOptionalmovementId: stringThe ID of the recorded movement to undo
Returns Promise<boolean>True if the movement was undone, otherwise false
- OptionalmovementId: stringThe ID of the recorded movement to undo

Undo all recorded movement or the recorded movement corresponding to given movement ID up to the last movement.
The token is displaced to the prior recorded position and the movement history it rolled back accordingly.


#### Parameters

- OptionalmovementId: stringThe ID of the recorded movement to undo

`Optional`The ID of the recorded movement to undo


#### Returns Promise<boolean>

True if the movement was undone, otherwise false


### segmentizeRegionMovementPath

- segmentizeRegionMovementPath(    region: RegionDocument,    waypoints: TokenSegmentizeMovementWaypoint[],): TokenRegionMovementSegment[]Split the Token movement path through the Region into its segments.
The Token and the Region must be in the same Scene.
Implementations of this function are restricted in the following ways:

The segments must go through the waypoints.
The from position matches the to position of the succeeding segment.
The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from and to of MOVE segments.
The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the to position of ENTER segments.
The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from position of EXIT segments.
The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the from position of ENTER segments.
The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the to position of EXIT segments.
This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.

Parametersregion: RegionDocumentThe region
waypoints: TokenSegmentizeMovementWaypoint[]The waypoints of movement
Returns TokenRegionMovementSegment[]The movement split into its segments
- The segments must go through the waypoints.
- The from position matches the to position of the succeeding segment.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from and to of MOVE segments.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the to position of ENTER segments.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from position of EXIT segments.
- The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the from position of ENTER segments.
- The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the to position of EXIT segments.
- This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.
- region: RegionDocumentThe region
- waypoints: TokenSegmentizeMovementWaypoint[]The waypoints of movement

Split the Token movement path through the Region into its segments.
The Token and the Region must be in the same Scene.

Implementations of this function are restricted in the following ways:

- The segments must go through the waypoints.
- The from position matches the to position of the succeeding segment.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from and to of MOVE segments.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the to position of ENTER segments.
- The Token must be contained (w.r.t. TokenDocument#testInsideRegion) within the Region
at the from position of EXIT segments.
- The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the from position of ENTER segments.
- The Token must not be contained (w.r.t. TokenDocument#testInsideRegion) within the
Region at the to position of EXIT segments.
- This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.

`x``y``elevation``width``height``shape`
#### Parameters

- region: RegionDocumentThe region
- waypoints: TokenSegmentizeMovementWaypoint[]The waypoints of movement

The region

The waypoints of movement


#### Returns TokenRegionMovementSegment[]

The movement split into its segments


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
Inherited from BaseToken.setFlag
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

Inherited from BaseToken.setFlag


### stopMovement

- stopMovement(): booleanStop the movement of this Token document. The movement cannot be continued after being stopped.
Only the User that initiated the movement can stop it.
Returns booleanTrue if the movement was or is stopped, otherwise false

Stop the movement of this Token document. The movement cannot be continued after being stopped.
Only the User that initiated the movement can stop it.


#### Returns boolean

True if the movement was or is stopped, otherwise false


### testInsideRegion

- testInsideRegion(region: RegionDocument): booleanTest whether the Token is inside the Region.
This function determines the state of TokenDocument#regions and
foundry.documents.RegionDocument#tokens.
The Token and the Region must be in the same Scene.
Implementations of this function are restricted in the following ways:

If the bounds (given by TokenDocument#getSize) of the Token do not intersect the
Region, then the Token is not contained within the Region.
If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
within the elevation range of the Region.
This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.

If this function is overridden, then TokenDocument#segmentizeRegionMovementPath must be
overridden too.
If an override of this function uses Token document fields other than x, y, elevation, width, height, and
shape, TokenDocument#_couldRegionsChange must be overridden to return true for changes
of these fields. If an override of this function uses non-Token properties other than Scene#grid.type and
Scene#grid.size,
foundry.documents.Scene#updateTokenRegions must be called when any of those properties change.
Parametersregion: RegionDocumentThe region.
Returns booleanIs inside the Region?
- If the bounds (given by TokenDocument#getSize) of the Token do not intersect the
Region, then the Token is not contained within the Region.
- If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
within the elevation range of the Region.
- This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.
- region: RegionDocumentThe region.
- testInsideRegion(    region: RegionDocument,    data: Partial<ElevatedPoint & TokenDimensions>,): booleanParametersregion: RegionDocumentThe region.
data: Partial<ElevatedPoint & TokenDimensions>The position and dimensions. Defaults to the values of
the document source.
Returns booleanIs inside the Region?
- region: RegionDocumentThe region.
- data: Partial<ElevatedPoint & TokenDimensions>The position and dimensions. Defaults to the values of
the document source.

Test whether the Token is inside the Region.
This function determines the state of TokenDocument#regions and
foundry.documents.RegionDocument#tokens.
The Token and the Region must be in the same Scene.

Implementations of this function are restricted in the following ways:

- If the bounds (given by TokenDocument#getSize) of the Token do not intersect the
Region, then the Token is not contained within the Region.
- If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
within the elevation range of the Region.
- This function must not use prepared field values that are animated. In particular, it must use the source
instead of prepared values of the following fields: x, y, elevation, width, height, and shape.

`x``y``elevation``width``height``shape`If this function is overridden, then TokenDocument#segmentizeRegionMovementPath must be
overridden too.

If an override of this function uses Token document fields other than x, y, elevation, width, height, and
shape, TokenDocument#_couldRegionsChange must be overridden to return true for changes
of these fields. If an override of this function uses non-Token properties other than Scene#grid.type and
Scene#grid.size,
foundry.documents.Scene#updateTokenRegions must be called when any of those properties change.

`x``y``elevation``width``height``shape``Scene#grid.type``Scene#grid.size`
#### Parameters

- region: RegionDocumentThe region.

The region.


#### Returns boolean

Is inside the Region?


#### Parameters

- region: RegionDocumentThe region.
- data: Partial<ElevatedPoint & TokenDimensions>The position and dimensions. Defaults to the values of
the document source.

The region.

The position and dimensions. Defaults to the values of
the document source.


#### Returns boolean

Is inside the Region?


### testUserPermission

- testUserPermission(    user: BaseUser,    permission: DocumentOwnershipLevel,    options?: { exact?: boolean },): booleanTest whether a certain User has a requested permission level (or greater) over the Document
Parametersuser: BaseUserThe User being tested
permission: DocumentOwnershipLevelThe permission level from DOCUMENT_OWNERSHIP_LEVELS to test
options: { exact?: boolean } = {}Additional options involved in the permission test
Optionalexact?: booleanRequire the exact permission level requested?
Returns booleanDoes the user have this permission level over the Document?
Inherited from BaseToken.testUserPermission
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

Inherited from BaseToken.testUserPermission


### toggleCombatant

- toggleCombatant(options?: { active?: boolean }): Promise<boolean>Add or remove this Token from a Combat encounter.
ParametersOptionaloptions: { active?: boolean } = {}Additional options passed to TokenDocument.createCombatants or
TokenDocument.deleteCombatants
Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.
Returns Promise<boolean>Is this Token now an active Combatant?
- Optionaloptions: { active?: boolean } = {}Additional options passed to TokenDocument.createCombatants or
TokenDocument.deleteCombatants
Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.
- Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.

Add or remove this Token from a Combat encounter.


#### Parameters

- Optionaloptions: { active?: boolean } = {}Additional options passed to TokenDocument.createCombatants or
TokenDocument.deleteCombatants
Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.
- Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.

`Optional`Additional options passed to TokenDocument.createCombatants or
TokenDocument.deleteCombatants

- Optionalactive?: booleanRequire this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.


##### Optionalactive?: boolean

`Optional`Require this token to be an active Combatant or to be removed.
Otherwise, the current combat state of the Token is toggled.


#### Returns Promise<boolean>

Is this Token now an active Combatant?


### toJSON

- toJSON(): objectExtract the source data for the DataModel into a simple object format that can be serialized.
Returns objectThe document source data expressed as a plain object
Inherited from BaseToken.toJSON

Extract the source data for the DataModel into a simple object format that can be serialized.


#### Returns object

The document source data expressed as a plain object

Inherited from BaseToken.toJSON


### toObject

- toObject(source?: boolean): anyCopy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.
Parameterssource: boolean = trueDraw values from the underlying data source rather than transformed values
Returns anyThe extracted primitive object
Inherited from BaseToken.toObject
- source: boolean = trueDraw values from the underlying data source rather than transformed values

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.


#### Parameters

- source: boolean = trueDraw values from the underlying data source rather than transformed values

Draw values from the underlying data source rather than transformed values


#### Returns any

The extracted primitive object

Inherited from BaseToken.toObject


### traverseEmbeddedDocuments

- traverseEmbeddedDocuments(_parentPath?: string): Generator<any, void, any>Iterate over all embedded Documents that are hierarchical children of this Document.
ParametersOptional_parentPath: stringA parent field path already traversed
Returns Generator<any, void, any>YieldsInherited from BaseToken.traverseEmbeddedDocuments
- Optional_parentPath: stringA parent field path already traversed

Iterate over all embedded Documents that are hierarchical children of this Document.


#### Parameters

- Optional_parentPath: stringA parent field path already traversed

`Optional`A parent field path already traversed


#### Returns Generator<any, void, any>


#### Yields

Inherited from BaseToken.traverseEmbeddedDocuments


### unsetFlag

- unsetFlag(    scope: string,    key: string,): Promise<Document<object, DocumentConstructionContext>>Remove a flag assigned to the document
Parametersscope: stringThe flag scope which namespaces the key
key: stringThe flag key
Returns Promise<Document<object, DocumentConstructionContext>>The updated document instance
Inherited from BaseToken.unsetFlag
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

Inherited from BaseToken.unsetFlag


### update

- update(    data?: object,    operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>,): Promise<undefined | Document<object, DocumentConstructionContext>>Update this Document using incremental data, saving it to the database.
ParametersOptionaldata: object = {}Differential update data which modifies the existing values of this document
Optionaloperation: Partial<Omit<DatabaseUpdateOperation, "updates">> = {}Parameters of the update operation
Returns Promise<undefined | Document<object, DocumentConstructionContext>>The updated Document instance, or undefined not updated
SeeDocument.updateDocuments
Inherited from BaseToken.update
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

Inherited from BaseToken.update


### updateEmbeddedDocuments

- updateEmbeddedDocuments(    embeddedName: string,    updates?: object[],    operation?: DatabaseUpdateOperation,): Promise<Document<object, DocumentConstructionContext>[]>Update multiple embedded Document instances within a parent Document using provided differential data.
ParametersembeddedName: stringThe name of the embedded Document type
updates: object[] = []An array of differential data objects, each used to update a
single Document
Optionaloperation: DatabaseUpdateOperation = {}Parameters of the database update workflow
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated Document instances
SeeDocument.updateDocuments
Inherited from BaseToken.updateEmbeddedDocuments
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

Inherited from BaseToken.updateEmbeddedDocuments


### updateSource

- updateSource(changes?: {}, options?: {}): objectUpdate the DataModel locally by applying an object of changes to its source data.
The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
The provided changes argument is mutated in this process.
The source data is then re-initialized to apply those changes to the prepared data.
The method returns an object of differential changes which modified the original data.
Parameterschanges: {} = {}New values which should be applied to the data model
options: {} = {}Options which determine how the new data is merged
Returns objectAn object containing differential keys and values that were changed
ThrowsAn error if the requested data model changes were invalid
Inherited from BaseToken.updateSource
- changes: {} = {}New values which should be applied to the data model
- options: {} = {}Options which determine how the new data is merged

Update the DataModel locally by applying an object of changes to its source data.
The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
The provided changes argument is mutated in this process.
The source data is then re-initialized to apply those changes to the prepared data.
The method returns an object of differential changes which modified the original data.


#### Parameters

- changes: {} = {}New values which should be applied to the data model
- options: {} = {}Options which determine how the new data is merged

New values which should be applied to the data model

Options which determine how the new data is merged


#### Returns object

An object containing differential keys and values that were changed


#### Throws

An error if the requested data model changes were invalid

Inherited from BaseToken.updateSource


### updateVisionMode

- updateVisionMode(    visionMode: string,    defaults?: boolean,): Promise<undefined | TokenDocument>Convenience method to change a token vision mode.
ParametersvisionMode: stringThe vision mode to apply to this token.
Optionaldefaults: boolean = trueIf the vision mode should be updated with its defaults.
Returns Promise<undefined | TokenDocument>The updated Document instance, or undefined not updated.
- visionMode: stringThe vision mode to apply to this token.
- Optionaldefaults: boolean = trueIf the vision mode should be updated with its defaults.

Convenience method to change a token vision mode.


#### Parameters

- visionMode: stringThe vision mode to apply to this token.
- Optionaldefaults: boolean = trueIf the vision mode should be updated with its defaults.

The vision mode to apply to this token.

`Optional`If the vision mode should be updated with its defaults.


#### Returns Promise<undefined | TokenDocument>

The updated Document instance, or undefined not updated.


### validate

- validate(options?: DataModelValidationOptions): booleanValidate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.
Parametersoptions: DataModelValidationOptions = {}Options which modify how the model is validated
Returns booleanWhether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.
ThrowsAn error thrown if validation is strict and a failure occurs.
Inherited from BaseToken.validate
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

Inherited from BaseToken.validate


### Protected_couldRegionsChange

`Protected`- _couldRegionsChange(changes: object): booleanProtectedIs the Token document updated such that the Regions the Token is contained in may change?
Called as part of the preUpdate workflow.
Parameterschanges: objectThe changes.
Returns booleanCould this Token update change Region containment?
- changes: objectThe changes.

`Protected`Is the Token document updated such that the Regions the Token is contained in may change?
Called as part of the preUpdate workflow.


#### Parameters

- changes: objectThe changes.

The changes.


#### Returns boolean

Could this Token update change Region containment?


### Protected_inferMovementAction

`Protected`- _inferMovementAction(): stringProtectedInfer the movement action.
The default implementation returns CONFIG.Token.movement.defaultAction.
Returns string

`Protected`Infer the movement action.
The default implementation returns CONFIG.Token.movement.defaultAction.

`CONFIG.Token.movement.defaultAction`
#### Returns string


### Protected_inferRingSubjectTexture

`Protected`- _inferRingSubjectTexture(): stringProtectedInfer the subject texture path to use for a token ring.
Returns string

`Protected`Infer the subject texture path to use for a token ring.


#### Returns string


### Protected_onMovementPaused

`Protected`- _onMovementPaused(): voidProtectedCalled when the current movement is paused.
Returns void

`Protected`Called when the current movement is paused.


#### Returns void


### Protected_onMovementRecorded

`Protected`- _onMovementRecorded(): voidProtectedCalled when the movement is recorded or cleared.
Returns void

`Protected`Called when the movement is recorded or cleared.


#### Returns void


### Protected_onMovementStopped

`Protected`- _onMovementStopped(): voidProtectedCalled when the current movement is stopped.
Returns void

`Protected`Called when the current movement is stopped.


#### Returns void


### Protected_onRelatedUpdate

`Protected`- _onRelatedUpdate(    update?: object | object[],    operation?: Partial<DatabaseOperation>,): voidProtectedWhenever the token's actor delta changes, or the base actor changes, perform associated refreshes.
ParametersOptionalupdate: object | object[] = {}The update delta
Optionaloperation: Partial<DatabaseOperation> = {}The database operation that was performed
Returns void
- Optionalupdate: object | object[] = {}The update delta
- Optionaloperation: Partial<DatabaseOperation> = {}The database operation that was performed

`Protected`Whenever the token's actor delta changes, or the base actor changes, perform associated refreshes.


#### Parameters

- Optionalupdate: object | object[] = {}The update delta
- Optionaloperation: Partial<DatabaseOperation> = {}The database operation that was performed

`Optional`The update delta

`Optional`The database operation that was performed


#### Returns void


### Protected_onUpdateMovement

`Protected`- _onUpdateMovement(    movement: DeepReadonly<TokenMovementOperation>,    operation: Partial<DatabaseUpdateOperation>,    user: documents.User,): voidProtectedPost-process an update operation of a movement.
Parametersmovement: DeepReadonly<TokenMovementOperation>The movement of this Token
operation: Partial<DatabaseUpdateOperation>The update operation
user: documents.UserThe User that requested the update operation
Returns void
- movement: DeepReadonly<TokenMovementOperation>The movement of this Token
- operation: Partial<DatabaseUpdateOperation>The update operation
- user: documents.UserThe User that requested the update operation

`Protected`Post-process an update operation of a movement.


#### Parameters

- movement: DeepReadonly<TokenMovementOperation>The movement of this Token
- operation: Partial<DatabaseUpdateOperation>The update operation
- user: documents.UserThe User that requested the update operation

The movement of this Token

The update operation

The User that requested the update operation


#### Returns void


### Protected_preCreate

`Protected`- _preCreate(    data: object,    options: object,    user: BaseUser,): Promise<boolean | void>ProtectedPre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Modifications to the pending Document instance must be performed using updateSource.
Parametersdata: objectThe initial data object provided to the document creation request
options: objectAdditional options which modify the creation request
user: BaseUserThe User requesting the document creation
Returns Promise<boolean | void>Return false to exclude this Document from the creation operation
Inherited from BaseToken._preCreate
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

Inherited from BaseToken._preCreate


### Protected_preDelete

`Protected`- _preDelete(options: object, user: BaseUser): Promise<boolean | void>ProtectedPre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.
Parametersoptions: objectAdditional options which modify the deletion request
user: BaseUserThe User requesting the document deletion
Returns Promise<boolean | void>A return value of false indicates the deletion operation should be cancelled.
Inherited from BaseToken._preDelete
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

Inherited from BaseToken._preDelete


### Protected_prepareDetectionModes

`Protected`- _prepareDetectionModes(): voidProtectedPrepare detection modes which are available to the Token.
Ensure that every Token has the basic sight detection mode configured.
Returns void

`Protected`Prepare detection modes which are available to the Token.
Ensure that every Token has the basic sight detection mode configured.


#### Returns void


### Protected_preUpdateMovement

`Protected`- _preUpdateMovement(    movement: DeepReadonly<        Omit<TokenMovementOperation, "autoRotate" | "showRuler">,    > & Pick<TokenMovementOperation, "autoRotate" | "showRuler">,    operation: Partial<DatabaseUpdateOperation>,): Promise<boolean | void>ProtectedReject the movement or modify the update operation as needed based on the movement.
Called after the movement for this document update has been determined.
The waypoints of movement are final and cannot be changed. The movement can only be rejected entirely.
Parametersmovement: DeepReadonly<Omit<TokenMovementOperation, "autoRotate" | "showRuler">> & Pick<    TokenMovementOperation,    "autoRotate"    | "showRuler",>The pending movement of this Token
operation: Partial<DatabaseUpdateOperation>The update operation
Returns Promise<boolean | void>If false, the movement is prevented
- movement: DeepReadonly<Omit<TokenMovementOperation, "autoRotate" | "showRuler">> & Pick<    TokenMovementOperation,    "autoRotate"    | "showRuler",>The pending movement of this Token
- operation: Partial<DatabaseUpdateOperation>The update operation

`Protected`Reject the movement or modify the update operation as needed based on the movement.
Called after the movement for this document update has been determined.
The waypoints of movement are final and cannot be changed. The movement can only be rejected entirely.


#### Parameters

- movement: DeepReadonly<Omit<TokenMovementOperation, "autoRotate" | "showRuler">> & Pick<    TokenMovementOperation,    "autoRotate"    | "showRuler",>The pending movement of this Token
- operation: Partial<DatabaseUpdateOperation>The update operation

The pending movement of this Token

The update operation


#### Returns Promise<boolean | void>

If false, the movement is prevented


### Protected_shouldRecordMovementHistory

`Protected`- _shouldRecordMovementHistory(): booleanProtectedShould the movement of this Token update be recorded in the movement history?
Called as part of the preUpdate workflow if the Token is moved.
Returns booleanShould the movement of this Token update be recorded in the movement history?

`Protected`Should the movement of this Token update be recorded in the movement history?
Called as part of the preUpdate workflow if the Token is moved.


#### Returns boolean

Should the movement of this Token update be recorded in the movement history?


### Static_addDataFieldMigration

`Static`- _addDataFieldMigration(    data: object,    oldKey: string,    newKey: string,    apply?: (data: object) => any,): booleanInternalDefine a simple migration from one field name to another.
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being migrated
oldKey: stringThe old field name
newKey: stringThe new field name
Optionalapply: (data: object) => anyAn application function, otherwise the old value is applied
Returns booleanWhether a migration was applied.
Inherited from BaseToken._addDataFieldMigration
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

Inherited from BaseToken._addDataFieldMigration


### Static_addDataFieldShim

`Static`- _addDataFieldShim(    data: object,    oldKey: string,    newKey: string,    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding a migration shim
The value of the data can be transformed during the migration by an optional application function.
Parametersdata: objectThe data object being shimmed
oldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: { value?: any; warning?: string } = {}Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseToken._addDataFieldShim
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

Inherited from BaseToken._addDataFieldShim


### Static_addDataFieldShims

`Static`- _addDataFieldShims(    data: object,    shims: { [oldKey: string]: string },    options?: { value?: any; warning?: string },): voidInternalA reusable helper for adding migration shims.
Parametersdata: objectThe data object being shimmed
shims: { [oldKey: string]: string }The mapping of old keys to new keys
Optionaloptions: { value?: any; warning?: string }Options passed to foundry.utils.logCompatibilityWarning
Optionalvalue?: anyThe value of the shim
Optionalwarning?: stringThe deprecation message
Returns voidInherited from BaseToken._addDataFieldShims
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

Inherited from BaseToken._addDataFieldShims


### Static_addTeleportAndForcedShims

`Static`- _addTeleportAndForcedShims(operation: DatabaseUpdateOperation): voidInternalAdd deprecated getters for the teleport and forced option.
Parametersoperation: DatabaseUpdateOperationReturns voidDeprecatedsince v13
- operation: DatabaseUpdateOperation

`Internal`Add deprecated getters for the teleport and forced option.


#### Parameters

- operation: DatabaseUpdateOperation


#### Returns void


#### Deprecated

since v13


### Static_clearFieldsRecusively

`Static`- _clearFieldsRecusively(data: object, fieldNames: string[]): voidInternalClear the fields from the given Document data recursively.
Parametersdata: objectThe (partial) Document data
fieldNames: string[]The fields that are cleared
Returns voidInherited from BaseToken._clearFieldsRecusively
- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

`Internal`Clear the fields from the given Document data recursively.


#### Parameters

- data: objectThe (partial) Document data
- fieldNames: string[]The fields that are cleared

The (partial) Document data

The fields that are cleared


#### Returns void

Inherited from BaseToken._clearFieldsRecusively


### Static_getHexagonalOffsets

`Static`- _getHexagonalOffsets(    width: number,    height: number,    shape: TokenShapeType,    columns: boolean,): DeepReadonly<TokenHexagonalOffsetsData>InternalGet the hexagonal offsets given the type, width, and height.
Parameterswidth: numberThe width of the Token (positive)
height: numberThe height of the Token (positive)
shape: TokenShapeTypeThe shape (one of CONST.TOKEN_SHAPES)
columns: booleanColumn-based instead of row-based hexagonal grid?
Returns DeepReadonly<TokenHexagonalOffsetsData>The hexagonal offsets
Inherited from BaseToken._getHexagonalOffsets
- width: numberThe width of the Token (positive)
- height: numberThe height of the Token (positive)
- shape: TokenShapeTypeThe shape (one of CONST.TOKEN_SHAPES)
- columns: booleanColumn-based instead of row-based hexagonal grid?

`Internal`Get the hexagonal offsets given the type, width, and height.


#### Parameters

- width: numberThe width of the Token (positive)
- height: numberThe height of the Token (positive)
- shape: TokenShapeTypeThe shape (one of CONST.TOKEN_SHAPES)
- columns: booleanColumn-based instead of row-based hexagonal grid?

The width of the Token (positive)

The height of the Token (positive)

The shape (one of CONST.TOKEN_SHAPES)

Column-based instead of row-based hexagonal grid?


#### Returns DeepReadonly<TokenHexagonalOffsetsData>

The hexagonal offsets

Inherited from BaseToken._getHexagonalOffsets


### Static_initializationOrder

`Static`- _initializationOrder(): Generator<any[], void, unknown>Returns Generator<any[], void, unknown>Inherited from BaseToken._initializationOrder


#### Returns Generator<any[], void, unknown>

Inherited from BaseToken._initializationOrder


### Static_isMovementUpdate

`Static`- _isMovementUpdate(changes: object): booleanInternalAre these changes moving the Token?
Parameterschanges: objectThe (candidate) changes
Returns booleanIs movement?
- changes: objectThe (candidate) changes
- _isMovementUpdate(changes: object, origin: TokenPosition): booleanInternalAre these changes moving the Token from the given origin?
Parameterschanges: objectThe (candidate) changes
origin: TokenPositionThe origin
Returns booleanIs movement?
- changes: objectThe (candidate) changes
- origin: TokenPositionThe origin

`Internal`Are these changes moving the Token?


#### Parameters

- changes: objectThe (candidate) changes

The (candidate) changes


#### Returns boolean

Is movement?

`Internal`Are these changes moving the Token from the given origin?


#### Parameters

- changes: objectThe (candidate) changes
- origin: TokenPositionThe origin

The (candidate) changes

The origin


#### Returns boolean

Is movement?


### Static_logDataFieldMigration

`Static`- _logDataFieldMigration(oldKey: string, newKey: string, options?: object): voidInternalLog a compatbility warning for the data field migration.
ParametersoldKey: stringThe old field name
newKey: stringThe new field name
Optionaloptions: object = {}Options passed to foundry.utils.logCompatibilityWarning
Returns voidInherited from BaseToken._logDataFieldMigration
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

Inherited from BaseToken._logDataFieldMigration


### Static_onCreateOperation

`Static`- _onCreateOperation(documents: any, operation: any, user: any): Promise<void>Parametersdocuments: anyoperation: anyuser: anyReturns Promise<void>Overrides BaseToken._onCreateOperation
- documents: any
- operation: any
- user: any


#### Parameters

- documents: any
- operation: any
- user: any


#### Returns Promise<void>

Overrides BaseToken._onCreateOperation


### Static_onDeleteOperation

`Static`- _onDeleteOperation(documents: any, operation: any, user: any): Promise<void>Parametersdocuments: anyoperation: anyuser: anyReturns Promise<void>Overrides BaseToken._onDeleteOperation
- documents: any
- operation: any
- user: any


#### Parameters

- documents: any
- operation: any
- user: any


#### Returns Promise<void>

Overrides BaseToken._onDeleteOperation


### Static_onUpdateOperation

`Static`- _onUpdateOperation(documents: any, operation: any, user: any): Promise<void>Parametersdocuments: anyoperation: anyuser: anyReturns Promise<void>Overrides BaseToken._onUpdateOperation
- documents: any
- operation: any
- user: any


#### Parameters

- documents: any
- operation: any
- user: any


#### Returns Promise<void>

Overrides BaseToken._onUpdateOperation


### Static_preCreateOperation

`Static`- _preCreateOperation(    documents: any,    operation: any,    user: any,): Promise<undefined | false>Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.
This batch-wise workflow occurs after individual _preCreate workflows and provides a final pre-flight check
before a database operation occurs.
Modifications to pending documents must mutate the documents array or alter individual document instances using
updateSource.
Parametersdocuments: anyPending document instances to be created
operation: anyParameters of the database creation operation
user: anyThe User requesting the creation operation
Returns Promise<undefined | false>Return false to cancel the creation operation entirely
Overrides BaseToken._preCreateOperation
- documents: anyPending document instances to be created
- operation: anyParameters of the database creation operation
- user: anyThe User requesting the creation operation

Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

This batch-wise workflow occurs after individual _preCreate workflows and provides a final pre-flight check
before a database operation occurs.

Modifications to pending documents must mutate the documents array or alter individual document instances using
updateSource.


#### Parameters

- documents: anyPending document instances to be created
- operation: anyParameters of the database creation operation
- user: anyThe User requesting the creation operation

Pending document instances to be created

Parameters of the database creation operation

The User requesting the creation operation


#### Returns Promise<undefined | false>

Return false to cancel the creation operation entirely

Overrides BaseToken._preCreateOperation


### Static_preUpdateOperation

`Static`- _preUpdateOperation(    documents: any,    operation: any,    user: any,): Promise<undefined | false>Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.
This batch-wise workflow occurs after individual _preUpdate workflows and provides a final pre-flight check
before a database operation occurs.
Modifications to the requested updates are performed by mutating the data array of the operation.
Parametersdocuments: anyDocument instances to be updated
operation: anyParameters of the database update operation
user: anyThe User requesting the update operation
Returns Promise<undefined | false>Return false to cancel the update operation entirely
Overrides BaseToken._preUpdateOperation
- documents: anyDocument instances to be updated
- operation: anyParameters of the database update operation
- user: anyThe User requesting the update operation

Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

This batch-wise workflow occurs after individual _preUpdate workflows and provides a final pre-flight check
before a database operation occurs.

Modifications to the requested updates are performed by mutating the data array of the operation.


#### Parameters

- documents: anyDocument instances to be updated
- operation: anyParameters of the database update operation
- user: anyThe User requesting the update operation

Document instances to be updated

Parameters of the database update operation

The User requesting the update operation


#### Returns Promise<undefined | false>

Return false to cancel the update operation entirely

Overrides BaseToken._preUpdateOperation


### StaticarePositionsEqual

`Static`- arePositionsEqual(position1: TokenPosition, position2: TokenPosition): booleanAre the given positions equal?
Parametersposition1: TokenPositionposition2: TokenPositionReturns booleanInherited from BaseToken.arePositionsEqual
- position1: TokenPosition
- position2: TokenPosition

Are the given positions equal?


#### Parameters

- position1: TokenPosition
- position2: TokenPosition


#### Returns boolean

Inherited from BaseToken.arePositionsEqual


### StaticcanUserCreate

`Static`- canUserCreate(user: BaseUser): booleanTest whether a given User has sufficient permissions to create Documents of this type in general. This does not
guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
may also be present.
Generally speaking, this method is used to verify whether a User should be presented with the option to create
Documents of this type in the UI.
Parametersuser: BaseUserThe User being tested
Returns booleanDoes the User have a sufficient role to create?
Inherited from BaseToken.canUserCreate
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

Inherited from BaseToken.canUserCreate


### StaticcleanData

`Static`- cleanData(source?: object, options?: object): objectClean a data source object to conform to a specific provided schema.
ParametersOptionalsource: object = {}The source data object
Optionaloptions: object = {}Additional options which are passed to field cleaning methods
Returns objectThe cleaned source data, which is the same object as the source argument
Inherited from BaseToken.cleanData
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

`source`Inherited from BaseToken.cleanData


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

Inherited from BaseToken.create
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

`const data = [{name: "Special Sword", type: "weapon"}];const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});`Inherited from BaseToken.create


### StaticcreateCombatants

`Static`- createCombatants(    tokens: TokenDocument[],    options?: { combat?: documents.Combat },): Promise<documents.Combatant[]>Create or remove Combatants for an array of provided Token objects.
Parameterstokens: TokenDocument[]The tokens which should be added to the Combat
Optionaloptions: { combat?: documents.Combat } = {}Options which modify the toggle operation
Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.
Returns Promise<documents.Combatant[]>An array of created Combatant documents
- tokens: TokenDocument[]The tokens which should be added to the Combat
- Optionaloptions: { combat?: documents.Combat } = {}Options which modify the toggle operation
Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.
- Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.

Create or remove Combatants for an array of provided Token objects.


#### Parameters

- tokens: TokenDocument[]The tokens which should be added to the Combat
- Optionaloptions: { combat?: documents.Combat } = {}Options which modify the toggle operation
Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.
- Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.

The tokens which should be added to the Combat

`Optional`Options which modify the toggle operation

- Optionalcombat?: documents.CombatA specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.


##### Optionalcombat?: documents.Combat

`Optional`A specific Combat instance which should be modified. If undefined, the
current active combat will be modified if one exists. Otherwise, a new
Combat encounter will be created if the requesting user is a Gamemaster.


#### Returns Promise<documents.Combatant[]>

An array of created Combatant documents


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

Inherited from BaseToken.createDocuments
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

`const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});`Inherited from BaseToken.createDocuments


### StaticdefineSchema

`Static`- defineSchema(): {    _id: DocumentIdField;    _movementHistory: ArrayField<SchemaField>;    _regions: ArrayField<ForeignDocumentField>;    actorId: ForeignDocumentField;    actorLink: BooleanField;    alpha: AlphaField;    bar1: SchemaField;    bar2: SchemaField;    delta: ActorDeltaField;    detectionModes: ArrayField<SchemaField>;    displayBars: NumberField;    displayName: NumberField;    disposition: NumberField;    elevation: NumberField;    flags: DocumentFlagsField;    height: NumberField;    hidden: BooleanField;    light: EmbeddedDataField;    locked: BooleanField;    lockRotation: BooleanField;    movementAction: StringField;    name: StringField;    occludable: SchemaField;    ring: SchemaField;    rotation: AngleField;    shape: NumberField;    sight: SchemaField;    sort: NumberField;    texture: TextureData;    turnMarker: SchemaField;    width: NumberField;    x: NumberField;    y: NumberField;}Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.
Returns {    _id: DocumentIdField;    _movementHistory: ArrayField<SchemaField>;    _regions: ArrayField<ForeignDocumentField>;    actorId: ForeignDocumentField;    actorLink: BooleanField;    alpha: AlphaField;    bar1: SchemaField;    bar2: SchemaField;    delta: ActorDeltaField;    detectionModes: ArrayField<SchemaField>;    displayBars: NumberField;    displayName: NumberField;    disposition: NumberField;    elevation: NumberField;    flags: DocumentFlagsField;    height: NumberField;    hidden: BooleanField;    light: EmbeddedDataField;    locked: BooleanField;    lockRotation: BooleanField;    movementAction: StringField;    name: StringField;    occludable: SchemaField;    ring: SchemaField;    rotation: AngleField;    shape: NumberField;    sight: SchemaField;    sort: NumberField;    texture: TextureData;    turnMarker: SchemaField;    width: NumberField;    x: NumberField;    y: NumberField;}Inherited from BaseToken.defineSchema

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.


#### Returns {    _id: DocumentIdField;    _movementHistory: ArrayField<SchemaField>;    _regions: ArrayField<ForeignDocumentField>;    actorId: ForeignDocumentField;    actorLink: BooleanField;    alpha: AlphaField;    bar1: SchemaField;    bar2: SchemaField;    delta: ActorDeltaField;    detectionModes: ArrayField<SchemaField>;    displayBars: NumberField;    displayName: NumberField;    disposition: NumberField;    elevation: NumberField;    flags: DocumentFlagsField;    height: NumberField;    hidden: BooleanField;    light: EmbeddedDataField;    locked: BooleanField;    lockRotation: BooleanField;    movementAction: StringField;    name: StringField;    occludable: SchemaField;    ring: SchemaField;    rotation: AngleField;    shape: NumberField;    sight: SchemaField;    sort: NumberField;    texture: TextureData;    turnMarker: SchemaField;    width: NumberField;    x: NumberField;    y: NumberField;}

Inherited from BaseToken.defineSchema


### StaticdeleteCombatants

`Static`- deleteCombatants(    tokens: TokenDocument[],    options?: { combat?: documents.Combat },): Promise<documents.Combatant[]>Remove Combatants for the array of provided Tokens.
Parameterstokens: TokenDocument[]The tokens which should removed from the Combat
Optionaloptions: { combat?: documents.Combat } = {}Options which modify the operation
Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted
Returns Promise<documents.Combatant[]>An array of deleted Combatant documents
- tokens: TokenDocument[]The tokens which should removed from the Combat
- Optionaloptions: { combat?: documents.Combat } = {}Options which modify the operation
Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted
- Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted

Remove Combatants for the array of provided Tokens.


#### Parameters

- tokens: TokenDocument[]The tokens which should removed from the Combat
- Optionaloptions: { combat?: documents.Combat } = {}Options which modify the operation
Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted
- Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted

The tokens which should removed from the Combat

`Optional`Options which modify the operation

- Optionalcombat?: documents.CombatA specific Combat instance from which Combatants should be deleted


##### Optionalcombat?: documents.Combat

`Optional`A specific Combat instance from which Combatants should be deleted


#### Returns Promise<documents.Combatant[]>

An array of deleted Combatant documents


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

Inherited from BaseToken.deleteDocuments
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

`const actor = await pack.getDocument(documentId);const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});`Inherited from BaseToken.deleteDocuments


### StaticfromJSON

`Static`- fromJSON(json: string): DataModel<object, DataModelConstructionContext>Create a DataModel instance using a provided serialized JSON string.
Parametersjson: stringSerialized document data in string format
Returns DataModel<object, DataModelConstructionContext>A constructed data model instance
Inherited from BaseToken.fromJSON
- json: stringSerialized document data in string format

Create a DataModel instance using a provided serialized JSON string.


#### Parameters

- json: stringSerialized document data in string format

Serialized document data in string format


#### Returns DataModel<object, DataModelConstructionContext>

A constructed data model instance

Inherited from BaseToken.fromJSON


### StaticfromSource

`Static`- fromSource(    source: object,    context?: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions,): DataModel<object, DataModelConstructionContext>Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.
Parameterssource: objectInitial document data which comes from a trusted source.
Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context
Returns DataModel<object, DataModelConstructionContext>Inherited from BaseToken.fromSource
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

Inherited from BaseToken.fromSource


### Staticget

`Static`- get(    documentId: string,    operation?: DatabaseGetOperation,): null | Document<object, DocumentConstructionContext>Get a World-level Document of this type by its id.
ParametersdocumentId: stringThe Document ID
Optionaloperation: DatabaseGetOperation = {}Parameters of the get operation
Returns null | Document<object, DocumentConstructionContext>The retrieved Document, or null
Inherited from BaseToken.get
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

Inherited from BaseToken.get


### StaticgetCollectionName

`Static`- getCollectionName(name: string): null | stringA compatibility method that returns the appropriate name of an embedded collection within this Document.
Parametersname: stringAn existing collection name or a document name.
Returns null | stringThe provided collection name if it exists, the first available collection for the
document name provided, or null if no appropriate embedded collection could be found.
Example: Passing an existing collection name.Actor.implementation.getCollectionName("items");// returns "items"
Copy

Example: Passing a document name.Actor.implementation.getCollectionName("Item");// returns "items"
Copy

Inherited from BaseToken.getCollectionName
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

`Actor.implementation.getCollectionName("Item");// returns "items"`Inherited from BaseToken.getCollectionName


### StaticgetTrackedAttributeChoices

`Static`- getTrackedAttributeChoices(attributes: object): objectInspect the Actor data model and identify the set of attributes which could be used for a Token Bar.
Parametersattributes: objectThe tracked attributes which can be chosen from
Returns objectA nested object of attribute choices to display
- attributes: objectThe tracked attributes which can be chosen from

Inspect the Actor data model and identify the set of attributes which could be used for a Token Bar.


#### Parameters

- attributes: objectThe tracked attributes which can be chosen from

The tracked attributes which can be chosen from


#### Returns object

A nested object of attribute choices to display


### StaticgetTrackedAttributes

`Static`- getTrackedAttributes(    data?:        | string        | object        | typeof DataModel        | DataModel<object, DataModelConstructionContext>        | SchemaField,    _path?: string[],): TrackedAttributesDescriptionGet an Array of attribute choices which could be tracked for Actors in the Combat Tracker
ParametersOptionaldata:     | string    | object    | typeof DataModel    | DataModel<object, DataModelConstructionContext>    | SchemaFieldThe object to explore for attributes, or an
Actor type.
Optional_path: string[] = []Returns TrackedAttributesDescription
- Optionaldata:     | string    | object    | typeof DataModel    | DataModel<object, DataModelConstructionContext>    | SchemaFieldThe object to explore for attributes, or an
Actor type.
- Optional_path: string[] = []

Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker


#### Parameters

- Optionaldata:     | string    | object    | typeof DataModel    | DataModel<object, DataModelConstructionContext>    | SchemaFieldThe object to explore for attributes, or an
Actor type.
- Optional_path: string[] = []

`Optional`The object to explore for attributes, or an
Actor type.

`Optional`
#### Returns TrackedAttributesDescription


### StaticmigrateData

`Static`- migrateData(data: any): objectMigrate candidate source data for this DataModel which may require initial cleaning or transformations.
Parametersdata: anyThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseToken.migrateData
- data: anyThe candidate source data from which the model will be constructed

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.


#### Parameters

- data: anyThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseToken.migrateData


### StaticmigrateDataSafe

`Static`- migrateDataSafe(source: object): objectWrap data migration in a try/catch which attempts it safely
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from BaseToken.migrateDataSafe
- source: objectThe candidate source data from which the model will be constructed

Wrap data migration in a try/catch which attempts it safely


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from BaseToken.migrateDataSafe


### StaticshimData

`Static`- shimData(data: any, options: any): objectTake data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.
Parametersdata: anyData which matches the current schema
options: anyAdditional shimming options
Returns objectData with added backwards-compatible properties, which is the same object as
the data argument
Inherited from BaseToken.shimData
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

`data`Inherited from BaseToken.shimData


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

Inherited from BaseToken.updateDocuments
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

`const actor = await pack.getDocument(documentId);const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  {pack: "mymodule.mypack"});`Inherited from BaseToken.updateDocuments


### StaticvalidateJoint

`Static`- validateJoint(data: object): voidEvaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.
Parametersdata: objectCandidate data for the model
Returns voidThrowsAn error if a validation failure is detected
Inherited from BaseToken.validateJoint
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

Inherited from BaseToken.validateJoint


### Protected Static_getConfiguredTrackedAttributes

`Protected``Static`- _getConfiguredTrackedAttributes(    type?: string,): void | TrackedAttributesDescriptionProtectedRetrieve any configured attributes for a given Actor type.
ParametersOptionaltype: stringThe Actor type.
Returns void | TrackedAttributesDescription
- Optionaltype: stringThe Actor type.

`Protected`Retrieve any configured attributes for a given Actor type.


#### Parameters

- Optionaltype: stringThe Actor type.

`Optional`The Actor type.


#### Returns void | TrackedAttributesDescription


### Protected Static_getTrackedAttributesFromObject

`Protected``Static`- _getTrackedAttributesFromObject(    data: object,    _path?: string[],): TrackedAttributesDescriptionProtectedRetrieve an Array of attribute choices from a plain object.
Parametersdata: objectThe object to explore for attributes.
_path: string[] = []Returns TrackedAttributesDescription
- data: objectThe object to explore for attributes.
- _path: string[] = []

`Protected`Retrieve an Array of attribute choices from a plain object.


#### Parameters

- data: objectThe object to explore for attributes.
- _path: string[] = []

The object to explore for attributes.


#### Returns TrackedAttributesDescription


### Protected Static_getTrackedAttributesFromSchema

`Protected``Static`- _getTrackedAttributesFromSchema(    schema: SchemaField,    _path?: string[],): TrackedAttributesDescriptionProtectedRetrieve an Array of attribute choices from a SchemaField.
Parametersschema: SchemaFieldThe schema to explore for attributes.
_path: string[] = []Returns TrackedAttributesDescription
- schema: SchemaFieldThe schema to explore for attributes.
- _path: string[] = []

`Protected`Retrieve an Array of attribute choices from a SchemaField.


#### Parameters

- schema: SchemaFieldThe schema to explore for attributes.
- _path: string[] = []

The schema to explore for attributes.


#### Returns TrackedAttributesDescription


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
Inherited from BaseToken._preDeleteOperation
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

Inherited from BaseToken._preDeleteOperation


### Settings

- Protected
- Inherited
- Internal


### On This Page

