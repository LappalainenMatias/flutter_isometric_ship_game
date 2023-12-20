import 'damage.dart';

mixin Health {
  int _health = 1;

  void takeDamage(Damage damage) {
    _health -= damage.damageAmount;
    if (_health <= 0) {
      _health = 0;
      destroyItself();
    }
  }

  void heal(int amount) {
    _health += amount;
  }

  void setHealth(int amount) {
    if (amount < 0) {
      throw ArgumentError("Health cannot be negative");
    }
    _health = amount;
  }

  int get health => _health;

  void destroyItself();
}