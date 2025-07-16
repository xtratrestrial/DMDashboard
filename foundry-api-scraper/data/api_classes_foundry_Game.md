# Game | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.Game.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- Game


# Class Game

The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
The singleton instance of the Game class is available as the global variable game.


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Game(    view: string,    data: object,    sessionId: string,    socket: Socket<DefaultEventsMap, DefaultEventsMap>,): GameInitialize a singleton Game instance for a specific view using socket data retrieved from the server.
Parametersview: stringThe named view which is active for this game instance.
data: objectAn object of all the World data vended by the server when the client first connects
sessionId: stringThe ID of the currently active client session retrieved from the browser cookie
socket: Socket<DefaultEventsMap, DefaultEventsMap>The open web-socket which should be used to transact game-state data
Returns Game
- view: stringThe named view which is active for this game instance.
- data: objectAn object of all the World data vended by the server when the client first connects
- sessionId: stringThe ID of the currently active client session retrieved from the browser cookie
- socket: Socket<DefaultEventsMap, DefaultEventsMap>The open web-socket which should be used to transact game-state data

Initialize a singleton Game instance for a specific view using socket data retrieved from the server.


#### Parameters

- view: stringThe named view which is active for this game instance.
- data: objectAn object of all the World data vended by the server when the client first connects
- sessionId: stringThe ID of the currently active client session retrieved from the browser cookie
- socket: Socket<DefaultEventsMap, DefaultEventsMap>The open web-socket which should be used to transact game-state data

The named view which is active for this game instance.

An object of all the World data vended by the server when the client first connects

The ID of the currently active client session retrieved from the browser cookie

The open web-socket which should be used to transact game-state data


#### Returns Game


## Properties


### actors

The collection of Actor documents which exists in the World.


### Readonlyaudio

`Readonly`The singleton Audio Helper.


### Readonlycanvas

`Readonly`The singleton game Canvas.


### cards

The collection of Cards documents which exists in the World.


### Readonlyclipboard

`Readonly`The singleton Clipboard Helper.


### Readonlycollections

`Readonly`A mapping of WorldCollection instances, one per primary Document type.


### combats

The collection of Combat documents which exists in the World.


### ReadonlycompendiumArt

`Readonly`The singleton compendium art manager.


### compendiumUUIDRedirects

The UUID redirects tree.


### Readonlydata

`Readonly`The object of world data passed from the server.


### debug

Whether the Game is running in debug mode


### ReadonlydocumentIndex

`Readonly`The singleton DocumentIndex instance.


### folders

The collection of Folder documents which exists in the World.


### Readonlygamepad

`Readonly`The singleton Gamepad Manager.


### Readonlyi18n

`Readonly`Localization support.


### Readonlyissues

`Readonly`The singleton ClientIssues manager.


### items

The collection of Item documents which exists in the World.


### journal

The collection of JournalEntry documents which exists in the World.


### Readonlykeybindings

`Readonly`Client keybindings which are used to configure application behavior


### Readonlykeyboard

`Readonly`The singleton Keyboard Manager.


### loading

A flag for whether texture assets for the game canvas are currently loading


### macros

The collection of Macro documents which exists in the World.


### messages

The collection of ChatMessage documents which exists in the World.


### modules

A Map of active Modules which are currently eligible to be enabled in this World.
The subset of Modules which are designated as active are currently enabled.


### Readonlymouse

`Readonly`The singleton Mouse Manager.


### Readonlynue

`Readonly`The singleton New User Experience manager.


### Readonlypacks

`Readonly`A mapping of CompendiumCollection instances, one per Compendium pack.


### permissions

The user role permissions setting.


### playlists

The collection of Playlist documents which exists in the World.


### ready

A flag for whether the Game has successfully reached the hookEvents.ready hook


### Readonlyrelease

`Readonly`The Release data for this version of Foundry


### scenes

The collection of Scene documents which exists in the World.


### ReadonlysessionId

`Readonly`The client session id which is currently active.


### Readonlysettings

`Readonly`Client settings which are used to configure application behavior.


