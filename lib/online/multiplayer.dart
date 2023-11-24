import 'dart:convert';
import 'dart:math';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:flutter/foundation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../game_objects/dynamic/player.dart';

class Online extends ChangeNotifier {
  late WebSocketChannel _channel;
  List<MultiplayerGameObject> _opponents = [];
  String connectionStatus = 'disconnected';

  Online() {
    if (kDebugMode) {
      print('Connecting to server');
    }
    final uri = Uri.parse('ws://localhost:8080/ws');
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

class MultiplayerState {
  MultiplayerState(this.id, this.isoY, this.isoX, this.elevation);

  int id;
  double isoX;
  double isoY;
  double elevation;

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'isoX': isoX,
      'isoY': isoY,
      'elevation': elevation,
    };
  }

  static fromJson(obj) {
    return MultiplayerState(
        obj['id'], obj['isoX'], obj['isoY'], obj['elevation']);
  }
}

class MultiplayerGameObject extends Player {
  late int id;

  MultiplayerGameObject(IsoCoordinate isoCoordinate, double elevation)
      : super(isoCoordinate, elevation) {
    id = Random().nextInt(10000000);
  }

  @override
  DrawingDTO getDrawingData() {
    return PlayerToDrawingDTO.create(this);
  }

  @override
  bool isVisible() {
    return true;
  }

  @override
  void setVisibility(bool isVisible) {
    // Is always visible
  }

  /// This is the data shared between the server and the client
  MultiplayerState getState() {
    return MultiplayerState(
        id, isoCoordinate.isoX, isoCoordinate.isoY, elevation);
  }

  MultiplayerGameObject.fromState(MultiplayerState state)
      : id = state.id,
        super(IsoCoordinate.fromIso(state.isoX, state.isoY), state.elevation);
}
