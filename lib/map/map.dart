import 'dart:ui';
import 'package:anki/map/region.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../character/player_mover.dart';
import 'camera.dart';
import 'map_generator.dart';
import 'map_helper.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  final int _regionSideWidth = 64;
  final int _maxRegionAmount = 512;
  final Map<Point, Region> _regions = {};
  late final PlayerMover _playerMover;
  final PlayerModel player;
  late final Camera camera;

  MapModel(this.player) {
    camera = Camera(
        topLeft: player.coordinate.value +
            Point(-_regionSideWidth, _regionSideWidth),
        bottomRight: player.coordinate.value +
            Point(_regionSideWidth, -_regionSideWidth));
    _playerMover = PlayerMover(this);
    player.coordinate.addListener(() {
      _cameraFollowPlayer();
    });
  }

  Map<int, List<List<Vertices>>> getUnderWaterVerticesInCamera() {
    List<Region> regions = _getRegionsInCamera();
    regions.sort((a, b) => a.compareTo(b));
    Map<int, List<List<Vertices>>> underWater = {};
    for (Region region in regions) {
      for (int key in region.underWaterByHeight.keys) {
        if (underWater.containsKey(key)) {
          underWater[key]!.add(region.underWaterByHeight[key]!);
        } else {
          underWater[key] = [region.underWaterByHeight[key]!];
        }
      }
    }
    return underWater;
  }

  List<Vertices> getGroundVerticesInCamera() {
    List<Region> regions = _getRegionsInCamera();
    regions.sort((a, b) => a.compareTo(b));
    List<Vertices> ground = [];
    for (Region region in regions) {
      if (region.ground != null) {
        ground.add(region.ground!);
      }
    }
    return ground;
  }

  List<Region> _getRegionsInCamera() {
    Set<Region> regions = {};
    Point<int> topLeft = camera.topLeft;
    Point<int> bottomRight = camera.bottomRight;
    for (int y = topLeft.y + _regionSideWidth;
        y >= bottomRight.y - _regionSideWidth;
        y -= _regionSideWidth) {
      for (int x = topLeft.x - _regionSideWidth;
          x <= bottomRight.x + _regionSideWidth;
          x += _regionSideWidth) {
        Region? region = _getRegion(Point(x, y));
        if (region != null) {
          regions.add(region);
        }
      }
    }
    return regions.toList();
  }

  void _cameraFollowPlayer() {
    camera.centralize(player.getCoordinate());
    notifyListeners();
  }

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void movePlayer(double joyStickX, double joyStickY) {
    _playerMover.joyStickIsometricMovement(joyStickX, joyStickY, player);
  }

  Region? _getRegion(Point<int> point) {
    int regionX = (point.x / _regionSideWidth).floor();
    int regionY = (point.y / _regionSideWidth).floor();
    if (_regions.containsKey(Point(regionX, regionY))) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (_regions.length > _maxRegionAmount) return null;
      if (!_isFarawayFromPlayer(point.x, point.y)) {
        _regions[Point(regionX, regionY)] = generateRegion(
          Point(regionX, regionY),
          _regionSideWidth,
          _regionSideWidth,
          regionX * _regionSideWidth,
          regionY * _regionSideWidth,
        );
        return _regions[Point(regionX, regionY)]!;
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
