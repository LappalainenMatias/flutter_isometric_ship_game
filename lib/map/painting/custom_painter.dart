import 'package:anki/map/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../character/enemy.dart';
import '../../character/player.dart';
import '../../game.dart';
import 'dart:math';

import '../square_type.dart';
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
    paintSquares(canvas, game, size);
    print("Painting took ${start.elapsedMilliseconds} ms");
  }

  /// This is used for better performance
  paintSquares(Canvas canvas, GameModel game, Size size) {
    int maxRows = game.vision > maxResolution.height
        ? maxResolution.height.toInt()
        : game.vision;
    int x = 0;
    double y = 0;
    double scale = size.width / maxRows;
    double skip = game.vision > maxRows ? game.vision / maxRows : 1;
    int startRow = game.player.y - (game.vision / 2).ceil();
    while (y < maxRows) {
      int row = (startRow + y * skip).floor();
      List<Square> squares = getSquares(row);
      Color previous = squares[0].colorInView;
      Color current = squares[0].colorInView;
      double topLeftX = x * scale - 1; // -1 and +1 removes grid lines
      double topLeftY = y * scale - 1;
      double bottomRightX = x * scale + scale + 1;
      double bottomRightY = y * scale + scale + 1;
      for (Square square in squares) {
        current = getSquareColor(square, game.player, game.enemies);
        if (current == previous) {
          bottomRightX = x * scale + scale + 1;
          bottomRightY = y * scale + scale + 1;
        } else {
          rectPaint.color = previous;
          canvas.drawRect(
              Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY),
              rectPaint);
          topLeftX = x * scale - 1;
          topLeftY = y * scale - 1;
          bottomRightX = x * scale + scale + 1;
          bottomRightY = y * scale + scale + 1;
        }
        if (x + 1 == squares.length) {
          rectPaint.color = current;
          canvas.drawRect(
              Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY),
              rectPaint);
        }
        previous = current;
        x++;
      }
      y++;
      x = 0;
    }
  }

  Color getSquareColor(
      Square square, PlayerModel player, List<Enemy> enemies) {
    if (square.visibility == SquareVisibility.unseen) return Colors.black;
    if (square.x == player.x && square.y == player.y) return player.color;
    if (square.visibility == SquareVisibility.seen) return square.colorSeen;
    for (Enemy enemy in enemies) {
      if (enemy.x == square.x && enemy.y == square.y) {
        return enemy.color;
      }
    }
    return square.colorInView;
  }

  /// Resolution is the widgets resolution.
  /// We use resolution so that we do not return unnecessary large amount of squares.
  List<Square> getSquares(int column) {
    int halfVision = (game.vision / 2).ceil();
    List<Square> squares = _getSquaresWithMaxResolutionRow(
      Point(game.player.x - halfVision, column),
      Point(game.player.x + halfVision, column),
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
      if (game.map.hasSquare(x, y)) {
        row.add(game.map.getSquare(x, y));
      } else {
        row.add(
            Square(SquareType.wall, x, y, SquareVisibility.unseen, [], null));
      }
    }
    return row;
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
