# AVClient | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.av.AVClient.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- av
- AVClient


# Class AVClientInterface

`Interface`An interface for an Audio/Video client which is extended to provide broadcasting functionality.


#### Param: master

The master orchestration instance


#### Param: settings

The audio/video settings being used


#### Hierarchy (View Summary)

- AVClientSimplePeerAVClient
- SimplePeerAVClient

- SimplePeerAVClient


##### Index


### Properties


### Accessors


### Methods


## Properties


### master

The master orchestration instance


### settings

The active audio/video settings being used


## Accessors


### isMuted

- get isMuted(): booleanIs the current user muted?
Returns boolean

Is the current user muted?


#### Returns boolean


### isVoiceActivated

- get isVoiceActivated(): booleanIs audio broadcasting voice-activation enabled?
Returns boolean

Is audio broadcasting voice-activation enabled?


#### Returns boolean


### isVoiceAlways

- get isVoiceAlways(): booleanIs audio broadcasting always enabled?
Returns boolean

Is audio broadcasting always enabled?


#### Returns boolean


### isVoicePTT

- get isVoicePTT(): booleanIs audio broadcasting push-to-talk enabled?
Returns boolean

Is audio broadcasting push-to-talk enabled?


#### Returns boolean


## Methods


### Abstractconnect

`Abstract`- connect(): Promise<boolean>Connect to any servers or services needed in order to provide audio/video functionality.
Any parameters needed in order to establish the connection should be drawn from the settings object.
This function should return a boolean for whether the connection attempt was successful.
Returns Promise<boolean>Was the connection attempt successful?

Connect to any servers or services needed in order to provide audio/video functionality.
Any parameters needed in order to establish the connection should be drawn from the settings object.
This function should return a boolean for whether the connection attempt was successful.


#### Returns Promise<boolean>

Was the connection attempt successful?


### Abstractdisconnect

`Abstract`- disconnect(): Promise<boolean>Disconnect from any servers or services which are used to provide audio/video functionality.
This function should return a boolean for whether a valid disconnection occurred.
Returns Promise<boolean>Did a disconnection occur?

Disconnect from any servers or services which are used to provide audio/video functionality.
This function should return a boolean for whether a valid disconnection occurred.


#### Returns Promise<boolean>

Did a disconnection occur?


### getAudioSinks

- getAudioSinks(): Promise<{ object: any }>Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>

Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>


### getAudioSources

- getAudioSources(): Promise<{ object: any }>Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>

Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>


### AbstractgetConnectedUsers

`Abstract`- getConnectedUsers(): string[]Return an array of Foundry User IDs which are currently connected to A/V.
The current user should also be included as a connected user in addition to all peers.
Returns string[]The connected User IDs

Return an array of Foundry User IDs which are currently connected to A/V.
The current user should also be included as a connected user in addition to all peers.


#### Returns string[]

The connected User IDs


### AbstractgetLevelsStreamForUser

`Abstract`- getLevelsStreamForUser(userId: string): null | MediaStreamProvide a MediaStream for monitoring a given user's voice volume levels.
ParametersuserId: stringThe User ID.
Returns null | MediaStreamThe MediaStream for the user, or null if the user does not have one.
- userId: stringThe User ID.

Provide a MediaStream for monitoring a given user's voice volume levels.


#### Parameters

- userId: stringThe User ID.

The User ID.


#### Returns null | MediaStream

The MediaStream for the user, or null if the user does not have one.


### AbstractgetMediaStreamForUser

`Abstract`- getMediaStreamForUser(userId: string): null | MediaStreamProvide a MediaStream instance for a given user ID
ParametersuserId: stringThe User id
Returns null | MediaStreamThe MediaStream for the user, or null if the user does not have one
- userId: stringThe User id

Provide a MediaStream instance for a given user ID


#### Parameters

- userId: stringThe User id

The User id


#### Returns null | MediaStream

The MediaStream for the user, or null if the user does not have one


### getVideoSources

- getVideoSources(): Promise<{ object: any }>Provide an Object of available video sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>

Provide an Object of available video sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>


### Abstractinitialize

`Abstract`- initialize(): Promise<void>One-time initialization actions that should be performed for this client implementation.
This will be called only once when the Game object is first set-up.
Returns Promise<void>

