'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');
  var HEIGHT_TIP = 22;

  window.constants = {
    Keycode: {
      ESC: 27
    },
    other: {
      COUNT_RENDER_PINS: 5
    },
    sizePin: {
      HEIGHT_TIP: 22,
      HALF_PIN: parseInt((mainPin.clientWidth / 2), 10),
      PIN_HEIGHT_WITH_TIP: mainPin.clientHeight + HEIGHT_TIP
    }
  };
})();
