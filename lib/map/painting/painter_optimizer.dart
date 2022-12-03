import 'dart:math';
import 'package:anki/character/player.dart';
import 'package:anki/map/square.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:flutter/material.dart';

import '../../character/enemy.dart';

/// This is used for better performance
Map<Rect, Color> createRects(List<List<Square>> table, double scale, PlayerModel player, List<Enemy> enemies) {
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
      current = getSquareColor(square, player, enemies);
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

Color getSquareColor(Square square, PlayerModel player, List<Enemy> enemies) {
  if (square.visibility != SquareVisibility.inView) return square.color;
  if (square.x == player.x && square.y == player.y) return player.color;
  for (Enemy enemy in enemies) {
    if (square.x == enemy.x && square.y == enemy.y) return enemy.color;
  }
  return square.color;
}