# ImageHelper | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.media.ImageHelper.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- media
- ImageHelper


# Class ImageHelper

A helper class to provide common functionality for working with Image objects.


##### Index


### Methods


## Methods


### StaticcanvasToBase64

`Static`- canvasToBase64(    canvas: HTMLCanvasElement,    type?: string,    quality?: number,): Promise<string>Asynchronously convert a canvas element to base64.
Parameterscanvas: HTMLCanvasElementOptionaltype: stringOptionalquality: numberReturns Promise<string>The base64 string of the canvas.
- canvas: HTMLCanvasElement
- Optionaltype: string
- Optionalquality: number

Asynchronously convert a canvas element to base64.


#### Parameters

- canvas: HTMLCanvasElement
- Optionaltype: string
- Optionalquality: number

`Optional``Optional`
#### Returns Promise<string>

The base64 string of the canvas.


### StaticcompositeCanvasTexture

`Static`- compositeCanvasTexture(    object: DisplayObject,    options?: {        center?: boolean;        height?: number;        tx?: number;        ty?: number;        width?: number;    },): Texture<Resource>Composite a canvas object by rendering it to a single texture
Parametersobject: DisplayObjectThe object to render to a texture
Optionaloptions: { center?: boolean; height?: number; tx?: number; ty?: number; width?: number } = {}Options which configure the resulting texture
Optionalcenter?: booleanCenter the texture in the rendered frame?
Optionalheight?: numberThe desired height of the output texture
Optionaltx?: numberA horizontal translation to apply to the object
Optionalty?: numberA vertical translation to apply to the object
Optionalwidth?: numberThe desired width of the output texture
Returns Texture<Resource>The composite Texture object
- object: DisplayObjectThe object to render to a texture
- Optionaloptions: { center?: boolean; height?: number; tx?: number; ty?: number; width?: number } = {}Options which configure the resulting texture
Optionalcenter?: booleanCenter the texture in the rendered frame?
Optionalheight?: numberThe desired height of the output texture
Optionaltx?: numberA horizontal translation to apply to the object
Optionalty?: numberA vertical translation to apply to the object
Optionalwidth?: numberThe desired width of the output texture
- Optionalcenter?: booleanCenter the texture in the rendered frame?
- Optionalheight?: numberThe desired height of the output texture
- Optionaltx?: numberA horizontal translation to apply to the object
- Optionalty?: numberA vertical translation to apply to the object
- Optionalwidth?: numberThe desired width of the output texture

Composite a canvas object by rendering it to a single texture


#### Parameters

- object: DisplayObjectThe object to render to a texture
- Optionaloptions: { center?: boolean; height?: number; tx?: number; ty?: number; width?: number } = {}Options which configure the resulting texture
Optionalcenter?: booleanCenter the texture in the rendered frame?
Optionalheight?: numberThe desired height of the output texture
Optionaltx?: numberA horizontal translation to apply to the object
Optionalty?: numberA vertical translation to apply to the object
Optionalwidth?: numberThe desired width of the output texture
- Optionalcenter?: booleanCenter the texture in the rendered frame?
- Optionalheight?: numberThe desired height of the output texture
- Optionaltx?: numberA horizontal translation to apply to the object
- Optionalty?: numberA vertical translation to apply to the object
- Optionalwidth?: numberThe desired width of the output texture

The object to render to a texture

`Optional`Options which configure the resulting texture

- Optionalcenter?: booleanCenter the texture in the rendered frame?
- Optionalheight?: numberThe desired height of the output texture
- Optionaltx?: numberA horizontal translation to apply to the object
- Optionalty?: numberA vertical translation to apply to the object
- Optionalwidth?: numberThe desired width of the output texture


##### Optionalcenter?: boolean

`Optional`Center the texture in the rendered frame?


##### Optionalheight?: number

`Optional`The desired height of the output texture


##### Optionaltx?: number

`Optional`A horizontal translation to apply to the object


##### Optionalty?: number

`Optional`A vertical translation to apply to the object


##### Optionalwidth?: number

`Optional`The desired width of the output texture


#### Returns Texture<Resource>

The composite Texture object


