import 'dart:math';
import 'dart:ui' as ui;
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

class MapPainter extends CustomPainter {
  final MapModel map;
  ui.FragmentShader waterShader;
  var defaultPaint = Paint()..style = PaintingStyle.fill;
  var waterPaint = Paint()..style = PaintingStyle.fill;
  double dt;

  MapPainter(this.map, this.waterShader, this.dt);

  @override
  void paint(Canvas canvas, Size size) {
    var vertices = map.getVerticesInCamera();
    _addShaders(size);
    _isometricTransformation(canvas, size);
    for (var vs in vertices["underWater"]!) {
      canvas.drawVertices(vs, BlendMode.srcOver, waterPaint);
    }
    for (var vs in vertices["aboveWater"]!) {
      canvas.drawVertices(vs, BlendMode.dst, defaultPaint);
    }
    _paintPlayer(canvas);
  }

  void _addShaders(Size size) {
    waterShader.setFloat(0, size.width);
    waterShader.setFloat(1, size.height);
    waterShader.setFloat(2, dt);
    waterPaint.shader = waterShader;
  }

  void _isometricTransformation(Canvas canvas, Size size) {
    double scale = min(size.width / map.width(), size.height / map.width());
    var coord = map.playerCoordinate();
    canvas.scale(scale, -scale);
    canvas.translate(
      -coord.isoX.toDouble() + size.width / scale / 2,
      -coord.isoY.toDouble() - size.height / scale / 2,
    );
  }

  void _paintPlayer(Canvas canvas) {
    Offset playerOffset = Offset(
      map.playerCoordinate().isoX.toDouble(),
      map.playerCoordinate().isoY.toDouble(),
    );
    canvas.drawCircle(playerOffset, 2, defaultPaint..color = Colors.orange);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
