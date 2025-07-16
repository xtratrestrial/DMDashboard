# Release 9.220 | Foundry Virtual Tabletop

Source: https://foundryvtt.com/releases/9.220

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Release 9.220


## Version 9 Prototype


##### August 04, 2021


## Foundry Virtual Tabletop - Version 9 Prototype 1 Update Notes

Hello and welcome to the exciting release of Foundry Virtual Tabletop Version 9 Prototype 1, the very first release in the Version 9 series of updates. The major themes that we'll be focusing on in Version 9 include sweeping changes for Lighting and Vision rendering, support for our first implementation of support for Cards and Decks (the highly sought after feature voted for by our Patreon supporters) and much more!

WARNING: Updates on the Prototype channel provide the implementation of major new features which are likely to introduce unforeseen bugs, breakages to existing game systems or modules, or other problems which will be disruptive to the usage of the software. Do not install this update unless you are doing so for the specific purposes of testing, it is not intended for use in 'live game' scenarios. The purpose of Prototype builds are to allow new experimental features to be tested and to help developers to begin the process of updating packages which are impacted by these changes. If you chose to update to this version you expose yourself to serious risk of having a bad experience. Please take this warning to heart.

Be certain to carefully back up any critical user data before installing this update.


### Update Highlights

For Version 9 Prototype 1 we returned to the Canvas Lighting and Vision engine that last saw major upgrades in the Version 7 series of updates. The existing quadtree algorithmic approach to vision calculation brought us major improvements, but was not without its faults. V9p1 ushers in a new approach to lighting and vision rendering which is both more performant and more accurate compared to Version 7. Version 9 also introduces a suite of new "Adaptive Lighting" features, which completely change the way light is rendered and provide new, more natural lighting effects.


#### Adaptive Lighting

Allow us to introduce a brand new system we are calling "Adaptive Lighting." Replacing the previous multiplicative method of light blending, Adaptive Lighting defers the light source rendering until the canvas has rendered all other layers. By doing this 'deferred' lighting pass, the light is able to adapt to the color of what is below it, and allows multiple light sources of differing colors to smoothly blend. The result is that light sources provide a much more natural and clear appearance of light as it interacts with tokens and map textures. We'd like to thank SecretFire (who some of you may know from the Token Magic FX module) for making amazing and ongoing contributions to this effort and for the insight they have provided which helped to make this possible.

Adaptive lighting gave us the opportunity to implement a number of new additional features for lights, including:

- Color Intensity now uses a gamma and reverse gamma to illuminate the adaptive texture below the light source without washing out illuminated textures.
- New "Coloration Technique" options allow for changing the way lights interact with canvas objects, including: Internal Halo (useful for small intense lights), Color Burn (which sharply illuminates pixel outlines), Internal Color Burn (which only applies within the bright radius), Low and High Absorption (which changes what levels the light color applies to), and Invert Absorption. Each of these can be found under the new Advanced Options menu.
- Luminosity allows for more fine-tuning of light appearance by changing how bright the light is separately from the color intensity.
- Darkness sources are now controlled by Luminosity. If you enter a negative value for the luminosity level it becomes a 'darkness' source, which will reduce the light in its area of effect. Darkness sources can now be given a color, and all animations now affect darkness sources in addition to just Roiling Darkness and Black Hole.
- Sliders have been added for "Background Saturation", "Background Contrast", and "Background Shadows" which can be used to fine tune the intensity of a light's color, sharpness, or its method of darkness at the edges.
- A toggle for "Gradual Illumination" allows you to have lights which smoothly transition between dim and bright light.
- We also modified the way walls interact with light sources, adding new menu options to walls to allow them to be configured to restrict vision, to restrict light, or to restrict both.


#### New Light Animations

With the addition of all the awesome advanced features of Adaptive Lighting, we were able to implement some new lighting animations and some new configuraiton options for animated lights. In addition to the new light animations listed below, Animation Speed can now be set to 0 to stop the animation but provide a light source with the appearance of the effect, and a Reverse Direction toggle allows you to invert the behaviour of the animation.

- Swirling Rainbow - a mesmerizing, spinning chroma effect which swirls.
- Radial Rainbow - a chroma effect which emanates outward from a central origin point.
- Fairy Light - a combination of chroma and ghostly light.
- Bewitching Wave - an alternative mesmerizing light source which uses a less structured wave pattern.
- Vortex - A swirling vortex for all your portal and maelstrom needs.


#### Vision Performance and Accuracy

The Lighting and Vision engine now uses a new method of polygon computation, a "Radial Sweep" approach. By eliminating unnecessary rays we are now able to calculate vision more accurately and with significantly improved performance, which allowed us to also improve performance in a number of other adjacent areas of the canvas code. Special thanks goes out to Stäbchenfisch whose module Lichtgeschwindigkeit helped inspire this approach. This new method of vision calculation reduces the amount of processing overhead for line of sight polygons, wall detection and collision, fog of war rendering, and overhead tile occlusion. This set of approaches for improved rendering is also being leveraged to cull the rendering of canvas objects which aren't within the current field of view for some significant performance improvements.

