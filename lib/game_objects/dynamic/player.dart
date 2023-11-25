import 'package:anki/animation/animation.dart';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../health_and_damage/health.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../game_object.dart';
import '../game_object_to_drawing_data.dart';

class Player extends DynamicGameObject with Health, Animation, CollisionAction {
  IsoCoordinate isoCoordinate;
  double elevation;
  late CollisionBox collisionBox;
  double width = 1;
  bool _isVisible = true;
  late DrawingDTO dto;
  final int _id;

  Player(this.isoCoordinate, this.elevation, this._id) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
    dto = PlayerToDrawingDTO.create(this);
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

  Map<String, dynamic> toJson() {
    return {
      'id': getId(),
      'isoX': isoCoordinate.isoX,
      'isoY': isoCoordinate.isoY,
      'elevation': elevation,
      'width': width,
      'destroy': destroy,
      'actionTypes': actionTypes,
      'isVisible': isVisible(),
      'skipCollisionAction': skipCollisionAction,
      'health': health,
      'animationParts': animationParts,
    };
  }

  static fromJson(obj) {
    var go = Player(
      IsoCoordinate.fromIso(obj['isoX'] as double, obj['isoY'] as double),
      obj['elevation'],
      obj['id'],
    );
    go.width = obj['width'];
    go.destroy = obj['destroy'];
    go.setVisibility(obj['isVisible']);
    go.skipCollisionAction = obj['skipCollisionAction'];
    go.setHealth(obj['health']);
    go.animationParts = obj['animationParts'];
    go.actionTypes = obj['actionTypes'];
    return go;
  }
}
