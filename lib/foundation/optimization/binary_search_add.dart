import '../game_object/game_object.dart';

List<GameObject> addDynamicObjectsToStaticGameObjects(
    List<StaticGameObject> staticGameObjects,
    List<DynamicGameObject> dynamicGameObjects) {
  List<GameObject> allGameObjects = [...staticGameObjects];
  for (var newGameObject in dynamicGameObjects) {
    _addGameObjectInCorrectOrder(allGameObjects, newGameObject);
  }
  return allGameObjects;
}

void _addGameObjectInCorrectOrder(
    List<GameObject> allGameObjects, GameObject newGameObject) {
  int min = 0;
  int max = allGameObjects.length;
  while (min < max) {
    int mid = min + ((max - min) >> 1);
    if (newGameObject.compareTo(allGameObjects[mid]) < 0) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  allGameObjects.insert(min, newGameObject);
}
