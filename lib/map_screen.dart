import 'package:anki/map/map.dart';
import 'package:anki/widget/statistics.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:provider/provider.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'dart:math';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen>
    with SingleTickerProviderStateMixin {
  final Stopwatch _time = Stopwatch();
  late final Ticker _ticker;
  int _previousTime = 0;
  int _frameCount = 0;
  int _totalTime = 0;
  int _fps = 0;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker(
      (Duration elapsed) {
        setState(
          () {
            _frameCount++;
            _totalTime += elapsed.inMilliseconds - _previousTime;
            _previousTime = elapsed.inMilliseconds;
            if (_totalTime >= 1000) {
              _fps = _frameCount;
              _frameCount = 0;
              _totalTime = 0;
            }
          },
        );
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
    var screenSize = MediaQuery.of(context).size;
    return LayoutBuilder(builder: (context, constraints) {
      map.setAspectRatio(screenSize.width / screenSize.height);
      return SizedBox(
        child: Stack(
          children: [
            Align(
              child: ShaderBuilder(
                assetKey: 'shaders/regtanglewater.frag',
                (context, waterShader, child) => CustomPaint(
                  size: screenSize,
                  painter: MapPainter(
                      map, waterShader, _time.elapsedMilliseconds.toDouble()),
                ),
                child: const Center(
                  child: CircularProgressIndicator(),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Align(
                alignment: Alignment.topLeft,
                child: Statistics(
                  fps: _fps,
                  verticesCount: map.verticesCount,
                  regionCount: map.regionCount,
                  center: map.center,
                  size: Size(screenSize.width, screenSize.height),
                  topLeft: map.topLeft,
                  bottomRight: map.bottomRight,
                ),
              ),
            ),
          ],
        ),
      );
    });
  }
}

class MapPainter extends CustomPainter {
  final MapModel map;
  FragmentShader waterShader;
  var defaultPaint = Paint()..style = PaintingStyle.fill;
  var paintWithWaterShader = Paint()..style = PaintingStyle.fill;
  double dt;

  MapPainter(this.map, this.waterShader, this.dt);

  @override
  void paint(Canvas canvas, Size size) {
    _addWaterShader(size);
    _isometricTransformation(canvas, size);
    Map vertices = map.getVerticesInView();
    for (var v in vertices["underWater"]) {
      canvas.drawVertices(v, BlendMode.srcOver, paintWithWaterShader);
    }
    for (var v in vertices["aboveWater"]) {
      canvas.drawVertices(v, BlendMode.dst, defaultPaint);
    }
  }

  void _addWaterShader(Size size) {
    waterShader.setFloat(0, dt);
    paintWithWaterShader.shader = waterShader;
  }

  void _isometricTransformation(Canvas canvas, Size size) {
    double scale = min(size.width / map.width, size.height / map.height);
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
