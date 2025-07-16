# Introduction to Development | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/intro-development/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Introduction to Development


## 


## Overview

This article provides a guide for users interested in getting started developing their own packages for use in Foundry Virtual Tabletop. We believe in fostering and encouraging new developers and that Foundry VTT can be a great way to teach yourself the basics of JavaScript and other facets of modern web development. While we cannot provide a detailed introductory course to modern JavaScript, Foundry Virtual Tabletop is an excellent sandbox and framework within which to apply the lessons learned during such a curriculum.

If you are reading this article and thinking I can't do this, I'm not a programmer., this article is intended for you. Many users feel developing their own modules, or systems have a high barrier to entry because of a common perception that programming is difficult. However, programming for Foundry VTT, while based on JavaScript, has an unusually low barrier to entry for those willing to learn some basic development practices. This article contains links to some free introductory level courses which you can use to get started, and we feel it is important to emphasize that even an introductory level of JavaScript knowledge is sufficient to make modules and game systems for Foundry Virtual Tabletop.

If you are an experienced JS developer just looking a quickstart guide to getting your project going, please head directly to Introduction to Module Development or Introduction to System Development as well as the API Documentation.

Thanks to community member Calego and his helpful Module Making for Beginners article for helping to inspire the approach our development articles use. With his permission, we have reused some of his tutorial to provide concise descriptions of common problems.


## Before you Begin

Foundry Virtual Tabletop is a web application and package development uses web technologies. Specifically, packages rely upon four primary technologies which each serve an important role: HTML, CSS, JavaScript, and JSON. If you are new to web development - Foundry Virtual Tabletop can provide an excellent opportunity to learn these skills while creating something fun and useful for your role-playing game table.

Used to define the structure and content of web pages and interface elements.

Used to define the layout and appearance of HTML elements.

Used to define behaviors and functions, handle underlying data, and provide the underlying framework for interacting with UI elements.

A universal data storage format which is used to store and transfer data used by web applications. Visit JavaScript Object Notation (JSON) to begin learning more about JSON.

Building a package for Foundry Virtual Tabletop will require use of some or all of these techniques. You do not need to be an expert, but it is important to know that this will be a learning process. While you undertake this journey be sure to remain patient and focus on making progress one step at a time. Building your first package will almost certainly take longer than you think, but as you learn your pace of progress should speed up considerably.


### Package Types

There are three different types of packages that can be created in Foundry Virtual Tabletop. Before you begin with any project it will be important to know the differences between each.


#### Game Worlds

Worlds are primarily used for distributing adventure content intended for use with a particular Game System. Game Worlds are an enclosed package which typically contain all the Documents needed for a Gamemaster to run a complete adventure or campaign from start to finish for their players. Game Worlds can also contain JavaScript and CSS files which will be loaded whenever that world is loaded, allowing you to provide specific functions and styling that only apply to this particular world.


#### Game Systems

Development of a Game System is generally more in-depth than either of the other packages due to the amount of data most role-playing games require. Game Systems typically include JavaScript files for handling the automation of rules for the game, as well as HTML and CSS to provide the appearance of facets of the game such as character sheets or items.


#### Add-on Modules

Modules are the most common type of package and where most community developers begin. Add-on Modules use JavaScript files to extend and modify the behavior of Foundry Virtual Tabletop and its Game Systems, and HTML and CSS to provide a UI for users to interact with.


### Resources

The following free resources are extremely useful for getting started with development knowledge and should provide you with sufficient skills to begin your project, even if you have no experience with web development. You do not need to complete all of these in full before beginning your project. You should begin working on your project while taking these courses.

- (freeCodeCamp) Learn JavaScript - Introduction to Modern JavaScript
- (freeCodeCamp) Learn JavaScript – Full Course for Beginners
- (MDN Web Docs) JavaScript - Dynamic client-side scripting

- (W3 schools) HTML Introduction
- (MDN Web Docs) Structuring the web with HTML
- (Shay Howe) HTML & CSS

- (W3 schools) CSS Introduction
- (MDN Web Docs) Learn to style HTML using CSS
- (Shay Howe) HTML & CSS


