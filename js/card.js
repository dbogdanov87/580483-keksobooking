'use strict';

(function () {
  var PRICE_ADD_INFO = '₽/ночь';

  var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
  };
  window.createPopup = function (object) {
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
})();
