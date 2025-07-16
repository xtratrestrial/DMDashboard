# RegionBehaviorType | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.data.regionBehaviors.RegionBehaviorType.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- data
- regionBehaviors
- RegionBehaviorType


# Class RegionBehaviorTypeAbstract

`Abstract`The data model for a behavior that receives Region events.


#### Hierarchy (View Summary)

- TypeDataModelRegionBehaviorTypeAdjustDarknessLevelRegionBehaviorTypeDisplayScrollingTextRegionBehaviorTypeExecuteMacroRegionBehaviorTypeExecuteScriptRegionBehaviorTypeModifyMovementCostRegionBehaviorTypePauseGameRegionBehaviorTypeSuppressWeatherRegionBehaviorTypeTeleportTokenRegionBehaviorTypeToggleBehaviorRegionBehaviorType
- RegionBehaviorTypeAdjustDarknessLevelRegionBehaviorTypeDisplayScrollingTextRegionBehaviorTypeExecuteMacroRegionBehaviorTypeExecuteScriptRegionBehaviorTypeModifyMovementCostRegionBehaviorTypePauseGameRegionBehaviorTypeSuppressWeatherRegionBehaviorTypeTeleportTokenRegionBehaviorTypeToggleBehaviorRegionBehaviorType
- AdjustDarknessLevelRegionBehaviorType
- DisplayScrollingTextRegionBehaviorType
- ExecuteMacroRegionBehaviorType
- ExecuteScriptRegionBehaviorType
- ModifyMovementCostRegionBehaviorType
- PauseGameRegionBehaviorType
- SuppressWeatherRegionBehaviorType
- TeleportTokenRegionBehaviorType
- ToggleBehaviorRegionBehaviorType

- RegionBehaviorTypeAdjustDarknessLevelRegionBehaviorTypeDisplayScrollingTextRegionBehaviorTypeExecuteMacroRegionBehaviorTypeExecuteScriptRegionBehaviorTypeModifyMovementCostRegionBehaviorTypePauseGameRegionBehaviorTypeSuppressWeatherRegionBehaviorTypeTeleportTokenRegionBehaviorTypeToggleBehaviorRegionBehaviorType
- AdjustDarknessLevelRegionBehaviorType
- DisplayScrollingTextRegionBehaviorType
- ExecuteMacroRegionBehaviorType
- ExecuteScriptRegionBehaviorType
- ModifyMovementCostRegionBehaviorType
- PauseGameRegionBehaviorType
- SuppressWeatherRegionBehaviorType
- TeleportTokenRegionBehaviorType
- ToggleBehaviorRegionBehaviorType

- AdjustDarknessLevelRegionBehaviorType
- DisplayScrollingTextRegionBehaviorType
- ExecuteMacroRegionBehaviorType
- ExecuteScriptRegionBehaviorType
- ModifyMovementCostRegionBehaviorType
- PauseGameRegionBehaviorType
- SuppressWeatherRegionBehaviorType
- TeleportTokenRegionBehaviorType
- ToggleBehaviorRegionBehaviorType


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new RegionBehaviorType(data?: {}, options?: {}): RegionBehaviorTypeParametersdata: {} = {}options: {} = {}Returns RegionBehaviorTypeInherit DocInherited from TypeDataModel.constructor
- data: {} = {}
- options: {} = {}


#### Parameters

- data: {} = {}
- options: {} = {}


#### Returns RegionBehaviorType


#### Inherit Doc

Inherited from TypeDataModel.constructor


## Properties


### _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from TypeDataModel._source


### events

The events that are handled by the behavior.


### parent

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from TypeDataModel.parent


### Static Internal_schema

`Static``Internal`The defined and cached Data Schema for all instances of this DataModel.

Inherited from TypeDataModel._schema


### Staticevents

`Static`The Region events that are handled by the behavior.


### StaticLOCALIZATION_PREFIXES

`Static`A set of localization prefix paths which are used by this data model.

Inherited from TypeDataModel.LOCALIZATION_PREFIXES


## Accessors


### behavior

- get behavior(): null | documents.RegionBehaviorA convenience reference to the RegionBehavior which contains this behavior sub-type.
Returns null | documents.RegionBehavior

