# Hooks | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.Hooks.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- Hooks


# Class Hooks

A simple event framework used throughout Foundry Virtual Tabletop.
When key actions or events occur, a "hook" is defined where user-defined callback functions can execute.
This class manages the registration and execution of hooked callback functions.


##### Index


### Accessors


### Methods


## Accessors


### Staticevents

`Static`- get events(): Record<string, HookedFunction[]>A mapping of hook events which have functions registered to them.
Returns Record<string, HookedFunction[]>

A mapping of hook events which have functions registered to them.


#### Returns Record<string, HookedFunction[]>


## Methods


### Staticcall

`Static`- call(hook: string, ...args: any[]): booleanCall hook listeners in the order in which they were registered.
Continue calling hooks until either all have been called or one returns false.
Hook listeners which return false denote that the original event has been adequately handled and no further
hooks should be called.
Parametershook: stringThe hook being triggered
...args: any[]Arguments passed to the hook callback functions
Returns booleanWere all hooks called without execution being prevented?
- hook: stringThe hook being triggered
- ...args: any[]Arguments passed to the hook callback functions

Call hook listeners in the order in which they were registered.
Continue calling hooks until either all have been called or one returns false.

Hook listeners which return false denote that the original event has been adequately handled and no further
hooks should be called.


#### Parameters

- hook: stringThe hook being triggered
- ...args: any[]Arguments passed to the hook callback functions

The hook being triggered

Arguments passed to the hook callback functions


#### Returns boolean

Were all hooks called without execution being prevented?


### StaticcallAll

`Static`- callAll(hook: string, ...args: any[]): voidCall all hook listeners in the order in which they were registered
Hooks called this way can not be handled by returning false and will always trigger every hook callback.
Parametershook: stringThe hook being triggered
...args: any[]Arguments passed to the hook callback functions
Returns void
- hook: stringThe hook being triggered
- ...args: any[]Arguments passed to the hook callback functions

Call all hook listeners in the order in which they were registered
Hooks called this way can not be handled by returning false and will always trigger every hook callback.


#### Parameters

- hook: stringThe hook being triggered
- ...args: any[]Arguments passed to the hook callback functions

The hook being triggered

Arguments passed to the hook callback functions


#### Returns void


### Staticoff

`Static`- off(hook: string, fn: number | Function): voidUnregister a callback handler for a particular hook event
Parametershook: stringThe unique name of the hooked event
fn: number | FunctionThe function, or ID number for the function, that should be turned off
Returns void
- hook: stringThe unique name of the hooked event
- fn: number | FunctionThe function, or ID number for the function, that should be turned off

Unregister a callback handler for a particular hook event


#### Parameters

- hook: stringThe unique name of the hooked event
- fn: number | FunctionThe function, or ID number for the function, that should be turned off

The unique name of the hooked event

The function, or ID number for the function, that should be turned off


#### Returns void


### Staticon

`Static`- on(hook: string, fn: Function, options?: { once: boolean }): numberRegister a callback handler which should be triggered when a hook is triggered.
Parametershook: stringThe unique name of the hooked event
fn: FunctionThe callback function which should be triggered when the hook event occurs
options: { once: boolean } = {}Options which customize hook registration
once: booleanOnly trigger the hooked function once
Returns numberAn ID number of the hooked function which can be used to turn off the hook later
- hook: stringThe unique name of the hooked event
- fn: FunctionThe callback function which should be triggered when the hook event occurs
- options: { once: boolean } = {}Options which customize hook registration
once: booleanOnly trigger the hooked function once
- once: booleanOnly trigger the hooked function once

Register a callback handler which should be triggered when a hook is triggered.


#### Parameters

- hook: stringThe unique name of the hooked event
- fn: FunctionThe callback function which should be triggered when the hook event occurs
- options: { once: boolean } = {}Options which customize hook registration
once: booleanOnly trigger the hooked function once
- once: booleanOnly trigger the hooked function once

