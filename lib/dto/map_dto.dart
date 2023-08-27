import 'dart:ui';

class MapDTO {
  final List<Vertices> underWater;
  final List<Vertices> aboveWater;
  final int verticesCount;

  MapDTO({
    required this.underWater,
    required this.aboveWater,
    required this.verticesCount,
  });
}