### Readonlysocket

`Readonly`A reference to the open Socket.io connection.


### system

The System which is used to power this game World.


### tables

The collection of RollTable documents which exists in the World.


### Readonlytime

`Readonly`A singleton GameTime instance which manages the progression of time within the game world.


### Readonlytooltip

`Readonly`The singleton TooltipManager.


### Readonlytours

`Readonly`The singleton Tours collection.


### ReadonlyuserId

`Readonly`The id of the active World user, if any.


### users

The collection of User documents which exists in the World.


### Readonlyvideo

`Readonly`The singleton Video Helper.


### Readonlyview

`Readonly`The named view which is currently active.


### Readonlyworkers

`Readonly`A singleton web Worker manager.


### world

The game World which is currently active.


## Accessors


### activeTool

- get activeTool(): stringA convenient reference to the currently active canvas tool
Returns string

A convenient reference to the currently active canvas tool


#### Returns string


### combat

- get combat(): null | documents.CombatA convenience accessor for the currently viewed Combat encounter
Returns null | documents.Combat

A convenience accessor for the currently viewed Combat encounter


#### Returns null | documents.Combat


### compendiumConfiguration

- get compendiumConfiguration(): WorldCompendiumConfigurationA shortcut to compendiumConfiguration data settings
Returns WorldCompendiumConfiguration

A shortcut to compendiumConfiguration data settings


#### Returns WorldCompendiumConfiguration


### documentTypes

- get documentTypes(): Record<string, string[]>A registry of document types supported by the active world.
Returns Record<string, string[]>

A registry of document types supported by the active world.


#### Returns Record<string, string[]>


### isAdmin

- get isAdmin(): booleanIs the current session user authenticated as an application administrator?
Returns boolean

Is the current session user authenticated as an application administrator?


#### Returns boolean


### model

- get model(): Record<string, Record<string, object>>A registry of document sub-types and their respective template.json defaults.
Returns Record<string, Record<string, object>>

A registry of document sub-types and their respective template.json defaults.


#### Returns Record<string, Record<string, object>>


### paused

- get paused(): booleanA state variable which tracks whether the game session is currently paused
Returns boolean

A state variable which tracks whether the game session is currently paused


#### Returns boolean


### user

- get user(): null | documents.UserThe currently connected User document, or null if Users is not yet initialized
Returns null | documents.User

The currently connected User document, or null if Users is not yet initialized


#### Returns null | documents.User


### version

- get version(): stringReturns the current version of the Release, usable for comparisons using isNewerVersion
Returns string

Returns the current version of the Release, usable for comparisons using isNewerVersion


#### Returns string


## Methods


### _initializeView

- _initializeView(): Promise<void>InternalInitialize elements required for the current view
Returns Promise<void>

`Internal`Initialize elements required for the current view


#### Returns Promise<void>


### activateListeners

- activateListeners(): voidActivate Event Listeners which apply to every Game View
Returns void

Activate Event Listeners which apply to every Game View


#### Returns void


### activateSocketListeners

- activateSocketListeners(): voidActivate Socket event listeners which are used to transact game state data with the server
Returns void

Activate Socket event listeners which are used to transact game state data with the server


#### Returns void


### configureCursors

- configureCursors(): voidConfigure custom cursors.
Returns void

Configure custom cursors.


#### Returns void


### configureUI

- configureUI(config?: GameUIConfiguration): voidConfigure the user interface.
Parametersconfig: GameUIConfiguration = {}Returns void
- config: GameUIConfiguration = {}

Configure the user interface.


#### Parameters

- config: GameUIConfiguration = {}


#### Returns void


### getPackageScopes

- getPackageScopes(): string[]Return the named scopes which can exist for packages.
Scopes are returned in the prioritization order that their content is loaded.
Returns string[]An array of string package scopes

Return the named scopes which can exist for packages.
Scopes are returned in the prioritization order that their content is loaded.


#### Returns string[]

An array of string package scopes


### initialize

- initialize(): Promise<void>Initialize the Game for the current window location, triggering the hookEvents.init event.
Returns Promise<void>

