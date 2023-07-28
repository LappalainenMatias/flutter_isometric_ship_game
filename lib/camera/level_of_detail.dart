/// In practice low level of detail causes the elevation and moisture noise to have less detail.
/// Because of this the map will have larger tiles (rendering is faster).
///
/// From:
/// [1, 2, 3, 4],
/// [5, 6, 7, 8],
/// [9, 10, 11, 12],
/// [13, 14, 15, 16]
/// to:
/// [1, 1, 3, 3],
/// [1, 1, 3, 3],
/// [9, 9, 11, 11],
/// [9, 9, 11, 11]
enum LevelOfDetail {
  maximum(1, true),
  mid(2, false),
  low(4, false),
  minimal(8, false);

  const LevelOfDetail(this.tileMinSize, this.containsNaturalItems);
  final int tileMinSize;
  final bool containsNaturalItems;
}