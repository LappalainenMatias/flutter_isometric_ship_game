import 'package:anki/map/map.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:provider/provider.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'dart:math';
import 'dart:ui';

class MapScreen extends StatefulWidget {
  final double width;
  final double height;

  const MapScreen({super.key, required this.width, required this.height});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen>
    with SingleTickerProviderStateMixin {
  late final Ticker _ticker;
  var time = Stopwatch()..start();

  @override
  void initState() {
    super.initState();

    _ticker = createTicker(
      (Duration elapsed) {
        setState(() {});
      },
    )..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var map = Provider.of<MapModel>(context, listen: false);
    return SizedBox(
      width: widget.width,
      height: widget.height,
      child: RepaintBoundary(
        child: ShaderBuilder(
          assetKey: 'shaders/simplewater.frag',
          (context, waterShader, child) => CustomPaint(
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
    );
  }
}

class MapPainter extends CustomPainter {
  final MapModel map;
  FragmentShader waterShader;
  var defaultPaint = Paint()..style = PaintingStyle.fill;
  var waterPaint = Paint()..style = PaintingStyle.fill;
  double dt;

  MapPainter(this.map, this.waterShader, this.dt);

  @override
  void paint(Canvas canvas, Size size) {
    _addWaterShader(size);
    _isometricTransformation(canvas, size);
    Map vertices = map.getVerticesInView();
    for (var v in vertices["underWater"]) {
      canvas.drawVertices(v, BlendMode.srcOver, waterPaint);
    }
    for (var v in vertices["aboveWater"]) {
      canvas.drawVertices(v, BlendMode.dst, defaultPaint);
    }
  }

  void _addWaterShader(Size size) {
    waterShader.setFloat(0, size.width);
    waterShader.setFloat(1, size.height);
    waterShader.setFloat(2, dt);
    waterPaint.shader = waterShader;
  }

  void _isometricTransformation(Canvas canvas, Size size) {
    double scale = min(size.width / map.width, size.height / map.width);
    var center = map.center;
    canvas.scale(scale, -scale);
    canvas.translate(
      -center.isoX.toDouble() + size.width / scale / 2,
      -center.isoY.toDouble() - size.height / scale / 2,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
