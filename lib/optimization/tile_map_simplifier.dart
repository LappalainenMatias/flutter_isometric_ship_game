import 'dart:math';
import '../game_objects/static/ground/tile.dart';
import '../game_objects/static/ground/tile_type.dart';

/// Simplifies tiles together to improve performance.
/// For example these 16 grass and sand tiles could be changed into 4 larger tiles.
/// G G S S
/// G G S S
/// S S G G
/// S S G G
/// We can simplify when the tiles have same height and type and they make a rectangle.
List<Tile> simplifyTiles(List<List<Tile>> tiles) {
  Set<Point> visited = {};
  List<Tile> simplifiedTiles = [];
  for (int j = 0; j < tiles.length; j++) {
    for (int i = 0; i < tiles[j].length; i++) {
      Point<int> topLeft = Point(i, j);
      Point<int> bottomRight = Point(i + 1, j + 1);
      if (visited.contains(topLeft)) continue;
      Tile tile = tiles[j][i];
      TileType type = tile.type;
      double height = tile.elevation;
      while (true) {
        bool moveToRight =
            _canMoveToRight(visited, height, type, tiles, topLeft, bottomRight);
        if (moveToRight) {
          bottomRight += const Point(1, 0);
        } else {
          break;
        }
        bool moveToDown =
            _canMoveToDown(visited, height, type, tiles, topLeft, bottomRight);
        if (moveToRight && moveToDown) {
          bottomRight += const Point(0, 1);
        } else {
          bottomRight -= const Point(1, 0);
          break;
        }
      }
      double width = (bottomRight.x - topLeft.x).toDouble();
      if (width > 1) {
        tile.width = width.toInt();
      }
      simplifiedTiles.add(tile);
      visited.addAll(_pointsInArea(topLeft, bottomRight));
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

bool _canMoveToRight(Set visited, double height, type, matrix,
    Point<int> topLeft, Point<int> bottomRight) {
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

bool _canMoveToDown(Set visited, double height, type, matrix,
    Point<int> topLeft, Point<int> bottomRight) {
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

/// Todo this hard coded -5 should be refactored somewhere else. maybe map_creation_rules.dart.
/// Todo Maybe add visibility to gameObjects instead of removing them?
/// Some tiles are not visible because they are deep under water.
/// Because of this it is unnecessary to render them.
List<Tile> removeDeepUnderWaterTiles(List<Tile> tiles) {
  List<Tile> filteredTiles = [];
  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].elevation > -5) {
      filteredTiles.add(tiles[i]);
    }
  }
  return filteredTiles;
}
