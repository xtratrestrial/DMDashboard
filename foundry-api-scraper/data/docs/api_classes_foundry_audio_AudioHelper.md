# AudioHelper | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.audio.AudioHelper.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- audio
- AudioHelper


# Class AudioHelper

A helper class to provide common functionality for working with the Web Audio API.
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
A singleton instance of this class is available as game#audio.


#### See

foundry.Game#audio


##### Index


### Properties


### Accessors


### Methods


## Properties


### analyzer

Analyzers for each context, plus an internal ticker. Each context key
holds data about its AnalyserNode, a Float32Array for FFT data, and so on.


### buffers

A singleton cache used for audio buffers.


### environment

A singleton audio context used for playback of environmental audio.


### interface

A singleton audio context used for playback of interface sounds and effects.


### locked

A flag for whether video playback is currently locked by awaiting a user gesture


### music

A singleton audio context used for playback of music.


### pending

A user gesture must be registered before audio can be played.
This Array contains the Sound instances which are requested for playback prior to a gesture.
Once a gesture is observed, we begin playing all elements of this Array.


#### See

foundry.audio.Sound


### playing

Get a map of the Sound objects which are currently playing.


### sounds

The set of singleton Sound instances which are shared across multiple uses of the same sound path.


### unlock

A Promise which resolves once the game audio API is unlocked and ready to use.


### StaticANALYSIS_TIMEOUT_MS

`Static`A static inactivity threshold for audio analysis, in milliseconds.
If no band value is requested for a channel within this duration,
the analyzer is disabled to conserve resources (unless the analyzer is enabled with the keepAlive=true option)

`keepAlive=true`
### StaticAUDIO_CONTEXTS

`Static`An array containing all possible audio context names.


### StaticlevelAnalyserNativeInterval

`Static`The Native interval for the AudioHelper to analyse audio levels from streams
Any interval passed to startLevelReports() would need to be a multiple of this value.


### StaticTHRESHOLD_CACHE_SIZE_BYTES

`Static`The cache size threshold after which audio buffers will be expired from the cache to make more room.
1 gigabyte, by default.


## Accessors


### context

- get context(): AudioContextFor backwards compatibility, AudioHelper#context refers to the context used for music playback.
Returns AudioContext

For backwards compatibility, AudioHelper#context refers to the context used for music playback.


#### Returns AudioContext


### globalMute

- get globalMute(): booleanA global mute which suppresses all 3 audio channels.
Returns boolean

A global mute which suppresses all 3 audio channels.


#### Returns boolean


## Methods


### awaitFirstGesture

- awaitFirstGesture(): Promise<void>Register an event listener to await the first mousemove gesture and begin playback once observed.
Returns Promise<void>The unlocked audio context

Register an event listener to await the first mousemove gesture and begin playback once observed.


#### Returns Promise<void>

The unlocked audio context


### create

- create(options: SoundCreationOptions): SoundCreate a Sound instance for a given audio source URL
Parametersoptions: SoundCreationOptionsSound creation options
Returns Sound
- options: SoundCreationOptionsSound creation options

Create a Sound instance for a given audio source URL


#### Parameters

- options: SoundCreationOptionsSound creation options

Sound creation options


#### Returns Sound


### debug

- debug(message: string): voidLog a debugging message if the audio debugging flag is enabled.
Parametersmessage: stringThe message to log
Returns void
- message: stringThe message to log

Log a debugging message if the audio debugging flag is enabled.


#### Parameters

- message: stringThe message to log

The message to log


#### Returns void


### disableAnalyzer

- disableAnalyzer(contextName: ContextName): voidDisable the analyzer for a given context, disconnecting the AnalyserNode.
ParameterscontextName: ContextNameReturns void
- contextName: ContextName

Disable the analyzer for a given context, disconnecting the AnalyserNode.


#### Parameters

- contextName: ContextName


#### Returns void


### enableAnalyzer

- enableAnalyzer(    contextName: ContextName,    options?: { keepAlive?: boolean },): voidEnable the analyzer for a given context (music, environment, interface),
attaching an AnalyserNode to its gain node if not already active.
ParameterscontextName: ContextNameOptionaloptions: { keepAlive?: boolean } = {}OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.
Returns void
- contextName: ContextName
- Optionaloptions: { keepAlive?: boolean } = {}OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.
- OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.

