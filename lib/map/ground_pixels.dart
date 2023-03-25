import 'dart:typed_data';
import 'dart:ui';

import 'package:anki/map/abstract_map.dart';
import 'package:matrix2d/matrix2d.dart';
import 'dart:math';

/// This class is used to store the map of the game.
/// It is a 2D array of pixels.
/// This is used for better performance
class GroundPixels {
  Point<int> topLeft;
  Point<int> bottomRight;
  final AbstractMap _map;
  final Matrix2d _m2d = const Matrix2d();
  var matrix = [];

  GroundPixels(this._map, this.topLeft, this.bottomRight) {
    _fillColors(topLeft, bottomRight);
  }

  void _fillColors(Point<int> topLeft, Point<int> bottomRight) {
    for (int y = topLeft.y; y >= bottomRight.y; y--) {
      List row = [];
      for (int x = topLeft.x; x <= bottomRight.x; x++) {
        Color color = _map.getSquare(x, y).colorInView;
        List pixel = colorToPixel(color);
        row.add(pixel);
      }
      matrix.add(row);
    }
  }

  List colorToPixel(Color color) {
    return [color.red, color.green, color.blue, color.alpha];
  }

  /// todo does not work with zoom out and zoom in yet
  void shift(Point<int> vector) {
    Stopwatch start = Stopwatch()..start();
    while (vector != const Point(0, 0)) {
      if (vector.x > 0) {
        vector -= const Point(1, 0);
        _addColumnToRight();
        _removeColumnFromLeft();
      } else if (vector.x < 0) {
        vector += const Point(1, 0);
        _addColumnToLeft();
        _removeColumnFromRight();
      }
      if (vector.y > 0) {
        vector -= const Point(0, 1);
        _addRowToTop();
        _removeRowFromBottom();
      } else if (vector.y < 0) {
        vector += const Point(0, 1);
        _addRowToBottom();
        _removeRowFromTop();
      }
    }
    print("Ground update: ${start.elapsedMilliseconds} ms");
  }

  List<List<dynamic>> _createColumn(
      Point<int> topLeft, Point<int> bottomRight) {
    List<List<dynamic>> table = [];
    for (var y = topLeft.y; y >= bottomRight.y; y--) {
      Color color = _map.getSquare(topLeft.x, y).colorInView;
      List pixel = colorToPixel(color);
      table.add([pixel]);
    }
    return table;
  }

  List _createRow(Point<int> topLeft, Point<int> bottomRight) {
    List table = [];
    List row = [];
    for (var x = topLeft.x; x <= bottomRight.x; x++) {
      Color color = _map.getSquare(x, topLeft.y).colorInView;
      List pixel = colorToPixel(color);
      row.add(pixel);
    }
    table.add(row);
    return table;
  }

  void _addColumnToRight() {
    bottomRight += const Point(1, 0);
    var topRight = Point(bottomRight.x, topLeft.y);
    List table = _createColumn(topRight, bottomRight);
    matrix = _m2d.concatenate(matrix, table, axis: 1);
  }

  void _addColumnToLeft() {
    topLeft += const Point(-1, 0);
    var bottomLeft = Point(topLeft.x, bottomRight.y);
    List table = _createColumn(topLeft, bottomLeft);
    matrix = _m2d.concatenate(table, matrix, axis: 1);
  }

  void _addRowToBottom() {
    bottomRight += const Point(0, -1);
    var bottomLeft = Point(topLeft.x, bottomRight.y);
    List table = _createRow(bottomLeft, bottomRight);
    matrix = _m2d.concatenate(matrix, table);
  }

  void _addRowToTop() {
    topLeft += const Point(0, 1);
    var topRight = Point(bottomRight.x, topLeft.y);
    var table = _createRow(topLeft, topRight);
    matrix = _m2d.concatenate(table, matrix);
  }

  void _removeColumnFromRight() {
    var shape = matrix.shape;
    bottomRight += const Point(-1, 0);
    matrix = _m2d.slice(matrix, [0, shape[0]], [0, shape[1] - 1]);
  }

  void _removeColumnFromLeft() {
    var shape = matrix.shape;
    topLeft += const Point(1, 0);
    matrix = _m2d.slice(matrix, [0, shape[0]], [1, shape[1]]);
  }

  void _removeRowFromBottom() {
    var shape = matrix.shape;
    bottomRight += const Point(0, 1);
    matrix = _m2d.slice(matrix, [0, shape[0] - 1], [0, shape[1]]);
  }

  void _removeRowFromTop() {
    var shape = matrix.shape;
    topLeft += const Point(0, -1);
    matrix = _m2d.slice(matrix, [1, shape[0]], [0, shape[1]]);
  }
}
