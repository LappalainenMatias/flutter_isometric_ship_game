import 'dart:math';
import 'dart:ui';
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
    double scaleW = size.width / map.camera.width;
    canvas.scale(scaleW, -scaleW);
    canvas.translate(
      -map.camera.topLeft.x.toDouble(),
      -map.camera.topLeft.y.toDouble(),
    );
    _paintGroundVertices(canvas, map.getVerticesInCamera());
    _paintCompassToOrigin(canvas);
    _paintPlayer(canvas);
    _paintLineToOrigin(canvas);
    //_paintRectToCameraBorders(canvas);
    print("Paint: ${start.elapsedMilliseconds} ms, area: "
        "${(map.camera.topLeft)}");
  }

  void _paintGroundVertices(Canvas canvas, List<Vertices> vertices) {
    print("vertices: ${vertices.length}");
    for (var vertice in vertices) {
      canvas.drawVertices(vertice, BlendMode.dst, groundPaint);
    }
  }

  void _paintLineToOrigin(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.coordinate.value.x.toDouble(),
      map.player.coordinate.value.y.toDouble(),
    );
    canvas.drawLine(Offset.zero, playerOffset, groundPaint..color = Colors.red);
  }

  void _paintPlayer(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.coordinate.value.x.toDouble(),
      map.player.coordinate.value.y.toDouble(),
    );
    canvas.drawCircle(playerOffset, 3, groundPaint..color = Colors.orange);
  }

  void _paintRectToCameraBorders(Canvas canvas) {
    Offset topLeft = Offset(
      map.camera.topLeft.x.toDouble(),
      map.camera.topLeft.y.toDouble(),
    );
    Offset bottomRight = Offset(
      map.camera.bottomRight.x.toDouble(),
      map.camera.bottomRight.y.toDouble(),
    );
    canvas.drawRect(
        Rect.fromPoints(
          topLeft,
          bottomRight,
        ),
        groundPaint..color = Colors.red.withAlpha(125));
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
