# Languages and Localization | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/localization/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Languages and Localization


## 

A common task when developing modules or game systems is providing the ability for your work to be translated into different languages for different users. Localization tools are a mechanism for defining strings in your interfaces and content which can be translated using the dictionary of translations available for a chosen language. It is not the expectation of the developer to provide translations for all languages, but providing the opportunity for localization is a nice addition for any system or module.


## Including Translations with a System or Module

System, Module, and World manifest files can include an array of languages which provide translation files as part of that package. An example entry in the languages array is the following.

`languages````javascript
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
]`The elements of a language entry are defined as follows:

A language code in lower-case letters, for example "en" for English. Seehttps://en.wikipedia.org/wiki/List_of_ISO_639-2_codes

The formal and readable name for the language, for example "English".

A path relative to the root directory of the manifest where localization strings are provided in JSON format.


## Translation File Structure

Each translation file is a JSON object where the keys represent string identifiers which should be translated and the values represent the translation in the language of the file. It is recommended to namespace the translation strings defined by your module or system to help ensure that all localization strings remain unique across all modules and systems. For example, a basic English localization file included in the D&D5E system might look like this:

```javascript
{
  "DND5E.Title": "Dungeons and Dragons 5th Edition",
  "DND5E.Abilities": "Ability Scores",
  "DND5E.Skills": "Skills",
  "DND5E.Inventory": "Inventory"
}
```

`{
  "DND5E.Title": "Dungeons and Dragons 5th Edition",
  "DND5E.Abilities": "Ability Scores",
  "DND5E.Skills": "Skills",
  "DND5E.Inventory": "Inventory"
}`When the Foundry Virtual Tabletop application is loaded, all translations provided by the core software, the game system, and all active modules are merged together to create a consolidated translation dictionary. Translations provided by the core software are loaded first, then merged with system-level translations, and lastly the translations from any active modules. As a consequence - modules may override the translation strings assigned by the core software or by the game system. When the software encounters a string which has been identified as a localization target - it will look up the correct translated value to use from the localization dictionary.


## Translating Content

You can request content to be translated in JavaScript or in a Handlebars HTML template. Which approach you use depends on what is easier for your use case, but there is little to no performance difference between the two options.


### JavaScript

In JavaScript you can use the game.i18n.localize(key) method to obtain the translated string for a given key. See the  Localization Helpers API documentation page for more details. Example usage of this approach is the following:

`game.i18n.localize(key)``key````javascript
const systemTitle = game.i18n.localize("DND5E.Title");
```

`const systemTitle = game.i18n.localize("DND5E.Title");`
### Handlebars

Alternatively, you can translate strings directly within your Handlebars HTML template by using the localize helper tag. Internally this tag simply calls the JavaScript function described above. Example usage of the HTML tag is the following:

`localize````javascript
<h1>{{localize 'DND5E.Title'}}</h1>
```

`<h1>{{localize 'DND5E.Title'}}</h1>`You can reference localization string targets using either single or double quotes, but we recommend using single quotes so that you can remain consistent in using translations inside other HTML attributes, for example:

```javascript
<img src="dnd5e/icons/header.png" title="{{localize 'DND5E.Title'}}"/>
```

`<img src="dnd5e/icons/header.png" title="{{localize 'DND5E.Title'}}"/>`