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
  final int _regionSideWidth = 16;
  late final Region _emptyRegion;
  final Map<Point, Region> _regions = {};
  final PlayerModel player;
  Point<int> playerCoordinate;
  double movementSpeedMS = 1000;
  DateTime lastMovement = DateTime.now();
  final double _zoomMultiplier = 1.5;
  int vision = 51;

  MapModel(this.player, this.playerCoordinate) {
    List<List<Square>> squares = [];
    for (int x = 0; x < _regionSideWidth; x++) {
      List<Square> row = [];
      for (int y = 0; y < _regionSideWidth; y++) {
        row.add(Square(SquareType.wall, SquareVisibility.unseen, [], null));
      }
      squares.add(row);
    }
    _emptyRegion = Region(squares);
  }

  List<List<Color>> getMapSquares() {
    List<List<Color>> table = [];
    Point topLeft = getVisionTopLeftPoint();
    Point bottomRight = getVisionBottomRightPoint();
    int y = bottomRight.y.toInt();
    int x = topLeft.x.toInt();
    while (y <= topLeft.y) {
      List<Color> row = [];
      while (x <= bottomRight.x) {
        Square square = getSquare(x, y);
        if (square.visibility == SquareVisibility.inView) {
          row.add(getSquare(x, y).colorInView);
        } else {
          row.add(getSquare(x, y).colorSeen);
        }
        x++;
      }
      table.add(row);
      x = topLeft.x.toInt();
      y++;
    }
    return table;
  }

  Point<int> getVisionTopLeftPoint() {
    return Point(playerCoordinate.x - (vision / 2).floor(), playerCoordinate.y + (vision / 2).floor());
  }

  Point<int> getVisionBottomRightPoint() {
    return Point(playerCoordinate.x + (vision / 2).floor(), playerCoordinate.y - (vision / 2).floor());
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
    int squareX = x % _regionSideWidth;
    int squareY = y % _regionSideWidth;
    Region region = _getRegion(x, y);
    return region.getSquare(squareX, squareY);
  }

  Region _getRegion(int x, int y) {
    int regionX = (x / _regionSideWidth).floor();
    int regionY = (y / _regionSideWidth).floor();
    if (_hasRegion(regionX, regionY)) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (manhattanDistance(x, y, playerCoordinate.x, playerCoordinate.y) > _regionSideWidth * 8) {
        return _emptyRegion;
      }
      _regions[Point(regionX, regionY)] =
          _createRegion(regionX * _regionSideWidth, regionY * _regionSideWidth);
      return _regions[Point(regionX, regionY)]!;
    }
  }

  ///x and y are the regions topLeft coordinate
  Region _createRegion(int x, int y) {
    return generateRegion(_regionSideWidth, _regionSideWidth, x, y);
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
  void moveJoyStick(double x, double y) {
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
      move(playerX, playerY - 1); // Up
    } else if (angle > 22.5 && angle < 67.5) {
      move(playerX + 1, playerY - 1); // Up right
    } else if (angle > 67.5 && angle < 112.5) {
      move(playerX + 1, playerY); // Right
    } else if (angle > 112.5 && angle < 157.5) {
      move(playerX + 1, playerY + 1); // Down right
    } else if (angle > 157.5 && angle < 202.5) {
      move(playerX, playerY + 1); // Down
    } else if (angle > 202.5 && angle < 247.5) {
      move(playerX - 1, playerY + 1); // Down left
    } else if (angle > 247.5 && angle < 292.5) {
      move(playerX - 1, playerY); // Left
    } else if (angle > 292.5 && angle < 337.5) {
      move(playerX - 1, playerY - 1); // Up left
    }
  }

  void move(int newX, int newY) {
    Square square = getSquare(newX, newY);
    if (square.type.isVisitable) {
      playerCoordinate = Point(newX, newY);
      for (Square neighbour in getNeighbours(newX, newY)) {
        if (neighbour.specialItems.isNotEmpty) player.collectItems(neighbour);
      }
      updateSquareVisibility();
      notifyListeners();
    }
  }

  void _updateVision(int newVision) {
    if (newVision < 3) {
      vision = 3;
      notifyListeners();
    } else {
      if (newVision.isEven) {
        newVision += 1;
      }
      vision = newVision;
      notifyListeners();
    }
  }

  void zoomIn() {
    _updateVision((vision / _zoomMultiplier).round());
  }

  void zoomOut() {
    _updateVision((vision * _zoomMultiplier).round());
  }
}
