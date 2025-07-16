# Release 12.330 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/12.330

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 12.330


## Version 12 Stable


##### July 24, 2024


## Foundry Virtual Tabletop - Version 12 - Stable 6 Release Notes

We are happy to announce the sixth release of Foundry Virtual Tabletop Version 12. This minor patch targets a small handful of higher priority bug fixes. Thanks again for helping us stay on top of bugs!

WARNING: While this is categorized as a stable release there is always a possibility of unexpected bugs or compatibility issues. As with any time you update the core software, be sure to perform a complete backup of your user data to minimize any risk of data loss.


## Bug Fixes


### Documents and Data

- The sanitized field cache is now cleared when disconnecting from a World. This resolves an issue where Cannot read properties of undefined (reading '_types') errors could sometimes occur when creating new Documents after deactivating a Module. (11483)

`Cannot read properties of undefined (reading '_types')`
### The Game Canvas

- Fixed an issue that caused the default ring color to incorrectly revert to a different color. (11487)


### Other Changes

- When converting an integer NumberField to a form field, the configured step is used if available. (11484)
- Resolved an issue which prevented enriching a given piece of content with more than 5 embedded Documents. (11479)

`NumberField``step`
## Documentation Improvements


### Other Changes

- Fixed an issue that broke links related to Dice Rolling in the API index. (11485)

