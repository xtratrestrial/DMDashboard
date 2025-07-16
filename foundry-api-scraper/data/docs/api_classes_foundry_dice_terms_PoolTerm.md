# PoolTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.PoolTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- PoolTerm


# Class PoolTerm

A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.

A dice pool represents a set of Roll expressions which are collectively modified to compute an effective total
across all Rolls in the pool. The final total for the pool is defined as the sum over kept rolls, relative to any
success count or margin.


#### Example: Keep the highest of the 3 roll expressions

```javascript
let pool = new PoolTerm({  terms: ["4d6", "3d8 - 1", "2d10 + 3"],  modifiers: ["kh"]});pool.evaluate();
Copy
```

`let pool = new PoolTerm({  terms: ["4d6", "3d8 - 1", "2d10 + 3"],  modifiers: ["kh"]});pool.evaluate();`
#### Hierarchy (View Summary)

- RollTermPoolTerm
- PoolTerm

- PoolTerm


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.

Inherited from RollTerm._root


### isIntermediate

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from RollTerm.isIntermediate


### modifiers

The string modifiers applied to resolve the pool


### options

An object of additional options which describes and modifies the term.

Inherited from RollTerm.options


### results

The array of dice pool results which have been rolled


### rolls

Each component term of the dice pool as a Roll instance.


### terms

The original provided terms to the Dice Pool


### StaticCLOSE_REGEXP

`Static`A regular expression pattern used to identify the closing of a dice pool expression.


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP_STRING


### StaticMODIFIERS

`Static`Define the modifiers that can be used for this particular DiceTerm type.


### StaticOPEN_REGEXP

`Static`The regular expression pattern used to identify the opening of a dice pool expression.


### StaticREGEXP

`Static`A regular expression pattern used to match the entirety of a DicePool expression.

Overrides RollTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized

Overrides RollTerm.SERIALIZE_ATTRIBUTES


## Accessors


### dice

- get dice(): DiceTerm[]Return an Array of each individual DiceTerm instances contained within the PoolTerm.
Returns DiceTerm[]

Return an Array of each individual DiceTerm instances contained within the PoolTerm.


#### Returns DiceTerm[]


### expression

- get expression(): stringA string representation of the formula expression for this RollTerm, prior to evaluation.
Returns stringOverrides RollTerm.expression

A string representation of the formula expression for this RollTerm, prior to evaluation.


#### Returns string

Overrides RollTerm.expression


### flavor

- get flavor(): stringOptional flavor text which modifies and describes this term.
Returns stringInherited from RollTerm.flavor

Optional flavor text which modifies and describes this term.


#### Returns string

Inherited from RollTerm.flavor


### formula

- get formula(): stringA string representation of the formula, including optional flavor text.
Returns stringInherited from RollTerm.formula

A string representation of the formula, including optional flavor text.


#### Returns string

Inherited from RollTerm.formula


### isDeterministic

- get isDeterministic(): booleanWhether this term is entirely deterministic or contains some randomness.
Returns booleanOverrides RollTerm.isDeterministic

Whether this term is entirely deterministic or contains some randomness.


#### Returns boolean

Overrides RollTerm.isDeterministic


### resolver

- get resolver(): RollResolverA reference to the RollResolver app being used to externally resolve this term.
Returns RollResolverInherited from RollTerm.resolver

A reference to the RollResolver app being used to externally resolve this term.


#### Returns RollResolver

Inherited from RollTerm.resolver


### total

- get total(): undefined | numberA string or numeric representation of the final output for this term, after evaluation.
Returns undefined | numberOverrides RollTerm.total

A string or numeric representation of the final output for this term, after evaluation.


#### Returns undefined | number

Overrides RollTerm.total


### values

- get values(): number[]Return an array of rolled values which are still active within the PoolTerm
Returns number[]

Return an array of rolled values which are still active within the PoolTerm


#### Returns number[]


## Methods


### _evaluate

- _evaluate(options?: {}): PoolTerm | Promise<PoolTerm>Evaluate the term.
Parametersoptions: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns PoolTerm | Promise<PoolTerm>Returns a Promise if the term is non-deterministic.
Overrides RollTerm._evaluate
- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Evaluate the term.


#### Parameters

- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns PoolTerm | Promise<PoolTerm>

Returns a Promise if the term is non-deterministic.

Overrides RollTerm._evaluate


### _evaluateModifier

- _evaluateModifier(command: string, modifier: string): Promise<void>InternalUse the same logic as for the DiceTerm to avoid duplication
Parameterscommand: stringmodifier: stringReturns Promise<void>Seefoundry.dice.terms.DiceTerm#_evaluateModifier
- command: string
- modifier: string

`Internal`Use the same logic as for the DiceTerm to avoid duplication


#### Parameters

- command: string
- modifier: string


#### Returns Promise<void>


#### See

foundry.dice.terms.DiceTerm#_evaluateModifier


### _evaluateModifiers

