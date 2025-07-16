# Introduction to System Development | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/system-development/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Introduction to System Development


## 


## Overview

This page provides an overview and tutorial of the basic steps required to create an entire Game System from scratch as a module which can be used for your homebrew games or shared with other players.

As an example of a fairly feature-complete game system implementation - please feel free to examine the D&D5e system which has open source code: https://github.com/foundryvtt/dnd5e


## Before you Begin

Game system development in Foundry Virtual Tabletop is both rewarding and challenging. If you are considering this process, we encourage you to consider the following advice:

- Building a game system in FVTT requires a few skills: at least some basic knowledge of JavaScript, HTML, and CSS are required. You do not need to be an expert web developer, but understanding the basics of these languages is critical.
- The development process will (probably) take longer than you think. Even game systems that seem simple or basic often have underlying portions of game mechanics which are overlooked. Building a system does not take days; it will certainly take weeks, and in some cases for more complex systems, months to develop. Try to remain focused on the long-term objective and do not let slow progress in the short term discourage you.
- Make progress one piece at a time. A game system is comprised of many component parts both within and outside of Foundry VTT. We recommend starting with the data model - but don't worry about adding every attribute at first - you can always expand the data model later. Consider starting with a simple model which captures the minimum and most important pieces of Actor or Item data. Breaking your system down into smaller pieces will make the construction process easier and less overwhelming.
- Consider using the "Simple Worldbuilding" system as a stop-gap while your own system is still under development. This will allow you and your players to enjoy using the Virtual Tabletop while you work on completing your own system.


### System File Structure

Each game system is a subdirectory within the {userData}/Data/systems path of your Foundry Virtual Tabletop user data location. When developing a new system, we recommend creating your git repository directly within this location for ease of development and testing. Within this directory there is only one required file: system.json, which is explained below. You are free to use your own naming conventions for subdirectories and files within your game system, but we encourage you to use lower-case hyphen-separated file and folder names as a best practice.

`{userData}/Data/systems``system.json`A standard example file structure for a minimal system might look like this:

```javascript
{userData}/Data/systems/mysystem/
system.json
mysystem.mjs
module/
  data-models.mjs
  documents.mjs
styles/
  system-styles.css
packs/
  monsters/
  items/
lang/
  en.json
```

`{userData}/Data/systems/mysystem/
system.json
mysystem.mjs
module/
  data-models.mjs
  documents.mjs
styles/
  system-styles.css
packs/
  monsters/
  items/
lang/
  en.json`There are three ways to share a created system with others:

- Manual Install: You may package the system directory directly into a .zip file which users can extract within their own systems folder.
- Manifest Install: Instead of transacting the .zip file directly, you can host that file in a publicly accessible location and provide users with the URL to the system manifest file, which can automate the installation process.
- Foundry Package Browser: You can also configure your system to appear within the in-app system browser which will allow Foundry VTT users to install your system with a single click. This requires the package to be submitted to our website listing.


## The System Manifest

Each game system must include a system.json file which provides the system specification. This file is required and must be included at the root level of your system folder. The system folder itself must match the "id" attribute designated within the specification file. For example, if we create a game system with the name mysystem, then we would create the file {userData}/Data/systems/mysystem/system.json.

