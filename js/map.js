'use strict';

var ESC_KEYCODE = 27;
var TIMEOUT_MESSAGES = 5000;

var closePopup = function () {
  var popupElement = document.querySelector('.map__card');
  if (popupElement) {
    popupElement.remove();
  }
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onClosePopupClick = function () {
  var closePopupElement = document.querySelector('.popup__close');
  closePopupElement.addEventListener('click', function () {
    closePopup();
  });
  document.addEventListener('keydown', onPopupEscPress);
};

var disabledOrEnabledFieldSet = function (flag) {
  var all = document.querySelectorAll('fieldset');
  for (var l = 0; l < all.length; l++) {
    all[l].disabled = flag;
  }
};

disabledOrEnabledFieldSet(true);

var adForm = document.querySelector('.ad-form');
var enableAdFormAndFields = function () {
  adForm.classList.remove('ad-form--disabled');
  disabledOrEnabledFieldSet(false);
};

var disableAdFormAndFields = function () {
  adForm.classList.add('ad-form--disabled');
  disabledOrEnabledFieldSet(true);
};

var divPins = document.querySelector('.map__pins');
var map = document.querySelector('.map');
var mainPin = document.querySelector('.map__pin--main');

var fragment = document.createDocumentFragment();

var renderPins = function (listPins) {
  for (var i = 0; i < listPins.length; i++) {
    fragment.appendChild(window.createPin(listPins[i], i));
  }
  divPins.appendChild(fragment);
};

var renderPopup = function (object) {
  fragment.appendChild(window.createPopup(object));
  divPins.appendChild(fragment);
};

// похожие объявления с сервера
var similarAds;

var onLoadSuccess = function (data) {
  similarAds = data;
  renderPins(data);
  var buttonPins = document.querySelectorAll('.pin');
  for (var g = 0; g < buttonPins.length; g++) {
    buttonPins[g].addEventListener('click', onPinClick);
  }
};

var onLoadError = function (textError) {
  window.utils.createDivWithErrorMessage(textError);
  map.classList.add('map--faded');
  disabledOrEnabledFieldSet(true);
  setTimeout(removeErrorMessages, TIMEOUT_MESSAGES);
};

// отрывает форму для редактирования, рендерит пины и вешает на них обработчики
var onStartButtonMapPinMoseUp = function () {
  window.backend.loadData(onLoadSuccess, onLoadError);
  map.classList.remove('map--faded');
  enableAdFormAndFields();
};
mainPin.addEventListener('mouseup', onStartButtonMapPinMoseUp);

// при клике на пин отображаем попап, если есть value у пина
var onPinClick = function (evt) {
  mainPin.removeEventListener('mouseup', onStartButtonMapPinMoseUp);
  var valueTarget = evt.currentTarget.getAttribute('value');
  if (valueTarget) {
    closePopup();
    renderPopup(similarAds[valueTarget]);
    onClosePopupClick();
  }
};

var removePins = function () {
  var createdPins = document.querySelectorAll('.pin');
  createdPins.forEach(function (pinForRemove) {
    pinForRemove.remove();
  });
};

// принимает строку вида - '300, 200'
var setOriginalLocationMainPin = function (address) {
  var addressLocation = address.split(', ');
  mainPin.style.left = addressLocation[0] + 'px';
  mainPin.style.top = addressLocation[1] + 'px';
};

var addressMainPin = window.utils.getMainPinPosition();

document.querySelector('.ad-form__reset').addEventListener('click', function () {
  adForm.reset();
  window.form.changeMinPriceByTypeHousing();
  window.form.synchronizesRoomsWithCapacity();
  window.utils.setAddress(addressMainPin);
  setOriginalLocationMainPin(addressMainPin);
  removePins();
  closePopup();
  map.classList.add('map--faded');
  mainPin.addEventListener('mouseup', onStartButtonMapPinMoseUp);
  disableAdFormAndFields();
});

mainPin.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    var pinLimitsCoords = {
      y: {maxTop: 150,
        maxBottom: 500
      },
      x: {maxLeft: 0,
        maxRight: map.clientWidth - mainPin.offsetWidth // ширина окна мапы - ширина пина
      }
    };

    mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
    mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
    // если высота поднятия пина больше ограничения, то берем ограничение
    if (parseInt(mainPin.style.top, 10) < pinLimitsCoords.y.maxTop) {
      mainPin.style.top = pinLimitsCoords.y.maxTop + 'px';
      // если высота опускания пина меньше ограничения, то берем ограничение
    } else if (parseInt(mainPin.style.top, 10) > pinLimitsCoords.y.maxBottom) {
      mainPin.style.top = pinLimitsCoords.y.maxBottom + 'px';
    }
    // если пытаемся вывести за левую границу мапы, то выставляем ограничение
    if (parseInt(mainPin.style.left, 10) < pinLimitsCoords.x.maxLeft) {
      mainPin.style.left = pinLimitsCoords.x.maxLeft + 'px';
      // если пытаемся вывести за правую границу, то выставляем ограничение
    } else if (parseInt(mainPin.style.left, 10) > pinLimitsCoords.x.maxRight) {
      mainPin.style.left = pinLimitsCoords.x.maxRight + 'px';
    }
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    window.utils.setAddress(window.utils.getMainPinPosition());
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

var messageSuccess = document.querySelector('.success');

var hideSuccessMessages = function () {
  messageSuccess.classList.add('hidden');
};

var removeErrorMessages = function () {
  document.querySelector('.error').remove();
};

var uploadSuccess = function () {
  adForm.reset();
  window.utils.setAddress(addressMainPin);
  window.form.changeMinPriceByTypeHousing();
  window.form.synchronizesRoomsWithCapacity();
  messageSuccess.classList.remove('hidden');
  setTimeout(hideSuccessMessages, TIMEOUT_MESSAGES);
};

var uploadError = function (textError) {
  window.utils.createDivWithErrorMessage(textError);
  setTimeout(removeErrorMessages, TIMEOUT_MESSAGES);
};

adForm.addEventListener('submit', function (evt) {
  window.backend.uploadData(new FormData(adForm), uploadSuccess, uploadError);
  evt.preventDefault();
});
