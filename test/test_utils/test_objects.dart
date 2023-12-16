import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/map_creation_rules.dart';

class TestDynamicObject extends Player {
  bool wasUpdated = false;

  TestDynamicObject(super.isoCoordinate, super.elevation, super._id);

  @override
  update(double dt) {
    wasUpdated = true;
  }
}

class TestData {
  static Tile tile1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 0, 0);
}

class TestMapCreationRules implements MapCreationRules {
  @override
  double amountOfWater() {
    return 0.5;
  }

  @override
  double frequency() {
    return 0.008;
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    return {};
  }

  @override
  double peakToPeakAmplitude() {
    return 30;
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