### StaticcreateThumbnail

`Static`- createThumbnail(    src: string | DisplayObject,    options: {        center?: boolean;        format?: string;        height?: number;        quality?: number;        tx?: number;        ty?: number;        width?: number;    },): Promise<object>Create thumbnail preview for a provided image path.
Parameterssrc: string | DisplayObjectThe URL or display object of the texture to render to a thumbnail
options: {    center?: boolean;    format?: string;    height?: number;    quality?: number;    tx?: number;    ty?: number;    width?: number;}Additional named options passed to the compositeCanvasTexture function
Optionalcenter?: booleanWhether to center the object within the thumbnail
Optionalformat?: stringThe desired output image format
Optionalheight?: numberThe desired height of the resulting thumbnail
Optionalquality?: numberThe desired output image quality
Optionaltx?: numberA horizontal transformation to apply to the provided source
Optionalty?: numberA vertical transformation to apply to the provided source
Optionalwidth?: numberThe desired width of the resulting thumbnail
Returns Promise<object>The parsed and converted thumbnail data
- src: string | DisplayObjectThe URL or display object of the texture to render to a thumbnail
- options: {    center?: boolean;    format?: string;    height?: number;    quality?: number;    tx?: number;    ty?: number;    width?: number;}Additional named options passed to the compositeCanvasTexture function
Optionalcenter?: booleanWhether to center the object within the thumbnail
Optionalformat?: stringThe desired output image format
Optionalheight?: numberThe desired height of the resulting thumbnail
Optionalquality?: numberThe desired output image quality
Optionaltx?: numberA horizontal transformation to apply to the provided source
Optionalty?: numberA vertical transformation to apply to the provided source
Optionalwidth?: numberThe desired width of the resulting thumbnail
- Optionalcenter?: booleanWhether to center the object within the thumbnail
- Optionalformat?: stringThe desired output image format
- Optionalheight?: numberThe desired height of the resulting thumbnail
- Optionalquality?: numberThe desired output image quality
- Optionaltx?: numberA horizontal transformation to apply to the provided source
- Optionalty?: numberA vertical transformation to apply to the provided source
- Optionalwidth?: numberThe desired width of the resulting thumbnail

Create thumbnail preview for a provided image path.


#### Parameters

- src: string | DisplayObjectThe URL or display object of the texture to render to a thumbnail
- options: {    center?: boolean;    format?: string;    height?: number;    quality?: number;    tx?: number;    ty?: number;    width?: number;}Additional named options passed to the compositeCanvasTexture function
Optionalcenter?: booleanWhether to center the object within the thumbnail
Optionalformat?: stringThe desired output image format
Optionalheight?: numberThe desired height of the resulting thumbnail
Optionalquality?: numberThe desired output image quality
Optionaltx?: numberA horizontal transformation to apply to the provided source
Optionalty?: numberA vertical transformation to apply to the provided source
Optionalwidth?: numberThe desired width of the resulting thumbnail
- Optionalcenter?: booleanWhether to center the object within the thumbnail
- Optionalformat?: stringThe desired output image format
- Optionalheight?: numberThe desired height of the resulting thumbnail
- Optionalquality?: numberThe desired output image quality
- Optionaltx?: numberA horizontal transformation to apply to the provided source
- Optionalty?: numberA vertical transformation to apply to the provided source
- Optionalwidth?: numberThe desired width of the resulting thumbnail

The URL or display object of the texture to render to a thumbnail

Additional named options passed to the compositeCanvasTexture function

- Optionalcenter?: booleanWhether to center the object within the thumbnail
- Optionalformat?: stringThe desired output image format
- Optionalheight?: numberThe desired height of the resulting thumbnail
- Optionalquality?: numberThe desired output image quality
- Optionaltx?: numberA horizontal transformation to apply to the provided source
- Optionalty?: numberA vertical transformation to apply to the provided source
- Optionalwidth?: numberThe desired width of the resulting thumbnail


##### Optionalcenter?: boolean

`Optional`Whether to center the object within the thumbnail


##### Optionalformat?: string

`Optional`The desired output image format


##### Optionalheight?: number

