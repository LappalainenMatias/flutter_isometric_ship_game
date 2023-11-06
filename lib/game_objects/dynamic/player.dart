import 'package:anki/animation/animation.dart';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/mixin/health.dart';
import 'package:anki/textures/texture_rects.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../game_object.dart';
import 'dart:math';
import '../game_object_to_drawing_data.dart';

class Player extends DynamicGameObject with Health, Animation {
  CollisionAction? collisionAction;
  IsoCoordinate isoCoordinate;
  double elevation;
  late CollisionBox collisionBox;
  List<SpriteSheetItem> animation = [];
  double width = 1;
  bool _isVisible = true;
  late DrawingDTO dto;

  Player(this.isoCoordinate, this.elevation) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
    dto = PlayerToDrawingDTO.create(this);
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
    collisionBox.update(isoCoordinate, width, elevation);
    return collisionBox;
  }

  @override
  List gameObjectToList() {
    // TODO: if we implement this then the game becomes savable because we can save
    // all the game objects as a list of values
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
    dto = PlayerToDrawingDTO.create(this);
    updateAnimation(dt);
  }

  @override
  CollisionAction? getCollisionAction() {
    return collisionAction;
  }

  @override
  void destroyItself() {
    destroy = true;
  }

  @override
  List<SpriteSheetItem> currentAnimation() {
    return animation;
  }
}