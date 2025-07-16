# Sound | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.audio.Sound.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- audio
- Sound


# Class Sound

A container around an AudioNode which manages sound playback in Foundry Virtual Tabletop.
Each Sound is either an AudioBufferSourceNode (for short sources) or a MediaElementAudioSourceNode (for long ones).
This class provides an interface around both types which allows standardized control over playback.


#### See


#### Hierarchy (View Summary)

- EventEmitter<Function, this>Sound
- Sound

- Sound


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Sound(    src: string,    options?: { context?: AudioContext; forceBuffer?: boolean },): SoundConstruct a Sound by providing the source URL and other options.
Parameterssrc: stringThe audio source path, either a relative path or a remote URL
Optionaloptions: { context?: AudioContext; forceBuffer?: boolean } = {}Additional options which configure the Sound
Optionalcontext?: AudioContextA non-default audio context within which the sound should play
OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long
Returns SoundOverrides EventEmitterMixin().constructor
- src: stringThe audio source path, either a relative path or a remote URL
- Optionaloptions: { context?: AudioContext; forceBuffer?: boolean } = {}Additional options which configure the Sound
Optionalcontext?: AudioContextA non-default audio context within which the sound should play
OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long
- Optionalcontext?: AudioContextA non-default audio context within which the sound should play
- OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long

Construct a Sound by providing the source URL and other options.


#### Parameters

- src: stringThe audio source path, either a relative path or a remote URL
- Optionaloptions: { context?: AudioContext; forceBuffer?: boolean } = {}Additional options which configure the Sound
Optionalcontext?: AudioContextA non-default audio context within which the sound should play
OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long
- Optionalcontext?: AudioContextA non-default audio context within which the sound should play
- OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long

The audio source path, either a relative path or a remote URL

`Optional`Additional options which configure the Sound

- Optionalcontext?: AudioContextA non-default audio context within which the sound should play
- OptionalforceBuffer?: booleanForce use of an AudioBufferSourceNode even if the audio duration is long


##### Optionalcontext?: AudioContext

`Optional`A non-default audio context within which the sound should play


##### OptionalforceBuffer?: boolean

`Optional`Force use of an AudioBufferSourceNode even if the audio duration is long


#### Returns Sound

Overrides EventEmitterMixin().constructor


## Properties


### Internal_manager

`Internal`An internal reference to some object which is managing this Sound instance.


### buffer

An AudioBuffer instance, if this Sound uses an AudioBufferSourceNode for playback.


### destination

The AudioNode destination which is the output target for the Sound.


### effects

A pipeline of AudioNode instances to be applied to Sound playback.


### element

An HTMLAudioElement, if this Sound uses a MediaElementAudioSourceNode for playback.


### gainNode

The GainNode used to control volume for this sound.


### id

A unique integer identifier for this sound.


### pausedTime

The time in seconds at which playback was paused.


### src

The audio source path.
Either a relative path served by the running Foundry VTT game server or a remote URL.


### startTime

The time in seconds at which playback was started.


### Protected_state

`Protected`The life-cycle state of the sound.


#### See


### StaticemittedEvents

`Static`Overrides EventEmitterMixin().emittedEvents


### StaticMAX_BUFFER_DURATION

`Static`The maximum duration, in seconds, for which an AudioBufferSourceNode will be used.
Otherwise, a MediaElementAudioSourceNode will be used.


### StaticSTATES

`Static`The sequence of container loading states.


## Accessors


### context

- get context(): AudioContextThe audio context within which this Sound is played.
Returns AudioContext

The audio context within which this Sound is played.


#### Returns AudioContext


### currentTime

- get currentTime(): numberThe current playback time of the sound.
Returns number

The current playback time of the sound.


#### Returns number


### duration

- get duration(): numberThe total duration of the audio source in seconds.
Returns number

The total duration of the audio source in seconds.


#### Returns number


### failed

- get failed(): booleanDid the audio file fail to load.
Returns boolean

