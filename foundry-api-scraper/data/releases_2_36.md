# Release 0.2.1 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/2.36

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.2.1


## Version 2 Development


##### February 17, 2019


## Beta 0.2.2 Update Notes

This Foundry Virtual Tabletop beta update includes a large number of features and fixes (in fact, the largest number of any single update version thus-far). The flagship improvements in update 0.2.2 include the initial implementation of the Tiles Layer which allows for you to place art assets on top of the background image, improvements to the performance of Dynamic Lighting through the addition of new shadow-map optimization, expanded control over Walls allowing you to adjust wall types on the fly, and added support for negative values of Light Source emission - allowing you to create areas of darkness which override nearby lights.

`0.2.2`In addition to these more significant features, this update also includes a large number of smaller features, bug fixes, and enhancements. I'm really excited about the continued progress for this software and motivated by the support and encouragement of the community. Thank you all for appreciating my work, providing thoughtful feedback, and encouraging me to do even more.


### New Features

- Improve the logic of TAB key target cycling. TAB will now cycle through any tokens that you have ownership rights to and remember the cycle order. You can use SHIFT+TAB to cycle backwards as well. If no tokens are able to be controlled TAB will simply recenter your view in the Scene's default orientation.
- Increased the default value for the maximum zoom level of the canvas from 200% to 300%. This option can also now be configured by modules (see below).
- Changes to a Token's nameplate value will now be automatically synchronized with that Token's entry in the turn tracking order (if it is present). Previously the name displayed in the turn order would not update unless you removed and re-added the token.


### Core Bug Fixes

- Restored functionality of "global" light sources, which were previously failing to penetrate through intervening walls as intended. Global lights now are visible even if walls are in the way.
- Scene background images which include url-unfriendly characters like spaces or parentheses should now be tolerated by the server which creates thumbnail images for that scene.
- Fixed an issue with the rectangular token select tool which prevented it from working properly.
- Resolved an issue with window resizing and ambient sounds which caused them to be duplicated resulting in overlapping instances of the same audio effect.
- Resolved an issue which caused the ESCAPE key, and it's control over the main menu, to become stuck and prevent the menu from closing after multiple uses.
- Corrected a problem with token visibility state changes which did not correctly propagate to the combat turn tracker.
- The Playlist sidebar tab was only showing players the first audio track in a playlist to play, but failing to update properly when tracks were shuffled or sequenced. This issue should now be resolved.
- Fixed some poor logic in the implementation of the Tabs helper which allowed for the possibility that tab control would be cross-contaminated across multiple similar UI elements (like character sheets). You now will only be able to control the tabs within the application where the tab control also resides.
- Fixed a visual artifact that resulted in a token "flicker" when first beginning to drag the token. This should visually now appear more smooth.


### Core Software, APIs, and Module Development

- Added two new Hooks in the main application initialization order. Please see details here: https://gitlab.com/foundrynet/foundryvtt/issues/444.
- Added new Hooks which can be used to easily customize the options included in context menu entries for sidebar tabs and directories. Please see details and example usage here: https://gitlab.com/foundrynet/foundryvtt/issues/443
- The maximum zoom level of the game canvas can now be configured by modules by assigning CONFIG.maxCanvasZoom.

`CONFIG.maxCanvasZoom`
### D&D5e Fixes and Improvements

- Context menu options for dice rolls (apply damage or healing) will now only be shown if you are currently controlling a token or tokens. This should help prevent confusion around how this option may be used.
- Posting chat cards for weapon, spell, or other item actions will now obey the current roll mode value and post using private GM or blind messages if that setting does not designate public rolling.
- The current value of the global roll mode dropdown menu will now inform the default choice available when rolling checks or attacks using chat cards in the 5e system.
- Resolved a bug which prevented context menu damage application to apply for tokens which were not linked to their prototype Actor.
- Fixed a bug which caused re-draws of the game canvas to lose track of the designated diagonal measurement rule setting.

