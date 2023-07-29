import 'package:anki/utils/vertice_dto.dart';
import 'dart:math';
import 'dart:convert';
import '../../../collision/collision_box.dart';
import '../../../../../utils/iso_coordinate.dart';
import '../../create_game_object.dart';
import '../../game_object.dart';
import '../../game_objects_to_vertices.dart';

/// Trees, rocks, etc. are natural items.
class NaturalItem extends GameObject {
  final NaturalItemType type;
  final IsoCoordinate isoCoordinate;
  final double elevation;
  late final CollisionBox collisionBox;
  VerticeDTO vertices = VerticeDTO.empty();

  NaturalItem(this.type, this.isoCoordinate, this.elevation) {
    vertices = type.toVertices!(isoCoordinate, elevation);

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
      vertices = type.toVertices!(isoCoordinate, elevation);
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
  spruce(SpruceToVertices.toVertices),
  rock(RockToVertices.toVertices),
  birch(BirchToVertices.toVertices);

  const NaturalItemType(this.toVertices);

  final Function? toVertices;
}