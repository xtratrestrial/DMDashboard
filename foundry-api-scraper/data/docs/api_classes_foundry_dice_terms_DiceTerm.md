# DiceTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.DiceTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- DiceTerm


# Class DiceTerm

An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.


#### Hierarchy (View Summary)

- RollTermDiceTermCoinDieFateDie
- DiceTermCoinDieFateDie
- Coin
- Die
- FateDie

- DiceTermCoinDieFateDie
- Coin
- Die
- FateDie

- Coin
- Die
- FateDie


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new DiceTerm(    termData: {        faces?: number | Roll;        method: string;        modifiers?: string[];        number?: number | Roll;        options?: object;        results?: DiceTermResult[];    },): DiceTermParameterstermData: {    faces?: number | Roll;    method: string;    modifiers?: string[];    number?: number | Roll;    options?: object;    results?: DiceTermResult[];}Data used to create the Dice Term, including the following:
Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
method: stringThe resolution method used to resolve DiceTerm.
Optionalmodifiers?: string[]An array of modifiers applied to the results
Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
Optionaloptions?: objectAdditional options that modify the term
Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term
Returns DiceTermOverrides RollTerm.constructor
- termData: {    faces?: number | Roll;    method: string;    modifiers?: string[];    number?: number | Roll;    options?: object;    results?: DiceTermResult[];}Data used to create the Dice Term, including the following:
Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
method: stringThe resolution method used to resolve DiceTerm.
Optionalmodifiers?: string[]An array of modifiers applied to the results
Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
Optionaloptions?: objectAdditional options that modify the term
Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term
- Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
- method: stringThe resolution method used to resolve DiceTerm.
- Optionalmodifiers?: string[]An array of modifiers applied to the results
- Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
- Optionaloptions?: objectAdditional options that modify the term
- Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term


#### Parameters

- termData: {    faces?: number | Roll;    method: string;    modifiers?: string[];    number?: number | Roll;    options?: object;    results?: DiceTermResult[];}Data used to create the Dice Term, including the following:
Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
method: stringThe resolution method used to resolve DiceTerm.
Optionalmodifiers?: string[]An array of modifiers applied to the results
Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
Optionaloptions?: objectAdditional options that modify the term
Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term
- Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
- method: stringThe resolution method used to resolve DiceTerm.
- Optionalmodifiers?: string[]An array of modifiers applied to the results
- Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
- Optionaloptions?: objectAdditional options that modify the term
- Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term

Data used to create the Dice Term, including the following:

- Optionalfaces?: number | RollThe number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.
- method: stringThe resolution method used to resolve DiceTerm.
- Optionalmodifiers?: string[]An array of modifiers applied to the results
- Optionalnumber?: number | RollThe number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.
- Optionaloptions?: objectAdditional options that modify the term
- Optionalresults?: DiceTermResult[]An optional array of pre-cast results for the term


##### Optionalfaces?: number | Roll

`Optional`The number of faces on each die of this type, or a Roll instance that
will be evaluated to a number.


##### method: string

The resolution method used to resolve DiceTerm.


##### Optionalmodifiers?: string[]

`Optional`An array of modifiers applied to the results


##### Optionalnumber?: number | Roll

`Optional`The number of dice of this term to roll, before modifiers are applied, or
a Roll instance that will be evaluated to a number.


##### Optionaloptions?: object

`Optional`Additional options that modify the term


##### Optionalresults?: DiceTermResult[]

`Optional`An optional array of pre-cast results for the term


#### Returns DiceTerm

Overrides RollTerm.constructor


## Properties


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.

Inherited from RollTerm._root


### isIntermediate

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from RollTerm.isIntermediate


### modifiers

An Array of dice term modifiers which are applied


### options

An object of additional options which describes and modifies the term.

Inherited from RollTerm.options


### results

The array of dice term results which have been rolled


### Protected_faces

`Protected`The number of faces on the die, or a Roll instance that will be evaluated to a number.


### Protected_number

`Protected`The number of dice of this term to roll, before modifiers are applied, or a Roll instance that will be evaluated to
a number.


### StaticDENOMINATION

`Static`Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP_STRING


### StaticMODIFIER_REGEXP

`Static`A regular expression used to separate individual modifiers


### StaticMODIFIERS

`Static`Define the named modifiers that can be applied for this particular DiceTerm type.


### StaticMODIFIERS_REGEXP_STRING

`Static`A regular expression pattern which captures the full set of term modifiers
Anything until a space, group symbol, or arithmetic operator


### StaticREGEXP

`Static`A regular expression used to match a term of this type

Overrides RollTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized

Overrides RollTerm.SERIALIZE_ATTRIBUTES


## Accessors


### denomination

- get denomination(): stringThe denomination of this DiceTerm instance.
Returns string

