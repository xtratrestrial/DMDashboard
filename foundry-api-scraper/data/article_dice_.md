# Basic Dice | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/dice/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Basic Dice


## 


## Overview

This article covers all of the basics of rolling dice, the various roll modes available to users, and some of the fundamental features that can be used to notate rolls during play. For more advanced dice rolling concepts, and API references see the Advanced Dice article. In addition to the basic types of rolling covered in this article, Foundry Virtual Tabletop provides a number of modifiers which can be used to change how dice work in order to support different game systems. For a comprehensive listing dice modifiers consult the Dice Modifiers article.


## Roll Modes

Before learning to roll dice, it is important to be familiar with the concept of "roll modes" which affect the visibility and presentation of dice rolls.

Every dice roll becomes a message in the chat log, but the visibility of that message and the details of the roll can be controlled by the user. At the bottom of the chat log there is a drop down list of roll types, these determine who can see the roll made by your /roll command.

`/roll`The /roll command will always roll using the selected type of roll, but other types of rolls can be made using their specific commands, which are listed below.

`/roll`This roll is visible to all players. To perform a public roll, use /publicroll or /pr as the command prefix.

`/publicroll``/pr`Rolls of this type are only visible to the player that rolled and any Game Master users. To perform a GM roll, use /gmroll or /gmr as the command prefix. A GM or the user who made the roll may choose to reveal this roll.

`/gmroll``/gmr`A private dice roll only visible to Game Master users. The rolling player will not see the result of their own roll. This is similar to using a dice tower or other device at a physical tabletop where the roller may not get to see the outcome. To perform a blind roll, use /blindroll, /broll, or /br as the command prefix. Only the GM may choose to reveal this roll.

`/blindroll``/broll``/br`A private dice roll which is only visible to the user who rolled it. To perform a self roll, use /selfroll or /sr as the command prefix. Whether a GM or Player uses a self roll, only the user who made the roll can choose to reveal it.

`/selfroll``/sr`A roll that is made in private (such as a Private GM Roll, Blind GM Roll, or Self Roll) may be revealed to the other users by right-clicking and choosing Reveal to Everyone. Public rolls, and rolls that have been revealed to everyone can be hidden again by the same method, instead choosing the Make Private option.


### Expanding Rolls

Once a roll has been made and appears in the chat log, users can click on that message to expand the results, showing the individual dice rolls that determined its outcome. Clicking the chat message a second time collapses the results again.


## Roll Commands

A dice roll can be made by entering the /roll (or /r) chat command followed by some simple syntax to identify the number of dice, and which type of die you wish to roll. This roll command uses whichever Default Roll Mode is currently set by the user.

`/roll``/r`All of the example rolls on this page may be pasted directly into Foundry VTT exactly as they are, including commented text which will label the roll explaining what it does.

```javascript
/r {number of dice}d{faces}
```

`/r {number of dice}d{faces}````javascript
/r 5d20 #Rolls five twenty-sided dice, generating random numbers from 1 to 20, and outputting the sum of all rolls.
```

`/r 5d20 #Rolls five twenty-sided dice, generating random numbers from 1 to 20, and outputting the sum of all rolls.`Most dice rolls result in a number that is the sum of any dice rolled, and simple math modifiers can be used to increase or decrease this result after rolls are made.

- + adds the number that follows it to the sum of the roll.
- - subtracts the number that follows it from the sum of the roll.
- * multiplies the sum of the roll by the number given.
- / divides the sum of the roll by the number given.

`+``-``*``/````javascript
/roll {number}d{faces}{math}{number}d{faces}
```

`/roll {number}d{faces}{math}{number}d{faces}`Roll one ten-sided die and add to it the result of rolling a single four-sided die.

```javascript
/roll 1d10 + 1d4 + 4
```

`/roll 1d10 + 1d4 + 4`Roll one twenty-sided die, divide the number by 2, then add 10 to the result.

