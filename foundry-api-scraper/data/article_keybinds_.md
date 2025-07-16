# Keybinds | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/keybinds/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Keybinds


## 


## Overview

The Configure Controls Panel contains all of the actions in the the Foundry application and what keys are bound to them, allowing you to view and configure the keyboard commands associated with them. Almost all of these actions can have their associated keybindings completely changed from the default to suit whatever workflow you are most comfortable with. The workflow for opening, editing, and resetting keybinds is explained in this article.


## Configuring Controls

From the Game Settings ( ) sidebar tab the keybind configuration menu can be opened by clicking the   Configure Controls button. This panel displays all of the actions available for the core software, plus those of any modules or game systems which have added custom keybinds and made them available to edit. There are only three parts to this panel, the action filter which allows sorting and searching, the action categories which allow for sorting what actions are shown, and the action list, which shows all of the available actions and their keybinds.

An action is anything that the software can do, such as "Toggle Character Sheet" or "Target Token," these cannot be changed or deleted, and are distinct from keybindings, which are keyboard commands used to trigger the effect.

To add a new keybind click the create new keybinding button ( ) next to the action you want to add a new keybind to. This will create a new empty binding which you can select and define a key. This process is identical to that of editing a keybind. Saving the keybind will add it to the possible keybinds that will trigger that function. There is no upper limit to the number of additional keybinds a function can have.

Editing existing keybinds is straightforward and simple using our Keybind UI. To edit an existing keybind, find the action you wish to change and then either click the edit button ( ), or double click the displayed keybind for the action. This will change the existing keybind to a text field with a keyboard ( ) next to it indicating it is waiting to receive a key press.

While this field is active any keys or key combinations pressed will be displayed in the field as the new, pending key bind. To save this key or key combination simply click the save icon ( ) to make the key choice final. If during this edit process you decide you do not want the current keybind and want to keep the previous one, simple click the delete keybind button ( ), this will discard the current pending keybind and stop the keybind editing process.

Note:There are some keybinds that cannot be edited, these will not have the normal editing icons and will instead have a grayed out lock icon ( ).

To delete an additional keybind, simply click the Delete Keybind button ( ), this will delete the keybind from the action list. Using the Delete Keybind button on a keybind will not delete it from the list but instead delete any custom keybind that has been set for it.

You can also use the   Reset Defaults button at the top of the configure controls panel to reset all keybindings to their default settings. If you have configured any custom key binding you will be asked to confirm this reset so that you don't accidentally lose your custom binds.


### Key Conflicts

The Configure Controls menu detects possible conflicts between keybinds and will display a yellow warning sign ( ) beside any actions that may conflict with another keybind. Hovering your cursor over the yellow warning icon will present a tooltip indicating what keybind(s) are in conflict. Not all conflicts need to be resolved, as the bindings used may only have an effect in certain contexts. For example, Move Along Measured Ruler and Pause Game conflict in the binding menu but do not conflict during use of the software.


## API Reference

To interact with keybinds programmatically, consider using the following API concepts:

- The  ClientKeybindings class

