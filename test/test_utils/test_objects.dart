

import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/game_specific/dynamic_game_object_manager.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:anki/game_specific/terrain/terrain_creation_rules.dart';

class TestDynamicObject extends Ship {
  bool wasUpdated = false;

  TestDynamicObject(super.isoCoordinate, super.elevation, super._id);

  @override
  update(double dt) {
    wasUpdated = true;
  }

  @override
  void setIsoCoordinate(IsoCoordinate isoCoordinate) {

  }
}

class TestData {
  static Tile tile1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 0, 0);
}

class TestMapCreationRules implements TerrainCreationRules {
  @override
  double amountOfWater() {
    return 0.5;
  }

  @override
  double frequency() {
    return 0.008;
  }

  @override
  double terrainSharpness() {
    return 3;
  }

  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.sand, 2.0, 0.35),
      TileRule(TileType.grass, 4.0, null),
      TileRule(TileType.rock, null, null),
    ];
  }

  @override
  double maxElevation() {
    return 20;
  }

  @override
  double minElevation() {
    return -20;
  }
}


class TestCamera extends DefaultCamera {
  @override
  var topLeft = IsoCoordinate.fromIso(0, 0);


  @override
  var bottomRight = IsoCoordinate.fromIso(0, 0);

  @override
  double width() {
    return (topLeft.isoX - bottomRight.isoX).abs();
  }

  @override
  double height() {
    return (topLeft.isoY - bottomRight.isoY).abs();
  }
}

class TestDynamicGameObjectManager extends DynamicGameObjectManager {
  @override
  TestDynamicGameObjectManager(super._map, super._camera);

  @override
  bool isAbleToMove(DynamicGameObject dynamicGameObject, IsoCoordinate nextCoordinate) {
    return true;
  }
}
