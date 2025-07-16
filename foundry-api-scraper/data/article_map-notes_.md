# Map Notes | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/map-notes/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Map Notes


## 


## Overview

Tabletop roleplaying games often require note-taking for specific objects in a scene, or landmarks on a map. Foundry Virtual Tabletop supports the creation of Map Notes that you can easily place on a Scene, allowing gamemasters and their players to easily reference notes they've made. This article will familiarize you with the process of creating map notes, editing existing map notes, and how permissions for Journal Entry Pages determine visibility of map notes.


## The Journal Notes Layer

The Journal Notes layer tools provide direct access to how you interact with Map Notes. Both Players and Gamemasters can access the Journal Notes layer, though some buttons may not be available to Players.

- Double left-click a Note to open its linked journal entry, if any.
- Double right-click a Note to configure it.


### Map Note Visibility

Map Notes are not always visible - depending on a user's settings, they may only appear while the Journal Notes button is selected in the scene control toolbar. If you wish to see available map notes on the scene at all times, simply click on the Journal Notes button (bookmark icon) in the scene control toolbar, and click Toggle Notes Display ( ). Once enabled, notes will remain visible on every layer. This setting isper user- each player is able to toggle the visibility of Map Notes for themselves.


#### Visible Note Indicator

When an actor in a scene can see a map note, the map note icon ( ) will change to indicate this with a small purple flag. For gamemasters, this occurs when any actor in the scene can see a map note, while for players it is only active when an actor they control can see a map note.


#### Global Visibility

By default, Map Notes are obscured by Fog on scenes with Fog Exploration and will only appear when they are within the field of vision for a controlled Token. Setting the Globally Visible toggle in the configuration window for a Map Note elevates that note so that it is visible regardless of Token vision settings.


#### Permission-based Visibility

For Map Notes that are linked to a Journal Entry or Journal Entry Page, visibility is determined by the permission level configured on the Journal Entry or Page. If a player has "Limited" permissions, they will be able to see the position of the Map Note and its assigned label, but they will not be able to open it. For Image Pages, journal entries may still be opened by users with a Limited. If a Map Note has no Journal Entry associated with it, the note will be visible to all users currently viewing the scene.

If you right-click on a Journal Entry in the sidebar, you can conveniently "Jump to Pin" to pan the canvas to its placed Note location.


### Creating Map Notes

Map notes can be created by a gamemaster or assistant GM or, in cases where Users and Permissions have been have been configured to allow it. This can be done using the Create Map Note button from the Journal Notes layer, or by dragging and dropping a Journal Entry or Journal Entry page from the sidebar tab to anywhere on a Scene.

- Access the Journal Notes controls using the buttons for Layer Controls ( ).
- Click the Create Note ( ).
- Click the point on the Scene where you wish to place your note.
- A dialog window should appear which will prompt you to enter a name, and ask if you wish to create a corresponding journal entry. It also contains a drop down to control which folder to place that journal entry under in the sidebar if you choose to do so.
- Once you set your note's name a second dialog window should appear which will allow you to configure the Note before it is placed.

- Create a Journal Entries in the Journal Entries sidebar.
- If you wish to create a link to the complete Journal Entry, drag your newly created journal entry from the sidebar onto the scene.
- If you wish to create a link to a specific Journal Entry Page, drag the page from the Table of Contents sidebar within an open Journal Entry onto your scene.
- Once you drop the Journal Entry or Page onto the scene, a dialog window should appear which will allow you to configure the note before it is placed.


### Configuring Notes

After you place a Map Note you may configure it in accordance with the options listed below. You can change or modify these settings again at any time by double right-clicking on the map note icon. Map Notes can be re-configured to point to a different journal entry or page after its creation as well.


### Deleting Notes

A Map Note can be deleted from a Scene by a Gamemaster by hovering your mouse cursor over the note and pressing the Delete key. Alternatively, all Map Notes on the current scene can be deleted by clicking the Map Notes button (bookmark icon) in the scene control toolbar, and clicking "Clear Notes" (trash can icon).

Deleting a placed object like a Map Note will not delete the Journal Entry that it refers to.


## API References

To interact with Map Note objects programmatically, you will primarily use the following API concepts:

- The  Note Object
- The  Notes Canvas Layer
- The  Note Configuration Application

