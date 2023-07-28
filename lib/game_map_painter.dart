import 'dart:math';
import 'dart:ui';
import 'package:anki/utils/map_dto.dart';
import 'package:flutter/cupertino.dart';

import 'game.dart';
import 'game_loop.dart';

class GameMapPainter extends CustomPainter {
  final GameLoop gameLoop;
  final map = Game();
  final FragmentShader _waterShader;
  final _landPaint = Paint()..style = PaintingStyle.fill;
  final _backgroundWaterPaint = Paint()
    ..style = PaintingStyle.fill
    ..color = const Color(0xFF012E8F);
  final _waterShaderPaint = Paint()..style = PaintingStyle.fill;
  final double _dt = 0;

  GameMapPainter(this._waterShader, this.gameLoop) : super(repaint: gameLoop);

  @override
  void paint(Canvas canvas, Size size) {
    _addWaterShader(_waterShaderPaint);
    _isometricTransformation(canvas, size);
    _paintBackgroundWater(canvas, size);
    MapDTO vertices = map.getVerticesInView();
    for (var v in vertices.underWater) {
      canvas.drawVertices(v, BlendMode.srcOver, _waterShaderPaint);
    }
    for (var v in vertices.aboveWater) {
      canvas.drawVertices(v, BlendMode.srcOver, _landPaint);
    }
  }

  /// Currently we do not create tiles which are
  /// deep under water. Because of this we have to paint the background with
  /// water so that it does not contain holes.
  void _paintBackgroundWater(Canvas canvas, Size size) {
    canvas.drawRect(
      Rect.fromPoints(
        Offset(map.viewTopLeft.isoX, map.viewTopLeft.isoY),
        Offset(map.viewBottomRight.isoX, map.viewBottomRight.isoY),
      ),
      _backgroundWaterPaint,
    );
    canvas.drawRect(
      Rect.fromPoints(
        Offset(map.viewTopLeft.isoX, map.viewTopLeft.isoY),
        Offset(map.viewBottomRight.isoX, map.viewBottomRight.isoY),
      ),
      _waterShaderPaint,
    );
  }

  void _addWaterShader(Paint paint) {
    _waterShader.setFloat(0, _dt);
    paint.shader = _waterShader;
  }

  void _isometricTransformation(Canvas canvas, Size size) {
    double scale =
        min(size.width / map.viewWidth, size.height / map.viewHeight);
    canvas.scale(scale, -scale);
    canvas.translate(
      -map.viewCenter.isoX.toDouble() + size.width / scale / 2,
      -map.viewCenter.isoY.toDouble() - size.height / scale / 2,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
