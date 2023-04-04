import 'package:matrix2d/matrix2d.dart';
import 'package:test/test.dart';

void main() {
  test('add row to bottom', () {
    Matrix2d m2d = const Matrix2d();
    List a1 = [
      [1, 1],
      [1, 1]
    ];
    List a2 = [
      [0, 0]
    ];
    a1 = m2d.concatenate(a1, a2);
    print(a1);
  });

  test('add row to top', () {
    Matrix2d m2d = const Matrix2d();
    List a1 = [];
    a1.add([1, 1]);
    a1.add([1, 1]);
    List a2 = [
      [0, 0]
    ];
    a1 = m2d.concatenate(a2, a1);
    print(a1);
  });

  test('add column to right', () {
    Matrix2d m2d = const Matrix2d();
    List a1 = [
      [1, 1],
      [1, 1]
    ];
    List a2 = [
      [0],
      [0]
    ];
    a1 = m2d.concatenate(a1, a2, axis: 1);
    print(a1);
  });

  test('add column to left', () {
    Matrix2d m2d = const Matrix2d();
    List a1 = [
      [1, 1],
      [1, 1],
      [1, 1]
    ];
    List<List<int>> a2 = [
      [0],
      [0],
      [0]
    ];
    a1 = m2d.concatenate(a2, a1, axis: 1);
    print(a1);
  });

  test('remove bottom row', () {
    Matrix2d m2d = const Matrix2d();
    var sliceArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var shape = sliceArray.shape;
    var newArray = m2d.slice(sliceArray, [0, shape[0] - 1], [0, shape[1]]);
    print(newArray);
  });

  test('remove top row', () {
    Matrix2d m2d = const Matrix2d();
    var sliceArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var shape = sliceArray.shape;
    var newArray = m2d.slice(sliceArray, [1, shape[0]], [0, shape[1]]);
    print(newArray);
  });

  test('remove right column', () {
    Matrix2d m2d = const Matrix2d();
    var sliceArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var shape = sliceArray.shape;
    var newArray = m2d.slice(sliceArray, [0, shape[0]], [0, shape[1] - 1]);
    print(newArray);
  });

  test('remove left column', () {
    Matrix2d m2d = const Matrix2d();
    var sliceArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var shape = sliceArray.shape;
    var newArray = m2d.slice(sliceArray, [0, shape[0]], [1, shape[1]]);
    print(newArray);
  });

  test('loop rows', () {
    var m = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    for (var r in m) {
      print(r);
    }
  });
}
