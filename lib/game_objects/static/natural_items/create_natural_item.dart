import '../../../coordinates/iso_coordinate.dart';
import 'natural_items.dart';

List<NaturalItemCube> createBirchTree(
    IsoCoordinate isoCoordinate, double elevation) {
  return [
    NaturalItemCube(
      NaturalItemPart.birchTrunkCube,
      isoCoordinate,
      elevation + 1,
    ),
    NaturalItemCube(
      NaturalItemPart.birchTrunkCube,
      isoCoordinate,
      elevation + 2,
    ),
    NaturalItemCube(
      NaturalItemPart.birchTrunkCube,
      isoCoordinate,
      elevation + 3,
    ),
    NaturalItemCube(
      NaturalItemPart.birchTrunkCube,
      isoCoordinate,
      elevation + 4,
    ),
    NaturalItemCube(
      NaturalItemPart.birchTrunkCube,
      isoCoordinate,
      elevation + 5,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(0, -1),
      elevation + 3,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(1, -1),
      elevation + 3,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(1, 0),
      elevation + 4,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(1, 1),
      elevation + 4,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(0, 1),
      elevation + 5,
    ),
    NaturalItemCube(
      NaturalItemPart.birchLeavesCube,
      isoCoordinate + const IsoCoordinate(-1, 1),
      elevation + 5,
    ),
  ];
}