Initialize the Game for the current window location, triggering the hookEvents.init event.


#### Returns Promise<void>


### initializeCanvas

- initializeCanvas(): Promise<void>Initialize the game Canvas
Returns Promise<void>

Initialize the game Canvas


#### Returns Promise<void>


### initializeConfig

- initializeConfig(): voidInitialize configuration state.
Returns void

Initialize configuration state.


#### Returns void


### initializeDocuments

- initializeDocuments(): voidInitialize game state data by creating WorldCollection instances for every primary Document type
Returns void

Initialize game state data by creating WorldCollection instances for every primary Document type


#### Returns void


### initializeGamepads

- initializeGamepads(): voidInitialize Gamepad controls
Returns void

Initialize Gamepad controls


#### Returns void


### initializeKeyboard

- initializeKeyboard(): voidInitialize Keyboard controls
Returns void

Initialize Keyboard controls


#### Returns void


### initializeMouse

- initializeMouse(): voidInitialize Mouse controls
Returns void

Initialize Mouse controls


#### Returns void


### initializePacks

- initializePacks(): CompendiumPacksInitialize the Compendium packs which are present within this Game
Create a Collection which maps each Compendium pack using its collection ID.
Returns CompendiumPacks

Initialize the Compendium packs which are present within this Game
Create a Collection which maps each Compendium pack using its collection ID.


#### Returns CompendiumPacks


### initializeRTC

- initializeRTC(): Promise<boolean>Initialize the WebRTC implementation
Returns Promise<boolean>

Initialize the WebRTC implementation


#### Returns Promise<boolean>


### initializeTrees

- initializeTrees(): voidInitialize collection trees.
Returns void

Initialize collection trees.


#### Returns void


### initializeUI

- initializeUI(): voidInitialize core UI elements
Returns void

Initialize core UI elements


#### Returns void


### logOut

- logOut(): voidLog out of the game session by returning to the Join screen
Returns void

Log out of the game session by returning to the Join screen


#### Returns void


### registerSettings

- registerSettings(): voidRegister core game settings
Returns void

Register core game settings


#### Returns void


### setupGame

- setupGame(): Promise<void>Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
hookEvents.setup and hookEvents.ready events.
Returns Promise<void>

Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
hookEvents.setup and hookEvents.ready events.


#### Returns Promise<void>


### setupPackages

- setupPackages(data: object): voidConfigure package data that is currently enabled for this world
Parametersdata: objectGame data provided by the server socket
Returns void
- data: objectGame data provided by the server socket

Configure package data that is currently enabled for this world


#### Parameters

- data: objectGame data provided by the server socket

Game data provided by the server socket


#### Returns void


### shutDown

- shutDown(): Promise<void>Shut down the currently active Game. Requires GameMaster user permission.
Returns Promise<void>

Shut down the currently active Game. Requires GameMaster user permission.


#### Returns Promise<void>


### toggleCharacterSheet

- toggleCharacterSheet(): null | ActorSheetV2 | ActorSheetOpen Character sheet for current token or controlled actor
Returns null | ActorSheetV2 | ActorSheetThe toggled Actor sheet, or null
if the User has no assigned
character

Open Character sheet for current token or controlled actor


#### Returns null | ActorSheetV2 | ActorSheet

The toggled Actor sheet, or null
if the User has no assigned
character


### togglePause

- togglePause(    pause: boolean,    options?: { broadcast?: boolean; userId?: string },): booleanToggle the pause state of the game, triggering the hookEvents.pauseGame hook when the paused
state changes.
Parameterspause: booleanThe desired pause state; true for paused, false for un-paused
Optionaloptions: { broadcast?: boolean; userId?: string } = {}Additional options which modify the pause operation
Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.
Returns booleanThe new paused state
- pause: booleanThe desired pause state; true for paused, false for un-paused
- Optionaloptions: { broadcast?: boolean; userId?: string } = {}Additional options which modify the pause operation
Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.
- Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
- OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.

Toggle the pause state of the game, triggering the hookEvents.pauseGame hook when the paused
state changes.


