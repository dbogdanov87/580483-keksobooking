'use strict';

(function () {
  window.similarAds = [
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
})();