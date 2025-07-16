# KeyboardManager | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.helpers.interaction.KeyboardManager.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- helpers
- interaction
- KeyboardManager


# Class KeyboardManager

A set of helpers and management functions for dealing with user input from keyboard events.
https://keycode.info/


#### See

foundry.Game#keyboard


##### Index


### Properties


### Accessors


### Methods


## Properties


### downKeys

The set of key codes which are currently depressed (down)


### moveKeys

The set of movement keys which were recently pressed


### StaticCONTROL_KEY_STRING

`Static`The OS-specific string display for what their Command key is


### StaticKEYCODE_DISPLAY_MAPPING

`Static`A special mapping of how special KeyboardEvent#code values should map to displayed strings or symbols.
Values in this configuration object override any other display formatting rules which may be applied.


### StaticMODIFIER_CODES

`Static`Track which KeyboardEvent#code presses associate with each modifier.


### StaticMODIFIER_KEYS

`Static`Allowed modifier keys.


### StaticPRINTABLE_CHAR_REGEX

`Static`Matches any single graphic Unicode code-point (letters, digits, punctuation, symbols, including emoji).
Non-printable identifiers like ArrowLeft, ShiftLeft, Dead never match.


### StaticPROTECTED_KEYS

`Static`Key codes which are "protected" and should not be used because they are reserved for browser-level actions.


## Accessors


### hasFocus

- get hasFocus(): booleanDetermines whether an HTMLElement currently has focus, which may influence keybinding actions.
An element is considered to have focus if:

It has a dataset.keyboardFocus attribute explicitly set to "true" or an empty string ("").
It is an <input>, <select>, or <textarea> element, all of which inherently accept keyboard input.
It has the isContentEditable property set to true, meaning it is an editable element.
It is a <button> element inside a <form>, which suggests interactive use.

An element is considered not focused if:

There is no currently active element (document.activeElement is not an HTMLElement).
It has a dataset.keyboardFocus attribute explicitly set to "false".

If none of these conditions are met, the element is assumed to be unfocused.
Returns boolean
- It has a dataset.keyboardFocus attribute explicitly set to "true" or an empty string ("").
- It is an <input>, <select>, or <textarea> element, all of which inherently accept keyboard input.
- It has the isContentEditable property set to true, meaning it is an editable element.
- It is a <button> element inside a <form>, which suggests interactive use.
- There is no currently active element (document.activeElement is not an HTMLElement).
- It has a dataset.keyboardFocus attribute explicitly set to "false".

Determines whether an HTMLElement currently has focus, which may influence keybinding actions.

`HTMLElement`An element is considered to have focus if:

- It has a dataset.keyboardFocus attribute explicitly set to "true" or an empty string ("").
- It is an <input>, <select>, or <textarea> element, all of which inherently accept keyboard input.
- It has the isContentEditable property set to true, meaning it is an editable element.
- It is a <button> element inside a <form>, which suggests interactive use.

`dataset.keyboardFocus``"true"``""``<input>``<select>``<textarea>``isContentEditable``true``<button>``<form>`An element is considered not focused if:

- There is no currently active element (document.activeElement is not an HTMLElement).
- It has a dataset.keyboardFocus attribute explicitly set to "false".

`document.activeElement``HTMLElement``dataset.keyboardFocus``"false"`If none of these conditions are met, the element is assumed to be unfocused.


#### Returns boolean


### StaticisUniversalMode

`Static`- get isUniversalMode(): booleanIs logical keybindings active?
Returns boolean

Is logical keybindings active?


#### Returns boolean


## Methods


### _activateListeners

- _activateListeners(): voidInternalBegin listening to keyboard events.
Returns void

`Internal`Begin listening to keyboard events.


#### Returns void


### isCoreActionKeyActive

- isCoreActionKeyActive(action: string): booleanReport whether a core action key is currently actively depressed.
Parametersaction: stringThe core action to verify (ex: "target")
Returns booleanIs this core action key currently down (active)?
- action: stringThe core action to verify (ex: "target")

Report whether a core action key is currently actively depressed.


#### Parameters

- action: stringThe core action to verify (ex: "target")

The core action to verify (ex: "target")


#### Returns boolean

Is this core action key currently down (active)?


### isModifierActive

- isModifierActive(modifier: string): booleanReport whether a modifier in KeyboardManager.MODIFIER_KEYS is currently actively depressed.
Parametersmodifier: stringA modifier in MODIFIER_KEYS
Returns booleanIs this modifier key currently down (active)?
- modifier: stringA modifier in MODIFIER_KEYS

