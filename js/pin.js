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
      listObjects.forEach(function (object, index) {
        fragment.appendChild(window.pin.createPin(object, index));
      });
      divPins.appendChild(fragment);
      var buttonPins = document.querySelectorAll('.pin');
      buttonPins.forEach(function (buttonPin) {
        buttonPin.addEventListener('click', window.pin.onPinClick);
      });
    }
  };
})();
