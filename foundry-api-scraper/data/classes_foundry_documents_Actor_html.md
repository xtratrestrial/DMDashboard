Source: https://foundryvtt.com/api/classes/foundry.documents.Actor.html

# Actor | Foundry Virtual Tabletop - API Documentation - Version 13

Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

## Hierarchy

- BaseActor<this>Actor
- Actor

## Constructors

### Constructors


### Properties


### Accessors


### Methods


## constructor

Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

---

---

Context and data validation options which affects initial model construction.

---

---

---

## _source

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

---

---

An object that tracks which tracks the changes to the data model which were applied by active effects

---

---

An immutable reverse-reference to a parent DataModel to which this model belongs.

---

---

The statuses that are applied to this actor by active effects

---

---

The defined and cached Data Schema for all instances of this DataModel.

---

---

The default icon used for newly created Actor documents.

---

---

---

Default metadata which applies to each instance of this Document type.

---

---

## appliedEffects

Retrieve the list of ActiveEffects that are currently applied to this Actor.

---

---

A reference to the Compendium Collection containing this Document, if any, and otherwise null.

---

---

The canonical identifier for this Document.

---

---

Whether the Actor has at least one Combatant in the active Combat that represents it.

---

---

Is this document in a compendium?

---

---

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.

---

---

Is this document embedded within a parent document?

---

---

Test whether an Actor document is a synthetic representation of a Token (if true) or a full Document (if false)

---

---

A convenience getter to an object that organizes all embedded Item instances by subtype. The object is cached and
lazily re-computed as needed.

---

### See

foundry.abstract.EmbeddedCollection#documentsByType

---

Define the data schema for this document instance.

---

---

An array of ActiveEffect instances which are present on the Actor which have a limited duration.

---

---

Provide a thumbnail image path used to represent this document.

---

---

Return a reference to the TokenDocument which owns this Actor as a synthetic override

---

---

A Universally Unique Identifier (uuid) for this Document instance.

---

---

An array of validation failure instances which may have occurred when this instance was last validated.

---

---

The base document definition that this document class extends from.

---

---

The named collection to which this Document belongs.

---

---

The database backend used to execute operations and handle results.

---

---

The canonical name of this Document type, for example "Actor".

---

---

Does this Document support additional subtypes?

---

---

The Embedded Document hierarchy for this Document.

---

---

Return a reference to the configured subclass of this base Document type.

---

---

Ensure that all Document classes share the same schema of their base declaration.

---

---

The allowed types which may exist for this Document class.

---

---

## _configure

---

Identify the collection in a parent Document that this Document belongs to, if any.

---

An explicitly provided parent collection name.

---

---

---

Initialize the instance by copying data from the source object to instance attributes.
This mirrors the workflow of SchemaField#initialize but with some added functionality.

---

Options provided to the model constructor

---

---

---

Initialize the source data for a new DataModel instance.
One-time migrations and initial cleaning operations are applied to the source data.

---

The candidate source data from which the model will be constructed

---

---

Options provided to the model constructor

---

---

---

### Inherit Doc

---

### Inherit Doc

---

Post-process an update operation for a single Document instance. Post-operation events occur for all connected
clients.

---

The differential data that was changed relative to the documents prior values

---

---

Additional options which modify the update request

---

---

The id of the User requesting the document update

---

---

---

### Inherit Doc

---

Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.

---

The initial data object provided to the document creation request

---

---

Additional options which modify the creation request

---

---

The User requesting the document creation

---

---

---

Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.

---

The candidate changes to the Document

---

---

Additional options which modify the update request

---

---

The User requesting the document update

---

---

---

Register a token as a dependent of this actor.

---

The token.

---

---

---

Prune a whole scene from this actor's dependent tokens.

---

The scene.

---

---

---

Remove a token from this actor's dependents.

---

The token.

---

---

---

Get all ActiveEffects that may apply to this Actor.
If CONFIG.ActiveEffect.legacyTransferral is true, this is equivalent to actor.effects.contents.
If CONFIG.ActiveEffect.legacyTransferral is false, this will also return all the transferred ActiveEffects on any
of the Actor's owned Items.

---

### Yields

---

Apply any transformations to the Actor data which are caused by ActiveEffects.

---

---

Test whether a given User has permission to perform some action on this Document

---

The User attempting modification

---

---

The attempted action

---

---

Data involved in the attempted action

---

---

---

Clone a document, creating a new document by combining current data with provided overrides.
The cloned document is ephemeral and not yet saved to the database.

---

Additional data which overrides current document data at the time of creation

---

---

Additional context options passed to the create method

---

---

---

Create multiple embedded Document instances within this parent Document using provided input data.

---

The name of the embedded Document type

---

---

An array of data objects used to create multiple documents

---

---

Parameters of the database creation workflow

---

---

### See

Document.createDocuments

---

Delete this Document, removing it from the database.

---

Parameters of the deletion operation

---

---

### See

Document.deleteDocuments

---

Delete multiple embedded Document instances within a parent Document using provided string ids.

