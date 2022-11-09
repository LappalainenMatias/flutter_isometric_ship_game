import 'package:flutter/cupertino.dart';

class PlayerModel extends ChangeNotifier {
  var _x = 0;
  var _y = 0;

  set x(value) {
    _x = value;
    notifyListeners();
  }

  set y(value) {
    _y = value;
    notifyListeners();
  }

  get y => _y;

  get x => _x;
}
