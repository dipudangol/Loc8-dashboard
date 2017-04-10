angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function(res) {
          console.log(res)
          // toastr.success('You have successfully signed in!');
          $location.path('/home');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          console.log(res,"<><><><><><>")
          toastr.success('You have successfully signed in with ' + provider + '!');
          $location.path('/');
        })
        .catch(function(error) {
          if (error.message) {
            // Satellizer promise reject error.
            toastr.error(error.message);
          } else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status);
          } else {
            toastr.error(error);
            console.log(error.message);
          }
        });
    };
  });
