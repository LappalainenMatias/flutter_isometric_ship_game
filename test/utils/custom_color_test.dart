import 'dart:ui';

import 'package:anki/utils/custom_color.dart';
import 'package:test/test.dart';

void main() {
  test("Custom color should work like color class", () {
    CustomColor custom = const CustomColor.fromARGB(255, 101, 102, 103);
    Color color = const Color.fromARGB(255, 101, 102, 103);
    expect(custom.value, color.value);
  });
}