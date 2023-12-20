import '../../foundation/animation/animation.dart';
import '../../foundation/collision/collision_action.dart';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/health_and_damage/health.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../animation/ship_animation.dart';
import 'game_object_to_drawing_data.dart';
import '../../foundation/game_object/game_object.dart';

class Ship extends DynamicGameObject with Health, Animation, CollisionAction {
  IsoCoordinate isoCoordinate;
  double elevation;
  late CollisionBox collisionBox;
  double width = 2;
  bool _isVisible = true;
  late RenderingData dto;
  final int _id;

  Ship(this.isoCoordinate, this.elevation, this._id) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
    animationParts = animationRedShipDown;
    dto = PlayerToDrawingDTO.create(this);
  }

  factory Ship.defaultPlayer(int id) {
    return Ship(const IsoCoordinate.fromIso(0, 0), 0, id);
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    return (distance: isoCoordinate.isoY, elevation: elevation);
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
  void destroyItself() {
    destroy = true;
  }

  @override
  int getId() {
    return _id;
  }
}
