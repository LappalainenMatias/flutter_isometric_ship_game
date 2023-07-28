import 'dart:math';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/utils/iso_coordinate.dart';
import '../../camera/level_of_detail.dart';
import '../../game_objects/create_game_object.dart';
import '../../game_objects/game_object.dart';
import '../../game_objects/static/ground/tile.dart';
import '../../game_objects/static/natural_items/natural_items.dart';
import '../../noise/noise.dart';
import '../../optimization/tile_map_simplifier.dart';

/// This class and the classes that it uses should NOT use dart:ui so that
/// we can create regions concurrently (dart:ui only runs in main thread).
/// Because of this we cannot create Vertices or use dart:ui Colors.
class RegionCreator {
  final MapCreationRules _mapCreationRules = SvalbardCreationRules();

  /// Creates game objects for the spefic level of detail and the details lower than that.
  RegionDTO create(IsoCoordinate regionBottom, int width, int height,
      int startX, int startY, LevelOfDetail minLOD) {
    Map<LevelOfDetail, List<GameObject>> gameObjectByLOD = {};
    for (var lod in LevelOfDetail.values) {
      if (lod.tileMinSize < minLOD.tileMinSize) continue;

      final noise = NoiseCreator(_mapCreationRules);

      /// Todo rename noises[0] and noises[1] to elevationNoise and moistureNoise
      var noises = noise.createComplexNoise(width, height, startX, startY, lod);

      List<List<SingleTile>> tileMatrix =
          _createTiles(width, height, startX, startY, noises[0], noises[1]);

      /// With low level of detail the noise details is low and because of this
      /// tile simplification returns fewer tiles.
      List<Tile> tiles = removeDeepUnderWaterTiles(simplifyTiles(tileMatrix));

      var allObjects = [
        ...tiles,
        if (lod.containsNaturalItems) ..._createNaturalItems(tileMatrix)
      ];

      gameObjectByLOD[lod] = allObjects;
    }
    return RegionDTO(regionBottom, gameObjectByLOD);
  }

  List<List<SingleTile>> _createTiles(int width, int height, int startX,
      int startY, List elevationNoise, List moistureNoise) {
    List<List<SingleTile>> tileMatrix = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      List<SingleTile> row = [];
      for (var y = 0; y < height; y++) {
        row.add(SingleTileCreator.create(
          elevationRow[y],
          moistureRow[y],
          Point((startX + x).toDouble(), (startY + y).toDouble()),
          _mapCreationRules.tileRules(),
        ));
      }
      tileMatrix.add(row);
    }
    return tileMatrix;
  }

  List<NaturalItem> _createNaturalItems(List<List<SingleTile>> tileMatrix) {
    List<NaturalItem> naturalItems = [];
    for (var x = 0; x < tileMatrix.length; x++) {
      for (var y = 0; y < tileMatrix[0].length; y++) {
        NaturalItem? naturalItem = NaturalItemCreator.create(
          tileMatrix[x][y].type,
          tileMatrix[x][y].isoCoordinate,
          tileMatrix[x][y].elevation,
          _mapCreationRules.naturalItemProbabilities(),
        );

        if (naturalItem != null) {
          naturalItems.add(naturalItem);
        }
      }
    }
    return naturalItems;
  }
}

class RegionDTO {
  final IsoCoordinate regionBottomCoordinate;
  final Map<LevelOfDetail, List<GameObject>> gameObjectsByLOD;

  RegionDTO(this.regionBottomCoordinate, this.gameObjectsByLOD);
}
