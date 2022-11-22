import '../map_helper.dart';
import '../model/map.dart';
import '../model/player.dart';
import 'dart:math';


enum Action {
  moveRandomDirection,
  moveTowardItem
}

extension ActionsExtensions on Action {
  String get syntax {
    ///Todo support multiple languages
    switch (this) {
      case Action.moveRandomDirection:
        return "  player.moveToRandomDirection()";
      case Action.moveTowardItem:
        return "  if player.seesItem()\n    player.moveTowardClosestItem()\n    continue";
      default:
        return "Not recognized action";
    }
  }

  Function get function {
    switch (this) {
      case Action.moveRandomDirection:
        return moveRandomDirection;
      case Action.moveTowardItem:
        return moveTowardClosestVisibleItem;
      default:
        throw Exception("Function was not found!");
    }
  }
}

///Returns true if next actions are skipped
bool moveRandomDirection(PlayerModel player, MapModel map) {
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
  return false;
}

///Returns true if next actions are skipped
bool moveTowardClosestVisibleItem(PlayerModel player, MapModel map) {
  List<Point> path = PathFinder.pathToClosestItem(player.x, player.y, map.squares);
  if (path.isEmpty) return false;
  player.move(map, path[0].x.toInt(), path[0].y.toInt());
  return true;
}

