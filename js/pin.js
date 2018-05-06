'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');
  var divPins = document.querySelector('.map__pins');

  var fragment = document.createDocumentFragment();
  var similarAds;
  window.pin = {
    createPin: function (object, index) {
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
    },
    onPinClick: function (evt) {
      var valueTarget = evt.currentTarget.getAttribute('value');
      if (valueTarget) {
        window.utils.closePopup();
        window.card.renderPopup(similarAds[valueTarget]);
        window.utils.onClosePopupClick();
      }
    },
    renderPins: function (listObjects) {
      similarAds = listObjects;
      for (var i = 0; i < listObjects.length; i++) {
        fragment.appendChild(window.pin.createPin(listObjects[i], i));
      }
      divPins.appendChild(fragment);
      var buttonPins = document.querySelectorAll('.pin');
      for (var g = 0; g < buttonPins.length; g++) {
        buttonPins[g].addEventListener('click', window.pin.onPinClick);
      }
    }
  };
})();