A convenience reference to the RegionBehavior which contains this behavior sub-type.


#### Returns null | documents.RegionBehavior


### invalid

- get invalid(): booleanIs the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.
Returns booleanInherited from TypeDataModel.invalid

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.


#### Returns boolean

Inherited from TypeDataModel.invalid


### region

- get region(): null | RegionDocumentA convenience reference to the RegionDocument which contains this behavior sub-type.
Returns null | RegionDocument

A convenience reference to the RegionDocument which contains this behavior sub-type.


#### Returns null | RegionDocument


### scene

- get scene(): null | documents.SceneA convenience reference to the Scene which contains this behavior sub-type.
Returns null | documents.Scene

A convenience reference to the Scene which contains this behavior sub-type.


#### Returns null | documents.Scene


### schema

- get schema(): SchemaFieldDefine the data schema for this document instance.
Returns SchemaFieldInherited from TypeDataModel.schema

Define the data schema for this document instance.


#### Returns SchemaField

Inherited from TypeDataModel.schema


### validationFailures

- get validationFailures(): {    fields: null    | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}An array of validation failure instances which may have occurred when this instance was last validated.
Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}Inherited from TypeDataModel.validationFailures

An array of validation failure instances which may have occurred when this instance was last validated.


#### Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}

Inherited from TypeDataModel.validationFailures


### Staticschema

`Static`- get schema(): SchemaFieldReturns SchemaFieldInherited from TypeDataModel.schema


#### Returns SchemaField

Inherited from TypeDataModel.schema


## Methods


### _preCreate

- _preCreate(    data: object,    options: object,    user: BaseUser,): Promise<boolean | void>InternalCalled by ClientDocument#_preCreate.
Parametersdata: objectThe initial data object provided to the document creation request
options: objectAdditional options which modify the creation request
user: BaseUserThe User requesting the document creation
Returns Promise<boolean | void>Return false to exclude this Document from the creation operation
Inherited from TypeDataModel._preCreate
- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- user: BaseUserThe User requesting the document creation

`Internal`Called by ClientDocument#_preCreate.


#### Parameters

- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- user: BaseUserThe User requesting the document creation

The initial data object provided to the document creation request

Additional options which modify the creation request

The User requesting the document creation


#### Returns Promise<boolean | void>

Return false to exclude this Document from the creation operation

Inherited from TypeDataModel._preCreate


### clone

- clone(    data?: object,    context?: DataModelConstructionContext,):    | DataModel<object, DataModelConstructionContext>    | Promise<DataModel<object, DataModelConstructionContext>>Clone a model, creating a new data model by combining current data with provided overrides.
ParametersOptionaldata: object = {}Additional data which overrides current document data at the time of creation
Optionalcontext: DataModelConstructionContext = {}Context options passed to the data model constructor
Returns     | DataModel<object, DataModelConstructionContext>    | Promise<DataModel<object, DataModelConstructionContext>>The cloned instance
Inherited from TypeDataModel.clone
- Optionaldata: object = {}Additional data which overrides current document data at the time of creation
- Optionalcontext: DataModelConstructionContext = {}Context options passed to the data model constructor

Clone a model, creating a new data model by combining current data with provided overrides.


#### Parameters

- Optionaldata: object = {}Additional data which overrides current document data at the time of creation
- Optionalcontext: DataModelConstructionContext = {}Context options passed to the data model constructor

`Optional`Additional data which overrides current document data at the time of creation

`Optional`Context options passed to the data model constructor


#### Returns     | DataModel<object, DataModelConstructionContext>    | Promise<DataModel<object, DataModelConstructionContext>>

The cloned instance

Inherited from TypeDataModel.clone


### prepareBaseData

- prepareBaseData(): voidPrepare data related to this DataModel itself, before any derived data is computed.
Called before ClientDocumentMixin#prepareBaseData in ClientDocumentMixin#prepareData.
Returns voidInherited from TypeDataModel.prepareBaseData

Prepare data related to this DataModel itself, before any derived data is computed.

Called before ClientDocumentMixin#prepareBaseData in ClientDocumentMixin#prepareData.


