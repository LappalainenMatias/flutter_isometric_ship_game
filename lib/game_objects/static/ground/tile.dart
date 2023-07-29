import 'dart:convert';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'dart:math';
import '../../../collision/collision_box.dart';
import '../../../../../utils/vertice_dto.dart';
import '../../game_object.dart';

class Tile extends GameObject {
  final TileType type;
  IsoCoordinate isoCoordinate;
  double elevation;
  VerticeDTO vertices = VerticeDTO.empty();
  int width;

  Tile(this.type, this.isoCoordinate, this.elevation, this.width) {
    vertices = TileToVertices.toVertices(this);
  }

  @override
  getVertices() {
    if (vertices.isEmpty()) {
      vertices = TileToVertices.toVertices(this);
    }
    return vertices;
  }

  factory Tile.fromString(String json) {
    final data = jsonDecode(json);
    List<String> point = data['isoCoordinate']!.split(',');
    return Tile(
      TileType.values.byName(data['type']),
      IsoCoordinate.fromIso(
        double.parse(point[0]),
        double.parse(point[1]),
      ),
      data['elevation'] as double,
      data['width'] as int,
    );
  }

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'Tile',
      'type': type.name,
      'isoCoordinate': '${isoCoordinate.isoX},${isoCoordinate.isoY}',
      'elevation': elevation,
      'width': width,
    });
  }

  @override
  double nearness() {
    Point point = isoCoordinate.toPoint();
    return -1 * (point.x + point.y + width).toDouble();
  }

  @override
  bool isUnderWater() {
    return elevation < 0;
  }

  @override
  bool isDynamic() {
    return false;
  }

  @override
  CollisionBox getCollisionBox() {
    /// todo we should not be constantly creating new collision boxes
    return CollisionBox(isoCoordinate, width.toDouble(), width.toDouble());
  }
}