### Development Environment

To work more effectively, you will want to use text editing software which is ideal for writing and managing software code projects. There are an abundance of free options with built-in tools for assisting you as you begin your project, and the only right answer for choosing which suite works best is to identify which one works best for you. MDN Web Docs provides a comprehensive overview of available tools and technologies to get you started.

If you'd prefer to get started quickly, any of the following tools will meet your initial needs:

- Visual Studio Code (free)
- Atom (free)
- Sublime (free)
- JetBrains WebStorm


### Git and Version Control

We strongly recommend using Git to manage code changes for your module or system. Git is a software designed to assist developers with version control. As an oversimplification, Git is used to track any changes made to files within your project and maintains all of those files within a repository

Foundry Virtual Tabletop allows users to install packages from Git repositories remotely, which is why you will a vast majority of installation links for Foundry VTT packages are hosted at places like GitLab or GitHub.

Git was designed for handling a lot of complex facets of development, and development for Foundry VTT typically uses only a small percentage of the features Git offers. W3 Schools offers a detailed Git tutorial. For convenience and simplicity, we recommend use of a GUI utility for managing your git repositories such as GitKraken.


### Motivating Questions

Now that you have a brief overview of the landscape, it's important to ask some questions and make some decisions about what your project will look like. These decisions are not set in stone — you can change them later if absolutely necessary — but starting out on a solid foundation will save hours of rework in the long run.

- What is the purpose of your package? What goal do you wish to accomplish?
- What type of package do you intend to build?
- What knowledge will you need to get started?
        
            If you just want to create a distributable Game World, you probably do not need programming knowledge at all to get started. You may only require the Content Packaging Guide and the Content Creation Style Guide to accomplish your goals.
            If you intend to create a new Game System from scratch you will need a mixture of JavaScript, HTML, and CSS capabilities in order to define the data structures for your system and render applications to display them.
            Development of Add-on Modules generally requires knowledge of JavaScript. If your Module will also provide a user interface for interacting with it, you will require some knowledge of HTML and CSS.
- If you just want to create a distributable Game World, you probably do not need programming knowledge at all to get started. You may only require the Content Packaging Guide and the Content Creation Style Guide to accomplish your goals.
- If you intend to create a new Game System from scratch you will need a mixture of JavaScript, HTML, and CSS capabilities in order to define the data structures for your system and render applications to display them.
- Development of Add-on Modules generally requires knowledge of JavaScript. If your Module will also provide a user interface for interacting with it, you will require some knowledge of HTML and CSS.
- Is my package going to be just for my own use, or is it going to be available to the public? Does the package I intend to create use intellectual property belonging to someone else? See our Licensed Content article for why this is important.

What is the purpose of your package? What goal do you wish to accomplish?

What type of package do you intend to build?

What knowledge will you need to get started?

- If you just want to create a distributable Game World, you probably do not need programming knowledge at all to get started. You may only require the Content Packaging Guide and the Content Creation Style Guide to accomplish your goals.
- If you intend to create a new Game System from scratch you will need a mixture of JavaScript, HTML, and CSS capabilities in order to define the data structures for your system and render applications to display them.
- Development of Add-on Modules generally requires knowledge of JavaScript. If your Module will also provide a user interface for interacting with it, you will require some knowledge of HTML and CSS.

If you intend to create a new Game System from scratch you will need a mixture of JavaScript, HTML, and CSS capabilities in order to define the data structures for your system and render applications to display them.

Development of Add-on Modules generally requires knowledge of JavaScript. If your Module will also provide a user interface for interacting with it, you will require some knowledge of HTML and CSS.


## The Foundry Virtual Tabletop JavaScript API

JavaScript code forms the backbone and engine for most packages in Foundry Virtual Tabletop. To enable JavaScript to be loaded and to interact with our environment, we provide an API (Application Programming Interface) that allows you to manage and modify data and functionality inside the Foundry Virtual Tabletop.

Our codebase is very large, therefore our API Documentation can be somewhat intimidating at first. There are a few concepts that we recommend beginners familiarize themselves with.