Enable the analyzer for a given context (music, environment, interface),
attaching an AnalyserNode to its gain node if not already active.


#### Parameters

- contextName: ContextName
- Optionaloptions: { keepAlive?: boolean } = {}OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.
- OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.

`Optional`- OptionalkeepAlive?: booleanIf true, this analyzer will not auto-disable after inactivity.


##### OptionalkeepAlive?: boolean

`Optional`If true, this analyzer will not auto-disable after inactivity.


#### Returns void


### getAnalyzerContext

- getAnalyzerContext(): AudioContextReturns a singleton AudioContext if one can be created.
An audio context may not be available due to limited resources or browser compatibility
in which case null will be returned
Returns AudioContextA singleton AudioContext or null if one is not available

Returns a singleton AudioContext if one can be created.
An audio context may not be available due to limited resources or browser compatibility
in which case null will be returned


#### Returns AudioContext

A singleton AudioContext or null if one is not available


### getBandLevel

- getBandLevel(    contextName: ContextName,    bandName: BandName,    options?: { ignoreVolume?: boolean },): numberReturns a normalized band value in [0,1].
Optionally, we can subtract the actual gainNode (global) volume from the measurement.

Important:

Local gain applied to foundry.audio.Sound source can't be ignored.
If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).



ParameterscontextName: ContextNamebandName: BandNameOptionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
Returns numberThe normalized band value in [0,1].
- Important:

Local gain applied to foundry.audio.Sound source can't be ignored.
If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).
- Local gain applied to foundry.audio.Sound source can't be ignored.
- If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).
- contextName: ContextName
- bandName: BandName
- Optionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.

Returns a normalized band value in [0,1].
Optionally, we can subtract the actual gainNode (global) volume from the measurement.

- Important:

Local gain applied to foundry.audio.Sound source can't be ignored.
If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).
- Local gain applied to foundry.audio.Sound source can't be ignored.
- If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).

- Local gain applied to foundry.audio.Sound source can't be ignored.
- If this method needs to activate the analyzer, the latter requires a brief warm-up.
One or two frames may be needed before it produces meaningful values (instead of returning 0).


#### Parameters

- contextName: ContextName
- bandName: BandName
- Optionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.

`Optional`- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.


##### OptionalignoreVolume?: boolean

`Optional`If true, remove the real-time channel volume from the measurement.


#### Returns number

The normalized band value in [0,1].


### getMaxBandLevel

- getMaxBandLevel(band?: BandName, options?: { ignoreVolume?: boolean }): numberRetrieve a single "peak" analyzer value across the three main audio contexts (music, environment, interface).
This takes the maximum of the three normalized [0,1] values for a given frequency band.
ParametersOptionalband: BandName = "all"The frequency band for which to retrieve an analyzer value.
Optionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
Returns numberA number in the [0,1] range representing the loudest band value among the three contexts.
- Optionalband: BandName = "all"The frequency band for which to retrieve an analyzer value.
- Optionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.

Retrieve a single "peak" analyzer value across the three main audio contexts (music, environment, interface).
This takes the maximum of the three normalized [0,1] values for a given frequency band.


#### Parameters

- Optionalband: BandName = "all"The frequency band for which to retrieve an analyzer value.
- Optionaloptions: { ignoreVolume?: boolean } = {}OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.
- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.

`Optional`The frequency band for which to retrieve an analyzer value.

`Optional`- OptionalignoreVolume?: booleanIf true, remove the real-time channel volume from the measurement.


##### OptionalignoreVolume?: boolean

`Optional`If true, remove the real-time channel volume from the measurement.


#### Returns number

A number in the [0,1] range representing the loudest band value among the three contexts.


### play

- play(src: string, options?: { context?: AudioContext }): Promise<Sound>Play a single Sound by providing its source.
Parameterssrc: stringThe file path to the audio source being played
Optionaloptions: { context?: AudioContext } = {}Additional options which configure playback
Optionalcontext?: AudioContextA specific AudioContext within which to play
Returns Promise<Sound>The created Sound which is now playing
- src: stringThe file path to the audio source being played
- Optionaloptions: { context?: AudioContext } = {}Additional options which configure playback
Optionalcontext?: AudioContextA specific AudioContext within which to play
- Optionalcontext?: AudioContextA specific AudioContext within which to play

