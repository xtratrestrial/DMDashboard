# Coin | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.Coin.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- Coin


# Class Coin

A type of DiceTerm used to represent flipping a two-sided coin.


#### Hierarchy (View Summary)

- DiceTermCoin
- Coin

- Coin


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.

Inherited from DiceTerm._root


### isIntermediate

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from DiceTerm.isIntermediate


### modifiers

An Array of dice term modifiers which are applied

Inherited from DiceTerm.modifiers


### options

An object of additional options which describes and modifies the term.

Inherited from DiceTerm.options


### results

The array of dice term results which have been rolled

Inherited from DiceTerm.results


### Protected_faces

`Protected`The number of faces on the die, or a Roll instance that will be evaluated to a number.

Inherited from DiceTerm._faces


### Protected_number

`Protected`The number of dice of this term to roll, before modifiers are applied, or a Roll instance that will be evaluated to
a number.

Inherited from DiceTerm._number


### StaticDENOMINATION

`Static`Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms

Overrides DiceTerm.DENOMINATION


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from DiceTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from DiceTerm.FLAVOR_REGEXP_STRING


### StaticMODIFIER_REGEXP

`Static`A regular expression used to separate individual modifiers

Inherited from DiceTerm.MODIFIER_REGEXP


### StaticMODIFIERS

`Static`Define the named modifiers that can be applied for this particular DiceTerm type.

Overrides DiceTerm.MODIFIERS


### StaticMODIFIERS_REGEXP_STRING

`Static`A regular expression pattern which captures the full set of term modifiers
Anything until a space, group symbol, or arithmetic operator

Inherited from DiceTerm.MODIFIERS_REGEXP_STRING


### StaticREGEXP

`Static`A regular expression used to match a term of this type

Inherited from DiceTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized

Inherited from DiceTerm.SERIALIZE_ATTRIBUTES


## Accessors


### denomination

- get denomination(): stringThe denomination of this DiceTerm instance.
Returns stringInherited from DiceTerm.denomination

The denomination of this DiceTerm instance.


#### Returns string

Inherited from DiceTerm.denomination


### dice

- get dice(): DiceTerm[]An array of additional DiceTerm instances involved in resolving this DiceTerm.
Returns DiceTerm[]Inherited from DiceTerm.dice

An array of additional DiceTerm instances involved in resolving this DiceTerm.


#### Returns DiceTerm[]

Inherited from DiceTerm.dice


### expression

- get expression(): stringA string representation of the formula expression for this RollTerm, prior to evaluation.
Returns stringInherited from DiceTerm.expression

A string representation of the formula expression for this RollTerm, prior to evaluation.


#### Returns string

Inherited from DiceTerm.expression


### faces

- get faces(): number | voidThe number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
been evaluated.
Returns number | voidInherited from DiceTerm.faces
- set faces(value: number | Roll): voidParametersvalue: number | RollReturns voidInherited from DiceTerm.faces
- value: number | Roll

The number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
been evaluated.


#### Returns number | void

Inherited from DiceTerm.faces


#### Parameters

- value: number | Roll


#### Returns void

Inherited from DiceTerm.faces


### flavor

- get flavor(): stringOptional flavor text which modifies and describes this term.
Returns stringInherited from DiceTerm.flavor

Optional flavor text which modifies and describes this term.


#### Returns string

Inherited from DiceTerm.flavor


### formula

- get formula(): stringA string representation of the formula, including optional flavor text.
Returns stringInherited from DiceTerm.formula

A string representation of the formula, including optional flavor text.


#### Returns string

Inherited from DiceTerm.formula


### isDeterministic

- get isDeterministic(): booleanWhether this term is entirely deterministic or contains some randomness.
Returns booleanInherited from DiceTerm.isDeterministic

Whether this term is entirely deterministic or contains some randomness.


#### Returns boolean

Inherited from DiceTerm.isDeterministic


### method

- get method(): stringThe resolution method used to resolve this DiceTerm.
Returns stringInherited from DiceTerm.method

The resolution method used to resolve this DiceTerm.


#### Returns string

Inherited from DiceTerm.method


### number

- get number(): number | voidThe number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
evaluated.
Returns number | voidInherited from DiceTerm.number
- set number(value: number | Roll): voidParametersvalue: number | RollReturns voidInherited from DiceTerm.number
- value: number | Roll

The number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
evaluated.


#### Returns number | void

Inherited from DiceTerm.number


#### Parameters

- value: number | Roll


#### Returns void

