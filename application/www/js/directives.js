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
  scope.shoppingList = [{value: '3 apples', editMode: false}];
  scope.editMode = false;

  scope.addShoppingListItem = function () {
    var shoppingItem = {
      editMode: false,
      value: scope.itemInput
    };

    scope.shoppingList.push(shoppingItem);
    scope.itemInput = '';
  };

  scope.clearShoppingList = function () {
    scope.shoppingList = [];
  };

  scope.editItem = function (item) {
    item.editMode = true;
  };

  scope.closeEditMode = function (item) {
    item.editMode = false;
  };
}
