# Port Forwarding | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/port-forwarding/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Port Forwarding


## 


## Overview

As with any server software, hosting Foundry VTT can require some network configuration to allow users to connect. It is also possible to use some simple network configuration for convenience or to provide some additional, more advanced features of FVTT (such as Audio/Video Chat Integration). This article will introduce you to the following topics:


## What is Port Forwarding?

Port forwarding is a topic that is often seen with some nervousness or frustration from users due to past negative experiences with configuration. To allow users to connect to your home network, however, some level of port forwarding is necessary.

To take some of the mystery and complexity away from port forwarding and explain it simply, let's use an analogy:

Think of your home network like an apartment building. The building has a front desk where a security guard directs visitors to the apartment they're looking for. The apartment building has an address, but every apartment in the building has an apartment number.

In our case:

- The apartment building is your home network.
- Its street address is your WAN IP (or Internet IP) address, assigned by your Internet Service Provider.
- The security guard is your router, and has a registry of all the apartment numbers.
- Your apartment is your computer.
- Your apartment number is your computer's LAN (or Local) IP address
- the other residents are the devices connected to your network, such as your phone, your smart TV, or your printer.

Suppose someone wants to visit you - they would receive an invitation to the address of the building (YOUR WAN/LOCAL IP), and upon arriving they would ask the security guard (ROUTER) how to find your apartment (YOUR COMPUTER). The security guard (ROUTER) would then check its list of apartment numbers (DEVICES) to find your apartment number (YOUR COMPUTER'S LAN IP ADDRESS) before directing them to your apartment (YOUR COMPUTER). In order to tell the security guard that it's okay to send people to your apartment, however, the security guard needs permission (A PORT FORWARDING RULE).

Simplified completely, connections trying to reach your computer have to follow this path:

Their computer → Internet → Your Router (WAN IP) → Your Computer(LAN IP)

What port forwarding does is it helps to send users which are trying to connect to your WAN/INTERNET IP address to the correct LAN/LOCAL IP address. It does this by way of a port number which tells your router what kind of connection it is. For Foundry Virtual Tabletop, when traffic arrives at your WAN IP address on port 30000 (or an alternative port you can choose in the Setup menu), the port forwarding rule will automatically send the connections to your computer's LAN/LOCAL IP address.

`port``30000`
#### When is Port Forwarding Not Required?

Under some circumstances, port forwarding may not be required:

- If you have an IPv6 address you probably do not need to port forward. IPv6 is an expanded protocol which is able to refer to specific device IPs. In this case, all you should have to do is configure your firewall to allow connections as per the firewall section of this article.
- If you are using a router which supports Universal Plug and Play (UPnP) and has that feature enabled you probably do not need to port forward. Some negative interactions between routers and UPNP can result in connection issues. If you experience connection issues while using UPnP, please disable it and manually port forward.


## How do I Port Forward?

The exact steps necessary in order to port forward vary depending on you router and the interface it provides, but at a high level process is the same in all cases. Some screenshots are provided for assistance with Windows use cases, although the process uses similar concepts for macOS or Linux.

Note: Before beginning to set up a manual port-forwarding rule, it is beneficial to disable UPnP from the Foundry VTT main menu.

- Access your network router configuration panel. Usually you do this by visiting your router's IP address in a web browser. You can learn your router's IP address by looking at the Default Gateway field of the ipconfig command on Windows. For most router models this address is 192.168.0.1.
- Discover your computer's local IP address by referring to the IPv4 Address field of the ipconfig command.
- Access the Port Forwarding section of your router configuration panel. The router interface will depend on the model, but some instructions for specific router models are available on the portforward website: https://portforward.com/router.htm
- Forward traffic on TCP for the port you are using for Foundry Virtual Tabletop (30000 by default) to your local IPv4 address. The image below illustrates an example using the management interface of my router (yours will look different).
- Once you have applied the port forwarding rule, restart the Foundry Virtual Tabletop software and verify that it is working properly by having a friend connect to your game or by using the Open Port Check Tool. Note that even if the port forwarding rule is applied correctly the port will not show as open unless Foundry VTT is actively running.

`ipconfig``192.168.0.1``30000`If you are trying to test if port-forwarding is working by connecting to the 'internet' invitation link from your hosting computer, it will commonly fail as most routers do not provide support for this type of connection. Try using a smartphone through cellular data, instead.


## Firewall Configuration

Most modern operating systems come pre-equipped with a built in firewall designed to prevent incoming connections and stop unwanted access to your computer. For the most part, these firewall softwares should be automatically configured when opening Foundry VTT through an Operating System level prompt which will ask if you wish to allow incoming connections. However, in some cases (particularly Windows Firewall) it is necessary to manually allow connections to FVTT through your firewall.

As this most commonly arises related to Windows Defender, the following steps are provided:


#### Windows Defender Firewall

- Navigate to Control Panel, System and Security and Windows Firewall.
- Select Advanced settings and highlight Inbound Rules in the left pane.
- Right click Inbound Rules and select New Rule.
- Add the port you need to open (30000) and click Next.
- Add the protocol (TCP) and the port number (30000) into the next window and click Next.
- Select "Allow the connection" in the next window and click Next.
- Select the network type (both) and click Next.
- Name the rule something meaningful and click Finish.


### About IPv6 and Firewalls

While IPv6 does not require port forwarding, it does require access to the ports on the hosting device. This means that any firewall software must be configured to allow connection on that port for IPv6 connections.


## Frequently Asked Questions

What if my internet IP address changes?

If your public IP address changes, you don't need to make any change to your port forwarding rule. The forwarding rule only needs to change if your local IP address changes.

What if my local IP address changes?

Whenever your device reconnects to your local network there is a possibility that your local IP address will change. If this happens your existing port forwarding rule will now be directing traffic to the wrong place and you will need to update the rule accordingly. The best way to avoid this issue is to configure a DHCP Reservation which always assigns your computer the same local IP address. There are two ways to accomplish this:

1. Most routers support a DHCP Reservation utility which can be configured to always assign your device the same IP address.

2. Alternatively, you can configure your Windows adapter to request a specific IP address when it connects to the network. Review the following knowledge base article to learn how to request a manual DHCP assignment: https://support.microsoft.com/en-us/help/15089/windows-change-tcp-ip-settings

It just doesn't work, HELP!

Even if you followed these instructions carefully there are situations in which this approach will not work for you. Common examples include university or community networks with a "router behind a router" configuration where you do not have control over the outer layer of routing. In such cases there are a few fallback options which you can explore:

- Using a Virtual Private Network (VPN) which mimics a local area network that all participants connect to externally. Using a VPN will rely on all your players installing and using the same VPN software, so it imposes some additional setup overhead. Popular VPN options include ZeroTier or Hamachi. There are some downsides of a VPN including more setup steps for your players as well as possibly slower network transfer speeds so it is not recommended unless conventional port forwarding is impossible.
- Hosting a dedicated server using a cloud host. Instead of self-hosting the application on your own PC, you can host Foundry Virtual Tabletop in the cloud where your server is available for all players (including yourself) to connect using a web browser. See the Hosting Options Guide page for instructions. There are numerous advantages of running a dedicated server for Foundry VTT - but a disadvantage of this approach is that it will impose some additional cost and may be too complex to set up for non-technical users.
- Utilize one of the premium hosting providers which specialize in Foundry Virtual Tabletop. See our Partnerships for a list of hosting service providers who will handle the setup and management of a dedicated Foundry Virtual Tabletop server on your behalf.

