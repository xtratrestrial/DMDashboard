# Year in Review: One-Year Anniversary Edition | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/year-in-review-2021/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Year in Review: One-Year Anniversary Edition


## 

The past year has been pretty surreal - for a number of reasons - and I can scarcely imagine that Foundry Virtual Tabletop is a full year old today. It feels like just yesterday that I was scrambling around to try and get the software launched, but after such an eventful year that also feels like a lifetime ago. This is an ideal moment to collect my thoughts and share a post that reflects on the past 12 months and looks ahead towards where we are headed.

I would like to begin by expressing sincere gratitude and thanks: the awesome community that has grown around Foundry Virtual Tabletop astounds me almost daily, and I am very thankful that so many of you have been so supportive. Our community continues to be welcoming, helpful, and enthusiastic as we all celebrate the roleplaying hobby that we love. Thank you all for continually contributing to the community in such a positive and fun way.

I hope that you take pride in the community as I do and will join me in celebrating some of the incredible things we have accomplished over the past year.


## Progress for the Software

Since software launch with version 0.6.0 on May 22, 2020 we have released 22 updates spanning major versions 0.6, 0.7, and now 0.8. I'm proud of myself and the team for maintaining that pace of progress. Across those 22 milestones we closed 1,553 issues on GitLab - compared to 2,245 issues which were closed in the 1.5 years of development prior to the software release. Even if you discount bug-fixes (more on this later) it's an amount of work that I'm very happy with and proud of.


### Major Features Added

Let's review some of the major features that have been added during that time.

V2 Lighting Engine

We overhauled the dynamic lighting engine in 0.7 to significantly improve the performance and power of the system by moving to use WebGL shaders that compute the appearance of light sources directly on the GPU. This has enabled a number of powerful animations, more realistic day/night transitions, improved interaction between adjacent lights, better performance, and more.

V1 Active Effects

We launched the first version of the Active Effects system which allows an Actor or Item to be modified by temporary status effects or conditions which dynamically alter their attributes. The Active Effects system is integrated with the old Token status effects menu and the tracked conditions in the Combat Tracker, and many game systems and modules are making use of Active Effects as a way to handle system-specific mechanics for buffs, de-buffs, statuses, conditions, equipment properties, and more.

V1 and V2 Icon Library

In both the 0.7 and 0.8 updates we added and then expanded a massive library of built-in icons that can be used to depict items, creatures, weapons, equipment, loot, and more. These icons are licensed for distribution with the core Foundry VTT software so that everyone can enjoy and use them within their games. The icons are all optimized as webp files with standardized resolution, and this library now includes over 5,500 individual icons.

V2 Dice Parser

The dice system was re-worked (partly in 0.7, partly in 0.8) to improve the way that roll expressions are parsed, tokenized into individual terms, and evaluated. This has resulted in a dramatic improvement in the handling of dice-related edge cases and significantly expanded ability for module and system developers to extend the rolling API with custom classes, terms, modifiers, and more.

V2 Audio System

The audio system has been completely re-worked in 0.8 to move to the native Web Audio API which has brought significant gains to performance and reliability of audio streamed to your players. Improvements to Ambient Audio which allow sounds to be enabled or disabled - even dynamically as a function of the darkness level - as well as a way to preview the ambient audio landscape in real-time.

V2 Document Model

The underlying architecture for how data objects are modeled and updated was re-worked in the 0.8 series to have a much more consistent and standardized design which will empower future generations of both core software as well as module development.

V2 Package Management

The built-in package management, installation, and updating system was improved in the 0.8 series to offer better tools for both users and developers - helping developers by making it easier for them to manage the life-cycle of their module versions, and helping users by making it easier to understand the reasons why installed modules were (or were not) updated. This work has included support for much desired features like module dependencies as well as the system that enables protected content that requires website authorization in order to be installed.

V1 Overhead Tiles

The community-voted feature for 0.8, the first version of Overhead Tiles system has been added which adds a Foreground Layer to every scene which can be used to place assets that appear above tokens who are able to pass underneath them. This includes support for different occlusion modes like roofs which behave differently for tokens that are outside of the roof area compared to tokens which are inside the building. The work to create this system lays some of the foundation for more ambitious systems like Scene Levels which will further improve the way that verticality and phasing is handled within Scenes.

