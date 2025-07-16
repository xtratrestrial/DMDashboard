# Release 12.324 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.324

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.324


## Version 12 Stable


##### May 22, 2024


## Foundry Virtual Tabletop - Version 12 Stable Release Notes

Just in time for our fourth anniversary! We are extremely proud to launch the first stable-channel release for Version 12, bringing a whole host of new features to Foundry Virtual Tabletop for our users. Version 12 contains thousands of hours of development work and is a substantial iteration on nearly every aspect of Foundry VTT. Throughout V12 we've focused on: comprehensive backend changes to key elements of the canvas, the introduction of Application V2 for future UI improvements, environmental audio and lighting, and the item chosen as a priority feature by our patrons: Scene Regions and triggered events.

With development of new features concluding in V12, we're very pleased with the changes that it brings and we hope you'll all enjoy the myriad of improvements we've made. Our next few releases will target high priority bug fixes to further round-out the stable build of V12, as we prepare for the planning phase of Version 13!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## IMPORTANT: How to Update Safely To a New Version

This update performs a data migration when worlds are launched which cannot be reversed if you do not back up your data.

- Back up your User Data. A full snapshot backup is recommended, but not required.
- Version 12 contains updates to dependent packages which require a full reinstallation, you must uninstall your existing version of Foundry VTT. Most notably, Version 12 now requires Node 18+ and Electron 29.3.3.
- Download and install the Version 12 Stable Release (Build 324). You may not update to version 12 using the in-application updater. You must reinstall using a full download from the download page.
- After launching Foundry VTT in v12, take a moment to update your Game Systems and Add-on Modules. Some systems and modules will have a V12 compatible version available, some will not.
- Launch your World. Be aware that in order to protect your data, all modules will initially be disabled during the first launch of a World in Version 12. When you click launch, a prompt will remind you that this is the last opportunity to save your data if you have not already performed a backup!
- Take some time to test your World and make sure everything is in working order before re-enabling any modules.
- Carefully re-enable a few Modules at a time, choosing ones you view as most essential. Take the time to test your World in-between, just to make sure nothing has drastically changed.
- If everything has gone well, congratulations! Enjoy all the new features Version 12 brings! In the event you need to revert to V11 you can restore the backup to stored during step 1.


## V12 Comprehensive Highlights

As is tradition, the highlights section for the first stable release in a new Version showcase some of the biggest changes introduced in V12 and we hope our users are as excited to read through them as we are to write them. While we try to be as thorough as possible, this kind of summary can only scratch the surface of the extremely long list of changes that come from nearly a year of development, so we strongly encourage our users who want a more in-depth view of V12 features to read through the release notes for each update that we have produced during the V12 development cycle:

- Version 12 Prototype 1
- Version 12 Prototype 2
- Version 12 API Development 1
- Version 12 API Development 2
- Version 12 Testing 1
- Version 12 Testing 2
- Version 12 Testing 3
- Version 12 Testing 4

In order to lay some groundwork for future development, V12 brings some significant changes to several aspects of how we render the game Canvas and its various layers. While many of the improvements here are architectural and aren't very user-facing, there are some direct benefits that users can expect to notice in their games.

Perhaps the most powerful feature suite included in V12, Scene Regions provide a method for GMs to configure specific areas of a Scene with explicitly defined Behaviors that are triggered by particular Events. Scene Regions add an extremely customizable set of tools which have nearly limitless functionality, and we can't wait to see what unique and interesting automation our community implements using them.

It is important to recognize that a Region is not simply one Shape, but each region is more of a "group" of Shapes which all share the same Behaviors. Each Region can have multiple Behaviors, each triggered by one or more Events.

The available built-in Behaviors can be leveraged to accomplish things that we have often heard users wish for:

`event.data`In the hands of even a completely inexperienced coder, Scene Regions can be leveraged to create truly powerful automations.

If you want to see some of these in action, there will be examples in the Scene Regions article, and we're already racing to add support for Scene Regions to some of our first-party Premium Content. We look forward to adding additional functionality to Scene Regions in the future, but we hope you'll find the toolkit that we've provided to be more than adequate for all of your scene-automating needs!

As part of our efforts to modernize the Foundry VTT user interface, we took the opportunity to lay some groundwork for future changes by implementing Application V2. A few UI elements, such as the User Configuration dialog, have been now been updated to use Application V2 already.

While this is mostly something that is immediately exciting a limited number of community developers, it is an important upgrade because almost every "window" you open within Foundry VTT is an Application. Users can look forward to many upcoming UI improvements which leverage Application V2 in the future!

