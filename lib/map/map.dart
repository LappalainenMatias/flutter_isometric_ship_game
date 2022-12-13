import 'package:anki/map/region.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import 'map_generator.dart';
import 'map_helper.dart';
import 'square.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  int regionSideWidth = 16;
  late final Region _emptyRegion;

  /// Notice that squares[0][0] would return the top left square in the screen
  /// [[(0,0), (1,0)],
  ///  [(0,1), (1,1)]]
  final Map<Point, Region> _regions = {};
  final PlayerModel player;
  Point<int> playerCoordinate;
  double movementSpeedMS = 1000;
  DateTime lastMovement = DateTime.now();

  MapModel(this.player, this.playerCoordinate) {
    List<List<Square>> squares = [];
    for (int x = 0; x < regionSideWidth; x++) {
      List<Square> row = [];
      for (int y = 0; y < regionSideWidth; y++) {
        row.add(Square(SquareType.wall, SquareVisibility.unseen, [], null));
      }
      squares.add(row);
    }
    _emptyRegion = Region(squares);
  }

  updateSquareVisibility() {
    int playerX = playerCoordinate.x;
    int playerY = playerCoordinate.y;
    int visibility = player.visibility;
    for (var y = playerY - visibility - 3; y < playerY + visibility + 3; y++) {
      for (var x = playerX - visibility - 3;
          x < playerX + visibility + 3;
          x++) {
        var square = getSquare(x, y);
        if (manhattanDistance(playerX, playerY, x, y) <= visibility) {
          square.visibility = SquareVisibility.inView;
        } else {
          if (square.visibility == SquareVisibility.inView) {
            square.visibility = SquareVisibility.seen;
          }
        }
      }
    }
    notifyListeners();
  }

  Square getSquare(int x, int y) {
    int squareX = x % regionSideWidth;
    int squareY = y % regionSideWidth;
    Region region = _getRegion(x, y);
    return region.getSquare(squareX, squareY);
  }

  Region _getRegion(int x, int y) {
    int regionX = (x / regionSideWidth).floor();
    int regionY = (y / regionSideWidth).floor();
    if (_hasRegion(regionX, regionY)) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (manhattanDistance(x, y, playerCoordinate.x, playerCoordinate.y) > regionSideWidth * 8) {
        return _emptyRegion;
      }
      _regions[Point(regionX, regionY)] =
          _createRegion(regionX * regionSideWidth, regionY * regionSideWidth);
      return _regions[Point(regionX, regionY)]!;
    }
  }

  ///x and y are the regions topLeft coordinate
  Region _createRegion(int x, int y) {
    return generateRegion(regionSideWidth, regionSideWidth, x, y);
  }

  List<Square> getNeighbours(int x, int y) {
    List<Square> neighbours = [];
    return neighbours;
  }

  bool _hasRegion(int x, int y) {
    return _regions.containsKey(Point(x, y));
  }

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void moveJoyStick(double x, double y, MapModel map) {
    double distance = euclideanDistance(0, 0, x, y);
    if (distance > 1.1) throw Exception("Too large distance: $distance");
    movementSpeedMS = 500 - (400 * distance).abs();
    if (movementSpeedMS >
        DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    if (movementSpeedMS < 100) movementSpeedMS = 100;
    lastMovement = DateTime.now();
    double angle = (atan2(x, y) * (180 / pi) + 360) % 360;
    int playerX = playerCoordinate.x;
    int playerY = playerCoordinate.y;
    if (angle > 337.5 || angle < 22.5) {
      move(map, playerX, playerY - 1); // Up
    } else if (angle > 22.5 && angle < 67.5) {
      move(map, playerX + 1, playerY - 1); // Up right
    } else if (angle > 67.5 && angle < 112.5) {
      move(map, playerX + 1, playerY); // Right
    } else if (angle > 112.5 && angle < 157.5) {
      move(map, playerX + 1, playerY + 1); // Down right
    } else if (angle > 157.5 && angle < 202.5) {
      move(map, playerX, playerY + 1); // Down
    } else if (angle > 202.5 && angle < 247.5) {
      move(map, playerX - 1, playerY + 1); // Down left
    } else if (angle > 247.5 && angle < 292.5) {
      move(map, playerX - 1, playerY); // Left
    } else if (angle > 292.5 && angle < 337.5) {
      move(map, playerX - 1, playerY - 1); // Up left
    }
  }

  void move(MapModel map, int newX, int newY) {
    Square square = map.getSquare(newX, newY);
    if (square.type.isVisitable) {
      playerCoordinate = Point(newX, newY);
      for (Square neighbour in map.getNeighbours(newX, newY)) {
        if (neighbour.specialItems.isNotEmpty) player.collectItems(neighbour);
      }
      map.updateSquareVisibility();
      notifyListeners();
    }
  }
}
