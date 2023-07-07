import 'dart:math';
import 'dart:typed_data';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'package:anki/map/region/tile/tile_to_vertices.dart';
import '../../utils/iso_coordinate.dart';
import '../../utils/noise.dart';

/// We use seperate class for creating the region data because this class
/// does not use dart:ui and because of that it can be run concurrently
class RegionCreator {
  final _noise = Noise();

  RegionDTO create(IsoCoordinate regionCoordinate, int width, int height,
      int startX, int startY) {
    var noises = _noise.create(width, height, startX, startY);
    final elevationNoise = noises[0];
    final moistureNoise = noises[1];
    List<Tile> tiles = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < height; y++) {
        tiles.add(getTile(elevationRow[y], moistureRow[y],
            Point((startX + x).toDouble(), (startY + y).toDouble())));
      }
    }
    tiles.sort((a, b) => a.compareTo(b));
    List<double> aboveWaterPositions = [];
    List<int> aboveWaterColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var tile in tiles) {
      if (tile.height < -5) continue;
      List pc = getPosAndCols(tile);
      if (tile.height < 0) {
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
