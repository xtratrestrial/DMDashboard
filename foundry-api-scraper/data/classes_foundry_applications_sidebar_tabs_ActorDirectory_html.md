Source: https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.ActorDirectory.html

# ActorDirectory | Foundry Virtual Tabletop - API Documentation - Version 13

Application instance configuration options.

## Hierarchy

- DocumentDirectoryActorDirectory
- ActorDirectory

## Properties

### Properties


### Accessors


### Methods


## options

Application instance configuration options.

---

---

The current position of the application with respect to the window.document.body.

---

---

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of null indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

---

---

An incrementing integer Application ID.

---

---

The current maximum z-index of any displayed Application.

---

---

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.

---

---

### Inherit Doc

---

---

---

The sequence of rendering states that describe the Application life-cycle.

---

---

---

Configuration of application tabs, with an entry per tab group.

---

---

The path to the template used to render a single entry within the directory.

---

---

The path to the template used to render a single folder within the directory.

---

---

## active

Whether this tab is currently active in the sidebar.

---

---

The CSS class list of this Application instance

---

---

The Document collection that this directory represents.

---

---

The implementation of the Document type that this directory represents.

---

---

The named Document type that this directory represents.

---

---

The HTMLElement which renders this Application into the DOM.

---

---

Does this Application have a top-level form element?

---

---

Does this Application instance render within an outer window frame?

---

---

The HTML element ID of this Application instance.
This provides a readonly view into the internal ID used by this application.
This getter should not be overridden by subclasses, which should instead configure the ID in DEFAULT_OPTIONS or
by defining a uniqueId during _initializeApplicationOptions.

---

---

Whether this is the popped-out tab or the in-sidebar one.

---

---

Is this Application instance currently minimized?

---

---

A reference to the popped-out version of this tab, if one exists.

---

---

Is this Application instance currently rendered?

---

---

The current render state of the Application.

---

---

The base name of the sidebar tab.

---

---

---

Convenience references to window header elements.

---

---

## _awaitTransition

Wait for a CSS transition to complete for an element.

---

The element which is transitioning

---

---

A timeout in milliseconds in case the transitionend event does not occur

---

---

---

---

### Inherit Doc

---

### Inherit Doc

---

Perform an event in the application life-cycle.
Await an internal life-cycle method defined by the class.
Optionally dispatch an event for any registered listeners.

---

A handler function to call

---

---

Options which configure event handling

---

---

Await the result of the handler function?

---

---

Debugging text to log for the event

---

---

An event name to dispatch for registered listeners

---

---

Arguments passed to the handler function

---

---

Arguments passed to the requested hook function

---

---

A hook name to dispatch for this and all parent classes

---

---

Add the handler response to hookArgs

---

---

Call hooks for parent classes in the inheritance chain?

---

---

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

### Inherit Doc

---

Render an HTMLElement for the Application.
An Application subclass must implement this method in order for the Application to be renderable.

---

Context data for the render operation

---

---

Options which configure application rendering behavior

---

---

---

### Inherit Doc

---

Activate this tab in the sidebar.

---

---

Add a new event listener for a certain type of event.

---

The type of event being registered for

---

---

The listener function called when the event occurs

---

---

Options which configure the event listener

---

---

Should the event only be responded to once and then removed

---

---

### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

---

Bring this Application window to the front of the rendering stack by increasing its z-index.
Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

---

---

Change the active tab within a tab group in this Application instance.

---

The name of the tab which should become active

---

---

The name of the tab group which defines the set of tabs

---

---

Additional options which affect tab navigation

---

---

An interaction event which caused the tab change, if any

---

---

Force changing the tab even if the new tab is already active

---

---

An explicit navigation element being modified

---

---

Update application position after changing the tab?

---

---

---

Close the Application, removing it from the DOM.

---

Options which modify how the application is closed.

---

---

---

Collapse all open folders in this directory.

---

---

Dispatch an event on this target.

---

The Event to dispatch

---

---

### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

---