`system.json``"id"``mysystem``{userData}/Data/systems/mysystem/system.json````javascript
{
  "id": "mysystem",
  "title": "Minimal World Building",
  "description": "A human-readable description of your system.",
  "version": "1.0.0",
  "compatibility": {
    "minimum": 12,
    "verified": 12
  },
  "authors": [{
    "name": "me",
    "url": "YOUR WEBSITE ADDRESS HERE",
    "email": "YOUR EMAIL ADDRESS HERE",
    "discord": "YOUR DISCORD USERNAME HERE"
  }],
  "esmodules": ["mysystem.mjs"],
  "styles": ["styles/system-styles.css"],
  "packs": [{
    "name": "monsters",
    "label": "My Monsters",
    "type": "Actor"
  },
  {
    "name": "items",
    "label": "My Items",
    "type": "Item"
  }],
  "languages": [{
    "lang": "en",
    "name": "English",
    "path": "lang/en.json"
  }],
  "documentTypes": {
    "Actor": {
      "hero": { "htmlFields": ["background.biography"] },
      "villain": { "htmlFields": ["background.biography"] },
      "pawn": {}
    },
    "Item": {
      "weapon": {},
      "spell": {}
    }
  },
  "socket": false,
  "initiative": "1d20",
  "grid": {
    "distance": 10,
    "units": "ft"
  },
  "primaryTokenAttribute": "resources.health",
  "secondaryTokenAttribute": "resources.power",
  "url": "https://your/hosted/system/repo/",
  "manifest": "https://your/hosted/system/repo/system.json",
  "download": "https://your/packaged/download/archive.zip"
}
```

`{
  "id": "mysystem",
  "title": "Minimal World Building",
  "description": "A human-readable description of your system.",
  "version": "1.0.0",
  "compatibility": {
    "minimum": 12,
    "verified": 12
  },
  "authors": [{
    "name": "me",
    "url": "YOUR WEBSITE ADDRESS HERE",
    "email": "YOUR EMAIL ADDRESS HERE",
    "discord": "YOUR DISCORD USERNAME HERE"
  }],
  "esmodules": ["mysystem.mjs"],
  "styles": ["styles/system-styles.css"],
  "packs": [{
    "name": "monsters",
    "label": "My Monsters",
    "type": "Actor"
  },
  {
    "name": "items",
    "label": "My Items",
    "type": "Item"
  }],
  "languages": [{
    "lang": "en",
    "name": "English",
    "path": "lang/en.json"
  }],
  "documentTypes": {
    "Actor": {
      "hero": { "htmlFields": ["background.biography"] },
      "villain": { "htmlFields": ["background.biography"] },
      "pawn": {}
    },
    "Item": {
      "weapon": {},
      "spell": {}
    }
  },
  "socket": false,
  "initiative": "1d20",
  "grid": {
    "distance": 10,
    "units": "ft"
  },
  "primaryTokenAttribute": "resources.health",
  "secondaryTokenAttribute": "resources.power",
  "url": "https://your/hosted/system/repo/",
  "manifest": "https://your/hosted/system/repo/system.json",
  "download": "https://your/packaged/download/archive.zip"
}`Choose a unique system identifier. This should be an all lower-case string with no special characters. This name must align with the name of the parent directory within which you create the system.

Provide a human readable title for the game system which is displayed when selecting from available systems in the World creation menu.

This field can contain a more lengthy description of the game system. This text will be used to display help or contact information about your system and is also a good place to include any special licensing or attribution information that you need to distribute.

The system version number can be a number or a string depending on what versioning scheme you prefer to use.

the compatibility field is an object key for capturing the sub-fields which defines the limits of your module's compatibility based on Foundry Virtual Tabletop version. It contains the following subfields:

```javascript
"compatibility": {
  "minimum": 9,
  "verified": 11
  "maximum": 11
}
```

`"compatibility": {
  "minimum": 9,
  "verified": 11
  "maximum": 11
}`An array listing each author as an object that can contain the keys name, email, discord, and url. For example:

`name``email``discord``url````javascript
"authors": [{
  "id": "Atropos",
  "discord": "Atropos",
  "url": "https://foundryvtt.com"
}]
```

`"authors": [{
  "id": "Atropos",
  "discord": "Atropos",
  "url": "https://foundryvtt.com"
}]`A less common way of including Javascript with the increasing adoption of ESModules. This field allows you to define an array of JavaScript file paths which should be included whenever this module is being used. Each listed script path should be relative to the module's root directory. All scripts which exist will be automatically included in the game session and loaded in their listed order.

The preferred method for including Javascript with your project. This field allows you to define an array of JS files which use the newer ES6 modules specification. As with scripts, this should be declared as an array. These files are identified separately in the manifest so they may be correctly loaded as a module rather than a script.

