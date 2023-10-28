import 'dart:typed_data';

import '../../game_objects/game_object.dart';
import '../../optimization/list_binary_search.dart';

/// Todo this class is unnecessary
class RegionToRstTransformsAndRects {
  static ({
    Float32List underWaterRstTransforms,
    Float32List underWaterRects,
    Float32List aboveWaterRstTransforms,
    Float32List aboveWaterRects,
    int amountVisible
  }) create(
      List<GameObject> staticGameObjects, List<GameObject> dynamicGameObjects) {
    List<GameObject> allGameObjects = addDynamicObjectsToStaticGameObjects(
      staticGameObjects,
      dynamicGameObjects,
    );

    int amountAboveWater = 0;
    int amountUnderWater = 0;
    int amountVisible = 0;
    for (var gameObject in allGameObjects) {
      if (!gameObject.isVisible()) continue;
      if (gameObject.isUnderWater()) {
        amountUnderWater += 1;
      } else {
        amountAboveWater += 1;
      }
      amountVisible += 1;
    }

    Float32List underRst = Float32List(4 * amountUnderWater);
    Float32List underRects = Float32List(4 * amountUnderWater);
    Float32List aboveRst = Float32List(4 * amountAboveWater);
    Float32List aboveRects = Float32List(4 * amountAboveWater);

    int underIndex = 0;
    int aboveIndex = 0;
    for (var gameObject in allGameObjects) {
      var vertices = gameObject.getDrawingData();
      if (!gameObject.isVisible()) continue;
      if (gameObject.isUnderWater()) {
        underRst[underIndex] = vertices.rstTransforms[0];
        underRst[underIndex + 1] = vertices.rstTransforms[1];
        underRst[underIndex + 2] = vertices.rstTransforms[2];
        underRst[underIndex + 3] = vertices.rstTransforms[3];
        underRects[underIndex] = vertices.rects[0];
        underRects[underIndex + 1] = vertices.rects[1];
        underRects[underIndex + 2] = vertices.rects[2];
        underRects[underIndex + 3] = vertices.rects[3];
        underIndex += 4;
      } else {
        aboveRst[aboveIndex] = vertices.rstTransforms[0];
        aboveRst[aboveIndex + 1] = vertices.rstTransforms[1];
        aboveRst[aboveIndex + 2] = vertices.rstTransforms[2];
        aboveRst[aboveIndex + 3] = vertices.rstTransforms[3];
        aboveRects[aboveIndex] = vertices.rects[0];
        aboveRects[aboveIndex + 1] = vertices.rects[1];
        aboveRects[aboveIndex + 2] = vertices.rects[2];
        aboveRects[aboveIndex + 3] = vertices.rects[3];
        aboveIndex += 4;
      }
    }

    return (
      underWaterRstTransforms: underRst,
      underWaterRects: underRects,
      aboveWaterRstTransforms: aboveRst,
      aboveWaterRects: aboveRects,
      amountVisible: amountVisible,
    );
  }
}
