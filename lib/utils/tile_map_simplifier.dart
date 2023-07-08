import '../map/region/tile/tile.dart';
import 'dart:math';

import '../map/region/tile/tile_type.dart';

/// Simplifies tiles together to improve performance.
/// For example these 16 grass and sand tiles could be changed into 4 larger tiles.
/// G G S S
/// G G S S
/// S S G G
/// S S G G
/// We can simplify when the tiles have same height and type and they make a rectangle.
List<Tile> simplifyTiles(List<List<Tile>> tiles) {
  Point preY = tiles[0][0].coordinate;
  for (int j = 0; j < tiles.length; j++) {
    Point pre = tiles[j][0].coordinate;
    for (int i = 0; i < tiles[j].length; i++) {
      if (tiles[j][i].coordinate.x < pre.x) {
        throw Exception("Tiles are not sorted by x coordinate");
      }
      if (tiles[j][i].coordinate.y < preY.y) {
        throw Exception("Tiles are not sorted by y coordinate");
      }
    }
    preY = tiles[j][0].coordinate;
  }
  Set<Point> visited = {};
  List<Tile> simplifiedTiles = [];
  for (int j = 0; j < tiles.length; j++) {
    for (int i = 0; i < tiles[j].length; i++) {
      Point<int> topLeft = Point(i, j);
      Point<int> bottomRight = Point(i + 1, j + 1);
      if (visited.contains(topLeft)) continue;
      TileType type = tiles[j][i].type;
      double height = tiles[j][i].elevation;
      while (true) {
        bool moveToRight =
            _canMoveToRight(visited, height, type, tiles, topLeft, bottomRight);
        bool moveToDown =
            _canMoveToDown(visited, height, type, tiles, topLeft, bottomRight);
        if (moveToRight && moveToDown) {
          bottomRight += const Point(1, 1);
        } else {
          break;
        }
      }
      visited.addAll(_pointsInArea(topLeft, bottomRight));
      Tile tile = tiles[j][i];
      tile.width = (bottomRight.x - topLeft.x).toDouble();
      simplifiedTiles.add(tile);
    }
  }
  return simplifiedTiles;
}

Set<Point> _pointsInArea(Point<int> topLeft, Point<int> bottomRight) {
  Set<Point> points = {};
  for (int x = topLeft.x; x < bottomRight.x; x++) {
    for (int y = topLeft.y; y < bottomRight.y; y++) {
      points.add(Point(x, y));
    }
  }
  return points;
}

bool _canMoveToRight(Set visited,
    double height, type, matrix, Point<int> topLeft, Point<int> bottomRight) {
  Point<int> newTopLeft = Point(bottomRight.x, topLeft.y);
  Point<int> newBottomRight = Point(bottomRight.x + 1, bottomRight.y);
  for (int y = newTopLeft.y; y < newBottomRight.y; y++) {
    if (newTopLeft.x >= matrix.first.length || y >= matrix.length) {
      return false;
    }
    if (visited.contains(newTopLeft)) return false;
    if (matrix[y][newTopLeft.x].type != type ||
        matrix[y][newTopLeft.x].elevation != height) return false;
  }
  return true;
}

bool _canMoveToDown(Set visited,
    double height, type, matrix, Point<int> topLeft, Point<int> bottomRight) {
  Point<int> newTopLeft = Point(topLeft.x, bottomRight.y);
  Point<int> newBottomRight = Point(bottomRight.x, bottomRight.y + 1);
  for (int x = newTopLeft.x; x < newBottomRight.x; x++) {
    if (x >= matrix.first.length || newTopLeft.y >= matrix.length) {
      return false;
    }
    if (visited.contains(newTopLeft)) return false;
    if (matrix[newTopLeft.y][x].type != type ||
        matrix[newTopLeft.y][x].elevation != height) return false;
  }
  return true;
}
