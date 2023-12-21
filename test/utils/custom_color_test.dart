import 'dart:ui';
import 'package:anki/foundation/utils/custom_color.dart';
import 'package:test/test.dart';

void main() {
  test("Custom color should work like dart:ui color class", () {
    var custom = const CustomColor.fromARGB(255, 101, 102, 103);
    Color color = const Color.fromARGB(255, 101, 102, 103);
    expect(custom.a, color.alpha);
    expect(custom.r, color.red);
    expect(custom.g, color.green);
    expect(custom.b, color.blue);
    expect(custom.value, color.value);
  });
}