Play a single Sound by providing its source.


#### Parameters

- src: stringThe file path to the audio source being played
- Optionaloptions: { context?: AudioContext } = {}Additional options which configure playback
Optionalcontext?: AudioContextA specific AudioContext within which to play
- Optionalcontext?: AudioContextA specific AudioContext within which to play

The file path to the audio source being played

`Optional`Additional options which configure playback

- Optionalcontext?: AudioContextA specific AudioContext within which to play


##### Optionalcontext?: AudioContext

`Optional`A specific AudioContext within which to play


#### Returns Promise<Sound>

The created Sound which is now playing


### preload

- preload(src: string): Promise<Sound>Request that other connected clients begin preloading a certain sound path.
Parameterssrc: stringThe source file path requested for preload
Returns Promise<Sound>A Promise which resolves once the preload is complete
- src: stringThe source file path requested for preload

Request that other connected clients begin preloading a certain sound path.


#### Parameters

- src: stringThe source file path requested for preload

The source file path requested for preload


#### Returns Promise<Sound>

A Promise which resolves once the preload is complete


### startLevelReports

- startLevelReports(    id: string,    stream: MediaStream,    callback: Function,    interval?: number,    smoothing?: number,): booleanRegisters a stream for periodic reports of audio levels.
Once added, the callback will be called with the maximum decibel level of
the audio tracks in that stream since the last time the event was fired.
The interval needs to be a multiple of AudioHelper.levelAnalyserNativeInterval which defaults at 50ms
Parametersid: stringAn id to assign to this report. Can be used to stop reports
stream: MediaStreamThe MediaStream instance to report activity on.
callback: FunctionThe callback function to call with the decibel level. callback(dbLevel)
Optionalinterval: number = 50The interval at which to produce reports.
Optionalsmoothing: number = 0.1The smoothingTimeConstant to set on the audio analyser.
Returns booleanReturns whether listening to the stream was successful
- id: stringAn id to assign to this report. Can be used to stop reports
- stream: MediaStreamThe MediaStream instance to report activity on.
- callback: FunctionThe callback function to call with the decibel level. callback(dbLevel)
- Optionalinterval: number = 50The interval at which to produce reports.
- Optionalsmoothing: number = 0.1The smoothingTimeConstant to set on the audio analyser.

Registers a stream for periodic reports of audio levels.
Once added, the callback will be called with the maximum decibel level of
the audio tracks in that stream since the last time the event was fired.
The interval needs to be a multiple of AudioHelper.levelAnalyserNativeInterval which defaults at 50ms


#### Parameters

- id: stringAn id to assign to this report. Can be used to stop reports
- stream: MediaStreamThe MediaStream instance to report activity on.
- callback: FunctionThe callback function to call with the decibel level. callback(dbLevel)
- Optionalinterval: number = 50The interval at which to produce reports.
- Optionalsmoothing: number = 0.1The smoothingTimeConstant to set on the audio analyser.

An id to assign to this report. Can be used to stop reports

The MediaStream instance to report activity on.

The callback function to call with the decibel level. callback(dbLevel)

`callback(dbLevel)``Optional`The interval at which to produce reports.

`Optional`The smoothingTimeConstant to set on the audio analyser.


#### Returns boolean

Returns whether listening to the stream was successful


### stopLevelReports

- stopLevelReports(id: string): voidStop sending audio level reports
This stops listening to a stream and stops sending reports.
If we aren't listening to any more streams, cancel the global analyser timer.
Parametersid: stringThe id of the reports that passed to startLevelReports.
Returns void
- id: stringThe id of the reports that passed to startLevelReports.

Stop sending audio level reports
This stops listening to a stream and stops sending reports.
If we aren't listening to any more streams, cancel the global analyser timer.


#### Parameters

- id: stringThe id of the reports that passed to startLevelReports.

The id of the reports that passed to startLevelReports.


#### Returns void


### Static_activateSocketListeners

