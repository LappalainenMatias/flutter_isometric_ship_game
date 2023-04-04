import 'package:anki/map/map.dart';
import 'package:flutter/cupertino.dart';

class GameModel extends ChangeNotifier {
  MapModel map;
  bool paused = true;

  GameModel(this.map);

  void gameLoop() {
    while(!paused) {
      //update(dt);
      //render();
      Future.delayed(Duration(milliseconds: 10), () {
        gameLoop();
      });
    }
  }

  void start() {
    paused = false;
    notifyListeners();
  }

  void pause() {
    paused = true;
    notifyListeners();
  }
}