### Documents

The backbone and core data structures in Foundry Virtual Tabletop are provided by Documents. Each conceptual piece of data in Foundry VTT is a Document, examples include a User who logs in to the game world, an Actor who is their player character, the Scene that they are exploring within the world and the audio Playlist which is playing in the background. Learning about our Document types and how to interact with them is a valuable first step towards developing in Foundry VTT.

`User``Actor``Scene``Playlist`
### Flags

All Documents within the Foundry Virtual Tabletop contain a strict data schema which means those Documents can only contain data for allowed fields. A primary method for a package to store additional data as part of a Document are through what are called flags. Every Document in Foundry VTT supports a key-value store of flags which are appended to the Document. This allows a place for worlds, modules, or systems to store additional data fields which are not part of the Document's typical schema.

`flags`Flag data is stored as a key-value object pair, and each flag key is prefixed with a scope which identifies the package which manages it. Flags set by packages use their Package id as the flag scope while the core software uses the core scope. The following API methods are available for interacting with flags.

`scope``id``core`- Document#setFlag
- Document#getFlag
- Document#unsetFlag


### Hooks

Hooks are an event framework Foundry VTT uses to provide package developers with the ability to register callback functions that occur at particular times as events within the program occur. For example, the preCreateActor Hook allows you to make changes to the data model for an Actor when its creation process is started but before the Actor is created.

`preCreateActor`Learn more about the set of available  Hooks in our API documentation.


#### Debugging Hooks

In order to debug and better understand which hook events are triggered, you can set the CONFIG.debug.hooks boolean to true. For example, by adding the following code to your package JavaScript file.

`CONFIG.debug.hooks````javascript
Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
});
```

`Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
});`
### Localization

Foundry Virtual Tabletop offers a Localization system in order to provide convenience for translators to work with projects internal to the application. It's important to start thinking about localization early in the project, as it is much easier to do it as you develop rather than returning after you have completed the project to add the localization. When developing your project, consider using Localization text everywhere you would normally write text for your users to read. This will mean that other developers wishing to translate your project can do so very easily. For more information, please see Languages and Localization.

- The  Localization Helper Class
- The  Localize Handlebars Helper


### JavaScript Namespacing

Namespacing is a high-level concept for programming which applies importantly in JavaScript. This concept is particularly important in the Foundry Virtual Tabletop environment where everyone's code needs to coexist in the same ecosystem. Namespacing refers to the act of applying labels or naming conventions to variables in your code in order to reduce the likelihood that someone else's code collides with your own..

While it is more important to correctly Namespace your code for script-based JS than ES6 Module JS, your JavaScript Functions should ideally be named in way that makes it unique. Foundry VTT takes steps to try to mitigate Namespace issues with its packages, but conflicts can happen. Two packages using "script" declarations instead of ES6 Modules may both define functions in the global scope which can collide and overwrite each other.


## HTML, CSS, and User Interface

Where JavaScript provides the internal engine for packages in Foundry Virtual Tabletop, HTML and CSS are responsible for providing the look and feel of a module in a client-facing way that users can engage with. We recommend surveying the User Interface section in our API documentation for some high-level concepts.


### The Handlebars Templating Engine

Handlebars is a simple templating language used by Foundry Virtual Tabletop to structure HTML based on JavaScript object data. You can find out more about Handlebars here.


#### The Log Helper

Handlebars provides a number of special tags that you can use in your templates which add special functionality on top of standard HTML. One of the most useful helpers when you are getting started is {{log}} which prints the contents of data in the template rendering context into the dev tools console log. By expanding the data object logged to the console, you can explore the data object and locate what needs to be placed as a reference from handlebars. Example usage is as follows

`{{log}}````javascript
<div>
    {{log this}}
</div>
```

`<div>
    {{log this}}
</div>`
#### Custom Provided Helpers

In addition to the many helper methods which come with basic Handlebars, we provide a number of additional special helpers which assist with commonly occurring tasks. These additional helpers are discoverable under the  Handlebars Helpers API Documentation.


### Namespacing for CSS

