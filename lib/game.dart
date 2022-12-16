import 'package:anki/character/character_manager.dart';
import 'package:anki/map/map.dart';
import 'package:flutter/cupertino.dart';

class GameModel extends ChangeNotifier {
  MapModel map;
  bool paused = true;
  final CharacterManager _characterManager;

  GameModel(this.map, this._characterManager);

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