Did the audio file fail to load.


#### Returns boolean


### gain

- get gain(): AudioParamA convenience reference to the GainNode gain audio parameter.
Returns AudioParam

A convenience reference to the GainNode gain audio parameter.


#### Returns AudioParam


### isBuffer

- get isBuffer(): booleanDoes this Sound use an AudioBufferSourceNode?
Otherwise, the Sound uses a streamed MediaElementAudioSourceNode.
Returns boolean

Does this Sound use an AudioBufferSourceNode?
Otherwise, the Sound uses a streamed MediaElementAudioSourceNode.


#### Returns boolean


### loaded

- get loaded(): booleanHas the audio file been loaded either fully or for streaming.
Returns boolean

Has the audio file been loaded either fully or for streaming.


#### Returns boolean


### loop

- get loop(): booleanIs the sound looping?
Returns boolean

Is the sound looping?


#### Returns boolean


### playing

- get playing(): booleanIs this sound currently playing?
Returns boolean

Is this sound currently playing?


#### Returns boolean


### sourceNode

- get sourceNode(): AudioBufferSourceNode | MediaElementAudioSourceNodeThe AudioSourceNode used to control sound playback.
Returns AudioBufferSourceNode | MediaElementAudioSourceNode

The AudioSourceNode used to control sound playback.


#### Returns AudioBufferSourceNode | MediaElementAudioSourceNode


### volume

- get volume(): numberThe currently playing volume of the sound.
Undefined until playback has started for the first time.
Returns number

The currently playing volume of the sound.
Undefined until playback has started for the first time.


#### Returns number


## Methods


### addEventListener

- addEventListener(    type: string,    listener: EmittedEventListener,    options?: { once?: boolean },): voidAdd a new event listener for a certain type of event.
Parameterstype: stringThe type of event being registered for
listener: EmittedEventListenerThe listener function called when the event occurs
Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Inherited from EventEmitterMixin().addEventListener
- type: stringThe type of event being registered for
- listener: EmittedEventListenerThe listener function called when the event occurs
- Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
- Optionalonce?: booleanShould the event only be responded to once and then removed

Add a new event listener for a certain type of event.


#### Parameters

- type: stringThe type of event being registered for
- listener: EmittedEventListenerThe listener function called when the event occurs
- Optionaloptions: { once?: boolean } = {}Options which configure the event listener
Optionalonce?: booleanShould the event only be responded to once and then removed
- Optionalonce?: booleanShould the event only be responded to once and then removed

The type of event being registered for

The listener function called when the event occurs

`Optional`Options which configure the event listener

- Optionalonce?: booleanShould the event only be responded to once and then removed


##### Optionalonce?: boolean

`Optional`Should the event only be responded to once and then removed


#### Returns void


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Inherited from EventEmitterMixin().addEventListener


### applyEffects

- applyEffects(effects?: AudioNode[]): voidUpdate the array of effects applied to a Sound instance.
Optionally a new array of effects can be assigned. If no effects are passed, the current effects are re-applied.
ParametersOptionaleffects: AudioNode[]An array of AudioNode effects to apply
Returns void
- Optionaleffects: AudioNode[]An array of AudioNode effects to apply

Update the array of effects applied to a Sound instance.
Optionally a new array of effects can be assigned. If no effects are passed, the current effects are re-applied.


#### Parameters

- Optionaleffects: AudioNode[]An array of AudioNode effects to apply

`Optional`An array of AudioNode effects to apply


#### Returns void


### dispatchEvent

- dispatchEvent(event: Event): booleanDispatch an event on this target.
Parametersevent: EventThe Event to dispatch
Returns booleanWas default behavior for the event prevented?
Seehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
Inherited from EventEmitterMixin().dispatchEvent
- event: EventThe Event to dispatch

Dispatch an event on this target.


#### Parameters

- event: EventThe Event to dispatch

The Event to dispatch


#### Returns boolean

Was default behavior for the event prevented?


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

Inherited from EventEmitterMixin().dispatchEvent


