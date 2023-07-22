import 'dart:math';
import 'dart:typed_data';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/tile_map_simplifier.dart';
import 'package:anki/utils/vertice_dto.dart';
import '../../utils/iso_coordinate.dart';
import '../../utils/noise.dart';
import 'game_objects/static/ground/create_tile.dart';
import 'game_objects/static/ground/tile.dart';
import 'game_objects/static/natural_items/natural_items.dart';

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
    VerticeDTO underWater = VerticeDTO.empty();
    VerticeDTO aboveWater = VerticeDTO.empty();
    for (var gameObject in gameObjects) {
      if (gameObject.isUnderWater()) {
        underWater.addVerticeDTO(gameObject.getVertices());
      } else {
        aboveWater.addVerticeDTO(gameObject.getVertices());
      }
    }
    return RegionDTO(
      regionCoordinate,
      (aboveWater.positions.length + underWater.positions.length) ~/ 2,
      Float32List.fromList(aboveWater.positions),
      Int32List.fromList(aboveWater.colors),
      Float32List.fromList(underWater.positions),
      Int32List.fromList(underWater.colors),
      gameObjects,
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
  final List<GameObject> gameObjects;

  RegionDTO(
    this.regionCoordinate,
    this.verticesCount,
    this.aboveWaterPositions,
    this.aboveWaterColors,
    this.underWaterPositions,
    this.underWaterColors,
    this.gameObjects,
  );
}
