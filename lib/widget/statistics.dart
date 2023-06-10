import 'package:anki/map/iso_coordinate.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Statistics extends StatelessWidget {
  const Statistics({
    super.key,
    required int fps,
    required int verticesCount,
    required int regionCount,
    required IsoCoordinate center,
    required Size size,
    required IsoCoordinate topLeft,
    required IsoCoordinate bottomRight,
  })  : _fps = fps,
        _verticesCount = verticesCount,
        _regionCount = regionCount,
        _center = center,
        _size = size,
        _topLeft = topLeft,
        _bottomRight = bottomRight;

  final IsoCoordinate _center;
  final int _fps;
  final int _verticesCount;
  final int _regionCount;
  final Size _size;
  final IsoCoordinate _topLeft;
  final IsoCoordinate _bottomRight;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black.withOpacity(0.6),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "FPS: ${_fps.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Vertices: ${NumberFormat('###,###,###').format(_verticesCount).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            //Text("Regions: $_regionCount", style: const TextStyle(color: Colors.white),),
            Text(
              "Coordinate: ${_center.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
            //Text(
            //  "Screen size: ${_size.width.toStringAsFixed(0)}x${_size.height.toStringAsFixed(0)}",
            //  style: const TextStyle(color: Colors.white),
            //),
            //Text(
            //  "Top left: ${_topLeft.isoX.toStringAsFixed(0)}, ${_topLeft.isoY.toStringAsFixed(0)}",
            //  style: const TextStyle(color: Colors.white),
            //),
            //Text(
            //  "Bottom right: ${_bottomRight.isoX.toStringAsFixed(0)}, ${_bottomRight.isoY.toStringAsFixed(0)}",
            //  style: const TextStyle(color: Colors.white),
            //),
          ],
        ),
      ),
    );
  }
}
