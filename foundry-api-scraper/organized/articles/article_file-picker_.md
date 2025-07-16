# File Picker | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/file-picker/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# File Picker


## 


## Overview

The file picker is a window used by multiple tools which allows users to select files from their foundry data folders for use in scenes, as tiles, in playlists, and as parts of actors. This article will help familiarize you with its common features and how they function.


## File Picker Window

The file picker window allow you to select assets to be used as tiles, ambient sounds, item or actor actor, and similar. It is also possible to upload new assets through the file picker.


#### User Data vs Core Data

You can swap between User Data, and Core Data which are the two main locations where Foundry looks for assets to use. User Data is represented with a database icon ( ) and contains all of the assets that are used by modules, game systems, game worlds, and assets users upload for their own use.

Foundry's core data, which is represented by a server icon ( ) is where the software itself stores files, such as icons which are used by game systems and user interface icons used elsewhere in the software. Core Data generally does not (and should not) contain game assets used by worlds such as maps and music.

You can find more on where user data is located by referring to the Application Configuration article.


#### Creating and Hiding Folders

You can create new folders using the Create Folder icon ( ) which will provide a prompt for the name of the new folder and place it into the current folder being viewed. The Privacy Mode toggle ( ) is only available to game masters and assistant game masters, and hides the current folder's contents from users of lower permission levels when they use the filepicker. When toggled on the file list will be given a faint purple hue to indicate that privacy mode is on to users with the gamemaster role.


#### File Picker Permissions

Access to the file picker and the ability to upload files through it is governed by permissions levels, which is configured on a per-world basis. Access can be granted or revoked through the user role configuration panel accessed through the configuration panel. Details on the game settings panel and how to access user permission can be found in the Game Settings article, and details on permission roles can be found in the Users and Permissions article.


### File List

The file list provides the contents of a single folder located in the user data folder. Sub folders are marked with a folder icon ( ) and clicking on a folder will navigate to that folder and display its contents. To back out of a folder use the level up button ( ).

- List View ( ): This shows all of the files listed by their file name with a plain file icon beside them.
- Thumbnail View ( ): This shows all of the files listed by their file name with a small icon representing the type of file it is. If the file is an image format it will instead provide a preview of the image itself.
- Tiles View ( ): This shows all the files in the chosen folder in a grid arrangement with a small icon representing the type of file it is. If the file is an image format it will instead provide a preview of the image itself.
- Images View ( ): This shows all the files in the chosen folder in a single list with large icons representing the type of file it is and its filename. If the file is an image format it will instead provide a large preview of the image itself.


#### Uploading and Changing Files

The   Upload section allows you to use the Choose File button to open your operating system's file browser, which you can then use to select a file on your local drives to add to the user data folders. Files uploaded in this manner are automatically selected in the file list once the transfer is complete.

The   Selected dialog box shows the path to the currently selected file. If a file was selected prior to opening the file picker (such as when changing a actor's token art) it will show the currently selected path there. This can be edited directly to change the file and path being used. Pressing enter while your cursor is active in this text field submits the change.

The   Select File button selects the chosen file from the file list.

