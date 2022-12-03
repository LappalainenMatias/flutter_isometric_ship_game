import 'package:anki/character/character.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import 'task.dart';
import 'weapon.dart';

class Enemy implements Character {
  @override
  int x;
  @override
  int y;
  int visibility;
  int maxHearts;
  Weapon weapon;
  List<Task> actions;
  @override
  int hearts;

  Enemy(this.x, this.y, this.visibility, this.maxHearts, this.hearts,
      this.weapon, this.actions);

  @override
  void move(MapModel map, int newX, int newY) {
    if (!map.hasSquare(newX, newY)) return;
    Square s = map.getSquare(newX, newY);
    if (s.type.isVisitable()) {
      x = newX;
      y = newY;
      map.update();
    }
  }

  @override
  void setHearts(int hearts) {
    if (hearts <= 0) {
      hearts = 0;
    } else if (hearts > maxHearts) {
      hearts = maxHearts;
    } else {
      hearts = hearts;
    }
  }
}
