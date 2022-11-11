import 'model/map.dart';
import 'model/player.dart';
import 'dart:math';

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
