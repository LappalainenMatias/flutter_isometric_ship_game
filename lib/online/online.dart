import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../constants.dart';
import '../game_objects/dynamic/player.dart';

class Online extends ChangeNotifier {
  late WebSocketChannel _channel;
  List<Player> _opponents = [];
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

  List<Player> _decodePlayerList(String jsonString) {
    List<dynamic> jsonList = jsonDecode(jsonString);
    return jsonList.map((json) => Player.fromJson(json)).toList()
        as List<Player>;
  }

  void disconnect() {
    _channel.sink.close();
  }

  void update(Player ourPlayer) {
    _channel.sink.add('__updatePlayer__:${ourPlayer.toJson()}');
  }

  List<Player> getOpponents() {
    return _opponents;
  }
}
