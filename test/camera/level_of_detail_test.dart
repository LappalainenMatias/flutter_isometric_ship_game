import 'package:anki/camera/level_of_detail.dart';
import 'package:test/test.dart';

void main() {
  test("Level of detail tile min size should be power of 2", () {
    /// Power of 2 makes lowering the noise detail easier
    for (var lod in LevelOfDetail.values) {
      expect(lod.tileMinSize > 0 && (lod.tileMinSize & (lod.tileMinSize - 1)) == 0, true);
    }
  });
}