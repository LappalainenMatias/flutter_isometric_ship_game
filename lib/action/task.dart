import 'package:anki/character/character.dart';
import 'package:anki/item/natural_item.dart';
import '../map/map_helper.dart';
import '../map/map.dart';
import '../character/player.dart';
import 'dart:math';

import '../map/square.dart';


enum Task {
  moveRandomDirection(_moveRandomDirection, "player.moveToRandomDirection()\ncontinue"),
  moveTowardItem(_moveTowardClosestVisibleItem, "if player.seesItem()\n  player.moveTowardClosestItem()\n  continue"),
  cutTrees(_cutTrees, "if player.isNextToTree()\n  player.cutTree()");

  const Task(this.f, this.syntax);
  final Function f;
  final String syntax;
}

///Returns true if next tasks are skipped
bool _moveRandomDirection(Character character, MapModel map) {
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

///Returns true if next tasks are skipped
bool _moveTowardClosestVisibleItem(PlayerModel player, MapModel map) {
  List<Point> path = PathFinder.pathToClosestItem(player.x, player.y, map);
  if (path.isEmpty) return false;
  player.move(map, path[0].x.toInt(), path[0].y.toInt());
  return true;
}

///Returns true if next tasks are skipped
bool _cutTrees(PlayerModel player, MapModel map) {
  List<Square> neighbours = map.getNeighbours(player.x, player.y);
  for (var n in neighbours) {
    if (n.naturalItem == NaturalItem.tree) {
      player.inventoryAdd(NaturalItem.tree);
      n.removeNaturalItem();
    }
  }
  return false;
}