`Static`- _activateSocketListeners(    socket: Socket<DefaultEventsMap, DefaultEventsMap>,): voidOpen socket listeners which transact ChatMessage data
Parameterssocket: Socket<DefaultEventsMap, DefaultEventsMap>Returns void
- socket: Socket<DefaultEventsMap, DefaultEventsMap>

Open socket listeners which transact ChatMessage data


#### Parameters

- socket: Socket<DefaultEventsMap, DefaultEventsMap>


#### Returns void


### StaticgetDefaultSoundName

`Static`- getDefaultSoundName(src: string): stringGiven an input file path, determine a default name for the sound based on the filename
Parameterssrc: stringAn input file path
Returns stringA default sound name for the path
- src: stringAn input file path

Given an input file path, determine a default name for the sound based on the filename


#### Parameters

- src: stringAn input file path

An input file path


#### Returns string

A default sound name for the path


### StatichasAudioExtension

`Static`- hasAudioExtension(src: string): booleanTest whether a source file has a supported audio extension type
Parameterssrc: stringA requested audio source path
Returns booleanDoes the filename end with a valid audio extension?
- src: stringA requested audio source path

Test whether a source file has a supported audio extension type


#### Parameters

- src: stringA requested audio source path

A requested audio source path


#### Returns boolean

Does the filename end with a valid audio extension?


### StaticinputToVolume

`Static`- inputToVolume(value: string | number, order?: number): numberReturns the volume value based on a range input volume control's position.
This is using an exponential approximation of the logarithmic nature of audio level perception
Parametersvalue: string | numberValue between [0, 1] of the range input
Optionalorder: number = 1.5The exponent of the curve
Returns number
- value: string | numberValue between [0, 1] of the range input
- Optionalorder: number = 1.5The exponent of the curve

Returns the volume value based on a range input volume control's position.
This is using an exponential approximation of the logarithmic nature of audio level perception


#### Parameters

- value: string | numberValue between [0, 1] of the range input
- Optionalorder: number = 1.5The exponent of the curve

Value between [0, 1] of the range input

`Optional`The exponent of the curve


#### Returns number


### Staticplay

`Static`- play(    data: {        autoplay?: boolean;        channel?: string;        loop?: boolean;        src: string;        volume?: number;    },    socketOptions?: boolean | { recipients: string[] },): void | SoundPlay a one-off sound effect which is not part of a Playlist
Parametersdata: {    autoplay?: boolean;    channel?: string;    loop?: boolean;    src: string;    volume?: number;}An object configuring the audio data to play.
Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.
OptionalsocketOptions: boolean | { recipients: string[] }Options which only apply when emitting playback over
websocket. As a boolean, emits (true) or does not emit (false) playback to all other clients.
As an object, can configure which recipients (an array of User IDs) should receive the event
(all clients by default). Default: false.
Returns void | SoundA Sound instance which controls audio playback, or nothing if data.autoplay is false.
Example: Play the sound of a locked door for all playersAudioHelper.play({src: "sounds/lock.wav", volume: 0.8, loop: false}, true);
Copy
- data: {    autoplay?: boolean;    channel?: string;    loop?: boolean;    src: string;    volume?: number;}An object configuring the audio data to play.
Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.
- Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
- Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
- Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
- src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
- Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.
- OptionalsocketOptions: boolean | { recipients: string[] }Options which only apply when emitting playback over
websocket. As a boolean, emits (true) or does not emit (false) playback to all other clients.
As an object, can configure which recipients (an array of User IDs) should receive the event
(all clients by default). Default: false.

Play a one-off sound effect which is not part of a Playlist


#### Parameters

- data: {    autoplay?: boolean;    channel?: string;    loop?: boolean;    src: string;    volume?: number;}An object configuring the audio data to play.
Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.
- Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
- Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
- Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
- src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
- Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.
- OptionalsocketOptions: boolean | { recipients: string[] }Options which only apply when emitting playback over
websocket. As a boolean, emits (true) or does not emit (false) playback to all other clients.
As an object, can configure which recipients (an array of User IDs) should receive the event
(all clients by default). Default: false.

An object configuring the audio data to play.

