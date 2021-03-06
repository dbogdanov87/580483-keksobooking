'use strict';

(function () {
  var TIMEOUT_MESSAGES = 5000;
  var INTERVAL_RATTLING = 500;

  var disabledOrEnabledFieldSet = function (flag) {
    var allFieldSet = document.querySelectorAll('fieldset');
    allFieldSet.forEach(function (field) {
      field.disabled = flag;
    });
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

  var map = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');

  // похожие объявления с сервера
  var similarAds;
  // похожие объявления с сервера с ограничением COUNT_RENDER_PINS
  var limitedFilteredSimilarAds;

  var onLoadSuccess = function (data) {
    similarAds = data;
    limitedFilteredSimilarAds = window.utils.trimData(data, window.constants.other.COUNT_RENDER_PINS);
    window.pin.renderPins(limitedFilteredSimilarAds);
  };

  var onLoadError = function (textError) {
    window.utils.createDivWithErrorMessage(textError);
    map.classList.add('map--faded');
    disabledOrEnabledFieldSet(true);
    setTimeout(removeErrorMessages, TIMEOUT_MESSAGES);
  };

  var isClickOnMainPin;
  var onStartButtonMapPinMoseDown = function () {
    isClickOnMainPin = true;
  };
  mainPin.addEventListener('mousedown', onStartButtonMapPinMoseDown);

  var onStartButtonMapPinMoseUp = function () {
    if (isClickOnMainPin) {
      window.backend.loadData(onLoadSuccess, onLoadError);
      map.classList.remove('map--faded');
      enableAdFormAndFields();
      mainPin.removeEventListener('mousedown', onStartButtonMapPinMoseDown);
      document.removeEventListener('mouseup', onStartButtonMapPinMoseUp);
    }
  };

  document.addEventListener('mouseup', onStartButtonMapPinMoseUp);

  var getOriginalLocationMainPin = function () {
    return {
      x: mainPin.offsetLeft,
      y: mainPin.offsetTop
    };
  };

  var originalLocationMainPin = getOriginalLocationMainPin();

  // принимает объект вида - coords {x: 300, y: 200}
  var setOriginalLocationMainPin = function () {
    mainPin.style.left = originalLocationMainPin.x + 'px';
    mainPin.style.top = originalLocationMainPin.y + 'px';
  };

  var addressOriginalTip = window.utils.getMainPinPositionTip();

  var resetsPageToOriginalState = function () {
    adForm.reset();
    window.form.changeMinPriceByTypeHousing();
    window.form.synchronizesRoomsWithCapacity();
    window.utils.setAddress(addressOriginalTip);
    setOriginalLocationMainPin(getOriginalLocationMainPin());
    window.pin.removePins();
    window.utils.closePopup();
    map.classList.add('map--faded');
    mainPin.addEventListener('mouseup', onStartButtonMapPinMoseUp);
    disableAdFormAndFields();
  };

  document.querySelector('.ad-form__reset').addEventListener('click', function () {
    resetsPageToOriginalState();
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
        y: {
          maxTop: 150 - window.constants.sizePin.PIN_HEIGHT_WITH_TIP,
          maxBottom: 500 - window.constants.sizePin.PIN_HEIGHT_WITH_TIP
        },
        x: {
          maxLeft: -window.constants.sizePin.HALF_PIN,
          maxRight: map.clientWidth - window.constants.sizePin.HALF_PIN
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
      window.utils.setAddress(window.utils.getMainPinPositionTip());
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
    resetsPageToOriginalState();
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

  var lastTimeout;

  var debounce = function (callback) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(callback, INTERVAL_RATTLING);
  };

  var elementsMapFiltersFrom = document.querySelector('.map__filters');
  elementsMapFiltersFrom.addEventListener('change', function () {
    debounce(window.onChangeFilter(similarAds, limitedFilteredSimilarAds));
  });
})();
