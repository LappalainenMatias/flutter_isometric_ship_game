import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'dart:math';
import '../../../collision/collision_box.dart';
import '../../../dto/vertice_dto.dart';
import '../../game_object.dart';
import '../../game_objects_to_vertices.dart';

class Tile extends GameObject {
  final TileType type;
  IsoCoordinate isoCoordinate;
  double elevation;
  late VerticeDTO vertices;
  int width;
  late final CollisionBox collisionBox;

  Tile(this.type, this.isoCoordinate, this.elevation, this.width,
      {VerticeDTO? vertices}) {
    collisionBox = CollisionBox(isoCoordinate, width.toDouble(), elevation + 1);
    this.vertices = vertices ?? TileToVertices.toVertices(this);
  }

  @override
  getVertices() {
    return vertices;
  }

  /// Todo write tests for these to make sure they work
  factory Tile.fromList(List list) {
    return Tile(
      TileType.values.byName(list[1]),
      IsoCoordinate.fromIso(
        list[2],
        list[3],
      ),
      list[4],
      list[5],
      vertices: VerticeDTO(
        (list[6][0] as Float32List),
        (list[6][1] as Float32List),
      ),
    );
  }

  /// Todo write tests for these to make sure they work
  @override
  List gameObjectToList() {
    return [
      "Tile",
      type.name,
      isoCoordinate.isoX,
      isoCoordinate.isoY,
      elevation,
      width,
      [
        vertices.positions,
        vertices.textures,
      ]
    ];
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
    return collisionBox;
  }
}
