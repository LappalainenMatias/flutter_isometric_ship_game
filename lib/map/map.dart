import 'package:anki/map/region.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import '../movement/player_mover.dart';
import 'map_generator.dart';
import 'map_helper.dart';
import 'square.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  final int _regionSideWidth = 16;
  late final Region _emptyRegion;
  final Map<Point, Region> _regions = {};
  late final PlayerMover playerMover;
  final PlayerModel player;
  final double _zoomMultiplier = 1.5;
  int vision = 51;

  MapModel(this.player) {
    playerMover = PlayerMover(this);
    List<List<Square>> squares = [];
    for (int x = 0; x < _regionSideWidth; x++) {
      List<Square> row = [];
      for (int y = 0; y < _regionSideWidth; y++) {
        row.add(Square(SquareType.wall, SquareVisibility.unseen, [], null));
      }
      squares.add(row);
    }
    _emptyRegion = Region(squares);
    player.coordinate.addListener(() {
      playerHasMoved();
    });
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

  void playerHasMoved() {
    updateSquareVisibility();
  }

  Point<int> getVisionTopLeftPoint() {
    return Point(player.getCoordinate().x - (vision / 2).floor(),
        player.getCoordinate().y + (vision / 2).floor());
  }

  Point<int> getVisionBottomRightPoint() {
    return Point(player.getCoordinate().x + (vision / 2).floor(),
        player.getCoordinate().y - (vision / 2).floor());
  }

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void movePlayer(double x, double y) {
    playerMover.joyStickMovement(x, y, player);
  }

  updateSquareVisibility() {
    int playerX = player.getCoordinate().x;
    int playerY = player.getCoordinate().y;
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
      if (manhattanDistance(x, y, player.getCoordinate().x, player.getCoordinate().y) >
          _regionSideWidth * 8) {
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
