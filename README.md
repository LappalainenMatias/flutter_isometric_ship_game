# 2D isometric game made with Flutter
My simple custom 2D isometric game made with my own game engine. It contains a simple ```update() -> render() -> update()...``` game loop,
procedurally generated terrain, collision detection, online multiplayer, animations and rendering optimizations.

This is not a general purpose game engine. It is made for this specific game. I am more or less just experimenting and learning.

## Game world
The game map is made out of regions. Regions are 16x16 tiles wide.
Regions contain game objects. The game objects are divided into static and dynamic game objects.
Static game objects are game objects which do not get updated. For example, ground tiles are static game objects.
Dynamic game objects have ```update()``` method which is called every frame. The player and missiles are dynamic game objects.
If a region does not contain any dynamic game objects, we do not need to update that region. This is a big performance benefit.

![game_world.png](readme_images/game_world.png)

## Rendering
All game objects are currently drawn with canvas.drawRawAtlas().
We first draw all under water game objects. After that we draw water plane and lastly
draw all game objects that are above water. To make the rendering faster
we render whole regions at once. Because of this, all game objects need to be part of some region. 
To solve the correct rendering order, we use simple painter's algorithm. Each game object and region
has a nearness value which is used to sort the drawing order.

![map_screenshot.png](readme_images/map_screenshot.png)
## Coordinates
"IsoCoordinates" are isometric coordinates and they are used when we want to change a Point (for example, procedural noise map) to isometric coordinates.
IsoX and IsoY are the coordinates where the game object is located in the game world and in the screen.

![coordinates.png](readme_images/coordinates.png)
## Tests
Mostly unit tests, some integration tests and performance tests.

To run tests:```flutter test```

Coverage is in:```open coverage/html/lib/index.html```

## Todo
- Fix performance issues with backend
- Online game object should have getGameState() so that we can get rid of toJson and fromJson in gameobjects
- Add max dt to game loop so that there is not too large jumps in game state