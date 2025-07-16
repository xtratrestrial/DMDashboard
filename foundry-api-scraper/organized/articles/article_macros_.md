# Macro Commands | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/macros/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Macro Commands


## 

Macros are pre-written commands that you can send to Foundry Virtual Tabletop to do powerful things. With the right macros, you can:

- Speed up tasks you do frequently
- Create splashy effects to wow your players
- Perform several consecutive tasks all at once
- Do things that are impossible with the user interface alone

You can write your own macros, or if that's not your thing, you can use macros that are written and shared by other community members.

Foundry VTT was designed from the ground up to be highly customizable via its powerful JavaScript-based API, making Foundry macros a versatile and powerful tool. Two different types of macros are available:


## The Macro User Interface

Macros can be created and accessed through the Macro Hotbar and Macro Directory located at the bottom of the Foundry window.


#### Macro Hotbar

The Macro Hotbar gives easy access to 10 Macros at a time and can store up to 50 macros. Clicking a Macro in the hotbar executes the Macro. Clicking a blank Macro Hotbar slot allows you to create a new Macro assigned to that slot.

You can populate the Macro Hotbar by dragging and dropping Macros from the Macro Directory (see below). Some game systems also provide the ability to automatically generate a macro by dragging and dropping items or actors onto the Macro Hotbar.

Each Macro Hotbar "slot" also has a keyboard shortcut assigned to it and pressing the assigned key executes the Macro also, just like you clicked it. By default, the assigned keyboard shortcuts are the numbers 1-9, with the number 0 representing the tenth slot. The macro hotbar has five different macro pages that users can switch between, each containing ten macros. The current page can be cycled using the up and down indicators on the right of the macro hotbar (  and  ).

Note: Each user has their own Macro Hotbar, so each person can set their Macros up exactly how they want. If a GM wants to set up a player's Macro Hotbar with useful Macros for them, they can log in as that user.


#### Macro Directory

The Macro Directory ( ) is a small but important folder icon located at the left of the Macro Hotbar.

The Macro Directory provides access to all macros that you have permission to view, and users can create new macros here by clicking the Create Macro button. By default, players do not have access to Macros created by other users. However, a GM can control players' access to a Macro by right-clicking it in the Macro Directory and selecting the "Configure Ownership" option.

Note: Macros use the same permission guidelines found in the Users and Permissions article.


##### Folders in the Macro Directory

You can use the Create Folder button to create folders to help organize your Macros. Macros can then be dragged to and from folders. Folders can be right-clicked, granting access to options that configure the folder and all Macros within it, including:

- Edit Folder: Configure the folder name and color of the folder itself.
- Create Rollable Table: Automatically create a new rolltable that has the macros in the folder as the possible results.
- Remove Folder: Remove the folder (placing the macros back into the folder's parent directory).
- Delete All: Completely delete the folder and all items within it.
- Configure Ownership: Set permissions of the folder itself and all Macros within it.
- Export to Compendium: Export all the macros in a folder to an unlocked compendium.


#### Executing Macros

Macros are most often used by clicking them in the Macro Hotbar or by pressing the keyboard shortcut for the correct slot in the Macro Hotbar (typically the numbers 1-9 and 0). Alternately, you can execute a macro from the Foundry chat box by entering /macro The Macro's Name. You can also execute a Macro directly from its configuration window by pressing the Execute button at the bottom.

`/macro The Macro's Name`
## Sharing, Exporting, and Importing Macros

A simple and effective way to use a Macro that was created by another user is to create a blank, new Macro, then copy and paste the macro's text into it. Macro text is often shared in the Foundry community Discord ((https://discord.gg/FoundryVTT), particularly in the #macro-polo channel or in your individual game system's channel.

`#macro-polo`You can create a blank new Macro by clicking an empty slot in the Macro Hotbar or by clicking the Create Macro Button inside the Macro Directory. Make sure to give the Macro a descriptive name and, if necessary, to change it to a script Macro using the dropdown menu.

Many game systems and modules come with compendiums of Macros. You can add macros from a compendium by dragging them to the Macro Hotbar, Macro Directory, or by right-clicking them and selecting the "Import" option. You can also export individual macros to a JSON file. These Macro JSON files, can then be imported by creating a new blank macro within the Macro Directory, right-clicking it, and selecting the "Import Data" option.

The Foundry community wiki has a number of community-created Macros available here: here.


## Chat and Script Macros


### What Are Chat Macros?

As their name implies, chat macros create chat messages when they are executed. They are simpler to create, but do not have all of the capabilities that a script macro does.

A chat macro can perform many simple tasks, including:

- A simple dice roll command like /r 1d100.
- Displaying pre-written text or an image using HTML tags.
- Linking a document in chat using the syntax @Document[Document Name Here]. Note: Document needs to be replaced with a particular Document Type, for example @Actor[Big Bad Enemy Guy]).

