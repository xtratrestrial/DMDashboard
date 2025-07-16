# Release 0.5.0 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/5.63

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 0.5.0


## Version 5 Prototype


##### March 01, 2020


## Beta 0.5.0 Update Notes

Hello dear Patreon supporters and Foundry VTT community - I'm really excited to share release notes for Foundry Virtual Tabletop - Beta 0.5.0, which is a major ("unstable") update which represents a key step along the path to full software release. The changes in Beta 0.5.0 are release immediately for Council tier Patreon supporters for preliminary testing and will be rolled out to all Beta tiers as part of the Beta 0.5.1 update by next weekend.

This update adds a great many key new features with a mix of backend and frontend functionality. On the front end, a redesign of the vision and fog of war systems has resulted in more responsive performance when moving a token or rendering vision changes. To partner with these improvements for vision, the lighting layer has been completely rebuilt to feature a scene-wide darkness level that allows for simulating differences between night and day for the same map image. Additionally, the way that light sources apply coloration to the nearby map has been significantly improved - resulting in a much warmer and more natural feeling for dynamic lighting. In addition to those updates, improvements to the Token and Combat systems allow more flexibility in how you track token data across many Scenes.

On the backend - this update adds a number of really critical features which needed to fall into place before release. An administrator control panel for configuring the application, a license signature and verification system, improved support for S3 based file sources, and improvements to the installation process for modules, systems, and core software updates.

Thank you all for your vocal support for my work, your thoughtful feedback, and for the positive word-of-mouth you share within the RPG community. It's extremely valuable and much appreciated. As always, please keep an eye on the development progress board here for visibility into what features are in progress and coming up next!

https://gitlab.com/foundrynet/foundryvtt/boards


### New Features

