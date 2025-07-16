# Chat Messages | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/chat/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Chat Messages


## 


## Overview

Foundry Virtual Tabletop supports various ways to convey player dialogue and actions, both in and out of character, through messages in the chat log. This page provides an overview on these chat messages and their functionality.


## The Chat Log

All chat messages can be accessed through the Chat Log sidebar in-game. At the bottom of this sidebar, users can use the text field to enter messages that are viewable by others. Pressing Enter will send a written message, while pressing Shift + Enter will add a new line to the message. Pressing Up arrow will bring up the last message or command entered.


#### Saving

Gamemasters can save the chat log to a file through the Export Chat Log button above the text field (marked with a floppy disk icon). This exports all available chat messages into a .txt file.


#### Deleting

Gamemasters can clear the chat log through the "Clear Chat Log" button above the text field (marked with a trash can icon). This deletes all messages in the chat log. A gamemaster can similarly delete individual messages, with the trash can found on the top right corner of each message.


#### Roll Modes

The roll modes dropdown configures the type of dice roll that will be dispatched by automated rolls created by game systems, modules, or macros. Note that the selected roll mode provides guidance for automated rolls, but using the /roll command always results in a public roll. See dice rolling details for more information.

`/roll`
### Pop-out Chat Messages

Some game systems allow certain chat messages to be popped out into their own window for quick reference once they have been posted. This must be supported by the system specifically. If the message has pop-out support, when you right click on the message you can choose the "Pop Out Message" option from the context menu. If the message does not support pop-out, this will not appear.

While entering a message, users are able to prefix their message with a command. Some commands related to sending chat messages are listed below:


#### In Character

Syntax: /ic {message}

`/ic {message}`Causes the message to be spoken by an associated character.

With a Token selected, players (and GMs) automatically speak "in character" from that Actor's perspective, removing the need to enter this command for every message. Additionally, the /ic command is also automatically applied if both of the following conditions are met:

`/ic`- The User has an Actor assigned to them in the User Configuration window, and
- That Actor has a Token present in the current Scene


#### Out of Character

Syntax: /ooc {message}

`/ooc {message}`Causes the message to be spoken out of character (OOC). OOC messages will be outlined by the player's color to make them more easily recognizable. A player without an identified speaker or a selected token will automatically speak out of character.


#### Emotes

Syntax: /emote {message} or /em {message} or /me {message}

`/emote {message}``/em {message}``/me {message}`Causes the message to be an emote performed by the selected character. Emotes are in-character actions conveyed through text by the player, and therefore require the player to select a token (or link a character through the User Configuration window). Entering "/emote waves his hand." while controlling a character named Simon will send the message, "Simon waves his hand."


#### Whispered Messages

Syntax: /whisper {target} {message} or /w {target} {message}

`/whisper {target} {message} or /w {target} {message}`Whispers a message to the target. If the user sending the message does not have the "Whisper Private Messages" permission, they cannot use this chat command. If the whisper's target is an Actor that is assigned to a User as their character, the whisper will be sent to that User.

Note that you can message multiple users at once by enclosing their names as a comma separated list within brackets. For example /w [Andrew, Tim, Julia] What do you think? Should we attack, or sneak past?. Lastly, the names gm and players will send a whispered message to all Game Master users or all non-GM users respectively.

`/w [Andrew, Tim, Julia] What do you think? Should we attack, or sneak past?``gm``players`GM users have no special permission to view whispered messages. If they are not included in the targets of a whispered message, they cannot see it.


#### Dice Rolls

Syntax: /roll, /gmroll, /blindroll, /selfroll

`/roll``/gmroll``/blindroll``/selfroll`Rolls dice as a chat message. In the chat log, rolls can be clicked to expand their tooltip, showing the value of each individual roll. It can be clicked again to collapse the display. Refer to the Basic Dice article for further details on how to roll dice in Foundry VTT. Once a roll is placed, you can expand the rolls to see detailed results by clicking on the rolled total.


### Chat Bubbles

When an in-character or emote chat message is sent from the perspective of a placed Token, the camera will be moved to focus on the actor and a chat bubble will appear above that Token's head illustrating the dialog visually on the game canvas. There are two toggles found in core Game Settings which can configure the behavior of chat bubbles:

- Enable Chat Bubbles toggles the appearance of chat bubbles on or off.
- Pan to Token Speaker toggles camera panning to focus on the dialog speaker on or off.


## API References

To interact with Tokens programmatically, consider using the following API concepts:

- The  The ChatMessage Document
- The The Messages Collection
- The The ChatLog Application

