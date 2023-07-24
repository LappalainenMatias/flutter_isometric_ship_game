import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'dart:math';
import 'dart:convert';
import '../../../../../utils/collision_box.dart';
import '../../../../../utils/iso_coordinate.dart';
import '../../../../map_creation_rules.dart';
import '../ground/tile_type.dart';
import 'create_birch.dart';
import 'create_rock.dart';
import 'create_spruce.dart';

/// Trees, rocks, etc. are natural items.
class NaturalItem extends GameObject {
  final NaturalItemType type;
  final IsoCoordinate isoCoordinate;
  final double elevation;
  late final CollisionBox collisionBox;
  VerticeDTO vertices = VerticeDTO.empty();

  NaturalItem(this.type, this.isoCoordinate, this.elevation) {
    vertices = type.positionsAndColors!(isoCoordinate, elevation);

    /// Todo fix the collision box size
    collisionBox = CollisionBox(isoCoordinate, 8, 8);
  }

  factory NaturalItem.fromString(String json) {
    final data = jsonDecode(json);
    List<String> point = data['isoCoordinate']!.split(',');
    return NaturalItem(
      NaturalItemType.values.byName(data['type']),
      IsoCoordinate.fromIso(
        double.parse(point[0]),
        double.parse(point[1]),
      ),
      data['elevation'] as double,
    );
  }

  @override
  getVertices() {
    if (vertices.isEmpty()) {
      vertices = type.positionsAndColors!(isoCoordinate, elevation);
    }
    return vertices;
  }

  @override
  double nearness() {
    Point point = isoCoordinate.toPoint();
    return -1 * (point.x + point.y + 1 + _getWidth());
  }

  @override
  isUnderWater() {
    return elevation <= 0;
  }

  @override
  bool isDynamic() {
    return false;
  }

  @override
  CollisionBox getCollisionBox() {
    return collisionBox;
  }

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'NaturalItem',
      'type': type.name,
      'isoCoordinate': '${isoCoordinate.isoX},${isoCoordinate.isoY}',
      'elevation': elevation,
    });
  }

  /// This is used for sorting the drawing order
  /// Currently all naturalItems are width 1 but this can be changed.
  double _getWidth() {
    return 1;
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
    IsoCoordinate isoCoordinate,
    double elevation,
    Map<TileType, List<NaturalItemProbability>> naturalItemsMap) {
  final probabilities = naturalItemsMap[type];
  if (probabilities != null) {
    for (var naturalItem in probabilities) {
      if (Random().nextDouble() < naturalItem.percentage) {
        // NaturalItems are top of the ground, so we add 1 to the elevation
        return NaturalItem(naturalItem.type, isoCoordinate, elevation + 1);
      }
    }
  }
  return null;
}
