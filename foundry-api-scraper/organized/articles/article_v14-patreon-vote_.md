# Version 14 Patreon Feature Vote | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/v14-patreon-vote/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Version 14 Patreon Feature Vote


## 

Now that we have accomplished the stable release of Foundry Virtual Tabletop version 13 our team is excited to turn our attention towards planning for Version 14. The next two months will involve an overlapping period of perfecting and refining V13 while we simultaneously plan out the major features that will form the backbone of V14. As always, your voice as our most supportive users and community members will inform that plan and guide us in what we prioritize for our next major iteration. That process begins now with our Patreon Prioritization Poll for Version 14!

Voting on the Version 14 prioritization poll is available to Patreon supporters at any tier at https://www.patreon.com/posts/version-14-vote-129611527.

The V14 Patreon Prioritization Poll began on Thursday, May 22 and will remain open for two weeks until 11:59pm eastern time on Thursday, June 5.


## Planned Features

We already have a few committed plans and focus areas for Version 14 which are important to understand before reviewing the options in the poll. These are features that our team intends to add in Version 14 regardless of which option wins the prioritization vote.


### Scene Levels

In late 2018, when Andrew was initially brainstorming the features that Foundry Virtual Tabletop might someday have, there was a list of major features that were desired for the VTT. Now, over 6 years later and 5 years since our first public release, there is only one item that remains on that original list which Foundry VTT does not already include! That remaining feature is "Scene Levels", a framework for seamless traversal of multiple layers of vertical gameplay within the same single Scene. We are committed to delivering on the vision for this feature in Version 14 and completing the roadmap that our team began work on many years ago. Scene Levels will enable crafting multi-level scenes that allow tokens to move vertically through different levels of an area. Different levels will be able to have different placeable objects like walls, sounds, and light sources as well as different fog of war exploration progress. Dynamic vision and lighting will be constrained by floors or ceilings to appropriately condition your awareness of the scene based on Token position and elevation.


### ProseMirror Improvements

Our team is really happy with the choice we made in Version 10 to move from TinyMCE to ProseMirror. The technical framework of the ProseMirror editor is elegant and its capabilities for real-time collaborative editing are fantastic. Despite these advantages, there are some limitations of ProseMirror compared to the prior TinyMCE editor that we previously used which may feel like a step backwards to some of you. Since Version 10 when we launched ProseMirror support, TinyMCE has remained available as an option for users who aren't ready to embrace the ProseMirror experience. We will no longer offer this dual-support for TinyMCE starting in V14 because TinyMCE has moved to GPLv2 licensing which we are not prepared to adopt. To offset the pain of losing core TinyMCE for those of you who still use it, we will invest in further improvements to the ProseMirror experience with more formatting options, more helpful tools, more dynamic content embeddings, and other features that will benefit all Foundry VTT users.


### Improved Scene Management

Now that Foundry VTT has so many canvas features, it can become a little bit chaotic to manage everything in your Scene. This will be compounded when we add Scene Levels that will allow each Scene to grow even bigger in scope. This means we need new organizational tools to make the user experience of creating and maintaining a complex scene easier. We will develop a new tab of the main Sidebar which is dedicated to browsing and managing the objects placed in a Scene. This will make it easier to locate specific objects like a Token, Light Source, or Measured Template. It make it easier to understand the structure of the Scene by visualizing which Scene Levels they belong to. This work is partially inspired by the Scene Region Legend which we feel is a useful window that should exist not only for regions but for all other placeable object types as well.


## Feature Prioritization Poll

We hope you are excited by these features that our team is already committed to implementing in Version 14, and we can't wait to see which additional feature you vote to add. Some of the below options interact with the above themes in interesting ways, so we encourage you to consider how each candidate feature would work not only in current Foundry VTT V13 but in combination with the above features which we already have planned.

We will prioritize one feature from the following list as selected by our Patreon Supporters to join the Version 14 plan. Please understand that every feature on this list is one that we want and plan to implement at some future point in time. The winner of this vote will determine which one we prioritize developing now for Version 14. Some options that are absent in this poll but were included in previous iterations are also things we still want to do, but fall outside the realm of options we feel we could reasonably support alongside other Version 14 plans and priorities.

Options are presented in alphabetical order.


### Advanced Measured Templates

This feature will improve upon our existing Measured Templates system to handle a wider range of area-of-effect mechanics that occur in TTRPG gameplay. We want to combine the practicality of Measured Templates for defining areas of effect with the automation power of Scene Regions for applying resulting behaviors or visual effects.


#### This feature would

