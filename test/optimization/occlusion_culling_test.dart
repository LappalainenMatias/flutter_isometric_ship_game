import 'package:anki/optimization/occlusion_culling.dart';
import 'package:flutter_test/flutter_test.dart';

/// Tests for removing triangles which are behind other triangles
/// Each 2 values are x,y coordinate
/// Each 6 values make a triangle
/// TODO WIP
void main() {
  /*
  test('Remove triangle which is behind another tringle', () {
    List<double> vertices = [
      1, 1,
      1, 2,
      2, 1,
      0, 0,
      1, 3,
      3, 1,
    ];
    var res = occlusionCulling(vertices);
    expect(res.length, 6);
    expect(res[0], 0);
    expect(res[1], 0);
    expect(res[2], 1);
    expect(res[3], 3);
    expect(res[4], 3);
    expect(res[5], 1);
  });

  test('Remove triangle behind another triangle which shares border', () {
    List<double> vertices = [
      1, 0,
      2, 1,
      2, 0,
      0, 0,
      2, 2,
      2, 0,
    ];
    var res = occlusionCulling(vertices);
    expect(res.length, 6);
    expect(res[0], 0);
    expect(res[1], 0);
    expect(res[2], 2);
    expect(res[3], 2);
    expect(res[4], 2);
    expect(res[5], 0);
  });

  test('Remove triangle behind two triangles which are sharing border', () {
    List<double> vertices = [
      1, 0,
      2, 1,
      3, 0,
      0, 0,
      2, 2,
      2, 0,
      2, 2,
      3, 0,
      1, 0,
    ];
    var res = occlusionCulling(vertices);
    expect(res.length, 12);
    expect(res[0], 0);
    expect(res[1], 0);
    expect(res[2], 2);
    expect(res[3], 2);
    expect(res[4], 2);
    expect(res[5], 0);
    expect(res[6], 2);
    expect(res[7], 2);
    expect(res[8], 3);
    expect(res[9], 0);
    expect(res[10], 1);
    expect(res[11], 0);
  });

  test('Do NOT remove triangle from two seperate triangles', () {
    List<double> vertices = [
      1, 0,
      2, 1,
      3, 0,
      0, 0,
      2, 2,
      2, 0,
    ];
    var res = occlusionCulling(vertices);
    expect(res.length, 12);
    expect(res[0], 1);
    expect(res[1], 0);
    expect(res[2], 2);
    expect(res[3], 1);
    expect(res[4], 3);
    expect(res[5], 0);
    expect(res[6], 0);
    expect(res[7], 0);
    expect(res[8], 2);
    expect(res[9], 2);
    expect(res[10], 2);
    expect(res[11], 0);
  });

  test('Do NOT remove a single triangle', () {
    List<double> vertices = [
      1, 0,
      2, 1,
      3, 0,
    ];
    var res = occlusionCulling(vertices);
    expect(res.length, 6);
    expect(res[0], 1);
    expect(res[1], 0);
    expect(res[2], 2);
    expect(res[3], 1);
    expect(res[4], 3);
    expect(res[5], 0);
  });
   */
}