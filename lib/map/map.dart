import 'package:anki/map/area/ground_area.dart';
import 'package:anki/map/area/region.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../movement/player_mover.dart';
import 'camera.dart';
import 'creation/map_generator.dart';
import 'map_helper.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  final int _regionSideWidth = 50;
  final Map<Point, Region> _regions = {};
  late final PlayerMover _playerMover;
  final PlayerModel player;
  late final Camera camera;

  MapModel(this.player) {
    int size = 50;
    camera = Camera(
        topLeft: player.coordinate.value + Point(-size, size * 2),
        bottomRight: player.coordinate.value + Point(size, -size * 2));
    _playerMover = PlayerMover(this);
    player.coordinate.addListener(() {
      _cameraFollowPlayer();
    });
  }

  List<GroundArea> getGround() {
    Set<Region> regions = _getRegionsInCamera();
    List<GroundArea> areas = [];
    for (Region region in regions) {
      areas.addAll(region.areas);
    }
    return areas;
  }

  List<Region> getRegions() {
    Set<Region> regions = _getRegionsInCamera();
    return regions.toList();
  }

  Set<Region> _getRegionsInCamera() {
    Set<Region> regions = {};
    Point<int> topLeft = camera.topLeft;
    Point<int> bottomRight = camera.bottomRight;
    for (int y = topLeft.y;
        y > bottomRight.y - _regionSideWidth;
        y -= _regionSideWidth) {
      for (int x = topLeft.x;
          x < bottomRight.x + _regionSideWidth;
          x += _regionSideWidth) {
        regions.add(_getRegion(Point(x, y)));
      }
    }
    return regions;
  }

  void _cameraFollowPlayer() {
    camera.centralize(player.getCoordinate());
    notifyListeners();
  }

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void movePlayer(double x, double y) {
    _playerMover.joyStickMovement(x, y, player);
  }

  Region _getRegion(Point<int> point) {
    int regionX = (point.x / _regionSideWidth).floor();
    int regionY = (point.y / _regionSideWidth).floor();
    if (_regions.containsKey(Point(regionX, regionY))) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (!_isFarawayFromPlayer(point.x, point.y)) {
        _regions[Point(regionX, regionY)] = generateRegion(
            _regionSideWidth,
            _regionSideWidth,
            regionX * _regionSideWidth,
            regionY * _regionSideWidth);
      }
      return Region.empty();
    }
  }

  bool _isFarawayFromPlayer(int x, int y) {
    return manhattanDistance(
            x, y, player.getCoordinate().x, player.getCoordinate().y) >
        _regionSideWidth * 8;
  }

  void zoomIn() {
    camera.zoomIn();
    _cameraFollowPlayer();
  }

  void zoomOut() {
    camera.zoomOut();
    _cameraFollowPlayer();
  }
}
