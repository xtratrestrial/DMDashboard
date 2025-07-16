# Tabs | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.ux.Tabs.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- ux
- Tabs


# Class Tabs

A controller class for managing tabbed navigation within an Application instance.


#### See

foundry.applications.api.ApplicationV2


#### Example: Configure tab-control for a set of HTML elements

```javascript
<!-- Example HTML --><nav class="tabs" data-group="primary-tabs">  <a class="item" data-tab="tab1" data-group="primary-tabs">Tab 1</li>  <a class="item" data-tab="tab2" data-group="primary-tabs">Tab 2</li></nav><section class="content">  <div class="tab" data-tab="tab1" data-group="primary-tabs">Content 1</div>  <div class="tab" data-tab="tab2" data-group="primary-tabs">Content 2</div></section>
Copy
```

`<!-- Example HTML --><nav class="tabs" data-group="primary-tabs">  <a class="item" data-tab="tab1" data-group="primary-tabs">Tab 1</li>  <a class="item" data-tab="tab2" data-group="primary-tabs">Tab 2</li></nav><section class="content">  <div class="tab" data-tab="tab1" data-group="primary-tabs">Content 1</div>  <div class="tab" data-tab="tab2" data-group="primary-tabs">Content 2</div></section>`Activate tab control in JavaScript

```javascript
const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});tabs.bind(html);
Copy
```

`const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});tabs.bind(html);`
##### Index


### Constructors


### Properties


### Methods


## Constructors


### constructor

- new Tabs(config?: TabsConfiguration): TabsParametersconfig: TabsConfiguration = {}The Tabs Configuration to use for this tabbed container
Returns Tabs
- config: TabsConfiguration = {}The Tabs Configuration to use for this tabbed container


#### Parameters

- config: TabsConfiguration = {}The Tabs Configuration to use for this tabbed container

The Tabs Configuration to use for this tabbed container


#### Returns Tabs


## Properties


### Internal_content

`Internal`A reference to the HTML container element of the tab content


### Internal_contentSelector

`Internal`The CSS selector used to target the tab content element


### Internal_nav

`Internal`A reference to the HTML navigation element the tab controller is bound to


### Internal_navSelector

`Internal`The CSS selector used to target the tab navigation element


### active

The value of the active tab


### callback

A callback function to trigger when the tab is changed


### group

The name of the tabs group


## Methods


### activate

- activate(tabName: string, triggerCallback?: boolean): voidActivate a new tab by name
ParameterstabName: stringtriggerCallback: boolean = {}Returns void
- tabName: string
- triggerCallback: boolean = {}

Activate a new tab by name


#### Parameters

- tabName: string
- triggerCallback: boolean = {}


#### Returns void


### bind

- bind(html: HTMLElement): voidBind the Tabs controller to an HTML application
Parametershtml: HTMLElementReturns void
- html: HTMLElement

Bind the Tabs controller to an HTML application


#### Parameters

- html: HTMLElement


#### Returns void


### Protected_onClickNav

`Protected`- _onClickNav(event: PointerEvent): voidProtectedHandle click events on the tab navigation entries
Parametersevent: PointerEventA left click event
Returns void
- event: PointerEventA left click event

`Protected`Handle click events on the tab navigation entries


#### Parameters

- event: PointerEventA left click event

A left click event


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

