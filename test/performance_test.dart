import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/noise/noise.dart';
import 'package:anki/optimization/visibility_checker.dart';
import 'package:anki/textures/texture_coordinates.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

import 'test_utils/test_objects.dart';

/// Here we tests the performance of different parts of the game
/// These do NOT test anything
void main() {
  test("Returning data from webworkers", () {
    /// Trying to find best way to decode the data in the main thread because
    /// webworkers cannot return complex objects

    int width = 500;
    List<List> gameObjects = [];
    for (int i = 0; i < width; i++) {
      for (int j = 0; j < width; j++) {
        gameObjects.add(Tile(
                TileType.grass, IsoCoordinate(i.toDouble(), j.toDouble()), 0, 1)
            .gameObjectToList());
      }
    }

    Stopwatch stopwatch = Stopwatch()..start();
    List<GameObject> gameObjectsDecoded = [];
    for (List gameObject in gameObjects) {
      gameObjectsDecoded.add(GameObject.gameObjectFromList(gameObject));
    }
    print("Decoding took ${stopwatch.elapsedMilliseconds} ms");

    /// Encode 500x500 tiles (ms)
    /// 1: 650, 670, 603 (Encode Gameobjects but create verticesDTO in the main thread)
    /// 2: 2091, 2079 (Tried encoding and decoding also the vertices)
    /// 3: 38, 40, 39 (Return the data in List<List> format and change that to gameobjects in the main thread)
  });

  test("Noise performance", () {
    NoiseCreator first = NoiseCreator(TestMapCreationRules(), 1);
    int width = 1024;
    Stopwatch stopwatch = Stopwatch()..start();
    first.createComplexNoise(
        width, width, 0, 0, LevelOfDetail.zoomlevel_0.tileMinWidth);
    print("OpenSimplexNoise took ${stopwatch.elapsedMilliseconds}ms");
    stopwatch.reset();

    /// NoiseCreator_open_simplex_2 also has better quality than OpenSimplexNoise in web
    /// OpenSimplexNoise: 585 ms
    /// NoiseCreator_open_simplex_2: 243 ms
  });

  test("Create region from game objects", () {
    List<GameObject> gameObjects = [];
    for (int i = 0; i < 62 * 62; i += 1) {
      gameObjects.add(Tile(
          TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1));
    }
    gameObjects.sort();
    IsoCoordinate bottomCoordinate = const IsoCoordinate(0, 0);

    Stopwatch stopwatch = Stopwatch()..start();
    Region region =
        Region(bottomCoordinate, gameObjects, LevelOfDetail.zoomlevel_0);
    print("Creating region took ${stopwatch.elapsedMilliseconds} ms");

    /// Create 62x62 gameobjects and make region out of them
    /// 1. 21, 22, 22
    /// 2. 16, 16, 16 (Removing sort from the region creation)
  });

  test('Create cube performance', () {
    Stopwatch stopwatch = Stopwatch()..start();
    List<IsoCoordinate> isoCoordinates = [];
    for (int i = 0; i < 256 * 256; i++) {
      isoCoordinates.add(IsoCoordinate(i.toDouble(), i.toDouble()));
    }

    print('Creating isoCoordinates ${stopwatch.elapsedMilliseconds} ms');

    stopwatch.reset();

    for (int i = 0; i < isoCoordinates.length; i++) {
      CubeVerticesCreator.toVertices(
          getTileTextureCoordinates(TileType.ice), isoCoordinates[i], -1);
    }

    stopwatch.stop();

    print('Creating cubes ${stopwatch.elapsedMilliseconds} ms');

    /// 1: 56, 56, 50 (With under water tiles)
    /// 2: 50, 50, 48 (Without under water tiles)
    /// 3: 15, 16, 17 (Adding directly to FloatList32 or IntList32)
  });

  test('GameObjects to vertices performance', () {
    List<GameObject> gameObjects = [];
    for (int i = 0; i < 512 * 512; i++) {
      gameObjects.add(
        Tile(TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1),
      );
    }

    Stopwatch stopwatch = Stopwatch()..start();

    var res = gameObjectsToVertices(gameObjects);

    stopwatch.stop();

    print('GameObjectsToVertices took ${stopwatch.elapsedMilliseconds} ms');

    /// 512*512 tiles
    /// 1: 65, 63, 65
    /// 2: 59, 71, 62 (Simplified list size calculation)
  });

  test('Visiblity checker', () {
    var tiles = <Tile>[];
    for (int i = 0; i < 128 * 128; i++) {
      tiles.add(
        Tile(TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1),
      );
    }
    Stopwatch stopwatch = Stopwatch()..start();
    visibilityChecker(tiles);
    stopwatch.stop();
    print('Visibility checker took ${stopwatch.elapsedMilliseconds} ms');
    /// 128 * 128 tiles
    /// 1: 1977, 1959, 1955
    /// 2: 1260, 1243, 1265 (Changed set to hashset)
    /// 3: 24, 24, 24 (Changed from custom Point3D class to String)
  });
}