#### Returns void

Inherited from TypeDataModel.prepareBaseData


### prepareDerivedData

- prepareDerivedData(): voidApply transformations of derivations to the values of the source data object.
Compute data fields whose values are not stored to the database.
Called before ClientDocumentMixin#prepareDerivedData in ClientDocumentMixin#prepareData.
Returns voidInherited from TypeDataModel.prepareDerivedData

Apply transformations of derivations to the values of the source data object.
Compute data fields whose values are not stored to the database.

Called before ClientDocumentMixin#prepareDerivedData in ClientDocumentMixin#prepareData.


#### Returns void

Inherited from TypeDataModel.prepareDerivedData


### reset

- reset(): voidReset the state of this data instance back to mirror the contained source data, erasing any changes.
Returns voidInherited from TypeDataModel.reset

Reset the state of this data instance back to mirror the contained source data, erasing any changes.


#### Returns void

Inherited from TypeDataModel.reset


### toEmbed

- toEmbed(config: DocumentHTMLEmbedConfig, options?: any): Promise<any>Convert this Document to some HTML display for embedding purposes.
Parametersconfig: DocumentHTMLEmbedConfigConfiguration for embedding behavior.
Optionaloptions: any = {}The original enrichment options for cases where the Document embed content
also contains text that must be enriched.
Returns Promise<any>Inherited from TypeDataModel.toEmbed
- config: DocumentHTMLEmbedConfigConfiguration for embedding behavior.
- Optionaloptions: any = {}The original enrichment options for cases where the Document embed content
also contains text that must be enriched.

Convert this Document to some HTML display for embedding purposes.


#### Parameters

- config: DocumentHTMLEmbedConfigConfiguration for embedding behavior.
- Optionaloptions: any = {}The original enrichment options for cases where the Document embed content
also contains text that must be enriched.

Configuration for embedding behavior.

`Optional`The original enrichment options for cases where the Document embed content
also contains text that must be enriched.


#### Returns Promise<any>

Inherited from TypeDataModel.toEmbed


### toJSON

- toJSON(): objectExtract the source data for the DataModel into a simple object format that can be serialized.
Returns objectThe document source data expressed as a plain object
Inherited from TypeDataModel.toJSON

Extract the source data for the DataModel into a simple object format that can be serialized.


#### Returns object

The document source data expressed as a plain object

Inherited from TypeDataModel.toJSON


### toObject

- toObject(source?: boolean): objectCopy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.
ParametersOptionalsource: boolean = trueDraw values from the underlying data source rather than transformed values
Returns objectThe extracted primitive object
Inherited from TypeDataModel.toObject
- Optionalsource: boolean = trueDraw values from the underlying data source rather than transformed values

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.


#### Parameters

- Optionalsource: boolean = trueDraw values from the underlying data source rather than transformed values

`Optional`Draw values from the underlying data source rather than transformed values


#### Returns object

The extracted primitive object

Inherited from TypeDataModel.toObject


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
Inherited from TypeDataModel.updateSource
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

Inherited from TypeDataModel.updateSource


### validate

- validate(options?: DataModelValidationOptions): booleanValidate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.
Parametersoptions: DataModelValidationOptions = {}Options which modify how the model is validated
Returns booleanWhether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.
ThrowsAn error thrown if validation is strict and a failure occurs.
Inherited from TypeDataModel.validate
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

Inherited from TypeDataModel.validate


### Protected_configure

`Protected`- _configure(options?: object): voidProtectedConfigure the data model instance before validation and initialization workflows are performed.
ParametersOptionaloptions: object = {}Additional options modifying the configuration
Returns voidInherited from TypeDataModel._configure
- Optionaloptions: object = {}Additional options modifying the configuration

`Protected`Configure the data model instance before validation and initialization workflows are performed.


#### Parameters

- Optionaloptions: object = {}Additional options modifying the configuration

`Optional`Additional options modifying the configuration


#### Returns void

Inherited from TypeDataModel._configure


### Protected_getTerrainEffects