`scripts`You can designate CSS files which should be included in the game session whenever this System is being used. Each listed stylesheet path should be relative to the system root directory. All stylesheets which exist will be automatically included in the game session and loaded in their listed order. As a best practice, we recommend serving stylesheets out of a subdirectory named styles, but this is not required.

`styles`Game systems may come bundled with Compendium packs which add pre-generated content for Actors, Items, or other supported Document types. Compendium packs are defined as objects which have their own internal metadata. For each included compendium. These options are listed below:

The compendium pack name - this should be a unique lower-case string with no special characters.

The compendium pack label - this should be a human readable string label which is displayed in the Compendium sidebar in-game.

Since you are creating compendium content specifically for your system, be sure to reference that the content inside each compendium pack requires the system by providing the system name that you chose.

Each compendium pack must designate a specific Document type that it contains. Valid documents include Actor, Item, JournalEntry, RollTable, Cards, Macro, Playlist, or Scene.

`Actor``Item``JournalEntry``RollTable``Cards``Macro``Playlist``Scene`Systems can require other modules, systems, or worlds be installed to allow their use. If a module has been installed with dependencies, but its dependencies are missing, it cannot be enabled. Dependencies within relationships are defined as an array of objects containing the following data:

Dependency entries require the id attribute. If only an id is provided, additional details about the module will be discovered from the Foundry VTT website listing.

`id``id`The type attribute instructs FVTT that the dependency may be on a different type of package. By default dependencies are assumed to be a module, so if you want to depend on a system or world you should be explicit.

The manifest attribute provides an explicit manifest url to be used for downloading the dependency. If a manifest is not provided, the dependency package must exist in the Foundry website directory.

Example relationships structure:

```javascript
"relationships": {
  "requires": [{
    "id": "_chatcommands",
    "manifest": "https://github.com/League-of-Foundry-Developers/Chat-Commands-Lib/releases/download/1.2.0/module.json",
    "compatibility": {
      "verified": "1.2.0"
    }
  }]
}
```

`"relationships": {
  "requires": [{
    "id": "_chatcommands",
    "manifest": "https://github.com/League-of-Foundry-Developers/Chat-Commands-Lib/releases/download/1.2.0/module.json",
    "compatibility": {
      "verified": "1.2.0"
    }
  }]
}`The game system may designate an array of languages specifications that it supports by default. Each element in the languages array is an object which defines the language tag, label, and path to its localization file. The elements of a language object are the following:

The official 2-character language code in lower-case letters, for example "en".

The formal and readable name for the language, for example "English".

Path to a JSON file relative to the system directory where language translation strings are provided.

Custom Document sub-types drive the majority of the implementation of the System. They store special data that is specific to the game system, and include logic and functionality that facilitate the game's rules. The documentTypes definition tells the server which sub-types are provided by the System so that they are not marked as invalid Documents, and should be paired with DataModel definitions in code.

`documentTypes`Example DataModels are included below, but please see the Introduction to System Data Models article for full details.

A system may request for a specialized socket namespace to be provided. If set to true, a socket event will be handled by the server with the name system.${id}, in this example case system.mysystem which transacts a arbitrary data object by broadcasting that data to all connected clients. This allows the system to have a reserved channel for messaging events which are needed to coordinate actions across multiple connected clients.

`true``system.${id}``system.mysystem`Not every game system uses the concept of initiative, but this field provides the default dice rolling formula that can be used to determine the turn order of Tokens within the combat tracker.

If the game system is played on a grid, default grid settings are specified using this object.

This field designates the default amount of distance that a single grid space should typically represent under this game system. This value configures the default value used when a new Scene is created, but can always be changed for each Scene independently.

This field designates the standard unit of measure used to describe distances under this game system. This defines the default value used when new a new Scene is created, but can always be changed for each Scene independently.

