import 'package:anki/textures/texture_rects.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Texture rect should have left, right, top and bottom coordinates", () {
    var textureRect =
        getTileTextureCoordinatesRect(SpriteSheetItem.shipRedDownA1);
    final left = textureRect[0];
    final right = textureRect[2];
    final top = textureRect[1];
    final bottom = textureRect[3];
    expect(left < right, isTrue);
    expect(top < bottom, isTrue);
  });
}
