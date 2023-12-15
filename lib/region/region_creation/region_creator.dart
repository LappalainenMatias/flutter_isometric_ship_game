import 'dart:math';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/optimization/remove_hidden_tiles.dart';
import '../../../game_objects/create_game_object.dart';
import '../../../game_objects/game_object.dart';
import '../../../game_objects/static/ground/tile.dart';
import '../../../game_objects/static/natural_items/natural_items.dart';
import '../../../noise/noise.dart';

/// This class and the classes that it uses should NOT use dart:ui so that
/// we can create regions concurrently (dart:ui only runs in the main thread).
class RegionCreator {
  final _mapCreationRules = SvalbardCreationRules();
  late final noise = NoiseCreator(_mapCreationRules);

  /// Returns a sorted list of all game objects in the region.
  List<StaticGameObject> create(int w, int h, int x, int y) {
    final (elevation, moisture) = noise.createComplexNoise(w, h, x, y);
    List<Tile> tiles = _createTiles(x, y, elevation, moisture);
    //allGameObjects.addAll(_createNaturalItems(tiles));
    removeHiddenGameObjects(tiles);
    var allGameObjects = List<StaticGameObject>.from(tiles);
    allGameObjects.sort();
    return allGameObjects;
  }

  List<Tile> _createTiles(
    int topLeftX,
    int topLeftY,
    List<List<double>> elevationNoise,
    List<List<double>> moistureNoise,
  ) {
    List<Tile> tiles = [];
    for (var x = 0; x < elevationNoise.length; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < elevationNoise[0].length; y++) {
        double height = elevationRow[y];
        if (height <= 0) {
          final elevation = height.floor().toDouble();
          tiles.add(TileCreator.create(
            elevation,
            moistureRow[y],
            Point((topLeftX + x).toDouble(), (topLeftY + y).toDouble()),
            _mapCreationRules.tileRules(),
          ));
        } else {
          /// Todo this need refactoring
          while (height >= 0) {
            final elevation = height.floor().toDouble();
            tiles.add(TileCreator.create(
                elevation,
                moistureRow[y],
                Point((topLeftX + x).toDouble(), (topLeftY + y).toDouble()),
                _mapCreationRules.tileRules()));
            height -= 1;
          }
        }
      }
    }
    return tiles;
  }

  List<NaturalItemCube> _createNaturalItems(List<Tile> tiles) {
    List<NaturalItemCube> allNaturalItems = [];
    for (var tile in tiles) {
      List<NaturalItemCube> naturalItemCubes = NaturalItemCreator.create(
        tile.type,
        tile.isoCoordinate,
        tile.elevation,
        _mapCreationRules.naturalItemProbabilities(),
      );

      if (naturalItemCubes.isNotEmpty) {
        allNaturalItems.addAll(naturalItemCubes);
      }
    }
    return allNaturalItems;
  }
}