The denomination of this DiceTerm instance.


#### Returns string


### dice

- get dice(): DiceTerm[]An array of additional DiceTerm instances involved in resolving this DiceTerm.
Returns DiceTerm[]

An array of additional DiceTerm instances involved in resolving this DiceTerm.


#### Returns DiceTerm[]


### expression

- get expression(): stringA string representation of the formula expression for this RollTerm, prior to evaluation.
Returns stringOverrides RollTerm.expression

A string representation of the formula expression for this RollTerm, prior to evaluation.


#### Returns string

Overrides RollTerm.expression


### faces

- get faces(): number | voidThe number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
been evaluated.
Returns number | void
- set faces(value: number | Roll): voidParametersvalue: number | RollReturns void
- value: number | Roll

The number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
been evaluated.


#### Returns number | void


#### Parameters

- value: number | Roll


#### Returns void


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


### method

- get method(): stringThe resolution method used to resolve this DiceTerm.
Returns string

The resolution method used to resolve this DiceTerm.


#### Returns string


### number

- get number(): number | voidThe number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
evaluated.
Returns number | void
- set number(value: number | Roll): voidParametersvalue: number | RollReturns void
- value: number | Roll

The number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
evaluated.


#### Returns number | void


#### Parameters

- value: number | Roll


#### Returns void


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

- get values(): number[]Return an array of rolled values which are still active within this term
Returns number[]

Return an array of rolled values which are still active within this term


#### Returns number[]


## Methods


### _evaluate

- _evaluate(options?: {}): DiceTerm | Promise<DiceTerm>Evaluate the term.
Parametersoptions: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns DiceTerm | Promise<DiceTerm>Returns a Promise if the term is non-deterministic.
Overrides RollTerm._evaluate
- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Evaluate the term.


#### Parameters

- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns DiceTerm | Promise<DiceTerm>

Returns a Promise if the term is non-deterministic.

Overrides RollTerm._evaluate


### _evaluateModifier

- _evaluateModifier(command: string, modifier: string): Promise<void>InternalAsynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers
Parameterscommand: stringThe parsed modifier command
modifier: stringThe full modifier request
Returns Promise<void>
- command: stringThe parsed modifier command
- modifier: stringThe full modifier request

`Internal`Asynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers


#### Parameters

- command: stringThe parsed modifier command
- modifier: stringThe full modifier request

The parsed modifier command

The full modifier request


#### Returns Promise<void>


### _evaluateModifiers

- _evaluateModifiers(): Promise<void>InternalSequentially evaluate each dice roll modifier by passing the term to its evaluation function
Augment or modify the results array.
Returns Promise<void>

`Internal`Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
Augment or modify the results array.


#### Returns Promise<void>


### alter

- alter(multiply: number, add: number): DiceTermAlter the DiceTerm by adding or multiplying the number of dice which are rolled
Parametersmultiply: numberA factor to multiply. Dice are multiplied before any additions.
add: numberA number of dice to add. Dice are added after multiplication.
Returns DiceTermThe altered term
- multiply: numberA factor to multiply. Dice are multiplied before any additions.
- add: numberA number of dice to add. Dice are added after multiplication.

Alter the DiceTerm by adding or multiplying the number of dice which are rolled


#### Parameters

- multiply: numberA factor to multiply. Dice are multiplied before any additions.
- add: numberA number of dice to add. Dice are added after multiplication.

A factor to multiply. Dice are multiplied before any additions.

A number of dice to add. Dice are added after multiplication.


#### Returns DiceTerm

The altered term


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


### getResultCSS

- getResultCSS(result: DiceTermResult): (null | string)[]Get the CSS classes that should be used to display each rolled result
Parametersresult: DiceTermResultThe rolled result
Returns (null | string)[]The desired classes
- result: DiceTermResultThe rolled result

Get the CSS classes that should be used to display each rolled result


#### Parameters

- result: DiceTermResultThe rolled result

The rolled result


#### Returns (null | string)[]

The desired classes


### getResultLabel

- getResultLabel(result: DiceTermResult): stringReturn a string used as the label for each rolled result
Parametersresult: DiceTermResultThe rolled result
Returns stringThe result label
- result: DiceTermResultThe rolled result

Return a string used as the label for each rolled result


#### Parameters

- result: DiceTermResultThe rolled result

The rolled result


#### Returns string

The result label


### getTooltipData

- getTooltipData(): objectRender the tooltip HTML for a Roll instance
Returns objectThe data object used to render the default tooltip template for this DiceTerm

Render the tooltip HTML for a Roll instance


#### Returns object

The data object used to render the default tooltip template for this DiceTerm


### mapRandomFace

