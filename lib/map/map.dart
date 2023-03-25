import 'package:anki/map/region.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../movement/player_mover.dart';
import 'camera.dart';
import 'map_generator.dart';
import 'map_helper.dart';
import 'ground_pixels.dart';
import 'square.dart';
import 'dart:math';
import 'abstract_map.dart';

class MapModel extends ChangeNotifier implements AbstractMap {
  final int _regionSideWidth = 16;
  final Map<Point, Region> _regions = {};
  late final PlayerMover _playerMover;
  late final GroundPixels _groundPixels;
  final PlayerModel player;
  late final Camera camera;

  MapModel(this.player) {
    camera = Camera(
        topLeft: player.coordinate.value + const Point(-50, 75),
        bottomRight: player.coordinate.value + const Point(50, -75));
    _groundPixels = GroundPixels(this, camera.topLeft, camera.bottomRight);
    _playerMover = PlayerMover(this);
    player.coordinate.addListener(() {
      _playerMoved();
    });
  }

  List getGroundMatrix() {
    return _groundPixels.matrix;
  }

  /// Player movement updates the map and causes a redraw of the screen
  void _playerMoved() {
    _followPlayer();
    //_updateSquareVisibility();
  }

  void _followPlayer() {
    camera.centralize(player.getCoordinate());
    _groundPixels.shiftToArea(camera.topLeft, camera.bottomRight);
    notifyListeners();
  }

  _updateSquareVisibility() {
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

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void movePlayer(double x, double y) {
    _playerMover.joyStickMovement(x, y, player);
  }

  @override
  Square getSquare(int x, int y) {
    int squareX = x % _regionSideWidth;
    int squareY = y % _regionSideWidth;
    Region? region = _getRegion(x, y);
    if (region == null) {
      return Square.empty();
    }
    return region.getSquare(squareX, squareY);
  }

  Region? _getRegion(int x, int y) {
    int regionX = (x / _regionSideWidth).floor();
    int regionY = (y / _regionSideWidth).floor();
    if (_hasRegion(regionX, regionY)) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (_isFarawayToPlayer(x, y)) {
        return null;
      }
      _regions[Point(regionX, regionY)] =
          _createRegion(regionX * _regionSideWidth, regionY * _regionSideWidth);
      return _regions[Point(regionX, regionY)]!;
    }
  }

  bool _isFarawayToPlayer(int x, int y) {
    return manhattanDistance(
            x, y, player.getCoordinate().x, player.getCoordinate().y) >
        _regionSideWidth * 8;
  }

  ///x and y are the regions topLeft coordinates
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

  void zoomIn() {
    camera.zoomIn();
  }

  void zoomOut() {
    camera.zoomOut();
  }
}