Improved Documentation

A goal outlined in the 2020 Q4 "State of Foundry" update was to improve our documentation for assisting users and developers. I'm happy to report we achieved both goals with an overhauled Knowledge Base on the Foundry VTT website as well as improved Alpha API documentation that has tracked the latest state of the 0.8 codebase throughout its development. While we are proud of the improvements here, we also know we need to keep investing in documentation to compensate for the growing scope and complexity of the Foundry VTT software. This is an area where we will remain focused.


### Areas for Improvement

It's important to celebrate our successes, but also to learn from areas where we see opportunities to improve. There are many, but a few that I think are particularly worth highlighting include:

Smaller Update Cycles

Both the 0.7 and 0.8 update cycles ended up being large and lengthy. This forced community developers into a situation where they faced challenging migrations to get systems and modules compatible with the new release version where those migrations needed to handle hundreds of different changes. It's easy for us to get carried away with all the exciting features that we are adding to the software, but we need to do this more incrementally for future update cycles. As we plan and execute upon the next 0.9 update, we will work to manage the scope and phasing of that update sequence to be easier for developers to manage from a migration and compatibility perspective.

Better Internal Testing

The new features we created really pushed the software forward, but they also left a fair bit of instability in their wake. Over the past year 45% of the issues we have closed on GitLab have been tagged with the "Bug" label. To a degree I think this is normal for a fast-moving software that is evolving its technical stack while exposing early alpha/beta builds to external customers for feedback. However I also think we have room for improvement by tightening the way that we internally test prior to making releases available. I know we can do better in this area and I hope the next 12 months of releases are better tested with fewer surprising side-effects for users and community developers.

Upkeep of Fringe Components

We have added a number of features to Foundry Virtual Tabletop that are in "V1" of their implementation, and we have not yet had time to go back and revise or improve them. I think specifically of systems like the Weather System which was added but not since improved upon, the Journal System which is still very basic in its feature set, and the Audio/Video chat system which has several long-standing pain points. We want to keep our focus narrow to concentrate on the features that are the priorities for each update, but we also need to do a better job of making sure that other areas of the Foundry VTT software don't fall behind.

Achieving Feature Completeness

There are a few features that are absent from Foundry VTT that were always envisioned as things that the "complete" software would have. Some specific areas where we are missing features that belong in the complete software include support for Card Decks, the Event Triggers system for scripting dynamic interactions, support for Scene transitions, and a more robust Journal system. I don't know whether we will implement all of these features during the next 12 months, but they are certainly areas where I hope we will focus our attention. A commonly asked question is when will Foundry VTT be version 1.0, and the answer to that largely hinges on when and whether we have incorporated all the features that are missing in order for the software to feel "complete", although we have no plans to stop working on the Foundry VTT software even once these features are added!


## Community Growth

In addition to all the progress for the core software, we have seen astounding growth of our community.

Foundry License Owners

The number of Foundry VTT license owners has grown at a fantastic rate, sales of the software have been strong enough not only to support this as a full-time job but also to enable us to expand our team (more on this in the following section). While I won't reveal exact sales figures, I can share some high level growth metrics. If we divide the first year into two six-month segments, the number of license owners today has more than doubled compared to the number we had six months ago - with trailing three month growth of 35%. As a one-time-purchase software, we expect license sales to slow (eventually) but I am confident there is sufficient opportunity in the market for our business model to remain successful for years to come.

Foundry Community Discord

Our official Discord server (which became partnered during the past year) now boasts 33,000 members - ten times our membership this time last year. The Discord server transacts around 150,000 posts and 300 hours of voice conversation every month. Each week we see around 20,000 distinct active users with strong retention from week-to-week. This data all goes to support what we can see with our own eyes, that our community is incredibly passionate and engaged. We are so appreciative and thankful for that and for the support that you all provide for the project.

Foundry Subreddit

The community managed subreddit  has just eclipsed 20,000 members which is an absolutely amazing milestone and establishes an exciting marker of how strongly the Foundry community has been growing relative to the overall growth we have seen in the tabletop gaming and VTT communities over the past 12 months. It's incredible to see all the creative examples of foundry VTT in-action as well as the helpful reinforcement that community members on Reddit provide to each other.

