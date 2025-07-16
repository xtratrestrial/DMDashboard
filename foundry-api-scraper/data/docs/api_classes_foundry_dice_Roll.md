# Roll | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.Roll.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- Roll


# Class Roll

An interface and API for constructing and evaluating dice rolls.
The basic structure for a dice roll is a string formula and an object of data against which to parse it.


#### Example: Attack with advantage

```javascript
// Construct the Roll instancelet r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});// The parsed terms of the roll formulaconsole.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]// Execute the rollawait r.evaluate();// The resulting equation after it was rolledconsole.log(r.result);   // 16 + 2 + 4// The total resulting from the rollconsole.log(r.total);    // 22
Copy
```

`// Construct the Roll instancelet r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});// The parsed terms of the roll formulaconsole.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]// Execute the rollawait r.evaluate();// The resulting equation after it was rolledconsole.log(r.result);   // 16 + 2 + 4// The total resulting from the rollconsole.log(r.total);    // 22`
##### Index


### Constructors


### Properties


### Accessors


### Methods


## Constructors


### constructor

- new Roll(formula?: string, data?: object, options?: RollOptions): RollParametersformula: string = ""The string formula to parse
data: object = {}The data object against which to parse attributes within the formula
Optionaloptions: RollOptions = {}Options modifying or describing the Roll
Returns Roll
- formula: string = ""The string formula to parse
- data: object = {}The data object against which to parse attributes within the formula
- Optionaloptions: RollOptions = {}Options modifying or describing the Roll


#### Parameters

- formula: string = ""The string formula to parse
- data: object = {}The data object against which to parse attributes within the formula
- Optionaloptions: RollOptions = {}Options modifying or describing the Roll

The string formula to parse

The data object against which to parse attributes within the formula

`Optional`Options modifying or describing the Roll


#### Returns Roll


## Properties


### Internal_dice

`Internal`An array of inner DiceTerms that were evaluated as part of the Roll evaluation


### Internal_evaluated

`Internal`Track whether this Roll instance has been evaluated or not. Once evaluated the Roll is immutable.


### Internal_formula

`Internal`Store the original cleaned formula for the Roll, prior to any internal evaluation or simplification


### Internal_resolver

`Internal`A reference to the RollResolver app being used to externally resolve this Roll.


### Internal_root

`Internal`A reference to the Roll at the root of the evaluation tree.


### Internal_total

`Internal`Cache the numeric total generated through evaluation of the Roll.


### data

The original provided data object which substitutes into attributes of the roll formula.


### options

Options modifying or describing the Roll


### terms

The identified terms of the Roll


### StaticCHAT_TEMPLATE

`Static`The HTML template path used to render a complete Roll object to the chat log


### Static ReadonlyDICE_CONFIGURATION_SETTING

`Static``Readonly`Dice Configuration setting name.


### StaticMATH_PROXY

`Static`A Proxy environment for safely evaluating a string using only available Math functions


### StaticRESOLVERS

`Static`A mapping of Roll instances to currently-active resolvers.


### StaticTOOLTIP_TEMPLATE

`Static`The HTML template used to render an expanded Roll tooltip to the chat log


## Accessors


### dice

- get dice(): DiceTerm[]Return an Array of the individual DiceTerm instances contained within this Roll.
Returns DiceTerm[]

Return an Array of the individual DiceTerm instances contained within this Roll.


#### Returns DiceTerm[]


### formula

- get formula(): stringReturn a standardized representation for the displayed formula associated with this Roll.
Returns string

Return a standardized representation for the displayed formula associated with this Roll.


#### Returns string


### isDeterministic

- get isDeterministic(): booleanWhether this Roll contains entirely deterministic terms or whether there is some randomness.
Returns boolean

Whether this Roll contains entirely deterministic terms or whether there is some randomness.


#### Returns boolean


### product

- get product(): anyReturn the arbitrary product of evaluating this Roll.
Returns any

Return the arbitrary product of evaluating this Roll.


#### Returns any


### result

- get result(): stringThe resulting arithmetic expression after rolls have been evaluated
Returns string

The resulting arithmetic expression after rolls have been evaluated


#### Returns string


### total

- get total(): numberReturn the total result of the Roll expression if it has been evaluated.
Returns number

Return the total result of the Roll expression if it has been evaluated.


#### Returns number


### StaticdefaultImplementation

`Static`- get defaultImplementation(): typeof RollGet the default configured Roll class.
Returns typeof Roll

Get the default configured Roll class.


#### Returns typeof Roll


