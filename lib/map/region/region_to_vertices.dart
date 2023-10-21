import 'dart:typed_data';

import '../../game_objects/game_object.dart';
import '../../game_objects/game_objects_to_vertices.dart';
import '../../optimization/list_binary_search.dart';
import 'dart:ui' as ui;

/// Todo this class is unnecessary
class RegionToVertices {
  static ({
    ui.Vertices aboveWater,
    ui.Vertices underWater,
    int verticesCount
  }) toVertices(
      List<GameObject> staticGameObjects, List<GameObject> dynamicGameObjects) {
    List<GameObject> allGameObjects = addDynamicObjectsToStaticGameObjects(
      staticGameObjects,
      dynamicGameObjects,
    );

    var vertices = gameObjectsToVertices(allGameObjects);
    int verticesCount = (vertices.aboveWater.positions.length +
            vertices.underWater.positions.length) ~/
        2;

    var aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      vertices.aboveWater.positions,
      textureCoordinates: vertices.aboveWater.textures,
    );
    var underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      vertices.underWater.positions,
      textureCoordinates: vertices.underWater.textures,
    );

    return (
      aboveWater: aboveWater,
      underWater: underWater,
      verticesCount: verticesCount,
    );
  }
}

/// Todo this class is unnecessary
class RegionToRstTransformsAndRects {
  static ({
    Float32List underWaterRstTransforms,
    Float32List underWaterRects,
    Float32List aboveWaterRstTransforms,
    Float32List aboveWaterRects,
  }) toAtlasData(
      List<GameObject> staticGameObjects, List<GameObject> dynamicGameObjects) {
    List<GameObject> allGameObjects = addDynamicObjectsToStaticGameObjects(
      staticGameObjects,
      dynamicGameObjects,
    );

    int amountAboveWater = 0;
    int amountUnderWater = 0;
    for (var gameObject in allGameObjects) {
      if (!gameObject.isVisible()) continue;
      if (gameObject.isUnderWater()) {
        amountUnderWater += 1;
      } else {
        amountAboveWater += 1;
      }
    }

    Float32List underRst = Float32List(4 * amountUnderWater);
    Float32List underRects = Float32List(4 * amountUnderWater);
    Float32List aboveRst = Float32List(4 * amountAboveWater);
    Float32List aboveRects = Float32List(4 * amountAboveWater);

    int underIndex = 0;
    int aboveIndex = 0;
    for (var gameObject in allGameObjects) {
      var vertices = gameObject.getVertices();
      if (!gameObject.isVisible()) continue;
      if (gameObject.isUnderWater()) {
        underRst[underIndex] = vertices.positions[0];
        underRst[underIndex + 1] = vertices.positions[1];
        underRst[underIndex + 2] = vertices.positions[2];
        underRst[underIndex + 3] = vertices.positions[3];
        underRects[underIndex] = vertices.textures[0];
        underRects[underIndex + 1] = vertices.textures[1];
        underRects[underIndex + 2] = vertices.textures[2];
        underRects[underIndex + 3] = vertices.textures[3];
        underIndex += 4;
      } else {
        aboveRst[aboveIndex] = vertices.positions[0];
        aboveRst[aboveIndex + 1] = vertices.positions[1];
        aboveRst[aboveIndex + 2] = vertices.positions[2];
        aboveRst[aboveIndex + 3] = vertices.positions[3];
        aboveRects[aboveIndex] = vertices.textures[0];
        aboveRects[aboveIndex + 1] = vertices.textures[1];
        aboveRects[aboveIndex + 2] = vertices.textures[2];
        aboveRects[aboveIndex + 3] = vertices.textures[3];
        aboveIndex += 4;
      }
    }

    return (
      underWaterRstTransforms: underRst,
      underWaterRects: underRects,
      aboveWaterRstTransforms: aboveRst,
      aboveWaterRects: aboveRects,
    );
  }
}
