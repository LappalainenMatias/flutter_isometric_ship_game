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
  final Point<double> coordinate;
  final double elevation;
  late final CollisionBox collisionBox;
  VerticeDTO vertices = VerticeDTO.empty();

  NaturalItem(this.type, this.coordinate, this.elevation) {
    vertices = type.positionsAndColors!(coordinate, elevation);

    /// Todo fix the collision box size
    collisionBox =
        CollisionBox(IsoCoordinate(coordinate.x, coordinate.y), 8, 8);
  }

  factory NaturalItem.fromString(String json) {
    final data = jsonDecode(json);
    List<String> point = data['coordinate']!.split(',');
    return NaturalItem(
      NaturalItemType.values.byName(data['type']),
      Point<double>(
        double.parse(point[0]),
        double.parse(point[1]),
      ),
      data['elevation'] as double,
    );
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
    return collisionBox;
  }

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'NaturalItem',
      'type': type.name,
      'coordinate': '${coordinate.x},${coordinate.y}',
      'elevation': elevation,
    });
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
