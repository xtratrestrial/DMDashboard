# Tokens | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/tokens/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Tokens


## 


## Overview

A Token is a placed object which visually represents Actors on the game Canvas. The Token displays the Actor's position, appearance, rotation, vision configuration, status effects, and more. Each Token is specific to Scenes in which it exists.

This article will familiarize you with the various options available to the tokens, and how to manipulate them. It will also detail the difference between a prototype and placed token, and how the token wildcard system works.


## Token Controls

The Token Controls panel is the default tool which is opened when loading into a scene. It is represented with a user icon ( ) on the left-hand side of the user interface. This opens the tool palette, and provides tools manipulate tokens you have control over.

Users can also place Pings on the canvas while this tool is selected.

If the origin point of a ruler is a token you have control over you can press space to case the token to move to the end of the ruler.

An important concept to understand when working with Tokens is the difference between a Prototype Token and a Placed Token.


### Prototype Tokens

Prototype Tokens allow you to configure a 'preset' for that Actor's tokens which will be used whenever a new token is placed.

A Prototype Token stores the configuration of a Token for a particular Actor before that Token has been placed onto the game canvas. The prototype defines the default setup that a newly created Token starts with. To configure the Prototype Token for an Actor, open the Actor Sheet and click the Prototype Token button in the top bar.


### Placed Tokens

Once a Token is placed, it becomes its own independent copy of the prototype. For example - a Prototype Token for a player character could be configured to have a certain vision distance - but when that Token is placed into a Scene that has different lighting conditions, the placed copy of the Token could be changed to increase or decrease visibility for that scene. To configure a placed Token, right click on the Token to display the Token HUD and click the gear icon to open that Token's configuration sheet, or double right-click the token.


## Token Configuration Options

If you have granted your players permission to modify their own token settings, the preview of changes to Vision settings may reveal more of the scene canvas than you wish. This permission is disabled by default, allowing only trusted players and higher to configure token settings.

The Token Configuration sheet features a large number of options spread out across five different tabs, each tab allowing you to modify certain aspects of the token.

The Identity tab controls what actor data is associated with the token and what others can see of that identifying information. This includes the actor's name, image, and more.

Configure the level of visibility for the token's nameplate.

- Never Displayed - The nameplate is not displayed at all.
- When Controlled - The nameplate is displayed when the Token is currently controlled
- Hovered by Owner - The nameplate is displayed when the token is hovered over by a User who owns the token's Actor
- Hovered by Anyone - The nameplate is displayed when the token is hovered over by any User
- Always for Owner - The nameplate is displayed at all times to any User who owns the token's Actor
- Always for Everyone - The nameplate is displayed at all times to every User

The Appearance tab controls both the art a token uses to represent its actor, as well as how that art is displayed for users, such as dimensions, scale, and tint..

`$UserData/Data/`
#### Wildcard Token Images

Wildcard tokens provide a way for GMs to manage use of a single actor representing a diverse group of characters that all have the same attributes, or which do not necessarily require a fully linked actor sheet. To configure Wildcard Tokens, access the token configuration menu and on the appearance tab, tick the Randomize Wildcard Images toggle. Then configure the image path to use wildcards.

