# ContextMenu | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.ux.ContextMenu.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- ux
- ContextMenu


# Class ContextMenu

Display a right-click activated Context Menu which provides a dropdown menu of options.
A ContextMenu is constructed by designating a parent HTML container and a target selector.
An Array of menuItems defines the entries of the menu which is displayed.


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new ContextMenu(    container: any,    selector: string,    menuItems: ContextMenuEntry[],    options?: ContextMenuOptions,): ContextMenuParameterscontainer: anyThe HTML element that contains the context menu targets.
selector: stringA CSS selector which activates the context menu.
menuItems: ContextMenuEntry[]An Array of entries to display in the menu
Optionaloptions: ContextMenuOptions = {}Additional options to configure the context menu.
Returns ContextMenu
- container: anyThe HTML element that contains the context menu targets.
- selector: stringA CSS selector which activates the context menu.
- menuItems: ContextMenuEntry[]An Array of entries to display in the menu
- Optionaloptions: ContextMenuOptions = {}Additional options to configure the context menu.


#### Parameters

- container: anyThe HTML element that contains the context menu targets.
- selector: stringA CSS selector which activates the context menu.
- menuItems: ContextMenuEntry[]An Array of entries to display in the menu
- Optionaloptions: ContextMenuOptions = {}Additional options to configure the context menu.

The HTML element that contains the context menu targets.

A CSS selector which activates the context menu.

An Array of entries to display in the menu

`Optional`Additional options to configure the context menu.


#### Returns ContextMenu


## Properties


### menuItems

The array of menu items to render.


### onClose

A function to call when the context menu is closed.


### onOpen

A function to call when the context menu is opened.


## Accessors


### element

- get element(): HTMLElementThe menu element.
Returns HTMLElement

The menu element.


#### Returns HTMLElement


### eventName

- get eventName(): stringThe event name to listen for.
Returns string

The event name to listen for.


#### Returns string


### expandUp

- get expandUp(): booleanCheck which direction the menu is expanded in.
Returns boolean

Check which direction the menu is expanded in.


#### Returns boolean


### fixed

- get fixed(): booleanWhether to position the context menu as a fixed element, or inject it into the target.
Returns boolean

Whether to position the context menu as a fixed element, or inject it into the target.


#### Returns boolean


### selector

- get selector(): stringA CSS selector to identify context menu targets.
Returns string

A CSS selector to identify context menu targets.


#### Returns string


### target

- get target(): HTMLElementThe parent HTML element to which the context menu is attached
Returns HTMLElement

The parent HTML element to which the context menu is attached


#### Returns HTMLElement


### Staticimplementation

`Static`- get implementation(): typeof ContextMenuRetrieve the configured DragDrop implementation.
Returns typeof ContextMenu

Retrieve the configured DragDrop implementation.


#### Returns typeof ContextMenu


## Methods


### activateListeners

- activateListeners(menu: HTMLElement): voidLocal listeners which apply to each ContextMenu instance which is created.
Parametersmenu: HTMLElementThe context menu element.
Returns void
- menu: HTMLElementThe context menu element.

Local listeners which apply to each ContextMenu instance which is created.


#### Parameters

- menu: HTMLElementThe context menu element.

The context menu element.


#### Returns void


### close

- close(options?: { animate?: boolean; target?: HTMLElement }): Promise<void>Closes the menu and removes it from the DOM.
ParametersOptionaloptions: { animate?: boolean; target?: HTMLElement } = {}Options to configure the closing behavior.
Optionalanimate?: booleanAnimate the context menu closing.
Optionaltarget?: HTMLElementThe target element to close on.
Returns Promise<void>
- Optionaloptions: { animate?: boolean; target?: HTMLElement } = {}Options to configure the closing behavior.
Optionalanimate?: booleanAnimate the context menu closing.
Optionaltarget?: HTMLElementThe target element to close on.
- Optionalanimate?: booleanAnimate the context menu closing.
- Optionaltarget?: HTMLElementThe target element to close on.

Closes the menu and removes it from the DOM.


#### Parameters

- Optionaloptions: { animate?: boolean; target?: HTMLElement } = {}Options to configure the closing behavior.
Optionalanimate?: booleanAnimate the context menu closing.
Optionaltarget?: HTMLElementThe target element to close on.
- Optionalanimate?: booleanAnimate the context menu closing.
- Optionaltarget?: HTMLElementThe target element to close on.

`Optional`Options to configure the closing behavior.

