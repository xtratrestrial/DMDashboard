# Application Configuration | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/configuration/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Application Configuration


## 


## Overview

Foundry Virtual Tabletop offers a number of layers of configuration allowing you to customize the application and server to suit your specifications. Whether you are changing these configuration options via the command line when launching FVTT, by editing the options.json configuration file, or by way of the main setup menu. This article will introduce you to the concepts of:

It is strongly recommended that all users set an Administrator Access Key in order to protect their setup screen from unwanted access.


## The Configuration Menu

The simplest way to adjust configuration options for Foundry VTT is through the configuration tab found on the Setup menu. Changing values on this tab alters them in the options.json file without having to edit the file directly.

`options.json`This menu contains the most common options you may wish to change and is most commonly used for adjusting the port number used for hosting or the User Data path.

Any change made to the Foundry VTT's directives through the Setup menu requires a restart of the program before it will take effect, choosing Save Changes will write the data to options.json and cause Foundry VTT to shut down.

`options.json``admin.txt`Note that custom paths for Windows need to either use forward slashes, ex: D:/path/to/appdata or escaped backwards slashes, ex: D:\\path\\to\\appdata.

`D:/path/to/appdata``D:\\path\\to\\appdata``aws-s3.json`
## Using Options.json

Foundry's behavior can also be customized via editing the options.json file stored in the Config directory within the User Data directory.  The directives take one of three data types:

`options.json``"examplestring"``12345``true``false``true``false`All options can also be set to null, which disables that option.  Do not set a value to null unless you're certain it can be disabled.

`null`Note: JSON is syntax-sensitive, and a malformed options.json file may cause Foundry to not start.

It is strongly advised that you back up options.json before editing it manually.

`demo``http://x.x.x.x:30000/demo/``sslCert``sslKey`
## Where Is My Data Stored?

In order to protect your data, and to comply with operating system expectations, Foundry VTT secures the data for your Game Worlds, Systems, and Add-on Modules in a separate, user-specific folder stored in 
referred to by Foundry VTT as the User Data folder.

When Foundry VTT is launched it checks for any directive that might change where to find its User Data folder in the following order:

- Command Line Flag. See the Command Line Options below.
- Environment Variable. Set FOUNDRY_VTT_DATA_PATH.
- Config Data Override. See the Configuration Menu section above.
- Default OS Application Data.

`FOUNDRY_VTT_DATA_PATH`If multiple options are set, the first valid option will be used. The default application data location for each operating system is the following:

Windows

```javascript
%localappdata%/FoundryVTT
```

`%localappdata%/FoundryVTT`macOS

```javascript
~/Library/Application Support/FoundryVTT
```

`~/Library/Application Support/FoundryVTT`Linux (in order of availability)

```javascript
/home/$USER/.local/share/FoundryVTT
/home/$USER/FoundryVTT
/local/FoundryVTT
```

`/home/$USER/.local/share/FoundryVTT
/home/$USER/FoundryVTT
/local/FoundryVTT`
### Managing Your User Data

Users frequently ask for best practices for managing their existing User Data folders to ensure that they're maintaining good backups of their worlds or in some cases to move their user data to a new location.


### Backing Up Your User Data

The easiest way to backup your User Data folder is to simply copy or create a zip file of your User Data folder in entirety. Our partners over at Encounter Library have produced a short video on this which details the process perfectly: Encounter Library - Backing up your User Data Folder


#### About Sync Services

Incorrect configuration of automated backup services can result in permanent data loss.

The use of data syncing services such as Dropbox, OneDrive, Google Drive, iCloud, and others is attractive as a method to be certain your data is backed up as expected. However, failure to correctly set up these services can prevent Foundry VTT from accessing necessary files in your UserData folder at best, and result in data loss at worst.

If you are going to set up a data syncing service for your UserData folder, please follow these recommendations:

- Make sure that your sync service is set to only upload. Do not set the sync software to download from the service to your UserData folder.
- Backup the Data subfolder of your UserData only.
- Ideally, set the syncing service to only perform the synchronization during a time when you will not be actively using the Foundry VTT software.


### Moving Your User Data

