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
  zoomlevel_0(32, false),
  zoomlevel_m1(64, false),
  zoomlevel_m2(128, false),
  zoomlevel_m3(256, false),
  zoomlevel_m4(512, false),
  zoomlevel_m5(1024, false),
  zoomlevel_m6(2048, false),
  zoomlevel_m7(4096, false),
  zoomlevel_m8(8192, false),
  zoomlevel_m9(8192 * 2, false),
  zoomlevel_m10(8192 * 2 * 2, false),
  zoomlevel_m11(8192 * 2 * 2 * 2, false),
  zoomlevel_m12(8192 * 2 * 2 * 2 * 2, false),
  zoomlevel_m13(8192 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m14(8192 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m15(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m16(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m17(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m18(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m19(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m20(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, false),
  zoomlevel_m21(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 4, false),
  zoomlevel_m22(8192 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 8, false);
  // Zoomed out

  const LevelOfDetail(
    this.tileMinWidth,
    this.containsNaturalItems,
  );

  final int tileMinWidth;
  final bool containsNaturalItems;
}
