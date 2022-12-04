import 'package:anki/map/painting/painter_optimizer.dart';
import 'package:anki/map/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../game.dart';

class MapPainter extends CustomPainter {
  Size maxResolution = const Size(301, 301);
  final GameModel game;
  var rectPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.game);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    List<List<Square>> squares = game.getSquaresInVision(maxResolution);
    /// Scale works only if width and height are equal
    double scale = size.width / squares.length;
    Map<Rect, Color> rects = createRects(squares, scale, game.player, game.enemies);
    for (Rect rect in rects.keys) {
      rectPaint.color = rects[rect]!;
      canvas.drawRect(rect, rectPaint);
    }
    print("Painting took ${start.elapsedMilliseconds} ms");
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
