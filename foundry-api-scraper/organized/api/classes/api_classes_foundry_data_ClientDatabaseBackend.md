# ClientDatabaseBackend | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.data.ClientDatabaseBackend.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- data
- ClientDatabaseBackend


# Class ClientDatabaseBackend

The client-side database backend implementation which handles Document modification operations.


#### Hierarchy (View Summary)

- abstract.DatabaseBackendClientDatabaseBackend
- ClientDatabaseBackend

- ClientDatabaseBackend


##### Index


### Methods


## Methods


### _log

- _log(level: any, message: any): voidParameterslevel: anymessage: anyReturns voidOverrides DatabaseBackend._log
- level: any
- message: any


#### Parameters

- level: any
- message: any


#### Returns void

Overrides DatabaseBackend._log


### create

- create(    documentClass: typeof Document,    operation: DatabaseCreateOperation,    user?: BaseUser,): Promise<Document<object, DocumentConstructionContext>[]>Create new Documents using provided data and context.
It is recommended to use foundry.abstract.Document.createDocuments or foundry.abstract.Document.create rather than calling this
method directly.
ParametersdocumentClass: typeof DocumentThe Document class definition
operation: DatabaseCreateOperationParameters of the create operation
Optionaluser: BaseUserThe requesting User
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of created Document instances
Inherited from DatabaseBackend.create
- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseCreateOperationParameters of the create operation
- Optionaluser: BaseUserThe requesting User

Create new Documents using provided data and context.
It is recommended to use foundry.abstract.Document.createDocuments or foundry.abstract.Document.create rather than calling this
method directly.


#### Parameters

- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseCreateOperationParameters of the create operation
- Optionaluser: BaseUserThe requesting User

The Document class definition

Parameters of the create operation

`Optional`The requesting User


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of created Document instances

Inherited from DatabaseBackend.create


### delete

- delete(    documentClass: typeof Document,    operation: DatabaseDeleteOperation,    user?: BaseUser,): Promise<Document<object, DocumentConstructionContext>[]>Delete Documents using provided ids and context.
It is recommended to use foundry.abstract.Document.deleteDocuments or
foundry.abstract.Document#delete rather than calling this method directly.
ParametersdocumentClass: typeof DocumentThe Document class definition
operation: DatabaseDeleteOperationParameters of the delete operation
Optionaluser: BaseUserThe requesting User
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of deleted Document instances
Inherited from DatabaseBackend.delete
- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseDeleteOperationParameters of the delete operation
- Optionaluser: BaseUserThe requesting User

Delete Documents using provided ids and context.
It is recommended to use foundry.abstract.Document.deleteDocuments or
foundry.abstract.Document#delete rather than calling this method directly.


#### Parameters

- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseDeleteOperationParameters of the delete operation
- Optionaluser: BaseUserThe requesting User

The Document class definition

Parameters of the delete operation

`Optional`The requesting User


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of deleted Document instances

Inherited from DatabaseBackend.delete


### get

- get(    documentClass: typeof Document,    operation: DatabaseGetOperation,    user?: BaseUser,): Promise<object[] | Document<object, DocumentConstructionContext>[]>Retrieve Documents based on provided query parameters.
It recommended to use CompendiumCollection#getDocuments or CompendiumCollection#getIndex rather
than calling this method directly.
ParametersdocumentClass: typeof DocumentThe Document class definition
operation: DatabaseGetOperationParameters of the get operation
Optionaluser: BaseUserThe requesting User
Returns Promise<object[] | Document<object, DocumentConstructionContext>[]>An array of retrieved Document instances or index objects
Inherited from DatabaseBackend.get
- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseGetOperationParameters of the get operation
- Optionaluser: BaseUserThe requesting User

Retrieve Documents based on provided query parameters.
It recommended to use CompendiumCollection#getDocuments or CompendiumCollection#getIndex rather
than calling this method directly.


#### Parameters

- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseGetOperationParameters of the get operation
- Optionaluser: BaseUserThe requesting User

The Document class definition

Parameters of the get operation

`Optional`The requesting User


#### Returns Promise<object[] | Document<object, DocumentConstructionContext>[]>

An array of retrieved Document instances or index objects

Inherited from DatabaseBackend.get


### getCompendiumScopes

- getCompendiumScopes(): string[]Describe the scopes which are suitable as the namespace for a flag key
Returns string[]Overrides DatabaseBackend.getCompendiumScopes

Describe the scopes which are suitable as the namespace for a flag key


#### Returns string[]

Overrides DatabaseBackend.getCompendiumScopes


### getFlagScopes

- getFlagScopes(): any[]Describe the scopes which are suitable as the namespace for a flag key
Returns any[]Overrides DatabaseBackend.getFlagScopes

Describe the scopes which are suitable as the namespace for a flag key


#### Returns any[]

Overrides DatabaseBackend.getFlagScopes


### update