Additional details: A key feature of Application V2 is that it improves multi-user editing of a single window. As a severe oversimplification, the new Application window can be portioned up into discrete parts, allowing data to be updated on one part of a sheet without losing the state of other parts of the Data. There are many different frameworks (Svelte, Vue, React and many others) which can be used to accomplish this similar goal, so we've made it possible for experienced programmers to define which renderer their Application V2 program will use.

Part of our updates to the canvas brought significant changes for the way scenes appear, introducing new options for Environmental Lighting so content creators and GMs can now customize the appearance of scenes more than they ever could before. Powerful support for mechanical darkness was also added to the vision engine!


### Scene Ambience

The goal of the Environmental/Ambience lighting changes is to allow users to modify the color components of a scene, enabling the game master to create a customizable and immersive atmosphere.

For example, users can simulate the ambience of a specific planet with different sun colors, such as a red sun setting a warm, eerie glow over the landscape or a blue sun casting a cool, alien light. Other examples include creating the atmosphere of a haunted house, the bright and cheerful lighting of a sunny meadow, or the harsh, cold lighting of a futuristic spaceship. This flexibility allows for a more dynamic and engaging storytelling environment, tailored to the narrative needs of each session.


### Improved Darkness Sources

Representing darkness within scenes has evolved significantly since the early versions of Foundry VTT. First, it was a somewhat secret feature that could be achieved by giving a light source a negative radius. Then, it could be represented with a negative luminosity value.

Up to this point, however, "darkness" sources could never do anything other more than apply visual "dimness" to an area. Mechanically, the area was still fully "lit". That is to say, Tokens could still "see" within their radius, exactly like they could with any other light source.

For the first time, V12 introduces a new "Darkness Source" toggle which makes a light source not only visually "dim", but also mechanically dark. These Darkness Sources also impact token vision, making it impossible for Tokens to see through them to the other side without some sort of special vision mode. If a token should be foolish enough to step within the darkness source, the distance of their vision is sharply decreased, preventing them from seeing outside the darkness from within it.

A method for creating "true," vision-blocking darkness is something that the community has often requested so we're very proud to be able to deliver on that request!


### Regional Darkness

A powerful existing feature of Foundry VTT is the ability to easily use the same Scene for a visit during the night or day. This is accomplished by automatically disabling Global Illumination (think daylight) when the Darkness Level of a scene exceeds a specified value (called the Global Illumination Threshold). For instance, if you have a threshold set and you click the existing "Transition to Darkness" button within the Lighting tools, Global Illumination is automatically disabled for the Scene and it becomes mechanically "unlit." This means that Tokens would then need to bring their own light source or vision mode if they wish to see.

But what if your Scene contains both dark, "indoor" areas and bright "outdoor" areas at the same time? This challenge can now be met with one of V12's powerful new Scene Region features: the "Adjust Darkness Level" behavior. If you use this feature to make a part of your map darker than the threshold value, the area doesn't doesn't just become visually dark, it becomes mechanically unlit as well. Your players without supernatural senses will need to bring a torch with them to explore that cave!


### Choose Your Own Method of Randomness

With the release of several competing Bluetooth-based dice products, we've heard the community's desire to have a way to be able to use those dice with official Foundry VTT integration.

V12 introduces a new Configure Dice section in our Game Settings to allow users to determine their randomness method.

- Foundry VTT Digital Roll - This new method gives priority to any module which would change the dice rolling method (such as one for a specific set of Bluetooth dice, for example).
- The Digital Roll (Mersenne Twister) - This option is the standard method Foundry has always used to produce your dice rolls.
- Manual Rolls - Foundry prompts the user to enter a number to serve as the result of their roll. This is typically the number that they rolled on a physical die. The Manual method is primarily geared towards GMs who want to run their tables in person but still want to take advantage of the automation features of Foundry VTT.

By default, the dice method is unchanged: the Digital Roll (Mersenne Twister) option is used.


### Roll Parsing and Peggy

We have also further refined our parsing of roll formulae by introducing a new library called Peggy. While most users may not even notice a difference, switching to using Peggy as our parser allows us to finally correct some very obscure cases which could occasionally return inaccurate or unexpected results on very complex roll expressions. As a result of this change, our dice rolling is now more robust than ever before.

Over the course of V12 development, we ended up adding several important improvements to Foundry's audio system.


### Dynamic Ambient Sounds

Placeable sounds have new options to add powerful effects filters. For example, this allows Walls to audibly muffle sounds as they pass through! These new options come in the form of the new Special Effects section which can be found in the configuration window of placed Ambient Sounds.

