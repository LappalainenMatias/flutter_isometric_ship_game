import 'package:anki/game_specific/game_object/tile.dart';
import '../../foundation/game_object/game_object.dart';

GameObject gameObjectFromList(List gameObjectData) {
  switch (gameObjectData[0] as String) {
    case 'Tile':
      return Tile.fromList(gameObjectData);
    case 'Player':
      throw Exception("Implement");
  }
  throw Exception("Not implemented for $gameObjectData");
}
