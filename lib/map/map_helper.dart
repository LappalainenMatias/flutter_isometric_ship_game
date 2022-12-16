import 'package:anki/map/square_visibility.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import 'dart:math';

double euclideanDistance(double x1, double y1, double x2, double y2) {
  return sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

int manhattanDistance(int x1, int y1, int x2, int y2) {
  return (x1 - x2).abs() + (y1 - y2).abs();
}

class PathFinder {
  /// BFS algorithm
  static List<Point> pathToClosestItem(int x, int y, MapModel map) {
    var adjacency = <Point>{Point(x, y)};
    var queue = [Point(x, y)];
    var parents = {};
    Point? item;
    while (queue.isNotEmpty && item == null) {
      var q = queue[0];
      List neighbors = [
        Point(q.x - 1, q.y),
        Point(q.x + 1, q.y),
        Point(q.x, q.y - 1),
        Point(q.x, q.y + 1)
      ];
      for (Point<int> neighbour in neighbors) {
        Square square = map.getSquare(neighbour.x, neighbour.y);
        if (square.visibility != SquareVisibility.inView) continue;
        if (!square.type.isVisitable) continue;
        if (adjacency.contains(Point(neighbour.x, neighbour.y))) continue;
        parents[neighbour] = q;
        adjacency.add(neighbour);
        queue.add(neighbour);
        if (square.specialItems.isNotEmpty) {
          item = Point(neighbour.x, neighbour.y);
          break;
        }
      }
      queue.removeAt(0);
    }
    if (item == null) return [];
    List<Point> path = [item];
    Point current = item;
    while (parents[current] != null) {
      path.add(parents[current]);
      current = parents[current];
    }
    path = path.reversed.toList();
    path.removeAt(0);
    return path;
  }
}