Restore the Application to its original dimensions.

---

---

Minimize the Application, collapsing it to a minimal header.

---

---

Remove an event listener for a certain type of event.

---

The type of event being removed

---

---

The listener function being removed

---

---

### See

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

---

### Inherit Doc

---

Pop-out this sidebar tab as a new application.

---

---

Update the Application element position using provided data which is merged with the prior position.

---

New Application positioning data

---

---

---

Programmatically submit an ApplicationV2 instance which implements a single top-level form.

---

Arbitrary options which are supported by and provided to the configured form
submission handler.

---

---

---

Toggle display of the Application controls menu.
Only applicable to window Applications.

---

Set the controls visibility to a specific state.
Otherwise, the visible state is toggled from its current value

---

---

Options to configure the toggling behavior.

---

---

Animate the controls toggling.

---

---

---

Attach event listeners to the Application frame.

---

---

Determine if the current user has permission to create directory entries.

---

---

Determine if the current user has permission to create folders in this directory.

---

---

Determine if drop operations are permitted.

---

The candidate HTML selector for dragging

---

---

---

Modify the provided options passed to a render request.

---

Options which configure application rendering behavior

---

---

---

Create a ContextMenu instance used in this Application.

---

A handler function that provides initial context options

---

---

A CSS selector to which the ContextMenu will be bound

---

---

Additional options which affect ContextMenu construction

---

---

A parent HTMLElement which contains the selector target

---

---

The hook name

---

---

Whether to call hooks for the parent classes in the inheritance
chain.

---

---

---

Register context menu entries and fire hooks.

---

---

Create a new entry in this directory from one that was dropped on it.

---

The dropped entry.

---

---

Modifications to the creation data.

---

---

---

Import a dropped folder and its children into this collection if they do not already exist.

---

The folder being dropped.

---

---

A folder to import into if not the directory root.

---

---

---

Create a set of documents in a dropped folder.

---

The dropped folder.

---

---

The documents to create, or their indices.

---

---

---

Test if the given entry is already present in this directory.

---

The directory entry.

---

---

---

Determine whether a given directory entry belongs to the given folder.

---

The entry.

---

---

The target folder ID.

---

---

---

Get the entry instance from its dropped data.

---

The drag data.

---

---

### Throws

If the correct instance type could not be retrieved.

---

Get drag data for an entry in this directory.

---

The entry's ID.

---

---

---

Get context menu entries for folders in this directory.

---

---

Get drag data for a folder in this directory.

---

The folder ID.

---

---

---

Configure the array of header control menu options

---

---

Get the configuration for a tabs group.

---

The ID of a tabs group

---

---

---

Handle dropping a new entry into this directory.

---

The drop target element.

---

---

The drop data.

---

---

---

Handle dropping a folder onto the directory.

---

The drop target element.

---

---

The drop data.

---

---

---

Handle importing a new folder's into the directory.

---

The dropped folder.

---

---

The ID of the closest folder to the drop target.

---

---

Sort data for the folder.

---

---

---

Iterate over header control buttons, filtering for controls which are visible for the current client.

---

### Yields

---

Insert the application HTML element into the DOM.
Subclasses may override this method to customize how the application is inserted.

---

The element to insert

---

---

---

Identify entries in the collection which match a provided search query.

---

The search query.

---

---

The set of matched entry IDs.

---

---

The set of matched folder IDs.

---

---

The set of folder IDs that should be auto-expanded.

---

---

Additional options for subclass-specific behavior.

---

---

---

Identify folders in the collection which match a provided search query.

---

The search query.

---

---

The set of matched folder IDs.

---

---

The set of folder IDs that should be auto-expanded.

---

---

Additional options for subclass-specific behavior.

---

---

---

Actions performed when this tab is activated in the sidebar.

---

---

Handle changes to an input element within the form.

---

The form configuration for which this handler is bound

---

---

An input change event within the form

---

---

---

A generic event handler for action clicks which can be extended by subclasses.
Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
no defined handler.

---

The originating click event

