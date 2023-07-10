import 'dart:math';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/ground/tile_to_vertices.dart';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';

abstract class Tile extends GameObject {
  @override
  getVertices();

  @override
  double nearness() {
    return getCoordinate().x + getCoordinate().y + getWidth();
  }

  getElevation();

  getCoordinate();

  getType();

  getWidth();

  @override
  isUnderWater() {
    return getElevation() < 0;
  }
}

/// This is used for optimization. One large tile is faster to render than many small tiles.
class AreaTile extends Tile {
  final TileType type;
  Point<double> coordinate;
  double elevation;
  double width;

  AreaTile(this.type, this.coordinate, this.elevation, {this.width = 1});

  @override
  getVertices() {
    return areaTilePosAndCols(this);
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
}

class SingleTile extends Tile {
  final TileType type;
  Point<double> coordinate;
  double elevation;

  SingleTile(this.type, this.coordinate, this.elevation);

  @override
  getVertices() {
    return singleTilePosAndCols(this);
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
}
