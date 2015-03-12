angular.module('andy.controllers', [])

.controller('AppCtrl', AppCtrl)
.controller('LoginCtrl', LoginCtrl);

// Application Controller
AppCtrl.$inject = ['$scope', '$state'];

function AppCtrl ($scope, $state) {
  $scope.fbLogout = function () {
    openFB.logout(function () {
      $state.go('login');
    });
  }
}

// Login Controller
LoginCtrl.$inject = ['$scope', '$state'];

function LoginCtrl ($scope, $state) {
  $scope.fbLogin = function () {
    openFB.login(function(response) {
      if (response.status === 'connected') {
        console.log('Facebook login succeeded');
        $state.go('app.home');
      } else {
        alert('Facebook login failed');
      }
    },
    {
      scope: 'email'
    });
  }
}
