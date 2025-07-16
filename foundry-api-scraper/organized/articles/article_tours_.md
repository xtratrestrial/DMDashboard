# Tours | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/tours/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Tours


## 


## Overview

Tours are guides that provide step-by-step instructions and information about game systems, Foundry VTT's UI, and more. The Tours Management Panel contains all of the available tours provided by modules and game systems, allowing you to run and reset them as needed. The UI for tours, and how to start, resume or reset tours is explained in this article.


## Using Tours

When a tour is running, a small dialog box will pop up that includes instructional or informative text. These boxes can also include images and animations, if the creator has chosen to do so. In addition to this, Tours will highlight areas relevant to the dialog box, such as the User Interface, parts of Journal Entries, or areas of the game canvas itself. All tour guide boxes have the following elements in common:

- Step Counter (Step # of #): This shows your current step and how many total steps the current tour has. A tour is marked completed once you have viewed all of the steps in it.
- Next Step ( ): This moves the tour to the next available step, if there is one.
- Previous Step ( ): This moves the tour back to the previous step, if there is one.
- Close Tour ( ): This closes the tour. If the tour was not complete, your progress will be saved.


## Tours Management Panel

From the Game Settings tab (  on the sidebar) clicking the button labeled   Tour Management will open the tour management panel. This panel displays all of the tours available for the game world. Tours can come from the core software, add-on modules and game systems, all of which appear in this menu. There are only three parts to this panel, the tour filter which allows sorting and searching, the tour categories which show the source of all available tours while allowing for sorting which tours are shown, and the tour list, which shows all of the available tours and their current status.


### Tour List

The Tour List shows all of the available tours in the world and their status. Its features are explained below.

Note: Not all tours in a world will appear in this list as some can be set up to opt out of appearing in the management panel. These tours are usually triggered by specific criteria elsewhere, or are triggered by links or buttons present elsewhere in the UI.


#### Playing Tours

Starting (or resuming) a tour is straightforward: simply click the play button ( ). This will start playing the tour from the beginning, or pick up from the last step the tour was on before it was closed. A tour that has been completed will be grayed out and must be reset before it can be played again.

To reset a tour's progress, simply click the reset tour button ( ). This sets the tour back to its beginning steps and allows you to play it from the very start again.

To reset all tours in the current list you can use the   Reset All Tours button at the top of the tour management panel.


### Tour Categories

This lists all the possible filter categories available in the Tour Management panel. The All Tours category is always selected by default. Clicking on one of the categories will limit the visible tours to only the ones that match the chosen filter, allowing users to see what tours are added from what source in the game world.


### Tour Filter

You can use the Tour Filter to find a specific tour that matches the terms entered into the dialog box. This is useful for looking up specific tours you want to view or reset in the list.


## API Reference

To interact with tours programmatically, consider using the following API concepts:

- The  Tours Class