Inherited from DiceTerm.number


### resolver

- get resolver(): RollResolverA reference to the RollResolver app being used to externally resolve this term.
Returns RollResolverInherited from DiceTerm.resolver

A reference to the RollResolver app being used to externally resolve this term.


#### Returns RollResolver

Inherited from DiceTerm.resolver


### total

- get total(): undefined | numberA string or numeric representation of the final output for this term, after evaluation.
Returns undefined | numberInherited from DiceTerm.total

A string or numeric representation of the final output for this term, after evaluation.


#### Returns undefined | number

Inherited from DiceTerm.total


### values

- get values(): number[]Return an array of rolled values which are still active within this term
Returns number[]Inherited from DiceTerm.values

Return an array of rolled values which are still active within this term


#### Returns number[]

Inherited from DiceTerm.values


## Methods


### _evaluate

- _evaluate(options?: {}): DiceTerm | Promise<DiceTerm>Evaluate the term.
Parametersoptions: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns DiceTerm | Promise<DiceTerm>Returns a Promise if the term is non-deterministic.
Inherited from DiceTerm._evaluate
- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Evaluate the term.


#### Parameters

- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns DiceTerm | Promise<DiceTerm>

Returns a Promise if the term is non-deterministic.

Inherited from DiceTerm._evaluate


### _evaluateModifier

- _evaluateModifier(command: string, modifier: string): Promise<void>InternalAsynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers
Parameterscommand: stringThe parsed modifier command
modifier: stringThe full modifier request
Returns Promise<void>Inherited from DiceTerm._evaluateModifier
- command: stringThe parsed modifier command
- modifier: stringThe full modifier request

`Internal`Asynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers


#### Parameters

- command: stringThe parsed modifier command
- modifier: stringThe full modifier request

The parsed modifier command

The full modifier request


#### Returns Promise<void>

Inherited from DiceTerm._evaluateModifier


### _evaluateModifiers

- _evaluateModifiers(): Promise<void>InternalSequentially evaluate each dice roll modifier by passing the term to its evaluation function
Augment or modify the results array.
Returns Promise<void>Inherited from DiceTerm._evaluateModifiers

`Internal`Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
Augment or modify the results array.


#### Returns Promise<void>

Inherited from DiceTerm._evaluateModifiers


### alter

- alter(multiply: number, add: number): DiceTermAlter the DiceTerm by adding or multiplying the number of dice which are rolled
Parametersmultiply: numberA factor to multiply. Dice are multiplied before any additions.
add: numberA number of dice to add. Dice are added after multiplication.
Returns DiceTermThe altered term
Inherited from DiceTerm.alter
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

Inherited from DiceTerm.alter


### call

- call(modifier: string): undefined | falseCall the result of the coin flip, marking any coins that matched the called target as a success
3dcc1      Flip 3 coins and treat "heads" as successes
2dcc0      Flip 2 coins and treat "tails" as successes
Parametersmodifier: stringThe matched modifier query
Returns undefined | false
- modifier: stringThe matched modifier query

Call the result of the coin flip, marking any coins that matched the called target as a success
3dcc1      Flip 3 coins and treat "heads" as successes
2dcc0      Flip 2 coins and treat "tails" as successes


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
Inherited from DiceTerm.evaluate
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

Inherited from DiceTerm.evaluate


### getResultCSS

- getResultCSS(result: any): (null | string)[]Get the CSS classes that should be used to display each rolled result
Parametersresult: anyThe rolled result
Returns (null | string)[]The desired classes
Overrides DiceTerm.getResultCSS
- result: anyThe rolled result

Get the CSS classes that should be used to display each rolled result


#### Parameters

- result: anyThe rolled result

The rolled result


#### Returns (null | string)[]

The desired classes

Overrides DiceTerm.getResultCSS


### getResultLabel

- getResultLabel(result: any): anyReturn a string used as the label for each rolled result
Parametersresult: anyThe rolled result
Returns anyThe result label
Overrides DiceTerm.getResultLabel
- result: anyThe rolled result

Return a string used as the label for each rolled result


#### Parameters

- result: anyThe rolled result

The rolled result


#### Returns any

The result label

Overrides DiceTerm.getResultLabel


### getTooltipData

- getTooltipData(): objectRender the tooltip HTML for a Roll instance
Returns objectThe data object used to render the default tooltip template for this DiceTerm
Inherited from DiceTerm.getTooltipData

Render the tooltip HTML for a Roll instance


#### Returns object

