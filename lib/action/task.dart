import 'package:anki/character/character.dart';
import 'package:anki/item/natural_item.dart';
import '../item/tool.dart';
import '../map/map_helper.dart';
import '../map/map.dart';
import '../character/player.dart';
import 'dart:math';

import '../map/square.dart';

enum Task {
  moveRandomDirection(
      _moveRandomDirection, "player.moveToRandomDirection()\ncontinue"),
  moveTowardItem(_moveTowardClosestVisibleItem,
      "if player.seesItem()\n  player.moveTowardClosestItem()\n  continue"),
  cutPlant(
      _cutTreesAndBushes, "if player.isNextToPlant()\n  player.cutPlant()");

  const Task(this.f, this.syntax);

  final Function f;
  final String syntax;
}

///Returns true if next tasks are skipped
bool _moveRandomDirection(Character character, MapModel map) {
  /*
  int num = Random().nextInt(8);
  List<Point> moves = [
    Point(character.x + 1, character.y),
    Point(character.x - 1, character.y),
    Point(character.x, character.y + 1),
    Point(character.x, character.y - 1),
    Point(character.x + 1, character.y + 1),
    Point(character.x + 1, character.y - 1),
    Point(character.x - 1, character.y - 1),
    Point(character.x - 1, character.y + 1)
  ];
  character.move(map, moves[num].x.toInt(), moves[num].y.toInt());
  todo
   */
  return false;
}

///Returns true if next tasks are skipped
bool _moveTowardClosestVisibleItem(PlayerModel player, MapModel map) {
  //List<Point> path = PathFinder.pathToClosestItem(player.x, player.y, map);
  //if (path.isEmpty) return false;
  ///todo player.move(map, path[0].x.toInt(), path[0].y.toInt());
  return true;
}

///Returns true if next tasks are skipped
bool _cutTreesAndBushes(PlayerModel player, MapModel map) {
  if (!_supportsCutting(player.inventoryGetTools())) return false;
  Point<int> playerCoordinate = map.player.getCoordinate();
  List<Square> neighbours = map.getNeighbours(playerCoordinate.x, playerCoordinate.y);
  for (var neighbour in neighbours) {
    if (neighbour.naturalItem == NaturalItem.tree ||
        neighbour.naturalItem == NaturalItem.bush) {
      player.addWood(5);
      neighbour.removeNaturalItem();
    }
  }
  return false;
}

bool _supportsCutting(Set<Tool> tools) {
  bool supportsCutting = false;
  for (var tool in tools) {
    if (tool.supportsCutting) supportsCutting = true;
  }
  return supportsCutting;
}