- update(    documentClass: typeof Document,    operation: DatabaseUpdateOperation,    user?: BaseUser,): Promise<Document<object, DocumentConstructionContext>[]>Update Documents using provided data and context.
It is recommended to use foundry.abstract.Document.updateDocuments or foundry.abstract.Document#update rather than calling this
method directly.
ParametersdocumentClass: typeof DocumentThe Document class definition
operation: DatabaseUpdateOperationParameters of the update operation
Optionaluser: BaseUserThe requesting User
Returns Promise<Document<object, DocumentConstructionContext>[]>An array of updated Document instances
Inherited from DatabaseBackend.update
- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseUpdateOperationParameters of the update operation
- Optionaluser: BaseUserThe requesting User

Update Documents using provided data and context.
It is recommended to use foundry.abstract.Document.updateDocuments or foundry.abstract.Document#update rather than calling this
method directly.


#### Parameters

- documentClass: typeof DocumentThe Document class definition
- operation: DatabaseUpdateOperationParameters of the update operation
- Optionaluser: BaseUserThe requesting User

The Document class definition

Parameters of the update operation

`Optional`The requesting User


#### Returns Promise<Document<object, DocumentConstructionContext>[]>

An array of updated Document instances

Inherited from DatabaseBackend.update


### Protected_logError

`Protected`- _logError(    user: BaseUser,    action: string,    subject: Document<object, DocumentConstructionContext>,    context?: {        pack?: string;        parent?: Document<object, DocumentConstructionContext>;    },): stringProtectedConstruct a standardized error message given the context of an attempted operation
Parametersuser: BaseUseraction: stringsubject: Document<object, DocumentConstructionContext>Optionalcontext: { pack?: string; parent?: Document<object, DocumentConstructionContext> } = {}Returns stringInherited from DatabaseBackend._logError
- user: BaseUser
- action: string
- subject: Document<object, DocumentConstructionContext>
- Optionalcontext: { pack?: string; parent?: Document<object, DocumentConstructionContext> } = {}

`Protected`Construct a standardized error message given the context of an attempted operation


#### Parameters

- user: BaseUser
- action: string
- subject: Document<object, DocumentConstructionContext>
- Optionalcontext: { pack?: string; parent?: Document<object, DocumentConstructionContext> } = {}

`Optional`
#### Returns string

Inherited from DatabaseBackend._logError


### Protected_logOperation

`Protected`- _logOperation(    action: string,    type: string,    documents: Document[],    context?: {        level?: string;        pack?: string;        parent?: Document<object, DocumentConstructionContext>;    },): voidProtectedLog a database operation for an embedded document, capturing the action taken and relevant IDs
Parametersaction: stringThe action performed
type: stringThe document type
documents: Document[]The documents modified
Optionalcontext: {    level?: string;    pack?: string;    parent?: Document<object, DocumentConstructionContext>;} = {}The context of the log request
Optionallevel?: stringThe logging level
Optionalpack?: stringA compendium pack within which the operation occurred
Optionalparent?: Document<object, DocumentConstructionContext>A parent document
Returns voidInherited from DatabaseBackend._logOperation
- action: stringThe action performed
- type: stringThe document type
- documents: Document[]The documents modified
- Optionalcontext: {    level?: string;    pack?: string;    parent?: Document<object, DocumentConstructionContext>;} = {}The context of the log request
Optionallevel?: stringThe logging level
Optionalpack?: stringA compendium pack within which the operation occurred
Optionalparent?: Document<object, DocumentConstructionContext>A parent document
- Optionallevel?: stringThe logging level
- Optionalpack?: stringA compendium pack within which the operation occurred
- Optionalparent?: Document<object, DocumentConstructionContext>A parent document

`Protected`Log a database operation for an embedded document, capturing the action taken and relevant IDs


#### Parameters

- action: stringThe action performed
- type: stringThe document type
- documents: Document[]The documents modified
- Optionalcontext: {    level?: string;    pack?: string;    parent?: Document<object, DocumentConstructionContext>;} = {}The context of the log request
Optionallevel?: stringThe logging level
Optionalpack?: stringA compendium pack within which the operation occurred
Optionalparent?: Document<object, DocumentConstructionContext>A parent document
- Optionallevel?: stringThe logging level
- Optionalpack?: stringA compendium pack within which the operation occurred
- Optionalparent?: Document<object, DocumentConstructionContext>A parent document

The action performed

The document type

The documents modified

`Optional`The context of the log request

- Optionallevel?: stringThe logging level
- Optionalpack?: stringA compendium pack within which the operation occurred
- Optionalparent?: Document<object, DocumentConstructionContext>A parent document


##### Optionallevel?: string

`Optional`The logging level


##### Optionalpack?: string

`Optional`A compendium pack within which the operation occurred


##### Optionalparent?: Document<object, DocumentConstructionContext>

`Optional`A parent document


#### Returns void

Inherited from DatabaseBackend._logOperation


### Settings

- Protected
- Inherited
- Internal


### On This Page

