import 'dart:math';
import 'package:anki/character/item.dart';
import 'package:anki/character/player.dart';
import 'package:anki/map/naturalitem/natural_item.dart';
import 'package:anki/map/square.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:flutter/material.dart';

import '../../character/enemy.dart';

/// This is used for better performance
Map<Rect, Color> createRects(List<List<Square>> table, double scale,
    PlayerModel player, Map<Point, Enemy> enemies) {
  Map<Rect, Color> rects = {};
  int x = 0;
  int y = 0;
  for (List<Square> row in table) {
    /// Without the -1 and +1 there is visible grid lines between the squares
    Color previous = row[0].colorInView;
    Color current = row[0].colorInView;
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

Color getSquareColor(Square square, PlayerModel player, Map<Point, Enemy> enemies) {
  if (square.visibility == SquareVisibility.unseen) return Colors.black;
  if (square.x == player.x && square.y == player.y) return player.color;
  if (square.visibility == SquareVisibility.seen) return square.colorSeen;
  if (enemies.containsKey(Point(square.x, square.y))) {
    return enemies[Point(square.x, square.y)]!.color;
  }
  return square.colorInView;
}
