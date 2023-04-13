import 'dart:typed_data';

/// Contains items like trees, rocks, plants, etc.
class NaturalItem {
  late Float32List vertices;
  late Int32List colors;
  NaturalItem(this.vertices, this.colors);
  NaturalItem.tree() {
    vertices = Float32List.fromList([
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
    ]);
    colors = Int32List.fromList([
      0,
      0,
      0,
    ]);
    NaturalItem(vertices, colors);
  }
}

class NaturalItemCreator {
  NaturalItem createTree() {
    return NaturalItem.tree();
  }
}