### fade

- fade(    volume: number,    options?: { duration?: number; from?: number; type?: string },): Promise<void>Fade the volume for this sound between its current level and a desired target volume.
Parametersvolume: numberThe desired target volume level between 0 and 1
Optionaloptions: { duration?: number; from?: number; type?: string } = {}Additional options that configure the fade operation
Optionalduration?: numberThe duration of the fade effect in milliseconds
Optionalfrom?: numberA volume level to start from, the current volume by default
Optionaltype?: stringThe type of fade easing, "linear" or "exponential"
Returns Promise<void>A Promise that resolves after the requested fade duration
- volume: numberThe desired target volume level between 0 and 1
- Optionaloptions: { duration?: number; from?: number; type?: string } = {}Additional options that configure the fade operation
Optionalduration?: numberThe duration of the fade effect in milliseconds
Optionalfrom?: numberA volume level to start from, the current volume by default
Optionaltype?: stringThe type of fade easing, "linear" or "exponential"
- Optionalduration?: numberThe duration of the fade effect in milliseconds
- Optionalfrom?: numberA volume level to start from, the current volume by default
- Optionaltype?: stringThe type of fade easing, "linear" or "exponential"

Fade the volume for this sound between its current level and a desired target volume.


#### Parameters

- volume: numberThe desired target volume level between 0 and 1
- Optionaloptions: { duration?: number; from?: number; type?: string } = {}Additional options that configure the fade operation
Optionalduration?: numberThe duration of the fade effect in milliseconds
Optionalfrom?: numberA volume level to start from, the current volume by default
Optionaltype?: stringThe type of fade easing, "linear" or "exponential"
- Optionalduration?: numberThe duration of the fade effect in milliseconds
- Optionalfrom?: numberA volume level to start from, the current volume by default
- Optionaltype?: stringThe type of fade easing, "linear" or "exponential"

The desired target volume level between 0 and 1

`Optional`Additional options that configure the fade operation

- Optionalduration?: numberThe duration of the fade effect in milliseconds
- Optionalfrom?: numberA volume level to start from, the current volume by default
- Optionaltype?: stringThe type of fade easing, "linear" or "exponential"


##### Optionalduration?: number

`Optional`The duration of the fade effect in milliseconds


##### Optionalfrom?: number

`Optional`A volume level to start from, the current volume by default


##### Optionaltype?: string

`Optional`The type of fade easing, "linear" or "exponential"


#### Returns Promise<void>

A Promise that resolves after the requested fade duration


### load

- load(    options?: { autoplay?: boolean; autoplayOptions?: SoundPlaybackOptions },): Promise<Sound>Load the audio source and prepare it for playback, either using an AudioBuffer or a streamed HTMLAudioElement.
ParametersOptionaloptions: { autoplay?: boolean; autoplayOptions?: SoundPlaybackOptions } = {}Additional options which affect resource loading
Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay
Returns Promise<Sound>A Promise which resolves to the Sound once it is loaded
- Optionaloptions: { autoplay?: boolean; autoplayOptions?: SoundPlaybackOptions } = {}Additional options which affect resource loading
Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay
- Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
- OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay

Load the audio source and prepare it for playback, either using an AudioBuffer or a streamed HTMLAudioElement.


#### Parameters

- Optionaloptions: { autoplay?: boolean; autoplayOptions?: SoundPlaybackOptions } = {}Additional options which affect resource loading
Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay
- Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
- OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay

`Optional`Additional options which affect resource loading

- Optionalautoplay?: booleanAutomatically begin playback of the sound once loaded
- OptionalautoplayOptions?: SoundPlaybackOptionsPlayback options passed to Sound#play, if autoplay


##### Optionalautoplay?: boolean

`Optional`Automatically begin playback of the sound once loaded


##### OptionalautoplayOptions?: SoundPlaybackOptions

`Optional`Playback options passed to Sound#play, if autoplay


#### Returns Promise<Sound>

