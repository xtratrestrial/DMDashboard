# Versioning and Releases | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/versioning/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Versioning and Releases


## 


## Overview

Users who rely heavily upon add-on modules should not attempt to run a live game using a Testing Release.

This article is designed to explain the way Foundry Virtual Tabletop handles releases of new software Versions, and the naming conventions used. It will introduce you to the concepts of:

`compatibleCoreVersion``minimumCoreVersion`This article only applies after the release of Version 9.


## The Phased Cycle Approach

Foundry Virtual Tabletop uses a phased approach to development containing 6 formal categories, as well as an additional (and more informal) 'closing' phase which is rarely more than a formal name given to the last Release in a Version. Some of these phases are internal to the Foundry VTT development team. It is noteworthy that all phases include some amount of planning and testing; and that the labels are more about the focus of that phase than to indicate it's the only thing happening during that phase.

As each phase of development passes, changes become less extreme until the changes being made are corrections to software bugs only, with the earliest Releases in any Version containing the most drastic changes. Foundry Virtual Tabletop intends to release up to four Versions annually, introducing new features to the software with each Prototype Version.


### Planning

Before development can start on a new Version, the goals of development need to be planned. This phase is primarily internal to the development team, and where new GitLab Epics, Milestones, and Issues are created and grouped along with existing relevant Issues. In conjunction with our per-Version Patreon Poll which provides us insight into what priority the community places on a list of new features for development, we draft our plans internally, and high-level goals are committed to. Each Version is centralized around a few major themes which give us a roadmap to follow for new features.


### Prototype

During this phase development focuses wholly on implementing new features or making major changes to existing features. The API is open for drastic changes, and community developer feedback and requests for API changes to support custom use cases should be made here. The first few Releases in this phase target developers who are excited to help shape what the Public API looks like and participate in exploratory development.

The first Prototype Version is intended to prioritize any major systemic architectural changes, so that subsequent prototype builds focus feature changes rather than full API overhauls. This makes it easier for community developers to start adapting their packages without having to worry that the next update will break everything they've just fixed. However, it is still possible for breaking changes to happen as the API evolves during this phase.

Often, Prototype features will have a minimal or non-existent UX/UI implementation, focusing instead on providing the API for these features.


### API Development

This phase focuses on enhancing the UX and API of features added during the Prototype phase. The API is still considered open, but changes should be less frequent and driven primarily by community developer feedback. For most developers, this should be considered a middle-ground phase where they should not have to experience massive and frequent rewrites, while still getting to be involved in providing feedback.

This is the phase where the Foundry VTT development team expects the most feedback from community developers, and developer API feature requests which add support for specific use cases should be made here so that they can be incorporated before the API is closed for this version.

During the Development phase, the UX/UI for new features will approach or reach full functionality, but may still have some rough edges.


### Feature Testing

The Feature Testing phase places emphasis on focused testing of the software while the UX/UI on new features is polished for public use. This is not to suggest that no testing occurs during the Prototype or Development phases, merely that the scope of testing and the number of users performing testing operations is much larger during this period. During this phase, the API is closed to breaking changes, only allowing them to occur if it is deemed necessary to correct critical bugs or high-priority issues. The addition of new API components (or modifications of existing API components) may still occur in this phase to complete or expand a newly introduced feature, provided that they are not breaking. An example of such a change might be an addition of a new type of Journal Entry Page, a new shader being added to an existing list of shaders, or introducing a new application to offer a user-facing interface for existing API features.

For developers who only have the bandwidth to update their packages once per Version, content creators, or premium partners, this phase is the right time to update your Packages before the general public starts using the Version. However, API feature requests received in this phase will likely not be accomodated until the next major version in order to prevent changes which might break API usage for other community developers.

For interested Server Admins and Users, this is the phase where you should spin up a test world and try out the new features so you can provide Foundry VTT with UX/UI and general testing feedback.

It is not recommended that users run their live games on a testing release unless they (and their players) are comfortable experiencing some bugs that may negatively impact play.


### Stable

During this phase the goal is to implement any remaining fixes for bugs discovered during the Feature Testing phase. This phase concludes when its first Release is ready for the general public and for use in live games. The API is still closed, with breaking changes now being introduced only in circumstances where a critical bug requires it. Workflows are now also closed, with big changes being made only due to high-priority issues.


### Maintenance

After a Stable Release has been launched for a Version, the development team shift focus on this Version to a Maintenance phase. This phase is internal to the development team and focuses on fixing bugs that can be resolved in a non-disruptive way as well as smoothing issues with UX/UI. At this point, the team circles back and begins Planning for the next Version.


#### Closing

This is an internal term used to refer to the final Release in a Version, the Closing Release usually coincides with the Release of a new Stable Version. A Closing Release generally contains backported security fixes, minor quality of life improvements from the next Version which are deemed safe to implement, and any changes needed to support Users staying on the Version for a longer term while preparing them to upgrade to the next Version. There may not always be a formal "Closing" Release.


## Update Channels

Foundry VTT provides the option to choose an update channel, allowing users to select which Phase they would like to receive updates for. Each of these update channel contains Releases intended for different kinds of use:

- Stable - Releases that have been carefully tested and are recommended for use in live games.
- Testing - Releases for testing the functionality of new features to obtain feedback from the general user community.
- Development - Releases for testing the design of new features and API changes to obtain feedback from the developer community.
- Prototype - Releases for previewing the design of experimental features which are not yet fully developed.

