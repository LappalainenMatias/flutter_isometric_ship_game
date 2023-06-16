import 'dart:math';
import 'package:anki/map/region/tile/tile.dart';
import 'natural_items/natural_items.dart';

/// We use this because Color uses dart:ui which cannot be used concurrently
class CustomColor {
  final int a, r, g, b;

  const CustomColor.fromARGB(this.a, this.r, this.g, this.b);

  int get value {
    return (a << 24) | (r << 16) | (g << 8) | b;
  }

  double get normalizedA => a / 255.0;
  double get normalizedR => r / 255.0;
  double get normalizedG => g / 255.0;
  double get normalizedB => b / 255.0;

  static CustomColor fromNormalizedARGB(double a, double r, double g, double b) {
    return CustomColor.fromARGB(
      (a * 255).round(),
      (r * 255).round(),
      (g * 255).round(),
      (b * 255).round(),
    );
  }
}

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


Tile getTile(double elevation, double moisture, Point<double> coordinate) {
  double height = (elevation * 20).round().toDouble();
  if (elevation < 0.0 && moisture < -0.25) {
    return Tile(TileType.lakeFloorBare, coordinate, height,
        getNaturalItem(TileType.lakeFloorBare));
  }
  if (elevation < -0.1 && moisture < 0.0) {
    return Tile(TileType.lakeFloorVegetation, coordinate, height,
        getNaturalItem(TileType.lakeFloorVegetation));
  }
  if (elevation < -0.05) {
    return Tile(TileType.lakeFloorBare, coordinate, height,
        getNaturalItem(TileType.lakeFloorBare));
  }
  if (elevation < 0.0) {
    return Tile(
        TileType.sand, coordinate, height, getNaturalItem(TileType.sand));
  }
  if (elevation < 0.02) {
    if (moisture < -0.15) {
      return Tile(
          TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
    }
    if (moisture < -0.0) {
      return Tile(
          TileType.sand, coordinate, height, getNaturalItem(TileType.sand));
    }
    return Tile(
        TileType.grass, coordinate, height, getNaturalItem(TileType.grass));
  }
  if (elevation < 0.02) {
    if (moisture < -0.15) {
      return Tile(
          TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
    }
    return Tile(
        TileType.grass, coordinate, height, getNaturalItem(TileType.grass));
  }
  if (elevation < 0.20) {
    if (moisture < -0.20) {
      return Tile(
          TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
    }
    if (moisture < 0.00) {
      return Tile(
          TileType.grass, coordinate, height, getNaturalItem(TileType.grass));
    }
    return Tile(
        TileType.taiga, coordinate, height, getNaturalItem(TileType.taiga));
  }
  if (elevation < 0.4) {
    if (moisture < -0.2) {
      return Tile(
          TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
    }
    return Tile(
        TileType.taiga, coordinate, height, getNaturalItem(TileType.taiga));
  }
  return Tile(TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
}

NaturalItem getNaturalItem(TileType type) {
  int val = Random().nextInt(50);
  if (type == TileType.taiga) {
    if (val < 2) return NaturalItem.rock;
    if (val < 8) return NaturalItem.spruce;
    if (val < 9) return NaturalItem.birch;
    if (val < 10) return NaturalItem.flower;
  } else if (type == TileType.grass) {
    if (val < 1) return NaturalItem.rock;
    if (val < 2) return NaturalItem.spruce;
    if (val < 4) return NaturalItem.birch;
    if (val < 5) return NaturalItem.flower;
  } else if (type == TileType.bare) {
    if (val < 5) return NaturalItem.rock;
    if (val < 6) return NaturalItem.spruce;
    if (val < 7) return NaturalItem.birch;
    if (val < 8) return NaturalItem.flower;
  } else if (type == TileType.grass) {
    if (val < 5) return NaturalItem.rock;
  } else if (type == TileType.sand) {
    if (val < 5) return NaturalItem.rock;
  } else if (type == TileType.lakeFloorVegetation) {
    if (val < 2) return NaturalItem.rock;
  } else if (type == TileType.lakeFloorBare) {
    if (val < 3) return NaturalItem.rock;
  }
  return NaturalItem.empty;
}
