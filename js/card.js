'use strict';

(function () {
  var PRICE_ADD_INFO = '₽/ночь';

  window.createPopup = function (object) {
    var elementPopup = document.querySelector('#element-template')
        .content.querySelector('.map__card').cloneNode(true);
    elementPopup.querySelector('.popup__avatar').src = object.author.avatar;
    elementPopup.querySelector('.popup__title').textContent = object.offer.title;
    elementPopup.querySelector('.popup__text--address').textContent = object.offer.address;
    elementPopup.querySelector('.popup__text--price').textContent = object.offer.price + PRICE_ADD_INFO;
    elementPopup.querySelector('.popup__type').textContent = object.offer.type;
    elementPopup.querySelector('.popup__text--capacity').textContent = object.offer.rooms +
      ' комнаты для ' + object.offer.guests + ' гостей';
    elementPopup.querySelector('.popup__text--time').textContent = 'Заезд после ' +
      object.offer.checkin + ', выезд до ' + object.offer.checkout;
    // удаляем все feature
    elementPopup.querySelector('.popup__features').innerHTML = '';
    // добавляем feature автора
    for (var j = 0; j < object.offer.features.length; j++) {
      var features = window.utils.makeElement('li', 'popup__feature');
      features.classList.add('popup__feature--' + object.offer.features[j]);
      elementPopup.querySelector('.popup__features').appendChild(features);
    }
    elementPopup.querySelector('.popup__description').textContent = object.offer.description;
    // добавляем картиники и пути к ним
    var photos = elementPopup.querySelector('.popup__photos');
    for (var k = 0; k < object.offer.photos.length; k++) {
      var photo = elementPopup.querySelector('.popup__photo').cloneNode();
      // на первом шаге удаляем все img
      if (k === 0) {
        photos.innerHTML = '';
      }
      photos.appendChild(photo);
      elementPopup.querySelector('.popup__photo').src = object.offer.photos[k];
    }
    return elementPopup;
  };
})();
