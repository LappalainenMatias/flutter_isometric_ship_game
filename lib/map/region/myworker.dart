import 'dart:typed_data';

import 'package:js/js.dart';
import 'dart:math';

import 'package:open_simplex_noise/open_simplex_noise.dart';


/// Assuming this file is lib/myworker.dart, compile with:
/// dart compile js -O2 -o web/myworker.js lib/myworker.dart
@JS('myworker')
external set myworker(obj);
void main() {
  myworker = allowInterop((args) {
    RegionCreator regionCreator = RegionCreator();
    var res = regionCreator.create(IsoCoordinate(args[0], args[1]), args[2], args[3], args[4], args[5]);
    return [res.regionCoordinate.isoX, res.regionCoordinate.isoY, res.verticesCount,
      res.aboveWaterPositions, res.aboveWaterColors,
      res.underWaterPositions, res.underWaterColors];
  });
}

/// We use seperate class for creating the region data because this class
/// does not use dart:ui and because of that it can be run concurrently
class RegionCreator {
  late OpenSimplexNoise _elevationNoise;
  late OpenSimplexNoise _moistureNoise;

  RegionCreator([int seed = 1]) {
    _elevationNoise = OpenSimplexNoise(seed + 1);
    _moistureNoise = OpenSimplexNoise(seed + 2);
  }

