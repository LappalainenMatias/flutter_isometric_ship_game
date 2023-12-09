import 'dart:convert';
import 'package:anki/game_objects/dynamic/missile.dart';
import 'package:flutter/foundation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../constants.dart';
import '../game_objects/dynamic/player.dart';
import 'online_game_object_states/missile_state.dart';
import 'online_game_object_states/online_game_object_state.dart';
import 'online_game_object_states/player_state.dart';

class Online extends ChangeNotifier {
  late WebSocketChannel _channel;
  List<GameObjectState> _onlineGameObjectStates = [];
  ConnectionStatus connectionStatus = ConnectionStatus.disconnected;

  Online() {
    if (kDebugMode) {
      print('Connecting to the server: $socket');
    }
    final uri = Uri.parse(socket);
    _channel = WebSocketChannel.connect(uri);

    _channel.stream.listen(
      (message) {
        try {
          _onlineGameObjectStates = _decodeOnlineGameObjects(message as String);
        } catch (e) {
          if (kDebugMode) {
            print('Error parsing game objects: $e');
          }
        }
        connectionStatus = ConnectionStatus.connected;
        notifyListeners();
      },
      onDone: () {
        connectionStatus = ConnectionStatus.disconnected;
        notifyListeners();
      },
      onError: (error) {
        connectionStatus = ConnectionStatus.error;
        if (kDebugMode) {
          print('Error: $error');
        }
        notifyListeners();
      },
    );
  }

  List<GameObjectState> _decodeOnlineGameObjects(String jsonString) {
    var map = jsonDecode(jsonString);

    List<GameObjectState> states = [];
    for (var playerJson in map["players"]) {
      if (playerJson is Map<String, dynamic>) {
        states.add(PlayerState.fromJson(playerJson));
      }
    }
    for (var missileJson in map["missiles"]) {
      if (missileJson is Map<String, dynamic>) {
        states.add(MissileState.fromJson(missileJson));
      }
    }

    return states;
  }

  void disconnect() {
    _channel.sink.close();
  }

  void updatePlayer(Player ourPlayer) {
    _channel.sink.add('__updatePlayer__:${jsonEncode(ourPlayer.toJson())}');
  }

  void addMissile(Missile missile) {
    _channel.sink.add('__addMissile__:${jsonEncode(missile.toJson())}');
  }

  void playerDestroyed(Player ourPlayer) {
    _channel.sink
        .add('__playerDestroyed__:${jsonEncode({'id': ourPlayer.getId()})}');
  }

  List<GameObjectState> getOpponents() {
    return _onlineGameObjectStates;
  }
}

enum ConnectionStatus {
  disconnected,
  connected,
  error;

  @override
  String toString() {
    switch (this) {
      case ConnectionStatus.disconnected:
        return 'Disconnected';
      case ConnectionStatus.connected:
        return 'Connected';
      case ConnectionStatus.error:
        return 'Error';
    }
  }
}
