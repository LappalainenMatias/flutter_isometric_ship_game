import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../game_object.dart';
import 'dart:math';
import '../game_objects_to_vertices.dart';

class Bird extends DynamicGameObject {
  List<CollisionAction> collisionActions = [];
  IsoCoordinate isoCoordinate;
  bool isColliding = false;
  double elevation;
  double sideWidth = 0.3;
  bool _isVisible = true;
  late DrawingDTO dto;
  final Flying _flyingTo;

  Bird(this.isoCoordinate, this.elevation, this._flyingTo) {
    dto = BirdToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + 1).toDouble(),
      elevation: elevation
    );
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }

  @override
  CollisionBox? getCollisionBox() {
    return null;
  }

  @override
  List gameObjectToList() {
    // TODO: if we implement this then the game becomes savable because we can save
    // all the game objects as a list of values
    throw UnimplementedError();
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  bool isVisible() {
    return _isVisible;
  }

  @override
  void setVisibility(bool isVisible) {
    _isVisible = isVisible;
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  void update(double dt) {
    dto = BirdToDrawingDTO.create(this);
    _flyingTo.fly(this);
  }

  @override
  List<CollisionAction> getCollisionActions() {
    return collisionActions;
  }
}

class Flying {
  IsoCoordinate target;
  double elevationTarget;
  double speed;

  Flying(this.target, this.elevationTarget, this.speed);

  void fly(Bird bird) {
    double dx = target.isoX - bird.isoCoordinate.isoX;
    double dy = target.isoY - bird.isoCoordinate.isoY;
    double dz = elevationTarget - bird.elevation;
    double distance = sqrt(dx * dx + dy * dy);
    if (distance < 0.5) {
      createNewtarget(bird);
      return;
    }
    bird.isoCoordinate +=
        IsoCoordinate.fromIso(dx / distance * speed, dy / distance * speed);
    bird.elevation += dz * speed;
  }

  void createNewtarget(Bird bird) {
    Random random = Random();
    target = IsoCoordinate.fromIso(target.isoX + random.nextInt(100).toDouble(),
        target.isoY + random.nextInt(100).toDouble() - 50);
    elevationTarget = random.nextInt(10).toDouble() - 5;
    if (elevationTarget < 1) {
      elevationTarget = 1;
    }
  }
}
