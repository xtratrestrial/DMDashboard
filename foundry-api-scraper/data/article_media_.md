# Media Optimization Guide | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/media/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Media Optimization Guide


## 


## Overview

This article will walk you through the best practices and files format considerations for your media assets for use in Foundry VTT. This includes information on naming, organizing and formatting assets for use in Foundry VTT.


## File Structure and Naming

This section details the recommended method of naming and organizing your files. Proper organization, file naming, and formatting will ensure Foundry works as smoothly as possible, reduce the risk of issues or losing files, and potentially improve your own workflow efficiency.


### Folder Structure

It is recommended that you organize your folders by the thematic purpose for different assets:

- /artwork for art included in journals, items, or handouts
- /audio for sound files
- /tiles for tile images used in scenes
- /tokens for actor tokens
- /maps for map backgrounds used in scenes

`/artwork``/audio``/tiles``/tokens``/maps`
### File Naming Conventions

Since Foundry VTT is a web server, it adheres to file naming conventions expected for a web server, and thus the file structure and filenames of your assets should be standardized accordingly. The most common things are:

`/my awesome content/maps/fortress of doom.jpeg``/maps/my-awesome-content/fortress_of_doom.jpeg``fortress_of_doom(30x25-3000x2500-gridless).jpeg``fortress_of_doom.jpeg``* . " / \ [ ] : ; | , & = + $ ? % #`If providing multiple varieties of the same base token, file naming conventions should allow all tokens to begin with the same file prefix. This should generally be the creature name, major variations, then minor variation.

Example:

red-guard.png, blue-guard.png, green-sword-guard.png, green-guard-spear.png

`red-guard.png, blue-guard.png, green-sword-guard.png, green-guard-spear.png`Should be: guard-red.png, guard-blue.png, guard-green-sword.png, guard-green-spear.png

`guard-red.png, guard-blue.png, guard-green-sword.png, guard-green-spear.png`This way, Foundry wildcard token paths can easily use guard-*.png to get a guard of any of the major colors available (red, blue or green) or guard-green-*.png to get a green guard with a random weapon (a sword or spear in this case).

`guard-*.png``guard-green-*.png`
## Art Assets

Generating image assets for Foundry carries with it some best practices which can help to optimize your content for distribution.


### Image File Formats

Foundry supports the following formats for image files: .avif, .jpg, .jpeg, .png, .svg, .webp. The recommendations change slightly whether you're creating Tokens, Tiles, or Maps for Scenes.

`.avif, .jpg, .jpeg, .png, .svg, .webp`The current best-in-class image file format for Foundry VTT usage is WebP, which achieves the best quality-to-size ratio of any image format with lower file-sizes than JPEG with comparable quality and support for transparency.

WebP uses a more complex algorithm for compression which requires more work for the client CPU. Generally this trade-off is worth it, to reduce network transit in favor of more utilization of the client PC. The same holds true for audio codecs like OGG.

For images which do not require a lot of visual complexity, SVG can also be used which will feature tiny file-sizes, support for transparency, can be easily animated, and can be scaled to any size without noticeable loss of quality. Consider using SVGs if you are making tiles, tokens, or icons for use in foundry that would benefit from transparency and scaling, but do not require extremely complex color depth and detail.

In order to use a SVG image on a WebGL canvas, the SVG document must be given an explicit default width and height in its markup, for example:

```javascript
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
```

`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">`Given the design of PNG files as a lossless compression format, it tends to have substantially larger file sizes by comparison to other formats. PNG is recommended for smaller images (with or without transparency) where the file size remains more manageable. Using PNG for very large images, such as scene backgrounds, can result in very large files that take longer for players to receive and load.

JPEG files are great for large images as they generally have a small file size, but this comes at the cost of heavy, lossy compression methods that create visual artifacts, making images appear grainy. JPEG files are best used for medium sized images that don't need extreme image fidelity, or won't be see constantly by players. Using JPEG for scene backgrounds is generally better than PNGs in terms of file size, but the compression will severely impact the clarity of the image.


### Token Assets

When designing Token assets for use in foundry it is best to consider size, quality, and image orientation. Unless making portrait-style or "pog" style tokens, overhead tokens should be provided in a format that supports transparency (webp or png), should be square in pixel dimensions, and facing directly south. The reasoning is explained in detail below.

The resolution of Tokens created for use in Foundry is between 200px and 400px square for a medium or large sized creature. 400x400(px) has become somewhat of an industry standard for token creation. When zooming in on a token, it is desirable to get a higher resolution detail than you obtain with the battle-map itself. Foundry allows zoom up to 3x, so a token which has a resolution of 3 times the grid size of the battle-map will still demonstrate visible quality.


