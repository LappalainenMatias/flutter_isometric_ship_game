import 'package:anki/region/region_creation/region_creator.dart';
import 'package:js/js.dart';

/// Todo maybe we could add the dart compile to the build process
/// Todo create own folder and file for concurrency
/// Run dart compile js -O2 -o web/regionworker.js lib/region/jsregionworker.dart
/// when you change anything about the map because we need to update the web/regionworker.js
@JS('jsregionworker')
external set jsregionworker(obj);

/// Here we create encoded game objects in a web worker.
/// We encode the game objects to list because this seems to be fastest way to
/// transfer the data because you cannot return complex objects. We use lists
/// because they seem to be faster than any other data structure that I have tested.
void main() {
  jsregionworker = allowInterop((args) {
    RegionCreator regionCreator = RegionCreator();
    int width = args[0];
    int height = args[1];
    double pointX = args[2];
    double pointY = args[3];

    var gameObjects = regionCreator.create(width,
        height, pointX.toInt(), pointY.toInt());

    List<List?> encoded = [];
    for (var gameObject in gameObjects) {
      encoded.add(gameObject.gameObjectToList());
    }
    return encoded;
  });
}
