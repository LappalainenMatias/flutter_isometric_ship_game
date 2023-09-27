import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/cupertino.dart';
import 'game.dart';
import 'game_loop.dart';

class GameMapPainter extends CustomPainter {
  final GameLoop gameLoop;
  final Game game;
  final ui.FragmentShader _waterShader;
  final _landPaint = Paint()..style = PaintingStyle.fill;
  final _underWaterPaint = Paint()..style = PaintingStyle.fill;
  double _timePassed = 0;
  ui.Image textureImage;

  GameMapPainter(this._waterShader, this.gameLoop, this.game, this.textureImage)
      : super(repaint: gameLoop);

  @override
  void paint(Canvas canvas, Size size) {
    _timePassed += gameLoop.dt;
    // TODO: Do we have to do all of these every frame?
    _addWaterShader(_underWaterPaint);
    _addTexture(_landPaint);
    _isometricTransformation(canvas, size);
    ({List<ui.Vertices> underWater, List<ui.Vertices> aboveWater}) vertices =
        game.getVerticesInView();
    for (var v in vertices.underWater) {
      canvas.drawVertices(v, BlendMode.dst, _landPaint);
    }
    _paintWaterPlane(canvas, size);
    for (var v in vertices.aboveWater) {
      canvas.drawVertices(v, BlendMode.srcOver, _landPaint);
    }
    //List<IsoCoordinate> points = game.getSprilal();
    //double width = game.viewWidth / 250;
    //for (var p in points) {
    //  canvas.drawCircle(
    //    Offset(p.isoX, p.isoY),
    //    width,
    //    Paint()..color = Color(0xFFBD3838),
    //  );
    //}
  }

  void _addTexture(Paint myPaint) {
    myPaint.shader = ImageShader(
      textureImage,
      TileMode.clamp,
      TileMode.clamp,
      Matrix4.identity().storage,
    );
  }

  void _paintWaterPlane(Canvas canvas, Size size) {
    canvas.drawRect(
      Rect.fromPoints(
        Offset(game.viewTopLeft.isoX, game.viewTopLeft.isoY),
        Offset(game.viewBottomRight.isoX, game.viewBottomRight.isoY),
      ),
      _underWaterPaint,
    );
  }

  void _addWaterShader(Paint myPaint) {
    _waterShader.setFloat(0, _timePassed);
    myPaint.shader = _waterShader;
  }

  void _isometricTransformation(Canvas canvas, Size size) {
    double scale =
        min(size.width / game.viewWidth, size.height / game.viewHeight);
    canvas.scale(scale, -scale);
    canvas.translate(
      -game.viewCenter.isoX.toDouble() + size.width / scale / 2,
      -game.viewCenter.isoY.toDouble() - size.height / scale / 2,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
