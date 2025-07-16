# Introduction to Module Development | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/module-development/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Introduction to Module Development


## 


## Overview

This page provides an overview of the basic steps required to create a Module which can be activated to extend and modify the behavior of Foundry Virtual Tabletop and its game systems. At a conceptual level, think of each Module as a "plug-in" or "add-on" which changes the software behavior in small (or large) ways. Modules can alter the behavior of the core software in several different ways:

Each module could include one or more of these types of modifications, and users can mix-and-match multiple modules (provided they are compatible) to achieve a high degree of customization for their Foundry VTT experience. This page goes into detail about how module development works for developers who are interested in creating their own module content.


## Module File Structure

A Module is defined as a uniquely-named subfolder folder within {userData}/Data/modules which contains a manifest file in JSON format named module.json which defines the module and describes what features it contains. For the purpose of this example, let's create a module named dice-tray. The first step of your module development should be to define the manifest file and ensure that your module is recognized as valid by the Foundry VTT software.

`{userData}/Data/modules``module.json``dice-tray`The bare minimum in order for a module to be recognized by Foundry VTT is a file structure that looks like this:

```javascript
{userData}/Data/modules/
  dice-tray/
    module.json
```

`{userData}/Data/modules/
  dice-tray/
    module.json`In addition to this minimum requirement, you are free to choose the structure of content included inside your module folder - but we recommend adhering to the following boilerplate directory structure with named directories for templates containing HTML templates, scripts containing JavaScript code, styles containing CSS stylesheets, packs containing included Compendium content, and lang containing localization and translation files.

`templates``scripts``styles``packs``lang````javascript
{userData}/Data/modules/
  dice-tray/
    module.json
    templates/
    scripts/
    styles/
    packs/
    lang/
```

`{userData}/Data/modules/
  dice-tray/
    module.json
    templates/
    scripts/
    styles/
    packs/
    lang/`As an example of a complete module which includes many different features, imagine that our example module named dice-tray provides a new UI element for rolling dice inside the VTT. The file structure for such a module might look something like this:

`dice-tray````javascript
{userData}/Data/modules/
  dice-tray/
    module.json
    artwork/
      d4-icon.png
      d6-icon.png
      d8-icon.png
      d10-icon.png
      d12-icon.png
      d20-icon.png
    templates/
      dice-roller.html
    scripts/
      roller.js
    styles/
      roller.css
    packs/
      rolltables
    lang/
      en.json
```

`{userData}/Data/modules/
  dice-tray/
    module.json
    artwork/
      d4-icon.png
      d6-icon.png
      d8-icon.png
      d10-icon.png
      d12-icon.png
      d20-icon.png
    templates/
      dice-roller.html
    scripts/
      roller.js
    styles/
      roller.css
    packs/
      rolltables
    lang/
      en.json`Remember, apart from the module.json file, you are free to organize your module however you like. These are simply recommendations.

`module.json`
## The Module Manifest

Each module must include a module.json file which defines the module and specifies what content it includes. This file is required and must be included at the root level of your module folder. The "id" attribute in the manifest file must match exactly with the name of the module folder. The manifest file is a JSON document containing an object of keys and values. A very minimal example of a valid module.json file is the following:

`module.json``"id"``module.json````javascript
{
  "id": "dice-tray",
  "title": "Dice Tray - An Example FVTT Module",
  "description": "A simple module created as a demo for working in the Foundry Virtual Tabletop framework.",
  "authors": [
    {
    "name": "Atropos"
    }
  ],
  "version": "1.0.0",
  "compatibility": {
    "minimum": "10",
    "verified": "11"
  }
}
```

`{
  "id": "dice-tray",
  "title": "Dice Tray - An Example FVTT Module",
  "description": "A simple module created as a demo for working in the Foundry Virtual Tabletop framework.",
  "authors": [
    {
    "name": "Atropos"
    }
  ],
  "version": "1.0.0",
  "compatibility": {
    "minimum": "10",
    "verified": "11"
  }
}`The above manifest file is sufficient for the module to be recognized, displayed, and enabled within Foundry VTT. The module would not do anything because we have not included any content - but this is a good place to start to make sure that your module is recognized by the system before advancing further.