```javascript
/roll 1d20 / 2 + 10
```

`/roll 1d20 / 2 + 10`Roll a one hundred-sided die, multiply that number by 2, then divide it by the result of rolling a four-sided die.

```javascript
/roll 1d100 * 2 / 1d4
```

`/roll 1d100 * 2 / 1d4`Roll one twenty-sided die, and divide it by 3.

```javascript
/roll 1d20 / 3
```

`/roll 1d20 / 3`Using simple math, users can also add additional dice of different sizes to a roll. The above simple math expressions to determine how they are meant to interact. Math expressions can also be used to combine rolls of different dice types and add them together.

```javascript
/roll {number}d{faces}{math}{number}d{faces}
```

`/roll {number}d{faces}{math}{number}d{faces}`Roll one ten-sided die and add to it the result of rolling a single four-sided die.

```javascript
/roll 1d10 + 1d4 + 4
```

`/roll 1d10 + 1d4 + 4`Roll one twenty-sided die, divide the number by 2, then add 10 to the result.

```javascript
/roll 1d20 / 2 + 10
```

`/roll 1d20 / 2 + 10`Roll a one hundred-sided die, multiply that number by 2, then divide it by the result of a four-sided die.

```javascript
/roll 1d100 * 2 / 1d4
```

`/roll 1d100 * 2 / 1d4`DnD 3.5e, Pathfinder - Critical Hit Multiplier: roll one eight-sided die, add 4 to the result, then multiply it by 2.

```javascript
/r (1d8+4) * 2
```

`/r (1d8+4) * 2`
## Inline Rolls

If a chat message contains a roll formula, Foundry VTT will automatically run the formula for the roll and place the result or command in the message with special style formatting. Anything that a regular roll command can do, an Inline Roll can do.

Inline rolls can also be used in a Journal Entry, or any other place that the TinyMCE Rich Text Editor appears, such as Item or Action description fields.

There are two types of inline roll:


#### Immediate Inline Rolls

These rolls are processed and the result of the roll is placed in the chat message. This is useful for including simple rolls inside of descriptive actions.

```javascript
The boulders drop onto the player character, dealing [[2d12]] bludgeoning damage.
```

`The boulders drop onto the player character, dealing [[2d12]] bludgeoning damage.`
### Deferred Inline Rolls

Deferred rolls provide a way to embed a button in your chat message which, when clicked by any user, makes a new roll containing that formula.

```javascript
Can everyone roll a [[/roll 1d10]] for me?
```

`Can everyone roll a [[/roll 1d10]] for me?`
## Describing Rolls

Users can add a text description to a roll by adding a # and desired text at the end of the /roll chat command. The text appears under the name of the user that made the roll.

```javascript
/r {roll command} # {desired text}
```

`/r {roll command} # {desired text}`Example: roll a 20-sided die, adding 2 to the result. Includ some text to describe the roll.

```javascript
/r 1d20 + 2 # This is my roll!
```

`/r 1d20 + 2 # This is my roll!`
### Describing Dice

In addition to whole rolls, individual rolls inside multiple roll commands can be commented to specify what the roll is for. This is most useful in games where one or more types of die combine to deliver a total amount of damage.

```javascript
/roll {roll}[desired text for roll]
```

`/roll {roll}[desired text for roll]`Roll two six-sided dice with the tag of "slashing damage" followed by one eight-sided die with the tag of "fire damage."

```javascript
/roll 2d6[slashing damage]+1d8[fire damage]
```

`/roll 2d6[slashing damage]+1d8[fire damage]`
### Describing Inline Rolls

Inline rolls can be described by adding text after the inline roll surrounded by brackets as such:

```javascript
[[inline roll formula]]{inline roll label}
```

`[[inline roll formula]]{inline roll label}`If a deferred role is labeled, but has no flavor text in the formula otherwise, the label is included in the resulting roll as flavor text.

