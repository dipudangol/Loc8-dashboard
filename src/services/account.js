angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('http://192.168.100.37:5000/profile');
      },
      updateProfile: function(profileData) {
        return $http.put('http://192.168.100.37:5000/profile', profileData);
      }
    };
  });