An attribute path within the system data model that points to an object that contains both a value and max key. The prototype Token for each Actor created in this system will automatically have this resource assigned as its primary bar. Omit this key or set it to null for no default attribute.

`value``max``null`An attribute path within the system data model that points to an object that contains both a value and max key. The prototype Token for each Actor created in this system will automatically have this resource assigned as its secondary bar. Omit this key or set it to null for no default attribute.

`value``max``null`A public URL that links to the repository or documentation pages for the game system. This link will be displayed for users to allow them to find more information about your system.

A stable URL that describes the latest release version of your system manifest file. This URL is used for automatic system installation in the Foundry VTT setup screen. This manifest URL is consulted during the system update check to see whether a new system version is available for download. It is important that this address remain stable, otherwise updates will not be detected.

A public URL that provides a zip archive of your system. The archive at this URL is retrieved during the automated system installation or update process.

You can learn more about the fields supported in a package manifest file on the BasePackage and BaseSystem API documentation pages.


## The Data Model

The core Foundry VTT software provides an API that is agnostic of whichever game system the user is playing. For your System to store and track the special data it needs in order to implement its rules, it must define Data Models. Most commonly a System needs special data for Actors and Items, but many other Document types can include System-specific data, such as the ActiveEffect, Cards, ChatMessage, and JournalEntryPage Documents.

You should familiarize yourself with Data Models and how they are implemented in Systems before proceeding. You can read more about them in the Introduction to System Data Models article. For the purposes of this article, we will define some example Data Models that include three Actor types: hero, pawn, and villain - as well as two Item types: weapon, and spell.

`hero``pawn``villain``weapon``spell`Note how certain data, like resources, are common to all Actor types, but there are additional attributes that are unique to specific types. The example uses inheritance to accomplish this, but since schemas are simple objects, there are many other techniques that can be used to accomplish the same thing.

`resources````javascript
const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        }),
        power: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 3 })
        })
      })
    };
  }
}

class ImportantActorDataModel extends ActorDataModel {
  static defineSchema() {
    // Only important Actors have a background and hair color.
    return {
      ...super.defineSchema(),
      background: new SchemaField({
        biography: new HTMLField({ required: true, blank: true }),
        hairColor: new StringField({ required: true, blank: true })
      })
    };
  }
}

export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      goodness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      level: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 30 })
    };
  }
}

export class VillainDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      wickedness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
      })
    };
  }
}

// The pawn does not have any different data to the base ActorDataModel, but we
// still define a data model for it, in case we have any special logic we want
// to perform only for pawns.
export class PawnDataModel extends ActorDataModel {}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

class ItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      rarity: new StringField({
        required: true,
        blank: false,
        options: ["common", "uncommon", "rare", "legendary"],
        initial: "common"
      }),
      price: new NumberField({ required: true, integer: true, min: 0, initial: 20 })
    };
  }
}

export class WeaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      damage: new NumberField({ required: true, integer: true, positive: true, initial: 5 })
    };
  }
}

export class SpellDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      cost: new NumberField({ required: true, integer: true, positive: true, initial: 2 })
    };
  }
}
```

`const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        }),
        power: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 3 })
        })
      })
    };
  }
}

class ImportantActorDataModel extends ActorDataModel {
  static defineSchema() {
    // Only important Actors have a background and hair color.
    return {
      ...super.defineSchema(),
      background: new SchemaField({
        biography: new HTMLField({ required: true, blank: true }),
        hairColor: new StringField({ required: true, blank: true })
      })
    };
  }
}

export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      goodness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      level: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 30 })
    };
  }
}

export class VillainDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      wickedness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
      })
    };
  }
}

// The pawn does not have any different data to the base ActorDataModel, but we
// still define a data model for it, in case we have any special logic we want
// to perform only for pawns.
export class PawnDataModel extends ActorDataModel {}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

class ItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      rarity: new StringField({
        required: true,
        blank: false,
        options: ["common", "uncommon", "rare", "legendary"],
        initial: "common"
      }),
      price: new NumberField({ required: true, integer: true, min: 0, initial: 20 })
    };
  }
}

export class WeaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      damage: new NumberField({ required: true, integer: true, positive: true, initial: 5 })
    };
  }
}

export class SpellDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      cost: new NumberField({ required: true, integer: true, positive: true, initial: 2 })
    };
  }
}`
### Resource Attributes