Launch of Foundry Hub

This year also marked the launch of an incredible fan site for Foundry Virtual Tabletop called Foundry Hub. The Foundry Hub site is developed and run by the community featuring articles, tutorials, guides, videos, and more.

League of Foundry VTT Developers

The community organized league has also grown impressively with a tremendous number of active module and system developers using this community-organized and managed League Discord server as a place to share ideas, form collaborations, ask questions, and work together to solve module development problems.


## Expansion of the Team

To keep pace with the growth of the Foundry community, we have expanded our team, bringing our team size to 5 full-time (soon to be 6) employees.

- Andrew (Atropos#3814) - I am the creator and lead developer of Foundry Virtual Tabletop.
- Shane (Anathema#3668) - Our project coordinator and community manager, Shane oversees our official Discord server, works with content partners, and ensures that we are achieving our goals through careful planning. Shane was the first addition to the team and his work has been truly invaluable in achieving the results of this past year and keeping me sane in the process.
- Roman (Cobalt#7779) - A content developer and technical writer, Roman manages the continued improvement of our knowledge base documentation, partners directly with content creators, and organizes special initiatives like the addition of our curated icon library.
- Cody (cswendrowski#9701) - A software developer with deep roots in the Foundry developer community, Cody joined less than 2 months ago but has already made a big impression with key contributions to the 0.8 update - specifically the fantastic improvements to package management.
- Matt (mattexdee#8612) - A content developer and project manager, Matt partners directly with premium content publishers and community creators to ensure that the best possible tabletop gaming content is available on Foundry VTT. Matt also manages our media presence with his expertise in streaming and video creation.
- Kim (Fyorl#1292) - I am excited to announce that the next addition to our team will be starting soon, Kim will be a software developer working alongside myself and Cody to continue improving the Foundry Virtual Tabletop software with exciting new features and improvements to existing components.


## Content Partnerships

Despite all the successes and improvements for the Foundry Virtual Tabletop software itself, the tools we build would not be very useful without amazing content to bring to your gaming table.


### Premium Content

In November we launched support for our protected content system which allows for premium for-sale content to be purchased from the publisher and activated on the Foundry Virtual Tabletop website - securely granting access to that content for users who have activated it.

In the past 6 months we have seen releases for 31 fantastic pieces of premium content (https://foundryvtt.com/packages/premium) and I have been overwhelmed with the quality of what has been released so far in partnership with the following fantastic creators:

- Cubicle7 - Official content for Warhammer Fantasy Roleplay 4th Edition
- DeepDark Designs - Unofficial content for the 5e game system
- Free League - Official content for the Alien and Forbidden Lands game systems
- Pinnacle Entertainment Group - Official content for Savage Worlds Adventure Edition
- Goodman Games - Official content for Dungeon Crawl Classics
- Dragonshorn Tales - Unofficial content for the 5e and 3.5e game systems
- Paizo - Official content for Pathfinder 2e
- Ulisses Spiele - Official content for Das Schwarze Auge and Torg Eternity game systems

In addition to these fantastic creators who have already launched premium content for Foundry Virtual Tabletop, we are already partnered with 7 fantastic publishers who will be joining this list in the very near future, and we are closing in on partnership agreements with 4 more. The future is very bright for official TTRPG content in Foundry Virtual Tabletop!


### Content Creators

In addition to our partnerships with publishers, we have invested significantly in partnering closely with some of the most talented artists, musicians and storytellers in the content creator community with whom we have partnered to feature 31 packages of Exclusive Content (https://foundryvtt.com/packages/exclusive) which is designed specifically for Foundry Virtual Tabletop.

Simply by owning a license key for Foundry Virtual Tabletop you are able to install content of the highest quality from the following amazing creators, each of whom are highly deserving of your support:

- Adventure Music (Music): https://www.patreon.com/adventuremusicjr
- Apotheosis Studios (Adventures): https://www.kickstarter.com/projects/stonejamison/sirens-battle-of-the-bards
- Atropos (Battlemaps): https://www.patreon.com/foundryvtt
- Caeora (Battlemaps and Tokens): https://www.caeora.com/
- Cze and Peku (Battlemaps): https://www.czepeku.com/
- Darkraven Games (Ambient Audio): http://www.darkravengames.com/
- DMDave (Adventures): https://www.patreon.com/dmdave
- Domille's Wondrous Works (Battlemaps): https://www.patreon.com/dww
- Dragonshorn Studios (Adventures): https://www.dragonshorn.info/
- Frag Maps (Battlemaps): https://www.patreon.com/fragmaps/
- Forgotten Adventures (Battlemaps and Tokens): https://forgotten-adventures.net/
- Humperdink's Wares (Adventures): https://www.patreon.com/humpswares
- Kev's Lounge (Tokens and Minis): https://www.patreon.com/kevsloungepaperminis
- Limithron (Adventures): https://www.patreon.com/limithron
- Loot Tavern (Items): https://www.patreon.com/LootTavern
- McRoMusic (Music): https://www.patreon.com/McRoMusic
- Meditating Munky (Battlemaps): https://www.patreon.com/Meditating_Munky/
- Michael Ghelfi (Ambient Audio): https://michaelghelfi.bandcamp.com/
- MikWewa (Battlemaps): https://www.patreon.com/mikwewa/
- Milby's Maps (Battlemaps): https://www.patreon.com/milbysmaps
- Miska's Maps (Battlemaps): https://www.patreon.com/miskasmaps
- Monkey DM (Adventures): https://www.monkeydm.com/
- Moonlight Maps (Battlemaps): https://www.patreon.com/MoonlightMaps
- MusicD20 (Music): https://www.patreon.com/musicd20
- The Reclusive Cartographer (Battlemaps): https://www.patreon.com/thereclusivecartographer/
- Spellarena (Battlemaps): https://spellarena.com/
- Tabletop Music Bazaar (Music): https://www.patreon.com/tabletopmusicbazaar
- Tabletop RPG Music (Music): https://github.com/Tabletop-RPG-Music/tabletop-rpg-music/
- Tactical Master (Battlemaps): https://www.patreon.com/tacticalmap
- Tavern Tales (Adventures): https://www.patreon.com/taverntalesmaps
- The Boy King of Idaho (Music): https://www.patreon.com/boykingofidaho
- The MAD Cartographer (Battlemaps): https://www.patreon.com/themadcartographer
- Tom Cartos (Battlemaps and Tokens): https://www.patreon.com/tomcartos


### Kickstarter Presence

In addition to all this fantastic content, it's been a real thrill to see Foundry Virtual Tabletop incorporated into several amazing Kickstarters which have launched specifically with Foundry VTT support as one of their primary features, including:

- Sirens - Battle of The Bards
- Arkenforge: The Sci Fi Master’s Toolkit
- Dungeon Alchemist
- Kibbles’ Compendium of Craft and Creation
- Hammerdog Games: The World's Greatest Inserts
- DM Dave: Legends of Omeria, Pexia’s Guide to Omeria, Hand of the Eight
- Free League: Ruins of Symbaroum
- Token Vault
- Pixels Electronic Dice
- Valhalla Darkraven Fantasy Soundscapes
- Pathfinder for Savage Worlds


## Closing Thoughts

It's been a challenging year, with the effects of COVID-19 changing the way we live our lives. I am sure many of you have been struggling with hardship, loss, and other terrible challenges during the past 12 months. I hope that tabletop gaming and the solidarity of this community have given you some respite during that time, and I am proud if Foundry Virtual Tabletop has been able to provide a bright spot to keep gaming groups rolling dice together during a very difficult period.

As we approach healthier days ahead - I am happy for the groups who are able to resume their in-person games as well as for those that choose to remain online. I hope that Foundry VTT can be a tool in the toolbox for GMs of all types, whether it is technology-at-the-table or fully-virtual, I am excited to see where the groundswell of interest in our hobby leads as we find new ways of telling stories and creating memorable moments with our friends.

Thank you all so much for supporting me and supporting this project - it is no exaggeration to say that I would not be writing this post without the community that has formed around Foundry Virtual Tabletop. I am so excited to see where the next 12 months lead and I hope you will join me for the next chapter of that adventure.

Cheers and happy gaming!

Andrew

