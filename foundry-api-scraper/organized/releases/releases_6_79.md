# Release 0.6.6 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/6.79

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.6.6


## Version 6 Stable


##### August 23, 2020


## Foundry Virtual Tabletop - Version 0.6.6 Update Notes


#### Overview of Changes

Welcome to update 0.6.6 for Foundry Virtual Tabletop. I had not been expecting to release another update in the 0.6.x series, as I have been focusing my attention on 0.7.x recently and trying to get that to beta and later to release - but some priorities have shifted in a way that made it important to create this update.

While it is intended for this update to be a stable release, it is initially released on the beta channel in order to ensure there are no unexpected issues, but will be upgraded to the release channel in a few days if no critical problems have surfaced.

This update focused on package management tools (systems, worlds, modules), the package installation process, and the process for enabling or disabling modules within your active world. I am working to support some new distribution models for Foundry VTT packages, and that new model required some changes to the way that modules are installed to work for both cases.

I will not get into the full details of that new system in these notes, but it is designed to enable mechanisms for publishers and creators to sell and authorize access to Foundry VTT content using a content-key based system. The addition of this option does not change the way that current packages are installed or function.

While I was working on this system, the opportunity presented itself to make some related changes to the user experience for installing modules - so this update redesigns the package installation and module management windows to make them more interactive and usable. Additionally, this update adds support for a basic system of dependency declaration that packages can use to prompt users to install dependency packages which are required for a module to function properly.


#### How to Update

If you wish to apply this update, return Foundry Virtual Tabletop to the Configuration and Setup page and access the Update Software tab and choose the "Beta" channel in the dropdown menu. Please note, it is recommended for most users to stay on the Release channel and wait for updates there rather than using Alpha or Beta updates.

After clicking Check for Update confirm that you are presented with the 0.6.6 update notes and click the Download button to begin the update process. Allow some time for this process to conclude, when it is finished your server will automatically restart (if Electron) or shut down (if Node.js).


### New Features

- Redesign the Package Installation screen to feature a number of useful improvements. Categories are displayed on the left to filter for particular types of modules. Additional filters at the top allow you to toggle between "all packages", "installed only", and "uninstalled only".
- Each displayed package in the Package Installation dialog now shows the author name, which is also searchable using the text input field at the top of the UI.
- For packages which require (or only support) specific systems, these systems are displayed as a set of small tags next to the package name.
- After installing a package which declares dependencies - prompt the user whether they would like to automatically install those dependencies also.
- Improved the UX of the Package Installation screen so that the vertical scroll position, filtering choices, and search string remain preserved if the application window is re-rendered.
- The process of creating a sanitized short description for each package has been moved to the web server, instead of the Foundry client. This reduces the size of the data packet transferred to clients and avoids issues where the process of cleaning the HTML triggered HTTP requests for any embedded images that were contained within.
- The set of packages and tags which are visible in the Package Installation UI will remain cached for the duration of the client session on the Setup page, so that opening and closing the dialog will not trigger additional web requests. Refreshing the page (F5) or navigating away and returning later will result in a new set of packages being fetched.
- Redesign the Module Management interface to improve the usability of enabling or disabling modules from within an active world. Filters at the top of the UI allow you to toggle between "All Modules", "Active Modules", and "Inactive Modules". A collapse/expand button allows you to shrink or grow module descriptions, the new default layout has been widened slightly and starts with module descriptions collapsed. A new filter text search input at the top of the panel allows you to quickly identify modules by id, title, or by author name.
- Add a button to the footer of the module management application to conveniently toggle-off all modules in cases where you need to quickly disable all modules for debugging.
- When activating or deactivating a module which has listed dependencies, you will now be prompted whether you want to activate (or deactivate) those dependency packages as well.
- Redesigned the layout of the Settings sidebar tab to use the same heading style as the Compendium tab and to add a visible active module count to the sidebar.
- Pull forward from 0.7.1 the change which adds a cache-bypassing retry mechanism for remote hosted images which require CORS in order to be displayed on the game canvas, but had a non-CORS set of headers cached by an initial GET request.
- Pull forward from 0.7.1 the change which improves the process of database compaction to use a debounced mechanism to avoid attempting compaction during periods of burst writing while still forcing compaction after a threshold number of writes have occurred.
- Pull forward from 0.7.1 the change which elongates the socket timeout duration that triggers the server to interpret a client socket as having lost connectivity. This will help with slow connections loading large amounts of world data.


### Framework and API Changes

- Support a basic dependency definition in package manifest files and prompt a user to install any dependency packages which are required by an installed package target. See the following issue for notes on usage of the dependencies key: https://gitlab.com/foundrynet/foundryvtt/-/issues/3334.
- Relax the requirement that a package installation manifest must be named {packageType}.json as long as the target ZIP contains the appropriately named JSON file.
- Implement the optional (for now) but strongly encouraged "type": packageType field as an element of package manifest files which allow those files to have alternative naming conventions while still identifying their content type. If you use a manifest download URL which does not end in {packageType}.json, including the type key in your manifest data is strongly encouraged, otherwise the user will have to download the package .zip before being able to validate whether it is the appropriate type.
- Add internal support for "protected package" installation and update workflows.

`dependencies``type`
### Localization Changes

- There are a number of new or changed localization keys which related to package installation or module management, since those interface elements were updated.


### Documentation Improvements

- API documentation updated to be consistent with the 0.6.6 software.


### Known Issues

There are no new known issues in this release - however there are many issues in the 0.6.x series of the software which are not addressed by this update and are instead handled in the 0.7.x series of updates.

- Known Issues to be addressed in 0.7.0
- Known Issues to be addressed in 0.7.x


### Reporting Issues and Providing Feedback

If you encounter issues or have feedback to share, please use one of the following three reporting channels, ordered by preference:

- Discord Server: My preferred method to collect feedback is through our Discord server where I have created a dedicated channel for update 0.6.6 feedback. If you are able to join our Discord community it's the best way to engage with me directly for feedback.
- GitLab Tracker: You are welcome to create issue reports directly in the GitLab tracker here, but please take caution to ensure your problem has not already been reported by checking other open (and closed) issues in the upcoming milestone before creating a new report.
- Bug Report Form: There is an official bug report form on the official website. Please use the Contact Us form and select "Bug Report" as your category.

Please stay up to date on progress by following the project roadmap on Gitlab.

