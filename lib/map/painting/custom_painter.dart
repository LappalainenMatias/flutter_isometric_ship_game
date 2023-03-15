import 'dart:ui';

import 'package:anki/map/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../game.dart';
import 'dart:math';
import '../square_visibility.dart';

class MapPainter extends CustomPainter {
  Size maxResolution = const Size(301, 301);
  final GameModel game;
  var rectPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.game);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    List<List<Color>> table = game.map.getMapSquares();
    _paintSquares(canvas, table, size);
    print("Painting took ${start.elapsedMilliseconds} ms");
  }

  _paintSquares(Canvas canvas, List<List<Color>> table, size) {
    int maxRows = game.map.vision > maxResolution.height
        ? maxResolution.height.toInt()
        : game.map.vision;
    int x = 0;
    int y = 0;
    double scale = size.width / maxRows;
    for (List<Color> row in table) {
      for (Color color in row) {
        double topLeftX = x * scale - 1; // -1 and +1 removes grid lines
        double topLeftY = y * scale - 1;
        double bottomRightX = x * scale + scale + 1;
        double bottomRightY = y * scale + scale + 1;
        rectPaint.color = color;
        final vertices = Vertices(VertexMode.triangles, [
          Offset(topLeftX, topLeftY),
          Offset(bottomRightX, topLeftY),
          Offset(bottomRightX, bottomRightY),
          Offset(topLeftX, topLeftY),
          Offset(bottomRightX, bottomRightY),
          Offset(topLeftX, bottomRightY),
        ]);
        canvas.drawVertices(vertices, BlendMode.src, rectPaint);
        x++;
      }
      y++;
      x = 0;
    }
  }

  /// This is used for better performance
  paintSquares(Canvas canvas, GameModel game, Size size) {
    int maxRows = game.map.vision > maxResolution.height
        ? maxResolution.height.toInt()
        : game.map.vision;
    int x = 0;
    double y = 0;
    double scale = size.width / maxRows;
    double skip = game.map.vision > maxRows ? game.map.vision / maxRows : 1;
    int startRow = game.map.playerCoordinate.y - (game.map.vision / 2).ceil();
    while (y < maxRows) {
      int row = (startRow + y * skip).floor();
      double topLeftX = x * scale - 1; // -1 and +1 removes grid lines
      double topLeftY = y * scale - 1;
      double bottomRightX = x * scale + scale + 1;
      double bottomRightY = y * scale + scale + 1;
      for (Square square in getSquares(row)) {
        topLeftX = x * scale - 1; // -1 and +1 removes grid lines
        topLeftY = y * scale - 1;
        bottomRightX = x * scale + scale + 1;
        bottomRightY = y * scale + scale + 1;
        rectPaint.color = getSquareColor(square);
        final vertices = Vertices(VertexMode.triangles, [
          Offset(topLeftX, topLeftY),
          Offset(bottomRightX, topLeftY),
          Offset(bottomRightX, bottomRightY),
          Offset(topLeftX, topLeftY),
          Offset(bottomRightX, bottomRightY),
          Offset(topLeftX, bottomRightY),
        ]);
        canvas.drawVertices(vertices, BlendMode.src, rectPaint);
        x++;
      }
      y++;
      x = 0;
    }
  }

  Color getSquareColor(Square square) {
    if (square.visibility == SquareVisibility.unseen) return Colors.black;
    if (square.visibility == SquareVisibility.seen) return square.colorSeen;
    return square.colorInView;
  }

  /// Resolution is the widgets resolution.
  /// We use resolution so that we do not return unnecessary large amount of squares.
  List<Square> getSquares(int column) {
    int halfVision = (game.map.vision / 2).ceil();
    Point playerCoordinate = game.map.playerCoordinate;
    List<Square> squares = _getSquaresWithMaxResolutionRow(
      Point(playerCoordinate.x - halfVision, column),
      Point(playerCoordinate.x + halfVision, column),
    );
    return squares;
  }

  /// returns all the squares which are in the are defined by top left and bottom right corner
  List<Square> _getSquaresWithMaxResolutionRow(
      Point topLeft, Point bottomRight) {
    int width = maxResolution.width.toInt();
    double scale = (bottomRight.x - topLeft.x) / maxResolution.width;
    if (width > bottomRight.x - topLeft.x) {
      width = (bottomRight.x - topLeft.x).abs().toInt();
      scale = 1;
    }
    int y = (topLeft.y.toInt() + 1 * scale).round();
    List<Square> row = [];
    for (int j = 0; j <= width; j++) {
      int x = (topLeft.x.toInt() + j * scale).round();
      row.add(game.map.getSquare(x, y));
    }
    return row;
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
