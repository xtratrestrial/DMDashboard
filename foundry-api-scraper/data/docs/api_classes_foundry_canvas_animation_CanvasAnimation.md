# CanvasAnimation | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.animation.CanvasAnimation.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- animation
- CanvasAnimation


# Class CanvasAnimation

A helper class providing utility methods for PIXI Canvas animation


##### Index


### Properties


### Accessors


### Methods


## Properties


### Staticanimations

`Static`Track an object of active animations by name, context, and function
This allows a currently playing animation to be referenced and terminated


## Accessors


### StaticSTATES

`Static`- get STATES(): Readonly<    { COMPLETED: 2; FAILED: -2; RUNNING: 1; TERMINATED: -1; WAITING: 0 },>The possible states of an animation.
Returns Readonly<{ COMPLETED: 2; FAILED: -2; RUNNING: 1; TERMINATED: -1; WAITING: 0 }>

The possible states of an animation.


#### Returns Readonly<{ COMPLETED: 2; FAILED: -2; RUNNING: 1; TERMINATED: -1; WAITING: 0 }>


### Staticticker

`Static`- get ticker(): TickerThe ticker used for animations.
Returns Ticker

The ticker used for animations.


#### Returns Ticker


## Methods


### Staticanimate

`Static`- animate(    attributes: CanvasAnimationAttribute[],    options?: CanvasAnimationOptions,): Promise<boolean>Apply an animation from the current value of some attribute to a new value
Resolve a Promise once the animation has concluded and the attributes have reached their new target
Parametersattributes: CanvasAnimationAttribute[]An array of attributes to animate
options: CanvasAnimationOptions = {}Additional options which customize the animation
Returns Promise<boolean>A Promise which resolves to true once the animation has concluded
or false if the animation was prematurely terminated
Example: Animate Token Positionlet animation = [  {    parent: token,    attribute: "x",    to: 1000  },  {    parent: token,    attribute: "y",    to: 2000  }];foundry.canvas.animation.CanvasAnimation.animate(attributes, {duration:500});
Copy
- attributes: CanvasAnimationAttribute[]An array of attributes to animate
- options: CanvasAnimationOptions = {}Additional options which customize the animation

Apply an animation from the current value of some attribute to a new value
Resolve a Promise once the animation has concluded and the attributes have reached their new target


#### Parameters

- attributes: CanvasAnimationAttribute[]An array of attributes to animate
- options: CanvasAnimationOptions = {}Additional options which customize the animation

An array of attributes to animate

Additional options which customize the animation


#### Returns Promise<boolean>

A Promise which resolves to true once the animation has concluded
or false if the animation was prematurely terminated


#### Example: Animate Token Position

```javascript
let animation = [  {    parent: token,    attribute: "x",    to: 1000  },  {    parent: token,    attribute: "y",    to: 2000  }];foundry.canvas.animation.CanvasAnimation.animate(attributes, {duration:500});
Copy
```

`let animation = [  {    parent: token,    attribute: "x",    to: 1000  },  {    parent: token,    attribute: "y",    to: 2000  }];foundry.canvas.animation.CanvasAnimation.animate(attributes, {duration:500});`
### StaticeaseInCircle

`Static`- easeInCircle(pt: number): numberShallow ease in.
Parameterspt: numberThe proportional animation timing on [0,1]
Returns numberThe eased animation progress on [0,1]
- pt: numberThe proportional animation timing on [0,1]

Shallow ease in.


#### Parameters

- pt: numberThe proportional animation timing on [0,1]

The proportional animation timing on [0,1]


#### Returns number

The eased animation progress on [0,1]


### StaticeaseInOutCosine

`Static`- easeInOutCosine(pt: number): numberCosine based easing with smooth in-out.
Parameterspt: numberThe proportional animation timing on [0,1]
Returns numberThe eased animation progress on [0,1]
- pt: numberThe proportional animation timing on [0,1]

Cosine based easing with smooth in-out.


#### Parameters

- pt: numberThe proportional animation timing on [0,1]

The proportional animation timing on [0,1]


#### Returns number

The eased animation progress on [0,1]


### StaticeaseOutCircle

`Static`- easeOutCircle(pt: number): numberShallow ease out.
Parameterspt: numberThe proportional animation timing on [0,1]
Returns numberThe eased animation progress on [0,1]
- pt: numberThe proportional animation timing on [0,1]

Shallow ease out.


#### Parameters

- pt: numberThe proportional animation timing on [0,1]

The proportional animation timing on [0,1]


#### Returns number

The eased animation progress on [0,1]


### StaticgetAnimation

`Static`- getAnimation(name: string | symbol): CanvasAnimationDataRetrieve an animation currently in progress by its name
Parametersname: string | symbolThe animation name to retrieve
Returns CanvasAnimationDataThe animation data, or undefined
- name: string | symbolThe animation name to retrieve

Retrieve an animation currently in progress by its name


#### Parameters

- name: string | symbolThe animation name to retrieve

The animation name to retrieve


#### Returns CanvasAnimationData

The animation data, or undefined


### StaticterminateAll

`Static`- terminateAll(): Promise<void>Terminate all active animations in progress, forcibly resolving each one with false.
This method returns a Promise that resolves once all animations have been terminated and removed.
Returns Promise<void>A promise that resolves when all animations have been forcibly terminated.

Terminate all active animations in progress, forcibly resolving each one with false.
This method returns a Promise that resolves once all animations have been terminated and removed.

`false`
#### Returns Promise<void>

A promise that resolves when all animations have been forcibly terminated.


### StaticterminateAnimation

`Static`- terminateAnimation(name: string | symbol): voidIf an animation using a certain name already exists, terminate it
Parametersname: string | symbolThe animation name to terminate
Returns void
- name: string | symbolThe animation name to terminate

If an animation using a certain name already exists, terminate it


#### Parameters

- name: string | symbolThe animation name to terminate

The animation name to terminate


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