---

The name of the embedded Document type

---

---

An array of string ids for each Document to be deleted

---

---

Parameters of the database deletion workflow

---

---

### See

Document.deleteDocuments

---

Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
If the Actor is a synthetic token actor, only the exact Token which it represents will be returned.

---

Limit results to Tokens which are linked to the Actor. Otherwise, return all
Tokens even those which are not linked.

---

---

Return the Document instance rather than the PlaceableObject

---

---

---

Get this actor's dependent tokens.
If the actor is a synthetic token actor, only the exact Token which it represents will be returned.

---

---

Limit the results to tokens that are linked to the actor.

---

---

A single Scene, or list of Scenes to filter by.

---

---

---

Obtain a reference to the Array of source data within the data object for a certain embedded Document name

---

The name of the embedded Document type

---

---

---

Get an embedded document by its id from a named collection in the parent document.

---

The name of the embedded Document type

---

---

The id of the child document to retrieve

---

---

Additional options which modify how embedded documents are retrieved

---

---

Allow retrieving an invalid Embedded Document.

---

---

Throw an Error if the requested id does not exist. See Collection#get

---

---

### Throws

If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
found.

---

Get the value of a "flag" for this document
See the setFlag method for more details on flags

---

The flag scope which namespaces the key

---

---

The flag key

---

---

---

Return a data object which defines the data schema against which dice rolls can be evaluated.
By default, this is directly the Actor's system data, but systems may extend this to include additional properties.
If overriding or extending this method to add additional properties, care must be taken not to mutate the original
object.

---

---

Create a new Token document, not yet saved to the database, which represents the Actor.

---

Additional data, such as x, y, rotation, etc. for the created token data

---

---

The options passed to the TokenDocument constructor

---

---

---

Get an Array of Token images which could represent this Actor

---

---

Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

---

The User being tested

---

---

---

For Documents which include game system data, migrate the system data object to conform to its latest data model.
The data model is defined by the template.json specification included by the game system.

---

---

Handle how changes to a Token attribute bar are applied to the Actor.
This allows for game systems to override this behavior and deploy special logic.

---

The attribute path

---

---

The target attribute value

---

---

Whether the number represents a relative change (true) or an absolute change (false)

---

---

Whether the new value is part of an attribute bar, or just a direct value

---

---

---

### Inherit Doc

---

### Inherit Doc

---

Reset the state of this data instance back to mirror the contained source data, erasing any changes.

---

---

Roll initiative for all Combatants in the currently active Combat encounter which are associated with this Actor.
If viewing a full Actor document, all Tokens which map to that actor will be targeted for initiative rolls.
If viewing a synthetic Token actor, only that particular Token will be targeted for an initiative roll.

---

Configuration for how initiative for this Actor is rolled.

---

---

Create new Combatant entries for Tokens associated with
this actor.

---

---

Additional options passed to the Combat#rollInitiative method.

---

---

Re-roll the initiative for this Actor if it has already
been rolled.

---

---

---

Assign a "flag" to this document.
Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
the core software, game systems, or user-created modules.

---

The flag scope which namespaces the key

---

---

The flag key

---

---

The flag value

---

---

---

Test whether a certain User has a requested permission level (or greater) over the Document

---

The User being tested

---

---

The permission level from DOCUMENT_OWNERSHIP_LEVELS to test

---

---

Additional options involved in the permission test

---

---

Require the exact permission level requested?

---

---

---

Toggle a configured status effect for the Actor.

---

A status effect ID defined in CONFIG.statusEffects

---

---

Additional options which modify how the effect is created

---

---

Force the effect to be active or inactive regardless of its current state

---

---

Display the toggled effect as an overlay

---

---

---

Extract the source data for the DataModel into a simple object format that can be serialized.

---

---

Copy and transform the DataModel into a plain object.
Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

---

Draw values from the underlying data source rather than transformed values

---

---

---

Iterate over all embedded Documents that are hierarchical children of this Document.

---

A parent field path already traversed

---

---

### Yields

---

Remove a flag assigned to the document

---

The flag scope which namespaces the key

---

---

The flag key

---

---

---

Update this Document using incremental data, saving it to the database.

---

Differential update data which modifies the existing values of this document

---

---

Parameters of the update operation

---

---

### See

Document.updateDocuments

---

Update multiple embedded Document instances within a parent Document using provided differential data.

---

The name of the embedded Document type

---

---

An array of differential data objects, each used to update a
single Document

---

---

Parameters of the database update workflow

---

---

### See

Document.updateDocuments

---

Update the DataModel locally by applying an object of changes to its source data.
The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
The provided changes argument is mutated in this process.
The source data is then re-initialized to apply those changes to the prepared data.
The method returns an object of differential changes which modified the original data.

---

New values which should be applied to the data model

---

---

Options which determine how the new data is merged

---

---

### Throws

An error if the requested data model changes were invalid

---

Validate the data contained in the document to check for type and content.
If changes are provided, missing types are added to it before cleaning and validation.
This mutates the provided changes. This function throws an error if data within the document is not valid.

