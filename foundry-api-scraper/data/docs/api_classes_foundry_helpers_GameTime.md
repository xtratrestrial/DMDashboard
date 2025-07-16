# GameTime | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.GameTime.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- GameTime


# Class GameTime

A singleton class at which keeps the official Server and World time stamps.
Uses a basic implementation of https://www.geeksforgeeks.org/cristians-algorithm/ for synchronization.


#### See

foundry.Game#time


##### Index


### Properties


### Accessors


### Methods


## Properties


### StaticSYNC_INTERVAL_MS

`Static`The amount of time to delay before re-syncing the official server time.


## Accessors


### averageLatency

- get averageLatency(): numberThe average one-way latency between client and server in milliseconds.
Returns number

The average one-way latency between client and server in milliseconds.


#### Returns number


### calendar

- get calendar(): CalendarData<any>The calendar instance for in-world timekeeping.
Returns CalendarData<any>

The calendar instance for in-world timekeeping.


#### Returns CalendarData<any>


### components

- get components(): TimeComponentsThe current World time expressed as components.
Returns TimeComponents

The current World time expressed as components.


#### Returns TimeComponents


### earthCalendar

- get earthCalendar(): CalendarData<any>The "Earth" calendar instance for IRL timekeeping.
Returns CalendarData<any>

The "Earth" calendar instance for IRL timekeeping.


#### Returns CalendarData<any>


### serverTime

- get serverTime(): numberThe current server time based on the last synchronization point and the approximated one-way latency.
Returns number

The current server time based on the last synchronization point and the approximated one-way latency.


#### Returns number


### worldTime

- get worldTime(): number
The current World time expressed in seconds.

Returns number
- The current World time expressed in seconds.

- The current World time expressed in seconds.


#### Returns number


## Methods


### advance

- advance(delta: number | TimeComponents, options?: object): Promise<number>Advance or rewind the world time according to a delta amount expressed either in seconds or as components.
Parametersdelta: number | TimeComponentsThe number of seconds to advance (or rewind if negative) by
Optionaloptions: objectAdditional options passed to game.settings.set
Returns Promise<number>The new game time
- delta: number | TimeComponentsThe number of seconds to advance (or rewind if negative) by
- Optionaloptions: objectAdditional options passed to game.settings.set

Advance or rewind the world time according to a delta amount expressed either in seconds or as components.


#### Parameters

- delta: number | TimeComponentsThe number of seconds to advance (or rewind if negative) by
- Optionaloptions: objectAdditional options passed to game.settings.set

The number of seconds to advance (or rewind if negative) by

`Optional`Additional options passed to game.settings.set


#### Returns Promise<number>

The new game time


### initializeCalendar

- initializeCalendar(): voidInitialize a calendar configuration.
This is called once automatically upon construction, but can be called manually if CONFIG.time changes.
Returns void

Initialize a calendar configuration.
This is called once automatically upon construction, but can be called manually if CONFIG.time changes.


#### Returns void


### onUpdateWorldTime

- onUpdateWorldTime(worldTime: number, options: object, userId: string): voidHandle follow-up actions when the official World time is changed
ParametersworldTime: numberThe new canonical World time.
options: objectOptions passed from the requesting client where the change was made
userId: stringThe ID of the User who advanced the time
Returns void
- worldTime: numberThe new canonical World time.
- options: objectOptions passed from the requesting client where the change was made
- userId: stringThe ID of the User who advanced the time

Handle follow-up actions when the official World time is changed


#### Parameters

- worldTime: numberThe new canonical World time.
- options: objectOptions passed from the requesting client where the change was made
- userId: stringThe ID of the User who advanced the time

The new canonical World time.

Options passed from the requesting client where the change was made

The ID of the User who advanced the time


#### Returns void


### set

- set(time: number | TimeComponents, options?: object): Promise<number>Directly set the world time to a certain value expressed either in seconds or as components.
Parameterstime: number | TimeComponentsThe desired world time
Optionaloptions: objectAdditional options passed to game.settings.set
Returns Promise<number>The new game time
- time: number | TimeComponentsThe desired world time
- Optionaloptions: objectAdditional options passed to game.settings.set

Directly set the world time to a certain value expressed either in seconds or as components.


#### Parameters

- time: number | TimeComponentsThe desired world time
- Optionaloptions: objectAdditional options passed to game.settings.set

The desired world time

`Optional`Additional options passed to game.settings.set


#### Returns Promise<number>

The new game time


### sync

- sync(): Promise<GameTime>Synchronize the local client game time with the official time kept by the server
Returns Promise<GameTime>

Synchronize the local client game time with the official time kept by the server


#### Returns Promise<GameTime>


### Settings

- Protected
- Inherited
- Internal


### On This Page