- The Lighting layer has been completely re-written to add support for overall ambient darkness level configured within the Scene. Light sources dispel that darkness layer by lessening it. See the new darkness level options in the Scene configuration sheet to manipulate this new setting.
- I have achieved some significant performance improvements to vision and fog of war by combining both concepts into a single and simultaneously rendered shadow-mapped layer. As a result, the amount of processing to render a sight or fog update has reduced considerably with satisfying performance benefits. Due to the redesigned nature of the fog layer and the performance improvements it captures, updating to Foundry VTT 0.5.0 will invalidate any existing fog of war exploration in your worlds. This is an unfortunate and unavoidable side effect of the improvements to the fog computation. I appreciate your understanding and patience with making this improvement before the full software release.
- Further improved fog performance by greatly reducing the number of times that the saved Fog of War data is retrieved from the server during the course of play.
- Added an external mask to the vision and lighting container to keep lighting and fog of war constrained within the bounds of the Scene canvas.
- Extend the coverage of lighting and fog of war layers slightly outside the boundaries of the map image to ensure that these layers do not leave trace visual artifacts at the outer edges of the screen which can inadvertently reveal a tiny portion of the image below.
- Improved the precision of rendered ambient light source polygons to better reflect nuances of nearby walls.
- Token configuration and the Token HUD have been improved to allow assigning a single attribute value to either displayed token resource. This allows for attributes which have a numeric value, but are not part of an object with a value/maximum pair to be used. In such cases a bar will not be shown, but the value of the attribute will be shown and edited via the HUD.
- Improve the user experience when viewing a Scene where they initially do not have a Token - but a Token is created for them by the GM. Now the Scene view will automatically pan to the position of their created token and that Token will be automatically controlled.
- Implement an additional safeguard when instantiating Token objects to enforce that their starting coordinates fall within the playable rectangle of the Scene canvas. Tokens whose saved coordinates are out of bounds will be moved to (0,0).
- The strong linkage between Combat Encounters and the "active" Scene has been removed. This now allows you to have Combat encounters running on multiple scenes. The Combat Tracker sidebar will automatically update to display the available encounters on your currently viewed Scene - and you can create, update, and delete Combat encounters simultaneously across multiple Scenes. Additionally, the Toggle Combat button in the Token HUD is now always visible regardless of the viewed Scene.
- Greatly improve the procedure for active user recognition. This produces a much more accurate report of which users are connected to the software at any given time and should update responsively as any new user joins or disconnects. This improvement fixed an issue where, in cases where one user had multiple open connections, closing just one of those connections would incorrectly flag the user as offline.
- Journal Entries and audio Playlists which can be linked to a Scene in the configuration sheet are now sorted alphabetically to make it easier to find the entity you wish to link.
- Improved the behavior of browser resizing operations which should now more quickly and responsively resize the rendered canvas.
- Added a new "description" field to Roll Tables which is displayed before the drawn result whenever the table is rolled. This description can contain dynamic entity links or other rich text references.
- The backend authentication system has been redesigned to no longer be cookie-based and instead use cached sessions which more security authenticate user identity.
- Added a brand new authentication concept of an Administrator which has the ability to modify various setup configuration options for the overall Foundry application. On the new Configuration tab of the setup screen you can set an Administrator Access Key as a securely encrypted passphrase. This passphrase will be required in order to access the setup area of the Foundry VTT application.
- The new Configuration section of the Setup screen allows you to set many options for how Foundry VTT runs, including the user data directory, the port and uPnP settings, SSL and AWS configuration, and more.
- Improvements to the core software update process to better protect against failure modes and to provide superior feedback to the user if the update does not go as expected. You can now "force" and update which allows you to downgrade your software to a previous version or reinstall the same version if needed.
- Previously when using the software updater, if you accidentally entered an invalid update key the form would remain disabled, preventing you from re-attempting the update. You may now re-attempt the process if you enter an invalid update key.
- Improve the system and module installation process to no longer require the URL which serves the manifest to end with a specific JSON string. This allows for users to serve their manifests from a web server or other URL.
- Added support for extra allowed fields in system and module manifest files. These new fields which can be included are: authors, keywords, readme, license, bugs, and compatibleCoreVersion. See the module creation knowledge base page for more details.
- Added new software configuration options in the options.json file which allow for the Foundry application to be informed that the server is running behind a reverse proxy. Assign the proxySSL and proxyPort keys to denote whether the reverse proxy handles SSL certificates or serves the Foundry application on a specific port.
- Implemented an asymmetric signature and verification process for the Foundry VTT software license key which obtains a valid license signature from the Foundry web server and verifies the integrity of that signature locally when the application starts. You are required to have a web connection when you first sign the license - but you do not need internet connectivity to verify the license once it is signed.
- Added a way to launch a world in "safe mode" by disabling all modules. This can help in cases where a module error breaks the initialization logic for the core software. This option can be used by opening the Edit World configuration sheet on the setup menu and checking the "Disable All Modules" option before launching the world.
- Removed the "Close" button from the header of the EULA window - the license agreement must either be accepted and signed, or refused - at which point the application will close.
- The software can now support symbolic links inside the user data location which can point to art assets, module, systems, or worlds which are stored in other locations.
- Improved the S3 file storage backend to be more adaptable for non-Amazon S3 file storage solutions. If you specify a custom endpoint in your awsConfig file - you can use the S3 storage backend with other solutions like Wasabi or others.
- Display a more interpretable error message in the server logs if the SSL certificate or key were not able to be read successfully.
- Improved the module and system installation procedure to first inspect the file structure of the provided ZIP archive to determine the root path to which the manifest file is relative. This allows for different zip distribution structures which may have inner directories, the installer can now determine the correct package root by locating the path to the module.json or system.json file.
- Provide an informative error message back to the client if an application, system, or module update fails due to a permissions issue or other error.
- Added a safeguard to prevent dragging and dropping a file from the local filesystem into the Foundry VTT application which would incorrectly result in that file being loaded (as default browser behavior).
- Changed the way that external hyperlinks function in the Electron application. Instead of spawning child Electron windows to view the opened URL, external links will now be redirected towards the default web browser of your operating system.

`options.json``proxySSL``proxyPort``awsConfig`
### Core Bug Fixes

