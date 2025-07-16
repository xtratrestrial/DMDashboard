# HiddenCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.canvas.groups.HiddenCanvasGroup.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- canvas
- groups
- HiddenCanvasGroup


# Class HiddenCanvasGroup

A specialized canvas group for rendering hidden containers before all others (like masks).


#### Hierarchy

- Container<DisplayObject, this>HiddenCanvasGroup
- HiddenCanvasGroup

- HiddenCanvasGroup


##### Index


### Properties


### Methods


## Properties


### masks

The container which hold masks.


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


### _tearDown

- _tearDown(options: any): Promise<void>Parametersoptions: anyReturns Promise<void>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<void>


#### Inherit Doc


### addMask

- addMask(name: string, displayObject: DisplayObject, position?: number): voidAdd a mask to this group.
Parametersname: stringName of the mask.
displayObject: DisplayObjectDisplay object to add.
Optionalposition: numberPosition of the mask.
Returns void
- name: stringName of the mask.
- displayObject: DisplayObjectDisplay object to add.
- Optionalposition: numberPosition of the mask.

Add a mask to this group.


#### Parameters

- name: stringName of the mask.
- displayObject: DisplayObjectDisplay object to add.
- Optionalposition: numberPosition of the mask.

Name of the mask.

Display object to add.

`Optional`Position of the mask.


#### Returns void


### invalidateMasks

- invalidateMasks(): voidInvalidate the masks: flag them for rerendering.
Returns void

Invalidate the masks: flag them for rerendering.


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

