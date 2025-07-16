# Release 9.238 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.238

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.238


## Version 9 Stable


##### December 20, 2021


## Foundry Virtual Tabletop - Version 9 Stable Release Notes


## Important Message from the Foundry VTT Developers

BEFORE UPDATING: If you read nothing else within these update notes, please read this section.

While this is the first release marked as Stable for V9, it does not guarantee the game worlds you have prepared will be 100% ready for update. While a  majority of game systems are V9 ready, there are some that have not updated and will not function.


### Recommended Process for Updating

When updating to a new major version of Foundry Virtual Tabletop, please follow these specific steps:

- Assess whether now is the time to update for your game worlds by checking if your game systems are compatible with V9. (This spreadsheet will help.)
- Perform a complete backup of your user data. (Follow this handy guide.)
- Make sure the backup you have created is stored somewhere safe. DO NOT store backup data in the user data folder. A seperate USB flashdrive is strongly recommended.
- To benefit from the new Electron version and some specific changes to the software itself, we STRONGLY recommend doing an uninstallation of Foundry VTT and reinstalling compeletely instead of using the in-app updater for this version.
- Once you have updated the core software, before launching your game worlds, check for updates to your game systems and modules which will now be available.


### About Add-On Modules

Due to the changes implemented in Version 9, if you use any modules which change or alter:

- Canvas Lighting
- Token Vision
- Fog of War
- Card Support
- Keybindings

You will want to ensure those modules are disabled for your game worlds before attempting to play. We recommend testing the new core functionality added in V9 and then make a decision about which modules you want to re-enable to improve your own experience.


### Troubleshooting the V9 Update

If you experience any issues, these quick steps and resources should help you resolve them in the most efficient manner:


#### Caching

There was a known issue with caching which causes some errors and UI oddities which can be addressed quickly and immediately without support asssistance. If a simple CTRL+F5 (CMD+SHIFT+F5 for Mac) does not resolve the issue:

- Open the DevTools (F12 or Ctrl+Shift+I)
- Click DevTools settings ( )
- Under the Network heading check "Disable cache (while Devtools is open)"
- While DevTools open, refresh your Foundry VTT using the F5 key.

`Network`
#### Disable Modules

If you are able to launch your world and have tried the DevTools cache fix, but are still experiencing issues, please disable all modules for your world and see if the issue is resolved. This will determine if the issue is module-related or originating from a core software bug.


#### Troubleshooting Specific Issues

- If neither of the above solutions solve your issue, you will find a new Support button on the settings tab of the sidebar. This will provide you with important data that can be conveniently copy-pasted to our community discord for assistance.
- You can access the debug and error logs for your server within the Logs folder of your user data directory. These will provide important troubleshooting information as well.
- You can access a (temporary) special discord channel set up for troubleshooting update issues here.


## Version 9 Stable Release

It has been a long road to get here, but we're extremely pleased and proud to welcome you all to Foundry Virtual Tabletop Stable Release Version 9! This is the first stable release in the Version 9 series of updates, and is a major version update which brings to fruition the hard work of several months and over five hundred different gitlab issues. If you have not already read the very important section that opens these patch notes above, PLEASE take the time to read it now.


## Version 9 Update Summary

It has been an absolutely awesome journey as we've moved from our last stable version to the new Version 9 stable release. A lot has changed and for those of you who haven't been actively following the development of V9 we thought it would be worthwhile to offer a summary of all the major changes that have been brought forward. This is hardly comprehensive, so if you want to get a full picture of the more than 500 changes we brought in during Version 9, you should read the update notes:

- V9 Prototype 1
- V9 Prototype 2
- V9 Development 1
- V9 Development 2
- V9 Testing 1
- V9 Testing 2
- V9 Testing 3


### Lighting and Vision Performance

One of the primary features for Version 9, the new Adaptive Lighting system, replaces the previous multiplicative method of light blending with a new one which defers the light source rendering until the canvas has rendered all other layers. By doing this deferred lighting pass, the light is able to adapt to the color of what is below it, allowing multiple light sources of differing colors to smoothly blend together. The result is that light sources now provide a much more natural appearance of light as it interacts with tokens and map textures.