Certain attributes that define a value and max can be treated as 'resources' by the core API, and can appear on Tokens as a colored bar. Other numeric attributes that don't necessarily have a value or max can also be set as Token attributes. They won't render as a bar, but they can be edited via the Token HUD.

`value``max``value``max`These attributes are configured with CONFIG.Actor.trackableAttributes. For example, if we wanted the hero and pawn Actors to have power and health resources, and for heroes to additionally have the goodness resource, and level attribute, we would configure CONFIG.Actor.trackableAttributes like so:

`CONFIG.Actor.trackableAttributes``power``health``goodness``level``CONFIG.Actor.trackableAttributes````javascript
CONFIG.Actor.trackableAttributes = {
  hero: {
    bar: ["resources.health", "resources.power", "goodness"],
    value: ["level"]
  },
  pawn: {
    bar: ["resources.health", "resources.power"],
    value: []
  }
};
```

`CONFIG.Actor.trackableAttributes = {
  hero: {
    bar: ["resources.health", "resources.power", "goodness"],
    value: ["level"]
  },
  pawn: {
    bar: ["resources.health", "resources.power"],
    value: []
  }
};`
### How the Data Model is Applied

When a new Document is created in a game using this System, it will automatically have its own internal data populated to conform to the schema defined in the Data Model. For example, when using this System, if we were to execute the following code:

```javascript
const item = await Item.implementation.create({name: "Test Weapon", type: "weapon"});
console.log(item); // The created item data structure
```

`const item = await Item.implementation.create({name: "Test Weapon", type: "weapon"});
console.log(item); // The created item data structure`We would observe that the item was created and assigned an ID, and the system field contained within the item matches the expected contents defined by the game system Data Model.

`system````javascript
{
  "_id": "e6c7US1VK2cqejVJ",
  "name": "Test Weapon",
  "permission": {
    "default": 0
  },
  "system": {
    "rarity": "common",
    "damage": 5
  },
  "flags": {},
  "type": "weapon",
  "img": "icons/svg/sword.svg"
}
```

`{
  "_id": "e6c7US1VK2cqejVJ",
  "name": "Test Weapon",
  "permission": {
    "default": 0
  },
  "system": {
    "rarity": "common",
    "damage": 5
  },
  "flags": {},
  "type": "weapon",
  "img": "icons/svg/sword.svg"
}`
### Data Model Migrations

Often, during the course of system development, changes to the data structure are needed. Removing fields or adding new ones is straight-forward and can be done by simply making the appropriate modifications in the defineSchema method. Such changes will automatically be reflected on any existing Documents or newly-created ones.

`defineSchema`Moving data or changing its type can be a more complex process, however, and the specifics will depend on the data and how it needs to migrate. You can define a migrateData method on your Data Models to implement the bespoke logic you need in order to transform the data. For example, if we wanted to migrate the hero's level field to a more granular progress field that tracks 5 progress points per level, we could define a migration method like the following:

`migrateData``level``progress````javascript
export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() {
    // We have modified this model to remove the level field and replace it
    // with the progress field.
    return {
      ...super.defineSchema(),
      goodness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      progress: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 150 })
    };
  }

  static migrateData(source) {
    // Migrate level to progress.
    if ( Number.isNumeric(source.level) ) source.progress = source.level * 5;
    return super.migrateData(source);
  }
}
```

