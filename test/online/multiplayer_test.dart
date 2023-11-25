import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Decoded and encoded game object should be the same", ()
  {
    final mp = Player(const IsoCoordinate.fromIso(2, -2), 10, 0);
    mp.setHealth(10);
    mp.elevation = 2;
    mp.width = 3;
    mp.actionTypes.add(CollisionActionType.destroyItself);
    mp.skipCollisionAction.add(1);
    var json = mp.toJson();
    Player decoded = Player.fromJson(json);
    expect(mp.isoCoordinate, decoded.isoCoordinate);
    expect(mp.elevation, decoded.elevation);
    expect(mp.getId(), decoded.getId());
    expect(mp.width, decoded.width);
    expect(mp.destroy, decoded.destroy);
    expect(mp.animationLength, decoded.animationLength);
    for (var actionType in mp.actionTypes) {
      expect(decoded.actionTypes.contains(actionType), isTrue);
    }
    for (var skip in mp.skipCollisionAction) {
      expect(decoded.skipCollisionAction.contains(skip), isTrue);
    }
  });
}
