angular.module('andy.services', ['ngResource'])
.service('geocodingService', geoCoding);

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
