'use strict';

(function () {
  var PRICE_ADD_INFO = '₽/ночь';
  var divPins = document.querySelector('.map__pins');
  var fragment = document.createDocumentFragment();

  window.card = {
    createPopup: function (object) {
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
      var elementPhotos = elementPopup.querySelector('.popup__photos');
      elementPhotos.innerHTML = '';
      for (var k = 0; k < object.offer.photos.length; k++) {
        var elementPhoto = window.utils.makeElement('img', 'popup__photo');
        elementPhoto.src = object.offer.photos[k];
        elementPhoto.style.marginTop = '5px';
        elementPhoto.width = '45';
        elementPhoto.height = '40';
        elementPhoto.alt = 'Фотография жилья';
        elementPhotos.appendChild(elementPhoto);
      }
      return elementPopup;
    },
    renderPopup: function (object) {
      fragment.appendChild(window.card.createPopup(object));
      divPins.appendChild(fragment);
    }
  };
})();
