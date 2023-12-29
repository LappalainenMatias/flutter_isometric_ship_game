import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/collision/collision_detector.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/foundation/game_object/render_data_builder.dart';
import 'package:anki/foundation/region/default_region.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/cannonball.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:anki/game_specific/noise/noise.dart';
import 'package:anki/game_specific/optimization/remove_hidden_tiles.dart';
import 'package:anki/game_specific/region/region_creation_queue.dart';
import 'package:anki/game_specific/terrain/terrain_creator.dart';
import 'package:anki/game_specific/textures/texture_rects.dart';
import 'package:flutter_test/flutter_test.dart';
import 'test_utils/test_objects.dart';
import 'dart:math';

/// Here we tests the performance of different parts of the game
/// These tests do not fail but there is times listed in the end so that we can
/// monitor the performance of the game
void main() {
  test("Returning data from webworkers", () {
    /// Trying to find best way to decode the data in the main thread because
    /// webworkers cannot return complex objects
    int width = 500;
    List<List> gameObjects = [];
    for (int i = 0; i < width; i++) {
      for (int j = 0; j < width; j++) {
        gameObjects.add(Tile(TileType.grass,
                IsoCoordinate(i.toDouble(), j.toDouble()), 0, 1, 0)
            .gameObjectToList());
      }
    }

    Stopwatch stopwatch = Stopwatch()..start();
    List<GameObject> gameObjectsDecoded = [];
    for (List decoded in gameObjects) {
      gameObjectsDecoded.add(Tile.fromList(decoded));
    }
    print("Decoding took ${stopwatch.elapsedMilliseconds} ms");

    /// Encode 500x500 tiles (ms)
    /// 1: 650, 670, 603 (Encode Gameobjects but create verticesDTO in the main thread)
    /// 2: 2091, 2079 (Tried encoding and decoding also the vertices)
    /// 3: 38, 40, 39 (Return the data in List<List> format and change that to gameobjects in the main thread)
  });

  test("Noise performance", () {
    var first = NoiseCreator(TestMapCreationRules(), 1);
    int width = 1024;
    Stopwatch stopwatch = Stopwatch()..start();
    first.createComplexNoise(width, width, 0, 0);
    print("OpenSimplexNoise took ${stopwatch.elapsedMilliseconds}ms");
    stopwatch.reset();

    /// NoiseCreator_open_simplex_2 also has better quality than OpenSimplexNoise in web
    /// OpenSimplexNoise: 585 ms
    /// NoiseCreator_open_simplex_2: 243 ms
  });

  test("Create region from game objects", () {
    List<StaticGameObject> staticGameObjects = [];
    for (int i = 0; i < 62 * 62; i += 1) {
      staticGameObjects.add(Tile(
          TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1, 0));
    }
    staticGameObjects.sort();
    var bottomCoordinate = const IsoCoordinate(0, 0);

    Stopwatch stopwatch = Stopwatch()..start();
    DefaultRegion(bottomCoordinate, staticGameObjects);
    print("Creating region took ${stopwatch.elapsedMilliseconds} ms");

    /// Create 62x62 gameobjects and make region out of them
    /// 1. 21, 22, 22
    /// 2. 16, 16, 16 (Removing sort from the region creation)
    /// 3. 6, 6, 6 (from vertices to atlas)
  });

  test('Visiblity checker', () {
    var tiles = <Tile>[];
    for (int i = 0; i < 128 * 128; i++) {
      tiles.add(
        Tile(
            TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1, 0),
      );
    }
    Stopwatch stopwatch = Stopwatch()..start();
    removeHiddenGameObjects(tiles);
    stopwatch.stop();
    print('Visibility checker took ${stopwatch.elapsedMilliseconds} ms');

    /// 128 * 128 tiles
    /// 1: 1977, 1959, 1955
    /// 2: 1260, 1243, 1265 (Changed set to hashset)
    /// 3: 24, 24, 24 (Changed from custom Point3D class to String)
  });

  test('GetAllGameObjects', () {
    var region = DefaultRegion(const IsoCoordinate(0, 0), []);
    var regionCreator = TerrainCreator();
    region.changeStaticGameObjects(
        regionCreator.create(32, 32, 0, 0) as List<StaticGameObject>);
    Stopwatch stopwatch = Stopwatch()..start();
    for (int i = 0; i < 1000; i++) {
      region.getGameObjects();
    }
    stopwatch.stop();
    print(
        'GetAllGameObjects took ${stopwatch.elapsedMicroseconds} microseconds');
  });

  test('Create region game objects', () {
    TerrainCreator regionCreator = TerrainCreator();
    Stopwatch stopwatch = Stopwatch()..start();
    regionCreator.create(32, 32, 0, 0);
    stopwatch.stop();
    print('Create region ${stopwatch.elapsedMilliseconds} milliseconds');

    /// 32 x 32
    /// 1. 64, 62, 62
  });

  test('Region creation queue performance', () {
    var camera = DefaultCamera(center: const IsoCoordinate(0, 0));
    var regionCreationQueue = DefaultRegionTerrainCreationQueue(camera);
    var list = [];
    for (int i = 0; i < 100 * 100; i++) {
      list.add(DefaultRegion(IsoCoordinate(i.toDouble(), i.toDouble()), []));
    }
    Stopwatch stopwatch = Stopwatch()..start();
    for (var item in list) {
      regionCreationQueue.add(item);
      //regionCreationQueue.next();
    }
    stopwatch.stop();
    print(
        'Region creation queue took ${stopwatch.elapsedMilliseconds} milliseconds');
  });

  test('Create cube drawing data', () {
    List<IsoCoordinate> coordinates = [];
    for (int i = 0; i < 1024 * 1024; i++) {
      coordinates.add(IsoCoordinate(i.toDouble(), i.toDouble()));
    }
    Stopwatch stopwatch = Stopwatch()..start();
    for (var coordinate in coordinates) {
      createRenderingData(
          SpriteSheetItem.shipRedDownA1.getBorders(), coordinate, 1);
    }
    stopwatch.stop();
    print(
        'createDrawingDTO took ${stopwatch.elapsedMilliseconds} milliseconds');

    /// 1024 * 1024, ms
    /// 1: 63, 64, 67
  });

  test("Region to drawing data", () {
    TerrainCreator regionCreator = TerrainCreator();
    var regionGround = regionCreator.create(128, 128, 0, 0);
    var region = DefaultRegion(const IsoCoordinate(0, 0), regionGround);
    for (int i = 0; i < 1000; i++) {
      var cannonball = Cannonball.defaultCannonball(getRandomId());
      cannonball.bottomCenter = IsoCoordinate(
          Random().nextInt(1000).toDouble(), Random().nextInt(1000).toDouble());
      region.addGameObject(cannonball);
    }
    Stopwatch stopwatch = Stopwatch()..start();
    region.getRenderingData();
    stopwatch.stop();
    print('Region to drawing data took ${stopwatch.elapsedMilliseconds} ms');

    /// 128 x 128 + 1000, ms
    /// 1: 123, 116, 117
    /// 2: 10, 11, 11 (Removed merging of two lists)
  });

  test("Collision detector performance", () {
    var regionCreator = TerrainCreator();
    var regionGround = regionCreator.create(256, 256, 0, 0);
    var cannonball = Cannonball.defaultCannonball(getRandomId());
    Stopwatch stopwatch = Stopwatch()..start();
    findCollisions(regionGround, cannonball);
    stopwatch.stop();
    print('Collision detection took ${stopwatch.elapsedMilliseconds} ms');

    /// 256 x 256, ms
    /// 1: 28, 29, 27
    /// 2: 17, 18, 17 (Skip collision detection for invisible objects)
    /// 3: 12, 12, 12 (Skip other one is above water and other one is below water)
  });
}
