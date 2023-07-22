import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'dart:math';

import '../../../../../utils/collision_box.dart';
import '../../../../../utils/iso_coordinate.dart';
import '../ground/tile_type.dart';
import 'create_birch.dart';
import 'create_rock.dart';
import 'create_spruce.dart';

class NaturalItem extends GameObject {
  final NaturalItemType type;
  final Point<double> coordinate;
  final double elevation;
  VerticeDTO vertices = VerticeDTO.empty();

  NaturalItem(this.type, this.coordinate, this.elevation) {
    vertices = type.positionsAndColors!(coordinate, elevation);
  }

  @override
  getVertices() {
    if (vertices.isEmpty()) {
      vertices = type.positionsAndColors!(coordinate, elevation);
    }
    return vertices;
  }

  @override
  double nearness() {
    return coordinate.x + coordinate.y + 1;
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }

  @override
  bool isDynamic() {
    return false;
  }

  @override
  CollisionBox getCollisionBox() {
    /// todo we should not be constantly creating new collision boxes for static object
    return CollisionBox(IsoCoordinate(coordinate.x, coordinate.y), 8, 8);
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
    NaturalItemProbability(NaturalItemType.spruce, 0.09),
  ],
  TileType.grass: [
    NaturalItemProbability(NaturalItemType.rock, 0.02),
    NaturalItemProbability(NaturalItemType.spruce, 0.02),
    NaturalItemProbability(NaturalItemType.birch, 0.04),
  ],
  TileType.bare: [
    NaturalItemProbability(NaturalItemType.birch, 0.02),
    NaturalItemProbability(NaturalItemType.spruce, 0.03),
    NaturalItemProbability(NaturalItemType.rock, 0.05),
  ],
  TileType.sand: [
    NaturalItemProbability(NaturalItemType.rock, 0.10),
  ],
  TileType.lakeFloorVegetation: [
    NaturalItemProbability(NaturalItemType.rock, 0.03),
  ],
  TileType.lakeFloorBare: [
    NaturalItemProbability(NaturalItemType.rock, 0.05),
  ]
};

NaturalItem? getNaturalItem(
    TileType type, Point<double> coordinate, double elevation) {
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