In addition, the lighting and vision rendering methods we used previously received a substantial rework. The way vision was previously calculated had a number of issues which could result in cases where tokens might be able to see through distant walls in part or in full, among other edge-case bugs that were far from ideal. The lighting and vision engine now uses a new algorithmic approach that reduces the amount of processing overhead for line of sight polygons, wall detection and collision, fog of war rendering, and overhead tile occlusion.

Effectively, Foundry Virtual Tabletop Version 9 offers a visual experience which looks better, perform faster, and is more accurate than ever before.


#### New Lighting Options

While we were tinkering with the lighting engine to implement Adaptive Lighting, we were able to implement some new lighting animations and settings, bringing a new level of customization to light sources. In addition to the new light animations listed below, Animation Speed can now be set to 0 to stop the animation but provide a light source with the appearance of the effect, and a Reverse Direction toggle allows you to invert the behaviour of the animation. Light Sources can now be set to a number of Coloration Techniques which drastically alter the way a light appears, and three new range sliders allow you to configure the saturation, contrast, and background shadow levels for that light source. We have also separated settings for whether a light is constrained by walls, whether it provides vision, and whether it it uses a smooth "Gradual Illumination" appearance or not. Light sources now also have a luminosity setting to allow easier configuration of negative values, for creating "Darkness" sources.

Added light animations:

- Vortex: This animation effect creates a swirling tornado texture, which rotates around the center of the light source. Animation speed governs how quickly the vortex rotates, and animation intensity governs how tightly the vortex coils around the center of the light radius.
- Bewitching Wave: This animation effect creates concentric circles of bright light that move out from the center of the light source much like Pulsing Wave, but introduces ripples and warping effects into these rings. Animation speed governs how quickly the rings of light move, and animation intensity governs the size and frequency at which new rings are created and how pronounced the warping effect on the ripples is.
- Swirling Rainbow: This animation effect creates a swirling spiral around the light source which undergoes color-shifting like the chroma animations shader. Animation speed governs how quickly the vortex rotates around the light source, and animation intensity governs how vibrant the color-shifting effect is.
- Radial Rainbow: This animation effect creates concentric circles of color-shifting light that move out from the center of the light source much like Pulsing Wave. Animation speed governs how quickly the rings of light move, and animation intensity governs a mixture of ring size and frequency along with the intensity of color change on the rings as they move.
- Fairy Light: This animation effect is a mixture of radial rainbow and ghostly light, creating a swirling water-like ripple of color changing light. Animation speed governs how fast the shader effect ripples and animation intensity governs how visible the ripples are, how strongly lit they are, and how pronounced the color swirl is within them.

Vortex: This animation effect creates a swirling tornado texture, which rotates around the center of the light source. Animation speed governs how quickly the vortex rotates, and animation intensity governs how tightly the vortex coils around the center of the light radius.

Bewitching Wave: This animation effect creates concentric circles of bright light that move out from the center of the light source much like Pulsing Wave, but introduces ripples and warping effects into these rings. Animation speed governs how quickly the rings of light move, and animation intensity governs the size and frequency at which new rings are created and how pronounced the warping effect on the ripples is.

Swirling Rainbow: This animation effect creates a swirling spiral around the light source which undergoes color-shifting like the chroma animations shader. Animation speed governs how quickly the vortex rotates around the light source, and animation intensity governs how vibrant the color-shifting effect is.

Radial Rainbow: This animation effect creates concentric circles of color-shifting light that move out from the center of the light source much like Pulsing Wave. Animation speed governs how quickly the rings of light move, and animation intensity governs a mixture of ring size and frequency along with the intensity of color change on the rings as they move.

Fairy Light: This animation effect is a mixture of radial rainbow and ghostly light, creating a swirling water-like ripple of color changing light. Animation speed governs how fast the shader effect ripples and animation intensity governs how visible the ripples are, how strongly lit they are, and how pronounced the color swirl is within them.


#### Special Thanks

Some of our improvements in V9 were motivated and assisted by the valuable contributions of members of our community whose help reduced the amount of effort required in order to accomplish these improvements. In particular, we would like to thank:

- SecretFire for help creating the V9 adaptive lighting methodology.
- Caewok for assistance developing the new ClockwiseSweepPolygon algorithm.
- dev7355608 for assistance resolving rendering issues during the V9 testing cycle.
- Stäbchenfisch for inspiring improvements to our polygon computation efficiency.
- Norc for coalescing valuable input and feedback regarding Cards functionality on behalf of the League of Extraordinary Foundry VTT Developers

`ClockwiseSweepPolygon`
### Card Support

Version 9 brings support for card games to Foundry VTT. We have implemented a system-agnostic method for handling Card Decks, Card Hands, and Card Piles which can be assigned to users in your game. The Cards system brings with it everything you need to play a functional (if rudimentary) card game using the FVTT UI. More importantly, Card Support empowers game system and module developers to build upon it and offer support for a variety of card games. Card decks, hands, and piles can be created from the Cards sidebar and include support for most of the common operations a card game might require: dealing, shuffling, playing or passing cards amongst your players. We also took the time to prepare and package two default playing card decks, including custom card art for both a dark theme and a light theme.


### Performance Changes

While we believe that Foundry VTT is already one of the most performance-friendly virtual tabletops for its feature set, we also constantly strive to improve performance wherever we are able. It wasn't enough for us to improve the lighting engine and offer a more performant, more accurate experience. We also recognized a few avenues where we could improve the overall performance for game worlds. While the performance improvements might not be enough to lower our already low minimum requirements, many systems at or slightly above those requirements will find V9 eases some of the burden on computers that may have been struggling to keep up. Between the lighting overhaul, changes to polygon computation for vision calculation, performance improvements with regard to compendium data indexing, and many more small changes in data handling, the application should feel a little more smooth overall.

A new "performance mode" setting available in the configuration menu automatically determines (by checking some diagnostic data) whether you are operating on a Low, Medium, or High performance computer. Those on high-performance gaming computers who wish to uncap their framerates and achieve top level performance can do so by using the Maximum performance setting. These apply pre-configured values to the internal settings of Foundry VTT to optimize the experience for your particular hardware.


### Keybindings

The new Keybindings system brings ability for users for rebind common controls. Inspired in part by the work of the DF Hotkeys and KeybindLib module libraries that provided frameworks for modules to offer custom hotkeys, this brings a whole new level of customization to the user interface. The new Keybindings menu allows you to reconfigure core Keybindings, allows module developers to create hotkeys for their modules, and even allows the binding of functions to a gamepad. While you won't be able to use a gamepad to navigate menus, other actions such as moving a token or zooming in and out can be bound and used.

`DF Hotkeys``KeybindLib`At this time we have restricted the ability to bind mouse input actions for a number of reasons, though extending some mouse functions for rebinding is planned for a future update.


### Interface Improvements

While we were working on bringing in new features, we also took the time to add some quality of life interface improvements in a number of key areas. You can now change the font size for all windows using a slider from the settings menu. In addition, module developers will find that a number of core CSS declarations have been made into variables, making it much easier to re-theme parts of the UI. For better ease of use, we have shifted a number of configuration menus to use a new tabbed structure, grouping similar settings together (for the Scenes configuration window and light source configuration windows in particular). We also shifted a number of HUD elements into particular HTML sections, making it possible to display them a little better on smaller monitors. The token HUD has shifted to a higher layer on the canvas, meaning that most of the token functions are no longer shrouded by fog of war or walls.


### Audio Features

Drag and drop support has been implemented for most playlist actions, allowing you to drag playlist sounds to place ambient sound sources on the canvas, create dynamic links to preview them for yourself as a GM, to move a track between playlists, or to reorder a playlist (if it is set to manual sorting). This long-standing feature request is one we had hoped to complete in V8 but due to complications didn't make it, so we are extremely pleased to be able to address it in V9.


## New Features (Since V9 Testing 3)


### Interface and Applications

- DocumentSheet windows now displays a configurable Sheet button in the header in cases where the Document has more than one registered sheet. (6316)

`DocumentSheet`
### Dice and Cards

- Visibility of chat messages for card actions now use the default roll mode in the chat tab. (6320)
- Card Stacks can now return all cards from a pile back to the deck they originated from. (6327)
- Using the reset button for a Card deck now uses a confirmation dialog to prevent unintended resets. (6328)


