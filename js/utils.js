'use strict';

(function () {
  var addressInputElement = document.querySelector('#address');
  var mainPin = document.querySelector('.map__pin--main');
  window.utils = {
    setAddress: function (address) {
      addressInputElement.value = address;
    },
    getMainPinPosition: function () {
      return mainPin.offsetLeft + ', ' + mainPin.offsetTop;
    }
  };
})();
