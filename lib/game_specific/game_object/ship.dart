import 'package:anki/game_specific/movement/ship_mover.dart';

import '../../foundation/animation/animation.dart';
import '../../foundation/collision/collision_action.dart';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/health_and_damage/health.dart';
import '../../foundation/map/map.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../animation/ship_animation.dart';
import 'game_object_to_rendering_data.dart';
import '../../foundation/game_object/game_object.dart';

class Ship extends DynamicGameObject with Health, Animation {
  int collectedGoldAnchors = 0;
  ShipMover? shipMover;
  IsoCoordinate _topLeft;
  double elevation;
  late CollisionBox _collisionBox;
  double width = 2;
  bool _isVisible = true;
  late RenderingData dto;
  final int _id;
  DateTime lastShot = DateTime.now();
  int shootingSpeedMS = 500; /// Todo change times to seconds
  double bulletFlightSeconds = 5;
  GameMap gameMap;

  Ship(this._topLeft, this.elevation, this._id, this.gameMap) {
    actionTypes.add(CollisionActionType.collectItem);
    _collisionBox = CollisionBox(_topLeft, width - 0.2, elevation);
    animationParts = animationRedShipDown;
    dto = ShipToDrawingDTO.create(this);
  }

  void setShipMover(ShipMover shipMover) {
    this.shipMover = shipMover;
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    return (distance: _topLeft.isoY, elevation: elevation);
  }

  @override
  CollisionBox getCollisionBox() {
    _collisionBox.update(_topLeft, width, elevation);
    return _collisionBox;
  }

  @override
  List gameObjectToList() {
    // TODO: if we implement this then the game becomes savable because we can save all the game objects as a list of values
    throw UnimplementedError();
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return _topLeft;
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
    if (shipMover != null) {
      var moved = gameMap.move(this, shipMover!.nextCoordinate(dt, this));
      shipMover!.update(dt, this);
    }
    updateAnimation(dt);
    dto = ShipToDrawingDTO.create(this);
  }

  @override
  void destroyItself() {
    destroy = true;
  }

  @override
  int getId() {
    return _id;
  }

  @override
  void setIsoCoordinate(IsoCoordinate isoCoordinate) {
    _topLeft = isoCoordinate.copy();
  }

  bool isAbleToShoot() {
    return DateTime.now().difference(lastShot).inMilliseconds > shootingSpeedMS;
  }
}