`Optional`The desired height of the resulting thumbnail


##### Optionalquality?: number

`Optional`The desired output image quality


##### Optionaltx?: number

`Optional`A horizontal transformation to apply to the provided source


##### Optionalty?: number

`Optional`A vertical transformation to apply to the provided source


##### Optionalwidth?: number

`Optional`The desired width of the resulting thumbnail


#### Returns Promise<object>

The parsed and converted thumbnail data


### StatichasImageExtension

`Static`- hasImageExtension(src: string): booleanTest whether a source file has a supported image extension type
Parameterssrc: stringA requested image source path
Returns booleanDoes the filename end with a valid image extension?
- src: stringA requested image source path

Test whether a source file has a supported image extension type


#### Parameters

- src: stringA requested image source path

A requested image source path


#### Returns boolean

Does the filename end with a valid image extension?


### StaticpixelsToCanvas

`Static`- pixelsToCanvas(    pixels: Uint8ClampedArray,    width: number,    height: number,    options?: { eh?: number; element?: HTMLCanvasElement; ew?: number },): HTMLCanvasElementCreate a canvas element containing the pixel data.
Parameterspixels: Uint8ClampedArrayBuffer used to create the image data.
width: numberBuffered image width.
height: numberBuffered image height.
options: { eh?: number; element?: HTMLCanvasElement; ew?: number } = {}Optionaleh?: numberSpecified height for the element (default to buffer image height).
Optionalelement?: HTMLCanvasElementThe element to use.
Optionalew?: numberSpecified width for the element (default to buffer image width).
Returns HTMLCanvasElement
- pixels: Uint8ClampedArrayBuffer used to create the image data.
- width: numberBuffered image width.
- height: numberBuffered image height.
- options: { eh?: number; element?: HTMLCanvasElement; ew?: number } = {}Optionaleh?: numberSpecified height for the element (default to buffer image height).
Optionalelement?: HTMLCanvasElementThe element to use.
Optionalew?: numberSpecified width for the element (default to buffer image width).
- Optionaleh?: numberSpecified height for the element (default to buffer image height).
- Optionalelement?: HTMLCanvasElementThe element to use.
- Optionalew?: numberSpecified width for the element (default to buffer image width).

Create a canvas element containing the pixel data.


#### Parameters

- pixels: Uint8ClampedArrayBuffer used to create the image data.
- width: numberBuffered image width.
- height: numberBuffered image height.
- options: { eh?: number; element?: HTMLCanvasElement; ew?: number } = {}Optionaleh?: numberSpecified height for the element (default to buffer image height).
Optionalelement?: HTMLCanvasElementThe element to use.
Optionalew?: numberSpecified width for the element (default to buffer image width).
- Optionaleh?: numberSpecified height for the element (default to buffer image height).
- Optionalelement?: HTMLCanvasElementThe element to use.
- Optionalew?: numberSpecified width for the element (default to buffer image width).

Buffer used to create the image data.

Buffered image width.

Buffered image height.

- Optionaleh?: numberSpecified height for the element (default to buffer image height).
- Optionalelement?: HTMLCanvasElementThe element to use.
- Optionalew?: numberSpecified width for the element (default to buffer image width).


##### Optionaleh?: number

`Optional`Specified height for the element (default to buffer image height).


##### Optionalelement?: HTMLCanvasElement

`Optional`The element to use.


##### Optionalew?: number

`Optional`Specified width for the element (default to buffer image width).


#### Returns HTMLCanvasElement


### StaticpixiToBase64

`Static`- pixiToBase64(    target: DisplayObject,    type: string,    quality: number,): Promise<string>Asynchronously convert a DisplayObject container to base64 using Canvas#toBlob and FileReader
Parameterstarget: DisplayObjectA PIXI display object to convert
type: stringThe requested mime type of the output, default is image/png
quality: numberA number between 0 and 1 for image quality if image/jpeg or image/webp
Returns Promise<string>A processed base64 string
- target: DisplayObjectA PIXI display object to convert
- type: stringThe requested mime type of the output, default is image/png
- quality: numberA number between 0 and 1 for image quality if image/jpeg or image/webp

