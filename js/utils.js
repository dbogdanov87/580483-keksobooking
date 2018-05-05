'use strict';

(function () {
  var addressInputElement = document.querySelector('#address');
  var mainPin = document.querySelector('.map__pin--main');
  window.utils = {
    getMainPinPosition: function () {
      return mainPin.offsetLeft + ', ' + mainPin.offsetTop;
    },
    makeElement: function (tagName, className, text) {
      var element = document.createElement(tagName);
      element.classList.add(className);
      if (text) {
        element.textContent = text;
      }
      return element;
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
    setAddress: function (address) {
      addressInputElement.value = address;
    }
  };
})();
