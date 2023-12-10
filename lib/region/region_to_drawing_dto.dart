import 'dart:typed_data';

import '../../game_objects/game_object.dart';
import '../../optimization/list_binary_search.dart';

/// The original implementation used to merge two list together and created the drawing data from that.
/// This implementation does that same thing but does not create a new list.
/// This makes it more confusing but 10x faster.
({
Float32List underWaterRstTransforms,
Float32List underWaterRects,
Float32List aboveWaterRstTransforms,
Float32List aboveWaterRects,
int amountVisible
}) regionToDrawingDTO(
    List<GameObject> sortedStaticGameObjects, List<GameObject> sortedDynamicGameObjects) {

  int staticIndex = 0;
  int dynamicIndex = 0;
  int amountAboveWater = 0;
  int amountUnderWater = 0;
  int amountVisible = 0;

  // Calculate sizes first
  while (staticIndex < sortedStaticGameObjects.length || dynamicIndex < sortedDynamicGameObjects.length) {
    GameObject nextObject;

    // Check if we are still within both lists
    if (staticIndex < sortedStaticGameObjects.length && dynamicIndex < sortedDynamicGameObjects.length) {
      if (sortedStaticGameObjects[staticIndex].compareTo(sortedDynamicGameObjects[dynamicIndex]) <= 0) {
        nextObject = sortedStaticGameObjects[staticIndex];
        staticIndex++;
      } else {
        nextObject = sortedDynamicGameObjects[dynamicIndex];
        dynamicIndex++;
      }
    } else if (staticIndex < sortedStaticGameObjects.length) {
      // Only static objects left
      nextObject = sortedStaticGameObjects[staticIndex];
      staticIndex++;
    } else {
      // Only dynamic objects left
      nextObject = sortedDynamicGameObjects[dynamicIndex];
      dynamicIndex++;
    }

    // Count visible, above water, and under water objects
    if (nextObject.isVisible()) {
      if (nextObject.isUnderWater()) {
        amountUnderWater++;
      } else {
        amountAboveWater++;
      }
      amountVisible++;
    }
  }

  // Initialize the Float32Lists with calculated sizes
  Float32List underRst = Float32List(4 * amountUnderWater);
  Float32List underRects = Float32List(4 * amountUnderWater);
  Float32List aboveRst = Float32List(4 * amountAboveWater);
  Float32List aboveRects = Float32List(4 * amountAboveWater);

  // Reset indices for processing
  staticIndex = 0;
  dynamicIndex = 0;
  int underIndex = 0;
  int aboveIndex = 0;

  // Process each object to fill the Float32Lists
  // Similar logic as above, but now copying data to Float32Lists
  while (staticIndex < sortedStaticGameObjects.length || dynamicIndex < sortedDynamicGameObjects.length) {
    GameObject nextObject;

    // Choose the next GameObject
    if (staticIndex < sortedStaticGameObjects.length && dynamicIndex < sortedDynamicGameObjects.length) {
      if (sortedStaticGameObjects[staticIndex].compareTo(sortedDynamicGameObjects[dynamicIndex]) <= 0) {
        nextObject = sortedStaticGameObjects[staticIndex];
        staticIndex++;
      } else {
        nextObject = sortedDynamicGameObjects[dynamicIndex];
        dynamicIndex++;
      }
    } else if (staticIndex < sortedStaticGameObjects.length) {
      nextObject = sortedStaticGameObjects[staticIndex];
      staticIndex++;
    } else {
      nextObject = sortedDynamicGameObjects[dynamicIndex];
      dynamicIndex++;
    }

    // Skip if not visible
    if (!nextObject.isVisible()) continue;

    // Copy data to Float32Lists
    var vertices = nextObject.getDrawingData();
    if (nextObject.isUnderWater()) {
      underRst.setAll(underIndex, vertices.rSTransforms);
      underRects.setAll(underIndex, vertices.rects);
      underIndex += 4;
    } else {
      aboveRst.setAll(aboveIndex, vertices.rSTransforms);
      aboveRects.setAll(aboveIndex, vertices.rects);
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

