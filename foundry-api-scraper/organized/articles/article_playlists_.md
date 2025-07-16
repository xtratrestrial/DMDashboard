# Playlists | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/playlists/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Playlists


## 


## Overview

Foundry Virtual Tabletop supports the use of audio to accentuate player actions or enrich the atmosphere during gaming sessions.

This page details the use of Playlists, the sounds contained within them, and the playlist's various settings.


#### Folders

This directory can contain folders to organize your world's playlists. For details on how to create and use them please see the Folders article.


## The Audio Playlists Tab

The Audio Playlist tab allows Gamemasters and Assistants to create new Playlists and modify existing ones. All players can access this sidebar, to view the currently playing playlists and adjust their client-side volume controls.

Playlists in Foundry can be viewed, created, and managed in this sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's audio. Like folders in other directories, the "plus folder" icon will create a new subfolder, and the "circled plus" icon on an item folder will create a new playlist in that folder.


### Global Volume Controls

Global volume controls are client-sided sliders that modify all sounds of certain categories, allowing players to fine-tune volume levels on their end. This panel can be expanded and collapsed with a left-click of the mouse, showing or hiding the following volume sliders:

The Playlists volume slider determines the master volume of playlists played by the Gamemaster.

The Ambient volume slider adjusts the master volume of Ambient Sounds heard in a Scene.

The Interface volume slider adjusts the master volume of sounds triggered through interface actions (such as chat messages and dice rolls).


### Currently Playing Track

If a track is playing, it will be indicated here along with how much of the track has played, and the track's current volume, which you can adjust on the fly. The currently playing area also allows you to quickly toggle if the track should repeat, as well as provides controls to pause and stop the track directly. Pausing a track will not remove it from the currently playing bar, but stopping the track will.

If no track is being played this part of the interface will be hidden.

Changing the volume of a track that is currently playing will change the volume for all users. If you want to adjust the volume for this and all other audio tracks just for you, use the global volume controls.


### Creating Playlists

In order to play audio tracks on demand, or as a sequence, they must be first added to a playlist. A playlist can contain multiple sounds, and the same sound can be in multiple playlists.

Click the "Create Playlist" button at the top of the Playlist Directory sidebar to create a playlist. From there, a prompt will appear, allowing you to enter the name of the playlist. Once you have named your playlist the configuration window will appear, allowing you to set additional details about the playlist. This step is optional, but the following settings can be configured:


### Managing Playlists

Playlists on their own have two buttons which are used to add new sounds and cycle the playback mode used.

By right-clicking a playlist you can bring up a context menu with additional options for managing playlists. This context menu has the following options:

Normally, only Gamemasters and Assistant users can view and manage playlists, but all players can see the names of playlists when they are played. Take care to keep your playlist and track names spoiler-free!


### Adding Tracks

Once a playlist has been created, individual sounds can be added to it by clicking the "Add Sound" button next to the playlist (notated by a plus sign icon). This will bring up the configuration window allowing you to add the sound to the chosen playlist. Once a sound has been created in a playlist, the playlist can be expanded to manage the individual sound, such as editing the name or sound source, toggling the track to loop when played, or deleting the sound from the playlist.

By right-clicking a track you can bring up a context menu with additional options for managing tracks. This context menu has the following options:


## API References

To interact with Playlists programmatically, consider using the following API concepts:

- The  The Playlist Document Playlist Document
- The  The Playlists Collection Playlists Collection
- The  The PlaylistDirectory Sidebar Directory The PlaylistDirectory Sidebar Directory
- The  The PlaylistConfig Application The PlaylistConfig Application
- The  The PlaylistSoundConfig Application The PlaylistSoundConfig Application

