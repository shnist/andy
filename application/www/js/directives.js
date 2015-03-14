angular.module('andy.directives', [])

.directive('andyShoppingList', shoppingList)
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