`Protected`- _getTerrainEffects<TerrainEffect>(    token: TokenDocument,    segment: Pick<        TokenMovementWaypoint,        "shape"        | "height"        | "width"        | "action",    > & { preview: boolean },): TerrainEffect[]ProtectedGet the terrain effects of this behavior for the movement of the given token.
This function is called only for behaviors that are not disabled.
The terrain data is created from the terrain effects
(CONFIG.Token.movement.TerrainData.resolveTerrainEffects).
Returns an empty array by default.
Type ParametersTerrainEffectParameterstoken: TokenDocumentThe token being or about to be moved within the region of this behavior
segment: Pick<TokenMovementWaypoint, "shape" | "height" | "width" | "action"> & {    preview: boolean;}The segment data of the token's movement
Returns TerrainEffect[]The terrain effects that apply to this token's movement
- TerrainEffect
- token: TokenDocumentThe token being or about to be moved within the region of this behavior
- segment: Pick<TokenMovementWaypoint, "shape" | "height" | "width" | "action"> & {    preview: boolean;}The segment data of the token's movement

`Protected`Get the terrain effects of this behavior for the movement of the given token.
This function is called only for behaviors that are not disabled.
The terrain data is created from the terrain effects
(CONFIG.Token.movement.TerrainData.resolveTerrainEffects).
Returns an empty array by default.


#### Type Parameters

- TerrainEffect


#### Parameters

- token: TokenDocumentThe token being or about to be moved within the region of this behavior
- segment: Pick<TokenMovementWaypoint, "shape" | "height" | "width" | "action"> & {    preview: boolean;}The segment data of the token's movement

The token being or about to be moved within the region of this behavior

The segment data of the token's movement


#### Returns TerrainEffect[]

The terrain effects that apply to this token's movement


### Protected_handleRegionEvent

`Protected`- _handleRegionEvent(event: RegionEvent): Promise<void>ProtectedHandle the Region event.
Parametersevent: RegionEventThe Region event
Returns Promise<void>
- event: RegionEventThe Region event

`Protected`Handle the Region event.


#### Parameters

- event: RegionEventThe Region event

The Region event


#### Returns Promise<void>


### Protected_initialize

`Protected`- _initialize(options?: object): voidProtectedInitialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.
ParametersOptionaloptions: object = {}Options provided to the model constructor
Returns voidInherited from TypeDataModel._initialize
- Optionaloptions: object = {}Options provided to the model constructor

`Protected`Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.


#### Parameters

- Optionaloptions: object = {}Options provided to the model constructor

`Optional`Options provided to the model constructor


#### Returns void

Inherited from TypeDataModel._initialize


### Protected_initializeSource

`Protected`- _initializeSource(    data: object | DataModel<object, DataModelConstructionContext>,    options?: object,): objectProtectedInitialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.
Parametersdata: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
Optionaloptions: object = {}Options provided to the model constructor
Returns objectMigrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument
Inherited from TypeDataModel._initializeSource
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

`data`Inherited from TypeDataModel._initializeSource


### Protected_onCreate

`Protected`- _onCreate(data: object, options: object, userId: string): voidProtectedCalled by ClientDocument#_onCreate.
Parametersdata: objectThe initial data object provided to the document creation request
options: objectAdditional options which modify the creation request
userId: stringThe id of the User requesting the document update
Returns voidInherited from TypeDataModel._onCreate
- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- userId: stringThe id of the User requesting the document update

`Protected`Called by ClientDocument#_onCreate.


#### Parameters

- data: objectThe initial data object provided to the document creation request
- options: objectAdditional options which modify the creation request
- userId: stringThe id of the User requesting the document update

The initial data object provided to the document creation request

Additional options which modify the creation request

The id of the User requesting the document update


#### Returns void

Inherited from TypeDataModel._onCreate


### Protected_onDelete

`Protected`- _onDelete(options: object, userId: string): voidProtectedCalled by ClientDocumentMixin#_onDelete.
Parametersoptions: objectAdditional options which modify the deletion request
userId: stringThe id of the User requesting the document update
Returns voidInherited from TypeDataModel._onDelete
- options: objectAdditional options which modify the deletion request
- userId: stringThe id of the User requesting the document update

