import 'package:anki/map/map.dart';
import 'package:anki/map/map_painter.dart';
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
    return RepaintBoundary(
      child: Consumer<MapModel>(
        builder: (context, map, child) => SizedBox(
          width: widget.width,
          height: widget.height,
          child: CustomPaint(
            size: Size(widget.width, widget.height),
            painter: MapPainter(map),
          ),
        ),
      ),
    );
  }
}