---

Options which modify how the model is validated

---

---

### Throws

An error thrown if validation is strict and a failure occurs.

---

Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
clients.

---

The initial data object provided to the document creation request

---

---

Additional options which modify the creation request

---

---

The id of the User requesting the document update

---

---

---

Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
clients.

---

Additional options which modify the deletion request

---

---

The id of the User requesting the document update

---

---

---

Additional workflows to perform when any descendant document within this Actor changes.

---

---

Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
which requested the operation.

---

Additional options which modify the deletion request

---

---

The User requesting the document deletion

---

---

---

Update the active TokenDocument instances which represent this Actor.

---

The update delta

---

---

The database operation that was performed

---

---

---

Define a simple migration from one field name to another.
The value of the data can be transformed during the migration by an optional application function.

---

The data object being migrated

---

---

The old field name

---

---

The new field name

---

---

An application function, otherwise the old value is applied

---

---

---

A reusable helper for adding a migration shim
The value of the data can be transformed during the migration by an optional application function.

---

The data object being shimmed

---

---

The old field name

---

---

The new field name

---

---

Options passed to foundry.utils.logCompatibilityWarning

---

---

The value of the shim

---

---

The deprecation message

---

---

---

A reusable helper for adding migration shims.

---

The data object being shimmed

---

---

The mapping of old keys to new keys

---

---

Options passed to foundry.utils.logCompatibilityWarning

---

---

The value of the shim

---

---

The deprecation message

---

---

---

Clear the fields from the given Document data recursively.

---

The (partial) Document data

---

---

The fields that are cleared

---

---

---

---

Log a compatbility warning for the data field migration.

---

The old field name

---

---

The new field name

---

---

Options passed to foundry.utils.logCompatibilityWarning

---

---

---

---

Clean a data source object to conform to a specific provided schema.

---

The source data object

---

---

Additional options which are passed to field cleaning methods

---

---

---

Create a new Document using provided input data, saving it to the database.

---

Initial data used to create this Document, or a Document
instance to persist.

---

---

Parameters of the creation operation

---

---

### See

Document.createDocuments

---

Create multiple Documents using provided input data.
Data is provided as an array of objects where each individual object becomes one new Document.

---

An array of data objects or existing Documents to persist.

---

---

Parameters of the requested creation
operation

---

---

### Example: Create a single Document

---

Define the data schema for documents of this type.
The schema is populated the first time it is accessed and cached for future reuse.

---

---

Delete one or multiple existing Documents using an array of provided ids.
Data is provided as an array of string ids for the documents to delete.

---

An array of string ids for the documents to be deleted

---

---

Parameters of the database deletion
operation

---

---

### Example: Delete a single Document

---

Create a DataModel instance using a provided serialized JSON string.

---

Serialized document data in string format

---

---

---

Create a new instance of this DataModel from a source record.
The source is presumed to be trustworthy and is not strictly validated.

---

Initial document data which comes from a trusted source.

---

---

Model construction context

---

---

---

Get a World-level Document of this type by its id.

---

The Document ID

---

---

Parameters of the get operation

---

---

---

A compatibility method that returns the appropriate name of an embedded collection within this Document.

---

An existing collection name or a document name.

---

---

### Example: Passing an existing collection name.

---

Determine default artwork based on the provided actor data.

---

The source actor data.

---

---

---

Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

---

The candidate source data from which the model will be constructed

---

---

---

Wrap data migration in a try/catch which attempts it safely

---

The candidate source data from which the model will be constructed

---

---

---

Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
support older code which uses this data.

---

Data which matches the current schema

---

---

Additional shimming options

---

---

---

Update multiple Document instances using provided differential data.
Data is provided as an array of objects where each individual object updates one existing Document.

---

An array of differential data objects, each used to update a single Document

---

---

Parameters of the database update
operation

---

---

### Example: Update a single Document

---

Evaluate joint validation rules which apply validation conditions across multiple fields of the model.
Field-specific validation rules should be defined as part of the DataSchema for the model.
This method allows for testing aggregate rules which impose requirements on the overall model.

---

Candidate data for the model

---

---

### Throws

An error if a validation failure is detected

---

Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

---

The Document instances which were created

---

---

Parameters of the database creation operation

---

---

The User who performed the creation operation

---

---

---

Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

---

The Document instances which were deleted

---

---

Parameters of the database deletion operation

---

---

The User who performed the deletion operation

---

---

---

Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
for all connected clients.

---

The Document instances which were updated

---

---

Parameters of the database update operation

---

---

The User who performed the update operation

---

---

---

Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

---

Pending document instances to be created

---

---

Parameters of the database creation operation

---

---

The User requesting the creation operation

---

---

---

Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

---

Document instances to be deleted

---

---

Parameters of the database update operation

---

---

The User requesting the deletion operation

---

---

---

Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
occur for the client which requested the operation.

---

Document instances to be updated

---

---

Parameters of the database update operation

---

---

The User requesting the update operation

---

---

---

