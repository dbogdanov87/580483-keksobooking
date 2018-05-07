'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');
  var HEIGHT_TIP = 22;
  var HALF_PIN = parseInt((mainPin.clientWidth / 2), 10);
  var PIN_HEIGHT_WITH_TIP = mainPin.clientHeight + HEIGHT_TIP;
  var addressInputElement = document.querySelector('#address');

  window.utils = {
    getMainPinPositionTip: function () {
      return {
        x: mainPin.offsetLeft + HALF_PIN,
        y: mainPin.offsetTop + PIN_HEIGHT_WITH_TIP
      };
    },
    makeElement: function (tagName, className, text) {
      var element = document.createElement(tagName);
      element.classList.add(className);
      if (text) {
        element.textContent = text;
      }
      return element;
    },
    closePopup: function () {
      var popupElement = document.querySelector('.map__card');
      if (popupElement) {
        popupElement.remove();
      }
    },
    createDivWithErrorMessage: function (textError) {
      var elementErrorMessage = window.utils.makeElement('div', 'error', textError);
      elementErrorMessage.style = 'z-index: 10; top: 50%; left: 50%; margin-top: -50px; ' +
        'margin-left: -150px; padding: 10px 10px 20px; background-color: #ffffff;' +
        ' border: 2px solid blue;';
      elementErrorMessage.style.textAlign = 'center';
      elementErrorMessage.style.position = 'fixed';
      elementErrorMessage.style.width = 'auto';
      elementErrorMessage.style.fontSize = '32px';
      elementErrorMessage.style.borderRadius = '5px';
      elementErrorMessage.style.backgroundColor = '#ffffff';
      document.body.insertAdjacentElement('afterbegin', elementErrorMessage);
    },
    onPopupEscPress: function (evt) {
      if (evt.keyCode === window.constants.Keycode.ESC) {
        window.utils.closePopup();
      }
    },

    onClosePopupClick: function () {
      var closePopupElement = document.querySelector('.popup__close');
      closePopupElement.addEventListener('click', function () {
        window.utils.closePopup();
      });
      document.addEventListener('keydown', window.utils.onPopupEscPress);
    },
    removePins: function () {
      var createdPins = document.querySelectorAll('.pin');
      createdPins.forEach(function (pinForRemove) {
        pinForRemove.remove();
      });
    },

    setAddress: function (coords) {
      addressInputElement.value = coords.x + ', ' + coords.y;
    },
    trimData: function (data, limit) {
      return data.slice(0, limit);
    }
  };
})();
