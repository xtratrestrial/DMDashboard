# StringTerm | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.terms.StringTerm.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- terms
- StringTerm


# Class StringTerm

A type of RollTerm used to represent strings which have not yet been matched.


#### Hierarchy (View Summary)

- RollTermStringTerm
- StringTerm

- StringTerm


##### Index


### Properties


### Accessors


### Methods


## Properties


### Internal_evaluated

`Internal`An internal flag for whether the term has been evaluated

Inherited from RollTerm._evaluated


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.

Inherited from RollTerm._root


### isIntermediate

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from RollTerm.isIntermediate


### options

An object of additional options which describes and modifies the term.

Inherited from RollTerm.options


### term

The term's string value.


### StaticFLAVOR_REGEXP

`Static`A regular expression which identifies term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP


### StaticFLAVOR_REGEXP_STRING

`Static`A regular expression pattern which identifies optional term-level flavor text

Inherited from RollTerm.FLAVOR_REGEXP_STRING


### StaticREGEXP

`Static`A regular expression used to match a term of this type

Inherited from RollTerm.REGEXP


### StaticSERIALIZE_ATTRIBUTES

`Static`An array of additional attributes which should be retained when the term is serialized

Overrides RollTerm.SERIALIZE_ATTRIBUTES


## Accessors


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

- get total(): stringA string or numeric representation of the final output for this term, after evaluation.
Returns stringOverrides RollTerm.total

A string or numeric representation of the final output for this term, after evaluation.


#### Returns string

Overrides RollTerm.total


## Methods


### evaluate

- evaluate(__namedParameters?: { allowStrings?: boolean }): StringTermEvaluate the term, processing its inputs and finalizing its total.
Parameters__namedParameters: { allowStrings?: boolean } = {}Options which modify how the RollTerm is evaluated
Returns StringTermReturns a Promise if the term is non-deterministic.
Overrides RollTerm.evaluate
- __namedParameters: { allowStrings?: boolean } = {}Options which modify how the RollTerm is evaluated

Evaluate the term, processing its inputs and finalizing its total.


#### Parameters

- __namedParameters: { allowStrings?: boolean } = {}Options which modify how the RollTerm is evaluated

Options which modify how the RollTerm is evaluated


#### Returns StringTerm

Returns a Promise if the term is non-deterministic.

Overrides RollTerm.evaluate


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

