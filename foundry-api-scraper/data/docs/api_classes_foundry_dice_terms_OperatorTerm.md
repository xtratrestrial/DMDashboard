# OperatorTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.OperatorTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- OperatorTerm


# Class OperatorTerm

A type of RollTerm used to denote and perform an arithmetic operation.


#### Hierarchy (View Summary)

- RollTermOperatorTerm
- OperatorTerm

- OperatorTerm


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


### operator

The term's operator value.


### options

An object of additional options which describes and modifies the term.

Inherited from RollTerm.options


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP_STRING


### StaticOPERATORS

`Static`An array of operators which represent arithmetic operations


### StaticPRECEDENCE

`Static`An object of operators with their precedence values.


### StaticREGEXP

`Static`Overrides RollTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`Overrides RollTerm.SERIALIZE_ATTRIBUTES


## Accessors


### expression

- get expression(): stringReturns stringOverrides RollTerm.expression


#### Returns string

Overrides RollTerm.expression


### flavor

- get flavor(): stringReturns stringOverrides RollTerm.flavor


#### Returns string

Overrides RollTerm.flavor


### formula

- get formula(): stringA string representation of the formula, including optional flavor text.
Returns stringInherited from RollTerm.formula

A string representation of the formula, including optional flavor text.


#### Returns string

Inherited from RollTerm.formula


### isDeterministic

- get isDeterministic(): booleanWhether this term is entirely deterministic or contains some randomness.
Returns booleanInherited from RollTerm.isDeterministic

Whether this term is entirely deterministic or contains some randomness.


#### Returns boolean

Inherited from RollTerm.isDeterministic


### resolver

- get resolver(): RollResolverA reference to the RollResolver app being used to externally resolve this term.
Returns RollResolverInherited from RollTerm.resolver

A reference to the RollResolver app being used to externally resolve this term.


#### Returns RollResolver

Inherited from RollTerm.resolver


### total

- get total(): stringReturns stringOverrides RollTerm.total


#### Returns string

Overrides RollTerm.total


## Methods


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


### Protected_evaluate

`Protected`- _evaluate(options?: object): RollTerm | Promise<RollTerm>ProtectedEvaluate the term.
ParametersOptionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns RollTerm | Promise<RollTerm>Returns a Promise if the term is non-deterministic.
Inherited from RollTerm._evaluate
- Optionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

`Protected`Evaluate the term.


#### Parameters

- Optionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

`Optional`Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns RollTerm | Promise<RollTerm>

Returns a Promise if the term is non-deterministic.

Inherited from RollTerm._evaluate


### Static_fromData

`Static`- _fromData(data: any): OperatorTermParametersdata: anyReturns OperatorTermOverrides RollTerm._fromData
- data: any


#### Parameters

- data: any


#### Returns OperatorTerm

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

`Static`- fromParseNode(node: RollParseNode): RollTermConstruct a RollTerm from parser information.
Parametersnode: RollParseNodeThe node.
Returns RollTermInherited from RollTerm.fromParseNode
- node: RollParseNodeThe node.

Construct a RollTerm from parser information.


#### Parameters

- node: RollParseNodeThe node.

The node.


#### Returns RollTerm

Inherited from RollTerm.fromParseNode


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

