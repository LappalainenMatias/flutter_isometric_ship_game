import 'package:anki/character.dart';

import '../map_helper.dart';
import '../model/map.dart';
import '../model/player.dart';
import 'dart:math';


enum Task {
  moveRandomDirection,
  moveTowardItem
}

extension TaskExtensions on Task {
  String get syntax {
    ///Todo support multiple languages
    switch (this) {
      case Task.moveRandomDirection:
        return "  player.moveToRandomDirection()";
      case Task.moveTowardItem:
        return "  if player.seesItem()\n    player.moveTowardClosestItem()\n    continue";
      default:
        return "Not recognized action";
    }
  }

  Function get function {
    switch (this) {
      case Task.moveRandomDirection:
        return moveRandomDirection;
      case Task.moveTowardItem:
        return moveTowardClosestVisibleItem;
      default:
        throw Exception("Function was not found!");
    }
  }
}

///Returns true if next actions are skipped
bool moveRandomDirection(Character character, MapModel map) {
  int num = Random().nextInt(4);
  switch (num) {
    case 0:
      character.move(map, character.x + 1, character.y);
      break;
    case 1:
      character.move(map, character.x - 1, character.y);
      break;
    case 2:
      character.move(map, character.x, character.y + 1);
      break;
    case 3:
      character.move(map, character.x, character.y - 1);
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