Hint: JSON files have very specific syntax requirements. Your JSON manifest file must be valid in order for your module to be recognized and loaded. Use the JSON Lint tool to validate that your JSON file is correct if you encounter any issues.

The manifest file can include many attributes, some of which are required while others are optional.

Choose a unique module identifier. This must be an all lower-case string with no special characters and should use hyphens (not underscores) to separate multiple terms. This name must match exactly with the name of your module directory.

Provide a human readable title for the module which is displayed as the visible name for the module in the Setup menu and elsewhere.

This field can contain a more lengthy description of the module. This text can be used to describe the functionality, list contact information, provide recommendations to contributors or testers, or any other information you feel is important to provide. This field can contain HTML to structure and style your text.

The module version number can be a number or a string which denotes the version of your module. When making changes to your module, incrementing the version number in your manifest file is used to signal to users that an update is available. We discuss some supported options for versioning in the Introduction to Development article.

the compatibility field is an object key for capturing the sub-fields which defines the limits of your module's compatibility based on Foundry Virtual Tabletop version. It contains the following subfields:

```javascript
"compatibility": {
    "minimum": 10,
    "verified": "11",
    "maximum": "11"
  }
```

`"compatibility": {
    "minimum": 10,
    "verified": "11",
    "maximum": "11"
  }`The preferred method for including Javascript with your project. This field allows you to define an array of JS files which use the newer ES6 modules specification. As with scripts, this should be declared as an array. These files are identified separately in the manifest so they may be correctly loaded as a module rather than a script.

`scripts`A less common way of including Javascript with the increasing adoption of ESModules, this field allows you to define an array of JavaScript file paths which should be included whenever this module is being used. Each listed script path should be relative to the module root directory. All scripts which exist will be automatically included in the game session and loaded in their listed order.

You can designate an array of CSS files which should be included in the game session whenever this module is used. Each listed stylesheet path should be relative to the module root directory. All stylesheets which exist will be automatically included in the game session and loaded in their listed order.

Modules may come bundled with Compendium packs which include game content for various Document types. Compendium packs are defined as objects which have their own internal metadata structure. The path field is optional and the system field only needs to be filled out for system-specific packs like Actors and Items. For example:

`path``system`Packs can have different levels of ownership/visibility depending on the user's role. You can set Assistant Gamemasters, Trusted Players, and Players to have either OWNER (can view and edit), OBSERVER (can view), or NONE (can't see) permissions.

`OWNER``OBSERVER``NONE````javascript
"packs": [
    {
      "name": "pack-name",
      "label": "Pack Title",
      "system": "system-id",
      "path": "./packs/desired-folder-name",
      "type": "Item",
      "ownership": {
          "PLAYER": "NONE",
          "TRUSTED": "OBSERVER"
          "ASSISTANT": "OWNER",
      },
    }
]
```

`"packs": [
    {
      "name": "pack-name",
      "label": "Pack Title",
      "system": "system-id",
      "path": "./packs/desired-folder-name",
      "type": "Item",
      "ownership": {
          "PLAYER": "NONE",
          "TRUSTED": "OBSERVER"
          "ASSISTANT": "OWNER",
      },
    }
]`Important: As of Version 10, Actor, Item, and Adventure compendium packs MUST define a system field.

Compendium Packs can also be organized into Folders in the Compendium tab of the sidebar. You can define what Folders they should be in by default in the module.json.

`module.json``m``a````javascript
"packFolders": [
  {
    "name": "Classes",
    "sorting": "m",
    "packs": ["classes"],
    "folders": [
      {
        "name": "Corebook",
        "sorting": "a",
        "color": "#ff0000",
        "packs": ["barbarian"]
      },
      {
        "name": "13 True Ways",
        "sorting": "a",
        "color": "#ff00ff",
        "packs": ["chaosmage"]
      }
    ]
  }
]
```

