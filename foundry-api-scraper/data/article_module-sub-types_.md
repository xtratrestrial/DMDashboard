# Introduction to Module Sub-Types | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/module-sub-types/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Introduction to Module Sub-Types


## 

As of Foundry Virtual Tabletop Version 11, it is possible for Modules to extend the list of sub-types available to certain Documents in much the same way that Systems can. Any Document that includes a system field can have additional sub-types added in this way.

`system`Once a Module declares which sub-types it provides for which Documents, they will subsequently be available for use in the World by users who activate that Module, and will function in the same way that core or System-defined sub-types do, with additional, Module-specific data being available under the Document's system field.

`system`
## Defining Sub-Types

In this section we show an example Module that defines a custom quest JournalEntryPage.

`quest``JournalEntryPage`
### The Module Manifest

The first part of implementing custom sub-types is to include a documentTypes definition in the module.json. This makes the server aware of these custom sub-types so that they are not discarded as invalid Documents.

`documentTypes``module.json````javascript
{
  "id": "quest-pages",
  "title": "Quest Pages",
  "description": "A Module that provides a new quest page type.",
  "version": "1.0.0",
  "compatibility": {
    "minimum": 11,
    "verified": 11
  },
  "authors": [{"name": "Foundry VTT Knowledge Base"}],
  "esmodules": ["main.mjs"],
  "languages": [{
    "lang": "en",
    "name": "English",
    "path": "en.json"
  }],
  "documentTypes": {
    "JournalEntryPage": {
      "quest": {
        "htmlFields": ["description.long", "description.short"],
        "filePathFields": {
          "img": ["IMAGE"]
        }
      }
    }
  }
}
```

`{
  "id": "quest-pages",
  "title": "Quest Pages",
  "description": "A Module that provides a new quest page type.",
  "version": "1.0.0",
  "compatibility": {
    "minimum": 11,
    "verified": 11
  },
  "authors": [{"name": "Foundry VTT Knowledge Base"}],
  "esmodules": ["main.mjs"],
  "languages": [{
    "lang": "en",
    "name": "English",
    "path": "en.json"
  }],
  "documentTypes": {
    "JournalEntryPage": {
      "quest": {
        "htmlFields": ["description.long", "description.short"],
        "filePathFields": {
          "img": ["IMAGE"]
        }
      }
    }
  }
}`The documentTypes field is an object of Document types. Those Document type objects then contain further objects with keys that correspond to sub-types that your Module provides. Note: The sub-type names are automatically prefixed by your Module's ID in order to make it clear that they are provided by a Module, and to eliminate the possibility of name collisions with other Modules or with core or System-provided sub-types.

`documentTypes`The htmlFields and filePathFields are optional, and are related to the data sanitization that your Module might require. They can be omitted entirely if the data your Module uses has no need of sanitization. Here is how the documentTypes field would look in that case:

`htmlFields``filePathFields``documentTypes````javascript
{
  "documentTypes": {
    "JournalEntryPage": {
      "quest": {}
    }
  }
}
```

`{
  "documentTypes": {
    "JournalEntryPage": {
      "quest": {}
    }
  }
}`
#### htmlFields

`htmlFields`If your Module stores and renders user-provided HTML content, it must include an htmlFields definition so that the server can appropriately sanitize that HTML content. The value of this field is an array of strings that correspond to the properties under system that must be sanitized. In the example above, that would be system.description.long, and system.description.short.

`htmlFields``system``system.description.long``system.description.short`
#### filePathFields

`filePathFields`If your Module stores media content, it must either include a filePathFields definition, or it must expressly forbid base64-encoded content from being stored in that field. Storing base64-encoded content inside the Document itself unnecessarily bloats the size of the Document and the database it is stored in. Using a filePathFields definition will allow the server to automatically extract the base64-encoded data and save it as a separate file that is accessible in the World.

`filePathFields``filePathFields`The value of this field is an object with keys that correspond to the properties under system that should have base64-encoded data extracted from them. The values should be an array of category name strings that correspond to the categories of media that are allowed in that field. See FilePathField for more information, and FILE_CATEGORIES for the list of available categories.

`system`
### DataModel Definitions

The second part of implementing custom sub-types is defining DataModels that will be used to represent the data that the sub-type requires. These will be instantiated under the Document's system property, in much the same way that a system-provided sub-type would have its data represented.

`DataModel``system`This example will cover a DataModel definition for the custom quest sub-type, but for more detailed information on Data Models themselves, please see this article and view the documentation here.

`DataModel``quest`
#### The DataModel

```javascript
class QuestModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.SchemaField({
        long: new fields.HTMLField({required: false, blank: true}),
        short: new fields.HTMLField({required: false, blank: true})
      }),
      img: new fields.FilePathField({required: false, categories: ["IMAGE"]}),
      steps: new fields.ArrayField(new fields.StringField({blank: true}))
    };
  }

  prepareDerivedData() {
    this.nSteps = this.steps.length;
  }
}
```

`class QuestModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.SchemaField({
        long: new fields.HTMLField({required: false, blank: true}),
        short: new fields.HTMLField({required: false, blank: true})
      }),
      img: new fields.FilePathField({required: false, categories: ["IMAGE"]}),
      steps: new fields.ArrayField(new fields.StringField({blank: true}))
    };
  }

  prepareDerivedData() {
    this.nSteps = this.steps.length;
  }
}`The TypeDataModel is a special subclass of the base DataModel class and should be used when defining DataModels that represent type-specific data. See here for more information.

`TypeDataModel``DataModel``DataModel`Subclasses of TypeDataModel may override the abstract prepareBaseData and prepareDerivedData methods. These methods will be called before those of the base Document, allowing for any type-specific preparation logic to be executed before the more general Document preparation logic runs.

