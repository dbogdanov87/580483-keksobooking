'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');
  window.createPin = function (object, index) {
    var elementPin = mainPin.cloneNode(true);
    elementPin.querySelector('svg').remove();
    elementPin.classList.remove('map__pin--main');
    elementPin.classList.add('pin');
    elementPin.style.left = object.location.x + 'px';
    elementPin.style.top = object.location.y + 'px';
    elementPin.querySelector('img').src = object.author.avatar;
    elementPin.querySelector('img').alt = object.offer.title;
    elementPin.setAttribute('value', index);
    return elementPin;
  };
})();