`Protected`Called by ClientDocumentMixin#_onDelete.


#### Parameters

- options: objectAdditional options which modify the deletion request
- userId: stringThe id of the User requesting the document update

Additional options which modify the deletion request

The id of the User requesting the document update


#### Returns void

Inherited from TypeDataModel._onDelete


### Protected_onUpdate

`Protected`- _onUpdate(changed: object, options: object, userId: string): voidProtectedCalled by ClientDocumentMixin#_onUpdate.
Parameterschanged: objectThe differential data that was changed relative to the documents prior values
options: objectAdditional options which modify the update request
userId: stringThe id of the User requesting the document update
Returns voidInherited from TypeDataModel._onUpdate
- changed: objectThe differential data that was changed relative to the documents prior values
- options: objectAdditional options which modify the update request
- userId: stringThe id of the User requesting the document update

`Protected`Called by ClientDocumentMixin#_onUpdate.


#### Parameters

- changed: objectThe differential data that was changed relative to the documents prior values
- options: objectAdditional options which modify the update request
- userId: stringThe id of the User requesting the document update

The differential data that was changed relative to the documents prior values

Additional options which modify the update request

The id of the User requesting the document update


#### Returns void

Inherited from TypeDataModel._onUpdate


### Protected_preDelete

`Protected`- _preDelete(options: object, user: BaseUser): Promise<boolean | void>ProtectedCalled by ClientDocumentMixin#_preDelete.
Parametersoptions: objectAdditional options which modify the deletion request
user: BaseUserThe User requesting the document deletion
Returns Promise<boolean | void>A return value of false indicates the deletion operation should be cancelled.
Inherited from TypeDataModel._preDelete
- options: objectAdditional options which modify the deletion request
- user: BaseUserThe User requesting the document deletion

`Protected`Called by ClientDocumentMixin#_preDelete.


#### Parameters

- options: objectAdditional options which modify the deletion request
- user: BaseUserThe User requesting the document deletion

Additional options which modify the deletion request

The User requesting the document deletion


#### Returns Promise<boolean | void>

A return value of false indicates the deletion operation should be cancelled.

Inherited from TypeDataModel._preDelete


### Protected_preUpdate

`Protected`- _preUpdate(    changes: object,    options: object,    user: BaseUser,): Promise<boolean | void>ProtectedCalled by ClientDocumentMixin#_preUpdate.
Parameterschanges: objectThe candidate changes to the Document
options: objectAdditional options which modify the update request
user: BaseUserThe User requesting the document update
Returns Promise<boolean | void>A return value of false indicates the update operation should be cancelled.
Inherited from TypeDataModel._preUpdate
- changes: objectThe candidate changes to the Document
- options: objectAdditional options which modify the update request
- user: BaseUserThe User requesting the document update

`Protected`Called by ClientDocumentMixin#_preUpdate.


#### Parameters

- changes: objectThe candidate changes to the Document
- options: objectAdditional options which modify the update request
- user: BaseUserThe User requesting the document update

The candidate changes to the Document

Additional options which modify the update request

The User requesting the document update


#### Returns Promise<boolean | void>

A return value of false indicates the update operation should be cancelled.

Inherited from TypeDataModel._preUpdate


### StaticcleanData

`Static`- cleanData(source?: object, options?: object): objectClean a data source object to conform to a specific provided schema.
ParametersOptionalsource: object = {}The source data object
Optionaloptions: object = {}Additional options which are passed to field cleaning methods
Returns objectThe cleaned source data, which is the same object as the source argument
Inherited from TypeDataModel.cleanData
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

`source`Inherited from TypeDataModel.cleanData


### Static AbstractdefineSchema

`Static``Abstract`- defineSchema(): DataSchemaDefine the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.
Returns DataSchemaInherited from TypeDataModel.defineSchema

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.


#### Returns DataSchema

Inherited from TypeDataModel.defineSchema


### StaticfromJSON

`Static`- fromJSON(json: string): DataModel<object, DataModelConstructionContext>Create a DataModel instance using a provided serialized JSON string.
Parametersjson: stringSerialized document data in string format
Returns DataModel<object, DataModelConstructionContext>A constructed data model instance
Inherited from TypeDataModel.fromJSON
- json: stringSerialized document data in string format

