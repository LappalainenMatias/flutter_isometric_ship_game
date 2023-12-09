import 'dart:collection';
import 'dart:math';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:anki/online/online_game_object_states/online_game_object_state.dart';
import '../../health_and_damage/damage.dart';
import '../../collision/collision_box.dart';
import '../../online/online_game_object_states/missile_state.dart';

class Missile extends DynamicGameObject
    with Damage, CollisionAction, OnlineGameObject {
  IsoCoordinate isoCoordinate = const IsoCoordinate(0, 0);
  Projectile projectile;
  double elevation = 0.0;
  double width;
  bool _isVisible = true;
  late CollisionBox collisionBox;
  final int _id;

  Missile(
    this.isoCoordinate,
    this.elevation,
    this.width,
    this.projectile,
    this._id,
  ) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
  }

  @override
  List gameObjectToList() {
    throw UnimplementedError();
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  DrawingDTO getDrawingData() {
    // Missiles move a lot and because of that we create a new drawingDTO every frame.
    return MissileToDrawingDTO.create(this);
  }

  @override
  void update(double dt) {
    projectile.update(dt, this);
  }

  @override
  bool isUnderWater() {
    return elevation < 0;
  }

  @override
  bool isVisible() {
    return _isVisible;
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + width).toDouble(),
      elevation: elevation
    );
  }

  @override
  void setVisibility(bool isVisible) {
    _isVisible = isVisible;
  }

  @override
  CollisionBox getCollisionBox() {
    // We update collision box every frame because missiles move a lot.
    collisionBox.update(isoCoordinate, width, elevation);
    return collisionBox;
  }

  @override
  int getId() {
    return _id;
  }

  @override
  Map<String, dynamic> toJson() {
    var skipIds = [];
    for (var skip in skipCollisionAction) {
      skipIds.add(skip);
    }
    var collisionActionIndexes = [];
    for (var action in actionTypes) {
      collisionActionIndexes.add(action.index);
    }
    return {
      'id': getId(),
      'isoX': isoCoordinate.isoX,
      'isoY': isoCoordinate.isoY,
      'elevation': elevation,
      'width': width,
      'destroy': destroy,
      'unitVectorIsoX': projectile.unitVector.isoX,
      'unitVectorIsoY': projectile.unitVector.isoY,
      'speed': projectile.speed,
      'isVisible': isVisible(),
      'flyingTime': projectile.flyingTime,
      'actionTypes': collisionActionIndexes,
      'skipCollisionAction': skipIds,
    };
  }

  @override
  factory Missile.fromJson(obj) {
    var isoCoordinate = IsoCoordinate.fromIso(obj['isoX'], obj['isoY']);
    var elevation = obj['elevation'];
    var width = obj['width'];
    var destroy = obj['destroy'];
    var speed = obj['speed'];
    var isVisible = obj['isVisible'];
    var projectile = Projectile(
      IsoCoordinate.fromIso(obj['unitVectorIsoX'], obj['unitVectorIsoY']),
      obj['flyingTime'],
    );
    var id = obj['id'];
    var copy = Missile(isoCoordinate, elevation, width, projectile, id);
    var actionTypes = <CollisionActionType>{};
    for (var action in obj['actionTypes']) {
      actionTypes.add(CollisionActionType.values[action]);
    }
    HashSet<int> skipCollisionAction = HashSet();
    for (var skip in obj['skipCollisionAction']) {
      skipCollisionAction.add(skip);
    }
    copy.projectile.speed = speed;
    copy.destroy = destroy;
    copy.skipCollisionAction = skipCollisionAction;
    copy.actionTypes = actionTypes;
    copy.setVisibility(isVisible);
    return copy;
  }

  @override
  void matchState(GameObjectState state) {
    /// Todo refactor. does not make sense to have match state and game object states and fromJson and toJson
    state = state as MissileState;
    isoCoordinate = IsoCoordinate.fromIso(state.isoX, state.isoY);
    elevation = state.elevation;
    width = state.width;
    destroy = state.destroy;
    projectile.unitVector =
        IsoCoordinate.fromIso(state.unitVectorX, state.unitVectorY);
    projectile.flyingTime = state.flyingTime;
    projectile.speed = state.speed;
    setVisibility(state.isVisible);
    var newSkipCollisionAction = HashSet<int>();
    for (var skip in state.skipCollisionAction) {
      newSkipCollisionAction.add(skip);
    }
    var newActionTypes = <CollisionActionType>{};
    for (var action in state.actionTypesIndexes) {
      newActionTypes.add(CollisionActionType.values[action]);
    }
    skipCollisionAction = newSkipCollisionAction;
    actionTypes = newActionTypes;
  }

  static defaultMissile(int id) {
    return Missile(const IsoCoordinate(0, 0), 0, 0,
        Projectile(const IsoCoordinate(0, 0)), id);
  }
}

class Projectile {
  /// Missile moves to this direction
  IsoCoordinate unitVector;
  double speed;

  /// Makes sure that missiles don't fly forever
  double flyingTime = 5;

  Projectile(this.unitVector, [this.speed = 100]);

  void update(double dt, Missile missile) {
    if (flyingTime <= 0) {
      missile.destroy = true;
      return;
    }
    flyingTime -= dt;
    missile.isoCoordinate += unitVector * dt * speed;
  }
}
