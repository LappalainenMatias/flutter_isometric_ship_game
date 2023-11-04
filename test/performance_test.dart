import 'package:anki/camera/camera.dart';
import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/noise/noise.dart';
import 'package:anki/optimization/visibility_checker.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/region/region.dart';
import 'package:anki/region/region_creation/region_creator.dart';
import 'package:anki/region/region_creation_queue.dart';
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
          TileType.grass, IsoCoordinate(i.toDouble(), i.toDouble()), 0, 1));
    }
    staticGameObjects.sort();
    IsoCoordinate bottomCoordinate = const IsoCoordinate(0, 0);

    Stopwatch stopwatch = Stopwatch()..start();
    Region(bottomCoordinate, staticGameObjects);
    print("Creating region took ${stopwatch.elapsedMilliseconds} ms");

    /// Create 62x62 gameobjects and make region out of them
    /// 1. 21, 22, 22
    /// 2. 16, 16, 16 (Removing sort from the region creation)
    /// 3. 6, 6, 6 (from vertices to atlas)
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
      toVertices(TileType.ice, isoCoordinates[i], -1);
    }

    stopwatch.stop();

    print('Creating cubes ${stopwatch.elapsedMilliseconds} ms');

    /// 1: 56, 56, 50 (With under water tiles)
    /// 2: 50, 50, 48 (Without under water tiles)
    /// 3: 15, 16, 17 (Adding directly to FloatList32 or IntList32)
    /// 4: 28, 28, 21 (You can now set left, right and top side visiblity)
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

  test('GetAllGameObjects', () {
    Region region = Region(const IsoCoordinate(0, 0), []);
    var regionCreator = RegionCreator();
    region.changeStaticGameObjects(
        regionCreator.create(32, 32, 0, 0) as List<StaticGameObject>);
    Stopwatch stopwatch = Stopwatch()..start();
    for (int i = 0; i < 1000; i++) {
      region.getAllGameObjects();
    }
    stopwatch.stop();
    print(
        'GetAllGameObjects took ${stopwatch.elapsedMicroseconds} microseconds');
  });

  test('Create region game objects', () {
    RegionCreator regionCreator = RegionCreator();
    Stopwatch stopwatch = Stopwatch()..start();
    regionCreator.create(32, 32, 0, 0);
    stopwatch.stop();
    print('Create region ${stopwatch.elapsedMilliseconds} milliseconds');

    /// 32 x 32
    /// 1. 64, 62, 62
  });

  test('Region creation queue performance', () {
    var camera = Camera(center: const IsoCoordinate(0, 0));
    var regionCreationQueue = RegionCreationQueueImpl(camera);
    var list = [];
    for (int i = 0; i < 100 * 100; i++) {
      list.add(AddGameObjectsTo(IsoCoordinate(i.toDouble(), i.toDouble())));
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
      createDrawingDTO(TileType.ice, coordinate, 1);
    }
    stopwatch.stop();
    print(
        'createDrawingDTO took ${stopwatch.elapsedMilliseconds} milliseconds');

    /// 1024 * 1024, ms
    /// 1: 63, 64, 67
  });
}
