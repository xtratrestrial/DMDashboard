# Cards | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/cards/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Cards


## 


## Overview

This article covers all of the basics of playing cards, the types of card stacks which can be created by default, and some of the fundamental features that can be used to interact with decks of cards for gameplay. It's important to note that while the implementation of playing cards for Foundry VTT is somewhat basic in its provided functionality, it is designed to allow Game Systems and Modules to customize appearance and functionality to better suit whichever game the cards are being used to play.


#### Folders

This directory can contain folders to organize your world's card decks. For details on how to create and use them please see the Folders article.

This article will detail the features of card stacks, how to create them, and configure them.


## The Card Stack Directory

Card Stacks in Foundry can be viewed, created, and managed in the Card Stacks Directory sidebar. Like the Scenes, Items, and Journal Entries directories, this directory can contain folders to organize your world's card stacks. Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on an card stack can see the card stack and the folder(s) containing it in the Directory.

Card stacks in Foundry VTT can be viewed, created, and managed from the Cards Directory Sidebar tab. Gamemasters, Assistants, and other players with permissions to view card stacks can do so by clicking on a card stack in the Cards Directory. This opens the Card stack sheet, and displays any cards the stack may contain. This sheet may appear differently from screenshots if the system or a module being used modifies how cards appear and function.


#### Sidebar Elements


### Creating and Editing Card Stacks

To create a new Card Stack, click the   Create Card Stack button, this will create a dialog box prompting you to name your card stack. You must also determine the type of card stack you are creating, such as a deck, hand, or pile. Once you have named your stack and selected its type, click Create New Card Stack.

This will add your card stack to the directory sidebar, and open its sheet for you to edit and fill out. Once you are done editing your card stack you can close the window, the changes will be automatically saved. Note that the options you have available on this card stack sheet may be modified by the game system you are using, and may not match the defaults detailed here.


#### Card Stack Types

A collection composed of playing cards which can be dealt to drawn from by card hands. A deck contains options to create and manage the cards stored within it, as well as additional options for shuffling, dealing, or resetting the deck.


#### Default Sheet Configuration

The Card Stack Sheet button ( ) allows you to set which sheet template you want to use for the current card stack, or all card stacks of the same type. Card Stack sheets can change how the card stack's data is displayed and what can be edited.

Most systems will include one sheet template for all card stacks of a single type (deck, hand, pile, etc.) but some may add extra versions. Add-on modules may provide additional options as well.

When a new World is first created, the Card Stacks Directory will initially be empty. Though card stacks can be created fairly quickly from scratch, it may be desirable to import card stacks from pre-configured sources. This can be done in one of two ways: by importing card stacks from a compendium pack, or by importing card stack data directly from an external JSON file.


#### Importing from Compendium

An card stack can be imported from a compendium by either dragging the card stack from the compendium into the Card Stacks Directory, or by right-clicking the card stack in the compendium and selecting "Import". For more information on compendia and how to use them, see the Compendium Packs article.


#### Importing from JSON files

If you have exported card stacks that you would like to bring into a game world you can do so by loading the card stack info directly from a JSON file. This can be accomplished by right-clicking an card stack in the Directory and selecting "Import Data." This will open a file browser that allows you to select the desired JSON file to import. Once selected the JSON file's data overwrite the existing card stack you imported the data into.

You can export an card stack's data by right-clicking an card stack in the Directory and selecting the "Export Data" option. This will prompt you to save a JSON file with the card stack data in it.


### Adding Cards to Card Stacks

If you do not use a preset deck, you will need to create each card in your deck individually. After creating a Deck, you can click the "add" option in the header which will prompt you for the name of the new card, once entered it will also provide you with an editing window for the card, allowing you to set a variety of fields such as the suit, type, value, dimensions, number of faces and their related images, images to use and much more.


#### Card Details


#### Card Face


#### Card Back


#### Deck Presets

Foundry Virtual Tabletop comes with two pre-configured standard 52-card poker decks, and also includes images for the jokers, though they must be added separately. When creating a deck, you can select either Poker Deck (Dark) or Poker Deck (Light) to generate a poker deck with those cards ready to play.

Other modules and game systems may add new deck presets which can be used when creating a deck.


## Using Card Stacks

Once a deck of cards has been created, cards can be dealt to hands, drawn from decks by hands, and passed to piles or hands. These actions are shared by most of the


### Moving Cards

Cards can be moved between hands, piles and decks in any of the following ways:

Opens a dialog prompt which asks what hands or piles should receive cards, how many cards to deal to the selected recipients, and what method to use for drawing cards. Additionally, you can choose to have cards dealt face down, which causes the card backs to be shown to the recipient instead of the card faces.

Pressing Deal in this dialog will pass the number of cards out to each selected card stack, marking each card as Drawn in the Deck. You must have at least one recipient for the deal for this action to complete.

Opens a dialog prompt which asks how many cards should be drawn from a deck, or passed to a card stack(or hand), and what draw method to use. Additionally, you can choose to pass or draw cards face down, which displays their back image instead of face images. Pressing Deal in this dialog will pass the number of cards out to each selected card stack.

One one source or recipient can be chosen at a time when passing cards or drawing cards.

Cards can be played from either Card Piles or Card Hands, allowing them to be passed to new destination which must be another pile or hand in the game world. Cards cannot be played to themselves.

To play a card click the play card ( ) button. This will open the play card dialog, which will display the card's face art and allow you to select the destination of the card, as well as whether that card should be delivered face up, or face down (displaying is back art instead of face).


#### Draw Mode

When cards are drawn, one of three draw modes can be select: Top (first), Bottom (last) or Random.

The Top draw mode takes the highest cards in the stack list first, in order, while the Bottom draw mode starts with the last card in the list. The random draw mode ignores the order of the cards in the stack being drawn from and randomly selects cards from all available options.


### Card Stack Actions

Each of the different card stack types have different actions available to them in addition to being able to play, pass, deal or draw cards as explained in the above section.

From the  Configuration tab of the deck screen you can set the default back image used for any cards taken from this deck, and set a description of the deck itself.

If a Card Stack is set to the type "Deck" you may perform any of the following actions from its  Cards tab.

Card Stacks set to the type "Hand" are allowed to play cards, draw new cards, or pass cards, and are meant to represent a player's hand of usable cards, such as in a poker game.

Card Stacks which are set to the "Pile" type function similar to a deck, and provide the following options for interacting with cards:

All card stacks in the Card Directory can be right-clicked to open up a context menu which allows for additional actions used to manipulate stacks.