`/r 1d100``@Document[Document Name Here]``Document``@Actor[Big Bad Enemy Guy]`Chat macros work the same as typing a message in chat, and anything you can type into the chat entry field can be entered here. For more information on chat syntax and the possible actions a user can do within the chat entry field, see Chat Messages.


##### Victim Picker

```javascript
/r 1d6#which of my players is the next victim?
```

`/r 1d6#which of my players is the next victim?`
##### Roll DND5E Ability Scores

```javascript
/roll {4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3}#Rolling for DND5e Ability Scores. Don't forget to click to expand the message!
```

`/roll {4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3}#Rolling for DND5e Ability Scores. Don't forget to click to expand the message!`
##### Shanty Time

```javascript
<em><u>Singing:</u>
        There once was a ship that put to sea,
        and the name of the ship was the <b>Billy o' Tea!</b>
        The winds blew hard, her bow dipped down
        Blow, me bully boys, blow!</em>
```

`<em><u>Singing:</u>
        There once was a ship that put to sea,
        and the name of the ship was the <b>Billy o' Tea!</b>
        The winds blew hard, her bow dipped down
        Blow, me bully boys, blow!</em>````javascript
<h2>Foundry VTT is AWESOME!</h2>
        <img src="https://r2.foundryvtt.com/website-uploads-public/asset/user_1/fvtt-community-content-anvil-2020-09-16.png" width="100%"/>
```

`<h2>Foundry VTT is AWESOME!</h2>
        <img src="https://r2.foundryvtt.com/website-uploads-public/asset/user_1/fvtt-community-content-anvil-2020-09-16.png" width="100%"/>`
### What Are Script Macros?

Script macros are more complicated, more powerful commands that can interact with Foundry's JavaScript API. Script macros are limited only by your imagination and the functions available to JavaScript. Users can perform any task using a script macro that their User role and permissions settings allow for them to take. For example, script macros could automatically consume character resources, roll dice checks, toggle conditions, or change Token appearance.

Because script macros are more powerful than chat macros, a Gamemaster can choose to disable script macros for players via the permissions system, which is found in the Configure Settings menu under the Game Settings tab.

These example script macro shows what one of the example chat macros from above, "Victim Picker", might look like as a script macro. This demonstrates both how much of the heavy lifting is done automatically in a chat macro as well as the additional functionality that is available to a script macro.


##### Victim Picker

```javascript
//Pick a victim from one of six possible numbered players and export the results to chat and to the console log

const roll = await new Roll(`1d6`).roll();
console.log(roll);

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>Player ${roll.total}</strong>. Buckle up!</p>`;

ChatMessage.create({
    user: game.user._id,
    content: results_html
});
```

`//Pick a victim from one of six possible numbered players and export the results to chat and to the console log

const roll = await new Roll(`1d6`).roll();
console.log(roll);

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>Player ${roll.total}</strong>. Buckle up!</p>`;

ChatMessage.create({
    user: game.user._id,
    content: results_html
});`So far, there is a lot more code to create output that is similar to the output created by the chat macro version, albeit with greater control over formatting.

However, the script macro version can be improved to do things that are impossible for the chat macro version to do, such as automatically knowing how many users exist and selecting from that list:


##### Better Victim Picker

```javascript
//Pick a victim from the list of users, then output the results to chat and to the console log. Note: The GM is a possible victim!

const victims = game.users.contents;

const roll = await new Roll(`1d${victims.length} - 1`).roll();
const victim = victims[roll.total];
console.log(victim);

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>${victim.name}</strong>. Buckle up!</p>`

ChatMessage.create({
    user: game.user._id,
    content: results_html
});
```

`//Pick a victim from the list of users, then output the results to chat and to the console log. Note: The GM is a possible victim!

const victims = game.users.contents;

const roll = await new Roll(`1d${victims.length} - 1`).roll();
const victim = victims[roll.total];
console.log(victim);

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>${victim.name}</strong>. Buckle up!</p>`

ChatMessage.create({
    user: game.user._id,
    content: results_html
});`
### Example Script Macros

The following examples of script macros illustrate some of what is possible with script macros:

This macro copies all walls and lights from a "template" or "source" scene into the current scene. To use it, replace 9293Opb8eFtD0BxO with the ID of your source scene.

`9293Opb8eFtD0BxO````javascript
const wallData = source.walls.map(i=>i.toObject());
const lightData = source.lights.map(i=>i.toObject());

await canvas.scene.createEmbeddedDocuments("Wall", wallData);
await canvas.scene.createEmbeddedDocuments("AmbientLight", lightData);
```

