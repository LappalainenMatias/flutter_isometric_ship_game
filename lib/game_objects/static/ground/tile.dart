import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../../collision/collision_box.dart';
import '../../../dto/drawing_dto.dart';
import '../../game_object.dart';
import '../../game_object_to_drawing_data.dart';

class Tile extends StaticGameObject {
  final TileType type;
  IsoCoordinate isoCoordinate;
  double elevation;
  late DrawingDTO vertices;
  int width;
  late final CollisionBox collisionBox;
  bool _isVisible = true;
  int _id = 0;

  Tile(
    this.type,
    this.isoCoordinate,
    this.elevation,
    this.width,
    this._id, {
    DrawingDTO? vertices,
    bool isVisible = true,
  }) {
    _isVisible = isVisible;
    collisionBox = CollisionBox(isoCoordinate, width.toDouble(), elevation);
    this.vertices = vertices ?? TileToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
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
      list[6],
      vertices: DrawingDTO(
        (list[7][0] as Float32List),
        (list[7][1] as Float32List),
      ),
      isVisible: list[8],
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
      _id,
      [
        vertices.rSTransforms,
        vertices.rects,
      ],
      _isVisible,
    ];
  }

  @override
  ({double distance, double elevation}) nearness() {
    /// Todo this could be defined in consctructor
    return (distance: isoCoordinate.isoY, elevation: elevation);
  }

  @override
  bool isUnderWater() {
    return elevation < 0;
  }

  @override
  CollisionBox? getCollisionBox() {
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
  void setVisibility(bool isVisible) {
    _isVisible = isVisible;
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  int getId() {
    return _id;
  }
}