---

---

The capturing HTML element which defined a [data-action]

---

---

---

Handle activating a directory entry.

---

The triggering click event.

---

---

The action target element.

---

---

---

Internal use only.

---

---

---

Handle click events on a tab within the Application.

---

---

---

Handle creating a new entry in this directory.

---

The triggering click event.

---

---

The action target element.

---

---

---

Handle creating a new folder in this directory.

---

The triggering click event.

---

---

The action target element.

---

---

---

Actions performed when this tab is deactivated in the sidebar.

---

---

Highlight folders as drop targets when a drag event enters or exits their area.

---

The in-progress drag event.

---

---

---

Handle drag events over the directory.

---

---

---

Handle matching a given directory entry with the search filter.

---

The input search string.

---

---

The matched directory entry IDs.

---

---

The candidate entry element.

---

---

Additional options for subclass-specific behavior.

---

---

---

Actions performed after the Application is re-positioned.

---

The requested application position

---

---

---

Handle directory searching and filtering.

---

The keyboard input event.

---

---

The input search string.

---

---

The regular expression query that should be matched against.

---

---

The container to filter entries from.

---

---

---

Handle submission for an Application which uses the form element.

---

The form configuration for which this handler is bound

---

---

The form submission event

---

---

---

Handle toggling a folder's expanded state.

---

The triggering click event.

---

---

The action target element.

---

---

---

Internal use only.

---

---

---

Organize a dropped folder and its children into a list of folders and documents to create.

---

The dropped folder.

---

---

A folder to import into if not the directory root.

---

---

---

Perform post-render finalization actions.

---

Prepared context data.

---

---

Provided render options.

---

---

---

Actions performed before closing the Application.
Pre-close steps are awaited by the close process.

---

Provided render options

---

---

---

Actions performed before a first render of the Application.

---

Prepared context data

---

---

Provided render options

---

---

---

Prepare render context for the directory part.

---

---

---

---

Prepares the data for a duplicated Document.

---

The Document that is duplicated

---

---

---

Prepare render context for the footer part.

---

---

---

---

Prepare render context for the header part.

---

---

---

---

Prepare application tab data for a single tab group.

---

The ID of the tab group to prepare

---

---

---

Actions performed before the Application is re-positioned.
Pre-position steps are not awaited because setPosition is synchronous.

---

The requested application position

---

---

---

Actions performed before any render of the Application.
Pre-render steps are awaited by the render process.

---

Prepared context data

---

---

Provided render options

---

---

---

Remove the application HTML element from the DOM.
Subclasses may override this method to customize how the application element is removed.

---

The element to be removed

---

---

---

Render a header control button.

---

---

---

Replace the HTML of the application with the result provided by the rendering backend.
An Application subclass should implement this method in order for the Application to be renderable.

---

The result returned by the application rendering backend

---

---

The content element into which the rendered result must be inserted

---

---

Options which configure application rendering behavior

---

---

---

Remove elements from the DOM and trigger garbage collection as part of application closure.

---

---

---

When the Application is rendered, optionally update aspects of the window frame.

---

Options provided at render-time

---

---

---

Translate a requested application position updated into a resolved allowed position for the Application.
Subclasses may override this method to implement more advanced positioning behavior.

---

Requested Application positioning data

---

---

---

Get context menu entries for folders in a directory.

---

---

Helper method to handle dropping a folder onto the directory.

---

The drop target element.

---

---

The drop data.

---

---

---

The sibling folders.

---

---

The label for entries in the directory.

---

---

The maximum folder depth in this directory.

---

---

The type of entries in the directory.

---

---

---

Iterate over the inheritance chain of this Application.
The chain includes this Application itself and all parents until the base application is encountered.

---

### See

ApplicationV2.BASE_APPLICATION

---

Parse a CSS style rule into a number of pixels which apply to that dimension.

---

The CSS style rule

---

---

The relevant dimension of the parent element

---

---

---

Wait for any images in the given element to load.

---

The element.

---

---

---

