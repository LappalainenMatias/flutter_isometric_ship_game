import '../../game_objects/game_object.dart';
import '../../game_objects/game_objects_to_vertices.dart';
import '../../optimization/list_binary_search.dart';
import 'dart:ui' as ui;

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
            vertices.underWater.positions.length) ~/2;

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
