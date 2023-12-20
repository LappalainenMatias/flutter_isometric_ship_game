import 'online_game_object_state.dart';

class PlayerState extends GameObjectState {
  PlayerState({
    required this.id,
    required this.isoX,
    required this.isoY,
    required this.elevation,
    required this.width,
    required this.destroy,
    required this.actionTypes,
    required this.skipCollisionAction,
    required this.health,
    required this.animationParts,
    required this.isVisible,
  });

  factory PlayerState.fromJson(Map<String, dynamic> obj) {
    return PlayerState(
      id: obj['id'] as int,
      isoX: (obj['isoX'] as num).toDouble(),
      isoY: (obj['isoY'] as num).toDouble(),
      elevation: (obj['elevation'] as num).toDouble(),
      width: (obj['width'] as num).toDouble(),
      destroy: obj['destroy'] as bool,
      actionTypes: List<int>.from(obj['actionTypes'] as List<dynamic>),
      skipCollisionAction:
          List<int>.from(obj['skipCollisionAction'] as List<dynamic>),
      health: obj['health'] as int,
      animationParts: List<int>.from(obj['animationParts'] as List<dynamic>),
      isVisible: obj['isVisible'] as bool,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'isoX': isoX,
      'isoY': isoY,
      'elevation': elevation,
      'width': width,
      'destroy': destroy,
      'actionTypes': actionTypes,
      'isVisible': isVisible,
      'skipCollisionAction': skipCollisionAction,
      'health': health,
      'animationParts': animationParts,
    };
  }

  int id;
  double isoX;
  double isoY;
  double elevation;
  double width;
  bool destroy;
  List<int> actionTypes;
  List<int> skipCollisionAction;
  int health;
  List<int> animationParts;
  bool isVisible;
}