The data object used to render the default tooltip template for this DiceTerm

Inherited from DiceTerm.getTooltipData


### mapRandomFace

- mapRandomFace(randomUniform: any): numberParametersrandomUniform: anyReturns numberOverrides DiceTerm.mapRandomFace
- randomUniform: any


#### Parameters

- randomUniform: any


#### Returns number

Overrides DiceTerm.mapRandomFace


### randomFace

- randomFace(): numberGenerate a random face value for this die using the configured PRNG.
Returns numberInherited from DiceTerm.randomFace

Generate a random face value for this die using the configured PRNG.


#### Returns number

Inherited from DiceTerm.randomFace


### roll

- roll(    __namedParameters?: { maximize?: boolean; minimize?: boolean },): Promise<result>Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
Parameters__namedParameters: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced
Returns Promise<result>The produced result
Overrides DiceTerm.roll
- __namedParameters: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced

Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.


#### Parameters

- __namedParameters: { maximize?: boolean; minimize?: boolean } = {}Options which modify how a random result is produced

Options which modify how a random result is produced


#### Returns Promise<result>

The produced result

Overrides DiceTerm.roll


### toJSON

- toJSON(): RollTermDataSerialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.
Returns RollTermDataInherited from DiceTerm.toJSON

Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.


#### Returns RollTermData

Inherited from DiceTerm.toJSON


### Protected_evaluateAsync

`Protected`- _evaluateAsync(options?: object): Promise<DiceTerm>ProtectedEvaluate this dice term asynchronously.
ParametersOptionaloptions: object = {}Options forwarded to inner Roll evaluation.
Returns Promise<DiceTerm>Inherited from DiceTerm._evaluateAsync
- Optionaloptions: object = {}Options forwarded to inner Roll evaluation.

`Protected`Evaluate this dice term asynchronously.


#### Parameters

- Optionaloptions: object = {}Options forwarded to inner Roll evaluation.

`Optional`Options forwarded to inner Roll evaluation.


#### Returns Promise<DiceTerm>

Inherited from DiceTerm._evaluateAsync


### Protected_evaluateSync

`Protected`- _evaluateSync(    options?: { maximize?: boolean; minimize?: boolean; strict?: boolean },): DiceTermProtectedEvaluate deterministic values of this term synchronously.
ParametersOptionaloptions: { maximize?: boolean; minimize?: boolean; strict?: boolean } = {}Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Optionalstrict?: booleanThrow an error if attempting to evaluate a die term in a way that cannot be
done synchronously.
Returns DiceTermInherited from DiceTerm._evaluateSync
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

Inherited from DiceTerm._evaluateSync


### Protected_roll

`Protected`- _roll(options?: object): Promise<number | void>ProtectedGenerate a roll result value for this DiceTerm based on its fulfillment method.
ParametersOptionaloptions: object = {}Options forwarded to the fulfillment method handler.
Returns Promise<number | void>Returns a Promise that resolves to the fulfilled number, or undefined if it could
not be fulfilled.
Inherited from DiceTerm._roll
- Optionaloptions: object = {}Options forwarded to the fulfillment method handler.

`Protected`Generate a roll result value for this DiceTerm based on its fulfillment method.


#### Parameters

- Optionaloptions: object = {}Options forwarded to the fulfillment method handler.

`Optional`Options forwarded to the fulfillment method handler.


#### Returns Promise<number | void>

Returns a Promise that resolves to the fulfilled number, or undefined if it could
not be fulfilled.

Inherited from DiceTerm._roll


### Static_applyCount

`Static`- _applyCount(    results: any,    comparison: any,    target: any,    __namedParameters?: { flagFailure?: boolean; flagSuccess?: boolean },): voidA reusable helper function to handle the identification and deduction of failures
Parametersresults: anycomparison: anytarget: any__namedParameters: { flagFailure?: boolean; flagSuccess?: boolean } = {}Returns voidInherited from DiceTerm._applyCount
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

Inherited from DiceTerm._applyCount


### Static_applyDeduct

`Static`- _applyDeduct(    results: any,    comparison: any,    target: any,    __namedParameters?: { deductFailure?: boolean; invertFailure?: boolean },): voidA reusable helper function to handle the identification and deduction of failures
Parametersresults: anycomparison: anytarget: any__namedParameters: { deductFailure?: boolean; invertFailure?: boolean } = {}Returns voidInherited from DiceTerm._applyDeduct
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

Inherited from DiceTerm._applyDeduct


### Static_fromData

