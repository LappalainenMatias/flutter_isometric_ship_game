import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import 'dart:math';

int manhattanDistance(Square s1, Square s2) {
  return (s1.x - s2.x).abs() + (s1.y - s2.y).abs();
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
      for (Point<int> n in neighbors) {
        if (!map.hasSquare(n.x, n.y)) continue;
        Square s = map.getSquare(n.x, n.y);
        if (s.visibility != SquareVisibility.inView) continue;
        if (!s.type.isVisitable) continue;
        if (adjacency.contains(Point(n.x, n.y))) continue;
        parents[n] = q;
        adjacency.add(n);
        queue.add(n);
        if (s.items.isNotEmpty) {
          item = Point(n.x, n.y);
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