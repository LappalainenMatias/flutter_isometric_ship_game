import 'dart:math';
import 'dart:ui' as ui;
import 'package:anki/map/iso_coordinate.dart';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

class MapPainter extends CustomPainter {
  final MapModel map;
  ui.FragmentShader shader;
  var defaultPaint = Paint()..style = PaintingStyle.fill;
  var waterPaint = Paint()..style = PaintingStyle.fill;
  double dt;

  MapPainter(this.map, this.shader, this.dt);

  @override
  void paint(Canvas canvas, Size size) {
    var time = Stopwatch()..start();
    shader.setFloat(0, size.width / 10);
    shader.setFloat(1, size.height / 10);
    shader.setFloat(2, dt);
    waterPaint.shader = shader;
    double scale =
        min(size.width / map.camera.width, size.height / map.camera.height);
    canvas.scale(scale, -scale);
    canvas.translate(
      -map.player.coordinate.value.isoX.toDouble() + size.width / scale / 2,
      -map.player.coordinate.value.isoY.toDouble() - size.height / scale / 2,
    );
    var vertices = map.getVerticesInCamera();
    for (var vs in vertices["underWater"]!) {
      canvas.drawVertices(vs, BlendMode.srcOver, waterPaint);
    }
    for (var vs in vertices["ground"]!) {
      canvas.drawVertices(vs, BlendMode.dst, defaultPaint);
    }
    //canvas.drawRect(canvas.getDestinationClipBounds(), waterPaint);
    _paintPlayer(canvas);
    print('paint time: ${time.elapsedMilliseconds}ms');
  }

  void _paintPlayer(Canvas canvas) {
    Offset playerOffset = Offset(
      map.player.coordinate.value.isoX.toDouble(),
      map.player.coordinate.value.isoY.toDouble(),
    );
    canvas.drawCircle(playerOffset, 2, defaultPaint..color = Colors.orange);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
