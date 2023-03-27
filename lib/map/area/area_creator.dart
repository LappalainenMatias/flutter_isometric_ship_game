import 'dart:math';
import '../creation/square.dart';
import '../creation/type.dart';
import 'ground_area.dart';

class AreaCreator {
  static List<GroundArea> groundAreas(Point<int> realTopLeft, List<List<Square>> matrix) {
    Set<Point> visited = {};
    List<GroundArea> areas = [];
    for (int j = 0; j < matrix.length; j++) {
      for (int i = 0; i < matrix[j].length; i++) {
        Point<int> topLeft = Point(i, j);
        Point<int> bottomRight = Point(i + 1, j + 1);
        if (visited.contains(topLeft)) continue;
        Type type = matrix[j][i].type;
        while (true) {
          bool moveToRight = canMoveToRight(type, matrix, topLeft, bottomRight);
          if (moveToRight) {
            bottomRight += const Point(1, 0);
          }
          bool moveToDown = canMoveToDown(type, matrix, topLeft, bottomRight);
          if (moveToDown) {
            bottomRight += const Point(0, 1);
          }
          if (!moveToRight && !moveToDown) break;
        }
        visited.addAll(pointsInArea(topLeft, bottomRight));
        areas.add(GroundArea(
            Point(topLeft.x, topLeft.y) + realTopLeft,
            Point(bottomRight.x, bottomRight.y) + realTopLeft,
            matrix[j][i].type));
      }
    }
    return areas;
  }

  static Set<Point> pointsInArea(Point<int> topLeft, Point<int> bottomRight) {
    Set<Point> points = {};
    for (int x = topLeft.x; x < bottomRight.x; x++) {
      for (int y = topLeft.y; y < bottomRight.y; y++) {
        points.add(Point(x, y));
      }
    }
    return points;
  }

  static bool canMoveToRight(
      type, matrix, Point<int> topLeft, Point<int> bottomRight) {
    Point<int> newTopLeft = Point(bottomRight.x, topLeft.y);
    Point<int> newBottomRight = Point(bottomRight.x + 1, bottomRight.y);
    for (int y = newTopLeft.y; y < newBottomRight.y; y++) {
      if (newTopLeft.x >= matrix.first.length || y >= matrix.length) {
        return false;
      }
      if (matrix[y][newTopLeft.x].type != type) return false;
    }
    return true;
  }

  static bool canMoveToDown(
      type, matrix, Point<int> topLeft, Point<int> bottomRight) {
    Point<int> newTopLeft = Point(topLeft.x, bottomRight.y);
    Point<int> newBottomRight = Point(bottomRight.x, bottomRight.y + 1);
    for (int x = newTopLeft.x; x < newBottomRight.x; x++) {
      if (x >= matrix.first.length || newTopLeft.y >= matrix.length) {
        return false;
      }
      if (matrix[newTopLeft.y][x].type != type) return false;
    }
    return true;
  }
}
