import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'dart:math';
import '../../../collision/collision_box.dart';
import '../../../dto/vertice_dto.dart';
import '../../game_object.dart';
import '../../game_objects_to_vertices.dart';

class Tile extends Absortable {
  final TileType type;
  IsoCoordinate isoCoordinate;
  double elevation;
  late VerticeDTO vertices;
  int width;
  late final CollisionBox collisionBox;
  bool leftSideIsVisible = true;
  bool rightSideIsVisible = true;
  bool topSideIsVisible = true;

  Tile(this.type, this.isoCoordinate, this.elevation, this.width,
      {VerticeDTO? vertices,
      this.leftSideIsVisible = true,
      this.rightSideIsVisible = true,
      this.topSideIsVisible = true}) {
    collisionBox =
        CollisionBox(isoCoordinate, width.toDouble(), width.toDouble());
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
      leftSideIsVisible: list[7],
      topSideIsVisible: list[8],
      rightSideIsVisible: list[9],
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
      leftSideIsVisible,
      topSideIsVisible,
      rightSideIsVisible,
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
    return leftSideIsVisible || topSideIsVisible || rightSideIsVisible;
  }

  @override
  void setVisibility(
      {required bool leftIsVisible,
      required bool topIsVisible,
      required bool rightIsVisible}) {
    if (leftIsVisible == leftSideIsVisible &&
        rightIsVisible == rightSideIsVisible &&
        topIsVisible == topSideIsVisible) {
      return;
    }
    leftSideIsVisible = leftIsVisible;
    topSideIsVisible = topIsVisible;
    rightSideIsVisible = rightIsVisible;
    vertices = TileToVertices.toVertices(this);
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  double size() {
    return width * width * width.toDouble();
  }
}
