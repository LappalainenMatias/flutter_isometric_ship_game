import '../../../utils/custom_color.dart';

enum TileType {
  taiga(
    CustomColor.fromARGB(255, 100, 164, 93),
    CustomColor.fromARGB(255, 75, 140, 76),
    CustomColor.fromARGB(255, 59, 117, 60),
  ),
  grass(
    CustomColor.fromARGB(255, 109, 150, 86),
    CustomColor.fromARGB(255, 92, 129, 72),
    CustomColor.fromARGB(255, 79, 112, 60),
  ),
  bare(
    CustomColor.fromARGB(255, 139, 162, 127),
    CustomColor.fromARGB(255, 125, 148, 113),
    CustomColor.fromARGB(255, 109, 129, 98),
  ),
  sand(
    CustomColor.fromARGB(255, 194, 178, 128),
    CustomColor.fromARGB(255, 161, 146, 100),
    CustomColor.fromARGB(255, 138, 124, 82),
  ),
  lakeFloorVegetation(
    CustomColor.fromARGB(255, 150, 157, 102),
    CustomColor.fromARGB(255, 138, 145, 92),
    CustomColor.fromARGB(255, 121, 128, 80),
  ),
  lakeFloorBare(
    CustomColor.fromARGB(255, 173, 162, 115),
    CustomColor.fromARGB(255, 159, 148, 103),
    CustomColor.fromARGB(255, 148, 138, 95),
  );

  /// These are the cube's side colors. Isometric cube has 3 visible sides.
  /// Top is brighter because it is in the light.
  const TileType(this.top, this.left, this.right);

  final CustomColor top;
  final CustomColor left;
  final CustomColor right;
}