  RegionDTO create(IsoCoordinate regionCoordinate, int width, int height,
      int startX, int startY) {
    var noises = _createNoises(width, height, startX, startY);
    final elevationNoise = noises[0];
    final moistureNoise = noises[1];
    List<Tile> tiles = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < height; y++) {
        tiles.add(getTile(elevationRow[y], moistureRow[y],
            Point((startX + x).toDouble(), (startY + y).toDouble())));
      }
    }
    tiles.sort((a, b) => a.compareTo(b));
    List<double> aboveWaterPositions = [];
    List<int> aboveWaterColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var tile in tiles) {
      if (tile.height < -5) continue;
      List pc = tile.getPosAndCols();
      if (tile.height < 0) {
        underWaterPositions.addAll(pc[0]);
        underWaterColors.addAll(pc[1]);
      } else {
        aboveWaterPositions.addAll(pc[0]);
        aboveWaterColors.addAll(pc[1]);
      }
    }
    return RegionDTO(
      regionCoordinate,
      (aboveWaterPositions.length + underWaterPositions.length) ~/ 2,
      Float32List.fromList(aboveWaterPositions),
      Int32List.fromList(aboveWaterColors),
      Float32List.fromList(underWaterPositions),
      Int32List.fromList(underWaterColors),
    );
  }

  /// Increasing frequency adds details
  List<List<List<double>>> _createNoises(
      int width,
      int height,
      int startX,
      int startY,
      ) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);
    for (int x = 0; x < width; x++) {
      var rowElevation = elevationMap[x];
      var rowMoisture = moistureMap[x];
      for (int y = 0; y < height; y++) {
        final x1 = (startX + x) * 0.006;
        final y1 = (startY + y) * 0.006;
        final x2 = (startX + x) * 0.016;
        final y2 = (startY + y) * 0.016;
        final x3 = (startX + x) * 0.048;
        final y3 = (startY + y) * 0.048;
        double elevation = _elevationNoise.eval2D(x1, y1) +
            0.5 * _elevationNoise.eval2D(x2, y2) +
            0.25 * _elevationNoise.eval2D(x3, y3);
        double moisture = _moistureNoise.eval2D(x1, y1) +
            0.5 * _moistureNoise.eval2D(x2, y2) +
            0.25 * _moistureNoise.eval2D(x3, y3);
        rowElevation[y] = elevation - 0.15;
        rowMoisture[y] = moisture;
      }
    }
    return [elevationMap, moistureMap];
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    List<List<double>> map = List.generate(
      width,
          (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}

class RegionDTO {
  final IsoCoordinate regionCoordinate;
  final int verticesCount;
  final Float32List aboveWaterPositions;
  final Int32List aboveWaterColors;
  final Float32List underWaterPositions;
  final Int32List underWaterColors;

  RegionDTO(
      this.regionCoordinate,
      this.verticesCount,
      this.aboveWaterPositions,
      this.aboveWaterColors,
      this.underWaterPositions,
      this.underWaterColors,
      );

  @override
  String toString() {
    return 'RegionDTO{regionCoordinate: $regionCoordinate, verticesCount: $verticesCount, '
        'aboveWaterPositions: $aboveWaterPositions, aboveWaterColors: $aboveWaterColors, '
        'underWaterPositions: $underWaterPositions, underWaterColors: $underWaterColors}';
  }
}

class IsoCoordinate {
  final double isoX;
  final double isoY;

  const IsoCoordinate(double x, double y)
      : isoX = x * 2 - 2 * y,
        isoY = x + y;

  const IsoCoordinate.fromIso(this.isoX, this.isoY);

  IsoCoordinate center(IsoCoordinate other) {
    return IsoCoordinate.fromIso(
        (isoX + other.isoX) / 2, (isoY + other.isoY) / 2);
  }

  double euclideanDistance(IsoCoordinate other) {
    return (isoX - other.isoX).abs() + (isoY - other.isoY).abs();
  }

  IsoCoordinate operator +(IsoCoordinate other) {
    return IsoCoordinate.fromIso(isoX + other.isoX, isoY + other.isoY);
  }

  Point<double> toPoint() {
    double y = isoY / 2 - isoX / 4;
    double x = isoY - y;
    return Point(x, y);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is IsoCoordinate && other.isoX == isoX && other.isoY == isoY;
  }

  @override
  int get hashCode => isoX.hashCode ^ isoY.hashCode;

  @override
  String toString() {
    return "${isoX.toInt()}, ${isoY.toInt()}";
  }
}

class Tile extends Comparable<Tile> {
  final TileType type;
  final Point<double> coordinate;
  late NaturalItem naturalItem;
  double height;

  Tile(this.type, this.coordinate, this.height, this.naturalItem);

  double nearness() {
    return coordinate.x + coordinate.y;
  }

  @override
  int compareTo(Tile other) {
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }

  List getPosAndCols() {
    List? posAndCols = createCube(
      coordinate,
      height,
      type.top,
      type.left,
      type.right,
    );
    var function = naturalItem.getPosAndCol;
    if (function != null) {
      var posAndCol = function(this);
      posAndCols[0].addAll(posAndCol[0]);
      posAndCols[1].addAll(posAndCol[1]);
    }
    return posAndCols;
  }
}


/// Returns true if the elevation and moisture limitations are met.
class TileRule {
  final TileType type;
  final double? elevationLimit;
  final double? moistureLimit;

  TileRule(this.type, this.elevationLimit, this.moistureLimit);

  bool match(double inputElevation, double inputMoisture) {
    return (elevationLimit == null || inputElevation < elevationLimit!) &&
        (moistureLimit == null || inputMoisture < moistureLimit!);
  }
}

class NaturalItemProbability {
  final NaturalItem item;
  final double percentage;

  NaturalItemProbability(this.item, this.percentage) {
    assert(percentage > 0);
    assert(percentage < 1);
  }
}

/// We return the tiletype of the first rule that matches.
List<TileRule> rules = [
  TileRule(TileType.lakeFloorBare, -0.10, 0.0),
  TileRule(TileType.lakeFloorVegetation, -0.05, 0.1),
  TileRule(TileType.sand, 0.0, null),
  TileRule(TileType.bare, 0.02, -0.20),
  TileRule(TileType.sand, 0.02, 0.0),
  TileRule(TileType.grass, 0.02, null),
  TileRule(TileType.bare, 0.2, -0.20),
  TileRule(TileType.taiga, 0.2, -0.10),
  TileRule(TileType.grass, 0.2, 0),
  TileRule(TileType.taiga, 0.2, null),
  TileRule(TileType.bare, 0.4, -0.20),
  TileRule(TileType.taiga, 0.5, null),
  TileRule(TileType.bare, null, null),
];

///Todo these probabilities are not exactly correct because they are looped through in order.
Map<TileType, List<NaturalItemProbability>> naturalItemsMap = {
  TileType.taiga: [
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.rock, 0.03),
    NaturalItemProbability(NaturalItem.spruce, 0.10),
  ],
  TileType.grass: [
    NaturalItemProbability(NaturalItem.rock, 0.02),
    NaturalItemProbability(NaturalItem.spruce, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.birch, 0.04),
  ],
  TileType.bare: [
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.spruce, 0.03),
    NaturalItemProbability(NaturalItem.rock, 0.06),
  ],
  TileType.sand: [
    NaturalItemProbability(NaturalItem.rock, 0.10),
  ],
  TileType.lakeFloorVegetation: [
    NaturalItemProbability(NaturalItem.rock, 0.04),
  ],
  TileType.lakeFloorBare: [
    NaturalItemProbability(NaturalItem.rock, 0.06),
  ]
};

