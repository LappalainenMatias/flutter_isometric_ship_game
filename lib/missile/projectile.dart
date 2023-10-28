import 'missile.dart';
import 'dart:math';

/// Changes the missiles elevation.
/// We change the missiles size closer to the actual size (minsize) when
/// the elevation gets closer to 0. This creates the illusion of dropping
/// missiles.
class Projectile {
  final double elevationDecreasePerFrame;
  final double scalingFactor = 1.01;
  double minSize;

  Projectile({
    required this.elevationDecreasePerFrame,
    required this.minSize,
  });

  void update(Missile missile) {
    if (missile.isDestroyed) {
      return;
    }

    // Decrease elevation
    missile.elevation -= elevationDecreasePerFrame;

    // Update size based on new elevation
    missile.width = minSize * pow(scalingFactor, missile.elevation).toDouble();

    // This makes sure that the missile is destroyed when it is below the map.
    if (missile.elevation < -50) {
      missile.isDestroyed = true;
    }
  }
}
