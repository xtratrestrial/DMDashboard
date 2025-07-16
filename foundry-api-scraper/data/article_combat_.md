# Combat Encounters | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/combat/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Combat Encounters


## 


## Overview

A fight scene, race, or any particular set of people taking turns performing actions in-game can be considered an "Encounter." An encounter is tied to a specific Scene, which is the one currently being viewed when it is created. Players will only see the encounter in the Combat Tracker if they are currently viewing that scene. When first creating a world in Foundry, there will be no encounters created. An encounter can be easily created with the Create Encounter button found at the top left of the Combat Tracker.

Most game systems make use of situations that rely on characters taking turns, such as time-sensitive combat scenes in roleplaying games. Foundry Virtual Tabletop supports managing turn-based combat scenarios through its Combat Tracker sidebar. This article uses the word "initiative" in a general sense to represent the concept of a numeric ranking of turn order.


## Creating Encounters

The Combat Tracker is accessed from the second icon in the sidebar, marked as a fist. Here, encounters and their listed combatants can be viewed and managed. Like all sidebars, the Combat Tracker can be popped out into its own draggable, resizable window by right-clicking its icon at the top of the sidebar.


### Creating Combat Encounters

As the Gamemaster, you can follow these steps to quickly create and manage an encounter in FVTT.

- Navigate to the scene where the encounter takes place.
- Select all tokens that are to be included in the encounter, through dragging a rectangle over the combatants or selecting each token with Shift + Left click. With all combatants selected, Right click one of the tokens, and click "Toggle Combat State" (the swords and shield icon) to add the selected tokens to an encounter. Additionally, players can add their own characters to the encounter by clicking this button on their tokens.
- Roll initiative for all combatants at once using the Roll All button, or roll for just NPCs using the Roll NPCs button, allowing your players to roll initiative for their own characters.
- With initiative rolled for all combatants, click the Begin Combat button at the bottom of the Combat Tracker to start the encounter.
- Carry out character's turns. Players can end their own characters' turns, but NPCs must have their turn ended by a user with the Gamemaster or Assistant role. This can be done by clicking the "Next Turn" button at the bottom of the Combat Tracker.
- When combat has concluded, end the encounter by clicking the "End Combat" button at the bottom of the Combat Tracker. This will delete the encounter and toggle the combat state of all combatants.


## Encounter Tracker UI

The combat tracker or encounter tracker allows for users to see the current turn order of an encounter, who is currently allowed to act, and who will be able to act next. When an encounter is first created and filled with combatants, players are able to roll their own characters' initiative if desired, using the Roll Initiative button.

More than one encounter can be tracked, and scenes can have multiple encounters being tracked at once, allowing the Gamemaster to manage multiple fights or encounters happening together with their own separate turn orders. The combat tracker UI changes depending on the status of the encounter currently active in the tracker.

Additionally, the combat tracker can be popped out from the sidebar by right-clicking the fist icon ( ) in the sidebar row. This allows users to reposition the combat tracker elsewhere on the screen and also access other sidebar tabs without losing sight of the current encounter and turn order.


## Combatants

Encounters are made up by their participants. These participants, known in Foundry as "Combatants", are the actors that take turns with each other in the encounter. You can add a combatant to an encounter by right-clicking a token and clicking the "Toggle Combat State" button, marked by two swords and a shield. If an encounter doesn't exist on the scene, an encounter will be created for the combatant. At this point, a player who controls the combatant can roll for initiative by clicking the Roll Initiative die icon by the combatant in the Combat Tracker.

Right-clicking a combatant in the combat tracker opens a context menu with various quick actions, detailed below.

Foundry VTT allows the GM to edit combatants that have been entered into a combat tracker, to change the name which is displayed, their initiative position, and even whether their entries are visible to players in the tracker.

- Represented Actor & Token: This shows the actor and token which are represented by this combatant. These fields are automatically filled out and cannot be manipulated.
- Displayed Name: The name that players will see for this combatant.
- Thumbnail Image: The image used for the combatant in the combat tracker. This defaults to the actor's scene token, but can be changed using this field and the file picker. This change is only represented in the combat tracker itself.
- Initiative Value: A numerical value to denote when this combatant will take its turn. This is automatically filled when initiative is rolled for the combatant. It can be directly modified to adjust the combatant's place in the turn tracker.
- Status Toggles: These toggles allow the game master to directly set toggles that function identically to the toggles in the main combat tracker. Hidden hides the entry for this combatant in the tracker from players completely, while defeated shows players the combatant as faded out.


## API References

To interact with Items programmatically, consider using the following API concepts:

- The  Combat Document
- The  CombatEncounters Collection
- The  Combat Tracker Sidebar Tab
- The  Combatant Document
- The  Combatant Configuration Sheet

"Haunted Library" map and Tokens by ForgottenAdventures on Patreon.