Report whether a modifier in KeyboardManager.MODIFIER_KEYS is currently actively depressed.


#### Parameters

- modifier: stringA modifier in MODIFIER_KEYS

A modifier in MODIFIER_KEYS


#### Returns boolean

Is this modifier key currently down (active)?


### releaseKeys

- releaseKeys(options?: { force?: boolean }): voidEmulate a key-up event for any currently down keys. When emulating, we go backwards such that combinations such as
"CONTROL + S" emulate the "S" first in order to capture modifiers.
ParametersOptionaloptions: { force?: boolean } = {}Options to configure behavior.
Optionalforce?: booleanForce the keyup events to be handled.
Returns void
- Optionaloptions: { force?: boolean } = {}Options to configure behavior.
Optionalforce?: booleanForce the keyup events to be handled.
- Optionalforce?: booleanForce the keyup events to be handled.

Emulate a key-up event for any currently down keys. When emulating, we go backwards such that combinations such as
"CONTROL + S" emulate the "S" first in order to capture modifiers.


#### Parameters

- Optionaloptions: { force?: boolean } = {}Options to configure behavior.
Optionalforce?: booleanForce the keyup events to be handled.
- Optionalforce?: booleanForce the keyup events to be handled.

`Optional`Options to configure behavior.

- Optionalforce?: booleanForce the keyup events to be handled.


##### Optionalforce?: boolean

`Optional`Force the keyup events to be handled.


#### Returns void


### Protected_onFocusIn

`Protected`- _onFocusIn(event: FocusEvent): voidProtectedRelease any down keys when focusing a form element.
Parametersevent: FocusEventThe focus event.
Returns void
- event: FocusEventThe focus event.

`Protected`Release any down keys when focusing a form element.


#### Parameters

- event: FocusEventThe focus event.

The focus event.


#### Returns void


### Protected_processKeyboardContext

`Protected`- _processKeyboardContext(    context: KeyboardEventContext,    options?: { force?: boolean },): voidProtectedProcesses a keyboard event context, checking it against registered keybinding actions
Parameterscontext: KeyboardEventContextThe keyboard event context
Optionaloptions: { force?: boolean } = {}Additional options to configure behavior.
Optionalforce?: booleanForce the event to be handled.
Returns void
- context: KeyboardEventContextThe keyboard event context
- Optionaloptions: { force?: boolean } = {}Additional options to configure behavior.
Optionalforce?: booleanForce the event to be handled.
- Optionalforce?: booleanForce the event to be handled.

`Protected`Processes a keyboard event context, checking it against registered keybinding actions


#### Parameters

- context: KeyboardEventContextThe keyboard event context
- Optionaloptions: { force?: boolean } = {}Additional options to configure behavior.
Optionalforce?: booleanForce the event to be handled.
- Optionalforce?: booleanForce the event to be handled.

The keyboard event context

`Optional`Additional options to configure behavior.

- Optionalforce?: booleanForce the event to be handled.


##### Optionalforce?: boolean

`Optional`Force the event to be handled.


#### Returns void


### Static_getMatchingActions

`Static`- _getMatchingActions(context: KeyboardEventContext): KeybindingAction[]InternalGiven a keyboard-event context, return every registered keybinding that matches it (may be empty).
Parameterscontext: KeyboardEventContextReturns KeybindingAction[]
- context: KeyboardEventContext

`Internal`Given a keyboard-event context, return every registered keybinding that matches it (may be empty).


#### Parameters

- context: KeyboardEventContext


#### Returns KeybindingAction[]


### StaticemulateKeypress

