# Dice Modifiers | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/dice-modifiers/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Dice Modifiers


## 


## Overview

This article covers all of the roll modifiers that Foundry VTT currently offers and how to use them. For an introduction to simple dice concepts see the Basic Dice article. For more advanced dice rolling concepts, and API references see the Advanced Dice article.


## Roll Modifiers

In addition to basic arithmetic and adding text comments to rolls, there are a variety of short-hand modifiers which can be used to change the way a dice roll is processed. These modifiers are conditional, and only trigger in certain (defined) circumstances.


## Re-rolls and Exploding Dice

Roll one ten-sided die, and re-roll it if the result is a 1.

```javascript
/roll 1d10r1
```

`/roll 1d10r1`Roll one twenty-sided die, and if the result is less than 10, re-roll it.

```javascript
/r 1d20r<10
```

`/r 1d20r<10`Roll one twenty-sided die, and if the result is less than 3, re-roll it, including any results that are also less than 3.

```javascript
/r 1d20rr<3
```

`/r 1d20rr<3`Roll five ten-sided dice, and if any of the individual results are a 10, roll another ten-sided die add the result to the total.

```javascript
/r 5d10x10
```

`/r 5d10x10`Roll one twenty-sided die, rolling additional dice if the result is less than 10, until one of the dice is ten or better, which is the only result it will keep.

```javascript
/r 1d20x<10kh
```

`/r 1d20x<10kh`Roll six ten-sided dice, and roll one additional die for each 10 rolled, but do not re-roll 10s on the additional die, adding them to the total.

```javascript
/r 6d10xo10
```

`/r 6d10xo10`Roll six ten-sided dice, and roll one additional die for each 10 rolled (up to a maximum of 5 times), adding them to the total.

```javascript
/r 6d10x5=10
```

`/r 6d10x5=10`Roll six ten-sided dice, and roll one additional die for each 9 or 10 rolled (up to a maximum of 2 times), adding them to the total.

```javascript
/r 6d10x2>=9
```

`/r 6d10x2>=9`Chronicles of Darkness - Rote Rolls; roll five ten-sided dice, re-rolling any dice that fall under 8, and re-rolling any dice that score a 10, before counting the total successes in the roll.

```javascript
/r 5d10xo<8x10cs>=8
```

`/r 5d10xo<8x10cs>=8`
## Keeping or Dropping Results

Roll three ten-sided dice, keeping the highest of the three.

```javascript
/r 3d10k
```

`/r 3d10k`Roll four six-sided dice, keeping the three highest rolls available.

```javascript
/r 4d6k3
```

`/r 4d6k3`DND 5e - Advantage: Roll two twenty sided dice, and use the higher of the two for the final result which has 2 added to it.

```javascript
/roll 2d20kh + 2
```

`/roll 2d20kh + 2`Roll three ten-sided dice, keeping the lowest of the three.

```javascript
/r 3d10kl
```

`/r 3d10kl`Roll four six-sided dice, keeping the three lowest rolls available.

```javascript
/r 4d6kl3
```

`/r 4d6kl3`DND 5e -Disadvantage: Roll two twenty sided dice, and use the lower of the two for the final result which has 5 added to it.

```javascript
/roll 2d20kl + 5
```

`/roll 2d20kl + 5`Roll three six-sided dice, dropping the lowest number rolled of the three.

```javascript
/r 3d6d
```

`/r 3d6d`Roll four ten-sided dice, dropping the two lowest numbers rolled.

```javascript
/r 4d10d2
```

`/r 4d10d2`Roll three six-sided dice, dropping the highest number rolled of the three.

```javascript
/r 3d6dh
```

`/r 3d6dh`Roll four ten-sided dice, replacing any 1s with 2s

```javascript
/r 4d10min2
```

`/r 4d10min2`Roll four ten-sided dice, replacing any 9s or 10s with 8s.

```javascript
/r 4d10max8
```

`/r 4d10max8`
## Successes and Failures

Roll ten twenty-sided dice, and count a success for each die which rolls a 20.

```javascript
/r 10d20cs20
```

`/r 10d20cs20`Roll ten twenty-sided dice and count a success for each die which rolls above a 10.

```javascript
/r 10d20cs>10
```

`/r 10d20cs>10`Roll six ten-sided dice and count a success for each die which rolls a 6 or higher.

```javascript
/r 6d10cs>=6
```

