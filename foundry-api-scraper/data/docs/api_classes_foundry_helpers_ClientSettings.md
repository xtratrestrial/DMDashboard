# ClientSettings | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.ClientSettings.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- ClientSettings


# Class ClientSettings

A class responsible for managing defined game settings or settings menus.
Each setting is a string key/value pair belonging to a certain namespace and a certain store scope.

When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
Game object as game.settings.


#### See

- foundry.Game#settings
- foundry.applications.sidebar.tabs.Settings
- foundry.applications.settings.SettingsConfig


##### Index


### Properties


### Accessors


### Methods


## Properties


### menus

Registered settings menus which trigger secondary applications


### settings

A object of registered game settings for this scope


### storage

The storage interfaces used for persisting settings
Each storage interface shares the same API as window.localStorage


## Accessors


### sheet

- get sheet(): SettingsConfigReturn a singleton instance of the Game Settings Configuration app
Returns SettingsConfig

Return a singleton instance of the Game Settings Configuration app


#### Returns SettingsConfig


## Methods


### get

- get(namespace: string, key: string, options?: { document?: boolean }): anyGet the value of a game setting for a certain namespace and setting key
Parametersnamespace: stringThe namespace under which the setting is registered
key: stringThe setting key to retrieve
options: { document?: boolean } = {}Additional options for setting retrieval
Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value
Returns anyThe current value or the Setting document instance
Example: Retrieve the current setting valuegame.settings.get("myModule", "myClientSetting");
Copy
- namespace: stringThe namespace under which the setting is registered
- key: stringThe setting key to retrieve
- options: { document?: boolean } = {}Additional options for setting retrieval
Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value
- Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value

Get the value of a game setting for a certain namespace and setting key


#### Parameters

- namespace: stringThe namespace under which the setting is registered
- key: stringThe setting key to retrieve
- options: { document?: boolean } = {}Additional options for setting retrieval
Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value
- Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value

The namespace under which the setting is registered

The setting key to retrieve

Additional options for setting retrieval

- Optionaldocument?: booleanRetrieve the full Setting document instance instead of just its value


##### Optionaldocument?: boolean

`Optional`Retrieve the full Setting document instance instead of just its value


#### Returns any

The current value or the Setting document instance


#### Example: Retrieve the current setting value

```javascript
game.settings.get("myModule", "myClientSetting");
Copy
```

`game.settings.get("myModule", "myClientSetting");`
### register

