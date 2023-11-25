import '../coordinates/iso_coordinate.dart';
import '../dto/drawing_dto.dart';
import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object_to_drawing_data.dart';
import 'dart:math';

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