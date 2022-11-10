import 'package:flutter/cupertino.dart';

class PlayerModel extends ChangeNotifier {
  var _visibility = 2;
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


  set visibility(value) {
    _visibility = value;
    notifyListeners();
  }

  get y => _y;

  get x => _x;

  get visibility => _visibility;
}
