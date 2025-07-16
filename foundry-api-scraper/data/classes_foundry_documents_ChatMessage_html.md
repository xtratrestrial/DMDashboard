Source: https://foundryvtt.com/api/classes/foundry.documents.ChatMessage.html

# ChatMessage | Foundry Virtual Tabletop - API Documentation - Version 13

Initial data used to construct the data object. The provided object will be
owned by the constructed model instance and may be mutated.

## Hierarchy

- BaseChatMessage<this>ChatMessage
- ChatMessage

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

Is this ChatMessage currently displayed in the sidebar ChatLog?

---

---

An immutable reverse-reference to a parent DataModel to which this model belongs.

---

---

The defined and cached Data Schema for all instances of this DataModel.

---

---

---

Default metadata which applies to each instance of this Document type.

---

---

## alias

Return the recommended String alias for this message.
The alias could be a Token name in the case of in-character messages or dice rolls.
Alternatively it could be the name of a User in the case of OOC chat or whispers.

---

---

A reference to the Compendium Collection containing this Document, if any, and otherwise null.

---

---

The canonical identifier for this Document.

---

---

Is this document in a compendium?

---

---

Is the current state of this DataModel invalid?
The model is invalid if there is any unresolved failure.

---

---

Is the current User the author of this message?

---

---

Return whether the content of the message is visible to the current user.
For certain dice rolls, for example, the message itself may be visible while the content of that message is not.

---

---

Is this document embedded within a parent document?

---

---

Does this message contain dice rolls?

---

---

Define the data schema for this document instance.

---

---

The Actor which represents the speaker of this message (if any).

---

---

A Universally Unique Identifier (uuid) for this Document instance.

---

---

An array of validation failure instances which may have occurred when this instance was last validated.

---

---

Return whether the ChatMessage is visible to the current User.
Messages may not be visible if they are private whispers.

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

Update the data of a ChatMessage instance to apply a requested roll mode.
This function calls ChatMessage.applyRollMode and updates the source of the ChatMessage.

---

The roll mode to apply to this message data. "roll" is the current roll mode.

---

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

Export the content of the chat message into a standardized log format

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

Obtain a data object used to evaluate any dice rolls associated with this particular chat message

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

### Inherit Doc

---

Render the HTML for the ChatMessage which should be added to the log

---

Additional options passed to the Handlebars template.

---

---

Render a close button for dismissing chat card notifications.

---

---

Render a delete button. By default, this is true for GM users.

---

---

---

Reset the state of this data instance back to mirror the contained source data, erasing any changes.

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

Transform a provided object of ChatMessage data by applying a certain roll mode to the data object.

---

The object of ChatMessage data

---

---

The roll mode to apply to this message data. "roll" is the current roll mode.

---

---

---

Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
may also be present.

---

The User being tested

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

Attempt to determine who is the speaking character (and token) for a certain Chat Message
First assume that the currently controlled Token is the speaker

---

Options which affect speaker identification

---

---

The Actor who is speaking

---

---

The name of the speaker to display

---

---

The Scene in which the speaker resides

---

---

The Token who is speaking

---

---

---

Obtain an Actor instance which represents the speaker of this message (if any)

---

The speaker data object

---

---

---

Given a string whisper target, return an Array of the user IDs which should be targeted for the whisper

---

The target name of the whisper target

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