The path to the folder containing the images you wish to have the token draw from. This should be set to something such as: /your/path/here/* for all images in the folder or /your/path/here/*.png for all files of the .png format in the folder.

`/your/path/here/*``/your/path/here/*.png``.png`This can also include case sensitive options such as /your/path/here/Goblin* for all images that start with the word "Goblin," it can also include a selection list, for specified options using /your/path/here/{Goblin_1,Goblin_2}.png to choose only between the Goblin_1.png or Goblin_2.png when the actor is placed into a scene.

`/your/path/here/Goblin*``/your/path/here/{Goblin_1,Goblin_2}.png``Goblin_1.png``Goblin_2.png`This can be combined with the asterisk as detailed above to further randomize how Foundry VTT selects tokens.

After placing a token that has the Randomize Wildcard Image option set, you can change the token from a convenient list of other tokens in that folder. To do so, right click the token you wish to change and on the image tab simply select a different image from the Alternate Actor Tokens selection menu.


#### Dynamic Token Rings

Foundry can automatically add circular rings around Token art, easily turning ordinary pieces of art into "pog"-style circular tokens.

For more information about Dynamic Token Rings, please see Dynamic Token Rings.


### The Vision Tab

Token Vision is one of the most notable features of Foundry VTT, and is detailed more thoroughly below.


### The Lighting Tab

This tab is broken down into three sub-tabs which determine the appearance and reach of the token's light emission. The settings here are identical to those found in the ambient lighting tools, please refer to Lighting for an in-depth explanation of the various options available.

Configure the level of visibility for the token's resource bars. The following options are supported:

- Never Displayed - Resource bars will not be shown
- When Controlled - Resource bars are displayed when the Token is currently controlled.
- Hovered by Owner - Resource bars are displayed to any User that owns the token's Actor when they hover their cursor over the token.
- Hovered by Anyone - Resource bars are displayed to any User that overs their cursor over the token.
- Always for Owner - Resource bars are displayed at all times, and visible to the Actor's owner.
- Always for Everyone - Resource bars are displayed at all times, and visible to all Users.

Never Displayed - Resource bars will not be shown

When Controlled - Resource bars are displayed when the Token is currently controlled.

Hovered by Owner - Resource bars are displayed to any User that owns the token's Actor when they hover their cursor over the token.

Hovered by Anyone - Resource bars are displayed to any User that overs their cursor over the token.

Always for Owner - Resource bars are displayed at all times, and visible to the Actor's owner.

Always for Everyone - Resource bars are displayed at all times, and visible to all Users.


## Token Vision

The most commonly used feature of Tokens is the ability to allow players to explore and experience a scene while only being able to see what their token should be able to perceive. Tokens support a variety of vision configuration options which which define how it can see a scene within the game world.

If a token does not have Vision enabled, but a Scene has been configured to require Token Vision (required by default), users who only have access to that Token will receive a warning that they do not control any tokens with ability to see the scene.

Tokens with Shared Vision: If a User has permission to control more than one token with vision, when no Token is controlled, the vision displayed will be the union of vision across all Tokens. If a User has a single Token controlled, their vision will be only what is visible to that one Token, and any other tokens will have their vision hidden.


### How Vision Works

When a token is placed on a scene, it will automatically be assigned a vision configuration based on the Vision Mode and Detection Modes that it has. Vision Modes control the appearance of of a token's vision, while Detection Modes determine the mechanics of what a token can see. By default, a token which has Vision Enabled can only see based on existing light sources and will not be able to detect the presence of any other tokens which are not already illuminated in some way.

In order to understand how Vision and Detection Modes affect what a Token can see, it is important to first understand what the settings on the Vision tab of the Token Configuration mean. The Vision tab is broken down into three sections:

- Basic Configuration - Controls how a token should see in a Scene.
- Detection Modes - Control what a Token should be able to detect in a Scene. Detection Modes like Basic Sight, Feel Tremor, See Invisibility and more.
- Advanced Options - Provide options for making fine-tuning tweaks to the appearance of a Token's vision.

The Basic Configuration tab can be used to configure facets of how a Token views the canvas and its surroundings.

- Basic Vision - The standard, default vision mode appearance which does not alter a token's vision.
- Darkvision - In areas where no light source exists, the token's vision is desaturated and does not display color. Areas which contain light sources show colors as expected.
- Monochromatic - Regardless of light source, this token will not be able to see colors.
- Tremorsense - A visual effect similar to a radar sweep, which pulses and visually obscures the scene's background but preserves details such as fog exploration and wall placement.
- Light Amplification - A visual effect similar to night-vision goggles. Light sources within range are amplified in their brightness, and areas within darkness are visibly raised. By default, this vision mode is colored green but its color can be changed via the Advanced Options subtab.

The detection modes tab controls what a Token should be able to detect in a Scene. Each Token can have have multiple Detection Modes like Basic Sight, Feel Tremor, See Invisibility and more. A Detection Mode can be added by pressing the + in the top-right of the tab.

There are a few different types of detection mode supported by default:

- Basic Sight - Used to override the default basic sight settings.
- See Invisibility - Depends upon line of sight and will not reveal tokens through walls. Allows a token to see other tokens that have been set with the "Invisible" condition.
- Sense Invisibility - Does not depend on line of sight and will reveal tokens through walls. Allows the token to see other tokens that have been set with the "Invisible" condition.
- Feel Tremor - allows the token to sense all other tokens at their elevation. Tokens which have an elevation greater than the scene's height are presumed to be floating or flying and will not appear on this token's vision.
- See All - Depends upon line of sight and will not reveal tokens through walls. Allows the token can see all other tokens regardless of available light.
- Sense All - Does not depend on line of sight and will reveal tokens through walls. Allows the token to see all other tokens regardless of available light.

The Advanced Options subtab provide a few options which allow you to tweak how a token's vision should appear for users of that token. Note that changing a Vision Mode will overwrite these settings with preset configurations for their values. For example: changing the Sight Mode to Darkvision will always overwrite the attenuation and saturation values to 0.


## The Token HUD

Once an actor has been placed onto the canvas as a token, a number of quick actions become available through the Token Head-Up Display that can be viewed by right clicking on a token at any time.

The Token Action Hud provides quick access to the following options:


## API References

To interact with Tokens programmatically, consider using the following API concepts:

- The  Token Object
- The  TokenLayer Canvas Layer
- The  TokenConfig Application
- The  TokenHUD Interface

Additionally, the wildcard system for token images utilizes the minimatch library.

- Official minimatch documentation

