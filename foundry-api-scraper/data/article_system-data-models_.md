# Introduction to System Data Models | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/system-data-models/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Introduction to System Data Models


## 

System Data Models are powerful tools for defining data schema, granting system developers access to the Data Model functionality that is used throughout Foundry Virtual Tabletop for their own System-defined Document sub-types.

This article focuses on how to utilize System Data Models for a Game System in Foundry Virtual Tabletop. For more information on Data Models themselves, please refer to the following resources:

- This article introducing the concept of Data Models (written when this architecture was first added)
- The DataModel API Documentation


## Defining a System Data Model

Data Models themselves are lightweight classes that can be defined very simply. Here we will construct a simple Data Model for a game system's character Actor.

`character`
### The System Manifest

The first part of implementing a System Data Model is to include a documentTypes definition in the system.json manifest. This makes the server aware of these custom sub-types so that they are not discarded as invalid Documents.

`documentTypes``system.json````javascript
{
  "documentTypes": {
    "Actor": {
      "character": {
        "htmlFields": ["biography"],
        "filePathFields": {
          "crest": ["IMAGE"]
        }
      }
    }
  }
}
```

`{
  "documentTypes": {
    "Actor": {
      "character": {
        "htmlFields": ["biography"],
        "filePathFields": {
          "crest": ["IMAGE"]
        }
      }
    }
  }
}`The documentTypes field is an object of Document types. Those Document type objects then contain further objects with keys that correspond to the sub-types that your System provides.

`documentTypes`The htmlFields and filePathFields are optional, and are related to the data sanitization that your System might require. They can be omitted entirely if the data your System uses has no need of sanitization. Here is how the documentTypes field would look in that case:

`htmlFields``filePathFields``documentTypes````javascript
{
  "documentTypes": {
    "Actor": {
      "character": {}
    }
  }
}
```

`{
  "documentTypes": {
    "Actor": {
      "character": {}
    }
  }
}`
#### htmlFields

`htmlFields`If your System stores and renders user-provided HTML content, it must include an htmlFields definition so that the server can appropriately sanitize that HTML content. The value of this field is an array of strings that correspond to the properties under system that must be sanitized. In the example above, that would be system.biography.

`htmlFields``system``system.biography`
#### filePathFields

`filePathFields`If your System stores media content, it must either include a filePathFields definition, or it must expressly forbid base64-encoded content from being stored in that field. Storing base64-encoded content inside the Document itself unnecessarily bloats the size of the Document and the database it is stored in. Using a filePathFields definition will allow the server to automatically extract the base64-encoded data and save it as a separate file that is accessible in the World.

`filePathFields``filePathFields`The value of this field is an object with keys that correspond to the properties under system that should have base64-encoded data extracted from them. The values should be an array of category name strings that correspond to the categories of media that are allowed in that field. See FilePathField for more information, and FILE_CATEGORIES for the list of available categories.

`system`
### DataModel Definitions

The second part of implementing System Data Models is defining DataModels that will be used to represent the data that the sub-type requires. These will be instantiated under the Document's system property.

`DataModel``system````javascript
const {
  HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      biography: new HTMLField(),
      health: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
        min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      proficiencies: new SchemaField({
        weapons: new ArrayField(new StringField()),
        skills: new ArrayField(new StringField())
      }),
      crest: new FilePathField({ required: false, categories: ["IMAGE"] }),
      xp: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
    };
  }
}
```

`const {
  HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      biography: new HTMLField(),
      health: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
        min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      proficiencies: new SchemaField({
        weapons: new ArrayField(new StringField()),
        skills: new ArrayField(new StringField())
      }),
      crest: new FilePathField({ required: false, categories: ["IMAGE"] }),
      xp: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
    };
  }
}`The TypeDataModel is a special subclass of the base DataModel class and should always be used when defining DataModels that represent type-specific data, which is the case here with our System Data Model. See here for more information.

`TypeDataModel``DataModel``DataModel`
## Registering a System Data Model

Once the Data Model is defined, the core API can be made aware of it and will automatically apply it to the system field of any registered types.

`system`The following code snippet will register the example CharacterData model to be automatically applied as the system data for every Actor of the character type.

`CharacterData``system``character````javascript
Hooks.on("init", () => {
  CONFIG.Actor.dataModels.character = CharacterData;
});
```

`Hooks.on("init", () => {
  CONFIG.Actor.dataModels.character = CharacterData;
});`
## Migrations

Migrations and data coercion can be performed before your Data Model is instantiated, allowing legacy data to be converted into a format that the current version of your System understands. Migrations are run when the source data is first retrieved from disk, as well as run on any update deltas before they are applied to the Document.

As an example, we have a migration that changes the proficiencies format. We migrate from representing the Boomerang proficiency with a terse 3-letter string "bmr" to the more human-readable string "boomerang".

`"bmr"``"boomerang"````javascript
class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }

  /**
   * Migrate source data from some prior format into a new specification.
   * The source parameter is either original data retrieved from disk or provided by an update operation.
   * @inheritDoc
   */
  static migrateData(source) {
    const proficiencies = source.proficiencies ?? {};
    if ( "weapons" in proficiencies ) {
      proficiencies.weapons = proficiencies.weapons.map(weapon => {
        return weapon === "bmr" ? "boomerang" : weapon;
      });
    }
    return super.migrateData(source);
  }
}
```