Tile getTile(double elevation, double moisture, Point<double> coordinate) {
  // TODO We increase the elevation to add height differences. This should be refactored
  double height = (elevation * 12).round().toDouble();
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return Tile(rule.type, coordinate, height, getNaturalItem(rule.type));
    }
  }
  return Tile(TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
}

NaturalItem getNaturalItem(TileType type) {
  final items = naturalItemsMap[type];
  if (items != null) {
    for (var item in items) {
      if (Random().nextDouble() < item.percentage) {
        return item.item;
      }
    }
  }
  return NaturalItem.empty;
}


const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
const CustomColor trunkRight = CustomColor.fromARGB(255, 164, 152, 147);
const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates tree from cubes
List birchPosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 95) {
    return _birch(tile);
  } else {
    return _birchTrunk(tile);
  }
}

List _birch(Tile tile) {
  var trunk = _birchTrunk(tile);
  var foliage1 = _birchFoliage(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  return trunk;
}

List _birchFoliage(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 2.00,
    foliageTop,
    foliageLeft,
    foliageRight,
    widthScale: 1.25,
    heightScale: 3.5 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}


List _birchTrunk(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop,
    trunkLeft,
    trunkRight,
    widthScale: 0.30,
    heightScale: 2.00 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}

const CustomColor purpleTop = CustomColor.fromARGB(255, 150, 76, 150);
const CustomColor purpleLeft = CustomColor.fromARGB(255, 141, 69, 141);
const CustomColor purpleRight = CustomColor.fromARGB(255, 129, 63, 129);
const CustomColor whiteTop = CustomColor.fromARGB(255, 225, 203, 112);
const CustomColor whiteLeft = CustomColor.fromARGB(255, 213, 192, 102);
const CustomColor whiteRight = CustomColor.fromARGB(255, 199, 178, 92);
const CustomColor stemTop = CustomColor.fromARGB(255, 10, 150, 43);
const CustomColor stemLeft = CustomColor.fromARGB(255, 7, 131, 37);
const CustomColor stemRight = CustomColor.fromARGB(255, 5, 112, 30);

/// Creates flower from cubes
List flowerPosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 3,
    Random().nextDouble() / 3,
  );
  int random = Random().nextInt(10);
  if (random < 5) {
    return _yellowFlower(tile);
  } else {
    return _purpleFlower(tile);
  }
}

List _yellowFlower(Tile tile) {
  int random = Random().nextInt(10);
  var flower1 = _flowerPosition1(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  var flower2 = _flowerPosition2(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  var flower3 = _flowerPosition3(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  if (random < 4) flower1[0].addAll(flower2[0]);
  if (random < 4) flower1[1].addAll(flower2[1]);
  if (random < 7) flower1[0].addAll(flower3[0]);
  if (random < 7) flower1[1].addAll(flower3[1]);
  return flower1;
}

List _purpleFlower(Tile tile) {
  int random = Random().nextInt(10);
  var flower1 = _flowerPosition1(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  var flower2 = _flowerPosition2(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  var flower3 = _flowerPosition3(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  if (random < 4) flower1[0].addAll(flower2[0]);
  if (random < 4) flower1[1].addAll(flower2[1]);
  if (random < 7) flower1[0].addAll(flower3[0]);
  if (random < 7) flower1[1].addAll(flower3[1]);
  return flower1;
}

List _flowerPosition3(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.0, 0.2),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.2,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.0, 0.2),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}

List _flowerPosition1(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.0,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.3, 0.3),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.15,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.3, 0.3),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}

List _flowerPosition2(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.2, 0.0),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.2,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.2, 0.0),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}

enum NaturalItem {
  empty(null),
  spruce(sprucePosAndCol),
  rock(rockPosAndCol),
  birch(birchPosAndCol),
  flower(flowerPosAndCol);

  const NaturalItem(this.getPosAndCol);

  final Function? getPosAndCol;
}

const CustomColor rockTop = CustomColor.fromARGB(255, 107, 129, 124);
const CustomColor rockLeft = CustomColor.fromARGB(255, 91, 112, 107);
const CustomColor rockRight = CustomColor.fromARGB(255, 83, 105, 100);