A Promise which resolves to the Sound once it is loaded


### pause

- pause(): voidPause playback of the Sound.
For AudioBufferSourceNode this stops playback after recording the current time.
Calling Sound#play will resume playback from the pausedTime unless some other offset is passed.
For a MediaElementAudioSourceNode this simply calls the HTMLAudioElement#pause method directly.
Returns void

Pause playback of the Sound.
For AudioBufferSourceNode this stops playback after recording the current time.
Calling Sound#play will resume playback from the pausedTime unless some other offset is passed.
For a MediaElementAudioSourceNode this simply calls the HTMLAudioElement#pause method directly.


#### Returns void


### play

- play(options?: SoundPlaybackOptions, ...args?: any): Promise<Sound>Begin playback for the Sound.
This method is asynchronous because playback may not start until after an initially provided delay.
The Promise resolves before the fade-in of any configured volume transition.
ParametersOptionaloptions: SoundPlaybackOptionsOptions which configure the beginning of sound playback
...args: any = {}Returns Promise<Sound>A Promise which resolves once playback has started (excluding fade)
- Optionaloptions: SoundPlaybackOptionsOptions which configure the beginning of sound playback
- ...args: any = {}

Begin playback for the Sound.
This method is asynchronous because playback may not start until after an initially provided delay.
The Promise resolves before the fade-in of any configured volume transition.


#### Parameters

- Optionaloptions: SoundPlaybackOptionsOptions which configure the beginning of sound playback
- ...args: any = {}

`Optional`Options which configure the beginning of sound playback


#### Returns Promise<Sound>

A Promise which resolves once playback has started (excluding fade)


### removeEventListener

- removeEventListener(type: string, listener: EmittedEventListener): voidRemove an event listener for a certain type of event.
Parameterstype: stringThe type of event being removed
listener: EmittedEventListenerThe listener function being removed
Returns voidSeehttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
Inherited from EventEmitterMixin().removeEventListener
- type: stringThe type of event being removed
- listener: EmittedEventListenerThe listener function being removed

Remove an event listener for a certain type of event.


#### Parameters

- type: stringThe type of event being removed
- listener: EmittedEventListenerThe listener function being removed

The type of event being removed

The listener function being removed


#### Returns void


#### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

Inherited from EventEmitterMixin().removeEventListener


### schedule

- schedule(fn: SoundScheduleCallback, playbackTime: number): Promise<any>Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.
Parametersfn: SoundScheduleCallbackA function that will be called with this Sound as its single argument
playbackTime: numberThe desired playback time at which the function should be called
Returns Promise<any>A Promise which resolves to the returned value of the provided function once
it has been evaluated.
Example: Schedule audio playback changessound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
Copy
- fn: SoundScheduleCallbackA function that will be called with this Sound as its single argument
- playbackTime: numberThe desired playback time at which the function should be called

Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.


#### Parameters

- fn: SoundScheduleCallbackA function that will be called with this Sound as its single argument
- playbackTime: numberThe desired playback time at which the function should be called

A function that will be called with this Sound as its single argument

The desired playback time at which the function should be called


#### Returns Promise<any>

A Promise which resolves to the returned value of the provided function once
it has been evaluated.


#### Example: Schedule audio playback changes

```javascript
sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
Copy
```

`sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);`
### stop

- stop(options?: SoundPlaybackOptions): Promise<Sound>Stop playback for the Sound.
This method is asynchronous because playback may not stop until after an initially provided delay.
The Promise resolves after the fade-out of any configured volume transition.
ParametersOptionaloptions: SoundPlaybackOptions = {}Options which configure the stopping of sound playback
Returns Promise<Sound>A Promise which resolves once playback is fully stopped (including fade)
- Optionaloptions: SoundPlaybackOptions = {}Options which configure the stopping of sound playback

Stop playback for the Sound.
This method is asynchronous because playback may not stop until after an initially provided delay.
The Promise resolves after the fade-out of any configured volume transition.


#### Parameters

