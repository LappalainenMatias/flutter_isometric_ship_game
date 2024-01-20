import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import '../../foundation/camera/camera.dart';
import '../../gameloop/game_loop.dart';

class GameMapPainter extends CustomPainter {
  final GameLoop gameLoop;
  final ui.FragmentShader _cloudShader;
  final ui.FragmentShader _waterShader;
  final _landPaint = Paint();
  var _waterPaint = Paint();
  var _shadowPaint = Paint();
  ui.Image textureImage;

  GameMapPainter(
      this._waterShader, this._cloudShader, this.gameLoop, this.textureImage)
      : super(repaint: gameLoop);

  @override
  void paint(Canvas canvas, Size size) {
    // Set up shaders
    _cloudShader.setFloat(0, gameLoop.timePassed);
    _cloudShader.setFloat(1, size.width);
    _cloudShader.setFloat(2, size.height);
    _shadowPaint = Paint();
    _shadowPaint.shader = _cloudShader;
    _waterPaint = Paint()..blendMode = BlendMode.srcOver;
    _waterPaint.color = Colors.blue[500]!.withOpacity(0.4);
    _waterShader.setFloat(0, gameLoop.timePassed);
    _waterPaint.shader = _waterShader;

    var camera = gameLoop.game.getCamera();
    var data = gameLoop.renderingData();

    _transformations(canvas, size, camera);

    // Draw under water things
    for (var data in data.$1) {
      canvas.drawRawAtlas(
        textureImage,
        data.$1.rSTTransforms,
        data.$1.rects,
        null,
        null,
        data.$2,
        _landPaint,
      );
    }

    // Draw water plane
    canvas.drawRect(
      Rect.fromPoints(
        Offset(camera.topLeft.isoX, camera.topLeft.isoY),
        Offset(camera.bottomRight.isoX, camera.bottomRight.isoY),
      ),
      _waterPaint,
    );

    // Draw above water things
    for (var data in data.$2) {
      canvas.drawRawAtlas(
        textureImage,
        data.$1.rSTTransforms,
        data.$1.rects,
        null,
        null,
        data.$2,
        _landPaint,
      );
    }

    // Draw cloud shadows
    canvas.drawRect(
      Rect.fromPoints(
        Offset(camera.topLeft.isoX, camera.topLeft.isoY),
        Offset(camera.bottomRight.isoX, camera.bottomRight.isoY),
      ),
      _shadowPaint,
    );
  }

  void _transformations(Canvas canvas, Size size, Camera camera) {
    double viewWidth = camera.width();
    double viewHeight = camera.height();
    double scale = min(size.width / viewWidth, size.height / viewHeight);
    canvas.scale(scale, scale);
    canvas.translate(
      -camera.center.isoX.toDouble() + size.width / scale / 2,
      -camera.center.isoY.toDouble() + size.height / scale / 2,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
