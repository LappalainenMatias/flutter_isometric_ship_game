import 'dart:ui';
import 'package:anki/map/region.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../player/player.dart';
import '../player/player_mover.dart';
import 'camera.dart';
import 'map_creator.dart';
import 'map_helper.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  final MapCreator _mapCreator = MapCreator();
  final int _regionSideWidth = 64;
  final int _maxRegionAmount = 512;
  final Map<Point, Region> _regions = {};
  late final PlayerMover _playerMover;
  final Player player;
  late final Camera camera;
  FragmentShader? fragmentShader;

  MapModel(this.player) {
    camera = Camera.fromCoordinate(player.coordinate.value);
    _playerMover = PlayerMover(this);
    player.coordinate.addListener(() {
      _cameraFollowPlayer();
    });
    loadShader();
  }

  Map<String, List<Vertices>> getVerticesInCamera() {
    List<Region> regions = _getRegionsInCamera();
    regions.sort((a, b) => a.compareTo(b));
    List<Vertices> groundVertices = [];
    List<Vertices> underWaterVertices = [];
    for (Region region in regions) {
      if (region.groundVertices != null) {
        groundVertices.add(region.groundVertices!);
      }
      if (region.underWaterVertices != null) {
        underWaterVertices.add(region.underWaterVertices!);
      }
    }
    return {"ground": groundVertices, "underWater": underWaterVertices};
  }

  List<Region> _getRegionsInCamera() {
    Set<Region> regions = {};
    var topLeft = camera.topLeft;
    var bottomRight = camera.bottomRight;
    for (int y = topLeft.y.ceil() + _regionSideWidth;
        y >= bottomRight.y - _regionSideWidth;
        y -= _regionSideWidth) {
      for (int x = topLeft.x.ceil() - _regionSideWidth;
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
        Region? region = _mapCreator.create(
          Point(regionX, regionY),
          _regionSideWidth,
          _regionSideWidth,
          regionX * _regionSideWidth,
          regionY * _regionSideWidth,
        );
        if (region == null) return null;
        _regions[Point(regionX, regionY)] = region;
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

  void loadShader() async {
    var program = await FragmentProgram.fromAsset('shaders/example.frag');
    fragmentShader = program.fragmentShader();
  }
}
