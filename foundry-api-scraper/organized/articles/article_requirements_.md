# Minimum Requirements | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/requirements/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Minimum Requirements


## 

While it is not possible to share exact hardware requirements for the software as the performance of the application depends heavily on the type of content and features that are used within a World, it is possible to provide some recommendations and basic requirements for a bare-minimum usage.


## Client Requirements


### Minimum Specifications

- Relatively modern computer running Windows 10 or 11, macOS Big Sur (or newer), or Linux operating systems (Ubuntu 22+, Debian 11+, Redhat 9+, Arch) with support for 64-bit architecture.
- An integrated GPU to enable hardware acceleration.
- 8GB of RAM
- A monitor no smaller than 1366x768. At this minimum resolution many aspects of the UI will feel cramped.
- A modern web browser like Chrome, Firefox, Opera, or Edge with hardware acceleration enabled. (Safari is not a supported browser at this time).


### Recommended Specifications

- Relatively modern computer running Windows 10 or 11, macOS Big Sur (or newer), or Linux operating systems with support for 64-bit architecture.
- A dedicated GPU which supports WebGL 2.0.
- 16GB of RAM
- A monitor with 1920x1080 or higher resolution.
- A mouse. You can use the software with a touchpad but the current software is designed for mouse and keyboard.
- Chrome or a Chromium-based browser provides an experience closest to the FVTT desktop application.


## Hosting Requirements

There are three main modes to host a Foundry server: Self-Hosted, Cloud Hosted, and Partner Hosted.  Partner Hosted offloads the responsibility of server hardware to the hosting partner, so it needs no list of requirements here.


### Self-hosted Minimum Specifications

Self-hosted requires the above specifications for running the Foundry VTT client and also:

- An internet service provider which allows port-forwarding via IPv4, and which does not use Carrier Grade Network Address Translation (CG NAT).
- A router configured to port-forward incoming connections to your PC.
- Your operating system's firewall configured to allow connections on the port FVTT is using.
- An internet upload speed of at least 1.5MB/s (12mbps)* is recommended since the host needs to transfer image, video, or audio assets to connected players. For hosts with slow upload speeds, serving your media files from a cloud storage location (for example: using S3 File Storage Integration) will avoid this limitation.
- *-Through careful optimization of assets and use of S3, FVTT can be hosted on speeds as low as 6mbps but may experience extremely slow initial loading times.

If your ISP provides an IPv6 address and your players can connect via IPv6 (confirmed via this link) there is a high possibility you do not need to set-up port forwarding, and your players will be able to connect to you via IPv6 instead, negating the need for Port-Forwarding.


### Dedicated Server Minimum Requirements

Dedicated servers require less system resources because they do not run a client. Dedicated servers should have the following minimum requirements:

- An OS that supports glibc 2.28+
- Ability to run Node 18+, (20 recommended, 21 incompatible)
- at least 1 vCPU (2 recommended)
- At least 1GB storage space.
- 2 GB RAM (4GB recommended)
- Firewall and security settings (dependent on host) configured to allow connections on the port required.

`glibc 2.28+`The amount of memory required by the server process depends on the amount of data included in the game system and modules that are active within your world. Larger systems or worlds that use more content-intensive modules will require more RAM.


### Raspberry Pi Dedicated Servers

Many users repurpose a Raspberry Pi to host their Foundry VTT servers due to the lightweight nature of the Pi operating systems and the ease of reconfiguration. Provided the OS you are using supports Node 18+ and glibc 2.28 or higher, you should be able to run Foundry VTT without issue. Older models may still work, but are not officially supported. As a courtesy, we have provided a workaround below for guidance on how to rebuild our database engine for older, unsupported operating systems.


#### Supported Raspberry Pi Models

- Pi 4 Model B
- Pi 5
- Compute Module 4
- Compute Module 4 Lite
- Pi Keyboard 400

In upgrading to the new database engine for v11, some devices may experience an error related to an invalid version of glibc. This most notably affects ARM architecture devices, including some models of Raspberry Pi.

- 1. Shut down your currently hosted Foundry VTT server instance.
- 2. In a terminal, access the folder or directory where your Foundry VTT executable is located.
- 3. Navigate to the resources/app/ subdirectory.
- 4. run npm install classic-level --build-from-source
- 5. Relaunch your Foundry VTT server following your normal procedure.

`resources/app/``npm install classic-level --build-from-source`The following models of Raspberry Pi are unsupported and cannot functionally operate as a Foundry VTT server.

- Pi Pico
- Pi Pico W
- Pi 1 Model A
- Pi 1 Model A+
- PI 1 Model B
- Pi 1 Model B+
- Compute Module 1
- Pi Zero v1.2
- Pi Zero v1.3
- Pi Zero W
- Pi 2 Model B v1.1

The following models of Raspberry Pi, while not officially supported, may be able to operate with some fine-tuning and careful configuration.

- Pi 2 Model B v1.2
- Pi 3 Model B
- Pi 3 Model B+
- Compute Module 3
- Compute Module 3 Lite
- Compute Module 3+
- Compute Module 3+ Lite
- Pi Zero 2 W

