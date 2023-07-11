import 'package:anki/utils/vertice_dto.dart';

import '../map/region/game_objects/game_object.dart';

Map<String, VerticeDTO> toVertices(List<GameObject> gameObjects) {
  gameObjects.sort();
  VerticeDTO underWater = VerticeDTO.empty();
  VerticeDTO aboveWater = VerticeDTO.empty();
  for (var gameObject in gameObjects) {
    if (gameObject.isUnderWater()) {
      underWater.addVerticeDTO(gameObject.getVertices());
    } else {
      aboveWater.addVerticeDTO(gameObject.getVertices());
    }
  }
  return {
    'underWater': underWater,
    'aboveWater': aboveWater,
  };
}

class VerticeData {

}