### StaticresolverImplementation

`Static`- get resolverImplementation(): typeof RollResolverRetrieve the appropriate resolver implementation based on the user's configuration.
Returns typeof RollResolver

Retrieve the appropriate resolver implementation based on the user's configuration.


#### Returns typeof RollResolver


## Methods


### alter

- alter(multiply: number, add: number, multiplyNumeric?: boolean): RollAlter the Roll expression by adding or multiplying the number of dice which are rolled
Parametersmultiply: numberA factor to multiply. Dice are multiplied before any additions.
add: numberA number of dice to add. Dice are added after multiplication.
OptionalmultiplyNumeric: boolean = {}Apply multiplication factor to numeric scalar terms
Returns RollThe altered Roll expression
- multiply: numberA factor to multiply. Dice are multiplied before any additions.
- add: numberA number of dice to add. Dice are added after multiplication.
- OptionalmultiplyNumeric: boolean = {}Apply multiplication factor to numeric scalar terms

Alter the Roll expression by adding or multiplying the number of dice which are rolled


#### Parameters

- multiply: numberA factor to multiply. Dice are multiplied before any additions.
- add: numberA number of dice to add. Dice are added after multiplication.
- OptionalmultiplyNumeric: boolean = {}Apply multiplication factor to numeric scalar terms

A factor to multiply. Dice are multiplied before any additions.

A number of dice to add. Dice are added after multiplication.

`Optional`Apply multiplication factor to numeric scalar terms


#### Returns Roll

The altered Roll expression


### clone

- clone(): RollClone the Roll instance, returning a new Roll instance that has not yet been evaluated.
Returns Roll

Clone the Roll instance, returning a new Roll instance that has not yet been evaluated.


#### Returns Roll


### evaluate

- evaluate(    options?: {        allowInteractive?: boolean;        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;    },): Promise<Roll>Execute the Roll asynchronously, replacing dice and evaluating the total result
ParametersOptionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how the Roll is evaluated
OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Returns Promise<Roll>The evaluated Roll instance
Example: Evaluate a Roll expressionlet r = new Roll("2d6 + 4 + 1d4");await r.evaluate();console.log(r.result); // 5 + 4 + 2console.log(r.total);  // 11
Copy
- Optionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how the Roll is evaluated
OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

Execute the Roll asynchronously, replacing dice and evaluating the total result


#### Parameters

- Optionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how the Roll is evaluated
OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.

`Optional`Options which inform how the Roll is evaluated

- OptionalallowInteractive?: booleanIf false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.


##### OptionalallowInteractive?: boolean

`Optional`If false, force the use of non-interactive rolls and do not
prompt the user to make manual rolls.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Maximize the result, obtaining the largest possible value.


##### Optionalminimize?: boolean

`Optional`Minimize the result, obtaining the smallest possible value.


#### Returns Promise<Roll>

The evaluated Roll instance


#### Example: Evaluate a Roll expression

```javascript
let r = new Roll("2d6 + 4 + 1d4");await r.evaluate();console.log(r.result); // 5 + 4 + 2console.log(r.total);  // 11
Copy
```

`let r = new Roll("2d6 + 4 + 1d4");await r.evaluate();console.log(r.result); // 5 + 4 + 2console.log(r.total);  // 11`
### evaluateSync

- evaluateSync(    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;        strict?: boolean;    },): RollExecute the Roll synchronously, replacing dice and evaluating the total result.
ParametersOptionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.
Returns RollThe evaluated Roll instance.
- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.

Execute the Roll synchronously, replacing dice and evaluating the total result.


#### Parameters

- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.

`Optional`- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanMaximize the result, obtaining the largest possible value.
- Optionalminimize?: booleanMinimize the result, obtaining the smallest possible value.
- Optionalstrict?: booleanThrow an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Maximize the result, obtaining the largest possible value.


##### Optionalminimize?: boolean

`Optional`Minimize the result, obtaining the smallest possible value.


##### Optionalstrict?: boolean

`Optional`Throw an Error if the Roll contains non-deterministic terms that
cannot be evaluated synchronously. If this is set to false,
non-deterministic terms will be ignored.


#### Returns Roll

The evaluated Roll instance.


### getTooltip

- getTooltip(): Promise<string>Render the tooltip HTML for a Roll instance
Returns Promise<string>The rendered HTML tooltip as a string

Render the tooltip HTML for a Roll instance


#### Returns Promise<string>

The rendered HTML tooltip as a string


### propagateFlavor

