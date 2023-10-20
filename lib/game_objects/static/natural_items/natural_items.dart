import 'dart:math';
import 'dart:convert';
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
  late final CollisionBox collisionBox;
  late VerticeDTO vertices;
  bool _leftSideIsVisible = true;
  bool _rightSideIsVisible = true;
  bool _topSideIsVisible = true;

  NaturalItemCube(this.type, this.isoCoordinate, this.elevation) {
    vertices = type.toVertices!(isoCoordinate, elevation);

    /// Todo fix the collision box size
    collisionBox = CollisionBox(isoCoordinate, 8, 8);
  }

  factory NaturalItemCube.fromList(String json) {
    final data = jsonDecode(json);
    List<String> point = data['isoCoordinate']!.split(',');
    return NaturalItemCube(
      NaturalItemPart.values.byName(data['type']),
      IsoCoordinate.fromIso(
        double.parse(point[0]),
        double.parse(point[1]),
      ),
      data['elevation'] as double,
    );
  }

  @override
  getVertices() {
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

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'NaturalItem',
      'type': type.name,
      'isoCoordinate': '${isoCoordinate.isoX},${isoCoordinate.isoY}',
      'elevation': elevation,
    });
  }

  @override
  List gameObjectToList() {
    // TODO: implement gameObjectToList
    throw UnimplementedError();
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  bool isVisible() {
    return _leftSideIsVisible || _rightSideIsVisible || _topSideIsVisible;
  }

  @override
  void setVisibility(
      {required bool leftIsVisible,
      required bool topIsVisible,
      required bool rightIsVisible}) {
    _leftSideIsVisible = leftIsVisible;
    _topSideIsVisible = rightIsVisible;
    _rightSideIsVisible = topIsVisible;
  }

  @override
  double getElevation() {
    return elevation;
  }
}

enum NaturalItemType {
  rock,
  birch,
}

/// We have this separate enum so that we can create more complex natural items like the birch tree.
/// A birch tree is made out of multiple cubes.
enum NaturalItemPart {
  rockCube(RockToVertices.toVertices, true),
  birchTrunkCube(BirchToVertices.trunkToVertices, false),
  birchLeavesCube(BirchToVertices.leavesToVertices, false);

  const NaturalItemPart(this.toVertices, this.canBePlacedUnderWater);

  final Function? toVertices;
  final bool canBePlacedUnderWater;
}
