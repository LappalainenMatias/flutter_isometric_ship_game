import 'package:anki/map/painting/painter_optimizer.dart';
import 'package:anki/map/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../game.dart';

class MapPainter extends CustomPainter {
  Size maxResolution = const Size(301, 301);
  GameModel game;
  var rectPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.game);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    List<List<Square>> table = game.getSquaresInVision(maxResolution);
    print("Get squares ${start.elapsedMilliseconds} ms");
    start = Stopwatch()..start();
    double widthResolution = game.vision > maxResolution.width
        ? maxResolution.width
        : game.vision.toDouble();
    double scale = size.width / widthResolution;
    if (scale < 1) scale = 1;
    Map<Rect, Color> rects = createRects(table, scale, game.player, game.enemies);
    print("Reduced rects ${rects.length}");
    for (Rect rect in rects.keys) {
      rectPaint.color = rects[rect]!;
      canvas.drawRect(rect, rectPaint);
    }
    print("paint ${start.elapsedMilliseconds} ms");
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