Create a DataModel instance using a provided serialized JSON string.


#### Parameters

- json: stringSerialized document data in string format

Serialized document data in string format


#### Returns DataModel<object, DataModelConstructionContext>

A constructed data model instance

Inherited from TypeDataModel.fromJSON


### StaticfromSource

`Static`- fromSource(    source: object,    context?: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions,): DataModel<object, DataModelConstructionContext>Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.
Parameterssource: objectInitial document data which comes from a trusted source.
Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context
Returns DataModel<object, DataModelConstructionContext>Inherited from TypeDataModel.fromSource
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

Inherited from TypeDataModel.fromSource


### StaticmigrateData

`Static`- migrateData(source: object): objectMigrate candidate source data for this DataModel which may require initial cleaning or transformations.
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from TypeDataModel.migrateData
- source: objectThe candidate source data from which the model will be constructed

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from TypeDataModel.migrateData


### StaticmigrateDataSafe

`Static`- migrateDataSafe(source: object): objectWrap data migration in a try/catch which attempts it safely
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
Inherited from TypeDataModel.migrateDataSafe
- source: objectThe candidate source data from which the model will be constructed

Wrap data migration in a try/catch which attempts it safely


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`Inherited from TypeDataModel.migrateDataSafe


### StaticshimData

`Static`- shimData(data: object, options?: { embedded?: boolean }): objectTake data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.
Parametersdata: objectData which matches the current schema
Optionaloptions: { embedded?: boolean } = {}Additional shimming options
Optionalembedded?: booleanApply shims to embedded models?
Returns objectData with added backwards-compatible properties, which is the same object as
the data argument
Inherited from TypeDataModel.shimData
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

`data`Inherited from TypeDataModel.shimData


### StaticvalidateJoint

`Static`- validateJoint(data: object): voidEvaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.
Parametersdata: objectCandidate data for the model
Returns voidThrowsAn error if a validation failure is detected
Inherited from TypeDataModel.validateJoint
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

Inherited from TypeDataModel.validateJoint


### Protected Static_createEventsField

`Protected``Static`- _createEventsField(    options?: { events?: string[]; initial?: string[] },): SetFieldProtectedCreate the events field.
Parametersoptions: { events?: string[]; initial?: string[] } = {}Options which configure how the events field is declared
Optionalevents?: string[]The event names to restrict to.
Optionalinitial?: string[]The initial set of events that should be default for the field
Returns SetField
- options: { events?: string[]; initial?: string[] } = {}Options which configure how the events field is declared
Optionalevents?: string[]The event names to restrict to.
Optionalinitial?: string[]The initial set of events that should be default for the field
- Optionalevents?: string[]The event names to restrict to.
- Optionalinitial?: string[]The initial set of events that should be default for the field

`Protected`Create the events field.


#### Parameters

- options: { events?: string[]; initial?: string[] } = {}Options which configure how the events field is declared
Optionalevents?: string[]The event names to restrict to.
Optionalinitial?: string[]The initial set of events that should be default for the field
- Optionalevents?: string[]The event names to restrict to.
- Optionalinitial?: string[]The initial set of events that should be default for the field

Options which configure how the events field is declared

- Optionalevents?: string[]The event names to restrict to.
- Optionalinitial?: string[]The initial set of events that should be default for the field


##### Optionalevents?: string[]

`Optional`The event names to restrict to.


##### Optionalinitial?: string[]

`Optional`The initial set of events that should be default for the field


#### Returns SetField


### Protected Static_initializationOrder

`Protected``Static`- _initializationOrder(): Generator<[string, DataField], any, any>ProtectedA generator that orders the DataFields in the DataSchema into an expected initialization order.
Returns Generator<[string, DataField], any, any>YieldsInherited from TypeDataModel._initializationOrder

`Protected`A generator that orders the DataFields in the DataSchema into an expected initialization order.


#### Returns Generator<[string, DataField], any, any>


#### Yields

Inherited from TypeDataModel._initializationOrder


### Settings

- Protected
- Inherited
- Internal


### On This Page