`class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }

  /**
   * Migrate source data from some prior format into a new specification.
   * The source parameter is either original data retrieved from disk or provided by an update operation.
   * @inheritDoc
   */
  static migrateData(source) {
    const proficiencies = source.proficiencies ?? {};
    if ( "weapons" in proficiencies ) {
      proficiencies.weapons = proficiencies.weapons.map(weapon => {
        return weapon === "bmr" ? "boomerang" : weapon;
      });
    }
    return super.migrateData(source);
  }
}`
## Enhancing a System Data Model

System Data Models can have methods added to them that encapsulate logic relevant to the particular system-specific type of Document that they represent. This allows you to move logic out of the Document implementation and house it in a location that is much more specific to its functionality. The parent Document instance is accessible from within the Type Data Model's instance methods via this.parent, allowing for more complex interactions and logic.

`this.parent````javascript
class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }
  static migrateData() { // Omitted for brevity. }

  /**
   * Determine whether the character is dead.
   * @type {boolean}
   */
  get dead() {
    const invulnerable = CONFIG.specialStatusEffects.INVULNERABLE;
    if ( this.parent.statuses.has("invulnerable") ) return false;
    return this.health.value <= this.health.min;
  }
}
```

`class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }
  static migrateData() { // Omitted for brevity. }

  /**
   * Determine whether the character is dead.
   * @type {boolean}
   */
  get dead() {
    const invulnerable = CONFIG.specialStatusEffects.INVULNERABLE;
    if ( this.parent.statuses.has("invulnerable") ) return false;
    return this.health.value <= this.health.min;
  }
}`The defined dead property could then be accessed on any Actor document of the character type as follows:

`dead````javascript
const actor = await Actor.implementation.create({
  name: "Test",
  type: "character"
});
console.log(actor.system.dead); // false
await actor.update({ "system.health.value": -10 });
console.log(actor.system.dead); // true
```

`const actor = await Actor.implementation.create({
  name: "Test",
  type: "character"
});
console.log(actor.system.dead); // false
await actor.update({ "system.health.value": -10 });
console.log(actor.system.dead); // true`
## Data Preparation

In addition to adding new methods and properties to the Data Models, subclasses of TypeDataModel may also override the prepareBaseData and prepareDerivedData methods. These methods are run during normal Document preparation and allow for automatically calculating additional values that are specific to the sub-type whenever the Document is updated.

`TypeDataModel``prepareBaseData``prepareDerivedData`As an example, we calculate the Actor's level based on its XP value, and make sure that its HP can never go above its maximum.

```javascript
class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }
  static migrateData() { // Omitted for brevity. }
  get dead() { // Omitted for brevity. }

  /** @inheritDoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    // Make sure HP cannot exceed its maximum.
    this.health.value = Math.min(this.health.value, this.health.max);

    // Derive level from XP.
    this.level = Math.floor(this.xp / 100);
  }
}
```

`class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() { // Omitted for brevity. }
  static migrateData() { // Omitted for brevity. }
  get dead() { // Omitted for brevity. }

  /** @inheritDoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    // Make sure HP cannot exceed its maximum.
    this.health.value = Math.min(this.health.value, this.health.max);

    // Derive level from XP.
    this.level = Math.floor(this.xp / 100);
  }
}`
## Token Resources

When using a System Data Model for your system data, you can modify the CONFIG.Actor.trackableAttributes configuration variable in order to define which values in your model are eligible for use as Token resources. The below example shows how to configure one resource as a bar attribute, and another as a value attribute.

`system``CONFIG.Actor.trackableAttributes````javascript
Hooks.on("init", () => {
  CONFIG.Actor.trackableAttributes = {
    character: {
      bar: ["health"],
      value: ["xp"]
    }
  };
});
```

`Hooks.on("init", () => {
  CONFIG.Actor.trackableAttributes = {
    character: {
      bar: ["health"],
      value: ["xp"]
    }
  };
});`For bar attributes, the property supplied must point to some object with both value and max properties, and these properties must both be numbers. For value attributes, the property supplied must simply point to any number. The attributes do not need to exist in your Type Data Model, they can be properties that are later derived as part of data preparation. If the attribute does not exist in the Type Data Model or is not a NumberField, then it will not be editable in the Token HUD.

`value``max``NumberField`If your System makes use of Data Models, but you would rather have the core software infer the tracked attributes from your schema, you may opt to not configure any trackableAttributes. Bear in mind that the core API does not know the semantics of any custom DataFields you may be making use of in your Type Data Model, and so will not be able to inspect it for potential trackable attributes. Additionally, it will be unable to include any properties derived during data preparation, as they will not have corresponding fields in your schema. If you want to tailor the list of trackable attributes in those cases, you must override TokenDocument.getTrackedAttributes yourself. In the majority of cases, we expect that using the trackableAttributes configuration should be a lot simpler.

`trackableAttributes``DataField``TokenDocument.getTrackedAttributes``trackableAttributes`