One-time initialization actions that should be performed for this client implementation.
This will be called only once when the Game object is first set-up.


#### Returns Promise<void>


### AbstractisAudioEnabled

`Abstract`- isAudioEnabled(): booleanIs outbound audio enabled for the current user?
Returns boolean

Is outbound audio enabled for the current user?


#### Returns boolean


### AbstractisVideoEnabled

`Abstract`- isVideoEnabled(): booleanIs outbound video enabled for the current user?
Returns boolean

Is outbound video enabled for the current user?


#### Returns boolean


### onSettingsChanged

- onSettingsChanged(changed: object): voidHandle changes to A/V configuration settings.
Parameterschanged: objectThe settings which have changed
Returns void
- changed: objectThe settings which have changed

Handle changes to A/V configuration settings.


#### Parameters

- changed: objectThe settings which have changed

The settings which have changed


#### Returns void


### AbstractsetUserVideo

`Abstract`- setUserVideo(userId: string, videoElement: HTMLVideoElement): Promise<void>Set the Video Track for a given User ID to a provided VideoElement
ParametersuserId: stringThe User ID to set to the element
videoElement: HTMLVideoElementThe HTMLVideoElement to which the video should be set
Returns Promise<void>
- userId: stringThe User ID to set to the element
- videoElement: HTMLVideoElementThe HTMLVideoElement to which the video should be set

Set the Video Track for a given User ID to a provided VideoElement


#### Parameters

- userId: stringThe User ID to set to the element
- videoElement: HTMLVideoElementThe HTMLVideoElement to which the video should be set

The User ID to set to the element

The HTMLVideoElement to which the video should be set


#### Returns Promise<void>


### AbstracttoggleAudio

`Abstract`- toggleAudio(enable: boolean): voidSet whether the outbound audio feed for the current game user is enabled.
This method should be used when the user marks themselves as muted or if the gamemaster globally mutes them.
Parametersenable: booleanWhether the outbound audio track should be enabled (true) or disabled (false)
Returns void
- enable: booleanWhether the outbound audio track should be enabled (true) or disabled (false)

Set whether the outbound audio feed for the current game user is enabled.
This method should be used when the user marks themselves as muted or if the gamemaster globally mutes them.


#### Parameters

- enable: booleanWhether the outbound audio track should be enabled (true) or disabled (false)

Whether the outbound audio track should be enabled (true) or disabled (false)


#### Returns void


### AbstracttoggleBroadcast

`Abstract`- toggleBroadcast(broadcast: boolean): voidSet whether the outbound audio feed for the current game user is actively broadcasting.
This can only be true if audio is enabled, but may be false if using push-to-talk or voice activation modes.
Parametersbroadcast: booleanWhether outbound audio should be sent to connected peers or not?
Returns void
- broadcast: booleanWhether outbound audio should be sent to connected peers or not?

Set whether the outbound audio feed for the current game user is actively broadcasting.
This can only be true if audio is enabled, but may be false if using push-to-talk or voice activation modes.


#### Parameters

- broadcast: booleanWhether outbound audio should be sent to connected peers or not?

Whether outbound audio should be sent to connected peers or not?


#### Returns void


### AbstracttoggleVideo

`Abstract`- toggleVideo(enable: boolean): voidSet whether the outbound video feed for the current game user is enabled.
This method should be used when the user marks themselves as hidden or if the gamemaster globally hides them.
Parametersenable: booleanWhether the outbound video track should be enabled (true) or disabled (false)
Returns void
- enable: booleanWhether the outbound video track should be enabled (true) or disabled (false)

Set whether the outbound video feed for the current game user is enabled.
This method should be used when the user marks themselves as hidden or if the gamemaster globally hides them.


#### Parameters

- enable: booleanWhether the outbound video track should be enabled (true) or disabled (false)

Whether the outbound video track should be enabled (true) or disabled (false)


#### Returns void


### AbstractupdateLocalStream

`Abstract`- updateLocalStream(): Promise<void>Replace the local stream for each connected peer with a re-generated MediaStream.
Returns Promise<void>

Replace the local stream for each connected peer with a re-generated MediaStream.


#### Returns Promise<void>


### Settings

- Protected
- Inherited
- Internal


### On This Page

