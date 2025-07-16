# InterfaceCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.InterfaceCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- InterfaceCanvasGroup


# Class InterfaceCanvasGroup

A container group which displays interface elements rendered above other canvas groups.


#### Hierarchy

- anyInterfaceCanvasGroup
- InterfaceCanvasGroup

- InterfaceCanvasGroup


##### Index


### Properties


### Methods


## Properties


### StaticgroupName

`Static`Overrides CanvasGroupMixin(PIXI.Container).groupName


## Methods


### _draw

- _draw(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc


### addDrawing

- addDrawing(drawing: canvas.placeables.Drawing): GraphicsAdd a PrimaryGraphics to the group.
Parametersdrawing: canvas.placeables.DrawingThe Drawing being added
Returns GraphicsThe created Graphics instance
- drawing: canvas.placeables.DrawingThe Drawing being added

Add a PrimaryGraphics to the group.


#### Parameters

- drawing: canvas.placeables.DrawingThe Drawing being added

The Drawing being added


#### Returns Graphics

The created Graphics instance


### createScrollingText

- createScrollingText(    origin: Point,    content: string,    options?: {        anchor?: TextAnchorPoint;        direction?: TextAnchorPoint;        distance?: number;        duration?: number;        jitter?: number;        textStyle?: object;    },): Promise<void>Display scrolling status text originating from an origin point on the Canvas.
Parametersorigin: PointAn origin point where the text should first emerge
content: stringThe text content to display
Optionaloptions: {    anchor?: TextAnchorPoint;    direction?: TextAnchorPoint;    distance?: number;    duration?: number;    jitter?: number;    textStyle?: object;} = {}Options which customize the text animation
Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
Optionalduration?: numberThe duration of the scrolling effect in milliseconds
Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text
Returns Promise<void>A promise that resolves after the scrolling text animation ended.
- origin: PointAn origin point where the text should first emerge
- content: stringThe text content to display
- Optionaloptions: {    anchor?: TextAnchorPoint;    direction?: TextAnchorPoint;    distance?: number;    duration?: number;    jitter?: number;    textStyle?: object;} = {}Options which customize the text animation
Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
Optionalduration?: numberThe duration of the scrolling effect in milliseconds
Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text
- Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
- Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
- Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
- Optionalduration?: numberThe duration of the scrolling effect in milliseconds
- Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
- OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text

Display scrolling status text originating from an origin point on the Canvas.


#### Parameters

- origin: PointAn origin point where the text should first emerge
- content: stringThe text content to display
- Optionaloptions: {    anchor?: TextAnchorPoint;    direction?: TextAnchorPoint;    distance?: number;    duration?: number;    jitter?: number;    textStyle?: object;} = {}Options which customize the text animation
Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
Optionalduration?: numberThe duration of the scrolling effect in milliseconds
Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text
- Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
- Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
- Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
- Optionalduration?: numberThe duration of the scrolling effect in milliseconds
- Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
- OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text

An origin point where the text should first emerge

The text content to display

`Optional`Options which customize the text animation

- Optionalanchor?: TextAnchorPointThe original anchor point where the text appears
- Optionaldirection?: TextAnchorPointThe direction in which the text scrolls
- Optionaldistance?: numberThe distance in pixels that the scrolling text should travel
- Optionalduration?: numberThe duration of the scrolling effect in milliseconds
- Optionaljitter?: numberAn amount of randomization between [0, 1] applied to the initial position
- OptionaltextStyle?: objectAdditional parameters of PIXI.TextStyle which are applied to the text


##### Optionalanchor?: TextAnchorPoint

`Optional`The original anchor point where the text appears


##### Optionaldirection?: TextAnchorPoint

`Optional`The direction in which the text scrolls


##### Optionaldistance?: number

`Optional`The distance in pixels that the scrolling text should travel


##### Optionalduration?: number

`Optional`The duration of the scrolling effect in milliseconds


##### Optionaljitter?: number

`Optional`An amount of randomization between [0, 1] applied to the initial position


##### OptionaltextStyle?: object

`Optional`Additional parameters of PIXI.TextStyle which are applied to the text


#### Returns Promise<void>

A promise that resolves after the scrolling text animation ended.


### removeDrawing

- removeDrawing(drawing: canvas.placeables.Drawing): voidRemove a PrimaryGraphics from the group.
Parametersdrawing: canvas.placeables.DrawingThe Drawing being removed
Returns void
- drawing: canvas.placeables.DrawingThe Drawing being removed

Remove a PrimaryGraphics from the group.


#### Parameters

- drawing: canvas.placeables.DrawingThe Drawing being removed

The Drawing being removed


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