`Static`- emulateKeypress(    up: boolean,    code: string,    options?: {        altKey?: boolean;        ctrlKey?: boolean;        force?: boolean;        repeat?: boolean;        shiftKey?: boolean;    },): KeyboardEventContextEmulates a key being pressed, triggering the Keyboard event workflow.
Parametersup: booleanIf True, emulates the keyup Event. Else, the keydown event
code: stringThe KeyboardEvent#code which is being pressed
Optionaloptions: {    altKey?: boolean;    ctrlKey?: boolean;    force?: boolean;    repeat?: boolean;    shiftKey?: boolean;} = {}Additional options to configure behavior.
OptionalaltKey?: booleanEmulate the ALT modifier as pressed
OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
Optionalforce?: booleanForce the event to be handled.
Optionalrepeat?: booleanEmulate this as a repeat event
OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed
Returns KeyboardEventContext
- up: booleanIf True, emulates the keyup Event. Else, the keydown event
- code: stringThe KeyboardEvent#code which is being pressed
- Optionaloptions: {    altKey?: boolean;    ctrlKey?: boolean;    force?: boolean;    repeat?: boolean;    shiftKey?: boolean;} = {}Additional options to configure behavior.
OptionalaltKey?: booleanEmulate the ALT modifier as pressed
OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
Optionalforce?: booleanForce the event to be handled.
Optionalrepeat?: booleanEmulate this as a repeat event
OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed
- OptionalaltKey?: booleanEmulate the ALT modifier as pressed
- OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
- Optionalforce?: booleanForce the event to be handled.
- Optionalrepeat?: booleanEmulate this as a repeat event
- OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed

Emulates a key being pressed, triggering the Keyboard event workflow.


#### Parameters

- up: booleanIf True, emulates the keyup Event. Else, the keydown event
- code: stringThe KeyboardEvent#code which is being pressed
- Optionaloptions: {    altKey?: boolean;    ctrlKey?: boolean;    force?: boolean;    repeat?: boolean;    shiftKey?: boolean;} = {}Additional options to configure behavior.
OptionalaltKey?: booleanEmulate the ALT modifier as pressed
OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
Optionalforce?: booleanForce the event to be handled.
Optionalrepeat?: booleanEmulate this as a repeat event
OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed
- OptionalaltKey?: booleanEmulate the ALT modifier as pressed
- OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
- Optionalforce?: booleanForce the event to be handled.
- Optionalrepeat?: booleanEmulate this as a repeat event
- OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed

If True, emulates the keyup Event. Else, the keydown event

`keyup``keydown`The KeyboardEvent#code which is being pressed

`Optional`Additional options to configure behavior.

- OptionalaltKey?: booleanEmulate the ALT modifier as pressed
- OptionalctrlKey?: booleanEmulate the CONTROL modifier as pressed
- Optionalforce?: booleanForce the event to be handled.
- Optionalrepeat?: booleanEmulate this as a repeat event
- OptionalshiftKey?: booleanEmulate the SHIFT modifier as pressed


##### OptionalaltKey?: boolean

`Optional`Emulate the ALT modifier as pressed


##### OptionalctrlKey?: boolean

`Optional`Emulate the CONTROL modifier as pressed


##### Optionalforce?: boolean

`Optional`Force the event to be handled.


##### Optionalrepeat?: boolean

`Optional`Emulate this as a repeat event


##### OptionalshiftKey?: boolean

`Optional`Emulate the SHIFT modifier as pressed


#### Returns KeyboardEventContext


### StaticgetKeyboardEventContext

`Static`- getKeyboardEventContext(    event: KeyboardEvent,    up?: boolean,): KeyboardEventContextGet a standardized keyboard context for a given event.
Every individual keypress is uniquely identified using the KeyboardEvent#code property.
A list of possible key codes is documented here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
Parametersevent: KeyboardEventThe originating keypress event
up: boolean = falseA flag for whether the key is down or up
Returns KeyboardEventContextThe standardized context of the event
- event: KeyboardEventThe originating keypress event
- up: boolean = falseA flag for whether the key is down or up

Get a standardized keyboard context for a given event.
Every individual keypress is uniquely identified using the KeyboardEvent#code property.
A list of possible key codes is documented here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values


#### Parameters

- event: KeyboardEventThe originating keypress event
- up: boolean = falseA flag for whether the key is down or up

The originating keypress event

A flag for whether the key is down or up


#### Returns KeyboardEventContext

The standardized context of the event


### StaticgetKeycodeDisplayString

`Static`- getKeycodeDisplayString(code: string): stringFormat a KeyboardEvent#code into a displayed string.
Parameterscode: stringThe input code
Returns stringThe displayed string for this code
- code: stringThe input code

Format a KeyboardEvent#code into a displayed string.


#### Parameters

- code: stringThe input code

The input code


#### Returns string

The displayed string for this code


### StatictranslateKey

`Static`- translateKey(event: KeyboardEvent): stringCanonical identifier for a key press.
Parametersevent: KeyboardEventReturns string
- event: KeyboardEvent

Canonical identifier for a key press.


#### Parameters

- event: KeyboardEvent


#### Returns string


### Settings

- Protected
- Inherited
- Internal


### On This Page