Canvas objects which are obscured (for example: lights below Roof Tiles) are now rendered more performantly and Overhead Tiles themselves now benefit from better detection of shadows and other partially transparent pixels. Map notes which are not within the visible canvas space for a token are now no longer rendered. Lastly, an improvement to the canvas overall: HUD elements such as labels or controls now render above other canvas elements intuitively, allowing for these elements to not be obscured by fog of war or blocked by the rendering of of canvas darkness.


#### New Approach to Versioning

You may have noticed that we've stopped using the 0.x.y labels for our versions! After much consideration, we have chosen to change our approach to versioning to something a little more specific to Foundry Virtual Tabletop and its phases of development. You can find out more about it here. This will change the way version information is displayed, but also provides our community developers with key benefits: Packages can now have their compatibility set to an entire Version, reducing the need to update compatibility flags as frequently, and our new approach to versioning provides an expanded period for community developers to give feedback on API changes.


### Breaking Changes


#### Documents and Data

- The algorithms used to compute Line of Sight LOS (or FOV) polygons have been factored out as a subclass of PointSourcePolygon and can be configured as CONFIG.Canvas.losBackend. This allows the use of different computation algorithms for different performance modes or scenes.
- The TextureLoader now caches BaseTexture instances instead of Texture instances, allowing textures to be safely destroyed in cases where multiple sprites are all loaded from the same texture cache.
- The PointSource class has been expanded and split into subclass implementations for LightPointSource, SightPointSource, and SoundPointSource to handle different source types.
- The canvas layers have been reorganized to better suit handling adaptive lighting and allow for the creation of a CachedContainer for all layers below the lighting engine.
- The rendering of interface elements such as control icons, nameplates, or tooltips now occurs on a separate canvas layer which is rendered overtop of other layers that might otherwise obscure these informative elements.
- The existing lighting shaders have been rewritten in order to implement adaptive lighting computations, illumination modes, and coloration modes.
- Wall vision restrictions now allow you to separate restriction of light from restriction of sight.
- The data structure and interface used to persist and edit light emission configuration for Token objects has been improved, and now provides separate configuration menus for these advanced features through the use of tabs.
- The EffectsLayer (canvas.effects) he been renamed to WeatherLayer (canvas.weather) to be more explicit about it's purpose and functionality.
- The parameter "noUpdateFog" for PerceptionManager#refresh and PerceptionManager#update has been renamed to "skipUpdateFog" in the interest of clarity.
- The CONFIG.Canvas object has been restructured to define both "groups" and "layers" which organize the previous layers into the groups to which they belong.

`PointSourcePolygon``CONFIG.Canvas.losBackend``TextureLoader``BaseTexture``Texture``PointSource``LightPointSource``SightPointSource``SoundPointSource``CachedContainer``EffectsLayer (canvas.effects)``WeatherLayer (canvas.weather)``PerceptionManager#refresh``PerceptionManager#update``CONFIG.Canvas`
#### Interface and Applications

- The LightConfig application has been renamed to AmbientLightConfig for consistency with the naming convention for other Document configuration sheets.

`LightConfig``AmbientLightConfig`
#### Other Changes

- Socket handling for joining games has been improved by adding a new socket method called "getJoinData" which specifically vends only the data needed for an unauthenticated user to join a game world.

`"getJoinData"`
### New Features


#### Architecture and Infrastructure

- Packages such as Worlds, Systems, and Modules may now define their compatibility based on an entire Version of the software instead of particular Releases. For example, a module may now set itself as compatible with V9, and will be considered compatible with any Release within that Version.
- The version comparison logic has been updated to match our newly updated approach to Versioning. For more information see the article: https://foundryvtt.com/article/versioning/
- Server administrator authentication has been moved to a new /auth route instead of presenting an authentication form that is part of the larger /setup view.

`/auth``/setup`
#### The Game Canvas

