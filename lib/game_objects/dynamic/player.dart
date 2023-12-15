import 'dart:collection';
import 'package:anki/animation/animation.dart';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/online/online_game_object_states/online_game_object_state.dart';
import 'package:anki/textures/texture_rects.dart';
import '../../health_and_damage/health.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../../online/online_game_object_states/player_state.dart';
import '../game_object.dart';
import '../game_object_to_drawing_data.dart';

class Player extends DynamicGameObject
    with Health, Animation, CollisionAction, OnlineGameObject {
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
    animationParts = redShipDown;
  }

  factory Player.defaultPlayer(int id) {
    return Player(const IsoCoordinate.fromIso(0, 0), 0, id);
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

  @override
  Map<String, dynamic> toJson() {
    var skipIds = [];
    for (var skip in skipCollisionAction) {
      skipIds.add(skip);
    }
    var animationIndexes = [];
    for (var part in animationParts) {
      animationIndexes.add(part.index);
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
      'actionTypes': collisionActionIndexes,
      'isVisible': isVisible(),
      'skipCollisionAction': skipIds,
      'health': health,
      'animationParts': animationIndexes,
    };
  }

  @override
  factory Player.fromJson(obj) {
    var go = Player(
      IsoCoordinate.fromIso(obj['isoX'] as double, obj['isoY'] as double),
      obj['elevation'],
      obj['id'],
    );
    var animationParts = <SpriteSheetItem>[];
    for (var part in obj['animationParts']) {
      animationParts.add(SpriteSheetItem.values[part]);
    }
    var actionTypes = <CollisionActionType>{};
    for (var action in obj['actionTypes']) {
      actionTypes.add(CollisionActionType.values[action]);
    }
    go.width = obj['width'];
    go.destroy = obj['destroy'];
    go.setVisibility(obj['isVisible']);
    go.skipCollisionAction =
    HashSet<int>.from(obj['skipCollisionAction'] as List<dynamic>);
    go.setHealth(obj['health']);
    go.animationParts = animationParts;
    go.actionTypes = actionTypes;
    return go;
  }

  @override
  void matchState(GameObjectState state) {
    state = state as PlayerState;
    isoCoordinate = IsoCoordinate.fromIso(state.isoX, state.isoY);
    elevation = state.elevation;
    width = state.width;
    destroy = state.destroy;
    setVisibility(state.isVisible);
    setHealth(state.health);
    var newSkipCollisionAction = HashSet<int>();
    for (var skip in state.skipCollisionAction) {
      newSkipCollisionAction.add(skip);
    }
    var newAnimationParts = <SpriteSheetItem>[];
    for (var part in state.animationParts) {
      newAnimationParts.add(SpriteSheetItem.values[part]);
    }
    var newActionTypes = <CollisionActionType>{};
    for (var action in state.actionTypes) {
      newActionTypes.add(CollisionActionType.values[action]);
    }
    skipCollisionAction = newSkipCollisionAction;
    animationParts = newAnimationParts;
    actionTypes = newActionTypes;
  }
}
