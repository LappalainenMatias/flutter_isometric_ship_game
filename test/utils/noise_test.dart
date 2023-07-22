import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/utils/noise.dart';
import 'package:test/test.dart';

void main() {
  test("Noise range of values", () {
    Noise noise = Noise(
      FinlandCreationRules(),
      1,
    );
    var noises = noise.create(256, 256, 0, 0);
    var elevation = noises[0];
    var moisture = noises[1];
    for (var column in elevation) {
      for (var val in column) {
        if (val < -30 || val > 20) {
          throw Exception("Elevation was too large or low. Value: $val");
        }
      }
    }
    for (var column in moisture) {
      for (var val in column) {
        if (val < -2.0 || val > 2.0) {
          throw Exception("Moisture was too large or low. Value: $val");
        }
      }
    }
  });
}
