enum Weapon {
  basicSword
}

extension WeaponExtension on Weapon {
  int get damage {
    switch (this) {
      case Weapon.basicSword:
        return 1;
      default:
        throw Exception("damage not found");
    }
  }

  int get range {
    switch (this) {
      case Weapon.basicSword:
        return 1;
      default:
        throw Exception("range not found");
    }
  }
}