/// Creates rock from cubes
List rockPosAndCol(Tile tile) {
  double random = Random().nextDouble() / 2 + 0.25;
  return createCube(
    tile.coordinate,
    tile.height + 1,
    rockTop,
    rockLeft,
    rockRight,
    widthScale: 1.0 * random,
    heightScale: 0.8 * random,
    offset: IsoCoordinate(
      Random().nextDouble() / 10,
      Random().nextDouble() / 10,
    ),
  );
}

/// Creates tree from cubes
List sprucePosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 95) {
    return _spruce(tile);
  } else {
    return _spruceTrunk(tile);
  }
}

List _spruce(Tile tile) {
  var trunk = _spruceTrunk(tile);
  var foliage1 = _spruceFoliage(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  return trunk;
}

List _spruceFoliage(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 2.00,
    foliageTop,
    foliageLeft,
    foliageRight,
    widthScale: (Random().nextDouble() / 5 + 1.0),
    heightScale: 3.5 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}

List _spruceTrunk(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop,
    trunkLeft,
    trunkRight,
    widthScale: 0.25,
    heightScale: 2.0 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}

/// We use this because Color is part of dart:ui which cannot be used concurrently
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

const CustomColor blueColor = CustomColor.fromARGB(255, 1, 46, 143);

/// Returns a list of positions and colors. Everything visible at the map uses this
/// function (except whater shader).
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side). The 3 visible sides
/// have different colors (colorTop, colorLeft, colorRight).
/// The heightScale/widthScale makes the cubes thinner/wider/shorter/taller.
/// Offset can be used to reduce symmetry by moving the cube slightly
List createCube(
    Point<double> coordinate,
    double tileHeight,
    CustomColor colorTop,
    CustomColor colorLeft,
    CustomColor colorRight, {
      double heightScale = 1,
      double widthScale = 1,
      IsoCoordinate offset = const IsoCoordinate.fromIso(0, 0),
    }) {
  if (tileHeight < 0) {
    // Adds blueish color to underwater cubes
    double depthPercentage = 0.25 + ((tileHeight - 0.25) / 5).abs();
    if (depthPercentage > 1) {
      colorTop = blueColor;
      colorLeft = blueColor;
      colorRight = blueColor;
    } else {
      colorTop = mix(colorTop, blueColor, depthPercentage);
      colorLeft = mix(colorLeft, blueColor, depthPercentage);
      colorRight = mix(colorRight, blueColor, depthPercentage);
    }
  }
  // Creates the 7 corners of the cube
  final cenBot =
      IsoCoordinate(coordinate.x + tileHeight, coordinate.y + tileHeight) +
          offset;
  final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
  final lefBot = cenBot + IsoCoordinate(0, widthScale);
  final lefTop = cenCen + IsoCoordinate(0, widthScale);
  final rigBot = cenBot + IsoCoordinate(widthScale, 0);
  final rigTop = cenCen + IsoCoordinate(widthScale, 0);
  final cenTop = lefTop + IsoCoordinate(widthScale, 0);
  List<double> positions = [
    cenBot.isoX,
    cenBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefBot.isoX,
    lefBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefBot.isoX,
    lefBot.isoY,
    lefTop.isoX,
    lefTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefTop.isoX,
    lefTop.isoY,
    cenTop.isoX,
    cenTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    cenTop.isoX,
    cenTop.isoY,
    rigTop.isoX,
    rigTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    rigTop.isoX,
    rigTop.isoY,
    rigBot.isoX,
    rigBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    rigBot.isoX,
    rigBot.isoY,
    cenBot.isoX,
    cenBot.isoY,
  ];
  List<int> colors = List<int>.filled(18, 0, growable: true);
  for (var i = 0; i < 6; i++) {
    colors[i] = colorLeft.value;
    colors[i + 6] = colorTop.value;
    colors[i + 12] = colorRight.value;
  }
  return [positions, colors];
}

CustomColor mix(CustomColor color1, CustomColor color2, double percent) {
  return CustomColor.fromNormalizedARGB(
    _lerp(color1.normalizedA, color2.normalizedA, percent),
    _lerp(color1.normalizedR, color2.normalizedR, percent),
    _lerp(color1.normalizedG, color2.normalizedG, percent),
    _lerp(color1.normalizedB, color2.normalizedB, percent),
  );
}

double _lerp(double a, double b, double t) {
  return a + (b - a) * t;
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