The importance of proper namespacing for CSS definitions is far greater. CSS considers two important factors when applying styles to HTML, the most recently loaded definition and the most specific definition. Using a CSS class definition which isn't specific enough will likely result in your CSS rules applying to an entire part of the program, or cause overlap with other packages. To prevent any unexpected confusion of CSS rules, please adhere to the following best practices:


#### Use Specific Class and ID Names in HTML

Instead of:

```javascript
<div id="selection" class="app">
    <h2 class="header">Make a selection</h2>
</div>
```

`<div id="selection" class="app">
    <h2 class="header">Make a selection</h2>
</div>`use:

```javascript
<div id="my-package-selection" class="my-package my-package-app">
    <h2 class="header">Make a selection</h2>
</div>
```

`<div id="my-package-selection" class="my-package my-package-app">
    <h2 class="header">Make a selection</h2>
</div>`
#### Use Specific Selectors in CSS

Instead of:

```javascript
.app {
    background-color: gray;
}
.header {
    color: red;
}
```

`.app {
    background-color: gray;
}
.header {
    color: red;
}`use:

```javascript
.my-package .my-package-app {
    background-color: gray;
}
.my-package .my-package-header {
    color: red;
}
```

`.my-package .my-package-app {
    background-color: gray;
}
.my-package .my-package-header {
    color: red;
}`By using clear and specific Namespace for your CSS, you can prevent conflict with other packages very easily and keep the package ecosystem healthy for all users.


## Appendix: About Package Versioning

A slightly more complex but important facet of development, Foundry VTT uses its own package management system so that the version of your package is the one the user wishes to be using. By versioning your package properly you can leverage some tools from the Foundry VTT API to make code changes to support your package across different versions of the software.

The helper method isNewerVersion(availableVersion, currentVersion) compares two version fields within the core software or within packages. At a very simplified level, this method compares the two versions and determines which is newer based on the following rules:

`isNewerVersion(availableVersion, currentVersion)`- If availableVersion has more . delimited parts than the currentVersion, it is determined to be newer.
- The version which is numerically higher is newer. (2 is greater than 1)
- An alphabetical character is newer based on its progression in the alphabet. (b is newer than a)

`.`
### Versioning Recommendations

There are many ways to assign version numbers to software and content packages as they are being developed. While Foundry VTT supports a number of different options, there are no strong recommendations to be made about any one above another. It should be noted that some common versioning schema that exist contain advanced details which Foundry VTT does not parse as part of its versioning checks.

A newer version has a higher alphanumeric value than a previous one. This is internally how Foundry works, using a form of [Generation].[Build], such as 9.230. This is a simple version scheme that plays well to the strength of Continuous Integration frameworks. Recommended for user-facing packages, such as content and modules.

`[Generation].[Build]````javascript
Example
1 -> 2 -> 3
1.1 -> 1.2 -> 2.0
alpha1 -> alpha2 -> beta1 -> stable1
```

`Example
1 -> 2 -> 3
1.1 -> 1.2 -> 2.0
alpha1 -> alpha2 -> beta1 -> stable1`Note: While basic usage is supported, advanced usage such as + or - notation for pre-releases is not.

`+``-`A popular 3-part versioning schema designed for use in software libraries. Semver follows the form of [Major].[Minor].[Patch]. Recommended for Library packages, Game Systems, or CLI tools.

`[Major].[Minor].[Patch].````javascript
Example
1.0.0 -> 1.0.1 -> 1.1.0 -> 2.0.0
```

`Example
1.0.0 -> 1.0.1 -> 1.1.0 -> 2.0.0`Note: While basic usage is supported, advanced usage such as + or - notation for pre-releases is not.

`+``-`A date-based scheme where the current date corresponds to the version of the package. This version number can be generated via Continuous Integration frameworks. Recommended for user-facing packages, such as content and modules.

```javascript
Examples
2022-01-01 -> 2022-02-20 -> 2022-03-12
220101 -> 20220220 -> 20220312
```

`Examples
2022-01-01 -> 2022-02-20 -> 2022-03-12
220101 -> 20220220 -> 20220312`