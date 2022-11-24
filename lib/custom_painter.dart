import 'package:anki/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:math';
import 'model/game_model.dart';

class MapPainter extends CustomPainter {
  GameModel game;

  MapPainter(this.game);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    var paint1 = Paint()
      ..color = const Color(0xff995588)
      ..style = PaintingStyle.fill;
    Map<Point, Square> squares = game.getSquaresInVision(size);
    double scale = size.width / game.vision;
    if (scale < 1) scale = 1;
    for (Point point in squares.keys) {
      Square square = squares[point]!;
      double topLeftX = point.x * scale - 1;
      double topLeftY = point.y * scale - 1;
      double bottomRightX = topLeftX + scale + 1;
      double bottomRightY = topLeftY + scale + 1;
      paint1.color = square.color;
      canvas.drawRect(Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY),
          paint1);
    }
    print("paint ${start.elapsedMilliseconds} ms");
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}

/// xxx
/// xxx
/// xxx
///
/// xx
/// xx
