import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Statistics extends StatelessWidget {
  const Statistics({
    super.key,
    required int verticesCount,
    required IsoCoordinate center,
  })  : _verticesCount = verticesCount,
        _center = center;

  final IsoCoordinate _center;
  final int _verticesCount;

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
              "Vertices: ${NumberFormat('###,###,###').format(_verticesCount).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Coordinate: ${_center.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}
