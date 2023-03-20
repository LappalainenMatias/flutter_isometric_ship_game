import 'package:anki/game.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/painting/custom_painter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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
    Provider.of<MapModel>(context, listen: true);
    return SizedBox(
      width: widget.width,
      height: widget.height,
      child: CustomPaint(
        size: Size(widget.width, widget.height),
        painter: MapPainter(Provider.of<GameModel>(context, listen: false)),
      ),
    );
  }
}