- Close FVTT if it is open. Open your current User Data path in a file browser.
- Open a second file browser and create a new folder wherever you plan to store your data. This location can be anywhere, but must not be within the Foundry VTT Application folder.
- COPY the Config, Data, and Logs folders from your current User Data folder to your new location.
- Open Foundry VTT and on the configuration tab of the main menu, set your User Data path to the new location and click Save Changes .
- Foundry VTT will shut down. Relaunch it.
- Check to see that your Worlds still appear and that the User Data Path still shows correctly on the Configuration Tab.
- Temporarily move the Data folder from your previous (or default) User Data folder to a new location.
- Close and Relaunch Foundry VTT.
- If your worlds still appear in this list, you have successfully moved your User Data to a new location and you may delete the copy of the Data folder you moved in step 7.

The user data folder contains the following basic directory and file structure.

- Config/ - The configuration directory
		
			options.json - Application configuration options
- options.json - Application configuration options
- Data/ - User data directory
		
			systems/ - Installed game systems
			modules/ - Installed add-on modules
			worlds/ - Installed game worlds
- systems/ - Installed game systems
- modules/ - Installed add-on modules
- worlds/ - Installed game worlds
- Logs/ - Server log files

`Config/`- options.json - Application configuration options

`options.json``Data/`- systems/ - Installed game systems
- modules/ - Installed add-on modules
- worlds/ - Installed game worlds

`systems/``modules/``worlds/``Logs/`When referencing data from within the virtual tabletop application, any content stored inside the Data directory is publicly available to be served directly. This is where you should put your content that you intend to use inside the application. You are free to create any folder or directory structure that you want inside this data directory. For example, if you have the following file in your file system:

```javascript
<User Data Path>/Data/worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg
```

`<User Data Path>/Data/worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg`When using that map image inside Foundry VTT, you can reference it as a web-accessible URL using the path relative to the Data folder

```javascript
worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg
```

`worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg`
#### Regarding File Naming Conventions

Since Foundry VTT works as a web server, you should be sure to use directory and file names which conform to web file and URL encoding conventions. You should generally avoid using spaces or special characters as these are likely to cause issues when serving your content to other players. See the Google URL Guidelines for more detail.


## Using Command Line Flags

Foundry has four command-line flags that can be passed when the application is run at the command line.  These work with both the packaged Electron executable as well when starting Foundry via Node.js.

Example usage of the command line syntax to launch the application for various environments are:


#### Node.js

```javascript
node main.js --port=30000 --world=my-world --dataPath=/local/data/foundryvtt
```

`node main.js --port=30000 --world=my-world --dataPath=/local/data/foundryvtt`
#### Electron (Windows)

```javascript
FoundryVTT.exe --port=30000 --world=my-world --dataPath=D:\FoundryVTT
```

`FoundryVTT.exe --port=30000 --world=my-world --dataPath=D:\FoundryVTT`
#### Electron (Linux)

```javascript
foundryvtt --port=30000 --world=my-world --dataPath=/local/data/foundryvtt
```

`foundryvtt --port=30000 --world=my-world --dataPath=/local/data/foundryvtt``--demo``{"sourceZip": "",
		"worldName": "",
		"resetSeconds":``--port``30000``--world``My PF2E Campaign``my-pf2e-campaign``--dataPath``--noupnp``--noupdate``--adminPassword``--logsize``--maxlogs``--hotReload``.js``.mjs``.css``.html``.hbs``.json``{
		  "flags": {
			"hotReload": {
			  "paths": []
			}
		  }
		}``--noipdiscovery``options.json````javascript
{
	...,
	"demo": {
	  "worldName": "demo-world",
	  "sourceZip": "demo-world.zip",
	  "resetSeconds": 3600
	},
	...
  }
```

`{
	...,
	"demo": {
	  "worldName": "demo-world",
	  "sourceZip": "demo-world.zip",
	  "resetSeconds": 3600
	},
	...
  }`Alternatively, you can use --demo=demoConfig.json which provides an absolute or relative path to a separate .json file containing the data structure of the above example. This usage is helpful if you sometimes want to run a demo and sometimes want to run a non-demo on the same server. In this case the demoConfig.json would look as follows:

`--demo=demoConfig.json``.json``demoConfig.json````javascript
{
	"worldName": "pathfinder-demo",
	"sourceZip": "pathfinder-demo.zip",
	"resetSeconds": 3600,
  }
```

`{
	"worldName": "pathfinder-demo",
	"sourceZip": "pathfinder-demo.zip",
	"resetSeconds": 3600,
  }`