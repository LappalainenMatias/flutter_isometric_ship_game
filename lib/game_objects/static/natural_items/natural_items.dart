import 'dart:math';
import 'dart:convert';
import 'dart:typed_data';
import '../../../collision/collision_box.dart';
import '../../../coordinates/iso_coordinate.dart';
import '../../../dto/vertice_dto.dart';
import '../../game_object.dart';
import '../../game_objects_to_vertices.dart';

/// Trees, rocks, etc. are natural items.
/// Trees are made up of multiple NaturalItemCubes.
class NaturalItemCube extends GameObject {
  final NaturalItemPart type;
  final IsoCoordinate isoCoordinate;
  final double elevation;
  final double width = 1;
  late final CollisionBox collisionBox;
  late DrawingDTO vertices;
  bool _isVisible = true;

  NaturalItemCube(this.type, this.isoCoordinate, this.elevation,
      {DrawingDTO? vertices,
      isVisible = true}) {
    _isVisible = isVisible;
    this.vertices = type.toVertices!(this);

    /// Todo fix the collision box size
    collisionBox = CollisionBox(isoCoordinate, width, width, elevation);
  }

  @override
  getDrawingData() {
    return vertices;
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + 1).toDouble(),
      elevation: elevation
    );
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

  factory NaturalItemCube.fromList(List list) {
    return NaturalItemCube(
      NaturalItemPart.values.byName(list[1]),
      IsoCoordinate.fromIso(
        list[2],
        list[3],
      ),
      list[4],
      vertices: DrawingDTO(
        (list[5][0] as Float32List),
        (list[5][1] as Float32List),
      ),
      isVisible: list[6],
    );
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
  List gameObjectToList() {
    return [
      "NaturalItem",
      type.name,
      isoCoordinate.isoX,
      isoCoordinate.isoY,
      elevation,
      [
        vertices.rstTransforms,
        vertices.rects,
      ],
      _isVisible,
    ];
  }
}

enum NaturalItemType {
  rock,
  birch,
}

/// We have this separate enum so that we can create more complex natural items like the birch tree.
/// A birch tree is made out of multiple cubes.
enum NaturalItemPart {
  rockCube(RockToDrawingDTO.create, true),
  birchTrunkCube(BirchToDrawingDTO.trunk, false),
  birchLeavesCube(BirchToDrawingDTO.leaves, false);

  const NaturalItemPart(this.toVertices, this.canBePlacedUnderWater);

  final Function? toVertices;
  final bool canBePlacedUnderWater;
}
