import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../../collision/collision_box.dart';
import '../../../dto/drawing_dto.dart';
import '../../game_object.dart';
import '../../game_object_to_drawing_data.dart';

class Tile extends StaticGameObject {
  final TileType type;
  final IsoCoordinate isoCoordinate;
  final double elevation;
  late final DrawingDTO drawingDTO;
  final int width;
  late final CollisionBox collisionBox;
  final int _id;

  Tile(
    this.type,
    this.isoCoordinate,
    this.elevation,
    this.width,
    this._id, {
    DrawingDTO? drawingDTO,
  }) {
    collisionBox = CollisionBox(isoCoordinate, width.toDouble(), elevation);
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
      drawingDTO: DrawingDTO(
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
      isoCoordinate.isoX,
      isoCoordinate.isoY,
      elevation,
      width,
      _id,
      [
        drawingDTO.rSTransforms,
        drawingDTO.rects,
      ],
    ];
  }

  @override
  ({double distance, double elevation}) nearness() {
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
  double getElevation() {
    return elevation;
  }

  @override
  int getId() {
    return _id;
  }
}