- _evaluateModifiers(): Promise<void>InternalUse the same logic as for the DiceTerm to avoid duplication
Returns Promise<void>Seefoundry.dice.terms.DiceTerm#_evaluateModifiers

`Internal`Use the same logic as for the DiceTerm to avoid duplication


#### Returns Promise<void>


#### See

foundry.dice.terms.DiceTerm#_evaluateModifiers


### alter

- alter(...args: any[]): PoolTermAlter the DiceTerm by adding or multiplying the number of dice which are rolled
Parameters...args: any[]Arguments passed to each contained Roll#alter method.
Returns PoolTermThe altered pool
- ...args: any[]Arguments passed to each contained Roll#alter method.

Alter the DiceTerm by adding or multiplying the number of dice which are rolled


#### Parameters

- ...args: any[]Arguments passed to each contained Roll#alter method.

Arguments passed to each contained Roll#alter method.


#### Returns PoolTerm

The altered pool


### countFailures

- countFailures(modifier: string): undefined | falseCount the number of failed results which occurred in a given result set.
Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)
6d6cf      Count the number of dice which rolled a 1 as failures
6d6cf<=3   Count the number of dice which rolled less than 3 as failures
6d6cf>4    Count the number of dice which rolled greater than 4 as failures
Parametersmodifier: stringThe matched modifier query
Returns undefined | false
- modifier: stringThe matched modifier query

Count the number of failed results which occurred in a given result set.
Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)

6d6cf      Count the number of dice which rolled a 1 as failures
6d6cf<=3   Count the number of dice which rolled less than 3 as failures
6d6cf>4    Count the number of dice which rolled greater than 4 as failures


#### Parameters

- modifier: stringThe matched modifier query

The matched modifier query


#### Returns undefined | false


### countSuccess

- countSuccess(modifier: string): undefined | falseCount the number of successful results which occurred in the pool.
Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)
20d20cs      Count the number of dice which rolled a 20
20d20cs>10   Count the number of dice which rolled higher than 10
20d20cs<10   Count the number of dice which rolled less than 10
Parametersmodifier: stringThe matched modifier query
Returns undefined | false
- modifier: stringThe matched modifier query

Count the number of successful results which occurred in the pool.
Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)

20d20cs      Count the number of dice which rolled a 20
20d20cs>10   Count the number of dice which rolled higher than 10
20d20cs<10   Count the number of dice which rolled less than 10


#### Parameters

- modifier: stringThe matched modifier query

The matched modifier query


#### Returns undefined | false


### drop

- drop(modifier: string): undefined | falseKeep a certain number of highest or lowest dice rolls from the result set.
{1d6,1d8,1d10,1d12}dl3       Drop the 3 worst results in the pool
{1d12,6}dh                   Drop the highest result in the pool
Parametersmodifier: stringThe matched modifier query
Returns undefined | false
- modifier: stringThe matched modifier query

Keep a certain number of highest or lowest dice rolls from the result set.

{1d6,1d8,1d10,1d12}dl3       Drop the 3 worst results in the pool
{1d12,6}dh                   Drop the highest result in the pool


#### Parameters

- modifier: stringThe matched modifier query

The matched modifier query


#### Returns undefined | false


### evaluate

- evaluate(    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;    },): RollTerm| Promise<RollTerm>Evaluate the term, processing its inputs and finalizing its total.
ParametersOptionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which modify how the RollTerm is evaluated
OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Returns RollTerm | Promise<RollTerm>Returns a Promise if the term is non-deterministic.
Inherited from RollTerm.evaluate
- Optionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which modify how the RollTerm is evaluated
OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

Evaluate the term, processing its inputs and finalizing its total.


#### Parameters

- Optionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which modify how the RollTerm is evaluated
OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

`Optional`Options which modify how the RollTerm is evaluated

- OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not throw an error when evaluated.


##### Optionalmaximize?: boolean

`Optional`Maximize the result, obtaining the largest possible value.


##### Optionalminimize?: boolean

`Optional`Minimize the result, obtaining the smallest possible value.


#### Returns RollTerm | Promise<RollTerm>

Returns a Promise if the term is non-deterministic.

Inherited from RollTerm.evaluate


### keep

- keep(modifier: string): undefined | falseKeep a certain number of highest or lowest dice rolls from the result set.
{1d6,1d8,1d10,1d12}kh2       Keep the 2 best rolls from the pool
{1d12,6}kl                   Keep the lowest result in the pool
Parametersmodifier: stringThe matched modifier query
Returns undefined | false
- modifier: stringThe matched modifier query

Keep a certain number of highest or lowest dice rolls from the result set.

{1d6,1d8,1d10,1d12}kh2       Keep the 2 best rolls from the pool
{1d12,6}kl                   Keep the lowest result in the pool


#### Parameters

- modifier: stringThe matched modifier query

The matched modifier query


#### Returns undefined | false


### toJSON

- toJSON(): RollTermDataSerialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.
Returns RollTermDataOverrides RollTerm.toJSON

Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.


#### Returns RollTermData

Overrides RollTerm.toJSON