`"packFolders": [
  {
    "name": "Classes",
    "sorting": "m",
    "packs": ["classes"],
    "folders": [
      {
        "name": "Corebook",
        "sorting": "a",
        "color": "#ff0000",
        "packs": ["barbarian"]
      },
      {
        "name": "13 True Ways",
        "sorting": "a",
        "color": "#ff00ff",
        "packs": ["chaosmage"]
      }
    ]
  }
]`Modules can require other modules, systems, or worlds be installed to allow their use. If a module has been installed with dependencies, but its dependencies are missing, it cannot be enabled. Dependencies within relationships are defined as an array of objects containing the following data:

Dependency entries require the id attribute. If only an id is provided, additional details about the module will be discovered from the Foundry VTT website listing.

`id``id`The type attribute instructs FVTT that the dependency may be on a different type of package. By default dependencies are assumed to be a module, so if you want to depend on a system or world you should be explicit.

The manifest attribute provides an explicit manifest url to be used for downloading the dependency. If a manifest is not provided, the dependency package must exist in the Foundry website directory.

Example relationships structure:

```javascript
"relationships": {
  "systems": [{
    "id": "archmage",
    "type": "system",
    "manifest": "https://gitlab.com/asacolips-projects/foundry-mods/archmage/-/raw/1.5.0/system.json",
    "compatibility": {
      "verified": "1.5.0"
    }
  }],
  "requires": [{
    "id": "_chatcommands",
    "type": "module",
    "manifest": "https://github.com/League-of-Foundry-Developers/Chat-Commands-Lib/releases/download/1.2.0/module.json",
    "compatibility": {
      "verified": "1.2.0"
    }
  }]
}
```

`"relationships": {
  "systems": [{
    "id": "archmage",
    "type": "system",
    "manifest": "https://gitlab.com/asacolips-projects/foundry-mods/archmage/-/raw/1.5.0/system.json",
    "compatibility": {
      "verified": "1.5.0"
    }
  }],
  "requires": [{
    "id": "_chatcommands",
    "type": "module",
    "manifest": "https://github.com/League-of-Foundry-Developers/Chat-Commands-Lib/releases/download/1.2.0/module.json",
    "compatibility": {
      "verified": "1.2.0"
    }
  }]
}`A module may designate an array of languages specifications that it supports by default. Each element in the languages array is an object which defines the language tag, label, and path to its localization file. Please see the @Article[Localization] documentation page for details on language entries provided by a module. For example:

```javascript
"languages": [
    {
      "lang": "en",
      "name": "English",
      "path": "lang/en.json"
    }
]
```

`"languages": [
    {
      "lang": "en",
      "name": "English",
      "path": "lang/en.json"
    }
]`An array of package names used as a restriction to prevent activation of a module for systems that the module does not support. For example, specifying "system": ["dnd5e"] will only allow the module to activated within Worlds which are running the dnd5e game system.

`"system": ["dnd5e"]``dnd5e`An array listing each author as an object that can contain the keys name, email, discord, and url. For example:

`name``email``discord``url````javascript
"authors": [
    {
      "id": "Atropos",
      "discord": "Atropos#3814",
      "email": "admin@foundryvtt.com",
      "url": "https://foundryvtt.com"
    }
  ]
```

`"authors": [
    {
      "id": "Atropos",
      "discord": "Atropos#3814",
      "email": "admin@foundryvtt.com",
      "url": "https://foundryvtt.com"
    }
  ]`A module may request for a specialized socket namespace to be provided which allows data messages to be passed between connected clients. If set to true, a socket event will be handled by the server with the event name module.{name}. This event name relays arbitrary data packets between the sending client and all other connected clients.

`true``module.{name}`A public URL that links to the repository or documentation pages for the module. This link will be displayed for users to allow them to find more information about your system. If your module is hosted in version control like GitHub or GitLab, linking to the repository in this field is a good choice.

