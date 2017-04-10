
angular.module('MyApp')
  .factory('logout', function($auth) {
    return {
      logoutFunction: function() {
          console.log('qwasa')
       $auth.logout();
      }
    };
  });