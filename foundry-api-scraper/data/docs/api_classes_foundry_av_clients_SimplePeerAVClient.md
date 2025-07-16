# SimplePeerAVClient | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.av.clients.SimplePeerAVClient.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- av
- clients
- SimplePeerAVClient


# Class SimplePeerAVClient

An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.
Credit to bekit#4213 for identifying simple-peer as a viable technology and providing a POC implementation.


#### Hierarchy (View Summary)

- AVClientSimplePeerAVClient
- SimplePeerAVClient

- SimplePeerAVClient


##### Index


### Properties


### Accessors


### Methods


## Properties


### audioBroadcastEnabled

Is outbound broadcast of local audio enabled?


### levelsStream

The dedicated audio stream used to measure volume levels for voice activity detection.


### localStream

The local Stream which captures input video and audio


### master

The master orchestration instance

Inherited from AVClient.master


### peers

A mapping of connected peers


### remoteStreams

A mapping of connected remote streams


### settings

The active audio/video settings being used

Inherited from AVClient.settings


## Accessors


### isMuted

- get isMuted(): booleanIs the current user muted?
Returns booleanInherited from AVClient.isMuted

Is the current user muted?


#### Returns boolean

Inherited from AVClient.isMuted


### isVoiceActivated

- get isVoiceActivated(): booleanIs audio broadcasting voice-activation enabled?
Returns booleanInherited from AVClient.isVoiceActivated

Is audio broadcasting voice-activation enabled?


#### Returns boolean

Inherited from AVClient.isVoiceActivated


### isVoiceAlways

- get isVoiceAlways(): booleanIs audio broadcasting always enabled?
Returns booleanInherited from AVClient.isVoiceAlways

Is audio broadcasting always enabled?


#### Returns boolean

Inherited from AVClient.isVoiceAlways


### isVoicePTT

- get isVoicePTT(): booleanIs audio broadcasting push-to-talk enabled?
Returns booleanInherited from AVClient.isVoicePTT

Is audio broadcasting push-to-talk enabled?


#### Returns boolean

Inherited from AVClient.isVoicePTT


## Methods


### activateSocketListeners

- activateSocketListeners(): voidListen for Audio/Video updates on the av socket to broker connections between peers
Returns void

Listen for Audio/Video updates on the av socket to broker connections between peers


#### Returns void


### connect

- connect(): Promise<boolean>Returns Promise<boolean>Overrides AVClient.connect


#### Returns Promise<boolean>

Overrides AVClient.connect


### connectPeer

- connectPeer(userId: string, isInitiator?: boolean): SimplePeerConnect to a peer directly, either as the initiator or as the receiver
ParametersuserId: stringThe Foundry user ID with whom we are connecting
isInitiator: boolean = falseIs the current user initiating the connection, or responding to it?
Returns SimplePeerThe constructed and configured SimplePeer instance
- userId: stringThe Foundry user ID with whom we are connecting
- isInitiator: boolean = falseIs the current user initiating the connection, or responding to it?

Connect to a peer directly, either as the initiator or as the receiver


#### Parameters

- userId: stringThe Foundry user ID with whom we are connecting
- isInitiator: boolean = falseIs the current user initiating the connection, or responding to it?

The Foundry user ID with whom we are connecting

Is the current user initiating the connection, or responding to it?


#### Returns SimplePeer

The constructed and configured SimplePeer instance


### disconnect

- disconnect(): Promise<boolean>Returns Promise<boolean>Overrides AVClient.disconnect


#### Returns Promise<boolean>

Overrides AVClient.disconnect


### disconnectAll

- disconnectAll(): Promise<any[]>Disconnect from all current peer streams
Returns Promise<any[]>A Promise which resolves once all peers have been disconnected

Disconnect from all current peer streams


#### Returns Promise<any[]>

A Promise which resolves once all peers have been disconnected


### disconnectPeer

- disconnectPeer(userId: string): Promise<void>Disconnect from a peer by stopping current stream tracks and destroying the SimplePeer instance
ParametersuserId: stringThe Foundry user ID from whom we are disconnecting
Returns Promise<void>A Promise which resolves once the disconnection is complete
- userId: stringThe Foundry user ID from whom we are disconnecting

Disconnect from a peer by stopping current stream tracks and destroying the SimplePeer instance


#### Parameters

- userId: stringThe Foundry user ID from whom we are disconnecting

The Foundry user ID from whom we are disconnecting


#### Returns Promise<void>

A Promise which resolves once the disconnection is complete


### getAudioSinks

- getAudioSinks(): Promise<{ object: any }>Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>Inherited from AVClient.getAudioSinks

Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>

Inherited from AVClient.getAudioSinks


### getAudioSources

- getAudioSources(): Promise<{ object: any }>Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>Inherited from AVClient.getAudioSources

Provide an Object of available audio sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>

Inherited from AVClient.getAudioSources


### getConnectedUsers