`export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() {
    // We have modified this model to remove the level field and replace it
    // with the progress field.
    return {
      ...super.defineSchema(),
      goodness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      progress: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 150 })
    };
  }

  static migrateData(source) {
    // Migrate level to progress.
    if ( Number.isNumeric(source.level) ) source.progress = source.level * 5;
    return super.migrateData(source);
  }
}`Bear in mind that migrateData methods are also run when a Document is updated, and source is the provided update delta only, not the full source of the Document. As such, performing some migration contingent on the absence of a field in the source data may not always behave as expected.

`migrateData``source`
## Custom Document Implementations

In addition to defining Data Models for your System's Document sub-types, you can also define a bespoke Document implementation for almost every Document type defined by the core API. Using a combination of Data Models and custom Document implementations, you can implement any special logic and rules required by your game system.

For example, since every type of Actor has a health attribute, we might want to provide a method for dealing damage to the Actor. Depending on the game system, damage application might be very complex, so this could be an important method for your game system. In our simple example, we will just handle a simple rule of always taking a minimum of one point of damage, and also log a message to the chat.

`health````javascript
export class SystemActor extends Actor {
  async applyDamage(damage) {
    // Always take a minimum of 1 damage, and round to the nearest integer.
    damage = Math.round(Math.max(1, damage));

    // Update the health.
    const { value } = this.system.resources.health;
    await this.update({ "system.resources.health.value": value - damage });

    // Log a message.
    await ChatMessage.implementation.create({
      content: `${this.name} took ${damage} damage!`
    });
  }
}
```

`export class SystemActor extends Actor {
  async applyDamage(damage) {
    // Always take a minimum of 1 damage, and round to the nearest integer.
    damage = Math.round(Math.max(1, damage));

    // Update the health.
    const { value } = this.system.resources.health;
    await this.update({ "system.resources.health.value": value - damage });

    // Log a message.
    await ChatMessage.implementation.create({
      content: `${this.name} took ${damage} damage!`
    });
  }
}`Similarly, since every type of Item has a price, we could add a convenience method to check if any given Item is free.

`price````javascript
export class SystemItem extends Item {
  get isFree() {
    return this.price < 1;
  }
}
```

`export class SystemItem extends Item {
  get isFree() {
    return this.price < 1;
  }
}`We then enable these new implementations by setting CONFIG.Actor.documentClass and CONFIG.Item.documentClass.

`CONFIG.Actor.documentClass``CONFIG.Item.documentClass````javascript
CONFIG.Actor.documentClass = SystemActor;
CONFIG.Item.documentClass = SystemItem;
```

`CONFIG.Actor.documentClass = SystemActor;
CONFIG.Item.documentClass = SystemItem;`Once this is done, the new methods are available on every Actor or Item in the System.

```javascript
const actor = await Actor.implementation.create({
  name: "Hero",
  type: "hero"
});
console.log(actor.system.resources.health.value); // 10
await actor.applyDamage(7);
console.log(actor.system.resources.health.value); // 3

const item = await Item.implemenation.create({
  name: "Item",
  type: "weapon"
});
console.log(item.system.price); // 20
console.log(item.isFree); // false
```

`const actor = await Actor.implementation.create({
  name: "Hero",
  type: "hero"
});
console.log(actor.system.resources.health.value); // 10
await actor.applyDamage(7);
console.log(actor.system.resources.health.value); // 3

const item = await Item.implemenation.create({
  name: "Item",
  type: "weapon"
});
console.log(item.system.price); // 20
console.log(item.isFree); // false`
## Preparing and Deriving Data

In addition to the raw source data stored on the Document, there might be additional attributes or properties that can be calculated automatically based on that source data. For example, in the case of the hero Actor, their progress score can be used to calculate their level. Rather than adding getters for each of these properties, you can use the various preparation methods provided by the core API to have these values calculated automatically whenever the Actor is updated.

`progress``level`Additionally, these preparation methods can be used to enforce certain game system rules or data integrity, allowing you to simplify the assumptions used elsewhere in your code. For example, the health attribute has min and max properties. We can use data preparation to ensure that the value property is always within those limits. Doing this as part of data preparation means that we do not need to check against min and max everywhere we adjust health or use health, we can safely assume that value is always correct.

