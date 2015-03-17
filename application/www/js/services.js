angular.module('andy.services', ['ngResource'])
.service('geoCodingService', geoCoding)
.service('geoLocationService', geoLocation)
.service('weatherService', weather);

geoCoding.$inject = ['$resource'];

function geoCoding ($resource) {
  var apiUrl = 'http://nominatim.openstreetmap.org/reverse';
  var service = {};

  service.resource = $resource(apiUrl, {
    format: 'json',
    callback: 'json_callback'
  }, {
    getAddress: {
      method: 'GET'
    }
  });

  service.getAddress = function (data) {
    return this.resource.getAddress(data).$promise;
  }

  return service;
}

geoLocation.$inject = ['$q'];

function geoLocation ($q) {
  var service = {};

  service.getCurrentPosition = function () {
    return $q(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position);
      }, function (error) {
        reject(error);
      });
    });
  }

  return service;
}

weather.$inject = ['$resource'];
function weather ($resource) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  var service = {};

  service.resource = $resource(apiUrl, {
    units: 'metric'
  }, {
    getWeather: {
      method: 'GET'
    }
  });

  service.getWeather = function (data) {
    return this.resource.getWeather(data).$promise;
  }

  return service;
}
