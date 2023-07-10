import 'dart:math';
import 'dart:typed_data';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/ground/tile.dart';
import 'package:anki/map/region/game_objects/ground/tile_creator.dart';
import 'package:anki/map/region/game_objects/natural_items/natural_items.dart';
import 'package:anki/utils/tile_map_simplifier.dart';
import '../../utils/iso_coordinate.dart';
import '../../utils/noise.dart';

/// We use seperate class for creating the region data because this class
/// does not use dart:ui and because of that it can be run concurrently
class RegionCreator {
  final _noise = Noise();

  RegionDTO create(IsoCoordinate regionCoordinate, int width, int height,
      int startX, int startY) {
    var noises = _noise.create(width, height, startX, startY);
    List<Tile> tiles =
        _createTiles(width, height, startX, startY, noises[0], noises[1]);
    List<NaturalItem> naturalItems = _createNaturalItems(
        width, height, startX, startY, noises[0], noises[1]);
    List<GameObject> gameObjects = [...tiles, ...naturalItems];
    gameObjects.sort();
    List<double> aboveWaterPositions = [];
    List<int> aboveWaterColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var gameObject in gameObjects) {
      List pc = gameObject.getVertices();
      if (gameObject.isUnderWater()) {
        underWaterPositions.addAll(pc[0]);
        underWaterColors.addAll(pc[1]);
      } else {
        aboveWaterPositions.addAll(pc[0]);
        aboveWaterColors.addAll(pc[1]);
      }
    }
    return RegionDTO(
      regionCoordinate,
      (aboveWaterPositions.length + underWaterPositions.length) ~/ 2,
      Float32List.fromList(aboveWaterPositions),
      Int32List.fromList(aboveWaterColors),
      Float32List.fromList(underWaterPositions),
      Int32List.fromList(underWaterColors),
    );
  }

  List<Tile> _createTiles(int width, int height, int startX, int startY,
      List elevationNoise, List moistureNoise) {
    List<List<SingleTile>> tileMatrix = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      List<SingleTile> row = [];
      for (var y = 0; y < height; y++) {
        row.add(getTile(elevationRow[y], moistureRow[y],
            Point((startX + x).toDouble(), (startY + y).toDouble())));
      }
      tileMatrix.add(row);
    }
    List<Tile> simplifiedTiles = simplifyTiles(tileMatrix);
    List<Tile> filteredTiles = _removeDeepUnderWaterTiles(simplifiedTiles);
    return filteredTiles;
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

  List<NaturalItem> _createNaturalItems(int width, int height, int startX,
      int startY, List elevationNoise, List moistureNoise) {
    List<NaturalItem> naturalItems = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < height; y++) {
        Point<double> point = Point(
          (startX + x).toDouble(),
          (startY + y).toDouble(),
        );
        NaturalItem? naturalItem = getNaturalItem(
          getTile(elevationRow[y], moistureRow[y], point).type,
          point,
          elevationRow[y],
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
  final IsoCoordinate regionCoordinate;
  final int verticesCount;
  final Float32List aboveWaterPositions;
  final Int32List aboveWaterColors;
  final Float32List underWaterPositions;
  final Int32List underWaterColors;

  RegionDTO(
    this.regionCoordinate,
    this.verticesCount,
    this.aboveWaterPositions,
    this.aboveWaterColors,
    this.underWaterPositions,
    this.underWaterColors,
  );
}
