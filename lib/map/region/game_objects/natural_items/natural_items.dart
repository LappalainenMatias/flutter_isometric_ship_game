import 'package:anki/map/region/game_objects/natural_items/create_rock.dart';
import 'package:anki/map/region/game_objects/natural_items/create_spruce.dart';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'dart:math';

import '../ground/tile_type.dart';
import 'create_birch.dart';


class NaturalItem extends GameObject {
  final NaturalItemType type;
  final Point<double> coordinate;
  final double elevation;

  NaturalItem(this.type, this.coordinate, this.elevation);

  @override
  getVertices() {
    return type.positionsAndColors!(coordinate, elevation);
  }

  @override
  double nearness() {
    return coordinate.x + coordinate.y;
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }
}

enum NaturalItemType {
  spruce(SpruceCreator.positionsAndColors),
  rock(RockCreator.positionsAndColors),
  birch(BirchCreator.positionsAndColors);

  const NaturalItemType(this.positionsAndColors);

  final Function? positionsAndColors;
}

class NaturalItemProbability {
  final NaturalItemType type;
  final double percentage;

  NaturalItemProbability(this.type, this.percentage) {
    assert(percentage > 0 && percentage < 1);
  }
}

///Todo these probabilities are not exactly correct because they are looped through in order.
Map<TileType, List<NaturalItemProbability>> naturalItemsMap = {
  TileType.taiga: [
    NaturalItemProbability(NaturalItemType.birch, 0.02),
    NaturalItemProbability(NaturalItemType.rock, 0.03),
    NaturalItemProbability(NaturalItemType.spruce, 0.10),
  ],
  TileType.grass: [
    NaturalItemProbability(NaturalItemType.rock, 0.02),
    NaturalItemProbability(NaturalItemType.spruce, 0.02),
    NaturalItemProbability(NaturalItemType.birch, 0.04),
  ],
  TileType.bare: [
    NaturalItemProbability(NaturalItemType.birch, 0.02),
    NaturalItemProbability(NaturalItemType.spruce, 0.03),
    NaturalItemProbability(NaturalItemType.rock, 0.06),
  ],
  TileType.sand: [
    NaturalItemProbability(NaturalItemType.rock, 0.10),
  ],
  TileType.lakeFloorVegetation: [
    NaturalItemProbability(NaturalItemType.rock, 0.04),
  ],
  TileType.lakeFloorBare: [
    NaturalItemProbability(NaturalItemType.rock, 0.06),
  ]
};

NaturalItem? getNaturalItem(TileType type, Point<double> coordinate, double elevation) {
  final probabilities = naturalItemsMap[type];
  if (probabilities != null) {
    for (var naturalItem in probabilities) {
      if (Random().nextDouble() < naturalItem.percentage) {
        return NaturalItem(naturalItem.type, coordinate, elevation);
      }
    }
  }
  return null;
}
