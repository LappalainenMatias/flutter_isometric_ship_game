import 'dart:math';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
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

  ({IsoCoordinate regionBottomCoordinate, List<GameObject> gameObjects}) create(
      IsoCoordinate regionBottom,
      int width,
      int height,
      int startX,
      int startY,
      LevelOfDetail lod) {
    var (elevation, moisture) = noise.createComplexNoise(
        width, height, startX, startY, lod.tileMinWidth);

    List<Tile> tiles =
        _createTiles(startX, startY, elevation, moisture, lod.tileMinWidth)
          ..sort();

    return (regionBottomCoordinate: regionBottom, gameObjects: tiles);
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
        tiles.add(TileCreator.create(
          elevationRow[y],
          moistureRow[y],
          Point((startX + x * tileWidth).toDouble(),
              (startY + y * tileWidth).toDouble()),
          _mapCreationRules.tileRules(),
          tileWidth,
        ));
      }
    }
    return tiles;
  }

  List<NaturalItem> _createNaturalItems(List<Tile> tiles) {
    List<NaturalItem> naturalItems = [];
    for (var tile in tiles) {
      NaturalItem? naturalItem = NaturalItemCreator.create(
        tile.type,
        tile.isoCoordinate,
        tile.elevation,
        _mapCreationRules.naturalItemProbabilities(),
      );

      if (naturalItem != null) {
        naturalItems.add(naturalItem);
      }
    }
    return naturalItems;
  }
}