- propagateFlavor(flavor: string): voidPropagate flavor text across all terms that do not have any.
Parametersflavor: stringThe flavor text.
Returns void
- flavor: stringThe flavor text.

Propagate flavor text across all terms that do not have any.


#### Parameters

- flavor: stringThe flavor text.

The flavor text.


#### Returns void


### render

- render(    options?: { flavor?: string; isPrivate?: boolean; template?: string },): Promise<string>Render a Roll instance to HTML
ParametersOptionaloptions: { flavor?: string; isPrivate?: boolean; template?: string } = {}Options which affect how the Roll is rendered
Optionalflavor?: stringFlavor text to include
OptionalisPrivate?: booleanIs the Roll displayed privately?
Optionaltemplate?: stringA custom HTML template path
Returns Promise<string>The rendered HTML template as a string
- Optionaloptions: { flavor?: string; isPrivate?: boolean; template?: string } = {}Options which affect how the Roll is rendered
Optionalflavor?: stringFlavor text to include
OptionalisPrivate?: booleanIs the Roll displayed privately?
Optionaltemplate?: stringA custom HTML template path
- Optionalflavor?: stringFlavor text to include
- OptionalisPrivate?: booleanIs the Roll displayed privately?
- Optionaltemplate?: stringA custom HTML template path

Render a Roll instance to HTML


#### Parameters

- Optionaloptions: { flavor?: string; isPrivate?: boolean; template?: string } = {}Options which affect how the Roll is rendered
Optionalflavor?: stringFlavor text to include
OptionalisPrivate?: booleanIs the Roll displayed privately?
Optionaltemplate?: stringA custom HTML template path
- Optionalflavor?: stringFlavor text to include
- OptionalisPrivate?: booleanIs the Roll displayed privately?
- Optionaltemplate?: stringA custom HTML template path

`Optional`Options which affect how the Roll is rendered

- Optionalflavor?: stringFlavor text to include
- OptionalisPrivate?: booleanIs the Roll displayed privately?
- Optionaltemplate?: stringA custom HTML template path


##### Optionalflavor?: string

`Optional`Flavor text to include


##### OptionalisPrivate?: boolean

`Optional`Is the Roll displayed privately?


##### Optionaltemplate?: string

`Optional`A custom HTML template path


#### Returns Promise<string>

The rendered HTML template as a string


### reroll

- reroll(options?: object): Promise<Roll>Create a new Roll object using the original provided formula and data.
Each roll is immutable, so this method returns a new Roll instance using the same data.
ParametersOptionaloptions: object = {}Evaluation options passed to Roll#evaluate
Returns Promise<Roll>A new Roll object, rolled using the same formula and data
- Optionaloptions: object = {}Evaluation options passed to Roll#evaluate

Create a new Roll object using the original provided formula and data.
Each roll is immutable, so this method returns a new Roll instance using the same data.


#### Parameters

- Optionaloptions: object = {}Evaluation options passed to Roll#evaluate

`Optional`Evaluation options passed to Roll#evaluate


#### Returns Promise<Roll>

A new Roll object, rolled using the same formula and data


### resetFormula

- resetFormula(): stringRecompile the formula string that represents this Roll instance from its component terms.
Returns stringThe re-compiled formula

Recompile the formula string that represents this Roll instance from its component terms.


#### Returns string

The re-compiled formula


### roll

- roll(options?: object): Promise<Roll>Alias for evaluate.
Parametersoptions: object = {}Options passed to Roll#evaluate
Returns Promise<Roll>See
- options: object = {}Options passed to Roll#evaluate

Alias for evaluate.


#### Parameters

- options: object = {}Options passed to Roll#evaluate

Options passed to Roll#evaluate


#### Returns Promise<Roll>


#### See


### toAnchor

- toAnchor(    options?: {        attrs?: Record<string, string>;        classes?: string[];        dataset?: Record<string, string>;        icon?: string;        label?: string;    },): HTMLAnchorElementConstruct an inline roll link for this Roll.
ParametersOptionaloptions: {    attrs?: Record<string, string>;    classes?: string[];    dataset?: Record<string, string>;    icon?: string;    label?: string;} = {}Additional options to configure how the link is constructed.
Optionalattrs?: Record<string, string>Attributes to set on the link.
Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
Optionallabel?: stringA custom label for the total.
Returns HTMLAnchorElement
- Optionaloptions: {    attrs?: Record<string, string>;    classes?: string[];    dataset?: Record<string, string>;    icon?: string;    label?: string;} = {}Additional options to configure how the link is constructed.
Optionalattrs?: Record<string, string>Attributes to set on the link.
Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
Optionallabel?: stringA custom label for the total.
- Optionalattrs?: Record<string, string>Attributes to set on the link.
- Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
- Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
- Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
- Optionallabel?: stringA custom label for the total.