#### Parameters

- pause: booleanThe desired pause state; true for paused, false for un-paused
- Optionaloptions: { broadcast?: boolean; userId?: string } = {}Additional options which modify the pause operation
Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.
- Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
- OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.

The desired pause state; true for paused, false for un-paused

`Optional`Additional options which modify the pause operation

- Optionalbroadcast?: booleanBroadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.
- OptionaluserId?: stringThe ID of the user who triggered the pause operation. This is
populated automatically by the game server.


##### Optionalbroadcast?: boolean

`Optional`Broadcast the pause state change to other connected clients?
Broadcasting to other clients can only be done by a GM user.


##### OptionaluserId?: string

`Optional`The ID of the user who triggered the pause operation. This is
populated automatically by the game server.


#### Returns boolean

The new paused state


### Protected_onClickHyperlink

`Protected`- _onClickHyperlink(event: PointerEvent): voidProtectedOn left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.
Parametersevent: PointerEventReturns void
- event: PointerEvent

`Protected`On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.


#### Parameters

- event: PointerEvent


#### Returns void


### Staticconnect

`Static`- connect(sessionId: string): Promise<Socket<DefaultEventsMap, DefaultEventsMap>>Establish a live connection to the game server through the socket.io URL
ParameterssessionId: stringThe client session ID with which to establish the connection
Returns Promise<Socket<DefaultEventsMap, DefaultEventsMap>>A promise which resolves to the connected socket, if successful
- sessionId: stringThe client session ID with which to establish the connection

Establish a live connection to the game server through the socket.io URL


#### Parameters

- sessionId: stringThe client session ID with which to establish the connection

The client session ID with which to establish the connection


#### Returns Promise<Socket<DefaultEventsMap, DefaultEventsMap>>

A promise which resolves to the connected socket, if successful


### Staticcreate

`Static`- create(view: string, sessionId: null | string): Promise<Game>Fetch World data and return a Game instance
Parametersview: stringThe named view being created
sessionId: null | stringThe current sessionId of the connecting client
Returns Promise<Game>A Promise which resolves to the created Game instance
- view: stringThe named view being created
- sessionId: null | stringThe current sessionId of the connecting client

Fetch World data and return a Game instance


#### Parameters

- view: stringThe named view being created
- sessionId: null | stringThe current sessionId of the connecting client

The named view being created

The current sessionId of the connecting client


#### Returns Promise<Game>

A Promise which resolves to the created Game instance


### StaticgetCookies

`Static`- getCookies(): objectRetrieve the cookies which are attached to the client session
Returns objectThe session cookies

Retrieve the cookies which are attached to the client session


#### Returns object

The session cookies


### StaticgetData

`Static`- getData(    socket: Socket<DefaultEventsMap, DefaultEventsMap>,    view: string,): Promise<object>Request World data from server and return it
Parameterssocket: Socket<DefaultEventsMap, DefaultEventsMap>The active socket connection
view: stringThe view for which data is being requested
Returns Promise<object>
- socket: Socket<DefaultEventsMap, DefaultEventsMap>The active socket connection
- view: stringThe view for which data is being requested

Request World data from server and return it


#### Parameters

- socket: Socket<DefaultEventsMap, DefaultEventsMap>The active socket connection
- view: stringThe view for which data is being requested

The active socket connection

The view for which data is being requested


#### Returns Promise<object>


### StaticgetWorldStatus

`Static`- getWorldStatus(    socket: Socket<DefaultEventsMap, DefaultEventsMap>,): Promise<boolean>Get the current World status upon initial connection.
Parameterssocket: Socket<DefaultEventsMap, DefaultEventsMap>The active client socket connection
Returns Promise<boolean>
- socket: Socket<DefaultEventsMap, DefaultEventsMap>The active client socket connection

Get the current World status upon initial connection.


#### Parameters

- socket: Socket<DefaultEventsMap, DefaultEventsMap>The active client socket connection

The active client socket connection


#### Returns Promise<boolean>


### Settings

- Protected
- Inherited
- Internal


### On This Page

