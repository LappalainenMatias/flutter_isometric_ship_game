import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../game.dart';

class ZoomSlider extends StatefulWidget {
  const ZoomSlider({super.key});

  @override
  State<ZoomSlider> createState() => _ZoomSliderState();
}

class _ZoomSliderState extends State<ZoomSlider> {
  double _zoomLevel = 0.25;

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: false);
    _zoomLevel = 1 - game.zoomLevel;
    return RotatedBox(
      quarterTurns: -1,
      child: SizedBox(
        height: 50,
        width: 400,
        child: Slider(
          min: 0,
          max: 1,
          value: _zoomLevel,
          activeColor: Colors.red,
          inactiveColor: Colors.red.withOpacity(0.4),
          onChanged: (zoomLevel) {
            setState(() {
              _zoomLevel = zoomLevel;
              game.setZoomLevel(1 - _zoomLevel);
            });
          },
        ),
      ),
    );
  }
}
