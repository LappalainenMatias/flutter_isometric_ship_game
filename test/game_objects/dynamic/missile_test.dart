import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/missile.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Decode and enocde missile", () {
    var old = Missile(const IsoCoordinate(1, 2), 3, 4,
        Projectile(const IsoCoordinate(5, 6), 7), 8);
    old.skipCollisionAction.add(9);
    old.actionTypes.add(CollisionActionType.destroyItself);
    old.damageAmount = 10;
    old.projectile.flyingTime = 11;
    old.destroy = true;
    old.setVisibility(false);

    var json = old.toJson();
    Missile decoded = Missile.fromJson(json);
    expect(old.isoCoordinate, decoded.isoCoordinate);
    expect(old.elevation, decoded.elevation);
    expect(old.getId(), decoded.getId());
    expect(old.width, decoded.width);
    expect(old.destroy, decoded.destroy);
    expect(old.projectile.unitVector, decoded.projectile.unitVector);
    expect(old.projectile.speed, decoded.projectile.speed);
    expect(old.skipCollisionAction.elementAt(0),
        decoded.skipCollisionAction.elementAt(0));
    expect(old.isVisible(), decoded.isVisible());
  });
}
