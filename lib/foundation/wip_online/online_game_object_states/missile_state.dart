import 'online_game_object_state.dart';

class MissileState extends GameObjectState {
  MissileState({
    required this.id,
    required this.isoX,
    required this.isoY,
    required this.elevation,
    required this.width,
    required this.unitVectorX,
    required this.unitVectorY,
    required this.speed,
    required this.flyingTime,
    required this.isVisible,
    required this.destroy,
    required this.skipCollisionAction,
    required this.actionTypesIndexes,
  });

  factory MissileState.fromJson(Map<String, dynamic> obj) {
    var actionTypesIndex = <int>{};
    for (var action in obj['actionTypes']) {
      actionTypesIndex.add(action);
    }
    var skipCollisionAction = <int>{};
    for (var skip in obj['skipCollisionAction']) {
      skipCollisionAction.add(skip);
    }
    return MissileState(
      id: obj['id'] as int,
      isoX: (obj['isoX'] as num).toDouble(),
      isoY: (obj['isoY'] as num).toDouble(),
      elevation: (obj['elevation'] as num).toDouble(),
      width: (obj['width'] as num).toDouble(),
      unitVectorX: (obj['unitVectorIsoX'] as num).toDouble(),
      unitVectorY: (obj['unitVectorIsoY'] as num).toDouble(),
      speed: (obj['speed'] as num).toDouble(),
      flyingTime: (obj['flyingTime'] as num).toDouble(),
      isVisible: obj['isVisible'] as bool,
      destroy: obj['destroy'] as bool,
      skipCollisionAction: skipCollisionAction,
      actionTypesIndexes: actionTypesIndex,
    );
  }

  Map<String, dynamic> toJson() {
    var skipIds = [];
    for (var skip in skipCollisionAction) {
      skipIds.add(skip);
    }
    var collisionActionIndexes = [];
    for (var index in actionTypesIndexes) {
      collisionActionIndexes.add(index);
    }
    return {
      'id': id,
      'isoX': isoX,
      'isoY': isoY,
      'elevation': elevation,
      'width': width,
      'destroy': destroy,
      'unitVectorIsoX': unitVectorX,
      'unitVectorIsoY': unitVectorY,
      'speed': speed,
      'flyingTime': flyingTime,
      'isVisible': isVisible,
      'actionTypes': collisionActionIndexes,
      'skipCollisionAction': skipIds,
    };
  }

  Set<int> skipCollisionAction;
  Set<int> actionTypesIndexes;
  int id;
  double isoX;
  double isoY;
  double elevation;
  double width;
  double unitVectorX;
  double unitVectorY;
  double speed;
  double flyingTime;
  bool isVisible;
  bool destroy;
}
