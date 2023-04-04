import 'dart:math';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

class MapPainter extends CustomPainter {
  final MapModel map;
  var groundPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  var waterPaint = Paint()
    ..color = const Color(0x33096ca9)
    ..style = PaintingStyle.fill;

  var topWaterLayerPaint = Paint()
    ..color = const Color(0xb3096ca9)
    ..style = PaintingStyle.fill;

  MapPainter(this.map);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    double scale = min(size.width / map.camera.isoMetricWidth,
        size.height / map.camera.isoMetricHeight);
    canvas.scale(scale, -scale);
    canvas.translate(
      -map.player.getIsometricCoordinate().x.toDouble() +
          size.width / scale / 2,
      -map.player.getIsometricCoordinate().y.toDouble() -
          size.height / scale / 2,
    );
    Map<int, List<List<Vertices>>> vertices = map.getUnderWaterVerticesInCamera();
    _paintUnderWater(canvas, vertices);
    _paintGround(canvas, map.getGroundVerticesInCamera());
    _paintPlayer(canvas);
    print("Paint: ${start.elapsedMilliseconds} ms");
  }

  void _paintUnderWater(Canvas canvas, Map<int, List<List<Vertices>>> vertices) {
    List<int> keys = vertices.keys.toList();
    keys.sort((a, b) => a.compareTo(b));
    for (var key in keys) {
      for (var vs in vertices[key]!) {
        for (var v in vs) {
          canvas.drawVertices(v, BlendMode.dst, groundPaint);
        }
      }
      if (key == keys.last) {
        canvas.drawRect(canvas.getDestinationClipBounds(), topWaterLayerPaint);
      } else {
        canvas.drawRect(canvas.getDestinationClipBounds(), waterPaint);
      }
    }
  }

  void _paintGround(Canvas canvas, List<Vertices> vertices) {
    for (var vs in vertices) {
      canvas.drawVertices(vs, BlendMode.dst, groundPaint);
    }
  }

  void _paintPlayer(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.getIsometricCoordinate().x.toDouble(),
      map.player.getIsometricCoordinate().y.toDouble(),
    );
    canvas.drawCircle(playerOffset, 3, groundPaint..color = Colors.orange);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