`/r 6d10cs>=6`Roll a single one-hundred sided die and count a success if the result is 20 or lower.

```javascript
/r 1d100cs<=20
```

`/r 1d100cs<=20`Roll three six-sided dice and count a success for each die which rolls an even number.

```javascript
/roll 3d6even
```

`/roll 3d6even`Roll three six-sided dice and count a success for each die which rolls an odd number.

```javascript
/roll 3d6odd
```

`/roll 3d6odd`World of Darkness - Dice vs Difficulty: roll five ten-sided dice, counting any roll of a 6 or higher as a success, while deducting a success for any roll that is a 1.

```javascript
/r 5d10cs>=6df=1
```

`/r 5d10cs>=6df=1`Chronicles of Darkness - Dice vs Difficulty: Roll five ten-sided dice, counting a success for every die that rolls 8 or higher, and rolling an additional die any time a result of 10 is rolled.

```javascript
/r 5d10cs>=8x=10
```

`/r 5d10cs>=8x=10`Chronicles of Darkness - 9 again and 8 again using exploding dice: roll five dice, counting a success for every die that rolls 8 or higher, and rolling an additional d10 any time a 9 or 10 is rolled.

```javascript
/r 5d10cs>=8x>=9
```

`/r 5d10cs>=8x>=9`Roll ten dice, counting a success for every die that rolls 8 or higher, and rolling an additional d10 any time an 8 or higher is rolled.

```javascript
/r 10d10cs>=8x>=8
```

`/r 10d10cs>=8x>=8`Rolls ten twenty-sided dice, and counts a failure for each die which rolls a 20.

```javascript
/r 10d20cf20
```

`/r 10d20cf20`Roll ten twenty-sided dice and count a failure for each die which rolls over a 10.

```javascript
/r 10d20cf>10
```

`/r 10d20cf>10`Roll six ten-sided dice and count a failure for each die which rolls a 6 or higher.

```javascript
/r 6d10cf>=6
```

`/r 6d10cf>=6`Roll a single one-hundred sided die and count a failure if the result is 20 or lower.

```javascript
/r 1d100cf<=20
```

`/r 1d100cf<=20`Roll four six-sided dice, treating any roll of exactly 6 as a success, and removing 1 from the final result for each die that rolls a 1.

```javascript
/r 4d6cs6df1
```

`/r 4d6cs6df1`Roll ten ten-sided dice, treating any roll of 6 or better as a success, and removing 1 from the final result for each die which rolls a 1.

```javascript
/r 10d10cs>5df1
```

`/r 10d10cs>5df1`Chronicles of Darkness - Chance Rolls: roll a single ten-sided die, counting a 10 as a success and a 1 as a failure.

```javascript
/r 1d10cs=10df=1
```

`/r 1d10cs=10df=1`Roll three six-sided dice, and subtract the value of any dice that roll lower than three.

```javascript
/r 3d6sf<3
```

`/r 3d6sf<3`Roll three six-sided dice and subtract 10 from the final result.

```javascript
/r 3d6ms10
```

`/r 3d6ms10`
## Special Dice

Foundry Virtual Tabletop also natively supports two special types of dice: Coins, and FATE Dice.

Coins are two-sided dice with two results: heads, or tails. They can be rolled as any other die, but are not affected by mathematical expressions, though they can still be combined with other dice types. Coins also allow the roller to call (c) a specific result in advance, which will treat rolling coins similarly to "count success". By default, Coins tally the number of heads as successes in the results.

```javascript
/roll 4dc # Flip four coins.
```

`/roll 4dc # Flip four coins.````javascript
/roll 3dcc1 # Flip three coins and tally the number of coins that result in Heads
```

`/roll 3dcc1 # Flip three coins and tally the number of coins that result in Heads````javascript
/roll 3dcc0 # Flip a number of coins and tally the number of coins that result in Tails
```

`/roll 3dcc0 # Flip a number of coins and tally the number of coins that result in Tails`Fate dice are six-sided dice that can roll a plus, minus, or blank face. They are used in the fudge and fate systems, and are rolled like any other dice in foundry, but are not affected by mathematical expressions, as their faces have no numerical values and are considered a zero.

```javascript
/r 4df # Roll 4 fate dice, generating a random number of plus, minus, or blank results.
```

`/r 4df # Roll 4 fate dice, generating a random number of plus, minus, or blank results.`