`Static`- _fromData(data: any): RollTermDefine term-specific logic for how a de-serialized data object is restored as a functional RollTerm
Parametersdata: anyThe de-serialized term data
Returns RollTermThe re-constructed RollTerm object
Inherited from DiceTerm._fromData
- data: anyThe de-serialized term data

Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm


#### Parameters

- data: anyThe de-serialized term data

The de-serialized term data


#### Returns RollTerm

The re-constructed RollTerm object

Inherited from DiceTerm._fromData


### Static_keepOrDrop

`Static`- _keepOrDrop(    results: object[],    number: number,    options?: { highest?: boolean; keep?: boolean },): object[]A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.
Parametersresults: object[]The results array
number: numberThe number to keep or drop
Optionaloptions: { highest?: boolean; keep?: boolean } = {}Optionalhighest?: booleanKeep the highest?
Optionalkeep?: booleanKeep results?
Returns object[]The modified results array
Inherited from DiceTerm._keepOrDrop
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

Inherited from DiceTerm._keepOrDrop


### StaticcompareResult

`Static`- compareResult(result: number, comparison: string, target: number): booleanA helper comparison function.
Returns a boolean depending on whether the result compares favorably against the target.
Parametersresult: numberThe result being compared
comparison: stringThe comparison operator in [=,<,<=,>,>=]
target: numberThe target value
Returns booleanIs the comparison true?
Inherited from DiceTerm.compareResult
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

Inherited from DiceTerm.compareResult


### StaticfromData

`Static`- fromData(data: RollTermData): RollTermConstruct a RollTerm from a provided data object
Parametersdata: RollTermDataProvided data from an un-serialized term
Returns RollTermThe constructed RollTerm
Inherited from DiceTerm.fromData
- data: RollTermDataProvided data from an un-serialized term

Construct a RollTerm from a provided data object


#### Parameters

- data: RollTermDataProvided data from an un-serialized term

Provided data from an un-serialized term


#### Returns RollTerm

The constructed RollTerm

Inherited from DiceTerm.fromData


### StaticfromJSON

`Static`- fromJSON(json: string): RollTermReconstruct a RollTerm instance from a provided JSON string
Parametersjson: stringA serialized JSON representation of a DiceTerm
Returns RollTermA reconstructed RollTerm from the provided JSON
Inherited from DiceTerm.fromJSON
- json: stringA serialized JSON representation of a DiceTerm

Reconstruct a RollTerm instance from a provided JSON string


#### Parameters

- json: stringA serialized JSON representation of a DiceTerm

A serialized JSON representation of a DiceTerm


#### Returns RollTerm

A reconstructed RollTerm from the provided JSON

Inherited from DiceTerm.fromJSON


### StaticfromMatch

`Static`- fromMatch(match: RegExpMatchArray): DiceTermConstruct a term of this type given a matched regular expression array.
Parametersmatch: RegExpMatchArrayThe matched regular expression array
Returns DiceTermThe constructed term
Inherited from DiceTerm.fromMatch
- match: RegExpMatchArrayThe matched regular expression array

Construct a term of this type given a matched regular expression array.


#### Parameters

- match: RegExpMatchArrayThe matched regular expression array

The matched regular expression array


#### Returns DiceTerm

The constructed term

Inherited from DiceTerm.fromMatch


### StaticfromParseNode

`Static`- fromParseNode(node: any): RollTermParametersnode: anyReturns RollTermInherited from DiceTerm.fromParseNode
- node: any


#### Parameters

- node: any


#### Returns RollTerm

Inherited from DiceTerm.fromParseNode


### StaticisDeterministic

`Static`- isDeterministic(    term: RollTerm,    options?: { maximize?: boolean; minimize?: boolean },): booleanDetermine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.
Parametersterm: RollTermThe term.
Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options for evaluating the term.
Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Returns booleanInherited from DiceTerm.isDeterministic
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

Inherited from DiceTerm.isDeterministic


### StaticmatchTerm

`Static`- matchTerm(    expression: string,    options?: { imputeNumber?: boolean },): null | RegExpMatchArrayDetermine whether a string expression matches this type of term
Parametersexpression: stringThe expression to parse
Optionaloptions: { imputeNumber?: boolean } = {}Additional options which customize the match
OptionalimputeNumber?: booleanAllow the number of dice to be optional, i.e. "d6"
Returns null | RegExpMatchArrayInherited from DiceTerm.matchTerm
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

Inherited from DiceTerm.matchTerm


### Settings

- Protected
- Inherited
- Internal


### On This Page

