import 'dart:math';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/optimization/visibility_checker.dart';
import '../../../camera/level_of_detail.dart';
import '../../../game_objects/create_game_object.dart';
import '../../../game_objects/game_object.dart';
import '../../../game_objects/static/ground/tile.dart';
import '../../../game_objects/static/natural_items/natural_items.dart';
import '../../../noise/noise.dart';

/// This class and the classes that it uses should NOT use dart:ui so that
/// we can create regions concurrently (dart:ui only runs in the main thread).
/// Because of this we cannot create Vertices or use dart:ui Colors.
class RegionCreator {
  final _mapCreationRules = SvalbardCreationRules();
  late final noise = NoiseCreator(_mapCreationRules);

  List<GameObject> create(int w, int h, int x, int y, LevelOfDetail lod) {
    final (elevation, moisture) =
        noise.createComplexNoise(w, h, x, y, lod.tileMinWidth);
    List<Tile> tiles = _createTiles(x, y, elevation, moisture, lod.tileMinWidth);
    var allGameObjects = List<GameObject>.from(tiles);
    visibilityChecker(allGameObjects, lod.tileMinWidth);
    if (lod.containsNaturalItems) {
      final naturalItems = _createNaturalItems(tiles);
      allGameObjects.addAll(naturalItems);
    }
    visibilityChecker(allGameObjects, lod.tileMinWidth);
    allGameObjects.removeWhere((element) => !element.isVisible());
    return allGameObjects..sort();
  }

  List<Tile> _createTiles(
    int startX,
    int startY,
    List<List<double>> elevationNoise,
    List moistureNoise,
    int tileWidth,
  ) {
    List<Tile> tiles = [];
    for (var x = 0; x < elevationNoise.length; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < elevationNoise[0].length; y++) {
        double height = elevationRow[y];
        if (height <= 0) {
          final elevation = (height / tileWidth).floor() * tileWidth.toDouble();
          tiles.add(TileCreator.create(
            elevation,
            moistureRow[y],
            Point((startX + x * tileWidth).toDouble(),
                (startY + y * tileWidth).toDouble()),
            _mapCreationRules.tileRules(),
            tileWidth,
          ));
        } else {
          /// Todo this need refactoring
          while (height > 0) {
            final elevation =
                (height / tileWidth).floor() * tileWidth.toDouble();
            tiles.add(TileCreator.create(
              elevation,
              moistureRow[y],
              Point((startX + x * tileWidth).toDouble(),
                  (startY + y * tileWidth).toDouble()),
              _mapCreationRules.tileRules(),
              tileWidth,
            ));
            height -= tileWidth;
          }
        }
      }
    }
    return tiles;
  }

  List<GameObject> _createNaturalItems(List<Tile> tiles) {
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
