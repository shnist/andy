angular.module('andy.directives', [])

.directive('andyCard', andyCard);

function andyCard () {
  var directive = {
      templateUrl: 'templates/partials/card.html',
      restrict: 'E',
      replace: true,
      link: link
  };

  function link (scope, element) {
    scope.flipToBack = function () {
      element.addClass('flip');
    }

    scope.flipToFront = function () {
      element.removeClass('flip');
    }
  }

  return directive;
}