`health``min``max``value``min``max``value`There are two places we can inject our special logic: prepareBaseData, and prepareDerivedData. The former is called before embedded children are prepared, and before ActiveEffects are applied (in the case of Actors), while the latter is called after. For our simple example we focus only on prepareDerivedData.

`prepareBaseData``prepareDerivedData``prepareDerivedData`First, we override Actor#prepareDerivedData in our custom Actor implementation in order to handle health preparation, since this attribute is common to all Actor sub-types.

`Actor#prepareDerivedData````javascript
export class SystemActor extends Actor {
  async applyDamage(damage) { // Omitted for brevity. }

  prepareDerivedData() {
    super.prepareDerivedData();

    // Clamp health within the appropriate range.
    const { health } = this.system.resources;
    health.value = Math.clamp(health.value, health.min, health.max);
  }
}
```

`export class SystemActor extends Actor {
  async applyDamage(damage) { // Omitted for brevity. }

  prepareDerivedData() {
    super.prepareDerivedData();

    // Clamp health within the appropriate range.
    const { health } = this.system.resources;
    health.value = Math.clamp(health.value, health.min, health.max);
  }
}`Next, we override TypeDataModel#prepareDerivedData in our hero Data Model. Since heroes are the only sub-type that has a progress attribute, the Data Model is the ideal place for this logic.

`TypeDataModel#prepareDerivedData``progress````javascript
export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() { // Omitted for brevity. }

  prepareDerivedData() {
    super.prepareDerivedData();

    // Determine the hero's current level.
    this.level = Math.floor(this.progress / 5);
  }
}
```

`export class HeroDataModel extends ImportantActorDataModel {
  static defineSchema() { // Omitted for brevity. }

  prepareDerivedData() {
    super.prepareDerivedData();

    // Determine the hero's current level.
    this.level = Math.floor(this.progress / 5);
  }
}`
## Putting It All Together

So far we have covered defining a system.json manifest, defining System Data Models for several System-specific Document sub-types, as well as defining some custom Actor and Item implementations. In our system.json we defined an esmodules field that pointed to mysystem.mjs. This is the entry point to the System's code and where we place all the various configurations mentioned above.

`system.json``system.json``esmodules``mysystem.mjs````javascript
import { SystemActor, SystemItem } from "./module/documents.mjs";
import { HeroDataModel, VillainDataModel, PawnDataModel, WeaponDataModel, SpellDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {
  // Configure custom Document implementations.
  CONFIG.Actor.documentClass = SystemActor;
  CONFIG.Item.documentClass = SystemItem;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    hero: HeroDataModel,
    villain: VillainDataModel,
    pawn: PawnDataModel
  };
  CONFIG.Item.dataModels = {
    weapon: WeaponDataModel,
    spell: SpellDataModel
  };

  // Configure trackable attributes.
  CONFIG.Actor.trackableAttributes = {
    hero: {
      bar: ["resources.health", "resources.power", "goodness"],
      value: ["progress"]
    },
    pawn: {
      bar: ["resources.health", "resources.power"],
      value: []
    }
  };
});
```

`import { SystemActor, SystemItem } from "./module/documents.mjs";
import { HeroDataModel, VillainDataModel, PawnDataModel, WeaponDataModel, SpellDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {
  // Configure custom Document implementations.
  CONFIG.Actor.documentClass = SystemActor;
  CONFIG.Item.documentClass = SystemItem;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    hero: HeroDataModel,
    villain: VillainDataModel,
    pawn: PawnDataModel
  };
  CONFIG.Item.dataModels = {
    weapon: WeaponDataModel,
    spell: SpellDataModel
  };

  // Configure trackable attributes.
  CONFIG.Actor.trackableAttributes = {
    hero: {
      bar: ["resources.health", "resources.power", "goodness"],
      value: ["progress"]
    },
    pawn: {
      bar: ["resources.health", "resources.power"],
      value: []
    }
  };
});`