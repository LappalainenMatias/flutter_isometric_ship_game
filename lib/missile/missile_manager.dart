import 'dart:typed_data';
import 'package:anki/collision/collision_detector.dart';
import 'package:anki/map/map.dart';
import 'package:anki/missile/missiles_to_drawing_data.dart';
import 'package:anki/optimization/visibility_checker.dart';
import '../region/region.dart';
import 'missile.dart';

class MissileManager {
  final List<Missile> _missiles = [];
  final GameMap _map;

  MissileManager(this._map);

  void add(Missile missile) {
    _missiles.add(missile);
  }

  void update() {
    for (var missile in _missiles) {
      missile.update();
      var region = _map.getRegion(missile.getIsoCoordinate());
      var collisions = findCollisions(region.getStaticGameObjects(), missile);
      if (collisions.isNotEmpty || missile.isDestroyed) {
        explode(missile, region);
      }
    }
    _missiles.removeWhere((missile) => missile.isDestroyed);
  }

  void explode(Missile missile, Region region) {
    missile.isDestroyed = true;

    /// This hides game objects that are close to the explosion
    /// Todo we could destroy them instead
    var missileCoordinate = missile.getIsoCoordinate();
    var missileElevation = missile.getElevation();
    region.getStaticGameObjects().removeWhere((gameObject) {
      var distance =
          missileCoordinate.manhattanDistanceTo(gameObject.getIsoCoordinate());
      distance += (missileElevation - gameObject.getElevation()).abs() * 5;
      if (distance < 30) {
        return true;
      }
      return false;
    });

    /// This updates the visibility of the game objects
    visibilityChecker(region.getStaticGameObjects());
    region.update(region.getStaticGameObjects());
  }

  ({
    Float32List rstTransformsUnderWater,
    Float32List rectsUnderWater,
    Float32List rstTransformsAboveWater,
    Float32List rectsAboveWater,
  }) getRstTransformsAndRects() {
    final data = missilesToDrawingData(_missiles);
    return (
      rstTransformsUnderWater: data.underWaterRstTransforms,
      rectsUnderWater: data.underWaterRects,
      rstTransformsAboveWater: data.aboveWaterRstTransforms,
      rectsAboveWater: data.aboveWaterRects
    );
  }
}
