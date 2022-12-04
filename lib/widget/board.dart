import 'package:anki/map/map.dart';
import 'package:anki/map/painting/custom_painter.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../game.dart';

class Board extends StatefulWidget {
  final double width;
  final double height;

  const Board({super.key, required this.width, required this.height});

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: widget.width, height: widget.height, child: _buildCustomPaint());
  }

  Widget _buildCustomPaint() {
    Provider.of<PlayerModel>(context, listen: true);
    Provider.of<MapModel>(context, listen: true);
    return CustomPaint(
      size: Size(widget.width, widget.height),
      painter: MapPainter(Provider.of<GameModel>(context, listen: false)),
    );
  }
}
