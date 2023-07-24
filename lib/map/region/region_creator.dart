import 'dart:math';
import 'dart:typed_data';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/map/region/game_objects/game_object.dart';
import '../../utils/iso_coordinate.dart';
import '../../utils/noise.dart';
import '../../utils/tile_map_simplifier.dart';
import 'game_objects/static/ground/create_tile.dart';
import 'game_objects/static/ground/tile.dart';
import 'game_objects/static/natural_items/natural_items.dart';

/// This class and the classes that it uses should NOT use dart:ui so that
/// we can create regions concurrently. Because of this it cannot return vertices
/// but it can return the data for creating the vertices.
class RegionCreator {
  final MapCreationRules _mapCreationRules = SvalbardCreationRules();

  RegionDTO create(Point regionCoordinate, int width, int height,
      int startX, int startY) {
    final noise = Noise(_mapCreationRules);

    /// Todo rename noises[0] and noises[1] to elevationNoise and moistureNoise
    var noises = noise.create(width, height, startX, startY);

    List<List<SingleTile>> tileMatrix =
        _createTiles(width, height, startX, startY, noises[0], noises[1]);
    List<NaturalItem> naturalItems = _createNaturalItems(tileMatrix);
    List<Tile> simplifiedTiles = simplifyTiles(tileMatrix);
    List<Tile> filteredTiles = _removeDeepUnderWaterTiles(simplifiedTiles);
    List<GameObject> gameObjects = [...filteredTiles, ...naturalItems];
    return RegionDTO(
      regionCoordinate,
      gameObjects,
    );
  }

  List<List<SingleTile>> _createTiles(int width, int height, int startX,
      int startY, List elevationNoise, List moistureNoise) {
    List<List<SingleTile>> tileMatrix = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      List<SingleTile> row = [];
      for (var y = 0; y < height; y++) {
        row.add(getTile(
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

  List<Tile> _removeDeepUnderWaterTiles(List<Tile> simplifiedTiles) {
    List<Tile> filteredTiles = [];
    for (var i = 0; i < simplifiedTiles.length; i++) {
      if (simplifiedTiles[i].getElevation() > -5) {
        filteredTiles.add(simplifiedTiles[i]);
      }
    }
    return filteredTiles;
  }

  List<NaturalItem> _createNaturalItems(List<List<SingleTile>> tileMatrix) {
    List<NaturalItem> naturalItems = [];
    for (var x = 0; x < tileMatrix.length; x++) {
      for (var y = 0; y < tileMatrix[0].length; y++) {
        NaturalItem? naturalItem = getNaturalItem(
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
  final Point regionCoordinate;
  final List<GameObject> gameObjects;

  RegionDTO(
    this.regionCoordinate,
    this.gameObjects,
  );
}