`const wallData = source.walls.map(i=>i.toObject());
const lightData = source.lights.map(i=>i.toObject());

await canvas.scene.createEmbeddedDocuments("Wall", wallData);
await canvas.scene.createEmbeddedDocuments("AmbientLight", lightData);`After the size of the background image of a scene changes, walls can be out of place. This macro scales the walls up or down by 1% per macro execution. Repeated uses of this macro will allow the scene image and walls to match again.

When you run this macro, all walls are uniformly scaled to be 1% smaller. Hold down the Shift key while executing the macro to make the walls 1% larger instead.

```javascript
class="language-javascript">const source = game.scenes.get("9293Opb8eFtD0BxO");
const walls = canvas.scene.walls;
const scale = event.shiftKey ? 1.01 : 0.99;
const updates = walls.map(w => {
    const c = w.c.map(i => i * scale);
    return {_id: w.id, c};
});
await canvas.scene.updateEmbeddedDocuments("Wall", updates);
```

`class="language-javascript">const source = game.scenes.get("9293Opb8eFtD0BxO");
const walls = canvas.scene.walls;
const scale = event.shiftKey ? 1.01 : 0.99;
const updates = walls.map(w => {
    const c = w.c.map(i => i * scale);
    return {_id: w.id, c};
});
await canvas.scene.updateEmbeddedDocuments("Wall", updates);`Credit: Macro written by Community Helper Zhell.

```javascript
//Rocks Fall, everyone dies.
let targets = []
game.user.targets.forEach(i => {
    const name = i.name;
    targets.push(name);
})

if (targets.length === 0) {targets = "no one, this time"}

let roll = await new Roll(`8d10+100`).roll();
console.log(this.roll)

const results_html = `<h2>Cave In!</h2>
The cave collapses from above, dealing <a class="inline-result"><i class="fas fa-dice-d20"></i>${roll.total}</a> damage to <strong>${targets}</strong>.`

ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: results_html
});
```

`//Rocks Fall, everyone dies.
let targets = []
game.user.targets.forEach(i => {
    const name = i.name;
    targets.push(name);
})

if (targets.length === 0) {targets = "no one, this time"}

let roll = await new Roll(`8d10+100`).roll();
console.log(this.roll)

const results_html = `<h2>Cave In!</h2>
The cave collapses from above, dealing <a class="inline-result"><i class="fas fa-dice-d20"></i>${roll.total}</a> damage to <strong>${targets}</strong>.`

ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: results_html
});`
## Script Macros: Additional Details

The Foundry API allows you to interact with script macros


#### Script Macro Built-in Values

Some values are available directly in Macros without passing them in. For example, if a Token is selected when you execute a Macro, the selected Token is passed to the Macro as the object variable token. The selected Token's Actor is also passed to the Macro as the actor object variable.

`token``actor````javascript
//token and actor do not need to be defined.
console.log("Selected token and actor:");
console.log(token);
console.log(actor);
let msg_html = token ? `<h3>Hey there!</h3><p>Hi, I'm ${actor.name}!</p>` : "Please select a token before using the <i>Hey There</i> macro.";

ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: msg_html
});
```

`//token and actor do not need to be defined.
console.log("Selected token and actor:");
console.log(token);
console.log(actor);
let msg_html = token ? `<h3>Hey there!</h3><p>Hi, I'm ${actor.name}!</p>` : "Please select a token before using the <i>Hey There</i> macro.";

ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: msg_html
});`Note: The token and actorbuilt-in value is most useful when you know that only a single token is collected. When more than one token might be selected, consider using canvas.tokens.controlled instead, which returns an array of all selected tokens. The actor property of one of those tokens can then be used to get that token's actor.

`token``actor``canvas.tokens.controlled``actor`
### Script Macro Arguments

In addition to the built-in token and actor, macros can also have arguments passed to them so that they can be used within the Macro. This can be done programmatically (typically through another macro) or even using the Foundry chat box.

`token``actor`Arguments that are passed into a Macro are available in the scope variable in your Macro. These arguments are also made available as their own variables that you can then use within the macro. For example, if you pass in the argument id it is available at scope.id, and the variable id could now also be called within the macro directly.

`scope``id``scope.id``id`This example demonstrates how to specify a value to use in a macro that you are calling. This time, instead of letting "Better Victim Picker" pick a victim for us, we are going to tell the Attack a Victim! macro exactly who to attack by passing in an argument containing that information. In this case, the macro that we are calling manually ("Attack a Victim!") has its own ID (PNSebX0bAXOCwQ8P in this example).

`PNSebX0bAXOCwQ8P`
##### Best Victim Picker

We are going to create one last version of Victim Picker that allows for manually overriding the victim that is chosen. Additionally, we will build in a return statement for future use. For the sake of this example, let's say that Foundry randomly assigned this macro the id XFmUgx6skqyDo1IW.

`XFmUgx6skqyDo1IW````javascript
//Pick a victim from the list of users, then output the results to chat and to the console log. Note: The GM is a possible victim!

