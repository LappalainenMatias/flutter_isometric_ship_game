import 'damage.dart';

mixin Health {
  int _health = 5;

  void takeDamage(Damage damage) {
    _health -= damage.amount;
    if (_health < 0) {
      _health = 0;
    }
  }

  void heal(int amount) {
    _health += amount;
  }

  int get health => _health;
}