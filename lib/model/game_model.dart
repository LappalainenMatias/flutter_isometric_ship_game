import 'package:anki/character_manager.dart';
import 'package:anki/model/map.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/cupertino.dart';

import '../enemy.dart';

class GameModel extends ChangeNotifier {
  MapModel map;
  PlayerModel player;
  List<Enemy> enemies;
  bool paused = true;
  final CharacterManager _characterManager;

  GameModel(this.map, this.player, this.enemies, this._characterManager);

  void start() {
    paused = false;
    _characterManager.start();
    notifyListeners();
  }

  void pause() {
    paused = true;
    _characterManager.pause();
    notifyListeners();
  }
}
