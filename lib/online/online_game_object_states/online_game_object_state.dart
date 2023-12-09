/// Game objects which will be sent to the server.
/// The online game objects have the following properties:
/// 1. They can be decoded and encoded into json without loosing any important data
/// 2. The game object can be updated to match the state
/// 3. Game objects can be created from the state
mixin OnlineGameObject {
  Map<String, dynamic> toJson();
  matchState(GameObjectState state);
}

abstract class GameObjectState {}