- The Lighting engine now uses a new "Adaptive Lighting" mode which contextually blends light sources into the canvas view based on the context of the underlying scene. This provides a much more "realistic" feel for ambient light sources.
- Ambient Light sources now support configurable luminosity, allowing for control over how much illumination a light source produces and how that illumination interacts with the darkness level of a scene.
- Ambient Light sources now include new advanced configuration options including: coloration technique, luminosity, background saturation, contrast, background shadows, and color-inversion for much more fine-grained control over the appearance of light sources.
- The handling of falloff between bright and dim illumination is now configurable, allowing for smooth or blurred falloff instead of a sharp differentiation between bright and dim light.
- New animation options "Vortex" and "Bewitching Wave" have been added for Ambient Light sources.
- Three new animation options have been added to support rainbow-based light source effects.
- Support for an "Animation Reverse" attribute for Ambient Lights has been added, allowing a light animation to be played in the opposite direction to provide a different visual appearance.
- Ambient Light Sources now support an expanded range of light animation speeds, including zero which will produce "animation" appearances that are static and motionless.
- Light animation options which were previously Darkness-only (such as Roiling Mass and Black Hole) now support positive-light animations with custom chosen colors.
- Vision polygon computation now uses a new "Radial Sweep" method which eliminates unnecessary rays by maintaining the set of active walls sorted by angle with respect to origin, resulting in better performance and accuracy for vision calculations.
- The Lighting engine now uses a new culling algorithm which dynamically reduces the scope of canvas rendering by excluding objects which are external to the current viewport, improving overall performance and reliability of calculated vision.
- Instead of drawing the LOS polygon as a PIXI.Graphic in multiple locations (sight layer, lighting layer, fog of war exploration), it is now rendered once to a RenderTexture and uses a Sprite with the same baseTexture as necessary.
- The calculation used to determine dim light color has been adjusted to weight between the bright color and the background color instead of the bright color and darkness.
- When computing a Sight Polygon, the bounding box of the polygon collision points are now stored, allowing collision detection to use a more efficient rectangular-based approach for determining whether a point is within the polygon. This is an overall performance and accuracy improvement for Sight polygon rendering.
- Updates to the Fog of War now return the Render Texture to a reusable pool instead of re-creating it each time it updates, improving performance of Fog of War operations.
- Instead of re-drawing roof sprites every lighting render to suppress the light sources they contain, the roofs container is now drawn only once and the contained sprites are toggled as necessary.
- The occlusion logic used for roof tiles has been updated and now uses the the new Line of Sight and Vision rendering algorithms, this should be more performant when handling occlusion calculations.
- When configuration is set to "Maximum" performance mode and the FPS slider is set to 60, the canvas will be treated as no longer having a capped framerate.
- Adaptive lighting shaders are now updated with screen dimensions when the canvas is resized and overhead roof masking textures are provided to suppress lights that are beneath a roof.
- MSAA usage for most canvas elements has been reduced, including evaluation of the new SmoothGraphics implementation, improving canvas performance for all users but particular beneficial for those on older computers.
- Drag token vision for multiple tokens simultaneously now uses perception update batching for improved overall performance.
- Grid line anti-aliasing has been improved in order to avoid issues where diagonal lines for hexagonal grids disappear at higher levels of zoom.
- Visibility of Map Note icons will now be filtered based on the vision polygon of current tokens to prevent showing map notes to players for regions of a scene which they have not yet explored.
- A set of "Performance Modes" have been implemented as settings which provide preset configurations and allow users to control the optimization and performance of the software.
- The algorithm used to create a masking texture for an overhead tile has been improved to remove partially transparent pixels which might occur as a result of artifacts or shadows in the original image.

`PIXI.Graphic``RenderTexture`
#### Interface and Applications

- A new configurable setting has been added which allows the toggling of an FPS meter that will appear in the bottom-right of the canvas interface.
- The presentation and description of software versioning information on both the Update Software tab and Configuration tab have been updated to match the new versioning language.
- The displayed version information for Foundry VTT has been refactored to show only the top level Version on the world login screen, without including Release or Build number.
- The code architecture of server-side views has been improved to make the express routing code more maintainable.


### API Improvements


#### Documents and Data

- A new optional "strict" parameter has been added to deepClone which, if true, throws an error when encountering an object that cannot be cloned.
- The Combatant document has been refactored to maintain references to the TokenDocument that it represents, rather than the placed Token object.

`deepClone``TokenDocument`
#### The Game Canvas

- A new subclass of PIXI.Mesh named SamplerMesh has been created and is designed to be used with a corresponding BaseSamplerShader to render a texture with faster performance than using a PIXI.Sprite.
- The WallsLayer.getRayCollisions method has been redesigned and now avoids reliance on the old QuadtreeExpansion algorithm.
- Corrected the behavior and documentation of TokenLayer#toggleCombat to ensure that it returns an array of Combatant documents.

`PIXI.Mesh``SamplerMesh``BaseSamplerShader``PIXI.Sprite.``WallsLayer.getRayCollisions``QuadtreeExpansion``TokenLayer#toggleCombat`
#### Documentation

- The documentation for WeatherLayer#emitters (formerly EffectsLayer#emitters) has been updated with appropriate references to PIXI.particles.Emitter[]. This stores the array of active particle emitter instances which are active within a Scene.

`WeatherLayer#emitters``EffectsLayer#emitters``PIXI.particles.Emitter[]`
### Bug Fixes


#### Documents and Data

- To address issues where local cache expiration could prevent a compendium document from being updated or deleted, the handling for compendium caching has been redesigned to check for an uncached entry as part of the update or deletion workflow.


#### The Game Canvas

- Some instances of wall placement could result in sight polygons failing to accurately detect wall visibility, allowing vision to pierce walls. The new "Radial Sweep" approach to vision rendering should resolve these issues.
- Global or Universal Ambient Lights should now correctly reveal tokens positioned within their radius.
- Corrected an issue which could cause Global Ambient Light sources set to a negative radius type to disappear when not within line of sight.
- Controls (Pause/Play) for video tiles no longer incorrectly affect all instances of tiles which have the same filename.
- As part of the layer rendering reorganization and refactor, important UI labels should now be correctly rendered above the fog of war.

`Global`