- Provide a way for Measured Templates to provide the same types of automated behaviors that are possible with Scene Regions.
- Support attaching a Template to a Token so that the Template moves along with the Token.
- Improve integration with the targeting system so the placement of Templates can auto-target Tokens within its area of effect.
- Add an API framework for rendering beautiful animations inside of Template shapes.
- Add an option to constrain the shape of Measured Templates according to nearby walls.
- Add support for video textures to be used for Template fill textures.


#### This feature might

- Add support for private Measured Templates that would allow you to plan your next move without revealing those plans to other players.
- Add a selection of built-in animation options for common effects like fire, ice, lightning, force-fields, and more.
- Add a framework to apply a visual filter or animation onto affected Tokens inside the Template area.
- Other improvements related to Measured Templates and their interaction with other software components.


### Document Tags and Improved Search

You can never have enough tools in the toolbox when it comes to keeping your games organized. Document Tags would allow users to assign hierarchical tags to Documents (Actors, Items, Journal Entries, etc.) which provide a dimension of organization and searchability that is independent of their folder structure.


#### This feature would

- Allow Documents to be assigned an arbitrary number of hierarchically structured tags like weapon:blades:katana or locations:towns:ferncombe.
- Provide a convenient and easily accessible way to browse available Documents that have a certain tag.
- Enable searching for Documents across all compendium packs instead of just within one at a time.
- Enable searching for a certain Journal Page across multiple parent Journal Entries in your world or in compendium packs.
- Allow searching for a certain combination of tags with logical operations like AND, OR, and NOT. For example a compound query like (ancestry:elf OR ancestry:halfelf) NOT ancestry:elf:eladrin.

`weapon:blades:katana``locations:towns:ferncombe``(ancestry:elf OR ancestry:halfelf) NOT ancestry:elf:eladrin`
#### This feature might

- Allow certain document fields to automatically be treated as a tag for the purposes of searching, for example Tokens with disposition:hostile or Items with type:spell AND school:alteration.
- Allow easily creating a Rollable Table from a search result, enabling a certain query to become the basis for randomization in gameplay.

`disposition:hostile``type:spell AND school:alteration`
### Improved Drawing Tools

Our drawing tools are functional, but could be imbued with more options or tools for rapid creation of hand-illustrated information. Many Gamemasters rely heavily on drawing tools for improvisational gameplay and many players want for the ability to create more beautiful drawings.


#### This feature would

- Provide a wider range of rendering options for drawings like configurable drop shadow, separation of stroke and fill settings, and more.
- Provide a convenient palette of tools for quickly changing things like line width, brush color, or degree of smoothing while drawing without having to engage with a separate drawing configuration app.
- Make it easy to switch between multiple recently used colors using a color palette.
- Provide support for new line types like dashed, dotted, and arrowed lines.
- Improve the existing Text drawing type to support more text styling options and multi-line editing.


#### This feature might

- Expand the tools for freehand drawings like brushes or eraser tools.
- Add support for gradient fills for drawing shapes.
- Make it possible to combine multiple freehand strokes into a single selectable and movable Drawing document.
- Allow users to have private drawings so they can annotate a Scene without revealing that information to other players.
- Allow baking a Scene created using Drawings or Tiles together into a single background image.


### Improved Vision and Detection Modes

Our existing and initial implementation of Vision Modes and Detection Modes has added a lot of power to Foundry Virtual Tabletop, but we feel that these tools could be both more powerful AND more user-friendly for Gamemasters and players alike. We would like to improve this system by adding new features and making it easier to use.


#### This feature would

- Redefine "Vision Mode" as a combination of capabilities and behaviors where an individual Token can have one or more available vision modes that can be cycled between.
- Make it easy to toggle between different Vision Modes using the Token HUD.
- Support "important" detection modes which always render an effect on the detected token regardless of other detection modes.
- Support "imprecise" detection modes which only reveal the size and location of the detected token, but not its outline or identity.
- Support easy configuration for how Vision Modes or Detection Modes interact with darkness sources.
- Support convenient API methods for testing detection between a pair of Tokens.
- Remove the singular "Vision Range" concept in favor of dynamic ranges which are a byproduct of the active Vision and Detection modes.


#### This feature might

- Add support for other modes of perception which are not based purely on "vision" or "sight" like thermal perception or echolocation.
- Add support for detection tests and range tests that are grid-based instead of purely point-to-point.
- Provide a more powerful API for game systems to define vision and detection rules that are dynamically configured based on properties of an Actor.


### Manual Fog of War

One of our longest-standing major feature requests is from fans of a more classic VTT experience where portions of the Scene can be manually revealed or concealed as the players progress through the area. Our goal in creating this feature would be to provide Gamemasters with a set of tools to mark certain areas of the map as explored or obscured.


#### This feature would