At present, Ambient Sounds support the following effects:

- Low Pass - Frequently used to emulate a dense surface softening the higher frequency sounds, Low Pass filters make a sound more 'rich', 'warm', and most importantly 'muffled'. If you want to make something sound like it is muffled behind a door or wall, you would apply a Low Pass filter.
- High Pass - Often in outdoor environments, the bass frequency of the sound falls off while higher frequencies remain clear. You might use a High Pass filter to simulate a sound crossing a large open space, such as a grassy field.
- Reverb - Primarily used in cases where you want to make the environment of a sound 'echo' a little more, so that the sound emulates an environment such as hard stone walls that reflect the sound back at the listener.

There are two different ways these effect can be applied:

- Base Effects - Apply to the sound regardless of whether a wall is between the listener and the sound source
- Muffled Effects - Only apply in cases where a wall between the source and the listener would alter the sounds. Importantly, if the sound doesn't have the "Constrained by Walls" option toggled to false (allowing it to be heard through walls at all), this effect never has the opportunity to be applied.


### Musical Permissions

Players can now be assigned ownership permissions over playlists. This allows them to control which sounds are playing, make changes to any part of the playlist, and to trigger sounds on demand exactly the way a GM can. The GM still has control, though... these permissions function exactly the same as permissions for other kinds of Documents. If a player wants to play DJ, however, this allows GMs to offload some of the burden of keeping the ambience of their games flowing.


### Audio Mixing Channels

GMs and users alike have long been able to control the volume of music, ambient effects, and interface sounds separately. In V12, each piece of audio played throughout the Foundry VTT ecosystem can designate which channel it most appropriately belongs to. This allows all 3 channels to have separate volume control and timing.


## Breaking Changes

As always, please keep in mind that many of your favorite modules or game systems may not be updated for V12 until some time after its release... and that's okay. Please be patient and kind to our excellent community developers!

Developers: While there are no breaking changes in the V12 Stable 1 release itself, there are some important breaking changes that you should be aware of when making the jump from V11 to V12.

You can find a comprehensive list of all V12 breaking changes here: Breaking Changes for Version 12. You can also find out more information by scanning the "Breaking Changes" sections in the patch notes of the individual V12 releases.

The remaining portion of this document provides the patch notes for the changes that are specifically included in the V12 Stable 1 release.


## New Features in V12 Stable 1


### Documents and Data

- Changed the default Environmental Lighting settings to better support existing Scenes. (10969)


### Applications and User Interface

- Provided clarifying hint text about the interaction between Global Illumination Threshold and the "Adjust Darkness Level" Scene Region behavior. (10848)
- When you use the "Add Shape from Controlled Walls" button in the Scene Regions dialog, automatically activate the "Select Wall" tool for convenience. (10933)
- Improved the Theme V2 styling rules for label.checkbox elements. (10945)
- Swapped the left-click and right-click functionality of the "Copy ID" button in the header of a Document's configuration window. Left-clicking now copies the UUID to the clipboard, and right-clicking now copies the ID. (10975)

`label.checkbox`
### The Game Canvas

- Edges of inactive (but not disabled or suppressed darkness sources) are once again created. (10973)


### Localization and Accessibility

- Added localizations for the base types of Documents that were missing them. (10920)


## Bug Fixes in V12 Stable 1


### Documents and Data

- Compendium documents can no longer be cleared from cache if their sheets are still open. (5968)
- Simplified the process of adding custom sound sets for Combat Themes by using CONFIG.Combat.sounds. (10268)
- Broken content links can no longer break links to sibling journal entry pages. (10272)
- Fixed an issue where journal headings that contain only numerical characters could result in incorrect sorting of headings in the summary. (10283)
- Removed the "Delete All" context option for Folders of the Compendium type because contained compendium packs cannot be deleted in this way. (10533)
- Content links to a specific page in a multi-page view journal now reliably open to the correct page. (10602)
- An ObjectField which is configured as {required: false} will now be initialized as undefined. An ObjectField which is required but {nullable: true} will now be initialized as null. (10928)
- Macro.createDialog once again has the option to pick the type ("Chat" or "Script"). (10952)
- EmbeddedDataFields in TypedSchemaFields return a correct fieldPath. It no longer inserts its type into the path. (10955)
- Selecting text in a journal page once again works as expected in the TinyMCE editor. (10957)
- All subclasses of the same base Document now share the same data schema. (10962)
- Prevented an issue where each scene was activated when importing multiple scenes. (10964)
- PrototypeToken.defineSchema no longer re-declares name with the same properties. (10971)
- Links to the underlying compendium entries once again display correctly in the Chat cards generated by Compendium-type Roll Table results. (10980)

