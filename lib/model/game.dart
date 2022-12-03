import 'package:anki/character_manager.dart';
import 'package:anki/enum/square_visibility.dart';
import 'package:anki/model/map.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/cupertino.dart';
import 'dart:math';

import '../enemy.dart';
import '../enum/square_type.dart';
import '../square.dart';

class GameModel extends ChangeNotifier {
  MapModel map;
  PlayerModel player;
  List<Enemy> enemies;
  bool paused = true;

  /// Notice that vision must be odd so that player can be at the center of vision
  int _vision = 25;
  double zoomMultiplier = 1.5;
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

  void _updateVision(int newVision) {
    if (newVision < 3) {
      _vision = 3;
      notifyListeners();
    } else {
      if (newVision.isEven) {
        newVision += 1;
      }
      _vision = newVision;
      notifyListeners();
    }
  }

  void zoomIn() {
    _updateVision((_vision / zoomMultiplier).round());
  }

  void zoomOut() {
    _updateVision((_vision * zoomMultiplier).round());
  }

  /// Resolution is the widgets resolution.
  /// We use resolution so that we do not return unnecessary large amount of squares.
  List<List<Square>> getSquaresInVision(Size resolution) {
    int halfVision = (vision / 2).ceil();
    List<List<Square>> squares = _getSquaresWithMaxResolution(
        Point(player.x - halfVision, player.y - halfVision),
        Point(player.x + halfVision, player.y + halfVision),
        resolution);
    return squares;
  }

  /// returns all the squares which are in the are defined by top left and bottom right corner
  List<List<Square>> _getSquaresWithMaxResolution(
      Point topLeft, Point bottomRight, Size resolution) {
    List<List<Square>> squares = [];
    int width = resolution.width.toInt();
    int height = resolution.height.toInt();
    double scale = (bottomRight.x - topLeft.x) / resolution.width;
    if (width > bottomRight.x - topLeft.x) {
      width = (bottomRight.x - topLeft.x).abs().toInt();
      height = (bottomRight.y - topLeft.y).abs().toInt();
      scale = 1;
    }
    for (int i = 0; i <= height; i++) {
      List<Square> row = [];
      int y = (topLeft.y.toInt() + i * scale).round();
      for (int j = 0; j <= width; j++) {
        int x = (topLeft.x.toInt() + j * scale).round();
        if (map.hasSquare(x, y)) {
          row.add(map.getSquare(x, y));
        } else {
          row.add(Square(SquareType.wall, x, y, SquareVisibility.unseen, []));
        }
      }
      squares.add(row);
    }
    print("size ${squares.length * squares[0].length}");
    return squares;
  }

  int get vision => _vision;
}