const victims = game.users.contents;

const roll = await new Roll(`1d${victims.length} - 1`).roll();
const victim = victims[roll.total];
console.log(victim);

const victimName = scope.manualVictim ? scope.manualVictim : victim.name;

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>${victimName}</strong>. Buckle up!</p>`

ChatMessage.create({
    user: game.user._id,
    content: results_html
});

return victim;
```

`//Pick a victim from the list of users, then output the results to chat and to the console log. Note: The GM is a possible victim!

const victims = game.users.contents;

const roll = await new Roll(`1d${victims.length} - 1`).roll();
const victim = victims[roll.total];
console.log(victim);

const victimName = scope.manualVictim ? scope.manualVictim : victim.name;

const results_html = `<h3>Victim Selected!</h3>
<p>Something bad is going to happen to <br><strong>${victimName}</strong>. Buckle up!</p>`

ChatMessage.create({
    user: game.user._id,
    content: results_html
});

return victim;`Now, we can create a macro that can pass in manualVictim as an argument so we can "cheat" and always pick a certain victim. Poor Bob.

`manualVictim`
##### Manual Victim Picker

```javascript
//Get the Best Victim Picker macro
const macro = game.macros.get("XFmUgx6skqyDo1IW");
//Execute the Better Victim Picker macro, but manually specify that the victim should be Bob
await macro.execute({victimName:"Bob"});
```

`//Get the Best Victim Picker macro
const macro = game.macros.get("XFmUgx6skqyDo1IW");
//Execute the Better Victim Picker macro, but manually specify that the victim should be Bob
await macro.execute({victimName:"Bob"});`Note: If you pass an argument of the same name as a variable that is provided by default it overrides that default variable. For example, you can pass a variable named token to override and replace the token variable that is available by default in all macros.

`token``token`
#### Macros Return Values

You can even have the return of one Macro serve as an argument for another! In other words, you can use one Macro's output as the input for another Macro.

To demonstrate, let's take another look at the latest version of our macro, "Best Victim Picker." The last line of the macro, return victim; returns the selected token that was chosen so that another macro can potentially use it.

`return victim;`Let's do exactly that by making a version of our "Hey There!" macro called "Attack a Victim!" and have it use the "Better Victim Picker" to choose who to attack.

First, we need a way to refer to the "Better Victim Picker" macro so we can call it. When the Macro was created, Foundry assigned a Macro ID to it. You can easily get a Macro's ID by editing it and clicking the Copy ID button:

For the purposes of this example,  we will say the assigned Macro ID is "3b7YVSvYsaSoGxlY" (remember: your Macro ID will be different, and you have to replace it in the example macro code). We can then use this ID to call that macro from another macro:


##### Attack a Victim!

```javascript
//Use the "Better Victim Picker" macro to choose a victim
    const macro = game.macros.get("3b7YVSvYsaSoGxlY");
    const victim = await macro.execute(); 
    //Logic to manually pick a victim if you'd like
    victimName = scope.manualVictim ? scope.manualVictim : victim.name;

    console.log("Token to attack:");
    console.log(victim);

    let msg_html = token ? `<h3>Attack!</h3><p>I am going to attack you, ${victimName}!</p>` : "Please select a token before using the <i>Attack a Victim!</i> macro.";

    ChatMessage.createv({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({token: actor}),
        content: msg_html
    });
```

`//Use the "Better Victim Picker" macro to choose a victim
    const macro = game.macros.get("3b7YVSvYsaSoGxlY");
    const victim = await macro.execute(); 
    //Logic to manually pick a victim if you'd like
    victimName = scope.manualVictim ? scope.manualVictim : victim.name;

    console.log("Token to attack:");
    console.log(victim);

    let msg_html = token ? `<h3>Attack!</h3><p>I am going to attack you, ${victimName}!</p>` : "Please select a token before using the <i>Attack a Victim!</i> macro.";

    ChatMessage.createv({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({token: actor}),
        content: msg_html
    });`Note that the first macro outputs normally, creating its chat message, but also passes its result along to the second macro.


#### Pass Arguments to Macros From the Chat Box

This example demonstrates how to call a macro from the chat box just like we did from within a macro: /macro Attack a Victim! manualVictim=Bob

`/macro Attack a Victim! manualVictim=Bob`All arguments passed this way are made available to the Macro as Strings. This can be important to keep in mind when dealing with seemingly numeric values such as `10`.


## API References

While anything within the Foundry VTT API can be used within a Macro, the following API concepts are primarily used to interact with the Macros themselves:

- The  Macro Document
- The  Macros Collection
- The  Macro Sidebar Directory

