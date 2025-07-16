# DataModel | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.abstract.DataModel.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- abstract
- DataModel


# Class DataModel<ModelData, ModelContext>Abstract

`Abstract`The abstract base class which defines the data schema contained within a Document.


#### Type Parameters

- ModelData = object
- ModelContext = DataModelConstructionContext


#### Hierarchy (View Summary)

- DataModelCalendarDataLightDataPrototypeTokenPrototypeTokenOverridesShapeDataBaseShapeDataTombstoneDataBaseTerrainDataBasePackageTypeDataModelDocumentReleaseDataServerSettingsDynamicRingDataTurnMarkerDataVisionModeDetectionMode
- CalendarData
- LightData
- PrototypeToken
- PrototypeTokenOverrides
- ShapeData
- BaseShapeData
- TombstoneData
- BaseTerrainData
- BasePackage
- TypeDataModel
- Document
- ReleaseData
- ServerSettings
- DynamicRingData
- TurnMarkerData
- VisionMode
- DetectionMode

- CalendarData
- LightData
- PrototypeToken
- PrototypeTokenOverrides
- ShapeData
- BaseShapeData
- TombstoneData
- BaseTerrainData
- BasePackage
- TypeDataModel
- Document
- ReleaseData
- ServerSettings
- DynamicRingData
- TurnMarkerData
- VisionMode
- DetectionMode


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new DataModel<    ModelData extends object = object,    ModelContext extends        DataModelConstructionContext = DataModelConstructionContext,>(    data?: Partial<ModelData>,    options?: ModelContext,): DataModel<ModelData, ModelContext>Type ParametersModelData extends object = objectModelContext extends DataModelConstructionContext = DataModelConstructionContextParametersOptionaldata: Partial<ModelData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
Optionaloptions: ModelContext = {}Context and data validation options which affects initial model construction.
Returns DataModel<ModelData, ModelContext>
- ModelData extends object = object
- ModelContext extends DataModelConstructionContext = DataModelConstructionContext
- Optionaldata: Partial<ModelData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: ModelContext = {}Context and data validation options which affects initial model construction.


#### Type Parameters

- ModelData extends object = object
- ModelContext extends DataModelConstructionContext = DataModelConstructionContext


#### Parameters

- Optionaldata: Partial<ModelData> = {}Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.
- Optionaloptions: ModelContext = {}Context and data validation options which affects initial model construction.

`Optional`Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

`Optional`Context and data validation options which affects initial model construction.


#### Returns DataModel<ModelData, ModelContext>


## Properties


### _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.


### parent

An immutable reverse-reference to a parent DataModel to which this model belongs.


### Static Internal_schema

`Static``Internal`The defined and cached Data Schema for all instances of this DataModel.


### StaticLOCALIZATION_PREFIXES

`Static`A set of localization prefix paths which are used by this DataModel.


## Accessors


### invalid

- get invalid(): booleanIs the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.
Returns boolean

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.


#### Returns boolean


### schema

- get schema(): SchemaFieldDefine the data schema for this document instance.
Returns SchemaField

Define the data schema for this document instance.


#### Returns SchemaField


### validationFailures

- get validationFailures(): {    fields: null    | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}An array of validation failure instances which may have occurred when this instance was last validated.
Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}

An array of validation failure instances which may have occurred when this instance was last validated.


#### Returns {    fields: null | DataModelValidationFailure;    joint: null | DataModelValidationFailure;}


### Staticschema

`Static`- get schema(): SchemaFieldThe Data Schema for all instances of this DataModel.
Returns SchemaField

The Data Schema for all instances of this DataModel.


#### Returns SchemaField


## Methods


### clone

- clone(    data?: object,    context?: DataModelConstructionContext,):    | DataModel<object, DataModelConstructionContext>    | Promise<DataModel<object, DataModelConstructionContext>>Clone a model, creating a new data model by combining current data with provided overrides.
ParametersOptionaldata: object = {}Additional data which overrides current document data at the time of creation
Optionalcontext: DataModelConstructionContext = {}Context options passed to the data model constructor
Returns     | DataModel<object, DataModelConstructionContext>    | Promise<DataModel<object, DataModelConstructionContext>>The cloned instance
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


### reset

- reset(): voidReset the state of this data instance back to mirror the contained source data, erasing any changes.
Returns void

Reset the state of this data instance back to mirror the contained source data, erasing any changes.


#### Returns void


### toJSON

- toJSON(): objectExtract the source data for the DataModel into a simple object format that can be serialized.
Returns objectThe document source data expressed as a plain object

Extract the source data for the DataModel into a simple object format that can be serialized.


#### Returns object

The document source data expressed as a plain object


### toObject

- toObject(source?: boolean): objectCopy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.
ParametersOptionalsource: boolean = trueDraw values from the underlying data source rather than transformed values
Returns objectThe extracted primitive object
- Optionalsource: boolean = trueDraw values from the underlying data source rather than transformed values

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.


#### Parameters

- Optionalsource: boolean = trueDraw values from the underlying data source rather than transformed values

