import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'dart:math';
import '../../../collision/collision_box.dart';
import '../../../dto/vertice_dto.dart';
import '../../game_object.dart';
import '../../game_objects_to_vertices.dart';

class Tile extends GameObject {
  final TileType type;
  IsoCoordinate isoCoordinate;
  double elevation;
  late final VerticeDTO vertices;
  int width;
  late final CollisionBox collisionBox;
  bool _isVisible = true;

  Tile(this.type, this.isoCoordinate, this.elevation, this.width,
      {VerticeDTO? vertices, isVisible = true}) {
    collisionBox = CollisionBox(isoCoordinate, width.toDouble(), width.toDouble());
    _isVisible = isVisible;
    this.vertices = vertices ?? TileToVertices.toVertices(this);
  }

  @override
  getVertices() {
    return vertices;
  }

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
      isVisible: list[7],
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
      ],
      _isVisible,
    ];
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + width).toDouble(),
      elevation: elevation
    );
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
  CollisionBox? getCollisionBox() {
    if (isUnderWater()) {
      /// Todo add collision detection to underwater tiles
      /// currently there is a bug where the top of the underwater tile has collision
      /// with the player in height 0
      return null;
    }
    return collisionBox;
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  bool isVisible() {
    return _isVisible;
  }

  @override
  void setVisibility(bool visible) {
    _isVisible = visible;
  }
}
