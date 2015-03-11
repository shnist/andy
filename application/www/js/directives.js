angular.module('andy.directives', [])

.directive('andyCard', andyCard);

function andyCard () {
  var directive = {
      templateUrl: 'templates/partials/card.html',
      restrict: 'E',
      replace: true,
      link: link
  };

  function link (scope) {
    scope.toggleFlip = function () {
      document.querySelector('.flip-wrapper').classList.toggle('flip');
    }
  }

  return directive;
}
