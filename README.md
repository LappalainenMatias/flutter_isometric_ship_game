# 2D isometric game made with Flutter

## Game world

## Rendering
All game objects are currently drawn with canvas.drawRawAtlas().
We first draw all under water game objects. After that we draw water plane and after 
that we draw all game objects that are above water. We use simple painter's algorithm. Each
game objects has nearness value that is used to determine the order of drawing. To make the rendering faster
we render whole regions at once. Also we do not update regions which only contain static game objects.
![readme_images/map_screenshot.png](readme_images/map_screenshot.png)
## Coordinates
"IsoCoordinates" are isometric coordinates and they are used when we want to change a Point (for example, procedural noise map) to isometric coordinates.
IsoX and IsoY are the coordinates where the game object is located in the game world and in the screen.
![readme_images/coordinates.png](readme_images/coordinates.png)

## Tests
Mostly unit tests, some integration tests and performance tests.

To run tests:```flutter test```

Coverage is in:```open coverage/html/lib/index.html```


## Todo
- Update readme Game world
- Fix performance issues with backend
- Online game object should have getGameState() so that we can get rid of toJson and fromJson in gameobjects
- Add max dt to game loop so that there is not too large jumps in game state