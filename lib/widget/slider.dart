import 'package:flutter/material.dart';
import '../map/game_map.dart';

class ZoomSlider extends StatefulWidget {
  const ZoomSlider({super.key});

  @override
  State<ZoomSlider> createState() => _ZoomSliderState();
}

class _ZoomSliderState extends State<ZoomSlider> {
  double _zoomLevel = 0.25;

  @override
  Widget build(BuildContext context) {
    GameMap map = GameMap();
    _zoomLevel = 1 - map.zoomLevel;
    return RotatedBox(
      quarterTurns: -1,
      child: SizedBox(
        height: 50,
        width: 250,
        child: Slider(
          min: 0,
          max: 1,
          value: _zoomLevel,
          activeColor: Colors.red,
          inactiveColor: Colors.red.withOpacity(0.4),
          onChanged: (zoomLevel) {
            setState(() {
              _zoomLevel = zoomLevel;
              map.setZoomLevel(1 - _zoomLevel);
            });
          },
        ),
      ),
    );
  }
}
