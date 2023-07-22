import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'dart:math';

import '../../../../../utils/collision_box.dart';
import '../../../../../utils/iso_coordinate.dart';
import '../../../../map_creation_rules.dart';
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

NaturalItem? getNaturalItem(
    TileType type,
    Point<double> coordinate,
    double elevation,
    Map<TileType, List<NaturalItemProbability>> naturalItemsMap) {
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
