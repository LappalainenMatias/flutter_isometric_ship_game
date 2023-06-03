import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Statistics extends StatelessWidget {
  const Statistics({
    super.key,
    required double fps,
    required int verticesCount,
    required int regionCount,
  })  : _fps = fps,
        _verticesCount = verticesCount,
        _regionCount = regionCount;

  final double _fps;
  final int _verticesCount;
  final int _regionCount;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "FPS: ${_fps.toString().split(".")[0]}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Vertices: ${NumberFormat('###,###,###').format(_verticesCount).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Regions: $_regionCount",
              style: const TextStyle(color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}
