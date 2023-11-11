import 'damage.dart';

mixin Health {
  int _health = 1;

  void takeDamage(Damage damage) {
    _health -= damage.amount;
    if (_health <= 0) {
      _health = 0;
      destroyItself();
    }
  }

  void heal(int amount) {
    _health += amount;
  }

  int get health => _health;

  void destroyItself();
}