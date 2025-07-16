# VideoHelper | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.media.VideoHelper.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- media
- VideoHelper


# Class VideoHelper

A helper class to provide common functionality for working with HTML5 video objects
A singleton instance of this class is available as game.video

`game.video`
##### Index


### Properties


### Methods


## Properties


### locked

A flag for whether video playback is currently locked by awaiting a user gesture


### pending

A user gesture must be registered before video playback can begin.
This Set records the video elements which await such a gesture.


### thumbs

A mapping of base64 video thumbnail images


## Methods


### awaitFirstGesture

- awaitFirstGesture(): voidRegister an event listener to await the first mousemove gesture and begin playback once observed
A user interaction must involve a mouse click or keypress.
Listen for any of these events, and handle the first observed gesture.
Returns void

Register an event listener to await the first mousemove gesture and begin playback once observed
A user interaction must involve a mouse click or keypress.
Listen for any of these events, and handle the first observed gesture.


#### Returns void


### cloneTexture

- cloneTexture(source: HTMLVideoElement): Promise<Texture<Resource>>Clone a video texture so that it can be played independently of the original base texture.
Parameterssource: HTMLVideoElementThe video element source
Returns Promise<Texture<Resource>>An unlinked PIXI.Texture which can be played independently
- source: HTMLVideoElementThe video element source

Clone a video texture so that it can be played independently of the original base texture.


#### Parameters

- source: HTMLVideoElementThe video element source

The video element source


#### Returns Promise<Texture<Resource>>

An unlinked PIXI.Texture which can be played independently


### createThumbnail

- createThumbnail(src: string, options: object): Promise<string>Create and cache a static thumbnail to use for the video.
The thumbnail is cached using the video file path or URL.
Parameterssrc: stringThe source video URL
options: objectThumbnail creation options, including width and height
Returns Promise<string>The created and cached base64 thumbnail image, or a placeholder image if the canvas is
disabled and no thumbnail can be generated.
- src: stringThe source video URL
- options: objectThumbnail creation options, including width and height

Create and cache a static thumbnail to use for the video.
The thumbnail is cached using the video file path or URL.


#### Parameters

- src: stringThe source video URL
- options: objectThumbnail creation options, including width and height

The source video URL

Thumbnail creation options, including width and height


#### Returns Promise<string>

The created and cached base64 thumbnail image, or a placeholder image if the canvas is
disabled and no thumbnail can be generated.


### getSourceElement

- getSourceElement(mesh: any): null | HTMLImageElement | HTMLVideoElementReturn the HTML element which provides the source for a loaded texture.
Parametersmesh: anyThe rendered mesh
Returns null | HTMLImageElement | HTMLVideoElementThe source HTML element
- mesh: anyThe rendered mesh

Return the HTML element which provides the source for a loaded texture.


#### Parameters

- mesh: anyThe rendered mesh

The rendered mesh


#### Returns null | HTMLImageElement | HTMLVideoElement

The source HTML element


### getVideoSource

- getVideoSource(object: any): null | HTMLVideoElementGet the video element source corresponding to a Sprite or SpriteMesh.
Parametersobject: anyThe PIXI source
Returns null | HTMLVideoElementThe source video element or null
- object: anyThe PIXI source

Get the video element source corresponding to a Sprite or SpriteMesh.


#### Parameters

- object: anyThe PIXI source

The PIXI source


#### Returns null | HTMLVideoElement

The source video element or null


### getYouTubeEmbedURL

- getYouTubeEmbedURL(url: string, vars?: object): stringTake a URL to a YouTube video and convert it into a URL suitable for embedding in a YouTube iframe.
Parametersurl: stringThe URL to convert.
vars: object = {}YouTube player parameters.
Returns stringThe YouTube embed URL.
- url: stringThe URL to convert.
- vars: object = {}YouTube player parameters.

Take a URL to a YouTube video and convert it into a URL suitable for embedding in a YouTube iframe.


#### Parameters

- url: stringThe URL to convert.
- vars: object = {}YouTube player parameters.

The URL to convert.

YouTube player parameters.


#### Returns string

The YouTube embed URL.


### getYouTubeId

- getYouTubeId(url: string): stringRetrieve a YouTube video ID from a URL.
Parametersurl: stringThe URL.
Returns string
- url: stringThe URL.

Retrieve a YouTube video ID from a URL.