- Optionaloptions: SoundPlaybackOptions = {}Options which configure the stopping of sound playback

`Optional`Options which configure the stopping of sound playback


#### Returns Promise<Sound>

A Promise which resolves once playback is fully stopped (including fade)


### unschedule

- unschedule(handle: AudioTimeout | { timeout: AudioTimeout }): voidCancel one scheduled event created with Sound#schedule.
You may pass either the AudioTimeout returned internally or the Promise returned by Sound#schedule.
Parametershandle: AudioTimeout | { timeout: AudioTimeout }The handle to cancel.
Returns void
- handle: AudioTimeout | { timeout: AudioTimeout }The handle to cancel.

Cancel one scheduled event created with Sound#schedule.
You may pass either the AudioTimeout returned internally or the Promise returned by Sound#schedule.


#### Parameters

- handle: AudioTimeout | { timeout: AudioTimeout }The handle to cancel.

The handle to cancel.


#### Returns void


### unscheduleAll

- unscheduleAll(): voidCancel all events that are still scheduled for this sound.
Returns void

Cancel all events that are still scheduled for this sound.


#### Returns void


### wait

- wait(duration: number): Promise<void>Wait a certain scheduled duration within this sound's own AudioContext.
Parametersduration: numberThe duration to wait in milliseconds
Returns Promise<void>A promise which resolves after the waited duration
- duration: numberThe duration to wait in milliseconds

Wait a certain scheduled duration within this sound's own AudioContext.


#### Parameters

- duration: numberThe duration to wait in milliseconds

The duration to wait in milliseconds


#### Returns Promise<void>

A promise which resolves after the waited duration


### Protected_connectPipeline

`Protected`- _connectPipeline(): voidProtectedCreate the audio pipeline used to play this Sound.
The GainNode is reused each time to link volume changes across multiple playbacks.
The AudioSourceNode is re-created every time that Sound#play is called.
Returns void

`Protected`Create the audio pipeline used to play this Sound.
The GainNode is reused each time to link volume changes across multiple playbacks.
The AudioSourceNode is re-created every time that Sound#play is called.


#### Returns void


### Protected_createNodes

`Protected`- _createNodes(): voidProtectedCreate any AudioNode instances required for playback of this Sound.
Returns void

`Protected`Create any AudioNode instances required for playback of this Sound.


#### Returns void


### Protected_disconnectPipeline

`Protected`- _disconnectPipeline(): voidProtectedDisconnect the audio pipeline once playback is stopped.
Walk backwards along the Sound##pipeline from the Sound#destination, disconnecting each node.
Returns void

`Protected`Disconnect the audio pipeline once playback is stopped.
Walk backwards along the Sound##pipeline from the Sound#destination, disconnecting each node.


#### Returns void


### Protected_load

`Protected`- _load(): Promise<void>ProtectedAn inner method which handles loading so that it can be de-duplicated under a single shared Promise resolution.
This method is factored out to allow for subclasses to override loading behavior.
Returns Promise<void>A Promise which resolves once the sound is loaded
ThrowsAn error if loading failed for any reason

`Protected`An inner method which handles loading so that it can be de-duplicated under a single shared Promise resolution.
This method is factored out to allow for subclasses to override loading behavior.


#### Returns Promise<void>

A Promise which resolves once the sound is loaded


#### Throws

An error if loading failed for any reason


### Protected_pause

`Protected`- _pause(): voidProtectedPause playback of the Sound.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.
Returns void

`Protected`Pause playback of the Sound.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.


#### Returns void


### Protected_play

`Protected`- _play(): voidProtectedBegin playback for the configured pipeline and playback options.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.
Returns void

`Protected`Begin playback for the configured pipeline and playback options.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.


#### Returns void


### Protected_stop

`Protected`- _stop(): voidProtectedStop playback of the Sound.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.
Returns void

`Protected`Stop playback of the Sound.
This method is factored out so that subclass implementations of Sound can implement alternative behavior.


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

