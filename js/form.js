'use strict';

(function () {

  var VALUE_NOT_FOR_GUESTS = '100';
  var INDEX_NOT_FOR_GUESTS = '3';

  var userFormElement = document.querySelector('.notice');
  var typeSelectElement = userFormElement.querySelector('#type');
  var priceInputElement = userFormElement.querySelector('#price');
  var timeInSelectElement = userFormElement.querySelector('#timein');
  var timeOutSelectElement = userFormElement.querySelector('#timeout');
  var roomsSelectElement = userFormElement.querySelector('#room_number');
  var capacitySelectElement = userFormElement.querySelector('#capacity');

  var capacityOptionsElements = capacitySelectElement.querySelectorAll('option');

  var addressMainPin = window.utils.getMainPinPosition();
  window.utils.setAddress(addressMainPin);

  var synchronizesSelectElementsValue = function (changedSelect, syncedSelect) {
    var selectedValue = changedSelect.options[changedSelect.selectedIndex].value;

    for (var i = 0; i < syncedSelect.length; i += 1) {
      if (syncedSelect[i].value === selectedValue) {
        syncedSelect[i].selected = true;
        break;
      }
    }
  };

  timeInSelectElement.addEventListener('change', function () {
    synchronizesSelectElementsValue(timeInSelectElement, timeOutSelectElement);
  });

  timeOutSelectElement.addEventListener('change', function () {
    synchronizesSelectElementsValue(timeOutSelectElement, timeInSelectElement);
  });

  var minPriceHousing = {
    bungalo: '0',
    flat: '1000',
    house: '5000',
    palace: '10000'};

  var changeMinPriceByTypeHousing = function () {
    var selectedType = typeSelectElement.options[typeSelectElement.selectedIndex].value;
    var selectedPrice = minPriceHousing[selectedType];

    priceInputElement.min = selectedPrice;
    priceInputElement.placeholder = selectedPrice;
  };

  typeSelectElement.addEventListener('change', function () {
    changeMinPriceByTypeHousing();
  });

  var disableLimitCapacity = function () {
    var selectedRoom = roomsSelectElement.options[roomsSelectElement.selectedIndex].value;
    capacityOptionsElements.forEach(function (option) {
      option.disabled = true;
    });
    if (selectedRoom === VALUE_NOT_FOR_GUESTS) {
      capacityOptionsElements[INDEX_NOT_FOR_GUESTS].disabled = false;
    } else {
      capacityOptionsElements.forEach(function (option) {
        var optionNumber = parseInt(option.value, 10);
        if (optionNumber <= parseInt(selectedRoom, 10) && optionNumber !== 0) {
          option.disabled = false;
        }
      });
    }
  };

  var synchronizesRoomsWithCapacity = function () {
    // выставить не для гостей, если выбрано кол-во комнат - 100, иначе синхронизируем
    var roomOptionValue = roomsSelectElement.options[roomsSelectElement.selectedIndex].value;
    if (roomOptionValue === VALUE_NOT_FOR_GUESTS) {
      var optionNotForGuests = capacitySelectElement.querySelector('option[value="0"]');
      optionNotForGuests.selected = true;
    } else {
      synchronizesSelectElementsValue(roomsSelectElement, capacitySelectElement);
    }
    disableLimitCapacity();
  };

  roomsSelectElement.addEventListener('change', function () {
    synchronizesRoomsWithCapacity(roomsSelectElement, capacitySelectElement);
  });

  changeMinPriceByTypeHousing();
  synchronizesRoomsWithCapacity();
})();
