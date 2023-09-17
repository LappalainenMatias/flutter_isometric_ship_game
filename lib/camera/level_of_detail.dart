/// Reduces the detail of the map.
/// From 1x1:
/// [1, 2, 3, 4],
/// [5, 6, 7, 8],
/// [9, 10, 11, 12],
/// [13, 14, 15, 16]
/// to 2x2:
/// [1, 1, 3, 3],
/// [1, 1, 3, 3],
/// [9, 9, 11, 11],
/// [9, 9, 11, 11]
enum LevelOfDetail {
  // Zoomed in
  zoomlevel_5(1, true),
  zoomlevel_4(2, false),
  zoomlevel_3(4, false),
  zoomlevel_2(8, false),
  zoomlevel_1(16, false),
  zoomlevel_0(32, false);
  // Zoomed out

  const LevelOfDetail(
    this.tileMinWidth,
    this.containsNaturalItems,
  );

  final int tileMinWidth;
  final bool containsNaturalItems;
}