`TypeDataModel``prepareBaseData``prepareDerivedData`
#### Registering the DataModel

Registering the DataModel can be performed in an init Hook.

`init````javascript
Hooks.on("init", () => {
  Object.assign(CONFIG.JournalEntryPage.dataModels, {
    "quest-pages.quest": QuestModel
  });
});
```

`Hooks.on("init", () => {
  Object.assign(CONFIG.JournalEntryPage.dataModels, {
    "quest-pages.quest": QuestModel
  });
});`This example shows how the "quest" type that was defined as part of documentTypes in the Module manifest is automatically prefixed with the Module's ID when made available on the client. The type of "quest-pages.quest" is what will be stored in the type field of any Document that uses this custom sub-type.

`"quest"``documentTypes``"quest-pages.quest"``type`
### Sheet Definitions

When creating a Module-provided custom sub-type, it is commonly required to also provide a special sheet to be used to edit and interact with Documents using the custom sub-type. This is not the focus of this article, but for the sake of completion we will cover a brief example of how to do so here.


#### The Sheet Class

```javascript
class QuestSheet extends JournalTextPageSheet {
  get template() {
    return `modules/quest-pages/templates/quest-sheet-${this.isEditable ? "edit" : "view"}.html`;
  }

  async getData(options={}) {
    const context = await super.getData(options);
    context.description = {
      long: await TextEditor.enrichHTML(this.object.system.description.long, {
        async: true,
        secrets: this.object.isOwner,
        relativeTo: this.object
      }),
      short: await TextEditor.enrichHTML(this.object.system.description.short, {
        async: true,
        secrets: this.object.isOwner,
        relativeTo: this.object
      })
    };
    return context;
  }
}
```

`class QuestSheet extends JournalTextPageSheet {
  get template() {
    return `modules/quest-pages/templates/quest-sheet-${this.isEditable ? "edit" : "view"}.html`;
  }

  async getData(options={}) {
    const context = await super.getData(options);
    context.description = {
      long: await TextEditor.enrichHTML(this.object.system.description.long, {
        async: true,
        secrets: this.object.isOwner,
        relativeTo: this.object
      }),
      short: await TextEditor.enrichHTML(this.object.system.description.short, {
        async: true,
        secrets: this.object.isOwner,
        relativeTo: this.object
      })
    };
    return context;
  }
}`
#### Registering the Sheet

Registering the Sheet can be performed in an init Hook, or at the top-level module scope, whichever is more convenient.

`init````javascript
Hooks.on("init", () => {
  DocumentSheetConfig.registerSheet(JournalEntryPage, "quest-pages", QuestSheet, {
    types: ["quest-pages.quest"],
    makeDefault: true
  });
});
```

`Hooks.on("init", () => {
  DocumentSheetConfig.registerSheet(JournalEntryPage, "quest-pages", QuestSheet, {
    types: ["quest-pages.quest"],
    makeDefault: true
  });
});`
### Localizing Sub-Types

Once the sub-types have been declared and are available in the World, you will need to provide translation strings to give those types human-readable names in the UI. This is done through the normal inclusion of language files in the module.json (see above). The translation key is then formatted in a specific way to allow the core software to use it in the appropriate places in the UI.

`module.json`
#### en.json

`en.json````javascript
{
  "TYPES.JournalEntryPage.quest-pages.quest": "Quest"
}
```

`{
  "TYPES.JournalEntryPage.quest-pages.quest": "Quest"
}`
## Using Sub-Types


### System Compatibility

While the core Foundry VTT API provides this mechanism for Modules to provide their own sub-types, there is no guarantee that existing Systems, which typically have full control of all available sub-types, will accommodate any given Module's additional sub-types. You might expect errors during data preparation, or when performing certain operations where the System either does not recognise the Document's sub-type, or assumes certain data exists where it does not for your Module's sub-type.

For Actor or Item sub-types, for example, it is recommended that you only attempt to provide support for a single System, and that you update the relationships field of your Module's manifest appropriately to represent this. For Journal Pages, this is less likely to be an issue.

`relationships`
### Module Deactivation

When a user deactivates a Module that provides custom sub-types, those sub-types are no longer valid in the World. This means that all Documents that use those sub-types will become invalid, and disappear from view. The core software will provide a suitable warning to a user that wishes to disable a Module that provides sub-types for Documents in their world, but it is still a significant responsibility to provide these sub-types. If your Module's functionality could be provided in a more lightweight and less disruptive way by use of an alternative sheet, and/or with supplementary flags for data, it is recommended that you pursue those options rather than reaching for custom sub-types.

`flags`Consider providing functionality by which users may convert any Documents they have that are using sub-types your Module provides into System-provided sub-types, prior to deactivating your Module.

Reactivating the Module will allow any previously-hidden and invalid Documents that were using your Module's sub-types to become visible and interactable again.


### Working with Sub-Types

In order to make working with sub-types, and detecting module-provided sub-types more ergonomic, there are a couple of useful API methods available.

Firstly, the modelProvider method can be called on the system DataModel, and will return either a System, or Module instance, depending on which is providing the sub-type used by the Document. If the Document has no sub-type, or the sub-type is provided by the core, it will return null.

`modelProvider``system``DataModel``System``Module``null````javascript
// This returns either null, or a System or Module instance.
doc.system.modelProvider;
```

`// This returns either null, or a System or Module instance.
doc.system.modelProvider;`Secondly, Document.hasTypeData can be used to determine if a particular Document type is even capable of hosting sub-types.

`Document.hasTypeData````javascript
Actor.hasTypeData; // true
Playlist.hasTypeData; // false
```

`Actor.hasTypeData; // true
Playlist.hasTypeData; // false`