- mapRandomFace(randomUniform: number): numberMaps a randomly-generated value in the interval [0, 1) to a face value on the die.
ParametersrandomUniform: numberA value to map. Must be in the interval [0, 1).
Returns numberThe face value.
- randomUniform: numberA value to map. Must be in the interval [0, 1).

Maps a randomly-generated value in the interval [0, 1) to a face value on the die.


#### Parameters

- randomUniform: numberA value to map. Must be in the interval [0, 1).

A value to map. Must be in the interval [0, 1).


#### Returns number

The face value.


### randomFace

- randomFace(): numberGenerate a random face value for this die using the configured PRNG.
Returns number

Generate a random face value for this die using the configured PRNG.


#### Returns number


### roll

- roll(    options?: { maximize?: boolean; minimize?: boolean },): Promise<DiceTermResult>Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
ParametersOptionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Returns Promise<DiceTermResult>The produced result
- Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.


#### Parameters

- Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

`Optional`Options which modify how a random result is produced

- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.


##### Optionalmaximize?: boolean

`Optional`Maximize the result, obtaining the largest possible value.


##### Optionalminimize?: boolean

`Optional`Minimize the result, obtaining the smallest possible value.


#### Returns Promise<DiceTermResult>

The produced result


### toJSON

- toJSON(): RollTermDataSerialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.
Returns RollTermDataOverrides RollTerm.toJSON

Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.


#### Returns RollTermData

Overrides RollTerm.toJSON


### Protected_evaluateAsync

`Protected`- _evaluateAsync(options?: object): Promise<DiceTerm>ProtectedEvaluate this dice term asynchronously.
ParametersOptionaloptions: object = {}Options forwarded to inner Roll evaluation.
Returns Promise<DiceTerm>
- Optionaloptions: object = {}Options forwarded to inner Roll evaluation.

`Protected`Evaluate this dice term asynchronously.


#### Parameters

- Optionaloptions: object = {}Options forwarded to inner Roll evaluation.

`Optional`Options forwarded to inner Roll evaluation.


#### Returns Promise<DiceTerm>


### Protected_evaluateSync

`Protected`- _evaluateSync(    options?: { maximize?: boolean; minimize?: boolean; strict?: boolean },): DiceTermProtectedEvaluate deterministic values of this term synchronously.
ParametersOptionaloptions: { maximize?: boolean; minimize?: boolean; strict?: boolean } = {}Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.
Returns DiceTerm
- Optionaloptions: { maximize?: boolean; minimize?: boolean; strict?: boolean } = {}Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.
- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.
- Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.

`Protected`Evaluate deterministic values of this term synchronously.


#### Parameters

- Optionaloptions: { maximize?: boolean; minimize?: boolean; strict?: boolean } = {}Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.
- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.
- Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.

`Optional`- Optionalmaximize?: booleanForce the result to be maximized.
- Optionalminimize?: booleanForce the result to be minimized.
- Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized.


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized.


##### Optionalstrict?: boolean

`Optional`Throw an error if attempting to evaluate a die term in a way that cannot be
done synchronously.


#### Returns DiceTerm


### Protected_roll

`Protected`- _roll(options?: object): Promise<number | void>ProtectedGenerate a roll result value for this DiceTerm based on its fulfillment method.
ParametersOptionaloptions: object = {}Options forwarded to the fulfillment method handler.
Returns Promise<number | void>Returns a Promise that resolves to the fulfilled number, or undefined if it could
not be fulfilled.
- Optionaloptions: object = {}Options forwarded to the fulfillment method handler.

`Protected`Generate a roll result value for this DiceTerm based on its fulfillment method.


#### Parameters

- Optionaloptions: object = {}Options forwarded to the fulfillment method handler.

`Optional`Options forwarded to the fulfillment method handler.


#### Returns Promise<number | void>

Returns a Promise that resolves to the fulfilled number, or undefined if it could
not be fulfilled.


### Static_applyCount

`Static`- _applyCount(    results: any,    comparison: any,    target: any,    __namedParameters?: { flagFailure?: boolean; flagSuccess?: boolean },): voidA reusable helper function to handle the identification and deduction of failures
Parametersresults: anycomparison: anytarget: any__namedParameters: { flagFailure?: boolean; flagSuccess?: boolean } = {}Returns void
- results: any
- comparison: any
- target: any
- __namedParameters: { flagFailure?: boolean; flagSuccess?: boolean } = {}

A reusable helper function to handle the identification and deduction of failures


#### Parameters

- results: any
- comparison: any
- target: any
- __namedParameters: { flagFailure?: boolean; flagSuccess?: boolean } = {}


#### Returns void


### Static_applyDeduct