#### Token Orientation

Foundry VTT uses a firm assumption that token artwork is facing "south" in its natural orientation. If you have Tokens which are not southward-facing in the original images it is recommended to rotate the token images to have the tokens face south. Alternatively your users can utilize the mirror vertical checkbox in the token configuration to flip a northward facing token to be southward facing.

Avoid creating tokens which are facing diagonally, as there is no way in the Foundry application to correct for this initial orientation. For example, tokens which are drawn to face South-East or South-West as this will look unintuitive when those tokens are combined with rotation in Foundry VTT.


### Scene/Map Assets

Foundry is extremely friendly to map creators wishing to package their content for distribution. The following are important guidelines to consider when creating maps for use in Foundry VTT:


### Video and Animation Assets

Foundry VTT supports three key filetypes when it comes to video assets for use: .webm, .mp4, and .m4v are supported

For transparent video assets, such as animated tiles or tokens, .webm will generally provide the best experience as it is high quality with a small file size. For animated assets (maps, tiles, and backgrounds) .webm, .mp4, and .m4v are recommended.

While Foundry does not restrict the file size a Scene can use, but it is important to keep in mind that a scene must be distributed to all connected players and, potentially, the GM as well. As a guideline, Foundry loosely recommends trying to keep video map file sizes in the vicinity of 50mb or less, to allow for adequate distribution. However, larger file sizes can be mitigated by users of Foundry through use of integrated support for S3, use of the preload feature, or if host and clients all have sufficient data transfer rates.

Generally speaking, webm is recommended for non-transparent map scenes and transparent tiles or tokens. The file size differences between mp4, m4v, and webm provide a significant gain without quality reduction.

Video files should ideally be rendered at approximately 30fps or less.

If your video includes audio, you can reduce impact on file size by shipping the audio as a separate file to be triggered by Foundry's audio framework. For more on audio assets, see the associated section below.


#### Video Codec and Bitrate

Foundry recommends codecs and bitrates optimized for online streaming. Variable Bit Rate (VBR) files rendered in h264 are usually the most performant while keeping quality high. If you are going to render the video in constrained or constant bitrate instead, consider a dual pass from a codec like libx264 at 2-5Mb/s. Quality percentage should be kept at 60-80% to reduce visual artefacts.


## Audio Assets

Foundry VTT has support for a wide variety of ways to use audio assets. You can read more about them in the Ambient Sounds and Playlists articles in the knowledge base. This article specifically focuses on optimizing assets and the best practices for handling audio files.

Particularly for streaming audio, file bitrate will generally be the most important factor in determining the smoothness and quality of an audio file played in Foundry.

A high bitrate provides higher-quality samples, but will be a bigger file that may not stream as quickly as the file is intended to play, and a low bitrate sample will be easier to stream over an internet connection, but may sound noticeably compressed, or have an overall lower quality.

Overall, 128kbps is the minimum audio quality recommended for use in Foundry, with 192kbps being the suggested maximum. 128kbps provides the most optimal tradeoff between audio quality and smaller file sizes. Using higher bitrate samples than 192kbps will not provide a noticeable change in quality to most players.


### Audio Formats

Foundry currently supports OGG, MP3, FLAC, WAV, WEBM, and OPUS file formats for audio playback. Choice of audio format is also an important consideration since compression style can affect the quality of the audio in major or minor ways. Reverb, cymbals, other drum samples, and certain pads or crisp-sounding instruments often suffer the most from audio compression, so results may vary from sample to sample. Some codecs are better at exporting particular sounds, voices, or even genres of music. Your choice of format and codec may also be limited by which tools or digital audio workstation (DAW) you are using.

The supported audio formats for Foundry are listed below, with the general advantages and disadvantages of using each.


#### Converting Audio

Audio programs (such as Audacity) are available freely online that allow for exporting audio in various formats, under various codecs. The aforementioned program Audacity supports exporting to WAV, and OGG, with free plugins online to add support for exporting to MP3, FLAC, and other file formats.

It's important to note that converting a file from one "lossy" format (such as MP3 or OGG) to another will simply recompress an already-compressed sound file and potentially reduce sound quality. Additionally, converting a lossy file to an uncompressed WAV format will not revert the loss in audio quality! It is best to have a lossless source file (such as a WAV or FLAC track) which is then converted once to your desired format for Foundry to use.