- getConnectedUsers(): any[]Returns any[]Overrides AVClient.getConnectedUsers


#### Returns any[]

Overrides AVClient.getConnectedUsers


### getLevelsStreamForUser

- getLevelsStreamForUser(userId: any): anyParametersuserId: anyReturns anyOverrides AVClient.getLevelsStreamForUser
- userId: any


#### Parameters

- userId: any


#### Returns any

Overrides AVClient.getLevelsStreamForUser


### getMediaStreamForUser

- getMediaStreamForUser(userId: any): anyParametersuserId: anyReturns anyOverrides AVClient.getMediaStreamForUser
- userId: any


#### Parameters

- userId: any


#### Returns any

Overrides AVClient.getMediaStreamForUser


### getVideoSources

- getVideoSources(): Promise<{ object: any }>Provide an Object of available video sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.
Returns Promise<{ object: any }>Inherited from AVClient.getVideoSources

Provide an Object of available video sources which can be used by this implementation.
Each object key should be a device id and the key should be a human-readable label.


#### Returns Promise<{ object: any }>

Inherited from AVClient.getVideoSources


### initialize

- initialize(): Promise<void>Returns Promise<void>Overrides AVClient.initialize


#### Returns Promise<void>

Overrides AVClient.initialize


### initializeLocalStream

- initializeLocalStream(): Promise<MediaStream>Initialize a local media stream for the current user
Returns Promise<MediaStream>

Initialize a local media stream for the current user


#### Returns Promise<MediaStream>


### initializePeerStream

- initializePeerStream(userId: string): Promise<SimplePeer>Initialize a stream connection with a new peer
ParametersuserId: stringThe Foundry user ID for which the peer stream should be established
Returns Promise<SimplePeer>A Promise which resolves once the peer stream is initialized
- userId: stringThe Foundry user ID for which the peer stream should be established

Initialize a stream connection with a new peer


#### Parameters

- userId: stringThe Foundry user ID for which the peer stream should be established

The Foundry user ID for which the peer stream should be established


#### Returns Promise<SimplePeer>

A Promise which resolves once the peer stream is initialized


### isAudioEnabled

- isAudioEnabled(): booleanReturns booleanOverrides AVClient.isAudioEnabled


#### Returns boolean

Overrides AVClient.isAudioEnabled


### isVideoEnabled

- isVideoEnabled(): booleanReturns booleanOverrides AVClient.isVideoEnabled


#### Returns boolean

Overrides AVClient.isVideoEnabled


### onSettingsChanged

- onSettingsChanged(changed: any): Promise<void>Parameterschanged: anyReturns Promise<void>Overrides AVClient.onSettingsChanged
- changed: any


#### Parameters

- changed: any


#### Returns Promise<void>

Overrides AVClient.onSettingsChanged


### receiveSignal

- receiveSignal(userId: string, data: object): voidReceive a request to establish a peer signal with some other User id
ParametersuserId: stringThe Foundry user ID who is requesting to establish a connection
data: objectThe connection details provided by SimplePeer
Returns void
- userId: stringThe Foundry user ID who is requesting to establish a connection
- data: objectThe connection details provided by SimplePeer

Receive a request to establish a peer signal with some other User id


#### Parameters

- userId: stringThe Foundry user ID who is requesting to establish a connection
- data: objectThe connection details provided by SimplePeer

The Foundry user ID who is requesting to establish a connection

The connection details provided by SimplePeer


#### Returns void


### setUserVideo

- setUserVideo(userId: any, videoElement: any): Promise<void>ParametersuserId: anyvideoElement: anyReturns Promise<void>Overrides AVClient.setUserVideo
- userId: any
- videoElement: any


#### Parameters

- userId: any
- videoElement: any


#### Returns Promise<void>

Overrides AVClient.setUserVideo


### toggleAudio

- toggleAudio(enabled: any): voidParametersenabled: anyReturns voidOverrides AVClient.toggleAudio
- enabled: any


#### Parameters

- enabled: any


#### Returns void

Overrides AVClient.toggleAudio


### toggleBroadcast

- toggleBroadcast(enabled: any): voidParametersenabled: anyReturns voidOverrides AVClient.toggleBroadcast
- enabled: any


#### Parameters

- enabled: any


#### Returns void

Overrides AVClient.toggleBroadcast


### toggleVideo

- toggleVideo(enabled: any): voidParametersenabled: anyReturns voidOverrides AVClient.toggleVideo
- enabled: any


#### Parameters

- enabled: any


#### Returns void

Overrides AVClient.toggleVideo


### updateLocalStream

- updateLocalStream(): Promise<void>Replace the local stream for each connected peer with a re-generated MediaStream.
Returns Promise<void>Overrides AVClient.updateLocalStream

Replace the local stream for each connected peer with a re-generated MediaStream.


#### Returns Promise<void>

Overrides AVClient.updateLocalStream


### Settings

- Protected
- Inherited
- Internal


### On This Page