`Static`- _applyDeduct(    results: any,    comparison: any,    target: any,    __namedParameters?: { deductFailure?: boolean; invertFailure?: boolean },): voidA reusable helper function to handle the identification and deduction of failures
Parametersresults: anycomparison: anytarget: any__namedParameters: { deductFailure?: boolean; invertFailure?: boolean } = {}Returns void
- results: any
- comparison: any
- target: any
- __namedParameters: { deductFailure?: boolean; invertFailure?: boolean } = {}

A reusable helper function to handle the identification and deduction of failures


#### Parameters

- results: any
- comparison: any
- target: any
- __namedParameters: { deductFailure?: boolean; invertFailure?: boolean } = {}


#### Returns void


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


### Static_keepOrDrop

`Static`- _keepOrDrop(    results: object[],    number: number,    options?: { highest?: boolean; keep?: boolean },): object[]A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.
Parametersresults: object[]The results array
number: numberThe number to keep or drop
Optionaloptions: { highest?: boolean; keep?: boolean } = {}Optionalhighest?: booleanKeep the highest?
Optionalkeep?: booleanKeep results?
Returns object[]The modified results array
- results: object[]The results array
- number: numberThe number to keep or drop
- Optionaloptions: { highest?: boolean; keep?: boolean } = {}Optionalhighest?: booleanKeep the highest?
Optionalkeep?: booleanKeep results?
- Optionalhighest?: booleanKeep the highest?
- Optionalkeep?: booleanKeep results?

A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.


#### Parameters

- results: object[]The results array
- number: numberThe number to keep or drop
- Optionaloptions: { highest?: boolean; keep?: boolean } = {}Optionalhighest?: booleanKeep the highest?
Optionalkeep?: booleanKeep results?
- Optionalhighest?: booleanKeep the highest?
- Optionalkeep?: booleanKeep results?

The results array

The number to keep or drop

`Optional`- Optionalhighest?: booleanKeep the highest?
- Optionalkeep?: booleanKeep results?


##### Optionalhighest?: boolean

`Optional`Keep the highest?


##### Optionalkeep?: boolean

`Optional`Keep results?


#### Returns object[]

The modified results array


### StaticcompareResult

`Static`- compareResult(result: number, comparison: string, target: number): booleanA helper comparison function.
Returns a boolean depending on whether the result compares favorably against the target.
Parametersresult: numberThe result being compared
comparison: stringThe comparison operator in [=,<,<=,>,>=]
target: numberThe target value
Returns booleanIs the comparison true?
- result: numberThe result being compared
- comparison: stringThe comparison operator in [=,<,<=,>,>=]
- target: numberThe target value

A helper comparison function.
Returns a boolean depending on whether the result compares favorably against the target.


#### Parameters

- result: numberThe result being compared
- comparison: stringThe comparison operator in [=,<,<=,>,>=]
- target: numberThe target value

The result being compared

The comparison operator in [=,<,<=,>,>=]

The target value


#### Returns boolean

Is the comparison true?


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


### StaticfromMatch

`Static`- fromMatch(match: RegExpMatchArray): DiceTermConstruct a term of this type given a matched regular expression array.
Parametersmatch: RegExpMatchArrayThe matched regular expression array
Returns DiceTermThe constructed term
- match: RegExpMatchArrayThe matched regular expression array

Construct a term of this type given a matched regular expression array.


#### Parameters

- match: RegExpMatchArrayThe matched regular expression array

The matched regular expression array


#### Returns DiceTerm

The constructed term


### StaticfromParseNode

`Static`- fromParseNode(node: any): RollTermParametersnode: anyReturns RollTermOverrides RollTerm.fromParseNode
- node: any


#### Parameters

- node: any


#### Returns RollTerm

Overrides RollTerm.fromParseNode


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


### StaticmatchTerm

`Static`- matchTerm(    expression: string,    options?: { imputeNumber?: boolean },): null | RegExpMatchArrayDetermine whether a string expression matches this type of term
Parametersexpression: stringThe expression to parse
Optionaloptions: { imputeNumber?: boolean } = {}Additional options which customize the match
OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"
Returns null | RegExpMatchArray
- expression: stringThe expression to parse
- Optionaloptions: { imputeNumber?: boolean } = {}Additional options which customize the match
OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"
- OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"

Determine whether a string expression matches this type of term


#### Parameters

- expression: stringThe expression to parse
- Optionaloptions: { imputeNumber?: boolean } = {}Additional options which customize the match
OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"
- OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"

The expression to parse

`Optional`Additional options which customize the match

- OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"


##### OptionalimputeNumber?: boolean

`Optional`Allow the number of dice to be optional, i.e. "d6"


#### Returns null | RegExpMatchArray


### Settings

- Protected
- Inherited
- Internal


### On This Page

