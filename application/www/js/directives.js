angular.module('andy.directives', [])

.directive('andyShoppingList', shoppingList);

function shoppingList () {
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/partials/shopping-list.html',
    scope: {},
    link: shoppingListLink
  };

  return directive;
}

function shoppingListLink (scope, element) {
  scope.shoppingList = [];

  scope.addShoppingListItem = function () {
    scope.shoppingList.push(scope.itemInput);
    scope.itemInput = '';
  }

  scope.clearShoppingList = function () {
    scope.shoppingList = [];
  }

  scope.editItem = function () {
    console.log('edit item');
  }
}
