# SocketInterface | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.SocketInterface.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- SocketInterface


# Class SocketInterface

A standardized way socket messages are dispatched and their responses are handled


##### Index


### Methods


## Methods


### Staticdispatch

`Static`- dispatch(    eventName: string,    request: object | DocumentSocketRequest,): Promise<SocketResponse>Send a socket request to all other clients and handle their responses.
ParameterseventName: stringThe socket event name being handled
request: object | DocumentSocketRequestRequest data provided to the Socket event
Returns Promise<SocketResponse>A Promise which resolves to the SocketResponse
- eventName: stringThe socket event name being handled
- request: object | DocumentSocketRequestRequest data provided to the Socket event

Send a socket request to all other clients and handle their responses.


#### Parameters

- eventName: stringThe socket event name being handled
- request: object | DocumentSocketRequestRequest data provided to the Socket event

The socket event name being handled

Request data provided to the Socket event


#### Returns Promise<SocketResponse>

A Promise which resolves to the SocketResponse


### Settings

- Protected
- Inherited
- Internal


### On This Page

