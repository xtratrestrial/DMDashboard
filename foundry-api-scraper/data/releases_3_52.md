# Release 0.3.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/3.52

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.3.7


## Version 3 Development


##### September 14, 2019


## Beta 0.3.7 Update Notes

Hi everyone. This update is a bit less conventional in that it is a small bugfix focused update to address some small errors which were introduced in the 0.3.6 update. I will be taking a much needed vacation for the next two weeks. During that time I will be working (a little bit) on some new VTT features, but I didn't want to wait to make these bug fixes available since they can correct a couple of small problems

Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### Core Bug Fixes

- Corrected a regression where the default chat message type was no longer in character in cases where a Token was selected.
- Resolved a problem which prevented the Chat Log from being exportable when a dice roll was present in the chat history.
- Fixed an issue which failed to apply the correct in-character or emote chat stylings to chat bubbles and messages after the 0.3.6 changes.
- Corrected a limitation which prevented a GM user from dragging a Map Note in cases where the default note permission level was set to LIMITED.
- Solved a problem which prevented Entities from being imported from JSON, instead simply displaying the export prompt.
- Improved the process of World editing through the configuration sheet on the setup menu, correctly populating the current World path and fixing issues with MCE editor saving.
- Corrected some mis-translated strings in the Scene Config application.
- Fix an issue which impacts compendium migration for Entity types which do not define a data model in their system template.


### Core Software, APIs, and Module Development

- Moved the "Worlds" tab to be in the first (left-most) position of the setup view.
- Define a default ChatMessage type as "OTHER" to correct breakages to existing ChatMessage.create calls, however it is strongly recommended for system and module developers to pass an explicit type from the CHAT_MESSAGE_TYPES object at the point of message creation.

`type``CHAT_MESSAGE_TYPES`
### D&D5e System Improvements

- Corrected a problem with the Damage dialog prompt for rolling Critical damage which raised a roll error.

