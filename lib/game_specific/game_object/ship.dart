import '../../foundation/animation/animation.dart';
import '../../foundation/collision/collision_action.dart';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/health_and_damage/health.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../animation/ship_animation.dart';
import 'game_object_to_rendering_data.dart';
import '../../foundation/game_object/game_object.dart';

class Ship extends DynamicGameObject with Health, Animation, CollisionAction {
  IsoCoordinate topLeft;
  double elevation;
  late CollisionBox _collisionBox;
  double width = 2;
  bool _isVisible = true;
  late RenderingData dto;
  final int _id;

  Ship(this.topLeft, this.elevation, this._id) {
    _collisionBox = CollisionBox(topLeft, width - 0.2, elevation);
    animationParts = animationRedShipDown;
    dto = ShipToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    return (distance: topLeft.isoY, elevation: elevation);
  }

  @override
  CollisionBox getCollisionBox() {
    _collisionBox.update(topLeft, width, elevation);
    return _collisionBox;
  }

  @override
  List gameObjectToList() {
    // TODO: if we implement this then the game becomes saveble because we can save
    // all the game objects as a list of values
    throw UnimplementedError();
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return topLeft;
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
    dto = ShipToDrawingDTO.create(this);
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
