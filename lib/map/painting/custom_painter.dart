import 'dart:collection';
import 'dart:typed_data';
import 'dart:ui' as ui;
import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:anki/map/map.dart';

class MapPainter extends CustomPainter {
  Size maxResolution = const Size(301, 301);
  final MapModel map;
  var rectPaint = Paint()
    ..color = const Color(0xff995588)
    ..style = PaintingStyle.fill;

  MapPainter(this.map);

  @override
  void paint(Canvas canvas, Size size) {
    Stopwatch start = Stopwatch()..start();
    _paintPoints(canvas, map.getGroundMatrix(), size);
    print("Total paint: ${start.elapsedMilliseconds} ms");
  }

  void _paintPoints(Canvas canvas, List matrix, Size size) {
    Stopwatch start = Stopwatch()..start();
    final width = size.width / matrix.length;
    final height = size.height / matrix.first.length;
    Map pointColors = {};

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        final y = i * width;
        final x = j * height;
        Color color = Color.fromARGB(
            matrix[i][j][3], matrix[i][j][0], matrix[i][j][1], matrix[i][j][2]);
        pointColors.putIfAbsent(color, () => [x,y]).addAll([x,y]);
      }
    }
    print("create: ${start.elapsedMilliseconds} ms");
    start = Stopwatch()..start();
    for (final color in pointColors.keys) {
      canvas.drawRawPoints(
        PointMode.points,
        Float32List.fromList(pointColors[color]!),
        rectPaint
          ..blendMode = BlendMode.srcOver
          ..strokeWidth = width + 1
          ..color = color,
      );
    }
    print("paint: ${start.elapsedMilliseconds} ms");
  }

  void _paintGroundTesting(Canvas canvas, List matrix, Size size) {
    int maxRows = map.camera.height > maxResolution.height
        ? maxResolution.height.toInt()
        : map.camera.height;
    int x = 0;
    int y = 0;
    double scale = size.width / maxRows;

    final vertices = <Offset>[];
    final colors = <Color>[];

    for (final row in matrix) {
      for (final color in row) {
        final topLeftX = x * scale;
        final topLeftY = y * scale;
        final bottomRightX = x * scale + scale;
        final bottomRightY = y * scale + scale;
        vertices.addAll([
          Offset(topLeftX, topLeftY),
          Offset(topLeftX, bottomRightY),
          Offset(bottomRightX, bottomRightY),
          Offset(bottomRightX, topLeftY),
        ]);
        colors.addAll([
          Color.fromARGB(color[3], color[0], color[1], color[2]),
          Color.fromARGB(color[3], color[0], color[1], color[2]),
          Color.fromARGB(color[3], color[0], color[1], color[2]),
          Color.fromARGB(color[3], color[0], color[1], color[2]),
        ]);
        x++;
      }
      y++;
      x = 0;
    }

    const vertexMode = VertexMode.triangles;
    final indices = List.generate(vertices.length, (i) => i);
    final verticesObject =
        Vertices(vertexMode, vertices, colors: colors, indices: indices);
    canvas.drawVertices(verticesObject, BlendMode.srcOver,
        rectPaint..blendMode = BlendMode.srcOver);
  }

  _paintGroundRect(canvas, matrix, size) {
    int maxRows = map.camera.height > maxResolution.height
        ? maxResolution.height.toInt()
        : map.camera.height;
    int x = 0;
    int y = 0;
    double scale = size.width / maxRows;
    for (List row in matrix) {
      for (var colors in row) {
        double topLeftX = x * scale - 1; // -1 and +1 removes grid lines
        double topLeftY = y * scale - 1;
        double bottomRightX = x * scale + scale + 1;
        double bottomRightY = y * scale + scale + 1;
        rectPaint.color =
            Color.fromARGB(colors[3], colors[0], colors[1], colors[2]);
        canvas.drawRect(
            Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY),
            rectPaint);
        x++;
      }
      y++;
      x = 0;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
