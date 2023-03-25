import 'package:anki/map/abstract_map.dart';
import 'package:matrix2d/matrix2d.dart';
import 'dart:math';

/// This class is used to store the map of the game.
/// It is a 2D array of pixels.
/// This is used for better performance
class GroundPixels {
  Point<int> groundTopLeft;
  Point<int> groundBottomRight;
  final AbstractMap _map;
  final Matrix2d _m2d = const Matrix2d();
  var matrix = [];

  GroundPixels(this._map, this.groundTopLeft, this.groundBottomRight) {
    _fillColors(groundTopLeft, groundBottomRight);
  }

  void _fillColors(Point<int> topLeft, Point<int> bottomRight) {
    for (int y = topLeft.y; y >= bottomRight.y; y--) {
      List row = [];
      for (int x = topLeft.x; x <= bottomRight.x; x++) {
        row.add(_map.getSquare(x, y).colorInView.value);
      }
      matrix.add(row);
    }
  }

  /// todo does not work with zoom out and zoom in yet
  void shiftToArea(Point<int> topLeft, Point<int> bottomRight) {
    Stopwatch start = Stopwatch()..start();
    int up = groundTopLeft.y - topLeft.y;
    int down = bottomRight.y - groundBottomRight.y;
    int left = groundTopLeft.x - topLeft.x;
    int right = bottomRight.x - groundBottomRight.x;
    while (up != 0) {
      if (up > 0) {
        _removeRowFromTop();
        up--;
      } else {
        _addRowToTop();
        up++;
      }
    }
    while (down != 0) {
      if (down > 0) {
        _removeRowFromBottom();
        down--;
      } else {
        _addRowToBottom();
        down++;
      }
    }
    while (left != 0) {
      if (left > 0) {
        _addColumnToLeft();
        left--;
      } else {
        _removeColumnFromLeft();
        left++;
      }
    }
    while (right != 0) {
      if (right > 0) {
        _addColumnToRight();
        right--;
      } else {
        _removeColumnFromRight();
        right++;
      }
    }
    groundTopLeft = topLeft;
    groundBottomRight = bottomRight;
    print("Ground update: ${start.elapsedMilliseconds} ms");
  }

  List<List<dynamic>> _createColumn(
      Point<int> topLeft, Point<int> bottomRight) {
    List<List<dynamic>> table = [];
    for (var y = topLeft.y; y >= bottomRight.y; y--) {
      table.add([_map.getSquare(topLeft.x, y).colorInView.value]);
    }
    return table;
  }

  List _createRow(Point<int> topLeft, Point<int> bottomRight) {
    List table = [];
    List row = [];
    for (var x = topLeft.x; x <= bottomRight.x; x++) {
      row.add(_map.getSquare(x, topLeft.y).colorInView.value);
    }
    table.add(row);
    return table;
  }

  void _addColumnToRight() {
    groundBottomRight += const Point(1, 0);
    var topRight = Point(groundBottomRight.x, groundTopLeft.y);
    List table = _createColumn(topRight, groundBottomRight);
    matrix = _m2d.concatenate(matrix, table, axis: 1);
  }

  void _addColumnToLeft() {
    groundTopLeft += const Point(-1, 0);
    var bottomLeft = Point(groundTopLeft.x, groundBottomRight.y);
    List table = _createColumn(groundTopLeft, bottomLeft);
    matrix = _m2d.concatenate(table, matrix, axis: 1);
  }

  void _addRowToBottom() {
    groundBottomRight += const Point(0, -1);
    var bottomLeft = Point(groundTopLeft.x, groundBottomRight.y);
    List table = _createRow(bottomLeft, groundBottomRight);
    matrix = _m2d.concatenate(matrix, table);
  }

  void _addRowToTop() {
    groundTopLeft += const Point(0, 1);
    var topRight = Point(groundBottomRight.x, groundTopLeft.y);
    var table = _createRow(groundTopLeft, topRight);
    matrix = _m2d.concatenate(table, matrix);
  }

  void _removeColumnFromRight() {
    var shape = matrix.shape;
    groundBottomRight += const Point(-1, 0);
    matrix = _m2d.slice(matrix, [0, shape[0]], [0, shape[1] - 1]);
  }

  void _removeColumnFromLeft() {
    var shape = matrix.shape;
    groundTopLeft += const Point(1, 0);
    matrix = _m2d.slice(matrix, [0, shape[0]], [1, shape[1]]);
  }

  void _removeRowFromBottom() {
    var shape = matrix.shape;
    groundBottomRight += const Point(0, 1);
    matrix = _m2d.slice(matrix, [0, shape[0] - 1], [0, shape[1]]);
  }

  void _removeRowFromTop() {
    var shape = matrix.shape;
    groundTopLeft += const Point(0, -1);
    matrix = _m2d.slice(matrix, [1, shape[0]], [0, shape[1]]);
  }
}
