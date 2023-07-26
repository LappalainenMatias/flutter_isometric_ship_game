import 'dart:ui' as ui;
import 'package:anki/map/camera/camera.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/game_map.dart';
import 'package:anki/map/region/region.dart';
import 'dart:math';
import 'package:anki/map/region/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import 'game_objects/dynamic/boat/boat.dart';
import 'game_objects/game_object.dart';

class RegionManager {
  final Map<Point<int>, Region> _regions = {};

  /// This needs to be power of two because it makes the level of detail changes easier.
  final int _regionSideWidth = 32;
  final int _maxRegionCount = 4096;
  final Set<Point> _buildQueue = {};
  Region? boatRegion;

  void updateBoatRegion(Boat boat) {
    Region? currentRegion =
        _getRegion(boat.isoCoordinate, LevelOfDetail.maximum);
    if (currentRegion == null) return;
    if (currentRegion != boatRegion) {
      if (boatRegion != null) boatRegion!.removeGameObject(boat);
      boatRegion = currentRegion;
      boatRegion!.addDynamicGameObject(boat);
    }
  }

  /// Todo this should be done in somewhere else
  /*
  void boatCollision(Boat boat) {
    List<GameObject> collisionObjects = [];
    for (var region in _getBoatRegions(boat)) {
      for (GameObject gameObject in region.gameObjects) {
        if (boat.collision(gameObject)) {
          collisionObjects.add(gameObject);
        }
      }
    }
    if (collisionObjects.isNotEmpty) {
      boatRegion!.removeGameObjects(collisionObjects);
    }
  }


  /// We want to know the regions next to the boat, so we can have collision
  /// with their game objects as well.
  Set<Region> _getBoatRegions(Boat boat) {
    Set<Region> regions = {};
    Region? regionTop =
        _getRegion(boat.isoCoordinate + const IsoCoordinate(0, 2));
    if (regionTop != null) regions.add(regionTop);
    Region? regionBottom =
        _getRegion(boat.isoCoordinate + const IsoCoordinate(0, -2));
    if (regionBottom != null) regions.add(regionBottom);
    Region? regionLeft =
        _getRegion(boat.isoCoordinate + const IsoCoordinate(-2, 0));
    if (regionLeft != null) regions.add(regionLeft);
    Region? regionRight =
        _getRegion(boat.isoCoordinate + const IsoCoordinate(2, 0));
    if (regionRight != null) regions.add(regionRight);
    return regions;
  }
   */

  MapDTO getVertices(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
    LevelOfDetail lod,
  ) {
    Stopwatch stopwatch = Stopwatch()..start();
    List<Region> regions = _getRegions(topLeft, bottomRight, lod);
    print("0: ${stopwatch.elapsedMilliseconds}");
    stopwatch.reset();
    regions.sort();
    print("1: ${stopwatch.elapsedMilliseconds}");
    stopwatch.reset();

    /// Todo this is slow if done every frame for a lot of regions
    List<ui.Vertices> aboveWater = [];
    List<ui.Vertices> underWater = [];
    int verticesCount = 0;
    for (Region region in regions) {
      var verticeData = region.getVertices(lod);
      if (verticeData["aboveWater"] != null) {
        aboveWater.add(verticeData["aboveWater"]!);
      }
      if (verticeData["underWater"] != null) {
        underWater.add(verticeData["underWater"]!);
      }
      verticesCount += region.getVerticesCount(lod);
    }

    print("2: ${stopwatch.elapsedMilliseconds}");
    return MapDTO(
      underWater: underWater,
      aboveWater: aboveWater,
      verticesCount: verticesCount,
    );
  }

  /// Returns coordinates that are between the two coordinates.
  /// Because of the region shape (diamond) we return more coordinates than needed so
  /// that we are not going to have holes in the map.
  List<IsoCoordinate> _getCoordinates(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
    step,
  ) {
    List<IsoCoordinate> regionCoordinates = [];
    for (double isoY = topLeft.isoY + step;
        isoY >= bottomRight.isoY - 2 * step;
        isoY -= step) {
      for (double isoX = topLeft.isoX - step;
          isoX <= bottomRight.isoX + 2 * step;
          isoX += step) {
        regionCoordinates.add(IsoCoordinate.fromIso(isoX, isoY));
      }
    }
    return regionCoordinates;
  }

