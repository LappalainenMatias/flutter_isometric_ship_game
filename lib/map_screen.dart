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
    _time.start();
    _ticker = createTicker(
      (Duration elapsed) {
        setState(
          () {
            /// Todo refactor this to somewhere else. Maybe own widget
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
    return LayoutBuilder(
      builder: (context, constraints) {
        map.setAspectRatio(screenSize.width / screenSize.height);
        return SizedBox(
          child: Stack(
            children: [
              Align(
                child: ShaderBuilder(
                  assetKey: 'shaders/regtanglewater.frag',
                  (context, waterShader, child) => CustomPaint(
                    size: screenSize,
                    painter: MapPainter(map, waterShader,
                        _time.elapsedMilliseconds.toDouble() / 1000),
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
                    center: map.center,
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class MapPainter extends CustomPainter {
  final MapModel map;
  final FragmentShader _waterShader;
  final _landPaint = Paint()..style = PaintingStyle.fill;
  final _backgroundWaterPaint = Paint()
    ..style = PaintingStyle.fill
    ..color = const Color(0xFF012E8F);
  final _waterShaderPaint = Paint()..style = PaintingStyle.fill;
  final double _dt;

  MapPainter(this.map, this._waterShader, this._dt);

  @override
  void paint(Canvas canvas, Size size) {
    //_addWaterShader(_waterShaderPaint);
    _isometricTransformation(canvas, size);
    _paintBackgroundWater(canvas, size);
    MapDTO vertices = map.getVerticesInView();
    for (var v in vertices.underWater) {
      canvas.drawVertices(v, BlendMode.srcOver, _waterShaderPaint);
    }
    for (var v in vertices.aboveWater) {
      canvas.drawVertices(v, BlendMode.dst, _landPaint);
    }
  }

  /// Currently we do not create tiles which are
  /// deep under water. Because of this we have to paint the background with
  /// water so that it does not contain holes.
  void _paintBackgroundWater(Canvas canvas, Size size) {
    canvas.drawRect(
        Rect.fromPoints(
          Offset(map.topLeft.isoX, map.topLeft.isoY),
          Offset(map.bottomRight.isoX, map.bottomRight.isoY),
        ),
        _backgroundWaterPaint);
    canvas.drawRect(
        Rect.fromPoints(
          Offset(map.topLeft.isoX, map.topLeft.isoY),
          Offset(map.bottomRight.isoX, map.bottomRight.isoY),
        ),
        _waterShaderPaint);
  }

  void _addWaterShader(Paint paint) {
    _waterShader.setFloat(0, _dt);
    paint.shader = _waterShader;
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