- Optionalautoplay?: booleanBegin playback of the audio effect immediately once it is loaded.
Default: false.
- Optionalchannel?: stringAn audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".
- Optionalloop?: booleanLoop the audio effect and continue playing it until it is manually stopped.
Default: false.
- src: stringThe audio source file path, either a public URL or a local path relative to the
public directory.
- Optionalvolume?: numberThe volume level at which to play the audio, between 0 and 1. Default: 1.


##### Optionalautoplay?: boolean

`Optional`Begin playback of the audio effect immediately once it is loaded.
Default: false.

`false`
##### Optionalchannel?: string

`Optional`An audio channel in CONST.AUDIO_CHANNELS where the sound should play.
Default: "interface".

`"interface"`
##### Optionalloop?: boolean

`Optional`Loop the audio effect and continue playing it until it is manually stopped.
Default: false.

`false`
##### src: string

The audio source file path, either a public URL or a local path relative to the
public directory.


##### Optionalvolume?: number

`Optional`The volume level at which to play the audio, between 0 and 1. Default: 1.

`1``Optional`Options which only apply when emitting playback over
websocket. As a boolean, emits (true) or does not emit (false) playback to all other clients.
As an object, can configure which recipients (an array of User IDs) should receive the event
(all clients by default). Default: false.

`false`
#### Returns void | Sound

A Sound instance which controls audio playback, or nothing if data.autoplay is false.

`data.autoplay`
#### Example: Play the sound of a locked door for all players

```javascript
AudioHelper.play({src: "sounds/lock.wav", volume: 0.8, loop: false}, true);
Copy
```

`AudioHelper.play({src: "sounds/lock.wav", volume: 0.8, loop: false}, true);`
### StaticpreloadSound

`Static`- preloadSound(src: string): Promise<Sound>Begin loading the sound for a provided source URL adding its
Parameterssrc: stringThe audio source path to preload
Returns Promise<Sound>The created and loaded Sound ready for playback
- src: stringThe audio source path to preload

Begin loading the sound for a provided source URL adding its


#### Parameters

- src: stringThe audio source path to preload

The audio source path to preload


#### Returns Promise<Sound>

The created and loaded Sound ready for playback


### StaticregisterSettings

`Static`- registerSettings(): voidRegister client-level settings for global volume controls.
Returns void

Register client-level settings for global volume controls.


#### Returns void


### StaticvolumeToInput

`Static`- volumeToInput(volume: number, order?: number): numberCounterpart to inputToVolume()
Returns the input range value based on a volume
Parametersvolume: numberValue between [0, 1] of the volume level
Optionalorder: number = 1.5The exponent of the curve
Returns number
- volume: numberValue between [0, 1] of the volume level
- Optionalorder: number = 1.5The exponent of the curve

Counterpart to inputToVolume()
Returns the input range value based on a volume


#### Parameters

- volume: numberValue between [0, 1] of the volume level
- Optionalorder: number = 1.5The exponent of the curve

Value between [0, 1] of the volume level

`Optional`The exponent of the curve


#### Returns number


### StaticvolumeToPercentage

`Static`- volumeToPercentage(    volume: number,    options?: { decimalPlaces?: number; label?: boolean },): stringConverts a volume level to a human-readable percentage value.
Parametersvolume: numberValue in the interval [0, 1] of the volume level.
Optionaloptions: { decimalPlaces?: number; label?: boolean } = {}OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.
Returns string
- volume: numberValue in the interval [0, 1] of the volume level.
- Optionaloptions: { decimalPlaces?: number; label?: boolean } = {}OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.
- OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
- Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.

Converts a volume level to a human-readable percentage value.


#### Parameters

- volume: numberValue in the interval [0, 1] of the volume level.
- Optionaloptions: { decimalPlaces?: number; label?: boolean } = {}OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.
- OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
- Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.

Value in the interval [0, 1] of the volume level.

`Optional`- OptionaldecimalPlaces?: numberThe number of decimal places to round the percentage to.
- Optionallabel?: booleanPrefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.


##### OptionaldecimalPlaces?: number

`Optional`The number of decimal places to round the percentage to.


##### Optionallabel?: boolean

`Optional`Prefix the returned tooltip with a localized 'Volume: ' label. This
should be used if the returned string is intended for assistive
technologies, such as the aria-valuetext attribute.


#### Returns string


### Settings

- Protected
- Inherited
- Internal


### On This Page

