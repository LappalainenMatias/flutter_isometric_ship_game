import 'dart:math';

import 'package:anki/foundation/animation/animation.dart';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/game_specific/game_object/ship.dart';

import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../animation/bottle_animation.dart';
import 'game_object_to_rendering_data.dart';

class Bottle extends Collectable with Animation {
  IsoCoordinate _topLeft;
  final double _elevation;
  late CollisionBox _collisionBox;
  double _width = 1.0;
  bool _isVisible = true;
  late RenderingData dto;
  final int _id;

  Bottle(this._topLeft, this._elevation, this._id) {
    _collisionBox = CollisionBox(_topLeft, _width, _elevation);
    animationParts = bottleAnimation;
    dto = BottleToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    return (distance: _topLeft.isoY, elevation: _elevation);
  }

  @override
  CollisionBox getCollisionBox() {
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
    return _elevation;
  }

  @override
  void update(double dt) {
    dto = BottleToDrawingDTO.create(this);
    updateAnimation(dt);
  }

  @override
  int getId() {
    return _id;
  }

  @override
  void setIsoCoordinate(IsoCoordinate isoCoordinate) {
    _topLeft = isoCoordinate;
    _collisionBox.update(_topLeft, _width, _elevation);
  }

  @override
  void collectItem(GameObject collector) {
    var num = Random().nextInt(3);
    if (num == 0) {
      if (collector is Ship) {
        collector.heal(1);
      }
    } else if (num == 1) {
      if (collector is Ship && collector.shootingSpeedMS > 100) {
        collector.shootingSpeedMS -= 50;
      }
    } else if (num == 2) {
      if (collector is Ship && collector.bulletFlightSeconds < 10) {
        collector.bulletFlightSeconds += 0.5;
      }
    } else {
      throw Exception('Invalid number in collectItem: $num');
    }
  }

  double getWidth() => _width;
}
