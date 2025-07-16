# AVMaster | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.av.AVMaster.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- av
- AVMaster


# Class AVMaster

The master Audio/Video controller instance.
This is available as the singleton game.webrtc


##### Index


### Properties


### Methods


## Properties


### broadcasting

A flag to track whether the current user is actively broadcasting their microphone.


### client

The Audio/Video client class


## Methods


### _initializeUserVoiceDetection

- _initializeUserVoiceDetection(mode: string): voidInternalSet up audio level listeners to handle voice activation detection workflow.
Parametersmode: stringThe currently selected voice broadcasting mode
Returns void
- mode: stringThe currently selected voice broadcasting mode

`Internal`Set up audio level listeners to handle voice activation detection workflow.


#### Parameters

- mode: stringThe currently selected voice broadcasting mode

The currently selected voice broadcasting mode


#### Returns void


### _onPTTEnd

- _onPTTEnd(context: KeyboardEventContext): booleanInternalHandle deactivation of a push-to-talk key or button.
Parameterscontext: KeyboardEventContextThe context data of the event
Returns boolean
- context: KeyboardEventContextThe context data of the event

`Internal`Handle deactivation of a push-to-talk key or button.


#### Parameters

- context: KeyboardEventContextThe context data of the event

The context data of the event


#### Returns boolean


### _onPTTStart

- _onPTTStart(context: KeyboardEventContext): booleanInternalHandle activation of a push-to-talk key or button.
Parameterscontext: KeyboardEventContextThe context data of the event
Returns boolean
- context: KeyboardEventContextThe context data of the event

`Internal`Handle activation of a push-to-talk key or button.


#### Parameters

- context: KeyboardEventContextThe context data of the event

The context data of the event


#### Returns boolean


### activateVoiceDetection

- activateVoiceDetection(stream: MediaStream, ms?: number): voidActivate voice detection tracking for a userId on a provided MediaStream.
Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.
Parametersstream: MediaStreamThe MediaStream which corresponds to that User
Optionalms: numberA number of milliseconds which represents the voice activation volume interval
Returns void
- stream: MediaStreamThe MediaStream which corresponds to that User
- Optionalms: numberA number of milliseconds which represents the voice activation volume interval

Activate voice detection tracking for a userId on a provided MediaStream.
Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.


#### Parameters

- stream: MediaStreamThe MediaStream which corresponds to that User
- Optionalms: numberA number of milliseconds which represents the voice activation volume interval

The MediaStream which corresponds to that User

`Optional`A number of milliseconds which represents the voice activation volume interval


#### Returns void


### broadcast

- broadcast(intent: boolean): anyTrigger a change in the audio broadcasting state when using a push-to-talk workflow.
Parametersintent: booleanThe user's intent to broadcast. Whether an actual broadcast occurs will depend
on whether or not the user has muted their audio feed.
Returns any
- intent: booleanThe user's intent to broadcast. Whether an actual broadcast occurs will depend
on whether or not the user has muted their audio feed.

Trigger a change in the audio broadcasting state when using a push-to-talk workflow.


#### Parameters

- intent: booleanThe user's intent to broadcast. Whether an actual broadcast occurs will depend
on whether or not the user has muted their audio feed.

The user's intent to broadcast. Whether an actual broadcast occurs will depend
on whether or not the user has muted their audio feed.


#### Returns any


### canUserBroadcastAudio

- canUserBroadcastAudio(userId: string): booleanA user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.
ParametersuserId: stringReturns boolean
- userId: string

A user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.


#### Parameters

- userId: string


#### Returns boolean


### canUserBroadcastVideo

- canUserBroadcastVideo(userId: string): booleanA user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.
ParametersuserId: stringReturns boolean
- userId: string

A user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.


#### Parameters

- userId: string


#### Returns boolean


### canUserShareAudio

- canUserShareAudio(userId: string): booleanA user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.
ParametersuserId: stringReturns boolean
- userId: string

A user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.


#### Parameters

- userId: string


#### Returns boolean


### canUserShareVideo

- canUserShareVideo(userId: string): booleanA user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.
ParametersuserId: stringReturns boolean
- userId: string

A user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.


#### Parameters

- userId: string


#### Returns boolean


### connect

- connect(): Promise<boolean>Connect to the Audio/Video client.
Returns Promise<boolean>Was the connection attempt successful?

Connect to the Audio/Video client.


#### Returns Promise<boolean>

Was the connection attempt successful?


### deactivateVoiceDetection

- deactivateVoiceDetection(): voidActions which the orchestration layer should take when a peer user disconnects from the audio/video service.
Returns void

Actions which the orchestration layer should take when a peer user disconnects from the audio/video service.


#### Returns void


### disconnect

- disconnect(): Promise<boolean>Disconnect from the Audio/Video client.
Returns Promise<boolean>Whether an existing connection was terminated?

Disconnect from the Audio/Video client.


#### Returns Promise<boolean>

Whether an existing connection was terminated?


### onSettingsChanged

- onSettingsChanged(changed: object): undefined | Promise<boolean>Respond to changes which occur to AV Settings.
Changes are handled in descending order of impact.
Parameterschanged: objectThe object of changed AV settings
Returns undefined | Promise<boolean>
- changed: objectThe object of changed AV settings

Respond to changes which occur to AV Settings.
Changes are handled in descending order of impact.


#### Parameters

- changed: objectThe object of changed AV settings

The object of changed AV settings


#### Returns undefined | Promise<boolean>


### reestablish

- reestablish(): Promise<void>Callback actions to take when the user becomes disconnected from the server.
Returns Promise<void>

Callback actions to take when the user becomes disconnected from the server.


#### Returns Promise<void>


### Settings

- Protected
- Inherited
- Internal


### On This Page