`Optional`Draw values from the underlying data source rather than transformed values


#### Returns object

The extracted primitive object


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


### validate

- validate(options?: DataModelValidationOptions): booleanValidate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.
Parametersoptions: DataModelValidationOptions = {}Options which modify how the model is validated
Returns booleanWhether the data source or proposed change is reported as valid.
A boolean is always returned if validation is non-strict.
ThrowsAn error thrown if validation is strict and a failure occurs.
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


### Protected_configure

`Protected`- _configure(options?: object): voidProtectedConfigure the data model instance before validation and initialization workflows are performed.
ParametersOptionaloptions: object = {}Additional options modifying the configuration
Returns void
- Optionaloptions: object = {}Additional options modifying the configuration

`Protected`Configure the data model instance before validation and initialization workflows are performed.


#### Parameters

- Optionaloptions: object = {}Additional options modifying the configuration

`Optional`Additional options modifying the configuration


#### Returns void


### Protected_initialize

`Protected`- _initialize(options?: object): voidProtectedInitialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.
ParametersOptionaloptions: object = {}Options provided to the model constructor
Returns void
- Optionaloptions: object = {}Options provided to the model constructor

`Protected`Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.


#### Parameters

- Optionaloptions: object = {}Options provided to the model constructor

`Optional`Options provided to the model constructor


#### Returns void


### Protected_initializeSource

`Protected`- _initializeSource(    data: object | DataModel<object, DataModelConstructionContext>,    options?: object,): objectProtectedInitialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.
Parametersdata: object | DataModel<object, DataModelConstructionContext>The candidate source data from which the model will be constructed
Optionaloptions: object = {}Options provided to the model constructor
Returns objectMigrated and cleaned source data which will be stored to the model instance,
which is the same object as the data argument
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

`data`
### StaticcleanData

`Static`- cleanData(source?: object, options?: object): objectClean a data source object to conform to a specific provided schema.
ParametersOptionalsource: object = {}The source data object
Optionaloptions: object = {}Additional options which are passed to field cleaning methods
Returns objectThe cleaned source data, which is the same object as the source argument
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

`source`
### Static AbstractdefineSchema

`Static``Abstract`- defineSchema(): DataSchemaDefine the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.
Returns DataSchema

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.


#### Returns DataSchema


### StaticfromJSON

`Static`- fromJSON(json: string): DataModel<object, DataModelConstructionContext>Create a DataModel instance using a provided serialized JSON string.
Parametersjson: stringSerialized document data in string format
Returns DataModel<object, DataModelConstructionContext>A constructed data model instance
- json: stringSerialized document data in string format

Create a DataModel instance using a provided serialized JSON string.


#### Parameters

- json: stringSerialized document data in string format

Serialized document data in string format


#### Returns DataModel<object, DataModelConstructionContext>

A constructed data model instance


### StaticfromSource

`Static`- fromSource(    source: object,    context?: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions,): DataModel<object, DataModelConstructionContext>Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.
Parameterssource: objectInitial document data which comes from a trusted source.
Optionalcontext: Omit<DataModelConstructionContext, "strict"> & DataModelFromSourceOptions = {}Model construction context
Returns DataModel<object, DataModelConstructionContext>
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


### StaticmigrateData

`Static`- migrateData(source: object): objectMigrate candidate source data for this DataModel which may require initial cleaning or transformations.
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
- source: objectThe candidate source data from which the model will be constructed

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`
### StaticmigrateDataSafe

`Static`- migrateDataSafe(source: object): objectWrap data migration in a try/catch which attempts it safely
Parameterssource: objectThe candidate source data from which the model will be constructed
Returns objectMigrated source data, which is the same object as the source argument
- source: objectThe candidate source data from which the model will be constructed

Wrap data migration in a try/catch which attempts it safely


#### Parameters

- source: objectThe candidate source data from which the model will be constructed

The candidate source data from which the model will be constructed


#### Returns object

Migrated source data, which is the same object as the source argument

`source`
### StaticshimData

`Static`- shimData(data: object, options?: { embedded?: boolean }): objectTake data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.
Parametersdata: objectData which matches the current schema
Optionaloptions: { embedded?: boolean } = {}Additional shimming options
Optionalembedded?: booleanApply shims to embedded models?
Returns objectData with added backwards-compatible properties, which is the same object as
the data argument
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

`data`
### StaticvalidateJoint

`Static`- validateJoint(data: object): voidEvaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.
Parametersdata: objectCandidate data for the model
Returns voidThrowsAn error if a validation failure is detected
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


### Protected Static_initializationOrder

`Protected``Static`- _initializationOrder(): Generator<[string, DataField], any, any>ProtectedA generator that orders the DataFields in the DataSchema into an expected initialization order.
Returns Generator<[string, DataField], any, any>Yields

`Protected`A generator that orders the DataFields in the DataSchema into an expected initialization order.


#### Returns Generator<[string, DataField], any, any>


#### Yields


### Settings

- Protected
- Inherited
- Internal


### On This Page

