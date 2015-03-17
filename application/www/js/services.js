angular.module('andy.services', ['ngResource'])
.service('geoCodingService', geoCoding)
.service('geoLocationService', geoLocation);

geoCoding.$inject = ['$resource'];

function geoCoding ($resource) {
  var apiURl = 'http://nominatim.openstreetmap.org/reverse';
  var service = {};

  service.resource = $resource(apiURl, {
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
