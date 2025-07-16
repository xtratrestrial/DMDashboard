# TokenConfig | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.applications.sheets.TokenConfig.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- applications
- sheets
- TokenConfig


# Class TokenConfig

The Application responsible for configuring a single token document within a parent Scene


#### Mixes

TokenApplication


#### Hierarchy

- anyTokenConfig
- TokenConfig

- TokenConfig


##### Index


### Properties


### Accessors


### Methods


## Properties


### isPrototype


## Accessors


### _fields

- get _fields(): DataSchemaReturns DataSchema


#### Returns DataSchema


### actor

- get actor(): anyReturns any


#### Returns any


### isVisible

- get isVisible(): anyReturns anyInherit Doc


#### Returns any


#### Inherit Doc


### token

- get token(): anyReturns any


#### Returns any


## Methods


### _initializeTokenPreview

- _initializeTokenPreview(): Promise<void>Returns Promise<void>


#### Returns Promise<void>


### _onChangeForm

- _onChangeForm(formConfig: any, event: any): voidParametersformConfig: anyevent: anyReturns voidInherit Doc
- formConfig: any
- event: any


#### Parameters

- formConfig: any
- event: any


#### Returns void


#### Inherit Doc


### _onClose

- _onClose(options: any): voidParametersoptions: anyReturns voidInherit Doc
- options: any


#### Parameters

- options: any


#### Returns void


#### Inherit Doc


### _onRender

- _onRender(context: any, options: any): anyParameterscontext: anyoptions: anyReturns anyInherit Doc
- context: any
- options: any


#### Parameters

- context: any
- options: any


#### Returns any


#### Inherit Doc


### _prepareAppearanceTab

- _prepareAppearanceTab(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc


### _prepareContext

- _prepareContext(options: any): Promise<any>Parametersoptions: anyReturns Promise<any>Inherit Doc
- options: any


#### Parameters

- options: any


#### Returns Promise<any>


#### Inherit Doc


### _previewChanges

- _previewChanges(changes: any): voidParameterschanges: anyReturns voidInherit Doc
- changes: any


#### Parameters

- changes: any


#### Returns void


#### Inherit Doc


### _processFormData

- _processFormData(event: any, form: any, formData: any): anyParametersevent: anyform: anyformData: anyReturns anyInherit Doc
- event: any
- form: any
- formData: any


#### Parameters

- event: any
- form: any
- formData: any


#### Returns any


#### Inherit Doc


### _processSubmitData

- _processSubmitData(    event: any,    form: any,    submitData: any,    options: any,): Promise<void>Parametersevent: anyform: anysubmitData: anyoptions: anyReturns Promise<void>Inherit Doc
- event: any
- form: any
- submitData: any
- options: any


#### Parameters

- event: any
- form: any
- submitData: any
- options: any


#### Returns Promise<void>


#### Inherit Doc


### _toggleDisabled

- _toggleDisabled(disabled: any): voidParametersdisabled: anyReturns voidInherit Doc
- disabled: any


#### Parameters

- disabled: any


#### Returns void


#### Inherit Doc


### Protected_onChangeBar

`Protected`- _onChangeBar(event: Event): voidProtectedHandle changing the attribute bar in the drop-down selector to update the default current and max value
Parametersevent: EventThe select input change event
Returns void
- event: EventThe select input change event

`Protected`Handle changing the attribute bar in the drop-down selector to update the default current and max value


#### Parameters

- event: EventThe select input change event

The select input change event


#### Returns void


### Protected#resetPreview

`Protected`- "#resetPreview"(): voidProtectedReset the temporary preview of the Token when the form is submitted or closed.
Returns void

`Protected`Reset the temporary preview of the Token when the form is submitted or closed.


#### Returns void


### Settings

- Protected
- Inherited
- Internal


### On This Page

