import 'dart:math';
import 'package:anki/game_specific/terrain/find_terrain_holes.dart';

import '../../game_specific/game_object/tile_creator.dart';
import '../../game_specific/game_object/tile.dart';
import 'terrain_creation_rules.dart';
import '../../game_specific/noise/noise.dart';
import '../../game_specific/optimization/remove_hidden_tiles.dart';

/// This class and the classes that it uses should NOT use dart:ui so that
/// we can create regions concurrently (dart:ui only runs in the main thread).
class TerrainCreator {
  final _mapCreationRules = SvalbardCreationRules();
  late final noise = NoiseCreator(_mapCreationRules);

  /// Returns a sorted list of all game objects in the region.
  List<Tile> create(int w, int h, int x, int y) {
    final (elevation, moisture) = noise.createComplexNoise(w, h, x, y);
    List<Tile> tiles = _createTiles(x, y, elevation, moisture);
    //allGameObjects.addAll(_createNaturalItems(tiles));
    removeHiddenGameObjects(tiles);
    var allGameObjects = List<Tile>.from(tiles);
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
        tiles.add(TileCreator.create(
            elevationRow[y].floor().toDouble(),
            moistureRow[y],
            Point((topLeftX + x).toDouble(), (topLeftY + y).toDouble()),
            _mapCreationRules.tileRules()));
      }
    }

    /// Fill holes in the tile map
    List<List<int>> intMap =
        elevationNoise.map((e) => e.map((e) => e.floor()).toList()).toList();
    var holes = findTerrainHoles(intMap);
    for (var hole in holes) {
      var x = hole.x;
      var y = hole.y;
      tiles.add(TileCreator.create(
          hole.z.toDouble(),
          moistureNoise[x][y],
          Point((topLeftX + x).toDouble(), (topLeftY + y).toDouble()),
          _mapCreationRules.tileRules()));
    }
    return tiles;
  }
}
