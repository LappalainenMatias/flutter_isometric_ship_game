import '../map/region/game_objects/ground/tile.dart';
import 'dart:math';

/// Simplifies tiles by compining them together. This improves the performance.
/// For example these 16 grass and sand tiles could be changed into 4 larger tiles.
/// G G S S
/// G G S S
/// S S G G
/// S S G G
/// Simplification is possible when the tiles have same height and type and they make a square.
/// TODO by making rectangle tiles, the performance could be improved even more.
List<Tile> simplifyTiles(List<List<SingleTile>> tiles) {
  Set<Point> visited = {};
  List<Tile> simplifiedTiles = [];
  for (int j = 0; j < tiles.length; j++) {
    for (int i = 0; i < tiles[j].length; i++) {
      SingleTile tile = tiles[j][i];
      Point<int> topLeft = Point(j, i);
      if (visited.contains(topLeft)) continue;

      Point<int> bottomRight = _expandTile(visited, tile, tiles, topLeft);
      visited.addAll(_pointsInArea(topLeft, bottomRight));

      int width = bottomRight.x - topLeft.x;
      if (width > 1) {
        simplifiedTiles.add(tile.toAreaTile(width.toDouble()));
      } else {
        simplifiedTiles.add(tile);
      }
    }
  }
  return simplifiedTiles;
}

Point<int> _expandTile(Set<Point> visited, SingleTile tile,
    List<List<SingleTile>> tiles, Point<int> topLeft) {
  Point<int> bottomRight = Point(topLeft.x + 1, topLeft.y + 1);

  while (true) {
    bool canExpandRight = _canExpandRight(
        visited, tile.elevation, tile.type, tiles, topLeft, bottomRight);
    if (canExpandRight) {
      bottomRight += const Point(1, 0);
    } else {
      break;
    }

    bool canExpandDown = _canExpandDown(
        visited, tile.elevation, tile.type, tiles, topLeft, bottomRight);
    if (canExpandDown) {
      bottomRight += const Point(0, 1);
    } else {
      bottomRight -= const Point(1, 0);
      break;
    }
  }

  return bottomRight;
}

Set<Point<double>> _pointsInArea(Point<int> topLeft, Point<int> bottomRight) {
  Set<Point<double>> points = {};
  for (int x = topLeft.x; x < bottomRight.x; x++) {
    for (int y = topLeft.y; y < bottomRight.y; y++) {
      points.add(Point(x.toDouble(), y.toDouble()));
    }
  }
  return points;
}

bool _canExpandRight(Set visited, double height, type, matrix,
    Point<int> topLeft, Point<int> bottomRight) {
  Point<int> newTopLeft = Point(bottomRight.x, topLeft.y);
  Point<int> newBottomRight = Point(bottomRight.x + 1, bottomRight.y);
  for (int y = newTopLeft.y; y < newBottomRight.y; y++) {
    if (newTopLeft.x >= matrix.first.length ||
        y >= matrix.length ||
        visited.contains(newTopLeft)) {
      return false;
    }
    Tile tile = matrix[y][newTopLeft.x];
    if (tile.getType() != type || tile.getElevation() != height) {
      return false;
    }
  }
  return true;
}

bool _canExpandDown(Set visited, double height, type, matrix,
    Point<int> topLeft, Point<int> bottomRight) {
  Point<int> newTopLeft = Point(topLeft.x, bottomRight.y);
  Point<int> newBottomRight = Point(bottomRight.x, bottomRight.y + 1);
  for (int x = newTopLeft.x; x < newBottomRight.x; x++) {
    if (x >= matrix.first.length ||
        newTopLeft.y >= matrix.length ||
        visited.contains(newTopLeft)) {
      return false;
    }
    Tile tile = matrix[newTopLeft.y][x];
    if (tile.getType() != type || tile.getElevation() != height) {
      return false;
    }
  }
  return true;
}
