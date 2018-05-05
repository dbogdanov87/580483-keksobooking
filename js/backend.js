'use strict';

(function () {
  var TIMEOUT = 5000;
  var DOWNLOAD_URL = 'https://js.dump.academy/keksobooking/data';
  var UPLOAD_URL = 'https://js.dump.academy/keksobooking';

  var processesResponseFromServer = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа : ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    return xhr;
  };

  window.backend = {
    loadData: function (onSuccess, onError) {
      var response = processesResponseFromServer(onSuccess, onError);
      response.open('GET', DOWNLOAD_URL);
      response.send();
    },
    uploadData: function (data, onSuccess, onError) {
      var response = processesResponseFromServer(onSuccess, onError);
      response.open('POST', UPLOAD_URL);
      response.send(data);
    }
  };
})();
