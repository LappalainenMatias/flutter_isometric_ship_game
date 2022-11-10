import 'package:anki/enum/square_visibility.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/cupertino.dart';
import 'dart:math';
import '../square.dart';

class MapModel extends ChangeNotifier {
  var width = 0;
  var height = 0;
  final Map<Point, Square> _squares;

  MapModel(this.width, this.height, this._squares);

  updateSquareVisibility(PlayerModel player) {
    int playerX = player.x;
    int playerY = player.y;
    int playerVisibility = player.visibility;
    for (var key in _squares.keys) {
      if ((playerX - key.x).abs() + (playerY - key.y).abs() <=
          playerVisibility) {
        _squares[Point(key.x, key.y)]!.visibility = SquareVisibility.inView;
      } else {
        if (_squares[Point(key.x, key.y)]!.visibility == SquareVisibility.inView){
          _squares[Point(key.x, key.y)]!.visibility = SquareVisibility.seen;
        }
      }
    }
    notifyListeners();
  }

  Map<Point, Square> get squares => _squares;
}