- Optionalanimate?: booleanAnimate the context menu closing.
- Optionaltarget?: HTMLElementThe target element to close on.


##### Optionalanimate?: boolean

`Optional`Animate the context menu closing.


##### Optionaltarget?: HTMLElement

`Optional`The target element to close on.


#### Returns Promise<void>


### render

- render(target: HTMLElement, options?: ContextMenuRenderOptions): Promise<void>Render the Context Menu by iterating over the menuItems it contains.
Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition.
Attach a click handler to each item which is rendered.
Parameterstarget: HTMLElementThe target element to which the context menu is attached.
Optionaloptions: ContextMenuRenderOptions = {}Returns Promise<void>A Promise that resolves when the open animation has completed.
- target: HTMLElementThe target element to which the context menu is attached.
- Optionaloptions: ContextMenuRenderOptions = {}

Render the Context Menu by iterating over the menuItems it contains.
Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition.
Attach a click handler to each item which is rendered.


#### Parameters

- target: HTMLElementThe target element to which the context menu is attached.
- Optionaloptions: ContextMenuRenderOptions = {}

The target element to which the context menu is attached.

`Optional`
#### Returns Promise<void>

A Promise that resolves when the open animation has completed.


### Protected_animate

`Protected`- _animate(open?: boolean): Promise<void>ProtectedAnimate the context menu's height when opening or closing.
Parametersopen: boolean = falseWhether the menu is opening or closing.
Returns Promise<void>A Promise that resolves when the animation completes.
- open: boolean = falseWhether the menu is opening or closing.

`Protected`Animate the context menu's height when opening or closing.


#### Parameters

- open: boolean = falseWhether the menu is opening or closing.

Whether the menu is opening or closing.


#### Returns Promise<void>

A Promise that resolves when the animation completes.


### Protected_close

`Protected`- _close(options?: { target?: HTMLElement }): voidProtectedClose the menu and remove it from the DOM.
ParametersOptionaloptions: { target?: HTMLElement } = {}Optionaltarget?: HTMLElementThe target element to close on.
Returns void
- Optionaloptions: { target?: HTMLElement } = {}Optionaltarget?: HTMLElementThe target element to close on.
- Optionaltarget?: HTMLElementThe target element to close on.

`Protected`Close the menu and remove it from the DOM.


#### Parameters

- Optionaloptions: { target?: HTMLElement } = {}Optionaltarget?: HTMLElementThe target element to close on.
- Optionaltarget?: HTMLElementThe target element to close on.

`Optional`- Optionaltarget?: HTMLElementThe target element to close on.


##### Optionaltarget?: HTMLElement

`Optional`The target element to close on.


#### Returns void


### Protected_injectMenu

`Protected`- _injectMenu(menu: HTMLElement, target: HTMLElement): voidProtectedInject the menu inside the target.
Parametersmenu: HTMLElementThe menu element.
target: HTMLElementThe context target.
Returns void
- menu: HTMLElementThe menu element.
- target: HTMLElementThe context target.

`Protected`Inject the menu inside the target.


#### Parameters

- menu: HTMLElementThe menu element.
- target: HTMLElementThe context target.

The menu element.

The context target.


#### Returns void


### Protected_onActivate

`Protected`- _onActivate(event: Event): undefined | Promise<void>ProtectedHandle context menu activation.
Parametersevent: EventThe triggering event.
Returns undefined | Promise<void>
- event: EventThe triggering event.

`Protected`Handle context menu activation.


#### Parameters

- event: EventThe triggering event.

The triggering event.


#### Returns undefined | Promise<void>


### Protected_onRender

`Protected`- _onRender(options?: ContextMenuRenderOptions): Promise<void>ProtectedCalled after the context menu has finished rendering and animating open.
ParametersOptionaloptions: ContextMenuRenderOptions = {}Returns Promise<void>
- Optionaloptions: ContextMenuRenderOptions = {}

`Protected`Called after the context menu has finished rendering and animating open.


#### Parameters

- Optionaloptions: ContextMenuRenderOptions = {}

`Optional`
#### Returns Promise<void>


### Protected_preRender

`Protected`- _preRender(    target: HTMLElement,    options?: ContextMenuRenderOptions,): Promise<void>ProtectedCalled before the context menu begins rendering.
Parameterstarget: HTMLElementThe context target.
Optionaloptions: ContextMenuRenderOptions = {}Returns Promise<void>
- target: HTMLElementThe context target.
- Optionaloptions: ContextMenuRenderOptions = {}

