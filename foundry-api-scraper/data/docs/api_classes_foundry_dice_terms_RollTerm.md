# RollTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.RollTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- RollTerm


# Class RollTerm

An abstract class which represents a single token that can be used as part of a Roll formula.
Every portion of a Roll formula is parsed into a subclass of RollTerm in order for the Roll to be fully evaluated.


#### Hierarchy (View Summary)

- RollTermDiceTermFunctionTermNumericTermOperatorTermParentheticalTermPoolTermStringTerm
- DiceTerm
- FunctionTerm
- NumericTerm
- OperatorTerm
- ParentheticalTerm
- PoolTerm
- StringTerm

- DiceTerm
- FunctionTerm
- NumericTerm
- OperatorTerm
- ParentheticalTerm
- PoolTerm
- StringTerm


##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new RollTerm(termData?: { options?: object }): RollTermParametersOptionaltermData: { options?: object } = {}Optionaloptions?: objectAn object of additional options which describes and modifies the term.
Returns RollTerm
- OptionaltermData: { options?: object } = {}Optionaloptions?: objectAn object of additional options which describes and modifies the term.
- Optionaloptions?: objectAn object of additional options which describes and modifies the term.


#### Parameters

- OptionaltermData: { options?: object } = {}Optionaloptions?: objectAn object of additional options which describes and modifies the term.
- Optionaloptions?: objectAn object of additional options which describes and modifies the term.

`Optional`- Optionaloptions?: objectAn object of additional options which describes and modifies the term.


##### Optionaloptions?: object

`Optional`An object of additional options which describes and modifies the term.


#### Returns RollTerm


## Properties


### Internal_evaluated

`Internal`An internal flag for whether the term has been evaluated


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.


### isIntermediate

Is this term intermediate, and should be evaluated first as part of the simplification process?


### options

An object of additional options which describes and modifies the term.


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text


### StaticREGEXP

`Static`A regular expression used to match a term of this type


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized


## Accessors


### expression

- get expression(): stringA string representation of the formula expression for this RollTerm, prior to evaluation.
Returns string

A string representation of the formula expression for this RollTerm, prior to evaluation.


#### Returns string


### flavor

- get flavor(): stringOptional flavor text which modifies and describes this term.
Returns string

Optional flavor text which modifies and describes this term.


#### Returns string


### formula

- get formula(): stringA string representation of the formula, including optional flavor text.
Returns string

A string representation of the formula, including optional flavor text.


#### Returns string


### isDeterministic

- get isDeterministic(): booleanWhether this term is entirely deterministic or contains some randomness.
Returns boolean

Whether this term is entirely deterministic or contains some randomness.


#### Returns boolean


### resolver

- get resolver(): RollResolverA reference to the RollResolver app being used to externally resolve this term.
Returns RollResolver

A reference to the RollResolver app being used to externally resolve this term.


#### Returns RollResolver


### total

- get total(): string | number | voidA string or numeric representation of the final output for this term, after evaluation.
Returns string | number | void

A string or numeric representation of the final output for this term, after evaluation.


#### Returns string | number | void


## Methods


### evaluate

- evaluate(    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;    },): RollTerm| Promise<RollTerm>Evaluate the term, processing its inputs and finalizing its total.
ParametersOptionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which modify how the RollTerm is evaluated
OptionalallowStrings?: booleanIf true, string terms will not throw an error when evaluated.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Returns RollTerm | Promise<RollTerm>Returns a Promise if the term is non-deterministic.
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


### toJSON

- toJSON(): RollTermDataSerialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.
Returns RollTermData

Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
This method should return an object suitable for passing to the JSON.stringify function.


#### Returns RollTermData


### Protected_evaluate

`Protected`- _evaluate(options?: object): RollTerm | Promise<RollTerm>ProtectedEvaluate the term.
ParametersOptionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
Returns RollTerm | Promise<RollTerm>Returns a Promise if the term is non-deterministic.
- Optionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

`Protected`Evaluate the term.


#### Parameters

- Optionaloptions: object = {}Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

`Optional`Options which modify how the RollTerm is evaluated, see RollTerm#evaluate


#### Returns RollTerm | Promise<RollTerm>

Returns a Promise if the term is non-deterministic.


### StaticfromData

`Static`- fromData(data: RollTermData): RollTermConstruct a RollTerm from a provided data object
Parametersdata: RollTermDataProvided data from an un-serialized term
Returns RollTermThe constructed RollTerm
- data: RollTermDataProvided data from an un-serialized term

Construct a RollTerm from a provided data object


#### Parameters

- data: RollTermDataProvided data from an un-serialized term

Provided data from an un-serialized term


#### Returns RollTerm

The constructed RollTerm


### StaticfromJSON

`Static`- fromJSON(json: string): RollTermReconstruct a RollTerm instance from a provided JSON string
Parametersjson: stringA serialized JSON representation of a DiceTerm
Returns RollTermA reconstructed RollTerm from the provided JSON
- json: stringA serialized JSON representation of a DiceTerm

Reconstruct a RollTerm instance from a provided JSON string


#### Parameters

- json: stringA serialized JSON representation of a DiceTerm

A serialized JSON representation of a DiceTerm


#### Returns RollTerm

A reconstructed RollTerm from the provided JSON


### StaticfromParseNode

`Static`- fromParseNode(node: RollParseNode): RollTermConstruct a RollTerm from parser information.
Parametersnode: RollParseNodeThe node.
Returns RollTerm
- node: RollParseNodeThe node.

Construct a RollTerm from parser information.


#### Parameters

- node: RollParseNodeThe node.

The node.


#### Returns RollTerm


### StaticisDeterministic

`Static`- isDeterministic(    term: RollTerm,    options?: { maximize?: boolean; minimize?: boolean },): booleanDetermine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.
Parametersterm: RollTermThe term.
Optionaloptions: { maximize?: boolean; minimize?: boolean } = {}Options for evaluating the term.
Optionalmaximize?: booleanForce the result to be maximized.
Optionalminimize?: booleanForce the result to be minimized.
Returns boolean
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


### Protected Static_fromData

`Protected``Static`- _fromData(data: RollTermData): RollTermProtectedDefine term-specific logic for how a de-serialized data object is restored as a functional RollTerm
Parametersdata: RollTermDataThe de-serialized term data
Returns RollTermThe re-constructed RollTerm object
- data: RollTermDataThe de-serialized term data

`Protected`Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm


#### Parameters

- data: RollTermDataThe de-serialized term data

The de-serialized term data


#### Returns RollTerm

The re-constructed RollTerm object


### Settings

- Protected
- Inherited
- Internal


### On This Page

