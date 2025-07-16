# Release 0.1.7 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/1.34

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.1.7


## Version 1 Development


##### February 14, 2019


## Alpha 0.1.7 Hotfix Notes

This is a hotfix version addressing several issues which emerged through the 0.1.6 update. The bug fixes are detailed below.

`0.1.6`
### Core Bug Fixes

- Resolve a blocking problem for multiplayer connectivity where the user cookie check was performed too soon preventing players from joining a game session.
- Fix a loophole with chat sanitization that caused too many valid HTML tags or attributes to be stripped from messages.
- Corrected an issue with Scene activation which caused the combat tracker to not properly update the turn order in the new Scene.
- Fix an issue with the "End Combat" button which was not properly clearing the turn order tracker unless the browser was manually refreshed.
- Improve the behavior of token combat control icons such that they are properly updated when tokens are added or removed from combat, either through the token control UI or through the combat tracker itself.


### D&D5e Bug Fixes

- Fix an issue with short and long rest buttons which prevented them from functioning correctly.
- Improve the chat log display of short and long rest icons, detailing the number of hit dice and hit points spent or regained.
- Fix an incorrectly displayed Spell DC for spells which set a different spellcasting ability than the default one chosen on the character sheet.

