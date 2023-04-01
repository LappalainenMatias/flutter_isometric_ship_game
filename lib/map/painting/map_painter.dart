import 'dart:math';
import 'dart:ui';
import 'package:anki/map/coordinate_helper.dart';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

class MapPainter extends CustomPainter {
  final MapModel map;
  var groundPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.map);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    double scale = min(size.width / map.camera.isoMetricWidth,
        size.height / map.camera.isoMetricHeight);
    canvas.scale(scale, -scale);
    canvas.translate(
      -map.player.getIsometricCoordinate().x.toDouble() + size.width / scale / 2,
      -map.player.getIsometricCoordinate().y.toDouble() - size.height / scale / 2,
    );
    _paintGroundVertices(canvas, map.getVerticesInCamera());
    _paintPlayer(canvas);
    print("Paint: ${start.elapsedMilliseconds} ms");
  }

  void _paintGroundVertices(Canvas canvas, List<Vertices> vertices) {
    for (var vertice in vertices) {
      canvas.drawVertices(vertice, BlendMode.src, groundPaint);
    }
  }

  void _paintLineToOrigin(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.getIsometricCoordinate().x.toDouble(),
      map.player.getIsometricCoordinate().y.toDouble(),
    );
    canvas.drawLine(Offset.zero, playerOffset, groundPaint..color = Colors.red);
  }

  void _paintPlayer(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.getIsometricCoordinate().x.toDouble(),
      map.player.getIsometricCoordinate().y.toDouble(),
    );
    canvas.drawCircle(playerOffset, 3, groundPaint..color = Colors.orange);
  }

  void _paintRectToCameraBorders(Canvas canvas) {
    Offset topLeft = Offset(
      map.camera.getIsometricTopLeft().x.toDouble(),
      map.camera.getIsometricTopLeft().y.toDouble(),
    );
    Offset bottomRight = Offset(
      map.camera.getIsometricBottomRight().x.toDouble(),
      map.camera.getIsometricBottomRight().y.toDouble(),
    );
    canvas.drawRect(
        Rect.fromPoints(
          topLeft,
          bottomRight,
        ),
        groundPaint..color = Colors.red.withAlpha(100));
  }

  void _paintCompassToOrigin(Canvas canvas) {
    Point<int> areaTopLeftInScreen = const Point(0, 0);
    Point<int> areaBottomRightInScreen = const Point(5, -5);
    Offset testTopLeft = Offset(
      areaTopLeftInScreen.x.toDouble(),
      areaTopLeftInScreen.y.toDouble(),
    );
    Offset testBottomRight = Offset(
      areaBottomRightInScreen.x.toDouble(),
      areaBottomRightInScreen.y.toDouble(),
    );
    canvas.drawRect(
        Rect.fromPoints(
          testTopLeft,
          testBottomRight,
        ),
        groundPaint..color = Colors.red);
    areaTopLeftInScreen = Point(0, -5);
    areaBottomRightInScreen = Point(10, -10);
    testTopLeft = Offset(
      areaTopLeftInScreen.x.toDouble(),
      areaTopLeftInScreen.y.toDouble(),
    );
    testBottomRight = Offset(
      areaBottomRightInScreen.x.toDouble(),
      areaBottomRightInScreen.y.toDouble(),
    );
    canvas.drawRect(
        Rect.fromPoints(
          testTopLeft,
          testBottomRight,
        ),
        groundPaint..color = Colors.black);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
