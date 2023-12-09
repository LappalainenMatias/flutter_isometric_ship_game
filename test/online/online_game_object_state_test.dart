import 'package:anki/online/online_game_object_states/missile_state.dart';
import 'package:anki/online/online_game_object_states/player_state.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Serialization and Deserialization should not change the missile object',
      () {
    final original = MissileState(
      id: 1,
      isoX: 10.0,
      isoY: 20.0,
      elevation: 5.0,
      width: 2.0,
      unitVectorX: 0.5,
      unitVectorY: 0.5,
      speed: 100.0,
      flyingTime: 5.0,
      isVisible: true,
      destroy: true,
      skipCollisionAction: {3},
      actionTypesIndexes: {4},
    );

    final json = original.toJson();

    final copy = MissileState.fromJson(json);

    expect(copy.id, original.id);
    expect(copy.isoX, original.isoX);
    expect(copy.isoY, original.isoY);
    expect(copy.elevation, original.elevation);
    expect(copy.width, original.width);
    expect(copy.unitVectorX, original.unitVectorX);
    expect(copy.unitVectorY, original.unitVectorY);
    expect(copy.speed, original.speed);
    expect(copy.flyingTime, original.flyingTime);
    expect(copy.isVisible, original.isVisible);
    expect(copy.destroy, original.destroy);
    expect(copy.skipCollisionAction, original.skipCollisionAction);
    expect(copy.actionTypesIndexes, original.actionTypesIndexes);
  });

  test('Serialization and Deserialization should not change the player object',
      () {
    final originalPlayerState = PlayerState(
      id: 1,
      isoX: 10.0,
      isoY: 20.0,
      elevation: 5.0,
      width: 2.0,
      destroy: true,
      actionTypes: [1, 2, 3],
      skipCollisionAction: [4, 5],
      health: 100,
      animationParts: [6, 7, 8],
      isVisible: true,
    );

    final json = originalPlayerState.toJson();

    final newPlayerState = PlayerState.fromJson(json);

    expect(newPlayerState.id, originalPlayerState.id);
    expect(newPlayerState.isoX, originalPlayerState.isoX);
    expect(newPlayerState.isoY, originalPlayerState.isoY);
    expect(newPlayerState.elevation, originalPlayerState.elevation);
    expect(newPlayerState.width, originalPlayerState.width);
    expect(newPlayerState.destroy, originalPlayerState.destroy);
    expect(newPlayerState.actionTypes, originalPlayerState.actionTypes);
    expect(newPlayerState.skipCollisionAction,
        originalPlayerState.skipCollisionAction);
    expect(newPlayerState.health, originalPlayerState.health);
    expect(newPlayerState.animationParts, originalPlayerState.animationParts);
    expect(newPlayerState.isVisible, originalPlayerState.isVisible);
  });
}
