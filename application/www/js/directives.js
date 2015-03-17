angular.module('andy.directives', [])

.directive('andyShoppingList', shoppingList)
.directive('andyWeather', andyWeather)
.directive('andyWeatherLocation', andyWeatherLocation)
.directive('andyCard', andyCard);

function andyCard () {
  var directive = {
      templateUrl: 'templates/partials/card.html',
      restrict: 'E',
      replace: true,
      link: link
  };

  function link (scope, element) {
    scope.toggleFlip = function () {
      element[0].querySelector('.flip-wrapper').classList.toggle('flip');
    }
  }

  return directive;
}

function shoppingList () {
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/partials/shopping-list.html',
    scope: {},
    link: shoppingListLink
  };

  function shoppingListLink (scope, element) {
    scope.toggleFlip = function () {
      element[0].querySelector('.flip-wrapper').classList.toggle('flip');
    }

    scope.shoppingList = [];
    scope.editMode = false;

    var quantityRegex = /(\d+)\s*(\D+)/;

    scope.addShoppingListItem = function () {
      var quantity = extractQuantity(scope.itemInput);
      var product = extractProduct(scope.itemInput);
      var shoppingItem = {
        editMode: false,
        product: product,
        quantity: quantity
      };

      scope.shoppingList.push(shoppingItem);
      scope.itemInput = '';
    };

    scope.clearShoppingList = function () {
      scope.shoppingList = [];
    };

    scope.clearItem = function (index) {
      scope.shoppingList.pop(index);
    }

    scope.editItem = function (item) {
      item.editMode = true;
    };

    scope.closeEditMode = function (item) {
      item.editMode = false;
    };

    function extractQuantity(string) {
      return parseInt(string.match(quantityRegex)[1], 10);
    }

    function extractProduct(string) {
      return string.match(quantityRegex)[2];
    }
  }

  return directive;
}

function andyWeather () {
  var directive = {
    templateUrl: 'templates/partials/weather.html',
    restrict: 'E',
    replace: true,
    link: weatherLink
  };

  function weatherLink () {
    console.log('Weather');
  }

  return directive;
}

andyWeatherLocation.$inject = ['geoLocationService', 'geoCodingService'];

function andyWeatherLocation (geoLocationService, geoCodingService) {
  var directive = {
    templateUrl: 'templates/partials/weather-location.html',
    restrict: 'E',
    replace: true,
    link: weatherLocationLink
  };

  function weatherLocationLink (scope) {
    scope.location = 'Finding location...';

    var params = {
      zoom:18,
      addressdetails:1
    };

    geoLocationService.getCurrentPosition().then(function (data) {
      params.lat = data.coords.latitude;
      params.lon = data.coords.longitude;

      geoCodingService.getAddress(params).then(function (data) {
        scope.location = data.address.city;
      }, function (error) {
        console.log(error);
      })

    }, function (error) {
      console.error(error);
    });

  }

  return directive;
}