Construct an inline roll link for this Roll.


#### Parameters

- Optionaloptions: {    attrs?: Record<string, string>;    classes?: string[];    dataset?: Record<string, string>;    icon?: string;    label?: string;} = {}Additional options to configure how the link is constructed.
Optionalattrs?: Record<string, string>Attributes to set on the link.
Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
Optionallabel?: stringA custom label for the total.
- Optionalattrs?: Record<string, string>Attributes to set on the link.
- Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
- Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
- Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
- Optionallabel?: stringA custom label for the total.

`Optional`Additional options to configure how the link is constructed.

- Optionalattrs?: Record<string, string>Attributes to set on the link.
- Optionalclasses?: string[]Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.
- Optionaldataset?: Record<string, string>Custom data attributes to set on the link.
- Optionalicon?: stringA font-awesome icon class to use as the icon instead of a d20.
- Optionallabel?: stringA custom label for the total.


##### Optionalattrs?: Record<string, string>

`Optional`Attributes to set on the link.


##### Optionalclasses?: string[]

`Optional`Additional classes to add to the link. The classes inline-roll
and inline-result are added by default.

`inline-roll``inline-result`
##### Optionaldataset?: Record<string, string>

`Optional`Custom data attributes to set on the link.


##### Optionalicon?: string

`Optional`A font-awesome icon class to use as the icon instead of a d20.


##### Optionallabel?: string

`Optional`A custom label for the total.


#### Returns HTMLAnchorElement


### toJSON

- toJSON(): objectRepresent the data of the Roll as an object suitable for JSON serialization.
Returns objectStructured data which can be serialized into JSON

Represent the data of the Roll as an object suitable for JSON serialization.


#### Returns object

Structured data which can be serialized into JSON


### toMessage

- toMessage(    messageData?: object,    options?: { create?: boolean; rollMode?: string },): Promise<any>Transform a Roll instance into a ChatMessage, displaying the roll result.
This function can either create the ChatMessage directly, or return the data object that will be used to create.
ParametersmessageData: object = {}The data object to use when creating the message
Optionaloptions: { create?: boolean; rollMode?: string } = {}Additional options which modify the created message.
Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes
Returns Promise<any>A promise which resolves to the created ChatMessage document if create is
true, or the Object of prepared chatData otherwise.
- messageData: object = {}The data object to use when creating the message
- Optionaloptions: { create?: boolean; rollMode?: string } = {}Additional options which modify the created message.
Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes
- Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
- OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes

Transform a Roll instance into a ChatMessage, displaying the roll result.
This function can either create the ChatMessage directly, or return the data object that will be used to create.


#### Parameters

- messageData: object = {}The data object to use when creating the message
- Optionaloptions: { create?: boolean; rollMode?: string } = {}Additional options which modify the created message.
Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes
- Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
- OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes

The data object to use when creating the message

`Optional`Additional options which modify the created message.

- Optionalcreate?: booleanWhether to automatically create the chat message, or only return the
prepared chatData object.
- OptionalrollMode?: stringThe template roll mode to use for the message from CONFIG.Dice.rollModes


##### Optionalcreate?: boolean

`Optional`Whether to automatically create the chat message, or only return the
prepared chatData object.


##### OptionalrollMode?: string

`Optional`The template roll mode to use for the message from CONFIG.Dice.rollModes


#### Returns Promise<any>

A promise which resolves to the created ChatMessage document if create is
true, or the Object of prepared chatData otherwise.


### toString

- toString(): stringReturns string


#### Returns string


### Protected_evaluate

`Protected`- _evaluate(    options?: {        allowInteractive?: boolean;        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;    },): Promise<Roll>ProtectedEvaluate the roll asynchronously.
ParametersOptionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Returns Promise<Roll>
- Optionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
- OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized

`Protected`Evaluate the roll asynchronously.


#### Parameters

- Optionaloptions: {    allowInteractive?: boolean;    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
- OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized

`Optional`Options which inform how evaluation is performed

- OptionalallowInteractive?: booleanIf false, force the use of digital rolls and do not prompt the user to
make manual rolls.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized


##### OptionalallowInteractive?: boolean

`Optional`If false, force the use of digital rolls and do not prompt the user to
make manual rolls.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized


#### Returns Promise<Roll>


### Protected_evaluateASTAsync

`Protected`- _evaluateASTAsync(    node: RollParseNode | RollTerm,    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;    },): Promise<string | number>ProtectedEvaluate an AST asynchronously.
Parametersnode: RollParseNode | RollTermThe root node or term.
Optionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Returns Promise<string | number>
- node: RollParseNode | RollTermThe root node or term.
- Optionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized

`Protected`Evaluate an AST asynchronously.


#### Parameters

- node: RollParseNode | RollTermThe root node or term.
- Optionaloptions: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized

The root node or term.

`Optional`Options which inform how evaluation is performed

- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized


#### Returns Promise<string | number>


### Protected_evaluateASTSync

`Protected`- _evaluateASTSync(    node: RollParseNode | RollTerm,    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;        strict?: boolean;    },): string| numberProtectedEvaluate an AST synchronously.
Parametersnode: RollParseNode | RollTermThe root node or term.
Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
Returns string | number
- node: RollParseNode | RollTermThe root node or term.
- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.

`Protected`Evaluate an AST synchronously.


#### Parameters

- node: RollParseNode | RollTermThe root node or term.
- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.

The root node or term.

`Optional`Options which inform how evaluation is performed

- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized


##### Optionalstrict?: boolean

`Optional`Throw an error if encountering a term that cannot be synchronously
evaluated.


#### Returns string | number


### Protected_evaluateSync

`Protected`- _evaluateSync(    options?: {        allowStrings?: boolean;        maximize?: boolean;        minimize?: boolean;        strict?: boolean;    },): RollProtectedEvaluate the roll synchronously.
ParametersOptionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
Returns Roll
- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.

`Protected`Evaluate the roll synchronously.


#### Parameters

- Optionaloptions: {    allowStrings?: boolean;    maximize?: boolean;    minimize?: boolean;    strict?: boolean;} = {}Options which inform how evaluation is performed
OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
Optionalmaximize?: booleanForce the result to be maximized
Optionalminimize?: booleanForce the result to be minimized
Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.
- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.

`Optional`Options which inform how evaluation is performed

- OptionalallowStrings?: booleanIf true, string terms will not cause an error to be thrown during
evaluation.
- Optionalmaximize?: booleanForce the result to be maximized
- Optionalminimize?: booleanForce the result to be minimized
- Optionalstrict?: booleanThrow an error if encountering a term that cannot be synchronously
evaluated.


##### OptionalallowStrings?: boolean

`Optional`If true, string terms will not cause an error to be thrown during
evaluation.


##### Optionalmaximize?: boolean

`Optional`Force the result to be maximized


##### Optionalminimize?: boolean

`Optional`Force the result to be minimized


##### Optionalstrict?: boolean

`Optional`Throw an error if encountering a term that cannot be synchronously
evaluated.


#### Returns Roll


### Protected_evaluateTotal

`Protected`- _evaluateTotal(): numberProtectedSafely evaluate the final total result for the Roll using its component terms.
Returns numberThe evaluated total

`Protected`Safely evaluate the final total result for the Roll using its component terms.


#### Returns number

The evaluated total


### Protected_prepareChatRenderContext

`Protected`- _prepareChatRenderContext(    options?: { flavor?: string; isPrivate?: boolean },): Promise<{ object: any }>ProtectedPrepare context data used to render the CHAT_TEMPLATE for this roll.
Parametersoptions: { flavor?: string; isPrivate?: boolean } = {}Returns Promise<{ object: any }>
- options: { flavor?: string; isPrivate?: boolean } = {}

`Protected`Prepare context data used to render the CHAT_TEMPLATE for this roll.


#### Parameters

- options: { flavor?: string; isPrivate?: boolean } = {}


#### Returns Promise<{ object: any }>


### Protected_prepareData

`Protected`- _prepareData(data: object): objectProtectedPrepare the data structure used for the Roll.
This is factored out to allow for custom Roll classes to do special data preparation using provided input.
Parametersdata: objectProvided roll data
Returns objectThe prepared data object
- data: objectProvided roll data

`Protected`Prepare the data structure used for the Roll.
This is factored out to allow for custom Roll classes to do special data preparation using provided input.


#### Parameters

- data: objectProvided roll data

Provided roll data


#### Returns object

The prepared data object


### Static_classifyStringTerm

