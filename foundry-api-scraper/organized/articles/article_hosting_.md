# Hosting Options Guide | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/hosting/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Hosting Options Guide


## 


## Overview

In Foundry Virtual Tabletop, a game session has one host and several clients. In order to enjoy a multi-player gaming experience the clients must be able to connect to the host which is running the tabletop software. Hosting Foundry VTT can be done by anyone, and because clients can be a Gamemaster or a Player, the host does not necessarily need to be the Gamemaster.

This article will help you determine which hosting option might be the best fit for you.

No matter which hosting option you choose, you must still purchase a license key for Foundry Virtual Tabletop.


## Self-Hosted

In a self-hosted configuration, Foundry runs on your own computer or another computer on your local home network, usually using the pre-packaged Electron app. Players then connect directly to that computer in order to play the game. The self-hosted mode is most similar to the setup of Fantasy Grounds, Maptool, or Arkenforge.


#### Pros

- Uses a computer you already have, so it's cost-effective.
- Very little setup on the computer hosting it -- once the application is installed or unpacked, you just start up the app.
- Content lives on your local hard drive, giving you easy access to all of your world data.


#### Cons

- Foundry is only available to your players while the app is running -- if you close it to get back some system resources, your world is no longer accessible.
- If your players aren't on the same local network as you, some setup may be required to ensure connectivity. This is done via port forwarding or other network configuration.
- If players are connecting from the internet, they may experience issues based on your internet speed, especially if your world has large amounts of multimedia content.


#### Summary

This is likely the most common setup for Foundry users. If you're budget-conscious and don't mind working with your home network equipment. The biggest limiting factor is likely going to be your internet connection - if you don't have a lot of bandwidth, or have a restrictive ISP, you may want to explore other options.


## Cloud Hosted

In a cloud hosted configuration, Foundry runs on a dedicated server in a datacenter or other colocation facility. The GM and all players connect via a web browser to a persistent server running the Node.js version of the app. This hosting mode is closer to Roll20 or Astral Tabletop, but with additional setup required.


#### Pros

- The world can be always online if you leave the server running -- players can connect between sessions to edit their characters, and it's easier to run ad-hoc meetings between sessions.
- Requires no local network setup. If your players can browse out to the internet, they can connect to your server.
- Takes advantage of hosting providers large backbone connections, possibly eliminating issues due to internet bandwidth.


#### Cons

- Requires a web server configured to serve the Foundry application, which generally involves a fee.
- Initial setup of the application is more complicated than self hosting.
- Storage needs to be planned for in advance -- most web hosts have limited storage, or charge fees based on the amount of static assets (maps, tokens, music) stored.


#### Summary

Cloud hosting is more powerful and more flexible than self hosting, but there are charges involved with those advantages. A certain level of knowledge regarding setting up web-based applications, or a willingness to learn, is required. Additionally, cloud hosting may require additional work to maximize returns on your expenses.


## Partner Hosted

Foundry has Partnerships that will run Foundry on dedicated web hosts. While these are still currently in active development, this is the option closest to Roll20 or Astral from a setup point of view.


#### Pros

- Like cloud hosting, partner-hosted servers are always online, and generally have faster internet connections than a home connection.
- Simplified server setup -- the hosting partner does the heavy lifting on getting the server online and keeping it online.
- Partner hosts generally offer flat rates for dedicated servers -- cloud hosting providers generally offer pay-as-you-go terms on their services.


#### Cons

- Partner hosts offer more limited flexibility on server setup -- there's limited customization on the underlying server.
- In exchange for value-added features, partner hosts may charge more for what you get than if you go directly through a cloud hosting provider and set it up yourself.


#### Summary

If you're looking for most of the advantages that cloud hosting provides, but want setup of the software to be simpler, partner hosting is likely your best bet. While they don't offer all of the flexibility that self hosting or cloud hosting provides, they eliminate steps between you and getting your game up and running.


## Next Steps

Once you have decided on which method best suits you, the Installation Guide will take you through everything you need in order to get your copy of Foundry VTT up and running.

