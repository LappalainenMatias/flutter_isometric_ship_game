import '../model/map.dart';
import '../model/player.dart';
import 'dart:math';

enum Action {
  moveRandomDirection,
}

extension ActionsExtensions on Action {
  String get syntax {
    ///Todo support multiple languages
    switch (this) {
      case Action.moveRandomDirection:
        return "  player.moveToRandomDirection()";
      default:
        return "Not recognized action";
    }
  }

  Function get function {
    switch (this) {
      case Action.moveRandomDirection:
        return moveRandomDirection;
      default:
        throw Exception("Function was not found!");
    }
  }
}

moveRandomDirection(PlayerModel player, MapModel map) {
  int num = Random().nextInt(4);
  switch (num) {
    case 0:
      player.moveUp(map);
      break;
    case 1:
      player.moveRight(map);
      break;
    case 2:
      player.moveDown(map);
      break;
    case 3:
      player.moveLeft(map);
  }
}

