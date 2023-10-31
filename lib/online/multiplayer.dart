import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/dto/drawing_dto.dart';

import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:firebase_database/firebase_database.dart';

import '../game_objects/dynamic/player.dart';

class Multiplayer {
  double preIsoX = 0;
  double preIsoY = 0;
  double preElevation = 0;
  final MultiplayerGameObject _ourPlayer;
  final MultiplayerGameObject _otherPlayer = MultiplayerGameObject(2, const IsoCoordinate(0, 0), 0);
  late final DatabaseReference ref;
  final _multiplayerGameObjects = <int, MultiplayerGameObject>{};

  Multiplayer(this._ourPlayer) {
    ref = FirebaseDatabase.instance.ref("users/${_ourPlayer.id}");
    DatabaseReference otherPlayer = FirebaseDatabase.instance.ref('users/${_otherPlayer.id}');
    _multiplayerGameObjects[_otherPlayer.id] = _otherPlayer;
    otherPlayer.onValue.listen((DatabaseEvent event) {
      final data = event.snapshot.value as Map<dynamic, dynamic>;
      _otherPlayer.id = data['id'];
      _otherPlayer.isoCoordinate = IsoCoordinate.fromIso(data['isoX'], data['isoY']);
      _otherPlayer.elevation = data['elevation'];
    });
  }

  void update() {
    _sendOurPlayerState();
    _findNewMultiplayerGameObjects();
    _updateMultiplayerStates();
  }

  void _findNewMultiplayerGameObjects() {

  }

  void _sendOurPlayerState() {
    if (_ourPlayer.isoCoordinate.isoX == preIsoX &&
        _ourPlayer.isoCoordinate.isoY == preIsoY &&
        _ourPlayer.elevation == preElevation) {
      /// Player has not moved so do not update
      return;
    } else {
      preIsoX = _ourPlayer.isoCoordinate.isoX;
      preIsoY = _ourPlayer.isoCoordinate.isoY;
      preElevation = _ourPlayer.elevation;
      ref.set({
        'id': _ourPlayer.id,
        'isoX': _ourPlayer.isoCoordinate.isoX,
        'isoY': _ourPlayer.isoCoordinate.isoY,
        'elevation': _ourPlayer.elevation,
      });
    }
  }

  List<MultiplayerGameObject> getMultiplayerGameObjects() {
    return _multiplayerGameObjects.values.toList();
  }

  void _updateMultiplayerStates() {
    var states = <MultiplayerState>[];
    for (var state in states) {
      if (_multiplayerGameObjects.containsKey(state.id)) {
        var gameObject = _multiplayerGameObjects[state.id]!;
        gameObject.isoCoordinate = state.isoCoordinate;
        gameObject.elevation = state.elevation;
      }
    }
  }
}

class MultiplayerState {
  int id;
  IsoCoordinate isoCoordinate;
  double elevation;

  MultiplayerState(this.id, this.isoCoordinate, this.elevation);
}

class MultiplayerGameObject extends Player {
  int id;

  MultiplayerGameObject(this.id, IsoCoordinate isoCoordinate, double elevation)
      : super(isoCoordinate, elevation);

  @override
  void update() {
    super.dto = PlayerToDrawingDTO.create(this);
  }

  @override
  DrawingDTO getDrawingData() {
    return super.dto;
  }

  @override
  bool isVisible() {
    return true;
  }

  @override
  void setVisibility(bool isVisible) {
    // Is always visible
  }
}
