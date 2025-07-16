# DragDrop | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.ux.DragDrop.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- ux
- DragDrop


# Class DragDrop

A controller class for managing drag and drop workflows within an Application instance.
The controller manages the following actions: dragstart, dragover, drop.


#### Example: Activate drag-and-drop handling for a certain set of elements

```javascript
const dragDrop = new DragDrop({  dragSelector: ".item",  dropSelector: ".items",  permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },  callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }});dragDrop.bind(html);
Copy
```

`const dragDrop = new DragDrop({  dragSelector: ".item",  dropSelector: ".items",  permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },  callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }});dragDrop.bind(html);`
##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new DragDrop(config?: DragDropConfiguration): DragDropParametersOptionalconfig: DragDropConfiguration = {}Returns DragDrop
- Optionalconfig: DragDropConfiguration = {}


#### Parameters

- Optionalconfig: DragDropConfiguration = {}

`Optional`
#### Returns DragDrop


## Properties


### callbacks

A set of callback functions for each action of the drag & drop workflow.


### dragSelector

The HTML selector which identifies draggable elements.


### dropSelector

The HTML selector which identifies drop targets.


### permissions

A set of functions to control authorization to begin drag workflows, and drop content.


## Accessors


### Staticimplementation

`Static`- get implementation(): typeof DragDropRetrieve the configured DragDrop implementation.
Returns typeof DragDrop

Retrieve the configured DragDrop implementation.


#### Returns typeof DragDrop


## Methods


### bind

- bind(html: HTMLElement): DragDropBind the DragDrop controller to an HTML application
Parametershtml: HTMLElementThe HTML element to which the handler is bound
Returns DragDrop
- html: HTMLElementThe HTML element to which the handler is bound

Bind the DragDrop controller to an HTML application


#### Parameters

- html: HTMLElementThe HTML element to which the handler is bound

The HTML element to which the handler is bound


#### Returns DragDrop


### callback

- callback(event: DragEvent, action: string): anyExecute a callback function associated with a certain action in the workflow
Parametersevent: DragEventThe drag event being handled
action: stringThe action being attempted
Returns any
- event: DragEventThe drag event being handled
- action: stringThe action being attempted

Execute a callback function associated with a certain action in the workflow


#### Parameters

- event: DragEventThe drag event being handled
- action: stringThe action being attempted

The drag event being handled

The action being attempted


#### Returns any


### can

- can(action: string, selector: string): booleanTest whether the current user has permission to perform a step of the workflow
Parametersaction: stringThe action being attempted
selector: stringThe selector being targeted
Returns booleanCan the action be performed?
- action: stringThe action being attempted
- selector: stringThe selector being targeted

Test whether the current user has permission to perform a step of the workflow


#### Parameters

- action: stringThe action being attempted
- selector: stringThe selector being targeted

The action being attempted

The selector being targeted


#### Returns boolean

Can the action be performed?


### Protected_handleDragEnd

`Protected`- _handleDragEnd(event: DragEvent): voidProtectedHandle a drag workflow ending for any reason.
Parametersevent: DragEventThe drag event.
Returns void
- event: DragEventThe drag event.

`Protected`Handle a drag workflow ending for any reason.


#### Parameters

- event: DragEventThe drag event.

The drag event.


#### Returns void


### Protected_handleDragEnter

`Protected`- _handleDragEnter(event: DragEvent): voidProtectedHandle entering a drop target while dragging.
Parametersevent: DragEventThe drag event.
Returns void
- event: DragEventThe drag event.

`Protected`Handle entering a drop target while dragging.


#### Parameters

- event: DragEventThe drag event.

The drag event.


#### Returns void


### Protected_handleDragLeave

`Protected`- _handleDragLeave(event: DragEvent): voidProtectedHandle leaving a drop target while dragging.
Parametersevent: DragEventThe drag event.
Returns void
- event: DragEventThe drag event.

`Protected`Handle leaving a drop target while dragging.


#### Parameters

- event: DragEventThe drag event.

The drag event.


#### Returns void


### Protected_handleDragOver

`Protected`- _handleDragOver(event: DragEvent): booleanProtectedHandle a dragged element over a droppable target
Parametersevent: DragEventThe drag event being handled
Returns boolean
- event: DragEventThe drag event being handled

`Protected`Handle a dragged element over a droppable target


#### Parameters

- event: DragEventThe drag event being handled

The drag event being handled


#### Returns boolean


### Protected_handleDragStart

`Protected`- _handleDragStart(event: DragEvent): voidProtectedHandle the start of a drag workflow
Parametersevent: DragEventThe drag event being handled
Returns void
- event: DragEventThe drag event being handled

`Protected`Handle the start of a drag workflow


#### Parameters

- event: DragEventThe drag event being handled

The drag event being handled


#### Returns void


### Protected_handleDrop

`Protected`- _handleDrop(event: DragEvent): anyProtectedHandle a dragged element dropped on a droppable target
Parametersevent: DragEventThe drag event being handled
Returns any
- event: DragEventThe drag event being handled

`Protected`Handle a dragged element dropped on a droppable target


#### Parameters

- event: DragEventThe drag event being handled

The drag event being handled


#### Returns any


### StaticcreateDragImage

`Static`- createDragImage(    img: HTMLImageElement,    width: number,    height: number,): HTMLDivElementA helper to create an image preview element for use during HTML element dragging.
Parametersimg: HTMLImageElementwidth: numberheight: numberReturns HTMLDivElement
- img: HTMLImageElement
- width: number
- height: number

A helper to create an image preview element for use during HTML element dragging.


#### Parameters

- img: HTMLImageElement
- width: number
- height: number


#### Returns HTMLDivElement


### Settings

- Protected
- Inherited
- Internal


### On This Page

