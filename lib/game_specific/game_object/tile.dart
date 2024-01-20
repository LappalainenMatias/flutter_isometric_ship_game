import 'dart:typed_data';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/game_object/game_object.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import 'game_object_to_rendering_data.dart';

class Tile extends StaticGameObject {
  final TileType type;
  final IsoCoordinate _topLeft;
  final double _elevation;
  late final RenderingData drawingDTO;
  final int _width;
  late final CollisionBox collisionBox;
  final int _id;

  Tile(this.type, this._topLeft, this._elevation, this._width, this._id,
      {RenderingData? drawingDTO}) {
    collisionBox = CollisionBox(_topLeft, _width.toDouble(), _elevation);
    this.drawingDTO = drawingDTO ?? TileToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return drawingDTO;
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
      drawingDTO: RenderingData(
        (list[7][0] as Float32List),
        (list[7][1] as Float32List),
      ),
    );
  }

  /// Todo write tests for these to make sure they work
  @override
  List gameObjectToList() {
    return [
      "Tile",
      type.name,
      _topLeft.isoX,
      _topLeft.isoY,
      _elevation,
      _width,
      _id,
      [
        drawingDTO.rSTTransforms,
        drawingDTO.rects,
      ],
    ];
  }

  @override
  ({double distance, double elevation}) nearness() {
    return (distance: _topLeft.isoY, elevation: _elevation);
  }

  @override
  CollisionBox getCollisionBox() {
    return collisionBox;
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return _topLeft;
  }

  @override
  double getElevation() {
    return _elevation;
  }

  @override
  int getId() {
    return _id;
  }

  double getWidth() => _width.toDouble();
}

enum TileType {
  grass,
  rock,
  sand;
}
