import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../constants.dart';
import 'multiplayer.dart';

class Online extends ChangeNotifier {
  late WebSocketChannel _channel;
  List<MultiplayerGameObject> _opponents = [];
  String connectionStatus = 'disconnected';

  Online() {
    if (kDebugMode) {
      print('Connecting to server');
    }
    final uri = Uri.parse(localSocket);
    _channel = WebSocketChannel.connect(uri);

    _channel.stream.listen(
      (message) {
        try {
          print("Received message: $message");
          _opponents = _decodePlayerList(message as String);
        } catch (e) {
          print('Error parsing game objects: $e');
        }
        connectionStatus = "connected";
        notifyListeners();
      },
      onDone: () {
        connectionStatus = 'disconnected';
        notifyListeners();
      },
      onError: (error) {
        connectionStatus = 'error';
        notifyListeners();
      },
    );
  }

  List<MultiplayerGameObject> _decodePlayerList(String jsonString) {
    List<dynamic> jsonList = jsonDecode(jsonString);
    var states = jsonList.map((json) => MultiplayerState.fromJson(json)).toList();
    List<MultiplayerGameObject> multiplayerGameObjects = [];
    for (MultiplayerState state in states) {
      multiplayerGameObjects.add(MultiplayerGameObject.fromState(state));
    }
    return multiplayerGameObjects;
  }

  void disconnect() {
    _channel.sink.close();
  }

  void update(MultiplayerState ourPlayer) {
    _channel.sink.add(
        '__updatePlayer__:${ourPlayer.id}:${ourPlayer.isoX}:${ourPlayer.isoY}:${ourPlayer.elevation}');
  }

  List<MultiplayerGameObject> getOpponents() {
    return _opponents;
  }
}
