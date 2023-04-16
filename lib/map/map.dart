import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region.dart';
import 'package:anki/map/tile.dart';
import 'package:fast_noise/fast_noise.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../player/player.dart';
import '../player/player_mover.dart';
import 'camera.dart';
import 'distance.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  final MapCreator _mapCreator = MapCreator();
  final int _regionSideWidth = 64;
  final int _maxRegionAmount = 512;
  final Map<Point, Region> _regions = {};
  late final Player _player;
  late final Camera _camera;

  MapModel() {
    var coordinate = ValueNotifier(const IsoCoordinate(0, 0));
    _player = Player(coordinate);
    _camera = Camera(coordinate);
  }

  Map<String, List<Vertices>> getVerticesInCamera() {
    List<Region> regions = _getRegionsInCamera();
    regions.sort((a, b) => a.compareTo(b));
    List<Vertices> aboveWater = [];
    List<Vertices> underWater = [];
    for (Region region in regions) {
      if (region.aboveWater != null) {
        aboveWater.add(region.aboveWater!);
      }
      if (region.underWater != null) {
        underWater.add(region.underWater!);
      }
    }
    return {"aboveWater": aboveWater, "underWater": underWater};
  }

  List<Region> _getRegionsInCamera() {
    Set<Region> regions = {};
    var topLeft = _camera.topLeft;
    var bottomRight = _camera.bottomRight;
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

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void movePlayer(double joyStickX, double joyStickY) {
    PlayerMover().joyStickIsometricMovement(joyStickX, joyStickY, _player);
    notifyListeners();
  }

  Region? _getRegion(Point<int> point) {
    int regionX = (point.x / _regionSideWidth).floor();
    int regionY = (point.y / _regionSideWidth).floor();
    if (_regions.containsKey(Point(regionX, regionY))) {
      return _regions[Point(regionX, regionY)]!;
    } else {
      if (_regions.length > _maxRegionAmount) return null;
      if (!_isFarawayFromPlayer(point.x.toDouble(), point.y.toDouble())) {
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

  bool _isFarawayFromPlayer(double x, double y) {
    double distance = euclideanDistance(
      x,
      y,
      _player.getCoordinate().x,
      _player.getCoordinate().y,
    );
    return distance > _regionSideWidth * 4;
  }

  double width() {
    return _camera.width;
  }

  double height() {
    return _camera.height;
  }

  void zoomIn() {
    _camera.zoomIn();
    notifyListeners();
  }

  void zoomOut() {
    _camera.zoomOut();
    notifyListeners();
  }

  IsoCoordinate playerCoordinate() {
    return _player.getCoordinate();
  }
}

class MapCreator {
  Region? create(
    Point<int> regionCoordinate,
    int width,
    int height,
    int startX,
    int startY, [
    int seed = 3,
  ]) {
    final elevationNoise =
        _getPerlinNoise(width, height, startX, startY, seed, 0.05);
    final elevationNoise2 =
        _getPerlinNoise(width, height, startX, startY, seed + 1, 0.01);
    final elevationNoise4 =
        _getPerlinNoise(width, height, startX, startY, seed + 2, 0.005);
    final moistureNoise =
        _getPerlinNoise(width, height, startX, startY, seed + 3, 0.05);
    final moistureNoise2 =
        _getPerlinNoise(width, height, startX, startY, seed + 4, 0.01);
    final moistureNoise4 =
        _getPerlinNoise(width, height, startX, startY, seed + 5, 0.005);
    List<Tile> tiles = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var elevationRow2 = elevationNoise2[x];
      var elevationRow4 = elevationNoise4[x];
      var moistureRow = moistureNoise[x];
      var moisture2Row = moistureNoise2[x];
      var moisture4Row = moistureNoise4[x];
      for (var y = 0; y < height; y++) {
        double elevation = 0.25 * elevationRow[y] +
            0.5 * elevationRow2[y] +
            1 * elevationRow4[y];
        double moisture =
            0.25 * moistureRow[y] + 0.5 * moisture2Row[y] + 1 * moisture4Row[y];
        elevation = elevation / (1 + 0.5 + 0.25) - 0.1;
        moisture = moisture / (1 + 0.5 + 0.25);
        Tile? tile = TileExtension.getTile(elevation, moisture,
            IsoCoordinate((startX + x).toDouble(), (startY + y).toDouble()));
        if (tile != null) tiles.add(tile);
      }
    }
    return Region(tiles, regionCoordinate);
  }

  /// Increasing frequency adds details
  List<List<double>> _getPerlinNoise(
      int w, int h, int startX, int startY, int seed, double frequency) {
    List<List<double>> map = List.generate(
        w, (i) => List.generate(h, (i) => 0, growable: false),
        growable: false);
    final noise = PerlinNoise(
        cellularReturnType: CellularReturnType.Distance2Add,
        fractalType: FractalType.FBM,
        frequency: frequency,
        gain: 0.5,
        interp: Interp.Quintic,
        lacunarity: 2.0,
        octaves: 3,
        seed: seed);

    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        final dx = (startX + x) * frequency, dy = (startY + y) * frequency;
        map[x][y] = noise.singlePerlin2(seed, dx, dy);
      }
    }
    return map;
  }
}
