import 'dart:math';
import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

import '../area/ground_area.dart';
import '../area/region.dart';

class MapPainter extends CustomPainter {
  Size maxResolution = const Size(301, 301);
  final MapModel map;
  var groundPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.map);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    canvas.translate(0, map.camera.topLeft.y.toDouble());
    double scale = size.width / map.camera.width;
    canvas.scale(scale, scale * -1);
    _paintGroundTest(canvas, map.getGround(), size);
    print("Paint: ${start.elapsedMilliseconds} ms, area: "
        "${(map.camera.width * map.camera.height)}");
  }

  void _paintGroundVertices(Canvas canvas, List<Region> regions, Size size) {
    Point<int> cameraTopLeft = map.camera.topLeft;
    Point<int> cameraBottomRight = map.camera.bottomRight;
    double scale = size.width / (cameraBottomRight.x - cameraTopLeft.x);
    print("Regions: ${regions.length}");
    for (var region in regions) {
      if (region.verticesRaw != null) {
        canvas.drawVertices(region.verticesRaw!, BlendMode.dst, groundPaint);
      }
    }
  }

  void _paintGroundTest(Canvas canvas, List<GroundArea> areas, Size size) {
    for (GroundArea area in areas) {
      groundPaint.color = area.type.color;
      canvas.drawRect(
        Rect.fromPoints(
          ///todo move from points to offset
          Offset(
            area.topLeft.x.toDouble(),
            area.topLeft.y.toDouble(),
          ),
          Offset(
            area.bottomRight.x.toDouble(),
            area.bottomRight.y.toDouble(),
          ),
        ),
        groundPaint,
      );
    }
    _paintCompassToOrigin(canvas, size);
  }

  void _paintCompassToOrigin(Canvas canvas, Size size) {
    Point<int> areaTopLeftInScreen = Point(0, 0);
    Point<int> areaBottomRightInScreen = Point(5, -5);
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
    areaBottomRightInScreen = Point(5, -10);
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

  void _paintGround(Canvas canvas, List<GroundArea> areas, Size size) {
    Point<int> cameraTopLeft = map.camera.topLeft;
    Point<int> cameraBottomRight = map.camera.bottomRight;
    double scale = size.width / (cameraBottomRight.x - cameraTopLeft.x);
    for (GroundArea area in areas) {
      groundPaint.color = area.type.color;
      Point<int> areaTopLeftInScreen = area.topLeft - cameraTopLeft;
      Point<int> areaBottomRightInScreen = area.bottomRight - cameraTopLeft;
      Offset topLeft = Offset(
        areaTopLeftInScreen.x.toDouble(),
        areaTopLeftInScreen.y.toDouble() * -1,
      );
      Offset bottomRight = Offset(
        areaBottomRightInScreen.x.toDouble(),
        areaBottomRightInScreen.y.toDouble() * -1,
      );
      canvas.drawRect(
        Rect.fromPoints(
          topLeft * scale,
          bottomRight * scale,
        ),
        groundPaint,
      );
    }
    Point<int> areaTopLeftInScreen = Point(0, 0) - cameraTopLeft;
    Point<int> areaBottomRightInScreen = Point(5, -5) - cameraTopLeft;
    Offset testTopLeft = Offset(
      areaTopLeftInScreen.x.toDouble(),
      areaTopLeftInScreen.y.toDouble() * -1,
    );
    Offset testBottomRight = Offset(
      areaBottomRightInScreen.x.toDouble(),
      areaBottomRightInScreen.y.toDouble() * -1,
    );
    canvas.drawRect(
        Rect.fromPoints(
          testTopLeft * scale,
          testBottomRight * scale,
        ),
        groundPaint..color = Colors.red);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
