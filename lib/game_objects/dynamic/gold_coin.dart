import 'package:anki/animation/animation.dart';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../../mixin/health.dart';
import '../game_object.dart';
import 'dart:math';
import '../game_object_to_drawing_data.dart';

class GoldCoin extends DynamicGameObject with Animation, Health {
  CollisionAction? collisionAction;
  IsoCoordinate isoCoordinate;
  double elevation;
  late CollisionBox collisionBox;
  double width = 1.0;
  bool _isVisible = true;
  late DrawingDTO dto;

  GoldCoin(this.isoCoordinate, this.elevation) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
    dto = GoldCoinToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return dto;
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
    return elevation < 0;
  }

  @override
  CollisionBox getCollisionBox() {
    // Not updating because coins don't move
    return collisionBox;
  }

  @override
  List gameObjectToList() {
    throw UnimplementedError();
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

  void addCollisionAction(CollisionActionType value) {
    collisionAction ??= CollisionAction([], this);
    collisionAction?.actionTypes.add(value);
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  void update(double dt) {
    updateAnimation(dt);
    dto = GoldCoinToDrawingDTO.create(this);
  }

  @override
  void destroyItself() {
    destroy = true;
  }

  @override
  CollisionAction? getCollisionAction() {
    return collisionAction;
  }
}