  List<Region> _getRegions(
      IsoCoordinate topLeft, IsoCoordinate bottomRight, LevelOfDetail lod) {
    List<IsoCoordinate> coordinates =
        _getCoordinates(topLeft, bottomRight, _regionSideWidth);
    //_sortByDistanceToCenter(coordinates, topLeft, bottomRight);
    Stopwatch stopwatch = Stopwatch()..start();
    Set<Region> regions = {};
    for (var coordinate in coordinates) {
      Region? region = _getRegion(coordinate, lod);
      if (region != null) {
        regions.add(region);
      }
    }
    print("Getting regions took ${stopwatch.elapsedMilliseconds} ms");
    return regions.toList();
  }

  /// We want to create and find the regions that are
  /// closest to the center of the screen first
  /// TODO the performance is really slow when zoomed out (can take 20ms per frame)
  void _sortByDistanceToCenter(
    List<IsoCoordinate> coordinates,
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    var center = topLeft.center(bottomRight);
    Stopwatch stopwatch = Stopwatch()..start();
    coordinates.sort((a, b) =>
        a.manhattanDistance(center).compareTo(b.manhattanDistance(center)));
    print("Sorting took ${stopwatch.elapsedMilliseconds} ms");
  }

  Region? _getRegion(IsoCoordinate isoCoordinate, LevelOfDetail lod) {
    Point isoPoint = isoCoordinate.toPoint();
    int regionX = (isoPoint.x / _regionSideWidth).floor();
    int regionY = (isoPoint.y / _regionSideWidth).floor();
    Point<int> point = Point(regionX, regionY);
    if (_regions.containsKey(point)) {
      if (!_regions[point]!.hasLevelOfDetail(lod)) {
        _createRegion(regionX, regionY, lod);
      }
      return _regions[point]!;
    } else {
      if (_regions.length > _maxRegionCount) {
        _removeFarawayRegions(point);
      } else {
        _createRegion(regionX, regionY, lod);
      }
    }
    return null;
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 60 || (key.y - point.y).abs() > 60) {
        _regions.remove(key);
      }
    }
  }

  void _createRegion(int x, int y, LevelOfDetail lod) {
    if (kIsWeb) {
      _webCreateRegion(x, y, lod);
    } else {
      _otherPlatformsCreateRegion(x, y, lod);
    }
  }

  /// Creates the region concurrently
  void _webCreateRegion(int x, int y, LevelOfDetail lod) async {
    if (_buildQueue.isNotEmpty || _buildQueue.contains(Point(x, y))) {
      /// Todo Should we allow large than 1 build queue?
      return;
    }
    _buildQueue.add(Point(x, y));
    final result = await JsIsolatedWorker().run(
      functionName: 'jsregionworker',
      arguments: [
        x,
        y,
        _regionSideWidth,
        _regionSideWidth,
        x * _regionSideWidth,
        y * _regionSideWidth,
        lod.index,
      ],
    );

    List<GameObject> gameObjects = [];
    for (var encoded in result[2]) {
      gameObjects.add(GameObject.decode(encoded));
    }

    if (_regions.containsKey(Point(x, y))) {
      _regions[Point(x, y)]!.addNewLevelOfDetail(gameObjects, lod);
    } else {
      var regionDTO = RegionDTO(Point(result[0], result[1]), gameObjects, lod);
      _regions[Point(x, y)] = Region.fromRegionDTO(regionDTO);
    }
    _buildQueue.remove(Point(x, y));
  }

  /// Does NOT support concurrency yet
  /// TODO Add concurrency support
  void _otherPlatformsCreateRegion(int x, int y, LevelOfDetail lod) {
    RegionDTO regionDTO = RegionCreator().create(
        Point(x.toDouble(), y.toDouble()),
        _regionSideWidth,
        _regionSideWidth,
        x * _regionSideWidth,
        y * _regionSideWidth,
        lod);
    _regions[Point(x, y)] = Region.fromRegionDTO(regionDTO);
  }
}
