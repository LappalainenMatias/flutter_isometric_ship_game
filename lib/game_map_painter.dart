import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'coordinates/iso_coordinate.dart';
import 'game.dart';
import 'game_loop.dart';

class GameMapPainter extends CustomPainter {
  final GameLoop gameLoop;
  final Game game;
  final ui.FragmentShader _waterShader;
  final _paint = Paint()..style = PaintingStyle.fill;
  final _paintWithWaterShader = Paint()..style = PaintingStyle.fill;
  double _timePassed = 0;
  ui.Image textureImage;

  GameMapPainter(this._waterShader, this.gameLoop, this.game, this.textureImage)
      : super(repaint: gameLoop) {
    _addWaterShader(_paintWithWaterShader);
  }

  @override
  void paint(Canvas canvas, Size size) {
    /// Updates water shader and creates the illusion of water movement
    _timePassed += gameLoop.dt;
    _waterShader.setFloat(0, _timePassed);

    _transformations(canvas, size);

    var atlasData = game.getAtlasData();

    /// Draw under water things
    for (var data in atlasData.underWater) {
      canvas.drawRawAtlas(
        textureImage,
        data.$1,
        data.$2,
        null,
        null,
        data.$3,
        _paint,
      );
    }

    /// Draw water plane
    canvas.drawRect(
      Rect.fromPoints(
        Offset(game.viewTopLeft.isoX, game.viewTopLeft.isoY),
        Offset(game.viewBottomRight.isoX, game.viewBottomRight.isoY),
      ),
      _paintWithWaterShader,
    );

    /// Draw above water things
    for (var data in atlasData.aboveWater) {
      canvas.drawRawAtlas(
        textureImage,
        data.$1,
        data.$2,
        null,
        null,
        data.$3,
        _paint,
      );
    }
  }

  void _addWaterShader(Paint myPaint) {
    _waterShader.setFloat(0, _timePassed);
    myPaint.shader = _waterShader;
  }

  void _transformations(Canvas canvas, Size size) {
    double scale =
        min(size.width / game.viewWidth, size.height / game.viewHeight);
    canvas.scale(scale, -scale);
    canvas.translate(
      -game.viewCenter.isoX.toDouble() + size.width / scale / 2,
      -game.viewCenter.isoY.toDouble() - size.height / scale / 2,
    );
  }

  /// Used for debuging. Shows the coordinates where the visible region hangler
  /// searched for regions.
  //void _showSearchedRegionCoordinates(Canvas canvas) {
  //  List<IsoCoordinate> points = game.getSprilalOfSearchedRegions();
  //  double width = game.viewWidth / 150;
  //  for (var p in points) {
  //    canvas.drawCircle(
  //      Offset(p.isoX, p.isoY),
  //      width,
  //      Paint()..color = const Color(0xFFBD3838),
  //    );
  //  }
  //}

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
