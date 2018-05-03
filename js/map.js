'use strict';

var ESC_KEYCODE = 27;
var PRICE_ADD_INFO = '₽/ночь';

var similarAds = [
  {
    'author': {'avatar': 'img/avatars/user01.png'},
    'offer': {
      'title': 'Большая уютная квартира',
      'address': '750, 400',
      'price': 2000,
      'type': 'flat',
      'rooms': 1,
      'guests': 2,
      'checkin': '12:00',
      'checkout': '14:00',
      'features': ['wifi', 'dishwasher', 'parking'],
      'description': 'Это уютная квартира, есть Интернет, телевизор, микроволновка,' +
        ' стиральная машинка. Возле дома находятся многочисленные магазины,' +
        ' поэтому от голода не умрете :))',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

    'location': {
      'x': 330,
      'y': 250
    }
  },
  {
    'author': {'avatar': 'img/avatars/user02.png'},
    'offer': {
      'title': 'Маленькая неуютная квартира',
      'address': '700, 350',
      'price': 5000,
      'type': 'flat',
      'rooms': 2,
      'guests': 4,
      'checkin': '13:00',
      'checkout': '14:00',
      'features': ['parking', 'washer', 'elevator', 'conditioner'],
      'description': 'У нас хорошая вентиляция, а если еще окно приоткрыть,' +
        ' то все запахи быстро улетучиваются. Для нас это вообще не проблема',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel2.jpg']
    },

    'location': {
      'x': 400,
      'y': 500
    }
  },
  {
    'author': {'avatar': 'img/avatars/user03.png'},
    'offer': {
      'title': 'Маленький ужасный дворец',
      'address': '350, 350',
      'price': 10000,
      'type': 'house',
      'rooms': 3,
      'guests': 6,
      'checkin': '12:00',
      'checkout': '12:00',
      'features': ['parking', 'washer', 'elevator'],
      'description': 'Здесь заседала Синьория или Совет десяти,' +
        ' размещалась резиденция гонфалоньера справедливости,' +
        ' командующего городским ополчением, квартировали герцоги из семейства Медичи.',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel2.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel1.jpg']
    },

    'location': {
      'x': 500,
      'y': 400
    }
  },
  {
    'author': {'avatar': 'img/avatars/user04.png'},
    'offer': {
      'title': 'Красивый гостевой домик',
      'address': '650, 350',
      'price': 20000,
      'type': 'house',
      'rooms': 4,
      'guests': 6,
      'checkin': '13:00',
      'checkout': '13:00',
      'features': ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      'description': 'Оснащен: двуспальная кровать, кресло качалка, телевизор,камин, туалет, душ.',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel2.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

    'location': {
      'x': 300,
      'y': 400
    }
  },
  {
    'author': {'avatar': 'img/avatars/user05.png'},
    'offer': {
      'title': 'Некрасивый негостеприимный домик',
      'address': '300, 350',
      'price': 15000,
      'type': 'house',
      'rooms': 2,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '14:00',
      'features': ['wifi', 'dishwasher', 'parking', 'conditioner'],
      'description': 'Оснащен: двуспальная кровать, телевизор, стол, стулья, туалет.',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

    'location': {
      'x': 700,
      'y': 350
    }
  },

  {
    'author': {'avatar': 'img/avatars/user06.png'},
    'offer': {
      'title': 'Уютное бунгало далеко от моря',
      'address': '600, 400',
      'price': 50000,
      'type': 'bungalo',
      'rooms': 2,
      'guests': 4,
      'checkin': '12:00',
      'checkout': '12:00',
      'features': ['wifi', 'dishwasher', 'parking', 'conditioner'],
      'description': 'Веранды расположены непосредственно со стороны главного входа,' +
        ' в интерьере используются испанские мотивы, а также множество элементов интерьера' +
        ' из дерева и других материалов, что соответствует стилю крафтсмен',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel2.jpg']
    },

    'location': {
      'x': 600,
      'y': 400
    }
  },
  {
    'author': {'avatar': 'img/avatars/user07.png'},
    'offer': {
      'title': 'Неуютное бунгало по колено в воде',
      'address': '400, 300',
      'price': 35000,
      'type': 'bungalo',
      'rooms': 3,
      'guests': 3,
      'checkin': '13:00',
      'checkout': '12:00',
      'features': ['wifi', 'dishwasher', 'conditioner'],
      'description': 'Террасы у таких бунгало окружают стенами, а крыши строят низкими либо' +
        ' совсем плоскими. Также при отделке используют декоративные кованые решётки на арочных' +
        ' окнах и такие же перила. Входные двери часто резные деревянные.',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel2.jpg']
    },

    'location': {
      'x': 300,
      'y': 300
    }
  },

  {
    'author': {'avatar': 'img/avatars/user08.png'},
    'offer': {
      'title': 'Уютное бунгало далеко от моря',
      'address': '500, 300',
      'price': 100000,
      'type': 'bungalo',
      'rooms': 4,
      'guests': 8,
      'checkin': '12:00',
      'checkout': '14:00',
      'features': ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      'description': 'У второго этажа может быть другой владелец, поэтому приобретать' +
        ' дом в надо с оглядкой на эту особенность жилья.',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel2.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
        'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

    'location': {
      'x': 550,
      'y': 300
    }
  }
];

var disabledOrEnabledFieldSet = function (flag) {
  var all = document.querySelectorAll('fieldset');
  for (var l = 0; l < all.length; l++) {
    all[l].disabled = flag;
  }
};

disabledOrEnabledFieldSet(true);

var enableAdFormAndFields = function () {
  var adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  disabledOrEnabledFieldSet(false);
};

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var divPins = document.querySelector('.map__pins');
var map = document.querySelector('.map');
var pin = document.querySelector('.map__pin');

var createPin = function (object, index) {
  var elementPin = pin.cloneNode(true);
  elementPin.style.left = object.location.x + 'px';
  elementPin.style.top = object.location.y + 'px';
  elementPin.querySelector('img').src = object.author.avatar;
  elementPin.querySelector('img').alt = object.offer.title;
  elementPin.setAttribute('value', index);
  return elementPin;
};

var fragment = document.createDocumentFragment();
var renderPins = function () {
  for (var i = 0; i < similarAds.length; i++) {
    fragment.appendChild(createPin(similarAds[i], i));
  }
  divPins.appendChild(fragment);
};

var createPopup = function (object) {
  closePopup();
  var popup = document.querySelector('#element-template')
      .content.querySelector('.map__card').cloneNode(true);
  popup.querySelector('.popup__avatar').src = object.author.avatar;
  popup.querySelector('.popup__title').textContent = object.offer.title;
  popup.querySelector('.popup__text--address').textContent = object.offer.address;
  popup.querySelector('.popup__text--price').textContent = object.offer.price + PRICE_ADD_INFO;
  popup.querySelector('.popup__type').textContent = object.offer.type;
  popup.querySelector('.popup__text--capacity').textContent = object.offer.rooms +
    ' комнаты для ' + object.offer.guests + ' гостей';
  popup.querySelector('.popup__text--time').textContent = 'Заезд после ' +
    object.offer.checkin + ', выезд до ' + object.offer.checkout;
  // удаляем все feature
  popup.querySelector('.popup__features').innerHTML = '';
  // добавляем feature автора
  for (var j = 0; j < object.offer.features.length; j++) {
    var features = makeElement('li', 'popup__feature');
    features.classList.add('popup__feature--' + object.offer.features[j]);
    popup.querySelector('.popup__features').appendChild(features);
  }
  popup.querySelector('.popup__description').textContent = object.offer.description;
  // добавляем картиники и пути к ним
  var photos = popup.querySelector('.popup__photos');
  for (var k = 0; k < object.offer.photos.length; k++) {
    var photo = popup.querySelector('.popup__photo').cloneNode();
    // на первом шаге удаляем все img
    if (k === 0) {
      photos.innerHTML = '';
    }
    photos.appendChild(photo);
    popup.querySelector('.popup__photo').src = object.offer.photos[k];
  }
  return popup;
};

var renderPopup = function (object) {
  fragment.appendChild(createPopup(object));
  divPins.appendChild(fragment);
};

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

// отрывает форму для редактирования, рендерит пины и вешает на них обработчики
var onStartButtonMapPinMoseUp = function (evt) {
  map.classList.remove('map--faded');
  enableAdFormAndFields();
  document.querySelector('#address').value = evt.x + ', ' + evt.y;
  renderPins();
  var buttonPins = document.querySelectorAll('.map__pin');
  for (var g = 0; g < buttonPins.length; g++) {
    buttonPins[g].addEventListener('click', onPinClick);
  }
};
pin.addEventListener('mouseup', onStartButtonMapPinMoseUp);

// при клике на пин отображаем попап, если есть value у пина
var onPinClick = function (evt) {
  pin.removeEventListener('mouseup', onStartButtonMapPinMoseUp);
  var valueTarget = evt.currentTarget.getAttribute('value');
  if (valueTarget) {
    renderPopup(similarAds[valueTarget]);
    onClosePopupClick();
  }
};

map.classList.remove('map--faded');
var userFormElement = document.querySelector('.notice');
var typeSelectElement = userFormElement.querySelector('#type');
var priceInputElement = userFormElement.querySelector('#price');
var addressInputElement = userFormElement.querySelector('#address');
var timeInSelectElement = userFormElement.querySelector('#timein');
var timeOutSelectElement = userFormElement.querySelector('#timeout');
var roomsSelectElement = userFormElement.querySelector('#room_number');
var capacitySelectElement = userFormElement.querySelector('#capacity');

var capacityOptionsElements = capacitySelectElement.querySelectorAll('option');

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