`Static`- _classifyStringTerm(    term: string,    options?: {        intermediate?: boolean;        next?: string | RollTerm;        prior?: string | RollTerm;    },): RollTermInternalClassify a remaining string term into a recognized RollTerm class
Parametersterm: stringA remaining un-classified string
Optionaloptions: { intermediate?: boolean; next?: string | RollTerm; prior?: string | RollTerm } = {}Options which customize classification
Optionalintermediate?: booleanAllow intermediate terms
Optionalnext?: string | RollTermThe next term to classify
Optionalprior?: string | RollTermThe prior classified term
Returns RollTermA classified RollTerm instance
- term: stringA remaining un-classified string
- Optionaloptions: { intermediate?: boolean; next?: string | RollTerm; prior?: string | RollTerm } = {}Options which customize classification
Optionalintermediate?: booleanAllow intermediate terms
Optionalnext?: string | RollTermThe next term to classify
Optionalprior?: string | RollTermThe prior classified term
- Optionalintermediate?: booleanAllow intermediate terms
- Optionalnext?: string | RollTermThe next term to classify
- Optionalprior?: string | RollTermThe prior classified term

`Internal`Classify a remaining string term into a recognized RollTerm class


#### Parameters

- term: stringA remaining un-classified string
- Optionaloptions: { intermediate?: boolean; next?: string | RollTerm; prior?: string | RollTerm } = {}Options which customize classification
Optionalintermediate?: booleanAllow intermediate terms
Optionalnext?: string | RollTermThe next term to classify
Optionalprior?: string | RollTermThe prior classified term
- Optionalintermediate?: booleanAllow intermediate terms
- Optionalnext?: string | RollTermThe next term to classify
- Optionalprior?: string | RollTermThe prior classified term

A remaining un-classified string

`Optional`Options which customize classification

- Optionalintermediate?: booleanAllow intermediate terms
- Optionalnext?: string | RollTermThe next term to classify
- Optionalprior?: string | RollTermThe prior classified term


##### Optionalintermediate?: boolean

`Optional`Allow intermediate terms


##### Optionalnext?: string | RollTerm

`Optional`The next term to classify


##### Optionalprior?: string | RollTerm

`Optional`The prior classified term


#### Returns RollTerm

A classified RollTerm instance


### StaticcollapseInlineResult

`Static`- collapseInlineResult(a: HTMLAnchorElement): voidCollapse an expanded inline roll to conceal its tooltip.
Parametersa: HTMLAnchorElementThe inline-roll button
Returns void
- a: HTMLAnchorElementThe inline-roll button

Collapse an expanded inline roll to conceal its tooltip.


#### Parameters

- a: HTMLAnchorElementThe inline-roll button

The inline-roll button


#### Returns void


### Staticcreate

`Static`- create(formula: string, data?: object, options?: object): RollA factory method which constructs a Roll instance using the default configured Roll class.
Parametersformula: stringThe formula used to create the Roll instance
Optionaldata: object = {}The data object which provides component data for the formula
Optionaloptions: object = {}Additional options which modify or describe this Roll
Returns RollThe constructed Roll instance
- formula: stringThe formula used to create the Roll instance
- Optionaldata: object = {}The data object which provides component data for the formula
- Optionaloptions: object = {}Additional options which modify or describe this Roll

A factory method which constructs a Roll instance using the default configured Roll class.


#### Parameters

- formula: stringThe formula used to create the Roll instance
- Optionaldata: object = {}The data object which provides component data for the formula
- Optionaloptions: object = {}Additional options which modify or describe this Roll

The formula used to create the Roll instance

`Optional`The data object which provides component data for the formula

`Optional`Additional options which modify or describe this Roll


#### Returns Roll

The constructed Roll instance


### StaticexpandInlineResult

`Static`- expandInlineResult(a: HTMLAnchorElement): Promise<void>Expand an inline roll element to display its contained dice result as a tooltip.
Parametersa: HTMLAnchorElementThe inline-roll button
Returns Promise<void>
- a: HTMLAnchorElementThe inline-roll button

Expand an inline roll element to display its contained dice result as a tooltip.


#### Parameters

- a: HTMLAnchorElementThe inline-roll button

The inline-roll button


#### Returns Promise<void>


### StaticfromData

`Static`- fromData(data: object): RollRecreate a Roll instance using a provided data object
Parametersdata: objectUnpacked data representing the Roll
Returns RollA reconstructed Roll instance
- data: objectUnpacked data representing the Roll

Recreate a Roll instance using a provided data object


#### Parameters

- data: objectUnpacked data representing the Roll

Unpacked data representing the Roll


#### Returns Roll

A reconstructed Roll instance


### StaticfromJSON

