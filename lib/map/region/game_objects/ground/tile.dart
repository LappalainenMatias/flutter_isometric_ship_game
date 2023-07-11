import 'dart:math';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/ground/tile_to_vertices.dart';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';

import '../../../../utils/vertice_dto.dart';

abstract class Tile extends GameObject {
  @override
  VerticeDTO getVertices();

  @override
  double nearness() {
    return getCoordinate().x + getCoordinate().y + getWidth();
  }

  double getElevation();

  Point<double> getCoordinate();

  TileType getType();

  double getWidth();

  @override
  bool isUnderWater() {
    return getElevation() < 0;
  }
}

/// This is used for optimization. One large tile is faster to render than many small tiles.
class AreaTile extends Tile {
  final TileType type;
  Point<double> coordinate;
  double elevation;
  double width;
  VerticeDTO vertices = VerticeDTO.empty();

  AreaTile(this.type, this.coordinate, this.elevation, {this.width = 1}) {
    vertices = areaTilePosAndCols(this);
  }

  @override
  getVertices() {
    if (vertices.isEmpty()) {
      vertices = areaTilePosAndCols(this);
    }
    return vertices;
  }

  @override
  getElevation() {
    return elevation;
  }

  @override
  getCoordinate() {
    return coordinate;
  }

  @override
  getType() {
    return type;
  }

  @override
  getWidth() {
    return width;
  }

  @override
  bool isDynamic() {
    return false;
  }
}

class SingleTile extends Tile {
  final TileType type;
  Point<double> coordinate;
  double elevation;
  VerticeDTO vertices = VerticeDTO.empty();

  SingleTile(this.type, this.coordinate, this.elevation) {
    vertices = singleTilePosAndCols(this);
  }

  @override
  getVertices() {
    if (vertices.isEmpty()) {
      vertices = singleTilePosAndCols(this);
    }
    return vertices;
  }

  @override
  getElevation() {
    return elevation;
  }

  @override
  getCoordinate() {
    return coordinate;
  }

  @override
  getType() {
    return type;
  }

  @override
  getWidth() {
    return 1;
  }

  AreaTile toAreaTile(double width) {
    return AreaTile(type, coordinate, elevation, width: width);
  }

  @override
  bool isDynamic() {
    return false;
  }
}