#### Parameters

- url: stringThe URL.

The URL.


#### Returns string


### getYouTubePlayer

- getYouTubePlayer(id: string, config?: object): Promise<Player>Lazily-load the YouTube API and retrieve a Player instance for a given iframe.
Parametersid: stringThe iframe ID.
config: object = {}A player config object. See https://developers.google.com/youtube/iframe_api_reference for reference.
Returns Promise<Player>
- id: stringThe iframe ID.
- config: object = {}A player config object. See https://developers.google.com/youtube/iframe_api_reference for reference.

Lazily-load the YouTube API and retrieve a Player instance for a given iframe.


#### Parameters

- id: stringThe iframe ID.
- config: object = {}A player config object. See https://developers.google.com/youtube/iframe_api_reference for reference.

The iframe ID.

A player config object. See https://developers.google.com/youtube/iframe_api_reference for reference.


#### Returns Promise<Player>


### isYouTubeURL

- isYouTubeURL(url?: string): booleanTest a URL to see if it points to a YouTube video.
Parametersurl: string = ""The URL to test.
Returns boolean
- url: string = ""The URL to test.

Test a URL to see if it points to a YouTube video.


#### Parameters

- url: string = ""The URL to test.

The URL to test.


#### Returns boolean


### play

- play(    video: HTMLElement,    options?: {        loop?: boolean;        offset?: number;        playing?: boolean;        volume?: number;    },): Promise<any>Play a single video source
If playback is not yet enabled, add the video to the pending queue
Parametersvideo: HTMLElementThe VIDEO element to play
Optionaloptions: { loop?: boolean; offset?: number; playing?: boolean; volume?: number } = {}Additional options for modifying video playback
Optionalloop?: booleanShould the video loop?
Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
Optionalvolume?: numberDesired volume level of the video's audio channel (if any)
Returns Promise<any>
- video: HTMLElementThe VIDEO element to play
- Optionaloptions: { loop?: boolean; offset?: number; playing?: boolean; volume?: number } = {}Additional options for modifying video playback
Optionalloop?: booleanShould the video loop?
Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
Optionalvolume?: numberDesired volume level of the video's audio channel (if any)
- Optionalloop?: booleanShould the video loop?
- Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
- Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
- Optionalvolume?: numberDesired volume level of the video's audio channel (if any)

Play a single video source
If playback is not yet enabled, add the video to the pending queue


#### Parameters

- video: HTMLElementThe VIDEO element to play
- Optionaloptions: { loop?: boolean; offset?: number; playing?: boolean; volume?: number } = {}Additional options for modifying video playback
Optionalloop?: booleanShould the video loop?
Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
Optionalvolume?: numberDesired volume level of the video's audio channel (if any)
- Optionalloop?: booleanShould the video loop?
- Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
- Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
- Optionalvolume?: numberDesired volume level of the video's audio channel (if any)

The VIDEO element to play

`Optional`Additional options for modifying video playback

- Optionalloop?: booleanShould the video loop?
- Optionaloffset?: numberA specific timestamp between 0 and the video duration to begin playback
- Optionalplaying?: booleanShould the video be playing? Otherwise, it will be paused
- Optionalvolume?: numberDesired volume level of the video's audio channel (if any)


##### Optionalloop?: boolean

`Optional`Should the video loop?


##### Optionaloffset?: number

`Optional`A specific timestamp between 0 and the video duration to begin playback


##### Optionalplaying?: boolean

`Optional`Should the video be playing? Otherwise, it will be paused


##### Optionalvolume?: number

`Optional`Desired volume level of the video's audio channel (if any)


#### Returns Promise<any>


### stop

- stop(video: HTMLElement): voidStop a single video source
Parametersvideo: HTMLElementThe VIDEO element to stop
Returns void
- video: HTMLElementThe VIDEO element to stop

Stop a single video source


#### Parameters

- video: HTMLElementThe VIDEO element to stop

The VIDEO element to stop


#### Returns void


### StatichasVideoExtension

`Static`- hasVideoExtension(src: string): booleanCheck if a source has a video extension.
Parameterssrc: stringThe source.
Returns booleanIf the source has a video extension or not.
- src: stringThe source.

Check if a source has a video extension.


#### Parameters

- src: stringThe source.

The source.


#### Returns boolean

If the source has a video extension or not.


### Settings

- Protected
- Inherited
- Internal


### On This Page