`CONFIG.Combat.sounds``{required: false}``undefined``ObjectField``{nullable: true}``null``Macro.createDialog``EmbeddedDataFields``TypedSchemaFields``fieldPath``type``PrototypeToken.defineSchema``name`
### Applications and User Interface

- Provided a default color for light animation types that require a non-zero light color to display.  (9819)
- Clicking the "Save Module Settings" button does not bring the reload prompt to the front if it's already rendered. (10037)
- Creating a Macro by clicking an empty hotbar slot now properly appends a number to the initial name of the created document. (10369)
- Prevented users from being able to see cursors when loading into a World for the first time when the Display Mouse Cursor option is disabled. (10529)
- The "Show GM Users" checkbox in the Document Ownership Configuration view is now remembered across multiple renderings of that form within a single client session. (10607)
- To help prevent microgaps, restored a small amount of proximity detection of nearby Wall endpoints when CTRL-clicking to chain walls. (10889)
- The "Add Shape from Controlled Walls" button in the Scene Regions dialog no longer causes the loss of unsaved changes in the Identity tab. (10932)
- Selecting or removing options in <multi-select> elements in a form now properly triggers form submission. (10954)
- Prevented App V2 changes from resulting in coloration changes for dropdowns in App V1 dialogs. (10965)
- Resolved an overflow issue in App V2 Filepicker dialogs. (10966)
- The HTMLColorPickerElement now sets the same initial color for both the string input placeholder and the color selection UI. (10972)
- Resolved an issue where SHIFT-clicking a Wall sometimes flashed it visually but did not actually control it. (10982)

`<multi-select>``HTMLColorPickerElement`
### The Game Canvas

- Double-clicking a wall segment in a location that is not an end-node once again opens its Wall Configuration dialog. (10821)
- Changing the text of a Drawing and then drag-moving the Drawing no longer reverts the text to its prior value. (10883)
- Prevented another player's cursor from expanding bounds of the Scene's padding area when it moved out of it. (10930)
- Prevented the controlled Token from being moved with the arrow keys during a Ruler measurement. (10938)
- Added missing labels and hints on the Prototype Token Configuration dialog. (10953)
- Fixed a Canvas freeze that could occur when selecting a Token with Global Illumination enabled for the Scene. (10956)
- Prevented a "flash" from occurring after the editing a light. (10960)
- Light configuration tabs are now re-rendered if the darkness checkbox changes to ensure that animation types and advanced options are appropriately toggled. (10967)
- A template that exceeds the bounds of the padding area no longer causes the area of darkness to expand. (10974)
- Token teleportation to a different Scene no longer fails if the player that moved the Token doesn't have Token Creation and Deletion permissions. (10976)


### Localization and Accessibility

- Compendium pack labels are now localized in the the compendium app title bar. (10664)
- Added localization for Coordinates and pixels in the Ambient Sound Configuration dialog. (10958)
- In systems without localization, ClientDocument.defaultName() now properly returns a Document type instead of a localization key. (10959)

`Coordinates``pixels``ClientDocument.defaultName()`
### Other Changes

- The Compendium Application's "Delete Entry" context menu no longer bypasses ClientDocument#deleteDialog. (10226)
- RollTable#toMessage no longer throws errors when a Roll instance is not provided. (10229)
- Fixed an issue where errors thrown by DOM functions could cause Hooks.onError to obscure the original error with its own. (10534)
- DocumentCollection#delete now properly returns a boolean. (10936)
- Fixed a regression in StringField#_getChoices which only worked for simple object values but not other non-string types. (10949)
- Prevented an error that occurred when hovering any Shape with the Shapes tab of the Scene Region dialog open. (10963)
- Refactored FogExploration.get to FogExploration.load to avoid breaking inheritance with the parent Document.get static method. (10946)

`ClientDocument#deleteDialog``RollTable#toMessage``Roll``Hooks.onError``DocumentCollection#delete``StringField#_getChoices``FogExploration.get``FogExploration.load``Document.get`
## Documentation Improvements in V12 Stable 1


### The Game Canvas

- Improved the clarity of the description of the "Provides Vision" checkbox in the AmbientLights configuration dialog. (10231)

`AmbientLights`
### Other Changes

- The documentation for Document.createDocuments now accurately reflects that it accepts a (object | Document)[]. (8860)

`Document.createDocuments``(object | Document)[]`
## API Improvements in V12 Stable 1

`FogExploration.get``FogExploration.load``Document.get`