The unique name of the hooked event

The callback function which should be triggered when the hook event occurs

Options which customize hook registration

- once: booleanOnly trigger the hooked function once


##### once: boolean

Only trigger the hooked function once


#### Returns number

An ID number of the hooked function which can be used to turn off the hook later


### Staticonce

`Static`- once(hook: string, fn: Function): numberRegister a callback handler for an event which is only triggered once the first time the event occurs.
An alias for Hooks.on with {once: true}
Parametershook: stringThe unique name of the hooked event
fn: FunctionThe callback function which should be triggered when the hook event occurs
Returns numberAn ID number of the hooked function which can be used to turn off the hook later
- hook: stringThe unique name of the hooked event
- fn: FunctionThe callback function which should be triggered when the hook event occurs

Register a callback handler for an event which is only triggered once the first time the event occurs.
An alias for Hooks.on with {once: true}


#### Parameters

- hook: stringThe unique name of the hooked event
- fn: FunctionThe callback function which should be triggered when the hook event occurs

The unique name of the hooked event

The callback function which should be triggered when the hook event occurs


#### Returns number

An ID number of the hooked function which can be used to turn off the hook later


### StaticonError

`Static`- onError(    location: string,    error: Error,    options?: {        data?: object;        log?: null | string;        msg?: string;        notify?: null | string;    },): voidNotify subscribers that an error has occurred within foundry.
Parameterslocation: stringThe method where the error was caught.
error: ErrorThe error.
Optionaloptions: { data?: object; log?: null | string; msg?: string; notify?: null | string } = {}Additional options to configure behaviour.
Optionaldata?: objectAdditional data to pass to the hook subscribers.
Optionallog?: null | stringThe level at which to log the error to console (if at all).
Optionalmsg?: stringA message which should prefix the resulting error or notification.
Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).
Returns void
- location: stringThe method where the error was caught.
- error: ErrorThe error.
- Optionaloptions: { data?: object; log?: null | string; msg?: string; notify?: null | string } = {}Additional options to configure behaviour.
Optionaldata?: objectAdditional data to pass to the hook subscribers.
Optionallog?: null | stringThe level at which to log the error to console (if at all).
Optionalmsg?: stringA message which should prefix the resulting error or notification.
Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).
- Optionaldata?: objectAdditional data to pass to the hook subscribers.
- Optionallog?: null | stringThe level at which to log the error to console (if at all).
- Optionalmsg?: stringA message which should prefix the resulting error or notification.
- Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).

Notify subscribers that an error has occurred within foundry.


#### Parameters

- location: stringThe method where the error was caught.
- error: ErrorThe error.
- Optionaloptions: { data?: object; log?: null | string; msg?: string; notify?: null | string } = {}Additional options to configure behaviour.
Optionaldata?: objectAdditional data to pass to the hook subscribers.
Optionallog?: null | stringThe level at which to log the error to console (if at all).
Optionalmsg?: stringA message which should prefix the resulting error or notification.
Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).
- Optionaldata?: objectAdditional data to pass to the hook subscribers.
- Optionallog?: null | stringThe level at which to log the error to console (if at all).
- Optionalmsg?: stringA message which should prefix the resulting error or notification.
- Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).

The method where the error was caught.

The error.

`Optional`Additional options to configure behaviour.

- Optionaldata?: objectAdditional data to pass to the hook subscribers.
- Optionallog?: null | stringThe level at which to log the error to console (if at all).
- Optionalmsg?: stringA message which should prefix the resulting error or notification.
- Optionalnotify?: null | stringThe level at which to spawn a notification in the UI (if at all).


##### Optionaldata?: object

`Optional`Additional data to pass to the hook subscribers.


##### Optionallog?: null | string

`Optional`The level at which to log the error to console (if at all).


##### Optionalmsg?: string

`Optional`A message which should prefix the resulting error or notification.


##### Optionalnotify?: null | string

`Optional`The level at which to spawn a notification in the UI (if at all).


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