Asynchronously convert a DisplayObject container to base64 using Canvas#toBlob and FileReader


#### Parameters

- target: DisplayObjectA PIXI display object to convert
- type: stringThe requested mime type of the output, default is image/png
- quality: numberA number between 0 and 1 for image quality if image/jpeg or image/webp

A PIXI display object to convert

The requested mime type of the output, default is image/png

A number between 0 and 1 for image quality if image/jpeg or image/webp


#### Returns Promise<string>

A processed base64 string


### StatictextureToImage

`Static`- textureToImage(    texture: Texture<Resource>,    options?: { format?: string; quality?: number },): Promise<string>Extract a texture to a base64 PNG string
Parameterstexture: Texture<Resource>The texture object to extract
options: { format?: string; quality?: number } = {}Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.
Returns Promise<string>A base64 png string of the texture
- texture: Texture<Resource>The texture object to extract
- options: { format?: string; quality?: number } = {}Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.
- Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
- Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.

Extract a texture to a base64 PNG string


#### Parameters

- texture: Texture<Resource>The texture object to extract
- options: { format?: string; quality?: number } = {}Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.
- Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
- Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.

The texture object to extract

- Optionalformat?: stringImage format, e.g. "image/jpeg" or "image/webp".
- Optionalquality?: numberJPEG or WEBP compression from 0 to 1. Default is 0.92.


##### Optionalformat?: string

`Optional`Image format, e.g. "image/jpeg" or "image/webp".


##### Optionalquality?: number

`Optional`JPEG or WEBP compression from 0 to 1. Default is 0.92.


#### Returns Promise<string>

A base64 png string of the texture


### StaticuploadBase64

`Static`- uploadBase64(    base64: string,    fileName: string,    filePath: string,    options?: { notify?: boolean; storage?: string; type?: string },): Promise<object>Upload a base64 image string to a persisted data storage location
Parametersbase64: stringThe base64 string
fileName: stringThe file name to upload
filePath: stringThe file path where the file should be uploaded
Optionaloptions: { notify?: boolean; storage?: string; type?: string } = {}Additional options which affect uploading
Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
Optionalstorage?: stringThe data storage location to which the file should be uploaded
Optionaltype?: stringThe MIME type of the file being uploaded
Returns Promise<object>A promise which resolves to the FilePicker upload response
- base64: stringThe base64 string
- fileName: stringThe file name to upload
- filePath: stringThe file path where the file should be uploaded
- Optionaloptions: { notify?: boolean; storage?: string; type?: string } = {}Additional options which affect uploading
Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
Optionalstorage?: stringThe data storage location to which the file should be uploaded
Optionaltype?: stringThe MIME type of the file being uploaded
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
- Optionalstorage?: stringThe data storage location to which the file should be uploaded
- Optionaltype?: stringThe MIME type of the file being uploaded

Upload a base64 image string to a persisted data storage location


#### Parameters

- base64: stringThe base64 string
- fileName: stringThe file name to upload
- filePath: stringThe file path where the file should be uploaded
- Optionaloptions: { notify?: boolean; storage?: string; type?: string } = {}Additional options which affect uploading
Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
Optionalstorage?: stringThe data storage location to which the file should be uploaded
Optionaltype?: stringThe MIME type of the file being uploaded
- Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
- Optionalstorage?: stringThe data storage location to which the file should be uploaded
- Optionaltype?: stringThe MIME type of the file being uploaded

The base64 string

The file name to upload

The file path where the file should be uploaded

`Optional`Additional options which affect uploading

- Optionalnotify?: booleanDisplay a UI notification when the upload is processed.
- Optionalstorage?: stringThe data storage location to which the file should be uploaded
- Optionaltype?: stringThe MIME type of the file being uploaded


##### Optionalnotify?: boolean

`Optional`Display a UI notification when the upload is processed.


##### Optionalstorage?: string

`Optional`The data storage location to which the file should be uploaded


##### Optionaltype?: string

`Optional`The MIME type of the file being uploaded


#### Returns Promise<object>

A promise which resolves to the FilePicker upload response


### Settings

- Protected
- Inherited
- Internal


### On This Page

