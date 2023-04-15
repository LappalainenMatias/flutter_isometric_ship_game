import 'package:anki/map/map.dart';
import 'package:anki/map/map_painter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_shaders/flutter_shaders.dart';

class Board extends StatefulWidget {
  final double width;
  final double height;

  const Board({super.key, required this.width, required this.height});

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  var time = Stopwatch()..start();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.width,
      height: widget.height,
      child: RepaintBoundary(
        child: ShaderBuilder(
          assetKey: 'shaders/simplewater.frag',
          (context, waterShader, child) => Consumer<MapModel>(
            builder: (context, map, child) => CustomPaint(
              size: MediaQuery.of(context).size,
              painter: MapPainter(
                map,
                waterShader,
                time.elapsedMilliseconds.toDouble() / 1000,
              ),
            ),
            child: const Center(
              child: CircularProgressIndicator(),
            ),
          ),
        ),
      ),
    );
  }
}
