# hookEvents | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/modules/hookEvents.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- hookEvents


# Module hookEvents

A module which provides documentation for the various hook events which are dispatched throughout the Foundry Virtual
Tabletop client-side software. Packages can respond to these events by using the
Hooks.on method.

`Hooks.on`Systems and modules can add their own hooks by using Hooks.call or
Hooks.callAll; This page is only a listing of the hooks called
by core. See package pages for information about the hooks they provide.

`Hooks.call``Hooks.callAll`
#### See

Hooks - The class responsible for managing hook events


## Once Hooks

Every time a client connects to the server, either from logging in or refreshing the page, it always goes through the
following hooks in order and never calls them again. Other hooks may fire during this time, such as canvas drawing
hooks, but those other hooks will also fire when relevant changes happen in world (such as switching scenes).

- init
- i18nInit
- setup
- initializeDynamicTokenRingConfig
- initializeCombatConfiguration
- canvasConfig (if the Canvas is enabled)
- ready


## Generic Hooks

Many of the commonly used hooks in Foundry are "generic", which is to say the actual name of the hook is dynamic
based on the class that is calling the hook. While looking for the appropriate hook to use for your code, keep
these in mind as possible candidates.

- renderApplicationV1
- renderApplicationV2
- preCreateDocument
- createDocument
- preUpdateDocument
- updateDocument
- preDeleteDocument
- deleteDocument


## Cancellable Hooks

Some hooks, such as preCreateDocument, can be cancelled by returning an explicit false. These hooks
mention this capability and note that they return boolean | void. Hooks are never awaited, which means that an
async function will always return a Promise, which is not a boolean. This is an important limitation to keep in
mind while working with these kinds of hooks.

`false``boolean | void`
## Interfaces


## Events - AVSettings


## Events - ActiveEffect


## Events - Actor


## Events - ActorSheet


## Events - AdventureImporter


## Events - ApplicationV1


## Events - ApplicationV2


## Events - AudioHelper


## Events - Canvas


## Events - CanvasGroup


## Events - CanvasLayer


## Events - CanvasVisibility


## Events - Cards


## Events - ChatBubbles


## Events - ChatLog


## Events - ChatMessage


## Events - ClientSettings


## Events - Combat


## Events - CompendiumCollection


## Events - Document


## Events - EffectsCanvasGroup


## Events - EnvironmentCanvasGroup


## Events - Game


## Events - Hotbar


## Events - InteractionLayer


## Events - Note


## Events - PlaceableObject


## Events - ProseMirrorEditor


## Events - ProseMirrorMenu


## Events - RenderedEffectSource


## Events - RollTableSheet


## Events - SceneControls


## Events - SceneNavigation


## Events - Sidebar


## Events - Token


## Events - TokenDocument


## Events - TokenRingConfig


## Events - Users


## Events - WeatherEffects


### Settings

- Protected
- Inherited
- Internal


### On This Page

