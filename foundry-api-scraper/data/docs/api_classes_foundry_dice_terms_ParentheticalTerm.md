# ParentheticalTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.ParentheticalTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- ParentheticalTerm


# Class ParentheticalTerm

A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.


#### Hierarchy (View Summary)

- RollTermParentheticalTerm
- ParentheticalTerm

- ParentheticalTerm


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

Overrides RollTerm.isIntermediate


### options

An object of additional options which describes and modifies the term.

Inherited from RollTerm.options


### roll

An already-evaluated Roll instance used instead of the string term.


### term

The original provided string term used to construct the parenthetical


### StaticCLOSE_REGEXP

`Static`A regular expression pattern used to identify the closing of a parenthetical expression.


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP_STRING


### StaticOPEN_REGEXP

`Static`The regular expression pattern used to identify the opening of a parenthetical expression.
This could also identify the opening of a math function.


### StaticREGEXP

`Static`A regular expression used to match a term of this type

Inherited from RollTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized

Overrides RollTerm.SERIALIZE_ATTRIBUTES


## Accessors


### dice

- get dice(): DiceTerm[]An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll
Returns DiceTerm[]

An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll


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

- get total(): numberA string or numeric representation of the final output for this term, after evaluation.
Returns numberOverrides RollTerm.total

A string or numeric representation of the final output for this term, after evaluation.


#### Returns number

Overrides RollTerm.total


## Methods


### _evaluate

- _evaluate(options?: {}): RollTerm | Promise<RollTerm>Evaluate the term.
Parametersoptions: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns RollTerm | Promise<RollTerm>Returns a Promise if the term is non-deterministic.
Overrides RollTerm._evaluate
- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Evaluate the term.


#### Parameters

- options: {} = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns RollTerm | Promise<RollTerm>

Returns a Promise if the term is non-deterministic.

Overrides RollTerm._evaluate


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


### toJSON

- toJSON(): RollTermDataSerialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.
Returns RollTermDataInherited from RollTerm.toJSON

Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.


#### Returns RollTermData

Inherited from RollTerm.toJSON


### Protected_evaluateAsync

`Protected`- _evaluateAsync(roll: Roll, options?: object): Promise<RollTerm>ProtectedEvaluate this parenthetical when it contains any non-deterministic sub-terms.
Parametersroll: RollThe inner Roll instance to evaluate.
Optionaloptions: object = {}Returns Promise<RollTerm>
- roll: RollThe inner Roll instance to evaluate.
- Optionaloptions: object = {}

`Protected`Evaluate this parenthetical when it contains any non-deterministic sub-terms.


#### Parameters

- roll: RollThe inner Roll instance to evaluate.
- Optionaloptions: object = {}

The inner Roll instance to evaluate.

`Optional`
#### Returns Promise<RollTerm>


### Protected_evaluateSync

`Protected`- _evaluateSync(roll: Roll, options?: object): RollTermProtectedEvaluate this parenthetical when it contains only deterministic sub-terms.
Parametersroll: RollThe inner Roll instance to evaluate.
Optionaloptions: object = {}Returns RollTerm
- roll: RollThe inner Roll instance to evaluate.
- Optionaloptions: object = {}

`Protected`Evaluate this parenthetical when it contains only deterministic sub-terms.


#### Parameters

- roll: RollThe inner Roll instance to evaluate.
- Optionaloptions: object = {}

The inner Roll instance to evaluate.

`Optional`
#### Returns RollTerm


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


### StaticfromParseNode

`Static`- fromParseNode(node: any): RollTermParametersnode: anyReturns RollTermOverrides RollTerm.fromParseNode
- node: any


#### Parameters

- node: any


#### Returns RollTerm

Overrides RollTerm.fromParseNode


### StaticfromTerms

`Static`- fromTerms(terms: RollTerm[], options?: object): ParentheticalTermConstruct a ParentheticalTerm from an Array of component terms which should be wrapped inside the parentheses.
Parametersterms: RollTerm[]The array of terms to use as internal parts of the parenthetical
Optionaloptions: objectAdditional options passed to the ParentheticalTerm constructor
Returns ParentheticalTermThe constructed ParentheticalTerm instance
Example: Create a Parenthetical Term from an array of component RollTerm instancesconst d6 = new Die({number: 4, faces: 6});const plus = new OperatorTerm({operator: "+"});const bonus = new NumericTerm({number: 4});t = ParentheticalTerm.fromTerms([d6, plus, bonus]);t.formula; // (4d6 + 4)
Copy
- terms: RollTerm[]The array of terms to use as internal parts of the parenthetical
- Optionaloptions: objectAdditional options passed to the ParentheticalTerm constructor

Construct a ParentheticalTerm from an Array of component terms which should be wrapped inside the parentheses.


#### Parameters

- terms: RollTerm[]The array of terms to use as internal parts of the parenthetical
- Optionaloptions: objectAdditional options passed to the ParentheticalTerm constructor

The array of terms to use as internal parts of the parenthetical

`Optional`Additional options passed to the ParentheticalTerm constructor


#### Returns ParentheticalTerm

The constructed ParentheticalTerm instance


#### Example: Create a Parenthetical Term from an array of component RollTerm instances

```javascript
const d6 = new Die({number: 4, faces: 6});const plus = new OperatorTerm({operator: "+"});const bonus = new NumericTerm({number: 4});t = ParentheticalTerm.fromTerms([d6, plus, bonus]);t.formula; // (4d6 + 4)
Copy
```

`const d6 = new Die({number: 4, faces: 6});const plus = new OperatorTerm({operator: "+"});const bonus = new NumericTerm({number: 4});t = ParentheticalTerm.fromTerms([d6, plus, bonus]);t.formula; // (4d6 + 4)`
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


### Protected Static_fromData

`Protected``Static`- _fromData(data: RollTermData): RollTermProtectedDefine term-specific logic for how a de-serialized data object is restored as a functional RollTerm
Parametersdata: RollTermDataThe de-serialized term data
Returns RollTermThe re-constructed RollTerm object
Inherited from RollTerm._fromData
- data: RollTermDataThe de-serialized term data

`Protected`Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm


#### Parameters

- data: RollTermDataThe de-serialized term data

The de-serialized term data


#### Returns RollTerm

The re-constructed RollTerm object

Inherited from RollTerm._fromData


### Settings

- Protected
- Inherited
- Internal


### On This Page