- register(namespace: string, key: string, data: SettingConfig): voidRegister a new namespaced game setting. The setting's scope determines where the setting is saved.
World - World settings are applied to everyone in the World. Use this for settings like system rule variants that
everyone must abide by.
User - User settings are applied to an individual user. Use this for settings that are a player's personal
preference, like 3D dice skins.
Client - Client settings are applied to the browser or client used to access the World. Use this for settings that
are affected by the client itself, such as screen dimensions, resolution, or performance.
Parametersnamespace: stringThe namespace under which the setting is registered
key: stringThe key name for the setting under the namespace
data: SettingConfigConfiguration for setting data
Returns voidExample: Register a client settinggame.settings.register("myModule", "myClientSetting", {  name: "Register a Module Setting with Choices",  hint: "A description of the registered setting and its behavior.",  scope: "client",     // This specifies a client-stored setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the user to reload the application for the setting to take effect.  type: String,  choices: {           // If choices are defined, the resulting setting will be a select menu    "a": "Option A",    "b": "Option B"  },  default: "a",        // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});
Copy

Example: Register a world settinggame.settings.register("myModule", "myWorldSetting", {  name: "Register a Module Setting with a Range slider",  hint: "A description of the registered setting and its behavior.",  scope: "world",      // This specifies a world-level setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to                       // take effect.  type: new foundry.fields.NumberField({nullable: false, min: 0, max: 100, step: 10}),  default: 50,         // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});
Copy

Example: Register a user settinggame.settings.register("myModule", "myUserSetting", {  name: "Register a Module Setting with a checkbox",  hint: "A description of the registered setting and its behavior.",  scope: "user",       // This specifies a user-level setting  config: true,        // This specifies that the setting appears in the configuration view  type: new foundry.fields.BooleanField(),  default: false});
Copy
- namespace: stringThe namespace under which the setting is registered
- key: stringThe key name for the setting under the namespace
- data: SettingConfigConfiguration for setting data

Register a new namespaced game setting. The setting's scope determines where the setting is saved.
World - World settings are applied to everyone in the World. Use this for settings like system rule variants that
everyone must abide by.
User - User settings are applied to an individual user. Use this for settings that are a player's personal
preference, like 3D dice skins.
Client - Client settings are applied to the browser or client used to access the World. Use this for settings that
are affected by the client itself, such as screen dimensions, resolution, or performance.


#### Parameters

- namespace: stringThe namespace under which the setting is registered
- key: stringThe key name for the setting under the namespace
- data: SettingConfigConfiguration for setting data

The namespace under which the setting is registered

The key name for the setting under the namespace

Configuration for setting data


#### Returns void


#### Example: Register a client setting

```javascript
game.settings.register("myModule", "myClientSetting", {  name: "Register a Module Setting with Choices",  hint: "A description of the registered setting and its behavior.",  scope: "client",     // This specifies a client-stored setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the user to reload the application for the setting to take effect.  type: String,  choices: {           // If choices are defined, the resulting setting will be a select menu    "a": "Option A",    "b": "Option B"  },  default: "a",        // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});
Copy
```

`game.settings.register("myModule", "myClientSetting", {  name: "Register a Module Setting with Choices",  hint: "A description of the registered setting and its behavior.",  scope: "client",     // This specifies a client-stored setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the user to reload the application for the setting to take effect.  type: String,  choices: {           // If choices are defined, the resulting setting will be a select menu    "a": "Option A",    "b": "Option B"  },  default: "a",        // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});`
#### Example: Register a world setting

```javascript
game.settings.register("myModule", "myWorldSetting", {  name: "Register a Module Setting with a Range slider",  hint: "A description of the registered setting and its behavior.",  scope: "world",      // This specifies a world-level setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to                       // take effect.  type: new foundry.fields.NumberField({nullable: false, min: 0, max: 100, step: 10}),  default: 50,         // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});
Copy
```

`game.settings.register("myModule", "myWorldSetting", {  name: "Register a Module Setting with a Range slider",  hint: "A description of the registered setting and its behavior.",  scope: "world",      // This specifies a world-level setting  config: true,        // This specifies that the setting appears in the configuration view  requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to                       // take effect.  type: new foundry.fields.NumberField({nullable: false, min: 0, max: 100, step: 10}),  default: 50,         // The default value for the setting  onChange: value => { // A callback function which triggers when the setting is changed    console.log(value)  }});`
#### Example: Register a user setting

```javascript
game.settings.register("myModule", "myUserSetting", {  name: "Register a Module Setting with a checkbox",  hint: "A description of the registered setting and its behavior.",  scope: "user",       // This specifies a user-level setting  config: true,        // This specifies that the setting appears in the configuration view  type: new foundry.fields.BooleanField(),  default: false});
Copy
```

`game.settings.register("myModule", "myUserSetting", {  name: "Register a Module Setting with a checkbox",  hint: "A description of the registered setting and its behavior.",  scope: "user",       // This specifies a user-level setting  config: true,        // This specifies that the setting appears in the configuration view  type: new foundry.fields.BooleanField(),  default: false});`
### registerMenu

- registerMenu(namespace: string, key: string, data: SettingSubmenuConfig): voidRegister a new sub-settings menu
Parametersnamespace: stringThe namespace under which the menu is registered
key: stringThe key name for the setting under the namespace
data: SettingSubmenuConfigConfiguration for setting data
Returns voidExample: Define a settings submenu which handles advanced configuration needsgame.settings.registerMenu("myModule", "mySettingsMenu", {  name: "My Settings Submenu",  label: "Settings Menu Label",      // The text label used in the button  hint: "A description of what will occur in the submenu dialog.",  icon: "fa-solid fa-bars",               // A Font Awesome icon used in the submenu button  type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created  restricted: true                   // Restrict this submenu to gamemaster only?});
Copy
- namespace: stringThe namespace under which the menu is registered
- key: stringThe key name for the setting under the namespace
- data: SettingSubmenuConfigConfiguration for setting data

Register a new sub-settings menu


#### Parameters

- namespace: stringThe namespace under which the menu is registered
- key: stringThe key name for the setting under the namespace
- data: SettingSubmenuConfigConfiguration for setting data

The namespace under which the menu is registered

The key name for the setting under the namespace

Configuration for setting data


#### Returns void


#### Example: Define a settings submenu which handles advanced configuration needs

```javascript
game.settings.registerMenu("myModule", "mySettingsMenu", {  name: "My Settings Submenu",  label: "Settings Menu Label",      // The text label used in the button  hint: "A description of what will occur in the submenu dialog.",  icon: "fa-solid fa-bars",               // A Font Awesome icon used in the submenu button  type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created  restricted: true                   // Restrict this submenu to gamemaster only?});
Copy
```

`game.settings.registerMenu("myModule", "mySettingsMenu", {  name: "My Settings Submenu",  label: "Settings Menu Label",      // The text label used in the button  hint: "A description of what will occur in the submenu dialog.",  icon: "fa-solid fa-bars",               // A Font Awesome icon used in the submenu button  type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created  restricted: true                   // Restrict this submenu to gamemaster only?});`
### set

- set(    namespace: string,    key: string,    value: any,    options?: { document?: boolean },): Promise<any>Set the value of a game setting for a certain namespace and setting key
Parametersnamespace: stringThe namespace under which the setting is registered
key: stringThe setting key to retrieve
value: anyThe data to assign to the setting key
Optionaloptions: { document?: boolean } = {}Additional options passed to the server when updating world-scope settings
Optionaldocument?: booleanReturn the updated Setting document instead of just its value
Returns Promise<any>The assigned setting value or the Setting document instance
Example: Update the current value of a settinggame.settings.set("myModule", "myClientSetting", "b");
Copy
- namespace: stringThe namespace under which the setting is registered
- key: stringThe setting key to retrieve
- value: anyThe data to assign to the setting key
- Optionaloptions: { document?: boolean } = {}Additional options passed to the server when updating world-scope settings
Optionaldocument?: booleanReturn the updated Setting document instead of just its value
- Optionaldocument?: booleanReturn the updated Setting document instead of just its value

Set the value of a game setting for a certain namespace and setting key


#### Parameters

- namespace: stringThe namespace under which the setting is registered
- key: stringThe setting key to retrieve
- value: anyThe data to assign to the setting key
- Optionaloptions: { document?: boolean } = {}Additional options passed to the server when updating world-scope settings
Optionaldocument?: booleanReturn the updated Setting document instead of just its value
- Optionaldocument?: booleanReturn the updated Setting document instead of just its value

The namespace under which the setting is registered

The setting key to retrieve

The data to assign to the setting key

`Optional`Additional options passed to the server when updating world-scope settings

- Optionaldocument?: booleanReturn the updated Setting document instead of just its value


##### Optionaldocument?: boolean

`Optional`Return the updated Setting document instead of just its value


#### Returns Promise<any>

The assigned setting value or the Setting document instance


#### Example: Update the current value of a setting

```javascript
game.settings.set("myModule", "myClientSetting", "b");
Copy
```

`game.settings.set("myModule", "myClientSetting", "b");`
### Settings

- Protected
- Inherited
- Internal


### On This Page

