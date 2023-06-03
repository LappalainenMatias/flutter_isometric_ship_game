import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../map/map.dart';

class ZoomSlider extends StatefulWidget {
  const ZoomSlider({super.key});

  @override
  State<ZoomSlider> createState() => _ZoomSliderState();
}

class _ZoomSliderState extends State<ZoomSlider> {
  double _zoomLevel = 0.5;

  @override
  Widget build(BuildContext context) {
    MapModel map = Provider.of<MapModel>(context, listen: false);
    return SizedBox(
      height: 50,
      width: 250,
      child: Slider(
        min: 0,
        max: 1,
        value: _zoomLevel,
        activeColor: Colors.red,
        inactiveColor: Colors.grey.withOpacity(0.3),
        onChanged: (zoomLevel) {
          setState(() {
            _zoomLevel = zoomLevel;
            map.setZoomLevel(1 - _zoomLevel);
          });
        },
      ),
    );
  }
}