## API Improvements


### Interface and Applications

- The limitation on the number of configurable Keybindings has been removed. (6349)
- It is now possible to have a Keybind Action with no default set, allowing community developers to define actions with the intention that users will set it to a key of their choosing. (6314)
- game.keyboard.isCtrl() (deprecated) is once again a class method to maintain backwards compatibility.(6348)

`game.keyboard.isCtrl()`
### Dice and Cards

- Cards API functions which create chat messages now support a chatNotification parameter that, if set to false, will suppress chat messages for that action. (6321)

`chatNotification`
## Documentation Improvements

We have reorganized our API documentation. As a result, the following URLs are now available:

- https://foundryvtt.com/api/v8 - API documentation for Foundry VTT Version 8 (0.8.9)
- https://foundryvtt.com/api/v9 - API documentation for Foundry VTT Version 9
- https://foundryvtt.com/api - API documentation for Foundry VTT Current Stable Version (Version 9)

- JSDoc strings for displayCount and folder within CardsData have been added. (6351)
- JSDoc strings for the properties suit, value and back in CardData have been added. (6352)
- Removed a number of duplicate JSDoc property definitions from KeyboardManager. (6346)

`displayCount``folder``CardsData``suit``value``back``CardData``KeyboardManager`
## Localization Improvements

- The error message text that occurs when the software encounters a revoked license key has been clarified. (6318)
- The Title tooltip for a locked Keybinding no longer incorrectly shows "Delete Binding". (6333)

`Title`
## Bug Fixes


### Architecture and Infrastructure

- Canvas performance mode auto-detection should now correctly assigning high-end GPUs to the "High" performance mode. (6336)
- When updating an unlinked Token, the composed synthetic Actor data is now used for testing server-side permissions rather than the permissions of the base Actor document. (6338)
- The SupportDetails.getWebGLRendererInfo has been standardized to resolve an issue resulting from the deprecation of WEBGL_debug_renderer_info in Firefox. (6330)

`SupportDetails.getWebGLRendererInfo``WEBGL_debug_renderer_info`
### Documents and Data

- Errors during server-side system data migration should no longer raise an additional exception about Hooks not being defined. (6350)


### The Game Canvas

- Players should no longer be able to see map notes for a journal entry they do not have permission to view.(6342)
- The lighting background shader should no longer produce an incorrect radius computation in cases where luminosity exceeded 0.5. (6266)
- Toggling active effects for certain actors should no longer result in a SmoothGraphics error. (6319)
- SightLayer#testVisibility no longer incorrectly sets hasFOV to true if the point is not contained within the LOS polygon. (6332)
- Animated textures are no longer affected by an edge-case issue which resulted in errors when moving a tile. (6341)

`SmoothGraphics``SightLayer#testVisibility``hasFOV`
### Interface and Applications

- To prevent cases of the Alt key becoming 'stuck' when alt-tabbing, an AltLeft "up" keypress is now emulated when the window loses focus. (6329)
- Input Method Editor (IME) for Japanese and other keyboards no longer fail to differentiate between using enter key choose IME option and enter key to send a chat message. (6299)
- A CSS issue which impacted the "Reset Defaults" button in the KeybindingConfig app has been corrected. (6313)
- The Keybinding UI now correctly saves all pending edits rather than just the first. (6315)
- The TokenConfig sheet should now have an editable sheet configuration. (6322)
- The last Keybinding for an editable Keybinding can now be deleted. (6334)
- Deleting Keybindings for a key which has both editable and non-editable keys no longer incorrectly creates duplicate entries. (6335)
- Gamepad button presses are now correctly emulated as keyboard events for the purposes of assigning Keybinding hotkeys. (6337)
- Registering a document sheet after the "init" Hook no longer fails to set the default sheet. (6340)
- Creating a custom Keybinding for a modifier key (like AltLeft), no longer results in onUp events to never fire for that key. (6344)
- Engaging modifier keys which are neither required nor optional no longer blocks the onUp workflow from occuring for a keybind which is currently active. (6345)

`KeybindingConfig``TokenConfig``onUp``onUp`