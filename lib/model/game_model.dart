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

  Map<Point, Square> getSquaresInVision(Size maxResolution) {
    Stopwatch start = Stopwatch()..start();
    int halfVision = (vision / 2).ceil();
    Map<Point, Square> pixelSquare = getSquaresWithMaxResolution(
        Point(player.x - halfVision, player.y - halfVision),
        Point(player.x + halfVision, player.y + halfVision),
        maxResolution);
    print("Get squares ${start.elapsedMilliseconds} ms");
    return pixelSquare;
  }

  /// returns all the squares which are in the are defined by top left and bottom right corner
  Map<Point, Square> getSquaresWithMaxResolution(
      Point topLeft, Point bottomRight, Size size) {
    Map<Point, Square> squares = {};
    int width = size.width.toInt();
    int height = size.height.toInt();
    double scale = (bottomRight.x - topLeft.x) / size.width;
    if (width > bottomRight.x - topLeft.x) {
      width = (bottomRight.x - topLeft.x).abs().toInt();
      height = (bottomRight.y - topLeft.y).abs().toInt();
      scale = 1;
    }
    for (int i = 0; i <= width; i++) {
      for (int j = 0; j <= height; j++) {
        int x = (topLeft.x.toInt() + i * scale).round();
        int y = (topLeft.y.toInt() + j * scale).round();
        if (map.squares.containsKey(Point(x, y))) {
          squares[Point(i, j)] = map.squares[Point(x, y)]!;
        } else {
          squares[Point(i, j)] = Square(SquareType.wall, x, y, SquareVisibility.seen, []);
        }
      }
    }
    print("size ${squares.length}");
    return squares;
  }

  /// returns all the squares which are in the are defined by top left and bottom right corner
  List<Square> getSquares(Point topLeft, Point bottomRight) {
    int x = topLeft.x.toInt();
    int y = topLeft.y.toInt();
    List<Square> squares = [];
    while (y <= bottomRight.y.toInt()) {
      while (x <= bottomRight.x.toInt()) {
        if (map.squares.containsKey(Point(x, y))) {
          squares.add(map.squares[Point(x, y)]!);
        } else {
          squares.add(Square(SquareType.wall, x, y, SquareVisibility.seen, []));
        }
        x++;
      }
      x = topLeft.x.toInt();
      y++;
    }
    return squares;
  }

  int get vision => _vision;
}
