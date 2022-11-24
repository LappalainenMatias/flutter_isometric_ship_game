import 'package:anki/custom_painter.dart';
import 'package:anki/enum/item.dart';
import 'package:anki/enum/square_visibility.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../enemy.dart';
import '../model/game_model.dart';
import 'dart:math';
import '../square.dart';

class Board extends StatefulWidget {
  const Board({super.key});

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(32.0),
        child: SizedBox(width: 201, child: _buildCustomPaint()));
  }

  Widget _buildCustomPaint() {
    var game = Provider.of<GameModel>(context, listen: false);
    var player = Provider.of<PlayerModel>(context, listen: true);
    return CustomPaint(
      size: const Size(201, 201),
      painter: MapPainter(game),
    );
  }
}
