import 'dart:math';
import 'package:anki/square.dart';
import 'package:flutter/material.dart';

/// This is used for better performance
Map<Rect, Color> createRects(List<List<Square>> table, double scale, Point playerCoordinate) {
  Map<Rect, Color> rects = {};
  int x = 0;
  int y = 0;
  for (List<Square> row in table) {
    /// Without the -1 and +1 there is visible grid lines between squares
    Color previous = row[0].color;
    Color current = row[0].color;
    double topLeftX = x * scale - 1;
    double topLeftY = y * scale - 1;
    double bottomRightX = x * scale + scale + 1;
    double bottomRightY = y * scale + scale + 1;
    for (Square square in row) {
      current = square.color;
      if (current == previous) {
        bottomRightX = x * scale + scale + 1;
        bottomRightY = y * scale + scale + 1;
      } else {
        rects[Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY)] =
            previous;
        topLeftX = x * scale - 1;
        topLeftY = y * scale - 1;
        bottomRightX = x * scale + scale + 1;
        bottomRightY = y * scale + scale + 1;
      }
      if (x + 1 == row.length) {
        rects[Rect.fromLTRB(topLeftX, topLeftY, bottomRightX, bottomRightY)] =
            current;
      }
      previous = current;
      x++;
    }
    y++;
    x = 0;
  }
  return rects;
}