- Fixed a bug with the targeting tool which previously did not allow the User to target unowned Tokens with a left click as intended.
- Resolved a problem with the display of user cursors which prevented the cursor position indicator from being correctly synced across connected clients.
- Corrected a display bug with the Macros directory which prevented the directory from being re-rendered when a Macro was created or deleted.
- Fixed a bug with file uploads due to an incorrect POST endpoint resulting from misuse of the application route prefix.
- Corrected a problem with initiative formulas which incorrectly caused multiple actors within the same Combat Encounter to receive the same initiative formula even if their character attributes should have produced different formulae per Token.
- Fixed a bug which caused Fog of War exploration progress to be lost when resizing the browser window.
- On Linux operating systems, the XDG directory path will now be automatically created if it does not exist when Foundry VTT is first used.
- Fix an issue with incorrect asynchronous logic to test S3 bucket visibility which resulted in buckets not being detected as usable the first time the FilePicker was opened.
- Fix an issue with the Join Game screen where, if the user attempted to join before the JavaScript for the page was fully loaded, the server JSON response would not be correctly processed.
- Ensure that the package (system or module) update workflow does not remove existing package data until after successfully inspecting the contents of the downloaded update.
- Improve the up-front client-side checks for placeable object deletion permissions to avoid submitting deletion requests to the server which cannot be fulfilled due to lack of user permission.
- Fix an issue which could allow folders to create a circular tree structure, where (for example) Folder A is the parent of B, which is the parent of C, but C is the parent of A. This type of circularity is eliminated when the folder structure in the sidebar is computed.
- Make rendering of Sidebar tabs more fault tolerant such that a failure to render any single tab will not cascade to prevent the successful rendering of other tabs.
- The numpad ENTER key was not working properly as a means of confirming a dialog form choice since the numpad ENTER returns a slightly different key code. This has been fixed!
- Setting a new Token status effect failed to immediately re-render the combat tracker. This has been corrected so that Token status effect changes will now immediately sync with the icons on the tracker.
- Fixed a click detection issue which caused the Token status effects popout to close whenever an effect was removed which made it frustrating to alter multiple status effects at once.
- Fixed the log-out button which directed to the wrong URL in cases where a route prefix was applied as an application configuration setting.
- Prevented a loophole which created duplicate Tokens on the Combat Tracker when players were modifying the combat state of Tokens.
- After updating a module or system, the visual display of the Setup UI will now correctly update to reflect the new state of that module.


### Core Software, APIs, and Module Development

- [BREAKING] Changed the default assumptions in the FormApplication class about what focus events trigger a form submission. Previously the default logic was trying to be "smart" to avoid submitting the form if the user changed focus to a different input. While this was (potentially) clever, it could sometimes result in data loss. The new default form behavior is simply to submit the form every time an input field is changed if the submitOnChange option is set to true.
- [BREKAING] Support for "v1" format system template.json files has been deprecated. This change was announced in 0.4.0 and support for old-style templates has been completely removed. There is no longer any distinction between "v1" and "v2" templates, there are now simply templates (which are v2).
- [BREAKING] Entity and PlaceableObject creation operations previously supported a displaySheet boolean option which was true by default. This option has been removed and replaced with the renderSheet option which is false by default.
- Updated to new major versions of several core dependency packages: aws-sdk, electron, handlebars, howler, node-turn, pixi.js, and tinymce - each of which incorporate various improvements.
- Added support for smooth darkness transitions using the LightingLayer.animateDarkness method.
- Add general styling rules for range inputs followed by a span element with the class range-value.
- Comprehensively refactor the SightLayer including, in particular, a new SightLayer.testVisibility() method which is responsible for centralizing the computation of whether an object falls within a visible polygon.
- Implement runtime options in client-side handlebars rendering which allows for prototype methods to be used and referenced within templates. This feature was disabled in a recent handlebars update due to security vulnerabilities which are not relevant for the FVTT client-side use case.
- Implemented a Canvas.tearDown() method which centralizes all deconstruction operations which are needed prior to switching the viewed scene.
- Changed the behavior of PlaceablesLayer.selectObjects() to return a boolean for whether the controlled set changed during the operation.
- When entity content is exported to a JSON file, an additional flag is added named exportSource which contains the system id, the core software version, and the system version from which the content was exported. This metadata can be used when importing the entity later to determine whether a data migration may be necessary to correct for data model changes which occurred in the intervening time.

`submitOnChange``template.json``displaySheet``renderSheet``LightingLayer.animateDarkness``range-value``SightLayer``SightLayer.testVisibility()``Canvas.tearDown()``PlaceablesLayer.selectObjects()``exportSource`
### Documentation Improvements

- Added API documentation for the SortingHelpers class which was previously undocumented.
- Updated many articles in the migrated Knowledge Base on the new Foundry Virtual Tabletop website: https://foundryvtt.com/kb/

`SortingHelpers`
### Known Issues

- The elevation arrow icon for large tokens is not correctly positioned.
- Setting upnp: false in the options.json file is not correctly applied unless the --noupnp startup flag is passed.
- Some conditions create incorrect vision or lighting polygons for tokens which have a limited vision or light emission angle which is large (greater than 180 degrees).

`upnp: false``--noupnp`