`Static`- fromJSON(json: string): RollRecreate a Roll instance using a provided JSON string
Parametersjson: stringSerialized JSON data representing the Roll
Returns RollA reconstructed Roll instance
- json: stringSerialized JSON data representing the Roll

Recreate a Roll instance using a provided JSON string


#### Parameters

- json: stringSerialized JSON data representing the Roll

Serialized JSON data representing the Roll


#### Returns Roll

A reconstructed Roll instance


### StaticfromTerms

`Static`- fromTerms(terms: RollTerm[], options?: object): RollManually construct a Roll object by providing an explicit set of input terms
Parametersterms: RollTerm[]The array of terms to use as the basis for the Roll
Optionaloptions: object = {}Additional options passed to the Roll constructor
Returns RollThe constructed Roll instance
Example: Construct a Roll instance from an array of component termsconst t1 = new Die({number: 4, faces: 8};const plus = new OperatorTerm({operator: "+"});const t2 = new NumericTerm({number: 8});const roll = Roll.fromTerms([t1, plus, t2]);roll.formula; // 4d8 + 8
Copy
- terms: RollTerm[]The array of terms to use as the basis for the Roll
- Optionaloptions: object = {}Additional options passed to the Roll constructor

Manually construct a Roll object by providing an explicit set of input terms


#### Parameters

- terms: RollTerm[]The array of terms to use as the basis for the Roll
- Optionaloptions: object = {}Additional options passed to the Roll constructor

The array of terms to use as the basis for the Roll

`Optional`Additional options passed to the Roll constructor


#### Returns Roll

The constructed Roll instance


#### Example: Construct a Roll instance from an array of component terms

```javascript
const t1 = new Die({number: 4, faces: 8};const plus = new OperatorTerm({operator: "+"});const t2 = new NumericTerm({number: 8});const roll = Roll.fromTerms([t1, plus, t2]);roll.formula; // 4d8 + 8
Copy
```

`const t1 = new Die({number: 4, faces: 8};const plus = new OperatorTerm({operator: "+"});const t2 = new NumericTerm({number: 8});const roll = Roll.fromTerms([t1, plus, t2]);roll.formula; // 4d8 + 8`
### StaticgetFormula

`Static`- getFormula(terms: RollTerm[]): stringTransform an array of RollTerm objects into a cleaned string formula representation.
Parametersterms: RollTerm[]An array of terms to represent as a formula
Returns stringThe string representation of the formula
- terms: RollTerm[]An array of terms to represent as a formula

Transform an array of RollTerm objects into a cleaned string formula representation.


#### Parameters

- terms: RollTerm[]An array of terms to represent as a formula

An array of terms to represent as a formula


#### Returns string

The string representation of the formula


### StaticidentifyFulfillableTerms

`Static`- identifyFulfillableTerms(terms: RollTerm[]): DiceTerm[]Determine which of the given terms require external fulfillment.
Parametersterms: RollTerm[]The terms.
Returns DiceTerm[]
- terms: RollTerm[]The terms.

Determine which of the given terms require external fulfillment.


#### Parameters

- terms: RollTerm[]The terms.

The terms.


#### Returns DiceTerm[]


### StaticinstantiateAST

`Static`- instantiateAST(ast: RollParseNode): RollTerm[]Instantiate the nodes in an AST sub-tree into RollTerm instances.
Parametersast: RollParseNodeThe root of the AST sub-tree.
Returns RollTerm[]
- ast: RollParseNodeThe root of the AST sub-tree.

Instantiate the nodes in an AST sub-tree into RollTerm instances.


#### Parameters

- ast: RollParseNodeThe root of the AST sub-tree.

The root of the AST sub-tree.


#### Returns RollTerm[]


### Staticparse

`Static`- parse(formula?: string, data?: object): RollTerm[]Parse a formula expression using the compiled peggy grammar.
Parametersformula: string = ""The original string expression to parse.
data: object = {}A data object used to substitute for attributes in the formula.
Returns RollTerm[]
- formula: string = ""The original string expression to parse.
- data: object = {}A data object used to substitute for attributes in the formula.

Parse a formula expression using the compiled peggy grammar.


#### Parameters

- formula: string = ""The original string expression to parse.
- data: object = {}A data object used to substitute for attributes in the formula.

The original string expression to parse.

A data object used to substitute for attributes in the formula.


#### Returns RollTerm[]


### StaticregisterResult

`Static`- registerResult(    method: string,    denomination: string,    result: number,): boolean | voidRegister an externally-fulfilled result with an active RollResolver.
Parametersmethod: stringThe fulfillment method.
denomination: stringThe die denomination being fulfilled.
result: numberThe obtained result.
Returns boolean | voidWhether the result was consumed. Returns undefined if no resolver was available.
- method: stringThe fulfillment method.
- denomination: stringThe die denomination being fulfilled.
- result: numberThe obtained result.

Register an externally-fulfilled result with an active RollResolver.


#### Parameters

- method: stringThe fulfillment method.
- denomination: stringThe die denomination being fulfilled.
- result: numberThe obtained result.

The fulfillment method.

The die denomination being fulfilled.

The obtained result.


#### Returns boolean | void

Whether the result was consumed. Returns undefined if no resolver was available.


### StaticreplaceFormulaData

`Static`- replaceFormulaData(    formula: string,    data: object,    options?: { missing?: string; warn?: boolean },): stringReplace referenced data attributes in the roll formula with values from the provided data.
Data references in the formula use the @attr syntax and would reference the corresponding attr key.
Parametersformula: stringThe original formula within which to replace
data: objectThe data object which provides replacements
Optionaloptions: { missing?: string; warn?: boolean } = {}Options which modify formula replacement
Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.
Returns string
- formula: stringThe original formula within which to replace
- data: objectThe data object which provides replacements
- Optionaloptions: { missing?: string; warn?: boolean } = {}Options which modify formula replacement
Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.
- Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
- Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.

Replace referenced data attributes in the roll formula with values from the provided data.
Data references in the formula use the @attr syntax and would reference the corresponding attr key.


#### Parameters

- formula: stringThe original formula within which to replace
- data: objectThe data object which provides replacements
- Optionaloptions: { missing?: string; warn?: boolean } = {}Options which modify formula replacement
Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.
- Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
- Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.

The original formula within which to replace

The data object which provides replacements

`Optional`Options which modify formula replacement

- Optionalmissing?: stringThe value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.
- Optionalwarn?: booleanDisplay a warning notification when encountering an un-matched key.


##### Optionalmissing?: string

`Optional`The value that should be assigned to any unmatched keys.
If null, the unmatched key is left as-is.


##### Optionalwarn?: boolean

`Optional`Display a warning notification when encountering an un-matched key.


#### Returns string


### StaticsafeEval

`Static`- safeEval(expression: string): numberA sandbox-safe evaluation function to execute user-input code with access to scoped Math methods.
Parametersexpression: stringThe input string expression
Returns numberThe numeric evaluated result
- expression: stringThe input string expression

A sandbox-safe evaluation function to execute user-input code with access to scoped Math methods.


#### Parameters

- expression: stringThe input string expression

The input string expression


#### Returns number

The numeric evaluated result


### StaticsimplifyTerms

`Static`- simplifyTerms(terms: RollTerm[]): RollTerm[]After parenthetical and arithmetic terms have been resolved, we need to simplify the remaining expression.
Any remaining string terms need to be combined with adjacent non-operators in order to construct parsable terms.
Parametersterms: RollTerm[]An array of terms which is eligible for simplification
Returns RollTerm[]An array of simplified terms
- terms: RollTerm[]An array of terms which is eligible for simplification

After parenthetical and arithmetic terms have been resolved, we need to simplify the remaining expression.
Any remaining string terms need to be combined with adjacent non-operators in order to construct parsable terms.


#### Parameters

- terms: RollTerm[]An array of terms which is eligible for simplification

An array of terms which is eligible for simplification


#### Returns RollTerm[]

An array of simplified terms


### Staticsimulate

`Static`- simulate(formula: string, n?: number): Promise<number[]>Simulate a roll and evaluate the distribution of returned results
Parametersformula: stringThe Roll expression to simulate
n: number = 10000The number of simulations
Returns Promise<number[]>The rolled totals
- formula: stringThe Roll expression to simulate
- n: number = 10000The number of simulations

Simulate a roll and evaluate the distribution of returned results


#### Parameters

- formula: stringThe Roll expression to simulate
- n: number = 10000The number of simulations

The Roll expression to simulate

The number of simulations


#### Returns Promise<number[]>

The rolled totals


### Staticvalidate

`Static`- validate(formula: string): booleanValidate that a provided roll formula can represent a valid
Parametersformula: stringA candidate formula to validate
Returns booleanIs the provided input a valid dice formula?
- formula: stringA candidate formula to validate

Validate that a provided roll formula can represent a valid


#### Parameters

- formula: stringA candidate formula to validate

A candidate formula to validate


#### Returns boolean

Is the provided input a valid dice formula?


### Settings

- Protected
- Inherited
- Internal


### On This Page

