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
  zoomlevel_19(1 << 0, true, true),
  zoomlevel_18(1 << 1, false, false),
  zoomlevel_17(1 << 2, false, false),
  zoomlevel_16(1 << 3, false, false),
  zoomlevel_15(1 << 4, false, false),
  zoomlevel_14(1 << 5, false, false),
  zoomlevel_13(1 << 6, false, false),
  zoomlevel_12(1 << 7, false, false),
  zoomlevel_11(1 << 8, false, false),
  zoomlevel_10(1 << 9, false, false),
  zoomlevel_9(1 << 10, false, false),
  zoomlevel_8(1 << 11, false, false),
  zoomlevel_7(1 << 12, false, false),
  zoomlevel_6(1 << 13, false, false),
  zoomlevel_5(1 << 14, false, false),
  zoomlevel_4(1 << 15, false, false),
  zoomlevel_3(1 << 16, false, false),
  zoomlevel_2(1 << 17, false, false),
  zoomlevel_1(1 << 18, false, false),
  zoomlevel_0(1 << 19, false, false);
  // Zoomed out

  const LevelOfDetail(
    this.tileMinWidth,
    this.containsNaturalItems,
    this.runVisibilityChecker,
  );

  final int tileMinWidth;
  final bool containsNaturalItems;
  final bool runVisibilityChecker;
}