`Protected`Called before the context menu begins rendering.


#### Parameters

- target: HTMLElementThe context target.
- Optionaloptions: ContextMenuRenderOptions = {}

The context target.

`Optional`
#### Returns Promise<void>


### Protected_setFixedPosition

`Protected`- _setFixedPosition(    menu: HTMLElement,    target: HTMLElement,    options?: { event?: Event },): voidProtectedSet the context menu at a fixed position in the viewport.
Parametersmenu: HTMLElementThe menu element.
target: HTMLElementThe context target.
Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
Returns void
- menu: HTMLElementThe menu element.
- target: HTMLElementThe context target.
- Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
- Optionalevent?: EventThe event that triggered the context menu opening.

`Protected`Set the context menu at a fixed position in the viewport.


#### Parameters

- menu: HTMLElementThe menu element.
- target: HTMLElementThe context target.
- Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
- Optionalevent?: EventThe event that triggered the context menu opening.

The menu element.

The context target.

`Optional`- Optionalevent?: EventThe event that triggered the context menu opening.


##### Optionalevent?: Event

`Optional`The event that triggered the context menu opening.


#### Returns void


### Protected_setPosition

`Protected`- _setPosition(    menu: HTMLElement,    target: HTMLElement,    options?: { event?: Event },): voidProtectedSet the position of the context menu, taking into consideration whether the menu should expand upward or downward
Parametersmenu: HTMLElementThe context menu element.
target: HTMLElementThe element that the context menu was spawned on.
Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
Returns void
- menu: HTMLElementThe context menu element.
- target: HTMLElementThe element that the context menu was spawned on.
- Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
- Optionalevent?: EventThe event that triggered the context menu opening.

`Protected`Set the position of the context menu, taking into consideration whether the menu should expand upward or downward


#### Parameters

- menu: HTMLElementThe context menu element.
- target: HTMLElementThe element that the context menu was spawned on.
- Optionaloptions: { event?: Event } = {}Optionalevent?: EventThe event that triggered the context menu opening.
- Optionalevent?: EventThe event that triggered the context menu opening.

The context menu element.

The element that the context menu was spawned on.

`Optional`- Optionalevent?: EventThe event that triggered the context menu opening.


##### Optionalevent?: Event

`Optional`The event that triggered the context menu opening.


#### Returns void


### Staticcreate

`Static`- create(    app: Application,    html: any,    selector: string,    menuItems: ContextMenuEntry[],    options?: { hookName?: string },): ContextMenuCreate a ContextMenu for this Application and dispatch hooks.
Parametersapp: ApplicationThe Application this ContextMenu belongs to.
html: anyThe Application's rendered HTML.
selector: stringThe target CSS selector which activates the menu.
menuItems: ContextMenuEntry[]The array of menu items being rendered.
Optionaloptions: { hookName?: string } = {}Additional options to configure context menu initialization.
OptionalhookName?: stringThe name of the hook to call.
Returns ContextMenuDeprecatedsince v13
- app: ApplicationThe Application this ContextMenu belongs to.
- html: anyThe Application's rendered HTML.
- selector: stringThe target CSS selector which activates the menu.
- menuItems: ContextMenuEntry[]The array of menu items being rendered.
- Optionaloptions: { hookName?: string } = {}Additional options to configure context menu initialization.
OptionalhookName?: stringThe name of the hook to call.
- OptionalhookName?: stringThe name of the hook to call.

Create a ContextMenu for this Application and dispatch hooks.


#### Parameters

- app: ApplicationThe Application this ContextMenu belongs to.
- html: anyThe Application's rendered HTML.
- selector: stringThe target CSS selector which activates the menu.
- menuItems: ContextMenuEntry[]The array of menu items being rendered.
- Optionaloptions: { hookName?: string } = {}Additional options to configure context menu initialization.
OptionalhookName?: stringThe name of the hook to call.
- OptionalhookName?: stringThe name of the hook to call.

The Application this ContextMenu belongs to.

The Application's rendered HTML.

The target CSS selector which activates the menu.

The array of menu items being rendered.

`Optional`Additional options to configure context menu initialization.

- OptionalhookName?: stringThe name of the hook to call.


##### OptionalhookName?: string

`Optional`The name of the hook to call.


#### Returns ContextMenu


#### Deprecated

since v13


### StaticeventListeners

`Static`- eventListeners(): voidGlobal listeners which apply once only to the document.
Returns void

Global listeners which apply once only to the document.


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