- Provide a GM with tools to draw geometric shapes (rectangle, ellipse, polygon) that remove or add fog of war for players.
- Invest into a mechanism for Fog of War exploration (either manual or dynamic) to be shared across all players.
- Support a hybrid model where manual Fog of War removals or additions work alongside and supersede dynamic fog exploration.


#### This feature might

- Support an optional movement restriction which prevents Tokens from moving outside the revealed area.
- Allow pre-defining certain Fog of War operations using Scene Regions so that entering a region can automatically reveal or conceal some part of the map for everyone at the table.
- Add configurable special effects to unexplored fog areas like clouds, smoke, or swirling fog.


### Placeable Items

Placeable Items would be a new type of object that can be placed in the game canvas. As Tokens can be linked to an underlying Actor, so too could Placeable Items be a representation of an Item (or possibly container) in your World. This feature effectively allows Items to be placed directly onto a Scene, unlocking the ability for Players to find and acquire treasure or plot-advancing items by interacting directly with the game Canvas.


#### This feature would

- Implement a new embedded Document type which allows Items to be placed within a Scene using a visual representation and a variety of settings to customize their appearance.
- Add a new Canvas layer that contains and displays Items which are present within a Scene.
- Provide permission controls for who can interact with a Placeable Item.
- Allow Placeable Items to be viewed or added to an Actor.


#### This feature might

- Add a keyboard hotkey to highlight detectable items within the Scene that can be interacted with.
- Provide core support for defining containers which are bundles of Items rather than requiring game systems to devise a system-specific container approach.
- Integrate Placeable Items with Detection Modes to allow certain items to be invisible or hidden from view and only revealed under certain conditions, for cases like a "detect magic" spell, or a "thermal goggles" effect.
- Add support for custom programmatic behaviors when interacting with a placed item that can be used to automate certain effects or consequences of interaction.
- Add support for multiple interaction states. This would allow a placed item to be toggled between multiple states of interactivity.


### Pop-Out Application Windows

Supporting multiple monitors is something we've wanted to do for a long time, but there have been some technical hurdles in the way of supporting a multi-window user experience for Foundry Virtual Tabletop. While there are significant challenges still to surmount, the advancements in the core software in Version 13 with ApplicationV2 provide us with a much stronger foundation to develop support for pop-out windows which remain linked to the main browser or Electron window.


#### This feature would

- Allow you to move an Application (v2) from the main Foundry VTT window into a different separate browser window.
- Empower users with multiple monitors, allowing you to utilize secondary screens for information that can be shifted outside the main game viewport.
- Keep data and game state synchronized between the main view and all pop-out windows.


#### This feature might

- Remember the last-used position and state of a pop-out window, so that it is automatically restored to the previous position and size when it is re-opened.
- Provide a built-in mechanism for a Gamemaster to create a separate player view of Foundry Virtual Tabletop without needing to use a different browser or incognito window.


### Special Effect Regions

We love the animations that are possible using our Ambient Light system, but we've longed for a way to add these sorts of beautiful environmental effects that bring a Scene to life without the consequence of affecting the illumination level of the area. A primary goal for Special Effect Regions would be to enable a robust suite of animation options for depicting environmental effects hazards via aesthetic behaviors of Scene Regions.


#### This feature would

- Extend the Scene Regions system with a suite of Region Behaviors designed specifically to support rendered visual effects.
- Provide a set of built-in animated effects that can be easily applied such as: fire, smoke, fog, water, lava, electricity, acid, and more.
- Enable each type of effect to be customized with certain parameters like color, speed, and intensity, similar to the properties that are supported for light sources and their animations.
- Provide an API framework allowing system and module developers to define new shader-based animations to be displayed on Scene Regions.
- Add footstep sound effects as a Scene Region behavior so that tokens moving over a particular region will hear movement based on the configurable surface material.


#### This feature might

- Support UI-configurable particle emitters in addition to shader-based effects.
- Provide an API framework for particle emitter regions in addition to shader-based effects.
- Integrate with Ambient Audio sources to create sound effects that are audible within specific regions.
- Provide a visual interaction between regions which create a special effect and Tokens which are inside of that region.
- Redesign the approach used for our current weather effects to integrate with this system so that you can have multiple sources of weather in a Scene or weather effects that are localized to specific areas.


## How To Vote

Voting on the Version 14 prioritization poll is available to Patreon supporters at any tier at https://www.patreon.com/posts/version-14-vote-129611527. Patreon does not support polls with ranked choice voting, so instead supporters may vote for as many features as they are personally excited about. The winning feature will be the option which receives the most votes in total.

The V14 Patreon Prioritization Poll began on Thursday, May 22 and will remain open for two weeks until 11:59pm eastern time on Thursday, June 5.

