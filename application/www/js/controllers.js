angular.module('andy.controllers', [])
.controller('AppCtrl', AppCtrl)
.controller('LoginCtrl', LoginCtrl);

// Application Controller
AppCtrl.$inject = ['$scope', '$state', 'OpenFB'];

function AppCtrl ($scope, $state, OpenFB) {
  $scope.fbLogout = function () {
    OpenFB.logout();
    $state.go('login');
  }

  $scope.fbRevokePermissions = function () {
    function success () {
      $state.go('login');
    }

    function error (error) {
      alert('An error has occurred', error);
    }

    OpenFB.revokePermissions().then(success).catch(error);
  }
}

// Login Controller
LoginCtrl.$inject = ['$scope', '$state', 'OpenFB'];

function LoginCtrl ($scope, $state, OpenFB) {
  $scope.fbLogin = function () {
    OpenFB.login('email')
      .then(function(response) {
          console.log('Facebook login succeeded');
          $state.go('app.home');
      })
      .catch(function () {
        alert('Facebook login failed');
      });
  }
}