A stable URL that describes the latest release version of your manifest file. This URL is used for automatic system installation in the Foundry VTT setup screen. This manifest URL is consulted during the system update check to see whether a new version is available for download. It is important that this address remain stable, otherwise updates will not be detected.

A public URL that provides a zip archive of the module for the manifest version which points to it. The archive at this URL is retrieved during the installation or update process. If you are using version control for your package - it is recommended to manage download archives using the tags and releases features which are supported by most git repositories.

A path to a license file relative to the root module folder or a publicly accessible URL which contains the software license that applies to this package.

A path to a read-me file relative to the root module folder or a publicly accessible URL which contains instructions or information about the package.

A publicly accessible URL where issues, suggestions, and bug reports may be filed.

A publicly accessible URL where update and release notes about the package may be found.

The library field is a boolean that indicates whether the package is a library intended for other packages to depend on and consume. This field should be true if your package does not present any user-facing features, but rather provides functionality for other packages to utilize and rely upon. Packages with this field set to true may be hidden from third party package lists to avoid confusing users.

"library": true,

`"library": true,`When omitted the default value of this field is false. It is not necessary to explicitly set this value unless it needs to be true.

`type``url``thumbnail````javascript
"media": [
  {
    "type": "setup",
    "url": "modules/demon-queen-awakens/scenes/DemonQueenCover.webp",
    "thumbnail": "modules/demon-queen-awakens/scenes/thumbs/the-valley-of-stone.webp"
  }
]
```

`"media": [
  {
    "type": "setup",
    "url": "modules/demon-queen-awakens/scenes/DemonQueenCover.webp",
    "thumbnail": "modules/demon-queen-awakens/scenes/thumbs/the-valley-of-stone.webp"
  }
]`
## Including JavaScript

For modules that want to expand or modify core software functionality you can include a JavaScript file (or ESModule) which can impact how Foundry VTT works. An ideal second step once you have populated your module manifest with the required fields is to create a "Hello World" script which is loaded when your module is active. Experiment with adding a script file to the "scripts" or "esmodules" attribute of the manifest. Suppose we create the JavaScript file in our example module dice-tray/scripts/roller.js. We would modify the module.json file as follows and the contents of our created JavaScript file will be automatically loaded and parsed by the browser when a game is loaded.

`"scripts"``"esmodules"``dice-tray/scripts/roller.js``module.json````javascript
"scripts": [
  "scripts/roller.js"
]
```

`"scripts": [
  "scripts/roller.js"
]`or if you're using an ESModule:

```javascript
"esmodules": [
  "scripts/roller.js"
]
```

`"esmodules": [
  "scripts/roller.js"
]`Note that modules can only affect the game view itself - and not the Setup or Join screens for security reasons.

The example below provides a very simple "Hello World" script which is designed to introduce how scripts are loaded and executed. Open the Developer Tools by pressing F12 and consult the Console tab. Note that in the below example - the statements are logged at different points in time. Depending on what scope of data you need to operate on - you may want to condition execution of module code on certain events (called "hooks") which allow for module logic to interrupt, augment, or replace the default behavior of the VTT platform.

`F12````javascript
console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});
```

`console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});`
## Module Defined Sub-Types

As of Foundry Virtual Tabletop Version 11, it is possible for Modules to extend the list of sub-types available to certain Documents in much the same way that Systems can. Actor, Item, JournalEntryPage, Cards, and Card Documents can all have additional sub-types added in this way.

`Actor``Item``JournalEntryPage``Cards``Card`Once a Module declares which sub-types it provides for which Documents, they will subsequently be available for use in the World by users who activate that Module, and will function in the same way that core or System-defined sub-types do, with additional, Module-specific data being available under the Document's system field.

`system`
## Further Reading

As you delve further into the world of module development - the following topics may prove useful for a variety of tasks you wish to perform.

- The  Document Class Pattern
- The  Game Class
- The  Application Class
- The  FormApplication Class
- The  Hooks Event Framework
- The  Canvas Class

