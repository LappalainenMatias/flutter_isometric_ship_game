import 'package:anki/foundation/coordinates/rectangle.dart';

import '../coordinates/iso_coordinate.dart';
import '../game_object/game_object.dart';
import '../rendering_data/rendering_data.dart';

abstract class Region implements Comparable<Region> {
  IsoCoordinate getBottomCoordinate();

  List<GameObject> getGameObjects();

  bool isEmpty();

  void addGameObject(GameObject gameObject);

  void removeGameObject(GameObject gameObject);

  void update();

  int nearness();

  /// Borders are used for checking if a region is visible.
  /// If borders and camera borders intersect, the region is visible.
  Rectangle getRectangle();

  ({
    RenderingData underWater,
    RenderingData aboveWater,
  }) getRenderingData();

  @override
  int compareTo(Region other) {
    if (nearness() > other.nearness()) {
      return 1;
    }
    return -1;
  }
}