### Protected_evaluateAsync

`Protected`- _evaluateAsync(options?: object): Promise<PoolTerm>ProtectedEvaluate this pool term when it contains any non-deterministic sub-terms.
ParametersOptionaloptions: object = {}Returns Promise<PoolTerm>
- Optionaloptions: object = {}

`Protected`Evaluate this pool term when it contains any non-deterministic sub-terms.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns Promise<PoolTerm>


### Protected_evaluateSync

`Protected`- _evaluateSync(options?: object): PoolTermProtectedEvaluate this pool term when it contains only deterministic sub-terms.
ParametersOptionaloptions: object = {}Returns PoolTerm
- Optionaloptions: object = {}

`Protected`Evaluate this pool term when it contains only deterministic sub-terms.


#### Parameters

- Optionaloptions: object = {}

`Optional`
#### Returns PoolTerm


### Static_fromData

`Static`- _fromData(data: any): RollTermDefine term-specific logic for how a de-serialized data object is restored as a functional RollTerm
Parametersdata: anyThe de-serialized term data
Returns RollTermThe re-constructed RollTerm object
Overrides RollTerm._fromData
- data: anyThe de-serialized term data

Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm


#### Parameters

- data: anyThe de-serialized term data

The de-serialized term data


#### Returns RollTerm

The re-constructed RollTerm object

Overrides RollTerm._fromData


### StaticfromData

`Static`- fromData(data: RollTermData): RollTermConstruct a RollTerm from a provided data object
Parametersdata: RollTermDataProvided data from an un-serialized term
Returns RollTermThe constructed RollTerm
Inherited from RollTerm.fromData
- data: RollTermDataProvided data from an un-serialized term

Construct a RollTerm from a provided data object


#### Parameters

- data: RollTermDataProvided data from an un-serialized term

Provided data from an un-serialized term


#### Returns RollTerm

The constructed RollTerm

Inherited from RollTerm.fromData


### StaticfromExpression

`Static`- fromExpression(formula: string, options?: object): null | PoolTermGiven a string formula, create and return an evaluated PoolTerm object
Parametersformula: stringThe string formula to parse
Optionaloptions: object = {}Additional options applied to the PoolTerm
Returns null | PoolTermThe evaluated PoolTerm object or null if the formula is invalid
- formula: stringThe string formula to parse
- Optionaloptions: object = {}Additional options applied to the PoolTerm

Given a string formula, create and return an evaluated PoolTerm object


#### Parameters

- formula: stringThe string formula to parse
- Optionaloptions: object = {}Additional options applied to the PoolTerm

The string formula to parse

`Optional`Additional options applied to the PoolTerm


#### Returns null | PoolTerm

The evaluated PoolTerm object or null if the formula is invalid


### StaticfromJSON

`Static`- fromJSON(json: string): RollTermReconstruct a RollTerm instance from a provided JSON string
Parametersjson: stringA serialized JSON representation of a DiceTerm
Returns RollTermA reconstructed RollTerm from the provided JSON
Inherited from RollTerm.fromJSON
- json: stringA serialized JSON representation of a DiceTerm

Reconstruct a RollTerm instance from a provided JSON string


#### Parameters

- json: stringA serialized JSON representation of a DiceTerm

A serialized JSON representation of a DiceTerm


#### Returns RollTerm

A reconstructed RollTerm from the provided JSON

Inherited from RollTerm.fromJSON


### StaticfromParseNode

`Static`- fromParseNode(node: any): RollTermParametersnode: anyReturns RollTermOverrides RollTerm.fromParseNode
- node: any


#### Parameters

- node: any


#### Returns RollTerm

Overrides RollTerm.fromParseNode


### StaticfromRolls

`Static`- fromRolls(rolls?: Roll[]): PoolTermCreate a PoolTerm by providing an array of existing Roll objects
Parametersrolls: Roll[] = []An array of Roll objects from which to create the pool
Returns PoolTermThe constructed PoolTerm comprised of the provided rolls
- rolls: Roll[] = []An array of Roll objects from which to create the pool

Create a PoolTerm by providing an array of existing Roll objects


#### Parameters

- rolls: Roll[] = []An array of Roll objects from which to create the pool

An array of Roll objects from which to create the pool


#### Returns PoolTerm

The constructed PoolTerm comprised of the provided rolls


### StaticisDeterministic

`Static`- isDeterministic(    term: RollTerm,    options?: { maximize?: boolean; minimize?: boolean },): booleanDetermine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.
Parametersterm: RollTermThe term.
Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options for evaluating the term.
Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Returns booleanInherited from RollTerm.isDeterministic
- term: RollTermThe term.
- Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options for evaluating the term.
Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.

Determine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.


#### Parameters

- term: RollTermThe term.
- Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options for evaluating the term.
Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.

The term.

`Optional`Options for evaluating the term.

- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized.


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized.


#### Returns boolean

Inherited from RollTerm.isDeterministic


### Settings

- Protected
- Inherited
- Internal


### On This Page

